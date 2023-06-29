        // Create a PixiJS Application
        const app = new PIXI.Application();

        // Get the gallery container element
        const galleryContainer = document.getElementById('gallery');

        // Add the PixiJS canvas to the gallery container
        galleryContainer.appendChild(app.view);

        // Create an array of image URLs
        const imageUrls = [
            '/uploads/Bleona/IMGL8979.jpg',
            '/uploads/Martini/IMGL4519.jpg',
            '/uploads/Qifti 1/IMGL0314.jpg',
            '/uploads/Butrint Imeri/IMGL8001.jpg',
            '/uploads/Marketi/CanonCamera2.jpeg',
            '/uploads/Qifti 2/IMGL6848.jpg',
            '/uploads/Erika/IMGL2834.jpg',
            '/uploads/Martini/IMGL4541.jpg',
            '/uploads/Qifti 6/IMGL5142.jpg',
        ];

        // Create an array to store PIXI.Sprite objects
        const sprites = [];

        // Load the images and create PIXI.Sprite objects
        PIXI.Loader.shared.add(imageUrls).load(() => {
            imageUrls.forEach((url) => {
                const texture = PIXI.Texture.from(url);
                texture.baseTexture.on('loaded', () => {
                    const sprite = new PIXI.Sprite(texture);
                    sprite.interactive = true;
                    sprite.on('click', () => showLightbox(url));
                    sprites.push(sprite);
                    app.stage.addChild(sprite);
                });
            });
        });

        // Show the lightbox with the selected image
        function showLightbox(imageSrc) {
            // Clear previous content
            const lightboxContent = document.querySelector('.lightbox-content');
            lightboxContent.innerHTML = '';

            // Create the lightbox image
            const lightboxImage = PIXI.Sprite.from(imageSrc);
            lightboxImage.anchor.set(0.5);
            lightboxImage.position.set(app.screen.width / 2, app.screen.height / 2);
            lightboxImage.scale.set(0.5);

            // Append the image to the lightbox content
            lightboxContent.appendChild(lightboxImage.texture);

            // Show the lightbox
            const lightbox = document.querySelector('.lightbox');
            lightbox.style.display = 'block';
        }

        // Close the lightbox
        function closeLightbox() {
            const lightbox = document.querySelector('.lightbox');
            lightbox.style.display = 'none';
        }

        // Add event listener to close button
        const closeButton = document.querySelector('.close-button');
        closeButton.addEventListener('click', closeLightbox);
// Initialize PixiJS
const app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight });
document.body.appendChild(app.view);

// Load the image
const image = PIXI.Sprite.from('uploads/LiridonQorraj.jpg');
image.anchor.set(0.5);
image.position.set(app.screen.width / 2, app.screen.height / 2);
app.stage.addChild(image);

// Function to maximize the photo
function maximizePhoto() {
  image.scale.set(1);
}

// Function to minimize the photo
function minimizePhoto() {
  image.scale.set(0.5);
}

// Call the functions as needed
maximizePhoto(); // Example: Maximize the photo initially

// Listen to key presses to trigger actions
window.addEventListener('keydown', (event) => {
  if (event.key === '-') {
    minimizePhoto();
  } else if (event.key === '+') {
    maximizePhoto();
  }
});

const app = new PIXI.Application({
    width: window.innerWidth,
    height: 900,
    backgroundColor: 0x000000,
  });
  
  document.getElementById('canvas-container').appendChild(app.view);
  
  // Array of photo paths
  const photoPaths = [
    '/uploads/Bleona/IMGL8979.jpg',
    '/uploads/Qifti 4/IMG_8254.jpg',
    '/uploads/Rina/IMGL9200_fullres.jpg',
  ];
  
  const photos = [];
  
  // Load the images and create photo sprites
  PIXI.Loader.shared.add(photoPaths).load(setup);
  
  function setup() {
    // Create photo sprites
    for (let i = 0; i < photoPaths.length; i++) {
      const photo = new PIXI.Sprite(PIXI.Loader.shared.resources[photoPaths[i]].texture);
      photo.anchor.set(0.5);
      photo.x = app.screen.width / 2;
      photo.y = app.screen.height / 2;
      photo.interactive = true;
      photo.buttonMode = true;
      photo.scale.set(0.3);
  
      // Add dragging functionality to the photo
      photo
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);
  
      photos.push(photo);
      app.stage.addChild(photo);
    }
  }
  
  function onDragStart(event) {
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
  }
  
  function onDragEnd() {
    this.alpha = 1;
    this.dragging = false;
    this.data = null;
  }
  
  function onDragMove() {
    if (this.dragging) {
      const newPosition = this.data.getLocalPosition(this.parent);
      this.x = newPosition.x;
      this.y = newPosition.y;
    }
  }
  
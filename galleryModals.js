  function openModal(folderName) {
    var modal = document.getElementById("myModal");
    var modalGallery = document.getElementById("modalGallery");
    modal.style.display = "block";
  
    // Clear existing content
    modalGallery.innerHTML = "";
  
    // Add images to the modal gallery
    var folderPath = "/uploads/" + folderName + "/";
    var images = [];
  
    if (folderName === "Bleona") {
        images = ["IMGL8979.jpg", "IMGL8952.jpg, IMGL8976.jpg"];
    } else if (folderName === "Martini") {
      images = ["IMGL4519.jpg", "image2.jpg"];
    } else if (folderName === "Qifti 1") {
      images = ["IMGL0314.jpg", "image2.jpg"];
    }
  
    images.forEach(function (image) {
      var imgElement = document.createElement("img");
      imgElement.src = folderPath + image;
      imgElement.className = "modal-image";
      modalGallery.appendChild(imgElement);
    });

    lightGallery(modalGallery, {
        selector: '.modal-image',
        download: false,
        zoom: false,
        share: false,
        fullScreen: false,
        autoplay: false,
      });
      
  }
  
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
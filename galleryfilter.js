// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
    // Get all the filter buttons
    const filterButtons = document.querySelectorAll(".filter-button");
  
    // Attach click event listeners to the filter buttons
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const category = button.dataset.category;
  
        // Handle the "All" category
        if (category === "all") {
          // Show all images
          const images = document.querySelectorAll(".image");
          images.forEach(function (image) {
            image.style.display = "block";
          });
        } else {
          // Hide all images
          const images = document.querySelectorAll(".image");
          images.forEach(function (image) {
            image.style.display = "none";
          });
  
          // Show images matching the selected category
          const filteredImages = document.querySelectorAll("." + category);
          filteredImages.forEach(function (image) {
            image.style.display = "block";
          });
        }
      });
    });
  });
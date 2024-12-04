// Get the modal elements
var modals = document.getElementById("myModal");
var modalImg = document.getElementById("img01");

// Add click event listener to all images with class 'img-thumbnail'
document.querySelectorAll('.image-thumbnail').forEach(function(image) {
  image.onclick = function() {
    modals.style.display = "block";
    modalImg.src = this.src;
    console.log(modals.classList);
  };
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modals.style.display = "none";
};
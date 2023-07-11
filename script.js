const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

function drawCanvas() {
  const headerText = document.getElementById("header-text").value;
  const footerText = document.getElementById("footer-text").value;
  const text = document.getElementById("center-text").value;
  const customImage = document.getElementById("custom-image");

  const file = customImage.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    const image = new Image();
    image.src = event.target.result;
    image.addEventListener("load", function () {
        // Add the image 
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
        //Add the center text
      context.fillStyle = "#000";
      context.font = "24px Arial";
      context.fillText(text, canvas.width / 2, canvas.height / 2);
        // Add header text
      context.fillStyle = "#fff";
      context.font = "18px Arial";
      context.fillText(headerText, canvas.width / 2, 30);
        // Add footer text
      context.fillStyle = "#fff";
      context.font = "18px Arial";
      context.fillText(footerText, canvas.width / 2, canvas.height - 10);
    });
  };

  reader.readAsDataURL(file);
}
// Function to download the canvas as an image
function downloadImage() {
  const dataUrl = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = "canvas-image.png";
  link.click();
}
// Attach event listener to the image input
const imageInput = document.getElementById("custom-image");
imageInput.addEventListener("change", drawCanvas);

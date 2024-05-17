var favicon_images = [
    'pics/Screenshot_2024-05-01_080741-removebg-preview.png',
    'pics/Screenshot_2024-05-01_080528-removebg-preview.png',
    'pics/Screenshot_2024-05-01_080558-removebg-preview.png',
    'pics/Screenshot_2024-05-01_080614-removebg-preview.png',
    'pics/Screenshot_2024-05-01_080630-removebg-preview.png',
    'pics/Screenshot_2024-05-01_080649-removebg-preview.png',
    'pics/Screenshot_2024-05-01_080711-removebg-preview.png',
    'pics/Screenshot_2024-05-01_080727-removebg-preview.png',
    'pics/Screenshot_2024-05-01_080742-removebg-preview.png'
],
image_counter = 0; // To keep track of the current image

setInterval(function() {
// remove current favicon
if(document.querySelector("link[rel='icon']") !== null)
document.querySelector("link[rel='icon']").remove();
if(document.querySelector("link[rel='shortcut icon']") !== null)
document.querySelector("link[rel='shortcut icon']").remove();

// add new favicon image
document.querySelector("head").insertAdjacentHTML('beforeend', '<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');

// If last image then goto first image
// Else go to next image    
if(image_counter == favicon_images.length -1)
image_counter = 1;
else
image_counter++;
}, 300)


function rotate(){
    const stickSpinning = [
        { transform: "rotate(0) " },
        { transform: "rotate(360deg)" },
      ];
      
      const rotateLength = {
        duration: 2000,
        iterations: 1,
      };
      
      const stick = document.querySelector(".rotatae");

      stick.addEventListener("click", () => {
        stick.animate(stickSpinning, rotateLength);
      });

}

  // Carousel
  let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
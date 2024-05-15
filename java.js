
let slideIndex = 1;/*This initializes the slideIndex variable to 1 and calls the showSlides function with slideIndex as its argument to display the first slide. */
showSlides(slideIndex);

function plusSlides(n) {/*This function increments or decrements the slideIndex by the value n and then calls the showSlides function with the updated slideIndex. */
  showSlides(slideIndex += n);// Next/previous controls
}
// Thumbnail image controls
function currentSlide(n) {// just to be in safe zone currently i cant see anything good about it
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i = 1; // loop counter
  let slides = document.getElementsByClassName("mySlides"); //  is assigned the HTML collection of elements with the class name "mySlides". These elements are assumed to be the slides in the slideshow.
  let dots = document.getElementsByClassName("dot"); //  is assigned the HTML collection of elements with the class name "dot". These elements are assumed to be the navigation dots corresponding to each slide.
  if (n > slides.length) {slideIndex = 1}   // check validity of the slide index   
  if (n < 1) {slideIndex = slides.length} // same as above
  for (i = 0; i < slides.length; i++) {// iterates replacing every slide with none so it wont appear
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active1", "");// same as above and replacing every active with none so it is not active anymore
  }
  slides[slideIndex-1].style.display = "block";  // making the current slide visible
  dots[slideIndex-1].className += " active1"; // and current dot class name adding the active attribute after reomving it from every dot
}

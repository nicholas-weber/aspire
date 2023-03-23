let beforeAfterSlideIndex = 0;
showBeforeAfterCarousel();

function showBeforeAfterCarousel() {
  let beforeAfterIndex;
  let beforeAfterSlides = document.getElementsByClassName("before-after-slide");
  for (beforeAfterIndex = 0; beforeAfterIndex < beforeAfterSlides.length; beforeAfterIndex++) {
    beforeAfterSlides[beforeAfterIndex].style.display = "none";
  }
  beforeAfterSlideIndex++;
  if (beforeAfterSlideIndex > beforeAfterSlides.length) {
    beforeAfterSlideIndex = 1;
  }
  beforeAfterSlides[beforeAfterSlideIndex - 1].style.display = "flex";
  setTimeout(showBeforeAfterCarousel, 6000);
}
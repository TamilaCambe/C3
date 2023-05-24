let slideIndex = 1;
let autoShowTimeout;

function showSlides(n) {
  clearTimeout(autoShowTimeout);
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  autoShowTimeout = setTimeout(() => showSlides(slideIndex), 3000);
}

function plusSlides(n) {
  let newIndex = slideIndex + n; // Calcula o novo índice do slide
  let numSlides = document.getElementsByClassName("mySlides").length;
  if (newIndex > numSlides) {
    newIndex = 1;
  } else if (newIndex < 1) {
    newIndex = numSlides;
  }
  slideIndex = newIndex;
  showSlides(newIndex); // Chama a função showSlides com o novo índice
}

document.querySelector(".prev").addEventListener("click", function () {
  plusSlides(-1);
});

document.querySelector(".next").addEventListener("click", function () {
  plusSlides(1);
});

showSlides(slideIndex); // Inicia a apresentação

var slideIndex = 1;
showSlides(slideIndex);

//Controle dos boões de anterior e proximo
function PassarImagens(n) {
  showSlides(slideIndex += n);

  
}

// Controle das imagens
function ImagemAtual(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slides");
  var dots = document.getElementsByClassName("circulo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" ativo", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " ativo";
}

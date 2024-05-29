let slideIndex = 0;

//console.log(widthtam1.matches)
showSlides();

// JavaScript Version
const buttonMenu = document.querySelector("#nav-mobile");
const navMenu = document.querySelector(".nav-menu");

buttonMenu.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("nav-open");
  navMenu.classList.toggle("open-menu");
});

navMenu.addEventListener("click", (e) => {
  e.currentTarget.classList.remove("open-menu");
  buttonMenu.classList.remove("nav-open");
});

function showSlides() {
  let i;

  //widthtam1 = window.matchMedia("(max-width: 700px)");
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  let widthtam1 = window.matchMedia("(max-width: 700px)");
  console.log(widthtam1.matches);

  if (widthtam1.matches) {
    slides[slideIndex - 1].style.display = "grid";
  } else {
    slides[slideIndex - 1].style.display = "block";
  }
  setTimeout(showSlides, 9000); // Cambiar cada 2 segundos (2000 milisegundos)
}

// Función para avanzar o retroceder las diapositivas
/*function plusSlides() {
  showSlides();
}*/

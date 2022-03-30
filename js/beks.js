window.onscroll = () =>{
    if(window.onscrollY > 100) {
        document.querySelector('header').classList.add('active');        
    }else{
        document.querySelector('header').classList.remove('active');
    }
}








const body=document.querySelector("body"),
nav = document.querySelector("nav");
modeToggle = document.querySelector(".dark-light"),
searchToggle = document.querySelector(".searchToggle"),
sidebarClose = document.querySelector(".sidebarClose"),
sidebarOpen = document.querySelector(".sidebarOpen");

modeToggle.addEventListener("click" , () =>{
  modeToggle.classList.toggle("active")
  body.classList.toggle("dark")    
})
searchToggle.addEventListener("click" , () =>{
  searchToggle.classList.toggle("active")
})
sidebarOpen.addEventListener("click", () =>{
  nav.classList.add("active");
})
body.addEventListener("click", e =>{
  let clickedElm=e.target;
  if(!clickedElm.classList.contains("sidebarOpen") && (!clickedElm.classList.contains("menu"))){
    nav.classList.remove("active");
  }
})

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


$(".nig").click(function(){
  var audio = new Audio("audio/click.mp3");
  audio.play();
})



//  Fixed Nav =====================
window.onscroll = function() {myFunction()};

var header = document.getElementById("menuHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("stickyNav");
  } else {
    header.classList.remove("stickyNav");
  }
}

//  Slider =====================
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("bannerSlider");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeDot", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activeDot";
}

//  datePicker =====================
$(document).ready(function(){
  $("#checkin").datepicker({
    dateFormat:"dd MM yy",
    showOn: "button",
    buttonImage: "image/sort-icon.png",
    buttonImageOnly: true,
  })
  .datepicker("setDate", new Date());
  $( ".ui-datepicker-trigger" ).css("cursor","pointer");
  $(".ui-datepicker-trigger").css("margin-top","1.7em");
});

$(document).ready(function(){
  $("#checkout").datepicker({
    dateFormat:"dd MM yy",
    showOn: "button",
    buttonImage: "image/sort-icon.png",
    buttonImageOnly: true,
  })
  .datepicker("setDate", new Date());
  $( ".ui-datepicker-trigger" ).css("cursor","pointer");
  $(".ui-datepicker-trigger").css("margin-top","1.7em");
});

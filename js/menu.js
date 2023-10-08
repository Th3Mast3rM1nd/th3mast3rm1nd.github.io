// Get the menu icon element
const menuIcon = document.getElementById('menu-icon');

// Get the top menu nav element
const topMenuNav = document.querySelector('.top-menu');

// Add an event listener to the menu icon for click
menuIcon.addEventListener('click', () => {
    // Toggle the "active" class on menuIcon and topMenuNav
    menuIcon.classList.toggle('active');
    topMenuNav.classList.toggle('active');
});


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
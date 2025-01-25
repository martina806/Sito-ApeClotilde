//SCROLL BACK TO TOP BUTTON che non va 
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log('Scrolling...')
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } 
  else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



//CAMIO STILE
document.getElementById('changeStyleButton').addEventListener('click', function() {
    var stylesheet = document.getElementById('stylesheet');
    var currentHref = stylesheet.getAttribute('href');
    if (currentHref === '../ALL/storia.css') {
        stylesheet.setAttribute('href', '../ALL/storia_dark.css');
    } else {
        stylesheet.setAttribute('href', '../ALL/storia.css');
    }
});
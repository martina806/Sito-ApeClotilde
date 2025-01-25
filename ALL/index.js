//GALLERIA IMMAGINI

//per tenere traccia dell'immagine corrente - si parte dalla prima
let slideIndex = 1;
showSlides(slideIndex);

//incrementa slideIndex di n che può essere +1 o -1 e richiama showSlide per aggiornare come vengono viste le immagini
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Thumbnail image controls --> imposta lo slideIndex su n e n è la miniatura cliccata
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    //let captionText = document.getElementById("caption");
    
    if (n > slides.length) {
        slideIndex = 1
    } //se n è maggiore del numero di immagini su torna alla prima

    if (n < 1) {
        slideIndex = slides.length
    } //se n<1 si torna all'ultima immagine

    for (i  = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        //Nasconde tutte le immagini impostando display: none per ogni elemento mySlides
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        //rimuove active da tutte le minature
    }

    slides[slideIndex-1].style.display = "block";  //Mostra l'immagine corrispondente all'indice slideIndex
    if (n !== 1) {
        dots[slideIndex-1].className += " active";  //Aggiunge la classe active alla miniatura corrispondente, per indicare visivamente quale immagine è attualmente selezionata
    }
    
}


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
    if (currentHref === '../ALL/index.css') {
        stylesheet.setAttribute('href', '../ALL/home_dark.css');
    } else {
        stylesheet.setAttribute('href', '../ALL/index.css');
    }
});




let slideIndex = 0; 
showSlide(slideIndex); 

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    let captions = document.getElementsByClassName("caption");

    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        captions[i].style.display = "none";
    }

   
    slides[slideIndex].style.display = "flex";
    captions[slideIndex].style.display = "block";
}




$(".input-time").click(function (event) {
    $(".input-time").addClass('hidden');
    $(".timing").removeClass('hidden');
});






$(function () {
    var date = new Date();
    date.setDate(date.getDate());

    $("#datepicker").datepicker({
        minDate: 0,
        maxDate: "+14D"
    });
});

$("#time").timeDropper({
    primaryColor: "#E8C300",
    borderColor: "#E8C300",
    setCurrentTime: false
});


// слайдер

let slideIndex = 1;
let slides = document.querySelectorAll(".item");
let dots = document.querySelectorAll(".slider-dots_item");
showSlides(slideIndex)



/* Основная функция слайдера */
function showSlides(slideIndex) {

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden')
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active')
    }
    slides[slideIndex - 1].classList.remove('hidden')
    dots[slideIndex - 1].classList.add('active')
}

function viewImages() {
    if (slideIndex == slides.length) {
        slideIndex = 0;
    }
    slideIndex++;
    showSlides(slideIndex);
    setTimeout("viewImages()",5000);
} 
viewImages()
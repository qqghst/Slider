const nextBtn = document.querySelector(".fa-angle-right");
const prevBtn = document.querySelector(".fa-angle-left");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".firstPagination");
const numberOfSlides = slides.length;
let slideNumber = 0;

nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    })

    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    })

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

prevBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    })

    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    })

    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});



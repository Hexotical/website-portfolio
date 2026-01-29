let slideIndex = 0
let slideshowInterval;
let slides, dotsContainer, prevBtn, nextBtn;



document.addEventListener('DOMContentLoaded', function() 
{
    slides = document.getElementsByClassName("slide");
    dotsContainer = document.getElementById("dotsContainer");
    prevBtn = document.getElementById("prevBtn");
    nextBtn = document.getElementById("nextBtn");
    createDots();
    showSlides(slideIndex);
    startAutoSlide();

    prevBtn.addEventListener('click', () => changeSlide(-1));
    nextBtn.addEventListener('click', () => changeSlide(1));
});

function createDots()
{
    for (let i = 0; i< slides.length; i++)
    {
        const dot = document.createElement("span");
        dot.className = "dot";
        dot.addEventListener("click", () => currentSlide(i+1));
        dotsContainer.appendChild(dot);
    }
}

function changeSlide(n) 
{
    slideIndex = slideIndex + n
    showSlides(slideIndex)
    resetAutoSlide();
}

function currentSlide(n)
{
    showSlides(slideIndex = n);
    resetAutoSlide();

}

function showSlides(n)
{
    //console.log("slide index", n);
    let dots = document.getElementsByClassName("dot");

    if(n>=slides.length) {slideIndex = 0}
    if(n < 0) {slideIndex = slides.length -1}

    for (let i = 0; i < slides.length; i++)
    {
        slides[i].style.display="none";
    }

    for (let i=0; i<dots.length; i++)
    {
        dots[i].className=dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    if (dots[slideIndex])
    {
        dots[slideIndex].className += " active"
    }
}

function startAutoSlide()
{
    slideShowInterval = setInterval(() => {changeSlide(1);}, 5000);
}

function stopAutoSlide()
{
    clearInterval(slideShowInterval);
}

function resetAutoSlide()
{
    stopAutoSlide();
    startAutoSlide();
}

// Pause on hover (optional)
const slideshowContainer = document.querySelector('.slideshow-container');
if (slideshowContainer) {
    slideshowContainer.addEventListener('mouseenter', stopAutoSlide);
    slideshowContainer.addEventListener('mouseleave', startAutoSlide);
}
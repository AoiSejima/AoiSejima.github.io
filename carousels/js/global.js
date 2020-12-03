window.addEventListener("load", function() {
    
    var carouselSlides = document.querySelectorAll('.carousel-slide');
    var currentSlide = 0;
    var total = carouselSlides.length;
    var nextBtn = document.querySelector('#next-btn');
    var prevBtn = document.querySelector('#prev-btn');

    function showNextSlide() {
        hideAllSlides();
        if(currentSlide === total - 1){
            currentSlide = 0
        }
        else {
            currentSlide++;
        }
        carouselSlides[currentSlide].style.opacity = 1;
        console.log(currentSlide)
    }
 
    function showPrevSlide() {
        hideAllSlides();
        if(currentSlide === 0){
            currentSlide = total - 1
        }
        else {
            currentSlide--;
        }
        carouselSlides[currentSlide].style.opacity = 1;
        console.log(currentSlide)
    }

    function hideAllSlides() {
        carouselSlides.forEach(function(slide){
            slide.style.opacity = 0;
        });
    }

    nextBtn.addEventListener('click',showNextSlide);
    prevBtn.addEventListener('click',showPrevSlide);
});
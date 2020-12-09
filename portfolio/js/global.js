window.addEventListener("load", function() {
    
    var slideShowList = document.querySelectorAll('.slideshow-list');
    var currentSlide = 0;
    var total = slideShowList.length;
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
        slideShowList[currentSlide].style.opacity = 1;
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
        slideShowList[currentSlide].style.opacity = 1;
        console.log(currentSlide)
    }

    function hideAllSlides() {
        slideShowList.forEach(function(slide){
            slide.style.opacity = 0;
        });
    }

    nextBtn.addEventListener('click',showNextSlide);
    prevBtn.addEventListener('click',showPrevSlide);
});
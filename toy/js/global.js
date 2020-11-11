window.addEventListener("load", function() {
    var fish = document.getElementById('fish');

    var button = document.getElementById('button');
    var clicksContainer = document.getElementById('clicks');

    var currentNumberOfClicks = 0;
            
    //follow function
    //take fish container and position it where the cursor is
    function follow(e) {
        
        var x = e.x;
        var y = e.y;

        fish.style.left = x + 'px';
        fish.style.top = y + 'px';
    }
    
    //count function
    //count the number of times the button is clicked
    function count() {
        console.log('before adding new click',  currentNumberOfClicks);

        currentNumberOfClicks = currentNumberOfClicks + 1;

        console.log('after adding new click', currentNumberOfClicks);

        clicksContainer.textContent = currentNumberOfClicks;

        button.style.opacity = "0";
        button.style.filter  = 'alpha(opacity=0)';

        if (button.style.display === "none") {
            button.style.display = "block";
          } else {
            button.style.display = "none";
        }
    }

    document.body.addEventListener('mousemove', follow);
    button.addEventListener('click', count);
});
window.addEventListener("load", function() {
    var fish = document.getElementById('fish');

    var button = document.getElementById('button');
    var treasure = document.getElementById('treasure');
    var clicksContainer = document.getElementById('clicks');

    var currentNumberOfClicks = 0;


    var randomX = Math.floor((Math.random() * (window.innerWidth - 50)));
    var randomY = Math.floor((Math.random() * (window.innerHeight - 50)));
    
    

    function placeTreasure() {
        console.log(randomX, randomY)
    }
            
    //follow function
    //take fish container and position it where the cursor is
    function follow(e) {
        
        var x = e.x;
        var y = e.y;

        fish.style.left = x + 'px';
        fish.style.top = y + 'px';

        
        button.style.clipPath = "circle(100px at " + x + "px" + " " + y + "px"; 

        // clipPath.style.left = x + 'px';
        // clipPath.style.top = y + 'px';
    }
    
    //count function
    //count the number of times the button is clicked
    function count(e) {
        console.log(e);
        console.log('before adding new click',  currentNumberOfClicks);

        currentNumberOfClicks = currentNumberOfClicks + 1;

        console.log('after adding new click', currentNumberOfClicks);

        clicksContainer.textContent = currentNumberOfClicks;

        e.target.style.opacity = "0";
        // button.style.filter  = 'alpha(opacity=0)';
        
        // if (button.style.display === "none") {
        //     button.style.display = "block";
        //   } else {
        //     button.style.display = "none";
        // }

        //window.location = '/openedbox.html';
    }

    document.body.addEventListener('mousemove', follow);
    treasure.addEventListener('click', count);
    box.addEventListener('click', count);

    placeTreasure();
});
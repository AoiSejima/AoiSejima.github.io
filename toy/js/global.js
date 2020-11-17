window.addEventListener("load", function() {
    var fish = document.getElementById('fish');

    var button = document.getElementById('button');
    var necklace = document.getElementById('necklace');
    var key = document.getElementById('key');
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

        // circle(100px at 100px 100px);
        button.style.clipPath = "circle(120px at " + x + "px" + " " + y + "px"; 
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

        if(currentNumberOfClicks === 2) {
            window.location = 'closedbox.html';
        }
        // if (treasure.style.display === "none") {
        //     treasure.style.display = "block";
        //   } else {
        //     treasure.style.display = "none";
        // }
    }

    document.body.addEventListener('mousemove', follow);
    necklace.addEventListener('click', count);
    key.addEventListener('click', count);

    placeNecklace();
    placeKey();
});
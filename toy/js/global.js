window.addEventListener("load", function() {
    var fish = document.getElementById('fish');
    var clicksContainer = document.getElementById('clicks');
    var currentNumberOfClicks = 0;

    var treasure = document.getElementById('treasure');
    var necklace = document.getElementById('necklace');
    var key = document.getElementById('key');


    function placeNecklace() {

        var randomX = Math.floor((Math.random() * (window.innerWidth - 208.2)));
        var randomY = Math.floor((Math.random() * (window.innerHeight - 312.3)));

        necklace.style.left = randomX + 'px';
        necklace.style.top = randomY + 'px';

        console.log(randomX, randomY)
    }

    function placeKey() {

        var randomX = Math.floor((Math.random() * (window.innerWidth - 208.2)));
        var randomY = Math.floor((Math.random() * (window.innerHeight - 260.25)));

        key.style.left = randomX + 'px';
        key.style.top = randomY + 'px';

        console.log(randomX, randomY)
    }

    //follow function
    //take fish container and position it where the cursor is
    function follow(e) {
        
        var x = e.x;
        var y = e.y;

        fish.style.left = x + 'px';
        fish.style.top = y + 'px';

        // circle(120px at 120px 120px);
        treasure.style.clipPath = "circle(120px at " + x + "px" + " " + y + "px"; 
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

        if (e.target.style.display === "none") {
            e.target.style.display = "block";
          } else {
            e.target.style.display = "none";
        }
    }

    document.body.addEventListener('mousemove', follow);
    necklace.addEventListener('click', count);
    key.addEventListener('click', count);

    placeNecklace();
    placeKey();
});
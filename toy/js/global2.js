window.addEventListener("load", function() {
var keycursor = document.getElementById('keycursor');

function follow(e) {
        
    var x = e.x;
    var y = e.y;

    keycursor.style.left = x + 'px';
    keycursor.style.top = y + 'px';
}

function move(element) {
    var elStyleSheet = document.getElementById(element.id + "-movement");
    if (!elStyleSheet) {
       elStyleSheet = document.createElement("style");
       elStyleSheet.id = element.id + "-movement";
       document.head.appendChild(elStyleSheet);
    }
 }

function move(animate) {
    var animate = animate.getElementById('animate');
    if (!animate) { throw("animate"); }
    /* ... */
}

document.body.addEventListener('mousemove', follow);
animate.body.addEventListener(move);

});
window.addEventListener("load", function() {
var keycursor = document.getElementById('keycursor');

function follow(e) {
        
    var x = e.x;
    var y = e.y;

    keycursor.style.left = x + 'px';
    keycursor.style.top = y + 'px';
}

document.body.addEventListener('mousemove', follow);
});
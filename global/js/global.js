window.addEventListener("load", function() {
 
    //Data Types

    //Strings are wrapped with quotation marks

    //Number
    var firstNumber = "6";
    var secondNumber = "3";
    var multipliedNumber = firstNumber + secondNumber;

    //Boolean
    var isItNine = "true";


    var myText = "My line of text";
    var myText2 = "Hello";

    var myTextElement = document.getElementById('text');

    function updateText(myStr) {
        myStr = myStr + '!!!!';
        myTextElement.textContent = myStr;
    }
        
    updateText (myText);



    var dog = document.getElementById("dog");
    var degrees = 0;

    document.body.addEventListener("mousemove", rotate);

    function rotate() {
        degrees = degrees + 1;
        var newRotation = "rotate(" + degrees + "deg)";
        console.log(newRotation;)
        dog.style.transform = newRotation;
    };

});
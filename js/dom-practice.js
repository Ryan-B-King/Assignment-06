/*eslint-env browser*/
window.document.addEventListener("DOMContentLoaded", init);
function init() {

    //STEP 1

    let button = document.querySelector("button");
    button.addEventListener("click", () => {
    window.alert("1: I have been clicked");
    });

    //STEP 2

    let button2 = document.getElementById("button2");
    button2.addEventListener("click", () => {
    window.alert("2: I have been clicked");
    });

    //STEP 3

    let button3 = document.getElementById("button3");
    button3.addEventListener("click", function clickedBtn() {
        window.alert("3: I have been clicked");
    });

    //STEP 4

    let button4 = document.getElementById("button4");
    function clickedBtn() {
        window.alert("4: I have been clicked");
    };
    button4.addEventListener("click", clickedBtn);

    //STEP 5

    // DOMContentLoaded has been place on top of JS file
    let button5 = document.getElementById("button5");
    function clickedBtn2() {
        window.alert("5: I have been clicked");
    };
    button5.addEventListener("click", clickedBtn2);

    //STEP 6

    let googleLink = document.getElementById("redirect");
    function linkFail(e) {
        e.preventDefault();
        window.alert("You clicked a link to Google.com; however, you are denied");
    };
    googleLink.addEventListener("click", linkFail);

    //STEP 7

    let button7 = document.getElementById("button7");
    let textBox = document.querySelector("textarea");
    textBox.value = "Type something and I'll repeat it!"
    function buttonFail(e) {
        e.preventDefault();
        window.alert(textBox.value);
    };
    button7.addEventListener("click", buttonFail);

    //STEP 8

    let button8 = document.getElementById("button8");
    function clickedBtn3() {
        window.open('newpage.html', 'newpage', 'width = 300px, height = 300px' );
    };
    button8.addEventListener("click", clickedBtn3);

    //STEP 9

    let button9a = document.getElementById("button9a");
    let button9b = document.getElementById("button9b");
    let activeInterval;

    button9a.addEventListener("click", function messageJS() {
        activeInterval = window.setInterval(function messageActive() {
            window.console.log("Learning JavaScript is fun!");
        }, 1000);
    });

    button9b.addEventListener("click", function killMessage(){
        window.clearInterval(activeInterval);
    });

    //STEP 10

    let selection = document.querySelector("select");
    let button10 = document.getElementById("button10");

    button10.addEventListener("click", () => {
        window.alert(selection.value);
    });

};
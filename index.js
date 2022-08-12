// show welcome message
function start() {
    alert("Welcome To CubeInn!!");
}

// show changes when hamburger button is clicked
function bar(num) {
    var side = document.getElementById("sidebar");
    var containerMargin = document.getElementById("container");

    // hamburger button is clicked
    if (num == 1) {
        side.style.height = "50px";
        containerMargin.style.marginTop = "30px";
        side.style.padding = "10px";
    }
    // "X" button is clicked
    if (num == 2) {
        side.style.height = "0px";
        containerMargin.style.marginTop = "0px";
        side.style.padding = "0px";
    }
}

// header changes
function titlecol(number) {
    var title = document.getElementById("title");
    var header = document.getElementById("header");
    
    // mouse is over the intro
    if (number == 1) {
        title.style.color = "#d2b0ff";
        header.style.background = "url(bg1.png) center center no-repeat";
        header.style.width = "1000px";
        header.style.transform = "translateX(80px)";
    }
    
    // mouse is out the intro
    if (number == 2) {
        title.style.color = "pink";
        header.style.background = "url(bg4.png) center center no-repeat";
        header.style.width = "1200px";
        header.style.transform = "translateX(-20px)";
    }
}

// changes of intro image "Hello" to "Welcome"
function change(value) {
    var image = document.getElementById('hello');

    // when mouse is over
    if (value == 1) {
        image.src = 'hello2.png';
        image.style.height = "210px";
        image.style.weight = "450px";
    }

    // when mouse is out
    if (value == 2) {
        image.src = 'hello.png';
    }
}

// swap images in the 2nd image
function hold(n) {
    var hold = document.getElementById("dior");
    var photos = ['dior1.png', 'dior2.png'];

    hold.style.height = "235px";
    hold.style.width = "200px";
    hold.style.transition = "5s";

    // change to the 2nd image of product
    if (n == 1) {
        hold.src = photos[0];
    }
    // change to the 3nd image of product
    if (n == 2) {
        hold.src = 'dior.png';
    }
    // reset the photo to the first one
    if (n == 3) {
        hold.src = photos[1];
    }
}

// the changes of hamburger button
function plus(a) {
    var b1 = document.getElementById("one");
    var b2 = document.getElementById("two");
    var b3 = document.getElementById("three");
    var button = document.getElementById("openSide");

    // when the hamburger is clicked
    if (a == 1) {
        b1.style.height = "25px";
        b1.style.width = "25px";
        b1.style.boxShadow = "3px 3px 3px grey";
        b1.style.color = "white";
        b1.style.fontSize = "15px";
        b1.style.backgroundColor = "pink";
        b1.style.transform = "translateY(10px)";

        b2.style.height = "0px";
        b2.style.width = "0px";

        b3.style.height = "0px";
        b3.style.width = "0px";
    }

    // when the "X" is clicked
    if (a == 2) {
        b1.style.height = "4px";
        b1.style.width = "28px";
        b1.style.backgroundColor = "white";
        b1.style.boxShadow = "0px 0px 0px white";
        b1.style.fontSize = "0px";
        b1.style.transform = "translateY(-0.5px)";

        b2.style.height = "4px";
        b2.style.width = "28px";

        b3.style.height = "4px";
        b3.style.width = "28px";

        button.style.transform = "translate(-5px)";
    }
}

// show video in the 1st image
function pvideo(val) {
    var img1 = document.getElementById("img1");

    // show video
    if (val == 1)
        img1.style.height = "0px";

    //hide video
    if (val == 2)
        img1.style.height = "235px";
}
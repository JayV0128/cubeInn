// change main photo to side photo
function sidephoto(value) {
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var mainphoto = document.getElementById("mainphoto");

    // the user clicks the 1st side photo
    if (value == 1) {
        if (p1.src != mainphoto.src) {
            mainphoto.src = p1.src;
        }
    }
    // the user clicks the 2nd side photo
    if (value == 2) {
        if (p2.src != mainphoto.src) {
            mainphoto.src = p2.src;
        }
    }
    // the user clicks the 3rd side photo
    if (value == 3) {
        if (p3.src != mainphoto.src) {
            mainphoto.src = p3.src;
        }
    }
}

//change photos of other types to the main photo and the side photo
function changephoto(v) {
    var mainphoto = document.getElementById("mainphoto");
    var t1 = document.getElementById("t1");
    var t2 = document.getElementById("t2");
    var t3 = document.getElementById("t3");
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");

    // the user clicks the 1st other colour of product (pink)
    if (v == 1) {
        mainphoto.src = "MAC2-2.png";
        t1.src = "MAC2-2.png";
        t2.src = "MAC3-3.png";
        t3.src = "MAC1.png";
        p1.src = "MAC2-2.png";
        p2.src = "MAC2-1.png";
        p3.src = "MAC2-3.png";
    }
    // the user clicks the 2nd other colour of product (green-blue)
    if (v == 2) {
        mainphoto.src = "MAC3-3.png";
        t1.src = "MAC2-2.png";
        t2.src = "MAC3-3.png";
        t3.src = "MAC1.png";
        p1.src = "MAC3-3.png";
        p2.src = "MAC3-2.png";
        p3.src = "MAC3-1.png";
    }
    // the user clicks the 3rd other colour of product (orange)
    if (v == 3) {
        mainphoto.src = "MAC1.png";
        t1.src = "MAC2-2.png";
        t2.src = "MAC3-3.png";
        t3.src = "MAC1.png";
        p1.src = "MAC1.png";
        p2.src = "MAC2.png";
        p3.src = "MAC.png";
    }
}

// adjust the size of the main photo
function photosize() {
    var mainphoto = document.getElementById("mainphoto");
    var range = document.getElementById("range");
    var photosize = parseInt(range.value);
    var newphotosize = 1 + photosize / 200;

    // the user adjusts the range bar of the products and size changes
    mainphoto.style.borderRadius = "150px";
    mainphoto.style.transform = "scale(" + newphotosize + ")";
}

// reset photo size
function resetphotosize() {
    var mainphoto = document.getElementById("mainphoto");
    var range = document.getElementById("range");
    var reset = 1;

    range.value = "0";
    mainphoto.style.transform = "scale(" + reset + ")";
}

// perform the case of "sold out" and "normal"
function changeqty(val) {
    var qty = document.getElementById("number");
    var amount = parseInt(qty.value);
    var plus = document.getElementById("plus");
    var substract = document.getElementById("substract");
    var number = document.getElementById("number");
    var addto = document.getElementById("addto");
    var buy = document.getElementById("buy");
    var discount = document.getElementById("discount");

    // "sold out" case
    if (val == 0) {
        amount = 0;
        qty.value = amount;
        if (amount == 0) {
            plus.disabled = true;
            substract.disabled = true;
            number.disabled = true;
            addto.innerHTML = "SOLD OUT"; //changes html values of the button "addto"
            addto.style.backgroundColor = "black";
            addto.style.color = "white";
            buy.style.backgroundColor = "black";
        }
    }
    // "normal" case
    if (val == 1 || val == 2) {
        plus.disabled = false;
        substract.disabled = false;
        number.disabled = false;
        addto.innerHTML = "ADD TO CART"; //changes html values of the button "addto"
        addto.style.backgroundColor = "transparent";
        addto.style.color = "black";
        buy.style.backgroundColor = "pink";
        qty.value = "1";
    }
}

// change product desc headers color when mouse is over and out the main photo
function headcolor(num) {
    var headcolor = document.getElementById("name");
    var headcolor1 = document.getElementById("name1");

    //header changes when mouse is over
    if (num == 1) {
        headcolor.style.color = "red";
        headcolor1.style.color = "red";
    }
    //header changes when mouse is out
    if (num == 2) {
        headcolor.style.color = "hotpink";
        headcolor1.style.color = "black";
    }
}

// change the number of lighted stars
function lightedstar(number) {
    var b1 = document.getElementById("b1");
    var b2 = document.getElementById("b2");
    var b3 = document.getElementById("b3");
    var b4 = document.getElementById("b4");
    var b5 = document.getElementById("b5");

    // image changes when the users click the dark stars
    if (number == 1) {
        b1.src = "lightstar.png";
    }
    if (number == 2) {
        b2.src = "lightstar.png";
    }
    if (number == 3) {
        b3.src = "lightstar.png";
    }
    if (number == 4) {
        b4.src = "lightstar.png";
    }
    if (number == 5) {
        b5.src = "lightstar.png";
    }
}

// reset star back to 0
function clearstar() {
    var b1 = document.getElementById("b1");
    var b2 = document.getElementById("b2");
    var b3 = document.getElementById("b3");
    var b4 = document.getElementById("b4");
    var b5 = document.getElementById("b5");

    b1.src = "blackstar.png";
    b2.src = "blackstar.png";
    b3.src = "blackstar.png";
    b4.src = "blackstar.png";
    b5.src = "blackstar.png";
}

// show message when the user clicks "clear"
function warning() {
    alert("Do You Really Want To Clear All Stars?");
}

// perform an effect of "side" and "other colours" area 
function translatetype(digit) {
    var type = document.getElementById("type");
    var title = document.getElementById("title");
    var buy = document.getElementById("buy");
    var addto = document.getElementById("addto");

    // when mouse is over the left side title
    if (digit == 1) {
        type.style.transform = "translateX(-280px)";
        type.style.backgroundColor = "#b8dbcb";
        title.style.transform = "translateX(250px)";
        buy.style.backgroundColor = "black";
        addto.style.backgroundColor = "white";
    }
    // when mouse is out the left side title
    if (digit == 2) {
        type.style.transform = "translateX(2px)";
        type.style.backgroundColor = "pink";
        title.style.transform = "translateX(-2px)";
        buy.style.backgroundColor = "pink";
        addto.style.backgroundColor = "transparent";
    }
}

// show "thank you" message to the users when the rating and the comments are sent 
function thankcomment() {
    //call method to check the comments
    if (checkComment()) {
        if (checkStar() > 0)
            alert("Thank you for your comments and " + checkStar() + " stars !");
        else
            alert("You have to rate stars.")
    } else
        alert("You have to enter your comments.");
}

// check the numbers of stars lighted up
function checkStar() {
    var b1 = document.getElementById("b1");
    var b2 = document.getElementById("b2");
    var b3 = document.getElementById("b3");
    var b4 = document.getElementById("b4");
    var b5 = document.getElementById("b5");
    var ls1 = document.getElementById("ls1");
    var star = [b1, b2, b3, b4, b5];
    var count = 0;

    for (var i = 0; i < star.length; i++) {
        if (star[i].src == ls1.src)
            count++;
    }
    return count;
}

// check whether the comment area is empty or not
function checkComment() {
    var text1 = document.getElementById("text1");

    if (text1.value == "")
        return false;
    else
        return true;
}

// add the quantity when the "+" is clicked
function plus() {
    var qty = document.getElementById("number");
    var amount = parseInt(qty.value);
    // plus 1 to quantity
    amount++;
    qty.value = amount;
    totalPrice(1);
}

// substract the quantity when the "-" is clicked
function minus() {
    var qty = document.getElementById("number");
    var amount = parseInt(qty.value);
    if (amount > 1) {
        // minus 1 from quantity
        amount--;
        qty.value = amount;
        totalPrice(1);
    } else
        alert("Sorry, The Quantity Cannot be 0.");
}

// calculate total price 
// exceptional case of giving discount
function totalPrice(n) {
    var qty = document.getElementById("number");
    var finalAmount = parseInt(qty.value);
    var total = document.getElementById("totalAmount");

    // "normal" case
    if (n == 1) {
        total.innerHTML = "HK$ " + 190 * finalAmount;
        discount(finalAmount);
    } else {
        // "discount" case
        total.innerHTML = "HK$ " + 190 * n;
        discount(n);
    }
}

// show discount to the user
function discount(amount) {
    var qty = document.getElementById("number");
    var finalAmount = parseInt(qty.value);
    var discount = document.getElementById("discount");
    var totalAmount = document.getElementById("totalAmount");
    var discount1 = document.getElementById("discount1");

    // "discount" case when amount is larger than or equal to 3
    if (amount >= 3) {
        totalAmount.style.fontSize = "80%";
        totalAmount.style.textDecoration = "line-through";
        discount.style.fontSize = "100%";
        discount.style.color = "red";
        discount.style.textShadow = "2px 2px 2px grey";
        discount.innerHTML = "  HK$  " + 190 * finalAmount * 0.8; //changes html values of the output
        discount1.style.color = "red";
        discount1.style.textShadow = "1px 1px 1px pink";
    } else {
        // "normal" case when amount is smaller than 3
        totalAmount.style.fontSize = "100%";
        totalAmount.style.textDecoration = "none";
        discount.style.fontSize = "50%";
        discount.style.color = "red";
        discount.innerHTML = "*20% Discount for Ordering More than 3*"; //changes html values of the output
        discount.style.textShadow = "1px 1px 1px pink";
        discount1.style.color = "aliceblue";
        discount1.style.textShadow = "0px 0px 0px transparent";
    }
}
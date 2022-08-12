function checkNull() {
    var numOnly = document.getElementById("numOnly");
    var Price = document.getElementById("Price");

    var phoneNo = document.getElementById("sellerPhone");
    var HKphone = document.getElementById("HKnoOnly");

    var photo = document.getElementById("upPhoto");
    var file = document.getElementById("emfile");

    var productName = document.getElementById("productname");
    var error1 = document.getElementById("error1");

    var Brand = document.getElementById("Brand");
    var error2 = document.getElementById("error2");

    var lName = document.getElementById("lName");
    var error3 = document.getElementById("error3");

    var fName = document.getElementById("fName");
    var error4 = document.getElementById("error4");

    var QTY = document.getElementById("Qty");
    var error5 = document.getElementById("error5");

    var userEmail = document.getElementById("userEmail");
    var error6 = document.getElementById("error6");

    var allEmail = document.getElementById("allEmail");
    var error7 = document.getElementById("error7");

    var count = 0;

    //    if (num == 0) {
    if (Price.value == "") {
        numOnly.style.color = "red";
        count++;
    } else {
        numOnly.style.color = "snow";
    }

    if (phoneNo.value == "") {
        HKphone.style.color = "red";
        count++;
    } else {
        HKphone.style.color = "snow";
    }

    if (photo.value == "") {
        file.style.color = "red";
        count++;
    } else {
        file.style.color = "snow";
    }

    if (productName.value == "") {
        error1.style.color = "red";
        count++;
    } else {
        error1.style.color = "snow";
    }

    if (Brand.value == "") {
        error2.style.color = "red";
        count++;
    } else {
        error2.style.color = "snow";
    }

    if (lName.value == "") {
        error3.style.color = "red";
        count++;
    } else {
        error3.style.color = "snow";
    }

    if (fName.value == "") {
        error4.style.color = "red";
        count++;
    } else {
        error4.style.color = "snow";
    }

    if (QTY.value == "") {
        error5.style.color = "red";
        count++;
    } else {
        error5.style.color = "snow";
    }

    if (userEmail.value == "") {
        error6.style.color = "red";
        count++;
    } else {
        error6.style.color = "snow";
    }

    if (allEmail.value == "") {
        error7.style.color = "red";
        count++;
    } else {
        error7.style.color = "snow";
    }



    message(count);
    //    return true;
    //    }

}

function message(count) {
    if (count > 0) {
        alert("\u26A0 Some Field(s) Missing. Please Fill In Again !");
    } else {
        //    if (checkNull()) {
        //        alert("\u26A0 Some Field(s) Missing. Please Fill In Again !");
        //    } else {
        alert("Submited Form !!! Thank you \u2764");
    }
}

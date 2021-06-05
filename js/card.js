const cardForm = document.querySelector("#card-form");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const cardNumber = document.querySelector("#cardNumber");
const numberError = document.querySelector("#numberError");
const expDate = document.querySelector("#expDate");
const expError = document.querySelector("#expDateError");
const cvv = document.querySelector("#CVV");
const cvvError = document.querySelector("#cvvError");
const btn = document.querySelector(".button")

function formCheck(event) {
    event.preventDefault();

    if (lengthCheck(fullName.value, 0) === true) {
        nameError.style.display = "none";
    } else{
        nameError.style.display = "block";
    }

    if (lengthCheck(cardNumber.value, 15) === true) {
        numberError.style.display = "none";
    } else{
        numberError.style.display = "block";
    }

    if (lengthCheck(expDate.value, 3) === true) {
        expError.style.display = "none";
    } else{
        expError.style.display = "block";
    }

    if (lengthCheck(cvv.value, 3) === true) {
        cvvError.style.display = "none";
    } else{
        cvvError.style.display = "block";
    }

    if (lengthCheck(fullName.value, 0) && lengthCheck(cardNumber.value, 15) && lengthCheck(expDate.value, 3) && lengthCheck(cvv.value, 3)) 
    {
        btn.innerHTML = `<a href="success.html">CHECKOUT</a>`;
    } else{ }

    console.log("It´s working!");

}


cardForm.addEventListener("submit", formCheck)

function lengthCheck(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

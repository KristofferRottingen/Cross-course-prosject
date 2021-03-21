const contactFrom = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const adresse = document.querySelector("#adresse");
const adresseError = document.querySelector("#adresseError");


function formCheck(event) {
    event.preventDefault();

    if (lengthCheck(fullName.value, 0) === true) {
        nameError.style.display = "none";
    } else{
        nameError.style.display = "block";
    }

    if (emailCheck(email.value) === true) {
        emailError.style.display = "none";
    } else{
        emailError.style.display = "block";
    }

    if (lengthCheck(adresse.value, 0) === true) {
        adresseError.style.display = "none";
    } else{
        adresseError.style.display = "block";
    }

    console.log("It´s working!");

}


contactFrom.addEventListener("submit", formCheck)

function lengthCheck(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function emailCheck(email) {
    const emailExample = /\S+@\S+\.\S+/;
    const emailTest = emailExample.test(email);
    return emailTest;
}
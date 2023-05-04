const usrName = document.getElementById("Name");
const usrEmail = document.getElementById("Email");
const usrNo = document.getElementById("Number");
const usrAge = document.getElementById("Age");
const usrGender = document.registration;
const usrLang = document.getElementById("Language");
const usrZip = document.getElementById("zipCode");

function formValidation() { 
    if (usrName.value.length < 2 || usrName.value.length > 20) { 
        alert("Enter valid name");
        usrName.focus();
        return false;
    }

    if (usrEmail.value.match(/[&$#*~^]/)) { 
        alert("Enter a valid email");
        usrEmail.focus();
        return false;
    }

    if (!usrNo.value.match(/^[1-9][0-9]{9}$/)) { 
        alert("Phone number must be 10 digit long and not start with 0!");
        usrNo.focus();
        return false;
    }

    if (usrGender.gender.value === "") { 
        alert("Please select your gender");
        usrGender.focus();
        return false;
    }

    if (usrLang.value === "") { 
        alert("Please select your language");
        usrLang.focus();
        return false;
    }

    if (!usrZip.value.match(/^[0-9]{6}$/)) { 
        alert("Zip code must be 6 character long number");
        usrZip.focus();
        return false;
    }

    return true;
}


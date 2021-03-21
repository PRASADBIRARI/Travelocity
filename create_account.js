//prasad nav bar js code
function moreTravel() {
    document.getElementById("myDropdown").classList.toggle("navShow");

    window.onclick = function (event) {
        if (!event.target.matches('.navDropbtn')) {
            let dropdowns = document.getElementsByClassName("navDropdown_cont");
            let i;
            for (i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('navShow')) {
                    openDropdown.classList.remove('navShow');
                }
            }
        }
    }
}


function myFunction() {
    document.getElementById("mySignin").classList.toggle("signinShow");
    window.onclick = function (event) {
        if (!event.target.matches('.signinBtn')) {
            let Signins = document.getElementsByClassName("Signin-content");
            let i;
            for (i = 0; i < Signins.length; i++) {
                let openSignin = Signins[i];
                if (openSignin.classList.contains('signinShow')) {
                    openSignin.classList.remove('signinShow');
                }
            }
        }
    }
}



function Open_Btn1_Card1() {
    document.getElementById("openCard").classList.toggle("btn1_Show");
}

function Open_Btn4_Card2() {
    document.getElementById("openCard2").classList.toggle("btn4_Show");
}



//Create account page js code 
function CreateAccount(e){
    e.preventDefault()
    

    var firstname = document.getElementById("cafirstname").value
    var surname = document.getElementById("casurname").value
    var email = document.getElementById("caemail").value 
    var password = document.getElementById("capassword").value
    var conpassword = document.getElementById("caconpassword").value

    if (password != conpassword) {
        alert("Password did not match")
    }
    else if(email.length == 0 || firstname.length == 0 || surname.length == 0 || password.length == 0 || conpassword.length == 0) {
        alert("Please Enter your Input fields")
       
    }
    else {
       localStorage.setItem("FirstName", firstname)
       localStorage.setItem("Surname", surname)
       localStorage.setItem("Surname",surname)
       localStorage.setItem("Email", email)
        localStorage.setItem("Password", password)
        alert("Your Account Created Successful")
        window.location.href = "http://127.0.0.1:5500/signin.html"
    }


}
document.getElementById("cabutton").addEventListener("click",CreateAccount)


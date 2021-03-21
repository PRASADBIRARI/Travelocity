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



// sign in page functions
function Signin(e) {
    e.preventDefault()
    var storedemail = localStorage.getItem("Email")
    var storedpassword = localStorage.getItem("Password")
    var para = document.getElementById("invaliduser")

    var email = document.getElementById("signin-username-signin").value
    var password = document.getElementById("signin-password-signin").value


    if(email == storedemail && password == storedpassword){
        alert("Log in Successful")
        window.location.href = "http://127.0.0.1:5500/create_account.html";
    }
    else if(password.length == 0 || email.length == 0){
        alert("Please Enter Your Input Fields")
    }
    else if (password != storedpassword || email != storedemail) {
        e.preventDefault()
        para.textContent = "Invalid User"
        para.style.color = "red"
        document.getElementById("forgot").append(para)
    }

}
  
document.getElementById("signin-button-signin").addEventListener("click",Signin)
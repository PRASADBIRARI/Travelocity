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








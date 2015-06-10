    var sortir;


    function load() {
    //alert("event load!");
    
    // funció sortir
        sortir = document.getElementById("sortir");
        sortir.addEventListener("click", function(){
                if (navigator.app) {
                       //alert("navigator.app");
                       navigator.app.exitApp();
                    }
                    else if (navigator.device) {
                        navigator.device.exitApp();
                    }
            });
        }

    window.onload = load;

    
/*
    function playAudio(){katyusha.play();};
    function stopAudio(){katyusha.stop();};
    function releaseAudio(){katyusha.release();};
*/




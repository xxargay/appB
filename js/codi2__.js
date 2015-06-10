    var sortir;
    var playAudio;
    var pauseAudio;
    var stopAudio;
    var x = 0;
    var aud;


function load() {
//alert("event load!");

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        // el dispositiu està preparat per als objectes de PhoneGap
        //alert("Funciona!");


        // fa visibles els botons DESPRÉS de l'event deviceready
        var playAudio = document.getElementById("1110");
        var pauseAudio = document.getElementById("pauseAudio");
        var stopAudio = document.getElementById("stopAudio");
        
        playAudio.setAttribute('style', 'display:inline-block;');
        pauseAudio.setAttribute('style', 'display:inline-block;');
        stopAudio.setAttribute('style', 'display:inline-block;');


        // crea l'objecte audio

        // reproducció remota
        //var aud = new Media("http://www.noiseaddicts.com/samples/1450.mp3");

        


        playAudio.addEventListener("click", playing);

        function playing(){

            // reproducció local 
            //creem l'objecte dins la funció
            aud = new Media("/android_asset/www/audio/1110.mp3"); 
            //alert(aud.src)
                document.getElementById("estat").innerHTML = "REPRODUIR";
                aud.play();
            }

        pauseAudio.addEventListener("click", function(){
                //alert("Funciona!");
                if(x!=1){
                    document.getElementById("estat").innerHTML = "PAUSA";
                    pauseAudio.setAttribute('style', 'background-color:#80A9BF;');
                    pauseAudio.setAttribute('style', 'display:inline-block;');
                    aud.pause();
                    document.getElementById("pauseAudio").innerHTML = "CONTINUAR";
                    x=1;
                } else {  
                    document.getElementById("estat").innerHTML = "REPRODUIR";
                    pauseAudio.setAttribute('style', 'background-color:#7098AE;');
                    pauseAudio.setAttribute('style', 'display:inline-block;');
                    aud.play();
                    document.getElementById("pauseAudio").innerHTML = "PAUSA";
                    x=0; }
            });

        stopAudio.addEventListener("click", function(){
                //alert("Funciona!");
                document.getElementById("estat").innerHTML = "ATURAR";
                aud.stop();
            });

        // Update media position every second ////////////////////////////////////
        var mediaTimer = setInterval(function () {
            // get media position
            aud.getCurrentPosition(
                // success callback
                function (position) {
                    if (position > -1) {
                        document.getElementById("estat2").innerHTML = position.toFixed(2);
                    }
                },
                // error callback
                function (e) {
                    console.log("Error getting pos=" + e);
                }
            );
        }, 100);
    };


    
    
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
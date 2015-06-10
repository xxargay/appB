    var sortir;

    var x = 0;
    var aud;


function load() {
//alert("event load!");

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        // el dispositiu està preparat per als objectes de PhoneGap
        //alert("Funciona!");

/*

// crear l'array d'audios
var playAudio = document.getElementsByClassName("audio");

for(i in playAudio){
    // torna 2 undefined, a més dels 4 elements !?
    alert(playAudio[i].id)
}
*/

        // fa visibles els botons DESPRÉS de l'event deviceready
        var playAudio10 = document.getElementById("1110");
        var playAudio11 = document.getElementById("1111");
        var playAudio12 = document.getElementById("1112");
        var playAudio13 = document.getElementById("1113");

        var pauseAudio = document.getElementById("pauseAudio");
        var stopAudio = document.getElementById("stopAudio");

        playAudio10.setAttribute('style', 'display:inline-block;');
        playAudio11.setAttribute('style', 'display:inline-block;');
        playAudio12.setAttribute('style', 'display:inline-block;');
        playAudio13.setAttribute('style', 'display:inline-block;');

        pauseAudio.setAttribute('style', 'display:inline-block;');
        stopAudio.setAttribute('style', 'display:inline-block;');


        
        playAudio10.addEventListener("click", playing);
        playAudio11.addEventListener("click", playing);
        playAudio12.addEventListener("click", playing);
        playAudio13.addEventListener("click", playing);

        function playing(){
            // reproducció local 
            //creem l'objecte dins la funció
            aud = new Media("/android_asset/www/audio/" + this.id + ".mp3"); 
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
                aud = "";
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
    var sortir;
    var playAudio;
    var pauseAudio;
    var stopAudio;
    var x = 0;


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
        //var katyusha = new Media("http://www.noiseaddicts.com/samples/1450.mp3");

        // reproducció local 
        var katyusha = new Media("/android_asset/www/audio/1450.mp3"); 
            //alert(katyusha.src)


        playAudio.addEventListener("click", function(){
                //alert("Funciona!");
                document.getElementById("estat").innerHTML = "REPRODUIR";
                katyusha.play();
            });

        pauseAudio.addEventListener("click", function(){
                //alert("Funciona!");
                if(x!=1){
                    document.getElementById("estat").innerHTML = "PAUSA";
                    pauseAudio.setAttribute('style', 'background-color:#80A9BF;');
                    pauseAudio.setAttribute('style', 'display:inline-block;');
                    katyusha.pause();
                    document.getElementById("pauseAudio").innerHTML = "CONTINUAR";
                    x=1;
                } else {  
                    document.getElementById("estat").innerHTML = "REPRODUIR";
                    pauseAudio.setAttribute('style', 'background-color:#7098AE;');
                    pauseAudio.setAttribute('style', 'display:inline-block;');
                    katyusha.play();
                    document.getElementById("pauseAudio").innerHTML = "PAUSA";
                    x=0; }
            });

        stopAudio.addEventListener("click", function(){
                //alert("Funciona!");
                document.getElementById("estat").innerHTML = "ATURAR";
                katyusha.stop();
            });

        // Update media position every second ////////////////////////////////////
        var mediaTimer = setInterval(function () {
            // get media position
            katyusha.getCurrentPosition(
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

}

window.onload = load;
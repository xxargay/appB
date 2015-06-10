    var sortir;

    var x = 0;
    var aud;


function load() {
//alert("event load!");

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {

        // el dispositiu està preparat per als objectes de PhoneGap
        //alert("Device ready!");

        // fa visibles els botons DESPRÉS de l'event deviceready
        var playVideo = document.getElementById("playVideo");
        
        playVideo.setAttribute('style', 'display:inline-block;');

        playVideo.addEventListener("click", function(){
                
                alert("play!");

            });

	};



};

window.onload = load;
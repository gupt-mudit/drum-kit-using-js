
document.getElementById("65").addEventListener("click", function(){
 let beat=new Audio("./clap.wav")
 beat.play();
});
document.getElementById("83").addEventListener("click", function(){
    let beat=new Audio("./hihat.wav")
    beat.play();
   });
document.getElementById("68").addEventListener("click", function(){
    let beat=new Audio("./kick.wav")
    beat.play();
   });
document.getElementById("70").addEventListener("click", function(){
    let beat=new Audio("./openhat.wav")
    beat.play();
   });
document.getElementById("71").addEventListener("click", function(){
    let beat=new Audio("./boom.wav")
    beat.play();
   });
document.getElementById("72").addEventListener("click", function(){
    let beat=new Audio("./ride.wav")
    beat.play();
   });
document.getElementById("73").addEventListener("click", function(){
    let beat=new Audio("./snare.wav")
    beat.play();
   });



   document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    if(name=='a'){
        
        let beat=new Audio("./clap.wav")
        beat.play();
    }
    if(name=='s'){
        let beat=new Audio("./hihat.wav")
        beat.play();
    }
    if(name=='d'){
        let beat=new Audio("./kick.wav")
        beat.play();
    }
    if(name=='f'){
        let beat=new Audio("./openhat.wav")
        beat.play();
    }
    if(name=='g'){
        let beat=new Audio("./boom.wav")
    beat.play();
    }
    if(name=='h'){
        let beat=new Audio("./ride.wav")
    beat.play();
    }
    if(name=='j'){
        let beat=new Audio("./snare.wav")
        beat.play();
    }
    
  }, false);


  
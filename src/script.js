
window.addEventListener('keydown', function(e){
 var audio = document.querySelector(`.sound [data-key="${e.key}"]`)
   if(!audio) return;

    audio.currentTime = 0;
    audio.play();
    key.classList('playing');
    console.log(audio)

});

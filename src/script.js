
window.addEventListener('keydown', function(e){
  var audio = document.querySelector(`.sound [data-key="${e.key}"]`)
  var key = document.querySelector(`.key[data-key="${e.key}"`)
   if(!audio) return;
    audio.currentTime = 0;

    audio.play();
    key.classList.add('playing');


    setTimeout(function(){

    });
    function endTransition(e){
      if(e.propertyName !== 'transform') return;
      this.classList.remove('playing')

    }
    /**
     * @type {NodeList.<HTMLElement>}
     */
    var keys = document.querySelectorAll('.key');
    Array.from(keys).forEach(key => key.addEventListener('transitionend', endTransition));
});

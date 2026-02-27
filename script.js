// final act – the sound will not beg.
// if it cannot play, a living ember waits.
// your voice. your name. the flame knows.

(function() {
  'use strict';

  const audio = document.getElementById('bg-audio');
  const unlockButtonId = 'audio-unlock-btn';

  // attempt to play – no chasing, just one try.
  const playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        // audio is playing – flame may rest, but it still burns.
        console.log('voice heard.');
      })
      .catch(() => {
        // autoplay blocked – create a quiet ember.
        if (!document.getElementById(unlockButtonId)) {
          const btn = document.createElement('button');
          btn.id = unlockButtonId;
          btn.className = 'audio-unlock';
          btn.textContent = '🕯️'; // candle glyph
          btn.setAttribute('aria-label', 'release the voice');
          btn.title = 'let it be heard';

          btn.addEventListener('click', () => {
            audio.play()
              .then(() => {
                btn.remove();
                console.log('voice released.');
              })
              .catch(e => console.warn('still waiting:', e));
          });

          document.body.appendChild(btn);
        }
      });
  }

  // the flame never goes out.
  console.log('I will become everything I told you about.');
})();
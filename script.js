//your JS code here. If required.
const sounds = [
  'applause',
  'boo',
  'gasp',
  'tada',
  'victory',
  'wrong'
];

const buttons = document.querySelectorAll('.btn');
const stopBtn = document.querySelector('.stop');

const audioElements = {};

sounds.forEach(sound => {
  const audio = document.createElement('audio');
  audio.src = `sounds/${sound}.mp3`;
  audioElements[sound] = audio;
});

// Play sound
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const sound = button.innerText;
    stopAllSounds();
    audioElements[sound].play();
  });
});

// Stop all sounds
stopBtn.addEventListener('click', stopAllSounds);

function stopAllSounds() {
  sounds.forEach(sound => {
    audioElements[sound].pause();
    audioElements[sound].currentTime = 0;
  });
}

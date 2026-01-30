const buttons = document.querySelectorAll('.btn');
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

buttons.forEach(button => {
  button.addEventListener('click', () => {
    stopAll();
    const sound = button.innerText;
    document.getElementById(sound).play();
  });
});

function stopAll() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}

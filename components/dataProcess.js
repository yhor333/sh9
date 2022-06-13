const bgProgress = document.getElementById('bg-progress');
const maxWidth = document.querySelector('.main-loading').clientWidth;
const intProgress = document.getElementById('intProgress');
const redSpan = document.querySelector('.red-span');
const ready = document.querySelector('.main-ready');

function progress() {
  let width = 1;
  let id = setInterval(progressStatus, 10);

  function progressStatus() {
    if (width >= maxWidth) {
      clearInterval(id);
      redSpan.style.display = 'none';
      ready.style.display = 'block'
      window.location.href = 'last-page.html'
    } else {
      width++;
      interest = Math.round(width * 100 / maxWidth);
      bgProgress.style.width = width + 'px';
      intProgress.innerText = interest + '%';
    }
  }
}

progress()

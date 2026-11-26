/* Archaemap - hero carousel (shared by / and /pt/)
   Button labels come from data-* attributes in the HTML, so each language keeps its own text. */
(function () {
  var slides = [].slice.call(document.querySelectorAll('.slide'));
  if (!slides.length) return;
  var dots = [].slice.call(document.querySelectorAll('.dot'));
  var pp = document.getElementById('pp');
  var i = 0, timer = null;
  var playing = !window.matchMedia('(prefers-reduced-motion:reduce)').matches;

  function go(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach(function (s, k) {
      s.classList.toggle('on', k === i);
      if (dots[k]) dots[k].setAttribute('aria-current', k === i);
    });
  }
  function start() {
    clearInterval(timer);
    if (playing) timer = setInterval(function () { go(i + 1); }, 6000);
  }
  function label() {
    pp.textContent = playing ? '\u275A\u275A' : '\u25B6';
    pp.setAttribute('aria-label', playing ? pp.dataset.pause : pp.dataset.play);
  }

  document.getElementById('prev').onclick = function () { go(i - 1); start(); };
  document.getElementById('next').onclick = function () { go(i + 1); start(); };
  dots.forEach(function (d, k) { d.onclick = function () { go(k); start(); }; });
  pp.onclick = function () { playing = !playing; label(); start(); };
  label();
  start();
})();

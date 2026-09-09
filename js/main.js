// ─── SPOTIFY WIDGET TOGGLE ───────────────────────────────────────
document.getElementById('spotifyBar').addEventListener('click', function () {
  document.getElementById('spotifyWidget').classList.toggle('open');
  document.getElementById('spotifyChevron').textContent =
    document.getElementById('spotifyWidget').classList.contains('open') ? '▼' : '▲';
});

// ─── FAQ SEND QUESTION ────────────────────────────────────────────
function sendFaqQuestion() {
  const input = document.getElementById('faqQuestion');
  const question = input.value.trim();
  if (!question) { input.focus(); return; }
  const subject = encodeURIComponent('Question from Website');
  const body = encodeURIComponent(question);
  window.location.href = 'mailto:tommysoriginal3@gmail.com?subject=' + subject + '&body=' + body;
  input.value = '';
}

// ─── FAQ TOGGLE ───────────────────────────────────────────────────
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

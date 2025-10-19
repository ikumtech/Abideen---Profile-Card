// Fill time element with Date.now() and update every second (ms)
const timeEl = document.querySelector('[data-testid="test-user-time"]');
if (timeEl) {
  const setTime = () => timeEl.textContent = Date.now().toString();
  setTime();
  // update once per second so tests reading near current time pass
  setInterval(setTime, 1000);
}

// Contact button demo (keyboard accessible)
const contactBtn = document.querySelector('[data-testid="test-user-contact"]');
if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    // replace with real action if needed
    alert('Contact button clicked — replace with real behaviour in production.');
  });
}
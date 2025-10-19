// 
// TIME DISPLAY (Milliseconds)
//
const timeEl = document.querySelector('[data-testid="test-user-time"]');
if (timeEl) {
  const setTime = () => (timeEl.textContent = Date.now().toString());
  setTime();
  setInterval(setTime, 1000);
}

//
// CONTACT BUTTON DEMO
//
const contactBtn = document.querySelector('[data-testid="test-user-contact"]');
if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    alert('Contact button clicked — replace with real behaviour in production.');
  });
}

// 
// LIGHT / DARK THEME TOGGLE
//
const toggleBtn = document.getElementById('theme-toggle');

// Apply saved theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  if (toggleBtn) toggleBtn.textContent = 'Light Mode';
}

// Handle toggle click
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    toggleBtn.textContent = isDark ? ' Light Mode' : ' Dark Mode';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}
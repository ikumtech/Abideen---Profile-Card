// ================== PROFILE CARD TIME ==================
const timeEl = document.querySelector('[data-testid="test-user-time"]');
if (timeEl) {
  const setTime = () => (timeEl.textContent = Date.now().toString());
  setTime();
  setInterval(setTime, 1000);
}

// ================== DARK / LIGHT THEME TOGGLE ==================
const toggleBtn = document.getElementById('theme-toggle');
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  if (toggleBtn) toggleBtn.textContent = 'Light Mode';
}

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    toggleBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// ================== CONTACT FORM VALIDATION ==================
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    let valid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    if (!name.value.trim()) {
      document.getElementById('name-error').textContent = 'Name is required.';
      valid = false;
    }

    if (!email.value.trim()) {
      document.getElementById('email-error').textContent = 'Email is required.';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
      document.getElementById('email-error').textContent = 'Enter a valid email.';
      valid = false;
    }

    if (!subject.value.trim()) {
      document.getElementById('subject-error').textContent = 'Subject is required.';
      valid = false;
    }

    if (!message.value.trim()) {
      document.getElementById('message-error').textContent = 'Message is required.';
      valid = false;
    }

    if (valid) {
      const success = document.getElementById('form-success');
      success.hidden = false;
      form.reset();
      setTimeout(() => { success.hidden = true; }, 5000);
    }
  });
}

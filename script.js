// Toggle Section and Button Text
function toggleSection(sectionId, buttonId, label) {
  const section = document.getElementById(sectionId);
  const button = document.getElementById(buttonId);

  section.classList.toggle("hidden");

  if (section.classList.contains("hidden")) {
    button.textContent = `View ${label}`;
  } else {
    button.textContent = `Hide ${label}`;
  }
}


document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const error = document.getElementById('error');
  const success = document.getElementById('success');

  error.textContent = '';
  success.textContent = '';

  if (!name && !email) {
    error.textContent = 'Please enter your name and email';
    return;
  }

  if (!name) {
    error.textContent = 'Please enter your name';
    return;
  }

  if (!email) {
    error.textContent = 'Please enter your email before submitting.';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    error.textContent = 'Please enter a valid email address';
    return;
  }

  success.textContent = ' Form submitted successfully!';
  document.getElementById('contactForm').reset();
});

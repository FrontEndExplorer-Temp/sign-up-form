document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form-container');
  const submitBtn = document.querySelector('.act-btn button');

  submitBtn.addEventListener('click', function () {
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('input').forEach(input => input.classList.remove('error'));

    const firstName = document.getElementById('first_name');
    const lastName = document.getElementById('last_name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone_number');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm_password');

    // Validation rules
    if (firstName.value.trim() === '') {
      showError(firstName, 'First name is required.');
      isValid = false;
    }

    if (lastName.value.trim() === '') {
      showError(lastName, 'Last name is required.');
      isValid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
      showError(email, 'Enter a valid email address.');
      isValid = false;
    }

    if (!/^\d{10}$/.test(phone.value.trim())) {
      showError(phone, 'Enter a valid 10-digit phone number.');
      isValid = false;
    }

    if (password.value.trim().length < 6) {
      showError(password, 'Password must be at least 6 characters.');
      isValid = false;
    }

    if (confirmPassword.value.trim() === '') {
      showError(confirmPassword, 'Please confirm your password.');
      isValid = false;
    } else if (password.value.trim() !== confirmPassword.value.trim()) {
      showError(confirmPassword, 'Passwords do not match.');
      isValid = false;
    }

    // Submit the form programmatically if valid
    if (isValid) {
      form.submit();
    }
  });

  function showError(input, message) {
    const errorSpan = document.getElementById(`${input.id}_error`);
    if (errorSpan) {
      errorSpan.textContent = message;
    }
    input.classList.add('error');
  }
});

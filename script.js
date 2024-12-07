function toggleForm(formType) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
  
    if (formType === 'login') {
      loginForm.classList.remove('hidden');
      signupForm.classList.add('hidden');
    } else if (formType === 'signup') {
      signupForm.classList.remove('hidden');
      loginForm.classList.add('hidden');
    }
  }
  
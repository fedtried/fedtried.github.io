document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Check for saved user preference
    const userPrefersDark = localStorage.getItem('darkMode') === 'true';
    
    // Check for system preference if no saved preference
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial mode
    if (userPrefersDark || (!localStorage.getItem('darkMode') && systemPrefersDark)) {
      body.classList.add('dark-mode');
    }
    
    // Update button text
    function updateButtonText() {
      if (body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '☀️';
        darkModeToggle.setAttribute('aria-label', 'Switch to light mode');
      } else {
        darkModeToggle.innerHTML = '🌙';
        darkModeToggle.setAttribute('aria-label', 'Switch to dark mode');
      }
    }
    
    updateButtonText();
    
    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
      updateButtonText();
    });
  });
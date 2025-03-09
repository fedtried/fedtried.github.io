document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio site loaded');
    
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Portfolio site loaded - checking dark mode toggle');
        
        // Get the dark mode toggle button
        const darkModeToggle = document.getElementById('darkModeToggle');
        console.log('Toggle button found:', darkModeToggle); // Debug line
        
        if (darkModeToggle) {
          // Apply saved preference first
          if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            darkModeToggle.textContent = '☀️'; // Sun icon for dark mode
          } else {
            darkModeToggle.textContent = '🌙'; // Moon icon for light mode
          }
          
          // Add click event listener
          darkModeToggle.addEventListener('click', function() {
            console.log('Dark mode toggle clicked'); // Debug line
            
            // Toggle dark mode class
            document.body.classList.toggle('dark-mode');
            
            // Update local storage
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
            
            // Update button text
            darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
            
            console.log('Dark mode is now:', isDarkMode); // Debug line
          });
        } else {
          console.log('Dark mode toggle button not found!'); // Debug line
        }
      });
  });
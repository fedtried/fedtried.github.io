document.addEventListener('DOMContentLoaded', function() {
    // Elements that will have parallax effect
    const parallaxElements = document.querySelectorAll('.constellation, .cosmic-orb');
    
    // Store initial positions for each element
    const elementPositions = {};
    
    // Initialize positions
    parallaxElements.forEach((element, index) => {
      const speed = element.getAttribute('data-speed') || (element.classList.contains('constellation') ? 0.05 : 0.1);
      elementPositions[index] = {
        element: element,
        speed: parseFloat(speed),
        initialTop: element.offsetTop
      };
    });
    
    // Throttle function to limit how often the scroll handler fires
    let lastScrollTime = 0;
    const scrollThreshold = 10; // ms
    
    // Smooth parallax on scroll with requestAnimationFrame for better performance
    function updateParallax() {
      const currentTime = Date.now();
      if (currentTime - lastScrollTime < scrollThreshold) {
        window.requestAnimationFrame(updateParallax);
        return;
      }
      
      lastScrollTime = currentTime;
      const scrollY = window.scrollY;
      
      Object.values(elementPositions).forEach(item => {
        const yOffset = scrollY * item.speed;
        item.element.style.transform = `translate3d(0, ${yOffset}px, 0)`;
      });
      
      window.requestAnimationFrame(updateParallax);
    }
    
    // Start the animation frame loop
    window.requestAnimationFrame(updateParallax);
  });
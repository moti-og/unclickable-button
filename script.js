document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('unclickable-btn');
    const attemptsSpan = document.getElementById('attempts');
    let attempts = 0;
    
    // Initialize button position
    setInitialPosition();
    
    // Move button away when mouse gets close
    btn.addEventListener('mouseenter', () => {
        attempts++;
        attemptsSpan.textContent = attempts;
        moveButton();
    });
    
    // Prevent button click (just in case someone is quick!)
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Wow! You actually managed to click it! 🎉');
    });
    
    // Move button on touch devices
    btn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        attempts++;
        attemptsSpan.textContent = attempts;
        moveButton();
    });
    
    function setInitialPosition() {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        
        // Center the button in the container initially
        btn.style.left = `${containerRect.left + containerRect.width / 2 - btn.offsetWidth / 2}px`;
        btn.style.top = `${containerRect.top + containerRect.height / 2}px`;
    }
    
    function moveButton() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const btnWidth = btn.offsetWidth;
        const btnHeight = btn.offsetHeight;
        
        // Calculate random position
        const maxX = windowWidth - btnWidth - 20;
        const maxY = windowHeight - btnHeight - 20;
        
        const randomX = Math.random() * maxX + 10;
        const randomY = Math.random() * maxY + 10;
        
        // Apply new position with animation
        btn.style.left = `${randomX}px`;
        btn.style.top = `${randomY}px`;
        
        // Add a fun rotation effect
        const rotation = Math.random() * 360;
        btn.style.transform = `rotate(${rotation}deg)`;
        
        // Reset rotation after animation
        setTimeout(() => {
            btn.style.transform = 'rotate(0deg)';
        }, 300);
    }
    
    // Reposition button on window resize
    window.addEventListener('resize', () => {
        const currentLeft = parseInt(btn.style.left);
        const currentTop = parseInt(btn.style.top);
        
        if (currentLeft > window.innerWidth - btn.offsetWidth) {
            btn.style.left = `${window.innerWidth - btn.offsetWidth - 20}px`;
        }
        if (currentTop > window.innerHeight - btn.offsetHeight) {
            btn.style.top = `${window.innerHeight - btn.offsetHeight - 20}px`;
        }
    });
});


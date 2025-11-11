document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('unclickable-btn');
    const attemptsSpan = document.getElementById('attempts');
    const niceTryMessage = document.getElementById('nice-try-message');
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    let attempts = 0;
    let confettiShown = false;
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Initialize button position
    setInitialPosition();
    
    // Move button away when mouse gets close
    btn.addEventListener('mouseenter', () => {
        attempts++;
        attemptsSpan.textContent = attempts;
        moveButton();
        checkForConfetti();
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
        checkForConfetti();
    });
    
    function setInitialPosition() {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        
        // Position the button above the title
        btn.style.left = `${containerRect.left + containerRect.width / 2 - btn.offsetWidth / 2}px`;
        btn.style.top = `${containerRect.top + 20}px`;
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
    
    function checkForConfetti() {
        if (attempts === 5 && !confettiShown) {
            confettiShown = true;
            showConfetti();
            showNiceTryMessage();
        }
    }
    
    function showNiceTryMessage() {
        niceTryMessage.classList.add('show');
        setTimeout(() => {
            niceTryMessage.classList.remove('show');
        }, 3000);
    }
    
    function showConfetti() {
        const confettiPieces = [];
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff8800', '#88ff00'];
        
        // Create confetti pieces
        for (let i = 0; i < 150; i++) {
            confettiPieces.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                r: Math.random() * 6 + 4,
                d: Math.random() * 10 + 5,
                color: colors[Math.floor(Math.random() * colors.length)],
                tilt: Math.random() * 10 - 5,
                tiltAngle: 0,
                tiltAngleIncrement: Math.random() * 0.07 + 0.05
            });
        }
        
        let animationFrame;
        function drawConfetti() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            confettiPieces.forEach((piece, index) => {
                ctx.beginPath();
                ctx.lineWidth = piece.r / 2;
                ctx.strokeStyle = piece.color;
                ctx.moveTo(piece.x + piece.tilt + piece.r, piece.y);
                ctx.lineTo(piece.x + piece.tilt, piece.y + piece.tilt + piece.r);
                ctx.stroke();
                
                // Update position
                piece.tiltAngle += piece.tiltAngleIncrement;
                piece.y += (Math.cos(piece.d) + 3 + piece.r / 2) / 2;
                piece.tilt = Math.sin(piece.tiltAngle) * 15;
                
                // Remove confetti that's off screen
                if (piece.y > canvas.height) {
                    confettiPieces.splice(index, 1);
                }
            });
            
            if (confettiPieces.length > 0) {
                animationFrame = requestAnimationFrame(drawConfetti);
            } else {
                cancelAnimationFrame(animationFrame);
            }
        }
        
        drawConfetti();
    }
    
    // Reposition button on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
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


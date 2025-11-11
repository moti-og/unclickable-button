# Unclickable Button - Project Specifications

## Project Overview
A fun, interactive web application featuring a button that moves away whenever the user attempts to click it. This project demonstrates DOM manipulation, event handling, and CSS animations in vanilla JavaScript.

## Features

### Core Functionality
- **Evasive Button**: Button automatically moves to a random position when the mouse enters its hover area
- **Attempt Counter**: Tracks and displays the number of times the user has tried to click the button
- **Success Detection**: If somehow the user manages to click the button, a congratulatory alert appears
- **Touch Support**: Works on both desktop (mouse) and mobile (touch) devices

### Technical Features
- Pure vanilla JavaScript (no frameworks required)
- Responsive design that works on various screen sizes
- Smooth CSS transitions and animations
- Random positioning algorithm to keep the button within viewport bounds
- Window resize handling to prevent button from going off-screen

## Technical Specifications

### File Structure
```
unclickable-button/
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── script.js           # Button behavior and logic
├── specs.md            # This file
└── README.md           # Project documentation
```

### Technologies Used
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with gradients, transitions, and flexbox
- **JavaScript (ES6+)**: DOM manipulation and event handling

### Browser Compatibility
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## User Experience Flow

1. **Initial State**: User sees a centered button with a challenge message
2. **Hover Attempt**: When mouse approaches the button, it jumps to a random location
3. **Counter Update**: The attempt counter increments with each try
4. **Continuous Evasion**: Button keeps moving away from every hover attempt
5. **Rare Success**: If clicked (very difficult!), shows success message

## Design Specifications

### Color Scheme
- **Primary Gradient**: Purple to blue (`#667eea` to `#764ba2`)
- **Background**: Gradient background matching theme
- **Text**: Dark gray for primary text, light gray for hints
- **Container**: White with transparency (`rgba(255, 255, 255, 0.95)`)

### Layout
- Centered container with responsive padding
- Absolute positioned button for smooth movement
- Flexbox for main container alignment
- Mobile-responsive breakpoints at 600px

### Animations
- Button movement: Smooth transition (0.3s ease)
- Hover scale effect: 1.05x scale with enhanced shadow
- Random rotation during movement
- Box shadow depth changes on interaction

## Algorithm Details

### Position Calculation
```
randomX = random(10, windowWidth - buttonWidth - 20)
randomY = random(10, windowHeight - buttonHeight - 20)
```

### Event Handlers
- `mouseenter`: Triggers movement on desktop hover
- `touchstart`: Triggers movement on mobile touch
- `click`: Shows success message (rarely triggered)
- `resize`: Repositions button if it goes off-screen

## Future Enhancement Ideas
- [ ] Difficulty levels (slower/faster movement)
- [ ] Time limit challenge mode
- [ ] Leaderboard for fastest clicks
- [ ] Sound effects
- [ ] Multiple buttons
- [ ] Particle effects on miss
- [ ] Easter egg after certain number of attempts

## Performance Considerations
- Uses `requestAnimationFrame` concepts through CSS transitions
- Minimal DOM manipulation
- Event delegation where applicable
- Debounced resize handler

## Accessibility Notes
⚠️ **Warning**: This project is intentionally designed to be frustrating and is not accessibility-friendly. It violates several WCAG guidelines:
- Button is difficult to click (intentional)
- No keyboard navigation support
- Relies heavily on mouse/touch interaction
- Could be frustrating for users with motor impairments

This is a novelty/joke project and should not be used as a template for production interfaces.

## License
Open source - feel free to use and modify for educational or entertainment purposes.

## Version History
- **v1.0.0** (2025-11-11): Initial release
  - Basic evasive button functionality
  - Attempt counter
  - Responsive design
  - Touch support


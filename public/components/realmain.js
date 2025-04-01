

// This script handles the hamburger menu toggle functionality.

// Grab references
const hamburgerButton = document.getElementById('hamburger-button');
const hamburgerIcon = document.getElementById('hamburger-icon');
const hamburgerPopup = document.getElementById('hamburger-popup');

// Adjust paths to match your actual icon files
const burgerIconPath = 'icons/burger.png';
const closeIconPath = 'icons/boldX.png';

// Toggle the menu on click
hamburgerButton.addEventListener('click', () => {
  const isMenuOpen = hamburgerPopup.style.display === 'block';

  if (isMenuOpen) {
    // Hide menu
    hamburgerPopup.style.display = 'none';
    // Switch icon back to burger
    hamburgerIcon.src = burgerIconPath;
  } else {
    // Show menu
    hamburgerPopup.style.display = 'block';
    // Switch icon to bold X
    hamburgerIcon.src = closeIconPath;
  }
});
// Select heart elements
const heartContainer = document.querySelector('.heart-container');
const heartBack = document.querySelector('.heart-back-container');
const heartFront = document.querySelector('.heart-front');

// Click event
heartContainer.addEventListener('click', () => {
  // Toggle 'clicked' class
  heartFront.classList.toggle('clicked');
  heartBack.classList.toggle('clicked');
});

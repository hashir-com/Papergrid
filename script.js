// script.js
const headerImage = document.getElementById('logo');
const targetDiv = document.getElementById('main1stdiv');

window.addEventListener('scroll', () => {
  const targetPosition = targetDiv.getBoundingClientRect().top;

  // Check if the target div has reached the top
  if (targetPosition <= 0) {
    headerImage.style.transform = 'scale(0.8)'; // Scale down
    headerImage.style.maxHeight = '60px';      // Adjust height if necessary
  } else {
    headerImage.style.transform = 'scale(1)';  // Reset scale
    headerImage.style.maxHeight = '80px';      // Reset height
  }
});

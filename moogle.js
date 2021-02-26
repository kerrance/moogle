/**
 * Moogle.js
 * 
 * Version: 1.0.0
 * 
 * Website: https://kerrance.github.io/moogle/
 */
( function() {
  const popup = document.getElementById('kupo');
  const showPopupButton = document.getElementById('kupo__open');
  const closePopupButton = document.getElementById('kupo__close');

  function showPopup() {
    popup.classList.add('kupo__active');
  }

  function hidePopup() {
    popup.classList.remove('kupo__active');
  }

  function eventListener() {
    showPopupButton.addEventListener('click', showPopup);
    closePopupButton.addEventListener('click', hidePopup);
  }

  function initMoogle() {
    eventListener();
  }

  initMoogle();
}() );

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
  const rootElement = document.documentElement;
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

  function showPopup() {
    popup.classList.add('kupo__active');
  }

  function hidePopup() {
    popup.classList.remove('kupo__active');
  }

  function showPopupOnScroll() {
    if ((rootElement.scrollTop / scrollTotal) > 0.6) {
      showPopup();
    }
  }

  function eventListener() {
    showPopupButton.addEventListener('click', showPopup);
    closePopupButton.addEventListener('click', hidePopup);
    document.addEventListener('scroll', showPopupOnScroll);

    rootElement.onclick = function(event) {
      if (event.target === popup) {
        hidePopup();
      }
    };
  }

  function initMoogle() {
    eventListener();
  }

  initMoogle();
}() );

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
  let alreadyShown = false;

  function showPopup() {
    popup.classList.add('kupo__active');
  }

  function hidePopup() {
    popup.classList.remove('kupo__active');
    alreadyShown = true;
  }

  function explicitlyDismissPopup() {
    setCookie('kupoExplicitlyDismissed', true, 28);
    hidePopup();
  }

  function showPopupOnScroll() {
    if (alreadyShown !== true) {
      if ((rootElement.scrollTop / scrollTotal) > 0.6) {
        showPopup();
      }
    }
  }

  function setCookie(name, value, daysToLive) {
    if(typeof daysToLive === 'number') {
      let date = new Date();
      date.setTime(date.getTime() + (daysToLive*24*60*60*1000));
      let expires = '; expires=' + date.toUTCString();

      document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/; secure';
    }
  }

  function eventListener() {
    showPopupButton.addEventListener('click', showPopup);
    closePopupButton.addEventListener('click', explicitlyDismissPopup);
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

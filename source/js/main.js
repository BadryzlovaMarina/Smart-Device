'use strict';

var phoneMask = IMask(
    document.querySelector('.form__phone-mask'), {
      mask: '+{7} (000) 000-00-00'
    }
);

var phoneMask = IMask(
    document.querySelector('.popup-feedback__phone-mask'), {
      mask: '+{7} (000) 000-00-00'
    }
);

var anchor = document.querySelectorAll('.anchor-link');
if (anchor) {
  anchor.forEach(function (link) {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();
      var blockId = link.getAttribute('href');
      document.querySelector(blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
}

var link = document.querySelector('.header__button-callback');
var popup = document.querySelector('.popup-feedback');
var overlay = document.querySelector('.popup-overlay');
var close = popup.querySelector('.popup-feedback__button-close');

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('popup-feedback--show');
  overlay.classList.add('popup-overlay--show');
  document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('popup-feedback--show');
  overlay.classList.remove('popup-overlay--show');
  document.body.style.overflow = null;
});

overlay.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('popup-feedback--show');
  overlay.classList.remove('popup-overlay--show');
  document.body.style.overflow = null;
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('popup-feedback--show')) {
      popup.classList.remove('popup-feedback--show');
      overlay.classList.remove('popup-overlay--show');
      document.body.style.overflow = null;
    }
  }
});

var footerToggleMenu = document.querySelector('.footer__toggle--menu');
var footerToggleAddress = document.querySelector('.footer__toggle--address');
var footerMenuList = document.querySelector('.footer__nav-list');
var footerAddress = document.querySelector('.footer__address');

if (footerMenuList) {
  footerMenuList.classList.remove('footer__nav-list--nojs');
}

if (footerAddress) {
  footerAddress.classList.remove('footer__address--nojs');
}

if (footerToggleMenu && footerMenuList && footerAddress && footerToggleAddress) {
  footerToggleMenu.classList.remove('footer__toggle--nojs');
  footerToggleMenu.addEventListener('click', function () {
    footerToggleMenu.classList.toggle('footer__toggle--closed');
    footerMenuList.classList.toggle('footer__nav-list--show');
    if (footerAddress.classList.contains('footer__address--show')) {
      footerAddress.classList.remove('footer__address--show');
      footerToggleAddress.classList.add('footer__toggle--closed');
    }
  });
}

if (footerToggleAddress && footerAddress && footerMenuList && footerToggleMenu) {
  footerToggleAddress.classList.remove('footer__toggle--nojs');
  footerToggleAddress.addEventListener('click', function () {
    footerToggleAddress.classList.toggle('footer__toggle--closed');
    footerAddress.classList.toggle('footer__address--show');
    if (footerMenuList.classList.contains('footer__nav-list--show')) {
      footerMenuList.classList.remove('footer__nav-list--show');
      footerToggleMenu.classList.add('footer__toggle--closed');
    }
  });
}

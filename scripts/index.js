let popup = document.querySelector('.popup');
let menuAboutButton = document.querySelector('.header__about');
let image = popup.querySelector('.image');

let closePopupButton = popup.querySelector('.popup__close');
let imageCloseButton = popup.querySelector('.image__close');
let imageOpenButton = popup.querySelector('.popup__link');


function popupOpenClose (evt) {
  evt.preventDefault();
  popup.classList.toggle('popup_opened');
}

function imageOpenClose (evt) {
  evt.preventDefault();
  imageOpenButton.classList.toggle('popup__link_hide');
  image.classList.toggle('image_opened');
}

function closePopupPage (evt) {
  evt.preventDefault();
  if (evt.target !== evt.currentTarget) return 
  popupOpenClose (evt);
}

popup.addEventListener('click', closePopupPage);
menuAboutButton.addEventListener('click', popupOpenClose);
closePopupButton.addEventListener('click', popupOpenClose);
imageOpenButton.addEventListener('click', imageOpenClose);
imageCloseButton.addEventListener('click', imageOpenClose);

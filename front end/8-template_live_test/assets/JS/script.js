const popupWrapper = document.querySelector('.popup-wrapper');
const startTest = document.querySelector('#start-test');
const closePopup = document.querySelector('.popup-close');

startTest.addEventListener('click', ()=> popupWrapper.style.display = 'block');
closePopup.addEventListener('click', ()=> popupWrapper.style.display = 'none');
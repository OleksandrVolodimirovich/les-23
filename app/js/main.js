'use strict';

const TOP_MENU = document.querySelector('.top__menu');  
const BOTTOM = document.querySelector('.bottom');
const BOTTOM_INNER = document.querySelector('.bottom__inner');
const TOP_FONT_WRAPPER = document.querySelector('.top__font-wrapper');
const TOP_FONT_LIST = document.querySelector('.top__font-list');
const TOP_SIZE = document.querySelector('.top__size');
const TOP_SIZE_LIST = document.querySelector('.top__size-list');
const TOP_COLOR_WRAPPER = document.querySelector('.top__color-wrapper');
const TOP_COLOR_TEXT = document.querySelector('.top__color-text');
const TOP_COLOR_PICKER = document.querySelector('.top__color-picker');
const TOP_COLOR_TITLE = document.querySelector('.top__color-title');
const TOP_COLOR_CUB = document.querySelector('.top__color-cub');
const TOP_COLOR_BG = document.querySelector('.top__color-bg');
const TOP_COLOR_LIST = document.querySelector('.top__color-list');
const TOP_COLOR_ITEM = document.querySelectorAll('.top__color-item');
const TAB_ITEM = document.querySelectorAll('.tab-item');
const TOP_COLOR_ITEM_ACTIVE = document.querySelector('.top__color--active');
const MODAL_CLOSE = document.querySelector('.modal-close');
const TAB = document.querySelector('.tab');
const TOP_IMAGES = document.querySelector('.top__images');
const SIGN_IN = document.querySelector('.top__form-box');
const SIGN_IN_BTN = document.querySelector('.top__form-button');
const TOP__LOGIN = document.querySelector('.top__login');

let isColor = false;
let isOpen = true;

TOP_MENU.addEventListener('click', (event) => {
  if(event.target.name === 'bold' && BOTTOM_INNER.style.fontWeight === 'bold'){
    BOTTOM_INNER.style.fontWeight = 'inherit';
  }
  else if(event.target.name === 'bold'){
    BOTTOM_INNER.style.fontWeight = 'bold';
  }
  else if(event.target.name === 'italic' && BOTTOM_INNER.style.fontStyle === 'italic'){
    BOTTOM_INNER.style.fontStyle = 'inherit';
  }
  else if(event.target.name === 'italic'){
    BOTTOM_INNER.style.fontStyle = 'italic';
  }
  else if(event.target.name === 'underline' && BOTTOM_INNER.style.textDecoration === 'underline'){
    BOTTOM_INNER.style.textDecoration = 'inherit';
  }
  else if(event.target.name === 'underline'){
    BOTTOM_INNER.style.textDecoration = 'underline';
  }
  else if(event.target.name === 'strikethrough' && BOTTOM_INNER.style.textDecoration === 'line-through'){
    BOTTOM_INNER.style.textDecoration = 'inherit';
  }
  else if(event.target.name === 'strikethrough'){
    BOTTOM_INNER.style.textDecoration = 'line-through';
  }
  else if(event.target.name === 'left' && BOTTOM_INNER.style.textAlign === 'left'){
    BOTTOM_INNER.style.textAlign = 'inherit';
  }
  else if(event.target.name === 'left'){
    BOTTOM_INNER.style.textAlign = 'left';
  }
  else if(event.target.name === 'center' && BOTTOM_INNER.style.textAlign === 'center'){
    BOTTOM_INNER.style.textAlign = 'inherit';
  }
  else if(event.target.name === 'center'){
    BOTTOM_INNER.style.textAlign = 'center';
  }
  else if(event.target.name === 'right' && BOTTOM_INNER.style.textAlign === 'right'){
    BOTTOM_INNER.style.textAlign = 'inherit';
  }
  else if(event.target.name === 'right'){
    BOTTOM_INNER.style.textAlign = 'right';
  }
  else if(event.target.name === 'font'){
    TOP_SIZE.classList.remove('show-block');
    TOP_FONT_WRAPPER.classList.add('show-block');
  }
  else if(event.target.name === 'font-size'){
    TOP_FONT_WRAPPER.classList.remove('show-block');
    TOP_SIZE.classList.add('show-block');
  }
  else if(event.target.name === 'palette'){
    TOP_COLOR_WRAPPER.classList.remove('hide');
    TOP_COLOR_TEXT.classList.remove('hide');
    TOP_COLOR_PICKER.classList.remove('hide');
    isColor = true;
  }
  else if(event.target.name === 'image'){
    isColor = false;
    TOP_COLOR_WRAPPER.classList.remove('hide');
    TOP_COLOR_BG.classList.remove('hide');
    TOP_COLOR_LIST.classList.remove('hide');
    TOP_COLOR_PICKER.classList.remove('hide');
  }
  else if(event.target.name === 'padlock'){
    TOP_COLOR_WRAPPER.classList.remove('hide');
    SIGN_IN.classList.remove('hide');
    if(TOP__LOGIN.style.backgroundImage != 'url(../images/padlock.png);'){
      console.log('open');
    }
  }
});

TOP_FONT_WRAPPER.addEventListener('click', (event) => {
  BOTTOM_INNER.style.fontFamily = event.target.dataset.name;
  TOP_FONT_WRAPPER.classList.remove('show-block');
});
TOP_FONT_LIST.addEventListener('mouseover', ( event ) => {
  BOTTOM_INNER.style.fontFamily = event.target.dataset.name;
});

TOP_SIZE.addEventListener('click', (event) => {
  BOTTOM_INNER.style.fontSize = event.target.dataset.name + 'px';
  TOP_SIZE.classList.remove('show-block');
});
TOP_SIZE.addEventListener('mouseover', ( event ) => {
  BOTTOM_INNER.style.fontSize = event.target.dataset.name + 'px';
});

MODAL_CLOSE.addEventListener('click', () => {
  TOP_COLOR_WRAPPER.classList.add('hide');
  TOP_COLOR_TEXT.classList.add('hide');
  TOP_COLOR_BG.classList.add('hide');
  TOP_COLOR_LIST.classList.add('hide'); 
  TAB_ITEM.forEach(function(item){
    item.classList.add('hide');
  });   
  TOP_COLOR_ITEM.forEach(function(item){
    item.classList.remove('top__color--active');
  });
  SIGN_IN.classList.add('hide');
});

TOP_COLOR_PICKER.addEventListener('click', (event) => {
  if(isColor){
    BOTTOM_INNER.style.color = getComputedStyle(event.target).backgroundColor;
    TOP_COLOR_WRAPPER.classList.add('hide');
    TOP_COLOR_TEXT.classList.add('hide');
  } else {
    BOTTOM.style.backgroundColor = getComputedStyle(event.target).backgroundColor;
    TOP_COLOR_WRAPPER.classList.add('hide');
    TOP_COLOR_BG.classList.add('hide');
    TOP_COLOR_LIST.classList.add('hide');
    TOP_COLOR_PICKER.classList.add('hide');
  }
  isColor = false;
});

TOP_COLOR_PICKER.addEventListener('mouseover', ( event ) => {
  if(isColor && event.target && event.target.tagName == 'LI') {
    BOTTOM_INNER.style.color =  getComputedStyle(event.target).backgroundColor;
  } 
  else if(event.target && event.target.tagName == 'LI'){
    console.log(event.target && event.target.tagName == 'LI');
    BOTTOM.style.backgroundColor =  getComputedStyle(event.target).backgroundColor;
  }
});

TOP_COLOR_ITEM.forEach(function(item) {
  item.addEventListener('click', function () {
    let btnActive = item;
    let dataTab = btnActive.getAttribute('data-tab');
    let tabActive = document.querySelector(dataTab);

    if(!btnActive.classList.contains('top__color--active')){
      TOP_COLOR_ITEM.forEach(function(item){
        item.classList.remove('top__color--active');
      });
  
      TAB_ITEM.forEach(function(item){
        item.classList.add('hide');
      });
  
      btnActive.classList.add('top__color--active');
      tabActive.classList.remove('hide');
    }
    
  });
});
document.querySelector('.top__color-item').click();

TOP_IMAGES.addEventListener('click', (event) => {
  BOTTOM.style.backgroundImage = getComputedStyle(event.target).backgroundImage;
  TOP_COLOR_WRAPPER.classList.add('hide');
  TOP_IMAGES.classList.add('hide');
  TOP_COLOR_LIST.classList.add('hide');
  TOP_COLOR_PICKER.classList.add('hide');
  document.querySelector('.top__color-item').click();
});

//input file
const IMAGE_INPUT = document.querySelector('.image__input');
let imageUpload = '';

IMAGE_INPUT.addEventListener('change', function(){
  const READER = new FileReader();
  READER.addEventListener('load', () => {
    imageUpload = READER.result;
    BOTTOM.style.backgroundImage = `url(${imageUpload})`;
  });
  READER.readAsDataURL(this.files[0]);
});


SIGN_IN_BTN.addEventListener('click', function(event) {
  event.preventDefault();
  const LOGIN = document.getElementById('login').value;
  const PASSWORD = document.getElementById('password').value;
  const TOP_CODE = document.querySelector('.top__code');
  if(LOGIN == 'admin' && PASSWORD == 'admin'){
    TOP_CODE.style.backgroundColor = '#f5f7f6';
    TOP_COLOR_WRAPPER.classList.add('hide');
    SIGN_IN.classList.add('hide');
    TOP__LOGIN.style.backgroundImage = 'url("../images/padlock-unlock.png")';
  }

});










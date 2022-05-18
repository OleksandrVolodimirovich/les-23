'use strict';

const ELEM = (selector) => document.querySelector(selector);

ELEM('.middle__edit-btn').addEventListener('click', () =>{
    ELEM('.bottom__textarea').value = ELEM('.top').innerHTML;
    ELEM('.bottom__edit').classList.add('show');
    ELEM('.bottom__style').classList.remove('show');
});

ELEM('.bottom__save-btn').addEventListener('click', () =>{
    ELEM('.top').innerHTML = ELEM('.bottom__textarea').value;
    ELEM('.bottom__edit').classList.remove('show');
});

ELEM('.middle__style-btn').addEventListener('click', () =>{
  ELEM('.bottom__edit').classList.remove('show');
  ELEM('.bottom__style').classList.add('show');
});

//radio-btn
ELEM('.bottom__size').addEventListener('click', (event) =>{
  if(event.target.name === 'fontSize'){
    ELEM('.top').style.fontSize = event.target.value + 'px';
  }
});

//select
ELEM('.bottom__family').addEventListener('change', (event) => {
  ELEM('.top').style.fontFamily = event.target.value;
});

//colorPicker
ELEM('.bottom__colors').addEventListener('click', (event) => {
  ELEM('.bottom__style-right').classList.add('flex');
  console.dir(event.target.name);
  ELEM('.cube').addEventListener('click', e => {
    if(event.target.name == 'bg'){
      ELEM('.top').style.backgroundColor = e.target.name;
    } 
    else if(event.target.name == 'color'){
      ELEM('.top').style.color = e.target.name;
    }
    console.log(e.target.name);
  });
});





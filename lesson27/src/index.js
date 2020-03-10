'use strict';


import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import requestanimationframe from 'requestanimationframe';
import elementClosest from 'element-closest';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopup';
import smoothScroll from './modules/smoothScroll';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changeImg from './modules/changeImage';
//import checkInput from './modules/checkInput';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

requestanimationframe(window);
elementClosest(window);

//timer
countTimer();

//menu
toggleMenu();

//popup
togglePopUp();

/* scroll */
smoothScroll();

// tab
tabs();

// slider
slider();

// hover image
changeImg();

// calc
calc(100);

// send ajax form
sendForm();

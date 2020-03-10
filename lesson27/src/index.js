'use strict';

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

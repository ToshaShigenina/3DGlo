'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopup';
import smoothScroll from './modules/smoothScroll';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changeImg from './modules/changeImg';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import checkInput from './modules/checkInput';



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

// Description: Main entry point for the application.
// imported css files
import './style.css'
import './assets/css/hero.css'
import './assets/css/portfolio.css'
import './assets/css/scrollingText.css'

// imported js files

import { animateHero } from "./assets/js/hero";
import  "./assets/js/portfolio.js";
import  "./assets/js/scrollingText.js";


window.onload = () => {
  animateHero();
};

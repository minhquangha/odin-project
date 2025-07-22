import { aboutPage } from './about.js';
import { homePage } from './home.js';
import { menuPage } from './menu.js';
const content = document.querySelector('.content')
const menuButton = document.querySelector('.menu');
const homeButton=document.querySelector('.home');
const aboutButton=document.querySelector('.about');
menuButton.addEventListener('click', ()=>menuPage(content));
homeButton.addEventListener('click', ()=>homePage (content));
aboutButton.addEventListener('click', ()=>aboutPage(content));

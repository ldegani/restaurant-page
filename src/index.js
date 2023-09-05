import './style.css';
import headingLoad from './heading';
import pageLoad from './page-load';
import menuPageLoad from './menu';
import contactPageLoad from './contact';

console.log('setembre cinque');

function initialPageLoad(){
  headingLoad();
  pageLoad();
}

initialPageLoad();

const render = () => {
  const content = document.querySelector('#content');

  while(content.children.length > 0) {
    content.children[0].remove();
  }
}

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');

homeButton.addEventListener('click', () => {
  render();
  headingLoad();
  pageLoad();
});

menuButton.addEventListener('click', () => {
  render();
  headingLoad();
  menuPageLoad();
});

contactButton.addEventListener('click', () => {
  render();
  headingLoad();
  contactPageLoad();
});
import homePageLoad from './home';
import menuPageLoad from './menu';
import contactPageLoad from './contact'

const headingLoad = () => {
  const contentDiv = document.querySelector('#content');
  
  const headOne = document.createElement('h1');
  headOne.textContent = 'My Coffee Site';
  contentDiv.appendChild(headOne);

  const linksName = ['Home', 'Menu', 'Contact'];
  const ulLinks = document.createElement('ul'); 
  contentDiv.appendChild(ulLinks);
  makeLinks();

    
  function makeLinks() {
    for (let i = 0; i < linksName.length; i++) {
      const li = document.createElement('li');
      ulLinks.appendChild(li);

      const liAppend = ulLinks.lastChild;
      const anchor = document.createElement('a');
      anchor.textContent = linksName[i];
      anchor.setAttribute('id', linksName[i].toLocaleLowerCase())
      anchor.href = '#';
      liAppend.appendChild(anchor);
    }
  }

  const homeButton = document.getElementById('home');
  const menuButton = document.getElementById('menu');
  const contactButton = document.getElementById('contact');

  homeButton.addEventListener('click', () => {
    render();
    headingLoad();
    homePageLoad();
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
}

function render() {
  const content = document.querySelector('#content');
  content.innerHTML = '';
}

export default headingLoad;
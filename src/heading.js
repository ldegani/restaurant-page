const headingLoad = () => {
  const contentDiv = document.querySelector('#content');
  
  const headOne = document.createElement('h1');
  headOne.textContent = 'My Coffee Site';
  contentDiv.appendChild(headOne);

  const pages = ['Home', 'Menu', 'Contact'];
  const ulLinks = document.createElement('ul');
  contentDiv.appendChild(ulLinks);
  makeLinks();

    
  function makeLinks() {
    for (let i = 0; i < pages.length; i++) {
      const li = document.createElement('li');
      ulLinks.appendChild(li);

      const liAppend = ulLinks.lastChild;
      const anchor = document.createElement('a');
      anchor.textContent = pages[i];
      anchor.setAttribute('id', pages[i].toLocaleLowerCase())
      anchor.href = '#';
      liAppend.appendChild(anchor);
    }
  }
}

export default headingLoad;
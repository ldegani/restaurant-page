const homePageLoad = () => {
  const contentDiv = document.querySelector('#content');
  
  const headOne = document.createElement('h1');
  headOne.textContent = 'My Coffee Site';
  contentDiv.appendChild(headOne);

  const pages = ['Home', 'About', 'Contact'];
  const ulLinks = document.createElement('ul');
  contentDiv.appendChild(ulLinks);
  makeLinks();
  
  const sectionOne = document.createElement('section');
  contentDiv.appendChild(sectionOne);

  const sectionTwo = document.createElement('section');
  contentDiv.appendChild(sectionTwo);
  
  function makeLinks() {
    for (let i = 0; i < pages.length; i++) {
      const li = document.createElement('li');
      li.textContent = pages[i];
      ulLinks.appendChild(li);
    }
  }

  const imgOne = document.createElement('img');
  imgOne.src = '../src/img/moka-black-coffee.jpg';
  sectionOne.appendChild(imgOne);
  
  const divSectionOne = document.createElement('div');
  divSectionOne.classList.add('container-sections');
  sectionOne.appendChild(divSectionOne);

  const headingParaOne = document.createElement('span');
  headingParaOne.textContent = 'Our Mission:';
  divSectionOne.appendChild(headingParaOne);

  const paragraphOne = document.createElement('p');
  paragraphOne.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse voluptates eveniet dignissimos voluptatibus, perspiciatis tempora, id quia quos reprehenderit sapiente explicabo qui rerum facilis. Veritatis reiciendis nisi atque fuga inventore!';
  divSectionOne.appendChild(paragraphOne);

  const divSectionTwo = document.createElement('div');
  divSectionTwo.classList.add('container-sections');
  sectionTwo.appendChild(divSectionTwo);

  const headingParaTwo = document.createElement('span');
  headingParaTwo.textContent = 'Our Values';
  divSectionTwo.appendChild(headingParaTwo);

  const paragraphTwo = document.createElement('p');
  paragraphTwo.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis reiciendis nisi atque fuga inventore! Esse voluptates eveniet dignissimos voluptatibus, perspiciatis tempora, id quia quos reprehenderit sapiente explicabo qui rerum facilis.'
  divSectionTwo.appendChild(paragraphTwo);

  const imgTwo = document.createElement('img');
  imgTwo.src = '../src/img/coffee-filters.jpg';
  sectionTwo.appendChild(imgTwo);
}

export default homePageLoad();
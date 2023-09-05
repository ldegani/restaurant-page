const menuPageLoad = () => {
  console.log('menu, motherfucker');

  const content = document.querySelector('#content');

  const section = document.createElement('section');
  section.textContent = 'TESTING MENU CONTENT';
  content.appendChild(section);
}

export default menuPageLoad;
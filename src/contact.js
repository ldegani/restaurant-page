const contactPageLoad = () => {
  console.log('contact, you bitch');
  const content = document.querySelector('#content');

  const section = document.createElement('section');
  section.textContent = 'TESTING CONTACT CONTENT';
  content.appendChild(section);
}

export default contactPageLoad;
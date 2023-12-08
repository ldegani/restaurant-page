const contactPageLoad = () => {
  const content = document.querySelector('#content');

  const section = document.createElement('section-contact');
  content.appendChild(section);

  const form = document.createElement('form');
  form.classList.add('contact-form');

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Name:';
  form.appendChild(nameInput);

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.placeholder = 'E-mail Contact:';
  form.appendChild(emailInput);

  const phoneInput = document.createElement('input');
  phoneInput.type = 'tel';
  phoneInput.placeholder = 'Phone Contact:';
  phoneInput.pattern = '[0-9]{9}';
  form.appendChild(phoneInput);
  
  const messageInput = document.createElement('textarea');
  messageInput.placeholder = 'Your Message';
  messageInput.rows = 4;
  form.appendChild(messageInput);

  const submitButton = document.createElement('button');
  submitButton.type = 'button';
  submitButton.textContent = 'Submit';
  // submitButton.onclick = submitForm;

  form.appendChild(submitButton);
  section.appendChild(form);
}

export default contactPageLoad;
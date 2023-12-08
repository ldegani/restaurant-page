const menuPageLoad = () => {
  const content = document.querySelector('#content');

  let menuItems = [
    'Espresso',
    'Cappuccino',
    'Macchiato',
    'Americano',
  ]

  let menuPrices = [
    '$1.00',
    '$1.40',
    '$1.40',
    '$1.20'
  ]

  const section = document.createElement('section');
  content.appendChild(section);

  const heading = document.createElement('h2');
  heading.textContent = 'Menu Items';
  section.appendChild(heading);

  const list = document.createElement('ul');
  list.setAttribute('id', 'menu-list');
  section.appendChild(list);
  insertMenuItems();

  function insertMenuItems(){
    for(let i = 0; i < menuItems.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `${menuItems[i]} - ${menuPrices[i]}`;
      list.appendChild(listItem);
    }
  }
}

export default menuPageLoad;
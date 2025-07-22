const menuPage = (element) => {
    element.textContent='';
    const menu = document.createElement('div');
    menu.setAttribute('class', 'menuItems');
    menu.textContent = 'This is menu page';
    element.append(menu);
};
module.exports = {menuPage};

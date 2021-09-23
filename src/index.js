import menuItems from './menu.json';
import menuCardTpl from './templates/menu-cards-markup.hbs';
function createMenuCardsMarkup (menuItems) {
    return menuItems.map(menuCardTpl)
        .join('');
}
// Вешаем слушателя событий
const refs = {
    menuList: document.querySelector('.js-menu'),
}
console.log(refs);
const menuMarkup = createMenuCardsMarkup(menuItems);
refs.menuList.insertAdjacentHTML('beforeend', menuMarkup) ;
console.log(refs.menuList);
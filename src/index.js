import menuItems from './menu.json';
import createMenuCardsMarkup from './js/createMarkup';

// Вешаем слушателя событий
const refs = {
    menuList: document.querySelector('.js-menu'),
}
console.log(refs);
const menuMarkup = createMenuCardsMarkup(menuItems);
refs.menuList.insertAdjacentHTML('beforeend', menuMarkup) ;
console.log(refs.menuList);
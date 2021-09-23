import './sass/main.scss';
import menuItems from './menu.json';
import menuCardTpl from './templates/menu-cards-markup.hbs';
function createMenuCardsMarkup (menuItems) {
    return menuItems.map(menuCardTpl)
        .join('');
}

const refs = {
    menuList: document.querySelector('.js-menu'),
    themeCheckbox: document.querySelector('.theme-switch__toggle'),
}
console.log(refs);
// Вешаем слушателя событий
refs.themeCheckbox.addEventListener('change', (e) => {
    console.log('Изменение темы!');

});
const menuMarkup = createMenuCardsMarkup(menuItems);
refs.menuList.insertAdjacentHTML('beforeend', menuMarkup) ;
console.log(refs.menuList);
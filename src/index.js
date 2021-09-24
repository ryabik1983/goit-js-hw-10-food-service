import './sass/main.scss';
import menuItems from './menu.json';
import menuCardTpl from './templates/menu-cards-markup.hbs';
function createMenuCardsMarkup (menuItems) {
    return menuItems.map(menuCardTpl)
        .join('');
}

const refs = {
    menuList: document.querySelector('.js-menu'),
    themeCheckbox: document.getElementById('theme-switch-toggle'),
}
const {menuList, themeCheckbox} = refs;
console.dir(themeCheckbox);
console.log(themeCheckbox.checked);
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

// Вешаем слушателя событий
refs.themeCheckbox.addEventListener('change', (e) => {
    console.log('Изменение темы!');
    console.log(e.target.checked);
    console.log(localStorage.getItem('theme'));
    if (e.target.checked) {
        localStorage.setItem('theme', Theme.DARK);
        // document.querySelector('body').classList.remove('light-theme')
        document.querySelector('body').classList.add('dark-theme')
    } 
    else
    {localStorage.setItem('theme', Theme.LIGHT);
    // document.querySelector('body').classList.remove('dark-theme')}
    document.querySelector('body').classList.add('light-theme')
    }
});
// if (localStorage.getItem('theme') === 'DARK') {
//     document.querySelector('body').classList.add('dark-theme');
//     localStorage.setItem('theme', 'DARK')
// }
// else{
//     document.querySelector('body').classList.remove('dark-theme');
//     localStorage.setItem('theme', 'LIGHT');


// let theme = localStorage.getItem('theme');
// console.log(theme);
// if (theme === 'DARK'){
//     documet.querySelecntor('body').classList.add('dark-theme')
// }
// else
// {
//     document.querySelector('body').classList.add('light-theme');
// }
  
const menuMarkup = createMenuCardsMarkup(menuItems);
refs.menuList.insertAdjacentHTML('beforeend', menuMarkup) ;
console.log(refs.menuList);

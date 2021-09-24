import menuItems from './menu.json';
import menuCardTpl from './templates/menu-cards-markup.hbs';
import refs from './js/refs';
function createMenuCardsMarkup (menuItems) {
    return menuItems.map(menuCardTpl)
        .join('');
}

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  refs.body.classList.add('light-theme');
  refs.body.classList.add(localStorage.getItem('theme'));
// Вешаем слушателя событий

refs.themeCheckbox.addEventListener('change', (e) => {
    if (e.target.checked) {
        localStorage.setItem('theme', Theme.DARK);
        document.querySelector('body').classList.replace('light-theme', 'dark-theme');
    } 
    else
    {localStorage.setItem('theme', Theme.LIGHT);
    document.querySelector('body').classList.replace('dark-theme', 'light-theme')
    }
});
if(refs.body.classList.contains('dark-theme')){
    refs.themeCheckbox.checked = true;
}
// Создаем динамически разметку   
const menuMarkup = createMenuCardsMarkup(menuItems);
refs.menuList.insertAdjacentHTML('beforeend', menuMarkup) ;


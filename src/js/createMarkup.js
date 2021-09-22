export default function createMenuCardsMarkup (items) {
    return items
        .map(({ id, name, description, image, price, ingredients }) => {
            return `
<li class="menu__item">
  <article class="card">
    <img
      src="${image}"
      alt="${description}"
      class="card__image"
    />
    <div class="card__content">
      <h2 class="card__name">${name}</h2>
      <p class="card__price">
        <i class="material-icons"> monetization_on </i>
        ${price} кредитов
      </p>

      <p class="card__descr">
        ${description}
        </p>

      <ul class="tag-list">
        <li class="tag-list__item">${ingredients[0]}</li>
        <li class="tag-list__item">${ingredients[1]}</li>
        <li class="tag-list__item">${ingredients[2]}</li>
        <li class="tag-list__item">${ingredients[3]}</li>
        <li class="tag-list__item">${ingredients[4]}</li>
        <li class="tag-list__item">${ingredients[5]}</li>
        <li class="tag-list__item">${ingredients[6]}</li>
      </ul>
    </div>

    <button class="card__button button">
      <i class="material-icons button__icon"> shopping_cart </i>
      В корзину
    </button>
  </article>
</li>
`;
 }
 )
        .join('');
}
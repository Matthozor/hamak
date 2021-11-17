const buttons = document.querySelectorAll(".js-cardItem")
const toggleClass = '-active';

for (const button of buttons) {
  button.addEventListener('click', function() {
    const currentActive = document.querySelector('.card__item.-active .js-cardItem');

    if (currentActive && !currentActive.isEqualNode(button)) {
      currentActive.parentNode.classList.remove('-active');
    }

    button.parentNode.classList.toggle('-active');
  })
}

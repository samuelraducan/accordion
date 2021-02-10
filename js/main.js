/* NOTE: Global Variables */
const accordionContainer = document.querySelector('.accordion-container');

/* NOTE: Functions */

/* NOTE: Event Listeners */
accordionContainer.addEventListener('click', event => {
  // Event Delegation.
  const accordionHeader = event.target.closest('.accordion__header');

  if (accordionHeader) {
    const accordion = accordionHeader.parentElement;
    const accordionContent = accordionHeader.nextElementSibling;
    const accordionInner = accordionContent.children[0];

    let height = 0;
    if (accordion.classList.contains('is-open')) {
      hight = 0;
    } else {
      height = accordionInner.getBoundingClientRect().height;
    }

    accordion.classList.toggle('is-open');
    accordionContent.style.height = height + 'px';
  }
});

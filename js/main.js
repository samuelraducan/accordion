const accordions = [...document.querySelectorAll('.accordion')];

accordions.forEach(accordion => {
  // Find the accordion header
  const accordionHeader = accordion.querySelector('.accordion__header');

  // Event Listener -> Accordion Header
  accordionHeader.addEventListener('click', event => {
    // Toggle is open class
    accordion.classList.toggle('is-open');
  });
});

const moreButton = document.querySelector('.examples__more-button');
const examples = document.querySelectorAll('.example');
const spans = document.querySelectorAll("button span");

moreButton.addEventListener('click', () => {
  for (let i = 4; i < examples.length; i++) {
    examples[i].classList.toggle('example--hidden');
  }
  spans.forEach((span) => {
    span.classList.toggle('button--hidden');
  });
});



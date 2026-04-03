(() => {
  // source/scripts/moreExamples.js
  var moreButton = document.querySelector(".examples__more-button");
  var examples = document.querySelectorAll(".example");
  var spans = document.querySelectorAll("button span");
  moreButton.addEventListener("click", () => {
    for (let i = 4; i < examples.length; i++) {
      examples[i].classList.toggle("example--hidden");
    }
    spans.forEach((span) => {
      span.classList.toggle("button--hidden");
    });
  });
})();
//# sourceMappingURL=moreExamples.js.map

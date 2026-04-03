(() => {
  // source/scripts/agreement.js
  var submitButton = document.querySelector(".form__button");
  var checkbox = document.getElementById("agree");
  submitButton.disabled = true;
  checkbox.addEventListener("change", () => {
    if (checkbox.checked)
      submitButton.disabled = false;
    else
      submitButton.disabled = true;
  });
})();
//# sourceMappingURL=agreement.js.map

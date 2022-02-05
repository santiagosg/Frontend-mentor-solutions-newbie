var accordionItem = document.getElementsByClassName("accordion__item");
var i;

for (i = 0; i < accordionItem.length; i++) {
  accordionItem[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "--selected" class */
    this.classList.toggle("accordion__item--selected");

    /* Toggle between hiding and showing the active panel */
    var panel = this.lastElementChild;
  });
}

"use strict";

var shareButton = document.querySelector(".info__share");
var shareInfo = document.querySelector(".share");

shareButton.addEventListener("click", function () {
    /* Toggle between adding and removing the "activated" class to share info */
    shareInfo.classList.toggle("activated");

    /* Toggle between adding and removing the "active" class to share button */
    this.classList.toggle("active");

})
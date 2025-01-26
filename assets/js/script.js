'use strict';
/* Add eventlistener on multiple elements */
const addEventOnElements= function (elements, eventType, callback)
{
    for (let i=0, len= elements.length; i<len; i++) 
    {
        elements[i].addEventListener(eventType, callback);
    }
}
/* PRELOADER */
const preloader = document.querySelector("[data-preloader]");
window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    this.document.body.classList.add("loaded");
});
!function(){"use strict";new class{#e=null;#s={};#t=[];constructor(e,s){this.#e=document.querySelector(e),this.#s=s,this.#i()}#i(){this.#t=this.#e.querySelectorAll(".tabs__question-header"),this.bindEventListeners()}bindEventListeners(){this.clickHandler=this.clickHandler.bind(this),this.#t.forEach((e=>e.addEventListener("click",this.clickHandler)))}clickHandler(e){const s=e.target;this.isOpen(s)?this.close(s):this.open(s)}isOpen(e){return e.parentNode.classList.contains("_open")}open(e){e.parentNode.classList.add("_open")}close(e){e.parentNode.classList.remove("_open")}}(".faq__tabs",{})}();
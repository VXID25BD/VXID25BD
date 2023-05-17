"use strict";

export class Tabs{
    #el = null;
    #options = {};
    #tabTriggers = [];

    constructor(selector, options){
        this.#el = document.querySelector(selector);
        this.#options = options;
        
        this.#setup();
    }

    #setup(){
        this.#tabTriggers = this.#el.querySelectorAll(".tabs__question-header");

        this.bindEventListeners();
    }

    bindEventListeners(){
        this.clickHandler = this.clickHandler.bind(this);
        this.#tabTriggers.forEach(tabTrigger => tabTrigger.addEventListener("click", this.clickHandler));
    }

    clickHandler(event){
        const target = event.target;
        this.isOpen(target) ? this.close(target) : this.open(target);
    }

    isOpen(target){
        return target.parentNode.classList.contains("_open");
    }

    open(target){
        target.parentNode.classList.add("_open");
    }

    close(target){
        target.parentNode.classList.remove("_open");
    }
}
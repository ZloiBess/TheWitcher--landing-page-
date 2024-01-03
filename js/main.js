'use strict'

const bgParallax = document.querySelector(".bg-parallax");
const bgShiftPercent = 5; //example: 5%;
const sparksBackParallax = document.querySelector(".parallax-main__sparks-back");
const sparksBackShiftPercent = 5;
const sparksFronParallax = document.querySelector(".parallax-main__sparks-front");
const sparksFrontShiftPercent = 5;

const btnCopyCode = document.querySelector(".form__btn");
const txtBonusCode = document.querySelector(".form__input");


//parallax from mouse movement.
document.onmousemove = (e) => {
    //get coordinate mouse in px and mark zero in the middle page.
    let x = e.pageX - (window.innerWidth / 2);
    let y = e.pageY - (window.innerHeight / 2);

    //convert in percent.
    x = x / (window.innerWidth / 2) * 100;
    y = y / (window.innerHeight / 2) * 100;

    //bg
    bgParallax.style.cssText = `transform: translate(
        ${x * (bgShiftPercent / 100)}%,
        ${y * (bgShiftPercent / 100)}%
    );`;
    //sparks back
    sparksBackParallax.style.cssText = `transform: translate(
        ${x * (sparksBackShiftPercent / 100)}%
    
    );`;
    //sparks front.
    sparksFronParallax.style.cssText = `transform: translate(
        ${-x * (sparksFrontShiftPercent / 100)}%
        
    );`;
}


//copy bonus code.
btnCopyCode.addEventListener("click", () => {
    //get code
    let txtCode = txtBonusCode.getAttribute("placeholder");
    
    //create temp element
    var textarea = document.createElement('textarea');
    textarea.value = txtCode.toUpperCase();
    //add temp element in doc
    document.body.appendChild(textarea);
    // select in temp element
    textarea.select();

    // copy in buff.
    document.execCommand("copy");

    //remove temp element
    document.body.removeChild(textarea);
})


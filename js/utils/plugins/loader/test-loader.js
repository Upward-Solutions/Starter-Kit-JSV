import { 
    ballPulse, 
    clipRotate, 
    scaleRipple, 
    circleSpin,
    gridPulse,
    pulseSync
 } from "./loaders.js";

 document.body.style.backgroundColor = 'black'

document.body.innerHTML += `<p>${ballPulse("#ff6e10")}</p>`;
document.body.innerHTML += `<p>${clipRotate("#ff6e10")}</p>`;
document.body.innerHTML += `<p>${pulseSync("#ff6e10")}</p>`;
document.body.innerHTML += `<p>${scaleRipple("#ff6e10")}</p>`;
document.body.innerHTML += `<p>${scaleRipple()}</p>`;
document.body.innerHTML += `<p>${circleSpin("#ff6e10")}</p>`;
document.body.innerHTML += `<p>${circleSpin()}</p>`;
document.body.innerHTML += `<p>${gridPulse("#ff6e10")}</p>`;
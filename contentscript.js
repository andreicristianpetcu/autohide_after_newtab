"use strict";
window.addEventListener("keydown", keysPressed, false);
window.addEventListener("keyup", keysReleased, false);
var keys = {};

function keysPressed(e) {
    const isCtrlOrdK = e.keyCode == 17 || e.keyCode == 75;
    if (isCtrlOrdK) {
        keys[e.keyCode] = true;
    }
    const isCtrlAndK = keys[17] && keys[75];
    if (isCtrlAndK) {
        keys = {};
        e.preventDefault();
        window.location = "about:home";
    }
}

function keysReleased(e) {
    keys = {};
}

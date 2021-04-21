// ==UserScript==
// @name         Gather Town Shortcuts
// @version      0.1
// @description  Enable/Disable audio/video
// @author       Davide
// @match        https://gather.town/app/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function toggleAudio() {
        let elements = document.querySelectorAll('.GameVideo-self-video-menu-bottom > button');
        if(elements && elements.length) {
            elements[0].click();
        }
    }

    function toggleVideo() {
        let elements = document.querySelectorAll('.GameVideo-self-video-menu-bottom > button');
        if(elements && elements.length) {
            elements[1].click();
        }
    }

    document.addEventListener ("keydown", function(event) {
        if (event.key === "m") {
            toggleAudio();
        }
        if (event.key === "v") {
            toggleVideo();
        }
    });
})();
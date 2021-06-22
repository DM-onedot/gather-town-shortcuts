// ==UserScript==
// @name         Gather Town Shortcuts
// @version      0.2
// @description  Enable/Disable audio/video and full screen
// @author       Davide
// @match        https://gather.town/app/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function getElements() {
        let own = document.querySelectorAll('.GameVideo-self-video-container button');
        let group = document.querySelectorAll('.GameVideosContainer-videobar-content button');
        if (own && own.length) {
            return own;
        }
        if (group && group.length) {
            return group;
        }
        return undefined;
    }

    function toggleAudio() {
        let elements = getElements();
        if(elements && elements.length) {
            elements[0].click();
        }
    }

    function toggleVideo() {
        let elements = getElements();
        if(elements && elements.length) {
            elements[1].click();
        }
    }

    function toggleFullscreen() {
        document.querySelector('.GameVideosContainer-expand button').click();
    }

    document.addEventListener ("keydown", function(event) {
        if (event.key === "m") {
            toggleAudio();
        }
        if (event.key === "v") {
            toggleVideo();
        }
        if (event.key === "f") {
            toggleFullscreen();
        }
    });
})();

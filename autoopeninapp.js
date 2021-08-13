// ==UserScript==
// @name        Notion.so - Auto Open in App
// @name:en     Notion.so - Auto Open in App
// @description Add a 'Open in App' button to the sign in page
// @namespace   https://github.com/cdeleon94
// @match       https://www.notion.so/*
// @run-at      document-start
// @version     0.0.3
// @grant       GM.setValue
// @grant       GM.getValue
// ==/UserScript==

function open_app() {
    pageid = window.location.href.match(/https:\/\/www\.notion\.so\/(.*)/)[1];
    window.open("notion:/".concat(pageid));
    window.close()
}

open_app()

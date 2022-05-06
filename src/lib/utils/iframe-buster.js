// Copyright (c) 2020, Kryptokrona Developers
//
// Please see the included LICENSE file for more information.
/* ---- super simple iframe busting ---- */
(function(window) {
    if (window.location !== window.top.location) {
        window.top.location = window.location;
    }
})(this);
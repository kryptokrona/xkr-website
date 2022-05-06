// Copyright (c) 2020, Kryptokrona Developers
//
// Please see the included LICENSE file for more information.

var show_generate = function () {
    document.getElementById("generate").style.display = "block";
    document.getElementById("restore").style.display = "none";
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "none";
    document.getElementById("step4").style.display = "none";
};

var show_restore = function () {
    document.getElementById("restore").style.display = "block";
    document.getElementById("generate").style.display = "none";
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "none";
    document.getElementById("step4").style.display = "none";

};

var getStringWords = function (string) {
    return string.replace(/^\s*(.*)\s*$/, '$1').replace(/\s+/, ' ').split(' ');
};

var genkeys = function (additional_entropy, lang) {
    var seed = cnUtil.sc_reduce32(poor_mans_kdf(additional_entropy + cnUtil.rand_32()));
    var keys = cnUtil.create_address(seed);
    var passPhrase = mn_encode(seed, lang);
    return {
        keys: keys,
        mnemonic: passPhrase
    }
};

var restore_keys = function (lang) {
    var seed_phrase = document.getElementById("seed_phrase").value;
    var seed = mn_decode(seed_phrase);
    var keys = cnUtil.create_address(seed);

    address_widget.innerHTML = keys.public_addr;
    mnemonic_widget.innerHTML = seed_phrase;
    spend_key_widget.innerHTML = keys.spend.sec;
    view_key_widget.innerHTML = keys.view.sec;

    document.getElementById("step2").style.display = "block";
    document.getElementById("step3").style.display = "block";
    document.getElementById("step4").style.display = "block";

};

var genwallet = function (lang) {
    document.getElementById("step2").style.display = "block";
    document.getElementById("step3").style.display = "block";
    document.getElementById("step4").style.display = "block";

    var spend_key_widget = document.getElementById("spend_key_widget");
    var view_key_widget = document.getElementById("view_key_widget");
    var address_widget = document.getElementById("address_widget");
    var address_qr_widget = document.getElementById("address_qr_widget");
    var user_entropy_widget = document.getElementById("user_entropy_widget");



    var res = genkeys(user_entropy_widget.value, lang);
    var keys = res.keys;
    var mnemonic = res.mnemonic;

    address_widget.innerHTML = keys.public_addr;
    mnemonic_widget.innerHTML = mnemonic;
    spend_key_widget.innerHTML = keys.spend.sec;
    view_key_widget.innerHTML = keys.view.sec;

    address_widget_copy.innerHTML = keys.public_addr;
    mnemonic_widget_copy.innerHTML = mnemonic;
    spend_key_widget_copy.innerHTML = keys.spend.sec;
    view_key_widget_copy.innerHTML = keys.view.sec;

    var typeNumber = 0;
    var errorCorrectionLevel = 'L';

    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(keys.public_addr);
    qr.make();
    document.getElementById('address_qr_widget_copy').innerHTML = qr.createImgTag();


    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(keys.spend.sec);
    qr.make();
    document.getElementById('qrcodeSecret_copy').innerHTML = qr.createImgTag();

    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(keys.view.sec);
    qr.make();
    document.getElementById('qrcodeView_copy').innerHTML = qr.createImgTag();


    /**
     * Identicon.js 2.3.3
     * http://github.com/stewartlord/identicon.js
     *
     * PNGLib required for PNG output
     * http://www.xarg.org/download/pnglib.js
     *
     * Copyright 2018, Stewart Lord
     * Released under the BSD license
     * http://www.opensource.org/licenses/bsd-license.php
     */

    (function () {
        var PNGlib;
        if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
            PNGlib = require('./pnglib');
        } else {
            PNGlib = window.PNGlib;
        }

        var Identicon = function (hash, options) {
            if (typeof (hash) !== 'string' || hash.length < 15) {
                throw 'A hash of at least 15 characters is required.';
            }

            this.defaults = {
                background: [240, 240, 240, 255],
                margin: 0.08,
                size: 64,
                saturation: 0.7,
                brightness: 0.5,
                format: 'png'
            };

            this.options = typeof (options) === 'object' ? options : this.defaults;

            // backward compatibility with old constructor (hash, size, margin)
            if (typeof (arguments[1]) === 'number') {
                this.options.size = arguments[1];
            }
            if (arguments[2]) {
                this.options.margin = arguments[2];
            }

            this.hash = hash
            this.background = this.options.background || this.defaults.background;
            this.size = this.options.size || this.defaults.size;
            this.format = this.options.format || this.defaults.format;
            this.margin = this.options.margin !== undefined ? this.options.margin : this.defaults.margin;

            // foreground defaults to last 7 chars as hue at 70% saturation, 50% brightness
            var hue = parseInt(this.hash.substr(-7), 16) / 0xfffffff;
            var saturation = this.options.saturation || this.defaults.saturation;
            var brightness = this.options.brightness || this.defaults.brightness;
            this.foreground = this.options.foreground || this.hsl2rgb(hue, saturation, brightness);
        };

        Identicon.prototype = {
            background: null,
            foreground: null,
            hash: null,
            margin: null,
            size: null,
            format: null,

            image: function () {
                return this.isSvg() ?
                    new Svg(this.size, this.foreground, this.background) :
                    new PNGlib(this.size, this.size, 256);
            },

            render: function () {
                var image = this.image(),
                    size = this.size,
                    baseMargin = Math.floor(size * this.margin),
                    cell = Math.floor((size - (baseMargin * 2)) / 5),
                    margin = Math.floor((size - cell * 5) / 2),
                    bg = image.color.apply(image, this.background),
                    fg = image.color.apply(image, this.foreground);

                // the first 15 characters of the hash control the pixels (even/odd)
                // they are drawn down the middle first, then mirrored outwards
                var i, color;
                for (i = 0; i < 15; i++) {
                    color = parseInt(this.hash.charAt(i), 16) % 2 ? bg : fg;
                    if (i < 5) {
                        this.rectangle(2 * cell + margin, i * cell + margin, cell, cell, color, image);
                    } else if (i < 10) {
                        this.rectangle(1 * cell + margin, (i - 5) * cell + margin, cell, cell, color, image);
                        this.rectangle(3 * cell + margin, (i - 5) * cell + margin, cell, cell, color, image);
                    } else if (i < 15) {
                        this.rectangle(0 * cell + margin, (i - 10) * cell + margin, cell, cell, color, image);
                        this.rectangle(4 * cell + margin, (i - 10) * cell + margin, cell, cell, color, image);
                    }
                }

                return image;
            },

            rectangle: function (x, y, w, h, color, image) {
                if (this.isSvg()) {
                    image.rectangles.push({
                        x: x,
                        y: y,
                        w: w,
                        h: h,
                        color: color
                    });
                } else {
                    var i, j;
                    for (i = x; i < x + w; i++) {
                        for (j = y; j < y + h; j++) {
                            image.buffer[image.index(i, j)] = color;
                        }
                    }
                }
            },

            // adapted from: https://gist.github.com/aemkei/1325937
            hsl2rgb: function (h, s, b) {
                h *= 6;
                s = [
                    b += s *= b < .5 ? b : 1 - b,
                    b - h % 1 * s * 2,
                    b -= s *= 2,
                    b,
                    b + h % 1 * s,
                    b + s
                ];

                return [
                    s[~~h % 6] * 255, // red
                    s[(h | 16) % 6] * 255, // green
                    s[(h | 8) % 6] * 255 // blue
                ];
            },

            toString: function (raw) {
                // backward compatibility with old toString, default to base64
                if (raw) {
                    return this.render().getDump();
                } else {
                    return this.render().getBase64();
                }
            },

            isSvg: function () {
                return this.format.match(/svg/i)
            }
        };

        var Svg = function (size, foreground, background) {
            this.size = size;
            this.foreground = this.color.apply(this, foreground);
            this.background = this.color.apply(this, background);
            this.rectangles = [];
        };

        Svg.prototype = {
            size: null,
            foreground: null,
            background: null,
            rectangles: null,

            color: function (r, g, b, a) {
                var values = [r, g, b].map(Math.round);
                values.push((a >= 0) && (a <= 255) ? a / 255 : 1);
                return 'rgba(' + values.join(',') + ')';
            },

            getDump: function () {
                var i,
                    xml,
                    rect,
                    fg = this.foreground,
                    bg = this.background,
                    stroke = this.size * 0.005;

                xml = "<svg xmlns='http://www.w3.org/2000/svg'" +
                    " width='" + this.size + "' height='" + this.size + "'" +
                    " style='background-color:" + bg + ";'>" +
                    "<g style='fill:" + fg + "; stroke:" + fg + "; stroke-width:" + stroke + ";'>";

                for (i = 0; i < this.rectangles.length; i++) {
                    rect = this.rectangles[i];
                    if (rect.color == bg) continue;
                    xml += "<rect " +
                        " x='" + rect.x + "'" +
                        " y='" + rect.y + "'" +
                        " width='" + rect.w + "'" +
                        " height='" + rect.h + "'" +
                        "/>";
                }
                xml += "</g></svg>"

                return xml;
            },

            getBase64: function () {
                if ('function' === typeof btoa) {
                    return btoa(this.getDump());
                } else if (Buffer) {
                    return new Buffer(this.getDump(), 'binary').toString('base64');
                } else {
                    throw 'Cannot generate base64 output';
                }
            }
        };

        if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
            module.exports = Identicon;
        } else {
            window.Identicon = Identicon;
        }
    })();

    //intToRGB

    var errorMessage = 'Must provide an integer between 0 and 16777215';

    const intToRGB = function (int) {
        if (typeof int !== 'number') throw new Error(errorMessage);
        if (Math.floor(int) !== int) throw new Error(errorMessage);
        if (int < 0 || int > 16777215) throw new Error(errorMessage);

        var red = int >> 16;
        var green = int - (red << 16) >> 8;
        var blue = int - (red << 16) - (green << 8);

        return {
            red: red,
            green: green,
            blue: blue
        }
    }

    //Code for new identicon

    const hashCode = (str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        return parseInt(Math.abs(hash / 10000));
    }

    const get_avatar = (hash, size) => {

        if (hash.length < 15) {
            hash = 'SEKReT2pkQ71zEddQ81VdqDVU88MCQPgtRGsMgrDemVB9oK4xZYmsgX2vXctPkERrzRWnDZNPEFER4HMd5QPFdAuQ7Dg9hy2MCF';
        }

        // Get custom color scheme based on address
        let rgb = intToRGB(hashCode(hash));

        // Options for avatar
        var options = {
            foreground: [rgb.red, rgb.green, rgb.blue, 255], // rgba black
            background: [parseInt(rgb.red / 10), parseInt(rgb.green / 10), parseInt(rgb.blue / 10), 255], // rgba white
            margin: 0.2, // 20% margin
            size: size, // 420px square
            format: 'svg' // use SVG instead of PNG
        };

        // create a base64 encoded SVG
        return 'data:image/svg+xml;base64,' + new Identicon(hash, options).toString();

    }

    document.getElementById("identicon_widget").innerHTML = "";
    var icon = document.createElement("div");
    icon.setAttribute("identicon-value", keys.public_addr);
    jQuery(icon).append('<img src="' + get_avatar(keys.public_addr, 128).toString() + '" width="128px" height="128px" />' + '<img/>')
    document.getElementById("identicon_widget").appendChild(icon);
};
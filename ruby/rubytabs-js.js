/**
 * RUBYTABS JAVASCRIPT PLUGIN
 * @package       RubyTabs-JS
 * @author        HaiBach
 * @link          http://haibach.net/rubytabs-js
 * @version       1.7.03
 * @lastUpdate    Nov 28, 2017
 */
(function () {
    'use strict';
    /**
     * INITIALIZE GLOBAL VARIABLES IN JAVASCRIPT
     */
    window.rt01MODULE = window.rt01MODULE || {};
    if (!window.rt01VA) {
        window.rt01VA = {
            "rubyName": "rubytabs",
            "rubyData": "tabs",
            "namespace": "rt01",
            "$ruby": $(),
            "numID": 0
        };
        /**
         * OPTIONS DEFAULTS
         *  + Upto 300 options
         */
        rt01VA.optsDefault = {
            "tagCanvas": "div",
            "nameCanvas": "canvas",
            "nameViewport": "viewport",
            "nameSlide": "slide",
            "nameImageBack": "imgback",
            "nameImageLazy": "img",
            "nameNav": "nav",
            "namePag": "pag",
            "nameCap": "cap",
            "nameNext": "nav-next",
            "namePrev": "nav-prev",
            "namePlay": "playpause",
            "nameTimer": "timer",
            "nameLayer": "layer",
            "nameOverlay": "overlay",
            "nameDataSlide": "slide",
            // Name to be replaced in "data-src" on <img> tag using image lazyload function.
            "nameDataLazy": "src",
            // The proper name for each rubytabs in the site. Used to link components markup outside with main markup of rubytabs.
            "name": null,
            "current": "cur",
            "actived": "actived",
            "deactived": "deactived",
            /**
             * OPTIONS TYPE OF ELEMENTS
             */
            // Change multiple options at once, like shortcut to a group priority options. included value: ["slider", "tabs"]
            "type": "tabs",
            // Option beta: layout size. List of value: "auto", "fullwidth", "fullscreen"
            "layout": "auto",
            // Setup main effect.
            "fx": "line",
            // Easing of main effect.
            "fxEasing": "easeOutCubic",
            // Setup CSS One effect.
            "cssOne": "roDeal",
            // Setup name for out effect of CSS Two effects.
            "cssTwoOut": "pullOut",
            // Setup name for in effect of CSS Two effects.
            "cssTwoIn": "pushIn",
            "cssThreePrev": "pullIn",
            "cssThreeNext": "pushIn",
            // Setup name for CSS Four effect when swap to next slide out.
            "cssFourNextOut": "roEdgeLeftOut",
            // Setup name for CSS Four effect when swap to next slide in.
            "cssFourNextIn": "roEdgeRightIn",
            // Setup name for CSS Four effect when swap to previous slide out.
            "cssFourPrevOut": "roEdgeRightOut",
            // Setup name for CSS Four effect when swap to previous slide in.
            "cssFourPrevIn": "roEdgeLeftIn",
            // Easing of effect in CSS One, Two, Four effects.
            "cssEasing": null,
            // Position and size of imageback to fit the viewport slider. List value: "center", "fill", "fit", "stretch", "tile".
            "imagePosition": null,
            // Swipe direction, default is horizontal. List of value : "hor", "ver"
            "direction": "hor",
            // Enable responsive and settings width-begin(or maximum) of the slider.
            "width": null,
            // Height of the slider. By default, it depends on the height image-background per slide.
            "height": null,
            "responsiveLevels": [1200, 992, 768, 576],
            // Width of center slide compared to width of slider.
            // + Example for unit "percent(%)" : "100%" (string)
            // + Example for unit "pixel" : 300 (number)
            // + Support value depend on "responsiveLevels" option
            "widthSlide": "100%",
            // Surrounding areas of image-background to slide in th range width of the page.
            // + Support value depend on "responsiveLevels" option
            "padding": null,
            // Distance between slides.
            // + Support value depend on "responsiveLevels" option
            "margin": 0,
            // Duration of the effect. Unit millisecond.
            "speed": 400,
            "speedHeight": 400,
            "skin": null,
            // Duration check and update rubytabs
            "delayUpdate": 1000,
            // Perspective property for layer
            "perspective": 800,
            // List of value : "auto", number
            "slot": "auto",
            // List of value : "visible", number >= 1
            "stepNav": 1,
            "stepPlay": 1,
            // Set the slide will appear as rubytabs initialization, ID of slides started with 0. List of value option:
            // + "begin": begin position, equivalent to idBegin = 0
            // + "center": center position. If the total number of slides is an even number, then the position will be located near the left side. Example: Num of slide is 6, value of idBegin is 2
            // + "centerRight": similar "center" value, but located near the right side. Example: Num of slide is 6, value of idBegin is 3
            // + "end": end position
            // + 0 1 2 ...: specific value of the ID slide
            "idBegin": 0,
            // Set rubytabs initialized only on the specified device. List value: "desktop", "mobile" and "all".
            "showBy": "all",
            // Set rubytabs will appear in range width of the site. Range-width have 2 values "min-width" and "max-width"(optional).
            "showInRange": 0,
            // In coverscreen - fullscreen mode, the heigth of slider equal to the height of window browser minus the height of offset objects.
            "offsetBy": null,
            // Event Wheel, list of value: "auto", "both", false
            "wheel": false,
            /**
             * SETUP WITH BOOLEAN VALUE
             */
            // Option exclusively for HTML5 data. RubyTabs is automatically initialized after markup have loaded.
            "isAutoInit": true,
            // Enable layout center in effect "line"
            "isCenter": true,
            // Enable caption each slide.
            "isCap": false,
            "isLoop": true,
            "isAnimRebound": true,
            "isOverlay": false,
            "isViewGrabStop": false,
            "isLoader": true,
            "isParallaxScroll": false,
            "isLayerParallax": false,
            "isMask": "auto",
            // Auto insert "mask" class on <body> tag when swiping / toggle-slide in FxCSS
            "isBodyMaskInFxCSS": true,
            // Native fullscreen enable
            "isNativeFS": false,
            /**
             * OBJECT OPTIONS
             */
            /**
             * LOADING
             */
            // Type of lazyload. List of value: "all", "smart", "single", "none"
            "lazyType": "smart",
            "lazySmart": {
                // The number of slides preloaded before the rubytabs appears.
                // List of value : type number, "all"
                "preload": 1,
                // The number next slides will load after rubytabs appears, the slides will load in parallel.
                "amountEachLoad": 2
            },
            // Enable swipe (touch) gestures on rubytabs
            "isSwipe": true,
            "swipe": {
                // Easing for transition of effect after swipe end.
                "easing": "easeOutQuint",
                // Turn on/off swipe gestures in body content of tabs.
                "isBody": true,
                // Turn on/off auto swipe gestures on pagination when the total size of pagItems larger size pagination.
                "isAutoOnPag": true,
                "isLiveEffect": true
            },
            /**
             * OPTIONS FOR ONLY 1 SLIDE EXIST
             */
            "oneSlide": {
                "isNav": false,
                "isPag": true,
                "isSwipe": false
            },
            "className": {
                "grab": ["grab", "grabbing"],
                "swipe": ["", "swiping"],
                "stop": ["stopLeft", "stopRight"]
            },
            /**
             * RUBYANIMATE KEYFRAMES FOR RUBYTABS
             */
            "rubyAnimateKeyframes": {
                "fadeOut": [{ "pos": 100, "opacity": 0 }],
                "fadeIn": [{ "pos": 0, "opacity": 0 }]
            },
            "rubyAnimateOne": {
                "fade": {
                    "next": ["fadeOut", "fadeIn"],
                    "prev": ["fadeOut", "fadeIn"]
                }
            },
            /**
             * LIST NAME OF MATH EFFECTS
             *  + Random effect : "randomMath"
             */
            "fxMathName": [
                "rectMove", "rectRun", "rectSlice",
                "rubyFade", "rubyMove", "rubyRun", "rubyScale",
                "zigzagRun",
                "randomMath"
            ],
            "coverflow3D": {
                "widthSlide": "80%",
                "perspective": 1200,
                "zDeep": 600,
                "rotate": 30,
                "opacity": 1,
                "isDeepMulti": true
            },
            // Enable navigation control: next/previous button.
            "isNav": false,
            "nav": {
                "isEventTap": true,
                "markup": "<div class='{ns}nav'><div class='{ns}nav-prev'>prev</div><div class='{ns}nav-next'>next</div></div>",
                "markupOutside": "<div class='{ns}nav-prev'>prev</div><div class='{ns}nav-next'>next</div>"
            },
            /**
             * PAGINATION
             *  + Support direction, value : "hor", "ver"
             *  + Support position, value : "begin", "end"
             *  + Support align, value : "begin", "center", "end", "justify"
             *  + Support link thumbnail "data-thumbnail-link" on Imageback
             */
            "isPag": true,
            "pag": {
                // Type of pagination(tablist). List OF value : "thumbnail", "tabs", "bullet", "list".
                "type": "thumbnail",
                // Setup fixed width for pagItem. By default, the pagItem will get largest width in the pagItems.
                "width": null,
                // Setup fixed height for pagItem. By default, the pagItem will get largest height in the pagItems.
                "height": null,
                "minWidth": null,
                "minHeight": null,
                "maxWidth": null,
                "maxHeight": null,
                // Setup the direction of pagination. List of value : "hor", "ver".
                "direction": "hor",
                // Setup the position of pagination compared to the content tabs. List of value: "begin", "center".
                "position": "end",
                // Align of pagItems compared to pagination. List of value: "begin", "center", "end", "justify".
                "align": "center",
                "cssPosition": "relative",
                "hOffset": null,
                "vOffset": null,
                // Time to transition of pagItem current automatically move to the center position.
                "speed": 300,
                // Easing transition of pagItem current automatically move to the center position.
                "easing": "easeOutCubic",
                // Setup width(horizontal direction) / height(vertical direction) of pagination compared to width/height of rubytabs.
                // + "null": size of pagination depends on css.
                // + "self": size pagination is equal to size all pagItems combined.
                // + "full": size pagination is equal to size content of rubytabs.
                "sizeAuto": "full",
                // Get the size of each pagItem compared to the size of other pagItems. List of value: "self", "min", "max".
                "typeSizeItem": "self",
                // Event tap on pagItem
                "isEventTap": true,
                // Turn on/off the current pagItem automatically moves into the center position of pagination.
                // Only for Tabs horizontal, also tabs vertical allways have ItemCur in center position
                "isItemCurCenterWhenTap": true,
                "isJustifyWhenLarge": false,
                // Turn on/off navigation next/previous of pagItem.
                "isArrow": true,
                // Add tap event on navigation next/previous
                "isTapOnArrow": true,
                // Turn on/off mark of pagItem current. Supported animation.
                "isMark": true,
                "isMarkTransition": true,
                // Adding classes to the pagination markup.
                "moreClass": null,
                // Minimum width of RubyTabs to switch to horizontal direction.
                "widthMinToHor": 0,
                // Minimum width of browser-document to switch to horizontal direction.
                "rangeMinToHor": 0,
                // Event wheel for pagination, list of value : "auto", "both", false
                "wheel": "auto",
                "markupArrow": "<div class='{ns}pagarrow-item {ns}pagarrow-{dirs}'><div class='{ns}pagarrow-icon'></div></div>",
                "markupMark": "<div class='{ns}pagmark'><div class='{ns}pagmark-item {ns}pagmark-margin'></div><div class='{ns}pagmark-item {ns}pagmark-border'></div><div class='{ns}pagmark-item {ns}pagmark-padding'></div><div class='{ns}pagmark-item {ns}pagmark-self'></div></div>"
            },
            "image": {
                "isResponsive": true
            },
            /**
             * IMAGEBACK
             *  + Support options only for Imageback by "data-imageback"
             */
            "imageback": {
                // List of value : "center", "fill", "fit", "stretch", "tile"
                "position": "center",
                "pixelRatio": 1,
                "isResponsive": true
            },
            "video": {
                "height": 480,
                "isBtnPause": false,
                "isPauseThenRemove": false
            },
            /**
             * VIDEOBACK
             *  + Support options only for Videoback by "data-videoback"
             */
            "videoback": {
                // List of value : "fill", "fit"
                "position": "fill",
                // List of value : "fill", "fit"
                "posterPosition": "fill",
                "opacity": 0.3,
                "isResponsive": true
            },
            /**
             * HOTSPOT
             *  + Support RubyTween for hotspot
             *  + Support FxCSS for hotspot
             *  + Support Layer for hotspot
             *  + Support Responsive option for hotspot
             */
            "hotspot": {
                "widthItem": null,
                "sizeArea": 10,
                // List of value : "top", "bottom", "left", "right"
                "position": "top",
                // Event to open hotspot. List of value : "tap", "hover"
                "eventToOpen": "tap",
                "animIn": [{ "y": "100%", "opacity": 0 }, { "y": 0, "opacity": 1, "duration": 200 }],
                "animOut": [{ "y": 0 }, { "y": "100%", "opacity": 0, "duration": 200 }],
                "animTopIn": null,
                "animTopOut": null,
                "animBottomIn": null,
                "animBottomOut": null,
                "animLeftIn": null,
                "animLeftOut": null,
                "animRightIn": null,
                "animRightOut": null,
                "markupPoint": "<div class='{ns}hspoint'></div>",
                "isActivedAtFirst": false,
                "isResponsive": false
            },
            /**
             * LAYER
             *  + x/y/z position supported string value : "top", "bottom", "left", "right"
             *  + x/y position supported short string value : "topOut", "bottomOut", "leftOut", "rightOut"
             */
            "layer": {
                "width": null,
                "height": null,
                "count": 1,
                "direction": "normal",
                "duration": 400,
                "delay": 0,
                "easing": "easeOutQuad",
                // List of value : "click", "hover"
                "eventToPlay": null,
                "isPlayWhenSlideActived": true,
                "isAutoPlay": true,
                "isResponsive": true,
                "isRandom": false,
                // Add class to clipping $layer-item on $layer
                "isMask": false,
                // Animate-end for layer before toggle to the other slide
                "animateEnd": [{ "opacity": 0, "duration": 400 }]
            },
            /**
             * LAYER PARALLAX
             */
            "layerParallax": {
                "isParallax": true,
                "radiusLevelValue": [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
                "radiusLevel": 3,
                "radius": null,
                // List of value : "reverse", "same"
                "direction": "reverse"
            },
            "parallax": {
                "scrollDirection": "same",
                "scrollDepth": 80,
                "scrollBgDepth": 80,
                "scrollLayerDepth": 50,
                "isScroll": false,
                "isScrollLayerFade": true
            },
            "parallaxScroll": {
                "direction": "same",
                "bgDepth": 80,
                "layerDepth": 50,
                "isLayerEnable": true,
                "isLayerFade": true
            },
            // Enable slideshow
            "isSlideshow": false,
            "slideshow": {
                "delay": 8000,
                // List of value : "line" , "arc"
                "timer": "arc",
                // Turn on/off auto play slideshow at first
                // Only actived false when have playpause button
                "isAutoRun": true,
                "isPlayPause": true,
                "isTimer": true,
                "isLoop": true,
                "isHoverPause": false,
                // Only play slideshow when rubytabs in the display area.
                "isRunInto": false,
                "isRandom": false
            },
            "timerArc": {
                "width": null,
                "height": null,
                "fps": 30,
                "rotate": 0,
                "radius": 14,
                "weight": 4,
                "stroke": "hsla(0,0%,0%,.6)",
                "fill": "transparent",
                "radiusOuter": 14,
                "weightOuter": 2,
                "strokeOuter": "hsla(0,0%,0%,.1)",
                "fillOuter": "transparent"
            },
            /**
             * FLICKR
             *  + Support get photo from URL
             *  + Support get photo from "Photo Recent", "Photo Album", "Photo Faves"
             *  + Support get photo depends on size
             *  + Support get source photo by "data-flickr"
             *  + Support get source photo by URL and photoID
             *  + Support get ID by "Path Name" instead of "NSID"
             */
            "flickr": {
                "urlRequest": "https://api.flickr.com/services/rest/?method=flickr.{method}&api_key={key}{typeID}&format=json&nojsoncallback=1",
                "apiKey": "a85720e2fbb21eccea51fcb75cb22184",
                // List of value : number, "all"
                "photoNum": 10,
                "photoRecentNum": null,
                "photoAlbumNum": null,
                "photoFavesNum": null,
                // List of value : "Square", "Large Square", "Thumbnail", "Small", "Small 320", "Medium", "Medium 640", "Medium 800", "Large", "Large 1600", "Large 2048", "Original"
                "photoSize": "Large",
                // List of value : "begin", "last", number
                "photoPosition": "last",
                "getPhotoRecentByUrl": null,
                "getPhotoAlbumByUrl": null,
                "getPhotoFavesByUrl": null,
                "recentID": null,
                "albumID": null,
                "favesID": null,
                "isRandomPhoto": false,
                "markupSlide": "<div><a class='{ns}imgback' data-flickr='{\"numID\": {numID}, \"photoID\": \"{photoID}\"}'>{photoTitle}</a>{markupInfo}</div>",
                "markupInfo": "<div class='{ns}flickr-info {ns}layeritem' data-animate-start='{infoLayer}'>{markupPhotoTitle}{markupAlbumTitle}{markupSplit}{markupAuthor}</div>",
                "markupSplit": " | ",
                "markupPhotoTitle": "<a class='{ns}flickr-photo-title' href='{photoURL}'>{photoTitle}</a>",
                "markupAlbumTitle": "<a class='{ns}flickr-album-title' href='{albumURL}'>{albumTitle}</a>",
                "markupAuthor": "<a class='{ns}flickr-author' href='{authorURL}'>{author}</a>",
                "infoLayer": [
                    { "x": 20, "y": "100%{parent}" },
                    { "y": "100%{parent} - 100% - 20", "duration": 400 }
                ],
                "isInfo": true,
                "isPhotoTitle": true,
                "isAlbumTitle": true,
                "isAuthor": true
            },
            "markup": {
                "loader": "<div class='{ns}loader'><svg class='{ns}loader-circular'><circle class='{ns}loader-path' cx='50%' cy='50%' r='20' fill='none' stroke-width='4' stroke-miterlimit='15'/></svg></div>",
                "loaderThumb": "<div class='{ns}loader {ns}loader-small'><svg class='{ns}loader-circular'><circle class='{ns}loader-path' cx='50%' cy='50%' r='10' fill='none' stroke-width='3' stroke-miterlimit='15'/></svg></div>",
                "ssControl": "<div class='{ns}ss-control'></div>",
                // List of value : "ruby", "viewport", "nav", "ssControl"
                "navInto": "viewport",
                "pagInto": "ruby",
                "ssControlInto": "ruby",
                "timerInto": "ssControl",
                "playInto": "ssControl"
            },
            // Enable keyboard navigation, left/right arrow on keyboard to go prev/next slide.
            "isKeyboard": false,
            // Options for keyboard navigation features
            "keyboard": {
                "nextKey": 39,
                "prevKey": 37,
                "nextAlterKey": null,
                "prevAlterKey": null
            },
            // Enable deep-linking features
            "isDeeplinking": false,
            // Options for deeplinking features
            "deeplinking": {
                // Prefix 0 is name of rubytabs, support multi-liking on the same page.
                // Prefix 1 is name of slide on that rubytabs.
                "prefixDefault": ["ruby", "slide"],
                // Prefix of #hash combine with order of slide, begin by 0.
                "prefix": null,
                // Deeplinking auto convert ID of slide to #hash corresponds on URL
                "isIDConvert": true,
                // URL only change if slide have ID on dom
                "isOnlyShowID": true
            },
            // Enable cookie features
            "isCookie": false,
            // Options for cookie features
            "cookie": {
                // Unique name of cookie to stored rubytabs, avoid conflict with other cookies on different pages. Default is empty-string.
                "name": "",
                // Days storing of cookie on the browser
                "days": 7
            },
            // Options in the native fullscreen mode
            "nativeFS": {
                // Render button toggle fullscreen mode
                "isButton": true,
                // Markup of button toggle
                "markupButton": "<a class='{ns}toggle-nativeFS'></a>"
            },
            "updateOptsInNativeFS": {},
            // Trigger events
            events: {},
            // Options for the desktop device
            "desktop": {},
            // Options for the mobile device
            "mobile": {
                "speedHeight": null,
                "direction": "hor"
            },
            // Options for the browser not support CSS Transform
            "fallback": {
                "markup": {
                    "loader": "<div class='{ns}loader {ns}loader-old'>loading</div>"
                }
            },
            "rev": ["erp"],
            "versionBrand": "1",
            "version": "1.7"
        };
        /**
         * OPTIONS DEFAULT PLUS
         */
        rt01VA.optsPlus = {
            /**
             * OPTIONS PLUS DEFAULT FOR TABS
             */
            "tabs": {
                "lazyType": "single",
                "margin": 30,
                "pag": {
                    "type": "tabs",
                    "position": "begin",
                    "align": "begin"
                }
            },
            /**
             * OPTIONS PLUS DEFAULT FOR SLIDER
             */
            "slider": {
                "lazyType": "smart",
                "margin": 0,
                "pag": {
                    "type": "thumbnail",
                    "position": "end",
                    "align": "center"
                }
            },
            /**
             * OPTIONS PLUG DEFAULT FOR CAROUSEL
             */
            "carousel": {
                "lazyType": "smart",
                "fx": "line",
                "speed": 600,
                "widthSlide": 300,
                "margin": 15,
                "isCenter": false,
                "isLoop": false,
                "isPag": false,
                "isNav": true
            }
        };
    }
    /**
     * CLASS UTILITY M
     */
    var M = /** @class */ (function () {
        function M() {
        }
        /**
         * DISPLAY ERROR MESSAGES
         */
        M.Message = function (message, detail) {
            if (typeof console === 'object' && message !== undefined) {
                var str = '[' + rt01VA.rubyName + ': ' + message + ']';
                if (!!detail)
                    str += ' -> ' + detail;
                console.warn(str);
            }
        };
        /**
         * CONVERT 'STRING' TO 'JSON'
         */
        M.StringToJson = function (str, messageError) {
            if (typeof str == 'string') {
                // Replace quotes to single quotes
                str = str.replace(/\u0027/g, '\u0022');
                /**
                 * PARSE 'STRING' TO 'JSON'
                 */
                //-?- Not support IE8
                try {
                    str = JSON.parse(str);
                }
                catch (e) {
                    M.Message(messageError);
                }
            }
            // Return value depending on each case
            console.log('fooo');
            return M.IsPlainObject(str) ? $.extend(true, {}, str)
                : M.IsArray(str) ? $.extend(true, [], str)
                    : {};
        };
        /**
         * CONVERT 'JSON' TO 'STRING'
         */
        M.JsonToString = function (json, messageError) {
            if (typeof json == 'object') {
                /**
                 * PARSE 'JSON' TO 'STRING'
                 */
                try {
                    json = JSON.stringify(json);
                }
                catch (e) {
                    M.Message(messageError);
                }
            }
            return (typeof json == 'string') ? json : '';
        };
        /**
         * Covert to CamelCase
         */
        M.CamelCase = function (prop) {
            return prop.replace(/-([a-z])/gi, function (m, prop) {
                return prop.toUpperCase();
            });
        };
        /**
         * CONVERT VALUE TO NUMBER
         */
        M.PFloat = function (n) {
            // Check and convert to number float
            // Condition < 9007199254740992 : larger for incorrect results
            if (/^\-?\d*\.?\d+/g.test(n)) {
                var n1 = parseFloat(n);
                if (n1 < 9007199254740992)
                    return n1;
            }
            else if (/^(true|on)$/g.test(n))
                return true;
            else if (/^(false|off)$/g.test(n))
                return false;
            return 0;
        };
        // Convert value to number integer
        M.PInt = function (v) { return /^\-?\d+/g.test(v) ? parseInt(v, 10) : 0; };
        // Check element is Plain Object
        M.IsPlainObject = function (v) { return Object.prototype.toString.call(v) === '[object Object]'; };
        // Check element is Empty Object
        M.IsEmptyObject = function (v) { return M.IsPlainObject(v) && M.JsonToString(v) === '{}'; };
        // Check element is Array
        M.IsArray = function (v) { return Object.prototype.toString.call(v) === '[object Array]'; };
        // Check element is Number
        M.IsNumber = function (n) { return !isNaN(parseFloat(n)); };
        /**
         * GET SIZE OF OJBECT
         *  + Get size not included css transformed
         *  + Size base on "offsetWidth", "offsetHeight"
         *  + Check getComputedStyle by document.defaultView otherwise error
         */
        M.SizeNoTransform = function ($el, type, isMargin) {
            /**
             * CONDITONAL EXECUTION
             *  + First paramater $el : forced to Element Node
             */
            if (!($el && !!$el[0]))
                return 0;
            /**
             * INITIAL SETUP
             */
            var that = this, el = $el[0], style = document.defaultView ? getComputedStyle(el) : el.currentStyle, isWidth = /Width/i.test(type), size = el[isWidth ? 'offsetWidth' : 'offsetHeight'], padding = isWidth ? that.PFloat(style.paddingLeft) + that.PFloat(style.paddingRight)
                : that.PFloat(style.paddingTop) + that.PFloat(style.paddingBottom), border = isWidth ? that.PFloat(style.borderLeftWidth) + that.PFloat(style.borderRightWidth)
                : that.PFloat(style.borderTopWidth) + that.PFloat(style.borderBottomWidth), margin = isWidth ? that.PFloat(style.marginLeft) + that.PFloat(style.marginRight)
                : that.PFloat(style.marginTop) + that.PFloat(style.marginBottom);
            /**
             * SETUP SIZE DEPENDING ON EACH CASE
             */
            // Case : get size OuterWidth - OuterHeight
            if (/^Outer\w+/.test(type)) {
                if (isMargin)
                    size += margin;
            }
            else if (/^Inner\w+/.test(type)) {
                size -= border;
            }
            else if (/^(Width|Height)$/.test(type)) {
                size -= border + padding;
            }
            // Return results
            return size;
        };
        M.Width = function ($el) { return this.SizeNoTransform($el, 'Width'); };
        M.Height = function ($el) { return this.SizeNoTransform($el, 'Height'); };
        M.InnerWidth = function ($el) { return this.SizeNoTransform($el, 'InnerWidth'); };
        M.InnerHeight = function ($el) { return this.SizeNoTransform($el, 'InnerHeight'); };
        M.OuterWidth = function ($el, isMargin) { return this.SizeNoTransform($el, 'OuterWidth', isMargin); };
        M.OuterHeight = function ($el, isMargin) { return this.SizeNoTransform($el, 'OuterHeight', isMargin); };
        /**
         * METHODS RELATE TO MATH
         */
        M.A = function (v) { return Math.abs(v); };
        M.R = function (v) { return Math.round(v); };
        M.C = function (v) { return Math.ceil(v); };
        M.Ra = function () { return Math.random(); };
        M.Rm = function (m, n) { return M.Ra() * (n - m) + m; };
        M.Sum = function (a, to) {
            var total = 0;
            if (to < 0)
                return total;
            // Case not 'to' paramater
            if (to === undefined)
                to = a.length;
            // Loop plus all values in the array[]
            for (var i = 0; i < to; i++) {
                total += a[i];
            }
            return total;
        };
        /**
         * METHODS RELATE TO CONVERT NUMBER
         */
        // Convert value to percent(%)
        M.PPercent = function (v, source) {
            if (v > 0 && v < 1)
                v *= source;
            return M.R(v);
        };
        // Parse the value have percent unit to Pixel unit
        M.PercentToPixel = function (value, source) {
            var result = null;
            // Case: The value is string with format '+/-100%'
            if (/^\-?\d*\.?\d+\%$/.test(value)) {
                result = M.R(M.PFloat(value) * source / 100);
            }
            else if ($.isNumeric(value)) {
                result = value;
            }
            return result;
        };
        // Convert string of style to json
        M.PStyleToJson = function ($obj) {
            var style = $obj.attr('style'), re = /\s*([\w-]+)\s*:\s*([^;]*)/g, json = {}, match;
            // Merge Width/Height attributes on object into json
            if ($obj.attr('width') !== undefined)
                json.width = $obj.attr('width');
            if ($obj.attr('height') !== undefined)
                json.height = $obj.attr('height');
            // Create loop to get value each object
            while (match = re.exec(style)) {
                json[match[1]] = match[2];
            }
            // Convert value pixel of Width/Height to number
            var rePixel = /^-?\d*.?\d+px$/;
            if (rePixel.test(json.width))
                json.width = parseFloat(json.width);
            if (rePixel.test(json.height))
                json.height = parseFloat(json.height);
            return json;
        };
        // Check all values in the array is number
        M.ElesIsNumber = function (arr, lenCheck) {
            var len = arr.length, isNum = M.IsArray(arr) && len === lenCheck;
            if (isNum) {
                for (var i = 0; i < len; i++) {
                    isNum = isNum && $.isNumeric(arr[i]);
                }
            }
            return isNum;
        };
        /**
         * METHODS RELATE TO TRANSFORM + TRANSITION
         */
        M.Tl = function (x, y, u) {
            var u = u || 'px';
            return va.tl0 + x + u + ', ' + y + u + va.tl1;
        };
        // Translate x/y, support fallback transition
        M.Tlx = function (x, u) {
            var u = u || 'px';
            return is.tf ? (va.tlx0 + x + u + va.tlx1) : (x + u);
        };
        M.Tly = function (y, u) {
            var u = u || 'px';
            return is.tf ? (va.tly0 + y + u + va.tly1) : (y + u);
        };
        // Remove transform on object
        M.TfRemove = function ($obj) {
            var tf = {};
            tf[cssTf] = '';
            $obj.css(tf);
        };
        /**
         * METHODS RELATE TO ARRAY[]
         */
        M.Shift = function ($obj, isShift) { return isShift ? $obj.shift() : $obj.pop(); };
        M.Push = function ($obj, v, isPush) { return isPush ? $obj.push(v) : $obj.unshift(v); };
        /**
         * RANDOM EFFECT IN THE EFFECT ARRAY[]
         */
        M.RandomInArray = function (arr, except) {
            // Conditional execution : arr is array
            if (M.IsArray(arr)) {
                /**
                 * CASE: ARRAY HAVE 1 OBJECT
                 */
                if (arr.length === 1)
                    return arr[0];
                /**
                 * CASE: ARRAY HAVE MULTIPLE OBJECT
                 */
                var itemCur = $.extend(true, [], arr), indexItemLast = $.inArray(except, itemCur);
                // Remove the newly effect
                // If not found in effect array -> add 1 to fixed select
                if (indexItemLast === -1)
                    indexItemLast = itemCur.length + 1;
                itemCur.splice(indexItemLast, 1);
                // Select random effect in the new array has removed old effect
                return itemCur[M.R(M.Rm(0, itemCur.length - 1))];
            }
            return arr;
        };
        M.RandomInArray2 = function (arrSource, arrCopy, except) {
            if (M.IsArray(arrSource)) {
                // Reset the copy array if it empty
                // Reset the copy array if ramaining 1 object like 'except'
                if (!arrCopy.length || (arrCopy.length == 1 && arrCopy[0] == except)) {
                    arrCopy = $.extend(true, arrCopy, arrSource);
                }
                // Remove 'except' first
                if (except !== undefined) {
                    var indexExcept = $.inArray(except, arrCopy);
                    if (indexExcept !== -1)
                        arrCopy.splice(indexExcept, 1);
                }
                // Get random value in the copy array
                var idCur = M.R(M.Rm(0, arrCopy.length - 1)), itemCur = arrCopy[idCur];
                // Remove value selected in the copy array
                arrCopy.splice(idCur, 1);
                // Return value selected
                return itemCur;
            }
            return arrSource;
        };
        /**
         * OTHER METHODS
         */
        // Swipe swap variable
        M.SwapVaOnSwipe = function () { return va.$swipeCur.is($canvas) ? va.can : va.pag; };
        // Toggle add/removeClass on object
        M.XClass = function ($obj, isAdd, str) { $obj[(isAdd ? 'add' : 'remove') + 'Class'](str); };
        // Capitalize the first letter of sting
        M.ProperCase = function (str) { return str.charAt(0).toUpperCase() + str.slice(1); };
        // Convert '{ns}' to namespace
        M.NS = function (str) {
            return (typeof str == 'string') ? str.replace(/\{ns\}/g, va.ns)
                : '';
        };
        /**
         * CHECK WIDTH VALUE OF WINDOW/RUBY IN RANGE - SIMILAR MEDIA CSS
         */
        M.MatchMedia = function (min, max, isWidthOfRuby) {
            /**
             * CASE: GET WIDTH OF RUBY
             */
            if (!!isWidthOfRuby) {
                var wRuby = M.OuterWidth($ruby);
                if (min <= wRuby && wRuby <= max)
                    return true;
            }
            else {
                // Case : browser support matchMedia
                if (!!window.matchMedia) {
                    var str = '(min-width: WMINpx) and (max-width: WMAXpx)'.replace('WMIN', min).replace('WMAX', max);
                    if (window.matchMedia(str).matches)
                        return true;
                }
                else {
                    var wWin = $w.width();
                    if (min <= wWin && wWin <= max)
                        return true;
                }
            }
            return false;
        };
        /**
         * SEARCH FOR NECESSARY VALUE IN ARRAY
         * @return int  Value width of ruby
         */
        M.GetValueInRange = function (value, valueName) {
            var name = !!valueName ? valueName : 'value';
            // additional : allow default value & get minimun value
            var wMin = 1e5, id = -1;
            for (i = value.num - 1; i >= 0; i--) {
                // 'from' & 'to' compared to width window
                if (M.MatchMedia(value[i].from, value[i].to)) {
                    if (wMin >= value[i].to) {
                        wMin = value[i].to;
                        id = i;
                    }
                }
            }
            // Return value
            return (id > -1 ? value[id][name] : null);
        };
        // Get index in Responsive Level
        M.GetIndexInResponsive = function (resLevels) {
            var index = null;
            for (var i = 0, len = resLevels.length; i < len; i++) {
                var min = resLevels[i], max = (i === 0) ? 10000 : resLevels[i - 1];
                if (M.MatchMedia(min, max)) {
                    index = i;
                    break;
                }
            }
            // Case: not found index
            if (index === null)
                index = resLevels.length - 1;
            return index;
        };
        // Parse Grid from a value
        M.ParseGrid = function (fromValue, isInherit) {
            var resLevelsLen = o.responsiveLevels.length, grid = null;
            // Case: Size is Numeric
            if ($.isNumeric(fromValue) || typeof fromValue === 'string') {
                grid = [];
                for (var i = 0; i < resLevelsLen; i++) {
                    if (isInherit)
                        grid[i] = fromValue;
                    else
                        grid[i] = (i == 0) ? fromValue : null;
                }
            }
            else if (M.IsArray(fromValue)) {
                // Case: Size length < ResponsiveLevels length -> Additional item in the array of Size
                if (fromValue.length < resLevelsLen) {
                    var valueLen = fromValue.length;
                    valueLast = fromValue[valueLen - 1];
                    grid = fromValue.slice();
                    for (var i = valueLen; i < resLevelsLen; i++) {
                        grid[i] = isInherit ? valueLast : null;
                    }
                }
                else
                    grid = fromValue.slice();
            }
            return grid;
        };
        /**
         * SEARCH ELEMENTS EXCEPT FORM RUBY-NESTED
         *  + Remove nested ruby
         */
        M.Find = function ($target, selector) {
            var $result = $target.find(selector), $rubyNested = $target.find('.' + va.ns), $resultNested = $rubyNested.find(selector);
            // Loai bo doi tuong trong Ruby Nested
            $result = $result.not($resultNested);
            return $result;
        };
        /**
         * GET OBJECT PROPERTIES IN 'DATA' VARIABLE
         *  + Allow pass number parameter for slide
         */
        M.Data = function ($obj, opts) {
            var vData = va.data;
            /**
             * CONVERT NUMBER PARAMETER TO JQUERY OBJECT
             */
            if ($.isNumeric($obj) && (0 <= $obj && $obj < cs.num)) {
                $obj = va.$s.eq($obj);
            }
            else if ($obj === 'home') {
                $obj = $viewport;
            }
            /**
             * CONDITIONAL EXECUTION
             */
            if (!($obj instanceof jQuery))
                return false;
            /**
             * SETUP EXTEND OBJECT
             */
            if (M.IsPlainObject(opts)) {
                opts = $.extend(true, {}, opts);
                delete opts.$self;
                delete opts.nsid;
            }
            else
                opts = {};
            /**
             * FIRST, SEARCH NSID OF OBJECT IN 'DATA' VARIABLE
             */
            var nsid;
            for (nsid in vData) {
                if ($obj.is(vData[nsid]['$self'])) {
                    return $.extend(true, vData[nsid], opts);
                }
            }
            /**
             * CREATE NEW PROPERTIES IN 'DATA' VARIABLE IF NSID NOT EXIST
             */
            nsid = va.numNSID;
            va.numNSID++;
            // Create new object
            vData[nsid] = { '$self': $obj, 'nsid': nsid };
            // Return the newly created 'data'
            return $.extend(true, vData[nsid], opts);
        };
        /**
         * GET TWEEN ANIMATE STORED IN 'DATA' OF OBJECT
         */
        M.GetTween = function ($obj) {
            var objData = M.Data($obj);
            // Get tween animate on self object
            objData.tweenSelf = objData.tweenSelf || new RubyTween();
            return objData.tweenSelf;
        };
        /**
         * RETURN MODULES COMBINE WITH PROPERTIES
         */
        M.Module = function (name) {
            return $.extend({}, rt01MODULE[name], one);
        };
        // Execute the events
        M.RunEvent = function (name, param1, param2) {
            // Trigger event on option
            $.isFunction(o.events[name]) && o.events[name](cs);
            // Trigger event on jQuery event
            cs.ev.trigger(name, [param1, param2]);
        };
        return M;
    }());
    //- class RubyObject
    /**
     * CLASS RUBYDOM
     */
    var RubyDOM = /** @class */ (function () {
        // Class Constructor
        function RubyDOM(item) {
            this.item = item;
            this.$item = {
                DOM: item
            };
        }
        /**
         * DATA OF DOM
         */
        RubyDOM.prototype.data = function (name, value) {
            var name = 'data-' + name;
            // GETTER
            if (value === undefined) {
                var data = this[name];
                // Case Data not exist in RubyDOM
                if (data === undefined) {
                    return M.StringToJson(this.item.getAttribute(name));
                }
                else
                    return data;
            }
            else {
                this['data-' + name] = value;
            }
        };
        return RubyDOM;
    }());
    /**
     * MAIN RUBYTABS PLUGIN
     */
    //- $[rt01VA.rubyName] = function($ruby, OptsJS) {
    var FnRubyTabs = function ($ruby, OptsJS) {
        /**
         * GLOBAL VARIABLES IN THE PLUGIN
         */
        var cs = {
            $ruby: $ruby // Stored $rubytabs in 'cs' variable
        }, va = {
            $w: $(window),
            $doc: $(document),
            $body: $('body'),
            rubykey: Math.ceil(Math.random() * 1e9),
            ns: rt01VA.namespace,
            data: {},
            numNSID: 0 // Number of NSID in the plugin
        }, is = {}, ti = {}, o = {}, // Variable 'o' : merge all options Data + js + default options
        oo = {}, // Variable 'oo' : store the initial options
        vava = {}, isis = {}, 
        // Variable 'one' : support for module
        one = { 'cs': cs, 'o': o, 'oo': oo, 'va': va, 'is': is, 'ti': ti }, $w = $(window), $doc = $(document), $canvas, $viewport, num, cssTf, i, j, divdiv = '<div/>';
        /**
         * INIT METHODS
         */
        var INIT = {
            Check: function () {
                M.Browser(); // Detect the name browser
                M.CssName(); // CSS: get prefixed css style
                M.FirstSetup(); // Initialize the variables at first
                M.RunEvent('init'); // Trigger callback event 'init'
                /**
                 * FIRST CHECK
                 */
                if (NOISREV.Check()) {
                    /**
                     * NEXT CHECK
                     *  + Check inside the rubytabs with content
                     */
                    if (is.DISPLAY) {
                        DISPLAY.SetupInit();
                    }
                    else {
                        // Display rubytabs if no module
                        is.showInRange = is.wake = true;
                        INIT.Ready();
                    }
                }
                else
                    $ruby.remove();
            },
            Ready: function () {
                M.RunEvent('ready'); // Trigger event 'ready'
                $ruby.removeClass(va.ns + 'none'); // Remove initially hidden rubytabs
                is.RUBYANIMATE && RUBYANIMATE.UpdateAllKeyframes(); // Update RubyAnimate keyframe into rubytabs
                RENDER.Structure(); // Ruby: create structure system
                PROP.Ruby(); // Ruby: get properties system
                // -> located above 'PAG.RenderSelf' because need to 'is.pag'
                is.SLIDESHOW && SLIDESHOW.RenderControl(); // Slideshow : render markup
                is.TIMER && TIMER.Render(); // Timer: render markup
                is.FULLSCREEN && FULLSCREEN.Render(); // Render the elemnts in fullscreen mode
                is.NAV && NAV.Render(); // Navigation: render markup
                is.PAG && PAG.RenderSelf(); // Pagination: render markup
                is.CAP && CAPTION.Render(); // Caption: render markup
                // Add loader icon in the case: lazyType == all
                o.lazyType === 'all' && RENDER.LoaderAdd($ruby, $ruby, '$rubyLoader');
                PROP.Slides(); // Slide: properties, below 'PAG.RenderSelf' -> need to '$pagItem' defined
                RENDER.Other(); // Ruby: render other elements
                is.APIREMOTE && APIREMOTE.Init(); // API remote control: initialize
                PROP.DeepLinkCookie(); // Get ID initially by deeplinking and cookie -> need 'va.IDsOnNode'
                is.FLICKR && FLICKR.Init();
                LOAD.Way(); // Arrange the order of ID to load before after
                /**
                 * DISPLAY RUBY INITIALLY
                 *  + The function repeated in 'UPDATE.Resize()'
                 */
                // Support for 'POSSIZE.CombineAtFirst()' + position of tabs vertical at first
                is.pag && !is.pagList && PAG.TypeSizeItem();
                // Insert 'init' class to detect rubytabs initialize
                $ruby.addClass(M.NS('{ns}init {ns}no-loaded'));
                // Get size width of ruby
                SIZE.WidthForRuby();
                // Responsive: calculate padding & va.rate
                is.res && RESPONSIVE.UpdateVars();
                va.rateInit = va.rate;
                // Check & convert pagination horizontal -> vertical at first
                is.pag && PAG.VerToHor();
                POSSIZE.CombineAtFirst();
                /**
                 * CHECK + LOAD LAYER IMAGE OF HOME
                 *  + If no module Layer -> Setup load first slide
                 */
                if (is.LAYER)
                    LAYER.LoadHomeBegin();
                else
                    LOAD.Next();
            },
            Load: function () {
                is.initLoaded = true; // Store rubytabs initially loaded
                M.RunEvent('loaded'); // Trigger event 'loaded'
                is.pag && !is.pagList && PAG.TypeSizeItem(); // Support for 'POSSIZE.CombineAtFirst()' below + position tabs vertical at first
                is.res && is.fullscreen && FULLSCREEN.Variable(); // Fullscreeen: calculate padding + va.rate
                POSSIZE.CombineAtFirst(); // Setup position & size at first (need height ruby if vertical direction)
                EVENTS.Setup(); // Arrange & setup the events
                EVENTS.LoadAll(); // Setup event loaded everything
                M.LastSetup(); // Setup everything left after initialize
                is.initEnd = true; // Notify the initialization end
                if (is.LAYER) {
                    LAYER.Init($viewport); // Initialize home layer
                    LAYER.Play('home'); // Play tween for home layer
                }
                // Add timer for slideshow -> Fixed IE at first: get value of scrollTop incorrect
                setTimeout(function () {
                    is.slideshow && SLIDESHOW.Init();
                }, 400);
            }
        }, 
        /**
         * METHODS M EXTEND
         */
        M = $.extend(true, {}, rt01VA.M, {
            /**
             * FIRST SETUP OF VARIABLE IN RUBY
             */
            FirstSetup: function () {
                /**
                 * MERGE ALL MODULES
                 */
                PROP.MergeAllModules();
                /**
                 * MERGE ALL OPTIONS
                 */
                PROP.MergeAllOpts();
                /**
                 * MERGE THE FUNCTION INTO GLOBAL VARIABLE
                 *  + Combine api-base & api into 'cs'
                 *  + Store 'cs' variable into ruby
                 */
                cs.one = one;
                cs = $.extend(true, cs, API);
                $.data($ruby[0], rt01VA.rubyName, cs);
                /**
                 * SETUP THE VARIABLE OF SYSTEM
                 */
                rt01VA.$ruby = rt01VA.$ruby.add($ruby);
                rt01VA.numID++;
                /**
                 * SETUP ID OF RUBY
                 *  + Support multiply ruby awareness on page
                 *  + va.rubyID: index ID of the particular ruby
                 */
                va.rubyID = rt01VA.numID;
                /**
                 * SETUP THE INITIAL VALUES
                 */
                va.ns = rt01VA.namespace;
                // Name of ruby
                va.name = o.name || $ruby.attr('id') || null;
                // Support for slideshow have video -> all videos must be closed when slideshow playing
                va.nVideoOpen = 0;
                // Lock tap events on navigation && pagination -> prevent multiply setting running same time
                is.tapEnable = true;
                // Store name of effect -> support for toggle class effect
                va.fxLast = va.fxCur = 'none';
                // Add custom classes into ruby depends on each slide
                va.classAdd = [];
                // Variable actived & deactived
                va.actived = va.ns + o.actived;
                va.deactived = va.ns + o.deactived;
                // Variable support for ruby full update -> additional info
                // Variable will reset to null if go to end 'API.update()'
                va.addInfo = null;
                // Layout size of ruby
                if (o.layout === 'fullwidth')
                    is.fullwidth = true;
                if (o.layout === 'fullscreen' && !!rt01MODULE.FULLSCREEN)
                    is.fullscreen = true;
            },
            /**
             * SETUP THE REMAINING PROPERTIES WHEN THE END OF INIT
             */
            LastSetup: function () {
                // Fixed for IE7: calculate incorrect size of pagination
                !is.tf && setTimeout(UPDATE.Resize, 50);
            },
            /**
             * BROWSER DETEAC + CHECK HTML5/CSS3 PROPERTIES
             */
            Browser: function () {
                // Variable shortcut & initialize at first
                var navAgent = navigator.userAgent;
                navAgentAll = navAgent || navigator.vender || window;
                is.ie = /*@cc_on!@*/ false || document.documentMode; // IE 6 - 11
                is.edge = !is.ie && !!window.StyleMedia; // Edge 12+
                is.safari = /Constructor/i.test(Object.prototype.toString.call(window.HTMLElement)); // Safari 3+
                is.opera = !!window.opera || /\sOPR\//i.test(navAgent); // Opera 8+
                is.chrome = !!window.chrome && !!window.chrome.webstore; // Chrome 1+
                is.firefox = window.InstallTrigger !== undefined; // Firefox 1+
                // Check IE11 : IE11 not support 'conditional compilation' anymore
                is.ie11 = !!(is.ie && !new Function('/*@cc_on return @_jscript_version; @*/')());
                is.ie7 = !!(is.ie && /MSIE\s7\./i.test(navAgent));
                // Name of browser - return undefined if not found
                var browser = ['ie', 'edge', 'safari', 'opera', 'chrome', 'firefox'];
                for (i = browser.length; i >= 0; i--) {
                    if (!!is[browser[i]]) {
                        va.browser = browser[i];
                        break;
                    }
                }
                // Check browser support touch event
                // Remove 'is.msGesture' -> incorrect & no needed, replace by 'is.evPoinerAll'
                // is.msGesture = !!(window.navigator && window.navigator.msPointerEnabled) || !!window.MSGesture;
                is.evPointer = !!window.PointerEvent;
                is.evMSPointer = !!window.MSPointerEvent;
                is.evPointerAll = is.evPointer || is.evMSPointer;
                is.evSwipe = !!(("ontouchstart" in window) || (window.DocumentTouch && document instanceof DocumentTouch));
                is.swipeSupport = is.evSwipe || is.evPointer || is.evMSPointer;
                // Check is mobile, base on 3 elements:
                // + Support touch/pointer events
                // + Support 'orientation' direction -> not support on mobile simular
                // + UserAgent of comnmon browsers 'Android|webOS|iPhone|iPad..'
                // + Used test script on page 'detectmobilebrowsers.com'
                var navAgentAll = navAgent || navigator.vender || window.opera;
                is.mobile = is.swipeSupport &&
                    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navAgentAll) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navAgentAll.substr(0, 4)));
                // Check whether Android native browser (not Chrome) & version < 4.4
                is.androidNative = is.mobile && /Mozilla\/5\.0/i.test(navAgent) && /Android/i.test(navAgent)
                    && /AppleWebKit/i.test(navAgent) && !(/Chrome/i.test(navAgent))
                    && !(/Android\s+4\.4/i.test(navAgent));
                // Check iOS
                is.iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                // Setting all kinds of events
                // Prevent conflicts with other rubytabs by add rubykey, ex: '.rt011234'
                var suffix = '.' + va.ns + va.rubykey, swipeName = ['', '', ''];
                if (is.evSwipe)
                    swipeName = ['touchstart', 'touchmove', 'touchend'];
                else if (is.evPointer)
                    swipeName = ['pointerdown', 'pointermove', 'pointerup'];
                else if (is.evMSPointer)
                    swipeName = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
                va.ev = {
                    click: 'click' + suffix,
                    drag: 'dragstart' + suffix + ' selectstart' + suffix,
                    resize: 'resize' + suffix,
                    scroll: 'scroll' + suffix,
                    key: 'keyup' + suffix,
                    hash: 'hashchange' + suffix,
                    swipe: {
                        start: swipeName[0] + suffix,
                        move: swipeName[1] + suffix,
                        end: swipeName[2] + suffix,
                        type: 'swipe'
                    },
                    mouse: {
                        start: 'mousedown' + suffix,
                        move: 'mousemove' + suffix,
                        end: 'mouseup' + suffix,
                        type: 'mouse'
                    },
                    mouseenter: 'mouseenter' + suffix,
                    mouseleave: 'mouseleave' + suffix
                };
                // If no touch event, reset 'ev.touch'
                if (swipeName[0] == '')
                    va.ev.swipe = { start: '', move: '', end: '', type: 'swipe' };
                /**
                 * OTHER SETUP
                 */
                // Check browser support wheel native event
                is.wheelNative = !!('onwheel' in document.createElement('div'));
                // Check browser support 'console'
                is.console = typeof console === 'object';
                // Check browser support HTML5 cavans
                is.canvas2d = (function () {
                    var el = document.createElement('canvas');
                    return !!(el.getContext && el.getContext('2d'));
                }());
                // Check browser is running online file
                is.online = /https?/g.test(window.location.protocol);
            },
            /**
             * GET PREFIX OF CSS3 + NAME OF CSS
             */
            CssName: function () {
                /**
                 * FUNCTION CHECK PREFIX VENDER OF BROWSER
                 *  + Remove '-' mark. ex: from 'abc-def' to 'abcdef'
                 */
                var test = {
                    CamelCase: function (prop) {
                        return prop.replace(/-([a-z])/gi, function (m, prop) {
                            return prop.toUpperCase();
                        });
                    },
                    // MAIN TEST CSS
                    CSS: function (prop, isPrefix) {
                        var style = document.createElement('p').style, vender = 'Webkit Moz ms O'.split(' '), prefix = '-webkit- -moz- -ms- -o-'.split(' ');
                        // First, check vender of style
                        var styleCase = this.CamelCase(prop);
                        if (style[styleCase] !== undefined)
                            return (isPrefix ? '' : true);
                        // Next, check vender
                        // Convert string of style to Upper, ex: 'flex-wrap' to 'FlexWrap'
                        var preStyle = M.ProperCase(styleCase);
                        // Check each vender
                        for (var i = 0, len = vender.length; i < len; i++) {
                            if (style[vender[i] + preStyle] !== undefined)
                                return (isPrefix ? prefix[i] : true);
                        }
                        // Return false if not support
                        return false;
                    },
                    // PREFIX OF CSS STYLE
                    Prefix: function (prop) { return this.CSS(prop, true); }
                };
                /**
                 * CHECK PREFIX + VARIABLE CSS TRANSFORM BASIC
                 */
                var tf = 'transform', ts = 'transition';
                // CSS check
                is.tf = test.CSS(tf);
                is.tf3D = test.CSS('perspective');
                is.ts = test.CSS(ts);
                is.opacity = test.CSS('opacity');
                // Variable related to CSS
                var prefix = va.prefix = test.Prefix(tf);
                va.cssTf = cssTf = prefix + tf;
                /**
                 * TRANSLATE TYPE : FIXED IN SAFARI MOBILE + IE
                 */
                var tl3D = 'translate3d(', isTf3D = is.tf3D;
                va.tl0 = isTf3D ? tl3D : 'translate(';
                va.tl1 = isTf3D ? ',0)' : ')';
                va.tlx0 = isTf3D ? tl3D : 'translateX(';
                va.tlx1 = isTf3D ? ',0,0)' : ')';
                va.tly0 = isTf3D ? tl3D + '0,' : 'translateY(';
                va.tly1 = isTf3D ? ',0)' : ')';
            },
            /**
             * TOGGLE CLASS 'CURRENT' BETWEEN SLIDES
             */
            ToggleSlide: function () {
                /**
                 * CONDITIONAL EXECUTION
                 */
                if (!(cs.num >= 1))
                    return;
                /**
                 * SETUP CONTINUE
                 */
                var idCur = cs.idCur, idLast = cs.idLast, $slCur = va.$s.eq(idCur), $slLast = va.$s.eq(idLast), current = va.ns + o.current, deactived = va.deactived;
                // Slide: toggle class actived
                va.$s.not($slCur).removeClass(current).addClass(deactived);
                $slCur.addClass(current).removeClass(deactived);
                // Callback event toggle
                idLast !== undefined && M.RunEvent('deselectID', idLast);
                M.RunEvent('selectID', idCur);
                // Setting number of slide left & right into layer center(no loop)
                !is.centerLoop && PROP.CenterNoLoop();
                // Pagination: toggle class actived
                // Using similar methods above!
                if (is.pag) {
                    var $pagitemCur = va.$pagItem.eq(idCur);
                    va.$pagItem.not($pagitemCur).removeClass(current);
                    $pagitemCur.addClass(current);
                    o.pag.isMark && PAG.SizePosOfMark();
                }
                // Navigation: toggle class inactive
                is.nav && NAV.Toggle();
                // Caption: toggle content
                is.cap && CAPTION.Toggle($slCur, $slLast);
                // Setting load current slide, although not to load
                LOAD.Add($slCur);
                // Toggle classAdd on ruby
                is.CLASSADD && CLASSADD.Toggle();
                // Toggle class mask on Canvas
                UPDATE.CanvasMask();
                // Toggle Deeplinking & Cookie
                // Prevent running at first
                if (idLast !== undefined) {
                    o.isDeeplinking && is.DEEPLINKING && DEEPLINKING.Write();
                    o.isCookie && is.COOKIE && COOKIE.Write();
                }
                // Toggle source link on Iframe lazy
                is.IFRAME && IFRAME.ToggleSource($slCur);
                // Update nested ruby in the current slide
                is.NESTED && NESTED.RefreshInSlide($slCur);
                // Toggle swipe gestures on the current slide
                is.SWIPE && SWIPE.ToggleEvent();
            },
            /**
             * CASES:
             *  + Value = -1 : remove all classes
             *  + Value = 0 : toggle to class[0]
             *  + Value = 1 : toggle to class[1]
             */
            ToggleClass: function (type, value, $obj) {
                /**
                 * CONDITIONAL EXECUTION
                 */
                // Ver 1.7 - Jan 14, 2017: Toggle grab support for mobile device
                // if( is.mobile && type == 'grab' ) return;
                /**
                 * SETUP CONTINUE
                 */
                var classes = o.className[type], class0 = va.ns + classes[0], class1 = va.ns + classes[1], classAdd = value ? class1 : class0, classDel = value ? class0 : class1;
                // Setting default object
                if ($obj === undefined)
                    $obj = $viewport;
                // Value = -1 : remove all classes
                if (value == -1)
                    $obj.removeClass(class0 + ' ' + class1);
                else
                    $obj.addClass(classAdd).removeClass(classDel);
            },
            /**
             * GET VALUE IN STRING
             */
            ValueX: function (str) {
                // Array: get value
                var a = str.substr(7, str.length - 8).split(', ');
                // Array: return value 5
                return M.PInt(a[4]);
            },
            /**
             * SETUP VARIABLES WHEN SCROLL BROWSER
             */
            Scroll: {
                Setup: function () {
                    /**
                     * CASE SLIDESHOW ONLY RUN IN DISPLAY AREA
                     */
                    if (is.ssRunInto) {
                        is.into = false;
                        M.Scroll.Check();
                        var t = 200;
                        $w.off(va.ev.scroll);
                        $w.on(va.ev.scroll, function () {
                            clearTimeout(ti.scroll);
                            ti.scroll = setTimeout(function () { !is.ssPauseAbsolute && M.Scroll.Check(); }, t);
                        });
                    }
                    else {
                        is.into = true;
                    }
                },
                /**
                 * CHECK RUBY INTO DISPLAY AREA
                 */
                Check: function (isNoGo) {
                    M.Scroll.Position();
                    // Check ruby in display area of browser
                    var isInto = !(va.topW > va.botRuby || va.botW < va.topRuby), isGoSlideshow = !isNoGo && is.slideshow && is.ssRunInto;
                    if (isInto) {
                        if (!is.into) {
                            is.into = true;
                            isGoSlideshow && SLIDESHOW.Go('scrollInto');
                        }
                    }
                    else {
                        if (is.into) {
                            is.into = false;
                            isGoSlideshow && SLIDESHOW.Go('scrollOut');
                        }
                    }
                },
                /**
                 * POSITION OF RUBY COMPARE TO WINDOW
                 */
                Position: function () {
                    // Get top/bottom position of window
                    va.hWin = $w.height();
                    va.topW = $w.scrollTop();
                    va.botW = va.hWin + va.topW;
                    // Ruby offset
                    va.topRuby = $ruby.offset().top;
                    va.botRuby = va.topRuby + M.OuterHeight($ruby);
                }
            },
            /**
             * METHODS RELATE TO MATH
             */
            A: function (v) { return Math.abs(v); },
            R: function (v) { return Math.round(v); },
            C: function (v) { return Math.ceil(v); },
            Ra: function () { return Math.random(); },
            Rm: function (m, n) { return M.Ra() * (n - m) + m; },
            Sum: function (a, to) {
                var total = 0;
                if (to < 0)
                    return total;
                // Case not 'to' paramater
                if (to === undefined)
                    to = a.length;
                // Loop plus all values in the array[]
                for (var i = 0; i < to; i++) {
                    total += a[i];
                }
                return total;
            },
            /**
             * METHODS RELATE TO CONVERT NUMBER
             */
            // Convert value to percent(%)
            PPercent: function (v, source) {
                if (v > 0 && v < 1)
                    v *= source;
                return M.R(v);
            },
            // Parse the value have percent unit to Pixel unit
            PercentToPixel: function (value, source) {
                var result = null;
                // Case: The value is string with format '+/-100%'
                if (/^\-?\d*\.?\d+\%$/.test(value)) {
                    result = M.R(M.PFloat(value) * source / 100);
                }
                else if ($.isNumeric(value)) {
                    result = value;
                }
                return result;
            },
            // Convert string of style to json
            PStyleToJson: function ($obj) {
                var style = $obj.attr('style'), re = /\s*([\w-]+)\s*:\s*([^;]*)/g, json = {}, match;
                // Merge Width/Height attributes on object into json
                if ($obj.attr('width') !== undefined)
                    json.width = $obj.attr('width');
                if ($obj.attr('height') !== undefined)
                    json.height = $obj.attr('height');
                // Create loop to get value each object
                while (match = re.exec(style)) {
                    json[match[1]] = match[2];
                }
                // Convert value pixel of Width/Height to number
                var rePixel = /^-?\d*.?\d+px$/;
                if (rePixel.test(json.width))
                    json.width = parseFloat(json.width);
                if (rePixel.test(json.height))
                    json.height = parseFloat(json.height);
                return json;
            },
            // Check all values in the array is number
            ElesIsNumber: function (arr, lenCheck) {
                var len = arr.length, isNum = M.IsArray(arr) && len === lenCheck;
                if (isNum) {
                    for (var i = 0; i < len; i++) {
                        isNum = isNum && $.isNumeric(arr[i]);
                    }
                }
                return isNum;
            },
            /**
             * METHODS RELATE TO TRANSFORM + TRANSITION
             */
            Tl: function (x, y, u) {
                var u = u || 'px';
                return va.tl0 + x + u + ', ' + y + u + va.tl1;
            },
            // Translate x/y, support fallback transition
            Tlx: function (x, u) {
                var u = u || 'px';
                return is.tf ? (va.tlx0 + x + u + va.tlx1) : (x + u);
            },
            Tly: function (y, u) {
                var u = u || 'px';
                return is.tf ? (va.tly0 + y + u + va.tly1) : (y + u);
            },
            // Remove transform on object
            TfRemove: function ($obj) {
                var tf = {};
                tf[cssTf] = '';
                $obj.css(tf);
            },
            /**
             * METHODS RELATE TO ARRAY[]
             */
            Shift: function ($obj, isShift) { return isShift ? $obj.shift() : $obj.pop(); },
            Push: function ($obj, v, isPush) { return isPush ? $obj.push(v) : $obj.unshift(v); },
            /**
             * RANDOM EFFECT IN THE EFFECT ARRAY[]
             */
            RandomInArray: function (arr, except) {
                // Conditional execution : arr is array
                if (M.IsArray(arr)) {
                    /**
                     * CASE: ARRAY HAVE 1 OBJECT
                     */
                    if (arr.length === 1)
                        return arr[0];
                    /**
                     * CASE: ARRAY HAVE MULTIPLE OBJECT
                     */
                    var itemCur = $.extend(true, [], arr), indexItemLast = $.inArray(except, itemCur);
                    // Remove the newly effect
                    // If not found in effect array -> add 1 to fixed select
                    if (indexItemLast === -1)
                        indexItemLast = itemCur.length + 1;
                    itemCur.splice(indexItemLast, 1);
                    // Select random effect in the new array has removed old effect
                    return itemCur[M.R(M.Rm(0, itemCur.length - 1))];
                }
                return arr;
            },
            RandomInArray2: function (arrSource, arrCopy, except) {
                if (M.IsArray(arrSource)) {
                    // Reset the copy array if it empty
                    // Reset the copy array if ramaining 1 object like 'except'
                    if (!arrCopy.length || (arrCopy.length == 1 && arrCopy[0] == except)) {
                        arrCopy = $.extend(true, arrCopy, arrSource);
                    }
                    // Remove 'except' first
                    if (except !== undefined) {
                        var indexExcept = $.inArray(except, arrCopy);
                        if (indexExcept !== -1)
                            arrCopy.splice(indexExcept, 1);
                    }
                    // Get random value in the copy array
                    var idCur = M.R(M.Rm(0, arrCopy.length - 1)), itemCur = arrCopy[idCur];
                    // Remove value selected in the copy array
                    arrCopy.splice(idCur, 1);
                    // Return value selected
                    return itemCur;
                }
                return arrSource;
            },
            /**
             * OTHER METHODS
             */
            // Swipe swap variable
            SwapVaOnSwipe: function () { return va.$swipeCur.is($canvas) ? va.can : va.pag; },
            // Toggle add/removeClass on object
            XClass: function ($obj, isAdd, str) { $obj[(isAdd ? 'add' : 'remove') + 'Class'](str); },
            // Capitalize the first letter of sting
            ProperCase: function (str) { return str.charAt(0).toUpperCase() + str.slice(1); },
            // Convert '{ns}' to namespace
            NS: function (str) {
                return (typeof str == 'string') ? str.replace(/\{ns\}/g, va.ns)
                    : '';
            },
            /**
             * CHECK WIDTH VALUE OF WINDOW/RUBY IN RANGE - SIMILAR MEDIA CSS
             */
            MatchMedia: function (min, max, isWidthOfRuby) {
                /**
                 * CASE: GET WIDTH OF RUBY
                 */
                if (!!isWidthOfRuby) {
                    var wRuby = M.OuterWidth($ruby);
                    if (min <= wRuby && wRuby <= max)
                        return true;
                }
                else {
                    // Case : browser support matchMedia
                    if (!!window.matchMedia) {
                        var str = '(min-width: WMINpx) and (max-width: WMAXpx)'.replace('WMIN', min).replace('WMAX', max);
                        if (window.matchMedia(str).matches)
                            return true;
                    }
                    else {
                        var wWin = $w.width();
                        if (min <= wWin && wWin <= max)
                            return true;
                    }
                }
                return false;
            },
            /**
             * SEARCH FOR NECESSARY VALUE IN ARRAY
             * @return int  Value width of ruby
             */
            GetValueInRange: function (value, valueName) {
                var name = !!valueName ? valueName : 'value';
                // additional : allow default value & get minimun value
                var wMin = 1e5, id = -1;
                for (i = value.num - 1; i >= 0; i--) {
                    // 'from' & 'to' compared to width window
                    if (M.MatchMedia(value[i].from, value[i].to)) {
                        if (wMin >= value[i].to) {
                            wMin = value[i].to;
                            id = i;
                        }
                    }
                }
                // Return value
                return (id > -1 ? value[id][name] : null);
            },
            // Get index in Responsive Level
            GetIndexInResponsive: function (resLevels) {
                var index = null;
                for (var i = 0, len = resLevels.length; i < len; i++) {
                    var min = resLevels[i], max = (i === 0) ? 10000 : resLevels[i - 1];
                    if (M.MatchMedia(min, max)) {
                        index = i;
                        break;
                    }
                }
                // Case: not found index
                if (index === null)
                    index = resLevels.length - 1;
                return index;
            },
            // Parse Grid from a value
            ParseGrid: function (fromValue, isInherit) {
                var resLevelsLen = o.responsiveLevels.length, grid = null;
                // Case: Size is Numeric
                if ($.isNumeric(fromValue) || typeof fromValue === 'string') {
                    grid = [];
                    for (var i = 0; i < resLevelsLen; i++) {
                        if (isInherit)
                            grid[i] = fromValue;
                        else
                            grid[i] = (i == 0) ? fromValue : null;
                    }
                }
                else if (M.IsArray(fromValue)) {
                    // Case: Size length < ResponsiveLevels length -> Additional item in the array of Size
                    if (fromValue.length < resLevelsLen) {
                        var valueLen = fromValue.length;
                        valueLast = fromValue[valueLen - 1];
                        grid = fromValue.slice();
                        for (var i = valueLen; i < resLevelsLen; i++) {
                            grid[i] = isInherit ? valueLast : null;
                        }
                    }
                    else
                        grid = fromValue.slice();
                }
                return grid;
            },
            /**
             * SEARCH ELEMENTS EXCEPT FORM RUBY-NESTED
             *  + Remove nested ruby
             */
            Find: function ($target, selector) {
                var $result = $target.find(selector), $rubyNested = $target.find('.' + va.ns), $resultNested = $rubyNested.find(selector);
                // Loai bo doi tuong trong Ruby Nested
                $result = $result.not($resultNested);
                return $result;
            },
            /**
             * GET OBJECT PROPERTIES IN 'DATA' VARIABLE
             *  + Allow pass number parameter for slide
             */
            Data: function ($obj, opts) {
                var vData = va.data;
                /**
                 * CONVERT NUMBER PARAMETER TO JQUERY OBJECT
                 */
                if ($.isNumeric($obj) && (0 <= $obj && $obj < cs.num)) {
                    $obj = va.$s.eq($obj);
                }
                else if ($obj === 'home') {
                    $obj = $viewport;
                }
                /**
                 * CONDITIONAL EXECUTION
                 */
                if (!($obj instanceof jQuery))
                    return false;
                /**
                 * SETUP EXTEND OBJECT
                 */
                if (M.IsPlainObject(opts)) {
                    opts = $.extend(true, {}, opts);
                    delete opts.$self;
                    delete opts.nsid;
                }
                else
                    opts = {};
                /**
                 * FIRST, SEARCH NSID OF OBJECT IN 'DATA' VARIABLE
                 */
                var nsid;
                for (nsid in vData) {
                    if ($obj.is(vData[nsid]['$self'])) {
                        return $.extend(true, vData[nsid], opts);
                    }
                }
                /**
                 * CREATE NEW PROPERTIES IN 'DATA' VARIABLE IF NSID NOT EXIST
                 */
                nsid = va.numNSID;
                va.numNSID++;
                // Create new object
                vData[nsid] = { '$self': $obj, 'nsid': nsid };
                // Return the newly created 'data'
                return $.extend(true, vData[nsid], opts);
            },
            /**
             * GET TWEEN ANIMATE STORED IN 'DATA' OF OBJECT
             */
            GetTween: function ($obj) {
                var objData = M.Data($obj);
                // Get tween animate on self object
                objData.tweenSelf = objData.tweenSelf || new RubyTween();
                return objData.tweenSelf;
            },
            /**
             * RETURN MODULES COMBINE WITH PROPERTIES
             */
            Module: function (name) {
                return $.extend({}, rt01MODULE[name], one);
            },
            // Execute the events
            RunEvent: function (name, param1, param2) {
                // Trigger event on option
                $.isFunction(o.events[name]) && o.events[name](cs);
                // Trigger event on jQuery event
                cs.ev.trigger(name, [param1, param2]);
            }
        }), 
        /**
         * VALUE OF PROPERTIES
         */
        PROP = {
            /**
             * MERGE ALL MODULES INTO GLOBAL VARIABLE
             */
            MergeAllModules: function () {
                // Move module available to 'one' variable
                one.INIT = INIT;
                one.M = M;
                one.PROP = PROP;
                one.RENDER = RENDER;
                one.LOAD = LOAD;
                one.EVENTS = EVENTS;
                one.POSITION = POSITION;
                one.SIZE = SIZE;
                one.POSSIZE = POSSIZE;
                one.TOSLIDE = TOSLIDE;
                one.FX = FX;
                one.VIEW = VIEW;
                // Embbed 'one' variable into module outside
                SWIPE = M.Module('SWIPE');
                RESPONSIVE = M.Module('RESPONSIVE');
                NAV = M.Module('NAV');
                PAG = M.Module('PAG');
                CAPTION = M.Module('CAPTION');
                IMAGE = M.Module('IMAGE');
                VIDEOBACK = M.Module('VIDEOBACK');
                VIDEOIFRAME = M.Module('VIDEOIFRAME');
                IFRAME = M.Module('IFRAME');
                HOTSPOT = M.Module('HOTSPOT');
                LAYER = M.Module('LAYER');
                LAYERPARALLAX = M.Module('LAYERPARALLAX');
                PARALLAX = M.Module('PARALLAX');
                RUBYANIMATE = M.Module('RUBYANIMATE');
                SLIDESHOW = M.Module('SLIDESHOW');
                TIMER = M.Module('TIMER');
                FLICKR = M.Module('FLICKR');
                DISPLAY = M.Module('DISPLAY');
                DEEPLINKING = M.Module('DEEPLINKING');
                COOKIE = M.Module('COOKIE');
                FULLSCREEN = M.Module('FULLSCREEN');
                NESTED = M.Module('NESTED');
                CLASSADD = M.Module('CLASSADD');
                OLD = M.Module('OLD');
                APIREMOTE = M.Module('APIREMOTE');
                API = $.extend(API, rt01MODULE.APIMORE);
                VIEW = $.extend(VIEW, rt01MODULE.VIEWMATH, rt01MODULE.VIEWCSS, rt01MODULE.VIEWCOVERFLOW3D, one);
                // Check module outside exist
                is.SWIPE = !!rt01MODULE.SWIPE;
                is.RESPONSIVE = !!rt01MODULE.RESPONSIVE;
                is.NAV = !!rt01MODULE.NAV;
                is.PAG = !!rt01MODULE.PAG;
                is.CAP = !!rt01MODULE.CAPTION;
                is.IMAGE = !!rt01MODULE.IMAGE;
                is.VIDEOBACK = !!rt01MODULE.VIDEOBACK;
                is.VIDEOIFRAME = !!rt01MODULE.VIDEOIFRAME;
                is.IFRAME = !!rt01MODULE.IFRAME;
                is.HOTSPOT = !!rt01MODULE.HOTSPOT;
                is.LAYER = !!rt01MODULE.LAYER;
                is.LAYERPARALLAX = !!rt01MODULE.LAYERPARALLAX;
                is.PARALLAX = !!rt01MODULE.PARALLAX;
                is.RUBYANIMATE = !!rt01MODULE.RUBYANIMATE;
                is.SLIDESHOW = !!rt01MODULE.SLIDESHOW;
                is.TIMER = !!rt01MODULE.TIMER;
                is.FLICKR = !!rt01MODULE.FLICKR;
                is.DISPLAY = !!rt01MODULE.DISPLAY;
                is.DEEPLINKING = !!rt01MODULE.DEEPLINKING;
                is.COOKIE = !!rt01MODULE.COOKIE;
                is.FULLSCREEN = !!rt01MODULE.FULLSCREEN;
                is.NESTED = !!rt01MODULE.NESTED;
                is.CLASSADD = !!rt01MODULE.CLASSADD;
                is.APIREMOTE = !!rt01MODULE.APIREMOTE;
            },
            /**
             * MERGE ALL OPTIONS TOGETHER
             */
            MergeAllOpts: function () {
                var optsDefault = rt01VA.optsDefault;
                /**
                 * GET DATA ON HTML5
                 *  + Check option of 'data' is json
                 *  + Make sure convert to json if it's object
                 */
                var optsData = $ruby.data(rt01VA.rubyData);
                console.log(M.StringToJson);
                optsData = M.StringToJson(optsData);
                console.log(optsData);
                /**
                 * MERGE OPTIONS :
                 *  + Merge all options on data html5 + data js into default options of ruby
                 *  + Priority order: [optsData] > [OptsJS] > [options type ruby] > [default options]
                 *  + Priority special options for the browser not support transform
                 *  + Priority special options for mobile
                 */
                var nameOptsPlus = null;
                if (!!optsData.type)
                    nameOptsPlus = optsData.type;
                if (!nameOptsPlus && !!OptsJS.type)
                    nameOptsPlus = OptsJS.type;
                if (!nameOptsPlus)
                    nameOptsPlus = optsDefault.type;
                var optsPlus = rt01VA.optsPlus[nameOptsPlus];
                o = $.extend(true, o, optsDefault, optsPlus, OptsJS, optsData);
                if (!is.tf)
                    o = $.extend(true, o, o.fallback);
                if (is.mobile)
                    o = $.extend(true, o, o.mobile);
                else
                    o = $.extend(true, o, o.desktop);
            },
            /**
             * SPLIT & STORE ARRAY HAS 3 ELEMENTS
             */
            Chain3: function (val, nameValue) {
                // Check 'nameValue', default is 'value'
                if (!nameValue)
                    nameValue = 'value';
                /**
                 * CONVERT TYPE OF VALUE TO ARRAY
                 *  + Case 1: nummber
                 *  + Case 2: array has 3 item & value of each item is number
                 */
                if ($.isNumeric(val))
                    val = [[val, 0, 100000]];
                else if (M.ElesIsNumber(val, 3))
                    val = [val];
                // CONDITIONAL EXECUTION
                if (!M.IsArray(val))
                    return false;
                // SETUP CONTINUE
                var chain = { num: val.length }, wMax = 0; // Maximun value in array[]
                for (i = chain.num - 1; i >= 0; i--) {
                    var a = val[i];
                    // Additional automated missing value
                    if ($.isNumeric(a))
                        a = [a, 0, 100000];
                    // Convert string to other type
                    a[1] = M.PInt(a[1]);
                    a[2] = M.PInt(a[2]);
                    chain[i] = {
                        'from': a[1],
                        'to': a[2]
                    };
                    chain[i][nameValue] = parseFloat(a[0]); // included float number
                    // Search maxiumum value in array[]
                    wMax = (wMax < a[2]) ? a[2] : wMax;
                }
                chain.wMax = M.PInt(wMax);
                return chain;
            },
            /**
             * SPLIT && STORE ARRAY HAS 4 ELEMENTS
             *  + Similar 'chain3()'
             *  + Case 2 value -> remove value 3 & 4
             */
            Chain4: function (val) {
                // Convert to standard array
                if ($.isNumeric(val))
                    val = [[val, val, 0, 100000]];
                else if (M.ElesIsNumber(val, 2))
                    val = [[val[0], val[1], 0, 100000]];
                else if (M.ElesIsNumber(val, 4))
                    val = [val];
                // Conditional execution
                if (!M.IsArray(val))
                    return false;
                /**
                 * SETUP CONTINUE
                 */
                var chain = { num: val.length }, wMax = 0;
                for (i = chain.num - 1; i >= 0; i--) {
                    var a = val[i];
                    // Additional automated missing value
                    if ($.isNumeric(a))
                        a = [a, a, 0, 100000];
                    // Case: auto set from/to
                    if (a.length == 2) {
                        a[2] = 0;
                        a[3] = 1e5;
                    }
                    else if (a.length == 3) {
                        a.unshift(a[0]);
                    }
                    // Array: setting chain
                    chain[i] = {
                        'left': parseFloat(a[0]),
                        'right': parseFloat(a[1]),
                        'from': M.PInt(a[2]),
                        'to': M.PInt(a[3])
                    };
                    // wMax: width-to maximum
                    wMax = (wMax < M.PInt(a[3])) ? a[3] : wMax;
                }
                chain.wMax = M.PInt(wMax);
                return chain;
            },
            /**
             * SETUP PROPERTIES OF DEEPLINKING & COOKIE AT FIRST
             */
            DeepLinkCookie: function () {
                // Update idCur & idBegin if 'deeplinking' or 'cookie' actived
                // Priority 'deeplinking' than 'cookie' if actived same time
                if (o.isDeeplinking)
                    is.DEEPLINKING && DEEPLINKING.Read();
                else if (o.isCookie)
                    is.COOKIE && COOKIE.Read();
            },
            /**
             * SETUP PROPERTIES AT FIRST
             */
            FirstSetup: function () {
                /**
                 * THE VALUE SETUP ONLY ONCE
                 */
                if (!va.stepSetupInit) {
                    // Create tween object
                    va.tweenView = new RubyTween();
                    va.tweenSlide = new RubyTween();
                    va.tweenCaption = new RubyTween();
                    va.tweenClone = new RubyTween();
                    va.tweenMath = new RubyTween();
                    va.tweenParallaxScroll = new RubyTween();
                    // Initialize object at first
                    va.fxCSS = {};
                    va.fxMath = {};
                    va.ssIDRandom = [];
                    va.fxMathRandom = [];
                    // Variable of Flickr
                    va.flickrData = {};
                    va.flickrListPhoto = [];
                    // Shortcut for isLoop
                    is.loop = o.isLoop;
                    // Default swipe object is Canvas
                    va.$swipeCur = $canvas;
                    // Varible of position
                    va.xBuffer = 0;
                    // Properties of Canvas & pagination -> support for swipe
                    va.can = { 'viewport': $viewport };
                    // Initialize at first, not setting because no 'isPag' & '$pag'
                    va.pag = {};
                    // Variable of loadding
                    va.nLoadAtFirst = 0; // Number of slide add to loading
                    va.nLoaded = 0; // Number of slide already loaded
                    is.preloaded = false; // Check preload finish
                    // Add name of browser into ruby -> support fixed transform by css
                    var ns = ' ' + va.ns, classes = ns + va.browser;
                    if (is.ie7)
                        classes += ns + 'ie7';
                    if (is.mobile)
                        classes += ns + 'mobile';
                    if (is.androidNative)
                        classes += ns + 'androidNative';
                    $ruby.addClass(classes);
                    /**
                     * SETUP PROPERTIES EACH SLIDE
                     */
                    va.fx = {};
                    va.slot = {};
                    va.speed = {};
                    va.delay = {};
                    // Array storage ID-Node on each slide
                    va.IDsOnNode = [];
                    /**
                     * ADDITION: DATA FOR RUBY LIKE DATA SLIDE
                     */
                    M.Data($viewport, {
                        'id': 'home',
                        'opts': $.extend(true, {}, o),
                        'tweenLayer': new RubyTween()
                    });
                }
                /**
                 * SETUP VARIABLE & PROPERTIES AT FRIST CAN BE UPDATE
                 */
                // Get WidthRange of Slide
                // Priority 'width' properties in special effect
                var wName = 'widthSlide', fxName = o.fx, wSlide = (!!o[fxName] && !!o[fxName][wName]) ? o[fxName][wName]
                    : o[wName];
                va.wSlideGrid = M.ParseGrid(wSlide, true);
                /**
                 * GET GRID SIZE FOR RESPONSIVE
                 */
                // Get grid size for the Responsive
                var resLevels = o.responsiveLevels;
                if (M.IsArray(resLevels) && resLevels.length) {
                    // Get Grid-width / Grid-heihgt
                    va.wGrid = M.ParseGrid(o.width, true);
                    va.hGrid = M.ParseGrid(o.height, o.width === null ? true : false);
                    // Get grid-padding for Responsive
                    va.maGrid = M.ParseGrid(o.margin, true);
                    va.paGrid = M.ParseGrid(o.padding2, false);
                }
                // Get type-height of Ruby
                // is.heightFixed = $.isNumeric(o.height);
                is.heightFixed = M.IsArray(va.hGrid);
                // Covert to height-fixed when Fullscreen
                if (is.fullscreen)
                    is.heightFixed = true;
            },
            /**
             * SETUP CAC THUOC TINH THANH TUNG MUC RIENG BIET
             */
            IDNum: function () {
                // So luo.ng slide trong Ruby
                num = cs.num = va.$s.length;
                // ID slide current setup
                // Tu dong chuyen doi vi tri 'begin', 'center', 'end' sang gia tri number
                // Tu dong chuyen doi id dau neu gia tri la '<= 0'
                // Tu dong chuyen doi id cuoi neu '>= num'
                if (!va.stepSetupInit) {
                    var idBegin = o.idBegin;
                    if (idBegin == 'begin')
                        idBegin = 0;
                    else if (idBegin == 'center')
                        idBegin = ~~((num / 2) - .5);
                    else if (idBegin == 'centerRight')
                        idBegin = ~~(num / 2);
                    else if (idBegin == 'end')
                        idBegin = num - 1;
                    else if (idBegin == -1 || idBegin >= num)
                        idBegin = num - 1;
                    else if (idBegin <= 0)
                        idBegin = 0;
                    if (cs.idCur === undefined)
                        cs.idCur = va.idBegin = idBegin;
                }
                // Khoa cac thuoc tinh Ruby
                is.nav = o.isNav && is.NAV;
                is.pag = o.isPag && is.PAG;
                is.cap = o.isCap && is.CAP;
                /**
                 * SETUP FOR CASE: SPECIAL NUMBER OF SLIDE
                 */
                // Case: 1 slide
                // Priority order: options oneSlide > options Main
                if (num == 1) {
                    is.nav = o.oneSlide.isNav ? (o.isNav && is.NAV) : false;
                    is.pag = o.oneSlide.isPag ? (o.isPag && is.PAG) : false;
                }
            },
            Transform: function () {
                // CSS duration options
                va.xTimer = 100;
                // Canvas: set Transition timing function
                va.easing = o.swipe.easing;
                va.moveBy = va.moveLastBy = 'swipe';
            },
            Direction: function () {
                // Swipe direction
                // Check 'va.addInfo' -> support update 'ver' to 'hor' dirction
                va.can.dirs = (o.direction == 'ver' && !is.mobile) ? 'ver' : 'hor';
                if (!(va.addInfo && va.addInfo.pagDirs))
                    va.pag.dirs = o.pag.direction;
                // Shortcut vertical direction
                is.dirsHor = (va.can.dirs == 'hor');
                // Variable 'cssTf' changes in swipe direction
                // Only use on Canvas
                if (!is.tf)
                    cssTf = va.cssTf = (!is.dirsVer ? 'left' : 'top');
                // Setting properties of canvas & pagination
                function SameValue(name) {
                    var isHor = va[name].dirs == 'hor';
                    // Name of transform, support for fallback
                    va[name].cssTf = is.tf ? cssTf
                        : (isHor ? 'left' : 'top');
                    // Name of pageX changes depending on direction of canvas & pagination
                    va[name].pageXY = isHor ? 'pageX' : 'pageY';
                }
                SameValue('can');
                SameValue('pag');
            },
            Fx: function () {
                /**
                 * CHECK TYPE OF EFFECT
                 */
                var aFxDefault = ['cssOne', 'cssTwo', 'cssThree', 'cssFour', 'none'], aFx3D = ['coverflow3D'];
                function FxType() {
                    /**
                     * CHECK TYPE OF EFFECT IN ARRAY AFX
                     */
                    for (i = 0; i < aFxDefault.length; i++) {
                        if (o.fx == aFxDefault[i])
                            return aFxDefault[i];
                    }
                    /**
                     * CASE THE SPECIAL TYPE
                     */
                    // Case: type is 'line'
                    if (o.fx === 'line')
                        return 'line';
                    else if ($.inArray(o.fx, aFx3D) !== -1)
                        return '3d';
                    else
                        return 'math';
                }
                va.fxType = FxType();
                /**
                 * AUTOMATICALLY CONVERTED INTO 'DOT' LAYOUT BY NAME OF EFFECT
                 */
                var a = ['randomMath'];
                a = $.merge(a, aFxDefault);
                a = $.merge(a, o.fxMathName);
                va.fxInLayoutDot = a;
            },
            Layout: function () {
                /**
                 * SETUP LAYOUT VIEW
                 */
                var viewList = ['mask', 'coverflow3D', 'zoom3D'], viewCSS = ['cssOne', 'cssTwo', 'cssThree', 'cssFour'];
                // Setup 'view' option at first
                va.fxView = 'basic';
                if ($.inArray(o.fx, viewList) !== -1)
                    va.fxView = o.fx;
                // Effect need RubyAnimate object
                if ($.inArray(o.fx, viewCSS) !== -1 && is.RUBYANIMATE)
                    va.fxView = 'css';
                if ($.inArray(o.fx, o.fxMathName) !== -1)
                    va.fxView = 'math';
                // Automatically converted 'view' if module FX not available or vertical direction
                if (num === 1)
                    va.fxView = 'basic';
                if (!is.dirsHor)
                    va.fxView = 'basic';
                if (/^(mask|coverflow3D)$/.test(va.fxView) && !rt01MODULE['VIEW' + va.fxView.toUpperCase()])
                    va.fxView = 'basic';
                // Capitailize the first letter of 'view'
                va.View = M.ProperCase(va.fxView);
                /**
                 * SETUP LAYOUT
                 */
                va.fxLayout = 'line';
                o.stepNav = o.stepPlay = 1;
                /**
                 * CONVERT TO OTHER LAYOUT
                 * @param string va.fxLayout
                 */
                if (o.fx == 'line')
                    va.fxLayout = 'line';
                else if ($.inArray(o.fx, va.fxInLayoutDot) !== -1 || M.IsArray(o.fx))
                    va.fxLayout = 'dot';
                // Convert to other layout depends on 'view' options
                var viewListToLine = ['mask', 'coverflow3D'];
                if ($.inArray(o.fx, viewListToLine) !== -1)
                    va.fxLayout = 'line';
            },
            Center: function () {
                /**
                 * SETUP IN CASE: HAS SPECIAL NUMBER OF SLIDE
                 */
                if (num == 1 || num == 2) {
                    if (va.fxLayout === 'line') {
                        is.center = is.loop = false;
                    }
                }
                else {
                    is.center = o.isCenter;
                    is.loop = o.isLoop;
                }
                // Create new variable to easy comparision -> center & loop same time
                // Case: pagination is 'tabs' -> loading normal
                is.centerLoop = is.center && is.loop;
                /**
                 * SETUP VALUE OF 'CENTER' VARIABLE
                 */
                var center = va.center = {
                    'isOdd': M.C(num / 2) > num / 2
                };
                /**
                 * SETUP FOR CENTER LAYOUT
                 */
                if (is.centerLoop) {
                    // Slide clone be reset -> focus support for 'fillHole'
                    !!va.$slClone && va.$slClone.remove();
                    va.$slClone = $('');
                    // Number of slide left & right
                    center.nLeft = ~~((num - 1) / 2);
                    center.nRight = center.nLeft + (center.isOdd ? 0 : 1);
                }
                else {
                    // Number of slide left & right
                    PROP.CenterNoLoop();
                }
            },
            /**
             * SETUP VALUE OF CENTER LAYOUT NOT LOOP
             */
            CenterNoLoop: function () {
                va.center.nLeft = cs.idCur;
                va.center.nRight = num - cs.idCur - 1;
            },
            SwipeEvent: function () {
                // Setup options at first
                if (!va.stepSetupInit) {
                    va.swipeTypeCur = null;
                }
            },
            Responsive: function () {
                // Declare the variable at first
                va.pa = [];
                /**
                 * SETUP IN CASE: HAVE RESPONSIVE
                 */
                // is.res = $.isNumeric(o.width) && is.RESPONSIVE;
                is.res = M.IsArray(va.wGrid) && is.RESPONSIVE;
                if (is.res) {
                    // va.wRes = o.width;
                    va.wRes = va.wGrid[0];
                    // va.hRes = is.heightFixed ? o.height : 0;
                    va.hRes = is.heightFixed ? va.hGrid[0] : 0;
                    // Fullscreen: setup
                    if (is.fullscreen) {
                        // Height responsive : auto add value when not setup --> used for fullscreen
                        if (va.hRes == 0)
                            va.hRes = va.wRes;
                        // Ratio responsive
                        va.rRes = va.wRes / va.hRes;
                    }
                }
                /**
                 * SETUP VARIABLE AT FIRST
                 */
                if (!va.stepSetupInit) {
                    va.rate = 1;
                }
            },
            Grab: function () {
                // Grab stop
                if (o.isViewGrabStop)
                    $viewport.addClass(va.ns + 'grabstop');
                else
                    $viewport.removeClass(va.ns + 'grabstop');
            },
            Pagination: function () {
                var op = o.pag;
                // Support for old version
                if (op.type == 'tab')
                    op.type = 'tabs';
                // Setup for 'list' type of pagination -> only render not setup event
                is.pagList = op.type == 'list';
                is.pagTabs = op.type == 'tabs';
                is.pagThumb = op.type == 'thumbnail';
                is.alignJustify = op.align == 'justify';
                if (is.pagList)
                    is.swipeOnPag = false;
                // CHECK VERTICAL TABS
                function IsPagVer(opts, pag) {
                    return !is.pagOutside
                        && !is.pagList
                        && (opts.isPag && pag.direction == 'ver');
                }
                // CHECK TYPE OF VERTICAL TABS
                va.pagVer = IsPagVer(o, o.pag) && va.pag.dirs == 'ver' ? (o.pag.position == 'begin' ? 'begin' : 'end')
                    : null;
                // Reset margin oin Viewport if before is vertical tabs
                if (!!va.stepSetupInit && IsPagVer(oo, oo.pag)) {
                    $viewport.css({ 'margin-left': '', 'margin-right': '' });
                }
                // Check size of pagItem = size of Item
                // If there is fixed size -> size Self pagItem = false
                is.pagItemSizeSelf = (op.typeSizeItem == 'self' && !is.alignJustify);
                if ($.isNumeric(op.width) || $.isNumeric(op.height))
                    is.pagItemSizeSelf = false;
            },
            Slideshow: function () {
                // Timer
                var ss = o.slideshow;
                is.slideshow = o.isSlideshow && is.SLIDESHOW;
                is.timer = is.slideshow && ss.isTimer && is.TIMER;
                va.timer = (ss.timer == 'arc' && !is.canvas2d) ? 'line' : ss.timer;
                // Button PlayPause
                is.playpause = is.slideshow && ss.isPlayPause;
                is.ssControl = is.timer || is.playpause;
                // Setup autoRun -> autoRun = false, when at same time the playpause & isAutoRun = false
                is.autoRun = !(ss.isPlayPause && !ss.isAutoRun);
                is.ssPauseAbsolute = !is.autoRun;
                // Setup other
                is.ssRunInto = ss.isRunInto;
                is.hoverAction = false;
                is.stop = false;
            },
            LastSetup: function () {
                // Update value when refresh ruby
                if (va.stepSetupInit) {
                    // Update fixed: remove Viewport-height inline
                    is.heightFixed && $viewport.css('height', '');
                }
                // Remove all options in free version
                o.rev[0] == 'eerf' && NOISREV.Eerf();
            },
            /**
             * SETUP THE PROPERTIES OF RUBY IN SEPARATE FUNCTION
             */
            Ruby: function () {
                /**
                 * SETUP THE PROPERTIES AT FIRST -> PRIORITY ORDER IMPORTANT
                 */
                PROP.FirstSetup();
                PROP.IDNum();
                PROP.Transform();
                PROP.Direction(); // Affecting 'view' direction
                PROP.Fx();
                PROP.Layout();
                PROP.Center();
                PROP.SwipeEvent(); // Affecting fx & layout
                PROP.Responsive();
                PROP.Grab();
                PROP.Pagination(); // Below swipe event
                PROP.Slideshow();
                PROP.LastSetup();
                /**
                 * SETUP THE REST
                 */
                // Ruby: clear datas after first setup Ruby
                !va.stepSetupInit && $ruby.removeAttr('data-' + rt01VA.rubyData).removeData(rt01VA.rubyData);
                // Variable to recognize call PROP.Setup() run first
                if (va.stepSetupInit === undefined)
                    va.stepSetupInit = 1;
                // Add class after setup properties
                UPDATE.AddClass();
            },
            /**
             * PROPERTIES & OPTIONS EACH SLIDE
             */
            Slides: function () {
                // Reset position of slide at first in fallback mode
                if (!is.tf)
                    va.$s.css({ 'left': '', 'top': '' });
                /**
                 * SETUP EACH SLIDE
                 */
                var fxType = va.fxType;
                va.$s.each(function (i) {
                    var $slCur = $(this), slData = M.Data($slCur), optsCur = slData['opts'] || {};
                    /**
                     * SETUP REQUIRED PART
                     *  + Store ID for each slide
                     *  + Store ID for each pagitem
                     */
                    slData['id'] = i;
                    is.pag && M.Data(va.$pagItem.eq(i), { 'id': i });
                    /**
                     * SETUP CURRENT OPTIONS OF EACH SLIDE
                     *  + Case: at first setup slide after initialize ruby || no options in data of current slide
                     *  + Case: update properties of ruby
                     *  + Case: update properties of each slide
                     *  + Case: change number of slide || add slide by api
                     */
                    if (va.fx[i] === undefined || $.isEmptyObject(optsCur) || slData.loadBy == 'apiAdd') {
                        var nameData = 'data-' + o.nameDataSlide, optsData = $slCur.data(o.nameDataSlide), msgError = 'options on "XX" in Slide YY not valid'
                            .replace(/XX/, nameData)
                            .replace(/YY/, i);
                        optsData = M.StringToJson(optsData, msgError);
                        optsCur = $.extend(true, optsCur, o, optsData);
                        // Remove 'data-slide' attribute on each slide
                        $slCur.removeAttr(nameData);
                    }
                    else if (M.IsPlainObject(va.optsUpdate) && !$.isEmptyObject(va.optsUpdate)) {
                        optsCur = $.extend(true, optsCur, va.optsUpdate);
                    }
                    else if (M.IsPlainObject(va.optsSlides) && M.IsPlainObject(va.optsSlides[i])) {
                        optsCur = $.extend(true, optsCur, va.optsSlides[i]);
                    }
                    else if (is.apiRemove) { }
                    else
                        return;
                    /**
                     * SETUP PROPERTIES OF EFFECT
                     */
                    // Setup Fx name
                    if (/^(cssOne|cssTwo|cssThree|cssFour)$/.test(fxType)) {
                        // Setup & store current effect into variable
                        va.fx[i] = VIEW.GetFxCss(fxType, optsCur);
                    }
                    else if (fxType == 'none')
                        va.fx[i] = 'none';
                    else
                        va.fx[i] = (va.fxLayout == 'line') ? null : optsCur.fx;
                    // Setup Others options
                    va.slot[i] = optsCur.slot;
                    va.speed[i] = optsCur.speed;
                    va.delay[i] = optsCur.slideshow.delay;
                    optsCur.imageback.posGrid = M.ParseGrid(optsCur.imageback.position, true);
                    slData['opts'] = optsCur;
                    // Check minimum value of 'speed' & 'delay'
                    if (va.speed[i] < 200)
                        va.speed[i] = 200;
                    if (va.delay[i] < 500)
                        va.delay[i] = 500;
                    /**
                     * SETUP OTHER PROPERTIES
                     */
                    // Store classAdd of each slide
                    if (is.CLASSADD)
                        va.classAdd[i] = CLASSADD.Filter(optsCur);
                    // Check have id-text & store all id-text of slide into array variable
                    va.IDsOnNode[i] = $slCur.attr('id');
                    // Check + setup Iframe lazy
                    is.IFRAME && IFRAME.Init($slCur);
                    // Store 'control' element
                    // Store all current options on each slide
                    slData['control'] = optsCur.control;
                    slData['tweenLayer'] = slData['tweenLayer'] || new RubyTween();
                });
                /**
                 * SETUP THE END VARIABLE
                 */
                va.tDelay = va.delay[cs.idCur];
                // value 1: for init Ruby; value 2: for init slide
                if (va.stepSetupInit === 1)
                    va.stepSetupInit = 2;
                // Toggle 'first' & 'last' class for pagitems
                is.pag && PAG.FirstLastClass();
            }
        }, 
        /**
         * UPDATE VALUE PROPERTIES
         */
        UPDATE = {
            // Add class into ruby after update
            AddClass: function () {
                // Ruby: class layout & height type
                var ns = ' ' + va.ns, classRuby = '{ns}type-{type} {ns}layout-{layout} {ns}fxlayout-{fxlayout} {ns}fxview-{fxview} {ns}fxtype-{fxtype} {ns}height-{height} {ns}lazy-{lazytype}'
                    .replace(/\{ns\}/g, va.ns)
                    .replace(/\{type\}/, o.type)
                    .replace(/\{layout\}/, o.layout)
                    .replace(/\{fxlayout\}/, va.fxLayout)
                    .replace(/\{fxview\}/, va.fxView)
                    .replace(/\{fxtype\}/, va.fxType)
                    .replace(/\{height\}/, is.heightFixed ? 'fixed' : 'auto')
                    .replace(/\{lazytype\}/, o.lazyType);
                // Class recognize browser support transform & showInRange
                classRuby += ns + (is.tf ? 'transform' : 'no-transform');
                classRuby += is.opacity ? '' : ns + 'no-opacity';
                classRuby += o.skin !== null ? ns + o.skin : '';
                if (!is.showInRange)
                    classRuby += ns + 'none';
                // Add class into ruby after setup
                $ruby.addClass(classRuby);
                // Pagination add type class
                is.pag && PAG.ToggleClass(true);
            },
            // Remove current class on ruby -> used for update properties
            RemoveClass: function () {
                // Ruby: remove exist class
                var classRuby = '{ns}type-{type} {ns}layout-{layout} {ns}fxlayout-{fxlayout} {ns}fxview-{fxview} {ns}fxtype-{fxtype} {ns}height-{height} {ns}lazy-{lazytype}'
                    .replace(/\{ns\}/g, va.ns)
                    .replace(/\{type\}/, oo.type)
                    .replace(/\{layout\}/, oo.layout)
                    .replace(/\{fxlayout\}/, vava.fxLayout)
                    .replace(/\{fxview\}/, vava.fxView)
                    .replace(/\{fxtype\}/, vava.fxType)
                    .replace(/\{height\}/, isis.heightFixed ? 'fixed' : 'auto')
                    .replace(/\{lazytype\}/, oo.lazyType);
                // First, remove class in ruby
                classRuby += oo.skin !== null ? (' ' + va.ns + oo.skin) : '';
                $ruby.removeClass(classRuby);
                // Remove class added on pagination
                is.pag && PAG.ToggleClass(false);
            },
            // Reset other when update options
            Reset: function () {
                // Layout dot: remove translate
                if (va.fxLayout == 'dot') {
                    var _tf = {};
                    _tf[cssTf] = '';
                    va.$s.css(_tf);
                    POSITION.AnimateX($canvas, 0, 1, 1);
                }
                // Remove 'perspective' on Viewport
                if (/^(basic)$/.test(va.fxView)) {
                    var tf = {};
                    tf[va.prefix + 'perspective'] = '';
                    $viewport.css(tf);
                }
            },
            /**
             * UPDATE 'MASK' ON CAVAS
             */
            CanvasMask: function () {
                var isMaskCur = M.Data(cs.idCur)['opts']['isMask'], classMask = va.ns + 'mask';
                /**
                 * CASE: MASK AUTO
                 */
                if (isMaskCur == 'auto') {
                    /**
                     * CASE TYPE FX IS 'CSS'
                     */
                    if (/^css/.test(va.fxType)) {
                        $viewport.removeClass(classMask);
                    }
                    else {
                        $viewport.addClass(classMask);
                    }
                }
                else if (isMaskCur === false)
                    $viewport.removeClass(classMask);
                else
                    $viewport.addClass(classMask);
            },
            /**
             * REUPDATE WHEN WINDOW RESIZE
             *  + Order functions is important !!!
             */
            Resize: function () {
                // console.log('resize');
                M.RunEvent('resize'); // Trigger event 'resize'
                // Setup size of pagItem
                // + Search value of wItem/hItem
                // + In vertical tabs -> need reset size of pagination at first
                is.pag && !is.pagList && PAG.TypeSizeItem();
                SIZE.WidthForRuby(); // First, get 'width' of ruby
                is.res && RESPONSIVE.UpdateVars(); // Responsive: calculation padding & va.rate
                is.IMAGE && IMAGE.UpdateAllImageBy('size'); // Update size of Image item when there is width of slide
                is.VIDEOBACK && VIDEOBACK.UpdateAllVideoBy('size', '$videoback');
                is.heightFixed && SIZE.HeightFixedForRuby(); // First, get height of ruby -> support image autoFit/autoFill
                SIZE.EndOfRuby(); // Size of ruby depends on direction
                is.res && is.fullscreen && FULLSCREEN.Variable(); // Fullscreen: reupdate variable -> 'padding' & v'a.rate' need height of ruby first
                is.IMAGE && IMAGE.UpdateAllImageBy('position'); // Update all position of Imageback all slides, after getting height of ruby
                if (is.VIDEOBACK) {
                    VIDEOBACK.UpdateAllVideoBy('position', '$videoback');
                    VIDEOBACK.UpdateAllVideoBy('size', '$videobackPoster');
                    // Must update position of Videoback first
                    VIDEOBACK.UpdateAllVideoBy('position', '$videobackPoster');
                }
                is.PARALLAX && PARALLAX.Check(va.$s); // Update Parallax effect in all slides
                POSSIZE.CombineAtFirst();
                /**
                 * SETUP NEED DELAY TIMER
                 */
                setTimeout(function () {
                    // Setup Layer
                    if (is.LAYER) {
                        // Update properties of Layer in all slides
                        // Update position of Layer in current slide
                        LAYER.Update();
                        LAYER.Resume(cs.idCur);
                        LAYER.Resume('home');
                    }
                    // Setup Hotspot
                    is.HOTSPOT && HOTSPOT.UpdatePosition(cs.idCur);
                }, 30);
                SIZE.AnimHeightForRuby(true); // animHeightForRuby: update make image shake
                M.RunEvent('resizeEnd'); // Trigger event 'resizeEnd'
            }
        }, 
        /**
         * NOISREV
         */
        NOISREV = {
            Check: function () {
                // Initialize variable
                var ver = o.rev[0], isRun = false;
                // Pre version
                if (ver == 'erp' || ver == 'eerf')
                    isRun = true;
                else if (ver == 'omed') {
                    var demoURL = o.rev[1].split('').reverse().join('');
                    if (document.URL.indexOf(demoURL) !== -1)
                        isRun = true;
                }
                return isRun;
            },
            // Properties of free version
            Eerf: function () {
                // Options chung
                var options = {
                    cssOne: null,
                    cssTwoIn: null,
                    cssTwoOut: null,
                    cssEasing: null,
                    isSlideshow: false,
                    name: null
                };
                o = $.extend(true, o, options);
                // Layout line
                if (o.fx === null) {
                    o.fx = va.fxLayout = 'line';
                }
                // 'pag' options
                o.pag.direction = 'hor';
            }
        }, 
        /**
         * RENDER ELEMENTS
         */
        RENDER = {
            /**
             * RENDER STRUCTURE MARKUP OF THE ELEMENTS
             */
            Structure: function () {
                // Setup markup first: Viewport, Canvas
                RENDER.Anchor();
                RENDER.Viewport();
                RENDER.Canvas();
                RENDER.OverlayGhost($viewport);
                // Search + setup home layer
                is.LAYER && LAYER.LayerHomeMarkup();
                // Slides: setup markup
                // + Create '$s' empty -> add new slide in loop function
                va.$s = $('');
                $canvas.children().each(function () { RENDER.Slide($(this)); });
                // Setup each elements each slide
                va.$s.each(function () {
                    var $slCur = $(this);
                    // Setup Caption, PagItem
                    RENDER.CapPagHTML($slCur);
                    // Setup Videos
                    is.VIDEOIFRAME && VIDEOIFRAME.ConvertTag($slCur);
                });
            },
            /**
             * CREATE MARKUP OF ANCHOR FOR FULLWIDTH - FULLSCREEN LAYOUT
             */
            Anchor: function () {
                // Conditional execution
                if (is.fullwidth || is.fullscreen) {
                    var classAnchor = va.ns + 'anchor';
                    // Create new element 'anchor'
                    va.$anchor = $('<div/>', { 'class': classAnchor });
                    // Append $anchor after ruby
                    $ruby.before(va.$anchor);
                    // Set position & size for Ruby at fist
                    POSSIZE.Anchor();
                }
            },
            /**
             * CREATE MARKUP OF VIEWPORT
             */
            Viewport: function () {
                // Initialize variable
                var viewClass = va.ns + o.nameViewport, viewport = $ruby.children('.' + viewClass);
                // Search markup viewport
                if (viewport.length)
                    $viewport = viewport;
                else {
                    $ruby.wrapInner($(divdiv, { 'class': viewClass }));
                    $viewport = $ruby.children('.' + viewClass);
                }
                // Store 'viewport' in variable
                va.$viewport = $viewport;
            },
            /**
             * CREATE MARKUP OF CANVAS
             *  + Default tagname is 'div'
             *  + Can chnages tagName of canvas by 'tagName' option
             *  + Automatically changes tagName of canvas to 'ul' if tagName of slide is 'li'
             */
            Canvas: function () {
                // Initialize variable
                var canvasClass = va.ns + o.nameCanvas, tagCanvas = o.tagCanvas, canvas = $viewport.children('.' + canvasClass);
                /**
                 * CASE: MARKUP CANVAS IS OUTSIDE || EXIST BEFORE
                 */
                if (canvas.length) {
                    tagCanvas = canvas[0].tagName.toLowerCase();
                }
                else {
                    /**
                     * CASE: SLIDES EXIST
                     */
                    var $slides = $viewport.children();
                    if ($slides.length) {
                        // Automatically changes tagCanvasName if tagName of children is 'li'
                        if (tagCanvas == 'div' && $slides[0].tagName.toLowerCase() == 'li')
                            tagCanvas = 'ul';
                        var html = (tagCanvas == 'ul') ? '<ul/>' : divdiv;
                        $slides.wrapAll($(html, { 'class': canvasClass }));
                    }
                    else {
                        $viewport.append($('<div/>', { 'class': canvasClass }));
                    }
                }
                /**
                 * STORE CANVAS INTO GLOBAL VARIABLE
                 */
                $canvas = va.$canvas = $viewport.children('.' + canvasClass);
                M.Data($canvas, { 'tagName': tagCanvas, 'pos': { 'x': 0 } });
            },
            /**
             * OVERLAY GHOST: SUPPORT SWIPE GESTURE NOT PREVENT BY ANY OTHER ELEMENTS
             */
            OverlayGhost: function ($parent) {
                var $overlayGhost = $(divdiv, { 'class': va.ns + 'overlay-ghost' });
                $parent.append($overlayGhost);
            },
            /**
             * CREATE MARKUP OF SLIDES
             *  + Wrap 'div'/'li' for slide without wrapper
             *  + Add class '{ns}slide' & add icon loader into slide
             */
            Slide: function ($sl) {
                var slClass = va.ns + o.nameSlide, slTagBegin = $sl[0].tagName.toLowerCase();
                /**
                 * SETUP OF TAG NAME
                 */
                // Case: wrapper is 'div|li|article|section'
                if (/^(div|li|article|section)$/.test(slTagBegin) || $sl.hasClass(slClass)) {
                    // do nothing
                }
                else if (/^(style|script)$/.test(slTagBegin)) {
                    return;
                }
                else if (/^(br)$/.test(slTagBegin)) {
                    $sl.remove();
                    return false;
                }
                else {
                    var canvasTag = M.Data($canvas)['tagName'], slTag = (canvasTag == 'ul') ? '<li/>' : divdiv, $wrapper = $(slTag, { 'class': slClass });
                    $sl.wrap($wrapper);
                    $sl = $sl.closest('.' + slClass);
                }
                /**
                 * GET LINK ON SLIDE
                 */
                var dataLink = $sl.data('link'), linkTarget = $sl.data('link-target') || '', link = null;
                if (dataLink !== undefined && !/^\s*$/.test(dataLink)) {
                    // Store link url
                    link = dataLink;
                    // Create new markup of slide link
                    $sl
                        .addClass(M.NS('{ns}link-onslide'))
                        .removeAttr('data-link data-link-target');
                }
                // Slide: add class -> make sure slide has class nameSlide
                // Slides assign to variable $s, add class 'sleep' to setup height 100% , hidden all children
                $sl
                    .addClass(slClass)
                    .addClass(M.NS('{ns}sleep {ns}no-loaded'))
                    .addClass(va.deactived);
                // Slide: initialize properties in data to get info without error
                var FALSE = false;
                M.Data($sl, {
                    'link': link,
                    'linkTarget': linkTarget,
                    'isLoading': FALSE,
                    'isLoaded': FALSE,
                    'isImgback': FALSE,
                    'isVideo': FALSE,
                    'isAjax': FALSE,
                    'isPagEmpty': FALSE,
                    'loadBy': 'normal'
                });
                // Insert icon loader into slide
                RENDER.LoaderAdd($sl, $sl, '$slLoader');
                // Insert slide to '$s' variable
                va.$s = va.$s.add($sl);
                // Return slide: supprot for add new slide by api
                return $sl;
            },
            /**
             * SEARCH & CREATE MARKUP CAPTION ITEM & PAGITEM OF CURRENT SLIDE
             */
            CapPagHTML: function ($slCur) {
                /**
                 * SEARCH CONTENT CAPTION OF CURRENT SLIDE
                 */
                var ns = va.ns, capHTML = '', slData = M.Data($slCur), $imgback = $slCur.find('.' + ns + o.nameImageBack);
                // First, get content of Imageback
                $imgback.each(function () {
                    var $i = $(this);
                    // Content of caption depends on tagName
                    // + is image: get content in 'alt' attribute
                    // + is link tag: get content inside tag
                    var tag = this.tagName.toLowerCase();
                    if (tag === 'img')
                        capHTML = $i.attr('alt');
                    else if (tag === 'a')
                        capHTML = $i.html();
                });
                // Keep searching content in Caption item element
                var $capItem = $slCur.children('.' + ns + 'capitem');
                if ($capItem.length) {
                    capHTML = $capItem.html();
                    $capItem.remove();
                }
                // Store captionItem into data slide
                slData.htmlCap = capHTML;
                /**
                 * SETUP PAGINATION ITEM
                 */
                // Pagination item: search '.pagitem' -> store into data slide
                var $pagItem = M.Find($slCur, M.NS('.{ns}pagitem'));
                // Case: create new node if not exist
                if (!$pagItem.length) {
                    $pagItem = $(divdiv, { 'class': ns + 'pagitem' });
                    slData.isPagEmpty = true;
                }
                // Store object into data slide then remove
                slData.$pagItem = $pagItem;
                $pagItem.remove();
            },
            /**
             * SERACH THE ELEMENTS OF OUTSIDE RUBY
             */
            SearchNode: function (classSearch) {
                var $dom = $(), NAME = va.name;
                /**
                 * CONDITIONAL EXECUTION: MUST BE 'NAME' DEFINED
                 */
                if (NAME !== null && NAME !== undefined) {
                    $(classSearch).each(function () {
                        var $item = $(this), markupData = $item.data(rt01VA.rubyName + 'Markup');
                        // Get object if value in data link name of ruby
                        if (markupData === NAME)
                            $dom = $item;
                    });
                    // Return object
                    if ($dom.length)
                        return $dom;
                }
                /**
                 * KEEP SEARCHING OBJECT INSIDE RUBY
                 */
                var $findNext = M.Find($ruby, classSearch);
                // Return object found
                return $findNext.length ? $findNext : $();
            },
            /**
             * INSERT THE MARKUP INTO OBJECT
             */
            Into: function (intoParent, $child) {
                var oMarkup = o.markup, $parent;
                // Search parent object
                switch (intoParent) {
                    case 'viewport':
                        $parent = $viewport;
                        break;
                    case 'nav':
                        if (!va.$nav) {
                            va.$nav = $(divdiv, { 'class': va.ns + o.nameNav });
                            RENDER.Into(oMarkup.navInto, va.$nav);
                        }
                        $parent = va.$nav;
                        break;
                    case 'ssControl':
                        $parent = va.$ssControl;
                        break;
                    default:
                        $parent = $ruby;
                        break;
                }
                // Insert new childrent found into parent
                $parent.append($child);
            },
            /**
             * RENDER ICON LOADER
             */
            LoaderAdd: function ($save, $parent, name) {
                /**
                 * CONDITIONAL EXECUTION
                 */
                if (!(o.isLoader))
                    return;
                /**
                 * CREATE LOADER
                 */
                var markup = (name === '$loaderThumb') ? M.NS(o.markup.loaderThumb)
                    : M.NS(o.markup.loader), 
                // Create loader by jQuery
                $loader = $(markup);
                // Store loader into data slide & insert to parent
                M.Data($save)[name] = $loader;
                $parent.append($loader);
            },
            LoaderRemove: function ($slide, name) {
                var $loader = M.Data($slide)[name];
                $loader && $loader.remove();
            },
            /**
             * UPDATE IMAGE IN 'OVERLAY' ELEMENT
             */
            DivImg: function (name, parent, isAfter) {
                var classes = va.ns + o[name + 'Name'], nameUpper = M.ProperCase(name); // Capitalize the first letter of 'name', ex: 'overlay' to 'Overlay'
                va[name] = $ruby.find('.' + classes);
                // Case: option actived
                if (o['is' + nameUpper]) {
                    if (!va[name].length) {
                        // Check image inside container
                        var src = $ruby.data('img' + name), tag = (!!src) ? '<div class="' + classes + '"><img src="' + src + '" alt="[' + name + ']"></div>'
                            : '<div class="' + classes + '"></div>';
                        // Select insert after || before compare with parent object
                        isAfter && parent.after($(tag)) || parent.before($(tag));
                    }
                }
                else if (va[name].length)
                    va[name].remove();
            },
            /**
             * RENDER OTHER ELEMENTS
             */
            Other: function () {
                // Render overlay element
                (oo.isOverlay != o.isOverlay) && RENDER.DivImg('overlay', $canvas, true);
            }
        }, 
        /**
         * LOAD METHODS
         * Support features:
         *  + Begin loading slide with ID != 0
         *  + Load by zigzag left/right if idBegin != 0
         *  + Preload slide, default is 1
         *  + Support parallel load : optimal load speed
         *  + When no loaded, switch to other slide -> priority load current slide
         */
        LOAD = {
            /**
             * STORE ID OF SLIDES INTO ARRAY TO LOADDING SLIDE IN ORDER
             */
            Way: function () {
                var IDToLoad = [], // Store ID of slide in array
                idCur = cs.idCur, // ID current
                oLazySmart = o.lazySmart;
                /**
                 * CHECK LOADING STATUS OF SLIDE
                 */
                function IsSlideLoading(id) {
                    return M.Data(va.$s.eq(id))['isLoading'];
                }
                /**
                 * FUNCTION: LOADING THE SLIDE IN ORDER FORM SMALLEST TO LARGEST
                 * + Load in order : 0,1,2,3,4...
                 */
                function LoadLinear() {
                    for (var i = 0; i < num; i++) {
                        !IsSlideLoading(i) && IDToLoad.push(i);
                    }
                }
                /**
                 * LOADING SLIDES BY ZIGZAG DEPENDS ON 'IDMAP'
                 */
                function LoadZigzagByIDMap() {
                    var idMap = va.idMap, idCenter = M.C(num / 2 - 1), idCur = idCenter, nLeft = 1, nRight = 1, isRight = true;
                    /**
                     * SETUP EACH SLIDE
                     */
                    for (var i = 0; i < num; i++) {
                        /**
                         * CASE: THE FIRST SLIDE
                         */
                        if (i == 0) {
                            !IsSlideLoading(idMap[idCur]) && IDToLoad.push(idMap[idCur]);
                        }
                        else {
                            if (isRight) {
                                idCur = idCenter + nRight;
                                nRight++;
                                isRight = false;
                            }
                            else {
                                idCur = idCenter - nLeft;
                                nLeft++;
                                isRight = true;
                            }
                            !IsSlideLoading(idMap[idCur]) && IDToLoad.push(idMap[idCur]);
                        }
                    }
                }
                /**
                 * LOADING SLIDES ZIGZAG BY RIGHT/LEFT DIRECTION
                 * + Begin loading at idBegin -> next load right/left -> next load right/left
                 */
                function LoadZigzagLine() {
                    var right = 1, // Default: load right first
                    n = 1, leftEnd = 0, // Shortcut leftEnd
                    rightrEnd = 0; // Shortcut rightEnd
                    /**
                     * SETUP EACH SLIDE
                     */
                    for (var i = 0; i < num; i++) {
                        /**
                         * CASE: THE FIRST SLIDE
                         */
                        if (i == 0) {
                            !IsSlideLoading(va.idBegin) && IDToLoad.push(va.idBegin);
                        }
                        else {
                            if ((idCur != num - 1) && (right || leftEnd)) {
                                !IsSlideLoading(idCur + n) && IDToLoad.push(idCur + n);
                                // Left: end
                                if (leftEnd)
                                    n++;
                                else
                                    right = 0;
                                // Right: check end
                                if (IDToLoad[i] >= num - 1)
                                    rightrEnd = 1;
                            }
                            else {
                                !IsSlideLoading(idCur - n) && IDToLoad.push(idCur - n);
                                n++;
                                // Right: end
                                right = !rightrEnd;
                                // Left: check end
                                if (IDToLoad[i] <= 0)
                                    leftEnd = 1;
                            }
                        }
                    }
                }
                /**
                 * THE NUMBER OF SLIDE PARALLEL LOADING
                 *  + After complete preload -> 'va.nLoadParallet' allways = -1 -> plus 1 at first to easy setup
                 */
                va.nLoadParallel = oLazySmart.amountEachLoad + 1;
                /**
                 * SETUP PRELOAD
                 *  + Case 'all': load all slides
                 *  + Case == 0: allways preload 1 slide
                 */
                va.preload = oLazySmart.preload;
                if (oLazySmart.preload == 'all' || oLazySmart.preload > num)
                    va.preload = num;
                if (oLazySmart.preload <= 0)
                    va.preload = 1;
                if (o.lazyType === 'none')
                    va.preload = 0;
                if (o.lazyType === 'single')
                    va.preload = 1;
                /**
                 * SETUP ORDER & POSITION ID OF SLIDES
                 */
                LOAD.IDMap();
                /**
                 * SETUP IN ORDER LOAD OF SLIDES
                 */
                if (cs.num > 0) {
                    // Case: slide at center position ->  load zigzag-round
                    // Ver 1.7 - Jan 13, 2017: remove condition va.fxLayout == 'line', support for layout 'dot'
                    if (is.centerLoop)
                        LoadZigzagByIDMap();
                    else
                        (idCur == 0) ? LoadLinear() : LoadZigzagLine();
                }
                // Store value IDToLoad into variable
                va.IDToLoad = IDToLoad;
            },
            /**
             * ORDER APPEARANCE OF ID SLIDE
             * The steps taken:
             *  + Search ID-slide begin in array[]
             *  + The remaining order in array[] by plus 1
             *  + If order > va.num -> begin by 0
             */
            IDMap: function () {
                var map = [];
                /**
                 * SETUP IDMAP FOR CENTER LAYOUT
                 */
                // Ver 1.7 - Jan 13, 2017: remove condition va.fxLayout == 'line', support for layout 'dot'
                if (is.centerLoop) {
                    // Priority slide right appears if sum of slides is even number
                    var idBegin = M.C(num / 2) + cs.idCur;
                    if (!va.center.isOdd)
                        idBegin++;
                    // 'idBegin' begin again by smaller, if larger 'va.num'
                    if (idBegin >= num)
                        idBegin -= num;
                    // Function loop: add ID to map
                    for (i = 0; i < num; i++) {
                        // idBegin return 0, if larger 'va.num'
                        if (idBegin >= num)
                            idBegin = 0;
                        // Map: add value
                        map[i] = idBegin++;
                    }
                }
                else {
                    for (i = 0; i < num; i++) {
                        map.push(i);
                    }
                }
                // Store result into variable
                va.idMap = map;
            },
            /**
             * SETUP PARALLET LOADDING MULTIPLE SLIDES AT FIRST
             */
            ParallelWhenSlideBegin: function () {
                var IDToLoad = va.IDToLoad;
                /**
                 * UPDATE VARIABLE TO RECOGNIZE STATUS LOADING
                 */
                IDToLoad.length && IDToLoad.shift(); // Get ID current slide
                va.nLoadAtFirst++; // Increase the number of load
                /**
                 * SETUP PRELOAD SLIDES AT RUBY APPEARANCE AT FIRST
                 *  + This time 'LOAD.slideBegin()' in 'LOAD.ParalletWhenSlideEnd()' be paused
                 */
                if (IDToLoad.length) {
                    // Condition and function load next slide
                    var isLoadNext = false;
                    if (/^(none|all)$/.test(o.lazyType))
                        isLoadNext = true;
                    if (o.lazyType !== 'none' && va.nLoadAtFirst < va.preload)
                        isLoadNext = true;
                    isLoadNext && LOAD.SlideBegin(va.$s.eq(IDToLoad[0]));
                }
            },
            /**
             * SETUP PARALLET MULTIPLE SLIDES SAME TIME WHEN FINISH SETUP THE SLIDE
             */
            ParallelWhenSlideEnd: function ($slide) {
                // Initialize variable
                var IDToLoad = va.IDToLoad, oLazySmart = o.lazySmart;
                // Check case loaded all slides
                va.nLoaded++;
                va.nLoaded === num && LOAD.LoadedAllSlides();
                // Complete the process preload
                if (!is.preloaded && va.nLoaded == va.preload)
                    is.preloaded = true;
                // Check next load
                if (!/^(none|single)$/.test(o.lazyType)) {
                    // LoadAmount only performed when complete preload
                    // Reset value of 'va.nLoadParallet' if 'va.nLoadParallet' == 0
                    if (is.preloaded) {
                        va.nLoadParallel--;
                        if (!va.nLoadParallel)
                            va.nLoadParallel = o.lazySmart.amountEachLoad;
                    }
                    /**
                     * SETUP LOAD NEXT SLIDE
                     *  + Condition: va.IDToLoad[] !== empty & is.preloaded == true
                     *  + If is.preloaded == false -> 'LOAD.SlideBegin()' be paused -> load new slide switch to 'LOAD.ParalletWhenSlideBegin()'
                     *  + Additional condition: 'LOAD.Add()' not work -> avoid runing multiple function same time
                     */
                    if (IDToLoad.length && is.preloaded && va.nLoadParallel >= oLazySmart.amountEachLoad && !M.Data($slide)['isLoadAdd']) {
                        for (i = va.nLoadParallel; i > 0; i--) {
                            LOAD.Next();
                        }
                    }
                }
            },
            /**
             * LOADING ADD NEW SLIDE WHEN TOGGLE TO OTHER SLIDE
             */
            Add: function ($slide) {
                var slData = M.Data($slide);
                // Check slide is complete loading
                if (slData && !slData.isLoading) {
                    // Reset 'loadAll' variable
                    is.loadAll = false;
                    // Because unknown ID of current slide in va.IDToLoad[] -> use loop
                    // Get index ID in va.IDToLoad[]
                    // Check va.IDToLoad !== null in the case add new slide by api
                    var IDToLoad = va.IDToLoad;
                    if (IDToLoad.length) {
                        for (i = IDToLoad.length - 1; i >= 0; i--) {
                            if (IDToLoad[i] === cs.idCur) {
                                // Swap ID in va.IDToLoadp[], if there is no order in next load
                                IDToLoad.splice(0, 0, IDToLoad.splice(i, 1)[0]);
                                // Break loop for
                                i = -1;
                            }
                        }
                    }
                    // Check next load slide
                    LOAD.Next($slide);
                }
            },
            /**
             * LOAD NEXT SLIDE
             */
            Next: function ($slNext) {
                /**
                 * CONDITIONAL EXECUTION
                 */
                if (!(cs.num && va.IDToLoad.length))
                    return;
                /**
                 * SETUP LOAD NEXT SLIDE
                 */
                // Get slide in 'va.IDToLoad' if without 'slNext' paramater
                if (!$slNext)
                    $slNext = va.$s.eq(va.IDToLoad[0]);
                // Load next slide
                LOAD.SlideBegin($slNext);
            },
            /**
             * SETUP CURRENT SLIDE AT FIRST
             */
            SlideBegin: function ($slide) {
                var slData = M.Data($slide);
                // Ver 1.5 - 24/09/2016 : fixed when add new slide by api, $slide = undefined
                if (!$slide.length)
                    return;
                // Load: setup begin
                M.RunEvent('loadBegin', $slide, slData.id);
                // Setup load all slide same time
                LOAD.ParallelWhenSlideBegin();
                // Remove class 'sleep' -> diplay the childrent of slide
                $slide.removeClass(va.ns + 'sleep');
                // Status loading of current slide
                slData.isLoading = true;
                /**
                 * CASE: ID SLIDE === IDBEGIN OPTION
                 */
                if (slData.id === va.idBegin) {
                    // Toggle current slide at first
                    cs.idCur == 0 && M.RunEvent('start');
                    M.ToggleSlide();
                }
                /**
                 * OTHER SETUP
                 */
                // Setup all Image & Videoback in slide
                is.VIDEOBACK && VIDEOBACK.SetupAtLoadSlideBegin($slide);
                is.IMAGE && IMAGE.SetupAtLoadSlideBegin($slide);
                // Continue setup 'SlideEnd' if without Image & Videoback
                if (!slData.isVideoback && !slData.imageLen) {
                    LOAD.SlideEnd($slide);
                }
            },
            /**
             * SETUP CURRENT SLIDE AFTER LOADED ALL IMAGE
             *  + Only for slide object (not included Canvas)
             */
            SlideEnd: function ($slide) {
                var hSlide = M.OuterHeight($slide, true), slData = M.Data($slide), id = slData.id, ns = va.ns;
                // Slide current: setting data
                slData.height = hSlide;
                slData.isLoaded = true;
                // Remove class after complete loaded
                $slide.removeClass(ns + 'no-loaded');
                /**
                 * DISPLAY RUBY & SETUP THE PROPERTIES AFTER COMPLETE LOADED FIRST SLIDE
                 */
                if (!is.initLoaded) {
                    // Toggle class 'init' & 'ready' -> Ruby ready
                    $ruby.addClass(ns + 'ready').removeClass(ns + 'init');
                    // SETUP HEIGHT OF RUBY AT FIRST SLIDE
                    // -> Must be removed class 'init' when make fn -> fixed lag
                    if (is.heightFixed)
                        SIZE.HeightFixedForRuby();
                    else
                        SIZE.HeightAutoForRuby(hSlide);
                    // Setup size of ruby depends on direction
                    SIZE.EndOfRuby();
                    // Init: load continue
                    INIT.Load();
                }
                /**
                 * SETUP POSITION OF IMAGEBACK + VIDEOBACK
                 */
                if (is.IMAGE) {
                    IMAGE.BackPosition(slData.$imgback);
                }
                // Case: Videoback
                if (is.VIDEOBACK) {
                    // Setup position of Videoback
                    VIDEOBACK.Position(slData.$videoback);
                    // Setup properties of Video Poster
                    var $videoPoster = slData.$videobackPoster;
                    VIDEOBACK.Properties($videoPoster);
                    VIDEOBACK.SizeResponsive($videoPoster);
                    VIDEOBACK.Position($videoPoster);
                    // Play Videoback of current slide
                    id == cs.idCur && VIDEOBACK.Run('play');
                }
                // Update size & position of veritcal direction
                !is.dirsHor && VERTICAL.SlideLoaded();
                // Display slide after loaded all image
                $slide.addClass(ns + 'ready');
                // Icon loader: remove
                RENDER.LoaderRemove($slide, '$slLoader');
                /**
                 * SETUP PAGINATION OF SLIDE
                 */
                is.pag && PAG.SetupWhenLoadSlideEnd($slide);
                /**
                 * SETUP HOTSPOT AT FIRST
                 */
                if (is.HOTSPOT) {
                    HOTSPOT.Init($slide);
                    // Use timer for fixed size of Hotspot item incorrect at first
                    setTimeout(function () { HOTSPOT.Reset(id); }, 10);
                }
                /**
                 * SETUP LAYER AT FIRST
                 *  + Need 'va.hRuby' first
                 */
                if (is.LAYER) {
                    LAYER.Init($slide);
                    // Play Tween animate of current slide
                    id == cs.idCur && LAYER.Play(id);
                }
                /**
                 * SETUP PARALLAX LAYER AT FIRST
                 */
                if (is.LAYERPARALLAX) {
                    LAYERPARALLAX.Init($slide);
                    // Toggle event of parallax effect layer
                    id == cs.idCur && LAYERPARALLAX.ToggleEvent(id);
                }
                /**
                 * INITIALIZE VIDEO IFRAME
                 */
                is.VIDEOIFRAME && VIDEOIFRAME.Init($slide);
                /**
                 * CHECK CURRENT SLIDE HAS PARALLAX EFFECT
                 */
                is.PARALLAX && PARALLAX.Check($slide);
                /**
                 * CONTINUE PLAY SLIDESHOW AFTER LOADED SLIDE
                 */
                is.slideshow && SLIDESHOW.Go('slideLoaded');
                /**
                 * SETUP EVENTS TRIGGER
                 */
                // Events trigger: slide loaded
                M.RunEvent('loadSlide.' + id);
                M.RunEvent('loadEnd', $slide, id);
                /**
                 * LOAD NEXT SLIDE
                 *  + Located at end
                 */
                LOAD.ParallelWhenSlideEnd($slide);
            },
            /**
             * CASE LOADED ALL SLIDES
             */
            LoadedAllSlides: function () {
                // Trigger event 'loadAll'
                M.RunEvent('loadAll');
                // Add new class to notice on Ruby
                is.loadAll = true;
                $ruby
                    .addClass(va.ns + 'loaded')
                    .removeClass(va.ns + 'no-loaded');
                // Remove loader icon
                RENDER.LoaderRemove($ruby, '$rubyLoader');
            }
        }, 
        /**
         * POSITION
         */
        POSITION = {
            /**
             * SETUP ANIMATION WITH FIXED POSITION
             */
            AnimateX: function ($obj, nx, isNoAnim, isPosFixed, speed, easing) {
                /**
                 * VALUE SETUP
                 * Object translate is '$obj' -> if not, select ''$swipeCur'
                 */
                var $swipe = ($obj === null) ? va.$swipeCur : $obj, p = $swipe.is($canvas) ? va.can : va.pag, 
                // Position to go to
                x = isPosFixed ? nx : (-nx * p.sTranslate + p.xCanvas);
                // Speed & easing of transition
                speed = speed || va.speed[cs.idCur];
                easing = easing || va.easing;
                // Setup limited position in Carousel effect
                x = POSITION.LimitInCarouselX(x);
                // Update current position of 'xCanvas'
                p.xCanvas = x;
                /**
                 * TRANSITION SETUP
                 *  + Case: support transtion css
                 *  + Case: not support transition css
                 */
                var tf = (p.dirs === 'hor') ? { 'x': x }
                    : { 'y': x }, 
                // Get Tween of '$swipe'
                tween = M.GetTween($swipe);
                // Case: have Animation
                if (!isNoAnim) {
                    tween
                        .animate($swipe, tf, {
                        isNew: true,
                        duration: speed,
                        easing: easing
                    });
                }
                else
                    tween.css($swipe, tf);
            },
            /**
             * SETUP POSITION MIN/MAX IN CAROUSEL EFFECT
             */
            LimitInCarouselX: function (x) {
                // Conditional execution
                if (va.fxLayout == 'line' && !is.loop && va.$swipeCur.is(va.$canvas)) {
                    var p = va.can;
                    if (x > p.xMin)
                        x = p.xMin;
                    else if (x < p.xMax)
                        x = p.xMax;
                }
                // Return value of limited position
                return x;
            },
            /**
             * SETUP MOVE OBJECT TO FIXED POSITION
             */
            TranslateX: function ($obj, nx, isPosFixed, xPlus, isHorCustom) {
                // Setup position
                var x;
                if (isPosFixed)
                    x = nx;
                else
                    x = nx * va.can.sTranslate;
                // Transform: add _xPlus
                if ($.isNumeric(xPlus))
                    x += xPlus;
                // Setup Tween CSS for object
                var isHor = isHorCustom === undefined ? is.dirsHor : isHorCustom, tf = isHor ? { 'x': x }
                    : { 'y': x };
                M.GetTween($obj).css($obj, tf);
            },
            /**
             * BALANCE FOR CENTER LAYOUT
             * @porpose
             *  + Move slide to edge position
             *  + -> Slides allways balance number of 2 side after Canvas move
             *
             * @howtodo
             *  + Determine how many slide need to move -> create loop to move each slide
             *  + Move each slide: determine ID, position of slide need to move
             *  + Performed translate by 'xTranslate()'
             */
            Balance: function (isContinuity, isOne, speed) {
                // Conditional execution
                if (!is.loop)
                    return;
                /**
                 * CHECK MOVE 'NEXT' OR 'PREV'
                 *  + Move 'next'/'prev' have the same way -> different parameter
                 */
                var isNext = va.nMove > 0, 
                // Variable store different between of translate 'next' or 'prev'
                a = isNext ? { 's': 1, 'id0': 0, 'idN': num - 1 }
                    : { 's': -1, 'id0': num - 1, 'idN': 0 }, 
                // Number of slide translate combine with 'isOne' parameter, default is 'va.nMove'
                nMove = isOne ? 1 : M.A(va.nMove);
                // Speed of translate -> more slide more smaller speed
                a.speed = (speed === undefined) ? va.speed[cs.idCur] : speed;
                // Insert other options into variable
                a.isNext = isNext;
                a.isContinuity = isContinuity;
                /**
                 * SETUP POSITION OF SLIDE FOR BALANCE
                 */
                for (i = 0; i < nMove; i++) {
                    /**
                     * VALUE OF EDGE SLIDE -> MOVE THE VARIABLE IN ARRAY
                     *  + id: get ID slide of first value in array
                     *  + xCur: get position of last value in array + wSlide
                     *  + tf: position of transform
                     */
                    var id = va.idMap[a.id0], $slCur = va.$s.eq(id), xCur = va.pBegin[a.idN] + (va.can.sTranslate * a.s), tf = {};
                    /**
                     * VALUE OF TRANSFORM FOR SLIDE IN EACH CASE
                     */
                    // Case: normal
                    if (va.fxView == 'basic' || va.fxView == 'mask') {
                        var tl = is.dirsHor ? 'Tlx' : 'Tly'; // Translate by css3
                        tf[cssTf] = M[tl](xCur);
                        $slCur.css(tf);
                    }
                    else if (va.fxView == 'coverflow3D') {
                        var cover = o.coverflow3D, z = cover.isDeepMulti ? cover.zDeep * ((isNext ? va.center.nRight : va.center.nLeft) + 1)
                            : cover.zDeep;
                        va.tweenSlide.css($slCur, {
                            'x': xCur,
                            'z': -z,
                            'rotateY': -cover.rotate * a.s
                        });
                    }
                    /**
                     * UPDATE VALUE IN VARIABLE
                     */
                    M.Shift(va.idMap, isNext);
                    M.Push(va.idMap, id, isNext);
                    M.Shift(va.pBegin, isNext);
                    M.Push(va.pBegin, xCur, isNext);
                    /**
                     * UPDATE TRANSFORM ON SLIDES IN OTHER VIEW
                     */
                    var balanceName = 'Balance' + va.View;
                    !!VIEW[balanceName] && VIEW[balanceName](a);
                }
            },
            /**
             * COPY SLIDES INTO WHEN TOGGLE SLIDE BY PAGINATION
             * @purpose
             *  + Toggle slide by pagination -> slide at edge position will automatically translate to all slide balnace
             *  + Appeare white area by edge slide translate -> copy edge slide but remain in place -> after translate done then remove all copy slide
             */
            FillHole: function () {
                // Conditional execution
                if (!is.loop)
                    return;
                // Check slideClone - remove
                va.$slClone.length && va.$slClone.remove();
                va.$slClone = $('');
                // Check clone slide
                // When toggle slide, slide hidden behind Viewport, not necessary to clone slide
                var center = va.center, nMove = (va.nMove > 0) ? center.nLeft : center.nRight, nMin = nMove - center.nEdge, nMoveAbs = M.A(va.nMove);
                if (nMoveAbs > nMin) {
                    /**
                     * CREATE CLONE SLIDE + REMOVE ELEMENTS NOT NECESSARY
                     */
                    for (i = nMin; i < nMoveAbs; i++) {
                        // Copy slide then append into Canvas
                        // Remove class 'cur' if on clone slide
                        var id = (va.nMove > 0) ? va.idMap[i]
                            : va.idMap[num - 1 - i], $slCur = va.$s.eq(id), $slClone = $slCur
                            .clone()
                            .addClass(va.deactived)
                            .removeClass(va.ns + o.current)
                            .appendTo($canvas);
                        // Store into data of slide
                        M.Data($slClone, { '$slSource': $slCur });
                        // Add new clone slide into variable -> remove all clone slide after translate done
                        va.$slClone = va.$slClone.add($slClone);
                    }
                    /**
                     * SETUP FOR SPECIAL VIEW
                     */
                    var fnName = 'FillHole' + va.View;
                    !!VIEW[fnName] && VIEW[fnName]();
                    /**
                     * REMOVE ALL CLONE SLIDE AFTER ANIMATION END
                     */
                    clearTimeout(ti.fillHole);
                    ti.fillHole = setTimeout(function () {
                        va.$slClone.remove();
                    }, va.speed[cs.idCur] + 10);
                }
            },
            /**
             * SETUP TRANSLATE REBOUND WHEN TAP ON NAVIGATION NOT ALLOW TO MOVE
             */
            AnimRebound: function (dirs) {
                if (!o.isAnimRebound)
                    return;
                // Initialize variable
                var p = va.can, layout = va.fxLayout, isNext = dirs == 'next', sign = isNext ? -1 : 1, tSpeed = 150, // Speed of animation
                plus = 30, // x plus value, unit px
                xBack = isNext ? p.xMax : p.xMin, // Initial position of Canvas
                xLimit = 130 * sign + xBack; // Limited position for Canvas back -> +/- 130px
                /**
                 * GET VALUE OF CURRENT POSITION -> SUPPORT GET POSITION OF CANVAS HAS MOVED
                 */
                var xCur = $canvas.css(cssTf);
                if (is.tf)
                    xCur = (xCur == 'none') ? xBack : M.ValueX(xCur);
                else
                    xCur = (xCur == 'auto') ? xBack : M.PInt(xCur);
                /**
                 * SETUP ANIMATION FOR CANVAS
                 */
                var xGo = plus * sign + xCur;
                // Function animate Go & Back
                function Go() { POSITION.AnimateX(null, xGo, 0, 1, tSpeed); }
                function Back() { POSITION.AnimateX(null, xBack, 0, 1); }
                // xGo : limited value
                // + When Canvas translate beyond allow
                // + Canvas translate to initial position
                if (xGo / sign > xLimit / sign) {
                    Back();
                }
                else {
                    Go();
                    clearTimeout(ti.rebound);
                    ti.rebound = setTimeout(Back, tSpeed);
                }
            },
            /**
             * SETUP KEEP MOVING WHEN STOP SWIPE
             */
            Flywheel: function () {
                var isCanvas = $canvas.is(va.$swipeCur), p = isCanvas ? va.can : va.pag;
                // Setup for $paginaton
                if (!isCanvas) {
                    /**
                     * CONDITIONAL EXECUTION FOR FLYWHEEL MOVING
                     *  + Inside scope of Viewport
                     *  + Duration of swipe < 200ms
                     *  + Moved temporarily must larger 1 'sTranslatel' -> case main slide
                    */
                    var tDrag = va.tDrag1 - va.tDrag0, isContinue = (va.xBuffer < 0 && va.xBuffer > p.xMax) && (tDrag < 200) && (M.A(va.xOffset) > 10);
                    if (!isContinue)
                        return;
                    /**
                     * SETUP CONTINUE
                     */
                    var xOff = va.pageX1 - va.x0Fix, // Distance swiped -> get correct value instead 'xOffset'
                    xTarget = va.xBuffer + xOff, 
                    /**
                     * WIDTH LIMITED
                     *  + Support check flywheel continue -> distance between x[0], x[1] > wLimit
                     *  + Support move pagination to edge if lack of distance
                     */
                    wLimit = 50;
                    // Case: position to move to edge about a distance wLimit
                    if (xTarget + wLimit > 0)
                        xTarget = 0;
                    else if (xTarget - wLimit < p.xMax)
                        xTarget = p.xMax;
                    // Setup translate for pagination
                    PAG.TranslateTo(xTarget);
                }
            },
            /**
             * MOVE CANVAS TO INITIAL POSITION
             *  + Remove transition after update
             */
            CanvasBegin: function () {
                /**
                 * INIT POSITION OF CANVAS
                 * @param int xCanvas
                 *  + After resize -> Canvas & slide must reset position
                 *  + Ruby center -> xCanvas: calculate back position of Canvas
                 */
                var layout = va.fxLayout, p = va.can, xBegin = 0;
                // Init position of line layout
                if (layout == 'line' && is.center) {
                    var sSlideCur = is.dirsHor ? va.wSlide
                        : M.OuterHeight(va.$s.eq(cs.idCur), true);
                    xBegin = M.R((va.sRuby - sSlideCur) / 2);
                }
                // Update init position of Canvas
                p.xCanvas = xBegin;
                /**
                 * LIMITED POSITION OF CANVAS -> BUFFER SWIPE REDUCED RATE
                 * @param int xMin
                 * @param int xMax
                 */
                if (layout == 'dot')
                    p.xMin = p.xMax = 0;
                else if (layout == 'line') {
                    // Minimum position of Canvas
                    p.xMin = xBegin;
                    // Size of sum all slide
                    // Same time remove 'margin' left of first item & 'margin' right of last item
                    var sSlideSum = M.Sum(va.sSlideMap) - (va.ma[0] + va.ma[1]);
                    // Maximum position of Canvas
                    p.xMax = (va.wRuby < sSlideSum) ? -(sSlideSum - va.wRuby + xBegin)
                        : xBegin;
                }
                /**
                 * MOVE CANVAS TO POSITION OF CURRENT SLIDE
                 */
                va.$swipeCur = $canvas;
                if (is.loop)
                    POSITION.AnimateX(null, xBegin, true, true);
                else
                    POSITION.AnimateX(null, cs.idCur, true);
            }
        }, 
        /**
         * SIZES
         */
        SIZE = {
            /**
             * GET VALUE MARGIN
             * @param array va.ma Value 1 is margin-left, value 2 is margin-right
             */
            Margin: function () {
                var wRuby = va.wRuby;
                // Get the current margin in ResponsiveLevels
                va.maGridCur = M.IsArray(va.maGrid) ? va.maGrid[va.index] : null;
                // Case: the margin-grid available -> get margin from the option
                if (va.maGridCur !== null) {
                    va.ma = [M.PercentToPixel(va.maGrid[va.index], wRuby), M.PercentToPixel(va.maGrid[va.index], wRuby)];
                }
                else {
                    if (is.dirsHor && wRuby !== M.InnerWidth($viewport)) {
                        va.ma[0] = M.PInt($viewport.css('padding-left'));
                        va.ma[1] = M.PInt($viewport.css('padding-right'));
                    }
                    if (!is.dirsHor && va.hRuby !== M.InnerHeight($viewport)) {
                        va.ma[0] = M.PInt($viewport.css('padding-top'));
                        va.ma[1] = M.PInt($viewport.css('padding-bottom'));
                    }
                }
            },
            /**
             * SIZE INCLUDED MARGIN OF SLIDE
             * @param int va.wSlideFull
             * @param int va.can.sTranslate
             */
            TranslateS: function () {
                // Get value of margin
                SIZE.Margin();
                // Assign value
                // Default: wTranslate = wSLideFull -> other 'view' will update value later
                va.wSlideFull = va.can.sTranslate = va.wSlide + va.ma[0] + va.ma[1];
            },
            /**
             * SETUP WIDTH OF RUBY
             * @param init va.wRuby
             */
            WidthForRuby: function () {
                /**
                 * VERTICAL TABS
                 *  + Setup margin for Viewport -> get 'va.wRuby' value correct
                 */
                if (is.pag && !!va.pagVer) {
                    // If have not margin, calculate size of pag item at first
                    !va.pag.maRight && PAG.GetSizeOfItems();
                    PAG.MarginOnViewport();
                }
                // Update position and size for Ruby at first
                POSSIZE.Anchor();
                // Width of Ruby
                va.wRuby = M.Width($viewport);
                /**
                 * GET THE CURRENT VALUE IN SIZE GRID
                 */
                var index = va.index = M.GetIndexInResponsive(o.responsiveLevels);
                va.wGridCur = M.IsArray(va.wGrid) ? va.wGrid[index] : null;
                va.hGridCur = M.IsArray(va.hGrid) ? va.hGrid[index] : null;
                va.paGridCur = M.IsArray(va.paGrid) ? va.paGrid[index] : null;
                /**
                 * SETUP WIDTH OF SLIDE
                 * @param int va.wSlide
                 */
                // Setup horizontal direction
                var wSlide = null;
                if (is.dirsHor) {
                    // Get the current width-slide from Grid size
                    wSlide = M.PercentToPixel(va.wSlideGrid[va.index], va.wRuby);
                }
                else {
                    wSlide = va.wRuby;
                }
                // Rounded value 'wSlide'
                va.wSlide = M.PInt(wSlide);
            },
            /**
             * SETUP HEIGHT OF VIEWPORT FOR ANIMATE-HEIGHT IN HEIGHT-AUTO
             */
            HeightLockForAnim: function () {
                // First, setup current fixed height for Viewport
                $viewport.css('height', M.Height($viewport));
                // Create timer to remove fixed height for Viewport
                clearTimeout(ti.heightLock);
                ti.heightLock = setTimeout(function () {
                    $viewport.css('height', '');
                }, o.speedHeight + 10);
            },
            /**
             * SETUP ANIMATE-HEIGHT EFFECT FOR RUBY
             * @param int va.hRuby
             */
            AnimHeightForRuby: function (isUpdateResize) {
                /**
                 * GET HEIGHT OF CURRENT HEIGHT AT FIRST
                 */
                var timePlus = 30, 
                // Ver 1.4 - 18/09/2016 : get size by 'offsetHeight' not included transformed css
                hSlideCur = M.OuterHeight(va.$s.eq(cs.idCur), true);
                /**
                 * FUNTION: SUPPORT SMOOTH-HEIGHT FOR $CANVAS
                 */
                function SmoothHeight(height) {
                    // Store height value of ruby in variable
                    // Size of Viewport varies depending on the swipe direction
                    va.hRuby = height;
                    if (!is.dirsHor)
                        va.sRuby = height;
                    /**
                     * ANIMATION-HEIGHT EFFECT
                     *  + Remove effect if (speedHeight == null) || resize event
                     */
                    if (o.speedHeight === null || isUpdateResize) {
                        M.Scroll.Check();
                    }
                    else {
                        var speedHeight = o.speedHeight - timePlus;
                        // Setup animation effect
                        va.tweenView
                            .animate($viewport, { 'height': height }, {
                            isNew: true,
                            duration: speedHeight,
                            complete: function () {
                                // Mark sure remove fixed height on Viewport
                                $viewport.css('height', '');
                                // Update value of variable ralative scroll browser
                                M.Scroll.Check();
                            }
                        });
                    }
                }
                /**
                 * CHECK HEIGHT CHANGES ON VIEWPORT
                 */
                function CheckHeightChange() {
                    // Smooth resize height Ruby when move to near slide
                    // + Add options 'isUpdateResize' to allways run 'SmoothHeight()'
                    // + Avoid case: resize event, (va.hRuby == hSlideCur) -> not execute 'SmoothHeight()'
                    if (!is.heightFixed && ((va.hRuby != hSlideCur && hSlideCur > 0) || isUpdateResize)) {
                        SmoothHeight(hSlideCur);
                        /**
                         * UPDATE VALUE OF PAGINATION VERTICAL WHEN CHANGES HEIGHT
                         *  + Smooth height for pagination vertical
                         */
                        if (is.pag && !is.pagList && va.pag.dirs == 'ver' && !is.pagOutside && o.pag.sizeAuto == 'full') {
                            PAG.PropAndStyle();
                        }
                    }
                }
                /**
                 * FUNCTION EXECUTION
                 *  + Create timer for 'AnimHeightForRuby' -> Change height at last
                 *  + Must be >= 30ms -> for Dot layout toggle class 'hNative' required delay for old browser ???
                 */
                setTimeout(CheckHeightChange, timePlus);
            },
            /**
             * SETUP HEIGHT OF HEIGHT-AUTO WHEN LOADED FIRST SLIDE
             * @param int va.hRuby
             */
            HeightAutoForRuby: function (hSlide) {
                // Store & setup height allways be an integer
                va.hRuby = M.PInt(hSlide);
            },
            /**
             * SETUP HEIGHT OF HEIGHT-FIXED FOR RUBY
             * @param int va.hRuby
             */
            HeightFixedForRuby: function () {
                // Function: setup height for Viewport
                function HeightForViewport(h) {
                    $viewport.css('height', h);
                }
                /**
                 * SETUP IN FULLSCREEN MODE
                 */
                if (is.fullscreen) {
                    // Get height auto for Viewport
                    var hWin = $w.height(), offsetTop = va.$anchor.offset().top;
                    // Case: offsetTop < height-window
                    if (offsetTop < hWin) {
                        hWin -= offsetTop;
                    }
                    /**
                     * SETUP HEIGHT WHEN IT HAVE 'OFFSET'
                     */
                    if (o.offsetBy !== null) {
                        var $offset = $(o.offsetBy);
                        // Height Ruby will substract by height offsetBy container
                        $offset.each(function () {
                            hWin -= M.OuterHeight($(this), true);
                        });
                        // Reupdate position + size ruby when $offset contain images
                        if ($offset.find('img').length) {
                            $w.on('load', function () { cs.refresh(); });
                        }
                    }
                    va.hRuby = hWin;
                    HeightForViewport(va.hRuby);
                }
                else {
                    va.hRuby = null;
                    if (M.IsArray(va.hGrid)) {
                        // Case: Height-grid current is available
                        if ($.isNumeric(va.hGridCur)) {
                            va.hRuby = va.hGridCur;
                        }
                        else {
                            if (M.IsArray(va.wGrid)) {
                                va.hRuby = M.R(va.hGrid[0] * va.rate);
                            }
                        }
                    }
                    // Set height for Viewport
                    va.hRuby && HeightForViewport(va.hRuby);
                }
            },
            /**
             * SETUP SIZE RUBY AFTER HAVE WIDTH - HEIGHT VALUE
             */
            EndOfRuby: function () {
                /**
                 * GET WIDTH OF VIEWPORT IN THE CASE
                 */
                // Case default
                var wCur = M.Width($viewport);
                // Case : in layout fullwidth - fullscreen
                if (is.fullwidth || is.fullscreen)
                    wCur = $w.width();
                /**
                 * IF WIDTH RUBY CHANGE -> UPDATE WIDTH - HEIGHT VALUE
                 */
                if (va.wSlide !== wCur) {
                    // Get width of ruby at first
                    SIZE.WidthForRuby();
                    // Responsive: calculation padding & va.rate
                    is.res && RESPONSIVE.UpdateVars();
                    // Get height of ruby at first -> Support for image features autoFit/autoFill
                    is.heightFixed ? SIZE.HeightFixedForRuby()
                        : SIZE.HeightAutoForRuby(M.OuterHeight(va.$s.eq(cs.idCur), true));
                }
                /**
                 * SETUP VARIABLE OF DIRECTION
                 */
                // Varible to display size (width/height) of ruby
                va.sRuby = is.dirsHor ? va.wRuby : va.hRuby;
            }
        }, 
        /**
         * SETUP POSITION & SIZE
         */
        POSSIZE = {
            /**
             * SYNTHETIC INITIAL POSITION - SIZE OF ELEMENTS
             */
            CombineAtFirst: function () {
                /**
                 * CSS WIDTH FOR CANVAS
                 */
                if (/^(line|dot)$/.test(va.fxLayout)) {
                    // Width of Canvas by swipe direction
                    va.sCanvas = is.dirsHor ? va.wSlide : va.wRuby;
                    $canvas.css('width', va.sCanvas);
                }
                // TranslateW: get
                SIZE.TranslateS();
                /**
                 * SETUP VARIABLES IN LINE LAYOUT
                 */
                if (va.fxLayout == 'line') {
                    /**
                     * IDENTIFY NUMBER OF EDGE SLIDE CAN SEE COMPARE WITH CENTER SLIDE
                     * @param int va.center.nEdge
                     */
                    if (is.centerLoop) {
                        var wAll = 0, i = 0;
                        while (wAll < va.wRuby) {
                            wAll = (va.wSlide + va.ma[0] + va.ma[1]) * (i * 2 + 1); // Number 1: for center slide. Number 2: for edge slide
                            i++;
                        }
                        var nEdge = i - 1;
                        if (nEdge * 2 >= num)
                            nEdge = ~~((num - 1) / 2);
                        // Store result into 'va.center'
                        va.center.nEdge = nEdge;
                    }
                    /**
                     * OTHER SETUP
                     */
                    // Setup position for each slide
                    var fnName = 'TFSlide' + va.View;
                    !!VIEW[fnName] && VIEW[fnName]();
                }
                /**
                 * UPDATE POSITION OF CANVAS AT FIRST
                 */
                POSITION.CanvasBegin();
                /**
                 * PAGINATION: UPDATE VALUE OF VARIABLE
                 */
                if (is.pag && !is.pagList) {
                    PAG.CSSPosForPag();
                    PAG.PropAndStyle();
                    PAG.PosAndSizeOfItems();
                    PAG.UpdateThumbnail();
                    o.pag.isMark && PAG.SizePosOfMark();
                    // Setup center position for center PagItem - without animation
                    PAG.PosCenterForItemCur(true, true);
                    /**
                     * CHECK CONVERT VERTICAL TABS TO HORIZONTAL TABS
                     *  + Create timer > 30ms: must be get height of ruby -> run first 'SIZE.AnimHeightForRuby()'
                     *  + 'PAG.VerToHor' into function() -> fixed IE7
                     */
                    setTimeout(function () { PAG.VerToHor(); }, 40);
                }
            },
            /**
             * SETUP POSITION & SIZE EACH SLIDE IN 'BASIC' VIEW
             */
            SlideBasic: function () {
                var pBegin = va.pBegin = [], sSlideMap = va.sSlideMap = [], nBegin = is.centerLoop ? va.center.nLeft : 0;
                /**
                 * FUNCTION: GET HEIGHT INCLUDED MARGIN OF CURRENT SLIDE
                 */
                function HeightSlideCur(id) {
                    return M.OuterHeight(va.$s.eq(id), true) + va.ma[0] + va.ma[1];
                }
                /**
                 * STORE POSITION EACH SLIDE
                 * @param array va.pBegin
                 */
                // Default size of slide for horizontal direction
                if (is.dirsHor) {
                    for (i = 0; i < num; i++) {
                        sSlideMap[i] = va.wSlideFull;
                        pBegin[i] = sSlideMap[i] * (-nBegin + i);
                    }
                }
                else {
                    // Case: Center loop
                    if (is.centerLoop) {
                        var hTopPlus = 0, hBottomPlus = 0;
                        // Position Above
                        for (i = nBegin; i < num; i++) {
                            sSlideMap[i] = HeightSlideCur(va.idMap[i]);
                            pBegin[i] = hTopPlus;
                            hTopPlus += sSlideMap[i]; // Position starting = 0 -> must below location
                        }
                        // Position Below
                        for (i = nBegin - 1; i >= 0; i--) {
                            sSlideMap[i] = HeightSlideCur(va.idMap[i]);
                            hBottomPlus -= sSlideMap[i];
                            pBegin[i] = hBottomPlus;
                        }
                    }
                    else {
                        for (i = 0; i < num; i++) {
                            3[i] = HeightSlideCur(i);
                            pBegin[i] = sSlideMap[i] * i;
                        }
                    }
                }
            },
            // POSITION & SIZE FOR ANCHOR IN LAYOUT FULLWIDTH - FULLSCREEN
            Anchor: function () {
                // Conditional execution
                if (!(is.fullwidth || is.fullscreen))
                    return;
                // Get position and size for Ruby
                var sizeBody = $w.width(), sizeAnchor = va.$anchor.width(), offsetAnchor = va.$anchor.offset().left;
                // Case: remove position & size of ruby if sizeAnchor == sizeBody
                if (sizeAnchor === sizeBody) {
                    $ruby.css({ 'width': '', 'left': '' });
                }
                else {
                    $ruby.css({
                        'width': ~~sizeBody,
                        'left': -Math.ceil(offsetAnchor)
                    });
                }
            }
        }, 
        /**
         * VIEW
         */
        VIEW = {
            /**
             * SETUP PROPERTIES WHEN RESIZE IN SIZE()
             */
            TFSlideBasic: function () {
                /**
                 * SETUP POSITION & SIZE OF EACH SLIDE
                 */
                POSSIZE.SlideBasic();
                /**
                 * TRANSFORM POSITION OF EACH SLIDE BASE ON POSITION STORAGE ABOVE
                 */
                var p = va.can, isHor = p.dirs == 'hor', translate = isHor ? 'Tlx' : 'Tly';
                va.tfMap = [];
                for (i = 0; i < num; i++) {
                    var id = is.centerLoop ? va.idMap[i] : i, tf = {};
                    tf[p.cssTf] = M[translate](va.pBegin[i]);
                    va.tfMap.push(tf); // add vao namespace transform
                    va.$s.eq(id).css(tf); // Put slide into predefined position
                }
            }
        }, 
        /**
         * UPDATE POSITION & SIZE IN DIRECTION VERTICAL
         */
        VERTICAL = {
            /**
             * UPDATE POSITION & SIZE WHEN SLIDE LOAED
             */
            SlideLoaded: function () {
                // Size of each slide
                VIEW.TFSlideBasic();
                // Update position of Canvas when update position each slide
                if (va.fxLayout == 'line')
                    POSITION.CanvasBegin();
            }
        }, 
        /**
         * SWAP TO OTHER SLIDE
         */
        TOSLIDE = {
            /**
             * SETUP WHEN START MOVE TO NEXT SLIDE
             */
            Run: function (nSlide, isIDFixed, isContinuity, isPagCenter) {
                var idCur = cs.idCur;
                // Conditional execution
                if (!((!isIDFixed && nSlide <= cs.num) || (isIDFixed && idCur !== nSlide)))
                    return;
                /**
                 * TOSLIDE VARIABLE: STORE INITIAL PROPERTIES
                 */
                va.ts = {
                    'num': nSlide,
                    // ID of fixed slide
                    'isIDFixed': !!isIDFixed,
                    // Swipe continuously
                    'isContinuity': !!isContinuity,
                    // Default: is center
                    'isPagCenter': (isPagCenter === undefined) ? true : !!isPagCenter
                };
                /**
                 * SETUP INITIALIZE VARIABLES
                 *  + fxRun : support slideshow + setup vertical tabs when body resize
                 *  + slideNext : move to next or prev
                 */
                is.fxRun = true;
                $ruby.addClass(va.ns + 'fxRun');
                is.slideNext = isIDFixed ? (nSlide - cs.idCur > 0) : (nSlide > 0);
                M.RunEvent('fxBegin');
                /**
                 * SETUP OTHER ELEMENTS WHEN SLIDE LOADED
                 */
                if (M.Data(va.$s.eq(idCur))['isLoaded']) {
                    is.HOTSPOT && HOTSPOT.Reset(idCur); // Reset initial status of Hotspot
                    // is.LAYER && LAYER.Reset(idCur);             // Reset Tween current animate
                    is.LAYER && LAYER.PlayEnd(idCur); // Reset old tween & Play tween of animate-end
                    is.VIDEOIFRAME && VIDEOIFRAME.SlideDeactived(idCur); // Closed all Video
                    is.LAYERPARALLAX && LAYERPARALLAX.Reset(idCur); // Reset position of Parallax item
                    is.VIDEOBACK && VIDEOBACK.Run('pause'); // Pause Videoback of current slide
                }
                // Slideshow: stop timer when run effect
                is.slideshow && SLIDESHOW.Go('slideToBegin');
                /**
                 * MAIN SETUP
                 */
                // Callback func: start && before
                isIDFixed ? (nSlide == 0) && M.RunEvent('start')
                    : (idCur + nSlide == 0 || idCur + nSlide - num == 0) && M.RunEvent('start');
                M.RunEvent('before');
                // ID: convert to ts.num
                if (isIDFixed)
                    va.ts.num -= idCur;
                // Easing transition of Canvas
                var es;
                if (va.moveBy == 'swipe' && va.moveLastBy != 'swipe')
                    es = o.swipe.easing;
                else if (va.moveBy == 'tap' && va.moveLastBy != 'tap')
                    es = o.fxEasing;
                if (es) {
                    va.easing = es;
                    va.moveLastBy = va.moveBy;
                }
                // Continue setup depends layout
                TOSLIDE[va.fxLayout]();
            },
            /**
             * SETUP CONTINUE IN 'LINE' LAYOUT
             */
            line: function () {
                var ts = va.ts;
                // Toggle ID current
                TOSLIDE.ToggleID();
                !is.heightFixed && SIZE.AnimHeightForRuby();
                // Setup when slide run end effect
                clearTimeout(ti.lineEnd);
                ti.lineEnd = setTimeout(TOSLIDE.End, va.speed[cs.idCur]);
                /**
                 * ANIMATE $CANVAS IN HORIZONTAL DIRECTION
                 */
                if (is.dirsHor) {
                    /**
                     * CASE: CENTER LOOP
                     */
                    if (is.centerLoop) {
                        // Translate by 'Tap' pagination
                        ts.isIDFixed && POSITION.FillHole();
                        // Setup transform of each slide to allways center layout
                        POSITION.Balance(ts.isContinuity);
                        !ts.isContinuity && POSITION.AnimateX($canvas, ts.num);
                    }
                    else {
                        // Animate to next object
                        !ts.isContinuity && POSITION.AnimateX($canvas, ts.num);
                        // Update transform on each slide
                        if (va.fxType == '3d') {
                            var restoreName = 'Restore' + va.View;
                            !!VIEW[restoreName] && VIEW[restoreName]();
                        }
                    }
                }
                else {
                    /**
                     * CASE: CENTER LOOP
                     */
                    if (is.centerLoop) {
                        if (M.A(ts.num) == 1) {
                            var id = ts.num > 0 ? cs.idLast : cs.idCur, hSlideCur = M.OuterHeight(va.$s.eq(id), true) + va.ma[0] + va.ma[1], xTranslate = -(hSlideCur * ts.num - va.can.xCanvas);
                            // NOT FINISH -> PAUSE AT HERE !!!
                            POSITION.Balance(ts.isContinuity);
                            !ts.isContinuity && POSITION.AnimateX($canvas, xTranslate, false, true);
                        }
                    }
                }
            },
            /**
             * SETUP CONTINUE IN 'DOT' LAYOUT
             */
            dot: function () {
                var ts = va.ts;
                // Toggle ID current
                // Add timer when toggle slide -> fixed flicker at first when performed 'Math' effect
                if (va.fxType == 'math')
                    ts.isDelayWhenToggleID = true;
                TOSLIDE.ToggleID();
                // Setup animate height for Viewport in Height-Auto
                !is.heightFixed && SIZE.AnimHeightForRuby();
                // Insert 'mask' class to fixed scroll-x bar appear in FxCSS
                o.isBodyMaskInFxCSS && (va.fxView === 'css') && va.$body.addClass(va.ns + 'mask-x');
                // Initial setup effect
                FX.Init();
            },
            /**
             * TOGGLE CURRENT ID WITH LAST ID
             */
            ToggleID: function () {
                /**
                 * SETUP VALUE HEIGHT FOR VIEWPORT IN HEIGHT-AUTO TO CREATE ANIMATE-HEIGHT EFFECT
                 *  + Remove effect if 'speedHeight' == null
                 */
                !is.heightFixed && (o.speedHeight !== null) && SIZE.HeightLockForAnim();
                /**
                 * Change value of current & last ID
                 */
                var ts = va.ts, idCur = cs.idCur, 
                // Store number of move slide
                nMove = va.nMove = ts.num;
                // Store idLast & update idCur
                cs.idLast = idCur;
                // Return value idCur when out range [0, num]
                idCur += nMove;
                if (is.loop) {
                    if (nMove < 0 && idCur < 0)
                        idCur = num + idCur;
                    else if (nMove > 0 && idCur >= num)
                        idCur -= num;
                }
                // Past new value to current ID
                // Combine with 'swapID' event
                M.RunEvent('beforeSwapIDCur');
                cs.idCur = idCur;
                M.RunEvent('afterSwapIDCur');
                // Add timer for effect in 'Dot' layout : browser Chrome error -> slide shake
                // In week CPU, remove timer if click continuously
                if (!!ts.isDelayWhenToggleID)
                    setTimeout(M.ToggleSlide, 10);
                else
                    M.ToggleSlide();
                /**
                 * SETUP AFTER TOGGLE ID
                 */
                TOSLIDE.AfterToggleID();
            },
            /**
             * SETUP AFTER TOGGLE ID
             *  + Similar with 'TOSLIDE.End()', but faster
             */
            AfterToggleID: function () {
                /**
                 * SETUP CURRENT PAGITEM MOVE TO CENTER POSITION
                 * @conditions
                 *  + Only move to center when swipe on body run
                 *  + Tap on PagItem
                 *  + Vertical tabs allways execute that fucntion
                 */
                if (is.pag && !is.pagList && va.ts.isPagCenter
                    && (va.moveBy == 'swipe' || (va.moveBy == 'tap' && o.pag.isItemCurCenterWhenTap) || va.pag.dirs == 'ver')) {
                    // Because 'posCenter' for vertical tabs allways update properties 'PAG.PropAndStyle()' -> isForce = true : not animate to wrong position
                    var isForceTf = (va.pag.dirs == 'ver') ? true : false;
                    PAG.PosCenterForItemCur(isForceTf);
                }
                /**
                 * RESET & UPDATE TWEEN-ANIMATE FOR LAYER IN THE CURRENT SLIDE
                 */
                is.LAYER && LAYER.Update(cs.idCur);
                /**
                 * OTHER SETUP
                 */
                // Play Videoback in current slide
                is.VIDEOBACK && VIDEOBACK.Run('play');
            },
            /**
             * SETUP WHEN END EFFECT
             */
            End: function () {
                var idCur = cs.idCur;
                // Remove 'mask-x' class to remove scroll-x bar appear in FxCSS
                o.isBodyMaskInFxCSS && (va.fxView === 'css') && va.$body.removeClass(va.ns + 'mask-x');
                // Notice of end effect
                is.fxRun = false;
                $ruby.removeClass(va.ns + 'fxRun');
                M.RunEvent('fxEnd');
                // Update & start play Layer of current slide
                if (is.LAYER) {
                    LAYER.Play(idCur);
                    LAYER.Resume('home');
                }
                // Update position of Hotspot item after setup Layer
                is.HOTSPOT && HOTSPOT.UpdatePosition(idCur);
                // Toggle Parallax effect in layer
                is.LAYERPARALLAX && LAYERPARALLAX.ToggleEvent(idCur);
                // Other setup
                M.RunEvent('after'); // Trigger event 'after'
                idCur == num - 1 && M.RunEvent('end'); // Trigger event 'end'
                /**
                 * RESET SLIDE DISPLAY WHEN 'TAP' NAV - PAG & 'DRAG'
                 */
                if (is.slideshow) {
                    is.hoverAction = true;
                    // Check pause slideshow when have 'isLoop' == false & idCur at end
                    if (!o.slideshow.isLoop && cs.idLast == num - 1 && idCur == 0) {
                        cs.pause();
                    }
                    else {
                        SLIDESHOW.Go('slideToEnd');
                    }
                }
            }
        }, 
        /**
         * EVENTS
         */
        EVENTS = {
            /**
             * ARRANGE & SETUP THE EVENTS IN RUBY
             */
            Setup: function () {
                // Event Navigation & Pagination
                is.NAV && NAV.EventTap();
                is.PAG && PAG.EventTap();
                // Event Slideshow
                if (is.SLIDESHOW) {
                    SLIDESHOW.EventHover();
                    SLIDESHOW.EventTap();
                }
                // Event Keyboard
                EVENTS.Keyboard();
                // Event Wheel & Mousewheel for Viewport, PagInner
                EVENTS.Wheel({
                    '$wheel': $viewport,
                    'direction': va.can.dirs,
                    'optsWheel': o.wheel
                });
                is.PAG && EVENTS.Wheel({
                    '$wheel': va.$pag,
                    'direction': va.pag.dirs,
                    'optsWheel': o.pag.wheel
                });
                // Event Deeplinking
                is.DEEPLINKING && DEEPLINKING.Events();
                // Event for the elements in layout fullscreen
                is.FULLSCREEN && FULLSCREEN.Events();
                // Event resize Window
                EVENTS.Resize();
            },
            /**
             * GET CORRECT EVENT BETWEEN MOUSE - TOUCH - SWIPE
             */
            GetEventRight: function (e) {
                var i = e;
                if (/^touch/.test(e.type))
                    i = e.originalEvent.touches[0];
                else if (/pointer/i.test(e.type))
                    i = e.originalEvent;
                return i;
            },
            /**
             * CHECK MOBILE TAP - PREVENT SCROLL UP, SCROLL DOWN STILL CHANGE SLIDE
             */
            CheckMobileTap: function ($items) {
                $items.each(function () {
                    var $item = $(this);
                    // Register event swipe start
                    $item.on(va.ev.swipe.start, function (e) {
                        var itemData = M.Data($(this)), i = EVENTS.GetEventRight(e);
                        itemData.isMobileTap = true;
                    });
                    // Register event swipe move
                    $item.on(va.ev.swipe.move, function (e) {
                        var itemData = M.Data($(this)), i = EVENTS.GetEventRight(e);
                        itemData.isMobileTap = false;
                    });
                });
            },
            /**
             * ADD TIMER TO REMOVE 2 EVENT 'CLICK' & 'SWIPEEND' IN SAME TIME
             */
            DelayToTapNext: function () {
                is.tapEnable = false;
                setTimeout(function () { is.tapEnable = true; }, 10);
            },
            /**
             * NAVIGATION EVENTS
             */
            PrevCore: function (step) {
                va.moveBy = 'tap';
                /**
                 * SETUP 'STEP' VARIABLE
                 */
                step = step || 1;
                /**
                 * CHECK ALLOW MOVE TO PREV SLIDE
                 */
                if ((is.loop && cs.num > 1) || (!is.loop && cs.idCur > 0)) {
                    TOSLIDE.Run(-step);
                }
                else {
                    POSITION.AnimRebound('prev');
                }
            },
            NextCore: function (step) {
                va.moveBy = 'tap';
                /**
                 * SETUP 'STEP' VARIABLE
                 */
                step = step || 1;
                /**
                 * CHECK ALLOW MOVE TO NEXT SLIDE
                 */
                if ((is.loop && cs.num > 1) || (!is.loop && cs.idCur < num - 1)) {
                    TOSLIDE.Run(step);
                }
                else {
                    POSITION.AnimRebound('next');
                }
            },
            Prev: function () {
                if (is.tapEnable) {
                    var step = o.stepNav;
                    EVENTS.PrevCore(step);
                    EVENTS.DelayToTapNext();
                }
            },
            Next: function (isSlideshow) {
                if (is.tapEnable) {
                    // How many 'step' each case
                    var step = isSlideshow ? o.stepPlay : o.stepNav;
                    EVENTS.NextCore(step);
                    EVENTS.DelayToTapNext();
                }
            },
            /**
             * EVENT TOGGLE SLIDE BY SHORTCUT KEYBOARD
             */
            Keyboard: function () {
                $doc.off(va.ev.key);
                if (o.isKeyboard) {
                    $doc.on(va.ev.key, function (e) {
                        // Check ruby display on the current screen browser
                        M.Scroll.Check(true);
                        if (is.into) {
                            var keyCode = e.keyCode, optsKB = o.keyboard;
                            if (keyCode === optsKB.prevKey || keyCode === optsKB.prevAlterKey)
                                EVENTS.PrevCore(1);
                            else if (keyCode === optsKB.nextKey || keyCode === optsKB.nextAlterKey)
                                EVENTS.NextCore(1);
                        }
                    });
                }
            },
            /**
             * EVENT TOGGLE SLIDE BY WHEEL EVENT
             *  + Reference value Wheel Delta (http://stackoverflow.com/q/5527601/6397436) :
        
                        | evt.wheelDelta | evt.detail
              ------------------+----------------+------------
                Safari v5/Win7  |     120    |    0
                Safari v5/OS X  |     120    |    0
                Safari v7/OS X  |    12    |    0
               Chrome v11/Win7  |     120    |    0
               Chrome v37/Win7  |     120    |    0
               Chrome v11/OS X  |     3 (!)  |    0    (possibly wrong)
               Chrome v37/OS X  |     120    |    0
                  IE9/Win7  |     120    |  undefined
                Opera v11/OS X  |    40    |   -1
                Opera v24/OS X  |     120    |    0
                Opera v11/Win7  |     120    |   -3
               Firefox v4/Win7  |  undefined   |   -3
               Firefox v4/OS X  |  undefined   |   -1
              Firefox v30/OS X  |  undefined   |   -1
        
             */
            Wheel: function (opts) {
                var suffix = '.' + va.ns + va.rubykey, nameWheel = 'wheel' + suffix, nameMouseWheel = 'mousewheel' + suffix, $wheel = opts.$wheel;
                /**
                 * CONDITIONAL EXECUTION
                 */
                if (!opts.$wheel)
                    return;
                /**
                 * AT FIRST: SETUP DATA WHEEL & REMOVE WHEEL EVENT ON OBJECT
                 */
                // Loai bo event Wheel tren doi tuo.ng
                $wheel.off(nameWheel + ' ' + nameMouseWheel);
                // Setup data wheel of object
                var wheelData = M.Data($wheel);
                if (!wheelData.wheelValue)
                    wheelData.wheelValue = { 'type': null, 'delta': 0 };
                var wheelValue = wheelData.wheelValue;
                /**
                 * FUNCTION: MOVE TO NEXT SLIDE
                 */
                function GotoNextSlide(deltaX, deltaY) {
                    var wheelDelta = wheelValue.delta, valueActive = 300, isScrollPagePrevent = false;
                    /**
                     * FIXED VALUE DELTA IN THE SPECIAL BROWSER
                     *  + Fixed for Firefox browser: value too small
                     */
                    if (is.firefox) {
                        deltaX *= 20;
                        deltaY *= 20;
                    }
                    /**
                     * FUNCTION: SETUP INCREASE CURRENT DELTA
                     */
                    function DeltaPlus(deltaCur) {
                        if (deltaCur !== 0 && deltaCur !== undefined) {
                            wheelDelta += (deltaCur > 0) ? deltaCur : -deltaCur;
                            isScrollPagePrevent = true;
                        }
                    }
                    /**
                     * SETUP VALUE DELTA DEPENDS ON OPTIONS
                     */
                    switch (opts.optsWheel) {
                        /**
                         * TRUONG HOP 'AUTO'
                         */
                        case 'auto':
                            // Case: horizontal direction
                            if (opts.direction == 'hor')
                                DeltaPlus(deltaX);
                            else
                                DeltaPlus(deltaY);
                            break;
                        /**
                         * CASE: 'BOTH'
                         */
                        case 'both':
                            DeltaPlus(deltaX || deltaY);
                            break;
                    }
                    /**
                     * CHECK MOVE TO NEXT SLIDE
                     *  + Wheel twice will be allowed move to postion next slide
                     */
                    if (wheelDelta <= -valueActive) {
                        // Move to previous slide
                        EVENTS.PrevCore(1);
                        // Reset variable
                        wheelDelta = 0;
                        wheelValue.type = null;
                    }
                    else if (wheelDelta >= valueActive) {
                        // Move to next slide
                        EVENTS.NextCore(1);
                        // Reset variable
                        wheelDelta = 0;
                        wheelValue.type = null;
                    }
                    // Store value of wheel event on Data
                    wheelValue.delta = wheelDelta;
                    // Return value prevent scroll page
                    return isScrollPagePrevent;
                }
                /**
                 * STRUCTURE OF WHEEL EVENT BETWEEN NATIVE WHEEL & WHEEL PLUGIN
                 */
                if (o.wheel !== false) {
                    $wheel.on(nameMouseWheel + ' ' + nameWheel, function (e) {
                        var typeCur = e.type, events = e.originalEvent;
                        // Match name of wheel event -> setup continue
                        if (wheelValue.type === null || wheelValue.type == typeCur) {
                            // Setup type of current wheel if removed
                            if (wheelValue.type === null)
                                wheelValue.type = typeCur;
                            var deltaX = events.wheelDeltaX || events.deltaX || 0, deltaY = events.wheelDeltaY || events.deltaY || 0;
                            // Check move to next slide
                            var isScrollPagePrevent = GotoNextSlide(deltaX, deltaY);
                            // Prevent to scroll page
                            if (isScrollPagePrevent)
                                return false;
                        }
                    });
                }
            },
            /**
             * UPDATE RUBY AFTER LOAD ALL IMAGE || WINDOW LOADED
             */
            LoadAll: function () {
                /**
                 * FUNCTION: CHECK VALUE OF 'RATE' CHNAGES
                 *  + Update ruby if init 'rate' !== current 'rate'
                 */
                function CheckRate() {
                    is.res && va.rateInit != va.rate && cs.refresh();
                }
                /**
                 * EXECUTE EVENT
                 */
                cs.ev
                    .off('loadAll')
                    .on('loadAll', function () { CheckRate(); });
                /**
                 * EVENT 'LOAD' WINDOW
                 *  + Update ruby
                 */
                $w.on('load', function (e) {
                    setTimeout(cs.refresh, 100);
                });
            },
            /**
             * EVENT UPDATE RUBY AFTER BROWSER RESIZE
             */
            Resize: function () {
                // Function check
                function Check() {
                    clearTimeout(ti.resize);
                    ti.resize = setTimeout(function () {
                        // Fullscreen: find current page at first
                        if (is.fullscreen)
                            va.hRuby = $w.height();
                        // Update variable relative to scroll page
                        is.slideshow && !is.ssPauseAbsolute && M.Scroll.Check();
                        // Ruby: toggle showInRange
                        !!o.showInRange && is.DISPLAY && DISPLAY.Toggle();
                        // Reupdate Ruby: when show/hide scroll-bar browser
                        if (is.showInRange && (M.A(M.Width($viewport) - va.wRuby) > 1 || M.A(M.Height($viewport) - va.hRuby) > 1)) {
                            UPDATE.Resize();
                        }
                    }, 100);
                }
                // Resize: event
                $w.off(va.ev.resize);
                $w.on(va.ev.resize, Check);
                /**
                 * !IMPORTANT
                 *  + Add 'div' resize event
                 *  + Replace for functions need to resize:
                 *    - Ruby nested initialize
                 *    - 'EVENTS.RubyLoaded()' -> reby loaded all image
                 *    - 'EVENTS.PageLoaed()' -> the webpage loaded
                 *    - 'EVENTS.ReCheck()' -> remove 'ReCheck()' in 'resize' event & animate-height effect
                 */
                clearInterval(ti.resizeLoop);
                ti.resizeLoop = setInterval(function () {
                    var wCur, hCur;
                    // Get size for layout fullwidth - fullscreen
                    if (is.fullwidth || is.fullscreen) {
                        wCur = $w.width();
                        // Get height current of window in layout fullscreen
                        var hWin = $w.height(), offsetTop = $ruby.offset().top;
                        if (is.fullscreen && offsetTop < hWin) {
                            hCur = hWin - offsetTop;
                        }
                    }
                    else {
                        wCur = M.Width($viewport);
                        hCur = M.OuterHeight(va.$s.eq(cs.idCur), true);
                    }
                    // Ver 1.6 - 23/10/2016: Support the size 'width' - 'height' different at least 2px
                    if (!is.fxRun && !is.swiping && (M.A(wCur - va.wRuby) > 1 || M.A(hCur - va.hRuby) > 1)) {
                        UPDATE.Resize();
                    }
                }, o.delayUpdate);
            }
        }, 
        /**
         * EFFECT FOR 'DOT' LAYOUT
         */
        FX = {
            /**
             * CLASSIFICATION OF EFFECT AT FIRST
             *  + 'Math' effect
             *  + 'CSS' effect
             */
            Init: function (f) {
                var fxType = va.fxType, fnName = 'ToSlide' + va.View;
                // 'Math' effect
                if (fxType == 'math' && !!VIEW[fnName])
                    VIEW[fnName]();
                else if (/^css/.test(fxType) && !!VIEW[fnName])
                    VIEW[fnName]();
                else
                    FX.none();
            },
            /**
             * SETUP VARIABLES AT END
             */
            End: function (speedCur) {
                // Case: without timer
                if (speedCur === null) {
                    TOSLIDE.End();
                }
                else {
                    if (!$.isNumeric(speedCur))
                        speedCur = va.speed[cs.idCur];
                    // Create timer
                    clearTimeout(ti.fxEnd);
                    ti.fxEnd = setTimeout(TOSLIDE.End, speedCur);
                }
            },
            /**
             * NONE EFFECT
             */
            none: function () {
                TOSLIDE.End();
            }
        }, 
        /**
         * API BASIC
         */
        API = {
            /**
             * THE BASIC API METHOD IN RUBY
             */
            // Method navigation
            prev: function (step) { EVENTS.PrevCore(step); },
            next: function (step) { EVENTS.NextCore(step); },
            first: function () { TOSLIDE.Run(0, true); },
            last: function () { TOSLIDE.Run(num - 1, true); },
            goto: function (id) {
                /**
                 * FUNCTION: MOVE TO SLIDE
                 */
                function GotoSlide($sl) {
                    // Check valid of selector
                    if ($sl.length && va.$s.is($sl)) {
                        var slideID = M.Data($sl)['id'];
                        // Move to Slide
                        $.isNumeric(slideID) && TOSLIDE.Run(slideID, true);
                    }
                }
                /**
                 * CONVERT ID TO 'NUMBER' IF IT IS 'STRING NUMBER'
                 */
                if ($.isNumeric(id))
                    id = M.PInt(id);
                /**
                 * MOVE TO SLIDE IN THE CASE
                 */
                // Case: ID is number
                if (id >= 0 && id < num)
                    TOSLIDE.Run(id, true);
                else if (typeof id === 'string') {
                    var $slide = $(id);
                    // Go to slide by $slide
                    GotoSlide($slide);
                }
                else if (id instanceof jQuery)
                    GotoSlide(id);
            },
            // API Slideshow
            play: function () { is.slideshow && SLIDESHOW.Api('play'); },
            pause: function () { is.slideshow && SLIDESHOW.Api('pause'); },
            stop: function () { is.slideshow && SLIDESHOW.Api('stop'); },
            // API Layer
            playLayer: function () { is.LAYER && LAYER.Play(cs.idCur); },
            pauseLayer: function () { is.LAYER && LAYER.Pause(cs.idCur); },
            resumeLayer: function () { is.LAYER && LAYER.Resume(cs.idCur); },
            // API for native fullscreen
            requestNativeFS: function () { is.FULLSCREEN && FULLSCREEN.RequestNativeFS(); },
            exitNativeFS: function () { is.FULLSCREEN && FULLSCREEN.ExitNativeFS(); },
            // Method update properties
            update: function (options, isNoRefresh) {
                // Store old options & update new options with deep level
                one.oo = oo = $.extend(true, {}, o);
                one.vava = vava = $.extend(true, {}, va);
                one.isis = isis = $.extend(true, {}, is);
                o = $.extend(true, o, options);
                va.optsUpdate = options;
                // Check ruby toggle display
                !!is.awake && !isNoRefresh && cs.refresh();
                va.optsUpdate = va.addInfo = null;
            },
            updateOnSlides: function (options) {
                if (!M.IsPlainObject(options))
                    return;
                va.optsSlides = options;
                cs.refresh();
                va.optsSlides = null;
            },
            refresh: function () {
                // console.log('refresh');
                PROP.MergeAllModules();
                UPDATE.RemoveClass();
                // Update value of name ruby
                va.name = o.name || $ruby.attr('id') || null;
                // Update RubyAnimate keyframes into ruby system
                is.RUBYANIMATE && RUBYANIMATE.UpdateAllKeyframes();
                PROP.Ruby();
                is.SLIDESHOW && SLIDESHOW.RenderControl(); // Slideshow: update markup
                is.TIMER && TIMER.Render(); // Timer: update markup
                is.NAV && NAV.Render(); // Navigation: update markup
                is.PAG && PAG.RenderSelf(); // Pagination: update markup
                is.CAP && CAPTION.Render(); // Caption: update markup
                PROP.Slides();
                LOAD.IDMap();
                // Toggle slide depends on Deeplinking - Cookie
                PROP.DeepLinkCookie();
                M.ToggleSlide();
                UPDATE.Reset();
                UPDATE.Resize();
                // Others
                RENDER.Other();
                EVENTS.Setup();
                is.APIREMOTE && APIREMOTE.Init(); // Api remote: update event
                is.SLIDESHOW && SLIDESHOW.UpdateAll();
            },
            // Destroy ruby
            destroy: function (isDelete) {
                // Remove swipe event
                is.SWIPE && SWIPE.Events(false);
                // Remove 'tap' event on navigation & pagination
                var evClick = va.ev.mouse.end + ' ' + va.ev.swipe.end + ' ' + va.ev.click;
                o.isNav && va.$prev.add(va.$next).off(evClick);
                o.isPag && va.$pagItem.off(evClick);
                // Remove ohter events
                $doc.off(va.ev.key);
                $viewport.off(va.ev.wheel);
                // Remove resize-timer & resize event
                clearInterval(ti.resizeLoop);
                $w.off(va.ev.resize);
                // Pause slideshow
                // Remove timer & scroll event
                if (o.isSlideshow) {
                    clearInterval(ti.timer);
                    $w.off(va.ev.scroll);
                    this.stop();
                }
                // Remove all node of ruby
                if (!!isDelete) {
                    // Delete data on ruby
                    $ruby.removeData(rt01VA.rubyName);
                    // Remove all elements have markup-outside
                    !!va.$nav && va.$nav.remove();
                    !!va.$pag && va.$pag.remove();
                    o.isCap && va.$cap.remove();
                    if (o.isSlideshow) {
                        !!va.$timer && va.$timer.remove();
                        !!va.$playpause && va.$playpause.remove();
                        !!va.$ssControl && va.$ssControl.remove();
                    }
                    // Update value in system
                    rt01VA.$ruby = rt01VA.$ruby.not($ruby);
                    // Remove Node of ruby
                    $ruby.remove();
                }
            },
            // Restore ruby after using 'destroy' api
            restore: function () { INIT.Load(); },
            /**
             * THE FUNCTION HAVE RETURN VALUE IN RUBY
             */
            index: function () { return cs.idCur; },
            indexLast: function () { return cs.idLast; },
            width: function () { return va.wRuby; },
            height: function () { return va.hRuby; },
            slideLength: function () { return cs.num; },
            slideCur: function () { return va.$s.eq(cs.idCur); },
            slideAll: function () { return va.$s; },
            opts: function () { return o; },
            optsCur: function () { return M.Data(cs.idCur).opts; },
            variable: function () { return va; },
            browser: function () { return va.browser; },
            isMobile: function () { return is.mobile; },
            isTransform: function () { return is.tf; },
            isTransition: function () { return is.ts; },
            /**
             * TRIGGER EVENTS:
             *  ['init', 'ready', 'loaded']
             *  ['loadAll', 'loadSlide.id', 'loadBegin', 'loadEnd']
             *  ['resize', 'resizeEnd']
             *  ['start', 'end', 'before', 'after']
             *  ['selectID', 'deselectID', 'swipeBegin', 'swipeEnd', 'fxBegin', 'fxEnd']
             *  ['slideshowPlay', 'slideshowPause', 'slideshowStop']
             *  ['beforeSwapIDCur', 'afterSwapIDCur']
             *  ['beforeTap']
             */
            ev: $(divdiv)
        }, 
        /**
         * THE OTHER MODULES OF PLUGIN
         */
        SWIPE, RESPONSIVE, NAV, PAG, CAPTION, IMAGE, VIDEOBACK, VIDEOIFRAME, IFRAME, HOTSPOT, LAYER, PARALLAX, LAYERPARALLAX, FXMATH, RUBYANIMATE, SLIDESHOW, TIMER, FLICKR, DISPLAY, DEEPLINKING, COOKIE, FULLSCREEN, NESTED, CLASSADD, OLD, APIREMOTE;
        /**
         * BEGIN INITIALIZE RUBY
         */
        INIT.Check();
    };
    //- Class RubyTabs
    /**
     * CLASS RUBYTABS
     * CREATE NEW RUBYTABS JAVASCRIPT
     *    + Method: var ruby = new RubyTabs(selector, opts)
     */
    var RubyTabs = /** @class */ (function () {
        function RubyTabs(selector, opts) {
            this.items = document.querySelectorAll(selector);
            this.opts = opts;
        }
        // Initialazation
        RubyTabs.prototype.init = function () {
            var rubyName = rt01VA.rubyName, rubyData = null;
            /**
             * SETUP EACH OBJECT
             */
            for (var i = 0, len = this.items.length; i < len; i++) {
                var item = this.items[i], opts = this.opts, data = item.getAttribute('data-' + rubyName);
                // Parameter 2 ('optsions') is allways object -> to easy check
                if (opts === undefined)
                    opts = {};
                /**
                 * CASE: INITIALIZE OBJECT + UPDATE PROPERTIES
                 */
                if (M.IsPlainObject(opts)) {
                    // CREATE NEW RUBY
                    //- if( !ruby ) new $[rubyName](item, args[0]);
                    // UPDATE PROPERTIES
                    //- else if( !$.isEmptyObject(args[0]) ) ruby.update(args[0]);
                    // new RubyTabsFn(item, opts);
                    var $item = new RubyDOM(item), ruby = new FnRubyTabs($item, opts);
                    // Store data of ruby
                    //- rubyData = $item.data(rubyName);
                }
                /**
                 * CASE: CALL API - AFTER INITIATED RUBY
                 */
                // else {
                //   try    { ruby[args[0]](args[1]) }
                //   catch(e) { !!window.console && console.warn('['+ rubyName +': function not exist!]') }
                // }
            }
            // Return data ruby
            return rubyData;
        };
        return RubyTabs;
    }());
    /**
     * AUTOMATICALLY INITIALIZE RUBY
     */
    //- rt01MODULE.AUTOINIT = function($ruby) {
    rt01MODULE.AUTOINIT = function (selector) {
        document.querySelectorAll(selector).forEach(function ($item) {
            var rubyName = rt01VA.rubyName, rubyData = rt01VA.rubyData, data = M.StringToJson($item.getAttribute('data-' + rubyData)), isJson = true;
            /**
             * CHECK RUBY INITIALIZATION
             *  + Remove automatically initialize for ruby
             */
            if (M.IsEmptyObject(data))
                return;
            /**
             * CHECK TYPE DATA INPUT
             */
            if (typeof data === 'string') {
                // Convert to json
                var msgError = 'main options on "data-XX" not valid'.replace(/XX/, rubyData);
                data = M.StringToJson(data, msgError);
                // Check is json
                if (M.JsonToString(data) == '{}')
                    isJson = false;
            }
            /**
             * SETUP VALUE 'ISAUTOINIT'
             */
            var isAutoInit = data.isAutoInit;
            if (isAutoInit === undefined) {
                isAutoInit = rt01VA['optsDefault']['isAutoInit'];
            }
            /**
             * CHECK BEFORE AUTOMATICALLY INITIALIZE
             *  + Check Data variable is Json + AutoInit
             *  + Check continue: data have 'isAutoInit' option
             *  + Check continue: data of ruby exist
             */
            // Case valid initialization: create new ruby
            // case unvalid initialization: hidden object
            //-
            // (isJson && isAutoInit && !$self.data(rubyName))
            //   ? $self[rubyName]()
            //   : $self.addClass(rt01VA.namespace + 'none');
            var ruby = new RubyTabs(selector);
            console.log(1);
            ruby.init();
        });
    };
    //- $(document).ready(function() { rt01MODULE.AUTOINIT( $('.' + rt01VA.namespace) ) });
    document.addEventListener('DOMContentLoaded', function () {
        rt01MODULE.AUTOINIT('.' + rt01VA.namespace);
    });
})();
//# sourceMappingURL=rubytabs-js.js.map
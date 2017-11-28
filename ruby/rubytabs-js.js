!function(e) {
    "use strict";
    window.rt01MODULE = window.rt01MODULE || {}, window.rt01VA || (window.rt01VA = {
        rubyName: "rubytabs",
        rubyData: "tabs",
        namespace: "rt01",
        $ruby: e(),
        numID: 0
    }, rt01VA.optsDefault = {
        tagCanvas: "div",
        nameCanvas: "canvas",
        nameViewport: "viewport",
        nameSlide: "slide",
        nameImageBack: "imgback",
        nameImageLazy: "img",
        nameNav: "nav",
        namePag: "pag",
        nameCap: "cap",
        nameNext: "nav-next",
        namePrev: "nav-prev",
        namePlay: "playpause",
        nameTimer: "timer",
        nameLayer: "layer",
        nameOverlay: "overlay",
        nameDataSlide: "slide",
        nameDataLazy: "src",
        name: null,
        current: "cur",
        actived: "actived",
        deactived: "deactived",
        type: "tabs",
        layout: "auto",
        fx: "line",
        fxEasing: "easeOutCubic",
        cssOne: "roDeal",
        cssTwoOut: "pullOut",
        cssTwoIn: "pushIn",
        cssThreePrev: "pullIn",
        cssThreeNext: "pushIn",
        cssFourNextOut: "roEdgeLeftOut",
        cssFourNextIn: "roEdgeRightIn",
        cssFourPrevOut: "roEdgeRightOut",
        cssFourPrevIn: "roEdgeLeftIn",
        cssEasing: null,
        imagePosition: null,
        direction: "hor",
        width: null,
        height: null,
        responsiveLevels: [ 1200, 992, 768, 576 ],
        widthSlide: "100%",
        padding: null,
        margin: 0,
        speed: 400,
        speedHeight: 400,
        skin: null,
        delayUpdate: 1e3,
        perspective: 800,
        slot: "auto",
        stepNav: 1,
        stepPlay: 1,
        idBegin: 0,
        showBy: "all",
        showInRange: 0,
        offsetBy: null,
        wheel: !1,
        isAutoInit: !0,
        isCenter: !0,
        isCap: !1,
        isLoop: !0,
        isAnimRebound: !0,
        isOverlay: !1,
        isViewGrabStop: !1,
        isLoader: !0,
        isParallaxScroll: !1,
        isLayerParallax: !1,
        isMask: "auto",
        isBodyMaskInFxCSS: !0,
        isNativeFS: !1,
        lazyType: "smart",
        lazySmart: {
            preload: 1,
            amountEachLoad: 2
        },
        isSwipe: !0,
        swipe: {
            easing: "easeOutQuint",
            isBody: !0,
            isAutoOnPag: !0,
            isLiveEffect: !0
        },
        oneSlide: {
            isNav: !1,
            isPag: !0,
            isSwipe: !1
        },
        className: {
            grab: [ "grab", "grabbing" ],
            swipe: [ "", "swiping" ],
            stop: [ "stopLeft", "stopRight" ]
        },
        rubyAnimateKeyframes: {
            fadeOut: [ {
                pos: 100,
                opacity: 0
            } ],
            fadeIn: [ {
                pos: 0,
                opacity: 0
            } ]
        },
        rubyAnimateOne: {
            fade: {
                next: [ "fadeOut", "fadeIn" ],
                prev: [ "fadeOut", "fadeIn" ]
            }
        },
        fxMathName: [ "rectMove", "rectRun", "rectSlice", "rubyFade", "rubyMove", "rubyRun", "rubyScale", "zigzagRun", "randomMath" ],
        coverflow3D: {
            widthSlide: "80%",
            perspective: 1200,
            zDeep: 600,
            rotate: 30,
            opacity: 1,
            isDeepMulti: !0
        },
        isNav: !1,
        nav: {
            isEventTap: !0,
            markup: "<div class='{ns}nav'><div class='{ns}nav-prev'>prev</div><div class='{ns}nav-next'>next</div></div>",
            markupOutside: "<div class='{ns}nav-prev'>prev</div><div class='{ns}nav-next'>next</div>"
        },
        isPag: !0,
        pag: {
            type: "thumbnail",
            width: null,
            height: null,
            minWidth: null,
            minHeight: null,
            maxWidth: null,
            maxHeight: null,
            direction: "hor",
            position: "end",
            align: "center",
            cssPosition: "relative",
            hOffset: null,
            vOffset: null,
            speed: 300,
            easing: "easeOutCubic",
            sizeAuto: "full",
            typeSizeItem: "self",
            isEventTap: !0,
            isItemCurCenterWhenTap: !0,
            isJustifyWhenLarge: !1,
            isArrow: !0,
            isTapOnArrow: !0,
            isMark: !0,
            isMarkTransition: !0,
            moreClass: null,
            widthMinToHor: 0,
            rangeMinToHor: 0,
            wheel: "auto",
            markupArrow: "<div class='{ns}pagarrow-item {ns}pagarrow-{dirs}'><div class='{ns}pagarrow-icon'></div></div>",
            markupMark: "<div class='{ns}pagmark'><div class='{ns}pagmark-item {ns}pagmark-margin'></div><div class='{ns}pagmark-item {ns}pagmark-border'></div><div class='{ns}pagmark-item {ns}pagmark-padding'></div><div class='{ns}pagmark-item {ns}pagmark-self'></div></div>"
        },
        image: {
            isResponsive: !0
        },
        imageback: {
            position: "center",
            pixelRatio: 1,
            isResponsive: !0
        },
        video: {
            height: 480,
            isBtnPause: !1,
            isPauseThenRemove: !1
        },
        videoback: {
            position: "fill",
            posterPosition: "fill",
            opacity: .3,
            isResponsive: !0
        },
        hotspot: {
            widthItem: null,
            sizeArea: 10,
            position: "top",
            eventToOpen: "tap",
            animIn: [ {
                y: "100%",
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 200
            } ],
            animOut: [ {
                y: 0
            }, {
                y: "100%",
                opacity: 0,
                duration: 200
            } ],
            animTopIn: null,
            animTopOut: null,
            animBottomIn: null,
            animBottomOut: null,
            animLeftIn: null,
            animLeftOut: null,
            animRightIn: null,
            animRightOut: null,
            markupPoint: "<div class='{ns}hspoint'></div>",
            isActivedAtFirst: !1,
            isResponsive: !1
        },
        layer: {
            width: null,
            height: null,
            count: 1,
            direction: "normal",
            duration: 400,
            delay: 0,
            easing: "easeOutQuad",
            eventToPlay: null,
            isPlayWhenSlideActived: !0,
            isAutoPlay: !0,
            isResponsive: !0,
            isRandom: !1,
            isMask: !1,
            animateEnd: [ {
                opacity: 0,
                duration: 400
            } ]
        },
        layerParallax: {
            isParallax: !0,
            radiusLevelValue: [ 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 ],
            radiusLevel: 3,
            radius: null,
            direction: "reverse"
        },
        parallax: {
            scrollDirection: "same",
            scrollDepth: 80,
            scrollBgDepth: 80,
            scrollLayerDepth: 50,
            isScroll: !1,
            isScrollLayerFade: !0
        },
        parallaxScroll: {
            direction: "same",
            bgDepth: 80,
            layerDepth: 50,
            isLayerEnable: !0,
            isLayerFade: !0
        },
        isSlideshow: !1,
        slideshow: {
            delay: 8e3,
            timer: "arc",
            isAutoRun: !0,
            isPlayPause: !0,
            isTimer: !0,
            isLoop: !0,
            isHoverPause: !1,
            isRunInto: !1,
            isRandom: !1
        },
        timerArc: {
            width: null,
            height: null,
            fps: 30,
            rotate: 0,
            radius: 14,
            weight: 4,
            stroke: "hsla(0,0%,0%,.6)",
            fill: "transparent",
            radiusOuter: 14,
            weightOuter: 2,
            strokeOuter: "hsla(0,0%,0%,.1)",
            fillOuter: "transparent"
        },
        flickr: {
            urlRequest: "https://api.flickr.com/services/rest/?method=flickr.{method}&api_key={key}{typeID}&format=json&nojsoncallback=1",
            apiKey: "a85720e2fbb21eccea51fcb75cb22184",
            photoNum: 10,
            photoRecentNum: null,
            photoAlbumNum: null,
            photoFavesNum: null,
            photoSize: "Large",
            photoPosition: "last",
            getPhotoRecentByUrl: null,
            getPhotoAlbumByUrl: null,
            getPhotoFavesByUrl: null,
            recentID: null,
            albumID: null,
            favesID: null,
            isRandomPhoto: !1,
            markupSlide: '<div><a class=\'{ns}imgback\' data-flickr=\'{"numID": {numID}, "photoID": "{photoID}"}\'>{photoTitle}</a>{markupInfo}</div>',
            markupInfo: "<div class='{ns}flickr-info {ns}layeritem' data-animate-start='{infoLayer}'>{markupPhotoTitle}{markupAlbumTitle}{markupSplit}{markupAuthor}</div>",
            markupSplit: " | ",
            markupPhotoTitle: "<a class='{ns}flickr-photo-title' href='{photoURL}'>{photoTitle}</a>",
            markupAlbumTitle: "<a class='{ns}flickr-album-title' href='{albumURL}'>{albumTitle}</a>",
            markupAuthor: "<a class='{ns}flickr-author' href='{authorURL}'>{author}</a>",
            infoLayer: [ {
                x: 20,
                y: "100%{parent}"
            }, {
                y: "100%{parent} - 100% - 20",
                duration: 400
            } ],
            isInfo: !0,
            isPhotoTitle: !0,
            isAlbumTitle: !0,
            isAuthor: !0
        },
        markup: {
            loader: "<div class='{ns}loader'><svg class='{ns}loader-circular'><circle class='{ns}loader-path' cx='50%' cy='50%' r='20' fill='none' stroke-width='4' stroke-miterlimit='15'/></svg></div>",
            loaderThumb: "<div class='{ns}loader {ns}loader-small'><svg class='{ns}loader-circular'><circle class='{ns}loader-path' cx='50%' cy='50%' r='10' fill='none' stroke-width='3' stroke-miterlimit='15'/></svg></div>",
            ssControl: "<div class='{ns}ss-control'></div>",
            navInto: "viewport",
            pagInto: "ruby",
            ssControlInto: "ruby",
            timerInto: "ssControl",
            playInto: "ssControl"
        },
        isKeyboard: !1,
        keyboard: {
            nextKey: 39,
            prevKey: 37,
            nextAlterKey: null,
            prevAlterKey: null
        },
        isDeeplinking: !1,
        deeplinking: {
            prefixDefault: [ "ruby", "slide" ],
            prefix: null,
            isIDConvert: !0,
            isOnlyShowID: !0
        },
        isCookie: !1,
        cookie: {
            name: "",
            days: 7
        },
        nativeFS: {
            isButton: !0,
            markupButton: "<a class='{ns}toggle-nativeFS'></a>"
        },
        updateOptsInNativeFS: {},
        events: {},
        desktop: {},
        mobile: {
            speedHeight: null,
            direction: "hor"
        },
        fallback: {
            markup: {
                loader: "<div class='{ns}loader {ns}loader-old'>loading</div>"
            }
        },
        rev: [ "erp" ],
        versionBrand: "1",
        version: "1.7"
    }, rt01VA.optsPlus = {
        tabs: {
            lazyType: "single",
            margin: 30,
            pag: {
                type: "tabs",
                position: "begin",
                align: "begin"
            }
        },
        slider: {
            lazyType: "smart",
            margin: 0,
            pag: {
                type: "thumbnail",
                position: "end",
                align: "center"
            }
        },
        carousel: {
            lazyType: "smart",
            fx: "line",
            speed: 600,
            widthSlide: 300,
            margin: 15,
            isCenter: !1,
            isLoop: !1,
            isPag: !1,
            isNav: !0
        }
    }, rt01VA.M = {
        Message: function(e, t) {
            if ("object" == typeof console && void 0 !== e) {
                var a = "[" + rt01VA.rubyName + ": " + e + "]";
                t && (a += " -> " + t), console.warn(a);
            }
        },
        StringToJson: function(t, a) {
            if ("string" == typeof t) {
                t = t.replace(/\u0027/g, '"');
                try {
                    t = e.parseJSON(t);
                } catch (e) {
                    rt01VA.M.Message(a);
                }
            }
            return e.isPlainObject(t) ? e.extend(!0, {}, t) : e.isArray(t) ? e.extend(!0, [], t) : {};
        },
        JsonToString: function(e, t) {
            if ("object" == typeof e) try {
                e = JSON.stringify(e);
            } catch (e) {
                rt01VA.M.Message(t);
            }
            return "string" == typeof e ? e : "";
        },
        CamelCase: function(e) {
            return e.replace(/-([a-z])/gi, function(e, t) {
                return t.toUpperCase();
            });
        },
        PFloat: function(e) {
            if (/^\-?\d*\.?\d+/g.test(e)) {
                var t = parseFloat(e);
                if (t < 9007199254740992) return t;
            } else {
                if (/^(true|on)$/g.test(e)) return !0;
                if (/^(false|off)$/g.test(e)) return !1;
            }
            return 0;
        },
        PInt: function(e) {
            return /^\-?\d+/g.test(e) ? parseInt(e, 10) : 0;
        },
        SizeNoTransform: function(e, t, a) {
            if (!e || !e[0]) return 0;
            var i = this, n = e[0], r = document.defaultView ? getComputedStyle(n) : n.currentStyle, s = /Width/i.test(t), o = n[s ? "offsetWidth" : "offsetHeight"], l = s ? i.PFloat(r.paddingLeft) + i.PFloat(r.paddingRight) : i.PFloat(r.paddingTop) + i.PFloat(r.paddingBottom), u = s ? i.PFloat(r.borderLeftWidth) + i.PFloat(r.borderRightWidth) : i.PFloat(r.borderTopWidth) + i.PFloat(r.borderBottomWidth), d = s ? i.PFloat(r.marginLeft) + i.PFloat(r.marginRight) : i.PFloat(r.marginTop) + i.PFloat(r.marginBottom);
            return /^Outer\w+/.test(t) ? a && (o += d) : /^Inner\w+/.test(t) ? o -= u : /^(Width|Height)$/.test(t) && (o -= u + l), 
            o;
        },
        Width: function(e) {
            return this.SizeNoTransform(e, "Width");
        },
        Height: function(e) {
            return this.SizeNoTransform(e, "Height");
        },
        InnerWidth: function(e) {
            return this.SizeNoTransform(e, "InnerWidth");
        },
        InnerHeight: function(e) {
            return this.SizeNoTransform(e, "InnerHeight");
        },
        OuterWidth: function(e, t) {
            return this.SizeNoTransform(e, "OuterWidth", t);
        },
        OuterHeight: function(e, t) {
            return this.SizeNoTransform(e, "OuterHeight", t);
        }
    }), e[rt01VA.rubyName] = function(t, a) {
        var i, n, r, s, o, l, u, d, p, c, f, v, g, h, m, y, w, C, A, x, I, E, S, b, D, T, M, R, L, P, $ = {
            $ruby: t
        }, O = {
            $w: e(window),
            $doc: e(document),
            $body: e("body"),
            rubykey: Math.ceil(1e9 * Math.random()),
            ns: rt01VA.namespace,
            data: {},
            numNSID: 0
        }, k = {}, N = {}, V = {}, F = {}, B = {}, U = {}, z = {
            cs: $,
            o: V,
            oo: F,
            va: O,
            is: k,
            ti: N
        }, G = e(window), H = e(document), W = {
            Check: function() {
                X.Browser(), X.CssName(), X.FirstSetup(), X.RunEvent("init"), j.Check() ? k.DISPLAY ? S.SetupInit() : (k.showInRange = k.wake = !0, 
                W.Ready()) : t.remove();
            },
            Ready: function() {
                X.RunEvent("ready"), t.removeClass(O.ns + "none"), k.RUBYANIMATE && A.UpdateAllKeyframes(), 
                K.Structure(), _.Ruby(), k.SLIDESHOW && x.RenderControl(), k.TIMER && I.Render(), 
                k.FULLSCREEN && T.Render(), k.NAV && d.Render(), k.PAG && p.RenderSelf(), k.CAP && c.Render(), 
                "all" === V.lazyType && K.LoaderAdd(t, t, "$rubyLoader"), _.Slides(), K.Other(), 
                k.APIREMOTE && P.Init(), _.DeepLinkCookie(), k.FLICKR && E.Init(), q.Way(), k.pag && !k.pagList && p.TypeSizeItem(), 
                t.addClass(X.NS("{ns}init {ns}no-loaded")), Z.WidthForRuby(), k.res && u.UpdateVars(), 
                O.rateInit = O.rate, k.pag && p.VerToHor(), J.CombineAtFirst(), k.LAYER ? y.LoadHomeBegin() : q.Next();
            },
            Load: function() {
                k.initLoaded = !0, X.RunEvent("loaded"), k.pag && !k.pagList && p.TypeSizeItem(), 
                k.res && k.fullscreen && T.Variable(), J.CombineAtFirst(), ie.Setup(), ie.LoadAll(), 
                X.LastSetup(), k.initEnd = !0, k.LAYER && (y.Init(n), y.Play("home")), setTimeout(function() {
                    k.slideshow && x.Init();
                }, 400);
            }
        }, X = e.extend(!0, {}, rt01VA.M, {
            FirstSetup: function() {
                _.MergeAllModules(), _.MergeAllOpts(), $.one = z, $ = e.extend(!0, $, re), e.data(t[0], rt01VA.rubyName, $), 
                rt01VA.$ruby = rt01VA.$ruby.add(t), rt01VA.numID++, O.rubyID = rt01VA.numID, O.ns = rt01VA.namespace, 
                O.name = V.name || t.attr("id") || null, O.nVideoOpen = 0, k.tapEnable = !0, O.fxLast = O.fxCur = "none", 
                O.classAdd = [], O.actived = O.ns + V.actived, O.deactived = O.ns + V.deactived, 
                O.addInfo = null, "fullwidth" === V.layout && (k.fullwidth = !0), "fullscreen" === V.layout && rt01MODULE.FULLSCREEN && (k.fullscreen = !0);
            },
            LastSetup: function() {
                !k.tf && setTimeout(Y.Resize, 50);
            },
            Browser: function() {
                var e = navigator.userAgent;
                a = e || navigator.vender || window, k.ie = document.documentMode, k.edge = !k.ie && !!window.StyleMedia, 
                k.safari = /Constructor/i.test(Object.prototype.toString.call(window.HTMLElement)), 
                k.opera = !!window.opera || /\sOPR\//i.test(e), k.chrome = !!window.chrome && !!window.chrome.webstore, 
                k.firefox = void 0 !== window.InstallTrigger, k.ie11 = !(!k.ie || new Function("/*@cc_on return @_jscript_version; @*/")()), 
                k.ie7 = !(!k.ie || !/MSIE\s7\./i.test(e));
                var t = [ "ie", "edge", "safari", "opera", "chrome", "firefox" ];
                for (o = t.length; o >= 0; o--) if (k[t[o]]) {
                    O.browser = t[o];
                    break;
                }
                k.evPointer = !!window.PointerEvent, k.evMSPointer = !!window.MSPointerEvent, k.evPointerAll = k.evPointer || k.evMSPointer, 
                k.evSwipe = !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch), 
                k.swipeSupport = k.evSwipe || k.evPointer || k.evMSPointer;
                var a = e || navigator.vender || window.opera;
                k.mobile = k.swipeSupport && (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))), 
                k.androidNative = k.mobile && /Mozilla\/5\.0/i.test(e) && /Android/i.test(e) && /AppleWebKit/i.test(e) && !/Chrome/i.test(e) && !/Android\s+4\.4/i.test(e), 
                k.iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                var i = "." + O.ns + O.rubykey, n = [ "", "", "" ];
                k.evSwipe ? n = [ "touchstart", "touchmove", "touchend" ] : k.evPointer ? n = [ "pointerdown", "pointermove", "pointerup" ] : k.evMSPointer && (n = [ "MSPointerDown", "MSPointerMove", "MSPointerUp" ]), 
                O.ev = {
                    click: "click" + i,
                    drag: "dragstart" + i + " selectstart" + i,
                    resize: "resize" + i,
                    scroll: "scroll" + i,
                    key: "keyup" + i,
                    hash: "hashchange" + i,
                    swipe: {
                        start: n[0] + i,
                        move: n[1] + i,
                        end: n[2] + i,
                        type: "swipe"
                    },
                    mouse: {
                        start: "mousedown" + i,
                        move: "mousemove" + i,
                        end: "mouseup" + i,
                        type: "mouse"
                    },
                    mouseenter: "mouseenter" + i,
                    mouseleave: "mouseleave" + i
                }, "" == n[0] && (O.ev.swipe = {
                    start: "",
                    move: "",
                    end: "",
                    type: "swipe"
                }), k.wheelNative = !!("onwheel" in document.createElement("div")), k.console = "object" == typeof console, 
                k.canvas2d = function() {
                    var e = document.createElement("canvas");
                    return !(!e.getContext || !e.getContext("2d"));
                }(), k.online = /https?/g.test(window.location.protocol);
            },
            CssName: function() {
                var e = {
                    CamelCase: function(e) {
                        return e.replace(/-([a-z])/gi, function(e, t) {
                            return t.toUpperCase();
                        });
                    },
                    CSS: function(e, t) {
                        var a = document.createElement("p").style, i = "Webkit Moz ms O".split(" "), n = "-webkit- -moz- -ms- -o-".split(" "), r = this.CamelCase(e);
                        if (void 0 !== a[r]) return !t || "";
                        for (var s = X.ProperCase(r), o = 0, l = i.length; o < l; o++) if (void 0 !== a[i[o] + s]) return !t || n[o];
                        return !1;
                    },
                    Prefix: function(e) {
                        return this.CSS(e, !0);
                    }
                }, t = "transform";
                k.tf = e.CSS(t), k.tf3D = e.CSS("perspective"), k.ts = e.CSS("transition"), k.opacity = e.CSS("opacity");
                var a = O.prefix = e.Prefix(t);
                O.cssTf = s = a + t;
                var i = "translate3d(", n = k.tf3D;
                O.tl0 = n ? i : "translate(", O.tl1 = n ? ",0)" : ")", O.tlx0 = n ? i : "translateX(", 
                O.tlx1 = n ? ",0,0)" : ")", O.tly0 = n ? i + "0," : "translateY(", O.tly1 = n ? ",0)" : ")";
            },
            ToggleSlide: function() {
                if ($.num >= 1) {
                    var e = $.idCur, t = $.idLast, a = O.$s.eq(e), i = O.$s.eq(t), n = O.ns + V.current, r = O.deactived;
                    if (O.$s.not(a).removeClass(n).addClass(r), a.addClass(n).removeClass(r), void 0 !== t && X.RunEvent("deselectID", t), 
                    X.RunEvent("selectID", e), !k.centerLoop && _.CenterNoLoop(), k.pag) {
                        var s = O.$pagItem.eq(e);
                        O.$pagItem.not(s).removeClass(n), s.addClass(n), V.pag.isMark && p.SizePosOfMark();
                    }
                    k.nav && d.Toggle(), k.cap && c.Toggle(a, i), q.Add(a), k.CLASSADD && R.Toggle(), 
                    Y.CanvasMask(), void 0 !== t && (V.isDeeplinking && k.DEEPLINKING && b.Write(), 
                    V.isCookie && k.COOKIE && D.Write()), k.IFRAME && h.ToggleSource(a), k.NESTED && M.RefreshInSlide(a), 
                    k.SWIPE && l.ToggleEvent();
                }
            },
            ToggleClass: function(e, t, a) {
                var i = V.className[e], r = O.ns + i[0], s = O.ns + i[1], o = t ? s : r, l = t ? r : s;
                void 0 === a && (a = n), -1 == t ? a.removeClass(r + " " + s) : a.addClass(o).removeClass(l);
            },
            ValueX: function(e) {
                var t = e.substr(7, e.length - 8).split(", ");
                return X.PInt(t[4]);
            },
            Scroll: {
                Setup: function() {
                    if (k.ssRunInto) {
                        k.into = !1, X.Scroll.Check();
                        G.off(O.ev.scroll), G.on(O.ev.scroll, function() {
                            clearTimeout(N.scroll), N.scroll = setTimeout(function() {
                                !k.ssPauseAbsolute && X.Scroll.Check();
                            }, 200);
                        });
                    } else k.into = !0;
                },
                Check: function(e) {
                    X.Scroll.Position();
                    var t = !(O.topW > O.botRuby || O.botW < O.topRuby), a = !e && k.slideshow && k.ssRunInto;
                    t ? k.into || (k.into = !0, a && x.Go("scrollInto")) : k.into && (k.into = !1, a && x.Go("scrollOut"));
                },
                Position: function() {
                    O.hWin = G.height(), O.topW = G.scrollTop(), O.botW = O.hWin + O.topW, O.topRuby = t.offset().top, 
                    O.botRuby = O.topRuby + X.OuterHeight(t);
                }
            },
            A: function(e) {
                return Math.abs(e);
            },
            R: function(e) {
                return Math.round(e);
            },
            C: function(e) {
                return Math.ceil(e);
            },
            Ra: function() {
                return Math.random();
            },
            Rm: function(e, t) {
                return X.Ra() * (t - e) + e;
            },
            Sum: function(e, t) {
                var a = 0;
                if (t < 0) return a;
                void 0 === t && (t = e.length);
                for (var i = 0; i < t; i++) a += e[i];
                return a;
            },
            PPercent: function(e, t) {
                return e > 0 && e < 1 && (e *= t), X.R(e);
            },
            PercentToPixel: function(t, a) {
                var i = null;
                return /^\-?\d*\.?\d+\%$/.test(t) ? i = X.R(X.PFloat(t) * a / 100) : e.isNumeric(t) && (i = t), 
                i;
            },
            PStyleToJson: function(e) {
                var t, a = e.attr("style"), i = /\s*([\w-]+)\s*:\s*([^;]*)/g, n = {};
                for (void 0 !== e.attr("width") && (n.width = e.attr("width")), void 0 !== e.attr("height") && (n.height = e.attr("height")); t = i.exec(a); ) n[t[1]] = t[2];
                var r = /^-?\d*.?\d+px$/;
                return r.test(n.width) && (n.width = parseFloat(n.width)), r.test(n.height) && (n.height = parseFloat(n.height)), 
                n;
            },
            ElesIsNumber: function(t, a) {
                var i = t.length, n = e.isArray(t) && i === a;
                if (n) for (var r = 0; r < i; r++) n = n && e.isNumeric(t[r]);
                return n;
            },
            Tl: function(e, t, a) {
                var a = a || "px";
                return O.tl0 + e + a + ", " + t + a + O.tl1;
            },
            Tlx: function(e, t) {
                var t = t || "px";
                return k.tf ? O.tlx0 + e + t + O.tlx1 : e + t;
            },
            Tly: function(e, t) {
                var t = t || "px";
                return k.tf ? O.tly0 + e + t + O.tly1 : e + t;
            },
            TfRemove: function(e) {
                var t = {};
                t[s] = "", e.css(t);
            },
            Shift: function(e, t) {
                return t ? e.shift() : e.pop();
            },
            Push: function(e, t, a) {
                return a ? e.push(t) : e.unshift(t);
            },
            RandomInArray: function(t, a) {
                if (e.isArray(t)) {
                    if (1 === t.length) return t[0];
                    var i = e.extend(!0, [], t), n = e.inArray(a, i);
                    return -1 === n && (n = i.length + 1), i.splice(n, 1), i[X.R(X.Rm(0, i.length - 1))];
                }
                return t;
            },
            RandomInArray2: function(t, a, i) {
                if (e.isArray(t)) {
                    if ((!a.length || 1 == a.length && a[0] == i) && (a = e.extend(!0, a, t)), void 0 !== i) {
                        var n = e.inArray(i, a);
                        -1 !== n && a.splice(n, 1);
                    }
                    var r = X.R(X.Rm(0, a.length - 1)), s = a[r];
                    return a.splice(r, 1), s;
                }
                return t;
            },
            SwapVaOnSwipe: function() {
                return O.$swipeCur.is(i) ? O.can : O.pag;
            },
            XClass: function(e, t, a) {
                e[(t ? "add" : "remove") + "Class"](a);
            },
            ProperCase: function(e) {
                return e.charAt(0).toUpperCase() + e.slice(1);
            },
            NS: function(e) {
                return "string" == typeof e ? e.replace(/\{ns\}/g, O.ns) : "";
            },
            MatchMedia: function(e, a, i) {
                if (i) {
                    var n = X.OuterWidth(t);
                    if (e <= n && n <= a) return !0;
                } else if (window.matchMedia) {
                    var r = "(min-width: WMINpx) and (max-width: WMAXpx)".replace("WMIN", e).replace("WMAX", a);
                    if (window.matchMedia(r).matches) return !0;
                } else {
                    var s = G.width();
                    if (e <= s && s <= a) return !0;
                }
                return !1;
            },
            GetValueInRange: function(e, t) {
                var a = t || "value", i = 1e5, n = -1;
                for (o = e.num - 1; o >= 0; o--) X.MatchMedia(e[o].from, e[o].to) && i >= e[o].to && (i = e[o].to, 
                n = o);
                return n > -1 ? e[n][a] : null;
            },
            GetIndexInResponsive: function(e) {
                for (var t = null, a = 0, i = e.length; a < i; a++) {
                    var n = e[a], r = 0 === a ? 1e4 : e[a - 1];
                    if (X.MatchMedia(n, r)) {
                        t = a;
                        break;
                    }
                }
                return null === t && (t = e.length - 1), t;
            },
            ParseGrid: function(t, a) {
                var i = V.responsiveLevels.length, n = null;
                if (e.isNumeric(t) || "string" == typeof t) {
                    n = [];
                    for (s = 0; s < i; s++) n[s] = a ? t : 0 == s ? t : null;
                } else if (e.isArray(t)) if (t.length < i) {
                    var r = t.length;
                    valueLast = t[r - 1], n = t.slice();
                    for (var s = r; s < i; s++) n[s] = a ? valueLast : null;
                } else n = t.slice();
                return n;
            },
            Find: function(e, t) {
                var a = e.find(t), i = e.find("." + O.ns).find(t);
                return a = a.not(i);
            },
            Data: function(t, a) {
                var i = O.data;
                if (e.isNumeric(t) && 0 <= t && t < $.num ? t = O.$s.eq(t) : "home" === t && (t = n), 
                !(t instanceof jQuery)) return !1;
                e.isPlainObject(a) ? (delete (a = e.extend(!0, {}, a)).$self, delete a.nsid) : a = {};
                var r;
                for (r in i) if (t.is(i[r].$self)) return e.extend(!0, i[r], a);
                return r = O.numNSID, O.numNSID++, i[r] = {
                    $self: t,
                    nsid: r
                }, e.extend(!0, i[r], a);
            },
            GetTween: function(e) {
                var t = X.Data(e);
                return t.tweenSelf = t.tweenSelf || new RubyTween(), t.tweenSelf;
            },
            Module: function(t) {
                return e.extend({}, rt01MODULE[t], z);
            },
            RunEvent: function(t, a, i) {
                e.isFunction(V.events[t]) && V.events[t]($), $.ev.trigger(t, [ a, i ]);
            }
        }), _ = {
            MergeAllModules: function() {
                z.INIT = W, z.M = X, z.PROP = _, z.RENDER = K, z.LOAD = q, z.EVENTS = ie, z.POSITION = Q, 
                z.SIZE = Z, z.POSSIZE = J, z.TOSLIDE = ae, z.FX = ne, z.VIEW = ee, l = X.Module("SWIPE"), 
                u = X.Module("RESPONSIVE"), d = X.Module("NAV"), p = X.Module("PAG"), c = X.Module("CAPTION"), 
                f = X.Module("IMAGE"), v = X.Module("VIDEOBACK"), g = X.Module("VIDEOIFRAME"), h = X.Module("IFRAME"), 
                m = X.Module("HOTSPOT"), y = X.Module("LAYER"), C = X.Module("LAYERPARALLAX"), w = X.Module("PARALLAX"), 
                A = X.Module("RUBYANIMATE"), x = X.Module("SLIDESHOW"), I = X.Module("TIMER"), E = X.Module("FLICKR"), 
                S = X.Module("DISPLAY"), b = X.Module("DEEPLINKING"), D = X.Module("COOKIE"), T = X.Module("FULLSCREEN"), 
                M = X.Module("NESTED"), R = X.Module("CLASSADD"), L = X.Module("OLD"), P = X.Module("APIREMOTE"), 
                re = e.extend(re, rt01MODULE.APIMORE), ee = e.extend(ee, rt01MODULE.VIEWMATH, rt01MODULE.VIEWCSS, rt01MODULE.VIEWCOVERFLOW3D, z), 
                k.SWIPE = !!rt01MODULE.SWIPE, k.RESPONSIVE = !!rt01MODULE.RESPONSIVE, k.NAV = !!rt01MODULE.NAV, 
                k.PAG = !!rt01MODULE.PAG, k.CAP = !!rt01MODULE.CAPTION, k.IMAGE = !!rt01MODULE.IMAGE, 
                k.VIDEOBACK = !!rt01MODULE.VIDEOBACK, k.VIDEOIFRAME = !!rt01MODULE.VIDEOIFRAME, 
                k.IFRAME = !!rt01MODULE.IFRAME, k.HOTSPOT = !!rt01MODULE.HOTSPOT, k.LAYER = !!rt01MODULE.LAYER, 
                k.LAYERPARALLAX = !!rt01MODULE.LAYERPARALLAX, k.PARALLAX = !!rt01MODULE.PARALLAX, 
                k.RUBYANIMATE = !!rt01MODULE.RUBYANIMATE, k.SLIDESHOW = !!rt01MODULE.SLIDESHOW, 
                k.TIMER = !!rt01MODULE.TIMER, k.FLICKR = !!rt01MODULE.FLICKR, k.DISPLAY = !!rt01MODULE.DISPLAY, 
                k.DEEPLINKING = !!rt01MODULE.DEEPLINKING, k.COOKIE = !!rt01MODULE.COOKIE, k.FULLSCREEN = !!rt01MODULE.FULLSCREEN, 
                k.NESTED = !!rt01MODULE.NESTED, k.CLASSADD = !!rt01MODULE.CLASSADD, k.APIREMOTE = !!rt01MODULE.APIREMOTE;
            },
            MergeAllOpts: function() {
                var i = rt01VA.optsDefault, n = t.data(rt01VA.rubyData), r = null;
                (n = X.StringToJson(n)).type && (r = n.type), !r && a.type && (r = a.type), r || (r = i.type);
                var s = rt01VA.optsPlus[r];
                V = e.extend(!0, V, i, s, a, n), k.tf || (V = e.extend(!0, V, V.fallback)), V = k.mobile ? e.extend(!0, V, V.mobile) : e.extend(!0, V, V.desktop);
            },
            Chain3: function(t, a) {
                if (a || (a = "value"), e.isNumeric(t) ? t = [ [ t, 0, 1e5 ] ] : X.ElesIsNumber(t, 3) && (t = [ t ]), 
                !e.isArray(t)) return !1;
                var i = {
                    num: t.length
                }, n = 0;
                for (o = i.num - 1; o >= 0; o--) {
                    var r = t[o];
                    e.isNumeric(r) && (r = [ r, 0, 1e5 ]), r[1] = X.PInt(r[1]), r[2] = X.PInt(r[2]), 
                    i[o] = {
                        from: r[1],
                        to: r[2]
                    }, i[o][a] = parseFloat(r[0]), n = n < r[2] ? r[2] : n;
                }
                return i.wMax = X.PInt(n), i;
            },
            Chain4: function(t) {
                if (e.isNumeric(t) ? t = [ [ t, t, 0, 1e5 ] ] : X.ElesIsNumber(t, 2) ? t = [ [ t[0], t[1], 0, 1e5 ] ] : X.ElesIsNumber(t, 4) && (t = [ t ]), 
                !e.isArray(t)) return !1;
                var a = {
                    num: t.length
                }, i = 0;
                for (o = a.num - 1; o >= 0; o--) {
                    var n = t[o];
                    e.isNumeric(n) && (n = [ n, n, 0, 1e5 ]), 2 == n.length ? (n[2] = 0, n[3] = 1e5) : 3 == n.length && n.unshift(n[0]), 
                    a[o] = {
                        left: parseFloat(n[0]),
                        right: parseFloat(n[1]),
                        from: X.PInt(n[2]),
                        to: X.PInt(n[3])
                    }, i = i < X.PInt(n[3]) ? n[3] : i;
                }
                return a.wMax = X.PInt(i), a;
            },
            DeepLinkCookie: function() {
                V.isDeeplinking ? k.DEEPLINKING && b.Read() : V.isCookie && k.COOKIE && D.Read();
            },
            FirstSetup: function() {
                if (!O.stepSetupInit) {
                    O.tweenView = new RubyTween(), O.tweenSlide = new RubyTween(), O.tweenCaption = new RubyTween(), 
                    O.tweenClone = new RubyTween(), O.tweenMath = new RubyTween(), O.tweenParallaxScroll = new RubyTween(), 
                    O.fxCSS = {}, O.fxMath = {}, O.ssIDRandom = [], O.fxMathRandom = [], O.flickrData = {}, 
                    O.flickrListPhoto = [], k.loop = V.isLoop, O.$swipeCur = i, O.xBuffer = 0, O.can = {
                        viewport: n
                    }, O.pag = {}, O.nLoadAtFirst = 0, O.nLoaded = 0, k.preloaded = !1;
                    var a = " " + O.ns, r = a + O.browser;
                    k.ie7 && (r += a + "ie7"), k.mobile && (r += a + "mobile"), k.androidNative && (r += a + "androidNative"), 
                    t.addClass(r), O.fx = {}, O.slot = {}, O.speed = {}, O.delay = {}, O.IDsOnNode = [], 
                    X.Data(n, {
                        id: "home",
                        opts: e.extend(!0, {}, V),
                        tweenLayer: new RubyTween()
                    });
                }
                var s = "widthSlide", o = V.fx, l = V[o] && V[o][s] ? V[o][s] : V[s];
                O.wSlideGrid = X.ParseGrid(l, !0);
                var u = V.responsiveLevels;
                e.isArray(u) && u.length && (O.wGrid = X.ParseGrid(V.width, !0), O.hGrid = X.ParseGrid(V.height, null === V.width), 
                O.maGrid = X.ParseGrid(V.margin, !0), O.paGrid = X.ParseGrid(V.padding2, !1)), k.heightFixed = e.isArray(O.hGrid), 
                k.fullscreen && (k.heightFixed = !0);
            },
            IDNum: function() {
                if (r = $.num = O.$s.length, !O.stepSetupInit) {
                    var e = V.idBegin;
                    "begin" == e ? e = 0 : "center" == e ? e = ~~(r / 2 - .5) : "centerRight" == e ? e = ~~(r / 2) : "end" == e ? e = r - 1 : -1 == e || e >= r ? e = r - 1 : e <= 0 && (e = 0), 
                    void 0 === $.idCur && ($.idCur = O.idBegin = e);
                }
                k.nav = V.isNav && k.NAV, k.pag = V.isPag && k.PAG, k.cap = V.isCap && k.CAP, 1 == r && (k.nav = !!V.oneSlide.isNav && (V.isNav && k.NAV), 
                k.pag = !!V.oneSlide.isPag && (V.isPag && k.PAG));
            },
            Transform: function() {
                O.xTimer = 100, O.easing = V.swipe.easing, O.moveBy = O.moveLastBy = "swipe";
            },
            Direction: function() {
                function e(e) {
                    var t = "hor" == O[e].dirs;
                    O[e].cssTf = k.tf ? s : t ? "left" : "top", O[e].pageXY = t ? "pageX" : "pageY";
                }
                O.can.dirs = "ver" != V.direction || k.mobile ? "hor" : "ver", O.addInfo && O.addInfo.pagDirs || (O.pag.dirs = V.pag.direction), 
                k.dirsHor = "hor" == O.can.dirs, k.tf || (s = O.cssTf = k.dirsVer ? "top" : "left"), 
                e("can"), e("pag");
            },
            Fx: function() {
                var t = [ "cssOne", "cssTwo", "cssThree", "cssFour", "none" ], a = [ "coverflow3D" ];
                O.fxType = function() {
                    for (o = 0; o < t.length; o++) if (V.fx == t[o]) return t[o];
                    return "line" === V.fx ? "line" : -1 !== e.inArray(V.fx, a) ? "3d" : "math";
                }();
                var i = [ "randomMath" ];
                i = e.merge(i, t), i = e.merge(i, V.fxMathName), O.fxInLayoutDot = i;
            },
            Layout: function() {
                var t = [ "mask", "coverflow3D", "zoom3D" ], a = [ "cssOne", "cssTwo", "cssThree", "cssFour" ];
                O.fxView = "basic", -1 !== e.inArray(V.fx, t) && (O.fxView = V.fx), -1 !== e.inArray(V.fx, a) && k.RUBYANIMATE && (O.fxView = "css"), 
                -1 !== e.inArray(V.fx, V.fxMathName) && (O.fxView = "math"), 1 === r && (O.fxView = "basic"), 
                k.dirsHor || (O.fxView = "basic"), /^(mask|coverflow3D)$/.test(O.fxView) && !rt01MODULE["VIEW" + O.fxView.toUpperCase()] && (O.fxView = "basic"), 
                O.View = X.ProperCase(O.fxView), O.fxLayout = "line", V.stepNav = V.stepPlay = 1, 
                "line" == V.fx ? O.fxLayout = "line" : (-1 !== e.inArray(V.fx, O.fxInLayoutDot) || e.isArray(V.fx)) && (O.fxLayout = "dot");
                var i = [ "mask", "coverflow3D" ];
                -1 !== e.inArray(V.fx, i) && (O.fxLayout = "line");
            },
            Center: function() {
                1 == r || 2 == r ? "line" === O.fxLayout && (k.center = k.loop = !1) : (k.center = V.isCenter, 
                k.loop = V.isLoop), k.centerLoop = k.center && k.loop;
                var t = O.center = {
                    isOdd: X.C(r / 2) > r / 2
                };
                k.centerLoop ? (!!O.$slClone && O.$slClone.remove(), O.$slClone = e(""), t.nLeft = ~~((r - 1) / 2), 
                t.nRight = t.nLeft + (t.isOdd ? 0 : 1)) : _.CenterNoLoop();
            },
            CenterNoLoop: function() {
                O.center.nLeft = $.idCur, O.center.nRight = r - $.idCur - 1;
            },
            SwipeEvent: function() {
                O.stepSetupInit || (O.swipeTypeCur = null);
            },
            Responsive: function() {
                O.pa = [], k.res = e.isArray(O.wGrid) && k.RESPONSIVE, k.res && (O.wRes = O.wGrid[0], 
                O.hRes = k.heightFixed ? O.hGrid[0] : 0, k.fullscreen && (0 == O.hRes && (O.hRes = O.wRes), 
                O.rRes = O.wRes / O.hRes)), O.stepSetupInit || (O.rate = 1);
            },
            Grab: function() {
                V.isViewGrabStop ? n.addClass(O.ns + "grabstop") : n.removeClass(O.ns + "grabstop");
            },
            Pagination: function() {
                function t(e, t) {
                    return !k.pagOutside && !k.pagList && e.isPag && "ver" == t.direction;
                }
                var a = V.pag;
                "tab" == a.type && (a.type = "tabs"), k.pagList = "list" == a.type, k.pagTabs = "tabs" == a.type, 
                k.pagThumb = "thumbnail" == a.type, k.alignJustify = "justify" == a.align, k.pagList && (k.swipeOnPag = !1), 
                O.pagVer = t(V, V.pag) && "ver" == O.pag.dirs ? "begin" == V.pag.position ? "begin" : "end" : null, 
                O.stepSetupInit && t(F, F.pag) && n.css({
                    "margin-left": "",
                    "margin-right": ""
                }), k.pagItemSizeSelf = "self" == a.typeSizeItem && !k.alignJustify, (e.isNumeric(a.width) || e.isNumeric(a.height)) && (k.pagItemSizeSelf = !1);
            },
            Slideshow: function() {
                var e = V.slideshow;
                k.slideshow = V.isSlideshow && k.SLIDESHOW, k.timer = k.slideshow && e.isTimer && k.TIMER, 
                O.timer = "arc" != e.timer || k.canvas2d ? e.timer : "line", k.playpause = k.slideshow && e.isPlayPause, 
                k.ssControl = k.timer || k.playpause, k.autoRun = !(e.isPlayPause && !e.isAutoRun), 
                k.ssPauseAbsolute = !k.autoRun, k.ssRunInto = e.isRunInto, k.hoverAction = !1, k.stop = !1;
            },
            LastSetup: function() {
                O.stepSetupInit && k.heightFixed && n.css("height", ""), "eerf" == V.rev[0] && j.Eerf();
            },
            Ruby: function() {
                _.FirstSetup(), _.IDNum(), _.Transform(), _.Direction(), _.Fx(), _.Layout(), _.Center(), 
                _.SwipeEvent(), _.Responsive(), _.Grab(), _.Pagination(), _.Slideshow(), _.LastSetup(), 
                !O.stepSetupInit && t.removeAttr("data-" + rt01VA.rubyData).removeData(rt01VA.rubyData), 
                void 0 === O.stepSetupInit && (O.stepSetupInit = 1), Y.AddClass();
            },
            Slides: function() {
                k.tf || O.$s.css({
                    left: "",
                    top: ""
                });
                var t = O.fxType;
                O.$s.each(function(a) {
                    var i = e(this), n = X.Data(i), r = n.opts || {};
                    if (n.id = a, k.pag && X.Data(O.$pagItem.eq(a), {
                        id: a
                    }), void 0 === O.fx[a] || e.isEmptyObject(r) || "apiAdd" == n.loadBy) {
                        var s = "data-" + V.nameDataSlide, o = i.data(V.nameDataSlide), l = 'options on "XX" in Slide YY not valid'.replace(/XX/, s).replace(/YY/, a);
                        o = X.StringToJson(o, l), r = e.extend(!0, r, V, o), i.removeAttr(s);
                    } else if (e.isPlainObject(O.optsUpdate) && !e.isEmptyObject(O.optsUpdate)) r = e.extend(!0, r, O.optsUpdate); else if (e.isPlainObject(O.optsSlides) && e.isPlainObject(O.optsSlides[a])) r = e.extend(!0, r, O.optsSlides[a]); else if (!k.apiRemove) return;
                    /^(cssOne|cssTwo|cssThree|cssFour)$/.test(t) ? O.fx[a] = ee.GetFxCss(t, r) : O.fx[a] = "none" == t ? "none" : "line" == O.fxLayout ? null : r.fx, 
                    O.slot[a] = r.slot, O.speed[a] = r.speed, O.delay[a] = r.slideshow.delay, r.imageback.posGrid = X.ParseGrid(r.imageback.position, !0), 
                    n.opts = r, O.speed[a] < 200 && (O.speed[a] = 200), O.delay[a] < 500 && (O.delay[a] = 500), 
                    k.CLASSADD && (O.classAdd[a] = R.Filter(r)), O.IDsOnNode[a] = i.attr("id"), k.IFRAME && h.Init(i), 
                    n.control = r.control, n.tweenLayer = n.tweenLayer || new RubyTween();
                }), O.tDelay = O.delay[$.idCur], 1 === O.stepSetupInit && (O.stepSetupInit = 2), 
                k.pag && p.FirstLastClass();
            }
        }, Y = {
            AddClass: function() {
                var e = " " + O.ns, a = "{ns}type-{type} {ns}layout-{layout} {ns}fxlayout-{fxlayout} {ns}fxview-{fxview} {ns}fxtype-{fxtype} {ns}height-{height} {ns}lazy-{lazytype}".replace(/\{ns\}/g, O.ns).replace(/\{type\}/, V.type).replace(/\{layout\}/, V.layout).replace(/\{fxlayout\}/, O.fxLayout).replace(/\{fxview\}/, O.fxView).replace(/\{fxtype\}/, O.fxType).replace(/\{height\}/, k.heightFixed ? "fixed" : "auto").replace(/\{lazytype\}/, V.lazyType);
                a += e + (k.tf ? "transform" : "no-transform"), a += k.opacity ? "" : e + "no-opacity", 
                a += null !== V.skin ? e + V.skin : "", k.showInRange || (a += e + "none"), t.addClass(a), 
                k.pag && p.ToggleClass(!0);
            },
            RemoveClass: function() {
                var e = "{ns}type-{type} {ns}layout-{layout} {ns}fxlayout-{fxlayout} {ns}fxview-{fxview} {ns}fxtype-{fxtype} {ns}height-{height} {ns}lazy-{lazytype}".replace(/\{ns\}/g, O.ns).replace(/\{type\}/, F.type).replace(/\{layout\}/, F.layout).replace(/\{fxlayout\}/, B.fxLayout).replace(/\{fxview\}/, B.fxView).replace(/\{fxtype\}/, B.fxType).replace(/\{height\}/, U.heightFixed ? "fixed" : "auto").replace(/\{lazytype\}/, F.lazyType);
                e += null !== F.skin ? " " + O.ns + F.skin : "", t.removeClass(e), k.pag && p.ToggleClass(!1);
            },
            Reset: function() {
                if ("dot" == O.fxLayout) {
                    var e = {};
                    e[s] = "", O.$s.css(e), Q.AnimateX(i, 0, 1, 1);
                }
                if (/^(basic)$/.test(O.fxView)) {
                    var t = {};
                    t[O.prefix + "perspective"] = "", n.css(t);
                }
            },
            CanvasMask: function() {
                var e = X.Data($.idCur).opts.isMask, t = O.ns + "mask";
                "auto" == e ? /^css/.test(O.fxType) ? n.removeClass(t) : n.addClass(t) : !1 === e ? n.removeClass(t) : n.addClass(t);
            },
            Resize: function() {
                X.RunEvent("resize"), k.pag && !k.pagList && p.TypeSizeItem(), Z.WidthForRuby(), 
                k.res && u.UpdateVars(), k.IMAGE && f.UpdateAllImageBy("size"), k.VIDEOBACK && v.UpdateAllVideoBy("size", "$videoback"), 
                k.heightFixed && Z.HeightFixedForRuby(), Z.EndOfRuby(), k.res && k.fullscreen && T.Variable(), 
                k.IMAGE && f.UpdateAllImageBy("position"), k.VIDEOBACK && (v.UpdateAllVideoBy("position", "$videoback"), 
                v.UpdateAllVideoBy("size", "$videobackPoster"), v.UpdateAllVideoBy("position", "$videobackPoster")), 
                k.PARALLAX && w.Check(O.$s), J.CombineAtFirst(), setTimeout(function() {
                    k.LAYER && (y.Update(), y.Resume($.idCur), y.Resume("home")), k.HOTSPOT && m.UpdatePosition($.idCur);
                }, 30), Z.AnimHeightForRuby(!0), X.RunEvent("resizeEnd");
            }
        }, j = {
            Check: function() {
                var e = V.rev[0], t = !1;
                if ("erp" == e || "eerf" == e) t = !0; else if ("omed" == e) {
                    var a = V.rev[1].split("").reverse().join("");
                    -1 !== document.URL.indexOf(a) && (t = !0);
                }
                return t;
            },
            Eerf: function() {
                var t = {
                    cssOne: null,
                    cssTwoIn: null,
                    cssTwoOut: null,
                    cssEasing: null,
                    isSlideshow: !1,
                    name: null
                };
                null === (V = e.extend(!0, V, t)).fx && (V.fx = O.fxLayout = "line"), V.pag.direction = "hor";
            }
        }, K = {
            Structure: function() {
                K.Anchor(), K.Viewport(), K.Canvas(), K.OverlayGhost(n), k.LAYER && y.LayerHomeMarkup(), 
                O.$s = e(""), i.children().each(function() {
                    K.Slide(e(this));
                }), O.$s.each(function() {
                    var t = e(this);
                    K.CapPagHTML(t), k.VIDEOIFRAME && g.ConvertTag(t);
                });
            },
            Anchor: function() {
                if (k.fullwidth || k.fullscreen) {
                    var a = O.ns + "anchor";
                    O.$anchor = e("<div/>", {
                        class: a
                    }), t.before(O.$anchor), J.Anchor();
                }
            },
            Viewport: function() {
                var a = O.ns + V.nameViewport, i = t.children("." + a);
                i.length ? n = i : (t.wrapInner(e("<div/>", {
                    class: a
                })), n = t.children("." + a)), O.$viewport = n;
            },
            Canvas: function() {
                var t = O.ns + V.nameCanvas, a = V.tagCanvas, r = n.children("." + t);
                if (r.length) a = r[0].tagName.toLowerCase(); else {
                    var s = n.children();
                    if (s.length) {
                        "div" == a && "li" == s[0].tagName.toLowerCase() && (a = "ul");
                        var o = "ul" == a ? "<ul/>" : "<div/>";
                        s.wrapAll(e(o, {
                            class: t
                        }));
                    } else n.append(e("<div/>", {
                        class: t
                    }));
                }
                i = O.$canvas = n.children("." + t), X.Data(i, {
                    tagName: a,
                    pos: {
                        x: 0
                    }
                });
            },
            OverlayGhost: function(t) {
                var a = e("<div/>", {
                    class: O.ns + "overlay-ghost"
                });
                t.append(a);
            },
            Slide: function(t) {
                var a = O.ns + V.nameSlide, n = t[0].tagName.toLowerCase();
                if (/^(div|li|article|section)$/.test(n) || t.hasClass(a)) ; else {
                    if (/^(style|script)$/.test(n)) return;
                    if (/^(br)$/.test(n)) return t.remove(), !1;
                    var r = X.Data(i).tagName, s = e("ul" == r ? "<li/>" : "<div/>", {
                        class: a
                    });
                    t.wrap(s), t = t.closest("." + a);
                }
                var o = t.data("link"), l = t.data("link-target") || "", u = null;
                void 0 === o || /^\s*$/.test(o) || (u = o, t.addClass(X.NS("{ns}link-onslide")).removeAttr("data-link data-link-target")), 
                t.addClass(a).addClass(X.NS("{ns}sleep {ns}no-loaded")).addClass(O.deactived);
                return X.Data(t, {
                    link: u,
                    linkTarget: l,
                    isLoading: !1,
                    isLoaded: !1,
                    isImgback: !1,
                    isVideo: !1,
                    isAjax: !1,
                    isPagEmpty: !1,
                    loadBy: "normal"
                }), K.LoaderAdd(t, t, "$slLoader"), O.$s = O.$s.add(t), t;
            },
            CapPagHTML: function(t) {
                var a = O.ns, i = "", n = X.Data(t);
                t.find("." + a + V.nameImageBack).each(function() {
                    var t = e(this), a = this.tagName.toLowerCase();
                    "img" === a ? i = t.attr("alt") : "a" === a && (i = t.html());
                });
                var r = t.children("." + a + "capitem");
                r.length && (i = r.html(), r.remove()), n.htmlCap = i;
                var s = X.Find(t, X.NS(".{ns}pagitem"));
                s.length || (s = e("<div/>", {
                    class: a + "pagitem"
                }), n.isPagEmpty = !0), n.$pagItem = s, s.remove();
            },
            SearchNode: function(a) {
                var i = e(), n = O.name;
                if (null !== n && void 0 !== n && (e(a).each(function() {
                    var t = e(this);
                    t.data(rt01VA.rubyName + "Markup") === n && (i = t);
                }), i.length)) return i;
                var r = X.Find(t, a);
                return r.length ? r : e();
            },
            Into: function(a, i) {
                var r, s = V.markup;
                switch (a) {
                  case "viewport":
                    r = n;
                    break;

                  case "nav":
                    O.$nav || (O.$nav = e("<div/>", {
                        class: O.ns + V.nameNav
                    }), K.Into(s.navInto, O.$nav)), r = O.$nav;
                    break;

                  case "ssControl":
                    r = O.$ssControl;
                    break;

                  default:
                    r = t;
                }
                r.append(i);
            },
            LoaderAdd: function(t, a, i) {
                if (V.isLoader) {
                    var n = "$loaderThumb" === i ? X.NS(V.markup.loaderThumb) : X.NS(V.markup.loader), r = e(n);
                    X.Data(t)[i] = r, a.append(r);
                }
            },
            LoaderRemove: function(e, t) {
                var a = X.Data(e)[t];
                a && a.remove();
            },
            DivImg: function(a, i, n) {
                var r = O.ns + V[a + "Name"], s = X.ProperCase(a);
                if (O[a] = t.find("." + r), V["is" + s]) {
                    if (!O[a].length) {
                        var o = t.data("img" + a), l = o ? '<div class="' + r + '"><img src="' + o + '" alt="[' + a + ']"></div>' : '<div class="' + r + '"></div>';
                        n && i.after(e(l)) || i.before(e(l));
                    }
                } else O[a].length && O[a].remove();
            },
            Other: function() {
                F.isOverlay != V.isOverlay && K.DivImg("overlay", i, !0);
            }
        }, q = {
            Way: function() {
                function e(e) {
                    return X.Data(O.$s.eq(e)).isLoading;
                }
                var t = [], a = $.idCur, i = V.lazySmart;
                O.nLoadParallel = i.amountEachLoad + 1, O.preload = i.preload, ("all" == i.preload || i.preload > r) && (O.preload = r), 
                i.preload <= 0 && (O.preload = 1), "none" === V.lazyType && (O.preload = 0), "single" === V.lazyType && (O.preload = 1), 
                q.IDMap(), $.num > 0 && (k.centerLoop ? function() {
                    for (var a = O.idMap, i = X.C(r / 2 - 1), n = i, s = 1, o = 1, l = !0, u = 0; u < r; u++) 0 == u ? !e(a[n]) && t.push(a[n]) : (l ? (n = i + o, 
                    o++, l = !1) : (n = i - s, s++, l = !0), !e(a[n]) && t.push(a[n]));
                }() : 0 == a ? function() {
                    for (var a = 0; a < r; a++) !e(a) && t.push(a);
                }() : function() {
                    for (var i = 1, n = 1, s = 0, o = 0, l = 0; l < r; l++) 0 == l ? !e(O.idBegin) && t.push(O.idBegin) : a != r - 1 && (i || s) ? (!e(a + n) && t.push(a + n), 
                    s ? n++ : i = 0, t[l] >= r - 1 && (o = 1)) : (!e(a - n) && t.push(a - n), n++, i = !o, 
                    t[l] <= 0 && (s = 1));
                }()), O.IDToLoad = t;
            },
            IDMap: function() {
                var e = [];
                if (k.centerLoop) {
                    var t = X.C(r / 2) + $.idCur;
                    for (O.center.isOdd || t++, t >= r && (t -= r), o = 0; o < r; o++) t >= r && (t = 0), 
                    e[o] = t++;
                } else for (o = 0; o < r; o++) e.push(o);
                O.idMap = e;
            },
            ParallelWhenSlideBegin: function() {
                var e = O.IDToLoad;
                if (e.length && e.shift(), O.nLoadAtFirst++, e.length) {
                    var t = !1;
                    /^(none|all)$/.test(V.lazyType) && (t = !0), "none" !== V.lazyType && O.nLoadAtFirst < O.preload && (t = !0), 
                    t && q.SlideBegin(O.$s.eq(e[0]));
                }
            },
            ParallelWhenSlideEnd: function(e) {
                var t = O.IDToLoad, a = V.lazySmart;
                if (O.nLoaded++, O.nLoaded === r && q.LoadedAllSlides(), k.preloaded || O.nLoaded != O.preload || (k.preloaded = !0), 
                !/^(none|single)$/.test(V.lazyType) && (k.preloaded && (O.nLoadParallel--, O.nLoadParallel || (O.nLoadParallel = V.lazySmart.amountEachLoad)), 
                t.length && k.preloaded && O.nLoadParallel >= a.amountEachLoad && !X.Data(e).isLoadAdd)) for (o = O.nLoadParallel; o > 0; o--) q.Next();
            },
            Add: function(e) {
                var t = X.Data(e);
                if (t && !t.isLoading) {
                    k.loadAll = !1;
                    var a = O.IDToLoad;
                    if (a.length) for (o = a.length - 1; o >= 0; o--) a[o] === $.idCur && (a.splice(0, 0, a.splice(o, 1)[0]), 
                    o = -1);
                    q.Next(e);
                }
            },
            Next: function(e) {
                $.num && O.IDToLoad.length && (e || (e = O.$s.eq(O.IDToLoad[0])), q.SlideBegin(e));
            },
            SlideBegin: function(e) {
                var t = X.Data(e);
                e.length && (X.RunEvent("loadBegin", e, t.id), q.ParallelWhenSlideBegin(), e.removeClass(O.ns + "sleep"), 
                t.isLoading = !0, t.id === O.idBegin && (0 == $.idCur && X.RunEvent("start"), X.ToggleSlide()), 
                k.VIDEOBACK && v.SetupAtLoadSlideBegin(e), k.IMAGE && f.SetupAtLoadSlideBegin(e), 
                t.isVideoback || t.imageLen || q.SlideEnd(e));
            },
            SlideEnd: function(e) {
                var a = X.OuterHeight(e, !0), i = X.Data(e), n = i.id, r = O.ns;
                if (i.height = a, i.isLoaded = !0, e.removeClass(r + "no-loaded"), k.initLoaded || (t.addClass(r + "ready").removeClass(r + "init"), 
                k.heightFixed ? Z.HeightFixedForRuby() : Z.HeightAutoForRuby(a), Z.EndOfRuby(), 
                W.Load()), k.IMAGE && f.BackPosition(i.$imgback), k.VIDEOBACK) {
                    v.Position(i.$videoback);
                    var s = i.$videobackPoster;
                    v.Properties(s), v.SizeResponsive(s), v.Position(s), n == $.idCur && v.Run("play");
                }
                !k.dirsHor && te.SlideLoaded(), e.addClass(r + "ready"), K.LoaderRemove(e, "$slLoader"), 
                k.pag && p.SetupWhenLoadSlideEnd(e), k.HOTSPOT && (m.Init(e), setTimeout(function() {
                    m.Reset(n);
                }, 10)), k.LAYER && (y.Init(e), n == $.idCur && y.Play(n)), k.LAYERPARALLAX && (C.Init(e), 
                n == $.idCur && C.ToggleEvent(n)), k.VIDEOIFRAME && g.Init(e), k.PARALLAX && w.Check(e), 
                k.slideshow && x.Go("slideLoaded"), X.RunEvent("loadSlide." + n), X.RunEvent("loadEnd", e, n), 
                q.ParallelWhenSlideEnd(e);
            },
            LoadedAllSlides: function() {
                X.RunEvent("loadAll"), k.loadAll = !0, t.addClass(O.ns + "loaded").removeClass(O.ns + "no-loaded"), 
                K.LoaderRemove(t, "$rubyLoader");
            }
        }, Q = {
            AnimateX: function(e, t, a, n, r, s) {
                var o = null === e ? O.$swipeCur : e, l = o.is(i) ? O.can : O.pag, u = n ? t : -t * l.sTranslate + l.xCanvas;
                r = r || O.speed[$.idCur], s = s || O.easing, u = Q.LimitInCarouselX(u), l.xCanvas = u;
                var d = "hor" === l.dirs ? {
                    x: u
                } : {
                    y: u
                }, p = X.GetTween(o);
                a ? p.css(o, d) : p.animate(o, d, {
                    isNew: !0,
                    duration: r,
                    easing: s
                });
            },
            LimitInCarouselX: function(e) {
                if ("line" == O.fxLayout && !k.loop && O.$swipeCur.is(O.$canvas)) {
                    var t = O.can;
                    e > t.xMin ? e = t.xMin : e < t.xMax && (e = t.xMax);
                }
                return e;
            },
            TranslateX: function(t, a, i, n, r) {
                var s;
                s = i ? a : a * O.can.sTranslate, e.isNumeric(n) && (s += n);
                var o = (void 0 === r ? k.dirsHor : r) ? {
                    x: s
                } : {
                    y: s
                };
                X.GetTween(t).css(t, o);
            },
            Balance: function(e, t, a) {
                if (k.loop) {
                    var i = O.nMove > 0, n = i ? {
                        s: 1,
                        id0: 0,
                        idN: r - 1
                    } : {
                        s: -1,
                        id0: r - 1,
                        idN: 0
                    }, l = t ? 1 : X.A(O.nMove);
                    for (n.speed = void 0 === a ? O.speed[$.idCur] : a, n.isNext = i, n.isContinuity = e, 
                    o = 0; o < l; o++) {
                        var u = O.idMap[n.id0], d = O.$s.eq(u), p = O.pBegin[n.idN] + O.can.sTranslate * n.s, c = {};
                        if ("basic" == O.fxView || "mask" == O.fxView) {
                            var f = k.dirsHor ? "Tlx" : "Tly";
                            c[s] = X[f](p), d.css(c);
                        } else if ("coverflow3D" == O.fxView) {
                            var v = V.coverflow3D, g = v.isDeepMulti ? v.zDeep * ((i ? O.center.nRight : O.center.nLeft) + 1) : v.zDeep;
                            O.tweenSlide.css(d, {
                                x: p,
                                z: -g,
                                rotateY: -v.rotate * n.s
                            });
                        }
                        X.Shift(O.idMap, i), X.Push(O.idMap, u, i), X.Shift(O.pBegin, i), X.Push(O.pBegin, p, i);
                        var h = "Balance" + O.View;
                        !!ee[h] && ee[h](n);
                    }
                }
            },
            FillHole: function() {
                if (k.loop) {
                    O.$slClone.length && O.$slClone.remove(), O.$slClone = e("");
                    var t = O.center, a = (O.nMove > 0 ? t.nLeft : t.nRight) - t.nEdge, n = X.A(O.nMove);
                    if (n > a) {
                        for (o = a; o < n; o++) {
                            var s = O.nMove > 0 ? O.idMap[o] : O.idMap[r - 1 - o], l = O.$s.eq(s), u = l.clone().addClass(O.deactived).removeClass(O.ns + V.current).appendTo(i);
                            X.Data(u, {
                                $slSource: l
                            }), O.$slClone = O.$slClone.add(u);
                        }
                        var d = "FillHole" + O.View;
                        !!ee[d] && ee[d](), clearTimeout(N.fillHole), N.fillHole = setTimeout(function() {
                            O.$slClone.remove();
                        }, O.speed[$.idCur] + 10);
                    }
                }
            },
            AnimRebound: function(e) {
                function t() {
                    Q.AnimateX(null, l, 0, 1);
                }
                if (V.isAnimRebound) {
                    var a = O.can, n = (O.fxLayout, "next" == e), r = n ? -1 : 1, o = 150, l = n ? a.xMax : a.xMin, u = 130 * r + l, d = i.css(s), p = 30 * r + (d = k.tf ? "none" == d ? l : X.ValueX(d) : "auto" == d ? l : X.PInt(d));
                    p / r > u / r ? t() : (Q.AnimateX(null, p, 0, 1, o), clearTimeout(N.rebound), N.rebound = setTimeout(t, o));
                }
            },
            Flywheel: function() {
                var e = i.is(O.$swipeCur), t = e ? O.can : O.pag;
                if (!e) {
                    var a = O.tDrag1 - O.tDrag0;
                    if (!(O.xBuffer < 0 && O.xBuffer > t.xMax && a < 200 && X.A(O.xOffset) > 10)) return;
                    var n = O.pageX1 - O.x0Fix, r = O.xBuffer + n;
                    r + 50 > 0 ? r = 0 : r - 50 < t.xMax && (r = t.xMax), p.TranslateTo(r);
                }
            },
            CanvasBegin: function() {
                var e = O.fxLayout, t = O.can, a = 0;
                if ("line" == e && k.center) {
                    var n = k.dirsHor ? O.wSlide : X.OuterHeight(O.$s.eq($.idCur), !0);
                    a = X.R((O.sRuby - n) / 2);
                }
                if (t.xCanvas = a, "dot" == e) t.xMin = t.xMax = 0; else if ("line" == e) {
                    t.xMin = a;
                    var r = X.Sum(O.sSlideMap) - (O.ma[0] + O.ma[1]);
                    t.xMax = O.wRuby < r ? -(r - O.wRuby + a) : a;
                }
                O.$swipeCur = i, k.loop ? Q.AnimateX(null, a, !0, !0) : Q.AnimateX(null, $.idCur, !0);
            }
        }, Z = {
            Margin: function() {
                var t = O.wRuby;
                O.maGridCur = e.isArray(O.maGrid) ? O.maGrid[O.index] : null, null !== O.maGridCur ? O.ma = [ X.PercentToPixel(O.maGrid[O.index], t), X.PercentToPixel(O.maGrid[O.index], t) ] : (k.dirsHor && t !== X.InnerWidth(n) && (O.ma[0] = X.PInt(n.css("padding-left")), 
                O.ma[1] = X.PInt(n.css("padding-right"))), k.dirsHor || O.hRuby === X.InnerHeight(n) || (O.ma[0] = X.PInt(n.css("padding-top")), 
                O.ma[1] = X.PInt(n.css("padding-bottom"))));
            },
            TranslateS: function() {
                Z.Margin(), O.wSlideFull = O.can.sTranslate = O.wSlide + O.ma[0] + O.ma[1];
            },
            WidthForRuby: function() {
                k.pag && O.pagVer && (!O.pag.maRight && p.GetSizeOfItems(), p.MarginOnViewport()), 
                J.Anchor(), O.wRuby = X.Width(n);
                var t = O.index = X.GetIndexInResponsive(V.responsiveLevels);
                O.wGridCur = e.isArray(O.wGrid) ? O.wGrid[t] : null, O.hGridCur = e.isArray(O.hGrid) ? O.hGrid[t] : null, 
                O.paGridCur = e.isArray(O.paGrid) ? O.paGrid[t] : null;
                var a = null;
                a = k.dirsHor ? X.PercentToPixel(O.wSlideGrid[O.index], O.wRuby) : O.wRuby, O.wSlide = X.PInt(a);
            },
            HeightLockForAnim: function() {
                n.css("height", X.Height(n)), clearTimeout(N.heightLock), N.heightLock = setTimeout(function() {
                    n.css("height", "");
                }, V.speedHeight + 10);
            },
            AnimHeightForRuby: function(e) {
                function t(t) {
                    if (O.hRuby = t, k.dirsHor || (O.sRuby = t), null === V.speedHeight || e) X.Scroll.Check(); else {
                        var i = V.speedHeight - a;
                        O.tweenView.animate(n, {
                            height: t
                        }, {
                            isNew: !0,
                            duration: i,
                            complete: function() {
                                n.css("height", ""), X.Scroll.Check();
                            }
                        });
                    }
                }
                var a = 30, i = X.OuterHeight(O.$s.eq($.idCur), !0);
                setTimeout(function() {
                    !k.heightFixed && (O.hRuby != i && i > 0 || e) && (t(i), !k.pag || k.pagList || "ver" != O.pag.dirs || k.pagOutside || "full" != V.pag.sizeAuto || p.PropAndStyle());
                }, a);
            },
            HeightAutoForRuby: function(e) {
                O.hRuby = X.PInt(e);
            },
            HeightFixedForRuby: function() {
                function t(e) {
                    n.css("height", e);
                }
                if (k.fullscreen) {
                    var a = G.height(), i = O.$anchor.offset().top;
                    if (i < a && (a -= i), null !== V.offsetBy) {
                        var r = e(V.offsetBy);
                        r.each(function() {
                            a -= X.OuterHeight(e(this), !0);
                        }), r.find("img").length && G.on("load", function() {
                            $.refresh();
                        });
                    }
                    O.hRuby = a, t(O.hRuby);
                } else O.hRuby = null, e.isArray(O.hGrid) && (e.isNumeric(O.hGridCur) ? O.hRuby = O.hGridCur : e.isArray(O.wGrid) && (O.hRuby = X.R(O.hGrid[0] * O.rate))), 
                O.hRuby && t(O.hRuby);
            },
            EndOfRuby: function() {
                var e = X.Width(n);
                (k.fullwidth || k.fullscreen) && (e = G.width()), O.wSlide !== e && (Z.WidthForRuby(), 
                k.res && u.UpdateVars(), k.heightFixed ? Z.HeightFixedForRuby() : Z.HeightAutoForRuby(X.OuterHeight(O.$s.eq($.idCur), !0))), 
                O.sRuby = k.dirsHor ? O.wRuby : O.hRuby;
            }
        }, J = {
            CombineAtFirst: function() {
                if (/^(line|dot)$/.test(O.fxLayout) && (O.sCanvas = k.dirsHor ? O.wSlide : O.wRuby, 
                i.css("width", O.sCanvas)), Z.TranslateS(), "line" == O.fxLayout) {
                    if (k.centerLoop) {
                        for (var e = 0, t = 0; e < O.wRuby; ) e = (O.wSlide + O.ma[0] + O.ma[1]) * (2 * t + 1), 
                        t++;
                        var a = t - 1;
                        2 * a >= r && (a = ~~((r - 1) / 2)), O.center.nEdge = a;
                    }
                    var n = "TFSlide" + O.View;
                    !!ee[n] && ee[n]();
                }
                Q.CanvasBegin(), k.pag && !k.pagList && (p.CSSPosForPag(), p.PropAndStyle(), p.PosAndSizeOfItems(), 
                p.UpdateThumbnail(), V.pag.isMark && p.SizePosOfMark(), p.PosCenterForItemCur(!0, !0), 
                setTimeout(function() {
                    p.VerToHor();
                }, 40));
            },
            SlideBasic: function() {
                function e(e) {
                    return X.OuterHeight(O.$s.eq(e), !0) + O.ma[0] + O.ma[1];
                }
                var t = O.pBegin = [], a = O.sSlideMap = [], i = k.centerLoop ? O.center.nLeft : 0;
                if (k.dirsHor) for (o = 0; o < r; o++) a[o] = O.wSlideFull, t[o] = a[o] * (-i + o); else if (k.centerLoop) {
                    var n = 0, s = 0;
                    for (o = i; o < r; o++) a[o] = e(O.idMap[o]), t[o] = n, n += a[o];
                    for (o = i - 1; o >= 0; o--) a[o] = e(O.idMap[o]), s -= a[o], t[o] = s;
                } else for (o = 0; o < r; o++) 3[o] = e(o), t[o] = a[o] * o;
            },
            Anchor: function() {
                if (k.fullwidth || k.fullscreen) {
                    var e = G.width(), a = O.$anchor.width(), i = O.$anchor.offset().left;
                    a === e ? t.css({
                        width: "",
                        left: ""
                    }) : t.css({
                        width: ~~e,
                        left: -Math.ceil(i)
                    });
                }
            }
        }, ee = {
            TFSlideBasic: function() {
                J.SlideBasic();
                var e = O.can, t = "hor" == e.dirs ? "Tlx" : "Tly";
                for (O.tfMap = [], o = 0; o < r; o++) {
                    var a = k.centerLoop ? O.idMap[o] : o, i = {};
                    i[e.cssTf] = X[t](O.pBegin[o]), O.tfMap.push(i), O.$s.eq(a).css(i);
                }
            }
        }, te = {
            SlideLoaded: function() {
                ee.TFSlideBasic(), "line" == O.fxLayout && Q.CanvasBegin();
            }
        }, ae = {
            Run: function(e, a, i, n) {
                var s = $.idCur;
                if (!a && e <= $.num || a && s !== e) {
                    O.ts = {
                        num: e,
                        isIDFixed: !!a,
                        isContinuity: !!i,
                        isPagCenter: void 0 === n || !!n
                    }, k.fxRun = !0, t.addClass(O.ns + "fxRun"), k.slideNext = a ? e - $.idCur > 0 : e > 0, 
                    X.RunEvent("fxBegin"), X.Data(O.$s.eq(s)).isLoaded && (k.HOTSPOT && m.Reset(s), 
                    k.LAYER && y.PlayEnd(s), k.VIDEOIFRAME && g.SlideDeactived(s), k.LAYERPARALLAX && C.Reset(s), 
                    k.VIDEOBACK && v.Run("pause")), k.slideshow && x.Go("slideToBegin"), a ? 0 == e && X.RunEvent("start") : (s + e == 0 || s + e - r == 0) && X.RunEvent("start"), 
                    X.RunEvent("before"), a && (O.ts.num -= s);
                    var o;
                    "swipe" == O.moveBy && "swipe" != O.moveLastBy ? o = V.swipe.easing : "tap" == O.moveBy && "tap" != O.moveLastBy && (o = V.fxEasing), 
                    o && (O.easing = o, O.moveLastBy = O.moveBy), ae[O.fxLayout]();
                }
            },
            line: function() {
                var e = O.ts;
                if (ae.ToggleID(), !k.heightFixed && Z.AnimHeightForRuby(), clearTimeout(N.lineEnd), 
                N.lineEnd = setTimeout(ae.End, O.speed[$.idCur]), k.dirsHor) {
                    if (k.centerLoop) e.isIDFixed && Q.FillHole(), Q.Balance(e.isContinuity), !e.isContinuity && Q.AnimateX(i, e.num); else if (!e.isContinuity && Q.AnimateX(i, e.num), 
                    "3d" == O.fxType) {
                        var t = "Restore" + O.View;
                        !!ee[t] && ee[t]();
                    }
                } else if (k.centerLoop && 1 == X.A(e.num)) {
                    var a = e.num > 0 ? $.idLast : $.idCur, n = -((X.OuterHeight(O.$s.eq(a), !0) + O.ma[0] + O.ma[1]) * e.num - O.can.xCanvas);
                    Q.Balance(e.isContinuity), !e.isContinuity && Q.AnimateX(i, n, !1, !0);
                }
            },
            dot: function() {
                var e = O.ts;
                "math" == O.fxType && (e.isDelayWhenToggleID = !0), ae.ToggleID(), !k.heightFixed && Z.AnimHeightForRuby(), 
                V.isBodyMaskInFxCSS && "css" === O.fxView && O.$body.addClass(O.ns + "mask-x"), 
                ne.Init();
            },
            ToggleID: function() {
                !k.heightFixed && null !== V.speedHeight && Z.HeightLockForAnim();
                var e = O.ts, t = $.idCur, a = O.nMove = e.num;
                $.idLast = t, t += a, k.loop && (a < 0 && t < 0 ? t = r + t : a > 0 && t >= r && (t -= r)), 
                X.RunEvent("beforeSwapIDCur"), $.idCur = t, X.RunEvent("afterSwapIDCur"), e.isDelayWhenToggleID ? setTimeout(X.ToggleSlide, 10) : X.ToggleSlide(), 
                ae.AfterToggleID();
            },
            AfterToggleID: function() {
                if (k.pag && !k.pagList && O.ts.isPagCenter && ("swipe" == O.moveBy || "tap" == O.moveBy && V.pag.isItemCurCenterWhenTap || "ver" == O.pag.dirs)) {
                    var e = "ver" == O.pag.dirs;
                    p.PosCenterForItemCur(e);
                }
                k.LAYER && y.Update($.idCur), k.VIDEOBACK && v.Run("play");
            },
            End: function() {
                var e = $.idCur;
                V.isBodyMaskInFxCSS && "css" === O.fxView && O.$body.removeClass(O.ns + "mask-x"), 
                k.fxRun = !1, t.removeClass(O.ns + "fxRun"), X.RunEvent("fxEnd"), k.LAYER && (y.Play(e), 
                y.Resume("home")), k.HOTSPOT && m.UpdatePosition(e), k.LAYERPARALLAX && C.ToggleEvent(e), 
                X.RunEvent("after"), e == r - 1 && X.RunEvent("end"), k.slideshow && (k.hoverAction = !0, 
                V.slideshow.isLoop || $.idLast != r - 1 || 0 != e ? x.Go("slideToEnd") : $.pause());
            }
        }, ie = {
            Setup: function() {
                k.NAV && d.EventTap(), k.PAG && p.EventTap(), k.SLIDESHOW && (x.EventHover(), x.EventTap()), 
                ie.Keyboard(), ie.Wheel({
                    $wheel: n,
                    direction: O.can.dirs,
                    optsWheel: V.wheel
                }), k.PAG && ie.Wheel({
                    $wheel: O.$pag,
                    direction: O.pag.dirs,
                    optsWheel: V.pag.wheel
                }), k.DEEPLINKING && b.Events(), k.FULLSCREEN && T.Events(), ie.Resize();
            },
            GetEventRight: function(e) {
                var t = e;
                return /^touch/.test(e.type) ? t = e.originalEvent.touches[0] : /pointer/i.test(e.type) && (t = e.originalEvent), 
                t;
            },
            CheckMobileTap: function(t) {
                t.each(function() {
                    var t = e(this);
                    t.on(O.ev.swipe.start, function(t) {
                        var a = X.Data(e(this));
                        ie.GetEventRight(t);
                        a.isMobileTap = !0;
                    }), t.on(O.ev.swipe.move, function(t) {
                        var a = X.Data(e(this));
                        ie.GetEventRight(t);
                        a.isMobileTap = !1;
                    });
                });
            },
            DelayToTapNext: function() {
                k.tapEnable = !1, setTimeout(function() {
                    k.tapEnable = !0;
                }, 10);
            },
            PrevCore: function(e) {
                O.moveBy = "tap", e = e || 1, k.loop && $.num > 1 || !k.loop && $.idCur > 0 ? ae.Run(-e) : Q.AnimRebound("prev");
            },
            NextCore: function(e) {
                O.moveBy = "tap", e = e || 1, k.loop && $.num > 1 || !k.loop && $.idCur < r - 1 ? ae.Run(e) : Q.AnimRebound("next");
            },
            Prev: function() {
                if (k.tapEnable) {
                    var e = V.stepNav;
                    ie.PrevCore(e), ie.DelayToTapNext();
                }
            },
            Next: function(e) {
                if (k.tapEnable) {
                    var t = e ? V.stepPlay : V.stepNav;
                    ie.NextCore(t), ie.DelayToTapNext();
                }
            },
            Keyboard: function() {
                H.off(O.ev.key), V.isKeyboard && H.on(O.ev.key, function(e) {
                    if (X.Scroll.Check(!0), k.into) {
                        var t = e.keyCode, a = V.keyboard;
                        t === a.prevKey || t === a.prevAlterKey ? ie.PrevCore(1) : t !== a.nextKey && t !== a.nextAlterKey || ie.NextCore(1);
                    }
                });
            },
            Wheel: function(e) {
                function t(t, a) {
                    function i(e) {
                        0 !== e && void 0 !== e && (n += e > 0 ? e : -e, r = !0);
                    }
                    var n = o.delta, r = !1;
                    switch (k.firefox && (t *= 20, a *= 20), e.optsWheel) {
                      case "auto":
                        i("hor" == e.direction ? t : a);
                        break;

                      case "both":
                        i(t || a);
                    }
                    return n <= -300 ? (ie.PrevCore(1), n = 0, o.type = null) : n >= 300 && (ie.NextCore(1), 
                    n = 0, o.type = null), o.delta = n, r;
                }
                var a = "." + O.ns + O.rubykey, i = "wheel" + a, n = "mousewheel" + a, r = e.$wheel;
                if (e.$wheel) {
                    r.off(i + " " + n);
                    var s = X.Data(r);
                    s.wheelValue || (s.wheelValue = {
                        type: null,
                        delta: 0
                    });
                    var o = s.wheelValue;
                    !1 !== V.wheel && r.on(n + " " + i, function(e) {
                        var a = e.type, i = e.originalEvent;
                        if ((null === o.type || o.type == a) && (null === o.type && (o.type = a), t(i.wheelDeltaX || i.deltaX || 0, i.wheelDeltaY || i.deltaY || 0))) return !1;
                    });
                }
            },
            LoadAll: function() {
                function e() {
                    k.res && O.rateInit != O.rate && $.refresh();
                }
                $.ev.off("loadAll").on("loadAll", function() {
                    e();
                }), G.on("load", function() {
                    setTimeout($.refresh, 100);
                });
            },
            Resize: function() {
                G.off(O.ev.resize), G.on(O.ev.resize, function() {
                    clearTimeout(N.resize), N.resize = setTimeout(function() {
                        k.fullscreen && (O.hRuby = G.height()), k.slideshow && !k.ssPauseAbsolute && X.Scroll.Check(), 
                        !!V.showInRange && k.DISPLAY && S.Toggle(), k.showInRange && (X.A(X.Width(n) - O.wRuby) > 1 || X.A(X.Height(n) - O.hRuby) > 1) && Y.Resize();
                    }, 100);
                }), clearInterval(N.resizeLoop), N.resizeLoop = setInterval(function() {
                    var e, a;
                    if (k.fullwidth || k.fullscreen) {
                        e = G.width();
                        var i = G.height(), r = t.offset().top;
                        k.fullscreen && r < i && (a = i - r);
                    } else e = X.Width(n), a = X.OuterHeight(O.$s.eq($.idCur), !0);
                    k.fxRun || k.swiping || !(X.A(e - O.wRuby) > 1 || X.A(a - O.hRuby) > 1) || Y.Resize();
                }, V.delayUpdate);
            }
        }, ne = {
            Init: function() {
                var e = O.fxType, t = "ToSlide" + O.View;
                "math" == e && ee[t] ? ee[t]() : /^css/.test(e) && ee[t] ? ee[t]() : ne.none();
            },
            End: function(t) {
                null === t ? ae.End() : (e.isNumeric(t) || (t = O.speed[$.idCur]), clearTimeout(N.fxEnd), 
                N.fxEnd = setTimeout(ae.End, t));
            },
            none: function() {
                ae.End();
            }
        }, re = {
            prev: function(e) {
                ie.PrevCore(e);
            },
            next: function(e) {
                ie.NextCore(e);
            },
            first: function() {
                ae.Run(0, !0);
            },
            last: function() {
                ae.Run(r - 1, !0);
            },
            goto: function(t) {
                function a(t) {
                    if (t.length && O.$s.is(t)) {
                        var a = X.Data(t).id;
                        e.isNumeric(a) && ae.Run(a, !0);
                    }
                }
                e.isNumeric(t) && (t = X.PInt(t)), t >= 0 && t < r ? ae.Run(t, !0) : "string" == typeof t ? a(e(t)) : t instanceof jQuery && a(t);
            },
            play: function() {
                k.slideshow && x.Api("play");
            },
            pause: function() {
                k.slideshow && x.Api("pause");
            },
            stop: function() {
                k.slideshow && x.Api("stop");
            },
            playLayer: function() {
                k.LAYER && y.Play($.idCur);
            },
            pauseLayer: function() {
                k.LAYER && y.Pause($.idCur);
            },
            resumeLayer: function() {
                k.LAYER && y.Resume($.idCur);
            },
            requestNativeFS: function() {
                k.FULLSCREEN && T.RequestNativeFS();
            },
            exitNativeFS: function() {
                k.FULLSCREEN && T.ExitNativeFS();
            },
            update: function(t, a) {
                z.oo = F = e.extend(!0, {}, V), z.vava = B = e.extend(!0, {}, O), z.isis = U = e.extend(!0, {}, k), 
                V = e.extend(!0, V, t), O.optsUpdate = t, !!k.awake && !a && $.refresh(), O.optsUpdate = O.addInfo = null;
            },
            updateOnSlides: function(t) {
                e.isPlainObject(t) && (O.optsSlides = t, $.refresh(), O.optsSlides = null);
            },
            refresh: function() {
                _.MergeAllModules(), Y.RemoveClass(), O.name = V.name || t.attr("id") || null, k.RUBYANIMATE && A.UpdateAllKeyframes(), 
                _.Ruby(), k.SLIDESHOW && x.RenderControl(), k.TIMER && I.Render(), k.NAV && d.Render(), 
                k.PAG && p.RenderSelf(), k.CAP && c.Render(), _.Slides(), q.IDMap(), _.DeepLinkCookie(), 
                X.ToggleSlide(), Y.Reset(), Y.Resize(), K.Other(), ie.Setup(), k.APIREMOTE && P.Init(), 
                k.SLIDESHOW && x.UpdateAll();
            },
            destroy: function(e) {
                k.SWIPE && l.Events(!1);
                var a = O.ev.mouse.end + " " + O.ev.swipe.end + " " + O.ev.click;
                V.isNav && O.$prev.add(O.$next).off(a), V.isPag && O.$pagItem.off(a), H.off(O.ev.key), 
                n.off(O.ev.wheel), clearInterval(N.resizeLoop), G.off(O.ev.resize), V.isSlideshow && (clearInterval(N.timer), 
                G.off(O.ev.scroll), this.stop()), e && (t.removeData(rt01VA.rubyName), !!O.$nav && O.$nav.remove(), 
                !!O.$pag && O.$pag.remove(), V.isCap && O.$cap.remove(), V.isSlideshow && (!!O.$timer && O.$timer.remove(), 
                !!O.$playpause && O.$playpause.remove(), !!O.$ssControl && O.$ssControl.remove()), 
                rt01VA.$ruby = rt01VA.$ruby.not(t), t.remove());
            },
            restore: function() {
                W.Load();
            },
            index: function() {
                return $.idCur;
            },
            indexLast: function() {
                return $.idLast;
            },
            width: function() {
                return O.wRuby;
            },
            height: function() {
                return O.hRuby;
            },
            slideLength: function() {
                return $.num;
            },
            slideCur: function() {
                return O.$s.eq($.idCur);
            },
            slideAll: function() {
                return O.$s;
            },
            opts: function() {
                return V;
            },
            optsCur: function() {
                return X.Data($.idCur).opts;
            },
            variable: function() {
                return O;
            },
            browser: function() {
                return O.browser;
            },
            isMobile: function() {
                return k.mobile;
            },
            isTransform: function() {
                return k.tf;
            },
            isTransition: function() {
                return k.ts;
            },
            ev: e("<div/>")
        };
        W.Check();
    }, e.fn[rt01VA.rubyName] = function() {
        var t = arguments, a = rt01VA.rubyName, i = null;
        return e(this).each(function() {
            var n = e(this), r = n.data(a);
            if (void 0 === t[0] && (t[0] = {}), e.isPlainObject(t[0])) r ? e.isEmptyObject(t[0]) || r.update(t[0]) : new e[a](n, t[0]), 
            i = n.data(a); else try {
                r[t[0]](t[1]);
            } catch (e) {
                !!window.console && console.warn("[" + a + ": function not exist!]");
            }
        }), i;
    }, rt01MODULE.AUTOINIT = function(e) {
        document.querySelectorAll(e).forEach(function(e) {
            var t = rt01VA.M.StringToJson(e.getAttribute("data-" + rt01VA.rubyData));
            rt01VA.rubyName;
            if (console.log(t), !("object" != typeof t || t instanceof Array || "{}" == rt01VA.M.JsonToString(t))) {
                if ("string" == typeof t) {
                    var a = 'main options on "data-XX" not valid'.replace(/XX/, rt01VA.rubyData);
                    t = rt01VA.M.StringToJson(t, a), "{}" == rt01VA.M.JsonToString(t) && !1;
                }
                var i = t.isAutoInit;
                void 0 === i && (i = rt01VA.optsDefault.isAutoInit);
            }
        });
    }, document.addEventListener("DOMContentLoaded", function() {
        rt01MODULE.AUTOINIT("." + rt01VA.namespace);
    });
}(jQuery), function(e) {
    e.GSGDEasing = e.GSGDEasing || {
        def: "easeOutQuad",
        swing: function(t, a, i, n, r) {
            return e.GSGDEasing[e.GSGDEasing.def](t, a, i, n, r);
        },
        easeInQuad: function(e, t, a, i, n) {
            return i * (t /= n) * t + a;
        },
        easeOutQuad: function(e, t, a, i, n) {
            return -i * (t /= n) * (t - 2) + a;
        },
        easeInOutQuad: function(e, t, a, i, n) {
            return (t /= n / 2) < 1 ? i / 2 * t * t + a : -i / 2 * (--t * (t - 2) - 1) + a;
        },
        easeInCubic: function(e, t, a, i, n) {
            return i * (t /= n) * t * t + a;
        },
        easeOutCubic: function(e, t, a, i, n) {
            return i * ((t = t / n - 1) * t * t + 1) + a;
        },
        easeInOutCubic: function(e, t, a, i, n) {
            return (t /= n / 2) < 1 ? i / 2 * t * t * t + a : i / 2 * ((t -= 2) * t * t + 2) + a;
        },
        easeInQuart: function(e, t, a, i, n) {
            return i * (t /= n) * t * t * t + a;
        },
        easeOutQuart: function(e, t, a, i, n) {
            return -i * ((t = t / n - 1) * t * t * t - 1) + a;
        },
        easeInOutQuart: function(e, t, a, i, n) {
            return (t /= n / 2) < 1 ? i / 2 * t * t * t * t + a : -i / 2 * ((t -= 2) * t * t * t - 2) + a;
        },
        easeInQuint: function(e, t, a, i, n) {
            return i * (t /= n) * t * t * t * t + a;
        },
        easeOutQuint: function(e, t, a, i, n) {
            return i * ((t = t / n - 1) * t * t * t * t + 1) + a;
        },
        easeInOutQuint: function(e, t, a, i, n) {
            return (t /= n / 2) < 1 ? i / 2 * t * t * t * t * t + a : i / 2 * ((t -= 2) * t * t * t * t + 2) + a;
        },
        easeInSine: function(e, t, a, i, n) {
            return -i * Math.cos(t / n * (Math.PI / 2)) + i + a;
        },
        easeOutSine: function(e, t, a, i, n) {
            return i * Math.sin(t / n * (Math.PI / 2)) + a;
        },
        easeInOutSine: function(e, t, a, i, n) {
            return -i / 2 * (Math.cos(Math.PI * t / n) - 1) + a;
        },
        easeInExpo: function(e, t, a, i, n) {
            return 0 == t ? a : i * Math.pow(2, 10 * (t / n - 1)) + a;
        },
        easeOutExpo: function(e, t, a, i, n) {
            return t == n ? a + i : i * (1 - Math.pow(2, -10 * t / n)) + a;
        },
        easeInOutExpo: function(e, t, a, i, n) {
            return 0 == t ? a : t == n ? a + i : (t /= n / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + a : i / 2 * (2 - Math.pow(2, -10 * --t)) + a;
        },
        easeInCirc: function(e, t, a, i, n) {
            return -i * (Math.sqrt(1 - (t /= n) * t) - 1) + a;
        },
        easeOutCirc: function(e, t, a, i, n) {
            return i * Math.sqrt(1 - (t = t / n - 1) * t) + a;
        },
        easeInOutCirc: function(e, t, a, i, n) {
            return (t /= n / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + a : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + a;
        },
        easeInElastic: function(e, t, a, i, n) {
            var r = 1.70158, s = 0, o = i;
            if (0 == t) return a;
            if (1 == (t /= n)) return a + i;
            if (s || (s = .3 * n), o < Math.abs(i)) {
                o = i;
                r = s / 4;
            } else r = s / (2 * Math.PI) * Math.asin(i / o);
            return -o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - r) * (2 * Math.PI) / s) + a;
        },
        easeOutElastic: function(e, t, a, i, n) {
            var r = 1.70158, s = 0, o = i;
            if (0 == t) return a;
            if (1 == (t /= n)) return a + i;
            if (s || (s = .3 * n), o < Math.abs(i)) {
                o = i;
                r = s / 4;
            } else r = s / (2 * Math.PI) * Math.asin(i / o);
            return o * Math.pow(2, -10 * t) * Math.sin((t * n - r) * (2 * Math.PI) / s) + i + a;
        },
        easeInOutElastic: function(e, t, a, i, n) {
            var r = 1.70158, s = 0, o = i;
            if (0 == t) return a;
            if (2 == (t /= n / 2)) return a + i;
            if (s || (s = n * (.3 * 1.5)), o < Math.abs(i)) {
                o = i;
                r = s / 4;
            } else r = s / (2 * Math.PI) * Math.asin(i / o);
            return t < 1 ? o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - r) * (2 * Math.PI) / s) * -.5 + a : o * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * n - r) * (2 * Math.PI) / s) * .5 + i + a;
        },
        easeInBack: function(e, t, a, i, n, r) {
            return void 0 == r && (r = 1.70158), i * (t /= n) * t * ((r + 1) * t - r) + a;
        },
        easeOutBack: function(e, t, a, i, n, r) {
            return void 0 == r && (r = 1.70158), i * ((t = t / n - 1) * t * ((r + 1) * t + r) + 1) + a;
        },
        easeInOutBack: function(e, t, a, i, n, r) {
            return void 0 == r && (r = 1.70158), (t /= n / 2) < 1 ? i / 2 * (t * t * ((1 + (r *= 1.525)) * t - r)) + a : i / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + a;
        },
        easeInBounce: function(t, a, i, n, r) {
            return n - e.GSGDEasing.easeOutBounce(t, r - a, 0, n, r) + i;
        },
        easeOutBounce: function(e, t, a, i, n) {
            return (t /= n) < 1 / 2.75 ? i * (7.5625 * t * t) + a : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + a : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + a : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + a;
        },
        easeInOutBounce: function(t, a, i, n, r) {
            return a < r / 2 ? .5 * e.GSGDEasing.easeInBounce(t, 2 * a, 0, n, r) + i : .5 * e.GSGDEasing.easeOutBounce(t, 2 * a - r, 0, n, r) + .5 * n + i;
        },
        linear: function(e, t, a, i, n) {
            return t / n;
        }
    };
}(jQuery), function($) {
    "use strict";
    function TIMER(e) {
        var t = this, a = window.rt00VA.data;
        t.id = null, t.rubyID = null, t.save = function() {
            a[t.rubyID].id = t.id;
        }, t.clear = function() {
            t.id = a[t.rubyID].id, clearTimeout(t.id), clearInterval(t.id), a[t.rubyID].id = t.id = null;
        };
        t.rubyID = DB.GetRubyID(e), t.clear();
    }
    function ANIMATE(e) {
        function t() {
            a(), i();
        }
        function a() {
            var t = f.optsEnd.styleBegin, a = f.optsEnd.styleEnd, i = v.opts, n = i.length > 1;
            for (var r in f.propEnd) if (-1 === $.inArray(r, VA.nameTf)) {
                var s = f.propEnd[r];
                a[r] = M.ParseCssStyle(s), -1 !== $.inArray(r, VA.propFixed) ? t[r] = a[r] : (s = e.css(r), 
                t[r] = M.ParseCssStyle(s));
            }
            n && (t = $.extend(t, i[i.length - 2].styleEnd)), null !== v.cssStyle && (t = $.extend(!0, t, v.cssStyle), 
            v.cssStyle = null);
            for (var r in t) a[r] === UNDE && (a[r] = t[r]);
        }
        function i() {
            var t, a = v.opts;
            if (a.length > 1) t = $.extend({}, a[a.length - 2].tfEnd); else if ((t = v.tfCur) == UNDE) {
                var i = MATRIX.getFromItem(e);
                t = MATRIX.parse(i);
            }
            null !== v.cssTf && (t = $.extend(!0, t, v.cssTf), v.cssTf = null);
            var n = TF.FromProp(f.propEnd);
            n = TF.Extend(t, n, f.optsEnd);
            var r = VA.tfDefault;
            for (var s in n) t[s] === UNDE && (n[s] != r[s] ? -1 !== $.inArray(s, VA.propFixed) ? t[s] = n[s] : t[s] = r[s] : delete n[s]), 
            t[s] == r[s] && n[s] == r[s] && (delete t[s], delete n[s]);
            f.optsEnd.tfBegin = t, f.optsEnd.tfEnd = n;
        }
        function n() {
            var t = e.attr("style");
            p = t && -1 !== t.indexOf("overflow"), !!f.optsEnd.start && f.optsEnd.start();
        }
        function r(e, t) {
            if ("string" == typeof t) if (/px$/.test(t)) t = parseFloat(t); else if (/\%$/.test(t)) {
                var a = VA.percentRef[e];
                a !== UNDE && (t = f.size[a] * parseFloat(t) / 100);
            }
            return t;
        }
        function s() {
            f.size = {
                OuterWidth: M.OuterWidth(e),
                OuterHeight: M.OuterHeight(e)
            };
        }
        function o(e, t, a) {
            var i = [ "opacity" ], n = (a - t) * f.xCur;
            return n = -1 !== $.inArray(e, i) ? Math.round(1e3 * n) / 1e3 : Math.round(10 * n) / 10, 
            t + n;
        }
        function l(e, t, a) {
            for (var i = [], n = 0, s = a.length; n < s && (!(n >= 2) || VA.isTf3D); n++) {
                var o = r(e + n, a[n]), l = r(e + n, t[n]);
                l === UNDE && (l = o);
                var u = (o - l) * f.xCur, d = Math.round(10 * (l + u)) / 10;
                i.push(d + "px");
            }
            return i.join(" ");
        }
        function u() {
            var e = v.opts[f.optsPos];
            for (var t in e.styleBegin) {
                var a, i = e.styleBegin[t], n = e.styleEnd[t];
                $.isArray(i) ? a = l(t, i, n) : (i = r(t, i), n = r(t, n), a = $.isNumeric(i) && $.isNumeric(n) ? o(t, i, n) : i), 
                e.isClearStyleDefault && VA.styleDefault[t] === a && (a = ""), g[t] = a;
            }
        }
        function d() {
            var t = v.opts[f.optsPos], a = t.tfBegin, i = t.tfEnd, n = {};
            for (var r in i) {
                var s = TF.ConvertValueToPX(e, r, a[r]), o = s + (TF.ConvertValueToPX(e, r, i[r]) - s) * f.xCur;
                n[r] = o;
            }
            var l = TF.ToCss(n, t), u = VA.prefix + "transform";
            g[u] = l, v.tfCur = n;
        }
        var p, c = this, f = {}, v = {}, g = {};
        c.next = function(t) {
            for (var a = v.opts, i = !1, n = !1, r = v.tCur = VA.tsCur - v.tsInit, o = 0, l = a.length; o < l; o++) {
                if (r < (p = a[o]).tPlay && 0 == o) {
                    t ? (f.optsPos = o, f.xCur = 0) : f.xCur = null;
                    break;
                }
                if (r > p.tEnd && o == l - 1) {
                    f.optsPos = o, f.xCur = 1, n = !0;
                    break;
                }
                if (p.tPlay <= r && r <= p.tEnd) {
                    f.optsPos = o, f.xCur = $.GSGDEasing[p.easing](null, r - p.tPlay, 0, 1, p.duration), 
                    i = !0;
                    break;
                }
                if (a[o + 1] && p.tEnd < r && r < a[o + 1].tPlay) {
                    f.optsPos = o, f.xCur = 1;
                    break;
                }
            }
            if (null !== f.xCur && a.length && (s(), g = {}, u(), d(), e.css(g)), n) {
                var p = a[f.optsPos];
                !!p.complete && p.complete();
            }
            return i;
        }, function() {
            f.rubyID = DB.GetRubyID(e), (v = c.data = vData[f.rubyID]).tsInit == UNDE && (v.tsInit = VA.tsCur);
            var a = v.prop, i = v.opts;
            f.propEnd = a[a.length - 1], f.optsEnd = i[i.length - 1], t(), n();
        }();
    }
    window.rt00VA || (window.rt00VA = {
        fps: 60,
        data: {},
        nTween: 0,
        nameTf: [ "x", "y", "z", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspectiveDirect" ],
        nameTf3D: [ "z", "rotateZ", "scaleZ", "perspectiveDirect" ],
        tfDefault: {
            x: 0,
            y: 0,
            z: 0,
            scale: 1,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
            rotate: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            skew: 0,
            skewX: 0,
            skewY: 0,
            perspectiveDirect: null
        },
        styleDefault: {
            opacity: 1
        },
        propFixed: [ "perspectiveDirect", "overflow" ],
        percentRef: {
            x: "OuterWidth",
            y: "OuterHeight",
            left: "OuterWidth",
            right: "OuterWidth",
            top: "OuterHeight",
            bottom: "OuterHeight"
        },
        optsAnimDefault: {
            duration: 1e3,
            delay: 0,
            easing: "easeOutQuad",
            xParentOrigin: 0,
            yParentOrigin: 0,
            styleBegin: {},
            styleEnd: {},
            isFallbackTF: !0,
            isXYAlone: !1,
            isClearStyleDefault: !1,
            isClearTFDefault: !0,
            isTFOrderByEnd: !1,
            isNew: !1
        },
        optsCssDefault: {
            type: "reset"
        },
        nameOptsInherit: [ "xParentOrigin", "yParentOrigin" ]
    }, window.rt00VA.GetData = function(e) {
        var t = null, a = window.rt00VA.data;
        for (var i in a) if (a[i].$item.is(e)) {
            t = a[i];
            break;
        }
        return t;
    });
    var VA = window.rt00VA, va = {}, is = {}, vData = VA.data, UNDE = void 0, M = $.extend({}, rt01VA.M, {
        GetSize: function(e) {
            var t = 0;
            for (var a in e) e[a] !== UNDE && t++;
            return t;
        },
        ToPI: function(e) {
            return e * Math.PI / 180;
        },
        ProperCase: function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1);
        },
        CamelCase: function(e) {
            return e.replace(/-([a-z])/gi, function(e, t) {
                return t.toUpperCase();
            });
        },
        CssCheck: function(e, t) {
            var a = document.createElement("p").style, i = "Webkit Moz ms O".split(" "), n = "-webkit- -moz- -ms- -o-".split(" "), r = this.CamelCase(e);
            if (a[r] !== UNDE) return !t || "";
            for (var s = M.ProperCase(r), o = 0, l = i.length; o < l; o++) if (a[i[o] + s] !== UNDE) return !t || n[o];
            return !1;
        },
        ArrayMinToMax: function(e) {
            for (var t, a, i = $.extend([], e), n = [], r = 0, s = i.length; r < s; r++) {
                a = i[0], t = 0;
                for (var o = 1; o < i.length; o++) a > i[o] && (a = i[o], t = o);
                n.push(a), i.splice(t, 1);
            }
            return n;
        },
        ValidName: function(e, t) {
            var a = {};
            for (var i in e) "originTF" == i ? a[VA.prefix + "transform-origin"] = e[i] : a[i] = e[i];
            if (!VA.isTf3D) for (var i in a) -1 !== $.inArray(i, VA.nameTf3D) && delete a[i];
            if (!VA.isTf) {
                if (t.isFallbackTF) for (var n = [ "x", "y" ], r = [ "left", "top" ], s = 0, o = n.length; s < o; s++) a[n[s]] !== UNDE && (a[r[s]] = a[n[s]], 
                delete a[n[s]]);
                for (var i in a) -1 !== $.inArray(i, VA.nameTf) && delete a[i];
            }
            var l = [];
            for (var i in VA.optsAnimDefault) l.push(i);
            for (var s = 0, o = l.length; s < o; s++) {
                var u = a[l[s]];
                u !== UNDE && (t[l[s]] = u, delete a[l[s]]);
            }
            return a;
        },
        ParseCssStyle: function(e) {
            if ("string" == typeof e) if (e.split(" ").length >= 2) e = e.split(" "), e = $.grep(e, function(e) {
                return "" !== e;
            }); else if (/px$/.test(e)) e = parseFloat(e); else if (/\%$/.test(e)) ; else {
                var t = parseFloat(e);
                isNaN(t) || (e = t);
            }
            return e;
        },
        MergeOptions: function(e, t) {
            var a = VA.nameOptsInherit, i = t.length, n = {}, r = {};
            if (i > 0) {
                r = t[i - 1];
                for (var s = 0, o = a.length; s < o; s++) n[a[s]] = r[a[s]];
            }
            return $.extend(!0, {}, r, VA.optsAnimDefault, e);
        }
    }), MATRIX = {
        getFromItem: function(e) {
            var t = e.css(VA.prefix + "transform");
            if (/^matrix(3d)?\(/i.test(t)) {
                for (var a = t.indexOf("(") + 1, i = t.length - a - 1, n = t.substr(a, i).split(", "), r = 0, s = n.length; r < s; r++) n[r] = parseFloat(n[r]);
                return n;
            }
            return [ 1, 0, 0, 1, 0, 0 ];
        },
        getFromProp: function(e) {
            var t = [ 1, 0, 0, 1, 0, 0 ];
            for (var a in e) {
                var i = null;
                switch (a) {
                  case "x":
                    i = [ 1, 0, 0, 1, e[a], 0 ];
                    break;

                  case "y":
                    i = [ 1, 0, 0, 1, 0, e[a] ];
                    break;

                  case "rotate":
                    var n = M.ToPI(e[a]), r = parseFloat(Math.cos(n).toFixed(5)), s = parseFloat(Math.sin(n).toFixed(5));
                    i = [ r, s, -s, r, 0, 0 ];
                    break;

                  case "scale":
                    i = [ e[a], 0, 0, e[a], 0, 0 ];
                    break;

                  case "scaleX":
                    i = [ e[a], 0, 0, 1, 0, 0 ];
                    break;

                  case "scaleY":
                    i = [ 1, 0, 0, e[a], 0, 0 ];
                    break;

                  case "skew":
                  case "skewX":
                  case "skewY":
                    if ((e[a] - 90) % 180 != 0) {
                        var n = M.ToPI(e[a]), o = parseFloat(Math.tan(n).toFixed(5));
                        "skew" == a ? i = [ 1, 0, o, 1, 0, 0 ] : "skewX" == a ? i = [ 1, 0, o, 1, 0, 0 ] : "skewY" == a && (i = [ 1, o, 0, 1, 0, 0 ]);
                    }
                }
                null !== i && (t = MATRIX.combine(t, i));
            }
            return t;
        },
        propertyInherit: function(e, t, a) {
            return 1 == t[0] && 0 == t[1] && 0 == t[2] && 1 == t[3] && a.rotate == UNDE && a.scale == UNDE && a.scaleX == UNDE && a.scaleY == UNDE && a.skew == UNDE && a.skewX == UNDE && a.skewY == UNDE && (t[0] = e[0], 
            t[1] = e[1], t[2] = e[2], t[3] = e[3]), 0 == t[4] && a.x == UNDE && (t[4] = e[4]), 
            0 == t[5] && a.y == UNDE && (t[5] = e[5]), t;
        },
        parse: function(e) {
            var t = {};
            return t.x = e[4], t.y = e[5], 0 == e[1] && 0 == e[2] && (t.scaleX = e[0], t.scaleY = e[3]), 
            1 == e[0] && 1 == e[3] && (0 != e[2] && (t.skewX = parseFloat((180 * Math.atan(e[2]) / Math.PI).toFixed(1))), 
            0 != e[1] && (t.skewY = parseFloat((180 * Math.atan(e[1]) / Math.PI).toFixed(1)))), 
            e[0] == e[3] && e[1] == -e[2] && (t.rotate = parseFloat((180 * Math.acos(e[0]) / Math.PI).toFixed(1))), 
            t;
        },
        combine: function(e, t) {
            e = [ e[0], e[1], 0, e[2], e[3], 0, e[4], e[5], 1 ];
            for (var a = [], i = 0, n = (t = [ t[0], t[1], 0, t[2], t[3], 0, t[4], t[5], 1 ]).length; i < n; i++) {
                var r = i % 3, s = ~~(i / 3);
                a[i] = e[r + 0] * t[3 * s + 0], a[i] += e[r + 3] * t[3 * s + 1], a[i] += e[r + 6] * t[3 * s + 2];
            }
            return [ a[0], a[1], a[3], a[4], a[6], a[7] ];
        },
        toCss: function(e) {
            var t = {};
            return t[VA.prefix + "transform"] = "matrix(" + e.join(", ") + ")", t;
        }
    }, TF = {
        CheckValueDefault: function(e, t) {
            var a = !0;
            if (t.isClearTFDefault) {
                for (var i in e) if (a) {
                    var n = VA.tfDefault[i];
                    e[i] !== n && (a = !1);
                }
            } else a = !1;
            return a ? {} : e;
        },
        Extend: function(e, t, a) {
            if (a.isTFOrderByEnd) for (var i in e) t[i] === UNDE && (t[i] = e[i]); else t = $.extend(!0, {}, e, t);
            var n = t.perspectiveDirect;
            return n !== UNDE && (t = $.extend(!0, {
                perspectiveDirect: n
            }, t)), t;
        },
        FromProp: function(e) {
            var t = {};
            for (var a in e) -1 !== $.inArray(a, VA.nameTf) && ("scale" == a ? t.scaleX = t.scaleY = e[a] : "skew" == a ? t.skewX = e[a] : t[a] = e[a]);
            return t;
        },
        ConvertValueToPX: function($anim, name, valueCur) {
            function ConvertPercentByItem(e) {
                var t = $.inArray(name, aNamePercent);
                return -1 !== t && (e = parseFloat(e), e = M[aFnSizeRef[t]]($anim) * e / 100, e = Math.round(e)), 
                e;
            }
            function ConvertPercentByParent(e, t) {
                var a = $.inArray(name, aNamePercent);
                if (-1 !== a) {
                    var i = $anim.parent();
                    if (t) {
                        var n = $anim.closest(t);
                        n.length && (i = n);
                    }
                    e = M[aFnSizeRef[a]](i) * e / 100, e = Math.round(e);
                }
                return e;
            }
            var aNamePercent = [ "x", "y", "left", "right", "top", "bottom" ], WIDTH = "OuterWidth", HEIGHT = "OuterHeight", aFnSizeRef = [ WIDTH, HEIGHT, WIDTH, WIDTH, HEIGHT, HEIGHT ], reOnlyContainMath = /^[0-9\(\)\+\-\*\/\%\s]|(\{.+\})+$/;
            if ("string" == typeof valueCur && reOnlyContainMath.test(valueCur) && valueCur.length < 200) {
                var reParent = /\d+\.?\d*\%?\{.+\}/g, matchParent = valueCur.match(reParent);
                if ($.isArray(matchParent)) for (var i = 0, len = matchParent.length; i < len; i++) {
                    var vMatch = matchParent[i], vConvert = parseFloat(vMatch), rePercent = /\d+\.?\d*\%\{(.+)\}/;
                    if (rePercent.test(vMatch)) {
                        var vParent = vMatch.match(rePercent), selectorParent = null;
                        if (vParent && vParent[1]) try {
                            $(vParent[1]), selectorParent = vParent[1];
                        } catch (e) {
                            !!console && console.warn(e);
                        }
                        vConvert = ConvertPercentByParent(vConvert, selectorParent);
                    }
                    valueCur = valueCur.replace(vMatch, vConvert);
                }
                var rePercent = /\d+\.?\d*\%/g, matchPercent = valueCur.match(rePercent);
                if ($.isArray(matchPercent)) for (var i = 0, len = matchPercent.length; i < len; i++) {
                    var vPercent = matchPercent[i], vPixel = ConvertPercentByItem(vPercent);
                    valueCur = valueCur.replace(vPercent, vPixel);
                }
                var reOnlyNumber = /^[0-9\(\)\+\-\*\/\%\s]+$/;
                reOnlyNumber.test(valueCur) && (valueCur = eval(valueCur));
            }
            return valueCur;
        },
        ToCss: function(e, t) {
            e = TF.CheckValueDefault(e, t);
            var a = {};
            for (var i in e) {
                var n = /^(x|y|z)$/.test(i) ? 100 : 1e4, r = Math.round(e[i] * n) / n;
                /^(x|y|z)$/.test(i) ? t.isXYAlone ? ("x" == i && e.x !== UNDE && (a.x = r), "y" == i && e.y !== UNDE && (a.y = r), 
                "z" == i && e.z !== UNDE && (a.z = r)) : (a.xy = a.xy || [ 0, 0, 0 ], "x" == i && e.x !== UNDE && (a.xy[0] = r), 
                "y" == i && e.y !== UNDE && (a.xy[1] = r), "z" == i && e.z !== UNDE && (a.xy[2] = r)) : /^scale/.test(i) ? (a.scale = a.scale || [ 1, 1 ], 
                "scaleX" == i && e.scaleX !== UNDE && (a.scale[0] = r), "scaleY" == i && e.scaleY !== UNDE && (a.scale[1] = r), 
                "scaleZ" == i && e.scaleZ !== UNDE && a.scale.push(r)) : /^skew/.test(i) ? (a.skew = a.skew || [ 0, 0 ], 
                "skewX" == i && e.skewX !== UNDE && (a.skew[0] = r), "skewY" == i && e.skewY !== UNDE && (a.skew[1] = r)) : /^rotate/.test(i) ? ("rotate" == i && e.rotate !== UNDE && (a.rotate = r), 
                "rotateX" == i && e.rotateX !== UNDE && (a.rotateX = r), "rotateY" == i && e.rotateY !== UNDE && (a.rotateY = r), 
                "rotateZ" == i && e.rotateZ !== UNDE && (a.rotateZ = r)) : /^perspectiveDirect$/.test(i) && (a.perspectiveDirect = r);
            }
            var s = is.tf3D, o = "";
            for (var i in a) if ("xy" == i) o += (s ? "translate3d(_x_px, _y_px, _z_px) " : "translate(_x_px, _y_px) ").replace(/_x_/, a.xy[0]).replace(/_y_/, a.xy[1]).replace(/_z_/, a.xy[2]); else if ("x" == i) o += "translateX(_x_px) ".replace(/_x_/, a.x); else if ("y" == i) o += "translateY(_y_px) ".replace(/_y_/, a.y); else if ("z" == i) o += (s ? "translateZ(_z_px) " : "").replace(/_z_/, a.z); else if ("scale" == i) {
                var l = a.scale, u = (s && 3 == l.length ? "scale3d(_x_, _y_, _z_) " : "scale(_x_, _y_) ").replace(/_x_/, l[0]).replace(/_y_/, l[1]).replace(/_z_/, l[2]);
                2 == l.length && l[0] === l[1] && (u = "scale(_x_) ".replace(/_x_/, l[0])), o += u;
            } else if ("skew" == i) {
                var d = a.skew;
                0 === d[1] ? o += "skew(_x_deg) ".replace(/_x_/, d[0]) : o += "skew(_x_deg, _y_deg) ".replace(/_x_/, d[0]).replace(/_y_/, d[1]);
            } else "rotate" == i ? o += "rotate(_x_deg) ".replace(/_x_/, a.rotate) : "rotateX" == i ? o += (s ? "rotateX(_x_deg) " : "rotate(_x_deg) ").replace(/_x_/, a.rotateX) : "rotateY" == i ? o += (s ? "rotateY(_y_deg) " : "").replace(/_y_/, a.rotateY) : "rotateZ" == i ? o += (s ? "rotateZ(_z_deg) " : "").replace(/_z_/, a.rotateZ) : "perspectiveDirect" == i && (o += (s ? "perspective(_x_px) " : "").replace(/_x_/, a.perspectiveDirect));
            return o.replace(/\s+$/, "");
        }
    }, DB = {
        CheckRubyID: function(e) {
            var t = null;
            for (var a in vData) if (vData[a].$item.is(e)) {
                t = a;
                break;
            }
            return t;
        },
        GetRubyID: function(e) {
            var t = DB.CheckRubyID(e);
            if (null === t) for (var a = 0, i = M.GetSize(vData); a <= i; a++) if (vData[a] === UNDE) {
                vData[a] = {
                    $item: e,
                    id: null,
                    idDB: a,
                    prop: [],
                    opts: [],
                    cssStyle: null,
                    cssTf: null,
                    isAnimate: !1
                }, t = a;
                break;
            }
            return t;
        },
        Update: function(e, t, a) {
            var i = DB.GetRubyID(e), n = VA.data[i];
            return t || (t = {}), a || (a = {}), a.isNew ? (a = $.extend(!0, {}, VA.optsAnimDefault, a), 
            n.prop = [], n.opts = []) : a = M.MergeOptions(a, n.opts), t = M.ValidName(t, a), 
            n.prop.push(t), n.opts.push(a), n;
        },
        Delete: function(e) {
            var t = DB.CheckRubyID(e);
            null !== t && delete VA.data[t];
        }
    }, __Init__ = function() {
        VA.timeLoop = ~~(1e3 / VA.fps), VA.prefix = M.CssCheck("transform", !0), VA.isTf = is.tf = M.CssCheck("transform"), 
        VA.isTf3D = is.tf3D = M.CssCheck("perspective"), VA.isTs = is.ts = M.CssCheck("transition"), 
        VA.isOpacity = is.opacity = M.CssCheck("opacity");
        var e = VA.prefix;
        VA.percentRef[e + "transform-origin0"] = "OuterWidth", VA.percentRef[e + "transform-origin1"] = "OuterHeight";
    }();
    window.RubyTween = function() {
        function e(e, t, a, i) {
            e.tweenID === UNDE ? e.tweenID = l.id : e.tweenID != l.id && (i.isNew = !0, e.tsInit = l.tsCur, 
            e.tCur = 0, (e = DB.Update(t, a, i)).tweenID = l.id);
        }
        function t(e) {
            for (var t = 0, a = l.animate.length; t < a; t++) if (l.animate[t].data.$item.is(e.$item)) return !0;
            return !1;
        }
        function a() {
            for (var e = 0, t = l.animate.length; e < t; e++) l.animate[e].data.tsInit = l.tsInit;
        }
        function i(e, t) {
            l.$items = l.$items.add(e);
            var a = t.opts.length, i = t.opts[a - 1], n = t.opts[a - 2];
            i.tWait = 1 == a ? 0 : n.tEnd, i.tPlay = i.tWait + i.delay, i.tEnd = i.tPlay + i.duration, 
            -1 === $.inArray(i.tWait, l.timeData) && (l.timeData.push(i.tWait), l.timeRef[i.tWait] = "wait"), 
            -1 === $.inArray(i.tPlay, l.timeData) ? (l.timeData.push(i.tPlay), l.timeRef[i.tPlay] = "play") : l.timeRef[i.tPlay] = "play", 
            -1 === $.inArray(i.tEnd, l.timeData) && (l.timeData.push(i.tEnd), l.timeRef[i.tEnd] = "end"), 
            l.timeData = M.ArrayMinToMax(l.timeData), l.tMax = l.timeData[l.timeData.length - 1], 
            l.timeline = [];
            for (var r = "end", s = 0, o = l.timeData.length; s < o; s++) {
                var u = l.timeData[s], d = l.timeData[s + 1], p = l.timeRef[u], c = l.timeRef[d], f = "end" == r && "wait" == p, v = "end" == p && "play" == c;
                if (f || v) {
                    var g;
                    if (f) for (m = s; m < o; m++) if ("play" == l.timeRef[l.timeData[m]]) {
                        g = l.timeData[m];
                        break;
                    }
                    v && (g = d), l.timeline.push({
                        type: "timeout",
                        time: u,
                        delay: g - u
                    });
                }
                /^(wait|end)$/.test(r) && "play" == p && l.timeline.push({
                    type: "interval",
                    time: u
                }), r = p;
            }
            for (var h = $.extend([], l.timeline), s = 0; s < h.length; s++) if ("timeout" == h[s].type) for (var m = 0, y = l.animate.length; m < y; m++) {
                var w = l.animate[m].data;
                if (w.tPlay < h[s].time && h[s].time < w.tEnd) {
                    h.splice(s, 2), s--;
                    break;
                }
            }
            l.timeline = h;
        }
        function n() {
            for (var e = null, t = 0, a = l.timeline.length; t < a; t++) if (l.timeline[t].time > l.tCur) {
                e = t - 1;
                break;
            }
            null === e && (e = l.timeline.length - 1), l.timePosCur = e;
        }
        function r() {
            var e = l.dirs, t = l.tsCur;
            if (l.tsCur = VA.tsCur = +new Date(), "forward" == e ? l.tCur = l.tsCur - l.tsInit : "reverse" == e && (l.tCur -= l.tsCur - t, 
            l.tsInit = l.tsCur - l.tCur, a()), n(), "reverse" == e && l.timePosCur < 0) s(); else {
                var i = l.timeline[l.timePosCur], o = 0;
                "timeout" == i.type && ("forward" == e && (o = i.delay - (l.tCur - i.time)), "reverse" == e && (o = l.tCur - i.time)), 
                l.animateCur = $.extend([], l.animate), "wait" == l.status ? (clearTimeout(l.timer), 
                "timeout" == i.type ? l.timer = setTimeout(r, o) : "interval" == i.type && (l.timer = setInterval(s, VA.timeLoop))) : "pause" == l.status && ("timeout" == i.type ? (l.status = "wait", 
                l.timer = setTimeout(r, o)) : "interval" == i.type && (l.status = "play", l.timer = setInterval(s, VA.timeLoop)));
            }
        }
        function s() {
            var e = l.dirs, t = l.animateCur.length;
            if (t) {
                var i = l.tsCur;
                l.tsCur = VA.tsCur = +new Date(), "forward" == e ? l.tCur = l.tsCur - l.tsInit : "reverse" == e && (l.tCur -= l.tsCur - i, 
                l.tsInit = l.tsCur - l.tCur, a()), !!l.evStep && l.evStep();
                for (var n = 0, s = l.animateCur.length; n < s; n++) l.animateCur[n].next() || t--, 
                t || (clearInterval(l.timer), l.tCur < l.tMax ? "forward" == e ? (l.status = "wait", 
                r()) : "reverse" == e && (l.tCur > 0 ? (l.status = "wait", r()) : (l.dirs = "forward", 
                o.go(0), !!l.evComplete && l.evComplete())) : l.tCur >= l.tMax && (l.status = "pause", 
                !!l.evComplete && l.evComplete()));
            } else clearInterval(l.timer);
        }
        var o = this, l = o.tw = {
            id: VA.nTween++,
            $items: $(),
            data: [],
            animate: [],
            tsInit: +new Date(),
            tCur: 0,
            tMax: Number.MAX_VALUE,
            status: "pause",
            dirs: "forward",
            timeline: [],
            timeData: [],
            timeRef: {},
            timePosCur: 0,
            timeTypeCur: null
        };
        o.animate = function(a, n, s, u) {
            if (!a || !a.length) return o;
            l.tsCur = VA.tsCur = +new Date(), l.tCur = l.tsCur - l.tsInit;
            var d = DB.Update(a, n, s);
            s || (s = d.opts[d.opts.length - 1]), s.isNew && (d.tweenID = null), d.isAnimate = !0, 
            e(d, a, n, s), i(a, d);
            var p = new ANIMATE(a);
            return !t(d) && l.animate.push(p), (u = u === UNDE || u) && r(), o;
        }, o.css = function(e, t, a) {
            if (!e || !e.length) return o;
            var i = (a = $.extend(!0, {}, VA.optsCssDefault, a)).type;
            if ("reset" === i) {
                t = $.extend({
                    originTF: "",
                    perspective: ""
                }, t), o.pause(), a.isNew = !0, (d = DB.Update(e, t, a)).tweenID = null;
                var n = {};
                t = d.prop[0], a = d.opts[0];
                for (var r in t) -1 === $.inArray(r, VA.nameTf) && (n[r] = t[r]);
                var s = TF.FromProp(t);
                d.tfCur = $.extend({}, s);
                for (var r in s) s[r] = TF.ConvertValueToPX(e, r, s[r]);
                c = TF.ToCss(s, a);
                n[VA.prefix + "transform"] = c, e.css(n), l.$items = l.$items.add(e);
            } else if (/^(point|inherit)$/.test(i)) {
                var u = DB.GetRubyID(e), d = VA.data[u], p = {}, c = {};
                t = M.ValidName(t, a);
                for (var r in t) {
                    var f = t[r];
                    -1 === $.inArray(r, VA.nameTf) ? p[r] = M.ParseCssStyle(f) : c[r] = f;
                }
                "point" == i && (c = TF.Extend(VA.tfDefault, c, {
                    isTFOrderByEnd: !0
                })), d.cssStyle = p, d.cssTf = c;
            }
            return o;
        }, o.go = function(e, t) {
            o.pause();
            var a = e * l.tMax / 100;
            "ms" == t && (a = e);
            var i = l.animate.length;
            if (0 != a || i) {
                l.tCur = a, l.tsCur = VA.tsCur = +new Date(), l.tsInit = l.tsCur - l.tCur;
                for (var n = 0, r = l.animate.length; n < r; n++) l.animate[n].data.tsInit = l.tsInit, 
                l.animate[n].next(!0);
            } else for (var n = 0, r = l.$items.length; n < r; n++) {
                var s = l.$items.eq(n), u = VA.data[DB.GetRubyID(s)];
                u.isAnimate || 1 != u.prop.length || o.css(s, u.prop[0], u.opts[0]);
            }
            return o;
        }, o.pause = function() {
            return o.isPlay() && (clearTimeout(l.timer), clearInterval(l.timer), l.status = "pause"), 
            o;
        }, o.play = function() {
            return o.isPause() && l.animate.length && (l.tsCur = VA.tsCur = +new Date(), l.tsInit = l.tsCur - l.tCur, 
            a(), r()), o;
        }, o.toggle = function() {
            return l.tCur >= l.tMax ? o.restart() : o.isPause() ? o.play() : o.pause(), o;
        }, o.resume = function() {
            return o.go(l.tCur, "ms").play(), o;
        }, o.restart = function() {
            return o.go(0).play(), o;
        }, o.reverse = function() {
            return l.dirs = "reverse", o.go(l.tCur, "ms"), l.tCur <= 0 && o.go(100), o.play(), 
            o;
        }, o.reset = function(e) {
            if (e) for (var t = 0, a = l.animate.length; t < a; t++) {
                var i = l.animate[t].data.idDB;
                delete vData[i];
            }
            return l.dirs = "forward", l.tCur = 0, l.tMax = 0, l.timeData = [], l.animate = [], 
            l.$items = $(), l.evComplete = null, l.evStep = null, o;
        }, o.clearDB = function() {}, o.positionCur = function() {
            var e = Math.round(l.tCur / l.tMax * 1e6) / 1e4;
            return e > 100 && (e = 100), e;
        }, o.isPlay = function() {
            return /^(wait|play)$/.test(l.status);
        }, o.isPause = function() {
            return /^(stop|pause)$/.test(l.status);
        }, o.eventComplete = function(e) {
            return l.evComplete = e, o;
        }, o.complete = function() {
            return o.go(100), !!l.evComplete && l.evComplete(), o;
        }, o.eventStep = function(e) {
            return l.evStep = e, o;
        };
    };
}(jQuery), function(e) {
    function t(e) {
        a = e, i = e.o, n = e.cs, r = e.va, s = e.is, o = e.ti, l = e.M, u = e.VIEW, d = e.POSITION, 
        p = l.Module("PAG");
    }
    window.rt01MODULE = window.rt01MODULE || {};
    var a, i, n, r, s, o, l, u, d, p;
    rt01MODULE.SWIPE = {
        ToggleEvent: function() {
            t(this), a.Properties(l.Data(n.idCur).opts), s.swipeCur != s.swipeLast && a.Events(!!s.swipeCur), 
            void 0 !== s.swipeOnBodyLast && s.swipeOnBodyCur !== s.swipeOnBodyLast && a.Events(s.swipeOnBodyCur ? "onBody" : "offBody"), 
            s.swipeLast = s.swipeCur, s.swipeOnBodyLast = s.swipeOnBodyCur;
        },
        Properties: function(e) {
            if (t(this), s.swipeCur = e.isSwipe, 1 == n.num && (s.swipeCur = !!i.oneSlide.isSwipe && e.isSwipe), 
            s.swipeOnBodyCur = e.swipe.isBody, s.swipeCur) {
                e.swipe;
                s.swipeOnPag = !0;
            } else s.swipeOnBodyCur = s.swipeOnPag = !1;
        },
        Events: function(e) {
            var a = this;
            t(a);
            var o = l.Data(n.idCur), u = s.swipeSupport, d = r.ev.mouse, p = r.ev.swipe, c = {
                offStart: function(e) {
                    e.removeClass(r.ns + "swipe-on").addClass(r.ns + "swipe-off").off(r.ev.mouse.start + " " + r.ev.swipe.start).off(r.ev.drag);
                },
                offMoveEnd: function() {
                    var e = r.ev;
                    r.$doc.off(e.mouse.move + " " + e.mouse.end + " " + e.swipe.move + " " + e.swipe.end);
                },
                offBody: function() {
                    l.ToggleClass("grab", -1), c.offStart(r.$viewport);
                },
                offPag: function() {
                    s.swipePagCur = !1, l.ToggleClass("grab", -1, r.$pag), s.pag && c.offStart(r.$pag);
                },
                onBody: function() {
                    s.swipeOnBodyCur && (c.offMoveEnd(), c.offBody(), l.ToggleClass("grab", 0), a.EventStart(r.$viewport, r.$canvas, d), 
                    u && a.EventStart(r.$viewport, r.$canvas, p));
                },
                onPag: function() {
                    s.swipeOnPag && s.pag && (c.offMoveEnd(), c.offPag(), s.swipePagCur = !0, l.ToggleClass("grab", 0, r.$pag), 
                    a.EventStart(r.$pag, r.$pagInner, d), u && a.EventStart(r.$pag, r.$pagInner, p));
                },
                offClickOnSlide: function() {
                    o.$self.off(r.ev.click);
                },
                onClickOnSlide: function() {
                    c.offClickOnSlide(), o.link && o.$self.on(r.ev.click, function() {
                        window.open(o.link, o.linkTarget);
                    });
                }
            };
            !0 === e ? (c.onBody(), c.offClickOnSlide(), i.swipe.isAutoOnPag ? !r.pag.isViewLarge && c.onPag() : c.onPag()) : !1 === e ? (c.onClickOnSlide(), 
            c.offBody(), c.offPag()) : c[e]();
        },
        EventStart: function(a, o, d) {
            t(this);
            var p = this, c = r.ns;
            a.addClass(c + "swipe-on").removeClass(c + "swipe-off"), a.off(r.ev.drag).on(r.ev.drag, function() {
                return !1;
            }), a.on(d.start, {
                swipeType: d.type
            }, function(f) {
                t(p), r.swipeDirs = null;
                var v = f.data.swipeType;
                null === r.swipeTypeCur && (r.swipeTypeCur = v);
                var g = [ "input", "textarea", "label", "a" ], h = f.target, m = h.tagName.toLowerCase(), y = -1 === e.inArray(m, g);
                if (y) {
                    var w = "." + c + "swipe-prevent, ." + c + i.namePrev + ", ." + c + i.nameNext;
                    e(h).closest(w).length && (y = !1, p.EventDragToggle(a, r.ev[v]));
                }
                if (y) {
                    var C = e(h), A = C.closest("a");
                    if (A.length) {
                        var x = A.closest("." + c + i.nameViewport);
                        x.length && x.is(r.$viewport) && (y = !1);
                    }
                    if (y) {
                        var I = C.closest("." + rt01VA.namespace).parent().closest("." + rt01VA.namespace);
                        n.$ruby.is(I) && (y = !1);
                    }
                }
                if (y && !s.lockSwipe && r.swipeTypeCur == v && n.num > 0) {
                    p.EventMove(r.ev[v]), r.$doc.one(d.end, {
                        swipeType: d.type
                    }, function(e) {
                        p.is.iOS ? setTimeout(function() {
                            p.LastSetup(e, e.data.swipeType, !1);
                        }, 0) : p.LastSetup(e, e.data.swipeType, !1);
                    });
                    var E = o.is(r.$canvas);
                    r.tDrag0 = r.tDrag1 = +new Date(), r.$swipeCur = o, l.GetTween(r.$swipeCur).go(100);
                    var S = l.SwapVaOnSwipe();
                    "3d" == r.fxType && r.tweenSlide.go(100);
                    var b = p.EVENTS.GetEventRight(f);
                    r.x0 = r.x0Fix = r.pageX1 = l.R(b[S.pageXY]), r.y0 = r.pageY1 = b.pageY, r.xOffset = r.xBuffer = 0, 
                    r.xBuffer = S.xCanvas, s.swipeBegin = !0, r.nMoveEvent = 0, i.isBodyMaskInFxCSS && "css" === r.fxView && r.$body.addClass(r.ns + "mask-x"), 
                    s.clickOnSlide = !0, E && l.ToggleClass("grab", 1);
                    var D = "SwipeBegin" + r.View;
                    E && !!u[D] && u[D](), "mouse" == v && f.preventDefault();
                }
            });
        },
        EventMove: function(a) {
            var i = this;
            e(document).on(a.move, {
                swipeType: a.type
            }, function(e) {
                t(i);
                var a = e.data.swipeType, n = r.$swipeCur.is(r.$canvas);
                if (!s.lockSwipe && r.swipeTypeCur == a) {
                    r.nMoveEvent || (n && (s.swiping = !0), l.RunEvent("swipeBegin")), r.nMoveEvent++;
                    var o = i.EVENTS.GetEventRight(e), u = l.SwapVaOnSwipe();
                    r.pageX0 = r.pageX1, r.pageX1 = l.R(o[u.pageXY]), r.pageX0 != r.pageX1 && (r.xOffset = r.pageX1 - r.x0, 
                    s.swipeNav = r.pageX1 > r.pageX0 ? "right" : "left", "swipe" == a ? (r.y = l.A(r.y0 - o.pageY), 
                    null === r.swipeDirs && l.A(r.xOffset) >= r.y && (r.swipeDirs = "chieuX"), null === r.swipeDirs && r.y > 5 && (r.swipeDirs = "chieuY"), 
                    null === r.swipeDirs || "chieuX" == r.swipeDirs ? (e.preventDefault(), i.XBuffer(r.pageX1)) : i.Events("offMoveEnd")) : i.XBuffer(r.pageX1)), 
                    !n && l.ToggleClass("grab", 1, r.$pag), l.A(r.xOffset) > 10 && s.tapEnable && (s.tapEnable = !1), 
                    (l.A(o.pageX - r.x0) > 10 || l.A(o.pageY - r.y0) > 10) && (s.clickOnSlide = !1);
                }
            });
        },
        LastSetup: function(e, o, u) {
            t(this);
            var d = r.$swipeCur.is(r.$canvas);
            if (!s.lockSwipe && r.swipeTypeCur == o) {
                "swipe" != o || u || e.preventDefault(), d && (s.swiping = !1), !s.swipeBegin && l.RunEvent("swipeEnd"), 
                r.tDrag1 = +new Date(), a.XNear(), d ? l.ToggleClass("grab", s.swipeOnBodyCur ? 0 : -1) : l.ToggleClass("grab", -1, r.$pag), 
                i.isViewGrabStop && l.ToggleClass("stop", -1);
                var p = l.Data(n.idCur);
                s.clickOnSlide && p.link && window.open(p.link, p.linkTarget);
            }
            r.swipeTypeCur == o && (r.swipeTypeCur = null), s.mobile ? s.tapEnable = !0 : setTimeout(function() {
                s.tapEnable = !0;
            }, 10), a.Events("offMoveEnd");
        },
        EventDragToggle: function(e, a) {
            var i = this;
            t(i), e.off(r.ev.drag);
            var n = a.end + "stopDrag";
            r.$doc.on(n, function() {
                t(i), e.on(r.ev.drag, function() {
                    return !1;
                }), r.$doc.off(n);
            });
        },
        EventClickOnSlide: function() {
            t(this);
        },
        XBuffer: function() {
            function e() {
                if (f && r.xBuffer > h.xMin || v && r.xBuffer < h.xMax) {
                    var e = s.mobile ? 4 : 8;
                    w /= e;
                }
            }
            t(this);
            var o = r.fxLayout, d = r.fxView, c = n.idCur, f = "right" == s.swipeNav, v = "left" == s.swipeNav, g = r.$swipeCur.is(r.$canvas), h = g ? r.can : r.pag, m = h.sTranslate, y = r.xOffset < 0 ? 1 : -1, w = r.pageX1 - r.pageX0, C = !0, A = !0;
            if (g && ("math" != r.fxType && "css" != r.fxView || (A = !1), i.swipe.isLiveEffect || (C = A = !1)), 
            A && C && (g ? ("line" != o || s.loop || e(), "dot" == o && function() {
                var e = s.mobile ? 3 : 6;
                w /= e, !s.loop && (c <= 0 && f || c >= n.num - 1 && v) && (w /= 4);
            }(), !s.loop && i.isViewGrabStop && (f && r.xBuffer > 0 ? l.ToggleClass("stop", 0) : v && r.xBuffer < h.xMax && l.ToggleClass("stop", 1))) : s.pag && (e(), 
            i.pag.isArrow && p.ArrowActived(r.xBuffer), i.pag.isMark && p.XBufferOnMark(w))), 
            r.xBuffer += w, A) {
                var x = "hor" === h.dirs ? {
                    x: l.R(r.xBuffer)
                } : {
                    y: l.R(r.xBuffer)
                };
                l.GetTween(r.$swipeCur).css(r.$swipeCur, x);
            }
            if (i.swipe.isLiveEffect) {
                var I = "Buffer" + r.View;
                g && !!u[I] && u[I](y);
            }
            if (g && "line" == o) {
                var E = h.xCanvas - m * y;
                r.xBuffer * y < E * y && (s.swipeBegin = !0, r.x0 = r.pageX1, h.xCanvas -= m * y, 
                a.TOSLIDE.Run(y, !1, !0));
            }
            s.swipeBegin && (s.swipeBegin = !1, "mask" == d && u.CloneImgbackInMask());
        },
        XNear: function() {
            t(this);
            var e = r.$swipeCur.is(r.$canvas), o = r.fxLayout, c = n.num, f = e ? r.can : r.pag, v = r.xOffset;
            if (r.moveBy = "swipe", e) {
                var g = r.pa.left ? r.wSlideFull - 2 * r.pa.left : r.wSlideFull, h = s.mobile ? 600 : 400, m = r.tDrag1 - r.tDrag0 < h, y = l.R(g / 3), w = l.R(g / 20), C = m ? w : y;
                if (v < -C && (s.loop || !s.loop && n.idCur < c - 1) && c - 1) "dot" == o && d.AnimateX(null, 0, !1, !1, 100), 
                a.TOSLIDE.Run(1); else if (v > C && (s.loop || !s.loop && n.idCur > 0) && c - 1) "dot" == o && d.AnimateX(null, 0, !1, !1, 100), 
                a.TOSLIDE.Run(-1); else if (v) {
                    d.AnimateX(null, 0, !1, !1, 400);
                    var A = "Restore" + r.View;
                    !!u[A] && u[A]();
                }
                (v < -C || v > C) && i.isSlideshow && (s.hoverAction = !0);
            } else if (s.pag && 0 != v) {
                f.xCanvas = r.xBuffer;
                var x = i.pag.speed;
                "center" == f.align || "end" == f.align ? f.xCanvas != f.xMin && d.AnimateX(null, f.xMin, !1, !0, x) : f.xCanvas > 0 ? d.AnimateX(null, 0, !1, !0, x) : f.xCanvas < f.xMax && d.AnimateX(null, f.xMax, !1, !0, x), 
                i.pag.isArrow && p.ArrowActived(f.xCanvas), i.pag.isMark && p.SizePosOfMark();
            }
            d.Flywheel();
        }
    };
}(jQuery), jQuery, window.rt01MODULE = window.rt01MODULE || {}, rt01MODULE.RESPONSIVE = {
    UpdateVars: function() {
        var e = this, t = (e.o, e.va);
        e.M;
        null !== t.paGridCur ? t.pa.left = t.paGridCur : t.wSlide > t.wGridCur ? t.pa.left = (t.wSlide - t.wGridCur) / 2 : t.pa.left = 0, 
        t.pa.left = ~~t.pa.left;
        var a = (t.wSlide - 2 * t.pa.left) / t.wRes;
        t.rate = a > 1 ? 1 : a;
    }
}, function(e) {
    function t(e) {
        a = e, i = e.o, n = e.cs, r = e.va, s = e.is, o = e.M;
    }
    window.rt01MODULE = window.rt01MODULE || {};
    var a, i, n, r, s, o;
    rt01MODULE.NAV = {
        Render: function() {
            t(this);
            var n = r.ns;
            if (s.nav && !s.$nav) {
                var l = "." + n + i.nameNav, u = a.RENDER.SearchNode(l);
                u.length ? (r.$nav = u, r.$nav.append(o.NS(i.nav.markupOutside)), s.navOutside = !0) : (r.$nav = e(o.NS(i.nav.markup)), 
                a.RENDER.Into(i.markup.navInto, r.$nav)), r.$prev = r.$nav.find("." + n + i.namePrev), 
                r.$next = r.$nav.find("." + n + i.nameNext), s.$nav = !0;
            } else !s.nav && s.$nav && (r.$nav[s.navOutside ? "empty" : "remove"](), s.$nav = !1);
        },
        EventTap: function() {
            t(this);
            var e = this, a = r.ev.click + " " + r.ev.swipe.end;
            if (!r.$nav) return !1;
            r.$prev.add(r.$next).off(a), e.is.nav && (r.$prev.on(a, function(a) {
                t(e), o.RunEvent("beforeTap"), i.nav.isEventTap && e.EVENTS.Prev(), a.preventDefault();
            }), r.$next.on(a, function(a) {
                t(e), o.RunEvent("beforeTap"), i.nav.isEventTap && e.EVENTS.Next(), a.preventDefault();
            }));
        },
        Toggle: function() {
            t(this);
            var e = r.deactived, a = n.idCur, i = n.num;
            s.loop ? r.$prev.add(r.$next).removeClass(e) : (0 == a && r.$prev.addClass(e), a == i - 1 && r.$next.addClass(e), 
            0 != a && r.$prev.removeClass(e), a != i - 1 && r.$next.removeClass(e));
        }
    };
}(jQuery), function(e) {
    function t(e) {
        a = e, n = e.o, r = e.oo, s = e.cs, o = e.va, l = e.is, u = e.ti, d = e.M;
    }
    window.rt01MODULE = window.rt01MODULE || {};
    var a, n, r, s, o, l, u, d;
    rt01MODULE.PAG = {
        RenderSelf: function() {
            var a = this;
            if (t(a), n.isPag && !l.$pag) {
                var i = o.ns, r = " " + i, u = r + "outside", p = n.pag, c = (p.direction, i + n.namePag), f = a.RENDER.SearchNode("." + c);
                "string" == typeof p.moreClass && (c += " " + p.moreClass), l.pagOutside = !!f.length, 
                o.$pag = l.pagOutside ? f.addClass(c + u) : e("<div/>", {
                    class: c
                }), o.$pagItem = e(""), o.$s.each(function() {
                    a.RenderPagItem(e(this));
                }), o.$pagInner = e("<div/>", {
                    class: i + "paginner"
                }), o.$pagInner.append(o.$pagItem), o.$pag.prepend(o.$pagInner), l.pagOutside || s.$ruby["begin" == p.position ? "prepend" : "append"](o.$pag), 
                a.ToggleClass(!0, !0), l.$pag = !0;
            } else !n.isPag && l.$pag && (o.$s.each(function() {
                d.Data(e(this), {
                    $thumbWrap: void 0
                });
            }), o.$pag[l.pagOutside ? "empty" : "remove"](), l.$pag = l.$pagArrow = l.$pagMark = !1, 
            l.swipePagCur = !1);
            n.isPag && (a.RenderPagArrow(), a.RenderPagMark()), l.$pag && o.$s.each(function() {
                a.RenderThumbnail(e(this));
            });
        },
        RenderPagItem: function(e) {
            t(this);
            var a = d.Data(e).$pagItem;
            return o.$pagItem = o.$pagItem.add(a), a;
        },
        RenderPagArrow: function() {
            if (t(this), n.pag.isArrow && !l.$pagArrow) {
                var a = d.NS(n.pag.markupArrow);
                o.$pagArrowLeft = e(a.replace(/\{dirs\}/g, "left")), o.$pagArrowRight = e(a.replace(/\{dirs\}/g, "right")), 
                o.$pag.append(o.$pagArrowLeft, o.$pagArrowRight), l.$pagArrow = !0;
            }
            !n.pag.isArrow && l.$pagArrow && (o.$pagArrowLeft.remove(), o.$pagArrowRight.remove(), 
            l.$pagArrow = !1);
        },
        RenderPagMark: function() {
            t(this);
            var a = o.ns;
            n.pag.isMark && !l.$pagMark ? (o.$pagMark = e(d.NS(n.pag.markupMark)), o.$pagMarkItem = o.$pagMark.children(), 
            o.$pag.removeClass(a + "pagmark-no").addClass(a + "pagmark-yes").prepend(o.$pagMark), 
            o.$pagMarkItemSelf = o.$pagMark.find(d.NS(".{ns}pagmark-self")), o.$pagMarkItemPadding = o.$pagMark.find(d.NS(".{ns}pagmark-padding")), 
            o.$pagMarkItemBorder = o.$pagMark.find(d.NS(".{ns}pagmark-border")), o.$pagMarkItemMargin = o.$pagMark.find(d.NS(".{ns}pagmark-margin")), 
            l.$pagMark = !0) : n.pag.isMark || (l.$pagMark && (o.$pagMark.remove(), l.$pagMark = !1), 
            o.$pag.removeClass(a + "pagmark-yes").addClass(a + "pagmark-no"));
        },
        RenderThumbnail: function(a) {
            t(this);
            var i = this, r = d.Data(a);
            if (l.pagThumb && !r.$thumbWrap) {
                var s, u = d.Find(a, "." + o.ns + "thumbitem"), p = d.Find(a, "." + o.ns + n.nameImageBack), c = d.Find(a, "." + o.ns + "videoback"), f = c.length && !/^\s*$/.test(c.attr("href"));
                if ((p.length || c.length) && (s = (p.length && p || c.length && c).data("thumbnail-link"), 
                /^\s*$/g.test(s) && (s = !1)), u.length || p.length || s || f || r.isLoaded && r.$thumbItem) {
                    var v = r.$pagItem, g = e("<div/>", {
                        class: "{ns}thumbwrap {ns}wfit".replace(/\{ns\}/g, o.ns)
                    });
                    v.append(g), r.$thumbWrap = g, i.RENDER.LoaderAdd(a, v, "$loaderThumb"), r.isLoaded && r.$thumbItem ? (g.append(r.$thumbItem), 
                    i.SetupWhenLoadSlideEnd(a), i.PosCenterForThumbItem(a)) : u.length ? g.append(u) : s ? (u = e("<img></img>", {
                        src: s,
                        class: o.ns + "thumbitem"
                    }), g.append(u)) : p.length && ((u = p.clone()).addClass(o.ns + "thumbitem").removeClass(o.ns + "imgback").css({
                        width: "",
                        height: ""
                    }), u.data("width") && u.css("width", u.data("width")), u.data("height") && u.css("height", u.data("height")), 
                    g.append(u));
                }
            } else !l.pagThumb && r.$thumbWrap && (r.$thumbWrap.remove(), r.$thumbWrap = null);
        },
        SetupWhenLoadSlideEnd: function(e) {
            t(this), l.pagThumb && a.RENDER.LoaderRemove(e, "$loaderThumb");
        },
        ToggleClass: function(a, i) {
            if (t(this), !e.isEmptyObject(r) || i) {
                e.isEmptyObject(r) && (r.pag = {});
                var u = a ? n : r, p = u.pag, c = o.ns, f = "", v = "", g = "";
                if (n.pag.type != r.pag.type && (v += " {ns}" + p.type, g += " {ns}pagtype-" + p.type), 
                n.pag.position != r.pag.position && (f += " {ns}pagpos-" + p.position), n.pag.direction != r.pag.direction && p.direction) f += " {ns}pagdirs-" + p.direction; else if (o.addInfo) {
                    var h = o.addInfo.pagDirs;
                    f += a ? " {ns}pagdirs-" + h : " {ns}pagdirs-" + ("hor" == h ? "ver" : "hor");
                }
                n.pag.cssPosition != r.pag.cssPosition && (v += " {ns}pos-" + p.cssPosition), n.pag.moreClass != r.pag.moreClass && (v += " " + p.moreClass), 
                a === n.pag.isMarkTransition && (v += " {ns}pagmark-transition"), v += " " + f, 
                v = d.NS(v), !!o.$pag && o.$pag[a ? "addClass" : "removeClass"](v), l.pagOutside && null !== u.skin && (a ? o.$pag.parent().addClass(c + u.skin) : o.$pag.parent().removeClass(c + u.skin)), 
                g += " " + f, g = d.NS(g), s.$ruby[a ? "addClass" : "removeClass"](g);
            }
        },
        FirstLastClass: function() {
            var e = this.va, t = e.$pagItem, a = e.ns + "first", i = e.ns + "last";
            t && (t.removeClass(a + " " + i), t.first().addClass(a), t.last().addClass(i));
        },
        EventTap: function() {
            var a = this;
            if (t(a), !o.$pag) return !1;
            var i = o.ev.click + " " + o.ev.swipe.end, r = i + " " + o.ev.swipe.start + " " + o.ev.swipe.move;
            if (o.$pagItem.off(r), l.pag) {
                var s = e();
                o.$pagItem.each(function() {
                    var t = e(this), a = "a" === t[0].tagName.toLowerCase(), i = t.attr("href");
                    a && i || (s = s.add(t));
                }), a.EVENTS.CheckMobileTap(s), s.on(i, function(i) {
                    t(a);
                    var r = e(this), s = d.Data(r);
                    d.RunEvent("beforeTap"), n.pag.isEventTap && l.tapEnable && (!l.mobile || l.mobile && /^(touch|pointer)/.test(i.type) && s.isMobileTap) && (o.moveBy = "tap", 
                    a.TOSLIDE.Run(d.Data(r).id, !0, !1, !0), a.EVENTS.DelayToTapNext()), i.preventDefault();
                });
            }
            if (n.pag.isArrow) {
                var u = o.$pagArrowLeft.add(o.$pagArrowRight);
                u.off(i), n.pag.isTapOnArrow && u.on(i, function(i) {
                    if (t(a), l.tapEnable) {
                        var n = e(this).is(o.$pagArrowLeft) ? "left" : "right";
                        a.TranslatePagByTapArrow(n), a.EVENTS.DelayToTapNext();
                    }
                    i.preventDefault();
                });
            }
        },
        ToggleEvent: function() {
            t(this);
            var e = o.pag.isViewLarge;
            if (l.SWIPE && n.swipe.isAutoOnPag && (e && l.swipePagCur || !e && !l.swipePagCur)) {
                var a = e ? "offPag" : "onPag";
                d.Module("SWIPE").Events(a);
            }
        },
        CSSPosForPag: function() {
            t(this);
            var e = n.pag, a = {
                "margin-left": "",
                "margin-right": "",
                "margin-top": "",
                "margin-bottom": ""
            };
            null !== e.hOffset && ("relative" == e.cssPosition ? a["begin" == e.position ? "margin-bottom" : "margin-top"] = e.hOffset : a["begin" == e.position ? "margin-top" : "margin-bottom"] = e.hOffset), 
            null !== e.vOffset && ("relative" == e.cssPosition ? a["begin" == e.position ? "margin-right" : "margin-left"] = e.vOffset : a["begin" == e.position ? "margin-left" : "margin-right"] = e.vOffset), 
            o.$pag.css(a);
        },
        TypeSizeItem: function() {
            t(this);
            var r = n.pag, s = o.pag, u = o.ns + "wfit", p = o.ns + "hfit", c = "hor" == s.dirs, f = l.pagItemSizeSelf;
            o.$pagInner.css({
                width: "",
                height: "",
                "margin-right": "",
                "margin-bottom": ""
            }).removeClass(u + " " + p), o.$pagItem.each(function() {
                e(this).css({
                    width: "",
                    height: ""
                });
            }), a.GetSizeOfItems(), function() {
                var e = {
                    width: c ? "max" == r.typeSizeItem ? s.wMax : s.wMin : s.wMax,
                    height: c ? s.hMax : "max" == r.typeSizeItem ? s.hMax : s.hMin
                };
                if (c ? (e["margin-bottom"] = s.maBottom, f && (e.width = s.wSum)) : (e["margin-right"] = s.maRight, 
                f && (e.height = s.hSum), l.pagOutside && (e.width = "")), o.$pagInner.css(e), !l.pagList) {
                    var t = u + " " + p;
                    f && (t = c ? p : u), o.$pagInner.addClass(t);
                }
            }(), function() {
                function e(e) {
                    var t = 0, a = 0;
                    for (i = e.length - 1; i >= 0; i--) t += d.PInt(o.$viewport.css(e[i])), a += d.PInt(o.$pag.css(e[i]));
                    return t - a;
                }
                o.viewSpace = {
                    hor: e([ "padding-left", "padding-right", "border-left-width", "border-right-width" ]),
                    ver: e([ "padding-top", "padding-bottom", "border-top-width", "border-bottom-width" ])
                };
            }();
        },
        GetSizeOfItems: function() {
            function a(t) {
                var a = "w" == t ? "width" : "height", n = "w" == t ? "Width" : "Height", r = [ t + "Self", t + "ToPadding", t + "ToBorder", t + "ToMargin" ];
                for (i = 0; i < r.length; i++) u[r[i]] = [];
                o.$pagItem.each(function() {
                    var t = e(this), i = d.R(d[n](t)), s = d.R(d["Inner" + n](t) - i), o = d.R(d["Outer" + n](t) - i), p = d.R(d["Outer" + n](t, !0) - i), c = l["min" + n], f = l["max" + n];
                    e.isNumeric(l[a]) && (i = l[a]), e.isNumeric(c) && i < c && (i = c), e.isNumeric(f) && i > f && (i = f), 
                    u[r[0]].push(i), u[r[1]].push(i + s), u[r[2]].push(i + o), u[r[3]].push(i + p);
                }), u[t + "Min"] = Math.min.apply(null, u[r[0]]), u[t + "Max"] = Math.max.apply(null, u[r[0]]), 
                u[t + "Sum"] = d.Sum(u[r[3]]);
            }
            function r(e, t) {
                var a = 0;
                for (i = 0; i < s.num; i++) {
                    var n = e[i] - t[i];
                    n > a && (a = n);
                }
                return a;
            }
            t(this);
            var l = n.pag, u = o.pag;
            !function() {
                var e = [ "padding", "border", "margin" ], t = [ "Top", "Right", "Bottom", "Left" ], a = [ "", "Width", "" ], n = e.length, r = t.length;
                for (i = 0; i < n; i++) u[e[i]] = [ [], [], [], [] ];
                o.$pagItem.each(function(s) {
                    var o = document.defaultView ? getComputedStyle(this) : this.currentStyle;
                    for (i = 0; i < n; i++) for (j = 0; j < r; j++) u[e[i]][j][s] = d.PInt(o[e[i] + t[j] + a[i]]);
                });
            }(), a("w"), a("h"), u.sSum = "hor" == u.dirs ? u.wSum : u.hSum, u.maRight = r(u.wToMargin, u.wSelf), 
            u.maBottom = r(u.hToMargin, u.hSelf);
        },
        PropAndStyle: function() {
            t(this);
            var e, a = this, i = o.$pag, r = s.num, u = o.pag, p = "hor" == u.dirs, c = l.pagOutside && !p ? "self" : n.pag.sizeAuto, f = {
                width: "",
                height: ""
            };
            if (null === c ? e = p ? d.Width(i) : d.Height(i) : "full" == c ? e = p ? f.width = o.wRuby + o.viewSpace.hor : f.height = o.hRuby + o.viewSpace.ver : "self" == c && (e = p ? f.width = u.wSum : f.height = u.hSum), 
            u.sViewport = e, o.$pag.css(f), u.wViewport = d.Width(i), u.hViewport = d.Height(i), 
            u.sTranslate = 0, l.alignJustify && "self" !== c && p) {
                var v = Math.max.apply(null, u.wToMargin), g = v * r, h = v;
                (u.wViewport >= g || n.pag.isJustifyWhenLarge) && (h = ~~(u.wViewport / r));
                var m = h - u.maRight;
                o.$pagInner.css({
                    width: m,
                    height: u.hSelf[0]
                });
            }
            a.GetSizeOfItems();
            var y = u.sViewport - u.sSum, w = u.isViewLarge = y >= 0;
            u.align = n.pag.align, w && "justify" == u.align && (u.align = "center"), w || "begin" == u.align || (u.align = "begin"), 
            "begin" == u.align ? (u.xMin = u.xCanvas = 0, u.xMax = w ? 0 : y) : "end" == u.align ? (u.xMin = u.xCanvas = y, 
            u.xMax = u.sViewport) : "center" == u.align && (u.xMin = u.xCanvas = d.R(y / 2), 
            u.xMax = u.xMin + u.sSum), a.ToggleEvent();
        },
        PosAndSizeOfItems: function() {
            t(this);
            var e = o.pag, n = "hor" == e.dirs;
            a.GetSizeOfItems();
            var r = n ? "wToMargin" : "hToMargin";
            for (e.pBegin = [ 0 ], i = 1; i < a.cs.num; i++) e.pBegin[i] = e.pBegin[i - 1] + e[r][i - 1];
            var s = n ? "Tlx" : "Tly", u = {};
            for (l.tf || (n ? u.top = "" : u.left = ""), i = 0; i < a.cs.num; i++) u[e.cssTf] = d[s](e.pBegin[i]), 
            l.pagItemSizeSelf && (n ? u.width = e.wSelf[i] : u.height = e.hSelf[i]), o.$pagItem.eq(i).css(u);
        },
        PosCenterForThumbItem: function(a) {
            t(this);
            var i = d.Data(a), r = i.$thumbWrap, s = i.$thumbItem, l = d.Data(s);
            if (r && s && l.isLoaded) {
                var u = o.ns, p = n.pag.width, c = n.pag.height, f = e.isNumeric(p) ? p : d.Width(r), v = e.isNumeric(c) ? c : d.Height(r), g = f / v, h = l.rate;
                void 0 === h && l.isImgback && (h = l.rate = d.Data(l.$imgback).rate), s.hasClass(o.ns + "transparent") && (h = 1);
                var m = "", y = {
                    width: "",
                    height: "",
                    left: "",
                    top: ""
                };
                f && v && (h > g ? (m = u + "hfit", y.left = -d.R((h * v - f) / 2)) : (m = u + "wfit", 
                y.top = -d.R((f / h - v) / 2))), s.css(y);
                var w = "{ns}hfit{ns}wfit".replace(/\{ns\}/g, u).replace(m, "");
                r.addClass(m).removeClass(w);
            }
        },
        UpdateThumbnail: function() {
            var a = this;
            t(a), l.pagThumb && l.initEnd && o.$s.each(function() {
                a.PosCenterForThumbItem(e(this));
            });
        },
        PosCenterForItemCur: function(e, a) {
            function i() {
                if (t(r), o.isViewLarge) "ver" == o.dirs && (a = !1), r.TranslateTo(o.xCanvas, e, a); else {
                    var i = "hor" == o.dirs ? o.wToMargin : o.hToMargin, n = d.Sum(i, s.idCur), l = -d.R(n - (o.sViewport - i[s.idCur]) / 2);
                    l > 0 ? l = 0 : l < o.xMax && (l = o.xMax), r.TranslateTo(l);
                }
            }
            var r = this, o = r.va.pag;
            if (t(r), "hor" == o.dirs) i(); else {
                var l = 10 + (n.speedHeight || 200);
                clearTimeout(u.centerItemCur), u.centerItemCur = setTimeout(i, l);
            }
        },
        TranslateTo: function(e, a, i) {
            t(this);
            var r = this, s = o.pag;
            if (e != s.xCanvas || 0 == e || a) {
                var l = d.GetTween(o.$pagInner), u = "hor" === s.dirs ? {
                    x: d.R(e)
                } : {
                    y: d.R(e)
                };
                i ? l.css(o.$pagInner, u) : l.animate(o.$pagInner, u, {
                    isNew: !0,
                    duration: n.pag.speed,
                    easing: n.pag.easing
                }), s.xCanvas = e, n.pag.isArrow && r.ArrowActived(e), n.pag.isMark && r.SizePosOfMark();
            }
        },
        MarginOnViewport: function() {
            if (t(this), !l.pagOutside) if ("relative" == n.pag.cssPosition) {
                var e = d.OuterWidth(o.$pag, !0);
                "begin" == o.pagVer && o.$viewport.css("margin-left", e), "end" == o.pagVer && o.$viewport.css("margin-right", e);
            } else o.$viewport.css({
                "margin-left": "",
                "margin-right": ""
            });
        },
        VerToHor: function() {
            t(this);
            var e = n.pag, a = o.pag, i = null;
            if (l.pagTabs && "ver" == e.direction) {
                var r = d.MatchMedia(0, e.widthMinToHor, !0);
                r || (r = d.MatchMedia(0, e.rangeMinToHor)), "ver" == a.dirs && r ? (i = a.dirs = "hor", 
                !!o.$pag && o.$pag.stop(!0).css("height", "")) : "hor" != a.dirs || r || (i = a.dirs = "ver");
            }
            i && (o.$canvas.add(o.$pag).css("width", ""), o.addInfo = {
                pagDirs: i
            }, s.update({}, !1));
        },
        ArrowActived: function(e) {
            t(this);
            var a = o.actived, i = o.$pagArrowLeft, n = o.$pagArrowRight;
            if (o.pag.isViewLarge) i.add(n).removeClass(a); else {
                var r = e < o.pag.xMin - 30;
                d.XClass(i, r, a);
                var s = e > o.pag.xMax + 30;
                d.XClass(n, s, a);
            }
        },
        TranslatePagByTapArrow: function(e) {
            t(this);
            var i = o.pag;
            if (!i.isViewLarge) {
                var n = "left" == e, r = n ? 1 : -1, s = i.xCanvas + (i.sViewport - 10) * r, l = n ? i.xMin : i.xMax;
                (n && s > l || !n && s < l) && (s = l), a.TranslateTo(s);
            }
        },
        SizePosOfMark: function() {
            function e(e) {
                var t, n, r = "dMark" + e, l = o["$pagMarkItem" + e], u = "hor" == i.dirs, d = u ? "w" : "h", p = u ? "3" : "0", c = s.idCur, f = {
                    width: "",
                    height: ""
                }, v = i.margin[p][c], g = v + i.border[p][c], h = g + i.padding[p][c];
                if (l.is(":visible")) {
                    "Margin" == e ? (n = i[d + "ToMargin"][c], t = 0) : "Border" == e ? (n = i[d + "ToBorder"][c], 
                    t = v) : "Padding" == e ? (n = i[d + "ToPadding"][c], t = g) : (n = i[d + "Self"][c], 
                    t = h), n !== i[r] && (f[u ? "width" : "height"] = n, l.css(f), i[r] = n);
                    var m = "xMark" + e;
                    if (void 0 !== i.pBegin) {
                        var y = i.xCanvas + i.pBegin[s.idCur] + t;
                        y != i[m] && (a.POSITION.TranslateX(l, y, !0, null, "hor" == i.dirs), i[m] = y);
                    }
                }
            }
            t(this);
            var i = o.pag;
            void 0 !== i.margin && (e("Self"), e("Padding"), e("Border"), e("Margin"));
        },
        XBufferOnMark: function(e) {
            function i(t) {
                var i = "xMark" + t, r = o["$pagMarkItem" + t], s = e + n[i];
                r.is(":visible") && (a.POSITION.TranslateX(r, d.C(s), !0, null, "hor" == n.dirs), 
                n[i] = s);
            }
            t(this);
            var n = o.pag;
            i("Self"), i("Padding"), i("Border"), i("Margin");
        }
    };
}(jQuery), function(e) {
    function t(e) {
        a = e, i = e.o, n = e.cs, r = e.va, s = e.is, o = e.M;
    }
    window.rt01MODULE = window.rt01MODULE || {};
    var a, i, n, r, s, o;
    rt01MODULE.CAPTION = {
        Render: function() {
            if (t(this), i.isCap && !s.$cap) {
                var o = "." + r.ns + i.nameCap, l = a.RENDER.SearchNode(o);
                s.capOutside = !!l.length, r.$cap = s.capOutside ? l : e("<div/>", {
                    class: r.ns + i.nameCap
                }), r.$capCur = e("<div/>", {
                    class: r.ns + "cap-cur"
                }), r.$capLast = e("<div/>", {
                    class: r.ns + "cap-last"
                }), r.$capInner = e("<div/>", {
                    class: r.ns + "capinner"
                }), r.$capInner.append(r.$capCur, r.$capLast).appendTo(r.$cap), !s.capOutside && n.$ruby.append(r.$cap), 
                s.$cap = !0;
            } else !i.isCap && s.$cap && (r.$cap[s.capOutside ? "empty" : "remove"](), s.$cap = !1);
        },
        Toggle: function(e, n) {
            t(this);
            var l = o.Data(e).htmlCap, u = n.length ? o.Data(n).htmlCap : "";
            if (r.$capCur.html(l), !s.mobile && !s.ie7) {
                r.$capLast.html(u);
                var d = o.OuterHeight(r.$capCur, !0), p = o.OuterHeight(r.$capLast, !0) || d;
                r.tweenCaption.css(r.$capCur, {
                    opacity: 0
                }).animate(r.$capCur, {
                    opacity: 1
                }, {
                    isNew: !0,
                    duration: i.speedHeight,
                    complete: function() {
                        setTimeout(function() {
                            t(a), r.$capLast.css("visibility", ""), r.$capInner.css("height", "");
                        }, 10);
                    }
                }).css(r.$capLast, {
                    opacity: 1,
                    visibility: "visible"
                }).animate(r.$capLast, {
                    opacity: 0
                }, {
                    duration: i.speedHeight
                }), p !== d && r.tweenCaption.css(r.$capInner, {
                    height: p
                }).animate(r.$capInner, {
                    height: d
                }, {
                    duration: i.speedHeight
                });
            }
        }
    };
}(jQuery), function(e) {
    function t(e) {
        a = e, i = e.o, n = e.cs, r = e.va, s = e.is, o = e.ti, l = e.M, u = l.Module("PAG");
    }
    window.rt01MODULE = window.rt01MODULE || {};
    var a, i, n, r, s, o, l, u;
    rt01MODULE.IMAGE = {
        SetupAtLoadSlideBegin: function(n, o) {
            t(this);
            var u = r.ns, d = l.Data(n);
            o = o || ".{ns}{imgback}, .{ns}{imglazy}, img.{ns}{layer}".replace(/\{imgback\}/, i.nameImageBack).replace(/\{imglazy\}/, i.nameImageLazy).replace(/\{layer\}/, i.nameLayer).replace(/\{ns\}/g, u);
            var p = l.Find(n, o);
            if (d.$pagItem) {
                var c = ".{ns}thumbitem, .{ns}{imglazy}".replace(/\{imglazy\}/, i.nameImageLazy).replace(/\{ns\}/g, u), f = l.Find(d.$pagItem, c);
                p = p.add(f);
            }
            l.Data(n, {
                $images: e(),
                imageLen: p.length,
                nImage: 0
            }), p.each(function() {
                var t = e(this);
                /^img/i.test(this.tagName) || (t = a.ConvertToImage(t));
                var r = t.hasClass(u + i.nameImageBack), o = t.hasClass(u + "thumbitem"), p = r || t.hasClass(u + i.nameImageLazy), c = l.Data(t, {
                    $slide: n,
                    isImgOfRuby: p,
                    isImgback: r,
                    isThumbItem: o,
                    isSrcOutside: !1,
                    isLoaded: !1,
                    src: [],
                    styleInline: l.PStyleToJson(t),
                    opts: r ? e.extend({}, d.opts.imageback, t.data("imageback")) : e.extend({}, d.opts.image, t.data("image"))
                });
                c.layer && void 0 !== c.layer.opts.isResponsive && (c.opts.isResponsive = c.layer.opts.isResponsive), 
                r && (a.Wrap(t), l.Data(n, {
                    $imgbackWrap: n.find("." + u + "imgback-wrap"),
                    $imgback: t,
                    isImgback: !0
                }), c.opts.position = d.opts.imagePosition || c.opts.position);
                var f = c.src, v = t.attr("src"), g = /^data\:image\//g.test(v), h = t.attr("data-" + i.nameDataLazy);
                !g && f.push(v), void 0 === h || /^\s*$/.test(h) || f.push(h), t.removeAttr("data-" + i.nameDataLazy), 
                s.FLICKR && t.data("flickr") ? l.Module("FLICKR").GetLinkByPhotoID(t) : a.EventLoad(t);
            });
        },
        ConvertToImage: function(a) {
            t(this);
            var n = {}, r = i.isCap ? "image link" : a.text(), o = e("<img>", {
                src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                alt: r
            });
            e.each(a[0].attributes, function(e, t) {
                var a = t.name, i = t.value;
                o.attr(a, i), n[a] = i;
            });
            var l = "data-NAME".replace(/NAME/, i.nameDataLazy), u = a.attr(l) || n.href || "";
            return o.attr(l, u).removeAttr("href"), s.ie && o.removeAttr("width height"), a.after(o).remove(), 
            o;
        },
        Wrap: function(a) {
            t(this);
            var i = r.ns + "imgback-wrap", n = a.closest("." + i);
            n.length || (n = e("<div/>", {
                class: i
            }), a.wrap(n), n = a.closest("." + i)), l.Data(n, l.Data(a)), l.Data(n, {
                $imgItem: a
            });
            for (var s = [ "data-video", "data-video-link" ], o = 0, u = s.length; o < u; o++) {
                var d = a.attr(s[o]);
                d && (n.attr(s[o], d), a.removeAttr(s[o]));
            }
        },
        EventLoad: function(e) {
            function a() {
                d.nImage = d.nImage + 1, d.nImage == d.imageLen && (!d.isVideoback || d.isVideoback && d.isVideobackLoaded) && setTimeout(function() {
                    t(s), "home" == d.id ? l.Module("LAYER").LoadHomeEnd() : s.LOAD.SlideEnd(u);
                }, 10);
            }
            function i() {
                s.Properties(e), a();
            }
            function n(t) {
                e.addClass(r.ns + "load-failed").attr("alt", "image load failed"), l.Message("image load failed", t), 
                a();
            }
            t(this);
            var s = this, o = l.Data(e), u = o.$slide, d = l.Data(u);
            if (e.hasClass(r.ns + "transparent")) return i();
            if (!o.src.length) return n("image source not found");
            var p = new Image(), c = o.src, f = c.pop();
            p.onload = function() {
                t(s), i();
            }, p.onerror = function() {
                t(s), c.length ? s.EventLoad(e) : n(f);
            }, e.attr("src", f), p.src = f;
        },
        Properties: function(e) {
            t(this);
            var i = l.Data(e), n = e[0], s = e.data("width") || n.width, o = e.data("height") || n.height;
            l.Data(e, {
                isLoaded: !0,
                width: s,
                height: o,
                rate: s / o
            });
            var d = l.Data(i.$slide);
            d.$images = d.$images.add(e), i.isThumbItem && (d.$thumbItem = e), i.isImgOfRuby && a.SizeResponsive(e), 
            (i.isImgback || i.isThumbItem) && (e.on(r.ev.drag, function() {
                return !1;
            }), u.PosCenterForThumbItem(i.$slide));
        },
        SizeResponsive: function(a) {
            function i() {
                "auto" == u ? c.width = u : e.isNumeric(u) ? c.width = l.R(u * p) : c.width = l.R(n.width * p), 
                "auto" == d ? c.height = d : e.isNumeric(d) ? c.height = l.R(d * p) : c.height = l.R(n.height * p), 
                a.css(c);
            }
            t(this);
            var n = l.Data(a), o = l.Data(n.$slide);
            if (a && a.length && n.opts.isResponsive && "videoPoster" !== n.type) {
                var u = (n = l.Data(a)).styleInline.width, d = n.styleInline.height, p = r.rate, c = {
                    width: "",
                    height: "",
                    left: "",
                    top: ""
                }, f = o.opts.imageback.posGrid[r.index];
                n.isImgback ? (p /= n.opts.pixelRatio, "center" == f || "tile" == f ? i() : s.heightFixed || (c.width = r.wSlide, 
                c.height = l.R(c.width / n.rate), a.css(c))) : 1 == r.rate ? (void 0 !== u && (c.width = u), 
                void 0 !== d && (c.height = d), a.css(c)) : i();
            }
        },
        BackPosition: function(a) {
            function i() {
                c = r.wSlide, f = l.R(c / g);
            }
            function n() {
                f = r.hRuby, c = l.R(f * g);
            }
            function o() {
                var e = l.PInt(a.css("left")), t = ~~((r.wSlide - l.OuterWidth(a, !0)) / 2);
                e !== t && a.css("left", t);
            }
            function u() {
                var e = l.R((r.hRuby - l.OuterHeight(a, !0)) / 2);
                0 == e && (e = ""), a.css("top", e);
            }
            t(this);
            var d = l.Data(a), p = l.Data(d.$slide);
            if (d.isImgback && "videoPoster" !== d.type) {
                var c, f, v = p.opts.imageback.posGrid[r.index], g = (d.width, d.height, d.rate), h = r.wRuby / r.hRuby;
                if ("fill" == v) s.heightFixed && (g > h ? n() : i(), a.css({
                    width: c,
                    height: f
                }), o(), u()); else if ("fit" == v) s.heightFixed && (g > h ? i() : n(), a.css({
                    width: c,
                    height: f
                }), o(), u()); else if ("stretch" == v) s.heightFixed && (c = r.wSlide, f = r.hRuby, 
                a.css({
                    width: c,
                    height: f
                })); else if ("tile" == v) {
                    var m = [], y = 0, w = 0, C = 0, A = 0, x = !1, I = !1;
                    c = l.OuterWidth(a, !0), f = l.OuterHeight(a, !0);
                    do {
                        C = 0, A = w, y = 0, x = !1;
                        do {
                            m.push([ C, A ]), C += c, (y += c) >= r.wSlide && (x = !0);
                        } while (!x);
                        w += f, s.heightFixed ? w >= r.hRuby && (I = !0) : I = !0;
                    } while (!I);
                    var E = d.$itemClone, S = a.parent("." + r.ns + "imgback-wrap");
                    E && E.remove(), d.$itemClone = e();
                    for (var b = 1, D = m.length; b < D; b++) {
                        var T = a.clone();
                        T.addClass(r.ns + "imgclone").css({
                            left: m[b][0],
                            top: m[b][1]
                        }).appendTo(S), d.$itemClone = d.$itemClone.add(T);
                    }
                } else o(), s.heightFixed && u();
            }
        },
        UpdateAllImageBy: function(a) {
            var i = this;
            t(i);
            var n, s;
            switch (a) {
              case "size":
                n = "$images", s = "SizeResponsive";
                break;

              case "position":
                n = "$imgback", s = "BackPosition";
                break;

              default:
                return;
            }
            r.$s.add(r.$viewport).each(function() {
                var t = l.Data(e(this))[n];
                t && t.each(function() {
                    i[s](e(this));
                });
            });
        }
    };
}(jQuery), function(e) {
    function t(e) {
        a = e, i = e.o, n = e.cs, r = e.va, s = e.is, o = e.ti, l = e.M, u = e.FX;
    }
    window.rt01MODULE = window.rt01MODULE || {};
    var a, i, n, r, s, o, l, u;
    rt01MODULE.VIEWCSS = {
        GetFxCss: function(a, i) {
            function n(t) {
                return e.isArray(t) || (t = [ t ]), e.each(t, function(e) {
                    s[t[e]] || t.splice(e, 1);
                }), t;
            }
            t(this);
            var s = r.rubyAnimateKeyframes, o = r.rubyAnimateOne, u = [];
            switch (a) {
              case "cssOne":
                var d = i.cssOne;
                e.isArray(d) || (d = [ d ]), e.each(d, function(e) {
                    o[d[e]] && u.push(o[d[e]]);
                });
                break;

              case "cssTwo":
                var p = n(i.cssTwoOut), c = n(i.cssTwoIn);
                p.length && c.length && (u = [ {
                    next: [ p, c ],
                    prev: [ p, c ]
                } ]);
                break;

              case "cssThree":
                var f = n(i.cssThreeNext), v = n(i.cssThreePrev);
                f.length && v.length && (u = [ {
                    next: [ [ "slideShortLeftOut" ], f ],
                    prev: [ [ "slideShortRightOut" ], v ]
                } ]);
                break;

              case "cssFour":
                var g = n(i.cssFourNextOut), h = n(i.cssFourNextIn), m = n(i.cssFourPrevOut), y = n(i.cssFourPrevIn);
                g.length && h.length && m.length && y.length && (u = [ {
                    next: [ g, h ],
                    prev: [ m, y ]
                } ]);
            }
            return u.length || (u = [ o.fade ], r.fxType = "cssOne", l.Message("effect CSS need RubyAnimate object and keyframes")), 
            u;
        },
        UpdateTweenFromCss: function(e, a) {
            t(this);
            var i = r.fxCSS.idNext, n = r.speed[i], s = l.Data(r.$s.eq(i)).opts.cssEasing, o = l.Module("RUBYANIMATE").Tween(a, n, void 0, s);
            if (o) for (var u = 0, d = o.length; u < d; u++) {
                var p = o[u];
                0 == u ? r.tweenSlide.css(e, p) : r.tweenSlide.animate(e, p.prop, p.opts, !1);
            } else r.tweenSlide.animate(e, {}, {
                duration: n
            }, !1);
            r.fxCSS.isMask && r.$viewport.addClass(r.ns + "css-mask");
        },
        ResetTFSlideCss: function() {
            t(this);
            var a = r.fxCSS, i = r.$s.eq(a.idCur), s = r.$s.eq(a.idNext), o = r.$s.eq(n.idLast), l = r.$s.eq(n.idCur), u = e("").add(i).add(s).add(o).add(l), d = "{ns}css-prev {ns}css-next".replace(/\{ns\}/g, r.ns);
            u.css("opacity", "").css(r.cssTf, "").css(r.prefix + "transform-origin", "").css("z-index", "").removeClass(d), 
            r.$viewport.removeClass(r.ns + "css-mask");
        },
        ResetTweenCss: function(e, i) {
            t(this);
            var n, s, o = r.fxCSS, u = r.$s.eq(e), d = r.$s.eq(i), p = l.RandomInArray(r.fx[i], r.fxCssLast), c = !!p.isMask;
            p = p[o.isNext ? "next" : "prev"], n = r.fxCssOutLast = l.RandomInArray(p[0], r.fxCssOutLast), 
            s = r.fxCssInLast = l.RandomInArray(p[1], r.fxCssInLast), a.ResetTFSlideCss(), o.idCur = e, 
            o.idNext = i, o.fxOut = n, o.fxIn = s, o.isMask = c, r.tweenSlide.reset(!0), u.addClass(r.ns + "css-prev"), 
            d.addClass(r.ns + "css-next"), a.UpdateTweenFromCss(u, n), a.UpdateTweenFromCss(d, s);
        },
        BufferCss: function(e) {
            t(this);
            var i = r.fxCSS, s = n.idCur, o = s + e;
            o < 0 ? o = n.num - 1 : o > n.num - 1 && (o = 0);
            var u = i.idNext != o;
            i.status && !u || (i.isNext = e > 0, a.ResetTweenCss(s, o)), i.status = "buffer";
            var d = l.A(r.xOffset) / r.wSlide * 100;
            r.tweenSlide.go(d);
        },
        RestoreCss: function() {
            t(this), r.fxCSS.status = "restore", a.ToSlideCss();
        },
        ToSlideCss: function() {
            function e() {
                s.eventComplete(function() {
                    a.ResetTFSlideCss(), a.TOSLIDE.End(), i.status = null;
                });
            }
            t(this);
            var a = this, i = r.fxCSS, s = r.tweenSlide;
            if ("buffer" == i.status) i.status = "play", e(), s.resume(); else if ("restore" == i.status) e(), 
            r.tweenSlide.reverse(); else {
                var o = n.idLast, l = n.idCur;
                i.isNext = r.nMove > 0, a.ResetTweenCss(o, l), e(), i.status = "play", s.restart();
            }
        }
    };
}(jQuery), function(e) {
    function t(e) {
        a = e, i = e.o, n = e.va;
    }
    window.rt01MODULE = window.rt01MODULE || {};
    var a, i, n;
    rt01MODULE.RUBYANIMATE = {
        keyframeDefault: {
            duration: 400,
            easing: "easeOutQuad",
            animEnd: {
                pos: 100,
                x: 0,
                y: 0,
                z: 0,
                scale: 1,
                skew: 0,
                rotate: 0,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
                opacity: 1
            }
        },
        CopyData: function(e) {
            var t = {};
            for (var a in e) "pos" != a && (t[a] = e[a]);
            return t;
        },
        UpdateDataToKeyframe: function(i) {
            t(this);
            var n = window.__rubyAnimateKeyframes__ || {};
            if (!e.isArray(i) || !i.length) return !1;
            for (var r = [], s = 0, o = i.length; s < o; s++) {
                var l = i[s];
                if (e.isArray(l.pos)) {
                    for (var u = 0, d = l.pos.length; u < d; u++) {
                        var p = a.CopyData(l);
                        p.pos = l.pos[u], i.push(p);
                    }
                    r.push(s);
                }
            }
            for (var c = 0, s = 0, o = r.length; s < o; s++) i.splice(r[s] - c, 1), c++;
            for (var f = [], s = 0, o = i.length; s < o; s++) {
                for (var v = Number.MAX_VALUE, g = 0, u = 0, d = i.length; u < d; u++) i[u].pos < v && (v = i[u].pos, 
                g = u);
                f.push(i[g]), i.splice(g, 1);
            }
            n[name] = i = f;
            var h = i[0];
            return void 0 === h.pos && 1 == i.length && (h.pos = 100), 0 !== h.pos && i.unshift({
                pos: 0
            }), 100 != i[i.length - 1].pos && i.push(a.keyframeDefault.animEnd), i;
        },
        UpdateAllKeyframes: function() {
            t(this);
            var r = e.extend(!0, {}, i.rubyAnimateKeyframes, window.__rubyAnimateKeyframes__);
            for (var s in r) {
                var o = r[s];
                r[s] = a.UpdateDataToKeyframe(o);
            }
            n.rubyAnimateKeyframes = r, n.rubyAnimateOne = e.extend(!0, {}, i.rubyAnimateOne, window.__rubyAnimateOne__);
        },
        Tween: function(i, r, s, o, l) {
            t(this);
            var u, d;
            if (l = l || n.rubyAnimateKeyframes, "string" == typeof i) d = l[i]; else if (e.isArray(i) && i.length) {
                var p = i.slice();
                d = a.UpdateDataToKeyframe(p);
            }
            if (d) {
                (u = [])[0] = a.CopyData(d[0]);
                for (var c = 0, f = 1, v = d.length; f < v; f++) {
                    var g = d[f], h = {
                        prop: a.CopyData(g),
                        opts: {}
                    }, m = h.opts, y = g.pos;
                    m.duration = (y - c) / 100 * r, c = y, void 0 !== s && null !== s && 1 == f && (m.delay = s), 
                    void 0 !== o && null !== o && 1 == f && (m.easing = o), u.push(h);
                }
                return u;
            }
        },
        OneConvertFour: function(e) {
            var t = this.va.rubyAnimateOne;
            return t[e] || t._default_;
        }
    };
}(jQuery), function(e) {
    window.rt01MODULE = window.rt01MODULE || {}, rt01MODULE.NESTED = {
        Destroy: function(e) {
            var t = this, a = e.find("." + t.va.ns);
            if (a.length) {
                var i = a.data(rt01VA.rubyName);
                i && i.destroy && i.destroy(!0);
            }
        },
        RefreshInSlide: function(t) {
            var a = this.va;
            t.find("." + a.ns).each(function() {
                var t = e(this).data(rt01VA.rubyName);
                t && (t.one.va.wRuby < 10 || t.one.va.hRuby < 10) && t.refresh();
            });
        }
    };
}(jQuery), jQuery, window.rt01MODULE = window.rt01MODULE || {}, rt01MODULE.CLASSADD = {
    Filter: function(e) {
        var t = "";
        return void 0 !== e.classAdd && (t = e.classAdd.toString()), t;
    },
    Toggle: function() {
        var e = this.va, t = this.cs, a = e.classAdd[t.idLast], i = e.classAdd[t.idCur];
        void 0 !== a && "" != a && t.$ruby.removeClass(a), void 0 !== i && "" != i && t.$ruby.addClass(i);
    }
}, function(e) {
    function t(e) {
        a = e, n = e.o, r = e.cs, s = e.va, o = e.is;
    }
    window.rt01MODULE = window.rt01MODULE || {};
    var a, n, r, s, o;
    rt01MODULE.DISPLAY = {
        SetupInit: function() {
            t(this);
            var e = !0;
            (o.mobile && "desktop" == n.showBy || !o.mobile && "mobile" == n.showBy) && (e = !1), 
            e ? (a.SetupVars(), a.Check(), o.awake ? a.INIT.Ready() : a.ResizeON()) : r.$ruby.remove();
        },
        SetupVars: function() {
            t(this);
            var r = a.M;
            n.showInRange ? s.showInRange = function(t) {
                if (e.isNumeric(t) ? t = [ [ t, 1e5 ] ] : r.ElesIsNumber(t, 2) && (t = [ t ]), !e.isArray(t)) return !1;
                var a = {
                    num: t.length
                };
                for (i = a.num - 1; i >= 0; i--) {
                    var n = t[i];
                    e.isNumeric(n) && (n = [ n, 1e5 ]), a[i] = {
                        from: r.PInt(n[0]),
                        to: r.PInt(n[1])
                    };
                }
                return a;
            }(n.showInRange) : o.showInRange = o.awake = !0;
        },
        Check: function() {
            t(this);
            var n = s.showInRange;
            if (e.isPlainObject(s.showInRange)) for (o.showInRange = !1, i = n.num - 1; i >= 0; i--) if (a.M.MatchMedia(n[i].from, n[i].to)) {
                o.showInRange = !0;
                break;
            }
            void 0 === o.awake && o.showInRange && (o.awake = !0);
        },
        Toggle: function() {
            t(this), a.Check();
            var e = s.ns + "none";
            r.$ruby[(o.showInRange ? "remove" : "add") + "Class"](e);
        },
        ResizeON: function() {
            var e = this, t = e.cs, a = e.va, i = e.ti, n = e.is;
            t.$ruby.addClass(a.ns + "none"), a.$w.on("resize.rubyShow" + a.rubykey, function() {
                clearTimeout(i.showResize), i.showResize = setTimeout(function() {
                    e.Check(), n.awake && e.ResizeOFF();
                }, 200);
            });
        },
        ResizeOFF: function() {
            t(this), s.$w.off("resize.rubyShow" + s.rubykey), r.$ruby.removeClass(s.ns + "none"), 
            a.INIT.Ready();
        }
    };
}(jQuery);
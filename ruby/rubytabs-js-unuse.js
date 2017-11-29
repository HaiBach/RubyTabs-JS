/**
 * RUBYTWEEN
 * @package     RubyTween
 * @author      HaiBach
 * @link      http://haibach.net
 * @version     1.7
 */
(function ($) {
    /*
     * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
     */
    $.GSGDEasing = $.GSGDEasing || {
        def: 'easeOutQuad',
        swing: function (x, t, b, c, d) {
            return $.GSGDEasing[$.GSGDEasing.def](x, t, b, c, d);
        },
        easeInQuad: function (x, t, b, c, d) {
            return c * (t /= d) * t + b;
        },
        easeOutQuad: function (x, t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        },
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1)
                return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        },
        easeInCubic: function (x, t, b, c, d) {
            return c * (t /= d) * t * t + b;
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        },
        easeInOutCubic: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1)
                return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        },
        easeInQuart: function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        },
        easeOutQuart: function (x, t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        },
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1)
                return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        },
        easeInQuint: function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        },
        easeOutQuint: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        },
        easeInOutQuint: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1)
                return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        },
        easeInSine: function (x, t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        },
        easeInOutSine: function (x, t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        },
        easeInExpo: function (x, t, b, c, d) {
            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t == 0)
                return b;
            if (t == d)
                return b + c;
            if ((t /= d / 2) < 1)
                return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOutCirc: function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        },
        easeInOutCirc: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1)
                return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        },
        easeInElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0)
                return b;
            if ((t /= d) == 1)
                return b + c;
            if (!p)
                p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else
                var s = p / (2 * Math.PI) * Math.asin(c / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        easeOutElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0)
                return b;
            if ((t /= d) == 1)
                return b + c;
            if (!p)
                p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else
                var s = p / (2 * Math.PI) * Math.asin(c / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
        },
        easeInOutElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0)
                return b;
            if ((t /= d / 2) == 2)
                return b + c;
            if (!p)
                p = d * (.3 * 1.5);
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else
                var s = p / (2 * Math.PI) * Math.asin(c / a);
            if (t < 1)
                return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        },
        easeInBack: function (x, t, b, c, d, s) {
            if (s == undefined)
                s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        easeOutBack: function (x, t, b, c, d, s) {
            if (s == undefined)
                s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        easeInOutBack: function (x, t, b, c, d, s) {
            if (s == undefined)
                s = 1.70158;
            if ((t /= d / 2) < 1)
                return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        },
        easeInBounce: function (x, t, b, c, d) {
            return c - $.GSGDEasing.easeOutBounce(x, d - t, 0, c, d) + b;
        },
        easeOutBounce: function (x, t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            }
            else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            }
            else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            }
            else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        },
        easeInOutBounce: function (x, t, b, c, d) {
            if (t < d / 2)
                return $.GSGDEasing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
            return $.GSGDEasing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
        },
        // Bo sung linear
        linear: function (x, t, b, c, d) {
            return t / d;
        }
    };
}(jQuery));
(function ($) {
    'use strict';
    /**
     * GLOBAL VARIABLES IN JAVASCRIPT
     */
    if (!window.rt00VA) {
        /**
         * CREATE NEW GLOBAL VARIABLE
         */
        window.rt00VA = {
            fps: 60,
            data: {},
            nTween: 0,
            nameTf: ['x', 'y', 'z', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspectiveDirect'],
            nameTf3D: ['z', 'rotateZ', 'scaleZ', 'perspectiveDirect'],
            /**
             * DEFAULT OPTIONS IN PLUGIN
             */
            tfDefault: {
                'x': 0,
                'y': 0,
                'z': 0,
                'scale': 1,
                'scaleX': 1,
                'scaleY': 1,
                'scaleZ': 1,
                'rotate': 0,
                'rotateX': 0,
                'rotateY': 0,
                'rotateZ': 0,
                'skew': 0,
                'skewX': 0,
                'skewY': 0,
                'perspectiveDirect': null
            },
            styleDefault: {
                'opacity': 1
            },
            // Properties may have prefix -> will add later
            propFixed: ['perspectiveDirect', 'overflow'],
            percentRef: {
                'x': 'OuterWidth',
                'y': 'OuterHeight',
                'left': 'OuterWidth',
                'right': 'OuterWidth',
                'top': 'OuterHeight',
                'bottom': 'OuterHeight'
            },
            optsAnimDefault: {
                'duration': 1000,
                'delay': 0,
                'easing': 'easeOutQuad',
                'xParentOrigin': 0,
                'yParentOrigin': 0,
                'styleBegin': {},
                'styleEnd': {},
                'isFallbackTF': true,
                'isXYAlone': false,
                'isClearStyleDefault': false,
                'isClearTFDefault': true,
                'isTFOrderByEnd': false,
                'isNew': false
            },
            optsCssDefault: {
                'type': 'reset'
            },
            // Options can inherit value from options befores
            nameOptsInherit: ['xParentOrigin', 'yParentOrigin']
        };
        /**
         * FUNCTION: GET DATA PROPERTY OF ITEM
         */
        window.rt00VA.GetData = function ($item) {
            var dataRuby = null, vData = window.rt00VA.data;
            /**
             * CREATE LOOP TO CHECK ALL ITEM IN DATA
             */
            for (var key in vData) {
                var $itemCur = vData[key]['$item'];
                if ($itemCur.is($item)) {
                    dataRuby = vData[key];
                    break;
                }
            }
            return dataRuby;
        };
    }
    /**
     * GLOBAL VARIABLES IN PLUGIN
     */
    var VA = window.rt00VA, va = {}, is = {}, vData = VA.data, UNDE = undefined;
    /**
     * FUNCITON M - UTILITIES
     */
    var M = $.extend({}, rt01VA.M, {
        /**
         * GET SIZE OF OJBECT
         */
        GetSize: function (data) {
            var size = 0;
            for (var key in data) {
                if (data[key] !== UNDE)
                    size++;
            }
            return size;
        },
        // Convert Radius to PI
        ToPI: function (deg) { return deg * Math.PI / 180; },
        /**
         * CHECK BROWSER SUPPORT CSS PROPERTIES
         */
        // Capitalize first letter of string
        ProperCase: function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        // Convert string to CamelCase
        CamelCase: function (str) {
            return str.replace(/-([a-z])/gi, function (m, str) {
                return str.toUpperCase();
            });
        },
        CssCheck: function (property, isPrefix) {
            var style = document.createElement('p').style, vender = 'Webkit Moz ms O'.split(' '), prefix = '-webkit- -moz- -ms- -o-'.split(' ');
            // Check first: style have vender
            var styleCase = this.CamelCase(property);
            if (style[styleCase] !== UNDE)
                return (isPrefix ? '' : true);
            // Check continue if it has vender
            // First, convert string style to Upper -> ex: 'flex-wrap' to 'FlexWrap'
            var preStyle = M.ProperCase(styleCase);
            // Check each vender
            for (var i = 0, len = vender.length; i < len; i++) {
                if (style[vender[i] + preStyle] !== UNDE)
                    return (isPrefix ? prefix[i] : true);
            }
            // Reture false if not support
            return false;
        },
        /**
         * SORT ASCENDING VALUE IN ARRAY[]
         */
        ArrayMinToMax: function (a) {
            var aClone = $.extend([], a), aOrder = [], pos, min;
            for (var i = 0, len = aClone.length; i < len; i++) {
                min = aClone[0];
                pos = 0;
                for (var j = 1; j < aClone.length; j++) {
                    if (min > aClone[j]) {
                        min = aClone[j];
                        pos = j;
                    }
                }
                aOrder.push(min);
                aClone.splice(pos, 1);
            }
            return aOrder;
        },
        /**
         * CONVERT NAME OF PROPERTIES FOR STANDARD CSS
         */
        ValidName: function (prop, opts) {
            var propNew = {};
            /**
             * CREATE LOOP TO CHECK ALL NAME IN 'PROP'
             */
            for (var name in prop) {
                /**
                 * CASE: TRANSFORM ORIGIN
                 */
                if (name == 'originTF') {
                    propNew[VA.prefix + 'transform-origin'] = prop[name];
                }
                else {
                    propNew[name] = prop[name];
                }
            }
            /**
             * REMOVE ALL ELEMENTS TRANSFORM 3D IF NOT SUPPORT
             */
            if (!VA.isTf3D) {
                for (var name in propNew) {
                    if ($.inArray(name, VA.nameTf3D) !== -1) {
                        delete propNew[name];
                    }
                }
            }
            /**
             * REMOVE & CONVERT PROPERTIES IN TRANSFORM TO STYLE CSS
             */
            if (!VA.isTf) {
                // Convert xyz translate to Absolute(left/top) position
                if (opts.isFallbackTF) {
                    var source = ['x', 'y'], replace = ['left', 'top'];
                    for (var i = 0, len = source.length; i < len; i++) {
                        if (propNew[source[i]] !== UNDE) {
                            propNew[replace[i]] = propNew[source[i]];
                            delete propNew[source[i]];
                        }
                    }
                }
                // Remove all elements Transform
                for (var name in propNew) {
                    if ($.inArray(name, VA.nameTf) !== -1) {
                        delete propNew[name];
                    }
                }
            }
            /**
             * MOVE ALL PROPERTIES 'OPTION' IN 'PROP'
             */
            // Collect all properties have in default options
            var aFind = [];
            for (var name in VA.optsAnimDefault) {
                aFind.push(name);
            }
            // Convert properties have in 'prop' to 'opts'
            for (var i = 0, len = aFind.length; i < len; i++) {
                var propCur = propNew[aFind[i]];
                // Kiem tra thuoc tinh opts ton tai
                if (propCur !== UNDE) {
                    opts[aFind[i]] = propCur;
                    delete propNew[aFind[i]];
                }
            }
            return propNew;
        },
        /**
         * ANALYZE + CONVERT VALUE OF CSS STYLE
         */
        ParseCssStyle: function (valueCur) {
            /**
             * CASE: VALUE IS STRING
             */
            if (typeof valueCur == 'string') {
                /**
                 * CASE: PROPERTY HAVE MULTIPLE VALUE
                 */
                if (valueCur.split(' ').length >= 2) {
                    // Split string to array
                    valueCur = valueCur.split(' ');
                    // Remove empty string in array
                    valueCur = $.grep(valueCur, function (v) { return v !== ''; });
                }
                else {
                    /**
                     * CASE: THE VALUE HAVE 'PX' UNIT
                     */
                    if (/px$/.test(valueCur)) {
                        valueCur = parseFloat(valueCur);
                    }
                    else if (/\%$/.test(valueCur)) {
                        // Not do anything
                    }
                    else {
                        // Convert value to Number (if possible)
                        var fooNum = parseFloat(valueCur);
                        if (!isNaN(fooNum))
                            valueCur = fooNum;
                    }
                }
            }
            return valueCur;
        },
        /**
         * MERGE CURRENT OPTIONS WITH DEFAULT OPTIONS
         */
        MergeOptions: function (optsCur, itemOpts) {
            /**
             * SETUP THE OPTIONS INHERIT FROM VALUE OPTONS BEFORE
             */
            var nameInherit = VA['nameOptsInherit'], optsNum = itemOpts.length, optsInherit = {}, optsLastOnItem = {};
            // Case: options before exist on Item
            if (optsNum > 0) {
                optsLastOnItem = itemOpts[optsNum - 1];
                // Get all item inherit value
                for (var i = 0, len = nameInherit.length; i < len; i++) {
                    optsInherit[nameInherit[i]] = optsLastOnItem[nameInherit[i]];
                }
            }
            /**
             * MERGE ALL OPTIONS TOGETHER
             *  + Prority level: optsCur > optsDefault > optsInherit
             */
            var optsNew = $.extend(true, {}, optsLastOnItem, VA.optsAnimDefault, optsCur);
            return optsNew;
        }
    });
    /**
     * MATRIX
     */
    var MATRIX = {
        /**
         * GET VALUE TRANSFORM MATRIX FROM OBJECT
         */
        getFromItem: function ($item) {
            var str = $item.css(VA.prefix + 'transform');
            if (/^matrix(3d)?\(/i.test(str)) {
                var pBegin = str.indexOf('(') + 1, subLen = str.length - pBegin - 1, matrix = str.substr(pBegin, subLen).split(', ');
                // Rounded value in array
                for (var i = 0, len = matrix.length; i < len; i++) {
                    matrix[i] = parseFloat(matrix[i]);
                }
                return matrix;
            }
            return [1, 0, 0, 1, 0, 0];
        },
        /**
         * COMBINE WITH MATRIX PROPERTIES FROM PARTICULAR PROPERTY
         */
        getFromProp: function (prop) {
            var matrixInit = [1, 0, 0, 1, 0, 0];
            /**
             * CREATE LOOP TO SETUP EACH MATRIX PROPERTIES
             */
            for (var name in prop) {
                var matrixCur = null;
                switch (name) {
                    case 'x':
                        matrixCur = [1, 0, 0, 1, prop[name], 0];
                        break;
                    case 'y':
                        matrixCur = [1, 0, 0, 1, 0, prop[name]];
                        break;
                    case 'rotate':
                        var radian = M.ToPI(prop[name]), cos = parseFloat(Math.cos(radian).toFixed(5)), sin = parseFloat(Math.sin(radian).toFixed(5));
                        matrixCur = [cos, sin, -sin, cos, 0, 0];
                        break;
                    case 'scale':
                        matrixCur = [prop[name], 0, 0, prop[name], 0, 0];
                        break;
                    case 'scaleX':
                        matrixCur = [prop[name], 0, 0, 1, 0, 0];
                        break;
                    case 'scaleY':
                        matrixCur = [1, 0, 0, prop[name], 0, 0];
                        break;
                    case 'skew':
                    case 'skewX':
                    case 'skewY':
                        if ((prop[name] - 90) % 180 != 0) {
                            var radian = M.ToPI(prop[name]), tan = parseFloat(Math.tan(radian).toFixed(5));
                            if (name == 'skew')
                                matrixCur = [1, 0, tan, 1, 0, 0];
                            else if (name == 'skewX')
                                matrixCur = [1, 0, tan, 1, 0, 0];
                            else if (name == 'skewY')
                                matrixCur = [1, tan, 0, 1, 0, 0];
                        }
                        break;
                }
                /**
                 * COMBINE INIT MATRIX WITH CURRENT MATRIX
                 */
                if (matrixCur !== null)
                    matrixInit = MATRIX.combine(matrixInit, matrixCur);
            }
            return matrixInit;
        },
        /**
         * SETUP MATRIX INHERITED FROM BEFORE PROPERTIES
         */
        propertyInherit: function (m1, m2, prop) {
            /**
             * CASE: INHERIT 3 PROPERTIES 'ROTATE', 'SCALE', 'SKEW'
             */
            if (m2[0] == 1 && m2[1] == 0 && m2[2] == 0 && m2[3] == 1
                && prop['rotate'] == UNDE
                && prop['scale'] == UNDE && prop['scaleX'] == UNDE && prop['scaleY'] == UNDE
                && prop['skew'] == UNDE && prop['skewX'] == UNDE && prop['skewY'] == UNDE) {
                m2[0] = m1[0];
                m2[1] = m1[1];
                m2[2] = m1[2];
                m2[3] = m1[3];
            }
            /**
             * CASE: TRANSLATE
             */
            if (m2[4] == 0 && prop['x'] == UNDE)
                m2[4] = m1[4];
            if (m2[5] == 0 && prop['y'] == UNDE)
                m2[5] = m1[5];
            return m2;
        },
        /**
         * PARSE TRANSFORM PROPERTIES FROM STRING MATRIX
         */
        parse: function (m) {
            var order = ['xy', 'scale', 'skew', 'rotate'], tf = {};
            /**
             * PARSE X - Y TRANSLATE
             */
            tf.x = m[4];
            tf.y = m[5];
            /**
             * PARSE 'SCALE' PROPERTY
             */
            if (m[1] == 0 && m[2] == 0) {
                tf.scaleX = m[0];
                tf.scaleY = m[3];
            }
            /**
             * PARSE 'SKEW' PROPERTY
             */
            if (m[0] == 1 && m[3] == 1) {
                if (m[2] != 0)
                    tf.skewX = parseFloat((Math.atan(m[2]) * 180 / Math.PI).toFixed(1));
                if (m[1] != 0)
                    tf.skewY = parseFloat((Math.atan(m[1]) * 180 / Math.PI).toFixed(1));
            }
            /**
             * PARSE 'ROTATE' PROPERTY
             */
            if (m[0] == m[3] && m[1] == -m[2]) {
                tf.rotate = parseFloat((Math.acos(m[0]) * 180 / Math.PI).toFixed(1));
            }
            // Return transform
            return tf;
        },
        /**
         * COMBINE 2 MATRIX
         */
        combine: function (m1, m2) {
            /**
             * CONVERT MATRIX 6 TO 9 VALUE
             */
            m1 = [m1[0], m1[1], 0, m1[2], m1[3], 0, m1[4], m1[5], 1];
            m2 = [m2[0], m2[1], 0, m2[2], m2[3], 0, m2[4], m2[5], 1];
            /**
             * LOOP CALCULATE VALUE OF MATRIX IN ORDER [0, 8]
             */
            var x = [];
            for (var i = 0, len = m2.length; i < len; i++) {
                var surplus = i % 3, integer = ~~(i / 3);
                x[i] = m1[surplus + 0] * m2[integer * 3 + 0];
                x[i] += m1[surplus + 3] * m2[integer * 3 + 1];
                x[i] += m1[surplus + 6] * m2[integer * 3 + 2];
            }
            return [x[0], x[1], x[3], x[4], x[6], x[7]];
        },
        /**
         * CONVERT MATRIX TO CSS STRING
         */
        toCss: function (m) {
            var style = {};
            style[VA.prefix + 'transform'] = 'matrix(' + m.join(', ') + ')';
            return style;
        }
    };
    /**
     * TRANSFORM CSS3
     */
    var TF = {
        /**
         * CHECK VALUE OF TRANSFORM DEFAULT
         *  + Support remove value of transform default
         */
        CheckValueDefault: function (tf, optsCur) {
            var isTfDefault = true;
            /**
             * CASE: HAVE OPTION REMOVE TRANSFORM DEFAULT
             */
            if (optsCur.isClearTFDefault) {
                /**
                 * LOOP METHOD TO CHECK EACH TRANSFORM PROPERTIES
                 */
                for (var name in tf) {
                    if (isTfDefault) {
                        // Get default value of transform property
                        var valueDefault = VA['tfDefault'][name], valueCur = tf[name];
                        // Compare default value with current value
                        if (valueCur !== valueDefault)
                            isTfDefault = false;
                    }
                }
            }
            else
                isTfDefault = false;
            // Return value
            return isTfDefault ? {} : tf;
        },
        /**
         * INHERIT PROPERTIES OF TFBEGIN BUT KEEP ORDER OF TFEND
         *  + Different $.extend() jQuery
         */
        Extend: function (tfBegin, tfEnd, opts) {
            /**
             * CASE: PROPERTIES IN ORDER OF 'TFEND'
             */
            if (opts.isTFOrderByEnd) {
                // Loop to copy all properties in tfBegin but tfEnd not have
                for (var name in tfBegin) {
                    if (tfEnd[name] === UNDE) {
                        tfEnd[name] = tfBegin[name];
                    }
                }
            }
            else {
                tfEnd = $.extend(true, {}, tfBegin, tfEnd);
            }
            /**
             * PRORITY 'PERSPECTIVE' PROPERTY IN THE FIRST PLACE
             */
            var perspectiveDirect = tfEnd['perspectiveDirect'];
            if (perspectiveDirect !== UNDE) {
                tfEnd = $.extend(true, { perspectiveDirect: perspectiveDirect }, tfEnd);
            }
            // Return result
            return tfEnd;
        },
        /**
         * MAKE TRANSFORM FROM PARTICULAR PROPERTIES
         */
        FromProp: function (prop) {
            var tf = {};
            /**
             * CREATE LOOP TO SETUP EACH PROPERTIES OF MATRIX
             */
            for (var name in prop) {
                if ($.inArray(name, VA.nameTf) !== -1) {
                    /**
                     * REMOVE UNNECESSARY NAME
                     */
                    if (name == 'scale') {
                        tf['scaleX'] = tf['scaleY'] = prop[name];
                    }
                    else if (name == 'skew') {
                        tf['skewX'] = prop[name];
                    }
                    else {
                        tf[name] = prop[name];
                    }
                }
            }
            return tf;
        },
        /**
         * CONVERT VALUES HAVE OTHER UNIT TO 'PX'
         *  + Support convert '%' to 'px' unit
         */
        ConvertValueToPX: function ($anim, name, valueCur) {
            var aNamePercent = ['x', 'y', 'left', 'right', 'top', 'bottom'], WIDTH = 'OuterWidth', HEIGHT = 'OuterHeight', aFnSizeRef = [WIDTH, HEIGHT, WIDTH, WIDTH, HEIGHT, HEIGHT];
            /**
             * CONVERT VALUE '%' DEPENDS ON SIZE ITEM
             */
            function ConvertPercentByItem(vString) {
                // Check name of properties have supported
                var nameIndex = $.inArray(name, aNamePercent);
                if (nameIndex !== -1) {
                    // Convert '%' unit depends on size of Item
                    vString = parseFloat(vString);
                    vString = M[aFnSizeRef[nameIndex]]($anim) * vString / 100;
                    vString = Math.round(vString);
                }
                // Return result
                return vString;
            }
            /**
             * CONVERT VALUE '%' DEPENDS ON PARENT ITEM
             */
            function ConvertPercentByParent(vNum, selectorParent) {
                // Check name of properties have supported
                var nameIndex = $.inArray(name, aNamePercent);
                if (nameIndex !== -1) {
                    var $parent = $anim.parent();
                    if (!!selectorParent) {
                        var $select = $anim.closest(selectorParent);
                        if ($select.length)
                            $parent = $select;
                    }
                    vNum = M[aFnSizeRef[nameIndex]]($parent) * vNum / 100;
                    vNum = Math.round(vNum);
                }
                // Return result
                return vNum;
            }
            /**
             * CASE: VALUE IS STRING CONTAIN MATH
             *  + Only allow contain special character of Math
             *  + Limited the length of string < 200 characters -> for safe
             */
            var reOnlyContainMath = /^[0-9\(\)\+\-\*\/\%\s]|(\{.+\})+$/;
            if ((typeof valueCur == 'string') && reOnlyContainMath.test(valueCur) && (valueCur.length < 200)) {
                /**
                 * CONVERT VALUE '%PARENT' TO 'PX' DEPENDS ON SIZE OF PARENT ITEM
                 *  + Setup convert '%' depends on size of Item
                 */
                var reParent = /\d+\.?\d*\%?\{.+\}/g, matchParent = valueCur.match(reParent);
                if ($.isArray(matchParent)) {
                    for (var i = 0, len = matchParent.length; i < len; i++) {
                        // First, get value number in string
                        var vMatch = matchParent[i], vConvert = parseFloat(vMatch);
                        /**
                         * CASE: VALUE PERCENT(%)
                         */
                        var rePercent = /\d+\.?\d*\%\{(.+)\}/;
                        if (rePercent.test(vMatch)) {
                            var vParent = vMatch.match(rePercent), selectorParent = null;
                            if (vParent && vParent[1]) {
                                /**
                                 * CHECK VALID VALUE OF SELECTOR
                                 */
                                try {
                                    $(vParent[1]);
                                    selectorParent = vParent[1];
                                }
                                catch (e) {
                                    !!console && console.warn(e);
                                }
                            }
                            // Convert value '%' to 'px'
                            vConvert = ConvertPercentByParent(vConvert, selectorParent);
                        }
                        // Replace value Match with value converted
                        valueCur = valueCur.replace(vMatch, vConvert);
                    }
                }
                /**
                 * CONVERT VALUE '%' TO 'PX' DEPENDS ON SIZE OF ITEM
                 */
                var rePercent = /\d+\.?\d*\%/g, matchPercent = valueCur.match(rePercent);
                if ($.isArray(matchPercent)) {
                    for (var i = 0, len = matchPercent.length; i < len; i++) {
                        // Convert value '%' to 'px'
                        var vPercent = matchPercent[i], vPixel = ConvertPercentByItem(vPercent);
                        // Replace value 'px' into init string
                        valueCur = valueCur.replace(vPercent, vPixel);
                    }
                }
                /**
                 * EXECUTION MATH WITH STRING CONVERTED
                 *  + Only execution when string only contain number
                 */
                var reOnlyNumber = /^[0-9\(\)\+\-\*\/\%\s]+$/;
                if (reOnlyNumber.test(valueCur))
                    valueCur = eval(valueCur);
            }
            /**
             * RETURN RESUTL
             */
            return valueCur;
        },
        /**
         * CONVERT EACH PARTICULAR PROPERTIES TO CSS
         */
        ToCss: function (tf, opts) {
            /**
             * CHECK DEFAULT VALUE OF TRANSFORM
             */
            tf = TF.CheckValueDefault(tf, opts);
            /**
             * CONVERT PARTICULAR PROPERTIES TO GROUP PROPERTIES
             *  + Support properties arranged by order
             */
            var tfRaw = {};
            for (var name in tf) {
                /**
                 * ROUNDED VALUE
                 */
                var nFixed = /^(x|y|z)$/.test(name) ? 100 : 10000, tfCur = Math.round(tf[name] * nFixed) / nFixed;
                /**
                 * MOVE PARTICULAR PROPERTIES INTO GROUP
                 */
                if (/^(x|y|z)$/.test(name)) {
                    /**
                     * CASE: PARTICULAR XYZ POSITION
                     */
                    if (opts.isXYAlone) {
                        if (name == 'x' && tf.x !== UNDE)
                            tfRaw['x'] = tfCur;
                        if (name == 'y' && tf.y !== UNDE)
                            tfRaw['y'] = tfCur;
                        if (name == 'z' && tf.z !== UNDE)
                            tfRaw['z'] = tfCur;
                    }
                    else {
                        tfRaw.xy = tfRaw.xy || [0, 0, 0];
                        if (name == 'x' && tf.x !== UNDE)
                            tfRaw['xy'][0] = tfCur;
                        if (name == 'y' && tf.y !== UNDE)
                            tfRaw['xy'][1] = tfCur;
                        if (name == 'z' && tf.z !== UNDE)
                            tfRaw['xy'][2] = tfCur;
                    }
                }
                else if (/^scale/.test(name)) {
                    tfRaw.scale = tfRaw.scale || [1, 1];
                    if (name == 'scaleX' && tf.scaleX !== UNDE)
                        tfRaw['scale'][0] = tfCur;
                    if (name == 'scaleY' && tf.scaleY !== UNDE)
                        tfRaw['scale'][1] = tfCur;
                    if (name == 'scaleZ' && tf.scaleZ !== UNDE)
                        tfRaw['scale'].push(tfCur);
                }
                else if (/^skew/.test(name)) {
                    tfRaw.skew = tfRaw.skew || [0, 0];
                    if (name == 'skewX' && tf.skewX !== UNDE)
                        tfRaw['skew'][0] = tfCur;
                    if (name == 'skewY' && tf.skewY !== UNDE)
                        tfRaw['skew'][1] = tfCur;
                }
                else if (/^rotate/.test(name)) {
                    if (name == 'rotate' && tf.rotate !== UNDE)
                        tfRaw['rotate'] = tfCur;
                    if (name == 'rotateX' && tf.rotateX !== UNDE)
                        tfRaw['rotateX'] = tfCur;
                    if (name == 'rotateY' && tf.rotateY !== UNDE)
                        tfRaw['rotateY'] = tfCur;
                    if (name == 'rotateZ' && tf.rotateZ !== UNDE)
                        tfRaw['rotateZ'] = tfCur;
                }
                else if (/^perspectiveDirect$/.test(name)) {
                    tfRaw.perspectiveDirect = tfCur;
                }
            }
            /**
             * CONVERT TRANSFORM TO CSS
             */
            var isTf3D = is.tf3D, cssTf = '';
            for (var name in tfRaw) {
                /**
                 * CONVERT 'TRANSLATE'
                 */
                if (name == 'xy') {
                    cssTf += (isTf3D ? 'translate3d(_x_px, _y_px, _z_px) ' : 'translate(_x_px, _y_px) ')
                        .replace(/_x_/, tfRaw['xy'][0])
                        .replace(/_y_/, tfRaw['xy'][1])
                        .replace(/_z_/, tfRaw['xy'][2]);
                }
                else if (name == 'x') {
                    cssTf += 'translateX(_x_px) '.replace(/_x_/, tfRaw['x']);
                }
                else if (name == 'y') {
                    cssTf += 'translateY(_y_px) '.replace(/_y_/, tfRaw['y']);
                }
                else if (name == 'z') {
                    cssTf += (isTf3D ? 'translateZ(_z_px) ' : '')
                        .replace(/_z_/, tfRaw['z']);
                }
                else if (name == 'scale') {
                    var tfScale = tfRaw['scale'], str = ((isTf3D && tfScale.length == 3) ? 'scale3d(_x_, _y_, _z_) ' : 'scale(_x_, _y_) ')
                        .replace(/_x_/, tfScale[0])
                        .replace(/_y_/, tfScale[1])
                        .replace(/_z_/, tfScale[2]);
                    // Case: scaleX === scaleY
                    if (tfScale.length == 2 && tfScale[0] === tfScale[1]) {
                        str = 'scale(_x_) '.replace(/_x_/, tfScale[0]);
                    }
                    cssTf += str;
                }
                else if (name == 'skew') {
                    var tfSkew = tfRaw['skew'];
                    // Case: skewY has default value
                    if (tfSkew[1] === 0) {
                        cssTf += 'skew(_x_deg) '.replace(/_x_/, tfSkew[0]);
                    }
                    else {
                        cssTf += 'skew(_x_deg, _y_deg) '
                            .replace(/_x_/, tfSkew[0])
                            .replace(/_y_/, tfSkew[1]);
                    }
                }
                else if (name == 'rotate') {
                    cssTf += 'rotate(_x_deg) '.replace(/_x_/, tfRaw['rotate']);
                }
                else if (name == 'rotateX') {
                    cssTf += (isTf3D ? 'rotateX(_x_deg) ' : 'rotate(_x_deg) ')
                        .replace(/_x_/, tfRaw['rotateX']);
                }
                else if (name == 'rotateY') {
                    cssTf += (isTf3D ? 'rotateY(_y_deg) ' : '')
                        .replace(/_y_/, tfRaw['rotateY']);
                }
                else if (name == 'rotateZ') {
                    cssTf += (isTf3D ? 'rotateZ(_z_deg) ' : '')
                        .replace(/_z_/, tfRaw['rotateZ']);
                }
                else if (name == 'perspectiveDirect') {
                    cssTf += (isTf3D ? 'perspective(_x_px) ' : '')
                        .replace(/_x_/, tfRaw['perspectiveDirect']);
                }
            }
            // Remove whitespace at last position
            return cssTf.replace(/\s+$/, '');
        }
    };
    /**
     * DATABASE SYSTEM
     */
    var DB = {
        /**
         * CHECK RUBY ID OF ITEM HAVE EXIST IN SYSTEM
         */
        CheckRubyID: function ($item) {
            var dataRuby = null;
            /**
             * CREATE LOOP TO CHECK ALL ITEM IN DATA
             */
            for (var key in vData) {
                var $itemCur = vData[key]['$item'];
                if ($itemCur.is($item)) {
                    dataRuby = key;
                    break;
                }
            }
            return dataRuby;
        },
        /**
         * GET DATA RUBY ID OF ITEM IN SYSTEM
         *  + If it not exist then create new ID Ruby
         */
        GetRubyID: function ($item) {
            /**
             * CHECK RUBY ID OF ITEM HAVE EXIST ?
             */
            var dataRuby = DB.CheckRubyID($item);
            /**
             * CREATE NEW RUBY ID IF NOT EXIST IN SYSTEM
             */
            if (dataRuby === null) {
                for (var i = 0, dataLen = M.GetSize(vData); i <= dataLen; i++) {
                    if (vData[i] === UNDE) {
                        /**
                         * CREATE NEW ID IN SYSTEM
                         */
                        vData[i] = {
                            $item: $item,
                            id: null,
                            idDB: i,
                            prop: [],
                            opts: [],
                            cssStyle: null,
                            cssTf: null,
                            isAnimate: false
                        };
                        dataRuby = i;
                        break;
                    }
                }
            }
            // Store data
            return dataRuby;
        },
        /**
         * UPDATE DATABASE OF ITEM
         */
        Update: function ($item, prop, opts) {
            var rubyID = DB.GetRubyID($item), itemData = VA.data[rubyID];
            /**
             * SETUP 'PROP' & 'OPTS' AT FIRST
             */
            if (!prop)
                prop = {};
            if (!opts)
                opts = {};
            /**
             * SETUP 'OPTS'/'PROP' + STORE OPTION IN DATA SYSTEM
             * @param boolean isNew   Create new animate system
             */
            if (opts.isNew) {
                // Merge current options & default options
                opts = $.extend(true, {}, VA.optsAnimDefault, opts);
                // Reset Data system
                itemData.prop = [];
                itemData.opts = [];
            }
            else {
                // Merge current options & default options & inherit options
                opts = M.MergeOptions(opts, itemData['opts']);
            }
            // Convert name of properties to standard CSS
            prop = M.ValidName(prop, opts);
            // Store options into Data system
            itemData.prop.push(prop);
            itemData.opts.push(opts);
            return itemData;
        },
        /**
         * REMOVE DATABASE OF ITEM
         */
        Delete: function ($item) {
            var rubyID = DB.CheckRubyID($item);
            if (rubyID !== null)
                delete VA.data[rubyID];
        }
    };
    /**
     * SETUP OHTER GLOBAL VARIABLE IN PLUGIN
     */
    var __Init__ = function () {
        /**
         * THE GLOBAL PROPERTIES
         */
        VA.timeLoop = ~~(1000 / VA.fps);
        VA.prefix = M.CssCheck('transform', true);
        VA.isTf = is.tf = M.CssCheck('transform');
        VA.isTf3D = is.tf3D = M.CssCheck('perspective');
        // VA.isTf  = is.tf = true;
        // VA.isTf3D  = is.tf3D = false;
        VA.isTs = is.ts = M.CssCheck('transition');
        VA.isOpacity = is.opacity = M.CssCheck('opacity');
        /**
         * CONVERT NAME OF VARIABLE CAN BE PREFIX
         */
        var prefix = VA.prefix;
        VA.percentRef[prefix + 'transform-origin0'] = 'OuterWidth';
        VA.percentRef[prefix + 'transform-origin1'] = 'OuterHeight';
    }();
    /**
     * SETUP TIMER SYSTEM IN PLUGIN
     */
    function TIMER($item) {
        /**
         * STORE TIMER IN DATA
         */
        var that = this, vData = window.rt00VA.data;
        that.id = null;
        that.rubyID = null;
        /**
         * STORE ID ON SYSTEM
         */
        that.save = function () {
            vData[that.rubyID].id = that.id;
        };
        /**
         * REMOVE TIMER OF OBJECT
         */
        that.clear = function () {
            that.id = vData[that.rubyID].id;
            clearTimeout(that.id);
            clearInterval(that.id);
            vData[that.rubyID].id = that.id = null;
        };
        /**
         * FUNCTION CONTRUCTOR
         *  + Remove timer of object at first
         */
        var __contruct = function () {
            that.rubyID = DB.GetRubyID($item);
            that.clear();
        }();
    }
    /**
     * PLUGINS RUBY ANIMATE JQUERY
     *  + Incomplete 'start' & 'complete' options
     */
    function ANIMATE($anim) {
        var that = this, an = {}, myData = {}, styleCur = {}, isOverflowOnNode;
        /**
         * FUNCTION CLASS
         */
        /**
         * CHECK & INITIALIZATION ANIMATION
         */
        function Init() {
            /**
             * SETUP VARIABLE AT FIRST
             */
            an.rubyID = DB.GetRubyID($anim);
            myData = that.data = vData[an.rubyID];
            // Setup initialization timer of object
            if (myData.tsInit == UNDE)
                myData.tsInit = VA.tsCur;
            // Properties & options of object
            var prop = myData.prop, opts = myData.opts;
            an.propEnd = prop[prop.length - 1];
            an.optsEnd = opts[opts.length - 1];
            /**
             * SETUP AFTER START ANIMATION
             */
            SetupStyleBegin();
            Start();
        }
        /**
         * SETUP VALUE OF STYLE & TRANSFORM AT FIRST
         */
        function SetupStyleBegin() {
            // Setup properties of normal Style
            StyleBegin();
            // Setup properties of transform CSS
            TransformBegin();
        }
        /**
         * SETUP VALUE OF STYLE AT FIRST
         */
        function StyleBegin() {
            var styleBegin = an.optsEnd.styleBegin, styleEnd = an.optsEnd.styleEnd, opts = myData.opts, isAnimMulti = opts.length > 1;
            /**
             * LOOP TO SETUP VALUE NOT BE TRANSFORM CSS
             */
            for (var name in an.propEnd) {
                if ($.inArray(name, VA.nameTf) === -1) {
                    /**
                     * SETUP STYLE END
                     *  + Parse & convert value of StyleEnd
                     */
                    var valueCur = an['propEnd'][name];
                    styleEnd[name] = M.ParseCssStyle(valueCur);
                    /**
                     * SETUP STYLE BEGIN
                     */
                    // Case: name of properties have fixed value -> inherit value of tfEnd
                    if ($.inArray(name, VA.propFixed) !== -1) {
                        styleBegin[name] = styleEnd[name];
                    }
                    else {
                        // Parse & convert value of StyleBegin
                        valueCur = $anim.css(name);
                        styleBegin[name] = M.ParseCssStyle(valueCur);
                    }
                }
            }
            // Inherit StyleEnd of animation before
            if (isAnimMulti)
                styleBegin = $.extend(styleBegin, opts[opts.length - 2]['styleEnd']);
            // Inherit properties of CSS Style 'point' have setup before
            if (myData.cssStyle !== null) {
                styleBegin = $.extend(true, styleBegin, myData.cssStyle);
                // Remove properties CSS Style after inherit
                myData.cssStyle = null;
            }
            /**
             * SETUP INHERIT PROPERTIES OF STYLE-END FROM STYLE-BEGIN
             */
            for (var name in styleBegin) {
                if (styleEnd[name] === UNDE) {
                    styleEnd[name] = styleBegin[name];
                }
            }
        }
        /**
         * SETUP VALUE OF TRANSFORM AT FIRST
         */
        function TransformBegin() {
            var opts = myData.opts;
            /**
             * GET TRANSFORM OF OBJECT AT FIRST
             */
            // Case: have many continuous animation
            var tfBegin;
            if (opts.length > 1) {
                // Get Transform-begin from Transform-end before
                tfBegin = $.extend({}, opts[opts.length - 2]['tfEnd']);
            }
            else {
                tfBegin = myData.tfCur;
                if (tfBegin == UNDE) {
                    var matrixBegin = MATRIX.getFromItem($anim);
                    /**
                     * PARSE MATRIX TO INITIAL PROPERTIES
                     */
                    tfBegin = MATRIX.parse(matrixBegin);
                }
            }
            // Inherit the properties CSS Transform 'point' have setup before
            if (myData.cssTf !== null) {
                tfBegin = $.extend(true, tfBegin, myData.cssTf);
                // Remove CSS Transform property after inherit
                myData.cssTf = null;
            }
            /**
             * GET TRANSFORM-END FROM SETUP PROPERTIES
             */
            var tfEnd = TF.FromProp(an.propEnd);
            /**
             * SETUP TRANSFORM INHERIT FROM PROPERTIES BEFORE
             */
            // Inherit 'tfBegin' properties but 'tfEnd' does not have, order of Transform depends on options
            tfEnd = TF.Extend(tfBegin, tfEnd, an.optsEnd);
            var tfDefault = VA.tfDefault;
            for (var name in tfEnd) {
                /**
                 * ADDITIONAL PROPERTIES WITH TRANSFORM-BEGIN
                 */
                if (tfBegin[name] === UNDE) {
                    // Case: value of properties !== default value
                    if (tfEnd[name] != tfDefault[name]) {
                        // Case: name of property has fixed value -> inherit value from 'tfEnd'
                        if ($.inArray(name, VA.propFixed) !== -1)
                            tfBegin[name] = tfEnd[name];
                        else
                            tfBegin[name] = tfDefault[name];
                    }
                    else {
                        delete tfEnd[name];
                    }
                }
                /**
                 * REMOVE PROPERTIES ON TRANSFORM BEGIN - END SIMILAR TO DEFAULT PROPERTIES
                 */
                if (tfBegin[name] == tfDefault[name] && tfEnd[name] == tfDefault[name]) {
                    delete tfBegin[name];
                    delete tfEnd[name];
                }
            }
            an.optsEnd.tfBegin = tfBegin;
            an.optsEnd.tfEnd = tfEnd;
        }
        /**
         * SETUP VALUE WHEN BEGIN ANIMATION
         */
        function Start() {
            /**
             * INSERT STYLE 'OVERFLOW' AT FIRST: FIXED FOR OLD BROWSER
             */
            var style = $anim.attr('style');
            isOverflowOnNode = style && style.indexOf('overflow') !== -1;
            // Unavailable
            // !isOverflowOnNode && $anim.css('overflow', 'hidden');
            /**
             * EXECUTE FUNCTION 'START' AT FIRST
             */
            !!an.optsEnd.start && an.optsEnd.start();
        }
        /**
         * SETUP NEXT VALUE OF OBJECT, CALL FUNCTION FROM 'TWEEN'
         * @param boolean isForceAnim   Allways setup style for object
         */
        that.next = function (isForceAnim) {
            /**
             * SETUP CURRENT TIME
             * @param Int   an.xCur     Current time, in range [0, 1]
             * @param Boolean isAnimate   Check setup current animation
             */
            var opts = myData.opts, isAnimate = false, isComplete = false, tCur = myData.tCur = VA.tsCur - myData.tsInit;
            for (var i = 0, len = opts.length; i < len; i++) {
                var optsCur = opts[i];
                // Case: tCur at the forward position the first Aniamtion
                if (tCur < optsCur.tPlay && i == 0) {
                    // Case: allways setup Style of object
                    if (isForceAnim) {
                        an.optsPos = i;
                        an.xCur = 0;
                    }
                    else
                        an.xCur = null;
                    break;
                }
                else if (tCur > optsCur.tEnd && i == len - 1) {
                    an.optsPos = i;
                    an.xCur = 1;
                    isComplete = true;
                    break;
                }
                else if (optsCur.tPlay <= tCur && tCur <= optsCur.tEnd) {
                    an.optsPos = i;
                    an.xCur = $.GSGDEasing[optsCur.easing](null, tCur - optsCur.tPlay, 0, 1, optsCur.duration);
                    isAnimate = true;
                    break;
                }
                else if (!!opts[i + 1] && optsCur.tEnd < tCur && tCur < opts[i + 1].tPlay) {
                    an.optsPos = i;
                    an.xCur = 1;
                    break;
                }
            }
            /**
             * SETUP VALUE OF CURRENT STYLE ON OBJECT
             */
            if (an.xCur !== null && opts.length) {
                // First, reset size of Item
                GetSizeItem();
                // Reset variable 'styleCur'
                styleCur = {};
                // Setup current Style value of the object
                StyleNormalCur();
                StyleTransformCur();
                $anim.css(styleCur);
            }
            /**
             * EXECUTE OPTION 'COMPLETE'
             */
            if (isComplete) {
                var optsCur = opts[an.optsPos];
                !!optsCur.complete && optsCur.complete();
            }
            /**
             * Return value check have Animation
             */
            return isAnimate;
        };
        /**
         * CONVERT VALUE HAS OTHER UNIT TO 'PX'
         *  + Support convert '%' to 'px'
         */
        function ConvertValue(name, valueCur) {
            /*
             * CASE: STRING
             */
            if (typeof valueCur == 'string') {
                /**
                 * CASE: UNIT IS 'PX'
                 */
                if (/px$/.test(valueCur)) {
                    valueCur = parseFloat(valueCur);
                }
                else if (/\%$/.test(valueCur)) {
                    // Name of property exist in conversion system
                    var nameSizeFn = VA.percentRef[name];
                    if (nameSizeFn !== UNDE) {
                        var sizeCur = an['size'][nameSizeFn];
                        valueCur = sizeCur * parseFloat(valueCur) / 100;
                    }
                }
            }
            /**
             * RETURN VALUE AFTER SETUP
             */
            return valueCur;
        }
        /**
         * GET SIZE OF ITEM IN CURRENT TIME
         */
        function GetSizeItem() {
            an.size = {
                'OuterWidth': M.OuterWidth($anim),
                'OuterHeight': M.OuterHeight($anim)
            };
        }
        /**
         * SETUP VALUE PLUS DEPENDS ON PROPERTY NAME
         */
        function ValueCurForNumber(name, valueBegin, valueEnd) {
            var nameToFloat = ['opacity'], plus = (valueEnd - valueBegin) * an.xCur;
            // Case: rounded number float
            if ($.inArray(name, nameToFloat) !== -1) {
                plus = Math.round(plus * 1000) / 1000;
            }
            else {
                /**
                 * ADDITIONAL 1 FRACTION : ANIMATE SMOOTHER
                 */
                plus = Math.round(plus * 10) / 10;
            }
            return valueBegin + plus;
        }
        /**
         * SETUP VALUE OF PROPERTY IS ARRAY[]
         */
        function ValueCurForArray(name, valueBegin, valueEnd) {
            var aValue = [];
            /**
             * SETUP EACH VALUE IN ARRAY[]
             *  + Remove element >= 2 : Browser not support Transform 3D
             */
            for (var i = 0, len = valueEnd.length; i < len && !(i >= 2 && !VA.isTf3D); i++) {
                /**
                 * CONVERT VALUE BEGIN - END
                 */
                var vaEndCur = ConvertValue(name + i, valueEnd[i]), vaBeginCur = ConvertValue(name + i, valueBegin[i]);
                // Case: value 'begin' not exist
                if (vaBeginCur === UNDE)
                    vaBeginCur = vaEndCur;
                /**
                 * SETUP CURRENT VALUE + STORE IN ARRAY[]
                 */
                var plus = (vaEndCur - vaBeginCur) * an.xCur, valueCur = Math.round((vaBeginCur + plus) * 10) / 10;
                aValue.push(valueCur + 'px');
            }
            /**
             * CONVERT ARRAY TO STRING
             */
            return aValue.join(' ');
        }
        /**
         * SETUP NORMAL PROPERTIES AT THE CURRENT TIME
         */
        function StyleNormalCur() {
            var optsCur = myData['opts'][an.optsPos];
            for (var name in optsCur['styleBegin']) {
                var valueBegin = optsCur['styleBegin'][name], valueEnd = optsCur['styleEnd'][name], valueCur;
                /**
                 * CASE: PROPERTY HAS VALUE IS ARRAY[]
                 */
                if ($.isArray(valueBegin)) {
                    valueCur = ValueCurForArray(name, valueBegin, valueEnd);
                }
                else {
                    // Convert value String to Number (if posible)
                    valueBegin = ConvertValue(name, valueBegin);
                    valueEnd = ConvertValue(name, valueEnd);
                    // Case: value of property is Number
                    if ($.isNumeric(valueBegin) && $.isNumeric(valueEnd)) {
                        valueCur = ValueCurForNumber(name, valueBegin, valueEnd);
                    }
                    else {
                        valueCur = valueBegin;
                    }
                }
                /**
                 * REMOVE STYLES HAVE DEFAULT VALUE
                 */
                if (optsCur.isClearStyleDefault && VA['styleDefault'][name] === valueCur) {
                    valueCur = '';
                }
                /**
                 * STORE VALUE OF CURRENT PROPERTY
                 */
                styleCur[name] = valueCur;
            }
        }
        /**
         * SETUP 'TRANSFORM' IN CURRENT TIME
         */
        function StyleTransformCur() {
            /**
             * SETUP CURRENT VALUE EACH TRANSFORM PROPERTIES
             */
            var optsCur = myData['opts'][an.optsPos], tfBegin = optsCur.tfBegin, tfEnd = optsCur.tfEnd, tfCur = {};
            for (var name in tfEnd) {
                // Setup value 'plus' of each properties
                var tfBeginCur = TF.ConvertValueToPX($anim, name, tfBegin[name]), tfEndCur = TF.ConvertValueToPX($anim, name, tfEnd[name]), valuePlus = (tfEndCur - tfBeginCur) * an.xCur, valueCur = tfBeginCur + valuePlus;
                // Value of current property
                tfCur[name] = valueCur;
            }
            /**
             * CONVERT PARTICULAR PROPERTY OF TRANSFORM TO CSS
             */
            var cssTf = TF.ToCss(tfCur, optsCur);
            /**
             * STORE CURRENT TRANSFORM CSS
             */
            var nameTf = VA.prefix + 'transform';
            styleCur[nameTf] = cssTf;
            // Store current Transform into system
            myData.tfCur = tfCur;
        }
        // Initialize Animation
        Init();
    }
    /**
     * SETUP MAIN PLUGIN
     */
    window.RubyTween = function () {
        var that = this, tw = that.tw = {
            id: VA.nTween++,
            $items: $(),
            data: [],
            animate: [],
            tsInit: +new Date(),
            tCur: 0,
            tMax: Number.MAX_VALUE,
            status: 'pause',
            dirs: 'forward',
            timeline: [],
            timeData: [],
            timeRef: {},
            timePosCur: 0,
            timeTypeCur: null
        };
        /**
         * SETUP ID-ITEM IN TWEEN SYSTEM
         */
        function SetupItemID(itemData, $item, prop, opts) {
            // Check object exist on Tween
            if (itemData.tweenID === UNDE) {
                itemData.tweenID = tw.id;
            }
            else {
                /**
                 * UPDATE PROPERTIES OF ITEM WHEN ID-ITEM !== ID-TWEEN
                 */
                if (itemData.tweenID != tw.id) {
                    // Noties to reset 'prop' & 'opts'
                    opts.isNew = true;
                    // Update time of object
                    itemData.tsInit = tw.tsCur;
                    itemData.tCur = 0;
                    // Re-register current 'prop' & 'opts'
                    itemData = DB.Update($item, prop, opts);
                    itemData.tweenID = tw.id;
                }
            }
        }
        /**
         * CHECK ITEM EXIST IN SYSTEM
         */
        function CheckItemExist(itemData) {
            for (var i = 0, len = tw.animate.length; i < len; i++) {
                if (tw['animate'][i]['data']['$item'].is(itemData.$item))
                    return true;
            }
            return false;
        }
        /**
         * UPDATE INITIALIZATION TIME OF ALL ITEM
         */
        function UpdateTimeInitAllItem() {
            for (var i = 0, len = tw.animate.length; i < len; i++) {
                // Update initialization time for each object
                var dataCur = tw['animate'][i]['data'];
                dataCur.tsInit = tw.tsInit;
            }
        }
        /**
         * SETUP TIMELINE SYSTEM
         */
        function TimelineSetup($item, itemData) {
            /**
             * TIME 'WAIT' - 'PLAY' - 'END' OF OBJECT
             */
            tw.$items = tw.$items.add($item);
            var optsLen = itemData.opts.length, optsEnd = itemData.opts[optsLen - 1], optsLast = itemData.opts[optsLen - 2];
            optsEnd.tWait = (optsLen == 1) ? 0 : optsLast.tEnd;
            optsEnd.tPlay = optsEnd.tWait + optsEnd.delay;
            optsEnd.tEnd = optsEnd.tPlay + optsEnd.duration;
            /**
             * INSERT TIME WAIT - PLAY - END INTO TIMELINE SYSTEM
             */
            if ($.inArray(optsEnd.tWait, tw.timeData) === -1) {
                tw.timeData.push(optsEnd.tWait);
                tw.timeRef[optsEnd.tWait] = 'wait';
            }
            if ($.inArray(optsEnd.tPlay, tw.timeData) === -1) {
                tw.timeData.push(optsEnd.tPlay);
                tw.timeRef[optsEnd.tPlay] = 'play';
            }
            else {
                tw.timeRef[optsEnd.tPlay] = 'play';
            }
            if ($.inArray(optsEnd.tEnd, tw.timeData) === -1) {
                tw.timeData.push(optsEnd.tEnd);
                tw.timeRef[optsEnd.tEnd] = 'end';
            }
            /**
             * ARRANGE VALUE IN ARRAY[] INCREASE
             */
            tw.timeData = M.ArrayMinToMax(tw.timeData);
            tw.tMax = tw.timeData[tw.timeData.length - 1];
            /**
             * RESET TIMELINE SYSTEM
             */
            tw.timeline = [];
            var statusLast = 'end';
            for (var i = 0, len = tw.timeData.length; i < len; i++) {
                var timeCur = tw.timeData[i], timeNext = tw.timeData[i + 1], statusCur = tw.timeRef[timeCur], statusNext = tw.timeRef[timeNext];
                /**
                 * CASE: TIMEOUT 'END - WAIT'
                 * CASE: TIMEOUT 'END - PLAY'
                 */
                var isTimeoutWait = statusLast == 'end' && statusCur == 'wait', isTimeoutEnd = statusCur == 'end' && statusNext == 'play';
                if (isTimeoutWait || isTimeoutEnd) {
                    /**
                     * FIND NEXT VALUE
                     */
                    var valuePlayNext;
                    if (isTimeoutWait) {
                        for (var j = i; j < len; j++) {
                            if (tw.timeRef[tw.timeData[j]] == 'play') {
                                valuePlayNext = tw.timeData[j];
                                break;
                            }
                        }
                    }
                    if (isTimeoutEnd)
                        valuePlayNext = timeNext;
                    /**
                     * SETUP 'TIMEOUT' VALUE
                     */
                    tw.timeline.push({
                        'type': 'timeout',
                        'time': timeCur,
                        'delay': valuePlayNext - timeCur
                    });
                }
                /**
                 * CASE: INTERVAL 'WAIT - PLAY'
                 * CASE: INTERVAL 'END - PLAY'
                 */
                if (/^(wait|end)$/.test(statusLast) && statusCur == 'play') {
                    tw.timeline.push({
                        'type': 'interval',
                        'time': timeCur
                    });
                }
                /**
                 * SETUP END EACH LOOP
                 */
                statusLast = statusCur;
            }
            /**
             * REMOVE 'TIMEOUT' INSIDE 'INTERVAL'
             */
            var timeline = $.extend([], tw.timeline);
            for (var i = 0; i < timeline.length; i++) {
                if (timeline[i].type == 'timeout') {
                    /**
                     * CREATE LOOP TO CHECK EACH OBJECT HAS 'INTERVAL' CONTAIN CURRENT 'TIMEOUT'
                     */
                    for (var j = 0, lenJ = tw.animate.length; j < lenJ; j++) {
                        var dataCur = tw['animate'][j]['data'];
                        if (dataCur.tPlay < timeline[i].time && timeline[i].time < dataCur.tEnd) {
                            // Remove next 'Timeout' & 'Interval' in Timeline array[]
                            timeline.splice(i, 2);
                            i--;
                            break;
                        }
                    }
                }
            }
            tw.timeline = timeline;
        }
        /**
         * UDPATE CURRENT POSITION IN TIMELINE
         */
        function TimelinePosCur() {
            var pos = null;
            for (var i = 0, len = tw.timeline.length; i < len; i++) {
                if (tw.timeline[i].time > tw.tCur) {
                    pos = i - 1;
                    break;
                }
            }
            // Case: no any value when get value-end in Timeline array[]
            if (pos === null)
                pos = tw.timeline.length - 1;
            // Store position of Animation
            tw.timePosCur = pos;
        }
        /**
         * SETUP PLAY ANIMATION
         */
        function Play() {
            var dirs = tw.dirs;
            /**
             * GET CURRENT TIME DEPENDS ON 'FORWARD' - 'REVERSE' DIRECTION
             *  + Case 'reverse': first reduce time 'tsInit'
             */
            var tsLast = tw.tsCur;
            tw.tsCur = VA.tsCur = +new Date();
            // Case: 'forward' direction
            if (dirs == 'forward') {
                tw.tCur = tw.tsCur - tw.tsInit;
            }
            else if (dirs == 'reverse') {
                tw.tCur -= tw.tsCur - tsLast;
                // Update time 'Init' for Tween & Items
                tw.tsInit = tw.tsCur - tw.tCur;
                UpdateTimeInitAllItem();
            }
            /**
             * UPDATE CURRENT POSITION IN TIMELINE
             */
            TimelinePosCur();
            // Case: 'reverse' position with Animate < 0
            if (dirs == 'reverse' && tw.timePosCur < 0) {
                // Mark sure setup Transform at first
                Next();
                // Not continue setup
                return;
            }
            /**
             * SETUP DURATION OF TIMER IF TYPE CURRENT TIMELINE IS 'TIMEOUT'
             */
            var tlCur = tw.timeline[tw.timePosCur], tTimeout = 0;
            if (tlCur.type == 'timeout') {
                if (dirs == 'forward')
                    tTimeout = tlCur.delay - (tw.tCur - tlCur.time);
                if (dirs == 'reverse')
                    tTimeout = tw.tCur - tlCur.time;
            }
            /**
             * RESET CURRENT $ANIMATION
             */
            tw.animateCur = $.extend([], tw.animate);
            /**
             * CASE: CURRENT STATUS IS 'WAIT'
             */
            if (tw.status == 'wait') {
                // First remove 'timer' before
                clearTimeout(tw.timer);
                if (tlCur.type == 'timeout') {
                    tw.timer = setTimeout(Play, tTimeout);
                }
                else if (tlCur.type == 'interval') {
                    tw.timer = setInterval(Next, VA.timeLoop);
                }
            }
            else if (tw.status == 'pause') {
                /**
                 * CASE: 'TIMEOUT'
                 */
                if (tlCur.type == 'timeout') {
                    tw.status = 'wait';
                    tw.timer = setTimeout(Play, tTimeout);
                }
                else if (tlCur.type == 'interval') {
                    tw.status = 'play';
                    tw.timer = setInterval(Next, VA.timeLoop);
                }
            }
        }
        /**
         * SETUP NEXT VALUE OF ALL OBJECTS
         *  + Function only execute from 'Play()'
         */
        function Next() {
            var dirs = tw.dirs;
            /**
             * CONDITIONAL EXECUTION
             */
            var numAnim = tw.animateCur.length;
            if (!numAnim) {
                clearInterval(tw.timer);
                return;
            }
            /**
             * GET CURRENT TIME DEPENDS ON 'FORWARD' - 'REVERSE' DIRECTION
             *  + Case 'reverse': first reduce time 'tsInit'
             */
            var tsLast = tw.tsCur;
            tw.tsCur = VA.tsCur = +new Date();
            // Case: 'forward'
            if (dirs == 'forward') {
                tw.tCur = tw.tsCur - tw.tsInit;
            }
            else if (dirs == 'reverse') {
                tw.tCur -= tw.tsCur - tsLast;
                // Update time 'init' for Tween & Items
                tw.tsInit = tw.tsCur - tw.tCur;
                UpdateTimeInitAllItem();
            }
            // Execute function 'step' (if have) when next animation
            !!tw.evStep && tw.evStep();
            /**
             * SETUP CURRENT VALUE STYLE OF OBJECTS
             */
            for (var i = 0, len = tw.animateCur.length; i < len; i++) {
                var isNext = tw.animateCur[i].next();
                /**
                 * REMOVE ANIMATE OF CURRENT OBJECT NEU NOT HAVE NEXT VALUE
                 */
                if (!isNext)
                    numAnim--;
                if (!numAnim) {
                    clearInterval(tw.timer);
                    /**
                     * CASE: 'WAIT' FOR NEXT ANIMATION
                     */
                    if (tw.tCur < tw.tMax) {
                        // Case: 'forward'
                        if (dirs == 'forward') {
                            tw.status = 'wait';
                            Play();
                        }
                        else if (dirs == 'reverse') {
                            /**
                             * CASE: TIME 'WAIT' BETWEEN ANIAMTIONS
                             */
                            if (tw.tCur > 0) {
                                tw.status = 'wait';
                                Play();
                            }
                            else {
                                // Reset direction of Tween
                                tw.dirs = 'forward';
                                // Mark sure setup Transform at first
                                // Included setup status
                                that.go(0);
                                // Execute function 'complete' (if have) when complete animation
                                !!tw.evComplete && tw.evComplete();
                            }
                        }
                    }
                    else if (tw.tCur >= tw.tMax) {
                        tw.status = 'pause';
                        // Execute fuction 'complete' (if have) when complete animation
                        !!tw.evComplete && tw.evComplete();
                    }
                }
            }
        }
        /**
         * SETUP ANIMATE-TRANSFORM FOR OBJECT
         */
        that.animate = function ($item, prop, opts, isAutoPlay) {
            // Conditional execution
            if (!($item && $item.length))
                return that;
            /**
             * GET CURRENT TIME
             *  + Support for setup below
             */
            tw.tsCur = VA.tsCur = +new Date();
            tw.tCur = tw.tsCur - tw.tsInit;
            /**
             * SETUP & STORE 'PROP' - 'OPTS' OF ITEM INTO SYSTEM
             */
            var itemData = DB.Update($item, prop, opts);
            // Get value of 'opts' have stored if 'opts' not have value at first
            if (!opts)
                opts = itemData.opts[itemData.opts.length - 1];
            // Case: create new animation
            if (opts.isNew) {
                // Reset ID-Tween if setup new Animation
                itemData.tweenID = null;
            }
            // Variable to show Item have animate
            itemData.isAnimate = true;
            // Setup Item ID
            SetupItemID(itemData, $item, prop, opts);
            /**
             * INSERT TIME ANIMATION OF OBJECT INTO TIMELINE SYSTEM
             *  + Must have Item datavase before
             */
            TimelineSetup($item, itemData);
            /**
             * SETUP FOR EACH OBJECT
             */
            var animateCur = new ANIMATE($item);
            !CheckItemExist(itemData) && tw.animate.push(animateCur);
            /**
             * AUTOMATIC SETUP 'PLAY' ANIMATE
             *  + Not is parameter, default is 'true'
             */
            isAutoPlay = (isAutoPlay === UNDE) ? true : isAutoPlay;
            isAutoPlay && Play();
            // Return RubyTween
            return that;
        };
        /**
         * SETUP CSS TRANSFORM FOR OBJECT
         */
        that.css = function ($item, prop, opts) {
            // Conditional execution
            if (!($item && $item.length))
                return that;
            // Update CSS options with default options
            opts = $.extend(true, {}, VA.optsCssDefault, opts);
            /**
             * CASE: RESET TWEEN-ANIMATE BY CSS
             */
            var optsType = opts.type;
            if (optsType === 'reset') {
                /**
                 * SETUP THUOC TINH MAC DINH
                 *  + Support remove properties relate to CSS Transform
                 */
                prop = $.extend({
                    'originTF': '',
                    'perspective': ''
                }, prop);
                /**
                 * RESET 'PROP' & 'OPTS' OF ITEM IN SYSTEM
                 */
                // Pause Tween first
                that.pause();
                // Reset 'prop' & 'opts' of Item on Database
                opts.isNew = true;
                // Get data of ITem by 'DB.Update()'
                var itemData = DB.Update($item, prop, opts);
                // Remove Item from Tween system
                itemData.tweenID = null;
                /**
                 * SETUP PROPERTY CSS ON ITEM
                 */
                var styleCur = {};
                prop = itemData.prop[0];
                opts = itemData.opts[0];
                // Get property !== CSS Transfrom
                for (var name in prop) {
                    if ($.inArray(name, VA.nameTf) === -1) {
                        styleCur[name] = prop[name];
                    }
                }
                // Get property of CSS Transform
                var propTf = TF.FromProp(prop);
                // Store Transform property into main variable: when not convert value
                itemData.tfCur = $.extend({}, propTf);
                // Convert special value of CSS Transform
                for (var name in propTf) {
                    propTf[name] = TF.ConvertValueToPX($item, name, propTf[name]);
                }
                // Convert all properties of CSS Tranform to String
                var cssTf = TF.ToCss(propTf, opts);
                // Insert CSS Transform into main Style
                styleCur[VA.prefix + 'transform'] = cssTf;
                // Setup all properties of CSS on Item
                $item.css(styleCur);
                /**
                 * OTHER SETUP
                 */
                // Store $Item into system
                tw.$items = tw.$items.add($item);
            }
            else if (/^(point|inherit)$/.test(optsType)) {
                var rubyID = DB.GetRubyID($item), itemData = VA.data[rubyID], cssStyle = {}, cssTf = {};
                /**
                 * DISTINGUISH PROPERTIES OF TRANSFORM AND WITHOUT TRANSFORM
                 */
                // Convert name of property for standard
                prop = M.ValidName(prop, opts);
                for (var name in prop) {
                    var valueCur = prop[name];
                    // Case: property not Transfrom
                    if ($.inArray(name, VA.nameTf) === -1) {
                        // Parse & convert value of CSS Style
                        cssStyle[name] = M.ParseCssStyle(valueCur);
                    }
                    else {
                        cssTf[name] = valueCur;
                    }
                }
                /**
                 * INHERIT ALL DEFAULT PROPERTIES TRANSFORM IF TYPE 'POINT'
                 */
                if (optsType == 'point') {
                    cssTf = TF.Extend(VA.tfDefault, cssTf, { 'isTFOrderByEnd': true });
                }
                /**
                 * STORE CSS-STYLE & CSS-TRANSFORM FOR NEXT ANIMATION
                 */
                itemData.cssStyle = cssStyle;
                itemData.cssTf = cssTf;
            }
            return that;
        };
        /**
         * GO TO POSITION ON TIMELINE
         */
        that.go = function (pos, unit) {
            // Pause animate of objects
            that.pause();
            /**
             * SETUP CURRENT TIME DEPENDS ON UNIT
             */
            // Case: default unit is '%'
            var tCur = pos * tw.tMax / 100;
            // Case: unit is 'ms' (milisecond)
            if (unit == 'ms')
                tCur = pos;
            /**
             * CASE: NOT ANIMATE IN SYSTEM & START POSITION
             *  + Setup CSS at first by 'that.css()'
             */
            var animNum = tw.animate.length;
            if (tCur == 0 && !animNum) {
                /**
                 * LOOP TO SETUP EACH OBJECT
                 */
                for (var i = 0, len = tw.$items.length; i < len; i++) {
                    var $itemCur = tw.$items.eq(i), itemData = VA['data'][DB.GetRubyID($itemCur)];
                    // Condition setup CSS for object
                    if (!itemData['isAnimate'] && itemData['prop'].length == 1) {
                        that.css($itemCur, itemData['prop'][0], itemData['opts'][0]);
                    }
                }
            }
            else {
                /**
                 * UPDATE CURRENT TIME
                 */
                tw.tCur = tCur;
                tw.tsCur = VA.tsCur = +new Date();
                tw.tsInit = tw.tsCur - tw.tCur;
                for (var i = 0, len = tw.animate.length; i < len; i++) {
                    // Update time 'init' for each object
                    tw['animate'][i]['data']['tsInit'] = tw.tsInit;
                    // Setup value current Style of objects
                    tw.animate[i].next(true);
                }
            }
            // Return RubyTween
            return that;
        };
        /**
         * EXECUTE 'PAUSE' TWEEN
         */
        that.pause = function () {
            /**
             * REMOVE TIMER OF TIMELINE
             */
            if (that.isPlay()) {
                clearTimeout(tw.timer);
                clearInterval(tw.timer);
                tw.status = 'pause';
            }
            // Return RubyTween
            return that;
        };
        /**
         * EXECUTE 'PLAY' TWEEN
         */
        that.play = function () {
            /**
             * CONDITIONAL EXECUTION
             */
            if (that.isPause() && tw.animate.length) {
                /**
                 * UPDATE INTIALIZATION TIME
                 */
                tw.tsCur = VA.tsCur = +new Date();
                tw.tsInit = tw.tsCur - tw.tCur;
                // Update time 'init' for all Item
                UpdateTimeInitAllItem();
                /**
                 * PLAY CONTINUE ANIMATION
                 */
                Play();
            }
            return that;
        };
        /**
         * TOGGLE BETWEEN 'PLAY' & 'PAUSE' & 'RESTART'
         */
        that.toggle = function () {
            // Case: position is end
            if (tw.tCur >= tw.tMax)
                that.restart();
            else
                that.isPause() ? that.play() : that.pause();
            return that;
        };
        /**
         * EXECUTE CONTINUE TWEEN WHEN PAUSE
         */
        that.resume = function () {
            // Update current position & continue to play Tween
            that.go(tw.tCur, 'ms').play();
            return that;
        };
        /**
         * RESTART TWEEN ANIMATE
         */
        that.restart = function () {
            that.go(0).play();
            return that;
        };
        /**
         * REVERSE TWEEN ANIMATE
         */
        that.reverse = function () {
            // Variable to show Tween direction
            tw.dirs = 'reverse';
            // Update position Tween at current time
            that.go(tw.tCur, 'ms');
            // Update position Tween if at first place
            if (tw.tCur <= 0)
                that.go(100);
            // Continue play
            that.play();
            return that;
        };
        /**
         * RESET CURRENT TWEEN SYSTEM
         *  + Remove properties of Item out DB
         */
        that.reset = function (isDeleteItemDB) {
            /**
             * DELETE ALL ITEM IN DATABASE SYSTEM
             */
            if (isDeleteItemDB) {
                for (var i = 0, len = tw.animate.length; i < len; i++) {
                    var idDBCur = tw['animate'][i]['data']['idDB'];
                    delete vData[idDBCur];
                }
            }
            /**
             * RESET OTHER PROPERTIES
             */
            tw.dirs = 'forward';
            tw.tCur = 0;
            tw.tMax = 0;
            tw.timeData = [];
            tw.animate = [];
            tw.$items = $();
            tw.evComplete = null;
            tw.evStep = null;
            return that;
        };
        /**
         * REMOVE DATABASE OF OBJECT IN SYSTEM
         */
        that.clearDB = function ($item) {
            // console.log('clear');
        };
        // Get the current value position - unit is '%'
        that.positionCur = function () {
            // The current position of Tween, value is unit '%'
            // Round 4 number after dot
            var posCur = Math.round(tw.tCur / tw.tMax * 1000000) / 10000;
            if (posCur > 100)
                posCur = 100;
            // Return value
            return posCur;
        };
        // Check Tween playing
        that.isPlay = function () {
            return /^(wait|play)$/.test(tw.status);
        };
        // Check Tween pause
        that.isPause = function () {
            return /^(stop|pause)$/.test(tw.status);
        };
        /**
         * EVENT 'COMPLETE' CONTAIN METHODS - FUNCTION
         */
        that.eventComplete = function (fn) {
            tw.evComplete = fn;
            return that;
        };
        /**
         * EXECUTE EVENT 'COMPLETE'
         */
        that.complete = function () {
            // Go to position-end
            that.go(100);
            // Execute function 'complete' (if have) when aniamte complete
            !!tw.evComplete && tw.evComplete();
            return that;
        };
        /**
         * EVENT 'STEP' FOR TWEEN
         */
        that.eventStep = function (fn) {
            tw.evStep = fn;
            return that;
        };
    };
}(jQuery));
/**
 * MODULE SWIPE
 */
(function ($) {
    // Check variable module
    window.rt01MODULE = window.rt01MODULE || {};
    // Global variables
    var that, o, cs, va, is, ti, M, VIEW, POSITION, PAG;
    /**
     * UPDATE GLOBAL VARIABLES
     */
    function VariableModule(self) {
        that = self;
        o = self.o;
        cs = self.cs;
        va = self.va;
        is = self.is;
        ti = self.ti;
        // Get Module embbed in Ruby
        M = self.M;
        VIEW = self.VIEW;
        POSITION = self.POSITION;
        // Module outside Ruby
        PAG = M.Module('PAG');
    }
    /**
     * MODULE SWIPE
     */
    rt01MODULE.SWIPE = {
        /**
         * TOOGLE SWIPE EVENT WHEN SWAP SLIDE
         */
        ToggleEvent: function () {
            VariableModule(this);
            // Update property & variable of Swipe event on current Slide
            that.Properties(M.Data(cs.idCur)['opts']);
            /**
             * TOGGLE EVENT SWIPE GESTURES
             */
            // Event Swipe total Ruby
            if (is.swipeCur != is.swipeLast) {
                that.Events(is.swipeCur ? true : false);
            }
            // Event Swipe on Viewport
            if (is.swipeOnBodyLast !== undefined && is.swipeOnBodyCur !== is.swipeOnBodyLast) {
                that.Events(is.swipeOnBodyCur ? 'onBody' : 'offBody');
            }
            // Store status 'SwipeCur' on 'SwipeLast'
            is.swipeLast = is.swipeCur;
            is.swipeOnBodyLast = is.swipeOnBodyCur;
        },
        /**
         * UPDATE PROPERTY & VARIABLE 'SWIPE' OF CURRENT SWIPE
         */
        Properties: function (optsCur) {
            VariableModule(this);
            /**
             * SETUP 'SWIPECUR' VARIABLE
             */
            is.swipeCur = optsCur.isSwipe;
            //  Case: only 1 slide
            // Ver 1.5 - 24/09/2016: not placed in 'PROP.Slides()' -> error when add new by 'api.addSlide()' when ruby have 1 slide
            if (cs.num == 1) {
                is.swipeCur = o.oneSlide.isSwipe ? optsCur.isSwipe : false;
            }
            // Variable swipe on body at first
            is.swipeOnBodyCur = optsCur.swipe.isBody;
            /**
             * ACTION 'SWIPE' DEPENDS ON THE CASE
             *  + Separate to 'swipeBody' & 'swipePag'
             */
            // Truong hop slide hien tai co swipe gestures
            if (is.swipeCur) {
                var swipe = optsCur.swipe;
                // Swipe on pagination
                is.swipeOnPag = true;
            }
            else {
                is.swipeOnBodyCur = is.swipeOnPag = false;
            }
        },
        /**
         * SETUP SWIPE EVENTS IN THE CASES
         */
        Events: function (status) {
            var that = this;
            VariableModule(that);
            var slData = M.Data(cs.idCur), 
            // Re-register event on objects
            isSwipeSupport = is.swipeSupport, evMouse = va.ev.mouse, evSwipe = va.ev.swipe;
            /**
             * FUNCTION CLASSES
             */
            var fn = {
                // Remove event swipe 'Start' on object
                offStart: function ($swipe) {
                    // Remove class 'swipe-on' -> support recognize swipe gestures & fixed swipe in IE mobile
                    // Remove event 'Drag' on Images when swipe
                    $swipe
                        .removeClass(va.ns + 'swipe-on').addClass(va.ns + 'swipe-off')
                        .off(va.ev.mouse.start + ' ' + va.ev.swipe.start)
                        .off(va.ev.drag);
                },
                // Remove event swipe 'Move' & 'End' on Document
                offMoveEnd: function () {
                    var ev = va.ev;
                    va.$doc
                        .off(ev.mouse.move + ' ' + ev.mouse.end + ' ' + ev.swipe.move + ' ' + ev.swipe.end);
                },
                /**
                 * REMOVE EVENT SWIPE ON OBJECT
                 */
                offBody: function () {
                    // Remove class 'grab' out Viewport
                    M.ToggleClass('grab', -1);
                    // Return position of slide before remove evetns
                    // Ver 1.5 - 24/09/2016 : 'api.addSlide()' error when add -> remove -> re-add on Ruby have 1 slide
                    // that.LastSetup({}, va.swipeTypeCur, false);
                    // Remove event 'Start' on Viewport
                    fn.offStart(va.$viewport);
                },
                offPag: function () {
                    // Remove class 'grab' out Pagination
                    is.swipePagCur = false;
                    M.ToggleClass('grab', -1, va.$pag);
                    is.pag && fn.offStart(va.$pag);
                },
                /**
                 * REGISTER EVENT SWIPE ON OBJECT
                 */
                onBody: function () {
                    if (is.swipeOnBodyCur) {
                        //  Remove & re-register swipe event on Document
                        fn.offMoveEnd();
                        fn.offBody();
                        // Register swipe event for $viewport
                        M.ToggleClass('grab', 0);
                        that.EventStart(va.$viewport, va.$canvas, evMouse);
                        isSwipeSupport && that.EventStart(va.$viewport, va.$canvas, evSwipe);
                    }
                },
                onPag: function () {
                    if (is.swipeOnPag && is.pag) {
                        // Remove & re-register swipe event on Document
                        fn.offMoveEnd();
                        fn.offPag();
                        // Register swipe event for $pagination
                        is.swipePagCur = true;
                        M.ToggleClass('grab', 0, va.$pag);
                        that.EventStart(va.$pag, va.$pagInner, evMouse);
                        isSwipeSupport && that.EventStart(va.$pag, va.$pagInner, evSwipe);
                    }
                },
                /**
                 * TOGGLE EVENT CLICK ON SLIDE
                 */
                offClickOnSlide: function () {
                    slData.$self.off(va.ev.click);
                },
                onClickOnSlide: function () {
                    fn.offClickOnSlide();
                    // Register event click on slide
                    if (slData.link) {
                        slData.$self.on(va.ev.click, function () {
                            window.open(slData.link, slData.linkTarget);
                        });
                    }
                }
            };
            /**
             * CLASSIFY STATUS
             *  + To execute correct function
             *  + Support remove/register particular object
             */
            if (status === true) {
                fn.onBody();
                // Disable event click on slide
                fn.offClickOnSlide();
                // Setup swipe on pagination at first
                if (o.swipe.isAutoOnPag)
                    !va.pag.isViewLarge && fn.onPag();
                else
                    fn.onPag();
            }
            else if (status === false) {
                // Enable event click on slide
                fn.onClickOnSlide();
                // Disable event swipe on Body & Pagination
                fn.offBody();
                fn.offPag();
            }
            else
                fn[status]();
        },
        /**
         * SETUP EVENT & PROPERTI FOR $SWIPE : '$VIEWPORT', $PAGINATION
         */
        EventStart: function ($swipe, $swipeCanvas, evName) {
            VariableModule(this);
            var that = this, ns = va.ns;
            /**
             * ADD CLASS 'SWIPE-ON'
             *  + Recognize object have swipe gestures
             *  + Fixed swipe in IE mobile
             */
            $swipe.addClass(ns + 'swipe-on').removeClass(ns + 'swipe-off');
            /**
             * REMOVE ACTION 'DRAG' ITEM IN RUBY
             */
            $swipe
                .off(va.ev.drag)
                .on(va.ev.drag, function (e) { return false; });
            /**
             * EVENT START 'SWIPE' - 'DRAG'
             *  + 'swipeType': support swipe gestures in same time, 'swipe' & 'mouse'
             *  + Touchmouse distinguish 'swipe' of Ruby or 'scroll' page
             */
            $swipe.on(evName.start, { 'swipeType': evName.type }, function (e) {
                VariableModule(that);
                /**
                 * INITIAL SETUP
                 */
                // Direction & type of Swipe gesture
                va.swipeDirs = null;
                var evSwipeType = e.data.swipeType;
                if (va.swipeTypeCur === null)
                    va.swipeTypeCur = evSwipeType;
                /**
                 * CHECK $TARGET WHEN SWIPE 'START' ALLOW BEGIN
                 */
                var tagSpecial = ['input', 'textarea', 'label', 'a'], eTarget = e.target, targetTag = eTarget.tagName.toLowerCase(), isTargetAllow = $.inArray(targetTag, tagSpecial) === -1;
                // Remove swipe 'start' when $target is swipe-prevent
                if (isTargetAllow) {
                    // Class prevent: 'swipe-prevent', 'nav-prev', 'nav-next'
                    var classPrevent = '.' + ns + 'swipe-prevent' +
                        ', .' + ns + o.namePrev +
                        ', .' + ns + o.nameNext, $swipePrevent = $(eTarget).closest(classPrevent);
                    if ($swipePrevent.length) {
                        isTargetAllow = false;
                        // Toggle event 'drag' on $swipe to select text
                        that.EventDragToggle($swipe, va.ev[evSwipeType]);
                    }
                }
                // Remove event swipe 'start' when $target contain <a> node && nested
                if (isTargetAllow) {
                    var $target = $(eTarget), $linkParent = $target.closest('a');
                    // If parent exist is '<a>' tag -> check place inside $viewport
                    if ($linkParent.length) {
                        var $viewportCheck = $linkParent.closest('.' + ns + o.nameViewport);
                        if ($viewportCheck.length && $viewportCheck.is(va.$viewport)) {
                            isTargetAllow = false;
                        }
                    }
                    // Check 'target' is object of Nested Ruby
                    if (isTargetAllow) {
                        var $ruby = $target.closest('.' + rt01VA.namespace), $rubyParent = $ruby.parent().closest('.' + rt01VA.namespace);
                        if (cs.$ruby.is($rubyParent))
                            isTargetAllow = false;
                    }
                }
                /**
                 * CONDITION CONTINUE EVENT
                 *
                 */
                if (!(isTargetAllow && !is.lockSwipe && va.swipeTypeCur == evSwipeType && cs.num > 0))
                    return;
                /**
                 * REGISTER SWIPE EVENT ON DOCUMENT WHEN START SWIPE
                 */
                that.EventMove(va.ev[evSwipeType]);
                /**
                 * SWIPE END
                 *  + Remove 'mouseLeave' -> unnecessary & make ruby simplifies
                 */
                va.$doc.one(evName.end, { 'swipeType': evName.type }, function (e) {
                    // Add timer to fixed iOS touchEnd slow
                    if (that.is.iOS) {
                        setTimeout(function () {
                            that.LastSetup(e, e.data.swipeType, false);
                        }, 0);
                    }
                    else {
                        that.LastSetup(e, e.data.swipeType, false);
                    }
                });
                /**
                 * SETUP VARIABLE AT FIRST
                 *  + Get time at start 'drag'
                 */
                var isCanvas = $swipeCanvas.is(va.$canvas);
                va.tDrag0 = va.tDrag1 = +new Date();
                // Store property of object swiping -> only allow 1 object active
                va.$swipeCur = $swipeCanvas;
                // Remove animate, go to position-end Transform
                M.GetTween(va.$swipeCur).go(100);
                // Get value of variable 'va.can' || 'va.pag'
                var p = M.SwapVaOnSwipe();
                // Remove Tween of slide, go to position-end Transform
                (va.fxType == '3d') && va.tweenSlide.go(100);
                /**
                 * SETUP POSITION SWIPE 'START'
                 *  + x0: original position -> swipe position = current-position - original position
                 *  + x0Fix: original position, not change when toggle slide
                 *  + pageX1: support for 'tap' swipe start
                 */
                var i = that.EVENTS.GetEventRight(e);
                va.x0 = va.x0Fix = va.pageX1 = M.R(i[p.pageXY]);
                // Y0 value: recognize swipe ruby or swipe page
                va.y0 = va.pageY1 = i.pageY;
                // xOffset, xBuffer : reset value
                va.xOffset = va.xBuffer = 0;
                // 'xBuffet' start by 'xCanvas' : when move only +/- current value
                va.xBuffer = p.xCanvas;
                // Bien reset lai dragBegin --> bien voi muc dich thuc hien 1 lan ban dau trong luc 'mouseMove'
                is.swipeBegin = true;
                // Reset value number of event swipe has executed -> support for trigger event 'swipeBegin'
                va.nMoveEvent = 0;
                // Insert 'mask' class to fixed scroll-x bar appear in FxCSS
                o.isBodyMaskInFxCSS && (va.fxView === 'css') && va.$body.addClass(va.ns + 'mask-x');
                // Enable click on slide
                is.clickOnSlide = true;
                // Canvas grabbing cursor
                isCanvas && M.ToggleClass('grab', 1);
                // Update value of other view when start swipe
                var fnName = 'SwipeBegin' + va.View;
                isCanvas && !!VIEW[fnName] && VIEW[fnName]();
                // + Fixed current cursor is 'default' after 'click'
                // + Not work in mobile -> not 'scroll' page
                evSwipeType == 'mouse' && e.preventDefault();
            });
        },
        EventMove: function (evName) {
            var that = this;
            /**
             * EVENT SWIPE MOVE
             */
            $(document).on(evName.move, { 'swipeType': evName.type }, function (e) {
                VariableModule(that);
                var evSwipeType = e.data.swipeType, isCanvas = va.$swipeCur.is(va.$canvas);
                /**
                 * CONDITION CONTINUE EVENT - MOVED TEMPORARILY
                 */
                if (!(!is.lockSwipe && va.swipeTypeCur == evSwipeType))
                    return;
                /**
                 * SETUP START SWIPE 'BEGIN'
                 */
                if (!va.nMoveEvent) {
                    // Recognize $canvas is swiping
                    if (isCanvas)
                        is.swiping = true;
                    // Trigger event 'swipeBegin'
                    M.RunEvent('swipeBegin');
                }
                // Variable to recognize initial swipe
                va.nMoveEvent++;
                /**
                 * GET VALUE WHEN SWIPING
                 */
                // Get correct $event
                var i = that.EVENTS.GetEventRight(e);
                // Store old pageX & get new pageX -> recognize swipe 'left' or 'right'
                var p = M.SwapVaOnSwipe();
                va.pageX0 = va.pageX1;
                va.pageX1 = M.R(i[p.pageXY]);
                /**
                 * SETUP CONTINUE WHEN 'PAGEX0' !== 'PAGEX1' -> SAVING CPU
                 */
                if (va.pageX0 != va.pageX1) {
                    // Value 'offset' of moved temporarily
                    va.xOffset = va.pageX1 - va.x0;
                    // Recognize swipe 'left' or 'right' -> use for swipe limit
                    is.swipeNav = (va.pageX1 > va.pageX0) ? 'right' : 'left';
                    /**
                     * MOVED TEMPORARILY ON MOBILE DEVICE
                     *  + Recognize scroll page or swipe ruby
                     *  + Sroll page: not have 'e.preventDefault()' in 'touchstart' & 'touchmove'
                     *  + Only execute 'touchmove' once & not 'touchend'
                     */
                    if (evSwipeType == 'swipe') {
                        va.y = M.A(va.y0 - i.pageY);
                        if (va.swipeDirs === null && M.A(va.xOffset) >= va.y)
                            va.swipeDirs = 'chieuX';
                        if (va.swipeDirs === null && va.y > 5)
                            va.swipeDirs = 'chieuY';
                        // Case: swipe follow horizontal direction X
                        if (va.swipeDirs === null || va.swipeDirs == 'chieuX') {
                            // Prevent move 'scroll' page follow direction Y for Android
                            // Test on Chrome mobile simulate lagging (sometimes successfull, sometimes unsuccessfull)
                            e.preventDefault();
                            // Moved temporarily
                            that.XBuffer(va.pageX1);
                        }
                        else {
                            that.Events('offMoveEnd');
                        }
                    }
                    else
                        that.XBuffer(va.pageX1);
                }
                // Pagination Grabbing Cursor: toggle class
                !isCanvas && M.ToggleClass('grab', 1, va.$pag);
                // Lock swipe 'tap', check 'offset' to support 'click' if swipe it
                if (M.A(va.xOffset) > 10 && is.tapEnable)
                    is.tapEnable = false; // Tap event more slowly
                // Disable click on slide if have tap move
                if (M.A(i.pageX - va.x0) > 10 || M.A(i.pageY - va.y0) > 10) {
                    is.clickOnSlide = false;
                }
            });
        },
        /**
         * SETUP ELEMENTS WHEN COMPLETE SWIPE
         */
        LastSetup: function (e, evSwipeType, isScrollPage) {
            VariableModule(this);
            var isCanvas = va.$swipeCur.is(va.$canvas);
            /**
             * CONDITIONAL EXECUTE
             */
            if (!is.lockSwipe && va.swipeTypeCur == evSwipeType) {
                // Prevent event 'mouseup' on device support 'touch' event
                // If is 'scroll' page in AndroidNative not support prevent -> not 'scroll' page
                if (evSwipeType == 'swipe' && !isScrollPage) {
                    e.preventDefault();
                }
                // Variable to recognize swipe-end on Cavas
                if (isCanvas)
                    is.swiping = false;
                // Callback event end swipe
                !is.swipeBegin && M.RunEvent('swipeEnd');
                // Get time at swipe-out : calculate fast or slow
                va.tDrag1 = +new Date();
                // Calculate position moved after swipe
                that.XNear();
                /**
                 * TOGGLE CLASS CURSOR
                 *  + Canvas: recover cursor-swipe
                 *  + Pagination: remove class cursor
                 */
                isCanvas
                    ? M.ToggleClass('grab', (is.swipeOnBodyCur) ? 0 : -1)
                    : M.ToggleClass('grab', -1, va.$pag);
                // Remove class 'grab-stop' when leave swipe
                o.isViewGrabStop && M.ToggleClass('stop', -1);
                /**
                 * CLICK ON SLIDE ACTIVED
                 */
                var slData = M.Data(cs.idCur);
                if (is.clickOnSlide && slData.link) {
                    window.open(slData.link, slData.linkTarget);
                }
            }
            /**
             * OTHER SETUP
             */
            // Reset value of 'swipeTypeCur' at end of event
            // Must compare -> because have 2 event 'mouse' & 'touch' in mobile
            if (va.swipeTypeCur == evSwipeType)
                va.swipeTypeCur = null;
            // Remove 'tap' event in swipe gestures
            if (is.mobile)
                is.tapEnable = true;
            else
                setTimeout(function () { is.tapEnable = true; }, 10);
            // Remove event swipe 'Move' - 'End' on Document when complete swipe
            that.Events('offMoveEnd');
        },
        /**
         * SETUP REMOVE EVENT 'DRAG' OF $SWIPE-CURRENT -> SUPPROT SELECT TEXT
         */
        EventDragToggle: function ($swipe, evName) {
            var that = this;
            VariableModule(that);
            // Remove event 'drag' on Swipe
            $swipe.off(va.ev.drag);
            // Recovery event 'drag' removed when 'tap' complete
            var evNameEndCur = evName.end + 'stopDrag';
            va.$doc.on(evNameEndCur, function (e) {
                VariableModule(that);
                $swipe.on(va.ev.drag, function () { return false; });
                va.$doc.off(evNameEndCur);
            });
        },
        // Event click on slide
        EventClickOnSlide: function () {
            VariableModule(this);
        },
        /**
         * SETUP MOVED TEMPARORYLY WHEN SWIPE CONTINUOUS
         */
        XBuffer: function (xCur) {
            VariableModule(this);
            // Initialize variables
            var layout = va.fxLayout, view = va.fxView, idCur = cs.idCur, isRight = is.swipeNav == 'right', isLeft = is.swipeNav == 'left', isCanvas = va.$swipeCur.is(va.$canvas), p = isCanvas ? va.can : va.pag, sTranslate = p.sTranslate, 
            // Thuoc tinh luu tru su khac nhau khi di chuyen 'next' hay 'prev'
            // Property store diference when move 'next' or 'prev'
            sign = va.xOffset < 0 ? 1 : -1, 
            // Distance moved when swipe
            pageX = va.pageX1 - va.pageX0;
            /**
             * SETUP VARIABLE TO ALLOW MOVED TEMPORARILY DEPENDS ON EFFECT
             */
            var isBufferReduce = true, isBufferMove = true;
            if (isCanvas) {
                /**
                 * CASE SPECIAL: WHEN SWIPE BUFFER
                 */
                if (va.fxType == 'math' || va.fxView == 'css')
                    isBufferMove = false;
                /**
                 * SETUP IN OPTION 'SWIPE'
                 */
                if (!o.swipe.isLiveEffect) {
                    isBufferReduce = isBufferMove = false;
                }
            }
            /**
             * REDUCE VALUE OF THE MOVE -> WHEN SWIPE OUT VIEWPORT
             * CASE FOR LINE LAYOUT:
             *  + Only applies to Canvas have: isLoop == false & pagination
             */
            function TranslateReduce1() {
                /**
                 * CONDITIONAL EXECUTION
                 *  + Swipe limit only applies when swipe 'left' & 'right' out Viewport
                 */
                if ((isRight && va.xBuffer > p.xMin)
                    || (isLeft && va.xBuffer < p.xMax)) {
                    // Reduce to 8 times for desktop, on mobile is smaller
                    var nRate1 = is.mobile ? 4 : 8;
                    pageX /= nRate1;
                }
            }
            function TranslateReduce2() {
                // Reduce for default move on 'dot' layout
                var nRate2 = is.mobile ? 3 : 6;
                pageX /= nRate2;
                // Continue reduce if 'isLoop' false
                if (!is.loop
                    && ((idCur <= 0 && isRight)
                        || (idCur >= cs.num - 1 && isLeft))) {
                    pageX /= 4;
                }
            }
            // Not work for 'buffer' on Canvas have 'bufferReduce' false
            if (isBufferMove && isBufferReduce) {
                // Case: 'swipeCur' is body Canvas
                if (isCanvas) {
                    if (layout == 'line' && !is.loop)
                        TranslateReduce1();
                    if (layout == 'dot')
                        TranslateReduce2();
                    /**
                     * GRAB STOP VIEW
                     */
                    if (!is.loop && o.isViewGrabStop) {
                        if (isRight && va.xBuffer > 0)
                            M.ToggleClass('stop', 0);
                        else if (isLeft && va.xBuffer < p.xMax)
                            M.ToggleClass('stop', 1);
                    }
                }
                else {
                    if (is.pag) {
                        TranslateReduce1();
                        /**
                         * SETUP OTHER
                         */
                        // Pag Arrow: check toggle actived
                        // Moved temporarily for Pag Mark
                        o.pag.isArrow && PAG.ArrowActived(va.xBuffer);
                        o.pag.isMark && PAG.XBufferOnMark(pageX);
                    }
                }
            }
            /**
             * MOVE BUFFER FOR CANVAS
             */
            va.xBuffer += pageX;
            // Move $swipe temprorary
            // Move x/y depend on swipe directdion
            if (isBufferMove) {
                // Setup transform for current $swipe
                var tf = (p.dirs === 'hor') ? { 'x': M.R(va.xBuffer) }
                    : { 'y': M.R(va.xBuffer) };
                M.GetTween(va.$swipeCur).css(va.$swipeCur, tf);
            }
            // Update transform for center layout & CSS effect
            // Parameter a: recognize swipe 'next' or 'prev'
            if (o.swipe.isLiveEffect) {
                var fnName = 'Buffer' + va.View;
                isCanvas && !!VIEW[fnName] && VIEW[fnName](sign);
            }
            /**
             * SETUP SWAP SLIDE WHEN SWIPE CONTINUOUS IN 'LINE' LAYOUT
             *  + Next/prev same function but differ in varaible 'a.s'
             *  + 'next' use '>', 'prev' use '<' : so '* -1' for 2 case to recognize '>' or '<'
             * @param int p.xCanvas
             */
            if (isCanvas && layout == 'line') {
                var posNext = p.xCanvas - (sTranslate * sign);
                // Swipe next slide (negative) -> swipe 'prev' is similar to 'next'
                if (va.xBuffer * sign < posNext * sign) {
                    // Reset action only execute once in 'drag' continuous
                    is.swipeBegin = true;
                    // Update va.x0 -> use for event 'dragmove' -> when 'dragout', Canvas only move maximum a little distance
                    va.x0 = va.pageX1;
                    // Update xCanvas
                    p.xCanvas -= sTranslate * sign;
                    /**
                     * UPDATE OTHER ELEMENTS WHEN TOGGLE NEXT 1 SLIDE
                     *  + Add option 'isContinuity' -> prevent setup some options, including 'POSITION.AnimateX()'
                     *  + Because 'xCanvas' updated above
                     */
                    that.TOSLIDE.Run(sign, false, true);
                }
            }
            /**
             * OTHER SETUP
             *  + 'is.swipeBegin' : allow function execute once when drag 'move'
             */
            if (is.swipeBegin) {
                is.swipeBegin = false;
                (view == 'mask') && VIEW.CloneImgbackInMask();
            }
        },
        /**
         * SETUP MOVE TO NEAR SLIDE WHEN COMPLETE SWIPE
         */
        XNear: function () {
            VariableModule(this);
            // Position & size of $swiping
            var isCanvas = va.$swipeCur.is(va.$canvas), layout = va.fxLayout, num = cs.num, p = isCanvas ? va.can : va.pag, xOffset = va.xOffset; // How many moved 'px'
            // Setup Easing when swipe complete
            va.moveBy = 'swipe';
            /**
             * SETUP ON BODY CANVAS
             */
            if (isCanvas) {
                var wSlide = !!va.pa.left ? va.wSlideFull - (va.pa.left * 2) : va.wSlideFull, tFast = is.mobile ? 600 : 400, isFast = va.tDrag1 - va.tDrag0 < tFast;
                // Width drag: select
                // Identify move fast or slow of slide
                var w3 = M.R(wSlide / 3), w20 = M.R(wSlide / 20), wLimit = isFast ? w20 : w3, 
                // Time to 'dot' layout recovery old position when move to new slide
                tGo = 100, 
                // Time to slide recovery old position
                tRestore = 400;
                /**
                 * SETUP MOVE TO NEXT / PREV / RESET
                 */
                // Move to next slide
                if (xOffset < -wLimit && (is.loop || (!is.loop && cs.idCur < num - 1)) && !!(num - 1)) {
                    (layout == 'dot') && POSITION.AnimateX(null, 0, false, false, tGo);
                    that.TOSLIDE.Run(1);
                }
                else if (xOffset > wLimit && (is.loop || (!is.loop && cs.idCur > 0)) && !!(num - 1)) {
                    (layout == 'dot') && POSITION.AnimateX(null, 0, false, false, tGo);
                    that.TOSLIDE.Run(-1);
                }
                else if (!!xOffset) {
                    // Ver 1.5 - 24/09/2016 : remove variable 'is.swipeOnSlideCur'
                    POSITION.AnimateX(null, 0, false, false, tRestore);
                    // Recovery position & transform after moved temporarily
                    var fnName = 'Restore' + va.View;
                    !!VIEW[fnName] && VIEW[fnName]();
                }
                // Slideshow: setup variable -> reset timer when move next/prev to other slide
                if ((xOffset < -wLimit || xOffset > wLimit) && o.isSlideshow)
                    is.hoverAction = true;
            }
            else {
                if (is.pag && xOffset != 0) {
                    // Update value 'xCanvas'
                    p.xCanvas = va.xBuffer;
                    // Recovery position center for PagInner
                    var sp = o.pag.speed;
                    if (p.align == 'center' || p.align == 'end') {
                        p.xCanvas != p.xMin && POSITION.AnimateX(null, p.xMin, false, true, sp);
                    }
                    else {
                        if (p.xCanvas > 0) {
                            POSITION.AnimateX(null, 0, false, true, sp);
                        }
                        else if (p.xCanvas < p.xMax) {
                            POSITION.AnimateX(null, p.xMax, false, true, sp);
                        }
                    }
                    // Check actived on Pag Arrow
                    o.pag.isArrow && PAG.ArrowActived(p.xCanvas);
                    // Remove transition-duration on Pag Mark
                    // Update position of Pag Mark
                    if (o.pag.isMark) {
                        PAG.SizePosOfMark();
                    }
                }
            }
            /**
             * OHTER SETUP
             *  + Flywheel: move continue
             */
            POSITION.Flywheel();
        }
    };
})(jQuery);
/**
 * MODULE RESPONSIVE
 */
(function ($) {
    // Check variable module
    window.rt01MODULE = window.rt01MODULE || {};
    /**
     * MODULE RESPONSIVE
     */
    rt01MODULE.RESPONSIVE = {
        /**
         * UPDATE CAC GIA TRI CUA RESPONSIVE
         * @param object va.pa
         * @param int va.rate
         */
        UpdateVars: function () {
            var that = this, o = that.o, va = that.va, M = that.M;
            /**
             * GET PADDING IN THE CASES
             */
            // Case: Padding-grid available
            if (va.paGridCur !== null) {
                va.pa.left = va.paGridCur;
            }
            else {
                // CaLculate the padding-left from width-grid
                if (va.wSlide > va.wGridCur) {
                    va.pa.left = (va.wSlide - va.wGridCur) / 2;
                }
                else {
                    va.pa.left = 0;
                }
            }
            // Round value of Padding
            va.pa.left = ~~va.pa.left;
            /**
             * GET RATE RESPONSIVE
             */
            // Because padding 'left' allways has value so always = width-content / width-responsive
            var rateCur = (va.wSlide - (va.pa.left * 2)) / va.wRes;
            va.rate = (rateCur > 1) ? 1 : rateCur;
        }
    };
})(jQuery);
/**
 * MODULE NAVIGATION
 */
(function ($) {
    // Check variable module
    window.rt01MODULE = window.rt01MODULE || {};
    // Global variables
    var that, o, cs, va, is, M;
    /**
     * UPDATE GLOBAL VARIABLES
     */
    function VariableModule(self) {
        that = self;
        o = self.o;
        cs = self.cs;
        va = self.va;
        is = self.is;
        M = self.M;
    }
    /**
     * MODULE NAVIGATION
     */
    rt01MODULE.NAV = {
        /**
         * RENDER NAVIGATION
         */
        Render: function () {
            VariableModule(this);
            var ns = va.ns;
            /**
             * CASE: CREATE NEW MARKUP NAVIGATION
             */
            if (is.nav && !is.$nav) {
                /**
                 * SEARCH $NAVIGATION FIRST
                 */
                var classes = '.' + ns + o.nameNav, $navHTML = that.RENDER.SearchNode(classes);
                if ($navHTML.length) {
                    va.$nav = $navHTML;
                    // Insert object inside of Navigation
                    va.$nav.append(M.NS(o.nav.markupOutside));
                    is.navOutside = true;
                }
                else {
                    // Render naviation default if not exist markup
                    va.$nav = $(M.NS(o.nav.markup));
                    // Insert $navigation into Ruby
                    that.RENDER.Into(o.markup.navInto, va.$nav);
                }
                /**
                 * SEARCH OTHER ELEMENTS IN NAVIGATION
                 */
                va.$prev = va.$nav.find('.' + ns + o.namePrev);
                va.$next = va.$nav.find('.' + ns + o.nameNext);
                /**
                 * UPDATE VARIABLE
                 */
                is.$nav = true;
            }
            else if (!is.nav && is.$nav) {
                /**
                 * REMOVE $NAVIGATION
                 */
                va.$nav[is.navOutside ? 'empty' : 'remove']();
                /**
                 * UPDATE VARIABLE
                 */
                is.$nav = false;
            }
        },
        /**
         * EVENT TAP-CLICK
         */
        EventTap: function () {
            VariableModule(this);
            var that = this, evName = va.ev.click + ' ' + va.ev.swipe.end;
            // Condition to setup event 'tap'
            if (!va.$nav)
                return false;
            // Remove event on navigation
            va.$prev.add(va.$next).off(evName);
            /**
             * RE-REGISTER EVENT ON NAVIGATION (IF HAVE)
             */
            if (that.is.nav) {
                va.$prev.on(evName, function (e) {
                    VariableModule(that);
                    // Trigger event 'beforeTap'
                    M.RunEvent('beforeTap');
                    // Move to prev slide
                    o.nav.isEventTap && that.EVENTS.Prev();
                    e.preventDefault();
                });
                va.$next.on(evName, function (e) {
                    VariableModule(that);
                    // Trigger event 'beforeTap'
                    M.RunEvent('beforeTap');
                    // Move to next slide
                    o.nav.isEventTap && that.EVENTS.Next();
                    e.preventDefault();
                });
            }
        },
        /**
         * TOGGLE NAVIGATION 'NEXT' OR 'PREV'
         */
        Toggle: function () {
            VariableModule(this);
            var deactived = va.deactived, idCur = cs.idCur, num = cs.num;
            if (!is.loop) {
                if (idCur == 0)
                    va.$prev.addClass(deactived);
                if (idCur == num - 1)
                    va.$next.addClass(deactived);
                if (idCur != 0)
                    va.$prev.removeClass(deactived);
                if (idCur != num - 1)
                    va.$next.removeClass(deactived);
            }
            else
                va.$prev.add(va.$next).removeClass(deactived);
        }
    };
})(jQuery);
/**
 * MODULE PAGINATION
 *  + Support Pagination Mark
 *  + Support link <a> tag on PagItem
 */
(function ($) {
    // Check variable module
    window.rt01MODULE = window.rt01MODULE || {};
    // Global variables
    var that, o, oo, cs, va, is, ti, M;
    /**
     * UPDATE GLOBAL VARIABLES
     */
    function VariableModule(self) {
        that = self;
        o = self.o;
        oo = self.oo;
        cs = self.cs;
        va = self.va;
        is = self.is;
        ti = self.ti;
        M = self.M;
    }
    /**
     * MODULE PAGINATION
     *  + Remove loader thumbnail inside 'SetupWhenLoadSlideEnd()'
     */
    rt01MODULE.PAG = {
        /**
         * RENDER CONTAINER PAGINATION
         */
        RenderSelf: function () {
            var that = this;
            VariableModule(that);
            /**
             * CASE: INSERT PAGINATION INTO RUBY
             */
            if (o.isPag && !is.$pag) {
                /**
                 * SEARCH PAGINATION MARKUP OUTSIDE
                 */
                var ns = va.ns, ns2 = ' ' + ns, nsPag = ns2 + 'pag-', pagOut = ns2 + 'outside', pag = o.pag, dirs = pag.direction, pagClass = ns + o.namePag, $pagHTML = that.RENDER.SearchNode('.' + pagClass);
                // Check & add class-more in pagination at initial
                if (typeof pag.moreClass == 'string')
                    pagClass += ' ' + pag.moreClass;
                // Pagination: create Node with className -> class 'type' & 'dirs' will update later
                is.pagOutside = !!$pagHTML.length;
                va.$pag = is.pagOutside ? $pagHTML.addClass(pagClass + pagOut)
                    : $('<div/>', { 'class': pagClass });
                /**
                 * SETUP EACH PAGITEM
                 */
                va.$pagItem = $('');
                va.$s.each(function () { that.RenderPagItem($(this)); });
                /**
                 * INSERT PAGINATION INTO RUBY
                 */
                // Insert pagItem & pagInner into ruby
                va.$pagInner = $('<div/>', { 'class': ns + 'paginner' });
                va.$pagInner.append(va.$pagItem);
                va.$pag.prepend(va.$pagInner);
                // Insert pagination into ruby depends on position
                if (!is.pagOutside) {
                    cs.$ruby[(pag.position == 'begin') ? 'prepend' : 'append'](va.$pag);
                }
                // Add new class to Pagination and Ruby at first
                that.ToggleClass(true, true);
                // Variable to recognize $pagination exist
                is.$pag = true;
            }
            else if (!o.isPag && is.$pag) {
                // Remove all thumbnail on slide (if exist)
                va.$s.each(function () {
                    M.Data($(this), { '$thumbWrap': undefined });
                });
                // Remove all pagination
                va.$pag[is.pagOutside ? 'empty' : 'remove']();
                // Update variables
                is.$pag = is.$pagArrow = is.$pagMark = false;
                is.swipePagCur = false;
            }
            /**
             * SETUP MARKUP PAGARROW + PAGMARK
             */
            if (o.isPag) {
                that.RenderPagArrow();
                that.RenderPagMark();
            }
            /**
             * CREATE NEW - REMOVE MARKUP THUMBNAIL AFTER OPTION UDPATED
             */
            if (is.$pag) {
                va.$s.each(function () { that.RenderThumbnail($(this)); });
            }
        },
        RenderPagItem: function ($slCur) {
            VariableModule(this);
            /**
             * STORE CURRENT PAGITEM TO VARIABLE
             */
            var $pItem = M.Data($slCur)['$pagItem'];
            va.$pagItem = va.$pagItem.add($pItem);
            // Return current $pagItem -> used in 'API.add()'
            return $pItem;
        },
        /**
         * RENDER PAG ARROW
         */
        RenderPagArrow: function () {
            VariableModule(this);
            /**
             * CASE CREATE NEW PAG-ARROW
             */
            if (o.pag.isArrow && !is.$pagArrow) {
                // Convert Namespace in markup Arrow
                var str = M.NS(o.pag.markupArrow);
                // Insert Arrow left & right in pagination
                va.$pagArrowLeft = $(str.replace(/\{dirs\}/g, 'left'));
                va.$pagArrowRight = $(str.replace(/\{dirs\}/g, 'right'));
                va.$pag.append(va.$pagArrowLeft, va.$pagArrowRight);
                // Variable to recognize $pagArrow exist
                is.$pagArrow = true;
            }
            /**
             * CASE: REMOVE PAG-ARROW MARKUP
             */
            if (!o.pag.isArrow && is.$pagArrow) {
                va.$pagArrowLeft.remove();
                va.$pagArrowRight.remove();
                is.$pagArrow = false;
            }
        },
        /**
         * RENDER PAGINATION-MARK
         */
        RenderPagMark: function () {
            VariableModule(this);
            var ns = va.ns;
            /**
             * CASE: CREATE NEW PAG-MARK MARKUP
             */
            if (o.pag.isMark && !is.$pagMark) {
                // Insert pagMark into pagination
                va.$pagMark = $(M.NS(o.pag.markupMark));
                va.$pagMarkItem = va.$pagMark.children();
                va.$pag
                    .removeClass(ns + 'pagmark-no')
                    .addClass(ns + 'pagmark-yes')
                    .prepend(va.$pagMark);
                // Store selector to the global variable
                va.$pagMarkItemSelf = va.$pagMark.find(M.NS('.{ns}pagmark-self'));
                va.$pagMarkItemPadding = va.$pagMark.find(M.NS('.{ns}pagmark-padding'));
                va.$pagMarkItemBorder = va.$pagMark.find(M.NS('.{ns}pagmark-border'));
                va.$pagMarkItemMargin = va.$pagMark.find(M.NS('.{ns}pagmark-margin'));
                // Variable recognize $pagMark exist
                is.$pagMark = true;
            }
            else if (!o.pag.isMark) {
                // Case: have pagmark markup
                if (is.$pagMark) {
                    va.$pagMark.remove();
                    is.$pagMark = false;
                }
                // Toggle class to recognize no PagMark
                va.$pag
                    .removeClass(ns + 'pagmark-yes')
                    .addClass(ns + 'pagmark-no');
            }
        },
        /**
         * SETUP BEFORE RENDER THUMBNAIL : CREATE WRAPPER, ICON-LOADER
         */
        RenderThumbnail: function ($slCur) {
            VariableModule(this);
            var that = this, slData = M.Data($slCur);
            /**
             * CASE: CREATE NEW THUMBNAIL-WRAP
             */
            if (is.pagThumb && !slData.$thumbWrap) {
                /**
                 * FIRST, SEARCH THUMBNAIL OUTSIDE - BASE ON [DATA-THUMBNAIL-LINK]
                 */
                // Search $thumbnail-item inside slide
                var $thumbItem = M.Find($slCur, '.' + va.ns + 'thumbitem');
                // Search $imageback inside slide
                var $imgback = M.Find($slCur, '.' + va.ns + o.nameImageBack), $videoback = M.Find($slCur, '.' + va.ns + 'videoback'), isVideoPoster = $videoback.length && !/^\s*$/.test($videoback.attr('href'));
                // Setup source of thumbnail outside
                var thumbLink;
                if ($imgback.length || $videoback.length) {
                    // Object need to get thumbnail outside
                    var $target = ($imgback.length && $imgback) || ($videoback.length && $videoback);
                    // Get source from 'data'
                    thumbLink = $target.data('thumbnail-link');
                    // Continue: check thumbnail-link has empty-string
                    if (/^\s*$/g.test(thumbLink))
                        thumbLink = false;
                }
                /**
                 * CONDITION CONTINUE
                 */
                if ($thumbItem.length || $imgback.length || thumbLink || isVideoPoster || (slData.isLoaded && slData.$thumbItem)) {
                    /**
                     * CREATE THUMBNAIL-WRAP TO PAGITEM
                     *  + Temporary : add class 'wfit' to fill image in thumbnail
                     */
                    var $pagItem = slData.$pagItem, $thumbWrap = $('<div/>', { 'class': '{ns}thumbwrap {ns}wfit'.replace(/\{ns\}/g, va.ns) });
                    $pagItem.append($thumbWrap);
                    // Store thumbnail-wrap in Data slide
                    slData.$thumbWrap = $thumbWrap;
                    // Add icon-loader to thumbnail
                    that.RENDER.LoaderAdd($slCur, $pagItem, '$loaderThumb');
                    /**
                     * CASE: HAVE THUMBNAIL-ITEM IN DATA
                     */
                    if (slData.isLoaded && slData.$thumbItem) {
                        // Insert image to thumbnail
                        $thumbWrap.append(slData.$thumbItem);
                        // Remove loader-thumbnail
                        that.SetupWhenLoadSlideEnd($slCur);
                        // Update size & style for thumbnail-item
                        that.PosCenterForThumbItem($slCur);
                    }
                    else if ($thumbItem.length) {
                        // Move thumbnail-item to thumbnail-wrap
                        $thumbWrap.append($thumbItem);
                    }
                    else if (!!thumbLink) {
                        // Create new thumbnail-image
                        $thumbItem = $('<img></img>', { 'src': thumbLink, 'class': va.ns + 'thumbitem' });
                        // Insert new image into thumbnail
                        $thumbWrap.append($thumbItem);
                    }
                    else if ($imgback.length) {
                        // Thumbnail item copy from Imageback
                        $thumbItem = $imgback.clone();
                        // Remove class 'imgback' on thumbnail-image
                        // Remove size on clone Image
                        $thumbItem
                            .addClass(va.ns + 'thumbitem')
                            .removeClass(va.ns + 'imgback')
                            .css({ 'width': '', 'height': '' });
                        if ($thumbItem.data('width'))
                            $thumbItem.css('width', $thumbItem.data('width'));
                        if ($thumbItem.data('height'))
                            $thumbItem.css('height', $thumbItem.data('height'));
                        // Insert new image into thumbnail
                        $thumbWrap.append($thumbItem);
                    }
                }
            }
            else if (!is.pagThumb && !!slData.$thumbWrap) {
                slData.$thumbWrap.remove();
                slData.$thumbWrap = null;
            }
        },
        /**
         * SETUP PAGINATION WHEN SLIDE LOAD END
         */
        SetupWhenLoadSlideEnd: function ($slCur) {
            VariableModule(this);
            /**
             * SETUP THUMBNAIL
             */
            if (is.pagThumb) {
                // Remove loader-thumbnail at end
                that.RENDER.LoaderRemove($slCur, '$loaderThumb');
            }
        },
        /**
         * FUNCTION TOGGLE CLASS ON PAGINATION
         *  + Check $pag exist, because Ruby start setup, setup properties before 'PAG.RenderSelf()'
         *  + Class on pagination and Ruby is similar
         */
        ToggleClass: function (isAdd, isForceRun) {
            VariableModule(this);
            /**
             * CONDITIONAL EXECUTION
             */
            if (!(!$.isEmptyObject(oo) || isForceRun))
                return;
            // Fixed continue without value in oo variable
            if ($.isEmptyObject(oo))
                oo.pag = {};
            /**
             * SETUP CONTINUE
             */
            var opt = isAdd ? o : oo, pag = opt.pag, ns = va.ns, classBasic = '', classOnPag = '', classOnRuby = '';
            /**
             * CLASS IN THE CASES
             */
            // Check class 'type'
            if (o.pag.type != oo.pag.type) {
                classOnPag += ' {ns}' + pag.type;
                classOnRuby += ' {ns}pagtype-' + pag.type;
            }
            // Check class 'position'
            if (o.pag.position != oo.pag.position) {
                classBasic += ' {ns}pagpos-' + pag.position;
            }
            // Check class 'direction'
            if (o.pag.direction != oo.pag.direction && pag.direction) {
                classBasic += ' {ns}pagdirs-' + pag.direction;
            }
            else if (!!va.addInfo) {
                var pagDirs = va.addInfo.pagDirs;
                if (isAdd)
                    classBasic += ' {ns}pagdirs-' + pagDirs;
                else
                    classBasic += ' {ns}pagdirs-' + (pagDirs == 'hor' ? 'ver' : 'hor');
            }
            // Check CSS position
            if (o.pag.cssPosition != oo.pag.cssPosition) {
                classOnPag += ' {ns}pos-' + pag.cssPosition;
            }
            // Check add more class
            if (o.pag.moreClass != oo.pag.moreClass) {
                classOnPag += ' ' + pag.moreClass;
            }
            // Check pag-mark transition
            // Note: isAdd === isMarkTransition ~~ (isAdd && isMarkTransition) || (!isAdd && !isMarkTransition)
            if (isAdd === o.pag.isMarkTransition) {
                classOnPag += ' {ns}pagmark-transition';
            }
            /**
             * TOGGLE CLASSES ON PAGINATION
             */
            classOnPag += ' ' + classBasic;
            classOnPag = M.NS(classOnPag);
            !!va.$pag && va.$pag[isAdd ? 'addClass' : 'removeClass'](classOnPag);
            // Toggle class skin for Pagination has markup outside
            if (is.pagOutside && opt.skin !== null) {
                if (isAdd)
                    va.$pag.parent().addClass(ns + opt.skin);
                else
                    va.$pag.parent().removeClass(ns + opt.skin);
            }
            /**
             * TOGGLE CLASSES ON RUBY
             */
            classOnRuby += ' ' + classBasic;
            classOnRuby = M.NS(classOnRuby);
            cs.$ruby[isAdd ? 'addClass' : 'removeClass'](classOnRuby);
        },
        /**
         * TOGGLE 'FIRST' & 'LAST' CLASS FOR PAG-ITEMS
         */
        FirstLastClass: function () {
            var va = this.va, $pagItem = va.$pagItem, classFirst = va.ns + 'first', classLast = va.ns + 'last';
            if (!!$pagItem) {
                $pagItem.removeClass(classFirst + ' ' + classLast);
                $pagItem.first().addClass(classFirst);
                $pagItem.last().addClass(classLast);
            }
        },
        /**
         * EVENT 'TAP' ON PAGINATION
         */
        EventTap: function () {
            // Setup variable here to solve conflict in event 'on'
            var that = this;
            VariableModule(that);
            // Condition execution
            if (!va.$pag)
                return false;
            /**
             * EVENT 'TAP' ON PAG-ITEM
             *  + Event 'click' : prevent move to new slide when start
             */
            // First, remove event 'tap' on pagItem
            var evName = va.ev.click + ' ' + va.ev.swipe.end, evNameOff = evName + ' ' + va.ev.swipe.start + ' ' + va.ev.swipe.move;
            va.$pagItem.off(evNameOff);
            // Register event 'tap' on pagItem (if have)
            if (is.pag) {
                /**
                 * REMOVE EVENT 'TAP' ON LINK TAG
                 */
                var $pagItem = $();
                va.$pagItem.each(function () {
                    var $item = $(this), isLinkTag = $item[0].tagName.toLowerCase() === 'a', isHref = $item.attr('href');
                    // Insert $pagItem if it not link <a> tag
                    if (!(isLinkTag && isHref))
                        $pagItem = $pagItem.add($item);
                });
                /**
                 * PREVENT SCROLL PAGE UP, SCROLL DOWN IN MOBILE
                 */
                that.EVENTS.CheckMobileTap($pagItem);
                /**
                 * REGISTER EVENT-END FOR PAG-ITEM
                 */
                $pagItem.on(evName, function (e) {
                    VariableModule(that);
                    var $item = $(this), itemData = M.Data($item);
                    // Trigger event 'beforeTap'
                    M.RunEvent('beforeTap');
                    // Goto slide selected
                    if (o.pag.isEventTap && is.tapEnable) {
                        // Prevent scroll up, scroll down in the mobile browser still change slide
                        if (!is.mobile || (is.mobile && /^(touch|pointer)/.test(e.type) && itemData.isMobileTap)) {
                            va.moveBy = 'tap';
                            that.TOSLIDE.Run(M.Data($item)['id'], true, false, true);
                            // Prevent 2 event 'tap' in same time
                            that.EVENTS.DelayToTapNext();
                        }
                    }
                    // Remove 'touchend' or 'moveup' -> only 1 event allow execute
                    // 'preventDefault' !== 'return false'
                    e.preventDefault();
                });
            }
            /**
             * EVENT 'TAP' ON PAG-ARROW
             */
            if (o.pag.isArrow) {
                var $arrows = va.$pagArrowLeft.add(va.$pagArrowRight);
                $arrows.off(evName);
                // Register event on pagArrow
                if (o.pag.isTapOnArrow) {
                    $arrows.on(evName, function (e) {
                        VariableModule(that);
                        if (is.tapEnable) {
                            var dirs = $(this).is(va.$pagArrowLeft) ? 'left' : 'right';
                            // Change position of new pag when tap on Arrow
                            that.TranslatePagByTapArrow(dirs);
                            // Prevent 2 event 'tap' in same time
                            that.EVENTS.DelayToTapNext();
                        }
                        // Fixed error in IE must use 'preventDefault' -> not use 'return false'
                        e.preventDefault();
                    });
                }
            }
        },
        /**
         * TOGGLE EVENT SWIPE ON PAGINATION DEPEND ON SIZE TOTAL OF PAG-ITEM
         */
        ToggleEvent: function () {
            VariableModule(this);
            var isViewLarge = va.pag.isViewLarge;
            /**
             * REGISTER - REMOVE EVENT 'SWIPE'
             *  + if there are not option 'isAutoOnPag' == true -> not setup any more
             *  + Depending on 'isViewLarge' & 'is.swipePagCur'
             */
            if (is.SWIPE && !!o.swipe.isAutoOnPag && ((isViewLarge && !!is.swipePagCur) || (!isViewLarge && !is.swipePagCur))) {
                // Status current swipe on pagination
                var statusSwipeOnPag = isViewLarge ? 'offPag' : 'onPag';
                // Reset event swipe for pagination
                M.Module('SWIPE').Events(statusSwipeOnPag);
            }
        },
        /**
         * CSS Position for the Pagination
         */
        CSSPosForPag: function () {
            VariableModule(this);
            var opag = o.pag, styles = { 'margin-left': '', 'margin-right': '', 'margin-top': '', 'margin-bottom': '' };
            // Case horizontal offset
            if (opag.hOffset !== null) {
                if (opag.cssPosition == 'relative') {
                    styles[opag.position == 'begin' ? 'margin-bottom' : 'margin-top'] = opag.hOffset;
                }
                else {
                    styles[opag.position == 'begin' ? 'margin-top' : 'margin-bottom'] = opag.hOffset;
                }
            }
            // Case vertical offset
            if (opag.vOffset !== null) {
                if (opag.cssPosition == 'relative') {
                    styles[opag.position == 'begin' ? 'margin-right' : 'margin-left'] = opag.vOffset;
                }
                else {
                    styles[opag.position == 'begin' ? 'margin-left' : 'margin-right'] = opag.vOffset;
                }
            }
            // Set margin on the Pagination
            va.$pag.css(styles);
        },
        /**
         * SIZE OF WIDTH-HEIGHT FOR PAG-ITEM
         */
        TypeSizeItem: function () {
            VariableModule(this);
            var op = o.pag, p = va.pag, wfit = va.ns + 'wfit', hfit = va.ns + 'hfit', isHor = (p.dirs == 'hor'), isSizeSelf = is.pagItemSizeSelf;
            /**
             * RESET WIDTH-HEIGHT FOR PAG-INNER
             *  + Get correct value width/height of pagItem
             *  + Toggle class 'wfit' & 'wfit' to get size
             */
            function ResetSizeOnInner() {
                va.$pagInner
                    .css({
                    'width': '',
                    'height': '',
                    'margin-right': '',
                    'margin-bottom': ''
                })
                    .removeClass(wfit + ' ' + hfit);
                // Reset kich thuoc cua Pag Item
                va.$pagItem.each(function () { $(this).css({ 'width': '', 'height': '' }); });
            }
            /**
             * SETUP SIZE WIDTH/HEIGHT - MARGIN ON PAG-INNER
             *  + Total distance is calculated by 'margin-right' & 'margin-bottom'
             *  -> Not effect to size 100% & position of pagination
             *  -> Check vertical tabs outside -> remove width on pagInner
             */
            function SetupSizeOnInner() {
                var wInner = isHor ? (op.typeSizeItem == 'max' ? p.wMax : p.wMin) : p.wMax, hInner = !isHor ? (op.typeSizeItem == 'max' ? p.hMax : p.hMin) : p.hMax, styles = {
                    'width': wInner,
                    'height': hInner
                };
                // Add 'margin' to pagInner
                // Remove width/height on pagInner when pagItem at size before
                if (isHor) {
                    styles['margin-bottom'] = p.maBottom;
                    if (isSizeSelf)
                        styles.width = p.wSum;
                }
                else {
                    styles['margin-right'] = p.maRight;
                    if (isSizeSelf)
                        styles.height = p.hSum;
                    if (is.pagOutside)
                        styles.width = '';
                }
                // Setup style on pagInner
                va.$pagInner.css(styles);
                /**
                 * SETUP WIDTH/HEIGHT 'FIT' FOR PAG-ITEM
                 *  + If item is size 'self' depends on 'p.dirs' is 'wfit' or 'hfit'
                 *  + If item is not size 'self', must have 'wfit'-'hfit'
                 */
                if (!is.pagList) {
                    var classes = wfit + ' ' + hfit;
                    if (isSizeSelf) {
                        classes = isHor ? hfit : wfit;
                    }
                    // Setup class 'wfit'-'hfit' on pagInner
                    va.$pagInner.addClass(classes);
                }
            }
            /**
             * GET PADDING & BORDER OF VIEWPORT
             *  -> support pagtype-tabs with 'sizeAuto-full' option
             */
            function GetSpaceOuterOfViewport() {
                function Space(aProp) {
                    var sizeView = 0, sizePag = 0;
                    for (i = aProp.length - 1; i >= 0; i--) {
                        sizeView += M.PInt(va.$viewport.css(aProp[i]));
                        sizePag += M.PInt(va.$pag.css(aProp[i]));
                    }
                    return sizeView - sizePag;
                }
                va.viewSpace = {
                    'hor': Space(['padding-left', 'padding-right', 'border-left-width', 'border-right-width']),
                    'ver': Space(['padding-top', 'padding-bottom', 'border-top-width', 'border-bottom-width'])
                };
            }
            /**
             * SETUP START
             */
            ResetSizeOnInner();
            that.GetSizeOfItems();
            SetupSizeOnInner();
            GetSpaceOuterOfViewport();
        },
        /**
         * GET WIDTH - HEIGHT OF EACH ITEMS
         */
        GetSizeOfItems: function () {
            VariableModule(this);
            var opag = o.pag, p = va.pag;
            /**
             * GET VALUE PADDING - BORSER - MARGIN OF PAG-ITEM
             */
            function GetPaBoMaOfItems() {
                var cssName = ['padding', 'border', 'margin'], cssDirs = ['Top', 'Right', 'Bottom', 'Left'], cssSuffix = ['', 'Width', ''], lenName = cssName.length, lenDirs = cssDirs.length;
                // First: reset value of CSS name
                for (i = 0; i < lenName; i++) {
                    p[cssName[i]] = [[], [], [], []];
                }
                // Loop each $pagItem
                va.$pagItem.each(function (index) {
                    // Get style-computed of item
                    var style = document.defaultView ? getComputedStyle(this) : this.currentStyle;
                    /**
                     * LOOP TO GET VALUE OF CSS NAME
                     *  + Loop 1: CSS name
                     *  + Loop 2: CSS diretion
                     *  + Value is arranged in order: Padding.Top.IDPagItem
                     */
                    for (i = 0; i < lenName; i++) {
                        for (j = 0; j < lenDirs; j++) {
                            p[cssName[i]][j][index] = M.PInt(style[cssName[i] + cssDirs[j] + cssSuffix[i]]);
                        }
                    }
                });
            }
            /**
             * GET WIDTH - HEIGHT OF PAG-ITEM
             */
            function GetSizeOfItems(ns) {
                var ns2 = (ns == 'w') ? 'width' : 'height', ns3 = (ns == 'w') ? 'Width' : 'Height', names = [ns + 'Self', ns + 'ToPadding', ns + 'ToBorder', ns + 'ToMargin'];
                // Reset property at first
                for (i = 0; i < names.length; i++) {
                    p[names[i]] = [];
                }
                // Setup each item
                va.$pagItem.each(function () {
                    var $itemCur = $(this), dSelf = M.R(M[ns3]($itemCur)), 
                    // Distance around of item: padding, border, margin
                    dPadding = M.R(M['Inner' + ns3]($itemCur) - dSelf), dPadToBor = M.R(M['Outer' + ns3]($itemCur) - dSelf), dPadToMar = M.R(M['Outer' + ns3]($itemCur, true) - dSelf);
                    // Setup size of pagItem when have option: width, height, minWidth, maxWidth...
                    var optsMin = opag['min' + ns3], optsMax = opag['max' + ns3];
                    if ($.isNumeric(opag[ns2]))
                        dSelf = opag[ns2];
                    if ($.isNumeric(optsMin) && dSelf < optsMin)
                        dSelf = optsMin;
                    if ($.isNumeric(optsMax) && dSelf > optsMax)
                        dSelf = optsMax;
                    // Push all size into array[]
                    // Part size is sum -> because size 'self' can change
                    p[names[0]].push(dSelf);
                    p[names[1]].push(dSelf + dPadding);
                    p[names[2]].push(dSelf + dPadToBor);
                    p[names[3]].push(dSelf + dPadToMar);
                });
                /**
                 * SETUP OTHER SIZE
                 *  + Size Min - Max of pagItem
                 *  + Total size of all pagItems
                 */
                p[ns + 'Min'] = Math.min.apply(null, p[names[0]]);
                p[ns + 'Max'] = Math.max.apply(null, p[names[0]]);
                p[ns + 'Sum'] = M.Sum(p[names[3]]);
            }
            /**
             * GET MAXIMUM VALUE IN ARRAY[]
             */
            function MaxOfTwoArray(arr1, arr2) {
                var maxValue = 0;
                for (i = 0; i < cs.num; i++) {
                    var valueCur = arr1[i] - arr2[i];
                    if (valueCur > maxValue)
                        maxValue = valueCur;
                }
                return maxValue;
            }
            // Setup start
            GetPaBoMaOfItems();
            GetSizeOfItems('w');
            GetSizeOfItems('h');
            // Size of all pagItems depend on Direction
            p.sSum = (p.dirs == 'hor') ? p.wSum : p.hSum;
            // Valur largest of Margin for pagInner
            p.maRight = MaxOfTwoArray(p.wToMargin, p.wSelf);
            p.maBottom = MaxOfTwoArray(p.hToMargin, p.hSelf);
        },
        // Get value properties of pagination relate to size
        PropAndStyle: function () {
            VariableModule(this);
            var that = this, $pag = va.$pag, num = cs.num, p = va.pag, isHor = p.dirs == 'hor';
            /**
             * SIZE OF PAGINATION CHANGE DEPEND ON SWIPE-CUR DIRECTION
             * Change by option 'sizeAuto' : null , 'full', 'self'
             *  + Convert 'sizeAuto' when pagination has markup outside
             *  + null: not setup
             *  + 'full': width / height pag = width / height ruby
             *  + 'self': width / height pag = sum total width / height all pagItem
             */
            var sizeAuto = (is.pagOutside && !isHor) ? 'self' : o.pag.sizeAuto, style = { 'width': '', 'height': '' }, sViewport;
            if (sizeAuto === null) {
                sViewport = isHor ? M.Width($pag) : M.Height($pag);
            }
            else if (sizeAuto == 'full') {
                if (isHor)
                    sViewport = style.width = va.wRuby + va.viewSpace.hor;
                else
                    sViewport = style.height = va.hRuby + va.viewSpace.ver;
            }
            else if (sizeAuto == 'self') {
                if (isHor)
                    sViewport = style.width = p.wSum;
                else
                    sViewport = style.height = p.hSum;
            }
            // Setup size auto on pagination
            p.sViewport = sViewport;
            va.$pag.css(style);
            // Size of pag -> place below must to update style first
            p.wViewport = M.Width($pag);
            p.hViewport = M.Height($pag);
            p.sTranslate = 0;
            /**
             * SETUP ALIGN JUSTIFY
             *  + Justify: option 'sizeAuto' is null || 'full' -> for markup inside & 'hor' direction
             *  + Ver 1.5 - 05/10/2016: support Justify on markup outside
             */
            if (is.alignJustify && sizeAuto !== 'self') {
                // Case: horizontal direction
                if (isHor) {
                    // Get maximum size of item
                    var wMaxItem = Math.max.apply(null, p.wToMargin), wSumItems = wMaxItem * num;
                    // Size of item depend on size-total sum all items with size-viewport
                    var wJustify = wMaxItem;
                    if (p.wViewport >= wSumItems || o.pag.isJustifyWhenLarge)
                        wJustify = ~~(p.wViewport / num);
                    // Update size of pagInner
                    var wItem = wJustify - p.maRight;
                    va.$pagInner.css({ 'width': wItem, 'height': p.hSelf[0] });
                }
            }
            /**
             * SETUP THE OTHER VARIABLE OF PAGINATION
             *  + Distance remain of 'va.wRuby' with size-total pagItem -> for multiple use
             *  + Check allow pagItem have center position -> width Viewport must > width-total pagItems sum
             */
            // First update property of pagItem
            that.GetSizeOfItems();
            // Setup next variables
            var wRemain = p.sViewport - p.sSum, isViewLarge = p.isViewLarge = wRemain >= 0;
            /**
             * SETUP PULL - ALIGN OF PAG
             *  + Pull will default return is 'begin' -> if width of pagination > Viewport
             */
            p.align = o.pag.align;
            // Convert 'align' in the case
            // Ver 1.4 - 21/09/2016 : convert align 'justify' to align 'center' when 'isViewLarge' === true
            if (isViewLarge && p.align == 'justify')
                p.align = 'center';
            if (!isViewLarge && p.align != 'begin')
                p.align = 'begin';
            // Setup continue in difference position
            if (p.align == 'begin') {
                p.xMin = p.xCanvas = 0;
                p.xMax = isViewLarge ? 0 : wRemain;
            }
            else if (p.align == 'end') {
                p.xMin = p.xCanvas = wRemain;
                p.xMax = p.sViewport;
            }
            else if (p.align == 'center') {
                p.xMin = p.xCanvas = M.R(wRemain / 2);
                p.xMax = p.xMin + p.sSum;
            }
            /**
             * TOGGLE EVENT 'SWIPE' OF PAGINATION DEPENDING OF SIZE OF PAG-ITEM
             */
            that.ToggleEvent();
        },
        /**
         * POSITION OF EACH ITEM IN 'SIZE.TRANSLATES()'
         */
        PosAndSizeOfItems: function () {
            VariableModule(this);
            var p = va.pag, isHor = p.dirs == 'hor';
            /**
             * FIRST UPDATE WIDTH - HEIGHT OF PAG-ITEM
             */
            that.GetSizeOfItems();
            /**
             * SETUP POSITION OF EACH ITEM DEPENDING TABS DIRECTION
             */
            var nameSize = isHor ? 'wToMargin' : 'hToMargin';
            p.pBegin = [0];
            for (i = 1; i < that.cs.num; i++) {
                p.pBegin[i] = p.pBegin[i - 1] + p[nameSize][i - 1];
            }
            /**
             * LOOP TO MOVE TO EACH ITEM BY POSITION BEFORE
             */
            var tl = (isHor ? 'Tlx' : 'Tly'), tf = {};
            // Remove position 'left' - 'top' when swap between 'horizontal' and 'vertical'
            if (!is.tf) {
                if (isHor)
                    tf['top'] = '';
                else
                    tf['left'] = '';
            }
            // Setup continue
            for (i = 0; i < that.cs.num; i++) {
                // Setup position
                tf[p.cssTf] = M[tl](p.pBegin[i]);
                // Setup size
                if (is.pagItemSizeSelf) {
                    if (isHor)
                        tf['width'] = p.wSelf[i];
                    else
                        tf['height'] = p.hSelf[i];
                }
                va.$pagItem.eq(i).css(tf);
            }
        },
        /**
         * POSITION & SIZE FOR THUMBNAIL-ITEM
         */
        PosCenterForThumbItem: function ($slCur) {
            VariableModule(this);
            /**
             * CONDITIONAL EXECUTION
             *  + Check thumbnail-wrap exist
             *  + Check thumbnail-item exist
             *  + check thumbnail-item has loaded
             */
            var slData = M.Data($slCur), $thumbWrap = slData.$thumbWrap, $thumbItem = slData.$thumbItem, iData = M.Data($thumbItem);
            if (!($thumbWrap && $thumbItem && iData.isLoaded))
                return;
            /**
             * SETUP RATIO WIDTH / HEIGHT OF THUMBNAIL-IMAGE
             */
            var ns = va.ns, wPagOpts = o.pag.width, hPagOpts = o.pag.height, wThumb = $.isNumeric(wPagOpts) ? wPagOpts : M.Width($thumbWrap), hThumb = $.isNumeric(hPagOpts) ? hPagOpts : M.Height($thumbWrap), rThumb = wThumb / hThumb, rImgItem = iData.rate;
            if (rImgItem === undefined && iData.isImgback) {
                rImgItem = iData.rate = M.Data(iData.$imgback)['rate'];
            }
            // Case: It is Image transparent
            if ($thumbItem.hasClass(va.ns + 'transparent'))
                rImgItem = 1;
            /**
             * SETUP STYLE CENTER POSITION DEPENDING ON SIZE THUMBNAIL-ITEM
             */
            var classAdd = '', style = { 'width': '', 'height': '', 'left': '', 'top': '' };
            if (wThumb && hThumb) {
                if (rImgItem > rThumb) {
                    classAdd = ns + 'hfit';
                    style.left = -M.R((rImgItem * hThumb - wThumb) / 2);
                }
                else {
                    classAdd = ns + 'wfit';
                    style.top = -M.R((wThumb / rImgItem - hThumb) / 2);
                }
            }
            /**
             *SETUP STYLE TO IMAGE-ITEM
             */
            $thumbItem.css(style);
            // Toggle class 'fit' for Thumbnail
            var classRemove = '{ns}hfit{ns}wfit'
                .replace(/\{ns\}/g, ns)
                .replace(classAdd, '');
            $thumbWrap
                .addClass(classAdd)
                .removeClass(classRemove);
        },
        /**
         * UPDATE CENTER POSITION FOR ALL THUMBNAIL
         */
        UpdateThumbnail: function () {
            var that = this;
            VariableModule(that);
            /**
             * CONDITIONAL EXECUTION
             */
            if (!(is.pagThumb && is.initEnd))
                return;
            /**
             * UPDATE SIZE THUMBNAIL-ITEM FOR EACH SLIDE
             */
            va.$s.each(function () {
                that.PosCenterForThumbItem($(this));
            });
        },
        /**
         * SETUP CENTER POSITION FOR CURRENT PAG-ITEM
         */
        PosCenterForItemCur: function (isForceTf, isNoAnim) {
            var that = this, p = that.va.pag;
            VariableModule(that);
            /**
             * MAIN FUNCTION
             * Search position of pagInner
             *  + Position: distance ahead ItemCur -> ((distance from ItemCur to Viewport) / 2)
             */
            function Translate() {
                VariableModule(that);
                // Case larger: size-viewport > size-pagItems
                // If move by 'POSITION.AnimateX()', must check 'arrowActived()'
                if (p.isViewLarge) {
                    if (p.dirs == 'ver')
                        isNoAnim = false;
                    that.TranslateTo(p.xCanvas, isForceTf, isNoAnim);
                }
                else {
                    // Position need to
                    var disOuter = (p.dirs == 'hor') ? p.wToMargin : p.hToMargin, disBefore = M.Sum(disOuter, cs.idCur), xTarget = -M.R(disBefore - ((p.sViewport - disOuter[cs.idCur]) / 2));
                    // Case the edge of Viewport: move to the edge
                    if (xTarget > 0)
                        xTarget = 0;
                    else if (xTarget < p.xMax)
                        xTarget = p.xMax;
                    // Setup translate for pagination
                    that.TranslateTo(xTarget);
                }
            }
            /**
             * SETUP TIMER FOR TRANSLATE
             *  + Vertical tabs wait after animate-height then comes translate pagination
             */
            if (p.dirs == 'hor') {
                Translate();
            }
            else {
                // Ver 1.7 - Jan 17, 2017 timer has value min > 200, fixed for "speedHeight" = null
                var timer = 10 + (o.speedHeight || 200);
                // Set translate
                clearTimeout(ti.centerItemCur);
                ti.centerItemCur = setTimeout(Translate, timer);
            }
        },
        /**
         * TRANSLATE PAG TO FIXED POSITION !!
         *  + Difference position 'xCanvas' -> saving CPU
         *  + Support 'pagItem0' at center position when resize smaller -> still recovery position of 'pagItem0'
         *  + Setup manual, not use 'xAnimate()' -> Canvas & pagination transition together
         *  + Support remove transition inline on object
         *  + Support fallback browser have no transition
         */
        TranslateTo: function (xTarget, isForceTf, isNoAnim) {
            VariableModule(this);
            var that = this, p = va.pag;
            // Conditional execution
            if (!(xTarget != p.xCanvas || xTarget == 0 || !!isForceTf))
                return;
            /**
             * SETUP TRANSLATE ON PAG-INNER
             */
            // Setup transform support direction
            var tweenPagInner = M.GetTween(va.$pagInner), tf = (p.dirs === 'hor') ? { 'x': M.R(xTarget) }
                : { 'y': M.R(xTarget) };
            // Case: have animation
            if (!isNoAnim) {
                // Setup Tween animation
                tweenPagInner
                    .animate(va.$pagInner, tf, {
                    isNew: true,
                    duration: o.pag.speed,
                    easing: o.pag.easing
                });
            }
            else
                tweenPagInner.css(va.$pagInner, tf);
            /**
             * OHTER SETUP
             *  + Update position 'xCanvas' of pagination
             *  + Check Arrow 'actived' : after update position 'xCanvas'
             *  + Update position of pagMark
             */
            p.xCanvas = xTarget;
            o.pag.isArrow && that.ArrowActived(xTarget);
            o.pag.isMark && that.SizePosOfMark();
        },
        /**
         * ADD MARGIN INTO VIEWPORT -> GET CORRECT WIDTH OF VIEWPORT
         */
        MarginOnViewport: function () {
            VariableModule(this);
            // Conditional continue
            if (is.pagOutside)
                return;
            // Case: CSS Position of the Pagination is 'relative'
            if (o.pag.cssPosition == 'relative') {
                // Set margin on Viewport
                var margin = M.OuterWidth(va.$pag, true);
                va.pagVer == 'begin' && va.$viewport.css('margin-left', margin);
                va.pagVer == 'end' && va.$viewport.css('margin-right', margin);
            }
            else {
                va.$viewport.css({ 'margin-left': '', 'margin-right': '' });
            }
        },
        /**
         * TABS 'VERTICAL' CONVERT TO 'HORIZONTAL' - AND REVERSE
         */
        VerToHor: function () {
            VariableModule(this);
            var op = o.pag, p = va.pag, dirs = null;
            // Check any change 'direction' of tabs
            if (is.pagTabs && op.direction == 'ver') {
                // Check have convert to 'horizontal' direction
                var isMinToHor = M.MatchMedia(0, op.widthMinToHor, true);
                // Check continue if result == false
                if (!isMinToHor)
                    isMinToHor = M.MatchMedia(0, op.rangeMinToHor);
                // Setup continue
                if (p.dirs == 'ver' && isMinToHor) {
                    dirs = p.dirs = 'hor';
                    // Clear 'height' on paginaton
                    // Prevent setup height on pag in 'AnimHeightForRuby()'
                    !!va.$pag && va.$pag.stop(true).css('height', '');
                }
                else if (p.dirs == 'hor' && !isMinToHor) {
                    dirs = p.dirs = 'ver';
                }
            }
            // Update ruby if change direction
            // Remove width-inline first to get correct width when update
            if (!!dirs) {
                va.$canvas.add(va.$pag).css('width', '');
                va.addInfo = { 'pagDirs': dirs };
                cs.update({}, false);
            }
        },
        /**
         * ARROW TOGGLE ACTIVED
         *  + Execute when have changed position of 'pag.xCanvas'
         */
        ArrowActived: function (xCanvasCur) {
            VariableModule(this);
            var xPlusToShow = 30, actived = va.actived, $paLeft = va.$pagArrowLeft, $paRight = va.$pagArrowRight;
            // Case: width-wiewport < width-pagItems sum
            if (!va.pag.isViewLarge) {
                // Arrow left
                var isClassOnLeft = xCanvasCur < va.pag.xMin - xPlusToShow;
                M.XClass($paLeft, isClassOnLeft, actived);
                // Arrow Right
                var isClassOnRight = xCanvasCur > va.pag.xMax + xPlusToShow;
                M.XClass($paRight, isClassOnRight, actived);
            }
            else
                $paLeft.add($paRight).removeClass(actived);
        },
        /**
         * TRANSLATE PAGINATION BY 'TAP' ON ARROW
         */
        TranslatePagByTapArrow: function (dirs) {
            VariableModule(this);
            var p = va.pag;
            // Conditional execute
            if (p.isViewLarge)
                return;
            /**
             * SEARCH POSTION MUST GO TO ON PAGINATION
             */
            var isLeft = dirs == 'left', sign = isLeft ? 1 : -1, xPlus = 10, xWish = p.xCanvas + ((p.sViewport - xPlus) * sign), xLimit = isLeft ? p.xMin : p.xMax;
            // Setup position need to place in allowable limit
            if ((isLeft && xWish > xLimit) || (!isLeft && xWish < xLimit)) {
                xWish = xLimit;
            }
            // Setup translate pagination
            that.TranslateTo(xWish);
        },
        /**
         * SIZE & POSITION OF PAG-MARK
         */
        SizePosOfMark: function () {
            VariableModule(this);
            var p = va.pag;
            // Conditional execute
            if (p.margin === undefined)
                return;
            /**
             * FUNCTION : GET SIZE AND TRANSLATE ON PAG-MARK
             */
            function GetSizeAndTranslate(sizeTo) {
                var nameSizeMark = 'dMark' + sizeTo, $item = va['$pagMarkItem' + sizeTo], isHor = p.dirs == 'hor', ns = isHor ? 'w' : 'h', ns2 = isHor ? '3' : '0', idCur = cs.idCur, styles = { 'width': '', 'height': '' }, margin = p.margin[ns2][idCur], marToBor = margin + p.border[ns2][idCur], marToPad = marToBor + p.padding[ns2][idCur], xPlus, dItemCur;
                // Condition continue: $item not "display: none"
                if (!$item.is(':visible'))
                    return;
                // Get size of pagMark depending on sizeTo
                if (sizeTo == 'Margin') {
                    dItemCur = p[ns + 'ToMargin'][idCur];
                    xPlus = 0;
                }
                else if (sizeTo == 'Border') {
                    dItemCur = p[ns + 'ToBorder'][idCur];
                    xPlus = margin;
                }
                else if (sizeTo == 'Padding') {
                    dItemCur = p[ns + 'ToPadding'][idCur];
                    xPlus = marToBor;
                }
                else {
                    dItemCur = p[ns + 'Self'][idCur];
                    xPlus = marToPad;
                }
                // Condition to set size on $item
                if (dItemCur !== p[nameSizeMark]) {
                    // Setup size on pagMark
                    styles[isHor ? 'width' : 'height'] = dItemCur;
                    $item.css(styles);
                    p[nameSizeMark] = dItemCur;
                }
                /**
                 * TRANSLATE ON PAG-MARK
                 */
                var nameXMark = 'xMark' + sizeTo;
                // Search position for movement of pagMark
                if (p.pBegin === undefined)
                    return;
                var xMove = p.xCanvas + p.pBegin[cs.idCur] + xPlus;
                if (xMove == p[nameXMark])
                    return;
                // Setup translate of pagMark
                // Store position of pagMark
                that.POSITION.TranslateX($item, xMove, true, null, p.dirs == 'hor');
                p[nameXMark] = xMove;
            }
            GetSizeAndTranslate('Self');
            GetSizeAndTranslate('Padding');
            GetSizeAndTranslate('Border');
            GetSizeAndTranslate('Margin');
        },
        /**
         * MOVED TEMPORARILY ON PAG-MARK
         */
        XBufferOnMark: function (pageX) {
            VariableModule(this);
            var p = va.pag;
            function XBuffer(sizeTo) {
                var nameXMark = 'xMark' + sizeTo, $item = va['$pagMarkItem' + sizeTo], xMove = pageX + p[nameXMark];
                // Condition continue
                if (!$item.is(':visible'))
                    return;
                // Change position of pagMark depending on swipe gestures
                that.POSITION.TranslateX($item, M.C(xMove), true, null, p.dirs == 'hor');
                p[nameXMark] = xMove;
            }
            XBuffer('Self');
            XBuffer('Padding');
            XBuffer('Border');
            XBuffer('Margin');
        }
    };
})(jQuery);
/**
 * MODULE CAPTION
 */
(function ($) {
    // Check variable module
    window.rt01MODULE = window.rt01MODULE || {};
    // Global variables
    var that, o, cs, va, is, M;
    /**
     * UPDATE GLOBAL VARIABLES
     */
    function VariableModule(self) {
        that = self;
        o = self.o;
        cs = self.cs;
        va = self.va;
        is = self.is;
        M = self.M;
    }
    /**
     * MODULE CAPTION
     */
    rt01MODULE.CAPTION = {
        /**
         * RENDER CAPTION ELEMENT
         */
        Render: function () {
            VariableModule(this);
            /**
             * CASE: CREATE NEW CAPTION MARKUP
             */
            if (o.isCap && !is.$cap) {
                /**
                 * SEARCH CAPTION MARKUP AT OUTSIDE
                 */
                var divdiv = '<div/>', classes = '.' + va.ns + o.nameCap, $capHTML = that.RENDER.SearchNode(classes);
                // setup markup for Caption
                is.capOutside = !!$capHTML.length;
                va.$cap = is.capOutside ? $capHTML
                    : $(divdiv, { 'class': va.ns + o.nameCap });
                /**
                 * CREATE OTHER ELEMENTS MARKUP OF CAPTION
                 */
                va.$capCur = $(divdiv, { 'class': va.ns + 'cap-cur' });
                va.$capLast = $(divdiv, { 'class': va.ns + 'cap-last' });
                va.$capInner = $(divdiv, { 'class': va.ns + 'capinner' });
                va.$capInner.append(va.$capCur, va.$capLast).appendTo(va.$cap);
                // Append caption into ruby
                !is.capOutside && cs.$ruby.append(va.$cap);
                // Variable to recognize $caption exist
                is.$cap = true;
            }
            else if (!o.isCap && is.$cap) {
                // Remove caption markup
                va.$cap[is.capOutside ? 'empty' : 'remove']();
                // Update variable
                is.$cap = false;
            }
        },
        Toggle: function ($slCur, $slLast) {
            VariableModule(this);
            // Initialize variables
            var capCur = M.Data($slCur)['htmlCap'], capLast = $slLast.length ? M.Data($slLast)['htmlCap'] : '';
            // Change content between current & last caption
            va.$capCur.html(capCur);
            /**
             * SETUP EFFECT
             *  + Not support on mobile -> unnecessary
             *  + Effect between current & last caption is Fade
             *  + Support effect-height for caption
             */
            if (!is.mobile && !is.ie7) {
                // Content of last caption
                va.$capLast.html(capLast);
                // Get height of caption
                var hCur = M.OuterHeight(va.$capCur, true), hLast = M.OuterHeight(va.$capLast, true) || hCur; // Fixed at first = 0
                /**
                 * SETUP AFTER END ANIMATION
                 */
                function AnimComplete() {
                    // Add timer to mark sure at end place
                    setTimeout(function () {
                        VariableModule(that);
                        va.$capLast.css('visibility', '');
                        va.$capInner.css('height', '');
                    }, 10);
                }
                /**
                 * SETUP EFFECT WHEN TOGGLE CAPTION
                 */
                va.tweenCaption
                    .css(va.$capCur, { 'opacity': 0 })
                    .animate(va.$capCur, { 'opacity': 1 }, {
                    isNew: true,
                    duration: o.speedHeight,
                    complete: AnimComplete
                })
                    .css(va.$capLast, { 'opacity': 1, 'visibility': 'visible' })
                    .animate(va.$capLast, { 'opacity': 0 }, {
                    duration: o.speedHeight
                });
                (hLast !== hCur) &&
                    va.tweenCaption
                        .css(va.$capInner, { 'height': hLast })
                        .animate(va.$capInner, { 'height': hCur }, {
                        duration: o.speedHeight
                    });
            }
        }
    };
})(jQuery);
/**
 * MODULE IMAGE
 */
(function ($) {
    // Check variable module
    window.rt01MODULE = window.rt01MODULE || {};
    // Global variables
    var that, o, cs, va, is, ti, M, PAG;
    /**
     * UPDATE GLOBAL VARIABLES
     */
    function VariableModule(self) {
        that = self;
        o = self.o;
        cs = self.cs;
        va = self.va;
        is = self.is;
        ti = self.ti;
        M = self.M;
        PAG = M.Module('PAG');
    }
    /**
     * MODULE IMAGE
     */
    rt01MODULE.IMAGE = {
        /**
         * SETUP ALL IMAGES AT SLIDE-BEGIN
         */
        SetupAtLoadSlideBegin: function ($slCur, selectorImage) {
            VariableModule(this);
            var ns = va.ns, slData = M.Data($slCur);
            /**
             * SEARCH IMAGE IN RUBY
             *  + Must have class 'img' or image-layer
             *  + Callback old-version: support 'imglazy'
             */
            selectorImage = selectorImage ||
                '.{ns}{imgback}, .{ns}{imglazy}, img.{ns}{layer}'
                    .replace(/\{imgback\}/, o.nameImageBack)
                    .replace(/\{imglazy\}/, o.nameImageLazy)
                    .replace(/\{layer\}/, o.nameLayer)
                    .replace(/\{ns\}/g, ns);
            // Image managed in current slide
            var $images = M.Find($slCur, selectorImage);
            // Search image in $pagItem
            if (slData.$pagItem) {
                var selectorImageInPagItem = '.{ns}thumbitem, .{ns}{imglazy}'
                    .replace(/\{imglazy\}/, o.nameImageLazy)
                    .replace(/\{ns\}/g, ns), $imageInPagItem = M.Find(slData.$pagItem, selectorImageInPagItem);
                // Add image in pagItem into variable-manage image of ruby
                $images = $images.add($imageInPagItem);
            }
            // Additional data in current slide at first
            M.Data($slCur, {
                '$images': $(),
                'imageLen': $images.length,
                'nImage': 0
            });
            /**
             * SETUP ALL IMAGES IN SLIDE
             */
            $images.each(function () {
                var $i = $(this);
                /**
                 * CONVERT '<A>' TO '<IMG> TAG
                 */
                if (!/^img/i.test(this.tagName))
                    $i = that.ConvertToImage($i);
                /**
                 * CHECK IMAGE-LAZY & IMAGEBACK IN RUBY
                 *  + Only allow 1 Imageback in each slide
                 *  + Image will support 'lazyload' & 'responsive' options
                 */
                var isImgback = $i.hasClass(ns + o.nameImageBack), isThumbItem = $i.hasClass(ns + 'thumbitem'), isImgOfRuby = isImgback || $i.hasClass(ns + o.nameImageLazy);
                /**
                 * INITIAL PROPERTIES STORE IN DATA-IMAGE
                 */
                var iData = M.Data($i, {
                    '$slide': $slCur,
                    'isImgOfRuby': isImgOfRuby,
                    'isImgback': isImgback,
                    'isThumbItem': isThumbItem,
                    'isSrcOutside': false,
                    'isLoaded': false,
                    'src': [],
                    'styleInline': M.PStyleToJson($i),
                    'opts': isImgback ? $.extend({}, slData.opts.imageback, $i.data('imageback'))
                        : $.extend({}, slData.opts.image, $i.data('image'))
                });
                /**
                 * COMBINE BASIC PROPERTY && IMAGE PROPERTY
                 */
                // Property 'responsive' : priority on Layer
                if (iData.layer && (iData.layer.opts.isResponsive !== undefined)) {
                    iData.opts.isResponsive = iData.layer.opts.isResponsive;
                }
                /**
                 * PROPERTIES ONLY IN IMAGE-BACK
                 */
                if (isImgback) {
                    // Wrap imageItem by 'div.imgback'
                    that.Wrap($i);
                    // Store imageback into Data
                    M.Data($slCur, {
                        '$imgbackWrap': $slCur.find('.' + ns + 'imgback-wrap'),
                        '$imgback': $i,
                        'isImgback': true
                    });
                    // Support option 'imagePosition' on option slide
                    iData.opts.position = slData.opts.imagePosition || iData.opts.position;
                }
                /**
                 * SETUP ARRAY[] SRC OF IMAGE IN ORDER PRIORITY
                 */
                var iDataSRC = iData.src, iAttrSRC = $i.attr('src'), isSRCInline = /^data\:image\//g.test(iAttrSRC), attrLazy = $i.attr('data-' + o.nameDataLazy);
                // Store 'src' on attribute of image
                // Remove string with begin 'data:image/' -> ruby automatic add, conflict with load correct source
                !isSRCInline && iDataSRC.push(iAttrSRC);
                // Store 'src' on data image lazy
                if (attrLazy !== undefined && !/^\s*$/.test(attrLazy)) {
                    iDataSRC.push(attrLazy);
                }
                $i.removeAttr('data-' + o.nameDataLazy);
                /**
                 * PAUSE TO SETUP CONTINUE 'URL' OF IMAGE IN THE SPECIAL CASES
                 *  + Support get 'url' of Flickr photo
                 */
                // Case: have 'data-flickr'
                if (is.FLICKR && !!$i.data('flickr')) {
                    // Get link of photo by Flickr-ID
                    M.Module('FLICKR').GetLinkByPhotoID($i);
                }
                else {
                    that.EventLoad($i);
                }
            });
        },
        /**
         * CONVERT OBJECT HAVE OTHER TAGS TO 'IMG' TAG
         *  + Copy all data, alt, id of link <a>
         *  + Video: wrap by 'div'
         */
        ConvertToImage: function ($a) {
            VariableModule(this);
            /**
             * CREATE NEW IAMGE WITH DEFAULT PROPERTIES
             */
            var attrs = {}, imgGif = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', imgAlt = o.isCap ? 'image link' : $a.text(), $imageNew = $('<img>', { 'src': imgGif, 'alt': imgAlt });
            // Copy all properties on link <a> into new image node
            $.each($a[0].attributes, function (key, attr) {
                var nameCur = attr.name, valueCur = attr.value;
                $imageNew.attr(nameCur, valueCur);
                attrs[nameCur] = valueCur;
            });
            /**
             * SETUP DATA-LAZY FOR NEW IMAGE
             */
            var nameDataLazy = 'data-NAME'.replace(/NAME/, o.nameDataLazy), imageSRC = $a.attr(nameDataLazy) || attrs.href || '';
            // Insert data-lazy into new image
            $imageNew
                .attr(nameDataLazy, imageSRC)
                .removeAttr('href');
            /**
             * OTHER SETUP
             */
            // IE fixed: remove 'width' / 'height' attribute on node
            is.ie && $imageNew.removeAttr('width height');
            // Replace new image
            $a.after($imageNew).remove();
            return $imageNew;
        },
        /**
         * WRAP IMAGEBACK-ITEM BY 'DIV' TAG
         */
        Wrap: function ($imgItem) {
            VariableModule(this);
            /**
             * CHECK & CREATE NEW WRAP IMAGE
             */
            var classWrap = va.ns + 'imgback-wrap', $imgWrap = $imgItem.closest('.' + classWrap);
            // Case: Image-wrap not exist
            if (!$imgWrap.length) {
                /**
                 * CREATE NEW $IMAGE-WRAP
                 */
                $imgWrap = $('<div/>', { 'class': classWrap });
                $imgItem.wrap($imgWrap);
                // Update variable Image-wrap
                $imgWrap = $imgItem.closest('.' + classWrap);
            }
            // Copy all data of item to wrap
            M.Data($imgWrap, M.Data($imgItem));
            M.Data($imgWrap, { '$imgItem': $imgItem });
            /**
             * COPY PROPERTIES VIDEO TO IMAGE-WRAP
             */
            var attrName = ['data-video', 'data-video-link'];
            for (var i = 0, len = attrName.length; i < len; i++) {
                // Get current property
                var attrCur = $imgItem.attr(attrName[i]);
                // If property 'data' exist on node then copy to Image-wrap
                // Remove 'data' on the Image-item in same time
                if (!!attrCur) {
                    $imgWrap.attr(attrName[i], attrCur);
                    $imgItem.removeAttr(attrName[i]);
                }
            }
        },
        /**
         * EVENT LOAD EACH IMAGE
         */
        EventLoad: function ($i) {
            VariableModule(this);
            var that = this, iData = M.Data($i), $slCur = iData.$slide, slData = M.Data($slCur);
            /**
             * FUNCTION: SETUP AFTER IMAGE LOADED
             */
            function SetupAfterAllLoaded() {
                /**
                 * CHECK IMAGE LOADED -> IF LOADED COMPLETE THEN EXECUTE 'SLIDE-END'
                 */
                slData.nImage = slData.nImage + 1;
                if (slData.nImage == slData.imageLen
                    && (!slData.isVideoback || (slData.isVideoback && slData.isVideobackLoaded))) {
                    setTimeout(function () {
                        VariableModule(that);
                        (slData['id'] == 'home') ? M.Module('LAYER').LoadHomeEnd()
                            : that.LOAD.SlideEnd($slCur);
                    }, 10);
                }
            }
            /**
             * FUNCTION: SETUP WHEN IMAGE LOAD SUCCESS / FAIL
             */
            function LoadSuccess() {
                // Image: set properties
                that.Properties($i);
                // Image: all image loaded
                SetupAfterAllLoaded();
            }
            function LoadFail(src) {
                // Image: change alt
                $i
                    .addClass(va.ns + 'load-failed')
                    .attr('alt', 'image load failed');
                M.Message('image load failed', src);
                // Image: all image loaded
                SetupAfterAllLoaded();
            }
            /**
             * FUNCTION : IMAGE TRANSPARENT - SOLID
             */
            function ImageTransparent() {
                // Image: all image loaded
                SetupAfterAllLoaded();
            }
            /**
             * CHECK IMAGE IN THE SPECIAL CASE
             */
            // Case: It is the transprent / solid image
            if ($i.hasClass(va.ns + 'transparent'))
                return LoadSuccess();
            else if (!iData.src.length)
                return LoadFail('image source not found');
            /**
             * CHECK 'SRC' IMAGE LOADED SUCCESS
             */
            var imageNew = new Image(), iDataSRC = iData.src, srcCur = iDataSRC.pop();
            // Event image load success
            imageNew.onload = function () {
                VariableModule(that);
                LoadSuccess();
            };
            // Event: image load fail
            imageNew.onerror = function () {
                VariableModule(that);
                // If 'src' array[] have value -> load next 'src' remain in array[]
                if (iDataSRC.length)
                    that.EventLoad($i);
                else
                    LoadFail(srcCur);
            };
            // Image-src : get at below 'i.onload()' -> fixed bug for IE
            // Get 'src' in Data -> in order priority
            $i.attr('src', srcCur);
            imageNew.src = srcCur;
        },
        /**
         * SETUP PROPERTIES OF IMAGE AFTER LOADED COMPLETE
         */
        Properties: function ($i) {
            VariableModule(this);
            /**
             * STORE SIZE OF IMAGE ON DATA
             */
            var iData = M.Data($i), i = $i[0], wImage = $i.data('width') || i.width, hImage = $i.data('height') || i.height;
            M.Data($i, {
                'isLoaded': true,
                'width': wImage,
                'height': hImage,
                'rate': wImage / hImage
            });
            /**
             * UPDATE $IMAGE INTO DATA-SLIDE
             */
            var slData = M.Data(iData.$slide);
            slData.$images = slData.$images.add($i);
            // Store thumbnail-item into Data
            if (iData.isThumbItem)
                slData.$thumbItem = $i;
            /**
             * SIZE RESPONSIVE FOR IMAGE
             */
            iData.isImgOfRuby && that.SizeResponsive($i);
            /**
             * IMAGEBACK & THUMBNAIL-ITEM
             */
            if (iData.isImgback || iData.isThumbItem) {
                // Remove event 'drag'
                $i.on(va.ev.drag, function (e) { return false; });
                // Update size & style for thumbnail-item
                PAG.PosCenterForThumbItem(iData.$slide);
            }
        },
        /**
         * UPDATE SIZE FOR IMAGE-ITEM
         *  + Setup size first to get height of each slide
         *  + Allways put css size on Image-item -> get correct size in IE
         */
        SizeResponsive: function ($imgItem) {
            VariableModule(this);
            var iData = M.Data($imgItem), slData = M.Data(iData.$slide);
            // Conditional execution
            if (!($imgItem
                && $imgItem.length
                && iData.opts.isResponsive
                && iData.type !== 'videoPoster'))
                return;
            // Initialize variables
            var iData = M.Data($imgItem), wInline = iData.styleInline.width, hInline = iData.styleInline.height, rate = va.rate, 
            // Reset style css for Image-item
            style = { 'width': '', 'height': '', 'left': '', 'top': '' }, 
            // Identify type position of Imageback
            // Ver 1.7 - 26/11/2016: fixed get type position from Slide data -> support update 'position' option
            typePosition = slData.opts.imageback.posGrid[va.index];
            /**
             * FUNCTION: SIZE IMAGE DEPENDS ON DIFFERENT DIRECTION
             */
            function SizeDependRate() {
                if (wInline == 'auto')
                    style.width = wInline;
                else if ($.isNumeric(wInline))
                    style.width = M.R(wInline * rate);
                else
                    style.width = M.R(iData.width * rate);
                if (hInline == 'auto')
                    style.height = hInline;
                else if ($.isNumeric(hInline))
                    style.height = M.R(hInline * rate);
                else
                    style.height = M.R(iData.height * rate);
                $imgItem.css(style);
            }
            function SizeDependWidth() {
                style.width = va.wSlide;
                style.height = M.R(style.width / iData.rate);
                $imgItem.css(style);
            }
            function SizeReset() {
                if (wInline !== undefined)
                    style.width = wInline;
                if (hInline !== undefined)
                    style.height = hInline;
                $imgItem.css(style);
            }
            /**
             * SIZE IMAGES IN RUBY
             */
            // Case: Imageback
            if (iData.isImgback) {
                /**
                 * 'PIXEL-RATIO' FOR IMAGE-BACK ON EACH SLIDE
                 */
                rate /= iData.opts.pixelRatio;
                /**
                 * UPDATE SIZE FOR IMAGE
                 */
                // Size by ratio responsive, include type: 'center', 'tile'
                if (typePosition == 'center' || typePosition == 'tile') {
                    SizeDependRate();
                }
                else {
                    if (!is.heightFixed)
                        SizeDependWidth();
                }
            }
            else {
                // Case without 'responsive' : remove width / height css
                // Case have 'responsive' : change size depending on 'rate'
                if (va.rate == 1)
                    SizeReset();
                else
                    SizeDependRate();
            }
        },
        /**
         * SIZE & POSITION OF IMAGEBACK
         */
        BackPosition: function ($imgItem) {
            VariableModule(this);
            // Conditional execution
            var iData = M.Data($imgItem), slData = M.Data(iData.$slide);
            if (!(iData.isImgback && iData.type !== 'videoPoster'))
                return;
            // Initialize variables
            // Ver 1.7 - 26/11/2016: fixed get type position from Slide data, support update type 'position'
            var typePosition = slData.opts.imageback.posGrid[va.index], wImage = iData.width, hImage = iData.height, rateImage = iData.rate, rateCanvas = va.wRuby / va.hRuby, wImageCur, hImageCur;
            /**
             * FUNCTION: RESIZE POSITION OF IAMGEBACK DEPENDING IN EACH CASES
             */
            // Size depend on width-viewport
            function SizeDependWidth() {
                wImageCur = va.wSlide;
                hImageCur = M.R(wImageCur / rateImage);
            }
            // Size depend on height-ruby
            function SizeDependHeight() {
                hImageCur = va.hRuby;
                wImageCur = M.R(hImageCur * rateImage);
            }
            // Position center-left for Imageback
            function PosCenterLeft() {
                var leftOnNode = M.PInt($imgItem.css('left')), leftCur = ~~((va.wSlide - M.OuterWidth($imgItem, true)) / 2);
                // Setup css 'left'
                if (leftOnNode !== leftCur)
                    $imgItem.css('left', leftCur);
            }
            // Position center-top for Imageback
            function PosCenterTop() {
                var top = M.R((va.hRuby - M.OuterHeight($imgItem, true)) / 2);
                if (top == 0)
                    top = '';
                $imgItem.css('top', top);
            }
            /**
             * CASE: POSITION TYPE 'FILL'
             * Do not depend on ratio 'responsive'
             */
            if (typePosition == 'fill') {
                // Case: height fixed
                if (is.heightFixed) {
                    (rateImage > rateCanvas) ? SizeDependHeight() : SizeDependWidth();
                    // Size for Image-item
                    $imgItem.css({ 'width': wImageCur, 'height': hImageCur });
                    // Position center left - top for Imageback
                    PosCenterLeft();
                    PosCenterTop();
                }
            }
            else if (typePosition == 'fit') {
                // Case: height fixed
                if (is.heightFixed) {
                    (rateImage > rateCanvas) ? SizeDependWidth() : SizeDependHeight();
                    // Size for Image-item
                    $imgItem.css({ 'width': wImageCur, 'height': hImageCur });
                    // Position center left - top for Imageback
                    PosCenterLeft();
                    PosCenterTop();
                }
            }
            else if (typePosition == 'stretch') {
                // Case: height fixed
                if (is.heightFixed) {
                    wImageCur = va.wSlide;
                    hImageCur = va.hRuby;
                    // Size for Image-item
                    $imgItem.css({ 'width': wImageCur, 'height': hImageCur });
                }
            }
            else if (typePosition == 'tile') {
                var aPosition = [], wImageAll = 0, hImageAll = 0, leftCur = 0, topCur = 0, isWidthFill = false, isHeightFill = false;
                // Get current size of Image-item
                wImageCur = M.OuterWidth($imgItem, true);
                hImageCur = M.OuterHeight($imgItem, true);
                /**
                 * LOOP TO CALCULATE POSITION OF EACH IMAGE-CLONE
                 * Loop 1: loop height size
                 * @param array aPosition
                 */
                do {
                    /**
                     * UPDATE VALUES FISRT
                     */
                    leftCur = 0;
                    topCur = hImageAll;
                    wImageAll = 0;
                    isWidthFill = false;
                    /**
                     * LOOP 2: LOOP WIDTH-DIRECTION
                     */
                    do {
                        // First store position left - top
                        aPosition.push([leftCur, topCur]);
                        // Update values
                        leftCur += wImageCur;
                        wImageAll += wImageCur;
                        // Check to continue loop-2
                        if (wImageAll >= va.wSlide)
                            isWidthFill = true;
                    } while (!isWidthFill);
                    /**
                     * UPDATE VALUES AFTER CALCULATE POSITION IMAGE-CLONE BY WIDTH-DIRECTION
                     */
                    hImageAll += hImageCur;
                    /**
                     * CHECK CONTINUE LOOP-1
                     */
                    // Height-fixed is fill full height of ruby
                    if (is.heightFixed) {
                        if (hImageAll >= va.hRuby)
                            isHeightFill = true;
                    }
                    else
                        isHeightFill = true;
                } while (!isHeightFill);
                /**
                 * INSERT IMAGE-CLONE INTO IMAGEBACK WITH POSITION AVAILABLE
                 */
                // Remove Image-clone before
                var $imgItemClone = iData.$itemClone, $imgWrap = $imgItem.parent('.' + va.ns + 'imgback-wrap');
                if (!!$imgItemClone)
                    $imgItemClone.remove();
                // Reset data Item Clone
                iData.$itemClone = $();
                // Loop to insert Image-clone
                for (var i = 1, posLength = aPosition.length; i < posLength; i++) {
                    var $imgCloneCur = $imgItem.clone();
                    // Insert below Image-item
                    $imgCloneCur
                        .addClass(va.ns + 'imgclone')
                        .css({ 'left': aPosition[i][0], 'top': aPosition[i][1] })
                        .appendTo($imgWrap);
                    // Store Image-clone into Data
                    iData.$itemClone = iData.$itemClone.add($imgCloneCur);
                }
            }
            else {
                // Position center left - top for Imageback
                PosCenterLeft();
                is.heightFixed && PosCenterTop();
            }
        },
        /**
         * UPDATE SIZE || POSITION OF IMAGES
         */
        UpdateAllImageBy: function (typeUpdate) {
            var that = this;
            VariableModule(that);
            /**
             * RECOGNIZE NAME IMAGE IN DATA-SLIDE & NAME FUNCTION NEED TO UPDATE
             */
            var nameImage, nameFunction;
            switch (typeUpdate) {
                // Update size of all images in ruby
                case 'size':
                    nameImage = '$images';
                    nameFunction = 'SizeResponsive';
                    break;
                // Update position for Imageback
                case 'position':
                    nameImage = '$imgback';
                    nameFunction = 'BackPosition';
                    break;
                default:
                    return;
            }
            /**
             * SIZE & POSITION OF IMAGES
             */
            va.$s
                .add(va.$viewport)
                .each(function () {
                // Get images need setup in current slide
                var $images = M.Data($(this))[nameImage];
                // Update size || position of image
                $images && $images.each(function () {
                    that[nameFunction]($(this));
                });
            });
        }
    };
})(jQuery);
/**
 * MODULE CSS EFFECTS
 */
(function ($) {
    // Check variable module
    window.rt01MODULE = window.rt01MODULE || {};
    // Global variables
    var that, o, cs, va, is, ti, M, FX, i, j;
    /**
     * UPDATE GLOBAL VARIABLES
     */
    function VariableModule(self) {
        that = self;
        o = self.o;
        cs = self.cs;
        va = self.va;
        is = self.is;
        ti = self.ti;
        M = self.M;
        FX = self.FX;
    }
    /**
     * MODULE CSS EFFECTS
     */
    rt01MODULE.VIEWCSS = {
        /**
         * GET CURRENT CSS EFFECTS
         */
        GetFxCss: function (fxType, optsCur) {
            VariableModule(this);
            var keyframes = va.rubyAnimateKeyframes, animOne = va.rubyAnimateOne, fxCur = [];
            /**
             * FUNCTION: REMOVE THE EFFECT DO NOT EXIST IN SYSTEM
             */
            function RemoveFxNotExist(aFx) {
                // Convert to array[] if that is not array
                if (!$.isArray(aFx))
                    aFx = [aFx];
                // Each effect
                $.each(aFx, function (i) {
                    if (!keyframes[aFx[i]])
                        aFx.splice(i, 1);
                });
                // Return the array effect
                return aFx;
            }
            /**
             * CHECK THE EFFECT IN THE CASES:
             */
            switch (fxType) {
                /**
                 * CASE: EFFECT CSS 'ONE'
                 */
                case 'cssOne':
                    var cssOne = optsCur.cssOne;
                    // Mandatory witch to array[]
                    if (!$.isArray(cssOne))
                        cssOne = [cssOne];
                    /**
                     * SETUP EACH EFFECT
                     */
                    $.each(cssOne, function (i) {
                        // Store each effect if name is exist on system
                        if (animOne[cssOne[i]]) {
                            fxCur.push(animOne[cssOne[i]]);
                        }
                    });
                    break;
                /**
                 * CASE: EFFECT CSS 'TWO'
                 */
                case 'cssTwo':
                    var cssTwoOut = RemoveFxNotExist(optsCur.cssTwoOut), cssTwoIn = RemoveFxNotExist(optsCur.cssTwoIn);
                    // Check the array effect 'out' - 'in' exist
                    if (cssTwoOut.length && cssTwoIn.length) {
                        fxCur = [{
                                'next': [cssTwoOut, cssTwoIn],
                                'prev': [cssTwoOut, cssTwoIn]
                            }];
                    }
                    break;
                /**
                 * CASE: EFFECT CSS 'THREE'
                 */
                case 'cssThree':
                    var cssThreeNext = RemoveFxNotExist(optsCur.cssThreeNext), cssThreePrev = RemoveFxNotExist(optsCur.cssThreePrev);
                    // Check the effect is exist
                    if (cssThreeNext.length && cssThreePrev.length) {
                        fxCur = [{
                                'next': [['slideShortLeftOut'], cssThreeNext],
                                'prev': [['slideShortRightOut'], cssThreePrev]
                            }];
                    }
                    break;
                /**
                 * CASE: EFFECT CSS 'FOUR'
                 */
                case 'cssFour':
                    var cssFourNextOut = RemoveFxNotExist(optsCur.cssFourNextOut), cssFourNextIn = RemoveFxNotExist(optsCur.cssFourNextIn), cssFourPrevOut = RemoveFxNotExist(optsCur.cssFourPrevOut), cssFourPrevIn = RemoveFxNotExist(optsCur.cssFourPrevIn);
                    // Check the effect is exist
                    if (cssFourNextOut.length && cssFourNextIn.length && cssFourPrevOut.length && cssFourPrevIn.length) {
                        fxCur = [{
                                'next': [cssFourNextOut, cssFourNextIn],
                                'prev': [cssFourPrevOut, cssFourPrevIn]
                            }];
                    }
                    break;
            }
            /**
             * FALLBACK EFFECT CSS IF RUBY-ANIMATE KEYFRAMES DO NOT EXIST
             */
            if (!fxCur.length) {
                fxCur = [animOne['fade']];
                // Change type effect
                va.fxType = 'cssOne';
                // Display the error message
                M.Message('effect CSS need RubyAnimate object and keyframes');
            }
            // Return the current effect
            return fxCur;
        },
        /**
         * UPDATE TWEEN-ANIMATE FOR SLIDE
         */
        UpdateTweenFromCss: function ($slCur, fxName) {
            VariableModule(this);
            /**
             * CONVERT CSS-ANIMATE TO TWEEN-ANIMATE
             */
            var idNext = va.fxCSS.idNext, speedCur = va.speed[idNext], easingCur = M.Data(va.$s.eq(idNext))['opts']['cssEasing'], cssTween = M.Module('RUBYANIMATE').Tween(fxName, speedCur, undefined, easingCur);
            /**
             * TWEEN-ANIMATE FOR CURRENT SLIDE
             */
            if (!!cssTween) {
                for (var i = 0, len = cssTween.length; i < len; i++) {
                    var animCur = cssTween[i];
                    // Case: the first animate
                    if (i == 0) {
                        va.tweenSlide.css($slCur, animCur);
                    }
                    else {
                        va.tweenSlide.animate($slCur, animCur.prop, animCur.opts, false);
                    }
                }
            }
            else {
                va.tweenSlide.animate($slCur, {}, { duration: speedCur }, false);
            }
            /**
             * CLASS 'MASK' FOR VIEWPORT IN 'CSS-ONE' EFFECT
             */
            if (va.fxCSS.isMask)
                va.$viewport.addClass(va.ns + 'css-mask');
        },
        /**
         * RESET TRANSFORM FOR SLIDE AFTER COMPLETE EFFECT
         */
        ResetTFSlideCss: function () {
            VariableModule(this);
            /**
             * REMOVE STYLE + CLASS ON THE 'NEXT' / 'PREVIOUS' SLIDE
             */
            var fxCSS = va.fxCSS, $slCur = va.$s.eq(fxCSS.idCur), $slNext = va.$s.eq(fxCSS.idNext), $slCur2 = va.$s.eq(cs.idLast), $slNext2 = va.$s.eq(cs.idCur), $twoSlide = $('').add($slCur).add($slNext).add($slCur2).add($slNext2), strClass = '{ns}css-prev {ns}css-next'.replace(/\{ns\}/g, va.ns);
            $twoSlide
                .css('opacity', '')
                .css(va.cssTf, '')
                .css(va.prefix + 'transform-origin', '')
                .css('z-index', '')
                .removeClass(strClass);
            /**
             * REMOVE CLASS 'MASK' ON VIEWPORT
             */
            va.$viewport.removeClass(va.ns + 'css-mask');
        },
        /**
         * RESET TWEEN-ANIMATE OF SLIDE
         */
        ResetTweenCss: function (idCur, idNext) {
            VariableModule(this);
            var fxCSS = va.fxCSS, $slOut = va.$s.eq(idCur), $slIn = va.$s.eq(idNext);
            /**
             * EFFECT 'OUT' / 'IN'
             * + Support get effect in array[]
             */
            var fxCur = M.RandomInArray(va.fx[idNext], va.fxCssLast), isMask = !!fxCur.isMask, fxOut, fxIn;
            // Setup in 'cssOne' effect
            fxCur = fxCur[fxCSS.isNext ? 'next' : 'prev'];
            fxOut = va.fxCssOutLast = M.RandomInArray(fxCur[0], va.fxCssOutLast);
            fxIn = va.fxCssInLast = M.RandomInArray(fxCur[1], va.fxCssInLast);
            // Reset Style & Transform for slide
            // Use 'fxCSS' variable with old-value
            that.ResetTFSlideCss();
            // Update the properties in 'fxCSS'
            fxCSS.idCur = idCur;
            fxCSS.idNext = idNext;
            fxCSS.fxOut = fxOut;
            fxCSS.fxIn = fxIn;
            fxCSS.isMask = isMask;
            /**
             * THE START NEW EFFECT
             */
            // Reset tween-slide
            va.tweenSlide.reset(true);
            // Add class on slide when start swipe
            $slOut.addClass(va.ns + 'css-prev');
            $slIn.addClass(va.ns + 'css-next');
            // Setup Tween-animate for slide
            that.UpdateTweenFromCss($slOut, fxOut);
            that.UpdateTweenFromCss($slIn, fxIn);
        },
        /**
         * THE SLIDE IS BUFFER TRANSLATE
         */
        BufferCss: function (sign) {
            VariableModule(this);
            var fxCSS = va.fxCSS;
            /**
             * ID CURRENT - NEXT
             */
            var idCur = cs.idCur, idNext = idCur + sign;
            if (idNext < 0)
                idNext = cs.num - 1;
            else if (idNext > cs.num - 1)
                idNext = 0;
            // Check change on ID-next
            var isIDNextChange = (fxCSS.idNext != idNext);
            /**
             * UPDATE TWEEN-SLIDE WHEN CHANGE VALUE
             */
            if (!fxCSS.status || isIDNextChange) {
                // Reset Tween-animate of slide
                fxCSS.isNext = sign > 0;
                that.ResetTweenCss(idCur, idNext);
            }
            // Update variable 'status'
            fxCSS.status = 'buffer';
            /**
             * THE CURRENT VALUE OF TWEEN
             */
            var movePercent = M.A(va.xOffset) / va.wSlide * 100;
            va.tweenSlide.go(movePercent);
        },
        /**
         * RESTORE TRANSFORM OF SLIDE IN SWIPE-GESTURES
         */
        RestoreCss: function () {
            VariableModule(this);
            /**
             * UPDATE VARIABLE 'STATUS' TO RECOGNIZE THE TYPE ACTION
             */
            va.fxCSS.status = 'restore';
            /**
             * REVERSE DIRECTION OF TWEEN & RESET TRANSFORM OF SLIDE
             */
            that.ToSlideCss();
        },
        /**
         * COMPLETE EFFECT AFTER MOVE BUFFER || TOGGLE SLIDE BY NAG - PAG
         */
        ToSlideCss: function () {
            VariableModule(this);
            var that = this, // Support use correct the variables in event 'complete' of tween
            fxCSS = va.fxCSS, tweenSlide = va.tweenSlide;
            /**
             * FUNCTION : COMPLETE EFFECT
             */
            function TweenComplete() {
                tweenSlide.eventComplete(function () {
                    // Reset 'style' & 'transform' for slide
                    that.ResetTFSlideCss();
                    // Update the variable in toggle-end
                    that.TOSLIDE.End();
                    fxCSS.status = null;
                });
            }
            /**
             * TWEEN-ANIMATE EXECUTE CONTINUOUS AFTER SWIPE BUFFER
             */
            if (fxCSS.status == 'buffer') {
                fxCSS.status = 'play';
                // Event 'complete' when complete effect
                TweenComplete();
                // Continue execute the effect
                tweenSlide.resume();
            }
            else if (fxCSS.status == 'restore') {
                // Event 'complete' when complete tween
                TweenComplete();
                // Reverse effect
                va.tweenSlide.reverse();
            }
            else {
                // ID of current - next slide
                var idCur = cs.idLast, idNext = cs.idCur;
                // Reset Tween-animate of slide
                fxCSS.isNext = va.nMove > 0;
                that.ResetTweenCss(idCur, idNext);
                // Event 'complete'
                TweenComplete();
                // Start play Tween-animate
                fxCSS.status = 'play';
                tweenSlide.restart();
            }
        }
    };
})(jQuery);
/**
 * MODULE RUBYANIMATE KEYFRAMES
 */
(function ($) {
    // Check variable module
    window.rt01MODULE = window.rt01MODULE || {};
    // Global variables
    var that, o, va;
    /**
     * UPDATE GLOBAL VARIABLES
     */
    function VariableModule(self) {
        that = self;
        o = self.o;
        va = self.va;
    }
    /**
     * RUBY ANIMATE KEYFRAMES
     */
    rt01MODULE.RUBYANIMATE = {
        /**
         * ANIMATE DEFAULT KEYFRAME
         */
        keyframeDefault: {
            duration: 400,
            easing: 'easeOutQuad',
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
        /**
         * COPY ALL PROPERTY FROM THIS OBJECT TO THAT OBJECT
         */
        CopyData: function (source) {
            var copy = {};
            for (var name in source) {
                if (name != 'pos')
                    copy[name] = source[name];
            }
            return copy;
        },
        /**
         * UPDATE & COMPLETE PARTICULAR KEYFRAME
         */
        UpdateDataToKeyframe: function (animate) {
            VariableModule(this);
            var keyframes = window.__rubyAnimateKeyframes__ || {};
            // Conditional execution
            if (!($.isArray(animate) && animate.length))
                return false;
            /**
             * SPLIT INTO PARTICULAR ANIAMTE IF POSITION IS ARRAY[]
             */
            var deleteID = [];
            for (var i = 0, len = animate.length; i < len; i++) {
                var animCur = animate[i];
                /**
                 * CASE: ARRAY[]
                 */
                if ($.isArray(animCur['pos'])) {
                    /**
                     * COPY ANIMATE WITH DIFFERENT POSITION
                     */
                    for (var j = 0, lenJ = animCur.pos.length; j < lenJ; j++) {
                        var animAdd = that.CopyData(animCur);
                        animAdd.pos = animCur.pos[j];
                        // Insert to current Animate
                        animate.push(animAdd);
                    }
                    /**
                     * STORE ID NEED DELETE
                     */
                    deleteID.push(i);
                }
            }
            /**
             * DELETE ANIMATE WITH ID STORED ABOVE
             */
            var iPlus = 0;
            for (var i = 0, len = deleteID.length; i < len; i++) {
                animate.splice(deleteID[i] - iPlus, 1);
                iPlus++;
            }
            /**
             * ARRANGE POSITION IN ORDER INCREASE IN ANIMATION
             */
            var animNew = [];
            for (var i = 0, len = animate.length; i < len; i++) {
                /**
                 * RESET PROPERTIES AT FIRST
                 */
                var posCur = Number.MAX_VALUE, jCur = 0;
                /**
                 * LOOP TO GET SMALLEST IN CURRENT ARRAY[]
                 */
                for (var j = 0, lenJ = animate.length; j < lenJ; j++) {
                    if (animate[j].pos < posCur) {
                        posCur = animate[j].pos;
                        jCur = j;
                    }
                }
                // Store into new array[]
                animNew.push(animate[jCur]);
                // Remove aniamte with smallest position
                animate.splice(jCur, 1);
            }
            keyframes[name] = animate = animNew;
            /**
             * UPDATE ANIMATE BEGIN FOR KEYFRAME
             */
            var animBegin = animate[0];
            // Additional position-end if Keyframe only 1 animation & without property 'position'
            if (animBegin.pos === undefined && animate.length == 1) {
                animBegin.pos = 100;
            }
            // Additional empty property with position-begin no exist
            if (animBegin.pos !== 0) {
                animate.unshift({ pos: 0 });
            }
            /**
             * UPDATE ANIMATE-END FOR KEYFRAME IF THERE IS NOT
             */
            var animEnd = animate[animate.length - 1];
            if (animEnd.pos != 100) {
                animate.push(that.keyframeDefault.animEnd);
            }
            return animate;
        },
        /**
         * UPDATE ALL KEYFRAMES IN SYSTEM
         *  + Support call function from outside
         */
        UpdateAllKeyframes: function () {
            VariableModule(this);
            /**
             * SETUP ALL KEYFRAMES TRONG PARTICULAR RUBY & DEFAULT KEYFRAME IN SYSTEM
             */
            var keyframes = $.extend(true, {}, o.rubyAnimateKeyframes, window.__rubyAnimateKeyframes__);
            /**
             * SETUP EACH RUBY-ANIMATE KEYFRAME
             */
            for (var name in keyframes) {
                // Get animate of current keyframe
                var animate = keyframes[name];
                // Add data into animate keyframe
                keyframes[name] = that.UpdateDataToKeyframe(animate);
            }
            // Store into ruby system
            va.rubyAnimateKeyframes = keyframes;
            /**
             * UPDATE RUBY-ANIMATE ONE
             *  + Update RubyAnimate window
             */
            va.rubyAnimateOne = $.extend(true, {}, o.rubyAnimateOne, window.__rubyAnimateOne__);
        },
        /**
         * SETUP RUBY-ANIMATE TO TWEEN-ANIAMTE
         */
        Tween: function (nameKey, duration, delay, easing, keyframes) {
            VariableModule(this);
            var tween, animate;
            /**
             * SETUP KEYFRAMES: SUPPORT KEYFRAMES OUTSIDE
             */
            keyframes = keyframes || va.rubyAnimateKeyframes;
            /**
             * GET KEYFRAME AT FIRST
             */
            // Case normal: namekey is string
            if (typeof nameKey === 'string') {
                animate = keyframes[nameKey];
            }
            else if ($.isArray(nameKey) && nameKey.length) {
                // Copy array to new array
                var keyframe = nameKey.slice();
                // Update data into keyframe
                animate = that.UpdateDataToKeyframe(keyframe);
            }
            /**
             * CONDITIONAL EXECUTION
             */
            if (!animate)
                return;
            tween = [];
            /**
             * VALUE TRANSFORM AT FIRST
             */
            tween[0] = that.CopyData(animate[0]);
            /**
             * CONVERT DURATION-TIME IN ANIAMTION
             */
            var posLast = 0;
            for (var i = 1, len = animate.length; i < len; i++) {
                var animCur = animate[i], tweenCur = { prop: that.CopyData(animCur), opts: {} };
                /**
                 * PROPERTY 'DURATION'
                 */
                var optsCur = tweenCur.opts, posCur = animCur.pos;
                optsCur.duration = (posCur - posLast) / 100 * duration;
                posLast = posCur;
                /**
                 * GET PROPERTY 'DELAY'
                 *  + Only setup first property
                 */
                if (delay !== undefined && delay !== null && i == 1) {
                    optsCur.delay = delay;
                }
                /**
                 * PROPERTY 'EASING'
                 *  + Only setup first property
                 */
                if (easing !== undefined && easing !== null && i == 1) {
                    optsCur.easing = easing;
                }
                /**
                 * INSERT CURRENT TWEEN INTO SYSTEM
                 */
                tween.push(tweenCur);
            }
            // Return Tween-animate after setup
            return tween;
        },
        /**
         * CONVERT RUBY-ANIMATE ONE TO 4 PARTICULAR NAME
         */
        OneConvertFour: function (nameKey) {
            var animateOne = this.va.rubyAnimateOne;
            // Return keyframe
            return animateOne[nameKey] || animateOne['_default_'];
        }
    };
})(jQuery);
/**
 * MODULE NESTED
 */
(function ($) {
    // Check variable module
    window.rt01MODULE = window.rt01MODULE || {};
    /**
     * MODULE NESTED
     */
    rt01MODULE.NESTED = {
        /**
         * REMOVE RUBY-NESTED IN CURRENT SLIDE WHEN USE 'API.REMOVE()'
         */
        Destroy: function ($slCur) {
            var that = this;
            // Check ruby-nested exist
            var $nested = $slCur.find('.' + that.va.ns);
            if ($nested.length) {
                // Check ruby already initialized & have 'api.destroy()'
                var nestedData = $nested.data(rt01VA.rubyName);
                nestedData && nestedData.destroy && nestedData.destroy(true);
            }
        },
        /**
         * REFRESH THE VARIABLE IN RUBY-NESTED IN CURRENT SLIDE
         */
        RefreshInSlide: function ($slCur) {
            var that = this, va = that.va, $rubyNested = $slCur.find('.' + va.ns);
            // Check in each ruby-nested (if have)
            $rubyNested.each(function () {
                var $self = $(this), ruby = $self.data(rt01VA.rubyName);
                // Only apply for ruby active
                if (!!ruby) {
                    // Refresh ruby-nested for width / height < 10px
                    if (ruby.one.va.wRuby < 10 || ruby.one.va.hRuby < 10)
                        ruby.refresh();
                }
            });
        }
    };
})(jQuery);
/**
 * MODULE CLASSADD
 */
(function ($) {
    // Check variable module
    window.rt01MODULE = window.rt01MODULE || {};
    /**
     * MODULE CLASSADD
     */
    rt01MODULE.CLASSADD = {
        // Check & store 'classAdd' of each slide
        Filter: function (opt) {
            var classAdd = '';
            if (opt.classAdd !== undefined) {
                // Mark sure convert 'classAdd' to string
                classAdd = opt.classAdd.toString();
            }
            return classAdd;
        },
        // Toggle class on ruby when swap slide
        Toggle: function () {
            var va = this.va, cs = this.cs;
            var classLast = va.classAdd[cs.idLast], classCur = va.classAdd[cs.idCur];
            // Remove class-old & add class-new
            if (classLast !== undefined && classLast != '')
                cs.$ruby.removeClass(classLast);
            if (classCur !== undefined && classCur != '')
                cs.$ruby.addClass(classCur);
        }
    };
})(jQuery);
/**
 * MODULE DISPLAY
 */
(function ($) {
    // Check variable module
    window.rt01MODULE = window.rt01MODULE || {};
    // Global variables
    var that, o, cs, va, is;
    /**
     * UPDATE GLOBAL VARIABLES
     */
    function VariableModule(self) {
        that = self;
        o = self.o;
        cs = self.cs;
        va = self.va;
        is = self.is;
    }
    /**
     * MODULE DISPLAY RUBY
     */
    rt01MODULE.DISPLAY = {
        /**
         * INITIAZLIZE IN RUBY
         *  + Check ruby is 'sleep' mode (option 'show', 'showInRange')
         */
        SetupInit: function () {
            VariableModule(this);
            /**
             * DISPLAY ON THE DEVICE: 'DESKTOP' & 'MOBILE'
             */
            var isShowRuby = true;
            if ((is.mobile && o.showBy == 'desktop')
                || (!is.mobile && o.showBy == 'mobile'))
                isShowRuby = false;
            if (isShowRuby) {
                /**
                 * CONTINUE WITH OPTION 'SHOW-FROM'
                 */
                that.SetupVars();
                that.Check();
                // Swap to 'INIT.Ready' || event 'resize'
                is.awake ? that.INIT.Ready() : that.ResizeON();
            }
            else
                cs.$ruby.remove();
        },
        /**
         * VARIABLES OF 'SHOW-HIDE'
         * @param array va.showInRange
         * @param boolean is.showRuby
         */
        SetupVars: function () {
            VariableModule(this);
            var M = that.M;
            /**
             * VARIABLE 'SHOW-FROM'
             */
            if (!!o.showInRange) {
                /**
                 * FUNCTION: CONVERT VARIABLE TO RANGE{}
                 * @return object chain
                 */
                function Chain2(val) {
                    if ($.isNumeric(val))
                        val = [[val, 100000]];
                    else if (M.ElesIsNumber(val, 2))
                        val = [val];
                    // Check value is array[] to continue
                    if (!$.isArray(val))
                        return false;
                    var chain = { num: val.length };
                    for (i = chain.num - 1; i >= 0; i--) {
                        var a = val[i];
                        // Additonal value is missing
                        if ($.isNumeric(a))
                            a = [a, 100000];
                        // Convert value to other elements of 'chain'
                        chain[i] = { 'from': M.PInt(a[0]), 'to': M.PInt(a[1]) };
                    }
                    return chain;
                }
                // Convert 'showInRange' to Range{}
                va.showInRange = Chain2(o.showInRange);
            }
            else {
                is.showInRange = is.awake = true;
            }
        },
        /**
         * KIEM RUBY DISPLAY IN CURRENT VISIBLE AREA WINDOW
         * @param boolean is.showInRange
         * @param boolean is.wake
         */
        Check: function () {
            VariableModule(this);
            var range = va.showInRange;
            /**
             * VARIABLE 'IS.SHOWINRANGE'
             */
            if ($.isPlainObject(va.showInRange)) {
                is.showInRange = false;
                // Check continue in va.showInRange[]
                for (i = range.num - 1; i >= 0; i--) {
                    if (that.M.MatchMedia(range[i].from, range[i].to)) {
                        is.showInRange = true;
                        break;
                    }
                }
            }
            /**
             * VARIABLE 'IS.AWAKE'
             *  + Ruby is sleeping -> ruby not initialize -> continue setup
             */
            if (is.awake === undefined && is.showInRange)
                is.awake = true;
        },
        /**
         * TOGGLE CLASS 'NONE' ON RUBY
         */
        Toggle: function () {
            VariableModule(this);
            // Show: check
            that.Check();
            // Toggle class 'none' on ruby
            var hide = va.ns + 'none';
            cs.$ruby[(is.showInRange ? 'remove' : 'add') + 'Class'](hide);
        },
        /**
         * EVENT RESIZE
         */
        ResizeON: function () {
            var that = this, cs = that.cs, va = that.va, ti = that.ti, is = that.is;
            // Hidden ruby
            cs.$ruby.addClass(va.ns + 'none');
            // Register event 'resize' for ruby
            va.$w.on('resize.rubyShow' + va.rubykey, function () {
                clearTimeout(ti.showResize);
                ti.showResize = setTimeout(function () {
                    that.Check();
                    is.awake && that.ResizeOFF();
                }, 200);
            });
        },
        ResizeOFF: function () {
            VariableModule(this);
            va.$w.off('resize.rubyShow' + va.rubykey);
            cs.$ruby.removeClass(va.ns + 'none');
            // Init ready when Ruby awake
            that.INIT.Ready();
        }
    };
})(jQuery);
//# sourceMappingURL=rubytabs-js-unuse.js.map
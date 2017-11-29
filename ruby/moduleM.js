"use strict";
exports.__esModule = true;
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
            try {
                str = $.parseJSON(str);
            }
            catch (e) {
                rt01VA.M.Message(messageError);
            }
        }
        // Return value depending on each case
        return $.isPlainObject(str) ? $.extend(true, {}, str)
            : $.isArray(str) ? $.extend(true, [], str)
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
                rt01VA.M.Message(messageError);
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
        var len = arr.length, isNum = $.isArray(arr) && len === lenCheck;
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
        if ($.isArray(arr)) {
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
        if ($.isArray(arrSource)) {
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
        else if ($.isArray(fromValue)) {
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
        if ($.isPlainObject(opts)) {
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
exports.M = M;
//# sourceMappingURL=moduleM.js.map
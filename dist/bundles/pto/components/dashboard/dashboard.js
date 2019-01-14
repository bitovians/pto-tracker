/*lodash@4.17.11#lodash*/
;
(function () {
    var undefined;
    var VERSION = '4.17.11';
    var LARGE_ARRAY_SIZE = 200;
    var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.', FUNC_ERROR_TEXT = 'Expected a function';
    var HASH_UNDEFINED = '__lodash_hash_undefined__';
    var MAX_MEMOIZE_SIZE = 500;
    var PLACEHOLDER = '__lodash_placeholder__';
    var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
    var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
    var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
    var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = '...';
    var HOT_COUNT = 800, HOT_SPAN = 16;
    var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
    var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 1.7976931348623157e+308, NAN = 0 / 0;
    var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
    var wrapFlags = [
        [
            'ary',
            WRAP_ARY_FLAG
        ],
        [
            'bind',
            WRAP_BIND_FLAG
        ],
        [
            'bindKey',
            WRAP_BIND_KEY_FLAG
        ],
        [
            'curry',
            WRAP_CURRY_FLAG
        ],
        [
            'curryRight',
            WRAP_CURRY_RIGHT_FLAG
        ],
        [
            'flip',
            WRAP_FLIP_FLAG
        ],
        [
            'partial',
            WRAP_PARTIAL_FLAG
        ],
        [
            'partialRight',
            WRAP_PARTIAL_RIGHT_FLAG
        ],
        [
            'rearg',
            WRAP_REARG_FLAG
        ]
    ];
    var argsTag = '[object Arguments]', arrayTag = '[object Array]', asyncTag = '[object AsyncFunction]', boolTag = '[object Boolean]', dateTag = '[object Date]', domExcTag = '[object DOMException]', errorTag = '[object Error]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', mapTag = '[object Map]', numberTag = '[object Number]', nullTag = '[object Null]', objectTag = '[object Object]', promiseTag = '[object Promise]', proxyTag = '[object Proxy]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', symbolTag = '[object Symbol]', undefinedTag = '[object Undefined]', weakMapTag = '[object WeakMap]', weakSetTag = '[object WeakSet]';
    var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
    var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
    var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
    var reTrim = /^\s+|\s+$/g, reTrimStart = /^\s+/, reTrimEnd = /\s+$/;
    var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reEscapeChar = /\\(\\)?/g;
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    var reFlags = /\w*$/;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsOctal = /^0o[0-7]+$/i;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var reNoMatch = /($^)/;
    var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
    var rsAstralRange = '\\ud800-\\udfff', rsComboMarksRange = '\\u0300-\\u036f', reComboHalfMarksRange = '\\ufe20-\\ufe2f', rsComboSymbolsRange = '\\u20d0-\\u20ff', rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = '\\u2700-\\u27bf', rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff', rsMathOpRange = '\\xac\\xb1\\xd7\\xf7', rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf', rsPunctuationRange = '\\u2000-\\u206f', rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000', rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde', rsVarRange = '\\ufe0e\\ufe0f', rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = '[\'\u2019]', rsAstral = '[' + rsAstralRange + ']', rsBreak = '[' + rsBreakRange + ']', rsCombo = '[' + rsComboRange + ']', rsDigits = '\\d+', rsDingbat = '[' + rsDingbatRange + ']', rsLower = '[' + rsLowerRange + ']', rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']', rsFitz = '\\ud83c[\\udffb-\\udfff]', rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')', rsNonAstral = '[^' + rsAstralRange + ']', rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}', rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]', rsUpper = '[' + rsUpperRange + ']', rsZWJ = '\\u200d';
    var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')', rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')', rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?', rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?', reOptMod = rsModifier + '?', rsOptVar = '[' + rsVarRange + ']?', rsOptJoin = '(?:' + rsZWJ + '(?:' + [
            rsNonAstral,
            rsRegional,
            rsSurrPair
        ].join('|') + ')' + rsOptVar + reOptMod + ')*', rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])', rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])', rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = '(?:' + [
            rsDingbat,
            rsRegional,
            rsSurrPair
        ].join('|') + ')' + rsSeq, rsSymbol = '(?:' + [
            rsNonAstral + rsCombo + '?',
            rsCombo,
            rsRegional,
            rsSurrPair,
            rsAstral
        ].join('|') + ')';
    var reApos = RegExp(rsApos, 'g');
    var reComboMark = RegExp(rsCombo, 'g');
    var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
    var reUnicodeWord = RegExp([
        rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [
            rsBreak,
            rsUpper,
            '$'
        ].join('|') + ')',
        rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [
            rsBreak,
            rsUpper + rsMiscLower,
            '$'
        ].join('|') + ')',
        rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
        rsUpper + '+' + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
    ].join('|'), 'g');
    var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var contextProps = [
        'Array',
        'Buffer',
        'DataView',
        'Date',
        'Error',
        'Float32Array',
        'Float64Array',
        'Function',
        'Int8Array',
        'Int16Array',
        'Int32Array',
        'Map',
        'Math',
        'Object',
        'Promise',
        'RegExp',
        'Set',
        'String',
        'Symbol',
        'TypeError',
        'Uint8Array',
        'Uint8ClampedArray',
        'Uint16Array',
        'Uint32Array',
        'WeakMap',
        '_',
        'clearTimeout',
        'isFinite',
        'parseInt',
        'setTimeout'
    ];
    var templateCounter = -1;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    var deburredLetters = {
        'À': 'A',
        'Á': 'A',
        'Â': 'A',
        'Ã': 'A',
        'Ä': 'A',
        'Å': 'A',
        'à': 'a',
        'á': 'a',
        'â': 'a',
        'ã': 'a',
        'ä': 'a',
        'å': 'a',
        'Ç': 'C',
        'ç': 'c',
        'Ð': 'D',
        'ð': 'd',
        'È': 'E',
        'É': 'E',
        'Ê': 'E',
        'Ë': 'E',
        'è': 'e',
        'é': 'e',
        'ê': 'e',
        'ë': 'e',
        'Ì': 'I',
        'Í': 'I',
        'Î': 'I',
        'Ï': 'I',
        'ì': 'i',
        'í': 'i',
        'î': 'i',
        'ï': 'i',
        'Ñ': 'N',
        'ñ': 'n',
        'Ò': 'O',
        'Ó': 'O',
        'Ô': 'O',
        'Õ': 'O',
        'Ö': 'O',
        'Ø': 'O',
        'ò': 'o',
        'ó': 'o',
        'ô': 'o',
        'õ': 'o',
        'ö': 'o',
        'ø': 'o',
        'Ù': 'U',
        'Ú': 'U',
        'Û': 'U',
        'Ü': 'U',
        'ù': 'u',
        'ú': 'u',
        'û': 'u',
        'ü': 'u',
        'Ý': 'Y',
        'ý': 'y',
        'ÿ': 'y',
        'Æ': 'Ae',
        'æ': 'ae',
        'Þ': 'Th',
        'þ': 'th',
        'ß': 'ss',
        'Ā': 'A',
        'Ă': 'A',
        'Ą': 'A',
        'ā': 'a',
        'ă': 'a',
        'ą': 'a',
        'Ć': 'C',
        'Ĉ': 'C',
        'Ċ': 'C',
        'Č': 'C',
        'ć': 'c',
        'ĉ': 'c',
        'ċ': 'c',
        'č': 'c',
        'Ď': 'D',
        'Đ': 'D',
        'ď': 'd',
        'đ': 'd',
        'Ē': 'E',
        'Ĕ': 'E',
        'Ė': 'E',
        'Ę': 'E',
        'Ě': 'E',
        'ē': 'e',
        'ĕ': 'e',
        'ė': 'e',
        'ę': 'e',
        'ě': 'e',
        'Ĝ': 'G',
        'Ğ': 'G',
        'Ġ': 'G',
        'Ģ': 'G',
        'ĝ': 'g',
        'ğ': 'g',
        'ġ': 'g',
        'ģ': 'g',
        'Ĥ': 'H',
        'Ħ': 'H',
        'ĥ': 'h',
        'ħ': 'h',
        'Ĩ': 'I',
        'Ī': 'I',
        'Ĭ': 'I',
        'Į': 'I',
        'İ': 'I',
        'ĩ': 'i',
        'ī': 'i',
        'ĭ': 'i',
        'į': 'i',
        'ı': 'i',
        'Ĵ': 'J',
        'ĵ': 'j',
        'Ķ': 'K',
        'ķ': 'k',
        'ĸ': 'k',
        'Ĺ': 'L',
        'Ļ': 'L',
        'Ľ': 'L',
        'Ŀ': 'L',
        'Ł': 'L',
        'ĺ': 'l',
        'ļ': 'l',
        'ľ': 'l',
        'ŀ': 'l',
        'ł': 'l',
        'Ń': 'N',
        'Ņ': 'N',
        'Ň': 'N',
        'Ŋ': 'N',
        'ń': 'n',
        'ņ': 'n',
        'ň': 'n',
        'ŋ': 'n',
        'Ō': 'O',
        'Ŏ': 'O',
        'Ő': 'O',
        'ō': 'o',
        'ŏ': 'o',
        'ő': 'o',
        'Ŕ': 'R',
        'Ŗ': 'R',
        'Ř': 'R',
        'ŕ': 'r',
        'ŗ': 'r',
        'ř': 'r',
        'Ś': 'S',
        'Ŝ': 'S',
        'Ş': 'S',
        'Š': 'S',
        'ś': 's',
        'ŝ': 's',
        'ş': 's',
        'š': 's',
        'Ţ': 'T',
        'Ť': 'T',
        'Ŧ': 'T',
        'ţ': 't',
        'ť': 't',
        'ŧ': 't',
        'Ũ': 'U',
        'Ū': 'U',
        'Ŭ': 'U',
        'Ů': 'U',
        'Ű': 'U',
        'Ų': 'U',
        'ũ': 'u',
        'ū': 'u',
        'ŭ': 'u',
        'ů': 'u',
        'ű': 'u',
        'ų': 'u',
        'Ŵ': 'W',
        'ŵ': 'w',
        'Ŷ': 'Y',
        'ŷ': 'y',
        'Ÿ': 'Y',
        'Ź': 'Z',
        'Ż': 'Z',
        'Ž': 'Z',
        'ź': 'z',
        'ż': 'z',
        'ž': 'z',
        'Ĳ': 'IJ',
        'ĳ': 'ij',
        'Œ': 'Oe',
        'œ': 'oe',
        'ŉ': '\'n',
        'ſ': 's'
    };
    var htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#39;'
    };
    var htmlUnescapes = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': '\''
    };
    var stringEscapes = {
        '\\': '\\',
        '\'': '\'',
        '\n': 'n',
        '\r': 'r',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
    };
    var freeParseFloat = parseFloat, freeParseInt = parseInt;
    var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
    var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function('return this')();
    var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function () {
        try {
            var types = freeModule && freeModule.require && freeModule.require('util').types;
            if (types) {
                return types;
            }
            return freeProcess && freeProcess.binding && freeProcess.binding('util');
        } catch (e) {
        }
    }();
    var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function apply(func, thisArg, args) {
        switch (args.length) {
        case 0:
            return func.call(thisArg);
        case 1:
            return func.call(thisArg, args[0]);
        case 2:
            return func.call(thisArg, args[0], args[1]);
        case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
    }
    function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
            var value = array[index];
            setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
    }
    function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
            if (iteratee(array[index], index, array) === false) {
                break;
            }
        }
        return array;
    }
    function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
            if (iteratee(array[length], length, array) === false) {
                break;
            }
        }
        return array;
    }
    function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
            if (!predicate(array[index], index, array)) {
                return false;
            }
        }
        return true;
    }
    function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
                result[resIndex++] = value;
            }
        }
        return result;
    }
    function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
    }
    function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
            if (comparator(value, array[index])) {
                return true;
            }
        }
        return false;
    }
    function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
            result[index] = iteratee(array[index], index, array);
        }
        return result;
    }
    function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
            array[offset + index] = values[index];
        }
        return array;
    }
    function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
            accumulator = array[++index];
        }
        while (++index < length) {
            accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
    }
    function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
            accumulator = array[--length];
        }
        while (length--) {
            accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
    }
    function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
            if (predicate(array[index], index, array)) {
                return true;
            }
        }
        return false;
    }
    var asciiSize = baseProperty('length');
    function asciiToArray(string) {
        return string.split('');
    }
    function asciiWords(string) {
        return string.match(reAsciiWord) || [];
    }
    function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function (value, key, collection) {
            if (predicate(value, key, collection)) {
                result = key;
                return false;
            }
        });
        return result;
    }
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
            if (predicate(array[index], index, array)) {
                return index;
            }
        }
        return -1;
    }
    function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
            if (comparator(array[index], value)) {
                return index;
            }
        }
        return -1;
    }
    function baseIsNaN(value) {
        return value !== value;
    }
    function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
    }
    function baseProperty(key) {
        return function (object) {
            return object == null ? undefined : object[key];
        };
    }
    function basePropertyOf(object) {
        return function (key) {
            return object == null ? undefined : object[key];
        };
    }
    function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function (value, index, collection) {
            accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection);
        });
        return accumulator;
    }
    function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
            array[length] = array[length].value;
        }
        return array;
    }
    function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
            var current = iteratee(array[index]);
            if (current !== undefined) {
                result = result === undefined ? current : result + current;
            }
        }
        return result;
    }
    function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
            result[index] = iteratee(index);
        }
        return result;
    }
    function baseToPairs(object, props) {
        return arrayMap(props, function (key) {
            return [
                key,
                object[key]
            ];
        });
    }
    function baseUnary(func) {
        return function (value) {
            return func(value);
        };
    }
    function baseValues(object, props) {
        return arrayMap(props, function (key) {
            return object[key];
        });
    }
    function cacheHas(cache, key) {
        return cache.has(key);
    }
    function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
    }
    function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
    }
    function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
            if (array[length] === placeholder) {
                ++result;
            }
        }
        return result;
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    var escapeHtmlChar = basePropertyOf(htmlEscapes);
    function escapeStringChar(chr) {
        return '\\' + stringEscapes[chr];
    }
    function getValue(object, key) {
        return object == null ? undefined : object[key];
    }
    function hasUnicode(string) {
        return reHasUnicode.test(string);
    }
    function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
    }
    function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
            result.push(data.value);
        }
        return result;
    }
    function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function (value, key) {
            result[++index] = [
                key,
                value
            ];
        });
        return result;
    }
    function overArg(func, transform) {
        return function (arg) {
            return func(transform(arg));
        };
    }
    function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
            var value = array[index];
            if (value === placeholder || value === PLACEHOLDER) {
                array[index] = PLACEHOLDER;
                result[resIndex++] = index;
            }
        }
        return result;
    }
    function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function (value) {
            result[++index] = value;
        });
        return result;
    }
    function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function (value) {
            result[++index] = [
                value,
                value
            ];
        });
        return result;
    }
    function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
            if (array[index] === value) {
                return index;
            }
        }
        return -1;
    }
    function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
            if (array[index] === value) {
                return index;
            }
        }
        return index;
    }
    function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
    }
    function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
    function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
            ++result;
        }
        return result;
    }
    function unicodeToArray(string) {
        return string.match(reUnicode) || [];
    }
    function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
    }
    var runInContext = function runInContext(context) {
        context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
        var Array = context.Array, Date = context.Date, Error = context.Error, Function = context.Function, Math = context.Math, Object = context.Object, RegExp = context.RegExp, String = context.String, TypeError = context.TypeError;
        var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
        var coreJsData = context['__core-js_shared__'];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = function () {
            var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
            return uid ? 'Symbol(src)_1.' + uid : '';
        }();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object);
        var oldDash = root._;
        var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
        var Buffer = moduleExports ? context.Buffer : undefined, Symbol = context.Symbol, Uint8Array = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined, getPrototype = overArg(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined, symIterator = Symbol ? Symbol.iterator : undefined, symToStringTag = Symbol ? Symbol.toStringTag : undefined;
        var defineProperty = function () {
            try {
                var func = getNative(Object, 'defineProperty');
                func({}, '', {});
                return func;
            } catch (e) {
            }
        }();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date && Date.now !== root.Date.now && Date.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math.ceil, nativeFloor = Math.floor, nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object.keys, Object), nativeMax = Math.max, nativeMin = Math.min, nativeNow = Date.now, nativeParseInt = context.parseInt, nativeRandom = Math.random, nativeReverse = arrayProto.reverse;
        var DataView = getNative(context, 'DataView'), Map = getNative(context, 'Map'), Promise = getNative(context, 'Promise'), Set = getNative(context, 'Set'), WeakMap = getNative(context, 'WeakMap'), nativeCreate = getNative(Object, 'create');
        var metaMap = WeakMap && new WeakMap();
        var realNames = {};
        var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
        function lodash(value) {
            if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
                if (value instanceof LodashWrapper) {
                    return value;
                }
                if (hasOwnProperty.call(value, '__wrapped__')) {
                    return wrapperClone(value);
                }
            }
            return new LodashWrapper(value);
        }
        var baseCreate = function () {
            function object() {
            }
            return function (proto) {
                if (!isObject(proto)) {
                    return {};
                }
                if (objectCreate) {
                    return objectCreate(proto);
                }
                object.prototype = proto;
                var result = new object();
                object.prototype = undefined;
                return result;
            };
        }();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__chain__ = !!chainAll;
            this.__index__ = 0;
            this.__values__ = undefined;
        }
        lodash.templateSettings = {
            'escape': reEscape,
            'evaluate': reEvaluate,
            'interpolate': reInterpolate,
            'variable': '',
            'imports': { '_': lodash }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__dir__ = 1;
            this.__filtered__ = false;
            this.__iteratees__ = [];
            this.__takeCount__ = MAX_ARRAY_LENGTH;
            this.__views__ = [];
        }
        function lazyClone() {
            var result = new LazyWrapper(this.__wrapped__);
            result.__actions__ = copyArray(this.__actions__);
            result.__dir__ = this.__dir__;
            result.__filtered__ = this.__filtered__;
            result.__iteratees__ = copyArray(this.__iteratees__);
            result.__takeCount__ = this.__takeCount__;
            result.__views__ = copyArray(this.__views__);
            return result;
        }
        function lazyReverse() {
            if (this.__filtered__) {
                var result = new LazyWrapper(this);
                result.__dir__ = -1;
                result.__filtered__ = true;
            } else {
                result = this.clone();
                result.__dir__ *= -1;
            }
            return result;
        }
        function lazyValue() {
            var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
            if (!isArr || !isRight && arrLength == length && takeCount == length) {
                return baseWrapperValue(array, this.__actions__);
            }
            var result = [];
            outer:
                while (length-- && resIndex < takeCount) {
                    index += dir;
                    var iterIndex = -1, value = array[index];
                    while (++iterIndex < iterLength) {
                        var data = iteratees[iterIndex], iteratee = data.iteratee, type = data.type, computed = iteratee(value);
                        if (type == LAZY_MAP_FLAG) {
                            value = computed;
                        } else if (!computed) {
                            if (type == LAZY_FILTER_FLAG) {
                                continue outer;
                            } else {
                                break outer;
                            }
                        }
                    }
                    result[resIndex++] = value;
                }
            return result;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
                var entry = entries[index];
                this.set(entry[0], entry[1]);
            }
        }
        function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {};
            this.size = 0;
        }
        function hashDelete(key) {
            var result = this.has(key) && delete this.__data__[key];
            this.size -= result ? 1 : 0;
            return result;
        }
        function hashGet(key) {
            var data = this.__data__;
            if (nativeCreate) {
                var result = data[key];
                return result === HASH_UNDEFINED ? undefined : result;
            }
            return hasOwnProperty.call(data, key) ? data[key] : undefined;
        }
        function hashHas(key) {
            var data = this.__data__;
            return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
            var data = this.__data__;
            this.size += this.has(key) ? 0 : 1;
            data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
            return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype['delete'] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
                var entry = entries[index];
                this.set(entry[0], entry[1]);
            }
        }
        function listCacheClear() {
            this.__data__ = [];
            this.size = 0;
        }
        function listCacheDelete(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) {
                return false;
            }
            var lastIndex = data.length - 1;
            if (index == lastIndex) {
                data.pop();
            } else {
                splice.call(data, index, 1);
            }
            --this.size;
            return true;
        }
        function listCacheGet(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            return index < 0 ? undefined : data[index][1];
        }
        function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) {
                ++this.size;
                data.push([
                    key,
                    value
                ]);
            } else {
                data[index][1] = value;
            }
            return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype['delete'] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
                var entry = entries[index];
                this.set(entry[0], entry[1]);
            }
        }
        function mapCacheClear() {
            this.size = 0;
            this.__data__ = {
                'hash': new Hash(),
                'map': new (Map || ListCache)(),
                'string': new Hash()
            };
        }
        function mapCacheDelete(key) {
            var result = getMapData(this, key)['delete'](key);
            this.size -= result ? 1 : 0;
            return result;
        }
        function mapCacheGet(key) {
            return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
            return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
            var data = getMapData(this, key), size = data.size;
            data.set(key, value);
            this.size += data.size == size ? 0 : 1;
            return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype['delete'] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values) {
            var index = -1, length = values == null ? 0 : values.length;
            this.__data__ = new MapCache();
            while (++index < length) {
                this.add(values[index]);
            }
        }
        function setCacheAdd(value) {
            this.__data__.set(value, HASH_UNDEFINED);
            return this;
        }
        function setCacheHas(value) {
            return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
            var data = this.__data__ = new ListCache(entries);
            this.size = data.size;
        }
        function stackClear() {
            this.__data__ = new ListCache();
            this.size = 0;
        }
        function stackDelete(key) {
            var data = this.__data__, result = data['delete'](key);
            this.size = data.size;
            return result;
        }
        function stackGet(key) {
            return this.__data__.get(key);
        }
        function stackHas(key) {
            return this.__data__.has(key);
        }
        function stackSet(key, value) {
            var data = this.__data__;
            if (data instanceof ListCache) {
                var pairs = data.__data__;
                if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
                    pairs.push([
                        key,
                        value
                    ]);
                    this.size = ++data.size;
                    return this;
                }
                data = this.__data__ = new MapCache(pairs);
            }
            data.set(key, value);
            this.size = data.size;
            return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype['delete'] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
            var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
            for (var key in value) {
                if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isBuff && (key == 'offset' || key == 'parent') || isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || isIndex(key, length)))) {
                    result.push(key);
                }
            }
            return result;
        }
        function arraySample(array) {
            var length = array.length;
            return length ? array[baseRandom(0, length - 1)] : undefined;
        }
        function arraySampleSize(array, n) {
            return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        function arrayShuffle(array) {
            return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object, key, value) {
            if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
                baseAssignValue(object, key, value);
            }
        }
        function assignValue(object, key, value) {
            var objValue = object[key];
            if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
                baseAssignValue(object, key, value);
            }
        }
        function assocIndexOf(array, key) {
            var length = array.length;
            while (length--) {
                if (eq(array[length][0], key)) {
                    return length;
                }
            }
            return -1;
        }
        function baseAggregator(collection, setter, iteratee, accumulator) {
            baseEach(collection, function (value, key, collection) {
                setter(accumulator, value, iteratee(value), collection);
            });
            return accumulator;
        }
        function baseAssign(object, source) {
            return object && copyObject(source, keys(source), object);
        }
        function baseAssignIn(object, source) {
            return object && copyObject(source, keysIn(source), object);
        }
        function baseAssignValue(object, key, value) {
            if (key == '__proto__' && defineProperty) {
                defineProperty(object, key, {
                    'configurable': true,
                    'enumerable': true,
                    'value': value,
                    'writable': true
                });
            } else {
                object[key] = value;
            }
        }
        function baseAt(object, paths) {
            var index = -1, length = paths.length, result = Array(length), skip = object == null;
            while (++index < length) {
                result[index] = skip ? undefined : get(object, paths[index]);
            }
            return result;
        }
        function baseClamp(number, lower, upper) {
            if (number === number) {
                if (upper !== undefined) {
                    number = number <= upper ? number : upper;
                }
                if (lower !== undefined) {
                    number = number >= lower ? number : lower;
                }
            }
            return number;
        }
        function baseClone(value, bitmask, customizer, key, object, stack) {
            var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
            if (customizer) {
                result = object ? customizer(value, key, object, stack) : customizer(value);
            }
            if (result !== undefined) {
                return result;
            }
            if (!isObject(value)) {
                return value;
            }
            var isArr = isArray(value);
            if (isArr) {
                result = initCloneArray(value);
                if (!isDeep) {
                    return copyArray(value, result);
                }
            } else {
                var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
                if (isBuffer(value)) {
                    return cloneBuffer(value, isDeep);
                }
                if (tag == objectTag || tag == argsTag || isFunc && !object) {
                    result = isFlat || isFunc ? {} : initCloneObject(value);
                    if (!isDeep) {
                        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
                    }
                } else {
                    if (!cloneableTags[tag]) {
                        return object ? value : {};
                    }
                    result = initCloneByTag(value, tag, isDeep);
                }
            }
            stack || (stack = new Stack());
            var stacked = stack.get(value);
            if (stacked) {
                return stacked;
            }
            stack.set(value, result);
            if (isSet(value)) {
                value.forEach(function (subValue) {
                    result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
                });
                return result;
            }
            if (isMap(value)) {
                value.forEach(function (subValue, key) {
                    result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
                });
                return result;
            }
            var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
            var props = isArr ? undefined : keysFunc(value);
            arrayEach(props || value, function (subValue, key) {
                if (props) {
                    key = subValue;
                    subValue = value[key];
                }
                assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
            });
            return result;
        }
        function baseConforms(source) {
            var props = keys(source);
            return function (object) {
                return baseConformsTo(object, source, props);
            };
        }
        function baseConformsTo(object, source, props) {
            var length = props.length;
            if (object == null) {
                return !length;
            }
            object = Object(object);
            while (length--) {
                var key = props[length], predicate = source[key], value = object[key];
                if (value === undefined && !(key in object) || !predicate(value)) {
                    return false;
                }
            }
            return true;
        }
        function baseDelay(func, wait, args) {
            if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            return setTimeout(function () {
                func.apply(undefined, args);
            }, wait);
        }
        function baseDifference(array, values, iteratee, comparator) {
            var index = -1, includes = arrayIncludes, isCommon = true, length = array.length, result = [], valuesLength = values.length;
            if (!length) {
                return result;
            }
            if (iteratee) {
                values = arrayMap(values, baseUnary(iteratee));
            }
            if (comparator) {
                includes = arrayIncludesWith;
                isCommon = false;
            } else if (values.length >= LARGE_ARRAY_SIZE) {
                includes = cacheHas;
                isCommon = false;
                values = new SetCache(values);
            }
            outer:
                while (++index < length) {
                    var value = array[index], computed = iteratee == null ? value : iteratee(value);
                    value = comparator || value !== 0 ? value : 0;
                    if (isCommon && computed === computed) {
                        var valuesIndex = valuesLength;
                        while (valuesIndex--) {
                            if (values[valuesIndex] === computed) {
                                continue outer;
                            }
                        }
                        result.push(value);
                    } else if (!includes(values, computed, comparator)) {
                        result.push(value);
                    }
                }
            return result;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
            var result = true;
            baseEach(collection, function (value, index, collection) {
                result = !!predicate(value, index, collection);
                return result;
            });
            return result;
        }
        function baseExtremum(array, iteratee, comparator) {
            var index = -1, length = array.length;
            while (++index < length) {
                var value = array[index], current = iteratee(value);
                if (current != null && (computed === undefined ? current === current && !isSymbol(current) : comparator(current, computed))) {
                    var computed = current, result = value;
                }
            }
            return result;
        }
        function baseFill(array, value, start, end) {
            var length = array.length;
            start = toInteger(start);
            if (start < 0) {
                start = -start > length ? 0 : length + start;
            }
            end = end === undefined || end > length ? length : toInteger(end);
            if (end < 0) {
                end += length;
            }
            end = start > end ? 0 : toLength(end);
            while (start < end) {
                array[start++] = value;
            }
            return array;
        }
        function baseFilter(collection, predicate) {
            var result = [];
            baseEach(collection, function (value, index, collection) {
                if (predicate(value, index, collection)) {
                    result.push(value);
                }
            });
            return result;
        }
        function baseFlatten(array, depth, predicate, isStrict, result) {
            var index = -1, length = array.length;
            predicate || (predicate = isFlattenable);
            result || (result = []);
            while (++index < length) {
                var value = array[index];
                if (depth > 0 && predicate(value)) {
                    if (depth > 1) {
                        baseFlatten(value, depth - 1, predicate, isStrict, result);
                    } else {
                        arrayPush(result, value);
                    }
                } else if (!isStrict) {
                    result[result.length] = value;
                }
            }
            return result;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee) {
            return object && baseFor(object, iteratee, keys);
        }
        function baseForOwnRight(object, iteratee) {
            return object && baseForRight(object, iteratee, keys);
        }
        function baseFunctions(object, props) {
            return arrayFilter(props, function (key) {
                return isFunction(object[key]);
            });
        }
        function baseGet(object, path) {
            path = castPath(path, object);
            var index = 0, length = path.length;
            while (object != null && index < length) {
                object = object[toKey(path[index++])];
            }
            return index && index == length ? object : undefined;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
            var result = keysFunc(object);
            return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
        }
        function baseGetTag(value) {
            if (value == null) {
                return value === undefined ? undefinedTag : nullTag;
            }
            return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
            return value > other;
        }
        function baseHas(object, key) {
            return object != null && hasOwnProperty.call(object, key);
        }
        function baseHasIn(object, key) {
            return object != null && key in Object(object);
        }
        function baseInRange(number, start, end) {
            return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee, comparator) {
            var includes = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array(othLength), maxLength = Infinity, result = [];
            while (othIndex--) {
                var array = arrays[othIndex];
                if (othIndex && iteratee) {
                    array = arrayMap(array, baseUnary(iteratee));
                }
                maxLength = nativeMin(array.length, maxLength);
                caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined;
            }
            array = arrays[0];
            var index = -1, seen = caches[0];
            outer:
                while (++index < length && result.length < maxLength) {
                    var value = array[index], computed = iteratee ? iteratee(value) : value;
                    value = comparator || value !== 0 ? value : 0;
                    if (!(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
                        othIndex = othLength;
                        while (--othIndex) {
                            var cache = caches[othIndex];
                            if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator))) {
                                continue outer;
                            }
                        }
                        if (seen) {
                            seen.push(computed);
                        }
                        result.push(value);
                    }
                }
            return result;
        }
        function baseInverter(object, setter, iteratee, accumulator) {
            baseForOwn(object, function (value, key, object) {
                setter(accumulator, iteratee(value), key, object);
            });
            return accumulator;
        }
        function baseInvoke(object, path, args) {
            path = castPath(path, object);
            object = parent(object, path);
            var func = object == null ? object : object[toKey(last(path))];
            return func == null ? undefined : apply(func, object, args);
        }
        function baseIsArguments(value) {
            return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
            return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
            return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
            if (value === other) {
                return true;
            }
            if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
                return value !== value && other !== other;
            }
            return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
            var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
            objTag = objTag == argsTag ? objectTag : objTag;
            othTag = othTag == argsTag ? objectTag : othTag;
            var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
            if (isSameTag && isBuffer(object)) {
                if (!isBuffer(other)) {
                    return false;
                }
                objIsArr = true;
                objIsObj = false;
            }
            if (isSameTag && !objIsObj) {
                stack || (stack = new Stack());
                return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
            }
            if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
                var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'), othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
                if (objIsWrapped || othIsWrapped) {
                    var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
                    stack || (stack = new Stack());
                    return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
                }
            }
            if (!isSameTag) {
                return false;
            }
            stack || (stack = new Stack());
            return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
            return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
            var index = matchData.length, length = index, noCustomizer = !customizer;
            if (object == null) {
                return !length;
            }
            object = Object(object);
            while (index--) {
                var data = matchData[index];
                if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
                    return false;
                }
            }
            while (++index < length) {
                data = matchData[index];
                var key = data[0], objValue = object[key], srcValue = data[1];
                if (noCustomizer && data[2]) {
                    if (objValue === undefined && !(key in object)) {
                        return false;
                    }
                } else {
                    var stack = new Stack();
                    if (customizer) {
                        var result = customizer(objValue, srcValue, key, object, source, stack);
                    }
                    if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
                        return false;
                    }
                }
            }
            return true;
        }
        function baseIsNative(value) {
            if (!isObject(value) || isMasked(value)) {
                return false;
            }
            var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
            return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
            return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
            return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
            if (typeof value == 'function') {
                return value;
            }
            if (value == null) {
                return identity;
            }
            if (typeof value == 'object') {
                return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
            }
            return property(value);
        }
        function baseKeys(object) {
            if (!isPrototype(object)) {
                return nativeKeys(object);
            }
            var result = [];
            for (var key in Object(object)) {
                if (hasOwnProperty.call(object, key) && key != 'constructor') {
                    result.push(key);
                }
            }
            return result;
        }
        function baseKeysIn(object) {
            if (!isObject(object)) {
                return nativeKeysIn(object);
            }
            var isProto = isPrototype(object), result = [];
            for (var key in object) {
                if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
                    result.push(key);
                }
            }
            return result;
        }
        function baseLt(value, other) {
            return value < other;
        }
        function baseMap(collection, iteratee) {
            var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
            baseEach(collection, function (value, key, collection) {
                result[++index] = iteratee(value, key, collection);
            });
            return result;
        }
        function baseMatches(source) {
            var matchData = getMatchData(source);
            if (matchData.length == 1 && matchData[0][2]) {
                return matchesStrictComparable(matchData[0][0], matchData[0][1]);
            }
            return function (object) {
                return object === source || baseIsMatch(object, source, matchData);
            };
        }
        function baseMatchesProperty(path, srcValue) {
            if (isKey(path) && isStrictComparable(srcValue)) {
                return matchesStrictComparable(toKey(path), srcValue);
            }
            return function (object) {
                var objValue = get(object, path);
                return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
            };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
            if (object === source) {
                return;
            }
            baseFor(source, function (srcValue, key) {
                if (isObject(srcValue)) {
                    stack || (stack = new Stack());
                    baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
                } else {
                    var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;
                    if (newValue === undefined) {
                        newValue = srcValue;
                    }
                    assignMergeValue(object, key, newValue);
                }
            }, keysIn);
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
            var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
            if (stacked) {
                assignMergeValue(object, key, stacked);
                return;
            }
            var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
            var isCommon = newValue === undefined;
            if (isCommon) {
                var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
                newValue = srcValue;
                if (isArr || isBuff || isTyped) {
                    if (isArray(objValue)) {
                        newValue = objValue;
                    } else if (isArrayLikeObject(objValue)) {
                        newValue = copyArray(objValue);
                    } else if (isBuff) {
                        isCommon = false;
                        newValue = cloneBuffer(srcValue, true);
                    } else if (isTyped) {
                        isCommon = false;
                        newValue = cloneTypedArray(srcValue, true);
                    } else {
                        newValue = [];
                    }
                } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
                    newValue = objValue;
                    if (isArguments(objValue)) {
                        newValue = toPlainObject(objValue);
                    } else if (!isObject(objValue) || isFunction(objValue)) {
                        newValue = initCloneObject(srcValue);
                    }
                } else {
                    isCommon = false;
                }
            }
            if (isCommon) {
                stack.set(srcValue, newValue);
                mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
                stack['delete'](srcValue);
            }
            assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n) {
            var length = array.length;
            if (!length) {
                return;
            }
            n += n < 0 ? length : 0;
            return isIndex(n, length) ? array[n] : undefined;
        }
        function baseOrderBy(collection, iteratees, orders) {
            var index = -1;
            iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));
            var result = baseMap(collection, function (value, key, collection) {
                var criteria = arrayMap(iteratees, function (iteratee) {
                    return iteratee(value);
                });
                return {
                    'criteria': criteria,
                    'index': ++index,
                    'value': value
                };
            });
            return baseSortBy(result, function (object, other) {
                return compareMultiple(object, other, orders);
            });
        }
        function basePick(object, paths) {
            return basePickBy(object, paths, function (value, path) {
                return hasIn(object, path);
            });
        }
        function basePickBy(object, paths, predicate) {
            var index = -1, length = paths.length, result = {};
            while (++index < length) {
                var path = paths[index], value = baseGet(object, path);
                if (predicate(value, path)) {
                    baseSet(result, castPath(path, object), value);
                }
            }
            return result;
        }
        function basePropertyDeep(path) {
            return function (object) {
                return baseGet(object, path);
            };
        }
        function basePullAll(array, values, iteratee, comparator) {
            var indexOf = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values.length, seen = array;
            if (array === values) {
                values = copyArray(values);
            }
            if (iteratee) {
                seen = arrayMap(array, baseUnary(iteratee));
            }
            while (++index < length) {
                var fromIndex = 0, value = values[index], computed = iteratee ? iteratee(value) : value;
                while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
                    if (seen !== array) {
                        splice.call(seen, fromIndex, 1);
                    }
                    splice.call(array, fromIndex, 1);
                }
            }
            return array;
        }
        function basePullAt(array, indexes) {
            var length = array ? indexes.length : 0, lastIndex = length - 1;
            while (length--) {
                var index = indexes[length];
                if (length == lastIndex || index !== previous) {
                    var previous = index;
                    if (isIndex(index)) {
                        splice.call(array, index, 1);
                    } else {
                        baseUnset(array, index);
                    }
                }
            }
            return array;
        }
        function baseRandom(lower, upper) {
            return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
            var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result = Array(length);
            while (length--) {
                result[fromRight ? length : ++index] = start;
                start += step;
            }
            return result;
        }
        function baseRepeat(string, n) {
            var result = '';
            if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
                return result;
            }
            do {
                if (n % 2) {
                    result += string;
                }
                n = nativeFloor(n / 2);
                if (n) {
                    string += string;
                }
            } while (n);
            return result;
        }
        function baseRest(func, start) {
            return setToString(overRest(func, start, identity), func + '');
        }
        function baseSample(collection) {
            return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
            var array = values(collection);
            return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        function baseSet(object, path, value, customizer) {
            if (!isObject(object)) {
                return object;
            }
            path = castPath(path, object);
            var index = -1, length = path.length, lastIndex = length - 1, nested = object;
            while (nested != null && ++index < length) {
                var key = toKey(path[index]), newValue = value;
                if (index != lastIndex) {
                    var objValue = nested[key];
                    newValue = customizer ? customizer(objValue, key, nested) : undefined;
                    if (newValue === undefined) {
                        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
                    }
                }
                assignValue(nested, key, newValue);
                nested = nested[key];
            }
            return object;
        }
        var baseSetData = !metaMap ? identity : function (func, data) {
            metaMap.set(func, data);
            return func;
        };
        var baseSetToString = !defineProperty ? identity : function (func, string) {
            return defineProperty(func, 'toString', {
                'configurable': true,
                'enumerable': false,
                'value': constant(string),
                'writable': true
            });
        };
        function baseShuffle(collection) {
            return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
            var index = -1, length = array.length;
            if (start < 0) {
                start = -start > length ? 0 : length + start;
            }
            end = end > length ? length : end;
            if (end < 0) {
                end += length;
            }
            length = start > end ? 0 : end - start >>> 0;
            start >>>= 0;
            var result = Array(length);
            while (++index < length) {
                result[index] = array[index + start];
            }
            return result;
        }
        function baseSome(collection, predicate) {
            var result;
            baseEach(collection, function (value, index, collection) {
                result = predicate(value, index, collection);
                return !result;
            });
            return !!result;
        }
        function baseSortedIndex(array, value, retHighest) {
            var low = 0, high = array == null ? low : array.length;
            if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
                while (low < high) {
                    var mid = low + high >>> 1, computed = array[mid];
                    if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                        low = mid + 1;
                    } else {
                        high = mid;
                    }
                }
                return high;
            }
            return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee, retHighest) {
            value = iteratee(value);
            var low = 0, high = array == null ? 0 : array.length, valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined;
            while (low < high) {
                var mid = nativeFloor((low + high) / 2), computed = iteratee(array[mid]), othIsDefined = computed !== undefined, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
                if (valIsNaN) {
                    var setLow = retHighest || othIsReflexive;
                } else if (valIsUndefined) {
                    setLow = othIsReflexive && (retHighest || othIsDefined);
                } else if (valIsNull) {
                    setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
                } else if (valIsSymbol) {
                    setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
                } else if (othIsNull || othIsSymbol) {
                    setLow = false;
                } else {
                    setLow = retHighest ? computed <= value : computed < value;
                }
                if (setLow) {
                    low = mid + 1;
                } else {
                    high = mid;
                }
            }
            return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee) {
            var index = -1, length = array.length, resIndex = 0, result = [];
            while (++index < length) {
                var value = array[index], computed = iteratee ? iteratee(value) : value;
                if (!index || !eq(computed, seen)) {
                    var seen = computed;
                    result[resIndex++] = value === 0 ? 0 : value;
                }
            }
            return result;
        }
        function baseToNumber(value) {
            if (typeof value == 'number') {
                return value;
            }
            if (isSymbol(value)) {
                return NAN;
            }
            return +value;
        }
        function baseToString(value) {
            if (typeof value == 'string') {
                return value;
            }
            if (isArray(value)) {
                return arrayMap(value, baseToString) + '';
            }
            if (isSymbol(value)) {
                return symbolToString ? symbolToString.call(value) : '';
            }
            var result = value + '';
            return result == '0' && 1 / value == -INFINITY ? '-0' : result;
        }
        function baseUniq(array, iteratee, comparator) {
            var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
            if (comparator) {
                isCommon = false;
                includes = arrayIncludesWith;
            } else if (length >= LARGE_ARRAY_SIZE) {
                var set = iteratee ? null : createSet(array);
                if (set) {
                    return setToArray(set);
                }
                isCommon = false;
                includes = cacheHas;
                seen = new SetCache();
            } else {
                seen = iteratee ? [] : result;
            }
            outer:
                while (++index < length) {
                    var value = array[index], computed = iteratee ? iteratee(value) : value;
                    value = comparator || value !== 0 ? value : 0;
                    if (isCommon && computed === computed) {
                        var seenIndex = seen.length;
                        while (seenIndex--) {
                            if (seen[seenIndex] === computed) {
                                continue outer;
                            }
                        }
                        if (iteratee) {
                            seen.push(computed);
                        }
                        result.push(value);
                    } else if (!includes(seen, computed, comparator)) {
                        if (seen !== result) {
                            seen.push(computed);
                        }
                        result.push(value);
                    }
                }
            return result;
        }
        function baseUnset(object, path) {
            path = castPath(path, object);
            object = parent(object, path);
            return object == null || delete object[toKey(last(path))];
        }
        function baseUpdate(object, path, updater, customizer) {
            return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
            var length = array.length, index = fromRight ? length : -1;
            while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
            }
            return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
            var result = value;
            if (result instanceof LazyWrapper) {
                result = result.value();
            }
            return arrayReduce(actions, function (result, action) {
                return action.func.apply(action.thisArg, arrayPush([result], action.args));
            }, result);
        }
        function baseXor(arrays, iteratee, comparator) {
            var length = arrays.length;
            if (length < 2) {
                return length ? baseUniq(arrays[0]) : [];
            }
            var index = -1, result = Array(length);
            while (++index < length) {
                var array = arrays[index], othIndex = -1;
                while (++othIndex < length) {
                    if (othIndex != index) {
                        result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
                    }
                }
            }
            return baseUniq(baseFlatten(result, 1), iteratee, comparator);
        }
        function baseZipObject(props, values, assignFunc) {
            var index = -1, length = props.length, valsLength = values.length, result = {};
            while (++index < length) {
                var value = index < valsLength ? values[index] : undefined;
                assignFunc(result, props[index], value);
            }
            return result;
        }
        function castArrayLikeObject(value) {
            return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
            return typeof value == 'function' ? value : identity;
        }
        function castPath(value, object) {
            if (isArray(value)) {
                return value;
            }
            return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
            var length = array.length;
            end = end === undefined ? length : end;
            return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout = ctxClearTimeout || function (id) {
            return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
            if (isDeep) {
                return buffer.slice();
            }
            var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
            buffer.copy(result);
            return result;
        }
        function cloneArrayBuffer(arrayBuffer) {
            var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
            new Uint8Array(result).set(new Uint8Array(arrayBuffer));
            return result;
        }
        function cloneDataView(dataView, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
            return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
            var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
            result.lastIndex = regexp.lastIndex;
            return result;
        }
        function cloneSymbol(symbol) {
            return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
            return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
            if (value !== other) {
                var valIsDefined = value !== undefined, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
                var othIsDefined = other !== undefined, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
                if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
                    return 1;
                }
                if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
                    return -1;
                }
            }
            return 0;
        }
        function compareMultiple(object, other, orders) {
            var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
            while (++index < length) {
                var result = compareAscending(objCriteria[index], othCriteria[index]);
                if (result) {
                    if (index >= ordersLength) {
                        return result;
                    }
                    var order = orders[index];
                    return result * (order == 'desc' ? -1 : 1);
                }
            }
            return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(leftLength + rangeLength), isUncurried = !isCurried;
            while (++leftIndex < leftLength) {
                result[leftIndex] = partials[leftIndex];
            }
            while (++argsIndex < holdersLength) {
                if (isUncurried || argsIndex < argsLength) {
                    result[holders[argsIndex]] = args[argsIndex];
                }
            }
            while (rangeLength--) {
                result[leftIndex++] = args[argsIndex++];
            }
            return result;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(rangeLength + rightLength), isUncurried = !isCurried;
            while (++argsIndex < rangeLength) {
                result[argsIndex] = args[argsIndex];
            }
            var offset = argsIndex;
            while (++rightIndex < rightLength) {
                result[offset + rightIndex] = partials[rightIndex];
            }
            while (++holdersIndex < holdersLength) {
                if (isUncurried || argsIndex < argsLength) {
                    result[offset + holders[holdersIndex]] = args[argsIndex++];
                }
            }
            return result;
        }
        function copyArray(source, array) {
            var index = -1, length = source.length;
            array || (array = Array(length));
            while (++index < length) {
                array[index] = source[index];
            }
            return array;
        }
        function copyObject(source, props, object, customizer) {
            var isNew = !object;
            object || (object = {});
            var index = -1, length = props.length;
            while (++index < length) {
                var key = props[index];
                var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
                if (newValue === undefined) {
                    newValue = source[key];
                }
                if (isNew) {
                    baseAssignValue(object, key, newValue);
                } else {
                    assignValue(object, key, newValue);
                }
            }
            return object;
        }
        function copySymbols(source, object) {
            return copyObject(source, getSymbols(source), object);
        }
        function copySymbolsIn(source, object) {
            return copyObject(source, getSymbolsIn(source), object);
        }
        function createAggregator(setter, initializer) {
            return function (collection, iteratee) {
                var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
                return func(collection, setter, getIteratee(iteratee, 2), accumulator);
            };
        }
        function createAssigner(assigner) {
            return baseRest(function (object, sources) {
                var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined, guard = length > 2 ? sources[2] : undefined;
                customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;
                if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                    customizer = length < 3 ? undefined : customizer;
                    length = 1;
                }
                object = Object(object);
                while (++index < length) {
                    var source = sources[index];
                    if (source) {
                        assigner(object, source, index, customizer);
                    }
                }
                return object;
            });
        }
        function createBaseEach(eachFunc, fromRight) {
            return function (collection, iteratee) {
                if (collection == null) {
                    return collection;
                }
                if (!isArrayLike(collection)) {
                    return eachFunc(collection, iteratee);
                }
                var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
                while (fromRight ? index-- : ++index < length) {
                    if (iteratee(iterable[index], index, iterable) === false) {
                        break;
                    }
                }
                return collection;
            };
        }
        function createBaseFor(fromRight) {
            return function (object, iteratee, keysFunc) {
                var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
                while (length--) {
                    var key = props[fromRight ? length : ++index];
                    if (iteratee(iterable[key], key, iterable) === false) {
                        break;
                    }
                }
                return object;
            };
        }
        function createBind(func, bitmask, thisArg) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
                var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
                return fn.apply(isBind ? thisArg : this, arguments);
            }
            return wrapper;
        }
        function createCaseFirst(methodName) {
            return function (string) {
                string = toString(string);
                var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;
                var chr = strSymbols ? strSymbols[0] : string.charAt(0);
                var trailing = strSymbols ? castSlice(strSymbols, 1).join('') : string.slice(1);
                return chr[methodName]() + trailing;
            };
        }
        function createCompounder(callback) {
            return function (string) {
                return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
            };
        }
        function createCtor(Ctor) {
            return function () {
                var args = arguments;
                switch (args.length) {
                case 0:
                    return new Ctor();
                case 1:
                    return new Ctor(args[0]);
                case 2:
                    return new Ctor(args[0], args[1]);
                case 3:
                    return new Ctor(args[0], args[1], args[2]);
                case 4:
                    return new Ctor(args[0], args[1], args[2], args[3]);
                case 5:
                    return new Ctor(args[0], args[1], args[2], args[3], args[4]);
                case 6:
                    return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
                case 7:
                    return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
                }
                var thisBinding = baseCreate(Ctor.prototype), result = Ctor.apply(thisBinding, args);
                return isObject(result) ? result : thisBinding;
            };
        }
        function createCurry(func, bitmask, arity) {
            var Ctor = createCtor(func);
            function wrapper() {
                var length = arguments.length, args = Array(length), index = length, placeholder = getHolder(wrapper);
                while (index--) {
                    args[index] = arguments[index];
                }
                var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
                length -= holders.length;
                if (length < arity) {
                    return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
                }
                var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
                return apply(fn, this, args);
            }
            return wrapper;
        }
        function createFind(findIndexFunc) {
            return function (collection, predicate, fromIndex) {
                var iterable = Object(collection);
                if (!isArrayLike(collection)) {
                    var iteratee = getIteratee(predicate, 3);
                    collection = keys(collection);
                    predicate = function (key) {
                        return iteratee(iterable[key], key, iterable);
                    };
                }
                var index = findIndexFunc(collection, predicate, fromIndex);
                return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
            };
        }
        function createFlow(fromRight) {
            return flatRest(function (funcs) {
                var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
                if (fromRight) {
                    funcs.reverse();
                }
                while (index--) {
                    var func = funcs[index];
                    if (typeof func != 'function') {
                        throw new TypeError(FUNC_ERROR_TEXT);
                    }
                    if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
                        var wrapper = new LodashWrapper([], true);
                    }
                }
                index = wrapper ? index : length;
                while (++index < length) {
                    func = funcs[index];
                    var funcName = getFuncName(func), data = funcName == 'wrapper' ? getData(func) : undefined;
                    if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                        wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
                    } else {
                        wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
                    }
                }
                return function () {
                    var args = arguments, value = args[0];
                    if (wrapper && args.length == 1 && isArray(value)) {
                        return wrapper.plant(value).value();
                    }
                    var index = 0, result = length ? funcs[index].apply(this, args) : value;
                    while (++index < length) {
                        result = funcs[index].call(this, result);
                    }
                    return result;
                };
            });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
            var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined : createCtor(func);
            function wrapper() {
                var length = arguments.length, args = Array(length), index = length;
                while (index--) {
                    args[index] = arguments[index];
                }
                if (isCurried) {
                    var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
                }
                if (partials) {
                    args = composeArgs(args, partials, holders, isCurried);
                }
                if (partialsRight) {
                    args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
                }
                length -= holdersCount;
                if (isCurried && length < arity) {
                    var newHolders = replaceHolders(args, placeholder);
                    return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
                }
                var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
                length = args.length;
                if (argPos) {
                    args = reorder(args, argPos);
                } else if (isFlip && length > 1) {
                    args.reverse();
                }
                if (isAry && ary < length) {
                    args.length = ary;
                }
                if (this && this !== root && this instanceof wrapper) {
                    fn = Ctor || createCtor(fn);
                }
                return fn.apply(thisBinding, args);
            }
            return wrapper;
        }
        function createInverter(setter, toIteratee) {
            return function (object, iteratee) {
                return baseInverter(object, setter, toIteratee(iteratee), {});
            };
        }
        function createMathOperation(operator, defaultValue) {
            return function (value, other) {
                var result;
                if (value === undefined && other === undefined) {
                    return defaultValue;
                }
                if (value !== undefined) {
                    result = value;
                }
                if (other !== undefined) {
                    if (result === undefined) {
                        return other;
                    }
                    if (typeof value == 'string' || typeof other == 'string') {
                        value = baseToString(value);
                        other = baseToString(other);
                    } else {
                        value = baseToNumber(value);
                        other = baseToNumber(other);
                    }
                    result = operator(value, other);
                }
                return result;
            };
        }
        function createOver(arrayFunc) {
            return flatRest(function (iteratees) {
                iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
                return baseRest(function (args) {
                    var thisArg = this;
                    return arrayFunc(iteratees, function (iteratee) {
                        return apply(iteratee, thisArg, args);
                    });
                });
            });
        }
        function createPadding(length, chars) {
            chars = chars === undefined ? ' ' : baseToString(chars);
            var charsLength = chars.length;
            if (charsLength < 2) {
                return charsLength ? baseRepeat(chars, length) : chars;
            }
            var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
            return hasUnicode(chars) ? castSlice(stringToArray(result), 0, length).join('') : result.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
                var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
                while (++leftIndex < leftLength) {
                    args[leftIndex] = partials[leftIndex];
                }
                while (argsLength--) {
                    args[leftIndex++] = arguments[++argsIndex];
                }
                return apply(fn, isBind ? thisArg : this, args);
            }
            return wrapper;
        }
        function createRange(fromRight) {
            return function (start, end, step) {
                if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
                    end = step = undefined;
                }
                start = toFinite(start);
                if (end === undefined) {
                    end = start;
                    start = 0;
                } else {
                    end = toFinite(end);
                }
                step = step === undefined ? start < end ? 1 : -1 : toFinite(step);
                return baseRange(start, end, step, fromRight);
            };
        }
        function createRelationalOperation(operator) {
            return function (value, other) {
                if (!(typeof value == 'string' && typeof other == 'string')) {
                    value = toNumber(value);
                    other = toNumber(other);
                }
                return operator(value, other);
            };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
            var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined, newHoldersRight = isCurry ? undefined : holders, newPartials = isCurry ? partials : undefined, newPartialsRight = isCurry ? undefined : partials;
            bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
            bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
            if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
                bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
            }
            var newData = [
                func,
                bitmask,
                thisArg,
                newPartials,
                newHolders,
                newPartialsRight,
                newHoldersRight,
                argPos,
                ary,
                arity
            ];
            var result = wrapFunc.apply(undefined, newData);
            if (isLaziable(func)) {
                setData(result, newData);
            }
            result.placeholder = placeholder;
            return setWrapToString(result, func, bitmask);
        }
        function createRound(methodName) {
            var func = Math[methodName];
            return function (number, precision) {
                number = toNumber(number);
                precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
                if (precision) {
                    var pair = (toString(number) + 'e').split('e'), value = func(pair[0] + 'e' + (+pair[1] + precision));
                    pair = (toString(value) + 'e').split('e');
                    return +(pair[0] + 'e' + (+pair[1] - precision));
                }
                return func(number);
            };
        }
        var createSet = !(Set && 1 / setToArray(new Set([
            ,
            -0
        ]))[1] == INFINITY) ? noop : function (values) {
            return new Set(values);
        };
        function createToPairs(keysFunc) {
            return function (object) {
                var tag = getTag(object);
                if (tag == mapTag) {
                    return mapToArray(object);
                }
                if (tag == setTag) {
                    return setToPairs(object);
                }
                return baseToPairs(object, keysFunc(object));
            };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
            var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
            if (!isBindKey && typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            var length = partials ? partials.length : 0;
            if (!length) {
                bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
                partials = holders = undefined;
            }
            ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
            arity = arity === undefined ? arity : toInteger(arity);
            length -= holders ? holders.length : 0;
            if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
                var partialsRight = partials, holdersRight = holders;
                partials = holders = undefined;
            }
            var data = isBindKey ? undefined : getData(func);
            var newData = [
                func,
                bitmask,
                thisArg,
                partials,
                holders,
                partialsRight,
                holdersRight,
                argPos,
                ary,
                arity
            ];
            if (data) {
                mergeData(newData, data);
            }
            func = newData[0];
            bitmask = newData[1];
            thisArg = newData[2];
            partials = newData[3];
            holders = newData[4];
            arity = newData[9] = newData[9] === undefined ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
            if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
                bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
            }
            if (!bitmask || bitmask == WRAP_BIND_FLAG) {
                var result = createBind(func, bitmask, thisArg);
            } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
                result = createCurry(func, bitmask, arity);
            } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
                result = createPartial(func, bitmask, thisArg, partials);
            } else {
                result = createHybrid.apply(undefined, newData);
            }
            var setter = data ? baseSetData : setData;
            return setWrapToString(setter(result, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
            if (objValue === undefined || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                return srcValue;
            }
            return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
            if (isObject(objValue) && isObject(srcValue)) {
                stack.set(srcValue, objValue);
                baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
                stack['delete'](srcValue);
            }
            return objValue;
        }
        function customOmitClone(value) {
            return isPlainObject(value) ? undefined : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
            if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
                return false;
            }
            var stacked = stack.get(array);
            if (stacked && stack.get(other)) {
                return stacked == other;
            }
            var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
            stack.set(array, other);
            stack.set(other, array);
            while (++index < arrLength) {
                var arrValue = array[index], othValue = other[index];
                if (customizer) {
                    var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
                }
                if (compared !== undefined) {
                    if (compared) {
                        continue;
                    }
                    result = false;
                    break;
                }
                if (seen) {
                    if (!arraySome(other, function (othValue, othIndex) {
                            if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                                return seen.push(othIndex);
                            }
                        })) {
                        result = false;
                        break;
                    }
                } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                    result = false;
                    break;
                }
            }
            stack['delete'](array);
            stack['delete'](other);
            return result;
        }
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
            switch (tag) {
            case dataViewTag:
                if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                    return false;
                }
                object = object.buffer;
                other = other.buffer;
            case arrayBufferTag:
                if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
                    return false;
                }
                return true;
            case boolTag:
            case dateTag:
            case numberTag:
                return eq(+object, +other);
            case errorTag:
                return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
                return object == other + '';
            case mapTag:
                var convert = mapToArray;
            case setTag:
                var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
                convert || (convert = setToArray);
                if (object.size != other.size && !isPartial) {
                    return false;
                }
                var stacked = stack.get(object);
                if (stacked) {
                    return stacked == other;
                }
                bitmask |= COMPARE_UNORDERED_FLAG;
                stack.set(object, other);
                var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
                stack['delete'](object);
                return result;
            case symbolTag:
                if (symbolValueOf) {
                    return symbolValueOf.call(object) == symbolValueOf.call(other);
                }
            }
            return false;
        }
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
            if (objLength != othLength && !isPartial) {
                return false;
            }
            var index = objLength;
            while (index--) {
                var key = objProps[index];
                if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
                    return false;
                }
            }
            var stacked = stack.get(object);
            if (stacked && stack.get(other)) {
                return stacked == other;
            }
            var result = true;
            stack.set(object, other);
            stack.set(other, object);
            var skipCtor = isPartial;
            while (++index < objLength) {
                key = objProps[index];
                var objValue = object[key], othValue = other[key];
                if (customizer) {
                    var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
                }
                if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
                    result = false;
                    break;
                }
                skipCtor || (skipCtor = key == 'constructor');
            }
            if (result && !skipCtor) {
                var objCtor = object.constructor, othCtor = other.constructor;
                if (objCtor != othCtor && ('constructor' in object && 'constructor' in other) && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
                    result = false;
                }
            }
            stack['delete'](object);
            stack['delete'](other);
            return result;
        }
        function flatRest(func) {
            return setToString(overRest(func, undefined, flatten), func + '');
        }
        function getAllKeys(object) {
            return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
            return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function (func) {
            return metaMap.get(func);
        };
        function getFuncName(func) {
            var result = func.name + '', array = realNames[result], length = hasOwnProperty.call(realNames, result) ? array.length : 0;
            while (length--) {
                var data = array[length], otherFunc = data.func;
                if (otherFunc == null || otherFunc == func) {
                    return data.name;
                }
            }
            return result;
        }
        function getHolder(func) {
            var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
            return object.placeholder;
        }
        function getIteratee() {
            var result = lodash.iteratee || iteratee;
            result = result === iteratee ? baseIteratee : result;
            return arguments.length ? result(arguments[0], arguments[1]) : result;
        }
        function getMapData(map, key) {
            var data = map.__data__;
            return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
        }
        function getMatchData(object) {
            var result = keys(object), length = result.length;
            while (length--) {
                var key = result[length], value = object[key];
                result[length] = [
                    key,
                    value,
                    isStrictComparable(value)
                ];
            }
            return result;
        }
        function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : undefined;
        }
        function getRawTag(value) {
            var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
            try {
                value[symToStringTag] = undefined;
                var unmasked = true;
            } catch (e) {
            }
            var result = nativeObjectToString.call(value);
            if (unmasked) {
                if (isOwn) {
                    value[symToStringTag] = tag;
                } else {
                    delete value[symToStringTag];
                }
            }
            return result;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
            if (object == null) {
                return [];
            }
            object = Object(object);
            return arrayFilter(nativeGetSymbols(object), function (symbol) {
                return propertyIsEnumerable.call(object, symbol);
            });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function (object) {
            var result = [];
            while (object) {
                arrayPush(result, getSymbols(object));
                object = getPrototype(object);
            }
            return result;
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
            getTag = function (value) {
                var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : '';
                if (ctorString) {
                    switch (ctorString) {
                    case dataViewCtorString:
                        return dataViewTag;
                    case mapCtorString:
                        return mapTag;
                    case promiseCtorString:
                        return promiseTag;
                    case setCtorString:
                        return setTag;
                    case weakMapCtorString:
                        return weakMapTag;
                    }
                }
                return result;
            };
        }
        function getView(start, end, transforms) {
            var index = -1, length = transforms.length;
            while (++index < length) {
                var data = transforms[index], size = data.size;
                switch (data.type) {
                case 'drop':
                    start += size;
                    break;
                case 'dropRight':
                    end -= size;
                    break;
                case 'take':
                    end = nativeMin(end, start + size);
                    break;
                case 'takeRight':
                    start = nativeMax(start, end - size);
                    break;
                }
            }
            return {
                'start': start,
                'end': end
            };
        }
        function getWrapDetails(source) {
            var match = source.match(reWrapDetails);
            return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path, hasFunc) {
            path = castPath(path, object);
            var index = -1, length = path.length, result = false;
            while (++index < length) {
                var key = toKey(path[index]);
                if (!(result = object != null && hasFunc(object, key))) {
                    break;
                }
                object = object[key];
            }
            if (result || ++index != length) {
                return result;
            }
            length = object == null ? 0 : object.length;
            return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        function initCloneArray(array) {
            var length = array.length, result = new array.constructor(length);
            if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
                result.index = array.index;
                result.input = array.input;
            }
            return result;
        }
        function initCloneObject(object) {
            return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, isDeep) {
            var Ctor = object.constructor;
            switch (tag) {
            case arrayBufferTag:
                return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
                return new Ctor(+object);
            case dataViewTag:
                return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
                return cloneTypedArray(object, isDeep);
            case mapTag:
                return new Ctor();
            case numberTag:
            case stringTag:
                return new Ctor(object);
            case regexpTag:
                return cloneRegExp(object);
            case setTag:
                return new Ctor();
            case symbolTag:
                return cloneSymbol(object);
            }
        }
        function insertWrapDetails(source, details) {
            var length = details.length;
            if (!length) {
                return source;
            }
            var lastIndex = length - 1;
            details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
            details = details.join(length > 2 ? ', ' : ' ');
            return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
        }
        function isFlattenable(value) {
            return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
            var type = typeof value;
            length = length == null ? MAX_SAFE_INTEGER : length;
            return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index, object) {
            if (!isObject(object)) {
                return false;
            }
            var type = typeof index;
            if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
                return eq(object[index], value);
            }
            return false;
        }
        function isKey(value, object) {
            if (isArray(value)) {
                return false;
            }
            var type = typeof value;
            if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
                return true;
            }
            return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
        }
        function isKeyable(value) {
            var type = typeof value;
            return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
        }
        function isLaziable(func) {
            var funcName = getFuncName(func), other = lodash[funcName];
            if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
                return false;
            }
            if (func === other) {
                return true;
            }
            var data = getData(other);
            return !!data && func === data[0];
        }
        function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
            var Ctor = value && value.constructor, proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
            return value === proto;
        }
        function isStrictComparable(value) {
            return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
            return function (object) {
                if (object == null) {
                    return false;
                }
                return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
            };
        }
        function memoizeCapped(func) {
            var result = memoize(func, function (key) {
                if (cache.size === MAX_MEMOIZE_SIZE) {
                    cache.clear();
                }
                return key;
            });
            var cache = result.cache;
            return result;
        }
        function mergeData(data, source) {
            var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
            var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
            if (!(isCommon || isCombo)) {
                return data;
            }
            if (srcBitmask & WRAP_BIND_FLAG) {
                data[2] = source[2];
                newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
            }
            var value = source[3];
            if (value) {
                var partials = data[3];
                data[3] = partials ? composeArgs(partials, value, source[4]) : value;
                data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
            }
            value = source[5];
            if (value) {
                partials = data[5];
                data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
                data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
            }
            value = source[7];
            if (value) {
                data[7] = value;
            }
            if (srcBitmask & WRAP_ARY_FLAG) {
                data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
            }
            if (data[9] == null) {
                data[9] = source[9];
            }
            data[0] = source[0];
            data[1] = newBitmask;
            return data;
        }
        function nativeKeysIn(object) {
            var result = [];
            if (object != null) {
                for (var key in Object(object)) {
                    result.push(key);
                }
            }
            return result;
        }
        function objectToString(value) {
            return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform) {
            start = nativeMax(start === undefined ? func.length - 1 : start, 0);
            return function () {
                var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
                while (++index < length) {
                    array[index] = args[start + index];
                }
                index = -1;
                var otherArgs = Array(start + 1);
                while (++index < start) {
                    otherArgs[index] = args[index];
                }
                otherArgs[start] = transform(array);
                return apply(func, this, otherArgs);
            };
        }
        function parent(object, path) {
            return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
            var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
            while (length--) {
                var index = indexes[length];
                array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
            }
            return array;
        }
        function safeGet(object, key) {
            if (key == '__proto__') {
                return;
            }
            return object[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout = ctxSetTimeout || function (func, wait) {
            return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
            var source = reference + '';
            return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
            var count = 0, lastCalled = 0;
            return function () {
                var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
                lastCalled = stamp;
                if (remaining > 0) {
                    if (++count >= HOT_COUNT) {
                        return arguments[0];
                    }
                } else {
                    count = 0;
                }
                return func.apply(undefined, arguments);
            };
        }
        function shuffleSelf(array, size) {
            var index = -1, length = array.length, lastIndex = length - 1;
            size = size === undefined ? length : size;
            while (++index < size) {
                var rand = baseRandom(index, lastIndex), value = array[rand];
                array[rand] = array[index];
                array[index] = value;
            }
            array.length = size;
            return array;
        }
        var stringToPath = memoizeCapped(function (string) {
            var result = [];
            if (string.charCodeAt(0) === 46) {
                result.push('');
            }
            string.replace(rePropName, function (match, number, quote, subString) {
                result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
            });
            return result;
        });
        function toKey(value) {
            if (typeof value == 'string' || isSymbol(value)) {
                return value;
            }
            var result = value + '';
            return result == '0' && 1 / value == -INFINITY ? '-0' : result;
        }
        function toSource(func) {
            if (func != null) {
                try {
                    return funcToString.call(func);
                } catch (e) {
                }
                try {
                    return func + '';
                } catch (e) {
                }
            }
            return '';
        }
        function updateWrapDetails(details, bitmask) {
            arrayEach(wrapFlags, function (pair) {
                var value = '_.' + pair[0];
                if (bitmask & pair[1] && !arrayIncludes(details, value)) {
                    details.push(value);
                }
            });
            return details.sort();
        }
        function wrapperClone(wrapper) {
            if (wrapper instanceof LazyWrapper) {
                return wrapper.clone();
            }
            var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
            result.__actions__ = copyArray(wrapper.__actions__);
            result.__index__ = wrapper.__index__;
            result.__values__ = wrapper.__values__;
            return result;
        }
        function chunk(array, size, guard) {
            if (guard ? isIterateeCall(array, size, guard) : size === undefined) {
                size = 1;
            } else {
                size = nativeMax(toInteger(size), 0);
            }
            var length = array == null ? 0 : array.length;
            if (!length || size < 1) {
                return [];
            }
            var index = 0, resIndex = 0, result = Array(nativeCeil(length / size));
            while (index < length) {
                result[resIndex++] = baseSlice(array, index, index += size);
            }
            return result;
        }
        function compact(array) {
            var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
            while (++index < length) {
                var value = array[index];
                if (value) {
                    result[resIndex++] = value;
                }
            }
            return result;
        }
        function concat() {
            var length = arguments.length;
            if (!length) {
                return [];
            }
            var args = Array(length - 1), array = arguments[0], index = length;
            while (index--) {
                args[index - 1] = arguments[index];
            }
            return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function (array, values) {
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function (array, values) {
            var iteratee = last(values);
            if (isArrayLikeObject(iteratee)) {
                iteratee = undefined;
            }
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2)) : [];
        });
        var differenceWith = baseRest(function (array, values) {
            var comparator = last(values);
            if (isArrayLikeObject(comparator)) {
                comparator = undefined;
            }
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator) : [];
        });
        function drop(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
                return [];
            }
            n = guard || n === undefined ? 1 : toInteger(n);
            return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
                return [];
            }
            n = guard || n === undefined ? 1 : toInteger(n);
            n = length - n;
            return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) {
                return [];
            }
            if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
                start = 0;
                end = length;
            }
            return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
                return -1;
            }
            var index = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index < 0) {
                index = nativeMax(length + index, 0);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
                return -1;
            }
            var index = length - 1;
            if (fromIndex !== undefined) {
                index = toInteger(fromIndex);
                index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
            var length = array == null ? 0 : array.length;
            if (!length) {
                return [];
            }
            depth = depth === undefined ? 1 : toInteger(depth);
            return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
            var index = -1, length = pairs == null ? 0 : pairs.length, result = {};
            while (++index < length) {
                var pair = pairs[index];
                result[pair[0]] = pair[1];
            }
            return result;
        }
        function head(array) {
            return array && array.length ? array[0] : undefined;
        }
        function indexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
                return -1;
            }
            var index = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index < 0) {
                index = nativeMax(length + index, 0);
            }
            return baseIndexOf(array, value, index);
        }
        function initial(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function (arrays) {
            var mapped = arrayMap(arrays, castArrayLikeObject);
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function (arrays) {
            var iteratee = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            if (iteratee === last(mapped)) {
                iteratee = undefined;
            } else {
                mapped.pop();
            }
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee, 2)) : [];
        });
        var intersectionWith = baseRest(function (arrays) {
            var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            comparator = typeof comparator == 'function' ? comparator : undefined;
            if (comparator) {
                mapped.pop();
            }
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined, comparator) : [];
        });
        function join(array, separator) {
            return array == null ? '' : nativeJoin.call(array, separator);
        }
        function last(array) {
            var length = array == null ? 0 : array.length;
            return length ? array[length - 1] : undefined;
        }
        function lastIndexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
                return -1;
            }
            var index = length;
            if (fromIndex !== undefined) {
                index = toInteger(fromIndex);
                index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n) {
            return array && array.length ? baseNth(array, toInteger(n)) : undefined;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values) {
            return array && array.length && values && values.length ? basePullAll(array, values) : array;
        }
        function pullAllBy(array, values, iteratee) {
            return array && array.length && values && values.length ? basePullAll(array, values, getIteratee(iteratee, 2)) : array;
        }
        function pullAllWith(array, values, comparator) {
            return array && array.length && values && values.length ? basePullAll(array, values, undefined, comparator) : array;
        }
        var pullAt = flatRest(function (array, indexes) {
            var length = array == null ? 0 : array.length, result = baseAt(array, indexes);
            basePullAt(array, arrayMap(indexes, function (index) {
                return isIndex(index, length) ? +index : index;
            }).sort(compareAscending));
            return result;
        });
        function remove(array, predicate) {
            var result = [];
            if (!(array && array.length)) {
                return result;
            }
            var index = -1, indexes = [], length = array.length;
            predicate = getIteratee(predicate, 3);
            while (++index < length) {
                var value = array[index];
                if (predicate(value, index, array)) {
                    result.push(value);
                    indexes.push(index);
                }
            }
            basePullAt(array, indexes);
            return result;
        }
        function reverse(array) {
            return array == null ? array : nativeReverse.call(array);
        }
        function slice(array, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) {
                return [];
            }
            if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
                start = 0;
                end = length;
            } else {
                start = start == null ? 0 : toInteger(start);
                end = end === undefined ? length : toInteger(end);
            }
            return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
            return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
        }
        function sortedIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
                var index = baseSortedIndex(array, value);
                if (index < length && eq(array[index], value)) {
                    return index;
                }
            }
            return -1;
        }
        function sortedLastIndex(array, value) {
            return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
        }
        function sortedLastIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
                var index = baseSortedIndex(array, value, true) - 1;
                if (eq(array[index], value)) {
                    return index;
                }
            }
            return -1;
        }
        function sortedUniq(array) {
            return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee) {
            return array && array.length ? baseSortedUniq(array, getIteratee(iteratee, 2)) : [];
        }
        function tail(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n, guard) {
            if (!(array && array.length)) {
                return [];
            }
            n = guard || n === undefined ? 1 : toInteger(n);
            return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
                return [];
            }
            n = guard || n === undefined ? 1 : toInteger(n);
            n = length - n;
            return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function (arrays) {
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function (arrays) {
            var iteratee = last(arrays);
            if (isArrayLikeObject(iteratee)) {
                iteratee = undefined;
            }
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
        });
        var unionWith = baseRest(function (arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == 'function' ? comparator : undefined;
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
        });
        function uniq(array) {
            return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee) {
            return array && array.length ? baseUniq(array, getIteratee(iteratee, 2)) : [];
        }
        function uniqWith(array, comparator) {
            comparator = typeof comparator == 'function' ? comparator : undefined;
            return array && array.length ? baseUniq(array, undefined, comparator) : [];
        }
        function unzip(array) {
            if (!(array && array.length)) {
                return [];
            }
            var length = 0;
            array = arrayFilter(array, function (group) {
                if (isArrayLikeObject(group)) {
                    length = nativeMax(group.length, length);
                    return true;
                }
            });
            return baseTimes(length, function (index) {
                return arrayMap(array, baseProperty(index));
            });
        }
        function unzipWith(array, iteratee) {
            if (!(array && array.length)) {
                return [];
            }
            var result = unzip(array);
            if (iteratee == null) {
                return result;
            }
            return arrayMap(result, function (group) {
                return apply(iteratee, undefined, group);
            });
        }
        var without = baseRest(function (array, values) {
            return isArrayLikeObject(array) ? baseDifference(array, values) : [];
        });
        var xor = baseRest(function (arrays) {
            return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function (arrays) {
            var iteratee = last(arrays);
            if (isArrayLikeObject(iteratee)) {
                iteratee = undefined;
            }
            return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
        });
        var xorWith = baseRest(function (arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == 'function' ? comparator : undefined;
            return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values) {
            return baseZipObject(props || [], values || [], assignValue);
        }
        function zipObjectDeep(props, values) {
            return baseZipObject(props || [], values || [], baseSet);
        }
        var zipWith = baseRest(function (arrays) {
            var length = arrays.length, iteratee = length > 1 ? arrays[length - 1] : undefined;
            iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
            return unzipWith(arrays, iteratee);
        });
        function chain(value) {
            var result = lodash(value);
            result.__chain__ = true;
            return result;
        }
        function tap(value, interceptor) {
            interceptor(value);
            return value;
        }
        function thru(value, interceptor) {
            return interceptor(value);
        }
        var wrapperAt = flatRest(function (paths) {
            var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function (object) {
                    return baseAt(object, paths);
                };
            if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
                return this.thru(interceptor);
            }
            value = value.slice(start, +start + (length ? 1 : 0));
            value.__actions__.push({
                'func': thru,
                'args': [interceptor],
                'thisArg': undefined
            });
            return new LodashWrapper(value, this.__chain__).thru(function (array) {
                if (length && !array.length) {
                    array.push(undefined);
                }
                return array;
            });
        });
        function wrapperChain() {
            return chain(this);
        }
        function wrapperCommit() {
            return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
            if (this.__values__ === undefined) {
                this.__values__ = toArray(this.value());
            }
            var done = this.__index__ >= this.__values__.length, value = done ? undefined : this.__values__[this.__index__++];
            return {
                'done': done,
                'value': value
            };
        }
        function wrapperToIterator() {
            return this;
        }
        function wrapperPlant(value) {
            var result, parent = this;
            while (parent instanceof baseLodash) {
                var clone = wrapperClone(parent);
                clone.__index__ = 0;
                clone.__values__ = undefined;
                if (result) {
                    previous.__wrapped__ = clone;
                } else {
                    result = clone;
                }
                var previous = clone;
                parent = parent.__wrapped__;
            }
            previous.__wrapped__ = value;
            return result;
        }
        function wrapperReverse() {
            var value = this.__wrapped__;
            if (value instanceof LazyWrapper) {
                var wrapped = value;
                if (this.__actions__.length) {
                    wrapped = new LazyWrapper(this);
                }
                wrapped = wrapped.reverse();
                wrapped.__actions__.push({
                    'func': thru,
                    'args': [reverse],
                    'thisArg': undefined
                });
                return new LodashWrapper(wrapped, this.__chain__);
            }
            return this.thru(reverse);
        }
        function wrapperValue() {
            return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function (result, value, key) {
            if (hasOwnProperty.call(result, key)) {
                ++result[key];
            } else {
                baseAssignValue(result, key, 1);
            }
        });
        function every(collection, predicate, guard) {
            var func = isArray(collection) ? arrayEvery : baseEvery;
            if (guard && isIterateeCall(collection, predicate, guard)) {
                predicate = undefined;
            }
            return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee) {
            return baseFlatten(map(collection, iteratee), 1);
        }
        function flatMapDeep(collection, iteratee) {
            return baseFlatten(map(collection, iteratee), INFINITY);
        }
        function flatMapDepth(collection, iteratee, depth) {
            depth = depth === undefined ? 1 : toInteger(depth);
            return baseFlatten(map(collection, iteratee), depth);
        }
        function forEach(collection, iteratee) {
            var func = isArray(collection) ? arrayEach : baseEach;
            return func(collection, getIteratee(iteratee, 3));
        }
        function forEachRight(collection, iteratee) {
            var func = isArray(collection) ? arrayEachRight : baseEachRight;
            return func(collection, getIteratee(iteratee, 3));
        }
        var groupBy = createAggregator(function (result, value, key) {
            if (hasOwnProperty.call(result, key)) {
                result[key].push(value);
            } else {
                baseAssignValue(result, key, [value]);
            }
        });
        function includes(collection, value, fromIndex, guard) {
            collection = isArrayLike(collection) ? collection : values(collection);
            fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
            var length = collection.length;
            if (fromIndex < 0) {
                fromIndex = nativeMax(length + fromIndex, 0);
            }
            return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function (collection, path, args) {
            var index = -1, isFunc = typeof path == 'function', result = isArrayLike(collection) ? Array(collection.length) : [];
            baseEach(collection, function (value) {
                result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
            });
            return result;
        });
        var keyBy = createAggregator(function (result, value, key) {
            baseAssignValue(result, key, value);
        });
        function map(collection, iteratee) {
            var func = isArray(collection) ? arrayMap : baseMap;
            return func(collection, getIteratee(iteratee, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
            if (collection == null) {
                return [];
            }
            if (!isArray(iteratees)) {
                iteratees = iteratees == null ? [] : [iteratees];
            }
            orders = guard ? undefined : orders;
            if (!isArray(orders)) {
                orders = orders == null ? [] : [orders];
            }
            return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function (result, value, key) {
            result[key ? 0 : 1].push(value);
        }, function () {
            return [
                [],
                []
            ];
        });
        function reduce(collection, iteratee, accumulator) {
            var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee, accumulator) {
            var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
            var func = isArray(collection) ? arraySample : baseSample;
            return func(collection);
        }
        function sampleSize(collection, n, guard) {
            if (guard ? isIterateeCall(collection, n, guard) : n === undefined) {
                n = 1;
            } else {
                n = toInteger(n);
            }
            var func = isArray(collection) ? arraySampleSize : baseSampleSize;
            return func(collection, n);
        }
        function shuffle(collection) {
            var func = isArray(collection) ? arrayShuffle : baseShuffle;
            return func(collection);
        }
        function size(collection) {
            if (collection == null) {
                return 0;
            }
            if (isArrayLike(collection)) {
                return isString(collection) ? stringSize(collection) : collection.length;
            }
            var tag = getTag(collection);
            if (tag == mapTag || tag == setTag) {
                return collection.size;
            }
            return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
            var func = isArray(collection) ? arraySome : baseSome;
            if (guard && isIterateeCall(collection, predicate, guard)) {
                predicate = undefined;
            }
            return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function (collection, iteratees) {
            if (collection == null) {
                return [];
            }
            var length = iteratees.length;
            if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
                iteratees = [];
            } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
                iteratees = [iteratees[0]];
            }
            return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function () {
            return root.Date.now();
        };
        function after(n, func) {
            if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            n = toInteger(n);
            return function () {
                if (--n < 1) {
                    return func.apply(this, arguments);
                }
            };
        }
        function ary(func, n, guard) {
            n = guard ? undefined : n;
            n = func && n == null ? func.length : n;
            return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
        }
        function before(n, func) {
            var result;
            if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            n = toInteger(n);
            return function () {
                if (--n > 0) {
                    result = func.apply(this, arguments);
                }
                if (n <= 1) {
                    func = undefined;
                }
                return result;
            };
        }
        var bind = baseRest(function (func, thisArg, partials) {
            var bitmask = WRAP_BIND_FLAG;
            if (partials.length) {
                var holders = replaceHolders(partials, getHolder(bind));
                bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function (object, key, partials) {
            var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
            if (partials.length) {
                var holders = replaceHolders(partials, getHolder(bindKey));
                bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
            arity = guard ? undefined : arity;
            var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
            result.placeholder = curry.placeholder;
            return result;
        }
        function curryRight(func, arity, guard) {
            arity = guard ? undefined : arity;
            var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
            result.placeholder = curryRight.placeholder;
            return result;
        }
        function debounce(func, wait, options) {
            var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
            if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            wait = toNumber(wait) || 0;
            if (isObject(options)) {
                leading = !!options.leading;
                maxing = 'maxWait' in options;
                maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
                trailing = 'trailing' in options ? !!options.trailing : trailing;
            }
            function invokeFunc(time) {
                var args = lastArgs, thisArg = lastThis;
                lastArgs = lastThis = undefined;
                lastInvokeTime = time;
                result = func.apply(thisArg, args);
                return result;
            }
            function leadingEdge(time) {
                lastInvokeTime = time;
                timerId = setTimeout(timerExpired, wait);
                return leading ? invokeFunc(time) : result;
            }
            function remainingWait(time) {
                var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
                return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
            }
            function shouldInvoke(time) {
                var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
                return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
            }
            function timerExpired() {
                var time = now();
                if (shouldInvoke(time)) {
                    return trailingEdge(time);
                }
                timerId = setTimeout(timerExpired, remainingWait(time));
            }
            function trailingEdge(time) {
                timerId = undefined;
                if (trailing && lastArgs) {
                    return invokeFunc(time);
                }
                lastArgs = lastThis = undefined;
                return result;
            }
            function cancel() {
                if (timerId !== undefined) {
                    clearTimeout(timerId);
                }
                lastInvokeTime = 0;
                lastArgs = lastCallTime = lastThis = timerId = undefined;
            }
            function flush() {
                return timerId === undefined ? result : trailingEdge(now());
            }
            function debounced() {
                var time = now(), isInvoking = shouldInvoke(time);
                lastArgs = arguments;
                lastThis = this;
                lastCallTime = time;
                if (isInvoking) {
                    if (timerId === undefined) {
                        return leadingEdge(lastCallTime);
                    }
                    if (maxing) {
                        timerId = setTimeout(timerExpired, wait);
                        return invokeFunc(lastCallTime);
                    }
                }
                if (timerId === undefined) {
                    timerId = setTimeout(timerExpired, wait);
                }
                return result;
            }
            debounced.cancel = cancel;
            debounced.flush = flush;
            return debounced;
        }
        var defer = baseRest(function (func, args) {
            return baseDelay(func, 1, args);
        });
        var delay = baseRest(function (func, wait, args) {
            return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
            return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
            if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            var memoized = function () {
                var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
                if (cache.has(key)) {
                    return cache.get(key);
                }
                var result = func.apply(this, args);
                memoized.cache = cache.set(key, result) || cache;
                return result;
            };
            memoized.cache = new (memoize.Cache || MapCache)();
            return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
            if (typeof predicate != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            return function () {
                var args = arguments;
                switch (args.length) {
                case 0:
                    return !predicate.call(this);
                case 1:
                    return !predicate.call(this, args[0]);
                case 2:
                    return !predicate.call(this, args[0], args[1]);
                case 3:
                    return !predicate.call(this, args[0], args[1], args[2]);
                }
                return !predicate.apply(this, args);
            };
        }
        function once(func) {
            return before(2, func);
        }
        var overArgs = castRest(function (func, transforms) {
            transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
            var funcsLength = transforms.length;
            return baseRest(function (args) {
                var index = -1, length = nativeMin(args.length, funcsLength);
                while (++index < length) {
                    args[index] = transforms[index].call(this, args[index]);
                }
                return apply(func, this, args);
            });
        });
        var partial = baseRest(function (func, partials) {
            var holders = replaceHolders(partials, getHolder(partial));
            return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
        });
        var partialRight = baseRest(function (func, partials) {
            var holders = replaceHolders(partials, getHolder(partialRight));
            return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
        });
        var rearg = flatRest(function (func, indexes) {
            return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
        });
        function rest(func, start) {
            if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            start = start === undefined ? start : toInteger(start);
            return baseRest(func, start);
        }
        function spread(func, start) {
            if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            start = start == null ? 0 : nativeMax(toInteger(start), 0);
            return baseRest(function (args) {
                var array = args[start], otherArgs = castSlice(args, 0, start);
                if (array) {
                    arrayPush(otherArgs, array);
                }
                return apply(func, this, otherArgs);
            });
        }
        function throttle(func, wait, options) {
            var leading = true, trailing = true;
            if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            if (isObject(options)) {
                leading = 'leading' in options ? !!options.leading : leading;
                trailing = 'trailing' in options ? !!options.trailing : trailing;
            }
            return debounce(func, wait, {
                'leading': leading,
                'maxWait': wait,
                'trailing': trailing
            });
        }
        function unary(func) {
            return ary(func, 1);
        }
        function wrap(value, wrapper) {
            return partial(castFunction(wrapper), value);
        }
        function castArray() {
            if (!arguments.length) {
                return [];
            }
            var value = arguments[0];
            return isArray(value) ? value : [value];
        }
        function clone(value) {
            return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
            customizer = typeof customizer == 'function' ? customizer : undefined;
            return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value) {
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
            customizer = typeof customizer == 'function' ? customizer : undefined;
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object, source) {
            return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other) {
            return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function (value, other) {
            return value >= other;
        });
        var isArguments = baseIsArguments(function () {
            return arguments;
        }()) ? baseIsArguments : function (value) {
            return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
        };
        var isArray = Array.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
            return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
            return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
            return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
            return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
            if (value == null) {
                return true;
            }
            if (isArrayLike(value) && (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
                return !value.length;
            }
            var tag = getTag(value);
            if (tag == mapTag || tag == setTag) {
                return !value.size;
            }
            if (isPrototype(value)) {
                return !baseKeys(value).length;
            }
            for (var key in value) {
                if (hasOwnProperty.call(value, key)) {
                    return false;
                }
            }
            return true;
        }
        function isEqual(value, other) {
            return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
            customizer = typeof customizer == 'function' ? customizer : undefined;
            var result = customizer ? customizer(value, other) : undefined;
            return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
        }
        function isError(value) {
            if (!isObjectLike(value)) {
                return false;
            }
            var tag = baseGetTag(value);
            return tag == errorTag || tag == domExcTag || typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value);
        }
        function isFinite(value) {
            return typeof value == 'number' && nativeIsFinite(value);
        }
        function isFunction(value) {
            if (!isObject(value)) {
                return false;
            }
            var tag = baseGetTag(value);
            return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
            return typeof value == 'number' && value == toInteger(value);
        }
        function isLength(value) {
            return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
            var type = typeof value;
            return value != null && (type == 'object' || type == 'function');
        }
        function isObjectLike(value) {
            return value != null && typeof value == 'object';
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
            return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
            customizer = typeof customizer == 'function' ? customizer : undefined;
            return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN(value) {
            return isNumber(value) && value != +value;
        }
        function isNative(value) {
            if (isMaskable(value)) {
                throw new Error(CORE_ERROR_TEXT);
            }
            return baseIsNative(value);
        }
        function isNull(value) {
            return value === null;
        }
        function isNil(value) {
            return value == null;
        }
        function isNumber(value) {
            return typeof value == 'number' || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
            if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
                return false;
            }
            var proto = getPrototype(value);
            if (proto === null) {
                return true;
            }
            var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
            return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
            return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
            return typeof value == 'string' || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
            return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
            return value === undefined;
        }
        function isWeakMap(value) {
            return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
            return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function (value, other) {
            return value <= other;
        });
        function toArray(value) {
            if (!value) {
                return [];
            }
            if (isArrayLike(value)) {
                return isString(value) ? stringToArray(value) : copyArray(value);
            }
            if (symIterator && value[symIterator]) {
                return iteratorToArray(value[symIterator]());
            }
            var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
            return func(value);
        }
        function toFinite(value) {
            if (!value) {
                return value === 0 ? value : 0;
            }
            value = toNumber(value);
            if (value === INFINITY || value === -INFINITY) {
                var sign = value < 0 ? -1 : 1;
                return sign * MAX_INTEGER;
            }
            return value === value ? value : 0;
        }
        function toInteger(value) {
            var result = toFinite(value), remainder = result % 1;
            return result === result ? remainder ? result - remainder : result : 0;
        }
        function toLength(value) {
            return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
            if (typeof value == 'number') {
                return value;
            }
            if (isSymbol(value)) {
                return NAN;
            }
            if (isObject(value)) {
                var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
                value = isObject(other) ? other + '' : other;
            }
            if (typeof value != 'string') {
                return value === 0 ? value : +value;
            }
            value = value.replace(reTrim, '');
            var isBinary = reIsBinary.test(value);
            return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
            return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
            return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString(value) {
            return value == null ? '' : baseToString(value);
        }
        var assign = createAssigner(function (object, source) {
            if (isPrototype(source) || isArrayLike(source)) {
                copyObject(source, keys(source), object);
                return;
            }
            for (var key in source) {
                if (hasOwnProperty.call(source, key)) {
                    assignValue(object, key, source[key]);
                }
            }
        });
        var assignIn = createAssigner(function (object, source) {
            copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function (object, source, srcIndex, customizer) {
            copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function (object, source, srcIndex, customizer) {
            copyObject(source, keys(source), object, customizer);
        });
        var at = flatRest(baseAt);
        function create(prototype, properties) {
            var result = baseCreate(prototype);
            return properties == null ? result : baseAssign(result, properties);
        }
        var defaults = baseRest(function (object, sources) {
            object = Object(object);
            var index = -1;
            var length = sources.length;
            var guard = length > 2 ? sources[2] : undefined;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                length = 1;
            }
            while (++index < length) {
                var source = sources[index];
                var props = keysIn(source);
                var propsIndex = -1;
                var propsLength = props.length;
                while (++propsIndex < propsLength) {
                    var key = props[propsIndex];
                    var value = object[key];
                    if (value === undefined || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                        object[key] = source[key];
                    }
                }
            }
            return object;
        });
        var defaultsDeep = baseRest(function (args) {
            args.push(undefined, customDefaultsMerge);
            return apply(mergeWith, undefined, args);
        });
        function findKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee) {
            return object == null ? object : baseFor(object, getIteratee(iteratee, 3), keysIn);
        }
        function forInRight(object, iteratee) {
            return object == null ? object : baseForRight(object, getIteratee(iteratee, 3), keysIn);
        }
        function forOwn(object, iteratee) {
            return object && baseForOwn(object, getIteratee(iteratee, 3));
        }
        function forOwnRight(object, iteratee) {
            return object && baseForOwnRight(object, getIteratee(iteratee, 3));
        }
        function functions(object) {
            return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
            return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
            var result = object == null ? undefined : baseGet(object, path);
            return result === undefined ? defaultValue : result;
        }
        function has(object, path) {
            return object != null && hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
            return object != null && hasPath(object, path, baseHasIn);
        }
        var invert = createInverter(function (result, value, key) {
            if (value != null && typeof value.toString != 'function') {
                value = nativeObjectToString.call(value);
            }
            result[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function (result, value, key) {
            if (value != null && typeof value.toString != 'function') {
                value = nativeObjectToString.call(value);
            }
            if (hasOwnProperty.call(result, value)) {
                result[value].push(key);
            } else {
                result[value] = [key];
            }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
            return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function keysIn(object) {
            return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        function mapKeys(object, iteratee) {
            var result = {};
            iteratee = getIteratee(iteratee, 3);
            baseForOwn(object, function (value, key, object) {
                baseAssignValue(result, iteratee(value, key, object), value);
            });
            return result;
        }
        function mapValues(object, iteratee) {
            var result = {};
            iteratee = getIteratee(iteratee, 3);
            baseForOwn(object, function (value, key, object) {
                baseAssignValue(result, key, iteratee(value, key, object));
            });
            return result;
        }
        var merge = createAssigner(function (object, source, srcIndex) {
            baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function (object, source, srcIndex, customizer) {
            baseMerge(object, source, srcIndex, customizer);
        });
        var omit = flatRest(function (object, paths) {
            var result = {};
            if (object == null) {
                return result;
            }
            var isDeep = false;
            paths = arrayMap(paths, function (path) {
                path = castPath(path, object);
                isDeep || (isDeep = path.length > 1);
                return path;
            });
            copyObject(object, getAllKeysIn(object), result);
            if (isDeep) {
                result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
            }
            var length = paths.length;
            while (length--) {
                baseUnset(result, paths[length]);
            }
            return result;
        });
        function omitBy(object, predicate) {
            return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function (object, paths) {
            return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
            if (object == null) {
                return {};
            }
            var props = arrayMap(getAllKeysIn(object), function (prop) {
                return [prop];
            });
            predicate = getIteratee(predicate);
            return basePickBy(object, props, function (value, path) {
                return predicate(value, path[0]);
            });
        }
        function result(object, path, defaultValue) {
            path = castPath(path, object);
            var index = -1, length = path.length;
            if (!length) {
                length = 1;
                object = undefined;
            }
            while (++index < length) {
                var value = object == null ? undefined : object[toKey(path[index])];
                if (value === undefined) {
                    index = length;
                    value = defaultValue;
                }
                object = isFunction(value) ? value.call(object) : value;
            }
            return object;
        }
        function set(object, path, value) {
            return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
            customizer = typeof customizer == 'function' ? customizer : undefined;
            return object == null ? object : baseSet(object, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee, accumulator) {
            var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
            iteratee = getIteratee(iteratee, 4);
            if (accumulator == null) {
                var Ctor = object && object.constructor;
                if (isArrLike) {
                    accumulator = isArr ? new Ctor() : [];
                } else if (isObject(object)) {
                    accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
                } else {
                    accumulator = {};
                }
            }
            (isArrLike ? arrayEach : baseForOwn)(object, function (value, index, object) {
                return iteratee(accumulator, value, index, object);
            });
            return accumulator;
        }
        function unset(object, path) {
            return object == null ? true : baseUnset(object, path);
        }
        function update(object, path, updater) {
            return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        function updateWith(object, path, updater, customizer) {
            customizer = typeof customizer == 'function' ? customizer : undefined;
            return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        function values(object) {
            return object == null ? [] : baseValues(object, keys(object));
        }
        function valuesIn(object) {
            return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
            if (upper === undefined) {
                upper = lower;
                lower = undefined;
            }
            if (upper !== undefined) {
                upper = toNumber(upper);
                upper = upper === upper ? upper : 0;
            }
            if (lower !== undefined) {
                lower = toNumber(lower);
                lower = lower === lower ? lower : 0;
            }
            return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
            start = toFinite(start);
            if (end === undefined) {
                end = start;
                start = 0;
            } else {
                end = toFinite(end);
            }
            number = toNumber(number);
            return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
            if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
                upper = floating = undefined;
            }
            if (floating === undefined) {
                if (typeof upper == 'boolean') {
                    floating = upper;
                    upper = undefined;
                } else if (typeof lower == 'boolean') {
                    floating = lower;
                    lower = undefined;
                }
            }
            if (lower === undefined && upper === undefined) {
                lower = 0;
                upper = 1;
            } else {
                lower = toFinite(lower);
                if (upper === undefined) {
                    upper = lower;
                    lower = 0;
                } else {
                    upper = toFinite(upper);
                }
            }
            if (lower > upper) {
                var temp = lower;
                lower = upper;
                upper = temp;
            }
            if (floating || lower % 1 || upper % 1) {
                var rand = nativeRandom();
                return nativeMin(lower + rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1))), upper);
            }
            return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function (result, word, index) {
            word = word.toLowerCase();
            return result + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
            return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
            string = toString(string);
            return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
        }
        function endsWith(string, target, position) {
            string = toString(string);
            target = baseToString(target);
            var length = string.length;
            position = position === undefined ? length : baseClamp(toInteger(position), 0, length);
            var end = position;
            position -= target.length;
            return position >= 0 && string.slice(position, end) == target;
        }
        function escape(string) {
            string = toString(string);
            return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
            string = toString(string);
            return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, '\\$&') : string;
        }
        var kebabCase = createCompounder(function (result, word, index) {
            return result + (index ? '-' : '') + word.toLowerCase();
        });
        var lowerCase = createCompounder(function (result, word, index) {
            return result + (index ? ' ' : '') + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst('toLowerCase');
        function pad(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            if (!length || strLength >= length) {
                return string;
            }
            var mid = (length - strLength) / 2;
            return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt(string, radix, guard) {
            if (guard || radix == null) {
                radix = 0;
            } else if (radix) {
                radix = +radix;
            }
            return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
        }
        function repeat(string, n, guard) {
            if (guard ? isIterateeCall(string, n, guard) : n === undefined) {
                n = 1;
            } else {
                n = toInteger(n);
            }
            return baseRepeat(toString(string), n);
        }
        function replace() {
            var args = arguments, string = toString(args[0]);
            return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function (result, word, index) {
            return result + (index ? '_' : '') + word.toLowerCase();
        });
        function split(string, separator, limit) {
            if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
                separator = limit = undefined;
            }
            limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
            if (!limit) {
                return [];
            }
            string = toString(string);
            if (string && (typeof separator == 'string' || separator != null && !isRegExp(separator))) {
                separator = baseToString(separator);
                if (!separator && hasUnicode(string)) {
                    return castSlice(stringToArray(string), 0, limit);
                }
            }
            return string.split(separator, limit);
        }
        var startCase = createCompounder(function (result, word, index) {
            return result + (index ? ' ' : '') + upperFirst(word);
        });
        function startsWith(string, target, position) {
            string = toString(string);
            position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
            target = baseToString(target);
            return string.slice(position, position + target.length) == target;
        }
        function template(string, options, guard) {
            var settings = lodash.templateSettings;
            if (guard && isIterateeCall(string, options, guard)) {
                options = undefined;
            }
            string = toString(string);
            options = assignInWith({}, options, settings, customDefaultsAssignIn);
            var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
            var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = '__p += \'';
            var reDelimiters = RegExp((options.escape || reNoMatch).source + '|' + interpolate.source + '|' + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' + (options.evaluate || reNoMatch).source + '|$', 'g');
            var sourceURL = '//# sourceURL=' + ('sourceURL' in options ? options.sourceURL : 'lodash.templateSources[' + ++templateCounter + ']') + '\n';
            string.replace(reDelimiters, function (match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
                interpolateValue || (interpolateValue = esTemplateValue);
                source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
                if (escapeValue) {
                    isEscaping = true;
                    source += '\' +\n__e(' + escapeValue + ') +\n\'';
                }
                if (evaluateValue) {
                    isEvaluating = true;
                    source += '\';\n' + evaluateValue + ';\n__p += \'';
                }
                if (interpolateValue) {
                    source += '\' +\n((__t = (' + interpolateValue + ')) == null ? \'\' : __t) +\n\'';
                }
                index = offset + match.length;
                return match;
            });
            source += '\';\n';
            var variable = options.variable;
            if (!variable) {
                source = 'with (obj) {\n' + source + '\n}\n';
            }
            source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source).replace(reEmptyStringMiddle, '$1').replace(reEmptyStringTrailing, '$1;');
            source = 'function(' + (variable || 'obj') + ') {\n' + (variable ? '' : 'obj || (obj = {});\n') + 'var __t, __p = \'\'' + (isEscaping ? ', __e = _.escape' : '') + (isEvaluating ? ', __j = Array.prototype.join;\n' + 'function print() { __p += __j.call(arguments, \'\') }\n' : ';\n') + source + 'return __p\n}';
            var result = attempt(function () {
                return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
            });
            result.source = source;
            if (isError(result)) {
                throw result;
            }
            return result;
        }
        function toLower(value) {
            return toString(value).toLowerCase();
        }
        function toUpper(value) {
            return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined)) {
                return string.replace(reTrim, '');
            }
            if (!string || !(chars = baseToString(chars))) {
                return string;
            }
            var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
            return castSlice(strSymbols, start, end).join('');
        }
        function trimEnd(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined)) {
                return string.replace(reTrimEnd, '');
            }
            if (!string || !(chars = baseToString(chars))) {
                return string;
            }
            var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
            return castSlice(strSymbols, 0, end).join('');
        }
        function trimStart(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined)) {
                return string.replace(reTrimStart, '');
            }
            if (!string || !(chars = baseToString(chars))) {
                return string;
            }
            var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
            return castSlice(strSymbols, start).join('');
        }
        function truncate(string, options) {
            var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
            if (isObject(options)) {
                var separator = 'separator' in options ? options.separator : separator;
                length = 'length' in options ? toInteger(options.length) : length;
                omission = 'omission' in options ? baseToString(options.omission) : omission;
            }
            string = toString(string);
            var strLength = string.length;
            if (hasUnicode(string)) {
                var strSymbols = stringToArray(string);
                strLength = strSymbols.length;
            }
            if (length >= strLength) {
                return string;
            }
            var end = length - stringSize(omission);
            if (end < 1) {
                return omission;
            }
            var result = strSymbols ? castSlice(strSymbols, 0, end).join('') : string.slice(0, end);
            if (separator === undefined) {
                return result + omission;
            }
            if (strSymbols) {
                end += result.length - end;
            }
            if (isRegExp(separator)) {
                if (string.slice(end).search(separator)) {
                    var match, substring = result;
                    if (!separator.global) {
                        separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
                    }
                    separator.lastIndex = 0;
                    while (match = separator.exec(substring)) {
                        var newEnd = match.index;
                    }
                    result = result.slice(0, newEnd === undefined ? end : newEnd);
                }
            } else if (string.indexOf(baseToString(separator), end) != end) {
                var index = result.lastIndexOf(separator);
                if (index > -1) {
                    result = result.slice(0, index);
                }
            }
            return result + omission;
        }
        function unescape(string) {
            string = toString(string);
            return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function (result, word, index) {
            return result + (index ? ' ' : '') + word.toUpperCase();
        });
        var upperFirst = createCaseFirst('toUpperCase');
        function words(string, pattern, guard) {
            string = toString(string);
            pattern = guard ? undefined : pattern;
            if (pattern === undefined) {
                return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
            }
            return string.match(pattern) || [];
        }
        var attempt = baseRest(function (func, args) {
            try {
                return apply(func, undefined, args);
            } catch (e) {
                return isError(e) ? e : new Error(e);
            }
        });
        var bindAll = flatRest(function (object, methodNames) {
            arrayEach(methodNames, function (key) {
                key = toKey(key);
                baseAssignValue(object, key, bind(object[key], object));
            });
            return object;
        });
        function cond(pairs) {
            var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
            pairs = !length ? [] : arrayMap(pairs, function (pair) {
                if (typeof pair[1] != 'function') {
                    throw new TypeError(FUNC_ERROR_TEXT);
                }
                return [
                    toIteratee(pair[0]),
                    pair[1]
                ];
            });
            return baseRest(function (args) {
                var index = -1;
                while (++index < length) {
                    var pair = pairs[index];
                    if (apply(pair[0], this, args)) {
                        return apply(pair[1], this, args);
                    }
                }
            });
        }
        function conforms(source) {
            return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
            return function () {
                return value;
            };
        }
        function defaultTo(value, defaultValue) {
            return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
            return value;
        }
        function iteratee(func) {
            return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
            return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
            return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function (path, args) {
            return function (object) {
                return baseInvoke(object, path, args);
            };
        });
        var methodOf = baseRest(function (object, args) {
            return function (path) {
                return baseInvoke(object, path, args);
            };
        });
        function mixin(object, source, options) {
            var props = keys(source), methodNames = baseFunctions(source, props);
            if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
                options = source;
                source = object;
                object = this;
                methodNames = baseFunctions(source, keys(source));
            }
            var chain = !(isObject(options) && 'chain' in options) || !!options.chain, isFunc = isFunction(object);
            arrayEach(methodNames, function (methodName) {
                var func = source[methodName];
                object[methodName] = func;
                if (isFunc) {
                    object.prototype[methodName] = function () {
                        var chainAll = this.__chain__;
                        if (chain || chainAll) {
                            var result = object(this.__wrapped__), actions = result.__actions__ = copyArray(this.__actions__);
                            actions.push({
                                'func': func,
                                'args': arguments,
                                'thisArg': object
                            });
                            result.__chain__ = chainAll;
                            return result;
                        }
                        return func.apply(object, arrayPush([this.value()], arguments));
                    };
                }
            });
            return object;
        }
        function noConflict() {
            if (root._ === this) {
                root._ = oldDash;
            }
            return this;
        }
        function noop() {
        }
        function nthArg(n) {
            n = toInteger(n);
            return baseRest(function (args) {
                return baseNth(args, n);
            });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
            return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object) {
            return function (path) {
                return object == null ? undefined : baseGet(object, path);
            };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
            return [];
        }
        function stubFalse() {
            return false;
        }
        function stubObject() {
            return {};
        }
        function stubString() {
            return '';
        }
        function stubTrue() {
            return true;
        }
        function times(n, iteratee) {
            n = toInteger(n);
            if (n < 1 || n > MAX_SAFE_INTEGER) {
                return [];
            }
            var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
            iteratee = getIteratee(iteratee);
            n -= MAX_ARRAY_LENGTH;
            var result = baseTimes(length, iteratee);
            while (++index < n) {
                iteratee(index);
            }
            return result;
        }
        function toPath(value) {
            if (isArray(value)) {
                return arrayMap(value, toKey);
            }
            return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId(prefix) {
            var id = ++idCounter;
            return toString(prefix) + id;
        }
        var add = createMathOperation(function (augend, addend) {
            return augend + addend;
        }, 0);
        var ceil = createRound('ceil');
        var divide = createMathOperation(function (dividend, divisor) {
            return dividend / divisor;
        }, 1);
        var floor = createRound('floor');
        function max(array) {
            return array && array.length ? baseExtremum(array, identity, baseGt) : undefined;
        }
        function maxBy(array, iteratee) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseGt) : undefined;
        }
        function mean(array) {
            return baseMean(array, identity);
        }
        function meanBy(array, iteratee) {
            return baseMean(array, getIteratee(iteratee, 2));
        }
        function min(array) {
            return array && array.length ? baseExtremum(array, identity, baseLt) : undefined;
        }
        function minBy(array, iteratee) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseLt) : undefined;
        }
        var multiply = createMathOperation(function (multiplier, multiplicand) {
            return multiplier * multiplicand;
        }, 1);
        var round = createRound('round');
        var subtract = createMathOperation(function (minuend, subtrahend) {
            return minuend - subtrahend;
        }, 0);
        function sum(array) {
            return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee) {
            return array && array.length ? baseSum(array, getIteratee(iteratee, 2)) : 0;
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, function () {
            var source = {};
            baseForOwn(lodash, function (func, methodName) {
                if (!hasOwnProperty.call(lodash.prototype, methodName)) {
                    source[methodName] = func;
                }
            });
            return source;
        }(), { 'chain': false });
        lodash.VERSION = VERSION;
        arrayEach([
            'bind',
            'bindKey',
            'curry',
            'curryRight',
            'partial',
            'partialRight'
        ], function (methodName) {
            lodash[methodName].placeholder = lodash;
        });
        arrayEach([
            'drop',
            'take'
        ], function (methodName, index) {
            LazyWrapper.prototype[methodName] = function (n) {
                n = n === undefined ? 1 : nativeMax(toInteger(n), 0);
                var result = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
                if (result.__filtered__) {
                    result.__takeCount__ = nativeMin(n, result.__takeCount__);
                } else {
                    result.__views__.push({
                        'size': nativeMin(n, MAX_ARRAY_LENGTH),
                        'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
                    });
                }
                return result;
            };
            LazyWrapper.prototype[methodName + 'Right'] = function (n) {
                return this.reverse()[methodName](n).reverse();
            };
        });
        arrayEach([
            'filter',
            'map',
            'takeWhile'
        ], function (methodName, index) {
            var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
            LazyWrapper.prototype[methodName] = function (iteratee) {
                var result = this.clone();
                result.__iteratees__.push({
                    'iteratee': getIteratee(iteratee, 3),
                    'type': type
                });
                result.__filtered__ = result.__filtered__ || isFilter;
                return result;
            };
        });
        arrayEach([
            'head',
            'last'
        ], function (methodName, index) {
            var takeName = 'take' + (index ? 'Right' : '');
            LazyWrapper.prototype[methodName] = function () {
                return this[takeName](1).value()[0];
            };
        });
        arrayEach([
            'initial',
            'tail'
        ], function (methodName, index) {
            var dropName = 'drop' + (index ? '' : 'Right');
            LazyWrapper.prototype[methodName] = function () {
                return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
            };
        });
        LazyWrapper.prototype.compact = function () {
            return this.filter(identity);
        };
        LazyWrapper.prototype.find = function (predicate) {
            return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function (predicate) {
            return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function (path, args) {
            if (typeof path == 'function') {
                return new LazyWrapper(this);
            }
            return this.map(function (value) {
                return baseInvoke(value, path, args);
            });
        });
        LazyWrapper.prototype.reject = function (predicate) {
            return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function (start, end) {
            start = toInteger(start);
            var result = this;
            if (result.__filtered__ && (start > 0 || end < 0)) {
                return new LazyWrapper(result);
            }
            if (start < 0) {
                result = result.takeRight(-start);
            } else if (start) {
                result = result.drop(start);
            }
            if (end !== undefined) {
                end = toInteger(end);
                result = end < 0 ? result.dropRight(-end) : result.take(end - start);
            }
            return result;
        };
        LazyWrapper.prototype.takeRightWhile = function (predicate) {
            return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function () {
            return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function (func, methodName) {
            var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? 'take' + (methodName == 'last' ? 'Right' : '') : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
            if (!lodashFunc) {
                return;
            }
            lodash.prototype[methodName] = function () {
                var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee = args[0], useLazy = isLazy || isArray(value);
                var interceptor = function (value) {
                    var result = lodashFunc.apply(lodash, arrayPush([value], args));
                    return isTaker && chainAll ? result[0] : result;
                };
                if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
                    isLazy = useLazy = false;
                }
                var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
                if (!retUnwrapped && useLazy) {
                    value = onlyLazy ? value : new LazyWrapper(this);
                    var result = func.apply(value, args);
                    result.__actions__.push({
                        'func': thru,
                        'args': [interceptor],
                        'thisArg': undefined
                    });
                    return new LodashWrapper(result, chainAll);
                }
                if (isUnwrapped && onlyLazy) {
                    return func.apply(this, args);
                }
                result = this.thru(interceptor);
                return isUnwrapped ? isTaker ? result.value()[0] : result.value() : result;
            };
        });
        arrayEach([
            'pop',
            'push',
            'shift',
            'sort',
            'splice',
            'unshift'
        ], function (methodName) {
            var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru', retUnwrapped = /^(?:pop|shift)$/.test(methodName);
            lodash.prototype[methodName] = function () {
                var args = arguments;
                if (retUnwrapped && !this.__chain__) {
                    var value = this.value();
                    return func.apply(isArray(value) ? value : [], args);
                }
                return this[chainName](function (value) {
                    return func.apply(isArray(value) ? value : [], args);
                });
            };
        });
        baseForOwn(LazyWrapper.prototype, function (func, methodName) {
            var lodashFunc = lodash[methodName];
            if (lodashFunc) {
                var key = lodashFunc.name + '', names = realNames[key] || (realNames[key] = []);
                names.push({
                    'name': methodName,
                    'func': lodashFunc
                });
            }
        });
        realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
                'name': 'wrapper',
                'func': undefined
            }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) {
            lodash.prototype[symIterator] = wrapperToIterator;
        }
        return lodash;
    };
    var _ = runInContext();
    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        root._ = _;
        define('lodash@4.17.11#lodash', function () {
            return _;
        });
    } else if (freeModule) {
        (freeModule.exports = _)._ = _;
        freeExports._ = _;
    } else {
        root._ = _;
    }
}.call(this));
/*xml-js@1.6.9#dist/xml-js*/
define('xml-js@1.6.9#dist/xml-js', [
    'module',
    '@loader',
    'require'
], function (module, loader, require) {
    loader.get('@@global-helpers').prepareGlobal({
        require: require,
        name: module.id,
        deps: []
    });
    var define = loader.global.define;
    var require = loader.global.require;
    var source = '(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap\r\n/******/ \t// The module cache\r\n/******/ \tvar installedModules = {};\r\n/******/\r\n/******/ \t// The require function\r\n/******/ \tfunction __webpack_require__(moduleId) {\r\n/******/\r\n/******/ \t\t// Check if module is in cache\r\n/******/ \t\tif(installedModules[moduleId]) {\r\n/******/ \t\t\treturn installedModules[moduleId].exports;\r\n/******/ \t\t}\r\n/******/ \t\t// Create a new module (and put it into the cache)\r\n/******/ \t\tvar module = installedModules[moduleId] = {\r\n/******/ \t\t\ti: moduleId,\r\n/******/ \t\t\tl: false,\r\n/******/ \t\t\texports: {}\r\n/******/ \t\t};\r\n/******/\r\n/******/ \t\t// Execute the module function\r\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\r\n/******/\r\n/******/ \t\t// Flag the module as loaded\r\n/******/ \t\tmodule.l = true;\r\n/******/\r\n/******/ \t\t// Return the exports of the module\r\n/******/ \t\treturn module.exports;\r\n/******/ \t}\r\n/******/\r\n/******/\r\n/******/ \t// expose the modules object (__webpack_modules__)\r\n/******/ \t__webpack_require__.m = modules;\r\n/******/\r\n/******/ \t// expose the module cache\r\n/******/ \t__webpack_require__.c = installedModules;\r\n/******/\r\n/******/ \t// define getter function for harmony exports\r\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\r\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\r\n/******/ \t\t\tObject.defineProperty(exports, name, {\r\n/******/ \t\t\t\tconfigurable: false,\r\n/******/ \t\t\t\tenumerable: true,\r\n/******/ \t\t\t\tget: getter\r\n/******/ \t\t\t});\r\n/******/ \t\t}\r\n/******/ \t};\r\n/******/\r\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\r\n/******/ \t__webpack_require__.n = function(module) {\r\n/******/ \t\tvar getter = module && module.__esModule ?\r\n/******/ \t\t\tfunction getDefault() { return module[\'default\']; } :\r\n/******/ \t\t\tfunction getModuleExports() { return module; };\r\n/******/ \t\t__webpack_require__.d(getter, \'a\', getter);\r\n/******/ \t\treturn getter;\r\n/******/ \t};\r\n/******/\r\n/******/ \t// Object.prototype.hasOwnProperty.call\r\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\r\n/******/\r\n/******/ \t// __webpack_public_path__\r\n/******/ \t__webpack_require__.p = "";\r\n/******/\r\n/******/ \t// Load entry module and return exports\r\n/******/ \treturn __webpack_require__(__webpack_require__.s = 21);\r\n/******/ })\r\n/************************************************************************/\r\n/******/ ([\r\n/* 0 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\n"use strict";\r\n// Copyright Joyent, Inc. and other Node contributors.\r\n//\r\n// Permission is hereby granted, free of charge, to any person obtaining a\r\n// copy of this software and associated documentation files (the\r\n// "Software"), to deal in the Software without restriction, including\r\n// without limitation the rights to use, copy, modify, merge, publish,\r\n// distribute, sublicense, and/or sell copies of the Software, and to permit\r\n// persons to whom the Software is furnished to do so, subject to the\r\n// following conditions:\r\n//\r\n// The above copyright notice and this permission notice shall be included\r\n// in all copies or substantial portions of the Software.\r\n//\r\n// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS\r\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\r\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\r\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\r\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\r\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\r\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\r\n\r\n// a duplex stream is just a stream that is both readable and writable.\r\n// Since JS doesn\'t have multiple prototypal inheritance, this class\r\n// prototypally inherits from Readable, and then parasitically from\r\n// Writable.\r\n\r\n\r\n\r\n/*<replacement>*/\r\n\r\nvar processNextTick = __webpack_require__(6);\r\n/*</replacement>*/\r\n\r\n/*<replacement>*/\r\nvar objectKeys = Object.keys || function (obj) {\r\n  var keys = [];\r\n  for (var key in obj) {\r\n    keys.push(key);\r\n  }return keys;\r\n};\r\n/*</replacement>*/\r\n\r\nmodule.exports = Duplex;\r\n\r\n/*<replacement>*/\r\nvar util = __webpack_require__(3);\r\nutil.inherits = __webpack_require__(1);\r\n/*</replacement>*/\r\n\r\nvar Readable = __webpack_require__(16);\r\nvar Writable = __webpack_require__(10);\r\n\r\nutil.inherits(Duplex, Readable);\r\n\r\nvar keys = objectKeys(Writable.prototype);\r\nfor (var v = 0; v < keys.length; v++) {\r\n  var method = keys[v];\r\n  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];\r\n}\r\n\r\nfunction Duplex(options) {\r\n  if (!(this instanceof Duplex)) return new Duplex(options);\r\n\r\n  Readable.call(this, options);\r\n  Writable.call(this, options);\r\n\r\n  if (options && options.readable === false) this.readable = false;\r\n\r\n  if (options && options.writable === false) this.writable = false;\r\n\r\n  this.allowHalfOpen = true;\r\n  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;\r\n\r\n  this.once(\'end\', onend);\r\n}\r\n\r\n// the no-half-open enforcer\r\nfunction onend() {\r\n  // if we allow half-open state, or if the writable side ended,\r\n  // then we\'re ok.\r\n  if (this.allowHalfOpen || this._writableState.ended) return;\r\n\r\n  // no more data can be written.\r\n  // But allow more writes to happen in this tick.\r\n  processNextTick(onEndNT, this);\r\n}\r\n\r\nfunction onEndNT(self) {\r\n  self.end();\r\n}\r\n\r\nObject.defineProperty(Duplex.prototype, \'destroyed\', {\r\n  get: function () {\r\n    if (this._readableState === undefined || this._writableState === undefined) {\r\n      return false;\r\n    }\r\n    return this._readableState.destroyed && this._writableState.destroyed;\r\n  },\r\n  set: function (value) {\r\n    // we ignore the value if the stream\r\n    // has not been initialized yet\r\n    if (this._readableState === undefined || this._writableState === undefined) {\r\n      return;\r\n    }\r\n\r\n    // backward compatibility, the user is explicitly\r\n    // managing destroyed\r\n    this._readableState.destroyed = value;\r\n    this._writableState.destroyed = value;\r\n  }\r\n});\r\n\r\nDuplex.prototype._destroy = function (err, cb) {\r\n  this.push(null);\r\n  this.end();\r\n\r\n  processNextTick(cb, err);\r\n};\r\n\r\nfunction forEach(xs, f) {\r\n  for (var i = 0, l = xs.length; i < l; i++) {\r\n    f(xs[i], i);\r\n  }\r\n}\r\n\r\n/***/ }),\r\n/* 1 */\r\n/***/ (function(module, exports) {\r\n\r\nif (typeof Object.create === \'function\') {\r\n  // implementation from standard node.js \'util\' module\r\n  module.exports = function inherits(ctor, superCtor) {\r\n    ctor.super_ = superCtor\r\n    ctor.prototype = Object.create(superCtor.prototype, {\r\n      constructor: {\r\n        value: ctor,\r\n        enumerable: false,\r\n        writable: true,\r\n        configurable: true\r\n      }\r\n    });\r\n  };\r\n} else {\r\n  // old school shim for old browsers\r\n  module.exports = function inherits(ctor, superCtor) {\r\n    ctor.super_ = superCtor\r\n    var TempCtor = function () {}\r\n    TempCtor.prototype = superCtor.prototype\r\n    ctor.prototype = new TempCtor()\r\n    ctor.prototype.constructor = ctor\r\n  }\r\n}\r\n\r\n\r\n/***/ }),\r\n/* 2 */\r\n/***/ (function(module, exports) {\r\n\r\nvar g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function("return this")() || (1,eval)("this");\r\n} catch(e) {\r\n\t// This works if the window reference is available\r\n\tif(typeof window === "object")\r\n\t\tg = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it\'s\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n\r\n\r\n/***/ }),\r\n/* 3 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\n/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.\r\n//\r\n// Permission is hereby granted, free of charge, to any person obtaining a\r\n// copy of this software and associated documentation files (the\r\n// "Software"), to deal in the Software without restriction, including\r\n// without limitation the rights to use, copy, modify, merge, publish,\r\n// distribute, sublicense, and/or sell copies of the Software, and to permit\r\n// persons to whom the Software is furnished to do so, subject to the\r\n// following conditions:\r\n//\r\n// The above copyright notice and this permission notice shall be included\r\n// in all copies or substantial portions of the Software.\r\n//\r\n// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS\r\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\r\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\r\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\r\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\r\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\r\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\r\n\r\n// NOTE: These type checking functions intentionally don\'t use `instanceof`\r\n// because it is fragile and can be easily faked with `Object.create()`.\r\n\r\nfunction isArray(arg) {\r\n  if (Array.isArray) {\r\n    return Array.isArray(arg);\r\n  }\r\n  return objectToString(arg) === \'[object Array]\';\r\n}\r\nexports.isArray = isArray;\r\n\r\nfunction isBoolean(arg) {\r\n  return typeof arg === \'boolean\';\r\n}\r\nexports.isBoolean = isBoolean;\r\n\r\nfunction isNull(arg) {\r\n  return arg === null;\r\n}\r\nexports.isNull = isNull;\r\n\r\nfunction isNullOrUndefined(arg) {\r\n  return arg == null;\r\n}\r\nexports.isNullOrUndefined = isNullOrUndefined;\r\n\r\nfunction isNumber(arg) {\r\n  return typeof arg === \'number\';\r\n}\r\nexports.isNumber = isNumber;\r\n\r\nfunction isString(arg) {\r\n  return typeof arg === \'string\';\r\n}\r\nexports.isString = isString;\r\n\r\nfunction isSymbol(arg) {\r\n  return typeof arg === \'symbol\';\r\n}\r\nexports.isSymbol = isSymbol;\r\n\r\nfunction isUndefined(arg) {\r\n  return arg === void 0;\r\n}\r\nexports.isUndefined = isUndefined;\r\n\r\nfunction isRegExp(re) {\r\n  return objectToString(re) === \'[object RegExp]\';\r\n}\r\nexports.isRegExp = isRegExp;\r\n\r\nfunction isObject(arg) {\r\n  return typeof arg === \'object\' && arg !== null;\r\n}\r\nexports.isObject = isObject;\r\n\r\nfunction isDate(d) {\r\n  return objectToString(d) === \'[object Date]\';\r\n}\r\nexports.isDate = isDate;\r\n\r\nfunction isError(e) {\r\n  return (objectToString(e) === \'[object Error]\' || e instanceof Error);\r\n}\r\nexports.isError = isError;\r\n\r\nfunction isFunction(arg) {\r\n  return typeof arg === \'function\';\r\n}\r\nexports.isFunction = isFunction;\r\n\r\nfunction isPrimitive(arg) {\r\n  return arg === null ||\r\n         typeof arg === \'boolean\' ||\r\n         typeof arg === \'number\' ||\r\n         typeof arg === \'string\' ||\r\n         typeof arg === \'symbol\' ||  // ES6 symbol\r\n         typeof arg === \'undefined\';\r\n}\r\nexports.isPrimitive = isPrimitive;\r\n\r\nexports.isBuffer = Buffer.isBuffer;\r\n\r\nfunction objectToString(o) {\r\n  return Object.prototype.toString.call(o);\r\n}\r\n\r\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))\r\n\r\n/***/ }),\r\n/* 4 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\n"use strict";\r\n/* WEBPACK VAR INJECTION */(function(global) {/*!\r\n * The buffer module from node.js, for the browser.\r\n *\r\n * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>\r\n * @license  MIT\r\n */\r\n/* eslint-disable no-proto */\r\n\r\n\r\n\r\nvar base64 = __webpack_require__(23)\r\nvar ieee754 = __webpack_require__(24)\r\nvar isArray = __webpack_require__(15)\r\n\r\nexports.Buffer = Buffer\r\nexports.SlowBuffer = SlowBuffer\r\nexports.INSPECT_MAX_BYTES = 50\r\n\r\n/**\r\n * If `Buffer.TYPED_ARRAY_SUPPORT`:\r\n *   === true    Use Uint8Array implementation (fastest)\r\n *   === false   Use Object implementation (most compatible, even IE6)\r\n *\r\n * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,\r\n * Opera 11.6+, iOS 4.2+.\r\n *\r\n * Due to various browser bugs, sometimes the Object implementation will be used even\r\n * when the browser supports typed arrays.\r\n *\r\n * Note:\r\n *\r\n *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,\r\n *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.\r\n *\r\n *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.\r\n *\r\n *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of\r\n *     incorrect length in some situations.\r\n\r\n * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they\r\n * get the Object implementation, which is slower but behaves correctly.\r\n */\r\nBuffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined\r\n  ? global.TYPED_ARRAY_SUPPORT\r\n  : typedArraySupport()\r\n\r\n/*\r\n * Export kMaxLength after typed array support is determined.\r\n */\r\nexports.kMaxLength = kMaxLength()\r\n\r\nfunction typedArraySupport () {\r\n  try {\r\n    var arr = new Uint8Array(1)\r\n    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}\r\n    return arr.foo() === 42 && // typed array instances can be augmented\r\n        typeof arr.subarray === \'function\' && // chrome 9-10 lack `subarray`\r\n        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`\r\n  } catch (e) {\r\n    return false\r\n  }\r\n}\r\n\r\nfunction kMaxLength () {\r\n  return Buffer.TYPED_ARRAY_SUPPORT\r\n    ? 0x7fffffff\r\n    : 0x3fffffff\r\n}\r\n\r\nfunction createBuffer (that, length) {\r\n  if (kMaxLength() < length) {\r\n    throw new RangeError(\'Invalid typed array length\')\r\n  }\r\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\r\n    // Return an augmented `Uint8Array` instance, for best performance\r\n    that = new Uint8Array(length)\r\n    that.__proto__ = Buffer.prototype\r\n  } else {\r\n    // Fallback: Return an object instance of the Buffer class\r\n    if (that === null) {\r\n      that = new Buffer(length)\r\n    }\r\n    that.length = length\r\n  }\r\n\r\n  return that\r\n}\r\n\r\n/**\r\n * The Buffer constructor returns instances of `Uint8Array` that have their\r\n * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of\r\n * `Uint8Array`, so the returned instances will have all the node `Buffer` methods\r\n * and the `Uint8Array` methods. Square bracket notation works as expected -- it\r\n * returns a single octet.\r\n *\r\n * The `Uint8Array` prototype remains unmodified.\r\n */\r\n\r\nfunction Buffer (arg, encodingOrOffset, length) {\r\n  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {\r\n    return new Buffer(arg, encodingOrOffset, length)\r\n  }\r\n\r\n  // Common case.\r\n  if (typeof arg === \'number\') {\r\n    if (typeof encodingOrOffset === \'string\') {\r\n      throw new Error(\r\n        \'If encoding is specified then the first argument must be a string\'\r\n      )\r\n    }\r\n    return allocUnsafe(this, arg)\r\n  }\r\n  return from(this, arg, encodingOrOffset, length)\r\n}\r\n\r\nBuffer.poolSize = 8192 // not used by this implementation\r\n\r\n// TODO: Legacy, not needed anymore. Remove in next major version.\r\nBuffer._augment = function (arr) {\r\n  arr.__proto__ = Buffer.prototype\r\n  return arr\r\n}\r\n\r\nfunction from (that, value, encodingOrOffset, length) {\r\n  if (typeof value === \'number\') {\r\n    throw new TypeError(\'"value" argument must not be a number\')\r\n  }\r\n\r\n  if (typeof ArrayBuffer !== \'undefined\' && value instanceof ArrayBuffer) {\r\n    return fromArrayBuffer(that, value, encodingOrOffset, length)\r\n  }\r\n\r\n  if (typeof value === \'string\') {\r\n    return fromString(that, value, encodingOrOffset)\r\n  }\r\n\r\n  return fromObject(that, value)\r\n}\r\n\r\n/**\r\n * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError\r\n * if value is a number.\r\n * Buffer.from(str[, encoding])\r\n * Buffer.from(array)\r\n * Buffer.from(buffer)\r\n * Buffer.from(arrayBuffer[, byteOffset[, length]])\r\n **/\r\nBuffer.from = function (value, encodingOrOffset, length) {\r\n  return from(null, value, encodingOrOffset, length)\r\n}\r\n\r\nif (Buffer.TYPED_ARRAY_SUPPORT) {\r\n  Buffer.prototype.__proto__ = Uint8Array.prototype\r\n  Buffer.__proto__ = Uint8Array\r\n  if (typeof Symbol !== \'undefined\' && Symbol.species &&\r\n      Buffer[Symbol.species] === Buffer) {\r\n    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97\r\n    Object.defineProperty(Buffer, Symbol.species, {\r\n      value: null,\r\n      configurable: true\r\n    })\r\n  }\r\n}\r\n\r\nfunction assertSize (size) {\r\n  if (typeof size !== \'number\') {\r\n    throw new TypeError(\'"size" argument must be a number\')\r\n  } else if (size < 0) {\r\n    throw new RangeError(\'"size" argument must not be negative\')\r\n  }\r\n}\r\n\r\nfunction alloc (that, size, fill, encoding) {\r\n  assertSize(size)\r\n  if (size <= 0) {\r\n    return createBuffer(that, size)\r\n  }\r\n  if (fill !== undefined) {\r\n    // Only pay attention to encoding if it\'s a string. This\r\n    // prevents accidentally sending in a number that would\r\n    // be interpretted as a start offset.\r\n    return typeof encoding === \'string\'\r\n      ? createBuffer(that, size).fill(fill, encoding)\r\n      : createBuffer(that, size).fill(fill)\r\n  }\r\n  return createBuffer(that, size)\r\n}\r\n\r\n/**\r\n * Creates a new filled Buffer instance.\r\n * alloc(size[, fill[, encoding]])\r\n **/\r\nBuffer.alloc = function (size, fill, encoding) {\r\n  return alloc(null, size, fill, encoding)\r\n}\r\n\r\nfunction allocUnsafe (that, size) {\r\n  assertSize(size)\r\n  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)\r\n  if (!Buffer.TYPED_ARRAY_SUPPORT) {\r\n    for (var i = 0; i < size; ++i) {\r\n      that[i] = 0\r\n    }\r\n  }\r\n  return that\r\n}\r\n\r\n/**\r\n * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.\r\n * */\r\nBuffer.allocUnsafe = function (size) {\r\n  return allocUnsafe(null, size)\r\n}\r\n/**\r\n * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.\r\n */\r\nBuffer.allocUnsafeSlow = function (size) {\r\n  return allocUnsafe(null, size)\r\n}\r\n\r\nfunction fromString (that, string, encoding) {\r\n  if (typeof encoding !== \'string\' || encoding === \'\') {\r\n    encoding = \'utf8\'\r\n  }\r\n\r\n  if (!Buffer.isEncoding(encoding)) {\r\n    throw new TypeError(\'"encoding" must be a valid string encoding\')\r\n  }\r\n\r\n  var length = byteLength(string, encoding) | 0\r\n  that = createBuffer(that, length)\r\n\r\n  var actual = that.write(string, encoding)\r\n\r\n  if (actual !== length) {\r\n    // Writing a hex string, for example, that contains invalid characters will\r\n    // cause everything after the first invalid character to be ignored. (e.g.\r\n    // \'abxxcd\' will be treated as \'ab\')\r\n    that = that.slice(0, actual)\r\n  }\r\n\r\n  return that\r\n}\r\n\r\nfunction fromArrayLike (that, array) {\r\n  var length = array.length < 0 ? 0 : checked(array.length) | 0\r\n  that = createBuffer(that, length)\r\n  for (var i = 0; i < length; i += 1) {\r\n    that[i] = array[i] & 255\r\n  }\r\n  return that\r\n}\r\n\r\nfunction fromArrayBuffer (that, array, byteOffset, length) {\r\n  array.byteLength // this throws if `array` is not a valid ArrayBuffer\r\n\r\n  if (byteOffset < 0 || array.byteLength < byteOffset) {\r\n    throw new RangeError(\'\\\'offset\\\' is out of bounds\')\r\n  }\r\n\r\n  if (array.byteLength < byteOffset + (length || 0)) {\r\n    throw new RangeError(\'\\\'length\\\' is out of bounds\')\r\n  }\r\n\r\n  if (byteOffset === undefined && length === undefined) {\r\n    array = new Uint8Array(array)\r\n  } else if (length === undefined) {\r\n    array = new Uint8Array(array, byteOffset)\r\n  } else {\r\n    array = new Uint8Array(array, byteOffset, length)\r\n  }\r\n\r\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\r\n    // Return an augmented `Uint8Array` instance, for best performance\r\n    that = array\r\n    that.__proto__ = Buffer.prototype\r\n  } else {\r\n    // Fallback: Return an object instance of the Buffer class\r\n    that = fromArrayLike(that, array)\r\n  }\r\n  return that\r\n}\r\n\r\nfunction fromObject (that, obj) {\r\n  if (Buffer.isBuffer(obj)) {\r\n    var len = checked(obj.length) | 0\r\n    that = createBuffer(that, len)\r\n\r\n    if (that.length === 0) {\r\n      return that\r\n    }\r\n\r\n    obj.copy(that, 0, 0, len)\r\n    return that\r\n  }\r\n\r\n  if (obj) {\r\n    if ((typeof ArrayBuffer !== \'undefined\' &&\r\n        obj.buffer instanceof ArrayBuffer) || \'length\' in obj) {\r\n      if (typeof obj.length !== \'number\' || isnan(obj.length)) {\r\n        return createBuffer(that, 0)\r\n      }\r\n      return fromArrayLike(that, obj)\r\n    }\r\n\r\n    if (obj.type === \'Buffer\' && isArray(obj.data)) {\r\n      return fromArrayLike(that, obj.data)\r\n    }\r\n  }\r\n\r\n  throw new TypeError(\'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.\')\r\n}\r\n\r\nfunction checked (length) {\r\n  // Note: cannot use `length < kMaxLength()` here because that fails when\r\n  // length is NaN (which is otherwise coerced to zero.)\r\n  if (length >= kMaxLength()) {\r\n    throw new RangeError(\'Attempt to allocate Buffer larger than maximum \' +\r\n                         \'size: 0x\' + kMaxLength().toString(16) + \' bytes\')\r\n  }\r\n  return length | 0\r\n}\r\n\r\nfunction SlowBuffer (length) {\r\n  if (+length != length) { // eslint-disable-line eqeqeq\r\n    length = 0\r\n  }\r\n  return Buffer.alloc(+length)\r\n}\r\n\r\nBuffer.isBuffer = function isBuffer (b) {\r\n  return !!(b != null && b._isBuffer)\r\n}\r\n\r\nBuffer.compare = function compare (a, b) {\r\n  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {\r\n    throw new TypeError(\'Arguments must be Buffers\')\r\n  }\r\n\r\n  if (a === b) return 0\r\n\r\n  var x = a.length\r\n  var y = b.length\r\n\r\n  for (var i = 0, len = Math.min(x, y); i < len; ++i) {\r\n    if (a[i] !== b[i]) {\r\n      x = a[i]\r\n      y = b[i]\r\n      break\r\n    }\r\n  }\r\n\r\n  if (x < y) return -1\r\n  if (y < x) return 1\r\n  return 0\r\n}\r\n\r\nBuffer.isEncoding = function isEncoding (encoding) {\r\n  switch (String(encoding).toLowerCase()) {\r\n    case \'hex\':\r\n    case \'utf8\':\r\n    case \'utf-8\':\r\n    case \'ascii\':\r\n    case \'latin1\':\r\n    case \'binary\':\r\n    case \'base64\':\r\n    case \'ucs2\':\r\n    case \'ucs-2\':\r\n    case \'utf16le\':\r\n    case \'utf-16le\':\r\n      return true\r\n    default:\r\n      return false\r\n  }\r\n}\r\n\r\nBuffer.concat = function concat (list, length) {\r\n  if (!isArray(list)) {\r\n    throw new TypeError(\'"list" argument must be an Array of Buffers\')\r\n  }\r\n\r\n  if (list.length === 0) {\r\n    return Buffer.alloc(0)\r\n  }\r\n\r\n  var i\r\n  if (length === undefined) {\r\n    length = 0\r\n    for (i = 0; i < list.length; ++i) {\r\n      length += list[i].length\r\n    }\r\n  }\r\n\r\n  var buffer = Buffer.allocUnsafe(length)\r\n  var pos = 0\r\n  for (i = 0; i < list.length; ++i) {\r\n    var buf = list[i]\r\n    if (!Buffer.isBuffer(buf)) {\r\n      throw new TypeError(\'"list" argument must be an Array of Buffers\')\r\n    }\r\n    buf.copy(buffer, pos)\r\n    pos += buf.length\r\n  }\r\n  return buffer\r\n}\r\n\r\nfunction byteLength (string, encoding) {\r\n  if (Buffer.isBuffer(string)) {\r\n    return string.length\r\n  }\r\n  if (typeof ArrayBuffer !== \'undefined\' && typeof ArrayBuffer.isView === \'function\' &&\r\n      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {\r\n    return string.byteLength\r\n  }\r\n  if (typeof string !== \'string\') {\r\n    string = \'\' + string\r\n  }\r\n\r\n  var len = string.length\r\n  if (len === 0) return 0\r\n\r\n  // Use a for loop to avoid recursion\r\n  var loweredCase = false\r\n  for (;;) {\r\n    switch (encoding) {\r\n      case \'ascii\':\r\n      case \'latin1\':\r\n      case \'binary\':\r\n        return len\r\n      case \'utf8\':\r\n      case \'utf-8\':\r\n      case undefined:\r\n        return utf8ToBytes(string).length\r\n      case \'ucs2\':\r\n      case \'ucs-2\':\r\n      case \'utf16le\':\r\n      case \'utf-16le\':\r\n        return len * 2\r\n      case \'hex\':\r\n        return len >>> 1\r\n      case \'base64\':\r\n        return base64ToBytes(string).length\r\n      default:\r\n        if (loweredCase) return utf8ToBytes(string).length // assume utf8\r\n        encoding = (\'\' + encoding).toLowerCase()\r\n        loweredCase = true\r\n    }\r\n  }\r\n}\r\nBuffer.byteLength = byteLength\r\n\r\nfunction slowToString (encoding, start, end) {\r\n  var loweredCase = false\r\n\r\n  // No need to verify that "this.length <= MAX_UINT32" since it\'s a read-only\r\n  // property of a typed array.\r\n\r\n  // This behaves neither like String nor Uint8Array in that we set start/end\r\n  // to their upper/lower bounds if the value passed is out of range.\r\n  // undefined is handled specially as per ECMA-262 6th Edition,\r\n  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.\r\n  if (start === undefined || start < 0) {\r\n    start = 0\r\n  }\r\n  // Return early if start > this.length. Done here to prevent potential uint32\r\n  // coercion fail below.\r\n  if (start > this.length) {\r\n    return \'\'\r\n  }\r\n\r\n  if (end === undefined || end > this.length) {\r\n    end = this.length\r\n  }\r\n\r\n  if (end <= 0) {\r\n    return \'\'\r\n  }\r\n\r\n  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.\r\n  end >>>= 0\r\n  start >>>= 0\r\n\r\n  if (end <= start) {\r\n    return \'\'\r\n  }\r\n\r\n  if (!encoding) encoding = \'utf8\'\r\n\r\n  while (true) {\r\n    switch (encoding) {\r\n      case \'hex\':\r\n        return hexSlice(this, start, end)\r\n\r\n      case \'utf8\':\r\n      case \'utf-8\':\r\n        return utf8Slice(this, start, end)\r\n\r\n      case \'ascii\':\r\n        return asciiSlice(this, start, end)\r\n\r\n      case \'latin1\':\r\n      case \'binary\':\r\n        return latin1Slice(this, start, end)\r\n\r\n      case \'base64\':\r\n        return base64Slice(this, start, end)\r\n\r\n      case \'ucs2\':\r\n      case \'ucs-2\':\r\n      case \'utf16le\':\r\n      case \'utf-16le\':\r\n        return utf16leSlice(this, start, end)\r\n\r\n      default:\r\n        if (loweredCase) throw new TypeError(\'Unknown encoding: \' + encoding)\r\n        encoding = (encoding + \'\').toLowerCase()\r\n        loweredCase = true\r\n    }\r\n  }\r\n}\r\n\r\n// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect\r\n// Buffer instances.\r\nBuffer.prototype._isBuffer = true\r\n\r\nfunction swap (b, n, m) {\r\n  var i = b[n]\r\n  b[n] = b[m]\r\n  b[m] = i\r\n}\r\n\r\nBuffer.prototype.swap16 = function swap16 () {\r\n  var len = this.length\r\n  if (len % 2 !== 0) {\r\n    throw new RangeError(\'Buffer size must be a multiple of 16-bits\')\r\n  }\r\n  for (var i = 0; i < len; i += 2) {\r\n    swap(this, i, i + 1)\r\n  }\r\n  return this\r\n}\r\n\r\nBuffer.prototype.swap32 = function swap32 () {\r\n  var len = this.length\r\n  if (len % 4 !== 0) {\r\n    throw new RangeError(\'Buffer size must be a multiple of 32-bits\')\r\n  }\r\n  for (var i = 0; i < len; i += 4) {\r\n    swap(this, i, i + 3)\r\n    swap(this, i + 1, i + 2)\r\n  }\r\n  return this\r\n}\r\n\r\nBuffer.prototype.swap64 = function swap64 () {\r\n  var len = this.length\r\n  if (len % 8 !== 0) {\r\n    throw new RangeError(\'Buffer size must be a multiple of 64-bits\')\r\n  }\r\n  for (var i = 0; i < len; i += 8) {\r\n    swap(this, i, i + 7)\r\n    swap(this, i + 1, i + 6)\r\n    swap(this, i + 2, i + 5)\r\n    swap(this, i + 3, i + 4)\r\n  }\r\n  return this\r\n}\r\n\r\nBuffer.prototype.toString = function toString () {\r\n  var length = this.length | 0\r\n  if (length === 0) return \'\'\r\n  if (arguments.length === 0) return utf8Slice(this, 0, length)\r\n  return slowToString.apply(this, arguments)\r\n}\r\n\r\nBuffer.prototype.equals = function equals (b) {\r\n  if (!Buffer.isBuffer(b)) throw new TypeError(\'Argument must be a Buffer\')\r\n  if (this === b) return true\r\n  return Buffer.compare(this, b) === 0\r\n}\r\n\r\nBuffer.prototype.inspect = function inspect () {\r\n  var str = \'\'\r\n  var max = exports.INSPECT_MAX_BYTES\r\n  if (this.length > 0) {\r\n    str = this.toString(\'hex\', 0, max).match(/.{2}/g).join(\' \')\r\n    if (this.length > max) str += \' ... \'\r\n  }\r\n  return \'<Buffer \' + str + \'>\'\r\n}\r\n\r\nBuffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {\r\n  if (!Buffer.isBuffer(target)) {\r\n    throw new TypeError(\'Argument must be a Buffer\')\r\n  }\r\n\r\n  if (start === undefined) {\r\n    start = 0\r\n  }\r\n  if (end === undefined) {\r\n    end = target ? target.length : 0\r\n  }\r\n  if (thisStart === undefined) {\r\n    thisStart = 0\r\n  }\r\n  if (thisEnd === undefined) {\r\n    thisEnd = this.length\r\n  }\r\n\r\n  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {\r\n    throw new RangeError(\'out of range index\')\r\n  }\r\n\r\n  if (thisStart >= thisEnd && start >= end) {\r\n    return 0\r\n  }\r\n  if (thisStart >= thisEnd) {\r\n    return -1\r\n  }\r\n  if (start >= end) {\r\n    return 1\r\n  }\r\n\r\n  start >>>= 0\r\n  end >>>= 0\r\n  thisStart >>>= 0\r\n  thisEnd >>>= 0\r\n\r\n  if (this === target) return 0\r\n\r\n  var x = thisEnd - thisStart\r\n  var y = end - start\r\n  var len = Math.min(x, y)\r\n\r\n  var thisCopy = this.slice(thisStart, thisEnd)\r\n  var targetCopy = target.slice(start, end)\r\n\r\n  for (var i = 0; i < len; ++i) {\r\n    if (thisCopy[i] !== targetCopy[i]) {\r\n      x = thisCopy[i]\r\n      y = targetCopy[i]\r\n      break\r\n    }\r\n  }\r\n\r\n  if (x < y) return -1\r\n  if (y < x) return 1\r\n  return 0\r\n}\r\n\r\n// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,\r\n// OR the last index of `val` in `buffer` at offset <= `byteOffset`.\r\n//\r\n// Arguments:\r\n// - buffer - a Buffer to search\r\n// - val - a string, Buffer, or number\r\n// - byteOffset - an index into `buffer`; will be clamped to an int32\r\n// - encoding - an optional encoding, relevant is val is a string\r\n// - dir - true for indexOf, false for lastIndexOf\r\nfunction bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {\r\n  // Empty buffer means no match\r\n  if (buffer.length === 0) return -1\r\n\r\n  // Normalize byteOffset\r\n  if (typeof byteOffset === \'string\') {\r\n    encoding = byteOffset\r\n    byteOffset = 0\r\n  } else if (byteOffset > 0x7fffffff) {\r\n    byteOffset = 0x7fffffff\r\n  } else if (byteOffset < -0x80000000) {\r\n    byteOffset = -0x80000000\r\n  }\r\n  byteOffset = +byteOffset  // Coerce to Number.\r\n  if (isNaN(byteOffset)) {\r\n    // byteOffset: it it\'s undefined, null, NaN, "foo", etc, search whole buffer\r\n    byteOffset = dir ? 0 : (buffer.length - 1)\r\n  }\r\n\r\n  // Normalize byteOffset: negative offsets start from the end of the buffer\r\n  if (byteOffset < 0) byteOffset = buffer.length + byteOffset\r\n  if (byteOffset >= buffer.length) {\r\n    if (dir) return -1\r\n    else byteOffset = buffer.length - 1\r\n  } else if (byteOffset < 0) {\r\n    if (dir) byteOffset = 0\r\n    else return -1\r\n  }\r\n\r\n  // Normalize val\r\n  if (typeof val === \'string\') {\r\n    val = Buffer.from(val, encoding)\r\n  }\r\n\r\n  // Finally, search either indexOf (if dir is true) or lastIndexOf\r\n  if (Buffer.isBuffer(val)) {\r\n    // Special case: looking for empty string/buffer always fails\r\n    if (val.length === 0) {\r\n      return -1\r\n    }\r\n    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)\r\n  } else if (typeof val === \'number\') {\r\n    val = val & 0xFF // Search for a byte value [0-255]\r\n    if (Buffer.TYPED_ARRAY_SUPPORT &&\r\n        typeof Uint8Array.prototype.indexOf === \'function\') {\r\n      if (dir) {\r\n        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)\r\n      } else {\r\n        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)\r\n      }\r\n    }\r\n    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)\r\n  }\r\n\r\n  throw new TypeError(\'val must be string, number or Buffer\')\r\n}\r\n\r\nfunction arrayIndexOf (arr, val, byteOffset, encoding, dir) {\r\n  var indexSize = 1\r\n  var arrLength = arr.length\r\n  var valLength = val.length\r\n\r\n  if (encoding !== undefined) {\r\n    encoding = String(encoding).toLowerCase()\r\n    if (encoding === \'ucs2\' || encoding === \'ucs-2\' ||\r\n        encoding === \'utf16le\' || encoding === \'utf-16le\') {\r\n      if (arr.length < 2 || val.length < 2) {\r\n        return -1\r\n      }\r\n      indexSize = 2\r\n      arrLength /= 2\r\n      valLength /= 2\r\n      byteOffset /= 2\r\n    }\r\n  }\r\n\r\n  function read (buf, i) {\r\n    if (indexSize === 1) {\r\n      return buf[i]\r\n    } else {\r\n      return buf.readUInt16BE(i * indexSize)\r\n    }\r\n  }\r\n\r\n  var i\r\n  if (dir) {\r\n    var foundIndex = -1\r\n    for (i = byteOffset; i < arrLength; i++) {\r\n      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {\r\n        if (foundIndex === -1) foundIndex = i\r\n        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize\r\n      } else {\r\n        if (foundIndex !== -1) i -= i - foundIndex\r\n        foundIndex = -1\r\n      }\r\n    }\r\n  } else {\r\n    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength\r\n    for (i = byteOffset; i >= 0; i--) {\r\n      var found = true\r\n      for (var j = 0; j < valLength; j++) {\r\n        if (read(arr, i + j) !== read(val, j)) {\r\n          found = false\r\n          break\r\n        }\r\n      }\r\n      if (found) return i\r\n    }\r\n  }\r\n\r\n  return -1\r\n}\r\n\r\nBuffer.prototype.includes = function includes (val, byteOffset, encoding) {\r\n  return this.indexOf(val, byteOffset, encoding) !== -1\r\n}\r\n\r\nBuffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {\r\n  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)\r\n}\r\n\r\nBuffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {\r\n  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)\r\n}\r\n\r\nfunction hexWrite (buf, string, offset, length) {\r\n  offset = Number(offset) || 0\r\n  var remaining = buf.length - offset\r\n  if (!length) {\r\n    length = remaining\r\n  } else {\r\n    length = Number(length)\r\n    if (length > remaining) {\r\n      length = remaining\r\n    }\r\n  }\r\n\r\n  // must be an even number of digits\r\n  var strLen = string.length\r\n  if (strLen % 2 !== 0) throw new TypeError(\'Invalid hex string\')\r\n\r\n  if (length > strLen / 2) {\r\n    length = strLen / 2\r\n  }\r\n  for (var i = 0; i < length; ++i) {\r\n    var parsed = parseInt(string.substr(i * 2, 2), 16)\r\n    if (isNaN(parsed)) return i\r\n    buf[offset + i] = parsed\r\n  }\r\n  return i\r\n}\r\n\r\nfunction utf8Write (buf, string, offset, length) {\r\n  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)\r\n}\r\n\r\nfunction asciiWrite (buf, string, offset, length) {\r\n  return blitBuffer(asciiToBytes(string), buf, offset, length)\r\n}\r\n\r\nfunction latin1Write (buf, string, offset, length) {\r\n  return asciiWrite(buf, string, offset, length)\r\n}\r\n\r\nfunction base64Write (buf, string, offset, length) {\r\n  return blitBuffer(base64ToBytes(string), buf, offset, length)\r\n}\r\n\r\nfunction ucs2Write (buf, string, offset, length) {\r\n  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)\r\n}\r\n\r\nBuffer.prototype.write = function write (string, offset, length, encoding) {\r\n  // Buffer#write(string)\r\n  if (offset === undefined) {\r\n    encoding = \'utf8\'\r\n    length = this.length\r\n    offset = 0\r\n  // Buffer#write(string, encoding)\r\n  } else if (length === undefined && typeof offset === \'string\') {\r\n    encoding = offset\r\n    length = this.length\r\n    offset = 0\r\n  // Buffer#write(string, offset[, length][, encoding])\r\n  } else if (isFinite(offset)) {\r\n    offset = offset | 0\r\n    if (isFinite(length)) {\r\n      length = length | 0\r\n      if (encoding === undefined) encoding = \'utf8\'\r\n    } else {\r\n      encoding = length\r\n      length = undefined\r\n    }\r\n  // legacy write(string, encoding, offset, length) - remove in v0.13\r\n  } else {\r\n    throw new Error(\r\n      \'Buffer.write(string, encoding, offset[, length]) is no longer supported\'\r\n    )\r\n  }\r\n\r\n  var remaining = this.length - offset\r\n  if (length === undefined || length > remaining) length = remaining\r\n\r\n  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {\r\n    throw new RangeError(\'Attempt to write outside buffer bounds\')\r\n  }\r\n\r\n  if (!encoding) encoding = \'utf8\'\r\n\r\n  var loweredCase = false\r\n  for (;;) {\r\n    switch (encoding) {\r\n      case \'hex\':\r\n        return hexWrite(this, string, offset, length)\r\n\r\n      case \'utf8\':\r\n      case \'utf-8\':\r\n        return utf8Write(this, string, offset, length)\r\n\r\n      case \'ascii\':\r\n        return asciiWrite(this, string, offset, length)\r\n\r\n      case \'latin1\':\r\n      case \'binary\':\r\n        return latin1Write(this, string, offset, length)\r\n\r\n      case \'base64\':\r\n        // Warning: maxLength not taken into account in base64Write\r\n        return base64Write(this, string, offset, length)\r\n\r\n      case \'ucs2\':\r\n      case \'ucs-2\':\r\n      case \'utf16le\':\r\n      case \'utf-16le\':\r\n        return ucs2Write(this, string, offset, length)\r\n\r\n      default:\r\n        if (loweredCase) throw new TypeError(\'Unknown encoding: \' + encoding)\r\n        encoding = (\'\' + encoding).toLowerCase()\r\n        loweredCase = true\r\n    }\r\n  }\r\n}\r\n\r\nBuffer.prototype.toJSON = function toJSON () {\r\n  return {\r\n    type: \'Buffer\',\r\n    data: Array.prototype.slice.call(this._arr || this, 0)\r\n  }\r\n}\r\n\r\nfunction base64Slice (buf, start, end) {\r\n  if (start === 0 && end === buf.length) {\r\n    return base64.fromByteArray(buf)\r\n  } else {\r\n    return base64.fromByteArray(buf.slice(start, end))\r\n  }\r\n}\r\n\r\nfunction utf8Slice (buf, start, end) {\r\n  end = Math.min(buf.length, end)\r\n  var res = []\r\n\r\n  var i = start\r\n  while (i < end) {\r\n    var firstByte = buf[i]\r\n    var codePoint = null\r\n    var bytesPerSequence = (firstByte > 0xEF) ? 4\r\n      : (firstByte > 0xDF) ? 3\r\n      : (firstByte > 0xBF) ? 2\r\n      : 1\r\n\r\n    if (i + bytesPerSequence <= end) {\r\n      var secondByte, thirdByte, fourthByte, tempCodePoint\r\n\r\n      switch (bytesPerSequence) {\r\n        case 1:\r\n          if (firstByte < 0x80) {\r\n            codePoint = firstByte\r\n          }\r\n          break\r\n        case 2:\r\n          secondByte = buf[i + 1]\r\n          if ((secondByte & 0xC0) === 0x80) {\r\n            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)\r\n            if (tempCodePoint > 0x7F) {\r\n              codePoint = tempCodePoint\r\n            }\r\n          }\r\n          break\r\n        case 3:\r\n          secondByte = buf[i + 1]\r\n          thirdByte = buf[i + 2]\r\n          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {\r\n            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)\r\n            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {\r\n              codePoint = tempCodePoint\r\n            }\r\n          }\r\n          break\r\n        case 4:\r\n          secondByte = buf[i + 1]\r\n          thirdByte = buf[i + 2]\r\n          fourthByte = buf[i + 3]\r\n          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {\r\n            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)\r\n            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {\r\n              codePoint = tempCodePoint\r\n            }\r\n          }\r\n      }\r\n    }\r\n\r\n    if (codePoint === null) {\r\n      // we did not generate a valid codePoint so insert a\r\n      // replacement char (U+FFFD) and advance only 1 byte\r\n      codePoint = 0xFFFD\r\n      bytesPerSequence = 1\r\n    } else if (codePoint > 0xFFFF) {\r\n      // encode to utf16 (surrogate pair dance)\r\n      codePoint -= 0x10000\r\n      res.push(codePoint >>> 10 & 0x3FF | 0xD800)\r\n      codePoint = 0xDC00 | codePoint & 0x3FF\r\n    }\r\n\r\n    res.push(codePoint)\r\n    i += bytesPerSequence\r\n  }\r\n\r\n  return decodeCodePointsArray(res)\r\n}\r\n\r\n// Based on http://stackoverflow.com/a/22747272/680742, the browser with\r\n// the lowest limit is Chrome, with 0x10000 args.\r\n// We go 1 magnitude less, for safety\r\nvar MAX_ARGUMENTS_LENGTH = 0x1000\r\n\r\nfunction decodeCodePointsArray (codePoints) {\r\n  var len = codePoints.length\r\n  if (len <= MAX_ARGUMENTS_LENGTH) {\r\n    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()\r\n  }\r\n\r\n  // Decode in chunks to avoid "call stack size exceeded".\r\n  var res = \'\'\r\n  var i = 0\r\n  while (i < len) {\r\n    res += String.fromCharCode.apply(\r\n      String,\r\n      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)\r\n    )\r\n  }\r\n  return res\r\n}\r\n\r\nfunction asciiSlice (buf, start, end) {\r\n  var ret = \'\'\r\n  end = Math.min(buf.length, end)\r\n\r\n  for (var i = start; i < end; ++i) {\r\n    ret += String.fromCharCode(buf[i] & 0x7F)\r\n  }\r\n  return ret\r\n}\r\n\r\nfunction latin1Slice (buf, start, end) {\r\n  var ret = \'\'\r\n  end = Math.min(buf.length, end)\r\n\r\n  for (var i = start; i < end; ++i) {\r\n    ret += String.fromCharCode(buf[i])\r\n  }\r\n  return ret\r\n}\r\n\r\nfunction hexSlice (buf, start, end) {\r\n  var len = buf.length\r\n\r\n  if (!start || start < 0) start = 0\r\n  if (!end || end < 0 || end > len) end = len\r\n\r\n  var out = \'\'\r\n  for (var i = start; i < end; ++i) {\r\n    out += toHex(buf[i])\r\n  }\r\n  return out\r\n}\r\n\r\nfunction utf16leSlice (buf, start, end) {\r\n  var bytes = buf.slice(start, end)\r\n  var res = \'\'\r\n  for (var i = 0; i < bytes.length; i += 2) {\r\n    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)\r\n  }\r\n  return res\r\n}\r\n\r\nBuffer.prototype.slice = function slice (start, end) {\r\n  var len = this.length\r\n  start = ~~start\r\n  end = end === undefined ? len : ~~end\r\n\r\n  if (start < 0) {\r\n    start += len\r\n    if (start < 0) start = 0\r\n  } else if (start > len) {\r\n    start = len\r\n  }\r\n\r\n  if (end < 0) {\r\n    end += len\r\n    if (end < 0) end = 0\r\n  } else if (end > len) {\r\n    end = len\r\n  }\r\n\r\n  if (end < start) end = start\r\n\r\n  var newBuf\r\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\r\n    newBuf = this.subarray(start, end)\r\n    newBuf.__proto__ = Buffer.prototype\r\n  } else {\r\n    var sliceLen = end - start\r\n    newBuf = new Buffer(sliceLen, undefined)\r\n    for (var i = 0; i < sliceLen; ++i) {\r\n      newBuf[i] = this[i + start]\r\n    }\r\n  }\r\n\r\n  return newBuf\r\n}\r\n\r\n/*\r\n * Need to make sure that buffer isn\'t trying to write out of bounds.\r\n */\r\nfunction checkOffset (offset, ext, length) {\r\n  if ((offset % 1) !== 0 || offset < 0) throw new RangeError(\'offset is not uint\')\r\n  if (offset + ext > length) throw new RangeError(\'Trying to access beyond buffer length\')\r\n}\r\n\r\nBuffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {\r\n  offset = offset | 0\r\n  byteLength = byteLength | 0\r\n  if (!noAssert) checkOffset(offset, byteLength, this.length)\r\n\r\n  var val = this[offset]\r\n  var mul = 1\r\n  var i = 0\r\n  while (++i < byteLength && (mul *= 0x100)) {\r\n    val += this[offset + i] * mul\r\n  }\r\n\r\n  return val\r\n}\r\n\r\nBuffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {\r\n  offset = offset | 0\r\n  byteLength = byteLength | 0\r\n  if (!noAssert) {\r\n    checkOffset(offset, byteLength, this.length)\r\n  }\r\n\r\n  var val = this[offset + --byteLength]\r\n  var mul = 1\r\n  while (byteLength > 0 && (mul *= 0x100)) {\r\n    val += this[offset + --byteLength] * mul\r\n  }\r\n\r\n  return val\r\n}\r\n\r\nBuffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {\r\n  if (!noAssert) checkOffset(offset, 1, this.length)\r\n  return this[offset]\r\n}\r\n\r\nBuffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {\r\n  if (!noAssert) checkOffset(offset, 2, this.length)\r\n  return this[offset] | (this[offset + 1] << 8)\r\n}\r\n\r\nBuffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {\r\n  if (!noAssert) checkOffset(offset, 2, this.length)\r\n  return (this[offset] << 8) | this[offset + 1]\r\n}\r\n\r\nBuffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {\r\n  if (!noAssert) checkOffset(offset, 4, this.length)\r\n\r\n  return ((this[offset]) |\r\n      (this[offset + 1] << 8) |\r\n      (this[offset + 2] << 16)) +\r\n      (this[offset + 3] * 0x1000000)\r\n}\r\n\r\nBuffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {\r\n  if (!noAssert) checkOffset(offset, 4, this.length)\r\n\r\n  return (this[offset] * 0x1000000) +\r\n    ((this[offset + 1] << 16) |\r\n    (this[offset + 2] << 8) |\r\n    this[offset + 3])\r\n}\r\n\r\nBuffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {\r\n  offset = offset | 0\r\n  byteLength = byteLength | 0\r\n  if (!noAssert) checkOffset(offset, byteLength, this.length)\r\n\r\n  var val = this[offset]\r\n  var mul = 1\r\n  var i = 0\r\n  while (++i < byteLength && (mul *= 0x100)) {\r\n    val += this[offset + i] * mul\r\n  }\r\n  mul *= 0x80\r\n\r\n  if (val >= mul) val -= Math.pow(2, 8 * byteLength)\r\n\r\n  return val\r\n}\r\n\r\nBuffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {\r\n  offset = offset | 0\r\n  byteLength = byteLength | 0\r\n  if (!noAssert) checkOffset(offset, byteLength, this.length)\r\n\r\n  var i = byteLength\r\n  var mul = 1\r\n  var val = this[offset + --i]\r\n  while (i > 0 && (mul *= 0x100)) {\r\n    val += this[offset + --i] * mul\r\n  }\r\n  mul *= 0x80\r\n\r\n  if (val >= mul) val -= Math.pow(2, 8 * byteLength)\r\n\r\n  return val\r\n}\r\n\r\nBuffer.prototype.readInt8 = function readInt8 (offset, noAssert) {\r\n  if (!noAssert) checkOffset(offset, 1, this.length)\r\n  if (!(this[offset] & 0x80)) return (this[offset])\r\n  return ((0xff - this[offset] + 1) * -1)\r\n}\r\n\r\nBuffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {\r\n  if (!noAssert) checkOffset(offset, 2, this.length)\r\n  var val = this[offset] | (this[offset + 1] << 8)\r\n  return (val & 0x8000) ? val | 0xFFFF0000 : val\r\n}\r\n\r\nBuffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {\r\n  if (!noAssert) checkOffset(offset, 2, this.length)\r\n  var val = this[offset + 1] | (this[offset] << 8)\r\n  return (val & 0x8000) ? val | 0xFFFF0000 : val\r\n}\r\n\r\nBuffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {\r\n  if (!noAssert) checkOffset(offset, 4, this.length)\r\n\r\n  return (this[offset]) |\r\n    (this[offset + 1] << 8) |\r\n    (this[offset + 2] << 16) |\r\n    (this[offset + 3] << 24)\r\n}\r\n\r\nBuffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {\r\n  if (!noAssert) checkOffset(offset, 4, this.length)\r\n\r\n  return (this[offset] << 24) |\r\n    (this[offset + 1] << 16) |\r\n    (this[offset + 2] << 8) |\r\n    (this[offset + 3])\r\n}\r\n\r\nBuffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {\r\n  if (!noAssert) checkOffset(offset, 4, this.length)\r\n  return ieee754.read(this, offset, true, 23, 4)\r\n}\r\n\r\nBuffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {\r\n  if (!noAssert) checkOffset(offset, 4, this.length)\r\n  return ieee754.read(this, offset, false, 23, 4)\r\n}\r\n\r\nBuffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {\r\n  if (!noAssert) checkOffset(offset, 8, this.length)\r\n  return ieee754.read(this, offset, true, 52, 8)\r\n}\r\n\r\nBuffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {\r\n  if (!noAssert) checkOffset(offset, 8, this.length)\r\n  return ieee754.read(this, offset, false, 52, 8)\r\n}\r\n\r\nfunction checkInt (buf, value, offset, ext, max, min) {\r\n  if (!Buffer.isBuffer(buf)) throw new TypeError(\'"buffer" argument must be a Buffer instance\')\r\n  if (value > max || value < min) throw new RangeError(\'"value" argument is out of bounds\')\r\n  if (offset + ext > buf.length) throw new RangeError(\'Index out of range\')\r\n}\r\n\r\nBuffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {\r\n  value = +value\r\n  offset = offset | 0\r\n  byteLength = byteLength | 0\r\n  if (!noAssert) {\r\n    var maxBytes = Math.pow(2, 8 * byteLength) - 1\r\n    checkInt(this, value, offset, byteLength, maxBytes, 0)\r\n  }\r\n\r\n  var mul = 1\r\n  var i = 0\r\n  this[offset] = value & 0xFF\r\n  while (++i < byteLength && (mul *= 0x100)) {\r\n    this[offset + i] = (value / mul) & 0xFF\r\n  }\r\n\r\n  return offset + byteLength\r\n}\r\n\r\nBuffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {\r\n  value = +value\r\n  offset = offset | 0\r\n  byteLength = byteLength | 0\r\n  if (!noAssert) {\r\n    var maxBytes = Math.pow(2, 8 * byteLength) - 1\r\n    checkInt(this, value, offset, byteLength, maxBytes, 0)\r\n  }\r\n\r\n  var i = byteLength - 1\r\n  var mul = 1\r\n  this[offset + i] = value & 0xFF\r\n  while (--i >= 0 && (mul *= 0x100)) {\r\n    this[offset + i] = (value / mul) & 0xFF\r\n  }\r\n\r\n  return offset + byteLength\r\n}\r\n\r\nBuffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {\r\n  value = +value\r\n  offset = offset | 0\r\n  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)\r\n  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)\r\n  this[offset] = (value & 0xff)\r\n  return offset + 1\r\n}\r\n\r\nfunction objectWriteUInt16 (buf, value, offset, littleEndian) {\r\n  if (value < 0) value = 0xffff + value + 1\r\n  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {\r\n    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>\r\n      (littleEndian ? i : 1 - i) * 8\r\n  }\r\n}\r\n\r\nBuffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {\r\n  value = +value\r\n  offset = offset | 0\r\n  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)\r\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\r\n    this[offset] = (value & 0xff)\r\n    this[offset + 1] = (value >>> 8)\r\n  } else {\r\n    objectWriteUInt16(this, value, offset, true)\r\n  }\r\n  return offset + 2\r\n}\r\n\r\nBuffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {\r\n  value = +value\r\n  offset = offset | 0\r\n  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)\r\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\r\n    this[offset] = (value >>> 8)\r\n    this[offset + 1] = (value & 0xff)\r\n  } else {\r\n    objectWriteUInt16(this, value, offset, false)\r\n  }\r\n  return offset + 2\r\n}\r\n\r\nfunction objectWriteUInt32 (buf, value, offset, littleEndian) {\r\n  if (value < 0) value = 0xffffffff + value + 1\r\n  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {\r\n    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff\r\n  }\r\n}\r\n\r\nBuffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {\r\n  value = +value\r\n  offset = offset | 0\r\n  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)\r\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\r\n    this[offset + 3] = (value >>> 24)\r\n    this[offset + 2] = (value >>> 16)\r\n    this[offset + 1] = (value >>> 8)\r\n    this[offset] = (value & 0xff)\r\n  } else {\r\n    objectWriteUInt32(this, value, offset, true)\r\n  }\r\n  return offset + 4\r\n}\r\n\r\nBuffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {\r\n  value = +value\r\n  offset = offset | 0\r\n  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)\r\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\r\n    this[offset] = (value >>> 24)\r\n    this[offset + 1] = (value >>> 16)\r\n    this[offset + 2] = (value >>> 8)\r\n    this[offset + 3] = (value & 0xff)\r\n  } else {\r\n    objectWriteUInt32(this, value, offset, false)\r\n  }\r\n  return offset + 4\r\n}\r\n\r\nBuffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {\r\n  value = +value\r\n  offset = offset | 0\r\n  if (!noAssert) {\r\n    var limit = Math.pow(2, 8 * byteLength - 1)\r\n\r\n    checkInt(this, value, offset, byteLength, limit - 1, -limit)\r\n  }\r\n\r\n  var i = 0\r\n  var mul = 1\r\n  var sub = 0\r\n  this[offset] = value & 0xFF\r\n  while (++i < byteLength && (mul *= 0x100)) {\r\n    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {\r\n      sub = 1\r\n    }\r\n    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF\r\n  }\r\n\r\n  return offset + byteLength\r\n}\r\n\r\nBuffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {\r\n  value = +value\r\n  offset = offset | 0\r\n  if (!noAssert) {\r\n    var limit = Math.pow(2, 8 * byteLength - 1)\r\n\r\n    checkInt(this, value, offset, byteLength, limit - 1, -limit)\r\n  }\r\n\r\n  var i = byteLength - 1\r\n  var mul = 1\r\n  var sub = 0\r\n  this[offset + i] = value & 0xFF\r\n  while (--i >= 0 && (mul *= 0x100)) {\r\n    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {\r\n      sub = 1\r\n    }\r\n    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF\r\n  }\r\n\r\n  return offset + byteLength\r\n}\r\n\r\nBuffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {\r\n  value = +value\r\n  offset = offset | 0\r\n  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)\r\n  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)\r\n  if (value < 0) value = 0xff + value + 1\r\n  this[offset] = (value & 0xff)\r\n  return offset + 1\r\n}\r\n\r\nBuffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {\r\n  value = +value\r\n  offset = offset | 0\r\n  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)\r\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\r\n    this[offset] = (value & 0xff)\r\n    this[offset + 1] = (value >>> 8)\r\n  } else {\r\n    objectWriteUInt16(this, value, offset, true)\r\n  }\r\n  return offset + 2\r\n}\r\n\r\nBuffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {\r\n  value = +value\r\n  offset = offset | 0\r\n  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)\r\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\r\n    this[offset] = (value >>> 8)\r\n    this[offset + 1] = (value & 0xff)\r\n  } else {\r\n    objectWriteUInt16(this, value, offset, false)\r\n  }\r\n  return offset + 2\r\n}\r\n\r\nBuffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {\r\n  value = +value\r\n  offset = offset | 0\r\n  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)\r\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\r\n    this[offset] = (value & 0xff)\r\n    this[offset + 1] = (value >>> 8)\r\n    this[offset + 2] = (value >>> 16)\r\n    this[offset + 3] = (value >>> 24)\r\n  } else {\r\n    objectWriteUInt32(this, value, offset, true)\r\n  }\r\n  return offset + 4\r\n}\r\n\r\nBuffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {\r\n  value = +value\r\n  offset = offset | 0\r\n  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)\r\n  if (value < 0) value = 0xffffffff + value + 1\r\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\r\n    this[offset] = (value >>> 24)\r\n    this[offset + 1] = (value >>> 16)\r\n    this[offset + 2] = (value >>> 8)\r\n    this[offset + 3] = (value & 0xff)\r\n  } else {\r\n    objectWriteUInt32(this, value, offset, false)\r\n  }\r\n  return offset + 4\r\n}\r\n\r\nfunction checkIEEE754 (buf, value, offset, ext, max, min) {\r\n  if (offset + ext > buf.length) throw new RangeError(\'Index out of range\')\r\n  if (offset < 0) throw new RangeError(\'Index out of range\')\r\n}\r\n\r\nfunction writeFloat (buf, value, offset, littleEndian, noAssert) {\r\n  if (!noAssert) {\r\n    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)\r\n  }\r\n  ieee754.write(buf, value, offset, littleEndian, 23, 4)\r\n  return offset + 4\r\n}\r\n\r\nBuffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {\r\n  return writeFloat(this, value, offset, true, noAssert)\r\n}\r\n\r\nBuffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {\r\n  return writeFloat(this, value, offset, false, noAssert)\r\n}\r\n\r\nfunction writeDouble (buf, value, offset, littleEndian, noAssert) {\r\n  if (!noAssert) {\r\n    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)\r\n  }\r\n  ieee754.write(buf, value, offset, littleEndian, 52, 8)\r\n  return offset + 8\r\n}\r\n\r\nBuffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {\r\n  return writeDouble(this, value, offset, true, noAssert)\r\n}\r\n\r\nBuffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {\r\n  return writeDouble(this, value, offset, false, noAssert)\r\n}\r\n\r\n// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)\r\nBuffer.prototype.copy = function copy (target, targetStart, start, end) {\r\n  if (!start) start = 0\r\n  if (!end && end !== 0) end = this.length\r\n  if (targetStart >= target.length) targetStart = target.length\r\n  if (!targetStart) targetStart = 0\r\n  if (end > 0 && end < start) end = start\r\n\r\n  // Copy 0 bytes; we\'re done\r\n  if (end === start) return 0\r\n  if (target.length === 0 || this.length === 0) return 0\r\n\r\n  // Fatal error conditions\r\n  if (targetStart < 0) {\r\n    throw new RangeError(\'targetStart out of bounds\')\r\n  }\r\n  if (start < 0 || start >= this.length) throw new RangeError(\'sourceStart out of bounds\')\r\n  if (end < 0) throw new RangeError(\'sourceEnd out of bounds\')\r\n\r\n  // Are we oob?\r\n  if (end > this.length) end = this.length\r\n  if (target.length - targetStart < end - start) {\r\n    end = target.length - targetStart + start\r\n  }\r\n\r\n  var len = end - start\r\n  var i\r\n\r\n  if (this === target && start < targetStart && targetStart < end) {\r\n    // descending copy from end\r\n    for (i = len - 1; i >= 0; --i) {\r\n      target[i + targetStart] = this[i + start]\r\n    }\r\n  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {\r\n    // ascending copy from start\r\n    for (i = 0; i < len; ++i) {\r\n      target[i + targetStart] = this[i + start]\r\n    }\r\n  } else {\r\n    Uint8Array.prototype.set.call(\r\n      target,\r\n      this.subarray(start, start + len),\r\n      targetStart\r\n    )\r\n  }\r\n\r\n  return len\r\n}\r\n\r\n// Usage:\r\n//    buffer.fill(number[, offset[, end]])\r\n//    buffer.fill(buffer[, offset[, end]])\r\n//    buffer.fill(string[, offset[, end]][, encoding])\r\nBuffer.prototype.fill = function fill (val, start, end, encoding) {\r\n  // Handle string cases:\r\n  if (typeof val === \'string\') {\r\n    if (typeof start === \'string\') {\r\n      encoding = start\r\n      start = 0\r\n      end = this.length\r\n    } else if (typeof end === \'string\') {\r\n      encoding = end\r\n      end = this.length\r\n    }\r\n    if (val.length === 1) {\r\n      var code = val.charCodeAt(0)\r\n      if (code < 256) {\r\n        val = code\r\n      }\r\n    }\r\n    if (encoding !== undefined && typeof encoding !== \'string\') {\r\n      throw new TypeError(\'encoding must be a string\')\r\n    }\r\n    if (typeof encoding === \'string\' && !Buffer.isEncoding(encoding)) {\r\n      throw new TypeError(\'Unknown encoding: \' + encoding)\r\n    }\r\n  } else if (typeof val === \'number\') {\r\n    val = val & 255\r\n  }\r\n\r\n  // Invalid ranges are not set to a default, so can range check early.\r\n  if (start < 0 || this.length < start || this.length < end) {\r\n    throw new RangeError(\'Out of range index\')\r\n  }\r\n\r\n  if (end <= start) {\r\n    return this\r\n  }\r\n\r\n  start = start >>> 0\r\n  end = end === undefined ? this.length : end >>> 0\r\n\r\n  if (!val) val = 0\r\n\r\n  var i\r\n  if (typeof val === \'number\') {\r\n    for (i = start; i < end; ++i) {\r\n      this[i] = val\r\n    }\r\n  } else {\r\n    var bytes = Buffer.isBuffer(val)\r\n      ? val\r\n      : utf8ToBytes(new Buffer(val, encoding).toString())\r\n    var len = bytes.length\r\n    for (i = 0; i < end - start; ++i) {\r\n      this[i + start] = bytes[i % len]\r\n    }\r\n  }\r\n\r\n  return this\r\n}\r\n\r\n// HELPER FUNCTIONS\r\n// ================\r\n\r\nvar INVALID_BASE64_RE = /[^+\\/0-9A-Za-z-_]/g\r\n\r\nfunction base64clean (str) {\r\n  // Node strips out invalid characters like \\n and \\t from the string, base64-js does not\r\n  str = stringtrim(str).replace(INVALID_BASE64_RE, \'\')\r\n  // Node converts strings with length < 2 to \'\'\r\n  if (str.length < 2) return \'\'\r\n  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not\r\n  while (str.length % 4 !== 0) {\r\n    str = str + \'=\'\r\n  }\r\n  return str\r\n}\r\n\r\nfunction stringtrim (str) {\r\n  if (str.trim) return str.trim()\r\n  return str.replace(/^\\s+|\\s+$/g, \'\')\r\n}\r\n\r\nfunction toHex (n) {\r\n  if (n < 16) return \'0\' + n.toString(16)\r\n  return n.toString(16)\r\n}\r\n\r\nfunction utf8ToBytes (string, units) {\r\n  units = units || Infinity\r\n  var codePoint\r\n  var length = string.length\r\n  var leadSurrogate = null\r\n  var bytes = []\r\n\r\n  for (var i = 0; i < length; ++i) {\r\n    codePoint = string.charCodeAt(i)\r\n\r\n    // is surrogate component\r\n    if (codePoint > 0xD7FF && codePoint < 0xE000) {\r\n      // last char was a lead\r\n      if (!leadSurrogate) {\r\n        // no lead yet\r\n        if (codePoint > 0xDBFF) {\r\n          // unexpected trail\r\n          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)\r\n          continue\r\n        } else if (i + 1 === length) {\r\n          // unpaired lead\r\n          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)\r\n          continue\r\n        }\r\n\r\n        // valid lead\r\n        leadSurrogate = codePoint\r\n\r\n        continue\r\n      }\r\n\r\n      // 2 leads in a row\r\n      if (codePoint < 0xDC00) {\r\n        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)\r\n        leadSurrogate = codePoint\r\n        continue\r\n      }\r\n\r\n      // valid surrogate pair\r\n      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000\r\n    } else if (leadSurrogate) {\r\n      // valid bmp char, but last char was a lead\r\n      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)\r\n    }\r\n\r\n    leadSurrogate = null\r\n\r\n    // encode utf8\r\n    if (codePoint < 0x80) {\r\n      if ((units -= 1) < 0) break\r\n      bytes.push(codePoint)\r\n    } else if (codePoint < 0x800) {\r\n      if ((units -= 2) < 0) break\r\n      bytes.push(\r\n        codePoint >> 0x6 | 0xC0,\r\n        codePoint & 0x3F | 0x80\r\n      )\r\n    } else if (codePoint < 0x10000) {\r\n      if ((units -= 3) < 0) break\r\n      bytes.push(\r\n        codePoint >> 0xC | 0xE0,\r\n        codePoint >> 0x6 & 0x3F | 0x80,\r\n        codePoint & 0x3F | 0x80\r\n      )\r\n    } else if (codePoint < 0x110000) {\r\n      if ((units -= 4) < 0) break\r\n      bytes.push(\r\n        codePoint >> 0x12 | 0xF0,\r\n        codePoint >> 0xC & 0x3F | 0x80,\r\n        codePoint >> 0x6 & 0x3F | 0x80,\r\n        codePoint & 0x3F | 0x80\r\n      )\r\n    } else {\r\n      throw new Error(\'Invalid code point\')\r\n    }\r\n  }\r\n\r\n  return bytes\r\n}\r\n\r\nfunction asciiToBytes (str) {\r\n  var byteArray = []\r\n  for (var i = 0; i < str.length; ++i) {\r\n    // Node\'s code seems to be doing this and not & 0x7F..\r\n    byteArray.push(str.charCodeAt(i) & 0xFF)\r\n  }\r\n  return byteArray\r\n}\r\n\r\nfunction utf16leToBytes (str, units) {\r\n  var c, hi, lo\r\n  var byteArray = []\r\n  for (var i = 0; i < str.length; ++i) {\r\n    if ((units -= 2) < 0) break\r\n\r\n    c = str.charCodeAt(i)\r\n    hi = c >> 8\r\n    lo = c % 256\r\n    byteArray.push(lo)\r\n    byteArray.push(hi)\r\n  }\r\n\r\n  return byteArray\r\n}\r\n\r\nfunction base64ToBytes (str) {\r\n  return base64.toByteArray(base64clean(str))\r\n}\r\n\r\nfunction blitBuffer (src, dst, offset, length) {\r\n  for (var i = 0; i < length; ++i) {\r\n    if ((i + offset >= dst.length) || (i >= src.length)) break\r\n    dst[i + offset] = src[i]\r\n  }\r\n  return i\r\n}\r\n\r\nfunction isnan (val) {\r\n  return val !== val // eslint-disable-line no-self-compare\r\n}\r\n\r\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))\r\n\r\n/***/ }),\r\n/* 5 */\r\n/***/ (function(module, exports) {\r\n\r\n// shim for using process in browser\r\nvar process = module.exports = {};\r\n\r\n// cached from whatever global is present so that test runners that stub it\r\n// don\'t break things.  But we need to wrap it in a try catch in case it is\r\n// wrapped in strict mode code which doesn\'t define any globals.  It\'s inside a\r\n// function because try/catches deoptimize in certain engines.\r\n\r\nvar cachedSetTimeout;\r\nvar cachedClearTimeout;\r\n\r\nfunction defaultSetTimout() {\r\n    throw new Error(\'setTimeout has not been defined\');\r\n}\r\nfunction defaultClearTimeout () {\r\n    throw new Error(\'clearTimeout has not been defined\');\r\n}\r\n(function () {\r\n    try {\r\n        if (typeof setTimeout === \'function\') {\r\n            cachedSetTimeout = setTimeout;\r\n        } else {\r\n            cachedSetTimeout = defaultSetTimout;\r\n        }\r\n    } catch (e) {\r\n        cachedSetTimeout = defaultSetTimout;\r\n    }\r\n    try {\r\n        if (typeof clearTimeout === \'function\') {\r\n            cachedClearTimeout = clearTimeout;\r\n        } else {\r\n            cachedClearTimeout = defaultClearTimeout;\r\n        }\r\n    } catch (e) {\r\n        cachedClearTimeout = defaultClearTimeout;\r\n    }\r\n} ())\r\nfunction runTimeout(fun) {\r\n    if (cachedSetTimeout === setTimeout) {\r\n        //normal enviroments in sane situations\r\n        return setTimeout(fun, 0);\r\n    }\r\n    // if setTimeout wasn\'t available but was latter defined\r\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\r\n        cachedSetTimeout = setTimeout;\r\n        return setTimeout(fun, 0);\r\n    }\r\n    try {\r\n        // when when somebody has screwed with setTimeout but no I.E. maddness\r\n        return cachedSetTimeout(fun, 0);\r\n    } catch(e){\r\n        try {\r\n            // When we are in I.E. but the script has been evaled so I.E. doesn\'t trust the global object when called normally\r\n            return cachedSetTimeout.call(null, fun, 0);\r\n        } catch(e){\r\n            // same as above but when it\'s a version of I.E. that must have the global object for \'this\', hopfully our context correct otherwise it will throw a global error\r\n            return cachedSetTimeout.call(this, fun, 0);\r\n        }\r\n    }\r\n\r\n\r\n}\r\nfunction runClearTimeout(marker) {\r\n    if (cachedClearTimeout === clearTimeout) {\r\n        //normal enviroments in sane situations\r\n        return clearTimeout(marker);\r\n    }\r\n    // if clearTimeout wasn\'t available but was latter defined\r\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\r\n        cachedClearTimeout = clearTimeout;\r\n        return clearTimeout(marker);\r\n    }\r\n    try {\r\n        // when when somebody has screwed with setTimeout but no I.E. maddness\r\n        return cachedClearTimeout(marker);\r\n    } catch (e){\r\n        try {\r\n            // When we are in I.E. but the script has been evaled so I.E. doesn\'t  trust the global object when called normally\r\n            return cachedClearTimeout.call(null, marker);\r\n        } catch (e){\r\n            // same as above but when it\'s a version of I.E. that must have the global object for \'this\', hopfully our context correct otherwise it will throw a global error.\r\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\r\n            return cachedClearTimeout.call(this, marker);\r\n        }\r\n    }\r\n\r\n\r\n\r\n}\r\nvar queue = [];\r\nvar draining = false;\r\nvar currentQueue;\r\nvar queueIndex = -1;\r\n\r\nfunction cleanUpNextTick() {\r\n    if (!draining || !currentQueue) {\r\n        return;\r\n    }\r\n    draining = false;\r\n    if (currentQueue.length) {\r\n        queue = currentQueue.concat(queue);\r\n    } else {\r\n        queueIndex = -1;\r\n    }\r\n    if (queue.length) {\r\n        drainQueue();\r\n    }\r\n}\r\n\r\nfunction drainQueue() {\r\n    if (draining) {\r\n        return;\r\n    }\r\n    var timeout = runTimeout(cleanUpNextTick);\r\n    draining = true;\r\n\r\n    var len = queue.length;\r\n    while(len) {\r\n        currentQueue = queue;\r\n        queue = [];\r\n        while (++queueIndex < len) {\r\n            if (currentQueue) {\r\n                currentQueue[queueIndex].run();\r\n            }\r\n        }\r\n        queueIndex = -1;\r\n        len = queue.length;\r\n    }\r\n    currentQueue = null;\r\n    draining = false;\r\n    runClearTimeout(timeout);\r\n}\r\n\r\nprocess.nextTick = function (fun) {\r\n    var args = new Array(arguments.length - 1);\r\n    if (arguments.length > 1) {\r\n        for (var i = 1; i < arguments.length; i++) {\r\n            args[i - 1] = arguments[i];\r\n        }\r\n    }\r\n    queue.push(new Item(fun, args));\r\n    if (queue.length === 1 && !draining) {\r\n        runTimeout(drainQueue);\r\n    }\r\n};\r\n\r\n// v8 likes predictible objects\r\nfunction Item(fun, array) {\r\n    this.fun = fun;\r\n    this.array = array;\r\n}\r\nItem.prototype.run = function () {\r\n    this.fun.apply(null, this.array);\r\n};\r\nprocess.title = \'browser\';\r\nprocess.browser = true;\r\nprocess.env = {};\r\nprocess.argv = [];\r\nprocess.version = \'\'; // empty string to avoid regexp issues\r\nprocess.versions = {};\r\n\r\nfunction noop() {}\r\n\r\nprocess.on = noop;\r\nprocess.addListener = noop;\r\nprocess.once = noop;\r\nprocess.off = noop;\r\nprocess.removeListener = noop;\r\nprocess.removeAllListeners = noop;\r\nprocess.emit = noop;\r\nprocess.prependListener = noop;\r\nprocess.prependOnceListener = noop;\r\n\r\nprocess.listeners = function (name) { return [] }\r\n\r\nprocess.binding = function (name) {\r\n    throw new Error(\'process.binding is not supported\');\r\n};\r\n\r\nprocess.cwd = function () { return \'/\' };\r\nprocess.chdir = function (dir) {\r\n    throw new Error(\'process.chdir is not supported\');\r\n};\r\nprocess.umask = function() { return 0; };\r\n\r\n\r\n/***/ }),\r\n/* 6 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\n"use strict";\r\n/* WEBPACK VAR INJECTION */(function(process) {\r\n\r\nif (!process.version ||\r\n    process.version.indexOf(\'v0.\') === 0 ||\r\n    process.version.indexOf(\'v1.\') === 0 && process.version.indexOf(\'v1.8.\') !== 0) {\r\n  module.exports = nextTick;\r\n} else {\r\n  module.exports = process.nextTick;\r\n}\r\n\r\nfunction nextTick(fn, arg1, arg2, arg3) {\r\n  if (typeof fn !== \'function\') {\r\n    throw new TypeError(\'"callback" argument must be a function\');\r\n  }\r\n  var len = arguments.length;\r\n  var args, i;\r\n  switch (len) {\r\n  case 0:\r\n  case 1:\r\n    return process.nextTick(fn);\r\n  case 2:\r\n    return process.nextTick(function afterTickOne() {\r\n      fn.call(null, arg1);\r\n    });\r\n  case 3:\r\n    return process.nextTick(function afterTickTwo() {\r\n      fn.call(null, arg1, arg2);\r\n    });\r\n  case 4:\r\n    return process.nextTick(function afterTickThree() {\r\n      fn.call(null, arg1, arg2, arg3);\r\n    });\r\n  default:\r\n    args = new Array(len - 1);\r\n    i = 0;\r\n    while (i < args.length) {\r\n      args[i++] = arguments[i];\r\n    }\r\n    return process.nextTick(function afterTick() {\r\n      fn.apply(null, args);\r\n    });\r\n  }\r\n}\r\n\r\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))\r\n\r\n/***/ }),\r\n/* 7 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\n/* eslint-disable node/no-deprecated-api */\r\nvar buffer = __webpack_require__(4)\r\nvar Buffer = buffer.Buffer\r\n\r\n// alternative to using Object.keys for old browsers\r\nfunction copyProps (src, dst) {\r\n  for (var key in src) {\r\n    dst[key] = src[key]\r\n  }\r\n}\r\nif (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {\r\n  module.exports = buffer\r\n} else {\r\n  // Copy properties from require(\'buffer\')\r\n  copyProps(buffer, exports)\r\n  exports.Buffer = SafeBuffer\r\n}\r\n\r\nfunction SafeBuffer (arg, encodingOrOffset, length) {\r\n  return Buffer(arg, encodingOrOffset, length)\r\n}\r\n\r\n// Copy static methods from Buffer\r\ncopyProps(Buffer, SafeBuffer)\r\n\r\nSafeBuffer.from = function (arg, encodingOrOffset, length) {\r\n  if (typeof arg === \'number\') {\r\n    throw new TypeError(\'Argument must not be a number\')\r\n  }\r\n  return Buffer(arg, encodingOrOffset, length)\r\n}\r\n\r\nSafeBuffer.alloc = function (size, fill, encoding) {\r\n  if (typeof size !== \'number\') {\r\n    throw new TypeError(\'Argument must be a number\')\r\n  }\r\n  var buf = Buffer(size)\r\n  if (fill !== undefined) {\r\n    if (typeof encoding === \'string\') {\r\n      buf.fill(fill, encoding)\r\n    } else {\r\n      buf.fill(fill)\r\n    }\r\n  } else {\r\n    buf.fill(0)\r\n  }\r\n  return buf\r\n}\r\n\r\nSafeBuffer.allocUnsafe = function (size) {\r\n  if (typeof size !== \'number\') {\r\n    throw new TypeError(\'Argument must be a number\')\r\n  }\r\n  return Buffer(size)\r\n}\r\n\r\nSafeBuffer.allocUnsafeSlow = function (size) {\r\n  if (typeof size !== \'number\') {\r\n    throw new TypeError(\'Argument must be a number\')\r\n  }\r\n  return buffer.SlowBuffer(size)\r\n}\r\n\r\n\r\n/***/ }),\r\n/* 8 */\r\n/***/ (function(module, exports) {\r\n\r\n// Copyright Joyent, Inc. and other Node contributors.\r\n//\r\n// Permission is hereby granted, free of charge, to any person obtaining a\r\n// copy of this software and associated documentation files (the\r\n// "Software"), to deal in the Software without restriction, including\r\n// without limitation the rights to use, copy, modify, merge, publish,\r\n// distribute, sublicense, and/or sell copies of the Software, and to permit\r\n// persons to whom the Software is furnished to do so, subject to the\r\n// following conditions:\r\n//\r\n// The above copyright notice and this permission notice shall be included\r\n// in all copies or substantial portions of the Software.\r\n//\r\n// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS\r\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\r\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\r\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\r\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\r\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\r\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\r\n\r\nfunction EventEmitter() {\r\n  this._events = this._events || {};\r\n  this._maxListeners = this._maxListeners || undefined;\r\n}\r\nmodule.exports = EventEmitter;\r\n\r\n// Backwards-compat with node 0.10.x\r\nEventEmitter.EventEmitter = EventEmitter;\r\n\r\nEventEmitter.prototype._events = undefined;\r\nEventEmitter.prototype._maxListeners = undefined;\r\n\r\n// By default EventEmitters will print a warning if more than 10 listeners are\r\n// added to it. This is a useful default which helps finding memory leaks.\r\nEventEmitter.defaultMaxListeners = 10;\r\n\r\n// Obviously not all Emitters should be limited to 10. This function allows\r\n// that to be increased. Set to zero for unlimited.\r\nEventEmitter.prototype.setMaxListeners = function(n) {\r\n  if (!isNumber(n) || n < 0 || isNaN(n))\r\n    throw TypeError(\'n must be a positive number\');\r\n  this._maxListeners = n;\r\n  return this;\r\n};\r\n\r\nEventEmitter.prototype.emit = function(type) {\r\n  var er, handler, len, args, i, listeners;\r\n\r\n  if (!this._events)\r\n    this._events = {};\r\n\r\n  // If there is no \'error\' event listener then throw.\r\n  if (type === \'error\') {\r\n    if (!this._events.error ||\r\n        (isObject(this._events.error) && !this._events.error.length)) {\r\n      er = arguments[1];\r\n      if (er instanceof Error) {\r\n        throw er; // Unhandled \'error\' event\r\n      } else {\r\n        // At least give some kind of context to the user\r\n        var err = new Error(\'Uncaught, unspecified "error" event. (\' + er + \')\');\r\n        err.context = er;\r\n        throw err;\r\n      }\r\n    }\r\n  }\r\n\r\n  handler = this._events[type];\r\n\r\n  if (isUndefined(handler))\r\n    return false;\r\n\r\n  if (isFunction(handler)) {\r\n    switch (arguments.length) {\r\n      // fast cases\r\n      case 1:\r\n        handler.call(this);\r\n        break;\r\n      case 2:\r\n        handler.call(this, arguments[1]);\r\n        break;\r\n      case 3:\r\n        handler.call(this, arguments[1], arguments[2]);\r\n        break;\r\n      // slower\r\n      default:\r\n        args = Array.prototype.slice.call(arguments, 1);\r\n        handler.apply(this, args);\r\n    }\r\n  } else if (isObject(handler)) {\r\n    args = Array.prototype.slice.call(arguments, 1);\r\n    listeners = handler.slice();\r\n    len = listeners.length;\r\n    for (i = 0; i < len; i++)\r\n      listeners[i].apply(this, args);\r\n  }\r\n\r\n  return true;\r\n};\r\n\r\nEventEmitter.prototype.addListener = function(type, listener) {\r\n  var m;\r\n\r\n  if (!isFunction(listener))\r\n    throw TypeError(\'listener must be a function\');\r\n\r\n  if (!this._events)\r\n    this._events = {};\r\n\r\n  // To avoid recursion in the case that type === "newListener"! Before\r\n  // adding it to the listeners, first emit "newListener".\r\n  if (this._events.newListener)\r\n    this.emit(\'newListener\', type,\r\n              isFunction(listener.listener) ?\r\n              listener.listener : listener);\r\n\r\n  if (!this._events[type])\r\n    // Optimize the case of one listener. Don\'t need the extra array object.\r\n    this._events[type] = listener;\r\n  else if (isObject(this._events[type]))\r\n    // If we\'ve already got an array, just append.\r\n    this._events[type].push(listener);\r\n  else\r\n    // Adding the second element, need to change to array.\r\n    this._events[type] = [this._events[type], listener];\r\n\r\n  // Check for listener leak\r\n  if (isObject(this._events[type]) && !this._events[type].warned) {\r\n    if (!isUndefined(this._maxListeners)) {\r\n      m = this._maxListeners;\r\n    } else {\r\n      m = EventEmitter.defaultMaxListeners;\r\n    }\r\n\r\n    if (m && m > 0 && this._events[type].length > m) {\r\n      this._events[type].warned = true;\r\n      console.error(\'(node) warning: possible EventEmitter memory \' +\r\n                    \'leak detected. %d listeners added. \' +\r\n                    \'Use emitter.setMaxListeners() to increase limit.\',\r\n                    this._events[type].length);\r\n      if (typeof console.trace === \'function\') {\r\n        // not supported in IE 10\r\n        console.trace();\r\n      }\r\n    }\r\n  }\r\n\r\n  return this;\r\n};\r\n\r\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\r\n\r\nEventEmitter.prototype.once = function(type, listener) {\r\n  if (!isFunction(listener))\r\n    throw TypeError(\'listener must be a function\');\r\n\r\n  var fired = false;\r\n\r\n  function g() {\r\n    this.removeListener(type, g);\r\n\r\n    if (!fired) {\r\n      fired = true;\r\n      listener.apply(this, arguments);\r\n    }\r\n  }\r\n\r\n  g.listener = listener;\r\n  this.on(type, g);\r\n\r\n  return this;\r\n};\r\n\r\n// emits a \'removeListener\' event iff the listener was removed\r\nEventEmitter.prototype.removeListener = function(type, listener) {\r\n  var list, position, length, i;\r\n\r\n  if (!isFunction(listener))\r\n    throw TypeError(\'listener must be a function\');\r\n\r\n  if (!this._events || !this._events[type])\r\n    return this;\r\n\r\n  list = this._events[type];\r\n  length = list.length;\r\n  position = -1;\r\n\r\n  if (list === listener ||\r\n      (isFunction(list.listener) && list.listener === listener)) {\r\n    delete this._events[type];\r\n    if (this._events.removeListener)\r\n      this.emit(\'removeListener\', type, listener);\r\n\r\n  } else if (isObject(list)) {\r\n    for (i = length; i-- > 0;) {\r\n      if (list[i] === listener ||\r\n          (list[i].listener && list[i].listener === listener)) {\r\n        position = i;\r\n        break;\r\n      }\r\n    }\r\n\r\n    if (position < 0)\r\n      return this;\r\n\r\n    if (list.length === 1) {\r\n      list.length = 0;\r\n      delete this._events[type];\r\n    } else {\r\n      list.splice(position, 1);\r\n    }\r\n\r\n    if (this._events.removeListener)\r\n      this.emit(\'removeListener\', type, listener);\r\n  }\r\n\r\n  return this;\r\n};\r\n\r\nEventEmitter.prototype.removeAllListeners = function(type) {\r\n  var key, listeners;\r\n\r\n  if (!this._events)\r\n    return this;\r\n\r\n  // not listening for removeListener, no need to emit\r\n  if (!this._events.removeListener) {\r\n    if (arguments.length === 0)\r\n      this._events = {};\r\n    else if (this._events[type])\r\n      delete this._events[type];\r\n    return this;\r\n  }\r\n\r\n  // emit removeListener for all listeners on all events\r\n  if (arguments.length === 0) {\r\n    for (key in this._events) {\r\n      if (key === \'removeListener\') continue;\r\n      this.removeAllListeners(key);\r\n    }\r\n    this.removeAllListeners(\'removeListener\');\r\n    this._events = {};\r\n    return this;\r\n  }\r\n\r\n  listeners = this._events[type];\r\n\r\n  if (isFunction(listeners)) {\r\n    this.removeListener(type, listeners);\r\n  } else if (listeners) {\r\n    // LIFO order\r\n    while (listeners.length)\r\n      this.removeListener(type, listeners[listeners.length - 1]);\r\n  }\r\n  delete this._events[type];\r\n\r\n  return this;\r\n};\r\n\r\nEventEmitter.prototype.listeners = function(type) {\r\n  var ret;\r\n  if (!this._events || !this._events[type])\r\n    ret = [];\r\n  else if (isFunction(this._events[type]))\r\n    ret = [this._events[type]];\r\n  else\r\n    ret = this._events[type].slice();\r\n  return ret;\r\n};\r\n\r\nEventEmitter.prototype.listenerCount = function(type) {\r\n  if (this._events) {\r\n    var evlistener = this._events[type];\r\n\r\n    if (isFunction(evlistener))\r\n      return 1;\r\n    else if (evlistener)\r\n      return evlistener.length;\r\n  }\r\n  return 0;\r\n};\r\n\r\nEventEmitter.listenerCount = function(emitter, type) {\r\n  return emitter.listenerCount(type);\r\n};\r\n\r\nfunction isFunction(arg) {\r\n  return typeof arg === \'function\';\r\n}\r\n\r\nfunction isNumber(arg) {\r\n  return typeof arg === \'number\';\r\n}\r\n\r\nfunction isObject(arg) {\r\n  return typeof arg === \'object\' && arg !== null;\r\n}\r\n\r\nfunction isUndefined(arg) {\r\n  return arg === void 0;\r\n}\r\n\r\n\r\n/***/ }),\r\n/* 9 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\nexports = module.exports = __webpack_require__(16);\r\nexports.Stream = exports;\r\nexports.Readable = exports;\r\nexports.Writable = __webpack_require__(10);\r\nexports.Duplex = __webpack_require__(0);\r\nexports.Transform = __webpack_require__(19);\r\nexports.PassThrough = __webpack_require__(31);\r\n\r\n\r\n/***/ }),\r\n/* 10 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\n"use strict";\r\n/* WEBPACK VAR INJECTION */(function(process, setImmediate, global) {// Copyright Joyent, Inc. and other Node contributors.\r\n//\r\n// Permission is hereby granted, free of charge, to any person obtaining a\r\n// copy of this software and associated documentation files (the\r\n// "Software"), to deal in the Software without restriction, including\r\n// without limitation the rights to use, copy, modify, merge, publish,\r\n// distribute, sublicense, and/or sell copies of the Software, and to permit\r\n// persons to whom the Software is furnished to do so, subject to the\r\n// following conditions:\r\n//\r\n// The above copyright notice and this permission notice shall be included\r\n// in all copies or substantial portions of the Software.\r\n//\r\n// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS\r\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\r\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\r\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\r\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\r\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\r\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\r\n\r\n// A bit simpler than readable streams.\r\n// Implement an async ._write(chunk, encoding, cb), and it\'ll handle all\r\n// the drain event emission and buffering.\r\n\r\n\r\n\r\n/*<replacement>*/\r\n\r\nvar processNextTick = __webpack_require__(6);\r\n/*</replacement>*/\r\n\r\nmodule.exports = Writable;\r\n\r\n/* <replacement> */\r\nfunction WriteReq(chunk, encoding, cb) {\r\n  this.chunk = chunk;\r\n  this.encoding = encoding;\r\n  this.callback = cb;\r\n  this.next = null;\r\n}\r\n\r\n// It seems a linked list but it is not\r\n// there will be only 2 of these for each stream\r\nfunction CorkedRequest(state) {\r\n  var _this = this;\r\n\r\n  this.next = null;\r\n  this.entry = null;\r\n  this.finish = function () {\r\n    onCorkedFinish(_this, state);\r\n  };\r\n}\r\n/* </replacement> */\r\n\r\n/*<replacement>*/\r\nvar asyncWrite = !process.browser && [\'v0.10\', \'v0.9.\'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;\r\n/*</replacement>*/\r\n\r\n/*<replacement>*/\r\nvar Duplex;\r\n/*</replacement>*/\r\n\r\nWritable.WritableState = WritableState;\r\n\r\n/*<replacement>*/\r\nvar util = __webpack_require__(3);\r\nutil.inherits = __webpack_require__(1);\r\n/*</replacement>*/\r\n\r\n/*<replacement>*/\r\nvar internalUtil = {\r\n  deprecate: __webpack_require__(30)\r\n};\r\n/*</replacement>*/\r\n\r\n/*<replacement>*/\r\nvar Stream = __webpack_require__(17);\r\n/*</replacement>*/\r\n\r\n/*<replacement>*/\r\nvar Buffer = __webpack_require__(7).Buffer;\r\nvar OurUint8Array = global.Uint8Array || function () {};\r\nfunction _uint8ArrayToBuffer(chunk) {\r\n  return Buffer.from(chunk);\r\n}\r\nfunction _isUint8Array(obj) {\r\n  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;\r\n}\r\n/*</replacement>*/\r\n\r\nvar destroyImpl = __webpack_require__(18);\r\n\r\nutil.inherits(Writable, Stream);\r\n\r\nfunction nop() {}\r\n\r\nfunction WritableState(options, stream) {\r\n  Duplex = Duplex || __webpack_require__(0);\r\n\r\n  options = options || {};\r\n\r\n  // object stream flag to indicate whether or not this stream\r\n  // contains buffers or objects.\r\n  this.objectMode = !!options.objectMode;\r\n\r\n  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;\r\n\r\n  // the point at which write() starts returning false\r\n  // Note: 0 is a valid value, means that we always return false if\r\n  // the entire buffer is not flushed immediately on write()\r\n  var hwm = options.highWaterMark;\r\n  var defaultHwm = this.objectMode ? 16 : 16 * 1024;\r\n  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;\r\n\r\n  // cast to ints.\r\n  this.highWaterMark = Math.floor(this.highWaterMark);\r\n\r\n  // if _final has been called\r\n  this.finalCalled = false;\r\n\r\n  // drain event flag.\r\n  this.needDrain = false;\r\n  // at the start of calling end()\r\n  this.ending = false;\r\n  // when end() has been called, and returned\r\n  this.ended = false;\r\n  // when \'finish\' is emitted\r\n  this.finished = false;\r\n\r\n  // has it been destroyed\r\n  this.destroyed = false;\r\n\r\n  // should we decode strings into buffers before passing to _write?\r\n  // this is here so that some node-core streams can optimize string\r\n  // handling at a lower level.\r\n  var noDecode = options.decodeStrings === false;\r\n  this.decodeStrings = !noDecode;\r\n\r\n  // Crypto is kind of old and crusty.  Historically, its default string\r\n  // encoding is \'binary\' so we have to make this configurable.\r\n  // Everything else in the universe uses \'utf8\', though.\r\n  this.defaultEncoding = options.defaultEncoding || \'utf8\';\r\n\r\n  // not an actual buffer we keep track of, but a measurement\r\n  // of how much we\'re waiting to get pushed to some underlying\r\n  // socket or file.\r\n  this.length = 0;\r\n\r\n  // a flag to see when we\'re in the middle of a write.\r\n  this.writing = false;\r\n\r\n  // when true all writes will be buffered until .uncork() call\r\n  this.corked = 0;\r\n\r\n  // a flag to be able to tell if the onwrite cb is called immediately,\r\n  // or on a later tick.  We set this to true at first, because any\r\n  // actions that shouldn\'t happen until "later" should generally also\r\n  // not happen before the first write call.\r\n  this.sync = true;\r\n\r\n  // a flag to know if we\'re processing previously buffered items, which\r\n  // may call the _write() callback in the same tick, so that we don\'t\r\n  // end up in an overlapped onwrite situation.\r\n  this.bufferProcessing = false;\r\n\r\n  // the callback that\'s passed to _write(chunk,cb)\r\n  this.onwrite = function (er) {\r\n    onwrite(stream, er);\r\n  };\r\n\r\n  // the callback that the user supplies to write(chunk,encoding,cb)\r\n  this.writecb = null;\r\n\r\n  // the amount that is being written when _write is called.\r\n  this.writelen = 0;\r\n\r\n  this.bufferedRequest = null;\r\n  this.lastBufferedRequest = null;\r\n\r\n  // number of pending user-supplied write callbacks\r\n  // this must be 0 before \'finish\' can be emitted\r\n  this.pendingcb = 0;\r\n\r\n  // emit prefinish if the only thing we\'re waiting for is _write cbs\r\n  // This is relevant for synchronous Transform streams\r\n  this.prefinished = false;\r\n\r\n  // True if the error was already emitted and should not be thrown again\r\n  this.errorEmitted = false;\r\n\r\n  // count buffered requests\r\n  this.bufferedRequestCount = 0;\r\n\r\n  // allocate the first CorkedRequest, there is always\r\n  // one allocated and free to use, and we maintain at most two\r\n  this.corkedRequestsFree = new CorkedRequest(this);\r\n}\r\n\r\nWritableState.prototype.getBuffer = function getBuffer() {\r\n  var current = this.bufferedRequest;\r\n  var out = [];\r\n  while (current) {\r\n    out.push(current);\r\n    current = current.next;\r\n  }\r\n  return out;\r\n};\r\n\r\n(function () {\r\n  try {\r\n    Object.defineProperty(WritableState.prototype, \'buffer\', {\r\n      get: internalUtil.deprecate(function () {\r\n        return this.getBuffer();\r\n      }, \'_writableState.buffer is deprecated. Use _writableState.getBuffer \' + \'instead.\', \'DEP0003\')\r\n    });\r\n  } catch (_) {}\r\n})();\r\n\r\n// Test _writableState for inheritance to account for Duplex streams,\r\n// whose prototype chain only points to Readable.\r\nvar realHasInstance;\r\nif (typeof Symbol === \'function\' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === \'function\') {\r\n  realHasInstance = Function.prototype[Symbol.hasInstance];\r\n  Object.defineProperty(Writable, Symbol.hasInstance, {\r\n    value: function (object) {\r\n      if (realHasInstance.call(this, object)) return true;\r\n\r\n      return object && object._writableState instanceof WritableState;\r\n    }\r\n  });\r\n} else {\r\n  realHasInstance = function (object) {\r\n    return object instanceof this;\r\n  };\r\n}\r\n\r\nfunction Writable(options) {\r\n  Duplex = Duplex || __webpack_require__(0);\r\n\r\n  // Writable ctor is applied to Duplexes, too.\r\n  // `realHasInstance` is necessary because using plain `instanceof`\r\n  // would return false, as no `_writableState` property is attached.\r\n\r\n  // Trying to use the custom `instanceof` for Writable here will also break the\r\n  // Node.js LazyTransform implementation, which has a non-trivial getter for\r\n  // `_writableState` that would lead to infinite recursion.\r\n  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {\r\n    return new Writable(options);\r\n  }\r\n\r\n  this._writableState = new WritableState(options, this);\r\n\r\n  // legacy.\r\n  this.writable = true;\r\n\r\n  if (options) {\r\n    if (typeof options.write === \'function\') this._write = options.write;\r\n\r\n    if (typeof options.writev === \'function\') this._writev = options.writev;\r\n\r\n    if (typeof options.destroy === \'function\') this._destroy = options.destroy;\r\n\r\n    if (typeof options.final === \'function\') this._final = options.final;\r\n  }\r\n\r\n  Stream.call(this);\r\n}\r\n\r\n// Otherwise people can pipe Writable streams, which is just wrong.\r\nWritable.prototype.pipe = function () {\r\n  this.emit(\'error\', new Error(\'Cannot pipe, not readable\'));\r\n};\r\n\r\nfunction writeAfterEnd(stream, cb) {\r\n  var er = new Error(\'write after end\');\r\n  // TODO: defer error events consistently everywhere, not just the cb\r\n  stream.emit(\'error\', er);\r\n  processNextTick(cb, er);\r\n}\r\n\r\n// Checks that a user-supplied chunk is valid, especially for the particular\r\n// mode the stream is in. Currently this means that `null` is never accepted\r\n// and undefined/non-string values are only allowed in object mode.\r\nfunction validChunk(stream, state, chunk, cb) {\r\n  var valid = true;\r\n  var er = false;\r\n\r\n  if (chunk === null) {\r\n    er = new TypeError(\'May not write null values to stream\');\r\n  } else if (typeof chunk !== \'string\' && chunk !== undefined && !state.objectMode) {\r\n    er = new TypeError(\'Invalid non-string/buffer chunk\');\r\n  }\r\n  if (er) {\r\n    stream.emit(\'error\', er);\r\n    processNextTick(cb, er);\r\n    valid = false;\r\n  }\r\n  return valid;\r\n}\r\n\r\nWritable.prototype.write = function (chunk, encoding, cb) {\r\n  var state = this._writableState;\r\n  var ret = false;\r\n  var isBuf = _isUint8Array(chunk) && !state.objectMode;\r\n\r\n  if (isBuf && !Buffer.isBuffer(chunk)) {\r\n    chunk = _uint8ArrayToBuffer(chunk);\r\n  }\r\n\r\n  if (typeof encoding === \'function\') {\r\n    cb = encoding;\r\n    encoding = null;\r\n  }\r\n\r\n  if (isBuf) encoding = \'buffer\';else if (!encoding) encoding = state.defaultEncoding;\r\n\r\n  if (typeof cb !== \'function\') cb = nop;\r\n\r\n  if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {\r\n    state.pendingcb++;\r\n    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);\r\n  }\r\n\r\n  return ret;\r\n};\r\n\r\nWritable.prototype.cork = function () {\r\n  var state = this._writableState;\r\n\r\n  state.corked++;\r\n};\r\n\r\nWritable.prototype.uncork = function () {\r\n  var state = this._writableState;\r\n\r\n  if (state.corked) {\r\n    state.corked--;\r\n\r\n    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);\r\n  }\r\n};\r\n\r\nWritable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {\r\n  // node::ParseEncoding() requires lower case.\r\n  if (typeof encoding === \'string\') encoding = encoding.toLowerCase();\r\n  if (!([\'hex\', \'utf8\', \'utf-8\', \'ascii\', \'binary\', \'base64\', \'ucs2\', \'ucs-2\', \'utf16le\', \'utf-16le\', \'raw\'].indexOf((encoding + \'\').toLowerCase()) > -1)) throw new TypeError(\'Unknown encoding: \' + encoding);\r\n  this._writableState.defaultEncoding = encoding;\r\n  return this;\r\n};\r\n\r\nfunction decodeChunk(state, chunk, encoding) {\r\n  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === \'string\') {\r\n    chunk = Buffer.from(chunk, encoding);\r\n  }\r\n  return chunk;\r\n}\r\n\r\n// if we\'re already writing something, then just put this\r\n// in the queue, and wait our turn.  Otherwise, call _write\r\n// If we return false, then we need a drain event, so set that flag.\r\nfunction writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {\r\n  if (!isBuf) {\r\n    var newChunk = decodeChunk(state, chunk, encoding);\r\n    if (chunk !== newChunk) {\r\n      isBuf = true;\r\n      encoding = \'buffer\';\r\n      chunk = newChunk;\r\n    }\r\n  }\r\n  var len = state.objectMode ? 1 : chunk.length;\r\n\r\n  state.length += len;\r\n\r\n  var ret = state.length < state.highWaterMark;\r\n  // we must ensure that previous needDrain will not be reset to false.\r\n  if (!ret) state.needDrain = true;\r\n\r\n  if (state.writing || state.corked) {\r\n    var last = state.lastBufferedRequest;\r\n    state.lastBufferedRequest = {\r\n      chunk: chunk,\r\n      encoding: encoding,\r\n      isBuf: isBuf,\r\n      callback: cb,\r\n      next: null\r\n    };\r\n    if (last) {\r\n      last.next = state.lastBufferedRequest;\r\n    } else {\r\n      state.bufferedRequest = state.lastBufferedRequest;\r\n    }\r\n    state.bufferedRequestCount += 1;\r\n  } else {\r\n    doWrite(stream, state, false, len, chunk, encoding, cb);\r\n  }\r\n\r\n  return ret;\r\n}\r\n\r\nfunction doWrite(stream, state, writev, len, chunk, encoding, cb) {\r\n  state.writelen = len;\r\n  state.writecb = cb;\r\n  state.writing = true;\r\n  state.sync = true;\r\n  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);\r\n  state.sync = false;\r\n}\r\n\r\nfunction onwriteError(stream, state, sync, er, cb) {\r\n  --state.pendingcb;\r\n\r\n  if (sync) {\r\n    // defer the callback if we are being called synchronously\r\n    // to avoid piling up things on the stack\r\n    processNextTick(cb, er);\r\n    // this can emit finish, and it will always happen\r\n    // after error\r\n    processNextTick(finishMaybe, stream, state);\r\n    stream._writableState.errorEmitted = true;\r\n    stream.emit(\'error\', er);\r\n  } else {\r\n    // the caller expect this to happen before if\r\n    // it is async\r\n    cb(er);\r\n    stream._writableState.errorEmitted = true;\r\n    stream.emit(\'error\', er);\r\n    // this can emit finish, but finish must\r\n    // always follow error\r\n    finishMaybe(stream, state);\r\n  }\r\n}\r\n\r\nfunction onwriteStateUpdate(state) {\r\n  state.writing = false;\r\n  state.writecb = null;\r\n  state.length -= state.writelen;\r\n  state.writelen = 0;\r\n}\r\n\r\nfunction onwrite(stream, er) {\r\n  var state = stream._writableState;\r\n  var sync = state.sync;\r\n  var cb = state.writecb;\r\n\r\n  onwriteStateUpdate(state);\r\n\r\n  if (er) onwriteError(stream, state, sync, er, cb);else {\r\n    // Check if we\'re actually ready to finish, but don\'t emit yet\r\n    var finished = needFinish(state);\r\n\r\n    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {\r\n      clearBuffer(stream, state);\r\n    }\r\n\r\n    if (sync) {\r\n      /*<replacement>*/\r\n      asyncWrite(afterWrite, stream, state, finished, cb);\r\n      /*</replacement>*/\r\n    } else {\r\n      afterWrite(stream, state, finished, cb);\r\n    }\r\n  }\r\n}\r\n\r\nfunction afterWrite(stream, state, finished, cb) {\r\n  if (!finished) onwriteDrain(stream, state);\r\n  state.pendingcb--;\r\n  cb();\r\n  finishMaybe(stream, state);\r\n}\r\n\r\n// Must force callback to be called on nextTick, so that we don\'t\r\n// emit \'drain\' before the write() consumer gets the \'false\' return\r\n// value, and has a chance to attach a \'drain\' listener.\r\nfunction onwriteDrain(stream, state) {\r\n  if (state.length === 0 && state.needDrain) {\r\n    state.needDrain = false;\r\n    stream.emit(\'drain\');\r\n  }\r\n}\r\n\r\n// if there\'s something in the buffer waiting, then process it\r\nfunction clearBuffer(stream, state) {\r\n  state.bufferProcessing = true;\r\n  var entry = state.bufferedRequest;\r\n\r\n  if (stream._writev && entry && entry.next) {\r\n    // Fast case, write everything using _writev()\r\n    var l = state.bufferedRequestCount;\r\n    var buffer = new Array(l);\r\n    var holder = state.corkedRequestsFree;\r\n    holder.entry = entry;\r\n\r\n    var count = 0;\r\n    var allBuffers = true;\r\n    while (entry) {\r\n      buffer[count] = entry;\r\n      if (!entry.isBuf) allBuffers = false;\r\n      entry = entry.next;\r\n      count += 1;\r\n    }\r\n    buffer.allBuffers = allBuffers;\r\n\r\n    doWrite(stream, state, true, state.length, buffer, \'\', holder.finish);\r\n\r\n    // doWrite is almost always async, defer these to save a bit of time\r\n    // as the hot path ends with doWrite\r\n    state.pendingcb++;\r\n    state.lastBufferedRequest = null;\r\n    if (holder.next) {\r\n      state.corkedRequestsFree = holder.next;\r\n      holder.next = null;\r\n    } else {\r\n      state.corkedRequestsFree = new CorkedRequest(state);\r\n    }\r\n  } else {\r\n    // Slow case, write chunks one-by-one\r\n    while (entry) {\r\n      var chunk = entry.chunk;\r\n      var encoding = entry.encoding;\r\n      var cb = entry.callback;\r\n      var len = state.objectMode ? 1 : chunk.length;\r\n\r\n      doWrite(stream, state, false, len, chunk, encoding, cb);\r\n      entry = entry.next;\r\n      // if we didn\'t call the onwrite immediately, then\r\n      // it means that we need to wait until it does.\r\n      // also, that means that the chunk and cb are currently\r\n      // being processed, so move the buffer counter past them.\r\n      if (state.writing) {\r\n        break;\r\n      }\r\n    }\r\n\r\n    if (entry === null) state.lastBufferedRequest = null;\r\n  }\r\n\r\n  state.bufferedRequestCount = 0;\r\n  state.bufferedRequest = entry;\r\n  state.bufferProcessing = false;\r\n}\r\n\r\nWritable.prototype._write = function (chunk, encoding, cb) {\r\n  cb(new Error(\'_write() is not implemented\'));\r\n};\r\n\r\nWritable.prototype._writev = null;\r\n\r\nWritable.prototype.end = function (chunk, encoding, cb) {\r\n  var state = this._writableState;\r\n\r\n  if (typeof chunk === \'function\') {\r\n    cb = chunk;\r\n    chunk = null;\r\n    encoding = null;\r\n  } else if (typeof encoding === \'function\') {\r\n    cb = encoding;\r\n    encoding = null;\r\n  }\r\n\r\n  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);\r\n\r\n  // .end() fully uncorks\r\n  if (state.corked) {\r\n    state.corked = 1;\r\n    this.uncork();\r\n  }\r\n\r\n  // ignore unnecessary end() calls.\r\n  if (!state.ending && !state.finished) endWritable(this, state, cb);\r\n};\r\n\r\nfunction needFinish(state) {\r\n  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;\r\n}\r\nfunction callFinal(stream, state) {\r\n  stream._final(function (err) {\r\n    state.pendingcb--;\r\n    if (err) {\r\n      stream.emit(\'error\', err);\r\n    }\r\n    state.prefinished = true;\r\n    stream.emit(\'prefinish\');\r\n    finishMaybe(stream, state);\r\n  });\r\n}\r\nfunction prefinish(stream, state) {\r\n  if (!state.prefinished && !state.finalCalled) {\r\n    if (typeof stream._final === \'function\') {\r\n      state.pendingcb++;\r\n      state.finalCalled = true;\r\n      processNextTick(callFinal, stream, state);\r\n    } else {\r\n      state.prefinished = true;\r\n      stream.emit(\'prefinish\');\r\n    }\r\n  }\r\n}\r\n\r\nfunction finishMaybe(stream, state) {\r\n  var need = needFinish(state);\r\n  if (need) {\r\n    prefinish(stream, state);\r\n    if (state.pendingcb === 0) {\r\n      state.finished = true;\r\n      stream.emit(\'finish\');\r\n    }\r\n  }\r\n  return need;\r\n}\r\n\r\nfunction endWritable(stream, state, cb) {\r\n  state.ending = true;\r\n  finishMaybe(stream, state);\r\n  if (cb) {\r\n    if (state.finished) processNextTick(cb);else stream.once(\'finish\', cb);\r\n  }\r\n  state.ended = true;\r\n  stream.writable = false;\r\n}\r\n\r\nfunction onCorkedFinish(corkReq, state, err) {\r\n  var entry = corkReq.entry;\r\n  corkReq.entry = null;\r\n  while (entry) {\r\n    var cb = entry.callback;\r\n    state.pendingcb--;\r\n    cb(err);\r\n    entry = entry.next;\r\n  }\r\n  if (state.corkedRequestsFree) {\r\n    state.corkedRequestsFree.next = corkReq;\r\n  } else {\r\n    state.corkedRequestsFree = corkReq;\r\n  }\r\n}\r\n\r\nObject.defineProperty(Writable.prototype, \'destroyed\', {\r\n  get: function () {\r\n    if (this._writableState === undefined) {\r\n      return false;\r\n    }\r\n    return this._writableState.destroyed;\r\n  },\r\n  set: function (value) {\r\n    // we ignore the value if the stream\r\n    // has not been initialized yet\r\n    if (!this._writableState) {\r\n      return;\r\n    }\r\n\r\n    // backward compatibility, the user is explicitly\r\n    // managing destroyed\r\n    this._writableState.destroyed = value;\r\n  }\r\n});\r\n\r\nWritable.prototype.destroy = destroyImpl.destroy;\r\nWritable.prototype._undestroy = destroyImpl.undestroy;\r\nWritable.prototype._destroy = function (err, cb) {\r\n  this.end();\r\n  cb(err);\r\n};\r\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(28).setImmediate, __webpack_require__(2)))\r\n\r\n/***/ }),\r\n/* 11 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\n"use strict";\r\n\r\n\r\nvar Buffer = __webpack_require__(7).Buffer;\r\n\r\nvar isEncoding = Buffer.isEncoding || function (encoding) {\r\n  encoding = \'\' + encoding;\r\n  switch (encoding && encoding.toLowerCase()) {\r\n    case \'hex\':case \'utf8\':case \'utf-8\':case \'ascii\':case \'binary\':case \'base64\':case \'ucs2\':case \'ucs-2\':case \'utf16le\':case \'utf-16le\':case \'raw\':\r\n      return true;\r\n    default:\r\n      return false;\r\n  }\r\n};\r\n\r\nfunction _normalizeEncoding(enc) {\r\n  if (!enc) return \'utf8\';\r\n  var retried;\r\n  while (true) {\r\n    switch (enc) {\r\n      case \'utf8\':\r\n      case \'utf-8\':\r\n        return \'utf8\';\r\n      case \'ucs2\':\r\n      case \'ucs-2\':\r\n      case \'utf16le\':\r\n      case \'utf-16le\':\r\n        return \'utf16le\';\r\n      case \'latin1\':\r\n      case \'binary\':\r\n        return \'latin1\';\r\n      case \'base64\':\r\n      case \'ascii\':\r\n      case \'hex\':\r\n        return enc;\r\n      default:\r\n        if (retried) return; // undefined\r\n        enc = (\'\' + enc).toLowerCase();\r\n        retried = true;\r\n    }\r\n  }\r\n};\r\n\r\n// Do not cache `Buffer.isEncoding` when checking encoding names as some\r\n// modules monkey-patch it to support additional encodings\r\nfunction normalizeEncoding(enc) {\r\n  var nenc = _normalizeEncoding(enc);\r\n  if (typeof nenc !== \'string\' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error(\'Unknown encoding: \' + enc);\r\n  return nenc || enc;\r\n}\r\n\r\n// StringDecoder provides an interface for efficiently splitting a series of\r\n// buffers into a series of JS strings without breaking apart multi-byte\r\n// characters.\r\nexports.StringDecoder = StringDecoder;\r\nfunction StringDecoder(encoding) {\r\n  this.encoding = normalizeEncoding(encoding);\r\n  var nb;\r\n  switch (this.encoding) {\r\n    case \'utf16le\':\r\n      this.text = utf16Text;\r\n      this.end = utf16End;\r\n      nb = 4;\r\n      break;\r\n    case \'utf8\':\r\n      this.fillLast = utf8FillLast;\r\n      nb = 4;\r\n      break;\r\n    case \'base64\':\r\n      this.text = base64Text;\r\n      this.end = base64End;\r\n      nb = 3;\r\n      break;\r\n    default:\r\n      this.write = simpleWrite;\r\n      this.end = simpleEnd;\r\n      return;\r\n  }\r\n  this.lastNeed = 0;\r\n  this.lastTotal = 0;\r\n  this.lastChar = Buffer.allocUnsafe(nb);\r\n}\r\n\r\nStringDecoder.prototype.write = function (buf) {\r\n  if (buf.length === 0) return \'\';\r\n  var r;\r\n  var i;\r\n  if (this.lastNeed) {\r\n    r = this.fillLast(buf);\r\n    if (r === undefined) return \'\';\r\n    i = this.lastNeed;\r\n    this.lastNeed = 0;\r\n  } else {\r\n    i = 0;\r\n  }\r\n  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);\r\n  return r || \'\';\r\n};\r\n\r\nStringDecoder.prototype.end = utf8End;\r\n\r\n// Returns only complete characters in a Buffer\r\nStringDecoder.prototype.text = utf8Text;\r\n\r\n// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer\r\nStringDecoder.prototype.fillLast = function (buf) {\r\n  if (this.lastNeed <= buf.length) {\r\n    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);\r\n    return this.lastChar.toString(this.encoding, 0, this.lastTotal);\r\n  }\r\n  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);\r\n  this.lastNeed -= buf.length;\r\n};\r\n\r\n// Checks the type of a UTF-8 byte, whether it\'s ASCII, a leading byte, or a\r\n// continuation byte.\r\nfunction utf8CheckByte(byte) {\r\n  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;\r\n  return -1;\r\n}\r\n\r\n// Checks at most 3 bytes at the end of a Buffer in order to detect an\r\n// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)\r\n// needed to complete the UTF-8 character (if applicable) are returned.\r\nfunction utf8CheckIncomplete(self, buf, i) {\r\n  var j = buf.length - 1;\r\n  if (j < i) return 0;\r\n  var nb = utf8CheckByte(buf[j]);\r\n  if (nb >= 0) {\r\n    if (nb > 0) self.lastNeed = nb - 1;\r\n    return nb;\r\n  }\r\n  if (--j < i) return 0;\r\n  nb = utf8CheckByte(buf[j]);\r\n  if (nb >= 0) {\r\n    if (nb > 0) self.lastNeed = nb - 2;\r\n    return nb;\r\n  }\r\n  if (--j < i) return 0;\r\n  nb = utf8CheckByte(buf[j]);\r\n  if (nb >= 0) {\r\n    if (nb > 0) {\r\n      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;\r\n    }\r\n    return nb;\r\n  }\r\n  return 0;\r\n}\r\n\r\n// Validates as many continuation bytes for a multi-byte UTF-8 character as\r\n// needed or are available. If we see a non-continuation byte where we expect\r\n// one, we "replace" the validated continuation bytes we\'ve seen so far with\r\n// UTF-8 replacement characters (\'\\ufffd\'), to match v8\'s UTF-8 decoding\r\n// behavior. The continuation byte check is included three times in the case\r\n// where all of the continuation bytes for a character exist in the same buffer.\r\n// It is also done this way as a slight performance increase instead of using a\r\n// loop.\r\nfunction utf8CheckExtraBytes(self, buf, p) {\r\n  if ((buf[0] & 0xC0) !== 0x80) {\r\n    self.lastNeed = 0;\r\n    return \'\\ufffd\'.repeat(p);\r\n  }\r\n  if (self.lastNeed > 1 && buf.length > 1) {\r\n    if ((buf[1] & 0xC0) !== 0x80) {\r\n      self.lastNeed = 1;\r\n      return \'\\ufffd\'.repeat(p + 1);\r\n    }\r\n    if (self.lastNeed > 2 && buf.length > 2) {\r\n      if ((buf[2] & 0xC0) !== 0x80) {\r\n        self.lastNeed = 2;\r\n        return \'\\ufffd\'.repeat(p + 2);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.\r\nfunction utf8FillLast(buf) {\r\n  var p = this.lastTotal - this.lastNeed;\r\n  var r = utf8CheckExtraBytes(this, buf, p);\r\n  if (r !== undefined) return r;\r\n  if (this.lastNeed <= buf.length) {\r\n    buf.copy(this.lastChar, p, 0, this.lastNeed);\r\n    return this.lastChar.toString(this.encoding, 0, this.lastTotal);\r\n  }\r\n  buf.copy(this.lastChar, p, 0, buf.length);\r\n  this.lastNeed -= buf.length;\r\n}\r\n\r\n// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a\r\n// partial character, the character\'s bytes are buffered until the required\r\n// number of bytes are available.\r\nfunction utf8Text(buf, i) {\r\n  var total = utf8CheckIncomplete(this, buf, i);\r\n  if (!this.lastNeed) return buf.toString(\'utf8\', i);\r\n  this.lastTotal = total;\r\n  var end = buf.length - (total - this.lastNeed);\r\n  buf.copy(this.lastChar, 0, end);\r\n  return buf.toString(\'utf8\', i, end);\r\n}\r\n\r\n// For UTF-8, a replacement character for each buffered byte of a (partial)\r\n// character needs to be added to the output.\r\nfunction utf8End(buf) {\r\n  var r = buf && buf.length ? this.write(buf) : \'\';\r\n  if (this.lastNeed) return r + \'\\ufffd\'.repeat(this.lastTotal - this.lastNeed);\r\n  return r;\r\n}\r\n\r\n// UTF-16LE typically needs two bytes per character, but even if we have an even\r\n// number of bytes available, we need to check if we end on a leading/high\r\n// surrogate. In that case, we need to wait for the next two bytes in order to\r\n// decode the last character properly.\r\nfunction utf16Text(buf, i) {\r\n  if ((buf.length - i) % 2 === 0) {\r\n    var r = buf.toString(\'utf16le\', i);\r\n    if (r) {\r\n      var c = r.charCodeAt(r.length - 1);\r\n      if (c >= 0xD800 && c <= 0xDBFF) {\r\n        this.lastNeed = 2;\r\n        this.lastTotal = 4;\r\n        this.lastChar[0] = buf[buf.length - 2];\r\n        this.lastChar[1] = buf[buf.length - 1];\r\n        return r.slice(0, -1);\r\n      }\r\n    }\r\n    return r;\r\n  }\r\n  this.lastNeed = 1;\r\n  this.lastTotal = 2;\r\n  this.lastChar[0] = buf[buf.length - 1];\r\n  return buf.toString(\'utf16le\', i, buf.length - 1);\r\n}\r\n\r\n// For UTF-16LE we do not explicitly append special replacement characters if we\r\n// end on a partial character, we simply let v8 handle that.\r\nfunction utf16End(buf) {\r\n  var r = buf && buf.length ? this.write(buf) : \'\';\r\n  if (this.lastNeed) {\r\n    var end = this.lastTotal - this.lastNeed;\r\n    return r + this.lastChar.toString(\'utf16le\', 0, end);\r\n  }\r\n  return r;\r\n}\r\n\r\nfunction base64Text(buf, i) {\r\n  var n = (buf.length - i) % 3;\r\n  if (n === 0) return buf.toString(\'base64\', i);\r\n  this.lastNeed = 3 - n;\r\n  this.lastTotal = 3;\r\n  if (n === 1) {\r\n    this.lastChar[0] = buf[buf.length - 1];\r\n  } else {\r\n    this.lastChar[0] = buf[buf.length - 2];\r\n    this.lastChar[1] = buf[buf.length - 1];\r\n  }\r\n  return buf.toString(\'base64\', i, buf.length - n);\r\n}\r\n\r\nfunction base64End(buf) {\r\n  var r = buf && buf.length ? this.write(buf) : \'\';\r\n  if (this.lastNeed) return r + this.lastChar.toString(\'base64\', 0, 3 - this.lastNeed);\r\n  return r;\r\n}\r\n\r\n// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)\r\nfunction simpleWrite(buf) {\r\n  return buf.toString(this.encoding);\r\n}\r\n\r\nfunction simpleEnd(buf) {\r\n  return buf && buf.length ? this.write(buf) : \'\';\r\n}\r\n\r\n/***/ }),\r\n/* 12 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\nvar isArray = __webpack_require__(13).isArray;\r\n\r\nmodule.exports = {\r\n\r\n  copyOptions: function (options) {\r\n    var key, copy = {};\r\n    for (key in options) {\r\n      if (options.hasOwnProperty(key)) {\r\n        copy[key] = options[key];\r\n      }\r\n    }\r\n    return copy;\r\n  },\r\n\r\n  ensureFlagExists: function (item, options) {\r\n    if (!(item in options) || typeof options[item] !== \'boolean\') {\r\n      options[item] = false;\r\n    }\r\n  },\r\n\r\n  ensureSpacesExists: function (options) {\r\n    if (!(\'spaces\' in options) || (typeof options.spaces !== \'number\' && typeof options.spaces !== \'string\')) {\r\n      options.spaces = 0;\r\n    }\r\n  },\r\n\r\n  ensureAlwaysArrayExists: function (options) {\r\n    if (!(\'alwaysArray\' in options) || (typeof options.alwaysArray !== \'boolean\' && !isArray(options.alwaysArray))) {\r\n      options.alwaysArray = false;\r\n    }\r\n  },\r\n\r\n  ensureKeyExists: function (key, options) {\r\n    if (!(key + \'Key\' in options) || typeof options[key + \'Key\'] !== \'string\') {\r\n      options[key + \'Key\'] = options.compact ? \'_\' + key : key;\r\n    }\r\n  },\r\n\r\n  checkFnExists: function (key, options) {\r\n    return key + \'Fn\' in options;\r\n  }\r\n\r\n};\r\n\r\n\r\n/***/ }),\r\n/* 13 */\r\n/***/ (function(module, exports) {\r\n\r\nmodule.exports = {\r\n\r\n  isArray: function(value) {\r\n    if (Array.isArray) {\r\n      return Array.isArray(value);\r\n    }\r\n    // fallback for older browsers like  IE 8\r\n    return Object.prototype.toString.call( value ) === \'[object Array]\';\r\n  }\r\n\r\n};\r\n\r\n\r\n/***/ }),\r\n/* 14 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\nvar sax = __webpack_require__(22);\r\nvar expat /*= require(\'node-expat\');*/ = { on: function () { }, parse: function () { } };\r\nvar helper = __webpack_require__(12);\r\nvar isArray = __webpack_require__(13).isArray;\r\n\r\nvar options;\r\nvar pureJsParser = true;\r\nvar currentElement;\r\n\r\nfunction validateOptions(userOptions) {\r\n  options = helper.copyOptions(userOptions);\r\n  helper.ensureFlagExists(\'ignoreDeclaration\', options);\r\n  helper.ensureFlagExists(\'ignoreInstruction\', options);\r\n  helper.ensureFlagExists(\'ignoreAttributes\', options);\r\n  helper.ensureFlagExists(\'ignoreText\', options);\r\n  helper.ensureFlagExists(\'ignoreComment\', options);\r\n  helper.ensureFlagExists(\'ignoreCdata\', options);\r\n  helper.ensureFlagExists(\'ignoreDoctype\', options);\r\n  helper.ensureFlagExists(\'compact\', options);\r\n  helper.ensureFlagExists(\'alwaysChildren\', options);\r\n  helper.ensureFlagExists(\'addParent\', options);\r\n  helper.ensureFlagExists(\'trim\', options);\r\n  helper.ensureFlagExists(\'nativeType\', options);\r\n  helper.ensureFlagExists(\'sanitize\', options);\r\n  helper.ensureFlagExists(\'instructionHasAttributes\', options);\r\n  helper.ensureFlagExists(\'captureSpacesBetweenElements\', options);\r\n  helper.ensureAlwaysArrayExists(options);\r\n  helper.ensureKeyExists(\'declaration\', options);\r\n  helper.ensureKeyExists(\'instruction\', options);\r\n  helper.ensureKeyExists(\'attributes\', options);\r\n  helper.ensureKeyExists(\'text\', options);\r\n  helper.ensureKeyExists(\'comment\', options);\r\n  helper.ensureKeyExists(\'cdata\', options);\r\n  helper.ensureKeyExists(\'doctype\', options);\r\n  helper.ensureKeyExists(\'type\', options);\r\n  helper.ensureKeyExists(\'name\', options);\r\n  helper.ensureKeyExists(\'elements\', options);\r\n  helper.ensureKeyExists(\'parent\', options);\r\n  helper.checkFnExists(\'doctype\', options);\r\n  helper.checkFnExists(\'instruction\', options);\r\n  helper.checkFnExists(\'cdata\', options);\r\n  helper.checkFnExists(\'comment\', options);\r\n  helper.checkFnExists(\'text\', options);\r\n  helper.checkFnExists(\'instructionName\', options);\r\n  helper.checkFnExists(\'elementName\', options);\r\n  helper.checkFnExists(\'attributeName\', options);\r\n  helper.checkFnExists(\'attributeValue\', options);\r\n  helper.checkFnExists(\'attributes\', options);\r\n  return options;\r\n}\r\n\r\nfunction nativeType(value) {\r\n  var nValue = Number(value);\r\n  if (!isNaN(nValue)) {\r\n    return nValue;\r\n  }\r\n  var bValue = value.toLowerCase();\r\n  if (bValue === \'true\') {\r\n    return true;\r\n  } else if (bValue === \'false\') {\r\n    return false;\r\n  }\r\n  return value;\r\n}\r\n\r\nfunction addField(type, value) {\r\n  var key;\r\n  if (options.compact) {\r\n    if (\r\n      !currentElement[options[type + \'Key\']] &&\r\n      (isArray(options.alwaysArray) ? options.alwaysArray.indexOf(options[type + \'Key\']) !== -1 : options.alwaysArray)\r\n    ) {\r\n      currentElement[options[type + \'Key\']] = [];\r\n    }\r\n    if (currentElement[options[type + \'Key\']] && !isArray(currentElement[options[type + \'Key\']])) {\r\n      currentElement[options[type + \'Key\']] = [currentElement[options[type + \'Key\']]];\r\n    }\r\n    if (type + \'Fn\' in options && typeof value === \'string\') {\r\n      value = options[type + \'Fn\'](value, currentElement);\r\n    }\r\n    if (type === \'instruction\' && (\'instructionFn\' in options || \'instructionNameFn\' in options)) {\r\n      for (key in value) {\r\n        if (value.hasOwnProperty(key)) {\r\n          if (\'instructionFn\' in options) {\r\n            value[key] = options.instructionFn(value[key], key, currentElement);\r\n          } else {\r\n            var temp = value[key];\r\n            delete value[key];\r\n            value[options.instructionNameFn(key, temp, currentElement)] = temp;\r\n          }\r\n        }\r\n      }\r\n    }\r\n    if (isArray(currentElement[options[type + \'Key\']])) {\r\n      currentElement[options[type + \'Key\']].push(value);\r\n    } else {\r\n      currentElement[options[type + \'Key\']] = value;\r\n    }\r\n  } else {\r\n    if (!currentElement[options.elementsKey]) {\r\n      currentElement[options.elementsKey] = [];\r\n    }\r\n    var element = {};\r\n    element[options.typeKey] = type;\r\n    if (type === \'instruction\') {\r\n      for (key in value) {\r\n        if (value.hasOwnProperty(key)) {\r\n          break;\r\n        }\r\n      }\r\n      element[options.nameKey] = \'instructionNameFn\' in options ? options.instructionNameFn(key, value, currentElement) : key;\r\n      if (options.instructionHasAttributes) {\r\n        element[options.attributesKey] = value[key][options.attributesKey];\r\n        if (\'instructionFn\' in options) {\r\n          element[options.attributesKey] = options.instructionFn(element[options.attributesKey], key, currentElement);\r\n        }\r\n      } else {\r\n        if (\'instructionFn\' in options) {\r\n          value[key] = options.instructionFn(value[key], key, currentElement);\r\n        }\r\n        element[options.instructionKey] = value[key];\r\n      }\r\n    } else {\r\n      if (type + \'Fn\' in options) {\r\n        value = options[type + \'Fn\'](value, currentElement);\r\n      }\r\n      element[options[type + \'Key\']] = value;\r\n    }\r\n    if (options.addParent) {\r\n      element[options.parentKey] = currentElement;\r\n    }\r\n    currentElement[options.elementsKey].push(element);\r\n  }\r\n}\r\n\r\nfunction manipulateAttributes(attributes) {\r\n  if (\'attributesFn\' in options && attributes) {\r\n    attributes = options.attributesFn(attributes, currentElement);\r\n  }\r\n  if ((options.trim || \'attributeValueFn\' in options || \'attributeNameFn\' in options) && attributes) {\r\n    var key;\r\n    for (key in attributes) {\r\n      if (attributes.hasOwnProperty(key)) {\r\n        if (options.trim) attributes[key] = attributes[key].trim();\r\n        if (\'attributeValueFn\' in options) attributes[key] = options.attributeValueFn(attributes[key], key, currentElement);\r\n        if (\'attributeNameFn\' in options) {\r\n          var temp = attributes[key];\r\n          delete attributes[key];\r\n          attributes[options.attributeNameFn(key, attributes[key], currentElement)] = temp;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  return attributes;\r\n}\r\n\r\nfunction onInstruction(instruction) {\r\n  var attributes = {};\r\n  if (instruction.body && (instruction.name.toLowerCase() === \'xml\' || options.instructionHasAttributes)) {\r\n    var attrsRegExp = /([\\w:-]+)\\s*=\\s*(?:"([^"]*)"|\'([^\']*)\'|(\\w+))\\s*/g;\r\n    var match;\r\n    while ((match = attrsRegExp.exec(instruction.body)) !== null) {\r\n      attributes[match[1]] = match[2] || match[3] || match[4];\r\n    }\r\n    attributes = manipulateAttributes(attributes);\r\n  }\r\n  if (instruction.name.toLowerCase() === \'xml\') {\r\n    if (options.ignoreDeclaration) {\r\n      return;\r\n    }\r\n    currentElement[options.declarationKey] = {};\r\n    if (Object.keys(attributes).length) {\r\n      currentElement[options.declarationKey][options.attributesKey] = attributes;\r\n    }\r\n    if (options.addParent) {\r\n      currentElement[options.declarationKey][options.parentKey] = currentElement;\r\n    }\r\n  } else {\r\n    if (options.ignoreInstruction) {\r\n      return;\r\n    }\r\n    if (options.trim) {\r\n      instruction.body = instruction.body.trim();\r\n    }\r\n    var value = {};\r\n    if (options.instructionHasAttributes && Object.keys(attributes).length) {\r\n      value[instruction.name] = {};\r\n      value[instruction.name][options.attributesKey] = attributes;\r\n    } else {\r\n      value[instruction.name] = instruction.body;\r\n    }\r\n    addField(\'instruction\', value);\r\n  }\r\n}\r\n\r\nfunction onStartElement(name, attributes) {\r\n  var element;\r\n  if (typeof name === \'object\') {\r\n    attributes = name.attributes;\r\n    name = name.name;\r\n  }\r\n  attributes = manipulateAttributes(attributes);\r\n  if (\'elementNameFn\' in options) {\r\n    name = options.elementNameFn(name, currentElement);\r\n  }\r\n  if (options.compact) {\r\n    element = {};\r\n    if (!options.ignoreAttributes && attributes && Object.keys(attributes).length) {\r\n      element[options.attributesKey] = {};\r\n      var key;\r\n      for (key in attributes) {\r\n        if (attributes.hasOwnProperty(key)) {\r\n          element[options.attributesKey][key] = attributes[key];\r\n        }\r\n      }\r\n    }\r\n    if (\r\n      !(name in currentElement) &&\r\n      (isArray(options.alwaysArray) ? options.alwaysArray.indexOf(name) !== -1 : options.alwaysArray)\r\n    ) {\r\n      currentElement[name] = [];\r\n    }\r\n    if (currentElement[name] && !isArray(currentElement[name])) {\r\n      currentElement[name] = [currentElement[name]];\r\n    }\r\n    if (isArray(currentElement[name])) {\r\n      currentElement[name].push(element);\r\n    } else {\r\n      currentElement[name] = element;\r\n    }\r\n  } else {\r\n    if (!currentElement[options.elementsKey]) {\r\n      currentElement[options.elementsKey] = [];\r\n    }\r\n    element = {};\r\n    element[options.typeKey] = \'element\';\r\n    element[options.nameKey] = name;\r\n    if (!options.ignoreAttributes && attributes && Object.keys(attributes).length) {\r\n      element[options.attributesKey] = attributes;\r\n    }\r\n    if (options.alwaysChildren) {\r\n      element[options.elementsKey] = [];\r\n    }\r\n    currentElement[options.elementsKey].push(element);\r\n  }\r\n  element[options.parentKey] = currentElement; // will be deleted in onEndElement() if !options.addParent\r\n  currentElement = element;\r\n}\r\n\r\nfunction onText(text) {\r\n  if (options.ignoreText) {\r\n    return;\r\n  }\r\n  if (!text.trim() && !options.captureSpacesBetweenElements) {\r\n    return;\r\n  }\r\n  if (options.trim) {\r\n    text = text.trim();\r\n  }\r\n  if (options.nativeType) {\r\n    text = nativeType(text);\r\n  }\r\n  if (options.sanitize) {\r\n    text = text.replace(/&/g, \'&amp;\').replace(/</g, \'&lt;\').replace(/>/g, \'&gt;\');\r\n  }\r\n  addField(\'text\', text);\r\n}\r\n\r\nfunction onComment(comment) {\r\n  if (options.ignoreComment) {\r\n    return;\r\n  }\r\n  if (options.trim) {\r\n    comment = comment.trim();\r\n  }\r\n  addField(\'comment\', comment);\r\n}\r\n\r\nfunction onEndElement(name) {\r\n  var parentElement = currentElement[options.parentKey];\r\n  if (!options.addParent) {\r\n    delete currentElement[options.parentKey];\r\n  }\r\n  currentElement = parentElement;\r\n}\r\n\r\nfunction onCdata(cdata) {\r\n  if (options.ignoreCdata) {\r\n    return;\r\n  }\r\n  if (options.trim) {\r\n    cdata = cdata.trim();\r\n  }\r\n  addField(\'cdata\', cdata);\r\n}\r\n\r\nfunction onDoctype(doctype) {\r\n  if (options.ignoreDoctype) {\r\n    return;\r\n  }\r\n  doctype = doctype.replace(/^ /, \'\');\r\n  if (options.trim) {\r\n    doctype = doctype.trim();\r\n  }\r\n  addField(\'doctype\', doctype);\r\n}\r\n\r\nfunction onError(error) {\r\n  error.note = error; //console.error(error);\r\n}\r\n\r\nmodule.exports = function (xml, userOptions) {\r\n\r\n  var parser = pureJsParser ? sax.parser(true, {}) : parser = new expat.Parser(\'UTF-8\');\r\n  var result = {};\r\n  currentElement = result;\r\n\r\n  options = validateOptions(userOptions);\r\n\r\n  if (pureJsParser) {\r\n    parser.opt = {strictEntities: true};\r\n    parser.onopentag = onStartElement;\r\n    parser.ontext = onText;\r\n    parser.oncomment = onComment;\r\n    parser.onclosetag = onEndElement;\r\n    parser.onerror = onError;\r\n    parser.oncdata = onCdata;\r\n    parser.ondoctype = onDoctype;\r\n    parser.onprocessinginstruction = onInstruction;\r\n  } else {\r\n    parser.on(\'startElement\', onStartElement);\r\n    parser.on(\'text\', onText);\r\n    parser.on(\'comment\', onComment);\r\n    parser.on(\'endElement\', onEndElement);\r\n    parser.on(\'error\', onError);\r\n    //parser.on(\'startCdata\', onStartCdata);\r\n    //parser.on(\'endCdata\', onEndCdata);\r\n    //parser.on(\'entityDecl\', onEntityDecl);\r\n  }\r\n\r\n  if (pureJsParser) {\r\n    parser.write(xml).close();\r\n  } else {\r\n    if (!parser.parse(xml)) {\r\n      throw new Error(\'XML parsing error: \' + parser.getError());\r\n    }\r\n  }\r\n\r\n  if (result[options.elementsKey]) {\r\n    var temp = result[options.elementsKey];\r\n    delete result[options.elementsKey];\r\n    result[options.elementsKey] = temp;\r\n    delete result.text;\r\n  }\r\n\r\n  return result;\r\n\r\n};\r\n\r\n\r\n/***/ }),\r\n/* 15 */\r\n/***/ (function(module, exports) {\r\n\r\nvar toString = {}.toString;\r\n\r\nmodule.exports = Array.isArray || function (arr) {\r\n  return toString.call(arr) == \'[object Array]\';\r\n};\r\n\r\n\r\n/***/ }),\r\n/* 16 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\n"use strict";\r\n/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.\r\n//\r\n// Permission is hereby granted, free of charge, to any person obtaining a\r\n// copy of this software and associated documentation files (the\r\n// "Software"), to deal in the Software without restriction, including\r\n// without limitation the rights to use, copy, modify, merge, publish,\r\n// distribute, sublicense, and/or sell copies of the Software, and to permit\r\n// persons to whom the Software is furnished to do so, subject to the\r\n// following conditions:\r\n//\r\n// The above copyright notice and this permission notice shall be included\r\n// in all copies or substantial portions of the Software.\r\n//\r\n// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS\r\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\r\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\r\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\r\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\r\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\r\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\r\n\r\n\r\n\r\n/*<replacement>*/\r\n\r\nvar processNextTick = __webpack_require__(6);\r\n/*</replacement>*/\r\n\r\nmodule.exports = Readable;\r\n\r\n/*<replacement>*/\r\nvar isArray = __webpack_require__(15);\r\n/*</replacement>*/\r\n\r\n/*<replacement>*/\r\nvar Duplex;\r\n/*</replacement>*/\r\n\r\nReadable.ReadableState = ReadableState;\r\n\r\n/*<replacement>*/\r\nvar EE = __webpack_require__(8).EventEmitter;\r\n\r\nvar EElistenerCount = function (emitter, type) {\r\n  return emitter.listeners(type).length;\r\n};\r\n/*</replacement>*/\r\n\r\n/*<replacement>*/\r\nvar Stream = __webpack_require__(17);\r\n/*</replacement>*/\r\n\r\n// TODO(bmeurer): Change this back to const once hole checks are\r\n// properly optimized away early in Ignition+TurboFan.\r\n/*<replacement>*/\r\nvar Buffer = __webpack_require__(7).Buffer;\r\nvar OurUint8Array = global.Uint8Array || function () {};\r\nfunction _uint8ArrayToBuffer(chunk) {\r\n  return Buffer.from(chunk);\r\n}\r\nfunction _isUint8Array(obj) {\r\n  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;\r\n}\r\n/*</replacement>*/\r\n\r\n/*<replacement>*/\r\nvar util = __webpack_require__(3);\r\nutil.inherits = __webpack_require__(1);\r\n/*</replacement>*/\r\n\r\n/*<replacement>*/\r\nvar debugUtil = __webpack_require__(26);\r\nvar debug = void 0;\r\nif (debugUtil && debugUtil.debuglog) {\r\n  debug = debugUtil.debuglog(\'stream\');\r\n} else {\r\n  debug = function () {};\r\n}\r\n/*</replacement>*/\r\n\r\nvar BufferList = __webpack_require__(27);\r\nvar destroyImpl = __webpack_require__(18);\r\nvar StringDecoder;\r\n\r\nutil.inherits(Readable, Stream);\r\n\r\nvar kProxyEvents = [\'error\', \'close\', \'destroy\', \'pause\', \'resume\'];\r\n\r\nfunction prependListener(emitter, event, fn) {\r\n  // Sadly this is not cacheable as some libraries bundle their own\r\n  // event emitter implementation with them.\r\n  if (typeof emitter.prependListener === \'function\') {\r\n    return emitter.prependListener(event, fn);\r\n  } else {\r\n    // This is a hack to make sure that our error handler is attached before any\r\n    // userland ones.  NEVER DO THIS. This is here only because this code needs\r\n    // to continue to work with older versions of Node.js that do not include\r\n    // the prependListener() method. The goal is to eventually remove this hack.\r\n    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];\r\n  }\r\n}\r\n\r\nfunction ReadableState(options, stream) {\r\n  Duplex = Duplex || __webpack_require__(0);\r\n\r\n  options = options || {};\r\n\r\n  // object stream flag. Used to make read(n) ignore n and to\r\n  // make all the buffer merging and length checks go away\r\n  this.objectMode = !!options.objectMode;\r\n\r\n  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;\r\n\r\n  // the point at which it stops calling _read() to fill the buffer\r\n  // Note: 0 is a valid value, means "don\'t call _read preemptively ever"\r\n  var hwm = options.highWaterMark;\r\n  var defaultHwm = this.objectMode ? 16 : 16 * 1024;\r\n  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;\r\n\r\n  // cast to ints.\r\n  this.highWaterMark = Math.floor(this.highWaterMark);\r\n\r\n  // A linked list is used to store data chunks instead of an array because the\r\n  // linked list can remove elements from the beginning faster than\r\n  // array.shift()\r\n  this.buffer = new BufferList();\r\n  this.length = 0;\r\n  this.pipes = null;\r\n  this.pipesCount = 0;\r\n  this.flowing = null;\r\n  this.ended = false;\r\n  this.endEmitted = false;\r\n  this.reading = false;\r\n\r\n  // a flag to be able to tell if the event \'readable\'/\'data\' is emitted\r\n  // immediately, or on a later tick.  We set this to true at first, because\r\n  // any actions that shouldn\'t happen until "later" should generally also\r\n  // not happen before the first read call.\r\n  this.sync = true;\r\n\r\n  // whenever we return null, then we set a flag to say\r\n  // that we\'re awaiting a \'readable\' event emission.\r\n  this.needReadable = false;\r\n  this.emittedReadable = false;\r\n  this.readableListening = false;\r\n  this.resumeScheduled = false;\r\n\r\n  // has it been destroyed\r\n  this.destroyed = false;\r\n\r\n  // Crypto is kind of old and crusty.  Historically, its default string\r\n  // encoding is \'binary\' so we have to make this configurable.\r\n  // Everything else in the universe uses \'utf8\', though.\r\n  this.defaultEncoding = options.defaultEncoding || \'utf8\';\r\n\r\n  // the number of writers that are awaiting a drain event in .pipe()s\r\n  this.awaitDrain = 0;\r\n\r\n  // if true, a maybeReadMore has been scheduled\r\n  this.readingMore = false;\r\n\r\n  this.decoder = null;\r\n  this.encoding = null;\r\n  if (options.encoding) {\r\n    if (!StringDecoder) StringDecoder = __webpack_require__(11).StringDecoder;\r\n    this.decoder = new StringDecoder(options.encoding);\r\n    this.encoding = options.encoding;\r\n  }\r\n}\r\n\r\nfunction Readable(options) {\r\n  Duplex = Duplex || __webpack_require__(0);\r\n\r\n  if (!(this instanceof Readable)) return new Readable(options);\r\n\r\n  this._readableState = new ReadableState(options, this);\r\n\r\n  // legacy\r\n  this.readable = true;\r\n\r\n  if (options) {\r\n    if (typeof options.read === \'function\') this._read = options.read;\r\n\r\n    if (typeof options.destroy === \'function\') this._destroy = options.destroy;\r\n  }\r\n\r\n  Stream.call(this);\r\n}\r\n\r\nObject.defineProperty(Readable.prototype, \'destroyed\', {\r\n  get: function () {\r\n    if (this._readableState === undefined) {\r\n      return false;\r\n    }\r\n    return this._readableState.destroyed;\r\n  },\r\n  set: function (value) {\r\n    // we ignore the value if the stream\r\n    // has not been initialized yet\r\n    if (!this._readableState) {\r\n      return;\r\n    }\r\n\r\n    // backward compatibility, the user is explicitly\r\n    // managing destroyed\r\n    this._readableState.destroyed = value;\r\n  }\r\n});\r\n\r\nReadable.prototype.destroy = destroyImpl.destroy;\r\nReadable.prototype._undestroy = destroyImpl.undestroy;\r\nReadable.prototype._destroy = function (err, cb) {\r\n  this.push(null);\r\n  cb(err);\r\n};\r\n\r\n// Manually shove something into the read() buffer.\r\n// This returns true if the highWaterMark has not been hit yet,\r\n// similar to how Writable.write() returns true if you should\r\n// write() some more.\r\nReadable.prototype.push = function (chunk, encoding) {\r\n  var state = this._readableState;\r\n  var skipChunkCheck;\r\n\r\n  if (!state.objectMode) {\r\n    if (typeof chunk === \'string\') {\r\n      encoding = encoding || state.defaultEncoding;\r\n      if (encoding !== state.encoding) {\r\n        chunk = Buffer.from(chunk, encoding);\r\n        encoding = \'\';\r\n      }\r\n      skipChunkCheck = true;\r\n    }\r\n  } else {\r\n    skipChunkCheck = true;\r\n  }\r\n\r\n  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);\r\n};\r\n\r\n// Unshift should *always* be something directly out of read()\r\nReadable.prototype.unshift = function (chunk) {\r\n  return readableAddChunk(this, chunk, null, true, false);\r\n};\r\n\r\nfunction readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {\r\n  var state = stream._readableState;\r\n  if (chunk === null) {\r\n    state.reading = false;\r\n    onEofChunk(stream, state);\r\n  } else {\r\n    var er;\r\n    if (!skipChunkCheck) er = chunkInvalid(state, chunk);\r\n    if (er) {\r\n      stream.emit(\'error\', er);\r\n    } else if (state.objectMode || chunk && chunk.length > 0) {\r\n      if (typeof chunk !== \'string\' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {\r\n        chunk = _uint8ArrayToBuffer(chunk);\r\n      }\r\n\r\n      if (addToFront) {\r\n        if (state.endEmitted) stream.emit(\'error\', new Error(\'stream.unshift() after end event\'));else addChunk(stream, state, chunk, true);\r\n      } else if (state.ended) {\r\n        stream.emit(\'error\', new Error(\'stream.push() after EOF\'));\r\n      } else {\r\n        state.reading = false;\r\n        if (state.decoder && !encoding) {\r\n          chunk = state.decoder.write(chunk);\r\n          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);\r\n        } else {\r\n          addChunk(stream, state, chunk, false);\r\n        }\r\n      }\r\n    } else if (!addToFront) {\r\n      state.reading = false;\r\n    }\r\n  }\r\n\r\n  return needMoreData(state);\r\n}\r\n\r\nfunction addChunk(stream, state, chunk, addToFront) {\r\n  if (state.flowing && state.length === 0 && !state.sync) {\r\n    stream.emit(\'data\', chunk);\r\n    stream.read(0);\r\n  } else {\r\n    // update the buffer info.\r\n    state.length += state.objectMode ? 1 : chunk.length;\r\n    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);\r\n\r\n    if (state.needReadable) emitReadable(stream);\r\n  }\r\n  maybeReadMore(stream, state);\r\n}\r\n\r\nfunction chunkInvalid(state, chunk) {\r\n  var er;\r\n  if (!_isUint8Array(chunk) && typeof chunk !== \'string\' && chunk !== undefined && !state.objectMode) {\r\n    er = new TypeError(\'Invalid non-string/buffer chunk\');\r\n  }\r\n  return er;\r\n}\r\n\r\n// if it\'s past the high water mark, we can push in some more.\r\n// Also, if we have no data yet, we can stand some\r\n// more bytes.  This is to work around cases where hwm=0,\r\n// such as the repl.  Also, if the push() triggered a\r\n// readable event, and the user called read(largeNumber) such that\r\n// needReadable was set, then we ought to push more, so that another\r\n// \'readable\' event will be triggered.\r\nfunction needMoreData(state) {\r\n  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);\r\n}\r\n\r\nReadable.prototype.isPaused = function () {\r\n  return this._readableState.flowing === false;\r\n};\r\n\r\n// backwards compatibility.\r\nReadable.prototype.setEncoding = function (enc) {\r\n  if (!StringDecoder) StringDecoder = __webpack_require__(11).StringDecoder;\r\n  this._readableState.decoder = new StringDecoder(enc);\r\n  this._readableState.encoding = enc;\r\n  return this;\r\n};\r\n\r\n// Don\'t raise the hwm > 8MB\r\nvar MAX_HWM = 0x800000;\r\nfunction computeNewHighWaterMark(n) {\r\n  if (n >= MAX_HWM) {\r\n    n = MAX_HWM;\r\n  } else {\r\n    // Get the next highest power of 2 to prevent increasing hwm excessively in\r\n    // tiny amounts\r\n    n--;\r\n    n |= n >>> 1;\r\n    n |= n >>> 2;\r\n    n |= n >>> 4;\r\n    n |= n >>> 8;\r\n    n |= n >>> 16;\r\n    n++;\r\n  }\r\n  return n;\r\n}\r\n\r\n// This function is designed to be inlinable, so please take care when making\r\n// changes to the function body.\r\nfunction howMuchToRead(n, state) {\r\n  if (n <= 0 || state.length === 0 && state.ended) return 0;\r\n  if (state.objectMode) return 1;\r\n  if (n !== n) {\r\n    // Only flow one buffer at a time\r\n    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;\r\n  }\r\n  // If we\'re asking for more than the current hwm, then raise the hwm.\r\n  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);\r\n  if (n <= state.length) return n;\r\n  // Don\'t have enough\r\n  if (!state.ended) {\r\n    state.needReadable = true;\r\n    return 0;\r\n  }\r\n  return state.length;\r\n}\r\n\r\n// you can override either this method, or the async _read(n) below.\r\nReadable.prototype.read = function (n) {\r\n  debug(\'read\', n);\r\n  n = parseInt(n, 10);\r\n  var state = this._readableState;\r\n  var nOrig = n;\r\n\r\n  if (n !== 0) state.emittedReadable = false;\r\n\r\n  // if we\'re doing read(0) to trigger a readable event, but we\r\n  // already have a bunch of data in the buffer, then just trigger\r\n  // the \'readable\' event and move on.\r\n  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {\r\n    debug(\'read: emitReadable\', state.length, state.ended);\r\n    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);\r\n    return null;\r\n  }\r\n\r\n  n = howMuchToRead(n, state);\r\n\r\n  // if we\'ve ended, and we\'re now clear, then finish it up.\r\n  if (n === 0 && state.ended) {\r\n    if (state.length === 0) endReadable(this);\r\n    return null;\r\n  }\r\n\r\n  // All the actual chunk generation logic needs to be\r\n  // *below* the call to _read.  The reason is that in certain\r\n  // synthetic stream cases, such as passthrough streams, _read\r\n  // may be a completely synchronous operation which may change\r\n  // the state of the read buffer, providing enough data when\r\n  // before there was *not* enough.\r\n  //\r\n  // So, the steps are:\r\n  // 1. Figure out what the state of things will be after we do\r\n  // a read from the buffer.\r\n  //\r\n  // 2. If that resulting state will trigger a _read, then call _read.\r\n  // Note that this may be asynchronous, or synchronous.  Yes, it is\r\n  // deeply ugly to write APIs this way, but that still doesn\'t mean\r\n  // that the Readable class should behave improperly, as streams are\r\n  // designed to be sync/async agnostic.\r\n  // Take note if the _read call is sync or async (ie, if the read call\r\n  // has returned yet), so that we know whether or not it\'s safe to emit\r\n  // \'readable\' etc.\r\n  //\r\n  // 3. Actually pull the requested chunks out of the buffer and return.\r\n\r\n  // if we need a readable event, then we need to do some reading.\r\n  var doRead = state.needReadable;\r\n  debug(\'need readable\', doRead);\r\n\r\n  // if we currently have less than the highWaterMark, then also read some\r\n  if (state.length === 0 || state.length - n < state.highWaterMark) {\r\n    doRead = true;\r\n    debug(\'length less than watermark\', doRead);\r\n  }\r\n\r\n  // however, if we\'ve ended, then there\'s no point, and if we\'re already\r\n  // reading, then it\'s unnecessary.\r\n  if (state.ended || state.reading) {\r\n    doRead = false;\r\n    debug(\'reading or ended\', doRead);\r\n  } else if (doRead) {\r\n    debug(\'do read\');\r\n    state.reading = true;\r\n    state.sync = true;\r\n    // if the length is currently zero, then we *need* a readable event.\r\n    if (state.length === 0) state.needReadable = true;\r\n    // call internal read method\r\n    this._read(state.highWaterMark);\r\n    state.sync = false;\r\n    // If _read pushed data synchronously, then `reading` will be false,\r\n    // and we need to re-evaluate how much data we can return to the user.\r\n    if (!state.reading) n = howMuchToRead(nOrig, state);\r\n  }\r\n\r\n  var ret;\r\n  if (n > 0) ret = fromList(n, state);else ret = null;\r\n\r\n  if (ret === null) {\r\n    state.needReadable = true;\r\n    n = 0;\r\n  } else {\r\n    state.length -= n;\r\n  }\r\n\r\n  if (state.length === 0) {\r\n    // If we have nothing in the buffer, then we want to know\r\n    // as soon as we *do* get something into the buffer.\r\n    if (!state.ended) state.needReadable = true;\r\n\r\n    // If we tried to read() past the EOF, then emit end on the next tick.\r\n    if (nOrig !== n && state.ended) endReadable(this);\r\n  }\r\n\r\n  if (ret !== null) this.emit(\'data\', ret);\r\n\r\n  return ret;\r\n};\r\n\r\nfunction onEofChunk(stream, state) {\r\n  if (state.ended) return;\r\n  if (state.decoder) {\r\n    var chunk = state.decoder.end();\r\n    if (chunk && chunk.length) {\r\n      state.buffer.push(chunk);\r\n      state.length += state.objectMode ? 1 : chunk.length;\r\n    }\r\n  }\r\n  state.ended = true;\r\n\r\n  // emit \'readable\' now to make sure it gets picked up.\r\n  emitReadable(stream);\r\n}\r\n\r\n// Don\'t emit readable right away in sync mode, because this can trigger\r\n// another read() call => stack overflow.  This way, it might trigger\r\n// a nextTick recursion warning, but that\'s not so bad.\r\nfunction emitReadable(stream) {\r\n  var state = stream._readableState;\r\n  state.needReadable = false;\r\n  if (!state.emittedReadable) {\r\n    debug(\'emitReadable\', state.flowing);\r\n    state.emittedReadable = true;\r\n    if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);\r\n  }\r\n}\r\n\r\nfunction emitReadable_(stream) {\r\n  debug(\'emit readable\');\r\n  stream.emit(\'readable\');\r\n  flow(stream);\r\n}\r\n\r\n// at this point, the user has presumably seen the \'readable\' event,\r\n// and called read() to consume some data.  that may have triggered\r\n// in turn another _read(n) call, in which case reading = true if\r\n// it\'s in progress.\r\n// However, if we\'re not ended, or reading, and the length < hwm,\r\n// then go ahead and try to read some more preemptively.\r\nfunction maybeReadMore(stream, state) {\r\n  if (!state.readingMore) {\r\n    state.readingMore = true;\r\n    processNextTick(maybeReadMore_, stream, state);\r\n  }\r\n}\r\n\r\nfunction maybeReadMore_(stream, state) {\r\n  var len = state.length;\r\n  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {\r\n    debug(\'maybeReadMore read 0\');\r\n    stream.read(0);\r\n    if (len === state.length)\r\n      // didn\'t get any data, stop spinning.\r\n      break;else len = state.length;\r\n  }\r\n  state.readingMore = false;\r\n}\r\n\r\n// abstract method.  to be overridden in specific implementation classes.\r\n// call cb(er, data) where data is <= n in length.\r\n// for virtual (non-string, non-buffer) streams, "length" is somewhat\r\n// arbitrary, and perhaps not very meaningful.\r\nReadable.prototype._read = function (n) {\r\n  this.emit(\'error\', new Error(\'_read() is not implemented\'));\r\n};\r\n\r\nReadable.prototype.pipe = function (dest, pipeOpts) {\r\n  var src = this;\r\n  var state = this._readableState;\r\n\r\n  switch (state.pipesCount) {\r\n    case 0:\r\n      state.pipes = dest;\r\n      break;\r\n    case 1:\r\n      state.pipes = [state.pipes, dest];\r\n      break;\r\n    default:\r\n      state.pipes.push(dest);\r\n      break;\r\n  }\r\n  state.pipesCount += 1;\r\n  debug(\'pipe count=%d opts=%j\', state.pipesCount, pipeOpts);\r\n\r\n  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;\r\n\r\n  var endFn = doEnd ? onend : unpipe;\r\n  if (state.endEmitted) processNextTick(endFn);else src.once(\'end\', endFn);\r\n\r\n  dest.on(\'unpipe\', onunpipe);\r\n  function onunpipe(readable, unpipeInfo) {\r\n    debug(\'onunpipe\');\r\n    if (readable === src) {\r\n      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {\r\n        unpipeInfo.hasUnpiped = true;\r\n        cleanup();\r\n      }\r\n    }\r\n  }\r\n\r\n  function onend() {\r\n    debug(\'onend\');\r\n    dest.end();\r\n  }\r\n\r\n  // when the dest drains, it reduces the awaitDrain counter\r\n  // on the source.  This would be more elegant with a .once()\r\n  // handler in flow(), but adding and removing repeatedly is\r\n  // too slow.\r\n  var ondrain = pipeOnDrain(src);\r\n  dest.on(\'drain\', ondrain);\r\n\r\n  var cleanedUp = false;\r\n  function cleanup() {\r\n    debug(\'cleanup\');\r\n    // cleanup event handlers once the pipe is broken\r\n    dest.removeListener(\'close\', onclose);\r\n    dest.removeListener(\'finish\', onfinish);\r\n    dest.removeListener(\'drain\', ondrain);\r\n    dest.removeListener(\'error\', onerror);\r\n    dest.removeListener(\'unpipe\', onunpipe);\r\n    src.removeListener(\'end\', onend);\r\n    src.removeListener(\'end\', unpipe);\r\n    src.removeListener(\'data\', ondata);\r\n\r\n    cleanedUp = true;\r\n\r\n    // if the reader is waiting for a drain event from this\r\n    // specific writer, then it would cause it to never start\r\n    // flowing again.\r\n    // So, if this is awaiting a drain, then we just call it now.\r\n    // If we don\'t know, then assume that we are waiting for one.\r\n    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();\r\n  }\r\n\r\n  // If the user pushes more data while we\'re writing to dest then we\'ll end up\r\n  // in ondata again. However, we only want to increase awaitDrain once because\r\n  // dest will only emit one \'drain\' event for the multiple writes.\r\n  // => Introduce a guard on increasing awaitDrain.\r\n  var increasedAwaitDrain = false;\r\n  src.on(\'data\', ondata);\r\n  function ondata(chunk) {\r\n    debug(\'ondata\');\r\n    increasedAwaitDrain = false;\r\n    var ret = dest.write(chunk);\r\n    if (false === ret && !increasedAwaitDrain) {\r\n      // If the user unpiped during `dest.write()`, it is possible\r\n      // to get stuck in a permanently paused state if that write\r\n      // also returned false.\r\n      // => Check whether `dest` is still a piping destination.\r\n      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {\r\n        debug(\'false write response, pause\', src._readableState.awaitDrain);\r\n        src._readableState.awaitDrain++;\r\n        increasedAwaitDrain = true;\r\n      }\r\n      src.pause();\r\n    }\r\n  }\r\n\r\n  // if the dest has an error, then stop piping into it.\r\n  // however, don\'t suppress the throwing behavior for this.\r\n  function onerror(er) {\r\n    debug(\'onerror\', er);\r\n    unpipe();\r\n    dest.removeListener(\'error\', onerror);\r\n    if (EElistenerCount(dest, \'error\') === 0) dest.emit(\'error\', er);\r\n  }\r\n\r\n  // Make sure our error handler is attached before userland ones.\r\n  prependListener(dest, \'error\', onerror);\r\n\r\n  // Both close and finish should trigger unpipe, but only once.\r\n  function onclose() {\r\n    dest.removeListener(\'finish\', onfinish);\r\n    unpipe();\r\n  }\r\n  dest.once(\'close\', onclose);\r\n  function onfinish() {\r\n    debug(\'onfinish\');\r\n    dest.removeListener(\'close\', onclose);\r\n    unpipe();\r\n  }\r\n  dest.once(\'finish\', onfinish);\r\n\r\n  function unpipe() {\r\n    debug(\'unpipe\');\r\n    src.unpipe(dest);\r\n  }\r\n\r\n  // tell the dest that it\'s being piped to\r\n  dest.emit(\'pipe\', src);\r\n\r\n  // start the flow if it hasn\'t been started already.\r\n  if (!state.flowing) {\r\n    debug(\'pipe resume\');\r\n    src.resume();\r\n  }\r\n\r\n  return dest;\r\n};\r\n\r\nfunction pipeOnDrain(src) {\r\n  return function () {\r\n    var state = src._readableState;\r\n    debug(\'pipeOnDrain\', state.awaitDrain);\r\n    if (state.awaitDrain) state.awaitDrain--;\r\n    if (state.awaitDrain === 0 && EElistenerCount(src, \'data\')) {\r\n      state.flowing = true;\r\n      flow(src);\r\n    }\r\n  };\r\n}\r\n\r\nReadable.prototype.unpipe = function (dest) {\r\n  var state = this._readableState;\r\n  var unpipeInfo = { hasUnpiped: false };\r\n\r\n  // if we\'re not piping anywhere, then do nothing.\r\n  if (state.pipesCount === 0) return this;\r\n\r\n  // just one destination.  most common case.\r\n  if (state.pipesCount === 1) {\r\n    // passed in one, but it\'s not the right one.\r\n    if (dest && dest !== state.pipes) return this;\r\n\r\n    if (!dest) dest = state.pipes;\r\n\r\n    // got a match.\r\n    state.pipes = null;\r\n    state.pipesCount = 0;\r\n    state.flowing = false;\r\n    if (dest) dest.emit(\'unpipe\', this, unpipeInfo);\r\n    return this;\r\n  }\r\n\r\n  // slow case. multiple pipe destinations.\r\n\r\n  if (!dest) {\r\n    // remove all.\r\n    var dests = state.pipes;\r\n    var len = state.pipesCount;\r\n    state.pipes = null;\r\n    state.pipesCount = 0;\r\n    state.flowing = false;\r\n\r\n    for (var i = 0; i < len; i++) {\r\n      dests[i].emit(\'unpipe\', this, unpipeInfo);\r\n    }return this;\r\n  }\r\n\r\n  // try to find the right one.\r\n  var index = indexOf(state.pipes, dest);\r\n  if (index === -1) return this;\r\n\r\n  state.pipes.splice(index, 1);\r\n  state.pipesCount -= 1;\r\n  if (state.pipesCount === 1) state.pipes = state.pipes[0];\r\n\r\n  dest.emit(\'unpipe\', this, unpipeInfo);\r\n\r\n  return this;\r\n};\r\n\r\n// set up data events if they are asked for\r\n// Ensure readable listeners eventually get something\r\nReadable.prototype.on = function (ev, fn) {\r\n  var res = Stream.prototype.on.call(this, ev, fn);\r\n\r\n  if (ev === \'data\') {\r\n    // Start flowing on next tick if stream isn\'t explicitly paused\r\n    if (this._readableState.flowing !== false) this.resume();\r\n  } else if (ev === \'readable\') {\r\n    var state = this._readableState;\r\n    if (!state.endEmitted && !state.readableListening) {\r\n      state.readableListening = state.needReadable = true;\r\n      state.emittedReadable = false;\r\n      if (!state.reading) {\r\n        processNextTick(nReadingNextTick, this);\r\n      } else if (state.length) {\r\n        emitReadable(this);\r\n      }\r\n    }\r\n  }\r\n\r\n  return res;\r\n};\r\nReadable.prototype.addListener = Readable.prototype.on;\r\n\r\nfunction nReadingNextTick(self) {\r\n  debug(\'readable nexttick read 0\');\r\n  self.read(0);\r\n}\r\n\r\n// pause() and resume() are remnants of the legacy readable stream API\r\n// If the user uses them, then switch into old mode.\r\nReadable.prototype.resume = function () {\r\n  var state = this._readableState;\r\n  if (!state.flowing) {\r\n    debug(\'resume\');\r\n    state.flowing = true;\r\n    resume(this, state);\r\n  }\r\n  return this;\r\n};\r\n\r\nfunction resume(stream, state) {\r\n  if (!state.resumeScheduled) {\r\n    state.resumeScheduled = true;\r\n    processNextTick(resume_, stream, state);\r\n  }\r\n}\r\n\r\nfunction resume_(stream, state) {\r\n  if (!state.reading) {\r\n    debug(\'resume read 0\');\r\n    stream.read(0);\r\n  }\r\n\r\n  state.resumeScheduled = false;\r\n  state.awaitDrain = 0;\r\n  stream.emit(\'resume\');\r\n  flow(stream);\r\n  if (state.flowing && !state.reading) stream.read(0);\r\n}\r\n\r\nReadable.prototype.pause = function () {\r\n  debug(\'call pause flowing=%j\', this._readableState.flowing);\r\n  if (false !== this._readableState.flowing) {\r\n    debug(\'pause\');\r\n    this._readableState.flowing = false;\r\n    this.emit(\'pause\');\r\n  }\r\n  return this;\r\n};\r\n\r\nfunction flow(stream) {\r\n  var state = stream._readableState;\r\n  debug(\'flow\', state.flowing);\r\n  while (state.flowing && stream.read() !== null) {}\r\n}\r\n\r\n// wrap an old-style stream as the async data source.\r\n// This is *not* part of the readable stream interface.\r\n// It is an ugly unfortunate mess of history.\r\nReadable.prototype.wrap = function (stream) {\r\n  var state = this._readableState;\r\n  var paused = false;\r\n\r\n  var self = this;\r\n  stream.on(\'end\', function () {\r\n    debug(\'wrapped end\');\r\n    if (state.decoder && !state.ended) {\r\n      var chunk = state.decoder.end();\r\n      if (chunk && chunk.length) self.push(chunk);\r\n    }\r\n\r\n    self.push(null);\r\n  });\r\n\r\n  stream.on(\'data\', function (chunk) {\r\n    debug(\'wrapped data\');\r\n    if (state.decoder) chunk = state.decoder.write(chunk);\r\n\r\n    // don\'t skip over falsy values in objectMode\r\n    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;\r\n\r\n    var ret = self.push(chunk);\r\n    if (!ret) {\r\n      paused = true;\r\n      stream.pause();\r\n    }\r\n  });\r\n\r\n  // proxy all the other methods.\r\n  // important when wrapping filters and duplexes.\r\n  for (var i in stream) {\r\n    if (this[i] === undefined && typeof stream[i] === \'function\') {\r\n      this[i] = function (method) {\r\n        return function () {\r\n          return stream[method].apply(stream, arguments);\r\n        };\r\n      }(i);\r\n    }\r\n  }\r\n\r\n  // proxy certain important events.\r\n  for (var n = 0; n < kProxyEvents.length; n++) {\r\n    stream.on(kProxyEvents[n], self.emit.bind(self, kProxyEvents[n]));\r\n  }\r\n\r\n  // when we try to consume some more bytes, simply unpause the\r\n  // underlying stream.\r\n  self._read = function (n) {\r\n    debug(\'wrapped _read\', n);\r\n    if (paused) {\r\n      paused = false;\r\n      stream.resume();\r\n    }\r\n  };\r\n\r\n  return self;\r\n};\r\n\r\n// exposed for testing purposes only.\r\nReadable._fromList = fromList;\r\n\r\n// Pluck off n bytes from an array of buffers.\r\n// Length is the combined lengths of all the buffers in the list.\r\n// This function is designed to be inlinable, so please take care when making\r\n// changes to the function body.\r\nfunction fromList(n, state) {\r\n  // nothing buffered\r\n  if (state.length === 0) return null;\r\n\r\n  var ret;\r\n  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {\r\n    // read it all, truncate the list\r\n    if (state.decoder) ret = state.buffer.join(\'\');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);\r\n    state.buffer.clear();\r\n  } else {\r\n    // read part of list\r\n    ret = fromListPartial(n, state.buffer, state.decoder);\r\n  }\r\n\r\n  return ret;\r\n}\r\n\r\n// Extracts only enough buffered data to satisfy the amount requested.\r\n// This function is designed to be inlinable, so please take care when making\r\n// changes to the function body.\r\nfunction fromListPartial(n, list, hasStrings) {\r\n  var ret;\r\n  if (n < list.head.data.length) {\r\n    // slice is the same for buffers and strings\r\n    ret = list.head.data.slice(0, n);\r\n    list.head.data = list.head.data.slice(n);\r\n  } else if (n === list.head.data.length) {\r\n    // first chunk is a perfect match\r\n    ret = list.shift();\r\n  } else {\r\n    // result spans more than one buffer\r\n    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);\r\n  }\r\n  return ret;\r\n}\r\n\r\n// Copies a specified amount of characters from the list of buffered data\r\n// chunks.\r\n// This function is designed to be inlinable, so please take care when making\r\n// changes to the function body.\r\nfunction copyFromBufferString(n, list) {\r\n  var p = list.head;\r\n  var c = 1;\r\n  var ret = p.data;\r\n  n -= ret.length;\r\n  while (p = p.next) {\r\n    var str = p.data;\r\n    var nb = n > str.length ? str.length : n;\r\n    if (nb === str.length) ret += str;else ret += str.slice(0, n);\r\n    n -= nb;\r\n    if (n === 0) {\r\n      if (nb === str.length) {\r\n        ++c;\r\n        if (p.next) list.head = p.next;else list.head = list.tail = null;\r\n      } else {\r\n        list.head = p;\r\n        p.data = str.slice(nb);\r\n      }\r\n      break;\r\n    }\r\n    ++c;\r\n  }\r\n  list.length -= c;\r\n  return ret;\r\n}\r\n\r\n// Copies a specified amount of bytes from the list of buffered data chunks.\r\n// This function is designed to be inlinable, so please take care when making\r\n// changes to the function body.\r\nfunction copyFromBuffer(n, list) {\r\n  var ret = Buffer.allocUnsafe(n);\r\n  var p = list.head;\r\n  var c = 1;\r\n  p.data.copy(ret);\r\n  n -= p.data.length;\r\n  while (p = p.next) {\r\n    var buf = p.data;\r\n    var nb = n > buf.length ? buf.length : n;\r\n    buf.copy(ret, ret.length - n, 0, nb);\r\n    n -= nb;\r\n    if (n === 0) {\r\n      if (nb === buf.length) {\r\n        ++c;\r\n        if (p.next) list.head = p.next;else list.head = list.tail = null;\r\n      } else {\r\n        list.head = p;\r\n        p.data = buf.slice(nb);\r\n      }\r\n      break;\r\n    }\r\n    ++c;\r\n  }\r\n  list.length -= c;\r\n  return ret;\r\n}\r\n\r\nfunction endReadable(stream) {\r\n  var state = stream._readableState;\r\n\r\n  // If we get here before consuming all the bytes, then that is a\r\n  // bug in node.  Should never happen.\r\n  if (state.length > 0) throw new Error(\'"endReadable()" called on non-empty stream\');\r\n\r\n  if (!state.endEmitted) {\r\n    state.ended = true;\r\n    processNextTick(endReadableNT, state, stream);\r\n  }\r\n}\r\n\r\nfunction endReadableNT(state, stream) {\r\n  // Check that we didn\'t get one last unshift.\r\n  if (!state.endEmitted && state.length === 0) {\r\n    state.endEmitted = true;\r\n    stream.readable = false;\r\n    stream.emit(\'end\');\r\n  }\r\n}\r\n\r\nfunction forEach(xs, f) {\r\n  for (var i = 0, l = xs.length; i < l; i++) {\r\n    f(xs[i], i);\r\n  }\r\n}\r\n\r\nfunction indexOf(xs, x) {\r\n  for (var i = 0, l = xs.length; i < l; i++) {\r\n    if (xs[i] === x) return i;\r\n  }\r\n  return -1;\r\n}\r\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(5)))\r\n\r\n/***/ }),\r\n/* 17 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\nmodule.exports = __webpack_require__(8).EventEmitter;\r\n\r\n\r\n/***/ }),\r\n/* 18 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\n"use strict";\r\n\r\n\r\n/*<replacement>*/\r\n\r\nvar processNextTick = __webpack_require__(6);\r\n/*</replacement>*/\r\n\r\n// undocumented cb() API, needed for core, not for public API\r\nfunction destroy(err, cb) {\r\n  var _this = this;\r\n\r\n  var readableDestroyed = this._readableState && this._readableState.destroyed;\r\n  var writableDestroyed = this._writableState && this._writableState.destroyed;\r\n\r\n  if (readableDestroyed || writableDestroyed) {\r\n    if (cb) {\r\n      cb(err);\r\n    } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {\r\n      processNextTick(emitErrorNT, this, err);\r\n    }\r\n    return;\r\n  }\r\n\r\n  // we set destroyed to true before firing error callbacks in order\r\n  // to make it re-entrance safe in case destroy() is called within callbacks\r\n\r\n  if (this._readableState) {\r\n    this._readableState.destroyed = true;\r\n  }\r\n\r\n  // if this is a duplex stream mark the writable part as destroyed as well\r\n  if (this._writableState) {\r\n    this._writableState.destroyed = true;\r\n  }\r\n\r\n  this._destroy(err || null, function (err) {\r\n    if (!cb && err) {\r\n      processNextTick(emitErrorNT, _this, err);\r\n      if (_this._writableState) {\r\n        _this._writableState.errorEmitted = true;\r\n      }\r\n    } else if (cb) {\r\n      cb(err);\r\n    }\r\n  });\r\n}\r\n\r\nfunction undestroy() {\r\n  if (this._readableState) {\r\n    this._readableState.destroyed = false;\r\n    this._readableState.reading = false;\r\n    this._readableState.ended = false;\r\n    this._readableState.endEmitted = false;\r\n  }\r\n\r\n  if (this._writableState) {\r\n    this._writableState.destroyed = false;\r\n    this._writableState.ended = false;\r\n    this._writableState.ending = false;\r\n    this._writableState.finished = false;\r\n    this._writableState.errorEmitted = false;\r\n  }\r\n}\r\n\r\nfunction emitErrorNT(self, err) {\r\n  self.emit(\'error\', err);\r\n}\r\n\r\nmodule.exports = {\r\n  destroy: destroy,\r\n  undestroy: undestroy\r\n};\r\n\r\n/***/ }),\r\n/* 19 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\n"use strict";\r\n// Copyright Joyent, Inc. and other Node contributors.\r\n//\r\n// Permission is hereby granted, free of charge, to any person obtaining a\r\n// copy of this software and associated documentation files (the\r\n// "Software"), to deal in the Software without restriction, including\r\n// without limitation the rights to use, copy, modify, merge, publish,\r\n// distribute, sublicense, and/or sell copies of the Software, and to permit\r\n// persons to whom the Software is furnished to do so, subject to the\r\n// following conditions:\r\n//\r\n// The above copyright notice and this permission notice shall be included\r\n// in all copies or substantial portions of the Software.\r\n//\r\n// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS\r\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\r\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\r\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\r\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\r\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\r\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\r\n\r\n// a transform stream is a readable/writable stream where you do\r\n// something with the data.  Sometimes it\'s called a "filter",\r\n// but that\'s not a great name for it, since that implies a thing where\r\n// some bits pass through, and others are simply ignored.  (That would\r\n// be a valid example of a transform, of course.)\r\n//\r\n// While the output is causally related to the input, it\'s not a\r\n// necessarily symmetric or synchronous transformation.  For example,\r\n// a zlib stream might take multiple plain-text writes(), and then\r\n// emit a single compressed chunk some time in the future.\r\n//\r\n// Here\'s how this works:\r\n//\r\n// The Transform stream has all the aspects of the readable and writable\r\n// stream classes.  When you write(chunk), that calls _write(chunk,cb)\r\n// internally, and returns false if there\'s a lot of pending writes\r\n// buffered up.  When you call read(), that calls _read(n) until\r\n// there\'s enough pending readable data buffered up.\r\n//\r\n// In a transform stream, the written data is placed in a buffer.  When\r\n// _read(n) is called, it transforms the queued up data, calling the\r\n// buffered _write cb\'s as it consumes chunks.  If consuming a single\r\n// written chunk would result in multiple output chunks, then the first\r\n// outputted bit calls the readcb, and subsequent chunks just go into\r\n// the read buffer, and will cause it to emit \'readable\' if necessary.\r\n//\r\n// This way, back-pressure is actually determined by the reading side,\r\n// since _read has to be called to start processing a new chunk.  However,\r\n// a pathological inflate type of transform can cause excessive buffering\r\n// here.  For example, imagine a stream where every byte of input is\r\n// interpreted as an integer from 0-255, and then results in that many\r\n// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in\r\n// 1kb of data being output.  In this case, you could write a very small\r\n// amount of input, and end up with a very large amount of output.  In\r\n// such a pathological inflating mechanism, there\'d be no way to tell\r\n// the system to stop doing the transform.  A single 4MB write could\r\n// cause the system to run out of memory.\r\n//\r\n// However, even in such a pathological case, only a single written chunk\r\n// would be consumed, and then the rest would wait (un-transformed) until\r\n// the results of the previous transformed chunk were consumed.\r\n\r\n\r\n\r\nmodule.exports = Transform;\r\n\r\nvar Duplex = __webpack_require__(0);\r\n\r\n/*<replacement>*/\r\nvar util = __webpack_require__(3);\r\nutil.inherits = __webpack_require__(1);\r\n/*</replacement>*/\r\n\r\nutil.inherits(Transform, Duplex);\r\n\r\nfunction TransformState(stream) {\r\n  this.afterTransform = function (er, data) {\r\n    return afterTransform(stream, er, data);\r\n  };\r\n\r\n  this.needTransform = false;\r\n  this.transforming = false;\r\n  this.writecb = null;\r\n  this.writechunk = null;\r\n  this.writeencoding = null;\r\n}\r\n\r\nfunction afterTransform(stream, er, data) {\r\n  var ts = stream._transformState;\r\n  ts.transforming = false;\r\n\r\n  var cb = ts.writecb;\r\n\r\n  if (!cb) {\r\n    return stream.emit(\'error\', new Error(\'write callback called multiple times\'));\r\n  }\r\n\r\n  ts.writechunk = null;\r\n  ts.writecb = null;\r\n\r\n  if (data !== null && data !== undefined) stream.push(data);\r\n\r\n  cb(er);\r\n\r\n  var rs = stream._readableState;\r\n  rs.reading = false;\r\n  if (rs.needReadable || rs.length < rs.highWaterMark) {\r\n    stream._read(rs.highWaterMark);\r\n  }\r\n}\r\n\r\nfunction Transform(options) {\r\n  if (!(this instanceof Transform)) return new Transform(options);\r\n\r\n  Duplex.call(this, options);\r\n\r\n  this._transformState = new TransformState(this);\r\n\r\n  var stream = this;\r\n\r\n  // start out asking for a readable event once data is transformed.\r\n  this._readableState.needReadable = true;\r\n\r\n  // we have implemented the _read method, and done the other things\r\n  // that Readable wants before the first _read call, so unset the\r\n  // sync guard flag.\r\n  this._readableState.sync = false;\r\n\r\n  if (options) {\r\n    if (typeof options.transform === \'function\') this._transform = options.transform;\r\n\r\n    if (typeof options.flush === \'function\') this._flush = options.flush;\r\n  }\r\n\r\n  // When the writable side finishes, then flush out anything remaining.\r\n  this.once(\'prefinish\', function () {\r\n    if (typeof this._flush === \'function\') this._flush(function (er, data) {\r\n      done(stream, er, data);\r\n    });else done(stream);\r\n  });\r\n}\r\n\r\nTransform.prototype.push = function (chunk, encoding) {\r\n  this._transformState.needTransform = false;\r\n  return Duplex.prototype.push.call(this, chunk, encoding);\r\n};\r\n\r\n// This is the part where you do stuff!\r\n// override this function in implementation classes.\r\n// \'chunk\' is an input chunk.\r\n//\r\n// Call `push(newChunk)` to pass along transformed output\r\n// to the readable side.  You may call \'push\' zero or more times.\r\n//\r\n// Call `cb(err)` when you are done with this chunk.  If you pass\r\n// an error, then that\'ll put the hurt on the whole operation.  If you\r\n// never call cb(), then you\'ll never get another chunk.\r\nTransform.prototype._transform = function (chunk, encoding, cb) {\r\n  throw new Error(\'_transform() is not implemented\');\r\n};\r\n\r\nTransform.prototype._write = function (chunk, encoding, cb) {\r\n  var ts = this._transformState;\r\n  ts.writecb = cb;\r\n  ts.writechunk = chunk;\r\n  ts.writeencoding = encoding;\r\n  if (!ts.transforming) {\r\n    var rs = this._readableState;\r\n    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);\r\n  }\r\n};\r\n\r\n// Doesn\'t matter what the args are here.\r\n// _transform does all the work.\r\n// That we got here means that the readable side wants more data.\r\nTransform.prototype._read = function (n) {\r\n  var ts = this._transformState;\r\n\r\n  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {\r\n    ts.transforming = true;\r\n    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);\r\n  } else {\r\n    // mark that we need a transform, so that any data that comes in\r\n    // will get processed, now that we\'ve asked for it.\r\n    ts.needTransform = true;\r\n  }\r\n};\r\n\r\nTransform.prototype._destroy = function (err, cb) {\r\n  var _this = this;\r\n\r\n  Duplex.prototype._destroy.call(this, err, function (err2) {\r\n    cb(err2);\r\n    _this.emit(\'close\');\r\n  });\r\n};\r\n\r\nfunction done(stream, er, data) {\r\n  if (er) return stream.emit(\'error\', er);\r\n\r\n  if (data !== null && data !== undefined) stream.push(data);\r\n\r\n  // if there\'s nothing in the write buffer, then that means\r\n  // that nothing more will ever be provided\r\n  var ws = stream._writableState;\r\n  var ts = stream._transformState;\r\n\r\n  if (ws.length) throw new Error(\'Calling transform done when ws.length != 0\');\r\n\r\n  if (ts.transforming) throw new Error(\'Calling transform done when still transforming\');\r\n\r\n  return stream.push(null);\r\n}\r\n\r\n/***/ }),\r\n/* 20 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\nvar helper = __webpack_require__(12);\r\nvar isArray = __webpack_require__(13).isArray;\r\n\r\nvar currentElement, currentElementName;\r\n\r\nfunction validateOptions(userOptions) {\r\n  var options = helper.copyOptions(userOptions);\r\n  helper.ensureFlagExists(\'ignoreDeclaration\', options);\r\n  helper.ensureFlagExists(\'ignoreInstruction\', options);\r\n  helper.ensureFlagExists(\'ignoreAttributes\', options);\r\n  helper.ensureFlagExists(\'ignoreText\', options);\r\n  helper.ensureFlagExists(\'ignoreComment\', options);\r\n  helper.ensureFlagExists(\'ignoreCdata\', options);\r\n  helper.ensureFlagExists(\'ignoreDoctype\', options);\r\n  helper.ensureFlagExists(\'compact\', options);\r\n  helper.ensureFlagExists(\'indentText\', options);\r\n  helper.ensureFlagExists(\'indentCdata\', options);\r\n  helper.ensureFlagExists(\'indentAttributes\', options);\r\n  helper.ensureFlagExists(\'indentInstruction\', options);\r\n  helper.ensureFlagExists(\'fullTagEmptyElement\', options);\r\n  helper.ensureFlagExists(\'noQuotesForNativeAttributes\', options);\r\n  helper.ensureSpacesExists(options);\r\n  if (typeof options.spaces === \'number\') {\r\n    options.spaces = Array(options.spaces + 1).join(\' \');\r\n  }\r\n  helper.ensureKeyExists(\'declaration\', options);\r\n  helper.ensureKeyExists(\'instruction\', options);\r\n  helper.ensureKeyExists(\'attributes\', options);\r\n  helper.ensureKeyExists(\'text\', options);\r\n  helper.ensureKeyExists(\'comment\', options);\r\n  helper.ensureKeyExists(\'cdata\', options);\r\n  helper.ensureKeyExists(\'doctype\', options);\r\n  helper.ensureKeyExists(\'type\', options);\r\n  helper.ensureKeyExists(\'name\', options);\r\n  helper.ensureKeyExists(\'elements\', options);\r\n  helper.checkFnExists(\'doctype\', options);\r\n  helper.checkFnExists(\'instruction\', options);\r\n  helper.checkFnExists(\'cdata\', options);\r\n  helper.checkFnExists(\'comment\', options);\r\n  helper.checkFnExists(\'text\', options);\r\n  helper.checkFnExists(\'instructionName\', options);\r\n  helper.checkFnExists(\'elementName\', options);\r\n  helper.checkFnExists(\'attributeName\', options);\r\n  helper.checkFnExists(\'attributeValue\', options);\r\n  helper.checkFnExists(\'attributes\', options);\r\n  helper.checkFnExists(\'fullTagEmptyElement\', options);\r\n  return options;\r\n}\r\n\r\nfunction writeIndentation(options, depth, firstLine) {\r\n  return (!firstLine && options.spaces ? \'\\n\' : \'\') + Array(depth + 1).join(options.spaces);\r\n}\r\n\r\nfunction writeAttributes(attributes, options, depth) {\r\n  if (options.ignoreAttributes) {\r\n    return \'\';\r\n  }\r\n  if (\'attributesFn\' in options) {\r\n    attributes = options.attributesFn(attributes, currentElementName, currentElement);\r\n  }\r\n  var key, attr, attrName, quote, result = \'\';\r\n  for (key in attributes) {\r\n    if (attributes.hasOwnProperty(key)) {\r\n      quote = options.noQuotesForNativeAttributes && typeof attributes[key] !== \'string\' ? \'\' : \'"\';\r\n      attr = \'\' + attributes[key]; // ensure number and boolean are converted to String\r\n      attr = attr.replace(/"/g, \'&quot;\');\r\n      attrName = \'attributeNameFn\' in options ? options.attributeNameFn(key, attr, currentElementName, currentElement) : key;\r\n      result += (options.spaces && options.indentAttributes? writeIndentation(options, depth+1, false) : \' \');\r\n      result += attrName + \'=\' + quote + (\'attributeValueFn\' in options ? options.attributeValueFn(attr, key, currentElementName, currentElement) : attr) + quote;\r\n    }\r\n  }\r\n  if (attributes && Object.keys(attributes).length && options.spaces && options.indentAttributes) {\r\n    result += writeIndentation(options, depth, false);\r\n  }\r\n  return result;\r\n}\r\n\r\nfunction writeDeclaration(declaration, options, depth) {\r\n  currentElement = declaration;\r\n  currentElementName = \'xml\';\r\n  return options.ignoreDeclaration ? \'\' :  \'<?\' + \'xml\' + writeAttributes(declaration[options.attributesKey], options, depth) + \'?>\';\r\n}\r\n\r\nfunction writeInstruction(instruction, options, depth) {\r\n  if (options.ignoreInstruction) {\r\n    return \'\';\r\n  }\r\n  var key;\r\n  for (key in instruction) {\r\n    if (instruction.hasOwnProperty(key)) {\r\n      break;\r\n    }\r\n  }\r\n  var instructionName = \'instructionNameFn\' in options ? options.instructionNameFn(key, instruction[key], currentElementName, currentElement) : key;\r\n  if (typeof instruction[key] === \'object\') {\r\n    currentElement = instruction;\r\n    currentElementName = instructionName;\r\n    return \'<?\' + instructionName + writeAttributes(instruction[key][options.attributesKey], options, depth) + \'?>\';\r\n  } else {\r\n    var instructionValue = instruction[key] ? instruction[key] : \'\';\r\n    if (\'instructionFn\' in options) instructionValue = options.instructionFn(instructionValue, key, currentElementName, currentElement);\r\n    return \'<?\' + instructionName + (instructionValue ? \' \' + instructionValue : \'\') + \'?>\';\r\n  }\r\n}\r\n\r\nfunction writeComment(comment, options) {\r\n  return options.ignoreComment ? \'\' : \'<!--\' + (\'commentFn\' in options ? options.commentFn(comment, currentElementName, currentElement) : comment) + \'-->\';\r\n}\r\n\r\nfunction writeCdata(cdata, options) {\r\n  return options.ignoreCdata ? \'\' : \'<![CDATA[\' + (\'cdataFn\' in options ? options.cdataFn(cdata, currentElementName, currentElement) : cdata) + \']]>\';\r\n}\r\n\r\nfunction writeDoctype(doctype, options) {\r\n  return options.ignoreDoctype ? \'\' : \'<!DOCTYPE \' + (\'doctypeFn\' in options ? options.doctypeFn(doctype, currentElementName, currentElement) : doctype) + \'>\';\r\n}\r\n\r\nfunction writeText(text, options) {\r\n  if (options.ignoreText) return \'\';\r\n  text = \'\' + text; // ensure Number and Boolean are converted to String\r\n  text = text.replace(/&amp;/g, \'&\'); // desanitize to avoid double sanitization\r\n  text = text.replace(/&/g, \'&amp;\').replace(/</g, \'&lt;\').replace(/>/g, \'&gt;\');\r\n  return \'textFn\' in options ? options.textFn(text, currentElementName, currentElement) : text;\r\n}\r\n\r\nfunction hasContent(element, options) {\r\n  var i;\r\n  if (element.elements && element.elements.length) {\r\n    for (i = 0; i < element.elements.length; ++i) {\r\n      switch (element.elements[i][options.typeKey]) {\r\n      case \'text\':\r\n        if (options.indentText) {\r\n          return true;\r\n        }\r\n        break; // skip to next key\r\n      case \'cdata\':\r\n        if (options.indentCdata) {\r\n          return true;\r\n        }\r\n        break; // skip to next key\r\n      case \'instruction\':\r\n        if (options.indentInstruction) {\r\n          return true;\r\n        }\r\n        break; // skip to next key\r\n      case \'doctype\':\r\n      case \'comment\':\r\n      case \'element\':\r\n        return true;\r\n      default:\r\n        return true;\r\n      }\r\n    }\r\n  }\r\n  return false;\r\n}\r\n\r\nfunction writeElement(element, options, depth) {\r\n  currentElement = element;\r\n  currentElementName = element.name;\r\n  var xml = \'\', elementName = \'elementNameFn\' in options ? options.elementNameFn(element.name, element) : element.name;\r\n  xml += \'<\' + elementName;\r\n  if (element[options.attributesKey]) {\r\n    xml += writeAttributes(element[options.attributesKey], options, depth);\r\n  }\r\n  var withClosingTag = element[options.elementsKey] && element[options.elementsKey].length || element[options.attributesKey] && element[options.attributesKey][\'xml:space\'] === \'preserve\';\r\n  if (!withClosingTag) {\r\n    if (\'fullTagEmptyElementFn\' in options) {\r\n      withClosingTag = options.fullTagEmptyElementFn(element.name, element);\r\n    } else {\r\n      withClosingTag = options.fullTagEmptyElement;\r\n    }\r\n  }\r\n  if (withClosingTag) {\r\n    xml += \'>\';\r\n    if (element[options.elementsKey] && element[options.elementsKey].length) {\r\n      xml += writeElements(element[options.elementsKey], options, depth + 1);\r\n      currentElement = element;\r\n      currentElementName = element.name;\r\n    }\r\n    xml += options.spaces && hasContent(element, options) ? \'\\n\' + Array(depth + 1).join(options.spaces) : \'\';\r\n    xml += \'</\' + elementName + \'>\';\r\n  } else {\r\n    xml += \'/>\';\r\n  }\r\n  return xml;\r\n}\r\n\r\nfunction writeElements(elements, options, depth, firstLine) {\r\n  return elements.reduce(function (xml, element) {\r\n    var indent = writeIndentation(options, depth, firstLine && !xml);\r\n    switch (element.type) {\r\n    case \'element\': return xml + indent + writeElement(element, options, depth);\r\n    case \'comment\': return xml + indent + writeComment(element[options.commentKey], options);\r\n    case \'doctype\': return xml + indent + writeDoctype(element[options.doctypeKey], options);\r\n    case \'cdata\': return xml + (options.indentCdata ? indent : \'\') + writeCdata(element[options.cdataKey], options);\r\n    case \'text\': return xml + (options.indentText ? indent : \'\') + writeText(element[options.textKey], options);\r\n    case \'instruction\':\r\n      var instruction = {};\r\n      instruction[element[options.nameKey]] = element[options.attributesKey] ? element : element[options.instructionKey];\r\n      return xml + (options.indentInstruction ? indent : \'\') + writeInstruction(instruction, options, depth);\r\n    }\r\n  }, \'\');\r\n}\r\n\r\nfunction hasContentCompact(element, options, anyContent) {\r\n  var key;\r\n  for (key in element) {\r\n    if (element.hasOwnProperty(key)) {\r\n      switch (key) {\r\n      case options.parentKey:\r\n      case options.attributesKey:\r\n        break; // skip to next key\r\n      case options.textKey:\r\n        if (options.indentText || anyContent) {\r\n          return true;\r\n        }\r\n        break; // skip to next key\r\n      case options.cdataKey:\r\n        if (options.indentCdata || anyContent) {\r\n          return true;\r\n        }\r\n        break; // skip to next key\r\n      case options.instructionKey:\r\n        if (options.indentInstruction || anyContent) {\r\n          return true;\r\n        }\r\n        break; // skip to next key\r\n      case options.doctypeKey:\r\n      case options.commentKey:\r\n        return true;\r\n      default:\r\n        return true;\r\n      }\r\n    }\r\n  }\r\n  return false;\r\n}\r\n\r\nfunction writeElementCompact(element, name, options, depth, indent) {\r\n  currentElement = element;\r\n  currentElementName = name;\r\n  var elementName = \'elementNameFn\' in options ? options.elementNameFn(name, element) : name;\r\n  if (typeof element === \'undefined\' || element === null) {\r\n    return \'fullTagEmptyElementFn\' in options && options.fullTagEmptyElementFn(name, element) || options.fullTagEmptyElement ? \'<\' + elementName + \'></\' + elementName + \'>\' : \'<\' + elementName + \'/>\';\r\n  }\r\n  var xml = \'\';\r\n  if (name) {\r\n    xml += \'<\' + elementName;\r\n    if (typeof element !== \'object\') {\r\n      xml += \'>\' + writeText(element,options) + \'</\' + elementName + \'>\';\r\n      return xml;\r\n    }\r\n    if (element[options.attributesKey]) {\r\n      xml += writeAttributes(element[options.attributesKey], options, depth);\r\n    }\r\n    var withClosingTag = hasContentCompact(element, options, true) || element[options.attributesKey] && element[options.attributesKey][\'xml:space\'] === \'preserve\';\r\n    if (!withClosingTag) {\r\n      if (\'fullTagEmptyElementFn\' in options) {\r\n        withClosingTag = options.fullTagEmptyElementFn(name, element);\r\n      } else {\r\n        withClosingTag = options.fullTagEmptyElement;\r\n      }\r\n    }\r\n    if (withClosingTag) {\r\n      xml += \'>\';\r\n    } else {\r\n      xml += \'/>\';\r\n      return xml;\r\n    }\r\n  }\r\n  xml += writeElementsCompact(element, options, depth + 1, false);\r\n  currentElement = element;\r\n  currentElementName = name;\r\n  if (name) {\r\n    xml += (indent ? writeIndentation(options, depth, false) : \'\') + \'</\' + elementName + \'>\';\r\n  }\r\n  return xml;\r\n}\r\n\r\nfunction writeElementsCompact(element, options, depth, firstLine) {\r\n  var i, key, nodes, xml = \'\';\r\n  for (key in element) {\r\n    if (element.hasOwnProperty(key)) {\r\n      nodes = isArray(element[key]) ? element[key] : [element[key]];\r\n      for (i = 0; i < nodes.length; ++i) {\r\n        switch (key) {\r\n        case options.declarationKey: xml += writeDeclaration(nodes[i], options, depth); break;\r\n        case options.instructionKey: xml += (options.indentInstruction ? writeIndentation(options, depth, firstLine) : \'\') + writeInstruction(nodes[i], options, depth); break;\r\n        case options.attributesKey: case options.parentKey: break; // skip\r\n        case options.textKey: xml += (options.indentText ? writeIndentation(options, depth, firstLine) : \'\') + writeText(nodes[i], options); break;\r\n        case options.cdataKey: xml += (options.indentCdata ? writeIndentation(options, depth, firstLine) : \'\') + writeCdata(nodes[i], options); break;\r\n        case options.doctypeKey: xml += writeIndentation(options, depth, firstLine) + writeDoctype(nodes[i], options); break;\r\n        case options.commentKey: xml += writeIndentation(options, depth, firstLine) + writeComment(nodes[i], options); break;\r\n        default: xml += writeIndentation(options, depth, firstLine) + writeElementCompact(nodes[i], key, options, depth, hasContentCompact(nodes[i], options));\r\n        }\r\n        firstLine = firstLine && !xml;\r\n      }\r\n    }\r\n  }\r\n  return xml;\r\n}\r\n\r\nmodule.exports = function (js, options) {\r\n  options = validateOptions(options);\r\n  var xml = \'\';\r\n  currentElement = js;\r\n  currentElementName = \'_root_\';\r\n  if (options.compact) {\r\n    xml = writeElementsCompact(js, options, 0, true);\r\n  } else {\r\n    if (js[options.declarationKey]) {\r\n      xml += writeDeclaration(js[options.declarationKey], options, 0);\r\n    }\r\n    if (js[options.elementsKey] && js[options.elementsKey].length) {\r\n      xml += writeElements(js[options.elementsKey], options, 0, !xml);\r\n    }\r\n  }\r\n  return xml;\r\n};\r\n\r\n\r\n/***/ }),\r\n/* 21 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\n/*jslint node:true */\r\n\r\nvar xml2js = __webpack_require__(14);\r\nvar xml2json = __webpack_require__(36);\r\nvar js2xml = __webpack_require__(20);\r\nvar json2xml = __webpack_require__(37);\r\n\r\nmodule.exports = {\r\n  xml2js: xml2js,\r\n  xml2json: xml2json,\r\n  js2xml: js2xml,\r\n  json2xml: json2xml\r\n};\r\n\r\n\r\n/***/ }),\r\n/* 22 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\n/* WEBPACK VAR INJECTION */(function(Buffer) {;(function (sax) { // wrapper for non-node envs\r\n  sax.parser = function (strict, opt) { return new SAXParser(strict, opt) }\r\n  sax.SAXParser = SAXParser\r\n  sax.SAXStream = SAXStream\r\n  sax.createStream = createStream\r\n\r\n  // When we pass the MAX_BUFFER_LENGTH position, start checking for buffer overruns.\r\n  // When we check, schedule the next check for MAX_BUFFER_LENGTH - (max(buffer lengths)),\r\n  // since that\'s the earliest that a buffer overrun could occur.  This way, checks are\r\n  // as rare as required, but as often as necessary to ensure never crossing this bound.\r\n  // Furthermore, buffers are only tested at most once per write(), so passing a very\r\n  // large string into write() might have undesirable effects, but this is manageable by\r\n  // the caller, so it is assumed to be safe.  Thus, a call to write() may, in the extreme\r\n  // edge case, result in creating at most one complete copy of the string passed in.\r\n  // Set to Infinity to have unlimited buffers.\r\n  sax.MAX_BUFFER_LENGTH = 64 * 1024\r\n\r\n  var buffers = [\r\n    \'comment\', \'sgmlDecl\', \'textNode\', \'tagName\', \'doctype\',\r\n    \'procInstName\', \'procInstBody\', \'entity\', \'attribName\',\r\n    \'attribValue\', \'cdata\', \'script\'\r\n  ]\r\n\r\n  sax.EVENTS = [\r\n    \'text\',\r\n    \'processinginstruction\',\r\n    \'sgmldeclaration\',\r\n    \'doctype\',\r\n    \'comment\',\r\n    \'opentagstart\',\r\n    \'attribute\',\r\n    \'opentag\',\r\n    \'closetag\',\r\n    \'opencdata\',\r\n    \'cdata\',\r\n    \'closecdata\',\r\n    \'error\',\r\n    \'end\',\r\n    \'ready\',\r\n    \'script\',\r\n    \'opennamespace\',\r\n    \'closenamespace\'\r\n  ]\r\n\r\n  function SAXParser (strict, opt) {\r\n    if (!(this instanceof SAXParser)) {\r\n      return new SAXParser(strict, opt)\r\n    }\r\n\r\n    var parser = this\r\n    clearBuffers(parser)\r\n    parser.q = parser.c = \'\'\r\n    parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH\r\n    parser.opt = opt || {}\r\n    parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags\r\n    parser.looseCase = parser.opt.lowercase ? \'toLowerCase\' : \'toUpperCase\'\r\n    parser.tags = []\r\n    parser.closed = parser.closedRoot = parser.sawRoot = false\r\n    parser.tag = parser.error = null\r\n    parser.strict = !!strict\r\n    parser.noscript = !!(strict || parser.opt.noscript)\r\n    parser.state = S.BEGIN\r\n    parser.strictEntities = parser.opt.strictEntities\r\n    parser.ENTITIES = parser.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES)\r\n    parser.attribList = []\r\n\r\n    // namespaces form a prototype chain.\r\n    // it always points at the current tag,\r\n    // which protos to its parent tag.\r\n    if (parser.opt.xmlns) {\r\n      parser.ns = Object.create(rootNS)\r\n    }\r\n\r\n    // mostly just for error reporting\r\n    parser.trackPosition = parser.opt.position !== false\r\n    if (parser.trackPosition) {\r\n      parser.position = parser.line = parser.column = 0\r\n    }\r\n    emit(parser, \'onready\')\r\n  }\r\n\r\n  if (!Object.create) {\r\n    Object.create = function (o) {\r\n      function F () {}\r\n      F.prototype = o\r\n      var newf = new F()\r\n      return newf\r\n    }\r\n  }\r\n\r\n  if (!Object.keys) {\r\n    Object.keys = function (o) {\r\n      var a = []\r\n      for (var i in o) if (o.hasOwnProperty(i)) a.push(i)\r\n      return a\r\n    }\r\n  }\r\n\r\n  function checkBufferLength (parser) {\r\n    var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10)\r\n    var maxActual = 0\r\n    for (var i = 0, l = buffers.length; i < l; i++) {\r\n      var len = parser[buffers[i]].length\r\n      if (len > maxAllowed) {\r\n        // Text/cdata nodes can get big, and since they\'re buffered,\r\n        // we can get here under normal conditions.\r\n        // Avoid issues by emitting the text node now,\r\n        // so at least it won\'t get any bigger.\r\n        switch (buffers[i]) {\r\n          case \'textNode\':\r\n            closeText(parser)\r\n            break\r\n\r\n          case \'cdata\':\r\n            emitNode(parser, \'oncdata\', parser.cdata)\r\n            parser.cdata = \'\'\r\n            break\r\n\r\n          case \'script\':\r\n            emitNode(parser, \'onscript\', parser.script)\r\n            parser.script = \'\'\r\n            break\r\n\r\n          default:\r\n            error(parser, \'Max buffer length exceeded: \' + buffers[i])\r\n        }\r\n      }\r\n      maxActual = Math.max(maxActual, len)\r\n    }\r\n    // schedule the next check for the earliest possible buffer overrun.\r\n    var m = sax.MAX_BUFFER_LENGTH - maxActual\r\n    parser.bufferCheckPosition = m + parser.position\r\n  }\r\n\r\n  function clearBuffers (parser) {\r\n    for (var i = 0, l = buffers.length; i < l; i++) {\r\n      parser[buffers[i]] = \'\'\r\n    }\r\n  }\r\n\r\n  function flushBuffers (parser) {\r\n    closeText(parser)\r\n    if (parser.cdata !== \'\') {\r\n      emitNode(parser, \'oncdata\', parser.cdata)\r\n      parser.cdata = \'\'\r\n    }\r\n    if (parser.script !== \'\') {\r\n      emitNode(parser, \'onscript\', parser.script)\r\n      parser.script = \'\'\r\n    }\r\n  }\r\n\r\n  SAXParser.prototype = {\r\n    end: function () { end(this) },\r\n    write: write,\r\n    resume: function () { this.error = null; return this },\r\n    close: function () { return this.write(null) },\r\n    flush: function () { flushBuffers(this) }\r\n  }\r\n\r\n  var Stream\r\n  try {\r\n    Stream = __webpack_require__(25).Stream\r\n  } catch (ex) {\r\n    Stream = function () {}\r\n  }\r\n\r\n  var streamWraps = sax.EVENTS.filter(function (ev) {\r\n    return ev !== \'error\' && ev !== \'end\'\r\n  })\r\n\r\n  function createStream (strict, opt) {\r\n    return new SAXStream(strict, opt)\r\n  }\r\n\r\n  function SAXStream (strict, opt) {\r\n    if (!(this instanceof SAXStream)) {\r\n      return new SAXStream(strict, opt)\r\n    }\r\n\r\n    Stream.apply(this)\r\n\r\n    this._parser = new SAXParser(strict, opt)\r\n    this.writable = true\r\n    this.readable = true\r\n\r\n    var me = this\r\n\r\n    this._parser.onend = function () {\r\n      me.emit(\'end\')\r\n    }\r\n\r\n    this._parser.onerror = function (er) {\r\n      me.emit(\'error\', er)\r\n\r\n      // if didn\'t throw, then means error was handled.\r\n      // go ahead and clear error, so we can write again.\r\n      me._parser.error = null\r\n    }\r\n\r\n    this._decoder = null\r\n\r\n    streamWraps.forEach(function (ev) {\r\n      Object.defineProperty(me, \'on\' + ev, {\r\n        get: function () {\r\n          return me._parser[\'on\' + ev]\r\n        },\r\n        set: function (h) {\r\n          if (!h) {\r\n            me.removeAllListeners(ev)\r\n            me._parser[\'on\' + ev] = h\r\n            return h\r\n          }\r\n          me.on(ev, h)\r\n        },\r\n        enumerable: true,\r\n        configurable: false\r\n      })\r\n    })\r\n  }\r\n\r\n  SAXStream.prototype = Object.create(Stream.prototype, {\r\n    constructor: {\r\n      value: SAXStream\r\n    }\r\n  })\r\n\r\n  SAXStream.prototype.write = function (data) {\r\n    if (typeof Buffer === \'function\' &&\r\n      typeof Buffer.isBuffer === \'function\' &&\r\n      Buffer.isBuffer(data)) {\r\n      if (!this._decoder) {\r\n        var SD = __webpack_require__(11).StringDecoder\r\n        this._decoder = new SD(\'utf8\')\r\n      }\r\n      data = this._decoder.write(data)\r\n    }\r\n\r\n    this._parser.write(data.toString())\r\n    this.emit(\'data\', data)\r\n    return true\r\n  }\r\n\r\n  SAXStream.prototype.end = function (chunk) {\r\n    if (chunk && chunk.length) {\r\n      this.write(chunk)\r\n    }\r\n    this._parser.end()\r\n    return true\r\n  }\r\n\r\n  SAXStream.prototype.on = function (ev, handler) {\r\n    var me = this\r\n    if (!me._parser[\'on\' + ev] && streamWraps.indexOf(ev) !== -1) {\r\n      me._parser[\'on\' + ev] = function () {\r\n        var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments)\r\n        args.splice(0, 0, ev)\r\n        me.emit.apply(me, args)\r\n      }\r\n    }\r\n\r\n    return Stream.prototype.on.call(me, ev, handler)\r\n  }\r\n\r\n  // this really needs to be replaced with character classes.\r\n  // XML allows all manner of ridiculous numbers and digits.\r\n  var CDATA = \'[CDATA[\'\r\n  var DOCTYPE = \'DOCTYPE\'\r\n  var XML_NAMESPACE = \'http://www.w3.org/XML/1998/namespace\'\r\n  var XMLNS_NAMESPACE = \'http://www.w3.org/2000/xmlns/\'\r\n  var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE }\r\n\r\n  // http://www.w3.org/TR/REC-xml/#NT-NameStartChar\r\n  // This implementation works on strings, a single character at a time\r\n  // as such, it cannot ever support astral-plane characters (10000-EFFFF)\r\n  // without a significant breaking change to either this  parser, or the\r\n  // JavaScript language.  Implementation of an emoji-capable xml parser\r\n  // is left as an exercise for the reader.\r\n  var nameStart = /[:_A-Za-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD]/\r\n\r\n  var nameBody = /[:_A-Za-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\u00B7\\u0300-\\u036F\\u203F-\\u2040.\\d-]/\r\n\r\n  var entityStart = /[#:_A-Za-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD]/\r\n  var entityBody = /[#:_A-Za-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\u00B7\\u0300-\\u036F\\u203F-\\u2040.\\d-]/\r\n\r\n  function isWhitespace (c) {\r\n    return c === \' \' || c === \'\\n\' || c === \'\\r\' || c === \'\\t\'\r\n  }\r\n\r\n  function isQuote (c) {\r\n    return c === \'"\' || c === \'\\\'\'\r\n  }\r\n\r\n  function isAttribEnd (c) {\r\n    return c === \'>\' || isWhitespace(c)\r\n  }\r\n\r\n  function isMatch (regex, c) {\r\n    return regex.test(c)\r\n  }\r\n\r\n  function notMatch (regex, c) {\r\n    return !isMatch(regex, c)\r\n  }\r\n\r\n  var S = 0\r\n  sax.STATE = {\r\n    BEGIN: S++, // leading byte order mark or whitespace\r\n    BEGIN_WHITESPACE: S++, // leading whitespace\r\n    TEXT: S++, // general stuff\r\n    TEXT_ENTITY: S++, // &amp and such.\r\n    OPEN_WAKA: S++, // <\r\n    SGML_DECL: S++, // <!BLARG\r\n    SGML_DECL_QUOTED: S++, // <!BLARG foo "bar\r\n    DOCTYPE: S++, // <!DOCTYPE\r\n    DOCTYPE_QUOTED: S++, // <!DOCTYPE "//blah\r\n    DOCTYPE_DTD: S++, // <!DOCTYPE "//blah" [ ...\r\n    DOCTYPE_DTD_QUOTED: S++, // <!DOCTYPE "//blah" [ "foo\r\n    COMMENT_STARTING: S++, // <!-\r\n    COMMENT: S++, // <!--\r\n    COMMENT_ENDING: S++, // <!-- blah -\r\n    COMMENT_ENDED: S++, // <!-- blah --\r\n    CDATA: S++, // <![CDATA[ something\r\n    CDATA_ENDING: S++, // ]\r\n    CDATA_ENDING_2: S++, // ]]\r\n    PROC_INST: S++, // <?hi\r\n    PROC_INST_BODY: S++, // <?hi there\r\n    PROC_INST_ENDING: S++, // <?hi "there" ?\r\n    OPEN_TAG: S++, // <strong\r\n    OPEN_TAG_SLASH: S++, // <strong /\r\n    ATTRIB: S++, // <a\r\n    ATTRIB_NAME: S++, // <a foo\r\n    ATTRIB_NAME_SAW_WHITE: S++, // <a foo _\r\n    ATTRIB_VALUE: S++, // <a foo=\r\n    ATTRIB_VALUE_QUOTED: S++, // <a foo="bar\r\n    ATTRIB_VALUE_CLOSED: S++, // <a foo="bar"\r\n    ATTRIB_VALUE_UNQUOTED: S++, // <a foo=bar\r\n    ATTRIB_VALUE_ENTITY_Q: S++, // <foo bar="&quot;"\r\n    ATTRIB_VALUE_ENTITY_U: S++, // <foo bar=&quot\r\n    CLOSE_TAG: S++, // </a\r\n    CLOSE_TAG_SAW_WHITE: S++, // </a   >\r\n    SCRIPT: S++, // <script> ...\r\n    SCRIPT_ENDING: S++ // <script> ... <\r\n  }\r\n\r\n  sax.XML_ENTITIES = {\r\n    \'amp\': \'&\',\r\n    \'gt\': \'>\',\r\n    \'lt\': \'<\',\r\n    \'quot\': \'"\',\r\n    \'apos\': "\'"\r\n  }\r\n\r\n  sax.ENTITIES = {\r\n    \'amp\': \'&\',\r\n    \'gt\': \'>\',\r\n    \'lt\': \'<\',\r\n    \'quot\': \'"\',\r\n    \'apos\': "\'",\r\n    \'AElig\': 198,\r\n    \'Aacute\': 193,\r\n    \'Acirc\': 194,\r\n    \'Agrave\': 192,\r\n    \'Aring\': 197,\r\n    \'Atilde\': 195,\r\n    \'Auml\': 196,\r\n    \'Ccedil\': 199,\r\n    \'ETH\': 208,\r\n    \'Eacute\': 201,\r\n    \'Ecirc\': 202,\r\n    \'Egrave\': 200,\r\n    \'Euml\': 203,\r\n    \'Iacute\': 205,\r\n    \'Icirc\': 206,\r\n    \'Igrave\': 204,\r\n    \'Iuml\': 207,\r\n    \'Ntilde\': 209,\r\n    \'Oacute\': 211,\r\n    \'Ocirc\': 212,\r\n    \'Ograve\': 210,\r\n    \'Oslash\': 216,\r\n    \'Otilde\': 213,\r\n    \'Ouml\': 214,\r\n    \'THORN\': 222,\r\n    \'Uacute\': 218,\r\n    \'Ucirc\': 219,\r\n    \'Ugrave\': 217,\r\n    \'Uuml\': 220,\r\n    \'Yacute\': 221,\r\n    \'aacute\': 225,\r\n    \'acirc\': 226,\r\n    \'aelig\': 230,\r\n    \'agrave\': 224,\r\n    \'aring\': 229,\r\n    \'atilde\': 227,\r\n    \'auml\': 228,\r\n    \'ccedil\': 231,\r\n    \'eacute\': 233,\r\n    \'ecirc\': 234,\r\n    \'egrave\': 232,\r\n    \'eth\': 240,\r\n    \'euml\': 235,\r\n    \'iacute\': 237,\r\n    \'icirc\': 238,\r\n    \'igrave\': 236,\r\n    \'iuml\': 239,\r\n    \'ntilde\': 241,\r\n    \'oacute\': 243,\r\n    \'ocirc\': 244,\r\n    \'ograve\': 242,\r\n    \'oslash\': 248,\r\n    \'otilde\': 245,\r\n    \'ouml\': 246,\r\n    \'szlig\': 223,\r\n    \'thorn\': 254,\r\n    \'uacute\': 250,\r\n    \'ucirc\': 251,\r\n    \'ugrave\': 249,\r\n    \'uuml\': 252,\r\n    \'yacute\': 253,\r\n    \'yuml\': 255,\r\n    \'copy\': 169,\r\n    \'reg\': 174,\r\n    \'nbsp\': 160,\r\n    \'iexcl\': 161,\r\n    \'cent\': 162,\r\n    \'pound\': 163,\r\n    \'curren\': 164,\r\n    \'yen\': 165,\r\n    \'brvbar\': 166,\r\n    \'sect\': 167,\r\n    \'uml\': 168,\r\n    \'ordf\': 170,\r\n    \'laquo\': 171,\r\n    \'not\': 172,\r\n    \'shy\': 173,\r\n    \'macr\': 175,\r\n    \'deg\': 176,\r\n    \'plusmn\': 177,\r\n    \'sup1\': 185,\r\n    \'sup2\': 178,\r\n    \'sup3\': 179,\r\n    \'acute\': 180,\r\n    \'micro\': 181,\r\n    \'para\': 182,\r\n    \'middot\': 183,\r\n    \'cedil\': 184,\r\n    \'ordm\': 186,\r\n    \'raquo\': 187,\r\n    \'frac14\': 188,\r\n    \'frac12\': 189,\r\n    \'frac34\': 190,\r\n    \'iquest\': 191,\r\n    \'times\': 215,\r\n    \'divide\': 247,\r\n    \'OElig\': 338,\r\n    \'oelig\': 339,\r\n    \'Scaron\': 352,\r\n    \'scaron\': 353,\r\n    \'Yuml\': 376,\r\n    \'fnof\': 402,\r\n    \'circ\': 710,\r\n    \'tilde\': 732,\r\n    \'Alpha\': 913,\r\n    \'Beta\': 914,\r\n    \'Gamma\': 915,\r\n    \'Delta\': 916,\r\n    \'Epsilon\': 917,\r\n    \'Zeta\': 918,\r\n    \'Eta\': 919,\r\n    \'Theta\': 920,\r\n    \'Iota\': 921,\r\n    \'Kappa\': 922,\r\n    \'Lambda\': 923,\r\n    \'Mu\': 924,\r\n    \'Nu\': 925,\r\n    \'Xi\': 926,\r\n    \'Omicron\': 927,\r\n    \'Pi\': 928,\r\n    \'Rho\': 929,\r\n    \'Sigma\': 931,\r\n    \'Tau\': 932,\r\n    \'Upsilon\': 933,\r\n    \'Phi\': 934,\r\n    \'Chi\': 935,\r\n    \'Psi\': 936,\r\n    \'Omega\': 937,\r\n    \'alpha\': 945,\r\n    \'beta\': 946,\r\n    \'gamma\': 947,\r\n    \'delta\': 948,\r\n    \'epsilon\': 949,\r\n    \'zeta\': 950,\r\n    \'eta\': 951,\r\n    \'theta\': 952,\r\n    \'iota\': 953,\r\n    \'kappa\': 954,\r\n    \'lambda\': 955,\r\n    \'mu\': 956,\r\n    \'nu\': 957,\r\n    \'xi\': 958,\r\n    \'omicron\': 959,\r\n    \'pi\': 960,\r\n    \'rho\': 961,\r\n    \'sigmaf\': 962,\r\n    \'sigma\': 963,\r\n    \'tau\': 964,\r\n    \'upsilon\': 965,\r\n    \'phi\': 966,\r\n    \'chi\': 967,\r\n    \'psi\': 968,\r\n    \'omega\': 969,\r\n    \'thetasym\': 977,\r\n    \'upsih\': 978,\r\n    \'piv\': 982,\r\n    \'ensp\': 8194,\r\n    \'emsp\': 8195,\r\n    \'thinsp\': 8201,\r\n    \'zwnj\': 8204,\r\n    \'zwj\': 8205,\r\n    \'lrm\': 8206,\r\n    \'rlm\': 8207,\r\n    \'ndash\': 8211,\r\n    \'mdash\': 8212,\r\n    \'lsquo\': 8216,\r\n    \'rsquo\': 8217,\r\n    \'sbquo\': 8218,\r\n    \'ldquo\': 8220,\r\n    \'rdquo\': 8221,\r\n    \'bdquo\': 8222,\r\n    \'dagger\': 8224,\r\n    \'Dagger\': 8225,\r\n    \'bull\': 8226,\r\n    \'hellip\': 8230,\r\n    \'permil\': 8240,\r\n    \'prime\': 8242,\r\n    \'Prime\': 8243,\r\n    \'lsaquo\': 8249,\r\n    \'rsaquo\': 8250,\r\n    \'oline\': 8254,\r\n    \'frasl\': 8260,\r\n    \'euro\': 8364,\r\n    \'image\': 8465,\r\n    \'weierp\': 8472,\r\n    \'real\': 8476,\r\n    \'trade\': 8482,\r\n    \'alefsym\': 8501,\r\n    \'larr\': 8592,\r\n    \'uarr\': 8593,\r\n    \'rarr\': 8594,\r\n    \'darr\': 8595,\r\n    \'harr\': 8596,\r\n    \'crarr\': 8629,\r\n    \'lArr\': 8656,\r\n    \'uArr\': 8657,\r\n    \'rArr\': 8658,\r\n    \'dArr\': 8659,\r\n    \'hArr\': 8660,\r\n    \'forall\': 8704,\r\n    \'part\': 8706,\r\n    \'exist\': 8707,\r\n    \'empty\': 8709,\r\n    \'nabla\': 8711,\r\n    \'isin\': 8712,\r\n    \'notin\': 8713,\r\n    \'ni\': 8715,\r\n    \'prod\': 8719,\r\n    \'sum\': 8721,\r\n    \'minus\': 8722,\r\n    \'lowast\': 8727,\r\n    \'radic\': 8730,\r\n    \'prop\': 8733,\r\n    \'infin\': 8734,\r\n    \'ang\': 8736,\r\n    \'and\': 8743,\r\n    \'or\': 8744,\r\n    \'cap\': 8745,\r\n    \'cup\': 8746,\r\n    \'int\': 8747,\r\n    \'there4\': 8756,\r\n    \'sim\': 8764,\r\n    \'cong\': 8773,\r\n    \'asymp\': 8776,\r\n    \'ne\': 8800,\r\n    \'equiv\': 8801,\r\n    \'le\': 8804,\r\n    \'ge\': 8805,\r\n    \'sub\': 8834,\r\n    \'sup\': 8835,\r\n    \'nsub\': 8836,\r\n    \'sube\': 8838,\r\n    \'supe\': 8839,\r\n    \'oplus\': 8853,\r\n    \'otimes\': 8855,\r\n    \'perp\': 8869,\r\n    \'sdot\': 8901,\r\n    \'lceil\': 8968,\r\n    \'rceil\': 8969,\r\n    \'lfloor\': 8970,\r\n    \'rfloor\': 8971,\r\n    \'lang\': 9001,\r\n    \'rang\': 9002,\r\n    \'loz\': 9674,\r\n    \'spades\': 9824,\r\n    \'clubs\': 9827,\r\n    \'hearts\': 9829,\r\n    \'diams\': 9830\r\n  }\r\n\r\n  Object.keys(sax.ENTITIES).forEach(function (key) {\r\n    var e = sax.ENTITIES[key]\r\n    var s = typeof e === \'number\' ? String.fromCharCode(e) : e\r\n    sax.ENTITIES[key] = s\r\n  })\r\n\r\n  for (var s in sax.STATE) {\r\n    sax.STATE[sax.STATE[s]] = s\r\n  }\r\n\r\n  // shorthand\r\n  S = sax.STATE\r\n\r\n  function emit (parser, event, data) {\r\n    parser[event] && parser[event](data)\r\n  }\r\n\r\n  function emitNode (parser, nodeType, data) {\r\n    if (parser.textNode) closeText(parser)\r\n    emit(parser, nodeType, data)\r\n  }\r\n\r\n  function closeText (parser) {\r\n    parser.textNode = textopts(parser.opt, parser.textNode)\r\n    if (parser.textNode) emit(parser, \'ontext\', parser.textNode)\r\n    parser.textNode = \'\'\r\n  }\r\n\r\n  function textopts (opt, text) {\r\n    if (opt.trim) text = text.trim()\r\n    if (opt.normalize) text = text.replace(/\\s+/g, \' \')\r\n    return text\r\n  }\r\n\r\n  function error (parser, er) {\r\n    closeText(parser)\r\n    if (parser.trackPosition) {\r\n      er += \'\\nLine: \' + parser.line +\r\n        \'\\nColumn: \' + parser.column +\r\n        \'\\nChar: \' + parser.c\r\n    }\r\n    er = new Error(er)\r\n    parser.error = er\r\n    emit(parser, \'onerror\', er)\r\n    return parser\r\n  }\r\n\r\n  function end (parser) {\r\n    if (parser.sawRoot && !parser.closedRoot) strictFail(parser, \'Unclosed root tag\')\r\n    if ((parser.state !== S.BEGIN) &&\r\n      (parser.state !== S.BEGIN_WHITESPACE) &&\r\n      (parser.state !== S.TEXT)) {\r\n      error(parser, \'Unexpected end\')\r\n    }\r\n    closeText(parser)\r\n    parser.c = \'\'\r\n    parser.closed = true\r\n    emit(parser, \'onend\')\r\n    SAXParser.call(parser, parser.strict, parser.opt)\r\n    return parser\r\n  }\r\n\r\n  function strictFail (parser, message) {\r\n    if (typeof parser !== \'object\' || !(parser instanceof SAXParser)) {\r\n      throw new Error(\'bad call to strictFail\')\r\n    }\r\n    if (parser.strict) {\r\n      error(parser, message)\r\n    }\r\n  }\r\n\r\n  function newTag (parser) {\r\n    if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]()\r\n    var parent = parser.tags[parser.tags.length - 1] || parser\r\n    var tag = parser.tag = { name: parser.tagName, attributes: {} }\r\n\r\n    // will be overridden if tag contails an xmlns="foo" or xmlns:foo="bar"\r\n    if (parser.opt.xmlns) {\r\n      tag.ns = parent.ns\r\n    }\r\n    parser.attribList.length = 0\r\n    emitNode(parser, \'onopentagstart\', tag)\r\n  }\r\n\r\n  function qname (name, attribute) {\r\n    var i = name.indexOf(\':\')\r\n    var qualName = i < 0 ? [ \'\', name ] : name.split(\':\')\r\n    var prefix = qualName[0]\r\n    var local = qualName[1]\r\n\r\n    // <x "xmlns"="http://foo">\r\n    if (attribute && name === \'xmlns\') {\r\n      prefix = \'xmlns\'\r\n      local = \'\'\r\n    }\r\n\r\n    return { prefix: prefix, local: local }\r\n  }\r\n\r\n  function attrib (parser) {\r\n    if (!parser.strict) {\r\n      parser.attribName = parser.attribName[parser.looseCase]()\r\n    }\r\n\r\n    if (parser.attribList.indexOf(parser.attribName) !== -1 ||\r\n      parser.tag.attributes.hasOwnProperty(parser.attribName)) {\r\n      parser.attribName = parser.attribValue = \'\'\r\n      return\r\n    }\r\n\r\n    if (parser.opt.xmlns) {\r\n      var qn = qname(parser.attribName, true)\r\n      var prefix = qn.prefix\r\n      var local = qn.local\r\n\r\n      if (prefix === \'xmlns\') {\r\n        // namespace binding attribute. push the binding into scope\r\n        if (local === \'xml\' && parser.attribValue !== XML_NAMESPACE) {\r\n          strictFail(parser,\r\n            \'xml: prefix must be bound to \' + XML_NAMESPACE + \'\\n\' +\r\n            \'Actual: \' + parser.attribValue)\r\n        } else if (local === \'xmlns\' && parser.attribValue !== XMLNS_NAMESPACE) {\r\n          strictFail(parser,\r\n            \'xmlns: prefix must be bound to \' + XMLNS_NAMESPACE + \'\\n\' +\r\n            \'Actual: \' + parser.attribValue)\r\n        } else {\r\n          var tag = parser.tag\r\n          var parent = parser.tags[parser.tags.length - 1] || parser\r\n          if (tag.ns === parent.ns) {\r\n            tag.ns = Object.create(parent.ns)\r\n          }\r\n          tag.ns[local] = parser.attribValue\r\n        }\r\n      }\r\n\r\n      // defer onattribute events until all attributes have been seen\r\n      // so any new bindings can take effect. preserve attribute order\r\n      // so deferred events can be emitted in document order\r\n      parser.attribList.push([parser.attribName, parser.attribValue])\r\n    } else {\r\n      // in non-xmlns mode, we can emit the event right away\r\n      parser.tag.attributes[parser.attribName] = parser.attribValue\r\n      emitNode(parser, \'onattribute\', {\r\n        name: parser.attribName,\r\n        value: parser.attribValue\r\n      })\r\n    }\r\n\r\n    parser.attribName = parser.attribValue = \'\'\r\n  }\r\n\r\n  function openTag (parser, selfClosing) {\r\n    if (parser.opt.xmlns) {\r\n      // emit namespace binding events\r\n      var tag = parser.tag\r\n\r\n      // add namespace info to tag\r\n      var qn = qname(parser.tagName)\r\n      tag.prefix = qn.prefix\r\n      tag.local = qn.local\r\n      tag.uri = tag.ns[qn.prefix] || \'\'\r\n\r\n      if (tag.prefix && !tag.uri) {\r\n        strictFail(parser, \'Unbound namespace prefix: \' +\r\n          JSON.stringify(parser.tagName))\r\n        tag.uri = qn.prefix\r\n      }\r\n\r\n      var parent = parser.tags[parser.tags.length - 1] || parser\r\n      if (tag.ns && parent.ns !== tag.ns) {\r\n        Object.keys(tag.ns).forEach(function (p) {\r\n          emitNode(parser, \'onopennamespace\', {\r\n            prefix: p,\r\n            uri: tag.ns[p]\r\n          })\r\n        })\r\n      }\r\n\r\n      // handle deferred onattribute events\r\n      // Note: do not apply default ns to attributes:\r\n      //   http://www.w3.org/TR/REC-xml-names/#defaulting\r\n      for (var i = 0, l = parser.attribList.length; i < l; i++) {\r\n        var nv = parser.attribList[i]\r\n        var name = nv[0]\r\n        var value = nv[1]\r\n        var qualName = qname(name, true)\r\n        var prefix = qualName.prefix\r\n        var local = qualName.local\r\n        var uri = prefix === \'\' ? \'\' : (tag.ns[prefix] || \'\')\r\n        var a = {\r\n          name: name,\r\n          value: value,\r\n          prefix: prefix,\r\n          local: local,\r\n          uri: uri\r\n        }\r\n\r\n        // if there\'s any attributes with an undefined namespace,\r\n        // then fail on them now.\r\n        if (prefix && prefix !== \'xmlns\' && !uri) {\r\n          strictFail(parser, \'Unbound namespace prefix: \' +\r\n            JSON.stringify(prefix))\r\n          a.uri = prefix\r\n        }\r\n        parser.tag.attributes[name] = a\r\n        emitNode(parser, \'onattribute\', a)\r\n      }\r\n      parser.attribList.length = 0\r\n    }\r\n\r\n    parser.tag.isSelfClosing = !!selfClosing\r\n\r\n    // process the tag\r\n    parser.sawRoot = true\r\n    parser.tags.push(parser.tag)\r\n    emitNode(parser, \'onopentag\', parser.tag)\r\n    if (!selfClosing) {\r\n      // special case for <script> in non-strict mode.\r\n      if (!parser.noscript && parser.tagName.toLowerCase() === \'script\') {\r\n        parser.state = S.SCRIPT\r\n      } else {\r\n        parser.state = S.TEXT\r\n      }\r\n      parser.tag = null\r\n      parser.tagName = \'\'\r\n    }\r\n    parser.attribName = parser.attribValue = \'\'\r\n    parser.attribList.length = 0\r\n  }\r\n\r\n  function closeTag (parser) {\r\n    if (!parser.tagName) {\r\n      strictFail(parser, \'Weird empty close tag.\')\r\n      parser.textNode += \'</>\'\r\n      parser.state = S.TEXT\r\n      return\r\n    }\r\n\r\n    if (parser.script) {\r\n      if (parser.tagName !== \'script\') {\r\n        parser.script += \'</\' + parser.tagName + \'>\'\r\n        parser.tagName = \'\'\r\n        parser.state = S.SCRIPT\r\n        return\r\n      }\r\n      emitNode(parser, \'onscript\', parser.script)\r\n      parser.script = \'\'\r\n    }\r\n\r\n    // first make sure that the closing tag actually exists.\r\n    // <a><b></c></b></a> will close everything, otherwise.\r\n    var t = parser.tags.length\r\n    var tagName = parser.tagName\r\n    if (!parser.strict) {\r\n      tagName = tagName[parser.looseCase]()\r\n    }\r\n    var closeTo = tagName\r\n    while (t--) {\r\n      var close = parser.tags[t]\r\n      if (close.name !== closeTo) {\r\n        // fail the first time in strict mode\r\n        strictFail(parser, \'Unexpected close tag\')\r\n      } else {\r\n        break\r\n      }\r\n    }\r\n\r\n    // didn\'t find it.  we already failed for strict, so just abort.\r\n    if (t < 0) {\r\n      strictFail(parser, \'Unmatched closing tag: \' + parser.tagName)\r\n      parser.textNode += \'</\' + parser.tagName + \'>\'\r\n      parser.state = S.TEXT\r\n      return\r\n    }\r\n    parser.tagName = tagName\r\n    var s = parser.tags.length\r\n    while (s-- > t) {\r\n      var tag = parser.tag = parser.tags.pop()\r\n      parser.tagName = parser.tag.name\r\n      emitNode(parser, \'onclosetag\', parser.tagName)\r\n\r\n      var x = {}\r\n      for (var i in tag.ns) {\r\n        x[i] = tag.ns[i]\r\n      }\r\n\r\n      var parent = parser.tags[parser.tags.length - 1] || parser\r\n      if (parser.opt.xmlns && tag.ns !== parent.ns) {\r\n        // remove namespace bindings introduced by tag\r\n        Object.keys(tag.ns).forEach(function (p) {\r\n          var n = tag.ns[p]\r\n          emitNode(parser, \'onclosenamespace\', { prefix: p, uri: n })\r\n        })\r\n      }\r\n    }\r\n    if (t === 0) parser.closedRoot = true\r\n    parser.tagName = parser.attribValue = parser.attribName = \'\'\r\n    parser.attribList.length = 0\r\n    parser.state = S.TEXT\r\n  }\r\n\r\n  function parseEntity (parser) {\r\n    var entity = parser.entity\r\n    var entityLC = entity.toLowerCase()\r\n    var num\r\n    var numStr = \'\'\r\n\r\n    if (parser.ENTITIES[entity]) {\r\n      return parser.ENTITIES[entity]\r\n    }\r\n    if (parser.ENTITIES[entityLC]) {\r\n      return parser.ENTITIES[entityLC]\r\n    }\r\n    entity = entityLC\r\n    if (entity.charAt(0) === \'#\') {\r\n      if (entity.charAt(1) === \'x\') {\r\n        entity = entity.slice(2)\r\n        num = parseInt(entity, 16)\r\n        numStr = num.toString(16)\r\n      } else {\r\n        entity = entity.slice(1)\r\n        num = parseInt(entity, 10)\r\n        numStr = num.toString(10)\r\n      }\r\n    }\r\n    entity = entity.replace(/^0+/, \'\')\r\n    if (isNaN(num) || numStr.toLowerCase() !== entity) {\r\n      strictFail(parser, \'Invalid character entity\')\r\n      return \'&\' + parser.entity + \';\'\r\n    }\r\n\r\n    return String.fromCodePoint(num)\r\n  }\r\n\r\n  function beginWhiteSpace (parser, c) {\r\n    if (c === \'<\') {\r\n      parser.state = S.OPEN_WAKA\r\n      parser.startTagPosition = parser.position\r\n    } else if (!isWhitespace(c)) {\r\n      // have to process this as a text node.\r\n      // weird, but happens.\r\n      strictFail(parser, \'Non-whitespace before first tag.\')\r\n      parser.textNode = c\r\n      parser.state = S.TEXT\r\n    }\r\n  }\r\n\r\n  function charAt (chunk, i) {\r\n    var result = \'\'\r\n    if (i < chunk.length) {\r\n      result = chunk.charAt(i)\r\n    }\r\n    return result\r\n  }\r\n\r\n  function write (chunk) {\r\n    var parser = this\r\n    if (this.error) {\r\n      throw this.error\r\n    }\r\n    if (parser.closed) {\r\n      return error(parser,\r\n        \'Cannot write after close. Assign an onready handler.\')\r\n    }\r\n    if (chunk === null) {\r\n      return end(parser)\r\n    }\r\n    if (typeof chunk === \'object\') {\r\n      chunk = chunk.toString()\r\n    }\r\n    var i = 0\r\n    var c = \'\'\r\n    while (true) {\r\n      c = charAt(chunk, i++)\r\n      parser.c = c\r\n\r\n      if (!c) {\r\n        break\r\n      }\r\n\r\n      if (parser.trackPosition) {\r\n        parser.position++\r\n        if (c === \'\\n\') {\r\n          parser.line++\r\n          parser.column = 0\r\n        } else {\r\n          parser.column++\r\n        }\r\n      }\r\n\r\n      switch (parser.state) {\r\n        case S.BEGIN:\r\n          parser.state = S.BEGIN_WHITESPACE\r\n          if (c === \'\\uFEFF\') {\r\n            continue\r\n          }\r\n          beginWhiteSpace(parser, c)\r\n          continue\r\n\r\n        case S.BEGIN_WHITESPACE:\r\n          beginWhiteSpace(parser, c)\r\n          continue\r\n\r\n        case S.TEXT:\r\n          if (parser.sawRoot && !parser.closedRoot) {\r\n            var starti = i - 1\r\n            while (c && c !== \'<\' && c !== \'&\') {\r\n              c = charAt(chunk, i++)\r\n              if (c && parser.trackPosition) {\r\n                parser.position++\r\n                if (c === \'\\n\') {\r\n                  parser.line++\r\n                  parser.column = 0\r\n                } else {\r\n                  parser.column++\r\n                }\r\n              }\r\n            }\r\n            parser.textNode += chunk.substring(starti, i - 1)\r\n          }\r\n          if (c === \'<\' && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {\r\n            parser.state = S.OPEN_WAKA\r\n            parser.startTagPosition = parser.position\r\n          } else {\r\n            if (!isWhitespace(c) && (!parser.sawRoot || parser.closedRoot)) {\r\n              strictFail(parser, \'Text data outside of root node.\')\r\n            }\r\n            if (c === \'&\') {\r\n              parser.state = S.TEXT_ENTITY\r\n            } else {\r\n              parser.textNode += c\r\n            }\r\n          }\r\n          continue\r\n\r\n        case S.SCRIPT:\r\n          // only non-strict\r\n          if (c === \'<\') {\r\n            parser.state = S.SCRIPT_ENDING\r\n          } else {\r\n            parser.script += c\r\n          }\r\n          continue\r\n\r\n        case S.SCRIPT_ENDING:\r\n          if (c === \'/\') {\r\n            parser.state = S.CLOSE_TAG\r\n          } else {\r\n            parser.script += \'<\' + c\r\n            parser.state = S.SCRIPT\r\n          }\r\n          continue\r\n\r\n        case S.OPEN_WAKA:\r\n          // either a /, ?, !, or text is coming next.\r\n          if (c === \'!\') {\r\n            parser.state = S.SGML_DECL\r\n            parser.sgmlDecl = \'\'\r\n          } else if (isWhitespace(c)) {\r\n            // wait for it...\r\n          } else if (isMatch(nameStart, c)) {\r\n            parser.state = S.OPEN_TAG\r\n            parser.tagName = c\r\n          } else if (c === \'/\') {\r\n            parser.state = S.CLOSE_TAG\r\n            parser.tagName = \'\'\r\n          } else if (c === \'?\') {\r\n            parser.state = S.PROC_INST\r\n            parser.procInstName = parser.procInstBody = \'\'\r\n          } else {\r\n            strictFail(parser, \'Unencoded <\')\r\n            // if there was some whitespace, then add that in.\r\n            if (parser.startTagPosition + 1 < parser.position) {\r\n              var pad = parser.position - parser.startTagPosition\r\n              c = new Array(pad).join(\' \') + c\r\n            }\r\n            parser.textNode += \'<\' + c\r\n            parser.state = S.TEXT\r\n          }\r\n          continue\r\n\r\n        case S.SGML_DECL:\r\n          if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {\r\n            emitNode(parser, \'onopencdata\')\r\n            parser.state = S.CDATA\r\n            parser.sgmlDecl = \'\'\r\n            parser.cdata = \'\'\r\n          } else if (parser.sgmlDecl + c === \'--\') {\r\n            parser.state = S.COMMENT\r\n            parser.comment = \'\'\r\n            parser.sgmlDecl = \'\'\r\n          } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {\r\n            parser.state = S.DOCTYPE\r\n            if (parser.doctype || parser.sawRoot) {\r\n              strictFail(parser,\r\n                \'Inappropriately located doctype declaration\')\r\n            }\r\n            parser.doctype = \'\'\r\n            parser.sgmlDecl = \'\'\r\n          } else if (c === \'>\') {\r\n            emitNode(parser, \'onsgmldeclaration\', parser.sgmlDecl)\r\n            parser.sgmlDecl = \'\'\r\n            parser.state = S.TEXT\r\n          } else if (isQuote(c)) {\r\n            parser.state = S.SGML_DECL_QUOTED\r\n            parser.sgmlDecl += c\r\n          } else {\r\n            parser.sgmlDecl += c\r\n          }\r\n          continue\r\n\r\n        case S.SGML_DECL_QUOTED:\r\n          if (c === parser.q) {\r\n            parser.state = S.SGML_DECL\r\n            parser.q = \'\'\r\n          }\r\n          parser.sgmlDecl += c\r\n          continue\r\n\r\n        case S.DOCTYPE:\r\n          if (c === \'>\') {\r\n            parser.state = S.TEXT\r\n            emitNode(parser, \'ondoctype\', parser.doctype)\r\n            parser.doctype = true // just remember that we saw it.\r\n          } else {\r\n            parser.doctype += c\r\n            if (c === \'[\') {\r\n              parser.state = S.DOCTYPE_DTD\r\n            } else if (isQuote(c)) {\r\n              parser.state = S.DOCTYPE_QUOTED\r\n              parser.q = c\r\n            }\r\n          }\r\n          continue\r\n\r\n        case S.DOCTYPE_QUOTED:\r\n          parser.doctype += c\r\n          if (c === parser.q) {\r\n            parser.q = \'\'\r\n            parser.state = S.DOCTYPE\r\n          }\r\n          continue\r\n\r\n        case S.DOCTYPE_DTD:\r\n          parser.doctype += c\r\n          if (c === \']\') {\r\n            parser.state = S.DOCTYPE\r\n          } else if (isQuote(c)) {\r\n            parser.state = S.DOCTYPE_DTD_QUOTED\r\n            parser.q = c\r\n          }\r\n          continue\r\n\r\n        case S.DOCTYPE_DTD_QUOTED:\r\n          parser.doctype += c\r\n          if (c === parser.q) {\r\n            parser.state = S.DOCTYPE_DTD\r\n            parser.q = \'\'\r\n          }\r\n          continue\r\n\r\n        case S.COMMENT:\r\n          if (c === \'-\') {\r\n            parser.state = S.COMMENT_ENDING\r\n          } else {\r\n            parser.comment += c\r\n          }\r\n          continue\r\n\r\n        case S.COMMENT_ENDING:\r\n          if (c === \'-\') {\r\n            parser.state = S.COMMENT_ENDED\r\n            parser.comment = textopts(parser.opt, parser.comment)\r\n            if (parser.comment) {\r\n              emitNode(parser, \'oncomment\', parser.comment)\r\n            }\r\n            parser.comment = \'\'\r\n          } else {\r\n            parser.comment += \'-\' + c\r\n            parser.state = S.COMMENT\r\n          }\r\n          continue\r\n\r\n        case S.COMMENT_ENDED:\r\n          if (c !== \'>\') {\r\n            strictFail(parser, \'Malformed comment\')\r\n            // allow <!-- blah -- bloo --> in non-strict mode,\r\n            // which is a comment of " blah -- bloo "\r\n            parser.comment += \'--\' + c\r\n            parser.state = S.COMMENT\r\n          } else {\r\n            parser.state = S.TEXT\r\n          }\r\n          continue\r\n\r\n        case S.CDATA:\r\n          if (c === \']\') {\r\n            parser.state = S.CDATA_ENDING\r\n          } else {\r\n            parser.cdata += c\r\n          }\r\n          continue\r\n\r\n        case S.CDATA_ENDING:\r\n          if (c === \']\') {\r\n            parser.state = S.CDATA_ENDING_2\r\n          } else {\r\n            parser.cdata += \']\' + c\r\n            parser.state = S.CDATA\r\n          }\r\n          continue\r\n\r\n        case S.CDATA_ENDING_2:\r\n          if (c === \'>\') {\r\n            if (parser.cdata) {\r\n              emitNode(parser, \'oncdata\', parser.cdata)\r\n            }\r\n            emitNode(parser, \'onclosecdata\')\r\n            parser.cdata = \'\'\r\n            parser.state = S.TEXT\r\n          } else if (c === \']\') {\r\n            parser.cdata += \']\'\r\n          } else {\r\n            parser.cdata += \']]\' + c\r\n            parser.state = S.CDATA\r\n          }\r\n          continue\r\n\r\n        case S.PROC_INST:\r\n          if (c === \'?\') {\r\n            parser.state = S.PROC_INST_ENDING\r\n          } else if (isWhitespace(c)) {\r\n            parser.state = S.PROC_INST_BODY\r\n          } else {\r\n            parser.procInstName += c\r\n          }\r\n          continue\r\n\r\n        case S.PROC_INST_BODY:\r\n          if (!parser.procInstBody && isWhitespace(c)) {\r\n            continue\r\n          } else if (c === \'?\') {\r\n            parser.state = S.PROC_INST_ENDING\r\n          } else {\r\n            parser.procInstBody += c\r\n          }\r\n          continue\r\n\r\n        case S.PROC_INST_ENDING:\r\n          if (c === \'>\') {\r\n            emitNode(parser, \'onprocessinginstruction\', {\r\n              name: parser.procInstName,\r\n              body: parser.procInstBody\r\n            })\r\n            parser.procInstName = parser.procInstBody = \'\'\r\n            parser.state = S.TEXT\r\n          } else {\r\n            parser.procInstBody += \'?\' + c\r\n            parser.state = S.PROC_INST_BODY\r\n          }\r\n          continue\r\n\r\n        case S.OPEN_TAG:\r\n          if (isMatch(nameBody, c)) {\r\n            parser.tagName += c\r\n          } else {\r\n            newTag(parser)\r\n            if (c === \'>\') {\r\n              openTag(parser)\r\n            } else if (c === \'/\') {\r\n              parser.state = S.OPEN_TAG_SLASH\r\n            } else {\r\n              if (!isWhitespace(c)) {\r\n                strictFail(parser, \'Invalid character in tag name\')\r\n              }\r\n              parser.state = S.ATTRIB\r\n            }\r\n          }\r\n          continue\r\n\r\n        case S.OPEN_TAG_SLASH:\r\n          if (c === \'>\') {\r\n            openTag(parser, true)\r\n            closeTag(parser)\r\n          } else {\r\n            strictFail(parser, \'Forward-slash in opening tag not followed by >\')\r\n            parser.state = S.ATTRIB\r\n          }\r\n          continue\r\n\r\n        case S.ATTRIB:\r\n          // haven\'t read the attribute name yet.\r\n          if (isWhitespace(c)) {\r\n            continue\r\n          } else if (c === \'>\') {\r\n            openTag(parser)\r\n          } else if (c === \'/\') {\r\n            parser.state = S.OPEN_TAG_SLASH\r\n          } else if (isMatch(nameStart, c)) {\r\n            parser.attribName = c\r\n            parser.attribValue = \'\'\r\n            parser.state = S.ATTRIB_NAME\r\n          } else {\r\n            strictFail(parser, \'Invalid attribute name\')\r\n          }\r\n          continue\r\n\r\n        case S.ATTRIB_NAME:\r\n          if (c === \'=\') {\r\n            parser.state = S.ATTRIB_VALUE\r\n          } else if (c === \'>\') {\r\n            strictFail(parser, \'Attribute without value\')\r\n            parser.attribValue = parser.attribName\r\n            attrib(parser)\r\n            openTag(parser)\r\n          } else if (isWhitespace(c)) {\r\n            parser.state = S.ATTRIB_NAME_SAW_WHITE\r\n          } else if (isMatch(nameBody, c)) {\r\n            parser.attribName += c\r\n          } else {\r\n            strictFail(parser, \'Invalid attribute name\')\r\n          }\r\n          continue\r\n\r\n        case S.ATTRIB_NAME_SAW_WHITE:\r\n          if (c === \'=\') {\r\n            parser.state = S.ATTRIB_VALUE\r\n          } else if (isWhitespace(c)) {\r\n            continue\r\n          } else {\r\n            strictFail(parser, \'Attribute without value\')\r\n            parser.tag.attributes[parser.attribName] = \'\'\r\n            parser.attribValue = \'\'\r\n            emitNode(parser, \'onattribute\', {\r\n              name: parser.attribName,\r\n              value: \'\'\r\n            })\r\n            parser.attribName = \'\'\r\n            if (c === \'>\') {\r\n              openTag(parser)\r\n            } else if (isMatch(nameStart, c)) {\r\n              parser.attribName = c\r\n              parser.state = S.ATTRIB_NAME\r\n            } else {\r\n              strictFail(parser, \'Invalid attribute name\')\r\n              parser.state = S.ATTRIB\r\n            }\r\n          }\r\n          continue\r\n\r\n        case S.ATTRIB_VALUE:\r\n          if (isWhitespace(c)) {\r\n            continue\r\n          } else if (isQuote(c)) {\r\n            parser.q = c\r\n            parser.state = S.ATTRIB_VALUE_QUOTED\r\n          } else {\r\n            strictFail(parser, \'Unquoted attribute value\')\r\n            parser.state = S.ATTRIB_VALUE_UNQUOTED\r\n            parser.attribValue = c\r\n          }\r\n          continue\r\n\r\n        case S.ATTRIB_VALUE_QUOTED:\r\n          if (c !== parser.q) {\r\n            if (c === \'&\') {\r\n              parser.state = S.ATTRIB_VALUE_ENTITY_Q\r\n            } else {\r\n              parser.attribValue += c\r\n            }\r\n            continue\r\n          }\r\n          attrib(parser)\r\n          parser.q = \'\'\r\n          parser.state = S.ATTRIB_VALUE_CLOSED\r\n          continue\r\n\r\n        case S.ATTRIB_VALUE_CLOSED:\r\n          if (isWhitespace(c)) {\r\n            parser.state = S.ATTRIB\r\n          } else if (c === \'>\') {\r\n            openTag(parser)\r\n          } else if (c === \'/\') {\r\n            parser.state = S.OPEN_TAG_SLASH\r\n          } else if (isMatch(nameStart, c)) {\r\n            strictFail(parser, \'No whitespace between attributes\')\r\n            parser.attribName = c\r\n            parser.attribValue = \'\'\r\n            parser.state = S.ATTRIB_NAME\r\n          } else {\r\n            strictFail(parser, \'Invalid attribute name\')\r\n          }\r\n          continue\r\n\r\n        case S.ATTRIB_VALUE_UNQUOTED:\r\n          if (!isAttribEnd(c)) {\r\n            if (c === \'&\') {\r\n              parser.state = S.ATTRIB_VALUE_ENTITY_U\r\n            } else {\r\n              parser.attribValue += c\r\n            }\r\n            continue\r\n          }\r\n          attrib(parser)\r\n          if (c === \'>\') {\r\n            openTag(parser)\r\n          } else {\r\n            parser.state = S.ATTRIB\r\n          }\r\n          continue\r\n\r\n        case S.CLOSE_TAG:\r\n          if (!parser.tagName) {\r\n            if (isWhitespace(c)) {\r\n              continue\r\n            } else if (notMatch(nameStart, c)) {\r\n              if (parser.script) {\r\n                parser.script += \'</\' + c\r\n                parser.state = S.SCRIPT\r\n              } else {\r\n                strictFail(parser, \'Invalid tagname in closing tag.\')\r\n              }\r\n            } else {\r\n              parser.tagName = c\r\n            }\r\n          } else if (c === \'>\') {\r\n            closeTag(parser)\r\n          } else if (isMatch(nameBody, c)) {\r\n            parser.tagName += c\r\n          } else if (parser.script) {\r\n            parser.script += \'</\' + parser.tagName\r\n            parser.tagName = \'\'\r\n            parser.state = S.SCRIPT\r\n          } else {\r\n            if (!isWhitespace(c)) {\r\n              strictFail(parser, \'Invalid tagname in closing tag\')\r\n            }\r\n            parser.state = S.CLOSE_TAG_SAW_WHITE\r\n          }\r\n          continue\r\n\r\n        case S.CLOSE_TAG_SAW_WHITE:\r\n          if (isWhitespace(c)) {\r\n            continue\r\n          }\r\n          if (c === \'>\') {\r\n            closeTag(parser)\r\n          } else {\r\n            strictFail(parser, \'Invalid characters in closing tag\')\r\n          }\r\n          continue\r\n\r\n        case S.TEXT_ENTITY:\r\n        case S.ATTRIB_VALUE_ENTITY_Q:\r\n        case S.ATTRIB_VALUE_ENTITY_U:\r\n          var returnState\r\n          var buffer\r\n          switch (parser.state) {\r\n            case S.TEXT_ENTITY:\r\n              returnState = S.TEXT\r\n              buffer = \'textNode\'\r\n              break\r\n\r\n            case S.ATTRIB_VALUE_ENTITY_Q:\r\n              returnState = S.ATTRIB_VALUE_QUOTED\r\n              buffer = \'attribValue\'\r\n              break\r\n\r\n            case S.ATTRIB_VALUE_ENTITY_U:\r\n              returnState = S.ATTRIB_VALUE_UNQUOTED\r\n              buffer = \'attribValue\'\r\n              break\r\n          }\r\n\r\n          if (c === \';\') {\r\n            parser[buffer] += parseEntity(parser)\r\n            parser.entity = \'\'\r\n            parser.state = returnState\r\n          } else if (isMatch(parser.entity.length ? entityBody : entityStart, c)) {\r\n            parser.entity += c\r\n          } else {\r\n            strictFail(parser, \'Invalid character in entity name\')\r\n            parser[buffer] += \'&\' + parser.entity + c\r\n            parser.entity = \'\'\r\n            parser.state = returnState\r\n          }\r\n\r\n          continue\r\n\r\n        default:\r\n          throw new Error(parser, \'Unknown state: \' + parser.state)\r\n      }\r\n    } // while\r\n\r\n    if (parser.position >= parser.bufferCheckPosition) {\r\n      checkBufferLength(parser)\r\n    }\r\n    return parser\r\n  }\r\n\r\n  /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */\r\n  /* istanbul ignore next */\r\n  if (!String.fromCodePoint) {\r\n    (function () {\r\n      var stringFromCharCode = String.fromCharCode\r\n      var floor = Math.floor\r\n      var fromCodePoint = function () {\r\n        var MAX_SIZE = 0x4000\r\n        var codeUnits = []\r\n        var highSurrogate\r\n        var lowSurrogate\r\n        var index = -1\r\n        var length = arguments.length\r\n        if (!length) {\r\n          return \'\'\r\n        }\r\n        var result = \'\'\r\n        while (++index < length) {\r\n          var codePoint = Number(arguments[index])\r\n          if (\r\n            !isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`\r\n            codePoint < 0 || // not a valid Unicode code point\r\n            codePoint > 0x10FFFF || // not a valid Unicode code point\r\n            floor(codePoint) !== codePoint // not an integer\r\n          ) {\r\n            throw RangeError(\'Invalid code point: \' + codePoint)\r\n          }\r\n          if (codePoint <= 0xFFFF) { // BMP code point\r\n            codeUnits.push(codePoint)\r\n          } else { // Astral code point; split in surrogate halves\r\n            // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae\r\n            codePoint -= 0x10000\r\n            highSurrogate = (codePoint >> 10) + 0xD800\r\n            lowSurrogate = (codePoint % 0x400) + 0xDC00\r\n            codeUnits.push(highSurrogate, lowSurrogate)\r\n          }\r\n          if (index + 1 === length || codeUnits.length > MAX_SIZE) {\r\n            result += stringFromCharCode.apply(null, codeUnits)\r\n            codeUnits.length = 0\r\n          }\r\n        }\r\n        return result\r\n      }\r\n      /* istanbul ignore next */\r\n      if (Object.defineProperty) {\r\n        Object.defineProperty(String, \'fromCodePoint\', {\r\n          value: fromCodePoint,\r\n          configurable: true,\r\n          writable: true\r\n        })\r\n      } else {\r\n        String.fromCodePoint = fromCodePoint\r\n      }\r\n    }())\r\n  }\r\n})( false ? this.sax = {} : exports)\r\n\r\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))\r\n\r\n/***/ }),\r\n/* 23 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\n"use strict";\r\n\r\n\r\nexports.byteLength = byteLength\r\nexports.toByteArray = toByteArray\r\nexports.fromByteArray = fromByteArray\r\n\r\nvar lookup = []\r\nvar revLookup = []\r\nvar Arr = typeof Uint8Array !== \'undefined\' ? Uint8Array : Array\r\n\r\nvar code = \'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\'\r\nfor (var i = 0, len = code.length; i < len; ++i) {\r\n  lookup[i] = code[i]\r\n  revLookup[code.charCodeAt(i)] = i\r\n}\r\n\r\nrevLookup[\'-\'.charCodeAt(0)] = 62\r\nrevLookup[\'_\'.charCodeAt(0)] = 63\r\n\r\nfunction placeHoldersCount (b64) {\r\n  var len = b64.length\r\n  if (len % 4 > 0) {\r\n    throw new Error(\'Invalid string. Length must be a multiple of 4\')\r\n  }\r\n\r\n  // the number of equal signs (place holders)\r\n  // if there are two placeholders, than the two characters before it\r\n  // represent one byte\r\n  // if there is only one, then the three characters before it represent 2 bytes\r\n  // this is just a cheap hack to not do indexOf twice\r\n  return b64[len - 2] === \'=\' ? 2 : b64[len - 1] === \'=\' ? 1 : 0\r\n}\r\n\r\nfunction byteLength (b64) {\r\n  // base64 is 4/3 + up to two characters of the original data\r\n  return (b64.length * 3 / 4) - placeHoldersCount(b64)\r\n}\r\n\r\nfunction toByteArray (b64) {\r\n  var i, l, tmp, placeHolders, arr\r\n  var len = b64.length\r\n  placeHolders = placeHoldersCount(b64)\r\n\r\n  arr = new Arr((len * 3 / 4) - placeHolders)\r\n\r\n  // if there are placeholders, only get up to the last complete 4 chars\r\n  l = placeHolders > 0 ? len - 4 : len\r\n\r\n  var L = 0\r\n\r\n  for (i = 0; i < l; i += 4) {\r\n    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]\r\n    arr[L++] = (tmp >> 16) & 0xFF\r\n    arr[L++] = (tmp >> 8) & 0xFF\r\n    arr[L++] = tmp & 0xFF\r\n  }\r\n\r\n  if (placeHolders === 2) {\r\n    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)\r\n    arr[L++] = tmp & 0xFF\r\n  } else if (placeHolders === 1) {\r\n    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)\r\n    arr[L++] = (tmp >> 8) & 0xFF\r\n    arr[L++] = tmp & 0xFF\r\n  }\r\n\r\n  return arr\r\n}\r\n\r\nfunction tripletToBase64 (num) {\r\n  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]\r\n}\r\n\r\nfunction encodeChunk (uint8, start, end) {\r\n  var tmp\r\n  var output = []\r\n  for (var i = start; i < end; i += 3) {\r\n    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])\r\n    output.push(tripletToBase64(tmp))\r\n  }\r\n  return output.join(\'\')\r\n}\r\n\r\nfunction fromByteArray (uint8) {\r\n  var tmp\r\n  var len = uint8.length\r\n  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes\r\n  var output = \'\'\r\n  var parts = []\r\n  var maxChunkLength = 16383 // must be multiple of 3\r\n\r\n  // go through the array every three bytes, we\'ll deal with trailing stuff later\r\n  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {\r\n    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))\r\n  }\r\n\r\n  // pad the end with zeros, but make sure to not forget the extra bytes\r\n  if (extraBytes === 1) {\r\n    tmp = uint8[len - 1]\r\n    output += lookup[tmp >> 2]\r\n    output += lookup[(tmp << 4) & 0x3F]\r\n    output += \'==\'\r\n  } else if (extraBytes === 2) {\r\n    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])\r\n    output += lookup[tmp >> 10]\r\n    output += lookup[(tmp >> 4) & 0x3F]\r\n    output += lookup[(tmp << 2) & 0x3F]\r\n    output += \'=\'\r\n  }\r\n\r\n  parts.push(output)\r\n\r\n  return parts.join(\'\')\r\n}\r\n\r\n\r\n/***/ }),\r\n/* 24 */\r\n/***/ (function(module, exports) {\r\n\r\nexports.read = function (buffer, offset, isLE, mLen, nBytes) {\r\n  var e, m\r\n  var eLen = nBytes * 8 - mLen - 1\r\n  var eMax = (1 << eLen) - 1\r\n  var eBias = eMax >> 1\r\n  var nBits = -7\r\n  var i = isLE ? (nBytes - 1) : 0\r\n  var d = isLE ? -1 : 1\r\n  var s = buffer[offset + i]\r\n\r\n  i += d\r\n\r\n  e = s & ((1 << (-nBits)) - 1)\r\n  s >>= (-nBits)\r\n  nBits += eLen\r\n  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}\r\n\r\n  m = e & ((1 << (-nBits)) - 1)\r\n  e >>= (-nBits)\r\n  nBits += mLen\r\n  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}\r\n\r\n  if (e === 0) {\r\n    e = 1 - eBias\r\n  } else if (e === eMax) {\r\n    return m ? NaN : ((s ? -1 : 1) * Infinity)\r\n  } else {\r\n    m = m + Math.pow(2, mLen)\r\n    e = e - eBias\r\n  }\r\n  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)\r\n}\r\n\r\nexports.write = function (buffer, value, offset, isLE, mLen, nBytes) {\r\n  var e, m, c\r\n  var eLen = nBytes * 8 - mLen - 1\r\n  var eMax = (1 << eLen) - 1\r\n  var eBias = eMax >> 1\r\n  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)\r\n  var i = isLE ? 0 : (nBytes - 1)\r\n  var d = isLE ? 1 : -1\r\n  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0\r\n\r\n  value = Math.abs(value)\r\n\r\n  if (isNaN(value) || value === Infinity) {\r\n    m = isNaN(value) ? 1 : 0\r\n    e = eMax\r\n  } else {\r\n    e = Math.floor(Math.log(value) / Math.LN2)\r\n    if (value * (c = Math.pow(2, -e)) < 1) {\r\n      e--\r\n      c *= 2\r\n    }\r\n    if (e + eBias >= 1) {\r\n      value += rt / c\r\n    } else {\r\n      value += rt * Math.pow(2, 1 - eBias)\r\n    }\r\n    if (value * c >= 2) {\r\n      e++\r\n      c /= 2\r\n    }\r\n\r\n    if (e + eBias >= eMax) {\r\n      m = 0\r\n      e = eMax\r\n    } else if (e + eBias >= 1) {\r\n      m = (value * c - 1) * Math.pow(2, mLen)\r\n      e = e + eBias\r\n    } else {\r\n      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)\r\n      e = 0\r\n    }\r\n  }\r\n\r\n  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}\r\n\r\n  e = (e << mLen) | m\r\n  eLen += mLen\r\n  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}\r\n\r\n  buffer[offset + i - d] |= s * 128\r\n}\r\n\r\n\r\n/***/ }),\r\n/* 25 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\n// Copyright Joyent, Inc. and other Node contributors.\r\n//\r\n// Permission is hereby granted, free of charge, to any person obtaining a\r\n// copy of this software and associated documentation files (the\r\n// "Software"), to deal in the Software without restriction, including\r\n// without limitation the rights to use, copy, modify, merge, publish,\r\n// distribute, sublicense, and/or sell copies of the Software, and to permit\r\n// persons to whom the Software is furnished to do so, subject to the\r\n// following conditions:\r\n//\r\n// The above copyright notice and this permission notice shall be included\r\n// in all copies or substantial portions of the Software.\r\n//\r\n// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS\r\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\r\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\r\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\r\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\r\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\r\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\r\n\r\nmodule.exports = Stream;\r\n\r\nvar EE = __webpack_require__(8).EventEmitter;\r\nvar inherits = __webpack_require__(1);\r\n\r\ninherits(Stream, EE);\r\nStream.Readable = __webpack_require__(9);\r\nStream.Writable = __webpack_require__(32);\r\nStream.Duplex = __webpack_require__(33);\r\nStream.Transform = __webpack_require__(34);\r\nStream.PassThrough = __webpack_require__(35);\r\n\r\n// Backwards-compat with node 0.4.x\r\nStream.Stream = Stream;\r\n\r\n\r\n\r\n// old-style streams.  Note that the pipe method (the only relevant\r\n// part of this class) is overridden in the Readable class.\r\n\r\nfunction Stream() {\r\n  EE.call(this);\r\n}\r\n\r\nStream.prototype.pipe = function(dest, options) {\r\n  var source = this;\r\n\r\n  function ondata(chunk) {\r\n    if (dest.writable) {\r\n      if (false === dest.write(chunk) && source.pause) {\r\n        source.pause();\r\n      }\r\n    }\r\n  }\r\n\r\n  source.on(\'data\', ondata);\r\n\r\n  function ondrain() {\r\n    if (source.readable && source.resume) {\r\n      source.resume();\r\n    }\r\n  }\r\n\r\n  dest.on(\'drain\', ondrain);\r\n\r\n  // If the \'end\' option is not supplied, dest.end() will be called when\r\n  // source gets the \'end\' or \'close\' events.  Only dest.end() once.\r\n  if (!dest._isStdio && (!options || options.end !== false)) {\r\n    source.on(\'end\', onend);\r\n    source.on(\'close\', onclose);\r\n  }\r\n\r\n  var didOnEnd = false;\r\n  function onend() {\r\n    if (didOnEnd) return;\r\n    didOnEnd = true;\r\n\r\n    dest.end();\r\n  }\r\n\r\n\r\n  function onclose() {\r\n    if (didOnEnd) return;\r\n    didOnEnd = true;\r\n\r\n    if (typeof dest.destroy === \'function\') dest.destroy();\r\n  }\r\n\r\n  // don\'t leave dangling pipes when there are errors.\r\n  function onerror(er) {\r\n    cleanup();\r\n    if (EE.listenerCount(this, \'error\') === 0) {\r\n      throw er; // Unhandled stream error in pipe.\r\n    }\r\n  }\r\n\r\n  source.on(\'error\', onerror);\r\n  dest.on(\'error\', onerror);\r\n\r\n  // remove all the event listeners that were added.\r\n  function cleanup() {\r\n    source.removeListener(\'data\', ondata);\r\n    dest.removeListener(\'drain\', ondrain);\r\n\r\n    source.removeListener(\'end\', onend);\r\n    source.removeListener(\'close\', onclose);\r\n\r\n    source.removeListener(\'error\', onerror);\r\n    dest.removeListener(\'error\', onerror);\r\n\r\n    source.removeListener(\'end\', cleanup);\r\n    source.removeListener(\'close\', cleanup);\r\n\r\n    dest.removeListener(\'close\', cleanup);\r\n  }\r\n\r\n  source.on(\'end\', cleanup);\r\n  source.on(\'close\', cleanup);\r\n\r\n  dest.on(\'close\', cleanup);\r\n\r\n  dest.emit(\'pipe\', source);\r\n\r\n  // Allow for unix-like usage: A.pipe(B).pipe(C)\r\n  return dest;\r\n};\r\n\r\n\r\n/***/ }),\r\n/* 26 */\r\n/***/ (function(module, exports) {\r\n\r\n/* (ignored) */\r\n\r\n/***/ }),\r\n/* 27 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\n"use strict";\r\n\r\n\r\n/*<replacement>*/\r\n\r\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\r\n\r\nvar Buffer = __webpack_require__(7).Buffer;\r\n/*</replacement>*/\r\n\r\nfunction copyBuffer(src, target, offset) {\r\n  src.copy(target, offset);\r\n}\r\n\r\nmodule.exports = function () {\r\n  function BufferList() {\r\n    _classCallCheck(this, BufferList);\r\n\r\n    this.head = null;\r\n    this.tail = null;\r\n    this.length = 0;\r\n  }\r\n\r\n  BufferList.prototype.push = function push(v) {\r\n    var entry = { data: v, next: null };\r\n    if (this.length > 0) this.tail.next = entry;else this.head = entry;\r\n    this.tail = entry;\r\n    ++this.length;\r\n  };\r\n\r\n  BufferList.prototype.unshift = function unshift(v) {\r\n    var entry = { data: v, next: this.head };\r\n    if (this.length === 0) this.tail = entry;\r\n    this.head = entry;\r\n    ++this.length;\r\n  };\r\n\r\n  BufferList.prototype.shift = function shift() {\r\n    if (this.length === 0) return;\r\n    var ret = this.head.data;\r\n    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;\r\n    --this.length;\r\n    return ret;\r\n  };\r\n\r\n  BufferList.prototype.clear = function clear() {\r\n    this.head = this.tail = null;\r\n    this.length = 0;\r\n  };\r\n\r\n  BufferList.prototype.join = function join(s) {\r\n    if (this.length === 0) return \'\';\r\n    var p = this.head;\r\n    var ret = \'\' + p.data;\r\n    while (p = p.next) {\r\n      ret += s + p.data;\r\n    }return ret;\r\n  };\r\n\r\n  BufferList.prototype.concat = function concat(n) {\r\n    if (this.length === 0) return Buffer.alloc(0);\r\n    if (this.length === 1) return this.head.data;\r\n    var ret = Buffer.allocUnsafe(n >>> 0);\r\n    var p = this.head;\r\n    var i = 0;\r\n    while (p) {\r\n      copyBuffer(p.data, ret, i);\r\n      i += p.data.length;\r\n      p = p.next;\r\n    }\r\n    return ret;\r\n  };\r\n\r\n  return BufferList;\r\n}();\r\n\r\n/***/ }),\r\n/* 28 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\nvar apply = Function.prototype.apply;\r\n\r\n// DOM APIs, for completeness\r\n\r\nexports.setTimeout = function() {\r\n  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);\r\n};\r\nexports.setInterval = function() {\r\n  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);\r\n};\r\nexports.clearTimeout =\r\nexports.clearInterval = function(timeout) {\r\n  if (timeout) {\r\n    timeout.close();\r\n  }\r\n};\r\n\r\nfunction Timeout(id, clearFn) {\r\n  this._id = id;\r\n  this._clearFn = clearFn;\r\n}\r\nTimeout.prototype.unref = Timeout.prototype.ref = function() {};\r\nTimeout.prototype.close = function() {\r\n  this._clearFn.call(window, this._id);\r\n};\r\n\r\n// Does not start the time, just sets up the members needed.\r\nexports.enroll = function(item, msecs) {\r\n  clearTimeout(item._idleTimeoutId);\r\n  item._idleTimeout = msecs;\r\n};\r\n\r\nexports.unenroll = function(item) {\r\n  clearTimeout(item._idleTimeoutId);\r\n  item._idleTimeout = -1;\r\n};\r\n\r\nexports._unrefActive = exports.active = function(item) {\r\n  clearTimeout(item._idleTimeoutId);\r\n\r\n  var msecs = item._idleTimeout;\r\n  if (msecs >= 0) {\r\n    item._idleTimeoutId = setTimeout(function onTimeout() {\r\n      if (item._onTimeout)\r\n        item._onTimeout();\r\n    }, msecs);\r\n  }\r\n};\r\n\r\n// setimmediate attaches itself to the global object\r\n__webpack_require__(29);\r\nexports.setImmediate = setImmediate;\r\nexports.clearImmediate = clearImmediate;\r\n\r\n\r\n/***/ }),\r\n/* 29 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\n/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {\r\n    "use strict";\r\n\r\n    if (global.setImmediate) {\r\n        return;\r\n    }\r\n\r\n    var nextHandle = 1; // Spec says greater than zero\r\n    var tasksByHandle = {};\r\n    var currentlyRunningATask = false;\r\n    var doc = global.document;\r\n    var registerImmediate;\r\n\r\n    function setImmediate(callback) {\r\n      // Callback can either be a function or a string\r\n      if (typeof callback !== "function") {\r\n        callback = new Function("" + callback);\r\n      }\r\n      // Copy function arguments\r\n      var args = new Array(arguments.length - 1);\r\n      for (var i = 0; i < args.length; i++) {\r\n          args[i] = arguments[i + 1];\r\n      }\r\n      // Store and register the task\r\n      var task = { callback: callback, args: args };\r\n      tasksByHandle[nextHandle] = task;\r\n      registerImmediate(nextHandle);\r\n      return nextHandle++;\r\n    }\r\n\r\n    function clearImmediate(handle) {\r\n        delete tasksByHandle[handle];\r\n    }\r\n\r\n    function run(task) {\r\n        var callback = task.callback;\r\n        var args = task.args;\r\n        switch (args.length) {\r\n        case 0:\r\n            callback();\r\n            break;\r\n        case 1:\r\n            callback(args[0]);\r\n            break;\r\n        case 2:\r\n            callback(args[0], args[1]);\r\n            break;\r\n        case 3:\r\n            callback(args[0], args[1], args[2]);\r\n            break;\r\n        default:\r\n            callback.apply(undefined, args);\r\n            break;\r\n        }\r\n    }\r\n\r\n    function runIfPresent(handle) {\r\n        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."\r\n        // So if we\'re currently running a task, we\'ll need to delay this invocation.\r\n        if (currentlyRunningATask) {\r\n            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a\r\n            // "too much recursion" error.\r\n            setTimeout(runIfPresent, 0, handle);\r\n        } else {\r\n            var task = tasksByHandle[handle];\r\n            if (task) {\r\n                currentlyRunningATask = true;\r\n                try {\r\n                    run(task);\r\n                } finally {\r\n                    clearImmediate(handle);\r\n                    currentlyRunningATask = false;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    function installNextTickImplementation() {\r\n        registerImmediate = function(handle) {\r\n            process.nextTick(function () { runIfPresent(handle); });\r\n        };\r\n    }\r\n\r\n    function canUsePostMessage() {\r\n        // The test against `importScripts` prevents this implementation from being installed inside a web worker,\r\n        // where `global.postMessage` means something completely different and can\'t be used for this purpose.\r\n        if (global.postMessage && !global.importScripts) {\r\n            var postMessageIsAsynchronous = true;\r\n            var oldOnMessage = global.onmessage;\r\n            global.onmessage = function() {\r\n                postMessageIsAsynchronous = false;\r\n            };\r\n            global.postMessage("", "*");\r\n            global.onmessage = oldOnMessage;\r\n            return postMessageIsAsynchronous;\r\n        }\r\n    }\r\n\r\n    function installPostMessageImplementation() {\r\n        // Installs an event handler on `global` for the `message` event: see\r\n        // * https://developer.mozilla.org/en/DOM/window.postMessage\r\n        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages\r\n\r\n        var messagePrefix = "setImmediate$" + Math.random() + "$";\r\n        var onGlobalMessage = function(event) {\r\n            if (event.source === global &&\r\n                typeof event.data === "string" &&\r\n                event.data.indexOf(messagePrefix) === 0) {\r\n                runIfPresent(+event.data.slice(messagePrefix.length));\r\n            }\r\n        };\r\n\r\n        if (global.addEventListener) {\r\n            global.addEventListener("message", onGlobalMessage, false);\r\n        } else {\r\n            global.attachEvent("onmessage", onGlobalMessage);\r\n        }\r\n\r\n        registerImmediate = function(handle) {\r\n            global.postMessage(messagePrefix + handle, "*");\r\n        };\r\n    }\r\n\r\n    function installMessageChannelImplementation() {\r\n        var channel = new MessageChannel();\r\n        channel.port1.onmessage = function(event) {\r\n            var handle = event.data;\r\n            runIfPresent(handle);\r\n        };\r\n\r\n        registerImmediate = function(handle) {\r\n            channel.port2.postMessage(handle);\r\n        };\r\n    }\r\n\r\n    function installReadyStateChangeImplementation() {\r\n        var html = doc.documentElement;\r\n        registerImmediate = function(handle) {\r\n            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted\r\n            // into the document. Do so, thus queuing up the task. Remember to clean up once it\'s been called.\r\n            var script = doc.createElement("script");\r\n            script.onreadystatechange = function () {\r\n                runIfPresent(handle);\r\n                script.onreadystatechange = null;\r\n                html.removeChild(script);\r\n                script = null;\r\n            };\r\n            html.appendChild(script);\r\n        };\r\n    }\r\n\r\n    function installSetTimeoutImplementation() {\r\n        registerImmediate = function(handle) {\r\n            setTimeout(runIfPresent, 0, handle);\r\n        };\r\n    }\r\n\r\n    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.\r\n    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);\r\n    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;\r\n\r\n    // Don\'t get fooled by e.g. browserify environments.\r\n    if ({}.toString.call(global.process) === "[object process]") {\r\n        // For Node.js before 0.9\r\n        installNextTickImplementation();\r\n\r\n    } else if (canUsePostMessage()) {\r\n        // For non-IE10 modern browsers\r\n        installPostMessageImplementation();\r\n\r\n    } else if (global.MessageChannel) {\r\n        // For web workers, where supported\r\n        installMessageChannelImplementation();\r\n\r\n    } else if (doc && "onreadystatechange" in doc.createElement("script")) {\r\n        // For IE 6\u20138\r\n        installReadyStateChangeImplementation();\r\n\r\n    } else {\r\n        // For older browsers\r\n        installSetTimeoutImplementation();\r\n    }\r\n\r\n    attachTo.setImmediate = setImmediate;\r\n    attachTo.clearImmediate = clearImmediate;\r\n}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));\r\n\r\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(5)))\r\n\r\n/***/ }),\r\n/* 30 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\n/* WEBPACK VAR INJECTION */(function(global) {\r\n/**\r\n * Module exports.\r\n */\r\n\r\nmodule.exports = deprecate;\r\n\r\n/**\r\n * Mark that a method should not be used.\r\n * Returns a modified function which warns once by default.\r\n *\r\n * If `localStorage.noDeprecation = true` is set, then it is a no-op.\r\n *\r\n * If `localStorage.throwDeprecation = true` is set, then deprecated functions\r\n * will throw an Error when invoked.\r\n *\r\n * If `localStorage.traceDeprecation = true` is set, then deprecated functions\r\n * will invoke `console.trace()` instead of `console.error()`.\r\n *\r\n * @param {Function} fn - the function to deprecate\r\n * @param {String} msg - the string to print to the console when `fn` is invoked\r\n * @returns {Function} a new "deprecated" version of `fn`\r\n * @api public\r\n */\r\n\r\nfunction deprecate (fn, msg) {\r\n  if (config(\'noDeprecation\')) {\r\n    return fn;\r\n  }\r\n\r\n  var warned = false;\r\n  function deprecated() {\r\n    if (!warned) {\r\n      if (config(\'throwDeprecation\')) {\r\n        throw new Error(msg);\r\n      } else if (config(\'traceDeprecation\')) {\r\n        console.trace(msg);\r\n      } else {\r\n        console.warn(msg);\r\n      }\r\n      warned = true;\r\n    }\r\n    return fn.apply(this, arguments);\r\n  }\r\n\r\n  return deprecated;\r\n}\r\n\r\n/**\r\n * Checks `localStorage` for boolean values for the given `name`.\r\n *\r\n * @param {String} name\r\n * @returns {Boolean}\r\n * @api private\r\n */\r\n\r\nfunction config (name) {\r\n  // accessing global.localStorage can trigger a DOMException in sandboxed iframes\r\n  try {\r\n    if (!global.localStorage) return false;\r\n  } catch (_) {\r\n    return false;\r\n  }\r\n  var val = global.localStorage[name];\r\n  if (null == val) return false;\r\n  return String(val).toLowerCase() === \'true\';\r\n}\r\n\r\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))\r\n\r\n/***/ }),\r\n/* 31 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\n"use strict";\r\n// Copyright Joyent, Inc. and other Node contributors.\r\n//\r\n// Permission is hereby granted, free of charge, to any person obtaining a\r\n// copy of this software and associated documentation files (the\r\n// "Software"), to deal in the Software without restriction, including\r\n// without limitation the rights to use, copy, modify, merge, publish,\r\n// distribute, sublicense, and/or sell copies of the Software, and to permit\r\n// persons to whom the Software is furnished to do so, subject to the\r\n// following conditions:\r\n//\r\n// The above copyright notice and this permission notice shall be included\r\n// in all copies or substantial portions of the Software.\r\n//\r\n// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS\r\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\r\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\r\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\r\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\r\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\r\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\r\n\r\n// a passthrough stream.\r\n// basically just the most minimal sort of Transform stream.\r\n// Every written chunk gets output as-is.\r\n\r\n\r\n\r\nmodule.exports = PassThrough;\r\n\r\nvar Transform = __webpack_require__(19);\r\n\r\n/*<replacement>*/\r\nvar util = __webpack_require__(3);\r\nutil.inherits = __webpack_require__(1);\r\n/*</replacement>*/\r\n\r\nutil.inherits(PassThrough, Transform);\r\n\r\nfunction PassThrough(options) {\r\n  if (!(this instanceof PassThrough)) return new PassThrough(options);\r\n\r\n  Transform.call(this, options);\r\n}\r\n\r\nPassThrough.prototype._transform = function (chunk, encoding, cb) {\r\n  cb(null, chunk);\r\n};\r\n\r\n/***/ }),\r\n/* 32 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\nmodule.exports = __webpack_require__(10);\r\n\r\n\r\n/***/ }),\r\n/* 33 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\nmodule.exports = __webpack_require__(0);\r\n\r\n\r\n/***/ }),\r\n/* 34 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\nmodule.exports = __webpack_require__(9).Transform\r\n\r\n\r\n/***/ }),\r\n/* 35 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\nmodule.exports = __webpack_require__(9).PassThrough\r\n\r\n\r\n/***/ }),\r\n/* 36 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\nvar helper = __webpack_require__(12);\r\nvar xml2js = __webpack_require__(14);\r\n\r\nfunction validateOptions (userOptions) {\r\n  var options = helper.copyOptions(userOptions);\r\n  helper.ensureSpacesExists(options);\r\n  return options;\r\n}\r\n\r\nmodule.exports = function(xml, userOptions) {\r\n  var options, js, json, parentKey;\r\n  options = validateOptions(userOptions);\r\n  js = xml2js(xml, options);\r\n  parentKey = \'compact\' in options && options.compact ? \'_parent\' : \'parent\';\r\n  // parentKey = ptions.compact ? \'_parent\' : \'parent\'; // consider this\r\n  if (\'addParent\' in options && options.addParent) {\r\n    json = JSON.stringify(js, function (k, v) { return k === parentKey? \'_\' : v; }, options.spaces);\r\n  } else {\r\n    json = JSON.stringify(js, null, options.spaces);\r\n  }\r\n  return json.replace(/\\u2028/g, \'\\\\u2028\').replace(/\\u2029/g, \'\\\\u2029\');\r\n};\r\n\r\n\r\n/***/ }),\r\n/* 37 */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\n/* WEBPACK VAR INJECTION */(function(Buffer) {var js2xml = __webpack_require__(20);\r\n\r\nmodule.exports = function (json, options) {\r\n  if (json instanceof Buffer) {\r\n    json = json.toString();\r\n  }\r\n  var js = null;\r\n  if (typeof (json) === \'string\') {\r\n    try {\r\n      js = JSON.parse(json);\r\n    } catch (e) {\r\n      throw new Error(\'The JSON structure is invalid\');\r\n    }\r\n  } else {\r\n    js = json;\r\n  }\r\n  return js2xml(js, options);\r\n};\r\n\r\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))\r\n\r\n/***/ })\r\n/******/ ])));';
    loader.global.define = undefined;
    loader.global.module = undefined;
    loader.global.exports = undefined;
    loader.__exec({
        'source': source,
        'address': module.uri
    });
    loader.global.require = require;
    loader.global.define = define;
    return loader.get('@@global-helpers').retrieveGlobal(module.id, undefined);
});
/*moment@2.23.0#moment*/
;
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define('moment@2.23.0#moment', factory) : global.moment = factory();
}(this, function () {
    'use strict';
    var hookCallback;
    function hooks() {
        return hookCallback.apply(null, arguments);
    }
    function setHookCallback(callback) {
        hookCallback = callback;
    }
    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }
    function isObject(input) {
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }
    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return Object.getOwnPropertyNames(obj).length === 0;
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }
    function isUndefined(input) {
        return input === void 0;
    }
    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }
    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }
    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }
    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }
    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }
        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }
        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }
        return a;
    }
    function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }
    function defaultParsingFlags() {
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false
        };
    }
    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }
    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;
            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }
            return false;
        };
    }
    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
            if (m._strict) {
                isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
            }
            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            } else {
                return isNowValid;
            }
        }
        return m._isValid;
    }
    function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        } else {
            getParsingFlags(m).userInvalidated = true;
        }
        return m;
    }
    var momentProperties = hooks.momentProperties = [];
    function copyConfig(to, from) {
        var i, prop, val;
        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }
        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }
        return to;
    }
    var updateInProgress = false;
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }
    function isMoment(obj) {
        return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
    }
    function absFloor(number) {
        if (number < 0) {
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }
    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion, value = 0;
        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }
        return value;
    }
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
        for (i = 0; i < len; i++) {
            if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }
    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }
    function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2);
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }
    var deprecations = {};
    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }
    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;
    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }
    function set(config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
    }
    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }
    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }
    var keys;
    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }
    var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
    };
    function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }
    var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A'
    };
    function longDateFormat(key) {
        var format = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) {
            return format;
        }
        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });
        return this._longDateFormat[key];
    }
    var defaultInvalidDate = 'Invalid date';
    function invalidDate() {
        return this._invalidDate;
    }
    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;
    function ordinal(number) {
        return this._ordinal.replace('%d', number);
    }
    var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
    };
    function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
    }
    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }
    var aliases = {};
    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }
    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }
    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {}, normalizedProp, prop;
        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }
        return normalizedInput;
    }
    var priorities = {};
    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }
    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({
                unit: u,
                priority: priorities[u]
            });
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }
    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign = number >= 0;
        return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }
    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
    var formatFunctions = {};
    var formatTokenFunctions = {};
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }
    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }
    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;
        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }
        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }
        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
        return formatFunctions[format](m);
    }
    function expandFormat(format, locale) {
        var i = 5;
        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }
        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }
        return format;
    }
    var match1 = /\d/;
    var match2 = /\d\d/;
    var match3 = /\d{3}/;
    var match4 = /\d{4}/;
    var match6 = /[+-]?\d{6}/;
    var match1to2 = /\d\d?/;
    var match3to4 = /\d\d\d\d?/;
    var match5to6 = /\d\d\d\d\d\d?/;
    var match1to3 = /\d{1,3}/;
    var match1to4 = /\d{1,4}/;
    var match1to6 = /[+-]?\d{1,6}/;
    var matchUnsigned = /\d+/;
    var matchSigned = /[+-]?\d+/;
    var matchOffset = /Z|[+-]\d\d:?\d\d/gi;
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi;
    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/;
    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
    var regexes = {};
    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return isStrict && strictRegex ? strictRegex : regex;
        };
    }
    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }
        return regexes[token](config._strict, config._locale);
    }
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }
    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    var tokens = {};
    function addParseToken(token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }
    function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }
    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }
    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;
    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });
    addFormatToken(0, [
        'YY',
        2
    ], 0, function () {
        return this.year() % 100;
    });
    addFormatToken(0, [
        'YYYY',
        4
    ], 0, 'year');
    addFormatToken(0, [
        'YYYYY',
        5
    ], 0, 'year');
    addFormatToken(0, [
        'YYYYYY',
        6,
        true
    ], 0, 'year');
    addUnitAlias('year', 'y');
    addUnitPriority('year', 1);
    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);
    addParseToken([
        'YYYYY',
        'YYYYYY'
    ], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });
    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }
    function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }
    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };
    var getSetYear = makeGetSet('FullYear', true);
    function getIsLeapYear() {
        return isLeapYear(this.year());
    }
    function makeGetSet(unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }
    function get(mom, unit) {
        return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }
    function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            } else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }
    function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }
    function stringSet(units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }
    function mod(n, x) {
        return (n % x + x) % x;
    }
    var indexOf;
    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }
    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
    }
    addFormatToken('M', [
        'MM',
        2
    ], 'Mo', function () {
        return this.month() + 1;
    });
    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });
    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });
    addUnitAlias('month', 'M');
    addUnitPriority('month', 8);
    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });
    addParseToken([
        'M',
        'MM'
    ], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });
    addParseToken([
        'MMM',
        'MMMM'
    ], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });
    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths(m, format) {
        if (!m) {
            return isArray(this._months) ? this._months : this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }
    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort(m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }
    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([
                    2000,
                    i
                ]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }
        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }
    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;
        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }
        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }
        for (i = 0; i < 12; i++) {
            mom = createUTC([
                2000,
                i
            ]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }
    function setMonth(mom, value) {
        var dayOfMonth;
        if (!mom.isValid()) {
            return mom;
        }
        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }
        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }
    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }
    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }
    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }
    var defaultMonthsRegex = matchWord;
    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
        }
    }
    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }
        var shortPieces = [], longPieces = [], mixedPieces = [], i, mom;
        for (i = 0; i < 12; i++) {
            mom = createUTC([
                2000,
                i
            ]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }
        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }
    function createDate(y, m, d, h, M, s, ms) {
        var date = new Date(y, m, d, h, M, s, ms);
        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
        return date;
    }
    function createUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
        return date;
    }
    function firstWeekOffset(year, dow, doy) {
        var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1;
    }
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }
        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }
    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }
        return {
            week: resWeek,
            year: resYear
        };
    }
    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }
    addFormatToken('w', [
        'ww',
        2
    ], 'wo', 'week');
    addFormatToken('W', [
        'WW',
        2
    ], 'Wo', 'isoWeek');
    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');
    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);
    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);
    addWeekParseToken([
        'w',
        'ww',
        'W',
        'WW'
    ], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });
    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }
    var defaultLocaleWeek = {
        dow: 0,
        doy: 6
    };
    function localeFirstDayOfWeek() {
        return this._week.dow;
    }
    function localeFirstDayOfYear() {
        return this._week.doy;
    }
    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }
    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }
    addFormatToken('d', 0, 'do', 'day');
    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });
    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });
    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });
    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');
    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);
    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });
    addWeekParseToken([
        'dd',
        'ddd',
        'dddd'
    ], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });
    addWeekParseToken([
        'd',
        'e',
        'E'
    ], function (input, week, config, token) {
        week[token] = toInt(input);
    });
    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }
        if (!isNaN(input)) {
            return parseInt(input, 10);
        }
        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }
        return null;
    }
    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }
    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays(m, format) {
        if (!m) {
            return isArray(this._weekdays) ? this._weekdays : this._weekdays['standalone'];
        }
        return isArray(this._weekdays) ? this._weekdays[m.day()] : this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
    }
    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort(m) {
        return m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }
    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin(m) {
        return m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }
    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            for (i = 0; i < 7; ++i) {
                mom = createUTC([
                    2000,
                    1
                ]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }
        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }
    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;
        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }
        for (i = 0; i < 7; i++) {
            mom = createUTC([
                2000,
                1
            ]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }
    function getSetDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }
    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }
    function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }
    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }
    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }
    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }
    function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }
        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            mom = createUTC([
                2000,
                1
            ]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }
        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }
    function hFormat() {
        return this.hours() % 12 || 12;
    }
    function kFormat() {
        return this.hours() || 24;
    }
    addFormatToken('H', [
        'HH',
        2
    ], 0, 'hour');
    addFormatToken('h', [
        'hh',
        2
    ], 0, hFormat);
    addFormatToken('k', [
        'kk',
        2
    ], 0, kFormat);
    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });
    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });
    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }
    meridiem('a', true);
    meridiem('A', false);
    addUnitAlias('hour', 'h');
    addUnitPriority('hour', 13);
    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }
    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);
    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);
    addParseToken([
        'H',
        'HH'
    ], HOUR);
    addParseToken([
        'k',
        'kk'
    ], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken([
        'a',
        'A'
    ], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken([
        'h',
        'hh'
    ], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });
    function localeIsPM(input) {
        return (input + '').toLowerCase().charAt(0) === 'p';
    }
    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }
    var getSetHour = makeGetSet('Hours', true);
    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,
        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,
        week: defaultLocaleWeek,
        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,
        meridiemParse: defaultLocaleMeridiemParse
    };
    var locales = {};
    var localeFamilies = {};
    var globalLocale;
    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;
        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }
    function loadLocale(name) {
        var oldLocale = null;
        if (!locales[name] && typeof module !== 'undefined' && module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = require;
                aliasedRequire('./locale/' + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {
            }
        }
        return locales[name];
    }
    function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            } else {
                data = defineLocale(key, values);
            }
            if (data) {
                globalLocale = data;
            } else {
                if (typeof console !== 'undefined' && console.warn) {
                    console.warn('Locale ' + key + ' not found. Did you forget to load it?');
                }
            }
        }
        return globalLocale._abbr;
    }
    function defineLocale(name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));
            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }
            getSetGlobalLocale(name);
            return locales[name];
        } else {
            delete locales[name];
            return null;
        }
    }
    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;
            getSetGlobalLocale(name);
        } else {
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }
    function getLocale(key) {
        var locale;
        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }
        if (!key) {
            return globalLocale;
        }
        if (!isArray(key)) {
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }
        return chooseLocale(key);
    }
    function listLocales() {
        return keys(locales);
    }
    function checkOverflow(m) {
        var overflow;
        var a = m._a;
        if (a && getParsingFlags(m).overflow === -2) {
            overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }
            getParsingFlags(m).overflow = overflow;
        }
        return m;
    }
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }
    function currentDateArray(config) {
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [
                nowValue.getUTCFullYear(),
                nowValue.getUTCMonth(),
                nowValue.getUTCDate()
            ];
        }
        return [
            nowValue.getFullYear(),
            nowValue.getMonth(),
            nowValue.getDate()
        ];
    }
    function configFromArray(config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;
        if (config._d) {
            return;
        }
        currentDate = currentDateArray(config);
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }
            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }
        for (; i < 7; i++) {
            config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
        }
        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }
        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }
        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }
    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;
        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;
            var curWeek = weekOfYear(createLocal(), dow, doy);
            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
            week = defaults(w.w, curWeek.week);
            if (w.d != null) {
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
    var isoDates = [
        [
            'YYYYYY-MM-DD',
            /[+-]\d{6}-\d\d-\d\d/
        ],
        [
            'YYYY-MM-DD',
            /\d{4}-\d\d-\d\d/
        ],
        [
            'GGGG-[W]WW-E',
            /\d{4}-W\d\d-\d/
        ],
        [
            'GGGG-[W]WW',
            /\d{4}-W\d\d/,
            false
        ],
        [
            'YYYY-DDD',
            /\d{4}-\d{3}/
        ],
        [
            'YYYY-MM',
            /\d{4}-\d\d/,
            false
        ],
        [
            'YYYYYYMMDD',
            /[+-]\d{10}/
        ],
        [
            'YYYYMMDD',
            /\d{8}/
        ],
        [
            'GGGG[W]WWE',
            /\d{4}W\d{3}/
        ],
        [
            'GGGG[W]WW',
            /\d{4}W\d{2}/,
            false
        ],
        [
            'YYYYDDD',
            /\d{7}/
        ]
    ];
    var isoTimes = [
        [
            'HH:mm:ss.SSSS',
            /\d\d:\d\d:\d\d\.\d+/
        ],
        [
            'HH:mm:ss,SSSS',
            /\d\d:\d\d:\d\d,\d+/
        ],
        [
            'HH:mm:ss',
            /\d\d:\d\d:\d\d/
        ],
        [
            'HH:mm',
            /\d\d:\d\d/
        ],
        [
            'HHmmss.SSSS',
            /\d\d\d\d\d\d\.\d+/
        ],
        [
            'HHmmss,SSSS',
            /\d\d\d\d\d\d,\d+/
        ],
        [
            'HHmmss',
            /\d\d\d\d\d\d/
        ],
        [
            'HHmm',
            /\d\d\d\d/
        ],
        [
            'HH',
            /\d\d/
        ]
    ];
    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
    function configFromISO(config) {
        var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat;
        if (match) {
            getParsingFlags(config).iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];
        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }
        return result;
    }
    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }
    function preprocessRFC2822(s) {
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }
    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }
    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };
    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }
            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);
            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }
        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }
        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }
        hooks.createFromInputFallback(config);
    }
    hooks.createFromInputFallback = deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' + 'discouraged and will be removed in an upcoming major release. Please refer to ' + 'http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    });
    hooks.ISO_8601 = function () {
    };
    hooks.RFC_2822 = function () {
    };
    function configFromStringAndFormat(config) {
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;
        var string = '' + config._i, i, parsedInput, tokens, token, skipped, stringLength = string.length, totalParsedInputLength = 0;
        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                } else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }
        if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }
        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
        configFromArray(config);
        checkOverflow(config);
    }
    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;
        if (meridiem == null) {
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            return hour;
        }
    }
    function configFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore;
        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }
        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);
            if (!isValid(tempConfig)) {
                continue;
            }
            currentScore += getParsingFlags(tempConfig).charsLeftOver;
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
            getParsingFlags(tempConfig).score = currentScore;
            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }
        extend(config, bestMoment || tempConfig);
    }
    function configFromObject(config) {
        if (config._d) {
            return;
        }
        var i = normalizeObjectUnits(config._i);
        config._a = map([
            i.year,
            i.month,
            i.day || i.date,
            i.hour,
            i.minute,
            i.second,
            i.millisecond
        ], function (obj) {
            return obj && parseInt(obj, 10);
        });
        configFromArray(config);
    }
    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            res.add(1, 'd');
            res._nextDay = undefined;
        }
        return res;
    }
    function prepareConfig(config) {
        var input = config._i, format = config._f;
        config._locale = config._locale || getLocale(config._l);
        if (input === null || format === undefined && input === '') {
            return createInvalid({ nullInput: true });
        }
        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }
        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else {
            configFromInput(config);
        }
        if (!isValid(config)) {
            config._d = null;
        }
        return config;
    }
    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }
    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};
        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }
        if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
            input = undefined;
        }
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        return createFromConfig(c);
    }
    function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }
    var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    });
    var prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    });
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }
    function min() {
        var args = [].slice.call(arguments, 0);
        return pickBy('isBefore', args);
    }
    function max() {
        var args = [].slice.call(arguments, 0);
        return pickBy('isAfter', args);
    }
    var now = function () {
        return Date.now ? Date.now() : +new Date();
    };
    var ordering = [
        'year',
        'quarter',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second',
        'millisecond'
    ];
    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }
        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false;
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }
        return true;
    }
    function isValid$1() {
        return this._isValid;
    }
    function createInvalid$1() {
        return createDuration(NaN);
    }
    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration), years = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months = normalizedInput.month || 0, weeks = normalizedInput.week || normalizedInput.isoWeek || 0, days = normalizedInput.day || 0, hours = normalizedInput.hour || 0, minutes = normalizedInput.minute || 0, seconds = normalizedInput.second || 0, milliseconds = normalizedInput.millisecond || 0;
        this._isValid = isDurationValid(normalizedInput);
        this._milliseconds = +milliseconds + seconds * 1000 + minutes * 60000 + hours * 1000 * 60 * 60;
        this._days = +days + weeks * 7;
        this._months = +months + quarters * 3 + years * 12;
        this._data = {};
        this._locale = getLocale();
        this._bubble();
    }
    function isDuration(obj) {
        return obj instanceof Duration;
    }
    function absRound(number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }
    function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
        });
    }
    offset('Z', ':');
    offset('ZZ', '');
    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken([
        'Z',
        'ZZ'
    ], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });
    var chunkOffset = /([\+\-]|\d\d)/gi;
    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);
        if (matches === null) {
            return null;
        }
        var chunk = matches[matches.length - 1] || [];
        var parts = (chunk + '').match(chunkOffset) || [
            '-',
            0,
            0
        ];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);
        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
    }
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }
    function getDateOffset(m) {
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }
    hooks.updateOffset = function () {
    };
    function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0, localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }
    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }
            this.utcOffset(input, keepLocalTime);
            return this;
        } else {
            return -this.utcOffset();
        }
    }
    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }
    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;
            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }
    function setOffsetToParsedOffset() {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            } else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }
    function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;
        return (this.utcOffset() - input) % 60 === 0;
    }
    function isDaylightSavingTime() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }
    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }
        var c = {};
        copyConfig(c, this);
        c = prepareConfig(c);
        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }
        return this._isDSTShifted;
    }
    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }
    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }
    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function createDuration(input, key) {
        var duration = input, match = null, sign, ret, diffRes;
        if (isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign)
            };
        } else if (duration == null) {
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }
        ret = new Duration(duration);
        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }
        return ret;
    }
    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;
    function parseIso(inp, sign) {
        var res = inp && parseFloat(inp.replace(',', '.'));
        return (isNaN(res) ? 0 : res) * sign;
    }
    function positiveMomentsDifference(base, other) {
        var res = {
            milliseconds: 0,
            months: 0
        };
        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }
        res.milliseconds = +other - +base.clone().add(res.months, 'M');
        return res;
    }
    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {
                milliseconds: 0,
                months: 0
            };
        }
        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }
        return res;
    }
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val;
                val = period;
                period = tmp;
            }
            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }
    function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds, days = absRound(duration._days), months = absRound(duration._months);
        if (!mom.isValid()) {
            return;
        }
        updateOffset = updateOffset == null ? true : updateOffset;
        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }
    var add = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');
    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
    }
    function calendar$1(time, formats) {
        var now = time || createLocal(), sod = cloneWithOffset(now, this).startOf('day'), format = hooks.calendarFormat(this, sod) || 'sameElse';
        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }
    function clone() {
        return new Moment(this);
    }
    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }
    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }
    function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from), localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }
    function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input), inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }
    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }
    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }
    function diff(input, units, asFloat) {
        var that, zoneDelta, output;
        if (!this.isValid()) {
            return NaN;
        }
        that = cloneWithOffset(input, this);
        if (!that.isValid()) {
            return NaN;
        }
        zoneDelta = (that.utcOffset() - this.utcOffset()) * 60000;
        units = normalizeUnits(units);
        switch (units) {
        case 'year':
            output = monthDiff(this, that) / 12;
            break;
        case 'month':
            output = monthDiff(this, that);
            break;
        case 'quarter':
            output = monthDiff(this, that) / 3;
            break;
        case 'second':
            output = (this - that) / 1000;
            break;
        case 'minute':
            output = (this - that) / 60000;
            break;
        case 'hour':
            output = (this - that) / 3600000;
            break;
        case 'day':
            output = (this - that - zoneDelta) / 86400000;
            break;
        case 'week':
            output = (this - that - zoneDelta) / 604800000;
            break;
        default:
            output = this - that;
        }
        return asFloat ? output : absFloor(output);
    }
    function monthDiff(a, b) {
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, 'months'), anchor2, adjust;
        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            adjust = (b - anchor) / (anchor2 - anchor);
        }
        return -(wholeMonthDiff + adjust) || 0;
    }
    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
    function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }
    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }
    function inspect() {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';
        return this.format(prefix + year + datetime + suffix);
    }
    function format(inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }
    function from(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
            return createDuration({
                to: this,
                from: time
            }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }
    function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }
    function to(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
            return createDuration({
                from: this,
                to: time
            }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }
    function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }
    function locale(key) {
        var newLocaleData;
        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }
    var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    });
    function localeData() {
        return this._locale;
    }
    function startOf(units) {
        units = normalizeUnits(units);
        switch (units) {
        case 'year':
            this.month(0);
        case 'quarter':
        case 'month':
            this.date(1);
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
        case 'hour':
            this.minutes(0);
        case 'minute':
            this.seconds(0);
        case 'second':
            this.milliseconds(0);
        }
        if (units === 'week') {
            this.weekday(0);
        }
        if (units === 'isoWeek') {
            this.isoWeekday(1);
        }
        if (units === 'quarter') {
            this.month(Math.floor(this.month() / 3) * 3);
        }
        return this;
    }
    function endOf(units) {
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond') {
            return this;
        }
        if (units === 'date') {
            units = 'day';
        }
        return this.startOf(units).add(1, units === 'isoWeek' ? 'week' : units).subtract(1, 'ms');
    }
    function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
    }
    function unix() {
        return Math.floor(this.valueOf() / 1000);
    }
    function toDate() {
        return new Date(this.valueOf());
    }
    function toArray() {
        var m = this;
        return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond()
        ];
    }
    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }
    function toJSON() {
        return this.isValid() ? this.toISOString() : null;
    }
    function isValid$2() {
        return isValid(this);
    }
    function parsingFlags() {
        return extend({}, getParsingFlags(this));
    }
    function invalidAt() {
        return getParsingFlags(this).overflow;
    }
    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }
    addFormatToken(0, [
        'gg',
        2
    ], 0, function () {
        return this.weekYear() % 100;
    });
    addFormatToken(0, [
        'GG',
        2
    ], 0, function () {
        return this.isoWeekYear() % 100;
    });
    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [
            token,
            token.length
        ], 0, getter);
    }
    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');
    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');
    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);
    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);
    addWeekParseToken([
        'gggg',
        'ggggg',
        'GGGG',
        'GGGGG'
    ], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });
    addWeekParseToken([
        'gg',
        'GG'
    ], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });
    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }
    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }
    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }
    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }
    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }
    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }
    addFormatToken('Q', 0, 'Qo', 'quarter');
    addUnitAlias('quarter', 'Q');
    addUnitPriority('quarter', 7);
    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });
    function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }
    addFormatToken('D', [
        'DD',
        2
    ], 'Do', 'date');
    addUnitAlias('date', 'D');
    addUnitPriority('date', 9);
    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
    });
    addParseToken([
        'D',
        'DD'
    ], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });
    var getSetDayOfMonth = makeGetSet('Date', true);
    addFormatToken('DDD', [
        'DDDD',
        3
    ], 'DDDo', 'dayOfYear');
    addUnitAlias('dayOfYear', 'DDD');
    addUnitPriority('dayOfYear', 4);
    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken([
        'DDD',
        'DDDD'
    ], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });
    function getSetDayOfYear(input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 86400000) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    }
    addFormatToken('m', [
        'mm',
        2
    ], 0, 'minute');
    addUnitAlias('minute', 'm');
    addUnitPriority('minute', 14);
    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken([
        'm',
        'mm'
    ], MINUTE);
    var getSetMinute = makeGetSet('Minutes', false);
    addFormatToken('s', [
        'ss',
        2
    ], 0, 'second');
    addUnitAlias('second', 's');
    addUnitPriority('second', 15);
    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken([
        's',
        'ss'
    ], SECOND);
    var getSetSecond = makeGetSet('Seconds', false);
    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });
    addFormatToken(0, [
        'SS',
        2
    ], 0, function () {
        return ~~(this.millisecond() / 10);
    });
    addFormatToken(0, [
        'SSS',
        3
    ], 0, 'millisecond');
    addFormatToken(0, [
        'SSSS',
        4
    ], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, [
        'SSSSS',
        5
    ], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, [
        'SSSSSS',
        6
    ], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, [
        'SSSSSSS',
        7
    ], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, [
        'SSSSSSSS',
        8
    ], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, [
        'SSSSSSSSS',
        9
    ], 0, function () {
        return this.millisecond() * 1000000;
    });
    addUnitAlias('millisecond', 'ms');
    addUnitPriority('millisecond', 16);
    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);
    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }
    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }
    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    var getSetMillisecond = makeGetSet('Milliseconds', false);
    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');
    function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
    }
    function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }
    var proto = Moment.prototype;
    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);
    function createUnix(input) {
        return createLocal(input * 1000);
    }
    function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
    }
    function preParsePostFormat(string) {
        return string;
    }
    var proto$1 = Locale.prototype;
    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;
    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;
    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;
    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;
    function get$1(format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }
    function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }
        format = format || '';
        if (index != null) {
            return get$1(format, index, field, 'month');
        }
        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }
    function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }
            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }
            format = format || '';
        }
        var locale = getLocale(), shift = localeSorted ? locale._week.dow : 0;
        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }
        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }
    function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
    }
    function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }
    function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }
    function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }
    function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }
    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (number) {
            var b = number % 10, output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return number + output;
        }
    });
    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
    var mathAbs = Math.abs;
    function abs() {
        var data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);
        return this;
    }
    function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);
        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;
        return duration._bubble();
    }
    function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
    }
    function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
    }
    function absCeil(number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }
    function bubble() {
        var milliseconds = this._milliseconds;
        var days = this._days;
        var months = this._months;
        var data = this._data;
        var seconds, minutes, hours, years, monthsFromDays;
        if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
            milliseconds += absCeil(monthsToDays(months) + days) * 86400000;
            days = 0;
            months = 0;
        }
        data.milliseconds = milliseconds % 1000;
        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;
        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;
        hours = absFloor(minutes / 60);
        data.hours = hours % 24;
        days += absFloor(hours / 24);
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));
        years = absFloor(months / 12);
        months %= 12;
        data.days = days;
        data.months = months;
        data.years = years;
        return this;
    }
    function daysToMonths(days) {
        return days * 4800 / 146097;
    }
    function monthsToDays(months) {
        return months * 146097 / 4800;
    }
    function as(units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;
        units = normalizeUnits(units);
        if (units === 'month' || units === 'year') {
            days = this._days + milliseconds / 86400000;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        } else {
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
            case 'week':
                return days / 7 + milliseconds / 604800000;
            case 'day':
                return days + milliseconds / 86400000;
            case 'hour':
                return days * 24 + milliseconds / 3600000;
            case 'minute':
                return days * 1440 + milliseconds / 60000;
            case 'second':
                return days * 86400 + milliseconds / 1000;
            case 'millisecond':
                return Math.floor(days * 86400000) + milliseconds;
            default:
                throw new Error('Unknown unit ' + units);
            }
        }
    }
    function valueOf$1() {
        if (!this.isValid()) {
            return NaN;
        }
        return this._milliseconds + this._days * 86400000 + this._months % 12 * 2592000000 + toInt(this._months / 12) * 31536000000;
    }
    function makeAs(alias) {
        return function () {
            return this.as(alias);
        };
    }
    var asMilliseconds = makeAs('ms');
    var asSeconds = makeAs('s');
    var asMinutes = makeAs('m');
    var asHours = makeAs('h');
    var asDays = makeAs('d');
    var asWeeks = makeAs('w');
    var asMonths = makeAs('M');
    var asYears = makeAs('y');
    function clone$1() {
        return createDuration(this);
    }
    function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }
    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }
    var milliseconds = makeGetter('milliseconds');
    var seconds = makeGetter('seconds');
    var minutes = makeGetter('minutes');
    var hours = makeGetter('hours');
    var days = makeGetter('days');
    var months = makeGetter('months');
    var years = makeGetter('years');
    function weeks() {
        return absFloor(this.days() / 7);
    }
    var round = Math.round;
    var thresholds = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    };
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }
    function relativeTime$1(posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds = round(duration.as('s'));
        var minutes = round(duration.as('m'));
        var hours = round(duration.as('h'));
        var days = round(duration.as('d'));
        var months = round(duration.as('M'));
        var years = round(duration.as('y'));
        var a = seconds <= thresholds.ss && [
            's',
            seconds
        ] || seconds < thresholds.s && [
            'ss',
            seconds
        ] || minutes <= 1 && ['m'] || minutes < thresholds.m && [
            'mm',
            minutes
        ] || hours <= 1 && ['h'] || hours < thresholds.h && [
            'hh',
            hours
        ] || days <= 1 && ['d'] || days < thresholds.d && [
            'dd',
            days
        ] || months <= 1 && ['M'] || months < thresholds.M && [
            'MM',
            months
        ] || years <= 1 && ['y'] || [
            'yy',
            years
        ];
        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }
    function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof roundingFunction === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }
    function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }
    function humanize(withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }
        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);
        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }
        return locale.postformat(output);
    }
    var abs$1 = Math.abs;
    function sign(x) {
        return (x > 0) - (x < 0) || +x;
    }
    function toISOString$1() {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }
        var seconds = abs$1(this._milliseconds) / 1000;
        var days = abs$1(this._days);
        var months = abs$1(this._months);
        var minutes, hours, years;
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;
        years = absFloor(months / 12);
        months %= 12;
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();
        if (!total) {
            return 'P0D';
        }
        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
        return totalSign + 'P' + (Y ? ymSign + Y + 'Y' : '') + (M ? ymSign + M + 'M' : '') + (D ? daysSign + D + 'D' : '') + (h || m || s ? 'T' : '') + (h ? hmsSign + h + 'H' : '') + (m ? hmsSign + m + 'M' : '') + (s ? hmsSign + s + 'S' : '');
    }
    var proto$2 = Duration.prototype;
    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;
    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;
    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');
    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });
    hooks.version = '2.23.0';
    setHookCallback(createLocal);
    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
        DATE: 'YYYY-MM-DD',
        TIME: 'HH:mm',
        TIME_SECONDS: 'HH:mm:ss',
        TIME_MS: 'HH:mm:ss.SSS',
        WEEK: 'GGGG-[W]WW',
        MONTH: 'YYYY-MM'
    };
    return hooks;
}));
/*pto@1.0.0#models/time-entries*/
define('pto@1.0.0#models/time-entries', [
    'exports',
    'xml-js@1.6.9#dist/xml-js',
    'moment@2.23.0#moment',
    'pto@1.0.0#models/api-info',
    'can-define@2.7.8#map/map',
    'can@5.21.5#enable-can-debug',
    'can-component@4.4.11#can-component'
], function (exports, _xmlJs, _moment, _apiInfo, _map) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _xmlJs2 = _interopRequireDefault(_xmlJs);
    var _moment2 = _interopRequireDefault(_moment);
    var _apiInfo2 = _interopRequireDefault(_apiInfo);
    var _map2 = _interopRequireDefault(_map);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    var TimeEntries = _map2.default.extend('TimeEntries', {
        init: function init(apiInfo) {
            this.apiInfo = apiInfo;
            this.setFirstAndLastDays();
        },
        allTimeOff: {
            get: function get(lastSet, resolve) {
                var _this = this;
                if (lastSet)
                    return lastSet;
                var promised = [];
                this.requestEntries(1, true).then(function (entries) {
                    promised.push(Promise.resolve(entries));
                    var current = 2;
                    var howMany = _this.howManyPages(entries);
                    while (current <= howMany) {
                        promised.push(_this.requestEntries(current, true));
                        current += 1;
                    }
                    Promise.all(promised).then(function (results) {
                        var collected = results.map(function (r) {
                            return _this.collectTimeEntries([], r.response.time_entries.time_entry);
                        });
                        resolve([].concat.apply([], collected));
                    });
                });
            }
        },
        apiInfo: { Type: _apiInfo2.default },
        firstDay: 'string',
        lastDay: 'string',
        collectTimeEntries: function collectTimeEntries(collection, data) {
            var today = (0, _moment2.default)();
            var entries = [].concat(data);
            entries.forEach(function (e) {
                var date = (0, _moment2.default)(e.date._text, 'YYYY-MM-DD');
                if (date.isBefore(today) || date.isSame(today)) {
                    collection.push({
                        date: e.date._text,
                        hours: e.hours._text
                    });
                }
            });
            return collection;
        },
        howManyPages: function howManyPages(entries) {
            return parseInt(entries.response.time_entries._attributes.pages);
        },
        requestBodyFor: function requestBodyFor() {
            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var filterByTask = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return '\n      <?xml version="1.0" encoding="utf-8"?>\n      <request method="time_entry.list">\n        ' + (filterByTask ? '<task_id>48</task_id>' : '') + '\n        <page>' + page + '</page>\n        <per_page>100</per_page>\n      </request>\n    ';
        },
        requestEntries: function requestEntries() {
            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var headers = new window.Headers();
            headers.append('Authorization', 'Basic ' + window.btoa(this.apiInfo.token + ':' + 'X'));
            headers.append('Content-Type', 'application/xml');
            headers.append('X-Requested-With', 'XMLHttpRequest');
            var body = this.requestBodyFor(page, filter);
            var url = 'https://cors-anywhere.herokuapp.com/' + this.apiInfo.url;
            return window.fetch(url, {
                method: 'POST',
                headers: headers,
                body: body
            }).then(function (response) {
                return response.text().then(function (result) {
                    var xmlText = _xmlJs2.default.xml2json(result, { compact: true });
                    return JSON.parse(xmlText);
                });
            });
        },
        selectEntryAt: function selectEntryAt(entries, where) {
            return entries.response.time_entries.time_entry[where];
        },
        setFirstAndLastDays: function setFirstAndLastDays() {
            var _this2 = this;
            return this.requestEntries().then(function (entries) {
                return _this2.requestEntries(_this2.howManyPages(entries)).then(function (earliest) {
                    _this2.lastDay = _this2.selectEntryAt(entries, 0).date._text;
                    var selected = earliest.response.time_entries.time_entry.length - 1;
                    _this2.firstDay = _this2.selectEntryAt(earliest, selected).date._text;
                });
            });
        }
    });
    exports.default = TimeEntries;
});
/*pto@1.0.0#components/dashboard/dashboard.stache!steal-stache@4.1.2#steal-stache*/
define('pto@1.0.0#components/dashboard/dashboard.stache!steal-stache@4.1.2#steal-stache', [
    'module',
    'can-stache',
    'can-stache/src/mustache_core',
    'can-view-import@4.2.1#can-view-import',
    'can-stache-bindings@4.8.0#can-stache-bindings'
], function (module, stache, mustacheCore) {
    var renderer = stache('components/dashboard/dashboard.stache', [
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                1
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                1
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'logout',
                1
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                1
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                1
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n  ',
                1
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'a',
                false,
                2
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'href',
                2
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'href',
                2
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:click',
                2
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'clearAPIToken(scope.event)',
                2
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:click',
                2
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false,
                2
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                'Clear API Token',
                2
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'a',
                2
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
                2
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                3
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
                3
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                4
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                4
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'display-wrapper',
                4
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                4
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                4
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n  ',
                4
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                5
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                5
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'number-wrapper',
                5
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                5
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                5
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n    ',
                5
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                6
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                6
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'hours-container',
                6
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                6
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                6
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                ' ',
                6
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if(remainingHours)',
                6
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n        ',
                6
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'h1',
                false,
                7
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'h1',
                false,
                7
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'remainingHours',
                7
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'h1',
                7
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n      ',
                7
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'else',
                8
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n        ',
                8
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'h1',
                false,
                9
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'h1',
                false,
                9
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '--',
                9
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'h1',
                9
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n      ',
                9
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                10
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n      ',
                10
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'h4',
                false,
                11
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'h4',
                false,
                11
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                'hours available',
                11
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'h4',
                11
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n    ',
                11
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                12
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n    ',
                12
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                13
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                13
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'days-container',
                13
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                13
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                13
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n      ',
                13
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if(remainingHours)',
                14
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n        ',
                14
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'h1',
                false,
                15
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'h1',
                false,
                15
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'remainingDays',
                15
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'h1',
                15
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n      ',
                15
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'else',
                16
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n        ',
                16
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'h1',
                false,
                17
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'h1',
                false,
                17
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '--',
                17
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'h1',
                17
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n      ',
                17
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                18
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n      ',
                18
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'h4',
                false,
                20
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'h4',
                false,
                20
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                'days available',
                20
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'h4',
                20
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n    ',
                20
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                21
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n  ',
                21
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                22
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
                22
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                23
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
                23
            ]
        },
        {
            'tokenType': 'done',
            'args': [24]
        }
    ]);
    return function (scope, options, nodeList) {
        var moduleOptions = Object.assign({}, options);
        if (moduleOptions.helpers) {
            moduleOptions.helpers = Object.assign({ module: module }, moduleOptions.helpers);
        } else {
            moduleOptions.module = module;
        }
        return renderer(scope, moduleOptions, nodeList);
    };
});
/*pto@1.0.0#components/dashboard/dashboard*/
define('pto@1.0.0#components/dashboard/dashboard', [
    'lodash@4.17.11#lodash',
    'pto@1.0.0#models/api-info',
    'pto@1.0.0#models/time-entries',
    'pto@1.0.0#components/dashboard/dashboard.stache!steal-stache@4.1.2#steal-stache',
    'can-component@4.4.11#can-component',
    'can@5.21.5#enable-can-debug',
    'can-debug@2.0.5#can-debug',
    'can-namespace@1.0.0#can-namespace',
    'can-globals@1.2.1#can-globals',
    'can-globals@1.2.1#can-globals-instance',
    'can-globals@1.2.1#can-globals-proto',
    'can-reflect@1.17.9#can-reflect',
    'can-reflect@1.17.9#reflections/call/call',
    'can-symbol@1.6.4#can-symbol',
    'can-reflect@1.17.9#reflections/type/type',
    'can-reflect@1.17.9#reflections/helpers',
    'can-reflect@1.17.9#reflections/get-set/get-set',
    'can-reflect@1.17.9#reflections/observe/observe',
    'can-reflect@1.17.9#reflections/shape/shape',
    'can-reflect@1.17.9#reflections/shape/schema/schema',
    'can-reflect@1.17.9#reflections/get-name/get-name',
    'can-reflect@1.17.9#types/map',
    'can-reflect@1.17.9#types/set',
    'can-globals@1.2.1#global/global',
    'can-globals@1.2.1#document/document',
    'can-globals@1.2.1#location/location',
    'can-globals@1.2.1#mutation-observer/mutation-observer',
    'can-globals@1.2.1#is-browser-window/is-browser-window',
    'can-globals@1.2.1#is-node/is-node',
    'can-globals@1.2.1#custom-elements/custom-elements',
    'can-debug@2.0.5#src/proxy-namespace',
    'can-debug@2.0.5#src/temporarily-bind',
    'can-debug@2.0.5#src/get-graph/get-graph',
    'can-debug@2.0.5#src/graph/graph',
    'can-assign@1.3.1#can-assign',
    'can-debug@2.0.5#src/get-graph/make-node',
    'can-reflect-dependencies@1.1.1#can-reflect-dependencies',
    'can-reflect-dependencies@1.1.1#src/add-mutated-by',
    'can-reflect-dependencies@1.1.1#src/delete-mutated-by',
    'can-reflect-dependencies@1.1.1#src/get-dependency-data-of',
    'can-reflect-dependencies@1.1.1#src/is-function',
    'can-debug@2.0.5#src/format-graph/format-graph',
    'can-debug@2.0.5#src/what-i-change/what-i-change',
    'can-debug@2.0.5#src/log-data/log-data',
    'can-debug@2.0.5#src/get-data/get-data',
    'can-debug@2.0.5#src/label-cycles/label-cycles',
    'can-debug@2.0.5#src/what-changes-me/what-changes-me',
    'can-debug@2.0.5#src/get-what-i-change/get-what-i-change',
    'can-debug@2.0.5#src/get-what-changes-me/get-what-changes-me',
    'can-queues@1.2.1#can-queues',
    'can-log@1.0.0#dev/dev',
    'can-log@1.0.0#can-log',
    'can-queues@1.2.1#queue',
    'can-queues@1.2.1#queue-state',
    'can-queues@1.2.1#priority-queue',
    'can-queues@1.2.1#completion-queue',
    'can-diff@1.4.4#merge-deep/merge-deep',
    'can-diff@1.4.4#list/list',
    'can-define@2.7.8#map/map',
    'can-construct@3.5.4#can-construct',
    'can-string@1.0.0#can-string',
    'can-define@2.7.8#can-define',
    'can-observation@4.1.2#can-observation',
    'can-observation-recorder@1.3.0#can-observation-recorder',
    'can-event-queue@1.1.4#value/value',
    'can-key-tree@1.2.0#can-key-tree',
    'can-define-lazy-value@1.1.0#define-lazy-value',
    'can-event-queue@1.1.4#dependency-record/merge',
    'can-observation@4.1.2#recorder-dependency-helpers',
    'can-observation@4.1.2#temporarily-bind',
    'can-simple-observable@2.4.1#async/async',
    'can-simple-observable@2.4.1#can-simple-observable',
    'can-simple-observable@2.4.1#log',
    'can-simple-observable@2.4.1#settable/settable',
    'can-simple-observable@2.4.1#resolver/resolver',
    'can-event-queue@1.1.4#map/map',
    'can-dom-events@1.3.3#can-dom-events',
    'can-dom-events@1.3.3#helpers/util',
    'can-dom-events@1.3.3#helpers/make-event-registry',
    'can-dom-events@1.3.3#helpers/-make-delegate-event-tree',
    'can-event-queue@1.1.4#type/type',
    'can-string-to-any@1.2.0#can-string-to-any',
    'can-data-types@1.2.0#maybe-boolean/maybe-boolean',
    'can-data-types@1.2.0#maybe-date/maybe-date',
    'can-data-types@1.2.0#maybe-number/maybe-number',
    'can-data-types@1.2.0#maybe-string/maybe-string',
    'can-define@2.7.8#define-helpers/define-helpers',
    'can-define@2.7.8#ensure-meta',
    'can-component@4.4.11#control/control',
    'can-control@4.4.1#can-control',
    'can-stache-key@1.4.0#can-stache-key',
    'can-reflect-promise@2.2.0#can-reflect-promise',
    'can-key@1.2.0#get/get',
    'can-key@1.2.0#utils',
    'can-dom-mutate@1.3.6#can-dom-mutate',
    'can-dom-mutate@1.3.6#-util',
    'can-bind@1.3.0#can-bind',
    'can-stache@4.17.5#can-stache',
    'can-view-parser@4.1.2#can-view-parser',
    'can-attribute-encoder@1.1.2#can-attribute-encoder',
    'can-view-callbacks@4.3.6#can-view-callbacks',
    'can-dom-mutate@1.3.6#node',
    'can-dom-mutate@1.3.6#node/node',
    'can-view-nodelist@4.3.3#can-view-nodelist',
    'can-fragment@1.3.0#can-fragment',
    'can-child-nodes@1.2.0#can-child-nodes',
    'can-stache@4.17.5#src/html_section',
    'can-view-target@4.1.2#can-view-target',
    'can-stache@4.17.5#src/utils',
    'can-view-scope@4.13.0#can-view-scope',
    'can-view-scope@4.13.0#template-context',
    'can-simple-map@4.3.0#can-simple-map',
    'can-view-scope@4.13.0#compute_data',
    'can-view-scope@4.13.0#scope-key-data',
    'can-view-scope@4.13.0#make-compute-like',
    'can-single-reference@1.2.0#can-single-reference',
    'can-cid@1.3.0#can-cid',
    'can-stache-helpers@1.2.0#can-stache-helpers',
    'can-stache@4.17.5#src/key-observable',
    'can-stache@4.17.5#src/text_section',
    'can-view-live@4.2.7#can-view-live',
    'can-view-live@4.2.7#lib/core',
    'can-view-live@4.2.7#lib/attr',
    'can-attribute-observable@1.2.1#behaviors',
    'can-dom-data-state@1.0.5#can-dom-data-state',
    'can-view-live@4.2.7#lib/attrs',
    'can-view-live@4.2.7#lib/html',
    'can-view-live@4.2.7#lib/list',
    'can-view-live@4.2.7#lib/set-observable',
    'can-diff@1.4.4#patcher/patcher',
    'can-view-live@4.2.7#lib/text',
    'can-stache@4.17.5#src/mustache_core',
    'can-stache@4.17.5#src/expression',
    'can-stache@4.17.5#expressions/arg',
    'can-stache@4.17.5#expressions/literal',
    'can-stache@4.17.5#expressions/hashes',
    'can-stache@4.17.5#src/expression-helpers',
    'can-simple-observable@2.4.1#setter/setter',
    'can-stache@4.17.5#expressions/bracket',
    'can-stache@4.17.5#expressions/call',
    'can-stache@4.17.5#src/set-identifier',
    'can-stache@4.17.5#expressions/helper',
    'can-stache@4.17.5#expressions/lookup',
    'can-stache@4.17.5#helpers/core',
    'can-globals@1.2.1#base-url/base-url',
    'can-join-uris@1.2.0#can-join-uris',
    'can-parse-uri@1.2.0#can-parse-uri',
    'can-stache@4.17.5#helpers/-debugger',
    'can-stache@4.17.5#src/truthy-observable',
    'can-stache@4.17.5#helpers/converter',
    'can-dom-data@1.0.1#can-dom-data',
    'can-stache@4.17.5#helpers/-for-of',
    'can-stache@4.17.5#helpers/-let',
    'can-stache@4.17.5#helpers/-portal',
    'can-stache-ast@1.1.0#can-stache-ast',
    'can-stache-ast@1.1.0#controls',
    'can-import-module@1.2.0#can-import-module',
    'can-stache-bindings@4.8.0#can-stache-bindings',
    'can-view-model@4.0.1#can-view-model',
    'can-attribute-observable@1.2.1#can-attribute-observable',
    'can-attribute-observable@1.2.1#event',
    'can-attribute-observable@1.2.1#get-event-name',
    'can-event-dom-radiochange@2.2.0#can-event-dom-radiochange',
    'can-define@2.7.8#list/list',
    'xml-js@1.6.9#dist/xml-js',
    'moment@2.23.0#moment',
    'can-view-import@4.2.1#can-view-import'
], function (_lodash, _apiInfo, _timeEntries, _dashboardStacheStealStache, _canComponent) {
    'use strict';
    var _lodash2 = _interopRequireDefault(_lodash);
    var _apiInfo2 = _interopRequireDefault(_apiInfo);
    var _timeEntries2 = _interopRequireDefault(_timeEntries);
    var _dashboardStacheStealStache2 = _interopRequireDefault(_dashboardStacheStealStache);
    var _canComponent2 = _interopRequireDefault(_canComponent);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    _canComponent2.default.extend({
        tag: 'bitovian-pto-dashboard',
        view: _dashboardStacheStealStache2.default,
        ViewModel: {
            apiInfo: { Type: _apiInfo2.default },
            get remainingDays() {
                var hours = this.remainingHours;
                return hours < 8 ? 0 : (hours / 8).toFixed(1);
            },
            get remainingHours() {
                var accrued = this.totalAccruedByYear;
                var used = this.totalUsedByYear;
                if (accrued && used) {
                    var result = Object.values(_lodash2.default.mergeWith(accrued, used, function (a, u) {
                        return a - u;
                    })).reduce(function (acc, v) {
                        return acc + v;
                    });
                    return result.toFixed(1);
                }
                return 0;
            },
            get totalAccruedByYear() {
                var firstDay = this.timeEntries.firstDay;
                var lastDay = this.timeEntries.lastDay;
                return this.totalAccruedHoursByYear(firstDay, lastDay);
            },
            timeEntries: {
                get: function get(lastSet) {
                    if (lastSet)
                        return lastSet;
                    return new _timeEntries2.default(this.apiInfo);
                }
            },
            get totalUsedByYear() {
                return this.totalUsedHoursByYear(this.timeEntries.allTimeOff);
            },
            clearAPIToken: function clearAPIToken(ev) {
                ev.preventDefault();
                this.apiInfo.token = undefined;
            },
            hoursPerMonth: function hoursPerMonth(anniversary) {
                var HOURS_PER_MONTH = [
                    13.333,
                    13.333,
                    13.333,
                    15.333,
                    15.333,
                    17.333
                ];
                var last = HOURS_PER_MONTH.length - 1;
                return anniversary >= HOURS_PER_MONTH.length ? HOURS_PER_MONTH[last] : HOURS_PER_MONTH[anniversary];
            },
            totalAccruedHoursByYear: function totalAccruedHoursByYear(firstDay, lastDay) {
                if (!firstDay || !lastDay)
                    return undefined;
                var firstMonth = parseInt(firstDay.split('-')[1]);
                var firstYear = parseInt(firstDay.split('-')[0]);
                var today = new Date();
                var lastMonth = today.getMonth();
                var lastYear = today.getFullYear();
                var accruedByYear = {};
                var anniversary = 0;
                accruedByYear['' + firstYear] = 0;
                for (var m = firstMonth, y = firstYear; m <= 12; m++) {
                    accruedByYear['' + y] += this.hoursPerMonth(anniversary);
                }
                for (var _y = firstYear + 1; _y <= lastYear - 1; _y++) {
                    anniversary += 1;
                    accruedByYear['' + _y] = 0;
                    for (var _m = 1; _m <= 12; _m++) {
                        accruedByYear['' + _y] += this.hoursPerMonth(anniversary);
                    }
                }
                anniversary += 1;
                accruedByYear['' + lastYear] = 0;
                for (var _m2 = 1, _y2 = lastYear; _m2 <= lastMonth; _m2++) {
                    accruedByYear['' + _y2] += this.hoursPerMonth(anniversary);
                }
                return accruedByYear;
            },
            totalUsedHoursByYear: function totalUsedHoursByYear(used) {
                if (!used)
                    return undefined;
                var total = {};
                var entries = _lodash2.default.groupBy(used, function (e) {
                    return e.date.split('-')[0];
                });
                Object.keys(entries).forEach(function (k) {
                    total[k] = entries[k].reduce(function (acc, e) {
                        return acc + parseFloat(e.hours);
                    }, 0);
                });
                return total;
            }
        }
    });
});
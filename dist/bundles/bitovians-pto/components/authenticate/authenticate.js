/*bitovians-pto@1.0.0#components/authenticate/authenticate.stache!steal-stache@4.1.5#steal-stache*/
define('bitovians-pto@1.0.0#components/authenticate/authenticate.stache!steal-stache@4.1.5#steal-stache', [
    'module',
    'can-assign',
    'can-stache',
    'can-stache/src/mustache_core',
    'can-view-import@4.2.2#can-view-import',
    'can-stache-bindings@4.10.9#can-stache-bindings'
], function (module, assign, stache, mustacheCore) {
    var renderer = stache('components/authenticate/authenticate.stache', [
        {
            'tokenType': 'start',
            'args': [
                'h1',
                false,
                1
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'h1',
                false,
                1
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                'Bitovi PTO Available',
                1
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'h1',
                1
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
                1
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                2
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                2
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'first-step form-wrapper',
                2
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                2
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                2
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n  ',
                2
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'form',
                false,
                3
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'form',
                false,
                3
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n    ',
                3
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'label',
                false,
                4
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'for',
                4
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'token',
                4
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'for',
                4
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#unless(validToken)',
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
                'invalid-token',
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
            'tokenType': 'special',
            'args': [
                '/if',
                4
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'label',
                false,
                4
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n      ',
                4
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if(validToken)',
                5
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n        Freshbooks Authentication Token\n      ',
                5
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'else',
                7
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n        ',
                7
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'i',
                false,
                8
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                8
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'fas fa-exclamation-triangle',
                8
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                8
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'i',
                false,
                8
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'i',
                8
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n        Double-check your Authentication Token\n      ',
                8
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
                '\n    ',
                10
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'label',
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
            'tokenType': 'start',
            'args': [
                'input',
                true,
                12
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'type',
                12
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'text',
                12
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'type',
                12
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'id',
                12
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'token',
                12
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'id',
                12
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'value:to',
                12
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'token',
                12
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'value:to',
                12
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'input',
                true,
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
                'button',
                false,
                13
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:click',
                13
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'authenticate(scope.event)',
                13
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:click',
                13
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'button',
                false,
                13
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n      Authenticate\n    ',
                13
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'button',
                15
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n    ',
                15
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'small',
                false,
                16
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'small',
                false,
                16
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n      ',
                16
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'i',
                false,
                17
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                17
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'far fa-question-circle',
                17
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                17
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'i',
                false,
                17
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'i',
                17
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n      To find your Authentication Token, log into\n      ',
                17
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'a',
                false,
                19
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'href',
                19
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'https://bitovi.freshbooks.com/',
                19
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'href',
                19
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false,
                19
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                'Freshbooks',
                19
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'a',
                19
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                ', go to \'Profile\'\n      and scroll to the bottom of that page.\n    ',
                19
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'small',
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
                'form',
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
            'tokenType': 'done',
            'args': [23]
        }
    ]);
    return function (scope, options, nodeList) {
        var moduleOptions = assign({}, options);
        if (moduleOptions.helpers) {
            moduleOptions.helpers = assign({ module: module }, moduleOptions.helpers);
        } else {
            moduleOptions.module = module;
        }
        return renderer(scope, moduleOptions, nodeList);
    };
});
/*bitovians-pto@1.0.0#components/authenticate/authenticate*/
define('bitovians-pto@1.0.0#components/authenticate/authenticate', [
    'bitovians-pto@1.0.0#models/api-info',
    'bitovians-pto@1.0.0#components/authenticate/authenticate.stache!steal-stache@4.1.5#steal-stache',
    'can-component@4.6.2#can-component',
    'can@5.33.3#enable-can-debug',
    'can-debug@2.0.7#can-debug',
    'can-namespace@1.0.0#can-namespace',
    'can-globals@1.2.2#can-globals',
    'can-globals@1.2.2#can-globals-instance',
    'can-globals@1.2.2#can-globals-proto',
    'can-reflect@1.18.0#can-reflect',
    'can-reflect@1.18.0#reflections/call/call',
    'can-symbol@1.6.5#can-symbol',
    'can-reflect@1.18.0#reflections/type/type',
    'can-reflect@1.18.0#reflections/helpers',
    'can-reflect@1.18.0#reflections/get-set/get-set',
    'can-reflect@1.18.0#reflections/observe/observe',
    'can-reflect@1.18.0#reflections/shape/shape',
    'can-reflect@1.18.0#reflections/shape/schema/schema',
    'can-reflect@1.18.0#reflections/get-name/get-name',
    'can-reflect@1.18.0#types/map',
    'can-reflect@1.18.0#types/set',
    'can-globals@1.2.2#global/global',
    'can-globals@1.2.2#document/document',
    'can-globals@1.2.2#location/location',
    'can-globals@1.2.2#mutation-observer/mutation-observer',
    'can-globals@1.2.2#is-browser-window/is-browser-window',
    'can-globals@1.2.2#is-node/is-node',
    'can-globals@1.2.2#custom-elements/custom-elements',
    'can-debug@2.0.7#src/proxy-namespace',
    'can-debug@2.0.7#src/temporarily-bind',
    'can-debug@2.0.7#src/get-graph/get-graph',
    'can-debug@2.0.7#src/graph/graph',
    'can-assign@1.3.3#can-assign',
    'can-debug@2.0.7#src/get-graph/make-node',
    'can-reflect-dependencies@1.1.2#can-reflect-dependencies',
    'can-reflect-dependencies@1.1.2#src/add-mutated-by',
    'can-reflect-dependencies@1.1.2#src/delete-mutated-by',
    'can-reflect-dependencies@1.1.2#src/get-dependency-data-of',
    'can-reflect-dependencies@1.1.2#src/is-function',
    'can-debug@2.0.7#src/format-graph/format-graph',
    'can-debug@2.0.7#src/what-i-change/what-i-change',
    'can-debug@2.0.7#src/log-data/log-data',
    'can-debug@2.0.7#src/get-data/get-data',
    'can-debug@2.0.7#src/label-cycles/label-cycles',
    'can-debug@2.0.7#src/what-changes-me/what-changes-me',
    'can-debug@2.0.7#src/get-what-i-change/get-what-i-change',
    'can-debug@2.0.7#src/get-what-changes-me/get-what-changes-me',
    'can-observation@4.2.0#can-observation',
    'can-queues@1.3.1#can-queues',
    'can-log@1.0.2#dev/dev',
    'can-log@1.0.2#can-log',
    'can-queues@1.3.1#queue',
    'can-queues@1.3.1#queue-state',
    'can-queues@1.3.1#priority-queue',
    'can-queues@1.3.1#completion-queue',
    'can-queues@1.3.1#dom-order-queue',
    'can-queues@1.3.1#sorted-index-by',
    'can-queues@1.3.1#element-sort',
    'can-observation-recorder@1.3.1#can-observation-recorder',
    'can-event-queue@1.1.7#value/value',
    'can-key-tree@1.2.2#can-key-tree',
    'can-define-lazy-value@1.1.1#define-lazy-value',
    'can-event-queue@1.1.7#dependency-record/merge',
    'can-observation@4.2.0#recorder-dependency-helpers',
    'can-observation@4.2.0#temporarily-bind',
    'can-diff@1.5.0#merge-deep/merge-deep',
    'can-diff@1.5.0#list/list',
    'can-define@2.8.0#map/map',
    'can-construct@3.5.6#can-construct',
    'can-string@1.1.0#can-string',
    'can-define@2.8.0#can-define',
    'can-simple-observable@2.5.0#async/async',
    'can-simple-observable@2.5.0#can-simple-observable',
    'can-simple-observable@2.5.0#log',
    'can-simple-observable@2.5.0#settable/settable',
    'can-simple-observable@2.5.0#resolver/resolver',
    'can-event-queue@1.1.7#map/map',
    'can-dom-events@1.3.11#can-dom-events',
    'can-dom-events@1.3.11#helpers/util',
    'can-dom-events@1.3.11#helpers/make-event-registry',
    'can-dom-events@1.3.11#helpers/-make-delegate-event-tree',
    'can-event-queue@1.1.7#type/type',
    'can-string-to-any@1.2.1#can-string-to-any',
    'can-data-types@1.2.1#maybe-boolean/maybe-boolean',
    'can-data-types@1.2.1#maybe-date/maybe-date',
    'can-data-types@1.2.1#maybe-number/maybe-number',
    'can-data-types@1.2.1#maybe-string/maybe-string',
    'can-define@2.8.0#define-helpers/define-helpers',
    'can-define@2.8.0#ensure-meta',
    'can-bind@1.5.1#can-bind',
    'can-stache@4.17.21#can-stache',
    'can-view-parser@4.1.3#can-view-parser',
    'can-attribute-encoder@1.1.4#can-attribute-encoder',
    'can-view-callbacks@4.4.1#can-view-callbacks',
    'can-dom-mutate@1.3.11#can-dom-mutate',
    'can-dom-mutate@1.3.11#-util',
    'can-dom-mutate@1.3.11#node',
    'can-dom-mutate@1.3.11#node/node',
    'can-view-nodelist@4.3.4#can-view-nodelist',
    'can-fragment@1.3.1#can-fragment',
    'can-child-nodes@1.2.1#can-child-nodes',
    'can-stache@4.17.21#src/html_section',
    'can-view-target@4.1.6#can-view-target',
    'can-stache@4.17.21#src/utils',
    'can-view-scope@4.13.6#can-view-scope',
    'can-stache-key@1.4.3#can-stache-key',
    'can-reflect-promise@2.2.1#can-reflect-promise',
    'can-view-scope@4.13.6#template-context',
    'can-simple-map@4.3.2#can-simple-map',
    'can-view-scope@4.13.6#compute_data',
    'can-view-scope@4.13.6#scope-key-data',
    'can-view-scope@4.13.6#make-compute-like',
    'can-single-reference@1.3.0#can-single-reference',
    'can-cid@1.3.1#can-cid',
    'can-stache-helpers@1.2.0#can-stache-helpers',
    'can-view-scope@4.13.6#let-context',
    'can-stache@4.17.21#src/key-observable',
    'can-stache@4.17.21#src/text_section',
    'can-view-live@4.2.8#can-view-live',
    'can-view-live@4.2.8#lib/core',
    'can-view-live@4.2.8#lib/attr',
    'can-attribute-observable@1.2.7#behaviors',
    'can-dom-data@1.0.3#can-dom-data',
    'can-view-live@4.2.8#lib/attrs',
    'can-view-live@4.2.8#lib/html',
    'can-view-live@4.2.8#lib/list',
    'can-view-live@4.2.8#lib/set-observable',
    'can-diff@1.5.0#patcher/patcher',
    'can-view-live@4.2.8#lib/text',
    'can-stache@4.17.21#src/mustache_core',
    'can-stache@4.17.21#src/expression',
    'can-stache@4.17.21#expressions/arg',
    'can-stache@4.17.21#expressions/literal',
    'can-stache@4.17.21#expressions/hashes',
    'can-stache@4.17.21#src/expression-helpers',
    'can-simple-observable@2.5.0#setter/setter',
    'can-stache@4.17.21#expressions/bracket',
    'can-stache@4.17.21#expressions/call',
    'can-stache@4.17.21#src/set-identifier',
    'can-stache@4.17.21#expressions/helper',
    'can-stache@4.17.21#expressions/lookup',
    'can-stache@4.17.21#helpers/core',
    'can-globals@1.2.2#base-url/base-url',
    'can-join-uris@1.2.0#can-join-uris',
    'can-parse-uri@1.2.2#can-parse-uri',
    'can-stache@4.17.21#helpers/-debugger',
    'can-stache@4.17.21#src/truthy-observable',
    'can-stache@4.17.21#helpers/converter',
    'can-stache@4.17.21#helpers/-for-of',
    'can-stache@4.17.21#helpers/-let',
    'can-stache@4.17.21#helpers/-portal',
    'can-stache-ast@1.1.0#can-stache-ast',
    'can-stache-ast@1.1.0#controls',
    'can-import-module@1.2.0#can-import-module',
    'can-stache-bindings@4.10.9#can-stache-bindings',
    'can-view-model@4.0.3#can-view-model',
    'can-attribute-observable@1.2.7#can-attribute-observable',
    'can-attribute-observable@1.2.7#event',
    'can-attribute-observable@1.2.7#get-event-name',
    'can-event-dom-radiochange@2.2.1#can-event-dom-radiochange',
    'can-component@4.6.2#control/control',
    'can-control@4.4.3#can-control',
    'can-key@1.2.1#get/get',
    'can-key@1.2.1#utils',
    'can-define@2.8.0#list/list',
    'can-view-import@4.2.2#can-view-import'
], function (_apiInfo, _authenticateStacheStealStache, _canComponent) {
    'use strict';
    var _apiInfo2 = _interopRequireDefault(_apiInfo);
    var _authenticateStacheStealStache2 = _interopRequireDefault(_authenticateStacheStealStache);
    var _canComponent2 = _interopRequireDefault(_canComponent);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    _canComponent2.default.extend({
        tag: 'pto-authenticate',
        view: _authenticateStacheStealStache2.default,
        ViewModel: {
            apiInfo: { Type: _apiInfo2.default },
            validToken: {
                default: true,
                type: 'boolean'
            },
            token: {
                get: function get(lastSetValue) {
                    if (lastSetValue)
                        return lastSetValue;
                    return this.apiInfo.token;
                }
            },
            authenticate: function authenticate(ev) {
                ev.preventDefault();
                if (this.apiInfo.isValidToken(this.token)) {
                    this.validToken = true;
                    this.apiInfo.token = this.token;
                } else {
                    this.validToken = false;
                    document.querySelector('input#token').select();
                }
            }
        }
    });
});
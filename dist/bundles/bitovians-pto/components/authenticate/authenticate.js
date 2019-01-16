/*bitovians-pto@1.0.0#components/authenticate/authenticate.stache!steal-stache@4.1.2#steal-stache*/
define('bitovians-pto@1.0.0#components/authenticate/authenticate.stache!steal-stache@4.1.2#steal-stache', [
    'module',
    'can-stache',
    'can-stache/src/mustache_core',
    'can-view-import@4.2.1#can-view-import',
    'can-stache-bindings@4.8.0#can-stache-bindings'
], function (module, stache, mustacheCore) {
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
                '\n        Freshbooks API Token\n      ',
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
                '\n        Double-check your API Token\n      ',
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
                'value:bind',
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
                'value:bind',
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
                '\n      To find your API Token, log into Freshbooks, go to \'Profile\'\n      and scroll to the bottom of that page.\n    ',
                17
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'small',
                20
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n  ',
                20
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'form',
                21
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
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
            'tokenType': 'done',
            'args': [22]
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
/*bitovians-pto@1.0.0#components/authenticate/authenticate*/
define('bitovians-pto@1.0.0#components/authenticate/authenticate', [
    'bitovians-pto@1.0.0#models/api-info',
    'bitovians-pto@1.0.0#components/authenticate/authenticate.stache!steal-stache@4.1.2#steal-stache',
    'can-component@4.4.11#can-component',
    'can@5.21.6#enable-can-debug',
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
    'can-define@2.7.9#map/map',
    'can-construct@3.5.4#can-construct',
    'can-string@1.0.0#can-string',
    'can-define@2.7.9#can-define',
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
    'can-define@2.7.9#define-helpers/define-helpers',
    'can-define@2.7.9#ensure-meta',
    'can-component@4.4.11#control/control',
    'can-control@4.4.1#can-control',
    'can-stache-key@1.4.0#can-stache-key',
    'can-reflect-promise@2.2.0#can-reflect-promise',
    'can-key@1.2.0#get/get',
    'can-key@1.2.0#utils',
    'can-dom-mutate@1.3.6#can-dom-mutate',
    'can-dom-mutate@1.3.6#-util',
    'can-bind@1.3.0#can-bind',
    'can-stache@4.17.6#can-stache',
    'can-view-parser@4.1.2#can-view-parser',
    'can-attribute-encoder@1.1.2#can-attribute-encoder',
    'can-view-callbacks@4.3.6#can-view-callbacks',
    'can-dom-mutate@1.3.6#node',
    'can-dom-mutate@1.3.6#node/node',
    'can-view-nodelist@4.3.3#can-view-nodelist',
    'can-fragment@1.3.0#can-fragment',
    'can-child-nodes@1.2.0#can-child-nodes',
    'can-stache@4.17.6#src/html_section',
    'can-view-target@4.1.2#can-view-target',
    'can-stache@4.17.6#src/utils',
    'can-view-scope@4.13.0#can-view-scope',
    'can-view-scope@4.13.0#template-context',
    'can-simple-map@4.3.0#can-simple-map',
    'can-view-scope@4.13.0#compute_data',
    'can-view-scope@4.13.0#scope-key-data',
    'can-view-scope@4.13.0#make-compute-like',
    'can-single-reference@1.2.0#can-single-reference',
    'can-cid@1.3.0#can-cid',
    'can-stache-helpers@1.2.0#can-stache-helpers',
    'can-stache@4.17.6#src/key-observable',
    'can-stache@4.17.6#src/text_section',
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
    'can-stache@4.17.6#src/mustache_core',
    'can-stache@4.17.6#src/expression',
    'can-stache@4.17.6#expressions/arg',
    'can-stache@4.17.6#expressions/literal',
    'can-stache@4.17.6#expressions/hashes',
    'can-stache@4.17.6#src/expression-helpers',
    'can-simple-observable@2.4.1#setter/setter',
    'can-stache@4.17.6#expressions/bracket',
    'can-stache@4.17.6#expressions/call',
    'can-stache@4.17.6#src/set-identifier',
    'can-stache@4.17.6#expressions/helper',
    'can-stache@4.17.6#expressions/lookup',
    'can-stache@4.17.6#helpers/core',
    'can-globals@1.2.1#base-url/base-url',
    'can-join-uris@1.2.0#can-join-uris',
    'can-parse-uri@1.2.0#can-parse-uri',
    'can-stache@4.17.6#helpers/-debugger',
    'can-stache@4.17.6#src/truthy-observable',
    'can-stache@4.17.6#helpers/converter',
    'can-dom-data@1.0.1#can-dom-data',
    'can-stache@4.17.6#helpers/-for-of',
    'can-stache@4.17.6#helpers/-let',
    'can-stache@4.17.6#helpers/-portal',
    'can-stache-ast@1.1.0#can-stache-ast',
    'can-stache-ast@1.1.0#controls',
    'can-import-module@1.2.0#can-import-module',
    'can-stache-bindings@4.8.0#can-stache-bindings',
    'can-view-model@4.0.1#can-view-model',
    'can-attribute-observable@1.2.1#can-attribute-observable',
    'can-attribute-observable@1.2.1#event',
    'can-attribute-observable@1.2.1#get-event-name',
    'can-event-dom-radiochange@2.2.0#can-event-dom-radiochange',
    'can-define@2.7.9#list/list',
    'can-view-import@4.2.1#can-view-import'
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
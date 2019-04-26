(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ngrx/router-store'), require('@angular/platform-browser'), require('@angular/forms'), require('@angular/router'), require('i18next-xhr-backend'), require('i18next'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@angular/common/http'), require('@ngrx/store'), require('@ngrx/effects'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@spartacus/core', ['exports', '@ngrx/router-store', '@angular/platform-browser', '@angular/forms', '@angular/router', 'i18next-xhr-backend', 'i18next', 'rxjs', 'rxjs/operators', '@angular/common', '@angular/common/http', '@ngrx/store', '@ngrx/effects', '@angular/core'], factory) :
    (factory((global.spartacus = global.spartacus || {}, global.spartacus.core = {}),global.fromNgrxRouter,global.ng.platformBrowser,global.ng.forms,global.ng.router,global.i18nextXhrBackend,global.i18next,global.rxjs,global.rxjs.operators,global.ng.common,global.ng.common.http,global.store,global.effects,global.ng.core));
}(this, (function (exports,fromNgrxRouter,platformBrowser,forms,router,i18nextXhrBackend,i18next,rxjs,operators,i1,i1$1,i1$2,effects,i0) { 'use strict';

    i18nextXhrBackend = i18nextXhrBackend && i18nextXhrBackend.hasOwnProperty('default') ? i18nextXhrBackend['default'] : i18nextXhrBackend;
    i18next = i18next && i18next.hasOwnProperty('default') ? i18next['default'] : i18next;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ ServerConfig = /** @class */ (function () {
        function ServerConfig() {
        }
        return ServerConfig;
    }());
    /** @type {?} */
    var defaultServerConfig = {};

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} item
     * @return {?}
     */
    function isObject(item) {
        return item && typeof item === 'object' && !Array.isArray(item);
    }
    /**
     * @param {?=} target
     * @param {...?} sources
     * @return {?}
     */
    function deepMerge(target) {
        if (target === void 0) {
            target = {};
        }
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        var _a, _b;
        if (!sources.length) {
            return target;
        }
        /** @type {?} */
        var source = sources.shift() || {};
        if (isObject(target) && isObject(source)) {
            for (var key in source) {
                if (isObject(source[key])) {
                    if (!target[key]) {
                        Object.assign(target, (_a = {}, _a[key] = {}, _a));
                    }
                    deepMerge(target[key], source[key]);
                }
                else {
                    Object.assign(target, (_b = {}, _b[key] = source[key], _b));
                }
            }
        }
        return deepMerge.apply(void 0, __spread([target], sources));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ConfigValidatorToken = new i0.InjectionToken('ConfigurationValidator');
    /**
     * Use to probide config validation at app bootstrap (when all config chunks are merged)
     *
     * @param {?} configValidator
     * @return {?}
     */
    function provideConfigValidator(configValidator) {
        return {
            provide: ConfigValidatorToken,
            useValue: configValidator,
            multi: true,
        };
    }
    /**
     * @param {?} config
     * @param {?} configValidators
     * @return {?}
     */
    function validateConfig(config, configValidators) {
        var e_1, _a;
        try {
            for (var configValidators_1 = __values(configValidators), configValidators_1_1 = configValidators_1.next(); !configValidators_1_1.done; configValidators_1_1 = configValidators_1.next()) {
                var validate = configValidators_1_1.value;
                /** @type {?} */
                var warning = validate(config);
                if (warning) {
                    console.warn(warning);
                }
            }
        }
        catch (e_1_1) {
            e_1 = { error: e_1_1 };
        }
        finally {
            try {
                if (configValidators_1_1 && !configValidators_1_1.done && (_a = configValidators_1.return))
                    _a.call(configValidators_1);
            }
            finally {
                if (e_1)
                    throw e_1.error;
            }
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Global Configuration injection token, can be used to inject configuration to any part of the app
     * @type {?}
     */
    var Config = new i0.InjectionToken('Configuration');
    /**
     * Config chunk token, can be used to provide configuration chunk and contribute to the global configuration object.
     * Should not be used directly, use `provideConfig` or import `ConfigModule.withConfig` instead.
     * @type {?}
     */
    var ConfigChunk = new i0.InjectionToken('ConfigurationChunk');
    /**
     * Helper function to provide configuration chunk using ConfigChunk token
     *
     * @param {?=} config Config object to merge with the global configuration
     * @return {?}
     */
    function provideConfig(config) {
        if (config === void 0) {
            config = {};
        }
        return { provide: ConfigChunk, useValue: config, multi: true };
    }
    /**
     * Helper function to provide configuration with factory function, using ConfigChunk token
     *
     * @param {?} configFactory Factory Function that will generate config object
     * @param {?=} deps Optional dependencies to a factory function
     * @return {?}
     */
    function provideConfigFactory(configFactory, deps) {
        return {
            provide: ConfigChunk,
            useFactory: configFactory,
            multi: true,
            deps: deps,
        };
    }
    /**
     * Factory function that merges all configurations chunks. Should not be used directly without explicit reason.
     *
     * @param {?} configChunks
     * @param {?} configValidators
     * @return {?}
     */
    function configurationFactory(configChunks, configValidators) {
        /** @type {?} */
        var config = deepMerge.apply(void 0, __spread([{}], configChunks));
        if (!config.production) {
            validateConfig(config, configValidators || []);
        }
        return config;
    }
    var ConfigModule = /** @class */ (function () {
        function ConfigModule() {
        }
        /**
         * Import ConfigModule and contribute config to the global configuration
         *
         * @param config Config object to merge with the global configuration
         */
        /**
         * Import ConfigModule and contribute config to the global configuration
         *
         * @param {?} config Config object to merge with the global configuration
         * @return {?}
         */
        ConfigModule.withConfig = /**
         * Import ConfigModule and contribute config to the global configuration
         *
         * @param {?} config Config object to merge with the global configuration
         * @return {?}
         */
            function (config) {
                return {
                    ngModule: ConfigModule,
                    providers: [provideConfig(config)],
                };
            };
        /**
         * Import ConfigModule and contribute config to the global configuration using factory function
         *
         * @param configFactory Factory function that will generate configuration
         * @param deps Optional dependencies to factory function
         */
        /**
         * Import ConfigModule and contribute config to the global configuration using factory function
         *
         * @param {?} configFactory Factory function that will generate configuration
         * @param {?=} deps Optional dependencies to factory function
         * @return {?}
         */
        ConfigModule.withConfigFactory = /**
         * Import ConfigModule and contribute config to the global configuration using factory function
         *
         * @param {?} configFactory Factory function that will generate configuration
         * @param {?=} deps Optional dependencies to factory function
         * @return {?}
         */
            function (configFactory, deps) {
                return {
                    ngModule: ConfigModule,
                    providers: [provideConfigFactory(configFactory, deps)],
                };
            };
        /**
         * Module with providers, should be imported only once, if possible, at the root of the app.
         *
         * @param config
         */
        /**
         * Module with providers, should be imported only once, if possible, at the root of the app.
         *
         * @param {?=} config
         * @return {?}
         */
        ConfigModule.forRoot = /**
         * Module with providers, should be imported only once, if possible, at the root of the app.
         *
         * @param {?=} config
         * @return {?}
         */
            function (config) {
                if (config === void 0) {
                    config = {};
                }
                return {
                    ngModule: ConfigModule,
                    providers: [
                        { provide: ServerConfig, useExisting: Config },
                        provideConfig(defaultServerConfig),
                        provideConfig(config),
                        {
                            provide: Config,
                            useFactory: configurationFactory,
                            deps: [ConfigChunk, [new i0.Optional(), ConfigValidatorToken]],
                        },
                    ],
                };
            };
        ConfigModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [i1.CommonModule],
                        declarations: [],
                    },] }
        ];
        return ConfigModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var GO = '[Router] Go';
    /** @type {?} */
    var GO_BY_URL = '[Router] Go By Url';
    /** @type {?} */
    var BACK = '[Router] Back';
    /** @type {?} */
    var FORWARD = '[Router] Forward';
    /** @type {?} */
    var SAVE_REDIRECT_URL = '[Router] Save Redirect Url';
    /** @type {?} */
    var CLEAR_REDIRECT_URL = '[Router] Clear Redirect Url';
    var Go = /** @class */ (function () {
        function Go(payload) {
            this.payload = payload;
            this.type = GO;
        }
        return Go;
    }());
    var GoByUrl = /** @class */ (function () {
        function GoByUrl(payload) {
            this.payload = payload;
            this.type = GO_BY_URL;
        }
        return GoByUrl;
    }());
    var Back = /** @class */ (function () {
        function Back() {
            this.type = BACK;
        }
        return Back;
    }());
    var Forward = /** @class */ (function () {
        function Forward() {
            this.type = FORWARD;
        }
        return Forward;
    }());
    var SaveRedirectUrl = /** @class */ (function () {
        function SaveRedirectUrl(payload) {
            this.payload = payload;
            this.type = SAVE_REDIRECT_URL;
        }
        return SaveRedirectUrl;
    }());
    var ClearRedirectUrl = /** @class */ (function () {
        function ClearRedirectUrl() {
            this.type = CLEAR_REDIRECT_URL;
        }
        return ClearRedirectUrl;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ROUTING_FEATURE = 'router';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var PriceType = {
        BUY: 'BUY',
        FROM: 'FROM',
    };
    /** @enum {string} */
    var ImageType = {
        PRIMARY: 'PRIMARY',
        GALLERY: 'GALLERY',
    };
    /** @enum {string} */
    var Fields = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields1 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields2 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields3 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields4 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields5 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields6 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var PageType = {
        CONTENT_PAGE: 'ContentPage',
        PRODUCT_PAGE: 'ProductPage',
        CATEGORY_PAGE: 'CategoryPage',
        CATALOG_PAGE: 'CatalogPage',
    };
    /** @enum {string} */
    var Fields7 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields8 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields9 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields10 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields11 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields12 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields13 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields14 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields15 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields16 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var SortEnum = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields17 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields18 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields19 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields20 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields21 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields22 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields23 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields24 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields25 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields26 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields27 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields28 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields29 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields30 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields31 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields32 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields33 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields34 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields35 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields36 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields37 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields38 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields39 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields40 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields41 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields42 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields43 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields44 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields45 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields46 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields47 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields48 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields49 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields50 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields51 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields52 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields53 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields54 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields55 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields56 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields57 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields58 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields59 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields60 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Fields61 = {
        BASIC: 'BASIC',
        DEFAULT: 'DEFAULT',
        FULL: 'FULL',
    };
    /** @enum {string} */
    var Type = {
        All: 'all',
        Product: 'product',
        Order: 'order',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState = {
        redirectUrl: '',
        navigationId: 0,
        state: {
            url: '',
            queryParams: {},
            params: {},
            context: {
                id: '',
            },
            cmsRequired: false,
        },
    };
    /**
     * @return {?}
     */
    function getReducers() {
        return {
            router: reducer,
        };
    }
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer(state, action) {
        if (state === void 0) {
            state = initialState;
        }
        switch (action.type) {
            case SAVE_REDIRECT_URL: {
                return __assign({}, state, { redirectUrl: action.payload });
            }
            case CLEAR_REDIRECT_URL: {
                return __assign({}, state, { redirectUrl: '' });
            }
            case fromNgrxRouter.ROUTER_NAVIGATION:
            case fromNgrxRouter.ROUTER_ERROR:
            case fromNgrxRouter.ROUTER_CANCEL: {
                /** @type {?} */
                var currentUrl = action.payload.routerState
                    ? action.payload.routerState.url
                    : '';
                /** @type {?} */
                var contextId = action.payload.routerState
                    ? action.payload.routerState.context.id
                    : '';
                /** @type {?} */
                var redirectUrl = void 0;
                if (contextId === 'login' ||
                    contextId === 'register' ||
                    currentUrl === state.redirectUrl) {
                    redirectUrl = state.redirectUrl;
                }
                else {
                    redirectUrl = '';
                }
                return {
                    redirectUrl: redirectUrl,
                    state: action.payload.routerState,
                    navigationId: action.payload.event.id,
                };
            }
            default: {
                return state;
            }
        }
    }
    /** @type {?} */
    var reducerToken = new i0.InjectionToken('RouterReducers');
    /** @type {?} */
    var reducerProvider = {
        provide: reducerToken,
        useFactory: getReducers,
    };
    /** @type {?} */
    var getRouterFeatureState = i1$2.createFeatureSelector(ROUTING_FEATURE);
    /** @type {?} */
    var getRouterState = i1$2.createSelector(getRouterFeatureState, function (state) { return state[ROUTING_FEATURE]; });
    /** @type {?} */
    var getPageContext = i1$2.createSelector(getRouterState, function (routingState) { return routingState.state.context; });
    /** @type {?} */
    var getRedirectUrl = i1$2.createSelector(getRouterState, function (state) { return state.redirectUrl; });
    /* The serializer is there to parse the RouterStateSnapshot,
    and to reduce the amount of properties to be passed to the reducer.
     */
    var /* The serializer is there to parse the RouterStateSnapshot,
    and to reduce the amount of properties to be passed to the reducer.
     */ CustomSerializer = /** @class */ (function () {
        function CustomSerializer() {
        }
        /**
         * @param {?} routerState
         * @return {?}
         */
        CustomSerializer.prototype.serialize = /**
         * @param {?} routerState
         * @return {?}
         */
            function (routerState) {
                var url = routerState.url;
                var queryParams = routerState.root.queryParams;
                /** @type {?} */
                var state = ( /** @type {?} */(routerState.root));
                /** @type {?} */
                var cmsRequired = false;
                /** @type {?} */
                var context;
                while (state.firstChild) {
                    state = ( /** @type {?} */(state.firstChild));
                    // we use context information embedded in Cms driven routes from any parent route
                    if (state.data && state.data.cxCmsRouteContext) {
                        context = state.data.cxCmsRouteContext;
                    }
                    // we assume, that any route that has CmsPageGuard or it's child
                    // is cmsRequired
                    if (!cmsRequired &&
                        (context ||
                            (state.routeConfig &&
                                state.routeConfig.canActivate &&
                                state.routeConfig.canActivate.find(function (x) { return x && x.guardName === 'CmsPageGuard'; })))) {
                        cmsRequired = true;
                    }
                }
                var params = state.params;
                // we give smartedit preview page a PageContext
                if (state.url.length > 0 && state.url[0].path === 'cx-preview') {
                    context = {
                        id: 'smartedit-preview',
                        type: PageType.CONTENT_PAGE,
                    };
                }
                else {
                    if (params['productCode']) {
                        context = { id: params['productCode'], type: PageType.PRODUCT_PAGE };
                    }
                    else if (params['categoryCode']) {
                        context = { id: params['categoryCode'], type: PageType.CATEGORY_PAGE };
                    }
                    else if (params['brandCode']) {
                        context = { id: params['brandCode'], type: PageType.CATEGORY_PAGE };
                    }
                    else if (params['query']) {
                        context = { id: 'search', type: PageType.CONTENT_PAGE };
                    }
                    else if (state.data.pageLabel !== undefined) {
                        context = { id: state.data.pageLabel, type: PageType.CONTENT_PAGE };
                    }
                    else if (!context) {
                        if (state.url.length > 0) {
                            /** @type {?} */
                            var pageLabel = '/' + state.url.map(function (urlSegment) { return urlSegment.path; }).join('/');
                            context = {
                                id: pageLabel,
                                type: PageType.CONTENT_PAGE,
                            };
                        }
                        else {
                            context = {
                                id: 'homepage',
                                type: PageType.CONTENT_PAGE,
                            };
                        }
                    }
                }
                return { url: url, queryParams: queryParams, params: params, context: context, cmsRequired: cmsRequired };
            };
        return CustomSerializer;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOGIN = '[Auth] Login';
    /** @type {?} */
    var LOGOUT = '[Auth] Logout';
    var Login = /** @class */ (function () {
        function Login() {
            this.type = LOGIN;
        }
        return Login;
    }());
    var Logout = /** @class */ (function () {
        function Logout() {
            this.type = LOGOUT;
        }
        return Logout;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOAD_LANGUAGES = '[Site-context] Load Languages';
    /** @type {?} */
    var LOAD_LANGUAGES_FAIL = '[Site-context] Load Languages Fail';
    /** @type {?} */
    var LOAD_LANGUAGES_SUCCESS = '[Site-context] Load Languages Success';
    /** @type {?} */
    var SET_ACTIVE_LANGUAGE = '[Site-context] Set Active Language';
    /** @type {?} */
    var LANGUAGE_CHANGE = '[Site-context] Language Change';
    var LoadLanguages = /** @class */ (function () {
        function LoadLanguages() {
            this.type = LOAD_LANGUAGES;
        }
        return LoadLanguages;
    }());
    var LoadLanguagesFail = /** @class */ (function () {
        function LoadLanguagesFail(payload) {
            this.payload = payload;
            this.type = LOAD_LANGUAGES_FAIL;
        }
        return LoadLanguagesFail;
    }());
    var LoadLanguagesSuccess = /** @class */ (function () {
        function LoadLanguagesSuccess(payload) {
            this.payload = payload;
            this.type = LOAD_LANGUAGES_SUCCESS;
        }
        return LoadLanguagesSuccess;
    }());
    var SetActiveLanguage = /** @class */ (function () {
        function SetActiveLanguage(payload) {
            this.payload = payload;
            this.type = SET_ACTIVE_LANGUAGE;
        }
        return SetActiveLanguage;
    }());
    var LanguageChange = /** @class */ (function () {
        function LanguageChange() {
            this.type = LANGUAGE_CHANGE;
        }
        return LanguageChange;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RouterEffects = /** @class */ (function () {
        function RouterEffects(actions$, router$$1, location) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router$$1;
            this.location = location;
            this.navigate$ = this.actions$.pipe(effects.ofType(GO), operators.map(function (action) { return action.payload; }), operators.tap(function (_a) {
                var path = _a.path, queryParams = _a.query, extras = _a.extras;
                _this.router.navigate(path, __assign({ queryParams: queryParams }, extras));
            }));
            this.navigateBuUrl$ = this.actions$.pipe(effects.ofType(GO_BY_URL), operators.map(function (action) { return action.payload; }), operators.tap(function (url) {
                _this.router.navigateByUrl(url);
            }));
            this.clearCmsRoutes$ = this.actions$.pipe(effects.ofType(LANGUAGE_CHANGE, LOGOUT, LOGIN), operators.tap(function (_) {
                /** @type {?} */
                var filteredConfig = _this.router.config.filter(function (route) { return !(route.data && route.data.cxCmsRouteContext); });
                if (filteredConfig.length !== _this.router.config.length) {
                    _this.router.resetConfig(filteredConfig);
                }
            }));
            this.navigateBack$ = this.actions$.pipe(effects.ofType(BACK), operators.tap(function () { return _this.location.back(); }));
            this.navigateForward$ = this.actions$.pipe(effects.ofType(FORWARD), operators.tap(function () { return _this.location.forward(); }));
        }
        RouterEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        RouterEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: router.Router },
                { type: i1.Location }
            ];
        };
        __decorate([
            effects.Effect({ dispatch: false }),
            __metadata("design:type", rxjs.Observable)
        ], RouterEffects.prototype, "navigate$", void 0);
        __decorate([
            effects.Effect({ dispatch: false }),
            __metadata("design:type", rxjs.Observable)
        ], RouterEffects.prototype, "navigateBuUrl$", void 0);
        __decorate([
            effects.Effect({ dispatch: false }),
            __metadata("design:type", rxjs.Observable)
        ], RouterEffects.prototype, "clearCmsRoutes$", void 0);
        __decorate([
            effects.Effect({ dispatch: false }),
            __metadata("design:type", rxjs.Observable)
        ], RouterEffects.prototype, "navigateBack$", void 0);
        __decorate([
            effects.Effect({ dispatch: false }),
            __metadata("design:type", rxjs.Observable)
        ], RouterEffects.prototype, "navigateForward$", void 0);
        return RouterEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var effects$1 = [RouterEffects];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WindowRef = /** @class */ (function () {
        function WindowRef(document) {
            // it's a workaround to have document property properly typed
            // see: https://github.com/angular/angular/issues/15640
            this.document = document;
        }
        Object.defineProperty(WindowRef.prototype, "nativeWindow", {
            get: /**
             * @return {?}
             */ function () {
                return typeof window !== 'undefined' ? window : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowRef.prototype, "sessionStorage", {
            get: /**
             * @return {?}
             */ function () {
                return this.nativeWindow ? this.nativeWindow.sessionStorage : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowRef.prototype, "localStorage", {
            get: /**
             * @return {?}
             */ function () {
                return this.nativeWindow ? this.nativeWindow.localStorage : undefined;
            },
            enumerable: true,
            configurable: true
        });
        WindowRef.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        WindowRef.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] }
            ];
        };
        /** @nocollapse */ WindowRef.ngInjectableDef = i0.defineInjectable({ factory: function WindowRef_Factory() { return new WindowRef(i0.inject(i1.DOCUMENT)); }, token: WindowRef, providedIn: "root" });
        return WindowRef;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ ConfigurableRoutesConfig = /** @class */ (function () {
        function ConfigurableRoutesConfig() {
        }
        return ConfigurableRoutesConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ OccConfig = /** @class */ (function (_super) {
        __extends(OccConfig, _super);
        function OccConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return OccConfig;
    }(ServerConfig));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ENDPOINT_ROUTES_CONFIG = 'routes-config';
    var RoutesConfigLoader = /** @class */ (function () {
        function RoutesConfigLoader(http, serverConfig, configurableRoutesConfig) {
            this.http = http;
            this.serverConfig = serverConfig;
            this.configurableRoutesConfig = configurableRoutesConfig;
        }
        Object.defineProperty(RoutesConfigLoader.prototype, "routesConfig", {
            get: /**
             * @return {?}
             */ function () {
                return this._routesConfig;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RoutesConfigLoader.prototype, "endpoint", {
            get: /**
             * @return {?}
             */ function () {
                return ((this.serverConfig.backend.occ.baseUrl || '') +
                    '/' +
                    ENDPOINT_ROUTES_CONFIG);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        RoutesConfigLoader.prototype.load = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var shouldFetch, fetchedRoutesConfig, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                shouldFetch = this.configurableRoutesConfig.routesConfig.fetch;
                                if (!shouldFetch)
                                    return [3 /*break*/, 2];
                                return [4 /*yield*/, this.fetch(this.endpoint)];
                            case 1:
                                _a = _b.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                _a = null;
                                _b.label = 3;
                            case 3:
                                fetchedRoutesConfig = _a;
                                this._routesConfig = this.extendStaticWith(fetchedRoutesConfig);
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} url
         * @return {?}
         */
        RoutesConfigLoader.prototype.fetch = /**
         * @private
         * @param {?} url
         * @return {?}
         */
            function (url) {
                return this.http
                    .get(url)
                    .pipe(operators.retry(2))
                    .toPromise()
                    .catch(function () {
                    throw new Error("Could not get routes configuration from url " + url + "!");
                });
            };
        /**
         * @private
         * @param {?} routesConfig
         * @return {?}
         */
        RoutesConfigLoader.prototype.extendStaticWith = /**
         * @private
         * @param {?} routesConfig
         * @return {?}
         */
            function (routesConfig) {
                /** @type {?} */
                var mergedRoutesConfig = deepMerge({}, this.configurableRoutesConfig.routesConfig, routesConfig);
                return this.extendLanguagesTranslationsWithDefault(mergedRoutesConfig);
            };
        /**
         * @private
         * @param {?} routesConfig
         * @return {?}
         */
        RoutesConfigLoader.prototype.extendLanguagesTranslationsWithDefault = /**
         * @private
         * @param {?} routesConfig
         * @return {?}
         */
            function (routesConfig) {
                /** @type {?} */
                var defaultTranslations = routesConfig.translations.default;
                Object.keys(routesConfig.translations).forEach(function (languageCode) {
                    /** @type {?} */
                    var languageTranslations = routesConfig.translations[languageCode];
                    routesConfig.translations[languageCode] = deepMerge({}, defaultTranslations, languageTranslations);
                });
                return routesConfig;
            };
        RoutesConfigLoader.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        RoutesConfigLoader.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: OccConfig },
                { type: ConfigurableRoutesConfig }
            ];
        };
        return RoutesConfigLoader;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UrlMatcherFactoryService = /** @class */ (function () {
        function UrlMatcherFactoryService() {
        }
        /**
         * @return {?}
         */
        UrlMatcherFactoryService.prototype.getFalsyUrlMatcher = /**
         * @return {?}
         */
            function () {
                return function falsyUrlMatcher() {
                    return null;
                };
            };
        /**
         * @param {?} paths
         * @return {?}
         */
        UrlMatcherFactoryService.prototype.getMultiplePathsUrlMatcher = /**
         * @param {?} paths
         * @return {?}
         */
            function (paths) {
                /** @type {?} */
                var self = this;
                /** @type {?} */
                var matcher = function multiplePathsUrlMatcher(segments, segmentGroup, route) {
                    for (var i = 0; i < paths.length; i++) {
                        /** @type {?} */
                        var result = self.getPathUrlMatcher(paths[i])(segments, segmentGroup, route);
                        if (result) {
                            return result;
                        }
                    }
                    return null;
                };
                matcher.paths = paths; // property added for easier debugging of routes
                return matcher;
            };
        // Similar to Angular's defaultUrlMatcher. The difference is that `path` comes from function's argument, not from `route.path`
        // Similar to Angular's defaultUrlMatcher. The difference is that `path` comes from function's argument, not from `route.path`
        /**
         * @private
         * @param {?=} path
         * @return {?}
         */
        UrlMatcherFactoryService.prototype.getPathUrlMatcher =
            // Similar to Angular's defaultUrlMatcher. The difference is that `path` comes from function's argument, not from `route.path`
            /**
             * @private
             * @param {?=} path
             * @return {?}
             */
            function (path) {
                if (path === void 0) {
                    path = '';
                }
                return function (segments, segmentGroup, route) {
                    /** @type {?} */
                    var parts = path.split('/');
                    if (parts.length > segments.length) {
                        // The actual URL is shorter than the config, no match
                        return null;
                    }
                    if (route.pathMatch === 'full' &&
                        (segmentGroup.hasChildren() || parts.length < segments.length)) {
                        // The config is longer than the actual URL but we are looking for a full match, return null
                        return null;
                    }
                    /** @type {?} */
                    var posParams = {};
                    // Check each config part against the actual URL
                    for (var index = 0; index < parts.length; index++) {
                        /** @type {?} */
                        var part = parts[index];
                        /** @type {?} */
                        var segment = segments[index];
                        /** @type {?} */
                        var isParameter = part.startsWith(':');
                        if (isParameter) {
                            posParams[part.substring(1)] = segment;
                        }
                        else if (part !== segment.path) {
                            // The actual URL part does not match the config, no match
                            return null;
                        }
                    }
                    return { consumed: segments.slice(0, parts.length), posParams: posParams };
                };
            };
        UrlMatcherFactoryService.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ UrlMatcherFactoryService.ngInjectableDef = i0.defineInjectable({ factory: function UrlMatcherFactoryService_Factory() { return new UrlMatcherFactoryService(); }, token: UrlMatcherFactoryService, providedIn: "root" });
        return UrlMatcherFactoryService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConfigurableRoutesService = /** @class */ (function () {
        function ConfigurableRoutesService(config, injector, routesConfigLoader, urlMatcherFactory) {
            this.config = config;
            this.injector = injector;
            this.routesConfigLoader = routesConfigLoader;
            this.urlMatcherFactory = urlMatcherFactory;
            this.currentLanguageCode = 'en'; // TODO: hardcoded! should be removed when more languages are supported by localized routes
            this.initCalled = false; // guard not to call init() more than once
        }
        Object.defineProperty(ConfigurableRoutesService.prototype, "currentRoutesTranslations", {
            get: /**
             * @private
             * @return {?}
             */ function () {
                return ( /** @type {?} */(this.allRoutesTranslations[this.currentLanguageCode]));
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Initializes service with given translations and translates all existing Routes in the Router.
         */
        // guard not to call init() more than once
        /**
         * Initializes service with given translations and translates all existing Routes in the Router.
         * @return {?}
         */
        ConfigurableRoutesService.prototype.init =
            // guard not to call init() more than once
            /**
             * Initializes service with given translations and translates all existing Routes in the Router.
             * @return {?}
             */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!!this.initCalled)
                                    return [3 /*break*/, 2];
                                this.initCalled = true;
                                return [4 /*yield*/, this.routesConfigLoader.load()];
                            case 1:
                                _a.sent();
                                this.allRoutesTranslations = this.routesConfigLoader.routesConfig.translations;
                                this.translateRouterConfig();
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @return {?}
         */
        ConfigurableRoutesService.prototype.translateRouterConfig = /**
         * @private
         * @return {?}
         */
            function () {
                // Router could not be injected in constructor due to cyclic dependency with APP_INITIALIZER:
                /** @type {?} */
                var router$$1 = this.injector.get(router.Router);
                /** @type {?} */
                var translatedRoutes = this.translateRoutes(router$$1.config, this.currentRoutesTranslations);
                router$$1.resetConfig(translatedRoutes);
            };
        /**
         * @param {?} routeName
         * @return {?}
         */
        ConfigurableRoutesService.prototype.getRouteTranslation = /**
         * @param {?} routeName
         * @return {?}
         */
            function (routeName) {
                /** @type {?} */
                var routesTranslations = this.currentRoutesTranslations;
                /** @type {?} */
                var result = routesTranslations && routesTranslations[routeName];
                if (!routesTranslations || result === undefined) {
                    this.warn("No route translation was configured for page '" + routeName + "' in language '" + this.currentLanguageCode + "'!");
                }
                return result;
            };
        /**
         * @private
         * @param {?} routes
         * @param {?} routesTranslations
         * @return {?}
         */
        ConfigurableRoutesService.prototype.translateRoutes = /**
         * @private
         * @param {?} routes
         * @param {?} routesTranslations
         * @return {?}
         */
            function (routes, routesTranslations) {
                var _this = this;
                /** @type {?} */
                var result = [];
                routes.forEach(function (route) {
                    /** @type {?} */
                    var translatedRoute = _this.translateRoute(route, routesTranslations);
                    if (route.children && route.children.length) {
                        /** @type {?} */
                        var translatedChildrenRoutes = _this.translateRoutes(route.children, routesTranslations);
                        translatedRoute.children = translatedChildrenRoutes;
                    }
                    result.push(translatedRoute);
                });
                return result;
            };
        /**
         * @private
         * @param {?} route
         * @param {?} routesTranslations
         * @return {?}
         */
        ConfigurableRoutesService.prototype.translateRoute = /**
         * @private
         * @param {?} route
         * @param {?} routesTranslations
         * @return {?}
         */
            function (route, routesTranslations) {
                if (this.isConfigurable(route, 'cxPath')) {
                    // we assume that 'path' and 'redirectTo' cannot be both configured for one route
                    if (this.isConfigurable(route, 'cxRedirectTo')) {
                        this.warn("A path should not have set both \"cxPath\" and \"cxRedirectTo\" properties! Route: '" + route);
                    }
                    return this.translateRoutePath(route, routesTranslations);
                }
                if (this.isConfigurable(route, 'cxRedirectTo')) {
                    return this.translateRouteRedirectTo(route, routesTranslations);
                }
                return route; // if nothing is configurable, just pass the original route
            };
        /**
         * @private
         * @param {?} route
         * @param {?} key
         * @return {?}
         */
        ConfigurableRoutesService.prototype.isConfigurable = /**
         * @private
         * @param {?} route
         * @param {?} key
         * @return {?}
         */
            function (route, key) {
                return !!this.getConfigurable(route, key);
            };
        /**
         * @private
         * @param {?} route
         * @param {?} key
         * @return {?}
         */
        ConfigurableRoutesService.prototype.getConfigurable = /**
         * @private
         * @param {?} route
         * @param {?} key
         * @return {?}
         */
            function (route, key) {
                return route.data && route.data[key];
            };
        /**
         * @private
         * @param {?} route
         * @param {?} routesTranslations
         * @return {?}
         */
        ConfigurableRoutesService.prototype.translateRoutePath = /**
         * @private
         * @param {?} route
         * @param {?} routesTranslations
         * @return {?}
         */
            function (route, routesTranslations) {
                /** @type {?} */
                var paths = this.getTranslatedPaths(route, 'cxPath', routesTranslations);
                switch (paths.length) {
                    case 0:
                        delete route.path;
                        return __assign({}, route, { matcher: this.urlMatcherFactory.getFalsyUrlMatcher() });
                    case 1:
                        delete route.matcher;
                        return __assign({}, route, { path: paths[0] });
                    default:
                        delete route.path;
                        return __assign({}, route, { matcher: this.urlMatcherFactory.getMultiplePathsUrlMatcher(paths) });
                }
            };
        /**
         * @private
         * @param {?} route
         * @param {?} translations
         * @return {?}
         */
        ConfigurableRoutesService.prototype.translateRouteRedirectTo = /**
         * @private
         * @param {?} route
         * @param {?} translations
         * @return {?}
         */
            function (route, translations) {
                /** @type {?} */
                var translatedPaths = this.getTranslatedPaths(route, 'cxRedirectTo', translations);
                return translatedPaths.length
                    ? __assign({}, route, { redirectTo: translatedPaths[0] }) : route;
            };
        /**
         * @private
         * @param {?} route
         * @param {?} key
         * @param {?} routesTranslations
         * @return {?}
         */
        ConfigurableRoutesService.prototype.getTranslatedPaths = /**
         * @private
         * @param {?} route
         * @param {?} key
         * @param {?} routesTranslations
         * @return {?}
         */
            function (route, key, routesTranslations) {
                /** @type {?} */
                var routeName = this.getConfigurable(route, key);
                /** @type {?} */
                var translation = this.getRouteTranslation(routeName);
                if (translation === undefined) {
                    this.warn("Could not translate key '" + key + "' of route '" + routeName + "'", route, "due to undefined key '" + routeName + "' in routes translations", routesTranslations);
                    return [];
                }
                if (translation && translation.paths === undefined) {
                    this.warn("Could not translate key '" + key + "' of route '" + routeName + "'", route, "due to undefined 'paths' key for '" + routeName + "' route in routes translations", routesTranslations);
                    return [];
                }
                // translation or translation.paths can be null - which means switching off the route
                return (translation && translation.paths) || [];
            };
        /**
         * @private
         * @param {...?} args
         * @return {?}
         */
        ConfigurableRoutesService.prototype.warn = /**
         * @private
         * @param {...?} args
         * @return {?}
         */
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (!this.config.production) {
                    console.warn.apply(console, __spread(args));
                }
            };
        ConfigurableRoutesService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ConfigurableRoutesService.ctorParameters = function () {
            return [
                { type: ServerConfig },
                { type: i0.Injector },
                { type: RoutesConfigLoader },
                { type: UrlMatcherFactoryService }
            ];
        };
        return ConfigurableRoutesService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UrlParsingService = /** @class */ (function () {
        function UrlParsingService(router$$1) {
            this.router = router$$1;
        }
        /**
         * @param {?} url
         * @return {?}
         */
        UrlParsingService.prototype.getPrimarySegments = /**
         * @param {?} url
         * @return {?}
         */
            function (url) {
                /** @type {?} */
                var urlTree = this.router.parseUrl(url);
                return this._getPrimarySegmentsFromUrlTree(urlTree.root);
            };
        /**
         * @private
         * @param {?} tree
         * @return {?}
         */
        UrlParsingService.prototype._getPrimarySegmentsFromUrlTree = /**
         * @private
         * @param {?} tree
         * @return {?}
         */
            function (tree) {
                /** @type {?} */
                var segments = tree.segments.map(function (s) { return s.path; });
                /** @type {?} */
                var childrenSegments = tree.children[router.PRIMARY_OUTLET]
                    ? this._getPrimarySegmentsFromUrlTree(tree.children[router.PRIMARY_OUTLET])
                    : [];
                return segments.concat(childrenSegments);
            };
        UrlParsingService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        UrlParsingService.ctorParameters = function () {
            return [
                { type: router.Router }
            ];
        };
        return UrlParsingService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var isParam = function (segment) { return segment.startsWith(':'); };
    /** @type {?} */
    var getParamName = function (segment) { return segment.slice(1); };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UrlTranslationService = /** @class */ (function () {
        function UrlTranslationService(configurableRoutesService, urlParser, config) {
            this.configurableRoutesService = configurableRoutesService;
            this.urlParser = urlParser;
            this.config = config;
            this.ROOT_URL = ['/'];
        }
        /**
         * @param {?} commands
         * @param {?=} options
         * @return {?}
         */
        UrlTranslationService.prototype.translate = /**
         * @param {?} commands
         * @param {?=} options
         * @return {?}
         */
            function (commands, options) {
                if (options === void 0) {
                    options = {};
                }
                var e_1, _a;
                if (!Array.isArray(commands)) {
                    commands = [commands];
                }
                /** @type {?} */
                var result = [];
                try {
                    for (var commands_1 = __values(commands), commands_1_1 = commands_1.next(); !commands_1_1.done; commands_1_1 = commands_1.next()) {
                        var command = commands_1_1.value;
                        if (!command || !command.route) {
                            // don't modify segment that is not route command:
                            result.push(command);
                        }
                        else {
                            // generate array with url segments for given options object:
                            /** @type {?} */
                            var partialResult = this.generateUrl(command);
                            if (partialResult === null) {
                                return this.ROOT_URL;
                            }
                            result.push.apply(result, __spread(partialResult));
                        }
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (commands_1_1 && !commands_1_1.done && (_a = commands_1.return))
                            _a.call(commands_1);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                if (!options.relative) {
                    result.unshift(''); // ensure absolute path ( leading '' in path array is equivalent to leading '/' in string)
                }
                return result;
            };
        /**
         * @private
         * @param {?} command
         * @return {?}
         */
        UrlTranslationService.prototype.generateUrl = /**
         * @private
         * @param {?} command
         * @return {?}
         */
            function (command) {
                this.standarizeRouteCommand(command);
                if (!command.route) {
                    return null;
                }
                /** @type {?} */
                var routeTranslation = this.configurableRoutesService.getRouteTranslation(command.route);
                // if no route translation was configured, return null:
                if (!routeTranslation || !routeTranslation.paths) {
                    return null;
                }
                // find first path that can satisfy it's parameters with given parameters
                /** @type {?} */
                var path = this.findPathWithFillableParams(routeTranslation, command.params);
                // if there is no configured path that can be satisfied with given params, return null
                if (!path) {
                    return null;
                }
                /** @type {?} */
                var result = this.provideParamsValues(path, command.params, routeTranslation.paramsMapping);
                return result;
            };
        /**
         * @private
         * @param {?} command
         * @return {?}
         */
        UrlTranslationService.prototype.standarizeRouteCommand = /**
         * @private
         * @param {?} command
         * @return {?}
         */
            function (command) {
                command.params = command.params || {};
            };
        /**
         * @private
         * @param {?} path
         * @param {?} params
         * @param {?} paramsMapping
         * @return {?}
         */
        UrlTranslationService.prototype.provideParamsValues = /**
         * @private
         * @param {?} path
         * @param {?} params
         * @param {?} paramsMapping
         * @return {?}
         */
            function (path, params, paramsMapping) {
                var _this = this;
                return this.urlParser.getPrimarySegments(path).map(function (segment) {
                    if (isParam(segment)) {
                        /** @type {?} */
                        var paramName = getParamName(segment);
                        /** @type {?} */
                        var mappedParamName = _this.getMappedParamName(paramName, paramsMapping);
                        return params[mappedParamName];
                    }
                    return segment;
                });
            };
        /**
         * @private
         * @param {?} routeTranslation
         * @param {?} params
         * @return {?}
         */
        UrlTranslationService.prototype.findPathWithFillableParams = /**
         * @private
         * @param {?} routeTranslation
         * @param {?} params
         * @return {?}
         */
            function (routeTranslation, params) {
                var _this = this;
                /** @type {?} */
                var foundPath = routeTranslation.paths.find(function (path) {
                    return _this.getParams(path).every(function (paramName) {
                        /** @type {?} */
                        var mappedParamName = _this.getMappedParamName(paramName, routeTranslation.paramsMapping);
                        return params[mappedParamName] !== undefined;
                    });
                });
                if (foundPath === undefined || foundPath === null) {
                    this.warn("No configured path matches all its params to given object. ", "Route translation: ", routeTranslation, "Params object: ", params);
                    return null;
                }
                return foundPath;
            };
        /**
         * @private
         * @param {?} path
         * @return {?}
         */
        UrlTranslationService.prototype.getParams = /**
         * @private
         * @param {?} path
         * @return {?}
         */
            function (path) {
                return this.urlParser
                    .getPrimarySegments(path)
                    .filter(isParam)
                    .map(getParamName);
            };
        /**
         * @private
         * @param {?} paramName
         * @param {?} paramsMapping
         * @return {?}
         */
        UrlTranslationService.prototype.getMappedParamName = /**
         * @private
         * @param {?} paramName
         * @param {?} paramsMapping
         * @return {?}
         */
            function (paramName, paramsMapping) {
                if (paramsMapping) {
                    return paramsMapping[paramName] || paramName;
                }
                return paramName;
            };
        /**
         * @private
         * @param {...?} args
         * @return {?}
         */
        UrlTranslationService.prototype.warn = /**
         * @private
         * @param {...?} args
         * @return {?}
         */
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (!this.config.production) {
                    console.warn.apply(console, __spread(args));
                }
            };
        UrlTranslationService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        UrlTranslationService.ctorParameters = function () {
            return [
                { type: ConfigurableRoutesService },
                { type: UrlParsingService },
                { type: ServerConfig }
            ];
        };
        return UrlTranslationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RoutingService = /** @class */ (function () {
        function RoutingService(store, winRef, urlTranslator) {
            this.store = store;
            this.winRef = winRef;
            this.urlTranslator = urlTranslator;
        }
        /**
         * Get the current router state
         */
        /**
         * Get the current router state
         * @return {?}
         */
        RoutingService.prototype.getRouterState = /**
         * Get the current router state
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getRouterState));
            };
        /**
         * Get the `PageContext` from the state
         */
        /**
         * Get the `PageContext` from the state
         * @return {?}
         */
        RoutingService.prototype.getPageContext = /**
         * Get the `PageContext` from the state
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getPageContext));
            };
        /**
         * Navigation with a new state into history
         * @param commands: url commands
         * @param query
         * @param extras: Represents the extra options used during navigation.
         */
        /**
         * Navigation with a new state into history
         * @param {?} commands
         * @param {?=} query
         * @param {?=} extras
         * @return {?}
         */
        RoutingService.prototype.go = /**
         * Navigation with a new state into history
         * @param {?} commands
         * @param {?=} query
         * @param {?=} extras
         * @return {?}
         */
            function (commands, query, extras) {
                /** @type {?} */
                var path = this.urlTranslator.translate(commands, { relative: true });
                return this.navigate(path, query, extras);
            };
        /**
         * Navigation using URL
         * @param url
         */
        /**
         * Navigation using URL
         * @param {?} url
         * @return {?}
         */
        RoutingService.prototype.goByUrl = /**
         * Navigation using URL
         * @param {?} url
         * @return {?}
         */
            function (url) {
                this.store.dispatch(new GoByUrl(url));
            };
        /**
         * Navigating back
         */
        /**
         * Navigating back
         * @return {?}
         */
        RoutingService.prototype.back = /**
         * Navigating back
         * @return {?}
         */
            function () {
                /** @type {?} */
                var isLastPageInApp = this.winRef.document.referrer.indexOf(this.winRef.nativeWindow.location.origin) > -1;
                if (isLastPageInApp) {
                    this.store.dispatch(new Back());
                    return;
                }
                this.go(['/']);
                return;
            };
        /**
         * Navigating forward
         */
        /**
         * Navigating forward
         * @return {?}
         */
        RoutingService.prototype.forward = /**
         * Navigating forward
         * @return {?}
         */
            function () {
                this.store.dispatch(new Forward());
            };
        /**
         * Get the redirect url from store
         */
        /**
         * Get the redirect url from store
         * @return {?}
         */
        RoutingService.prototype.getRedirectUrl = /**
         * Get the redirect url from store
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getRedirectUrl));
            };
        /**
         * Remove the redirect url from store
         */
        /**
         * Remove the redirect url from store
         * @return {?}
         */
        RoutingService.prototype.clearRedirectUrl = /**
         * Remove the redirect url from store
         * @return {?}
         */
            function () {
                this.store.dispatch(new ClearRedirectUrl());
            };
        /**
         * Put redirct url into store
         * @param url: redirect url
         */
        /**
         * Put redirct url into store
         * @param {?} url
         * @return {?}
         */
        RoutingService.prototype.saveRedirectUrl = /**
         * Put redirct url into store
         * @param {?} url
         * @return {?}
         */
            function (url) {
                this.store.dispatch(new SaveRedirectUrl(url));
            };
        /**
         * Navigation with a new state into history
         * @param path
         * @param query
         * @param extras: Represents the extra options used during navigation.
         */
        /**
         * Navigation with a new state into history
         * @private
         * @param {?} path
         * @param {?=} query
         * @param {?=} extras
         * @return {?}
         */
        RoutingService.prototype.navigate = /**
         * Navigation with a new state into history
         * @private
         * @param {?} path
         * @param {?=} query
         * @param {?=} extras
         * @return {?}
         */
            function (path, query, extras) {
                this.store.dispatch(new Go({
                    path: path,
                    query: query,
                    extras: extras,
                }));
            };
        RoutingService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        RoutingService.ctorParameters = function () {
            return [
                { type: i1$2.Store },
                { type: WindowRef },
                { type: UrlTranslationService }
            ];
        };
        /** @nocollapse */ RoutingService.ngInjectableDef = i0.defineInjectable({ factory: function RoutingService_Factory() { return new RoutingService(i0.inject(i1$2.Store), i0.inject(WindowRef), i0.inject(UrlTranslationService)); }, token: RoutingService, providedIn: "root" });
        return RoutingService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var defaultStorefrontRoutesTranslations = {
        default: {
            home: { paths: [''] },
            cart: { paths: ['cart'] },
            search: { paths: ['search/:query'] },
            login: { paths: ['login'] },
            register: { paths: ['register'] },
            resetPassword: { paths: ['login/pw/change'] },
            forgotPassword: { paths: ['forgot-password'] },
            checkout: { paths: ['checkout'] },
            orderConfirmation: { paths: ['order-confirmation'] },
            product: {
                paths: ['product/:productCode'],
                paramsMapping: { productCode: 'code' },
            },
            category: {
                paths: ['category/:categoryCode'],
                paramsMapping: { categoryCode: 'code' },
            },
            brand: { paths: ['Brands/:brandName/c/:brandCode'] },
            termsAndConditions: { paths: ['termsAndConditions'] },
            orders: { paths: ['my-account/orders'] },
            orderDetails: {
                paths: ['my-account/orders/:orderCode'],
                paramsMapping: { orderCode: 'code' },
            },
            addressBook: { paths: ['my-account/address-book'] },
            updatePassword: { paths: ['my-account/update-password'] },
            paymentManagement: { paths: ['my-account/payment-details'] },
            updateEmail: { paths: ['my-account/update-email'] },
            updateProfile: { paths: ['my-account/update-profile'] },
            closeAccount: { paths: ['my-account/close-account'] },
        },
        en: ( /** @type {?} */({})),
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var defaultConfigurableRoutesConfig = {
        routesConfig: {
            translations: defaultStorefrontRoutesTranslations,
            fetch: false,
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} service
     * @return {?}
     */
    function initConfigurableRoutes(service) {
        /** @type {?} */
        var result = function () { return service.init(); };
        return result;
    }
    var ConfigurableRoutesModule = /** @class */ (function () {
        function ConfigurableRoutesModule() {
        }
        ConfigurableRoutesModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.CommonModule,
                            ConfigModule.withConfig(defaultConfigurableRoutesConfig),
                        ],
                        declarations: [],
                        exports: [],
                        providers: [
                            ConfigurableRoutesService,
                            RoutesConfigLoader,
                            UrlTranslationService,
                            UrlParsingService,
                            {
                                provide: i0.APP_INITIALIZER,
                                useFactory: initConfigurableRoutes,
                                deps: [ConfigurableRoutesService],
                                multi: true,
                            },
                            { provide: ConfigurableRoutesConfig, useExisting: Config },
                        ],
                    },] }
        ];
        return ConfigurableRoutesModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RoutingModule = /** @class */ (function () {
        function RoutingModule() {
        }
        RoutingModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            ConfigurableRoutesModule,
                            router.RouterModule.forRoot([], {
                                scrollPositionRestoration: 'enabled',
                                anchorScrolling: 'enabled',
                            }),
                            i1$2.StoreModule.forFeature(ROUTING_FEATURE, reducerToken),
                            effects.EffectsModule.forFeature(effects$1),
                            fromNgrxRouter.StoreRouterConnectingModule.forRoot({
                                stateKey: ROUTING_FEATURE,
                            }),
                        ],
                        providers: [
                            RoutingService,
                            reducerProvider,
                            {
                                provide: fromNgrxRouter.RouterStateSerializer,
                                useClass: CustomSerializer,
                            },
                        ],
                    },] }
        ];
        return RoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ AuthConfig = /** @class */ (function (_super) {
        __extends(AuthConfig, _super);
        function AuthConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return AuthConfig;
    }(OccConfig));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var defaultAuthConfig = {
        authentication: {
            client_id: 'mobile_android',
            client_secret: 'secret',
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var AUTH_FEATURE = 'auth';
    /** @type {?} */
    var CLIENT_TOKEN_DATA = '[Auth] Client Token Data';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOADER_LOAD_ACTION = '[LOADER] LOAD';
    /** @type {?} */
    var LOADER_FAIL_ACTION = '[LOADER] FAIL';
    /** @type {?} */
    var LOADER_SUCCESS_ACTION = '[LOADER] SUCCESS';
    /** @type {?} */
    var LOADER_RESET_ACTION = '[LOADER] RESET';
    /**
     * @param {?} entityType
     * @return {?}
     */
    function loadMeta(entityType) {
        return {
            entityType: entityType,
            loader: {
                load: true,
            },
        };
    }
    /**
     * @param {?} entityType
     * @param {?=} error
     * @return {?}
     */
    function failMeta(entityType, error) {
        return {
            entityType: entityType,
            loader: {
                error: error ? error : true,
            },
        };
    }
    /**
     * @param {?} entityType
     * @return {?}
     */
    function successMeta(entityType) {
        return {
            entityType: entityType,
            loader: {
                success: true,
            },
        };
    }
    /**
     * @param {?} entityType
     * @return {?}
     */
    function resetMeta(entityType) {
        return {
            entityType: entityType,
            loader: {},
        };
    }
    var LoaderLoadAction = /** @class */ (function () {
        function LoaderLoadAction(entityType) {
            this.type = LOADER_LOAD_ACTION;
            this.meta = loadMeta(entityType);
        }
        return LoaderLoadAction;
    }());
    var LoaderFailAction = /** @class */ (function () {
        function LoaderFailAction(entityType, error) {
            this.type = LOADER_FAIL_ACTION;
            this.meta = failMeta(entityType, error);
        }
        return LoaderFailAction;
    }());
    var LoaderSuccessAction = /** @class */ (function () {
        function LoaderSuccessAction(entityType) {
            this.type = LOADER_SUCCESS_ACTION;
            this.meta = successMeta(entityType);
        }
        return LoaderSuccessAction;
    }());
    var LoaderResetAction = /** @class */ (function () {
        function LoaderResetAction(entityType) {
            this.type = LOADER_RESET_ACTION;
            this.meta = resetMeta(entityType);
        }
        return LoaderResetAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOAD_CLIENT_TOKEN = '[Token] Create Client Token';
    /** @type {?} */
    var LOAD_CLIENT_TOKEN_FAIL = '[Token] Create Client Token Fail';
    /** @type {?} */
    var LOAD_CLIENT_TOKEN_SUCCESS = '[Token] Create Client Token Success';
    var LoadClientToken = /** @class */ (function (_super) {
        __extends(LoadClientToken, _super);
        function LoadClientToken() {
            var _this = _super.call(this, CLIENT_TOKEN_DATA) || this;
            _this.type = LOAD_CLIENT_TOKEN;
            return _this;
        }
        return LoadClientToken;
    }(LoaderLoadAction));
    var LoadClientTokenFail = /** @class */ (function (_super) {
        __extends(LoadClientTokenFail, _super);
        function LoadClientTokenFail(payload) {
            var _this = _super.call(this, CLIENT_TOKEN_DATA, payload) || this;
            _this.payload = payload;
            _this.type = LOAD_CLIENT_TOKEN_FAIL;
            return _this;
        }
        return LoadClientTokenFail;
    }(LoaderFailAction));
    var LoadClientTokenSuccess = /** @class */ (function (_super) {
        __extends(LoadClientTokenSuccess, _super);
        function LoadClientTokenSuccess(payload) {
            var _this = _super.call(this, CLIENT_TOKEN_DATA) || this;
            _this.payload = payload;
            _this.type = LOAD_CLIENT_TOKEN_SUCCESS;
            return _this;
        }
        return LoadClientTokenSuccess;
    }(LoaderSuccessAction));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOAD_USER_TOKEN = '[Auth] Load User Token';
    /** @type {?} */
    var LOAD_USER_TOKEN_FAIL = '[Auth] Load User Token Fail';
    /** @type {?} */
    var LOAD_USER_TOKEN_SUCCESS = '[Auth] Load User Token Success';
    /** @type {?} */
    var REFRESH_USER_TOKEN = '[Auth] Refresh User Token';
    /** @type {?} */
    var REFRESH_USER_TOKEN_FAIL = '[Auth] Refresh User Token Fail';
    /** @type {?} */
    var REFRESH_USER_TOKEN_SUCCESS = '[Auth] Refresh User Token Success';
    var LoadUserToken = /** @class */ (function () {
        function LoadUserToken(payload) {
            this.payload = payload;
            this.type = LOAD_USER_TOKEN;
        }
        return LoadUserToken;
    }());
    var LoadUserTokenFail = /** @class */ (function () {
        function LoadUserTokenFail(payload) {
            this.payload = payload;
            this.type = LOAD_USER_TOKEN_FAIL;
        }
        return LoadUserTokenFail;
    }());
    var LoadUserTokenSuccess = /** @class */ (function () {
        function LoadUserTokenSuccess(payload) {
            this.payload = payload;
            this.type = LOAD_USER_TOKEN_SUCCESS;
        }
        return LoadUserTokenSuccess;
    }());
    var RefreshUserToken = /** @class */ (function () {
        function RefreshUserToken(payload) {
            this.payload = payload;
            this.type = REFRESH_USER_TOKEN;
        }
        return RefreshUserToken;
    }());
    var RefreshUserTokenSuccess = /** @class */ (function () {
        function RefreshUserTokenSuccess(payload) {
            this.payload = payload;
            this.type = REFRESH_USER_TOKEN_SUCCESS;
        }
        return RefreshUserTokenSuccess;
    }());
    var RefreshUserTokenFail = /** @class */ (function () {
        function RefreshUserTokenFail(payload) {
            this.payload = payload;
            this.type = REFRESH_USER_TOKEN_FAIL;
        }
        return RefreshUserTokenFail;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getAuthState = i1$2.createFeatureSelector(AUTH_FEATURE);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getClientTokenState = i1$2.createSelector(getAuthState, function (state) { return state.clientToken; });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getUserTokenSelector = function (state) { return state.token; };
    /** @type {?} */
    var getUserTokenState = i1$2.createSelector(getAuthState, function (state) { return state.userToken; });
    /** @type {?} */
    var getUserToken = i1$2.createSelector(getUserTokenState, getUserTokenSelector);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthService = /** @class */ (function () {
        function AuthService(store) {
            this.store = store;
        }
        /**
         * Loads a new user token
         * @param userId
         * @param password
         */
        /**
         * Loads a new user token
         * @param {?} userId
         * @param {?} password
         * @return {?}
         */
        AuthService.prototype.authorize = /**
         * Loads a new user token
         * @param {?} userId
         * @param {?} password
         * @return {?}
         */
            function (userId, password) {
                this.store.dispatch(new LoadUserToken({
                    userId: userId,
                    password: password,
                }));
            };
        /**
         * Returns the user's token
         */
        /**
         * Returns the user's token
         * @return {?}
         */
        AuthService.prototype.getUserToken = /**
         * Returns the user's token
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getUserToken));
            };
        /**
         * Refreshes the user token
         * @param token a user token to refresh
         */
        /**
         * Refreshes the user token
         * @param {?} token a user token to refresh
         * @return {?}
         */
        AuthService.prototype.refreshUserToken = /**
         * Refreshes the user token
         * @param {?} token a user token to refresh
         * @return {?}
         */
            function (token) {
                this.store.dispatch(new RefreshUserToken({
                    userId: token.userId,
                    refreshToken: token.refresh_token,
                }));
            };
        /**
         * Store the provided token
         */
        /**
         * Store the provided token
         * @param {?} token
         * @return {?}
         */
        AuthService.prototype.authorizeWithToken = /**
         * Store the provided token
         * @param {?} token
         * @return {?}
         */
            function (token) {
                this.store.dispatch(new LoadUserTokenSuccess(token));
            };
        /**
         * Login
         */
        /**
         * Login
         * @return {?}
         */
        AuthService.prototype.login = /**
         * Login
         * @return {?}
         */
            function () {
                this.store.dispatch(new Login());
            };
        /**
         * Logout
         */
        /**
         * Logout
         * @return {?}
         */
        AuthService.prototype.logout = /**
         * Logout
         * @return {?}
         */
            function () {
                this.store.dispatch(new Logout());
            };
        /**
         * Returns a client token.  The client token from the store is returned if there is one.
         * Otherwise, an new token is fetched from the backend and saved in the store.
         */
        /**
         * Returns a client token.  The client token from the store is returned if there is one.
         * Otherwise, an new token is fetched from the backend and saved in the store.
         * @return {?}
         */
        AuthService.prototype.getClientToken = /**
         * Returns a client token.  The client token from the store is returned if there is one.
         * Otherwise, an new token is fetched from the backend and saved in the store.
         * @return {?}
         */
            function () {
                var _this = this;
                return this.store.pipe(i1$2.select(getClientTokenState), operators.filter(function (state) {
                    if (_this.isClientTokenLoaded(state)) {
                        return true;
                    }
                    else {
                        if (!state.loading) {
                            _this.store.dispatch(new LoadClientToken());
                        }
                        return false;
                    }
                }), operators.map(function (state) { return state.value; }));
            };
        /**
         * Fetches a clientToken from the backend ans saves it in the store where getClientToken can use it.
         * The new clientToken is returned.
         */
        /**
         * Fetches a clientToken from the backend ans saves it in the store where getClientToken can use it.
         * The new clientToken is returned.
         * @return {?}
         */
        AuthService.prototype.refreshClientToken = /**
         * Fetches a clientToken from the backend ans saves it in the store where getClientToken can use it.
         * The new clientToken is returned.
         * @return {?}
         */
            function () {
                var _this = this;
                this.store.dispatch(new LoadClientToken());
                return this.store.pipe(i1$2.select(getClientTokenState), operators.filter(function (state) {
                    return _this.isClientTokenLoaded(state);
                }), operators.map(function (state) { return state.value; }));
            };
        /**
         * @protected
         * @param {?} state
         * @return {?}
         */
        AuthService.prototype.isClientTokenLoaded = /**
         * @protected
         * @param {?} state
         * @return {?}
         */
            function (state) {
                return (state.success || state.error) && !state.loading;
            };
        AuthService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        AuthService.ctorParameters = function () {
            return [
                { type: i1$2.Store }
            ];
        };
        /** @nocollapse */ AuthService.ngInjectableDef = i0.defineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.inject(i1$2.Store)); }, token: AuthService, providedIn: "root" });
        return AuthService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ClientErrorHandlingService = /** @class */ (function () {
        function ClientErrorHandlingService(authService) {
            this.authService = authService;
        }
        /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
        ClientErrorHandlingService.prototype.handleExpiredClientToken = /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
            function (request, next) {
                var _this = this;
                return this.authService.refreshClientToken().pipe(operators.take(1), operators.switchMap(function (token) {
                    return next.handle(_this.createNewRequestWithNewToken(request, token));
                }));
            };
        /**
         * @private
         * @param {?} request
         * @param {?} token
         * @return {?}
         */
        ClientErrorHandlingService.prototype.createNewRequestWithNewToken = /**
         * @private
         * @param {?} request
         * @param {?} token
         * @return {?}
         */
            function (request, token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: token.token_type + " " + token.access_token,
                    },
                });
                return request;
            };
        ClientErrorHandlingService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ClientErrorHandlingService.ctorParameters = function () {
            return [
                { type: AuthService }
            ];
        };
        return ClientErrorHandlingService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserErrorHandlingService = /** @class */ (function () {
        function UserErrorHandlingService(authService, routingService) {
            this.authService = authService;
            this.routingService = routingService;
        }
        /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
        UserErrorHandlingService.prototype.handleExpiredUserToken = /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
            function (request, next) {
                var _this = this;
                return this.handleExpiredToken().pipe(operators.switchMap(function (token) {
                    return next.handle(_this.createNewRequestWithNewToken(request, token));
                }));
            };
        /**
         * @return {?}
         */
        UserErrorHandlingService.prototype.handleExpiredRefreshToken = /**
         * @return {?}
         */
            function () {
                // Logout user
                this.authService.logout();
            };
        /**
         * @private
         * @return {?}
         */
        UserErrorHandlingService.prototype.handleExpiredToken = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var oldToken;
                return this.authService.getUserToken().pipe(operators.tap(function (token) {
                    if (token.access_token && token.refresh_token && !oldToken) {
                        _this.authService.refreshUserToken(token);
                    }
                    else if (!token.access_token && !token.refresh_token) {
                        _this.routingService.go({ route: 'login' });
                    }
                    oldToken = oldToken || token;
                }), operators.filter(function (token) { return oldToken.access_token !== token.access_token; }), operators.take(1));
            };
        /**
         * @private
         * @param {?} request
         * @param {?} token
         * @return {?}
         */
        UserErrorHandlingService.prototype.createNewRequestWithNewToken = /**
         * @private
         * @param {?} request
         * @param {?} token
         * @return {?}
         */
            function (request, token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: token.token_type + " " + token.access_token,
                    },
                });
                return request;
            };
        UserErrorHandlingService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        UserErrorHandlingService.ctorParameters = function () {
            return [
                { type: AuthService },
                { type: RoutingService }
            ];
        };
        return UserErrorHandlingService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var USE_CLIENT_TOKEN = 'cx-use-client-token';
    var InterceptorUtil = /** @class */ (function () {
        function InterceptorUtil() {
        }
        /**
         * @template T
         * @param {?} headerName
         * @param {?} interceptorParam
         * @param {?=} headers
         * @return {?}
         */
        InterceptorUtil.createHeader = /**
         * @template T
         * @param {?} headerName
         * @param {?} interceptorParam
         * @param {?=} headers
         * @return {?}
         */
            function (headerName, interceptorParam, headers) {
                if (headers) {
                    return headers.append(headerName, JSON.stringify(interceptorParam));
                }
                headers = new i1$1.HttpHeaders().set(headerName, JSON.stringify(interceptorParam));
                return headers;
            };
        /**
         * @param {?} headerName
         * @param {?} request
         * @return {?}
         */
        InterceptorUtil.removeHeader = /**
         * @param {?} headerName
         * @param {?} request
         * @return {?}
         */
            function (headerName, request) {
                /** @type {?} */
                var updatedHeaders = request.headers.delete(headerName);
                return request.clone({ headers: updatedHeaders });
            };
        /**
         * @template T
         * @param {?} headerName
         * @param {?} headers
         * @return {?}
         */
        InterceptorUtil.getInterceptorParam = /**
         * @template T
         * @param {?} headerName
         * @param {?} headers
         * @return {?}
         */
            function (headerName, headers) {
                /** @type {?} */
                var rawValue = headers.get(headerName);
                if (rawValue) {
                    return JSON.parse(rawValue);
                }
                return undefined;
            };
        return InterceptorUtil;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
    var AuthErrorInterceptor = /** @class */ (function () {
        function AuthErrorInterceptor(userErrorHandlingService, clientErrorHandlingService, authService) {
            this.userErrorHandlingService = userErrorHandlingService;
            this.clientErrorHandlingService = clientErrorHandlingService;
            this.authService = authService;
        }
        /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
        AuthErrorInterceptor.prototype.intercept = /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
            function (request, next) {
                var _this = this;
                /** @type {?} */
                var isClientTokenRequest = this.isClientTokenRequest(request);
                if (isClientTokenRequest) {
                    request = InterceptorUtil.removeHeader(USE_CLIENT_TOKEN, request);
                }
                return next.handle(request).pipe(operators.catchError(function (errResponse) {
                    if (errResponse instanceof i1$1.HttpErrorResponse) {
                        switch (errResponse.status) {
                            case 401: // Unauthorized
                                if (isClientTokenRequest) {
                                    if (_this.isExpiredToken(errResponse)) {
                                        return _this.clientErrorHandlingService.handleExpiredClientToken(request, next);
                                    }
                                    // user token request
                                }
                                else {
                                    if (_this.isExpiredToken(errResponse)) {
                                        return _this.userErrorHandlingService.handleExpiredUserToken(request, next);
                                    }
                                    else if (
                                    // Refresh expired token
                                    // Check that the OAUTH endpoint was called and the error is for refresh token is expired
                                    errResponse.url.indexOf(OAUTH_ENDPOINT) !== -1 &&
                                        errResponse.error.error === 'invalid_token') {
                                        _this.userErrorHandlingService.handleExpiredRefreshToken();
                                        return rxjs.of();
                                    }
                                }
                                break;
                            case 400: // Bad Request
                                if (errResponse.url.indexOf(OAUTH_ENDPOINT) !== -1 &&
                                    errResponse.error.error === 'invalid_grant') {
                                    if (request.body.get('grant_type') === 'refresh_token') {
                                        // refresh token fail, force user logout
                                        _this.authService.logout();
                                    }
                                }
                                break;
                        }
                    }
                    return rxjs.throwError(errResponse);
                }));
            };
        /**
         * @private
         * @param {?} request
         * @return {?}
         */
        AuthErrorInterceptor.prototype.isClientTokenRequest = /**
         * @private
         * @param {?} request
         * @return {?}
         */
            function (request) {
                /** @type {?} */
                var isRequestMapping = InterceptorUtil.getInterceptorParam(USE_CLIENT_TOKEN, request.headers);
                return Boolean(isRequestMapping);
            };
        /**
         * @private
         * @param {?} resp
         * @return {?}
         */
        AuthErrorInterceptor.prototype.isExpiredToken = /**
         * @private
         * @param {?} resp
         * @return {?}
         */
            function (resp) {
                if (resp.error &&
                    resp.error.errors &&
                    resp.error.errors instanceof Array &&
                    resp.error.errors[0]) {
                    return resp.error.errors[0].type === 'InvalidTokenError';
                }
                return false;
            };
        AuthErrorInterceptor.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        AuthErrorInterceptor.ctorParameters = function () {
            return [
                { type: UserErrorHandlingService },
                { type: ClientErrorHandlingService },
                { type: AuthService }
            ];
        };
        return AuthErrorInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SITE_CONTEXT_FEATURE = 'siteContext';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getSiteContextState = i1$2.createFeatureSelector(SITE_CONTEXT_FEATURE);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getActiveBaseSite = i1$2.createSelector(getSiteContextState, function (state) { return state.baseSite; });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SET_ACTIVE_BASE_SITE = '[Site-context] Set Active BaseSite';
    /** @type {?} */
    var BASE_SITE_CHANGE = '[Site-context] BaseSite Change';
    var SetActiveBaseSite = /** @class */ (function () {
        function SetActiveBaseSite(payload) {
            this.payload = payload;
            this.type = SET_ACTIVE_BASE_SITE;
        }
        return SetActiveBaseSite;
    }());
    var BaseSiteChange = /** @class */ (function () {
        function BaseSiteChange() {
            this.type = BASE_SITE_CHANGE;
        }
        return BaseSiteChange;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseSiteService = /** @class */ (function () {
        function BaseSiteService(store) {
            this.store = store;
        }
        /**
         * Represents the current baseSite.
         */
        /**
         * Represents the current baseSite.
         * @return {?}
         */
        BaseSiteService.prototype.getActive = /**
         * Represents the current baseSite.
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getActiveBaseSite), operators.filter(Boolean));
            };
        /**
         * We currently don't support switching baseSite at run time
         */
        /**
         * We currently don't support switching baseSite at run time
         * @return {?}
         */
        BaseSiteService.prototype.getAll = /**
         * We currently don't support switching baseSite at run time
         * @return {?}
         */
            function () {
                return this.getActive().pipe(operators.map(function (baseSite) { return [baseSite]; }));
            };
        /**
         * @param {?} baseSite
         * @return {?}
         */
        BaseSiteService.prototype.setActive = /**
         * @param {?} baseSite
         * @return {?}
         */
            function (baseSite) {
                var _this = this;
                return this.store
                    .pipe(i1$2.select(getActiveBaseSite), operators.take(1))
                    .subscribe(function (activeBaseSite) {
                    if (activeBaseSite !== baseSite) {
                        _this.store.dispatch(new SetActiveBaseSite(baseSite));
                    }
                });
            };
        /**
         * Initializes the active baseSite.
         */
        /**
         * Initializes the active baseSite.
         * @param {?} defaultBaseSite
         * @return {?}
         */
        BaseSiteService.prototype.initialize = /**
         * Initializes the active baseSite.
         * @param {?} defaultBaseSite
         * @return {?}
         */
            function (defaultBaseSite) {
                this.setActive(defaultBaseSite);
            };
        BaseSiteService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        BaseSiteService.ctorParameters = function () {
            return [
                { type: i1$2.Store }
            ];
        };
        return BaseSiteService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DynamicTemplate = /** @class */ (function () {
        function DynamicTemplate() {
        }
        /**
         * @param {?} templateString
         * @param {?} templateVariables
         * @return {?}
         */
        DynamicTemplate.resolve = /**
         * @param {?} templateString
         * @param {?} templateVariables
         * @return {?}
         */
            function (templateString, templateVariables) {
                /** @type {?} */
                var keys = Object.keys(templateVariables);
                // Can't use Object.values as the compilation settings are to es2015 not es2017
                /** @type {?} */
                var values = keys.map(function (key) { return templateVariables[key]; });
                /** @type {?} */
                var templateFunction = new (Function.bind.apply(Function, __spread([void 0], keys, ["return `" + templateString + "`;"])))();
                return templateFunction.apply(void 0, __spread(values));
            };
        return DynamicTemplate;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OccEndpointsService = /** @class */ (function () {
        function OccEndpointsService(config, baseSiteService) {
            var _this = this;
            this.config = config;
            this.baseSiteService = baseSiteService;
            this.activeBaseSite = (this.config.site && this.config.site.baseSite) || '';
            if (this.baseSiteService) {
                this.baseSiteService
                    .getActive()
                    .subscribe(function (value) { return (_this.activeBaseSite = value); });
            }
        }
        /**
         * @return {?}
         */
        OccEndpointsService.prototype.getBaseEndpoint = /**
         * @return {?}
         */
            function () {
                if (!this.config || !this.config.backend || !this.config.backend.occ) {
                    return '';
                }
                return ((this.config.backend.occ.baseUrl || '') +
                    this.config.backend.occ.prefix +
                    this.activeBaseSite);
            };
        /**
         * @param {?} endpoint
         * @return {?}
         */
        OccEndpointsService.prototype.getEndpoint = /**
         * @param {?} endpoint
         * @return {?}
         */
            function (endpoint) {
                if (!endpoint.startsWith('/')) {
                    endpoint = '/' + endpoint;
                }
                return this.getBaseEndpoint() + endpoint;
            };
        /**
         * @param {?} endpoint
         * @param {?=} urlParams
         * @param {?=} queryParams
         * @return {?}
         */
        OccEndpointsService.prototype.getUrl = /**
         * @param {?} endpoint
         * @param {?=} urlParams
         * @param {?=} queryParams
         * @return {?}
         */
            function (endpoint, urlParams, queryParams) {
                var _a;
                if (this.config.backend &&
                    this.config.backend.occ &&
                    this.config.backend.occ.endpoints[endpoint]) {
                    endpoint = this.config.backend.occ.endpoints[endpoint];
                }
                if (urlParams) {
                    endpoint = DynamicTemplate.resolve(endpoint, urlParams);
                }
                if (queryParams) {
                    /** @type {?} */
                    var httpParamsOptions = void 0;
                    if (endpoint.indexOf('?') !== -1) {
                        /** @type {?} */
                        var queryParamsFromEndpoint = void 0;
                        _a = __read(endpoint.split('?'), 2), endpoint = _a[0], queryParamsFromEndpoint = _a[1];
                        httpParamsOptions = { fromString: queryParamsFromEndpoint };
                    }
                    /** @type {?} */
                    var httpParams_1 = new i1$1.HttpParams(httpParamsOptions);
                    Object.keys(queryParams).forEach(function (key) {
                        /** @type {?} */
                        var value = queryParams[key];
                        if (value !== undefined) {
                            if (value === null) {
                                httpParams_1 = httpParams_1.delete(key);
                            }
                            else {
                                httpParams_1 = httpParams_1.set(key, value);
                            }
                        }
                    });
                    /** @type {?} */
                    var params = httpParams_1.toString();
                    if (params.length) {
                        endpoint += '?' + params;
                    }
                }
                return this.getEndpoint(endpoint);
            };
        OccEndpointsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        OccEndpointsService.ctorParameters = function () {
            return [
                { type: OccConfig },
                { type: BaseSiteService, decorators: [{ type: i0.Optional }] }
            ];
        };
        /** @nocollapse */ OccEndpointsService.ngInjectableDef = i0.defineInjectable({ factory: function OccEndpointsService_Factory() { return new OccEndpointsService(i0.inject(OccConfig), i0.inject(BaseSiteService, 8)); }, token: OccEndpointsService, providedIn: "root" });
        return OccEndpointsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ClientTokenInterceptor = /** @class */ (function () {
        function ClientTokenInterceptor(authService, occEndpoints) {
            this.authService = authService;
            this.occEndpoints = occEndpoints;
        }
        /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
        ClientTokenInterceptor.prototype.intercept = /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
            function (request, next) {
                var _this = this;
                return this.getClientToken(request).pipe(operators.take(1), operators.switchMap(function (token) {
                    if (token &&
                        request.url.indexOf(_this.occEndpoints.getBaseEndpoint()) > -1) {
                        request = request.clone({
                            setHeaders: {
                                Authorization: token.token_type + " " + token.access_token,
                            },
                        });
                    }
                    return next.handle(request);
                }));
            };
        /**
         * @private
         * @param {?} request
         * @return {?}
         */
        ClientTokenInterceptor.prototype.getClientToken = /**
         * @private
         * @param {?} request
         * @return {?}
         */
            function (request) {
                if (InterceptorUtil.getInterceptorParam(USE_CLIENT_TOKEN, request.headers)) {
                    return this.authService.getClientToken();
                }
                return rxjs.of(null);
            };
        ClientTokenInterceptor.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ClientTokenInterceptor.ctorParameters = function () {
            return [
                { type: AuthService },
                { type: OccEndpointsService }
            ];
        };
        return ClientTokenInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserTokenInterceptor = /** @class */ (function () {
        function UserTokenInterceptor(authService, occEndpoints) {
            var _this = this;
            this.authService = authService;
            this.occEndpoints = occEndpoints;
            this.authService.getUserToken().subscribe(function (token) {
                _this.userToken = token;
            });
        }
        /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
        UserTokenInterceptor.prototype.intercept = /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
            function (request, next) {
                if (this.userToken &&
                    this.isOccUrl(request.url) &&
                    !request.headers.get('Authorization')) {
                    request = request.clone({
                        setHeaders: {
                            Authorization: this.userToken.token_type + " " + this.userToken.access_token,
                        },
                    });
                }
                return next.handle(request);
            };
        /**
         * @private
         * @param {?} url
         * @return {?}
         */
        UserTokenInterceptor.prototype.isOccUrl = /**
         * @private
         * @param {?} url
         * @return {?}
         */
            function (url) {
                return url.indexOf(this.occEndpoints.getBaseEndpoint()) > -1;
            };
        UserTokenInterceptor.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        UserTokenInterceptor.ctorParameters = function () {
            return [
                { type: AuthService },
                { type: OccEndpointsService }
            ];
        };
        return UserTokenInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var interceptors = [
        {
            provide: i1$1.HTTP_INTERCEPTORS,
            useClass: ClientTokenInterceptor,
            multi: true,
        },
        {
            provide: i1$1.HTTP_INTERCEPTORS,
            useClass: UserTokenInterceptor,
            multi: true,
        },
        {
            provide: i1$1.HTTP_INTERCEPTORS,
            useClass: AuthErrorInterceptor,
            multi: true,
        },
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var OAUTH_ENDPOINT$1 = '/authorizationserver/oauth/token';
    var ClientAuthenticationTokenService = /** @class */ (function () {
        function ClientAuthenticationTokenService(config, http) {
            this.config = config;
            this.http = http;
        }
        /**
         * @return {?}
         */
        ClientAuthenticationTokenService.prototype.loadClientAuthenticationToken = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var url = this.getOAuthEndpoint();
                /** @type {?} */
                var params = new i1$1.HttpParams()
                    .set('client_id', encodeURIComponent(this.config.authentication.client_id))
                    .set('client_secret', encodeURIComponent(this.config.authentication.client_secret))
                    .set('grant_type', 'client_credentials');
                /** @type {?} */
                var headers = new i1$1.HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded',
                });
                return this.http
                    .post(url, params, { headers: headers })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error.json()); }));
            };
        /**
         * @private
         * @return {?}
         */
        ClientAuthenticationTokenService.prototype.getOAuthEndpoint = /**
         * @private
         * @return {?}
         */
            function () {
                return (this.config.backend.occ.baseUrl || '') + OAUTH_ENDPOINT$1;
            };
        ClientAuthenticationTokenService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ClientAuthenticationTokenService.ctorParameters = function () {
            return [
                { type: AuthConfig },
                { type: i1$1.HttpClient }
            ];
        };
        return ClientAuthenticationTokenService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var OAUTH_ENDPOINT$2 = '/authorizationserver/oauth/token';
    var UserAuthenticationTokenService = /** @class */ (function () {
        function UserAuthenticationTokenService(http, config) {
            this.http = http;
            this.config = config;
        }
        /**
         * @param {?} userId
         * @param {?} password
         * @return {?}
         */
        UserAuthenticationTokenService.prototype.loadToken = /**
         * @param {?} userId
         * @param {?} password
         * @return {?}
         */
            function (userId, password) {
                /** @type {?} */
                var url = this.getOAuthEndpoint();
                /** @type {?} */
                var params = new i1$1.HttpParams()
                    .set('client_id', this.config.authentication.client_id)
                    .set('client_secret', this.config.authentication.client_secret)
                    .set('grant_type', 'password') // authorization_code, client_credentials, password
                    .set('username', userId)
                    .set('password', password);
                /** @type {?} */
                var headers = new i1$1.HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded',
                });
                return this.http
                    .post(url, params, { headers: headers })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error); }));
            };
        /**
         * @param {?} refreshToken
         * @return {?}
         */
        UserAuthenticationTokenService.prototype.refreshToken = /**
         * @param {?} refreshToken
         * @return {?}
         */
            function (refreshToken) {
                /** @type {?} */
                var url = this.getOAuthEndpoint();
                /** @type {?} */
                var params = new i1$1.HttpParams()
                    .set('client_id', encodeURIComponent(this.config.authentication.client_id))
                    .set('client_secret', encodeURIComponent(this.config.authentication.client_secret))
                    .set('refresh_token', encodeURI(refreshToken))
                    .set('grant_type', 'refresh_token');
                /** @type {?} */
                var headers = new i1$1.HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded',
                });
                return this.http
                    .post(url, params, { headers: headers })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error); }));
            };
        /**
         * @protected
         * @return {?}
         */
        UserAuthenticationTokenService.prototype.getOAuthEndpoint = /**
         * @protected
         * @return {?}
         */
            function () {
                return (this.config.backend.occ.baseUrl || '') + OAUTH_ENDPOINT$2;
            };
        UserAuthenticationTokenService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        UserAuthenticationTokenService.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: AuthConfig }
            ];
        };
        return UserAuthenticationTokenService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var services = [
        ClientAuthenticationTokenService,
        ClientErrorHandlingService,
        UserAuthenticationTokenService,
        UserErrorHandlingService,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var StorageSyncType = {
        NO_STORAGE: 'NO_STORAGE',
        LOCAL_STORAGE: 'LOCAL_STORAGE',
        SESSION_STORAGE: 'SESSION_STORAGE',
    };
    /** @enum {string} */
    var StateTransferType = {
        TRANSFER_STATE: 'SSR',
    };
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ StateConfig = /** @class */ (function () {
        function StateConfig() {
        }
        return StateConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var META_REDUCER = new i0.InjectionToken('metaReducer');
    /**
     * @param {?} metaReducers
     * @return {?}
     */
    function metaReducersFactory(metaReducers) {
        return (metaReducers || []).filter(Boolean);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T, E
     * @param {?} keys
     * @param {?} state
     * @return {?}
     */
    function getStateSliceValue(keys, state) {
        return keys
            .split('.')
            .reduce(function (previous, current) { return (previous ? previous[current] : undefined); }, state);
    }
    /**
     * @template T, E
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function createShellObject(key, value) {
        if (!key || !value || Object.keys(value).length === 0) {
            return ( /** @type {?} */({}));
        }
        /** @type {?} */
        var keySplit = key.split('.');
        /** @type {?} */
        var newObject = {};
        /** @type {?} */
        var tempNewObject = newObject;
        for (var i = 0; i < keySplit.length; i++) {
            /** @type {?} */
            var currentKey = keySplit[i];
            // last iteration
            if (i === keySplit.length - 1) {
                tempNewObject = tempNewObject[currentKey] = value;
            }
            else {
                tempNewObject = tempNewObject[currentKey] = {};
            }
        }
        return ( /** @type {?} */(newObject));
    }
    /**
     * @template T, E
     * @param {?} keys
     * @param {?} state
     * @return {?}
     */
    function getStateSlice(keys, state) {
        var e_1, _a;
        if (keys && keys.length === 0) {
            return ( /** @type {?} */({}));
        }
        /** @type {?} */
        var stateSlices = {};
        try {
            for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var currentKey = keys_1_1.value;
                /** @type {?} */
                var stateValue = getStateSliceValue(currentKey, state);
                /** @type {?} */
                var shell = createShellObject(currentKey, stateValue);
                stateSlices = deepMerge(stateSlices, shell);
            }
        }
        catch (e_1_1) {
            e_1 = { error: e_1_1 };
        }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return))
                    _a.call(keys_1);
            }
            finally {
                if (e_1)
                    throw e_1.error;
            }
        }
        return ( /** @type {?} */(stateSlices));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     * @param {?} winRef
     * @param {?=} config
     * @return {?}
     */
    function getStorageSyncReducer(winRef, config) {
        if (!winRef.nativeWindow ||
            !config ||
            !config.state ||
            !config.state.storageSync ||
            !config.state.storageSync.keys) {
            return undefined;
        }
        /** @type {?} */
        var storageSyncConfig = config.state.storageSync;
        return function (reducer) {
            return function (state, action) {
                /** @type {?} */
                var newState = __assign({}, state);
                if (action.type === i1$2.INIT && !exists(newState)) {
                    newState = reducer(state, action);
                }
                if (action.type === i1$2.INIT || action.type === i1$2.UPDATE) {
                    /** @type {?} */
                    var rehydratedState = rehydrate(config, winRef);
                    return deepMerge(newState, rehydratedState);
                }
                newState = reducer(newState, action);
                if (action.type !== i1$2.INIT) {
                    // handle local storage
                    /** @type {?} */
                    var localStorageKeys = getKeysForStorage(storageSyncConfig.keys, StorageSyncType.LOCAL_STORAGE);
                    /** @type {?} */
                    var localStorageStateSlices = getStateSlice(localStorageKeys, state);
                    persistToStorage(config.state.storageSync.localStorageKeyName, localStorageStateSlices, winRef.localStorage);
                    // handle session storage
                    /** @type {?} */
                    var sessionStorageKeys = getKeysForStorage(storageSyncConfig.keys, StorageSyncType.SESSION_STORAGE);
                    /** @type {?} */
                    var sessionStorageStateSlices = getStateSlice(sessionStorageKeys, state);
                    persistToStorage(config.state.storageSync.sessionStorageKeyName, sessionStorageStateSlices, winRef.sessionStorage);
                }
                return newState;
            };
        };
    }
    /**
     * @param {?} keys
     * @param {?} storageType
     * @return {?}
     */
    function getKeysForStorage(keys, storageType) {
        return Object.keys(keys).filter(function (key) { return keys[key] === storageType; });
    }
    /**
     * @template T
     * @param {?} config
     * @param {?} winRef
     * @return {?}
     */
    function rehydrate(config, winRef) {
        /** @type {?} */
        var localStorageValue = readFromStorage(winRef.localStorage, config.state.storageSync.localStorageKeyName);
        /** @type {?} */
        var sessionStorageValue = readFromStorage(winRef.sessionStorage, config.state.storageSync.sessionStorageKeyName);
        return deepMerge(localStorageValue, sessionStorageValue);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function exists(value) {
        if (value != null) {
            if (typeof value === 'object') {
                return Object.keys(value).length !== 0;
            }
            else if (value === '') {
                return false;
            }
            else {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} configKey
     * @param {?} value
     * @param {?} storage
     * @return {?}
     */
    function persistToStorage(configKey, value, storage) {
        if (!isSsr(storage) && value) {
            storage.setItem(configKey, JSON.stringify(value));
        }
    }
    /**
     * @param {?} storage
     * @param {?} key
     * @return {?}
     */
    function readFromStorage(storage, key) {
        if (isSsr(storage)) {
            return;
        }
        /** @type {?} */
        var storageValue = storage.getItem(key);
        if (!storageValue) {
            return;
        }
        return JSON.parse(storageValue);
    }
    /**
     * @param {?} storage
     * @return {?}
     */
    function isSsr(storage) {
        return !Boolean(storage);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CX_KEY = platformBrowser.makeStateKey('cx-state');
    /**
     * @param {?} platformId
     * @param {?=} transferState
     * @param {?=} config
     * @return {?}
     */
    function getTransferStateReducer(platformId, transferState, config) {
        if (transferState &&
            config &&
            config.state &&
            config.state.ssrTransfer &&
            config.state.ssrTransfer.keys) {
            if (i1.isPlatformBrowser(platformId)) {
                return getBrowserTransferStateReducer(transferState, config.state.ssrTransfer.keys);
            }
            else if (i1.isPlatformServer(platformId)) {
                return getServerTransferStateReducer(transferState, config.state.ssrTransfer.keys);
            }
        }
        return undefined;
    }
    /**
     * @param {?} transferState
     * @param {?} keys
     * @return {?}
     */
    function getServerTransferStateReducer(transferState, keys) {
        return function (reducer) {
            return function (state, action) {
                /** @type {?} */
                var newState = reducer(state, action);
                if (newState) {
                    /** @type {?} */
                    var stateSlice = getStateSlice(Object.keys(keys), newState);
                    transferState.set(CX_KEY, stateSlice);
                }
                return newState;
            };
        };
    }
    /**
     * @param {?} transferState
     * @param {?} keys
     * @return {?}
     */
    function getBrowserTransferStateReducer(transferState, keys) {
        return function (reducer) {
            return function (state, action) {
                if (action.type === i1$2.INIT && transferState.hasKey(CX_KEY)) {
                    /** @type {?} */
                    var cxKey = transferState.get(CX_KEY, {});
                    /** @type {?} */
                    var transferredStateSlice = getStateSlice(Object.keys(keys), cxKey);
                    state = deepMerge({}, state, transferredStateSlice);
                }
                return reducer(state, action);
            };
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var stateMetaReducers = [
        {
            provide: META_REDUCER,
            useFactory: getStorageSyncReducer,
            deps: [WindowRef, [new i0.Optional(), Config]],
            multi: true,
        },
        {
            provide: META_REDUCER,
            useFactory: getTransferStateReducer,
            deps: [
                i0.PLATFORM_ID,
                [new i0.Optional(), platformBrowser.TransferState],
                [new i0.Optional(), Config],
            ],
            multi: true,
        },
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DEFAULT_LOCAL_STORAGE_KEY = 'spartacus-local-data';
    /** @type {?} */
    var DEFAULT_SESSION_STORAGE_KEY = 'spartacus-session-data';
    /** @type {?} */
    var defaultStateConfig = {
        state: {
            storageSync: {
                localStorageKeyName: DEFAULT_LOCAL_STORAGE_KEY,
                sessionStorageKeyName: DEFAULT_SESSION_STORAGE_KEY,
                keys: {},
            },
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = metaReducersFactory;
    var StateModule = /** @class */ (function () {
        function StateModule() {
        }
        StateModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1$2.StoreModule.forRoot({}),
                            effects.EffectsModule.forRoot([]),
                            ConfigModule.withConfig(defaultStateConfig),
                        ],
                        providers: __spread(stateMetaReducers, [
                            {
                                provide: i1$2.META_REDUCERS,
                                useFactory: ɵ0,
                                deps: [[new i0.Optional(), META_REDUCER]],
                            },
                        ]),
                    },] }
        ];
        return StateModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserTokenEffects = /** @class */ (function () {
        function UserTokenEffects(actions$, userTokenService) {
            var _this = this;
            this.actions$ = actions$;
            this.userTokenService = userTokenService;
            this.loadUserToken$ = this.actions$.pipe(effects.ofType(LOAD_USER_TOKEN), operators.map(function (action) { return action.payload; }), operators.mergeMap(function (_a) {
                var userId = _a.userId, password = _a.password;
                return _this.userTokenService.loadToken(userId, password).pipe(operators.map(function (token) {
                    /** @type {?} */
                    var date = new Date();
                    date.setSeconds(date.getSeconds() + token.expires_in);
                    token.userId = userId;
                    token.expiration_time = date;
                    return new LoadUserTokenSuccess(token);
                }), operators.catchError(function (error) { return rxjs.of(new LoadUserTokenFail(error)); }));
            }));
            this.refreshUserToken$ = this.actions$.pipe(effects.ofType(REFRESH_USER_TOKEN), operators.map(function (action) { return action.payload; }), operators.switchMap(function (_a) {
                var userId = _a.userId, refreshToken = _a.refreshToken;
                return _this.userTokenService.refreshToken(refreshToken).pipe(operators.map(function (token) {
                    token.userId = userId;
                    /** @type {?} */
                    var date = new Date();
                    date.setSeconds(date.getSeconds() + token.expires_in);
                    token.userId = userId;
                    token.expiration_time = date;
                    return new RefreshUserTokenSuccess(token);
                }, operators.catchError(function (error) { return rxjs.of(new RefreshUserTokenFail(error)); })));
            }));
        }
        UserTokenEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        UserTokenEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: UserAuthenticationTokenService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], UserTokenEffects.prototype, "loadUserToken$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], UserTokenEffects.prototype, "refreshUserToken$", void 0);
        return UserTokenEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ClientTokenEffect = /** @class */ (function () {
        function ClientTokenEffect(actions$, clientAuthenticationTokenService) {
            var _this = this;
            this.actions$ = actions$;
            this.clientAuthenticationTokenService = clientAuthenticationTokenService;
            this.loadClientToken$ = this.actions$.pipe(effects.ofType(LOAD_CLIENT_TOKEN), operators.exhaustMap(function () {
                return _this.clientAuthenticationTokenService
                    .loadClientAuthenticationToken()
                    .pipe(operators.map(function (token) {
                    return new LoadClientTokenSuccess(token);
                }), operators.catchError(function (error) { return rxjs.of(new LoadClientTokenFail(error)); }));
            }));
        }
        ClientTokenEffect.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ClientTokenEffect.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: ClientAuthenticationTokenService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], ClientTokenEffect.prototype, "loadClientToken$", void 0);
        return ClientTokenEffect;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var effects$2 = [UserTokenEffects, ClientTokenEffect];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialLoaderState = {
        loading: false,
        error: false,
        success: false,
        value: undefined,
    };
    /**
     * Higher order reducer that adds generic loading flag to chunk of the state
     *
     * Utilizes "loader" meta field of actions to set specific flags for specific
     * action (LOAD, SUCCESS, FAIL, RESET)
     * @template T
     * @param {?} loadActionType
     * @param {?=} reducer
     * @return {?}
     */
    function loaderReducer(loadActionType, reducer) {
        return function (state, action) {
            if (state === void 0) {
                state = initialLoaderState;
            }
            if (action.meta &&
                action.meta.loader &&
                action.meta.entityType === loadActionType) {
                /** @type {?} */
                var entity = action.meta.loader;
                if (entity.load) {
                    return __assign({}, state, { loading: true, value: reducer ? reducer(state.value, action) : state.value });
                }
                else if (entity.error) {
                    return __assign({}, state, { loading: false, error: true, success: false, value: reducer ? reducer(state.value, action) : undefined });
                }
                else if (entity.success) {
                    return __assign({}, state, { value: reducer ? reducer(state.value, action) : action.payload, loading: false, error: false, success: true });
                }
                else {
                    // reset state action
                    return __assign({}, initialLoaderState, { value: reducer
                            ? reducer(initialLoaderState.value, action)
                            : initialLoaderState.value });
                }
            }
            if (reducer) {
                /** @type {?} */
                var newValue = reducer(state.value, action);
                if (newValue !== state.value) {
                    return __assign({}, state, { value: newValue });
                }
            }
            return state;
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$1 = ( /** @type {?} */({}));
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$1(state, action) {
        if (state === void 0) {
            state = initialState$1;
        }
        switch (action.type) {
            case LOAD_USER_TOKEN:
            case REFRESH_USER_TOKEN: {
                return __assign({}, state);
            }
            case LOAD_USER_TOKEN_SUCCESS:
            case REFRESH_USER_TOKEN_SUCCESS: {
                return __assign({}, state, action.payload);
            }
            case LOAD_USER_TOKEN_FAIL:
            case REFRESH_USER_TOKEN_FAIL: {
                return __assign({}, state);
            }
        }
        return state;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function getReducers$1() {
        return {
            userToken: i1$2.combineReducers({ token: reducer$1 }),
            clientToken: loaderReducer(CLIENT_TOKEN_DATA),
        };
    }
    /** @type {?} */
    var reducerToken$1 = new i0.InjectionToken('AuthReducers');
    /** @type {?} */
    var reducerProvider$1 = {
        provide: reducerToken$1,
        useFactory: getReducers$1,
    };
    /**
     * @param {?} reducer
     * @return {?}
     */
    function clearAuthState(reducer) {
        return function (state, action) {
            if (action.type === LOGOUT) {
                state = __assign({}, state, { userToken: undefined });
            }
            return reducer(state, action);
        };
    }
    /** @type {?} */
    var metaReducers = [clearAuthState];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function authStoreConfigFactory() {
        // if we want to reuse AUTH_FEATURE const in config, we have to use factory instead of plain object
        /** @type {?} */
        var config = {
            state: {
                storageSync: {
                    keys: {
                        'auth.userToken.token': StorageSyncType.LOCAL_STORAGE,
                    },
                },
            },
        };
        return config;
    }
    var AuthStoreModule = /** @class */ (function () {
        function AuthStoreModule() {
        }
        AuthStoreModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.CommonModule,
                            i1$1.HttpClientModule,
                            StateModule,
                            i1$2.StoreModule.forFeature(AUTH_FEATURE, reducerToken$1, { metaReducers: metaReducers }),
                            effects.EffectsModule.forFeature(effects$2),
                            ConfigModule.withConfigFactory(authStoreConfigFactory),
                        ],
                        providers: [reducerProvider$1],
                    },] }
        ];
        return AuthStoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthModule = /** @class */ (function () {
        function AuthModule() {
        }
        /**
         * @return {?}
         */
        AuthModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: AuthModule,
                    providers: __spread(interceptors),
                };
            };
        AuthModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.CommonModule,
                            i1$1.HttpClientModule,
                            RoutingModule,
                            AuthStoreModule,
                            ConfigModule.withConfig(defaultAuthConfig),
                        ],
                        providers: __spread(services, [{ provide: AuthConfig, useExisting: Config }]),
                    },] }
        ];
        return AuthModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthGuard = /** @class */ (function () {
        function AuthGuard(routingService, authService) {
            this.routingService = routingService;
            this.authService = authService;
        }
        /**
         * @param {?} _route
         * @param {?} state
         * @return {?}
         */
        AuthGuard.prototype.canActivate = /**
         * @param {?} _route
         * @param {?} state
         * @return {?}
         */
            function (_route, state) {
                var _this = this;
                return this.authService.getUserToken().pipe(operators.map(function (token) {
                    if (!token.access_token) {
                        _this.routingService.go({ route: 'login' });
                        _this.routingService.saveRedirectUrl(state.url);
                    }
                    return !!token.access_token;
                }));
            };
        AuthGuard.GUARD_NAME = 'AuthGuard';
        AuthGuard.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        AuthGuard.ctorParameters = function () {
            return [
                { type: RoutingService },
                { type: AuthService }
            ];
        };
        /** @nocollapse */ AuthGuard.ngInjectableDef = i0.defineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(i0.inject(RoutingService), i0.inject(AuthService)); }, token: AuthGuard, providedIn: "root" });
        return AuthGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NotAuthGuard = /** @class */ (function () {
        function NotAuthGuard(routingService, authService) {
            this.routingService = routingService;
            this.authService = authService;
        }
        /**
         * @return {?}
         */
        NotAuthGuard.prototype.canActivate = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.authService.getUserToken().pipe(operators.map(function (token) {
                    if (token.access_token) {
                        _this.routingService.go({ route: 'home' });
                    }
                    return !token.access_token;
                }));
            };
        NotAuthGuard.GUARD_NAME = 'NotAuthGuard';
        NotAuthGuard.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        NotAuthGuard.ctorParameters = function () {
            return [
                { type: RoutingService },
                { type: AuthService }
            ];
        };
        /** @nocollapse */ NotAuthGuard.ngInjectableDef = i0.defineInjectable({ factory: function NotAuthGuard_Factory() { return new NotAuthGuard(i0.inject(RoutingService), i0.inject(AuthService)); }, token: NotAuthGuard, providedIn: "root" });
        return NotAuthGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CART_FEATURE = 'cart';
    /** @type {?} */
    var CART_DATA = '[Cart] Cart Data';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CREATE_CART = '[Cart] Create Cart';
    /** @type {?} */
    var CREATE_CART_FAIL = '[Cart] Create Cart Fail';
    /** @type {?} */
    var CREATE_CART_SUCCESS = '[Cart] Create Cart Success';
    /** @type {?} */
    var LOAD_CART = '[Cart] Load Cart';
    /** @type {?} */
    var LOAD_CART_FAIL = '[Cart] Load Cart Fail';
    /** @type {?} */
    var LOAD_CART_SUCCESS = '[Cart] Load Cart Success';
    /** @type {?} */
    var MERGE_CART = '[Cart] Merge Cart';
    /** @type {?} */
    var MERGE_CART_SUCCESS = '[Cart] Merge Cart Success';
    var CreateCart = /** @class */ (function (_super) {
        __extends(CreateCart, _super);
        function CreateCart(payload) {
            var _this = _super.call(this, CART_DATA) || this;
            _this.payload = payload;
            _this.type = CREATE_CART;
            return _this;
        }
        return CreateCart;
    }(LoaderLoadAction));
    var CreateCartFail = /** @class */ (function (_super) {
        __extends(CreateCartFail, _super);
        function CreateCartFail(payload) {
            var _this = _super.call(this, CART_DATA, payload) || this;
            _this.payload = payload;
            _this.type = CREATE_CART_FAIL;
            return _this;
        }
        return CreateCartFail;
    }(LoaderFailAction));
    var CreateCartSuccess = /** @class */ (function (_super) {
        __extends(CreateCartSuccess, _super);
        function CreateCartSuccess(payload) {
            var _this = _super.call(this, CART_DATA) || this;
            _this.payload = payload;
            _this.type = CREATE_CART_SUCCESS;
            return _this;
        }
        return CreateCartSuccess;
    }(LoaderSuccessAction));
    var LoadCart = /** @class */ (function (_super) {
        __extends(LoadCart, _super);
        function LoadCart(payload) {
            var _this = _super.call(this, CART_DATA) || this;
            _this.payload = payload;
            _this.type = LOAD_CART;
            return _this;
        }
        return LoadCart;
    }(LoaderLoadAction));
    var LoadCartFail = /** @class */ (function (_super) {
        __extends(LoadCartFail, _super);
        function LoadCartFail(payload) {
            var _this = _super.call(this, CART_DATA, payload) || this;
            _this.payload = payload;
            _this.type = LOAD_CART_FAIL;
            return _this;
        }
        return LoadCartFail;
    }(LoaderFailAction));
    var LoadCartSuccess = /** @class */ (function (_super) {
        __extends(LoadCartSuccess, _super);
        function LoadCartSuccess(payload) {
            var _this = _super.call(this, CART_DATA) || this;
            _this.payload = payload;
            _this.type = LOAD_CART_SUCCESS;
            return _this;
        }
        return LoadCartSuccess;
    }(LoaderSuccessAction));
    var MergeCart = /** @class */ (function () {
        function MergeCart(payload) {
            this.payload = payload;
            this.type = MERGE_CART;
        }
        return MergeCart;
    }());
    var MergeCartSuccess = /** @class */ (function () {
        function MergeCartSuccess() {
            this.type = MERGE_CART_SUCCESS;
        }
        return MergeCartSuccess;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ADD_ENTRY = '[Cart-entry] Add Entry';
    /** @type {?} */
    var ADD_ENTRY_SUCCESS = '[Cart-entry] Add Entry Success';
    /** @type {?} */
    var ADD_ENTRY_FAIL = '[Cart-entry] Add Entry Fail';
    /** @type {?} */
    var REMOVE_ENTRY = '[Cart-entry] Remove Entry';
    /** @type {?} */
    var REMOVE_ENTRY_SUCCESS = '[Cart-entry] Remove Entry Success';
    /** @type {?} */
    var REMOVE_ENTRY_FAIL = '[Cart-entry] Remove Entry Fail';
    /** @type {?} */
    var UPDATE_ENTRY = '[Cart-entry] Update Entry';
    /** @type {?} */
    var UPDATE_ENTRY_SUCCESS = '[Cart-entry] Update Entry Success';
    /** @type {?} */
    var UPDATE_ENTRY_FAIL = '[Cart-entry] Update Entry Fail';
    var AddEntry = /** @class */ (function (_super) {
        __extends(AddEntry, _super);
        function AddEntry(payload) {
            var _this = _super.call(this, CART_DATA) || this;
            _this.payload = payload;
            _this.type = ADD_ENTRY;
            return _this;
        }
        return AddEntry;
    }(LoaderLoadAction));
    var AddEntrySuccess = /** @class */ (function (_super) {
        __extends(AddEntrySuccess, _super);
        function AddEntrySuccess(payload) {
            var _this = _super.call(this, CART_DATA) || this;
            _this.payload = payload;
            _this.type = ADD_ENTRY_SUCCESS;
            return _this;
        }
        return AddEntrySuccess;
    }(LoaderSuccessAction));
    var AddEntryFail = /** @class */ (function (_super) {
        __extends(AddEntryFail, _super);
        function AddEntryFail(payload) {
            var _this = _super.call(this, CART_DATA, payload) || this;
            _this.payload = payload;
            _this.type = ADD_ENTRY_FAIL;
            return _this;
        }
        return AddEntryFail;
    }(LoaderFailAction));
    var RemoveEntry = /** @class */ (function (_super) {
        __extends(RemoveEntry, _super);
        function RemoveEntry(payload) {
            var _this = _super.call(this, CART_DATA) || this;
            _this.payload = payload;
            _this.type = REMOVE_ENTRY;
            return _this;
        }
        return RemoveEntry;
    }(LoaderLoadAction));
    var RemoveEntrySuccess = /** @class */ (function (_super) {
        __extends(RemoveEntrySuccess, _super);
        function RemoveEntrySuccess() {
            var _this = _super.call(this, CART_DATA) || this;
            _this.type = REMOVE_ENTRY_SUCCESS;
            return _this;
        }
        return RemoveEntrySuccess;
    }(LoaderSuccessAction));
    var RemoveEntryFail = /** @class */ (function (_super) {
        __extends(RemoveEntryFail, _super);
        function RemoveEntryFail(payload) {
            var _this = _super.call(this, CART_DATA, payload) || this;
            _this.payload = payload;
            _this.type = REMOVE_ENTRY_FAIL;
            return _this;
        }
        return RemoveEntryFail;
    }(LoaderFailAction));
    var UpdateEntry = /** @class */ (function (_super) {
        __extends(UpdateEntry, _super);
        function UpdateEntry(payload) {
            var _this = _super.call(this, CART_DATA) || this;
            _this.payload = payload;
            _this.type = UPDATE_ENTRY;
            return _this;
        }
        return UpdateEntry;
    }(LoaderLoadAction));
    var UpdateEntrySuccess = /** @class */ (function (_super) {
        __extends(UpdateEntrySuccess, _super);
        function UpdateEntrySuccess() {
            var _this = _super.call(this, CART_DATA) || this;
            _this.type = UPDATE_ENTRY_SUCCESS;
            return _this;
        }
        return UpdateEntrySuccess;
    }(LoaderSuccessAction));
    var UpdateEntryFail = /** @class */ (function (_super) {
        __extends(UpdateEntryFail, _super);
        function UpdateEntryFail(payload) {
            var _this = _super.call(this, CART_DATA, payload) || this;
            _this.payload = payload;
            _this.type = UPDATE_ENTRY_FAIL;
            return _this;
        }
        return UpdateEntryFail;
    }(LoaderFailAction));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     * @param {?} state
     * @return {?}
     */
    function loaderValueSelector(state) {
        return state.value;
    }
    /**
     * @template T
     * @param {?} state
     * @return {?}
     */
    function loaderLoadingSelector(state) {
        return state.loading;
    }
    /**
     * @template T
     * @param {?} state
     * @return {?}
     */
    function loaderErrorSelector(state) {
        return state.error;
    }
    /**
     * @template T
     * @param {?} state
     * @return {?}
     */
    function loaderSuccessSelector(state) {
        return state.success;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getCartContentSelector = function (state) { return state.content; };
    /** @type {?} */
    var getRefreshSelector = function (state) { return state.refresh; };
    /** @type {?} */
    var getEntriesSelector = function (state) { return state.entries; };
    /** @type {?} */
    var getCartMergeCompleteSelector = function (state) {
        return state.cartMergeComplete;
    };
    /** @type {?} */
    var getCartsState = i1$2.createFeatureSelector(CART_FEATURE);
    /** @type {?} */
    var getActiveCartState = i1$2.createSelector(getCartsState, function (cartsState) { return cartsState.active; });
    /** @type {?} */
    var getCartState = i1$2.createSelector(getActiveCartState, function (state) { return loaderValueSelector(state); });
    /** @type {?} */
    var getCartContent = i1$2.createSelector(getCartState, getCartContentSelector);
    /** @type {?} */
    var getRefresh = i1$2.createSelector(getCartState, getRefreshSelector);
    /** @type {?} */
    var getLoaded = i1$2.createSelector(getActiveCartState, function (state) {
        return loaderSuccessSelector(state) &&
            !loaderLoadingSelector(state) &&
            !loaderValueSelector(state).refresh;
    });
    /** @type {?} */
    var getCartMergeComplete = i1$2.createSelector(getCartState, getCartMergeCompleteSelector);
    /** @type {?} */
    var getEntriesMap = i1$2.createSelector(getCartState, getEntriesSelector);
    /** @type {?} */
    var getEntrySelectorFactory = function (productCode) {
        return i1$2.createSelector(getEntriesMap, function (entries) {
            if (entries) {
                return entries[productCode];
            }
        });
    };
    /** @type {?} */
    var getEntries = i1$2.createSelector(getEntriesMap, function (entities) {
        return Object.keys(entities).map(function (code) { return entities[code]; });
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ANONYMOUS_USERID = 'anonymous';
    var CartDataService = /** @class */ (function () {
        function CartDataService() {
            this._userId = ANONYMOUS_USERID;
            this._getDetails = false;
        }
        Object.defineProperty(CartDataService.prototype, "hasCart", {
            get: /**
             * @return {?}
             */ function () {
                return !!this._cart;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CartDataService.prototype, "userId", {
            get: /**
             * @return {?}
             */ function () {
                return this._userId;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._userId = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CartDataService.prototype, "cart", {
            get: /**
             * @return {?}
             */ function () {
                return this._cart;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._cart = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CartDataService.prototype, "getDetails", {
            get: /**
             * @return {?}
             */ function () {
                return this._getDetails;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._getDetails = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CartDataService.prototype, "cartId", {
            get: /**
             * @return {?}
             */ function () {
                if (this.hasCart) {
                    return this.userId === ANONYMOUS_USERID ? this.cart.guid : this.cart.code;
                }
            },
            enumerable: true,
            configurable: true
        });
        CartDataService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        CartDataService.ctorParameters = function () { return []; };
        return CartDataService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartService = /** @class */ (function () {
        function CartService(store, cartData, authService) {
            this.store = store;
            this.cartData = cartData;
            this.authService = authService;
            this.init();
        }
        /**
         * @return {?}
         */
        CartService.prototype.getActive = /**
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getCartContent));
            };
        /**
         * @return {?}
         */
        CartService.prototype.getEntries = /**
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getEntries));
            };
        /**
         * @return {?}
         */
        CartService.prototype.getCartMergeComplete = /**
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getCartMergeComplete));
            };
        /**
         * @return {?}
         */
        CartService.prototype.getLoaded = /**
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getLoaded));
            };
        /**
         * @protected
         * @return {?}
         */
        CartService.prototype.init = /**
         * @protected
         * @return {?}
         */
            function () {
                var _this = this;
                this.store.pipe(i1$2.select(getCartContent)).subscribe(function (cart) {
                    _this.cartData.cart = cart;
                    if (_this.callback) {
                        _this.callback();
                        _this.callback = null;
                    }
                });
                this.authService
                    .getUserToken()
                    .pipe(operators.filter(function (userToken) { return _this.cartData.userId !== userToken.userId; }))
                    .subscribe(function (userToken) {
                    _this.setUserId(userToken);
                    _this.loadOrMerge();
                });
                this.refresh();
            };
        /**
         * @protected
         * @param {?} userToken
         * @return {?}
         */
        CartService.prototype.setUserId = /**
         * @protected
         * @param {?} userToken
         * @return {?}
         */
            function (userToken) {
                if (Object.keys(userToken).length !== 0) {
                    this.cartData.userId = userToken.userId;
                }
                else {
                    this.cartData.userId = ANONYMOUS_USERID;
                }
            };
        /**
         * @protected
         * @return {?}
         */
        CartService.prototype.loadOrMerge = /**
         * @protected
         * @return {?}
         */
            function () {
                this.cartData.getDetails = true;
                // for login user, whenever there's an existing cart, we will load the user
                // current cart and merge it into the existing cart
                if (this.cartData.userId !== ANONYMOUS_USERID) {
                    if (!this.isCreated(this.cartData.cart)) {
                        this.store.dispatch(new LoadCart({
                            userId: this.cartData.userId,
                            cartId: 'current',
                        }));
                    }
                    else {
                        this.store.dispatch(new MergeCart({
                            userId: this.cartData.userId,
                            cartId: this.cartData.cart.guid,
                        }));
                    }
                }
            };
        /**
         * @protected
         * @return {?}
         */
        CartService.prototype.refresh = /**
         * @protected
         * @return {?}
         */
            function () {
                var _this = this;
                this.store.pipe(i1$2.select(getRefresh)).subscribe(function (refresh) {
                    if (refresh) {
                        _this.store.dispatch(new LoadCart({
                            userId: _this.cartData.userId,
                            cartId: _this.cartData.cartId,
                            details: true,
                        }));
                    }
                });
            };
        /**
         * @return {?}
         */
        CartService.prototype.loadDetails = /**
         * @return {?}
         */
            function () {
                this.cartData.getDetails = true;
                if (this.cartData.userId !== ANONYMOUS_USERID) {
                    this.store.dispatch(new LoadCart({
                        userId: this.cartData.userId,
                        cartId: this.cartData.cartId ? this.cartData.cartId : 'current',
                        details: true,
                    }));
                }
                else if (this.cartData.cartId) {
                    this.store.dispatch(new LoadCart({
                        userId: this.cartData.userId,
                        cartId: this.cartData.cartId,
                        details: true,
                    }));
                }
            };
        /**
         * @param {?} productCode
         * @param {?} quantity
         * @return {?}
         */
        CartService.prototype.addEntry = /**
         * @param {?} productCode
         * @param {?} quantity
         * @return {?}
         */
            function (productCode, quantity) {
                if (!this.isCreated(this.cartData.cart)) {
                    this.store.dispatch(new CreateCart({ userId: this.cartData.userId }));
                    this.callback = function () {
                        this.store.dispatch(new AddEntry({
                            userId: this.cartData.userId,
                            cartId: this.cartData.cartId,
                            productCode: productCode,
                            quantity: quantity,
                        }));
                    };
                }
                else {
                    this.store.dispatch(new AddEntry({
                        userId: this.cartData.userId,
                        cartId: this.cartData.cartId,
                        productCode: productCode,
                        quantity: quantity,
                    }));
                }
            };
        /**
         * @param {?} entry
         * @return {?}
         */
        CartService.prototype.removeEntry = /**
         * @param {?} entry
         * @return {?}
         */
            function (entry) {
                this.store.dispatch(new RemoveEntry({
                    userId: this.cartData.userId,
                    cartId: this.cartData.cartId,
                    entry: entry.entryNumber,
                }));
            };
        /**
         * @param {?} entryNumber
         * @param {?} quantity
         * @return {?}
         */
        CartService.prototype.updateEntry = /**
         * @param {?} entryNumber
         * @param {?} quantity
         * @return {?}
         */
            function (entryNumber, quantity) {
                if (+quantity > 0) {
                    this.store.dispatch(new UpdateEntry({
                        userId: this.cartData.userId,
                        cartId: this.cartData.cartId,
                        entry: entryNumber,
                        qty: quantity,
                    }));
                }
                else {
                    this.store.dispatch(new RemoveEntry({
                        userId: this.cartData.userId,
                        cartId: this.cartData.cartId,
                        entry: entryNumber,
                    }));
                }
            };
        /**
         * @param {?} productCode
         * @return {?}
         */
        CartService.prototype.getEntry = /**
         * @param {?} productCode
         * @return {?}
         */
            function (productCode) {
                return this.store.pipe(i1$2.select(getEntrySelectorFactory(productCode)));
            };
        /**
         * @param {?} cart
         * @return {?}
         */
        CartService.prototype.isCreated = /**
         * @param {?} cart
         * @return {?}
         */
            function (cart) {
                return cart && !!Object.keys(cart).length;
            };
        /**
         * @param {?} cart
         * @return {?}
         */
        CartService.prototype.isEmpty = /**
         * @param {?} cart
         * @return {?}
         */
            function (cart) {
                return cart && !cart.totalItems;
            };
        CartService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        CartService.ctorParameters = function () {
            return [
                { type: i1$2.Store },
                { type: CartDataService },
                { type: AuthService }
            ];
        };
        return CartService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var services$1 = [CartService, CartDataService];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ CartAdapter = /** @class */ (function () {
        function CartAdapter() {
        }
        return CartAdapter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartConnector = /** @class */ (function () {
        function CartConnector(adapter) {
            this.adapter = adapter;
        }
        /**
         * @param {?} userId
         * @param {?=} details
         * @return {?}
         */
        CartConnector.prototype.loadAll = /**
         * @param {?} userId
         * @param {?=} details
         * @return {?}
         */
            function (userId, details) {
                return this.adapter.loadAll(userId, details);
            };
        /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?=} details
         * @return {?}
         */
        CartConnector.prototype.load = /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?=} details
         * @return {?}
         */
            function (userId, cartId, details) {
                return this.adapter.load(userId, cartId, details);
            };
        /**
         * @param {?} userId
         * @param {?=} oldCartId
         * @param {?=} toMergeCartGuid
         * @return {?}
         */
        CartConnector.prototype.create = /**
         * @param {?} userId
         * @param {?=} oldCartId
         * @param {?=} toMergeCartGuid
         * @return {?}
         */
            function (userId, oldCartId, toMergeCartGuid) {
                return this.adapter.create(userId, oldCartId, toMergeCartGuid);
            };
        CartConnector.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CartConnector.ctorParameters = function () {
            return [
                { type: CartAdapter }
            ];
        };
        /** @nocollapse */ CartConnector.ngInjectableDef = i0.defineInjectable({ factory: function CartConnector_Factory() { return new CartConnector(i0.inject(CartAdapter)); }, token: CartConnector, providedIn: "root" });
        return CartConnector;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CART_NORMALIZER = new i0.InjectionToken('CartNormalizer');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ CartDeliveryAdapter = /** @class */ (function () {
        function CartDeliveryAdapter() {
        }
        return CartDeliveryAdapter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartDeliveryConnector = /** @class */ (function () {
        function CartDeliveryConnector(adapter) {
            this.adapter = adapter;
        }
        /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} address
         * @return {?}
         */
        CartDeliveryConnector.prototype.createAddress = /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} address
         * @return {?}
         */
            function (userId, cartId, address) {
                return this.adapter.createAddress(userId, cartId, address);
            };
        /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} addressId
         * @return {?}
         */
        CartDeliveryConnector.prototype.setAddress = /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} addressId
         * @return {?}
         */
            function (userId, cartId, addressId) {
                return this.adapter.setAddress(userId, cartId, addressId);
            };
        /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} deliveryModeId
         * @return {?}
         */
        CartDeliveryConnector.prototype.setMode = /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} deliveryModeId
         * @return {?}
         */
            function (userId, cartId, deliveryModeId) {
                return this.adapter.setMode(userId, cartId, deliveryModeId);
            };
        /**
         * @param {?} userId
         * @param {?} cartId
         * @return {?}
         */
        CartDeliveryConnector.prototype.getMode = /**
         * @param {?} userId
         * @param {?} cartId
         * @return {?}
         */
            function (userId, cartId) {
                return this.adapter.getMode(userId, cartId);
            };
        /**
         * @param {?} userId
         * @param {?} cartId
         * @return {?}
         */
        CartDeliveryConnector.prototype.getSupportedModes = /**
         * @param {?} userId
         * @param {?} cartId
         * @return {?}
         */
            function (userId, cartId) {
                return this.adapter.getSupportedModes(userId, cartId);
            };
        CartDeliveryConnector.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CartDeliveryConnector.ctorParameters = function () {
            return [
                { type: CartDeliveryAdapter }
            ];
        };
        /** @nocollapse */ CartDeliveryConnector.ngInjectableDef = i0.defineInjectable({ factory: function CartDeliveryConnector_Factory() { return new CartDeliveryConnector(i0.inject(CartDeliveryAdapter)); }, token: CartDeliveryConnector, providedIn: "root" });
        return CartDeliveryConnector;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DELIVERY_ADDRESS_NORMALIZER = new i0.InjectionToken('DeliveryAddressNormalizer');
    /** @type {?} */
    var DELIVERY_ADDRESS_SERIALIZER = new i0.InjectionToken('DeliveryAddressSerializer');
    /** @type {?} */
    var DELIVERY_MODE_NORMALIZER = new i0.InjectionToken('DeliveryModeNormalizer');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ CartEntryAdapter = /** @class */ (function () {
        function CartEntryAdapter() {
        }
        return CartEntryAdapter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartEntryConnector = /** @class */ (function () {
        function CartEntryConnector(adapter) {
            this.adapter = adapter;
        }
        /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} productCode
         * @param {?=} quantity
         * @return {?}
         */
        CartEntryConnector.prototype.add = /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} productCode
         * @param {?=} quantity
         * @return {?}
         */
            function (userId, cartId, productCode, quantity) {
                return this.adapter.add(userId, cartId, productCode, quantity);
            };
        /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} entryNumber
         * @param {?} qty
         * @param {?=} pickupStore
         * @return {?}
         */
        CartEntryConnector.prototype.update = /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} entryNumber
         * @param {?} qty
         * @param {?=} pickupStore
         * @return {?}
         */
            function (userId, cartId, entryNumber, qty, pickupStore) {
                return this.adapter.update(userId, cartId, entryNumber, qty, pickupStore);
            };
        /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} entryNumber
         * @return {?}
         */
        CartEntryConnector.prototype.remove = /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} entryNumber
         * @return {?}
         */
            function (userId, cartId, entryNumber) {
                return this.adapter.remove(userId, cartId, entryNumber);
            };
        CartEntryConnector.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CartEntryConnector.ctorParameters = function () {
            return [
                { type: CartEntryAdapter }
            ];
        };
        /** @nocollapse */ CartEntryConnector.ngInjectableDef = i0.defineInjectable({ factory: function CartEntryConnector_Factory() { return new CartEntryConnector(i0.inject(CartEntryAdapter)); }, token: CartEntryConnector, providedIn: "root" });
        return CartEntryConnector;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CART_MODIFICATION_NORMALIZER = new i0.InjectionToken('CartModificationNormalizer');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ CartPaymentAdapter = /** @class */ (function () {
        function CartPaymentAdapter() {
        }
        return CartPaymentAdapter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartPaymentConnector = /** @class */ (function () {
        function CartPaymentConnector(adapter) {
            this.adapter = adapter;
        }
        /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} paymentDetails
         * @return {?}
         */
        CartPaymentConnector.prototype.create = /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} paymentDetails
         * @return {?}
         */
            function (userId, cartId, paymentDetails) {
                return this.adapter.create(userId, cartId, paymentDetails);
            };
        /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} paymentDetailsId
         * @return {?}
         */
        CartPaymentConnector.prototype.set = /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} paymentDetailsId
         * @return {?}
         */
            function (userId, cartId, paymentDetailsId) {
                return this.adapter.set(userId, cartId, paymentDetailsId);
            };
        CartPaymentConnector.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CartPaymentConnector.ctorParameters = function () {
            return [
                { type: CartPaymentAdapter }
            ];
        };
        /** @nocollapse */ CartPaymentConnector.ngInjectableDef = i0.defineInjectable({ factory: function CartPaymentConnector_Factory() { return new CartPaymentConnector(i0.inject(CartPaymentAdapter)); }, token: CartPaymentConnector, providedIn: "root" });
        return CartPaymentConnector;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CART_PAYMENT_DETAILS_NORMALIZER = new i0.InjectionToken('PaymentDetailsNormalizer');
    /** @type {?} */
    var CART_PAYMENT_DETAILS_SERIALIZER = new i0.InjectionToken('PaymentDetailsSerializer');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConverterService = /** @class */ (function () {
        function ConverterService(injector) {
            this.injector = injector;
            this.converters = new Map();
        }
        /**
         * @private
         * @template S, T
         * @param {?} injectionToken
         * @return {?}
         */
        ConverterService.prototype.getConverters = /**
         * @private
         * @template S, T
         * @param {?} injectionToken
         * @return {?}
         */
            function (injectionToken) {
                if (!this.converters.has(injectionToken)) {
                    /** @type {?} */
                    var converters = this.injector.get(injectionToken, []);
                    if (!Array.isArray(converters)) {
                        console.warn('Converter must be multi-provided, please use "multi: true" for', injectionToken.toString());
                    }
                    this.converters.set(injectionToken, converters);
                }
                return this.converters.get(injectionToken);
            };
        /**
         * Will return true if converters for specified token were provided
         */
        /**
         * Will return true if converters for specified token were provided
         * @template S, T
         * @param {?} injectionToken
         * @return {?}
         */
        ConverterService.prototype.hasConverters = /**
         * Will return true if converters for specified token were provided
         * @template S, T
         * @param {?} injectionToken
         * @return {?}
         */
            function (injectionToken) {
                /** @type {?} */
                var converters = this.getConverters(injectionToken);
                return Array.isArray(converters) && converters.length > 0;
            };
        /**
         * Pipeable operator to apply converter logic in a observable stream
         */
        /**
         * Pipeable operator to apply converter logic in a observable stream
         * @template S, T
         * @param {?} injectionToken
         * @return {?}
         */
        ConverterService.prototype.pipeable = /**
         * Pipeable operator to apply converter logic in a observable stream
         * @template S, T
         * @param {?} injectionToken
         * @return {?}
         */
            function (injectionToken) {
                var _this = this;
                if (this.hasConverters(injectionToken)) {
                    return operators.map(function (model) { return _this.convertSource(model, injectionToken); });
                }
                else {
                    return function (observable) { return ( /** @type {?} */(observable)); };
                }
            };
        /**
         * Pipeable operator to apply converter logic in a observable stream to collection of items
         */
        /**
         * Pipeable operator to apply converter logic in a observable stream to collection of items
         * @template S, T
         * @param {?} injectionToken
         * @return {?}
         */
        ConverterService.prototype.pipeableMany = /**
         * Pipeable operator to apply converter logic in a observable stream to collection of items
         * @template S, T
         * @param {?} injectionToken
         * @return {?}
         */
            function (injectionToken) {
                var _this = this;
                if (this.hasConverters(injectionToken)) {
                    return operators.map(function (model) { return _this.convertMany(model, injectionToken); });
                }
                else {
                    return function (observable) { return ( /** @type {?} */(observable)); };
                }
            };
        /**
         * Apply converter logic specified by injection token to source data
         */
        /**
         * Apply converter logic specified by injection token to source data
         * @template S, T
         * @param {?} source
         * @param {?} injectionToken
         * @return {?}
         */
        ConverterService.prototype.convert = /**
         * Apply converter logic specified by injection token to source data
         * @template S, T
         * @param {?} source
         * @param {?} injectionToken
         * @return {?}
         */
            function (source, injectionToken) {
                if (this.hasConverters(injectionToken)) {
                    return this.convertSource(source, injectionToken);
                }
                else {
                    return ( /** @type {?} */(source));
                }
            };
        /**
         * Apply converter logic specified by injection token to a collection
         */
        /**
         * Apply converter logic specified by injection token to a collection
         * @template S, T
         * @param {?} sources
         * @param {?} injectionToken
         * @return {?}
         */
        ConverterService.prototype.convertMany = /**
         * Apply converter logic specified by injection token to a collection
         * @template S, T
         * @param {?} sources
         * @param {?} injectionToken
         * @return {?}
         */
            function (sources, injectionToken) {
                var _this = this;
                if (this.hasConverters(injectionToken) && Array.isArray(sources)) {
                    return sources.map(function (source) { return _this.convertSource(source, injectionToken); });
                }
                else {
                    return ( /** @type {?} */(sources));
                }
            };
        /**
         * @private
         * @template S, T
         * @param {?} source
         * @param {?} injectionToken
         * @return {?}
         */
        ConverterService.prototype.convertSource = /**
         * @private
         * @template S, T
         * @param {?} source
         * @param {?} injectionToken
         * @return {?}
         */
            function (source, injectionToken) {
                return this.getConverters(injectionToken).reduce(function (target, converter) {
                    return converter.convert(source, target);
                }, ( /** @type {?} */(undefined)));
            };
        ConverterService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        ConverterService.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        /** @nocollapse */ ConverterService.ngInjectableDef = i0.defineInjectable({ factory: function ConverterService_Factory() { return new ConverterService(i0.inject(i0.INJECTOR)); }, token: ConverterService, providedIn: "root" });
        return ConverterService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // for mini cart
    /** @type {?} */
    var BASIC_PARAMS = 'DEFAULT,deliveryItemsQuantity,totalPrice(formattedValue),' +
        'entries(totalPrice(formattedValue),product(images(FULL)))';
    // for cart details page
    /** @type {?} */
    var DETAILS_PARAMS = 'DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,' +
        'entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue)),' +
        'totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(formattedValue),subTotal(formattedValue),' +
        'deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue),pickupItemsQuantity,net,' +
        'appliedVouchers,productDiscounts(formattedValue)';
    var OccCartAdapter = /** @class */ (function () {
        function OccCartAdapter(http, occEndpoints, converter) {
            this.http = http;
            this.occEndpoints = occEndpoints;
            this.converter = converter;
        }
        /**
         * @protected
         * @param {?} userId
         * @return {?}
         */
        OccCartAdapter.prototype.getCartEndpoint = /**
         * @protected
         * @param {?} userId
         * @return {?}
         */
            function (userId) {
                /** @type {?} */
                var cartEndpoint = 'users/' + userId + '/carts/';
                return this.occEndpoints.getEndpoint(cartEndpoint);
            };
        /**
         * @param {?} userId
         * @param {?=} details
         * @return {?}
         */
        OccCartAdapter.prototype.loadAll = /**
         * @param {?} userId
         * @param {?=} details
         * @return {?}
         */
            function (userId, details) {
                /** @type {?} */
                var url = this.getCartEndpoint(userId);
                /** @type {?} */
                var params = details
                    ? new i1$1.HttpParams({
                        fromString: 'fields=carts(' + DETAILS_PARAMS + ',saveTime)',
                    })
                    : new i1$1.HttpParams({
                        fromString: 'fields=carts(' + BASIC_PARAMS + ',saveTime)',
                    });
                return this.http.get(url, { params: params }).pipe(operators.catchError(function (error) { return rxjs.throwError(error); }), operators.pluck('carts'), this.converter.pipeableMany(CART_NORMALIZER));
            };
        /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?=} details
         * @return {?}
         */
        OccCartAdapter.prototype.load = /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?=} details
         * @return {?}
         */
            function (userId, cartId, details) {
                /** @type {?} */
                var url = this.getCartEndpoint(userId) + cartId;
                /** @type {?} */
                var params = details
                    ? new i1$1.HttpParams({
                        fromString: 'fields=' + DETAILS_PARAMS,
                    })
                    : new i1$1.HttpParams({
                        fromString: 'fields=' + BASIC_PARAMS,
                    });
                if (cartId === 'current') {
                    return this.loadAll(userId, details).pipe(operators.map(function (carts) {
                        if (carts) {
                            /** @type {?} */
                            var activeCart = carts.find(function (cart) {
                                return cart['saveTime'] === undefined;
                            });
                            return activeCart;
                        }
                        else {
                            return null;
                        }
                    }));
                }
                else {
                    return this.http.get(url, { params: params }).pipe(operators.catchError(function (error) { return rxjs.throwError(error); }), this.converter.pipeable(CART_NORMALIZER));
                }
            };
        /**
         * @param {?} userId
         * @param {?=} oldCartId
         * @param {?=} toMergeCartGuid
         * @return {?}
         */
        OccCartAdapter.prototype.create = /**
         * @param {?} userId
         * @param {?=} oldCartId
         * @param {?=} toMergeCartGuid
         * @return {?}
         */
            function (userId, oldCartId, toMergeCartGuid) {
                /** @type {?} */
                var url = this.getCartEndpoint(userId);
                /** @type {?} */
                var toAdd = JSON.stringify({});
                /** @type {?} */
                var queryString = 'fields=' + BASIC_PARAMS;
                if (oldCartId) {
                    queryString = queryString + '&oldCartId=' + oldCartId;
                }
                if (toMergeCartGuid) {
                    queryString = queryString + '&toMergeCartGuid=' + toMergeCartGuid;
                }
                /** @type {?} */
                var params = new i1$1.HttpParams({
                    fromString: queryString,
                });
                return this.http.post(url, toAdd, { params: params }).pipe(this.converter.pipeable(CART_NORMALIZER), operators.catchError(function (error) { return rxjs.throwError(error.json()); }));
            };
        OccCartAdapter.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        OccCartAdapter.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: OccEndpointsService },
                { type: ConverterService }
            ];
        };
        return OccCartAdapter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OccCartDeliveryAdapter = /** @class */ (function () {
        function OccCartDeliveryAdapter(http, occEndpoints, converter) {
            this.http = http;
            this.occEndpoints = occEndpoints;
            this.converter = converter;
        }
        /**
         * @protected
         * @param {?} userId
         * @return {?}
         */
        OccCartDeliveryAdapter.prototype.getCartEndpoint = /**
         * @protected
         * @param {?} userId
         * @return {?}
         */
            function (userId) {
                /** @type {?} */
                var cartEndpoint = 'users/' + userId + '/carts/';
                return this.occEndpoints.getEndpoint(cartEndpoint);
            };
        /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} address
         * @return {?}
         */
        OccCartDeliveryAdapter.prototype.createAddress = /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} address
         * @return {?}
         */
            function (userId, cartId, address) {
                address = this.converter.convert(address, DELIVERY_ADDRESS_SERIALIZER);
                return this.http
                    .post(this.getCartEndpoint(userId) + cartId + '/addresses/delivery', address, {
                    headers: new i1$1.HttpHeaders().set('Content-Type', 'application/json'),
                })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error.json()); }), this.converter.pipeable(DELIVERY_ADDRESS_NORMALIZER));
            };
        /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} addressId
         * @return {?}
         */
        OccCartDeliveryAdapter.prototype.setAddress = /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} addressId
         * @return {?}
         */
            function (userId, cartId, addressId) {
                return this.http
                    .put(this.getCartEndpoint(userId) + cartId + '/addresses/delivery', {}, {
                    params: { addressId: addressId },
                })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error.json()); }));
            };
        /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} deliveryModeId
         * @return {?}
         */
        OccCartDeliveryAdapter.prototype.setMode = /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} deliveryModeId
         * @return {?}
         */
            function (userId, cartId, deliveryModeId) {
                return this.http
                    .put(this.getCartEndpoint(userId) + cartId + '/deliverymode', {}, {
                    params: { deliveryModeId: deliveryModeId },
                })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error.json()); }));
            };
        /**
         * @param {?} userId
         * @param {?} cartId
         * @return {?}
         */
        OccCartDeliveryAdapter.prototype.getMode = /**
         * @param {?} userId
         * @param {?} cartId
         * @return {?}
         */
            function (userId, cartId) {
                return this.http
                    .get(this.getCartEndpoint(userId) + cartId + '/deliverymode')
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error.json()); }), this.converter.pipeable(DELIVERY_MODE_NORMALIZER));
            };
        /**
         * @param {?} userId
         * @param {?} cartId
         * @return {?}
         */
        OccCartDeliveryAdapter.prototype.getSupportedModes = /**
         * @param {?} userId
         * @param {?} cartId
         * @return {?}
         */
            function (userId, cartId) {
                return this.http
                    .get(this.getCartEndpoint(userId) + cartId + '/deliverymodes')
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error.json()); }), operators.pluck('deliveryModes'), this.converter.pipeableMany(DELIVERY_MODE_NORMALIZER));
            };
        OccCartDeliveryAdapter.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        OccCartDeliveryAdapter.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: OccEndpointsService },
                { type: ConverterService }
            ];
        };
        return OccCartDeliveryAdapter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OccCartEntryAdapter = /** @class */ (function () {
        function OccCartEntryAdapter(http, occEndpoints, converter) {
            this.http = http;
            this.occEndpoints = occEndpoints;
            this.converter = converter;
        }
        /**
         * @protected
         * @param {?} userId
         * @return {?}
         */
        OccCartEntryAdapter.prototype.getCartEndpoint = /**
         * @protected
         * @param {?} userId
         * @return {?}
         */
            function (userId) {
                /** @type {?} */
                var cartEndpoint = 'users/' + userId + '/carts/';
                return this.occEndpoints.getEndpoint(cartEndpoint);
            };
        /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} productCode
         * @param {?=} quantity
         * @return {?}
         */
        OccCartEntryAdapter.prototype.add = /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} productCode
         * @param {?=} quantity
         * @return {?}
         */
            function (userId, cartId, productCode, quantity) {
                if (quantity === void 0) {
                    quantity = 1;
                }
                /** @type {?} */
                var toAdd = JSON.stringify({});
                /** @type {?} */
                var url = this.getCartEndpoint(userId) + cartId + '/entries';
                /** @type {?} */
                var params = new i1$1.HttpParams({
                    fromString: 'code=' + productCode + '&qty=' + quantity,
                });
                /** @type {?} */
                var headers = new i1$1.HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded',
                });
                return this.http
                    .post(url, toAdd, { headers: headers, params: params })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error.json()); }), this.converter.pipeable(CART_MODIFICATION_NORMALIZER));
            };
        /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} entryNumber
         * @param {?} qty
         * @param {?=} pickupStore
         * @return {?}
         */
        OccCartEntryAdapter.prototype.update = /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} entryNumber
         * @param {?} qty
         * @param {?=} pickupStore
         * @return {?}
         */
            function (userId, cartId, entryNumber, qty, pickupStore) {
                /** @type {?} */
                var url = this.getCartEndpoint(userId) + cartId + '/entries/' + entryNumber;
                /** @type {?} */
                var queryString = 'qty=' + qty;
                if (pickupStore) {
                    queryString = queryString + '&pickupStore=' + pickupStore;
                }
                /** @type {?} */
                var params = new i1$1.HttpParams({
                    fromString: queryString,
                });
                /** @type {?} */
                var headers = new i1$1.HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded',
                });
                return this.http.patch(url, {}, { headers: headers, params: params }).pipe(operators.catchError(function (error) { return rxjs.throwError(error.json()); }), this.converter.pipeable(CART_MODIFICATION_NORMALIZER));
            };
        /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} entryNumber
         * @return {?}
         */
        OccCartEntryAdapter.prototype.remove = /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} entryNumber
         * @return {?}
         */
            function (userId, cartId, entryNumber) {
                /** @type {?} */
                var url = this.getCartEndpoint(userId) + cartId + '/entries/' + entryNumber;
                /** @type {?} */
                var headers = new i1$1.HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded',
                });
                return this.http
                    .delete(url, { headers: headers })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error.json()); }));
            };
        OccCartEntryAdapter.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        OccCartEntryAdapter.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: OccEndpointsService },
                { type: ConverterService }
            ];
        };
        return OccCartEntryAdapter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomEncoder = /** @class */ (function () {
        function CustomEncoder() {
        }
        /**
         * @param {?} key
         * @return {?}
         */
        CustomEncoder.prototype.encodeKey = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                return encodeURIComponent(key);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        CustomEncoder.prototype.encodeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return encodeURIComponent(value);
            };
        /**
         * @param {?} key
         * @return {?}
         */
        CustomEncoder.prototype.decodeKey = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                return decodeURIComponent(key);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        CustomEncoder.prototype.decodeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return decodeURIComponent(value);
            };
        return CustomEncoder;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OccCartPaymentAdapter = /** @class */ (function () {
        function OccCartPaymentAdapter(http, occEndpoints, converter) {
            this.http = http;
            this.occEndpoints = occEndpoints;
            this.converter = converter;
            if (typeof DOMParser !== 'undefined') {
                this.domparser = new DOMParser();
            }
        }
        /**
         * @protected
         * @param {?} userId
         * @return {?}
         */
        OccCartPaymentAdapter.prototype.getCartEndpoint = /**
         * @protected
         * @param {?} userId
         * @return {?}
         */
            function (userId) {
                /** @type {?} */
                var cartEndpoint = 'users/' + userId + '/carts/';
                return this.occEndpoints.getEndpoint(cartEndpoint);
            };
        /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} paymentDetails
         * @return {?}
         */
        OccCartPaymentAdapter.prototype.create = /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} paymentDetails
         * @return {?}
         */
            function (userId, cartId, paymentDetails) {
                var _this = this;
                paymentDetails = this.converter.convert(paymentDetails, CART_PAYMENT_DETAILS_SERIALIZER);
                return this.getProviderSubInfo(userId, cartId).pipe(operators.map(function (data) {
                    /** @type {?} */
                    var labelsMap = _this.convertToMap(data.mappingLabels.entry);
                    return {
                        url: data.postUrl,
                        parameters: _this.getParamsForPaymentProvider(paymentDetails, data.parameters.entry, labelsMap),
                        mappingLabels: labelsMap,
                    };
                }), operators.mergeMap(function (sub) {
                    // create a subscription directly with payment provider
                    return _this.createSubWithProvider(sub.url, sub.parameters).pipe(operators.map(function (response) { return _this.extractPaymentDetailsFromHtml(response); }), operators.mergeMap(function (fromPaymentProvider) {
                        if (!fromPaymentProvider['hasError']) {
                            // consume response from payment provider and creates payment details
                            return _this.createDetailsWithParameters(userId, cartId, _this.getPaymentSopResponseParams(paymentDetails, fromPaymentProvider, sub.mappingLabels)).pipe(_this.converter.pipeable(CART_PAYMENT_DETAILS_NORMALIZER));
                        }
                        else {
                            return rxjs.throwError(fromPaymentProvider);
                        }
                    }));
                }));
            };
        /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} paymentDetailsId
         * @return {?}
         */
        OccCartPaymentAdapter.prototype.set = /**
         * @param {?} userId
         * @param {?} cartId
         * @param {?} paymentDetailsId
         * @return {?}
         */
            function (userId, cartId, paymentDetailsId) {
                return this.http
                    .put(this.getCartEndpoint(userId) + cartId + '/paymentdetails', {}, {
                    params: { paymentDetailsId: paymentDetailsId },
                })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error.json()); }));
            };
        /**
         * @protected
         * @param {?} userId
         * @param {?} cartId
         * @return {?}
         */
        OccCartPaymentAdapter.prototype.getProviderSubInfo = /**
         * @protected
         * @param {?} userId
         * @param {?} cartId
         * @return {?}
         */
            function (userId, cartId) {
                return this.http
                    .get(this.getCartEndpoint(userId) +
                    cartId +
                    '/payment/sop/request?responseUrl=sampleUrl')
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error.json()); }));
            };
        /**
         * @private
         * @param {?} postUrl
         * @param {?} parameters
         * @return {?}
         */
        OccCartPaymentAdapter.prototype.createSubWithProvider = /**
         * @private
         * @param {?} postUrl
         * @param {?} parameters
         * @return {?}
         */
            function (postUrl, parameters) {
                /** @type {?} */
                var headers = new i1$1.HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Accept: 'text/html',
                });
                /** @type {?} */
                var httpParams = new i1$1.HttpParams({ encoder: new CustomEncoder() });
                Object.keys(parameters).forEach(function (key) {
                    httpParams = httpParams.append(key, parameters[key]);
                });
                return this.http.post(postUrl, httpParams, {
                    headers: headers,
                    responseType: 'text',
                });
            };
        /**
         * @protected
         * @param {?} userId
         * @param {?} cartId
         * @param {?} parameters
         * @return {?}
         */
        OccCartPaymentAdapter.prototype.createDetailsWithParameters = /**
         * @protected
         * @param {?} userId
         * @param {?} cartId
         * @param {?} parameters
         * @return {?}
         */
            function (userId, cartId, parameters) {
                /** @type {?} */
                var httpParams = new i1$1.HttpParams({ encoder: new CustomEncoder() });
                Object.keys(parameters).forEach(function (key) {
                    httpParams = httpParams.append(key, parameters[key]);
                });
                /** @type {?} */
                var headers = new i1$1.HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded',
                });
                return this.http
                    .post(this.getCartEndpoint(userId) + cartId + '/payment/sop/response', httpParams, { headers: headers })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error); }));
            };
        /**
         * @private
         * @param {?} paymentDetails
         * @param {?} fromPaymentProvider
         * @param {?} mappingLabels
         * @return {?}
         */
        OccCartPaymentAdapter.prototype.getPaymentSopResponseParams = /**
         * @private
         * @param {?} paymentDetails
         * @param {?} fromPaymentProvider
         * @param {?} mappingLabels
         * @return {?}
         */
            function (paymentDetails, fromPaymentProvider, mappingLabels) {
                /** @type {?} */
                var sopResponseParams = {};
                sopResponseParams['decision'] =
                    fromPaymentProvider[mappingLabels['hybris_sop_decision']];
                sopResponseParams['amount'] =
                    fromPaymentProvider[mappingLabels['hybris_sop_amount']];
                sopResponseParams['currency'] =
                    fromPaymentProvider[mappingLabels['hybris_sop_currency']];
                sopResponseParams['billTo_country'] =
                    fromPaymentProvider[mappingLabels['hybris_billTo_country']];
                sopResponseParams['billTo_firstName'] =
                    fromPaymentProvider[mappingLabels['hybris_billTo_firstname']];
                sopResponseParams['billTo_lastName'] =
                    fromPaymentProvider[mappingLabels['hybris_billTo_lastname']];
                sopResponseParams['billTo_street1'] =
                    fromPaymentProvider[mappingLabels['hybris_billTo_street1']];
                sopResponseParams['billTo_city'] =
                    fromPaymentProvider[mappingLabels['hybris_billTo_city']];
                sopResponseParams['billTo_postalCode'] =
                    fromPaymentProvider[mappingLabels['hybris_billTo_postalcode']];
                sopResponseParams['card_cardType'] = paymentDetails.cardType.code;
                sopResponseParams['card_accountNumber'] =
                    fromPaymentProvider[mappingLabels['hybris_sop_card_number']];
                sopResponseParams['card_expirationMonth'] = paymentDetails.expiryMonth;
                sopResponseParams['card_expirationYear'] = paymentDetails.expiryYear;
                sopResponseParams['card_nameOnCard'] = paymentDetails.accountHolderName;
                sopResponseParams['defaultPayment'] = paymentDetails.defaultPayment;
                sopResponseParams['savePaymentInfo'] = true;
                sopResponseParams['reasonCode'] =
                    fromPaymentProvider[mappingLabels['hybris_sop_reason_code']];
                sopResponseParams['paySubscriptionCreateReply_subscriptionID'] =
                    fromPaymentProvider[mappingLabels['hybris_sop_subscriptionID']];
                if (mappingLabels['hybris_sop_uses_public_signature'] === 'true') {
                    sopResponseParams['paySubscriptionCreateReply_subscriptionIDPublicSignature'] = fromPaymentProvider[mappingLabels['hybris_sop_public_signature']];
                }
                return sopResponseParams;
            };
        /**
         * @private
         * @param {?} paymentDetails
         * @param {?} parameters
         * @param {?} mappingLabels
         * @return {?}
         */
        OccCartPaymentAdapter.prototype.getParamsForPaymentProvider = /**
         * @private
         * @param {?} paymentDetails
         * @param {?} parameters
         * @param {?} mappingLabels
         * @return {?}
         */
            function (paymentDetails, parameters, mappingLabels) {
                /** @type {?} */
                var params = this.convertToMap(parameters);
                params[mappingLabels['hybris_account_holder_name']] =
                    paymentDetails.accountHolderName;
                params[mappingLabels['hybris_card_type']] = paymentDetails.cardType.code;
                params[mappingLabels['hybris_card_number']] = paymentDetails.cardNumber;
                if (mappingLabels['hybris_combined_expiry_date'] === 'true') {
                    params[mappingLabels['hybris_card_expiry_date']] =
                        paymentDetails.expiryMonth +
                            mappingLabels['hybris_separator_expiry_date'] +
                            paymentDetails.expiryYear;
                }
                else {
                    params[mappingLabels['hybris_card_expiration_month']] =
                        paymentDetails.expiryMonth;
                    params[mappingLabels['hybris_card_expiration_year']] =
                        paymentDetails.expiryYear;
                }
                params[mappingLabels['hybris_card_cvn']] = paymentDetails.cvn;
                // billing address
                params[mappingLabels['hybris_billTo_country']] =
                    paymentDetails.billingAddress.country.isocode;
                params[mappingLabels['hybris_billTo_firstname']] =
                    paymentDetails.billingAddress.firstName;
                params[mappingLabels['hybris_billTo_lastname']] =
                    paymentDetails.billingAddress.lastName;
                params[mappingLabels['hybris_billTo_street1']] =
                    paymentDetails.billingAddress.line1 +
                        ' ' +
                        paymentDetails.billingAddress.line2;
                params[mappingLabels['hybris_billTo_city']] =
                    paymentDetails.billingAddress.town;
                params[mappingLabels['hybris_billTo_postalcode']] =
                    paymentDetails.billingAddress.postalCode;
                return params;
            };
        /**
         * @private
         * @param {?} html
         * @return {?}
         */
        OccCartPaymentAdapter.prototype.extractPaymentDetailsFromHtml = /**
         * @private
         * @param {?} html
         * @return {?}
         */
            function (html) {
                /** @type {?} */
                var domdoc = this.domparser.parseFromString(html, 'text/xml');
                /** @type {?} */
                var responseForm = domdoc.getElementsByTagName('form')[0];
                /** @type {?} */
                var inputs = responseForm.getElementsByTagName('input');
                /** @type {?} */
                var values = {};
                for (var i = 0; inputs[i]; i++) {
                    /** @type {?} */
                    var input = inputs[i];
                    if (input.getAttribute('name') !== '{}' &&
                        input.getAttribute('value') !== '') {
                        values[input.getAttribute('name')] = input.getAttribute('value');
                    }
                }
                // rejected for some reason
                if (values['decision'] !== 'ACCEPT') {
                    /** @type {?} */
                    var reason_1 = { hasError: true };
                    Object.keys(values).forEach(function (name) {
                        if (name === 'reasonCode' || name.startsWith('InvalidField')) {
                            reason_1[name] = values[name];
                        }
                    });
                    return reason_1;
                }
                return values;
            };
        /**
         * @private
         * @param {?} paramList
         * @return {?}
         */
        OccCartPaymentAdapter.prototype.convertToMap = /**
         * @private
         * @param {?} paramList
         * @return {?}
         */
            function (paramList) {
                return paramList.reduce(function (result, item) {
                    /** @type {?} */
                    var key = item.key;
                    result[key] = item.value;
                    return result;
                }, {});
            };
        OccCartPaymentAdapter.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        OccCartPaymentAdapter.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: OccEndpointsService },
                { type: ConverterService }
            ];
        };
        return OccCartPaymentAdapter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var defaultOccConfig = {
        site: {
            language: 'en',
            currency: 'USD',
        },
        backend: {
            occ: {
                prefix: '/rest/v2/',
            },
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} config
     * @return {?}
     */
    function occConfigValidator(config) {
        if (config.backend === undefined ||
            config.backend.occ === undefined ||
            config.backend.occ.baseUrl === undefined) {
            return 'Please configure backend.occ.baseUrl before using storefront library!';
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OccModule = /** @class */ (function () {
        function OccModule() {
        }
        OccModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [ConfigModule.withConfig(defaultOccConfig)],
                        providers: [
                            { provide: OccConfig, useExisting: Config },
                            provideConfigValidator(occConfigValidator),
                        ],
                    },] }
        ];
        return OccModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var PRODUCT_NORMALIZER = new i0.InjectionToken('ProductNormalizer');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OccCartNormalizer = /** @class */ (function () {
        function OccCartNormalizer(converter) {
            this.converter = converter;
        }
        /**
         * @param {?} source
         * @param {?=} target
         * @return {?}
         */
        OccCartNormalizer.prototype.convert = /**
         * @param {?} source
         * @param {?=} target
         * @return {?}
         */
            function (source, target) {
                var _this = this;
                if (target === undefined) {
                    target = __assign({}, (( /** @type {?} */(source))));
                }
                if (source && source.entries) {
                    target.entries = source.entries.map(function (entry) { return (__assign({}, entry, { product: _this.converter.convert(entry.product, PRODUCT_NORMALIZER) })); });
                }
                return target;
            };
        OccCartNormalizer.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        OccCartNormalizer.ctorParameters = function () {
            return [
                { type: ConverterService }
            ];
        };
        return OccCartNormalizer;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartOccModule = /** @class */ (function () {
        function CartOccModule() {
        }
        CartOccModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [i1.CommonModule, i1$1.HttpClientModule, OccModule],
                        providers: [
                            {
                                provide: CartAdapter,
                                useClass: OccCartAdapter,
                            },
                            {
                                provide: CART_NORMALIZER,
                                useClass: OccCartNormalizer,
                                multi: true,
                            },
                            {
                                provide: CartDeliveryAdapter,
                                useClass: OccCartDeliveryAdapter,
                            },
                            {
                                provide: CartEntryAdapter,
                                useClass: OccCartEntryAdapter,
                            },
                            {
                                provide: CartPaymentAdapter,
                                useClass: OccCartPaymentAdapter,
                            },
                        ],
                    },] }
        ];
        return CartOccModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ADD_DELIVERY_ADDRESS = '[Checkout] Add Delivery Address';
    /** @type {?} */
    var ADD_DELIVERY_ADDRESS_FAIL = '[Checkout] Add Delivery Address Fail';
    /** @type {?} */
    var ADD_DELIVERY_ADDRESS_SUCCESS = '[Checkout] Add Delivery Address Success';
    /** @type {?} */
    var SET_DELIVERY_ADDRESS = '[Checkout] Set Delivery Address';
    /** @type {?} */
    var SET_DELIVERY_ADDRESS_FAIL = '[Checkout] Set Delivery Address Fail';
    /** @type {?} */
    var SET_DELIVERY_ADDRESS_SUCCESS = '[Checkout] Set Delivery Address Success';
    /** @type {?} */
    var LOAD_SUPPORTED_DELIVERY_MODES = '[Checkout] Load Supported Delivery Modes';
    /** @type {?} */
    var LOAD_SUPPORTED_DELIVERY_MODES_FAIL = '[Checkout] Load Supported Delivery Modes Fail';
    /** @type {?} */
    var LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS = '[Checkout] Load Supported Delivery Modes Success';
    /** @type {?} */
    var CLEAR_SUPPORTED_DELIVERY_MODES = '[Checkout] Clear Supported Delivery Modes';
    /** @type {?} */
    var SET_DELIVERY_MODE = '[Checkout] Set Delivery Mode';
    /** @type {?} */
    var SET_DELIVERY_MODE_FAIL = '[Checkout] Set Delivery Mode Fail';
    /** @type {?} */
    var SET_DELIVERY_MODE_SUCCESS = '[Checkout] Set Delivery Mode Success';
    /** @type {?} */
    var CREATE_PAYMENT_DETAILS = '[Checkout] Create Payment Details';
    /** @type {?} */
    var CREATE_PAYMENT_DETAILS_FAIL = '[Checkout] Create Payment Details Fail';
    /** @type {?} */
    var CREATE_PAYMENT_DETAILS_SUCCESS = '[Checkout] Create Payment Details Success';
    /** @type {?} */
    var SET_PAYMENT_DETAILS = '[Checkout] Set Payment Details';
    /** @type {?} */
    var SET_PAYMENT_DETAILS_FAIL = '[Checkout] Set Payment Details Fail';
    /** @type {?} */
    var SET_PAYMENT_DETAILS_SUCCESS = '[Checkout] Set Payment Details Success';
    /** @type {?} */
    var PLACE_ORDER = '[Checkout] Place Order';
    /** @type {?} */
    var PLACE_ORDER_FAIL = '[Checkout] Place Order Fail';
    /** @type {?} */
    var PLACE_ORDER_SUCCESS = '[Checkout] Place Order Success';
    /** @type {?} */
    var CLEAR_CHECKOUT_STEP = '[Checkout] Clear One Checkout Step';
    /** @type {?} */
    var CLEAR_CHECKOUT_DATA = '[Checkout] Clear Checkout Data';
    var AddDeliveryAddress = /** @class */ (function () {
        function AddDeliveryAddress(payload) {
            this.payload = payload;
            this.type = ADD_DELIVERY_ADDRESS;
        }
        return AddDeliveryAddress;
    }());
    var AddDeliveryAddressFail = /** @class */ (function () {
        function AddDeliveryAddressFail(payload) {
            this.payload = payload;
            this.type = ADD_DELIVERY_ADDRESS_FAIL;
        }
        return AddDeliveryAddressFail;
    }());
    var AddDeliveryAddressSuccess = /** @class */ (function () {
        function AddDeliveryAddressSuccess(payload) {
            this.payload = payload;
            this.type = ADD_DELIVERY_ADDRESS_SUCCESS;
        }
        return AddDeliveryAddressSuccess;
    }());
    var SetDeliveryAddress = /** @class */ (function () {
        function SetDeliveryAddress(payload) {
            this.payload = payload;
            this.type = SET_DELIVERY_ADDRESS;
        }
        return SetDeliveryAddress;
    }());
    var SetDeliveryAddressFail = /** @class */ (function () {
        function SetDeliveryAddressFail(payload) {
            this.payload = payload;
            this.type = SET_DELIVERY_ADDRESS_FAIL;
        }
        return SetDeliveryAddressFail;
    }());
    var SetDeliveryAddressSuccess = /** @class */ (function () {
        function SetDeliveryAddressSuccess(payload) {
            this.payload = payload;
            this.type = SET_DELIVERY_ADDRESS_SUCCESS;
        }
        return SetDeliveryAddressSuccess;
    }());
    var LoadSupportedDeliveryModes = /** @class */ (function () {
        function LoadSupportedDeliveryModes(payload) {
            this.payload = payload;
            this.type = LOAD_SUPPORTED_DELIVERY_MODES;
        }
        return LoadSupportedDeliveryModes;
    }());
    var LoadSupportedDeliveryModesFail = /** @class */ (function () {
        function LoadSupportedDeliveryModesFail(payload) {
            this.payload = payload;
            this.type = LOAD_SUPPORTED_DELIVERY_MODES_FAIL;
        }
        return LoadSupportedDeliveryModesFail;
    }());
    var LoadSupportedDeliveryModesSuccess = /** @class */ (function () {
        function LoadSupportedDeliveryModesSuccess(payload) {
            this.payload = payload;
            this.type = LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS;
        }
        return LoadSupportedDeliveryModesSuccess;
    }());
    var SetDeliveryMode = /** @class */ (function () {
        function SetDeliveryMode(payload) {
            this.payload = payload;
            this.type = SET_DELIVERY_MODE;
        }
        return SetDeliveryMode;
    }());
    var SetDeliveryModeFail = /** @class */ (function () {
        function SetDeliveryModeFail(payload) {
            this.payload = payload;
            this.type = SET_DELIVERY_MODE_FAIL;
        }
        return SetDeliveryModeFail;
    }());
    var SetDeliveryModeSuccess = /** @class */ (function () {
        function SetDeliveryModeSuccess(payload) {
            this.payload = payload;
            this.type = SET_DELIVERY_MODE_SUCCESS;
        }
        return SetDeliveryModeSuccess;
    }());
    var CreatePaymentDetails = /** @class */ (function () {
        function CreatePaymentDetails(payload) {
            this.payload = payload;
            this.type = CREATE_PAYMENT_DETAILS;
        }
        return CreatePaymentDetails;
    }());
    var CreatePaymentDetailsFail = /** @class */ (function () {
        function CreatePaymentDetailsFail(payload) {
            this.payload = payload;
            this.type = CREATE_PAYMENT_DETAILS_FAIL;
        }
        return CreatePaymentDetailsFail;
    }());
    var CreatePaymentDetailsSuccess = /** @class */ (function () {
        function CreatePaymentDetailsSuccess(payload) {
            this.payload = payload;
            this.type = CREATE_PAYMENT_DETAILS_SUCCESS;
        }
        return CreatePaymentDetailsSuccess;
    }());
    var SetPaymentDetails = /** @class */ (function () {
        function SetPaymentDetails(payload) {
            this.payload = payload;
            this.type = SET_PAYMENT_DETAILS;
        }
        return SetPaymentDetails;
    }());
    var SetPaymentDetailsFail = /** @class */ (function () {
        function SetPaymentDetailsFail(payload) {
            this.payload = payload;
            this.type = SET_PAYMENT_DETAILS_FAIL;
        }
        return SetPaymentDetailsFail;
    }());
    var SetPaymentDetailsSuccess = /** @class */ (function () {
        function SetPaymentDetailsSuccess(payload) {
            this.payload = payload;
            this.type = SET_PAYMENT_DETAILS_SUCCESS;
        }
        return SetPaymentDetailsSuccess;
    }());
    var PlaceOrder = /** @class */ (function () {
        function PlaceOrder(payload) {
            this.payload = payload;
            this.type = PLACE_ORDER;
        }
        return PlaceOrder;
    }());
    var PlaceOrderFail = /** @class */ (function () {
        function PlaceOrderFail(payload) {
            this.payload = payload;
            this.type = PLACE_ORDER_FAIL;
        }
        return PlaceOrderFail;
    }());
    var PlaceOrderSuccess = /** @class */ (function () {
        function PlaceOrderSuccess(payload) {
            this.payload = payload;
            this.type = PLACE_ORDER_SUCCESS;
        }
        return PlaceOrderSuccess;
    }());
    var ClearSupportedDeliveryModes = /** @class */ (function () {
        function ClearSupportedDeliveryModes() {
            this.type = CLEAR_SUPPORTED_DELIVERY_MODES;
        }
        return ClearSupportedDeliveryModes;
    }());
    var ClearCheckoutStep = /** @class */ (function () {
        function ClearCheckoutStep(payload) {
            this.payload = payload;
            this.type = CLEAR_CHECKOUT_STEP;
        }
        return ClearCheckoutStep;
    }());
    var ClearCheckoutData = /** @class */ (function () {
        function ClearCheckoutData() {
            this.type = CLEAR_CHECKOUT_DATA;
        }
        return ClearCheckoutData;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$2 = {
        content: {},
        entries: {},
        refresh: false,
        cartMergeComplete: false,
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$2(state, action) {
        if (state === void 0) {
            state = initialState$2;
        }
        switch (action.type) {
            case MERGE_CART: {
                return __assign({}, state, { cartMergeComplete: false });
            }
            case MERGE_CART_SUCCESS: {
                return __assign({}, state, { cartMergeComplete: true, refresh: true });
            }
            case LOAD_CART_SUCCESS:
            case CREATE_CART_SUCCESS: {
                /** @type {?} */
                var content = __assign({}, action.payload);
                /** @type {?} */
                var entries = {};
                if (content.entries) {
                    entries = content.entries.reduce(function (entryMap, entry) {
                        var _a;
                        return __assign({}, entryMap, (_a = {}, _a[entry.product.code] = state.entries[entry.product.code]
                            ? __assign({}, state.entries[entry.product.code], entry) : entry, _a));
                    }, __assign({}, entries));
                    delete content['entries'];
                }
                return __assign({}, state, { content: content,
                    entries: entries, refresh: false });
            }
            case REMOVE_ENTRY_SUCCESS:
            case UPDATE_ENTRY_SUCCESS:
            case ADD_ENTRY_SUCCESS: {
                return __assign({}, state, { refresh: true });
            }
        }
        return state;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function getReducers$2() {
        return {
            active: loaderReducer(CART_DATA, reducer$2),
        };
    }
    /** @type {?} */
    var reducerToken$2 = new i0.InjectionToken('CartReducers');
    /** @type {?} */
    var reducerProvider$2 = {
        provide: reducerToken$2,
        useFactory: getReducers$2,
    };
    /**
     * @param {?} reducer
     * @return {?}
     */
    function clearCartState(reducer$$1) {
        return function (state, action) {
            if (action.type === LOGOUT || action.type === PLACE_ORDER_SUCCESS) {
                state = undefined;
            }
            return reducer$$1(state, action);
        };
    }
    /** @type {?} */
    var metaReducers$1 = [clearCartState];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$3 = {
        entities: null,
        activeLanguage: null,
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$3(state, action) {
        if (state === void 0) {
            state = initialState$3;
        }
        switch (action.type) {
            case LOAD_LANGUAGES_SUCCESS: {
                /** @type {?} */
                var languages = action.payload;
                /** @type {?} */
                var entities = languages.reduce(function (langEntities, language) {
                    var _a;
                    return __assign({}, langEntities, (_a = {}, _a[language.isocode] = language, _a));
                }, __assign({}, state.entities));
                return __assign({}, state, { entities: entities });
            }
            case SET_ACTIVE_LANGUAGE: {
                /** @type {?} */
                var isocode = action.payload;
                return __assign({}, state, { activeLanguage: isocode });
            }
        }
        return state;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOAD_CURRENCIES = '[Site-context] Load Currencies';
    /** @type {?} */
    var LOAD_CURRENCIES_FAIL = '[Site-context] Load Currencies Fail';
    /** @type {?} */
    var LOAD_CURRENCIES_SUCCESS = '[Site-context] Load Currencies Success';
    /** @type {?} */
    var SET_ACTIVE_CURRENCY = '[Site-context] Set Active Currency';
    /** @type {?} */
    var CURRENCY_CHANGE = '[Site-context] Currency Change';
    var LoadCurrencies = /** @class */ (function () {
        function LoadCurrencies() {
            this.type = LOAD_CURRENCIES;
        }
        return LoadCurrencies;
    }());
    var LoadCurrenciesFail = /** @class */ (function () {
        function LoadCurrenciesFail(payload) {
            this.payload = payload;
            this.type = LOAD_CURRENCIES_FAIL;
        }
        return LoadCurrenciesFail;
    }());
    var LoadCurrenciesSuccess = /** @class */ (function () {
        function LoadCurrenciesSuccess(payload) {
            this.payload = payload;
            this.type = LOAD_CURRENCIES_SUCCESS;
        }
        return LoadCurrenciesSuccess;
    }());
    var SetActiveCurrency = /** @class */ (function () {
        function SetActiveCurrency(payload) {
            this.payload = payload;
            this.type = SET_ACTIVE_CURRENCY;
        }
        return SetActiveCurrency;
    }());
    var CurrencyChange = /** @class */ (function () {
        function CurrencyChange() {
            this.type = CURRENCY_CHANGE;
        }
        return CurrencyChange;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$4 = {
        entities: null,
        activeCurrency: null,
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$4(state, action) {
        if (state === void 0) {
            state = initialState$4;
        }
        switch (action.type) {
            case LOAD_CURRENCIES_SUCCESS: {
                /** @type {?} */
                var currencies = action.payload;
                /** @type {?} */
                var entities = currencies.reduce(function (currEntities, currency) {
                    var _a;
                    return __assign({}, currEntities, (_a = {}, _a[currency.isocode] = currency, _a));
                }, __assign({}, state.entities));
                return __assign({}, state, { entities: entities });
            }
            case SET_ACTIVE_CURRENCY: {
                /** @type {?} */
                var isocode = action.payload;
                return __assign({}, state, { activeCurrency: isocode });
            }
        }
        return state;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$5 = '';
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$5(state, action) {
        if (state === void 0) {
            state = initialState$5;
        }
        switch (action.type) {
            case SET_ACTIVE_BASE_SITE: {
                return action.payload;
            }
        }
        return state;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function getReducers$3() {
        return {
            languages: reducer$3,
            currencies: reducer$4,
            baseSite: reducer$5,
        };
    }
    /** @type {?} */
    var reducerToken$3 = new i0.InjectionToken('SiteContextReducers');
    /** @type {?} */
    var reducerProvider$3 = {
        provide: reducerToken$3,
        useFactory: getReducers$3,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OccSiteService = /** @class */ (function () {
        function OccSiteService(http, occEndpoints) {
            this.http = http;
            this.occEndpoints = occEndpoints;
        }
        /**
         * @return {?}
         */
        OccSiteService.prototype.loadLanguages = /**
         * @return {?}
         */
            function () {
                return this.http
                    .get(this.occEndpoints.getEndpoint('languages'))
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error.json()); }));
            };
        /**
         * @return {?}
         */
        OccSiteService.prototype.loadCurrencies = /**
         * @return {?}
         */
            function () {
                return this.http
                    .get(this.occEndpoints.getEndpoint('currencies'))
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error.json()); }));
            };
        OccSiteService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        OccSiteService.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: OccEndpointsService }
            ];
        };
        /** @nocollapse */ OccSiteService.ngInjectableDef = i0.defineInjectable({ factory: function OccSiteService_Factory() { return new OccSiteService(i0.inject(i1$1.HttpClient), i0.inject(OccEndpointsService)); }, token: OccSiteService, providedIn: "root" });
        return OccSiteService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LanguagesEffects = /** @class */ (function () {
        function LanguagesEffects(actions$, occSiteService, winRef) {
            var _this = this;
            this.actions$ = actions$;
            this.occSiteService = occSiteService;
            this.winRef = winRef;
            this.loadLanguages$ = this.actions$.pipe(effects.ofType(LOAD_LANGUAGES), operators.exhaustMap(function () {
                return _this.occSiteService.loadLanguages().pipe(operators.map(function (data) { return new LoadLanguagesSuccess(data.languages); }), operators.catchError(function (error) { return rxjs.of(new LoadLanguagesFail(error)); }));
            }));
            this.activateLanguage$ = this.actions$.pipe(effects.ofType(SET_ACTIVE_LANGUAGE), operators.tap(function (action) {
                if (_this.winRef.sessionStorage) {
                    _this.winRef.sessionStorage.setItem('language', action.payload);
                }
            }), operators.map(function () { return new LanguageChange(); }));
        }
        LanguagesEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        LanguagesEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: OccSiteService },
                { type: WindowRef }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], LanguagesEffects.prototype, "loadLanguages$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], LanguagesEffects.prototype, "activateLanguage$", void 0);
        return LanguagesEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CurrenciesEffects = /** @class */ (function () {
        function CurrenciesEffects(actions$, occSiteService, winRef) {
            var _this = this;
            this.actions$ = actions$;
            this.occSiteService = occSiteService;
            this.winRef = winRef;
            this.loadCurrencies$ = this.actions$.pipe(effects.ofType(LOAD_CURRENCIES), operators.exhaustMap(function () {
                return _this.occSiteService.loadCurrencies().pipe(operators.map(function (data) { return new LoadCurrenciesSuccess(data.currencies); }), operators.catchError(function (error) { return rxjs.of(new LoadCurrenciesFail(error)); }));
            }));
            this.activateCurrency$ = this.actions$.pipe(effects.ofType(SET_ACTIVE_CURRENCY), operators.tap(function (action) {
                if (_this.winRef.sessionStorage) {
                    _this.winRef.sessionStorage.setItem('currency', action.payload);
                }
            }), operators.map(function () { return new CurrencyChange(); }));
        }
        CurrenciesEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        CurrenciesEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: OccSiteService },
                { type: WindowRef }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], CurrenciesEffects.prototype, "loadCurrencies$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], CurrenciesEffects.prototype, "activateCurrency$", void 0);
        return CurrenciesEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var effects$3 = [LanguagesEffects, CurrenciesEffects];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var activeLanguageSelector = function (state) { return state.activeLanguage; };
    /** @type {?} */
    var languagesEntitiesSelector = function (state) { return state.entities; };
    /** @type {?} */
    var getLanguagesState = i1$2.createSelector(getSiteContextState, function (state) { return state.languages; });
    /** @type {?} */
    var getLanguagesEntities = i1$2.createSelector(getLanguagesState, languagesEntitiesSelector);
    /** @type {?} */
    var getActiveLanguage = i1$2.createSelector(getLanguagesState, activeLanguageSelector);
    /** @type {?} */
    var getAllLanguages = i1$2.createSelector(getLanguagesEntities, function (entities) {
        return entities
            ? Object.keys(entities).map(function (isocode) { return entities[isocode]; })
            : null;
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var currenciesEntitiesSelector = function (state) { return state.entities; };
    /** @type {?} */
    var activeCurrencySelector = function (state) { return state.activeCurrency; };
    /** @type {?} */
    var getCurrenciesState = i1$2.createSelector(getSiteContextState, function (state) { return state.currencies; });
    /** @type {?} */
    var getCurrenciesEntities = i1$2.createSelector(getCurrenciesState, currenciesEntitiesSelector);
    /** @type {?} */
    var getActiveCurrency = i1$2.createSelector(getCurrenciesState, activeCurrencySelector);
    /** @type {?} */
    var getAllCurrencies = i1$2.createSelector(getCurrenciesEntities, function (entities) {
        return entities
            ? Object.keys(entities).map(function (isocode) { return entities[isocode]; })
            : null;
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Facade that provides easy access to language state, actions and selectors.
     */
    var LanguageService = /** @class */ (function () {
        function LanguageService(store, winRef) {
            this.store = store;
            this.sessionStorage = winRef.sessionStorage;
        }
        /**
         * Represents all the languages supported by the current store.
         */
        /**
         * Represents all the languages supported by the current store.
         * @return {?}
         */
        LanguageService.prototype.getAll = /**
         * Represents all the languages supported by the current store.
         * @return {?}
         */
            function () {
                var _this = this;
                return this.store.pipe(i1$2.select(getAllLanguages), operators.tap(function (languages) {
                    if (!languages) {
                        _this.store.dispatch(new LoadLanguages());
                    }
                }), operators.filter(Boolean));
            };
        /**
         * Represents the isocode of the active language.
         */
        /**
         * Represents the isocode of the active language.
         * @return {?}
         */
        LanguageService.prototype.getActive = /**
         * Represents the isocode of the active language.
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getActiveLanguage), operators.filter(Boolean));
            };
        /**
         * Sets the active language.
         */
        /**
         * Sets the active language.
         * @param {?} isocode
         * @return {?}
         */
        LanguageService.prototype.setActive = /**
         * Sets the active language.
         * @param {?} isocode
         * @return {?}
         */
            function (isocode) {
                var _this = this;
                return this.store
                    .pipe(i1$2.select(getActiveLanguage), operators.take(1))
                    .subscribe(function (activeLanguage) {
                    if (activeLanguage !== isocode) {
                        _this.store.dispatch(new SetActiveLanguage(isocode));
                    }
                });
            };
        /**
         * Initials the active language. The active language is either given
         * by the last visit (stored in session storage) or by the
         * default session language of the store.
         */
        /**
         * Initials the active language. The active language is either given
         * by the last visit (stored in session storage) or by the
         * default session language of the store.
         * @param {?} defaultLanguage
         * @return {?}
         */
        LanguageService.prototype.initialize = /**
         * Initials the active language. The active language is either given
         * by the last visit (stored in session storage) or by the
         * default session language of the store.
         * @param {?} defaultLanguage
         * @return {?}
         */
            function (defaultLanguage) {
                if (this.sessionStorage && !!this.sessionStorage.getItem('language')) {
                    this.setActive(this.sessionStorage.getItem('language'));
                }
                else {
                    this.setActive(defaultLanguage);
                }
            };
        LanguageService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        LanguageService.ctorParameters = function () {
            return [
                { type: i1$2.Store },
                { type: WindowRef }
            ];
        };
        return LanguageService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Facade that provides easy access to curreny state, actions and selectors.
     */
    var CurrencyService = /** @class */ (function () {
        function CurrencyService(store, winRef) {
            this.store = store;
            this.sessionStorage = winRef.sessionStorage;
        }
        /**
         * Represents all the currencies supported by the current store.
         */
        /**
         * Represents all the currencies supported by the current store.
         * @return {?}
         */
        CurrencyService.prototype.getAll = /**
         * Represents all the currencies supported by the current store.
         * @return {?}
         */
            function () {
                var _this = this;
                return this.store.pipe(i1$2.select(getAllCurrencies), operators.tap(function (currencies) {
                    if (!currencies) {
                        _this.store.dispatch(new LoadCurrencies());
                    }
                }), operators.filter(Boolean));
            };
        /**
         * Represents the isocode of the active currency.
         */
        /**
         * Represents the isocode of the active currency.
         * @return {?}
         */
        CurrencyService.prototype.getActive = /**
         * Represents the isocode of the active currency.
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getActiveCurrency), operators.filter(Boolean));
            };
        /**
         * Sets the active language.
         */
        /**
         * Sets the active language.
         * @param {?} isocode
         * @return {?}
         */
        CurrencyService.prototype.setActive = /**
         * Sets the active language.
         * @param {?} isocode
         * @return {?}
         */
            function (isocode) {
                var _this = this;
                return this.store
                    .pipe(i1$2.select(getActiveCurrency), operators.take(1))
                    .subscribe(function (activeCurrency) {
                    if (activeCurrency !== isocode) {
                        _this.store.dispatch(new SetActiveCurrency(isocode));
                    }
                });
            };
        /**
         * Initials the active currency. The active currency is either given
         * by the last visit (stored in session storage) or by the
         * default session currency of the store.
         */
        /**
         * Initials the active currency. The active currency is either given
         * by the last visit (stored in session storage) or by the
         * default session currency of the store.
         * @param {?} defaultCurrency
         * @return {?}
         */
        CurrencyService.prototype.initialize = /**
         * Initials the active currency. The active currency is either given
         * by the last visit (stored in session storage) or by the
         * default session currency of the store.
         * @param {?} defaultCurrency
         * @return {?}
         */
            function (defaultCurrency) {
                if (this.sessionStorage && !!this.sessionStorage.getItem('currency')) {
                    this.setActive(this.sessionStorage.getItem('currency'));
                }
                else {
                    this.setActive(defaultCurrency);
                }
            };
        CurrencyService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        CurrencyService.ctorParameters = function () {
            return [
                { type: i1$2.Store },
                { type: WindowRef }
            ];
        };
        return CurrencyService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SiteContextOccModule = /** @class */ (function () {
        function SiteContextOccModule() {
        }
        SiteContextOccModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [OccModule, i1.CommonModule, i1$1.HttpClientModule],
                        providers: [OccModule, OccSiteService],
                    },] }
        ];
        return SiteContextOccModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function siteContextStoreConfigFactory() {
        var _a;
        // if we want to reuse SITE_CONTEXT_FEATURE const in config, we have to use factory instead of plain object
        /** @type {?} */
        var config = {
            state: {
                ssrTransfer: {
                    keys: (_a = {}, _a[SITE_CONTEXT_FEATURE] = StateTransferType.TRANSFER_STATE, _a),
                },
            },
        };
        return config;
    }
    var SiteContextStoreModule = /** @class */ (function () {
        function SiteContextStoreModule() {
        }
        SiteContextStoreModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.CommonModule,
                            i1$1.HttpClientModule,
                            i1$2.StoreModule.forFeature(SITE_CONTEXT_FEATURE, reducerToken$3),
                            effects.EffectsModule.forFeature(effects$3),
                            ConfigModule.withConfigFactory(siteContextStoreConfigFactory),
                        ],
                        providers: [reducerProvider$3],
                    },] }
        ];
        return SiteContextStoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ENTITY_REMOVE_ACTION = '[ENTITY] REMOVE';
    /** @type {?} */
    var ENTITY_REMOVE_ALL_ACTION = '[ENTITY] REMOVE ALL';
    /**
     * @param {?} type
     * @param {?} id
     * @return {?}
     */
    function entityMeta(type, id) {
        return {
            entityType: type,
            entityId: id,
        };
    }
    /**
     * @param {?} type
     * @param {?} id
     * @return {?}
     */
    function entityRemoveMeta(type, id) {
        return {
            entityId: id,
            entityType: type,
            entityRemove: true,
        };
    }
    /**
     * @param {?} type
     * @return {?}
     */
    function entityRemoveAllMeta(type) {
        return {
            entityId: null,
            entityType: type,
            entityRemove: true,
        };
    }
    var EntityRemoveAction = /** @class */ (function () {
        function EntityRemoveAction(entityType, id) {
            this.type = ENTITY_REMOVE_ACTION;
            this.meta = entityRemoveMeta(entityType, id);
        }
        return EntityRemoveAction;
    }());
    var EntityRemoveAllAction = /** @class */ (function () {
        function EntityRemoveAllAction(entityType) {
            this.type = ENTITY_REMOVE_ALL_ACTION;
            this.meta = entityRemoveAllMeta(entityType);
        }
        return EntityRemoveAllAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ENTITY_LOAD_ACTION = '[ENTITY] LOAD';
    /** @type {?} */
    var ENTITY_FAIL_ACTION = '[ENTITY] LOAD FAIL';
    /** @type {?} */
    var ENTITY_SUCCESS_ACTION = '[ENTITY] LOAD SUCCESS';
    /** @type {?} */
    var ENTITY_RESET_ACTION = '[ENTITY] RESET';
    /**
     * @param {?} entityType
     * @param {?} id
     * @return {?}
     */
    function entityLoadMeta(entityType, id) {
        return __assign({}, loadMeta(entityType), entityMeta(entityType, id));
    }
    /**
     * @param {?} entityType
     * @param {?} id
     * @param {?=} error
     * @return {?}
     */
    function entityFailMeta(entityType, id, error) {
        return __assign({}, failMeta(entityType, error), entityMeta(entityType, id));
    }
    /**
     * @param {?} entityType
     * @param {?} id
     * @return {?}
     */
    function entitySuccessMeta(entityType, id) {
        return __assign({}, successMeta(entityType), entityMeta(entityType, id));
    }
    /**
     * @param {?} entityType
     * @param {?} id
     * @return {?}
     */
    function entityResetMeta(entityType, id) {
        return __assign({}, resetMeta(entityType), entityMeta(entityType, id));
    }
    var EntityLoadAction = /** @class */ (function () {
        function EntityLoadAction(entityType, id) {
            this.type = ENTITY_LOAD_ACTION;
            this.meta = entityLoadMeta(entityType, id);
        }
        return EntityLoadAction;
    }());
    var EntityFailAction = /** @class */ (function () {
        function EntityFailAction(entityType, id, error) {
            this.type = ENTITY_FAIL_ACTION;
            this.meta = entityFailMeta(entityType, id, error);
        }
        return EntityFailAction;
    }());
    var EntitySuccessAction = /** @class */ (function () {
        function EntitySuccessAction(entityType, id, payload) {
            this.payload = payload;
            this.type = ENTITY_SUCCESS_ACTION;
            this.meta = entitySuccessMeta(entityType, id);
        }
        return EntitySuccessAction;
    }());
    var EntityResetAction = /** @class */ (function () {
        function EntityResetAction(entityType, id) {
            this.type = ENTITY_RESET_ACTION;
            this.meta = entityResetMeta(entityType, id);
        }
        return EntityResetAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialEntityState = { entities: {} };
    /**
     * Higher order reducer for reusing reducer logic for multiple entities
     *
     * Utilizes entityId meta field to target entity by id in actions
     * @template T
     * @param {?} entityType
     * @param {?} reducer
     * @return {?}
     */
    function entityReducer(entityType, reducer) {
        return function (state, action) {
            if (state === void 0) {
                state = initialEntityState;
            }
            /** @type {?} */
            var ids;
            /** @type {?} */
            var partitionPayload = false;
            if (action.meta &&
                action.meta.entityType === entityType &&
                action.meta.entityId !== undefined) {
                ids = [].concat(action.meta.entityId);
                // remove selected entities
                if (action.meta.entityRemove) {
                    if (action.meta.entityId === null) {
                        return initialEntityState;
                    }
                    else {
                        /** @type {?} */
                        var removed_1 = false;
                        /** @type {?} */
                        var newEntities = Object.keys(state.entities).reduce(function (acc, cur) {
                            if (ids.indexOf(cur) > -1) {
                                removed_1 = true;
                            }
                            else {
                                acc[cur] = state.entities[cur];
                            }
                            return acc;
                        }, {});
                        return removed_1 ? { entities: newEntities } : state;
                    }
                }
                partitionPayload =
                    Array.isArray(action.meta.entityId) && Array.isArray(action.payload);
            }
            else {
                ids = Object.keys(state.entities);
            }
            /** @type {?} */
            var entityUpdates = {};
            for (var i = 0; i < ids.length; i++) {
                /** @type {?} */
                var id = ids[i];
                /** @type {?} */
                var subAction = partitionPayload
                    ? __assign({}, action, { payload: action.payload[i] }) : action;
                /** @type {?} */
                var newState = reducer(state.entities[id], subAction);
                if (newState) {
                    entityUpdates[id] = newState;
                }
            }
            if (Object.keys(entityUpdates).length > 0) {
                return __assign({}, state, { entities: __assign({}, state.entities, entityUpdates) });
            }
            return state;
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Higher order reducer that wraps LoaderReducer and EntityReducer enhancing
     * single state reducer to support multiple entities with generic loading flags
     * @template T
     * @param {?} entityType
     * @param {?=} reducer
     * @return {?}
     */
    function entityLoaderReducer(entityType, reducer) {
        return entityReducer(entityType, loaderReducer(entityType, reducer));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     * @param {?} state
     * @param {?} id
     * @return {?}
     */
    function entityStateSelector(state, id) {
        return state.entities[id] || initialLoaderState;
    }
    /**
     * @template T
     * @param {?} state
     * @param {?} id
     * @return {?}
     */
    function entityValueSelector(state, id) {
        /** @type {?} */
        var entityState = entityStateSelector(state, id);
        return entityState.value;
    }
    /**
     * @template T
     * @param {?} state
     * @param {?} id
     * @return {?}
     */
    function entityLoadingSelector(state, id) {
        /** @type {?} */
        var entityState = entityStateSelector(state, id);
        return entityState.loading;
    }
    /**
     * @template T
     * @param {?} state
     * @param {?} id
     * @return {?}
     */
    function entityErrorSelector(state, id) {
        /** @type {?} */
        var entityState = entityStateSelector(state, id);
        return entityState.error;
    }
    /**
     * @template T
     * @param {?} state
     * @param {?} id
     * @return {?}
     */
    function entitySuccessSelector(state, id) {
        /** @type {?} */
        var entityState = entityStateSelector(state, id);
        return entityState.success;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     * @param {?} state
     * @param {?} id
     * @return {?}
     */
    function entitySelector(state, id) {
        return state.entities[id] || undefined;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} entityType
     * @return {?}
     */
    function ofLoaderLoad(entityType) {
        return operators.filter(function (action) {
            return action.meta &&
                action.meta.loader &&
                action.meta.entityType === entityType &&
                action.meta.loader.load;
        });
    }
    /**
     * @param {?} entityType
     * @return {?}
     */
    function ofLoaderFail(entityType) {
        return operators.filter(function (action) {
            return action.meta &&
                action.meta.loader &&
                action.meta.entityType === entityType &&
                action.meta.loader.error;
        });
    }
    /**
     * @param {?} entityType
     * @return {?}
     */
    function ofLoaderSuccess(entityType) {
        return operators.filter(function (action) {
            return action.meta &&
                action.meta.loader &&
                action.meta.entityType === entityType &&
                !action.meta.loader.load &&
                !action.meta.loader.error;
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ ContextServiceMap = /** @class */ (function () {
        function ContextServiceMap() {
        }
        return ContextServiceMap;
    }());
    /** @type {?} */
    var LANGUAGE_CONTEXT_ID = 'LANGUAGE';
    /** @type {?} */
    var CURRENCY_CONTEXT_ID = 'CURRENCY';
    /** @type {?} */
    var BASE_SITE_CONTEXT_ID = 'BASE_SITE';
    /**
     * @return {?}
     */
    function serviceMapFactory() {
        var _a;
        return _a = {},
            _a[LANGUAGE_CONTEXT_ID] = LanguageService,
            _a[CURRENCY_CONTEXT_ID] = CurrencyService,
            _a[BASE_SITE_CONTEXT_ID] = BaseSiteService,
            _a;
    }
    /** @type {?} */
    var contextServiceMapProvider = {
        provide: ContextServiceMap,
        useFactory: serviceMapFactory,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function defaultSiteContextConfigFactory() {
        var _a;
        return {
            siteContext: {
                parameters: (_a = {},
                    _a[LANGUAGE_CONTEXT_ID] = {
                        persistence: 'route',
                        defaultValue: 'en',
                        values: [
                            'en',
                            'de',
                            'ja',
                            'zh',
                            'ru',
                            'fr',
                            'tr',
                            'it',
                            'es',
                            'uk',
                            'pl',
                            'nl',
                            'hi',
                            'ar',
                            'pt',
                            'bn',
                            'pa',
                        ],
                    },
                    _a[CURRENCY_CONTEXT_ID] = {
                        persistence: 'route',
                        defaultValue: 'USD',
                        values: [
                            'USD',
                            'EUR',
                            'JPY',
                            'GBP',
                            'AUD',
                            'CAD',
                            'CHF',
                            'CNY',
                            'SEK',
                            'NZD',
                            'MXN',
                            'SGD',
                            'HKD',
                            'NOK',
                            'KRW',
                            'TRY',
                            'RUB',
                            'INR',
                            'BRL',
                            'ZAR',
                        ],
                    },
                    _a),
            },
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ SiteContextConfig = /** @class */ (function () {
        function SiteContextConfig() {
        }
        return SiteContextConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} config
     * @param {?} baseSiteService
     * @param {?} langService
     * @param {?} currService
     * @return {?}
     */
    function inititializeContext(config, baseSiteService, langService, currService) {
        return function () {
            baseSiteService.initialize(config.site.baseSite);
            langService.initialize(config.site.language);
            currService.initialize(config.site.currency);
        };
    }
    /** @type {?} */
    var contextServiceProviders = [
        BaseSiteService,
        LanguageService,
        CurrencyService,
        {
            provide: i0.APP_INITIALIZER,
            useFactory: inititializeContext,
            deps: [OccConfig, BaseSiteService, LanguageService, CurrencyService],
            multi: true,
        },
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SiteContextParamsService = /** @class */ (function () {
        function SiteContextParamsService(config, injector, serviceMap) {
            this.config = config;
            this.injector = injector;
            this.serviceMap = serviceMap;
        }
        /**
         * @param {?=} persistence
         * @return {?}
         */
        SiteContextParamsService.prototype.getContextParameters = /**
         * @param {?=} persistence
         * @return {?}
         */
            function (persistence) {
                /** @type {?} */
                var contextConfig = this.config.siteContext.parameters;
                if (contextConfig) {
                    /** @type {?} */
                    var params = Object.keys(contextConfig);
                    if (persistence) {
                        return params.filter(function (key) { return contextConfig[key].persistence === persistence; });
                    }
                    else {
                        return params;
                    }
                }
                return [];
            };
        /**
         * @param {?} param
         * @return {?}
         */
        SiteContextParamsService.prototype.getParamValues = /**
         * @param {?} param
         * @return {?}
         */
            function (param) {
                return this.config.siteContext.parameters &&
                    this.config.siteContext.parameters[param]
                    ? this.config.siteContext.parameters[param].values
                    : undefined;
            };
        /**
         * @param {?} param
         * @return {?}
         */
        SiteContextParamsService.prototype.getParamDefaultValue = /**
         * @param {?} param
         * @return {?}
         */
            function (param) {
                return this.config.siteContext.parameters &&
                    this.config.siteContext.parameters[param]
                    ? this.config.siteContext.parameters[param].defaultValue
                    : undefined;
            };
        /**
         * @param {?} param
         * @return {?}
         */
        SiteContextParamsService.prototype.getSiteContextService = /**
         * @param {?} param
         * @return {?}
         */
            function (param) {
                if (this.serviceMap[param]) {
                    return this.injector.get(this.serviceMap[param], null);
                }
            };
        /**
         * @param {?} param
         * @return {?}
         */
        SiteContextParamsService.prototype.getValue = /**
         * @param {?} param
         * @return {?}
         */
            function (param) {
                /** @type {?} */
                var value;
                /** @type {?} */
                var service = this.getSiteContextService(param);
                if (service) {
                    service
                        .getActive()
                        .subscribe(function (val) { return (value = val); })
                        .unsubscribe();
                }
                return value !== undefined ? value : this.getParamDefaultValue(param);
            };
        /**
         * @param {?} param
         * @param {?} value
         * @return {?}
         */
        SiteContextParamsService.prototype.setValue = /**
         * @param {?} param
         * @param {?} value
         * @return {?}
         */
            function (param, value) {
                /** @type {?} */
                var service = this.getSiteContextService(param);
                if (service) {
                    service.setActive(value);
                }
            };
        SiteContextParamsService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        SiteContextParamsService.ctorParameters = function () {
            return [
                { type: SiteContextConfig },
                { type: i0.Injector },
                { type: ContextServiceMap }
            ];
        };
        return SiteContextParamsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SiteContextUrlSerializer = /** @class */ (function (_super) {
        __extends(SiteContextUrlSerializer, _super);
        function SiteContextUrlSerializer(siteContextParams, config) {
            var _this = _super.call(this) || this;
            _this.siteContextParams = siteContextParams;
            _this.config = config;
            _this.urlEncodingParameters =
                _this.config.siteContext.urlEncodingParameters || [];
            return _this;
        }
        Object.defineProperty(SiteContextUrlSerializer.prototype, "hasContextInRoutes", {
            get: /**
             * @return {?}
             */ function () {
                return this.urlEncodingParameters.length > 0;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} url
         * @return {?}
         */
        SiteContextUrlSerializer.prototype.parse = /**
         * @param {?} url
         * @return {?}
         */
            function (url) {
                if (this.hasContextInRoutes) {
                    /** @type {?} */
                    var urlWithParams = this.urlExtractContextParameters(url);
                    /** @type {?} */
                    var parsed = ( /** @type {?} */(_super.prototype.parse.call(this, urlWithParams.url)));
                    this.urlTreeIncludeContextParameters(parsed, urlWithParams.params);
                    return parsed;
                }
                else {
                    return _super.prototype.parse.call(this, url);
                }
            };
        /**
         * @param {?} url
         * @return {?}
         */
        SiteContextUrlSerializer.prototype.urlExtractContextParameters = /**
         * @param {?} url
         * @return {?}
         */
            function (url) {
                /** @type {?} */
                var segments = url.split('/');
                if (segments[0] === '') {
                    segments.shift();
                }
                /** @type {?} */
                var params = {};
                /** @type {?} */
                var paramId = 0;
                /** @type {?} */
                var segmentId = 0;
                while (paramId < this.urlEncodingParameters.length &&
                    segmentId < segments.length) {
                    /** @type {?} */
                    var paramName = this.urlEncodingParameters[paramId];
                    /** @type {?} */
                    var paramValues = this.siteContextParams.getParamValues(paramName);
                    if (paramValues.indexOf(segments[segmentId]) > -1) {
                        params[paramName] = segments[segmentId];
                        segmentId++;
                    }
                    paramId++;
                }
                url = segments.slice(Object.keys(params).length).join('/');
                return { url: url, params: params };
            };
        /**
         * @private
         * @param {?} urlTree
         * @param {?} params
         * @return {?}
         */
        SiteContextUrlSerializer.prototype.urlTreeIncludeContextParameters = /**
         * @private
         * @param {?} urlTree
         * @param {?} params
         * @return {?}
         */
            function (urlTree, params) {
                urlTree.siteContext = params;
            };
        /**
         * @param {?} tree
         * @return {?}
         */
        SiteContextUrlSerializer.prototype.serialize = /**
         * @param {?} tree
         * @return {?}
         */
            function (tree) {
                /** @type {?} */
                var params = this.urlTreeExtractContextParameters(tree);
                /** @type {?} */
                var url = _super.prototype.serialize.call(this, tree);
                /** @type {?} */
                var serialized = this.urlIncludeContextParameters(url, params);
                return serialized;
            };
        /**
         * @param {?} urlTree
         * @return {?}
         */
        SiteContextUrlSerializer.prototype.urlTreeExtractContextParameters = /**
         * @param {?} urlTree
         * @return {?}
         */
            function (urlTree) {
                return urlTree.siteContext ? urlTree.siteContext : {};
            };
        /**
         * @private
         * @param {?} url
         * @param {?} params
         * @return {?}
         */
        SiteContextUrlSerializer.prototype.urlIncludeContextParameters = /**
         * @private
         * @param {?} url
         * @param {?} params
         * @return {?}
         */
            function (url, params) {
                var _this = this;
                /** @type {?} */
                var contextRoutePart = this.urlEncodingParameters
                    .map(function (param) {
                    return params[param]
                        ? params[param]
                        : _this.siteContextParams.getValue(param);
                })
                    .join('/');
                return contextRoutePart + url;
            };
        SiteContextUrlSerializer.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        SiteContextUrlSerializer.ctorParameters = function () {
            return [
                { type: SiteContextParamsService },
                { type: SiteContextConfig }
            ];
        };
        return SiteContextUrlSerializer;
    }(router.DefaultUrlSerializer));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SiteContextRoutesHandler = /** @class */ (function () {
        function SiteContextRoutesHandler(siteContextParams, serializer, injector) {
            this.siteContextParams = siteContextParams;
            this.serializer = serializer;
            this.injector = injector;
            this.subscription = new rxjs.Subscription();
            this.contextValues = {};
            this.isNavigating = false;
        }
        /**
         * @return {?}
         */
        SiteContextRoutesHandler.prototype.init = /**
         * @return {?}
         */
            function () {
                this.router = this.injector.get(router.Router);
                this.location = this.injector.get(i1.Location);
                /** @type {?} */
                var routingParams = this.siteContextParams.getContextParameters('route');
                if (routingParams.length) {
                    this.setContextParamsFromRoute(this.router.url);
                    this.subscribeChanges(routingParams);
                    this.subscribeRouting();
                }
            };
        /**
         * @private
         * @param {?} params
         * @return {?}
         */
        SiteContextRoutesHandler.prototype.subscribeChanges = /**
         * @private
         * @param {?} params
         * @return {?}
         */
            function (params) {
                var _this = this;
                params.forEach(function (param) {
                    /** @type {?} */
                    var service = _this.siteContextParams.getSiteContextService(param);
                    if (service) {
                        _this.subscription.add(service.getActive().subscribe(function (value) {
                            if (!_this.isNavigating &&
                                _this.contextValues[param] &&
                                _this.contextValues[param] !== value) {
                                /** @type {?} */
                                var parsed = _this.router.parseUrl(_this.router.url);
                                /** @type {?} */
                                var serialized = _this.router.serializeUrl(parsed);
                                _this.location.replaceState(serialized);
                            }
                            _this.contextValues[param] = value;
                        }));
                    }
                });
            };
        /**
         * @private
         * @return {?}
         */
        SiteContextRoutesHandler.prototype.subscribeRouting = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.subscription.add(this.router.events
                    .pipe(operators.filter(function (event) {
                    return event instanceof router.NavigationStart ||
                        event instanceof router.NavigationEnd ||
                        event instanceof router.NavigationError ||
                        event instanceof router.NavigationCancel;
                }))
                    .subscribe(function (event) {
                    _this.isNavigating = event instanceof router.NavigationStart;
                    if (_this.isNavigating) {
                        _this.setContextParamsFromRoute(event.url);
                    }
                }));
            };
        /**
         * @private
         * @param {?} url
         * @return {?}
         */
        SiteContextRoutesHandler.prototype.setContextParamsFromRoute = /**
         * @private
         * @param {?} url
         * @return {?}
         */
            function (url) {
                var _this = this;
                var params = this.serializer.urlExtractContextParameters(url).params;
                Object.keys(params).forEach(function (param) {
                    return _this.siteContextParams.setValue(param, params[param]);
                });
            };
        /**
         * @return {?}
         */
        SiteContextRoutesHandler.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.subscription.unsubscribe();
            };
        SiteContextRoutesHandler.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        SiteContextRoutesHandler.ctorParameters = function () {
            return [
                { type: SiteContextParamsService },
                { type: SiteContextUrlSerializer },
                { type: i0.Injector }
            ];
        };
        /** @nocollapse */ SiteContextRoutesHandler.ngInjectableDef = i0.defineInjectable({ factory: function SiteContextRoutesHandler_Factory() { return new SiteContextRoutesHandler(i0.inject(SiteContextParamsService), i0.inject(SiteContextUrlSerializer), i0.inject(i0.INJECTOR)); }, token: SiteContextRoutesHandler, providedIn: "root" });
        return SiteContextRoutesHandler;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} siteContextRoutesHandler
     * @return {?}
     */
    function initSiteContextRoutesHandler(siteContextRoutesHandler) {
        return function () {
            siteContextRoutesHandler.init();
        };
    }
    /** @type {?} */
    var siteContextParamsProviders = [
        SiteContextParamsService,
        SiteContextUrlSerializer,
        { provide: router.UrlSerializer, useExisting: SiteContextUrlSerializer },
        {
            provide: i0.APP_INITIALIZER,
            useFactory: initSiteContextRoutesHandler,
            deps: [SiteContextRoutesHandler],
            multi: true,
        },
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SiteContextInterceptor = /** @class */ (function () {
        function SiteContextInterceptor(languageService, currencyService, occEndpoints, config) {
            var _this = this;
            this.languageService = languageService;
            this.currencyService = currencyService;
            this.occEndpoints = occEndpoints;
            this.config = config;
            this.activeLang = this.config.site.language;
            this.activeCurr = this.config.site.currency;
            this.languageService
                .getActive()
                .subscribe(function (data) { return (_this.activeLang = data); });
            this.currencyService
                .getActive()
                .subscribe(function (data) { return (_this.activeCurr = data); });
        }
        /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
        SiteContextInterceptor.prototype.intercept = /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
            function (request, next) {
                if (request.url.indexOf(this.occEndpoints.getBaseEndpoint()) > -1) {
                    request = request.clone({
                        setParams: {
                            lang: this.activeLang,
                            curr: this.activeCurr,
                        },
                    });
                }
                return next.handle(request);
            };
        SiteContextInterceptor.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        SiteContextInterceptor.ctorParameters = function () {
            return [
                { type: LanguageService },
                { type: CurrencyService },
                { type: OccEndpointsService },
                { type: OccConfig }
            ];
        };
        return SiteContextInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var interceptors$1 = [
        {
            provide: i1$1.HTTP_INTERCEPTORS,
            useClass: SiteContextInterceptor,
            multi: true,
        },
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // @dynamic
    var SiteContextModule = /** @class */ (function () {
        function SiteContextModule() {
        }
        /**
         * @return {?}
         */
        SiteContextModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: SiteContextModule,
                    providers: __spread(interceptors$1),
                };
            };
        SiteContextModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            ConfigModule.withConfigFactory(defaultSiteContextConfigFactory),
                            StateModule,
                            SiteContextOccModule,
                            SiteContextStoreModule,
                        ],
                        providers: __spread([
                            contextServiceMapProvider
                        ], contextServiceProviders, siteContextParamsProviders, [
                            { provide: SiteContextConfig, useExisting: Config },
                        ]),
                    },] }
        ];
        return SiteContextModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartEffects = /** @class */ (function () {
        function CartEffects(actions$, cartConnector, cartData) {
            var _this = this;
            this.actions$ = actions$;
            this.cartConnector = cartConnector;
            this.cartData = cartData;
            this.loadCart$ = this.actions$.pipe(effects.ofType(LOAD_CART, LANGUAGE_CHANGE, CURRENCY_CHANGE), operators.map(function (action) { return action.payload; }), operators.mergeMap(function (payload) {
                /** @type {?} */
                var loadCartParams = {
                    userId: (payload && payload.userId) || _this.cartData.userId,
                    cartId: (payload && payload.cartId) || _this.cartData.cartId,
                    details: payload && payload.details !== undefined
                        ? payload.details
                        : _this.cartData.getDetails,
                };
                if (_this.isMissingData(loadCartParams)) {
                    return rxjs.of(new LoadCartFail({}));
                }
                return _this.cartConnector
                    .load(loadCartParams.userId, loadCartParams.cartId, loadCartParams.details)
                    .pipe(operators.map(function (cart) {
                    return new LoadCartSuccess(cart);
                }), operators.catchError(function (error) { return rxjs.of(new LoadCartFail(error)); }));
            }));
            this.createCart$ = this.actions$.pipe(effects.ofType(CREATE_CART), operators.map(function (action) { return action.payload; }), operators.mergeMap(function (payload) {
                return _this.cartConnector
                    .create(payload.userId, payload.oldCartId, payload.toMergeCartGuid)
                    .pipe(operators.switchMap(function (cart) {
                    if (payload.oldCartId) {
                        return [
                            new CreateCartSuccess(cart),
                            new MergeCartSuccess(),
                        ];
                    }
                    return [new CreateCartSuccess(cart)];
                }), operators.catchError(function (error) { return rxjs.of(new CreateCartFail(error)); }));
            }));
            this.mergeCart$ = this.actions$.pipe(effects.ofType(MERGE_CART), operators.map(function (action) { return action.payload; }), operators.mergeMap(function (payload) {
                return _this.cartConnector.load(payload.userId, 'current').pipe(operators.map(function (currentCart) {
                    return new CreateCart({
                        userId: payload.userId,
                        oldCartId: payload.cartId,
                        toMergeCartGuid: currentCart ? currentCart.guid : undefined,
                    });
                }));
            }));
        }
        /**
         * @private
         * @param {?} payload
         * @return {?}
         */
        CartEffects.prototype.isMissingData = /**
         * @private
         * @param {?} payload
         * @return {?}
         */
            function (payload) {
                return payload.userId === undefined || payload.cartId === undefined;
            };
        CartEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        CartEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: CartConnector },
                { type: CartDataService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], CartEffects.prototype, "loadCart$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], CartEffects.prototype, "createCart$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], CartEffects.prototype, "mergeCart$", void 0);
        return CartEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartEntryEffects = /** @class */ (function () {
        function CartEntryEffects(actions$, cartEntryConnector) {
            var _this = this;
            this.actions$ = actions$;
            this.cartEntryConnector = cartEntryConnector;
            this.addEntry$ = this.actions$.pipe(effects.ofType(ADD_ENTRY), operators.map(function (action) { return action.payload; }), operators.mergeMap(function (payload) {
                return _this.cartEntryConnector
                    .add(payload.userId, payload.cartId, payload.productCode, payload.quantity)
                    .pipe(operators.map(function (entry) { return new AddEntrySuccess(entry); }), operators.catchError(function (error) { return rxjs.of(new AddEntryFail(error)); }));
            }));
            this.removeEntry$ = this.actions$.pipe(effects.ofType(REMOVE_ENTRY), operators.map(function (action) { return action.payload; }), operators.mergeMap(function (payload) {
                return _this.cartEntryConnector
                    .remove(payload.userId, payload.cartId, payload.entry)
                    .pipe(operators.map(function () {
                    return new RemoveEntrySuccess();
                }), operators.catchError(function (error) { return rxjs.of(new RemoveEntryFail(error)); }));
            }));
            this.updateEntry$ = this.actions$.pipe(effects.ofType(UPDATE_ENTRY), operators.map(function (action) { return action.payload; }), operators.mergeMap(function (payload) {
                return _this.cartEntryConnector
                    .update(payload.userId, payload.cartId, payload.entry, payload.qty)
                    .pipe(operators.map(function () {
                    return new UpdateEntrySuccess();
                }), operators.catchError(function (error) { return rxjs.of(new UpdateEntryFail(error)); }));
            }));
        }
        CartEntryEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        CartEntryEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: CartEntryConnector }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], CartEntryEffects.prototype, "addEntry$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], CartEntryEffects.prototype, "removeEntry$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], CartEntryEffects.prototype, "updateEntry$", void 0);
        return CartEntryEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var effects$4 = [CartEffects, CartEntryEffects];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartStoreModule = /** @class */ (function () {
        function CartStoreModule() {
        }
        CartStoreModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.CommonModule,
                            i1$1.HttpClientModule,
                            CartOccModule,
                            i1$2.StoreModule.forFeature(CART_FEATURE, reducerToken$2, { metaReducers: metaReducers$1 }),
                            effects.EffectsModule.forFeature(effects$4),
                        ],
                        providers: [reducerProvider$2],
                    },] }
        ];
        return CartStoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartModule = /** @class */ (function () {
        function CartModule() {
        }
        CartModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [CartOccModule, CartStoreModule],
                        providers: [CartDataService, CartService],
                    },] }
        ];
        return CartModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CHECKOUT_FEATURE = 'checkout';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOAD_CARD_TYPES = '[Checkout] Load Card Types';
    /** @type {?} */
    var LOAD_CARD_TYPES_FAIL = '[Checkout] Load Card Fail';
    /** @type {?} */
    var LOAD_CARD_TYPES_SUCCESS = '[Checkout] Load Card Success';
    var LoadCardTypes = /** @class */ (function () {
        function LoadCardTypes() {
            this.type = LOAD_CARD_TYPES;
        }
        return LoadCardTypes;
    }());
    var LoadCardTypesFail = /** @class */ (function () {
        function LoadCardTypesFail(payload) {
            this.payload = payload;
            this.type = LOAD_CARD_TYPES_FAIL;
        }
        return LoadCardTypesFail;
    }());
    var LoadCardTypesSuccess = /** @class */ (function () {
        function LoadCardTypesSuccess(payload) {
            this.payload = payload;
            this.type = LOAD_CARD_TYPES_SUCCESS;
        }
        return LoadCardTypesSuccess;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var VERIFY_ADDRESS = '[Checkout] Verify Address';
    /** @type {?} */
    var VERIFY_ADDRESS_FAIL = '[Checkout] Verify Address Fail';
    /** @type {?} */
    var VERIFY_ADDRESS_SUCCESS = '[Checkout] Verify Address Success';
    /** @type {?} */
    var CLEAR_ADDRESS_VERIFICATION_RESULTS = '[Checkout] Clear Address Verification Results';
    var VerifyAddress = /** @class */ (function () {
        function VerifyAddress(payload) {
            this.payload = payload;
            this.type = VERIFY_ADDRESS;
        }
        return VerifyAddress;
    }());
    var VerifyAddressFail = /** @class */ (function () {
        function VerifyAddressFail(payload) {
            this.payload = payload;
            this.type = VERIFY_ADDRESS_FAIL;
        }
        return VerifyAddressFail;
    }());
    var VerifyAddressSuccess = /** @class */ (function () {
        function VerifyAddressSuccess(payload) {
            this.payload = payload;
            this.type = VERIFY_ADDRESS_SUCCESS;
        }
        return VerifyAddressSuccess;
    }());
    var ClearAddressVerificationResults = /** @class */ (function () {
        function ClearAddressVerificationResults() {
            this.type = CLEAR_ADDRESS_VERIFICATION_RESULTS;
        }
        return ClearAddressVerificationResults;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CHECKOUT_CLEAR_MISCS_DATA = '[Checkout] Clear Miscs Data';
    var CheckoutClearMiscsData = /** @class */ (function () {
        function CheckoutClearMiscsData() {
            this.type = CHECKOUT_CLEAR_MISCS_DATA;
        }
        return CheckoutClearMiscsData;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$6 = {
        address: {},
        deliveryMode: {
            supported: {},
            selected: '',
        },
        paymentDetails: {},
        orderDetails: {},
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$6(state, action) {
        if (state === void 0) {
            state = initialState$6;
        }
        switch (action.type) {
            case ADD_DELIVERY_ADDRESS_SUCCESS:
            case SET_DELIVERY_ADDRESS_SUCCESS: {
                /** @type {?} */
                var address = action.payload;
                return __assign({}, state, { address: address });
            }
            case LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS: {
                /** @type {?} */
                var supportedModes = action.payload;
                if (!supportedModes) {
                    return state;
                }
                /** @type {?} */
                var supported = supportedModes.reduce(function (modes, mode) {
                    var _a;
                    return __assign({}, modes, (_a = {}, _a[mode.code] = mode, _a));
                }, __assign({}, state.deliveryMode.supported));
                return __assign({}, state, { deliveryMode: __assign({}, state.deliveryMode, { supported: supported }) });
            }
            case SET_DELIVERY_MODE_SUCCESS: {
                /** @type {?} */
                var selected = action.payload;
                return __assign({}, state, { deliveryMode: __assign({}, state.deliveryMode, { selected: selected }) });
            }
            case CREATE_PAYMENT_DETAILS_SUCCESS:
            case SET_PAYMENT_DETAILS_SUCCESS: {
                return __assign({}, state, { paymentDetails: action.payload });
            }
            case CREATE_PAYMENT_DETAILS_FAIL: {
                /** @type {?} */
                var paymentDetails = action.payload;
                if (paymentDetails['hasError']) {
                    return __assign({}, state, { paymentDetails: paymentDetails });
                }
                return state;
            }
            case PLACE_ORDER_SUCCESS: {
                /** @type {?} */
                var orderDetails = action.payload;
                return __assign({}, state, { orderDetails: orderDetails });
            }
            case CLEAR_CHECKOUT_DATA: {
                return initialState$6;
            }
            case CLEAR_CHECKOUT_STEP: {
                /** @type {?} */
                var stepNumber = action.payload;
                switch (stepNumber) {
                    case 1: {
                        return __assign({}, state, { address: {} });
                    }
                    case 2: {
                        return __assign({}, state, { deliveryMode: __assign({}, state.deliveryMode, { supported: {}, selected: '' }) });
                    }
                    case 3: {
                        return __assign({}, state, { paymentDetails: {} });
                    }
                }
                return state;
            }
            case CLEAR_SUPPORTED_DELIVERY_MODES:
            case CHECKOUT_CLEAR_MISCS_DATA: {
                return __assign({}, state, { deliveryMode: __assign({}, state.deliveryMode, { supported: {} }) });
            }
        }
        return state;
    }
    /** @type {?} */
    var getDeliveryAddress = function (state) { return state.address; };
    /** @type {?} */
    var getDeliveryMode = function (state) {
        return state.deliveryMode;
    };
    /** @type {?} */
    var getPaymentDetails = function (state) {
        return state.paymentDetails;
    };
    /** @type {?} */
    var getOrderDetails = function (state) {
        return state.orderDetails;
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$7 = {
        results: {},
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$7(state, action) {
        if (state === void 0) {
            state = initialState$7;
        }
        switch (action.type) {
            case VERIFY_ADDRESS_SUCCESS: {
                /** @type {?} */
                var results = action.payload;
                return __assign({}, state, { results: results });
            }
            case VERIFY_ADDRESS_FAIL: {
                return __assign({}, state, { results: 'FAIL' });
            }
            case CLEAR_ADDRESS_VERIFICATION_RESULTS: {
                return __assign({}, state, { results: {} });
            }
        }
        return state;
    }
    /** @type {?} */
    var getAddressVerificationResults = function (state) { return state.results; };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$8 = {
        entities: {},
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$8(state, action) {
        if (state === void 0) {
            state = initialState$8;
        }
        switch (action.type) {
            case LOAD_CARD_TYPES_SUCCESS: {
                /** @type {?} */
                var cardTypes = action.payload;
                /** @type {?} */
                var entities = cardTypes.reduce(function (cardTypesEntities, name) {
                    var _a;
                    return __assign({}, cardTypesEntities, (_a = {}, _a[name.code] = name, _a));
                }, __assign({}, state.entities));
                return __assign({}, state, { entities: entities });
            }
            case CHECKOUT_CLEAR_MISCS_DATA: {
                return initialState$8;
            }
        }
        return state;
    }
    /** @type {?} */
    var getCardTypesEntites = function (state) { return state.entities; };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function getReducers$4() {
        return {
            steps: reducer$6,
            cardTypes: reducer$8,
            addressVerification: reducer$7,
        };
    }
    /** @type {?} */
    var reducerToken$4 = new i0.InjectionToken('CheckoutReducers');
    /** @type {?} */
    var reducerProvider$4 = {
        provide: reducerToken$4,
        useFactory: getReducers$4,
    };
    /** @type {?} */
    var getCheckoutState = i1$2.createFeatureSelector(CHECKOUT_FEATURE);
    /**
     * @param {?} reducer
     * @return {?}
     */
    function clearCheckoutState(reducer) {
        return function (state, action) {
            switch (action.type) {
                case LANGUAGE_CHANGE: {
                    action = new CheckoutClearMiscsData();
                    break;
                }
                case CURRENCY_CHANGE: {
                    action = new ClearSupportedDeliveryModes();
                    break;
                }
                case LOGOUT: {
                    action = new ClearCheckoutData();
                    break;
                }
            }
            return reducer(state, action);
        };
    }
    /** @type {?} */
    var metaReducers$2 = [clearCheckoutState];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getCheckoutStepsState = i1$2.createSelector(getCheckoutState, function (state) { return state.steps; });
    /** @type {?} */
    var getDeliveryAddress$1 = i1$2.createSelector(getCheckoutStepsState, getDeliveryAddress);
    /** @type {?} */
    var getDeliveryMode$1 = i1$2.createSelector(getCheckoutStepsState, getDeliveryMode);
    /** @type {?} */
    var getSupportedDeliveryModes = i1$2.createSelector(getDeliveryMode$1, function (deliveryMode) {
        return Object.keys(deliveryMode.supported).map(function (code) { return deliveryMode.supported[code]; });
    });
    /** @type {?} */
    var getSelectedCode = i1$2.createSelector(getDeliveryMode$1, function (deliveryMode) {
        return deliveryMode.selected;
    });
    /** @type {?} */
    var getSelectedDeliveryMode = i1$2.createSelector(getDeliveryMode$1, function (deliveryMode) {
        if (deliveryMode.selected !== '') {
            if (Object.keys(deliveryMode.supported).length === 0) {
                return null;
            }
            return deliveryMode.supported[deliveryMode.selected];
        }
    });
    /** @type {?} */
    var getPaymentDetails$1 = i1$2.createSelector(getCheckoutStepsState, getPaymentDetails);
    /** @type {?} */
    var getCheckoutOrderDetails = i1$2.createSelector(getCheckoutStepsState, getOrderDetails);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getCardTypesState = i1$2.createSelector(getCheckoutState, function (state) { return state.cardTypes; });
    /** @type {?} */
    var getCardTypesEntites$1 = i1$2.createSelector(getCardTypesState, getCardTypesEntites);
    /** @type {?} */
    var getAllCardTypes = i1$2.createSelector(getCardTypesEntites$1, function (entites) {
        return Object.keys(entites).map(function (code) { return entites[code]; });
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getAddressVerificationResultsState = i1$2.createSelector(getCheckoutState, function (state) { return state.addressVerification; });
    /** @type {?} */
    var getAddressVerificationResults$1 = i1$2.createSelector(getAddressVerificationResultsState, getAddressVerificationResults);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var GLOBAL_MESSAGE_FEATURE = 'global-message';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ADD_MESSAGE = '[Global-message] Add a Message';
    /** @type {?} */
    var REMOVE_MESSAGE = '[Global-message] Remove a Message';
    /** @type {?} */
    var REMOVE_MESSAGES_BY_TYPE = '[Global-message] Remove messages by type';
    var AddMessage = /** @class */ (function () {
        function AddMessage(payload) {
            this.payload = payload;
            this.type = ADD_MESSAGE;
        }
        return AddMessage;
    }());
    var RemoveMessage = /** @class */ (function () {
        function RemoveMessage(payload) {
            this.payload = payload;
            this.type = REMOVE_MESSAGE;
        }
        return RemoveMessage;
    }());
    var RemoveMessagesByType = /** @class */ (function () {
        function RemoveMessagesByType(payload) {
            this.payload = payload;
            this.type = REMOVE_MESSAGES_BY_TYPE;
        }
        return RemoveMessagesByType;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getGlobalMessageState = i1$2.createFeatureSelector(GLOBAL_MESSAGE_FEATURE);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getGlobalMessageEntities = i1$2.createSelector(getGlobalMessageState, function (state) { return state.entities; });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$9 = {
        entities: {},
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$9(state, action) {
        if (state === void 0) {
            state = initialState$9;
        }
        var _a, _b, _c, _d;
        switch (action.type) {
            case ADD_MESSAGE: {
                /** @type {?} */
                var message = action.payload;
                if (state.entities[message.type] === undefined) {
                    return __assign({}, state, { entities: __assign({}, state.entities, (_a = {}, _a[message.type] = [message.text], _a)) });
                }
                else {
                    /** @type {?} */
                    var msgs = state.entities[message.type];
                    if (msgs.indexOf(message.text) === -1) {
                        return __assign({}, state, { entities: __assign({}, state.entities, (_b = {}, _b[message.type] = __spread(msgs, [message.text]), _b)) });
                    }
                }
                return state;
            }
            case REMOVE_MESSAGE: {
                /** @type {?} */
                var msgType = action.payload.type;
                /** @type {?} */
                var msgIndex = action.payload.index;
                if (Object.keys(state.entities).length === 0 ||
                    !state.entities[msgType]) {
                    return state;
                }
                /** @type {?} */
                var messages = __spread(state.entities[msgType]);
                messages.splice(msgIndex, 1);
                return __assign({}, state, { entities: __assign({}, state.entities, (_c = {}, _c[msgType] = messages, _c)) });
            }
            case REMOVE_MESSAGES_BY_TYPE: {
                /** @type {?} */
                var entities = __assign({}, state.entities, (_d = {}, _d[action.payload] = [], _d));
                return __assign({}, state, { entities: entities });
            }
        }
        return state;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function getReducers$5() {
        return reducer$9;
    }
    /** @type {?} */
    var reducerToken$5 = new i0.InjectionToken('GlobalMessageReducers');
    /** @type {?} */
    var reducerProvider$5 = {
        provide: reducerToken$5,
        useFactory: getReducers$5,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GlobalMessageStoreModule = /** @class */ (function () {
        function GlobalMessageStoreModule() {
        }
        GlobalMessageStoreModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            StateModule,
                            i1$2.StoreModule.forFeature(GLOBAL_MESSAGE_FEATURE, reducerToken$5),
                        ],
                        providers: [reducerProvider$5],
                    },] }
        ];
        return GlobalMessageStoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GlobalMessageService = /** @class */ (function () {
        function GlobalMessageService(store) {
            this.store = store;
        }
        /**
         * Get all global messages
         */
        /**
         * Get all global messages
         * @return {?}
         */
        GlobalMessageService.prototype.get = /**
         * Get all global messages
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getGlobalMessageEntities), operators.filter(function (data) { return data !== undefined; }));
            };
        /**
         * Add one message into store
         * @param message: GlobalMessage object
         */
        /**
         * Add one message into store
         * @param {?} message
         * @return {?}
         */
        GlobalMessageService.prototype.add = /**
         * Add one message into store
         * @param {?} message
         * @return {?}
         */
            function (message) {
                this.store.dispatch(new AddMessage(message));
            };
        /**
         * Remove message(s) from store
         * @param type: GlobalMessageType
         * @param index:optional. Without it, messages will be removed by type; otherwise,
         * message will be removed from list by index.
         */
        /**
         * Remove message(s) from store
         * @param {?} type
         * @param {?=} index
         * @return {?}
         */
        GlobalMessageService.prototype.remove = /**
         * Remove message(s) from store
         * @param {?} type
         * @param {?=} index
         * @return {?}
         */
            function (type, index) {
                if (index !== undefined) {
                    this.store.dispatch(new RemoveMessage({
                        type: type,
                        index: index,
                    }));
                }
                else {
                    this.store.dispatch(new RemoveMessagesByType(type));
                }
            };
        GlobalMessageService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        GlobalMessageService.ctorParameters = function () {
            return [
                { type: i1$2.Store }
            ];
        };
        return GlobalMessageService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var GlobalMessageType = {
        MSG_TYPE_CONFIRMATION: '[GlobalMessage] Confirmation',
        MSG_TYPE_ERROR: '[GlobalMessage] Error',
        MSG_TYPE_INFO: '[GlobalMessage] Information',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var HttpErrorHandler = /** @class */ (function () {
        function HttpErrorHandler(globalMessageService) {
            this.globalMessageService = globalMessageService;
        }
        HttpErrorHandler.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        HttpErrorHandler.ctorParameters = function () {
            return [
                { type: GlobalMessageService }
            ];
        };
        /** @nocollapse */ HttpErrorHandler.ngInjectableDef = i0.defineInjectable({ factory: function HttpErrorHandler_Factory() { return new HttpErrorHandler(i0.inject(GlobalMessageService)); }, token: HttpErrorHandler, providedIn: "root" });
        return HttpErrorHandler;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var HttpResponseStatus = {
        UNKNOWN: -1,
        BAD_REQUEST: 400,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        CONFLICT: 409,
        BAD_GATEWAY: 502,
        GATEWAY_TIMEOUT: 504,
    };
    HttpResponseStatus[HttpResponseStatus.UNKNOWN] = 'UNKNOWN';
    HttpResponseStatus[HttpResponseStatus.BAD_REQUEST] = 'BAD_REQUEST';
    HttpResponseStatus[HttpResponseStatus.FORBIDDEN] = 'FORBIDDEN';
    HttpResponseStatus[HttpResponseStatus.NOT_FOUND] = 'NOT_FOUND';
    HttpResponseStatus[HttpResponseStatus.CONFLICT] = 'CONFLICT';
    HttpResponseStatus[HttpResponseStatus.BAD_GATEWAY] = 'BAD_GATEWAY';
    HttpResponseStatus[HttpResponseStatus.GATEWAY_TIMEOUT] = 'GATEWAY_TIMEOUT';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HttpErrorInterceptor = /** @class */ (function () {
        function HttpErrorInterceptor(handlers) {
            this.handlers = handlers;
            // We reverse the handlers to allow for custom handlers
            // that replace standard handlers
            this.handlers.reverse();
        }
        /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
        HttpErrorInterceptor.prototype.intercept = /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
            function (request, next) {
                var _this = this;
                return next.handle(request).pipe(operators.catchError(function (response) {
                    if (response instanceof i1$1.HttpErrorResponse) {
                        _this.handleErrorResponse(request, response);
                        return rxjs.throwError(response);
                    }
                }));
            };
        /**
         * @protected
         * @param {?} request
         * @param {?} response
         * @return {?}
         */
        HttpErrorInterceptor.prototype.handleErrorResponse = /**
         * @protected
         * @param {?} request
         * @param {?} response
         * @return {?}
         */
            function (request, response) {
                /** @type {?} */
                var handler = this.getResponseHandler(response);
                if (handler) {
                    handler.handleError(request, response);
                }
            };
        /**
         * return the error handler that matches the `HttpResponseStatus` code.
         * If no handler is available, the UNKNOWN handler is returned.
         */
        /**
         * return the error handler that matches the `HttpResponseStatus` code.
         * If no handler is available, the UNKNOWN handler is returned.
         * @protected
         * @param {?} response
         * @return {?}
         */
        HttpErrorInterceptor.prototype.getResponseHandler = /**
         * return the error handler that matches the `HttpResponseStatus` code.
         * If no handler is available, the UNKNOWN handler is returned.
         * @protected
         * @param {?} response
         * @return {?}
         */
            function (response) {
                /** @type {?} */
                var status = response.status;
                /** @type {?} */
                var handler = this.handlers.find(function (h) { return h.responseStatus === status; });
                if (!handler) {
                    handler = this.handlers.find(function (h) { return h.responseStatus === HttpResponseStatus.UNKNOWN; });
                }
                return handler;
            };
        HttpErrorInterceptor.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        HttpErrorInterceptor.ctorParameters = function () {
            return [
                { type: Array, decorators: [{ type: i0.Inject, args: [HttpErrorHandler,] }] }
            ];
        };
        return HttpErrorInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UnknownErrorHandler = /** @class */ (function (_super) {
        __extends(UnknownErrorHandler, _super);
        function UnknownErrorHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.responseStatus = HttpResponseStatus.UNKNOWN;
            return _this;
        }
        /**
         * @return {?}
         */
        UnknownErrorHandler.prototype.handleError = /**
         * @return {?}
         */
            function () {
                this.globalMessageService.add({
                    type: GlobalMessageType.MSG_TYPE_ERROR,
                    text: 'An unknown error occured',
                });
            };
        UnknownErrorHandler.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */ UnknownErrorHandler.ngInjectableDef = i0.defineInjectable({ factory: function UnknownErrorHandler_Factory() { return new UnknownErrorHandler(i0.inject(GlobalMessageService)); }, token: UnknownErrorHandler, providedIn: "root" });
        return UnknownErrorHandler;
    }(HttpErrorHandler));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BadGatewayHandler = /** @class */ (function (_super) {
        __extends(BadGatewayHandler, _super);
        function BadGatewayHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.responseStatus = HttpResponseStatus.BAD_GATEWAY;
            return _this;
        }
        /**
         * @return {?}
         */
        BadGatewayHandler.prototype.handleError = /**
         * @return {?}
         */
            function () {
                this.globalMessageService.add({
                    type: GlobalMessageType.MSG_TYPE_ERROR,
                    text: 'A server error occurred. Please try again later.',
                });
            };
        BadGatewayHandler.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */ BadGatewayHandler.ngInjectableDef = i0.defineInjectable({ factory: function BadGatewayHandler_Factory() { return new BadGatewayHandler(i0.inject(GlobalMessageService)); }, token: BadGatewayHandler, providedIn: "root" });
        return BadGatewayHandler;
    }(HttpErrorHandler));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var OAUTH_ENDPOINT$3 = '/authorizationserver/oauth/token';
    var BadRequestHandler = /** @class */ (function (_super) {
        __extends(BadRequestHandler, _super);
        function BadRequestHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.responseStatus = HttpResponseStatus.BAD_REQUEST;
            return _this;
        }
        /**
         * @param {?} request
         * @param {?} response
         * @return {?}
         */
        BadRequestHandler.prototype.handleError = /**
         * @param {?} request
         * @param {?} response
         * @return {?}
         */
            function (request, response) {
                if (response.url.indexOf(OAUTH_ENDPOINT$3) !== -1 &&
                    response.error.error === 'invalid_grant') {
                    if (request.body.get('grant_type') === 'password') {
                        this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: this.getErrorMessage(response) + '. Please login again.',
                        });
                        this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_CONFIRMATION);
                    }
                }
                else {
                    // this is currently showing up in case we have a page not found. It should be a 404.
                    // see https://jira.hybris.com/browse/CMSX-8516
                    this.globalMessageService.add({
                        type: GlobalMessageType.MSG_TYPE_ERROR,
                        text: this.getErrorMessage(response),
                    });
                }
            };
        /**
         * @protected
         * @param {?} resp
         * @return {?}
         */
        BadRequestHandler.prototype.getErrorMessage = /**
         * @protected
         * @param {?} resp
         * @return {?}
         */
            function (resp) {
                /** @type {?} */
                var errMsg = resp.message;
                if (resp.error) {
                    if (resp.error.errors && resp.error.errors instanceof Array) {
                        errMsg = resp.error.errors[0].message;
                    }
                    else if (resp.error.error_description) {
                        errMsg = resp.error.error_description;
                    }
                }
                return errMsg || 'An unknown error occured';
            };
        BadRequestHandler.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */ BadRequestHandler.ngInjectableDef = i0.defineInjectable({ factory: function BadRequestHandler_Factory() { return new BadRequestHandler(i0.inject(GlobalMessageService)); }, token: BadRequestHandler, providedIn: "root" });
        return BadRequestHandler;
    }(HttpErrorHandler));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConflictHandler = /** @class */ (function (_super) {
        __extends(ConflictHandler, _super);
        function ConflictHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.responseStatus = HttpResponseStatus.CONFLICT;
            return _this;
        }
        /**
         * @return {?}
         */
        ConflictHandler.prototype.handleError = /**
         * @return {?}
         */
            function () {
                this.globalMessageService.add({
                    type: GlobalMessageType.MSG_TYPE_ERROR,
                    text: 'Already exists',
                });
            };
        ConflictHandler.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */ ConflictHandler.ngInjectableDef = i0.defineInjectable({ factory: function ConflictHandler_Factory() { return new ConflictHandler(i0.inject(GlobalMessageService)); }, token: ConflictHandler, providedIn: "root" });
        return ConflictHandler;
    }(HttpErrorHandler));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ForbiddenHandler = /** @class */ (function (_super) {
        __extends(ForbiddenHandler, _super);
        function ForbiddenHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.responseStatus = HttpResponseStatus.FORBIDDEN;
            return _this;
        }
        /**
         * @return {?}
         */
        ForbiddenHandler.prototype.handleError = /**
         * @return {?}
         */
            function () {
                this.globalMessageService.add({
                    type: GlobalMessageType.MSG_TYPE_ERROR,
                    text: 'You are not authorized to perform this action.',
                });
            };
        ForbiddenHandler.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */ ForbiddenHandler.ngInjectableDef = i0.defineInjectable({ factory: function ForbiddenHandler_Factory() { return new ForbiddenHandler(i0.inject(GlobalMessageService)); }, token: ForbiddenHandler, providedIn: "root" });
        return ForbiddenHandler;
    }(HttpErrorHandler));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GatewayTimeoutHandler = /** @class */ (function (_super) {
        __extends(GatewayTimeoutHandler, _super);
        function GatewayTimeoutHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.responseStatus = HttpResponseStatus.GATEWAY_TIMEOUT;
            return _this;
        }
        /**
         * @return {?}
         */
        GatewayTimeoutHandler.prototype.handleError = /**
         * @return {?}
         */
            function () {
                this.globalMessageService.add({
                    type: GlobalMessageType.MSG_TYPE_ERROR,
                    text: 'The server did not responded, please try again later.',
                });
            };
        GatewayTimeoutHandler.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */ GatewayTimeoutHandler.ngInjectableDef = i0.defineInjectable({ factory: function GatewayTimeoutHandler_Factory() { return new GatewayTimeoutHandler(i0.inject(GlobalMessageService)); }, token: GatewayTimeoutHandler, providedIn: "root" });
        return GatewayTimeoutHandler;
    }(HttpErrorHandler));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NotFoundHandler = /** @class */ (function (_super) {
        __extends(NotFoundHandler, _super);
        function NotFoundHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.responseStatus = HttpResponseStatus.NOT_FOUND;
            return _this;
        }
        /**
         * @return {?}
         */
        NotFoundHandler.prototype.handleError = /**
         * @return {?}
         */
            function () {
                this.globalMessageService.add({
                    type: GlobalMessageType.MSG_TYPE_ERROR,
                    text: 'The requested resource could not be found',
                });
            };
        NotFoundHandler.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */ NotFoundHandler.ngInjectableDef = i0.defineInjectable({ factory: function NotFoundHandler_Factory() { return new NotFoundHandler(i0.inject(GlobalMessageService)); }, token: NotFoundHandler, providedIn: "root" });
        return NotFoundHandler;
    }(HttpErrorHandler));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var errorHandlers = [
        {
            provide: HttpErrorHandler,
            useExisting: UnknownErrorHandler,
            multi: true,
        },
        {
            provide: HttpErrorHandler,
            useExisting: BadGatewayHandler,
            multi: true,
        },
        {
            provide: HttpErrorHandler,
            useExisting: BadRequestHandler,
            multi: true,
        },
        {
            provide: HttpErrorHandler,
            useExisting: ConflictHandler,
            multi: true,
        },
        {
            provide: HttpErrorHandler,
            useExisting: ForbiddenHandler,
            multi: true,
        },
        {
            provide: HttpErrorHandler,
            useExisting: GatewayTimeoutHandler,
            multi: true,
        },
        {
            provide: HttpErrorHandler,
            useExisting: NotFoundHandler,
            multi: true,
        },
    ];
    /** @type {?} */
    var httpErrorInterceptors = [
        {
            provide: i1$1.HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true,
        },
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GlobalMessageModule = /** @class */ (function () {
        function GlobalMessageModule() {
        }
        /**
         * @return {?}
         */
        GlobalMessageModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: GlobalMessageModule,
                    providers: __spread(errorHandlers, httpErrorInterceptors),
                };
            };
        GlobalMessageModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [GlobalMessageStoreModule],
                        providers: [GlobalMessageService],
                    },] }
        ];
        return GlobalMessageModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var USER_ENDPOINT = 'users/';
    /** @type {?} */
    var ADDRESSES_VERIFICATION_ENDPOINT = '/addresses/verification';
    /** @type {?} */
    var ADDRESSES_ENDPOINT = '/addresses';
    /** @type {?} */
    var PAYMENT_DETAILS_ENDPOINT = '/paymentdetails';
    /** @type {?} */
    var FORGOT_PASSWORD_ENDPOINT = '/forgottenpasswordtokens';
    /** @type {?} */
    var RESET_PASSWORD_ENDPOINT = '/resetpassword';
    /** @type {?} */
    var UPDATE_EMAIL_ENDPOINT = '/login';
    /** @type {?} */
    var UPDATE_PASSWORD_ENDPOINT = '/password';
    var OccUserService = /** @class */ (function () {
        // some extending from baseservice is not working here...
        function OccUserService(http, occEndpoints) {
            this.http = http;
            this.occEndpoints = occEndpoints;
        }
        /**
         * @param {?} userId
         * @return {?}
         */
        OccUserService.prototype.loadUser = /**
         * @param {?} userId
         * @return {?}
         */
            function (userId) {
                /** @type {?} */
                var url = this.getUserEndpoint() + userId;
                return this.http
                    .get(url)
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error); }));
            };
        /**
         * @param {?} username
         * @param {?} user
         * @return {?}
         */
        OccUserService.prototype.updateUserDetails = /**
         * @param {?} username
         * @param {?} user
         * @return {?}
         */
            function (username, user) {
                /** @type {?} */
                var url = this.getUserEndpoint() + username;
                return this.http
                    .patch(url, user)
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error); }));
            };
        /**
         * @param {?} userId
         * @param {?} address
         * @return {?}
         */
        OccUserService.prototype.verifyAddress = /**
         * @param {?} userId
         * @param {?} address
         * @return {?}
         */
            function (userId, address) {
                /** @type {?} */
                var url = this.getUserEndpoint() + userId + ADDRESSES_VERIFICATION_ENDPOINT;
                /** @type {?} */
                var headers = new i1$1.HttpHeaders({
                    'Content-Type': 'application/json',
                });
                return this.http
                    .post(url, address, { headers: headers })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error); }));
            };
        /**
         * @param {?} userId
         * @return {?}
         */
        OccUserService.prototype.loadUserAddresses = /**
         * @param {?} userId
         * @return {?}
         */
            function (userId) {
                /** @type {?} */
                var url = this.getUserEndpoint() + userId + ADDRESSES_ENDPOINT;
                /** @type {?} */
                var headers = new i1$1.HttpHeaders({
                    'Content-Type': 'application/json',
                });
                return this.http
                    .get(url, { headers: headers })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error); }));
            };
        /**
         * @param {?} userId
         * @param {?} address
         * @return {?}
         */
        OccUserService.prototype.addUserAddress = /**
         * @param {?} userId
         * @param {?} address
         * @return {?}
         */
            function (userId, address) {
                /** @type {?} */
                var url = this.getUserEndpoint() + userId + ADDRESSES_ENDPOINT;
                /** @type {?} */
                var headers = new i1$1.HttpHeaders({
                    'Content-Type': 'application/json',
                });
                return this.http
                    .post(url, address, { headers: headers })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error); }));
            };
        /**
         * @param {?} userId
         * @param {?} addressId
         * @param {?} address
         * @return {?}
         */
        OccUserService.prototype.updateUserAddress = /**
         * @param {?} userId
         * @param {?} addressId
         * @param {?} address
         * @return {?}
         */
            function (userId, addressId, address) {
                /** @type {?} */
                var url = this.getUserEndpoint() + userId + ADDRESSES_ENDPOINT + '/' + addressId;
                /** @type {?} */
                var headers = new i1$1.HttpHeaders({
                    'Content-Type': 'application/json',
                });
                return this.http
                    .patch(url, address, { headers: headers })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error); }));
            };
        /**
         * @param {?} userId
         * @param {?} addressId
         * @return {?}
         */
        OccUserService.prototype.deleteUserAddress = /**
         * @param {?} userId
         * @param {?} addressId
         * @return {?}
         */
            function (userId, addressId) {
                /** @type {?} */
                var url = this.getUserEndpoint() + userId + ADDRESSES_ENDPOINT + '/' + addressId;
                /** @type {?} */
                var headers = new i1$1.HttpHeaders({
                    'Content-Type': 'application/json',
                });
                return this.http
                    .delete(url, { headers: headers })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error); }));
            };
        /**
         * @param {?} userId
         * @return {?}
         */
        OccUserService.prototype.loadUserPaymentMethods = /**
         * @param {?} userId
         * @return {?}
         */
            function (userId) {
                /** @type {?} */
                var url = "" + this.getUserEndpoint() + userId + PAYMENT_DETAILS_ENDPOINT + "?saved=true";
                /** @type {?} */
                var headers = new i1$1.HttpHeaders({
                    'Content-Type': 'application/json',
                });
                return this.http
                    .get(url, { headers: headers })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error); }));
            };
        /**
         * @param {?} userId
         * @param {?} paymentMethodID
         * @return {?}
         */
        OccUserService.prototype.deleteUserPaymentMethod = /**
         * @param {?} userId
         * @param {?} paymentMethodID
         * @return {?}
         */
            function (userId, paymentMethodID) {
                /** @type {?} */
                var url = "" + this.getUserEndpoint() + userId + PAYMENT_DETAILS_ENDPOINT + "/" + paymentMethodID;
                /** @type {?} */
                var headers = new i1$1.HttpHeaders({
                    'Content-Type': 'application/json',
                });
                return this.http
                    .delete(url, { headers: headers })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error); }));
            };
        /**
         * @param {?} userId
         * @param {?} paymentMethodID
         * @return {?}
         */
        OccUserService.prototype.setDefaultUserPaymentMethod = /**
         * @param {?} userId
         * @param {?} paymentMethodID
         * @return {?}
         */
            function (userId, paymentMethodID) {
                /** @type {?} */
                var url = "" + this.getUserEndpoint() + userId + PAYMENT_DETAILS_ENDPOINT + "/" + paymentMethodID;
                /** @type {?} */
                var headers = new i1$1.HttpHeaders({
                    'Content-Type': 'application/json',
                });
                return this.http
                    .patch(url, 
                // TODO: Remove billingAddress property
                { billingAddress: { titleCode: 'mr' }, defaultPayment: true }, { headers: headers })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error); }));
            };
        /**
         * @param {?} user
         * @return {?}
         */
        OccUserService.prototype.registerUser = /**
         * @param {?} user
         * @return {?}
         */
            function (user) {
                /** @type {?} */
                var url = this.getUserEndpoint();
                /** @type {?} */
                var headers = new i1$1.HttpHeaders({
                    'Content-Type': 'application/json',
                });
                headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
                return this.http
                    .post(url, user, { headers: headers })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error); }));
            };
        /**
         * @param {?} userEmailAddress
         * @return {?}
         */
        OccUserService.prototype.requestForgotPasswordEmail = /**
         * @param {?} userEmailAddress
         * @return {?}
         */
            function (userEmailAddress) {
                /** @type {?} */
                var url = this.occEndpoints.getEndpoint(FORGOT_PASSWORD_ENDPOINT);
                /** @type {?} */
                var httpParams = new i1$1.HttpParams().set('userId', userEmailAddress);
                /** @type {?} */
                var headers = new i1$1.HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded',
                });
                headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
                return this.http
                    .post(url, httpParams, { headers: headers })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error); }));
            };
        /**
         * @param {?} token
         * @param {?} newPassword
         * @return {?}
         */
        OccUserService.prototype.resetPassword = /**
         * @param {?} token
         * @param {?} newPassword
         * @return {?}
         */
            function (token, newPassword) {
                /** @type {?} */
                var url = this.occEndpoints.getEndpoint(RESET_PASSWORD_ENDPOINT);
                /** @type {?} */
                var headers = new i1$1.HttpHeaders({
                    'Content-Type': 'application/json',
                });
                headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
                return this.http
                    .post(url, { token: token, newPassword: newPassword }, { headers: headers })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error); }));
            };
        /**
         * @param {?} userId
         * @return {?}
         */
        OccUserService.prototype.removeUser = /**
         * @param {?} userId
         * @return {?}
         */
            function (userId) {
                /** @type {?} */
                var url = this.getUserEndpoint() + userId;
                return this.http
                    .delete(url)
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error); }));
            };
        /**
         * @param {?} userId
         * @param {?} currentPassword
         * @param {?} newUserId
         * @return {?}
         */
        OccUserService.prototype.updateEmail = /**
         * @param {?} userId
         * @param {?} currentPassword
         * @param {?} newUserId
         * @return {?}
         */
            function (userId, currentPassword, newUserId) {
                /** @type {?} */
                var url = this.getUserEndpoint() + userId + UPDATE_EMAIL_ENDPOINT;
                /** @type {?} */
                var httpParams = new i1$1.HttpParams()
                    .set('password', currentPassword)
                    .set('newLogin', newUserId);
                /** @type {?} */
                var headers = new i1$1.HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded',
                });
                return this.http
                    .put(url, httpParams, { headers: headers })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error); }));
            };
        /**
         * @protected
         * @return {?}
         */
        OccUserService.prototype.getUserEndpoint = /**
         * @protected
         * @return {?}
         */
            function () {
                return this.occEndpoints.getEndpoint(USER_ENDPOINT);
            };
        /**
         * @param {?} userId
         * @param {?} oldPassword
         * @param {?} newPassword
         * @return {?}
         */
        OccUserService.prototype.updatePassword = /**
         * @param {?} userId
         * @param {?} oldPassword
         * @param {?} newPassword
         * @return {?}
         */
            function (userId, oldPassword, newPassword) {
                /** @type {?} */
                var url = this.getUserEndpoint() + userId + UPDATE_PASSWORD_ENDPOINT;
                /** @type {?} */
                var httpParams = new i1$1.HttpParams()
                    .set('old', oldPassword)
                    .set('new', newPassword);
                /** @type {?} */
                var headers = new i1$1.HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded',
                });
                return this.http
                    .put(url, httpParams, { headers: headers })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error); }));
            };
        OccUserService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        OccUserService.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: OccEndpointsService }
            ];
        };
        return OccUserService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // To be changed to a more optimised params after ticket: C3PO-1076
    /** @type {?} */
    var FULL_PARAMS = 'fields=FULL';
    var OccOrderService = /** @class */ (function () {
        function OccOrderService(http, occEndpoints) {
            this.http = http;
            this.occEndpoints = occEndpoints;
        }
        /**
         * @protected
         * @param {?} userId
         * @return {?}
         */
        OccOrderService.prototype.getOrderEndpoint = /**
         * @protected
         * @param {?} userId
         * @return {?}
         */
            function (userId) {
                /** @type {?} */
                var orderEndpoint = 'users/' + userId + '/orders';
                return this.occEndpoints.getEndpoint(orderEndpoint);
            };
        /**
         * @param {?} userId
         * @param {?} cartId
         * @return {?}
         */
        OccOrderService.prototype.placeOrder = /**
         * @param {?} userId
         * @param {?} cartId
         * @return {?}
         */
            function (userId, cartId) {
                /** @type {?} */
                var url = this.getOrderEndpoint(userId);
                /** @type {?} */
                var params = new i1$1.HttpParams({
                    fromString: 'cartId=' + cartId + '&' + FULL_PARAMS,
                });
                /** @type {?} */
                var headers = new i1$1.HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded',
                });
                return this.http
                    .post(url, {}, { headers: headers, params: params })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error.json()); }));
            };
        /**
         * @param {?} userId
         * @param {?=} pageSize
         * @param {?=} currentPage
         * @param {?=} sort
         * @return {?}
         */
        OccOrderService.prototype.getOrders = /**
         * @param {?} userId
         * @param {?=} pageSize
         * @param {?=} currentPage
         * @param {?=} sort
         * @return {?}
         */
            function (userId, pageSize, currentPage, sort) {
                /** @type {?} */
                var url = this.getOrderEndpoint(userId);
                /** @type {?} */
                var params = new i1$1.HttpParams();
                if (pageSize) {
                    params = params.set('pageSize', pageSize.toString());
                }
                if (currentPage) {
                    params = params.set('currentPage', currentPage.toString());
                }
                if (sort) {
                    params = params.set('sort', sort);
                }
                return this.http
                    .get(url, { params: params })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error.json()); }));
            };
        /**
         * @param {?} userId
         * @param {?} orderCode
         * @return {?}
         */
        OccOrderService.prototype.getOrder = /**
         * @param {?} userId
         * @param {?} orderCode
         * @return {?}
         */
            function (userId, orderCode) {
                /** @type {?} */
                var url = this.getOrderEndpoint(userId);
                /** @type {?} */
                var orderUrl = url + '/' + orderCode;
                /** @type {?} */
                var params = new i1$1.HttpParams({
                    fromString: FULL_PARAMS,
                });
                return this.http
                    .get(orderUrl, {
                    params: params,
                })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error.json()); }));
            };
        OccOrderService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        OccOrderService.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: OccEndpointsService }
            ];
        };
        return OccOrderService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserOccModule = /** @class */ (function () {
        function UserOccModule() {
        }
        UserOccModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [i1.CommonModule, i1$1.HttpClientModule, OccModule],
                        providers: [OccUserService, OccOrderService],
                    },] }
        ];
        return UserOccModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOAD_BILLING_COUNTRIES = '[User] Load Billing Countries';
    /** @type {?} */
    var LOAD_BILLING_COUNTRIES_FAIL = '[User] Load Billing Countries Fail';
    /** @type {?} */
    var LOAD_BILLING_COUNTRIES_SUCCESS = '[User] Load Billing Countries Success';
    var LoadBillingCountries = /** @class */ (function () {
        function LoadBillingCountries() {
            this.type = LOAD_BILLING_COUNTRIES;
        }
        return LoadBillingCountries;
    }());
    var LoadBillingCountriesFail = /** @class */ (function () {
        function LoadBillingCountriesFail(payload) {
            this.payload = payload;
            this.type = LOAD_BILLING_COUNTRIES_FAIL;
        }
        return LoadBillingCountriesFail;
    }());
    var LoadBillingCountriesSuccess = /** @class */ (function () {
        function LoadBillingCountriesSuccess(payload) {
            this.payload = payload;
            this.type = LOAD_BILLING_COUNTRIES_SUCCESS;
        }
        return LoadBillingCountriesSuccess;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOAD_DELIVERY_COUNTRIES = '[User] Load Delivery Countries';
    /** @type {?} */
    var LOAD_DELIVERY_COUNTRIES_FAIL = '[User] Load Delivery Countries Fail';
    /** @type {?} */
    var LOAD_DELIVERY_COUNTRIES_SUCCESS = '[User] Load Delivery Countries Success';
    var LoadDeliveryCountries = /** @class */ (function () {
        function LoadDeliveryCountries() {
            this.type = LOAD_DELIVERY_COUNTRIES;
        }
        return LoadDeliveryCountries;
    }());
    var LoadDeliveryCountriesFail = /** @class */ (function () {
        function LoadDeliveryCountriesFail(payload) {
            this.payload = payload;
            this.type = LOAD_DELIVERY_COUNTRIES_FAIL;
        }
        return LoadDeliveryCountriesFail;
    }());
    var LoadDeliveryCountriesSuccess = /** @class */ (function () {
        function LoadDeliveryCountriesSuccess(payload) {
            this.payload = payload;
            this.type = LOAD_DELIVERY_COUNTRIES_SUCCESS;
        }
        return LoadDeliveryCountriesSuccess;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var FORGOT_PASSWORD_EMAIL_REQUEST = '[User] Forgot Password Email Request';
    /** @type {?} */
    var FORGOT_PASSWORD_EMAIL_REQUEST_SUCCESS = '[User] Forgot Password Email Request Success';
    /** @type {?} */
    var FORGOT_PASSWORD_EMAIL_REQUEST_FAIL = '[User] Forgot Password Email Request Fail';
    var ForgotPasswordEmailRequest = /** @class */ (function () {
        function ForgotPasswordEmailRequest(payload) {
            this.payload = payload;
            this.type = FORGOT_PASSWORD_EMAIL_REQUEST;
        }
        return ForgotPasswordEmailRequest;
    }());
    var ForgotPasswordEmailRequestFail = /** @class */ (function () {
        function ForgotPasswordEmailRequestFail(payload) {
            this.payload = payload;
            this.type = FORGOT_PASSWORD_EMAIL_REQUEST_FAIL;
        }
        return ForgotPasswordEmailRequestFail;
    }());
    var ForgotPasswordEmailRequestSuccess = /** @class */ (function () {
        function ForgotPasswordEmailRequestSuccess() {
            this.type = FORGOT_PASSWORD_EMAIL_REQUEST_SUCCESS;
        }
        return ForgotPasswordEmailRequestSuccess;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOAD_ORDER_DETAILS = '[User] Load Order Details';
    /** @type {?} */
    var LOAD_ORDER_DETAILS_FAIL = '[User] Load Order Details Fail';
    /** @type {?} */
    var LOAD_ORDER_DETAILS_SUCCESS = '[User] Load Order Details Success';
    /** @type {?} */
    var CLEAR_ORDER_DETAILS = '[User] Clear Order Details';
    var LoadOrderDetails = /** @class */ (function () {
        function LoadOrderDetails(payload) {
            this.payload = payload;
            this.type = LOAD_ORDER_DETAILS;
        }
        return LoadOrderDetails;
    }());
    var LoadOrderDetailsFail = /** @class */ (function () {
        function LoadOrderDetailsFail(payload) {
            this.payload = payload;
            this.type = LOAD_ORDER_DETAILS_FAIL;
        }
        return LoadOrderDetailsFail;
    }());
    var LoadOrderDetailsSuccess = /** @class */ (function () {
        function LoadOrderDetailsSuccess(payload) {
            this.payload = payload;
            this.type = LOAD_ORDER_DETAILS_SUCCESS;
        }
        return LoadOrderDetailsSuccess;
    }());
    var ClearOrderDetails = /** @class */ (function () {
        function ClearOrderDetails() {
            this.type = CLEAR_ORDER_DETAILS;
        }
        return ClearOrderDetails;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var USER_FEATURE = 'user';
    /** @type {?} */
    var UPDATE_EMAIL_PROCESS_ID = 'updateEmail';
    /** @type {?} */
    var UPDATE_PASSWORD_PROCESS_ID = 'updatePassword';
    /** @type {?} */
    var UPDATE_USER_DETAILS_PROCESS_ID = 'updateUserDetails';
    /** @type {?} */
    var REMOVE_USER_PROCESS_ID = 'removeUser';
    /** @type {?} */
    var USER_PAYMENT_METHODS = '[User] User Payment Methods';
    /** @type {?} */
    var USER_ORDERS = '[User] User Orders';
    /** @type {?} */
    var USER_ADDRESSES = '[User] User Addresses';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOAD_USER_PAYMENT_METHODS = '[User] Load User Payment Methods';
    /** @type {?} */
    var LOAD_USER_PAYMENT_METHODS_FAIL = '[User] Load User Payment Methods Fail';
    /** @type {?} */
    var LOAD_USER_PAYMENT_METHODS_SUCCESS = '[User] Load User Payment Methods Success';
    /** @type {?} */
    var SET_DEFAULT_USER_PAYMENT_METHOD = '[User] Set Default User Payment Method';
    /** @type {?} */
    var SET_DEFAULT_USER_PAYMENT_METHOD_FAIL = '[User] Set Default User Payment Method Fail';
    /** @type {?} */
    var SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS = '[User] Set Default User Payment Method Success';
    /** @type {?} */
    var DELETE_USER_PAYMENT_METHOD = '[User] Delete User Payment Method';
    /** @type {?} */
    var DELETE_USER_PAYMENT_METHOD_FAIL = '[User] Delete User Payment Method Fail';
    /** @type {?} */
    var DELETE_USER_PAYMENT_METHOD_SUCCESS = '[User] Delete User  Payment Method Success';
    var LoadUserPaymentMethods = /** @class */ (function (_super) {
        __extends(LoadUserPaymentMethods, _super);
        function LoadUserPaymentMethods(payload) {
            var _this = _super.call(this, USER_PAYMENT_METHODS) || this;
            _this.payload = payload;
            _this.type = LOAD_USER_PAYMENT_METHODS;
            return _this;
        }
        return LoadUserPaymentMethods;
    }(LoaderLoadAction));
    var LoadUserPaymentMethodsFail = /** @class */ (function (_super) {
        __extends(LoadUserPaymentMethodsFail, _super);
        function LoadUserPaymentMethodsFail(payload) {
            var _this = _super.call(this, USER_PAYMENT_METHODS, payload) || this;
            _this.payload = payload;
            _this.type = LOAD_USER_PAYMENT_METHODS_FAIL;
            return _this;
        }
        return LoadUserPaymentMethodsFail;
    }(LoaderFailAction));
    var LoadUserPaymentMethodsSuccess = /** @class */ (function (_super) {
        __extends(LoadUserPaymentMethodsSuccess, _super);
        function LoadUserPaymentMethodsSuccess(payload) {
            var _this = _super.call(this, USER_PAYMENT_METHODS) || this;
            _this.payload = payload;
            _this.type = LOAD_USER_PAYMENT_METHODS_SUCCESS;
            return _this;
        }
        return LoadUserPaymentMethodsSuccess;
    }(LoaderSuccessAction));
    var SetDefaultUserPaymentMethod = /** @class */ (function (_super) {
        __extends(SetDefaultUserPaymentMethod, _super);
        function SetDefaultUserPaymentMethod(payload) {
            var _this = _super.call(this, USER_PAYMENT_METHODS) || this;
            _this.payload = payload;
            _this.type = SET_DEFAULT_USER_PAYMENT_METHOD;
            return _this;
        }
        return SetDefaultUserPaymentMethod;
    }(LoaderLoadAction));
    var SetDefaultUserPaymentMethodFail = /** @class */ (function (_super) {
        __extends(SetDefaultUserPaymentMethodFail, _super);
        function SetDefaultUserPaymentMethodFail(payload) {
            var _this = _super.call(this, USER_PAYMENT_METHODS, payload) || this;
            _this.payload = payload;
            _this.type = SET_DEFAULT_USER_PAYMENT_METHOD_FAIL;
            return _this;
        }
        return SetDefaultUserPaymentMethodFail;
    }(LoaderFailAction));
    var SetDefaultUserPaymentMethodSuccess = /** @class */ (function (_super) {
        __extends(SetDefaultUserPaymentMethodSuccess, _super);
        function SetDefaultUserPaymentMethodSuccess(payload) {
            var _this = _super.call(this, USER_PAYMENT_METHODS) || this;
            _this.payload = payload;
            _this.type = SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS;
            return _this;
        }
        return SetDefaultUserPaymentMethodSuccess;
    }(LoaderSuccessAction));
    var DeleteUserPaymentMethod = /** @class */ (function (_super) {
        __extends(DeleteUserPaymentMethod, _super);
        function DeleteUserPaymentMethod(payload) {
            var _this = _super.call(this, USER_PAYMENT_METHODS) || this;
            _this.payload = payload;
            _this.type = DELETE_USER_PAYMENT_METHOD;
            return _this;
        }
        return DeleteUserPaymentMethod;
    }(LoaderLoadAction));
    var DeleteUserPaymentMethodFail = /** @class */ (function (_super) {
        __extends(DeleteUserPaymentMethodFail, _super);
        function DeleteUserPaymentMethodFail(payload) {
            var _this = _super.call(this, USER_PAYMENT_METHODS, payload) || this;
            _this.payload = payload;
            _this.type = DELETE_USER_PAYMENT_METHOD_FAIL;
            return _this;
        }
        return DeleteUserPaymentMethodFail;
    }(LoaderFailAction));
    var DeleteUserPaymentMethodSuccess = /** @class */ (function (_super) {
        __extends(DeleteUserPaymentMethodSuccess, _super);
        function DeleteUserPaymentMethodSuccess(payload) {
            var _this = _super.call(this, USER_PAYMENT_METHODS) || this;
            _this.payload = payload;
            _this.type = DELETE_USER_PAYMENT_METHOD_SUCCESS;
            return _this;
        }
        return DeleteUserPaymentMethodSuccess;
    }(LoaderSuccessAction));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOAD_REGIONS = '[User] Load Regions';
    /** @type {?} */
    var LOAD_REGIONS_SUCCESS = '[User] Load Regions Success';
    /** @type {?} */
    var LOAD_REGIONS_FAIL = '[User] Load Regions Fail';
    var LoadRegions = /** @class */ (function () {
        function LoadRegions(payload) {
            this.payload = payload;
            this.type = LOAD_REGIONS;
        }
        return LoadRegions;
    }());
    var LoadRegionsFail = /** @class */ (function () {
        function LoadRegionsFail(payload) {
            this.payload = payload;
            this.type = LOAD_REGIONS_FAIL;
        }
        return LoadRegionsFail;
    }());
    var LoadRegionsSuccess = /** @class */ (function () {
        function LoadRegionsSuccess(payload) {
            this.payload = payload;
            this.type = LOAD_REGIONS_SUCCESS;
        }
        return LoadRegionsSuccess;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var RESET_PASSWORD = '[User] Reset Password';
    /** @type {?} */
    var RESET_PASSWORD_SUCCESS = '[User] Reset Password Success';
    /** @type {?} */
    var RESET_PASSWORD_FAIL = '[User] Reset Password Fail';
    var ResetPassword = /** @class */ (function () {
        function ResetPassword(payload) {
            this.payload = payload;
            this.type = RESET_PASSWORD;
        }
        return ResetPassword;
    }());
    var ResetPasswordFail = /** @class */ (function () {
        function ResetPasswordFail(payload) {
            this.payload = payload;
            this.type = RESET_PASSWORD_FAIL;
        }
        return ResetPasswordFail;
    }());
    var ResetPasswordSuccess = /** @class */ (function () {
        function ResetPasswordSuccess() {
            this.type = RESET_PASSWORD_SUCCESS;
        }
        return ResetPasswordSuccess;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOAD_TITLES = '[User] Load Tiltes';
    /** @type {?} */
    var LOAD_TITLES_FAIL = '[User] Load Titles Fail';
    /** @type {?} */
    var LOAD_TITLES_SUCCESS = '[User] Load Titles Success';
    var LoadTitles = /** @class */ (function () {
        function LoadTitles() {
            this.type = LOAD_TITLES;
        }
        return LoadTitles;
    }());
    var LoadTitlesFail = /** @class */ (function () {
        function LoadTitlesFail(payload) {
            this.payload = payload;
            this.type = LOAD_TITLES_FAIL;
        }
        return LoadTitlesFail;
    }());
    var LoadTitlesSuccess = /** @class */ (function () {
        function LoadTitlesSuccess(payload) {
            this.payload = payload;
            this.type = LOAD_TITLES_SUCCESS;
        }
        return LoadTitlesSuccess;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var PROCESS_FEATURE = 'process';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var UPDATE_EMAIL = '[User] Update Email';
    /** @type {?} */
    var UPDATE_EMAIL_ERROR = '[User] Update Email Error';
    /** @type {?} */
    var UPDATE_EMAIL_SUCCESS = '[User] Update Email Success';
    /** @type {?} */
    var RESET_EMAIL = '[User] Reset Email';
    var UpdateEmailAction = /** @class */ (function (_super) {
        __extends(UpdateEmailAction, _super);
        function UpdateEmailAction(payload) {
            var _this = _super.call(this, PROCESS_FEATURE, UPDATE_EMAIL_PROCESS_ID) || this;
            _this.payload = payload;
            _this.type = UPDATE_EMAIL;
            return _this;
        }
        return UpdateEmailAction;
    }(EntityLoadAction));
    var UpdateEmailSuccessAction = /** @class */ (function (_super) {
        __extends(UpdateEmailSuccessAction, _super);
        function UpdateEmailSuccessAction(newUid) {
            var _this = _super.call(this, PROCESS_FEATURE, UPDATE_EMAIL_PROCESS_ID) || this;
            _this.newUid = newUid;
            _this.type = UPDATE_EMAIL_SUCCESS;
            return _this;
        }
        return UpdateEmailSuccessAction;
    }(EntitySuccessAction));
    var UpdateEmailErrorAction = /** @class */ (function (_super) {
        __extends(UpdateEmailErrorAction, _super);
        function UpdateEmailErrorAction(payload) {
            var _this = _super.call(this, PROCESS_FEATURE, UPDATE_EMAIL_PROCESS_ID, payload) || this;
            _this.payload = payload;
            _this.type = UPDATE_EMAIL_ERROR;
            return _this;
        }
        return UpdateEmailErrorAction;
    }(EntityFailAction));
    var ResetUpdateEmailAction = /** @class */ (function (_super) {
        __extends(ResetUpdateEmailAction, _super);
        function ResetUpdateEmailAction() {
            var _this = _super.call(this, PROCESS_FEATURE, UPDATE_EMAIL_PROCESS_ID) || this;
            _this.type = RESET_EMAIL;
            return _this;
        }
        return ResetUpdateEmailAction;
    }(EntityResetAction));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var UPDATE_PASSWORD = '[User] Update Password';
    /** @type {?} */
    var UPDATE_PASSWORD_FAIL = '[User] Update Password Fail';
    /** @type {?} */
    var UPDATE_PASSWORD_SUCCESS = '[User] Update Password Success';
    /** @type {?} */
    var UPDATE_PASSWORD_RESET = '[User] Reset Update Password Process State';
    var UpdatePassword = /** @class */ (function (_super) {
        __extends(UpdatePassword, _super);
        function UpdatePassword(payload) {
            var _this = _super.call(this, PROCESS_FEATURE, UPDATE_PASSWORD_PROCESS_ID) || this;
            _this.payload = payload;
            _this.type = UPDATE_PASSWORD;
            return _this;
        }
        return UpdatePassword;
    }(EntityLoadAction));
    var UpdatePasswordFail = /** @class */ (function (_super) {
        __extends(UpdatePasswordFail, _super);
        function UpdatePasswordFail(payload) {
            var _this = _super.call(this, PROCESS_FEATURE, UPDATE_PASSWORD_PROCESS_ID, payload) || this;
            _this.payload = payload;
            _this.type = UPDATE_PASSWORD_FAIL;
            return _this;
        }
        return UpdatePasswordFail;
    }(EntityFailAction));
    var UpdatePasswordSuccess = /** @class */ (function (_super) {
        __extends(UpdatePasswordSuccess, _super);
        function UpdatePasswordSuccess() {
            var _this = _super.call(this, PROCESS_FEATURE, UPDATE_PASSWORD_PROCESS_ID) || this;
            _this.type = UPDATE_PASSWORD_SUCCESS;
            return _this;
        }
        return UpdatePasswordSuccess;
    }(EntitySuccessAction));
    var UpdatePasswordReset = /** @class */ (function (_super) {
        __extends(UpdatePasswordReset, _super);
        function UpdatePasswordReset() {
            var _this = _super.call(this, PROCESS_FEATURE, UPDATE_PASSWORD_PROCESS_ID) || this;
            _this.type = UPDATE_PASSWORD_RESET;
            return _this;
        }
        return UpdatePasswordReset;
    }(EntityResetAction));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOAD_USER_ADDRESSES = '[User] Load User Addresses';
    /** @type {?} */
    var LOAD_USER_ADDRESSES_FAIL = '[User] Load User Addresses Fail';
    /** @type {?} */
    var LOAD_USER_ADDRESSES_SUCCESS = '[User] Load User Addresses Success';
    /** @type {?} */
    var ADD_USER_ADDRESS = '[User] Add User Address';
    /** @type {?} */
    var ADD_USER_ADDRESS_FAIL = '[User] Add User Address Fail';
    /** @type {?} */
    var ADD_USER_ADDRESS_SUCCESS = '[User] Add User Address Success';
    /** @type {?} */
    var UPDATE_USER_ADDRESS = '[User] Update User Address';
    /** @type {?} */
    var UPDATE_USER_ADDRESS_FAIL = '[User] Update User Address Fail';
    /** @type {?} */
    var UPDATE_USER_ADDRESS_SUCCESS = '[User] Update User Address Success';
    /** @type {?} */
    var DELETE_USER_ADDRESS = '[User] Delete User Address';
    /** @type {?} */
    var DELETE_USER_ADDRESS_FAIL = '[User] Delete User Address Fail';
    /** @type {?} */
    var DELETE_USER_ADDRESS_SUCCESS = '[User] Delete User Address Success';
    var LoadUserAddresses = /** @class */ (function (_super) {
        __extends(LoadUserAddresses, _super);
        function LoadUserAddresses(payload) {
            var _this = _super.call(this, USER_ADDRESSES) || this;
            _this.payload = payload;
            _this.type = LOAD_USER_ADDRESSES;
            return _this;
        }
        return LoadUserAddresses;
    }(LoaderLoadAction));
    var LoadUserAddressesFail = /** @class */ (function (_super) {
        __extends(LoadUserAddressesFail, _super);
        function LoadUserAddressesFail(payload) {
            var _this = _super.call(this, USER_ADDRESSES, payload) || this;
            _this.payload = payload;
            _this.type = LOAD_USER_ADDRESSES_FAIL;
            return _this;
        }
        return LoadUserAddressesFail;
    }(LoaderFailAction));
    var LoadUserAddressesSuccess = /** @class */ (function (_super) {
        __extends(LoadUserAddressesSuccess, _super);
        function LoadUserAddressesSuccess(payload) {
            var _this = _super.call(this, USER_ADDRESSES) || this;
            _this.payload = payload;
            _this.type = LOAD_USER_ADDRESSES_SUCCESS;
            return _this;
        }
        return LoadUserAddressesSuccess;
    }(LoaderSuccessAction));
    // Adding address actions
    var  
    // Adding address actions
    AddUserAddress = /** @class */ (function (_super) {
        __extends(AddUserAddress, _super);
        function AddUserAddress(payload) {
            var _this = _super.call(this, USER_ADDRESSES) || this;
            _this.payload = payload;
            _this.type = ADD_USER_ADDRESS;
            return _this;
        }
        return AddUserAddress;
    }(LoaderLoadAction));
    var AddUserAddressFail = /** @class */ (function (_super) {
        __extends(AddUserAddressFail, _super);
        function AddUserAddressFail(payload) {
            var _this = _super.call(this, USER_ADDRESSES, payload) || this;
            _this.payload = payload;
            _this.type = ADD_USER_ADDRESS_FAIL;
            return _this;
        }
        return AddUserAddressFail;
    }(LoaderFailAction));
    var AddUserAddressSuccess = /** @class */ (function (_super) {
        __extends(AddUserAddressSuccess, _super);
        function AddUserAddressSuccess(payload) {
            var _this = _super.call(this, USER_ADDRESSES) || this;
            _this.payload = payload;
            _this.type = ADD_USER_ADDRESS_SUCCESS;
            return _this;
        }
        return AddUserAddressSuccess;
    }(LoaderSuccessAction));
    // Updating address actions
    var  
    // Updating address actions
    UpdateUserAddress = /** @class */ (function (_super) {
        __extends(UpdateUserAddress, _super);
        function UpdateUserAddress(payload) {
            var _this = _super.call(this, USER_ADDRESSES) || this;
            _this.payload = payload;
            _this.type = UPDATE_USER_ADDRESS;
            return _this;
        }
        return UpdateUserAddress;
    }(LoaderLoadAction));
    var UpdateUserAddressFail = /** @class */ (function (_super) {
        __extends(UpdateUserAddressFail, _super);
        function UpdateUserAddressFail(payload) {
            var _this = _super.call(this, USER_ADDRESSES, payload) || this;
            _this.payload = payload;
            _this.type = UPDATE_USER_ADDRESS_FAIL;
            return _this;
        }
        return UpdateUserAddressFail;
    }(LoaderFailAction));
    var UpdateUserAddressSuccess = /** @class */ (function (_super) {
        __extends(UpdateUserAddressSuccess, _super);
        function UpdateUserAddressSuccess(payload) {
            var _this = _super.call(this, USER_ADDRESSES) || this;
            _this.payload = payload;
            _this.type = UPDATE_USER_ADDRESS_SUCCESS;
            return _this;
        }
        return UpdateUserAddressSuccess;
    }(LoaderSuccessAction));
    // Deleting address actions
    var  
    // Deleting address actions
    DeleteUserAddress = /** @class */ (function (_super) {
        __extends(DeleteUserAddress, _super);
        function DeleteUserAddress(payload) {
            var _this = _super.call(this, USER_ADDRESSES) || this;
            _this.payload = payload;
            _this.type = DELETE_USER_ADDRESS;
            return _this;
        }
        return DeleteUserAddress;
    }(LoaderLoadAction));
    var DeleteUserAddressFail = /** @class */ (function (_super) {
        __extends(DeleteUserAddressFail, _super);
        function DeleteUserAddressFail(payload) {
            var _this = _super.call(this, USER_ADDRESSES, payload) || this;
            _this.payload = payload;
            _this.type = DELETE_USER_ADDRESS_FAIL;
            return _this;
        }
        return DeleteUserAddressFail;
    }(LoaderFailAction));
    var DeleteUserAddressSuccess = /** @class */ (function (_super) {
        __extends(DeleteUserAddressSuccess, _super);
        function DeleteUserAddressSuccess(payload) {
            var _this = _super.call(this, USER_ADDRESSES) || this;
            _this.payload = payload;
            _this.type = DELETE_USER_ADDRESS_SUCCESS;
            return _this;
        }
        return DeleteUserAddressSuccess;
    }(LoaderSuccessAction));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOAD_USER_DETAILS = '[User] Load User Details';
    /** @type {?} */
    var LOAD_USER_DETAILS_FAIL = '[User] Load User Details Fail';
    /** @type {?} */
    var LOAD_USER_DETAILS_SUCCESS = '[User] Load User Details Success';
    /** @type {?} */
    var UPDATE_USER_DETAILS = '[User] Update User Details';
    /** @type {?} */
    var UPDATE_USER_DETAILS_FAIL = '[User] Update User Details Fail';
    /** @type {?} */
    var UPDATE_USER_DETAILS_SUCCESS = '[User] Update User Details Success';
    /** @type {?} */
    var RESET_USER_DETAILS = '[User] Reset User Details';
    var LoadUserDetails = /** @class */ (function () {
        function LoadUserDetails(payload) {
            this.payload = payload;
            this.type = LOAD_USER_DETAILS;
        }
        return LoadUserDetails;
    }());
    var LoadUserDetailsFail = /** @class */ (function () {
        function LoadUserDetailsFail(payload) {
            this.payload = payload;
            this.type = LOAD_USER_DETAILS_FAIL;
        }
        return LoadUserDetailsFail;
    }());
    var LoadUserDetailsSuccess = /** @class */ (function () {
        function LoadUserDetailsSuccess(payload) {
            this.payload = payload;
            this.type = LOAD_USER_DETAILS_SUCCESS;
        }
        return LoadUserDetailsSuccess;
    }());
    var UpdateUserDetails = /** @class */ (function (_super) {
        __extends(UpdateUserDetails, _super);
        function UpdateUserDetails(payload) {
            var _this = _super.call(this, PROCESS_FEATURE, UPDATE_USER_DETAILS_PROCESS_ID) || this;
            _this.payload = payload;
            _this.type = UPDATE_USER_DETAILS;
            return _this;
        }
        return UpdateUserDetails;
    }(EntityLoadAction));
    var UpdateUserDetailsFail = /** @class */ (function (_super) {
        __extends(UpdateUserDetailsFail, _super);
        function UpdateUserDetailsFail(payload) {
            var _this = _super.call(this, PROCESS_FEATURE, UPDATE_USER_DETAILS_PROCESS_ID, payload) || this;
            _this.payload = payload;
            _this.type = UPDATE_USER_DETAILS_FAIL;
            return _this;
        }
        return UpdateUserDetailsFail;
    }(EntityFailAction));
    var UpdateUserDetailsSuccess = /** @class */ (function (_super) {
        __extends(UpdateUserDetailsSuccess, _super);
        function UpdateUserDetailsSuccess(userUpdates) {
            var _this = _super.call(this, PROCESS_FEATURE, UPDATE_USER_DETAILS_PROCESS_ID) || this;
            _this.userUpdates = userUpdates;
            _this.type = UPDATE_USER_DETAILS_SUCCESS;
            return _this;
        }
        return UpdateUserDetailsSuccess;
    }(EntitySuccessAction));
    var ResetUpdateUserDetails = /** @class */ (function (_super) {
        __extends(ResetUpdateUserDetails, _super);
        function ResetUpdateUserDetails() {
            var _this = _super.call(this, PROCESS_FEATURE, UPDATE_USER_DETAILS_PROCESS_ID) || this;
            _this.type = RESET_USER_DETAILS;
            return _this;
        }
        return ResetUpdateUserDetails;
    }(EntityResetAction));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOAD_USER_ORDERS = '[User] Load User Orders';
    /** @type {?} */
    var LOAD_USER_ORDERS_FAIL = '[User] Load User Orders Fail';
    /** @type {?} */
    var LOAD_USER_ORDERS_SUCCESS = '[User] Load User Orders Success';
    /** @type {?} */
    var CLEAR_USER_ORDERS = '[User] Clear User Orders';
    var LoadUserOrders = /** @class */ (function (_super) {
        __extends(LoadUserOrders, _super);
        function LoadUserOrders(payload) {
            var _this = _super.call(this, USER_ORDERS) || this;
            _this.payload = payload;
            _this.type = LOAD_USER_ORDERS;
            return _this;
        }
        return LoadUserOrders;
    }(LoaderLoadAction));
    var LoadUserOrdersFail = /** @class */ (function (_super) {
        __extends(LoadUserOrdersFail, _super);
        function LoadUserOrdersFail(payload) {
            var _this = _super.call(this, USER_ORDERS, payload) || this;
            _this.payload = payload;
            _this.type = LOAD_USER_ORDERS_FAIL;
            return _this;
        }
        return LoadUserOrdersFail;
    }(LoaderFailAction));
    var LoadUserOrdersSuccess = /** @class */ (function (_super) {
        __extends(LoadUserOrdersSuccess, _super);
        function LoadUserOrdersSuccess(payload) {
            var _this = _super.call(this, USER_ORDERS) || this;
            _this.payload = payload;
            _this.type = LOAD_USER_ORDERS_SUCCESS;
            return _this;
        }
        return LoadUserOrdersSuccess;
    }(LoaderSuccessAction));
    var ClearUserOrders = /** @class */ (function () {
        function ClearUserOrders() {
            this.type = CLEAR_USER_ORDERS;
        }
        return ClearUserOrders;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var REGISTER_USER = '[User] Register User';
    /** @type {?} */
    var REGISTER_USER_FAIL = '[User] Register User Fail';
    /** @type {?} */
    var REGISTER_USER_SUCCESS = '[User] Register User Success';
    /** @type {?} */
    var REMOVE_USER = '[User] Remove User';
    /** @type {?} */
    var REMOVE_USER_FAIL = '[User] Remove User Fail';
    /** @type {?} */
    var REMOVE_USER_SUCCESS = '[User] Remove User Success';
    /** @type {?} */
    var REMOVE_USER_RESET = '[User] Reset Remove User Process State';
    var RegisterUser = /** @class */ (function () {
        function RegisterUser(payload) {
            this.payload = payload;
            this.type = REGISTER_USER;
        }
        return RegisterUser;
    }());
    var RegisterUserFail = /** @class */ (function () {
        function RegisterUserFail(payload) {
            this.payload = payload;
            this.type = REGISTER_USER_FAIL;
        }
        return RegisterUserFail;
    }());
    var RegisterUserSuccess = /** @class */ (function () {
        function RegisterUserSuccess() {
            this.type = REGISTER_USER_SUCCESS;
        }
        return RegisterUserSuccess;
    }());
    var RemoveUser = /** @class */ (function (_super) {
        __extends(RemoveUser, _super);
        function RemoveUser(payload) {
            var _this = _super.call(this, PROCESS_FEATURE, REMOVE_USER_PROCESS_ID) || this;
            _this.payload = payload;
            _this.type = REMOVE_USER;
            return _this;
        }
        return RemoveUser;
    }(EntityLoadAction));
    var RemoveUserFail = /** @class */ (function (_super) {
        __extends(RemoveUserFail, _super);
        function RemoveUserFail(payload) {
            var _this = _super.call(this, PROCESS_FEATURE, REMOVE_USER_PROCESS_ID, payload) || this;
            _this.payload = payload;
            _this.type = REMOVE_USER_FAIL;
            return _this;
        }
        return RemoveUserFail;
    }(EntityFailAction));
    var RemoveUserSuccess = /** @class */ (function (_super) {
        __extends(RemoveUserSuccess, _super);
        function RemoveUserSuccess() {
            var _this = _super.call(this, PROCESS_FEATURE, REMOVE_USER_PROCESS_ID) || this;
            _this.type = REMOVE_USER_SUCCESS;
            return _this;
        }
        return RemoveUserSuccess;
    }(EntitySuccessAction));
    var RemoveUserReset = /** @class */ (function (_super) {
        __extends(RemoveUserReset, _super);
        function RemoveUserReset() {
            var _this = _super.call(this, PROCESS_FEATURE, REMOVE_USER_PROCESS_ID) || this;
            _this.type = REMOVE_USER_RESET;
            return _this;
        }
        return RemoveUserReset;
    }(EntityResetAction));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CLEAR_MISCS_DATA = '[User] Clear User Misc Data';
    var ClearMiscsData = /** @class */ (function () {
        function ClearMiscsData() {
            this.type = CLEAR_MISCS_DATA;
        }
        return ClearMiscsData;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$a = {
        entities: {},
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$a(state, action) {
        if (state === void 0) {
            state = initialState$a;
        }
        switch (action.type) {
            case LOAD_BILLING_COUNTRIES_SUCCESS: {
                /** @type {?} */
                var billingCountries = action.payload;
                /** @type {?} */
                var entities = billingCountries.reduce(function (countryEntities, name) {
                    var _a;
                    return __assign({}, countryEntities, (_a = {}, _a[name.isocode] = name, _a));
                }, __assign({}, state.entities));
                return __assign({}, state, { entities: entities });
            }
            case CLEAR_MISCS_DATA: {
                return initialState$a;
            }
        }
        return state;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$b = {
        entities: {},
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$b(state, action) {
        if (state === void 0) {
            state = initialState$b;
        }
        switch (action.type) {
            case LOAD_DELIVERY_COUNTRIES_SUCCESS: {
                /** @type {?} */
                var deliveryCountries = action.payload;
                /** @type {?} */
                var entities = deliveryCountries.reduce(function (countryEntities, country) {
                    var _a;
                    return __assign({}, countryEntities, (_a = {}, _a[country.isocode] = country, _a));
                }, __assign({}, state.entities));
                return __assign({}, state, { entities: entities });
            }
            case CLEAR_MISCS_DATA: {
                return initialState$b;
            }
        }
        return state;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$c = {
        order: {},
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$c(state, action) {
        if (state === void 0) {
            state = initialState$c;
        }
        switch (action.type) {
            case LOAD_ORDER_DETAILS_SUCCESS: {
                /** @type {?} */
                var order = action.payload;
                return __assign({}, state, { order: order });
            }
            case CLEAR_ORDER_DETAILS: {
                return initialState$c;
            }
        }
        return state;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$d = [];
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$d(state, action) {
        if (state === void 0) {
            state = initialState$d;
        }
        switch (action.type) {
            case LOAD_USER_PAYMENT_METHODS_SUCCESS: {
                return action.payload ? action.payload : initialState$d;
            }
            case LOAD_USER_PAYMENT_METHODS_FAIL: {
                return initialState$d;
            }
        }
        return state;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$e = {
        entities: [],
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$e(state, action) {
        if (state === void 0) {
            state = initialState$e;
        }
        switch (action.type) {
            case LOAD_REGIONS_SUCCESS: {
                /** @type {?} */
                var entities = action.payload;
                if (entities) {
                    return __assign({}, state, { entities: entities });
                }
                return initialState$e;
            }
            case LOAD_REGIONS: {
                return __assign({}, state);
            }
            case CLEAR_MISCS_DATA: {
                return __assign({}, initialState$e);
            }
        }
        return state;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$f = false;
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$f(state, action) {
        if (state === void 0) {
            state = initialState$f;
        }
        switch (action.type) {
            case RESET_PASSWORD_SUCCESS: {
                return true;
            }
        }
        return state;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$g = {
        entities: {},
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$g(state, action) {
        if (state === void 0) {
            state = initialState$g;
        }
        switch (action.type) {
            case LOAD_TITLES_SUCCESS: {
                /** @type {?} */
                var titles = action.payload;
                /** @type {?} */
                var entities = titles.reduce(function (titleEntities, name) {
                    var _a;
                    return __assign({}, titleEntities, (_a = {}, _a[name.code] = name, _a));
                }, __assign({}, state.entities));
                return __assign({}, state, { entities: entities });
            }
            case CLEAR_MISCS_DATA: {
                return initialState$g;
            }
        }
        return state;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$h = [];
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$h(state, action) {
        if (state === void 0) {
            state = initialState$h;
        }
        switch (action.type) {
            case LOAD_USER_ADDRESSES_FAIL: {
                return initialState$h;
            }
            case LOAD_USER_ADDRESSES_SUCCESS: {
                return action.payload ? action.payload : initialState$h;
            }
        }
        return state;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$i = ( /** @type {?} */({}));
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$i(state, action) {
        if (state === void 0) {
            state = initialState$i;
        }
        switch (action.type) {
            case LOAD_USER_DETAILS_SUCCESS: {
                return action.payload;
            }
            case UPDATE_USER_DETAILS_SUCCESS: {
                /** @type {?} */
                var updatedDetails = __assign({}, state, action.userUpdates);
                return __assign({}, updatedDetails, { name: updatedDetails.firstName + " " + updatedDetails.lastName });
            }
        }
        return state;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$j = {
        orders: [],
        pagination: {},
        sorts: [],
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$j(state, action) {
        if (state === void 0) {
            state = initialState$j;
        }
        switch (action.type) {
            case LOAD_USER_ORDERS_SUCCESS: {
                return action.payload ? action.payload : initialState$j;
            }
            case LOAD_USER_ORDERS_FAIL: {
                return initialState$j;
            }
        }
        return state;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function getReducers$6() {
        return {
            account: i1$2.combineReducers({
                details: reducer$i,
            }),
            addresses: loaderReducer(USER_ADDRESSES, reducer$h),
            billingCountries: reducer$a,
            payments: loaderReducer(USER_PAYMENT_METHODS, reducer$d),
            orders: loaderReducer(USER_ORDERS, reducer$j),
            order: reducer$c,
            countries: reducer$b,
            titles: reducer$g,
            regions: reducer$e,
            resetPassword: reducer$f,
        };
    }
    /** @type {?} */
    var reducerToken$6 = new i0.InjectionToken('UserReducers');
    /** @type {?} */
    var reducerProvider$6 = {
        provide: reducerToken$6,
        useFactory: getReducers$6,
    };
    /**
     * @param {?} reducer
     * @return {?}
     */
    function clearUserState(reducer) {
        return function (state, action) {
            if (action.type === LOGOUT) {
                state = undefined;
            }
            return reducer(state, action);
        };
    }
    /** @type {?} */
    var metaReducers$3 = [clearUserState];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getUserState = i1$2.createFeatureSelector(USER_FEATURE);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getDetailsState = i1$2.createSelector(getUserState, function (state) { return state.account; });
    /** @type {?} */
    var getDetails = i1$2.createSelector(getDetailsState, function (state) { return state.details; });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getAddressesLoaderState = i1$2.createSelector(getUserState, function (state) { return state.addresses; });
    /** @type {?} */
    var getAddresses = i1$2.createSelector(getAddressesLoaderState, function (state) { return loaderValueSelector(state); });
    /** @type {?} */
    var getAddressesLoading = i1$2.createSelector(getAddressesLoaderState, function (state) { return loaderLoadingSelector(state); });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getPaymentMethodsState = i1$2.createSelector(getUserState, function (state) { return state.payments; });
    /** @type {?} */
    var getPaymentMethods = i1$2.createSelector(getPaymentMethodsState, function (state) { return loaderValueSelector(state); });
    /** @type {?} */
    var getPaymentMethodsLoading = i1$2.createSelector(getPaymentMethodsState, function (state) { return loaderLoadingSelector(state); });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getOrdersState = i1$2.createSelector(getUserState, function (state) { return state.orders; });
    /** @type {?} */
    var getOrdersLoaded = i1$2.createSelector(getOrdersState, function (state) { return loaderSuccessSelector(state); });
    /** @type {?} */
    var getOrders = i1$2.createSelector(getOrdersState, function (state) { return loaderValueSelector(state); });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getTitlesState = i1$2.createSelector(getUserState, function (state) { return state.titles; });
    /** @type {?} */
    var getTitlesEntites = i1$2.createSelector(getTitlesState, function (state) { return state.entities; });
    /** @type {?} */
    var getAllTitles = i1$2.createSelector(getTitlesEntites, function (entites) { return Object.keys(entites).map(function (code) { return entites[code]; }); });
    /** @type {?} */
    var titleSelectorFactory = function (code) {
        return i1$2.createSelector(getTitlesEntites, function (entities) { return (Object.keys(entities).length !== 0 ? entities[code] : null); });
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getDeliveryCountriesState = i1$2.createSelector(getUserState, function (state) { return state.countries; });
    /** @type {?} */
    var getDeliveryCountriesEntites = i1$2.createSelector(getDeliveryCountriesState, function (state) { return state.entities; });
    /** @type {?} */
    var getAllDeliveryCountries = i1$2.createSelector(getDeliveryCountriesEntites, function (entites) { return Object.keys(entites).map(function (isocode) { return entites[isocode]; }); });
    /** @type {?} */
    var countrySelectorFactory = function (isocode) {
        return i1$2.createSelector(getDeliveryCountriesEntites, function (entities) { return (Object.keys(entities).length !== 0 ? entities[isocode] : null); });
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getRegionsState = i1$2.createSelector(getUserState, function (state) { return state.regions; });
    /** @type {?} */
    var getAllRegions = i1$2.createSelector(getRegionsState, function (state) { return state.entities; });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getOrderState = i1$2.createSelector(getUserState, function (state) { return state.order; });
    /** @type {?} */
    var getOrderDetails$1 = i1$2.createSelector(getOrderState, function (state) { return state.order; });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getBillingCountriesState = i1$2.createSelector(getUserState, function (state) { return state.billingCountries; });
    /** @type {?} */
    var getBillingCountriesEntites = i1$2.createSelector(getBillingCountriesState, function (state) { return state.entities; });
    /** @type {?} */
    var getAllBillingCountries = i1$2.createSelector(getBillingCountriesEntites, function (entites) { return Object.keys(entites).map(function (isocode) { return entites[isocode]; }); });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getResetPassword = i1$2.createSelector(getUserState, function (state) { return state.resetPassword; });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     * @return {?}
     */
    function getProcessState() {
        return i1$2.createFeatureSelector(PROCESS_FEATURE);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     * @param {?} processId
     * @return {?}
     */
    function getProcessStateFactory(processId) {
        return i1$2.createSelector(getProcessState(), function (entityState) { return entityStateSelector(entityState, processId); });
    }
    /**
     * @template T
     * @param {?} processId
     * @return {?}
     */
    function getProcessLoadingFactory(processId) {
        return i1$2.createSelector(getProcessStateFactory(processId), function (loaderState) { return loaderLoadingSelector(loaderState); });
    }
    /**
     * @template T
     * @param {?} processId
     * @return {?}
     */
    function getProcessSuccessFactory(processId) {
        return i1$2.createSelector(getProcessStateFactory(processId), function (loaderState) { return loaderSuccessSelector(loaderState); });
    }
    /**
     * @template T
     * @param {?} processId
     * @return {?}
     */
    function getProcessErrorFactory(processId) {
        return i1$2.createSelector(getProcessStateFactory(processId), function (loaderState) { return loaderErrorSelector(loaderState); });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserService = /** @class */ (function () {
        function UserService(store) {
            this.store = store;
        }
        /**
         * Returns a user
         */
        /**
         * Returns a user
         * @return {?}
         */
        UserService.prototype.get = /**
         * Returns a user
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getDetails));
            };
        /**
         * Loads the user's details
         */
        /**
         * Loads the user's details
         * @param {?} userId
         * @return {?}
         */
        UserService.prototype.load = /**
         * Loads the user's details
         * @param {?} userId
         * @return {?}
         */
            function (userId) {
                this.store.dispatch(new LoadUserDetails(userId));
            };
        /**
         * Register a new user
         *
         * @param submitFormData as UserRegisterFormData
         */
        /**
         * Register a new user
         *
         * @param {?} userRegisterFormData
         * @return {?}
         */
        UserService.prototype.register = /**
         * Register a new user
         *
         * @param {?} userRegisterFormData
         * @return {?}
         */
            function (userRegisterFormData) {
                this.store.dispatch(new RegisterUser(userRegisterFormData));
            };
        /**
         * Remove user account, that's also called close user's account
         *
         * @param userId
         */
        /**
         * Remove user account, that's also called close user's account
         *
         * @param {?} userId
         * @return {?}
         */
        UserService.prototype.remove = /**
         * Remove user account, that's also called close user's account
         *
         * @param {?} userId
         * @return {?}
         */
            function (userId) {
                this.store.dispatch(new RemoveUser(userId));
            };
        /**
         * Returns the remove user loading flag
         */
        /**
         * Returns the remove user loading flag
         * @return {?}
         */
        UserService.prototype.getRemoveUserResultLoading = /**
         * Returns the remove user loading flag
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getProcessLoadingFactory(REMOVE_USER_PROCESS_ID)));
            };
        /**
         * Returns the remove user failure outcome.
         */
        /**
         * Returns the remove user failure outcome.
         * @return {?}
         */
        UserService.prototype.getRemoveUserResultError = /**
         * Returns the remove user failure outcome.
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getProcessErrorFactory(REMOVE_USER_PROCESS_ID)));
            };
        /**
         * Returns the remove user process success outcome.
         */
        /**
         * Returns the remove user process success outcome.
         * @return {?}
         */
        UserService.prototype.getRemoveUserResultSuccess = /**
         * Returns the remove user process success outcome.
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getProcessSuccessFactory(REMOVE_USER_PROCESS_ID)));
            };
        /**
         * Resets the remove user process state. The state needs to be reset after the process
         * concludes, regardless if it's a success or an error
         */
        /**
         * Resets the remove user process state. The state needs to be reset after the process
         * concludes, regardless if it's a success or an error
         * @return {?}
         */
        UserService.prototype.resetRemoveUserProcessState = /**
         * Resets the remove user process state. The state needs to be reset after the process
         * concludes, regardless if it's a success or an error
         * @return {?}
         */
            function () {
                this.store.dispatch(new RemoveUserReset());
            };
        /**
         * Returns an order's detail
         */
        /**
         * Returns an order's detail
         * @return {?}
         */
        UserService.prototype.getOrderDetails = /**
         * Returns an order's detail
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getOrderDetails$1));
            };
        /**
         * Retrieves order's details
         *
         * @param userId a user's ID
         * @param orderCode an order code
         */
        /**
         * Retrieves order's details
         *
         * @param {?} userId a user's ID
         * @param {?} orderCode an order code
         * @return {?}
         */
        UserService.prototype.loadOrderDetails = /**
         * Retrieves order's details
         *
         * @param {?} userId a user's ID
         * @param {?} orderCode an order code
         * @return {?}
         */
            function (userId, orderCode) {
                this.store.dispatch(new LoadOrderDetails({
                    userId: userId,
                    orderCode: orderCode,
                }));
            };
        /**
         * Clears order's details
         */
        /**
         * Clears order's details
         * @return {?}
         */
        UserService.prototype.clearOrderDetails = /**
         * Clears order's details
         * @return {?}
         */
            function () {
                this.store.dispatch(new ClearOrderDetails());
            };
        /**
         * Returns order history list
         */
        /**
         * Returns order history list
         * @param {?} userId
         * @param {?} pageSize
         * @return {?}
         */
        UserService.prototype.getOrderHistoryList = /**
         * Returns order history list
         * @param {?} userId
         * @param {?} pageSize
         * @return {?}
         */
            function (userId, pageSize) {
                var _this = this;
                return this.store.pipe(i1$2.select(getOrdersState), operators.tap(function (orderListState) {
                    /** @type {?} */
                    var attemptedLoad = orderListState.loading ||
                        orderListState.success ||
                        orderListState.error;
                    if (!attemptedLoad && !!userId) {
                        _this.loadOrderList(userId, pageSize);
                    }
                }), operators.map(function (orderListState) { return orderListState.value; }));
            };
        /**
         * Returns a loaded flag for order history list
         */
        /**
         * Returns a loaded flag for order history list
         * @return {?}
         */
        UserService.prototype.getOrderHistoryListLoaded = /**
         * Returns a loaded flag for order history list
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getOrdersLoaded));
            };
        /**
         * Loads all user's payment methods.
         * @param userId a user ID
         */
        /**
         * Loads all user's payment methods.
         * @param {?} userId a user ID
         * @return {?}
         */
        UserService.prototype.loadPaymentMethods = /**
         * Loads all user's payment methods.
         * @param {?} userId a user ID
         * @return {?}
         */
            function (userId) {
                this.store.dispatch(new LoadUserPaymentMethods(userId));
            };
        /**
         * Returns all user's payment methods
         */
        /**
         * Returns all user's payment methods
         * @return {?}
         */
        UserService.prototype.getPaymentMethods = /**
         * Returns all user's payment methods
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getPaymentMethods));
            };
        /**
         * Returns a loading flag for payment methods
         */
        /**
         * Returns a loading flag for payment methods
         * @return {?}
         */
        UserService.prototype.getPaymentMethodsLoading = /**
         * Returns a loading flag for payment methods
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getPaymentMethodsLoading));
            };
        /**
         * Sets the payment as a default one
         * @param userId a user ID
         * @param paymentMethodId a payment method ID
         */
        /**
         * Sets the payment as a default one
         * @param {?} userId a user ID
         * @param {?} paymentMethodId a payment method ID
         * @return {?}
         */
        UserService.prototype.setPaymentMethodAsDefault = /**
         * Sets the payment as a default one
         * @param {?} userId a user ID
         * @param {?} paymentMethodId a payment method ID
         * @return {?}
         */
            function (userId, paymentMethodId) {
                this.store.dispatch(new SetDefaultUserPaymentMethod({
                    userId: userId,
                    paymentMethodId: paymentMethodId,
                }));
            };
        /**
         * Deletes the payment method
         *
         * @param userId a user ID
         * @param paymentMethodId a payment method ID
         */
        /**
         * Deletes the payment method
         *
         * @param {?} userId a user ID
         * @param {?} paymentMethodId a payment method ID
         * @return {?}
         */
        UserService.prototype.deletePaymentMethod = /**
         * Deletes the payment method
         *
         * @param {?} userId a user ID
         * @param {?} paymentMethodId a payment method ID
         * @return {?}
         */
            function (userId, paymentMethodId) {
                this.store.dispatch(new DeleteUserPaymentMethod({
                    userId: userId,
                    paymentMethodId: paymentMethodId,
                }));
            };
        /**
         * Retrieves an order list
         * @param userId a user ID
         * @param pageSize page size
         * @param currentPage current page
         * @param sort sort
         */
        /**
         * Retrieves an order list
         * @param {?} userId a user ID
         * @param {?} pageSize page size
         * @param {?=} currentPage current page
         * @param {?=} sort sort
         * @return {?}
         */
        UserService.prototype.loadOrderList = /**
         * Retrieves an order list
         * @param {?} userId a user ID
         * @param {?} pageSize page size
         * @param {?=} currentPage current page
         * @param {?=} sort sort
         * @return {?}
         */
            function (userId, pageSize, currentPage, sort) {
                this.store.dispatch(new LoadUserOrders({
                    userId: userId,
                    pageSize: pageSize,
                    currentPage: currentPage,
                    sort: sort,
                }));
            };
        /**
         * Retrieves user's addresses
         * @param userId a user ID
         */
        /**
         * Retrieves user's addresses
         * @param {?} userId a user ID
         * @return {?}
         */
        UserService.prototype.loadAddresses = /**
         * Retrieves user's addresses
         * @param {?} userId a user ID
         * @return {?}
         */
            function (userId) {
                this.store.dispatch(new LoadUserAddresses(userId));
            };
        /**
         * Adds user address
         * @param userId a user ID
         * @param address a user address
         */
        /**
         * Adds user address
         * @param {?} userId a user ID
         * @param {?} address a user address
         * @return {?}
         */
        UserService.prototype.addUserAddress = /**
         * Adds user address
         * @param {?} userId a user ID
         * @param {?} address a user address
         * @return {?}
         */
            function (userId, address) {
                this.store.dispatch(new AddUserAddress({
                    userId: userId,
                    address: address,
                }));
            };
        /**
         * Sets user address as default
         * @param userId a user ID
         * @param addressId a user address ID
         */
        /**
         * Sets user address as default
         * @param {?} userId a user ID
         * @param {?} addressId a user address ID
         * @return {?}
         */
        UserService.prototype.setAddressAsDefault = /**
         * Sets user address as default
         * @param {?} userId a user ID
         * @param {?} addressId a user address ID
         * @return {?}
         */
            function (userId, addressId) {
                this.store.dispatch(new UpdateUserAddress({
                    userId: userId,
                    addressId: addressId,
                    address: { defaultAddress: true },
                }));
            };
        /**
         * Updates existing user address
         * @param userId a user ID
         * @param addressId a user address ID
         * @param address a user address
         */
        /**
         * Updates existing user address
         * @param {?} userId a user ID
         * @param {?} addressId a user address ID
         * @param {?} address a user address
         * @return {?}
         */
        UserService.prototype.updateUserAddress = /**
         * Updates existing user address
         * @param {?} userId a user ID
         * @param {?} addressId a user address ID
         * @param {?} address a user address
         * @return {?}
         */
            function (userId, addressId, address) {
                this.store.dispatch(new UpdateUserAddress({
                    userId: userId,
                    addressId: addressId,
                    address: address,
                }));
            };
        /**
         * Deletes existing user address
         * @param userId a user ID
         * @param addressId a user address ID
         */
        /**
         * Deletes existing user address
         * @param {?} userId a user ID
         * @param {?} addressId a user address ID
         * @return {?}
         */
        UserService.prototype.deleteUserAddress = /**
         * Deletes existing user address
         * @param {?} userId a user ID
         * @param {?} addressId a user address ID
         * @return {?}
         */
            function (userId, addressId) {
                this.store.dispatch(new DeleteUserAddress({
                    userId: userId,
                    addressId: addressId,
                }));
            };
        /**
         * Returns addresses
         */
        /**
         * Returns addresses
         * @return {?}
         */
        UserService.prototype.getAddresses = /**
         * Returns addresses
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getAddresses));
            };
        /**
         * Returns a loading flag for addresses
         */
        /**
         * Returns a loading flag for addresses
         * @return {?}
         */
        UserService.prototype.getAddressesLoading = /**
         * Returns a loading flag for addresses
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getAddressesLoading));
            };
        /**
         * Returns titles
         */
        /**
         * Returns titles
         * @return {?}
         */
        UserService.prototype.getTitles = /**
         * Returns titles
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getAllTitles));
            };
        /**
         * Retrieves titles
         */
        /**
         * Retrieves titles
         * @return {?}
         */
        UserService.prototype.loadTitles = /**
         * Retrieves titles
         * @return {?}
         */
            function () {
                this.store.dispatch(new LoadTitles());
            };
        /**
         * Retrieves delivery countries
         */
        /**
         * Retrieves delivery countries
         * @return {?}
         */
        UserService.prototype.loadDeliveryCountries = /**
         * Retrieves delivery countries
         * @return {?}
         */
            function () {
                this.store.dispatch(new LoadDeliveryCountries());
            };
        /**
         * Returns all delivery countries
         */
        /**
         * Returns all delivery countries
         * @return {?}
         */
        UserService.prototype.getDeliveryCountries = /**
         * Returns all delivery countries
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getAllDeliveryCountries));
            };
        /**
         * Returns a country based on the provided `isocode`
         * @param isocode an isocode for a country
         */
        /**
         * Returns a country based on the provided `isocode`
         * @param {?} isocode an isocode for a country
         * @return {?}
         */
        UserService.prototype.getCountry = /**
         * Returns a country based on the provided `isocode`
         * @param {?} isocode an isocode for a country
         * @return {?}
         */
            function (isocode) {
                return this.store.pipe(i1$2.select(countrySelectorFactory(isocode)));
            };
        /**
         * Retrieves regions for specified country by `countryIsoCode`
         * @param countryIsoCode
         */
        /**
         * Retrieves regions for specified country by `countryIsoCode`
         * @param {?} countryIsoCode
         * @return {?}
         */
        UserService.prototype.loadRegions = /**
         * Retrieves regions for specified country by `countryIsoCode`
         * @param {?} countryIsoCode
         * @return {?}
         */
            function (countryIsoCode) {
                this.store.dispatch(new LoadRegions(countryIsoCode));
            };
        /**
         * Returns all regions
         */
        /**
         * Returns all regions
         * @return {?}
         */
        UserService.prototype.getRegions = /**
         * Returns all regions
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getAllRegions));
            };
        /**
         * Returns all billing countries
         */
        /**
         * Returns all billing countries
         * @return {?}
         */
        UserService.prototype.getAllBillingCountries = /**
         * Returns all billing countries
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getAllBillingCountries));
            };
        /**
         * Retrieves billing countries
         */
        /**
         * Retrieves billing countries
         * @return {?}
         */
        UserService.prototype.loadBillingCountries = /**
         * Retrieves billing countries
         * @return {?}
         */
            function () {
                this.store.dispatch(new LoadBillingCountries());
            };
        /**
         * Cleaning order list
         */
        /**
         * Cleaning order list
         * @return {?}
         */
        UserService.prototype.clearOrderList = /**
         * Cleaning order list
         * @return {?}
         */
            function () {
                this.store.dispatch(new ClearUserOrders());
            };
        /**
         * Return whether user's password is successfully reset
         */
        /**
         * Return whether user's password is successfully reset
         * @return {?}
         */
        UserService.prototype.isPasswordReset = /**
         * Return whether user's password is successfully reset
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getResetPassword));
            };
        /**
         * Updates the user's details
         * @param userDetails to be updated
         */
        /**
         * Updates the user's details
         * @param {?} username
         * @param {?} userDetails to be updated
         * @return {?}
         */
        UserService.prototype.updatePersonalDetails = /**
         * Updates the user's details
         * @param {?} username
         * @param {?} userDetails to be updated
         * @return {?}
         */
            function (username, userDetails) {
                this.store.dispatch(new UpdateUserDetails({ username: username, userDetails: userDetails }));
            };
        /**
         * Returns the update user's personal details loading flag
         */
        /**
         * Returns the update user's personal details loading flag
         * @return {?}
         */
        UserService.prototype.getUpdatePersonalDetailsResultLoading = /**
         * Returns the update user's personal details loading flag
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getProcessLoadingFactory(UPDATE_USER_DETAILS_PROCESS_ID)));
            };
        /**
         * Returns the update user's personal details error flag
         */
        /**
         * Returns the update user's personal details error flag
         * @return {?}
         */
        UserService.prototype.getUpdatePersonalDetailsResultError = /**
         * Returns the update user's personal details error flag
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getProcessErrorFactory(UPDATE_USER_DETAILS_PROCESS_ID)));
            };
        /**
         * Returns the update user's personal details success flag
         */
        /**
         * Returns the update user's personal details success flag
         * @return {?}
         */
        UserService.prototype.getUpdatePersonalDetailsResultSuccess = /**
         * Returns the update user's personal details success flag
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getProcessSuccessFactory(UPDATE_USER_DETAILS_PROCESS_ID)));
            };
        /**
         * Resets the update user details processing state
         */
        /**
         * Resets the update user details processing state
         * @return {?}
         */
        UserService.prototype.resetUpdatePersonalDetailsProcessingState = /**
         * Resets the update user details processing state
         * @return {?}
         */
            function () {
                this.store.dispatch(new ResetUpdateUserDetails());
            };
        /**
         * Reset new password.  Part of the forgot password flow.
         * @param token
         * @param password
         */
        /**
         * Reset new password.  Part of the forgot password flow.
         * @param {?} token
         * @param {?} password
         * @return {?}
         */
        UserService.prototype.resetPassword = /**
         * Reset new password.  Part of the forgot password flow.
         * @param {?} token
         * @param {?} password
         * @return {?}
         */
            function (token, password) {
                this.store.dispatch(new ResetPassword({ token: token, password: password }));
            };
        /*
         * Request an email to reset a forgotten password.
         */
        /*
           * Request an email to reset a forgotten password.
           */
        /**
         * @param {?} userEmailAddress
         * @return {?}
         */
        UserService.prototype.requestForgotPasswordEmail = /*
           * Request an email to reset a forgotten password.
           */
            /**
             * @param {?} userEmailAddress
             * @return {?}
             */
            function (userEmailAddress) {
                this.store.dispatch(new ForgotPasswordEmailRequest(userEmailAddress));
            };
        /**
         * Updates the user's email
         * @param uid to be updated
         */
        /**
         * Updates the user's email
         * @param {?} uid to be updated
         * @param {?} password
         * @param {?} newUid
         * @return {?}
         */
        UserService.prototype.updateEmail = /**
         * Updates the user's email
         * @param {?} uid to be updated
         * @param {?} password
         * @param {?} newUid
         * @return {?}
         */
            function (uid, password, newUid) {
                this.store.dispatch(new UpdateEmailAction({ uid: uid, password: password, newUid: newUid }));
            };
        /**
         * Returns the update user's email success flag
         */
        /**
         * Returns the update user's email success flag
         * @return {?}
         */
        UserService.prototype.getUpdateEmailResultSuccess = /**
         * Returns the update user's email success flag
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getProcessSuccessFactory(UPDATE_EMAIL_PROCESS_ID)));
            };
        /**
         * Returns the update user's email error flag
         */
        /**
         * Returns the update user's email error flag
         * @return {?}
         */
        UserService.prototype.getUpdateEmailResultError = /**
         * Returns the update user's email error flag
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getProcessErrorFactory(UPDATE_EMAIL_PROCESS_ID)));
            };
        /**
         * Returns the update user's email loading flag
         */
        /**
         * Returns the update user's email loading flag
         * @return {?}
         */
        UserService.prototype.getUpdateEmailResultLoading = /**
         * Returns the update user's email loading flag
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getProcessLoadingFactory(UPDATE_EMAIL_PROCESS_ID)));
            };
        /**
         * Resets the update user's email processing state
         */
        /**
         * Resets the update user's email processing state
         * @return {?}
         */
        UserService.prototype.resetUpdateEmailResultState = /**
         * Resets the update user's email processing state
         * @return {?}
         */
            function () {
                this.store.dispatch(new ResetUpdateEmailAction());
            };
        /**
         * Updates the password for an authenticated user
         * @param userId the user id for which the password will be updated
         * @param oldPassword the current password that will be changed
         * @param newPassword the new password
         */
        /**
         * Updates the password for an authenticated user
         * @param {?} userId the user id for which the password will be updated
         * @param {?} oldPassword the current password that will be changed
         * @param {?} newPassword the new password
         * @return {?}
         */
        UserService.prototype.updatePassword = /**
         * Updates the password for an authenticated user
         * @param {?} userId the user id for which the password will be updated
         * @param {?} oldPassword the current password that will be changed
         * @param {?} newPassword the new password
         * @return {?}
         */
            function (userId, oldPassword, newPassword) {
                this.store.dispatch(new UpdatePassword({ userId: userId, oldPassword: oldPassword, newPassword: newPassword }));
            };
        /**
         * Returns the update passwrod loading flag
         */
        /**
         * Returns the update passwrod loading flag
         * @return {?}
         */
        UserService.prototype.getUpdatePasswordResultLoading = /**
         * Returns the update passwrod loading flag
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getProcessLoadingFactory(UPDATE_PASSWORD_PROCESS_ID)));
            };
        /**
         * Returns the update password failure outcome.
         */
        /**
         * Returns the update password failure outcome.
         * @return {?}
         */
        UserService.prototype.getUpdatePasswordResultError = /**
         * Returns the update password failure outcome.
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getProcessErrorFactory(UPDATE_PASSWORD_PROCESS_ID)));
            };
        /**
         * Returns the update password process success outcome.
         */
        /**
         * Returns the update password process success outcome.
         * @return {?}
         */
        UserService.prototype.getUpdatePasswordResultSuccess = /**
         * Returns the update password process success outcome.
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getProcessSuccessFactory(UPDATE_PASSWORD_PROCESS_ID)));
            };
        /**
         * Resets the update password process state. The state needs to be reset after the process
         * concludes, regardless if it's a success or an error
         */
        /**
         * Resets the update password process state. The state needs to be reset after the process
         * concludes, regardless if it's a success or an error
         * @return {?}
         */
        UserService.prototype.resetUpdatePasswordProcessState = /**
         * Resets the update password process state. The state needs to be reset after the process
         * concludes, regardless if it's a success or an error
         * @return {?}
         */
            function () {
                this.store.dispatch(new UpdatePasswordReset());
            };
        UserService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        UserService.ctorParameters = function () {
            return [
                { type: i1$2.Store }
            ];
        };
        return UserService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     * @return {?}
     */
    function getReducers$7() {
        return entityLoaderReducer(PROCESS_FEATURE);
    }
    /** @type {?} */
    var reducerToken$7 = new i0.InjectionToken('ProcessReducers');
    /** @type {?} */
    var reducerProvider$7 = {
        provide: reducerToken$7,
        useFactory: getReducers$7,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProcessStoreModule = /** @class */ (function () {
        function ProcessStoreModule() {
        }
        ProcessStoreModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [StateModule, i1$2.StoreModule.forFeature(PROCESS_FEATURE, reducerToken$7)],
                        providers: [reducerProvider$7],
                    },] }
        ];
        return ProcessStoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProcessModule = /** @class */ (function () {
        function ProcessModule() {
        }
        ProcessModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [ProcessStoreModule],
                    },] }
        ];
        return ProcessModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ENDPOINT_COUNTRIES = 'countries';
    /** @type {?} */
    var ENDPOINT_TITLES = 'titles';
    /** @type {?} */
    var ENDPOINT_CARD_TYPES = 'cardtypes';
    /** @type {?} */
    var ENDPOINT_REGIONS = 'regions';
    /** @type {?} */
    var COUNTRIES_TYPE_SHIPPING = 'SHIPPING';
    /** @type {?} */
    var COUNTRIES_TYPE_BILLING = 'BILLING';
    var OccMiscsService = /** @class */ (function () {
        function OccMiscsService(http, occEndpoints) {
            this.http = http;
            this.occEndpoints = occEndpoints;
        }
        /**
         * @return {?}
         */
        OccMiscsService.prototype.loadDeliveryCountries = /**
         * @return {?}
         */
            function () {
                return this.http
                    .get(this.occEndpoints.getEndpoint(ENDPOINT_COUNTRIES), {
                    params: new i1$1.HttpParams().set('type', COUNTRIES_TYPE_SHIPPING),
                })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error.json()); }));
            };
        /**
         * @return {?}
         */
        OccMiscsService.prototype.loadBillingCountries = /**
         * @return {?}
         */
            function () {
                return this.http
                    .get(this.occEndpoints.getEndpoint(ENDPOINT_COUNTRIES), {
                    params: new i1$1.HttpParams().set('type', COUNTRIES_TYPE_BILLING),
                })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error.json()); }));
            };
        /**
         * @return {?}
         */
        OccMiscsService.prototype.loadTitles = /**
         * @return {?}
         */
            function () {
                return this.http
                    .get(this.occEndpoints.getEndpoint(ENDPOINT_TITLES))
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error.json()); }));
            };
        /**
         * @return {?}
         */
        OccMiscsService.prototype.loadCardTypes = /**
         * @return {?}
         */
            function () {
                return this.http
                    .get(this.occEndpoints.getEndpoint(ENDPOINT_CARD_TYPES))
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error.json()); }));
            };
        /**
         * @param {?} countryIsoCode
         * @return {?}
         */
        OccMiscsService.prototype.loadRegions = /**
         * @param {?} countryIsoCode
         * @return {?}
         */
            function (countryIsoCode) {
                return this.http
                    .get(this.occEndpoints.getEndpoint(this.buildRegionsUrl(countryIsoCode)))
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error.json()); }));
            };
        /**
         * @private
         * @param {?} countryIsoCode
         * @return {?}
         */
        OccMiscsService.prototype.buildRegionsUrl = /**
         * @private
         * @param {?} countryIsoCode
         * @return {?}
         */
            function (countryIsoCode) {
                return ENDPOINT_COUNTRIES + "/" + countryIsoCode + "/" + ENDPOINT_REGIONS;
            };
        OccMiscsService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        OccMiscsService.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: OccEndpointsService }
            ];
        };
        return OccMiscsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BillingCountriesEffect = /** @class */ (function () {
        function BillingCountriesEffect(actions$, occMiscsService) {
            var _this = this;
            this.actions$ = actions$;
            this.occMiscsService = occMiscsService;
            this.loadBillingCountries$ = this.actions$.pipe(effects.ofType(LOAD_BILLING_COUNTRIES), operators.switchMap(function () {
                return _this.occMiscsService.loadBillingCountries().pipe(operators.map(function (data) { return new LoadBillingCountriesSuccess(data.countries); }), operators.catchError(function (error) { return rxjs.of(new LoadBillingCountriesFail(error)); }));
            }));
        }
        BillingCountriesEffect.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        BillingCountriesEffect.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: OccMiscsService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], BillingCountriesEffect.prototype, "loadBillingCountries$", void 0);
        return BillingCountriesEffect;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DeliveryCountriesEffects = /** @class */ (function () {
        function DeliveryCountriesEffects(actions$, occMiscsService) {
            var _this = this;
            this.actions$ = actions$;
            this.occMiscsService = occMiscsService;
            this.loadDeliveryCountries$ = this.actions$.pipe(effects.ofType(LOAD_DELIVERY_COUNTRIES), operators.switchMap(function () {
                return _this.occMiscsService.loadDeliveryCountries().pipe(operators.map(function (data) { return new LoadDeliveryCountriesSuccess(data.countries); }), operators.catchError(function (error) { return rxjs.of(new LoadDeliveryCountriesFail(error)); }));
            }));
        }
        DeliveryCountriesEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        DeliveryCountriesEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: OccMiscsService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], DeliveryCountriesEffects.prototype, "loadDeliveryCountries$", void 0);
        return DeliveryCountriesEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ForgotPasswordEffects = /** @class */ (function () {
        function ForgotPasswordEffects(actions$, occUserService) {
            var _this = this;
            this.actions$ = actions$;
            this.occUserService = occUserService;
            this.requestForgotPasswordEmail$ = this.actions$.pipe(effects.ofType(FORGOT_PASSWORD_EMAIL_REQUEST), operators.map(function (action) {
                return action.payload;
            }), operators.concatMap(function (userEmailAddress) {
                return _this.occUserService
                    .requestForgotPasswordEmail(userEmailAddress)
                    .pipe(operators.switchMap(function () {
                    return [
                        new ForgotPasswordEmailRequestSuccess(),
                        new AddMessage({
                            text: 'An email has been sent to you with information on how to reset your password.',
                            type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
                        }),
                    ];
                }), operators.catchError(function (error) {
                    return rxjs.of(new ForgotPasswordEmailRequestFail(error));
                }));
            }));
        }
        ForgotPasswordEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ForgotPasswordEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: OccUserService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], ForgotPasswordEffects.prototype, "requestForgotPasswordEmail$", void 0);
        return ForgotPasswordEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderDetailsEffect = /** @class */ (function () {
        function OrderDetailsEffect(actions$, occOrderService, converter) {
            var _this = this;
            this.actions$ = actions$;
            this.occOrderService = occOrderService;
            this.converter = converter;
            this.loadOrderDetails$ = this.actions$.pipe(effects.ofType(LOAD_ORDER_DETAILS), operators.map(function (action) { return action.payload; }), operators.switchMap(function (payload) {
                return _this.occOrderService
                    .getOrder(payload.userId, payload.orderCode)
                    .pipe(operators.map(function (order) {
                    if (order.consignments) {
                        order.consignments.forEach(function (element) {
                            element.entries.forEach(function (entry) {
                                entry.orderEntry.product = ( /** @type {?} */(_this.converter.convert(entry.orderEntry.product, PRODUCT_NORMALIZER)));
                            });
                        });
                    }
                    if (order.unconsignedEntries) {
                        order.unconsignedEntries.forEach(function (entry) {
                            entry.product = ( /** @type {?} */(_this.converter.convert(entry.product, PRODUCT_NORMALIZER)));
                        });
                    }
                    return new LoadOrderDetailsSuccess(order);
                }), operators.catchError(function (error) {
                    return rxjs.of(new LoadOrderDetailsFail(error));
                }));
            }));
        }
        OrderDetailsEffect.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        OrderDetailsEffect.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: OccOrderService },
                { type: ConverterService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], OrderDetailsEffect.prototype, "loadOrderDetails$", void 0);
        return OrderDetailsEffect;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserPaymentMethodsEffects = /** @class */ (function () {
        function UserPaymentMethodsEffects(actions$, occUserService) {
            var _this = this;
            this.actions$ = actions$;
            this.occUserService = occUserService;
            this.loadUserPaymentMethods$ = this.actions$.pipe(effects.ofType(LOAD_USER_PAYMENT_METHODS), operators.map(function (action) {
                return action.payload;
            }), operators.mergeMap(function (payload) {
                return _this.occUserService.loadUserPaymentMethods(payload).pipe(operators.map(function (paymentsList) {
                    return new LoadUserPaymentMethodsSuccess(paymentsList.payments);
                }), operators.catchError(function (error) {
                    return rxjs.of(new LoadUserPaymentMethodsFail(error));
                }));
            }));
            this.setDefaultUserPaymentMethod$ = this.actions$.pipe(effects.ofType(SET_DEFAULT_USER_PAYMENT_METHOD), operators.map(function (action) {
                return action.payload;
            }), operators.mergeMap(function (payload) {
                return _this.occUserService
                    .setDefaultUserPaymentMethod(payload.userId, payload.paymentMethodId)
                    .pipe(operators.switchMap(function (data) {
                    return [
                        new SetDefaultUserPaymentMethodSuccess(data),
                        new LoadUserPaymentMethods(payload.userId),
                    ];
                }), operators.catchError(function (error) {
                    return rxjs.of(new SetDefaultUserPaymentMethodFail(error));
                }));
            }));
            this.deleteUserPaymentMethod$ = this.actions$.pipe(effects.ofType(DELETE_USER_PAYMENT_METHOD), operators.map(function (action) {
                return action.payload;
            }), operators.mergeMap(function (payload) {
                return _this.occUserService
                    .deleteUserPaymentMethod(payload.userId, payload.paymentMethodId)
                    .pipe(operators.switchMap(function (data) {
                    return [
                        new DeleteUserPaymentMethodSuccess(data),
                        new LoadUserPaymentMethods(payload.userId),
                    ];
                }), operators.catchError(function (error) {
                    return rxjs.of(new DeleteUserPaymentMethodFail(error));
                }));
            }));
        }
        UserPaymentMethodsEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        UserPaymentMethodsEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: OccUserService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], UserPaymentMethodsEffects.prototype, "loadUserPaymentMethods$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], UserPaymentMethodsEffects.prototype, "setDefaultUserPaymentMethod$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], UserPaymentMethodsEffects.prototype, "deleteUserPaymentMethod$", void 0);
        return UserPaymentMethodsEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RegionsEffects = /** @class */ (function () {
        function RegionsEffects(actions$, occMiscsService) {
            var _this = this;
            this.actions$ = actions$;
            this.occMiscsService = occMiscsService;
            this.loadRegions$ = this.actions$.pipe(effects.ofType(LOAD_REGIONS), operators.map(function (action) {
                return action.payload;
            }), operators.switchMap(function (countryCode) {
                return _this.occMiscsService.loadRegions(countryCode).pipe(operators.map(function (data) { return new LoadRegionsSuccess(data.regions); }), operators.catchError(function (error) { return rxjs.of(new LoadRegionsFail(error)); }));
            }));
        }
        RegionsEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        RegionsEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: OccMiscsService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], RegionsEffects.prototype, "loadRegions$", void 0);
        return RegionsEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ResetPasswordEffects = /** @class */ (function () {
        function ResetPasswordEffects(actions$, occUserService) {
            var _this = this;
            this.actions$ = actions$;
            this.occUserService = occUserService;
            this.resetPassword$ = this.actions$.pipe(effects.ofType(RESET_PASSWORD), operators.map(function (action) {
                return action.payload;
            }), operators.switchMap(function (_a) {
                var token = _a.token, password = _a.password;
                return _this.occUserService.resetPassword(token, password).pipe(operators.switchMap(function () {
                    return [
                        new ResetPasswordSuccess(),
                        new AddMessage({
                            text: 'Success! You can now login using your new password.',
                            type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
                        }),
                    ];
                }), operators.catchError(function (error) { return rxjs.of(new ResetPasswordFail(error)); }));
            }));
        }
        ResetPasswordEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ResetPasswordEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: OccUserService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], ResetPasswordEffects.prototype, "resetPassword$", void 0);
        return ResetPasswordEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TitlesEffects = /** @class */ (function () {
        function TitlesEffects(actions$, occMiscsService) {
            var _this = this;
            this.actions$ = actions$;
            this.occMiscsService = occMiscsService;
            this.loadTitles$ = this.actions$.pipe(effects.ofType(LOAD_TITLES), operators.switchMap(function () {
                return _this.occMiscsService.loadTitles().pipe(operators.map(function (data) {
                    /** @type {?} */
                    var sortedTitles = _this.sortTitles(data.titles);
                    return new LoadTitlesSuccess(sortedTitles);
                }), operators.catchError(function (error) { return rxjs.of(new LoadTitlesFail(error)); }));
            }));
        }
        /**
         * @private
         * @param {?} titles
         * @return {?}
         */
        TitlesEffects.prototype.sortTitles = /**
         * @private
         * @param {?} titles
         * @return {?}
         */
            function (titles) {
                /** @type {?} */
                var drTitle = { code: 'dr', name: 'Dr.' };
                /** @type {?} */
                var revTitle = { code: 'rev', name: 'Rev.' };
                /** @type {?} */
                var filteredTitles = titles.filter(function (t) { return t.code !== 'dr' && t.code !== 'rev'; });
                /** @type {?} */
                var sortedTitles = __spread(filteredTitles, [drTitle, revTitle]);
                return sortedTitles;
            };
        TitlesEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        TitlesEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: OccMiscsService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], TitlesEffects.prototype, "loadTitles$", void 0);
        return TitlesEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpdateEmailEffects = /** @class */ (function () {
        function UpdateEmailEffects(actions$, occUserService) {
            var _this = this;
            this.actions$ = actions$;
            this.occUserService = occUserService;
            this.updateEmail$ = this.actions$.pipe(effects.ofType(UPDATE_EMAIL), operators.map(function (action) { return action.payload; }), operators.concatMap(function (payload) {
                return _this.occUserService
                    .updateEmail(payload.uid, payload.password, payload.newUid)
                    .pipe(operators.map(function () {
                    return new UpdateEmailSuccessAction(payload.newUid);
                }), operators.catchError(function (error) {
                    return rxjs.of(new UpdateEmailErrorAction(error));
                }));
            }));
        }
        UpdateEmailEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        UpdateEmailEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: OccUserService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], UpdateEmailEffects.prototype, "updateEmail$", void 0);
        return UpdateEmailEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpdatePasswordEffects = /** @class */ (function () {
        function UpdatePasswordEffects(actions$, occUserService) {
            var _this = this;
            this.actions$ = actions$;
            this.occUserService = occUserService;
            this.updatePassword$ = this.actions$.pipe(effects.ofType(UPDATE_PASSWORD), operators.map(function (action) { return action.payload; }), operators.concatMap(function (payload) {
                return _this.occUserService
                    .updatePassword(payload.userId, payload.oldPassword, payload.newPassword)
                    .pipe(operators.map(function (_) { return new UpdatePasswordSuccess(); }), operators.catchError(function (error) { return rxjs.of(new UpdatePasswordFail(error)); }));
            }));
        }
        UpdatePasswordEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        UpdatePasswordEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: OccUserService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], UpdatePasswordEffects.prototype, "updatePassword$", void 0);
        return UpdatePasswordEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserAddressesEffects = /** @class */ (function () {
        function UserAddressesEffects(actions$, occUserService, userService, messageService) {
            var _this = this;
            this.actions$ = actions$;
            this.occUserService = occUserService;
            this.userService = userService;
            this.messageService = messageService;
            this.loadUserAddresses$ = this.actions$.pipe(effects.ofType(LOAD_USER_ADDRESSES), operators.map(function (action) { return action.payload; }), operators.mergeMap(function (payload) {
                return _this.occUserService.loadUserAddresses(payload).pipe(operators.map(function (addressesList) {
                    return new LoadUserAddressesSuccess(addressesList.addresses);
                }), operators.catchError(function (error) {
                    return rxjs.of(new LoadUserAddressesFail(error));
                }));
            }));
            this.addUserAddress$ = this.actions$.pipe(effects.ofType(ADD_USER_ADDRESS), operators.map(function (action) { return action.payload; }), operators.mergeMap(function (payload) {
                return _this.occUserService
                    .addUserAddress(payload.userId, payload.address)
                    .pipe(operators.map(function (data) {
                    return new AddUserAddressSuccess(data);
                }), operators.catchError(function (error) {
                    return rxjs.of(new AddUserAddressFail(error));
                }));
            }));
            this.updateUserAddress$ = this.actions$.pipe(effects.ofType(UPDATE_USER_ADDRESS), operators.map(function (action) { return action.payload; }), operators.mergeMap(function (payload) {
                return _this.occUserService
                    .updateUserAddress(payload.userId, payload.addressId, payload.address)
                    .pipe(operators.map(function (data) {
                    return new UpdateUserAddressSuccess(data);
                }), operators.catchError(function (error) {
                    return rxjs.of(new UpdateUserAddressFail(error));
                }));
            }));
            this.deleteUserAddress$ = this.actions$.pipe(effects.ofType(DELETE_USER_ADDRESS), operators.map(function (action) { return action.payload; }), operators.mergeMap(function (payload) {
                return _this.occUserService
                    .deleteUserAddress(payload.userId, payload.addressId)
                    .pipe(operators.map(function (data) {
                    return new DeleteUserAddressSuccess(data);
                }), operators.catchError(function (error) {
                    return rxjs.of(new DeleteUserAddressFail(error));
                }));
            }));
            /**
             *  Reload addresses and notify about add success
             */
            this.showGlobalMessageOnAddSuccess$ = this.actions$.pipe(effects.ofType(ADD_USER_ADDRESS_SUCCESS), operators.tap(function () {
                _this.loadAddresses();
                _this.showGlobalMessage('New address was added successfully!');
            }));
            /**
             *  Reload addresses and notify about update success
             */
            this.showGlobalMessageOnUpdateSuccess$ = this.actions$.pipe(effects.ofType(UPDATE_USER_ADDRESS_SUCCESS), operators.tap(function () {
                _this.loadAddresses();
                _this.showGlobalMessage('Address updated successfully!');
            }));
            /**
             *  Reload addresses and notify about delete success
             */
            this.showGlobalMessageOnDeleteSuccess$ = this.actions$.pipe(effects.ofType(DELETE_USER_ADDRESS_SUCCESS), operators.tap(function () {
                _this.loadAddresses();
                _this.showGlobalMessage('Address deleted successfully!');
            }));
        }
        /**
         * Show global confirmation message with provided text
         */
        /**
         * Show global confirmation message with provided text
         * @private
         * @param {?} text
         * @return {?}
         */
        UserAddressesEffects.prototype.showGlobalMessage = /**
         * Show global confirmation message with provided text
         * @private
         * @param {?} text
         * @return {?}
         */
            function (text) {
                // ----------
                // todo: handle automatic removal of outdated messages
                this.messageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                this.messageService.remove(GlobalMessageType.MSG_TYPE_CONFIRMATION);
                // ----------
                this.messageService.add({
                    type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
                    text: text,
                });
            };
        /**
         * @private
         * @return {?}
         */
        UserAddressesEffects.prototype.loadAddresses = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.userService
                    .get()
                    .pipe(operators.take(1))
                    .subscribe(function (_a) {
                    var uid = _a.uid;
                    _this.userService.loadAddresses(uid);
                });
            };
        UserAddressesEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        UserAddressesEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: OccUserService },
                { type: UserService },
                { type: GlobalMessageService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], UserAddressesEffects.prototype, "loadUserAddresses$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], UserAddressesEffects.prototype, "addUserAddress$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], UserAddressesEffects.prototype, "updateUserAddress$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], UserAddressesEffects.prototype, "deleteUserAddress$", void 0);
        __decorate([
            effects.Effect({ dispatch: false }),
            __metadata("design:type", Object)
        ], UserAddressesEffects.prototype, "showGlobalMessageOnAddSuccess$", void 0);
        __decorate([
            effects.Effect({ dispatch: false }),
            __metadata("design:type", Object)
        ], UserAddressesEffects.prototype, "showGlobalMessageOnUpdateSuccess$", void 0);
        __decorate([
            effects.Effect({ dispatch: false }),
            __metadata("design:type", Object)
        ], UserAddressesEffects.prototype, "showGlobalMessageOnDeleteSuccess$", void 0);
        return UserAddressesEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserDetailsEffects = /** @class */ (function () {
        function UserDetailsEffects(actions$, occUserService) {
            var _this = this;
            this.actions$ = actions$;
            this.occUserService = occUserService;
            this.loadUserDetails$ = this.actions$.pipe(effects.ofType(LOAD_USER_DETAILS), operators.map(function (action) { return action.payload; }), operators.mergeMap(function (userId) {
                return _this.occUserService.loadUser(userId).pipe(operators.map(function (user) {
                    return new LoadUserDetailsSuccess(user);
                }), operators.catchError(function (error) {
                    return rxjs.of(new LoadUserDetailsFail(error));
                }));
            }));
            this.updateUserDetails$ = this.actions$.pipe(effects.ofType(UPDATE_USER_DETAILS), operators.map(function (action) { return action.payload; }), operators.concatMap(function (payload) {
                return _this.occUserService
                    .updateUserDetails(payload.username, payload.userDetails)
                    .pipe(operators.map(function (_) {
                    return new UpdateUserDetailsSuccess(payload.userDetails);
                }), operators.catchError(function (error) {
                    return rxjs.of(new UpdateUserDetailsFail(error));
                }));
            }));
        }
        UserDetailsEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        UserDetailsEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: OccUserService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], UserDetailsEffects.prototype, "loadUserDetails$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], UserDetailsEffects.prototype, "updateUserDetails$", void 0);
        return UserDetailsEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserOrdersEffect = /** @class */ (function () {
        function UserOrdersEffect(actions$, occOrderService) {
            var _this = this;
            this.actions$ = actions$;
            this.occOrderService = occOrderService;
            this.loadUserOrders$ = this.actions$.pipe(effects.ofType(LOAD_USER_ORDERS), operators.map(function (action) { return action.payload; }), operators.switchMap(function (payload) {
                return _this.occOrderService
                    .getOrders(payload.userId, payload.pageSize, payload.currentPage, payload.sort)
                    .pipe(operators.map(function (orders) {
                    return new LoadUserOrdersSuccess(orders);
                }), operators.catchError(function (error) {
                    return rxjs.of(new LoadUserOrdersFail(error));
                }));
            }));
            this.resetUserOrders$ = this.actions$.pipe(effects.ofType(CLEAR_MISCS_DATA, CLEAR_USER_ORDERS), operators.map(function () {
                return new LoaderResetAction(USER_ORDERS);
            }));
        }
        UserOrdersEffect.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        UserOrdersEffect.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: OccOrderService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], UserOrdersEffect.prototype, "loadUserOrders$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], UserOrdersEffect.prototype, "resetUserOrders$", void 0);
        return UserOrdersEffect;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserRegisterEffects = /** @class */ (function () {
        function UserRegisterEffects(actions$, userService) {
            var _this = this;
            this.actions$ = actions$;
            this.userService = userService;
            this.registerUser$ = this.actions$.pipe(effects.ofType(REGISTER_USER), operators.map(function (action) { return action.payload; }), operators.mergeMap(function (user) {
                return _this.userService.registerUser(user).pipe(operators.switchMap(function (_result) {
                    return [
                        new LoadUserToken({
                            userId: user.uid,
                            password: user.password,
                        }),
                        new RegisterUserSuccess(),
                    ];
                }), operators.catchError(function (error) { return rxjs.of(new RegisterUserFail(error)); }));
            }));
            this.removeUser$ = this.actions$.pipe(effects.ofType(REMOVE_USER), operators.map(function (action) { return action.payload; }), operators.mergeMap(function (userId) {
                return _this.userService.removeUser(userId).pipe(operators.switchMap(function (_result) {
                    return [
                        new RemoveUserSuccess(),
                        new Logout(),
                    ];
                }), operators.catchError(function (error) { return rxjs.of(new RemoveUserFail(error)); }));
            }));
        }
        UserRegisterEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        UserRegisterEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: OccUserService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], UserRegisterEffects.prototype, "registerUser$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], UserRegisterEffects.prototype, "removeUser$", void 0);
        return UserRegisterEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var effects$5 = [
        DeliveryCountriesEffects,
        RegionsEffects,
        TitlesEffects,
        UserDetailsEffects,
        UserAddressesEffects,
        UserPaymentMethodsEffects,
        UserRegisterEffects,
        UserOrdersEffect,
        OrderDetailsEffect,
        BillingCountriesEffect,
        ResetPasswordEffects,
        ForgotPasswordEffects,
        UpdateEmailEffects,
        UpdatePasswordEffects,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserStoreModule = /** @class */ (function () {
        function UserStoreModule() {
        }
        UserStoreModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.CommonModule,
                            forms.ReactiveFormsModule,
                            StateModule,
                            i1$2.StoreModule.forFeature(USER_FEATURE, reducerToken$6, { metaReducers: metaReducers$3 }),
                            effects.EffectsModule.forFeature(effects$5),
                            router.RouterModule,
                        ],
                        providers: [reducerProvider$6],
                    },] }
        ];
        return UserStoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserModule = /** @class */ (function () {
        function UserModule() {
        }
        UserModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [UserOccModule, UserStoreModule, ProcessModule],
                        providers: [UserService],
                    },] }
        ];
        return UserModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckoutEffects = /** @class */ (function () {
        function CheckoutEffects(actions$, cartDeliveryConnector, cartPaymentConnector, occOrderService, converter) {
            var _this = this;
            this.actions$ = actions$;
            this.cartDeliveryConnector = cartDeliveryConnector;
            this.cartPaymentConnector = cartPaymentConnector;
            this.occOrderService = occOrderService;
            this.converter = converter;
            this.addDeliveryAddress$ = this.actions$.pipe(effects.ofType(ADD_DELIVERY_ADDRESS), operators.map(function (action) { return action.payload; }), operators.mergeMap(function (payload) {
                return _this.cartDeliveryConnector
                    .createAddress(payload.userId, payload.cartId, payload.address)
                    .pipe(operators.mergeMap(function (address) {
                    address['titleCode'] = payload.address.titleCode;
                    return [
                        new LoadUserAddresses(payload.userId),
                        new SetDeliveryAddress({
                            userId: payload.userId,
                            cartId: payload.cartId,
                            address: address,
                        }),
                    ];
                }), operators.catchError(function (error) { return rxjs.of(new AddDeliveryAddressFail(error)); }));
            }));
            this.setDeliveryAddress$ = this.actions$.pipe(effects.ofType(SET_DELIVERY_ADDRESS), operators.map(function (action) { return action.payload; }), operators.mergeMap(function (payload) {
                return _this.cartDeliveryConnector
                    .setAddress(payload.userId, payload.cartId, payload.address.id)
                    .pipe(operators.map(function () { return new SetDeliveryAddressSuccess(payload.address); }), operators.catchError(function (error) { return rxjs.of(new SetDeliveryAddressFail(error)); }));
            }));
            this.loadSupportedDeliveryModes$ = this.actions$.pipe(effects.ofType(LOAD_SUPPORTED_DELIVERY_MODES), operators.map(function (action) { return action.payload; }), operators.mergeMap(function (payload) {
                return _this.cartDeliveryConnector
                    .getSupportedModes(payload.userId, payload.cartId)
                    .pipe(operators.map(function (data) {
                    return new LoadSupportedDeliveryModesSuccess(data);
                }), operators.catchError(function (error) {
                    return rxjs.of(new LoadSupportedDeliveryModesFail(error));
                }));
            }));
            this.setDeliveryMode$ = this.actions$.pipe(effects.ofType(SET_DELIVERY_MODE), operators.map(function (action) { return action.payload; }), operators.mergeMap(function (payload) {
                return _this.cartDeliveryConnector
                    .setMode(payload.userId, payload.cartId, payload.selectedModeId)
                    .pipe(operators.map(function () { return new SetDeliveryModeSuccess(payload.selectedModeId); }), operators.catchError(function (error) { return rxjs.of(new SetDeliveryModeFail(error)); }));
            }));
            this.createPaymentDetails$ = this.actions$.pipe(effects.ofType(CREATE_PAYMENT_DETAILS), operators.map(function (action) { return action.payload; }), operators.mergeMap(function (payload) {
                // get information for creating a subscription directly with payment provider
                return _this.cartPaymentConnector
                    .create(payload.userId, payload.cartId, payload.paymentDetails)
                    .pipe(operators.mergeMap(function (details) {
                    return [
                        new LoadUserPaymentMethods(payload.userId),
                        new CreatePaymentDetailsSuccess(details),
                    ];
                }), operators.catchError(function (error) {
                    return rxjs.of(new CreatePaymentDetailsFail(error));
                }));
            }));
            this.setPaymentDetails$ = this.actions$.pipe(effects.ofType(SET_PAYMENT_DETAILS), operators.map(function (action) { return action.payload; }), operators.mergeMap(function (payload) {
                return _this.cartPaymentConnector
                    .set(payload.userId, payload.cartId, payload.paymentDetails.id)
                    .pipe(operators.map(function () {
                    return new SetPaymentDetailsSuccess(payload.paymentDetails);
                }), operators.catchError(function (error) { return rxjs.of(new SetPaymentDetailsFail(error)); }));
            }));
            this.placeOrder$ = this.actions$.pipe(effects.ofType(PLACE_ORDER), operators.map(function (action) { return action.payload; }), operators.mergeMap(function (payload) {
                return _this.occOrderService
                    .placeOrder(payload.userId, payload.cartId)
                    .pipe(operators.map(function (data) {
                    var e_1, _a;
                    try {
                        for (var _b = __values(( /** @type {?} */(data.entries))), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var entry = _c.value;
                            entry.product = ( /** @type {?} */(_this.converter.convert(entry.product, PRODUCT_NORMALIZER)));
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                _a.call(_b);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                    return data;
                }), operators.switchMap(function (data) {
                    return [
                        new PlaceOrderSuccess(data),
                        new AddMessage({
                            text: 'Order placed successfully',
                            type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
                        }),
                    ];
                }), operators.catchError(function (error) { return rxjs.of(new PlaceOrderFail(error)); }));
            }));
        }
        CheckoutEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        CheckoutEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: CartDeliveryConnector },
                { type: CartPaymentConnector },
                { type: OccOrderService },
                { type: ConverterService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], CheckoutEffects.prototype, "addDeliveryAddress$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], CheckoutEffects.prototype, "setDeliveryAddress$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], CheckoutEffects.prototype, "loadSupportedDeliveryModes$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], CheckoutEffects.prototype, "setDeliveryMode$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], CheckoutEffects.prototype, "createPaymentDetails$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], CheckoutEffects.prototype, "setPaymentDetails$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], CheckoutEffects.prototype, "placeOrder$", void 0);
        return CheckoutEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CardTypesEffects = /** @class */ (function () {
        function CardTypesEffects(actions$, occMiscsService) {
            var _this = this;
            this.actions$ = actions$;
            this.occMiscsService = occMiscsService;
            this.loadCardTypes$ = this.actions$.pipe(effects.ofType(LOAD_CARD_TYPES), operators.switchMap(function () {
                return _this.occMiscsService.loadCardTypes().pipe(operators.map(function (data) { return new LoadCardTypesSuccess(data.cardTypes); }), operators.catchError(function (error) { return rxjs.of(new LoadCardTypesFail(error)); }));
            }));
        }
        CardTypesEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        CardTypesEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: OccMiscsService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], CardTypesEffects.prototype, "loadCardTypes$", void 0);
        return CardTypesEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddressVerificationEffect = /** @class */ (function () {
        function AddressVerificationEffect(actions$, occUserService) {
            var _this = this;
            this.actions$ = actions$;
            this.occUserService = occUserService;
            this.verifyAddress$ = this.actions$.pipe(effects.ofType(VERIFY_ADDRESS), operators.map(function (action) { return action.payload; }), operators.mergeMap(function (payload) {
                return _this.occUserService.verifyAddress(payload.userId, payload.address).pipe(operators.map(function (data) {
                    return new VerifyAddressSuccess(data);
                }), operators.catchError(function (error) { return rxjs.of(new VerifyAddressFail(error)); }));
            }));
        }
        AddressVerificationEffect.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        AddressVerificationEffect.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: OccUserService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], AddressVerificationEffect.prototype, "verifyAddress$", void 0);
        return AddressVerificationEffect;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var effects$6 = [
        CheckoutEffects,
        AddressVerificationEffect,
        CardTypesEffects,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckoutService = /** @class */ (function () {
        function CheckoutService(checkoutStore, cartData) {
            this.checkoutStore = checkoutStore;
            this.cartData = cartData;
        }
        /**
         * Get supported delivery modes
         */
        /**
         * Get supported delivery modes
         * @return {?}
         */
        CheckoutService.prototype.getSupportedDeliveryModes = /**
         * Get supported delivery modes
         * @return {?}
         */
            function () {
                return this.checkoutStore.pipe(i1$2.select(getSupportedDeliveryModes));
            };
        /**
         * Get selected delivery mode
         */
        /**
         * Get selected delivery mode
         * @return {?}
         */
        CheckoutService.prototype.getSelectedDeliveryMode = /**
         * Get selected delivery mode
         * @return {?}
         */
            function () {
                return this.checkoutStore.pipe(i1$2.select(getSelectedDeliveryMode));
            };
        /**
         * Get selected delivery mode code
         */
        /**
         * Get selected delivery mode code
         * @return {?}
         */
        CheckoutService.prototype.getSelectedDeliveryModeCode = /**
         * Get selected delivery mode code
         * @return {?}
         */
            function () {
                return this.checkoutStore.pipe(i1$2.select(getSelectedCode));
            };
        /**
         * Get card types
         */
        /**
         * Get card types
         * @return {?}
         */
        CheckoutService.prototype.getCardTypes = /**
         * Get card types
         * @return {?}
         */
            function () {
                return this.checkoutStore.pipe(i1$2.select(getAllCardTypes));
            };
        /**
         * Get delivery address
         */
        /**
         * Get delivery address
         * @return {?}
         */
        CheckoutService.prototype.getDeliveryAddress = /**
         * Get delivery address
         * @return {?}
         */
            function () {
                return this.checkoutStore.pipe(i1$2.select(getDeliveryAddress$1));
            };
        /**
         * Get address verification results
         */
        /**
         * Get address verification results
         * @return {?}
         */
        CheckoutService.prototype.getAddressVerificationResults = /**
         * Get address verification results
         * @return {?}
         */
            function () {
                return this.checkoutStore.pipe(i1$2.select(getAddressVerificationResults$1), operators.filter(function (results) { return Object.keys(results).length !== 0; }));
            };
        /**
         * Get payment details
         */
        /**
         * Get payment details
         * @return {?}
         */
        CheckoutService.prototype.getPaymentDetails = /**
         * Get payment details
         * @return {?}
         */
            function () {
                return this.checkoutStore.pipe(i1$2.select(getPaymentDetails$1));
            };
        /**
         * Get order details
         */
        /**
         * Get order details
         * @return {?}
         */
        CheckoutService.prototype.getOrderDetails = /**
         * Get order details
         * @return {?}
         */
            function () {
                return this.checkoutStore.pipe(i1$2.select(getCheckoutOrderDetails));
            };
        /**
         * Create and set a delivery address using the address param
         * @param address : the Address to be created and set
         */
        /**
         * Create and set a delivery address using the address param
         * @param {?} address : the Address to be created and set
         * @return {?}
         */
        CheckoutService.prototype.createAndSetAddress = /**
         * Create and set a delivery address using the address param
         * @param {?} address : the Address to be created and set
         * @return {?}
         */
            function (address) {
                if (this.actionAllowed()) {
                    this.checkoutStore.dispatch(new AddDeliveryAddress({
                        userId: this.cartData.userId,
                        cartId: this.cartData.cartId,
                        address: address,
                    }));
                }
            };
        /**
         * Load supported delivery modes
         */
        /**
         * Load supported delivery modes
         * @return {?}
         */
        CheckoutService.prototype.loadSupportedDeliveryModes = /**
         * Load supported delivery modes
         * @return {?}
         */
            function () {
                if (this.actionAllowed()) {
                    this.checkoutStore.dispatch(new LoadSupportedDeliveryModes({
                        userId: this.cartData.userId,
                        cartId: this.cartData.cartId,
                    }));
                }
            };
        /**
         * Set delivery mode
         * @param mode : The delivery mode to be set
         */
        /**
         * Set delivery mode
         * @param {?} mode : The delivery mode to be set
         * @return {?}
         */
        CheckoutService.prototype.setDeliveryMode = /**
         * Set delivery mode
         * @param {?} mode : The delivery mode to be set
         * @return {?}
         */
            function (mode) {
                if (this.actionAllowed()) {
                    this.checkoutStore.dispatch(new SetDeliveryMode({
                        userId: this.cartData.userId,
                        cartId: this.cartData.cartId,
                        selectedModeId: mode,
                    }));
                }
            };
        /**
         * Load the supported card types
         */
        /**
         * Load the supported card types
         * @return {?}
         */
        CheckoutService.prototype.loadSupportedCardTypes = /**
         * Load the supported card types
         * @return {?}
         */
            function () {
                this.checkoutStore.dispatch(new LoadCardTypes());
            };
        /**
         * Create payment details using the given paymentDetails param
         * @param paymentDetails: the PaymentDetails to be created
         */
        /**
         * Create payment details using the given paymentDetails param
         * @param {?} paymentDetails
         * @return {?}
         */
        CheckoutService.prototype.createPaymentDetails = /**
         * Create payment details using the given paymentDetails param
         * @param {?} paymentDetails
         * @return {?}
         */
            function (paymentDetails) {
                if (this.actionAllowed()) {
                    this.checkoutStore.dispatch(new CreatePaymentDetails({
                        userId: this.cartData.userId,
                        cartId: this.cartData.cartId,
                        paymentDetails: paymentDetails,
                    }));
                }
            };
        /**
         * Places an order
         */
        /**
         * Places an order
         * @return {?}
         */
        CheckoutService.prototype.placeOrder = /**
         * Places an order
         * @return {?}
         */
            function () {
                if (this.actionAllowed()) {
                    this.checkoutStore.dispatch(new PlaceOrder({
                        userId: this.cartData.userId,
                        cartId: this.cartData.cartId,
                    }));
                }
            };
        /**
         * Verifies the address
         * @param address : the address to be verified
         */
        /**
         * Verifies the address
         * @param {?} address : the address to be verified
         * @return {?}
         */
        CheckoutService.prototype.verifyAddress = /**
         * Verifies the address
         * @param {?} address : the address to be verified
         * @return {?}
         */
            function (address) {
                if (this.actionAllowed()) {
                    this.checkoutStore.dispatch(new VerifyAddress({
                        userId: this.cartData.userId,
                        address: address,
                    }));
                }
            };
        /**
         * Set delivery address
         * @param address : The address to be set
         */
        /**
         * Set delivery address
         * @param {?} address : The address to be set
         * @return {?}
         */
        CheckoutService.prototype.setDeliveryAddress = /**
         * Set delivery address
         * @param {?} address : The address to be set
         * @return {?}
         */
            function (address) {
                if (this.actionAllowed()) {
                    this.checkoutStore.dispatch(new SetDeliveryAddress({
                        userId: this.cartData.userId,
                        cartId: this.cartData.cart.code,
                        address: address,
                    }));
                }
            };
        /**
         * Set payment details
         * @param paymentDetails : the PaymentDetails to be set
         */
        /**
         * Set payment details
         * @param {?} paymentDetails : the PaymentDetails to be set
         * @return {?}
         */
        CheckoutService.prototype.setPaymentDetails = /**
         * Set payment details
         * @param {?} paymentDetails : the PaymentDetails to be set
         * @return {?}
         */
            function (paymentDetails) {
                if (this.actionAllowed()) {
                    this.checkoutStore.dispatch(new SetPaymentDetails({
                        userId: this.cartData.userId,
                        cartId: this.cartData.cart.code,
                        paymentDetails: paymentDetails,
                    }));
                }
            };
        /**
         * Clear address verification results
         */
        /**
         * Clear address verification results
         * @return {?}
         */
        CheckoutService.prototype.clearAddressVerificationResults = /**
         * Clear address verification results
         * @return {?}
         */
            function () {
                this.checkoutStore.dispatch(new ClearAddressVerificationResults());
            };
        /**
         * Clear checkout data
         */
        /**
         * Clear checkout data
         * @return {?}
         */
        CheckoutService.prototype.clearCheckoutData = /**
         * Clear checkout data
         * @return {?}
         */
            function () {
                this.checkoutStore.dispatch(new ClearCheckoutData());
            };
        /**
         * Clear checkout step
         * @param stepNumber : the step number to be cleared
         */
        /**
         * Clear checkout step
         * @param {?} stepNumber : the step number to be cleared
         * @return {?}
         */
        CheckoutService.prototype.clearCheckoutStep = /**
         * Clear checkout step
         * @param {?} stepNumber : the step number to be cleared
         * @return {?}
         */
            function (stepNumber) {
                this.checkoutStore.dispatch(new ClearCheckoutStep(stepNumber));
            };
        /**
         * @private
         * @return {?}
         */
        CheckoutService.prototype.actionAllowed = /**
         * @private
         * @return {?}
         */
            function () {
                return this.cartData.userId !== ANONYMOUS_USERID;
            };
        CheckoutService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        CheckoutService.ctorParameters = function () {
            return [
                { type: i1$2.Store },
                { type: CartDataService }
            ];
        };
        return CheckoutService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckoutStoreModule = /** @class */ (function () {
        function CheckoutStoreModule() {
        }
        CheckoutStoreModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.CommonModule,
                            i1$1.HttpClientModule,
                            i1$2.StoreModule.forFeature(CHECKOUT_FEATURE, reducerToken$4, { metaReducers: metaReducers$2 }),
                            effects.EffectsModule.forFeature(effects$6),
                        ],
                        providers: [reducerProvider$4],
                    },] }
        ];
        return CheckoutStoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var JSP_INCLUDE_CMS_COMPONENT_TYPE = 'JspIncludeComponent';
    /** @type {?} */
    var CMS_FLEX_COMPONENT_TYPE = 'CMSFlexComponent';
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ CmsConfig = /** @class */ (function (_super) {
        __extends(CmsConfig, _super);
        function CmsConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CmsConfig;
    }(OccConfig));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var defaultCmsModuleConfig = {
        cmsComponents: {
            CMSTabParagraphComponent: { selector: 'cx-paragraph' },
        },
        backend: {
            occ: {
                endpoints: {
                    component: 'cms/components/${id}',
                    components: 'cms/components?fields=${fields}',
                    pages: 'cms/pages?fields=${fields}',
                },
            },
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * The `CmsStructureConfig` is used to build pages in Spartacus by configuration
     * instead of using a backend CMS system. The configuration can be used to build
     * complete pages or parts of a page. The `CmsStructureConfig` is optimized to
     * only require the necessary properties. Adapter logic is applied to serialize
     * the `CmsStructureConfig` into the required UI model.
     * @abstract
     */
    var /**
     * The `CmsStructureConfig` is used to build pages in Spartacus by configuration
     * instead of using a backend CMS system. The configuration can be used to build
     * complete pages or parts of a page. The `CmsStructureConfig` is optimized to
     * only require the necessary properties. Adapter logic is applied to serialize
     * the `CmsStructureConfig` into the required UI model.
     * @abstract
     */ CmsStructureConfig = /** @class */ (function (_super) {
        __extends(CmsStructureConfig, _super);
        function CmsStructureConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CmsStructureConfig;
    }(CmsConfig));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var PageRobotsMeta = {
        INDEX: 'INDEX',
        NOINDEX: 'NOINDEX',
        FOLLOW: 'FOLLOW',
        NOFOLLOW: 'NOFOLLOW',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CMS_PAGE_NORMALIZE = new i0.InjectionToken('CmsPageNormalizer');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OccCmsPageAdapter = /** @class */ (function () {
        function OccCmsPageAdapter(http, occEndpoints, converter) {
            this.http = http;
            this.occEndpoints = occEndpoints;
            this.converter = converter;
            this.headers = new i1$1.HttpHeaders().set('Content-Type', 'application/json');
        }
        /**
         * @param {?} pageContext
         * @param {?=} fields
         * @return {?}
         */
        OccCmsPageAdapter.prototype.load = /**
         * @param {?} pageContext
         * @param {?=} fields
         * @return {?}
         */
            function (pageContext, fields) {
                /** @type {?} */
                var httpParams = this.getPagesRequestParams(pageContext);
                return this.http
                    .get(this.getPagesEndpoint(httpParams, fields), {
                    headers: this.headers,
                })
                    .pipe(this.converter.pipeable(CMS_PAGE_NORMALIZE));
            };
        /**
         * @private
         * @param {?} params
         * @param {?=} fields
         * @return {?}
         */
        OccCmsPageAdapter.prototype.getPagesEndpoint = /**
         * @private
         * @param {?} params
         * @param {?=} fields
         * @return {?}
         */
            function (params, fields) {
                fields = fields ? fields : 'DEFAULT';
                return this.occEndpoints.getUrl('pages', { fields: fields }, params);
            };
        /**
         * @private
         * @param {?} pageContext
         * @return {?}
         */
        OccCmsPageAdapter.prototype.getPagesRequestParams = /**
         * @private
         * @param {?} pageContext
         * @return {?}
         */
            function (pageContext) {
                /** @type {?} */
                var httpParams = {};
                if (pageContext.id !== 'smartedit-preview') {
                    httpParams = { pageType: pageContext.type };
                    if (pageContext.type === PageType.CONTENT_PAGE) {
                        httpParams['pageLabelOrId'] = pageContext.id;
                    }
                    else {
                        httpParams['code'] = pageContext.id;
                    }
                }
                return httpParams;
            };
        OccCmsPageAdapter.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        OccCmsPageAdapter.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: OccEndpointsService },
                { type: ConverterService }
            ];
        };
        return OccCmsPageAdapter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OccCmsPageNormalizer = /** @class */ (function () {
        function OccCmsPageNormalizer() {
        }
        /**
         * @param {?} source
         * @param {?=} target
         * @return {?}
         */
        OccCmsPageNormalizer.prototype.convert = /**
         * @param {?} source
         * @param {?=} target
         * @return {?}
         */
            function (source, target) {
                if (target === void 0) {
                    target = {};
                }
                this.normalizePageData(source, target);
                this.normalizePageSlotData(source, target);
                this.normalizePageComponentData(source, target);
                this.normalizeComponentData(source, target);
                return target;
            };
        /**
         * @private
         * @param {?} source
         * @param {?} target
         * @return {?}
         */
        OccCmsPageNormalizer.prototype.normalizePageData = /**
         * @private
         * @param {?} source
         * @param {?} target
         * @return {?}
         */
            function (source, target) {
                target.page = {
                    loadTime: Date.now(),
                    name: source.name,
                    type: source.typeCode,
                    title: source.title,
                    pageId: source.uid,
                    template: source.template,
                    slots: {},
                    properties: source.properties,
                };
            };
        /**
         * @private
         * @param {?} source
         * @param {?} target
         * @return {?}
         */
        OccCmsPageNormalizer.prototype.normalizePageSlotData = /**
         * @private
         * @param {?} source
         * @param {?} target
         * @return {?}
         */
            function (source, target) {
                var e_1, _a;
                try {
                    for (var _b = __values(source.contentSlots.contentSlot), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var slot = _c.value;
                        target.page.slots[slot.position] = ( /** @type {?} */({
                            components: [],
                            properties: slot.properties,
                        }));
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
            };
        /**
         * @private
         * @param {?} source
         * @param {?} target
         * @return {?}
         */
        OccCmsPageNormalizer.prototype.normalizePageComponentData = /**
         * @private
         * @param {?} source
         * @param {?} target
         * @return {?}
         */
            function (source, target) {
                var e_2, _a, e_3, _b;
                try {
                    for (var _c = __values(source.contentSlots.contentSlot), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var slot = _d.value;
                        if (slot.components.component &&
                            Array.isArray(slot.components.component)) {
                            try {
                                for (var _e = __values(slot.components.component), _f = _e.next(); !_f.done; _f = _e.next()) {
                                    var component = _f.value;
                                    /** @type {?} */
                                    var comp = {
                                        uid: component.uid,
                                        typeCode: component.typeCode,
                                        properties: component.properties,
                                    };
                                    if (component.typeCode === CMS_FLEX_COMPONENT_TYPE) {
                                        comp.flexType = component.flexType;
                                    }
                                    else if (component.typeCode === JSP_INCLUDE_CMS_COMPONENT_TYPE) {
                                        comp.flexType = component.uid;
                                    }
                                    else {
                                        comp.flexType = component.typeCode;
                                    }
                                    target.page.slots[slot.position].components.push(comp);
                                }
                            }
                            catch (e_3_1) {
                                e_3 = { error: e_3_1 };
                            }
                            finally {
                                try {
                                    if (_f && !_f.done && (_b = _e.return))
                                        _b.call(_e);
                                }
                                finally {
                                    if (e_3)
                                        throw e_3.error;
                                }
                            }
                        }
                    }
                }
                catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return))
                            _a.call(_c);
                    }
                    finally {
                        if (e_2)
                            throw e_2.error;
                    }
                }
            };
        /**
         * @private
         * @param {?} source
         * @param {?} target
         * @return {?}
         */
        OccCmsPageNormalizer.prototype.normalizeComponentData = /**
         * @private
         * @param {?} source
         * @param {?} target
         * @return {?}
         */
            function (source, target) {
                var e_4, _a, e_5, _b;
                target.components = [];
                try {
                    for (var _c = __values(source.contentSlots.contentSlot), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var slot = _d.value;
                        if (slot.components.component &&
                            Array.isArray(slot.components.component)) {
                            try {
                                for (var _e = __values(( /** @type {?} */(slot.components.component))), _f = _e.next(); !_f.done; _f = _e.next()) {
                                    var component = _f.value;
                                    // we dont put properties into component state
                                    if (component.properties) {
                                        component.properties = undefined;
                                    }
                                    target.components.push(component);
                                }
                            }
                            catch (e_5_1) {
                                e_5 = { error: e_5_1 };
                            }
                            finally {
                                try {
                                    if (_f && !_f.done && (_b = _e.return))
                                        _b.call(_e);
                                }
                                finally {
                                    if (e_5)
                                        throw e_5.error;
                                }
                            }
                        }
                    }
                }
                catch (e_4_1) {
                    e_4 = { error: e_4_1 };
                }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return))
                            _a.call(_c);
                    }
                    finally {
                        if (e_4)
                            throw e_4.error;
                    }
                }
            };
        OccCmsPageNormalizer.decorators = [
            { type: i0.Injectable }
        ];
        return OccCmsPageNormalizer;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CMS_COMPONENT_NORMALIZER = new i0.InjectionToken('CmsComponentNormalizer');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OccCmsComponentAdapter = /** @class */ (function () {
        function OccCmsComponentAdapter(http, occEndpoints, converter) {
            this.http = http;
            this.occEndpoints = occEndpoints;
            this.converter = converter;
            this.headers = new i1$1.HttpHeaders().set('Content-Type', 'application/json');
        }
        /**
         * @template T
         * @param {?} id
         * @param {?} pageContext
         * @return {?}
         */
        OccCmsComponentAdapter.prototype.load = /**
         * @template T
         * @param {?} id
         * @param {?} pageContext
         * @return {?}
         */
            function (id, pageContext) {
                return this.http
                    .get(this.getComponentEndPoint(id, pageContext), {
                    headers: this.headers,
                })
                    .pipe(this.converter.pipeable(CMS_COMPONENT_NORMALIZER));
            };
        /**
         * @param {?} ids
         * @param {?} pageContext
         * @param {?=} fields
         * @param {?=} currentPage
         * @param {?=} pageSize
         * @param {?=} sort
         * @return {?}
         */
        OccCmsComponentAdapter.prototype.loadList = /**
         * @param {?} ids
         * @param {?} pageContext
         * @param {?=} fields
         * @param {?=} currentPage
         * @param {?=} pageSize
         * @param {?=} sort
         * @return {?}
         */
            function (ids, pageContext, fields, currentPage, pageSize, sort) {
                if (fields === void 0) {
                    fields = 'DEFAULT';
                }
                if (currentPage === void 0) {
                    currentPage = 0;
                }
                if (pageSize === void 0) {
                    pageSize = ids.length;
                }
                /** @type {?} */
                var requestParams = this.getComponentsRequestParams(pageContext, currentPage, pageSize, sort);
                /** @type {?} */
                var idList = { idList: ids };
                return this.http
                    .post(this.getComponentsEndpoint(requestParams, fields), idList, {
                    headers: this.headers,
                })
                    .pipe(operators.pluck('component'), this.converter.pipeableMany(CMS_COMPONENT_NORMALIZER));
            };
        /**
         * @protected
         * @param {?} id
         * @param {?} pageContext
         * @return {?}
         */
        OccCmsComponentAdapter.prototype.getComponentEndPoint = /**
         * @protected
         * @param {?} id
         * @param {?} pageContext
         * @return {?}
         */
            function (id, pageContext) {
                return this.occEndpoints.getUrl('component', { id: id }, this.getComponentRequestParams(pageContext));
            };
        /**
         * @protected
         * @param {?} requestParams
         * @param {?} fields
         * @return {?}
         */
        OccCmsComponentAdapter.prototype.getComponentsEndpoint = /**
         * @protected
         * @param {?} requestParams
         * @param {?} fields
         * @return {?}
         */
            function (requestParams, fields) {
                return this.occEndpoints.getUrl('components', { fields: fields }, requestParams);
            };
        /**
         * @private
         * @param {?} pageContext
         * @param {?=} currentPage
         * @param {?=} pageSize
         * @param {?=} sort
         * @return {?}
         */
        OccCmsComponentAdapter.prototype.getComponentsRequestParams = /**
         * @private
         * @param {?} pageContext
         * @param {?=} currentPage
         * @param {?=} pageSize
         * @param {?=} sort
         * @return {?}
         */
            function (pageContext, currentPage, pageSize, sort) {
                /** @type {?} */
                var requestParams = this.getComponentRequestParams(pageContext);
                if (currentPage !== undefined) {
                    requestParams['currentPage'] = currentPage.toString();
                }
                if (pageSize !== undefined) {
                    requestParams['pageSize'] = pageSize.toString();
                }
                if (sort !== undefined) {
                    requestParams['sort'] = sort;
                }
                return requestParams;
            };
        /**
         * @private
         * @param {?} pageContext
         * @return {?}
         */
        OccCmsComponentAdapter.prototype.getComponentRequestParams = /**
         * @private
         * @param {?} pageContext
         * @return {?}
         */
            function (pageContext) {
                /** @type {?} */
                var requestParams = {};
                switch (pageContext.type) {
                    case PageType.PRODUCT_PAGE: {
                        requestParams = { productCode: pageContext.id };
                        break;
                    }
                    case PageType.CATEGORY_PAGE: {
                        requestParams = { categoryCode: pageContext.id };
                        break;
                    }
                    case PageType.CATALOG_PAGE: {
                        requestParams = { catalogCode: pageContext.id };
                        break;
                    }
                }
                return requestParams;
            };
        OccCmsComponentAdapter.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        OccCmsComponentAdapter.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: OccEndpointsService },
                { type: ConverterService }
            ];
        };
        return OccCmsComponentAdapter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Abstract class that can be used to implement custom loader logic
     * in order to load CMS structure from third-party CMS system.
     * @abstract
     */
    var /**
     * Abstract class that can be used to implement custom loader logic
     * in order to load CMS structure from third-party CMS system.
     * @abstract
     */ CmsPageAdapter = /** @class */ (function () {
        function CmsPageAdapter() {
        }
        return CmsPageAdapter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentMapperService = /** @class */ (function () {
        function ComponentMapperService(componentFactoryResolver, config, document, platform) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.config = config;
            this.document = document;
            this.platform = platform;
            this.missingComponents = [];
            this.loadedWebComponents = {};
        }
        /**
         * @desc
         * returns a web component for the CMS typecode.
         *
         * The mapping of CMS components to web componetns requires a mapping.
         * This is configurable when the module is loaded.
         *
         * For example:
         *
         *  {
         *      'CMSLinkComponent': 'LinkComponent',
         *      'SimpleResponsiveBannerComponent': 'SimpleResponsiveBannerComponent',
         *      [etc.]
         *  }
         *
         * The type codes are dynamic since they depend on the implementation.
         * Customer will add, extend or ingore standard components.
         *
         * @param typeCode the component type
         */
        /**
         * @desc
         * returns a web component for the CMS typecode.
         *
         * The mapping of CMS components to web componetns requires a mapping.
         * This is configurable when the module is loaded.
         *
         * For example:
         *
         *  {
         *      'CMSLinkComponent': 'LinkComponent',
         *      'SimpleResponsiveBannerComponent': 'SimpleResponsiveBannerComponent',
         *      [etc.]
         *  }
         *
         * The type codes are dynamic since they depend on the implementation.
         * Customer will add, extend or ingore standard components.
         *
         * @protected
         * @param {?} typeCode the component type
         * @return {?}
         */
        ComponentMapperService.prototype.getType = /**
         * @desc
         * returns a web component for the CMS typecode.
         *
         * The mapping of CMS components to web componetns requires a mapping.
         * This is configurable when the module is loaded.
         *
         * For example:
         *
         *  {
         *      'CMSLinkComponent': 'LinkComponent',
         *      'SimpleResponsiveBannerComponent': 'SimpleResponsiveBannerComponent',
         *      [etc.]
         *  }
         *
         * The type codes are dynamic since they depend on the implementation.
         * Customer will add, extend or ingore standard components.
         *
         * @protected
         * @param {?} typeCode the component type
         * @return {?}
         */
            function (typeCode) {
                /** @type {?} */
                var componentConfig = this.config.cmsComponents[typeCode];
                if (!componentConfig) {
                    if (this.missingComponents.indexOf(typeCode) === -1) {
                        this.missingComponents.push(typeCode);
                        console.warn("No component implementation found for the CMS component type '" + typeCode + "'.\n", "Make sure you implement a component and register it in the mapper.");
                    }
                }
                return componentConfig ? componentConfig.selector : null;
            };
        /**
         * @param {?} typeCode
         * @return {?}
         */
        ComponentMapperService.prototype.getFactoryEntryByCode = /**
         * @param {?} typeCode
         * @return {?}
         */
            function (typeCode) {
                /** @type {?} */
                var alias = this.getType(typeCode);
                if (!alias) {
                    return;
                }
                /** @type {?} */
                var factoryEntries = Array.from(this.componentFactoryResolver['_factories'].entries());
                /** @type {?} */
                var factory = factoryEntries.find(function (_a) {
                    var _b = __read(_a, 2), value = _b[1];
                    return value.selector === alias;
                });
                if (!factory) {
                    console.warn("No component factory found for the CMS component type '" + typeCode + "'.\n", "Make sure you add a component to the 'entryComponents' array in the NgModule.");
                }
                return factory;
            };
        /**
         * @param {?} typeCode
         * @return {?}
         */
        ComponentMapperService.prototype.getComponentTypeByCode = /**
         * @param {?} typeCode
         * @return {?}
         */
            function (typeCode) {
                /** @type {?} */
                var factoryEntry = this.getFactoryEntryByCode(typeCode);
                return factoryEntry ? factoryEntry[0] : null;
            };
        /**
         * @param {?} typeCode
         * @return {?}
         */
        ComponentMapperService.prototype.getComponentFactoryByCode = /**
         * @param {?} typeCode
         * @return {?}
         */
            function (typeCode) {
                /** @type {?} */
                var factoryEntry = this.getFactoryEntryByCode(typeCode);
                return factoryEntry ? factoryEntry[1] : null;
            };
        /**
         * @param {?} typeCode
         * @return {?}
         */
        ComponentMapperService.prototype.isWebComponent = /**
         * @param {?} typeCode
         * @return {?}
         */
            function (typeCode) {
                return (this.getType(typeCode) || '').includes('#');
            };
        /**
         * @param {?} componentType
         * @param {?} renderer
         * @return {?}
         */
        ComponentMapperService.prototype.initWebComponent = /**
         * @param {?} componentType
         * @param {?} renderer
         * @return {?}
         */
            function (componentType, renderer) {
                var _this = this;
                return new Promise(function (resolve) {
                    var _a = __read(_this.getType(componentType).split('#'), 2), path = _a[0], selector = _a[1];
                    /** @type {?} */
                    var script = _this.loadedWebComponents[path];
                    if (!script) {
                        script = renderer.createElement('script');
                        _this.loadedWebComponents[path] = script;
                        script.setAttribute('src', path);
                        renderer.appendChild(_this.document.body, script);
                        if (i1.isPlatformBrowser(_this.platform)) {
                            script.onload = function () {
                                script.onload = null;
                            };
                        }
                    }
                    if (script.onload) {
                        // If script is still loading (has onload callback defined)
                        // add new callback and chain it with the existing one.
                        // Needed to support loading multiple components from one script
                        /** @type {?} */
                        var chainedOnload_1 = script.onload;
                        script.onload = function () {
                            chainedOnload_1();
                            resolve(selector);
                        };
                    }
                    else {
                        resolve(selector);
                    }
                });
            };
        ComponentMapperService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ComponentMapperService.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver },
                { type: CmsConfig },
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] },
                { type: undefined, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] }
            ];
        };
        return ComponentMapperService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ CmsComponentAdapter = /** @class */ (function () {
        function CmsComponentAdapter() {
        }
        return CmsComponentAdapter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CmsOccModule = /** @class */ (function () {
        function CmsOccModule() {
        }
        CmsOccModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [i1.CommonModule, i1$1.HttpClientModule],
                        providers: [
                            ComponentMapperService,
                            {
                                provide: CmsPageAdapter,
                                useClass: OccCmsPageAdapter,
                            },
                            {
                                provide: CMS_PAGE_NORMALIZE,
                                useClass: OccCmsPageNormalizer,
                                multi: true,
                            },
                            {
                                provide: CmsComponentAdapter,
                                useClass: OccCmsComponentAdapter,
                            },
                        ],
                    },] }
        ];
        return CmsOccModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Service that provides access to CMS structure from a static
     * configuration or configuration file. This class uses static
     * configuration is designed in async fashion so that configuratiosn
     * can be loaded from a file or stream.
     *
     * The intend of the `CmsStructureConfigService` however is to provide
     * fast loading pages and default cms structure for comodoty commerce.
     * @abstract
     */
    var CmsStructureConfigService = /** @class */ (function () {
        function CmsStructureConfigService(cmsDataConfig) {
            this.cmsDataConfig = cmsDataConfig;
        }
        /**
         * Merge the cms structure to the pageStructure. The page structure
         * can either hold complete page structures or global structures that
         * might apply to all pages (such has header coponents).
         */
        /**
         * Merge the cms structure to the pageStructure. The page structure
         * can either hold complete page structures or global structures that
         * might apply to all pages (such has header coponents).
         * @param {?} pageId
         * @param {?} pageStructure
         * @return {?}
         */
        CmsStructureConfigService.prototype.mergePageStructure = /**
         * Merge the cms structure to the pageStructure. The page structure
         * can either hold complete page structures or global structures that
         * might apply to all pages (such has header coponents).
         * @param {?} pageId
         * @param {?} pageStructure
         * @return {?}
         */
            function (pageId, pageStructure) {
                var _this = this;
                return this.mergePage(pageId, pageStructure).pipe(operators.switchMap(function (page) { return _this.mergeSlots(page); }));
            };
        /**
         *
         * Returns boolean observable to indicate whether the page should not be
         * loaded from the backend. This is useful for pages which are comoditized
         * and follow best practice.
         *
         * By default, configurable pages are driven by static configuration,
         * in order to allow for fast loading pages (preventing network delays).
         */
        /**
         *
         * Returns boolean observable to indicate whether the page should not be
         * loaded from the backend. This is useful for pages which are comoditized
         * and follow best practice.
         *
         * By default, configurable pages are driven by static configuration,
         * in order to allow for fast loading pages (preventing network delays).
         * @param {?} pageId
         * @return {?}
         */
        CmsStructureConfigService.prototype.shouldIgnoreBackend = /**
         *
         * Returns boolean observable to indicate whether the page should not be
         * loaded from the backend. This is useful for pages which are comoditized
         * and follow best practice.
         *
         * By default, configurable pages are driven by static configuration,
         * in order to allow for fast loading pages (preventing network delays).
         * @param {?} pageId
         * @return {?}
         */
            function (pageId) {
                return this.getPageFromConfig(pageId).pipe(operators.map(function (page) { return !!page && !!page.ignoreBackend; }));
            };
        /**
         * returns an Observable component data from the static configuration.
         */
        /**
         * returns an Observable component data from the static configuration.
         * @param {?} componentId
         * @return {?}
         */
        CmsStructureConfigService.prototype.getComponentFromConfig = /**
         * returns an Observable component data from the static configuration.
         * @param {?} componentId
         * @return {?}
         */
            function (componentId) {
                return rxjs.of(this.getComponentById(componentId));
            };
        /**
         * returns an Observable components data from the static configuration.
         */
        /**
         * returns an Observable components data from the static configuration.
         * @param {?} ids
         * @return {?}
         */
        CmsStructureConfigService.prototype.getComponentsFromConfig = /**
         * returns an Observable components data from the static configuration.
         * @param {?} ids
         * @return {?}
         */
            function (ids) {
                var _this = this;
                return rxjs.of(ids.map(function (id) { return _this.getComponentById(id); }));
            };
        /**
         * returns an observable with the `PageConfig`.
         */
        /**
         * returns an observable with the `PageConfig`.
         * @private
         * @param {?} pageId
         * @return {?}
         */
        CmsStructureConfigService.prototype.getPageFromConfig = /**
         * returns an observable with the `PageConfig`.
         * @private
         * @param {?} pageId
         * @return {?}
         */
            function (pageId) {
                return rxjs.of(this.cmsDataConfig.cmsStructure && this.cmsDataConfig.cmsStructure.pages
                    ? this.cmsDataConfig.cmsStructure.pages.find(function (p) { return p.pageId === pageId; })
                    : null);
            };
        /**
         * Merge page data from the configuration into the given structure, if any.
         * If the given page structure is empty, a page is created and the page slots are
         * are merged into the page.
         */
        /**
         * Merge page data from the configuration into the given structure, if any.
         * If the given page structure is empty, a page is created and the page slots are
         * are merged into the page.
         * @private
         * @param {?} pageId
         * @param {?} pageStructure
         * @return {?}
         */
        CmsStructureConfigService.prototype.mergePage = /**
         * Merge page data from the configuration into the given structure, if any.
         * If the given page structure is empty, a page is created and the page slots are
         * are merged into the page.
         * @private
         * @param {?} pageId
         * @param {?} pageStructure
         * @return {?}
         */
            function (pageId, pageStructure) {
                var _this = this;
                return this.getPageFromConfig(pageId).pipe(operators.switchMap(function (page) {
                    if (page) {
                        // serialize page data
                        if (!pageStructure.page) {
                            pageStructure.page = __assign({}, page);
                            pageStructure.page.slots = {};
                        }
                        if (!pageStructure.page.slots) {
                            pageStructure.page.slots = {};
                        }
                        return _this.mergeSlots(pageStructure, page.slots);
                    }
                    else {
                        return rxjs.of(pageStructure);
                    }
                }));
            };
        /**
         * Adds any pre-configured slots for pages that do not use them.
         * If pages have a slot for the given position, the configiuration
         * is ingored. Even if the slot does not have inner structure (such as
         * components), so that the cms structure is able to override the (static)
         * configuration.
         */
        /**
         * Adds any pre-configured slots for pages that do not use them.
         * If pages have a slot for the given position, the configiuration
         * is ingored. Even if the slot does not have inner structure (such as
         * components), so that the cms structure is able to override the (static)
         * configuration.
         * @private
         * @param {?} pageStructure
         * @param {?=} slots
         * @return {?}
         */
        CmsStructureConfigService.prototype.mergeSlots = /**
         * Adds any pre-configured slots for pages that do not use them.
         * If pages have a slot for the given position, the configiuration
         * is ingored. Even if the slot does not have inner structure (such as
         * components), so that the cms structure is able to override the (static)
         * configuration.
         * @private
         * @param {?} pageStructure
         * @param {?=} slots
         * @return {?}
         */
            function (pageStructure, slots) {
                var e_1, _a, e_2, _b;
                // if no slots have been given, we use the global configured slots
                if (!slots &&
                    this.cmsDataConfig.cmsStructure &&
                    this.cmsDataConfig.cmsStructure.slots) {
                    slots = this.cmsDataConfig.cmsStructure.slots;
                }
                if (!slots) {
                    return rxjs.of(pageStructure);
                }
                try {
                    for (var _c = __values(Object.keys(slots)), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var position = _d.value;
                        if (Object.keys(pageStructure.page.slots).indexOf(position) === -1) {
                            // the global slot isn't yet part of the page structure
                            pageStructure.page.slots[position] = {};
                            try {
                                for (var _e = __values(this.getComponentsByPosition(slots, position)), _f = _e.next(); !_f.done; _f = _e.next()) {
                                    var component = _f.value;
                                    if (!pageStructure.page.slots[position].components) {
                                        pageStructure.page.slots[position].components = [];
                                    }
                                    pageStructure.page.slots[position].components.push({
                                        uid: component.uid,
                                        flexType: component.flexType,
                                        typeCode: component.typeCode,
                                    });
                                    if (!pageStructure.components) {
                                        pageStructure.components = [];
                                    }
                                    pageStructure.components.push(component);
                                }
                            }
                            catch (e_2_1) {
                                e_2 = { error: e_2_1 };
                            }
                            finally {
                                try {
                                    if (_f && !_f.done && (_b = _e.return))
                                        _b.call(_e);
                                }
                                finally {
                                    if (e_2)
                                        throw e_2.error;
                                }
                            }
                        }
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return))
                            _a.call(_c);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                return rxjs.of(pageStructure);
            };
        /**
         * @private
         * @param {?} slots
         * @param {?} position
         * @return {?}
         */
        CmsStructureConfigService.prototype.getComponentsByPosition = /**
         * @private
         * @param {?} slots
         * @param {?} position
         * @return {?}
         */
            function (slots, position) {
                var e_3, _a;
                /** @type {?} */
                var components = [];
                if (slots[position] && slots[position].componentIds) {
                    try {
                        for (var _b = __values(slots[position].componentIds), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var componentId = _c.value;
                            if (this.cmsDataConfig.cmsStructure &&
                                this.cmsDataConfig.cmsStructure.components) {
                                /** @type {?} */
                                var component = this.cmsDataConfig.cmsStructure.components[componentId];
                                if (component) {
                                    components.push(__assign({ uid: componentId }, component));
                                }
                            }
                        }
                    }
                    catch (e_3_1) {
                        e_3 = { error: e_3_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                _a.call(_b);
                        }
                        finally {
                            if (e_3)
                                throw e_3.error;
                        }
                    }
                }
                return components;
            };
        /**
         * @private
         * @param {?} componentId
         * @return {?}
         */
        CmsStructureConfigService.prototype.getComponentById = /**
         * @private
         * @param {?} componentId
         * @return {?}
         */
            function (componentId) {
                return this.cmsDataConfig.cmsStructure &&
                    this.cmsDataConfig.cmsStructure.components
                    ? this.cmsDataConfig.cmsStructure.components[componentId]
                    : undefined;
            };
        CmsStructureConfigService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CmsStructureConfigService.ctorParameters = function () {
            return [
                { type: CmsStructureConfig }
            ];
        };
        /** @nocollapse */ CmsStructureConfigService.ngInjectableDef = i0.defineInjectable({ factory: function CmsStructureConfigService_Factory() { return new CmsStructureConfigService(i0.inject(CmsStructureConfig)); }, token: CmsStructureConfigService, providedIn: "root" });
        return CmsStructureConfigService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CmsPageConnector = /** @class */ (function () {
        function CmsPageConnector(cmsPageAdapter, cmsStructureConfigService) {
            this.cmsPageAdapter = cmsPageAdapter;
            this.cmsStructureConfigService = cmsStructureConfigService;
        }
        /**
         * Returns an observable with the page structure. The page structure is
         * typically loaded from a backend, but can also be returned from static
         * configuration (see `CmsStructureConfigService`).
         */
        /**
         * Returns an observable with the page structure. The page structure is
         * typically loaded from a backend, but can also be returned from static
         * configuration (see `CmsStructureConfigService`).
         * @param {?} pageContext
         * @return {?}
         */
        CmsPageConnector.prototype.get = /**
         * Returns an observable with the page structure. The page structure is
         * typically loaded from a backend, but can also be returned from static
         * configuration (see `CmsStructureConfigService`).
         * @param {?} pageContext
         * @return {?}
         */
            function (pageContext) {
                var _this = this;
                return this.cmsStructureConfigService
                    .shouldIgnoreBackend(pageContext.id)
                    .pipe(operators.switchMap(function (loadFromConfig) {
                    if (!loadFromConfig) {
                        return _this.cmsPageAdapter.load(pageContext).pipe(operators.catchError(function (error) {
                            if (error instanceof i1$1.HttpErrorResponse &&
                                error.status === 400) {
                                return rxjs.of({});
                            }
                            else {
                                return rxjs.throwError(error);
                            }
                        }));
                    }
                    else {
                        return rxjs.of({});
                    }
                }), operators.switchMap(function (page) { return _this.mergeDefaultPageStructure(pageContext, page); }));
            };
        /**
         *
         * Merge default page structure inot the given `CmsStructureModel`.
         * This is benefitial for a fast setup of the UI without necessary
         * finegrained CMS setup.
         */
        /**
         *
         * Merge default page structure inot the given `CmsStructureModel`.
         * This is benefitial for a fast setup of the UI without necessary
         * finegrained CMS setup.
         * @private
         * @param {?} pageContext
         * @param {?} pageStructure
         * @return {?}
         */
        CmsPageConnector.prototype.mergeDefaultPageStructure = /**
         *
         * Merge default page structure inot the given `CmsStructureModel`.
         * This is benefitial for a fast setup of the UI without necessary
         * finegrained CMS setup.
         * @private
         * @param {?} pageContext
         * @param {?} pageStructure
         * @return {?}
         */
            function (pageContext, pageStructure) {
                return this.cmsStructureConfigService.mergePageStructure(pageContext.id, pageStructure);
            };
        CmsPageConnector.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CmsPageConnector.ctorParameters = function () {
            return [
                { type: CmsPageAdapter },
                { type: CmsStructureConfigService }
            ];
        };
        /** @nocollapse */ CmsPageConnector.ngInjectableDef = i0.defineInjectable({ factory: function CmsPageConnector_Factory() { return new CmsPageConnector(i0.inject(CmsPageAdapter), i0.inject(CmsStructureConfigService)); }, token: CmsPageConnector, providedIn: "root" });
        return CmsPageConnector;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CmsComponentConnector = /** @class */ (function () {
        function CmsComponentConnector(cmsStructureConfigService, adapter) {
            this.cmsStructureConfigService = cmsStructureConfigService;
            this.adapter = adapter;
        }
        /**
         * @template T
         * @param {?} id
         * @param {?} pageContext
         * @return {?}
         */
        CmsComponentConnector.prototype.get = /**
         * @template T
         * @param {?} id
         * @param {?} pageContext
         * @return {?}
         */
            function (id, pageContext) {
                var _this = this;
                return this.cmsStructureConfigService
                    .getComponentFromConfig(id)
                    .pipe(operators.switchMap(function (configuredComponent) {
                    return configuredComponent
                        ? rxjs.of(configuredComponent)
                        : _this.adapter.load(id, pageContext);
                }));
            };
        /**
         * @param {?} ids
         * @param {?} pageContext
         * @return {?}
         */
        CmsComponentConnector.prototype.getList = /**
         * @param {?} ids
         * @param {?} pageContext
         * @return {?}
         */
            function (ids, pageContext) {
                var _this = this;
                return this.cmsStructureConfigService.getComponentsFromConfig(ids).pipe(operators.switchMap(function (configuredComponents) {
                    // check if we have some components that are not loaded from configuration
                    /** @type {?} */
                    var missingIds = configuredComponents.reduce(function (acc, component, index) {
                        if (component === undefined) {
                            acc.push(ids[index]);
                        }
                        return acc;
                    }, []);
                    if (missingIds.length > 0) {
                        return _this.adapter
                            .loadList(missingIds, pageContext)
                            .pipe(operators.map(function (loadedComponents) { return __spread(configuredComponents.filter(Boolean), loadedComponents); }));
                    }
                    else {
                        return rxjs.of(configuredComponents);
                    }
                }));
            };
        CmsComponentConnector.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CmsComponentConnector.ctorParameters = function () {
            return [
                { type: CmsStructureConfigService },
                { type: CmsComponentAdapter }
            ];
        };
        /** @nocollapse */ CmsComponentConnector.ngInjectableDef = i0.defineInjectable({ factory: function CmsComponentConnector_Factory() { return new CmsComponentConnector(i0.inject(CmsStructureConfigService), i0.inject(CmsComponentAdapter)); }, token: CmsComponentConnector, providedIn: "root" });
        return CmsComponentConnector;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CMS_FEATURE = 'cms';
    /** @type {?} */
    var NAVIGATION_DETAIL_ENTITY = '[Cms] Navigation Entity';
    /** @type {?} */
    var COMPONENT_ENTITY = '[Cms[ Component Entity';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOAD_PAGE_DATA = '[Cms] Load Page Data';
    /** @type {?} */
    var LOAD_PAGE_DATA_FAIL = '[Cms] Load Page Data Fail';
    /** @type {?} */
    var LOAD_PAGE_DATA_SUCCESS = '[Cms] Load Page Data Success';
    var LoadPageData = /** @class */ (function (_super) {
        __extends(LoadPageData, _super);
        function LoadPageData(payload) {
            var _this = _super.call(this, payload.type, payload.id) || this;
            _this.payload = payload;
            _this.type = LOAD_PAGE_DATA;
            return _this;
        }
        return LoadPageData;
    }(EntityLoadAction));
    var LoadPageDataFail = /** @class */ (function (_super) {
        __extends(LoadPageDataFail, _super);
        function LoadPageDataFail(pageContext, error) {
            var _this = _super.call(this, pageContext.type, pageContext.id, error) || this;
            _this.type = LOAD_PAGE_DATA_FAIL;
            return _this;
        }
        return LoadPageDataFail;
    }(EntityFailAction));
    var LoadPageDataSuccess = /** @class */ (function (_super) {
        __extends(LoadPageDataSuccess, _super);
        function LoadPageDataSuccess(pageContext, payload) {
            var _this = _super.call(this, pageContext.type, pageContext.id, payload) || this;
            _this.type = LOAD_PAGE_DATA_SUCCESS;
            return _this;
        }
        return LoadPageDataSuccess;
    }(EntitySuccessAction));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOAD_COMPONENT = '[Cms] Load Component';
    /** @type {?} */
    var LOAD_COMPONENT_FAIL = '[Cms] Load Component Fail';
    /** @type {?} */
    var LOAD_COMPONENT_SUCCESS = '[Cms] Load Component Success';
    /** @type {?} */
    var GET_COMPONENET_FROM_PAGE = '[Cms] Get Component from Page';
    var LoadComponent = /** @class */ (function (_super) {
        __extends(LoadComponent, _super);
        function LoadComponent(payload) {
            var _this = _super.call(this, COMPONENT_ENTITY, payload) || this;
            _this.payload = payload;
            _this.type = LOAD_COMPONENT;
            return _this;
        }
        return LoadComponent;
    }(EntityLoadAction));
    var LoadComponentFail = /** @class */ (function (_super) {
        __extends(LoadComponentFail, _super);
        function LoadComponentFail(uid, payload) {
            var _this = _super.call(this, COMPONENT_ENTITY, uid, payload) || this;
            _this.payload = payload;
            _this.type = LOAD_COMPONENT_FAIL;
            return _this;
        }
        return LoadComponentFail;
    }(EntityFailAction));
    /**
     * @template T
     */
    var /**
     * @template T
     */ LoadComponentSuccess = /** @class */ (function (_super) {
        __extends(LoadComponentSuccess, _super);
        function LoadComponentSuccess(payload) {
            var _this = _super.call(this, COMPONENT_ENTITY, payload.uid) || this;
            _this.payload = payload;
            _this.type = LOAD_COMPONENT_SUCCESS;
            return _this;
        }
        return LoadComponentSuccess;
    }(EntitySuccessAction));
    /**
     * @template T
     */
    var /**
     * @template T
     */ GetComponentFromPage = /** @class */ (function (_super) {
        __extends(GetComponentFromPage, _super);
        function GetComponentFromPage(payload) {
            var _this = _super.call(this, COMPONENT_ENTITY, payload.map(function (cmp) { return cmp.uid; })) || this;
            _this.payload = payload;
            _this.type = GET_COMPONENET_FROM_PAGE;
            return _this;
        }
        return GetComponentFromPage;
    }(EntitySuccessAction));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOAD_NAVIGATION_ITEMS = '[Cms] Load NavigationEntry items';
    /** @type {?} */
    var LOAD_NAVIGATION_ITEMS_FAIL = '[Cms] Load NavigationEntry items Fail';
    /** @type {?} */
    var LOAD_NAVIGATION_ITEMS_SUCCESS = '[Cms] Load NavigationEntry items Success';
    var LoadNavigationItems = /** @class */ (function (_super) {
        __extends(LoadNavigationItems, _super);
        function LoadNavigationItems(payload) {
            var _this = _super.call(this, NAVIGATION_DETAIL_ENTITY, payload.nodeId) || this;
            _this.payload = payload;
            _this.type = LOAD_NAVIGATION_ITEMS;
            return _this;
        }
        return LoadNavigationItems;
    }(EntityLoadAction));
    var LoadNavigationItemsFail = /** @class */ (function (_super) {
        __extends(LoadNavigationItemsFail, _super);
        function LoadNavigationItemsFail(nodeId, payload) {
            var _this = _super.call(this, NAVIGATION_DETAIL_ENTITY, nodeId, payload) || this;
            _this.payload = payload;
            _this.type = LOAD_NAVIGATION_ITEMS_FAIL;
            return _this;
        }
        return LoadNavigationItemsFail;
    }(EntityFailAction));
    var LoadNavigationItemsSuccess = /** @class */ (function (_super) {
        __extends(LoadNavigationItemsSuccess, _super);
        function LoadNavigationItemsSuccess(payload) {
            var _this = _super.call(this, NAVIGATION_DETAIL_ENTITY, payload.nodeId) || this;
            _this.payload = payload;
            _this.type = LOAD_NAVIGATION_ITEMS_SUCCESS;
            return _this;
        }
        return LoadNavigationItemsSuccess;
    }(EntitySuccessAction));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getCmsState = i1$2.createFeatureSelector(CMS_FEATURE);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getPageEntitiesSelector = function (state) {
        return state.pageData.entities;
    };
    /** @type {?} */
    var getIndexByType = function (index, type) {
        switch (type) {
            case PageType.CONTENT_PAGE: {
                return index.content;
            }
            case PageType.PRODUCT_PAGE: {
                return index.product;
            }
            case PageType.CATEGORY_PAGE: {
                return index.category;
            }
            case PageType.CATALOG_PAGE: {
                return index.catalog;
            }
        }
        return { entities: {} };
    };
    /** @type {?} */
    var getPageComponentTypesSelector = function (page) {
        var e_1, _a, e_2, _b;
        /** @type {?} */
        var componentTypes = new Set();
        if (page && page.slots) {
            try {
                for (var _c = __values(Object.keys(page.slots)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var slot = _d.value;
                    try {
                        for (var _e = __values(page.slots[slot].components || []), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var component = _f.value;
                            componentTypes.add(component.flexType);
                        }
                    }
                    catch (e_2_1) {
                        e_2 = { error: e_2_1 };
                    }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return))
                                _b.call(_e);
                        }
                        finally {
                            if (e_2)
                                throw e_2.error;
                        }
                    }
                }
            }
            catch (e_1_1) {
                e_1 = { error: e_1_1 };
            }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return))
                        _a.call(_c);
                }
                finally {
                    if (e_1)
                        throw e_1.error;
                }
            }
        }
        return Array.from(componentTypes);
    };
    /** @type {?} */
    var getPageState = i1$2.createSelector(getCmsState, function (state) { return state.page; });
    /** @type {?} */
    var getPageStateIndex = i1$2.createSelector(getPageState, function (page) { return page.index; });
    /** @type {?} */
    var getIndex = function (pageContext) {
        return i1$2.createSelector(getPageStateIndex, function (index) { return getIndexByType(index, pageContext.type); });
    };
    /** @type {?} */
    var getIndexEntity = function (pageContext) {
        return i1$2.createSelector(getIndex(pageContext), function (index) { return index.entities[pageContext.id] || {}; });
    };
    /** @type {?} */
    var getPageEntities = i1$2.createSelector(getPageState, getPageEntitiesSelector);
    /** @type {?} */
    var getPageData = function (pageContext) {
        return i1$2.createSelector(getPageEntities, getIndexEntity(pageContext), function (entities, entity) {
            return entities[entity.value];
        });
    };
    /** @type {?} */
    var getPageComponentTypes = function (pageContext) {
        return i1$2.createSelector(getPageData(pageContext), function (pageData) { return getPageComponentTypesSelector(pageData); });
    };
    /** @type {?} */
    var currentSlotSelectorFactory = function (pageContext, position) {
        return i1$2.createSelector(getPageData(pageContext), function (entity) {
            if (entity) {
                return entity.slots[position];
            }
        });
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getComponentEntitiesSelector = function (state) {
        return Object.keys(state.entities).reduce(function (acc, cur) {
            acc[cur] = state.entities[cur].value;
            return acc;
        }, {});
    };
    /** @type {?} */
    var getComponentState = i1$2.createSelector(getCmsState, function (state) { return state.component; });
    /** @type {?} */
    var getComponentEntities = i1$2.createSelector(getComponentState, getComponentEntitiesSelector);
    /** @type {?} */
    var componentStateSelectorFactory = function (uid) {
        return i1$2.createSelector(getComponentState, function (entities) { return entityStateSelector(entities, uid); });
    };
    /** @type {?} */
    var componentSelectorFactory = function (uid) {
        return i1$2.createSelector(componentStateSelectorFactory(uid), function (state) { return loaderValueSelector(state); });
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getNavigationEntryItemState = i1$2.createSelector(getCmsState, function (state) { return state.navigation; });
    /** @type {?} */
    var getSelectedNavigationEntryItemState = function (nodeId) {
        return i1$2.createSelector(getNavigationEntryItemState, function (nodes) { return entityStateSelector(nodes, nodeId); });
    };
    /** @type {?} */
    var itemsSelectorFactory = function (nodeId) {
        return i1$2.createSelector(getSelectedNavigationEntryItemState(nodeId), function (itemState) { return loaderValueSelector(itemState); });
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SERVER_BASE_URL_META_TAG_NAME = 'occ-backend-base-url';
    /** @type {?} */
    var SERVER_BASE_URL_META_TAG_PLACEHOLDER = 'OCC_BACKEND_BASE_URL_VALUE';
    /**
     * @param {?} meta
     * @return {?}
     */
    function serverConfigFromMetaTagFactory(meta) {
        /** @type {?} */
        var baseUrl = getMetaTagContent(SERVER_BASE_URL_META_TAG_NAME, meta);
        return baseUrl && baseUrl !== SERVER_BASE_URL_META_TAG_PLACEHOLDER
            ? { backend: { occ: { baseUrl: baseUrl } } }
            : {};
    }
    /**
     * @param {?} name
     * @param {?} meta
     * @return {?}
     */
    function getMetaTagContent(name, meta) {
        /** @type {?} */
        var metaTag = meta.getTag("name=\"" + name + "\"");
        return metaTag && metaTag.content;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$k = undefined;
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$k(state, action) {
        if (state === void 0) {
            state = initialState$k;
        }
        switch (action.type) {
            case LOAD_NAVIGATION_ITEMS_SUCCESS: {
                if (action.payload.components) {
                    /** @type {?} */
                    var components = action.payload.components;
                    /** @type {?} */
                    var newItem = components.reduce(function (compItems, component) {
                        var _a;
                        return __assign({}, compItems, (_a = {}, _a[component.uid + "_AbstractCMSComponent"] = component, _a));
                    }, __assign({}));
                    return __assign({}, state, newItem);
                }
            }
        }
        return state;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$l = { entities: {} };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$l(state, action) {
        if (state === void 0) {
            state = initialState$l;
        }
        var _a;
        switch (action.type) {
            case LOAD_PAGE_DATA_SUCCESS: {
                /** @type {?} */
                var page = action.payload;
                return __assign({}, state, { entities: __assign({}, state.entities, (_a = {}, _a[page.pageId] = page, _a)) });
            }
        }
        return state;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$m = undefined;
    /**
     * @param {?} entityType
     * @return {?}
     */
    function reducer$m(entityType) {
        return function (state, action) {
            if (state === void 0) {
                state = initialState$m;
            }
            if (action.meta && action.meta.entityType === entityType) {
                switch (action.type) {
                    case LOAD_PAGE_DATA_SUCCESS: {
                        return action.payload.pageId;
                    }
                    case LOAD_PAGE_DATA_FAIL: {
                        return initialState$m;
                    }
                }
            }
            return state;
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function getReducers$8() {
        return {
            page: i1$2.combineReducers({
                pageData: reducer$l,
                index: i1$2.combineReducers({
                    content: entityLoaderReducer(PageType.CONTENT_PAGE, reducer$m(PageType.CONTENT_PAGE)),
                    product: entityLoaderReducer(PageType.PRODUCT_PAGE, reducer$m(PageType.PRODUCT_PAGE)),
                    category: entityLoaderReducer(PageType.CATEGORY_PAGE, reducer$m(PageType.CATEGORY_PAGE)),
                    catalog: entityLoaderReducer(PageType.CATALOG_PAGE, reducer$m(PageType.CATALOG_PAGE)),
                }),
            }),
            component: entityLoaderReducer(COMPONENT_ENTITY),
            navigation: entityLoaderReducer(NAVIGATION_DETAIL_ENTITY, reducer$k),
        };
    }
    /** @type {?} */
    var reducerToken$8 = new i0.InjectionToken('CmsReducers');
    /** @type {?} */
    var reducerProvider$8 = {
        provide: reducerToken$8,
        useFactory: getReducers$8,
    };
    /**
     * @param {?} reducer
     * @return {?}
     */
    function clearCmsState(reducer) {
        return function (state, action) {
            if (action.type === LANGUAGE_CHANGE ||
                action.type === LOGOUT ||
                action.type === LOGIN) {
                state = undefined;
            }
            return reducer(state, action);
        };
    }
    /** @type {?} */
    var metaReducers$4 = [clearCmsState];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageContext = /** @class */ (function () {
        function PageContext(id, type) {
            this.id = id;
            this.type = type;
            if (this.type == null) {
                this.type = PageType.CONTENT_PAGE;
            }
        }
        return PageContext;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TranslateUrlPipe = /** @class */ (function () {
        function TranslateUrlPipe(urlTranslator) {
            this.urlTranslator = urlTranslator;
        }
        /**
         * @param {?} commands
         * @param {?=} options
         * @return {?}
         */
        TranslateUrlPipe.prototype.transform = /**
         * @param {?} commands
         * @param {?=} options
         * @return {?}
         */
            function (commands, options) {
                if (options === void 0) {
                    options = {};
                }
                return this.urlTranslator.translate(commands, options);
            };
        TranslateUrlPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'cxTranslateUrl',
                    },] }
        ];
        /** @nocollapse */
        TranslateUrlPipe.ctorParameters = function () {
            return [
                { type: UrlTranslationService }
            ];
        };
        return TranslateUrlPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UrlTranslationModule = /** @class */ (function () {
        function UrlTranslationModule() {
        }
        UrlTranslationModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [i1.CommonModule],
                        declarations: [TranslateUrlPipe],
                        exports: [TranslateUrlPipe],
                    },] }
        ];
        return UrlTranslationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageEffects = /** @class */ (function () {
        function PageEffects(actions$, cmsPageConnector, routingService) {
            var _this = this;
            this.actions$ = actions$;
            this.cmsPageConnector = cmsPageConnector;
            this.routingService = routingService;
            this.refreshPage$ = this.actions$.pipe(effects.ofType(LANGUAGE_CHANGE, LOGOUT, LOGIN), operators.switchMap(function (_) {
                return _this.routingService.getRouterState().pipe(operators.filter(function (routerState) {
                    return routerState && routerState.state && routerState.state.cmsRequired;
                }), operators.map(function (routerState) { return routerState.state.context; }), operators.take(1), operators.mergeMap(function (context) { return rxjs.of(new LoadPageData(context)); }));
            }));
            this.loadPageData$ = this.actions$.pipe(effects.ofType(LOAD_PAGE_DATA), operators.map(function (action) { return action.payload; }), operators.switchMap(function (pageContext) {
                return _this.cmsPageConnector.get(pageContext).pipe(operators.mergeMap(function (cmsStructure) {
                    return [
                        new LoadPageDataSuccess(pageContext, cmsStructure.page),
                        new GetComponentFromPage(cmsStructure.components),
                    ];
                }), operators.catchError(function (error) {
                    return rxjs.of(new LoadPageDataFail(pageContext, error));
                }));
            }));
        }
        PageEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        PageEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: CmsPageConnector },
                { type: RoutingService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], PageEffects.prototype, "refreshPage$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], PageEffects.prototype, "loadPageData$", void 0);
        return PageEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentEffects = /** @class */ (function () {
        function ComponentEffects(actions$, cmsComponentLoader, routingService) {
            var _this = this;
            this.actions$ = actions$;
            this.cmsComponentLoader = cmsComponentLoader;
            this.routingService = routingService;
            this.loadComponent$ = this.actions$.pipe(effects.ofType(LOAD_COMPONENT), operators.map(function (action) { return action.payload; }), operators.groupBy(function (uid) { return uid; }), operators.mergeMap(function (group) {
                return group.pipe(operators.switchMap(function (uid) {
                    return _this.routingService.getRouterState().pipe(operators.filter(function (routerState) { return routerState !== undefined; }), operators.map(function (routerState) { return routerState.state.context; }), operators.take(1), operators.mergeMap(function (pageContext) {
                        return _this.cmsComponentLoader.get(uid, pageContext).pipe(operators.map(function (data) { return new LoadComponentSuccess(data); }), operators.catchError(function (error) {
                            return rxjs.of(new LoadComponentFail(uid, error));
                        }));
                    }));
                }));
            }));
        }
        ComponentEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ComponentEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: CmsComponentConnector },
                { type: RoutingService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], ComponentEffects.prototype, "loadComponent$", void 0);
        return ComponentEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavigationEntryItemEffects = /** @class */ (function () {
        function NavigationEntryItemEffects(actions$, cmsComponentConnector, routingService) {
            var _this = this;
            this.actions$ = actions$;
            this.cmsComponentConnector = cmsComponentConnector;
            this.routingService = routingService;
            this.loadNavigationItems$ = this.actions$.pipe(effects.ofType(LOAD_NAVIGATION_ITEMS), operators.map(function (action) { return action.payload; }), operators.map(function (payload) {
                return {
                    ids: _this.getIdListByItemType(payload.items),
                    nodeId: payload.nodeId,
                };
            }), operators.mergeMap(function (data) {
                if (data.ids.componentIds.length > 0) {
                    return _this.routingService.getRouterState().pipe(operators.filter(function (routerState) { return routerState !== undefined; }), operators.map(function (routerState) { return routerState.state.context; }), operators.take(1), operators.mergeMap(function (pageContext) {
                        // download all items in one request
                        return _this.cmsComponentConnector
                            .getList(data.ids.componentIds, pageContext)
                            .pipe(operators.map(function (components) {
                            return new LoadNavigationItemsSuccess({
                                nodeId: data.nodeId,
                                components: components,
                            });
                        }), operators.catchError(function (error) {
                            return rxjs.of(new LoadNavigationItemsFail(data.nodeId, error));
                        }));
                    }));
                }
                else if (data.ids.pageIds.length > 0) ;
                else if (data.ids.mediaIds.length > 0) ;
                else {
                    return rxjs.of(new LoadNavigationItemsFail(data.nodeId, 'navigation nodes are empty'));
                }
            }));
        }
        // We only consider 3 item types: cms page, cms component, and media.
        // We only consider 3 item types: cms page, cms component, and media.
        /**
         * @param {?} itemList
         * @return {?}
         */
        NavigationEntryItemEffects.prototype.getIdListByItemType =
            // We only consider 3 item types: cms page, cms component, and media.
            /**
             * @param {?} itemList
             * @return {?}
             */
            function (itemList) {
                /** @type {?} */
                var pageIds = [];
                /** @type {?} */
                var componentIds = [];
                /** @type {?} */
                var mediaIds = [];
                itemList.forEach(function (item) {
                    if (item.superType === 'AbstractCMSComponent') {
                        componentIds.push(item.id);
                    }
                    else if (item.superType === 'AbstractPage') {
                        pageIds.push(item.id);
                    }
                    else if (item.superType === 'AbstractMedia') {
                        mediaIds.push(item.id);
                    }
                });
                return { pageIds: pageIds, componentIds: componentIds, mediaIds: mediaIds };
            };
        NavigationEntryItemEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        NavigationEntryItemEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: CmsComponentConnector },
                { type: RoutingService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], NavigationEntryItemEffects.prototype, "loadNavigationItems$", void 0);
        return NavigationEntryItemEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var effects$7 = [
        PageEffects,
        ComponentEffects,
        NavigationEntryItemEffects,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CmsService = /** @class */ (function () {
        function CmsService(store, routingService) {
            this.store = store;
            this.routingService = routingService;
            this._launchInSmartEdit = false;
            this.components = {};
        }
        Object.defineProperty(CmsService.prototype, "launchInSmartEdit", {
            /**
             * Set _launchInSmartEdit value
             */
            set: /**
             * Set _launchInSmartEdit value
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._launchInSmartEdit = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Whether the app launched in smart edit
         */
        /**
         * Whether the app launched in smart edit
         * @return {?}
         */
        CmsService.prototype.isLaunchInSmartEdit = /**
         * Whether the app launched in smart edit
         * @return {?}
         */
            function () {
                return this._launchInSmartEdit;
            };
        /**
         * Get current CMS page data
         */
        /**
         * Get current CMS page data
         * @return {?}
         */
        CmsService.prototype.getCurrentPage = /**
         * Get current CMS page data
         * @return {?}
         */
            function () {
                var _this = this;
                return this.routingService
                    .getPageContext()
                    .pipe(operators.switchMap(function (pageContext) {
                    return _this.store.select(getPageData(pageContext));
                }));
            };
        /**
         * Get CMS component data by uid
         * @param uid : CMS componet uid
         */
        /**
         * Get CMS component data by uid
         * @template T
         * @param {?} uid : CMS componet uid
         * @return {?}
         */
        CmsService.prototype.getComponentData = /**
         * Get CMS component data by uid
         * @template T
         * @param {?} uid : CMS componet uid
         * @return {?}
         */
            function (uid) {
                var _this = this;
                if (!this.components[uid]) {
                    this.components[uid] = this.store.pipe(i1$2.select(componentStateSelectorFactory(uid)), operators.withLatestFrom(this.getCurrentPage()), operators.tap(function (_a) {
                        var _b = __read(_a, 2), componentState = _b[0], currentPage = _b[1];
                        /** @type {?} */
                        var attemptedLoad = componentState.loading ||
                            componentState.success ||
                            componentState.error;
                        if (!attemptedLoad && currentPage) {
                            _this.store.dispatch(new LoadComponent(uid));
                        }
                    }), operators.map(function (_a) {
                        var _b = __read(_a, 1), productState = _b[0];
                        return productState.value;
                    }), operators.filter(Boolean), 
                    // TODO: Replace next two lines with shareReplay(1, undefined, true) when RxJS 6.4 will be in use
                    operators.multicast(function () { return new rxjs.ReplaySubject(1); }), operators.refCount());
                }
                return ( /** @type {?} */(this.components[uid]));
            };
        /**
         * Given the position, get the content slot data
         * @param position : content slot position
         */
        /**
         * Given the position, get the content slot data
         * @param {?} position : content slot position
         * @return {?}
         */
        CmsService.prototype.getContentSlot = /**
         * Given the position, get the content slot data
         * @param {?} position : content slot position
         * @return {?}
         */
            function (position) {
                var _this = this;
                return this.routingService.getPageContext().pipe(operators.switchMap(function (pageContext) {
                    return _this.store.pipe(i1$2.select(currentSlotSelectorFactory(pageContext, position)), operators.filter(Boolean));
                }));
            };
        /**
         * Given navigation node uid, get items (with id and type) inside the navigation entries
         * @param navigationNodeUid : uid of the navigation node
         */
        /**
         * Given navigation node uid, get items (with id and type) inside the navigation entries
         * @param {?} navigationNodeUid : uid of the navigation node
         * @return {?}
         */
        CmsService.prototype.getNavigationEntryItems = /**
         * Given navigation node uid, get items (with id and type) inside the navigation entries
         * @param {?} navigationNodeUid : uid of the navigation node
         * @return {?}
         */
            function (navigationNodeUid) {
                return this.store.pipe(i1$2.select(itemsSelectorFactory(navigationNodeUid)));
            };
        /**
         * Load navigation items data
         * @param rootUid : the uid of the root navigation node
         * @param itemList : list of items (with id and type)
         */
        /**
         * Load navigation items data
         * @param {?} rootUid : the uid of the root navigation node
         * @param {?} itemList : list of items (with id and type)
         * @return {?}
         */
        CmsService.prototype.loadNavigationItems = /**
         * Load navigation items data
         * @param {?} rootUid : the uid of the root navigation node
         * @param {?} itemList : list of items (with id and type)
         * @return {?}
         */
            function (rootUid, itemList) {
                this.store.dispatch(new LoadNavigationItems({
                    nodeId: rootUid,
                    items: itemList,
                }));
            };
        /**
         * Refresh the content of the latest cms page
         */
        /**
         * Refresh the content of the latest cms page
         * @return {?}
         */
        CmsService.prototype.refreshLatestPage = /**
         * Refresh the content of the latest cms page
         * @return {?}
         */
            function () {
                var _this = this;
                this.routingService
                    .getPageContext()
                    .pipe(operators.take(1))
                    .subscribe(function (pageContext) {
                    return _this.store.dispatch(new LoadPageData(pageContext));
                });
            };
        /**
         * Refresh cms component's content
         * @param uid : component uid
         */
        /**
         * Refresh cms component's content
         * @param {?} uid : component uid
         * @return {?}
         */
        CmsService.prototype.refreshComponent = /**
         * Refresh cms component's content
         * @param {?} uid : component uid
         * @return {?}
         */
            function (uid) {
                this.store.dispatch(new LoadComponent(uid));
            };
        /**
         * Given pageContext, return the CMS page data
         * @param pageContext
         */
        /**
         * Given pageContext, return the CMS page data
         * @param {?} pageContext
         * @return {?}
         */
        CmsService.prototype.getPageState = /**
         * Given pageContext, return the CMS page data
         * @param {?} pageContext
         * @return {?}
         */
            function (pageContext) {
                return this.store.pipe(i1$2.select(getPageData(pageContext)));
            };
        /**
         * Given pageContext, return the CMS page data
         * @param pageContext
         */
        /**
         * Given pageContext, return the CMS page data
         * @param {?} pageContext
         * @return {?}
         */
        CmsService.prototype.getPageComponentTypes = /**
         * Given pageContext, return the CMS page data
         * @param {?} pageContext
         * @return {?}
         */
            function (pageContext) {
                return this.store.pipe(i1$2.select(getPageComponentTypes(pageContext)));
            };
        /**
         * Given pageContext, return whether the CMS page data exists or not
         * @param pageContext
         */
        /**
         * Given pageContext, return whether the CMS page data exists or not
         * @param {?} pageContext
         * @return {?}
         */
        CmsService.prototype.hasPage = /**
         * Given pageContext, return whether the CMS page data exists or not
         * @param {?} pageContext
         * @return {?}
         */
            function (pageContext) {
                var _this = this;
                return this.store.pipe(i1$2.select(getIndexEntity(pageContext)), operators.tap(function (entity) {
                    /** @type {?} */
                    var attemptedLoad = entity.loading || entity.success || entity.error;
                    if (!attemptedLoad) {
                        _this.store.dispatch(new LoadPageData(pageContext));
                    }
                }), operators.filter(function (entity) { return entity.success || entity.error; }), operators.map(function (entity) { return entity.success; }), operators.catchError(function () { return rxjs.of(false); }));
            };
        CmsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CmsService.ctorParameters = function () {
            return [
                { type: i1$2.Store },
                { type: RoutingService }
            ];
        };
        /** @nocollapse */ CmsService.ngInjectableDef = i0.defineInjectable({ factory: function CmsService_Factory() { return new CmsService(i0.inject(i1$2.Store), i0.inject(RoutingService)); }, token: CmsService, providedIn: "root" });
        return CmsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ PageMetaResolver = /** @class */ (function () {
        function PageMetaResolver() {
        }
        /**
         * @param {?} page
         * @return {?}
         */
        PageMetaResolver.prototype.getScore = /**
         * @param {?} page
         * @return {?}
         */
            function (page) {
                /** @type {?} */
                var score = 0;
                if (this.pageType) {
                    score += page.type === this.pageType ? 1 : -1;
                }
                if (this.pageTemplate) {
                    score += page.template === this.pageTemplate ? 1 : -1;
                }
                return score;
            };
        return PageMetaResolver;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageMetaService = /** @class */ (function () {
        function PageMetaService(resolvers, cms) {
            this.resolvers = resolvers;
            this.cms = cms;
        }
        /**
         * @return {?}
         */
        PageMetaService.prototype.getMeta = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.cms.getCurrentPage().pipe(operators.filter(Boolean), operators.switchMap(function (page) {
                    /** @type {?} */
                    var metaResolver = _this.getMetaResolver(page);
                    if (metaResolver) {
                        return metaResolver.resolve();
                    }
                    else {
                        // we do not have a page resolver
                        return rxjs.of(null);
                    }
                }));
            };
        /**
         * return the title resolver with the best match
         * title resovers can by default match on PageType and page template
         * but custom match comparisors can be implemented.
         */
        /**
         * return the title resolver with the best match
         * title resovers can by default match on PageType and page template
         * but custom match comparisors can be implemented.
         * @protected
         * @param {?} page
         * @return {?}
         */
        PageMetaService.prototype.getMetaResolver = /**
         * return the title resolver with the best match
         * title resovers can by default match on PageType and page template
         * but custom match comparisors can be implemented.
         * @protected
         * @param {?} page
         * @return {?}
         */
            function (page) {
                /** @type {?} */
                var matchingResolvers = this.resolvers.filter(function (resolver) { return resolver.getScore(page) > 0; });
                matchingResolvers.sort(function (a, b) {
                    return b.getScore(page) - a.getScore(page);
                });
                return matchingResolvers[0];
            };
        PageMetaService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        PageMetaService.ctorParameters = function () {
            return [
                { type: Array, decorators: [{ type: i0.Inject, args: [PageMetaResolver,] }] },
                { type: CmsService }
            ];
        };
        /** @nocollapse */ PageMetaService.ngInjectableDef = i0.defineInjectable({ factory: function PageMetaService_Factory() { return new PageMetaService(i0.inject(PageMetaResolver), i0.inject(CmsService)); }, token: PageMetaService, providedIn: "root" });
        return PageMetaService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function cmsStoreConfigFactory() {
        var _a;
        // if we want to reuse CMS_FEATURE const in config, we have to use factory instead of plain object
        /** @type {?} */
        var config = {
            state: {
                ssrTransfer: {
                    keys: (_a = {}, _a[CMS_FEATURE] = StateTransferType.TRANSFER_STATE, _a),
                },
            },
        };
        return config;
    }
    var CmsStoreModule = /** @class */ (function () {
        function CmsStoreModule() {
        }
        CmsStoreModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.CommonModule,
                            i1$1.HttpClientModule,
                            StateModule,
                            i1$2.StoreModule.forFeature(CMS_FEATURE, reducerToken$8, { metaReducers: metaReducers$4 }),
                            effects.EffectsModule.forFeature(effects$7),
                            ConfigModule.withConfigFactory(cmsStoreConfigFactory),
                        ],
                        providers: [reducerProvider$8],
                    },] }
        ];
        return CmsStoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContentPageMetaResolver = /** @class */ (function (_super) {
        __extends(ContentPageMetaResolver, _super);
        function ContentPageMetaResolver(cms) {
            var _this = _super.call(this) || this;
            _this.cms = cms;
            _this.pageType = PageType.CONTENT_PAGE;
            return _this;
        }
        /**
         * @return {?}
         */
        ContentPageMetaResolver.prototype.resolve = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.cms.getCurrentPage().pipe(operators.filter(Boolean), operators.switchMap(function (page) { return _this.resolveTitle(page); }), operators.map(function (title) { return ({ title: title }); }));
            };
        /**
         * @param {?} page
         * @return {?}
         */
        ContentPageMetaResolver.prototype.resolveTitle = /**
         * @param {?} page
         * @return {?}
         */
            function (page) {
                return rxjs.of(page.title);
            };
        ContentPageMetaResolver.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        ContentPageMetaResolver.ctorParameters = function () {
            return [
                { type: CmsService }
            ];
        };
        /** @nocollapse */ ContentPageMetaResolver.ngInjectableDef = i0.defineInjectable({ factory: function ContentPageMetaResolver_Factory() { return new ContentPageMetaResolver(i0.inject(CmsService)); }, token: ContentPageMetaResolver, providedIn: "root" });
        return ContentPageMetaResolver;
    }(PageMetaResolver));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CmsPageTitleModule = /** @class */ (function () {
        function CmsPageTitleModule() {
        }
        CmsPageTitleModule.decorators = [
            { type: i0.NgModule, args: [{
                        providers: [
                            {
                                provide: PageMetaResolver,
                                useExisting: ContentPageMetaResolver,
                                multi: true,
                            },
                        ],
                    },] }
        ];
        return CmsPageTitleModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CmsModule = /** @class */ (function () {
        function CmsModule() {
        }
        CmsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [CmsOccModule, CmsStoreModule, CmsPageTitleModule],
                        providers: [CmsService, { provide: CmsStructureConfig, useExisting: Config }],
                    },] }
        ];
        return CmsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DynamicAttributeService = /** @class */ (function () {
        function DynamicAttributeService() {
        }
        /**
         * Add dynamic attributes to DOM. These attributes are extracted from the properties of cms items received from backend.
         * There can by many different groups of properties, one of them is smaredit. But EC allows addons to create different groups.
         * For example, personalization may add 'script' group etc.
         * @param properties: properties in each cms item response data
         * @param element: slot or cms component element
         * @param renderer
         */
        /**
         * Add dynamic attributes to DOM. These attributes are extracted from the properties of cms items received from backend.
         * There can by many different groups of properties, one of them is smaredit. But EC allows addons to create different groups.
         * For example, personalization may add 'script' group etc.
         * @param {?} properties
         * @param {?} element
         * @param {?} renderer
         * @return {?}
         */
        DynamicAttributeService.prototype.addDynamicAttributes = /**
         * Add dynamic attributes to DOM. These attributes are extracted from the properties of cms items received from backend.
         * There can by many different groups of properties, one of them is smaredit. But EC allows addons to create different groups.
         * For example, personalization may add 'script' group etc.
         * @param {?} properties
         * @param {?} element
         * @param {?} renderer
         * @return {?}
         */
            function (properties, element, renderer) {
                if (properties) {
                    // check each group of properties, e.g. smartedit
                    Object.keys(properties).forEach(function (group) {
                        /** @type {?} */
                        var name = 'data-' + group + '-';
                        /** @type {?} */
                        var groupProps = properties[group];
                        // check each property in the group
                        Object.keys(groupProps).forEach(function (propName) {
                            /** @type {?} */
                            var propValue = groupProps[propName];
                            if (propName === 'classes') {
                                /** @type {?} */
                                var classes = propValue.split(' ');
                                classes.forEach(function (classItem) {
                                    element.classList.add(classItem);
                                });
                            }
                            else {
                                renderer.setAttribute(element, name +
                                    propName
                                        .split(/(?=[A-Z])/)
                                        .join('-')
                                        .toLowerCase(), propValue);
                            }
                        });
                    });
                }
            };
        DynamicAttributeService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */ DynamicAttributeService.ngInjectableDef = i0.defineInjectable({ factory: function DynamicAttributeService_Factory() { return new DynamicAttributeService(); }, token: DynamicAttributeService, providedIn: "root" });
        return DynamicAttributeService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckoutPageMetaResolver = /** @class */ (function (_super) {
        __extends(CheckoutPageMetaResolver, _super);
        function CheckoutPageMetaResolver(routingService, cartService) {
            var _this = _super.call(this) || this;
            _this.routingService = routingService;
            _this.cartService = cartService;
            _this.pageType = PageType.CONTENT_PAGE;
            _this.pageTemplate = 'MultiStepCheckoutSummaryPageTemplate';
            return _this;
        }
        /**
         * @return {?}
         */
        CheckoutPageMetaResolver.prototype.resolve = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.cartService.getActive().pipe(operators.switchMap(function (cart) {
                    return rxjs.combineLatest([_this.resolveTitle(cart), _this.resolveRobots()]);
                }), operators.map(function (_a) {
                    var _b = __read(_a, 2), title = _b[0], robots = _b[1];
                    return ({ title: title, robots: robots });
                }));
            };
        /**
         * @param {?} cart
         * @return {?}
         */
        CheckoutPageMetaResolver.prototype.resolveTitle = /**
         * @param {?} cart
         * @return {?}
         */
            function (cart) {
                return rxjs.of("Checkout " + cart.totalItems + " items");
            };
        /**
         * @return {?}
         */
        CheckoutPageMetaResolver.prototype.resolveRobots = /**
         * @return {?}
         */
            function () {
                return rxjs.of([PageRobotsMeta.NOFOLLOW, PageRobotsMeta.NOINDEX]);
            };
        CheckoutPageMetaResolver.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CheckoutPageMetaResolver.ctorParameters = function () {
            return [
                { type: RoutingService },
                { type: CartService }
            ];
        };
        /** @nocollapse */ CheckoutPageMetaResolver.ngInjectableDef = i0.defineInjectable({ factory: function CheckoutPageMetaResolver_Factory() { return new CheckoutPageMetaResolver(i0.inject(RoutingService), i0.inject(CartService)); }, token: CheckoutPageMetaResolver, providedIn: "root" });
        return CheckoutPageMetaResolver;
    }(PageMetaResolver));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckoutModule = /** @class */ (function () {
        function CheckoutModule() {
        }
        CheckoutModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [CheckoutStoreModule],
                        providers: [
                            CheckoutService,
                            {
                                provide: PageMetaResolver,
                                useExisting: CheckoutPageMetaResolver,
                                multi: true,
                            },
                        ],
                    },] }
        ];
        return CheckoutModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CxApiModule = /** @class */ (function () {
        function CxApiModule() {
        }
        CxApiModule.decorators = [
            { type: i0.NgModule, args: [{},] }
        ];
        return CxApiModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var defaultOccProductConfig = {
        backend: {
            occ: {
                endpoints: {
                    product: 'products/${productCode}?fields=DEFAULT,averageRating,images(FULL),classifications,numberOfReviews',
                    productReviews: 'products/${productCode}/reviews',
                    // tslint:disable:max-line-length
                    productSearch: 'products/search?fields=products(code,name,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT)&query=${query}',
                    // tslint:enable
                    productSuggestions: 'products/suggestions?term=${term}&max=${max}',
                },
            },
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ ProductReviewsAdapter = /** @class */ (function () {
        function ProductReviewsAdapter() {
        }
        return ProductReviewsAdapter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var PRODUCT_REVIEW_NORMALIZER = new i0.InjectionToken('ProductReviewNormalizer');
    /** @type {?} */
    var PRODUCT_REVIEW_SERIALIZER = new i0.InjectionToken('ProductReviewSerializer');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OccProductReviewsAdapter = /** @class */ (function () {
        function OccProductReviewsAdapter(http, occEndpoints, converter) {
            this.http = http;
            this.occEndpoints = occEndpoints;
            this.converter = converter;
        }
        /**
         * @param {?} productCode
         * @param {?=} maxCount
         * @return {?}
         */
        OccProductReviewsAdapter.prototype.load = /**
         * @param {?} productCode
         * @param {?=} maxCount
         * @return {?}
         */
            function (productCode, maxCount) {
                return this.http.get(this.getEndpoint(productCode, maxCount)).pipe(operators.pluck('reviews'), this.converter.pipeableMany(PRODUCT_REVIEW_NORMALIZER));
            };
        /**
         * @param {?} productCode
         * @param {?} review
         * @return {?}
         */
        OccProductReviewsAdapter.prototype.post = /**
         * @param {?} productCode
         * @param {?} review
         * @return {?}
         */
            function (productCode, review) {
                review = this.converter.convert(review, PRODUCT_REVIEW_SERIALIZER);
                /** @type {?} */
                var headers = new i1$1.HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded',
                });
                /** @type {?} */
                var body = new URLSearchParams();
                body.append('headline', review.headline);
                body.append('comment', review.comment);
                body.append('rating', review.rating.toString());
                body.append('alias', review.alias);
                return this.http.post(this.getEndpoint(productCode), body.toString(), {
                    headers: headers,
                });
            };
        /**
         * @protected
         * @param {?} code
         * @param {?=} maxCount
         * @return {?}
         */
        OccProductReviewsAdapter.prototype.getEndpoint = /**
         * @protected
         * @param {?} code
         * @param {?=} maxCount
         * @return {?}
         */
            function (code, maxCount) {
                return this.occEndpoints.getUrl('productReviews', {
                    productCode: code,
                }, { maxCount: maxCount });
            };
        OccProductReviewsAdapter.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        OccProductReviewsAdapter.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: OccEndpointsService },
                { type: ConverterService }
            ];
        };
        return OccProductReviewsAdapter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OccProductAdapter = /** @class */ (function () {
        function OccProductAdapter(http, occEndpoints, converter) {
            this.http = http;
            this.occEndpoints = occEndpoints;
            this.converter = converter;
        }
        /**
         * @param {?} productCode
         * @return {?}
         */
        OccProductAdapter.prototype.load = /**
         * @param {?} productCode
         * @return {?}
         */
            function (productCode) {
                return this.http
                    .get(this.getEndpoint(productCode))
                    .pipe(this.converter.pipeable(PRODUCT_NORMALIZER));
            };
        /**
         * @protected
         * @param {?} code
         * @return {?}
         */
        OccProductAdapter.prototype.getEndpoint = /**
         * @protected
         * @param {?} code
         * @return {?}
         */
            function (code) {
                return this.occEndpoints.getUrl('product', {
                    productCode: code,
                });
            };
        OccProductAdapter.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        OccProductAdapter.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: OccEndpointsService },
                { type: ConverterService }
            ];
        };
        return OccProductAdapter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ ProductAdapter = /** @class */ (function () {
        function ProductAdapter() {
        }
        return ProductAdapter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductImageNormalizer = /** @class */ (function () {
        function ProductImageNormalizer(config) {
            this.config = config;
        }
        /**
         * @param {?} source
         * @param {?=} target
         * @return {?}
         */
        ProductImageNormalizer.prototype.convert = /**
         * @param {?} source
         * @param {?=} target
         * @return {?}
         */
            function (source, target) {
                if (target === undefined) {
                    target = __assign({}, (( /** @type {?} */(source))));
                }
                if (source.images) {
                    target.images = this.normalize(source.images);
                }
                return target;
            };
        /**
         * @desc
         * Creates the image structure we'd like to have. Instead of
         * having a single list with all images despite type and format
         * we create a proper structure. With that we can do:
         * - images.primary.thumnail.url
         * - images.GALLERY[0].thumnail.url
         */
        /**
         * @desc
         * Creates the image structure we'd like to have. Instead of
         * having a single list with all images despite type and format
         * we create a proper structure. With that we can do:
         * - images.primary.thumnail.url
         * - images.GALLERY[0].thumnail.url
         * @param {?} source
         * @return {?}
         */
        ProductImageNormalizer.prototype.normalize = /**
         * @desc
         * Creates the image structure we'd like to have. Instead of
         * having a single list with all images despite type and format
         * we create a proper structure. With that we can do:
         * - images.primary.thumnail.url
         * - images.GALLERY[0].thumnail.url
         * @param {?} source
         * @return {?}
         */
            function (source) {
                var e_1, _a;
                /** @type {?} */
                var images = {};
                if (source) {
                    try {
                        for (var source_1 = __values(source), source_1_1 = source_1.next(); !source_1_1.done; source_1_1 = source_1.next()) {
                            var image = source_1_1.value;
                            /** @type {?} */
                            var isList = image.hasOwnProperty('galleryIndex');
                            if (!images.hasOwnProperty(image.imageType)) {
                                images[image.imageType] = isList ? [] : {};
                            }
                            /** @type {?} */
                            var imageContainer = void 0;
                            if (isList && !images[image.imageType][image.galleryIndex]) {
                                images[image.imageType][image.galleryIndex] = {};
                            }
                            if (isList) {
                                imageContainer = images[image.imageType][image.galleryIndex];
                            }
                            else {
                                imageContainer = images[image.imageType];
                            }
                            // set full image URL path
                            image.url = (this.config.backend.occ.baseUrl || '') + image.url;
                            imageContainer[image.format] = image;
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (source_1_1 && !source_1_1.done && (_a = source_1.return))
                                _a.call(source_1);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                }
                return images;
            };
        ProductImageNormalizer.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ProductImageNormalizer.ctorParameters = function () {
            return [
                { type: OccConfig }
            ];
        };
        return ProductImageNormalizer;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductReferenceNormalizer = /** @class */ (function () {
        function ProductReferenceNormalizer() {
        }
        /**
         * @param {?} source
         * @param {?=} target
         * @return {?}
         */
        ProductReferenceNormalizer.prototype.convert = /**
         * @param {?} source
         * @param {?=} target
         * @return {?}
         */
            function (source, target) {
                if (target === undefined) {
                    target = __assign({}, (( /** @type {?} */(source))));
                }
                if (source.productReferences) {
                    target.productReferences = this.normalize(source.productReferences);
                }
                return target;
            };
        /**
         * @desc
         * Creates the reference structure we'd like to have. Instead of
         * having a single list with all references we create a proper structure.
         * With that we have a semantic API for the clients
         * - product.references.SIMILAR[0].code
         */
        /**
         * @desc
         * Creates the reference structure we'd like to have. Instead of
         * having a single list with all references we create a proper structure.
         * With that we have a semantic API for the clients
         * - product.references.SIMILAR[0].code
         * @protected
         * @param {?} source
         * @return {?}
         */
        ProductReferenceNormalizer.prototype.normalize = /**
         * @desc
         * Creates the reference structure we'd like to have. Instead of
         * having a single list with all references we create a proper structure.
         * With that we have a semantic API for the clients
         * - product.references.SIMILAR[0].code
         * @protected
         * @param {?} source
         * @return {?}
         */
            function (source) {
                var e_1, _a;
                /** @type {?} */
                var references = {};
                if (source) {
                    try {
                        for (var source_1 = __values(source), source_1_1 = source_1.next(); !source_1_1.done; source_1_1 = source_1.next()) {
                            var reference = source_1_1.value;
                            if (!references.hasOwnProperty(reference.referenceType)) {
                                references[reference.referenceType] = [];
                            }
                            references[reference.referenceType].push(reference);
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (source_1_1 && !source_1_1.done && (_a = source_1.return))
                                _a.call(source_1);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                }
                return references;
            };
        ProductReferenceNormalizer.decorators = [
            { type: i0.Injectable }
        ];
        return ProductReferenceNormalizer;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ ProductSearchAdapter = /** @class */ (function () {
        function ProductSearchAdapter() {
        }
        return ProductSearchAdapter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var PRODUCT_SEARCH_PAGE_NORMALIZER = new i0.InjectionToken('ProductSearchPageNormalizer');
    /** @type {?} */
    var PRODUCT_SUGGESTION_NORMALIZER = new i0.InjectionToken('ProductSuggestionNormalizer');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DEFAULT_SEARCH_CONFIG = {
        pageSize: 20,
    };
    var OccProductSearchAdapter = /** @class */ (function () {
        function OccProductSearchAdapter(http, occEndpoints, converter) {
            this.http = http;
            this.occEndpoints = occEndpoints;
            this.converter = converter;
        }
        /**
         * @param {?} query
         * @param {?=} searchConfig
         * @return {?}
         */
        OccProductSearchAdapter.prototype.search = /**
         * @param {?} query
         * @param {?=} searchConfig
         * @return {?}
         */
            function (query, searchConfig) {
                if (searchConfig === void 0) {
                    searchConfig = DEFAULT_SEARCH_CONFIG;
                }
                return this.http
                    .get(this.getSearchEndpoint(query, searchConfig))
                    .pipe(this.converter.pipeable(PRODUCT_SEARCH_PAGE_NORMALIZER));
            };
        /**
         * @param {?} term
         * @param {?=} pageSize
         * @return {?}
         */
        OccProductSearchAdapter.prototype.loadSuggestions = /**
         * @param {?} term
         * @param {?=} pageSize
         * @return {?}
         */
            function (term, pageSize) {
                if (pageSize === void 0) {
                    pageSize = 3;
                }
                return this.http
                    .get(this.getSuggestionEndpoint(term, pageSize.toString()))
                    .pipe(operators.pluck('suggestions'), this.converter.pipeableMany(PRODUCT_SUGGESTION_NORMALIZER));
            };
        /**
         * @protected
         * @param {?} query
         * @param {?} searchConfig
         * @return {?}
         */
        OccProductSearchAdapter.prototype.getSearchEndpoint = /**
         * @protected
         * @param {?} query
         * @param {?} searchConfig
         * @return {?}
         */
            function (query, searchConfig) {
                return this.occEndpoints.getUrl('productSearch', {
                    query: query,
                }, {
                    pageSize: searchConfig.pageSize,
                    currentPage: searchConfig.currentPage,
                    sort: searchConfig.sortCode,
                });
            };
        /**
         * @protected
         * @param {?} term
         * @param {?} max
         * @return {?}
         */
        OccProductSearchAdapter.prototype.getSuggestionEndpoint = /**
         * @protected
         * @param {?} term
         * @param {?} max
         * @return {?}
         */
            function (term, max) {
                return this.occEndpoints.getUrl('productSuggestions', {
                    term: term,
                    max: max,
                });
            };
        OccProductSearchAdapter.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        OccProductSearchAdapter.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: OccEndpointsService },
                { type: ConverterService }
            ];
        };
        return OccProductSearchAdapter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OccProductSearchPageNormalizer = /** @class */ (function () {
        function OccProductSearchPageNormalizer(converterService) {
            this.converterService = converterService;
        }
        /**
         * @param {?} source
         * @param {?=} target
         * @return {?}
         */
        OccProductSearchPageNormalizer.prototype.convert = /**
         * @param {?} source
         * @param {?=} target
         * @return {?}
         */
            function (source, target) {
                var _this = this;
                if (target === void 0) {
                    target = {};
                }
                target = __assign({}, target, (( /** @type {?} */(source))));
                if (source.products) {
                    target.products = source.products.map(function (product) {
                        return _this.converterService.convert(product, PRODUCT_NORMALIZER);
                    });
                }
                return target;
            };
        OccProductSearchPageNormalizer.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        OccProductSearchPageNormalizer.ctorParameters = function () {
            return [
                { type: ConverterService }
            ];
        };
        return OccProductSearchPageNormalizer;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductOccModule = /** @class */ (function () {
        function ProductOccModule() {
        }
        ProductOccModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.CommonModule,
                            i1$1.HttpClientModule,
                            OccModule,
                            ConfigModule.withConfig(defaultOccProductConfig),
                        ],
                        providers: [
                            {
                                provide: ProductAdapter,
                                useClass: OccProductAdapter,
                            },
                            {
                                provide: PRODUCT_NORMALIZER,
                                useClass: ProductImageNormalizer,
                                multi: true,
                            },
                            {
                                provide: PRODUCT_NORMALIZER,
                                useClass: ProductReferenceNormalizer,
                                multi: true,
                            },
                            {
                                provide: ProductSearchAdapter,
                                useClass: OccProductSearchAdapter,
                            },
                            {
                                provide: PRODUCT_SEARCH_PAGE_NORMALIZER,
                                useClass: OccProductSearchPageNormalizer,
                                multi: true,
                            },
                            {
                                provide: ProductReviewsAdapter,
                                useClass: OccProductReviewsAdapter,
                            },
                        ],
                    },] }
        ];
        return ProductOccModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var PRODUCT_FEATURE = 'product';
    /** @type {?} */
    var PRODUCT_DETAIL_ENTITY = '[Product] Detail Entity';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SEARCH_PRODUCTS = '[Product] Search Products';
    /** @type {?} */
    var SEARCH_PRODUCTS_FAIL = '[Product] Search Products Fail';
    /** @type {?} */
    var SEARCH_PRODUCTS_SUCCESS = '[Product] Search Products Success';
    /** @type {?} */
    var GET_PRODUCT_SUGGESTIONS = '[Product] Get Product Suggestions';
    /** @type {?} */
    var GET_PRODUCT_SUGGESTIONS_SUCCESS = '[Product] Get Product Suggestions Success';
    /** @type {?} */
    var GET_PRODUCT_SUGGESTIONS_FAIL = '[Product] Get Product Suggestions Fail';
    /** @type {?} */
    var CLEAN_PRODUCT_SEARCH = '[Product] Clean Product Search State';
    var SearchProducts = /** @class */ (function () {
        function SearchProducts(payload, auxiliary) {
            this.payload = payload;
            this.auxiliary = auxiliary;
            this.type = SEARCH_PRODUCTS;
        }
        return SearchProducts;
    }());
    var SearchProductsFail = /** @class */ (function () {
        function SearchProductsFail(payload, auxiliary) {
            this.payload = payload;
            this.auxiliary = auxiliary;
            this.type = SEARCH_PRODUCTS_FAIL;
        }
        return SearchProductsFail;
    }());
    var SearchProductsSuccess = /** @class */ (function () {
        function SearchProductsSuccess(payload, auxiliary) {
            this.payload = payload;
            this.auxiliary = auxiliary;
            this.type = SEARCH_PRODUCTS_SUCCESS;
        }
        return SearchProductsSuccess;
    }());
    var GetProductSuggestions = /** @class */ (function () {
        function GetProductSuggestions(payload) {
            this.payload = payload;
            this.type = GET_PRODUCT_SUGGESTIONS;
        }
        return GetProductSuggestions;
    }());
    var GetProductSuggestionsSuccess = /** @class */ (function () {
        function GetProductSuggestionsSuccess(payload) {
            this.payload = payload;
            this.type = GET_PRODUCT_SUGGESTIONS_SUCCESS;
        }
        return GetProductSuggestionsSuccess;
    }());
    var GetProductSuggestionsFail = /** @class */ (function () {
        function GetProductSuggestionsFail(payload) {
            this.payload = payload;
            this.type = GET_PRODUCT_SUGGESTIONS_FAIL;
        }
        return GetProductSuggestionsFail;
    }());
    var CleanProductSearchState = /** @class */ (function () {
        function CleanProductSearchState() {
            this.type = CLEAN_PRODUCT_SEARCH;
        }
        return CleanProductSearchState;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOAD_PRODUCT = '[Product] Load Product Data';
    /** @type {?} */
    var LOAD_PRODUCT_FAIL = '[Product] Load Product Data Fail';
    /** @type {?} */
    var LOAD_PRODUCT_SUCCESS = '[Product] Load Product Data Success';
    var LoadProduct = /** @class */ (function (_super) {
        __extends(LoadProduct, _super);
        function LoadProduct(payload) {
            var _this = _super.call(this, PRODUCT_DETAIL_ENTITY, payload) || this;
            _this.payload = payload;
            _this.type = LOAD_PRODUCT;
            return _this;
        }
        return LoadProduct;
    }(EntityLoadAction));
    var LoadProductFail = /** @class */ (function (_super) {
        __extends(LoadProductFail, _super);
        function LoadProductFail(productCode, payload) {
            var _this = _super.call(this, PRODUCT_DETAIL_ENTITY, productCode, payload) || this;
            _this.payload = payload;
            _this.type = LOAD_PRODUCT_FAIL;
            return _this;
        }
        return LoadProductFail;
    }(EntityFailAction));
    var LoadProductSuccess = /** @class */ (function (_super) {
        __extends(LoadProductSuccess, _super);
        function LoadProductSuccess(payload) {
            var _this = _super.call(this, PRODUCT_DETAIL_ENTITY, payload.code) || this;
            _this.payload = payload;
            _this.type = LOAD_PRODUCT_SUCCESS;
            return _this;
        }
        return LoadProductSuccess;
    }(EntitySuccessAction));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOAD_PRODUCT_REVIEWS = '[Product] Load Product Reviews Data';
    /** @type {?} */
    var LOAD_PRODUCT_REVIEWS_FAIL = '[Product] Load Product Reviews Data Fail';
    /** @type {?} */
    var LOAD_PRODUCT_REVIEWS_SUCCESS = '[Product] Load Product Reviews Data Success';
    /** @type {?} */
    var POST_PRODUCT_REVIEW = '[Product] Post Product Review';
    /** @type {?} */
    var POST_PRODUCT_REVIEW_FAIL = '[Product] Post Product Review Fail';
    /** @type {?} */
    var POST_PRODUCT_REVIEW_SUCCESS = '[Product] Post Product Review Success';
    var LoadProductReviews = /** @class */ (function () {
        function LoadProductReviews(payload) {
            this.payload = payload;
            this.type = LOAD_PRODUCT_REVIEWS;
        }
        return LoadProductReviews;
    }());
    var LoadProductReviewsFail = /** @class */ (function () {
        function LoadProductReviewsFail(payload) {
            this.payload = payload;
            this.type = LOAD_PRODUCT_REVIEWS_FAIL;
        }
        return LoadProductReviewsFail;
    }());
    var LoadProductReviewsSuccess = /** @class */ (function () {
        function LoadProductReviewsSuccess(payload) {
            this.payload = payload;
            this.type = LOAD_PRODUCT_REVIEWS_SUCCESS;
        }
        return LoadProductReviewsSuccess;
    }());
    var PostProductReview = /** @class */ (function () {
        function PostProductReview(payload) {
            this.payload = payload;
            this.type = POST_PRODUCT_REVIEW;
        }
        return PostProductReview;
    }());
    var PostProductReviewFail = /** @class */ (function () {
        function PostProductReviewFail(payload) {
            this.payload = payload;
            this.type = POST_PRODUCT_REVIEW_FAIL;
        }
        return PostProductReviewFail;
    }());
    var PostProductReviewSuccess = /** @class */ (function () {
        function PostProductReviewSuccess(payload) {
            this.payload = payload;
            this.type = POST_PRODUCT_REVIEW_SUCCESS;
        }
        return PostProductReviewSuccess;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getProductsState = i1$2.createFeatureSelector(PRODUCT_FEATURE);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getProductState = i1$2.createSelector(getProductsState, function (state) { return state.details; });
    /** @type {?} */
    var getSelectedProductsFactory = function (codes) {
        return i1$2.createSelector(getProductState, function (details) {
            return codes
                .map(function (code) {
                return details.entities[code] ? details.entities[code].value : undefined;
            })
                .filter(function (product) { return product !== undefined; });
        });
    };
    /** @type {?} */
    var getSelectedProductStateFactory = function (code) {
        return i1$2.createSelector(getProductState, function (details) { return entityStateSelector(details, code); });
    };
    /** @type {?} */
    var getSelectedProductFactory = function (code) {
        return i1$2.createSelector(getSelectedProductStateFactory(code), function (productState) { return loaderValueSelector(productState); });
    };
    /** @type {?} */
    var getSelectedProductLoadingFactory = function (code) {
        return i1$2.createSelector(getSelectedProductStateFactory(code), function (productState) { return loaderLoadingSelector(productState); });
    };
    /** @type {?} */
    var getSelectedProductSuccessFactory = function (code) {
        return i1$2.createSelector(getSelectedProductStateFactory(code), function (productState) { return loaderSuccessSelector(productState); });
    };
    /** @type {?} */
    var getSelectedProductErrorFactory = function (code) {
        return i1$2.createSelector(getSelectedProductStateFactory(code), function (productState) { return loaderErrorSelector(productState); });
    };
    /** @type {?} */
    var getAllProductCodes = i1$2.createSelector(getProductState, function (details) {
        return Object.keys(details.entities);
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$n = {
        results: {},
        suggestions: [],
        auxResults: {},
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$n(state, action) {
        if (state === void 0) {
            state = initialState$n;
        }
        switch (action.type) {
            case SEARCH_PRODUCTS_SUCCESS: {
                /** @type {?} */
                var results = action.payload;
                /** @type {?} */
                var res = action.auxiliary ? { auxResults: results } : { results: results };
                return __assign({}, state, res);
            }
            case GET_PRODUCT_SUGGESTIONS_SUCCESS: {
                /** @type {?} */
                var suggestions = action.payload;
                return __assign({}, state, { suggestions: suggestions });
            }
            case CLEAN_PRODUCT_SEARCH: {
                return initialState$n;
            }
        }
        return state;
    }
    /** @type {?} */
    var getSearchResults = function (state) { return state.results; };
    /** @type {?} */
    var getAuxSearchResults = function (state) { return state.auxResults; };
    /** @type {?} */
    var getProductSuggestions = function (state) { return state.suggestions; };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getProductsSearchState = i1$2.createSelector(getProductsState, function (state) { return state.search; });
    /** @type {?} */
    var getSearchResults$1 = i1$2.createSelector(getProductsSearchState, getSearchResults);
    /** @type {?} */
    var getAuxSearchResults$1 = i1$2.createSelector(getProductsSearchState, getAuxSearchResults);
    /** @type {?} */
    var getProductSuggestions$1 = i1$2.createSelector(getProductsSearchState, getProductSuggestions);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getProductReviewsState = i1$2.createSelector(getProductsState, function (state) { return state.reviews; });
    /** @type {?} */
    var getSelectedProductReviewsFactory = function (productCode) {
        return i1$2.createSelector(getProductReviewsState, function (reviewData) {
            if (reviewData.productCode === productCode) {
                return reviewData.list;
            }
        });
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$o = {
        productCode: '',
        list: [],
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$o(state, action) {
        if (state === void 0) {
            state = initialState$o;
        }
        switch (action.type) {
            case LOAD_PRODUCT_REVIEWS_SUCCESS: {
                /** @type {?} */
                var productCode = action.payload.productCode;
                /** @type {?} */
                var list = action.payload.list;
                return __assign({}, state, { productCode: productCode,
                    list: list });
            }
        }
        return state;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function getReducers$9() {
        return {
            search: reducer$n,
            details: entityLoaderReducer(PRODUCT_DETAIL_ENTITY),
            reviews: reducer$o,
        };
    }
    /** @type {?} */
    var reducerToken$9 = new i0.InjectionToken('ProductReducers');
    /** @type {?} */
    var reducerProvider$9 = {
        provide: reducerToken$9,
        useFactory: getReducers$9,
    };
    /**
     * @param {?} reducer
     * @return {?}
     */
    function clearProductsState(reducer) {
        return function (state, action) {
            if (action.type === CURRENCY_CHANGE || action.type === LANGUAGE_CHANGE) {
                state = undefined;
            }
            return reducer(state, action);
        };
    }
    /** @type {?} */
    var metaReducers$5 = [clearProductsState];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductSearchConnector = /** @class */ (function () {
        function ProductSearchConnector(adapter) {
            this.adapter = adapter;
        }
        /**
         * @param {?} query
         * @param {?=} searchConfig
         * @return {?}
         */
        ProductSearchConnector.prototype.search = /**
         * @param {?} query
         * @param {?=} searchConfig
         * @return {?}
         */
            function (query, searchConfig) {
                return this.adapter.search(query, searchConfig);
            };
        /**
         * @param {?} term
         * @param {?=} pageSize
         * @return {?}
         */
        ProductSearchConnector.prototype.getSuggestions = /**
         * @param {?} term
         * @param {?=} pageSize
         * @return {?}
         */
            function (term, pageSize) {
                return this.adapter.loadSuggestions(term, pageSize);
            };
        ProductSearchConnector.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        ProductSearchConnector.ctorParameters = function () {
            return [
                { type: ProductSearchAdapter }
            ];
        };
        /** @nocollapse */ ProductSearchConnector.ngInjectableDef = i0.defineInjectable({ factory: function ProductSearchConnector_Factory() { return new ProductSearchConnector(i0.inject(ProductSearchAdapter)); }, token: ProductSearchConnector, providedIn: "root" });
        return ProductSearchConnector;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductsSearchEffects = /** @class */ (function () {
        function ProductsSearchEffects(actions$, productSearchConnector) {
            var _this = this;
            this.actions$ = actions$;
            this.productSearchConnector = productSearchConnector;
            this.searchProducts$ = this.actions$.pipe(effects.ofType(SEARCH_PRODUCTS), operators.switchMap(function (action) {
                return _this.productSearchConnector
                    .search(action.payload.queryText, action.payload.searchConfig)
                    .pipe(operators.map(function (data) {
                    return new SearchProductsSuccess(data, action.auxiliary);
                }), operators.catchError(function (error) {
                    return rxjs.of(new SearchProductsFail(error, action.auxiliary));
                }));
            }));
            this.getProductSuggestions$ = this.actions$.pipe(effects.ofType(GET_PRODUCT_SUGGESTIONS), operators.map(function (action) { return action.payload; }), operators.switchMap(function (payload) {
                return _this.productSearchConnector
                    .getSuggestions(payload.term, payload.searchConfig.pageSize)
                    .pipe(operators.map(function (suggestions) {
                    if (suggestions === undefined) {
                        return new GetProductSuggestionsSuccess([]);
                    }
                    return new GetProductSuggestionsSuccess(suggestions);
                }), operators.catchError(function (error) {
                    return rxjs.of(new GetProductSuggestionsFail(error));
                }));
            }));
        }
        ProductsSearchEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ProductsSearchEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: ProductSearchConnector }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], ProductsSearchEffects.prototype, "searchProducts$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], ProductsSearchEffects.prototype, "getProductSuggestions$", void 0);
        return ProductsSearchEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductConnector = /** @class */ (function () {
        function ProductConnector(adapter) {
            this.adapter = adapter;
        }
        /**
         * @param {?} productCode
         * @return {?}
         */
        ProductConnector.prototype.get = /**
         * @param {?} productCode
         * @return {?}
         */
            function (productCode) {
                return this.adapter.load(productCode);
            };
        ProductConnector.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        ProductConnector.ctorParameters = function () {
            return [
                { type: ProductAdapter }
            ];
        };
        /** @nocollapse */ ProductConnector.ngInjectableDef = i0.defineInjectable({ factory: function ProductConnector_Factory() { return new ProductConnector(i0.inject(ProductAdapter)); }, token: ProductConnector, providedIn: "root" });
        return ProductConnector;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductEffects = /** @class */ (function () {
        function ProductEffects(actions$, productConnector) {
            var _this = this;
            this.actions$ = actions$;
            this.productConnector = productConnector;
            this.loadProduct$ = this.actions$.pipe(effects.ofType(LOAD_PRODUCT), operators.map(function (action) { return action.payload; }), operators.groupBy(function (productCode) { return productCode; }), operators.mergeMap(function (group) {
                return group.pipe(operators.switchMap(function (productCode) {
                    return _this.productConnector.get(productCode).pipe(operators.map(function (product) {
                        return new LoadProductSuccess(product);
                    }), operators.catchError(function (error) {
                        return rxjs.of(new LoadProductFail(productCode, error));
                    }));
                }));
            }));
        }
        ProductEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ProductEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: ProductConnector }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], ProductEffects.prototype, "loadProduct$", void 0);
        return ProductEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductReviewsConnector = /** @class */ (function () {
        function ProductReviewsConnector(adapter) {
            this.adapter = adapter;
        }
        /**
         * @param {?} productCode
         * @param {?=} maxCount
         * @return {?}
         */
        ProductReviewsConnector.prototype.get = /**
         * @param {?} productCode
         * @param {?=} maxCount
         * @return {?}
         */
            function (productCode, maxCount) {
                return this.adapter.load(productCode, maxCount);
            };
        /**
         * @param {?} productCode
         * @param {?} review
         * @return {?}
         */
        ProductReviewsConnector.prototype.add = /**
         * @param {?} productCode
         * @param {?} review
         * @return {?}
         */
            function (productCode, review) {
                return this.adapter.post(productCode, review);
            };
        ProductReviewsConnector.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        ProductReviewsConnector.ctorParameters = function () {
            return [
                { type: ProductReviewsAdapter }
            ];
        };
        /** @nocollapse */ ProductReviewsConnector.ngInjectableDef = i0.defineInjectable({ factory: function ProductReviewsConnector_Factory() { return new ProductReviewsConnector(i0.inject(ProductReviewsAdapter)); }, token: ProductReviewsConnector, providedIn: "root" });
        return ProductReviewsConnector;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductReviewsEffects = /** @class */ (function () {
        function ProductReviewsEffects(actions$, productReviewsConnector) {
            var _this = this;
            this.actions$ = actions$;
            this.productReviewsConnector = productReviewsConnector;
            this.loadProductReviews$ = this.actions$.pipe(effects.ofType(LOAD_PRODUCT_REVIEWS), operators.map(function (action) { return action.payload; }), operators.mergeMap(function (productCode) {
                return _this.productReviewsConnector.get(productCode).pipe(operators.map(function (data) {
                    return new LoadProductReviewsSuccess({
                        productCode: productCode,
                        list: data,
                    });
                }), operators.catchError(function (_error) {
                    return rxjs.of(new LoadProductReviewsFail(( /** @type {?} */({
                        message: productCode,
                    }))));
                }));
            }));
            this.postProductReview = this.actions$.pipe(effects.ofType(POST_PRODUCT_REVIEW), operators.map(function (action) { return action.payload; }), operators.mergeMap(function (payload) {
                return _this.productReviewsConnector
                    .add(payload.productCode, payload.review)
                    .pipe(operators.map(function (reviewResponse) {
                    return new PostProductReviewSuccess(reviewResponse);
                }), operators.catchError(function (_error) {
                    return rxjs.of(new PostProductReviewFail(payload.productCode));
                }));
            }));
        }
        ProductReviewsEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ProductReviewsEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: ProductReviewsConnector }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], ProductReviewsEffects.prototype, "loadProductReviews$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], ProductReviewsEffects.prototype, "postProductReview", void 0);
        return ProductReviewsEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var effects$8 = [
        ProductsSearchEffects,
        ProductEffects,
        ProductReviewsEffects,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductService = /** @class */ (function () {
        function ProductService(store) {
            this.store = store;
            this.products = {};
        }
        /**
         * Returns the product observable. The product will be loaded
         * whenever there's no value observed.
         *
         * The underlying product loader ensures that the product is
         * only loaded once, even in case of parallel observers.
         */
        /**
         * Returns the product observable. The product will be loaded
         * whenever there's no value observed.
         *
         * The underlying product loader ensures that the product is
         * only loaded once, even in case of parallel observers.
         * @param {?} productCode
         * @return {?}
         */
        ProductService.prototype.get = /**
         * Returns the product observable. The product will be loaded
         * whenever there's no value observed.
         *
         * The underlying product loader ensures that the product is
         * only loaded once, even in case of parallel observers.
         * @param {?} productCode
         * @return {?}
         */
            function (productCode) {
                var _this = this;
                if (!this.products[productCode]) {
                    this.products[productCode] = this.store.pipe(i1$2.select(getSelectedProductStateFactory(productCode)), operators.tap(function (productState) {
                        /** @type {?} */
                        var attemptedLoad = productState.loading || productState.success || productState.error;
                        if (!attemptedLoad) {
                            _this.store.dispatch(new LoadProduct(productCode));
                        }
                    }), operators.map(function (productState) { return productState.value; }), 
                    // TODO: Replace next two lines with shareReplay(1, undefined, true) when RxJS 6.4 will be in use
                    operators.multicast(function () { return new rxjs.ReplaySubject(1); }), operators.refCount());
                }
                return this.products[productCode];
            };
        /**
         * Returns boolean observable for product's loading state
         */
        /**
         * Returns boolean observable for product's loading state
         * @param {?} productCode
         * @return {?}
         */
        ProductService.prototype.isLoading = /**
         * Returns boolean observable for product's loading state
         * @param {?} productCode
         * @return {?}
         */
            function (productCode) {
                return this.store.pipe(i1$2.select(getSelectedProductLoadingFactory(productCode)));
            };
        /**
         * Returns boolean observable for product's load success state
         */
        /**
         * Returns boolean observable for product's load success state
         * @param {?} productCode
         * @return {?}
         */
        ProductService.prototype.isSuccess = /**
         * Returns boolean observable for product's load success state
         * @param {?} productCode
         * @return {?}
         */
            function (productCode) {
                return this.store.pipe(i1$2.select(getSelectedProductSuccessFactory(productCode)));
            };
        /**
         * Returns boolean observable for product's load error state
         */
        /**
         * Returns boolean observable for product's load error state
         * @param {?} productCode
         * @return {?}
         */
        ProductService.prototype.hasError = /**
         * Returns boolean observable for product's load error state
         * @param {?} productCode
         * @return {?}
         */
            function (productCode) {
                return this.store.pipe(i1$2.select(getSelectedProductErrorFactory(productCode)));
            };
        /**
         * Reloads the product. The product is loaded implicetly
         * whenever selected by the `get`, but in some cases an
         * explicit reload might be needed.
         */
        /**
         * Reloads the product. The product is loaded implicetly
         * whenever selected by the `get`, but in some cases an
         * explicit reload might be needed.
         * @param {?} productCode
         * @return {?}
         */
        ProductService.prototype.reload = /**
         * Reloads the product. The product is loaded implicetly
         * whenever selected by the `get`, but in some cases an
         * explicit reload might be needed.
         * @param {?} productCode
         * @return {?}
         */
            function (productCode) {
                this.store.dispatch(new LoadProduct(productCode));
            };
        ProductService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ProductService.ctorParameters = function () {
            return [
                { type: i1$2.Store }
            ];
        };
        return ProductService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductSearchService = /** @class */ (function () {
        function ProductSearchService(store, router$$1) {
            this.store = store;
            this.router = router$$1;
        }
        /**
         * @param {?} query
         * @param {?=} searchConfig
         * @return {?}
         */
        ProductSearchService.prototype.search = /**
         * @param {?} query
         * @param {?=} searchConfig
         * @return {?}
         */
            function (query, searchConfig) {
                /** @type {?} */
                var urlTree = this.router.createUrlTree([], {
                    queryParams: __assign({}, searchConfig, { query: query }),
                    preserveFragment: false,
                });
                this.router.navigateByUrl(urlTree);
                this.store.dispatch(new SearchProducts({
                    queryText: query,
                    searchConfig: searchConfig,
                }));
            };
        /**
         * @return {?}
         */
        ProductSearchService.prototype.getSearchResults = /**
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getSearchResults$1));
            };
        /**
         * @return {?}
         */
        ProductSearchService.prototype.clearSearchResults = /**
         * @return {?}
         */
            function () {
                this.store.dispatch(new CleanProductSearchState());
            };
        /**
         * @return {?}
         */
        ProductSearchService.prototype.getAuxSearchResults = /**
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getAuxSearchResults$1), operators.filter(function (results) { return Object.keys(results).length > 0; }));
            };
        /**
         * @return {?}
         */
        ProductSearchService.prototype.getSearchSuggestions = /**
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getProductSuggestions$1));
            };
        /**
         * @param {?} query
         * @param {?=} searchConfig
         * @return {?}
         */
        ProductSearchService.prototype.searchAuxiliary = /**
         * @param {?} query
         * @param {?=} searchConfig
         * @return {?}
         */
            function (query, searchConfig) {
                this.store.dispatch(new SearchProducts({
                    queryText: query,
                    searchConfig: searchConfig,
                }, true));
            };
        /**
         * @param {?} query
         * @param {?=} searchConfig
         * @return {?}
         */
        ProductSearchService.prototype.getSuggestions = /**
         * @param {?} query
         * @param {?=} searchConfig
         * @return {?}
         */
            function (query, searchConfig) {
                this.store.dispatch(new GetProductSuggestions({
                    term: query,
                    searchConfig: searchConfig,
                }));
            };
        ProductSearchService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ProductSearchService.ctorParameters = function () {
            return [
                { type: i1$2.Store },
                { type: router.Router }
            ];
        };
        return ProductSearchService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductReviewService = /** @class */ (function () {
        function ProductReviewService(store) {
            this.store = store;
        }
        /**
         * @param {?} productCode
         * @return {?}
         */
        ProductReviewService.prototype.getByProductCode = /**
         * @param {?} productCode
         * @return {?}
         */
            function (productCode) {
                var _this = this;
                /** @type {?} */
                var selector = getSelectedProductReviewsFactory(productCode);
                return this.store.pipe(i1$2.select(selector), operators.tap(function (reviews) {
                    if (reviews === undefined && productCode !== undefined) {
                        _this.store.dispatch(new LoadProductReviews(productCode));
                    }
                }));
            };
        /**
         * @param {?} productCode
         * @param {?} review
         * @return {?}
         */
        ProductReviewService.prototype.add = /**
         * @param {?} productCode
         * @param {?} review
         * @return {?}
         */
            function (productCode, review) {
                this.store.dispatch(new PostProductReview({
                    productCode: productCode,
                    review: review,
                }));
            };
        ProductReviewService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ProductReviewService.ctorParameters = function () {
            return [
                { type: i1$2.Store }
            ];
        };
        return ProductReviewService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function productStoreConfigFactory() {
        var _a;
        // if we want to reuse PRODUCT_FEATURE const in config, we have to use factory instead of plain object
        /** @type {?} */
        var config = {
            state: {
                ssrTransfer: {
                    keys: (_a = {}, _a[PRODUCT_FEATURE] = StateTransferType.TRANSFER_STATE, _a),
                },
            },
        };
        return config;
    }
    var ProductStoreModule = /** @class */ (function () {
        function ProductStoreModule() {
        }
        ProductStoreModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.CommonModule,
                            i1$1.HttpClientModule,
                            ProductOccModule,
                            i1$2.StoreModule.forFeature(PRODUCT_FEATURE, reducerToken$9, { metaReducers: metaReducers$5 }),
                            effects.EffectsModule.forFeature(effects$8),
                            ConfigModule.withConfigFactory(productStoreConfigFactory),
                        ],
                        providers: [reducerProvider$9],
                    },] }
        ];
        return ProductStoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductPageMetaResolver = /** @class */ (function (_super) {
        __extends(ProductPageMetaResolver, _super);
        function ProductPageMetaResolver(routingService, productService) {
            var _this = _super.call(this) || this;
            _this.routingService = routingService;
            _this.productService = productService;
            _this.pageType = PageType.PRODUCT_PAGE;
            return _this;
        }
        /**
         * @return {?}
         */
        ProductPageMetaResolver.prototype.resolve = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.routingService.getRouterState().pipe(operators.map(function (state) { return state.state.params['productCode']; }), operators.filter(Boolean), operators.switchMap(function (code) { return _this.productService.get(code); }), operators.filter(Boolean), operators.switchMap(function (p) {
                    return rxjs.combineLatest([
                        _this.resolveHeading(p),
                        _this.resolveTitle(p),
                        _this.resolveDescription(p),
                        _this.resolveImage(p),
                    ]);
                }), operators.map(function (_a) {
                    var _b = __read(_a, 4), heading = _b[0], title = _b[1], description = _b[2], image = _b[3];
                    return ({
                        heading: heading,
                        title: title,
                        description: description,
                        image: image,
                    });
                }));
            };
        /**
         * @param {?} product
         * @return {?}
         */
        ProductPageMetaResolver.prototype.resolveHeading = /**
         * @param {?} product
         * @return {?}
         */
            function (product) {
                return rxjs.of(product.name);
            };
        /**
         * @param {?} product
         * @return {?}
         */
        ProductPageMetaResolver.prototype.resolveTitle = /**
         * @param {?} product
         * @return {?}
         */
            function (product) {
                /** @type {?} */
                var title = product.name;
                title += this.resolveFirstCategory(product);
                title += this.resolveManufacturer(product);
                return rxjs.of(title);
            };
        /**
         * @param {?} product
         * @return {?}
         */
        ProductPageMetaResolver.prototype.resolveDescription = /**
         * @param {?} product
         * @return {?}
         */
            function (product) {
                return rxjs.of(product.summary);
            };
        /**
         * @param {?} product
         * @return {?}
         */
        ProductPageMetaResolver.prototype.resolveImage = /**
         * @param {?} product
         * @return {?}
         */
            function (product) {
                /** @type {?} */
                var result;
                if (product.images &&
                    product.images.PRIMARY &&
                    product.images.PRIMARY.zoom &&
                    product.images.PRIMARY.zoom.url) {
                    result = product.images.PRIMARY.zoom.url;
                }
                return rxjs.of(result);
            };
        /**
         * @private
         * @param {?} product
         * @return {?}
         */
        ProductPageMetaResolver.prototype.resolveFirstCategory = /**
         * @private
         * @param {?} product
         * @return {?}
         */
            function (product) {
                /** @type {?} */
                var firstCategory;
                if (product.categories && product.categories.length > 0) {
                    firstCategory = product.categories[0];
                }
                return firstCategory
                    ? " | " + (firstCategory.name || firstCategory.code)
                    : '';
            };
        /**
         * @private
         * @param {?} product
         * @return {?}
         */
        ProductPageMetaResolver.prototype.resolveManufacturer = /**
         * @private
         * @param {?} product
         * @return {?}
         */
            function (product) {
                return product.manufacturer ? " | " + product.manufacturer : '';
            };
        ProductPageMetaResolver.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        ProductPageMetaResolver.ctorParameters = function () {
            return [
                { type: RoutingService },
                { type: ProductService }
            ];
        };
        /** @nocollapse */ ProductPageMetaResolver.ngInjectableDef = i0.defineInjectable({ factory: function ProductPageMetaResolver_Factory() { return new ProductPageMetaResolver(i0.inject(RoutingService), i0.inject(ProductService)); }, token: ProductPageMetaResolver, providedIn: "root" });
        return ProductPageMetaResolver;
    }(PageMetaResolver));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchPageMetaResolver = /** @class */ (function (_super) {
        __extends(SearchPageMetaResolver, _super);
        function SearchPageMetaResolver(routingService, productSearchService) {
            var _this = _super.call(this) || this;
            _this.routingService = routingService;
            _this.productSearchService = productSearchService;
            _this.pageType = PageType.CONTENT_PAGE;
            _this.pageTemplate = 'SearchResultsListPageTemplate';
            return _this;
        }
        /**
         * @return {?}
         */
        SearchPageMetaResolver.prototype.resolve = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var total$ = this.productSearchService.getSearchResults().pipe(operators.filter(function (data) { return !!(data && data.pagination); }), operators.map(function (results) { return results.pagination.totalResults; }));
                /** @type {?} */
                var query$ = this.routingService.getRouterState().pipe(operators.map(function (state) { return state.state.params['query']; }), operators.filter(Boolean));
                return rxjs.combineLatest([total$, query$]).pipe(operators.switchMap(function (_a) {
                    var _b = __read(_a, 2), total = _b[0], query = _b[1];
                    return _this.resolveTitle(total, query);
                }), operators.map(function (title) { return ({ title: title }); }));
            };
        /**
         * @param {?} total
         * @param {?} query
         * @return {?}
         */
        SearchPageMetaResolver.prototype.resolveTitle = /**
         * @param {?} total
         * @param {?} query
         * @return {?}
         */
            function (total, query) {
                return rxjs.of(total + " results for \"" + query + "\"");
            };
        SearchPageMetaResolver.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        SearchPageMetaResolver.ctorParameters = function () {
            return [
                { type: RoutingService },
                { type: ProductSearchService }
            ];
        };
        /** @nocollapse */ SearchPageMetaResolver.ngInjectableDef = i0.defineInjectable({ factory: function SearchPageMetaResolver_Factory() { return new SearchPageMetaResolver(i0.inject(RoutingService), i0.inject(ProductSearchService)); }, token: SearchPageMetaResolver, providedIn: "root" });
        return SearchPageMetaResolver;
    }(PageMetaResolver));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CategoryPageMetaResolver = /** @class */ (function (_super) {
        __extends(CategoryPageMetaResolver, _super);
        function CategoryPageMetaResolver(routingService, productSearchService, cms) {
            var _this = _super.call(this) || this;
            _this.routingService = routingService;
            _this.productSearchService = productSearchService;
            _this.cms = cms;
            _this.pageType = PageType.CATEGORY_PAGE;
            return _this;
        }
        /**
         * @return {?}
         */
        CategoryPageMetaResolver.prototype.resolve = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.cms.getCurrentPage().pipe(operators.filter(Boolean), operators.switchMap(function (page) {
                    // only the existence of a plp component tells us if products
                    // are rendered or if this is an ordinary content page
                    if (_this.hasProductListComponent(page)) {
                        return _this.productSearchService.getSearchResults().pipe(operators.filter(function (data) { return data.breadcrumbs && data.breadcrumbs.length > 0; }), operators.switchMap(function (data) {
                            return _this.resolveTitle(data).pipe(operators.map(function (title) { return ({ title: title }); }));
                        }));
                    }
                    else {
                        return rxjs.of({
                            title: page.title || page.name,
                        });
                    }
                }));
            };
        /**
         * @param {?} data
         * @return {?}
         */
        CategoryPageMetaResolver.prototype.resolveTitle = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                return rxjs.of(data.pagination.totalResults + " results for " + data.breadcrumbs[0].facetValueName);
            };
        /**
         * @protected
         * @param {?} page
         * @return {?}
         */
        CategoryPageMetaResolver.prototype.hasProductListComponent = /**
         * @protected
         * @param {?} page
         * @return {?}
         */
            function (page) {
                // ProductListComponent
                return !!Object.keys(page.slots).find(function (key) {
                    return !!page.slots[key].components.find(function (comp) { return comp.typeCode === 'CMSProductListComponent'; });
                });
            };
        CategoryPageMetaResolver.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CategoryPageMetaResolver.ctorParameters = function () {
            return [
                { type: RoutingService },
                { type: ProductSearchService },
                { type: CmsService }
            ];
        };
        /** @nocollapse */ CategoryPageMetaResolver.ngInjectableDef = i0.defineInjectable({ factory: function CategoryPageMetaResolver_Factory() { return new CategoryPageMetaResolver(i0.inject(RoutingService), i0.inject(ProductSearchService), i0.inject(CmsService)); }, token: CategoryPageMetaResolver, providedIn: "root" });
        return CategoryPageMetaResolver;
    }(PageMetaResolver));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var pageTitleResolvers = [
        {
            provide: PageMetaResolver,
            useExisting: ProductPageMetaResolver,
            multi: true,
        },
        {
            provide: PageMetaResolver,
            useExisting: CategoryPageMetaResolver,
            multi: true,
        },
        {
            provide: PageMetaResolver,
            useExisting: SearchPageMetaResolver,
            multi: true,
        },
    ];
    var ProductModule = /** @class */ (function () {
        function ProductModule() {
        }
        ProductModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [ProductOccModule, ProductStoreModule, CmsModule],
                        providers: __spread([
                            ProductService,
                            ProductSearchService,
                            ProductReviewService
                        ], pageTitleResolvers),
                    },] }
        ];
        return ProductModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ I18nConfig = /** @class */ (function (_super) {
        __extends(I18nConfig, _super);
        function I18nConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return I18nConfig;
    }(ServerConfig));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DatePipe = /** @class */ (function (_super) {
        __extends(DatePipe, _super);
        function DatePipe(language, config) {
            var _this = _super.call(this, null) || this;
            _this.language = language;
            _this.config = config;
            return _this;
        }
        /**
         * @param {?} value
         * @param {?=} format
         * @param {?=} timezone
         * @return {?}
         */
        DatePipe.prototype.transform = /**
         * @param {?} value
         * @param {?=} format
         * @param {?=} timezone
         * @return {?}
         */
            function (value, format, timezone) {
                return _super.prototype.transform.call(this, value, format, timezone, this.getLang());
            };
        /**
         * @private
         * @return {?}
         */
        DatePipe.prototype.getLang = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var lang = this.getActiveLang();
                try {
                    i1.getLocaleId(lang);
                    return lang;
                }
                catch (_a) {
                    this.reportMissingLocaleData(lang);
                    return 'en';
                }
            };
        /**
         * @private
         * @return {?}
         */
        DatePipe.prototype.getActiveLang = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var result;
                this.language
                    .getActive()
                    .subscribe(function (lang) { return (result = lang); })
                    .unsubscribe();
                return result;
            };
        /**
         * @private
         * @param {?} lang
         * @return {?}
         */
        DatePipe.prototype.reportMissingLocaleData = /**
         * @private
         * @param {?} lang
         * @return {?}
         */
            function (lang) {
                if (!this.config.production) {
                    console.warn("cxDate pipe: No locale data registered for '" + lang + "' (see https://angular.io/api/common/registerLocaleData).");
                }
            };
        DatePipe.decorators = [
            { type: i0.Pipe, args: [{ name: 'cxDate' },] }
        ];
        /** @nocollapse */
        DatePipe.ctorParameters = function () {
            return [
                { type: LanguageService },
                { type: I18nConfig }
            ];
        };
        return DatePipe;
    }(i1.DatePipe));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ TranslationService = /** @class */ (function () {
        function TranslationService() {
        }
        return TranslationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} objA
     * @param {?} objB
     * @return {?}
     */
    function shallowEqualObjects(objA, objB) {
        if (objA === objB) {
            return true;
        }
        if (!objA || !objB) {
            return false;
        }
        /** @type {?} */
        var aKeys = Object.keys(objA);
        /** @type {?} */
        var bKeys = Object.keys(objB);
        /** @type {?} */
        var aKeysLen = aKeys.length;
        /** @type {?} */
        var bKeysLen = bKeys.length;
        if (aKeysLen !== bKeysLen) {
            return false;
        }
        for (var i = 0; i < aKeysLen; i++) {
            /** @type {?} */
            var key = aKeys[i];
            if (objA[key] !== objB[key]) {
                return false;
            }
        }
        return true;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TranslatePipe = /** @class */ (function () {
        function TranslatePipe(service, cd) {
            this.service = service;
            this.cd = cd;
        }
        /**
         * @param {?} key
         * @param {?=} options
         * @return {?}
         */
        TranslatePipe.prototype.transform = /**
         * @param {?} key
         * @param {?=} options
         * @return {?}
         */
            function (key, options) {
                var _this = this;
                if (options === void 0) {
                    options = {};
                }
                if (key !== this.lastKey ||
                    !shallowEqualObjects(options, this.lastOptions)) {
                    this.lastKey = key;
                    this.lastOptions = options;
                    if (this.sub) {
                        this.sub.unsubscribe();
                    }
                    this.sub = this.service
                        .translate(key, options, true)
                        .subscribe(function (val) { return _this.markForCheck(val); });
                }
                return this.value;
            };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        TranslatePipe.prototype.markForCheck = /**
         * @private
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.value = value;
                this.cd.markForCheck();
            };
        /**
         * @return {?}
         */
        TranslatePipe.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.sub) {
                    this.sub.unsubscribe();
                }
            };
        TranslatePipe.decorators = [
            { type: i0.Pipe, args: [{ name: 'cxTranslate', pure: false },] }
        ];
        /** @nocollapse */
        TranslatePipe.ctorParameters = function () {
            return [
                { type: TranslationService },
                { type: i0.ChangeDetectorRef }
            ];
        };
        return TranslatePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TranslationChunkService = /** @class */ (function () {
        function TranslationChunkService(config) {
            this.config = config;
            this.KEY_SEPARATOR = '.';
        }
        /**
         * @param {?} key
         * @return {?}
         */
        TranslationChunkService.prototype.getChunkNameForKey = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                /** @type {?} */
                var mainKey = (key || '').split(this.KEY_SEPARATOR)[0];
                /** @type {?} */
                var chunk = this.getChunkFromConfig(mainKey);
                if (!chunk) {
                    return mainKey; // fallback to main key as a chunk
                }
                return chunk;
            };
        /**
         * @private
         * @param {?} mainKey
         * @return {?}
         */
        TranslationChunkService.prototype.getChunkFromConfig = /**
         * @private
         * @param {?} mainKey
         * @return {?}
         */
            function (mainKey) {
                return (this.config.i18n &&
                    this.config.i18n.chunks &&
                    this.config.i18n.chunks[mainKey]);
            };
        TranslationChunkService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        TranslationChunkService.ctorParameters = function () {
            return [
                { type: I18nConfig }
            ];
        };
        return TranslationChunkService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} config
     * @param {?} languageService
     * @return {?}
     */
    function i18nextInit(config, languageService) {
        return function () {
            /** @type {?} */
            var i18nextConfig = {
                ns: [],
                // don't preload any namespaces
                fallbackLng: config.i18n.fallbackLang,
                debug: config.i18n.debug,
            };
            if (config.i18n.backend) {
                i18next.use(i18nextXhrBackend);
                i18nextConfig = __assign({}, i18nextConfig, { backend: config.i18n.backend });
            }
            return i18next.init(i18nextConfig, function () {
                // Don't use i18next's 'resources' config key for adding static translations,
                // because it will disable loading chunks from backend. We add resources here, in the init's callback.
                i18nextAddTranslations(config.i18n.resources);
                syncI18nextWithSiteContext(languageService);
            });
        };
    }
    /**
     * @param {?=} resources
     * @return {?}
     */
    function i18nextAddTranslations(resources) {
        if (resources === void 0) {
            resources = {};
        }
        Object.keys(resources).forEach(function (lang) {
            Object.keys(resources[lang]).forEach(function (chunkName) {
                i18next.addResourceBundle(lang, chunkName, resources[lang][chunkName], true, true);
            });
        });
    }
    /**
     * @param {?} language
     * @return {?}
     */
    function syncI18nextWithSiteContext(language) {
        // always update language of i18next on site context (language) change
        language.getActive().subscribe(function (lang) { return i18next.changeLanguage(lang); });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var i18nextProviders = [
        {
            provide: i0.APP_INITIALIZER,
            useFactory: i18nextInit,
            deps: [I18nConfig, LanguageService],
            multi: true,
        },
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var defaultI18nConfig = {
        i18n: {
            fallbackLang: false,
            debug: false,
            chunks: {
                common: 'common',
                spinner: 'common',
                header: 'common',
                searchBox: 'common',
                cartDetails: 'cart',
                cartItems: 'cart',
                orderCost: 'cart',
                addressForm: 'address',
                addressBook: 'address',
                addressCard: 'address',
                paymentForm: 'payment',
                paymentMethods: 'payment',
                checkout: 'checkout',
                checkoutAddress: 'checkout',
                checkoutOrderConfirmation: 'checkout',
                checkoutReview: 'checkout',
                checkoutShipping: 'checkout',
                orderDetails: 'myAccount',
                orderHistory: 'myAccount',
                productDetails: 'product',
                productList: 'product',
                productFacetNavigation: 'product',
                productSummary: 'product',
                productReview: 'product',
                addToCart: 'product',
                forgottenPassword: 'user',
                loginForm: 'user',
                login: 'user',
                register: 'user',
                updateEmailForm: 'user',
                updatePasswordForm: 'user',
                updateProfileForm: 'user',
                storeFinder: 'storeFinder',
                pwa: 'pwa',
            },
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var I18nextTranslationService = /** @class */ (function () {
        function I18nextTranslationService(config, translationChunk) {
            this.config = config;
            this.translationChunk = translationChunk;
            this.NON_BREAKING_SPACE = String.fromCharCode(160);
            this.NAMESPACE_SEPARATOR = ':';
        }
        /**
         * @param {?} key
         * @param {?=} options
         * @param {?=} whitespaceUntilLoaded
         * @return {?}
         */
        I18nextTranslationService.prototype.translate = /**
         * @param {?} key
         * @param {?=} options
         * @param {?=} whitespaceUntilLoaded
         * @return {?}
         */
            function (key, options, whitespaceUntilLoaded) {
                // If we've already loaded the chunk (or failed to load), we should immediately emit the value
                // (or the fallback value in case the key is missing).
                var _this = this;
                if (options === void 0) {
                    options = {};
                }
                if (whitespaceUntilLoaded === void 0) {
                    whitespaceUntilLoaded = false;
                }
                // If we've already loaded the chunk (or failed to load), we should immediately emit the value
                // (or the fallback value in case the key is missing).
                // Moreover, we SHOULD emit a value (or a fallback value) synchronously (not in a promise/setTimeout).
                // Otherwise, we the will trigger additional deferred change detection in a view that consumes the returned observable,
                // which together with `switchMap` operator may lead to an infinite loop.
                /** @type {?} */
                var chunkName = this.translationChunk.getChunkNameForKey(key);
                /** @type {?} */
                var namespacedKey = this.getNamespacedKey(key, chunkName);
                return new rxjs.Observable(function (subscriber) {
                    /** @type {?} */
                    var translate = function () {
                        if (i18next.exists(namespacedKey, options)) {
                            subscriber.next(i18next.t(namespacedKey, options));
                        }
                        else {
                            if (whitespaceUntilLoaded) {
                                subscriber.next(_this.NON_BREAKING_SPACE);
                            }
                            i18next.loadNamespaces(chunkName, function () {
                                if (!i18next.exists(namespacedKey, options)) {
                                    _this.reportMissingKey(key, chunkName);
                                    subscriber.next(_this.getFallbackValue(namespacedKey));
                                }
                                else {
                                    subscriber.next(i18next.t(namespacedKey, options));
                                }
                            });
                        }
                    };
                    translate();
                    i18next.on('languageChanged', translate);
                    return function () { return i18next.off('languageChanged', translate); };
                });
            };
        /**
         * @param {?} chunkNames
         * @return {?}
         */
        I18nextTranslationService.prototype.loadChunks = /**
         * @param {?} chunkNames
         * @return {?}
         */
            function (chunkNames) {
                return i18next.loadNamespaces(chunkNames);
            };
        /**
         * Returns a fallback value in case when the given key is missing
         * @param key
         */
        /**
         * Returns a fallback value in case when the given key is missing
         * @protected
         * @param {?} key
         * @return {?}
         */
        I18nextTranslationService.prototype.getFallbackValue = /**
         * Returns a fallback value in case when the given key is missing
         * @protected
         * @param {?} key
         * @return {?}
         */
            function (key) {
                return this.config.production ? this.NON_BREAKING_SPACE : "[" + key + "]";
            };
        /**
         * @private
         * @param {?} key
         * @param {?} chunkName
         * @return {?}
         */
        I18nextTranslationService.prototype.reportMissingKey = /**
         * @private
         * @param {?} key
         * @param {?} chunkName
         * @return {?}
         */
            function (key, chunkName) {
                if (!this.config.production) {
                    console.warn("Translation key missing '" + key + "' in the chunk '" + chunkName + "'");
                }
            };
        /**
         * @private
         * @param {?} key
         * @param {?} chunk
         * @return {?}
         */
        I18nextTranslationService.prototype.getNamespacedKey = /**
         * @private
         * @param {?} key
         * @param {?} chunk
         * @return {?}
         */
            function (key, chunk) {
                return chunk + this.NAMESPACE_SEPARATOR + key;
            };
        I18nextTranslationService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        I18nextTranslationService.ctorParameters = function () {
            return [
                { type: I18nConfig },
                { type: TranslationChunkService }
            ];
        };
        return I18nextTranslationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var I18nModule = /** @class */ (function () {
        function I18nModule() {
        }
        /**
         * @return {?}
         */
        I18nModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: I18nModule,
                    providers: __spread([
                        provideConfig(defaultI18nConfig),
                        { provide: I18nConfig, useExisting: Config },
                        { provide: TranslationService, useClass: I18nextTranslationService },
                        TranslationChunkService
                    ], i18nextProviders),
                };
            };
        I18nModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [TranslatePipe, DatePipe],
                        exports: [TranslatePipe, DatePipe],
                    },] }
        ];
        return I18nModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    function mockTranslate(key, options) {
        if (options === void 0) {
            options = {};
        }
        /** @type {?} */
        var optionsString = Object.keys(options)
            .sort()
            .map(function (optionName) { return optionName + ":" + options[optionName]; })
            .join(' ');
        return optionsString ? key + " " + optionsString : key;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockTranslatePipe = /** @class */ (function () {
        function MockTranslatePipe() {
        }
        /**
         * @param {?} key
         * @param {?=} options
         * @return {?}
         */
        MockTranslatePipe.prototype.transform = /**
         * @param {?} key
         * @param {?=} options
         * @return {?}
         */
            function (key, options) {
                if (options === void 0) {
                    options = {};
                }
                return mockTranslate(key, options);
            };
        MockTranslatePipe.decorators = [
            { type: i0.Pipe, args: [{ name: 'cxTranslate' },] }
        ];
        return MockTranslatePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockTranslationService = /** @class */ (function () {
        function MockTranslationService() {
        }
        /**
         * @param {?} key
         * @param {?=} options
         * @param {?=} _whitespaceUntilLoaded
         * @return {?}
         */
        MockTranslationService.prototype.translate = /**
         * @param {?} key
         * @param {?=} options
         * @param {?=} _whitespaceUntilLoaded
         * @return {?}
         */
            function (key, options, _whitespaceUntilLoaded) {
                if (options === void 0) {
                    options = {};
                }
                if (_whitespaceUntilLoaded === void 0) {
                    _whitespaceUntilLoaded = false;
                }
                return new rxjs.Observable(function (subscriber) {
                    /** @type {?} */
                    var value = mockTranslate(key, options);
                    subscriber.next(value);
                    subscriber.complete();
                });
            };
        /**
         * @param {?} _chunks
         * @return {?}
         */
        MockTranslationService.prototype.loadChunks = /**
         * @param {?} _chunks
         * @return {?}
         */
            function (_chunks) {
                return Promise.resolve();
            };
        MockTranslationService.decorators = [
            { type: i0.Injectable }
        ];
        return MockTranslationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockDatePipe = /** @class */ (function (_super) {
        __extends(MockDatePipe, _super);
        function MockDatePipe() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} value
         * @param {?=} format
         * @param {?=} timezone
         * @return {?}
         */
        MockDatePipe.prototype.transform = /**
         * @param {?} value
         * @param {?=} format
         * @param {?=} timezone
         * @return {?}
         */
            function (value, format, timezone) {
                return _super.prototype.transform.call(this, value, format, timezone, 'en');
            };
        MockDatePipe.decorators = [
            { type: i0.Pipe, args: [{ name: 'cxDate' },] }
        ];
        return MockDatePipe;
    }(i1.DatePipe));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var I18nTestingModule = /** @class */ (function () {
        function I18nTestingModule() {
        }
        I18nTestingModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [MockTranslatePipe, MockDatePipe],
                        exports: [MockTranslatePipe, MockDatePipe],
                        providers: [
                            { provide: TranslationService, useClass: MockTranslationService },
                        ],
                    },] }
        ];
        return I18nTestingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CxApiService = /** @class */ (function () {
        function CxApiService(auth, cms, routing, currency, language, product, productSearch, productReview, user, translation) {
            this.auth = auth;
            this.cms = cms;
            this.routing = routing;
            this.currency = currency;
            this.language = language;
            this.product = product;
            this.productSearch = productSearch;
            this.productReview = productReview;
            this.user = user;
            this.translation = translation;
        }
        CxApiService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CxApiService.ctorParameters = function () {
            return [
                { type: AuthService, decorators: [{ type: i0.Optional }] },
                { type: CmsService, decorators: [{ type: i0.Optional }] },
                { type: RoutingService, decorators: [{ type: i0.Optional }] },
                { type: CurrencyService, decorators: [{ type: i0.Optional }] },
                { type: LanguageService, decorators: [{ type: i0.Optional }] },
                { type: ProductService, decorators: [{ type: i0.Optional }] },
                { type: ProductSearchService, decorators: [{ type: i0.Optional }] },
                { type: ProductReviewService, decorators: [{ type: i0.Optional }] },
                { type: UserService, decorators: [{ type: i0.Optional }] },
                { type: TranslationService, decorators: [{ type: i0.Optional }] }
            ];
        };
        /** @nocollapse */ CxApiService.ngInjectableDef = i0.defineInjectable({ factory: function CxApiService_Factory() { return new CxApiService(i0.inject(AuthService, 8), i0.inject(CmsService, 8), i0.inject(RoutingService, 8), i0.inject(CurrencyService, 8), i0.inject(LanguageService, 8), i0.inject(ProductService, 8), i0.inject(ProductSearchService, 8), i0.inject(ProductReviewService, 8), i0.inject(UserService, 8), i0.inject(TranslationService, 8)); }, token: CxApiService, providedIn: "root" });
        return CxApiService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SmartEditService = /** @class */ (function () {
        function SmartEditService(cmsService, routingService, winRef) {
            var _this = this;
            this.cmsService = cmsService;
            this.routingService = routingService;
            this.getPreviewPage = false;
            this.getCmsTicket();
            this.addPageContract();
            if (winRef.nativeWindow) {
                /** @type {?} */
                var window_1 = ( /** @type {?} */(winRef.nativeWindow));
                // rerender components and slots after editing
                window_1.smartedit = window_1.smartedit || {};
                window_1.smartedit.renderComponent = function (componentId, componentType, parentId) {
                    return _this.renderComponent(componentId, componentType, parentId);
                };
                // reprocess page
                window_1.smartedit.reprocessPage = this.reprocessPage;
            }
        }
        Object.defineProperty(SmartEditService.prototype, "cmsTicketId", {
            get: /**
             * @return {?}
             */ function () {
                return this._cmsTicketId;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @protected
         * @return {?}
         */
        SmartEditService.prototype.getCmsTicket = /**
         * @protected
         * @return {?}
         */
            function () {
                var _this = this;
                rxjs.combineLatest(this.cmsService.getCurrentPage(), this.routingService.getRouterState())
                    .pipe(operators.takeWhile(function (_a) {
                    var _b = __read(_a, 1), cmsPage = _b[0];
                    return cmsPage === undefined;
                }))
                    .subscribe(function (_a) {
                    var _b = __read(_a, 2), routerState = _b[1];
                    if (routerState.state && !_this._cmsTicketId) {
                        _this._cmsTicketId = routerState.state.queryParams['cmsTicketId'];
                        if (_this._cmsTicketId) {
                            _this.cmsService.launchInSmartEdit = true;
                        }
                    }
                });
            };
        /**
         * @protected
         * @return {?}
         */
        SmartEditService.prototype.addPageContract = /**
         * @protected
         * @return {?}
         */
            function () {
                var _this = this;
                this.cmsService.getCurrentPage().subscribe(function (cmsPage) {
                    if (cmsPage && _this._cmsTicketId) {
                        // before adding contract, we need redirect to preview page
                        _this.goToPreviewPage(cmsPage);
                        // remove old page contract
                        /** @type {?} */
                        var previousContract_1 = [];
                        Array.from(document.body.classList).forEach(function (attr) {
                            return previousContract_1.push(attr);
                        });
                        previousContract_1.forEach(function (attr) { return document.body.classList.remove(attr); });
                        // add new page contract
                        if (cmsPage.properties && cmsPage.properties.smartedit) {
                            /** @type {?} */
                            var seClasses = cmsPage.properties.smartedit.classes.split(' ');
                            seClasses.forEach(function (classItem) {
                                document.body.classList.add(classItem);
                            });
                        }
                    }
                });
            };
        /**
         * @private
         * @param {?} cmsPage
         * @return {?}
         */
        SmartEditService.prototype.goToPreviewPage = /**
         * @private
         * @param {?} cmsPage
         * @return {?}
         */
            function (cmsPage) {
                // the first page is the smartedit preview page
                if (!this.getPreviewPage) {
                    this.getPreviewPage = true;
                    if (cmsPage.type === PageType.PRODUCT_PAGE) {
                        this.routingService.go({
                            route: 'product',
                            params: { code: 2053367 },
                        });
                    }
                    else if (cmsPage.type === PageType.CATEGORY_PAGE) {
                        this.routingService.go({
                            route: 'category',
                            params: { code: 575 },
                        });
                    }
                }
            };
        /**
         * @protected
         * @param {?} componentId
         * @param {?=} componentType
         * @param {?=} parentId
         * @return {?}
         */
        SmartEditService.prototype.renderComponent = /**
         * @protected
         * @param {?} componentId
         * @param {?=} componentType
         * @param {?=} parentId
         * @return {?}
         */
            function (componentId, componentType, parentId) {
                if (componentId) {
                    // without parentId, it is slot
                    if (!parentId) {
                        this.cmsService.refreshLatestPage();
                    }
                    else if (componentType) {
                        this.cmsService.refreshComponent(componentId);
                    }
                }
                return true;
            };
        /**
         * @protected
         * @return {?}
         */
        SmartEditService.prototype.reprocessPage = /**
         * @protected
         * @return {?}
         */
            function () {
                // TODO: reprocess page API
            };
        SmartEditService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        SmartEditService.ctorParameters = function () {
            return [
                { type: CmsService },
                { type: RoutingService },
                { type: WindowRef }
            ];
        };
        /** @nocollapse */ SmartEditService.ngInjectableDef = i0.defineInjectable({ factory: function SmartEditService_Factory() { return new SmartEditService(i0.inject(CmsService), i0.inject(RoutingService), i0.inject(WindowRef)); }, token: SmartEditService, providedIn: "root" });
        return SmartEditService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CmsTicketInterceptor = /** @class */ (function () {
        function CmsTicketInterceptor(service) {
            this.service = service;
        }
        /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
        CmsTicketInterceptor.prototype.intercept = /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
            function (request, next) {
                if (request.url.indexOf('/cms/') > -1 && this.service.cmsTicketId) {
                    request = request.clone({
                        setParams: {
                            cmsTicketId: this.service.cmsTicketId,
                        },
                    });
                }
                return next.handle(request);
            };
        CmsTicketInterceptor.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        CmsTicketInterceptor.ctorParameters = function () {
            return [
                { type: SmartEditService }
            ];
        };
        return CmsTicketInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var interceptors$2 = [
        {
            provide: i1$1.HTTP_INTERCEPTORS,
            useClass: CmsTicketInterceptor,
            multi: true,
        },
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SmartEditModule = /** @class */ (function () {
        function SmartEditModule() {
        }
        /**
         * @return {?}
         */
        SmartEditModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: SmartEditModule,
                    providers: __spread(interceptors$2),
                };
            };
        SmartEditModule.decorators = [
            { type: i0.NgModule, args: [{},] }
        ];
        return SmartEditModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STORES_ENDPOINT = 'stores';
    var OccStoreFinderService = /** @class */ (function () {
        function OccStoreFinderService(http, occEndpoints) {
            this.http = http;
            this.occEndpoints = occEndpoints;
        }
        /**
         * @param {?} query
         * @param {?} searchConfig
         * @param {?=} longitudeLatitude
         * @return {?}
         */
        OccStoreFinderService.prototype.findStores = /**
         * @param {?} query
         * @param {?} searchConfig
         * @param {?=} longitudeLatitude
         * @return {?}
         */
            function (query, searchConfig, longitudeLatitude) {
                return this.callOccFindStores(query, searchConfig, longitudeLatitude);
            };
        /**
         * @return {?}
         */
        OccStoreFinderService.prototype.storesCount = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var storeCountUrl = this.getStoresEndpoint('storescounts');
                return this.http
                    .get(storeCountUrl)
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error.json()); }));
            };
        /**
         * @param {?} storeId
         * @return {?}
         */
        OccStoreFinderService.prototype.findStoreById = /**
         * @param {?} storeId
         * @return {?}
         */
            function (storeId) {
                /** @type {?} */
                var storeDetailsUrl = this.getStoresEndpoint(storeId);
                /** @type {?} */
                var params = { fields: 'FULL' };
                return this.http
                    .get(storeDetailsUrl, { params: params })
                    .pipe(operators.catchError(function (error) { return rxjs.throwError(error.json()); }));
            };
        /**
         * @protected
         * @param {?} query
         * @param {?} searchConfig
         * @param {?=} longitudeLatitude
         * @return {?}
         */
        OccStoreFinderService.prototype.callOccFindStores = /**
         * @protected
         * @param {?} query
         * @param {?} searchConfig
         * @param {?=} longitudeLatitude
         * @return {?}
         */
            function (query, searchConfig, longitudeLatitude) {
                /** @type {?} */
                var url = this.getStoresEndpoint();
                /** @type {?} */
                var params = new i1$1.HttpParams({
                    fromString: 'fields=stores(name,displayName,openingHours(weekDayOpeningList(FULL),specialDayOpeningList(FULL)),' +
                        'geoPoint(latitude,longitude),address(line1,line2,town,region(FULL),postalCode,phone,country,email), features),' +
                        'pagination(DEFAULT),' +
                        'sorts(DEFAULT)',
                });
                if (longitudeLatitude) {
                    params = params.set('longitude', String(longitudeLatitude.longitude));
                    params = params.set('latitude', String(longitudeLatitude.latitude));
                }
                else {
                    params = params.set('query', query);
                }
                if (searchConfig.pageSize) {
                    params = params.set('pageSize', String(searchConfig.pageSize));
                }
                if (searchConfig.currentPage) {
                    params = params.set('currentPage', String(searchConfig.currentPage));
                }
                if (searchConfig.sort) {
                    params = params.set('sort', searchConfig.sort);
                }
                return this.http.get(url, { params: params }).pipe(operators.catchError(function (error) {
                    if (error.json) {
                        return rxjs.throwError(error.json());
                    }
                    return rxjs.throwError(error);
                }));
            };
        /**
         * @protected
         * @param {?=} url
         * @return {?}
         */
        OccStoreFinderService.prototype.getStoresEndpoint = /**
         * @protected
         * @param {?=} url
         * @return {?}
         */
            function (url) {
                /** @type {?} */
                var baseUrl = this.occEndpoints.getEndpoint(STORES_ENDPOINT);
                return url ? baseUrl + '/' + url : baseUrl;
            };
        OccStoreFinderService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        OccStoreFinderService.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: OccEndpointsService }
            ];
        };
        return OccStoreFinderService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StoreFinderOccModule = /** @class */ (function () {
        function StoreFinderOccModule() {
        }
        StoreFinderOccModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [i1.CommonModule, i1$1.HttpClientModule, OccModule],
                        providers: [OccStoreFinderService],
                    },] }
        ];
        return StoreFinderOccModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ StoreFinderConfig = /** @class */ (function () {
        function StoreFinderConfig() {
        }
        return StoreFinderConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STORE_FINDER_FEATURE = 'stores';
    /** @type {?} */
    var STORE_FINDER_DATA = '[StoreFinder] Store Finder Data';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ON_HOLD = '[StoreFinder] On Hold';
    /** @type {?} */
    var FIND_STORES = '[StoreFinder] Find Stores';
    /** @type {?} */
    var FIND_STORES_FAIL = '[StoreFinder] Find Stores Fail';
    /** @type {?} */
    var FIND_STORES_SUCCESS = '[StoreFinder] Find Stores Success';
    /** @type {?} */
    var FIND_STORE_BY_ID = '[StoreFinder] Find a Store by Id';
    /** @type {?} */
    var FIND_STORE_BY_ID_FAIL = '[StoreFinder] Find a Store by Id Fail';
    /** @type {?} */
    var FIND_STORE_BY_ID_SUCCESS = '[StoreFinder] Find a Store by Id Success';
    var OnHold = /** @class */ (function (_super) {
        __extends(OnHold, _super);
        function OnHold() {
            var _this = _super.call(this, STORE_FINDER_DATA) || this;
            _this.type = ON_HOLD;
            return _this;
        }
        return OnHold;
    }(LoaderLoadAction));
    var FindStores = /** @class */ (function (_super) {
        __extends(FindStores, _super);
        function FindStores(payload) {
            var _this = _super.call(this, STORE_FINDER_DATA) || this;
            _this.payload = payload;
            _this.type = FIND_STORES;
            return _this;
        }
        return FindStores;
    }(LoaderLoadAction));
    var FindStoresFail = /** @class */ (function (_super) {
        __extends(FindStoresFail, _super);
        function FindStoresFail(payload) {
            var _this = _super.call(this, STORE_FINDER_DATA, payload) || this;
            _this.payload = payload;
            _this.type = FIND_STORES_FAIL;
            return _this;
        }
        return FindStoresFail;
    }(LoaderFailAction));
    var FindStoresSuccess = /** @class */ (function (_super) {
        __extends(FindStoresSuccess, _super);
        function FindStoresSuccess(payload) {
            var _this = _super.call(this, STORE_FINDER_DATA) || this;
            _this.payload = payload;
            _this.type = FIND_STORES_SUCCESS;
            return _this;
        }
        return FindStoresSuccess;
    }(LoaderSuccessAction));
    var FindStoreById = /** @class */ (function (_super) {
        __extends(FindStoreById, _super);
        function FindStoreById(payload) {
            var _this = _super.call(this, STORE_FINDER_DATA) || this;
            _this.payload = payload;
            _this.type = FIND_STORE_BY_ID;
            return _this;
        }
        return FindStoreById;
    }(LoaderLoadAction));
    var FindStoreByIdFail = /** @class */ (function (_super) {
        __extends(FindStoreByIdFail, _super);
        function FindStoreByIdFail(payload) {
            var _this = _super.call(this, STORE_FINDER_DATA, payload) || this;
            _this.payload = payload;
            _this.type = FIND_STORE_BY_ID_FAIL;
            return _this;
        }
        return FindStoreByIdFail;
    }(LoaderFailAction));
    var FindStoreByIdSuccess = /** @class */ (function (_super) {
        __extends(FindStoreByIdSuccess, _super);
        function FindStoreByIdSuccess(payload) {
            var _this = _super.call(this, STORE_FINDER_DATA) || this;
            _this.payload = payload;
            _this.type = FIND_STORE_BY_ID_SUCCESS;
            return _this;
        }
        return FindStoreByIdSuccess;
    }(LoaderSuccessAction));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var VIEW_ALL_STORES = '[StoreFinder] View All Stores';
    /** @type {?} */
    var VIEW_ALL_STORES_FAIL = '[StoreFinder] View All Stores Fail';
    /** @type {?} */
    var VIEW_ALL_STORES_SUCCESS = '[StoreFinder] View All Stores Success';
    var ViewAllStores = /** @class */ (function (_super) {
        __extends(ViewAllStores, _super);
        function ViewAllStores() {
            var _this = _super.call(this, STORE_FINDER_DATA) || this;
            _this.type = VIEW_ALL_STORES;
            return _this;
        }
        return ViewAllStores;
    }(LoaderLoadAction));
    var ViewAllStoresFail = /** @class */ (function (_super) {
        __extends(ViewAllStoresFail, _super);
        function ViewAllStoresFail(payload) {
            var _this = _super.call(this, STORE_FINDER_DATA, payload) || this;
            _this.payload = payload;
            _this.type = VIEW_ALL_STORES_FAIL;
            return _this;
        }
        return ViewAllStoresFail;
    }(LoaderFailAction));
    var ViewAllStoresSuccess = /** @class */ (function (_super) {
        __extends(ViewAllStoresSuccess, _super);
        function ViewAllStoresSuccess(payload) {
            var _this = _super.call(this, STORE_FINDER_DATA) || this;
            _this.payload = payload;
            _this.type = VIEW_ALL_STORES_SUCCESS;
            return _this;
        }
        return ViewAllStoresSuccess;
    }(LoaderSuccessAction));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getStoreFinderState = i1$2.createFeatureSelector(STORE_FINDER_FEATURE);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getFindStoresState = i1$2.createSelector(getStoreFinderState, function (storesState) { return storesState.findStores; });
    /** @type {?} */
    var getFindStoresEntities = i1$2.createSelector(getFindStoresState, function (state) { return loaderValueSelector(state); });
    /** @type {?} */
    var getStoresLoading = i1$2.createSelector(getFindStoresState, function (state) { return loaderLoadingSelector(state); });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var getViewAllStoresState = i1$2.createSelector(getStoreFinderState, function (storesState) { return storesState.viewAllStores; });
    /** @type {?} */
    var getViewAllStoresEntities = i1$2.createSelector(getViewAllStoresState, function (state) { return loaderValueSelector(state); });
    /** @type {?} */
    var getViewAllStoresLoading = i1$2.createSelector(getViewAllStoresState, function (state) { return loaderLoadingSelector(state); });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ExternalJsFileLoader = /** @class */ (function () {
        function ExternalJsFileLoader(document) {
            this.document = document;
        }
        /**
         * Loads a javascript from an external URL
         * @param src URL for the script to be loaded
         * @param params additional parameters to be attached to the given URL
         * @param callback a function to be invoked after the script has been loaded
         */
        /**
         * Loads a javascript from an external URL
         * @param {?} src URL for the script to be loaded
         * @param {?=} params additional parameters to be attached to the given URL
         * @param {?=} callback a function to be invoked after the script has been loaded
         * @return {?}
         */
        ExternalJsFileLoader.prototype.load = /**
         * Loads a javascript from an external URL
         * @param {?} src URL for the script to be loaded
         * @param {?=} params additional parameters to be attached to the given URL
         * @param {?=} callback a function to be invoked after the script has been loaded
         * @return {?}
         */
            function (src, params, callback) {
                /** @type {?} */
                var script = this.document.createElement('script');
                script.type = 'text/javascript';
                if (params) {
                    script.src = src + this.parseParams(params);
                }
                else {
                    script.src = src;
                }
                script.async = true;
                script.defer = true;
                if (callback) {
                    script.addEventListener('load', callback);
                }
                document.head.appendChild(script);
            };
        /**
         * Parses the given object with parameters to a string "param1=value1&param2=value2"
         * @param params object containing parameters
         */
        /**
         * Parses the given object with parameters to a string "param1=value1&param2=value2"
         * @private
         * @param {?} params object containing parameters
         * @return {?}
         */
        ExternalJsFileLoader.prototype.parseParams = /**
         * Parses the given object with parameters to a string "param1=value1&param2=value2"
         * @private
         * @param {?} params object containing parameters
         * @return {?}
         */
            function (params) {
                /** @type {?} */
                var result = '';
                /** @type {?} */
                var keysArray = Object.keys(params);
                if (keysArray.length > 0) {
                    result =
                        '?' +
                            keysArray
                                .map(function (key) { return encodeURI(key) + '=' + encodeURI(params[key]); })
                                .join('&');
                }
                return result;
            };
        ExternalJsFileLoader.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ExternalJsFileLoader.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] }
            ];
        };
        return ExternalJsFileLoader;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StoreDataService = /** @class */ (function () {
        function StoreDataService() {
            this.weekDays = {
                0: 'Sun',
                1: 'Mon',
                2: 'Tue',
                3: 'Wed',
                4: 'Thu',
                5: 'Fri',
                6: 'Sat',
            };
        }
        /**
         * Returns store latitude
         * @param location store location
         */
        /**
         * Returns store latitude
         * @param {?} location store location
         * @return {?}
         */
        StoreDataService.prototype.getStoreLatitude = /**
         * Returns store latitude
         * @param {?} location store location
         * @return {?}
         */
            function (location) {
                return location.geoPoint.latitude;
            };
        /**
         * Returns store longitude
         * @param location store location
         */
        /**
         * Returns store longitude
         * @param {?} location store location
         * @return {?}
         */
        StoreDataService.prototype.getStoreLongitude = /**
         * Returns store longitude
         * @param {?} location store location
         * @return {?}
         */
            function (location) {
                return location.geoPoint.longitude;
            };
        /**
         * Returns store closing time
         * @param location store location
         * @param date date to compare
         */
        /**
         * Returns store closing time
         * @param {?} location store location
         * @param {?} date date to compare
         * @return {?}
         */
        StoreDataService.prototype.getStoreClosingTime = /**
         * Returns store closing time
         * @param {?} location store location
         * @param {?} date date to compare
         * @return {?}
         */
            function (location, date) {
                /** @type {?} */
                var requestedDaySchedule = this.getSchedule(location, date);
                /** @type {?} */
                var result = null;
                if (requestedDaySchedule.closed === false) {
                    /** @type {?} */
                    var closingHour = requestedDaySchedule.closingTime.formattedHour.split(':')[0];
                    /** @type {?} */
                    var closingMinute = requestedDaySchedule.closingTime.minute;
                    result = new Date(date.valueOf());
                    result.setHours(closingHour);
                    result.setMinutes(closingMinute);
                }
                return result;
            };
        /**
         * Returns store opening time
         * @param location store location
         * @param date date to compare
         */
        /**
         * Returns store opening time
         * @param {?} location store location
         * @param {?} date date to compare
         * @return {?}
         */
        StoreDataService.prototype.getStoreOpeningTime = /**
         * Returns store opening time
         * @param {?} location store location
         * @param {?} date date to compare
         * @return {?}
         */
            function (location, date) {
                /** @type {?} */
                var requestedDaySchedule = this.getSchedule(location, date);
                /** @type {?} */
                var result = null;
                if (requestedDaySchedule.closed === false) {
                    /** @type {?} */
                    var openingHour = requestedDaySchedule.openingTime.formattedHour.split(':')[0];
                    /** @type {?} */
                    var openingMinutes = requestedDaySchedule.openingTime.minute;
                    result = new Date(date.valueOf());
                    result.setHours(openingHour);
                    result.setMinutes(openingMinutes);
                }
                return result;
            };
        /**
         * Returns information about store open status
         * @param location store location
         * @param date date to compare
         */
        /**
         * Returns information about store open status
         * @param {?} location store location
         * @param {?} date date to compare
         * @return {?}
         */
        StoreDataService.prototype.isStoreOpen = /**
         * Returns information about store open status
         * @param {?} location store location
         * @param {?} date date to compare
         * @return {?}
         */
            function (location, date) {
                /** @type {?} */
                var requestedDaySchedule = this.getSchedule(location, date);
                /** @type {?} */
                var result = false;
                if (requestedDaySchedule.closed === false) {
                    /** @type {?} */
                    var openingDate = this.getStoreOpeningTime(location, date);
                    /** @type {?} */
                    var closingDate = this.getStoreClosingTime(location, date);
                    result = date > openingDate && date < closingDate;
                }
                return result;
            };
        /**
         * Extracts schedule from the given location for the given date
         * @param location location
         * @param date date
         *
         * @returns payload describing the store's schedule for the given day.
         */
        /**
         * Extracts schedule from the given location for the given date
         * @private
         * @param {?} location location
         * @param {?} date date
         *
         * @return {?} payload describing the store's schedule for the given day.
         */
        StoreDataService.prototype.getSchedule = /**
         * Extracts schedule from the given location for the given date
         * @private
         * @param {?} location location
         * @param {?} date date
         *
         * @return {?} payload describing the store's schedule for the given day.
         */
            function (location, date) {
                /** @type {?} */
                var weekday = this.weekDays[date.getDay()];
                return location.openingHours.weekDayOpeningList.find(function (weekDayOpeningListItem) { return weekDayOpeningListItem.weekDay === weekday; });
            };
        StoreDataService.decorators = [
            { type: i0.Injectable }
        ];
        return StoreDataService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoogleMapRendererService = /** @class */ (function () {
        function GoogleMapRendererService(config, externalJsFileLoader, storeDataService) {
            this.config = config;
            this.externalJsFileLoader = externalJsFileLoader;
            this.storeDataService = storeDataService;
            this.googleMap = null;
        }
        /**
         * Renders google map on the given element and draws markers on it.
         * If map already exists it will use an existing map otherwise it will create one
         * @param mapElement HTML element inside of which the map will be displayed
         * @param locations array containign geo data to be displayed on the map
         * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
         */
        /**
         * Renders google map on the given element and draws markers on it.
         * If map already exists it will use an existing map otherwise it will create one
         * @param {?} mapElement HTML element inside of which the map will be displayed
         * @param {?} locations array containign geo data to be displayed on the map
         * @param {?=} selectMarkerHandler function to handle whenever a marker on a map is clicked
         * @return {?}
         */
        GoogleMapRendererService.prototype.renderMap = /**
         * Renders google map on the given element and draws markers on it.
         * If map already exists it will use an existing map otherwise it will create one
         * @param {?} mapElement HTML element inside of which the map will be displayed
         * @param {?} locations array containign geo data to be displayed on the map
         * @param {?=} selectMarkerHandler function to handle whenever a marker on a map is clicked
         * @return {?}
         */
            function (mapElement, locations, selectMarkerHandler) {
                var _this = this;
                if (this.googleMap === null) {
                    this.externalJsFileLoader.load(this.config.googleMaps.apiUrl, { key: this.config.googleMaps.apiKey }, function () {
                        _this.drawMap(mapElement, locations, selectMarkerHandler);
                    });
                }
                else {
                    this.drawMap(mapElement, locations, selectMarkerHandler);
                }
            };
        /**
         * Centers the map to the given point
         * @param latitute latitude of the new center
         * @param longitude longitude of the new center
         */
        /**
         * Centers the map to the given point
         * @param {?} latitute latitude of the new center
         * @param {?} longitude longitude of the new center
         * @return {?}
         */
        GoogleMapRendererService.prototype.centerMap = /**
         * Centers the map to the given point
         * @param {?} latitute latitude of the new center
         * @param {?} longitude longitude of the new center
         * @return {?}
         */
            function (latitute, longitude) {
                this.googleMap.panTo({ lat: latitute, lng: longitude });
                this.googleMap.setZoom(this.config.googleMaps.selectedMarkerScale);
            };
        /**
         * Defines and returns {@link google.maps.LatLng} representing a point where the map will be centered
         * @param locations list of locations
         */
        /**
         * Defines and returns {\@link google.maps.LatLng} representing a point where the map will be centered
         * @private
         * @param {?} locations list of locations
         * @return {?}
         */
        GoogleMapRendererService.prototype.defineMapCenter = /**
         * Defines and returns {\@link google.maps.LatLng} representing a point where the map will be centered
         * @private
         * @param {?} locations list of locations
         * @return {?}
         */
            function (locations) {
                return new google.maps.LatLng(this.storeDataService.getStoreLatitude(locations[0]), this.storeDataService.getStoreLongitude(locations[0]));
            };
        /**
         * Creates google map inside if the given HTML element centered to the given point
         * @param mapElement {@link HTMLElement} inside of which the map will be created
         * @param mapCenter {@link google.maps.LatLng} the point where the map will be centered
         */
        /**
         * Creates google map inside if the given HTML element centered to the given point
         * @private
         * @param {?} mapElement {\@link HTMLElement} inside of which the map will be created
         * @param {?} mapCenter {\@link google.maps.LatLng} the point where the map will be centered
         * @return {?}
         */
        GoogleMapRendererService.prototype.initMap = /**
         * Creates google map inside if the given HTML element centered to the given point
         * @private
         * @param {?} mapElement {\@link HTMLElement} inside of which the map will be created
         * @param {?} mapCenter {\@link google.maps.LatLng} the point where the map will be centered
         * @return {?}
         */
            function (mapElement, mapCenter) {
                /** @type {?} */
                var mapProp = {
                    center: mapCenter,
                    zoom: this.config.googleMaps.scale,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                };
                this.googleMap = new google.maps.Map(mapElement, mapProp);
            };
        /**
         * Erases the current map's markers and create a new one based on the given locations
         * @param locations array of locations to be displayed on the map
         * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
         */
        /**
         * Erases the current map's markers and create a new one based on the given locations
         * @private
         * @param {?} locations array of locations to be displayed on the map
         * @param {?=} selectMarkerHandler function to handle whenever a marker on a map is clicked
         * @return {?}
         */
        GoogleMapRendererService.prototype.createMarkers = /**
         * Erases the current map's markers and create a new one based on the given locations
         * @private
         * @param {?} locations array of locations to be displayed on the map
         * @param {?=} selectMarkerHandler function to handle whenever a marker on a map is clicked
         * @return {?}
         */
            function (locations, selectMarkerHandler) {
                var _this = this;
                this.markers = [];
                locations.forEach(function (element, index) {
                    /** @type {?} */
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(_this.storeDataService.getStoreLatitude(element), _this.storeDataService.getStoreLongitude(element)),
                        label: index + 1 + '',
                    });
                    _this.markers.push(marker);
                    marker.setMap(_this.googleMap);
                    marker.addListener('mouseover', function () {
                        marker.setAnimation(google.maps.Animation.BOUNCE);
                    });
                    marker.addListener('mouseout', function () {
                        marker.setAnimation(null);
                    });
                    if (selectMarkerHandler) {
                        marker.addListener('click', function () {
                            selectMarkerHandler(index);
                        });
                    }
                });
            };
        /**
         * Initialize and draw the map
         * @param mapElement {@link HTMLElement} inside of which the map will be drawn
         * @param locations array of locations to be displayed on the map
         * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
         */
        /**
         * Initialize and draw the map
         * @private
         * @param {?} mapElement {\@link HTMLElement} inside of which the map will be drawn
         * @param {?} locations array of locations to be displayed on the map
         * @param {?} selectMarkerHandler function to handle whenever a marker on a map is clicked
         * @return {?}
         */
        GoogleMapRendererService.prototype.drawMap = /**
         * Initialize and draw the map
         * @private
         * @param {?} mapElement {\@link HTMLElement} inside of which the map will be drawn
         * @param {?} locations array of locations to be displayed on the map
         * @param {?} selectMarkerHandler function to handle whenever a marker on a map is clicked
         * @return {?}
         */
            function (mapElement, locations, selectMarkerHandler) {
                this.initMap(mapElement, this.defineMapCenter(locations));
                this.createMarkers(locations, selectMarkerHandler);
            };
        GoogleMapRendererService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        GoogleMapRendererService.ctorParameters = function () {
            return [
                { type: StoreFinderConfig },
                { type: ExternalJsFileLoader },
                { type: StoreDataService }
            ];
        };
        return GoogleMapRendererService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FindStoresEffect = /** @class */ (function () {
        function FindStoresEffect(actions$, occStoreFinderService) {
            var _this = this;
            this.actions$ = actions$;
            this.occStoreFinderService = occStoreFinderService;
            this.findStores$ = this.actions$.pipe(effects.ofType(FIND_STORES), operators.map(function (action) { return action.payload; }), operators.mergeMap(function (payload) {
                return _this.occStoreFinderService
                    .findStores(payload.queryText, payload.searchConfig, payload.longitudeLatitude)
                    .pipe(operators.map(function (data) {
                    data.geolocation = payload.longitudeLatitude;
                    if (payload.countryIsoCode) {
                        data.stores = data.stores.filter(function (store) {
                            return store.address.country.isocode === payload.countryIsoCode;
                        });
                    }
                    return new FindStoresSuccess(data);
                }), operators.catchError(function (error) { return rxjs.of(new FindStoresFail(error)); }));
            }));
            this.findStoreById$ = this.actions$.pipe(effects.ofType(FIND_STORE_BY_ID), operators.map(function (action) { return action.payload; }), operators.switchMap(function (payload) {
                return _this.occStoreFinderService.findStoreById(payload.storeId).pipe(operators.map(function (data) { return new FindStoreByIdSuccess(data); }), operators.catchError(function (error) { return rxjs.of(new FindStoreByIdFail(error)); }));
            }));
        }
        FindStoresEffect.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        FindStoresEffect.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: OccStoreFinderService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], FindStoresEffect.prototype, "findStores$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], FindStoresEffect.prototype, "findStoreById$", void 0);
        return FindStoresEffect;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ViewAllStoresEffect = /** @class */ (function () {
        function ViewAllStoresEffect(actions$, occStoreFinderService) {
            var _this = this;
            this.actions$ = actions$;
            this.occStoreFinderService = occStoreFinderService;
            this.viewAllStores$ = this.actions$.pipe(effects.ofType(VIEW_ALL_STORES), operators.switchMap(function () {
                return _this.occStoreFinderService.storesCount().pipe(operators.map(function (data) { return new ViewAllStoresSuccess(data); }), operators.catchError(function (error) { return rxjs.of(new ViewAllStoresFail(error)); }));
            }));
        }
        ViewAllStoresEffect.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ViewAllStoresEffect.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: OccStoreFinderService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], ViewAllStoresEffect.prototype, "viewAllStores$", void 0);
        return ViewAllStoresEffect;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var effects$9 = [FindStoresEffect, ViewAllStoresEffect];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function getReducers$a() {
        return {
            findStores: loaderReducer(STORE_FINDER_DATA),
            viewAllStores: loaderReducer(STORE_FINDER_DATA),
        };
    }
    /** @type {?} */
    var reducerToken$a = new i0.InjectionToken('StoreFinderReducers');
    /** @type {?} */
    var reducerProvider$a = {
        provide: reducerToken$a,
        useFactory: getReducers$a,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StoreFinderService = /** @class */ (function () {
        function StoreFinderService(store, winRef) {
            this.store = store;
            this.winRef = winRef;
            this.geolocationWatchId = null;
        }
        /**
         * Returns boolean observable for store's loading state
         */
        /**
         * Returns boolean observable for store's loading state
         * @return {?}
         */
        StoreFinderService.prototype.getStoresLoading = /**
         * Returns boolean observable for store's loading state
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getStoresLoading));
            };
        /**
         * Returns observable for store's entities
         */
        /**
         * Returns observable for store's entities
         * @return {?}
         */
        StoreFinderService.prototype.getFindStoresEntities = /**
         * Returns observable for store's entities
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getFindStoresEntities));
            };
        /**
         * Returns boolean observable for view all store's loading state
         */
        /**
         * Returns boolean observable for view all store's loading state
         * @return {?}
         */
        StoreFinderService.prototype.getViewAllStoresLoading = /**
         * Returns boolean observable for view all store's loading state
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getViewAllStoresLoading));
            };
        /**
         * Returns observable for view all store's entities
         */
        /**
         * Returns observable for view all store's entities
         * @return {?}
         */
        StoreFinderService.prototype.getViewAllStoresEntities = /**
         * Returns observable for view all store's entities
         * @return {?}
         */
            function () {
                return this.store.pipe(i1$2.select(getViewAllStoresEntities));
            };
        /**
         * Store finding action functionality
         * @param queryText text query
         * @param longitudeLatitude longitude and latitude coordinates
         * @param searchConfig search configuration
         * @param countryIsoCode country ISO code
         */
        /**
         * Store finding action functionality
         * @param {?} queryText text query
         * @param {?} longitudeLatitude longitude and latitude coordinates
         * @param {?} searchConfig search configuration
         * @param {?=} countryIsoCode country ISO code
         * @return {?}
         */
        StoreFinderService.prototype.findStoresAction = /**
         * Store finding action functionality
         * @param {?} queryText text query
         * @param {?} longitudeLatitude longitude and latitude coordinates
         * @param {?} searchConfig search configuration
         * @param {?=} countryIsoCode country ISO code
         * @return {?}
         */
            function (queryText, longitudeLatitude, searchConfig, countryIsoCode) {
                this.store.dispatch(new FindStores({
                    queryText: queryText,
                    longitudeLatitude: longitudeLatitude,
                    searchConfig: searchConfig,
                    countryIsoCode: countryIsoCode,
                }));
            };
        /**
         * View all stores
         */
        /**
         * View all stores
         * @return {?}
         */
        StoreFinderService.prototype.viewAllStores = /**
         * View all stores
         * @return {?}
         */
            function () {
                this.clearWatchGeolocation(new ViewAllStores());
            };
        /**
         * View all stores by id
         * @param storeId store id
         */
        /**
         * View all stores by id
         * @param {?} storeId store id
         * @return {?}
         */
        StoreFinderService.prototype.viewStoreById = /**
         * View all stores by id
         * @param {?} storeId store id
         * @return {?}
         */
            function (storeId) {
                this.clearWatchGeolocation(new FindStoreById({ storeId: storeId }));
            };
        /**
         * Find all stores
         * @param queryText text query
         * @param useMyLocation use current location
         */
        /**
         * Find all stores
         * @param {?} queryText text query
         * @param {?=} useMyLocation use current location
         * @return {?}
         */
        StoreFinderService.prototype.findStores = /**
         * Find all stores
         * @param {?} queryText text query
         * @param {?=} useMyLocation use current location
         * @return {?}
         */
            function (queryText, useMyLocation) {
                var _this = this;
                if (useMyLocation && this.winRef.nativeWindow) {
                    this.clearWatchGeolocation(new OnHold());
                    this.geolocationWatchId = this.winRef.nativeWindow.navigator.geolocation.watchPosition(function (pos) {
                        /** @type {?} */
                        var longitudeLatitude = {
                            longitude: pos.coords.longitude,
                            latitude: pos.coords.latitude,
                        };
                        _this.clearWatchGeolocation(new FindStores({ queryText: queryText, longitudeLatitude: longitudeLatitude }));
                    });
                }
                else {
                    this.clearWatchGeolocation(new FindStores({ queryText: queryText }));
                }
            };
        /**
         * @private
         * @param {?} callbackAction
         * @return {?}
         */
        StoreFinderService.prototype.clearWatchGeolocation = /**
         * @private
         * @param {?} callbackAction
         * @return {?}
         */
            function (callbackAction) {
                if (this.geolocationWatchId !== null) {
                    this.winRef.nativeWindow.navigator.geolocation.clearWatch(this.geolocationWatchId);
                    this.geolocationWatchId = null;
                }
                this.store.dispatch(callbackAction);
            };
        StoreFinderService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        StoreFinderService.ctorParameters = function () {
            return [
                { type: i1$2.Store },
                { type: WindowRef }
            ];
        };
        return StoreFinderService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StoreFinderStoreModule = /** @class */ (function () {
        function StoreFinderStoreModule() {
        }
        StoreFinderStoreModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.CommonModule,
                            i1$1.HttpClientModule,
                            StoreFinderOccModule,
                            i1$2.StoreModule.forFeature(STORE_FINDER_FEATURE, reducerToken$a),
                            effects.EffectsModule.forFeature(effects$9),
                        ],
                        providers: [reducerProvider$a],
                    },] }
        ];
        return StoreFinderStoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var defaultStoreFinderConfig = {
        googleMaps: {
            apiUrl: 'https://maps.googleapis.com/maps/api/js',
            apiKey: '',
            scale: 12,
            selectedMarkerScale: 16,
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0$3 = defaultStoreFinderConfig;
    var StoreFinderCoreModule = /** @class */ (function () {
        function StoreFinderCoreModule() {
        }
        StoreFinderCoreModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            ConfigModule.withConfig(defaultStoreFinderConfig),
                            StoreFinderStoreModule,
                            StoreFinderOccModule,
                        ],
                        providers: [
                            StoreFinderService,
                            StoreDataService,
                            GoogleMapRendererService,
                            ExternalJsFileLoader,
                            { provide: StoreFinderConfig, useValue: ɵ0$3 },
                        ],
                    },] }
        ];
        return StoreFinderCoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StripHtmlPipe = /** @class */ (function () {
        function StripHtmlPipe() {
        }
        /**
         * @param {?} product
         * @return {?}
         */
        StripHtmlPipe.prototype.transform = /**
         * @param {?} product
         * @return {?}
         */
            function (product) {
                /** @type {?} */
                var productClone = Object.assign({}, product);
                productClone.name = product.name.replace(/<[^>]*>/g, '');
                return productClone;
            };
        StripHtmlPipe.decorators = [
            { type: i0.Pipe, args: [{ name: 'stripHtml' },] }
        ];
        return StripHtmlPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StripHtmlModule = /** @class */ (function () {
        function StripHtmlModule() {
        }
        StripHtmlModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [StripHtmlPipe],
                        exports: [StripHtmlPipe],
                    },] }
        ];
        return StripHtmlModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PipeModule = /** @class */ (function () {
        function PipeModule() {
        }
        PipeModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [StripHtmlModule],
                    },] }
        ];
        return PipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UtilModule = /** @class */ (function () {
        function UtilModule() {
        }
        UtilModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [PipeModule],
                    },] }
        ];
        return UtilModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AuthModule = AuthModule;
    exports.AuthConfig = AuthConfig;
    exports.AuthService = AuthService;
    exports.AuthGuard = AuthGuard;
    exports.NotAuthGuard = NotAuthGuard;
    exports.LOAD_USER_TOKEN = LOAD_USER_TOKEN;
    exports.LOAD_USER_TOKEN_FAIL = LOAD_USER_TOKEN_FAIL;
    exports.LOAD_USER_TOKEN_SUCCESS = LOAD_USER_TOKEN_SUCCESS;
    exports.REFRESH_USER_TOKEN = REFRESH_USER_TOKEN;
    exports.REFRESH_USER_TOKEN_FAIL = REFRESH_USER_TOKEN_FAIL;
    exports.REFRESH_USER_TOKEN_SUCCESS = REFRESH_USER_TOKEN_SUCCESS;
    exports.LoadUserToken = LoadUserToken;
    exports.LoadUserTokenFail = LoadUserTokenFail;
    exports.LoadUserTokenSuccess = LoadUserTokenSuccess;
    exports.RefreshUserToken = RefreshUserToken;
    exports.RefreshUserTokenSuccess = RefreshUserTokenSuccess;
    exports.RefreshUserTokenFail = RefreshUserTokenFail;
    exports.LOAD_CLIENT_TOKEN = LOAD_CLIENT_TOKEN;
    exports.LOAD_CLIENT_TOKEN_FAIL = LOAD_CLIENT_TOKEN_FAIL;
    exports.LOAD_CLIENT_TOKEN_SUCCESS = LOAD_CLIENT_TOKEN_SUCCESS;
    exports.LoadClientToken = LoadClientToken;
    exports.LoadClientTokenFail = LoadClientTokenFail;
    exports.LoadClientTokenSuccess = LoadClientTokenSuccess;
    exports.LOGIN = LOGIN;
    exports.LOGOUT = LOGOUT;
    exports.Login = Login;
    exports.Logout = Logout;
    exports.getAuthState = getAuthState;
    exports.getUserTokenSelector = getUserTokenSelector;
    exports.getUserTokenState = getUserTokenState;
    exports.getUserToken = getUserToken;
    exports.getClientTokenState = getClientTokenState;
    exports.AUTH_FEATURE = AUTH_FEATURE;
    exports.CLIENT_TOKEN_DATA = CLIENT_TOKEN_DATA;
    exports.CREATE_CART = CREATE_CART;
    exports.CREATE_CART_FAIL = CREATE_CART_FAIL;
    exports.CREATE_CART_SUCCESS = CREATE_CART_SUCCESS;
    exports.LOAD_CART = LOAD_CART;
    exports.LOAD_CART_FAIL = LOAD_CART_FAIL;
    exports.LOAD_CART_SUCCESS = LOAD_CART_SUCCESS;
    exports.MERGE_CART = MERGE_CART;
    exports.MERGE_CART_SUCCESS = MERGE_CART_SUCCESS;
    exports.CreateCart = CreateCart;
    exports.CreateCartFail = CreateCartFail;
    exports.CreateCartSuccess = CreateCartSuccess;
    exports.LoadCart = LoadCart;
    exports.LoadCartFail = LoadCartFail;
    exports.LoadCartSuccess = LoadCartSuccess;
    exports.MergeCart = MergeCart;
    exports.MergeCartSuccess = MergeCartSuccess;
    exports.ADD_ENTRY = ADD_ENTRY;
    exports.ADD_ENTRY_SUCCESS = ADD_ENTRY_SUCCESS;
    exports.ADD_ENTRY_FAIL = ADD_ENTRY_FAIL;
    exports.REMOVE_ENTRY = REMOVE_ENTRY;
    exports.REMOVE_ENTRY_SUCCESS = REMOVE_ENTRY_SUCCESS;
    exports.REMOVE_ENTRY_FAIL = REMOVE_ENTRY_FAIL;
    exports.UPDATE_ENTRY = UPDATE_ENTRY;
    exports.UPDATE_ENTRY_SUCCESS = UPDATE_ENTRY_SUCCESS;
    exports.UPDATE_ENTRY_FAIL = UPDATE_ENTRY_FAIL;
    exports.AddEntry = AddEntry;
    exports.AddEntrySuccess = AddEntrySuccess;
    exports.AddEntryFail = AddEntryFail;
    exports.RemoveEntry = RemoveEntry;
    exports.RemoveEntrySuccess = RemoveEntrySuccess;
    exports.RemoveEntryFail = RemoveEntryFail;
    exports.UpdateEntry = UpdateEntry;
    exports.UpdateEntrySuccess = UpdateEntrySuccess;
    exports.UpdateEntryFail = UpdateEntryFail;
    exports.getCartContentSelector = getCartContentSelector;
    exports.getRefreshSelector = getRefreshSelector;
    exports.getEntriesSelector = getEntriesSelector;
    exports.getCartMergeCompleteSelector = getCartMergeCompleteSelector;
    exports.getCartsState = getCartsState;
    exports.getActiveCartState = getActiveCartState;
    exports.getCartState = getCartState;
    exports.getCartContent = getCartContent;
    exports.getRefresh = getRefresh;
    exports.getLoaded = getLoaded;
    exports.getCartMergeComplete = getCartMergeComplete;
    exports.getEntriesMap = getEntriesMap;
    exports.getEntrySelectorFactory = getEntrySelectorFactory;
    exports.getEntries = getEntries;
    exports.CART_FEATURE = CART_FEATURE;
    exports.CART_DATA = CART_DATA;
    exports.services = services$1;
    exports.CartService = CartService;
    exports.ANONYMOUS_USERID = ANONYMOUS_USERID;
    exports.CartDataService = CartDataService;
    exports.CartConnector = CartConnector;
    exports.CartAdapter = CartAdapter;
    exports.CART_NORMALIZER = CART_NORMALIZER;
    exports.CartDeliveryConnector = CartDeliveryConnector;
    exports.CartDeliveryAdapter = CartDeliveryAdapter;
    exports.DELIVERY_ADDRESS_NORMALIZER = DELIVERY_ADDRESS_NORMALIZER;
    exports.DELIVERY_ADDRESS_SERIALIZER = DELIVERY_ADDRESS_SERIALIZER;
    exports.DELIVERY_MODE_NORMALIZER = DELIVERY_MODE_NORMALIZER;
    exports.CartEntryConnector = CartEntryConnector;
    exports.CartEntryAdapter = CartEntryAdapter;
    exports.CART_MODIFICATION_NORMALIZER = CART_MODIFICATION_NORMALIZER;
    exports.CartPaymentConnector = CartPaymentConnector;
    exports.CartPaymentAdapter = CartPaymentAdapter;
    exports.CART_PAYMENT_DETAILS_NORMALIZER = CART_PAYMENT_DETAILS_NORMALIZER;
    exports.CART_PAYMENT_DETAILS_SERIALIZER = CART_PAYMENT_DETAILS_SERIALIZER;
    exports.OccCartAdapter = OccCartAdapter;
    exports.OccCartDeliveryAdapter = OccCartDeliveryAdapter;
    exports.OccCartEntryAdapter = OccCartEntryAdapter;
    exports.OccCartPaymentAdapter = OccCartPaymentAdapter;
    exports.CartOccModule = CartOccModule;
    exports.CartModule = CartModule;
    exports.CHECKOUT_FEATURE = CHECKOUT_FEATURE;
    exports.CHECKOUT_CLEAR_MISCS_DATA = CHECKOUT_CLEAR_MISCS_DATA;
    exports.CheckoutClearMiscsData = CheckoutClearMiscsData;
    exports.ADD_DELIVERY_ADDRESS = ADD_DELIVERY_ADDRESS;
    exports.ADD_DELIVERY_ADDRESS_FAIL = ADD_DELIVERY_ADDRESS_FAIL;
    exports.ADD_DELIVERY_ADDRESS_SUCCESS = ADD_DELIVERY_ADDRESS_SUCCESS;
    exports.SET_DELIVERY_ADDRESS = SET_DELIVERY_ADDRESS;
    exports.SET_DELIVERY_ADDRESS_FAIL = SET_DELIVERY_ADDRESS_FAIL;
    exports.SET_DELIVERY_ADDRESS_SUCCESS = SET_DELIVERY_ADDRESS_SUCCESS;
    exports.LOAD_SUPPORTED_DELIVERY_MODES = LOAD_SUPPORTED_DELIVERY_MODES;
    exports.LOAD_SUPPORTED_DELIVERY_MODES_FAIL = LOAD_SUPPORTED_DELIVERY_MODES_FAIL;
    exports.LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS = LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS;
    exports.CLEAR_SUPPORTED_DELIVERY_MODES = CLEAR_SUPPORTED_DELIVERY_MODES;
    exports.SET_DELIVERY_MODE = SET_DELIVERY_MODE;
    exports.SET_DELIVERY_MODE_FAIL = SET_DELIVERY_MODE_FAIL;
    exports.SET_DELIVERY_MODE_SUCCESS = SET_DELIVERY_MODE_SUCCESS;
    exports.CREATE_PAYMENT_DETAILS = CREATE_PAYMENT_DETAILS;
    exports.CREATE_PAYMENT_DETAILS_FAIL = CREATE_PAYMENT_DETAILS_FAIL;
    exports.CREATE_PAYMENT_DETAILS_SUCCESS = CREATE_PAYMENT_DETAILS_SUCCESS;
    exports.SET_PAYMENT_DETAILS = SET_PAYMENT_DETAILS;
    exports.SET_PAYMENT_DETAILS_FAIL = SET_PAYMENT_DETAILS_FAIL;
    exports.SET_PAYMENT_DETAILS_SUCCESS = SET_PAYMENT_DETAILS_SUCCESS;
    exports.PLACE_ORDER = PLACE_ORDER;
    exports.PLACE_ORDER_FAIL = PLACE_ORDER_FAIL;
    exports.PLACE_ORDER_SUCCESS = PLACE_ORDER_SUCCESS;
    exports.CLEAR_CHECKOUT_STEP = CLEAR_CHECKOUT_STEP;
    exports.CLEAR_CHECKOUT_DATA = CLEAR_CHECKOUT_DATA;
    exports.AddDeliveryAddress = AddDeliveryAddress;
    exports.AddDeliveryAddressFail = AddDeliveryAddressFail;
    exports.AddDeliveryAddressSuccess = AddDeliveryAddressSuccess;
    exports.SetDeliveryAddress = SetDeliveryAddress;
    exports.SetDeliveryAddressFail = SetDeliveryAddressFail;
    exports.SetDeliveryAddressSuccess = SetDeliveryAddressSuccess;
    exports.LoadSupportedDeliveryModes = LoadSupportedDeliveryModes;
    exports.LoadSupportedDeliveryModesFail = LoadSupportedDeliveryModesFail;
    exports.LoadSupportedDeliveryModesSuccess = LoadSupportedDeliveryModesSuccess;
    exports.SetDeliveryMode = SetDeliveryMode;
    exports.SetDeliveryModeFail = SetDeliveryModeFail;
    exports.SetDeliveryModeSuccess = SetDeliveryModeSuccess;
    exports.CreatePaymentDetails = CreatePaymentDetails;
    exports.CreatePaymentDetailsFail = CreatePaymentDetailsFail;
    exports.CreatePaymentDetailsSuccess = CreatePaymentDetailsSuccess;
    exports.SetPaymentDetails = SetPaymentDetails;
    exports.SetPaymentDetailsFail = SetPaymentDetailsFail;
    exports.SetPaymentDetailsSuccess = SetPaymentDetailsSuccess;
    exports.PlaceOrder = PlaceOrder;
    exports.PlaceOrderFail = PlaceOrderFail;
    exports.PlaceOrderSuccess = PlaceOrderSuccess;
    exports.ClearSupportedDeliveryModes = ClearSupportedDeliveryModes;
    exports.ClearCheckoutStep = ClearCheckoutStep;
    exports.ClearCheckoutData = ClearCheckoutData;
    exports.LOAD_CARD_TYPES = LOAD_CARD_TYPES;
    exports.LOAD_CARD_TYPES_FAIL = LOAD_CARD_TYPES_FAIL;
    exports.LOAD_CARD_TYPES_SUCCESS = LOAD_CARD_TYPES_SUCCESS;
    exports.LoadCardTypes = LoadCardTypes;
    exports.LoadCardTypesFail = LoadCardTypesFail;
    exports.LoadCardTypesSuccess = LoadCardTypesSuccess;
    exports.VERIFY_ADDRESS = VERIFY_ADDRESS;
    exports.VERIFY_ADDRESS_FAIL = VERIFY_ADDRESS_FAIL;
    exports.VERIFY_ADDRESS_SUCCESS = VERIFY_ADDRESS_SUCCESS;
    exports.CLEAR_ADDRESS_VERIFICATION_RESULTS = CLEAR_ADDRESS_VERIFICATION_RESULTS;
    exports.VerifyAddress = VerifyAddress;
    exports.VerifyAddressFail = VerifyAddressFail;
    exports.VerifyAddressSuccess = VerifyAddressSuccess;
    exports.ClearAddressVerificationResults = ClearAddressVerificationResults;
    exports.getCheckoutStepsState = getCheckoutStepsState;
    exports.getDeliveryAddress = getDeliveryAddress$1;
    exports.getDeliveryMode = getDeliveryMode$1;
    exports.getSupportedDeliveryModes = getSupportedDeliveryModes;
    exports.getSelectedCode = getSelectedCode;
    exports.getSelectedDeliveryMode = getSelectedDeliveryMode;
    exports.getPaymentDetails = getPaymentDetails$1;
    exports.getCheckoutOrderDetails = getCheckoutOrderDetails;
    exports.getCardTypesState = getCardTypesState;
    exports.getCardTypesEntites = getCardTypesEntites$1;
    exports.getAllCardTypes = getAllCardTypes;
    exports.getAddressVerificationResultsState = getAddressVerificationResultsState;
    exports.getAddressVerificationResults = getAddressVerificationResults$1;
    exports.CheckoutService = CheckoutService;
    exports.CheckoutModule = CheckoutModule;
    exports.CheckoutPageMetaResolver = CheckoutPageMetaResolver;
    exports.JSP_INCLUDE_CMS_COMPONENT_TYPE = JSP_INCLUDE_CMS_COMPONENT_TYPE;
    exports.CMS_FLEX_COMPONENT_TYPE = CMS_FLEX_COMPONENT_TYPE;
    exports.CmsConfig = CmsConfig;
    exports.defaultCmsModuleConfig = defaultCmsModuleConfig;
    exports.CmsStructureConfig = CmsStructureConfig;
    exports.PageRobotsMeta = PageRobotsMeta;
    exports.OccCmsPageAdapter = OccCmsPageAdapter;
    exports.OccCmsPageNormalizer = OccCmsPageNormalizer;
    exports.OccCmsComponentAdapter = OccCmsComponentAdapter;
    exports.CmsOccModule = CmsOccModule;
    exports.CmsPageAdapter = CmsPageAdapter;
    exports.CmsPageConnector = CmsPageConnector;
    exports.CMS_PAGE_NORMALIZE = CMS_PAGE_NORMALIZE;
    exports.CmsComponentConnector = CmsComponentConnector;
    exports.CmsComponentAdapter = CmsComponentAdapter;
    exports.CMS_COMPONENT_NORMALIZER = CMS_COMPONENT_NORMALIZER;
    exports.CMS_FEATURE = CMS_FEATURE;
    exports.NAVIGATION_DETAIL_ENTITY = NAVIGATION_DETAIL_ENTITY;
    exports.COMPONENT_ENTITY = COMPONENT_ENTITY;
    exports.LOAD_PAGE_DATA = LOAD_PAGE_DATA;
    exports.LOAD_PAGE_DATA_FAIL = LOAD_PAGE_DATA_FAIL;
    exports.LOAD_PAGE_DATA_SUCCESS = LOAD_PAGE_DATA_SUCCESS;
    exports.LoadPageData = LoadPageData;
    exports.LoadPageDataFail = LoadPageDataFail;
    exports.LoadPageDataSuccess = LoadPageDataSuccess;
    exports.LOAD_COMPONENT = LOAD_COMPONENT;
    exports.LOAD_COMPONENT_FAIL = LOAD_COMPONENT_FAIL;
    exports.LOAD_COMPONENT_SUCCESS = LOAD_COMPONENT_SUCCESS;
    exports.GET_COMPONENET_FROM_PAGE = GET_COMPONENET_FROM_PAGE;
    exports.LoadComponent = LoadComponent;
    exports.LoadComponentFail = LoadComponentFail;
    exports.LoadComponentSuccess = LoadComponentSuccess;
    exports.GetComponentFromPage = GetComponentFromPage;
    exports.LOAD_NAVIGATION_ITEMS = LOAD_NAVIGATION_ITEMS;
    exports.LOAD_NAVIGATION_ITEMS_FAIL = LOAD_NAVIGATION_ITEMS_FAIL;
    exports.LOAD_NAVIGATION_ITEMS_SUCCESS = LOAD_NAVIGATION_ITEMS_SUCCESS;
    exports.LoadNavigationItems = LoadNavigationItems;
    exports.LoadNavigationItemsFail = LoadNavigationItemsFail;
    exports.LoadNavigationItemsSuccess = LoadNavigationItemsSuccess;
    exports.getPageEntitiesSelector = getPageEntitiesSelector;
    exports.getIndexByType = getIndexByType;
    exports.getPageComponentTypesSelector = getPageComponentTypesSelector;
    exports.getPageState = getPageState;
    exports.getPageStateIndex = getPageStateIndex;
    exports.getIndex = getIndex;
    exports.getIndexEntity = getIndexEntity;
    exports.getPageEntities = getPageEntities;
    exports.getPageData = getPageData;
    exports.getPageComponentTypes = getPageComponentTypes;
    exports.currentSlotSelectorFactory = currentSlotSelectorFactory;
    exports.getComponentEntitiesSelector = getComponentEntitiesSelector;
    exports.getComponentState = getComponentState;
    exports.getComponentEntities = getComponentEntities;
    exports.componentStateSelectorFactory = componentStateSelectorFactory;
    exports.componentSelectorFactory = componentSelectorFactory;
    exports.getNavigationEntryItemState = getNavigationEntryItemState;
    exports.getSelectedNavigationEntryItemState = getSelectedNavigationEntryItemState;
    exports.itemsSelectorFactory = itemsSelectorFactory;
    exports.getCmsState = getCmsState;
    exports.CmsService = CmsService;
    exports.PageMetaService = PageMetaService;
    exports.CmsModule = CmsModule;
    exports.ComponentMapperService = ComponentMapperService;
    exports.CmsStructureConfigService = CmsStructureConfigService;
    exports.DynamicAttributeService = DynamicAttributeService;
    exports.PageMetaResolver = PageMetaResolver;
    exports.ContentPageMetaResolver = ContentPageMetaResolver;
    exports.CmsPageTitleModule = CmsPageTitleModule;
    exports.provideConfig = provideConfig;
    exports.provideConfigFactory = provideConfigFactory;
    exports.configurationFactory = configurationFactory;
    exports.Config = Config;
    exports.ConfigChunk = ConfigChunk;
    exports.ConfigModule = ConfigModule;
    exports.ServerConfig = ServerConfig;
    exports.defaultServerConfig = defaultServerConfig;
    exports.provideConfigValidator = provideConfigValidator;
    exports.validateConfig = validateConfig;
    exports.ConfigValidatorToken = ConfigValidatorToken;
    exports.CxApiModule = CxApiModule;
    exports.CxApiService = CxApiService;
    exports.GLOBAL_MESSAGE_FEATURE = GLOBAL_MESSAGE_FEATURE;
    exports.ADD_MESSAGE = ADD_MESSAGE;
    exports.REMOVE_MESSAGE = REMOVE_MESSAGE;
    exports.REMOVE_MESSAGES_BY_TYPE = REMOVE_MESSAGES_BY_TYPE;
    exports.AddMessage = AddMessage;
    exports.RemoveMessage = RemoveMessage;
    exports.RemoveMessagesByType = RemoveMessagesByType;
    exports.getGlobalMessageState = getGlobalMessageState;
    exports.getGlobalMessageEntities = getGlobalMessageEntities;
    exports.GlobalMessageStoreModule = GlobalMessageStoreModule;
    exports.GlobalMessageService = GlobalMessageService;
    exports.GlobalMessageType = GlobalMessageType;
    exports.GlobalMessageModule = GlobalMessageModule;
    exports.errorHandlers = errorHandlers;
    exports.httpErrorInterceptors = httpErrorInterceptors;
    exports.DatePipe = DatePipe;
    exports.TranslatePipe = TranslatePipe;
    exports.TranslationService = TranslationService;
    exports.TranslationChunkService = TranslationChunkService;
    exports.I18nModule = I18nModule;
    exports.I18nConfig = I18nConfig;
    exports.I18nextTranslationService = I18nextTranslationService;
    exports.I18nTestingModule = I18nTestingModule;
    exports.MockTranslatePipe = MockTranslatePipe;
    exports.defaultOccConfig = defaultOccConfig;
    exports.OccConfig = OccConfig;
    exports.serverConfigFromMetaTagFactory = serverConfigFromMetaTagFactory;
    exports.SERVER_BASE_URL_META_TAG_NAME = SERVER_BASE_URL_META_TAG_NAME;
    exports.SERVER_BASE_URL_META_TAG_PLACEHOLDER = SERVER_BASE_URL_META_TAG_PLACEHOLDER;
    exports.occConfigValidator = occConfigValidator;
    exports.OccMiscsService = OccMiscsService;
    exports.PriceType = PriceType;
    exports.ImageType = ImageType;
    exports.Fields = Fields;
    exports.Fields1 = Fields1;
    exports.Fields2 = Fields2;
    exports.Fields3 = Fields3;
    exports.Fields4 = Fields4;
    exports.Fields5 = Fields5;
    exports.Fields6 = Fields6;
    exports.PageType = PageType;
    exports.Fields7 = Fields7;
    exports.Fields8 = Fields8;
    exports.Fields9 = Fields9;
    exports.Fields10 = Fields10;
    exports.Fields11 = Fields11;
    exports.Fields12 = Fields12;
    exports.Fields13 = Fields13;
    exports.Fields14 = Fields14;
    exports.Fields15 = Fields15;
    exports.Fields16 = Fields16;
    exports.SortEnum = SortEnum;
    exports.Fields17 = Fields17;
    exports.Fields18 = Fields18;
    exports.Fields19 = Fields19;
    exports.Fields20 = Fields20;
    exports.Fields21 = Fields21;
    exports.Fields22 = Fields22;
    exports.Fields23 = Fields23;
    exports.Fields24 = Fields24;
    exports.Fields25 = Fields25;
    exports.Fields26 = Fields26;
    exports.Fields27 = Fields27;
    exports.Fields28 = Fields28;
    exports.Fields29 = Fields29;
    exports.Fields30 = Fields30;
    exports.Fields31 = Fields31;
    exports.Fields32 = Fields32;
    exports.Fields33 = Fields33;
    exports.Fields34 = Fields34;
    exports.Fields35 = Fields35;
    exports.Fields36 = Fields36;
    exports.Fields37 = Fields37;
    exports.Fields38 = Fields38;
    exports.Fields39 = Fields39;
    exports.Fields40 = Fields40;
    exports.Fields41 = Fields41;
    exports.Fields42 = Fields42;
    exports.Fields43 = Fields43;
    exports.Fields44 = Fields44;
    exports.Fields45 = Fields45;
    exports.Fields46 = Fields46;
    exports.Fields47 = Fields47;
    exports.Fields48 = Fields48;
    exports.Fields49 = Fields49;
    exports.Fields50 = Fields50;
    exports.Fields51 = Fields51;
    exports.Fields52 = Fields52;
    exports.Fields53 = Fields53;
    exports.Fields54 = Fields54;
    exports.Fields55 = Fields55;
    exports.Fields56 = Fields56;
    exports.Fields57 = Fields57;
    exports.Fields58 = Fields58;
    exports.Fields59 = Fields59;
    exports.Fields60 = Fields60;
    exports.Fields61 = Fields61;
    exports.Type = Type;
    exports.OccModule = OccModule;
    exports.OccEndpointsService = OccEndpointsService;
    exports.USE_CLIENT_TOKEN = USE_CLIENT_TOKEN;
    exports.InterceptorUtil = InterceptorUtil;
    exports.ProductOccModule = ProductOccModule;
    exports.OccProductAdapter = OccProductAdapter;
    exports.OccProductSearchAdapter = OccProductSearchAdapter;
    exports.OccProductReviewsAdapter = OccProductReviewsAdapter;
    exports.ProductImageNormalizer = ProductImageNormalizer;
    exports.ProductReferenceNormalizer = ProductReferenceNormalizer;
    exports.OccProductSearchPageNormalizer = OccProductSearchPageNormalizer;
    exports.PRODUCT_FEATURE = PRODUCT_FEATURE;
    exports.PRODUCT_DETAIL_ENTITY = PRODUCT_DETAIL_ENTITY;
    exports.SEARCH_PRODUCTS = SEARCH_PRODUCTS;
    exports.SEARCH_PRODUCTS_FAIL = SEARCH_PRODUCTS_FAIL;
    exports.SEARCH_PRODUCTS_SUCCESS = SEARCH_PRODUCTS_SUCCESS;
    exports.GET_PRODUCT_SUGGESTIONS = GET_PRODUCT_SUGGESTIONS;
    exports.GET_PRODUCT_SUGGESTIONS_SUCCESS = GET_PRODUCT_SUGGESTIONS_SUCCESS;
    exports.GET_PRODUCT_SUGGESTIONS_FAIL = GET_PRODUCT_SUGGESTIONS_FAIL;
    exports.CLEAN_PRODUCT_SEARCH = CLEAN_PRODUCT_SEARCH;
    exports.SearchProducts = SearchProducts;
    exports.SearchProductsFail = SearchProductsFail;
    exports.SearchProductsSuccess = SearchProductsSuccess;
    exports.GetProductSuggestions = GetProductSuggestions;
    exports.GetProductSuggestionsSuccess = GetProductSuggestionsSuccess;
    exports.GetProductSuggestionsFail = GetProductSuggestionsFail;
    exports.CleanProductSearchState = CleanProductSearchState;
    exports.LOAD_PRODUCT = LOAD_PRODUCT;
    exports.LOAD_PRODUCT_FAIL = LOAD_PRODUCT_FAIL;
    exports.LOAD_PRODUCT_SUCCESS = LOAD_PRODUCT_SUCCESS;
    exports.LoadProduct = LoadProduct;
    exports.LoadProductFail = LoadProductFail;
    exports.LoadProductSuccess = LoadProductSuccess;
    exports.LOAD_PRODUCT_REVIEWS = LOAD_PRODUCT_REVIEWS;
    exports.LOAD_PRODUCT_REVIEWS_FAIL = LOAD_PRODUCT_REVIEWS_FAIL;
    exports.LOAD_PRODUCT_REVIEWS_SUCCESS = LOAD_PRODUCT_REVIEWS_SUCCESS;
    exports.POST_PRODUCT_REVIEW = POST_PRODUCT_REVIEW;
    exports.POST_PRODUCT_REVIEW_FAIL = POST_PRODUCT_REVIEW_FAIL;
    exports.POST_PRODUCT_REVIEW_SUCCESS = POST_PRODUCT_REVIEW_SUCCESS;
    exports.LoadProductReviews = LoadProductReviews;
    exports.LoadProductReviewsFail = LoadProductReviewsFail;
    exports.LoadProductReviewsSuccess = LoadProductReviewsSuccess;
    exports.PostProductReview = PostProductReview;
    exports.PostProductReviewFail = PostProductReviewFail;
    exports.PostProductReviewSuccess = PostProductReviewSuccess;
    exports.getProductsState = getProductsState;
    exports.getProductState = getProductState;
    exports.getSelectedProductsFactory = getSelectedProductsFactory;
    exports.getSelectedProductStateFactory = getSelectedProductStateFactory;
    exports.getSelectedProductFactory = getSelectedProductFactory;
    exports.getSelectedProductLoadingFactory = getSelectedProductLoadingFactory;
    exports.getSelectedProductSuccessFactory = getSelectedProductSuccessFactory;
    exports.getSelectedProductErrorFactory = getSelectedProductErrorFactory;
    exports.getAllProductCodes = getAllProductCodes;
    exports.getProductsSearchState = getProductsSearchState;
    exports.getSearchResults = getSearchResults$1;
    exports.getAuxSearchResults = getAuxSearchResults$1;
    exports.getProductSuggestions = getProductSuggestions$1;
    exports.getProductReviewsState = getProductReviewsState;
    exports.getSelectedProductReviewsFactory = getSelectedProductReviewsFactory;
    exports.ProductService = ProductService;
    exports.ProductSearchService = ProductSearchService;
    exports.ProductReviewService = ProductReviewService;
    exports.ProductModule = ProductModule;
    exports.ProductConnector = ProductConnector;
    exports.ProductAdapter = ProductAdapter;
    exports.PRODUCT_NORMALIZER = PRODUCT_NORMALIZER;
    exports.ProductSearchConnector = ProductSearchConnector;
    exports.ProductSearchAdapter = ProductSearchAdapter;
    exports.PRODUCT_SEARCH_PAGE_NORMALIZER = PRODUCT_SEARCH_PAGE_NORMALIZER;
    exports.PRODUCT_SUGGESTION_NORMALIZER = PRODUCT_SUGGESTION_NORMALIZER;
    exports.ProductReviewsConnector = ProductReviewsConnector;
    exports.ProductReviewsAdapter = ProductReviewsAdapter;
    exports.PRODUCT_REVIEW_NORMALIZER = PRODUCT_REVIEW_NORMALIZER;
    exports.PRODUCT_REVIEW_SERIALIZER = PRODUCT_REVIEW_SERIALIZER;
    exports.CategoryPageMetaResolver = CategoryPageMetaResolver;
    exports.ProductPageMetaResolver = ProductPageMetaResolver;
    exports.SearchPageMetaResolver = SearchPageMetaResolver;
    exports.RoutingModule = RoutingModule;
    exports.RoutingService = RoutingService;
    exports.PageContext = PageContext;
    exports.ConfigurableRoutesConfig = ConfigurableRoutesConfig;
    exports.UrlTranslationModule = UrlTranslationModule;
    exports.TranslateUrlPipe = TranslateUrlPipe;
    exports.ConfigurableRoutesService = ConfigurableRoutesService;
    exports.initConfigurableRoutes = initConfigurableRoutes;
    exports.ConfigurableRoutesModule = ConfigurableRoutesModule;
    exports.RoutesConfigLoader = RoutesConfigLoader;
    exports.LanguageService = LanguageService;
    exports.CurrencyService = CurrencyService;
    exports.SiteContextModule = SiteContextModule;
    exports.interceptors = interceptors$1;
    exports.OccSiteService = OccSiteService;
    exports.SiteContextOccModule = SiteContextOccModule;
    exports.SiteContextInterceptor = SiteContextInterceptor;
    exports.SiteContextConfig = SiteContextConfig;
    exports.serviceMapFactory = serviceMapFactory;
    exports.ContextServiceMap = ContextServiceMap;
    exports.LANGUAGE_CONTEXT_ID = LANGUAGE_CONTEXT_ID;
    exports.CURRENCY_CONTEXT_ID = CURRENCY_CONTEXT_ID;
    exports.BASE_SITE_CONTEXT_ID = BASE_SITE_CONTEXT_ID;
    exports.contextServiceMapProvider = contextServiceMapProvider;
    exports.inititializeContext = inititializeContext;
    exports.contextServiceProviders = contextServiceProviders;
    exports.initSiteContextRoutesHandler = initSiteContextRoutesHandler;
    exports.siteContextParamsProviders = siteContextParamsProviders;
    exports.SITE_CONTEXT_FEATURE = SITE_CONTEXT_FEATURE;
    exports.LOAD_LANGUAGES = LOAD_LANGUAGES;
    exports.LOAD_LANGUAGES_FAIL = LOAD_LANGUAGES_FAIL;
    exports.LOAD_LANGUAGES_SUCCESS = LOAD_LANGUAGES_SUCCESS;
    exports.SET_ACTIVE_LANGUAGE = SET_ACTIVE_LANGUAGE;
    exports.LANGUAGE_CHANGE = LANGUAGE_CHANGE;
    exports.LoadLanguages = LoadLanguages;
    exports.LoadLanguagesFail = LoadLanguagesFail;
    exports.LoadLanguagesSuccess = LoadLanguagesSuccess;
    exports.SetActiveLanguage = SetActiveLanguage;
    exports.LanguageChange = LanguageChange;
    exports.LOAD_CURRENCIES = LOAD_CURRENCIES;
    exports.LOAD_CURRENCIES_FAIL = LOAD_CURRENCIES_FAIL;
    exports.LOAD_CURRENCIES_SUCCESS = LOAD_CURRENCIES_SUCCESS;
    exports.SET_ACTIVE_CURRENCY = SET_ACTIVE_CURRENCY;
    exports.CURRENCY_CHANGE = CURRENCY_CHANGE;
    exports.LoadCurrencies = LoadCurrencies;
    exports.LoadCurrenciesFail = LoadCurrenciesFail;
    exports.LoadCurrenciesSuccess = LoadCurrenciesSuccess;
    exports.SetActiveCurrency = SetActiveCurrency;
    exports.CurrencyChange = CurrencyChange;
    exports.SET_ACTIVE_BASE_SITE = SET_ACTIVE_BASE_SITE;
    exports.BASE_SITE_CHANGE = BASE_SITE_CHANGE;
    exports.SetActiveBaseSite = SetActiveBaseSite;
    exports.BaseSiteChange = BaseSiteChange;
    exports.getSiteContextState = getSiteContextState;
    exports.getLanguagesState = getLanguagesState;
    exports.getLanguagesEntities = getLanguagesEntities;
    exports.getActiveLanguage = getActiveLanguage;
    exports.getAllLanguages = getAllLanguages;
    exports.getCurrenciesState = getCurrenciesState;
    exports.getCurrenciesEntities = getCurrenciesEntities;
    exports.getActiveCurrency = getActiveCurrency;
    exports.getAllCurrencies = getAllCurrencies;
    exports.getActiveBaseSite = getActiveBaseSite;
    exports.SmartEditModule = SmartEditModule;
    exports.StateModule = StateModule;
    exports.getStateSlice = getStateSlice;
    exports.entityLoadMeta = entityLoadMeta;
    exports.entityFailMeta = entityFailMeta;
    exports.entitySuccessMeta = entitySuccessMeta;
    exports.entityResetMeta = entityResetMeta;
    exports.ENTITY_LOAD_ACTION = ENTITY_LOAD_ACTION;
    exports.ENTITY_FAIL_ACTION = ENTITY_FAIL_ACTION;
    exports.ENTITY_SUCCESS_ACTION = ENTITY_SUCCESS_ACTION;
    exports.ENTITY_RESET_ACTION = ENTITY_RESET_ACTION;
    exports.EntityLoadAction = EntityLoadAction;
    exports.EntityFailAction = EntityFailAction;
    exports.EntitySuccessAction = EntitySuccessAction;
    exports.EntityResetAction = EntityResetAction;
    exports.entityLoaderReducer = entityLoaderReducer;
    exports.entityStateSelector = entityStateSelector;
    exports.entityValueSelector = entityValueSelector;
    exports.entityLoadingSelector = entityLoadingSelector;
    exports.entityErrorSelector = entityErrorSelector;
    exports.entitySuccessSelector = entitySuccessSelector;
    exports.entityMeta = entityMeta;
    exports.entityRemoveMeta = entityRemoveMeta;
    exports.entityRemoveAllMeta = entityRemoveAllMeta;
    exports.ENTITY_REMOVE_ACTION = ENTITY_REMOVE_ACTION;
    exports.ENTITY_REMOVE_ALL_ACTION = ENTITY_REMOVE_ALL_ACTION;
    exports.EntityRemoveAction = EntityRemoveAction;
    exports.EntityRemoveAllAction = EntityRemoveAllAction;
    exports.entityReducer = entityReducer;
    exports.initialEntityState = initialEntityState;
    exports.entitySelector = entitySelector;
    exports.loadMeta = loadMeta;
    exports.failMeta = failMeta;
    exports.successMeta = successMeta;
    exports.resetMeta = resetMeta;
    exports.LOADER_LOAD_ACTION = LOADER_LOAD_ACTION;
    exports.LOADER_FAIL_ACTION = LOADER_FAIL_ACTION;
    exports.LOADER_SUCCESS_ACTION = LOADER_SUCCESS_ACTION;
    exports.LOADER_RESET_ACTION = LOADER_RESET_ACTION;
    exports.LoaderLoadAction = LoaderLoadAction;
    exports.LoaderFailAction = LoaderFailAction;
    exports.LoaderSuccessAction = LoaderSuccessAction;
    exports.LoaderResetAction = LoaderResetAction;
    exports.loaderReducer = loaderReducer;
    exports.initialLoaderState = initialLoaderState;
    exports.loaderValueSelector = loaderValueSelector;
    exports.loaderLoadingSelector = loaderLoadingSelector;
    exports.loaderErrorSelector = loaderErrorSelector;
    exports.loaderSuccessSelector = loaderSuccessSelector;
    exports.ofLoaderLoad = ofLoaderLoad;
    exports.ofLoaderFail = ofLoaderFail;
    exports.ofLoaderSuccess = ofLoaderSuccess;
    exports.StorageSyncType = StorageSyncType;
    exports.StateTransferType = StateTransferType;
    exports.StateConfig = StateConfig;
    exports.metaReducersFactory = metaReducersFactory;
    exports.META_REDUCER = META_REDUCER;
    exports.OccStoreFinderService = OccStoreFinderService;
    exports.StoreFinderOccModule = StoreFinderOccModule;
    exports.StoreFinderConfig = StoreFinderConfig;
    exports.ON_HOLD = ON_HOLD;
    exports.FIND_STORES = FIND_STORES;
    exports.FIND_STORES_FAIL = FIND_STORES_FAIL;
    exports.FIND_STORES_SUCCESS = FIND_STORES_SUCCESS;
    exports.FIND_STORE_BY_ID = FIND_STORE_BY_ID;
    exports.FIND_STORE_BY_ID_FAIL = FIND_STORE_BY_ID_FAIL;
    exports.FIND_STORE_BY_ID_SUCCESS = FIND_STORE_BY_ID_SUCCESS;
    exports.OnHold = OnHold;
    exports.FindStores = FindStores;
    exports.FindStoresFail = FindStoresFail;
    exports.FindStoresSuccess = FindStoresSuccess;
    exports.FindStoreById = FindStoreById;
    exports.FindStoreByIdFail = FindStoreByIdFail;
    exports.FindStoreByIdSuccess = FindStoreByIdSuccess;
    exports.VIEW_ALL_STORES = VIEW_ALL_STORES;
    exports.VIEW_ALL_STORES_FAIL = VIEW_ALL_STORES_FAIL;
    exports.VIEW_ALL_STORES_SUCCESS = VIEW_ALL_STORES_SUCCESS;
    exports.ViewAllStores = ViewAllStores;
    exports.ViewAllStoresFail = ViewAllStoresFail;
    exports.ViewAllStoresSuccess = ViewAllStoresSuccess;
    exports.getFindStoresState = getFindStoresState;
    exports.getFindStoresEntities = getFindStoresEntities;
    exports.getStoresLoading = getStoresLoading;
    exports.getViewAllStoresState = getViewAllStoresState;
    exports.getViewAllStoresEntities = getViewAllStoresEntities;
    exports.getViewAllStoresLoading = getViewAllStoresLoading;
    exports.STORE_FINDER_FEATURE = STORE_FINDER_FEATURE;
    exports.STORE_FINDER_DATA = STORE_FINDER_DATA;
    exports.ExternalJsFileLoader = ExternalJsFileLoader;
    exports.GoogleMapRendererService = GoogleMapRendererService;
    exports.StoreFinderService = StoreFinderService;
    exports.StoreDataService = StoreDataService;
    exports.StoreFinderCoreModule = StoreFinderCoreModule;
    exports.OccUserService = OccUserService;
    exports.OccOrderService = OccOrderService;
    exports.UserOccModule = UserOccModule;
    exports.CLEAR_MISCS_DATA = CLEAR_MISCS_DATA;
    exports.ClearMiscsData = ClearMiscsData;
    exports.LOAD_BILLING_COUNTRIES = LOAD_BILLING_COUNTRIES;
    exports.LOAD_BILLING_COUNTRIES_FAIL = LOAD_BILLING_COUNTRIES_FAIL;
    exports.LOAD_BILLING_COUNTRIES_SUCCESS = LOAD_BILLING_COUNTRIES_SUCCESS;
    exports.LoadBillingCountries = LoadBillingCountries;
    exports.LoadBillingCountriesFail = LoadBillingCountriesFail;
    exports.LoadBillingCountriesSuccess = LoadBillingCountriesSuccess;
    exports.LOAD_DELIVERY_COUNTRIES = LOAD_DELIVERY_COUNTRIES;
    exports.LOAD_DELIVERY_COUNTRIES_FAIL = LOAD_DELIVERY_COUNTRIES_FAIL;
    exports.LOAD_DELIVERY_COUNTRIES_SUCCESS = LOAD_DELIVERY_COUNTRIES_SUCCESS;
    exports.LoadDeliveryCountries = LoadDeliveryCountries;
    exports.LoadDeliveryCountriesFail = LoadDeliveryCountriesFail;
    exports.LoadDeliveryCountriesSuccess = LoadDeliveryCountriesSuccess;
    exports.FORGOT_PASSWORD_EMAIL_REQUEST = FORGOT_PASSWORD_EMAIL_REQUEST;
    exports.FORGOT_PASSWORD_EMAIL_REQUEST_SUCCESS = FORGOT_PASSWORD_EMAIL_REQUEST_SUCCESS;
    exports.FORGOT_PASSWORD_EMAIL_REQUEST_FAIL = FORGOT_PASSWORD_EMAIL_REQUEST_FAIL;
    exports.ForgotPasswordEmailRequest = ForgotPasswordEmailRequest;
    exports.ForgotPasswordEmailRequestFail = ForgotPasswordEmailRequestFail;
    exports.ForgotPasswordEmailRequestSuccess = ForgotPasswordEmailRequestSuccess;
    exports.LOAD_ORDER_DETAILS = LOAD_ORDER_DETAILS;
    exports.LOAD_ORDER_DETAILS_FAIL = LOAD_ORDER_DETAILS_FAIL;
    exports.LOAD_ORDER_DETAILS_SUCCESS = LOAD_ORDER_DETAILS_SUCCESS;
    exports.CLEAR_ORDER_DETAILS = CLEAR_ORDER_DETAILS;
    exports.LoadOrderDetails = LoadOrderDetails;
    exports.LoadOrderDetailsFail = LoadOrderDetailsFail;
    exports.LoadOrderDetailsSuccess = LoadOrderDetailsSuccess;
    exports.ClearOrderDetails = ClearOrderDetails;
    exports.LOAD_USER_PAYMENT_METHODS = LOAD_USER_PAYMENT_METHODS;
    exports.LOAD_USER_PAYMENT_METHODS_FAIL = LOAD_USER_PAYMENT_METHODS_FAIL;
    exports.LOAD_USER_PAYMENT_METHODS_SUCCESS = LOAD_USER_PAYMENT_METHODS_SUCCESS;
    exports.SET_DEFAULT_USER_PAYMENT_METHOD = SET_DEFAULT_USER_PAYMENT_METHOD;
    exports.SET_DEFAULT_USER_PAYMENT_METHOD_FAIL = SET_DEFAULT_USER_PAYMENT_METHOD_FAIL;
    exports.SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS = SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS;
    exports.DELETE_USER_PAYMENT_METHOD = DELETE_USER_PAYMENT_METHOD;
    exports.DELETE_USER_PAYMENT_METHOD_FAIL = DELETE_USER_PAYMENT_METHOD_FAIL;
    exports.DELETE_USER_PAYMENT_METHOD_SUCCESS = DELETE_USER_PAYMENT_METHOD_SUCCESS;
    exports.LoadUserPaymentMethods = LoadUserPaymentMethods;
    exports.LoadUserPaymentMethodsFail = LoadUserPaymentMethodsFail;
    exports.LoadUserPaymentMethodsSuccess = LoadUserPaymentMethodsSuccess;
    exports.SetDefaultUserPaymentMethod = SetDefaultUserPaymentMethod;
    exports.SetDefaultUserPaymentMethodFail = SetDefaultUserPaymentMethodFail;
    exports.SetDefaultUserPaymentMethodSuccess = SetDefaultUserPaymentMethodSuccess;
    exports.DeleteUserPaymentMethod = DeleteUserPaymentMethod;
    exports.DeleteUserPaymentMethodFail = DeleteUserPaymentMethodFail;
    exports.DeleteUserPaymentMethodSuccess = DeleteUserPaymentMethodSuccess;
    exports.LOAD_REGIONS = LOAD_REGIONS;
    exports.LOAD_REGIONS_SUCCESS = LOAD_REGIONS_SUCCESS;
    exports.LOAD_REGIONS_FAIL = LOAD_REGIONS_FAIL;
    exports.LoadRegions = LoadRegions;
    exports.LoadRegionsFail = LoadRegionsFail;
    exports.LoadRegionsSuccess = LoadRegionsSuccess;
    exports.RESET_PASSWORD = RESET_PASSWORD;
    exports.RESET_PASSWORD_SUCCESS = RESET_PASSWORD_SUCCESS;
    exports.RESET_PASSWORD_FAIL = RESET_PASSWORD_FAIL;
    exports.ResetPassword = ResetPassword;
    exports.ResetPasswordFail = ResetPasswordFail;
    exports.ResetPasswordSuccess = ResetPasswordSuccess;
    exports.LOAD_TITLES = LOAD_TITLES;
    exports.LOAD_TITLES_FAIL = LOAD_TITLES_FAIL;
    exports.LOAD_TITLES_SUCCESS = LOAD_TITLES_SUCCESS;
    exports.LoadTitles = LoadTitles;
    exports.LoadTitlesFail = LoadTitlesFail;
    exports.LoadTitlesSuccess = LoadTitlesSuccess;
    exports.UPDATE_EMAIL = UPDATE_EMAIL;
    exports.UPDATE_EMAIL_ERROR = UPDATE_EMAIL_ERROR;
    exports.UPDATE_EMAIL_SUCCESS = UPDATE_EMAIL_SUCCESS;
    exports.RESET_EMAIL = RESET_EMAIL;
    exports.UpdateEmailAction = UpdateEmailAction;
    exports.UpdateEmailSuccessAction = UpdateEmailSuccessAction;
    exports.UpdateEmailErrorAction = UpdateEmailErrorAction;
    exports.ResetUpdateEmailAction = ResetUpdateEmailAction;
    exports.UPDATE_PASSWORD = UPDATE_PASSWORD;
    exports.UPDATE_PASSWORD_FAIL = UPDATE_PASSWORD_FAIL;
    exports.UPDATE_PASSWORD_SUCCESS = UPDATE_PASSWORD_SUCCESS;
    exports.UPDATE_PASSWORD_RESET = UPDATE_PASSWORD_RESET;
    exports.UpdatePassword = UpdatePassword;
    exports.UpdatePasswordFail = UpdatePasswordFail;
    exports.UpdatePasswordSuccess = UpdatePasswordSuccess;
    exports.UpdatePasswordReset = UpdatePasswordReset;
    exports.LOAD_USER_ADDRESSES = LOAD_USER_ADDRESSES;
    exports.LOAD_USER_ADDRESSES_FAIL = LOAD_USER_ADDRESSES_FAIL;
    exports.LOAD_USER_ADDRESSES_SUCCESS = LOAD_USER_ADDRESSES_SUCCESS;
    exports.ADD_USER_ADDRESS = ADD_USER_ADDRESS;
    exports.ADD_USER_ADDRESS_FAIL = ADD_USER_ADDRESS_FAIL;
    exports.ADD_USER_ADDRESS_SUCCESS = ADD_USER_ADDRESS_SUCCESS;
    exports.UPDATE_USER_ADDRESS = UPDATE_USER_ADDRESS;
    exports.UPDATE_USER_ADDRESS_FAIL = UPDATE_USER_ADDRESS_FAIL;
    exports.UPDATE_USER_ADDRESS_SUCCESS = UPDATE_USER_ADDRESS_SUCCESS;
    exports.DELETE_USER_ADDRESS = DELETE_USER_ADDRESS;
    exports.DELETE_USER_ADDRESS_FAIL = DELETE_USER_ADDRESS_FAIL;
    exports.DELETE_USER_ADDRESS_SUCCESS = DELETE_USER_ADDRESS_SUCCESS;
    exports.LoadUserAddresses = LoadUserAddresses;
    exports.LoadUserAddressesFail = LoadUserAddressesFail;
    exports.LoadUserAddressesSuccess = LoadUserAddressesSuccess;
    exports.AddUserAddress = AddUserAddress;
    exports.AddUserAddressFail = AddUserAddressFail;
    exports.AddUserAddressSuccess = AddUserAddressSuccess;
    exports.UpdateUserAddress = UpdateUserAddress;
    exports.UpdateUserAddressFail = UpdateUserAddressFail;
    exports.UpdateUserAddressSuccess = UpdateUserAddressSuccess;
    exports.DeleteUserAddress = DeleteUserAddress;
    exports.DeleteUserAddressFail = DeleteUserAddressFail;
    exports.DeleteUserAddressSuccess = DeleteUserAddressSuccess;
    exports.LOAD_USER_DETAILS = LOAD_USER_DETAILS;
    exports.LOAD_USER_DETAILS_FAIL = LOAD_USER_DETAILS_FAIL;
    exports.LOAD_USER_DETAILS_SUCCESS = LOAD_USER_DETAILS_SUCCESS;
    exports.UPDATE_USER_DETAILS = UPDATE_USER_DETAILS;
    exports.UPDATE_USER_DETAILS_FAIL = UPDATE_USER_DETAILS_FAIL;
    exports.UPDATE_USER_DETAILS_SUCCESS = UPDATE_USER_DETAILS_SUCCESS;
    exports.RESET_USER_DETAILS = RESET_USER_DETAILS;
    exports.LoadUserDetails = LoadUserDetails;
    exports.LoadUserDetailsFail = LoadUserDetailsFail;
    exports.LoadUserDetailsSuccess = LoadUserDetailsSuccess;
    exports.UpdateUserDetails = UpdateUserDetails;
    exports.UpdateUserDetailsFail = UpdateUserDetailsFail;
    exports.UpdateUserDetailsSuccess = UpdateUserDetailsSuccess;
    exports.ResetUpdateUserDetails = ResetUpdateUserDetails;
    exports.LOAD_USER_ORDERS = LOAD_USER_ORDERS;
    exports.LOAD_USER_ORDERS_FAIL = LOAD_USER_ORDERS_FAIL;
    exports.LOAD_USER_ORDERS_SUCCESS = LOAD_USER_ORDERS_SUCCESS;
    exports.CLEAR_USER_ORDERS = CLEAR_USER_ORDERS;
    exports.LoadUserOrders = LoadUserOrders;
    exports.LoadUserOrdersFail = LoadUserOrdersFail;
    exports.LoadUserOrdersSuccess = LoadUserOrdersSuccess;
    exports.ClearUserOrders = ClearUserOrders;
    exports.REGISTER_USER = REGISTER_USER;
    exports.REGISTER_USER_FAIL = REGISTER_USER_FAIL;
    exports.REGISTER_USER_SUCCESS = REGISTER_USER_SUCCESS;
    exports.REMOVE_USER = REMOVE_USER;
    exports.REMOVE_USER_FAIL = REMOVE_USER_FAIL;
    exports.REMOVE_USER_SUCCESS = REMOVE_USER_SUCCESS;
    exports.REMOVE_USER_RESET = REMOVE_USER_RESET;
    exports.RegisterUser = RegisterUser;
    exports.RegisterUserFail = RegisterUserFail;
    exports.RegisterUserSuccess = RegisterUserSuccess;
    exports.RemoveUser = RemoveUser;
    exports.RemoveUserFail = RemoveUserFail;
    exports.RemoveUserSuccess = RemoveUserSuccess;
    exports.RemoveUserReset = RemoveUserReset;
    exports.getReducers = getReducers$6;
    exports.clearUserState = clearUserState;
    exports.reducerToken = reducerToken$6;
    exports.reducerProvider = reducerProvider$6;
    exports.metaReducers = metaReducers$3;
    exports.getDetailsState = getDetailsState;
    exports.getDetails = getDetails;
    exports.getAddressesLoaderState = getAddressesLoaderState;
    exports.getAddresses = getAddresses;
    exports.getAddressesLoading = getAddressesLoading;
    exports.getPaymentMethodsState = getPaymentMethodsState;
    exports.getPaymentMethods = getPaymentMethods;
    exports.getPaymentMethodsLoading = getPaymentMethodsLoading;
    exports.getOrdersState = getOrdersState;
    exports.getOrdersLoaded = getOrdersLoaded;
    exports.getOrders = getOrders;
    exports.getTitlesState = getTitlesState;
    exports.getTitlesEntites = getTitlesEntites;
    exports.getAllTitles = getAllTitles;
    exports.titleSelectorFactory = titleSelectorFactory;
    exports.getDeliveryCountriesState = getDeliveryCountriesState;
    exports.getDeliveryCountriesEntites = getDeliveryCountriesEntites;
    exports.getAllDeliveryCountries = getAllDeliveryCountries;
    exports.countrySelectorFactory = countrySelectorFactory;
    exports.getRegionsState = getRegionsState;
    exports.getAllRegions = getAllRegions;
    exports.getOrderState = getOrderState;
    exports.getOrderDetails = getOrderDetails$1;
    exports.getUserState = getUserState;
    exports.getBillingCountriesState = getBillingCountriesState;
    exports.getBillingCountriesEntites = getBillingCountriesEntites;
    exports.getAllBillingCountries = getAllBillingCountries;
    exports.getResetPassword = getResetPassword;
    exports.USER_FEATURE = USER_FEATURE;
    exports.UPDATE_EMAIL_PROCESS_ID = UPDATE_EMAIL_PROCESS_ID;
    exports.UPDATE_PASSWORD_PROCESS_ID = UPDATE_PASSWORD_PROCESS_ID;
    exports.UPDATE_USER_DETAILS_PROCESS_ID = UPDATE_USER_DETAILS_PROCESS_ID;
    exports.REMOVE_USER_PROCESS_ID = REMOVE_USER_PROCESS_ID;
    exports.USER_PAYMENT_METHODS = USER_PAYMENT_METHODS;
    exports.USER_ORDERS = USER_ORDERS;
    exports.USER_ADDRESSES = USER_ADDRESSES;
    exports.UserService = UserService;
    exports.UserModule = UserModule;
    exports.PipeModule = PipeModule;
    exports.StripHtmlModule = StripHtmlModule;
    exports.ConverterService = ConverterService;
    exports.UtilModule = UtilModule;
    exports.WindowRef = WindowRef;
    exports.ɵbh = defaultAuthConfig;
    exports.ɵbp = AuthErrorInterceptor;
    exports.ɵbm = ClientTokenInterceptor;
    exports.ɵbl = interceptors;
    exports.ɵbo = UserTokenInterceptor;
    exports.ɵbf = ClientAuthenticationTokenService;
    exports.ɵbj = ClientErrorHandlingService;
    exports.ɵbi = services;
    exports.ɵbe = UserAuthenticationTokenService;
    exports.ɵbk = UserErrorHandlingService;
    exports.ɵp = AuthStoreModule;
    exports.ɵo = authStoreConfigFactory;
    exports.ɵbd = ClientTokenEffect;
    exports.ɵbb = effects$2;
    exports.ɵbc = UserTokenEffects;
    exports.ɵz = clearAuthState;
    exports.ɵw = getReducers$1;
    exports.ɵba = metaReducers;
    exports.ɵy = reducerProvider$1;
    exports.ɵx = reducerToken$1;
    exports.ɵbg = reducer$1;
    exports.ɵbr = OccCartNormalizer;
    exports.ɵbs = CartStoreModule;
    exports.ɵca = CartEntryEffects;
    exports.ɵbz = CartEffects;
    exports.ɵby = effects$4;
    exports.ɵcb = reducer$2;
    exports.ɵbw = clearCartState;
    exports.ɵbt = getReducers$2;
    exports.ɵbx = metaReducers$1;
    exports.ɵbv = reducerProvider$2;
    exports.ɵbu = reducerToken$2;
    exports.ɵcv = CheckoutStoreModule;
    exports.ɵcu = AddressVerificationEffect;
    exports.ɵct = CardTypesEffects;
    exports.ɵcs = CheckoutEffects;
    exports.ɵcr = effects$6;
    exports.ɵcq = getAddressVerificationResults;
    exports.ɵcp = reducer$7;
    exports.ɵco = getCardTypesEntites;
    exports.ɵcn = reducer$8;
    exports.ɵcj = getDeliveryAddress;
    exports.ɵck = getDeliveryMode;
    exports.ɵcm = getOrderDetails;
    exports.ɵcl = getPaymentDetails;
    exports.ɵci = reducer$6;
    exports.ɵcg = clearCheckoutState;
    exports.ɵcf = getCheckoutState;
    exports.ɵcc = getReducers$4;
    exports.ɵch = metaReducers$2;
    exports.ɵce = reducerProvider$4;
    exports.ɵcd = reducerToken$4;
    exports.ɵdb = CmsStoreModule;
    exports.ɵda = cmsStoreConfigFactory;
    exports.ɵdj = ComponentEffects;
    exports.ɵdh = effects$7;
    exports.ɵdk = NavigationEntryItemEffects;
    exports.ɵdi = PageEffects;
    exports.ɵdf = clearCmsState;
    exports.ɵdc = getReducers$8;
    exports.ɵdg = metaReducers$4;
    exports.ɵde = reducerProvider$8;
    exports.ɵdd = reducerToken$8;
    exports.ɵdo = reducer$k;
    exports.ɵdl = reducer$l;
    exports.ɵdn = reducer$m;
    exports.ɵfv = ConfigModule;
    exports.ɵer = ServerConfig;
    exports.ɵbq = provideConfigValidator;
    exports.ɵek = BadGatewayHandler;
    exports.ɵel = BadRequestHandler;
    exports.ɵem = ConflictHandler;
    exports.ɵen = ForbiddenHandler;
    exports.ɵeo = GatewayTimeoutHandler;
    exports.ɵei = HttpErrorHandler;
    exports.ɵep = NotFoundHandler;
    exports.ɵej = UnknownErrorHandler;
    exports.ɵeq = HttpErrorInterceptor;
    exports.ɵeh = reducer$9;
    exports.ɵee = getReducers$5;
    exports.ɵeg = reducerProvider$5;
    exports.ɵef = reducerToken$5;
    exports.ɵes = defaultI18nConfig;
    exports.ɵeu = i18nextInit;
    exports.ɵet = i18nextProviders;
    exports.ɵev = MockDatePipe;
    exports.ɵew = MockTranslationService;
    exports.ɵdm = PageType;
    exports.ɵcx = PageType;
    exports.ɵhg = ProcessModule;
    exports.ɵhi = PROCESS_FEATURE;
    exports.ɵhh = ProcessStoreModule;
    exports.ɵhj = getReducers$7;
    exports.ɵhl = reducerProvider$7;
    exports.ɵhk = reducerToken$7;
    exports.ɵex = defaultOccProductConfig;
    exports.ɵea = effects$8;
    exports.ɵed = ProductReviewsEffects;
    exports.ɵeb = ProductsSearchEffects;
    exports.ɵec = ProductEffects;
    exports.ɵfg = ProductStoreModule;
    exports.ɵff = productStoreConfigFactory;
    exports.ɵdy = clearProductsState;
    exports.ɵdv = getReducers$9;
    exports.ɵdz = metaReducers$5;
    exports.ɵdx = reducerProvider$9;
    exports.ɵdw = reducerToken$9;
    exports.ɵfh = reducer$o;
    exports.ɵfd = getAuxSearchResults;
    exports.ɵfe = getProductSuggestions;
    exports.ɵfc = getSearchResults;
    exports.ɵfb = reducer$n;
    exports.ɵa = defaultConfigurableRoutesConfig;
    exports.ɵb = defaultStorefrontRoutesTranslations;
    exports.ɵc = UrlMatcherFactoryService;
    exports.ɵe = UrlParsingService;
    exports.ɵd = UrlTranslationService;
    exports.ɵf = ROUTING_FEATURE;
    exports.ɵl = effects$1;
    exports.ɵm = RouterEffects;
    exports.ɵk = CustomSerializer;
    exports.ɵg = getReducers;
    exports.ɵh = reducer;
    exports.ɵj = reducerProvider;
    exports.ɵi = reducerToken;
    exports.ɵfi = defaultSiteContextConfigFactory;
    exports.ɵbn = BaseSiteService;
    exports.ɵfo = SiteContextParamsService;
    exports.ɵfq = SiteContextRoutesHandler;
    exports.ɵfp = SiteContextUrlSerializer;
    exports.ɵdu = CurrenciesEffects;
    exports.ɵds = effects$3;
    exports.ɵdt = LanguagesEffects;
    exports.ɵfn = reducer$5;
    exports.ɵfm = reducer$4;
    exports.ɵdp = getReducers$3;
    exports.ɵdr = reducerProvider$3;
    exports.ɵdq = reducerToken$3;
    exports.ɵfl = reducer$3;
    exports.ɵfk = SiteContextStoreModule;
    exports.ɵfj = siteContextStoreConfigFactory;
    exports.ɵfs = CmsTicketInterceptor;
    exports.ɵfr = interceptors$2;
    exports.ɵft = SmartEditService;
    exports.ɵcy = EntityFailAction;
    exports.ɵcw = EntityLoadAction;
    exports.ɵgf = EntityResetAction;
    exports.ɵcz = EntitySuccessAction;
    exports.ɵq = DEFAULT_LOCAL_STORAGE_KEY;
    exports.ɵr = DEFAULT_SESSION_STORAGE_KEY;
    exports.ɵs = defaultStateConfig;
    exports.ɵt = stateMetaReducers;
    exports.ɵu = getStorageSyncReducer;
    exports.ɵv = getTransferStateReducer;
    exports.ɵfw = defaultStoreFinderConfig;
    exports.ɵgc = FindStoresEffect;
    exports.ɵgb = effects$9;
    exports.ɵgd = ViewAllStoresEffect;
    exports.ɵfy = getReducers$a;
    exports.ɵga = reducerProvider$a;
    exports.ɵfz = reducerToken$a;
    exports.ɵfu = getStoreFinderState;
    exports.ɵfx = StoreFinderStoreModule;
    exports.ɵgs = BillingCountriesEffect;
    exports.ɵgt = DeliveryCountriesEffects;
    exports.ɵhd = ForgotPasswordEffects;
    exports.ɵgr = effects$5;
    exports.ɵgu = OrderDetailsEffect;
    exports.ɵgv = UserPaymentMethodsEffects;
    exports.ɵgw = RegionsEffects;
    exports.ɵgx = ResetPasswordEffects;
    exports.ɵgy = TitlesEffects;
    exports.ɵhe = UpdateEmailEffects;
    exports.ɵhf = UpdatePasswordEffects;
    exports.ɵgz = UserAddressesEffects;
    exports.ɵha = UserDetailsEffects;
    exports.ɵhb = UserOrdersEffect;
    exports.ɵhc = UserRegisterEffects;
    exports.ɵgi = reducer$a;
    exports.ɵgm = reducer$b;
    exports.ɵgl = reducer$c;
    exports.ɵgj = reducer$d;
    exports.ɵgo = reducer$e;
    exports.ɵgp = reducer$f;
    exports.ɵgn = reducer$g;
    exports.ɵgh = reducer$h;
    exports.ɵgg = reducer$i;
    exports.ɵgk = reducer$j;
    exports.ɵgq = UserStoreModule;
    exports.ɵhm = StripHtmlPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=spartacus-core.umd.js.map
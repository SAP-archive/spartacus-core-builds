import { ROUTER_NAVIGATION, ROUTER_ERROR, ROUTER_CANCEL, ROUTER_NAVIGATED, StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, PRIMARY_OUTLET, RouterModule, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, DefaultUrlSerializer, UrlSerializer } from '@angular/router';
import i18nextXhrBackend from 'i18next-xhr-backend';
import i18next from 'i18next';
import { Observable, of, throwError, Subscription, combineLatest } from 'rxjs';
import { createFeatureSelector, createSelector, select, Store, StoreModule, combineReducers, INIT, UPDATE, META_REDUCERS } from '@ngrx/store';
import { Effect, Actions, ofType, EffectsModule } from '@ngrx/effects';
import { __decorate, __metadata, __assign, __spread, __extends, __values, __read } from 'tslib';
import { InjectionToken, NgModule, Optional, Injectable, Inject, APP_INITIALIZER, PLATFORM_ID, Injector, Pipe, defineInjectable, inject, INJECTOR, NgZone, ChangeDetectorRef, ComponentFactoryResolver } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpParams, HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { tap, map, filter, switchMap, take, catchError, mergeMap, exhaustMap, groupBy, pluck, shareReplay, concatMap, takeWhile } from 'rxjs/operators';
import { CommonModule, Location, DOCUMENT, isPlatformBrowser, isPlatformServer, DatePipe, getLocaleId } from '@angular/common';

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
/** @enum {string} */
var PageType = {
    CONTENT_PAGE: 'ContentPage',
    PRODUCT_PAGE: 'ProductPage',
    CATEGORY_PAGE: 'CategoryPage',
    CATALOG_PAGE: 'CatalogPage',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var ImageType = {
    PRIMARY: 'PRIMARY',
    GALLERY: 'GALLERY',
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
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var PriceType = {
    BUY: 'BUY',
    FROM: 'FROM',
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
var testestsd = 'sare';

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getAuthState = createFeatureSelector(AUTH_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getUserTokenSelector = function (state) { return state.token; };
/** @type {?} */
var getUserTokenState = createSelector(getAuthState, function (state) { return state.userToken; });
/** @type {?} */
var getUserToken = createSelector(getUserTokenState, getUserTokenSelector);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getClientTokenState = createSelector(getAuthState, function (state) { return state.clientToken; });

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
var  /**
 * @abstract
 */
ServerConfig = /** @class */ (function () {
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
    if (target === void 0) { target = {}; }
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
var ConfigValidatorToken = new InjectionToken('ConfigurationValidator');
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
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (configValidators_1_1 && !configValidators_1_1.done && (_a = configValidators_1.return)) _a.call(configValidators_1);
        }
        finally { if (e_1) throw e_1.error; }
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
var Config = new InjectionToken('Configuration');
/**
 * Config chunk token, can be used to provide configuration chunk and contribute to the global configuration object.
 * Should not be used directly, use `provideConfig` or import `ConfigModule.withConfig` instead.
 * @type {?}
 */
var ConfigChunk = new InjectionToken('ConfigurationChunk');
/**
 * Helper function to provide configuration chunk using ConfigChunk token
 *
 * @param {?=} config Config object to merge with the global configuration
 * @return {?}
 */
function provideConfig(config) {
    if (config === void 0) { config = {}; }
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
        if (config === void 0) { config = {}; }
        return {
            ngModule: ConfigModule,
            providers: [
                { provide: ServerConfig, useExisting: Config },
                provideConfig(defaultServerConfig),
                provideConfig(config),
                {
                    provide: Config,
                    useFactory: configurationFactory,
                    deps: [ConfigChunk, [new Optional(), ConfigValidatorToken]],
                },
            ],
        };
    };
    ConfigModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
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
var ROUTING_FEATURE = 'router';

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
    nextState: undefined,
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
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case SAVE_REDIRECT_URL: {
            return __assign({}, state, { redirectUrl: action.payload });
        }
        case CLEAR_REDIRECT_URL: {
            return __assign({}, state, { redirectUrl: '' });
        }
        case ROUTER_NAVIGATION: {
            return __assign({}, state, { nextState: action.payload.routerState, navigationId: action.payload.event.id });
        }
        case ROUTER_ERROR:
        case ROUTER_CANCEL: {
            return __assign({}, state, { nextState: undefined });
        }
        case ROUTER_NAVIGATED: {
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
            if (
            // TODO: Should be rafactored, utilizimg semantic pages configuration
            contextId === '/login' ||
                contextId === '/login/register' ||
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
                nextState: undefined,
            };
        }
        default: {
            return state;
        }
    }
}
/** @type {?} */
var reducerToken = new InjectionToken('RouterReducers');
/** @type {?} */
var reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
/** @type {?} */
var getRouterFeatureState = createFeatureSelector(ROUTING_FEATURE);
/** @type {?} */
var getRouterState = createSelector(getRouterFeatureState, function (state) { return state.router; });
/** @type {?} */
var getPageContext = createSelector(getRouterState, function (routingState) {
    return (routingState.state && routingState.state.context) || { id: '' };
});
/** @type {?} */
var getNextPageContext = createSelector(getRouterState, function (routingState) {
    return routingState.nextState && routingState.nextState.context;
});
/** @type {?} */
var isNavigating = createSelector(getNextPageContext, function (context) { return !!context; });
/** @type {?} */
var getRedirectUrl = createSelector(getRouterState, function (state) { return state.redirectUrl; });
/* The serializer is there to parse the RouterStateSnapshot,
and to reduce the amount of properties to be passed to the reducer.
 */
var  /* The serializer is there to parse the RouterStateSnapshot,
and to reduce the amount of properties to be passed to the reducer.
 */
CustomSerializer = /** @class */ (function () {
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
        var state = (/** @type {?} */ (routerState.root));
        /** @type {?} */
        var cmsRequired = false;
        /** @type {?} */
        var context;
        while (state.firstChild) {
            state = (/** @type {?} */ (state.firstChild));
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
    function RouterEffects(actions$, router, location) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.location = location;
        this.navigate$ = this.actions$.pipe(ofType(GO), map(function (action) { return action.payload; }), tap(function (_a) {
            var path = _a.path, queryParams = _a.query, extras = _a.extras;
            _this.router.navigate(path, __assign({ queryParams: queryParams }, extras));
        }));
        this.navigateBuUrl$ = this.actions$.pipe(ofType(GO_BY_URL), map(function (action) { return action.payload; }), tap(function (url) {
            _this.router.navigateByUrl(url);
        }));
        this.clearCmsRoutes$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE, LOGOUT, LOGIN), tap(function (_) {
            /** @type {?} */
            var filteredConfig = _this.router.config.filter(function (route) { return !(route.data && route.data.cxCmsRouteContext); });
            if (filteredConfig.length !== _this.router.config.length) {
                _this.router.resetConfig(filteredConfig);
            }
        }));
        this.navigateBack$ = this.actions$.pipe(ofType(BACK), tap(function () { return _this.location.back(); }));
        this.navigateForward$ = this.actions$.pipe(ofType(FORWARD), tap(function () { return _this.location.forward(); }));
    }
    RouterEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    RouterEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: Location }
    ]; };
    __decorate([
        Effect({ dispatch: false }),
        __metadata("design:type", Observable)
    ], RouterEffects.prototype, "navigate$", void 0);
    __decorate([
        Effect({ dispatch: false }),
        __metadata("design:type", Observable)
    ], RouterEffects.prototype, "navigateBuUrl$", void 0);
    __decorate([
        Effect({ dispatch: false }),
        __metadata("design:type", Observable)
    ], RouterEffects.prototype, "clearCmsRoutes$", void 0);
    __decorate([
        Effect({ dispatch: false }),
        __metadata("design:type", Observable)
    ], RouterEffects.prototype, "navigateBack$", void 0);
    __decorate([
        Effect({ dispatch: false }),
        __metadata("design:type", Observable)
    ], RouterEffects.prototype, "navigateForward$", void 0);
    return RouterEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var effects = [RouterEffects];

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
         */
        function () {
            return typeof window !== 'undefined' ? window : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowRef.prototype, "sessionStorage", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nativeWindow ? this.nativeWindow.sessionStorage : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowRef.prototype, "localStorage", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nativeWindow ? this.nativeWindow.localStorage : undefined;
        },
        enumerable: true,
        configurable: true
    });
    WindowRef.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    WindowRef.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ WindowRef.ngInjectableDef = defineInjectable({ factory: function WindowRef_Factory() { return new WindowRef(inject(DOCUMENT)); }, token: WindowRef, providedIn: "root" });
    return WindowRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UrlParsingService = /** @class */ (function () {
    function UrlParsingService(router) {
        this.router = router;
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
        var childrenSegments = tree.children[PRIMARY_OUTLET]
            ? this._getPrimarySegmentsFromUrlTree(tree.children[PRIMARY_OUTLET])
            : [];
        return segments.concat(childrenSegments);
    };
    UrlParsingService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    UrlParsingService.ctorParameters = function () { return [
        { type: Router }
    ]; };
    /** @nocollapse */ UrlParsingService.ngInjectableDef = defineInjectable({ factory: function UrlParsingService_Factory() { return new UrlParsingService(inject(Router)); }, token: UrlParsingService, providedIn: "root" });
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
/**
 * @abstract
 */
var  /**
 * @abstract
 */
RoutingConfig = /** @class */ (function (_super) {
    __extends(RoutingConfig, _super);
    function RoutingConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RoutingConfig;
}(ServerConfig));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RoutingConfigService = /** @class */ (function () {
    function RoutingConfigService(config) {
        this.config = config;
    }
    /**
     * @param {?} routeName
     * @return {?}
     */
    RoutingConfigService.prototype.getRouteConfig = /**
     * @param {?} routeName
     * @return {?}
     */
    function (routeName) {
        /** @type {?} */
        var routesConfig = this.config.routing.routes;
        /** @type {?} */
        var result = routesConfig && routesConfig[routeName];
        if (!routesConfig || result === undefined) {
            this.warn("No path was configured for the named route '" + routeName + "'!");
        }
        return result;
    };
    /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    RoutingConfigService.prototype.warn = /**
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
    RoutingConfigService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    RoutingConfigService.ctorParameters = function () { return [
        { type: RoutingConfig }
    ]; };
    /** @nocollapse */ RoutingConfigService.ngInjectableDef = defineInjectable({ factory: function RoutingConfigService_Factory() { return new RoutingConfigService(inject(RoutingConfig)); }, token: RoutingConfigService, providedIn: "root" });
    return RoutingConfigService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UrlService = /** @class */ (function () {
    function UrlService(routingConfigService, urlParser, config) {
        this.routingConfigService = routingConfigService;
        this.urlParser = urlParser;
        this.config = config;
        this.ROOT_URL = ['/'];
    }
    /**
     * @param {?} commands
     * @return {?}
     */
    UrlService.prototype.generateUrl = /**
     * @param {?} commands
     * @return {?}
     */
    function (commands) {
        var e_1, _a;
        if (!Array.isArray(commands)) {
            commands = [commands];
        }
        /** @type {?} */
        var result = [];
        try {
            for (var commands_1 = __values(commands), commands_1_1 = commands_1.next(); !commands_1_1.done; commands_1_1 = commands_1.next()) {
                var command = commands_1_1.value;
                if (!this.isRouteCommand(command)) {
                    // don't modify segment that is not route command:
                    result.push(command);
                }
                else {
                    // generate array with url segments for given route command:
                    /** @type {?} */
                    var partialResult = this.generateUrlPart(command);
                    if (partialResult === null) {
                        return this.ROOT_URL;
                    }
                    result.push.apply(result, __spread(partialResult));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (commands_1_1 && !commands_1_1.done && (_a = commands_1.return)) _a.call(commands_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (this.shouldOutputAbsolute(commands)) {
            result.unshift('/');
        }
        return result;
    };
    /**
     * @private
     * @param {?} command
     * @return {?}
     */
    UrlService.prototype.isRouteCommand = /**
     * @private
     * @param {?} command
     * @return {?}
     */
    function (command) {
        return command && Boolean(command.cxRoute);
    };
    /**
     * @private
     * @param {?} commands
     * @return {?}
     */
    UrlService.prototype.shouldOutputAbsolute = /**
     * @private
     * @param {?} commands
     * @return {?}
     */
    function (commands) {
        return this.isRouteCommand(commands[0]);
    };
    /**
     * @private
     * @param {?} command
     * @return {?}
     */
    UrlService.prototype.generateUrlPart = /**
     * @private
     * @param {?} command
     * @return {?}
     */
    function (command) {
        this.standarizeRouteCommand(command);
        if (!command.cxRoute) {
            return null;
        }
        /** @type {?} */
        var routeConfig = this.routingConfigService.getRouteConfig(command.cxRoute);
        // if no route translation was configured, return null:
        if (!routeConfig || !routeConfig.paths) {
            return null;
        }
        // find first path that can satisfy it's parameters with given parameters
        /** @type {?} */
        var path = this.findPathWithFillableParams(routeConfig, command.params);
        // if there is no configured path that can be satisfied with given params, return null
        if (!path) {
            return null;
        }
        /** @type {?} */
        var result = this.provideParamsValues(path, command.params, routeConfig.paramsMapping);
        return result;
    };
    /**
     * @private
     * @param {?} command
     * @return {?}
     */
    UrlService.prototype.standarizeRouteCommand = /**
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
    UrlService.prototype.provideParamsValues = /**
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
     * @param {?} routeConfig
     * @param {?} params
     * @return {?}
     */
    UrlService.prototype.findPathWithFillableParams = /**
     * @private
     * @param {?} routeConfig
     * @param {?} params
     * @return {?}
     */
    function (routeConfig, params) {
        var _this = this;
        /** @type {?} */
        var foundPath = routeConfig.paths.find(function (path) {
            return _this.getParams(path).every(function (paramName) {
                /** @type {?} */
                var mappedParamName = _this.getMappedParamName(paramName, routeConfig.paramsMapping);
                return params[mappedParamName] !== undefined;
            });
        });
        if (foundPath === undefined || foundPath === null) {
            this.warn("No configured path matches all its params to given object. ", "Route config: ", routeConfig, "Params object: ", params);
            return null;
        }
        return foundPath;
    };
    /**
     * @private
     * @param {?} path
     * @return {?}
     */
    UrlService.prototype.getParams = /**
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
    UrlService.prototype.getMappedParamName = /**
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
    UrlService.prototype.warn = /**
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
    UrlService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    UrlService.ctorParameters = function () { return [
        { type: RoutingConfigService },
        { type: UrlParsingService },
        { type: ServerConfig }
    ]; };
    /** @nocollapse */ UrlService.ngInjectableDef = defineInjectable({ factory: function UrlService_Factory() { return new UrlService(inject(RoutingConfigService), inject(UrlParsingService), inject(ServerConfig)); }, token: UrlService, providedIn: "root" });
    return UrlService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RoutingService = /** @class */ (function () {
    function RoutingService(store, winRef, urlService) {
        this.store = store;
        this.winRef = winRef;
        this.urlService = urlService;
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
        return this.store.pipe(select(getRouterState));
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
        return this.store.pipe(select(getPageContext));
    };
    /**
     * Get the next `PageContext` from the state
     */
    /**
     * Get the next `PageContext` from the state
     * @return {?}
     */
    RoutingService.prototype.getNextPageContext = /**
     * Get the next `PageContext` from the state
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getNextPageContext));
    };
    /**
     * Get the `isNavigating` info from the state
     */
    /**
     * Get the `isNavigating` info from the state
     * @return {?}
     */
    RoutingService.prototype.isNavigating = /**
     * Get the `isNavigating` info from the state
     * @return {?}
     */
    function () {
        return this.store.pipe(select(isNavigating));
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
        var path = this.urlService.generateUrl(commands);
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
        var isLastPageInApp = this.winRef.document.referrer.includes(this.winRef.nativeWindow.location.origin);
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
        return this.store.pipe(select(getRedirectUrl));
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
     * @protected
     * @param {?} path
     * @param {?=} query
     * @param {?=} extras
     * @return {?}
     */
    RoutingService.prototype.navigate = /**
     * Navigation with a new state into history
     * @protected
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    RoutingService.ctorParameters = function () { return [
        { type: Store },
        { type: WindowRef },
        { type: UrlService }
    ]; };
    /** @nocollapse */ RoutingService.ngInjectableDef = defineInjectable({ factory: function RoutingService_Factory() { return new RoutingService(inject(Store), inject(WindowRef), inject(UrlService)); }, token: RoutingService, providedIn: "root" });
    return RoutingService;
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
        if (path === void 0) { path = ''; }
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ UrlMatcherFactoryService.ngInjectableDef = defineInjectable({ factory: function UrlMatcherFactoryService_Factory() { return new UrlMatcherFactoryService(); }, token: UrlMatcherFactoryService, providedIn: "root" });
    return UrlMatcherFactoryService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConfigurableRoutesService = /** @class */ (function () {
    function ConfigurableRoutesService(config, injector, routingConfigService, urlMatcherFactory) {
        this.config = config;
        this.injector = injector;
        this.routingConfigService = routingConfigService;
        this.urlMatcherFactory = urlMatcherFactory;
        this.initCalled = false; // guard not to call init() more than once
    }
    /**
     * Configures all existing Routes in the Router
     */
    // guard not to call init() more than once
    /**
     * Configures all existing Routes in the Router
     * @return {?}
     */
    ConfigurableRoutesService.prototype.init = 
    // guard not to call init() more than once
    /**
     * Configures all existing Routes in the Router
     * @return {?}
     */
    function () {
        if (!this.initCalled) {
            this.initCalled = true;
            this.configureRouter();
        }
    };
    /**
     * @private
     * @return {?}
     */
    ConfigurableRoutesService.prototype.configureRouter = /**
     * @private
     * @return {?}
     */
    function () {
        // Router could not be injected in constructor due to cyclic dependency with APP_INITIALIZER:
        /** @type {?} */
        var router = this.injector.get(Router);
        /** @type {?} */
        var configuredRoutes = this.configureRoutes(router.config);
        router.resetConfig(configuredRoutes);
    };
    /**
     * @private
     * @param {?} routes
     * @return {?}
     */
    ConfigurableRoutesService.prototype.configureRoutes = /**
     * @private
     * @param {?} routes
     * @return {?}
     */
    function (routes) {
        var _this = this;
        /** @type {?} */
        var result = [];
        routes.forEach(function (route) {
            /** @type {?} */
            var configuredRoute = _this.configureRoute(route);
            if (route.children && route.children.length) {
                configuredRoute.children = _this.configureRoutes(route.children);
            }
            result.push(configuredRoute);
        });
        return result;
    };
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    ConfigurableRoutesService.prototype.configureRoute = /**
     * @private
     * @param {?} route
     * @return {?}
     */
    function (route) {
        if (this.getRouteName(route)) {
            /** @type {?} */
            var paths = this.getConfiguredPaths(route);
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
        }
        return route; // if route doesn't have a name, just pass the original route
    };
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    ConfigurableRoutesService.prototype.getRouteName = /**
     * @private
     * @param {?} route
     * @return {?}
     */
    function (route) {
        return route.data && route.data.cxRoute;
    };
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    ConfigurableRoutesService.prototype.getConfiguredPaths = /**
     * @private
     * @param {?} route
     * @return {?}
     */
    function (route) {
        /** @type {?} */
        var routeName = this.getRouteName(route);
        /** @type {?} */
        var routeConfig = this.routingConfigService.getRouteConfig(routeName);
        if (routeConfig === undefined) {
            this.warn("Could not configure the named route '" + routeName + "'", route, "due to undefined key '" + routeName + "' in the routes config");
            return [];
        }
        if (routeConfig && routeConfig.paths === undefined) {
            this.warn("Could not configure the named route '" + routeName + "'", route, "due to undefined 'paths' for the named route '" + routeName + "' in the routes config");
            return [];
        }
        // routeConfig or routeConfig.paths can be null - which means switching off the route
        return (routeConfig && routeConfig.paths) || [];
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ConfigurableRoutesService.ctorParameters = function () { return [
        { type: ServerConfig },
        { type: Injector },
        { type: RoutingConfigService },
        { type: UrlMatcherFactoryService }
    ]; };
    /** @nocollapse */ ConfigurableRoutesService.ngInjectableDef = defineInjectable({ factory: function ConfigurableRoutesService_Factory() { return new ConfigurableRoutesService(inject(ServerConfig), inject(INJECTOR), inject(RoutingConfigService), inject(UrlMatcherFactoryService)); }, token: ConfigurableRoutesService, providedIn: "root" });
    return ConfigurableRoutesService;
}());

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
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    providers: [
                        {
                            provide: APP_INITIALIZER,
                            useFactory: initConfigurableRoutes,
                            deps: [ConfigurableRoutesService],
                            multi: true,
                        },
                        { provide: RoutingConfig, useExisting: Config },
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
        { type: NgModule, args: [{
                    imports: [
                        ConfigurableRoutesModule,
                        RouterModule.forRoot([], {
                            scrollPositionRestoration: 'enabled',
                            anchorScrolling: 'enabled',
                        }),
                        StoreModule.forFeature(ROUTING_FEATURE, reducerToken),
                        EffectsModule.forFeature(effects),
                        StoreRouterConnectingModule.forRoot({
                            stateKey: ROUTING_FEATURE,
                        }),
                    ],
                    providers: [
                        RoutingService,
                        reducerProvider,
                        {
                            provide: RouterStateSerializer,
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
var  /**
 * @abstract
 */
OccConfig = /** @class */ (function (_super) {
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
/**
 * @abstract
 */
var  /**
 * @abstract
 */
AuthConfig = /** @class */ (function (_super) {
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
        return this.store.pipe(select(getUserToken));
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
        return this.store.pipe(select(getClientTokenState), filter(function (state) {
            if (_this.isClientTokenLoaded(state)) {
                return true;
            }
            else {
                if (!state.loading) {
                    _this.store.dispatch(new LoadClientToken());
                }
                return false;
            }
        }), map(function (state) { return state.value; }));
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
        return this.store.pipe(select(getClientTokenState), filter(function (state) {
            return _this.isClientTokenLoaded(state);
        }), map(function (state) { return state.value; }));
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ AuthService.ngInjectableDef = defineInjectable({ factory: function AuthService_Factory() { return new AuthService(inject(Store)); }, token: AuthService, providedIn: "root" });
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
        return this.authService.refreshClientToken().pipe(take(1), switchMap(function (token) {
            return next.handle(_this.createNewRequestWithNewToken(request, token));
        }));
    };
    /**
     * @protected
     * @param {?} request
     * @param {?} token
     * @return {?}
     */
    ClientErrorHandlingService.prototype.createNewRequestWithNewToken = /**
     * @protected
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
        { type: Injectable }
    ];
    /** @nocollapse */
    ClientErrorHandlingService.ctorParameters = function () { return [
        { type: AuthService }
    ]; };
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
        return this.handleExpiredToken().pipe(switchMap(function (token) {
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
     * @protected
     * @return {?}
     */
    UserErrorHandlingService.prototype.handleExpiredToken = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var oldToken;
        return this.authService.getUserToken().pipe(tap(function (token) {
            if (token.access_token && token.refresh_token && !oldToken) {
                _this.authService.refreshUserToken(token);
            }
            else if (!token.access_token && !token.refresh_token) {
                _this.routingService.go({ cxRoute: 'login' });
            }
            oldToken = oldToken || token;
        }), filter(function (token) { return oldToken.access_token !== token.access_token; }), take(1));
    };
    /**
     * @protected
     * @param {?} request
     * @param {?} token
     * @return {?}
     */
    UserErrorHandlingService.prototype.createNewRequestWithNewToken = /**
     * @protected
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
        { type: Injectable }
    ];
    /** @nocollapse */
    UserErrorHandlingService.ctorParameters = function () { return [
        { type: AuthService },
        { type: RoutingService }
    ]; };
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
        headers = new HttpHeaders().set(headerName, JSON.stringify(interceptorParam));
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
        return next.handle(request).pipe(catchError(function (errResponse) {
            if (errResponse instanceof HttpErrorResponse) {
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
                            errResponse.url.includes(OAUTH_ENDPOINT) &&
                                errResponse.error.error === 'invalid_token') {
                                _this.userErrorHandlingService.handleExpiredRefreshToken();
                                return of();
                            }
                        }
                        break;
                    case 400: // Bad Request
                        if (errResponse.url.includes(OAUTH_ENDPOINT) &&
                            errResponse.error.error === 'invalid_grant') {
                            if (request.body.get('grant_type') === 'refresh_token') {
                                // refresh token fail, force user logout
                                _this.authService.logout();
                            }
                        }
                        break;
                }
            }
            return throwError(errResponse);
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
        { type: Injectable }
    ];
    /** @nocollapse */
    AuthErrorInterceptor.ctorParameters = function () { return [
        { type: UserErrorHandlingService },
        { type: ClientErrorHandlingService },
        { type: AuthService }
    ]; };
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
var getSiteContextState = createFeatureSelector(SITE_CONTEXT_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getActiveBaseSite = createSelector(getSiteContextState, function (state) { return state.baseSite; });

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
        return this.store.pipe(select(getActiveBaseSite), filter(Boolean));
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
        return this.getActive().pipe(map(function (baseSite) { return [baseSite]; }));
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
            .pipe(select(getActiveBaseSite), take(1))
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
        { type: Injectable }
    ];
    /** @nocollapse */
    BaseSiteService.ctorParameters = function () { return [
        { type: Store }
    ]; };
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
            if (endpoint.includes('?')) {
                /** @type {?} */
                var queryParamsFromEndpoint = void 0;
                _a = __read(endpoint.split('?'), 2), endpoint = _a[0], queryParamsFromEndpoint = _a[1];
                httpParamsOptions = { fromString: queryParamsFromEndpoint };
            }
            /** @type {?} */
            var httpParams_1 = new HttpParams(httpParamsOptions);
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    OccEndpointsService.ctorParameters = function () { return [
        { type: OccConfig },
        { type: BaseSiteService, decorators: [{ type: Optional }] }
    ]; };
    /** @nocollapse */ OccEndpointsService.ngInjectableDef = defineInjectable({ factory: function OccEndpointsService_Factory() { return new OccEndpointsService(inject(OccConfig), inject(BaseSiteService, 8)); }, token: OccEndpointsService, providedIn: "root" });
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
        return this.getClientToken(request).pipe(take(1), switchMap(function (token) {
            if (token &&
                request.url.includes(_this.occEndpoints.getBaseEndpoint())) {
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
        return of(null);
    };
    ClientTokenInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ClientTokenInterceptor.ctorParameters = function () { return [
        { type: AuthService },
        { type: OccEndpointsService }
    ]; };
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
        return url.includes(this.occEndpoints.getBaseEndpoint());
    };
    UserTokenInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserTokenInterceptor.ctorParameters = function () { return [
        { type: AuthService },
        { type: OccEndpointsService }
    ]; };
    return UserTokenInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var interceptors = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ClientTokenInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: UserTokenInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
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
        var params = new HttpParams()
            .set('client_id', encodeURIComponent(this.config.authentication.client_id))
            .set('client_secret', encodeURIComponent(this.config.authentication.client_secret))
            .set('grant_type', 'client_credentials');
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(url, params, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @protected
     * @return {?}
     */
    ClientAuthenticationTokenService.prototype.getOAuthEndpoint = /**
     * @protected
     * @return {?}
     */
    function () {
        return (this.config.backend.occ.baseUrl || '') + OAUTH_ENDPOINT$1;
    };
    ClientAuthenticationTokenService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ClientAuthenticationTokenService.ctorParameters = function () { return [
        { type: AuthConfig },
        { type: HttpClient }
    ]; };
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
        var params = new HttpParams()
            .set('client_id', this.config.authentication.client_id)
            .set('client_secret', this.config.authentication.client_secret)
            .set('grant_type', 'password') // authorization_code, client_credentials, password
            .set('username', userId)
            .set('password', password);
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(url, params, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
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
        var params = new HttpParams()
            .set('client_id', encodeURIComponent(this.config.authentication.client_id))
            .set('client_secret', encodeURIComponent(this.config.authentication.client_secret))
            .set('refresh_token', encodeURI(refreshToken))
            .set('grant_type', 'refresh_token');
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(url, params, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
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
        { type: Injectable }
    ];
    /** @nocollapse */
    UserAuthenticationTokenService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: AuthConfig }
    ]; };
    return UserAuthenticationTokenService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var AuthServices = [
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
var  /**
 * @abstract
 */
StateConfig = /** @class */ (function () {
    function StateConfig() {
    }
    return StateConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var META_REDUCER = new InjectionToken('metaReducer');
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
        return (/** @type {?} */ ({}));
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
    return (/** @type {?} */ (newObject));
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
        return (/** @type {?} */ ({}));
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
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return (/** @type {?} */ (stateSlices));
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
            if (action.type === INIT && !exists(newState)) {
                newState = reducer(state, action);
            }
            if (action.type === INIT || action.type === UPDATE) {
                /** @type {?} */
                var rehydratedState = rehydrate(config, winRef);
                return deepMerge(newState, rehydratedState);
            }
            newState = reducer(newState, action);
            if (action.type !== INIT) {
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
var CX_KEY = makeStateKey('cx-state');
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
        if (isPlatformBrowser(platformId)) {
            return getBrowserTransferStateReducer(transferState, config.state.ssrTransfer.keys);
        }
        else if (isPlatformServer(platformId)) {
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
            if (action.type === INIT) {
                if (!state) {
                    state = reducer(state, action);
                }
                // we should not utilize transfer state if user is logged in
                /** @type {?} */
                var authState = ((/** @type {?} */ (state)))[AUTH_FEATURE];
                /** @type {?} */
                var isLoggedIn = authState && authState.userToken && authState.userToken.token;
                if (!isLoggedIn && transferState.hasKey(CX_KEY)) {
                    /** @type {?} */
                    var cxKey = transferState.get(CX_KEY, {});
                    /** @type {?} */
                    var transferredStateSlice = getStateSlice(Object.keys(keys), cxKey);
                    state = deepMerge({}, state, transferredStateSlice);
                }
                return state;
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
        useFactory: getTransferStateReducer,
        deps: [
            PLATFORM_ID,
            [new Optional(), TransferState],
            [new Optional(), Config],
        ],
        multi: true,
    },
    {
        provide: META_REDUCER,
        useFactory: getStorageSyncReducer,
        deps: [WindowRef, [new Optional(), Config]],
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
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forRoot({}),
                        EffectsModule.forRoot([]),
                        ConfigModule.withConfig(defaultStateConfig),
                    ],
                    providers: __spread(stateMetaReducers, [
                        {
                            provide: META_REDUCERS,
                            useFactory: ɵ0,
                            deps: [[new Optional(), META_REDUCER]],
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
        this.loadUserToken$ = this.actions$.pipe(ofType(LOAD_USER_TOKEN), map(function (action) { return action.payload; }), mergeMap(function (_a) {
            var userId = _a.userId, password = _a.password;
            return _this.userTokenService.loadToken(userId, password).pipe(map(function (token) {
                /** @type {?} */
                var date = new Date();
                date.setSeconds(date.getSeconds() + token.expires_in);
                token.userId = userId;
                token.expiration_time = date;
                return new LoadUserTokenSuccess(token);
            }), catchError(function (error) { return of(new LoadUserTokenFail(error)); }));
        }));
        this.login$ = this.actions$.pipe(ofType(LOAD_USER_TOKEN_SUCCESS), map(function () { return new Login(); }));
        this.refreshUserToken$ = this.actions$.pipe(ofType(REFRESH_USER_TOKEN), map(function (action) { return action.payload; }), switchMap(function (_a) {
            var userId = _a.userId, refreshToken = _a.refreshToken;
            return _this.userTokenService.refreshToken(refreshToken).pipe(map(function (token) {
                token.userId = userId;
                /** @type {?} */
                var date = new Date();
                date.setSeconds(date.getSeconds() + token.expires_in);
                token.userId = userId;
                token.expiration_time = date;
                return new RefreshUserTokenSuccess(token);
            }, catchError(function (error) { return of(new RefreshUserTokenFail(error)); })));
        }));
    }
    UserTokenEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserTokenEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserAuthenticationTokenService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserTokenEffects.prototype, "loadUserToken$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserTokenEffects.prototype, "login$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserTokenEffects.prototype, "refreshUserToken$", void 0);
    return UserTokenEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ClientTokenEffect = /** @class */ (function () {
    function ClientTokenEffect(actions$, clientAuthenticationTokenService) {
        var _this = this;
        this.actions$ = actions$;
        this.clientAuthenticationTokenService = clientAuthenticationTokenService;
        this.loadClientToken$ = this.actions$.pipe(ofType(LOAD_CLIENT_TOKEN), exhaustMap(function () {
            return _this.clientAuthenticationTokenService
                .loadClientAuthenticationToken()
                .pipe(map(function (token) {
                return new LoadClientTokenSuccess(token);
            }), catchError(function (error) { return of(new LoadClientTokenFail(error)); }));
        }));
    }
    ClientTokenEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ClientTokenEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: ClientAuthenticationTokenService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], ClientTokenEffect.prototype, "loadClientToken$", void 0);
    return ClientTokenEffect;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var effects$1 = [UserTokenEffects, ClientTokenEffect];

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
        if (state === void 0) { state = initialLoaderState; }
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
var initialState$1 = (/** @type {?} */ ({}));
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$1(state, action) {
    if (state === void 0) { state = initialState$1; }
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
        userToken: combineReducers({ token: reducer$1 }),
        clientToken: loaderReducer(CLIENT_TOKEN_DATA),
    };
}
/** @type {?} */
var reducerToken$1 = new InjectionToken('AuthReducers');
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        StateModule,
                        StoreModule.forFeature(AUTH_FEATURE, reducerToken$1, { metaReducers: metaReducers }),
                        EffectsModule.forFeature(effects$1),
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        RoutingModule,
                        AuthStoreModule,
                        ConfigModule.withConfig(defaultAuthConfig),
                    ],
                    providers: __spread(AuthServices, [{ provide: AuthConfig, useExisting: Config }]),
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
        return this.authService.getUserToken().pipe(map(function (token) {
            if (!token.access_token) {
                _this.routingService.go({ cxRoute: 'login' });
                _this.routingService.saveRedirectUrl(state.url);
            }
            return !!token.access_token;
        }));
    };
    AuthGuard.GUARD_NAME = 'AuthGuard';
    AuthGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    AuthGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: AuthService }
    ]; };
    /** @nocollapse */ AuthGuard.ngInjectableDef = defineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(inject(RoutingService), inject(AuthService)); }, token: AuthGuard, providedIn: "root" });
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
        return this.authService.getUserToken().pipe(map(function (token) {
            if (token.access_token) {
                _this.routingService.go({ cxRoute: 'home' });
            }
            return !token.access_token;
        }));
    };
    NotAuthGuard.GUARD_NAME = 'NotAuthGuard';
    NotAuthGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    NotAuthGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: AuthService }
    ]; };
    /** @nocollapse */ NotAuthGuard.ngInjectableDef = defineInjectable({ factory: function NotAuthGuard_Factory() { return new NotAuthGuard(inject(RoutingService), inject(AuthService)); }, token: NotAuthGuard, providedIn: "root" });
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
    function MergeCartSuccess(payload) {
        this.payload = payload;
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
var getCartsState = createFeatureSelector(CART_FEATURE);
/** @type {?} */
var getActiveCartState = createSelector(getCartsState, function (cartsState) { return cartsState.active; });
/** @type {?} */
var getCartState = createSelector(getActiveCartState, function (state) { return loaderValueSelector(state); });
/** @type {?} */
var getCartContent = createSelector(getCartState, getCartContentSelector);
/** @type {?} */
var getRefresh = createSelector(getCartState, getRefreshSelector);
/** @type {?} */
var getLoaded = createSelector(getActiveCartState, function (state) {
    return loaderSuccessSelector(state) &&
        !loaderLoadingSelector(state) &&
        !loaderValueSelector(state).refresh;
});
/** @type {?} */
var getCartMergeComplete = createSelector(getCartState, getCartMergeCompleteSelector);
/** @type {?} */
var getEntriesMap = createSelector(getCartState, getEntriesSelector);
/** @type {?} */
var getEntrySelectorFactory = function (productCode) {
    return createSelector(getEntriesMap, function (entries) {
        if (entries) {
            return entries[productCode];
        }
    });
};
/** @type {?} */
var getEntries = createSelector(getEntriesMap, function (entities) {
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
         */
        function () {
            return !!this._cart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartDataService.prototype, "userId", {
        get: /**
         * @return {?}
         */
        function () {
            return this._userId;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._userId = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartDataService.prototype, "cart", {
        get: /**
         * @return {?}
         */
        function () {
            return this._cart;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._cart = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartDataService.prototype, "getDetails", {
        get: /**
         * @return {?}
         */
        function () {
            return this._getDetails;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._getDetails = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartDataService.prototype, "cartId", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.hasCart) {
                return this.userId === ANONYMOUS_USERID ? this.cart.guid : this.cart.code;
            }
        },
        enumerable: true,
        configurable: true
    });
    CartDataService.decorators = [
        { type: Injectable }
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
        return this.store.pipe(select(getCartContent));
    };
    /**
     * @return {?}
     */
    CartService.prototype.getEntries = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getEntries));
    };
    /**
     * @return {?}
     */
    CartService.prototype.getCartMergeComplete = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getCartMergeComplete));
    };
    /**
     * @return {?}
     */
    CartService.prototype.getLoaded = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getLoaded));
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
        this.store.pipe(select(getCartContent)).subscribe(function (cart) {
            _this.cartData.cart = cart;
            if (_this.callback) {
                _this.callback();
                _this.callback = null;
            }
        });
        this.authService
            .getUserToken()
            .pipe(filter(function (userToken) { return _this.cartData.userId !== userToken.userId; }))
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
        this.store.pipe(select(getRefresh)).subscribe(function (refresh) {
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
        return this.store.pipe(select(getEntrySelectorFactory(productCode)));
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
        { type: Injectable }
    ];
    /** @nocollapse */
    CartService.ctorParameters = function () { return [
        { type: Store },
        { type: CartDataService },
        { type: AuthService }
    ]; };
    return CartService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var services = [CartService, CartDataService];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
CartAdapter = /** @class */ (function () {
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
     * @param {?} cartId
     * @return {?}
     */
    CartConnector.prototype.loadCheckoutDetails = /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        return this.adapter.loadCheckoutDetails(userId, cartId);
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CartConnector.ctorParameters = function () { return [
        { type: CartAdapter }
    ]; };
    /** @nocollapse */ CartConnector.ngInjectableDef = defineInjectable({ factory: function CartConnector_Factory() { return new CartConnector(inject(CartAdapter)); }, token: CartConnector, providedIn: "root" });
    return CartConnector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CART_NORMALIZER = new InjectionToken('CartNormalizer');

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
var  /**
 * @abstract
 */
CartDeliveryAdapter = /** @class */ (function () {
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CartDeliveryConnector.ctorParameters = function () { return [
        { type: CartDeliveryAdapter }
    ]; };
    /** @nocollapse */ CartDeliveryConnector.ngInjectableDef = defineInjectable({ factory: function CartDeliveryConnector_Factory() { return new CartDeliveryConnector(inject(CartDeliveryAdapter)); }, token: CartDeliveryConnector, providedIn: "root" });
    return CartDeliveryConnector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DELIVERY_ADDRESS_NORMALIZER = new InjectionToken('DeliveryAddressNormalizer');
/** @type {?} */
var DELIVERY_ADDRESS_SERIALIZER = new InjectionToken('DeliveryAddressSerializer');
/** @type {?} */
var DELIVERY_MODE_NORMALIZER = new InjectionToken('DeliveryModeNormalizer');

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
var  /**
 * @abstract
 */
CartEntryAdapter = /** @class */ (function () {
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CartEntryConnector.ctorParameters = function () { return [
        { type: CartEntryAdapter }
    ]; };
    /** @nocollapse */ CartEntryConnector.ngInjectableDef = defineInjectable({ factory: function CartEntryConnector_Factory() { return new CartEntryConnector(inject(CartEntryAdapter)); }, token: CartEntryConnector, providedIn: "root" });
    return CartEntryConnector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CART_MODIFICATION_NORMALIZER = new InjectionToken('CartModificationNormalizer');

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
var  /**
 * @abstract
 */
CartPaymentAdapter = /** @class */ (function () {
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
    /**
     * @return {?}
     */
    CartPaymentConnector.prototype.getCardTypes = /**
     * @return {?}
     */
    function () {
        return this.adapter.loadCardTypes();
    };
    CartPaymentConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CartPaymentConnector.ctorParameters = function () { return [
        { type: CartPaymentAdapter }
    ]; };
    /** @nocollapse */ CartPaymentConnector.ngInjectableDef = defineInjectable({ factory: function CartPaymentConnector_Factory() { return new CartPaymentConnector(inject(CartPaymentAdapter)); }, token: CartPaymentConnector, providedIn: "root" });
    return CartPaymentConnector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PAYMENT_DETAILS_NORMALIZER = new InjectionToken('PaymentDetailsNormalizer');
/** @type {?} */
var PAYMENT_DETAILS_SERIALIZER = new InjectionToken('PaymentDetailsSerializer');
/** @type {?} */
var CARD_TYPE_NORMALIZER = new InjectionToken('CardTypeNormalizer');

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
var CHECKOUT_FEATURE = 'checkout';
/** @type {?} */
var CHECKOUT_DETAILS = '[Checkout] Checkout Details';

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
/** @type {?} */
var LOAD_CHECKOUT_DETAILS = '[Checkout] Load Checkout Details';
/** @type {?} */
var LOAD_CHECKOUT_DETAILS_FAIL = '[Checkout] Load Checkout Details Fail';
/** @type {?} */
var LOAD_CHECKOUT_DETAILS_SUCCESS = '[Checkout] Load Checkout Details Success';
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
var LoadCheckoutDetails = /** @class */ (function (_super) {
    __extends(LoadCheckoutDetails, _super);
    function LoadCheckoutDetails(payload) {
        var _this = _super.call(this, CHECKOUT_DETAILS) || this;
        _this.payload = payload;
        _this.type = LOAD_CHECKOUT_DETAILS;
        return _this;
    }
    return LoadCheckoutDetails;
}(LoaderLoadAction));
var LoadCheckoutDetailsFail = /** @class */ (function (_super) {
    __extends(LoadCheckoutDetailsFail, _super);
    function LoadCheckoutDetailsFail(payload) {
        var _this = _super.call(this, CHECKOUT_DETAILS, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_CHECKOUT_DETAILS_FAIL;
        return _this;
    }
    return LoadCheckoutDetailsFail;
}(LoaderFailAction));
var LoadCheckoutDetailsSuccess = /** @class */ (function (_super) {
    __extends(LoadCheckoutDetailsSuccess, _super);
    function LoadCheckoutDetailsSuccess(payload) {
        var _this = _super.call(this, CHECKOUT_DETAILS) || this;
        _this.payload = payload;
        _this.type = LOAD_CHECKOUT_DETAILS_SUCCESS;
        return _this;
    }
    return LoadCheckoutDetailsSuccess;
}(LoaderSuccessAction));

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
    if (state === void 0) { state = initialState$2; }
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
var reducerToken$2 = new InjectionToken('CartReducers');
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
    if (state === void 0) { state = initialState$3; }
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
    if (state === void 0) { state = initialState$4; }
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
    if (state === void 0) { state = initialState$5; }
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
var reducerToken$3 = new InjectionToken('SiteContextReducers');
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
/**
 * @abstract
 */
var  /**
 * @abstract
 */
SiteAdapter = /** @class */ (function () {
    function SiteAdapter() {
    }
    return SiteAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SiteConnector = /** @class */ (function () {
    function SiteConnector(adapter) {
        this.adapter = adapter;
    }
    /**
     * @return {?}
     */
    SiteConnector.prototype.getLanguages = /**
     * @return {?}
     */
    function () {
        return this.adapter.loadLanguages();
    };
    /**
     * @return {?}
     */
    SiteConnector.prototype.getCurrencies = /**
     * @return {?}
     */
    function () {
        return this.adapter.loadCurrencies();
    };
    SiteConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SiteConnector.ctorParameters = function () { return [
        { type: SiteAdapter }
    ]; };
    /** @nocollapse */ SiteConnector.ngInjectableDef = defineInjectable({ factory: function SiteConnector_Factory() { return new SiteConnector(inject(SiteAdapter)); }, token: SiteConnector, providedIn: "root" });
    return SiteConnector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LanguagesEffects = /** @class */ (function () {
    function LanguagesEffects(actions$, siteConnector, winRef) {
        var _this = this;
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.winRef = winRef;
        this.loadLanguages$ = this.actions$.pipe(ofType(LOAD_LANGUAGES), exhaustMap(function () {
            return _this.siteConnector.getLanguages().pipe(map(function (languages) { return new LoadLanguagesSuccess(languages); }), catchError(function (error) { return of(new LoadLanguagesFail(error)); }));
        }));
        this.activateLanguage$ = this.actions$.pipe(ofType(SET_ACTIVE_LANGUAGE), tap(function (action) {
            if (_this.winRef.sessionStorage) {
                _this.winRef.sessionStorage.setItem('language', action.payload);
            }
        }), map(function () { return new LanguageChange(); }));
    }
    LanguagesEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LanguagesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: SiteConnector },
        { type: WindowRef }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], LanguagesEffects.prototype, "loadLanguages$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], LanguagesEffects.prototype, "activateLanguage$", void 0);
    return LanguagesEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CurrenciesEffects = /** @class */ (function () {
    function CurrenciesEffects(actions$, siteConnector, winRef) {
        var _this = this;
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.winRef = winRef;
        this.loadCurrencies$ = this.actions$.pipe(ofType(LOAD_CURRENCIES), exhaustMap(function () {
            return _this.siteConnector.getCurrencies().pipe(map(function (currencies) { return new LoadCurrenciesSuccess(currencies); }), catchError(function (error) { return of(new LoadCurrenciesFail(error)); }));
        }));
        this.activateCurrency$ = this.actions$.pipe(ofType(SET_ACTIVE_CURRENCY), tap(function (action) {
            if (_this.winRef.sessionStorage) {
                _this.winRef.sessionStorage.setItem('currency', action.payload);
            }
        }), map(function () { return new CurrencyChange(); }));
    }
    CurrenciesEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CurrenciesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: SiteConnector },
        { type: WindowRef }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CurrenciesEffects.prototype, "loadCurrencies$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CurrenciesEffects.prototype, "activateCurrency$", void 0);
    return CurrenciesEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var effects$2 = [LanguagesEffects, CurrenciesEffects];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var activeLanguageSelector = function (state) { return state.activeLanguage; };
/** @type {?} */
var languagesEntitiesSelector = function (state) { return state.entities; };
/** @type {?} */
var getLanguagesState = createSelector(getSiteContextState, function (state) { return state.languages; });
/** @type {?} */
var getLanguagesEntities = createSelector(getLanguagesState, languagesEntitiesSelector);
/** @type {?} */
var getActiveLanguage = createSelector(getLanguagesState, activeLanguageSelector);
/** @type {?} */
var getAllLanguages = createSelector(getLanguagesEntities, function (entities) {
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
var getCurrenciesState = createSelector(getSiteContextState, function (state) { return state.currencies; });
/** @type {?} */
var getCurrenciesEntities = createSelector(getCurrenciesState, currenciesEntitiesSelector);
/** @type {?} */
var getActiveCurrency = createSelector(getCurrenciesState, activeCurrencySelector);
/** @type {?} */
var getAllCurrencies = createSelector(getCurrenciesEntities, function (entities) {
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
        return this.store.pipe(select(getAllLanguages), tap(function (languages) {
            if (!languages) {
                _this.store.dispatch(new LoadLanguages());
            }
        }), filter(Boolean));
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
        return this.store.pipe(select(getActiveLanguage), filter(Boolean));
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
            .pipe(select(getActiveLanguage), take(1))
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
        { type: Injectable }
    ];
    /** @nocollapse */
    LanguageService.ctorParameters = function () { return [
        { type: Store },
        { type: WindowRef }
    ]; };
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
        return this.store.pipe(select(getAllCurrencies), tap(function (currencies) {
            if (!currencies) {
                _this.store.dispatch(new LoadCurrencies());
            }
        }), filter(Boolean));
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
        return this.store.pipe(select(getActiveCurrency), filter(Boolean));
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
            .pipe(select(getActiveCurrency), take(1))
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
        { type: Injectable }
    ];
    /** @nocollapse */
    CurrencyService.ctorParameters = function () { return [
        { type: Store },
        { type: WindowRef }
    ]; };
    return CurrencyService;
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        StoreModule.forFeature(SITE_CONTEXT_FEATURE, reducerToken$3),
                        EffectsModule.forFeature(effects$2),
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
        if (state === void 0) { state = initialEntityState; }
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
                        if (ids.includes(cur)) {
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
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} entityType
 * @return {?}
 */
function ofLoaderLoad(entityType) {
    return filter(function (action) {
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
    return filter(function (action) {
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
    return filter(function (action) {
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
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
ContextServiceMap = /** @class */ (function () {
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
var  /**
 * @abstract
 */
SiteContextConfig = /** @class */ (function () {
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
        provide: APP_INITIALIZER,
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
        { type: Injectable }
    ];
    /** @nocollapse */
    SiteContextParamsService.ctorParameters = function () { return [
        { type: SiteContextConfig },
        { type: Injector },
        { type: ContextServiceMap }
    ]; };
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
         */
        function () {
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
            var parsed = (/** @type {?} */ (_super.prototype.parse.call(this, urlWithParams.url)));
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
            if (paramValues.includes(segments[segmentId])) {
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
        { type: Injectable }
    ];
    /** @nocollapse */
    SiteContextUrlSerializer.ctorParameters = function () { return [
        { type: SiteContextParamsService },
        { type: SiteContextConfig }
    ]; };
    return SiteContextUrlSerializer;
}(DefaultUrlSerializer));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SiteContextRoutesHandler = /** @class */ (function () {
    function SiteContextRoutesHandler(siteContextParams, serializer, injector) {
        this.siteContextParams = siteContextParams;
        this.serializer = serializer;
        this.injector = injector;
        this.subscription = new Subscription();
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
        this.router = this.injector.get(Router);
        this.location = this.injector.get(Location);
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
            .pipe(filter(function (event) {
            return event instanceof NavigationStart ||
                event instanceof NavigationEnd ||
                event instanceof NavigationError ||
                event instanceof NavigationCancel;
        }))
            .subscribe(function (event) {
            _this.isNavigating = event instanceof NavigationStart;
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SiteContextRoutesHandler.ctorParameters = function () { return [
        { type: SiteContextParamsService },
        { type: SiteContextUrlSerializer },
        { type: Injector }
    ]; };
    /** @nocollapse */ SiteContextRoutesHandler.ngInjectableDef = defineInjectable({ factory: function SiteContextRoutesHandler_Factory() { return new SiteContextRoutesHandler(inject(SiteContextParamsService), inject(SiteContextUrlSerializer), inject(INJECTOR)); }, token: SiteContextRoutesHandler, providedIn: "root" });
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
    { provide: UrlSerializer, useExisting: SiteContextUrlSerializer },
    {
        provide: APP_INITIALIZER,
        useFactory: initSiteContextRoutesHandler,
        deps: [SiteContextRoutesHandler],
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
    SiteContextModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ConfigModule.withConfigFactory(defaultSiteContextConfigFactory),
                        StateModule,
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
/** @type {?} */
var LANGUAGE_NORMALIZER = new InjectionToken('LanguageNormalizer');
/** @type {?} */
var CURRENCY_NORMALIZER = new InjectionToken('CurrencyNormalizer');

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
var CartEffects = /** @class */ (function () {
    function CartEffects(actions$, cartConnector, cartData) {
        var _this = this;
        this.actions$ = actions$;
        this.cartConnector = cartConnector;
        this.cartData = cartData;
        this.loadCart$ = this.actions$.pipe(ofType(LOAD_CART, LANGUAGE_CHANGE, CURRENCY_CHANGE), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            /** @type {?} */
            var loadCartParams = {
                userId: (payload && payload.userId) || _this.cartData.userId,
                cartId: (payload && payload.cartId) || _this.cartData.cartId,
                details: payload && payload.details !== undefined
                    ? payload.details
                    : _this.cartData.getDetails,
            };
            if (_this.isMissingData(loadCartParams)) {
                return of(new LoadCartFail({}));
            }
            return _this.cartConnector
                .load(loadCartParams.userId, loadCartParams.cartId, loadCartParams.details)
                .pipe(map(function (cart) {
                return new LoadCartSuccess(cart);
            }), catchError(function (error) { return of(new LoadCartFail(error)); }));
        }));
        this.createCart$ = this.actions$.pipe(ofType(CREATE_CART), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartConnector
                .create(payload.userId, payload.oldCartId, payload.toMergeCartGuid)
                .pipe(switchMap(function (cart) {
                if (payload.oldCartId) {
                    return [
                        new CreateCartSuccess(cart),
                        new MergeCartSuccess({
                            userId: payload.userId,
                            cartId: cart.code,
                        }),
                    ];
                }
                return [new CreateCartSuccess(cart)];
            }), catchError(function (error) { return of(new CreateCartFail(error)); }));
        }));
        this.mergeCart$ = this.actions$.pipe(ofType(MERGE_CART), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartConnector.load(payload.userId, 'current').pipe(map(function (currentCart) {
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
        { type: Injectable }
    ];
    /** @nocollapse */
    CartEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CartConnector },
        { type: CartDataService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CartEffects.prototype, "loadCart$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CartEffects.prototype, "createCart$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
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
        this.addEntry$ = this.actions$.pipe(ofType(ADD_ENTRY), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartEntryConnector
                .add(payload.userId, payload.cartId, payload.productCode, payload.quantity)
                .pipe(map(function (entry) { return new AddEntrySuccess(entry); }), catchError(function (error) { return of(new AddEntryFail(error)); }));
        }));
        this.removeEntry$ = this.actions$.pipe(ofType(REMOVE_ENTRY), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartEntryConnector
                .remove(payload.userId, payload.cartId, payload.entry)
                .pipe(map(function () {
                return new RemoveEntrySuccess();
            }), catchError(function (error) { return of(new RemoveEntryFail(error)); }));
        }));
        this.updateEntry$ = this.actions$.pipe(ofType(UPDATE_ENTRY), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartEntryConnector
                .update(payload.userId, payload.cartId, payload.entry, payload.qty)
                .pipe(map(function () {
                return new UpdateEntrySuccess();
            }), catchError(function (error) { return of(new UpdateEntryFail(error)); }));
        }));
    }
    CartEntryEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CartEntryEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CartEntryConnector }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CartEntryEffects.prototype, "addEntry$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CartEntryEffects.prototype, "removeEntry$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CartEntryEffects.prototype, "updateEntry$", void 0);
    return CartEntryEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var effects$3 = [CartEffects, CartEntryEffects];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CartStoreModule = /** @class */ (function () {
    function CartStoreModule() {
    }
    CartStoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        StoreModule.forFeature(CART_FEATURE, reducerToken$2, { metaReducers: metaReducers$1 }),
                        EffectsModule.forFeature(effects$3),
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
        { type: NgModule, args: [{
                    imports: [CartStoreModule],
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
var getDeliveryAddressSelector = function (state) {
    return state.address;
};
/** @type {?} */
var getDeliveryModeSelector = function (state) {
    return state.deliveryMode;
};
/** @type {?} */
var getPaymentDetailsSelector = function (state) {
    return state.paymentDetails;
};
/** @type {?} */
var getOrderDetailsSelector = function (state) {
    return state.orderDetails;
};
/** @type {?} */
var getCheckoutState = createFeatureSelector(CHECKOUT_FEATURE);
/** @type {?} */
var getCheckoutStepsState = createSelector(getCheckoutState, function (checkoutState) { return checkoutState.steps; });
/** @type {?} */
var getCheckoutSteps = createSelector(getCheckoutStepsState, function (state) { return loaderValueSelector(state); });
/** @type {?} */
var getDeliveryAddress = createSelector(getCheckoutSteps, getDeliveryAddressSelector);
/** @type {?} */
var getDeliveryMode = createSelector(getCheckoutSteps, getDeliveryModeSelector);
/** @type {?} */
var getSupportedDeliveryModes = createSelector(getDeliveryMode, function (deliveryMode) {
    return Object.keys(deliveryMode.supported).map(function (code) { return deliveryMode.supported[code]; });
});
/** @type {?} */
var getSelectedCode = createSelector(getDeliveryMode, function (deliveryMode) {
    return deliveryMode.selected;
});
/** @type {?} */
var getSelectedDeliveryMode = createSelector(getDeliveryMode, function (deliveryMode) {
    if (deliveryMode.selected !== '') {
        if (Object.keys(deliveryMode.supported).length === 0) {
            return null;
        }
        return deliveryMode.supported[deliveryMode.selected];
    }
});
/** @type {?} */
var getPaymentDetails = createSelector(getCheckoutSteps, getPaymentDetailsSelector);
/** @type {?} */
var getCheckoutOrderDetails = createSelector(getCheckoutSteps, getOrderDetailsSelector);
/** @type {?} */
var getCheckoutDetailsLoaded = createSelector(getCheckoutStepsState, function (state) { return loaderSuccessSelector(state) && !loaderLoadingSelector(state); });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$6 = {
    entities: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$6(state, action) {
    if (state === void 0) { state = initialState$6; }
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
            return initialState$6;
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
/** @type {?} */
var getCardTypesState = createSelector(getCheckoutState, function (state) { return state.cardTypes; });
/** @type {?} */
var getCardTypesEntites$1 = createSelector(getCardTypesState, getCardTypesEntites);
/** @type {?} */
var getAllCardTypes = createSelector(getCardTypesEntites$1, function (entites) {
    return Object.keys(entites).map(function (code) { return entites[code]; });
});

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
    if (state === void 0) { state = initialState$7; }
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
var getAddressVerificationResultsState = createSelector(getCheckoutState, function (state) { return state.addressVerification; });
/** @type {?} */
var getAddressVerificationResults$1 = createSelector(getAddressVerificationResultsState, getAddressVerificationResults);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

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
var GIVE_CONSENT_PROCESS_ID = 'giveConsent';
/** @type {?} */
var WITHDRAW_CONSENT_PROCESS_ID = 'withdrawConsent';
/** @type {?} */
var USER_CONSENTS = '[User] User Consents';
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
var LOAD_USER_CONSENTS = '[User] Load User Consents';
/** @type {?} */
var LOAD_USER_CONSENTS_SUCCESS = '[User] Load User Consents Success';
/** @type {?} */
var LOAD_USER_CONSENTS_FAIL = '[User] Load User Consents Fail';
/** @type {?} */
var RESET_LOAD_USER_CONSENTS = '[User] Reset Load User Consents';
/** @type {?} */
var GIVE_USER_CONSENT = '[User] Give User Consent';
/** @type {?} */
var GIVE_USER_CONSENT_FAIL = '[User] Give User Consent Fail';
/** @type {?} */
var GIVE_USER_CONSENT_SUCCESS = '[User] Give User Consent Success';
/** @type {?} */
var RESET_GIVE_USER_CONSENT_PROCESS = '[User] Reset Give User Consent Process';
/** @type {?} */
var WITHDRAW_USER_CONSENT = '[User] Withdraw User Consent';
/** @type {?} */
var WITHDRAW_USER_CONSENT_FAIL = '[User] Withdraw User Consent Fail';
/** @type {?} */
var WITHDRAW_USER_CONSENT_SUCCESS = '[User] Withdraw User Consent Success';
/** @type {?} */
var RESET_WITHDRAW_USER_CONSENT_PROCESS = '[User] Reset Withdraw User Consent Process';
var LoadUserConsents = /** @class */ (function (_super) {
    __extends(LoadUserConsents, _super);
    function LoadUserConsents(payload) {
        var _this = _super.call(this, USER_CONSENTS) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_CONSENTS;
        return _this;
    }
    return LoadUserConsents;
}(LoaderLoadAction));
var LoadUserConsentsFail = /** @class */ (function (_super) {
    __extends(LoadUserConsentsFail, _super);
    function LoadUserConsentsFail(payload) {
        var _this = _super.call(this, USER_CONSENTS, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_CONSENTS_FAIL;
        return _this;
    }
    return LoadUserConsentsFail;
}(LoaderFailAction));
var LoadUserConsentsSuccess = /** @class */ (function (_super) {
    __extends(LoadUserConsentsSuccess, _super);
    function LoadUserConsentsSuccess(payload) {
        var _this = _super.call(this, USER_CONSENTS) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_CONSENTS_SUCCESS;
        return _this;
    }
    return LoadUserConsentsSuccess;
}(LoaderSuccessAction));
var ResetLoadUserConsents = /** @class */ (function (_super) {
    __extends(ResetLoadUserConsents, _super);
    function ResetLoadUserConsents() {
        var _this = _super.call(this, USER_CONSENTS) || this;
        _this.type = RESET_LOAD_USER_CONSENTS;
        return _this;
    }
    return ResetLoadUserConsents;
}(LoaderResetAction));
var GiveUserConsent = /** @class */ (function (_super) {
    __extends(GiveUserConsent, _super);
    function GiveUserConsent(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, GIVE_CONSENT_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = GIVE_USER_CONSENT;
        return _this;
    }
    return GiveUserConsent;
}(EntityLoadAction));
var GiveUserConsentFail = /** @class */ (function (_super) {
    __extends(GiveUserConsentFail, _super);
    function GiveUserConsentFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, GIVE_CONSENT_PROCESS_ID, payload) || this;
        _this.type = GIVE_USER_CONSENT_FAIL;
        return _this;
    }
    return GiveUserConsentFail;
}(EntityFailAction));
var GiveUserConsentSuccess = /** @class */ (function (_super) {
    __extends(GiveUserConsentSuccess, _super);
    function GiveUserConsentSuccess(consentTemplate) {
        var _this = _super.call(this, PROCESS_FEATURE, GIVE_CONSENT_PROCESS_ID) || this;
        _this.consentTemplate = consentTemplate;
        _this.type = GIVE_USER_CONSENT_SUCCESS;
        return _this;
    }
    return GiveUserConsentSuccess;
}(EntitySuccessAction));
var ResetGiveUserConsentProcess = /** @class */ (function (_super) {
    __extends(ResetGiveUserConsentProcess, _super);
    function ResetGiveUserConsentProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, GIVE_CONSENT_PROCESS_ID) || this;
        _this.type = RESET_GIVE_USER_CONSENT_PROCESS;
        return _this;
    }
    return ResetGiveUserConsentProcess;
}(EntityResetAction));
var WithdrawUserConsent = /** @class */ (function (_super) {
    __extends(WithdrawUserConsent, _super);
    function WithdrawUserConsent(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, WITHDRAW_CONSENT_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = WITHDRAW_USER_CONSENT;
        return _this;
    }
    return WithdrawUserConsent;
}(EntityLoadAction));
var WithdrawUserConsentFail = /** @class */ (function (_super) {
    __extends(WithdrawUserConsentFail, _super);
    function WithdrawUserConsentFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, WITHDRAW_CONSENT_PROCESS_ID, payload) || this;
        _this.type = WITHDRAW_USER_CONSENT_FAIL;
        return _this;
    }
    return WithdrawUserConsentFail;
}(EntityFailAction));
var WithdrawUserConsentSuccess = /** @class */ (function (_super) {
    __extends(WithdrawUserConsentSuccess, _super);
    function WithdrawUserConsentSuccess() {
        var _this = _super.call(this, PROCESS_FEATURE, WITHDRAW_CONSENT_PROCESS_ID) || this;
        _this.type = WITHDRAW_USER_CONSENT_SUCCESS;
        return _this;
    }
    return WithdrawUserConsentSuccess;
}(EntitySuccessAction));
var ResetWithdrawUserConsentProcess = /** @class */ (function (_super) {
    __extends(ResetWithdrawUserConsentProcess, _super);
    function ResetWithdrawUserConsentProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, WITHDRAW_CONSENT_PROCESS_ID) || this;
        _this.type = RESET_WITHDRAW_USER_CONSENT_PROCESS;
        return _this;
    }
    return ResetWithdrawUserConsentProcess;
}(EntityResetAction));

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
var getGlobalMessageState = createFeatureSelector(GLOBAL_MESSAGE_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getGlobalMessageEntities = createSelector(getGlobalMessageState, function (state) { return state.entities; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

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
    if (state === void 0) { state = initialState$8; }
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
                if (!msgs.includes(message.text)) {
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
function getReducers$4() {
    return reducer$8;
}
/** @type {?} */
var reducerToken$4 = new InjectionToken('GlobalMessageReducers');
/** @type {?} */
var reducerProvider$4 = {
    provide: reducerToken$4,
    useFactory: getReducers$4,
};

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
        return this.store.pipe(select(getGlobalMessageEntities), filter(function (data) { return data !== undefined; }));
    };
    /**
     * Add one message into store
     * @param text: string | Translatable
     * @param type: GlobalMessageType object
     */
    /**
     * Add one message into store
     * @param {?} text
     * @param {?} type
     * @return {?}
     */
    GlobalMessageService.prototype.add = /**
     * Add one message into store
     * @param {?} text
     * @param {?} type
     * @return {?}
     */
    function (text, type) {
        this.store.dispatch(new AddMessage({
            text: typeof text === 'string' ? { raw: text } : text,
            type: type,
        }));
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
        this.store.dispatch(index !== undefined
            ? new RemoveMessage({
                type: type,
                index: index,
            })
            : new RemoveMessagesByType(type));
    };
    GlobalMessageService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GlobalMessageService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return GlobalMessageService;
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
/**
 * @abstract
 */
var HttpErrorHandler = /** @class */ (function () {
    function HttpErrorHandler(globalMessageService) {
        this.globalMessageService = globalMessageService;
    }
    HttpErrorHandler.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    HttpErrorHandler.ctorParameters = function () { return [
        { type: GlobalMessageService }
    ]; };
    /** @nocollapse */ HttpErrorHandler.ngInjectableDef = defineInjectable({ factory: function HttpErrorHandler_Factory() { return new HttpErrorHandler(inject(GlobalMessageService)); }, token: HttpErrorHandler, providedIn: "root" });
    return HttpErrorHandler;
}());

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
        return next.handle(request).pipe(catchError(function (response) {
            if (response instanceof HttpErrorResponse) {
                _this.handleErrorResponse(request, response);
                return throwError(response);
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
        { type: Injectable }
    ];
    /** @nocollapse */
    HttpErrorInterceptor.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Inject, args: [HttpErrorHandler,] }] }
    ]; };
    return HttpErrorInterceptor;
}());

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
        this.globalMessageService.add({ key: 'httpHandlers.unknownError' }, GlobalMessageType.MSG_TYPE_ERROR);
    };
    UnknownErrorHandler.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ UnknownErrorHandler.ngInjectableDef = defineInjectable({ factory: function UnknownErrorHandler_Factory() { return new UnknownErrorHandler(inject(GlobalMessageService)); }, token: UnknownErrorHandler, providedIn: "root" });
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
        this.globalMessageService.add({ key: 'httpHandlers.badGateway' }, GlobalMessageType.MSG_TYPE_ERROR);
    };
    BadGatewayHandler.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ BadGatewayHandler.ngInjectableDef = defineInjectable({ factory: function BadGatewayHandler_Factory() { return new BadGatewayHandler(inject(GlobalMessageService)); }, token: BadGatewayHandler, providedIn: "root" });
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
        if (response.url.includes(OAUTH_ENDPOINT$3) &&
            response.error.error === 'invalid_grant') {
            if (request.body.get('grant_type') === 'password') {
                this.globalMessageService.add({
                    key: 'httpHandlers.badRequestPleaseLoginAgain',
                    params: { errorMessage: this.getErrorMessage(response) },
                }, GlobalMessageType.MSG_TYPE_ERROR);
                this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_CONFIRMATION);
            }
        }
        else if (response.error.errors[0].type === 'PasswordMismatchError') {
            // uses en translation error message instead of backend exception error
            // @todo: this condition could be removed if backend gives better message
            this.globalMessageService.add({ key: 'httpHandlers.badRequestOldPasswordIncorrect' }, GlobalMessageType.MSG_TYPE_ERROR);
            // text: customError.customError.passwordMismatch,
        }
        else {
            if (!request.url.includes('/cms/components')) {
                // this is currently showing up in case we have a page not found. It should be a 404.
                // see https://jira.hybris.com/browse/CMSX-8516
                /** @type {?} */
                var errorMessage = this.getErrorMessage(response);
                /** @type {?} */
                var textObj = errorMessage
                    ? { raw: errorMessage }
                    : { key: 'httpHandlers.unknownError' };
                this.globalMessageService.add(textObj, GlobalMessageType.MSG_TYPE_ERROR);
            }
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
        return errMsg || '';
    };
    BadRequestHandler.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ BadRequestHandler.ngInjectableDef = defineInjectable({ factory: function BadRequestHandler_Factory() { return new BadRequestHandler(inject(GlobalMessageService)); }, token: BadRequestHandler, providedIn: "root" });
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
        this.globalMessageService.add({ key: 'httpHandlers.conflict' }, GlobalMessageType.MSG_TYPE_ERROR);
    };
    ConflictHandler.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ ConflictHandler.ngInjectableDef = defineInjectable({ factory: function ConflictHandler_Factory() { return new ConflictHandler(inject(GlobalMessageService)); }, token: ConflictHandler, providedIn: "root" });
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
        this.globalMessageService.add({ key: 'httpHandlers.forbidden' }, GlobalMessageType.MSG_TYPE_ERROR);
    };
    ForbiddenHandler.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ ForbiddenHandler.ngInjectableDef = defineInjectable({ factory: function ForbiddenHandler_Factory() { return new ForbiddenHandler(inject(GlobalMessageService)); }, token: ForbiddenHandler, providedIn: "root" });
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
        this.globalMessageService.add({ key: 'httpHandlers.gatewayTimeout' }, GlobalMessageType.MSG_TYPE_ERROR);
    };
    GatewayTimeoutHandler.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ GatewayTimeoutHandler.ngInjectableDef = defineInjectable({ factory: function GatewayTimeoutHandler_Factory() { return new GatewayTimeoutHandler(inject(GlobalMessageService)); }, token: GatewayTimeoutHandler, providedIn: "root" });
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
    // empty error handler to avoid we fallabck to the unknown error handler
    // empty error handler to avoid we fallabck to the unknown error handler
    /**
     * @return {?}
     */
    NotFoundHandler.prototype.handleError = 
    // empty error handler to avoid we fallabck to the unknown error handler
    /**
     * @return {?}
     */
    function () { };
    NotFoundHandler.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ NotFoundHandler.ngInjectableDef = defineInjectable({ factory: function NotFoundHandler_Factory() { return new NotFoundHandler(inject(GlobalMessageService)); }, token: NotFoundHandler, providedIn: "root" });
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
        provide: HTTP_INTERCEPTORS,
        useClass: HttpErrorInterceptor,
        multi: true,
    },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GlobalMessageStoreModule = /** @class */ (function () {
    function GlobalMessageStoreModule() {
    }
    GlobalMessageStoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StateModule,
                        StoreModule.forFeature(GLOBAL_MESSAGE_FEATURE, reducerToken$4),
                    ],
                    providers: [reducerProvider$4],
                },] }
    ];
    return GlobalMessageStoreModule;
}());

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
        { type: NgModule, args: [{
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
var  /**
 * @abstract
 */
OrderAdapter = /** @class */ (function () {
    function OrderAdapter() {
    }
    return OrderAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OrderConnector = /** @class */ (function () {
    function OrderConnector(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    OrderConnector.prototype.place = /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        return this.adapter.place(userId, cartId);
    };
    /**
     * @param {?} userId
     * @param {?} orderCode
     * @return {?}
     */
    OrderConnector.prototype.get = /**
     * @param {?} userId
     * @param {?} orderCode
     * @return {?}
     */
    function (userId, orderCode) {
        return this.adapter.load(userId, orderCode);
    };
    /**
     * @param {?} userId
     * @param {?=} pageSize
     * @param {?=} currentPage
     * @param {?=} sort
     * @return {?}
     */
    OrderConnector.prototype.getHistory = /**
     * @param {?} userId
     * @param {?=} pageSize
     * @param {?=} currentPage
     * @param {?=} sort
     * @return {?}
     */
    function (userId, pageSize, currentPage, sort) {
        return this.adapter.loadHistory(userId, pageSize, currentPage, sort);
    };
    OrderConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    OrderConnector.ctorParameters = function () { return [
        { type: OrderAdapter }
    ]; };
    /** @nocollapse */ OrderConnector.ngInjectableDef = defineInjectable({ factory: function OrderConnector_Factory() { return new OrderConnector(inject(OrderAdapter)); }, token: OrderConnector, providedIn: "root" });
    return OrderConnector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckoutEffects = /** @class */ (function () {
    function CheckoutEffects(actions$, cartDeliveryConnector, cartPaymentConnector, cartConnector, orderConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.cartDeliveryConnector = cartDeliveryConnector;
        this.cartPaymentConnector = cartPaymentConnector;
        this.cartConnector = cartConnector;
        this.orderConnector = orderConnector;
        this.addDeliveryAddress$ = this.actions$.pipe(ofType(ADD_DELIVERY_ADDRESS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartDeliveryConnector
                .createAddress(payload.userId, payload.cartId, payload.address)
                .pipe(mergeMap(function (address) {
                address['titleCode'] = payload.address.titleCode;
                return [
                    new LoadUserAddresses(payload.userId),
                    new SetDeliveryAddress({
                        userId: payload.userId,
                        cartId: payload.cartId,
                        address: address,
                    }),
                ];
            }), catchError(function (error) { return of(new AddDeliveryAddressFail(error)); }));
        }));
        this.setDeliveryAddress$ = this.actions$.pipe(ofType(SET_DELIVERY_ADDRESS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartDeliveryConnector
                .setAddress(payload.userId, payload.cartId, payload.address.id)
                .pipe(mergeMap(function () { return [
                new SetDeliveryAddressSuccess(payload.address),
                new LoadSupportedDeliveryModes({
                    userId: payload.userId,
                    cartId: payload.cartId,
                }),
            ]; }), catchError(function (error) { return of(new SetDeliveryAddressFail(error)); }));
        }));
        this.loadSupportedDeliveryModes$ = this.actions$.pipe(ofType(LOAD_SUPPORTED_DELIVERY_MODES), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartDeliveryConnector
                .getSupportedModes(payload.userId, payload.cartId)
                .pipe(map(function (data) {
                return new LoadSupportedDeliveryModesSuccess(data);
            }), catchError(function (error) {
                return of(new LoadSupportedDeliveryModesFail(error));
            }));
        }));
        this.setDeliveryMode$ = this.actions$.pipe(ofType(SET_DELIVERY_MODE), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartDeliveryConnector
                .setMode(payload.userId, payload.cartId, payload.selectedModeId)
                .pipe(mergeMap(function () {
                return [
                    new SetDeliveryModeSuccess(payload.selectedModeId),
                    new LoadCart({
                        userId: payload.userId,
                        cartId: payload.cartId,
                        details: true,
                    }),
                ];
            }), catchError(function (error) { return of(new SetDeliveryModeFail(error)); }));
        }));
        this.createPaymentDetails$ = this.actions$.pipe(ofType(CREATE_PAYMENT_DETAILS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            // get information for creating a subscription directly with payment provider
            return _this.cartPaymentConnector
                .create(payload.userId, payload.cartId, payload.paymentDetails)
                .pipe(mergeMap(function (details) {
                return [
                    new LoadUserPaymentMethods(payload.userId),
                    new CreatePaymentDetailsSuccess(details),
                ];
            }), catchError(function (error) {
                return of(new CreatePaymentDetailsFail(error));
            }));
        }));
        this.setPaymentDetails$ = this.actions$.pipe(ofType(SET_PAYMENT_DETAILS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartPaymentConnector
                .set(payload.userId, payload.cartId, payload.paymentDetails.id)
                .pipe(map(function () {
                return new SetPaymentDetailsSuccess(payload.paymentDetails);
            }), catchError(function (error) { return of(new SetPaymentDetailsFail(error)); }));
        }));
        this.placeOrder$ = this.actions$.pipe(ofType(PLACE_ORDER), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.orderConnector.place(payload.userId, payload.cartId).pipe(switchMap(function (data) { return [
                new PlaceOrderSuccess(data),
                new AddMessage({
                    text: {
                        key: 'checkoutOrderConfirmation.orderPlacedSuccessfully',
                    },
                    type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
                }),
            ]; }), catchError(function (error) { return of(new PlaceOrderFail(error)); }));
        }));
        this.loadCheckoutDetails$ = this.actions$.pipe(ofType(LOAD_CHECKOUT_DETAILS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartConnector
                .loadCheckoutDetails(payload.userId, payload.cartId)
                .pipe(map(function (data) {
                return new LoadCheckoutDetailsSuccess(data);
            }), catchError(function (error) {
                return of(new LoadCheckoutDetailsFail(error));
            }));
        }));
        this.reloadDetailsOnMergeCart$ = this.actions$.pipe(ofType(MERGE_CART_SUCCESS), map(function (action) { return action.payload; }), map(function (payload) {
            return new LoadCheckoutDetails({
                userId: payload.userId,
                cartId: payload.cartId ? payload.cartId : 'current',
            });
        }));
    }
    CheckoutEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CheckoutEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CartDeliveryConnector },
        { type: CartPaymentConnector },
        { type: CartConnector },
        { type: OrderConnector }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CheckoutEffects.prototype, "addDeliveryAddress$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CheckoutEffects.prototype, "setDeliveryAddress$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CheckoutEffects.prototype, "loadSupportedDeliveryModes$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CheckoutEffects.prototype, "setDeliveryMode$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CheckoutEffects.prototype, "createPaymentDetails$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CheckoutEffects.prototype, "setPaymentDetails$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CheckoutEffects.prototype, "placeOrder$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CheckoutEffects.prototype, "loadCheckoutDetails$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CheckoutEffects.prototype, "reloadDetailsOnMergeCart$", void 0);
    return CheckoutEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardTypesEffects = /** @class */ (function () {
    function CardTypesEffects(actions$, cartPaymentConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.cartPaymentConnector = cartPaymentConnector;
        this.loadCardTypes$ = this.actions$.pipe(ofType(LOAD_CARD_TYPES), switchMap(function () {
            return _this.cartPaymentConnector.getCardTypes().pipe(map(function (cardTypes) { return new LoadCardTypesSuccess(cardTypes); }), catchError(function (error) { return of(new LoadCardTypesFail(error)); }));
        }));
    }
    CardTypesEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CardTypesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CartPaymentConnector }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CardTypesEffects.prototype, "loadCardTypes$", void 0);
    return CardTypesEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
UserAddressAdapter = /** @class */ (function () {
    function UserAddressAdapter() {
    }
    return UserAddressAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserAddressConnector = /** @class */ (function () {
    function UserAddressConnector(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    UserAddressConnector.prototype.getAll = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        return this.adapter.loadAll(userId);
    };
    /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    UserAddressConnector.prototype.add = /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    function (userId, address) {
        return this.adapter.add(userId, address);
    };
    /**
     * @param {?} userId
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
    UserAddressConnector.prototype.update = /**
     * @param {?} userId
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
    function (userId, addressId, address) {
        return this.adapter.update(userId, addressId, address);
    };
    /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    UserAddressConnector.prototype.verify = /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    function (userId, address) {
        return this.adapter.verify(userId, address);
    };
    /**
     * @param {?} userId
     * @param {?} addressId
     * @return {?}
     */
    UserAddressConnector.prototype.delete = /**
     * @param {?} userId
     * @param {?} addressId
     * @return {?}
     */
    function (userId, addressId) {
        return this.adapter.delete(userId, addressId);
    };
    UserAddressConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    UserAddressConnector.ctorParameters = function () { return [
        { type: UserAddressAdapter }
    ]; };
    /** @nocollapse */ UserAddressConnector.ngInjectableDef = defineInjectable({ factory: function UserAddressConnector_Factory() { return new UserAddressConnector(inject(UserAddressAdapter)); }, token: UserAddressConnector, providedIn: "root" });
    return UserAddressConnector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddressVerificationEffect = /** @class */ (function () {
    function AddressVerificationEffect(actions$, userAddressConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userAddressConnector = userAddressConnector;
        this.verifyAddress$ = this.actions$.pipe(ofType(VERIFY_ADDRESS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.userAddressConnector.verify(payload.userId, payload.address).pipe(map(function (data) {
                return new VerifyAddressSuccess(data);
            }), catchError(function (error) { return of(new VerifyAddressFail(error)); }));
        }));
    }
    AddressVerificationEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AddressVerificationEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: UserAddressConnector }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], AddressVerificationEffect.prototype, "verifyAddress$", void 0);
    return AddressVerificationEffect;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var effects$4 = [
    CheckoutEffects,
    AddressVerificationEffect,
    CardTypesEffects,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$9 = {
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
function reducer$9(state, action) {
    if (state === void 0) { state = initialState$9; }
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
            return initialState$9;
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
        case LOAD_CHECKOUT_DETAILS_SUCCESS: {
            return __assign({}, state, { address: action.payload.deliveryAddress, deliveryMode: __assign({}, state.deliveryMode, { selected: action.payload.deliveryMode && action.payload.deliveryMode.code }), paymentDetails: action.payload.paymentInfo });
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
    return {
        steps: loaderReducer(CHECKOUT_DETAILS, reducer$9),
        cardTypes: reducer$6,
        addressVerification: reducer$7,
    };
}
/** @type {?} */
var reducerToken$5 = new InjectionToken('CheckoutReducers');
/** @type {?} */
var reducerProvider$5 = {
    provide: reducerToken$5,
    useFactory: getReducers$5,
};
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
        return this.checkoutStore.pipe(select(getSupportedDeliveryModes));
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
        return this.checkoutStore.pipe(select(getSelectedDeliveryMode));
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
        return this.checkoutStore.pipe(select(getSelectedCode));
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
        return this.checkoutStore.pipe(select(getAllCardTypes));
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
        return this.checkoutStore.pipe(select(getDeliveryAddress));
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
        return this.checkoutStore.pipe(select(getAddressVerificationResults$1), filter(function (results) { return Object.keys(results).length !== 0; }));
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
        return this.checkoutStore.pipe(select(getPaymentDetails));
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
        return this.checkoutStore.pipe(select(getCheckoutOrderDetails));
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
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    CheckoutService.prototype.loadCheckoutDetails = /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        this.checkoutStore.dispatch(new LoadCheckoutDetails({ userId: userId, cartId: cartId }));
    };
    /**
     * @return {?}
     */
    CheckoutService.prototype.getCheckoutDetailsLoaded = /**
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(getCheckoutDetailsLoaded));
    };
    /**
     * @protected
     * @return {?}
     */
    CheckoutService.prototype.actionAllowed = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.cartData.userId !== ANONYMOUS_USERID;
    };
    CheckoutService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CheckoutService.ctorParameters = function () { return [
        { type: Store },
        { type: CartDataService }
    ]; };
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
/** @type {?} */
var JSP_INCLUDE_CMS_COMPONENT_TYPE = 'JspIncludeComponent';
/** @type {?} */
var CMS_FLEX_COMPONENT_TYPE = 'CMSFlexComponent';
/**
 * @abstract
 */
var  /**
 * @abstract
 */
CmsConfig = /** @class */ (function (_super) {
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
    backend: {
        occ: {
            endpoints: {
                component: 'cms/components/${id}',
                components: 'cms/components?fields=${fields}',
                pages: 'cms/pages?fields=${fields}',
                page: 'cms/pages/${id}?fields=${fields}',
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
var  /**
 * The `CmsStructureConfig` is used to build pages in Spartacus by configuration
 * instead of using a backend CMS system. The configuration can be used to build
 * complete pages or parts of a page. The `CmsStructureConfig` is optimized to
 * only require the necessary properties. Adapter logic is applied to serialize
 * the `CmsStructureConfig` into the required UI model.
 * @abstract
 */
CmsStructureConfig = /** @class */ (function (_super) {
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
 * Abstract class that can be used to implement custom loader logic
 * in order to load CMS structure from third-party CMS system.
 * @abstract
 */
var  /**
 * Abstract class that can be used to implement custom loader logic
 * in order to load CMS structure from third-party CMS system.
 * @abstract
 */
CmsPageAdapter = /** @class */ (function () {
    function CmsPageAdapter() {
    }
    return CmsPageAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Service that provides access to CMS structure from a static
 * configuration or configuration file. This class uses static
 * configuration is designed in async fashion so that configurations
 * can be loaded from a file or stream.
 *
 * The intent of the `CmsStructureConfigService` however is to provide
 * fast loading pages and default cms structure for commodity commerce.
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
        return this.mergePage(pageId, pageStructure).pipe(switchMap(function (page) { return _this.mergeSlots(page); }));
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
        return this.getPageFromConfig(pageId).pipe(map(function (page) { return !!page && !!page.ignoreBackend; }));
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
        return of(this.getComponentById(componentId));
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
        return of(ids.map(function (id) { return _this.getComponentById(id); }));
    };
    /**
     * returns an observable with the `PageConfig`.
     */
    /**
     * returns an observable with the `PageConfig`.
     * @protected
     * @param {?} pageId
     * @return {?}
     */
    CmsStructureConfigService.prototype.getPageFromConfig = /**
     * returns an observable with the `PageConfig`.
     * @protected
     * @param {?} pageId
     * @return {?}
     */
    function (pageId) {
        return of(this.cmsDataConfig.cmsStructure && this.cmsDataConfig.cmsStructure.pages
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
     * @protected
     * @param {?} pageId
     * @param {?} pageStructure
     * @return {?}
     */
    CmsStructureConfigService.prototype.mergePage = /**
     * Merge page data from the configuration into the given structure, if any.
     * If the given page structure is empty, a page is created and the page slots are
     * are merged into the page.
     * @protected
     * @param {?} pageId
     * @param {?} pageStructure
     * @return {?}
     */
    function (pageId, pageStructure) {
        var _this = this;
        return this.getPageFromConfig(pageId).pipe(switchMap(function (page) {
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
                return of(pageStructure);
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
     * @protected
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
     * @protected
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
            return of(pageStructure);
        }
        try {
            for (var _c = __values(Object.keys(slots)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var position = _d.value;
                if (!Object.keys(pageStructure.page.slots).includes(position)) {
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
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return of(pageStructure);
    };
    /**
     * @protected
     * @param {?} slots
     * @param {?} position
     * @return {?}
     */
    CmsStructureConfigService.prototype.getComponentsByPosition = /**
     * @protected
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
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        return components;
    };
    /**
     * @protected
     * @param {?} componentId
     * @return {?}
     */
    CmsStructureConfigService.prototype.getComponentById = /**
     * @protected
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CmsStructureConfigService.ctorParameters = function () { return [
        { type: CmsStructureConfig }
    ]; };
    /** @nocollapse */ CmsStructureConfigService.ngInjectableDef = defineInjectable({ factory: function CmsStructureConfigService_Factory() { return new CmsStructureConfigService(inject(CmsStructureConfig)); }, token: CmsStructureConfigService, providedIn: "root" });
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
            .pipe(switchMap(function (loadFromConfig) {
            if (!loadFromConfig) {
                return _this.cmsPageAdapter.load(pageContext).pipe(catchError(function (error) {
                    if (error instanceof HttpErrorResponse &&
                        error.status === 400) {
                        return of({});
                    }
                    else {
                        return throwError(error);
                    }
                }));
            }
            else {
                return of({});
            }
        }), switchMap(function (page) { return _this.mergeDefaultPageStructure(pageContext, page); }));
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CmsPageConnector.ctorParameters = function () { return [
        { type: CmsPageAdapter },
        { type: CmsStructureConfigService }
    ]; };
    /** @nocollapse */ CmsPageConnector.ngInjectableDef = defineInjectable({ factory: function CmsPageConnector_Factory() { return new CmsPageConnector(inject(CmsPageAdapter), inject(CmsStructureConfigService)); }, token: CmsPageConnector, providedIn: "root" });
    return CmsPageConnector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CMS_PAGE_NORMALIZE = new InjectionToken('CmsPageNormalizer');

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
var  /**
 * @abstract
 */
CmsComponentAdapter = /** @class */ (function () {
    function CmsComponentAdapter() {
    }
    return CmsComponentAdapter;
}());

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
            .pipe(switchMap(function (configuredComponent) {
            return configuredComponent
                ? of(configuredComponent)
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
        return this.cmsStructureConfigService.getComponentsFromConfig(ids).pipe(switchMap(function (configuredComponents) {
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
                    .findComponentsByIds(missingIds, pageContext)
                    .pipe(map(function (loadedComponents) { return __spread(configuredComponents.filter(Boolean), loadedComponents); }));
            }
            else {
                return of(configuredComponents);
            }
        }));
    };
    CmsComponentConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CmsComponentConnector.ctorParameters = function () { return [
        { type: CmsStructureConfigService },
        { type: CmsComponentAdapter }
    ]; };
    /** @nocollapse */ CmsComponentConnector.ngInjectableDef = defineInjectable({ factory: function CmsComponentConnector_Factory() { return new CmsComponentConnector(inject(CmsStructureConfigService), inject(CmsComponentAdapter)); }, token: CmsComponentConnector, providedIn: "root" });
    return CmsComponentConnector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CMS_COMPONENT_NORMALIZER = new InjectionToken('CmsComponentNormalizer');

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
var  /**
 * @template T
 */
LoadComponentSuccess = /** @class */ (function (_super) {
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
var  /**
 * @template T
 */
GetComponentFromPage = /** @class */ (function (_super) {
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
var getCmsState = createFeatureSelector(CMS_FEATURE);

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
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    return Array.from(componentTypes);
};
/** @type {?} */
var getPageState = createSelector(getCmsState, function (state) { return state.page; });
/** @type {?} */
var getPageStateIndex = createSelector(getPageState, function (page) { return page.index; });
/** @type {?} */
var getIndex = function (pageContext) {
    return createSelector(getPageStateIndex, function (index) { return getIndexByType(index, pageContext.type); });
};
/** @type {?} */
var getIndexEntity = function (pageContext) {
    return createSelector(getIndex(pageContext), function (index) { return index.entities[pageContext.id] || {}; });
};
/** @type {?} */
var getPageEntities = createSelector(getPageState, getPageEntitiesSelector);
/** @type {?} */
var getPageData = function (pageContext) {
    return createSelector(getPageEntities, getIndexEntity(pageContext), function (entities, entity) {
        return entities[entity.value];
    });
};
/** @type {?} */
var getPageComponentTypes = function (pageContext) {
    return createSelector(getPageData(pageContext), function (pageData) { return getPageComponentTypesSelector(pageData); });
};
/** @type {?} */
var currentSlotSelectorFactory = function (pageContext, position) {
    return createSelector(getPageData(pageContext), function (entity) {
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
var getComponentState = createSelector(getCmsState, function (state) { return state.component; });
/** @type {?} */
var getComponentEntities = createSelector(getComponentState, getComponentEntitiesSelector);
/** @type {?} */
var componentStateSelectorFactory = function (uid) {
    return createSelector(getComponentState, function (entities) { return entityStateSelector(entities, uid); });
};
/** @type {?} */
var componentSelectorFactory = function (uid) {
    return createSelector(componentStateSelectorFactory(uid), function (state) { return loaderValueSelector(state); });
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getNavigationEntryItemState = createSelector(getCmsState, function (state) { return state.navigation; });
/** @type {?} */
var getSelectedNavigationEntryItemState = function (nodeId) {
    return createSelector(getNavigationEntryItemState, function (nodes) { return entityStateSelector(nodes, nodeId); });
};
/** @type {?} */
var itemsSelectorFactory = function (nodeId) {
    return createSelector(getSelectedNavigationEntryItemState(nodeId), function (itemState) { return loaderValueSelector(itemState); });
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
var initialState$a = undefined;
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$a(state, action) {
    if (state === void 0) { state = initialState$a; }
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
var initialState$b = { entities: {} };
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$b(state, action) {
    if (state === void 0) { state = initialState$b; }
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
var initialState$c = undefined;
/**
 * @param {?} entityType
 * @return {?}
 */
function reducer$c(entityType) {
    return function (state, action) {
        if (state === void 0) { state = initialState$c; }
        if (action.meta && action.meta.entityType === entityType) {
            switch (action.type) {
                case LOAD_PAGE_DATA_SUCCESS: {
                    return action.payload.pageId;
                }
                case LOAD_PAGE_DATA_FAIL: {
                    return initialState$c;
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
function getReducers$6() {
    return {
        page: combineReducers({
            pageData: reducer$b,
            index: combineReducers({
                content: entityLoaderReducer(PageType.CONTENT_PAGE, reducer$c(PageType.CONTENT_PAGE)),
                product: entityLoaderReducer(PageType.PRODUCT_PAGE, reducer$c(PageType.PRODUCT_PAGE)),
                category: entityLoaderReducer(PageType.CATEGORY_PAGE, reducer$c(PageType.CATEGORY_PAGE)),
                catalog: entityLoaderReducer(PageType.CATALOG_PAGE, reducer$c(PageType.CATALOG_PAGE)),
            }),
        }),
        component: entityLoaderReducer(COMPONENT_ENTITY),
        navigation: entityLoaderReducer(NAVIGATION_DETAIL_ENTITY, reducer$a),
    };
}
/** @type {?} */
var reducerToken$6 = new InjectionToken('CmsReducers');
/** @type {?} */
var reducerProvider$6 = {
    provide: reducerToken$6,
    useFactory: getReducers$6,
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
var metaReducers$3 = [clearCmsState];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageContext = /** @class */ (function () {
    function PageContext(id, type) {
        this.id = id;
        this.type = type;
    }
    return PageContext;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UrlPipe = /** @class */ (function () {
    function UrlPipe(urlService) {
        this.urlService = urlService;
    }
    /**
     * @param {?} commands
     * @return {?}
     */
    UrlPipe.prototype.transform = /**
     * @param {?} commands
     * @return {?}
     */
    function (commands) {
        return this.urlService.generateUrl(commands);
    };
    UrlPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'cxUrl',
                },] }
    ];
    /** @nocollapse */
    UrlPipe.ctorParameters = function () { return [
        { type: UrlService }
    ]; };
    return UrlPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UrlModule = /** @class */ (function () {
    function UrlModule() {
    }
    UrlModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [UrlPipe],
                    exports: [UrlPipe],
                },] }
    ];
    return UrlModule;
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
var PageEffects = /** @class */ (function () {
    function PageEffects(actions$, cmsPageConnector, routingService) {
        var _this = this;
        this.actions$ = actions$;
        this.cmsPageConnector = cmsPageConnector;
        this.routingService = routingService;
        this.refreshPage$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE, LOGOUT, LOGIN), switchMap(function (_) {
            return _this.routingService.getRouterState().pipe(filter(function (routerState) {
                return routerState &&
                    routerState.state &&
                    routerState.state.cmsRequired &&
                    !routerState.nextState;
            }), map(function (routerState) { return routerState.state.context; }), take(1), mergeMap(function (context) { return of(new LoadPageData(context)); }));
        }));
        this.loadPageData$ = this.actions$.pipe(ofType(LOAD_PAGE_DATA), map(function (action) { return action.payload; }), groupBy(function (pageContext) { return pageContext.type + pageContext.id; }), mergeMap(function (group) {
            return group.pipe(switchMap(function (pageContext) {
                return _this.cmsPageConnector.get(pageContext).pipe(mergeMap(function (cmsStructure) {
                    return [
                        new GetComponentFromPage(cmsStructure.components),
                        new LoadPageDataSuccess(pageContext, cmsStructure.page),
                    ];
                }), catchError(function (error) {
                    return of(new LoadPageDataFail(pageContext, error));
                }));
            }));
        }));
    }
    PageEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PageEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CmsPageConnector },
        { type: RoutingService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], PageEffects.prototype, "refreshPage$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
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
        this.loadComponent$ = this.actions$.pipe(ofType(LOAD_COMPONENT), map(function (action) { return action.payload; }), groupBy(function (uid) { return uid; }), mergeMap(function (group) {
            return group.pipe(switchMap(function (uid) {
                return _this.routingService.getRouterState().pipe(filter(function (routerState) { return routerState !== undefined; }), map(function (routerState) { return routerState.state.context; }), take(1), mergeMap(function (pageContext) {
                    return _this.cmsComponentLoader.get(uid, pageContext).pipe(map(function (data) { return new LoadComponentSuccess(data); }), catchError(function (error) {
                        return of(new LoadComponentFail(uid, error));
                    }));
                }));
            }));
        }));
    }
    ComponentEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ComponentEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CmsComponentConnector },
        { type: RoutingService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
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
        this.loadNavigationItems$ = this.actions$.pipe(ofType(LOAD_NAVIGATION_ITEMS), map(function (action) { return action.payload; }), map(function (payload) {
            return {
                ids: _this.getIdListByItemType(payload.items),
                nodeId: payload.nodeId,
            };
        }), mergeMap(function (data) {
            if (data.ids.componentIds.length > 0) {
                return _this.routingService.getRouterState().pipe(filter(function (routerState) { return routerState !== undefined; }), map(function (routerState) { return routerState.state.context; }), take(1), mergeMap(function (pageContext) {
                    // download all items in one request
                    return _this.cmsComponentConnector
                        .getList(data.ids.componentIds, pageContext)
                        .pipe(map(function (components) {
                        return new LoadNavigationItemsSuccess({
                            nodeId: data.nodeId,
                            components: components,
                        });
                    }), catchError(function (error) {
                        return of(new LoadNavigationItemsFail(data.nodeId, error));
                    }));
                }));
            }
            else if (data.ids.pageIds.length > 0) ;
            else if (data.ids.mediaIds.length > 0) ;
            else {
                return of(new LoadNavigationItemsFail(data.nodeId, 'navigation nodes are empty'));
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
        { type: Injectable }
    ];
    /** @nocollapse */
    NavigationEntryItemEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CmsComponentConnector },
        { type: RoutingService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], NavigationEntryItemEffects.prototype, "loadNavigationItems$", void 0);
    return NavigationEntryItemEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var effects$5 = [
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
         */
        function (value) {
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
            .pipe(switchMap(function (pageContext) {
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
            this.components[uid] = combineLatest(this.routingService.isNavigating(), this.store.pipe(select(componentStateSelectorFactory(uid)))).pipe(tap(function (_a) {
                var _b = __read(_a, 2), isNavigating = _b[0], componentState = _b[1];
                /** @type {?} */
                var attemptedLoad = componentState.loading ||
                    componentState.success ||
                    componentState.error;
                if (!attemptedLoad && !isNavigating) {
                    _this.store.dispatch(new LoadComponent(uid));
                }
            }), pluck(1), filter(function (componentState) { return componentState.success; }), pluck('value'), shareReplay({ bufferSize: 1, refCount: true }));
        }
        return (/** @type {?} */ (this.components[uid]));
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
        return this.routingService
            .getPageContext()
            .pipe(switchMap(function (pageContext) {
            return _this.store.pipe(select(currentSlotSelectorFactory(pageContext, position)));
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
        return this.store.pipe(select(itemsSelectorFactory(navigationNodeUid)));
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
            .pipe(take(1))
            .subscribe(function (pageContext) {
            return _this.store.dispatch(new LoadPageData(pageContext));
        });
    };
    /**
     * Refresh the cms page content by page Id
     * @param pageId
     */
    /**
     * Refresh the cms page content by page Id
     * @param {?} pageId
     * @return {?}
     */
    CmsService.prototype.refreshPageById = /**
     * Refresh the cms page content by page Id
     * @param {?} pageId
     * @return {?}
     */
    function (pageId) {
        /** @type {?} */
        var pageContext = { id: pageId };
        this.store.dispatch(new LoadPageData(pageContext));
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
        return this.store.pipe(select(getPageData(pageContext)));
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
        return this.store.pipe(select(getPageComponentTypes(pageContext)));
    };
    /**
     * Given pageContext, return whether the CMS page data exists or not
     * @param pageContext
     */
    /**
     * Given pageContext, return whether the CMS page data exists or not
     * @param {?} pageContext
     * @param {?=} forceReload
     * @return {?}
     */
    CmsService.prototype.hasPage = /**
     * Given pageContext, return whether the CMS page data exists or not
     * @param {?} pageContext
     * @param {?=} forceReload
     * @return {?}
     */
    function (pageContext, forceReload) {
        var _this = this;
        if (forceReload === void 0) { forceReload = false; }
        return this.store.pipe(select(getIndexEntity(pageContext)), tap(function (entity) {
            /** @type {?} */
            var attemptedLoad = entity.loading || entity.success || entity.error;
            /** @type {?} */
            var shouldReload = forceReload && !entity.loading;
            if (!attemptedLoad || shouldReload) {
                _this.store.dispatch(new LoadPageData(pageContext));
            }
        }), filter(function (entity) { return entity.success || entity.error; }), pluck('success'), catchError(function () { return of(false); }));
    };
    CmsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CmsService.ctorParameters = function () { return [
        { type: Store },
        { type: RoutingService }
    ]; };
    /** @nocollapse */ CmsService.ngInjectableDef = defineInjectable({ factory: function CmsService_Factory() { return new CmsService(inject(Store), inject(RoutingService)); }, token: CmsService, providedIn: "root" });
    return CmsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
PageMetaResolver = /** @class */ (function () {
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
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap(function (page) {
            /** @type {?} */
            var metaResolver = _this.getMetaResolver(page);
            if (metaResolver) {
                return metaResolver.resolve();
            }
            else {
                // we do not have a page resolver
                return of(null);
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    PageMetaService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Inject, args: [PageMetaResolver,] }] },
        { type: CmsService }
    ]; };
    /** @nocollapse */ PageMetaService.ngInjectableDef = defineInjectable({ factory: function PageMetaService_Factory() { return new PageMetaService(inject(PageMetaResolver), inject(CmsService)); }, token: PageMetaService, providedIn: "root" });
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        StateModule,
                        StoreModule.forFeature(CMS_FEATURE, reducerToken$6, { metaReducers: metaReducers$3 }),
                        EffectsModule.forFeature(effects$5),
                        ConfigModule.withConfigFactory(cmsStoreConfigFactory),
                    ],
                    providers: [reducerProvider$6],
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
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap(function (page) {
            return combineLatest([_this.resolveTitle(page), _this.resolveBreadcrumbs(page)]);
        }), map(function (_a) {
            var _b = __read(_a, 2), title = _b[0], breadcrumbs = _b[1];
            return ({ title: title, breadcrumbs: breadcrumbs });
        }));
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
        return of(page.title);
    };
    /**
     * @param {?} _page
     * @return {?}
     */
    ContentPageMetaResolver.prototype.resolveBreadcrumbs = /**
     * @param {?} _page
     * @return {?}
     */
    function (_page) {
        // as long as we do not have CMSX-8689 in place
        // we need specific resolvers for nested pages
        return of([{ label: 'Home', link: '/' }]);
    };
    ContentPageMetaResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ContentPageMetaResolver.ctorParameters = function () { return [
        { type: CmsService }
    ]; };
    /** @nocollapse */ ContentPageMetaResolver.ngInjectableDef = defineInjectable({ factory: function ContentPageMetaResolver_Factory() { return new ContentPageMetaResolver(inject(CmsService)); }, token: ContentPageMetaResolver, providedIn: "root" });
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
        { type: NgModule, args: [{
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmsModule = /** @class */ (function () {
    function CmsModule() {
    }
    CmsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CmsStoreModule, CmsPageTitleModule],
                    providers: [CmsService, { provide: CmsStructureConfig, useExisting: Config }],
                },] }
    ];
    return CmsModule;
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
            if (!this.missingComponents.includes(typeCode)) {
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
                if (isPlatformBrowser(_this.platform)) {
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
        { type: Injectable }
    ];
    /** @nocollapse */
    ComponentMapperService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: CmsConfig },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return ComponentMapperService;
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ DynamicAttributeService.ngInjectableDef = defineInjectable({ factory: function DynamicAttributeService_Factory() { return new DynamicAttributeService(); }, token: DynamicAttributeService, providedIn: "root" });
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CartPageMetaResolver = /** @class */ (function (_super) {
    __extends(CartPageMetaResolver, _super);
    function CartPageMetaResolver(cartService, cms) {
        var _this = _super.call(this) || this;
        _this.cartService = cartService;
        _this.cms = cms;
        _this.pageType = PageType.CONTENT_PAGE;
        _this.pageTemplate = 'CartPageTemplate';
        return _this;
    }
    /**
     * @return {?}
     */
    CartPageMetaResolver.prototype.resolve = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.cms.getCurrentPage().pipe(switchMap(function (page) {
            return combineLatest([_this.resolveTitle(page), _this.resolveRobots()]);
        }), map(function (_a) {
            var _b = __read(_a, 2), title = _b[0], robots = _b[1];
            return ({ title: title, robots: robots });
        }));
    };
    /**
     * @param {?} page
     * @return {?}
     */
    CartPageMetaResolver.prototype.resolveTitle = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        return this.cartService
            .getActive()
            .pipe(map(function (cart) {
            return cart && cart.code ? page.title + " (" + cart.code + ")" : page.title;
        }));
    };
    /**
     * @return {?}
     */
    CartPageMetaResolver.prototype.resolveRobots = /**
     * @return {?}
     */
    function () {
        return of([PageRobotsMeta.NOFOLLOW, PageRobotsMeta.NOINDEX]);
    };
    CartPageMetaResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CartPageMetaResolver.ctorParameters = function () { return [
        { type: CartService },
        { type: CmsService }
    ]; };
    /** @nocollapse */ CartPageMetaResolver.ngInjectableDef = defineInjectable({ factory: function CartPageMetaResolver_Factory() { return new CartPageMetaResolver(inject(CartService), inject(CmsService)); }, token: CartPageMetaResolver, providedIn: "root" });
    return CartPageMetaResolver;
}(PageMetaResolver));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckoutPageMetaResolver = /** @class */ (function (_super) {
    __extends(CheckoutPageMetaResolver, _super);
    function CheckoutPageMetaResolver(cartService) {
        var _this = _super.call(this) || this;
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
        return this.cartService.getActive().pipe(switchMap(function (cart) {
            return combineLatest([_this.resolveTitle(cart), _this.resolveRobots()]);
        }), map(function (_a) {
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
        return of("Checkout " + cart.totalItems + " items");
    };
    /**
     * @return {?}
     */
    CheckoutPageMetaResolver.prototype.resolveRobots = /**
     * @return {?}
     */
    function () {
        return of([PageRobotsMeta.NOFOLLOW, PageRobotsMeta.NOINDEX]);
    };
    CheckoutPageMetaResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CheckoutPageMetaResolver.ctorParameters = function () { return [
        { type: CartService }
    ]; };
    /** @nocollapse */ CheckoutPageMetaResolver.ngInjectableDef = defineInjectable({ factory: function CheckoutPageMetaResolver_Factory() { return new CheckoutPageMetaResolver(inject(CartService)); }, token: CheckoutPageMetaResolver, providedIn: "root" });
    return CheckoutPageMetaResolver;
}(PageMetaResolver));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckoutStoreModule = /** @class */ (function () {
    function CheckoutStoreModule() {
    }
    CheckoutStoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        StoreModule.forFeature(CHECKOUT_FEATURE, reducerToken$5, { metaReducers: metaReducers$2 }),
                        EffectsModule.forFeature(effects$4),
                    ],
                    providers: [reducerProvider$5],
                },] }
    ];
    return CheckoutStoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckoutModule = /** @class */ (function () {
    function CheckoutModule() {
    }
    CheckoutModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CheckoutStoreModule],
                    providers: [
                        CheckoutService,
                        {
                            provide: PageMetaResolver,
                            useExisting: CartPageMetaResolver,
                            multi: true,
                        },
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CxApiModule = /** @class */ (function () {
    function CxApiModule() {
    }
    CxApiModule.decorators = [
        { type: NgModule, args: [{},] }
    ];
    return CxApiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
ProductAdapter = /** @class */ (function () {
    function ProductAdapter() {
    }
    return ProductAdapter;
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ProductConnector.ctorParameters = function () { return [
        { type: ProductAdapter }
    ]; };
    /** @nocollapse */ ProductConnector.ngInjectableDef = defineInjectable({ factory: function ProductConnector_Factory() { return new ProductConnector(inject(ProductAdapter)); }, token: ProductConnector, providedIn: "root" });
    return ProductConnector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PRODUCT_NORMALIZER = new InjectionToken('ProductNormalizer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PRODUCT_REFERENCES_NORMALIZER = new InjectionToken('ProductReferencesListNormalizer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
ProductReferencesAdapter = /** @class */ (function () {
    function ProductReferencesAdapter() {
    }
    return ProductReferencesAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductReferencesConnector = /** @class */ (function () {
    function ProductReferencesConnector(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} productCode
     * @param {?=} referenceType
     * @param {?=} pageSize
     * @return {?}
     */
    ProductReferencesConnector.prototype.get = /**
     * @param {?} productCode
     * @param {?=} referenceType
     * @param {?=} pageSize
     * @return {?}
     */
    function (productCode, referenceType, pageSize) {
        return this.adapter.load(productCode, referenceType, pageSize);
    };
    ProductReferencesConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ProductReferencesConnector.ctorParameters = function () { return [
        { type: ProductReferencesAdapter }
    ]; };
    /** @nocollapse */ ProductReferencesConnector.ngInjectableDef = defineInjectable({ factory: function ProductReferencesConnector_Factory() { return new ProductReferencesConnector(inject(ProductReferencesAdapter)); }, token: ProductReferencesConnector, providedIn: "root" });
    return ProductReferencesConnector;
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
var  /**
 * @abstract
 */
ProductReviewsAdapter = /** @class */ (function () {
    function ProductReviewsAdapter() {
    }
    return ProductReviewsAdapter;
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ProductReviewsConnector.ctorParameters = function () { return [
        { type: ProductReviewsAdapter }
    ]; };
    /** @nocollapse */ ProductReviewsConnector.ngInjectableDef = defineInjectable({ factory: function ProductReviewsConnector_Factory() { return new ProductReviewsConnector(inject(ProductReviewsAdapter)); }, token: ProductReviewsConnector, providedIn: "root" });
    return ProductReviewsConnector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PRODUCT_REVIEW_NORMALIZER = new InjectionToken('ProductReviewNormalizer');
/** @type {?} */
var PRODUCT_REVIEW_SERIALIZER = new InjectionToken('ProductReviewSerializer');

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
var  /**
 * @abstract
 */
ProductSearchAdapter = /** @class */ (function () {
    function ProductSearchAdapter() {
    }
    return ProductSearchAdapter;
}());

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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ProductSearchConnector.ctorParameters = function () { return [
        { type: ProductSearchAdapter }
    ]; };
    /** @nocollapse */ ProductSearchConnector.ngInjectableDef = defineInjectable({ factory: function ProductSearchConnector_Factory() { return new ProductSearchConnector(inject(ProductSearchAdapter)); }, token: ProductSearchConnector, providedIn: "root" });
    return ProductSearchConnector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PRODUCT_SEARCH_PAGE_NORMALIZER = new InjectionToken('ProductSearchPageNormalizer');
/** @type {?} */
var PRODUCT_SUGGESTION_NORMALIZER = new InjectionToken('ProductSuggestionNormalizer');

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
var LOAD_PRODUCT_REFERENCES = '[Product] Load Product References Data';
/** @type {?} */
var LOAD_PRODUCT_REFERENCES_FAIL = '[Product] Load Product References Data Fail';
/** @type {?} */
var LOAD_PRODUCT_REFERENCES_SUCCESS = '[Product] Load Product References Data Success';
var LoadProductReferences = /** @class */ (function () {
    function LoadProductReferences(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REFERENCES;
    }
    return LoadProductReferences;
}());
var LoadProductReferencesFail = /** @class */ (function () {
    function LoadProductReferencesFail(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REFERENCES_FAIL;
    }
    return LoadProductReferencesFail;
}());
var LoadProductReferencesSuccess = /** @class */ (function () {
    function LoadProductReferencesSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REFERENCES_SUCCESS;
    }
    return LoadProductReferencesSuccess;
}());

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
var PRODUCT_FEATURE = 'product';
/** @type {?} */
var PRODUCT_DETAIL_ENTITY = '[Product] Detail Entity';

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductReferencesEffects = /** @class */ (function () {
    function ProductReferencesEffects(actions$, productReferencesConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.productReferencesConnector = productReferencesConnector;
        this.loadProductReferences$ = this.actions$.pipe(ofType(LOAD_PRODUCT_REFERENCES), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.productReferencesConnector
                .get(payload.productCode, payload.referenceType, payload.pageSize)
                .pipe(map(function (data) {
                return new LoadProductReferencesSuccess({
                    productCode: payload.productCode,
                    list: data,
                });
            }), catchError(function (_error) {
                return of(new LoadProductReferencesFail((/** @type {?} */ ({
                    message: payload.productCode,
                }))));
            }));
        }));
    }
    ProductReferencesEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductReferencesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: ProductReferencesConnector }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], ProductReferencesEffects.prototype, "loadProductReferences$", void 0);
    return ProductReferencesEffects;
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
        this.loadProductReviews$ = this.actions$.pipe(ofType(LOAD_PRODUCT_REVIEWS), map(function (action) { return action.payload; }), mergeMap(function (productCode) {
            return _this.productReviewsConnector.get(productCode).pipe(map(function (data) {
                return new LoadProductReviewsSuccess({
                    productCode: productCode,
                    list: data,
                });
            }), catchError(function (_error) {
                return of(new LoadProductReviewsFail((/** @type {?} */ ({
                    message: productCode,
                }))));
            }));
        }));
        this.postProductReview = this.actions$.pipe(ofType(POST_PRODUCT_REVIEW), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.productReviewsConnector
                .add(payload.productCode, payload.review)
                .pipe(map(function (reviewResponse) {
                return new PostProductReviewSuccess(reviewResponse);
            }), catchError(function (_error) {
                return of(new PostProductReviewFail(payload.productCode));
            }));
        }));
    }
    ProductReviewsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductReviewsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: ProductReviewsConnector }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], ProductReviewsEffects.prototype, "loadProductReviews$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], ProductReviewsEffects.prototype, "postProductReview", void 0);
    return ProductReviewsEffects;
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
        this.searchProducts$ = this.actions$.pipe(ofType(SEARCH_PRODUCTS), groupBy(function (action) { return action.auxiliary; }), mergeMap(function (group) {
            return group.pipe(switchMap(function (action) {
                return _this.productSearchConnector
                    .search(action.payload.queryText, action.payload.searchConfig)
                    .pipe(map(function (data) {
                    return new SearchProductsSuccess(data, action.auxiliary);
                }), catchError(function (error) {
                    return of(new SearchProductsFail(error, action.auxiliary));
                }));
            }));
        }));
        this.getProductSuggestions$ = this.actions$.pipe(ofType(GET_PRODUCT_SUGGESTIONS), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.productSearchConnector
                .getSuggestions(payload.term, payload.searchConfig.pageSize)
                .pipe(map(function (suggestions) {
                if (suggestions === undefined) {
                    return new GetProductSuggestionsSuccess([]);
                }
                return new GetProductSuggestionsSuccess(suggestions);
            }), catchError(function (error) {
                return of(new GetProductSuggestionsFail(error));
            }));
        }));
    }
    ProductsSearchEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductsSearchEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: ProductSearchConnector }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], ProductsSearchEffects.prototype, "searchProducts$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], ProductsSearchEffects.prototype, "getProductSuggestions$", void 0);
    return ProductsSearchEffects;
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
        this.loadProduct$ = this.actions$.pipe(ofType(LOAD_PRODUCT), map(function (action) { return action.payload; }), groupBy(function (productCode) { return productCode; }), mergeMap(function (group) {
            return group.pipe(switchMap(function (productCode) {
                return _this.productConnector.get(productCode).pipe(map(function (product) {
                    return new LoadProductSuccess(product);
                }), catchError(function (error) {
                    return of(new LoadProductFail(productCode, error));
                }));
            }));
        }));
    }
    ProductEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: ProductConnector }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], ProductEffects.prototype, "loadProduct$", void 0);
    return ProductEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var effects$6 = [
    ProductsSearchEffects,
    ProductEffects,
    ProductReviewsEffects,
    ProductReferencesEffects,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$d = {
    productCode: '',
    list: [],
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$d(state, action) {
    if (state === void 0) { state = initialState$d; }
    switch (action.type) {
        case LOAD_PRODUCT_REFERENCES_SUCCESS: {
            /** @type {?} */
            var productCode = action.payload.productCode;
            /** @type {?} */
            var list = action.payload.list;
            return __assign({}, state, { list: list,
                productCode: productCode });
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
    productCode: '',
    list: [],
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$e(state, action) {
    if (state === void 0) { state = initialState$e; }
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
/** @type {?} */
var initialState$f = {
    results: {},
    suggestions: [],
    auxResults: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$f(state, action) {
    if (state === void 0) { state = initialState$f; }
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
            return initialState$f;
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
/**
 * @return {?}
 */
function getReducers$7() {
    return {
        search: reducer$f,
        details: entityLoaderReducer(PRODUCT_DETAIL_ENTITY),
        reviews: reducer$e,
        references: reducer$d,
    };
}
/** @type {?} */
var reducerToken$7 = new InjectionToken('ProductReducers');
/** @type {?} */
var reducerProvider$7 = {
    provide: reducerToken$7,
    useFactory: getReducers$7,
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
var metaReducers$4 = [clearProductsState];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getProductsState = createFeatureSelector(PRODUCT_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getProductReferencesState = createSelector(getProductsState, function (state) { return state.references; });
/** @type {?} */
var getSelectedProductReferencesFactory = function (productCode) {
    return createSelector(getProductReferencesState, function (referenceTypeData) {
        if (referenceTypeData.productCode === productCode) {
            return referenceTypeData.list;
        }
    });
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getProductReviewsState = createSelector(getProductsState, function (state) { return state.reviews; });
/** @type {?} */
var getSelectedProductReviewsFactory = function (productCode) {
    return createSelector(getProductReviewsState, function (reviewData) {
        if (reviewData.productCode === productCode) {
            return reviewData.list;
        }
    });
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getProductsSearchState = createSelector(getProductsState, function (state) { return state.search; });
/** @type {?} */
var getSearchResults$1 = createSelector(getProductsSearchState, getSearchResults);
/** @type {?} */
var getAuxSearchResults$1 = createSelector(getProductsSearchState, getAuxSearchResults);
/** @type {?} */
var getProductSuggestions$1 = createSelector(getProductsSearchState, getProductSuggestions);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getProductState = createSelector(getProductsState, function (state) { return state.details; });
/** @type {?} */
var getSelectedProductsFactory = function (codes) {
    return createSelector(getProductState, function (details) {
        return codes
            .map(function (code) {
            return details.entities[code] ? details.entities[code].value : undefined;
        })
            .filter(function (product) { return product !== undefined; });
    });
};
/** @type {?} */
var getSelectedProductStateFactory = function (code) {
    return createSelector(getProductState, function (details) { return entityStateSelector(details, code); });
};
/** @type {?} */
var getSelectedProductFactory = function (code) {
    return createSelector(getSelectedProductStateFactory(code), function (productState) { return loaderValueSelector(productState); });
};
/** @type {?} */
var getSelectedProductLoadingFactory = function (code) {
    return createSelector(getSelectedProductStateFactory(code), function (productState) { return loaderLoadingSelector(productState); });
};
/** @type {?} */
var getSelectedProductSuccessFactory = function (code) {
    return createSelector(getSelectedProductStateFactory(code), function (productState) { return loaderSuccessSelector(productState); });
};
/** @type {?} */
var getSelectedProductErrorFactory = function (code) {
    return createSelector(getSelectedProductStateFactory(code), function (productState) { return loaderErrorSelector(productState); });
};
/** @type {?} */
var getAllProductCodes = createSelector(getProductState, function (details) {
    return Object.keys(details.entities);
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
var ProductReferenceService = /** @class */ (function () {
    function ProductReferenceService(store) {
        this.store = store;
    }
    /**
     * @param {?} productCode
     * @param {?=} referenceType
     * @param {?=} pageSize
     * @return {?}
     */
    ProductReferenceService.prototype.get = /**
     * @param {?} productCode
     * @param {?=} referenceType
     * @param {?=} pageSize
     * @return {?}
     */
    function (productCode, referenceType, pageSize) {
        var _this = this;
        return this.store.pipe(select(getSelectedProductReferencesFactory(productCode)), tap(function (references) {
            if (references === undefined && productCode !== undefined) {
                _this.store.dispatch(new LoadProductReferences({
                    productCode: productCode,
                    referenceType: referenceType,
                    pageSize: pageSize,
                }));
            }
        }));
    };
    ProductReferenceService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductReferenceService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return ProductReferenceService;
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
        return this.store.pipe(select(selector), tap(function (reviews) {
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
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductReviewService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return ProductReviewService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductSearchService = /** @class */ (function () {
    function ProductSearchService(store, router) {
        this.store = store;
        this.router = router;
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
        return this.store.pipe(select(getSearchResults$1));
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
        return this.store.pipe(select(getAuxSearchResults$1), filter(function (results) { return Object.keys(results).length > 0; }));
    };
    /**
     * @return {?}
     */
    ProductSearchService.prototype.getSearchSuggestions = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProductSuggestions$1));
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
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductSearchService.ctorParameters = function () { return [
        { type: Store },
        { type: Router }
    ]; };
    return ProductSearchService;
}());

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
            this.products[productCode] = this.store.pipe(select(getSelectedProductStateFactory(productCode)), tap(function (productState) {
                /** @type {?} */
                var attemptedLoad = productState.loading || productState.success || productState.error;
                if (!attemptedLoad) {
                    _this.store.dispatch(new LoadProduct(productCode));
                }
            }), map(function (productState) { return productState.value; }), shareReplay({ bufferSize: 1, refCount: true }));
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
        return this.store.pipe(select(getSelectedProductLoadingFactory(productCode)));
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
        return this.store.pipe(select(getSelectedProductSuccessFactory(productCode)));
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
        return this.store.pipe(select(getSelectedProductErrorFactory(productCode)));
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
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return ProductService;
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
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap(function (page) {
            // only the existence of a plp component tells us if products
            // are rendered or if this is an ordinary content page
            if (_this.hasProductListComponent(page)) {
                return _this.productSearchService.getSearchResults().pipe(filter(function (data) { return data.breadcrumbs && data.breadcrumbs.length > 0; }), switchMap(function (data) {
                    return combineLatest([
                        _this.resolveTitle(data),
                        _this.resolveBreadcrumbs(data),
                    ]);
                }), map(function (_a) {
                    var _b = __read(_a, 2), title = _b[0], breadcrumbs = _b[1];
                    return ({ title: title, breadcrumbs: breadcrumbs });
                }));
            }
            else {
                return of({
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
        return of(data.pagination.totalResults + " results for " + data.breadcrumbs[0].facetValueName);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    CategoryPageMetaResolver.prototype.resolveBreadcrumbs = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var e_1, _a;
        /** @type {?} */
        var breadcrumbs = [];
        breadcrumbs.push({ label: 'Home', link: '/' });
        try {
            for (var _b = __values(data.breadcrumbs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var br = _c.value;
                breadcrumbs.push({
                    label: br.facetValueName,
                    link: '/c/' + br.facetValueCode,
                });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return of(breadcrumbs);
    };
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    CategoryPageMetaResolver.prototype.hasProductListComponent = /**
     * @private
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CategoryPageMetaResolver.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ProductSearchService },
        { type: CmsService }
    ]; };
    /** @nocollapse */ CategoryPageMetaResolver.ngInjectableDef = defineInjectable({ factory: function CategoryPageMetaResolver_Factory() { return new CategoryPageMetaResolver(inject(RoutingService), inject(ProductSearchService), inject(CmsService)); }, token: CategoryPageMetaResolver, providedIn: "root" });
    return CategoryPageMetaResolver;
}(PageMetaResolver));

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
        return this.routingService.getRouterState().pipe(map(function (state) { return state.state.params['productCode']; }), filter(Boolean), switchMap(function (code) { return _this.productService.get(code); }), filter(Boolean), switchMap(function (p) {
            return combineLatest([
                _this.resolveHeading(p),
                _this.resolveTitle(p),
                _this.resolveDescription(p),
                _this.resolveBreadcrumbs(p),
                _this.resolveImage(p),
            ]);
        }), map(function (_a) {
            var _b = __read(_a, 5), heading = _b[0], title = _b[1], description = _b[2], breadcrumbs = _b[3], image = _b[4];
            return ({
                heading: heading,
                title: title,
                description: description,
                breadcrumbs: breadcrumbs,
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
        return of(product.name);
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
        return of(title);
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
        return of(product.summary);
    };
    /**
     * @param {?} product
     * @return {?}
     */
    ProductPageMetaResolver.prototype.resolveBreadcrumbs = /**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        var e_1, _a;
        /** @type {?} */
        var breadcrumbs = [];
        breadcrumbs.push({ label: 'Home', link: '/' });
        try {
            for (var _b = __values(product.categories), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                breadcrumbs.push({
                    label: c.name || c.code,
                    link: '/c/' + c.code,
                });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return of(breadcrumbs);
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
        return of(result);
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ProductPageMetaResolver.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ProductService }
    ]; };
    /** @nocollapse */ ProductPageMetaResolver.ngInjectableDef = defineInjectable({ factory: function ProductPageMetaResolver_Factory() { return new ProductPageMetaResolver(inject(RoutingService), inject(ProductService)); }, token: ProductPageMetaResolver, providedIn: "root" });
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
        var total$ = this.productSearchService.getSearchResults().pipe(filter(function (data) { return !!(data && data.pagination); }), map(function (results) { return results.pagination.totalResults; }));
        /** @type {?} */
        var query$ = this.routingService.getRouterState().pipe(map(function (state) { return state.state.params['query']; }), filter(Boolean));
        return combineLatest([total$, query$]).pipe(switchMap(function (_a) {
            var _b = __read(_a, 2), total = _b[0], query = _b[1];
            return _this.resolveTitle(total, query);
        }), map(function (title) { return ({ title: title }); }));
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
        return of(total + " results for \"" + query + "\"");
    };
    SearchPageMetaResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SearchPageMetaResolver.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ProductSearchService }
    ]; };
    /** @nocollapse */ SearchPageMetaResolver.ngInjectableDef = defineInjectable({ factory: function SearchPageMetaResolver_Factory() { return new SearchPageMetaResolver(inject(RoutingService), inject(ProductSearchService)); }, token: SearchPageMetaResolver, providedIn: "root" });
    return SearchPageMetaResolver;
}(PageMetaResolver));

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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        StoreModule.forFeature(PRODUCT_FEATURE, reducerToken$7, { metaReducers: metaReducers$4 }),
                        EffectsModule.forFeature(effects$6),
                        ConfigModule.withConfigFactory(productStoreConfigFactory),
                    ],
                    providers: [reducerProvider$7],
                },] }
    ];
    return ProductStoreModule;
}());

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
        { type: NgModule, args: [{
                    imports: [ProductStoreModule, CmsModule],
                    providers: __spread([
                        ProductService,
                        ProductSearchService,
                        ProductReviewService,
                        ProductReferenceService
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
/** @type {?} */
var getUserState = createFeatureSelector(USER_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getBillingCountriesState = createSelector(getUserState, function (state) { return state.billingCountries; });
/** @type {?} */
var getBillingCountriesEntites = createSelector(getBillingCountriesState, function (state) { return state.entities; });
/** @type {?} */
var getAllBillingCountries = createSelector(getBillingCountriesEntites, function (entites) { return Object.keys(entites).map(function (isocode) { return entites[isocode]; }); });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getDeliveryCountriesState = createSelector(getUserState, function (state) { return state.countries; });
/** @type {?} */
var getDeliveryCountriesEntites = createSelector(getDeliveryCountriesState, function (state) { return state.entities; });
/** @type {?} */
var getAllDeliveryCountries = createSelector(getDeliveryCountriesEntites, function (entites) { return Object.keys(entites).map(function (isocode) { return entites[isocode]; }); });
/** @type {?} */
var countrySelectorFactory = function (isocode) {
    return createSelector(getDeliveryCountriesEntites, function (entities) { return (Object.keys(entities).length !== 0 ? entities[isocode] : null); });
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getOrderState = createSelector(getUserState, function (state) { return state.order; });
/** @type {?} */
var getOrderDetails = createSelector(getOrderState, function (state) { return state.order; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getPaymentMethodsState = createSelector(getUserState, function (state) { return state.payments; });
/** @type {?} */
var getPaymentMethods = createSelector(getPaymentMethodsState, function (state) { return loaderValueSelector(state); });
/** @type {?} */
var getPaymentMethodsLoading = createSelector(getPaymentMethodsState, function (state) { return loaderLoadingSelector(state); });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getRegionsState = createSelector(getUserState, function (state) { return state.regions; });
/** @type {?} */
var getAllRegions = createSelector(getRegionsState, function (state) { return state.entities; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getResetPassword = createSelector(getUserState, function (state) { return state.resetPassword; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getTitlesState = createSelector(getUserState, function (state) { return state.titles; });
/** @type {?} */
var getTitlesEntites = createSelector(getTitlesState, function (state) { return state.entities; });
/** @type {?} */
var getAllTitles = createSelector(getTitlesEntites, function (entites) { return Object.keys(entites).map(function (code) { return entites[code]; }); });
/** @type {?} */
var titleSelectorFactory = function (code) {
    return createSelector(getTitlesEntites, function (entities) { return (Object.keys(entities).length !== 0 ? entities[code] : null); });
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getAddressesLoaderState = createSelector(getUserState, function (state) { return state.addresses; });
/** @type {?} */
var getAddresses = createSelector(getAddressesLoaderState, function (state) { return loaderValueSelector(state); });
/** @type {?} */
var getAddressesLoading = createSelector(getAddressesLoaderState, function (state) { return loaderLoadingSelector(state); });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getConsentsState = createSelector(getUserState, function (state) { return state.consents; });
/** @type {?} */
var getConsentsValue = createSelector(getConsentsState, loaderValueSelector);
/** @type {?} */
var getConsentsLoading = createSelector(getConsentsState, loaderLoadingSelector);
/** @type {?} */
var getConsentsSuccess = createSelector(getConsentsState, loaderSuccessSelector);
/** @type {?} */
var getConsentsError = createSelector(getConsentsState, loaderErrorSelector);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getDetailsState = createSelector(getUserState, function (state) { return state.account; });
/** @type {?} */
var getDetails = createSelector(getDetailsState, function (state) { return state.details; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getOrdersState = createSelector(getUserState, function (state) { return state.orders; });
/** @type {?} */
var getOrdersLoaded = createSelector(getOrdersState, function (state) { return loaderSuccessSelector(state); });
/** @type {?} */
var getOrders = createSelector(getOrdersState, function (state) { return loaderValueSelector(state); });

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
    return createFeatureSelector(PROCESS_FEATURE);
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
    return createSelector(getProcessState(), function (entityState) { return entityStateSelector(entityState, processId); });
}
/**
 * @template T
 * @param {?} processId
 * @return {?}
 */
function getProcessLoadingFactory(processId) {
    return createSelector(getProcessStateFactory(processId), function (loaderState) { return loaderLoadingSelector(loaderState); });
}
/**
 * @template T
 * @param {?} processId
 * @return {?}
 */
function getProcessSuccessFactory(processId) {
    return createSelector(getProcessStateFactory(processId), function (loaderState) { return loaderSuccessSelector(loaderState); });
}
/**
 * @template T
 * @param {?} processId
 * @return {?}
 */
function getProcessErrorFactory(processId) {
    return createSelector(getProcessStateFactory(processId), function (loaderState) { return loaderErrorSelector(loaderState); });
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
    if (state === void 0) { state = initialState$g; }
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
var initialState$h = {
    entities: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$h(state, action) {
    if (state === void 0) { state = initialState$h; }
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
            return initialState$h;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$i = {
    order: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$i(state, action) {
    if (state === void 0) { state = initialState$i; }
    switch (action.type) {
        case LOAD_ORDER_DETAILS_SUCCESS: {
            /** @type {?} */
            var order = action.payload;
            return __assign({}, state, { order: order });
        }
        case CLEAR_ORDER_DETAILS: {
            return initialState$i;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$j = [];
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$j(state, action) {
    if (state === void 0) { state = initialState$j; }
    switch (action.type) {
        case LOAD_USER_PAYMENT_METHODS_SUCCESS: {
            return action.payload ? action.payload : initialState$j;
        }
        case LOAD_USER_PAYMENT_METHODS_FAIL: {
            return initialState$j;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$k = {
    entities: [],
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$k(state, action) {
    if (state === void 0) { state = initialState$k; }
    switch (action.type) {
        case LOAD_REGIONS_SUCCESS: {
            /** @type {?} */
            var entities = action.payload;
            if (entities) {
                return __assign({}, state, { entities: entities });
            }
            return initialState$k;
        }
        case LOAD_REGIONS: {
            return __assign({}, state);
        }
        case CLEAR_MISCS_DATA: {
            return __assign({}, initialState$k);
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$l = false;
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$l(state, action) {
    if (state === void 0) { state = initialState$l; }
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
var initialState$m = {
    entities: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$m(state, action) {
    if (state === void 0) { state = initialState$m; }
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
            return initialState$m;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$n = [];
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$n(state, action) {
    if (state === void 0) { state = initialState$n; }
    switch (action.type) {
        case LOAD_USER_ADDRESSES_FAIL: {
            return initialState$n;
        }
        case LOAD_USER_ADDRESSES_SUCCESS: {
            return action.payload ? action.payload : initialState$n;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$o = {
    consentTemplates: [],
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$o(state, action) {
    if (state === void 0) { state = initialState$o; }
    switch (action.type) {
        case LOAD_USER_CONSENTS_SUCCESS: {
            /** @type {?} */
            var consents = action.payload;
            return consents ? consents : initialState$o;
        }
        case GIVE_USER_CONSENT_SUCCESS: {
            /** @type {?} */
            var updatedConsentTemplate_1 = action.consentTemplate;
            /** @type {?} */
            var updatedTemplates = state.consentTemplates.map(function (consentTemplate) {
                return consentTemplate.id === updatedConsentTemplate_1.id
                    ? updatedConsentTemplate_1
                    : consentTemplate;
            });
            return {
                consentTemplates: updatedTemplates,
            };
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$p = (/** @type {?} */ ({}));
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$p(state, action) {
    if (state === void 0) { state = initialState$p; }
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
var initialState$q = {
    orders: [],
    pagination: {},
    sorts: [],
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$q(state, action) {
    if (state === void 0) { state = initialState$q; }
    switch (action.type) {
        case LOAD_USER_ORDERS_SUCCESS: {
            return action.payload ? action.payload : initialState$q;
        }
        case LOAD_USER_ORDERS_FAIL: {
            return initialState$q;
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
function getReducers$8() {
    return {
        account: combineReducers({
            details: reducer$p,
        }),
        addresses: loaderReducer(USER_ADDRESSES, reducer$n),
        billingCountries: reducer$g,
        consents: loaderReducer(USER_CONSENTS, reducer$o),
        payments: loaderReducer(USER_PAYMENT_METHODS, reducer$j),
        orders: loaderReducer(USER_ORDERS, reducer$q),
        order: reducer$i,
        countries: reducer$h,
        titles: reducer$m,
        regions: reducer$k,
        resetPassword: reducer$l,
    };
}
/** @type {?} */
var reducerToken$8 = new InjectionToken('UserReducers');
/** @type {?} */
var reducerProvider$8 = {
    provide: reducerToken$8,
    useFactory: getReducers$8,
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
var metaReducers$5 = [clearUserState];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

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
        return this.store.pipe(select(getDetails));
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
        return this.store.pipe(select(getProcessLoadingFactory(REMOVE_USER_PROCESS_ID)));
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
        return this.store.pipe(select(getProcessErrorFactory(REMOVE_USER_PROCESS_ID)));
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
        return this.store.pipe(select(getProcessSuccessFactory(REMOVE_USER_PROCESS_ID)));
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
        return this.store.pipe(select(getOrderDetails));
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
        return this.store.pipe(select(getOrdersState), tap(function (orderListState) {
            /** @type {?} */
            var attemptedLoad = orderListState.loading ||
                orderListState.success ||
                orderListState.error;
            if (!attemptedLoad && !!userId) {
                _this.loadOrderList(userId, pageSize);
            }
        }), map(function (orderListState) { return orderListState.value; }));
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
        return this.store.pipe(select(getOrdersLoaded));
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
        return this.store.pipe(select(getPaymentMethods));
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
        return this.store.pipe(select(getPaymentMethodsLoading));
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
        return this.store.pipe(select(getAddresses));
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
        return this.store.pipe(select(getAddressesLoading));
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
        return this.store.pipe(select(getAllTitles));
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
        return this.store.pipe(select(getAllDeliveryCountries));
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
        return this.store.pipe(select(countrySelectorFactory(isocode)));
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
        return this.store.pipe(select(getAllRegions));
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
        return this.store.pipe(select(getAllBillingCountries));
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
        return this.store.pipe(select(getResetPassword));
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
        return this.store.pipe(select(getProcessLoadingFactory(UPDATE_USER_DETAILS_PROCESS_ID)));
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
        return this.store.pipe(select(getProcessErrorFactory(UPDATE_USER_DETAILS_PROCESS_ID)));
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
        return this.store.pipe(select(getProcessSuccessFactory(UPDATE_USER_DETAILS_PROCESS_ID)));
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
        return this.store.pipe(select(getProcessSuccessFactory(UPDATE_EMAIL_PROCESS_ID)));
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
        return this.store.pipe(select(getProcessErrorFactory(UPDATE_EMAIL_PROCESS_ID)));
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
        return this.store.pipe(select(getProcessLoadingFactory(UPDATE_EMAIL_PROCESS_ID)));
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
     * Returns the update password loading flag
     */
    /**
     * Returns the update password loading flag
     * @return {?}
     */
    UserService.prototype.getUpdatePasswordResultLoading = /**
     * Returns the update password loading flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessLoadingFactory(UPDATE_PASSWORD_PROCESS_ID)));
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
        return this.store.pipe(select(getProcessErrorFactory(UPDATE_PASSWORD_PROCESS_ID)));
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
        return this.store.pipe(select(getProcessSuccessFactory(UPDATE_PASSWORD_PROCESS_ID)));
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
    /**
     * Retrieves all consents
     * @param userId user ID for which to retrieve consents
     */
    /**
     * Retrieves all consents
     * @param {?} userId user ID for which to retrieve consents
     * @return {?}
     */
    UserService.prototype.loadConsents = /**
     * Retrieves all consents
     * @param {?} userId user ID for which to retrieve consents
     * @return {?}
     */
    function (userId) {
        this.store.dispatch(new LoadUserConsents(userId));
    };
    /**
     * Returns all consents
     */
    /**
     * Returns all consents
     * @return {?}
     */
    UserService.prototype.getConsents = /**
     * Returns all consents
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getConsentsValue));
    };
    /**
     * Returns the consents loading flag
     */
    /**
     * Returns the consents loading flag
     * @return {?}
     */
    UserService.prototype.getConsentsResultLoading = /**
     * Returns the consents loading flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getConsentsLoading));
    };
    /**
     * Returns the consents success flag
     */
    /**
     * Returns the consents success flag
     * @return {?}
     */
    UserService.prototype.getConsentsResultSuccess = /**
     * Returns the consents success flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getConsentsSuccess));
    };
    /**
     * Returns the consents error flag
     */
    /**
     * Returns the consents error flag
     * @return {?}
     */
    UserService.prototype.getConsentsResultError = /**
     * Returns the consents error flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getConsentsError));
    };
    /**
     * Resets the processing state for consent retrieval
     */
    /**
     * Resets the processing state for consent retrieval
     * @return {?}
     */
    UserService.prototype.resetConsentsProcessState = /**
     * Resets the processing state for consent retrieval
     * @return {?}
     */
    function () {
        this.store.dispatch(new ResetLoadUserConsents());
    };
    /**
     * Give consent for specified consent template ID and version.
     * @param userId and ID of a user giving the consent
     * @param consentTemplateId a template ID for which to give a consent
     * @param consentTemplateVersion a template version for which to give a consent
     */
    /**
     * Give consent for specified consent template ID and version.
     * @param {?} userId and ID of a user giving the consent
     * @param {?} consentTemplateId a template ID for which to give a consent
     * @param {?} consentTemplateVersion a template version for which to give a consent
     * @return {?}
     */
    UserService.prototype.giveConsent = /**
     * Give consent for specified consent template ID and version.
     * @param {?} userId and ID of a user giving the consent
     * @param {?} consentTemplateId a template ID for which to give a consent
     * @param {?} consentTemplateVersion a template version for which to give a consent
     * @return {?}
     */
    function (userId, consentTemplateId, consentTemplateVersion) {
        this.store.dispatch(new GiveUserConsent({
            userId: userId,
            consentTemplateId: consentTemplateId,
            consentTemplateVersion: consentTemplateVersion,
        }));
    };
    /**
     * Returns the give consent process loading flag
     */
    /**
     * Returns the give consent process loading flag
     * @return {?}
     */
    UserService.prototype.getGiveConsentResultLoading = /**
     * Returns the give consent process loading flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessLoadingFactory(GIVE_CONSENT_PROCESS_ID)));
    };
    /**
     * Returns the give consent process success flag
     */
    /**
     * Returns the give consent process success flag
     * @return {?}
     */
    UserService.prototype.getGiveConsentResultSuccess = /**
     * Returns the give consent process success flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessSuccessFactory(GIVE_CONSENT_PROCESS_ID)));
    };
    /**
     * Returns the give consent process error flag
     */
    /**
     * Returns the give consent process error flag
     * @return {?}
     */
    UserService.prototype.getGiveConsentResultError = /**
     * Returns the give consent process error flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessErrorFactory(GIVE_CONSENT_PROCESS_ID)));
    };
    /**
     * Resents the give consent process flags
     */
    /**
     * Resents the give consent process flags
     * @return {?}
     */
    UserService.prototype.resetGiveConsentProcessState = /**
     * Resents the give consent process flags
     * @return {?}
     */
    function () {
        return this.store.dispatch(new ResetGiveUserConsentProcess());
    };
    /**
     * Withdraw consent for the given `consentCode`
     * @param userId a user ID for which to withdraw the consent
     * @param consentCode for which to withdraw the consent
     */
    /**
     * Withdraw consent for the given `consentCode`
     * @param {?} userId a user ID for which to withdraw the consent
     * @param {?} consentCode for which to withdraw the consent
     * @return {?}
     */
    UserService.prototype.withdrawConsent = /**
     * Withdraw consent for the given `consentCode`
     * @param {?} userId a user ID for which to withdraw the consent
     * @param {?} consentCode for which to withdraw the consent
     * @return {?}
     */
    function (userId, consentCode) {
        this.store.dispatch(new WithdrawUserConsent({ userId: userId, consentCode: consentCode }));
    };
    /**
     * Returns the withdraw consent process loading flag
     */
    /**
     * Returns the withdraw consent process loading flag
     * @return {?}
     */
    UserService.prototype.getWithdrawConsentResultLoading = /**
     * Returns the withdraw consent process loading flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessLoadingFactory(WITHDRAW_CONSENT_PROCESS_ID)));
    };
    /**
     * Returns the withdraw consent process success flag
     */
    /**
     * Returns the withdraw consent process success flag
     * @return {?}
     */
    UserService.prototype.getWithdrawConsentResultSuccess = /**
     * Returns the withdraw consent process success flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessSuccessFactory(WITHDRAW_CONSENT_PROCESS_ID)));
    };
    /**
     * Returns the withdraw consent process error flag
     */
    /**
     * Returns the withdraw consent process error flag
     * @return {?}
     */
    UserService.prototype.getWithdrawConsentResultError = /**
     * Returns the withdraw consent process error flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessErrorFactory(WITHDRAW_CONSENT_PROCESS_ID)));
    };
    /**
     * Resets the process flags for withdraw consent
     */
    /**
     * Resets the process flags for withdraw consent
     * @return {?}
     */
    UserService.prototype.resetWithdrawConsentProcessState = /**
     * Resets the process flags for withdraw consent
     * @return {?}
     */
    function () {
        return this.store.dispatch(new ResetWithdrawUserConsentProcess());
    };
    UserService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserService.ctorParameters = function () { return [
        { type: Store }
    ]; };
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
function getReducers$9() {
    return entityLoaderReducer(PROCESS_FEATURE);
}
/** @type {?} */
var reducerToken$9 = new InjectionToken('ProcessReducers');
/** @type {?} */
var reducerProvider$9 = {
    provide: reducerToken$9,
    useFactory: getReducers$9,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProcessStoreModule = /** @class */ (function () {
    function ProcessStoreModule() {
    }
    ProcessStoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [StateModule, StoreModule.forFeature(PROCESS_FEATURE, reducerToken$9)],
                    providers: [reducerProvider$9],
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
        { type: NgModule, args: [{
                    imports: [ProcessStoreModule],
                },] }
    ];
    return ProcessModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
UserPaymentAdapter = /** @class */ (function () {
    function UserPaymentAdapter() {
    }
    return UserPaymentAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserPaymentConnector = /** @class */ (function () {
    function UserPaymentConnector(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    UserPaymentConnector.prototype.getAll = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        return this.adapter.loadAll(userId);
    };
    /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    UserPaymentConnector.prototype.delete = /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    function (userId, paymentMethodID) {
        return this.adapter.delete(userId, paymentMethodID);
    };
    /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    UserPaymentConnector.prototype.setDefault = /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    function (userId, paymentMethodID) {
        return this.adapter.setDefault(userId, paymentMethodID);
    };
    /**
     * @return {?}
     */
    UserPaymentConnector.prototype.getBillingCountries = /**
     * @return {?}
     */
    function () {
        return this.adapter.loadBillingCountries();
    };
    /**
     * @return {?}
     */
    UserPaymentConnector.prototype.getDeliveryCountries = /**
     * @return {?}
     */
    function () {
        return this.adapter.loadDeliveryCountries();
    };
    /**
     * @param {?} countryIsoCode
     * @return {?}
     */
    UserPaymentConnector.prototype.getRegions = /**
     * @param {?} countryIsoCode
     * @return {?}
     */
    function (countryIsoCode) {
        return this.adapter.loadRegions(countryIsoCode);
    };
    UserPaymentConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    UserPaymentConnector.ctorParameters = function () { return [
        { type: UserPaymentAdapter }
    ]; };
    /** @nocollapse */ UserPaymentConnector.ngInjectableDef = defineInjectable({ factory: function UserPaymentConnector_Factory() { return new UserPaymentConnector(inject(UserPaymentAdapter)); }, token: UserPaymentConnector, providedIn: "root" });
    return UserPaymentConnector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BillingCountriesEffect = /** @class */ (function () {
    function BillingCountriesEffect(actions$, userPaymentConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userPaymentConnector = userPaymentConnector;
        this.loadBillingCountries$ = this.actions$.pipe(ofType(LOAD_BILLING_COUNTRIES), switchMap(function () {
            return _this.userPaymentConnector.getBillingCountries().pipe(map(function (countries) { return new LoadBillingCountriesSuccess(countries); }), catchError(function (error) { return of(new LoadBillingCountriesFail(error)); }));
        }));
    }
    BillingCountriesEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BillingCountriesEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: UserPaymentConnector }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], BillingCountriesEffect.prototype, "loadBillingCountries$", void 0);
    return BillingCountriesEffect;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DeliveryCountriesEffects = /** @class */ (function () {
    function DeliveryCountriesEffects(actions$, userPaymentConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userPaymentConnector = userPaymentConnector;
        this.loadDeliveryCountries$ = this.actions$.pipe(ofType(LOAD_DELIVERY_COUNTRIES), switchMap(function () {
            return _this.userPaymentConnector.getDeliveryCountries().pipe(map(function (countries) { return new LoadDeliveryCountriesSuccess(countries); }), catchError(function (error) { return of(new LoadDeliveryCountriesFail(error)); }));
        }));
    }
    DeliveryCountriesEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DeliveryCountriesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserPaymentConnector }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], DeliveryCountriesEffects.prototype, "loadDeliveryCountries$", void 0);
    return DeliveryCountriesEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
UserAccountAdapter = /** @class */ (function () {
    function UserAccountAdapter() {
    }
    return UserAccountAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserAccountConnector = /** @class */ (function () {
    function UserAccountConnector(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} user
     * @return {?}
     */
    UserAccountConnector.prototype.register = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        return this.adapter.register(user);
    };
    /**
     * @param {?} userEmailAddress
     * @return {?}
     */
    UserAccountConnector.prototype.requestForgotPasswordEmail = /**
     * @param {?} userEmailAddress
     * @return {?}
     */
    function (userEmailAddress) {
        return this.adapter.requestForgotPasswordEmail(userEmailAddress);
    };
    /**
     * @param {?} token
     * @param {?} newPassword
     * @return {?}
     */
    UserAccountConnector.prototype.resetPassword = /**
     * @param {?} token
     * @param {?} newPassword
     * @return {?}
     */
    function (token, newPassword) {
        return this.adapter.resetPassword(token, newPassword);
    };
    /**
     * @param {?} userId
     * @param {?} currentPassword
     * @param {?} newUserId
     * @return {?}
     */
    UserAccountConnector.prototype.updateEmail = /**
     * @param {?} userId
     * @param {?} currentPassword
     * @param {?} newUserId
     * @return {?}
     */
    function (userId, currentPassword, newUserId) {
        return this.adapter.updateEmail(userId, currentPassword, newUserId);
    };
    /**
     * @param {?} userId
     * @param {?} oldPassword
     * @param {?} newPassword
     * @return {?}
     */
    UserAccountConnector.prototype.updatePassword = /**
     * @param {?} userId
     * @param {?} oldPassword
     * @param {?} newPassword
     * @return {?}
     */
    function (userId, oldPassword, newPassword) {
        return this.adapter.updatePassword(userId, oldPassword, newPassword);
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    UserAccountConnector.prototype.remove = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        return this.adapter.remove(userId);
    };
    /**
     * @return {?}
     */
    UserAccountConnector.prototype.getTitles = /**
     * @return {?}
     */
    function () {
        return this.adapter.loadTitles();
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    UserAccountConnector.prototype.loadConsents = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        return this.adapter.loadConsents(userId);
    };
    /**
     * @param {?} userId
     * @param {?} consentTemplateId
     * @param {?} consentTemplateVersion
     * @return {?}
     */
    UserAccountConnector.prototype.giveConsent = /**
     * @param {?} userId
     * @param {?} consentTemplateId
     * @param {?} consentTemplateVersion
     * @return {?}
     */
    function (userId, consentTemplateId, consentTemplateVersion) {
        return this.adapter.giveConsent(userId, consentTemplateId, consentTemplateVersion);
    };
    /**
     * @param {?} userId
     * @param {?} consentCode
     * @return {?}
     */
    UserAccountConnector.prototype.withdrawConsent = /**
     * @param {?} userId
     * @param {?} consentCode
     * @return {?}
     */
    function (userId, consentCode) {
        return this.adapter.withdrawConsent(userId, consentCode);
    };
    UserAccountConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    UserAccountConnector.ctorParameters = function () { return [
        { type: UserAccountAdapter }
    ]; };
    /** @nocollapse */ UserAccountConnector.ngInjectableDef = defineInjectable({ factory: function UserAccountConnector_Factory() { return new UserAccountConnector(inject(UserAccountAdapter)); }, token: UserAccountConnector, providedIn: "root" });
    return UserAccountConnector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ForgotPasswordEffects = /** @class */ (function () {
    function ForgotPasswordEffects(actions$, userAccountConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.requestForgotPasswordEmail$ = this.actions$.pipe(ofType(FORGOT_PASSWORD_EMAIL_REQUEST), map(function (action) {
            return action.payload;
        }), concatMap(function (userEmailAddress) {
            return _this.userAccountConnector
                .requestForgotPasswordEmail(userEmailAddress)
                .pipe(switchMap(function () { return [
                new ForgotPasswordEmailRequestSuccess(),
                new AddMessage({
                    text: { key: 'forgottenPassword.passwordResetEmailSent' },
                    type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
                }),
            ]; }), catchError(function (error) {
                return of(new ForgotPasswordEmailRequestFail(error));
            }));
        }));
    }
    ForgotPasswordEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ForgotPasswordEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserAccountConnector }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], ForgotPasswordEffects.prototype, "requestForgotPasswordEmail$", void 0);
    return ForgotPasswordEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OrderDetailsEffect = /** @class */ (function () {
    function OrderDetailsEffect(actions$, orderConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.orderConnector = orderConnector;
        this.loadOrderDetails$ = this.actions$.pipe(ofType(LOAD_ORDER_DETAILS), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.orderConnector.get(payload.userId, payload.orderCode).pipe(map(function (order) {
                return new LoadOrderDetailsSuccess(order);
            }), catchError(function (error) {
                return of(new LoadOrderDetailsFail(error));
            }));
        }));
    }
    OrderDetailsEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OrderDetailsEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: OrderConnector }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], OrderDetailsEffect.prototype, "loadOrderDetails$", void 0);
    return OrderDetailsEffect;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserPaymentMethodsEffects = /** @class */ (function () {
    function UserPaymentMethodsEffects(actions$, userPaymentMethodConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userPaymentMethodConnector = userPaymentMethodConnector;
        this.loadUserPaymentMethods$ = this.actions$.pipe(ofType(LOAD_USER_PAYMENT_METHODS), map(function (action) {
            return action.payload;
        }), mergeMap(function (payload) {
            return _this.userPaymentMethodConnector.getAll(payload).pipe(map(function (payments) {
                return new LoadUserPaymentMethodsSuccess(payments);
            }), catchError(function (error) {
                return of(new LoadUserPaymentMethodsFail(error));
            }));
        }));
        this.setDefaultUserPaymentMethod$ = this.actions$.pipe(ofType(SET_DEFAULT_USER_PAYMENT_METHOD), map(function (action) {
            return action.payload;
        }), mergeMap(function (payload) {
            return _this.userPaymentMethodConnector
                .setDefault(payload.userId, payload.paymentMethodId)
                .pipe(switchMap(function (data) {
                return [
                    new SetDefaultUserPaymentMethodSuccess(data),
                    new LoadUserPaymentMethods(payload.userId),
                ];
            }), catchError(function (error) {
                return of(new SetDefaultUserPaymentMethodFail(error));
            }));
        }));
        this.deleteUserPaymentMethod$ = this.actions$.pipe(ofType(DELETE_USER_PAYMENT_METHOD), map(function (action) {
            return action.payload;
        }), mergeMap(function (payload) {
            return _this.userPaymentMethodConnector
                .delete(payload.userId, payload.paymentMethodId)
                .pipe(switchMap(function (data) {
                return [
                    new DeleteUserPaymentMethodSuccess(data),
                    new LoadUserPaymentMethods(payload.userId),
                ];
            }), catchError(function (error) {
                return of(new DeleteUserPaymentMethodFail(error));
            }));
        }));
    }
    UserPaymentMethodsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserPaymentMethodsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserPaymentConnector }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserPaymentMethodsEffects.prototype, "loadUserPaymentMethods$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserPaymentMethodsEffects.prototype, "setDefaultUserPaymentMethod$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserPaymentMethodsEffects.prototype, "deleteUserPaymentMethod$", void 0);
    return UserPaymentMethodsEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RegionsEffects = /** @class */ (function () {
    function RegionsEffects(actions$, userPaymentConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userPaymentConnector = userPaymentConnector;
        this.loadRegions$ = this.actions$.pipe(ofType(LOAD_REGIONS), map(function (action) {
            return action.payload;
        }), switchMap(function (countryCode) {
            return _this.userPaymentConnector.getRegions(countryCode).pipe(map(function (regions) { return new LoadRegionsSuccess(regions); }), catchError(function (error) { return of(new LoadRegionsFail(error)); }));
        }));
    }
    RegionsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    RegionsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserPaymentConnector }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], RegionsEffects.prototype, "loadRegions$", void 0);
    return RegionsEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ResetPasswordEffects = /** @class */ (function () {
    function ResetPasswordEffects(actions$, userAccountConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.resetPassword$ = this.actions$.pipe(ofType(RESET_PASSWORD), map(function (action) {
            return action.payload;
        }), switchMap(function (_a) {
            var token = _a.token, password = _a.password;
            return _this.userAccountConnector.resetPassword(token, password).pipe(switchMap(function () { return [
                new ResetPasswordSuccess(),
                new AddMessage({
                    text: { key: 'forgottenPassword.passwordResetSuccess' },
                    type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
                }),
            ]; }), catchError(function (error) { return of(new ResetPasswordFail(error)); }));
        }));
    }
    ResetPasswordEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ResetPasswordEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserAccountConnector }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], ResetPasswordEffects.prototype, "resetPassword$", void 0);
    return ResetPasswordEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TitlesEffects = /** @class */ (function () {
    function TitlesEffects(actions$, userAccountConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.loadTitles$ = this.actions$.pipe(ofType(LOAD_TITLES), switchMap(function () {
            return _this.userAccountConnector.getTitles().pipe(map(function (titles) {
                /** @type {?} */
                var sortedTitles = _this.sortTitles(titles);
                return new LoadTitlesSuccess(sortedTitles);
            }), catchError(function (error) { return of(new LoadTitlesFail(error)); }));
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
        { type: Injectable }
    ];
    /** @nocollapse */
    TitlesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserAccountConnector }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], TitlesEffects.prototype, "loadTitles$", void 0);
    return TitlesEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UpdateEmailEffects = /** @class */ (function () {
    function UpdateEmailEffects(actions$, userAccountConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.updateEmail$ = this.actions$.pipe(ofType(UPDATE_EMAIL), map(function (action) { return action.payload; }), concatMap(function (payload) {
            return _this.userAccountConnector
                .updateEmail(payload.uid, payload.password, payload.newUid)
                .pipe(map(function () {
                return new UpdateEmailSuccessAction(payload.newUid);
            }), catchError(function (error) {
                return of(new UpdateEmailErrorAction(error));
            }));
        }));
    }
    UpdateEmailEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UpdateEmailEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserAccountConnector }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UpdateEmailEffects.prototype, "updateEmail$", void 0);
    return UpdateEmailEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UpdatePasswordEffects = /** @class */ (function () {
    function UpdatePasswordEffects(actions$, userAccountConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.updatePassword$ = this.actions$.pipe(ofType(UPDATE_PASSWORD), map(function (action) { return action.payload; }), concatMap(function (payload) {
            return _this.userAccountConnector
                .updatePassword(payload.userId, payload.oldPassword, payload.newPassword)
                .pipe(map(function (_) { return new UpdatePasswordSuccess(); }), catchError(function (error) { return of(new UpdatePasswordFail(error)); }));
        }));
    }
    UpdatePasswordEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UpdatePasswordEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserAccountConnector }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UpdatePasswordEffects.prototype, "updatePassword$", void 0);
    return UpdatePasswordEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserAddressesEffects = /** @class */ (function () {
    function UserAddressesEffects(actions$, userAddressConnector, userService, messageService) {
        var _this = this;
        this.actions$ = actions$;
        this.userAddressConnector = userAddressConnector;
        this.userService = userService;
        this.messageService = messageService;
        this.loadUserAddresses$ = this.actions$.pipe(ofType(LOAD_USER_ADDRESSES), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.userAddressConnector.getAll(payload).pipe(map(function (addresses) {
                return new LoadUserAddressesSuccess(addresses);
            }), catchError(function (error) {
                return of(new LoadUserAddressesFail(error));
            }));
        }));
        this.addUserAddress$ = this.actions$.pipe(ofType(ADD_USER_ADDRESS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.userAddressConnector
                .add(payload.userId, payload.address)
                .pipe(map(function (data) {
                return new AddUserAddressSuccess(data);
            }), catchError(function (error) {
                return of(new AddUserAddressFail(error));
            }));
        }));
        this.updateUserAddress$ = this.actions$.pipe(ofType(UPDATE_USER_ADDRESS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.userAddressConnector
                .update(payload.userId, payload.addressId, payload.address)
                .pipe(map(function (data) {
                return new UpdateUserAddressSuccess(data);
            }), catchError(function (error) {
                return of(new UpdateUserAddressFail(error));
            }));
        }));
        this.deleteUserAddress$ = this.actions$.pipe(ofType(DELETE_USER_ADDRESS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.userAddressConnector
                .delete(payload.userId, payload.addressId)
                .pipe(map(function (data) {
                return new DeleteUserAddressSuccess(data);
            }), catchError(function (error) {
                return of(new DeleteUserAddressFail(error));
            }));
        }));
        /**
         *  Reload addresses and notify about add success
         */
        this.showGlobalMessageOnAddSuccess$ = this.actions$.pipe(ofType(ADD_USER_ADDRESS_SUCCESS), tap(function () {
            _this.loadAddresses();
            _this.showGlobalMessage('addressForm.userAddressAddSuccess');
        }));
        /**
         *  Reload addresses and notify about update success
         */
        this.showGlobalMessageOnUpdateSuccess$ = this.actions$.pipe(ofType(UPDATE_USER_ADDRESS_SUCCESS), tap(function () {
            _this.loadAddresses();
            _this.showGlobalMessage('addressForm.userAddressUpdateSuccess');
        }));
        /**
         *  Reload addresses and notify about delete success
         */
        this.showGlobalMessageOnDeleteSuccess$ = this.actions$.pipe(ofType(DELETE_USER_ADDRESS_SUCCESS), tap(function () {
            _this.loadAddresses();
            _this.showGlobalMessage('addressForm.userAddressDeleteSuccess');
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
        this.messageService.add({ key: text }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
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
            .pipe(take(1))
            .subscribe(function (_a) {
            var uid = _a.uid;
            _this.userService.loadAddresses(uid);
        });
    };
    UserAddressesEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserAddressesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserAddressConnector },
        { type: UserService },
        { type: GlobalMessageService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserAddressesEffects.prototype, "loadUserAddresses$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserAddressesEffects.prototype, "addUserAddress$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserAddressesEffects.prototype, "updateUserAddress$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserAddressesEffects.prototype, "deleteUserAddress$", void 0);
    __decorate([
        Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], UserAddressesEffects.prototype, "showGlobalMessageOnAddSuccess$", void 0);
    __decorate([
        Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], UserAddressesEffects.prototype, "showGlobalMessageOnUpdateSuccess$", void 0);
    __decorate([
        Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], UserAddressesEffects.prototype, "showGlobalMessageOnDeleteSuccess$", void 0);
    return UserAddressesEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserConsentsEffect = /** @class */ (function () {
    function UserConsentsEffect(actions$, userAccountConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.getConsents$ = this.actions$.pipe(ofType(LOAD_USER_CONSENTS), map(function (action) { return action.payload; }), switchMap(function (userId) {
            return _this.userAccountConnector.loadConsents(userId).pipe(map(function (consents) { return new LoadUserConsentsSuccess(consents); }), catchError(function (error) { return of(new LoadUserConsentsFail(error)); }));
        }));
        this.giveConsent$ = this.actions$.pipe(ofType(GIVE_USER_CONSENT), map(function (action) { return action.payload; }), switchMap(function (_a) {
            var userId = _a.userId, consentTemplateId = _a.consentTemplateId, consentTemplateVersion = _a.consentTemplateVersion;
            return _this.userAccountConnector
                .giveConsent(userId, consentTemplateId, consentTemplateVersion)
                .pipe(map(function (consent) { return new GiveUserConsentSuccess(consent); }), catchError(function (error) { return of(new GiveUserConsentFail(error)); }));
        }));
        this.withdrawConsent$ = this.actions$.pipe(ofType(WITHDRAW_USER_CONSENT), map(function (action) { return action.payload; }), switchMap(function (_a) {
            var userId = _a.userId, consentCode = _a.consentCode;
            return _this.userAccountConnector.withdrawConsent(userId, consentCode).pipe(map(function (_) { return new WithdrawUserConsentSuccess(); }), catchError(function (error) { return of(new WithdrawUserConsentFail(error)); }));
        }));
    }
    UserConsentsEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserConsentsEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: UserAccountConnector }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserConsentsEffect.prototype, "getConsents$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserConsentsEffect.prototype, "giveConsent$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserConsentsEffect.prototype, "withdrawConsent$", void 0);
    return UserConsentsEffect;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
UserDetailsAdapter = /** @class */ (function () {
    function UserDetailsAdapter() {
    }
    return UserDetailsAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserDetailsConnector = /** @class */ (function () {
    function UserDetailsConnector(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    UserDetailsConnector.prototype.get = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        return this.adapter.load(userId);
    };
    /**
     * @param {?} username
     * @param {?} user
     * @return {?}
     */
    UserDetailsConnector.prototype.update = /**
     * @param {?} username
     * @param {?} user
     * @return {?}
     */
    function (username, user) {
        return this.adapter.update(username, user);
    };
    UserDetailsConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    UserDetailsConnector.ctorParameters = function () { return [
        { type: UserDetailsAdapter }
    ]; };
    /** @nocollapse */ UserDetailsConnector.ngInjectableDef = defineInjectable({ factory: function UserDetailsConnector_Factory() { return new UserDetailsConnector(inject(UserDetailsAdapter)); }, token: UserDetailsConnector, providedIn: "root" });
    return UserDetailsConnector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserDetailsEffects = /** @class */ (function () {
    function UserDetailsEffects(actions$, userDetailsConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userDetailsConnector = userDetailsConnector;
        this.loadUserDetails$ = this.actions$.pipe(ofType(LOAD_USER_DETAILS), map(function (action) { return action.payload; }), mergeMap(function (userId) {
            return _this.userDetailsConnector.get(userId).pipe(map(function (user) {
                return new LoadUserDetailsSuccess(user);
            }), catchError(function (error) {
                return of(new LoadUserDetailsFail(error));
            }));
        }));
        this.updateUserDetails$ = this.actions$.pipe(ofType(UPDATE_USER_DETAILS), map(function (action) { return action.payload; }), concatMap(function (payload) {
            return _this.userDetailsConnector
                .update(payload.username, payload.userDetails)
                .pipe(map(function (_) {
                return new UpdateUserDetailsSuccess(payload.userDetails);
            }), catchError(function (error) {
                return of(new UpdateUserDetailsFail(error));
            }));
        }));
    }
    UserDetailsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserDetailsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserDetailsConnector }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserDetailsEffects.prototype, "loadUserDetails$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserDetailsEffects.prototype, "updateUserDetails$", void 0);
    return UserDetailsEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserOrdersEffect = /** @class */ (function () {
    function UserOrdersEffect(actions$, orderConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.orderConnector = orderConnector;
        this.loadUserOrders$ = this.actions$.pipe(ofType(LOAD_USER_ORDERS), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.orderConnector
                .getHistory(payload.userId, payload.pageSize, payload.currentPage, payload.sort)
                .pipe(map(function (orders) {
                return new LoadUserOrdersSuccess(orders);
            }), catchError(function (error) {
                return of(new LoadUserOrdersFail(error));
            }));
        }));
        this.resetUserOrders$ = this.actions$.pipe(ofType(CLEAR_MISCS_DATA, CLEAR_USER_ORDERS), map(function () {
            return new LoaderResetAction(USER_ORDERS);
        }));
    }
    UserOrdersEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserOrdersEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: OrderConnector }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserOrdersEffect.prototype, "loadUserOrders$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserOrdersEffect.prototype, "resetUserOrders$", void 0);
    return UserOrdersEffect;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserRegisterEffects = /** @class */ (function () {
    function UserRegisterEffects(actions$, userAccountConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.registerUser$ = this.actions$.pipe(ofType(REGISTER_USER), map(function (action) { return action.payload; }), mergeMap(function (user) {
            return _this.userAccountConnector.register(user).pipe(switchMap(function (_result) { return [
                new LoadUserToken({
                    userId: user.uid,
                    password: user.password,
                }),
                new RegisterUserSuccess(),
            ]; }), catchError(function (error) { return of(new RegisterUserFail(error)); }));
        }));
        this.removeUser$ = this.actions$.pipe(ofType(REMOVE_USER), map(function (action) { return action.payload; }), mergeMap(function (userId) {
            return _this.userAccountConnector.remove(userId).pipe(switchMap(function (_result) { return [
                new RemoveUserSuccess(),
                new Logout(),
            ]; }), catchError(function (error) { return of(new RemoveUserFail(error)); }));
        }));
    }
    UserRegisterEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserRegisterEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserAccountConnector }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserRegisterEffects.prototype, "registerUser$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserRegisterEffects.prototype, "removeUser$", void 0);
    return UserRegisterEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var effects$7 = [
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
    UserConsentsEffect,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserStoreModule = /** @class */ (function () {
    function UserStoreModule() {
    }
    UserStoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        StateModule,
                        StoreModule.forFeature(USER_FEATURE, reducerToken$8, { metaReducers: metaReducers$5 }),
                        EffectsModule.forFeature(effects$7),
                        RouterModule,
                    ],
                    providers: [reducerProvider$8],
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
        { type: NgModule, args: [{
                    imports: [UserStoreModule, ProcessModule],
                    providers: [UserService],
                },] }
    ];
    return UserModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var USER_REGISTER_FORM_SERIALIZER = new InjectionToken('UserRegisterFormSerializer');
/** @type {?} */
var TITLE_NORMALIZER = new InjectionToken('TitleNormalizer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ADDRESS_NORMALIZER = new InjectionToken('AddressNormalizer');
/** @type {?} */
var ADDRESS_SERIALIZER = new InjectionToken('AddressSerializer');
/** @type {?} */
var ADDRESS_VALIDATION_NORMALIZER = new InjectionToken('AddressValidationNormalizer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var USER_NORMALIZER = new InjectionToken('UserNormalizer');
/** @type {?} */
var USER_SERIALIZER = new InjectionToken('UserSerializer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COUNTRY_NORMALIZER = new InjectionToken('CountryNormalizer');
/** @type {?} */
var REGION_NORMALIZER = new InjectionToken('RegionNormalizer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ORDER_NORMALIZER = new InjectionToken('OrderNormalizer');
/** @type {?} */
var ORDER_HISTORY_NORMALIZER = new InjectionToken('OrderHistoryNormalizer');

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
var  /**
 * @abstract
 */
I18nConfig = /** @class */ (function (_super) {
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
// type CxDatePipe, not DatePipe, due to conflict with Angular's DatePipe - problem occurs for the backward compatibility compiler of Ivy
var CxDatePipe = /** @class */ (function (_super) {
    __extends(CxDatePipe, _super);
    function CxDatePipe(language, config) {
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
    CxDatePipe.prototype.transform = /**
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
    CxDatePipe.prototype.getLang = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var lang = this.getActiveLang();
        try {
            getLocaleId(lang);
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
    CxDatePipe.prototype.getActiveLang = /**
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
    CxDatePipe.prototype.reportMissingLocaleData = /**
     * @private
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        if (!this.config.production) {
            console.warn("cxDate pipe: No locale data registered for '" + lang + "' (see https://angular.io/api/common/registerLocaleData).");
        }
    };
    CxDatePipe.decorators = [
        { type: Pipe, args: [{ name: 'cxDate' },] }
    ];
    /** @nocollapse */
    CxDatePipe.ctorParameters = function () { return [
        { type: LanguageService },
        { type: I18nConfig }
    ]; };
    return CxDatePipe;
}(DatePipe));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
TranslationService = /** @class */ (function () {
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
     * @param {?} input
     * @param {?=} options
     * @return {?}
     */
    TranslatePipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} options
     * @return {?}
     */
    function (input, options) {
        if (options === void 0) { options = {}; }
        if (((/** @type {?} */ (input))).raw) {
            return ((/** @type {?} */ (input))).raw;
        }
        /** @type {?} */
        var key = typeof input === 'string' ? input : input.key;
        if (typeof input !== 'string') {
            options = __assign({}, options, input.params);
        }
        this.translate(key, options);
        return this.translatedValue;
    };
    /**
     * @private
     * @param {?} key
     * @param {?} options
     * @return {?}
     */
    TranslatePipe.prototype.translate = /**
     * @private
     * @param {?} key
     * @param {?} options
     * @return {?}
     */
    function (key, options) {
        var _this = this;
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
        this.translatedValue = value;
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
        { type: Pipe, args: [{ name: 'cxTranslate', pure: false },] }
    ];
    /** @nocollapse */
    TranslatePipe.ctorParameters = function () { return [
        { type: TranslationService },
        { type: ChangeDetectorRef }
    ]; };
    return TranslatePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TranslationChunkService = /** @class */ (function () {
    function TranslationChunkService(config) {
        var _this = this;
        this.config = config;
        this.duplicates = {};
        this.chunks = {};
        this.KEY_SEPARATOR = '.';
        Object.keys(config.i18n.chunks).forEach(function (chunk) {
            config.i18n.chunks[chunk].forEach(function (key) {
                if (_this.chunks.hasOwnProperty(key)) {
                    if (!_this.duplicates[key]) {
                        _this.duplicates[key] = [_this.chunks[key]];
                    }
                    _this.duplicates[key].push(chunk);
                }
                else {
                    _this.chunks[key] = chunk;
                }
            });
        });
        if (Object.keys(this.duplicates).length > 0 && !this.config.production) {
            this.warnDuplicates(this.duplicates);
        }
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
        var chunk = this.chunks && this.chunks[mainKey];
        if (!chunk) {
            return mainKey; // fallback to main key as a chunk
        }
        return chunk;
    };
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    TranslationChunkService.prototype.warnDuplicates = /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        /** @type {?} */
        var dupes = [];
        Object.keys(items).forEach(function (key) {
            dupes.push("* '" + key + "' found in chunks: " + items[key].join(', ') + ". Used '" + _this.chunks[key] + "." + key + "'.");
        });
        console.warn("Duplicated keys has been found in the config of i18n chunks:\n" + dupes.join('\n'));
    };
    TranslationChunkService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TranslationChunkService.ctorParameters = function () { return [
        { type: I18nConfig }
    ]; };
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
    if (resources === void 0) { resources = {}; }
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
        provide: APP_INITIALIZER,
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
            common: [
                'common',
                'spinner',
                'header',
                'searchBox',
                'sorting',
                'httpHandlers',
            ],
            cart: ['cartDetails', 'cartItems', 'orderCost', 'miniCart'],
            address: ['addressForm', 'addressBook', 'addressCard'],
            payment: ['paymentForm', 'paymentMethods', 'paymentCard'],
            myAccount: ['orderDetails', 'orderHistory', 'closeAccount'],
            storeFinder: ['storeFinder'],
            pwa: ['pwa'],
            checkout: [
                'checkout',
                'checkoutAddress',
                'checkoutOrderConfirmation',
                'checkoutReview',
                'checkoutShipping',
                'checkoutProgress',
            ],
            product: [
                'productDetails',
                'productList',
                'productFacetNavigation',
                'productSummary',
                'productReview',
                'addToCart',
                'CMSTabParagraphContainer',
            ],
            user: [
                'forgottenPassword',
                'loginForm',
                'login',
                'register',
                'updateEmailForm',
                'updatePasswordForm',
                'updateProfileForm',
                'consentManagementForm',
            ],
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
        if (options === void 0) { options = {}; }
        if (whitespaceUntilLoaded === void 0) { whitespaceUntilLoaded = false; }
        // If we've already loaded the chunk (or failed to load), we should immediately emit the value
        // (or the fallback value in case the key is missing).
        // Moreover, we SHOULD emit a value (or a fallback value) synchronously (not in a promise/setTimeout).
        // Otherwise, we the will trigger additional deferred change detection in a view that consumes the returned observable,
        // which together with `switchMap` operator may lead to an infinite loop.
        /** @type {?} */
        var chunkName = this.translationChunk.getChunkNameForKey(key);
        /** @type {?} */
        var namespacedKey = this.getNamespacedKey(key, chunkName);
        return new Observable(function (subscriber) {
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
        { type: Injectable }
    ];
    /** @nocollapse */
    I18nextTranslationService.ctorParameters = function () { return [
        { type: I18nConfig },
        { type: TranslationChunkService }
    ]; };
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
        { type: NgModule, args: [{
                    declarations: [TranslatePipe, CxDatePipe],
                    exports: [TranslatePipe, CxDatePipe],
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
    if (options === void 0) { options = {}; }
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
     * @param {?} input
     * @param {?=} options
     * @return {?}
     */
    MockTranslatePipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} options
     * @return {?}
     */
    function (input, options) {
        if (options === void 0) { options = {}; }
        if (((/** @type {?} */ (input))).raw) {
            return ((/** @type {?} */ (input))).raw;
        }
        /** @type {?} */
        var key = typeof input === 'string' ? input : input.key;
        if (typeof input !== 'string') {
            options = __assign({}, options, input.params);
        }
        return mockTranslate(key, options);
    };
    MockTranslatePipe.decorators = [
        { type: Pipe, args: [{ name: 'cxTranslate' },] }
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
        if (options === void 0) { options = {}; }
        if (_whitespaceUntilLoaded === void 0) { _whitespaceUntilLoaded = false; }
        return new Observable(function (subscriber) {
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
        { type: Injectable }
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
        { type: Pipe, args: [{ name: 'cxDate' },] }
    ];
    return MockDatePipe;
}(DatePipe));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var I18nTestingModule = /** @class */ (function () {
    function I18nTestingModule() {
    }
    I18nTestingModule.decorators = [
        { type: NgModule, args: [{
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CxApiService.ctorParameters = function () { return [
        { type: AuthService, decorators: [{ type: Optional }] },
        { type: CmsService, decorators: [{ type: Optional }] },
        { type: RoutingService, decorators: [{ type: Optional }] },
        { type: CurrencyService, decorators: [{ type: Optional }] },
        { type: LanguageService, decorators: [{ type: Optional }] },
        { type: ProductService, decorators: [{ type: Optional }] },
        { type: ProductSearchService, decorators: [{ type: Optional }] },
        { type: ProductReviewService, decorators: [{ type: Optional }] },
        { type: UserService, decorators: [{ type: Optional }] },
        { type: TranslationService, decorators: [{ type: Optional }] }
    ]; };
    /** @nocollapse */ CxApiService.ngInjectableDef = defineInjectable({ factory: function CxApiService_Factory() { return new CxApiService(inject(AuthService, 8), inject(CmsService, 8), inject(RoutingService, 8), inject(CurrencyService, 8), inject(LanguageService, 8), inject(ProductService, 8), inject(ProductSearchService, 8), inject(ProductReviewService, 8), inject(UserService, 8), inject(TranslationService, 8)); }, token: CxApiService, providedIn: "root" });
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
/** @type {?} */
var OCC_BASE_URL_META_TAG_NAME = 'occ-backend-base-url';
/** @type {?} */
var OCC_BASE_URL_META_TAG_PLACEHOLDER = 'OCC_BACKEND_BASE_URL_VALUE';
/** @type {?} */
var MEDIA_BASE_URL_META_TAG_NAME = 'media-backend-base-url';
/** @type {?} */
var MEDIA_BASE_URL_META_TAG_PLACEHOLDER = 'MEDIA_BACKEND_BASE_URL_VALUE';
/**
 * @param {?} meta
 * @return {?}
 */
function occServerConfigFromMetaTagFactory(meta) {
    /** @type {?} */
    var baseUrl = getMetaTagContent(OCC_BASE_URL_META_TAG_NAME, meta);
    return baseUrl && baseUrl !== OCC_BASE_URL_META_TAG_PLACEHOLDER
        ? { backend: { occ: { baseUrl: baseUrl } } }
        : {};
}
/**
 * @param {?} meta
 * @return {?}
 */
function mediaServerConfigFromMetaTagFactory(meta) {
    /** @type {?} */
    var baseUrl = getMetaTagContent(MEDIA_BASE_URL_META_TAG_NAME, meta);
    return baseUrl && baseUrl !== MEDIA_BASE_URL_META_TAG_PLACEHOLDER
        ? { backend: { media: { baseUrl: baseUrl } } }
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
        media: {},
    },
};

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Occ;
(function (Occ) {
    /**
     *
     * An interface representing Country.
     * @record
     */
    function Country() { }
    Occ.Country = Country;
    /**
     *
     * An interface representing Region.
     * @record
     */
    function Region() { }
    Occ.Region = Region;
    /**
     *
     * An interface representing RegionList.
     * @record
     */
    function RegionList() { }
    Occ.RegionList = RegionList;
    /**
     *
     * An interface representing Address.
     * @record
     */
    function Address() { }
    Occ.Address = Address;
    /**
     *
     * An interface representing AddressList.
     * @record
     */
    function AddressList() { }
    Occ.AddressList = AddressList;
    /**
     *
     * An interface representing ErrorModel.
     * Error message
     *
     * @record
     */
    function ErrorModel() { }
    Occ.ErrorModel = ErrorModel;
    /**
     *
     * An interface representing ErrorList.
     * List of errors
     *
     * @record
     */
    function ErrorList() { }
    Occ.ErrorList = ErrorList;
    /**
     *
     * An interface representing AddressValidation.
     * @record
     */
    function AddressValidation() { }
    Occ.AddressValidation = AddressValidation;
    /**
     *
     * An interface representing Price.
     * @record
     */
    function Price() { }
    Occ.Price = Price;
    /**
     *
     * An interface representing Stock.
     * @record
     */
    function Stock() { }
    Occ.Stock = Stock;
    /**
     *
     * An interface representing Image.
     * @record
     */
    function Image() { }
    Occ.Image = Image;
    /**
     *
     * An interface representing VariantOptionQualifier.
     * @record
     */
    function VariantOptionQualifier() { }
    Occ.VariantOptionQualifier = VariantOptionQualifier;
    /**
     *
     * An interface representing VariantOption.
     * @record
     */
    function VariantOption() { }
    Occ.VariantOption = VariantOption;
    /**
     *
     * An interface representing BaseOption.
     * @record
     */
    function BaseOption() { }
    Occ.BaseOption = BaseOption;
    /**
     *
     * An interface representing SearchQuery.
     * @record
     */
    function SearchQuery() { }
    Occ.SearchQuery = SearchQuery;
    /**
     *
     * An interface representing SearchState.
     * @record
     */
    function SearchState() { }
    Occ.SearchState = SearchState;
    /**
     *
     * An interface representing Breadcrumb.
     * @record
     */
    function Breadcrumb() { }
    Occ.Breadcrumb = Breadcrumb;
    /**
     *
     * An interface representing Component.
     * @record
     */
    function Component() { }
    Occ.Component = Component;
    /**
     *
     * An interface representing ComponentList.
     * @record
     */
    function ComponentList() { }
    Occ.ComponentList = ComponentList;
    /**
     *
     * An interface representing ContentSlot.
     * @record
     */
    function ContentSlot() { }
    Occ.ContentSlot = ContentSlot;
    /**
     *
     * An interface representing ContentSlotList.
     * @record
     */
    function ContentSlotList() { }
    Occ.ContentSlotList = ContentSlotList;
    /**
     *
     * An interface representing CMSPage.
     * @record
     */
    function CMSPage() { }
    Occ.CMSPage = CMSPage;
    /**
     *
     * An interface representing CardType.
     * @record
     */
    function CardType() { }
    Occ.CardType = CardType;
    /**
     *
     * An interface representing CardTypeList.
     * @record
     */
    function CardTypeList() { }
    Occ.CardTypeList = CardTypeList;
    /**
     *
     * An interface representing PromotionOrderEntryConsumed.
     * @record
     */
    function PromotionOrderEntryConsumed() { }
    Occ.PromotionOrderEntryConsumed = PromotionOrderEntryConsumed;
    /**
     *
     * An interface representing PromotionRestriction.
     * @record
     */
    function PromotionRestriction() { }
    Occ.PromotionRestriction = PromotionRestriction;
    /**
     *
     * An interface representing Promotion.
     * @record
     */
    function Promotion() { }
    Occ.Promotion = Promotion;
    /**
     *
     * An interface representing PromotionResult.
     * @record
     */
    function PromotionResult() { }
    Occ.PromotionResult = PromotionResult;
    /**
     *
     * An interface representing Currency.
     * @record
     */
    function Currency() { }
    Occ.Currency = Currency;
    /**
     *
     * An interface representing Voucher.
     * @record
     */
    function Voucher() { }
    Occ.Voucher = Voucher;
    /**
     *
     * An interface representing DeliveryMode.
     * @record
     */
    function DeliveryMode() { }
    Occ.DeliveryMode = DeliveryMode;
    /**
     *
     * An interface representing GeoPoint.
     * @record
     */
    function GeoPoint() { }
    Occ.GeoPoint = GeoPoint;
    /**
     *
     * An interface representing Time.
     * @record
     */
    function Time() { }
    Occ.Time = Time;
    /**
     *
     * An interface representing SpecialOpeningDay.
     * @record
     */
    function SpecialOpeningDay() { }
    Occ.SpecialOpeningDay = SpecialOpeningDay;
    /**
     *
     * An interface representing WeekdayOpeningDay.
     * @record
     */
    function WeekdayOpeningDay() { }
    Occ.WeekdayOpeningDay = WeekdayOpeningDay;
    /**
     *
     * An interface representing OpeningSchedule.
     * @record
     */
    function OpeningSchedule() { }
    Occ.OpeningSchedule = OpeningSchedule;
    /**
     *
     * An interface representing PointOfService.
     * @record
     */
    function PointOfService() { }
    Occ.PointOfService = PointOfService;
    /**
     *
     * An interface representing Category.
     * @record
     */
    function Category() { }
    Occ.Category = Category;
    /**
     *
     * An interface representing FeatureUnit.
     * @record
     */
    function FeatureUnit() { }
    Occ.FeatureUnit = FeatureUnit;
    /**
     *
     * An interface representing FeatureValue.
     * @record
     */
    function FeatureValue() { }
    Occ.FeatureValue = FeatureValue;
    /**
     *
     * An interface representing Feature.
     * @record
     */
    function Feature() { }
    Occ.Feature = Feature;
    /**
     *
     * An interface representing Classification.
     * @record
     */
    function Classification() { }
    Occ.Classification = Classification;
    /**
     *
     * An interface representing FutureStock.
     * @record
     */
    function FutureStock() { }
    Occ.FutureStock = FutureStock;
    /**
     *
     * An interface representing PriceRange.
     * @record
     */
    function PriceRange() { }
    Occ.PriceRange = PriceRange;
    /**
     *
     * An interface representing ProductReference.
     * @record
     */
    function ProductReference() { }
    Occ.ProductReference = ProductReference;
    /**
     *
     * An interface representing Language.
     * @record
     */
    function Language() { }
    Occ.Language = Language;
    /**
     *
     * An interface representing User.
     * @record
     */
    function User() { }
    Occ.User = User;
    /**
     *
     * An interface representing Review.
     * @record
     */
    function Review() { }
    Occ.Review = Review;
    /**
     *
     * An interface representing VariantCategory.
     * @record
     */
    function VariantCategory() { }
    Occ.VariantCategory = VariantCategory;
    /**
     *
     * An interface representing VariantValueCategory.
     * @record
     */
    function VariantValueCategory() { }
    Occ.VariantValueCategory = VariantValueCategory;
    /**
     *
     * An interface representing VariantMatrixElement.
     * @record
     */
    function VariantMatrixElement() { }
    Occ.VariantMatrixElement = VariantMatrixElement;
    /**
     *
     * An interface representing Product.
     * @record
     */
    function Product() { }
    Occ.Product = Product;
    /**
     *
     * An interface representing OrderEntry.
     * @record
     */
    function OrderEntry() { }
    Occ.OrderEntry = OrderEntry;
    /**
     *
     * An interface representing DeliveryOrderEntryGroup.
     * @record
     */
    function DeliveryOrderEntryGroup() { }
    Occ.DeliveryOrderEntryGroup = DeliveryOrderEntryGroup;
    /**
     *
     * An interface representing PaymentDetails.
     * @record
     */
    function PaymentDetails() { }
    Occ.PaymentDetails = PaymentDetails;
    /**
     *
     * An interface representing PickupOrderEntryGroup.
     * @record
     */
    function PickupOrderEntryGroup() { }
    Occ.PickupOrderEntryGroup = PickupOrderEntryGroup;
    /**
     *
     * An interface representing Principal.
     * @record
     */
    function Principal() { }
    Occ.Principal = Principal;
    /**
     *
     * An interface representing Cart.
     * @record
     */
    function Cart() { }
    Occ.Cart = Cart;
    /**
     *
     * An interface representing CartList.
     * @record
     */
    function CartList() { }
    Occ.CartList = CartList;
    /**
     *
     * An interface representing CartModification.
     * @record
     */
    function CartModification() { }
    Occ.CartModification = CartModification;
    /**
     *
     * An interface representing CategoryHierarchy.
     * @record
     */
    function CategoryHierarchy() { }
    Occ.CategoryHierarchy = CategoryHierarchy;
    /**
     *
     * An interface representing CatalogVersion.
     * @record
     */
    function CatalogVersion() { }
    Occ.CatalogVersion = CatalogVersion;
    /**
     *
     * An interface representing Catalog.
     * @record
     */
    function Catalog() { }
    Occ.Catalog = Catalog;
    /**
     *
     * An interface representing CatalogList.
     * @record
     */
    function CatalogList() { }
    Occ.CatalogList = CatalogList;
    /**
     *
     * An interface representing ComponentIDList.
     * @record
     */
    function ComponentIDList() { }
    Occ.ComponentIDList = ComponentIDList;
    /**
     *
     * An interface representing ConsignmentEntry.
     * @record
     */
    function ConsignmentEntry() { }
    Occ.ConsignmentEntry = ConsignmentEntry;
    /**
     *
     * An interface representing Consignment.
     * @record
     */
    function Consignment() { }
    Occ.Consignment = Consignment;
    /**
     *
     * An interface representing CountryList.
     * @record
     */
    function CountryList() { }
    Occ.CountryList = CountryList;
    /**
     *
     * An interface representing CurrencyList.
     * @record
     */
    function CurrencyList() { }
    Occ.CurrencyList = CurrencyList;
    /**
     *
     * An interface representing DeliveryModeList.
     * @record
     */
    function DeliveryModeList() { }
    Occ.DeliveryModeList = DeliveryModeList;
    /**
     *
     * An interface representing FacetValue.
     * @record
     */
    function FacetValue() { }
    Occ.FacetValue = FacetValue;
    /**
     *
     * An interface representing Facet.
     * @record
     */
    function Facet() { }
    Occ.Facet = Facet;
    /**
     *
     * An interface representing LanguageList.
     * @record
     */
    function LanguageList() { }
    Occ.LanguageList = LanguageList;
    /**
     *
     * An interface representing Pagination.
     * Pagination info
     *
     * @record
     */
    function Pagination() { }
    Occ.Pagination = Pagination;
    /**
     *
     * An interface representing Sort.
     * Sort option
     *
     * @record
     */
    function Sort() { }
    Occ.Sort = Sort;
    /**
     *
     * An interface representing ListAdaptedComponents.
     * @record
     */
    function ListAdaptedComponents() { }
    Occ.ListAdaptedComponents = ListAdaptedComponents;
    /**
     *
     * An interface representing MemberList.
     * @record
     */
    function MemberList() { }
    Occ.MemberList = MemberList;
    /**
     *
     * An interface representing OrderEntryList.
     * @record
     */
    function OrderEntryList() { }
    Occ.OrderEntryList = OrderEntryList;
    /**
     *
     * An interface representing OrderHistory.
     * @record
     */
    function OrderHistory() { }
    Occ.OrderHistory = OrderHistory;
    /**
     *
     * An interface representing PaginationModel.
     * @record
     */
    function PaginationModel() { }
    Occ.PaginationModel = PaginationModel;
    /**
     *
     * An interface representing SortModel.
     * @record
     */
    function SortModel() { }
    Occ.SortModel = SortModel;
    /**
     *
     * An interface representing OrderHistoryList.
     * @record
     */
    function OrderHistoryList() { }
    Occ.OrderHistoryList = OrderHistoryList;
    /**
     *
     * An interface representing OrderStatusUpdateElement.
     * @record
     */
    function OrderStatusUpdateElement() { }
    Occ.OrderStatusUpdateElement = OrderStatusUpdateElement;
    /**
     *
     * An interface representing OrderStatusUpdateElementList.
     * @record
     */
    function OrderStatusUpdateElementList() { }
    Occ.OrderStatusUpdateElementList = OrderStatusUpdateElementList;
    /**
     *
     * An interface representing Order.
     * @record
     */
    function Order() { }
    Occ.Order = Order;
    /**
     *
     * An interface representing PaymentDetailsList.
     * @record
     */
    function PaymentDetailsList() { }
    Occ.PaymentDetailsList = PaymentDetailsList;
    /**
     *
     * An interface representing PointOfServiceStock.
     * @record
     */
    function PointOfServiceStock() { }
    Occ.PointOfServiceStock = PointOfServiceStock;
    /**
     *
     * An interface representing ProductExpressUpdateElement.
     * @record
     */
    function ProductExpressUpdateElement() { }
    Occ.ProductExpressUpdateElement = ProductExpressUpdateElement;
    /**
     *
     * An interface representing ProductExpressUpdateElementList.
     * @record
     */
    function ProductExpressUpdateElementList() { }
    Occ.ProductExpressUpdateElementList = ProductExpressUpdateElementList;
    /**
     *
     * An interface representing ProductList.
     * @record
     */
    function ProductList() { }
    Occ.ProductList = ProductList;
    /**
     *
     * An interface representing ProductReferenceList.
     * @record
     */
    function ProductReferenceList() { }
    Occ.ProductReferenceList = ProductReferenceList;
    /**
     *
     * An interface representing SpellingSuggestion.
     * @record
     */
    function SpellingSuggestion() { }
    Occ.SpellingSuggestion = SpellingSuggestion;
    /**
     *
     * An interface representing ProductSearchPage.
     * @record
     */
    function ProductSearchPage() { }
    Occ.ProductSearchPage = ProductSearchPage;
    /**
     *
     * An interface representing PromotionList.
     * @record
     */
    function PromotionList() { }
    Occ.PromotionList = PromotionList;
    /**
     *
     * An interface representing PromotionResultList.
     * @record
     */
    function PromotionResultList() { }
    Occ.PromotionResultList = PromotionResultList;
    /**
     *
     * An interface representing ReviewList.
     * @record
     */
    function ReviewList() { }
    Occ.ReviewList = ReviewList;
    /**
     *
     * An interface representing SaveCartResult.
     * @record
     */
    function SaveCartResult() { }
    Occ.SaveCartResult = SaveCartResult;
    /**
     *
     * An interface representing StoreFinderSearchPage.
     * @record
     */
    function StoreFinderSearchPage() { }
    Occ.StoreFinderSearchPage = StoreFinderSearchPage;
    /**
     *
     * An interface representing StoreFinderStockSearchPage.
     * @record
     */
    function StoreFinderStockSearchPage() { }
    Occ.StoreFinderStockSearchPage = StoreFinderStockSearchPage;
    /**
     *
     * An interface representing Suggestion.
     * @record
     */
    function Suggestion() { }
    Occ.Suggestion = Suggestion;
    /**
     *
     * An interface representing SuggestionList.
     * @record
     */
    function SuggestionList() { }
    Occ.SuggestionList = SuggestionList;
    /**
     *
     * An interface representing Title.
     * @record
     */
    function Title() { }
    Occ.Title = Title;
    /**
     *
     * An interface representing TitleList.
     * @record
     */
    function TitleList() { }
    Occ.TitleList = TitleList;
    /**
     *
     * An interface representing UserGroup.
     * @record
     */
    function UserGroup() { }
    Occ.UserGroup = UserGroup;
    /**
     *
     * An interface representing UserGroupList.
     * @record
     */
    function UserGroupList() { }
    Occ.UserGroupList = UserGroupList;
    /**
     *
     * An interface representing UserSignUp.
     * @record
     */
    function UserSignUp() { }
    Occ.UserSignUp = UserSignUp;
    /**
     * @record
     */
    function StoreCount() { }
    Occ.StoreCount = StoreCount;
    /**
     * @record
     */
    function StoreCountList() { }
    Occ.StoreCountList = StoreCountList;
    /**
     *
     * An interface representing VoucherList.
     * @record
     */
    function VoucherList() { }
    Occ.VoucherList = VoucherList;
    /**
     * Defines values for PriceType.
     * Possible values include: 'BUY', 'FROM'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: PriceType = <PriceType>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var PriceType;
    (function (PriceType) {
        PriceType["BUY"] = "BUY";
        PriceType["FROM"] = "FROM";
    })(PriceType = Occ.PriceType || (Occ.PriceType = {}));
    /**
     * Defines values for ImageType.
     * Possible values include: 'PRIMARY', 'GALLERY'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: ImageType = <ImageType>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var ImageType;
    (function (ImageType) {
        ImageType["PRIMARY"] = "PRIMARY";
        ImageType["GALLERY"] = "GALLERY";
    })(ImageType = Occ.ImageType || (Occ.ImageType = {}));
    /**
     * Defines values for Fields.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields = <Fields>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields;
    (function (Fields) {
        Fields["BASIC"] = "BASIC";
        Fields["DEFAULT"] = "DEFAULT";
        Fields["FULL"] = "FULL";
    })(Fields = Occ.Fields || (Occ.Fields = {}));
    /**
     * Defines values for Fields1.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields1 = <Fields1>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields1;
    (function (Fields1) {
        Fields1["BASIC"] = "BASIC";
        Fields1["DEFAULT"] = "DEFAULT";
        Fields1["FULL"] = "FULL";
    })(Fields1 = Occ.Fields1 || (Occ.Fields1 = {}));
    /**
     * Defines values for Fields2.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields2 = <Fields2>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields2;
    (function (Fields2) {
        Fields2["BASIC"] = "BASIC";
        Fields2["DEFAULT"] = "DEFAULT";
        Fields2["FULL"] = "FULL";
    })(Fields2 = Occ.Fields2 || (Occ.Fields2 = {}));
    /**
     * Defines values for Fields3.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields3 = <Fields3>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields3;
    (function (Fields3) {
        Fields3["BASIC"] = "BASIC";
        Fields3["DEFAULT"] = "DEFAULT";
        Fields3["FULL"] = "FULL";
    })(Fields3 = Occ.Fields3 || (Occ.Fields3 = {}));
    /**
     * Defines values for Fields4.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields4 = <Fields4>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields4;
    (function (Fields4) {
        Fields4["BASIC"] = "BASIC";
        Fields4["DEFAULT"] = "DEFAULT";
        Fields4["FULL"] = "FULL";
    })(Fields4 = Occ.Fields4 || (Occ.Fields4 = {}));
    /**
     * Defines values for Fields5.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields5 = <Fields5>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields5;
    (function (Fields5) {
        Fields5["BASIC"] = "BASIC";
        Fields5["DEFAULT"] = "DEFAULT";
        Fields5["FULL"] = "FULL";
    })(Fields5 = Occ.Fields5 || (Occ.Fields5 = {}));
    /**
     * Defines values for Fields6.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields6 = <Fields6>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields6;
    (function (Fields6) {
        Fields6["BASIC"] = "BASIC";
        Fields6["DEFAULT"] = "DEFAULT";
        Fields6["FULL"] = "FULL";
    })(Fields6 = Occ.Fields6 || (Occ.Fields6 = {}));
    /**
     * Defines values for PageType.
     * Possible values include: 'ContentPage', 'ProductPage', 'CategoryPage',
     * 'CatalogPage'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: PageType = <PageType>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var PageType;
    (function (PageType) {
        PageType["CONTENT_PAGE"] = "ContentPage";
        PageType["PRODUCT_PAGE"] = "ProductPage";
        PageType["CATEGORY_PAGE"] = "CategoryPage";
        PageType["CATALOG_PAGE"] = "CatalogPage";
    })(PageType = Occ.PageType || (Occ.PageType = {}));
    /**
     * Defines values for Fields7.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields7 = <Fields7>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields7;
    (function (Fields7) {
        Fields7["BASIC"] = "BASIC";
        Fields7["DEFAULT"] = "DEFAULT";
        Fields7["FULL"] = "FULL";
    })(Fields7 = Occ.Fields7 || (Occ.Fields7 = {}));
    /**
     * Defines values for Fields8.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields8 = <Fields8>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields8;
    (function (Fields8) {
        Fields8["BASIC"] = "BASIC";
        Fields8["DEFAULT"] = "DEFAULT";
        Fields8["FULL"] = "FULL";
    })(Fields8 = Occ.Fields8 || (Occ.Fields8 = {}));
    /**
     * Defines values for Fields9.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields9 = <Fields9>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields9;
    (function (Fields9) {
        Fields9["BASIC"] = "BASIC";
        Fields9["DEFAULT"] = "DEFAULT";
        Fields9["FULL"] = "FULL";
    })(Fields9 = Occ.Fields9 || (Occ.Fields9 = {}));
    /**
     * Defines values for Fields10.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields10 = <Fields10>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields10;
    (function (Fields10) {
        Fields10["BASIC"] = "BASIC";
        Fields10["DEFAULT"] = "DEFAULT";
        Fields10["FULL"] = "FULL";
    })(Fields10 = Occ.Fields10 || (Occ.Fields10 = {}));
    /**
     * Defines values for Fields11.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields11 = <Fields11>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields11;
    (function (Fields11) {
        Fields11["BASIC"] = "BASIC";
        Fields11["DEFAULT"] = "DEFAULT";
        Fields11["FULL"] = "FULL";
    })(Fields11 = Occ.Fields11 || (Occ.Fields11 = {}));
    /**
     * Defines values for Fields12.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields12 = <Fields12>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields12;
    (function (Fields12) {
        Fields12["BASIC"] = "BASIC";
        Fields12["DEFAULT"] = "DEFAULT";
        Fields12["FULL"] = "FULL";
    })(Fields12 = Occ.Fields12 || (Occ.Fields12 = {}));
    /**
     * Defines values for Fields13.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields13 = <Fields13>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields13;
    (function (Fields13) {
        Fields13["BASIC"] = "BASIC";
        Fields13["DEFAULT"] = "DEFAULT";
        Fields13["FULL"] = "FULL";
    })(Fields13 = Occ.Fields13 || (Occ.Fields13 = {}));
    /**
     * Defines values for Fields14.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields14 = <Fields14>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields14;
    (function (Fields14) {
        Fields14["BASIC"] = "BASIC";
        Fields14["DEFAULT"] = "DEFAULT";
        Fields14["FULL"] = "FULL";
    })(Fields14 = Occ.Fields14 || (Occ.Fields14 = {}));
    /**
     * Defines values for Fields15.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields15 = <Fields15>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields15;
    (function (Fields15) {
        Fields15["BASIC"] = "BASIC";
        Fields15["DEFAULT"] = "DEFAULT";
        Fields15["FULL"] = "FULL";
    })(Fields15 = Occ.Fields15 || (Occ.Fields15 = {}));
    /**
     * Defines values for Fields16.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields16 = <Fields16>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields16;
    (function (Fields16) {
        Fields16["BASIC"] = "BASIC";
        Fields16["DEFAULT"] = "DEFAULT";
        Fields16["FULL"] = "FULL";
    })(Fields16 = Occ.Fields16 || (Occ.Fields16 = {}));
    /**
     * Defines values for SortEnum.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: SortEnum = <SortEnum>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var SortEnum;
    (function (SortEnum) {
        SortEnum["BASIC"] = "BASIC";
        SortEnum["DEFAULT"] = "DEFAULT";
        SortEnum["FULL"] = "FULL";
    })(SortEnum = Occ.SortEnum || (Occ.SortEnum = {}));
    /**
     * Defines values for Fields17.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields17 = <Fields17>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields17;
    (function (Fields17) {
        Fields17["BASIC"] = "BASIC";
        Fields17["DEFAULT"] = "DEFAULT";
        Fields17["FULL"] = "FULL";
    })(Fields17 = Occ.Fields17 || (Occ.Fields17 = {}));
    /**
     * Defines values for Fields18.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields18 = <Fields18>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields18;
    (function (Fields18) {
        Fields18["BASIC"] = "BASIC";
        Fields18["DEFAULT"] = "DEFAULT";
        Fields18["FULL"] = "FULL";
    })(Fields18 = Occ.Fields18 || (Occ.Fields18 = {}));
    /**
     * Defines values for Fields19.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields19 = <Fields19>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields19;
    (function (Fields19) {
        Fields19["BASIC"] = "BASIC";
        Fields19["DEFAULT"] = "DEFAULT";
        Fields19["FULL"] = "FULL";
    })(Fields19 = Occ.Fields19 || (Occ.Fields19 = {}));
    /**
     * Defines values for Fields20.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields20 = <Fields20>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields20;
    (function (Fields20) {
        Fields20["BASIC"] = "BASIC";
        Fields20["DEFAULT"] = "DEFAULT";
        Fields20["FULL"] = "FULL";
    })(Fields20 = Occ.Fields20 || (Occ.Fields20 = {}));
    /**
     * Defines values for Fields21.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields21 = <Fields21>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields21;
    (function (Fields21) {
        Fields21["BASIC"] = "BASIC";
        Fields21["DEFAULT"] = "DEFAULT";
        Fields21["FULL"] = "FULL";
    })(Fields21 = Occ.Fields21 || (Occ.Fields21 = {}));
    /**
     * Defines values for Fields22.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields22 = <Fields22>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields22;
    (function (Fields22) {
        Fields22["BASIC"] = "BASIC";
        Fields22["DEFAULT"] = "DEFAULT";
        Fields22["FULL"] = "FULL";
    })(Fields22 = Occ.Fields22 || (Occ.Fields22 = {}));
    /**
     * Defines values for Fields23.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields23 = <Fields23>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields23;
    (function (Fields23) {
        Fields23["BASIC"] = "BASIC";
        Fields23["DEFAULT"] = "DEFAULT";
        Fields23["FULL"] = "FULL";
    })(Fields23 = Occ.Fields23 || (Occ.Fields23 = {}));
    /**
     * Defines values for Fields24.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields24 = <Fields24>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields24;
    (function (Fields24) {
        Fields24["BASIC"] = "BASIC";
        Fields24["DEFAULT"] = "DEFAULT";
        Fields24["FULL"] = "FULL";
    })(Fields24 = Occ.Fields24 || (Occ.Fields24 = {}));
    /**
     * Defines values for Fields25.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields25 = <Fields25>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields25;
    (function (Fields25) {
        Fields25["BASIC"] = "BASIC";
        Fields25["DEFAULT"] = "DEFAULT";
        Fields25["FULL"] = "FULL";
    })(Fields25 = Occ.Fields25 || (Occ.Fields25 = {}));
    /**
     * Defines values for Fields26.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields26 = <Fields26>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields26;
    (function (Fields26) {
        Fields26["BASIC"] = "BASIC";
        Fields26["DEFAULT"] = "DEFAULT";
        Fields26["FULL"] = "FULL";
    })(Fields26 = Occ.Fields26 || (Occ.Fields26 = {}));
    /**
     * Defines values for Fields27.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields27 = <Fields27>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields27;
    (function (Fields27) {
        Fields27["BASIC"] = "BASIC";
        Fields27["DEFAULT"] = "DEFAULT";
        Fields27["FULL"] = "FULL";
    })(Fields27 = Occ.Fields27 || (Occ.Fields27 = {}));
    /**
     * Defines values for Fields28.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields28 = <Fields28>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields28;
    (function (Fields28) {
        Fields28["BASIC"] = "BASIC";
        Fields28["DEFAULT"] = "DEFAULT";
        Fields28["FULL"] = "FULL";
    })(Fields28 = Occ.Fields28 || (Occ.Fields28 = {}));
    /**
     * Defines values for Fields29.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields29 = <Fields29>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields29;
    (function (Fields29) {
        Fields29["BASIC"] = "BASIC";
        Fields29["DEFAULT"] = "DEFAULT";
        Fields29["FULL"] = "FULL";
    })(Fields29 = Occ.Fields29 || (Occ.Fields29 = {}));
    /**
     * Defines values for Fields30.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields30 = <Fields30>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields30;
    (function (Fields30) {
        Fields30["BASIC"] = "BASIC";
        Fields30["DEFAULT"] = "DEFAULT";
        Fields30["FULL"] = "FULL";
    })(Fields30 = Occ.Fields30 || (Occ.Fields30 = {}));
    /**
     * Defines values for Fields31.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields31 = <Fields31>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields31;
    (function (Fields31) {
        Fields31["BASIC"] = "BASIC";
        Fields31["DEFAULT"] = "DEFAULT";
        Fields31["FULL"] = "FULL";
    })(Fields31 = Occ.Fields31 || (Occ.Fields31 = {}));
    /**
     * Defines values for Fields32.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields32 = <Fields32>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields32;
    (function (Fields32) {
        Fields32["BASIC"] = "BASIC";
        Fields32["DEFAULT"] = "DEFAULT";
        Fields32["FULL"] = "FULL";
    })(Fields32 = Occ.Fields32 || (Occ.Fields32 = {}));
    /**
     * Defines values for Fields33.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields33 = <Fields33>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields33;
    (function (Fields33) {
        Fields33["BASIC"] = "BASIC";
        Fields33["DEFAULT"] = "DEFAULT";
        Fields33["FULL"] = "FULL";
    })(Fields33 = Occ.Fields33 || (Occ.Fields33 = {}));
    /**
     * Defines values for Fields34.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields34 = <Fields34>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields34;
    (function (Fields34) {
        Fields34["BASIC"] = "BASIC";
        Fields34["DEFAULT"] = "DEFAULT";
        Fields34["FULL"] = "FULL";
    })(Fields34 = Occ.Fields34 || (Occ.Fields34 = {}));
    /**
     * Defines values for Fields35.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields35 = <Fields35>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields35;
    (function (Fields35) {
        Fields35["BASIC"] = "BASIC";
        Fields35["DEFAULT"] = "DEFAULT";
        Fields35["FULL"] = "FULL";
    })(Fields35 = Occ.Fields35 || (Occ.Fields35 = {}));
    /**
     * Defines values for Fields36.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields36 = <Fields36>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields36;
    (function (Fields36) {
        Fields36["BASIC"] = "BASIC";
        Fields36["DEFAULT"] = "DEFAULT";
        Fields36["FULL"] = "FULL";
    })(Fields36 = Occ.Fields36 || (Occ.Fields36 = {}));
    /**
     * Defines values for Fields37.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields37 = <Fields37>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields37;
    (function (Fields37) {
        Fields37["BASIC"] = "BASIC";
        Fields37["DEFAULT"] = "DEFAULT";
        Fields37["FULL"] = "FULL";
    })(Fields37 = Occ.Fields37 || (Occ.Fields37 = {}));
    /**
     * Defines values for Fields38.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields38 = <Fields38>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields38;
    (function (Fields38) {
        Fields38["BASIC"] = "BASIC";
        Fields38["DEFAULT"] = "DEFAULT";
        Fields38["FULL"] = "FULL";
    })(Fields38 = Occ.Fields38 || (Occ.Fields38 = {}));
    /**
     * Defines values for Fields39.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields39 = <Fields39>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields39;
    (function (Fields39) {
        Fields39["BASIC"] = "BASIC";
        Fields39["DEFAULT"] = "DEFAULT";
        Fields39["FULL"] = "FULL";
    })(Fields39 = Occ.Fields39 || (Occ.Fields39 = {}));
    /**
     * Defines values for Fields40.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields40 = <Fields40>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields40;
    (function (Fields40) {
        Fields40["BASIC"] = "BASIC";
        Fields40["DEFAULT"] = "DEFAULT";
        Fields40["FULL"] = "FULL";
    })(Fields40 = Occ.Fields40 || (Occ.Fields40 = {}));
    /**
     * Defines values for Fields41.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields41 = <Fields41>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields41;
    (function (Fields41) {
        Fields41["BASIC"] = "BASIC";
        Fields41["DEFAULT"] = "DEFAULT";
        Fields41["FULL"] = "FULL";
    })(Fields41 = Occ.Fields41 || (Occ.Fields41 = {}));
    /**
     * Defines values for Fields42.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields42 = <Fields42>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields42;
    (function (Fields42) {
        Fields42["BASIC"] = "BASIC";
        Fields42["DEFAULT"] = "DEFAULT";
        Fields42["FULL"] = "FULL";
    })(Fields42 = Occ.Fields42 || (Occ.Fields42 = {}));
    /**
     * Defines values for Fields43.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields43 = <Fields43>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields43;
    (function (Fields43) {
        Fields43["BASIC"] = "BASIC";
        Fields43["DEFAULT"] = "DEFAULT";
        Fields43["FULL"] = "FULL";
    })(Fields43 = Occ.Fields43 || (Occ.Fields43 = {}));
    /**
     * Defines values for Fields44.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields44 = <Fields44>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields44;
    (function (Fields44) {
        Fields44["BASIC"] = "BASIC";
        Fields44["DEFAULT"] = "DEFAULT";
        Fields44["FULL"] = "FULL";
    })(Fields44 = Occ.Fields44 || (Occ.Fields44 = {}));
    /**
     * Defines values for Fields45.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields45 = <Fields45>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields45;
    (function (Fields45) {
        Fields45["BASIC"] = "BASIC";
        Fields45["DEFAULT"] = "DEFAULT";
        Fields45["FULL"] = "FULL";
    })(Fields45 = Occ.Fields45 || (Occ.Fields45 = {}));
    /**
     * Defines values for Fields46.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields46 = <Fields46>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields46;
    (function (Fields46) {
        Fields46["BASIC"] = "BASIC";
        Fields46["DEFAULT"] = "DEFAULT";
        Fields46["FULL"] = "FULL";
    })(Fields46 = Occ.Fields46 || (Occ.Fields46 = {}));
    /**
     * Defines values for Fields47.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields47 = <Fields47>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields47;
    (function (Fields47) {
        Fields47["BASIC"] = "BASIC";
        Fields47["DEFAULT"] = "DEFAULT";
        Fields47["FULL"] = "FULL";
    })(Fields47 = Occ.Fields47 || (Occ.Fields47 = {}));
    /**
     * Defines values for Fields48.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields48 = <Fields48>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields48;
    (function (Fields48) {
        Fields48["BASIC"] = "BASIC";
        Fields48["DEFAULT"] = "DEFAULT";
        Fields48["FULL"] = "FULL";
    })(Fields48 = Occ.Fields48 || (Occ.Fields48 = {}));
    /**
     * Defines values for Fields49.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields49 = <Fields49>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields49;
    (function (Fields49) {
        Fields49["BASIC"] = "BASIC";
        Fields49["DEFAULT"] = "DEFAULT";
        Fields49["FULL"] = "FULL";
    })(Fields49 = Occ.Fields49 || (Occ.Fields49 = {}));
    /**
     * Defines values for Fields50.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields50 = <Fields50>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields50;
    (function (Fields50) {
        Fields50["BASIC"] = "BASIC";
        Fields50["DEFAULT"] = "DEFAULT";
        Fields50["FULL"] = "FULL";
    })(Fields50 = Occ.Fields50 || (Occ.Fields50 = {}));
    /**
     * Defines values for Fields51.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields51 = <Fields51>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields51;
    (function (Fields51) {
        Fields51["BASIC"] = "BASIC";
        Fields51["DEFAULT"] = "DEFAULT";
        Fields51["FULL"] = "FULL";
    })(Fields51 = Occ.Fields51 || (Occ.Fields51 = {}));
    /**
     * Defines values for Fields52.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields52 = <Fields52>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields52;
    (function (Fields52) {
        Fields52["BASIC"] = "BASIC";
        Fields52["DEFAULT"] = "DEFAULT";
        Fields52["FULL"] = "FULL";
    })(Fields52 = Occ.Fields52 || (Occ.Fields52 = {}));
    /**
     * Defines values for Fields53.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields53 = <Fields53>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields53;
    (function (Fields53) {
        Fields53["BASIC"] = "BASIC";
        Fields53["DEFAULT"] = "DEFAULT";
        Fields53["FULL"] = "FULL";
    })(Fields53 = Occ.Fields53 || (Occ.Fields53 = {}));
    /**
     * Defines values for Fields54.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields54 = <Fields54>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields54;
    (function (Fields54) {
        Fields54["BASIC"] = "BASIC";
        Fields54["DEFAULT"] = "DEFAULT";
        Fields54["FULL"] = "FULL";
    })(Fields54 = Occ.Fields54 || (Occ.Fields54 = {}));
    /**
     * Defines values for Fields55.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields55 = <Fields55>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields55;
    (function (Fields55) {
        Fields55["BASIC"] = "BASIC";
        Fields55["DEFAULT"] = "DEFAULT";
        Fields55["FULL"] = "FULL";
    })(Fields55 = Occ.Fields55 || (Occ.Fields55 = {}));
    /**
     * Defines values for Fields56.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields56 = <Fields56>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields56;
    (function (Fields56) {
        Fields56["BASIC"] = "BASIC";
        Fields56["DEFAULT"] = "DEFAULT";
        Fields56["FULL"] = "FULL";
    })(Fields56 = Occ.Fields56 || (Occ.Fields56 = {}));
    /**
     * Defines values for Fields57.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields57 = <Fields57>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields57;
    (function (Fields57) {
        Fields57["BASIC"] = "BASIC";
        Fields57["DEFAULT"] = "DEFAULT";
        Fields57["FULL"] = "FULL";
    })(Fields57 = Occ.Fields57 || (Occ.Fields57 = {}));
    /**
     * Defines values for Fields58.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields58 = <Fields58>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields58;
    (function (Fields58) {
        Fields58["BASIC"] = "BASIC";
        Fields58["DEFAULT"] = "DEFAULT";
        Fields58["FULL"] = "FULL";
    })(Fields58 = Occ.Fields58 || (Occ.Fields58 = {}));
    /**
     * Defines values for Fields59.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields59 = <Fields59>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields59;
    (function (Fields59) {
        Fields59["BASIC"] = "BASIC";
        Fields59["DEFAULT"] = "DEFAULT";
        Fields59["FULL"] = "FULL";
    })(Fields59 = Occ.Fields59 || (Occ.Fields59 = {}));
    /**
     * Defines values for Fields60.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields60 = <Fields60>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields60;
    (function (Fields60) {
        Fields60["BASIC"] = "BASIC";
        Fields60["DEFAULT"] = "DEFAULT";
        Fields60["FULL"] = "FULL";
    })(Fields60 = Occ.Fields60 || (Occ.Fields60 = {}));
    /**
     * Defines values for Fields61.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields61 = <Fields61>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields61;
    (function (Fields61) {
        Fields61["BASIC"] = "BASIC";
        Fields61["DEFAULT"] = "DEFAULT";
        Fields61["FULL"] = "FULL";
    })(Fields61 = Occ.Fields61 || (Occ.Fields61 = {}));
    /**
     * Defines values for Type.
     * Possible values include: 'all', 'product', 'order'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Type = <Type>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Type;
    (function (Type) {
        Type["All"] = "all";
        Type["Product"] = "product";
        Type["Order"] = "order";
    })(Type = Occ.Type || (Occ.Type = {}));
})(Occ || (Occ = {}));

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
            return map(function (model) { return _this.convertSource(model, injectionToken); });
        }
        else {
            return function (observable) { return (/** @type {?} */ (observable)); };
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
            return map(function (model) { return _this.convertMany(model, injectionToken); });
        }
        else {
            return function (observable) { return (/** @type {?} */ (observable)); };
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
            return (/** @type {?} */ (source));
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
            return (/** @type {?} */ (sources));
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
        }, (/** @type {?} */ (undefined)));
    };
    ConverterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ConverterService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    /** @nocollapse */ ConverterService.ngInjectableDef = defineInjectable({ factory: function ConverterService_Factory() { return new ConverterService(inject(INJECTOR)); }, token: ConverterService, providedIn: "root" });
    return ConverterService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OccCmsComponentAdapter = /** @class */ (function () {
    function OccCmsComponentAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
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
    OccCmsComponentAdapter.prototype.findComponentsByIds = /**
     * @param {?} ids
     * @param {?} pageContext
     * @param {?=} fields
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} sort
     * @return {?}
     */
    function (ids, pageContext, fields, currentPage, pageSize, sort) {
        var _this = this;
        if (fields === void 0) { fields = 'DEFAULT'; }
        if (currentPage === void 0) { currentPage = 0; }
        if (pageSize === void 0) { pageSize = ids.length; }
        /** @type {?} */
        var requestParams = __assign({}, this.getContextParams(pageContext), this.getPaginationParams(currentPage, pageSize, sort));
        requestParams['componentIds'] = ids.toString();
        return this.http
            .get(this.getComponentsEndpoint(requestParams, fields), {
            headers: this.headers,
        })
            .pipe(pluck('component'), this.converter.pipeableMany(CMS_COMPONENT_NORMALIZER), catchError(function (error) {
            if (error.status === 400) {
                return _this.searchComponentsByIds(ids, pageContext, fields, currentPage, pageSize, sort);
            }
        }));
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
    OccCmsComponentAdapter.prototype.searchComponentsByIds = /**
     * @param {?} ids
     * @param {?} pageContext
     * @param {?=} fields
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} sort
     * @return {?}
     */
    function (ids, pageContext, fields, currentPage, pageSize, sort) {
        if (fields === void 0) { fields = 'DEFAULT'; }
        if (currentPage === void 0) { currentPage = 0; }
        if (pageSize === void 0) { pageSize = ids.length; }
        /** @type {?} */
        var idList = { idList: ids };
        /** @type {?} */
        var requestParams = __assign({}, this.getContextParams(pageContext), this.getPaginationParams(currentPage, pageSize, sort));
        return this.http
            .post(this.getComponentsEndpoint(requestParams, fields), idList, {
            headers: this.headers,
        })
            .pipe(pluck('component'), this.converter.pipeableMany(CMS_COMPONENT_NORMALIZER));
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
        return this.occEndpoints.getUrl('component', { id: id }, this.getContextParams(pageContext));
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
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} sort
     * @return {?}
     */
    OccCmsComponentAdapter.prototype.getPaginationParams = /**
     * @private
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} sort
     * @return {?}
     */
    function (currentPage, pageSize, sort) {
        /** @type {?} */
        var requestParams = {};
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
    OccCmsComponentAdapter.prototype.getContextParams = /**
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
        { type: Injectable }
    ];
    /** @nocollapse */
    OccCmsComponentAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccCmsComponentAdapter;
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
        if (target === void 0) { target = {}; }
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
                target.page.slots[slot.position] = (/** @type {?} */ ({
                    components: [],
                    properties: slot.properties,
                }));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
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
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
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
                        for (var _e = __values((/** @type {?} */ (slot.components.component))), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var component = _f.value;
                            // we dont put properties into component state
                            if (component.properties) {
                                component.properties = undefined;
                            }
                            target.components.push(component);
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    OccCmsPageNormalizer.decorators = [
        { type: Injectable }
    ];
    return OccCmsPageNormalizer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OccCmsPageAdapter = /** @class */ (function () {
    function OccCmsPageAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
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
        // load page by Id
        if (pageContext.type === undefined) {
            return this.http
                .get(this.occEndpoints.getUrl('page', {
                id: pageContext.id,
                fields: fields ? fields : 'DEFAULT',
            }), {
                headers: this.headers,
            })
                .pipe(this.converter.pipeable(CMS_PAGE_NORMALIZE));
        }
        // load page by PageContext
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
        // smartedit preview page is loaded by previewToken which added by interceptor
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
        { type: Injectable }
    ];
    /** @nocollapse */
    OccCmsPageAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccCmsPageAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmsOccModule = /** @class */ (function () {
    function CmsOccModule() {
    }
    CmsOccModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, HttpClientModule],
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
/** @type {?} */
var CHECKOUT_PARAMS = 'deliveryAddress(FULL),deliveryMode,paymentInfo(FULL)';
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
        var cartEndpoint = "users/" + userId + "/carts/";
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
            ? new HttpParams({
                fromString: "fields=carts(" + DETAILS_PARAMS + ",saveTime)",
            })
            : new HttpParams({
                fromString: "fields=carts(" + BASIC_PARAMS + ",saveTime)",
            });
        return this.http.get(url, { params: params }).pipe(catchError(function (error) { return throwError(error); }), pluck('carts'), this.converter.pipeableMany(CART_NORMALIZER));
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
            ? new HttpParams({
                fromString: "fields=" + DETAILS_PARAMS,
            })
            : new HttpParams({
                fromString: "fields=" + BASIC_PARAMS,
            });
        if (cartId === 'current') {
            return this.loadAll(userId, details).pipe(map(function (carts) {
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
            return this.http.get(url, { params: params }).pipe(catchError(function (error) { return throwError(error); }), this.converter.pipeable(CART_NORMALIZER));
        }
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    OccCartAdapter.prototype.loadCheckoutDetails = /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        /** @type {?} */
        var url = this.getCartEndpoint(userId) + cartId;
        /** @type {?} */
        var params = new HttpParams({
            fromString: "fields=" + CHECKOUT_PARAMS,
        });
        return this.http
            .get(url, { params: params })
            .pipe(catchError(function (error) { return throwError(error); }));
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
        var queryString = "fields=" + BASIC_PARAMS;
        if (oldCartId) {
            queryString = queryString + "&oldCartId=" + oldCartId;
        }
        if (toMergeCartGuid) {
            queryString = queryString + "&toMergeCartGuid=" + toMergeCartGuid;
        }
        /** @type {?} */
        var params = new HttpParams({
            fromString: queryString,
        });
        return this.http.post(url, toAdd, { params: params }).pipe(this.converter.pipeable(CART_NORMALIZER), catchError(function (error) { return throwError(error.json()); }));
    };
    OccCartAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccCartAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
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
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }), this.converter.pipeable(DELIVERY_ADDRESS_NORMALIZER));
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
            .pipe(catchError(function (error) { return throwError(error.json()); }));
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
            .pipe(catchError(function (error) { return throwError(error.json()); }));
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
            .pipe(catchError(function (error) { return throwError(error.json()); }), this.converter.pipeable(DELIVERY_MODE_NORMALIZER));
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
            .pipe(catchError(function (error) { return throwError(error.json()); }), pluck('deliveryModes'), this.converter.pipeableMany(DELIVERY_MODE_NORMALIZER));
    };
    OccCartDeliveryAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccCartDeliveryAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
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
        if (quantity === void 0) { quantity = 1; }
        /** @type {?} */
        var toAdd = JSON.stringify({});
        /** @type {?} */
        var url = this.getCartEndpoint(userId) + cartId + '/entries';
        /** @type {?} */
        var params = new HttpParams({
            fromString: 'code=' + productCode + '&qty=' + quantity,
        });
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(url, toAdd, { headers: headers, params: params })
            .pipe(catchError(function (error) { return throwError(error.json()); }), this.converter.pipeable(CART_MODIFICATION_NORMALIZER));
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
        var params = new HttpParams({
            fromString: queryString,
        });
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http.patch(url, {}, { headers: headers, params: params }).pipe(catchError(function (error) { return throwError(error.json()); }), this.converter.pipeable(CART_MODIFICATION_NORMALIZER));
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
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .delete(url, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    OccCartEntryAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccCartEntryAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
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
/** @type {?} */
var ENDPOINT_CARD_TYPES = 'cardtypes';
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
        paymentDetails = this.converter.convert(paymentDetails, PAYMENT_DETAILS_SERIALIZER);
        return this.getProviderSubInfo(userId, cartId).pipe(map(function (data) {
            /** @type {?} */
            var labelsMap = _this.convertToMap(data.mappingLabels.entry);
            return {
                url: data.postUrl,
                parameters: _this.getParamsForPaymentProvider(paymentDetails, data.parameters.entry, labelsMap),
                mappingLabels: labelsMap,
            };
        }), mergeMap(function (sub) {
            // create a subscription directly with payment provider
            return _this.createSubWithProvider(sub.url, sub.parameters).pipe(map(function (response) { return _this.extractPaymentDetailsFromHtml(response); }), mergeMap(function (fromPaymentProvider) {
                fromPaymentProvider['savePaymentInfo'] = true;
                return _this.createDetailsWithParameters(userId, cartId, fromPaymentProvider).pipe(_this.converter.pipeable(PAYMENT_DETAILS_NORMALIZER));
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
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @return {?}
     */
    OccCartPaymentAdapter.prototype.loadCardTypes = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.occEndpoints.getEndpoint(ENDPOINT_CARD_TYPES))
            .pipe(catchError(function (error) { return throwError(error.json()); }), map(function (cardTypeList) { return cardTypeList.cardTypes; }), this.converter.pipeableMany(CARD_TYPE_NORMALIZER));
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
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @protected
     * @param {?} postUrl
     * @param {?} parameters
     * @return {?}
     */
    OccCartPaymentAdapter.prototype.createSubWithProvider = /**
     * @protected
     * @param {?} postUrl
     * @param {?} parameters
     * @return {?}
     */
    function (postUrl, parameters) {
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'text/html',
        });
        /** @type {?} */
        var httpParams = new HttpParams({ encoder: new CustomEncoder() });
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
        var httpParams = new HttpParams({ encoder: new CustomEncoder() });
        Object.keys(parameters).forEach(function (key) {
            httpParams = httpParams.append(key, parameters[key]);
        });
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(this.getCartEndpoint(userId) + cartId + '/payment/sop/response', httpParams, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
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
        { type: Injectable }
    ];
    /** @nocollapse */
    OccCartPaymentAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccCartPaymentAdapter;
}());

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
            target = __assign({}, ((/** @type {?} */ (source))));
        }
        if (source && source.entries) {
            target.entries = source.entries.map(function (entry) { return (__assign({}, entry, { product: _this.converter.convert(entry.product, PRODUCT_NORMALIZER) })); });
        }
        return target;
    };
    OccCartNormalizer.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccCartNormalizer.ctorParameters = function () { return [
        { type: ConverterService }
    ]; };
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
        { type: NgModule, args: [{
                    imports: [CommonModule, HttpClientModule],
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
var OccProductReferencesListNormalizer = /** @class */ (function () {
    function OccProductReferencesListNormalizer(converter) {
        this.converter = converter;
    }
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    OccProductReferencesListNormalizer.prototype.convert = /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    function (source, target) {
        var _this = this;
        if (target === void 0) { target = []; }
        if (target === undefined) {
            target = __assign({}, ((/** @type {?} */ (source))));
        }
        if (source && source.references) {
            target = source.references.map(function (reference) { return (__assign({}, reference, { target: _this.converter.convert(reference.target, PRODUCT_NORMALIZER) })); });
            return target;
        }
    };
    OccProductReferencesListNormalizer.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccProductReferencesListNormalizer.ctorParameters = function () { return [
        { type: ConverterService }
    ]; };
    return OccProductReferencesListNormalizer;
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
        if (target === void 0) { target = {}; }
        target = __assign({}, target, ((/** @type {?} */ (source))));
        if (source.products) {
            target.products = source.products.map(function (product) {
                return _this.converterService.convert(product, PRODUCT_NORMALIZER);
            });
        }
        return target;
    };
    OccProductSearchPageNormalizer.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccProductSearchPageNormalizer.ctorParameters = function () { return [
        { type: ConverterService }
    ]; };
    return OccProductSearchPageNormalizer;
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
            target = __assign({}, ((/** @type {?} */ (source))));
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
                    /**
                     * Traditionally, in an on-prem world, medias and other backend related calls
                     * are hosted at the same platform, but in a cloud setup, applications are are
                     * typically distributed cross different environments. For media, we use the
                     * `backend.media.baseUrl` by default, but fallback to `backend.occ.baseUrl`
                     * if none provided.
                     */
                    image.url =
                        (this.config.backend.media.baseUrl ||
                            this.config.backend.occ.baseUrl ||
                            '') + image.url;
                    imageContainer[image.format] = image;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (source_1_1 && !source_1_1.done && (_a = source_1.return)) _a.call(source_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return images;
    };
    ProductImageNormalizer.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductImageNormalizer.ctorParameters = function () { return [
        { type: OccConfig }
    ]; };
    return ProductImageNormalizer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OccProductReferencesAdapter = /** @class */ (function () {
    function OccProductReferencesAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @param {?} productCode
     * @param {?=} referenceType
     * @param {?=} pageSize
     * @return {?}
     */
    OccProductReferencesAdapter.prototype.load = /**
     * @param {?} productCode
     * @param {?=} referenceType
     * @param {?=} pageSize
     * @return {?}
     */
    function (productCode, referenceType, pageSize) {
        return this.http
            .get(this.getEndpoint(productCode, referenceType, pageSize))
            .pipe(this.converter.pipeable(PRODUCT_REFERENCES_NORMALIZER));
    };
    /**
     * @protected
     * @param {?} code
     * @param {?=} reference
     * @param {?=} pageSize
     * @return {?}
     */
    OccProductReferencesAdapter.prototype.getEndpoint = /**
     * @protected
     * @param {?} code
     * @param {?=} reference
     * @param {?=} pageSize
     * @return {?}
     */
    function (code, reference, pageSize) {
        return this.occEndpoints.getUrl('productReferences', {
            productCode: code,
        }, { referenceType: reference, pageSize: pageSize });
    };
    OccProductReferencesAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccProductReferencesAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccProductReferencesAdapter;
}());

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
        return this.http.get(this.getEndpoint(productCode, maxCount)).pipe(pluck('reviews'), this.converter.pipeableMany(PRODUCT_REVIEW_NORMALIZER));
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
        var headers = new HttpHeaders({
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
        { type: Injectable }
    ];
    /** @nocollapse */
    OccProductReviewsAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccProductReviewsAdapter;
}());

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
        if (searchConfig === void 0) { searchConfig = DEFAULT_SEARCH_CONFIG; }
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
        if (pageSize === void 0) { pageSize = 3; }
        return this.http
            .get(this.getSuggestionEndpoint(term, pageSize.toString()))
            .pipe(pluck('suggestions'), this.converter.pipeableMany(PRODUCT_SUGGESTION_NORMALIZER));
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
        { type: Injectable }
    ];
    /** @nocollapse */
    OccProductSearchAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccProductSearchAdapter;
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
        { type: Injectable }
    ];
    /** @nocollapse */
    OccProductAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccProductAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductNameNormalizer = /** @class */ (function () {
    function ProductNameNormalizer(config) {
        this.config = config;
    }
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    ProductNameNormalizer.prototype.convert = /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    function (source, target) {
        if (target === undefined) {
            target = __assign({}, ((/** @type {?} */ (source))));
        }
        if (source.name) {
            target.name = this.normalize(source.name);
            target.nameHtml = source.name;
        }
        return target;
    };
    /**
     * @protected
     * @param {?} name
     * @return {?}
     */
    ProductNameNormalizer.prototype.normalize = /**
     * @protected
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return name.replace(/<[^>]*>/g, '');
    };
    ProductNameNormalizer.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductNameNormalizer.ctorParameters = function () { return [
        { type: OccConfig }
    ]; };
    return ProductNameNormalizer;
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
                // Uncomment this when occ gets configured
                // productReferences:
                //   'products/${productCode}/references?fields=DEFAULT,references(target(images(FULL)))&referenceType=${referenceType}',
                productReferences: 'products/${productCode}/references?fields=DEFAULT,references(target(images(FULL)))',
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
var ProductOccModule = /** @class */ (function () {
    function ProductOccModule() {
    }
    ProductOccModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
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
                            useClass: ProductNameNormalizer,
                            multi: true,
                        },
                        {
                            provide: ProductReferencesAdapter,
                            useClass: OccProductReferencesAdapter,
                        },
                        {
                            provide: PRODUCT_REFERENCES_NORMALIZER,
                            useClass: OccProductReferencesListNormalizer,
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
var OccSiteAdapter = /** @class */ (function () {
    function OccSiteAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @return {?}
     */
    OccSiteAdapter.prototype.loadLanguages = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.occEndpoints.getEndpoint('languages'))
            .pipe(catchError(function (error) { return throwError(error.json()); }), map(function (languageList) { return languageList.languages; }), this.converter.pipeableMany(LANGUAGE_NORMALIZER));
    };
    /**
     * @return {?}
     */
    OccSiteAdapter.prototype.loadCurrencies = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.occEndpoints.getEndpoint('currencies'))
            .pipe(catchError(function (error) { return throwError(error.json()); }), map(function (currencyList) { return currencyList.currencies; }), this.converter.pipeableMany(CURRENCY_NORMALIZER));
    };
    OccSiteAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccSiteAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccSiteAdapter;
}());

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
        if (request.url.includes(this.occEndpoints.getBaseEndpoint())) {
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
        { type: Injectable }
    ];
    /** @nocollapse */
    SiteContextInterceptor.ctorParameters = function () { return [
        { type: LanguageService },
        { type: CurrencyService },
        { type: OccEndpointsService },
        { type: OccConfig }
    ]; };
    return SiteContextInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SiteContextOccModule = /** @class */ (function () {
    function SiteContextOccModule() {
    }
    SiteContextOccModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, HttpClientModule],
                    providers: [
                        {
                            provide: SiteAdapter,
                            useClass: OccSiteAdapter,
                        },
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: SiteContextInterceptor,
                            multi: true,
                        },
                    ],
                },] }
    ];
    return SiteContextOccModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
StoreFinderAdapter = /** @class */ (function () {
    function StoreFinderAdapter() {
    }
    return StoreFinderAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StoreFinderConnector = /** @class */ (function () {
    function StoreFinderConnector(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    StoreFinderConnector.prototype.search = /**
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    function (query, searchConfig, longitudeLatitude) {
        return this.adapter.search(query, searchConfig, longitudeLatitude);
    };
    /**
     * @return {?}
     */
    StoreFinderConnector.prototype.getCounts = /**
     * @return {?}
     */
    function () {
        return this.adapter.loadCounts();
    };
    /**
     * @param {?} storeId
     * @return {?}
     */
    StoreFinderConnector.prototype.get = /**
     * @param {?} storeId
     * @return {?}
     */
    function (storeId) {
        return this.adapter.load(storeId);
    };
    StoreFinderConnector.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    StoreFinderConnector.ctorParameters = function () { return [
        { type: StoreFinderAdapter }
    ]; };
    /** @nocollapse */ StoreFinderConnector.ngInjectableDef = defineInjectable({ factory: function StoreFinderConnector_Factory() { return new StoreFinderConnector(inject(StoreFinderAdapter)); }, token: StoreFinderConnector, providedIn: "root" });
    return StoreFinderConnector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var POINT_OF_SERVICE_NORMALIZER = new InjectionToken('PointOfServiceNormalizer');
/** @type {?} */
var STORE_FINDER_SEARCH_PAGE_NORMALIZER = new InjectionToken('StoreFinderSearchPageNormalizer');
/** @type {?} */
var STORE_COUNT_NORMALIZER = new InjectionToken('StoreCountNormalizer');

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
var OccStoreFinderAdapter = /** @class */ (function () {
    function OccStoreFinderAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    OccStoreFinderAdapter.prototype.search = /**
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    function (query, searchConfig, longitudeLatitude) {
        return this.callOccFindStores(query, searchConfig, longitudeLatitude).pipe(catchError(function (error) { return throwError(error.json()); }), this.converter.pipeable(STORE_FINDER_SEARCH_PAGE_NORMALIZER));
    };
    /**
     * @return {?}
     */
    OccStoreFinderAdapter.prototype.loadCounts = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var storeCountUrl = this.getStoresEndpoint('storescounts');
        return this.http.get(storeCountUrl).pipe(map(function (_a) {
            var countriesAndRegionsStoreCount = _a.countriesAndRegionsStoreCount;
            return countriesAndRegionsStoreCount;
        }), catchError(function (error) { return throwError(error.json()); }), this.converter.pipeableMany(STORE_COUNT_NORMALIZER));
    };
    /**
     * @param {?} storeId
     * @return {?}
     */
    OccStoreFinderAdapter.prototype.load = /**
     * @param {?} storeId
     * @return {?}
     */
    function (storeId) {
        /** @type {?} */
        var storeDetailsUrl = this.getStoresEndpoint(storeId);
        /** @type {?} */
        var params = { fields: 'FULL' };
        return this.http.get(storeDetailsUrl, { params: params }).pipe(catchError(function (error) { return throwError(error.json()); }), this.converter.pipeable(POINT_OF_SERVICE_NORMALIZER));
    };
    /**
     * @protected
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    OccStoreFinderAdapter.prototype.callOccFindStores = /**
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
        var params = new HttpParams({
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
        return this.http.get(url, { params: params }).pipe(catchError(function (error) {
            if (error.json) {
                return throwError(error.json());
            }
            return throwError(error);
        }));
    };
    /**
     * @protected
     * @param {?=} url
     * @return {?}
     */
    OccStoreFinderAdapter.prototype.getStoresEndpoint = /**
     * @protected
     * @param {?=} url
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var baseUrl = this.occEndpoints.getEndpoint(STORES_ENDPOINT);
        return url ? baseUrl + '/' + url : baseUrl;
    };
    OccStoreFinderAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccStoreFinderAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccStoreFinderAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StoreFinderOccModule = /** @class */ (function () {
    function StoreFinderOccModule() {
    }
    StoreFinderOccModule.decorators = [
        { type: NgModule, args: [{
                    providers: [{ provide: StoreFinderAdapter, useClass: OccStoreFinderAdapter }],
                },] }
    ];
    return StoreFinderOccModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// To be changed to a more optimised params after ticket: C3PO-1076
/** @type {?} */
var FULL_PARAMS = 'fields=FULL';
var OccOrderAdapter = /** @class */ (function () {
    function OccOrderAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @protected
     * @param {?} userId
     * @return {?}
     */
    OccOrderAdapter.prototype.getOrderEndpoint = /**
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
    OccOrderAdapter.prototype.place = /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        /** @type {?} */
        var url = this.getOrderEndpoint(userId);
        /** @type {?} */
        var params = new HttpParams({
            fromString: 'cartId=' + cartId + '&' + FULL_PARAMS,
        });
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http.post(url, {}, { headers: headers, params: params }).pipe(catchError(function (error) { return throwError(error.json()); }), this.converter.pipeable(ORDER_NORMALIZER));
    };
    /**
     * @param {?} userId
     * @param {?} orderCode
     * @return {?}
     */
    OccOrderAdapter.prototype.load = /**
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
        var params = new HttpParams({
            fromString: FULL_PARAMS,
        });
        return this.http
            .get(orderUrl, {
            params: params,
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }), this.converter.pipeable(ORDER_NORMALIZER));
    };
    /**
     * @param {?} userId
     * @param {?=} pageSize
     * @param {?=} currentPage
     * @param {?=} sort
     * @return {?}
     */
    OccOrderAdapter.prototype.loadHistory = /**
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
        var params = new HttpParams();
        if (pageSize) {
            params = params.set('pageSize', pageSize.toString());
        }
        if (currentPage) {
            params = params.set('currentPage', currentPage.toString());
        }
        if (sort) {
            params = params.set('sort', sort);
        }
        return this.http.get(url, { params: params }).pipe(catchError(function (error) { return throwError(error.json()); }), this.converter.pipeable(ORDER_HISTORY_NORMALIZER));
    };
    OccOrderAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccOrderAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccOrderAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OccOrderNormalizer = /** @class */ (function () {
    function OccOrderNormalizer(converter) {
        this.converter = converter;
    }
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    OccOrderNormalizer.prototype.convert = /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    function (source, target) {
        var _this = this;
        if (target === undefined) {
            target = __assign({}, ((/** @type {?} */ (source))));
        }
        if (source.entries) {
            target.entries = source.entries.map(function (entry) {
                return _this.convertOrderEntry(entry);
            });
        }
        if (source.consignments) {
            target.consignments = source.consignments.map(function (consignment) { return (__assign({}, consignment, { entries: consignment.entries.map(function (entry) { return (__assign({}, entry, { orderEntry: _this.convertOrderEntry(entry.orderEntry) })); }) })); });
        }
        if (source.unconsignedEntries) {
            target.unconsignedEntries = source.unconsignedEntries.map(function (entry) {
                return _this.convertOrderEntry(entry);
            });
        }
        return target;
    };
    /**
     * @private
     * @param {?} source
     * @return {?}
     */
    OccOrderNormalizer.prototype.convertOrderEntry = /**
     * @private
     * @param {?} source
     * @return {?}
     */
    function (source) {
        return __assign({}, source, { product: this.converter.convert(source.product, PRODUCT_NORMALIZER) });
    };
    OccOrderNormalizer.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccOrderNormalizer.ctorParameters = function () { return [
        { type: ConverterService }
    ]; };
    return OccOrderNormalizer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var USER_ENDPOINT = 'users/';
var OccUserDetailsAdapter = /** @class */ (function () {
    function OccUserDetailsAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    OccUserDetailsAdapter.prototype.getUserEndpoint = /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var endpoint = "" + USER_ENDPOINT + userId;
        return this.occEndpoints.getEndpoint(endpoint);
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    OccUserDetailsAdapter.prototype.load = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var url = this.getUserEndpoint(userId);
        return this.http.get(url).pipe(catchError(function (error) { return throwError(error); }), this.converter.pipeable(USER_NORMALIZER));
    };
    /**
     * @param {?} userId
     * @param {?} user
     * @return {?}
     */
    OccUserDetailsAdapter.prototype.update = /**
     * @param {?} userId
     * @param {?} user
     * @return {?}
     */
    function (userId, user) {
        /** @type {?} */
        var url = this.getUserEndpoint(userId);
        user = this.converter.convert(user, USER_SERIALIZER);
        return this.http
            .patch(url, user)
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    OccUserDetailsAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccUserDetailsAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccUserDetailsAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var USER_ENDPOINT$1 = 'users/';
/** @type {?} */
var ADDRESSES_ENDPOINT = '/addresses';
/** @type {?} */
var ADDRESSES_VERIFICATION_ENDPOINT = '/addresses/verification';
var OccUserAddressAdapter = /** @class */ (function () {
    function OccUserAddressAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    OccUserAddressAdapter.prototype.getUserEndpoint = /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var endpoint = "" + USER_ENDPOINT$1 + userId;
        return this.occEndpoints.getEndpoint(endpoint);
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    OccUserAddressAdapter.prototype.loadAll = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var url = this.getUserEndpoint(userId) + ADDRESSES_ENDPOINT;
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http.get(url, { headers: headers }).pipe(catchError(function (error) { return throwError(error); }), map(function (addressList) { return addressList.addresses; }), this.converter.pipeableMany(ADDRESS_NORMALIZER));
    };
    /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    OccUserAddressAdapter.prototype.add = /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    function (userId, address) {
        /** @type {?} */
        var url = this.getUserEndpoint(userId) + ADDRESSES_ENDPOINT;
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        address = this.converter.convert(address, ADDRESS_SERIALIZER);
        return this.http
            .post(url, address, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
    OccUserAddressAdapter.prototype.update = /**
     * @param {?} userId
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
    function (userId, addressId, address) {
        /** @type {?} */
        var url = this.getUserEndpoint(userId) + ADDRESSES_ENDPOINT + '/' + addressId;
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        address = this.converter.convert(address, ADDRESS_SERIALIZER);
        return this.http
            .patch(url, address, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    OccUserAddressAdapter.prototype.verify = /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    function (userId, address) {
        /** @type {?} */
        var url = this.getUserEndpoint(userId) + ADDRESSES_VERIFICATION_ENDPOINT;
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        address = this.converter.convert(address, ADDRESS_SERIALIZER);
        return this.http.post(url, address, { headers: headers }).pipe(catchError(function (error) { return throwError(error); }), this.converter.pipeable(ADDRESS_VALIDATION_NORMALIZER));
    };
    /**
     * @param {?} userId
     * @param {?} addressId
     * @return {?}
     */
    OccUserAddressAdapter.prototype.delete = /**
     * @param {?} userId
     * @param {?} addressId
     * @return {?}
     */
    function (userId, addressId) {
        /** @type {?} */
        var url = this.getUserEndpoint(userId) + ADDRESSES_ENDPOINT + '/' + addressId;
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .delete(url, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    OccUserAddressAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccUserAddressAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccUserAddressAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var USER_ENDPOINT$2 = 'users/';
/** @type {?} */
var FORGOT_PASSWORD_ENDPOINT = '/forgottenpasswordtokens';
/** @type {?} */
var RESET_PASSWORD_ENDPOINT = '/resetpassword';
/** @type {?} */
var UPDATE_EMAIL_ENDPOINT = '/login';
/** @type {?} */
var UPDATE_PASSWORD_ENDPOINT = '/password';
/** @type {?} */
var CONSENTS_TEMPLATES_ENDPOINT = '/consenttemplates';
/** @type {?} */
var CONSENTS_ENDPOINT = '/consents';
/** @type {?} */
var TITLES_ENDPOINT = 'titles';
var OccUserAccountAdapter = /** @class */ (function () {
    function OccUserAccountAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @private
     * @param {?=} userId
     * @return {?}
     */
    OccUserAccountAdapter.prototype.getUserEndpoint = /**
     * @private
     * @param {?=} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var endpoint = userId ? "" + USER_ENDPOINT$2 + userId : USER_ENDPOINT$2;
        return this.occEndpoints.getEndpoint(endpoint);
    };
    /**
     * @param {?} user
     * @return {?}
     */
    OccUserAccountAdapter.prototype.register = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        /** @type {?} */
        var url = this.getUserEndpoint();
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        user = this.converter.convert(user, USER_REGISTER_FORM_SERIALIZER);
        return this.http.post(url, user, { headers: headers }).pipe(catchError(function (error) { return throwError(error); }), this.converter.pipeable(USER_NORMALIZER));
    };
    /**
     * @param {?} userEmailAddress
     * @return {?}
     */
    OccUserAccountAdapter.prototype.requestForgotPasswordEmail = /**
     * @param {?} userEmailAddress
     * @return {?}
     */
    function (userEmailAddress) {
        /** @type {?} */
        var url = this.occEndpoints.getEndpoint(FORGOT_PASSWORD_ENDPOINT);
        /** @type {?} */
        var httpParams = new HttpParams().set('userId', userEmailAddress);
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        return this.http
            .post(url, httpParams, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} token
     * @param {?} newPassword
     * @return {?}
     */
    OccUserAccountAdapter.prototype.resetPassword = /**
     * @param {?} token
     * @param {?} newPassword
     * @return {?}
     */
    function (token, newPassword) {
        /** @type {?} */
        var url = this.occEndpoints.getEndpoint(RESET_PASSWORD_ENDPOINT);
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        return this.http
            .post(url, { token: token, newPassword: newPassword }, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} currentPassword
     * @param {?} newUserId
     * @return {?}
     */
    OccUserAccountAdapter.prototype.updateEmail = /**
     * @param {?} userId
     * @param {?} currentPassword
     * @param {?} newUserId
     * @return {?}
     */
    function (userId, currentPassword, newUserId) {
        /** @type {?} */
        var url = this.getUserEndpoint(userId) + UPDATE_EMAIL_ENDPOINT;
        /** @type {?} */
        var httpParams = new HttpParams()
            .set('password', currentPassword)
            .set('newLogin', newUserId);
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .put(url, httpParams, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} oldPassword
     * @param {?} newPassword
     * @return {?}
     */
    OccUserAccountAdapter.prototype.updatePassword = /**
     * @param {?} userId
     * @param {?} oldPassword
     * @param {?} newPassword
     * @return {?}
     */
    function (userId, oldPassword, newPassword) {
        /** @type {?} */
        var url = this.getUserEndpoint(userId) + UPDATE_PASSWORD_ENDPOINT;
        /** @type {?} */
        var httpParams = new HttpParams()
            .set('old', oldPassword)
            .set('new', newPassword);
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .put(url, httpParams, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    OccUserAccountAdapter.prototype.remove = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var url = this.getUserEndpoint(userId);
        return this.http
            .delete(url)
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @return {?}
     */
    OccUserAccountAdapter.prototype.loadTitles = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.occEndpoints.getEndpoint(TITLES_ENDPOINT))
            .pipe(catchError(function (error) { return throwError(error.json()); }), map(function (titleList) { return titleList.titles; }), this.converter.pipeableMany(TITLE_NORMALIZER));
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    OccUserAccountAdapter.prototype.loadConsents = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var url = this.getUserEndpoint() + userId + CONSENTS_TEMPLATES_ENDPOINT;
        /** @type {?} */
        var headers = new HttpHeaders({ 'Cache-Control': 'no-cache' });
        return this.http
            .get(url, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} consentTemplateId
     * @param {?} consentTemplateVersion
     * @return {?}
     */
    OccUserAccountAdapter.prototype.giveConsent = /**
     * @param {?} userId
     * @param {?} consentTemplateId
     * @param {?} consentTemplateVersion
     * @return {?}
     */
    function (userId, consentTemplateId, consentTemplateVersion) {
        /** @type {?} */
        var url = this.getUserEndpoint() + userId + CONSENTS_ENDPOINT;
        /** @type {?} */
        var httpParams = new HttpParams()
            .set('consentTemplateId', consentTemplateId)
            .set('consentTemplateVersion', consentTemplateVersion.toString());
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache',
        });
        return this.http
            .post(url, httpParams, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} consentCode
     * @return {?}
     */
    OccUserAccountAdapter.prototype.withdrawConsent = /**
     * @param {?} userId
     * @param {?} consentCode
     * @return {?}
     */
    function (userId, consentCode) {
        /** @type {?} */
        var headers = new HttpHeaders({
            'Cache-Control': 'no-cache',
        });
        /** @type {?} */
        var url = this.getUserEndpoint() + userId + CONSENTS_ENDPOINT + '/' + consentCode;
        return this.http.delete(url, { headers: headers });
    };
    OccUserAccountAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccUserAccountAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccUserAccountAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var USER_ENDPOINT$3 = 'users/';
/** @type {?} */
var PAYMENT_DETAILS_ENDPOINT = '/paymentdetails';
/** @type {?} */
var COUNTRIES_ENDPOINT = 'countries';
/** @type {?} */
var REGIONS_ENDPOINT = 'regions';
/** @type {?} */
var COUNTRIES_TYPE_BILLING = 'BILLING';
/** @type {?} */
var COUNTRIES_TYPE_SHIPPING = 'SHIPPING';
var OccUserPaymentAdapter = /** @class */ (function () {
    function OccUserPaymentAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    OccUserPaymentAdapter.prototype.getPaymentDetailsEndpoint = /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var endpoint = "" + USER_ENDPOINT$3 + userId + PAYMENT_DETAILS_ENDPOINT;
        return this.occEndpoints.getEndpoint(endpoint);
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    OccUserPaymentAdapter.prototype.loadAll = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var url = this.getPaymentDetailsEndpoint(userId) + '?saved=true';
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http.get(url, { headers: headers }).pipe(catchError(function (error) { return throwError(error); }), map(function (methodList) { return methodList.payments; }), this.converter.pipeableMany(PAYMENT_DETAILS_NORMALIZER));
    };
    /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    OccUserPaymentAdapter.prototype.delete = /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    function (userId, paymentMethodID) {
        /** @type {?} */
        var url = this.getPaymentDetailsEndpoint(userId) + ("/" + paymentMethodID);
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .delete(url, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    OccUserPaymentAdapter.prototype.setDefault = /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    function (userId, paymentMethodID) {
        /** @type {?} */
        var url = this.getPaymentDetailsEndpoint(userId) + ("/" + paymentMethodID);
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .patch(url, 
        // TODO: Remove billingAddress property
        { billingAddress: { titleCode: 'mr' }, defaultPayment: true }, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @return {?}
     */
    OccUserPaymentAdapter.prototype.loadBillingCountries = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.occEndpoints.getEndpoint(COUNTRIES_ENDPOINT), {
            params: new HttpParams().set('type', COUNTRIES_TYPE_BILLING),
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }), map(function (countryList) { return countryList.countries; }), this.converter.pipeableMany(COUNTRY_NORMALIZER));
    };
    /**
     * @return {?}
     */
    OccUserPaymentAdapter.prototype.loadDeliveryCountries = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.occEndpoints.getEndpoint(COUNTRIES_ENDPOINT), {
            params: new HttpParams().set('type', COUNTRIES_TYPE_SHIPPING),
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }), map(function (countryList) { return countryList.countries; }), this.converter.pipeableMany(COUNTRY_NORMALIZER));
    };
    /**
     * @param {?} countryIsoCode
     * @return {?}
     */
    OccUserPaymentAdapter.prototype.loadRegions = /**
     * @param {?} countryIsoCode
     * @return {?}
     */
    function (countryIsoCode) {
        /** @type {?} */
        var regionsEndpoint = COUNTRIES_ENDPOINT + "/" + countryIsoCode + "/" + REGIONS_ENDPOINT;
        return this.http
            .get(this.occEndpoints.getEndpoint(regionsEndpoint))
            .pipe(catchError(function (error) { return throwError(error.json()); }), map(function (regionList) { return regionList.regions; }), this.converter.pipeableMany(REGION_NORMALIZER));
    };
    OccUserPaymentAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccUserPaymentAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccUserPaymentAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserOccModule = /** @class */ (function () {
    function UserOccModule() {
    }
    UserOccModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, HttpClientModule],
                    providers: [
                        { provide: UserDetailsAdapter, useClass: OccUserDetailsAdapter },
                        { provide: UserAddressAdapter, useClass: OccUserAddressAdapter },
                        { provide: UserAccountAdapter, useClass: OccUserAccountAdapter },
                        {
                            provide: UserPaymentAdapter,
                            useClass: OccUserPaymentAdapter,
                        },
                        { provide: OrderAdapter, useClass: OccOrderAdapter },
                        { provide: ORDER_NORMALIZER, useClass: OccOrderNormalizer, multi: true },
                    ],
                },] }
    ];
    return UserOccModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OccModule = /** @class */ (function () {
    function OccModule() {
    }
    OccModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ConfigModule.withConfig(defaultOccConfig),
                        CmsOccModule,
                        CartOccModule,
                        ProductOccModule,
                        SiteContextOccModule,
                        StoreFinderOccModule,
                        UserOccModule,
                    ],
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
            target = __assign({}, ((/** @type {?} */ (source))));
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
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (source_1_1 && !source_1_1.done && (_a = source_1.return)) _a.call(source_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return references;
    };
    ProductReferenceNormalizer.decorators = [
        { type: Injectable }
    ];
    return ProductReferenceNormalizer;
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
var SmartEditService = /** @class */ (function () {
    function SmartEditService(cmsService, routingService, zone, winRef) {
        var _this = this;
        this.cmsService = cmsService;
        this.routingService = routingService;
        this.zone = zone;
        this.getPreviewPage = false;
        this.getCmsTicket();
        this.addPageContract();
        if (winRef.nativeWindow) {
            /** @type {?} */
            var window_1 = (/** @type {?} */ (winRef.nativeWindow));
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
         */
        function () {
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
        combineLatest(this.cmsService.getCurrentPage(), this.routingService.getRouterState())
            .pipe(takeWhile(function (_a) {
            var _b = __read(_a, 1), cmsPage = _b[0];
            return cmsPage === undefined;
        }))
            .subscribe(function (_a) {
            var _b = __read(_a, 2), routerState = _b[1];
            if (routerState.nextState && !_this._cmsTicketId) {
                _this._cmsTicketId = routerState.nextState.queryParams['cmsTicketId'];
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
                _this._currentPageId = cmsPage.pageId;
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
     * @protected
     * @param {?} cmsPage
     * @return {?}
     */
    SmartEditService.prototype.goToPreviewPage = /**
     * @protected
     * @param {?} cmsPage
     * @return {?}
     */
    function (cmsPage) {
        // the first page is the smartedit preview page
        if (!this.getPreviewPage) {
            this.getPreviewPage = true;
            if (cmsPage.type === PageType.PRODUCT_PAGE) {
                this.routingService.go({
                    cxRoute: 'product',
                    params: { code: 2053367 },
                });
            }
            else if (cmsPage.type === PageType.CATEGORY_PAGE) {
                this.routingService.go({
                    cxRoute: 'category',
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
        var _this = this;
        if (componentId) {
            this.zone.run(function () {
                // without parentId, it is slot
                if (!parentId) {
                    if (_this._currentPageId) {
                        _this.cmsService.refreshPageById(_this._currentPageId);
                    }
                    else {
                        _this.cmsService.refreshLatestPage();
                    }
                }
                else if (componentType) {
                    _this.cmsService.refreshComponent(componentId);
                }
            });
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SmartEditService.ctorParameters = function () { return [
        { type: CmsService },
        { type: RoutingService },
        { type: NgZone },
        { type: WindowRef }
    ]; };
    /** @nocollapse */ SmartEditService.ngInjectableDef = defineInjectable({ factory: function SmartEditService_Factory() { return new SmartEditService(inject(CmsService), inject(RoutingService), inject(NgZone), inject(WindowRef)); }, token: SmartEditService, providedIn: "root" });
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
        if (request.url.includes('/cms/') && this.service.cmsTicketId) {
            request = request.clone({
                setParams: {
                    cmsTicketId: this.service.cmsTicketId,
                },
            });
        }
        return next.handle(request);
    };
    CmsTicketInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CmsTicketInterceptor.ctorParameters = function () { return [
        { type: SmartEditService }
    ]; };
    return CmsTicketInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var interceptors$1 = [
    {
        provide: HTTP_INTERCEPTORS,
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
            providers: __spread(interceptors$1),
        };
    };
    SmartEditModule.decorators = [
        { type: NgModule, args: [{},] }
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
var  /**
 * @abstract
 */
StoreFinderConfig = /** @class */ (function () {
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
var getStoreFinderState = createFeatureSelector(STORE_FINDER_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getFindStoresState = createSelector(getStoreFinderState, function (storesState) { return storesState.findStores; });
/** @type {?} */
var getFindStoresEntities = createSelector(getFindStoresState, function (state) { return loaderValueSelector(state); });
/** @type {?} */
var getStoresLoading = createSelector(getFindStoresState, function (state) { return loaderLoadingSelector(state); });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getViewAllStoresState = createSelector(getStoreFinderState, function (storesState) { return storesState.viewAllStores; });
/** @type {?} */
var getViewAllStoresEntities = createSelector(getViewAllStoresState, function (state) { return loaderValueSelector(state); });
/** @type {?} */
var getViewAllStoresLoading = createSelector(getViewAllStoresState, function (state) { return loaderLoadingSelector(state); });

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
        { type: Injectable }
    ];
    /** @nocollapse */
    ExternalJsFileLoader.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
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
        { type: Injectable }
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
        { type: Injectable }
    ];
    /** @nocollapse */
    GoogleMapRendererService.ctorParameters = function () { return [
        { type: StoreFinderConfig },
        { type: ExternalJsFileLoader },
        { type: StoreDataService }
    ]; };
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
    function FindStoresEffect(actions$, storeFinderConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.storeFinderConnector = storeFinderConnector;
        this.findStores$ = this.actions$.pipe(ofType(FIND_STORES), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.storeFinderConnector
                .search(payload.queryText, payload.searchConfig, payload.longitudeLatitude)
                .pipe(map(function (data) {
                if (payload.countryIsoCode) {
                    data.stores = data.stores.filter(function (store) {
                        return store.address.country.isocode === payload.countryIsoCode;
                    });
                }
                return new FindStoresSuccess(data);
            }), catchError(function (error) { return of(new FindStoresFail(error)); }));
        }));
        this.findStoreById$ = this.actions$.pipe(ofType(FIND_STORE_BY_ID), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.storeFinderConnector.get(payload.storeId).pipe(map(function (data) { return new FindStoreByIdSuccess(data); }), catchError(function (error) { return of(new FindStoreByIdFail(error)); }));
        }));
    }
    FindStoresEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FindStoresEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: StoreFinderConnector }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], FindStoresEffect.prototype, "findStores$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], FindStoresEffect.prototype, "findStoreById$", void 0);
    return FindStoresEffect;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ViewAllStoresEffect = /** @class */ (function () {
    function ViewAllStoresEffect(actions$, storeFinderConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.storeFinderConnector = storeFinderConnector;
        this.viewAllStores$ = this.actions$.pipe(ofType(VIEW_ALL_STORES), switchMap(function () {
            return _this.storeFinderConnector.getCounts().pipe(map(function (data) { return new ViewAllStoresSuccess(data); }), catchError(function (error) { return of(new ViewAllStoresFail(error)); }));
        }));
    }
    ViewAllStoresEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ViewAllStoresEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: StoreFinderConnector }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], ViewAllStoresEffect.prototype, "viewAllStores$", void 0);
    return ViewAllStoresEffect;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var effects$8 = [FindStoresEffect, ViewAllStoresEffect];

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
var reducerToken$a = new InjectionToken('StoreFinderReducers');
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
        return this.store.pipe(select(getStoresLoading));
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
        return this.store.pipe(select(getFindStoresEntities));
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
        return this.store.pipe(select(getViewAllStoresLoading));
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
        return this.store.pipe(select(getViewAllStoresEntities));
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
        { type: Injectable }
    ];
    /** @nocollapse */
    StoreFinderService.ctorParameters = function () { return [
        { type: Store },
        { type: WindowRef }
    ]; };
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        StoreModule.forFeature(STORE_FINDER_FEATURE, reducerToken$a),
                        EffectsModule.forFeature(effects$8),
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
var StoreFinderCoreModule = /** @class */ (function () {
    function StoreFinderCoreModule() {
    }
    StoreFinderCoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ConfigModule.withConfig(defaultStoreFinderConfig),
                        StoreFinderStoreModule,
                    ],
                    providers: [
                        StoreFinderService,
                        StoreDataService,
                        GoogleMapRendererService,
                        ExternalJsFileLoader,
                        { provide: StoreFinderConfig, useExisting: Config },
                    ],
                },] }
    ];
    return StoreFinderCoreModule;
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
 * @abstract
 */
var  /**
 * @abstract
 */
PersonalizationConfig = /** @class */ (function () {
    function PersonalizationConfig() {
    }
    return PersonalizationConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultPersonalizationConfig = {
    personalization: {
        httpHeaderName: {
            id: 'Occ-Personalization-Id',
            timestamp: 'Occ-Personalization-Time',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PERSONALIZATION_ID_KEY = 'personalization-id';
var OccPersonalizationIdInterceptor = /** @class */ (function () {
    function OccPersonalizationIdInterceptor(config, occEndpoints, winRef, platform) {
        this.config = config;
        this.occEndpoints = occEndpoints;
        this.winRef = winRef;
        this.platform = platform;
        this.requestHeader = this.config.personalization.httpHeaderName.id.toLowerCase();
        this.personalizationId =
            this.winRef.localStorage &&
                this.winRef.localStorage.getItem(PERSONALIZATION_ID_KEY);
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    OccPersonalizationIdInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        var _a;
        if (isPlatformServer(this.platform)) {
            return next.handle(request);
        }
        if (this.personalizationId &&
            request.url.includes(this.occEndpoints.getBaseEndpoint())) {
            request = request.clone({
                setHeaders: (_a = {},
                    _a[this.requestHeader] = this.personalizationId,
                    _a),
            });
        }
        return next.handle(request).pipe(tap(function (event) {
            if (event instanceof HttpResponse) {
                if (event.headers.keys().includes(_this.requestHeader)) {
                    /** @type {?} */
                    var receivedId = event.headers.get(_this.requestHeader);
                    if (_this.personalizationId !== receivedId) {
                        _this.personalizationId = receivedId;
                        _this.winRef.localStorage.setItem(PERSONALIZATION_ID_KEY, _this.personalizationId);
                    }
                }
            }
        }));
    };
    OccPersonalizationIdInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccPersonalizationIdInterceptor.ctorParameters = function () { return [
        { type: PersonalizationConfig },
        { type: OccEndpointsService },
        { type: WindowRef },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return OccPersonalizationIdInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PERSONALIZATION_TIME_KEY = 'personalization-time';
var OccPersonalizationTimeInterceptor = /** @class */ (function () {
    function OccPersonalizationTimeInterceptor(config, occEndpoints, winRef, platform) {
        this.config = config;
        this.occEndpoints = occEndpoints;
        this.winRef = winRef;
        this.platform = platform;
        this.requestHeader = this.config.personalization.httpHeaderName.timestamp.toLowerCase();
        this.timestamp =
            this.winRef.localStorage &&
                this.winRef.localStorage.getItem(PERSONALIZATION_TIME_KEY);
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    OccPersonalizationTimeInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        var _a;
        if (isPlatformServer(this.platform)) {
            return next.handle(request);
        }
        if (this.timestamp &&
            request.url.includes(this.occEndpoints.getBaseEndpoint())) {
            request = request.clone({
                setHeaders: (_a = {},
                    _a[this.requestHeader] = this.timestamp,
                    _a),
            });
        }
        return next.handle(request).pipe(tap(function (event) {
            if (event instanceof HttpResponse) {
                if (event.headers.keys().includes(_this.requestHeader)) {
                    /** @type {?} */
                    var receivedTimestamp = event.headers.get(_this.requestHeader);
                    if (_this.timestamp !== receivedTimestamp) {
                        _this.timestamp = receivedTimestamp;
                        _this.winRef.localStorage.setItem(PERSONALIZATION_TIME_KEY, _this.timestamp);
                    }
                }
            }
        }));
    };
    OccPersonalizationTimeInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccPersonalizationTimeInterceptor.ctorParameters = function () { return [
        { type: PersonalizationConfig },
        { type: OccEndpointsService },
        { type: WindowRef },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return OccPersonalizationTimeInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var interceptors$2 = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: OccPersonalizationIdInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: OccPersonalizationTimeInterceptor,
        multi: true,
    },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PersonalizationModule = /** @class */ (function () {
    function PersonalizationModule() {
    }
    /**
     * @return {?}
     */
    PersonalizationModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: PersonalizationModule,
            providers: __spread(interceptors$2),
        };
    };
    PersonalizationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [ConfigModule.withConfig(defaultPersonalizationConfig)],
                    providers: [{ provide: PersonalizationConfig, useExisting: Config }],
                },] }
    ];
    return PersonalizationModule;
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

export { PageType, ImageType, PriceType, testestsd, LOAD_USER_TOKEN, LOAD_USER_TOKEN_FAIL, LOAD_USER_TOKEN_SUCCESS, REFRESH_USER_TOKEN, REFRESH_USER_TOKEN_FAIL, REFRESH_USER_TOKEN_SUCCESS, LoadUserToken, LoadUserTokenFail, LoadUserTokenSuccess, RefreshUserToken, RefreshUserTokenSuccess, RefreshUserTokenFail, LOAD_CLIENT_TOKEN, LOAD_CLIENT_TOKEN_FAIL, LOAD_CLIENT_TOKEN_SUCCESS, LoadClientToken, LoadClientTokenFail, LoadClientTokenSuccess, LOGIN, LOGOUT, Login, Logout, getAuthState, getUserTokenSelector, getUserTokenState, getUserToken, getClientTokenState, AUTH_FEATURE, CLIENT_TOKEN_DATA, AuthModule, AuthConfig, AuthService, AuthGuard, NotAuthGuard, AuthServices, CREATE_CART, CREATE_CART_FAIL, CREATE_CART_SUCCESS, LOAD_CART, LOAD_CART_FAIL, LOAD_CART_SUCCESS, MERGE_CART, MERGE_CART_SUCCESS, CreateCart, CreateCartFail, CreateCartSuccess, LoadCart, LoadCartFail, LoadCartSuccess, MergeCart, MergeCartSuccess, ADD_ENTRY, ADD_ENTRY_SUCCESS, ADD_ENTRY_FAIL, REMOVE_ENTRY, REMOVE_ENTRY_SUCCESS, REMOVE_ENTRY_FAIL, UPDATE_ENTRY, UPDATE_ENTRY_SUCCESS, UPDATE_ENTRY_FAIL, AddEntry, AddEntrySuccess, AddEntryFail, RemoveEntry, RemoveEntrySuccess, RemoveEntryFail, UpdateEntry, UpdateEntrySuccess, UpdateEntryFail, getCartContentSelector, getRefreshSelector, getEntriesSelector, getCartMergeCompleteSelector, getCartsState, getActiveCartState, getCartState, getCartContent, getRefresh, getLoaded, getCartMergeComplete, getEntriesMap, getEntrySelectorFactory, getEntries, CART_FEATURE, CART_DATA, services, CartService, ANONYMOUS_USERID, CartDataService, CartConnector, CartAdapter, CART_NORMALIZER, CartDeliveryConnector, CartDeliveryAdapter, DELIVERY_ADDRESS_NORMALIZER, DELIVERY_ADDRESS_SERIALIZER, DELIVERY_MODE_NORMALIZER, CartEntryConnector, CartEntryAdapter, CART_MODIFICATION_NORMALIZER, CartPaymentConnector, CartPaymentAdapter, PAYMENT_DETAILS_NORMALIZER, PAYMENT_DETAILS_SERIALIZER, CARD_TYPE_NORMALIZER, CartModule, CHECKOUT_FEATURE, CHECKOUT_DETAILS, CHECKOUT_CLEAR_MISCS_DATA, CheckoutClearMiscsData, ADD_DELIVERY_ADDRESS, ADD_DELIVERY_ADDRESS_FAIL, ADD_DELIVERY_ADDRESS_SUCCESS, SET_DELIVERY_ADDRESS, SET_DELIVERY_ADDRESS_FAIL, SET_DELIVERY_ADDRESS_SUCCESS, LOAD_SUPPORTED_DELIVERY_MODES, LOAD_SUPPORTED_DELIVERY_MODES_FAIL, LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS, CLEAR_SUPPORTED_DELIVERY_MODES, SET_DELIVERY_MODE, SET_DELIVERY_MODE_FAIL, SET_DELIVERY_MODE_SUCCESS, CREATE_PAYMENT_DETAILS, CREATE_PAYMENT_DETAILS_FAIL, CREATE_PAYMENT_DETAILS_SUCCESS, SET_PAYMENT_DETAILS, SET_PAYMENT_DETAILS_FAIL, SET_PAYMENT_DETAILS_SUCCESS, PLACE_ORDER, PLACE_ORDER_FAIL, PLACE_ORDER_SUCCESS, CLEAR_CHECKOUT_STEP, CLEAR_CHECKOUT_DATA, LOAD_CHECKOUT_DETAILS, LOAD_CHECKOUT_DETAILS_FAIL, LOAD_CHECKOUT_DETAILS_SUCCESS, AddDeliveryAddress, AddDeliveryAddressFail, AddDeliveryAddressSuccess, SetDeliveryAddress, SetDeliveryAddressFail, SetDeliveryAddressSuccess, LoadSupportedDeliveryModes, LoadSupportedDeliveryModesFail, LoadSupportedDeliveryModesSuccess, SetDeliveryMode, SetDeliveryModeFail, SetDeliveryModeSuccess, CreatePaymentDetails, CreatePaymentDetailsFail, CreatePaymentDetailsSuccess, SetPaymentDetails, SetPaymentDetailsFail, SetPaymentDetailsSuccess, PlaceOrder, PlaceOrderFail, PlaceOrderSuccess, ClearSupportedDeliveryModes, ClearCheckoutStep, ClearCheckoutData, LoadCheckoutDetails, LoadCheckoutDetailsFail, LoadCheckoutDetailsSuccess, LOAD_CARD_TYPES, LOAD_CARD_TYPES_FAIL, LOAD_CARD_TYPES_SUCCESS, LoadCardTypes, LoadCardTypesFail, LoadCardTypesSuccess, VERIFY_ADDRESS, VERIFY_ADDRESS_FAIL, VERIFY_ADDRESS_SUCCESS, CLEAR_ADDRESS_VERIFICATION_RESULTS, VerifyAddress, VerifyAddressFail, VerifyAddressSuccess, ClearAddressVerificationResults, getDeliveryAddressSelector, getDeliveryModeSelector, getPaymentDetailsSelector, getOrderDetailsSelector, getCheckoutState, getCheckoutStepsState, getCheckoutSteps, getDeliveryAddress, getDeliveryMode, getSupportedDeliveryModes, getSelectedCode, getSelectedDeliveryMode, getPaymentDetails, getCheckoutOrderDetails, getCheckoutDetailsLoaded, getCardTypesState, getCardTypesEntites$1 as getCardTypesEntites, getAllCardTypes, getAddressVerificationResultsState, getAddressVerificationResults$1 as getAddressVerificationResults, CheckoutService, CheckoutModule, CartPageMetaResolver, CheckoutPageMetaResolver, JSP_INCLUDE_CMS_COMPONENT_TYPE, CMS_FLEX_COMPONENT_TYPE, CmsConfig, defaultCmsModuleConfig, CmsStructureConfig, PageRobotsMeta, CmsPageAdapter, CmsPageConnector, CMS_PAGE_NORMALIZE, CmsComponentConnector, CmsComponentAdapter, CMS_COMPONENT_NORMALIZER, CMS_FEATURE, NAVIGATION_DETAIL_ENTITY, COMPONENT_ENTITY, LOAD_PAGE_DATA, LOAD_PAGE_DATA_FAIL, LOAD_PAGE_DATA_SUCCESS, LoadPageData, LoadPageDataFail, LoadPageDataSuccess, LOAD_COMPONENT, LOAD_COMPONENT_FAIL, LOAD_COMPONENT_SUCCESS, GET_COMPONENET_FROM_PAGE, LoadComponent, LoadComponentFail, LoadComponentSuccess, GetComponentFromPage, LOAD_NAVIGATION_ITEMS, LOAD_NAVIGATION_ITEMS_FAIL, LOAD_NAVIGATION_ITEMS_SUCCESS, LoadNavigationItems, LoadNavigationItemsFail, LoadNavigationItemsSuccess, getPageEntitiesSelector, getIndexByType, getPageComponentTypesSelector, getPageState, getPageStateIndex, getIndex, getIndexEntity, getPageEntities, getPageData, getPageComponentTypes, currentSlotSelectorFactory, getComponentEntitiesSelector, getComponentState, getComponentEntities, componentStateSelectorFactory, componentSelectorFactory, getNavigationEntryItemState, getSelectedNavigationEntryItemState, itemsSelectorFactory, getCmsState, CmsService, PageMetaService, CmsModule, ComponentMapperService, CmsStructureConfigService, DynamicAttributeService, PageMetaResolver, ContentPageMetaResolver, CmsPageTitleModule, provideConfig, provideConfigFactory, configurationFactory, Config, ConfigChunk, ConfigModule, ServerConfig, defaultServerConfig, provideConfigValidator, validateConfig, ConfigValidatorToken, CxApiModule, CxApiService, GLOBAL_MESSAGE_FEATURE, ADD_MESSAGE, REMOVE_MESSAGE, REMOVE_MESSAGES_BY_TYPE, AddMessage, RemoveMessage, RemoveMessagesByType, getGlobalMessageState, getGlobalMessageEntities, GlobalMessageModule, GlobalMessageService, GlobalMessageType, errorHandlers, httpErrorInterceptors, BadGatewayHandler, BadRequestHandler, ConflictHandler, ForbiddenHandler, GatewayTimeoutHandler, NotFoundHandler, HttpErrorHandler, UnknownErrorHandler, CxDatePipe, TranslatePipe, TranslationService, TranslationChunkService, I18nModule, I18nConfig, I18nextTranslationService, I18nTestingModule, MockTranslatePipe, occServerConfigFromMetaTagFactory, mediaServerConfigFromMetaTagFactory, OCC_BASE_URL_META_TAG_NAME, OCC_BASE_URL_META_TAG_PLACEHOLDER, MEDIA_BASE_URL_META_TAG_NAME, MEDIA_BASE_URL_META_TAG_PLACEHOLDER, defaultOccConfig, OccConfig, occConfigValidator, Occ, OccModule, OccEndpointsService, USE_CLIENT_TOKEN, InterceptorUtil, OccCartAdapter, OccCartDeliveryAdapter, OccCartEntryAdapter, OccCartPaymentAdapter, OccCartNormalizer, CartOccModule, OccCmsPageAdapter, OccCmsComponentAdapter, OccCmsPageNormalizer, CmsOccModule, ProductImageNormalizer, ProductReferenceNormalizer, OccProductSearchPageNormalizer, OccProductReferencesListNormalizer, ProductNameNormalizer, OccProductReferencesAdapter, OccProductReviewsAdapter, OccProductSearchAdapter, OccProductAdapter, ProductOccModule, SiteContextOccModule, SiteContextInterceptor, OccSiteAdapter, StoreFinderOccModule, OccStoreFinderAdapter, OccUserAddressAdapter, OccUserAccountAdapter, OccUserDetailsAdapter, OccUserPaymentAdapter, OccOrderAdapter, OccOrderNormalizer, UserOccModule, ProductConnector, ProductAdapter, PRODUCT_NORMALIZER, PRODUCT_REFERENCES_NORMALIZER, ProductReferencesAdapter, ProductReferencesConnector, ProductReviewsConnector, ProductReviewsAdapter, PRODUCT_REVIEW_NORMALIZER, PRODUCT_REVIEW_SERIALIZER, ProductSearchConnector, ProductSearchAdapter, PRODUCT_SEARCH_PAGE_NORMALIZER, PRODUCT_SUGGESTION_NORMALIZER, ProductReferenceService, ProductReviewService, ProductSearchService, ProductService, ProductModule, CategoryPageMetaResolver, ProductPageMetaResolver, SearchPageMetaResolver, LOAD_PRODUCT_REFERENCES, LOAD_PRODUCT_REFERENCES_FAIL, LOAD_PRODUCT_REFERENCES_SUCCESS, LoadProductReferences, LoadProductReferencesFail, LoadProductReferencesSuccess, LOAD_PRODUCT_REVIEWS, LOAD_PRODUCT_REVIEWS_FAIL, LOAD_PRODUCT_REVIEWS_SUCCESS, POST_PRODUCT_REVIEW, POST_PRODUCT_REVIEW_FAIL, POST_PRODUCT_REVIEW_SUCCESS, LoadProductReviews, LoadProductReviewsFail, LoadProductReviewsSuccess, PostProductReview, PostProductReviewFail, PostProductReviewSuccess, SEARCH_PRODUCTS, SEARCH_PRODUCTS_FAIL, SEARCH_PRODUCTS_SUCCESS, GET_PRODUCT_SUGGESTIONS, GET_PRODUCT_SUGGESTIONS_SUCCESS, GET_PRODUCT_SUGGESTIONS_FAIL, CLEAN_PRODUCT_SEARCH, SearchProducts, SearchProductsFail, SearchProductsSuccess, GetProductSuggestions, GetProductSuggestionsSuccess, GetProductSuggestionsFail, CleanProductSearchState, LOAD_PRODUCT, LOAD_PRODUCT_FAIL, LOAD_PRODUCT_SUCCESS, LoadProduct, LoadProductFail, LoadProductSuccess, PRODUCT_FEATURE, PRODUCT_DETAIL_ENTITY, getProductsState, getProductReferencesState, getSelectedProductReferencesFactory, getProductReviewsState, getSelectedProductReviewsFactory, getProductsSearchState, getSearchResults$1 as getSearchResults, getAuxSearchResults$1 as getAuxSearchResults, getProductSuggestions$1 as getProductSuggestions, getProductState, getSelectedProductsFactory, getSelectedProductStateFactory, getSelectedProductFactory, getSelectedProductLoadingFactory, getSelectedProductSuccessFactory, getSelectedProductErrorFactory, getAllProductCodes, GO, GO_BY_URL, BACK, FORWARD, SAVE_REDIRECT_URL, CLEAR_REDIRECT_URL, Go, GoByUrl, Back, Forward, SaveRedirectUrl, ClearRedirectUrl, RoutingModule, RoutingService, PageContext, RoutingConfig, UrlModule, UrlPipe, UrlService, ConfigurableRoutesService, initConfigurableRoutes, ConfigurableRoutesModule, RoutingConfigService, LanguageService, CurrencyService, SiteContextModule, SiteContextConfig, serviceMapFactory, ContextServiceMap, LANGUAGE_CONTEXT_ID, CURRENCY_CONTEXT_ID, BASE_SITE_CONTEXT_ID, contextServiceMapProvider, inititializeContext, contextServiceProviders, initSiteContextRoutesHandler, siteContextParamsProviders, SiteConnector, SiteAdapter, LANGUAGE_NORMALIZER, CURRENCY_NORMALIZER, SITE_CONTEXT_FEATURE, LOAD_LANGUAGES, LOAD_LANGUAGES_FAIL, LOAD_LANGUAGES_SUCCESS, SET_ACTIVE_LANGUAGE, LANGUAGE_CHANGE, LoadLanguages, LoadLanguagesFail, LoadLanguagesSuccess, SetActiveLanguage, LanguageChange, LOAD_CURRENCIES, LOAD_CURRENCIES_FAIL, LOAD_CURRENCIES_SUCCESS, SET_ACTIVE_CURRENCY, CURRENCY_CHANGE, LoadCurrencies, LoadCurrenciesFail, LoadCurrenciesSuccess, SetActiveCurrency, CurrencyChange, SET_ACTIVE_BASE_SITE, BASE_SITE_CHANGE, SetActiveBaseSite, BaseSiteChange, getSiteContextState, getLanguagesState, getLanguagesEntities, getActiveLanguage, getAllLanguages, getCurrenciesState, getCurrenciesEntities, getActiveCurrency, getAllCurrencies, getActiveBaseSite, SmartEditModule, SmartEditService, StateModule, getStateSlice, entityLoadMeta, entityFailMeta, entitySuccessMeta, entityResetMeta, ENTITY_LOAD_ACTION, ENTITY_FAIL_ACTION, ENTITY_SUCCESS_ACTION, ENTITY_RESET_ACTION, EntityLoadAction, EntityFailAction, EntitySuccessAction, EntityResetAction, entityLoaderReducer, entityStateSelector, entityValueSelector, entityLoadingSelector, entityErrorSelector, entitySuccessSelector, entityMeta, entityRemoveMeta, entityRemoveAllMeta, ENTITY_REMOVE_ACTION, ENTITY_REMOVE_ALL_ACTION, EntityRemoveAction, EntityRemoveAllAction, entityReducer, initialEntityState, entitySelector, loadMeta, failMeta, successMeta, resetMeta, LOADER_LOAD_ACTION, LOADER_FAIL_ACTION, LOADER_SUCCESS_ACTION, LOADER_RESET_ACTION, LoaderLoadAction, LoaderFailAction, LoaderSuccessAction, LoaderResetAction, loaderReducer, initialLoaderState, loaderValueSelector, loaderLoadingSelector, loaderErrorSelector, loaderSuccessSelector, ofLoaderLoad, ofLoaderFail, ofLoaderSuccess, StorageSyncType, StateTransferType, StateConfig, metaReducersFactory, META_REDUCER, StoreFinderConfig, ON_HOLD, FIND_STORES, FIND_STORES_FAIL, FIND_STORES_SUCCESS, FIND_STORE_BY_ID, FIND_STORE_BY_ID_FAIL, FIND_STORE_BY_ID_SUCCESS, OnHold, FindStores, FindStoresFail, FindStoresSuccess, FindStoreById, FindStoreByIdFail, FindStoreByIdSuccess, VIEW_ALL_STORES, VIEW_ALL_STORES_FAIL, VIEW_ALL_STORES_SUCCESS, ViewAllStores, ViewAllStoresFail, ViewAllStoresSuccess, getFindStoresState, getFindStoresEntities, getStoresLoading, getViewAllStoresState, getViewAllStoresEntities, getViewAllStoresLoading, STORE_FINDER_FEATURE, STORE_FINDER_DATA, ExternalJsFileLoader, GoogleMapRendererService, StoreFinderService, StoreDataService, StoreFinderCoreModule, StoreFinderConnector, StoreFinderAdapter, POINT_OF_SERVICE_NORMALIZER, STORE_FINDER_SEARCH_PAGE_NORMALIZER, STORE_COUNT_NORMALIZER, CLEAR_MISCS_DATA, ClearMiscsData, LOAD_BILLING_COUNTRIES, LOAD_BILLING_COUNTRIES_FAIL, LOAD_BILLING_COUNTRIES_SUCCESS, LoadBillingCountries, LoadBillingCountriesFail, LoadBillingCountriesSuccess, LOAD_DELIVERY_COUNTRIES, LOAD_DELIVERY_COUNTRIES_FAIL, LOAD_DELIVERY_COUNTRIES_SUCCESS, LoadDeliveryCountries, LoadDeliveryCountriesFail, LoadDeliveryCountriesSuccess, FORGOT_PASSWORD_EMAIL_REQUEST, FORGOT_PASSWORD_EMAIL_REQUEST_SUCCESS, FORGOT_PASSWORD_EMAIL_REQUEST_FAIL, ForgotPasswordEmailRequest, ForgotPasswordEmailRequestFail, ForgotPasswordEmailRequestSuccess, LOAD_ORDER_DETAILS, LOAD_ORDER_DETAILS_FAIL, LOAD_ORDER_DETAILS_SUCCESS, CLEAR_ORDER_DETAILS, LoadOrderDetails, LoadOrderDetailsFail, LoadOrderDetailsSuccess, ClearOrderDetails, LOAD_USER_PAYMENT_METHODS, LOAD_USER_PAYMENT_METHODS_FAIL, LOAD_USER_PAYMENT_METHODS_SUCCESS, SET_DEFAULT_USER_PAYMENT_METHOD, SET_DEFAULT_USER_PAYMENT_METHOD_FAIL, SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS, DELETE_USER_PAYMENT_METHOD, DELETE_USER_PAYMENT_METHOD_FAIL, DELETE_USER_PAYMENT_METHOD_SUCCESS, LoadUserPaymentMethods, LoadUserPaymentMethodsFail, LoadUserPaymentMethodsSuccess, SetDefaultUserPaymentMethod, SetDefaultUserPaymentMethodFail, SetDefaultUserPaymentMethodSuccess, DeleteUserPaymentMethod, DeleteUserPaymentMethodFail, DeleteUserPaymentMethodSuccess, LOAD_REGIONS, LOAD_REGIONS_SUCCESS, LOAD_REGIONS_FAIL, LoadRegions, LoadRegionsFail, LoadRegionsSuccess, RESET_PASSWORD, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL, ResetPassword, ResetPasswordFail, ResetPasswordSuccess, LOAD_TITLES, LOAD_TITLES_FAIL, LOAD_TITLES_SUCCESS, LoadTitles, LoadTitlesFail, LoadTitlesSuccess, UPDATE_EMAIL, UPDATE_EMAIL_ERROR, UPDATE_EMAIL_SUCCESS, RESET_EMAIL, UpdateEmailAction, UpdateEmailSuccessAction, UpdateEmailErrorAction, ResetUpdateEmailAction, UPDATE_PASSWORD, UPDATE_PASSWORD_FAIL, UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_RESET, UpdatePassword, UpdatePasswordFail, UpdatePasswordSuccess, UpdatePasswordReset, LOAD_USER_ADDRESSES, LOAD_USER_ADDRESSES_FAIL, LOAD_USER_ADDRESSES_SUCCESS, ADD_USER_ADDRESS, ADD_USER_ADDRESS_FAIL, ADD_USER_ADDRESS_SUCCESS, UPDATE_USER_ADDRESS, UPDATE_USER_ADDRESS_FAIL, UPDATE_USER_ADDRESS_SUCCESS, DELETE_USER_ADDRESS, DELETE_USER_ADDRESS_FAIL, DELETE_USER_ADDRESS_SUCCESS, LoadUserAddresses, LoadUserAddressesFail, LoadUserAddressesSuccess, AddUserAddress, AddUserAddressFail, AddUserAddressSuccess, UpdateUserAddress, UpdateUserAddressFail, UpdateUserAddressSuccess, DeleteUserAddress, DeleteUserAddressFail, DeleteUserAddressSuccess, LOAD_USER_CONSENTS, LOAD_USER_CONSENTS_SUCCESS, LOAD_USER_CONSENTS_FAIL, RESET_LOAD_USER_CONSENTS, GIVE_USER_CONSENT, GIVE_USER_CONSENT_FAIL, GIVE_USER_CONSENT_SUCCESS, RESET_GIVE_USER_CONSENT_PROCESS, WITHDRAW_USER_CONSENT, WITHDRAW_USER_CONSENT_FAIL, WITHDRAW_USER_CONSENT_SUCCESS, RESET_WITHDRAW_USER_CONSENT_PROCESS, LoadUserConsents, LoadUserConsentsFail, LoadUserConsentsSuccess, ResetLoadUserConsents, GiveUserConsent, GiveUserConsentFail, GiveUserConsentSuccess, ResetGiveUserConsentProcess, WithdrawUserConsent, WithdrawUserConsentFail, WithdrawUserConsentSuccess, ResetWithdrawUserConsentProcess, LOAD_USER_DETAILS, LOAD_USER_DETAILS_FAIL, LOAD_USER_DETAILS_SUCCESS, UPDATE_USER_DETAILS, UPDATE_USER_DETAILS_FAIL, UPDATE_USER_DETAILS_SUCCESS, RESET_USER_DETAILS, LoadUserDetails, LoadUserDetailsFail, LoadUserDetailsSuccess, UpdateUserDetails, UpdateUserDetailsFail, UpdateUserDetailsSuccess, ResetUpdateUserDetails, LOAD_USER_ORDERS, LOAD_USER_ORDERS_FAIL, LOAD_USER_ORDERS_SUCCESS, CLEAR_USER_ORDERS, LoadUserOrders, LoadUserOrdersFail, LoadUserOrdersSuccess, ClearUserOrders, REGISTER_USER, REGISTER_USER_FAIL, REGISTER_USER_SUCCESS, REMOVE_USER, REMOVE_USER_FAIL, REMOVE_USER_SUCCESS, REMOVE_USER_RESET, RegisterUser, RegisterUserFail, RegisterUserSuccess, RemoveUser, RemoveUserFail, RemoveUserSuccess, RemoveUserReset, getBillingCountriesState, getBillingCountriesEntites, getAllBillingCountries, getDeliveryCountriesState, getDeliveryCountriesEntites, getAllDeliveryCountries, countrySelectorFactory, getUserState, getOrderState, getOrderDetails, getPaymentMethodsState, getPaymentMethods, getPaymentMethodsLoading, getRegionsState, getAllRegions, getResetPassword, getTitlesState, getTitlesEntites, getAllTitles, titleSelectorFactory, getAddressesLoaderState, getAddresses, getAddressesLoading, getConsentsState, getConsentsValue, getConsentsLoading, getConsentsSuccess, getConsentsError, getDetailsState, getDetails, getOrdersState, getOrdersLoaded, getOrders, USER_FEATURE, UPDATE_EMAIL_PROCESS_ID, UPDATE_PASSWORD_PROCESS_ID, UPDATE_USER_DETAILS_PROCESS_ID, REMOVE_USER_PROCESS_ID, GIVE_CONSENT_PROCESS_ID, WITHDRAW_CONSENT_PROCESS_ID, USER_CONSENTS, USER_PAYMENT_METHODS, USER_ORDERS, USER_ADDRESSES, UserService, UserModule, UserAccountConnector, UserAccountAdapter, USER_REGISTER_FORM_SERIALIZER, TITLE_NORMALIZER, UserAddressConnector, UserAddressAdapter, ADDRESS_NORMALIZER, ADDRESS_SERIALIZER, ADDRESS_VALIDATION_NORMALIZER, UserDetailsConnector, UserDetailsAdapter, USER_NORMALIZER, USER_SERIALIZER, UserPaymentConnector, UserPaymentAdapter, COUNTRY_NORMALIZER, REGION_NORMALIZER, OrderConnector, OrderAdapter, ORDER_NORMALIZER, ORDER_HISTORY_NORMALIZER, ConverterService, WindowRef, PersonalizationModule, PersonalizationConfig, defaultAuthConfig as ɵbe, AuthErrorInterceptor as ɵbl, ClientTokenInterceptor as ɵbi, interceptors as ɵbh, UserTokenInterceptor as ɵbk, ClientAuthenticationTokenService as ɵbc, ClientErrorHandlingService as ɵbf, UserAuthenticationTokenService as ɵbb, UserErrorHandlingService as ɵbg, AuthStoreModule as ɵm, authStoreConfigFactory as ɵl, ClientTokenEffect as ɵba, effects$1 as ɵy, UserTokenEffects as ɵz, clearAuthState as ɵw, getReducers$1 as ɵt, metaReducers as ɵx, reducerProvider$1 as ɵv, reducerToken$1 as ɵu, reducer$1 as ɵbd, CartStoreModule as ɵbm, CartEntryEffects as ɵbu, CartEffects as ɵbt, effects$3 as ɵbs, reducer$2 as ɵbv, clearCartState as ɵbq, getReducers$2 as ɵbn, metaReducers$1 as ɵbr, reducerProvider$2 as ɵbp, reducerToken$2 as ɵbo, CheckoutStoreModule as ɵcj, AddressVerificationEffect as ɵcd, CardTypesEffects as ɵcc, CheckoutEffects as ɵcb, effects$4 as ɵca, getAddressVerificationResults as ɵbz, reducer$7 as ɵby, getCardTypesEntites as ɵbx, reducer$6 as ɵbw, reducer$9 as ɵck, clearCheckoutState as ɵch, getReducers$5 as ɵce, metaReducers$2 as ɵci, reducerProvider$5 as ɵcg, reducerToken$5 as ɵcf, CmsStoreModule as ɵcp, cmsStoreConfigFactory as ɵco, ComponentEffects as ɵcx, effects$5 as ɵcv, NavigationEntryItemEffects as ɵcy, PageEffects as ɵcw, clearCmsState as ɵct, getReducers$6 as ɵcq, metaReducers$3 as ɵcu, reducerProvider$6 as ɵcs, reducerToken$6 as ɵcr, reducer$a as ɵdb, reducer$b as ɵcz, reducer$c as ɵda, ServerConfig as ɵed, provideConfigValidator as ɵek, HttpErrorInterceptor as ɵec, GlobalMessageStoreModule as ɵdx, reducer$8 as ɵeb, getReducers$4 as ɵdy, reducerProvider$4 as ɵea, reducerToken$4 as ɵdz, defaultI18nConfig as ɵee, i18nextInit as ɵeg, i18nextProviders as ɵef, MockDatePipe as ɵeh, MockTranslationService as ɵei, defaultOccProductConfig as ɵej, defaultPersonalizationConfig as ɵgw, interceptors$2 as ɵgx, OccPersonalizationIdInterceptor as ɵgy, OccPersonalizationTimeInterceptor as ɵgz, ProcessModule as ɵgq, PROCESS_FEATURE as ɵgs, ProcessStoreModule as ɵgr, getReducers$9 as ɵgt, reducerProvider$9 as ɵgv, reducerToken$9 as ɵgu, effects$6 as ɵdi, ProductReferencesEffects as ɵdj, ProductReviewsEffects as ɵdk, ProductsSearchEffects as ɵdl, ProductEffects as ɵdm, ProductStoreModule as ɵem, productStoreConfigFactory as ɵel, clearProductsState as ɵdq, getReducers$7 as ɵdn, metaReducers$4 as ɵdr, reducerProvider$7 as ɵdp, reducerToken$7 as ɵdo, reducer$d as ɵes, reducer$e as ɵer, getAuxSearchResults as ɵep, getProductSuggestions as ɵeq, getSearchResults as ɵeo, reducer$f as ɵen, UrlMatcherFactoryService as ɵa, UrlParsingService as ɵk, effects as ɵh, RouterEffects as ɵi, CustomSerializer as ɵg, getReducers as ɵc, reducer as ɵd, reducerProvider as ɵf, reducerToken as ɵe, ROUTING_FEATURE as ɵb, defaultSiteContextConfigFactory as ɵet, BaseSiteService as ɵbj, SiteContextParamsService as ɵez, SiteContextRoutesHandler as ɵfb, SiteContextUrlSerializer as ɵfa, CurrenciesEffects as ɵdh, effects$2 as ɵdf, LanguagesEffects as ɵdg, reducer$5 as ɵey, reducer$4 as ɵex, getReducers$3 as ɵdc, reducerProvider$3 as ɵde, reducerToken$3 as ɵdd, reducer$3 as ɵew, SiteContextStoreModule as ɵev, siteContextStoreConfigFactory as ɵeu, CmsTicketInterceptor as ɵfd, interceptors$1 as ɵfc, EntityFailAction as ɵcm, EntityLoadAction as ɵcl, EntityResetAction as ɵfn, EntitySuccessAction as ɵcn, DEFAULT_LOCAL_STORAGE_KEY as ɵn, DEFAULT_SESSION_STORAGE_KEY as ɵo, defaultStateConfig as ɵp, stateMetaReducers as ɵq, getStorageSyncReducer as ɵr, getTransferStateReducer as ɵs, defaultStoreFinderConfig as ɵff, FindStoresEffect as ɵfl, effects$8 as ɵfk, ViewAllStoresEffect as ɵfm, getReducers$a as ɵfh, reducerProvider$a as ɵfj, reducerToken$a as ɵfi, getStoreFinderState as ɵfe, StoreFinderStoreModule as ɵfg, BillingCountriesEffect as ɵfq, DeliveryCountriesEffects as ɵfr, ForgotPasswordEffects as ɵgc, effects$7 as ɵfp, OrderDetailsEffect as ɵfs, UserPaymentMethodsEffects as ɵft, RegionsEffects as ɵfu, ResetPasswordEffects as ɵfv, TitlesEffects as ɵfw, UpdateEmailEffects as ɵgd, UpdatePasswordEffects as ɵge, UserAddressesEffects as ɵfx, UserConsentsEffect as ɵfy, UserDetailsEffects as ɵfz, UserOrdersEffect as ɵga, UserRegisterEffects as ɵgb, reducer$g as ɵgh, reducer$h as ɵgm, clearUserState as ɵdv, getReducers$8 as ɵds, metaReducers$5 as ɵdw, reducerProvider$8 as ɵdu, reducerToken$8 as ɵdt, reducer$i as ɵgl, reducer$j as ɵgj, reducer$k as ɵgo, reducer$l as ɵgp, reducer$m as ɵgn, reducer$n as ɵgg, reducer$o as ɵgi, reducer$p as ɵgf, reducer$q as ɵgk, UserStoreModule as ɵfo };

//# sourceMappingURL=spartacus-core.js.map
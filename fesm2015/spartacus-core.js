import { CommonModule, Location, DOCUMENT, isPlatformBrowser, isPlatformServer, DatePipe, getLocaleId } from '@angular/common';
import { HttpHeaders, HttpErrorResponse, HttpParams, HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { InjectionToken, Optional, NgModule, Injectable, ɵɵdefineInjectable, ɵɵinject, Inject, PLATFORM_ID, APP_INITIALIZER, Injector, INJECTOR, Pipe, ChangeDetectorRef, NgZone } from '@angular/core';
import { Observable, of, throwError, Subscription, combineLatest, iif } from 'rxjs';
import { filter, map, take, switchMap, tap, catchError, exhaustMap, mergeMap, shareReplay, groupBy, pluck, delay, concatMap, withLatestFrom, takeWhile } from 'rxjs/operators';
import { createFeatureSelector, createSelector, select, Store, INIT, UPDATE, META_REDUCERS, combineReducers, StoreModule } from '@ngrx/store';
import { ROUTER_NAVIGATION, ROUTER_ERROR, ROUTER_CANCEL, ROUTER_NAVIGATED, StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { __decorate, __metadata } from 'tslib';
import { Router, PRIMARY_OUTLET, DefaultUrlSerializer, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, UrlSerializer, RouterModule } from '@angular/router';
import { ofType, Actions, Effect, EffectsModule } from '@ngrx/effects';
import { makeStateKey, TransferState, Meta } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import i18next from 'i18next';
import i18nextXhrBackend from 'i18next-xhr-backend';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class ServerConfig {
}
/** @type {?} */
const defaultServerConfig = {};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
function deepMerge(target = {}, ...sources) {
    if (!sources.length) {
        return target;
    }
    /** @type {?} */
    const source = sources.shift() || {};
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (source[key] instanceof Date) {
                Object.assign(target, { [key]: source[key] });
            }
            else if (isObject(source[key])) {
                if (!target[key]) {
                    Object.assign(target, { [key]: {} });
                }
                deepMerge(target[key], source[key]);
            }
            else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    return deepMerge(target, ...sources);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ConfigValidatorToken = new InjectionToken('ConfigurationValidator');
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
    for (const validate of configValidators) {
        /** @type {?} */
        const warning = validate(config);
        if (warning) {
            console.warn(warning);
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Global Configuration injection token, can be used to inject configuration to any part of the app
 * @type {?}
 */
const Config = new InjectionToken('Configuration');
/**
 * Config chunk token, can be used to provide configuration chunk and contribute to the global configuration object.
 * Should not be used directly, use `provideConfig` or import `ConfigModule.withConfig` instead.
 * @type {?}
 */
const ConfigChunk = new InjectionToken('ConfigurationChunk');
/**
 * Helper function to provide configuration chunk using ConfigChunk token
 *
 * @param {?=} config Config object to merge with the global configuration
 * @return {?}
 */
function provideConfig(config = {}) {
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
    const config = deepMerge({}, ...configChunks);
    if (!config.production) {
        validateConfig(config, configValidators || []);
    }
    return config;
}
class ConfigModule {
    /**
     * Import ConfigModule and contribute config to the global configuration
     *
     * @param {?} config Config object to merge with the global configuration
     * @return {?}
     */
    static withConfig(config) {
        return {
            ngModule: ConfigModule,
            providers: [provideConfig(config)],
        };
    }
    /**
     * Import ConfigModule and contribute config to the global configuration using factory function
     *
     * @param {?} configFactory Factory function that will generate configuration
     * @param {?=} deps Optional dependencies to factory function
     * @return {?}
     */
    static withConfigFactory(configFactory, deps) {
        return {
            ngModule: ConfigModule,
            providers: [provideConfigFactory(configFactory, deps)],
        };
    }
    /**
     * Module with providers, should be imported only once, if possible, at the root of the app.
     *
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = {}) {
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
    }
}
ConfigModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class OccConfig extends ServerConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class AuthConfig extends OccConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultAuthConfig = {
    authentication: {
        client_id: 'mobile_android',
        client_secret: 'secret',
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const AUTH_FEATURE = 'auth';
/** @type {?} */
const CLIENT_TOKEN_DATA = '[Auth] Client Token Data';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOADER_LOAD_ACTION = '[LOADER] LOAD';
/** @type {?} */
const LOADER_FAIL_ACTION = '[LOADER] FAIL';
/** @type {?} */
const LOADER_SUCCESS_ACTION = '[LOADER] SUCCESS';
/** @type {?} */
const LOADER_RESET_ACTION = '[LOADER] RESET';
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
class LoaderLoadAction {
    /**
     * @param {?} entityType
     */
    constructor(entityType) {
        this.type = LOADER_LOAD_ACTION;
        this.meta = loadMeta(entityType);
    }
}
class LoaderFailAction {
    /**
     * @param {?} entityType
     * @param {?=} error
     */
    constructor(entityType, error) {
        this.type = LOADER_FAIL_ACTION;
        this.meta = failMeta(entityType, error);
    }
}
class LoaderSuccessAction {
    /**
     * @param {?} entityType
     */
    constructor(entityType) {
        this.type = LOADER_SUCCESS_ACTION;
        this.meta = successMeta(entityType);
    }
}
class LoaderResetAction {
    /**
     * @param {?} entityType
     */
    constructor(entityType) {
        this.type = LOADER_RESET_ACTION;
        this.meta = resetMeta(entityType);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_CLIENT_TOKEN = '[Token] Create Client Token';
/** @type {?} */
const LOAD_CLIENT_TOKEN_FAIL = '[Token] Create Client Token Fail';
/** @type {?} */
const LOAD_CLIENT_TOKEN_SUCCESS = '[Token] Create Client Token Success';
class LoadClientToken extends LoaderLoadAction {
    constructor() {
        super(CLIENT_TOKEN_DATA);
        this.type = LOAD_CLIENT_TOKEN;
    }
}
class LoadClientTokenFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CLIENT_TOKEN_DATA, payload);
        this.payload = payload;
        this.type = LOAD_CLIENT_TOKEN_FAIL;
    }
}
class LoadClientTokenSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CLIENT_TOKEN_DATA);
        this.payload = payload;
        this.type = LOAD_CLIENT_TOKEN_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOGIN = '[Auth] Login';
/** @type {?} */
const LOGOUT = '[Auth] Logout';
class Login {
    constructor() {
        this.type = LOGIN;
    }
}
class Logout {
    constructor() {
        this.type = LOGOUT;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_USER_TOKEN = '[Auth] Load User Token';
/** @type {?} */
const LOAD_USER_TOKEN_FAIL = '[Auth] Load User Token Fail';
/** @type {?} */
const LOAD_USER_TOKEN_SUCCESS = '[Auth] Load User Token Success';
/** @type {?} */
const REFRESH_USER_TOKEN = '[Auth] Refresh User Token';
/** @type {?} */
const REFRESH_USER_TOKEN_FAIL = '[Auth] Refresh User Token Fail';
/** @type {?} */
const REFRESH_USER_TOKEN_SUCCESS = '[Auth] Refresh User Token Success';
class LoadUserToken {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_USER_TOKEN;
    }
}
class LoadUserTokenFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_USER_TOKEN_FAIL;
    }
}
class LoadUserTokenSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_USER_TOKEN_SUCCESS;
    }
}
class RefreshUserToken {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = REFRESH_USER_TOKEN;
    }
}
class RefreshUserTokenSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = REFRESH_USER_TOKEN_SUCCESS;
    }
}
class RefreshUserTokenFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = REFRESH_USER_TOKEN_FAIL;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getAuthState = createFeatureSelector(AUTH_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.clientToken;
/** @type {?} */
const getClientTokenState = createSelector(getAuthState, (ɵ0));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getUserTokenSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.token);
const ɵ0$1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.userToken;
/** @type {?} */
const getUserTokenState = createSelector(getAuthState, (ɵ0$1));
/** @type {?} */
const getUserToken = createSelector(getUserTokenState, getUserTokenSelector);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Loads a new user token
     * @param {?} userId
     * @param {?} password
     * @return {?}
     */
    authorize(userId, password) {
        this.store.dispatch(new LoadUserToken({
            userId: userId,
            password: password,
        }));
    }
    /**
     * Returns the user's token
     * @return {?}
     */
    getUserToken() {
        return this.store.pipe(select(getUserToken));
    }
    /**
     * Refreshes the user token
     * @param {?} token a user token to refresh
     * @return {?}
     */
    refreshUserToken(token) {
        this.store.dispatch(new RefreshUserToken({
            refreshToken: token.refresh_token,
        }));
    }
    /**
     * Store the provided token
     * @param {?} token
     * @return {?}
     */
    authorizeWithToken(token) {
        this.store.dispatch(new LoadUserTokenSuccess(token));
    }
    /**
     * Logout
     * @return {?}
     */
    logout() {
        this.store.dispatch(new Logout());
    }
    /**
     * Returns a client token.  The client token from the store is returned if there is one.
     * Otherwise, an new token is fetched from the backend and saved in the store.
     * @return {?}
     */
    getClientToken() {
        return this.store.pipe(select(getClientTokenState), filter((/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            if (this.isClientTokenLoaded(state)) {
                return true;
            }
            else {
                if (!state.loading) {
                    this.store.dispatch(new LoadClientToken());
                }
                return false;
            }
        })), map((/**
         * @param {?} state
         * @return {?}
         */
        (state) => state.value)));
    }
    /**
     * Fetches a clientToken from the backend ans saves it in the store where getClientToken can use it.
     * The new clientToken is returned.
     * @return {?}
     */
    refreshClientToken() {
        this.store.dispatch(new LoadClientToken());
        return this.store.pipe(select(getClientTokenState), filter((/**
         * @param {?} state
         * @return {?}
         */
        (state) => this.isClientTokenLoaded(state))), map((/**
         * @param {?} state
         * @return {?}
         */
        (state) => state.value)));
    }
    /**
     * @protected
     * @param {?} state
     * @return {?}
     */
    isClientTokenLoaded(state) {
        return (state.success || state.error) && !state.loading;
    }
}
AuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AuthService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ AuthService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(ɵɵinject(Store)); }, token: AuthService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClientErrorHandlingService {
    /**
     * @param {?} authService
     */
    constructor(authService) {
        this.authService = authService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    handleExpiredClientToken(request, next) {
        return this.authService.refreshClientToken().pipe(take(1), switchMap((/**
         * @param {?} token
         * @return {?}
         */
        (token) => {
            return next.handle(this.createNewRequestWithNewToken(request, token));
        })));
    }
    /**
     * @protected
     * @param {?} request
     * @param {?} token
     * @return {?}
     */
    createNewRequestWithNewToken(request, token) {
        request = request.clone({
            setHeaders: {
                Authorization: `${token.token_type} ${token.access_token}`,
            },
        });
        return request;
    }
}
ClientErrorHandlingService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ClientErrorHandlingService.ctorParameters = () => [
    { type: AuthService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const PageType = {
    CONTENT_PAGE: 'ContentPage',
    PRODUCT_PAGE: 'ProductPage',
    CATEGORY_PAGE: 'CategoryPage',
    CATALOG_PAGE: 'CatalogPage',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ROUTING_FEATURE = 'router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState = {
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
function reducer(state = initialState, action) {
    switch (action.type) {
        case ROUTER_NAVIGATION: {
            return Object.assign({}, state, { nextState: action.payload.routerState, navigationId: action.payload.event.id });
        }
        case ROUTER_ERROR:
        case ROUTER_CANCEL: {
            return Object.assign({}, state, { nextState: undefined });
        }
        case ROUTER_NAVIGATED: {
            return {
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
const reducerToken = new InjectionToken('RouterReducers');
/** @type {?} */
const reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
/** @type {?} */
const getRouterFeatureState = createFeatureSelector(ROUTING_FEATURE);
const ɵ0$2 = /**
 * @param {?} state
 * @return {?}
 */
state => state.router;
/** @type {?} */
const getRouterState = createSelector(getRouterFeatureState, (ɵ0$2));
const ɵ1 = /**
 * @param {?} routingState
 * @return {?}
 */
(routingState) => (routingState.state && routingState.state.context) || { id: '' };
/** @type {?} */
const getPageContext = createSelector(getRouterState, (ɵ1));
const ɵ2 = /**
 * @param {?} routingState
 * @return {?}
 */
(routingState) => routingState.nextState && routingState.nextState.context;
/** @type {?} */
const getNextPageContext = createSelector(getRouterState, (ɵ2));
const ɵ3 = /**
 * @param {?} context
 * @return {?}
 */
context => !!context;
/** @type {?} */
const isNavigating = createSelector(getNextPageContext, (ɵ3));
/* The serializer is there to parse the RouterStateSnapshot,
and to reduce the amount of properties to be passed to the reducer.
 */
class CustomSerializer {
    /**
     * @param {?} routerState
     * @return {?}
     */
    serialize(routerState) {
        const { url } = routerState;
        const { queryParams } = routerState.root;
        /** @type {?} */
        let state = (/** @type {?} */ (routerState.root));
        /** @type {?} */
        let cmsRequired = false;
        /** @type {?} */
        let context;
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
                        state.routeConfig.canActivate.find((/**
                         * @param {?} x
                         * @return {?}
                         */
                        x => x && x.guardName === 'CmsPageGuard'))))) {
                cmsRequired = true;
            }
        }
        const { params } = state;
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
                    const pageLabel = '/' + state.url.map((/**
                     * @param {?} urlSegment
                     * @return {?}
                     */
                    urlSegment => urlSegment.path)).join('/');
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
        return { url, queryParams, params, context, cmsRequired };
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const GO = '[Router] Go';
/** @type {?} */
const GO_BY_URL = '[Router] Go By Url';
/** @type {?} */
const BACK = '[Router] Back';
/** @type {?} */
const FORWARD = '[Router] Forward';
class Go {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = GO;
    }
}
class GoByUrl {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = GO_BY_URL;
    }
}
class Back {
    constructor() {
        this.type = BACK;
    }
}
class Forward {
    constructor() {
        this.type = FORWARD;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_LANGUAGES = '[Site-context] Load Languages';
/** @type {?} */
const LOAD_LANGUAGES_FAIL = '[Site-context] Load Languages Fail';
/** @type {?} */
const LOAD_LANGUAGES_SUCCESS = '[Site-context] Load Languages Success';
/** @type {?} */
const SET_ACTIVE_LANGUAGE = '[Site-context] Set Active Language';
/** @type {?} */
const LANGUAGE_CHANGE = '[Site-context] Language Change';
class LoadLanguages {
    constructor() {
        this.type = LOAD_LANGUAGES;
    }
}
class LoadLanguagesFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_LANGUAGES_FAIL;
    }
}
class LoadLanguagesSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_LANGUAGES_SUCCESS;
    }
}
class SetActiveLanguage {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_LANGUAGE;
    }
}
class LanguageChange {
    constructor() {
        this.type = LANGUAGE_CHANGE;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RouterEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} location
     */
    constructor(actions$, router, location) {
        this.actions$ = actions$;
        this.router = router;
        this.location = location;
        this.navigate$ = this.actions$.pipe(ofType(GO), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ path, query: queryParams, extras }) => {
            this.router.navigate(path, Object.assign({ queryParams }, extras));
        })));
        this.navigateBuUrl$ = this.actions$.pipe(ofType(GO_BY_URL), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), tap((/**
         * @param {?} url
         * @return {?}
         */
        url => {
            this.router.navigateByUrl(url);
        })));
        this.clearCmsRoutes$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE, LOGOUT, LOGIN), tap((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            /** @type {?} */
            const filteredConfig = this.router.config.filter((/**
             * @param {?} route
             * @return {?}
             */
            (route) => !(route.data && route.data.cxCmsRouteContext)));
            if (filteredConfig.length !== this.router.config.length) {
                this.router.resetConfig(filteredConfig);
            }
        })));
        this.navigateBack$ = this.actions$.pipe(ofType(BACK), tap((/**
         * @return {?}
         */
        () => this.location.back())));
        this.navigateForward$ = this.actions$.pipe(ofType(FORWARD), tap((/**
         * @return {?}
         */
        () => this.location.forward())));
    }
}
RouterEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RouterEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: Location }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const effects = [RouterEffects];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WindowRef {
    /**
     * @param {?} document
     */
    constructor(document) {
        // it's a workaround to have document property properly typed
        // see: https://github.com/angular/angular/issues/15640
        this.document = document;
    }
    /**
     * @return {?}
     */
    get nativeWindow() {
        return typeof window !== 'undefined' ? window : undefined;
    }
    /**
     * @return {?}
     */
    get sessionStorage() {
        return this.nativeWindow ? this.nativeWindow.sessionStorage : undefined;
    }
    /**
     * @return {?}
     */
    get localStorage() {
        return this.nativeWindow ? this.nativeWindow.localStorage : undefined;
    }
}
WindowRef.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
WindowRef.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ WindowRef.ngInjectableDef = ɵɵdefineInjectable({ factory: function WindowRef_Factory() { return new WindowRef(ɵɵinject(DOCUMENT)); }, token: WindowRef, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UrlParsingService {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    getPrimarySegments(url) {
        /** @type {?} */
        const urlTree = this.router.parseUrl(url);
        return this._getPrimarySegmentsFromUrlTree(urlTree.root);
    }
    /**
     * @private
     * @param {?} tree
     * @return {?}
     */
    _getPrimarySegmentsFromUrlTree(tree) {
        /** @type {?} */
        const segments = tree.segments.map((/**
         * @param {?} s
         * @return {?}
         */
        s => s.path));
        /** @type {?} */
        const childrenSegments = tree.children[PRIMARY_OUTLET]
            ? this._getPrimarySegmentsFromUrlTree(tree.children[PRIMARY_OUTLET])
            : [];
        return segments.concat(childrenSegments);
    }
}
UrlParsingService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
UrlParsingService.ctorParameters = () => [
    { type: Router }
];
/** @nocollapse */ UrlParsingService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UrlParsingService_Factory() { return new UrlParsingService(ɵɵinject(Router)); }, token: UrlParsingService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const isParam = (/**
 * @param {?} segment
 * @return {?}
 */
(segment) => segment.startsWith(':'));
/** @type {?} */
const getParamName = (/**
 * @param {?} segment
 * @return {?}
 */
(segment) => segment.slice(1));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class RoutingConfig extends ServerConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RoutingConfigService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
    }
    /**
     * @param {?} routeName
     * @return {?}
     */
    getRouteConfig(routeName) {
        /** @type {?} */
        const routeConfig = this.config && this.config.routing && this.config.routing.routes;
        /** @type {?} */
        const result = routeConfig && routeConfig[routeName];
        if (!routeConfig || result === undefined) {
            this.warn(`No path was configured for the named route '${routeName}'!`);
        }
        return result;
    }
    /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    warn(...args) {
        if (!this.config.production) {
            console.warn(...args);
        }
    }
}
RoutingConfigService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
RoutingConfigService.ctorParameters = () => [
    { type: RoutingConfig }
];
/** @nocollapse */ RoutingConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function RoutingConfigService_Factory() { return new RoutingConfigService(ɵɵinject(RoutingConfig)); }, token: RoutingConfigService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemanticPathService {
    /**
     * @param {?} routingConfigService
     * @param {?} urlParser
     * @param {?} config
     */
    constructor(routingConfigService, urlParser, config) {
        this.routingConfigService = routingConfigService;
        this.urlParser = urlParser;
        this.config = config;
        this.ROOT_URL = ['/'];
    }
    /**
     * Returns the first path alias configured for a given route name. It adds `/` at the beginning.
     * @param {?} routeName
     * @return {?}
     */
    get(routeName) {
        /** @type {?} */
        const routeConfig = this.routingConfigService.getRouteConfig(routeName);
        return routeConfig && Array.isArray(routeConfig.paths)
            ? '/' + routeConfig.paths[0]
            : undefined;
    }
    /**
     * Transforms the array of url commands. Each command can be:
     * a) string - will be left untouched
     * b) object { cxRoute: <route name> } - will be replaced with semantic path
     * c) object { cxRoute: <route name>, params: { ... } } - same as above, but with passed params
     *
     * If the first command is the object with the `cxRoute` property, returns an absolute url (with the first element of the array `'/'`)
     * @param {?} commands
     * @return {?}
     */
    transform(commands) {
        if (!Array.isArray(commands)) {
            commands = [commands];
        }
        /** @type {?} */
        const result = [];
        for (const command of commands) {
            if (!this.isRouteCommand(command)) {
                // don't modify segment that is not route command:
                result.push(command);
            }
            else {
                // generate array with url segments for given route command:
                /** @type {?} */
                const partialResult = this.generateUrlPart(command);
                if (partialResult === null) {
                    return this.ROOT_URL;
                }
                result.push(...partialResult);
            }
        }
        if (this.shouldOutputAbsolute(commands)) {
            result.unshift('/');
        }
        return result;
    }
    /**
     * @private
     * @param {?} command
     * @return {?}
     */
    isRouteCommand(command) {
        return command && Boolean(command.cxRoute);
    }
    /**
     * @private
     * @param {?} commands
     * @return {?}
     */
    shouldOutputAbsolute(commands) {
        return this.isRouteCommand(commands[0]);
    }
    /**
     * @private
     * @param {?} command
     * @return {?}
     */
    generateUrlPart(command) {
        this.standarizeRouteCommand(command);
        if (!command.cxRoute) {
            return null;
        }
        /** @type {?} */
        const routeConfig = this.routingConfigService.getRouteConfig(command.cxRoute);
        // if no route translation was configured, return null:
        if (!routeConfig || !routeConfig.paths) {
            return null;
        }
        // find first path that can satisfy it's parameters with given parameters
        /** @type {?} */
        const path = this.findPathWithFillableParams(routeConfig, command.params);
        // if there is no configured path that can be satisfied with given params, return null
        if (!path) {
            return null;
        }
        /** @type {?} */
        const result = this.provideParamsValues(path, command.params, routeConfig.paramsMapping);
        return result;
    }
    /**
     * @private
     * @param {?} command
     * @return {?}
     */
    standarizeRouteCommand(command) {
        command.params = command.params || {};
    }
    /**
     * @private
     * @param {?} path
     * @param {?} params
     * @param {?} paramsMapping
     * @return {?}
     */
    provideParamsValues(path, params, paramsMapping) {
        return this.urlParser.getPrimarySegments(path).map((/**
         * @param {?} segment
         * @return {?}
         */
        segment => {
            if (isParam(segment)) {
                /** @type {?} */
                const paramName = getParamName(segment);
                /** @type {?} */
                const mappedParamName = this.getMappedParamName(paramName, paramsMapping);
                return params[mappedParamName];
            }
            return segment;
        }));
    }
    /**
     * @private
     * @param {?} routeConfig
     * @param {?} params
     * @return {?}
     */
    findPathWithFillableParams(routeConfig, params) {
        /** @type {?} */
        const foundPath = routeConfig.paths.find((/**
         * @param {?} path
         * @return {?}
         */
        path => this.getParams(path).every((/**
         * @param {?} paramName
         * @return {?}
         */
        paramName => {
            /** @type {?} */
            const mappedParamName = this.getMappedParamName(paramName, routeConfig.paramsMapping);
            return params[mappedParamName] !== undefined;
        }))));
        if (foundPath === undefined || foundPath === null) {
            this.warn(`No configured path matches all its params to given object. `, `Route config: `, routeConfig, `Params object: `, params);
            return null;
        }
        return foundPath;
    }
    /**
     * @private
     * @param {?} path
     * @return {?}
     */
    getParams(path) {
        return this.urlParser
            .getPrimarySegments(path)
            .filter(isParam)
            .map(getParamName);
    }
    /**
     * @private
     * @param {?} paramName
     * @param {?} paramsMapping
     * @return {?}
     */
    getMappedParamName(paramName, paramsMapping) {
        if (paramsMapping) {
            return paramsMapping[paramName] || paramName;
        }
        return paramName;
    }
    /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    warn(...args) {
        if (!this.config.production) {
            console.warn(...args);
        }
    }
}
SemanticPathService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
SemanticPathService.ctorParameters = () => [
    { type: RoutingConfigService },
    { type: UrlParsingService },
    { type: ServerConfig }
];
/** @nocollapse */ SemanticPathService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SemanticPathService_Factory() { return new SemanticPathService(ɵɵinject(RoutingConfigService), ɵɵinject(UrlParsingService), ɵɵinject(ServerConfig)); }, token: SemanticPathService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RoutingService {
    /**
     * @param {?} store
     * @param {?} winRef
     * @param {?} semanticPathService
     */
    constructor(store, winRef, semanticPathService) {
        this.store = store;
        this.winRef = winRef;
        this.semanticPathService = semanticPathService;
    }
    /**
     * Get the current router state
     * @return {?}
     */
    getRouterState() {
        return this.store.pipe(select(getRouterState));
    }
    /**
     * Get the `PageContext` from the state
     * @return {?}
     */
    getPageContext() {
        return this.store.pipe(select(getPageContext));
    }
    /**
     * Get the next `PageContext` from the state
     * @return {?}
     */
    getNextPageContext() {
        return this.store.pipe(select(getNextPageContext));
    }
    /**
     * Get the `isNavigating` info from the state
     * @return {?}
     */
    isNavigating() {
        return this.store.pipe(select(isNavigating));
    }
    /**
     * Navigation with a new state into history
     * @param {?} commands
     * @param {?=} query
     * @param {?=} extras
     * @return {?}
     */
    go(commands, query, extras) {
        /** @type {?} */
        const path = this.semanticPathService.transform(commands);
        return this.navigate(path, query, extras);
    }
    /**
     * Navigation using URL
     * @param {?} url
     * @return {?}
     */
    goByUrl(url) {
        this.store.dispatch(new GoByUrl(url));
    }
    /**
     * Navigating back
     * @return {?}
     */
    back() {
        /** @type {?} */
        const isLastPageInApp = this.winRef.document.referrer.includes(this.winRef.nativeWindow.location.origin);
        if (isLastPageInApp) {
            this.store.dispatch(new Back());
            return;
        }
        this.go(['/']);
        return;
    }
    /**
     * Navigating forward
     * @return {?}
     */
    forward() {
        this.store.dispatch(new Forward());
    }
    /**
     * Navigation with a new state into history
     * @protected
     * @param {?} path
     * @param {?=} query
     * @param {?=} extras
     * @return {?}
     */
    navigate(path, query, extras) {
        this.store.dispatch(new Go({
            path,
            query,
            extras,
        }));
    }
}
RoutingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
RoutingService.ctorParameters = () => [
    { type: Store },
    { type: WindowRef },
    { type: SemanticPathService }
];
/** @nocollapse */ RoutingService.ngInjectableDef = ɵɵdefineInjectable({ factory: function RoutingService_Factory() { return new RoutingService(ɵɵinject(Store), ɵɵinject(WindowRef), ɵɵinject(SemanticPathService)); }, token: RoutingService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserErrorHandlingService {
    /**
     * @param {?} authService
     * @param {?} routingService
     */
    constructor(authService, routingService) {
        this.authService = authService;
        this.routingService = routingService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    handleExpiredUserToken(request, next) {
        return this.handleExpiredToken().pipe(switchMap((/**
         * @param {?} token
         * @return {?}
         */
        (token) => {
            return next.handle(this.createNewRequestWithNewToken(request, token));
        })));
    }
    /**
     * @return {?}
     */
    handleExpiredRefreshToken() {
        // Logout user
        this.authService.logout();
    }
    /**
     * @protected
     * @return {?}
     */
    handleExpiredToken() {
        /** @type {?} */
        let oldToken;
        return this.authService.getUserToken().pipe(tap((/**
         * @param {?} token
         * @return {?}
         */
        (token) => {
            if (token.access_token && token.refresh_token && !oldToken) {
                this.authService.refreshUserToken(token);
            }
            else if (!token.access_token && !token.refresh_token) {
                this.routingService.go({ cxRoute: 'login' });
            }
            oldToken = oldToken || token;
        })), filter((/**
         * @param {?} token
         * @return {?}
         */
        (token) => oldToken.access_token !== token.access_token)), take(1));
    }
    /**
     * @protected
     * @param {?} request
     * @param {?} token
     * @return {?}
     */
    createNewRequestWithNewToken(request, token) {
        request = request.clone({
            setHeaders: {
                Authorization: `${token.token_type} ${token.access_token}`,
            },
        });
        return request;
    }
}
UserErrorHandlingService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserErrorHandlingService.ctorParameters = () => [
    { type: AuthService },
    { type: RoutingService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const USE_CLIENT_TOKEN = 'cx-use-client-token';
class InterceptorUtil {
    /**
     * @template T
     * @param {?} headerName
     * @param {?} interceptorParam
     * @param {?=} headers
     * @return {?}
     */
    static createHeader(headerName, interceptorParam, headers) {
        if (headers) {
            return headers.append(headerName, JSON.stringify(interceptorParam));
        }
        headers = new HttpHeaders().set(headerName, JSON.stringify(interceptorParam));
        return headers;
    }
    /**
     * @param {?} headerName
     * @param {?} request
     * @return {?}
     */
    static removeHeader(headerName, request) {
        /** @type {?} */
        const updatedHeaders = request.headers.delete(headerName);
        return request.clone({ headers: updatedHeaders });
    }
    /**
     * @template T
     * @param {?} headerName
     * @param {?} headers
     * @return {?}
     */
    static getInterceptorParam(headerName, headers) {
        /** @type {?} */
        const rawValue = headers.get(headerName);
        if (rawValue) {
            return JSON.parse(rawValue);
        }
        return undefined;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
class AuthErrorInterceptor {
    /**
     * @param {?} userErrorHandlingService
     * @param {?} clientErrorHandlingService
     * @param {?} authService
     */
    constructor(userErrorHandlingService, clientErrorHandlingService, authService) {
        this.userErrorHandlingService = userErrorHandlingService;
        this.clientErrorHandlingService = clientErrorHandlingService;
        this.authService = authService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        /** @type {?} */
        const isClientTokenRequest = this.isClientTokenRequest(request);
        if (isClientTokenRequest) {
            request = InterceptorUtil.removeHeader(USE_CLIENT_TOKEN, request);
        }
        return next.handle(request).pipe(catchError((/**
         * @param {?} errResponse
         * @return {?}
         */
        (errResponse) => {
            if (errResponse instanceof HttpErrorResponse) {
                switch (errResponse.status) {
                    case 401: // Unauthorized
                        if (isClientTokenRequest) {
                            if (this.isExpiredToken(errResponse)) {
                                return this.clientErrorHandlingService.handleExpiredClientToken(request, next);
                            }
                            // user token request
                        }
                        else {
                            if (this.isExpiredToken(errResponse)) {
                                return this.userErrorHandlingService.handleExpiredUserToken(request, next);
                            }
                            else if (
                            // Refresh expired token
                            // Check that the OAUTH endpoint was called and the error is for refresh token is expired
                            errResponse.url.includes(OAUTH_ENDPOINT) &&
                                errResponse.error.error === 'invalid_token') {
                                this.userErrorHandlingService.handleExpiredRefreshToken();
                                return of();
                            }
                        }
                        break;
                    case 400: // Bad Request
                        if (errResponse.url.includes(OAUTH_ENDPOINT) &&
                            errResponse.error.error === 'invalid_grant') {
                            if (request.body.get('grant_type') === 'refresh_token') {
                                // refresh token fail, force user logout
                                this.authService.logout();
                            }
                        }
                        break;
                }
            }
            return throwError(errResponse);
        })));
    }
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    isClientTokenRequest(request) {
        /** @type {?} */
        const isRequestMapping = InterceptorUtil.getInterceptorParam(USE_CLIENT_TOKEN, request.headers);
        return Boolean(isRequestMapping);
    }
    /**
     * @private
     * @param {?} resp
     * @return {?}
     */
    isExpiredToken(resp) {
        if (resp.error &&
            resp.error.errors &&
            resp.error.errors instanceof Array &&
            resp.error.errors[0]) {
            return resp.error.errors[0].type === 'InvalidTokenError';
        }
        return false;
    }
}
AuthErrorInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthErrorInterceptor.ctorParameters = () => [
    { type: UserErrorHandlingService },
    { type: ClientErrorHandlingService },
    { type: AuthService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SITE_CONTEXT_FEATURE = 'siteContext';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getSiteContextState = createFeatureSelector(SITE_CONTEXT_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$3 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.baseSite.activeSite;
/** @type {?} */
const getActiveBaseSite = createSelector(getSiteContextState, (ɵ0$3));
const ɵ1$1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.baseSite.details;
/** @type {?} */
const getBaseSiteData = createSelector(getSiteContextState, (ɵ1$1));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_BASE_SITE = '[Site-context] Load BaseSite';
/** @type {?} */
const LOAD_BASE_SITE_FAIL = '[Site-context] Load BaseSite Fail';
/** @type {?} */
const LOAD_BASE_SITE_SUCCESS = '[Site-context] Load BaseSite Success';
/** @type {?} */
const SET_ACTIVE_BASE_SITE = '[Site-context] Set Active BaseSite';
/** @type {?} */
const BASE_SITE_CHANGE = '[Site-context] BaseSite Change';
class LoadBaseSite {
    constructor() {
        this.type = LOAD_BASE_SITE;
    }
}
class LoadBaseSiteFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_BASE_SITE_FAIL;
    }
}
class LoadBaseSiteSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_BASE_SITE_SUCCESS;
    }
}
class SetActiveBaseSite {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_BASE_SITE;
    }
}
class BaseSiteChange {
    constructor() {
        this.type = BASE_SITE_CHANGE;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BaseSiteService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Represents the current baseSite uid.
     * @return {?}
     */
    getActive() {
        return this.store.pipe(select(getActiveBaseSite), filter(Boolean));
    }
    /**
     * We currently don't support switching baseSite at run time
     * @return {?}
     */
    getAll() {
        return this.getActive().pipe(map((/**
         * @param {?} baseSite
         * @return {?}
         */
        baseSite => [baseSite])));
    }
    /**
     * @param {?} baseSite
     * @return {?}
     */
    setActive(baseSite) {
        return this.store
            .pipe(select(getActiveBaseSite), take(1))
            .subscribe((/**
         * @param {?} activeBaseSite
         * @return {?}
         */
        activeBaseSite => {
            if (baseSite && activeBaseSite !== baseSite) {
                this.store.dispatch(new SetActiveBaseSite(baseSite));
            }
        }));
    }
    /**
     * Initializes the active baseSite.
     * @param {?} defaultBaseSite
     * @return {?}
     */
    initialize(defaultBaseSite) {
        this.setActive(defaultBaseSite);
    }
    /**
     * Get the base site details data
     * @return {?}
     */
    getBaseSiteData() {
        return this.store.pipe(select(getBaseSiteData), tap((/**
         * @param {?} baseSite
         * @return {?}
         */
        baseSite => {
            if (Object.keys(baseSite).length === 0) {
                this.store.dispatch(new LoadBaseSite());
            }
        })));
    }
}
BaseSiteService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BaseSiteService.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DynamicTemplate {
    /**
     * @param {?} templateString
     * @param {?} templateVariables
     * @return {?}
     */
    static resolve(templateString, templateVariables) {
        /** @type {?} */
        const keys = Object.keys(templateVariables);
        // Can't use Object.values as the compilation settings are to es2015 not es2017
        /** @type {?} */
        const values = keys.map((/**
         * @param {?} key
         * @return {?}
         */
        key => templateVariables[key]));
        /** @type {?} */
        const templateFunction = new Function(...keys, `return \`${templateString}\`;`);
        return templateFunction(...values);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OccEndpointsService {
    /**
     * @param {?} config
     * @param {?} baseSiteService
     */
    constructor(config, baseSiteService) {
        this.config = config;
        this.baseSiteService = baseSiteService;
        this.activeBaseSite = (this.config.site && this.config.site.baseSite) || '';
        if (this.baseSiteService) {
            this.baseSiteService
                .getActive()
                .subscribe((/**
             * @param {?} value
             * @return {?}
             */
            value => (this.activeBaseSite = value)));
        }
    }
    /**
     * @return {?}
     */
    getBaseEndpoint() {
        if (!this.config || !this.config.backend || !this.config.backend.occ) {
            return '';
        }
        return ((this.config.backend.occ.baseUrl || '') +
            this.config.backend.occ.prefix +
            this.activeBaseSite);
    }
    /**
     * @param {?} endpoint
     * @return {?}
     */
    getEndpoint(endpoint) {
        if (!endpoint.startsWith('/')) {
            endpoint = '/' + endpoint;
        }
        return this.getBaseEndpoint() + endpoint;
    }
    /**
     * @param {?} endpoint
     * @param {?=} urlParams
     * @param {?=} queryParams
     * @return {?}
     */
    getUrl(endpoint, urlParams, queryParams) {
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
            let httpParamsOptions;
            if (endpoint.includes('?')) {
                /** @type {?} */
                let queryParamsFromEndpoint;
                [endpoint, queryParamsFromEndpoint] = endpoint.split('?');
                httpParamsOptions = { fromString: queryParamsFromEndpoint };
            }
            /** @type {?} */
            let httpParams = new HttpParams(httpParamsOptions);
            Object.keys(queryParams).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                /** @type {?} */
                const value = queryParams[key];
                if (value !== undefined) {
                    if (value === null) {
                        httpParams = httpParams.delete(key);
                    }
                    else {
                        httpParams = httpParams.set(key, value);
                    }
                }
            }));
            /** @type {?} */
            const params = httpParams.toString();
            if (params.length) {
                endpoint += '?' + params;
            }
        }
        return this.getEndpoint(endpoint);
    }
}
OccEndpointsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
OccEndpointsService.ctorParameters = () => [
    { type: OccConfig },
    { type: BaseSiteService, decorators: [{ type: Optional }] }
];
/** @nocollapse */ OccEndpointsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function OccEndpointsService_Factory() { return new OccEndpointsService(ɵɵinject(OccConfig), ɵɵinject(BaseSiteService, 8)); }, token: OccEndpointsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClientTokenInterceptor {
    /**
     * @param {?} authService
     * @param {?} occEndpoints
     */
    constructor(authService, occEndpoints) {
        this.authService = authService;
        this.occEndpoints = occEndpoints;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        return this.getClientToken(request).pipe(take(1), switchMap((/**
         * @param {?} token
         * @return {?}
         */
        (token) => {
            if (token &&
                request.url.includes(this.occEndpoints.getBaseEndpoint())) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `${token.token_type} ${token.access_token}`,
                    },
                });
            }
            return next.handle(request);
        })));
    }
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    getClientToken(request) {
        if (InterceptorUtil.getInterceptorParam(USE_CLIENT_TOKEN, request.headers)) {
            return this.authService.getClientToken();
        }
        return of(null);
    }
}
ClientTokenInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ClientTokenInterceptor.ctorParameters = () => [
    { type: AuthService },
    { type: OccEndpointsService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserTokenInterceptor {
    /**
     * @param {?} authService
     * @param {?} occEndpoints
     */
    constructor(authService, occEndpoints) {
        this.authService = authService;
        this.occEndpoints = occEndpoints;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        return this.authService.getUserToken().pipe(take(1), switchMap((/**
         * @param {?} token
         * @return {?}
         */
        token => {
            if (token &&
                this.isOccUrl(request.url) &&
                !request.headers.get('Authorization')) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `${token.token_type} ${token.access_token}`,
                    },
                });
            }
            return next.handle(request);
        })));
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    isOccUrl(url) {
        return url.includes(this.occEndpoints.getBaseEndpoint());
    }
}
UserTokenInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserTokenInterceptor.ctorParameters = () => [
    { type: AuthService },
    { type: OccEndpointsService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const interceptors = [
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const OAUTH_ENDPOINT$1 = '/authorizationserver/oauth/token';
class ClientAuthenticationTokenService {
    /**
     * @param {?} config
     * @param {?} http
     */
    constructor(config, http) {
        this.config = config;
        this.http = http;
    }
    /**
     * @return {?}
     */
    loadClientAuthenticationToken() {
        /** @type {?} */
        const url = this.getOAuthEndpoint();
        /** @type {?} */
        const params = new HttpParams()
            .set('client_id', encodeURIComponent(this.config.authentication.client_id))
            .set('client_secret', encodeURIComponent(this.config.authentication.client_secret))
            .set('grant_type', 'client_credentials');
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http.post(url, params, { headers });
    }
    /**
     * @protected
     * @return {?}
     */
    getOAuthEndpoint() {
        return (this.config.backend.occ.baseUrl || '') + OAUTH_ENDPOINT$1;
    }
}
ClientAuthenticationTokenService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ClientAuthenticationTokenService.ctorParameters = () => [
    { type: AuthConfig },
    { type: HttpClient }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const OAUTH_ENDPOINT$2 = '/authorizationserver/oauth/token';
class UserAuthenticationTokenService {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @param {?} userId
     * @param {?} password
     * @return {?}
     */
    loadToken(userId, password) {
        /** @type {?} */
        const url = this.getOAuthEndpoint();
        /** @type {?} */
        const params = new HttpParams()
            .set('client_id', this.config.authentication.client_id)
            .set('client_secret', this.config.authentication.client_secret)
            .set('grant_type', 'password') // authorization_code, client_credentials, password
            .set('username', userId)
            .set('password', password);
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(url, params, { headers })
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error))));
    }
    /**
     * @param {?} refreshToken
     * @return {?}
     */
    refreshToken(refreshToken) {
        /** @type {?} */
        const url = this.getOAuthEndpoint();
        /** @type {?} */
        const params = new HttpParams()
            .set('client_id', encodeURIComponent(this.config.authentication.client_id))
            .set('client_secret', encodeURIComponent(this.config.authentication.client_secret))
            .set('refresh_token', encodeURI(refreshToken))
            .set('grant_type', 'refresh_token');
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(url, params, { headers })
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error))));
    }
    /**
     * @protected
     * @return {?}
     */
    getOAuthEndpoint() {
        return (this.config.backend.occ.baseUrl || '') + OAUTH_ENDPOINT$2;
    }
}
UserAuthenticationTokenService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserAuthenticationTokenService.ctorParameters = () => [
    { type: HttpClient },
    { type: AuthConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const AuthServices = [
    ClientAuthenticationTokenService,
    ClientErrorHandlingService,
    UserAuthenticationTokenService,
    UserErrorHandlingService,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const StorageSyncType = {
    NO_STORAGE: 'NO_STORAGE',
    LOCAL_STORAGE: 'LOCAL_STORAGE',
    SESSION_STORAGE: 'SESSION_STORAGE',
};
/** @enum {string} */
const StateTransferType = {
    TRANSFER_STATE: 'SSR',
};
/**
 * @abstract
 */
class StateConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_LOCAL_STORAGE_KEY = 'spartacus-local-data';
/** @type {?} */
const DEFAULT_SESSION_STORAGE_KEY = 'spartacus-session-data';
/** @type {?} */
const defaultStateConfig = {
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        .reduce((/**
     * @param {?} previous
     * @param {?} current
     * @return {?}
     */
    (previous, current) => (previous ? previous[current] : undefined)), state);
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
    const keySplit = key.split('.');
    /** @type {?} */
    const newObject = {};
    /** @type {?} */
    let tempNewObject = newObject;
    for (let i = 0; i < keySplit.length; i++) {
        /** @type {?} */
        const currentKey = keySplit[i];
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
    if (keys && keys.length === 0) {
        return (/** @type {?} */ ({}));
    }
    /** @type {?} */
    let stateSlices = {};
    for (const currentKey of keys) {
        /** @type {?} */
        const stateValue = getStateSliceValue(currentKey, state);
        /** @type {?} */
        const shell = createShellObject(currentKey, stateValue);
        stateSlices = deepMerge(stateSlices, shell);
    }
    return (/** @type {?} */ (stateSlices));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return (/**
         * @param {?} reducer
         * @return {?}
         */
        reducer => reducer);
    }
    /** @type {?} */
    const storageSyncConfig = config.state.storageSync;
    return (/**
     * @param {?} reducer
     * @return {?}
     */
    (reducer) => {
        return (/**
         * @param {?} state
         * @param {?} action
         * @return {?}
         */
        (state, action) => {
            /** @type {?} */
            const newState = reducer(state, action);
            if (action.type === INIT || action.type === UPDATE) {
                /** @type {?} */
                const rehydratedState = rehydrate(config, winRef);
                return deepMerge({}, newState, rehydratedState);
            }
            if (action.type !== INIT) {
                // handle local storage
                /** @type {?} */
                const localStorageKeys = getKeysForStorage(storageSyncConfig.keys, StorageSyncType.LOCAL_STORAGE);
                /** @type {?} */
                const localStorageStateSlices = getStateSlice(localStorageKeys, state);
                persistToStorage(config.state.storageSync.localStorageKeyName, localStorageStateSlices, winRef.localStorage);
                // handle session storage
                /** @type {?} */
                const sessionStorageKeys = getKeysForStorage(storageSyncConfig.keys, StorageSyncType.SESSION_STORAGE);
                /** @type {?} */
                const sessionStorageStateSlices = getStateSlice(sessionStorageKeys, state);
                persistToStorage(config.state.storageSync.sessionStorageKeyName, sessionStorageStateSlices, winRef.sessionStorage);
            }
            return newState;
        });
    });
}
/**
 * @param {?} keys
 * @param {?} storageType
 * @return {?}
 */
function getKeysForStorage(keys, storageType) {
    return Object.keys(keys).filter((/**
     * @param {?} key
     * @return {?}
     */
    key => keys[key] === storageType));
}
/**
 * @template T
 * @param {?} config
 * @param {?} winRef
 * @return {?}
 */
function rehydrate(config, winRef) {
    /** @type {?} */
    const localStorageValue = readFromStorage(winRef.localStorage, config.state.storageSync.localStorageKeyName);
    /** @type {?} */
    const sessionStorageValue = readFromStorage(winRef.sessionStorage, config.state.storageSync.sessionStorageKeyName);
    return deepMerge(localStorageValue, sessionStorageValue);
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
    const storageValue = storage.getItem(key);
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CX_KEY = makeStateKey('cx-state');
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
    return (/**
     * @param {?} reducer
     * @return {?}
     */
    reducer => reducer);
}
/**
 * @param {?} transferState
 * @param {?} keys
 * @return {?}
 */
function getServerTransferStateReducer(transferState, keys) {
    return (/**
     * @param {?} reducer
     * @return {?}
     */
    function (reducer) {
        return (/**
         * @param {?} state
         * @param {?} action
         * @return {?}
         */
        function (state, action) {
            /** @type {?} */
            const newState = reducer(state, action);
            if (newState) {
                /** @type {?} */
                const stateSlice = getStateSlice(Object.keys(keys), newState);
                transferState.set(CX_KEY, stateSlice);
            }
            return newState;
        });
    });
}
/**
 * @param {?} transferState
 * @param {?} keys
 * @return {?}
 */
function getBrowserTransferStateReducer(transferState, keys) {
    return (/**
     * @param {?} reducer
     * @return {?}
     */
    function (reducer) {
        return (/**
         * @param {?} state
         * @param {?} action
         * @return {?}
         */
        function (state, action) {
            if (action.type === INIT) {
                if (!state) {
                    state = reducer(state, action);
                }
                // we should not utilize transfer state if user is logged in
                /** @type {?} */
                const authState = ((/** @type {?} */ (state)))[AUTH_FEATURE];
                /** @type {?} */
                const isLoggedIn = authState && authState.userToken && authState.userToken.token;
                if (!isLoggedIn && transferState.hasKey(CX_KEY)) {
                    /** @type {?} */
                    const cxKey = transferState.get(CX_KEY, {});
                    /** @type {?} */
                    const transferredStateSlice = getStateSlice(Object.keys(keys), cxKey);
                    state = deepMerge({}, state, transferredStateSlice);
                }
                return state;
            }
            return reducer(state, action);
        });
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$4 = getTransferStateReducer, ɵ1$2 = getStorageSyncReducer;
/** @type {?} */
const stateMetaReducers = [
    {
        provide: META_REDUCERS,
        useFactory: ɵ0$4,
        deps: [
            PLATFORM_ID,
            [new Optional(), TransferState],
            [new Optional(), Config],
        ],
        multi: true,
    },
    {
        provide: META_REDUCERS,
        useFactory: ɵ1$2,
        deps: [WindowRef, [new Optional(), Config]],
        multi: true,
    },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StateModule {
}
StateModule.decorators = [
    { type: NgModule, args: [{
                imports: [ConfigModule.withConfig(defaultStateConfig)],
                providers: [...stateMetaReducers],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} error
 * @return {?}
 */
function makeErrorSerializable(error) {
    if (error instanceof Error) {
        return (/** @type {?} */ ({
            message: error.message,
            type: error.name,
            reason: error.stack,
        }));
    }
    if (error instanceof HttpErrorResponse) {
        return (/** @type {?} */ ({
            message: error.message,
            error: error.error,
            status: error.status,
            statusText: error.statusText,
            url: error.url,
        }));
    }
    return error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClientTokenEffect {
    /**
     * @param {?} actions$
     * @param {?} clientAuthenticationTokenService
     */
    constructor(actions$, clientAuthenticationTokenService) {
        this.actions$ = actions$;
        this.clientAuthenticationTokenService = clientAuthenticationTokenService;
        this.loadClientToken$ = this.actions$.pipe(ofType(LOAD_CLIENT_TOKEN), exhaustMap((/**
         * @return {?}
         */
        () => {
            return this.clientAuthenticationTokenService
                .loadClientAuthenticationToken()
                .pipe(map((/**
             * @param {?} token
             * @return {?}
             */
            (token) => {
                return new LoadClientTokenSuccess(token);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new LoadClientTokenFail(makeErrorSerializable(error))))));
        })));
    }
}
ClientTokenEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ClientTokenEffect.ctorParameters = () => [
    { type: Actions },
    { type: ClientAuthenticationTokenService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], ClientTokenEffect.prototype, "loadClientToken$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const USERID_CURRENT = 'current';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserTokenEffects {
    /**
     * @param {?} actions$
     * @param {?} userTokenService
     */
    constructor(actions$, userTokenService) {
        this.actions$ = actions$;
        this.userTokenService = userTokenService;
        this.loadUserToken$ = this.actions$.pipe(ofType(LOAD_USER_TOKEN), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ userId, password }) => this.userTokenService.loadToken(userId, password).pipe(map((/**
         * @param {?} token
         * @return {?}
         */
        (token) => {
            /** @type {?} */
            const date = new Date();
            date.setSeconds(date.getSeconds() + token.expires_in);
            token.expiration_time = date.toJSON();
            token.userId = USERID_CURRENT;
            return new LoadUserTokenSuccess(token);
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new LoadUserTokenFail(makeErrorSerializable(error)))))))));
        this.login$ = this.actions$.pipe(ofType(LOAD_USER_TOKEN_SUCCESS), map((/**
         * @return {?}
         */
        () => new Login())));
        this.refreshUserToken$ = this.actions$.pipe(ofType(REFRESH_USER_TOKEN), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ refreshToken }) => {
            return this.userTokenService.refreshToken(refreshToken).pipe(map((/**
             * @param {?} token
             * @return {?}
             */
            (token) => {
                /** @type {?} */
                const date = new Date();
                date.setSeconds(date.getSeconds() + token.expires_in);
                token.expiration_time = date.toJSON();
                token.userId = USERID_CURRENT;
                return new RefreshUserTokenSuccess(token);
            }), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new RefreshUserTokenFail(makeErrorSerializable(error)))))));
        })));
    }
}
UserTokenEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserTokenEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserAuthenticationTokenService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const effects$1 = [UserTokenEffects, ClientTokenEffect];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialLoaderState = {
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
    return (/**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    (state = initialLoaderState, action) => {
        if (action.meta &&
            action.meta.loader &&
            action.meta.entityType === loadActionType) {
            /** @type {?} */
            const entity = action.meta.loader;
            if (entity.load) {
                return Object.assign({}, state, { loading: true, value: reducer ? reducer(state.value, action) : state.value });
            }
            else if (entity.error) {
                return Object.assign({}, state, { loading: false, error: true, success: false, value: reducer ? reducer(state.value, action) : undefined });
            }
            else if (entity.success) {
                return Object.assign({}, state, { value: reducer ? reducer(state.value, action) : action.payload, loading: false, error: false, success: true });
            }
            else {
                // reset state action
                return Object.assign({}, initialLoaderState, { value: reducer
                        ? reducer(initialLoaderState.value, action)
                        : initialLoaderState.value });
            }
        }
        if (reducer) {
            /** @type {?} */
            const newValue = reducer(state.value, action);
            if (newValue !== state.value) {
                return Object.assign({}, state, { value: newValue });
            }
        }
        return state;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$1 = (/** @type {?} */ ({}));
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$1(state = initialState$1, action) {
    switch (action.type) {
        case LOAD_USER_TOKEN:
        case REFRESH_USER_TOKEN: {
            return Object.assign({}, state);
        }
        case LOAD_USER_TOKEN_SUCCESS:
        case REFRESH_USER_TOKEN_SUCCESS: {
            return Object.assign({}, state, action.payload);
        }
        case LOAD_USER_TOKEN_FAIL:
        case REFRESH_USER_TOKEN_FAIL: {
            return Object.assign({}, state);
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
const reducerToken$1 = new InjectionToken('AuthReducers');
/** @type {?} */
const reducerProvider$1 = {
    provide: reducerToken$1,
    useFactory: getReducers$1,
};
/**
 * @param {?} reducer
 * @return {?}
 */
function clearAuthState(reducer) {
    return (/**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function (state, action) {
        if (action.type === LOGOUT) {
            state = Object.assign({}, state, { userToken: undefined });
        }
        return reducer(state, action);
    });
}
/** @type {?} */
const metaReducers = [clearAuthState];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function authStoreConfigFactory() {
    // if we want to reuse AUTH_FEATURE const in config, we have to use factory instead of plain object
    /** @type {?} */
    const config = {
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
class AuthStoreModule {
}
AuthStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    StateModule,
                    StoreModule.forFeature(AUTH_FEATURE, reducerToken$1, { metaReducers }),
                    EffectsModule.forFeature(effects$1),
                    ConfigModule.withConfigFactory(authStoreConfigFactory),
                ],
                providers: [reducerProvider$1],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: AuthModule,
            providers: [...interceptors],
        };
    }
}
AuthModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    AuthStoreModule,
                    ConfigModule.withConfig(defaultAuthConfig),
                ],
                providers: [...AuthServices, { provide: AuthConfig, useExisting: Config }],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthRedirectService {
    /**
     * This service is responsible for redirecting to the last page before authorization. "The last page" can be:
     * 1. Just the previously opened page; or
     * 2. The page that we just tried to open, but AuthGuard cancelled it
     *
     * For example:
     * 1. The user opens the product page, then clicks /login link and signs in
     *    -> Then we should redirect to the product page; or
     * 2. The user opens the product page, then he clicks /my-account link,
     *    but is automatically redirected to the login page by the AuthGuard, and he signs in
     *    -> Then we should redirect to the my-account page, not the product page
     * @param {?} routing
     * @param {?} router
     */
    constructor(routing, router) {
        this.routing = routing;
        this.router = router;
        this.ignoredUrls = new Set();
    }
    /**
     * @return {?}
     */
    redirect() {
        if (this.redirectUrl === undefined) {
            this.routing.go('/');
        }
        else {
            this.routing.goByUrl(this.redirectUrl);
        }
        this.redirectUrl = undefined;
        this.lastAuthGuardNavigation = undefined;
    }
    /**
     * @return {?}
     */
    reportAuthGuard() {
        const { url, navigationId } = this.getCurrentNavigation();
        this.lastAuthGuardNavigation = { url, navigationId };
        this.redirectUrl = url;
    }
    /**
     * @return {?}
     */
    reportNotAuthGuard() {
        const { url, initialUrl, navigationId } = this.getCurrentNavigation();
        this.ignoredUrls.add(url);
        // Don't save redirect url if you've already come from page with NotAuthGuard (i.e. user has come from login to register)
        if (!this.ignoredUrls.has(initialUrl)) {
            // We compare the navigation id to find out if the url cancelled by AuthGuard (i.e. my-account) is more recent
            // than the last opened page
            if (!this.lastAuthGuardNavigation ||
                this.lastAuthGuardNavigation.navigationId < navigationId - 1) {
                this.redirectUrl = initialUrl;
                this.lastAuthGuardNavigation = undefined;
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    getCurrentNavigation() {
        /** @type {?} */
        const initialUrl = this.router.url;
        /** @type {?} */
        const navigation = this.router.getCurrentNavigation();
        /** @type {?} */
        const url = this.router.serializeUrl(navigation.finalUrl);
        return {
            navigationId: navigation.id,
            url,
            initialUrl,
        };
    }
}
AuthRedirectService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AuthRedirectService.ctorParameters = () => [
    { type: RoutingService },
    { type: Router }
];
/** @nocollapse */ AuthRedirectService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AuthRedirectService_Factory() { return new AuthRedirectService(ɵɵinject(RoutingService), ɵɵinject(Router)); }, token: AuthRedirectService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthGuard {
    /**
     * @param {?} routingService
     * @param {?} authService
     * @param {?} authRedirectService
     * @param {?} router
     */
    constructor(routingService, authService, authRedirectService, router) {
        this.routingService = routingService;
        this.authService = authService;
        this.authRedirectService = authRedirectService;
        this.router = router;
    }
    /**
     * @return {?}
     */
    canActivate() {
        return this.authService.getUserToken().pipe(map((/**
         * @param {?} token
         * @return {?}
         */
        (token) => {
            if (!token.access_token) {
                this.routingService.go({ cxRoute: 'login' });
                this.authRedirectService.reportAuthGuard();
            }
            return !!token.access_token;
        })));
    }
}
AuthGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AuthGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: AuthService },
    { type: AuthRedirectService },
    { type: Router }
];
/** @nocollapse */ AuthGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(ɵɵinject(RoutingService), ɵɵinject(AuthService), ɵɵinject(AuthRedirectService), ɵɵinject(Router)); }, token: AuthGuard, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NotAuthGuard {
    /**
     * @param {?} routingService
     * @param {?} authService
     * @param {?} authRedirectService
     */
    constructor(routingService, authService, authRedirectService) {
        this.routingService = routingService;
        this.authService = authService;
        this.authRedirectService = authRedirectService;
    }
    /**
     * @return {?}
     */
    canActivate() {
        this.authRedirectService.reportNotAuthGuard();
        // redirect, if user is already logged in:
        return this.authService.getUserToken().pipe(map((/**
         * @param {?} token
         * @return {?}
         */
        token => {
            if (token.access_token) {
                this.routingService.go({ cxRoute: 'home' });
            }
            return !token.access_token;
        })));
    }
}
NotAuthGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
NotAuthGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: AuthService },
    { type: AuthRedirectService }
];
/** @nocollapse */ NotAuthGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function NotAuthGuard_Factory() { return new NotAuthGuard(ɵɵinject(RoutingService), ɵɵinject(AuthService), ɵɵinject(AuthRedirectService)); }, token: NotAuthGuard, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CART_FEATURE = 'cart';
/** @type {?} */
const CART_DATA = '[Cart] Cart Data';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CREATE_CART = '[Cart] Create Cart';
/** @type {?} */
const CREATE_CART_FAIL = '[Cart] Create Cart Fail';
/** @type {?} */
const CREATE_CART_SUCCESS = '[Cart] Create Cart Success';
/** @type {?} */
const LOAD_CART = '[Cart] Load Cart';
/** @type {?} */
const LOAD_CART_FAIL = '[Cart] Load Cart Fail';
/** @type {?} */
const LOAD_CART_SUCCESS = '[Cart] Load Cart Success';
/** @type {?} */
const MERGE_CART = '[Cart] Merge Cart';
/** @type {?} */
const MERGE_CART_SUCCESS = '[Cart] Merge Cart Success';
class CreateCart extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = CREATE_CART;
    }
}
class CreateCartFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA, payload);
        this.payload = payload;
        this.type = CREATE_CART_FAIL;
    }
}
class CreateCartSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = CREATE_CART_SUCCESS;
    }
}
class LoadCart extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = LOAD_CART;
    }
}
class LoadCartFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA, payload);
        this.payload = payload;
        this.type = LOAD_CART_FAIL;
    }
}
class LoadCartSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = LOAD_CART_SUCCESS;
    }
}
class MergeCart {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = MERGE_CART;
    }
}
class MergeCartSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = MERGE_CART_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ADD_ENTRY = '[Cart-entry] Add Entry';
/** @type {?} */
const ADD_ENTRY_SUCCESS = '[Cart-entry] Add Entry Success';
/** @type {?} */
const ADD_ENTRY_FAIL = '[Cart-entry] Add Entry Fail';
/** @type {?} */
const REMOVE_ENTRY = '[Cart-entry] Remove Entry';
/** @type {?} */
const REMOVE_ENTRY_SUCCESS = '[Cart-entry] Remove Entry Success';
/** @type {?} */
const REMOVE_ENTRY_FAIL = '[Cart-entry] Remove Entry Fail';
/** @type {?} */
const UPDATE_ENTRY = '[Cart-entry] Update Entry';
/** @type {?} */
const UPDATE_ENTRY_SUCCESS = '[Cart-entry] Update Entry Success';
/** @type {?} */
const UPDATE_ENTRY_FAIL = '[Cart-entry] Update Entry Fail';
class AddEntry extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = ADD_ENTRY;
    }
}
class AddEntrySuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = ADD_ENTRY_SUCCESS;
    }
}
class AddEntryFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA, payload);
        this.payload = payload;
        this.type = ADD_ENTRY_FAIL;
    }
}
class RemoveEntry extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = REMOVE_ENTRY;
    }
}
class RemoveEntrySuccess extends LoaderSuccessAction {
    constructor() {
        super(CART_DATA);
        this.type = REMOVE_ENTRY_SUCCESS;
    }
}
class RemoveEntryFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA, payload);
        this.payload = payload;
        this.type = REMOVE_ENTRY_FAIL;
    }
}
class UpdateEntry extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = UPDATE_ENTRY;
    }
}
class UpdateEntrySuccess extends LoaderSuccessAction {
    constructor() {
        super(CART_DATA);
        this.type = UPDATE_ENTRY_SUCCESS;
    }
}
class UpdateEntryFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA, payload);
        this.payload = payload;
        this.type = UPDATE_ENTRY_FAIL;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getCartContentSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.content);
/** @type {?} */
const getRefreshSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.refresh);
/** @type {?} */
const getEntriesSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.entries);
/** @type {?} */
const getCartMergeCompleteSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.cartMergeComplete);
/** @type {?} */
const getCartsState = createFeatureSelector(CART_FEATURE);
const ɵ0$5 = /**
 * @param {?} cartsState
 * @return {?}
 */
(cartsState) => cartsState.active;
/** @type {?} */
const getActiveCartState = createSelector(getCartsState, (ɵ0$5));
const ɵ1$3 = /**
 * @param {?} state
 * @return {?}
 */
state => loaderValueSelector(state);
/** @type {?} */
const getCartState = createSelector(getActiveCartState, (ɵ1$3));
/** @type {?} */
const getCartContent = createSelector(getCartState, getCartContentSelector);
/** @type {?} */
const getRefresh = createSelector(getCartState, getRefreshSelector);
const ɵ2$1 = /**
 * @param {?} state
 * @return {?}
 */
state => loaderSuccessSelector(state) &&
    !loaderLoadingSelector(state) &&
    !loaderValueSelector(state).refresh;
/** @type {?} */
const getLoaded = createSelector(getActiveCartState, (ɵ2$1));
/** @type {?} */
const getCartMergeComplete = createSelector(getCartState, getCartMergeCompleteSelector);
/** @type {?} */
const getEntriesMap = createSelector(getCartState, getEntriesSelector);
/** @type {?} */
const getEntrySelectorFactory = (/**
 * @param {?} productCode
 * @return {?}
 */
(productCode) => {
    return createSelector(getEntriesMap, (/**
     * @param {?} entries
     * @return {?}
     */
    entries => {
        if (entries) {
            return entries[productCode];
        }
    }));
});
const ɵ3$1 = /**
 * @param {?} entities
 * @return {?}
 */
entities => {
    return Object.keys(entities).map((/**
     * @param {?} code
     * @return {?}
     */
    code => entities[code]));
};
/** @type {?} */
const getEntries = createSelector(getEntriesMap, (ɵ3$1));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$2 = {
    entities: null,
    activeLanguage: null,
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$2(state = initialState$2, action) {
    switch (action.type) {
        case LOAD_LANGUAGES_SUCCESS: {
            /** @type {?} */
            const languages = action.payload;
            /** @type {?} */
            const entities = languages.reduce((/**
             * @param {?} langEntities
             * @param {?} language
             * @return {?}
             */
            (langEntities, language) => {
                return Object.assign({}, langEntities, { [language.isocode]: language });
            }), Object.assign({}, state.entities));
            return Object.assign({}, state, { entities });
        }
        case SET_ACTIVE_LANGUAGE: {
            /** @type {?} */
            const isocode = action.payload;
            return Object.assign({}, state, { activeLanguage: isocode });
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_CURRENCIES = '[Site-context] Load Currencies';
/** @type {?} */
const LOAD_CURRENCIES_FAIL = '[Site-context] Load Currencies Fail';
/** @type {?} */
const LOAD_CURRENCIES_SUCCESS = '[Site-context] Load Currencies Success';
/** @type {?} */
const SET_ACTIVE_CURRENCY = '[Site-context] Set Active Currency';
/** @type {?} */
const CURRENCY_CHANGE = '[Site-context] Currency Change';
class LoadCurrencies {
    constructor() {
        this.type = LOAD_CURRENCIES;
    }
}
class LoadCurrenciesFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_CURRENCIES_FAIL;
    }
}
class LoadCurrenciesSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_CURRENCIES_SUCCESS;
    }
}
class SetActiveCurrency {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_CURRENCY;
    }
}
class CurrencyChange {
    constructor() {
        this.type = CURRENCY_CHANGE;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$3 = {
    entities: null,
    activeCurrency: null,
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$3(state = initialState$3, action) {
    switch (action.type) {
        case LOAD_CURRENCIES_SUCCESS: {
            /** @type {?} */
            const currencies = action.payload;
            /** @type {?} */
            const entities = currencies.reduce((/**
             * @param {?} currEntities
             * @param {?} currency
             * @return {?}
             */
            (currEntities, currency) => {
                return Object.assign({}, currEntities, { [currency.isocode]: currency });
            }), Object.assign({}, state.entities));
            return Object.assign({}, state, { entities });
        }
        case SET_ACTIVE_CURRENCY: {
            /** @type {?} */
            const isocode = action.payload;
            return Object.assign({}, state, { activeCurrency: isocode });
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$4 = {
    details: {},
    activeSite: '',
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$4(state = initialState$4, action) {
    switch (action.type) {
        case LOAD_BASE_SITE_SUCCESS: {
            return Object.assign({}, state, { details: action.payload });
        }
        case SET_ACTIVE_BASE_SITE: {
            return Object.assign({}, state, { activeSite: action.payload });
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$2() {
    return {
        languages: reducer$2,
        currencies: reducer$3,
        baseSite: reducer$4,
    };
}
/** @type {?} */
const reducerToken$2 = new InjectionToken('SiteContextReducers');
/** @type {?} */
const reducerProvider$2 = {
    provide: reducerToken$2,
    useFactory: getReducers$2,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class SiteAdapter {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SiteConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @return {?}
     */
    getLanguages() {
        return this.adapter.loadLanguages();
    }
    /**
     * @return {?}
     */
    getCurrencies() {
        return this.adapter.loadCurrencies();
    }
    /**
     * @param {?=} type
     * @return {?}
     */
    getCountries(type) {
        return this.adapter.loadCountries(type);
    }
    /**
     * @param {?} countryIsoCode
     * @return {?}
     */
    getRegions(countryIsoCode) {
        return this.adapter.loadRegions(countryIsoCode);
    }
    /**
     * @return {?}
     */
    getBaseSite() {
        return this.adapter.loadBaseSite();
    }
}
SiteConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
SiteConnector.ctorParameters = () => [
    { type: SiteAdapter }
];
/** @nocollapse */ SiteConnector.ngInjectableDef = ɵɵdefineInjectable({ factory: function SiteConnector_Factory() { return new SiteConnector(ɵɵinject(SiteAdapter)); }, token: SiteConnector, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LanguagesEffects {
    /**
     * @param {?} actions$
     * @param {?} siteConnector
     * @param {?} winRef
     */
    constructor(actions$, siteConnector, winRef) {
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.winRef = winRef;
        this.loadLanguages$ = this.actions$.pipe(ofType(LOAD_LANGUAGES), exhaustMap((/**
         * @return {?}
         */
        () => {
            return this.siteConnector.getLanguages().pipe(map((/**
             * @param {?} languages
             * @return {?}
             */
            languages => new LoadLanguagesSuccess(languages))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new LoadLanguagesFail(makeErrorSerializable(error))))));
        })));
        this.activateLanguage$ = this.actions$.pipe(ofType(SET_ACTIVE_LANGUAGE), tap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            if (this.winRef.sessionStorage) {
                this.winRef.sessionStorage.setItem('language', action.payload);
            }
        })), map((/**
         * @return {?}
         */
        () => new LanguageChange())));
    }
}
LanguagesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LanguagesEffects.ctorParameters = () => [
    { type: Actions },
    { type: SiteConnector },
    { type: WindowRef }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], LanguagesEffects.prototype, "loadLanguages$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], LanguagesEffects.prototype, "activateLanguage$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CurrenciesEffects {
    /**
     * @param {?} actions$
     * @param {?} siteConnector
     * @param {?} winRef
     */
    constructor(actions$, siteConnector, winRef) {
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.winRef = winRef;
        this.loadCurrencies$ = this.actions$.pipe(ofType(LOAD_CURRENCIES), exhaustMap((/**
         * @return {?}
         */
        () => {
            return this.siteConnector.getCurrencies().pipe(map((/**
             * @param {?} currencies
             * @return {?}
             */
            currencies => new LoadCurrenciesSuccess(currencies))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new LoadCurrenciesFail(makeErrorSerializable(error))))));
        })));
        this.activateCurrency$ = this.actions$.pipe(ofType(SET_ACTIVE_CURRENCY), tap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            if (this.winRef.sessionStorage) {
                this.winRef.sessionStorage.setItem('currency', action.payload);
            }
        })), map((/**
         * @return {?}
         */
        () => new CurrencyChange())));
    }
}
CurrenciesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CurrenciesEffects.ctorParameters = () => [
    { type: Actions },
    { type: SiteConnector },
    { type: WindowRef }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], CurrenciesEffects.prototype, "loadCurrencies$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], CurrenciesEffects.prototype, "activateCurrency$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BaseSiteEffects {
    /**
     * @param {?} actions$
     * @param {?} siteConnector
     */
    constructor(actions$, siteConnector) {
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.loadBaseSite$ = this.actions$.pipe(ofType(LOAD_BASE_SITE), exhaustMap((/**
         * @return {?}
         */
        () => {
            return this.siteConnector.getBaseSite().pipe(map((/**
             * @param {?} baseSite
             * @return {?}
             */
            baseSite => new LoadBaseSiteSuccess(baseSite))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new LoadBaseSiteFail(makeErrorSerializable(error))))));
        })));
    }
}
BaseSiteEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BaseSiteEffects.ctorParameters = () => [
    { type: Actions },
    { type: SiteConnector }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], BaseSiteEffects.prototype, "loadBaseSite$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const effects$2 = [
    LanguagesEffects,
    CurrenciesEffects,
    BaseSiteEffects,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const activeLanguageSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.activeLanguage);
/** @type {?} */
const languagesEntitiesSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.entities);
const ɵ2$2 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.languages;
/** @type {?} */
const getLanguagesState = createSelector(getSiteContextState, (ɵ2$2));
/** @type {?} */
const getLanguagesEntities = createSelector(getLanguagesState, languagesEntitiesSelector);
/** @type {?} */
const getActiveLanguage = createSelector(getLanguagesState, activeLanguageSelector);
const ɵ3$2 = /**
 * @param {?} entities
 * @return {?}
 */
entities => {
    return entities
        ? Object.keys(entities).map((/**
         * @param {?} isocode
         * @return {?}
         */
        isocode => entities[isocode]))
        : null;
};
/** @type {?} */
const getAllLanguages = createSelector(getLanguagesEntities, (ɵ3$2));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const currenciesEntitiesSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.entities);
/** @type {?} */
const activeCurrencySelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.activeCurrency);
const ɵ2$3 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.currencies;
/** @type {?} */
const getCurrenciesState = createSelector(getSiteContextState, (ɵ2$3));
/** @type {?} */
const getCurrenciesEntities = createSelector(getCurrenciesState, currenciesEntitiesSelector);
/** @type {?} */
const getActiveCurrency = createSelector(getCurrenciesState, activeCurrencySelector);
const ɵ3$3 = /**
 * @param {?} entities
 * @return {?}
 */
entities => {
    return entities
        ? Object.keys(entities).map((/**
         * @param {?} isocode
         * @return {?}
         */
        isocode => entities[isocode]))
        : null;
};
/** @type {?} */
const getAllCurrencies = createSelector(getCurrenciesEntities, (ɵ3$3));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Facade that provides easy access to language state, actions and selectors.
 */
class LanguageService {
    /**
     * @param {?} store
     * @param {?} winRef
     */
    constructor(store, winRef) {
        this.store = store;
        this.sessionStorage = winRef.sessionStorage;
    }
    /**
     * Represents all the languages supported by the current store.
     * @return {?}
     */
    getAll() {
        return this.store.pipe(select(getAllLanguages), tap((/**
         * @param {?} languages
         * @return {?}
         */
        languages => {
            if (!languages) {
                this.store.dispatch(new LoadLanguages());
            }
        })), filter(Boolean));
    }
    /**
     * Represents the isocode of the active language.
     * @return {?}
     */
    getActive() {
        return this.store.pipe(select(getActiveLanguage), filter(Boolean));
    }
    /**
     * Sets the active language.
     * @param {?} isocode
     * @return {?}
     */
    setActive(isocode) {
        return this.store
            .pipe(select(getActiveLanguage), take(1))
            .subscribe((/**
         * @param {?} activeLanguage
         * @return {?}
         */
        activeLanguage => {
            if (activeLanguage !== isocode) {
                this.store.dispatch(new SetActiveLanguage(isocode));
            }
        }));
    }
    /**
     * Initials the active language. The active language is either given
     * by the last visit (stored in session storage) or by the
     * default session language of the store.
     * @param {?} defaultLanguage
     * @return {?}
     */
    initialize(defaultLanguage) {
        if (this.sessionStorage && !!this.sessionStorage.getItem('language')) {
            this.setActive(this.sessionStorage.getItem('language'));
        }
        else {
            this.setActive(defaultLanguage);
        }
    }
}
LanguageService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LanguageService.ctorParameters = () => [
    { type: Store },
    { type: WindowRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Facade that provides easy access to curreny state, actions and selectors.
 */
class CurrencyService {
    /**
     * @param {?} store
     * @param {?} winRef
     */
    constructor(store, winRef) {
        this.store = store;
        this.sessionStorage = winRef.sessionStorage;
    }
    /**
     * Represents all the currencies supported by the current store.
     * @return {?}
     */
    getAll() {
        return this.store.pipe(select(getAllCurrencies), tap((/**
         * @param {?} currencies
         * @return {?}
         */
        currencies => {
            if (!currencies) {
                this.store.dispatch(new LoadCurrencies());
            }
        })), filter(Boolean));
    }
    /**
     * Represents the isocode of the active currency.
     * @return {?}
     */
    getActive() {
        return this.store.pipe(select(getActiveCurrency), filter(Boolean));
    }
    /**
     * Sets the active language.
     * @param {?} isocode
     * @return {?}
     */
    setActive(isocode) {
        return this.store
            .pipe(select(getActiveCurrency), take(1))
            .subscribe((/**
         * @param {?} activeCurrency
         * @return {?}
         */
        activeCurrency => {
            if (activeCurrency !== isocode) {
                this.store.dispatch(new SetActiveCurrency(isocode));
            }
        }));
    }
    /**
     * Initials the active currency. The active currency is either given
     * by the last visit (stored in session storage) or by the
     * default session currency of the store.
     * @param {?} defaultCurrency
     * @return {?}
     */
    initialize(defaultCurrency) {
        if (this.sessionStorage && !!this.sessionStorage.getItem('currency')) {
            this.setActive(this.sessionStorage.getItem('currency'));
        }
        else {
            this.setActive(defaultCurrency);
        }
    }
}
CurrencyService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CurrencyService.ctorParameters = () => [
    { type: Store },
    { type: WindowRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ENTITY_REMOVE_ACTION = '[ENTITY] REMOVE';
/** @type {?} */
const ENTITY_REMOVE_ALL_ACTION = '[ENTITY] REMOVE ALL';
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
class EntityRemoveAction {
    /**
     * @param {?} entityType
     * @param {?} id
     */
    constructor(entityType, id) {
        this.type = ENTITY_REMOVE_ACTION;
        this.meta = entityRemoveMeta(entityType, id);
    }
}
class EntityRemoveAllAction {
    /**
     * @param {?} entityType
     */
    constructor(entityType) {
        this.type = ENTITY_REMOVE_ALL_ACTION;
        this.meta = entityRemoveAllMeta(entityType);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ENTITY_LOAD_ACTION = '[ENTITY] LOAD';
/** @type {?} */
const ENTITY_FAIL_ACTION = '[ENTITY] LOAD FAIL';
/** @type {?} */
const ENTITY_SUCCESS_ACTION = '[ENTITY] LOAD SUCCESS';
/** @type {?} */
const ENTITY_RESET_ACTION = '[ENTITY] RESET';
/**
 * @param {?} entityType
 * @param {?} id
 * @return {?}
 */
function entityLoadMeta(entityType, id) {
    return Object.assign({}, loadMeta(entityType), entityMeta(entityType, id));
}
/**
 * @param {?} entityType
 * @param {?} id
 * @param {?=} error
 * @return {?}
 */
function entityFailMeta(entityType, id, error) {
    return Object.assign({}, failMeta(entityType, error), entityMeta(entityType, id));
}
/**
 * @param {?} entityType
 * @param {?} id
 * @return {?}
 */
function entitySuccessMeta(entityType, id) {
    return Object.assign({}, successMeta(entityType), entityMeta(entityType, id));
}
/**
 * @param {?} entityType
 * @param {?} id
 * @return {?}
 */
function entityResetMeta(entityType, id) {
    return Object.assign({}, resetMeta(entityType), entityMeta(entityType, id));
}
class EntityLoadAction {
    /**
     * @param {?} entityType
     * @param {?} id
     */
    constructor(entityType, id) {
        this.type = ENTITY_LOAD_ACTION;
        this.meta = entityLoadMeta(entityType, id);
    }
}
class EntityFailAction {
    /**
     * @param {?} entityType
     * @param {?} id
     * @param {?=} error
     */
    constructor(entityType, id, error) {
        this.type = ENTITY_FAIL_ACTION;
        this.meta = entityFailMeta(entityType, id, error);
    }
}
class EntitySuccessAction {
    /**
     * @param {?} entityType
     * @param {?} id
     * @param {?=} payload
     */
    constructor(entityType, id, payload) {
        this.payload = payload;
        this.type = ENTITY_SUCCESS_ACTION;
        this.meta = entitySuccessMeta(entityType, id);
    }
}
class EntityResetAction {
    /**
     * @param {?} entityType
     * @param {?} id
     */
    constructor(entityType, id) {
        this.type = ENTITY_RESET_ACTION;
        this.meta = entityResetMeta(entityType, id);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialEntityState = { entities: {} };
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
    return (/**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    (state = initialEntityState, action) => {
        /** @type {?} */
        let ids;
        /** @type {?} */
        let partitionPayload = false;
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
                    let removed = false;
                    /** @type {?} */
                    const newEntities = Object.keys(state.entities).reduce((/**
                     * @param {?} acc
                     * @param {?} cur
                     * @return {?}
                     */
                    (acc, cur) => {
                        if (ids.includes(cur)) {
                            removed = true;
                        }
                        else {
                            acc[cur] = state.entities[cur];
                        }
                        return acc;
                    }), {});
                    return removed ? { entities: newEntities } : state;
                }
            }
            partitionPayload =
                Array.isArray(action.meta.entityId) && Array.isArray(action.payload);
        }
        else {
            ids = Object.keys(state.entities);
        }
        /** @type {?} */
        const entityUpdates = {};
        for (let i = 0; i < ids.length; i++) {
            /** @type {?} */
            const id = ids[i];
            /** @type {?} */
            const subAction = partitionPayload
                ? Object.assign({}, action, { payload: action.payload[i] }) : action;
            /** @type {?} */
            const newState = reducer(state.entities[id], subAction);
            if (newState) {
                entityUpdates[id] = newState;
            }
        }
        if (Object.keys(entityUpdates).length > 0) {
            return Object.assign({}, state, { entities: Object.assign({}, state.entities, entityUpdates) });
        }
        return state;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    const entityState = entityStateSelector(state, id);
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
    const entityState = entityStateSelector(state, id);
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
    const entityState = entityStateSelector(state, id);
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
    const entityState = entityStateSelector(state, id);
    return entityState.success;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} entityType
 * @return {?}
 */
function ofLoaderLoad(entityType) {
    return filter((/**
     * @param {?} action
     * @return {?}
     */
    (action) => action.meta &&
        action.meta.loader &&
        action.meta.entityType === entityType &&
        action.meta.loader.load));
}
/**
 * @param {?} entityType
 * @return {?}
 */
function ofLoaderFail(entityType) {
    return filter((/**
     * @param {?} action
     * @return {?}
     */
    (action) => action.meta &&
        action.meta.loader &&
        action.meta.entityType === entityType &&
        action.meta.loader.error));
}
/**
 * @param {?} entityType
 * @return {?}
 */
function ofLoaderSuccess(entityType) {
    return filter((/**
     * @param {?} action
     * @return {?}
     */
    (action) => action.meta &&
        action.meta.loader &&
        action.meta.entityType === entityType &&
        !action.meta.loader.load &&
        !action.meta.loader.error));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class ContextServiceMap {
}
/** @type {?} */
const LANGUAGE_CONTEXT_ID = 'LANGUAGE';
/** @type {?} */
const CURRENCY_CONTEXT_ID = 'CURRENCY';
/** @type {?} */
const BASE_SITE_CONTEXT_ID = 'BASE_SITE';
/**
 * @return {?}
 */
function serviceMapFactory() {
    return {
        [LANGUAGE_CONTEXT_ID]: LanguageService,
        [CURRENCY_CONTEXT_ID]: CurrencyService,
        [BASE_SITE_CONTEXT_ID]: BaseSiteService,
    };
}
/** @type {?} */
const contextServiceMapProvider = {
    provide: ContextServiceMap,
    useFactory: serviceMapFactory,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function defaultSiteContextConfigFactory() {
    return {
        siteContext: {
            parameters: {
                [LANGUAGE_CONTEXT_ID]: {
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
                [CURRENCY_CONTEXT_ID]: {
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
            },
        },
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class SiteContextConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @param {?} baseSiteService
 * @param {?} langService
 * @param {?} currService
 * @return {?}
 */
function inititializeContext(config, baseSiteService, langService, currService) {
    return (/**
     * @return {?}
     */
    () => {
        baseSiteService.initialize(config.site.baseSite);
        langService.initialize(config.site.language);
        currService.initialize(config.site.currency);
    });
}
/** @type {?} */
const contextServiceProviders = [
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SiteContextParamsService {
    /**
     * @param {?} config
     * @param {?} injector
     * @param {?} serviceMap
     */
    constructor(config, injector, serviceMap) {
        this.config = config;
        this.injector = injector;
        this.serviceMap = serviceMap;
    }
    /**
     * @param {?=} persistence
     * @return {?}
     */
    getContextParameters(persistence) {
        /** @type {?} */
        const contextConfig = this.config.siteContext.parameters;
        if (contextConfig) {
            /** @type {?} */
            const params = Object.keys(contextConfig);
            if (persistence) {
                return params.filter((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => contextConfig[key].persistence === persistence));
            }
            else {
                return params;
            }
        }
        return [];
    }
    /**
     * @param {?} param
     * @return {?}
     */
    getParamValues(param) {
        return this.config.siteContext.parameters &&
            this.config.siteContext.parameters[param]
            ? this.config.siteContext.parameters[param].values
            : undefined;
    }
    /**
     * @param {?} param
     * @return {?}
     */
    getParamDefaultValue(param) {
        return this.config.siteContext.parameters &&
            this.config.siteContext.parameters[param]
            ? this.config.siteContext.parameters[param].defaultValue
            : undefined;
    }
    /**
     * @param {?} param
     * @return {?}
     */
    getSiteContextService(param) {
        if (this.serviceMap[param]) {
            return this.injector.get(this.serviceMap[param], null);
        }
    }
    /**
     * @param {?} param
     * @return {?}
     */
    getValue(param) {
        /** @type {?} */
        let value;
        /** @type {?} */
        const service = this.getSiteContextService(param);
        if (service) {
            service
                .getActive()
                .subscribe((/**
             * @param {?} val
             * @return {?}
             */
            val => (value = val)))
                .unsubscribe();
        }
        return value !== undefined ? value : this.getParamDefaultValue(param);
    }
    /**
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    setValue(param, value) {
        /** @type {?} */
        const service = this.getSiteContextService(param);
        if (service) {
            service.setActive(value);
        }
    }
}
SiteContextParamsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SiteContextParamsService.ctorParameters = () => [
    { type: SiteContextConfig },
    { type: Injector },
    { type: ContextServiceMap }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SiteContextUrlSerializer extends DefaultUrlSerializer {
    /**
     * @param {?} siteContextParams
     * @param {?} config
     */
    constructor(siteContextParams, config) {
        super();
        this.siteContextParams = siteContextParams;
        this.config = config;
        this.urlEncodingParameters =
            this.config.siteContext.urlEncodingParameters || [];
    }
    /**
     * @return {?}
     */
    get hasContextInRoutes() {
        return this.urlEncodingParameters.length > 0;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    parse(url) {
        if (this.hasContextInRoutes) {
            /** @type {?} */
            const urlWithParams = this.urlExtractContextParameters(url);
            /** @type {?} */
            const parsed = (/** @type {?} */ (super.parse(urlWithParams.url)));
            this.urlTreeIncludeContextParameters(parsed, urlWithParams.params);
            return parsed;
        }
        else {
            return super.parse(url);
        }
    }
    /**
     * @param {?} url
     * @return {?}
     */
    urlExtractContextParameters(url) {
        /** @type {?} */
        const segments = url.split('/');
        if (segments[0] === '') {
            segments.shift();
        }
        /** @type {?} */
        const params = {};
        /** @type {?} */
        let paramId = 0;
        /** @type {?} */
        let segmentId = 0;
        while (paramId < this.urlEncodingParameters.length &&
            segmentId < segments.length) {
            /** @type {?} */
            const paramName = this.urlEncodingParameters[paramId];
            /** @type {?} */
            const paramValues = this.siteContextParams.getParamValues(paramName);
            if (paramValues.includes(segments[segmentId])) {
                params[paramName] = segments[segmentId];
                segmentId++;
            }
            paramId++;
        }
        url = segments.slice(Object.keys(params).length).join('/');
        return { url, params };
    }
    /**
     * @private
     * @param {?} urlTree
     * @param {?} params
     * @return {?}
     */
    urlTreeIncludeContextParameters(urlTree, params) {
        urlTree.siteContext = params;
    }
    /**
     * @param {?} tree
     * @return {?}
     */
    serialize(tree) {
        /** @type {?} */
        const params = this.urlTreeExtractContextParameters(tree);
        /** @type {?} */
        const url = super.serialize(tree);
        /** @type {?} */
        const serialized = this.urlIncludeContextParameters(url, params);
        return serialized;
    }
    /**
     * @param {?} urlTree
     * @return {?}
     */
    urlTreeExtractContextParameters(urlTree) {
        return urlTree.siteContext ? urlTree.siteContext : {};
    }
    /**
     * @private
     * @param {?} url
     * @param {?} params
     * @return {?}
     */
    urlIncludeContextParameters(url, params) {
        /** @type {?} */
        const contextRoutePart = this.urlEncodingParameters
            .map((/**
         * @param {?} param
         * @return {?}
         */
        param => {
            return params[param]
                ? params[param]
                : this.siteContextParams.getValue(param);
        }))
            .join('/');
        return contextRoutePart + url;
    }
}
SiteContextUrlSerializer.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SiteContextUrlSerializer.ctorParameters = () => [
    { type: SiteContextParamsService },
    { type: SiteContextConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SiteContextRoutesHandler {
    /**
     * @param {?} siteContextParams
     * @param {?} serializer
     * @param {?} injector
     */
    constructor(siteContextParams, serializer, injector) {
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
    init() {
        this.router = this.injector.get(Router);
        this.location = this.injector.get(Location);
        /** @type {?} */
        const routingParams = this.siteContextParams.getContextParameters('route');
        if (routingParams.length) {
            this.setContextParamsFromRoute(this.router.url);
            this.subscribeChanges(routingParams);
            this.subscribeRouting();
        }
    }
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    subscribeChanges(params) {
        params.forEach((/**
         * @param {?} param
         * @return {?}
         */
        param => {
            /** @type {?} */
            const service = this.siteContextParams.getSiteContextService(param);
            if (service) {
                this.subscription.add(service.getActive().subscribe((/**
                 * @param {?} value
                 * @return {?}
                 */
                value => {
                    if (!this.isNavigating &&
                        this.contextValues[param] &&
                        this.contextValues[param] !== value) {
                        /** @type {?} */
                        const parsed = this.router.parseUrl(this.router.url);
                        /** @type {?} */
                        const serialized = this.router.serializeUrl(parsed);
                        this.location.replaceState(serialized);
                    }
                    this.contextValues[param] = value;
                })));
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    subscribeRouting() {
        this.subscription.add(this.router.events
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationError ||
            event instanceof NavigationCancel)))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.isNavigating = event instanceof NavigationStart;
            if (this.isNavigating) {
                this.setContextParamsFromRoute(event.url);
            }
        })));
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    setContextParamsFromRoute(url) {
        const { params } = this.serializer.urlExtractContextParameters(url);
        Object.keys(params).forEach((/**
         * @param {?} param
         * @return {?}
         */
        param => this.siteContextParams.setValue(param, params[param])));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
SiteContextRoutesHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
SiteContextRoutesHandler.ctorParameters = () => [
    { type: SiteContextParamsService },
    { type: SiteContextUrlSerializer },
    { type: Injector }
];
/** @nocollapse */ SiteContextRoutesHandler.ngInjectableDef = ɵɵdefineInjectable({ factory: function SiteContextRoutesHandler_Factory() { return new SiteContextRoutesHandler(ɵɵinject(SiteContextParamsService), ɵɵinject(SiteContextUrlSerializer), ɵɵinject(INJECTOR)); }, token: SiteContextRoutesHandler, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} siteContextRoutesHandler
 * @return {?}
 */
function initSiteContextRoutesHandler(siteContextRoutesHandler) {
    return (/**
     * @return {?}
     */
    () => {
        siteContextRoutesHandler.init();
    });
}
/** @type {?} */
const siteContextParamsProviders = [
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function siteContextStoreConfigFactory() {
    // if we want to reuse SITE_CONTEXT_FEATURE const in config, we have to use factory instead of plain object
    /** @type {?} */
    const config = {
        state: {
            ssrTransfer: {
                keys: { [SITE_CONTEXT_FEATURE]: StateTransferType.TRANSFER_STATE },
            },
        },
    };
    return config;
}
class SiteContextStoreModule {
}
SiteContextStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    StoreModule.forFeature(SITE_CONTEXT_FEATURE, reducerToken$2),
                    EffectsModule.forFeature(effects$2),
                    ConfigModule.withConfigFactory(siteContextStoreConfigFactory),
                ],
                providers: [reducerProvider$2],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
class SiteContextModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: SiteContextModule,
            providers: [
                contextServiceMapProvider,
                ...contextServiceProviders,
                ...siteContextParamsProviders,
                { provide: SiteContextConfig, useExisting: Config },
            ],
        };
    }
}
SiteContextModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ConfigModule.withConfigFactory(defaultSiteContextConfigFactory),
                    StateModule,
                    SiteContextStoreModule,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LANGUAGE_NORMALIZER = new InjectionToken('LanguageNormalizer');
/** @type {?} */
const CURRENCY_NORMALIZER = new InjectionToken('CurrencyNormalizer');
/** @type {?} */
const COUNTRY_NORMALIZER = new InjectionToken('CountryNormalizer');
/** @type {?} */
const REGION_NORMALIZER = new InjectionToken('RegionNormalizer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ANONYMOUS_USERID = 'anonymous';
class CartDataService {
    constructor() {
        this._userId = ANONYMOUS_USERID;
        this._getDetails = false;
    }
    /**
     * @return {?}
     */
    get hasCart() {
        return !!this._cart;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set userId(val) {
        this._userId = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set cart(val) {
        this._cart = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set getDetails(val) {
        this._getDetails = val;
    }
    /**
     * @return {?}
     */
    get userId() {
        return this._userId;
    }
    /**
     * @return {?}
     */
    get cart() {
        return this._cart;
    }
    /**
     * @return {?}
     */
    get getDetails() {
        return this._getDetails;
    }
    /**
     * @return {?}
     */
    get cartId() {
        if (this.hasCart) {
            return this.userId === ANONYMOUS_USERID ? this.cart.guid : this.cart.code;
        }
    }
}
CartDataService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CartDataService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartService {
    /**
     * @param {?} store
     * @param {?} cartData
     * @param {?} authService
     * @param {?} baseSiteService
     */
    constructor(store, cartData, authService, baseSiteService) {
        this.store = store;
        this.cartData = cartData;
        this.authService = authService;
        this.baseSiteService = baseSiteService;
        this.init();
    }
    /**
     * @return {?}
     */
    getActive() {
        return this.store.pipe(select(getCartContent));
    }
    /**
     * @return {?}
     */
    getEntries() {
        return this.store.pipe(select(getEntries));
    }
    /**
     * @return {?}
     */
    getCartMergeComplete() {
        return this.store.pipe(select(getCartMergeComplete));
    }
    /**
     * @return {?}
     */
    getLoaded() {
        return this.store.pipe(select(getLoaded));
    }
    /**
     * @protected
     * @return {?}
     */
    init() {
        this.store.pipe(select(getCartContent)).subscribe((/**
         * @param {?} cart
         * @return {?}
         */
        cart => {
            this.cartData.cart = cart;
        }));
        combineLatest([
            this.baseSiteService.getActive(),
            this.authService.getUserToken(),
        ])
            .pipe(filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, userToken]) => this.cartData.userId !== userToken.userId)))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([, userToken]) => {
            this.setUserId(userToken);
            this.loadOrMerge();
        }));
        this.refresh();
    }
    /**
     * @protected
     * @param {?} userToken
     * @return {?}
     */
    setUserId(userToken) {
        if (Object.keys(userToken).length !== 0) {
            this.cartData.userId = userToken.userId;
        }
        else {
            this.cartData.userId = ANONYMOUS_USERID;
        }
    }
    /**
     * @protected
     * @return {?}
     */
    loadOrMerge() {
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
    }
    /**
     * @protected
     * @return {?}
     */
    refresh() {
        this.store.pipe(select(getRefresh)).subscribe((/**
         * @param {?} refresh
         * @return {?}
         */
        refresh => {
            if (refresh) {
                this.store.dispatch(new LoadCart({
                    userId: this.cartData.userId,
                    cartId: this.cartData.cartId,
                    details: true,
                }));
            }
        }));
    }
    /**
     * @return {?}
     */
    loadDetails() {
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
    }
    /**
     * @param {?} productCode
     * @param {?} quantity
     * @return {?}
     */
    addEntry(productCode, quantity) {
        this.store
            .pipe(select(getActiveCartState), tap((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => {
            if (!this.isCreated(cartState.value.content) && !cartState.loading) {
                this.store.dispatch(new CreateCart({ userId: this.cartData.userId }));
            }
        })), filter((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => this.isCreated(cartState.value.content))), take(1))
            .subscribe((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            this.store.dispatch(new AddEntry({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                productCode: productCode,
                quantity: quantity,
            }));
        }));
    }
    /**
     * @param {?} entry
     * @return {?}
     */
    removeEntry(entry) {
        this.store.dispatch(new RemoveEntry({
            userId: this.cartData.userId,
            cartId: this.cartData.cartId,
            entry: entry.entryNumber,
        }));
    }
    /**
     * @param {?} entryNumber
     * @param {?} quantity
     * @return {?}
     */
    updateEntry(entryNumber, quantity) {
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
    }
    /**
     * @param {?} productCode
     * @return {?}
     */
    getEntry(productCode) {
        return this.store.pipe(select(getEntrySelectorFactory(productCode)));
    }
    /**
     * @param {?} cart
     * @return {?}
     */
    isCreated(cart) {
        return cart && !!Object.keys(cart).length;
    }
    /**
     * @param {?} cart
     * @return {?}
     */
    isEmpty(cart) {
        return cart && !cart.totalItems;
    }
}
CartService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CartService.ctorParameters = () => [
    { type: Store },
    { type: CartDataService },
    { type: AuthService },
    { type: BaseSiteService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services = [CartService, CartDataService];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class CartAdapter {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @param {?=} details
     * @return {?}
     */
    loadAll(userId, details) {
        return this.adapter.loadAll(userId, details);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?=} details
     * @return {?}
     */
    load(userId, cartId, details) {
        return this.adapter.load(userId, cartId, details);
    }
    /**
     * @param {?} userId
     * @param {?=} oldCartId
     * @param {?=} toMergeCartGuid
     * @return {?}
     */
    create(userId, oldCartId, toMergeCartGuid) {
        return this.adapter.create(userId, oldCartId, toMergeCartGuid);
    }
}
CartConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CartConnector.ctorParameters = () => [
    { type: CartAdapter }
];
/** @nocollapse */ CartConnector.ngInjectableDef = ɵɵdefineInjectable({ factory: function CartConnector_Factory() { return new CartConnector(ɵɵinject(CartAdapter)); }, token: CartConnector, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CART_NORMALIZER = new InjectionToken('CartNormalizer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class CartEntryAdapter {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartEntryConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} productCode
     * @param {?=} quantity
     * @return {?}
     */
    add(userId, cartId, productCode, quantity) {
        return this.adapter.add(userId, cartId, productCode, quantity);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @param {?} qty
     * @param {?=} pickupStore
     * @return {?}
     */
    update(userId, cartId, entryNumber, qty, pickupStore) {
        return this.adapter.update(userId, cartId, entryNumber, qty, pickupStore);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @return {?}
     */
    remove(userId, cartId, entryNumber) {
        return this.adapter.remove(userId, cartId, entryNumber);
    }
}
CartEntryConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CartEntryConnector.ctorParameters = () => [
    { type: CartEntryAdapter }
];
/** @nocollapse */ CartEntryConnector.ngInjectableDef = ɵɵdefineInjectable({ factory: function CartEntryConnector_Factory() { return new CartEntryConnector(ɵɵinject(CartEntryAdapter)); }, token: CartEntryConnector, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CART_MODIFICATION_NORMALIZER = new InjectionToken('CartModificationNormalizer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CHECKOUT_FEATURE = 'checkout';
/** @type {?} */
const CHECKOUT_DETAILS = '[Checkout] Checkout Details';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ADD_DELIVERY_ADDRESS = '[Checkout] Add Delivery Address';
/** @type {?} */
const ADD_DELIVERY_ADDRESS_FAIL = '[Checkout] Add Delivery Address Fail';
/** @type {?} */
const ADD_DELIVERY_ADDRESS_SUCCESS = '[Checkout] Add Delivery Address Success';
/** @type {?} */
const SET_DELIVERY_ADDRESS = '[Checkout] Set Delivery Address';
/** @type {?} */
const SET_DELIVERY_ADDRESS_FAIL = '[Checkout] Set Delivery Address Fail';
/** @type {?} */
const SET_DELIVERY_ADDRESS_SUCCESS = '[Checkout] Set Delivery Address Success';
/** @type {?} */
const LOAD_SUPPORTED_DELIVERY_MODES = '[Checkout] Load Supported Delivery Modes';
/** @type {?} */
const LOAD_SUPPORTED_DELIVERY_MODES_FAIL = '[Checkout] Load Supported Delivery Modes Fail';
/** @type {?} */
const LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS = '[Checkout] Load Supported Delivery Modes Success';
/** @type {?} */
const CLEAR_SUPPORTED_DELIVERY_MODES = '[Checkout] Clear Supported Delivery Modes';
/** @type {?} */
const SET_DELIVERY_MODE = '[Checkout] Set Delivery Mode';
/** @type {?} */
const SET_DELIVERY_MODE_FAIL = '[Checkout] Set Delivery Mode Fail';
/** @type {?} */
const SET_DELIVERY_MODE_SUCCESS = '[Checkout] Set Delivery Mode Success';
/** @type {?} */
const CREATE_PAYMENT_DETAILS = '[Checkout] Create Payment Details';
/** @type {?} */
const CREATE_PAYMENT_DETAILS_FAIL = '[Checkout] Create Payment Details Fail';
/** @type {?} */
const CREATE_PAYMENT_DETAILS_SUCCESS = '[Checkout] Create Payment Details Success';
/** @type {?} */
const SET_PAYMENT_DETAILS = '[Checkout] Set Payment Details';
/** @type {?} */
const SET_PAYMENT_DETAILS_FAIL = '[Checkout] Set Payment Details Fail';
/** @type {?} */
const SET_PAYMENT_DETAILS_SUCCESS = '[Checkout] Set Payment Details Success';
/** @type {?} */
const PLACE_ORDER = '[Checkout] Place Order';
/** @type {?} */
const PLACE_ORDER_FAIL = '[Checkout] Place Order Fail';
/** @type {?} */
const PLACE_ORDER_SUCCESS = '[Checkout] Place Order Success';
/** @type {?} */
const CLEAR_CHECKOUT_STEP = '[Checkout] Clear One Checkout Step';
/** @type {?} */
const CLEAR_CHECKOUT_DATA = '[Checkout] Clear Checkout Data';
/** @type {?} */
const LOAD_CHECKOUT_DETAILS = '[Checkout] Load Checkout Details';
/** @type {?} */
const LOAD_CHECKOUT_DETAILS_FAIL = '[Checkout] Load Checkout Details Fail';
/** @type {?} */
const LOAD_CHECKOUT_DETAILS_SUCCESS = '[Checkout] Load Checkout Details Success';
class AddDeliveryAddress {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS;
    }
}
class AddDeliveryAddressFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS_FAIL;
    }
}
class AddDeliveryAddressSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS_SUCCESS;
    }
}
class SetDeliveryAddress {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_ADDRESS;
    }
}
class SetDeliveryAddressFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_ADDRESS_FAIL;
    }
}
class SetDeliveryAddressSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_ADDRESS_SUCCESS;
    }
}
class LoadSupportedDeliveryModes {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_SUPPORTED_DELIVERY_MODES;
    }
}
class LoadSupportedDeliveryModesFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_SUPPORTED_DELIVERY_MODES_FAIL;
    }
}
class LoadSupportedDeliveryModesSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS;
    }
}
class SetDeliveryMode {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_MODE;
    }
}
class SetDeliveryModeFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_MODE_FAIL;
    }
}
class SetDeliveryModeSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_MODE_SUCCESS;
    }
}
class CreatePaymentDetails {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_PAYMENT_DETAILS;
    }
}
class CreatePaymentDetailsFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_PAYMENT_DETAILS_FAIL;
    }
}
class CreatePaymentDetailsSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_PAYMENT_DETAILS_SUCCESS;
    }
}
class SetPaymentDetails {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_PAYMENT_DETAILS;
    }
}
class SetPaymentDetailsFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_PAYMENT_DETAILS_FAIL;
    }
}
class SetPaymentDetailsSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_PAYMENT_DETAILS_SUCCESS;
    }
}
class PlaceOrder {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER;
    }
}
class PlaceOrderFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER_FAIL;
    }
}
class PlaceOrderSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER_SUCCESS;
    }
}
class ClearSupportedDeliveryModes {
    constructor() {
        this.type = CLEAR_SUPPORTED_DELIVERY_MODES;
    }
}
class ClearCheckoutStep {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_STEP;
    }
}
class ClearCheckoutData {
    constructor() {
        this.type = CLEAR_CHECKOUT_DATA;
    }
}
class LoadCheckoutDetails extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CHECKOUT_DETAILS);
        this.payload = payload;
        this.type = LOAD_CHECKOUT_DETAILS;
    }
}
class LoadCheckoutDetailsFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CHECKOUT_DETAILS, payload);
        this.payload = payload;
        this.type = LOAD_CHECKOUT_DETAILS_FAIL;
    }
}
class LoadCheckoutDetailsSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CHECKOUT_DETAILS);
        this.payload = payload;
        this.type = LOAD_CHECKOUT_DETAILS_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$5 = {
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
function reducer$5(state = initialState$5, action) {
    switch (action.type) {
        case MERGE_CART: {
            return Object.assign({}, state, { cartMergeComplete: false });
        }
        case MERGE_CART_SUCCESS: {
            return Object.assign({}, state, { cartMergeComplete: true, refresh: true });
        }
        case LOAD_CART_SUCCESS:
        case CREATE_CART_SUCCESS: {
            /** @type {?} */
            const content = Object.assign({}, action.payload);
            /** @type {?} */
            let entries = {};
            if (content.entries) {
                entries = content.entries.reduce((/**
                 * @param {?} entryMap
                 * @param {?} entry
                 * @return {?}
                 */
                (entryMap, entry) => {
                    return Object.assign({}, entryMap, { [entry.product.code]: state.entries[entry.product.code]
                            ? Object.assign({}, state.entries[entry.product.code], entry) : entry });
                }), Object.assign({}, entries));
                delete content['entries'];
            }
            return Object.assign({}, state, { content,
                entries, refresh: false });
        }
        case REMOVE_ENTRY_SUCCESS:
        case UPDATE_ENTRY_SUCCESS:
        case ADD_ENTRY_SUCCESS: {
            return Object.assign({}, state, { refresh: true });
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$3() {
    return {
        active: loaderReducer(CART_DATA, reducer$5),
    };
}
/** @type {?} */
const reducerToken$3 = new InjectionToken('CartReducers');
/** @type {?} */
const reducerProvider$3 = {
    provide: reducerToken$3,
    useFactory: getReducers$3,
};
/**
 * @param {?} reducer
 * @return {?}
 */
function clearCartState(reducer) {
    return (/**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function (state, action) {
        if (action.type === LOGOUT || action.type === PLACE_ORDER_SUCCESS) {
            state = undefined;
        }
        return reducer(state, action);
    });
}
/** @type {?} */
const metaReducers$1 = [clearCartState];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartEffects {
    /**
     * @param {?} actions$
     * @param {?} cartConnector
     * @param {?} cartData
     */
    constructor(actions$, cartConnector, cartData) {
        this.actions$ = actions$;
        this.cartConnector = cartConnector;
        this.cartData = cartData;
        this.loadCart$ = this.actions$.pipe(ofType(LOAD_CART, LANGUAGE_CHANGE, CURRENCY_CHANGE), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            /** @type {?} */
            const loadCartParams = {
                userId: (payload && payload.userId) || this.cartData.userId,
                cartId: (payload && payload.cartId) || this.cartData.cartId,
                details: payload && payload.details !== undefined
                    ? payload.details
                    : this.cartData.getDetails,
            };
            if (this.isMissingData(loadCartParams)) {
                return of(new LoadCartFail({}));
            }
            return this.cartConnector
                .load(loadCartParams.userId, loadCartParams.cartId, loadCartParams.details)
                .pipe(map((/**
             * @param {?} cart
             * @return {?}
             */
            (cart) => {
                return new LoadCartSuccess(cart);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new LoadCartFail(makeErrorSerializable(error))))));
        })));
        this.createCart$ = this.actions$.pipe(ofType(CREATE_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.cartConnector
                .create(payload.userId, payload.oldCartId, payload.toMergeCartGuid)
                .pipe(switchMap((/**
             * @param {?} cart
             * @return {?}
             */
            (cart) => {
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
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new CreateCartFail(makeErrorSerializable(error))))));
        })));
        this.mergeCart$ = this.actions$.pipe(ofType(MERGE_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.cartConnector.load(payload.userId, 'current').pipe(map((/**
             * @param {?} currentCart
             * @return {?}
             */
            currentCart => {
                return new CreateCart({
                    userId: payload.userId,
                    oldCartId: payload.cartId,
                    toMergeCartGuid: currentCart ? currentCart.guid : undefined,
                });
            })));
        })));
    }
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    isMissingData(payload) {
        return payload.userId === undefined || payload.cartId === undefined;
    }
}
CartEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CartEffects.ctorParameters = () => [
    { type: Actions },
    { type: CartConnector },
    { type: CartDataService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartEntryEffects {
    /**
     * @param {?} actions$
     * @param {?} cartEntryConnector
     */
    constructor(actions$, cartEntryConnector) {
        this.actions$ = actions$;
        this.cartEntryConnector = cartEntryConnector;
        this.addEntry$ = this.actions$.pipe(ofType(ADD_ENTRY), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.cartEntryConnector
            .add(payload.userId, payload.cartId, payload.productCode, payload.quantity)
            .pipe(map((/**
         * @param {?} entry
         * @return {?}
         */
        entry => new AddEntrySuccess(entry))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new AddEntryFail(makeErrorSerializable(error)))))))));
        this.removeEntry$ = this.actions$.pipe(ofType(REMOVE_ENTRY), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.cartEntryConnector
            .remove(payload.userId, payload.cartId, payload.entry)
            .pipe(map((/**
         * @return {?}
         */
        () => {
            return new RemoveEntrySuccess();
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new RemoveEntryFail(makeErrorSerializable(error)))))))));
        this.updateEntry$ = this.actions$.pipe(ofType(UPDATE_ENTRY), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.cartEntryConnector
            .update(payload.userId, payload.cartId, payload.entry, payload.qty)
            .pipe(map((/**
         * @return {?}
         */
        () => {
            return new UpdateEntrySuccess();
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new UpdateEntryFail(makeErrorSerializable(error)))))))));
    }
}
CartEntryEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CartEntryEffects.ctorParameters = () => [
    { type: Actions },
    { type: CartEntryConnector }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const effects$3 = [CartEffects, CartEntryEffects];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartStoreModule {
}
CartStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    StoreModule.forFeature(CART_FEATURE, reducerToken$3, { metaReducers: metaReducers$1 }),
                    EffectsModule.forFeature(effects$3),
                ],
                providers: [reducerProvider$3],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartModule {
}
CartModule.decorators = [
    { type: NgModule, args: [{
                imports: [CartStoreModule],
                providers: [CartDataService, CartService],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_CARD_TYPES = '[Checkout] Load Card Types';
/** @type {?} */
const LOAD_CARD_TYPES_FAIL = '[Checkout] Load Card Fail';
/** @type {?} */
const LOAD_CARD_TYPES_SUCCESS = '[Checkout] Load Card Success';
class LoadCardTypes {
    constructor() {
        this.type = LOAD_CARD_TYPES;
    }
}
class LoadCardTypesFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_CARD_TYPES_FAIL;
    }
}
class LoadCardTypesSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_CARD_TYPES_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const VERIFY_ADDRESS = '[Checkout] Verify Address';
/** @type {?} */
const VERIFY_ADDRESS_FAIL = '[Checkout] Verify Address Fail';
/** @type {?} */
const VERIFY_ADDRESS_SUCCESS = '[Checkout] Verify Address Success';
/** @type {?} */
const CLEAR_ADDRESS_VERIFICATION_RESULTS = '[Checkout] Clear Address Verification Results';
class VerifyAddress {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = VERIFY_ADDRESS;
    }
}
class VerifyAddressFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = VERIFY_ADDRESS_FAIL;
    }
}
class VerifyAddressSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = VERIFY_ADDRESS_SUCCESS;
    }
}
class ClearAddressVerificationResults {
    constructor() {
        this.type = CLEAR_ADDRESS_VERIFICATION_RESULTS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CHECKOUT_CLEAR_MISCS_DATA = '[Checkout] Clear Miscs Data';
class CheckoutClearMiscsData {
    constructor() {
        this.type = CHECKOUT_CLEAR_MISCS_DATA;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getDeliveryAddressSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.address);
/** @type {?} */
const getDeliveryModeSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.deliveryMode);
/** @type {?} */
const getPaymentDetailsSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.paymentDetails);
/** @type {?} */
const getOrderDetailsSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.orderDetails);
/** @type {?} */
const getCheckoutState = createFeatureSelector(CHECKOUT_FEATURE);
const ɵ0$6 = /**
 * @param {?} checkoutState
 * @return {?}
 */
(checkoutState) => checkoutState.steps;
/** @type {?} */
const getCheckoutStepsState = createSelector(getCheckoutState, (ɵ0$6));
const ɵ1$4 = /**
 * @param {?} state
 * @return {?}
 */
state => loaderValueSelector(state);
/** @type {?} */
const getCheckoutSteps = createSelector(getCheckoutStepsState, (ɵ1$4));
/** @type {?} */
const getDeliveryAddress = createSelector(getCheckoutSteps, getDeliveryAddressSelector);
/** @type {?} */
const getDeliveryMode = createSelector(getCheckoutSteps, getDeliveryModeSelector);
const ɵ2$4 = /**
 * @param {?} deliveryMode
 * @return {?}
 */
deliveryMode => {
    return Object.keys(deliveryMode.supported).map((/**
     * @param {?} code
     * @return {?}
     */
    code => deliveryMode.supported[code]));
};
/** @type {?} */
const getSupportedDeliveryModes = createSelector(getDeliveryMode, (ɵ2$4));
const ɵ3$4 = /**
 * @param {?} deliveryMode
 * @return {?}
 */
deliveryMode => {
    return deliveryMode.selected;
};
/** @type {?} */
const getSelectedCode = createSelector(getDeliveryMode, (ɵ3$4));
const ɵ4 = /**
 * @param {?} deliveryMode
 * @return {?}
 */
deliveryMode => {
    if (deliveryMode.selected !== '') {
        if (Object.keys(deliveryMode.supported).length === 0) {
            return null;
        }
        return deliveryMode.supported[deliveryMode.selected];
    }
};
/** @type {?} */
const getSelectedDeliveryMode = createSelector(getDeliveryMode, (ɵ4));
/** @type {?} */
const getPaymentDetails = createSelector(getCheckoutSteps, getPaymentDetailsSelector);
/** @type {?} */
const getCheckoutOrderDetails = createSelector(getCheckoutSteps, getOrderDetailsSelector);
const ɵ5 = /**
 * @param {?} state
 * @return {?}
 */
state => loaderSuccessSelector(state) && !loaderLoadingSelector(state);
/** @type {?} */
const getCheckoutDetailsLoaded = createSelector(getCheckoutStepsState, (ɵ5));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$6 = {
    entities: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$6(state = initialState$6, action) {
    switch (action.type) {
        case LOAD_CARD_TYPES_SUCCESS: {
            /** @type {?} */
            const cardTypes = action.payload;
            /** @type {?} */
            const entities = cardTypes.reduce((/**
             * @param {?} cardTypesEntities
             * @param {?} name
             * @return {?}
             */
            (cardTypesEntities, name) => {
                return Object.assign({}, cardTypesEntities, { [name.code]: name });
            }), Object.assign({}, state.entities));
            return Object.assign({}, state, { entities });
        }
        case CHECKOUT_CLEAR_MISCS_DATA: {
            return initialState$6;
        }
    }
    return state;
}
/** @type {?} */
const getCardTypesEntites = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.entities);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$7 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.cardTypes;
/** @type {?} */
const getCardTypesState = createSelector(getCheckoutState, (ɵ0$7));
/** @type {?} */
const getCardTypesEntites$1 = createSelector(getCardTypesState, getCardTypesEntites);
const ɵ1$5 = /**
 * @param {?} entites
 * @return {?}
 */
entites => {
    return Object.keys(entites).map((/**
     * @param {?} code
     * @return {?}
     */
    code => entites[code]));
};
/** @type {?} */
const getAllCardTypes = createSelector(getCardTypesEntites$1, (ɵ1$5));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$7 = {
    results: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$7(state = initialState$7, action) {
    switch (action.type) {
        case VERIFY_ADDRESS_SUCCESS: {
            /** @type {?} */
            const results = action.payload;
            return Object.assign({}, state, { results });
        }
        case VERIFY_ADDRESS_FAIL: {
            return Object.assign({}, state, { results: 'FAIL' });
        }
        case CLEAR_ADDRESS_VERIFICATION_RESULTS: {
            return Object.assign({}, state, { results: {} });
        }
    }
    return state;
}
/** @type {?} */
const getAddressVerificationResults = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.results);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$8 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.addressVerification;
/** @type {?} */
const getAddressVerificationResultsState = createSelector(getCheckoutState, (ɵ0$8));
/** @type {?} */
const getAddressVerificationResults$1 = createSelector(getAddressVerificationResultsState, getAddressVerificationResults);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class CheckoutAdapter {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    placeOrder(userId, cartId) {
        return this.adapter.placeOrder(userId, cartId);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    loadCheckoutDetails(userId, cartId) {
        return this.adapter.loadCheckoutDetails(userId, cartId);
    }
}
CheckoutConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CheckoutConnector.ctorParameters = () => [
    { type: CheckoutAdapter }
];
/** @nocollapse */ CheckoutConnector.ngInjectableDef = ɵɵdefineInjectable({ factory: function CheckoutConnector_Factory() { return new CheckoutConnector(ɵɵinject(CheckoutAdapter)); }, token: CheckoutConnector, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ORDER_NORMALIZER = new InjectionToken('OrderNormalizer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class CheckoutDeliveryAdapter {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutDeliveryConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    createAddress(userId, cartId, address) {
        return this.adapter.createAddress(userId, cartId, address);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} addressId
     * @return {?}
     */
    setAddress(userId, cartId, addressId) {
        return this.adapter.setAddress(userId, cartId, addressId);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} deliveryModeId
     * @return {?}
     */
    setMode(userId, cartId, deliveryModeId) {
        return this.adapter.setMode(userId, cartId, deliveryModeId);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    getMode(userId, cartId) {
        return this.adapter.getMode(userId, cartId);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    getSupportedModes(userId, cartId) {
        return this.adapter.getSupportedModes(userId, cartId);
    }
}
CheckoutDeliveryConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CheckoutDeliveryConnector.ctorParameters = () => [
    { type: CheckoutDeliveryAdapter }
];
/** @nocollapse */ CheckoutDeliveryConnector.ngInjectableDef = ɵɵdefineInjectable({ factory: function CheckoutDeliveryConnector_Factory() { return new CheckoutDeliveryConnector(ɵɵinject(CheckoutDeliveryAdapter)); }, token: CheckoutDeliveryConnector, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DELIVERY_MODE_NORMALIZER = new InjectionToken('DeliveryModeNormalizer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class CheckoutPaymentAdapter {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutPaymentConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetails
     * @return {?}
     */
    create(userId, cartId, paymentDetails) {
        return this.adapter.create(userId, cartId, paymentDetails);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetailsId
     * @return {?}
     */
    set(userId, cartId, paymentDetailsId) {
        return this.adapter.set(userId, cartId, paymentDetailsId);
    }
    /**
     * @return {?}
     */
    getCardTypes() {
        return this.adapter.loadCardTypes();
    }
}
CheckoutPaymentConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CheckoutPaymentConnector.ctorParameters = () => [
    { type: CheckoutPaymentAdapter }
];
/** @nocollapse */ CheckoutPaymentConnector.ngInjectableDef = ɵɵdefineInjectable({ factory: function CheckoutPaymentConnector_Factory() { return new CheckoutPaymentConnector(ɵɵinject(CheckoutPaymentAdapter)); }, token: CheckoutPaymentConnector, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PAYMENT_DETAILS_NORMALIZER = new InjectionToken('PaymentDetailsNormalizer');
/** @type {?} */
const PAYMENT_DETAILS_SERIALIZER = new InjectionToken('PaymentDetailsSerializer');
/** @type {?} */
const CARD_TYPE_NORMALIZER = new InjectionToken('CardTypeNormalizer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_BILLING_COUNTRIES = '[User] Load Billing Countries';
/** @type {?} */
const LOAD_BILLING_COUNTRIES_FAIL = '[User] Load Billing Countries Fail';
/** @type {?} */
const LOAD_BILLING_COUNTRIES_SUCCESS = '[User] Load Billing Countries Success';
class LoadBillingCountries {
    constructor() {
        this.type = LOAD_BILLING_COUNTRIES;
    }
}
class LoadBillingCountriesFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_BILLING_COUNTRIES_FAIL;
    }
}
class LoadBillingCountriesSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_BILLING_COUNTRIES_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_DELIVERY_COUNTRIES = '[User] Load Delivery Countries';
/** @type {?} */
const LOAD_DELIVERY_COUNTRIES_FAIL = '[User] Load Delivery Countries Fail';
/** @type {?} */
const LOAD_DELIVERY_COUNTRIES_SUCCESS = '[User] Load Delivery Countries Success';
class LoadDeliveryCountries {
    constructor() {
        this.type = LOAD_DELIVERY_COUNTRIES;
    }
}
class LoadDeliveryCountriesFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_DELIVERY_COUNTRIES_FAIL;
    }
}
class LoadDeliveryCountriesSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_DELIVERY_COUNTRIES_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const FORGOT_PASSWORD_EMAIL_REQUEST = '[User] Forgot Password Email Request';
/** @type {?} */
const FORGOT_PASSWORD_EMAIL_REQUEST_SUCCESS = '[User] Forgot Password Email Request Success';
/** @type {?} */
const FORGOT_PASSWORD_EMAIL_REQUEST_FAIL = '[User] Forgot Password Email Request Fail';
class ForgotPasswordEmailRequest {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FORGOT_PASSWORD_EMAIL_REQUEST;
    }
}
class ForgotPasswordEmailRequestFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FORGOT_PASSWORD_EMAIL_REQUEST_FAIL;
    }
}
class ForgotPasswordEmailRequestSuccess {
    constructor() {
        this.type = FORGOT_PASSWORD_EMAIL_REQUEST_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_ORDER_DETAILS = '[User] Load Order Details';
/** @type {?} */
const LOAD_ORDER_DETAILS_FAIL = '[User] Load Order Details Fail';
/** @type {?} */
const LOAD_ORDER_DETAILS_SUCCESS = '[User] Load Order Details Success';
/** @type {?} */
const CLEAR_ORDER_DETAILS = '[User] Clear Order Details';
class LoadOrderDetails {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_ORDER_DETAILS;
    }
}
class LoadOrderDetailsFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_ORDER_DETAILS_FAIL;
    }
}
class LoadOrderDetailsSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_ORDER_DETAILS_SUCCESS;
    }
}
class ClearOrderDetails {
    constructor() {
        this.type = CLEAR_ORDER_DETAILS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const USER_FEATURE = 'user';
/** @type {?} */
const UPDATE_EMAIL_PROCESS_ID = 'updateEmail';
/** @type {?} */
const UPDATE_PASSWORD_PROCESS_ID = 'updatePassword';
/** @type {?} */
const UPDATE_USER_DETAILS_PROCESS_ID = 'updateUserDetails';
/** @type {?} */
const REMOVE_USER_PROCESS_ID = 'removeUser';
/** @type {?} */
const GIVE_CONSENT_PROCESS_ID = 'giveConsent';
/** @type {?} */
const WITHDRAW_CONSENT_PROCESS_ID = 'withdrawConsent';
/** @type {?} */
const USER_CONSENTS = '[User] User Consents';
/** @type {?} */
const USER_PAYMENT_METHODS = '[User] User Payment Methods';
/** @type {?} */
const USER_ORDERS = '[User] User Orders';
/** @type {?} */
const USER_ADDRESSES = '[User] User Addresses';
/** @type {?} */
const REGIONS = '[User] Regions';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_USER_PAYMENT_METHODS = '[User] Load User Payment Methods';
/** @type {?} */
const LOAD_USER_PAYMENT_METHODS_FAIL = '[User] Load User Payment Methods Fail';
/** @type {?} */
const LOAD_USER_PAYMENT_METHODS_SUCCESS = '[User] Load User Payment Methods Success';
/** @type {?} */
const SET_DEFAULT_USER_PAYMENT_METHOD = '[User] Set Default User Payment Method';
/** @type {?} */
const SET_DEFAULT_USER_PAYMENT_METHOD_FAIL = '[User] Set Default User Payment Method Fail';
/** @type {?} */
const SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS = '[User] Set Default User Payment Method Success';
/** @type {?} */
const DELETE_USER_PAYMENT_METHOD = '[User] Delete User Payment Method';
/** @type {?} */
const DELETE_USER_PAYMENT_METHOD_FAIL = '[User] Delete User Payment Method Fail';
/** @type {?} */
const DELETE_USER_PAYMENT_METHOD_SUCCESS = '[User] Delete User  Payment Method Success';
class LoadUserPaymentMethods extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = LOAD_USER_PAYMENT_METHODS;
    }
}
class LoadUserPaymentMethodsFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS, payload);
        this.payload = payload;
        this.type = LOAD_USER_PAYMENT_METHODS_FAIL;
    }
}
class LoadUserPaymentMethodsSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = LOAD_USER_PAYMENT_METHODS_SUCCESS;
    }
}
class SetDefaultUserPaymentMethod extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = SET_DEFAULT_USER_PAYMENT_METHOD;
    }
}
class SetDefaultUserPaymentMethodFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS, payload);
        this.payload = payload;
        this.type = SET_DEFAULT_USER_PAYMENT_METHOD_FAIL;
    }
}
class SetDefaultUserPaymentMethodSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS;
    }
}
class DeleteUserPaymentMethod extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = DELETE_USER_PAYMENT_METHOD;
    }
}
class DeleteUserPaymentMethodFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS, payload);
        this.payload = payload;
        this.type = DELETE_USER_PAYMENT_METHOD_FAIL;
    }
}
class DeleteUserPaymentMethodSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = DELETE_USER_PAYMENT_METHOD_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_REGIONS = '[User] Load Regions';
/** @type {?} */
const LOAD_REGIONS_SUCCESS = '[User] Load Regions Success';
/** @type {?} */
const LOAD_REGIONS_FAIL = '[User] Load Regions Fail';
/** @type {?} */
const CLEAR_REGIONS = '[User] Clear Regions';
class LoadRegions extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(REGIONS);
        this.payload = payload;
        this.type = LOAD_REGIONS;
    }
}
class LoadRegionsFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(REGIONS, payload);
        this.payload = payload;
        this.type = LOAD_REGIONS_FAIL;
    }
}
class LoadRegionsSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(REGIONS);
        this.payload = payload;
        this.type = LOAD_REGIONS_SUCCESS;
    }
}
class ClearRegions {
    constructor() {
        this.type = CLEAR_REGIONS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const RESET_PASSWORD = '[User] Reset Password';
/** @type {?} */
const RESET_PASSWORD_SUCCESS = '[User] Reset Password Success';
/** @type {?} */
const RESET_PASSWORD_FAIL = '[User] Reset Password Fail';
class ResetPassword {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = RESET_PASSWORD;
    }
}
class ResetPasswordFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = RESET_PASSWORD_FAIL;
    }
}
class ResetPasswordSuccess {
    constructor() {
        this.type = RESET_PASSWORD_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_TITLES = '[User] Load Tiltes';
/** @type {?} */
const LOAD_TITLES_FAIL = '[User] Load Titles Fail';
/** @type {?} */
const LOAD_TITLES_SUCCESS = '[User] Load Titles Success';
class LoadTitles {
    constructor() {
        this.type = LOAD_TITLES;
    }
}
class LoadTitlesFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_TITLES_FAIL;
    }
}
class LoadTitlesSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_TITLES_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PROCESS_FEATURE = 'process';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const UPDATE_EMAIL = '[User] Update Email';
/** @type {?} */
const UPDATE_EMAIL_ERROR = '[User] Update Email Error';
/** @type {?} */
const UPDATE_EMAIL_SUCCESS = '[User] Update Email Success';
/** @type {?} */
const RESET_EMAIL = '[User] Reset Email';
class UpdateEmailAction extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, UPDATE_EMAIL_PROCESS_ID);
        this.payload = payload;
        this.type = UPDATE_EMAIL;
    }
}
class UpdateEmailSuccessAction extends EntitySuccessAction {
    /**
     * @param {?} newUid
     */
    constructor(newUid) {
        super(PROCESS_FEATURE, UPDATE_EMAIL_PROCESS_ID);
        this.newUid = newUid;
        this.type = UPDATE_EMAIL_SUCCESS;
    }
}
class UpdateEmailErrorAction extends EntityFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, UPDATE_EMAIL_PROCESS_ID, payload);
        this.payload = payload;
        this.type = UPDATE_EMAIL_ERROR;
    }
}
class ResetUpdateEmailAction extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, UPDATE_EMAIL_PROCESS_ID);
        this.type = RESET_EMAIL;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const UPDATE_PASSWORD = '[User] Update Password';
/** @type {?} */
const UPDATE_PASSWORD_FAIL = '[User] Update Password Fail';
/** @type {?} */
const UPDATE_PASSWORD_SUCCESS = '[User] Update Password Success';
/** @type {?} */
const UPDATE_PASSWORD_RESET = '[User] Reset Update Password Process State';
class UpdatePassword extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, UPDATE_PASSWORD_PROCESS_ID);
        this.payload = payload;
        this.type = UPDATE_PASSWORD;
    }
}
class UpdatePasswordFail extends EntityFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, UPDATE_PASSWORD_PROCESS_ID, payload);
        this.payload = payload;
        this.type = UPDATE_PASSWORD_FAIL;
    }
}
class UpdatePasswordSuccess extends EntitySuccessAction {
    constructor() {
        super(PROCESS_FEATURE, UPDATE_PASSWORD_PROCESS_ID);
        this.type = UPDATE_PASSWORD_SUCCESS;
    }
}
class UpdatePasswordReset extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, UPDATE_PASSWORD_PROCESS_ID);
        this.type = UPDATE_PASSWORD_RESET;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_USER_ADDRESSES = '[User] Load User Addresses';
/** @type {?} */
const LOAD_USER_ADDRESSES_FAIL = '[User] Load User Addresses Fail';
/** @type {?} */
const LOAD_USER_ADDRESSES_SUCCESS = '[User] Load User Addresses Success';
/** @type {?} */
const ADD_USER_ADDRESS = '[User] Add User Address';
/** @type {?} */
const ADD_USER_ADDRESS_FAIL = '[User] Add User Address Fail';
/** @type {?} */
const ADD_USER_ADDRESS_SUCCESS = '[User] Add User Address Success';
/** @type {?} */
const UPDATE_USER_ADDRESS = '[User] Update User Address';
/** @type {?} */
const UPDATE_USER_ADDRESS_FAIL = '[User] Update User Address Fail';
/** @type {?} */
const UPDATE_USER_ADDRESS_SUCCESS = '[User] Update User Address Success';
/** @type {?} */
const DELETE_USER_ADDRESS = '[User] Delete User Address';
/** @type {?} */
const DELETE_USER_ADDRESS_FAIL = '[User] Delete User Address Fail';
/** @type {?} */
const DELETE_USER_ADDRESS_SUCCESS = '[User] Delete User Address Success';
class LoadUserAddresses extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = LOAD_USER_ADDRESSES;
    }
}
class LoadUserAddressesFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES, payload);
        this.payload = payload;
        this.type = LOAD_USER_ADDRESSES_FAIL;
    }
}
class LoadUserAddressesSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = LOAD_USER_ADDRESSES_SUCCESS;
    }
}
// Adding address actions
class AddUserAddress extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = ADD_USER_ADDRESS;
    }
}
class AddUserAddressFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES, payload);
        this.payload = payload;
        this.type = ADD_USER_ADDRESS_FAIL;
    }
}
class AddUserAddressSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = ADD_USER_ADDRESS_SUCCESS;
    }
}
// Updating address actions
class UpdateUserAddress extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = UPDATE_USER_ADDRESS;
    }
}
class UpdateUserAddressFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES, payload);
        this.payload = payload;
        this.type = UPDATE_USER_ADDRESS_FAIL;
    }
}
class UpdateUserAddressSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = UPDATE_USER_ADDRESS_SUCCESS;
    }
}
// Deleting address actions
class DeleteUserAddress extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = DELETE_USER_ADDRESS;
    }
}
class DeleteUserAddressFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES, payload);
        this.payload = payload;
        this.type = DELETE_USER_ADDRESS_FAIL;
    }
}
class DeleteUserAddressSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = DELETE_USER_ADDRESS_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_USER_CONSENTS = '[User] Load User Consents';
/** @type {?} */
const LOAD_USER_CONSENTS_SUCCESS = '[User] Load User Consents Success';
/** @type {?} */
const LOAD_USER_CONSENTS_FAIL = '[User] Load User Consents Fail';
/** @type {?} */
const RESET_LOAD_USER_CONSENTS = '[User] Reset Load User Consents';
/** @type {?} */
const GIVE_USER_CONSENT = '[User] Give User Consent';
/** @type {?} */
const GIVE_USER_CONSENT_FAIL = '[User] Give User Consent Fail';
/** @type {?} */
const GIVE_USER_CONSENT_SUCCESS = '[User] Give User Consent Success';
/** @type {?} */
const RESET_GIVE_USER_CONSENT_PROCESS = '[User] Reset Give User Consent Process';
/** @type {?} */
const WITHDRAW_USER_CONSENT = '[User] Withdraw User Consent';
/** @type {?} */
const WITHDRAW_USER_CONSENT_FAIL = '[User] Withdraw User Consent Fail';
/** @type {?} */
const WITHDRAW_USER_CONSENT_SUCCESS = '[User] Withdraw User Consent Success';
/** @type {?} */
const RESET_WITHDRAW_USER_CONSENT_PROCESS = '[User] Reset Withdraw User Consent Process';
class LoadUserConsents extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_CONSENTS);
        this.payload = payload;
        this.type = LOAD_USER_CONSENTS;
    }
}
class LoadUserConsentsFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_CONSENTS, payload);
        this.payload = payload;
        this.type = LOAD_USER_CONSENTS_FAIL;
    }
}
class LoadUserConsentsSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_CONSENTS);
        this.payload = payload;
        this.type = LOAD_USER_CONSENTS_SUCCESS;
    }
}
class ResetLoadUserConsents extends LoaderResetAction {
    constructor() {
        super(USER_CONSENTS);
        this.type = RESET_LOAD_USER_CONSENTS;
    }
}
class GiveUserConsent extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, GIVE_CONSENT_PROCESS_ID);
        this.payload = payload;
        this.type = GIVE_USER_CONSENT;
    }
}
class GiveUserConsentFail extends EntityFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, GIVE_CONSENT_PROCESS_ID, payload);
        this.type = GIVE_USER_CONSENT_FAIL;
    }
}
class GiveUserConsentSuccess extends EntitySuccessAction {
    /**
     * @param {?} consentTemplate
     */
    constructor(consentTemplate) {
        super(PROCESS_FEATURE, GIVE_CONSENT_PROCESS_ID);
        this.consentTemplate = consentTemplate;
        this.type = GIVE_USER_CONSENT_SUCCESS;
    }
}
class ResetGiveUserConsentProcess extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, GIVE_CONSENT_PROCESS_ID);
        this.type = RESET_GIVE_USER_CONSENT_PROCESS;
    }
}
class WithdrawUserConsent extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, WITHDRAW_CONSENT_PROCESS_ID);
        this.payload = payload;
        this.type = WITHDRAW_USER_CONSENT;
    }
}
class WithdrawUserConsentFail extends EntityFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, WITHDRAW_CONSENT_PROCESS_ID, payload);
        this.type = WITHDRAW_USER_CONSENT_FAIL;
    }
}
class WithdrawUserConsentSuccess extends EntitySuccessAction {
    constructor() {
        super(PROCESS_FEATURE, WITHDRAW_CONSENT_PROCESS_ID);
        this.type = WITHDRAW_USER_CONSENT_SUCCESS;
    }
}
class ResetWithdrawUserConsentProcess extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, WITHDRAW_CONSENT_PROCESS_ID);
        this.type = RESET_WITHDRAW_USER_CONSENT_PROCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_USER_DETAILS = '[User] Load User Details';
/** @type {?} */
const LOAD_USER_DETAILS_FAIL = '[User] Load User Details Fail';
/** @type {?} */
const LOAD_USER_DETAILS_SUCCESS = '[User] Load User Details Success';
/** @type {?} */
const UPDATE_USER_DETAILS = '[User] Update User Details';
/** @type {?} */
const UPDATE_USER_DETAILS_FAIL = '[User] Update User Details Fail';
/** @type {?} */
const UPDATE_USER_DETAILS_SUCCESS = '[User] Update User Details Success';
/** @type {?} */
const RESET_USER_DETAILS = '[User] Reset User Details';
class LoadUserDetails {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_USER_DETAILS;
    }
}
class LoadUserDetailsFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_USER_DETAILS_FAIL;
    }
}
class LoadUserDetailsSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_USER_DETAILS_SUCCESS;
    }
}
class UpdateUserDetails extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, UPDATE_USER_DETAILS_PROCESS_ID);
        this.payload = payload;
        this.type = UPDATE_USER_DETAILS;
    }
}
class UpdateUserDetailsFail extends EntityFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, UPDATE_USER_DETAILS_PROCESS_ID, payload);
        this.payload = payload;
        this.type = UPDATE_USER_DETAILS_FAIL;
    }
}
class UpdateUserDetailsSuccess extends EntitySuccessAction {
    /**
     * @param {?} userUpdates
     */
    constructor(userUpdates) {
        super(PROCESS_FEATURE, UPDATE_USER_DETAILS_PROCESS_ID);
        this.userUpdates = userUpdates;
        this.type = UPDATE_USER_DETAILS_SUCCESS;
    }
}
class ResetUpdateUserDetails extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, UPDATE_USER_DETAILS_PROCESS_ID);
        this.type = RESET_USER_DETAILS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_USER_ORDERS = '[User] Load User Orders';
/** @type {?} */
const LOAD_USER_ORDERS_FAIL = '[User] Load User Orders Fail';
/** @type {?} */
const LOAD_USER_ORDERS_SUCCESS = '[User] Load User Orders Success';
/** @type {?} */
const CLEAR_USER_ORDERS = '[User] Clear User Orders';
class LoadUserOrders extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ORDERS);
        this.payload = payload;
        this.type = LOAD_USER_ORDERS;
    }
}
class LoadUserOrdersFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ORDERS, payload);
        this.payload = payload;
        this.type = LOAD_USER_ORDERS_FAIL;
    }
}
class LoadUserOrdersSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ORDERS);
        this.payload = payload;
        this.type = LOAD_USER_ORDERS_SUCCESS;
    }
}
class ClearUserOrders {
    constructor() {
        this.type = CLEAR_USER_ORDERS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const REGISTER_USER = '[User] Register User';
/** @type {?} */
const REGISTER_USER_FAIL = '[User] Register User Fail';
/** @type {?} */
const REGISTER_USER_SUCCESS = '[User] Register User Success';
/** @type {?} */
const REMOVE_USER = '[User] Remove User';
/** @type {?} */
const REMOVE_USER_FAIL = '[User] Remove User Fail';
/** @type {?} */
const REMOVE_USER_SUCCESS = '[User] Remove User Success';
/** @type {?} */
const REMOVE_USER_RESET = '[User] Reset Remove User Process State';
class RegisterUser {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = REGISTER_USER;
    }
}
class RegisterUserFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = REGISTER_USER_FAIL;
    }
}
class RegisterUserSuccess {
    constructor() {
        this.type = REGISTER_USER_SUCCESS;
    }
}
class RemoveUser extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, REMOVE_USER_PROCESS_ID);
        this.payload = payload;
        this.type = REMOVE_USER;
    }
}
class RemoveUserFail extends EntityFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, REMOVE_USER_PROCESS_ID, payload);
        this.payload = payload;
        this.type = REMOVE_USER_FAIL;
    }
}
class RemoveUserSuccess extends EntitySuccessAction {
    constructor() {
        super(PROCESS_FEATURE, REMOVE_USER_PROCESS_ID);
        this.type = REMOVE_USER_SUCCESS;
    }
}
class RemoveUserReset extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, REMOVE_USER_PROCESS_ID);
        this.type = REMOVE_USER_RESET;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CLEAR_MISCS_DATA = '[User] Clear User Misc Data';
class ClearMiscsData {
    constructor() {
        this.type = CLEAR_MISCS_DATA;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutEffects {
    /**
     * @param {?} actions$
     * @param {?} checkoutDeliveryConnector
     * @param {?} checkoutPaymentConnector
     * @param {?} checkoutConnector
     */
    constructor(actions$, checkoutDeliveryConnector, checkoutPaymentConnector, checkoutConnector) {
        this.actions$ = actions$;
        this.checkoutDeliveryConnector = checkoutDeliveryConnector;
        this.checkoutPaymentConnector = checkoutPaymentConnector;
        this.checkoutConnector = checkoutConnector;
        this.addDeliveryAddress$ = this.actions$.pipe(ofType(ADD_DELIVERY_ADDRESS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.checkoutDeliveryConnector
            .createAddress(payload.userId, payload.cartId, payload.address)
            .pipe(mergeMap((/**
         * @param {?} address
         * @return {?}
         */
        address => {
            address['titleCode'] = payload.address.titleCode;
            return [
                new LoadUserAddresses(payload.userId),
                new SetDeliveryAddress({
                    userId: payload.userId,
                    cartId: payload.cartId,
                    address: address,
                }),
            ];
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new AddDeliveryAddressFail(makeErrorSerializable(error)))))))));
        this.setDeliveryAddress$ = this.actions$.pipe(ofType(SET_DELIVERY_ADDRESS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.checkoutDeliveryConnector
                .setAddress(payload.userId, payload.cartId, payload.address.id)
                .pipe(mergeMap((/**
             * @return {?}
             */
            () => [
                new SetDeliveryAddressSuccess(payload.address),
                new LoadSupportedDeliveryModes({
                    userId: payload.userId,
                    cartId: payload.cartId,
                }),
            ])), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new SetDeliveryAddressFail(makeErrorSerializable(error))))));
        })));
        this.loadSupportedDeliveryModes$ = this.actions$.pipe(ofType(LOAD_SUPPORTED_DELIVERY_MODES), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.checkoutDeliveryConnector
                .getSupportedModes(payload.userId, payload.cartId)
                .pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                return new LoadSupportedDeliveryModesSuccess(data);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new LoadSupportedDeliveryModesFail(makeErrorSerializable(error))))));
        })));
        this.clearCheckoutMiscsDataOnLanguageChange$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE), map((/**
         * @return {?}
         */
        () => new CheckoutClearMiscsData())));
        this.clearDeliveryModesOnCurrencyChange$ = this.actions$.pipe(ofType(CURRENCY_CHANGE), map((/**
         * @return {?}
         */
        () => new ClearSupportedDeliveryModes())));
        this.clearCheckoutDataOnLogout$ = this.actions$.pipe(ofType(LOGOUT), map((/**
         * @return {?}
         */
        () => new ClearCheckoutData())));
        this.setDeliveryMode$ = this.actions$.pipe(ofType(SET_DELIVERY_MODE), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.checkoutDeliveryConnector
                .setMode(payload.userId, payload.cartId, payload.selectedModeId)
                .pipe(mergeMap((/**
             * @return {?}
             */
            () => {
                return [
                    new SetDeliveryModeSuccess(payload.selectedModeId),
                    new LoadCart({
                        userId: payload.userId,
                        cartId: payload.cartId,
                        details: true,
                    }),
                ];
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new SetDeliveryModeFail(makeErrorSerializable(error))))));
        })));
        this.createPaymentDetails$ = this.actions$.pipe(ofType(CREATE_PAYMENT_DETAILS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            // get information for creating a subscription directly with payment provider
            return this.checkoutPaymentConnector
                .create(payload.userId, payload.cartId, payload.paymentDetails)
                .pipe(mergeMap((/**
             * @param {?} details
             * @return {?}
             */
            details => [
                new LoadUserPaymentMethods(payload.userId),
                new CreatePaymentDetailsSuccess(details),
            ])), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new CreatePaymentDetailsFail(makeErrorSerializable(error))))));
        })));
        this.setPaymentDetails$ = this.actions$.pipe(ofType(SET_PAYMENT_DETAILS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.checkoutPaymentConnector
                .set(payload.userId, payload.cartId, payload.paymentDetails.id)
                .pipe(map((/**
             * @return {?}
             */
            () => new SetPaymentDetailsSuccess(payload.paymentDetails))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new SetPaymentDetailsFail(makeErrorSerializable(error))))));
        })));
        this.placeOrder$ = this.actions$.pipe(ofType(PLACE_ORDER), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.checkoutConnector
                .placeOrder(payload.userId, payload.cartId)
                .pipe(switchMap((/**
             * @param {?} data
             * @return {?}
             */
            data => [new PlaceOrderSuccess(data)])), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new PlaceOrderFail(makeErrorSerializable(error))))));
        })));
        this.loadCheckoutDetails$ = this.actions$.pipe(ofType(LOAD_CHECKOUT_DETAILS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.checkoutConnector
                .loadCheckoutDetails(payload.userId, payload.cartId)
                .pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            (data) => new LoadCheckoutDetailsSuccess(data))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new LoadCheckoutDetailsFail(makeErrorSerializable(error))))));
        })));
        this.reloadDetailsOnMergeCart$ = this.actions$.pipe(ofType(MERGE_CART_SUCCESS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), map((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return new LoadCheckoutDetails({
                userId: payload.userId,
                cartId: payload.cartId ? payload.cartId : 'current',
            });
        })));
    }
}
CheckoutEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CheckoutEffects.ctorParameters = () => [
    { type: Actions },
    { type: CheckoutDeliveryConnector },
    { type: CheckoutPaymentConnector },
    { type: CheckoutConnector }
];
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
], CheckoutEffects.prototype, "clearCheckoutMiscsDataOnLanguageChange$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], CheckoutEffects.prototype, "clearDeliveryModesOnCurrencyChange$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], CheckoutEffects.prototype, "clearCheckoutDataOnLogout$", void 0);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardTypesEffects {
    /**
     * @param {?} actions$
     * @param {?} checkoutPaymentConnector
     */
    constructor(actions$, checkoutPaymentConnector) {
        this.actions$ = actions$;
        this.checkoutPaymentConnector = checkoutPaymentConnector;
        this.loadCardTypes$ = this.actions$.pipe(ofType(LOAD_CARD_TYPES), switchMap((/**
         * @return {?}
         */
        () => {
            return this.checkoutPaymentConnector.getCardTypes().pipe(map((/**
             * @param {?} cardTypes
             * @return {?}
             */
            cardTypes => new LoadCardTypesSuccess(cardTypes))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new LoadCardTypesFail(makeErrorSerializable(error))))));
        })));
    }
}
CardTypesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CardTypesEffects.ctorParameters = () => [
    { type: Actions },
    { type: CheckoutPaymentConnector }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], CardTypesEffects.prototype, "loadCardTypes$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class UserAddressAdapter {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserAddressConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    getAll(userId) {
        return this.adapter.loadAll(userId);
    }
    /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    add(userId, address) {
        return this.adapter.add(userId, address);
    }
    /**
     * @param {?} userId
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
    update(userId, addressId, address) {
        return this.adapter.update(userId, addressId, address);
    }
    /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    verify(userId, address) {
        return this.adapter.verify(userId, address);
    }
    /**
     * @param {?} userId
     * @param {?} addressId
     * @return {?}
     */
    delete(userId, addressId) {
        return this.adapter.delete(userId, addressId);
    }
}
UserAddressConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
UserAddressConnector.ctorParameters = () => [
    { type: UserAddressAdapter }
];
/** @nocollapse */ UserAddressConnector.ngInjectableDef = ɵɵdefineInjectable({ factory: function UserAddressConnector_Factory() { return new UserAddressConnector(ɵɵinject(UserAddressAdapter)); }, token: UserAddressConnector, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddressVerificationEffect {
    /**
     * @param {?} actions$
     * @param {?} userAddressConnector
     */
    constructor(actions$, userAddressConnector) {
        this.actions$ = actions$;
        this.userAddressConnector = userAddressConnector;
        this.verifyAddress$ = this.actions$.pipe(ofType(VERIFY_ADDRESS), map((/**
         * @param {?} action
         * @return {?}
         */
        action => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.userAddressConnector.verify(payload.userId, payload.address).pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        data => new VerifyAddressSuccess(data))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new VerifyAddressFail(makeErrorSerializable(error)))))))));
    }
}
AddressVerificationEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AddressVerificationEffect.ctorParameters = () => [
    { type: Actions },
    { type: UserAddressConnector }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], AddressVerificationEffect.prototype, "verifyAddress$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const effects$4 = [
    CheckoutEffects,
    AddressVerificationEffect,
    CardTypesEffects,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$8 = {
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
function reducer$8(state = initialState$8, action) {
    switch (action.type) {
        case ADD_DELIVERY_ADDRESS_SUCCESS:
        case SET_DELIVERY_ADDRESS_SUCCESS: {
            /** @type {?} */
            const address = action.payload;
            return Object.assign({}, state, { address });
        }
        case LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS: {
            /** @type {?} */
            const supportedModes = action.payload;
            if (!supportedModes) {
                return state;
            }
            /** @type {?} */
            const supported = supportedModes.reduce((/**
             * @param {?} modes
             * @param {?} mode
             * @return {?}
             */
            (modes, mode) => {
                return Object.assign({}, modes, { [mode.code]: mode });
            }), Object.assign({}, state.deliveryMode.supported));
            return Object.assign({}, state, { deliveryMode: Object.assign({}, state.deliveryMode, { supported }) });
        }
        case SET_DELIVERY_MODE_SUCCESS: {
            /** @type {?} */
            const selected = action.payload;
            return Object.assign({}, state, { deliveryMode: Object.assign({}, state.deliveryMode, { selected }) });
        }
        case CREATE_PAYMENT_DETAILS_SUCCESS:
        case SET_PAYMENT_DETAILS_SUCCESS: {
            return Object.assign({}, state, { paymentDetails: action.payload });
        }
        case CREATE_PAYMENT_DETAILS_FAIL: {
            /** @type {?} */
            const paymentDetails = action.payload;
            if (paymentDetails['hasError']) {
                return Object.assign({}, state, { paymentDetails });
            }
            return state;
        }
        case PLACE_ORDER_SUCCESS: {
            /** @type {?} */
            const orderDetails = action.payload;
            return Object.assign({}, state, { orderDetails });
        }
        case CLEAR_CHECKOUT_DATA: {
            return initialState$8;
        }
        case CLEAR_CHECKOUT_STEP: {
            /** @type {?} */
            const stepNumber = action.payload;
            switch (stepNumber) {
                case 1: {
                    return Object.assign({}, state, { address: {} });
                }
                case 2: {
                    return Object.assign({}, state, { deliveryMode: Object.assign({}, state.deliveryMode, { supported: {}, selected: '' }) });
                }
                case 3: {
                    return Object.assign({}, state, { paymentDetails: {} });
                }
            }
            return state;
        }
        case CLEAR_SUPPORTED_DELIVERY_MODES:
        case CHECKOUT_CLEAR_MISCS_DATA: {
            return Object.assign({}, state, { deliveryMode: Object.assign({}, state.deliveryMode, { supported: {} }) });
        }
        case LOAD_CHECKOUT_DETAILS_SUCCESS: {
            return Object.assign({}, state, { address: action.payload.deliveryAddress, deliveryMode: Object.assign({}, state.deliveryMode, { selected: action.payload.deliveryMode && action.payload.deliveryMode.code }), paymentDetails: action.payload.paymentInfo });
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$4() {
    return {
        steps: loaderReducer(CHECKOUT_DETAILS, reducer$8),
        cardTypes: reducer$6,
        addressVerification: reducer$7,
    };
}
/** @type {?} */
const reducerToken$4 = new InjectionToken('CheckoutReducers');
/** @type {?} */
const reducerProvider$4 = {
    provide: reducerToken$4,
    useFactory: getReducers$4,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutService {
    /**
     * @param {?} checkoutStore
     * @param {?} cartData
     */
    constructor(checkoutStore, cartData) {
        this.checkoutStore = checkoutStore;
        this.cartData = cartData;
    }
    /**
     * Places an order
     * @return {?}
     */
    placeOrder() {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new PlaceOrder({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
            }));
        }
    }
    /**
     * Clear checkout data
     * @return {?}
     */
    clearCheckoutData() {
        this.checkoutStore.dispatch(new ClearCheckoutData());
    }
    /**
     * Clear checkout step
     * @param {?} stepNumber : the step number to be cleared
     * @return {?}
     */
    clearCheckoutStep(stepNumber) {
        this.checkoutStore.dispatch(new ClearCheckoutStep(stepNumber));
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    loadCheckoutDetails(cartId) {
        this.checkoutStore.dispatch(new LoadCheckoutDetails({
            userId: this.cartData.userId,
            cartId,
        }));
    }
    /**
     * @return {?}
     */
    getCheckoutDetailsLoaded() {
        return this.checkoutStore.pipe(select(getCheckoutDetailsLoaded));
    }
    /**
     * Get order details
     * @return {?}
     */
    getOrderDetails() {
        return this.checkoutStore.pipe(select(getCheckoutOrderDetails));
    }
    /**
     * @protected
     * @return {?}
     */
    actionAllowed() {
        return this.cartData.userId !== ANONYMOUS_USERID;
    }
}
CheckoutService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CheckoutService.ctorParameters = () => [
    { type: Store },
    { type: CartDataService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutDeliveryService {
    /**
     * @param {?} checkoutStore
     * @param {?} cartData
     */
    constructor(checkoutStore, cartData) {
        this.checkoutStore = checkoutStore;
        this.cartData = cartData;
    }
    /**
     * Get supported delivery modes
     * @return {?}
     */
    getSupportedDeliveryModes() {
        return this.checkoutStore.pipe(select(getSupportedDeliveryModes), tap((/**
         * @param {?} deliveryModes
         * @return {?}
         */
        deliveryModes => {
            if (Object.keys(deliveryModes).length === 0) {
                this.loadSupportedDeliveryModes();
            }
        })), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * Get selected delivery mode
     * @return {?}
     */
    getSelectedDeliveryMode() {
        return this.checkoutStore.pipe(select(getSelectedDeliveryMode));
    }
    /**
     * Get selected delivery mode code
     * @return {?}
     */
    getSelectedDeliveryModeCode() {
        return this.checkoutStore.pipe(select(getSelectedCode));
    }
    /**
     * Get delivery address
     * @return {?}
     */
    getDeliveryAddress() {
        return this.checkoutStore.pipe(select(getDeliveryAddress));
    }
    /**
     * Get address verification results
     * @return {?}
     */
    getAddressVerificationResults() {
        return this.checkoutStore.pipe(select(getAddressVerificationResults$1), filter((/**
         * @param {?} results
         * @return {?}
         */
        results => Object.keys(results).length !== 0)));
    }
    /**
     * Create and set a delivery address using the address param
     * @param {?} address : the Address to be created and set
     * @return {?}
     */
    createAndSetAddress(address) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new AddDeliveryAddress({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                address: address,
            }));
        }
    }
    /**
     * Load supported delivery modes
     * @return {?}
     */
    loadSupportedDeliveryModes() {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new LoadSupportedDeliveryModes({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
            }));
        }
    }
    /**
     * Set delivery mode
     * @param {?} mode : The delivery mode to be set
     * @return {?}
     */
    setDeliveryMode(mode) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new SetDeliveryMode({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                selectedModeId: mode,
            }));
        }
    }
    /**
     * Verifies the address
     * @param {?} address : the address to be verified
     * @return {?}
     */
    verifyAddress(address) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new VerifyAddress({
                userId: this.cartData.userId,
                address,
            }));
        }
    }
    /**
     * Set delivery address
     * @param {?} address : The address to be set
     * @return {?}
     */
    setDeliveryAddress(address) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new SetDeliveryAddress({
                userId: this.cartData.userId,
                cartId: this.cartData.cart.code,
                address: address,
            }));
        }
    }
    /**
     * Clear address verification results
     * @return {?}
     */
    clearAddressVerificationResults() {
        this.checkoutStore.dispatch(new ClearAddressVerificationResults());
    }
    /**
     * @protected
     * @return {?}
     */
    actionAllowed() {
        return this.cartData.userId !== ANONYMOUS_USERID;
    }
}
CheckoutDeliveryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CheckoutDeliveryService.ctorParameters = () => [
    { type: Store },
    { type: CartDataService }
];
/** @nocollapse */ CheckoutDeliveryService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CheckoutDeliveryService_Factory() { return new CheckoutDeliveryService(ɵɵinject(Store), ɵɵinject(CartDataService)); }, token: CheckoutDeliveryService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutPaymentService {
    /**
     * @param {?} checkoutStore
     * @param {?} cartData
     */
    constructor(checkoutStore, cartData) {
        this.checkoutStore = checkoutStore;
        this.cartData = cartData;
    }
    /**
     * Get card types
     * @return {?}
     */
    getCardTypes() {
        return this.checkoutStore.pipe(select(getAllCardTypes));
    }
    /**
     * Get payment details
     * @return {?}
     */
    getPaymentDetails() {
        return this.checkoutStore.pipe(select(getPaymentDetails));
    }
    /**
     * Load the supported card types
     * @return {?}
     */
    loadSupportedCardTypes() {
        this.checkoutStore.dispatch(new LoadCardTypes());
    }
    /**
     * Create payment details using the given paymentDetails param
     * @param {?} paymentDetails
     * @return {?}
     */
    createPaymentDetails(paymentDetails) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new CreatePaymentDetails({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                paymentDetails,
            }));
        }
    }
    /**
     * Set payment details
     * @param {?} paymentDetails : the PaymentDetails to be set
     * @return {?}
     */
    setPaymentDetails(paymentDetails) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new SetPaymentDetails({
                userId: this.cartData.userId,
                cartId: this.cartData.cart.code,
                paymentDetails: paymentDetails,
            }));
        }
    }
    /**
     * @protected
     * @return {?}
     */
    actionAllowed() {
        return this.cartData.userId !== ANONYMOUS_USERID;
    }
}
CheckoutPaymentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CheckoutPaymentService.ctorParameters = () => [
    { type: Store },
    { type: CartDataService }
];
/** @nocollapse */ CheckoutPaymentService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CheckoutPaymentService_Factory() { return new CheckoutPaymentService(ɵɵinject(Store), ɵɵinject(CartDataService)); }, token: CheckoutPaymentService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const JSP_INCLUDE_CMS_COMPONENT_TYPE = 'JspIncludeComponent';
/** @type {?} */
const CMS_FLEX_COMPONENT_TYPE = 'CMSFlexComponent';
/**
 * @abstract
 */
class CmsConfig extends OccConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultCmsModuleConfig = {
    backend: {
        occ: {
            endpoints: {
                component: 'cms/components/${id}',
                components: 'cms/components?fields=${fields}',
                pages: 'cms/pages?fields=${fields}',
                page: 'cms/pages/${id}?fields=${fields}',
            },
            legacy: false,
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `CmsStructureConfig` is used to build pages in Spartacus by configuration
 * instead of using a backend CMS system. The configuration can be used to build
 * complete pages or parts of a page. The `CmsStructureConfig` is optimized to
 * only require the necessary properties. Adapter logic is applied to serialize
 * the `CmsStructureConfig` into the required UI model.
 * @abstract
 */
class CmsStructureConfig extends CmsConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const PageRobotsMeta = {
    INDEX: 'INDEX',
    NOINDEX: 'NOINDEX',
    FOLLOW: 'FOLLOW',
    NOFOLLOW: 'NOFOLLOW',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Abstract class that can be used to implement custom loader logic
 * in order to load CMS structure from third-party CMS system.
 * @abstract
 */
class CmsPageAdapter {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
class CmsStructureConfigService {
    /**
     * @param {?} cmsDataConfig
     */
    constructor(cmsDataConfig) {
        this.cmsDataConfig = cmsDataConfig;
    }
    /**
     * Merge the cms structure to the pageStructure. The page structure
     * can either hold complete page structures or global structures that
     * might apply to all pages (such has header coponents).
     * @param {?} pageId
     * @param {?} pageStructure
     * @return {?}
     */
    mergePageStructure(pageId, pageStructure) {
        return this.mergePage(pageId, pageStructure).pipe(switchMap((/**
         * @param {?} page
         * @return {?}
         */
        page => this.mergeSlots(page))));
    }
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
    shouldIgnoreBackend(pageId) {
        return this.getPageFromConfig(pageId).pipe(map((/**
         * @param {?} page
         * @return {?}
         */
        page => !!page && !!page.ignoreBackend)));
    }
    /**
     * returns an Observable component data from the static configuration.
     * @param {?} componentId
     * @return {?}
     */
    getComponentFromConfig(componentId) {
        return of(this.getComponentById(componentId));
    }
    /**
     * returns an Observable components data from the static configuration.
     * @param {?} ids
     * @return {?}
     */
    getComponentsFromConfig(ids) {
        return of(ids.map((/**
         * @param {?} id
         * @return {?}
         */
        id => this.getComponentById(id))));
    }
    /**
     * returns an observable with the `PageConfig`.
     * @protected
     * @param {?} pageId
     * @return {?}
     */
    getPageFromConfig(pageId) {
        return of(this.cmsDataConfig.cmsStructure && this.cmsDataConfig.cmsStructure.pages
            ? this.cmsDataConfig.cmsStructure.pages.find((/**
             * @param {?} p
             * @return {?}
             */
            p => p.pageId === pageId))
            : null);
    }
    /**
     * Merge page data from the configuration into the given structure, if any.
     * If the given page structure is empty, a page is created and the page slots are
     * are merged into the page.
     * @protected
     * @param {?} pageId
     * @param {?} pageStructure
     * @return {?}
     */
    mergePage(pageId, pageStructure) {
        return this.getPageFromConfig(pageId).pipe(switchMap((/**
         * @param {?} page
         * @return {?}
         */
        page => {
            if (page) {
                // serialize page data
                if (!pageStructure.page) {
                    pageStructure.page = Object.assign({}, page);
                    pageStructure.page.slots = {};
                }
                if (!pageStructure.page.slots) {
                    pageStructure.page.slots = {};
                }
                return this.mergeSlots(pageStructure, page.slots);
            }
            else {
                return of(pageStructure);
            }
        })));
    }
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
    mergeSlots(pageStructure, slots) {
        // if no slots have been given, we use the global configured slots
        if (!slots &&
            this.cmsDataConfig.cmsStructure &&
            this.cmsDataConfig.cmsStructure.slots) {
            slots = this.cmsDataConfig.cmsStructure.slots;
        }
        if (!slots) {
            return of(pageStructure);
        }
        for (const position of Object.keys(slots)) {
            if (!Object.keys(pageStructure.page.slots).includes(position)) {
                // the global slot isn't yet part of the page structure
                pageStructure.page.slots[position] = {};
                for (const component of this.getComponentsByPosition(slots, position)) {
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
        }
        return of(pageStructure);
    }
    /**
     * @protected
     * @param {?} slots
     * @param {?} position
     * @return {?}
     */
    getComponentsByPosition(slots, position) {
        /** @type {?} */
        const components = [];
        if (slots[position] && slots[position].componentIds) {
            for (const componentId of slots[position].componentIds) {
                if (this.cmsDataConfig.cmsStructure &&
                    this.cmsDataConfig.cmsStructure.components) {
                    /** @type {?} */
                    const component = this.cmsDataConfig.cmsStructure.components[componentId];
                    if (component) {
                        components.push(Object.assign({ uid: componentId }, component));
                    }
                }
            }
        }
        return components;
    }
    /**
     * @protected
     * @param {?} componentId
     * @return {?}
     */
    getComponentById(componentId) {
        return this.cmsDataConfig.cmsStructure &&
            this.cmsDataConfig.cmsStructure.components
            ? this.cmsDataConfig.cmsStructure.components[componentId]
            : undefined;
    }
}
CmsStructureConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CmsStructureConfigService.ctorParameters = () => [
    { type: CmsStructureConfig }
];
/** @nocollapse */ CmsStructureConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CmsStructureConfigService_Factory() { return new CmsStructureConfigService(ɵɵinject(CmsStructureConfig)); }, token: CmsStructureConfigService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CmsPageConnector {
    /**
     * @param {?} cmsPageAdapter
     * @param {?} cmsStructureConfigService
     */
    constructor(cmsPageAdapter, cmsStructureConfigService) {
        this.cmsPageAdapter = cmsPageAdapter;
        this.cmsStructureConfigService = cmsStructureConfigService;
    }
    /**
     * Returns an observable with the page structure. The page structure is
     * typically loaded from a backend, but can also be returned from static
     * configuration (see `CmsStructureConfigService`).
     * @param {?} pageContext
     * @return {?}
     */
    get(pageContext) {
        return this.cmsStructureConfigService
            .shouldIgnoreBackend(pageContext.id)
            .pipe(switchMap((/**
         * @param {?} loadFromConfig
         * @return {?}
         */
        loadFromConfig => {
            if (!loadFromConfig) {
                return this.cmsPageAdapter.load(pageContext).pipe(catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                error => {
                    if (error instanceof HttpErrorResponse &&
                        error.status === 400) {
                        return of({});
                    }
                    else {
                        return throwError(error);
                    }
                })));
            }
            else {
                return of({});
            }
        })), switchMap((/**
         * @param {?} page
         * @return {?}
         */
        page => this.mergeDefaultPageStructure(pageContext, page))));
    }
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
    mergeDefaultPageStructure(pageContext, pageStructure) {
        return this.cmsStructureConfigService.mergePageStructure(pageContext.id, pageStructure);
    }
}
CmsPageConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CmsPageConnector.ctorParameters = () => [
    { type: CmsPageAdapter },
    { type: CmsStructureConfigService }
];
/** @nocollapse */ CmsPageConnector.ngInjectableDef = ɵɵdefineInjectable({ factory: function CmsPageConnector_Factory() { return new CmsPageConnector(ɵɵinject(CmsPageAdapter), ɵɵinject(CmsStructureConfigService)); }, token: CmsPageConnector, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CMS_PAGE_NORMALIZER = new InjectionToken('CmsPageNormalizer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class CmsComponentAdapter {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CmsComponentConnector {
    /**
     * @param {?} cmsStructureConfigService
     * @param {?} adapter
     * @param {?} config
     */
    constructor(cmsStructureConfigService, adapter, config) {
        this.cmsStructureConfigService = cmsStructureConfigService;
        this.adapter = adapter;
        this.config = config;
    }
    /**
     * @template T
     * @param {?} id
     * @param {?} pageContext
     * @return {?}
     */
    get(id, pageContext) {
        return this.cmsStructureConfigService
            .getComponentFromConfig(id)
            .pipe(switchMap((/**
         * @param {?} configuredComponent
         * @return {?}
         */
        configuredComponent => configuredComponent
            ? of(configuredComponent)
            : this.adapter.load(id, pageContext))));
    }
    /**
     * @param {?} ids
     * @param {?} pageContext
     * @return {?}
     */
    getList(ids, pageContext) {
        return this.cmsStructureConfigService.getComponentsFromConfig(ids).pipe(switchMap((/**
         * @param {?} configuredComponents
         * @return {?}
         */
        configuredComponents => {
            // check if we have some components that are not loaded from configuration
            /** @type {?} */
            const missingIds = configuredComponents.reduce((/**
             * @param {?} acc
             * @param {?} component
             * @param {?} index
             * @return {?}
             */
            (acc, component, index) => {
                if (component === undefined) {
                    acc.push(ids[index]);
                }
                return acc;
            }), []);
            if (missingIds.length > 0) {
                return (this.config.backend.occ.legacy
                    ? this.adapter.findComponentsByIdsLegacy(missingIds, pageContext)
                    : this.adapter.findComponentsByIds(missingIds, pageContext)).pipe(map((/**
                 * @param {?} loadedComponents
                 * @return {?}
                 */
                loadedComponents => [
                    ...configuredComponents.filter(Boolean),
                    ...loadedComponents,
                ])));
            }
            else {
                return of(configuredComponents);
            }
        })));
    }
}
CmsComponentConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CmsComponentConnector.ctorParameters = () => [
    { type: CmsStructureConfigService },
    { type: CmsComponentAdapter },
    { type: OccConfig }
];
/** @nocollapse */ CmsComponentConnector.ngInjectableDef = ɵɵdefineInjectable({ factory: function CmsComponentConnector_Factory() { return new CmsComponentConnector(ɵɵinject(CmsStructureConfigService), ɵɵinject(CmsComponentAdapter), ɵɵinject(OccConfig)); }, token: CmsComponentConnector, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CMS_COMPONENT_NORMALIZER = new InjectionToken('CmsComponentNormalizer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CMS_FEATURE = 'cms';
/** @type {?} */
const NAVIGATION_DETAIL_ENTITY = '[Cms] Navigation Entity';
/** @type {?} */
const COMPONENT_ENTITY = '[Cms[ Component Entity';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_PAGE_DATA = '[Cms] Load Page Data';
/** @type {?} */
const LOAD_PAGE_DATA_FAIL = '[Cms] Load Page Data Fail';
/** @type {?} */
const LOAD_PAGE_DATA_SUCCESS = '[Cms] Load Page Data Success';
/** @type {?} */
const SET_PAGE_FAIL_INDEX = '[Cms] Set Page Fail Index';
class LoadPageData extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(payload.type, payload.id);
        this.payload = payload;
        this.type = LOAD_PAGE_DATA;
    }
}
class LoadPageDataFail extends EntityFailAction {
    /**
     * @param {?} pageContext
     * @param {?} error
     */
    constructor(pageContext, error) {
        super(pageContext.type, pageContext.id, error);
        this.type = LOAD_PAGE_DATA_FAIL;
    }
}
class SetPageFailIndex extends EntityFailAction {
    /**
     * @param {?} pageContext
     * @param {?} payload
     */
    constructor(pageContext, payload) {
        super(pageContext.type, pageContext.id);
        this.payload = payload;
        this.type = SET_PAGE_FAIL_INDEX;
    }
}
class LoadPageDataSuccess extends EntitySuccessAction {
    /**
     * @param {?} pageContext
     * @param {?} payload
     */
    constructor(pageContext, payload) {
        super(pageContext.type, pageContext.id, payload);
        this.type = LOAD_PAGE_DATA_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_COMPONENT = '[Cms] Load Component';
/** @type {?} */
const LOAD_COMPONENT_FAIL = '[Cms] Load Component Fail';
/** @type {?} */
const LOAD_COMPONENT_SUCCESS = '[Cms] Load Component Success';
/** @type {?} */
const GET_COMPONENET_FROM_PAGE = '[Cms] Get Component from Page';
class LoadComponent extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(COMPONENT_ENTITY, payload);
        this.payload = payload;
        this.type = LOAD_COMPONENT;
    }
}
class LoadComponentFail extends EntityFailAction {
    /**
     * @param {?} uid
     * @param {?} payload
     */
    constructor(uid, payload) {
        super(COMPONENT_ENTITY, uid, payload);
        this.payload = payload;
        this.type = LOAD_COMPONENT_FAIL;
    }
}
/**
 * @template T
 */
class LoadComponentSuccess extends EntitySuccessAction {
    /**
     * @param {?} payload
     * @param {?=} uid
     */
    constructor(payload, uid) {
        super(COMPONENT_ENTITY, uid || payload.uid || '');
        this.payload = payload;
        this.type = LOAD_COMPONENT_SUCCESS;
    }
}
/**
 * @template T
 */
class GetComponentFromPage extends EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(COMPONENT_ENTITY, payload.map((/**
         * @param {?} cmp
         * @return {?}
         */
        cmp => cmp.uid)));
        this.payload = payload;
        this.type = GET_COMPONENET_FROM_PAGE;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_NAVIGATION_ITEMS = '[Cms] Load NavigationEntry items';
/** @type {?} */
const LOAD_NAVIGATION_ITEMS_FAIL = '[Cms] Load NavigationEntry items Fail';
/** @type {?} */
const LOAD_NAVIGATION_ITEMS_SUCCESS = '[Cms] Load NavigationEntry items Success';
class LoadNavigationItems extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(NAVIGATION_DETAIL_ENTITY, payload.nodeId);
        this.payload = payload;
        this.type = LOAD_NAVIGATION_ITEMS;
    }
}
class LoadNavigationItemsFail extends EntityFailAction {
    /**
     * @param {?} nodeId
     * @param {?} payload
     */
    constructor(nodeId, payload) {
        super(NAVIGATION_DETAIL_ENTITY, nodeId, payload);
        this.payload = payload;
        this.type = LOAD_NAVIGATION_ITEMS_FAIL;
    }
}
class LoadNavigationItemsSuccess extends EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(NAVIGATION_DETAIL_ENTITY, payload.nodeId);
        this.payload = payload;
        this.type = LOAD_NAVIGATION_ITEMS_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getCmsState = createFeatureSelector(CMS_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getPageEntitiesSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.pageData.entities);
/** @type {?} */
const getIndexByType = (/**
 * @param {?} index
 * @param {?} type
 * @return {?}
 */
(index, type) => {
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
});
/** @type {?} */
const getPageComponentTypesSelector = (/**
 * @param {?} page
 * @return {?}
 */
(page) => {
    /** @type {?} */
    const componentTypes = new Set();
    if (page && page.slots) {
        for (const slot of Object.keys(page.slots)) {
            for (const component of page.slots[slot].components || []) {
                componentTypes.add(component.flexType);
            }
        }
    }
    return Array.from(componentTypes);
});
const ɵ0$9 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.page;
/** @type {?} */
const getPageState = createSelector(getCmsState, (ɵ0$9));
const ɵ1$6 = /**
 * @param {?} page
 * @return {?}
 */
(page) => page.index;
/** @type {?} */
const getPageStateIndex = createSelector(getPageState, (ɵ1$6));
/** @type {?} */
const getIndex = (/**
 * @param {?} pageContext
 * @return {?}
 */
(pageContext) => createSelector(getPageStateIndex, (/**
 * @param {?} index
 * @return {?}
 */
(index) => getIndexByType(index, pageContext.type))));
/** @type {?} */
const getIndexEntity = (/**
 * @param {?} pageContext
 * @return {?}
 */
(pageContext) => createSelector(getIndex(pageContext), (/**
 * @param {?} indexState
 * @return {?}
 */
indexState => entityStateSelector(indexState, pageContext.id))));
/** @type {?} */
const getIndexValue = (/**
 * @param {?} pageContext
 * @return {?}
 */
(pageContext) => createSelector(getIndexEntity(pageContext), (/**
 * @param {?} entity
 * @return {?}
 */
entity => loaderValueSelector(entity))));
/** @type {?} */
const getPageEntities = createSelector(getPageState, getPageEntitiesSelector);
/** @type {?} */
const getPageData = (/**
 * @param {?} pageContext
 * @return {?}
 */
(pageContext) => createSelector(getPageEntities, getIndexValue(pageContext), (/**
 * @param {?} entities
 * @param {?} indexValue
 * @return {?}
 */
(entities, indexValue) => entities[indexValue])));
/** @type {?} */
const getPageComponentTypes = (/**
 * @param {?} pageContext
 * @return {?}
 */
(pageContext) => createSelector(getPageData(pageContext), (/**
 * @param {?} pageData
 * @return {?}
 */
pageData => getPageComponentTypesSelector(pageData))));
/** @type {?} */
const currentSlotSelectorFactory = (/**
 * @param {?} pageContext
 * @param {?} position
 * @return {?}
 */
(pageContext, position) => {
    return createSelector(getPageData(pageContext), (/**
     * @param {?} entity
     * @return {?}
     */
    entity => {
        if (entity) {
            return entity.slots[position] || { components: [] };
        }
    }));
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getComponentEntitiesSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => Object.keys(state.entities).reduce((/**
 * @param {?} acc
 * @param {?} cur
 * @return {?}
 */
(acc, cur) => {
    acc[cur] = state.entities[cur].value;
    return acc;
}), {}));
const ɵ0$a = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.component;
/** @type {?} */
const getComponentState = createSelector(getCmsState, (ɵ0$a));
/** @type {?} */
const getComponentEntities = createSelector(getComponentState, getComponentEntitiesSelector);
/** @type {?} */
const componentStateSelectorFactory = (/**
 * @param {?} uid
 * @return {?}
 */
(uid) => {
    return createSelector(getComponentState, (/**
     * @param {?} entities
     * @return {?}
     */
    entities => {
        // the whole component entities are emtpy
        if (Object.keys(entities.entities).length === 0) {
            return undefined;
        }
        else {
            return entityStateSelector(entities, uid);
        }
    }));
});
/** @type {?} */
const componentSelectorFactory = (/**
 * @param {?} uid
 * @return {?}
 */
(uid) => {
    return createSelector(componentStateSelectorFactory(uid), (/**
     * @param {?} state
     * @return {?}
     */
    state => {
        if (state) {
            return loaderValueSelector(state);
        }
        else {
            return undefined;
        }
    }));
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$b = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.navigation;
/** @type {?} */
const getNavigationEntryItemState = createSelector(getCmsState, (ɵ0$b));
/** @type {?} */
const getSelectedNavigationEntryItemState = (/**
 * @param {?} nodeId
 * @return {?}
 */
(nodeId) => {
    return createSelector(getNavigationEntryItemState, (/**
     * @param {?} nodes
     * @return {?}
     */
    nodes => entityStateSelector(nodes, nodeId)));
});
/** @type {?} */
const itemsSelectorFactory = (/**
 * @param {?} nodeId
 * @return {?}
 */
(nodeId) => {
    return createSelector(getSelectedNavigationEntryItemState(nodeId), (/**
     * @param {?} itemState
     * @return {?}
     */
    itemState => loaderValueSelector(itemState)));
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$9 = undefined;
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$9(state = initialState$9, action) {
    switch (action.type) {
        case LOAD_NAVIGATION_ITEMS_SUCCESS: {
            if (action.payload.components) {
                /** @type {?} */
                const components = action.payload.components;
                /** @type {?} */
                const newItem = components.reduce((/**
                 * @param {?} compItems
                 * @param {?} component
                 * @return {?}
                 */
                (compItems, component) => {
                    return Object.assign({}, compItems, { [`${component.uid}_AbstractCMSComponent`]: component });
                }), Object.assign({}));
                return Object.assign({}, state, newItem);
            }
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$a = { entities: {} };
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$a(state = initialState$a, action) {
    switch (action.type) {
        case LOAD_PAGE_DATA_SUCCESS: {
            /** @type {?} */
            const page = action.payload;
            return Object.assign({}, state, { entities: Object.assign({}, state.entities, { [page.pageId]: page }) });
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$b = undefined;
/**
 * @param {?} entityType
 * @return {?}
 */
function reducer$b(entityType) {
    return (/**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    (state = initialState$b, action) => {
        if (action.meta && action.meta.entityType === entityType) {
            switch (action.type) {
                case LOAD_PAGE_DATA_SUCCESS: {
                    return action.payload.pageId;
                }
                case LOAD_PAGE_DATA_FAIL: {
                    return initialState$b;
                }
                case SET_PAGE_FAIL_INDEX: {
                    return action.payload;
                }
            }
        }
        return state;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$5() {
    return {
        page: combineReducers({
            pageData: reducer$a,
            index: combineReducers({
                content: entityLoaderReducer(PageType.CONTENT_PAGE, reducer$b(PageType.CONTENT_PAGE)),
                product: entityLoaderReducer(PageType.PRODUCT_PAGE, reducer$b(PageType.PRODUCT_PAGE)),
                category: entityLoaderReducer(PageType.CATEGORY_PAGE, reducer$b(PageType.CATEGORY_PAGE)),
                catalog: entityLoaderReducer(PageType.CATALOG_PAGE, reducer$b(PageType.CATALOG_PAGE)),
            }),
        }),
        component: entityLoaderReducer(COMPONENT_ENTITY),
        navigation: entityLoaderReducer(NAVIGATION_DETAIL_ENTITY, reducer$9),
    };
}
/** @type {?} */
const reducerToken$5 = new InjectionToken('CmsReducers');
/** @type {?} */
const reducerProvider$5 = {
    provide: reducerToken$5,
    useFactory: getReducers$5,
};
/**
 * @param {?} reducer
 * @return {?}
 */
function clearCmsState(reducer) {
    return (/**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function (state, action) {
        if (action.type === LANGUAGE_CHANGE ||
            action.type === LOGOUT ||
            action.type === LOGIN) {
            state = undefined;
        }
        return reducer(state, action);
    });
}
/** @type {?} */
const metaReducers$2 = [clearCmsState];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UrlMatcherFactoryService {
    /**
     * @return {?}
     */
    getFalsyUrlMatcher() {
        return (/**
         * @return {?}
         */
        function falsyUrlMatcher() {
            return null;
        });
    }
    /**
     * @param {?} paths
     * @return {?}
     */
    getMultiplePathsUrlMatcher(paths) {
        /** @type {?} */
        const self = this;
        /** @type {?} */
        const matcher = (/**
         * @param {?} segments
         * @param {?} segmentGroup
         * @param {?} route
         * @return {?}
         */
        function multiplePathsUrlMatcher(segments, segmentGroup, route) {
            for (let i = 0; i < paths.length; i++) {
                /** @type {?} */
                const result = self.getPathUrlMatcher(paths[i])(segments, segmentGroup, route);
                if (result) {
                    return result;
                }
            }
            return null;
        });
        matcher.paths = paths; // property added for easier debugging of routes
        return matcher;
    }
    // Similar to Angular's defaultUrlMatcher. The difference is that `path` comes from function's argument, not from `route.path`
    /**
     * @private
     * @param {?=} path
     * @return {?}
     */
    getPathUrlMatcher(path = '') {
        return (/**
         * @param {?} segments
         * @param {?} segmentGroup
         * @param {?} route
         * @return {?}
         */
        (segments, segmentGroup, route) => {
            /** @type {?} */
            const parts = path.split('/');
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
            const posParams = {};
            // Check each config part against the actual URL
            for (let index = 0; index < parts.length; index++) {
                /** @type {?} */
                const part = parts[index];
                /** @type {?} */
                const segment = segments[index];
                /** @type {?} */
                const isParameter = part.startsWith(':');
                if (isParameter) {
                    posParams[part.substring(1)] = segment;
                }
                else if (part !== segment.path) {
                    // The actual URL part does not match the config, no match
                    return null;
                }
            }
            return { consumed: segments.slice(0, parts.length), posParams };
        });
    }
}
UrlMatcherFactoryService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ UrlMatcherFactoryService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UrlMatcherFactoryService_Factory() { return new UrlMatcherFactoryService(); }, token: UrlMatcherFactoryService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfigurableRoutesService {
    /**
     * @param {?} config
     * @param {?} injector
     * @param {?} routingConfigService
     * @param {?} urlMatcherFactory
     */
    constructor(config, injector, routingConfigService, urlMatcherFactory) {
        this.config = config;
        this.injector = injector;
        this.routingConfigService = routingConfigService;
        this.urlMatcherFactory = urlMatcherFactory;
        this.initCalled = false; // guard not to call init() more than once
    }
    // guard not to call init() more than once
    /**
     * Configures all existing Routes in the Router
     * @return {?}
     */
    init() {
        if (!this.initCalled) {
            this.initCalled = true;
            this.configureRouter();
        }
    }
    /**
     * @private
     * @return {?}
     */
    configureRouter() {
        // Router could not be injected in constructor due to cyclic dependency with APP_INITIALIZER:
        /** @type {?} */
        const router = this.injector.get(Router);
        /** @type {?} */
        const configuredRoutes = this.configureRoutes(router.config);
        router.resetConfig(configuredRoutes);
    }
    /**
     * @private
     * @param {?} routes
     * @return {?}
     */
    configureRoutes(routes) {
        /** @type {?} */
        const result = [];
        routes.forEach((/**
         * @param {?} route
         * @return {?}
         */
        route => {
            /** @type {?} */
            const configuredRoute = this.configureRoute(route);
            if (route.children && route.children.length) {
                configuredRoute.children = this.configureRoutes(route.children);
            }
            result.push(configuredRoute);
        }));
        return result;
    }
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    configureRoute(route) {
        if (this.getRouteName(route)) {
            /** @type {?} */
            const paths = this.getConfiguredPaths(route);
            switch (paths.length) {
                case 0:
                    delete route.path;
                    return Object.assign({}, route, { matcher: this.urlMatcherFactory.getFalsyUrlMatcher() });
                case 1:
                    delete route.matcher;
                    return Object.assign({}, route, { path: paths[0] });
                default:
                    delete route.path;
                    return Object.assign({}, route, { matcher: this.urlMatcherFactory.getMultiplePathsUrlMatcher(paths) });
            }
        }
        return route; // if route doesn't have a name, just pass the original route
    }
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    getRouteName(route) {
        return route.data && route.data.cxRoute;
    }
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    getConfiguredPaths(route) {
        /** @type {?} */
        const routeName = this.getRouteName(route);
        /** @type {?} */
        const routeConfig = this.routingConfigService.getRouteConfig(routeName);
        if (routeConfig === undefined) {
            this.warn(`Could not configure the named route '${routeName}'`, route, `due to undefined key '${routeName}' in the routes config`);
            return [];
        }
        if (routeConfig && routeConfig.paths === undefined) {
            this.warn(`Could not configure the named route '${routeName}'`, route, `due to undefined 'paths' for the named route '${routeName}' in the routes config`);
            return [];
        }
        // routeConfig or routeConfig.paths can be null - which means switching off the route
        return (routeConfig && routeConfig.paths) || [];
    }
    /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    warn(...args) {
        if (!this.config.production) {
            console.warn(...args);
        }
    }
}
ConfigurableRoutesService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ConfigurableRoutesService.ctorParameters = () => [
    { type: ServerConfig },
    { type: Injector },
    { type: RoutingConfigService },
    { type: UrlMatcherFactoryService }
];
/** @nocollapse */ ConfigurableRoutesService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConfigurableRoutesService_Factory() { return new ConfigurableRoutesService(ɵɵinject(ServerConfig), ɵɵinject(INJECTOR), ɵɵinject(RoutingConfigService), ɵɵinject(UrlMatcherFactoryService)); }, token: ConfigurableRoutesService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} service
 * @return {?}
 */
function initConfigurableRoutes(service) {
    /** @type {?} */
    const result = (/**
     * @return {?}
     */
    () => service.init());
    return result;
}
class ConfigurableRoutesModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RoutingModule {
}
RoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ConfigurableRoutesModule,
                    StoreModule.forFeature(ROUTING_FEATURE, reducerToken),
                    EffectsModule.forFeature(effects),
                    StoreRouterConnectingModule.forRoot({
                        routerState: 1 /* Minimal */,
                        stateKey: ROUTING_FEATURE,
                    }),
                ],
                providers: [
                    reducerProvider,
                    {
                        provide: RouterStateSerializer,
                        useClass: CustomSerializer,
                    },
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageContext {
    /**
     * @param {?} id
     * @param {?=} type
     */
    constructor(id, type) {
        this.id = id;
        this.type = type;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UrlPipe {
    /**
     * @param {?} urlService
     */
    constructor(urlService) {
        this.urlService = urlService;
    }
    /**
     * @param {?} commands
     * @return {?}
     */
    transform(commands) {
        return this.urlService.transform(commands);
    }
}
UrlPipe.decorators = [
    { type: Pipe, args: [{
                name: 'cxUrl',
            },] }
];
/** @nocollapse */
UrlPipe.ctorParameters = () => [
    { type: SemanticPathService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UrlModule {
}
UrlModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [UrlPipe],
                exports: [UrlPipe],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageEffects {
    /**
     * @param {?} actions$
     * @param {?} cmsPageConnector
     * @param {?} routingService
     */
    constructor(actions$, cmsPageConnector, routingService) {
        this.actions$ = actions$;
        this.cmsPageConnector = cmsPageConnector;
        this.routingService = routingService;
        this.refreshPage$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE, LOGOUT, LOGIN), switchMap((/**
         * @param {?} _
         * @return {?}
         */
        _ => this.routingService.getRouterState().pipe(take(1), filter((/**
         * @param {?} routerState
         * @return {?}
         */
        routerState => routerState &&
            routerState.state &&
            routerState.state.cmsRequired &&
            !routerState.nextState)), map((/**
         * @param {?} routerState
         * @return {?}
         */
        routerState => routerState.state.context)), mergeMap((/**
         * @param {?} context
         * @return {?}
         */
        context => of(new LoadPageData(context))))))));
        this.loadPageData$ = this.actions$.pipe(ofType(LOAD_PAGE_DATA), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), groupBy((/**
         * @param {?} pageContext
         * @return {?}
         */
        pageContext => pageContext.type + pageContext.id)), mergeMap((/**
         * @param {?} group
         * @return {?}
         */
        group => group.pipe(switchMap((/**
         * @param {?} pageContext
         * @return {?}
         */
        pageContext => this.cmsPageConnector.get(pageContext).pipe(mergeMap((/**
         * @param {?} cmsStructure
         * @return {?}
         */
        (cmsStructure) => {
            return [
                new GetComponentFromPage(cmsStructure.components),
                new LoadPageDataSuccess(pageContext, cmsStructure.page),
            ];
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new LoadPageDataFail(pageContext, makeErrorSerializable(error))))))))))));
    }
}
PageEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PageEffects.ctorParameters = () => [
    { type: Actions },
    { type: CmsPageConnector },
    { type: RoutingService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], PageEffects.prototype, "refreshPage$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], PageEffects.prototype, "loadPageData$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ComponentEffects {
    /**
     * @param {?} actions$
     * @param {?} cmsComponentLoader
     * @param {?} routingService
     */
    constructor(actions$, cmsComponentLoader, routingService) {
        this.actions$ = actions$;
        this.cmsComponentLoader = cmsComponentLoader;
        this.routingService = routingService;
        this.loadComponent$ = this.actions$.pipe(ofType(LOAD_COMPONENT), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), groupBy((/**
         * @param {?} uid
         * @return {?}
         */
        uid => uid)), mergeMap((/**
         * @param {?} group
         * @return {?}
         */
        group => group.pipe(switchMap((/**
         * @param {?} uid
         * @return {?}
         */
        uid => this.routingService.getRouterState().pipe(filter((/**
         * @param {?} routerState
         * @return {?}
         */
        routerState => routerState !== undefined)), map((/**
         * @param {?} routerState
         * @return {?}
         */
        routerState => routerState.state.context)), take(1), mergeMap((/**
         * @param {?} pageContext
         * @return {?}
         */
        pageContext => this.cmsComponentLoader.get(uid, pageContext).pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        data => new LoadComponentSuccess(data, uid))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new LoadComponentFail(uid, makeErrorSerializable(error)))))))))))))));
    }
}
ComponentEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ComponentEffects.ctorParameters = () => [
    { type: Actions },
    { type: CmsComponentConnector },
    { type: RoutingService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], ComponentEffects.prototype, "loadComponent$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavigationEntryItemEffects {
    /**
     * @param {?} actions$
     * @param {?} cmsComponentConnector
     * @param {?} routingService
     */
    constructor(actions$, cmsComponentConnector, routingService) {
        this.actions$ = actions$;
        this.cmsComponentConnector = cmsComponentConnector;
        this.routingService = routingService;
        this.loadNavigationItems$ = this.actions$.pipe(ofType(LOAD_NAVIGATION_ITEMS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), map((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return {
                ids: this.getIdListByItemType(payload.items),
                nodeId: payload.nodeId,
            };
        })), mergeMap((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (data.ids.componentIds.length > 0) {
                return this.routingService.getRouterState().pipe(filter((/**
                 * @param {?} routerState
                 * @return {?}
                 */
                routerState => routerState !== undefined)), map((/**
                 * @param {?} routerState
                 * @return {?}
                 */
                routerState => routerState.state.context)), take(1), mergeMap((/**
                 * @param {?} pageContext
                 * @return {?}
                 */
                pageContext => 
                // download all items in one request
                this.cmsComponentConnector
                    .getList(data.ids.componentIds, pageContext)
                    .pipe(map((/**
                 * @param {?} components
                 * @return {?}
                 */
                components => new LoadNavigationItemsSuccess({
                    nodeId: data.nodeId,
                    components: components,
                }))), catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                error => of(new LoadNavigationItemsFail(data.nodeId, makeErrorSerializable(error)))))))));
            }
            else if (data.ids.pageIds.length > 0) ;
            else if (data.ids.mediaIds.length > 0) ;
            else {
                return of(new LoadNavigationItemsFail(data.nodeId, 'navigation nodes are empty'));
            }
        })));
    }
    // We only consider 3 item types: cms page, cms component, and media.
    /**
     * @param {?} itemList
     * @return {?}
     */
    getIdListByItemType(itemList) {
        /** @type {?} */
        const pageIds = [];
        /** @type {?} */
        const componentIds = [];
        /** @type {?} */
        const mediaIds = [];
        itemList.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (item.superType === 'AbstractCMSComponent') {
                componentIds.push(item.id);
            }
            else if (item.superType === 'AbstractPage') {
                pageIds.push(item.id);
            }
            else if (item.superType === 'AbstractMedia') {
                mediaIds.push(item.id);
            }
        }));
        return { pageIds: pageIds, componentIds: componentIds, mediaIds: mediaIds };
    }
}
NavigationEntryItemEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NavigationEntryItemEffects.ctorParameters = () => [
    { type: Actions },
    { type: CmsComponentConnector },
    { type: RoutingService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], NavigationEntryItemEffects.prototype, "loadNavigationItems$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const effects$5 = [
    PageEffects,
    ComponentEffects,
    NavigationEntryItemEffects,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CmsService {
    /**
     * @param {?} store
     * @param {?} routingService
     */
    constructor(store, routingService) {
        this.store = store;
        this.routingService = routingService;
        this._launchInSmartEdit = false;
        this.components = {};
    }
    /**
     * Set _launchInSmartEdit value
     * @param {?} value
     * @return {?}
     */
    set launchInSmartEdit(value) {
        this._launchInSmartEdit = value;
    }
    /**
     * Whether the app launched in smart edit
     * @return {?}
     */
    isLaunchInSmartEdit() {
        return this._launchInSmartEdit;
    }
    /**
     * Get current CMS page data
     * @return {?}
     */
    getCurrentPage() {
        return this.routingService
            .getPageContext()
            .pipe(switchMap((/**
         * @param {?} pageContext
         * @return {?}
         */
        pageContext => this.store.select(getPageData(pageContext)))));
    }
    /**
     * Get CMS component data by uid
     * @template T
     * @param {?} uid : CMS componet uid
     * @return {?}
     */
    getComponentData(uid) {
        if (!this.components[uid]) {
            this.components[uid] = combineLatest([
                this.routingService.isNavigating(),
                this.store.pipe(select(componentStateSelectorFactory(uid))),
            ]).pipe(tap((/**
             * @param {?} __0
             * @return {?}
             */
            ([isNavigating, componentState]) => {
                // componentState is undefined when the whole components entities are empty.
                // In this case, we don't load component one by one, but extract component data from cms page
                if (componentState !== undefined) {
                    /** @type {?} */
                    const attemptedLoad = componentState.loading ||
                        componentState.success ||
                        componentState.error;
                    if (!attemptedLoad && !isNavigating) {
                        this.store.dispatch(new LoadComponent(uid));
                    }
                }
            })), pluck(1), filter((/**
             * @param {?} componentState
             * @return {?}
             */
            componentState => componentState && componentState.success)), pluck('value'), shareReplay({ bufferSize: 1, refCount: true }));
        }
        return (/** @type {?} */ (this.components[uid]));
    }
    /**
     * Given the position, get the content slot data
     * @param {?} position : content slot position
     * @return {?}
     */
    getContentSlot(position) {
        return this.routingService.getPageContext().pipe(switchMap((/**
         * @param {?} pageContext
         * @return {?}
         */
        pageContext => this.store.pipe(select(currentSlotSelectorFactory(pageContext, position)), filter(Boolean)))));
    }
    /**
     * Given navigation node uid, get items (with id and type) inside the navigation entries
     * @param {?} navigationNodeUid : uid of the navigation node
     * @return {?}
     */
    getNavigationEntryItems(navigationNodeUid) {
        return this.store.pipe(select(itemsSelectorFactory(navigationNodeUid)));
    }
    /**
     * Load navigation items data
     * @param {?} rootUid : the uid of the root navigation node
     * @param {?} itemList : list of items (with id and type)
     * @return {?}
     */
    loadNavigationItems(rootUid, itemList) {
        this.store.dispatch(new LoadNavigationItems({
            nodeId: rootUid,
            items: itemList,
        }));
    }
    /**
     * Refresh the content of the latest cms page
     * @return {?}
     */
    refreshLatestPage() {
        this.routingService
            .getPageContext()
            .pipe(take(1))
            .subscribe((/**
         * @param {?} pageContext
         * @return {?}
         */
        pageContext => this.store.dispatch(new LoadPageData(pageContext))));
    }
    /**
     * Refresh the cms page content by page Id
     * @param {?} pageId
     * @return {?}
     */
    refreshPageById(pageId) {
        /** @type {?} */
        const pageContext = { id: pageId };
        this.store.dispatch(new LoadPageData(pageContext));
    }
    /**
     * Refresh cms component's content
     * @param {?} uid : component uid
     * @return {?}
     */
    refreshComponent(uid) {
        this.store.dispatch(new LoadComponent(uid));
    }
    /**
     * Given pageContext, return the CMS page data
     * @param {?} pageContext
     * @return {?}
     */
    getPageState(pageContext) {
        return this.store.pipe(select(getPageData(pageContext)));
    }
    /**
     * Given pageContext, return the CMS page data
     * @param {?} pageContext
     * @return {?}
     */
    getPageComponentTypes(pageContext) {
        return this.store.pipe(select(getPageComponentTypes(pageContext)));
    }
    /**
     * Given pageContext, return whether the CMS page data exists or not
     * @param {?} pageContext
     * @param {?=} forceReload
     * @return {?}
     */
    hasPage(pageContext, forceReload = false) {
        return this.store.pipe(select(getIndexEntity(pageContext)), tap((/**
         * @param {?} entity
         * @return {?}
         */
        (entity) => {
            /** @type {?} */
            const attemptedLoad = entity.loading || entity.success || entity.error;
            /** @type {?} */
            const shouldReload = forceReload && !entity.loading;
            if (!attemptedLoad || shouldReload) {
                this.store.dispatch(new LoadPageData(pageContext));
                forceReload = false;
            }
        })), filter((/**
         * @param {?} entity
         * @return {?}
         */
        entity => {
            if (!entity.hasOwnProperty('value')) {
                // if we have incomplete state from srr failed load transfer state,
                // we should wait for reload and actual value
                return false;
            }
            return entity.success || (entity.error && !entity.loading);
        })), pluck('success'), catchError((/**
         * @return {?}
         */
        () => of(false))));
    }
    /**
     * @param {?} pageContext
     * @return {?}
     */
    getPageIndex(pageContext) {
        return this.store.pipe(select(getIndexValue(pageContext)));
    }
    /**
     * @param {?} pageContext
     * @param {?} value
     * @return {?}
     */
    setPageFailIndex(pageContext, value) {
        this.store.dispatch(new SetPageFailIndex(pageContext, value));
    }
}
CmsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CmsService.ctorParameters = () => [
    { type: Store },
    { type: RoutingService }
];
/** @nocollapse */ CmsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CmsService_Factory() { return new CmsService(ɵɵinject(Store), ɵɵinject(RoutingService)); }, token: CmsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class PageMetaResolver {
    /**
     * @param {?} page
     * @return {?}
     */
    getScore(page) {
        /** @type {?} */
        let score = 0;
        if (this.pageType) {
            score += page.type === this.pageType ? 1 : -1;
        }
        if (this.pageTemplate) {
            score += page.template === this.pageTemplate ? 1 : -1;
        }
        return score;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageMetaService {
    /**
     * @param {?} resolvers
     * @param {?} cms
     */
    constructor(resolvers, cms) {
        this.resolvers = resolvers;
        this.cms = cms;
    }
    /**
     * @return {?}
     */
    getMeta() {
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap((/**
         * @param {?} page
         * @return {?}
         */
        (page) => {
            /** @type {?} */
            const metaResolver = this.getMetaResolver(page);
            if (metaResolver) {
                return metaResolver.resolve();
            }
            else {
                // we do not have a page resolver
                return of(null);
            }
        })));
    }
    /**
     * return the title resolver with the best match
     * title resovers can by default match on PageType and page template
     * but custom match comparisors can be implemented.
     * @protected
     * @param {?} page
     * @return {?}
     */
    getMetaResolver(page) {
        /** @type {?} */
        const matchingResolvers = this.resolvers.filter((/**
         * @param {?} resolver
         * @return {?}
         */
        resolver => resolver.getScore(page) > 0));
        matchingResolvers.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            return b.getScore(page) - a.getScore(page);
        }));
        return matchingResolvers[0];
    }
}
PageMetaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
PageMetaService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [PageMetaResolver,] }] },
    { type: CmsService }
];
/** @nocollapse */ PageMetaService.ngInjectableDef = ɵɵdefineInjectable({ factory: function PageMetaService_Factory() { return new PageMetaService(ɵɵinject(PageMetaResolver), ɵɵinject(CmsService)); }, token: PageMetaService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class TranslationService {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentPageMetaResolver extends PageMetaResolver {
    /**
     * @param {?} cms
     * @param {?} translation
     */
    constructor(cms, translation) {
        super();
        this.cms = cms;
        this.translation = translation;
        this.pageType = PageType.CONTENT_PAGE;
    }
    /**
     * @return {?}
     */
    resolve() {
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap((/**
         * @param {?} page
         * @return {?}
         */
        page => combineLatest([
            this.resolveTitle(page),
            this.resolveBreadcrumbLabel().pipe(switchMap((/**
             * @param {?} label
             * @return {?}
             */
            label => this.resolveBreadcrumbs(page, label)))),
        ]))), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([title, breadcrumbs]) => ({ title, breadcrumbs }))));
    }
    /**
     * @param {?} page
     * @return {?}
     */
    resolveTitle(page) {
        return of(page.title);
    }
    /**
     * @return {?}
     */
    resolveBreadcrumbLabel() {
        return this.translation.translate('common.home');
    }
    /**
     * @param {?} _page
     * @param {?} breadcrumbLabel
     * @return {?}
     */
    resolveBreadcrumbs(_page, breadcrumbLabel) {
        // as long as we do not have CMSX-8689 in place
        // we need specific resolvers for nested pages
        return of([{ label: breadcrumbLabel, link: '/' }]);
    }
}
ContentPageMetaResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ContentPageMetaResolver.ctorParameters = () => [
    { type: CmsService },
    { type: TranslationService }
];
/** @nocollapse */ ContentPageMetaResolver.ngInjectableDef = ɵɵdefineInjectable({ factory: function ContentPageMetaResolver_Factory() { return new ContentPageMetaResolver(ɵɵinject(CmsService), ɵɵinject(TranslationService)); }, token: ContentPageMetaResolver, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CmsPageTitleModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function cmsStoreConfigFactory() {
    // if we want to reuse CMS_FEATURE const in config, we have to use factory instead of plain object
    /** @type {?} */
    const config = {
        state: {
            ssrTransfer: {
                keys: { [CMS_FEATURE]: StateTransferType.TRANSFER_STATE },
            },
        },
    };
    return config;
}
class CmsStoreModule {
}
CmsStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    StateModule,
                    StoreModule.forFeature(CMS_FEATURE, reducerToken$5, { metaReducers: metaReducers$2 }),
                    EffectsModule.forFeature(effects$5),
                    ConfigModule.withConfigFactory(cmsStoreConfigFactory),
                ],
                providers: [reducerProvider$5],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CmsModule {
}
CmsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CmsStoreModule,
                    ConfigModule.withConfig(defaultCmsModuleConfig),
                    CmsPageTitleModule,
                ],
                providers: [
                    CmsService,
                    { provide: CmsConfig, useExisting: Config },
                    { provide: CmsStructureConfig, useExisting: Config },
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DynamicAttributeService {
    /**
     * Add dynamic attributes to DOM. These attributes are extracted from the properties of cms items received from backend.
     * There can by many different groups of properties, one of them is smaredit. But EC allows addons to create different groups.
     * For example, personalization may add 'script' group etc.
     * @param {?} properties
     * @param {?} element
     * @param {?} renderer
     * @return {?}
     */
    addDynamicAttributes(properties, element, renderer) {
        if (properties) {
            // check each group of properties, e.g. smartedit
            Object.keys(properties).forEach((/**
             * @param {?} group
             * @return {?}
             */
            group => {
                /** @type {?} */
                const name = 'data-' + group + '-';
                /** @type {?} */
                const groupProps = properties[group];
                // check each property in the group
                Object.keys(groupProps).forEach((/**
                 * @param {?} propName
                 * @return {?}
                 */
                propName => {
                    /** @type {?} */
                    const propValue = groupProps[propName];
                    if (propName === 'classes') {
                        /** @type {?} */
                        const classes = propValue.split(' ');
                        classes.forEach((/**
                         * @param {?} classItem
                         * @return {?}
                         */
                        classItem => {
                            element.classList.add(classItem);
                        }));
                    }
                    else {
                        renderer.setAttribute(element, name +
                            propName
                                .split(/(?=[A-Z])/)
                                .join('-')
                                .toLowerCase(), propValue);
                    }
                }));
            }));
        }
    }
}
DynamicAttributeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ DynamicAttributeService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DynamicAttributeService_Factory() { return new DynamicAttributeService(); }, token: DynamicAttributeService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartPageMetaResolver extends PageMetaResolver {
    /**
     * @param {?} cms
     */
    constructor(cms) {
        super();
        this.cms = cms;
        this.pageType = PageType.CONTENT_PAGE;
        this.pageTemplate = 'CartPageTemplate';
    }
    /**
     * @return {?}
     */
    resolve() {
        return this.cms.getCurrentPage().pipe(filter((/**
         * @param {?} page
         * @return {?}
         */
        page => page !== undefined)), switchMap((/**
         * @param {?} page
         * @return {?}
         */
        page => combineLatest([this.resolveTitle(page), this.resolveRobots()]))), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([title, robots]) => ({ title, robots }))));
    }
    /**
     * @param {?} page
     * @return {?}
     */
    resolveTitle(page) {
        return of(page.title);
    }
    /**
     * @return {?}
     */
    resolveRobots() {
        return of([PageRobotsMeta.NOFOLLOW, PageRobotsMeta.NOINDEX]);
    }
}
CartPageMetaResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CartPageMetaResolver.ctorParameters = () => [
    { type: CmsService }
];
/** @nocollapse */ CartPageMetaResolver.ngInjectableDef = ɵɵdefineInjectable({ factory: function CartPageMetaResolver_Factory() { return new CartPageMetaResolver(ɵɵinject(CmsService)); }, token: CartPageMetaResolver, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutPageMetaResolver extends PageMetaResolver {
    /**
     * @param {?} cartService
     * @param {?} translation
     */
    constructor(cartService, translation) {
        super();
        this.cartService = cartService;
        this.translation = translation;
        this.pageType = PageType.CONTENT_PAGE;
        this.pageTemplate = 'MultiStepCheckoutSummaryPageTemplate';
    }
    /**
     * @return {?}
     */
    resolve() {
        return this.cartService.getActive().pipe(switchMap((/**
         * @param {?} cart
         * @return {?}
         */
        cart => combineLatest([this.resolveTitle(cart), this.resolveRobots()]))), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([title, robots]) => ({ title, robots }))));
    }
    /**
     * @param {?} cart
     * @return {?}
     */
    resolveTitle(cart) {
        return this.translation.translate('pageMetaResolver.checkout.title', {
            count: cart.totalItems,
        });
    }
    /**
     * @return {?}
     */
    resolveRobots() {
        return of([PageRobotsMeta.NOFOLLOW, PageRobotsMeta.NOINDEX]);
    }
}
CheckoutPageMetaResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CheckoutPageMetaResolver.ctorParameters = () => [
    { type: CartService },
    { type: TranslationService }
];
/** @nocollapse */ CheckoutPageMetaResolver.ngInjectableDef = ɵɵdefineInjectable({ factory: function CheckoutPageMetaResolver_Factory() { return new CheckoutPageMetaResolver(ɵɵinject(CartService), ɵɵinject(TranslationService)); }, token: CheckoutPageMetaResolver, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutStoreModule {
}
CheckoutStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    StoreModule.forFeature(CHECKOUT_FEATURE, reducerToken$4),
                    EffectsModule.forFeature(effects$4),
                ],
                providers: [reducerProvider$4],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CxApiModule {
}
CxApiModule.decorators = [
    { type: NgModule, args: [{},] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class ProductAdapter {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} productCode
     * @return {?}
     */
    get(productCode) {
        return this.adapter.load(productCode);
    }
}
ProductConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ProductConnector.ctorParameters = () => [
    { type: ProductAdapter }
];
/** @nocollapse */ ProductConnector.ngInjectableDef = ɵɵdefineInjectable({ factory: function ProductConnector_Factory() { return new ProductConnector(ɵɵinject(ProductAdapter)); }, token: ProductConnector, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PRODUCT_NORMALIZER = new InjectionToken('ProductNormalizer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PRODUCT_REFERENCES_NORMALIZER = new InjectionToken('ProductReferencesListNormalizer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class ProductReferencesAdapter {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductReferencesConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} productCode
     * @param {?=} referenceType
     * @param {?=} pageSize
     * @return {?}
     */
    get(productCode, referenceType, pageSize) {
        return this.adapter.load(productCode, referenceType, pageSize);
    }
}
ProductReferencesConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ProductReferencesConnector.ctorParameters = () => [
    { type: ProductReferencesAdapter }
];
/** @nocollapse */ ProductReferencesConnector.ngInjectableDef = ɵɵdefineInjectable({ factory: function ProductReferencesConnector_Factory() { return new ProductReferencesConnector(ɵɵinject(ProductReferencesAdapter)); }, token: ProductReferencesConnector, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class ProductReviewsAdapter {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductReviewsConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} productCode
     * @param {?=} maxCount
     * @return {?}
     */
    get(productCode, maxCount) {
        return this.adapter.load(productCode, maxCount);
    }
    /**
     * @param {?} productCode
     * @param {?} review
     * @return {?}
     */
    add(productCode, review) {
        return this.adapter.post(productCode, review);
    }
}
ProductReviewsConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ProductReviewsConnector.ctorParameters = () => [
    { type: ProductReviewsAdapter }
];
/** @nocollapse */ ProductReviewsConnector.ngInjectableDef = ɵɵdefineInjectable({ factory: function ProductReviewsConnector_Factory() { return new ProductReviewsConnector(ɵɵinject(ProductReviewsAdapter)); }, token: ProductReviewsConnector, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PRODUCT_REVIEW_NORMALIZER = new InjectionToken('ProductReviewNormalizer');
/** @type {?} */
const PRODUCT_REVIEW_SERIALIZER = new InjectionToken('ProductReviewSerializer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class ProductSearchAdapter {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductSearchConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    search(query, searchConfig) {
        return this.adapter.search(query, searchConfig);
    }
    /**
     * @param {?} term
     * @param {?=} pageSize
     * @return {?}
     */
    getSuggestions(term, pageSize) {
        return this.adapter.loadSuggestions(term, pageSize);
    }
}
ProductSearchConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ProductSearchConnector.ctorParameters = () => [
    { type: ProductSearchAdapter }
];
/** @nocollapse */ ProductSearchConnector.ngInjectableDef = ɵɵdefineInjectable({ factory: function ProductSearchConnector_Factory() { return new ProductSearchConnector(ɵɵinject(ProductSearchAdapter)); }, token: ProductSearchConnector, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PRODUCT_SEARCH_PAGE_NORMALIZER = new InjectionToken('ProductSearchPageNormalizer');
/** @type {?} */
const PRODUCT_SUGGESTION_NORMALIZER = new InjectionToken('ProductSuggestionNormalizer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_PRODUCT_REFERENCES = '[Product] Load Product References Data';
/** @type {?} */
const LOAD_PRODUCT_REFERENCES_FAIL = '[Product] Load Product References Data Fail';
/** @type {?} */
const LOAD_PRODUCT_REFERENCES_SUCCESS = '[Product] Load Product References Data Success';
class LoadProductReferences {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REFERENCES;
    }
}
class LoadProductReferencesFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REFERENCES_FAIL;
    }
}
class LoadProductReferencesSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REFERENCES_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_PRODUCT_REVIEWS = '[Product] Load Product Reviews Data';
/** @type {?} */
const LOAD_PRODUCT_REVIEWS_FAIL = '[Product] Load Product Reviews Data Fail';
/** @type {?} */
const LOAD_PRODUCT_REVIEWS_SUCCESS = '[Product] Load Product Reviews Data Success';
/** @type {?} */
const POST_PRODUCT_REVIEW = '[Product] Post Product Review';
/** @type {?} */
const POST_PRODUCT_REVIEW_FAIL = '[Product] Post Product Review Fail';
/** @type {?} */
const POST_PRODUCT_REVIEW_SUCCESS = '[Product] Post Product Review Success';
class LoadProductReviews {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REVIEWS;
    }
}
class LoadProductReviewsFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REVIEWS_FAIL;
    }
}
class LoadProductReviewsSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REVIEWS_SUCCESS;
    }
}
class PostProductReview {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = POST_PRODUCT_REVIEW;
    }
}
class PostProductReviewFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = POST_PRODUCT_REVIEW_FAIL;
    }
}
class PostProductReviewSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = POST_PRODUCT_REVIEW_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SEARCH_PRODUCTS = '[Product] Search Products';
/** @type {?} */
const SEARCH_PRODUCTS_FAIL = '[Product] Search Products Fail';
/** @type {?} */
const SEARCH_PRODUCTS_SUCCESS = '[Product] Search Products Success';
/** @type {?} */
const GET_PRODUCT_SUGGESTIONS = '[Product] Get Product Suggestions';
/** @type {?} */
const GET_PRODUCT_SUGGESTIONS_SUCCESS = '[Product] Get Product Suggestions Success';
/** @type {?} */
const GET_PRODUCT_SUGGESTIONS_FAIL = '[Product] Get Product Suggestions Fail';
/** @type {?} */
const CLEAR_PRODUCT_SEARCH_RESULT = '[Product] Clear Product Search Result';
class SearchProducts {
    /**
     * @param {?} payload
     * @param {?=} auxiliary
     */
    constructor(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS;
    }
}
class SearchProductsFail {
    /**
     * @param {?} payload
     * @param {?=} auxiliary
     */
    constructor(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS_FAIL;
    }
}
class SearchProductsSuccess {
    /**
     * @param {?} payload
     * @param {?=} auxiliary
     */
    constructor(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS_SUCCESS;
    }
}
class GetProductSuggestions {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS;
    }
}
class GetProductSuggestionsSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS_SUCCESS;
    }
}
class GetProductSuggestionsFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS_FAIL;
    }
}
class ClearProductSearchResult {
    /**
     * @param {?=} payload
     */
    constructor(payload = {
        clearPageResults: false,
        clearSearchboxResults: false,
    }) {
        this.payload = payload;
        this.type = CLEAR_PRODUCT_SEARCH_RESULT;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PRODUCT_FEATURE = 'product';
/** @type {?} */
const PRODUCT_DETAIL_ENTITY = '[Product] Detail Entity';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_PRODUCT = '[Product] Load Product Data';
/** @type {?} */
const LOAD_PRODUCT_FAIL = '[Product] Load Product Data Fail';
/** @type {?} */
const LOAD_PRODUCT_SUCCESS = '[Product] Load Product Data Success';
class LoadProduct extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PRODUCT_DETAIL_ENTITY, payload);
        this.payload = payload;
        this.type = LOAD_PRODUCT;
    }
}
class LoadProductFail extends EntityFailAction {
    /**
     * @param {?} productCode
     * @param {?} payload
     */
    constructor(productCode, payload) {
        super(PRODUCT_DETAIL_ENTITY, productCode, payload);
        this.payload = payload;
        this.type = LOAD_PRODUCT_FAIL;
    }
}
class LoadProductSuccess extends EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PRODUCT_DETAIL_ENTITY, payload.code);
        this.payload = payload;
        this.type = LOAD_PRODUCT_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductReferencesEffects {
    /**
     * @param {?} actions$
     * @param {?} productReferencesConnector
     */
    constructor(actions$, productReferencesConnector) {
        this.actions$ = actions$;
        this.productReferencesConnector = productReferencesConnector;
        this.loadProductReferences$ = this.actions$.pipe(ofType(LOAD_PRODUCT_REFERENCES), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.productReferencesConnector
                .get(payload.productCode, payload.referenceType, payload.pageSize)
                .pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                return new LoadProductReferencesSuccess({
                    productCode: payload.productCode,
                    list: data,
                });
            })), catchError((/**
             * @param {?} _error
             * @return {?}
             */
            _error => of(new LoadProductReferencesFail((/** @type {?} */ ({
                message: payload.productCode,
            })))))));
        })));
    }
}
ProductReferencesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductReferencesEffects.ctorParameters = () => [
    { type: Actions },
    { type: ProductReferencesConnector }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], ProductReferencesEffects.prototype, "loadProductReferences$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductReviewsEffects {
    /**
     * @param {?} actions$
     * @param {?} productReviewsConnector
     */
    constructor(actions$, productReviewsConnector) {
        this.actions$ = actions$;
        this.productReviewsConnector = productReviewsConnector;
        this.loadProductReviews$ = this.actions$.pipe(ofType(LOAD_PRODUCT_REVIEWS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} productCode
         * @return {?}
         */
        productCode => {
            return this.productReviewsConnector.get(productCode).pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                return new LoadProductReviewsSuccess({
                    productCode,
                    list: data,
                });
            })), catchError((/**
             * @param {?} _error
             * @return {?}
             */
            _error => of(new LoadProductReviewsFail((/** @type {?} */ ({
                message: productCode,
            })))))));
        })));
        this.postProductReview = this.actions$.pipe(ofType(POST_PRODUCT_REVIEW), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.productReviewsConnector
                .add(payload.productCode, payload.review)
                .pipe(map((/**
             * @param {?} reviewResponse
             * @return {?}
             */
            reviewResponse => {
                return new PostProductReviewSuccess(reviewResponse);
            })), catchError((/**
             * @param {?} _error
             * @return {?}
             */
            _error => of(new PostProductReviewFail(payload.productCode)))));
        })));
    }
}
ProductReviewsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductReviewsEffects.ctorParameters = () => [
    { type: Actions },
    { type: ProductReviewsConnector }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], ProductReviewsEffects.prototype, "loadProductReviews$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], ProductReviewsEffects.prototype, "postProductReview", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductsSearchEffects {
    /**
     * @param {?} actions$
     * @param {?} productSearchConnector
     */
    constructor(actions$, productSearchConnector) {
        this.actions$ = actions$;
        this.productSearchConnector = productSearchConnector;
        this.searchProducts$ = this.actions$.pipe(ofType(SEARCH_PRODUCTS), groupBy((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.auxiliary)), mergeMap((/**
         * @param {?} group
         * @return {?}
         */
        group => group.pipe(switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            return this.productSearchConnector
                .search(action.payload.queryText, action.payload.searchConfig)
                .pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                return new SearchProductsSuccess(data, action.auxiliary);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new SearchProductsFail(makeErrorSerializable(error), action.auxiliary)))));
        }))))));
        this.getProductSuggestions$ = this.actions$.pipe(ofType(GET_PRODUCT_SUGGESTIONS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.productSearchConnector
                .getSuggestions(payload.term, payload.searchConfig.pageSize)
                .pipe(map((/**
             * @param {?} suggestions
             * @return {?}
             */
            suggestions => {
                if (suggestions === undefined) {
                    return new GetProductSuggestionsSuccess([]);
                }
                return new GetProductSuggestionsSuccess(suggestions);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new GetProductSuggestionsFail(makeErrorSerializable(error))))));
        })));
    }
}
ProductsSearchEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductsSearchEffects.ctorParameters = () => [
    { type: Actions },
    { type: ProductSearchConnector }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], ProductsSearchEffects.prototype, "searchProducts$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], ProductsSearchEffects.prototype, "getProductSuggestions$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductEffects {
    /**
     * @param {?} actions$
     * @param {?} productConnector
     */
    constructor(actions$, productConnector) {
        this.actions$ = actions$;
        this.productConnector = productConnector;
        this.loadProduct$ = this.actions$.pipe(ofType(LOAD_PRODUCT), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), groupBy((/**
         * @param {?} productCode
         * @return {?}
         */
        productCode => productCode)), mergeMap((/**
         * @param {?} group
         * @return {?}
         */
        group => group.pipe(switchMap((/**
         * @param {?} productCode
         * @return {?}
         */
        productCode => {
            return this.productConnector.get(productCode).pipe(map((/**
             * @param {?} product
             * @return {?}
             */
            product => {
                return new LoadProductSuccess(product);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new LoadProductFail(productCode, makeErrorSerializable(error))))));
        }))))));
    }
}
ProductEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductEffects.ctorParameters = () => [
    { type: Actions },
    { type: ProductConnector }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], ProductEffects.prototype, "loadProduct$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const effects$6 = [
    ProductsSearchEffects,
    ProductEffects,
    ProductReviewsEffects,
    ProductReferencesEffects,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$c = {
    productCode: '',
    list: [],
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$c(state = initialState$c, action) {
    switch (action.type) {
        case LOAD_PRODUCT_REFERENCES_SUCCESS: {
            /** @type {?} */
            const productCode = action.payload.productCode;
            /** @type {?} */
            const list = action.payload.list;
            return Object.assign({}, state, { list,
                productCode });
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$d = {
    productCode: '',
    list: [],
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$d(state = initialState$d, action) {
    switch (action.type) {
        case LOAD_PRODUCT_REVIEWS_SUCCESS: {
            /** @type {?} */
            const productCode = action.payload.productCode;
            /** @type {?} */
            const list = action.payload.list;
            return Object.assign({}, state, { productCode,
                list });
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$e = {
    results: {},
    suggestions: [],
    auxResults: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$e(state = initialState$e, action) {
    switch (action.type) {
        case SEARCH_PRODUCTS_SUCCESS: {
            /** @type {?} */
            const results = action.payload;
            /** @type {?} */
            const res = action.auxiliary ? { auxResults: results } : { results };
            return Object.assign({}, state, res);
        }
        case GET_PRODUCT_SUGGESTIONS_SUCCESS: {
            /** @type {?} */
            const suggestions = action.payload;
            return Object.assign({}, state, { suggestions });
        }
        case CLEAR_PRODUCT_SEARCH_RESULT: {
            return Object.assign({}, state, { results: action.payload.clearPageResults ? {} : state.results, suggestions: action.payload.clearSearchboxResults
                    ? []
                    : state.suggestions, auxResults: action.payload.clearSearchboxResults
                    ? {}
                    : state.auxResults });
        }
    }
    return state;
}
/** @type {?} */
const getSearchResults = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.results);
/** @type {?} */
const getAuxSearchResults = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.auxResults);
/** @type {?} */
const getProductSuggestions = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.suggestions);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$6() {
    return {
        search: reducer$e,
        details: entityLoaderReducer(PRODUCT_DETAIL_ENTITY),
        reviews: reducer$d,
        references: reducer$c,
    };
}
/** @type {?} */
const reducerToken$6 = new InjectionToken('ProductReducers');
/** @type {?} */
const reducerProvider$6 = {
    provide: reducerToken$6,
    useFactory: getReducers$6,
};
/**
 * @param {?} reducer
 * @return {?}
 */
function clearProductsState(reducer) {
    return (/**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function (state, action) {
        if (action.type === CURRENCY_CHANGE || action.type === LANGUAGE_CHANGE) {
            state = undefined;
        }
        return reducer(state, action);
    });
}
/** @type {?} */
const metaReducers$3 = [clearProductsState];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getProductsState = createFeatureSelector(PRODUCT_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$c = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.references;
/** @type {?} */
const getProductReferencesState = createSelector(getProductsState, (ɵ0$c));
/** @type {?} */
const getSelectedProductReferencesFactory = (/**
 * @param {?} productCode
 * @return {?}
 */
(productCode) => {
    return createSelector(getProductReferencesState, (/**
     * @param {?} referenceTypeData
     * @return {?}
     */
    referenceTypeData => {
        if (referenceTypeData.productCode === productCode) {
            return !!referenceTypeData.list ? referenceTypeData.list : [];
        }
    }));
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$d = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.reviews;
/** @type {?} */
const getProductReviewsState = createSelector(getProductsState, (ɵ0$d));
/** @type {?} */
const getSelectedProductReviewsFactory = (/**
 * @param {?} productCode
 * @return {?}
 */
(productCode) => {
    return createSelector(getProductReviewsState, (/**
     * @param {?} reviewData
     * @return {?}
     */
    reviewData => {
        if (reviewData.productCode === productCode) {
            return reviewData.list;
        }
    }));
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$e = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.search;
/** @type {?} */
const getProductsSearchState = createSelector(getProductsState, (ɵ0$e));
/** @type {?} */
const getSearchResults$1 = createSelector(getProductsSearchState, getSearchResults);
/** @type {?} */
const getAuxSearchResults$1 = createSelector(getProductsSearchState, getAuxSearchResults);
/** @type {?} */
const getProductSuggestions$1 = createSelector(getProductsSearchState, getProductSuggestions);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$f = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.details;
/** @type {?} */
const getProductState = createSelector(getProductsState, (ɵ0$f));
/** @type {?} */
const getSelectedProductsFactory = (/**
 * @param {?} codes
 * @return {?}
 */
(codes) => {
    return createSelector(getProductState, (/**
     * @param {?} details
     * @return {?}
     */
    (details) => {
        return codes
            .map((/**
         * @param {?} code
         * @return {?}
         */
        code => details.entities[code] ? details.entities[code].value : undefined))
            .filter((/**
         * @param {?} product
         * @return {?}
         */
        product => product !== undefined));
    }));
});
/** @type {?} */
const getSelectedProductStateFactory = (/**
 * @param {?} code
 * @return {?}
 */
(code) => {
    return createSelector(getProductState, (/**
     * @param {?} details
     * @return {?}
     */
    details => entityStateSelector(details, code)));
});
/** @type {?} */
const getSelectedProductFactory = (/**
 * @param {?} code
 * @return {?}
 */
(code) => {
    return createSelector(getSelectedProductStateFactory(code), (/**
     * @param {?} productState
     * @return {?}
     */
    productState => loaderValueSelector(productState)));
});
/** @type {?} */
const getSelectedProductLoadingFactory = (/**
 * @param {?} code
 * @return {?}
 */
(code) => {
    return createSelector(getSelectedProductStateFactory(code), (/**
     * @param {?} productState
     * @return {?}
     */
    productState => loaderLoadingSelector(productState)));
});
/** @type {?} */
const getSelectedProductSuccessFactory = (/**
 * @param {?} code
 * @return {?}
 */
(code) => {
    return createSelector(getSelectedProductStateFactory(code), (/**
     * @param {?} productState
     * @return {?}
     */
    productState => loaderSuccessSelector(productState)));
});
/** @type {?} */
const getSelectedProductErrorFactory = (/**
 * @param {?} code
 * @return {?}
 */
(code) => {
    return createSelector(getSelectedProductStateFactory(code), (/**
     * @param {?} productState
     * @return {?}
     */
    productState => loaderErrorSelector(productState)));
});
const ɵ1$7 = /**
 * @param {?} details
 * @return {?}
 */
details => {
    return Object.keys(details.entities);
};
/** @type {?} */
const getAllProductCodes = createSelector(getProductState, (ɵ1$7));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductReferenceService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @param {?} productCode
     * @param {?=} referenceType
     * @param {?=} pageSize
     * @return {?}
     */
    get(productCode, referenceType, pageSize) {
        return this.store.pipe(select(getSelectedProductReferencesFactory(productCode)), tap((/**
         * @param {?} references
         * @return {?}
         */
        references => {
            if (references === undefined && productCode !== undefined) {
                this.store.dispatch(new LoadProductReferences({
                    productCode,
                    referenceType,
                    pageSize,
                }));
            }
        })));
    }
}
ProductReferenceService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductReferenceService.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductReviewService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @param {?} productCode
     * @return {?}
     */
    getByProductCode(productCode) {
        /** @type {?} */
        const selector = getSelectedProductReviewsFactory(productCode);
        return this.store.pipe(select(selector), tap((/**
         * @param {?} reviews
         * @return {?}
         */
        reviews => {
            if (reviews === undefined && productCode !== undefined) {
                this.store.dispatch(new LoadProductReviews(productCode));
            }
        })));
    }
    /**
     * @param {?} productCode
     * @param {?} review
     * @return {?}
     */
    add(productCode, review) {
        this.store.dispatch(new PostProductReview({
            productCode: productCode,
            review,
        }));
    }
}
ProductReviewService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductReviewService.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductSearchService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    search(query, searchConfig) {
        this.store.dispatch(new SearchProducts({
            queryText: query,
            searchConfig: searchConfig,
        }));
    }
    /**
     * @return {?}
     */
    getResults() {
        return this.store.pipe(select(getSearchResults$1));
    }
    /**
     * @return {?}
     */
    clearResults() {
        this.store.dispatch(new ClearProductSearchResult({
            clearPageResults: true,
        }));
    }
}
ProductSearchService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductSearchService.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.products = {};
    }
    /**
     * Returns the product observable. The product will be loaded
     * whenever there's no value observed.
     *
     * The underlying product loader ensures that the product is
     * only loaded once, even in case of parallel observers.
     * @param {?} productCode
     * @return {?}
     */
    get(productCode) {
        if (!this.products[productCode]) {
            this.products[productCode] = this.store.pipe(select(getSelectedProductStateFactory(productCode)), tap((/**
             * @param {?} productState
             * @return {?}
             */
            productState => {
                /** @type {?} */
                const attemptedLoad = productState.loading || productState.success || productState.error;
                if (!attemptedLoad) {
                    this.store.dispatch(new LoadProduct(productCode));
                }
            })), map((/**
             * @param {?} productState
             * @return {?}
             */
            productState => productState.value)), shareReplay({ bufferSize: 1, refCount: true }));
        }
        return this.products[productCode];
    }
    /**
     * Returns boolean observable for product's loading state
     * @param {?} productCode
     * @return {?}
     */
    isLoading(productCode) {
        return this.store.pipe(select(getSelectedProductLoadingFactory(productCode)));
    }
    /**
     * Returns boolean observable for product's load success state
     * @param {?} productCode
     * @return {?}
     */
    isSuccess(productCode) {
        return this.store.pipe(select(getSelectedProductSuccessFactory(productCode)));
    }
    /**
     * Returns boolean observable for product's load error state
     * @param {?} productCode
     * @return {?}
     */
    hasError(productCode) {
        return this.store.pipe(select(getSelectedProductErrorFactory(productCode)));
    }
    /**
     * Reloads the product. The product is loaded implicetly
     * whenever selected by the `get`, but in some cases an
     * explicit reload might be needed.
     * @param {?} productCode
     * @return {?}
     */
    reload(productCode) {
        this.store.dispatch(new LoadProduct(productCode));
    }
}
ProductService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductService.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchboxService extends ProductSearchService {
    /**
     * dispatch the search for the search box
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    search(query, searchConfig) {
        this.store.dispatch(new SearchProducts({
            queryText: query,
            searchConfig: searchConfig,
        }, true));
    }
    /**
     * @return {?}
     */
    getResults() {
        return this.store.pipe(select(getAuxSearchResults$1));
    }
    /**
     * clears the products and suggestions
     * @return {?}
     */
    clearResults() {
        this.store.dispatch(new ClearProductSearchResult({
            clearSearchboxResults: true,
        }));
    }
    /**
     * @return {?}
     */
    getSuggestionResults() {
        return this.store.pipe(select(getProductSuggestions$1));
    }
    /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    searchSuggestions(query, searchConfig) {
        this.store.dispatch(new GetProductSuggestions({
            term: query,
            searchConfig: searchConfig,
        }));
    }
}
SearchboxService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ SearchboxService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SearchboxService_Factory() { return new SearchboxService(ɵɵinject(Store)); }, token: SearchboxService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CategoryPageMetaResolver extends PageMetaResolver {
    /**
     * @param {?} routingService
     * @param {?} productSearchService
     * @param {?} cms
     * @param {?} translation
     */
    constructor(routingService, productSearchService, cms, translation) {
        super();
        this.routingService = routingService;
        this.productSearchService = productSearchService;
        this.cms = cms;
        this.translation = translation;
        this.pageType = PageType.CATEGORY_PAGE;
    }
    /**
     * @return {?}
     */
    resolve() {
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap((/**
         * @param {?} page
         * @return {?}
         */
        page => {
            // only the existence of a plp component tells us if products
            // are rendered or if this is an ordinary content page
            if (this.hasProductListComponent(page)) {
                return this.productSearchService.getResults().pipe(filter((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => data.breadcrumbs && data.breadcrumbs.length > 0)), switchMap((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => combineLatest([
                    this.resolveTitle(data),
                    this.resolveBreadcrumbLabel().pipe(switchMap((/**
                     * @param {?} label
                     * @return {?}
                     */
                    label => this.resolveBreadcrumbs(data, label)))),
                ]))), map((/**
                 * @param {?} __0
                 * @return {?}
                 */
                ([title, breadcrumbs]) => ({ title, breadcrumbs }))));
            }
            else {
                return of({
                    title: page.title || page.name,
                });
            }
        })));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    resolveTitle(data) {
        return this.translation.translate('pageMetaResolver.category.title', {
            count: data.pagination.totalResults,
            query: data.breadcrumbs[0].facetValueName,
        });
    }
    /**
     * @return {?}
     */
    resolveBreadcrumbLabel() {
        return this.translation.translate('common.home');
    }
    /**
     * @param {?} data
     * @param {?} breadcrumbLabel
     * @return {?}
     */
    resolveBreadcrumbs(data, breadcrumbLabel) {
        /** @type {?} */
        const breadcrumbs = [];
        breadcrumbs.push({ label: breadcrumbLabel, link: '/' });
        for (const br of data.breadcrumbs) {
            if (br.facetCode === 'category') {
                breadcrumbs.push({
                    label: br.facetValueName,
                    link: `/c/${br.facetValueCode}`,
                });
            }
            if (br.facetCode === 'brand') {
                breadcrumbs.push({
                    label: br.facetValueName,
                    link: `/Brands/${br.facetValueName}/c/${br.facetValueCode}`,
                });
            }
        }
        return of(breadcrumbs);
    }
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    hasProductListComponent(page) {
        // ProductListComponent
        return !!Object.keys(page.slots).find((/**
         * @param {?} key
         * @return {?}
         */
        key => !!page.slots[key].components.find((/**
         * @param {?} comp
         * @return {?}
         */
        comp => comp.typeCode === 'CMSProductListComponent'))));
    }
}
CategoryPageMetaResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CategoryPageMetaResolver.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductSearchService },
    { type: CmsService },
    { type: TranslationService }
];
/** @nocollapse */ CategoryPageMetaResolver.ngInjectableDef = ɵɵdefineInjectable({ factory: function CategoryPageMetaResolver_Factory() { return new CategoryPageMetaResolver(ɵɵinject(RoutingService), ɵɵinject(ProductSearchService), ɵɵinject(CmsService), ɵɵinject(TranslationService)); }, token: CategoryPageMetaResolver, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductPageMetaResolver extends PageMetaResolver {
    /**
     * @param {?} routingService
     * @param {?} productService
     * @param {?} translation
     */
    constructor(routingService, productService, translation) {
        super();
        this.routingService = routingService;
        this.productService = productService;
        this.translation = translation;
        this.pageType = PageType.PRODUCT_PAGE;
    }
    /**
     * @return {?}
     */
    resolve() {
        return this.routingService.getRouterState().pipe(map((/**
         * @param {?} state
         * @return {?}
         */
        state => state.state.params['productCode'])), filter(Boolean), switchMap((/**
         * @param {?} code
         * @return {?}
         */
        code => this.productService.get(code))), filter(Boolean), switchMap((/**
         * @param {?} p
         * @return {?}
         */
        (p) => combineLatest([
            this.resolveHeading(p),
            this.resolveTitle(p),
            this.resolveDescription(p),
            this.resolveBreadcrumbLabel().pipe(switchMap((/**
             * @param {?} label
             * @return {?}
             */
            label => this.resolveBreadcrumbs(p, label)))),
            this.resolveImage(p),
        ]))), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([heading, title, description, breadcrumbs, image]) => ({
            heading,
            title,
            description,
            breadcrumbs,
            image,
        }))));
    }
    /**
     * @param {?} product
     * @return {?}
     */
    resolveHeading(product) {
        return this.translation.translate('pageMetaResolver.product.heading', {
            heading: product.name,
        });
    }
    /**
     * @param {?} product
     * @return {?}
     */
    resolveTitle(product) {
        /** @type {?} */
        let title = product.name;
        title += this.resolveFirstCategory(product);
        title += this.resolveManufacturer(product);
        return this.translation.translate('pageMetaResolver.product.title', {
            title: title,
        });
    }
    /**
     * @param {?} product
     * @return {?}
     */
    resolveDescription(product) {
        return this.translation.translate('pageMetaResolver.product.description', {
            description: product.summary,
        });
    }
    /**
     * @return {?}
     */
    resolveBreadcrumbLabel() {
        return this.translation.translate('common.home');
    }
    /**
     * @param {?} product
     * @param {?} breadcrumbLabel
     * @return {?}
     */
    resolveBreadcrumbs(product, breadcrumbLabel) {
        /** @type {?} */
        const breadcrumbs = [];
        breadcrumbs.push({ label: breadcrumbLabel, link: '/' });
        for (const { name, code, url } of product.categories) {
            breadcrumbs.push({
                label: name || code,
                link: url,
            });
        }
        return of(breadcrumbs);
    }
    /**
     * @param {?} product
     * @return {?}
     */
    resolveImage(product) {
        /** @type {?} */
        let result;
        if (product.images &&
            product.images.PRIMARY &&
            product.images.PRIMARY.zoom &&
            product.images.PRIMARY.zoom.url) {
            result = product.images.PRIMARY.zoom.url;
        }
        return of(result);
    }
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
    resolveFirstCategory(product) {
        /** @type {?} */
        let firstCategory;
        if (product.categories && product.categories.length > 0) {
            firstCategory = product.categories[0];
        }
        return firstCategory
            ? ` | ${firstCategory.name || firstCategory.code}`
            : '';
    }
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
    resolveManufacturer(product) {
        return product.manufacturer ? ` | ${product.manufacturer}` : '';
    }
}
ProductPageMetaResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ProductPageMetaResolver.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductService },
    { type: TranslationService }
];
/** @nocollapse */ ProductPageMetaResolver.ngInjectableDef = ɵɵdefineInjectable({ factory: function ProductPageMetaResolver_Factory() { return new ProductPageMetaResolver(ɵɵinject(RoutingService), ɵɵinject(ProductService), ɵɵinject(TranslationService)); }, token: ProductPageMetaResolver, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchPageMetaResolver extends PageMetaResolver {
    /**
     * @param {?} routingService
     * @param {?} productSearchService
     * @param {?} translation
     */
    constructor(routingService, productSearchService, translation) {
        super();
        this.routingService = routingService;
        this.productSearchService = productSearchService;
        this.translation = translation;
        this.pageType = PageType.CONTENT_PAGE;
        this.pageTemplate = 'SearchResultsListPageTemplate';
    }
    /**
     * @return {?}
     */
    resolve() {
        /** @type {?} */
        const total$ = this.productSearchService.getResults().pipe(filter((/**
         * @param {?} data
         * @return {?}
         */
        data => !!(data && data.pagination))), map((/**
         * @param {?} results
         * @return {?}
         */
        results => results.pagination.totalResults)));
        /** @type {?} */
        const query$ = this.routingService.getRouterState().pipe(map((/**
         * @param {?} state
         * @return {?}
         */
        state => state.state.params['query'])), filter(Boolean));
        return combineLatest([total$, query$]).pipe(switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([total, query]) => this.resolveTitle(total, query))), map((/**
         * @param {?} title
         * @return {?}
         */
        title => ({ title }))));
    }
    /**
     * @param {?} total
     * @param {?} query
     * @return {?}
     */
    resolveTitle(total, query) {
        return this.translation.translate('pageMetaResolver.search.title', {
            count: total,
            query: query,
        });
    }
}
SearchPageMetaResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
SearchPageMetaResolver.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductSearchService },
    { type: TranslationService }
];
/** @nocollapse */ SearchPageMetaResolver.ngInjectableDef = ɵɵdefineInjectable({ factory: function SearchPageMetaResolver_Factory() { return new SearchPageMetaResolver(ɵɵinject(RoutingService), ɵɵinject(ProductSearchService), ɵɵinject(TranslationService)); }, token: SearchPageMetaResolver, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function productStoreConfigFactory() {
    // if we want to reuse PRODUCT_FEATURE const in config, we have to use factory instead of plain object
    /** @type {?} */
    const config = {
        state: {
            ssrTransfer: {
                keys: { [PRODUCT_FEATURE]: StateTransferType.TRANSFER_STATE },
            },
        },
    };
    return config;
}
class ProductStoreModule {
}
ProductStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    StoreModule.forFeature(PRODUCT_FEATURE, reducerToken$6, { metaReducers: metaReducers$3 }),
                    EffectsModule.forFeature(effects$6),
                    ConfigModule.withConfigFactory(productStoreConfigFactory),
                ],
                providers: [reducerProvider$6],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const pageTitleResolvers = [
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
class ProductModule {
}
ProductModule.decorators = [
    { type: NgModule, args: [{
                imports: [ProductStoreModule, CmsModule],
                providers: [
                    ProductService,
                    ProductSearchService,
                    ProductReviewService,
                    ProductReferenceService,
                    ...pageTitleResolvers,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getUserState = createFeatureSelector(USER_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$g = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.billingCountries;
/** @type {?} */
const getBillingCountriesState = createSelector(getUserState, (ɵ0$g));
const ɵ1$8 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.entities;
/** @type {?} */
const getBillingCountriesEntites = createSelector(getBillingCountriesState, (ɵ1$8));
const ɵ2$5 = /**
 * @param {?} entites
 * @return {?}
 */
entites => Object.keys(entites).map((/**
 * @param {?} isocode
 * @return {?}
 */
isocode => entites[isocode]));
/** @type {?} */
const getAllBillingCountries = createSelector(getBillingCountriesEntites, (ɵ2$5));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$h = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.countries;
/** @type {?} */
const getDeliveryCountriesState = createSelector(getUserState, (ɵ0$h));
const ɵ1$9 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.entities;
/** @type {?} */
const getDeliveryCountriesEntites = createSelector(getDeliveryCountriesState, (ɵ1$9));
const ɵ2$6 = /**
 * @param {?} entites
 * @return {?}
 */
entites => Object.keys(entites).map((/**
 * @param {?} isocode
 * @return {?}
 */
isocode => entites[isocode]));
/** @type {?} */
const getAllDeliveryCountries = createSelector(getDeliveryCountriesEntites, (ɵ2$6));
/** @type {?} */
const countrySelectorFactory = (/**
 * @param {?} isocode
 * @return {?}
 */
(isocode) => createSelector(getDeliveryCountriesEntites, (/**
 * @param {?} entities
 * @return {?}
 */
entities => (Object.keys(entities).length !== 0 ? entities[isocode] : null))));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$i = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.order;
/** @type {?} */
const getOrderState = createSelector(getUserState, (ɵ0$i));
const ɵ1$a = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.order;
/** @type {?} */
const getOrderDetails = createSelector(getOrderState, (ɵ1$a));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$j = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.payments;
/** @type {?} */
const getPaymentMethodsState = createSelector(getUserState, (ɵ0$j));
const ɵ1$b = /**
 * @param {?} state
 * @return {?}
 */
(state) => loaderValueSelector(state);
/** @type {?} */
const getPaymentMethods = createSelector(getPaymentMethodsState, (ɵ1$b));
const ɵ2$7 = /**
 * @param {?} state
 * @return {?}
 */
(state) => loaderLoadingSelector(state);
/** @type {?} */
const getPaymentMethodsLoading = createSelector(getPaymentMethodsState, (ɵ2$7));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$k = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.regions;
/** @type {?} */
const getRegionsLoaderState = createSelector(getUserState, (ɵ0$k));
const ɵ1$c = /**
 * @param {?} state
 * @return {?}
 */
(state) => {
    return loaderValueSelector(state).entities;
};
/** @type {?} */
const getAllRegions = createSelector(getRegionsLoaderState, (ɵ1$c));
const ɵ2$8 = /**
 * @param {?} state
 * @return {?}
 */
(state) => ({
    loaded: loaderSuccessSelector(state),
    loading: loaderLoadingSelector(state),
    regions: loaderValueSelector(state).entities,
    country: loaderValueSelector(state).country,
});
/** @type {?} */
const getRegionsDataAndLoading = createSelector(getRegionsLoaderState, (ɵ2$8));
const ɵ3$5 = /**
 * @param {?} state
 * @return {?}
 */
(state) => loaderValueSelector(state).country;
/** @type {?} */
const getRegionsCountry = createSelector(getRegionsLoaderState, (ɵ3$5));
const ɵ4$1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => loaderLoadingSelector(state);
/** @type {?} */
const getRegionsLoading = createSelector(getRegionsLoaderState, (ɵ4$1));
const ɵ5$1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => loaderSuccessSelector(state);
/** @type {?} */
const getRegionsLoaded = createSelector(getRegionsLoaderState, (ɵ5$1));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$l = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.resetPassword;
/** @type {?} */
const getResetPassword = createSelector(getUserState, (ɵ0$l));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$m = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.titles;
/** @type {?} */
const getTitlesState = createSelector(getUserState, (ɵ0$m));
const ɵ1$d = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.entities;
/** @type {?} */
const getTitlesEntites = createSelector(getTitlesState, (ɵ1$d));
const ɵ2$9 = /**
 * @param {?} entites
 * @return {?}
 */
entites => Object.keys(entites).map((/**
 * @param {?} code
 * @return {?}
 */
code => entites[code]));
/** @type {?} */
const getAllTitles = createSelector(getTitlesEntites, (ɵ2$9));
/** @type {?} */
const titleSelectorFactory = (/**
 * @param {?} code
 * @return {?}
 */
(code) => createSelector(getTitlesEntites, (/**
 * @param {?} entities
 * @return {?}
 */
entities => (Object.keys(entities).length !== 0 ? entities[code] : null))));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$n = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.addresses;
/** @type {?} */
const getAddressesLoaderState = createSelector(getUserState, (ɵ0$n));
const ɵ1$e = /**
 * @param {?} state
 * @return {?}
 */
(state) => loaderValueSelector(state);
/** @type {?} */
const getAddresses = createSelector(getAddressesLoaderState, (ɵ1$e));
const ɵ2$a = /**
 * @param {?} state
 * @return {?}
 */
(state) => loaderLoadingSelector(state);
/** @type {?} */
const getAddressesLoading = createSelector(getAddressesLoaderState, (ɵ2$a));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$o = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.consents;
/** @type {?} */
const getConsentsState = createSelector(getUserState, (ɵ0$o));
/** @type {?} */
const getConsentsValue = createSelector(getConsentsState, loaderValueSelector);
/** @type {?} */
const getConsentsLoading = createSelector(getConsentsState, loaderLoadingSelector);
/** @type {?} */
const getConsentsSuccess = createSelector(getConsentsState, loaderSuccessSelector);
/** @type {?} */
const getConsentsError = createSelector(getConsentsState, loaderErrorSelector);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$p = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.account;
/** @type {?} */
const getDetailsState = createSelector(getUserState, (ɵ0$p));
const ɵ1$f = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.details;
/** @type {?} */
const getDetails = createSelector(getDetailsState, (ɵ1$f));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$q = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.orders;
/** @type {?} */
const getOrdersState = createSelector(getUserState, (ɵ0$q));
const ɵ1$g = /**
 * @param {?} state
 * @return {?}
 */
(state) => loaderSuccessSelector(state);
/** @type {?} */
const getOrdersLoaded = createSelector(getOrdersState, (ɵ1$g));
const ɵ2$b = /**
 * @param {?} state
 * @return {?}
 */
(state) => loaderValueSelector(state);
/** @type {?} */
const getOrders = createSelector(getOrdersState, (ɵ2$b));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} processId
 * @return {?}
 */
function getProcessStateFactory(processId) {
    return createSelector(getProcessState(), (/**
     * @param {?} entityState
     * @return {?}
     */
    entityState => entityStateSelector(entityState, processId)));
}
/**
 * @template T
 * @param {?} processId
 * @return {?}
 */
function getProcessLoadingFactory(processId) {
    return createSelector(getProcessStateFactory(processId), (/**
     * @param {?} loaderState
     * @return {?}
     */
    loaderState => loaderLoadingSelector(loaderState)));
}
/**
 * @template T
 * @param {?} processId
 * @return {?}
 */
function getProcessSuccessFactory(processId) {
    return createSelector(getProcessStateFactory(processId), (/**
     * @param {?} loaderState
     * @return {?}
     */
    loaderState => loaderSuccessSelector(loaderState)));
}
/**
 * @template T
 * @param {?} processId
 * @return {?}
 */
function getProcessErrorFactory(processId) {
    return createSelector(getProcessStateFactory(processId), (/**
     * @param {?} loaderState
     * @return {?}
     */
    loaderState => loaderErrorSelector(loaderState)));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$f = {
    entities: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$f(state = initialState$f, action) {
    switch (action.type) {
        case LOAD_BILLING_COUNTRIES_SUCCESS: {
            /** @type {?} */
            const billingCountries = action.payload;
            /** @type {?} */
            const entities = billingCountries.reduce((/**
             * @param {?} countryEntities
             * @param {?} name
             * @return {?}
             */
            (countryEntities, name) => {
                return Object.assign({}, countryEntities, { [name.isocode]: name });
            }), Object.assign({}, state.entities));
            return Object.assign({}, state, { entities });
        }
        case CLEAR_MISCS_DATA: {
            return initialState$f;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$g = {
    entities: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$g(state = initialState$g, action) {
    switch (action.type) {
        case LOAD_DELIVERY_COUNTRIES_SUCCESS: {
            /** @type {?} */
            const deliveryCountries = action.payload;
            /** @type {?} */
            const entities = deliveryCountries.reduce((/**
             * @param {?} countryEntities
             * @param {?} country
             * @return {?}
             */
            (countryEntities, country) => {
                return Object.assign({}, countryEntities, { [country.isocode]: country });
            }), Object.assign({}, state.entities));
            return Object.assign({}, state, { entities });
        }
        case CLEAR_MISCS_DATA: {
            return initialState$g;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$h = {
    order: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$h(state = initialState$h, action) {
    switch (action.type) {
        case LOAD_ORDER_DETAILS_SUCCESS: {
            /** @type {?} */
            const order = action.payload;
            return Object.assign({}, state, { order });
        }
        case CLEAR_ORDER_DETAILS: {
            return initialState$h;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$i = [];
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$i(state = initialState$i, action) {
    switch (action.type) {
        case LOAD_USER_PAYMENT_METHODS_SUCCESS: {
            return action.payload ? action.payload : initialState$i;
        }
        case LOAD_USER_PAYMENT_METHODS_FAIL: {
            return initialState$i;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$j = {
    entities: [],
    country: null,
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$j(state = initialState$j, action) {
    switch (action.type) {
        case LOAD_REGIONS_SUCCESS: {
            /** @type {?} */
            const entities = action.payload.entities;
            /** @type {?} */
            const country = action.payload.country;
            if (entities) {
                return Object.assign({}, state, { entities,
                    country });
            }
            return initialState$j;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$k = false;
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$k(state = initialState$k, action) {
    switch (action.type) {
        case RESET_PASSWORD_SUCCESS: {
            return true;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$l = {
    entities: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$l(state = initialState$l, action) {
    switch (action.type) {
        case LOAD_TITLES_SUCCESS: {
            /** @type {?} */
            const titles = action.payload;
            /** @type {?} */
            const entities = titles.reduce((/**
             * @param {?} titleEntities
             * @param {?} name
             * @return {?}
             */
            (titleEntities, name) => {
                return Object.assign({}, titleEntities, { [name.code]: name });
            }), Object.assign({}, state.entities));
            return Object.assign({}, state, { entities });
        }
        case CLEAR_MISCS_DATA: {
            return initialState$l;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$m = [];
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$m(state = initialState$m, action) {
    switch (action.type) {
        case LOAD_USER_ADDRESSES_FAIL: {
            return initialState$m;
        }
        case LOAD_USER_ADDRESSES_SUCCESS: {
            return action.payload ? action.payload : initialState$m;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$n = [];
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$n(state = initialState$n, action) {
    switch (action.type) {
        case LOAD_USER_CONSENTS_SUCCESS: {
            /** @type {?} */
            const consents = action.payload;
            return consents ? consents : initialState$n;
        }
        case GIVE_USER_CONSENT_SUCCESS: {
            /** @type {?} */
            const updatedConsentTemplate = action.consentTemplate;
            return state.map((/**
             * @param {?} consentTemplate
             * @return {?}
             */
            consentTemplate => consentTemplate.id === updatedConsentTemplate.id
                ? updatedConsentTemplate
                : consentTemplate));
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$o = (/** @type {?} */ ({}));
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$o(state = initialState$o, action) {
    switch (action.type) {
        case LOAD_USER_DETAILS_SUCCESS: {
            return action.payload;
        }
        case UPDATE_USER_DETAILS_SUCCESS: {
            /** @type {?} */
            const updatedDetails = Object.assign({}, state, action.userUpdates);
            return Object.assign({}, updatedDetails, { name: `${updatedDetails.firstName} ${updatedDetails.lastName}` });
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$p = {
    orders: [],
    pagination: {},
    sorts: [],
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$p(state = initialState$p, action) {
    switch (action.type) {
        case LOAD_USER_ORDERS_SUCCESS: {
            return action.payload ? action.payload : initialState$p;
        }
        case LOAD_USER_ORDERS_FAIL: {
            return initialState$p;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$7() {
    return {
        account: combineReducers({
            details: reducer$o,
        }),
        addresses: loaderReducer(USER_ADDRESSES, reducer$m),
        billingCountries: reducer$f,
        consents: loaderReducer(USER_CONSENTS, reducer$n),
        payments: loaderReducer(USER_PAYMENT_METHODS, reducer$i),
        orders: loaderReducer(USER_ORDERS, reducer$p),
        order: reducer$h,
        countries: reducer$g,
        titles: reducer$l,
        regions: loaderReducer(REGIONS, reducer$j),
        resetPassword: reducer$k,
    };
}
/** @type {?} */
const reducerToken$7 = new InjectionToken('UserReducers');
/** @type {?} */
const reducerProvider$7 = {
    provide: reducerToken$7,
    useFactory: getReducers$7,
};
/**
 * @param {?} reducer
 * @return {?}
 */
function clearUserState(reducer) {
    return (/**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function (state, action) {
        if (action.type === LOGOUT) {
            state = undefined;
        }
        return reducer(state, action);
    });
}
/** @type {?} */
const metaReducers$4 = [clearUserState];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Returns a user
     * @return {?}
     */
    get() {
        return this.store.pipe(select(getDetails), tap((/**
         * @param {?} details
         * @return {?}
         */
        details => {
            if (Object.keys(details).length === 0) {
                this.load();
            }
        })));
    }
    /**
     * Loads the user's details
     * @return {?}
     */
    load() {
        this.store.dispatch(new LoadUserDetails(USERID_CURRENT));
    }
    /**
     * Register a new user
     *
     * @param {?} userRegisterFormData
     * @return {?}
     */
    register(userRegisterFormData) {
        this.store.dispatch(new RegisterUser(userRegisterFormData));
    }
    /**
     * Remove user account, that's also called close user's account
     * @return {?}
     */
    remove() {
        this.store.dispatch(new RemoveUser(USERID_CURRENT));
    }
    /**
     * Returns the remove user loading flag
     * @return {?}
     */
    getRemoveUserResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(REMOVE_USER_PROCESS_ID)));
    }
    /**
     * Returns the remove user failure outcome.
     * @return {?}
     */
    getRemoveUserResultError() {
        return this.store.pipe(select(getProcessErrorFactory(REMOVE_USER_PROCESS_ID)));
    }
    /**
     * Returns the remove user process success outcome.
     * @return {?}
     */
    getRemoveUserResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(REMOVE_USER_PROCESS_ID)));
    }
    /**
     * Resets the remove user process state. The state needs to be reset after the process
     * concludes, regardless if it's a success or an error
     * @return {?}
     */
    resetRemoveUserProcessState() {
        this.store.dispatch(new RemoveUserReset());
    }
    /**
     * Returns titles
     * @return {?}
     */
    getTitles() {
        return this.store.pipe(select(getAllTitles));
    }
    /**
     * Retrieves titles
     * @return {?}
     */
    loadTitles() {
        this.store.dispatch(new LoadTitles());
    }
    /**
     * Return whether user's password is successfully reset
     * @return {?}
     */
    isPasswordReset() {
        return this.store.pipe(select(getResetPassword));
    }
    /**
     * Updates the user's details
     * @param {?} userDetails to be updated
     * @return {?}
     */
    updatePersonalDetails(userDetails) {
        this.store.dispatch(new UpdateUserDetails({ username: USERID_CURRENT, userDetails }));
    }
    /**
     * Returns the update user's personal details loading flag
     * @return {?}
     */
    getUpdatePersonalDetailsResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(UPDATE_USER_DETAILS_PROCESS_ID)));
    }
    /**
     * Returns the update user's personal details error flag
     * @return {?}
     */
    getUpdatePersonalDetailsResultError() {
        return this.store.pipe(select(getProcessErrorFactory(UPDATE_USER_DETAILS_PROCESS_ID)));
    }
    /**
     * Returns the update user's personal details success flag
     * @return {?}
     */
    getUpdatePersonalDetailsResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(UPDATE_USER_DETAILS_PROCESS_ID)));
    }
    /**
     * Resets the update user details processing state
     * @return {?}
     */
    resetUpdatePersonalDetailsProcessingState() {
        this.store.dispatch(new ResetUpdateUserDetails());
    }
    /**
     * Reset new password.  Part of the forgot password flow.
     * @param {?} token
     * @param {?} password
     * @return {?}
     */
    resetPassword(token, password) {
        this.store.dispatch(new ResetPassword({ token, password }));
    }
    /*
       * Request an email to reset a forgotten password.
       */
    /**
     * @param {?} userEmailAddress
     * @return {?}
     */
    requestForgotPasswordEmail(userEmailAddress) {
        this.store.dispatch(new ForgotPasswordEmailRequest(userEmailAddress));
    }
    /**
     * Updates the user's email
     * @param {?} password
     * @param {?} newUid
     * @return {?}
     */
    updateEmail(password, newUid) {
        this.store.dispatch(new UpdateEmailAction({ uid: USERID_CURRENT, password, newUid }));
    }
    /**
     * Returns the update user's email success flag
     * @return {?}
     */
    getUpdateEmailResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(UPDATE_EMAIL_PROCESS_ID)));
    }
    /**
     * Returns the update user's email error flag
     * @return {?}
     */
    getUpdateEmailResultError() {
        return this.store.pipe(select(getProcessErrorFactory(UPDATE_EMAIL_PROCESS_ID)));
    }
    /**
     * Returns the update user's email loading flag
     * @return {?}
     */
    getUpdateEmailResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(UPDATE_EMAIL_PROCESS_ID)));
    }
    /**
     * Resets the update user's email processing state
     * @return {?}
     */
    resetUpdateEmailResultState() {
        this.store.dispatch(new ResetUpdateEmailAction());
    }
    /**
     * Updates the password for the user
     * @param {?} oldPassword the current password that will be changed
     * @param {?} newPassword the new password
     * @return {?}
     */
    updatePassword(oldPassword, newPassword) {
        this.store.dispatch(new UpdatePassword({
            userId: USERID_CURRENT,
            oldPassword,
            newPassword,
        }));
    }
    /**
     * Returns the update password loading flag
     * @return {?}
     */
    getUpdatePasswordResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(UPDATE_PASSWORD_PROCESS_ID)));
    }
    /**
     * Returns the update password failure outcome.
     * @return {?}
     */
    getUpdatePasswordResultError() {
        return this.store.pipe(select(getProcessErrorFactory(UPDATE_PASSWORD_PROCESS_ID)));
    }
    /**
     * Returns the update password process success outcome.
     * @return {?}
     */
    getUpdatePasswordResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(UPDATE_PASSWORD_PROCESS_ID)));
    }
    /**
     * Resets the update password process state. The state needs to be reset after the process
     * concludes, regardless if it's a success or an error
     * @return {?}
     */
    resetUpdatePasswordProcessState() {
        this.store.dispatch(new UpdatePasswordReset());
    }
}
UserService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserService.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserAddressService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Retrieves user's addresses
     * @return {?}
     */
    loadAddresses() {
        this.store.dispatch(new LoadUserAddresses(USERID_CURRENT));
    }
    /**
     * Adds user address
     * @param {?} address a user address
     * @return {?}
     */
    addUserAddress(address) {
        this.store.dispatch(new AddUserAddress({
            userId: USERID_CURRENT,
            address: address,
        }));
    }
    /**
     * Sets user address as default
     * @param {?} addressId a user address ID
     * @return {?}
     */
    setAddressAsDefault(addressId) {
        this.store.dispatch(new UpdateUserAddress({
            userId: USERID_CURRENT,
            addressId: addressId,
            address: { defaultAddress: true },
        }));
    }
    /**
     * Updates existing user address
     * @param {?} addressId a user address ID
     * @param {?} address a user address
     * @return {?}
     */
    updateUserAddress(addressId, address) {
        this.store.dispatch(new UpdateUserAddress({
            userId: USERID_CURRENT,
            addressId: addressId,
            address: address,
        }));
    }
    /**
     * Deletes existing user address
     * @param {?} addressId a user address ID
     * @return {?}
     */
    deleteUserAddress(addressId) {
        this.store.dispatch(new DeleteUserAddress({
            userId: USERID_CURRENT,
            addressId: addressId,
        }));
    }
    /**
     * Returns addresses
     * @return {?}
     */
    getAddresses() {
        return this.store.pipe(select(getAddresses));
    }
    /**
     * Returns a loading flag for addresses
     * @return {?}
     */
    getAddressesLoading() {
        return this.store.pipe(select(getAddressesLoading));
    }
    /**
     * Retrieves delivery countries
     * @return {?}
     */
    loadDeliveryCountries() {
        this.store.dispatch(new LoadDeliveryCountries());
    }
    /**
     * Returns all delivery countries
     * @return {?}
     */
    getDeliveryCountries() {
        return this.store.pipe(select(getAllDeliveryCountries));
    }
    /**
     * Returns a country based on the provided `isocode`
     * @param {?} isocode an isocode for a country
     * @return {?}
     */
    getCountry(isocode) {
        return this.store.pipe(select(countrySelectorFactory(isocode)));
    }
    /**
     * Retrieves regions for specified country by `countryIsoCode`
     * @param {?} countryIsoCode
     * @return {?}
     */
    loadRegions(countryIsoCode) {
        this.store.dispatch(new LoadRegions(countryIsoCode));
    }
    /**
     * Clear regions in store - useful when changing country
     * @return {?}
     */
    clearRegions() {
        this.store.dispatch(new ClearRegions());
    }
    /**
     * Returns all regions
     * @param {?} countryIsoCode
     * @return {?}
     */
    getRegions(countryIsoCode) {
        return this.store.select(getRegionsDataAndLoading).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ regions, country, loading, loaded }) => {
            if (!countryIsoCode && (loading || loaded)) {
                this.clearRegions();
                return [];
            }
            else if (loading && !loaded) {
                // don't interrupt loading
                return [];
            }
            else if (!loading && countryIsoCode !== country && countryIsoCode) {
                // country changed - clear store and load new regions
                if (country) {
                    this.clearRegions();
                }
                this.loadRegions(countryIsoCode);
                return [];
            }
            return regions;
        })));
    }
}
UserAddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
UserAddressService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ UserAddressService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UserAddressService_Factory() { return new UserAddressService(ɵɵinject(Store)); }, token: UserAddressService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserConsentService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Retrieves all consents.
     * @return {?}
     */
    loadConsents() {
        this.store.dispatch(new LoadUserConsents(USERID_CURRENT));
    }
    /**
     * Returns all consents
     * @return {?}
     */
    getConsents() {
        return this.store.pipe(select(getConsentsValue));
    }
    /**
     * Returns the consents loading flag
     * @return {?}
     */
    getConsentsResultLoading() {
        return this.store.pipe(select(getConsentsLoading));
    }
    /**
     * Returns the consents success flag
     * @return {?}
     */
    getConsentsResultSuccess() {
        return this.store.pipe(select(getConsentsSuccess));
    }
    /**
     * Returns the consents error flag
     * @return {?}
     */
    getConsentsResultError() {
        return this.store.pipe(select(getConsentsError));
    }
    /**
     * Resets the processing state for consent retrieval
     * @return {?}
     */
    resetConsentsProcessState() {
        this.store.dispatch(new ResetLoadUserConsents());
    }
    /**
     * Give consent for specified consent template ID and version.
     * @param {?} consentTemplateId a template ID for which to give a consent
     * @param {?} consentTemplateVersion a template version for which to give a consent
     * @return {?}
     */
    giveConsent(consentTemplateId, consentTemplateVersion) {
        this.store.dispatch(new GiveUserConsent({
            userId: USERID_CURRENT,
            consentTemplateId,
            consentTemplateVersion,
        }));
    }
    /**
     * Returns the give consent process loading flag
     * @return {?}
     */
    getGiveConsentResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(GIVE_CONSENT_PROCESS_ID)));
    }
    /**
     * Returns the give consent process success flag
     * @return {?}
     */
    getGiveConsentResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(GIVE_CONSENT_PROCESS_ID)));
    }
    /**
     * Returns the give consent process error flag
     * @return {?}
     */
    getGiveConsentResultError() {
        return this.store.pipe(select(getProcessErrorFactory(GIVE_CONSENT_PROCESS_ID)));
    }
    /**
     * Resents the give consent process flags
     * @return {?}
     */
    resetGiveConsentProcessState() {
        return this.store.dispatch(new ResetGiveUserConsentProcess());
    }
    /**
     * Withdraw consent for the given `consentCode`
     * @param {?} consentCode for which to withdraw the consent
     * @return {?}
     */
    withdrawConsent(consentCode) {
        this.store.dispatch(new WithdrawUserConsent({ userId: USERID_CURRENT, consentCode }));
    }
    /**
     * Returns the withdraw consent process loading flag
     * @return {?}
     */
    getWithdrawConsentResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(WITHDRAW_CONSENT_PROCESS_ID)));
    }
    /**
     * Returns the withdraw consent process success flag
     * @return {?}
     */
    getWithdrawConsentResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(WITHDRAW_CONSENT_PROCESS_ID)));
    }
    /**
     * Returns the withdraw consent process error flag
     * @return {?}
     */
    getWithdrawConsentResultError() {
        return this.store.pipe(select(getProcessErrorFactory(WITHDRAW_CONSENT_PROCESS_ID)));
    }
    /**
     * Resets the process flags for withdraw consent
     * @return {?}
     */
    resetWithdrawConsentProcessState() {
        return this.store.dispatch(new ResetWithdrawUserConsentProcess());
    }
}
UserConsentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
UserConsentService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ UserConsentService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UserConsentService_Factory() { return new UserConsentService(ɵɵinject(Store)); }, token: UserConsentService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserPaymentService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Loads all user's payment methods.
     * @return {?}
     */
    loadPaymentMethods() {
        this.store.dispatch(new LoadUserPaymentMethods(USERID_CURRENT));
    }
    /**
     * Returns all user's payment methods
     * @return {?}
     */
    getPaymentMethods() {
        return this.store.pipe(select(getPaymentMethods));
    }
    /**
     * Returns a loading flag for payment methods
     * @return {?}
     */
    getPaymentMethodsLoading() {
        return this.store.pipe(select(getPaymentMethodsLoading));
    }
    /**
     * Sets the payment as a default one
     * @param {?} paymentMethodId a payment method ID
     * @return {?}
     */
    setPaymentMethodAsDefault(paymentMethodId) {
        this.store.dispatch(new SetDefaultUserPaymentMethod({
            userId: USERID_CURRENT,
            paymentMethodId,
        }));
    }
    /**
     * Deletes the payment method
     *
     * @param {?} paymentMethodId a payment method ID
     * @return {?}
     */
    deletePaymentMethod(paymentMethodId) {
        this.store.dispatch(new DeleteUserPaymentMethod({
            userId: USERID_CURRENT,
            paymentMethodId,
        }));
    }
    /**
     * Returns all billing countries
     * @return {?}
     */
    getAllBillingCountries() {
        return this.store.pipe(select(getAllBillingCountries));
    }
    /**
     * Retrieves billing countries
     * @return {?}
     */
    loadBillingCountries() {
        this.store.dispatch(new LoadBillingCountries());
    }
}
UserPaymentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
UserPaymentService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ UserPaymentService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UserPaymentService_Factory() { return new UserPaymentService(ɵɵinject(Store)); }, token: UserPaymentService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserOrderService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Returns an order's detail
     * @return {?}
     */
    getOrderDetails() {
        return this.store.pipe(select(getOrderDetails));
    }
    /**
     * Retrieves order's details
     *
     * @param {?} orderCode an order code
     * @return {?}
     */
    loadOrderDetails(orderCode) {
        this.store.dispatch(new LoadOrderDetails({
            userId: USERID_CURRENT,
            orderCode: orderCode,
        }));
    }
    /**
     * Clears order's details
     * @return {?}
     */
    clearOrderDetails() {
        this.store.dispatch(new ClearOrderDetails());
    }
    /**
     * Returns order history list
     * @param {?} pageSize
     * @return {?}
     */
    getOrderHistoryList(pageSize) {
        return this.store.pipe(select(getOrdersState), tap((/**
         * @param {?} orderListState
         * @return {?}
         */
        orderListState => {
            /** @type {?} */
            const attemptedLoad = orderListState.loading ||
                orderListState.success ||
                orderListState.error;
            if (!attemptedLoad) {
                this.loadOrderList(pageSize);
            }
        })), map((/**
         * @param {?} orderListState
         * @return {?}
         */
        orderListState => orderListState.value)));
    }
    /**
     * Returns a loaded flag for order history list
     * @return {?}
     */
    getOrderHistoryListLoaded() {
        return this.store.pipe(select(getOrdersLoaded));
    }
    /**
     * Retrieves an order list
     * @param {?} pageSize page size
     * @param {?=} currentPage current page
     * @param {?=} sort sort
     * @return {?}
     */
    loadOrderList(pageSize, currentPage, sort) {
        this.store.dispatch(new LoadUserOrders({
            userId: USERID_CURRENT,
            pageSize: pageSize,
            currentPage: currentPage,
            sort: sort,
        }));
    }
    /**
     * Cleaning order list
     * @return {?}
     */
    clearOrderList() {
        this.store.dispatch(new ClearUserOrders());
    }
}
UserOrderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
UserOrderService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ UserOrderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UserOrderService_Factory() { return new UserOrderService(ɵɵinject(Store)); }, token: UserOrderService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @return {?}
 */
function getReducers$8() {
    return entityLoaderReducer(PROCESS_FEATURE);
}
/** @type {?} */
const reducerToken$8 = new InjectionToken('ProcessReducers');
/** @type {?} */
const reducerProvider$8 = {
    provide: reducerToken$8,
    useFactory: getReducers$8,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProcessStoreModule {
}
ProcessStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [StateModule, StoreModule.forFeature(PROCESS_FEATURE, reducerToken$8)],
                providers: [reducerProvider$8],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProcessModule {
}
ProcessModule.decorators = [
    { type: NgModule, args: [{
                imports: [ProcessStoreModule],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const CountryType = {
    BILLING: 'BILLING',
    SHIPPING: 'SHIPPING',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BillingCountriesEffect {
    /**
     * @param {?} actions$
     * @param {?} siteConnector
     */
    constructor(actions$, siteConnector) {
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.loadBillingCountries$ = this.actions$.pipe(ofType(LOAD_BILLING_COUNTRIES), switchMap((/**
         * @return {?}
         */
        () => {
            return this.siteConnector.getCountries(CountryType.BILLING).pipe(map((/**
             * @param {?} countries
             * @return {?}
             */
            countries => new LoadBillingCountriesSuccess(countries))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new LoadBillingCountriesFail(makeErrorSerializable(error))))));
        })));
    }
}
BillingCountriesEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BillingCountriesEffect.ctorParameters = () => [
    { type: Actions },
    { type: SiteConnector }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], BillingCountriesEffect.prototype, "loadBillingCountries$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClearMiscsDataEffect {
    /**
     * @param {?} actions$
     */
    constructor(actions$) {
        this.actions$ = actions$;
        this.clearMiscsData$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE, CURRENCY_CHANGE), map((/**
         * @return {?}
         */
        () => {
            return new ClearMiscsData();
        })));
    }
}
ClearMiscsDataEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ClearMiscsDataEffect.ctorParameters = () => [
    { type: Actions }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], ClearMiscsDataEffect.prototype, "clearMiscsData$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DeliveryCountriesEffects {
    /**
     * @param {?} actions$
     * @param {?} siteConnector
     */
    constructor(actions$, siteConnector) {
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.loadDeliveryCountries$ = this.actions$.pipe(ofType(LOAD_DELIVERY_COUNTRIES), switchMap((/**
         * @return {?}
         */
        () => {
            return this.siteConnector.getCountries(CountryType.SHIPPING).pipe(map((/**
             * @param {?} countries
             * @return {?}
             */
            countries => new LoadDeliveryCountriesSuccess(countries))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new LoadDeliveryCountriesFail(makeErrorSerializable(error))))));
        })));
    }
}
DeliveryCountriesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DeliveryCountriesEffects.ctorParameters = () => [
    { type: Actions },
    { type: SiteConnector }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], DeliveryCountriesEffects.prototype, "loadDeliveryCountries$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const GLOBAL_MESSAGE_FEATURE = 'global-message';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ADD_MESSAGE = '[Global-message] Add a Message';
/** @type {?} */
const REMOVE_MESSAGE = '[Global-message] Remove a Message';
/** @type {?} */
const REMOVE_MESSAGES_BY_TYPE = '[Global-message] Remove messages by type';
class AddMessage {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_MESSAGE;
    }
}
class RemoveMessage {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = REMOVE_MESSAGE;
    }
}
class RemoveMessagesByType {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = REMOVE_MESSAGES_BY_TYPE;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getGlobalMessageState = createFeatureSelector(GLOBAL_MESSAGE_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$r = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.entities;
/** @type {?} */
const getGlobalMessageEntities = createSelector(getGlobalMessageState, (ɵ0$r));
/** @type {?} */
const getGlobalMessageEntitiesByType = (/**
 * @param {?} type
 * @return {?}
 */
(type) => {
    return createSelector(getGlobalMessageEntities, (/**
     * @param {?} entities
     * @return {?}
     */
    entities => entities && entities[type]));
});
/** @type {?} */
const getGlobalMessageCountByType = (/**
 * @param {?} type
 * @return {?}
 */
(type) => {
    return createSelector(getGlobalMessageEntitiesByType(type), (/**
     * @param {?} entities
     * @return {?}
     */
    entities => entities && entities.length));
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    const aKeys = Object.keys(objA);
    /** @type {?} */
    const bKeys = Object.keys(objB);
    /** @type {?} */
    const aKeysLen = aKeys.length;
    /** @type {?} */
    const bKeysLen = bKeys.length;
    if (aKeysLen !== bKeysLen) {
        return false;
    }
    for (let i = 0; i < aKeysLen; i++) {
        /** @type {?} */
        const key = aKeys[i];
        if (objA[key] !== objB[key]) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} objA
 * @param {?} objB
 * @return {?}
 */
function deepEqualObjects(objA, objB) {
    if (objA === objB) {
        return true; // if both objA and objB are null or undefined and exactly the same
    }
    else if (!(objA instanceof Object) || !(objB instanceof Object)) {
        return false; // if they are not strictly equal, they both need to be Objects
    }
    else if (objA.constructor !== objB.constructor) {
        // they must have the exact same prototype chain, the closest we can do is
        // test their constructor.
        return false;
    }
    else {
        for (const key in objA) {
            if (!objA.hasOwnProperty(key)) {
                continue; // other properties were tested using objA.constructor === y.constructor
            }
            if (!objB.hasOwnProperty(key)) {
                return false; // allows to compare objA[ key ] and objB[ key ] when set to undefined
            }
            if (objA[key] === objB[key]) {
                continue; // if they have the same strict value or identity then they are equal
            }
            if (typeof objA[key] !== 'object') {
                return false; // Numbers, Strings, Functions, Booleans must be strictly equal
            }
            if (!deepEqualObjects(objA[key], objB[key])) {
                return false;
            }
        }
        for (const key in objB) {
            if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$q = {
    entities: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$q(state = initialState$q, action) {
    switch (action.type) {
        case ADD_MESSAGE: {
            /** @type {?} */
            const message = action.payload;
            if (state.entities[message.type] === undefined) {
                return Object.assign({}, state, { entities: Object.assign({}, state.entities, { [message.type]: [message.text] }) });
            }
            else {
                /** @type {?} */
                const messages = state.entities[message.type];
                if (!messages.some((/**
                 * @param {?} msg
                 * @return {?}
                 */
                msg => deepEqualObjects(msg, message.text)))) {
                    return Object.assign({}, state, { entities: Object.assign({}, state.entities, { [message.type]: [...messages, message.text] }) });
                }
            }
            return state;
        }
        case REMOVE_MESSAGE: {
            /** @type {?} */
            const msgType = action.payload.type;
            /** @type {?} */
            const msgIndex = action.payload.index;
            if (Object.keys(state.entities).length === 0 ||
                !state.entities[msgType]) {
                return state;
            }
            /** @type {?} */
            const messages = [...state.entities[msgType]];
            messages.splice(msgIndex, 1);
            return Object.assign({}, state, { entities: Object.assign({}, state.entities, { [msgType]: messages }) });
        }
        case REMOVE_MESSAGES_BY_TYPE: {
            /** @type {?} */
            const entities = Object.assign({}, state.entities, { [action.payload]: [] });
            return Object.assign({}, state, { entities });
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$9() {
    return reducer$q;
}
/** @type {?} */
const reducerToken$9 = new InjectionToken('GlobalMessageReducers');
/** @type {?} */
const reducerProvider$9 = {
    provide: reducerToken$9,
    useFactory: getReducers$9,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GlobalMessageService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Get all global messages
     * @return {?}
     */
    get() {
        return this.store.pipe(select(getGlobalMessageEntities), filter((/**
         * @param {?} data
         * @return {?}
         */
        data => data !== undefined)));
    }
    /**
     * Add one message into store
     * @param {?} text
     * @param {?} type
     * @return {?}
     */
    add(text, type) {
        this.store.dispatch(new AddMessage({
            text: typeof text === 'string' ? { raw: text } : text,
            type,
        }));
    }
    /**
     * Remove message(s) from store
     * @param {?} type
     * @param {?=} index
     * @return {?}
     */
    remove(type, index) {
        this.store.dispatch(index !== undefined
            ? new RemoveMessage({
                type: type,
                index: index,
            })
            : new RemoveMessagesByType(type));
    }
}
GlobalMessageService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GlobalMessageService.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const HttpResponseStatus = {
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class HttpErrorHandler {
    /**
     * @param {?} globalMessageService
     */
    constructor(globalMessageService) {
        this.globalMessageService = globalMessageService;
    }
}
HttpErrorHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
HttpErrorHandler.ctorParameters = () => [
    { type: GlobalMessageService }
];
/** @nocollapse */ HttpErrorHandler.ngInjectableDef = ɵɵdefineInjectable({ factory: function HttpErrorHandler_Factory() { return new HttpErrorHandler(ɵɵinject(GlobalMessageService)); }, token: HttpErrorHandler, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HttpErrorInterceptor {
    /**
     * @param {?} handlers
     */
    constructor(handlers) {
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
    intercept(request, next) {
        return next.handle(request).pipe(catchError((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            if (response instanceof HttpErrorResponse) {
                this.handleErrorResponse(request, response);
                return throwError(response);
            }
        })));
    }
    /**
     * @protected
     * @param {?} request
     * @param {?} response
     * @return {?}
     */
    handleErrorResponse(request, response) {
        /** @type {?} */
        const handler = this.getResponseHandler(response);
        if (handler) {
            handler.handleError(request, response);
        }
    }
    /**
     * return the error handler that matches the `HttpResponseStatus` code.
     * If no handler is available, the UNKNOWN handler is returned.
     * @protected
     * @param {?} response
     * @return {?}
     */
    getResponseHandler(response) {
        /** @type {?} */
        const status = response.status;
        /** @type {?} */
        let handler = this.handlers.find((/**
         * @param {?} h
         * @return {?}
         */
        h => h.responseStatus === status));
        if (!handler) {
            handler = this.handlers.find((/**
             * @param {?} h
             * @return {?}
             */
            h => h.responseStatus === HttpResponseStatus.UNKNOWN));
        }
        return handler;
    }
}
HttpErrorInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HttpErrorInterceptor.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [HttpErrorHandler,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UnknownErrorHandler extends HttpErrorHandler {
    /**
     * @param {?} config
     * @param {?} globalMessageService
     */
    constructor(config, globalMessageService) {
        super(globalMessageService);
        this.config = config;
        this.globalMessageService = globalMessageService;
        this.responseStatus = HttpResponseStatus.UNKNOWN;
    }
    /**
     * @return {?}
     */
    handleError() {
        if (!this.config.production) {
            console.warn(`Unknown http response error: ${this.responseStatus}`);
        }
    }
}
UnknownErrorHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
UnknownErrorHandler.ctorParameters = () => [
    { type: ServerConfig },
    { type: GlobalMessageService }
];
/** @nocollapse */ UnknownErrorHandler.ngInjectableDef = ɵɵdefineInjectable({ factory: function UnknownErrorHandler_Factory() { return new UnknownErrorHandler(ɵɵinject(ServerConfig), ɵɵinject(GlobalMessageService)); }, token: UnknownErrorHandler, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const GlobalMessageType = {
    MSG_TYPE_CONFIRMATION: '[GlobalMessage] Confirmation',
    MSG_TYPE_ERROR: '[GlobalMessage] Error',
    MSG_TYPE_INFO: '[GlobalMessage] Information',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BadGatewayHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.BAD_GATEWAY;
    }
    /**
     * @return {?}
     */
    handleError() {
        this.globalMessageService.add({ key: 'httpHandlers.badGateway' }, GlobalMessageType.MSG_TYPE_ERROR);
    }
}
BadGatewayHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ BadGatewayHandler.ngInjectableDef = ɵɵdefineInjectable({ factory: function BadGatewayHandler_Factory() { return new BadGatewayHandler(ɵɵinject(GlobalMessageService)); }, token: BadGatewayHandler, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const OAUTH_ENDPOINT$3 = '/authorizationserver/oauth/token';
class BadRequestHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.BAD_REQUEST;
    }
    /**
     * @param {?} request
     * @param {?} response
     * @return {?}
     */
    handleError(request, response) {
        if (response.url.includes(OAUTH_ENDPOINT$3) &&
            response.error &&
            response.error.error === 'invalid_grant' &&
            request.body.get('grant_type') === 'password') {
            this.globalMessageService.add({
                key: 'httpHandlers.badRequestPleaseLoginAgain',
                params: {
                    errorMessage: response.error.error_description || response.message || '',
                },
            }, GlobalMessageType.MSG_TYPE_ERROR);
            this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
        else {
            if (response.error &&
                response.error.errors &&
                response.error.errors instanceof Array) {
                response.error.errors.forEach((/**
                 * @param {?} error
                 * @return {?}
                 */
                (error) => {
                    /** @type {?} */
                    let errorMessage;
                    if (error.type === 'PasswordMismatchError') {
                        // uses en translation error message instead of backend exception error
                        // @todo: this condition could be removed if backend gives better message
                        errorMessage = {
                            key: 'httpHandlers.badRequestOldPasswordIncorrect',
                        };
                    }
                    else if (error.subjectType === 'cart' &&
                        error.reason === 'notFound') {
                        errorMessage = { key: 'httpHandlers.cartNotFound' };
                    }
                    else if (error.type === 'ValidationError') {
                        // build translation key in case of backend field validation error
                        errorMessage = {
                            key: `httpHandlers.validationErrors.${error.reason}.${error.subject}`,
                        };
                    }
                    else {
                        // this is currently showing up in case we have a page not found. It should be a 404.
                        // see https://jira.hybris.com/browse/CMSX-8516
                        errorMessage = { raw: error.message || '' };
                    }
                    this.globalMessageService.add(errorMessage, GlobalMessageType.MSG_TYPE_ERROR);
                }));
            }
        }
    }
}
BadRequestHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ BadRequestHandler.ngInjectableDef = ɵɵdefineInjectable({ factory: function BadRequestHandler_Factory() { return new BadRequestHandler(ɵɵinject(GlobalMessageService)); }, token: BadRequestHandler, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConflictHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.CONFLICT;
    }
    /**
     * @return {?}
     */
    handleError() {
        this.globalMessageService.add({ key: 'httpHandlers.conflict' }, GlobalMessageType.MSG_TYPE_ERROR);
    }
}
ConflictHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ ConflictHandler.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConflictHandler_Factory() { return new ConflictHandler(ɵɵinject(GlobalMessageService)); }, token: ConflictHandler, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ForbiddenHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.FORBIDDEN;
    }
    /**
     * @return {?}
     */
    handleError() {
        this.globalMessageService.add({ key: 'httpHandlers.forbidden' }, GlobalMessageType.MSG_TYPE_ERROR);
    }
}
ForbiddenHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ ForbiddenHandler.ngInjectableDef = ɵɵdefineInjectable({ factory: function ForbiddenHandler_Factory() { return new ForbiddenHandler(ɵɵinject(GlobalMessageService)); }, token: ForbiddenHandler, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GatewayTimeoutHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.GATEWAY_TIMEOUT;
    }
    /**
     * @return {?}
     */
    handleError() {
        this.globalMessageService.add({ key: 'httpHandlers.gatewayTimeout' }, GlobalMessageType.MSG_TYPE_ERROR);
    }
}
GatewayTimeoutHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ GatewayTimeoutHandler.ngInjectableDef = ɵɵdefineInjectable({ factory: function GatewayTimeoutHandler_Factory() { return new GatewayTimeoutHandler(ɵɵinject(GlobalMessageService)); }, token: GatewayTimeoutHandler, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NotFoundHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.NOT_FOUND;
    }
    // empty error handler to avoid we fallabck to the unknown error handler
    /**
     * @return {?}
     */
    handleError() { }
}
NotFoundHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ NotFoundHandler.ngInjectableDef = ɵɵdefineInjectable({ factory: function NotFoundHandler_Factory() { return new NotFoundHandler(ɵɵinject(GlobalMessageService)); }, token: NotFoundHandler, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const errorHandlers = [
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
const httpErrorInterceptors = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpErrorInterceptor,
        multi: true,
    },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GlobalMessageStoreModule {
}
GlobalMessageStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StateModule,
                    StoreModule.forFeature(GLOBAL_MESSAGE_FEATURE, reducerToken$9),
                ],
                providers: [reducerProvider$9],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class GlobalMessageConfig extends ServerConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GlobalMessageEffect {
    /**
     * @param {?} actions$
     * @param {?} store
     * @param {?} config
     */
    constructor(actions$, store, config) {
        this.actions$ = actions$;
        this.store = store;
        this.config = config;
        this.hideAfterDelay$ = this.actions$.pipe(ofType(ADD_MESSAGE), pluck('payload', 'type'), mergeMap((/**
         * @param {?} type
         * @return {?}
         */
        (type) => {
            /** @type {?} */
            const config = this.config.globalMessages[type];
            return this.store.select(getGlobalMessageCountByType(type)).pipe(filter((/**
             * @param {?} count
             * @return {?}
             */
            (count) => config && config.timeout !== undefined && count && count > 0)), switchMap((/**
             * @param {?} count
             * @return {?}
             */
            (count) => of(new RemoveMessage({
                type,
                index: count - 1,
            })).pipe(delay(config.timeout)))));
        })));
    }
}
GlobalMessageEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GlobalMessageEffect.ctorParameters = () => [
    { type: Actions },
    { type: Store },
    { type: GlobalMessageConfig }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], GlobalMessageEffect.prototype, "hideAfterDelay$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function defaultGlobalMessageConfigFactory() {
    return {
        globalMessages: {
            [GlobalMessageType.MSG_TYPE_CONFIRMATION]: {
                timeout: 3000,
            },
            [GlobalMessageType.MSG_TYPE_INFO]: {
                timeout: 3000,
            },
            [GlobalMessageType.MSG_TYPE_ERROR]: {
                timeout: 7000,
            },
        },
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GlobalMessageModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: GlobalMessageModule,
            providers: [...errorHandlers, ...httpErrorInterceptors],
        };
    }
}
GlobalMessageModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    GlobalMessageStoreModule,
                    EffectsModule.forFeature([GlobalMessageEffect]),
                    ConfigModule.withConfigFactory(defaultGlobalMessageConfigFactory),
                ],
                providers: [
                    GlobalMessageService,
                    { provide: GlobalMessageConfig, useExisting: Config },
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class UserAdapter {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    get(userId) {
        return this.adapter.load(userId);
    }
    /**
     * @param {?} username
     * @param {?} user
     * @return {?}
     */
    update(username, user) {
        return this.adapter.update(username, user);
    }
    /**
     * @param {?} user
     * @return {?}
     */
    register(user) {
        return this.adapter.register(user);
    }
    /**
     * @param {?} userEmailAddress
     * @return {?}
     */
    requestForgotPasswordEmail(userEmailAddress) {
        return this.adapter.requestForgotPasswordEmail(userEmailAddress);
    }
    /**
     * @param {?} token
     * @param {?} newPassword
     * @return {?}
     */
    resetPassword(token, newPassword) {
        return this.adapter.resetPassword(token, newPassword);
    }
    /**
     * @param {?} userId
     * @param {?} currentPassword
     * @param {?} newUserId
     * @return {?}
     */
    updateEmail(userId, currentPassword, newUserId) {
        return this.adapter.updateEmail(userId, currentPassword, newUserId);
    }
    /**
     * @param {?} userId
     * @param {?} oldPassword
     * @param {?} newPassword
     * @return {?}
     */
    updatePassword(userId, oldPassword, newPassword) {
        return this.adapter.updatePassword(userId, oldPassword, newPassword);
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    remove(userId) {
        return this.adapter.remove(userId);
    }
    /**
     * @return {?}
     */
    getTitles() {
        return this.adapter.loadTitles();
    }
}
UserConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
UserConnector.ctorParameters = () => [
    { type: UserAdapter }
];
/** @nocollapse */ UserConnector.ngInjectableDef = ɵɵdefineInjectable({ factory: function UserConnector_Factory() { return new UserConnector(ɵɵinject(UserAdapter)); }, token: UserConnector, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ForgotPasswordEffects {
    /**
     * @param {?} actions$
     * @param {?} userAccountConnector
     */
    constructor(actions$, userAccountConnector) {
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.requestForgotPasswordEmail$ = this.actions$.pipe(ofType(FORGOT_PASSWORD_EMAIL_REQUEST), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            return action.payload;
        })), concatMap((/**
         * @param {?} userEmailAddress
         * @return {?}
         */
        userEmailAddress => {
            return this.userAccountConnector
                .requestForgotPasswordEmail(userEmailAddress)
                .pipe(switchMap((/**
             * @return {?}
             */
            () => [
                new ForgotPasswordEmailRequestSuccess(),
                new AddMessage({
                    text: { key: 'forgottenPassword.passwordResetEmailSent' },
                    type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
                }),
            ])), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new ForgotPasswordEmailRequestFail(makeErrorSerializable(error))))));
        })));
    }
}
ForgotPasswordEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ForgotPasswordEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserConnector }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], ForgotPasswordEffects.prototype, "requestForgotPasswordEmail$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class UserOrderAdapter {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserOrderConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @param {?} orderCode
     * @return {?}
     */
    get(userId, orderCode) {
        return this.adapter.load(userId, orderCode);
    }
    /**
     * @param {?} userId
     * @param {?=} pageSize
     * @param {?=} currentPage
     * @param {?=} sort
     * @return {?}
     */
    getHistory(userId, pageSize, currentPage, sort) {
        return this.adapter.loadHistory(userId, pageSize, currentPage, sort);
    }
}
UserOrderConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
UserOrderConnector.ctorParameters = () => [
    { type: UserOrderAdapter }
];
/** @nocollapse */ UserOrderConnector.ngInjectableDef = ɵɵdefineInjectable({ factory: function UserOrderConnector_Factory() { return new UserOrderConnector(ɵɵinject(UserOrderAdapter)); }, token: UserOrderConnector, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderDetailsEffect {
    /**
     * @param {?} actions$
     * @param {?} orderConnector
     */
    constructor(actions$, orderConnector) {
        this.actions$ = actions$;
        this.orderConnector = orderConnector;
        this.loadOrderDetails$ = this.actions$.pipe(ofType(LOAD_ORDER_DETAILS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.orderConnector.get(payload.userId, payload.orderCode).pipe(map((/**
             * @param {?} order
             * @return {?}
             */
            (order) => {
                return new LoadOrderDetailsSuccess(order);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new LoadOrderDetailsFail(makeErrorSerializable(error))))));
        })));
    }
}
OrderDetailsEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OrderDetailsEffect.ctorParameters = () => [
    { type: Actions },
    { type: UserOrderConnector }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], OrderDetailsEffect.prototype, "loadOrderDetails$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class UserPaymentAdapter {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserPaymentConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    getAll(userId) {
        return this.adapter.loadAll(userId);
    }
    /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    delete(userId, paymentMethodID) {
        return this.adapter.delete(userId, paymentMethodID);
    }
    /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    setDefault(userId, paymentMethodID) {
        return this.adapter.setDefault(userId, paymentMethodID);
    }
}
UserPaymentConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
UserPaymentConnector.ctorParameters = () => [
    { type: UserPaymentAdapter }
];
/** @nocollapse */ UserPaymentConnector.ngInjectableDef = ɵɵdefineInjectable({ factory: function UserPaymentConnector_Factory() { return new UserPaymentConnector(ɵɵinject(UserPaymentAdapter)); }, token: UserPaymentConnector, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserPaymentMethodsEffects {
    /**
     * @param {?} actions$
     * @param {?} userPaymentMethodConnector
     */
    constructor(actions$, userPaymentMethodConnector) {
        this.actions$ = actions$;
        this.userPaymentMethodConnector = userPaymentMethodConnector;
        this.loadUserPaymentMethods$ = this.actions$.pipe(ofType(LOAD_USER_PAYMENT_METHODS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.userPaymentMethodConnector.getAll(payload).pipe(map((/**
             * @param {?} payments
             * @return {?}
             */
            (payments) => {
                return new LoadUserPaymentMethodsSuccess(payments);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new LoadUserPaymentMethodsFail(makeErrorSerializable(error))))));
        })));
        this.setDefaultUserPaymentMethod$ = this.actions$.pipe(ofType(SET_DEFAULT_USER_PAYMENT_METHOD), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.userPaymentMethodConnector
                .setDefault(payload.userId, payload.paymentMethodId)
                .pipe(switchMap((/**
             * @param {?} data
             * @return {?}
             */
            data => [
                new SetDefaultUserPaymentMethodSuccess(data),
                new LoadUserPaymentMethods(payload.userId),
            ])), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new SetDefaultUserPaymentMethodFail(makeErrorSerializable(error))))));
        })));
        this.deleteUserPaymentMethod$ = this.actions$.pipe(ofType(DELETE_USER_PAYMENT_METHOD), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.userPaymentMethodConnector
                .delete(payload.userId, payload.paymentMethodId)
                .pipe(switchMap((/**
             * @param {?} data
             * @return {?}
             */
            data => [
                new DeleteUserPaymentMethodSuccess(data),
                new LoadUserPaymentMethods(payload.userId),
            ])), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new DeleteUserPaymentMethodFail(makeErrorSerializable(error))))));
        })));
    }
}
UserPaymentMethodsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserPaymentMethodsEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserPaymentConnector }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RegionsEffects {
    /**
     * @param {?} actions$
     * @param {?} siteConnector
     */
    constructor(actions$, siteConnector) {
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.loadRegions$ = this.actions$.pipe(ofType(LOAD_REGIONS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            return action.payload;
        })), switchMap((/**
         * @param {?} countryCode
         * @return {?}
         */
        (countryCode) => {
            return this.siteConnector.getRegions(countryCode).pipe(map((/**
             * @param {?} regions
             * @return {?}
             */
            regions => new LoadRegionsSuccess({
                entities: regions,
                country: countryCode,
            }))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new LoadRegionsFail(makeErrorSerializable(error))))));
        })));
        this.resetRegions$ = this.actions$.pipe(ofType(CLEAR_MISCS_DATA, CLEAR_REGIONS), map((/**
         * @return {?}
         */
        () => {
            return new LoaderResetAction(REGIONS);
        })));
    }
}
RegionsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RegionsEffects.ctorParameters = () => [
    { type: Actions },
    { type: SiteConnector }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], RegionsEffects.prototype, "loadRegions$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], RegionsEffects.prototype, "resetRegions$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResetPasswordEffects {
    /**
     * @param {?} actions$
     * @param {?} userAccountConnector
     */
    constructor(actions$, userAccountConnector) {
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.resetPassword$ = this.actions$.pipe(ofType(RESET_PASSWORD), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ token, password }) => {
            return this.userAccountConnector.resetPassword(token, password).pipe(switchMap((/**
             * @return {?}
             */
            () => [
                new ResetPasswordSuccess(),
                new AddMessage({
                    text: { key: 'forgottenPassword.passwordResetSuccess' },
                    type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
                }),
            ])), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new ResetPasswordFail(makeErrorSerializable(error))))));
        })));
    }
}
ResetPasswordEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ResetPasswordEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserConnector }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], ResetPasswordEffects.prototype, "resetPassword$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TitlesEffects {
    /**
     * @param {?} actions$
     * @param {?} userAccountConnector
     */
    constructor(actions$, userAccountConnector) {
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.loadTitles$ = this.actions$.pipe(ofType(LOAD_TITLES), switchMap((/**
         * @return {?}
         */
        () => {
            return this.userAccountConnector.getTitles().pipe(map((/**
             * @param {?} titles
             * @return {?}
             */
            titles => {
                /** @type {?} */
                const sortedTitles = this.sortTitles(titles);
                return new LoadTitlesSuccess(sortedTitles);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new LoadTitlesFail(makeErrorSerializable(error))))));
        })));
    }
    /**
     * @private
     * @param {?} titles
     * @return {?}
     */
    sortTitles(titles) {
        /** @type {?} */
        const drTitle = { code: 'dr', name: 'Dr.' };
        /** @type {?} */
        const revTitle = { code: 'rev', name: 'Rev.' };
        /** @type {?} */
        const filteredTitles = titles.filter((/**
         * @param {?} t
         * @return {?}
         */
        t => t.code !== 'dr' && t.code !== 'rev'));
        /** @type {?} */
        const sortedTitles = [...filteredTitles, drTitle, revTitle];
        return sortedTitles;
    }
}
TitlesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TitlesEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserConnector }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], TitlesEffects.prototype, "loadTitles$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UpdateEmailEffects {
    /**
     * @param {?} actions$
     * @param {?} userAccountConnector
     */
    constructor(actions$, userAccountConnector) {
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.updateEmail$ = this.actions$.pipe(ofType(UPDATE_EMAIL), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), concatMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.userAccountConnector
            .updateEmail(payload.uid, payload.password, payload.newUid)
            .pipe(map((/**
         * @return {?}
         */
        () => new UpdateEmailSuccessAction(payload.newUid))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new UpdateEmailErrorAction(makeErrorSerializable(error)))))))));
    }
}
UpdateEmailEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UpdateEmailEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserConnector }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], UpdateEmailEffects.prototype, "updateEmail$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UpdatePasswordEffects {
    /**
     * @param {?} actions$
     * @param {?} userAccountConnector
     */
    constructor(actions$, userAccountConnector) {
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.updatePassword$ = this.actions$.pipe(ofType(UPDATE_PASSWORD), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), concatMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.userAccountConnector
            .updatePassword(payload.userId, payload.oldPassword, payload.newPassword)
            .pipe(map((/**
         * @param {?} _
         * @return {?}
         */
        _ => new UpdatePasswordSuccess())), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new UpdatePasswordFail(makeErrorSerializable(error)))))))));
    }
}
UpdatePasswordEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UpdatePasswordEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserConnector }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], UpdatePasswordEffects.prototype, "updatePassword$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserAddressesEffects {
    /**
     * @param {?} actions$
     * @param {?} userAddressConnector
     * @param {?} userAddressService
     * @param {?} messageService
     */
    constructor(actions$, userAddressConnector, userAddressService, messageService) {
        this.actions$ = actions$;
        this.userAddressConnector = userAddressConnector;
        this.userAddressService = userAddressService;
        this.messageService = messageService;
        this.loadUserAddresses$ = this.actions$.pipe(ofType(LOAD_USER_ADDRESSES), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.userAddressConnector.getAll(payload).pipe(map((/**
             * @param {?} addresses
             * @return {?}
             */
            (addresses) => {
                return new LoadUserAddressesSuccess(addresses);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new LoadUserAddressesFail(makeErrorSerializable(error))))));
        })));
        this.addUserAddress$ = this.actions$.pipe(ofType(ADD_USER_ADDRESS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.userAddressConnector
                .add(payload.userId, payload.address)
                .pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                return new AddUserAddressSuccess(data);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new AddUserAddressFail(makeErrorSerializable(error))))));
        })));
        this.updateUserAddress$ = this.actions$.pipe(ofType(UPDATE_USER_ADDRESS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.userAddressConnector
                .update(payload.userId, payload.addressId, payload.address)
                .pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                // don't show the message if just setting address as default
                if (payload.address &&
                    Object.keys(payload.address).length === 1 &&
                    payload.address.defaultAddress) {
                    return new LoadUserAddresses(USERID_CURRENT);
                }
                else {
                    return new UpdateUserAddressSuccess(data);
                }
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new UpdateUserAddressFail(makeErrorSerializable(error))))));
        })));
        this.deleteUserAddress$ = this.actions$.pipe(ofType(DELETE_USER_ADDRESS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.userAddressConnector
                .delete(payload.userId, payload.addressId)
                .pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                return new DeleteUserAddressSuccess(data);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new DeleteUserAddressFail(makeErrorSerializable(error))))));
        })));
        /**
         *  Reload addresses and notify about add success
         */
        this.showGlobalMessageOnAddSuccess$ = this.actions$.pipe(ofType(ADD_USER_ADDRESS_SUCCESS), tap((/**
         * @return {?}
         */
        () => {
            this.loadAddresses();
            this.showGlobalMessage('addressForm.userAddressAddSuccess');
        })));
        /**
         *  Reload addresses and notify about update success
         */
        this.showGlobalMessageOnUpdateSuccess$ = this.actions$.pipe(ofType(UPDATE_USER_ADDRESS_SUCCESS), tap((/**
         * @return {?}
         */
        () => {
            this.loadAddresses();
            this.showGlobalMessage('addressForm.userAddressUpdateSuccess');
        })));
        /**
         *  Reload addresses and notify about delete success
         */
        this.showGlobalMessageOnDeleteSuccess$ = this.actions$.pipe(ofType(DELETE_USER_ADDRESS_SUCCESS), tap((/**
         * @return {?}
         */
        () => {
            this.loadAddresses();
            this.showGlobalMessage('addressForm.userAddressDeleteSuccess');
        })));
    }
    /**
     * Show global confirmation message with provided text
     * @private
     * @param {?} text
     * @return {?}
     */
    showGlobalMessage(text) {
        this.messageService.add({ key: text }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    }
    /**
     * @private
     * @return {?}
     */
    loadAddresses() {
        this.userAddressService.loadAddresses();
    }
}
UserAddressesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserAddressesEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserAddressConnector },
    { type: UserAddressService },
    { type: GlobalMessageService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class UserConsentAdapter {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserConsentConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    loadConsents(userId) {
        return this.adapter.loadConsents(userId);
    }
    /**
     * @param {?} userId
     * @param {?} consentTemplateId
     * @param {?} consentTemplateVersion
     * @return {?}
     */
    giveConsent(userId, consentTemplateId, consentTemplateVersion) {
        return this.adapter.giveConsent(userId, consentTemplateId, consentTemplateVersion);
    }
    /**
     * @param {?} userId
     * @param {?} consentCode
     * @return {?}
     */
    withdrawConsent(userId, consentCode) {
        return this.adapter.withdrawConsent(userId, consentCode);
    }
}
UserConsentConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
UserConsentConnector.ctorParameters = () => [
    { type: UserConsentAdapter }
];
/** @nocollapse */ UserConsentConnector.ngInjectableDef = ɵɵdefineInjectable({ factory: function UserConsentConnector_Factory() { return new UserConsentConnector(ɵɵinject(UserConsentAdapter)); }, token: UserConsentConnector, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserConsentsEffect {
    /**
     * @param {?} actions$
     * @param {?} userConsentConnector
     */
    constructor(actions$, userConsentConnector) {
        this.actions$ = actions$;
        this.userConsentConnector = userConsentConnector;
        this.getConsents$ = this.actions$.pipe(ofType(LOAD_USER_CONSENTS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} userId
         * @return {?}
         */
        userId => this.userConsentConnector.loadConsents(userId).pipe(map((/**
         * @param {?} consents
         * @return {?}
         */
        consents => new LoadUserConsentsSuccess(consents))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new LoadUserConsentsFail(makeErrorSerializable(error)))))))));
        this.giveConsent$ = this.actions$.pipe(ofType(GIVE_USER_CONSENT), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ userId, consentTemplateId, consentTemplateVersion }) => this.userConsentConnector
            .giveConsent(userId, consentTemplateId, consentTemplateVersion)
            .pipe(map((/**
         * @param {?} consent
         * @return {?}
         */
        consent => new GiveUserConsentSuccess(consent))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new GiveUserConsentFail(makeErrorSerializable(error)))))))));
        this.withdrawConsent$ = this.actions$.pipe(ofType(WITHDRAW_USER_CONSENT), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ userId, consentCode }) => this.userConsentConnector.withdrawConsent(userId, consentCode).pipe(map((/**
         * @param {?} _
         * @return {?}
         */
        _ => new WithdrawUserConsentSuccess())), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new WithdrawUserConsentFail(makeErrorSerializable(error)))))))));
    }
}
UserConsentsEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserConsentsEffect.ctorParameters = () => [
    { type: Actions },
    { type: UserConsentConnector }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserDetailsEffects {
    /**
     * @param {?} actions$
     * @param {?} userConnector
     */
    constructor(actions$, userConnector) {
        this.actions$ = actions$;
        this.userConnector = userConnector;
        this.loadUserDetails$ = this.actions$.pipe(ofType(LOAD_USER_DETAILS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} userId
         * @return {?}
         */
        userId => {
            return this.userConnector.get(userId).pipe(map((/**
             * @param {?} user
             * @return {?}
             */
            (user) => {
                return new LoadUserDetailsSuccess(user);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new LoadUserDetailsFail(makeErrorSerializable(error))))));
        })));
        this.updateUserDetails$ = this.actions$.pipe(ofType(UPDATE_USER_DETAILS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), concatMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.userConnector.update(payload.username, payload.userDetails).pipe(map((/**
         * @param {?} _
         * @return {?}
         */
        _ => new UpdateUserDetailsSuccess(payload.userDetails))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new UpdateUserDetailsFail(makeErrorSerializable(error)))))))));
    }
}
UserDetailsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserDetailsEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserConnector }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], UserDetailsEffects.prototype, "loadUserDetails$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], UserDetailsEffects.prototype, "updateUserDetails$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserOrdersEffect {
    /**
     * @param {?} actions$
     * @param {?} orderConnector
     */
    constructor(actions$, orderConnector) {
        this.actions$ = actions$;
        this.orderConnector = orderConnector;
        this.loadUserOrders$ = this.actions$.pipe(ofType(LOAD_USER_ORDERS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.orderConnector
                .getHistory(payload.userId, payload.pageSize, payload.currentPage, payload.sort)
                .pipe(map((/**
             * @param {?} orders
             * @return {?}
             */
            (orders) => {
                return new LoadUserOrdersSuccess(orders);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new LoadUserOrdersFail(makeErrorSerializable(error))))));
        })));
        this.resetUserOrders$ = this.actions$.pipe(ofType(CLEAR_MISCS_DATA, CLEAR_USER_ORDERS), map((/**
         * @return {?}
         */
        () => {
            return new LoaderResetAction(USER_ORDERS);
        })));
    }
}
UserOrdersEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserOrdersEffect.ctorParameters = () => [
    { type: Actions },
    { type: UserOrderConnector }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], UserOrdersEffect.prototype, "loadUserOrders$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], UserOrdersEffect.prototype, "resetUserOrders$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserRegisterEffects {
    /**
     * @param {?} actions$
     * @param {?} userConnector
     */
    constructor(actions$, userConnector) {
        this.actions$ = actions$;
        this.userConnector = userConnector;
        this.registerUser$ = this.actions$.pipe(ofType(REGISTER_USER), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} user
         * @return {?}
         */
        (user) => this.userConnector.register(user).pipe(switchMap((/**
         * @param {?} _result
         * @return {?}
         */
        _result => [
            new LoadUserToken({
                userId: user.uid,
                password: user.password,
            }),
            new RegisterUserSuccess(),
        ])), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new RegisterUserFail(makeErrorSerializable(error)))))))));
        this.removeUser$ = this.actions$.pipe(ofType(REMOVE_USER), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} userId
         * @return {?}
         */
        (userId) => {
            return this.userConnector.remove(userId).pipe(switchMap((/**
             * @param {?} _result
             * @return {?}
             */
            _result => [
                new RemoveUserSuccess(),
                new Logout(),
            ])), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new RemoveUserFail(makeErrorSerializable(error))))));
        })));
    }
}
UserRegisterEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserRegisterEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserConnector }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], UserRegisterEffects.prototype, "registerUser$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], UserRegisterEffects.prototype, "removeUser$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const effects$7 = [
    ClearMiscsDataEffect,
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserStoreModule {
}
UserStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    StateModule,
                    StoreModule.forFeature(USER_FEATURE, reducerToken$7, { metaReducers: metaReducers$4 }),
                    EffectsModule.forFeature(effects$7),
                    RouterModule,
                ],
                providers: [reducerProvider$7],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserModule {
}
UserModule.decorators = [
    { type: NgModule, args: [{
                imports: [UserStoreModule, ProcessModule],
                providers: [UserService],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const USER_NORMALIZER = new InjectionToken('UserNormalizer');
/** @type {?} */
const USER_SERIALIZER = new InjectionToken('UserSerializer');
/** @type {?} */
const USER_SIGN_UP_SERIALIZER = new InjectionToken('UserSignUpSerializer');
/** @type {?} */
const TITLE_NORMALIZER = new InjectionToken('TitleNormalizer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ADDRESS_NORMALIZER = new InjectionToken('AddressNormalizer');
/** @type {?} */
const ADDRESS_SERIALIZER = new InjectionToken('AddressSerializer');
/** @type {?} */
const ADDRESS_VALIDATION_NORMALIZER = new InjectionToken('AddressValidationNormalizer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CONSENT_TEMPLATE_NORMALIZER = new InjectionToken('ConsentTemplateNormalizer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ORDER_HISTORY_NORMALIZER = new InjectionToken('OrderHistoryNormalizer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class I18nConfig extends ServerConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// type CxDatePipe, not DatePipe, due to conflict with Angular's DatePipe - problem occurs for the backward compatibility compiler of Ivy
class CxDatePipe extends DatePipe {
    /**
     * @param {?} language
     * @param {?} config
     */
    constructor(language, config) {
        super(null);
        this.language = language;
        this.config = config;
    }
    /**
     * @param {?} value
     * @param {?=} format
     * @param {?=} timezone
     * @return {?}
     */
    transform(value, format, timezone) {
        return super.transform(value, format, timezone, this.getLang());
    }
    /**
     * @private
     * @return {?}
     */
    getLang() {
        /** @type {?} */
        const lang = this.getActiveLang();
        try {
            getLocaleId(lang);
            return lang;
        }
        catch (_a) {
            this.reportMissingLocaleData(lang);
            return 'en';
        }
    }
    /**
     * @private
     * @return {?}
     */
    getActiveLang() {
        /** @type {?} */
        let result;
        this.language
            .getActive()
            .subscribe((/**
         * @param {?} lang
         * @return {?}
         */
        lang => (result = lang)))
            .unsubscribe();
        return result;
    }
    /**
     * @private
     * @param {?} lang
     * @return {?}
     */
    reportMissingLocaleData(lang) {
        if (!this.config.production) {
            console.warn(`cxDate pipe: No locale data registered for '${lang}' (see https://angular.io/api/common/registerLocaleData).`);
        }
    }
}
CxDatePipe.decorators = [
    { type: Pipe, args: [{ name: 'cxDate' },] }
];
/** @nocollapse */
CxDatePipe.ctorParameters = () => [
    { type: LanguageService },
    { type: I18nConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslatePipe {
    /**
     * @param {?} service
     * @param {?} cd
     */
    constructor(service, cd) {
        this.service = service;
        this.cd = cd;
    }
    /**
     * @param {?} input
     * @param {?=} options
     * @return {?}
     */
    transform(input, options = {}) {
        if (((/** @type {?} */ (input))).raw) {
            return ((/** @type {?} */ (input))).raw;
        }
        /** @type {?} */
        const key = typeof input === 'string' ? input : input.key;
        if (typeof input !== 'string') {
            options = Object.assign({}, options, input.params);
        }
        this.translate(key, options);
        return this.translatedValue;
    }
    /**
     * @private
     * @param {?} key
     * @param {?} options
     * @return {?}
     */
    translate(key, options) {
        if (key !== this.lastKey ||
            !shallowEqualObjects(options, this.lastOptions)) {
            this.lastKey = key;
            this.lastOptions = options;
            if (this.sub) {
                this.sub.unsubscribe();
            }
            this.sub = this.service
                .translate(key, options, true)
                .subscribe((/**
             * @param {?} val
             * @return {?}
             */
            val => this.markForCheck(val)));
        }
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    markForCheck(value) {
        this.translatedValue = value;
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
TranslatePipe.decorators = [
    { type: Pipe, args: [{ name: 'cxTranslate', pure: false },] }
];
/** @nocollapse */
TranslatePipe.ctorParameters = () => [
    { type: TranslationService },
    { type: ChangeDetectorRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslationChunkService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this.duplicates = {};
        this.chunks = {};
        this.KEY_SEPARATOR = '.';
        Object.keys(config.i18n.chunks).forEach((/**
         * @param {?} chunk
         * @return {?}
         */
        chunk => {
            config.i18n.chunks[chunk].forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                if (this.chunks.hasOwnProperty(key)) {
                    if (!this.duplicates[key]) {
                        this.duplicates[key] = [this.chunks[key]];
                    }
                    this.duplicates[key].push(chunk);
                }
                else {
                    this.chunks[key] = chunk;
                }
            }));
        }));
        if (Object.keys(this.duplicates).length > 0 && !this.config.production) {
            this.warnDuplicates(this.duplicates);
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getChunkNameForKey(key) {
        /** @type {?} */
        const mainKey = (key || '').split(this.KEY_SEPARATOR)[0];
        /** @type {?} */
        const chunk = this.chunks && this.chunks[mainKey];
        if (!chunk) {
            return mainKey; // fallback to main key as a chunk
        }
        return chunk;
    }
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    warnDuplicates(items) {
        /** @type {?} */
        const dupes = [];
        Object.keys(items).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            dupes.push(`* '${key}' found in chunks: ${items[key].join(', ')}. Used '${this.chunks[key]}.${key}'.`);
        }));
        console.warn(`Duplicated keys has been found in the config of i18n chunks:\n${dupes.join('\n')}`);
    }
}
TranslationChunkService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TranslationChunkService.ctorParameters = () => [
    { type: I18nConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @param {?} languageService
 * @return {?}
 */
function i18nextInit(config, languageService) {
    return (/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        let i18nextConfig = {
            ns: [],
            // don't preload any namespaces
            fallbackLng: config.i18n.fallbackLang,
            debug: config.i18n.debug,
            interpolation: {
                escapeValue: false,
            },
        };
        if (config.i18n.backend) {
            i18next.use(i18nextXhrBackend);
            i18nextConfig = Object.assign({}, i18nextConfig, { backend: config.i18n.backend });
        }
        return i18next.init(i18nextConfig, (/**
         * @return {?}
         */
        () => {
            // Don't use i18next's 'resources' config key for adding static translations,
            // because it will disable loading chunks from backend. We add resources here, in the init's callback.
            i18nextAddTranslations(config.i18n.resources);
            syncI18nextWithSiteContext(languageService);
        }));
    });
}
/**
 * @param {?=} resources
 * @return {?}
 */
function i18nextAddTranslations(resources = {}) {
    Object.keys(resources).forEach((/**
     * @param {?} lang
     * @return {?}
     */
    lang => {
        Object.keys(resources[lang]).forEach((/**
         * @param {?} chunkName
         * @return {?}
         */
        chunkName => {
            i18next.addResourceBundle(lang, chunkName, resources[lang][chunkName], true, true);
        }));
    }));
}
/**
 * @param {?} language
 * @return {?}
 */
function syncI18nextWithSiteContext(language) {
    // always update language of i18next on site context (language) change
    language.getActive().subscribe((/**
     * @param {?} lang
     * @return {?}
     */
    lang => i18next.changeLanguage(lang)));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$s = i18nextInit;
/** @type {?} */
const i18nextProviders = [
    {
        provide: APP_INITIALIZER,
        useFactory: ɵ0$s,
        deps: [I18nConfig, LanguageService],
        multi: true,
    },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultI18nConfig = {
    i18n: {
        fallbackLang: false,
        debug: false,
        chunks: {
            common: [
                'common',
                'spinner',
                'searchBox',
                'navigation',
                'sorting',
                'httpHandlers',
                'pageMetaResolver',
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class I18nextTranslationService {
    /**
     * @param {?} config
     * @param {?} translationChunk
     */
    constructor(config, translationChunk) {
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
    translate(key, options = {}, whitespaceUntilLoaded = false) {
        // If we've already loaded the chunk (or failed to load), we should immediately emit the value
        // (or the fallback value in case the key is missing).
        // If we've already loaded the chunk (or failed to load), we should immediately emit the value
        // (or the fallback value in case the key is missing).
        // Moreover, we SHOULD emit a value (or a fallback value) synchronously (not in a promise/setTimeout).
        // Otherwise, we the will trigger additional deferred change detection in a view that consumes the returned observable,
        // which together with `switchMap` operator may lead to an infinite loop.
        /** @type {?} */
        const chunkName = this.translationChunk.getChunkNameForKey(key);
        /** @type {?} */
        const namespacedKey = this.getNamespacedKey(key, chunkName);
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        subscriber => {
            /** @type {?} */
            const translate = (/**
             * @return {?}
             */
            () => {
                if (i18next.exists(namespacedKey, options)) {
                    subscriber.next(i18next.t(namespacedKey, options));
                }
                else {
                    if (whitespaceUntilLoaded) {
                        subscriber.next(this.NON_BREAKING_SPACE);
                    }
                    i18next.loadNamespaces(chunkName, (/**
                     * @return {?}
                     */
                    () => {
                        if (!i18next.exists(namespacedKey, options)) {
                            this.reportMissingKey(key, chunkName);
                            subscriber.next(this.getFallbackValue(namespacedKey));
                        }
                        else {
                            subscriber.next(i18next.t(namespacedKey, options));
                        }
                    }));
                }
            });
            translate();
            i18next.on('languageChanged', translate);
            return (/**
             * @return {?}
             */
            () => i18next.off('languageChanged', translate));
        }));
    }
    /**
     * @param {?} chunkNames
     * @return {?}
     */
    loadChunks(chunkNames) {
        return i18next.loadNamespaces(chunkNames);
    }
    /**
     * Returns a fallback value in case when the given key is missing
     * @protected
     * @param {?} key
     * @return {?}
     */
    getFallbackValue(key) {
        return this.config.production ? this.NON_BREAKING_SPACE : `[${key}]`;
    }
    /**
     * @private
     * @param {?} key
     * @param {?} chunkName
     * @return {?}
     */
    reportMissingKey(key, chunkName) {
        if (!this.config.production) {
            console.warn(`Translation key missing '${key}' in the chunk '${chunkName}'`);
        }
    }
    /**
     * @private
     * @param {?} key
     * @param {?} chunk
     * @return {?}
     */
    getNamespacedKey(key, chunk) {
        return chunk + this.NAMESPACE_SEPARATOR + key;
    }
}
I18nextTranslationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
I18nextTranslationService.ctorParameters = () => [
    { type: I18nConfig },
    { type: TranslationChunkService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class I18nModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: I18nModule,
            providers: [
                provideConfig(defaultI18nConfig),
                { provide: I18nConfig, useExisting: Config },
                { provide: TranslationService, useClass: I18nextTranslationService },
                TranslationChunkService,
                ...i18nextProviders,
            ],
        };
    }
}
I18nModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TranslatePipe, CxDatePipe],
                exports: [TranslatePipe, CxDatePipe],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} key
 * @param {?=} options
 * @return {?}
 */
function mockTranslate(key, options = {}) {
    /** @type {?} */
    const optionsString = Object.keys(options)
        .sort()
        .map((/**
     * @param {?} optionName
     * @return {?}
     */
    optionName => `${optionName}:${options[optionName]}`))
        .join(' ');
    return optionsString ? `${key} ${optionsString}` : key;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockTranslatePipe {
    /**
     * @param {?} input
     * @param {?=} options
     * @return {?}
     */
    transform(input, options = {}) {
        if (((/** @type {?} */ (input))).raw) {
            return ((/** @type {?} */ (input))).raw;
        }
        /** @type {?} */
        const key = typeof input === 'string' ? input : input.key;
        if (typeof input !== 'string') {
            options = Object.assign({}, options, input.params);
        }
        return mockTranslate(key, options);
    }
}
MockTranslatePipe.decorators = [
    { type: Pipe, args: [{ name: 'cxTranslate' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockTranslationService {
    /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} _whitespaceUntilLoaded
     * @return {?}
     */
    translate(key, options = {}, _whitespaceUntilLoaded = false) {
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        subscriber => {
            /** @type {?} */
            const value = mockTranslate(key, options);
            subscriber.next(value);
            subscriber.complete();
        }));
    }
    /**
     * @param {?} _chunks
     * @return {?}
     */
    loadChunks(_chunks) {
        return Promise.resolve();
    }
}
MockTranslationService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockDatePipe extends DatePipe {
    /**
     * @param {?} value
     * @param {?=} format
     * @param {?=} timezone
     * @return {?}
     */
    transform(value, format, timezone) {
        return super.transform(value, format, timezone, 'en');
    }
}
MockDatePipe.decorators = [
    { type: Pipe, args: [{ name: 'cxDate' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class I18nTestingModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CxApiService {
    /**
     * @param {?} auth
     * @param {?} cms
     * @param {?} routing
     * @param {?} currency
     * @param {?} language
     * @param {?} product
     * @param {?} productSearch
     * @param {?} productReview
     * @param {?} user
     * @param {?} translation
     */
    constructor(auth, cms, routing, currency, language, product, productSearch, productReview, user, translation) {
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
}
CxApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CxApiService.ctorParameters = () => [
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
];
/** @nocollapse */ CxApiService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CxApiService_Factory() { return new CxApiService(ɵɵinject(AuthService, 8), ɵɵinject(CmsService, 8), ɵɵinject(RoutingService, 8), ɵɵinject(CurrencyService, 8), ɵɵinject(LanguageService, 8), ɵɵinject(ProductService, 8), ɵɵinject(ProductSearchService, 8), ɵɵinject(ProductReviewService, 8), ɵɵinject(UserService, 8), ɵɵinject(TranslationService, 8)); }, token: CxApiService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class KymaConfig extends OccConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const KYMA_FEATURE = 'kyma';
/** @type {?} */
const OPEN_ID_TOKEN_DATA = '[Kyma Auth] Open ID Token Data';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_OPEN_ID_TOKEN = '[Kyma] Load Open ID Token';
/** @type {?} */
const LOAD_OPEN_ID_TOKEN_FAIL = '[Kyma] Load Open ID Token Fail';
/** @type {?} */
const LOAD_OPEN_ID_TOKEN_SUCCESS = '[Kyma] Load Open ID Token Success';
class LoadOpenIdToken extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(OPEN_ID_TOKEN_DATA);
        this.payload = payload;
        this.type = LOAD_OPEN_ID_TOKEN;
    }
}
class LoadOpenIdTokenFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(OPEN_ID_TOKEN_DATA, payload);
        this.payload = payload;
        this.type = LOAD_OPEN_ID_TOKEN_FAIL;
    }
}
class LoadOpenIdTokenSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(OPEN_ID_TOKEN_DATA);
        this.payload = payload;
        this.type = LOAD_OPEN_ID_TOKEN_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getKymaState = createFeatureSelector(KYMA_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$t = /**
 * @param {?} state
 * @return {?}
 */
state => state.openIdToken;
/** @type {?} */
const getOpenIdTokenState = createSelector(getKymaState, (ɵ0$t));
/** @type {?} */
const getOpenIdTokenValue = createSelector(getOpenIdTokenState, loaderValueSelector);
/** @type {?} */
const getOpenIdTokenLoading = createSelector(getOpenIdTokenState, loaderLoadingSelector);
/** @type {?} */
const getOpenIdTokenSuccess = createSelector(getOpenIdTokenState, loaderSuccessSelector);
/** @type {?} */
const getOpenIdTokenError = createSelector(getOpenIdTokenState, loaderErrorSelector);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class KymaService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Authorizes using the Kyma OAuth client with scope `openid`.
     *
     * @param {?} username a username
     * @param {?} password a password
     * @return {?}
     */
    authorizeOpenId(username, password) {
        this.store.dispatch(new LoadOpenIdToken({ username, password }));
    }
    /**
     * Returns the `OpenIdToken`, which was previously retrieved using `authorizeOpenId` method.
     * @return {?}
     */
    getOpenIdToken() {
        return this.store.pipe(select(getOpenIdTokenValue));
    }
}
KymaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
KymaService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ KymaService.ngInjectableDef = ɵɵdefineInjectable({ factory: function KymaService_Factory() { return new KymaService(ɵɵinject(Store)); }, token: KymaService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultKymaConfig = {
    authentication: {
        kyma_enabled: false,
        kyma_client_id: 'client4kyma',
        kyma_client_secret: 'secret',
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const OAUTH_ENDPOINT$4 = '/authorizationserver/oauth/token';
class OpenIdAuthenticationTokenService {
    /**
     * @param {?} config
     * @param {?} http
     */
    constructor(config, http) {
        this.config = config;
        this.http = http;
    }
    /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    loadOpenIdAuthenticationToken(username, password) {
        /** @type {?} */
        const url = this.getOAuthEndpoint();
        /** @type {?} */
        const params = new HttpParams()
            .set('client_id', encodeURIComponent(this.config.authentication.kyma_client_id))
            .set('client_secret', encodeURIComponent(this.config.authentication.kyma_client_secret))
            .set('grant_type', 'password') // authorization_code, client_credentials, password
            .set('username', username)
            .set('password', password)
            .set('scope', 'openid');
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(url, params, { headers })
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => throwError(error))));
    }
    /**
     * @private
     * @return {?}
     */
    getOAuthEndpoint() {
        return (this.config.backend.occ.baseUrl || '') + OAUTH_ENDPOINT$4;
    }
}
OpenIdAuthenticationTokenService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OpenIdAuthenticationTokenService.ctorParameters = () => [
    { type: KymaConfig },
    { type: HttpClient }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const KymaServices = [OpenIdAuthenticationTokenService];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OpenIdTokenEffect {
    /**
     * @param {?} actions$
     * @param {?} openIdTokenService
     * @param {?} config
     */
    constructor(actions$, openIdTokenService, config) {
        this.actions$ = actions$;
        this.openIdTokenService = openIdTokenService;
        this.config = config;
        this.triggerOpenIdTokenLoading$ = iif((/**
         * @return {?}
         */
        () => this.config.authentication && this.config.authentication.kyma_enabled), this.actions$.pipe(ofType(LOAD_USER_TOKEN_SUCCESS), withLatestFrom(this.actions$.pipe(ofType(LOAD_USER_TOKEN))), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([, loginAction]) => new LoadOpenIdToken({
            username: loginAction.payload.userId,
            password: loginAction.payload.password,
        })))));
        this.loadOpenIdToken$ = this.actions$.pipe(ofType(LOAD_OPEN_ID_TOKEN), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), exhaustMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.openIdTokenService
            .loadOpenIdAuthenticationToken(payload.username, payload.password)
            .pipe(map((/**
         * @param {?} token
         * @return {?}
         */
        token => new LoadOpenIdTokenSuccess(token))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new LoadOpenIdTokenFail(makeErrorSerializable(error)))))))));
    }
}
OpenIdTokenEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OpenIdTokenEffect.ctorParameters = () => [
    { type: Actions },
    { type: OpenIdAuthenticationTokenService },
    { type: KymaConfig }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], OpenIdTokenEffect.prototype, "triggerOpenIdTokenLoading$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], OpenIdTokenEffect.prototype, "loadOpenIdToken$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const effects$8 = [OpenIdTokenEffect];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$a() {
    return {
        openIdToken: loaderReducer(OPEN_ID_TOKEN_DATA),
    };
}
/** @type {?} */
const reducerToken$a = new InjectionToken('KymaReducers');
/** @type {?} */
const reducerProvider$a = {
    provide: reducerToken$a,
    useFactory: getReducers$a,
};
/**
 * @param {?} reducer
 * @return {?}
 */
function clearKymaState(reducer) {
    return (/**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function (state, action) {
        if (action.type === LOGOUT) {
            state = Object.assign({}, state, { openIdToken: undefined });
        }
        return reducer(state, action);
    });
}
/** @type {?} */
const metaReducers$5 = [clearKymaState];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function kymaStoreConfigFactory() {
    // if we want to reuse KYMA_FEATURE const in config, we have to use factory instead of plain object
    /** @type {?} */
    const config = {
        state: {
            storageSync: {
                keys: {
                    'kyma.openIdToken.value': StorageSyncType.LOCAL_STORAGE,
                },
            },
        },
    };
    return config;
}
class KymaStoreModule {
}
KymaStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    StateModule,
                    StoreModule.forFeature(KYMA_FEATURE, reducerToken$a, { metaReducers: metaReducers$5 }),
                    EffectsModule.forFeature(effects$8),
                    ConfigModule.withConfigFactory(kymaStoreConfigFactory),
                ],
                providers: [reducerProvider$a],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class KymaModule {
}
KymaModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    KymaStoreModule,
                    ConfigModule.withConfig(defaultKymaConfig),
                ],
                providers: [...KymaServices, { provide: KymaConfig, useExisting: Config }],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ImageType = {
    PRIMARY: 'PRIMARY',
    GALLERY: 'GALLERY',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const PriceType = {
    BUY: 'BUY',
    FROM: 'FROM',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const testestsd = 'sare';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const OCC_BASE_URL_META_TAG_NAME = 'occ-backend-base-url';
/** @type {?} */
const OCC_BASE_URL_META_TAG_PLACEHOLDER = 'OCC_BACKEND_BASE_URL_VALUE';
/** @type {?} */
const MEDIA_BASE_URL_META_TAG_NAME = 'media-backend-base-url';
/** @type {?} */
const MEDIA_BASE_URL_META_TAG_PLACEHOLDER = 'MEDIA_BACKEND_BASE_URL_VALUE';
/**
 * @param {?} meta
 * @return {?}
 */
function occServerConfigFromMetaTagFactory(meta) {
    /** @type {?} */
    const baseUrl = getMetaTagContent(OCC_BASE_URL_META_TAG_NAME, meta);
    return baseUrl && baseUrl !== OCC_BASE_URL_META_TAG_PLACEHOLDER
        ? { backend: { occ: { baseUrl } } }
        : {};
}
/**
 * @param {?} meta
 * @return {?}
 */
function mediaServerConfigFromMetaTagFactory(meta) {
    /** @type {?} */
    const baseUrl = getMetaTagContent(MEDIA_BASE_URL_META_TAG_NAME, meta);
    return baseUrl && baseUrl !== MEDIA_BASE_URL_META_TAG_PLACEHOLDER
        ? { backend: { media: { baseUrl } } }
        : {};
}
/**
 * @param {?} name
 * @param {?} meta
 * @return {?}
 */
function getMetaTagContent(name, meta) {
    /** @type {?} */
    const metaTag = meta.getTag(`name="${name}"`);
    return metaTag && metaTag.content;
}
/**
 * @return {?}
 */
function provideConfigFromMetaTags() {
    return [
        provideConfigFactory(occServerConfigFromMetaTagFactory, [Meta]),
        provideConfigFactory(mediaServerConfigFromMetaTagFactory, [Meta]),
    ];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultOccConfig = {
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    let PriceType;
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
    let ImageType;
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
    let Fields;
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
    let Fields1;
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
    let Fields2;
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
    let Fields3;
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
    let Fields4;
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
    let Fields5;
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
    let Fields6;
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
    let PageType;
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
    let Fields7;
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
    let Fields8;
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
    let Fields9;
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
    let Fields10;
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
    let Fields11;
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
    let Fields12;
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
    let Fields13;
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
    let Fields14;
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
    let Fields15;
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
    let Fields16;
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
    let SortEnum;
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
    let Fields17;
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
    let Fields18;
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
    let Fields19;
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
    let Fields20;
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
    let Fields21;
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
    let Fields22;
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
    let Fields23;
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
    let Fields24;
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
    let Fields25;
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
    let Fields26;
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
    let Fields27;
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
    let Fields28;
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
    let Fields29;
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
    let Fields30;
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
    let Fields31;
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
    let Fields32;
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
    let Fields33;
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
    let Fields34;
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
    let Fields35;
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
    let Fields36;
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
    let Fields37;
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
    let Fields38;
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
    let Fields39;
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
    let Fields40;
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
    let Fields41;
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
    let Fields42;
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
    let Fields43;
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
    let Fields44;
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
    let Fields45;
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
    let Fields46;
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
    let Fields47;
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
    let Fields48;
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
    let Fields49;
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
    let Fields50;
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
    let Fields51;
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
    let Fields52;
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
    let Fields53;
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
    let Fields54;
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
    let Fields55;
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
    let Fields56;
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
    let Fields57;
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
    let Fields58;
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
    let Fields59;
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
    let Fields60;
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
    let Fields61;
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
    let Type;
    (function (Type) {
        Type["All"] = "all";
        Type["Product"] = "product";
        Type["Order"] = "order";
    })(Type = Occ.Type || (Occ.Type = {}));
    /**
     * @record
     */
    function ConsentTemplate() { }
    Occ.ConsentTemplate = ConsentTemplate;
    /**
     * @record
     */
    function Consent() { }
    Occ.Consent = Consent;
    /**
     * @record
     */
    function ConsentTemplateList() { }
    Occ.ConsentTemplateList = ConsentTemplateList;
})(Occ || (Occ = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConverterService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.converters = new Map();
    }
    /**
     * @private
     * @template S, T
     * @param {?} injectionToken
     * @return {?}
     */
    getConverters(injectionToken) {
        if (!this.converters.has(injectionToken)) {
            /** @type {?} */
            const converters = this.injector.get(injectionToken, []);
            if (!Array.isArray(converters)) {
                console.warn('Converter must be multi-provided, please use "multi: true" for', injectionToken.toString());
            }
            this.converters.set(injectionToken, converters);
        }
        return this.converters.get(injectionToken);
    }
    /**
     * Will return true if converters for specified token were provided
     * @template S, T
     * @param {?} injectionToken
     * @return {?}
     */
    hasConverters(injectionToken) {
        /** @type {?} */
        const converters = this.getConverters(injectionToken);
        return Array.isArray(converters) && converters.length > 0;
    }
    /**
     * Pipeable operator to apply converter logic in a observable stream
     * @template S, T
     * @param {?} injectionToken
     * @return {?}
     */
    pipeable(injectionToken) {
        if (this.hasConverters(injectionToken)) {
            return map((/**
             * @param {?} model
             * @return {?}
             */
            (model) => this.convertSource(model, injectionToken)));
        }
        else {
            return (/**
             * @param {?} observable
             * @return {?}
             */
            (observable) => (/** @type {?} */ (observable)));
        }
    }
    /**
     * Pipeable operator to apply converter logic in a observable stream to collection of items
     * @template S, T
     * @param {?} injectionToken
     * @return {?}
     */
    pipeableMany(injectionToken) {
        if (this.hasConverters(injectionToken)) {
            return map((/**
             * @param {?} model
             * @return {?}
             */
            (model) => this.convertMany(model, injectionToken)));
        }
        else {
            return (/**
             * @param {?} observable
             * @return {?}
             */
            (observable) => (/** @type {?} */ (observable)));
        }
    }
    /**
     * Apply converter logic specified by injection token to source data
     * @template S, T
     * @param {?} source
     * @param {?} injectionToken
     * @return {?}
     */
    convert(source, injectionToken) {
        if (this.hasConverters(injectionToken)) {
            return this.convertSource(source, injectionToken);
        }
        else {
            return (/** @type {?} */ (source));
        }
    }
    /**
     * Apply converter logic specified by injection token to a collection
     * @template S, T
     * @param {?} sources
     * @param {?} injectionToken
     * @return {?}
     */
    convertMany(sources, injectionToken) {
        if (this.hasConverters(injectionToken) && Array.isArray(sources)) {
            return sources.map((/**
             * @param {?} source
             * @return {?}
             */
            source => this.convertSource(source, injectionToken)));
        }
        else {
            return (/** @type {?} */ (sources));
        }
    }
    /**
     * @private
     * @template S, T
     * @param {?} source
     * @param {?} injectionToken
     * @return {?}
     */
    convertSource(source, injectionToken) {
        return this.getConverters(injectionToken).reduce((/**
         * @param {?} target
         * @param {?} converter
         * @return {?}
         */
        (target, converter) => {
            return converter.convert(source, target);
        }), (/** @type {?} */ (undefined)));
    }
}
ConverterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ConverterService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ ConverterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConverterService_Factory() { return new ConverterService(ɵɵinject(INJECTOR)); }, token: ConverterService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OccCmsComponentAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
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
    load(id, pageContext) {
        return this.http
            .get(this.getComponentEndPoint(id, pageContext), {
            headers: this.headers,
        })
            .pipe(this.converter.pipeable(CMS_COMPONENT_NORMALIZER));
    }
    /**
     * @param {?} ids
     * @param {?} pageContext
     * @param {?=} fields
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} sort
     * @return {?}
     */
    findComponentsByIds(ids, pageContext, fields = 'DEFAULT', currentPage = 0, pageSize = ids.length, sort) {
        /** @type {?} */
        const requestParams = Object.assign({}, this.getContextParams(pageContext), this.getPaginationParams(currentPage, pageSize, sort));
        requestParams['componentIds'] = ids.toString();
        return this.http
            .get(this.getComponentsEndpoint(requestParams, fields), {
            headers: this.headers,
        })
            .pipe(pluck('component'), this.converter.pipeableMany(CMS_COMPONENT_NORMALIZER));
    }
    /**
     * @param {?} ids
     * @param {?} pageContext
     * @param {?=} fields
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} sort
     * @return {?}
     */
    findComponentsByIdsLegacy(ids, pageContext, fields = 'DEFAULT', currentPage = 0, pageSize = ids.length, sort) {
        /** @type {?} */
        const idList = { idList: ids };
        /** @type {?} */
        const requestParams = Object.assign({}, this.getContextParams(pageContext), this.getPaginationParams(currentPage, pageSize, sort));
        return this.http
            .post(this.getComponentsEndpoint(requestParams, fields), idList, {
            headers: this.headers,
        })
            .pipe(pluck('component'), this.converter.pipeableMany(CMS_COMPONENT_NORMALIZER));
    }
    /**
     * @protected
     * @param {?} id
     * @param {?} pageContext
     * @return {?}
     */
    getComponentEndPoint(id, pageContext) {
        return this.occEndpoints.getUrl('component', { id }, this.getContextParams(pageContext));
    }
    /**
     * @protected
     * @param {?} requestParams
     * @param {?} fields
     * @return {?}
     */
    getComponentsEndpoint(requestParams, fields) {
        return this.occEndpoints.getUrl('components', { fields }, requestParams);
    }
    /**
     * @private
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} sort
     * @return {?}
     */
    getPaginationParams(currentPage, pageSize, sort) {
        /** @type {?} */
        const requestParams = {};
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
    }
    /**
     * @private
     * @param {?} pageContext
     * @return {?}
     */
    getContextParams(pageContext) {
        /** @type {?} */
        let requestParams = {};
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
    }
}
OccCmsComponentAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCmsComponentAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OccCmsPageNormalizer {
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    convert(source, target = {}) {
        this.normalizePageData(source, target);
        this.normalizePageSlotData(source, target);
        this.normalizePageComponentData(source, target);
        this.normalizeComponentData(source, target);
        return target;
    }
    /**
     * @private
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    normalizePageData(source, target) {
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
    }
    /**
     * @private
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    normalizePageSlotData(source, target) {
        for (const slot of source.contentSlots.contentSlot) {
            target.page.slots[slot.position] = (/** @type {?} */ ({
                components: [],
                properties: slot.properties,
            }));
        }
    }
    /**
     * @private
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    normalizePageComponentData(source, target) {
        for (const slot of source.contentSlots.contentSlot) {
            if (slot.components.component &&
                Array.isArray(slot.components.component)) {
                for (const component of slot.components.component) {
                    /** @type {?} */
                    const comp = {
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
        }
    }
    /**
     * @private
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    normalizeComponentData(source, target) {
        target.components = [];
        for (const slot of source.contentSlots.contentSlot) {
            if (slot.components.component &&
                Array.isArray(slot.components.component)) {
                for (const component of (/** @type {?} */ (slot.components.component))) {
                    // we dont put properties into component state
                    if (component.properties) {
                        component.properties = undefined;
                    }
                    target.components.push(component);
                }
            }
        }
    }
}
OccCmsPageNormalizer.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OccCmsPageAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
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
    load(pageContext, fields) {
        // load page by Id
        if (pageContext.type === undefined) {
            return this.http
                .get(this.occEndpoints.getUrl('page', {
                id: pageContext.id,
                fields: fields ? fields : 'DEFAULT',
            }), {
                headers: this.headers,
            })
                .pipe(this.converter.pipeable(CMS_PAGE_NORMALIZER));
        }
        // load page by PageContext
        /** @type {?} */
        const httpParams = this.getPagesRequestParams(pageContext);
        return this.http
            .get(this.getPagesEndpoint(httpParams, fields), {
            headers: this.headers,
        })
            .pipe(this.converter.pipeable(CMS_PAGE_NORMALIZER));
    }
    /**
     * @private
     * @param {?} params
     * @param {?=} fields
     * @return {?}
     */
    getPagesEndpoint(params, fields) {
        fields = fields ? fields : 'DEFAULT';
        return this.occEndpoints.getUrl('pages', { fields }, params);
    }
    /**
     * @private
     * @param {?} pageContext
     * @return {?}
     */
    getPagesRequestParams(pageContext) {
        /** @type {?} */
        let httpParams = {};
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
    }
}
OccCmsPageAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCmsPageAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CmsOccModule {
}
CmsOccModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpClientModule],
                providers: [
                    {
                        provide: CmsPageAdapter,
                        useClass: OccCmsPageAdapter,
                    },
                    {
                        provide: CMS_PAGE_NORMALIZER,
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// for mini cart
/** @type {?} */
const BASIC_PARAMS = 'DEFAULT,deliveryItemsQuantity,totalPrice(formattedValue),' +
    'entries(totalPrice(formattedValue),product(images(FULL)))';
// for cart details page
/** @type {?} */
const DETAILS_PARAMS = 'DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,' +
    'entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue)),' +
    'totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),' +
    'deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue),pickupItemsQuantity,net,' +
    'appliedVouchers,productDiscounts(formattedValue)';
class OccCartAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @protected
     * @param {?} userId
     * @return {?}
     */
    getCartEndpoint(userId) {
        /** @type {?} */
        const cartEndpoint = `users/${userId}/carts/`;
        return this.occEndpoints.getEndpoint(cartEndpoint);
    }
    /**
     * @param {?} userId
     * @param {?=} details
     * @return {?}
     */
    loadAll(userId, details) {
        /** @type {?} */
        const url = this.getCartEndpoint(userId);
        /** @type {?} */
        const params = details
            ? new HttpParams({
                fromString: `fields=carts(${DETAILS_PARAMS},saveTime)`,
            })
            : new HttpParams({
                fromString: `fields=carts(${BASIC_PARAMS},saveTime)`,
            });
        return this.http.get(url, { params: params }).pipe(pluck('carts'), this.converter.pipeableMany(CART_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?=} details
     * @return {?}
     */
    load(userId, cartId, details) {
        /** @type {?} */
        const url = this.getCartEndpoint(userId) + cartId;
        /** @type {?} */
        const params = details
            ? new HttpParams({
                fromString: `fields=${DETAILS_PARAMS}`,
            })
            : new HttpParams({
                fromString: `fields=${BASIC_PARAMS}`,
            });
        if (cartId === 'current') {
            return this.loadAll(userId, details).pipe(map((/**
             * @param {?} carts
             * @return {?}
             */
            carts => {
                if (carts) {
                    /** @type {?} */
                    const activeCart = carts.find((/**
                     * @param {?} cart
                     * @return {?}
                     */
                    cart => {
                        return cart['saveTime'] === undefined;
                    }));
                    return activeCart;
                }
                else {
                    return null;
                }
            })));
        }
        else {
            return this.http
                .get(url, { params: params })
                .pipe(this.converter.pipeable(CART_NORMALIZER));
        }
    }
    /**
     * @param {?} userId
     * @param {?=} oldCartId
     * @param {?=} toMergeCartGuid
     * @return {?}
     */
    create(userId, oldCartId, toMergeCartGuid) {
        /** @type {?} */
        const url = this.getCartEndpoint(userId);
        /** @type {?} */
        const toAdd = JSON.stringify({});
        /** @type {?} */
        let queryString = `fields=${BASIC_PARAMS}`;
        if (oldCartId) {
            queryString = `${queryString}&oldCartId=${oldCartId}`;
        }
        if (toMergeCartGuid) {
            queryString = `${queryString}&toMergeCartGuid=${toMergeCartGuid}`;
        }
        /** @type {?} */
        const params = new HttpParams({
            fromString: queryString,
        });
        return this.http
            .post(url, toAdd, { params: params })
            .pipe(this.converter.pipeable(CART_NORMALIZER));
    }
}
OccCartAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCartAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OccCartEntryAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @protected
     * @param {?} userId
     * @return {?}
     */
    getCartEndpoint(userId) {
        /** @type {?} */
        const cartEndpoint = 'users/' + userId + '/carts/';
        return this.occEndpoints.getEndpoint(cartEndpoint);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} productCode
     * @param {?=} quantity
     * @return {?}
     */
    add(userId, cartId, productCode, quantity = 1) {
        /** @type {?} */
        const toAdd = JSON.stringify({});
        /** @type {?} */
        const url = this.getCartEndpoint(userId) + cartId + '/entries';
        /** @type {?} */
        const params = new HttpParams({
            fromString: 'code=' + productCode + '&qty=' + quantity,
        });
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(url, toAdd, { headers, params })
            .pipe(this.converter.pipeable(CART_MODIFICATION_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @param {?} qty
     * @param {?=} pickupStore
     * @return {?}
     */
    update(userId, cartId, entryNumber, qty, pickupStore) {
        /** @type {?} */
        const url = this.getCartEndpoint(userId) + cartId + '/entries/' + entryNumber;
        /** @type {?} */
        let queryString = 'qty=' + qty;
        if (pickupStore) {
            queryString = queryString + '&pickupStore=' + pickupStore;
        }
        /** @type {?} */
        const params = new HttpParams({
            fromString: queryString,
        });
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .patch(url, {}, { headers, params })
            .pipe(this.converter.pipeable(CART_MODIFICATION_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @return {?}
     */
    remove(userId, cartId, entryNumber) {
        /** @type {?} */
        const url = this.getCartEndpoint(userId) + cartId + '/entries/' + entryNumber;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http.delete(url, { headers });
    }
}
OccCartEntryAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCartEntryAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OccCartNormalizer {
    /**
     * @param {?} converter
     */
    constructor(converter) {
        this.converter = converter;
    }
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign({}, ((/** @type {?} */ (source))));
        }
        if (source && source.entries) {
            target.entries = source.entries.map((/**
             * @param {?} entry
             * @return {?}
             */
            entry => (Object.assign({}, entry, { product: this.converter.convert(entry.product, PRODUCT_NORMALIZER) }))));
        }
        return target;
    }
}
OccCartNormalizer.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCartNormalizer.ctorParameters = () => [
    { type: ConverterService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartOccModule {
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
                        provide: CartEntryAdapter,
                        useClass: OccCartEntryAdapter,
                    },
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OccProductReferencesListNormalizer {
    /**
     * @param {?} converter
     */
    constructor(converter) {
        this.converter = converter;
    }
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    convert(source, target = []) {
        if (target === undefined) {
            target = Object.assign({}, ((/** @type {?} */ (source))));
        }
        if (source && source.references) {
            target = source.references.map((/**
             * @param {?} reference
             * @return {?}
             */
            reference => (Object.assign({}, reference, { target: this.converter.convert(reference.target, PRODUCT_NORMALIZER) }))));
            return target;
        }
    }
}
OccProductReferencesListNormalizer.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccProductReferencesListNormalizer.ctorParameters = () => [
    { type: ConverterService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OccProductSearchPageNormalizer {
    /**
     * @param {?} converterService
     */
    constructor(converterService) {
        this.converterService = converterService;
    }
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    convert(source, target = {}) {
        target = Object.assign({}, target, ((/** @type {?} */ (source))));
        if (source.products) {
            target.products = source.products.map((/**
             * @param {?} product
             * @return {?}
             */
            product => this.converterService.convert(product, PRODUCT_NORMALIZER)));
        }
        return target;
    }
}
OccProductSearchPageNormalizer.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccProductSearchPageNormalizer.ctorParameters = () => [
    { type: ConverterService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductImageNormalizer {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
    }
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign({}, ((/** @type {?} */ (source))));
        }
        if (source.images) {
            target.images = this.normalize(source.images);
        }
        return target;
    }
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
    normalize(source) {
        /** @type {?} */
        const images = {};
        if (source) {
            for (const image of source) {
                /** @type {?} */
                const isList = image.hasOwnProperty('galleryIndex');
                if (!images.hasOwnProperty(image.imageType)) {
                    images[image.imageType] = isList ? [] : {};
                }
                /** @type {?} */
                let imageContainer;
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
        return images;
    }
}
ProductImageNormalizer.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductImageNormalizer.ctorParameters = () => [
    { type: OccConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OccProductReferencesAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
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
    load(productCode, referenceType, pageSize) {
        return this.http
            .get(this.getEndpoint(productCode, referenceType, pageSize))
            .pipe(this.converter.pipeable(PRODUCT_REFERENCES_NORMALIZER));
    }
    /**
     * @protected
     * @param {?} code
     * @param {?=} reference
     * @param {?=} pageSize
     * @return {?}
     */
    getEndpoint(code, reference, pageSize) {
        return this.occEndpoints.getUrl('productReferences', {
            productCode: code,
        }, { referenceType: reference, pageSize });
    }
}
OccProductReferencesAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccProductReferencesAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OccProductReviewsAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @param {?} productCode
     * @param {?=} maxCount
     * @return {?}
     */
    load(productCode, maxCount) {
        return this.http.get(this.getEndpoint(productCode, maxCount)).pipe(pluck('reviews'), this.converter.pipeableMany(PRODUCT_REVIEW_NORMALIZER));
    }
    /**
     * @param {?} productCode
     * @param {?} review
     * @return {?}
     */
    post(productCode, review) {
        review = this.converter.convert(review, PRODUCT_REVIEW_SERIALIZER);
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        /** @type {?} */
        const body = new URLSearchParams();
        body.append('headline', review.headline);
        body.append('comment', review.comment);
        body.append('rating', review.rating.toString());
        body.append('alias', review.alias);
        return this.http.post(this.getEndpoint(productCode), body.toString(), {
            headers,
        });
    }
    /**
     * @protected
     * @param {?} code
     * @param {?=} maxCount
     * @return {?}
     */
    getEndpoint(code, maxCount) {
        return this.occEndpoints.getUrl('productReviews', {
            productCode: code,
        }, { maxCount });
    }
}
OccProductReviewsAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccProductReviewsAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_SEARCH_CONFIG = {
    pageSize: 20,
};
class OccProductSearchAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    search(query, searchConfig = DEFAULT_SEARCH_CONFIG) {
        return this.http
            .get(this.getSearchEndpoint(query, searchConfig))
            .pipe(this.converter.pipeable(PRODUCT_SEARCH_PAGE_NORMALIZER));
    }
    /**
     * @param {?} term
     * @param {?=} pageSize
     * @return {?}
     */
    loadSuggestions(term, pageSize = 3) {
        return this.http
            .get(this.getSuggestionEndpoint(term, pageSize.toString()))
            .pipe(pluck('suggestions'), this.converter.pipeableMany(PRODUCT_SUGGESTION_NORMALIZER));
    }
    /**
     * @protected
     * @param {?} query
     * @param {?} searchConfig
     * @return {?}
     */
    getSearchEndpoint(query, searchConfig) {
        return this.occEndpoints.getUrl('productSearch', {
            query,
        }, {
            pageSize: searchConfig.pageSize,
            currentPage: searchConfig.currentPage,
            sort: searchConfig.sortCode,
        });
    }
    /**
     * @protected
     * @param {?} term
     * @param {?} max
     * @return {?}
     */
    getSuggestionEndpoint(term, max) {
        return this.occEndpoints.getUrl('productSuggestions', {
            term,
            max,
        });
    }
}
OccProductSearchAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccProductSearchAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OccProductAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @param {?} productCode
     * @return {?}
     */
    load(productCode) {
        return this.http
            .get(this.getEndpoint(productCode))
            .pipe(this.converter.pipeable(PRODUCT_NORMALIZER));
    }
    /**
     * @protected
     * @param {?} code
     * @return {?}
     */
    getEndpoint(code) {
        return this.occEndpoints.getUrl('product', {
            productCode: code,
        });
    }
}
OccProductAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccProductAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductNameNormalizer {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
    }
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign({}, ((/** @type {?} */ (source))));
        }
        if (source.name) {
            target.name = this.normalize(source.name);
            target.nameHtml = source.name;
        }
        return target;
    }
    /**
     * @protected
     * @param {?} name
     * @return {?}
     */
    normalize(name) {
        return name.replace(/<[^>]*>/g, '');
    }
}
ProductNameNormalizer.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductNameNormalizer.ctorParameters = () => [
    { type: OccConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultOccProductConfig = {
    backend: {
        occ: {
            endpoints: {
                product: 'products/${productCode}?fields=DEFAULT,averageRating,images(FULL),classifications,numberOfReviews,categories(FULL)',
                productReviews: 'products/${productCode}/reviews',
                // Uncomment this when occ gets configured
                // productReferences:
                //   'products/${productCode}/references?fields=DEFAULT,references(target(images(FULL)))&referenceType=${referenceType}',
                productReferences: 'products/${productCode}/references?fields=DEFAULT,references(target(images(FULL)))',
                // tslint:disable:max-line-length
                productSearch: 'products/search?fields=products(code,name,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT),freeTextSearch&query=${query}',
                // tslint:enable
                productSuggestions: 'products/suggestions?term=${term}&max=${max}',
            },
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductOccModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COUNTRIES_ENDPOINT = 'countries';
/** @type {?} */
const REGIONS_ENDPOINT = 'regions';
class OccSiteAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @return {?}
     */
    loadLanguages() {
        return this.http
            .get(this.occEndpoints.getEndpoint('languages'))
            .pipe(map((/**
         * @param {?} languageList
         * @return {?}
         */
        languageList => languageList.languages)), this.converter.pipeableMany(LANGUAGE_NORMALIZER));
    }
    /**
     * @return {?}
     */
    loadCurrencies() {
        return this.http
            .get(this.occEndpoints.getEndpoint('currencies'))
            .pipe(map((/**
         * @param {?} currencyList
         * @return {?}
         */
        currencyList => currencyList.currencies)), this.converter.pipeableMany(CURRENCY_NORMALIZER));
    }
    /**
     * @param {?=} type
     * @return {?}
     */
    loadCountries(type) {
        /** @type {?} */
        let params;
        if (type) {
            params = new HttpParams().set('type', type);
        }
        return this.http
            .get(this.occEndpoints.getEndpoint(COUNTRIES_ENDPOINT), {
            params,
        })
            .pipe(map((/**
         * @param {?} countryList
         * @return {?}
         */
        countryList => countryList.countries)), this.converter.pipeableMany(COUNTRY_NORMALIZER));
    }
    /**
     * @param {?} countryIsoCode
     * @return {?}
     */
    loadRegions(countryIsoCode) {
        /** @type {?} */
        const regionsEndpoint = `${COUNTRIES_ENDPOINT}/${countryIsoCode}/${REGIONS_ENDPOINT}?fields=regions(name,isocode,isocodeShort)`;
        return this.http
            .get(this.occEndpoints.getEndpoint(regionsEndpoint))
            .pipe(map((/**
         * @param {?} regionList
         * @return {?}
         */
        regionList => regionList.regions)), this.converter.pipeableMany(REGION_NORMALIZER));
    }
    /**
     * @return {?}
     */
    loadBaseSite() {
        /** @type {?} */
        const baseUrl = this.occEndpoints.getBaseEndpoint();
        /** @type {?} */
        const urlSplits = baseUrl.split('/');
        /** @type {?} */
        const activeSite = urlSplits.pop();
        /** @type {?} */
        const url = urlSplits.join('/') + '/basesites';
        /** @type {?} */
        const params = new HttpParams({
            fromString: 'fields=FULL',
        });
        return this.http
            .get(url, { params: params })
            .pipe(map((/**
         * @param {?} siteList
         * @return {?}
         */
        siteList => {
            return siteList.baseSites.find((/**
             * @param {?} site
             * @return {?}
             */
            site => site.uid === activeSite));
        })));
    }
}
OccSiteAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccSiteAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SiteContextInterceptor {
    /**
     * @param {?} languageService
     * @param {?} currencyService
     * @param {?} occEndpoints
     * @param {?} config
     */
    constructor(languageService, currencyService, occEndpoints, config) {
        this.languageService = languageService;
        this.currencyService = currencyService;
        this.occEndpoints = occEndpoints;
        this.config = config;
        this.activeLang = this.config.site.language;
        this.activeCurr = this.config.site.currency;
        this.languageService
            .getActive()
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => (this.activeLang = data)));
        this.currencyService
            .getActive()
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => (this.activeCurr = data)));
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        if (request.url.includes(this.occEndpoints.getBaseEndpoint())) {
            request = request.clone({
                setParams: {
                    lang: this.activeLang,
                    curr: this.activeCurr,
                },
            });
        }
        return next.handle(request);
    }
}
SiteContextInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SiteContextInterceptor.ctorParameters = () => [
    { type: LanguageService },
    { type: CurrencyService },
    { type: OccEndpointsService },
    { type: OccConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SiteContextOccModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class StoreFinderAdapter {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    search(query, searchConfig, longitudeLatitude) {
        return this.adapter.search(query, searchConfig, longitudeLatitude);
    }
    /**
     * @return {?}
     */
    getCounts() {
        return this.adapter.loadCounts();
    }
    /**
     * @param {?} storeId
     * @return {?}
     */
    get(storeId) {
        return this.adapter.load(storeId);
    }
}
StoreFinderConnector.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
StoreFinderConnector.ctorParameters = () => [
    { type: StoreFinderAdapter }
];
/** @nocollapse */ StoreFinderConnector.ngInjectableDef = ɵɵdefineInjectable({ factory: function StoreFinderConnector_Factory() { return new StoreFinderConnector(ɵɵinject(StoreFinderAdapter)); }, token: StoreFinderConnector, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const POINT_OF_SERVICE_NORMALIZER = new InjectionToken('PointOfServiceNormalizer');
/** @type {?} */
const STORE_FINDER_SEARCH_PAGE_NORMALIZER = new InjectionToken('StoreFinderSearchPageNormalizer');
/** @type {?} */
const STORE_COUNT_NORMALIZER = new InjectionToken('StoreCountNormalizer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const STORES_ENDPOINT = 'stores';
class OccStoreFinderAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
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
    search(query, searchConfig, longitudeLatitude) {
        return this.callOccFindStores(query, searchConfig, longitudeLatitude).pipe(this.converter.pipeable(STORE_FINDER_SEARCH_PAGE_NORMALIZER));
    }
    /**
     * @return {?}
     */
    loadCounts() {
        /** @type {?} */
        const storeCountUrl = this.getStoresEndpoint('storescounts');
        return this.http.get(storeCountUrl).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ countriesAndRegionsStoreCount }) => countriesAndRegionsStoreCount)), this.converter.pipeableMany(STORE_COUNT_NORMALIZER));
    }
    /**
     * @param {?} storeId
     * @return {?}
     */
    load(storeId) {
        /** @type {?} */
        const storeDetailsUrl = this.getStoresEndpoint(storeId);
        /** @type {?} */
        const params = { fields: 'FULL' };
        return this.http
            .get(storeDetailsUrl, { params })
            .pipe(this.converter.pipeable(POINT_OF_SERVICE_NORMALIZER));
    }
    /**
     * @protected
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    callOccFindStores(query, searchConfig, longitudeLatitude) {
        /** @type {?} */
        const url = this.getStoresEndpoint();
        /** @type {?} */
        let params = new HttpParams({
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
        return this.http.get(url, { params });
    }
    /**
     * @protected
     * @param {?=} url
     * @return {?}
     */
    getStoresEndpoint(url) {
        /** @type {?} */
        const baseUrl = this.occEndpoints.getEndpoint(STORES_ENDPOINT);
        return url ? baseUrl + '/' + url : baseUrl;
    }
}
OccStoreFinderAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccStoreFinderAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderOccModule {
}
StoreFinderOccModule.decorators = [
    { type: NgModule, args: [{
                providers: [{ provide: StoreFinderAdapter, useClass: OccStoreFinderAdapter }],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// To be changed to a more optimised params after ticket: C3PO-1076
/** @type {?} */
const FULL_PARAMS = 'fields=FULL';
class OccUserOrderAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @protected
     * @param {?} userId
     * @return {?}
     */
    getOrderEndpoint(userId) {
        /** @type {?} */
        const orderEndpoint = 'users/' + userId + '/orders';
        return this.occEndpoints.getEndpoint(orderEndpoint);
    }
    /**
     * @param {?} userId
     * @param {?} orderCode
     * @return {?}
     */
    load(userId, orderCode) {
        /** @type {?} */
        const url = this.getOrderEndpoint(userId);
        /** @type {?} */
        const orderUrl = url + '/' + orderCode;
        /** @type {?} */
        const params = new HttpParams({
            fromString: FULL_PARAMS,
        });
        return this.http
            .get(orderUrl, {
            params: params,
        })
            .pipe(this.converter.pipeable(ORDER_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?=} pageSize
     * @param {?=} currentPage
     * @param {?=} sort
     * @return {?}
     */
    loadHistory(userId, pageSize, currentPage, sort) {
        /** @type {?} */
        const url = this.getOrderEndpoint(userId);
        /** @type {?} */
        let params = new HttpParams();
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
            .pipe(this.converter.pipeable(ORDER_HISTORY_NORMALIZER));
    }
}
OccUserOrderAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccUserOrderAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const USER_ENDPOINT = 'users/';
/** @type {?} */
const ADDRESSES_ENDPOINT = '/addresses';
/** @type {?} */
const ADDRESSES_VERIFICATION_ENDPOINT = '/addresses/verification';
class OccUserAddressAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    getUserEndpoint(userId) {
        /** @type {?} */
        const endpoint = `${USER_ENDPOINT}${userId}`;
        return this.occEndpoints.getEndpoint(endpoint);
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    loadAll(userId) {
        /** @type {?} */
        const url = this.getUserEndpoint(userId) + ADDRESSES_ENDPOINT;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http.get(url, { headers }).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error))), map((/**
         * @param {?} addressList
         * @return {?}
         */
        addressList => addressList.addresses)), this.converter.pipeableMany(ADDRESS_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    add(userId, address) {
        /** @type {?} */
        const url = this.getUserEndpoint(userId) + ADDRESSES_ENDPOINT;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        address = this.converter.convert(address, ADDRESS_SERIALIZER);
        return this.http
            .post(url, address, { headers })
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error))));
    }
    /**
     * @param {?} userId
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
    update(userId, addressId, address) {
        /** @type {?} */
        const url = this.getUserEndpoint(userId) + ADDRESSES_ENDPOINT + '/' + addressId;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        address = this.converter.convert(address, ADDRESS_SERIALIZER);
        return this.http
            .patch(url, address, { headers })
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error))));
    }
    /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    verify(userId, address) {
        /** @type {?} */
        const url = this.getUserEndpoint(userId) + ADDRESSES_VERIFICATION_ENDPOINT;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        address = this.converter.convert(address, ADDRESS_SERIALIZER);
        return this.http.post(url, address, { headers }).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error))), this.converter.pipeable(ADDRESS_VALIDATION_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} addressId
     * @return {?}
     */
    delete(userId, addressId) {
        /** @type {?} */
        const url = this.getUserEndpoint(userId) + ADDRESSES_ENDPOINT + '/' + addressId;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .delete(url, { headers })
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error))));
    }
}
OccUserAddressAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccUserAddressAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const USER_ENDPOINT$1 = 'users/';
/** @type {?} */
const FORGOT_PASSWORD_ENDPOINT = '/forgottenpasswordtokens';
/** @type {?} */
const RESET_PASSWORD_ENDPOINT = '/resetpassword';
/** @type {?} */
const UPDATE_EMAIL_ENDPOINT = '/login';
/** @type {?} */
const UPDATE_PASSWORD_ENDPOINT = '/password';
/** @type {?} */
const TITLES_ENDPOINT = 'titles';
class OccUserAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @private
     * @param {?=} userId
     * @return {?}
     */
    getUserEndpoint(userId) {
        /** @type {?} */
        const endpoint = userId ? `${USER_ENDPOINT$1}${userId}` : USER_ENDPOINT$1;
        return this.occEndpoints.getEndpoint(endpoint);
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    load(userId) {
        /** @type {?} */
        const url = this.getUserEndpoint(userId);
        return this.http
            .get(url)
            .pipe(this.converter.pipeable(USER_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} user
     * @return {?}
     */
    update(userId, user) {
        /** @type {?} */
        const url = this.getUserEndpoint(userId);
        user = this.converter.convert(user, USER_SERIALIZER);
        return this.http.patch(url, user);
    }
    /**
     * @param {?} user
     * @return {?}
     */
    register(user) {
        /** @type {?} */
        const url = this.getUserEndpoint();
        /** @type {?} */
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        user = this.converter.convert(user, USER_SIGN_UP_SERIALIZER);
        return this.http
            .post(url, user, { headers })
            .pipe(this.converter.pipeable(USER_NORMALIZER));
    }
    /**
     * @param {?} userEmailAddress
     * @return {?}
     */
    requestForgotPasswordEmail(userEmailAddress) {
        /** @type {?} */
        const url = this.occEndpoints.getEndpoint(FORGOT_PASSWORD_ENDPOINT);
        /** @type {?} */
        const httpParams = new HttpParams().set('userId', userEmailAddress);
        /** @type {?} */
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        return this.http.post(url, httpParams, { headers });
    }
    /**
     * @param {?} token
     * @param {?} newPassword
     * @return {?}
     */
    resetPassword(token, newPassword) {
        /** @type {?} */
        const url = this.occEndpoints.getEndpoint(RESET_PASSWORD_ENDPOINT);
        /** @type {?} */
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        return this.http.post(url, { token, newPassword }, { headers });
    }
    /**
     * @param {?} userId
     * @param {?} currentPassword
     * @param {?} newUserId
     * @return {?}
     */
    updateEmail(userId, currentPassword, newUserId) {
        /** @type {?} */
        const url = this.getUserEndpoint(userId) + UPDATE_EMAIL_ENDPOINT;
        /** @type {?} */
        const httpParams = new HttpParams()
            .set('password', currentPassword)
            .set('newLogin', newUserId);
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http.put(url, httpParams, { headers });
    }
    /**
     * @param {?} userId
     * @param {?} oldPassword
     * @param {?} newPassword
     * @return {?}
     */
    updatePassword(userId, oldPassword, newPassword) {
        /** @type {?} */
        const url = this.getUserEndpoint(userId) + UPDATE_PASSWORD_ENDPOINT;
        /** @type {?} */
        const httpParams = new HttpParams()
            .set('old', oldPassword)
            .set('new', newPassword);
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http.put(url, httpParams, { headers });
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    remove(userId) {
        /** @type {?} */
        const url = this.getUserEndpoint(userId);
        return this.http.delete(url);
    }
    /**
     * @return {?}
     */
    loadTitles() {
        return this.http
            .get(this.occEndpoints.getEndpoint(TITLES_ENDPOINT))
            .pipe(map((/**
         * @param {?} titleList
         * @return {?}
         */
        titleList => titleList.titles)), this.converter.pipeableMany(TITLE_NORMALIZER));
    }
}
OccUserAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccUserAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const USER_ENDPOINT$2 = 'users/';
/** @type {?} */
const PAYMENT_DETAILS_ENDPOINT = '/paymentdetails';
class OccUserPaymentAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    getPaymentDetailsEndpoint(userId) {
        /** @type {?} */
        const endpoint = `${USER_ENDPOINT$2}${userId}${PAYMENT_DETAILS_ENDPOINT}`;
        return this.occEndpoints.getEndpoint(endpoint);
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    loadAll(userId) {
        /** @type {?} */
        const url = this.getPaymentDetailsEndpoint(userId) + '?saved=true';
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http.get(url, { headers }).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error))), map((/**
         * @param {?} methodList
         * @return {?}
         */
        methodList => methodList.payments)), this.converter.pipeableMany(PAYMENT_DETAILS_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    delete(userId, paymentMethodID) {
        /** @type {?} */
        const url = this.getPaymentDetailsEndpoint(userId) + `/${paymentMethodID}`;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .delete(url, { headers })
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error))));
    }
    /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    setDefault(userId, paymentMethodID) {
        /** @type {?} */
        const url = this.getPaymentDetailsEndpoint(userId) + `/${paymentMethodID}`;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .patch(url, 
        // TODO: Remove billingAddress property
        { billingAddress: { titleCode: 'mr' }, defaultPayment: true }, { headers })
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error))));
    }
}
OccUserPaymentAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccUserPaymentAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const USER_ENDPOINT$3 = 'users/';
/** @type {?} */
const CONSENTS_TEMPLATES_ENDPOINT = '/consenttemplates';
/** @type {?} */
const CONSENTS_ENDPOINT = '/consents';
class OccUserConsentAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @private
     * @param {?=} userId
     * @return {?}
     */
    getUserEndpoint(userId) {
        /** @type {?} */
        const endpoint = userId ? `${USER_ENDPOINT$3}${userId}` : USER_ENDPOINT$3;
        return this.occEndpoints.getEndpoint(endpoint);
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    loadConsents(userId) {
        /** @type {?} */
        const url = this.getUserEndpoint(userId) + CONSENTS_TEMPLATES_ENDPOINT;
        /** @type {?} */
        const headers = new HttpHeaders({ 'Cache-Control': 'no-cache' });
        return this.http.get(url, { headers }).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error))), map((/**
         * @param {?} consentList
         * @return {?}
         */
        consentList => consentList.consentTemplates)), this.converter.pipeableMany(CONSENT_TEMPLATE_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} consentTemplateId
     * @param {?} consentTemplateVersion
     * @return {?}
     */
    giveConsent(userId, consentTemplateId, consentTemplateVersion) {
        /** @type {?} */
        const url = this.getUserEndpoint() + userId + CONSENTS_ENDPOINT;
        /** @type {?} */
        const httpParams = new HttpParams()
            .set('consentTemplateId', consentTemplateId)
            .set('consentTemplateVersion', consentTemplateVersion.toString());
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache',
        });
        return this.http
            .post(url, httpParams, { headers })
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => throwError(error))), this.converter.pipeable(CONSENT_TEMPLATE_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} consentCode
     * @return {?}
     */
    withdrawConsent(userId, consentCode) {
        /** @type {?} */
        const headers = new HttpHeaders({
            'Cache-Control': 'no-cache',
        });
        /** @type {?} */
        const url = this.getUserEndpoint() + userId + CONSENTS_ENDPOINT + '/' + consentCode;
        return this.http.delete(url, { headers });
    }
}
OccUserConsentAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccUserConsentAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserOccModule {
}
UserOccModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpClientModule],
                providers: [
                    { provide: UserAdapter, useClass: OccUserAdapter },
                    { provide: UserAddressAdapter, useClass: OccUserAddressAdapter },
                    { provide: UserConsentAdapter, useClass: OccUserConsentAdapter },
                    {
                        provide: UserPaymentAdapter,
                        useClass: OccUserPaymentAdapter,
                    },
                    { provide: UserOrderAdapter, useClass: OccUserOrderAdapter },
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// To be changed to a more optimised params after ticket: C3PO-1076
/** @type {?} */
const FULL_PARAMS$1 = 'fields=FULL';
/** @type {?} */
const CHECKOUT_PARAMS = 'deliveryAddress(FULL),deliveryMode,paymentInfo(FULL)';
/** @type {?} */
const ORDERS_ENDPOINT = '/orders';
/** @type {?} */
const CARTS_ENDPOINT = '/carts/';
class OccCheckoutAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @protected
     * @param {?} userId
     * @param {?} subEndpoint
     * @return {?}
     */
    getEndpoint(userId, subEndpoint) {
        /** @type {?} */
        const orderEndpoint = 'users/' + userId + subEndpoint;
        return this.occEndpoints.getEndpoint(orderEndpoint);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    placeOrder(userId, cartId) {
        /** @type {?} */
        const url = this.getEndpoint(userId, ORDERS_ENDPOINT);
        /** @type {?} */
        const params = new HttpParams({
            fromString: 'cartId=' + cartId + '&' + FULL_PARAMS$1,
        });
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(url, {}, { headers, params })
            .pipe(this.converter.pipeable(ORDER_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    loadCheckoutDetails(userId, cartId) {
        /** @type {?} */
        const url = this.getEndpoint(userId, CARTS_ENDPOINT) + cartId;
        /** @type {?} */
        const params = new HttpParams({
            fromString: `fields=${CHECKOUT_PARAMS}`,
        });
        return this.http.get(url, { params });
    }
}
OccCheckoutAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCheckoutAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OccOrderNormalizer {
    /**
     * @param {?} converter
     */
    constructor(converter) {
        this.converter = converter;
    }
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign({}, ((/** @type {?} */ (source))));
        }
        if (source.entries) {
            target.entries = source.entries.map((/**
             * @param {?} entry
             * @return {?}
             */
            entry => this.convertOrderEntry(entry)));
        }
        if (source.consignments) {
            target.consignments = source.consignments.map((/**
             * @param {?} consignment
             * @return {?}
             */
            consignment => (Object.assign({}, consignment, { entries: consignment.entries.map((/**
                 * @param {?} entry
                 * @return {?}
                 */
                entry => (Object.assign({}, entry, { orderEntry: this.convertOrderEntry(entry.orderEntry) })))) }))));
        }
        if (source.unconsignedEntries) {
            target.unconsignedEntries = source.unconsignedEntries.map((/**
             * @param {?} entry
             * @return {?}
             */
            entry => this.convertOrderEntry(entry)));
        }
        return target;
    }
    /**
     * @private
     * @param {?} source
     * @return {?}
     */
    convertOrderEntry(source) {
        return Object.assign({}, source, { product: this.converter.convert(source.product, PRODUCT_NORMALIZER) });
    }
}
OccOrderNormalizer.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccOrderNormalizer.ctorParameters = () => [
    { type: ConverterService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OccCheckoutDeliveryAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @protected
     * @param {?} userId
     * @return {?}
     */
    getCartEndpoint(userId) {
        /** @type {?} */
        const cartEndpoint = 'users/' + userId + '/carts/';
        return this.occEndpoints.getEndpoint(cartEndpoint);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    createAddress(userId, cartId, address) {
        address = this.converter.convert(address, ADDRESS_SERIALIZER);
        return this.http
            .post(this.getCartEndpoint(userId) + cartId + '/addresses/delivery', address, {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
        })
            .pipe(this.converter.pipeable(ADDRESS_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} addressId
     * @return {?}
     */
    setAddress(userId, cartId, addressId) {
        return this.http.put(this.getCartEndpoint(userId) + cartId + '/addresses/delivery', {}, {
            params: { addressId: addressId },
        });
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} deliveryModeId
     * @return {?}
     */
    setMode(userId, cartId, deliveryModeId) {
        return this.http.put(this.getCartEndpoint(userId) + cartId + '/deliverymode', {}, {
            params: { deliveryModeId: deliveryModeId },
        });
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    getMode(userId, cartId) {
        return this.http
            .get(this.getCartEndpoint(userId) + cartId + '/deliverymode')
            .pipe(this.converter.pipeable(DELIVERY_MODE_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    getSupportedModes(userId, cartId) {
        return this.http
            .get(this.getCartEndpoint(userId) + cartId + '/deliverymodes')
            .pipe(pluck('deliveryModes'), this.converter.pipeableMany(DELIVERY_MODE_NORMALIZER));
    }
}
OccCheckoutDeliveryAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCheckoutDeliveryAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomEncoder {
    /**
     * @param {?} key
     * @return {?}
     */
    encodeKey(key) {
        return encodeURIComponent(key);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    encodeValue(value) {
        return encodeURIComponent(value);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    decodeKey(key) {
        return decodeURIComponent(key);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    decodeValue(value) {
        return decodeURIComponent(value);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ENDPOINT_CARD_TYPES = 'cardtypes';
class OccCheckoutPaymentAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
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
    getCartEndpoint(userId) {
        /** @type {?} */
        const cartEndpoint = 'users/' + userId + '/carts/';
        return this.occEndpoints.getEndpoint(cartEndpoint);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetails
     * @return {?}
     */
    create(userId, cartId, paymentDetails) {
        paymentDetails = this.converter.convert(paymentDetails, PAYMENT_DETAILS_SERIALIZER);
        return this.getProviderSubInfo(userId, cartId).pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            /** @type {?} */
            const labelsMap = this.convertToMap(data.mappingLabels.entry);
            return {
                url: data.postUrl,
                parameters: this.getParamsForPaymentProvider(paymentDetails, data.parameters.entry, labelsMap),
                mappingLabels: labelsMap,
            };
        })), mergeMap((/**
         * @param {?} sub
         * @return {?}
         */
        sub => {
            // create a subscription directly with payment provider
            return this.createSubWithProvider(sub.url, sub.parameters).pipe(map((/**
             * @param {?} response
             * @return {?}
             */
            response => this.extractPaymentDetailsFromHtml(response))), mergeMap((/**
             * @param {?} fromPaymentProvider
             * @return {?}
             */
            fromPaymentProvider => {
                fromPaymentProvider['defaultPayment'] =
                    paymentDetails.defaultPayment;
                fromPaymentProvider['savePaymentInfo'] = true;
                return this.createDetailsWithParameters(userId, cartId, fromPaymentProvider).pipe(this.converter.pipeable(PAYMENT_DETAILS_NORMALIZER));
            })));
        })));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetailsId
     * @return {?}
     */
    set(userId, cartId, paymentDetailsId) {
        return this.http.put(this.getCartEndpoint(userId) + cartId + '/paymentdetails', {}, {
            params: { paymentDetailsId: paymentDetailsId },
        });
    }
    /**
     * @return {?}
     */
    loadCardTypes() {
        return this.http
            .get(this.occEndpoints.getEndpoint(ENDPOINT_CARD_TYPES))
            .pipe(map((/**
         * @param {?} cardTypeList
         * @return {?}
         */
        cardTypeList => cardTypeList.cardTypes)), this.converter.pipeableMany(CARD_TYPE_NORMALIZER));
    }
    /**
     * @protected
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    getProviderSubInfo(userId, cartId) {
        return this.http.get(this.getCartEndpoint(userId) +
            cartId +
            '/payment/sop/request?responseUrl=sampleUrl');
    }
    /**
     * @protected
     * @param {?} postUrl
     * @param {?} parameters
     * @return {?}
     */
    createSubWithProvider(postUrl, parameters) {
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'text/html',
        });
        /** @type {?} */
        let httpParams = new HttpParams({ encoder: new CustomEncoder() });
        Object.keys(parameters).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            httpParams = httpParams.append(key, parameters[key]);
        }));
        return this.http.post(postUrl, httpParams, {
            headers,
            responseType: 'text',
        });
    }
    /**
     * @protected
     * @param {?} userId
     * @param {?} cartId
     * @param {?} parameters
     * @return {?}
     */
    createDetailsWithParameters(userId, cartId, parameters) {
        /** @type {?} */
        let httpParams = new HttpParams({ encoder: new CustomEncoder() });
        Object.keys(parameters).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            httpParams = httpParams.append(key, parameters[key]);
        }));
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http.post(this.getCartEndpoint(userId) + cartId + '/payment/sop/response', httpParams, { headers });
    }
    /**
     * @private
     * @param {?} paymentDetails
     * @param {?} parameters
     * @param {?} mappingLabels
     * @return {?}
     */
    getParamsForPaymentProvider(paymentDetails, parameters, mappingLabels) {
        /** @type {?} */
        const params = this.convertToMap(parameters);
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
        params[mappingLabels['hybris_billTo_region']] =
            paymentDetails.billingAddress.region.isocodeShort;
        params[mappingLabels['hybris_billTo_postalcode']] =
            paymentDetails.billingAddress.postalCode;
        return params;
    }
    /**
     * @private
     * @param {?} html
     * @return {?}
     */
    extractPaymentDetailsFromHtml(html) {
        /** @type {?} */
        const domdoc = this.domparser.parseFromString(html, 'text/xml');
        /** @type {?} */
        const responseForm = domdoc.getElementsByTagName('form')[0];
        /** @type {?} */
        const inputs = responseForm.getElementsByTagName('input');
        /** @type {?} */
        const values = {};
        for (let i = 0; inputs[i]; i++) {
            /** @type {?} */
            const input = inputs[i];
            if (input.getAttribute('name') !== '{}' &&
                input.getAttribute('value') !== '') {
                values[input.getAttribute('name')] = input.getAttribute('value');
            }
        }
        return values;
    }
    /**
     * @private
     * @param {?} paramList
     * @return {?}
     */
    convertToMap(paramList) {
        return paramList.reduce((/**
         * @param {?} result
         * @param {?} item
         * @return {?}
         */
        function (result, item) {
            /** @type {?} */
            const key = item.key;
            result[key] = item.value;
            return result;
        }), {});
    }
}
OccCheckoutPaymentAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCheckoutPaymentAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutOccModule {
}
CheckoutOccModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpClientModule],
                providers: [
                    {
                        provide: CheckoutAdapter,
                        useClass: OccCheckoutAdapter,
                    },
                    { provide: ORDER_NORMALIZER, useClass: OccOrderNormalizer, multi: true },
                    {
                        provide: CheckoutDeliveryAdapter,
                        useClass: OccCheckoutDeliveryAdapter,
                    },
                    {
                        provide: CheckoutPaymentAdapter,
                        useClass: OccCheckoutPaymentAdapter,
                    },
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OccModule {
}
OccModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ConfigModule.withConfig(defaultOccConfig),
                    CmsOccModule,
                    CartOccModule,
                    CheckoutOccModule,
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductReferenceNormalizer {
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign({}, ((/** @type {?} */ (source))));
        }
        if (source.productReferences) {
            target.productReferences = this.normalize(source.productReferences);
        }
        return target;
    }
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
    normalize(source) {
        /** @type {?} */
        const references = {};
        if (source) {
            for (const reference of source) {
                if (!references.hasOwnProperty(reference.referenceType)) {
                    references[reference.referenceType] = [];
                }
                references[reference.referenceType].push(reference);
            }
        }
        return references;
    }
}
ProductReferenceNormalizer.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class PersonalizationConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultPersonalizationConfig = {
    personalization: {
        enabled: false,
        httpHeaderName: {
            id: 'Occ-Personalization-Id',
            timestamp: 'Occ-Personalization-Time',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PERSONALIZATION_ID_KEY = 'personalization-id';
class OccPersonalizationIdInterceptor {
    /**
     * @param {?} config
     * @param {?} occEndpoints
     * @param {?} winRef
     * @param {?} platform
     */
    constructor(config, occEndpoints, winRef, platform) {
        this.config = config;
        this.occEndpoints = occEndpoints;
        this.winRef = winRef;
        this.platform = platform;
        this.enabled = false;
        if (isPlatformBrowser(this.platform)) {
            this.enabled =
                (this.winRef.localStorage && this.config.personalization.enabled) ||
                    false;
            if (this.enabled) {
                this.requestHeader = this.config.personalization.httpHeaderName.id.toLowerCase();
                this.personalizationId = this.winRef.localStorage.getItem(PERSONALIZATION_ID_KEY);
            }
            else if (this.winRef.localStorage.getItem(PERSONALIZATION_ID_KEY)) {
                this.winRef.localStorage.removeItem(PERSONALIZATION_ID_KEY);
            }
        }
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        if (!this.enabled) {
            return next.handle(request);
        }
        if (this.personalizationId &&
            request.url.includes(this.occEndpoints.getBaseEndpoint())) {
            request = request.clone({
                setHeaders: {
                    [this.requestHeader]: this.personalizationId,
                },
            });
        }
        return next.handle(request).pipe(tap((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof HttpResponse) {
                if (event.headers.keys().includes(this.requestHeader)) {
                    /** @type {?} */
                    const receivedId = event.headers.get(this.requestHeader);
                    if (this.personalizationId !== receivedId) {
                        this.personalizationId = receivedId;
                        this.winRef.localStorage.setItem(PERSONALIZATION_ID_KEY, this.personalizationId);
                    }
                }
            }
        })));
    }
}
OccPersonalizationIdInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccPersonalizationIdInterceptor.ctorParameters = () => [
    { type: PersonalizationConfig },
    { type: OccEndpointsService },
    { type: WindowRef },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PERSONALIZATION_TIME_KEY = 'personalization-time';
class OccPersonalizationTimeInterceptor {
    /**
     * @param {?} config
     * @param {?} occEndpoints
     * @param {?} winRef
     * @param {?} platform
     */
    constructor(config, occEndpoints, winRef, platform) {
        this.config = config;
        this.occEndpoints = occEndpoints;
        this.winRef = winRef;
        this.platform = platform;
        this.enabled = false;
        if (isPlatformBrowser(this.platform)) {
            this.enabled =
                (this.winRef.localStorage && this.config.personalization.enabled) ||
                    false;
            if (this.enabled) {
                this.requestHeader = this.config.personalization.httpHeaderName.timestamp.toLowerCase();
                this.timestamp = this.winRef.localStorage.getItem(PERSONALIZATION_TIME_KEY);
            }
            else if (this.winRef.localStorage.getItem(PERSONALIZATION_TIME_KEY)) {
                this.winRef.localStorage.removeItem(PERSONALIZATION_TIME_KEY);
            }
        }
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        if (!this.enabled) {
            return next.handle(request);
        }
        if (this.timestamp &&
            request.url.includes(this.occEndpoints.getBaseEndpoint())) {
            request = request.clone({
                setHeaders: {
                    [this.requestHeader]: this.timestamp,
                },
            });
        }
        return next.handle(request).pipe(tap((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof HttpResponse) {
                if (event.headers.keys().includes(this.requestHeader)) {
                    /** @type {?} */
                    const receivedTimestamp = event.headers.get(this.requestHeader);
                    if (this.timestamp !== receivedTimestamp) {
                        this.timestamp = receivedTimestamp;
                        this.winRef.localStorage.setItem(PERSONALIZATION_TIME_KEY, this.timestamp);
                    }
                }
            }
        })));
    }
}
OccPersonalizationTimeInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccPersonalizationTimeInterceptor.ctorParameters = () => [
    { type: PersonalizationConfig },
    { type: OccEndpointsService },
    { type: WindowRef },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const interceptors$1 = [
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PersonalizationModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: PersonalizationModule,
            providers: [...interceptors$1],
        };
    }
}
PersonalizationModule.decorators = [
    { type: NgModule, args: [{
                imports: [ConfigModule.withConfig(defaultPersonalizationConfig)],
                providers: [{ provide: PersonalizationConfig, useExisting: Config }],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SmartEditService {
    /**
     * @param {?} cmsService
     * @param {?} routingService
     * @param {?} baseSiteService
     * @param {?} zone
     * @param {?} winRef
     */
    constructor(cmsService, routingService, baseSiteService, zone, winRef) {
        this.cmsService = cmsService;
        this.routingService = routingService;
        this.baseSiteService = baseSiteService;
        this.zone = zone;
        this.winRef = winRef;
        this.isPreviewPage = false;
        this.getCmsTicket();
        this.addPageContract();
        if (winRef.nativeWindow) {
            /** @type {?} */
            const window = (/** @type {?} */ (winRef.nativeWindow));
            // rerender components and slots after editing
            window.smartedit = window.smartedit || {};
            window.smartedit.renderComponent = (/**
             * @param {?} componentId
             * @param {?} componentType
             * @param {?} parentId
             * @return {?}
             */
            (componentId, componentType, parentId) => {
                return this.renderComponent(componentId, componentType, parentId);
            });
            // reprocess page
            window.smartedit.reprocessPage = this.reprocessPage;
        }
    }
    /**
     * @return {?}
     */
    get cmsTicketId() {
        return this._cmsTicketId;
    }
    /**
     * @protected
     * @return {?}
     */
    getCmsTicket() {
        combineLatest([
            this.cmsService.getCurrentPage(),
            this.routingService.getRouterState(),
        ])
            .pipe(takeWhile((/**
         * @param {?} __0
         * @return {?}
         */
        ([cmsPage]) => cmsPage === undefined)))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([, routerState]) => {
            if (routerState.nextState && !this._cmsTicketId) {
                this._cmsTicketId = routerState.nextState.queryParams['cmsTicketId'];
                if (this._cmsTicketId) {
                    this.cmsService.launchInSmartEdit = true;
                    this.getDefaultPreviewCode();
                }
            }
        }));
    }
    /**
     * @protected
     * @return {?}
     */
    getDefaultPreviewCode() {
        this.baseSiteService
            .getBaseSiteData()
            .pipe(filter((/**
         * @param {?} site
         * @return {?}
         */
        site => Object.keys(site).length !== 0)), take(1))
            .subscribe((/**
         * @param {?} site
         * @return {?}
         */
        site => {
            this.defaultPreviewCategoryCode = site.defaultPreviewCategoryCode;
            this.defaultPreviewProductCode = site.defaultPreviewProductCode;
        }));
    }
    /**
     * @protected
     * @return {?}
     */
    addPageContract() {
        this.cmsService.getCurrentPage().subscribe((/**
         * @param {?} cmsPage
         * @return {?}
         */
        cmsPage => {
            if (cmsPage && this._cmsTicketId) {
                this._currentPageId = cmsPage.pageId;
                // before adding contract to page, we need redirect to that page
                this.goToPreviewPage(cmsPage);
                // remove old page contract
                /** @type {?} */
                const previousContract = [];
                Array.from(this.winRef.document.body.classList).forEach((/**
                 * @param {?} attr
                 * @return {?}
                 */
                attr => previousContract.push(attr)));
                previousContract.forEach((/**
                 * @param {?} attr
                 * @return {?}
                 */
                attr => this.winRef.document.body.classList.remove(attr)));
                // add new page contract
                if (cmsPage.properties && cmsPage.properties.smartedit) {
                    /** @type {?} */
                    const seClasses = cmsPage.properties.smartedit.classes.split(' ');
                    seClasses.forEach((/**
                     * @param {?} classItem
                     * @return {?}
                     */
                    classItem => {
                        this.winRef.document.body.classList.add(classItem);
                    }));
                }
            }
        }));
    }
    /**
     * @protected
     * @param {?} cmsPage
     * @return {?}
     */
    goToPreviewPage(cmsPage) {
        // only the first page is the smartedit preview page
        if (!this.isPreviewPage) {
            this.isPreviewPage = true;
            if (cmsPage.type === PageType.PRODUCT_PAGE &&
                this.defaultPreviewProductCode) {
                this.routingService.go({
                    cxRoute: 'product',
                    params: { code: this.defaultPreviewProductCode },
                });
            }
            else if (cmsPage.type === PageType.CATEGORY_PAGE &&
                this.defaultPreviewCategoryCode) {
                this.routingService.go({
                    cxRoute: 'category',
                    params: { code: this.defaultPreviewCategoryCode },
                });
            }
        }
    }
    /**
     * @protected
     * @param {?} componentId
     * @param {?=} componentType
     * @param {?=} parentId
     * @return {?}
     */
    renderComponent(componentId, componentType, parentId) {
        if (componentId) {
            this.zone.run((/**
             * @return {?}
             */
            () => {
                // without parentId, it is slot
                if (!parentId) {
                    if (this._currentPageId) {
                        this.cmsService.refreshPageById(this._currentPageId);
                    }
                    else {
                        this.cmsService.refreshLatestPage();
                    }
                }
                else if (componentType) {
                    this.cmsService.refreshComponent(componentId);
                }
            }));
        }
        return true;
    }
    /**
     * @protected
     * @return {?}
     */
    reprocessPage() {
        // TODO: reprocess page API
    }
}
SmartEditService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
SmartEditService.ctorParameters = () => [
    { type: CmsService },
    { type: RoutingService },
    { type: BaseSiteService },
    { type: NgZone },
    { type: WindowRef }
];
/** @nocollapse */ SmartEditService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SmartEditService_Factory() { return new SmartEditService(ɵɵinject(CmsService), ɵɵinject(RoutingService), ɵɵinject(BaseSiteService), ɵɵinject(NgZone), ɵɵinject(WindowRef)); }, token: SmartEditService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CmsTicketInterceptor {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        if (request.url.includes('/cms/') && this.service.cmsTicketId) {
            request = request.clone({
                setParams: {
                    cmsTicketId: this.service.cmsTicketId,
                },
            });
        }
        return next.handle(request);
    }
}
CmsTicketInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CmsTicketInterceptor.ctorParameters = () => [
    { type: SmartEditService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const interceptors$2 = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: CmsTicketInterceptor,
        multi: true,
    },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SmartEditModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: SmartEditModule,
            providers: [...interceptors$2],
        };
    }
}
SmartEditModule.decorators = [
    { type: NgModule, args: [{},] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class StoreFinderConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const STORE_FINDER_FEATURE = 'stores';
/** @type {?} */
const STORE_FINDER_DATA = '[StoreFinder] Store Finder Data';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ON_HOLD = '[StoreFinder] On Hold';
/** @type {?} */
const FIND_STORES = '[StoreFinder] Find Stores';
/** @type {?} */
const FIND_STORES_FAIL = '[StoreFinder] Find Stores Fail';
/** @type {?} */
const FIND_STORES_SUCCESS = '[StoreFinder] Find Stores Success';
/** @type {?} */
const FIND_STORE_BY_ID = '[StoreFinder] Find a Store by Id';
/** @type {?} */
const FIND_STORE_BY_ID_FAIL = '[StoreFinder] Find a Store by Id Fail';
/** @type {?} */
const FIND_STORE_BY_ID_SUCCESS = '[StoreFinder] Find a Store by Id Success';
class OnHold extends LoaderLoadAction {
    constructor() {
        super(STORE_FINDER_DATA);
        this.type = ON_HOLD;
    }
}
class FindStores extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(STORE_FINDER_DATA);
        this.payload = payload;
        this.type = FIND_STORES;
    }
}
class FindStoresFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(STORE_FINDER_DATA, payload);
        this.payload = payload;
        this.type = FIND_STORES_FAIL;
    }
}
class FindStoresSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(STORE_FINDER_DATA);
        this.payload = payload;
        this.type = FIND_STORES_SUCCESS;
    }
}
class FindStoreById extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(STORE_FINDER_DATA);
        this.payload = payload;
        this.type = FIND_STORE_BY_ID;
    }
}
class FindStoreByIdFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(STORE_FINDER_DATA, payload);
        this.payload = payload;
        this.type = FIND_STORE_BY_ID_FAIL;
    }
}
class FindStoreByIdSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(STORE_FINDER_DATA);
        this.payload = payload;
        this.type = FIND_STORE_BY_ID_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const VIEW_ALL_STORES = '[StoreFinder] View All Stores';
/** @type {?} */
const VIEW_ALL_STORES_FAIL = '[StoreFinder] View All Stores Fail';
/** @type {?} */
const VIEW_ALL_STORES_SUCCESS = '[StoreFinder] View All Stores Success';
class ViewAllStores extends LoaderLoadAction {
    constructor() {
        super(STORE_FINDER_DATA);
        this.type = VIEW_ALL_STORES;
    }
}
class ViewAllStoresFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(STORE_FINDER_DATA, payload);
        this.payload = payload;
        this.type = VIEW_ALL_STORES_FAIL;
    }
}
class ViewAllStoresSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(STORE_FINDER_DATA);
        this.payload = payload;
        this.type = VIEW_ALL_STORES_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getStoreFinderState = createFeatureSelector(STORE_FINDER_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$u = /**
 * @param {?} storesState
 * @return {?}
 */
(storesState) => storesState.findStores;
/** @type {?} */
const getFindStoresState = createSelector(getStoreFinderState, (ɵ0$u));
const ɵ1$h = /**
 * @param {?} state
 * @return {?}
 */
state => loaderValueSelector(state);
/** @type {?} */
const getFindStoresEntities = createSelector(getFindStoresState, (ɵ1$h));
const ɵ2$c = /**
 * @param {?} state
 * @return {?}
 */
state => loaderLoadingSelector(state);
/** @type {?} */
const getStoresLoading = createSelector(getFindStoresState, (ɵ2$c));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$v = /**
 * @param {?} storesState
 * @return {?}
 */
(storesState) => storesState.viewAllStores;
/** @type {?} */
const getViewAllStoresState = createSelector(getStoreFinderState, (ɵ0$v));
const ɵ1$i = /**
 * @param {?} state
 * @return {?}
 */
state => loaderValueSelector(state);
/** @type {?} */
const getViewAllStoresEntities = createSelector(getViewAllStoresState, (ɵ1$i));
const ɵ2$d = /**
 * @param {?} state
 * @return {?}
 */
state => loaderLoadingSelector(state);
/** @type {?} */
const getViewAllStoresLoading = createSelector(getViewAllStoresState, (ɵ2$d));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ExternalJsFileLoader {
    /**
     * @param {?} document
     */
    constructor(document) {
        this.document = document;
    }
    /**
     * Loads a javascript from an external URL
     * @param {?} src URL for the script to be loaded
     * @param {?=} params additional parameters to be attached to the given URL
     * @param {?=} callback a function to be invoked after the script has been loaded
     * @return {?}
     */
    load(src, params, callback) {
        /** @type {?} */
        const script = this.document.createElement('script');
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
    }
    /**
     * Parses the given object with parameters to a string "param1=value1&param2=value2"
     * @private
     * @param {?} params object containing parameters
     * @return {?}
     */
    parseParams(params) {
        /** @type {?} */
        let result = '';
        /** @type {?} */
        const keysArray = Object.keys(params);
        if (keysArray.length > 0) {
            result =
                '?' +
                    keysArray
                        .map((/**
                     * @param {?} key
                     * @return {?}
                     */
                    key => encodeURI(key) + '=' + encodeURI(params[key])))
                        .join('&');
        }
        return result;
    }
}
ExternalJsFileLoader.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ExternalJsFileLoader.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreDataService {
    constructor() {
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
     * @param {?} location store location
     * @return {?}
     */
    getStoreLatitude(location) {
        return location.geoPoint.latitude;
    }
    /**
     * Returns store longitude
     * @param {?} location store location
     * @return {?}
     */
    getStoreLongitude(location) {
        return location.geoPoint.longitude;
    }
    /**
     * Returns store closing time
     * @param {?} location store location
     * @param {?} date date to compare
     * @return {?}
     */
    getStoreClosingTime(location, date) {
        /** @type {?} */
        const requestedDaySchedule = this.getSchedule(location, date);
        /** @type {?} */
        let result = null;
        if (requestedDaySchedule.closed === false) {
            /** @type {?} */
            const closingHour = requestedDaySchedule.closingTime.formattedHour.split(':')[0];
            /** @type {?} */
            const closingMinute = requestedDaySchedule.closingTime.minute;
            result = new Date(date.valueOf());
            result.setHours(closingHour);
            result.setMinutes(closingMinute);
        }
        return result;
    }
    /**
     * Returns store opening time
     * @param {?} location store location
     * @param {?} date date to compare
     * @return {?}
     */
    getStoreOpeningTime(location, date) {
        /** @type {?} */
        const requestedDaySchedule = this.getSchedule(location, date);
        /** @type {?} */
        let result = null;
        if (requestedDaySchedule.closed === false) {
            /** @type {?} */
            const openingHour = requestedDaySchedule.openingTime.formattedHour.split(':')[0];
            /** @type {?} */
            const openingMinutes = requestedDaySchedule.openingTime.minute;
            result = new Date(date.valueOf());
            result.setHours(openingHour);
            result.setMinutes(openingMinutes);
        }
        return result;
    }
    /**
     * Returns information about store open status
     * @param {?} location store location
     * @param {?} date date to compare
     * @return {?}
     */
    isStoreOpen(location, date) {
        /** @type {?} */
        const requestedDaySchedule = this.getSchedule(location, date);
        /** @type {?} */
        let result = false;
        if (requestedDaySchedule.closed === false) {
            /** @type {?} */
            const openingDate = this.getStoreOpeningTime(location, date);
            /** @type {?} */
            const closingDate = this.getStoreClosingTime(location, date);
            result = date > openingDate && date < closingDate;
        }
        return result;
    }
    /**
     * Extracts schedule from the given location for the given date
     * @protected
     * @param {?} location location
     * @param {?} date date
     *
     * @return {?} payload describing the store's schedule for the given day.
     */
    getSchedule(location, date) {
        /** @type {?} */
        const weekday = this.weekDays[date.getDay()];
        return location.openingHours.weekDayOpeningList.find((/**
         * @param {?} weekDayOpeningListItem
         * @return {?}
         */
        weekDayOpeningListItem => weekDayOpeningListItem.weekDay === weekday));
    }
}
StoreDataService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoogleMapRendererService {
    /**
     * @param {?} config
     * @param {?} externalJsFileLoader
     * @param {?} storeDataService
     */
    constructor(config, externalJsFileLoader, storeDataService) {
        this.config = config;
        this.externalJsFileLoader = externalJsFileLoader;
        this.storeDataService = storeDataService;
        this.googleMap = null;
    }
    /**
     * Renders google map on the given element and draws markers on it.
     * If map already exists it will use an existing map otherwise it will create one
     * @param {?} mapElement HTML element inside of which the map will be displayed
     * @param {?} locations array containign geo data to be displayed on the map
     * @param {?=} selectMarkerHandler function to handle whenever a marker on a map is clicked
     * @return {?}
     */
    renderMap(mapElement, locations, selectMarkerHandler) {
        if (this.googleMap === null) {
            this.externalJsFileLoader.load(this.config.googleMaps.apiUrl, { key: this.config.googleMaps.apiKey }, (/**
             * @return {?}
             */
            () => {
                this.drawMap(mapElement, locations, selectMarkerHandler);
            }));
        }
        else {
            this.drawMap(mapElement, locations, selectMarkerHandler);
        }
    }
    /**
     * Centers the map to the given point
     * @param {?} latitute latitude of the new center
     * @param {?} longitude longitude of the new center
     * @return {?}
     */
    centerMap(latitute, longitude) {
        this.googleMap.panTo({ lat: latitute, lng: longitude });
        this.googleMap.setZoom(this.config.googleMaps.selectedMarkerScale);
    }
    /**
     * Defines and returns {\@link google.maps.LatLng} representing a point where the map will be centered
     * @private
     * @param {?} locations list of locations
     * @return {?}
     */
    defineMapCenter(locations) {
        return new google.maps.LatLng(this.storeDataService.getStoreLatitude(locations[0]), this.storeDataService.getStoreLongitude(locations[0]));
    }
    /**
     * Creates google map inside if the given HTML element centered to the given point
     * @private
     * @param {?} mapElement {\@link HTMLElement} inside of which the map will be created
     * @param {?} mapCenter {\@link google.maps.LatLng} the point where the map will be centered
     * @return {?}
     */
    initMap(mapElement, mapCenter) {
        /** @type {?} */
        const mapProp = {
            center: mapCenter,
            zoom: this.config.googleMaps.scale,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.googleMap = new google.maps.Map(mapElement, mapProp);
    }
    /**
     * Erases the current map's markers and create a new one based on the given locations
     * @private
     * @param {?} locations array of locations to be displayed on the map
     * @param {?=} selectMarkerHandler function to handle whenever a marker on a map is clicked
     * @return {?}
     */
    createMarkers(locations, selectMarkerHandler) {
        this.markers = [];
        locations.forEach((/**
         * @param {?} element
         * @param {?} index
         * @return {?}
         */
        (element, index) => {
            /** @type {?} */
            const marker = new google.maps.Marker({
                position: new google.maps.LatLng(this.storeDataService.getStoreLatitude(element), this.storeDataService.getStoreLongitude(element)),
                label: index + 1 + '',
            });
            this.markers.push(marker);
            marker.setMap(this.googleMap);
            marker.addListener('mouseover', (/**
             * @return {?}
             */
            function () {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }));
            marker.addListener('mouseout', (/**
             * @return {?}
             */
            function () {
                marker.setAnimation(null);
            }));
            if (selectMarkerHandler) {
                marker.addListener('click', (/**
                 * @return {?}
                 */
                function () {
                    selectMarkerHandler(index);
                }));
            }
        }));
    }
    /**
     * Initialize and draw the map
     * @private
     * @param {?} mapElement {\@link HTMLElement} inside of which the map will be drawn
     * @param {?} locations array of locations to be displayed on the map
     * @param {?} selectMarkerHandler function to handle whenever a marker on a map is clicked
     * @return {?}
     */
    drawMap(mapElement, locations, selectMarkerHandler) {
        this.initMap(mapElement, this.defineMapCenter(locations));
        this.createMarkers(locations, selectMarkerHandler);
    }
}
GoogleMapRendererService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GoogleMapRendererService.ctorParameters = () => [
    { type: StoreFinderConfig },
    { type: ExternalJsFileLoader },
    { type: StoreDataService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FindStoresEffect {
    /**
     * @param {?} actions$
     * @param {?} storeFinderConnector
     */
    constructor(actions$, storeFinderConnector) {
        this.actions$ = actions$;
        this.storeFinderConnector = storeFinderConnector;
        this.findStores$ = this.actions$.pipe(ofType(FIND_STORES), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.storeFinderConnector
            .search(payload.queryText, payload.searchConfig, payload.longitudeLatitude)
            .pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (payload.countryIsoCode) {
                data.stores = data.stores.filter((/**
                 * @param {?} store
                 * @return {?}
                 */
                store => store.address.country.isocode === payload.countryIsoCode));
            }
            return new FindStoresSuccess(data);
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new FindStoresFail(makeErrorSerializable(error)))))))));
        this.findStoreById$ = this.actions$.pipe(ofType(FIND_STORE_BY_ID), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.storeFinderConnector.get(payload.storeId).pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        data => new FindStoreByIdSuccess(data))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new FindStoreByIdFail(makeErrorSerializable(error)))))))));
    }
}
FindStoresEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FindStoresEffect.ctorParameters = () => [
    { type: Actions },
    { type: StoreFinderConnector }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], FindStoresEffect.prototype, "findStores$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], FindStoresEffect.prototype, "findStoreById$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ViewAllStoresEffect {
    /**
     * @param {?} actions$
     * @param {?} storeFinderConnector
     */
    constructor(actions$, storeFinderConnector) {
        this.actions$ = actions$;
        this.storeFinderConnector = storeFinderConnector;
        this.viewAllStores$ = this.actions$.pipe(ofType(VIEW_ALL_STORES), switchMap((/**
         * @return {?}
         */
        () => {
            return this.storeFinderConnector.getCounts().pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            data => new ViewAllStoresSuccess(data))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new ViewAllStoresFail(makeErrorSerializable(error))))));
        })));
    }
}
ViewAllStoresEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ViewAllStoresEffect.ctorParameters = () => [
    { type: Actions },
    { type: StoreFinderConnector }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], ViewAllStoresEffect.prototype, "viewAllStores$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const effects$9 = [FindStoresEffect, ViewAllStoresEffect];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$b() {
    return {
        findStores: loaderReducer(STORE_FINDER_DATA),
        viewAllStores: loaderReducer(STORE_FINDER_DATA),
    };
}
/** @type {?} */
const reducerToken$b = new InjectionToken('StoreFinderReducers');
/** @type {?} */
const reducerProvider$b = {
    provide: reducerToken$b,
    useFactory: getReducers$b,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderService {
    /**
     * @param {?} store
     * @param {?} winRef
     */
    constructor(store, winRef) {
        this.store = store;
        this.winRef = winRef;
        this.geolocationWatchId = null;
    }
    /**
     * Returns boolean observable for store's loading state
     * @return {?}
     */
    getStoresLoading() {
        return this.store.pipe(select(getStoresLoading));
    }
    /**
     * Returns observable for store's entities
     * @return {?}
     */
    getFindStoresEntities() {
        return this.store.pipe(select(getFindStoresEntities));
    }
    /**
     * Returns boolean observable for view all store's loading state
     * @return {?}
     */
    getViewAllStoresLoading() {
        return this.store.pipe(select(getViewAllStoresLoading));
    }
    /**
     * Returns observable for view all store's entities
     * @return {?}
     */
    getViewAllStoresEntities() {
        return this.store.pipe(select(getViewAllStoresEntities));
    }
    /**
     * Store finding action functionality
     * @param {?} queryText text query
     * @param {?} longitudeLatitude longitude and latitude coordinates
     * @param {?} searchConfig search configuration
     * @param {?=} countryIsoCode country ISO code
     * @return {?}
     */
    findStoresAction(queryText, longitudeLatitude, searchConfig, countryIsoCode) {
        this.store.dispatch(new FindStores({
            queryText: queryText,
            longitudeLatitude: longitudeLatitude,
            searchConfig: searchConfig,
            countryIsoCode: countryIsoCode,
        }));
    }
    /**
     * View all stores
     * @return {?}
     */
    viewAllStores() {
        this.clearWatchGeolocation(new ViewAllStores());
    }
    /**
     * View all stores by id
     * @param {?} storeId store id
     * @return {?}
     */
    viewStoreById(storeId) {
        this.clearWatchGeolocation(new FindStoreById({ storeId }));
    }
    /**
     * Find all stores
     * @param {?} queryText text query
     * @param {?=} useMyLocation use current location
     * @return {?}
     */
    findStores(queryText, useMyLocation) {
        if (useMyLocation && this.winRef.nativeWindow) {
            this.clearWatchGeolocation(new OnHold());
            this.geolocationWatchId = this.winRef.nativeWindow.navigator.geolocation.watchPosition((/**
             * @param {?} pos
             * @return {?}
             */
            (pos) => {
                /** @type {?} */
                const longitudeLatitude = {
                    longitude: pos.coords.longitude,
                    latitude: pos.coords.latitude,
                };
                this.clearWatchGeolocation(new FindStores({ queryText, longitudeLatitude }));
            }));
        }
        else {
            this.clearWatchGeolocation(new FindStores({ queryText }));
        }
    }
    /**
     * @private
     * @param {?} callbackAction
     * @return {?}
     */
    clearWatchGeolocation(callbackAction) {
        if (this.geolocationWatchId !== null) {
            this.winRef.nativeWindow.navigator.geolocation.clearWatch(this.geolocationWatchId);
            this.geolocationWatchId = null;
        }
        this.store.dispatch(callbackAction);
    }
}
StoreFinderService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StoreFinderService.ctorParameters = () => [
    { type: Store },
    { type: WindowRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultStoreFinderConfig = {
    googleMaps: {
        apiUrl: 'https://maps.googleapis.com/maps/api/js',
        apiKey: '',
        scale: 12,
        selectedMarkerScale: 16,
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderStoreModule {
}
StoreFinderStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    StoreModule.forFeature(STORE_FINDER_FEATURE, reducerToken$b),
                    EffectsModule.forFeature(effects$9),
                ],
                providers: [reducerProvider$b],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderCoreModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ADDRESS_NORMALIZER, ADDRESS_SERIALIZER, ADDRESS_VALIDATION_NORMALIZER, ADD_DELIVERY_ADDRESS, ADD_DELIVERY_ADDRESS_FAIL, ADD_DELIVERY_ADDRESS_SUCCESS, ADD_ENTRY, ADD_ENTRY_FAIL, ADD_ENTRY_SUCCESS, ADD_MESSAGE, ADD_USER_ADDRESS, ADD_USER_ADDRESS_FAIL, ADD_USER_ADDRESS_SUCCESS, ANONYMOUS_USERID, AUTH_FEATURE, AddDeliveryAddress, AddDeliveryAddressFail, AddDeliveryAddressSuccess, AddEntry, AddEntryFail, AddEntrySuccess, AddMessage, AddUserAddress, AddUserAddressFail, AddUserAddressSuccess, AuthConfig, AuthGuard, AuthModule, AuthRedirectService, AuthService, BACK, BASE_SITE_CHANGE, BASE_SITE_CONTEXT_ID, Back, BadGatewayHandler, BadRequestHandler, BaseSiteChange, BaseSiteService, CARD_TYPE_NORMALIZER, CART_DATA, CART_FEATURE, CART_MODIFICATION_NORMALIZER, CART_NORMALIZER, CHECKOUT_CLEAR_MISCS_DATA, CHECKOUT_DETAILS, CHECKOUT_FEATURE, CLEAR_ADDRESS_VERIFICATION_RESULTS, CLEAR_CHECKOUT_DATA, CLEAR_CHECKOUT_STEP, CLEAR_MISCS_DATA, CLEAR_ORDER_DETAILS, CLEAR_PRODUCT_SEARCH_RESULT, CLEAR_REGIONS, CLEAR_SUPPORTED_DELIVERY_MODES, CLEAR_USER_ORDERS, CLIENT_TOKEN_DATA, CMS_COMPONENT_NORMALIZER, CMS_FEATURE, CMS_FLEX_COMPONENT_TYPE, CMS_PAGE_NORMALIZER, COMPONENT_ENTITY, CONSENT_TEMPLATE_NORMALIZER, COUNTRY_NORMALIZER, CREATE_CART, CREATE_CART_FAIL, CREATE_CART_SUCCESS, CREATE_PAYMENT_DETAILS, CREATE_PAYMENT_DETAILS_FAIL, CREATE_PAYMENT_DETAILS_SUCCESS, CURRENCY_CHANGE, CURRENCY_CONTEXT_ID, CURRENCY_NORMALIZER, CartAdapter, CartConnector, CartDataService, CartEntryAdapter, CartEntryConnector, CartModule, CartOccModule, CartPageMetaResolver, CartService, CategoryPageMetaResolver, CheckoutAdapter, CheckoutClearMiscsData, CheckoutConnector, CheckoutDeliveryAdapter, CheckoutDeliveryConnector, CheckoutDeliveryService, CheckoutModule, CheckoutOccModule, CheckoutPageMetaResolver, CheckoutPaymentAdapter, CheckoutPaymentConnector, CheckoutPaymentService, CheckoutService, ClearAddressVerificationResults, ClearCheckoutData, ClearCheckoutStep, ClearMiscsData, ClearOrderDetails, ClearProductSearchResult, ClearRegions, ClearSupportedDeliveryModes, ClearUserOrders, CmsComponentAdapter, CmsComponentConnector, CmsConfig, CmsModule, CmsOccModule, CmsPageAdapter, CmsPageConnector, CmsPageTitleModule, CmsService, CmsStructureConfig, CmsStructureConfigService, Config, ConfigChunk, ConfigModule, ConfigValidatorToken, ConfigurableRoutesModule, ConfigurableRoutesService, ConflictHandler, ContentPageMetaResolver, ContextServiceMap, ConverterService, CountryType, CreateCart, CreateCartFail, CreateCartSuccess, CreatePaymentDetails, CreatePaymentDetailsFail, CreatePaymentDetailsSuccess, CurrencyChange, CurrencyService, CxApiModule, CxApiService, CxDatePipe, DEFAULT_LOCAL_STORAGE_KEY, DEFAULT_SESSION_STORAGE_KEY, DELETE_USER_ADDRESS, DELETE_USER_ADDRESS_FAIL, DELETE_USER_ADDRESS_SUCCESS, DELETE_USER_PAYMENT_METHOD, DELETE_USER_PAYMENT_METHOD_FAIL, DELETE_USER_PAYMENT_METHOD_SUCCESS, DELIVERY_MODE_NORMALIZER, DeleteUserAddress, DeleteUserAddressFail, DeleteUserAddressSuccess, DeleteUserPaymentMethod, DeleteUserPaymentMethodFail, DeleteUserPaymentMethodSuccess, DynamicAttributeService, ENTITY_FAIL_ACTION, ENTITY_LOAD_ACTION, ENTITY_REMOVE_ACTION, ENTITY_REMOVE_ALL_ACTION, ENTITY_RESET_ACTION, ENTITY_SUCCESS_ACTION, EntityFailAction, EntityLoadAction, EntityRemoveAction, EntityRemoveAllAction, EntityResetAction, EntitySuccessAction, ExternalJsFileLoader, FIND_STORES, FIND_STORES_FAIL, FIND_STORES_SUCCESS, FIND_STORE_BY_ID, FIND_STORE_BY_ID_FAIL, FIND_STORE_BY_ID_SUCCESS, FORGOT_PASSWORD_EMAIL_REQUEST, FORGOT_PASSWORD_EMAIL_REQUEST_FAIL, FORGOT_PASSWORD_EMAIL_REQUEST_SUCCESS, FORWARD, FindStoreById, FindStoreByIdFail, FindStoreByIdSuccess, FindStores, FindStoresFail, FindStoresSuccess, ForbiddenHandler, ForgotPasswordEmailRequest, ForgotPasswordEmailRequestFail, ForgotPasswordEmailRequestSuccess, Forward, GET_COMPONENET_FROM_PAGE, GET_PRODUCT_SUGGESTIONS, GET_PRODUCT_SUGGESTIONS_FAIL, GET_PRODUCT_SUGGESTIONS_SUCCESS, GIVE_CONSENT_PROCESS_ID, GIVE_USER_CONSENT, GIVE_USER_CONSENT_FAIL, GIVE_USER_CONSENT_SUCCESS, GLOBAL_MESSAGE_FEATURE, GO, GO_BY_URL, GatewayTimeoutHandler, GetComponentFromPage, GetProductSuggestions, GetProductSuggestionsFail, GetProductSuggestionsSuccess, GiveUserConsent, GiveUserConsentFail, GiveUserConsentSuccess, GlobalMessageConfig, GlobalMessageModule, GlobalMessageService, GlobalMessageType, Go, GoByUrl, GoogleMapRendererService, HttpErrorHandler, I18nConfig, I18nModule, I18nTestingModule, I18nextTranslationService, ImageType, InterceptorUtil, JSP_INCLUDE_CMS_COMPONENT_TYPE, KYMA_FEATURE, KymaConfig, KymaModule, KymaService, KymaServices, LANGUAGE_CHANGE, LANGUAGE_CONTEXT_ID, LANGUAGE_NORMALIZER, LOADER_FAIL_ACTION, LOADER_LOAD_ACTION, LOADER_RESET_ACTION, LOADER_SUCCESS_ACTION, LOAD_BASE_SITE, LOAD_BASE_SITE_FAIL, LOAD_BASE_SITE_SUCCESS, LOAD_BILLING_COUNTRIES, LOAD_BILLING_COUNTRIES_FAIL, LOAD_BILLING_COUNTRIES_SUCCESS, LOAD_CARD_TYPES, LOAD_CARD_TYPES_FAIL, LOAD_CARD_TYPES_SUCCESS, LOAD_CART, LOAD_CART_FAIL, LOAD_CART_SUCCESS, LOAD_CHECKOUT_DETAILS, LOAD_CHECKOUT_DETAILS_FAIL, LOAD_CHECKOUT_DETAILS_SUCCESS, LOAD_CLIENT_TOKEN, LOAD_CLIENT_TOKEN_FAIL, LOAD_CLIENT_TOKEN_SUCCESS, LOAD_COMPONENT, LOAD_COMPONENT_FAIL, LOAD_COMPONENT_SUCCESS, LOAD_CURRENCIES, LOAD_CURRENCIES_FAIL, LOAD_CURRENCIES_SUCCESS, LOAD_DELIVERY_COUNTRIES, LOAD_DELIVERY_COUNTRIES_FAIL, LOAD_DELIVERY_COUNTRIES_SUCCESS, LOAD_LANGUAGES, LOAD_LANGUAGES_FAIL, LOAD_LANGUAGES_SUCCESS, LOAD_NAVIGATION_ITEMS, LOAD_NAVIGATION_ITEMS_FAIL, LOAD_NAVIGATION_ITEMS_SUCCESS, LOAD_OPEN_ID_TOKEN, LOAD_OPEN_ID_TOKEN_FAIL, LOAD_OPEN_ID_TOKEN_SUCCESS, LOAD_ORDER_DETAILS, LOAD_ORDER_DETAILS_FAIL, LOAD_ORDER_DETAILS_SUCCESS, LOAD_PAGE_DATA, LOAD_PAGE_DATA_FAIL, LOAD_PAGE_DATA_SUCCESS, LOAD_PRODUCT, LOAD_PRODUCT_FAIL, LOAD_PRODUCT_REFERENCES, LOAD_PRODUCT_REFERENCES_FAIL, LOAD_PRODUCT_REFERENCES_SUCCESS, LOAD_PRODUCT_REVIEWS, LOAD_PRODUCT_REVIEWS_FAIL, LOAD_PRODUCT_REVIEWS_SUCCESS, LOAD_PRODUCT_SUCCESS, LOAD_REGIONS, LOAD_REGIONS_FAIL, LOAD_REGIONS_SUCCESS, LOAD_SUPPORTED_DELIVERY_MODES, LOAD_SUPPORTED_DELIVERY_MODES_FAIL, LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS, LOAD_TITLES, LOAD_TITLES_FAIL, LOAD_TITLES_SUCCESS, LOAD_USER_ADDRESSES, LOAD_USER_ADDRESSES_FAIL, LOAD_USER_ADDRESSES_SUCCESS, LOAD_USER_CONSENTS, LOAD_USER_CONSENTS_FAIL, LOAD_USER_CONSENTS_SUCCESS, LOAD_USER_DETAILS, LOAD_USER_DETAILS_FAIL, LOAD_USER_DETAILS_SUCCESS, LOAD_USER_ORDERS, LOAD_USER_ORDERS_FAIL, LOAD_USER_ORDERS_SUCCESS, LOAD_USER_PAYMENT_METHODS, LOAD_USER_PAYMENT_METHODS_FAIL, LOAD_USER_PAYMENT_METHODS_SUCCESS, LOAD_USER_TOKEN, LOAD_USER_TOKEN_FAIL, LOAD_USER_TOKEN_SUCCESS, LOGIN, LOGOUT, LanguageChange, LanguageService, LoadBaseSite, LoadBaseSiteFail, LoadBaseSiteSuccess, LoadBillingCountries, LoadBillingCountriesFail, LoadBillingCountriesSuccess, LoadCardTypes, LoadCardTypesFail, LoadCardTypesSuccess, LoadCart, LoadCartFail, LoadCartSuccess, LoadCheckoutDetails, LoadCheckoutDetailsFail, LoadCheckoutDetailsSuccess, LoadClientToken, LoadClientTokenFail, LoadClientTokenSuccess, LoadComponent, LoadComponentFail, LoadComponentSuccess, LoadCurrencies, LoadCurrenciesFail, LoadCurrenciesSuccess, LoadDeliveryCountries, LoadDeliveryCountriesFail, LoadDeliveryCountriesSuccess, LoadLanguages, LoadLanguagesFail, LoadLanguagesSuccess, LoadNavigationItems, LoadNavigationItemsFail, LoadNavigationItemsSuccess, LoadOpenIdToken, LoadOpenIdTokenFail, LoadOpenIdTokenSuccess, LoadOrderDetails, LoadOrderDetailsFail, LoadOrderDetailsSuccess, LoadPageData, LoadPageDataFail, LoadPageDataSuccess, LoadProduct, LoadProductFail, LoadProductReferences, LoadProductReferencesFail, LoadProductReferencesSuccess, LoadProductReviews, LoadProductReviewsFail, LoadProductReviewsSuccess, LoadProductSuccess, LoadRegions, LoadRegionsFail, LoadRegionsSuccess, LoadSupportedDeliveryModes, LoadSupportedDeliveryModesFail, LoadSupportedDeliveryModesSuccess, LoadTitles, LoadTitlesFail, LoadTitlesSuccess, LoadUserAddresses, LoadUserAddressesFail, LoadUserAddressesSuccess, LoadUserConsents, LoadUserConsentsFail, LoadUserConsentsSuccess, LoadUserDetails, LoadUserDetailsFail, LoadUserDetailsSuccess, LoadUserOrders, LoadUserOrdersFail, LoadUserOrdersSuccess, LoadUserPaymentMethods, LoadUserPaymentMethodsFail, LoadUserPaymentMethodsSuccess, LoadUserToken, LoadUserTokenFail, LoadUserTokenSuccess, LoaderFailAction, LoaderLoadAction, LoaderResetAction, LoaderSuccessAction, Login, Logout, MEDIA_BASE_URL_META_TAG_NAME, MEDIA_BASE_URL_META_TAG_PLACEHOLDER, MERGE_CART, MERGE_CART_SUCCESS, MergeCart, MergeCartSuccess, MockDatePipe, MockTranslatePipe, NAVIGATION_DETAIL_ENTITY, NotAuthGuard, NotFoundHandler, OCC_BASE_URL_META_TAG_NAME, OCC_BASE_URL_META_TAG_PLACEHOLDER, ON_HOLD, OPEN_ID_TOKEN_DATA, ORDER_HISTORY_NORMALIZER, ORDER_NORMALIZER, Occ, OccCartAdapter, OccCartEntryAdapter, OccCartNormalizer, OccCheckoutAdapter, OccCheckoutDeliveryAdapter, OccCheckoutPaymentAdapter, OccCmsComponentAdapter, OccCmsPageAdapter, OccCmsPageNormalizer, OccConfig, OccEndpointsService, OccModule, OccOrderNormalizer, OccProductAdapter, OccProductReferencesAdapter, OccProductReferencesListNormalizer, OccProductReviewsAdapter, OccProductSearchAdapter, OccProductSearchPageNormalizer, OccSiteAdapter, OccStoreFinderAdapter, OccUserAdapter, OccUserAddressAdapter, OccUserConsentAdapter, OccUserOrderAdapter, OccUserPaymentAdapter, OnHold, PAYMENT_DETAILS_NORMALIZER, PAYMENT_DETAILS_SERIALIZER, PLACE_ORDER, PLACE_ORDER_FAIL, PLACE_ORDER_SUCCESS, POINT_OF_SERVICE_NORMALIZER, POST_PRODUCT_REVIEW, POST_PRODUCT_REVIEW_FAIL, POST_PRODUCT_REVIEW_SUCCESS, PRODUCT_DETAIL_ENTITY, PRODUCT_FEATURE, PRODUCT_NORMALIZER, PRODUCT_REFERENCES_NORMALIZER, PRODUCT_REVIEW_NORMALIZER, PRODUCT_REVIEW_SERIALIZER, PRODUCT_SEARCH_PAGE_NORMALIZER, PRODUCT_SUGGESTION_NORMALIZER, PageContext, PageMetaResolver, PageMetaService, PageRobotsMeta, PageType, PersonalizationConfig, PersonalizationModule, PlaceOrder, PlaceOrderFail, PlaceOrderSuccess, PostProductReview, PostProductReviewFail, PostProductReviewSuccess, PriceType, ProductAdapter, ProductConnector, ProductImageNormalizer, ProductModule, ProductNameNormalizer, ProductOccModule, ProductPageMetaResolver, ProductReferenceNormalizer, ProductReferenceService, ProductReferencesAdapter, ProductReferencesConnector, ProductReviewService, ProductReviewsAdapter, ProductReviewsConnector, ProductSearchAdapter, ProductSearchConnector, ProductSearchService, ProductService, REFRESH_USER_TOKEN, REFRESH_USER_TOKEN_FAIL, REFRESH_USER_TOKEN_SUCCESS, REGIONS, REGION_NORMALIZER, REGISTER_USER, REGISTER_USER_FAIL, REGISTER_USER_SUCCESS, REMOVE_ENTRY, REMOVE_ENTRY_FAIL, REMOVE_ENTRY_SUCCESS, REMOVE_MESSAGE, REMOVE_MESSAGES_BY_TYPE, REMOVE_USER, REMOVE_USER_FAIL, REMOVE_USER_PROCESS_ID, REMOVE_USER_RESET, REMOVE_USER_SUCCESS, RESET_EMAIL, RESET_GIVE_USER_CONSENT_PROCESS, RESET_LOAD_USER_CONSENTS, RESET_PASSWORD, RESET_PASSWORD_FAIL, RESET_PASSWORD_SUCCESS, RESET_USER_DETAILS, RESET_WITHDRAW_USER_CONSENT_PROCESS, RefreshUserToken, RefreshUserTokenFail, RefreshUserTokenSuccess, RegisterUser, RegisterUserFail, RegisterUserSuccess, RemoveEntry, RemoveEntryFail, RemoveEntrySuccess, RemoveMessage, RemoveMessagesByType, RemoveUser, RemoveUserFail, RemoveUserReset, RemoveUserSuccess, ResetGiveUserConsentProcess, ResetLoadUserConsents, ResetPassword, ResetPasswordFail, ResetPasswordSuccess, ResetUpdateEmailAction, ResetUpdateUserDetails, ResetWithdrawUserConsentProcess, RoutingConfig, RoutingConfigService, RoutingModule, RoutingService, SEARCH_PRODUCTS, SEARCH_PRODUCTS_FAIL, SEARCH_PRODUCTS_SUCCESS, SET_ACTIVE_BASE_SITE, SET_ACTIVE_CURRENCY, SET_ACTIVE_LANGUAGE, SET_DEFAULT_USER_PAYMENT_METHOD, SET_DEFAULT_USER_PAYMENT_METHOD_FAIL, SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS, SET_DELIVERY_ADDRESS, SET_DELIVERY_ADDRESS_FAIL, SET_DELIVERY_ADDRESS_SUCCESS, SET_DELIVERY_MODE, SET_DELIVERY_MODE_FAIL, SET_DELIVERY_MODE_SUCCESS, SET_PAGE_FAIL_INDEX, SET_PAYMENT_DETAILS, SET_PAYMENT_DETAILS_FAIL, SET_PAYMENT_DETAILS_SUCCESS, SITE_CONTEXT_FEATURE, STORE_COUNT_NORMALIZER, STORE_FINDER_DATA, STORE_FINDER_FEATURE, STORE_FINDER_SEARCH_PAGE_NORMALIZER, SearchPageMetaResolver, SearchProducts, SearchProductsFail, SearchProductsSuccess, SearchboxService, SemanticPathService, ServerConfig, SetActiveBaseSite, SetActiveCurrency, SetActiveLanguage, SetDefaultUserPaymentMethod, SetDefaultUserPaymentMethodFail, SetDefaultUserPaymentMethodSuccess, SetDeliveryAddress, SetDeliveryAddressFail, SetDeliveryAddressSuccess, SetDeliveryMode, SetDeliveryModeFail, SetDeliveryModeSuccess, SetPageFailIndex, SetPaymentDetails, SetPaymentDetailsFail, SetPaymentDetailsSuccess, SiteAdapter, SiteConnector, SiteContextConfig, SiteContextInterceptor, SiteContextModule, SiteContextOccModule, SmartEditModule, SmartEditService, StateConfig, StateModule, StateTransferType, StorageSyncType, StoreDataService, StoreFinderAdapter, StoreFinderConfig, StoreFinderConnector, StoreFinderCoreModule, StoreFinderOccModule, StoreFinderService, TITLE_NORMALIZER, TranslatePipe, TranslationChunkService, TranslationService, UPDATE_EMAIL, UPDATE_EMAIL_ERROR, UPDATE_EMAIL_PROCESS_ID, UPDATE_EMAIL_SUCCESS, UPDATE_ENTRY, UPDATE_ENTRY_FAIL, UPDATE_ENTRY_SUCCESS, UPDATE_PASSWORD, UPDATE_PASSWORD_FAIL, UPDATE_PASSWORD_PROCESS_ID, UPDATE_PASSWORD_RESET, UPDATE_PASSWORD_SUCCESS, UPDATE_USER_ADDRESS, UPDATE_USER_ADDRESS_FAIL, UPDATE_USER_ADDRESS_SUCCESS, UPDATE_USER_DETAILS, UPDATE_USER_DETAILS_FAIL, UPDATE_USER_DETAILS_PROCESS_ID, UPDATE_USER_DETAILS_SUCCESS, USER_ADDRESSES, USER_CONSENTS, USER_FEATURE, USER_NORMALIZER, USER_ORDERS, USER_PAYMENT_METHODS, USER_SERIALIZER, USER_SIGN_UP_SERIALIZER, USE_CLIENT_TOKEN, UnknownErrorHandler, UpdateEmailAction, UpdateEmailErrorAction, UpdateEmailSuccessAction, UpdateEntry, UpdateEntryFail, UpdateEntrySuccess, UpdatePassword, UpdatePasswordFail, UpdatePasswordReset, UpdatePasswordSuccess, UpdateUserAddress, UpdateUserAddressFail, UpdateUserAddressSuccess, UpdateUserDetails, UpdateUserDetailsFail, UpdateUserDetailsSuccess, UrlModule, UrlPipe, UserAdapter, UserAddressAdapter, UserAddressConnector, UserAddressService, UserConnector, UserConsentAdapter, UserConsentConnector, UserConsentService, UserModule, UserOccModule, UserOrderAdapter, UserOrderConnector, UserOrderService, UserPaymentAdapter, UserPaymentConnector, UserPaymentService, UserService, VERIFY_ADDRESS, VERIFY_ADDRESS_FAIL, VERIFY_ADDRESS_SUCCESS, VIEW_ALL_STORES, VIEW_ALL_STORES_FAIL, VIEW_ALL_STORES_SUCCESS, VerifyAddress, VerifyAddressFail, VerifyAddressSuccess, ViewAllStores, ViewAllStoresFail, ViewAllStoresSuccess, WITHDRAW_CONSENT_PROCESS_ID, WITHDRAW_USER_CONSENT, WITHDRAW_USER_CONSENT_FAIL, WITHDRAW_USER_CONSENT_SUCCESS, WindowRef, WithdrawUserConsent, WithdrawUserConsentFail, WithdrawUserConsentSuccess, componentSelectorFactory, componentStateSelectorFactory, configurationFactory, contextServiceMapProvider, contextServiceProviders, countrySelectorFactory, currentSlotSelectorFactory, defaultCmsModuleConfig, defaultOccConfig, defaultServerConfig, defaultStateConfig, entityErrorSelector, entityFailMeta, entityLoadMeta, entityLoaderReducer, entityLoadingSelector, entityMeta, entityReducer, entityRemoveAllMeta, entityRemoveMeta, entityResetMeta, entitySelector, entityStateSelector, entitySuccessMeta, entitySuccessSelector, entityValueSelector, errorHandlers, failMeta, getActiveBaseSite, getActiveCartState, getActiveCurrency, getActiveLanguage, getAddressVerificationResults$1 as getAddressVerificationResults, getAddressVerificationResultsState, getAddresses, getAddressesLoaderState, getAddressesLoading, getAllBillingCountries, getAllCardTypes, getAllCurrencies, getAllDeliveryCountries, getAllLanguages, getAllProductCodes, getAllRegions, getAllTitles, getAuthState, getAuxSearchResults$1 as getAuxSearchResults, getBaseSiteData, getBillingCountriesEntites, getBillingCountriesState, getCardTypesEntites$1 as getCardTypesEntites, getCardTypesState, getCartContent, getCartContentSelector, getCartMergeComplete, getCartMergeCompleteSelector, getCartState, getCartsState, getCheckoutDetailsLoaded, getCheckoutOrderDetails, getCheckoutState, getCheckoutSteps, getCheckoutStepsState, getClientTokenState, getCmsState, getComponentEntities, getComponentEntitiesSelector, getComponentState, getConsentsError, getConsentsLoading, getConsentsState, getConsentsSuccess, getConsentsValue, getCurrenciesEntities, getCurrenciesState, getDeliveryAddress, getDeliveryAddressSelector, getDeliveryCountriesEntites, getDeliveryCountriesState, getDeliveryMode, getDeliveryModeSelector, getDetails, getDetailsState, getEntries, getEntriesMap, getEntriesSelector, getEntrySelectorFactory, getFindStoresEntities, getFindStoresState, getGlobalMessageCountByType, getGlobalMessageEntities, getGlobalMessageEntitiesByType, getGlobalMessageState, getIndex, getIndexByType, getIndexEntity, getIndexValue, getKymaState, getLanguagesEntities, getLanguagesState, getLoaded, getNavigationEntryItemState, getOpenIdTokenError, getOpenIdTokenLoading, getOpenIdTokenState, getOpenIdTokenSuccess, getOpenIdTokenValue, getOrderDetails, getOrderDetailsSelector, getOrderState, getOrders, getOrdersLoaded, getOrdersState, getPageComponentTypes, getPageComponentTypesSelector, getPageData, getPageEntities, getPageEntitiesSelector, getPageState, getPageStateIndex, getPaymentDetails, getPaymentDetailsSelector, getPaymentMethods, getPaymentMethodsLoading, getPaymentMethodsState, getProductReferencesState, getProductReviewsState, getProductState, getProductSuggestions$1 as getProductSuggestions, getProductsSearchState, getProductsState, getRefresh, getRefreshSelector, getRegionsCountry, getRegionsDataAndLoading, getRegionsLoaded, getRegionsLoaderState, getRegionsLoading, getResetPassword, getSearchResults$1 as getSearchResults, getSelectedCode, getSelectedDeliveryMode, getSelectedNavigationEntryItemState, getSelectedProductErrorFactory, getSelectedProductFactory, getSelectedProductLoadingFactory, getSelectedProductReferencesFactory, getSelectedProductReviewsFactory, getSelectedProductStateFactory, getSelectedProductSuccessFactory, getSelectedProductsFactory, getSiteContextState, getStateSlice, getStoresLoading, getSupportedDeliveryModes, getTitlesEntites, getTitlesState, getUserState, getUserToken, getUserTokenSelector, getUserTokenState, getViewAllStoresEntities, getViewAllStoresLoading, getViewAllStoresState, httpErrorInterceptors, initConfigurableRoutes, initSiteContextRoutesHandler, initialEntityState, initialLoaderState, inititializeContext, itemsSelectorFactory, loadMeta, loaderErrorSelector, loaderLoadingSelector, loaderReducer, loaderSuccessSelector, loaderValueSelector, mediaServerConfigFromMetaTagFactory, occConfigValidator, occServerConfigFromMetaTagFactory, ofLoaderFail, ofLoaderLoad, ofLoaderSuccess, provideConfig, provideConfigFactory, provideConfigFromMetaTags, provideConfigValidator, resetMeta, serviceMapFactory, services, siteContextParamsProviders, successMeta, testestsd, titleSelectorFactory, validateConfig, authStoreConfigFactory as ɵa, AuthStoreModule as ɵb, CartStoreModule as ɵba, getReducers$3 as ɵbb, reducerToken$3 as ɵbc, reducerProvider$3 as ɵbd, clearCartState as ɵbe, metaReducers$1 as ɵbf, effects$3 as ɵbg, CartEffects as ɵbh, CartEntryEffects as ɵbi, reducer$5 as ɵbj, reducer$6 as ɵbk, getCardTypesEntites as ɵbl, reducer$7 as ɵbm, getAddressVerificationResults as ɵbn, effects$4 as ɵbo, CheckoutEffects as ɵbp, CardTypesEffects as ɵbq, AddressVerificationEffect as ɵbr, getReducers$4 as ɵbs, reducerToken$4 as ɵbt, reducerProvider$4 as ɵbu, CheckoutStoreModule as ɵbv, reducer$8 as ɵbw, EntityLoadAction as ɵbx, EntityFailAction as ɵby, EntitySuccessAction as ɵbz, stateMetaReducers as ɵc, cmsStoreConfigFactory as ɵca, CmsStoreModule as ɵcb, getReducers$5 as ɵcc, reducerToken$5 as ɵcd, reducerProvider$5 as ɵce, clearCmsState as ɵcf, metaReducers$2 as ɵcg, effects$5 as ɵch, PageEffects as ɵci, ComponentEffects as ɵcj, NavigationEntryItemEffects as ɵck, reducer$a as ɵcl, reducer$b as ɵcm, reducer$9 as ɵcn, getReducers$2 as ɵco, reducerToken$2 as ɵcp, reducerProvider$2 as ɵcq, effects$2 as ɵcr, LanguagesEffects as ɵcs, CurrenciesEffects as ɵct, BaseSiteEffects as ɵcu, effects$6 as ɵcv, ProductReferencesEffects as ɵcw, ProductReviewsEffects as ɵcx, ProductsSearchEffects as ɵcy, ProductEffects as ɵcz, getStorageSyncReducer as ɵd, getReducers$6 as ɵda, reducerToken$6 as ɵdb, reducerProvider$6 as ɵdc, clearProductsState as ɵdd, metaReducers$3 as ɵde, getReducers$7 as ɵdf, reducerToken$7 as ɵdg, reducerProvider$7 as ɵdh, clearUserState as ɵdi, metaReducers$4 as ɵdj, GlobalMessageStoreModule as ɵdk, getReducers$9 as ɵdl, reducerToken$9 as ɵdm, reducerProvider$9 as ɵdn, reducer$q as ɵdo, GlobalMessageEffect as ɵdp, defaultGlobalMessageConfigFactory as ɵdq, HttpErrorInterceptor as ɵdr, ServerConfig as ɵds, defaultI18nConfig as ɵdt, i18nextProviders as ɵdu, i18nextInit as ɵdv, MockTranslationService as ɵdw, kymaStoreConfigFactory as ɵdx, KymaStoreModule as ɵdy, getReducers$a as ɵdz, getTransferStateReducer as ɵe, reducerToken$a as ɵea, reducerProvider$a as ɵeb, clearKymaState as ɵec, metaReducers$5 as ɵed, effects$8 as ɵee, OpenIdTokenEffect as ɵef, OpenIdAuthenticationTokenService as ɵeg, defaultKymaConfig as ɵeh, provideConfigFactory as ɵei, defaultOccProductConfig as ɵej, provideConfigValidator as ɵek, defaultPersonalizationConfig as ɵel, interceptors$1 as ɵem, OccPersonalizationIdInterceptor as ɵen, OccPersonalizationTimeInterceptor as ɵeo, productStoreConfigFactory as ɵep, ProductStoreModule as ɵeq, reducer$e as ɵer, getSearchResults as ɵes, getAuxSearchResults as ɵet, getProductSuggestions as ɵeu, reducer$d as ɵev, reducer$c as ɵew, PageMetaResolver as ɵex, UrlMatcherFactoryService as ɵey, ROUTING_FEATURE as ɵez, getReducers$1 as ɵf, getReducers as ɵfa, reducer as ɵfb, reducerToken as ɵfc, reducerProvider as ɵfd, CustomSerializer as ɵfe, effects as ɵff, RouterEffects as ɵfg, defaultSiteContextConfigFactory as ɵfh, siteContextStoreConfigFactory as ɵfi, SiteContextStoreModule as ɵfj, reducer$2 as ɵfk, reducer$3 as ɵfl, reducer$4 as ɵfm, SiteContextParamsService as ɵfn, SiteContextUrlSerializer as ɵfo, SiteContextRoutesHandler as ɵfp, interceptors$2 as ɵfq, CmsTicketInterceptor as ɵfr, getStoreFinderState as ɵfs, defaultStoreFinderConfig as ɵft, StoreFinderStoreModule as ɵfu, getReducers$b as ɵfv, reducerToken$b as ɵfw, reducerProvider$b as ɵfx, effects$9 as ɵfy, FindStoresEffect as ɵfz, reducerToken$1 as ɵg, ViewAllStoresEffect as ɵga, EntityResetAction as ɵgb, UserStoreModule as ɵgc, effects$7 as ɵgd, BillingCountriesEffect as ɵge, DeliveryCountriesEffects as ɵgf, OrderDetailsEffect as ɵgg, UserPaymentMethodsEffects as ɵgh, RegionsEffects as ɵgi, ResetPasswordEffects as ɵgj, TitlesEffects as ɵgk, UserAddressesEffects as ɵgl, UserConsentsEffect as ɵgm, UserDetailsEffects as ɵgn, UserOrdersEffect as ɵgo, UserRegisterEffects as ɵgp, ClearMiscsDataEffect as ɵgq, ForgotPasswordEffects as ɵgr, UpdateEmailEffects as ɵgs, UpdatePasswordEffects as ɵgt, reducer$o as ɵgu, reducer$m as ɵgv, reducer$f as ɵgw, reducer$n as ɵgx, reducer$i as ɵgy, reducer$p as ɵgz, reducerProvider$1 as ɵh, reducer$h as ɵha, reducer$g as ɵhb, reducer$l as ɵhc, reducer$j as ɵhd, reducer$k as ɵhe, ProcessModule as ɵhf, ProcessStoreModule as ɵhg, PROCESS_FEATURE as ɵhh, getReducers$8 as ɵhi, reducerToken$8 as ɵhj, reducerProvider$8 as ɵhk, clearAuthState as ɵi, metaReducers as ɵj, effects$1 as ɵk, ClientTokenEffect as ɵl, UserTokenEffects as ɵm, UserAuthenticationTokenService as ɵn, ClientAuthenticationTokenService as ɵo, reducer$1 as ɵp, defaultAuthConfig as ɵq, AuthServices as ɵr, ClientErrorHandlingService as ɵs, UserErrorHandlingService as ɵt, UrlParsingService as ɵv, interceptors as ɵw, ClientTokenInterceptor as ɵx, UserTokenInterceptor as ɵy, AuthErrorInterceptor as ɵz };
//# sourceMappingURL=spartacus-core.js.map

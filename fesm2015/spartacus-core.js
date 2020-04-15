import { __decorate, __param, __rest, __awaiter } from 'tslib';
import { InjectionToken, Optional, NgModule, isDevMode, ɵɵdefineInjectable, ɵɵinject, Injectable, Inject, PLATFORM_ID, Injector, INJECTOR, APP_INITIALIZER, Pipe, inject, TemplateRef, ViewContainerRef, Input, Directive, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser, isPlatformServer, Location, DatePipe, getLocaleId } from '@angular/common';
import { createFeatureSelector, createSelector, select, Store, INIT, UPDATE, META_REDUCERS, combineReducers, StoreModule, ActionsSubject } from '@ngrx/store';
import { of, fromEvent, throwError, EMPTY, iif, combineLatest, forkJoin, Subject, BehaviorSubject, merge, Subscription, timer, from, queueScheduler, using, Observable, defer } from 'rxjs';
import { filter, map, take, switchMap, debounceTime, startWith, distinctUntilChanged, tap, catchError, exhaustMap, mergeMap, withLatestFrom, pluck, shareReplay, share, concatMap, mapTo, delay, debounce, switchMapTo, groupBy, observeOn, distinctUntilKeyChanged, auditTime, takeWhile } from 'rxjs/operators';
import { HttpHeaders, HttpErrorResponse, HttpParams, HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { PRIMARY_OUTLET, Router, DefaultUrlSerializer, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, UrlSerializer, ActivatedRoute, RouterModule } from '@angular/router';
import { ofType, Actions, Effect, EffectsModule, createEffect } from '@ngrx/effects';
import { makeStateKey, TransferState, Meta } from '@angular/platform-browser';
import { ROUTER_NAVIGATED, ROUTER_CANCEL, ROUTER_ERROR, ROUTER_NAVIGATION, RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import i18next from 'i18next';
import i18nextXhrBackend from 'i18next-xhr-backend';

function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}
function deepMerge(target = {}, ...sources) {
    if (!sources.length) {
        return target;
    }
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

var ConfigModule_1;
/**
 * Global Configuration injection token, can be used to inject configuration to any part of the app
 */
const Config = new InjectionToken('Configuration');
/**
 * Config chunk token, can be used to provide configuration chunk and contribute to the global configuration object.
 * Should not be used directly, use `provideConfig` or import `ConfigModule.withConfig` instead.
 */
const ConfigChunk = new InjectionToken('ConfigurationChunk');
/**
 * Config chunk token, can be used to provide configuration chunk and contribute to the default configuration.
 * Should not be used directly, use `provideDefaultConfig` or `provideDefaultConfigFactory` instead.
 *
 * General rule is, that all config provided in libraries should be provided as default config.
 */
const DefaultConfigChunk = new InjectionToken('DefaultConfigurationChunk');
/**
 * Helper function to provide configuration chunk using ConfigChunk token
 *
 * To provide default configuration in libraries provideDefaultConfig should be used instead.
 *
 * @param config Config object to merge with the global configuration
 */
function provideConfig(config = {}, defaultConfig = false) {
    return {
        provide: defaultConfig ? DefaultConfigChunk : ConfigChunk,
        useValue: config,
        multi: true,
    };
}
/**
 * Helper function to provide configuration with factory function, using ConfigChunk token
 *
 * To provide default configuration in libraries provideDefaultConfigFactory should be used instead.
 *
 * @param configFactory Factory Function that will generate config object
 * @param deps Optional dependencies to a factory function
 */
function provideConfigFactory(configFactory, deps, defaultConfig = false) {
    return {
        provide: defaultConfig ? DefaultConfigChunk : ConfigChunk,
        useFactory: configFactory,
        multi: true,
        deps: deps,
    };
}
/**
 * Helper function to provide default configuration chunk using DefaultConfigChunk token
 *
 * @param config Config object to merge with the default configuration
 */
function provideDefaultConfig(config = {}) {
    return {
        provide: DefaultConfigChunk,
        useValue: config,
        multi: true,
    };
}
/**
 * Helper function to provide default configuration with factory function, using DefaultConfigChunk token
 *
 * @param configFactory Factory Function that will generate config object
 * @param deps Optional dependencies to a factory function
 */
function provideDefaultConfigFactory(configFactory, deps) {
    return {
        provide: DefaultConfigChunk,
        useFactory: configFactory,
        multi: true,
        deps: deps,
    };
}
/**
 * Factory function that merges all configurations chunks. Should not be used directly without explicit reason.
 *
 */
function configurationFactory(configChunks = [], defaultConfigChunks = []) {
    const config = deepMerge({}, ...(defaultConfigChunks !== null && defaultConfigChunks !== void 0 ? defaultConfigChunks : []), ...(configChunks !== null && configChunks !== void 0 ? configChunks : []));
    return config;
}
let ConfigModule = ConfigModule_1 = class ConfigModule {
    /**
     * Import ConfigModule and contribute config to the global configuration
     *
     * To provide default configuration in libraries provideDefaultConfig should be used instead.
     *
     * @param config Config object to merge with the global configuration
     */
    static withConfig(config) {
        return {
            ngModule: ConfigModule_1,
            providers: [provideConfig(config)],
        };
    }
    /**
     * Import ConfigModule and contribute config to the global configuration using factory function
     *
     * To provide default configuration in libraries provideDefaultConfigFactory should be used instead.
     *
     * @param configFactory Factory function that will generate configuration
     * @param deps Optional dependencies to factory function
     */
    static withConfigFactory(configFactory, deps) {
        return {
            ngModule: ConfigModule_1,
            providers: [provideConfigFactory(configFactory, deps)],
        };
    }
    /**
     * Module with providers, should be imported only once, if possible, at the root of the app.
     *
     * @param config
     */
    static forRoot(config = {}) {
        return {
            ngModule: ConfigModule_1,
            providers: [
                provideConfig(config),
                {
                    provide: Config,
                    useFactory: configurationFactory,
                    deps: [
                        [new Optional(), ConfigChunk],
                        [new Optional(), DefaultConfigChunk],
                    ],
                },
            ],
        };
    }
};
ConfigModule = ConfigModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [],
    })
], ConfigModule);

class SiteContextConfig {
}

class OccConfig extends SiteContextConfig {
}

class AnonymousConsentsConfig extends OccConfig {
}

const defaultAnonymousConsentsConfig = {
    anonymousConsents: {
        registerConsent: 'MARKETING_NEWSLETTER',
        showLegalDescriptionInDialog: true,
        requiredConsents: [],
        consentManagementPage: {
            showAnonymousConsents: true,
            hideConsents: [],
        },
    },
};

class AuthConfig extends OccConfig {
}

const defaultAuthConfig = {
    authentication: {
        client_id: 'mobile_android',
        client_secret: 'secret',
    },
    backend: {
        occ: {
            endpoints: {
                login: '/authorizationserver/oauth/token',
                revoke: '/authorizationserver/oauth/revoke',
            },
        },
    },
};

const USE_CLIENT_TOKEN = 'cx-use-client-token';
const USE_CUSTOMER_SUPPORT_AGENT_TOKEN = 'cx-use-csagent-token';
const TOKEN_REVOCATION_HEADER = 'cx-token-revocation';
class InterceptorUtil {
    static createHeader(headerName, interceptorParam, headers) {
        if (headers) {
            return headers.append(headerName, JSON.stringify(interceptorParam));
        }
        headers = new HttpHeaders().set(headerName, JSON.stringify(interceptorParam));
        return headers;
    }
    static removeHeader(headerName, request) {
        const updatedHeaders = request.headers.delete(headerName);
        return request.clone({ headers: updatedHeaders });
    }
    static getInterceptorParam(headerName, headers) {
        const rawValue = headers.get(headerName);
        if (rawValue) {
            return JSON.parse(rawValue);
        }
        return undefined;
    }
}

const OCC_USER_ID_CURRENT = 'current';
const OCC_USER_ID_ANONYMOUS = 'anonymous';
const OCC_USER_ID_GUEST = 'guest';
const OCC_CART_ID_CURRENT = 'current';

const ENTITY_REMOVE_ACTION = '[ENTITY] REMOVE';
const ENTITY_REMOVE_ALL_ACTION = '[ENTITY] REMOVE ALL';
function entityMeta(type, id) {
    return {
        entityType: type,
        entityId: id,
    };
}
function entityRemoveMeta(type, id) {
    return {
        entityId: id,
        entityType: type,
        entityRemove: true,
    };
}
function entityRemoveAllMeta(type) {
    return {
        entityId: null,
        entityType: type,
        entityRemove: true,
    };
}
class EntityRemoveAction {
    constructor(entityType, id) {
        this.type = ENTITY_REMOVE_ACTION;
        this.meta = entityRemoveMeta(entityType, id);
    }
}
class EntityRemoveAllAction {
    constructor(entityType) {
        this.type = ENTITY_REMOVE_ALL_ACTION;
        this.meta = entityRemoveAllMeta(entityType);
    }
}

var entity_action = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ENTITY_REMOVE_ACTION: ENTITY_REMOVE_ACTION,
    ENTITY_REMOVE_ALL_ACTION: ENTITY_REMOVE_ALL_ACTION,
    entityMeta: entityMeta,
    entityRemoveMeta: entityRemoveMeta,
    entityRemoveAllMeta: entityRemoveAllMeta,
    EntityRemoveAction: EntityRemoveAction,
    EntityRemoveAllAction: EntityRemoveAllAction
});

const LOADER_LOAD_ACTION = '[LOADER] LOAD';
const LOADER_FAIL_ACTION = '[LOADER] FAIL';
const LOADER_SUCCESS_ACTION = '[LOADER] SUCCESS';
const LOADER_RESET_ACTION = '[LOADER] RESET';
function loadMeta(entityType) {
    return {
        entityType: entityType,
        loader: {
            load: true,
        },
    };
}
function failMeta(entityType, error) {
    return {
        entityType: entityType,
        loader: {
            error: error ? error : true,
        },
    };
}
function successMeta(entityType) {
    return {
        entityType: entityType,
        loader: {
            success: true,
        },
    };
}
function resetMeta(entityType) {
    return {
        entityType: entityType,
        loader: {},
    };
}
class LoaderLoadAction {
    constructor(entityType) {
        this.type = LOADER_LOAD_ACTION;
        this.meta = loadMeta(entityType);
    }
}
class LoaderFailAction {
    constructor(entityType, error) {
        this.type = LOADER_FAIL_ACTION;
        this.meta = failMeta(entityType, error);
    }
}
class LoaderSuccessAction {
    constructor(entityType) {
        this.type = LOADER_SUCCESS_ACTION;
        this.meta = successMeta(entityType);
    }
}
class LoaderResetAction {
    constructor(entityType) {
        this.type = LOADER_RESET_ACTION;
        this.meta = resetMeta(entityType);
    }
}

var loader_action = /*#__PURE__*/Object.freeze({
    __proto__: null,
    LOADER_LOAD_ACTION: LOADER_LOAD_ACTION,
    LOADER_FAIL_ACTION: LOADER_FAIL_ACTION,
    LOADER_SUCCESS_ACTION: LOADER_SUCCESS_ACTION,
    LOADER_RESET_ACTION: LOADER_RESET_ACTION,
    loadMeta: loadMeta,
    failMeta: failMeta,
    successMeta: successMeta,
    resetMeta: resetMeta,
    LoaderLoadAction: LoaderLoadAction,
    LoaderFailAction: LoaderFailAction,
    LoaderSuccessAction: LoaderSuccessAction,
    LoaderResetAction: LoaderResetAction
});

const ENTITY_LOAD_ACTION = '[ENTITY] LOAD';
const ENTITY_FAIL_ACTION = '[ENTITY] LOAD FAIL';
const ENTITY_SUCCESS_ACTION = '[ENTITY] LOAD SUCCESS';
const ENTITY_RESET_ACTION = '[ENTITY] RESET';
function entityLoadMeta(entityType, id) {
    return Object.assign(Object.assign({}, loadMeta(entityType)), entityMeta(entityType, id));
}
function entityFailMeta(entityType, id, error) {
    return Object.assign(Object.assign({}, failMeta(entityType, error)), entityMeta(entityType, id));
}
function entitySuccessMeta(entityType, id) {
    return Object.assign(Object.assign({}, successMeta(entityType)), entityMeta(entityType, id));
}
function entityResetMeta(entityType, id) {
    return Object.assign(Object.assign({}, resetMeta(entityType)), entityMeta(entityType, id));
}
class EntityLoadAction {
    constructor(entityType, id) {
        this.type = ENTITY_LOAD_ACTION;
        this.meta = entityLoadMeta(entityType, id);
    }
}
class EntityFailAction {
    constructor(entityType, id, error) {
        this.type = ENTITY_FAIL_ACTION;
        this.meta = entityFailMeta(entityType, id, error);
    }
}
class EntitySuccessAction {
    constructor(entityType, id, payload) {
        this.payload = payload;
        this.type = ENTITY_SUCCESS_ACTION;
        this.meta = entitySuccessMeta(entityType, id);
    }
}
class EntityResetAction {
    constructor(entityType, id) {
        this.type = ENTITY_RESET_ACTION;
        this.meta = entityResetMeta(entityType, id);
    }
}

var entityLoader_action = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ENTITY_LOAD_ACTION: ENTITY_LOAD_ACTION,
    ENTITY_FAIL_ACTION: ENTITY_FAIL_ACTION,
    ENTITY_SUCCESS_ACTION: ENTITY_SUCCESS_ACTION,
    ENTITY_RESET_ACTION: ENTITY_RESET_ACTION,
    entityLoadMeta: entityLoadMeta,
    entityFailMeta: entityFailMeta,
    entitySuccessMeta: entitySuccessMeta,
    entityResetMeta: entityResetMeta,
    EntityLoadAction: EntityLoadAction,
    EntityFailAction: EntityFailAction,
    EntitySuccessAction: EntitySuccessAction,
    EntityResetAction: EntityResetAction
});

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
 */
function loaderReducer(entityType, reducer) {
    return (state = initialLoaderState, action) => {
        if (action.meta &&
            action.meta.loader &&
            action.meta.entityType === entityType) {
            const entity = action.meta.loader;
            if (entity.load) {
                return Object.assign(Object.assign({}, state), { loading: true, value: reducer ? reducer(state.value, action) : state.value });
            }
            else if (entity.error) {
                return Object.assign(Object.assign({}, state), { loading: false, error: true, success: false, value: reducer ? reducer(state.value, action) : undefined });
            }
            else if (entity.success) {
                return Object.assign(Object.assign({}, state), { value: reducer ? reducer(state.value, action) : action.payload, loading: false, error: false, success: true });
            }
            else {
                // reset state action
                return Object.assign(Object.assign({}, initialLoaderState), { value: reducer
                        ? reducer(initialLoaderState.value, action)
                        : initialLoaderState.value });
            }
        }
        if (reducer) {
            const newValue = reducer(state.value, action);
            if (newValue !== state.value) {
                return Object.assign(Object.assign({}, state), { value: newValue });
            }
        }
        return state;
    };
}

function entityStateSelector(state, id) {
    return state.entities[id] || initialLoaderState;
}
function entityValueSelector(state, id) {
    const entityState = entityStateSelector(state, id);
    return entityState.value;
}
function entityLoadingSelector(state, id) {
    const entityState = entityStateSelector(state, id);
    return entityState.loading;
}
function entityErrorSelector(state, id) {
    const entityState = entityStateSelector(state, id);
    return entityState.error;
}
function entitySuccessSelector(state, id) {
    const entityState = entityStateSelector(state, id);
    return entityState.success;
}

var entityLoader_selectors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    entityStateSelector: entityStateSelector,
    entityValueSelector: entityValueSelector,
    entityLoadingSelector: entityLoadingSelector,
    entityErrorSelector: entityErrorSelector,
    entitySuccessSelector: entitySuccessSelector
});

const initialEntityState = { entities: {} };
/**
 * Higher order reducer for reusing reducer logic for multiple entities
 *
 * Utilizes entityId meta field to target entity by id in actions
 */
function entityReducer(entityType, reducer) {
    return (state = initialEntityState, action) => {
        let ids;
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
                    let removed = false;
                    const newEntities = Object.keys(state.entities).reduce((acc, cur) => {
                        if (ids.includes(cur)) {
                            removed = true;
                        }
                        else {
                            acc[cur] = state.entities[cur];
                        }
                        return acc;
                    }, {});
                    return removed ? { entities: newEntities } : state;
                }
            }
            partitionPayload =
                Array.isArray(action.meta.entityId) && Array.isArray(action.payload);
        }
        else {
            ids = Object.keys(state.entities);
        }
        const entityUpdates = {};
        for (let i = 0; i < ids.length; i++) {
            const id = ids[i];
            const subAction = partitionPayload
                ? Object.assign(Object.assign({}, action), { payload: action.payload[i] }) : action;
            const newState = reducer(state.entities[id], subAction);
            if (newState) {
                entityUpdates[id] = newState;
            }
        }
        if (Object.keys(entityUpdates).length > 0) {
            return Object.assign(Object.assign({}, state), { entities: Object.assign(Object.assign({}, state.entities), entityUpdates) });
        }
        return state;
    };
}

/**
 * Higher order reducer that wraps LoaderReducer and EntityReducer enhancing
 * single state reducer to support multiple entities with generic loading flags
 */
function entityLoaderReducer(entityType, reducer) {
    return entityReducer(entityType, loaderReducer(entityType, reducer));
}

const PROCESSES_INCREMENT_ACTION = '[PROCESSES LOADER] INCREMENT';
const PROCESSES_DECREMENT_ACTION = '[PROCESSES LOADER] DECREMENT';
const PROCESSES_LOADER_RESET_ACTION = '[PROCESSES LOADER] RESET';
function processesIncrementMeta(entityType) {
    return {
        entityType: entityType,
        loader: undefined,
        processesCountDiff: 1,
    };
}
function processesDecrementMeta(entityType) {
    return {
        entityType: entityType,
        loader: undefined,
        processesCountDiff: -1,
    };
}
function processesLoaderResetMeta(entityType) {
    // processes reset action is a reset action for loader reducer, but not the other way around
    return Object.assign(Object.assign({}, resetMeta(entityType)), { processesCountDiff: null });
}
class ProcessesLoaderResetAction {
    constructor(entityType) {
        this.type = PROCESSES_LOADER_RESET_ACTION;
        this.meta = processesLoaderResetMeta(entityType);
    }
}
class ProcessesIncrementAction {
    constructor(entityType) {
        this.type = PROCESSES_INCREMENT_ACTION;
        this.meta = processesIncrementMeta(entityType);
    }
}
class ProcessesDecrementAction {
    constructor(entityType) {
        this.type = PROCESSES_DECREMENT_ACTION;
        this.meta = processesDecrementMeta(entityType);
    }
}

var processesLoader_action = /*#__PURE__*/Object.freeze({
    __proto__: null,
    PROCESSES_INCREMENT_ACTION: PROCESSES_INCREMENT_ACTION,
    PROCESSES_DECREMENT_ACTION: PROCESSES_DECREMENT_ACTION,
    PROCESSES_LOADER_RESET_ACTION: PROCESSES_LOADER_RESET_ACTION,
    processesIncrementMeta: processesIncrementMeta,
    processesDecrementMeta: processesDecrementMeta,
    processesLoaderResetMeta: processesLoaderResetMeta,
    ProcessesLoaderResetAction: ProcessesLoaderResetAction,
    ProcessesIncrementAction: ProcessesIncrementAction,
    ProcessesDecrementAction: ProcessesDecrementAction
});

const ENTITY_PROCESSES_LOADER_RESET_ACTION = '[ENTITY] PROCESSES LOADER RESET';
const ENTITY_PROCESSES_INCREMENT_ACTION = '[ENTITY] PROCESSES INCREMENT';
const ENTITY_PROCESSES_DECREMENT_ACTION = '[ENTITY] PROCESSES DECREMENT';
function entityProcessesLoaderResetMeta(entityType, id) {
    return Object.assign(Object.assign({}, processesLoaderResetMeta(entityType)), entityMeta(entityType, id));
}
function entityProcessesIncrementMeta(entityType, id) {
    return Object.assign(Object.assign({}, processesIncrementMeta(entityType)), entityMeta(entityType, id));
}
function entityProcessesDecrementMeta(entityType, id) {
    return Object.assign(Object.assign({}, processesDecrementMeta(entityType)), entityMeta(entityType, id));
}
class EntityProcessesLoaderResetAction {
    constructor(entityType, id) {
        this.type = ENTITY_PROCESSES_LOADER_RESET_ACTION;
        this.meta = entityProcessesLoaderResetMeta(entityType, id);
    }
}
class EntityProcessesIncrementAction {
    constructor(entityType, id) {
        this.type = ENTITY_PROCESSES_INCREMENT_ACTION;
        this.meta = entityProcessesIncrementMeta(entityType, id);
    }
}
class EntityProcessesDecrementAction {
    constructor(entityType, id) {
        this.type = ENTITY_PROCESSES_DECREMENT_ACTION;
        this.meta = entityProcessesDecrementMeta(entityType, id);
    }
}

var entityProcessesLoader_action = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ENTITY_PROCESSES_LOADER_RESET_ACTION: ENTITY_PROCESSES_LOADER_RESET_ACTION,
    ENTITY_PROCESSES_INCREMENT_ACTION: ENTITY_PROCESSES_INCREMENT_ACTION,
    ENTITY_PROCESSES_DECREMENT_ACTION: ENTITY_PROCESSES_DECREMENT_ACTION,
    entityProcessesLoaderResetMeta: entityProcessesLoaderResetMeta,
    entityProcessesIncrementMeta: entityProcessesIncrementMeta,
    entityProcessesDecrementMeta: entityProcessesDecrementMeta,
    EntityProcessesLoaderResetAction: EntityProcessesLoaderResetAction,
    EntityProcessesIncrementAction: EntityProcessesIncrementAction,
    EntityProcessesDecrementAction: EntityProcessesDecrementAction
});

function isStableSelector(state) {
    return state.processesCount === 0 && !state.loading;
}
function hasPendingProcessesSelector(state) {
    return state.processesCount > 0;
}

var processesLoader_selectors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isStableSelector: isStableSelector,
    hasPendingProcessesSelector: hasPendingProcessesSelector
});

const initialProcessesState = {
    processesCount: 0,
};
/**
 * Higher order reducer that adds processes count
 */
function processesLoaderReducer(entityType, reducer) {
    return (state = Object.assign(Object.assign({}, initialProcessesState), initialLoaderState), action) => {
        const loaderState = loaderReducer(entityType, reducer)(state, action);
        if (action.meta && action.meta.entityType === entityType) {
            const processesCountDiff = action.meta.processesCountDiff;
            if (isDevMode() && state.processesCount + processesCountDiff < 0) {
                console.error(`Action '${action.type}' sets processesCount to value < 0!\n` +
                    'Make sure to keep processesCount in sync.\n' +
                    'There should always be only one decrement action for each increment action.\n' +
                    "Make sure that you don't reset state in between those actions.\n", action);
            }
            if (processesCountDiff) {
                return Object.assign(Object.assign({}, loaderState), { processesCount: state.processesCount
                        ? state.processesCount + processesCountDiff
                        : processesCountDiff });
            }
            else if (processesCountDiff === null) {
                // reset action
                return Object.assign(Object.assign({}, loaderState), initialProcessesState);
            }
        }
        return loaderState;
    };
}

const initialProcessesLoaderState = Object.assign(Object.assign({}, initialLoaderState), initialProcessesState);
function entityHasPendingProcessesSelector(state, id) {
    const entityState = entityStateSelector(state, id);
    return hasPendingProcessesSelector(entityState);
}
function entityIsStableSelector(state, id) {
    const entityState = entityStateSelector(state, id);
    return isStableSelector(entityState);
}
function entityProcessesLoaderStateSelector(state, id) {
    return state.entities[id] || initialProcessesLoaderState;
}

var entityProcessesLoader_selectors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    entityHasPendingProcessesSelector: entityHasPendingProcessesSelector,
    entityIsStableSelector: entityIsStableSelector,
    entityProcessesLoaderStateSelector: entityProcessesLoaderStateSelector
});

/**
 * Higher order reducer that wraps ProcessesLoaderReducer and EntityReducer enhancing
 * single state reducer to support multiple entities with generic processesCount flag
 */
function entityProcessesLoaderReducer(entityType, reducer) {
    return entityReducer(entityType, processesLoaderReducer(entityType, reducer));
}

function entitySelector(state, id) {
    return state.entities[id] || undefined;
}

var entity_selectors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    entitySelector: entitySelector
});

const OBJECT_SEPARATOR = '.';
function getStateSliceValue(keys, state) {
    return keys
        .split(OBJECT_SEPARATOR)
        .reduce((previous, current) => (previous ? previous[current] : undefined), state);
}
function createShellObject(key, excludeKeys, value) {
    if (!key || !value || Object.keys(value).length === 0) {
        return {};
    }
    const shell = key.split(OBJECT_SEPARATOR).reduceRight((acc, previous) => {
        return { [previous]: acc };
    }, value);
    return handleExclusions(key, excludeKeys, shell);
}
function getStateSlice(keys, excludeKeys, state) {
    if (keys && keys.length === 0) {
        return {};
    }
    let stateSlices = {};
    for (const currentKey of keys) {
        const stateValue = getStateSliceValue(currentKey, state);
        const shell = createShellObject(currentKey, excludeKeys, stateValue);
        stateSlices = deepMerge(stateSlices, shell);
    }
    return stateSlices;
}
function handleExclusions(key, excludeKeys, value) {
    const exclusionKeys = getExclusionKeys(key, excludeKeys);
    if (exclusionKeys.length === 0) {
        return value;
    }
    const finalValue = deepMerge({}, value);
    for (const currentExclusionKey of exclusionKeys) {
        const exclusionChunksSplit = currentExclusionKey.split(OBJECT_SEPARATOR);
        let nestedTemp = finalValue;
        for (let i = 0; i < exclusionChunksSplit.length; i++) {
            const currentChunk = exclusionChunksSplit[i];
            // last iteration
            if (i === exclusionChunksSplit.length - 1) {
                if (nestedTemp && nestedTemp[currentChunk]) {
                    delete nestedTemp[currentChunk];
                }
            }
            else {
                nestedTemp = nestedTemp[currentChunk];
            }
        }
    }
    return finalValue;
}
function getExclusionKeys(key, excludeKeys) {
    if (!key || !excludeKeys) {
        return [];
    }
    const exclusionKeys = [];
    for (const exclusionKey of excludeKeys) {
        if (exclusionKey.includes(key)) {
            exclusionKeys.push(exclusionKey);
        }
    }
    return exclusionKeys;
}
function filterKeysByType(keys, type) {
    if (!keys) {
        return [];
    }
    return Object.keys(keys).filter((key) => keys[key] === type);
}

function loaderValueSelector(state) {
    return state.value;
}
function loaderLoadingSelector(state) {
    return state.loading;
}
function loaderErrorSelector(state) {
    return state.error;
}
function loaderSuccessSelector(state) {
    return state.success;
}

var loader_selectors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    loaderValueSelector: loaderValueSelector,
    loaderLoadingSelector: loaderLoadingSelector,
    loaderErrorSelector: loaderErrorSelector,
    loaderSuccessSelector: loaderSuccessSelector
});

function ofLoaderLoad(entityType) {
    return filter((action) => action.meta &&
        action.meta.loader &&
        action.meta.entityType === entityType &&
        action.meta.loader.load);
}
function ofLoaderFail(entityType) {
    return filter((action) => action.meta &&
        action.meta.loader &&
        action.meta.entityType === entityType &&
        action.meta.loader.error);
}
function ofLoaderSuccess(entityType) {
    return filter((action) => action.meta &&
        action.meta.loader &&
        action.meta.entityType === entityType &&
        !action.meta.loader.load &&
        !action.meta.loader.error);
}

const AUTH_FEATURE = 'auth';
const CLIENT_TOKEN_DATA = '[Auth] Client Token Data';

const LOAD_CLIENT_TOKEN = '[Token] Load Client Token';
const LOAD_CLIENT_TOKEN_FAIL = '[Token] Load Client Token Fail';
const LOAD_CLIENT_TOKEN_SUCCESS = '[Token] Load Client Token Success';
class LoadClientToken extends LoaderLoadAction {
    constructor() {
        super(CLIENT_TOKEN_DATA);
        this.type = LOAD_CLIENT_TOKEN;
    }
}
class LoadClientTokenFail extends LoaderFailAction {
    constructor(payload) {
        super(CLIENT_TOKEN_DATA, payload);
        this.payload = payload;
        this.type = LOAD_CLIENT_TOKEN_FAIL;
    }
}
class LoadClientTokenSuccess extends LoaderSuccessAction {
    constructor(payload) {
        super(CLIENT_TOKEN_DATA);
        this.payload = payload;
        this.type = LOAD_CLIENT_TOKEN_SUCCESS;
    }
}

const LOGIN = '[Auth] Login';
const LOGOUT = '[Auth] Logout';
const LOGOUT_CUSTOMER_SUPPORT_AGENT = '[Auth] Logout Customer Support Agent';
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

const LOAD_USER_TOKEN = '[Auth] Load User Token';
const LOAD_USER_TOKEN_FAIL = '[Auth] Load User Token Fail';
const LOAD_USER_TOKEN_SUCCESS = '[Auth] Load User Token Success';
const REFRESH_USER_TOKEN = '[Auth] Refresh User Token';
const REFRESH_USER_TOKEN_FAIL = '[Auth] Refresh User Token Fail';
const REFRESH_USER_TOKEN_SUCCESS = '[Auth] Refresh User Token Success';
const REVOKE_USER_TOKEN = '[Auth] Revoke User Token';
const REVOKE_USER_TOKEN_FAIL = '[Auth] Revoke User Token Fail';
const REVOKE_USER_TOKEN_SUCCESS = '[Auth] Revoke User Token Success';
class LoadUserToken {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_USER_TOKEN;
    }
}
class LoadUserTokenFail {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_USER_TOKEN_FAIL;
    }
}
class LoadUserTokenSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_USER_TOKEN_SUCCESS;
    }
}
class RefreshUserToken {
    constructor(payload) {
        this.payload = payload;
        this.type = REFRESH_USER_TOKEN;
    }
}
class RefreshUserTokenSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = REFRESH_USER_TOKEN_SUCCESS;
    }
}
class RefreshUserTokenFail {
    constructor(payload) {
        this.payload = payload;
        this.type = REFRESH_USER_TOKEN_FAIL;
    }
}
class RevokeUserToken {
    constructor(payload) {
        this.payload = payload;
        this.type = REVOKE_USER_TOKEN;
    }
}
class RevokeUserTokenSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = REVOKE_USER_TOKEN_SUCCESS;
    }
}
class RevokeUserTokenFail {
    constructor(payload) {
        this.payload = payload;
        this.type = REVOKE_USER_TOKEN_FAIL;
    }
}



var authGroup_actions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    LOAD_CLIENT_TOKEN: LOAD_CLIENT_TOKEN,
    LOAD_CLIENT_TOKEN_FAIL: LOAD_CLIENT_TOKEN_FAIL,
    LOAD_CLIENT_TOKEN_SUCCESS: LOAD_CLIENT_TOKEN_SUCCESS,
    LoadClientToken: LoadClientToken,
    LoadClientTokenFail: LoadClientTokenFail,
    LoadClientTokenSuccess: LoadClientTokenSuccess,
    LOGIN: LOGIN,
    LOGOUT: LOGOUT,
    LOGOUT_CUSTOMER_SUPPORT_AGENT: LOGOUT_CUSTOMER_SUPPORT_AGENT,
    Login: Login,
    Logout: Logout,
    LOAD_USER_TOKEN: LOAD_USER_TOKEN,
    LOAD_USER_TOKEN_FAIL: LOAD_USER_TOKEN_FAIL,
    LOAD_USER_TOKEN_SUCCESS: LOAD_USER_TOKEN_SUCCESS,
    REFRESH_USER_TOKEN: REFRESH_USER_TOKEN,
    REFRESH_USER_TOKEN_FAIL: REFRESH_USER_TOKEN_FAIL,
    REFRESH_USER_TOKEN_SUCCESS: REFRESH_USER_TOKEN_SUCCESS,
    REVOKE_USER_TOKEN: REVOKE_USER_TOKEN,
    REVOKE_USER_TOKEN_FAIL: REVOKE_USER_TOKEN_FAIL,
    REVOKE_USER_TOKEN_SUCCESS: REVOKE_USER_TOKEN_SUCCESS,
    LoadUserToken: LoadUserToken,
    LoadUserTokenFail: LoadUserTokenFail,
    LoadUserTokenSuccess: LoadUserTokenSuccess,
    RefreshUserToken: RefreshUserToken,
    RefreshUserTokenSuccess: RefreshUserTokenSuccess,
    RefreshUserTokenFail: RefreshUserTokenFail,
    RevokeUserToken: RevokeUserToken,
    RevokeUserTokenSuccess: RevokeUserTokenSuccess,
    RevokeUserTokenFail: RevokeUserTokenFail
});

const getAuthState = createFeatureSelector(AUTH_FEATURE);

const ɵ0 = (state) => state.clientToken;
const getClientTokenState = createSelector(getAuthState, ɵ0);

const getUserTokenSelector = (state) => state.token;
const ɵ0$1 = getUserTokenSelector;
const ɵ1 = (state) => state.userToken;
const getUserTokenState = createSelector(getAuthState, ɵ1);
const getUserToken = createSelector(getUserTokenState, getUserTokenSelector);



var authGroup_selectors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getClientTokenState: getClientTokenState,
    ɵ0: ɵ0,
    getAuthState: getAuthState,
    getUserTokenState: getUserTokenState,
    getUserToken: getUserToken,
    ɵ1: ɵ1
});

let AuthService = class AuthService {
    constructor(store) {
        this.store = store;
    }
    /**
     * Loads a new user token
     * @param userId
     * @param password
     */
    authorize(userId, password) {
        this.store.dispatch(new LoadUserToken({
            userId: userId,
            password: password,
        }));
    }
    /**
     * This function provides the userId the OCC calls should use, depending
     * on whether there is an active storefront session or not.
     *
     * It returns the userId of the current storefront user or 'anonymous'
     * in the case there are no signed in user in the storefront.
     *
     * The user id of a regular customer session is 'current'.  In the case of an
     * asm customer emulation session, the userId will be the customerId.
     */
    getOccUserId() {
        return this.getUserToken().pipe(map((userToken) => {
            if (!!userToken && !!userToken.userId) {
                return userToken.userId;
            }
            else {
                return OCC_USER_ID_ANONYMOUS;
            }
        }));
    }
    /**
     * Calls provided callback with current user id.
     *
     * @param cb callback function to invoke
     */
    invokeWithUserId(cb) {
        return this.getOccUserId()
            .pipe(take(1))
            .subscribe((id) => cb(id));
    }
    /**
     * Returns the user's token
     */
    getUserToken() {
        return this.store.pipe(select(getUserToken));
    }
    /**
     * Refreshes the user token
     * @param token a user token to refresh
     */
    refreshUserToken(token) {
        this.store.dispatch(new RefreshUserToken({
            refreshToken: token.refresh_token,
        }));
    }
    /**
     * Store the provided token
     */
    authorizeWithToken(token) {
        this.store.dispatch(new LoadUserTokenSuccess(token));
    }
    /**
     * Logout a storefront customer
     */
    logout() {
        this.getUserToken()
            .pipe(take(1))
            .subscribe((userToken) => {
            this.store.dispatch(new Logout());
            if (Boolean(userToken) && userToken.userId === OCC_USER_ID_CURRENT) {
                this.store.dispatch(new RevokeUserToken(userToken));
            }
        });
    }
    /**
     * Returns a client token.  The client token from the store is returned if there is one.
     * Otherwise, an new token is fetched from the backend and saved in the store.
     */
    getClientToken() {
        return this.store.pipe(select(getClientTokenState), filter((state) => {
            if (this.isClientTokenLoaded(state)) {
                return true;
            }
            else {
                if (!state.loading) {
                    this.store.dispatch(new LoadClientToken());
                }
                return false;
            }
        }), map((state) => state.value));
    }
    /**
     * Fetches a clientToken from the backend ans saves it in the store where getClientToken can use it.
     * The new clientToken is returned.
     */
    refreshClientToken() {
        this.store.dispatch(new LoadClientToken());
        return this.store.pipe(select(getClientTokenState), filter((state) => this.isClientTokenLoaded(state)), map((state) => state.value));
    }
    isClientTokenLoaded(state) {
        return (state.success || state.error) && !state.loading;
    }
    /**
     * Returns `true` if the user is logged in; and `false` if the user is anonymous.
     */
    isUserLoggedIn() {
        return this.getUserToken().pipe(map((userToken) => Boolean(userToken) && Boolean(userToken.access_token)));
    }
};
AuthService.ctorParameters = () => [
    { type: Store }
];
AuthService.ɵprov = ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(ɵɵinject(Store)); }, token: AuthService, providedIn: "root" });
AuthService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AuthService);

let ClientErrorHandlingService = class ClientErrorHandlingService {
    constructor(authService) {
        this.authService = authService;
    }
    handleExpiredClientToken(request, next) {
        return this.authService.refreshClientToken().pipe(take(1), switchMap((token) => {
            return next.handle(this.createNewRequestWithNewToken(request, token));
        }));
    }
    createNewRequestWithNewToken(request, token) {
        request = request.clone({
            setHeaders: {
                Authorization: `${token.token_type} ${token.access_token}`,
            },
        });
        return request;
    }
};
ClientErrorHandlingService.ctorParameters = () => [
    { type: AuthService }
];
ClientErrorHandlingService = __decorate([
    Injectable()
], ClientErrorHandlingService);

let WindowRef = class WindowRef {
    constructor(document) {
        // it's a workaround to have document property properly typed
        // see: https://github.com/angular/angular/issues/15640
        this.document = document;
    }
    get nativeWindow() {
        return typeof window !== 'undefined' ? window : undefined;
    }
    get sessionStorage() {
        return this.nativeWindow ? this.nativeWindow.sessionStorage : undefined;
    }
    get localStorage() {
        return this.nativeWindow ? this.nativeWindow.localStorage : undefined;
    }
    /**
     * Returns an observable for the window resize event and emits an event
     * every 300ms in case of resizing. An event is simulated initially.
     *
     * If there's no window object availale (i.e. in SSR), a null value is emitted.
     */
    get resize$() {
        if (!this.nativeWindow) {
            return of(null);
        }
        else {
            return fromEvent(this.nativeWindow, 'resize').pipe(debounceTime(300), startWith({ target: this.nativeWindow }), distinctUntilChanged());
        }
    }
};
WindowRef.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
WindowRef.ɵprov = ɵɵdefineInjectable({ factory: function WindowRef_Factory() { return new WindowRef(ɵɵinject(DOCUMENT)); }, token: WindowRef, providedIn: "root" });
WindowRef = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(0, Inject(DOCUMENT))
], WindowRef);

let UrlParsingService = class UrlParsingService {
    constructor(router) {
        this.router = router;
    }
    getPrimarySegments(url) {
        const urlTree = this.router.parseUrl(url);
        return this._getPrimarySegmentsFromUrlTree(urlTree.root);
    }
    _getPrimarySegmentsFromUrlTree(tree) {
        const segments = tree.segments.map((s) => s.path);
        const childrenSegments = tree.children[PRIMARY_OUTLET]
            ? this._getPrimarySegmentsFromUrlTree(tree.children[PRIMARY_OUTLET])
            : [];
        return segments.concat(childrenSegments);
    }
};
UrlParsingService.ctorParameters = () => [
    { type: Router }
];
UrlParsingService.ɵprov = ɵɵdefineInjectable({ factory: function UrlParsingService_Factory() { return new UrlParsingService(ɵɵinject(Router)); }, token: UrlParsingService, providedIn: "root" });
UrlParsingService = __decorate([
    Injectable({ providedIn: 'root' })
], UrlParsingService);

const isParam = (segment) => segment.startsWith(':');
const getParamName = (segment) => segment.slice(1); // it just removes leading ':'
const ensureLeadingSlash = (path) => path.startsWith('/') ? path : '/' + path;
const removeLeadingSlash = (path) => path.startsWith('/') ? path.slice(1) : path;

class RoutingConfig {
}

let RoutingConfigService = class RoutingConfigService {
    constructor(config) {
        this.config = config;
    }
    getRouteConfig(routeName) {
        const routeConfig = this.config && this.config.routing && this.config.routing.routes;
        const result = routeConfig && routeConfig[routeName];
        if (!routeConfig || result === undefined) {
            this.warn(`No path was configured for the named route '${routeName}'!`);
        }
        return result;
    }
    warn(...args) {
        if (isDevMode()) {
            console.warn(...args);
        }
    }
};
RoutingConfigService.ctorParameters = () => [
    { type: RoutingConfig }
];
RoutingConfigService.ɵprov = ɵɵdefineInjectable({ factory: function RoutingConfigService_Factory() { return new RoutingConfigService(ɵɵinject(RoutingConfig)); }, token: RoutingConfigService, providedIn: "root" });
RoutingConfigService = __decorate([
    Injectable({ providedIn: 'root' })
], RoutingConfigService);

let SemanticPathService = class SemanticPathService {
    constructor(routingConfigService, urlParser) {
        this.routingConfigService = routingConfigService;
        this.urlParser = urlParser;
        this.ROOT_URL = ['/'];
    }
    /**
     * Returns the first path alias configured for a given route name. It adds `/` at the beginning.
     */
    get(routeName) {
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
     */
    transform(commands) {
        if (!Array.isArray(commands)) {
            commands = [commands];
        }
        const result = [];
        for (const command of commands) {
            if (!this.isRouteCommand(command)) {
                // don't modify segment that is not route command:
                result.push(command);
            }
            else {
                // generate array with url segments for given route command:
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
    isRouteCommand(command) {
        return command && Boolean(command.cxRoute);
    }
    shouldOutputAbsolute(commands) {
        return this.isRouteCommand(commands[0]);
    }
    generateUrlPart(command) {
        this.standarizeRouteCommand(command);
        if (!command.cxRoute) {
            return null;
        }
        const routeConfig = this.routingConfigService.getRouteConfig(command.cxRoute);
        // if no route translation was configured, return null:
        if (!routeConfig || !routeConfig.paths) {
            return null;
        }
        // find first path that can satisfy it's parameters with given parameters
        const path = this.findPathWithFillableParams(routeConfig, command.params);
        // if there is no configured path that can be satisfied with given params, return null
        if (!path) {
            return null;
        }
        const result = this.provideParamsValues(path, command.params, routeConfig.paramsMapping);
        return result;
    }
    standarizeRouteCommand(command) {
        command.params = command.params || {};
    }
    provideParamsValues(path, params, paramsMapping) {
        return this.urlParser.getPrimarySegments(path).map((segment) => {
            if (isParam(segment)) {
                const paramName = getParamName(segment);
                const mappedParamName = this.getMappedParamName(paramName, paramsMapping);
                return params[mappedParamName];
            }
            return segment;
        });
    }
    findPathWithFillableParams(routeConfig, params) {
        const foundPath = routeConfig.paths.find((path) => this.getParams(path).every((paramName) => {
            const mappedParamName = this.getMappedParamName(paramName, routeConfig.paramsMapping);
            return params[mappedParamName] !== undefined;
        }));
        if (foundPath === undefined || foundPath === null) {
            this.warn(`No configured path matches all its params to given object. `, `Route config: `, routeConfig, `Params object: `, params);
            return null;
        }
        return foundPath;
    }
    getParams(path) {
        return this.urlParser
            .getPrimarySegments(path)
            .filter(isParam)
            .map(getParamName);
    }
    getMappedParamName(paramName, paramsMapping) {
        if (paramsMapping) {
            return paramsMapping[paramName] || paramName;
        }
        return paramName;
    }
    warn(...args) {
        if (isDevMode()) {
            console.warn(...args);
        }
    }
};
SemanticPathService.ctorParameters = () => [
    { type: RoutingConfigService },
    { type: UrlParsingService }
];
SemanticPathService.ɵprov = ɵɵdefineInjectable({ factory: function SemanticPathService_Factory() { return new SemanticPathService(ɵɵinject(RoutingConfigService), ɵɵinject(UrlParsingService)); }, token: SemanticPathService, providedIn: "root" });
SemanticPathService = __decorate([
    Injectable({ providedIn: 'root' })
], SemanticPathService);

const ROUTER_GO = '[Router] Go';
const ROUTER_GO_BY_URL = '[Router] Go By Url';
const ROUTER_BACK = '[Router] Back';
const ROUTER_FORWARD = '[Router] Forward';
class RouteGoAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ROUTER_GO;
    }
}
class RouteGoByUrlAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ROUTER_GO_BY_URL;
    }
}
class RouteBackAction {
    constructor() {
        this.type = ROUTER_BACK;
    }
}
class RouteForwardAction {
    constructor() {
        this.type = ROUTER_FORWARD;
    }
}



var routingGroup_actions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ROUTER_GO: ROUTER_GO,
    ROUTER_GO_BY_URL: ROUTER_GO_BY_URL,
    ROUTER_BACK: ROUTER_BACK,
    ROUTER_FORWARD: ROUTER_FORWARD,
    RouteGoAction: RouteGoAction,
    RouteGoByUrlAction: RouteGoByUrlAction,
    RouteBackAction: RouteBackAction,
    RouteForwardAction: RouteForwardAction
});

const ROUTING_FEATURE = 'router';

const getRouterFeatureState = createFeatureSelector(ROUTING_FEATURE);
const ɵ0$2 = (state) => state.router;
const getRouterState = createSelector(getRouterFeatureState, ɵ0$2);
const ɵ1$1 = (routingState) => (routingState.state && routingState.state.context) || { id: '' };
const getPageContext = createSelector(getRouterState, ɵ1$1);
const ɵ2 = (routingState) => routingState.nextState && routingState.nextState.context;
const getNextPageContext = createSelector(getRouterState, ɵ2);
const ɵ3 = (context) => !!context;
const isNavigating = createSelector(getNextPageContext, ɵ3);



var routingGroup_selectors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getRouterFeatureState: getRouterFeatureState,
    getRouterState: getRouterState,
    getPageContext: getPageContext,
    getNextPageContext: getNextPageContext,
    isNavigating: isNavigating,
    ɵ0: ɵ0$2,
    ɵ1: ɵ1$1,
    ɵ2: ɵ2,
    ɵ3: ɵ3
});

let RoutingService = class RoutingService {
    constructor(store, winRef, semanticPathService) {
        this.store = store;
        this.winRef = winRef;
        this.semanticPathService = semanticPathService;
    }
    /**
     * Get the current router state
     */
    getRouterState() {
        return this.store.pipe(select(getRouterState));
    }
    /**
     * Get the `PageContext` from the state
     */
    getPageContext() {
        return this.store.pipe(select(getPageContext));
    }
    /**
     * Get the next `PageContext` from the state
     */
    getNextPageContext() {
        return this.store.pipe(select(getNextPageContext));
    }
    /**
     * Get the `isNavigating` info from the state
     */
    isNavigating() {
        return this.store.pipe(select(isNavigating));
    }
    /**
     * Navigation with a new state into history
     * @param commands: url commands
     * @param query
     * @param extras: Represents the extra options used during navigation.
     */
    go(commands, query, extras) {
        const path = this.semanticPathService.transform(commands);
        return this.navigate(path, query, extras);
    }
    /**
     * Navigation using URL
     * @param url
     */
    goByUrl(url) {
        this.store.dispatch(new RouteGoByUrlAction(url));
    }
    /**
     * Navigating back
     */
    back() {
        const isLastPageInApp = this.winRef.document.referrer.includes(this.winRef.nativeWindow.location.origin);
        if (isLastPageInApp) {
            this.store.dispatch(new RouteBackAction());
            return;
        }
        this.go(['/']);
        return;
    }
    /**
     * Navigating forward
     */
    forward() {
        this.store.dispatch(new RouteForwardAction());
    }
    /**
     * Navigation with a new state into history
     * @param path
     * @param query
     * @param extras: Represents the extra options used during navigation.
     */
    navigate(path, query, extras) {
        this.store.dispatch(new RouteGoAction({
            path,
            query,
            extras,
        }));
    }
};
RoutingService.ctorParameters = () => [
    { type: Store },
    { type: WindowRef },
    { type: SemanticPathService }
];
RoutingService.ɵprov = ɵɵdefineInjectable({ factory: function RoutingService_Factory() { return new RoutingService(ɵɵinject(Store), ɵɵinject(WindowRef), ɵɵinject(SemanticPathService)); }, token: RoutingService, providedIn: "root" });
RoutingService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], RoutingService);

let UserErrorHandlingService = class UserErrorHandlingService {
    constructor(authService, routingService) {
        this.authService = authService;
        this.routingService = routingService;
    }
    handleExpiredUserToken(request, next) {
        return this.handleExpiredToken().pipe(switchMap((token) => {
            return next.handle(this.createNewRequestWithNewToken(request, token));
        }));
    }
    handleExpiredRefreshToken() {
        // Logout user
        this.authService.logout();
    }
    handleExpiredToken() {
        let oldToken;
        return this.authService.getUserToken().pipe(tap((token) => {
            if (token.access_token && token.refresh_token && !oldToken) {
                this.authService.refreshUserToken(token);
            }
            else if (!token.access_token && !token.refresh_token) {
                this.routingService.go({ cxRoute: 'login' });
            }
            else if (!token.refresh_token) {
                this.authService.logout();
                this.routingService.go({ cxRoute: 'login' });
            }
            oldToken = oldToken || token;
        }), filter((token) => oldToken.access_token !== token.access_token), take(1));
    }
    createNewRequestWithNewToken(request, token) {
        request = request.clone({
            setHeaders: {
                Authorization: `${token.token_type} ${token.access_token}`,
            },
        });
        return request;
    }
};
UserErrorHandlingService.ctorParameters = () => [
    { type: AuthService },
    { type: RoutingService }
];
UserErrorHandlingService = __decorate([
    Injectable()
], UserErrorHandlingService);

const OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
let AuthErrorInterceptor = class AuthErrorInterceptor {
    constructor(userErrorHandlingService, clientErrorHandlingService, authService) {
        this.userErrorHandlingService = userErrorHandlingService;
        this.clientErrorHandlingService = clientErrorHandlingService;
        this.authService = authService;
    }
    intercept(request, next) {
        const isClientTokenRequest = this.isClientTokenRequest(request);
        if (isClientTokenRequest) {
            request = InterceptorUtil.removeHeader(USE_CLIENT_TOKEN, request);
        }
        return next.handle(request).pipe(catchError((errResponse) => {
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
        }));
    }
    isClientTokenRequest(request) {
        const isRequestMapping = InterceptorUtil.getInterceptorParam(USE_CLIENT_TOKEN, request.headers);
        return Boolean(isRequestMapping);
    }
    isExpiredToken(resp) {
        if (resp.error &&
            resp.error.errors &&
            resp.error.errors instanceof Array &&
            resp.error.errors[0]) {
            return resp.error.errors[0].type === 'InvalidTokenError';
        }
        return false;
    }
};
AuthErrorInterceptor.ctorParameters = () => [
    { type: UserErrorHandlingService },
    { type: ClientErrorHandlingService },
    { type: AuthService }
];
AuthErrorInterceptor.ɵprov = ɵɵdefineInjectable({ factory: function AuthErrorInterceptor_Factory() { return new AuthErrorInterceptor(ɵɵinject(UserErrorHandlingService), ɵɵinject(ClientErrorHandlingService), ɵɵinject(AuthService)); }, token: AuthErrorInterceptor, providedIn: "root" });
AuthErrorInterceptor = __decorate([
    Injectable({ providedIn: 'root' })
], AuthErrorInterceptor);

class DynamicTemplate {
    static resolve(templateString, templateVariables) {
        for (const variableLabel of Object.keys(templateVariables)) {
            const placeholder = new RegExp('\\${' + variableLabel + '}', 'g');
            templateString = templateString.replace(placeholder, templateVariables[variableLabel]);
        }
        return templateString;
    }
}

/**
 * Helper function for safely getting context parameter config
 *
 * @param config
 * @param parameter
 */
function getContextParameterValues(config, parameter) {
    return (config.context && config.context[parameter]) || [];
}
/**
 * Helper function for calculating default value for context parameter from config
 *
 * @param config
 * @param parameter
 */
function getContextParameterDefault(config, parameter) {
    const param = getContextParameterValues(config, parameter);
    return param && param.length ? param[0] : undefined;
}

const LOAD_BASE_SITE = '[Site-context] Load BaseSite';
const LOAD_BASE_SITE_FAIL = '[Site-context] Load BaseSite Fail';
const LOAD_BASE_SITE_SUCCESS = '[Site-context] Load BaseSite Success';
const SET_ACTIVE_BASE_SITE = '[Site-context] Set Active BaseSite';
const BASE_SITE_CHANGE = '[Site-context] BaseSite Change';
class LoadBaseSite {
    constructor() {
        this.type = LOAD_BASE_SITE;
    }
}
class LoadBaseSiteFail {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_BASE_SITE_FAIL;
    }
}
class LoadBaseSiteSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_BASE_SITE_SUCCESS;
    }
}
class SetActiveBaseSite {
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

const LOAD_CURRENCIES = '[Site-context] Load Currencies';
const LOAD_CURRENCIES_FAIL = '[Site-context] Load Currencies Fail';
const LOAD_CURRENCIES_SUCCESS = '[Site-context] Load Currencies Success';
const SET_ACTIVE_CURRENCY = '[Site-context] Set Active Currency';
const CURRENCY_CHANGE = '[Site-context] Currency Change';
class LoadCurrencies {
    constructor() {
        this.type = LOAD_CURRENCIES;
    }
}
class LoadCurrenciesFail {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_CURRENCIES_FAIL;
    }
}
class LoadCurrenciesSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_CURRENCIES_SUCCESS;
    }
}
class SetActiveCurrency {
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

const LOAD_LANGUAGES = '[Site-context] Load Languages';
const LOAD_LANGUAGES_FAIL = '[Site-context] Load Languages Fail';
const LOAD_LANGUAGES_SUCCESS = '[Site-context] Load Languages Success';
const SET_ACTIVE_LANGUAGE = '[Site-context] Set Active Language';
const LANGUAGE_CHANGE = '[Site-context] Language Change';
class LoadLanguages {
    constructor() {
        this.type = LOAD_LANGUAGES;
    }
}
class LoadLanguagesFail {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_LANGUAGES_FAIL;
    }
}
class LoadLanguagesSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_LANGUAGES_SUCCESS;
    }
}
class SetActiveLanguage {
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



var siteContextGroup_actions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    LOAD_BASE_SITE: LOAD_BASE_SITE,
    LOAD_BASE_SITE_FAIL: LOAD_BASE_SITE_FAIL,
    LOAD_BASE_SITE_SUCCESS: LOAD_BASE_SITE_SUCCESS,
    SET_ACTIVE_BASE_SITE: SET_ACTIVE_BASE_SITE,
    BASE_SITE_CHANGE: BASE_SITE_CHANGE,
    LoadBaseSite: LoadBaseSite,
    LoadBaseSiteFail: LoadBaseSiteFail,
    LoadBaseSiteSuccess: LoadBaseSiteSuccess,
    SetActiveBaseSite: SetActiveBaseSite,
    BaseSiteChange: BaseSiteChange,
    LOAD_CURRENCIES: LOAD_CURRENCIES,
    LOAD_CURRENCIES_FAIL: LOAD_CURRENCIES_FAIL,
    LOAD_CURRENCIES_SUCCESS: LOAD_CURRENCIES_SUCCESS,
    SET_ACTIVE_CURRENCY: SET_ACTIVE_CURRENCY,
    CURRENCY_CHANGE: CURRENCY_CHANGE,
    LoadCurrencies: LoadCurrencies,
    LoadCurrenciesFail: LoadCurrenciesFail,
    LoadCurrenciesSuccess: LoadCurrenciesSuccess,
    SetActiveCurrency: SetActiveCurrency,
    CurrencyChange: CurrencyChange,
    LOAD_LANGUAGES: LOAD_LANGUAGES,
    LOAD_LANGUAGES_FAIL: LOAD_LANGUAGES_FAIL,
    LOAD_LANGUAGES_SUCCESS: LOAD_LANGUAGES_SUCCESS,
    SET_ACTIVE_LANGUAGE: SET_ACTIVE_LANGUAGE,
    LANGUAGE_CHANGE: LANGUAGE_CHANGE,
    LoadLanguages: LoadLanguages,
    LoadLanguagesFail: LoadLanguagesFail,
    LoadLanguagesSuccess: LoadLanguagesSuccess,
    SetActiveLanguage: SetActiveLanguage,
    LanguageChange: LanguageChange
});

const SITE_CONTEXT_FEATURE = 'siteContext';

const getSiteContextState = createFeatureSelector(SITE_CONTEXT_FEATURE);

const ɵ0$3 = (state) => state && state.baseSite && state.baseSite.activeSite;
const getActiveBaseSite = createSelector(getSiteContextState, ɵ0$3);
const ɵ1$2 = (state) => state && state.baseSite && state.baseSite.details;
const getBaseSiteData = createSelector(getSiteContextState, ɵ1$2);

const currenciesEntitiesSelector = (state) => state.entities;
const ɵ0$4 = currenciesEntitiesSelector;
const activeCurrencySelector = (state) => state.activeCurrency;
const ɵ1$3 = activeCurrencySelector;
const ɵ2$1 = (state) => state.currencies;
const getCurrenciesState = createSelector(getSiteContextState, ɵ2$1);
const getCurrenciesEntities = createSelector(getCurrenciesState, currenciesEntitiesSelector);
const getActiveCurrency = createSelector(getCurrenciesState, activeCurrencySelector);
const ɵ3$1 = (entities) => {
    return entities
        ? Object.keys(entities).map((isocode) => entities[isocode])
        : null;
};
const getAllCurrencies = createSelector(getCurrenciesEntities, ɵ3$1);

const activeLanguageSelector = (state) => state.activeLanguage;
const ɵ0$5 = activeLanguageSelector;
const languagesEntitiesSelector = (state) => state.entities;
const ɵ1$4 = languagesEntitiesSelector;
const ɵ2$2 = (state) => state.languages;
const getLanguagesState = createSelector(getSiteContextState, ɵ2$2);
const getLanguagesEntities = createSelector(getLanguagesState, languagesEntitiesSelector);
const getActiveLanguage = createSelector(getLanguagesState, activeLanguageSelector);
const ɵ3$2 = (entities) => {
    return entities
        ? Object.keys(entities).map((isocode) => entities[isocode])
        : null;
};
const getAllLanguages = createSelector(getLanguagesEntities, ɵ3$2);



var siteContextGroup_selectors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getActiveBaseSite: getActiveBaseSite,
    getBaseSiteData: getBaseSiteData,
    ɵ0: ɵ0$3,
    ɵ1: ɵ1$2,
    getCurrenciesState: getCurrenciesState,
    getCurrenciesEntities: getCurrenciesEntities,
    getActiveCurrency: getActiveCurrency,
    getAllCurrencies: getAllCurrencies,
    ɵ2: ɵ2$1,
    ɵ3: ɵ3$1,
    getLanguagesState: getLanguagesState,
    getLanguagesEntities: getLanguagesEntities,
    getActiveLanguage: getActiveLanguage,
    getAllLanguages: getAllLanguages,
    getSiteContextState: getSiteContextState
});

const LANGUAGE_CONTEXT_ID = 'language';
const CURRENCY_CONTEXT_ID = 'currency';
const BASE_SITE_CONTEXT_ID = 'baseSite';

let BaseSiteService = class BaseSiteService {
    constructor(store, config) {
        this.store = store;
        this.config = config;
    }
    /**
     * Represents the current baseSite uid.
     */
    getActive() {
        return this.store.pipe(select(getActiveBaseSite), filter((active) => Boolean(active)));
    }
    /**
     * We currently don't support switching baseSite at run time
     */
    getAll() {
        return this.getActive().pipe(map((baseSite) => [baseSite]));
    }
    setActive(baseSite) {
        return this.store
            .pipe(select(getActiveBaseSite), take(1))
            .subscribe((activeBaseSite) => {
            if (baseSite && activeBaseSite !== baseSite) {
                this.store.dispatch(new SetActiveBaseSite(baseSite));
            }
        });
    }
    /**
     * Initializes the active baseSite.
     */
    initialize() {
        this.setActive(getContextParameterDefault(this.config, BASE_SITE_CONTEXT_ID));
    }
    /**
     * Get the base site details data
     */
    getBaseSiteData() {
        return this.store.pipe(select(getBaseSiteData), tap((baseSite) => {
            if (Object.keys(baseSite).length === 0) {
                this.store.dispatch(new LoadBaseSite());
            }
        }));
    }
};
BaseSiteService.ctorParameters = () => [
    { type: Store },
    { type: SiteContextConfig }
];
BaseSiteService = __decorate([
    Injectable()
], BaseSiteService);

class CustomEncoder {
    encodeKey(key) {
        return encodeURIComponent(key);
    }
    encodeValue(value) {
        return encodeURIComponent(value);
    }
    decodeKey(key) {
        return decodeURIComponent(key);
    }
    decodeValue(value) {
        return decodeURIComponent(value);
    }
}

let OccEndpointsService = class OccEndpointsService {
    constructor(config, baseSiteService) {
        this.config = config;
        this.baseSiteService = baseSiteService;
        this.SCOPE_SUFFIX = '_scopes';
        this.activeBaseSite =
            getContextParameterDefault(this.config, BASE_SITE_CONTEXT_ID) || '';
        if (this.baseSiteService) {
            this.baseSiteService
                .getActive()
                .subscribe((value) => (this.activeBaseSite = value));
        }
    }
    /**
     * Returns and endpoint starting from the OCC baseUrl (no baseSite)
     * @param endpoint Endpoint suffix
     */
    getRawEndpoint(endpoint) {
        if (!this.config || !this.config.backend || !this.config.backend.occ) {
            return '';
        }
        endpoint = this.config.backend.occ.endpoints[endpoint];
        if (!endpoint.startsWith('/')) {
            endpoint = '/' + endpoint;
        }
        return this.config.backend.occ.baseUrl + endpoint;
    }
    /**
     * Returns base OCC endpoint (baseUrl + prefix + baseSite)
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
     * Returns an OCC endpoint including baseUrl and baseSite
     * @param endpoint Endpoint suffix
     */
    getEndpoint(endpoint) {
        if (!endpoint.startsWith('/')) {
            endpoint = '/' + endpoint;
        }
        return this.getBaseEndpoint() + endpoint;
    }
    /**
     * Returns a fully qualified OCC Url (including baseUrl and baseSite)
     * @param endpoint Name of the OCC endpoint key config
     * @param urlParams  URL parameters
     * @param queryParams Query parameters
     * @param scope
     */
    getUrl(endpoint, urlParams, queryParams, scope = '') {
        endpoint = this.getEndpointForScope(endpoint, scope);
        if (urlParams) {
            Object.keys(urlParams).forEach((key) => {
                urlParams[key] = encodeURIComponent(urlParams[key]);
            });
            endpoint = DynamicTemplate.resolve(endpoint, urlParams);
        }
        if (queryParams) {
            let httpParamsOptions = { encoder: new CustomEncoder() };
            if (endpoint.includes('?')) {
                let queryParamsFromEndpoint;
                [endpoint, queryParamsFromEndpoint] = endpoint.split('?');
                httpParamsOptions = Object.assign(Object.assign({}, httpParamsOptions), { fromString: queryParamsFromEndpoint });
            }
            let httpParams = new HttpParams(httpParamsOptions);
            Object.keys(queryParams).forEach((key) => {
                const value = queryParams[key];
                if (value !== undefined) {
                    if (value === null) {
                        httpParams = httpParams.delete(key);
                    }
                    else {
                        httpParams = httpParams.set(key, value);
                    }
                }
            });
            const params = httpParams.toString();
            if (params.length) {
                endpoint += '?' + params;
            }
        }
        return this.getEndpoint(endpoint);
    }
    getEndpointForScope(endpoint, scope) {
        const endpointsConfig = this.config.backend &&
            this.config.backend.occ &&
            this.config.backend.occ.endpoints;
        if (scope) {
            const endpointConfig = endpointsConfig[`${endpoint}${this.SCOPE_SUFFIX}`];
            if (endpointConfig && endpointConfig[scope]) {
                return endpointConfig[scope];
            }
            if (isDevMode()) {
                console.warn(`${endpoint} endpoint configuration missing for scope "${scope}"`);
            }
        }
        return endpointsConfig[endpoint] || endpoint;
    }
};
OccEndpointsService.ctorParameters = () => [
    { type: OccConfig },
    { type: BaseSiteService, decorators: [{ type: Optional }] }
];
OccEndpointsService.ɵprov = ɵɵdefineInjectable({ factory: function OccEndpointsService_Factory() { return new OccEndpointsService(ɵɵinject(OccConfig), ɵɵinject(BaseSiteService, 8)); }, token: OccEndpointsService, providedIn: "root" });
OccEndpointsService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(1, Optional())
], OccEndpointsService);

let ClientTokenInterceptor = class ClientTokenInterceptor {
    constructor(authService, occEndpoints) {
        this.authService = authService;
        this.occEndpoints = occEndpoints;
    }
    intercept(request, next) {
        return this.getClientToken(request).pipe(take(1), switchMap((token) => {
            if (token &&
                request.url.includes(this.occEndpoints.getBaseEndpoint())) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `${token.token_type} ${token.access_token}`,
                    },
                });
            }
            return next.handle(request);
        }));
    }
    getClientToken(request) {
        if (InterceptorUtil.getInterceptorParam(USE_CLIENT_TOKEN, request.headers)) {
            return this.authService.getClientToken();
        }
        return of(null);
    }
};
ClientTokenInterceptor.ctorParameters = () => [
    { type: AuthService },
    { type: OccEndpointsService }
];
ClientTokenInterceptor.ɵprov = ɵɵdefineInjectable({ factory: function ClientTokenInterceptor_Factory() { return new ClientTokenInterceptor(ɵɵinject(AuthService), ɵɵinject(OccEndpointsService)); }, token: ClientTokenInterceptor, providedIn: "root" });
ClientTokenInterceptor = __decorate([
    Injectable({ providedIn: 'root' })
], ClientTokenInterceptor);

let UserTokenInterceptor = class UserTokenInterceptor {
    constructor(authService, occEndpoints) {
        this.authService = authService;
        this.occEndpoints = occEndpoints;
    }
    intercept(request, next) {
        return this.authService.getUserToken().pipe(take(1), switchMap((token) => {
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
        }));
    }
    isOccUrl(url) {
        return url.includes(this.occEndpoints.getBaseEndpoint());
    }
};
UserTokenInterceptor.ctorParameters = () => [
    { type: AuthService },
    { type: OccEndpointsService }
];
UserTokenInterceptor.ɵprov = ɵɵdefineInjectable({ factory: function UserTokenInterceptor_Factory() { return new UserTokenInterceptor(ɵɵinject(AuthService), ɵɵinject(OccEndpointsService)); }, token: UserTokenInterceptor, providedIn: "root" });
UserTokenInterceptor = __decorate([
    Injectable({ providedIn: 'root' })
], UserTokenInterceptor);

let TokenRevocationInterceptor = class TokenRevocationInterceptor {
    constructor() { }
    intercept(request, next) {
        const isTokenRevocationRequest = this.isTokenRevocationRequest(request);
        if (isTokenRevocationRequest) {
            request = InterceptorUtil.removeHeader(TOKEN_REVOCATION_HEADER, request);
        }
        return next.handle(request).pipe(catchError((error) => {
            if (isTokenRevocationRequest) {
                return EMPTY;
            }
            return throwError(error);
        }));
    }
    isTokenRevocationRequest(request) {
        const isTokenRevocationHeaderPresent = InterceptorUtil.getInterceptorParam(TOKEN_REVOCATION_HEADER, request.headers);
        return Boolean(isTokenRevocationHeaderPresent);
    }
};
TokenRevocationInterceptor.ɵprov = ɵɵdefineInjectable({ factory: function TokenRevocationInterceptor_Factory() { return new TokenRevocationInterceptor(); }, token: TokenRevocationInterceptor, providedIn: "root" });
TokenRevocationInterceptor = __decorate([
    Injectable({ providedIn: 'root' })
], TokenRevocationInterceptor);

const interceptors = [
    {
        provide: HTTP_INTERCEPTORS,
        useExisting: ClientTokenInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useExisting: UserTokenInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useExisting: AuthErrorInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useExisting: TokenRevocationInterceptor,
        multi: true,
    },
];

let ClientAuthenticationTokenService = class ClientAuthenticationTokenService {
    constructor(config, http, occEndpointsService) {
        this.config = config;
        this.http = http;
        this.occEndpointsService = occEndpointsService;
    }
    loadClientAuthenticationToken() {
        const url = this.occEndpointsService.getRawEndpoint('login');
        const params = new HttpParams()
            .set('client_id', encodeURIComponent(this.config.authentication.client_id))
            .set('client_secret', encodeURIComponent(this.config.authentication.client_secret))
            .set('grant_type', 'client_credentials');
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http.post(url, params, { headers });
    }
};
ClientAuthenticationTokenService.ctorParameters = () => [
    { type: AuthConfig },
    { type: HttpClient },
    { type: OccEndpointsService }
];
ClientAuthenticationTokenService = __decorate([
    Injectable()
], ClientAuthenticationTokenService);

let UserAuthenticationTokenService = class UserAuthenticationTokenService {
    constructor(http, config, occEndpointsService) {
        this.http = http;
        this.config = config;
        this.occEndpointsService = occEndpointsService;
    }
    loadToken(userId, password) {
        const url = this.occEndpointsService.getRawEndpoint('login');
        const params = new HttpParams()
            .set('client_id', this.config.authentication.client_id)
            .set('client_secret', this.config.authentication.client_secret)
            .set('grant_type', 'password')
            .set('username', userId)
            .set('password', password);
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(url, params, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    refreshToken(refreshToken) {
        const url = this.occEndpointsService.getRawEndpoint('login');
        const params = new HttpParams()
            .set('client_id', encodeURIComponent(this.config.authentication.client_id))
            .set('client_secret', encodeURIComponent(this.config.authentication.client_secret))
            .set('refresh_token', encodeURI(refreshToken))
            .set('grant_type', 'refresh_token');
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(url, params, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    revoke(userToken) {
        const url = this.occEndpointsService.getRawEndpoint('revoke');
        const headers = InterceptorUtil.createHeader(TOKEN_REVOCATION_HEADER, true, new HttpHeaders({
            Authorization: `${userToken.token_type} ${userToken.access_token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        }));
        const params = new HttpParams().set('token', userToken.access_token);
        return this.http
            .post(url, params, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
};
UserAuthenticationTokenService.ctorParameters = () => [
    { type: HttpClient },
    { type: AuthConfig },
    { type: OccEndpointsService }
];
UserAuthenticationTokenService = __decorate([
    Injectable()
], UserAuthenticationTokenService);

const AuthServices = [
    ClientAuthenticationTokenService,
    ClientErrorHandlingService,
    UserAuthenticationTokenService,
    UserErrorHandlingService,
];

var StorageSyncType;
(function (StorageSyncType) {
    StorageSyncType["NO_STORAGE"] = "NO_STORAGE";
    StorageSyncType["LOCAL_STORAGE"] = "LOCAL_STORAGE";
    StorageSyncType["SESSION_STORAGE"] = "SESSION_STORAGE";
})(StorageSyncType || (StorageSyncType = {}));
var StateTransferType;
(function (StateTransferType) {
    StateTransferType["TRANSFER_STATE"] = "SSR";
})(StateTransferType || (StateTransferType = {}));
class StateConfig {
}

const DEFAULT_LOCAL_STORAGE_KEY = 'spartacus-local-data';
const DEFAULT_SESSION_STORAGE_KEY = 'spartacus-session-data';
const defaultStateConfig = {
    state: {
        storageSync: {
            localStorageKeyName: DEFAULT_LOCAL_STORAGE_KEY,
            sessionStorageKeyName: DEFAULT_SESSION_STORAGE_KEY,
            keys: {},
            excludeKeys: {},
        },
    },
};

function getStorageSyncReducer(winRef, config) {
    if (!winRef.nativeWindow ||
        !config ||
        !config.state ||
        !config.state.storageSync ||
        !config.state.storageSync.keys) {
        return (reducer) => reducer;
    }
    const storageSyncConfig = config.state.storageSync;
    return (reducer) => {
        return (state, action) => {
            const newState = reducer(state, action);
            if (action.type === INIT || action.type === UPDATE) {
                const rehydratedState = rehydrate(config, winRef);
                return deepMerge({}, newState, rehydratedState);
            }
            if (action.type !== INIT) {
                // handle local storage
                const localStorageKeys = filterKeysByType(storageSyncConfig.keys, StorageSyncType.LOCAL_STORAGE);
                const localStorageExclusionKeys = filterKeysByType(storageSyncConfig.excludeKeys, StorageSyncType.LOCAL_STORAGE);
                const localStorageStateSlices = getStateSlice(localStorageKeys, localStorageExclusionKeys, newState);
                persistToStorage(config.state.storageSync.localStorageKeyName, localStorageStateSlices, winRef.localStorage);
                // handle session storage
                const sessionStorageKeys = filterKeysByType(storageSyncConfig.keys, StorageSyncType.SESSION_STORAGE);
                const sessionStorageExclusionKeys = filterKeysByType(storageSyncConfig.excludeKeys, StorageSyncType.SESSION_STORAGE);
                const sessionStorageStateSlices = getStateSlice(sessionStorageKeys, sessionStorageExclusionKeys, newState);
                persistToStorage(config.state.storageSync.sessionStorageKeyName, sessionStorageStateSlices, winRef.sessionStorage);
            }
            return newState;
        };
    };
}
function rehydrate(config, winRef) {
    const localStorageValue = readFromStorage(winRef.localStorage, config.state.storageSync.localStorageKeyName);
    const sessionStorageValue = readFromStorage(winRef.sessionStorage, config.state.storageSync.sessionStorageKeyName);
    return deepMerge(localStorageValue, sessionStorageValue);
}
function exists(value) {
    if (value != null) {
        if (typeof value === 'object') {
            return Object.keys(value).length !== 0;
        }
        return value !== '';
    }
    return false;
}
function getStorage(storageType, winRef) {
    let storage;
    switch (storageType) {
        case StorageSyncType.LOCAL_STORAGE: {
            storage = winRef.localStorage;
            break;
        }
        case StorageSyncType.SESSION_STORAGE: {
            storage = winRef.sessionStorage;
            break;
        }
        case StorageSyncType.NO_STORAGE: {
            storage = undefined;
            break;
        }
        default: {
            storage = winRef.sessionStorage;
        }
    }
    return storage;
}
function persistToStorage(configKey, value, storage) {
    if (!isSsr(storage) && value) {
        storage.setItem(configKey, JSON.stringify(value));
    }
}
function readFromStorage(storage, key) {
    if (isSsr(storage)) {
        return;
    }
    const storageValue = storage.getItem(key);
    if (!storageValue) {
        return;
    }
    return JSON.parse(storageValue);
}
function isSsr(storage) {
    return !Boolean(storage);
}

const CX_KEY = makeStateKey('cx-state');
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
    return (reducer) => reducer;
}
function getServerTransferStateReducer(transferState, keys) {
    const transferStateKeys = filterKeysByType(keys, StateTransferType.TRANSFER_STATE);
    return function (reducer) {
        return function (state, action) {
            const newState = reducer(state, action);
            if (newState) {
                const stateSlice = getStateSlice(transferStateKeys, [], newState);
                transferState.set(CX_KEY, stateSlice);
            }
            return newState;
        };
    };
}
function getBrowserTransferStateReducer(transferState, keys) {
    const transferStateKeys = filterKeysByType(keys, StateTransferType.TRANSFER_STATE);
    return function (reducer) {
        return function (state, action) {
            if (action.type === INIT) {
                if (!state) {
                    state = reducer(state, action);
                }
                // we should not utilize transfer state if user is logged in
                const authState = state[AUTH_FEATURE];
                const isLoggedIn = authState && authState.userToken && authState.userToken.token;
                if (!isLoggedIn && transferState.hasKey(CX_KEY)) {
                    const cxKey = transferState.get(CX_KEY, {});
                    const transferredStateSlice = getStateSlice(transferStateKeys, [], cxKey);
                    state = deepMerge({}, state, transferredStateSlice);
                }
                return state;
            }
            return reducer(state, action);
        };
    };
}

const TRANSFER_STATE_META_REDUCER = new InjectionToken('TransferStateMetaReducer');
const STORAGE_SYNC_META_REDUCER = new InjectionToken('StorageSyncMetaReducer');
const ɵ0$6 = getTransferStateReducer, ɵ1$5 = getStorageSyncReducer;
const stateMetaReducers = [
    {
        provide: TRANSFER_STATE_META_REDUCER,
        useFactory: ɵ0$6,
        deps: [
            PLATFORM_ID,
            [new Optional(), TransferState],
            [new Optional(), Config],
        ],
    },
    {
        provide: STORAGE_SYNC_META_REDUCER,
        useFactory: ɵ1$5,
        deps: [WindowRef, [new Optional(), Config]],
    },
    {
        provide: META_REDUCERS,
        useExisting: TRANSFER_STATE_META_REDUCER,
        multi: true,
    },
    {
        provide: META_REDUCERS,
        useExisting: STORAGE_SYNC_META_REDUCER,
        multi: true,
    },
];

var StateModule_1;
let StateModule = StateModule_1 = class StateModule {
    static forRoot() {
        return {
            ngModule: StateModule_1,
            providers: [
                ...stateMetaReducers,
                provideDefaultConfig(defaultStateConfig),
                { provide: StateConfig, useExisting: Config },
            ],
        };
    }
};
StateModule = StateModule_1 = __decorate([
    NgModule({})
], StateModule);

const UNKNOWN_ERROR = {
    error: 'unknown error',
};
const circularReplacer = () => {
    const seen = new WeakSet();
    return (_key, value) => {
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
};
const ɵ0$7 = circularReplacer;
function makeErrorSerializable(error) {
    if (error instanceof Error) {
        return {
            message: error.message,
            type: error.name,
            reason: error.stack,
        };
    }
    if (error instanceof HttpErrorResponse) {
        let serializableError = error.error;
        if (isObject(error.error)) {
            serializableError = JSON.stringify(error.error, circularReplacer());
        }
        return {
            message: error.message,
            error: serializableError,
            status: error.status,
            statusText: error.statusText,
            url: error.url,
        };
    }
    return isObject(error) ? UNKNOWN_ERROR : error;
}

let ClientTokenEffect = class ClientTokenEffect {
    constructor(actions$, clientAuthenticationTokenService) {
        this.actions$ = actions$;
        this.clientAuthenticationTokenService = clientAuthenticationTokenService;
        this.loadClientToken$ = this.actions$.pipe(ofType(LOAD_CLIENT_TOKEN), exhaustMap(() => {
            return this.clientAuthenticationTokenService
                .loadClientAuthenticationToken()
                .pipe(map((token) => {
                return new LoadClientTokenSuccess(token);
            }), catchError((error) => of(new LoadClientTokenFail(makeErrorSerializable(error)))));
        }));
    }
};
ClientTokenEffect.ctorParameters = () => [
    { type: Actions },
    { type: ClientAuthenticationTokenService }
];
__decorate([
    Effect()
], ClientTokenEffect.prototype, "loadClientToken$", void 0);
ClientTokenEffect = __decorate([
    Injectable()
], ClientTokenEffect);

let UserTokenEffects = class UserTokenEffects {
    constructor(actions$, userTokenService) {
        this.actions$ = actions$;
        this.userTokenService = userTokenService;
        this.loadUserToken$ = this.actions$.pipe(ofType(LOAD_USER_TOKEN), map((action) => action.payload), mergeMap(({ userId, password }) => this.userTokenService.loadToken(userId, password).pipe(map((token) => {
            const date = new Date();
            date.setSeconds(date.getSeconds() + token.expires_in);
            token.expiration_time = date.toJSON();
            token.userId = OCC_USER_ID_CURRENT;
            return new LoadUserTokenSuccess(token);
        }), catchError((error) => of(new LoadUserTokenFail(makeErrorSerializable(error)))))));
        this.login$ = this.actions$.pipe(ofType(LOAD_USER_TOKEN_SUCCESS), map(() => new Login()));
        this.refreshUserToken$ = this.actions$.pipe(ofType(REFRESH_USER_TOKEN), map((action) => action.payload), exhaustMap(({ refreshToken }) => {
            return this.userTokenService.refreshToken(refreshToken).pipe(map((token) => {
                const date = new Date();
                date.setSeconds(date.getSeconds() + token.expires_in);
                token.expiration_time = date.toJSON();
                return new RefreshUserTokenSuccess(token);
            }, catchError((error) => of(new RefreshUserTokenFail(makeErrorSerializable(error))))));
        }));
        this.revokeUserToken$ = this.actions$.pipe(ofType(REVOKE_USER_TOKEN), map((action) => {
            return action.payload;
        }), mergeMap((userToken) => {
            return this.userTokenService.revoke(userToken).pipe(map(() => new RevokeUserTokenSuccess(userToken)), catchError((error) => of(new RevokeUserTokenFail(error))));
        }));
    }
};
UserTokenEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserAuthenticationTokenService }
];
__decorate([
    Effect()
], UserTokenEffects.prototype, "loadUserToken$", void 0);
__decorate([
    Effect()
], UserTokenEffects.prototype, "login$", void 0);
__decorate([
    Effect()
], UserTokenEffects.prototype, "refreshUserToken$", void 0);
__decorate([
    Effect()
], UserTokenEffects.prototype, "revokeUserToken$", void 0);
UserTokenEffects = __decorate([
    Injectable()
], UserTokenEffects);

const effects = [UserTokenEffects, ClientTokenEffect];

const initialState = {};
function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_USER_TOKEN:
        case REFRESH_USER_TOKEN: {
            return Object.assign({}, state);
        }
        case LOAD_USER_TOKEN_SUCCESS:
        case REFRESH_USER_TOKEN_SUCCESS: {
            return Object.assign(Object.assign({}, state), action.payload);
        }
        case LOAD_USER_TOKEN_FAIL:
        case REFRESH_USER_TOKEN_FAIL: {
            return Object.assign({}, state);
        }
    }
    return state;
}

function getReducers() {
    return {
        userToken: combineReducers({ token: reducer }),
        clientToken: loaderReducer(CLIENT_TOKEN_DATA),
    };
}
const reducerToken = new InjectionToken('AuthReducers');
const reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
function clearAuthState(reducer) {
    return function (state, action) {
        if (action.type === LOGOUT) {
            state = Object.assign(Object.assign({}, state), { userToken: undefined });
        }
        return reducer(state, action);
    };
}
const metaReducers = [clearAuthState];

function authStoreConfigFactory() {
    // if we want to reuse AUTH_FEATURE const in config, we have to use factory instead of plain object
    const config = {
        state: {
            storageSync: {
                keys: {
                    'auth.userToken.token.access_token': StorageSyncType.LOCAL_STORAGE,
                    'auth.userToken.token.token_type': StorageSyncType.LOCAL_STORAGE,
                    'auth.userToken.token.expires_in': StorageSyncType.LOCAL_STORAGE,
                    'auth.userToken.token.expiration_time': StorageSyncType.LOCAL_STORAGE,
                    'auth.userToken.token.scope': StorageSyncType.LOCAL_STORAGE,
                    'auth.userToken.token.userId': StorageSyncType.LOCAL_STORAGE,
                },
            },
        },
    };
    return config;
}
let AuthStoreModule = class AuthStoreModule {
};
AuthStoreModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            HttpClientModule,
            StateModule,
            StoreModule.forFeature(AUTH_FEATURE, reducerToken, { metaReducers }),
            EffectsModule.forFeature(effects),
        ],
        providers: [
            provideDefaultConfigFactory(authStoreConfigFactory),
            reducerProvider,
        ],
    })
], AuthStoreModule);

var AuthModule_1;
let AuthModule = AuthModule_1 = class AuthModule {
    static forRoot() {
        return {
            ngModule: AuthModule_1,
            providers: [
                provideDefaultConfig(defaultAuthConfig),
                ...interceptors,
                ...AuthServices,
                { provide: AuthConfig, useExisting: Config },
            ],
        };
    }
};
AuthModule = AuthModule_1 = __decorate([
    NgModule({
        imports: [CommonModule, HttpClientModule, AuthStoreModule],
    })
], AuthModule);

let AuthRedirectService = class AuthRedirectService {
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
     */
    constructor(routing, router) {
        this.routing = routing;
        this.router = router;
        this.ignoredUrls = new Set();
    }
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
    reportAuthGuard() {
        const { url, navigationId } = this.getCurrentNavigation();
        this.lastAuthGuardNavigation = { url, navigationId };
        this.redirectUrl = url;
    }
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
    getCurrentNavigation() {
        const initialUrl = this.router.url;
        const navigation = this.router.getCurrentNavigation();
        const url = this.router.serializeUrl(navigation.finalUrl);
        return {
            navigationId: navigation.id,
            url,
            initialUrl,
        };
    }
};
AuthRedirectService.ctorParameters = () => [
    { type: RoutingService },
    { type: Router }
];
AuthRedirectService.ɵprov = ɵɵdefineInjectable({ factory: function AuthRedirectService_Factory() { return new AuthRedirectService(ɵɵinject(RoutingService), ɵɵinject(Router)); }, token: AuthRedirectService, providedIn: "root" });
AuthRedirectService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AuthRedirectService);

let AuthGuard = class AuthGuard {
    constructor(routingService, authService, authRedirectService, router) {
        this.routingService = routingService;
        this.authService = authService;
        this.authRedirectService = authRedirectService;
        this.router = router;
    }
    canActivate() {
        return this.authService.getUserToken().pipe(map((token) => {
            if (!token.access_token) {
                this.authRedirectService.reportAuthGuard();
                this.routingService.go({ cxRoute: 'login' });
            }
            return !!token.access_token;
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: AuthService },
    { type: AuthRedirectService },
    { type: Router }
];
AuthGuard.ɵprov = ɵɵdefineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(ɵɵinject(RoutingService), ɵɵinject(AuthService), ɵɵinject(AuthRedirectService), ɵɵinject(Router)); }, token: AuthGuard, providedIn: "root" });
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AuthGuard);

let NotAuthGuard = class NotAuthGuard {
    constructor(routingService, authService, authRedirectService) {
        this.routingService = routingService;
        this.authService = authService;
        this.authRedirectService = authRedirectService;
    }
    canActivate() {
        this.authRedirectService.reportNotAuthGuard();
        // redirect, if user is already logged in:
        return this.authService.getUserToken().pipe(map((token) => {
            if (token.access_token) {
                this.routingService.go({ cxRoute: 'home' });
            }
            return !token.access_token;
        }));
    }
};
NotAuthGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: AuthService },
    { type: AuthRedirectService }
];
NotAuthGuard.ɵprov = ɵɵdefineInjectable({ factory: function NotAuthGuard_Factory() { return new NotAuthGuard(ɵɵinject(RoutingService), ɵɵinject(AuthService), ɵɵinject(AuthRedirectService)); }, token: NotAuthGuard, providedIn: "root" });
NotAuthGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], NotAuthGuard);

var CountryType;
(function (CountryType) {
    CountryType["BILLING"] = "BILLING";
    CountryType["SHIPPING"] = "SHIPPING";
})(CountryType || (CountryType = {}));

var PromotionLocation;
(function (PromotionLocation) {
    PromotionLocation["ActiveCart"] = "CART";
    PromotionLocation["Checkout"] = "CHECKOUT";
    PromotionLocation["Order"] = "ORDER";
})(PromotionLocation || (PromotionLocation = {}));

var PageType;
(function (PageType) {
    PageType["CONTENT_PAGE"] = "ContentPage";
    PageType["PRODUCT_PAGE"] = "ProductPage";
    PageType["CATEGORY_PAGE"] = "CategoryPage";
    PageType["CATALOG_PAGE"] = "CatalogPage";
})(PageType || (PageType = {}));
var CmsBannerCarouselEffect;
(function (CmsBannerCarouselEffect) {
    CmsBannerCarouselEffect["FADE"] = "FADE";
    CmsBannerCarouselEffect["ZOOM"] = "ZOOM";
    CmsBannerCarouselEffect["CURTAIN"] = "CURTAINX";
    CmsBannerCarouselEffect["TURNDOWN"] = "TURNDOWN";
})(CmsBannerCarouselEffect || (CmsBannerCarouselEffect = {}));

var ANONYMOUS_CONSENT_STATUS;
(function (ANONYMOUS_CONSENT_STATUS) {
    ANONYMOUS_CONSENT_STATUS["GIVEN"] = "GIVEN";
    ANONYMOUS_CONSENT_STATUS["WITHDRAWN"] = "WITHDRAWN";
})(ANONYMOUS_CONSENT_STATUS || (ANONYMOUS_CONSENT_STATUS = {}));

var ImageType;
(function (ImageType) {
    ImageType["PRIMARY"] = "PRIMARY";
    ImageType["GALLERY"] = "GALLERY";
})(ImageType || (ImageType = {}));

var VariantType;
(function (VariantType) {
    VariantType["SIZE"] = "ApparelSizeVariantProduct";
    VariantType["STYLE"] = "ApparelStyleVariantProduct";
    VariantType["COLOR"] = "ElectronicsColorVariantProduct";
})(VariantType || (VariantType = {}));
var PriceType;
(function (PriceType) {
    PriceType["BUY"] = "BUY";
    PriceType["FROM"] = "FROM";
})(PriceType || (PriceType = {}));
var VariantQualifier;
(function (VariantQualifier) {
    VariantQualifier["SIZE"] = "size";
    VariantQualifier["STYLE"] = "style";
    VariantQualifier["COLOR"] = "color";
    VariantQualifier["THUMBNAIL"] = "thumbnail";
    VariantQualifier["PRODUCT"] = "product";
    VariantQualifier["ROLLUP_PROPERTY"] = "rollupProperty";
})(VariantQualifier || (VariantQualifier = {}));

const testestsd = 'sare';

var NotificationType;
(function (NotificationType) {
    NotificationType["BACK_IN_STOCK"] = "BACK_IN_STOCK";
})(NotificationType || (NotificationType = {}));

const ANONYMOUS_CONSENTS_STORE_FEATURE = 'anonymous-consents';
const ANONYMOUS_CONSENTS = '[Anonymous Consents] Anonymous Consents';

const LOAD_ANONYMOUS_CONSENT_TEMPLATES = '[Anonymous Consents] Load Anonymous Consent Templates';
const LOAD_ANONYMOUS_CONSENT_TEMPLATES_SUCCESS = '[Anonymous Consents] Load Anonymous Consent Templates Success';
const LOAD_ANONYMOUS_CONSENT_TEMPLATES_FAIL = '[Anonymous Consents] Load Anonymous Consent Templates Fail';
const RESET_LOAD_ANONYMOUS_CONSENT_TEMPLATES = '[Anonymous Consents] Reset Load Anonymous Consent Templates';
const GET_ALL_ANONYMOUS_CONSENTS = '[Anonymous Consents] Get All Anonymous Consents';
const GET_ANONYMOUS_CONSENT = '[Anonymous Consents] Get Anonymous Consent';
const SET_ANONYMOUS_CONSENTS = '[Anonymous Consents] Set Anonymous Consents';
const GIVE_ANONYMOUS_CONSENT = '[Anonymous Consents] Give Anonymous Consent';
const WITHDRAW_ANONYMOUS_CONSENT = '[Anonymous Consents] Withdraw Anonymous Consent';
const TOGGLE_ANONYMOUS_CONSENTS_BANNER_DISMISSED = '[Anonymous Consents] Toggle Anonymous Consents Banner Dismissed';
const TOGGLE_ANONYMOUS_CONSENT_TEMPLATES_UPDATED = '[Anonymous Consents] Anonymous Consent Templates Updated';
class LoadAnonymousConsentTemplates extends LoaderLoadAction {
    constructor() {
        super(ANONYMOUS_CONSENTS);
        this.type = LOAD_ANONYMOUS_CONSENT_TEMPLATES;
    }
}
class LoadAnonymousConsentTemplatesSuccess extends LoaderSuccessAction {
    constructor(payload) {
        super(ANONYMOUS_CONSENTS);
        this.payload = payload;
        this.type = LOAD_ANONYMOUS_CONSENT_TEMPLATES_SUCCESS;
    }
}
class LoadAnonymousConsentTemplatesFail extends LoaderFailAction {
    constructor(payload) {
        super(ANONYMOUS_CONSENTS, payload);
        this.type = LOAD_ANONYMOUS_CONSENT_TEMPLATES_FAIL;
    }
}
class ResetLoadAnonymousConsentTemplates extends LoaderResetAction {
    constructor() {
        super(ANONYMOUS_CONSENTS);
        this.type = RESET_LOAD_ANONYMOUS_CONSENT_TEMPLATES;
    }
}
class GetAllAnonymousConsents {
    constructor() {
        this.type = GET_ALL_ANONYMOUS_CONSENTS;
    }
}
class GetAnonymousConsent {
    constructor(templateCode) {
        this.templateCode = templateCode;
        this.type = GET_ANONYMOUS_CONSENT;
    }
}
class SetAnonymousConsents {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ANONYMOUS_CONSENTS;
    }
}
class GiveAnonymousConsent {
    constructor(templateCode) {
        this.templateCode = templateCode;
        this.type = GIVE_ANONYMOUS_CONSENT;
    }
}
class WithdrawAnonymousConsent {
    constructor(templateCode) {
        this.templateCode = templateCode;
        this.type = WITHDRAW_ANONYMOUS_CONSENT;
    }
}
class ToggleAnonymousConsentsBannerDissmissed {
    constructor(dismissed) {
        this.dismissed = dismissed;
        this.type = TOGGLE_ANONYMOUS_CONSENTS_BANNER_DISMISSED;
    }
}
class ToggleAnonymousConsentTemplatesUpdated {
    constructor(updated) {
        this.updated = updated;
        this.type = TOGGLE_ANONYMOUS_CONSENT_TEMPLATES_UPDATED;
    }
}



var anonymousConsentsGroup = /*#__PURE__*/Object.freeze({
    __proto__: null,
    LOAD_ANONYMOUS_CONSENT_TEMPLATES: LOAD_ANONYMOUS_CONSENT_TEMPLATES,
    LOAD_ANONYMOUS_CONSENT_TEMPLATES_SUCCESS: LOAD_ANONYMOUS_CONSENT_TEMPLATES_SUCCESS,
    LOAD_ANONYMOUS_CONSENT_TEMPLATES_FAIL: LOAD_ANONYMOUS_CONSENT_TEMPLATES_FAIL,
    RESET_LOAD_ANONYMOUS_CONSENT_TEMPLATES: RESET_LOAD_ANONYMOUS_CONSENT_TEMPLATES,
    GET_ALL_ANONYMOUS_CONSENTS: GET_ALL_ANONYMOUS_CONSENTS,
    GET_ANONYMOUS_CONSENT: GET_ANONYMOUS_CONSENT,
    SET_ANONYMOUS_CONSENTS: SET_ANONYMOUS_CONSENTS,
    GIVE_ANONYMOUS_CONSENT: GIVE_ANONYMOUS_CONSENT,
    WITHDRAW_ANONYMOUS_CONSENT: WITHDRAW_ANONYMOUS_CONSENT,
    TOGGLE_ANONYMOUS_CONSENTS_BANNER_DISMISSED: TOGGLE_ANONYMOUS_CONSENTS_BANNER_DISMISSED,
    TOGGLE_ANONYMOUS_CONSENT_TEMPLATES_UPDATED: TOGGLE_ANONYMOUS_CONSENT_TEMPLATES_UPDATED,
    LoadAnonymousConsentTemplates: LoadAnonymousConsentTemplates,
    LoadAnonymousConsentTemplatesSuccess: LoadAnonymousConsentTemplatesSuccess,
    LoadAnonymousConsentTemplatesFail: LoadAnonymousConsentTemplatesFail,
    ResetLoadAnonymousConsentTemplates: ResetLoadAnonymousConsentTemplates,
    GetAllAnonymousConsents: GetAllAnonymousConsents,
    GetAnonymousConsent: GetAnonymousConsent,
    SetAnonymousConsents: SetAnonymousConsents,
    GiveAnonymousConsent: GiveAnonymousConsent,
    WithdrawAnonymousConsent: WithdrawAnonymousConsent,
    ToggleAnonymousConsentsBannerDissmissed: ToggleAnonymousConsentsBannerDissmissed,
    ToggleAnonymousConsentTemplatesUpdated: ToggleAnonymousConsentTemplatesUpdated
});

const getAnonymousConsentState = createFeatureSelector(ANONYMOUS_CONSENTS_STORE_FEATURE);

const ɵ0$8 = (state) => state.templates;
const getAnonymousConsentTemplatesState = createSelector(getAnonymousConsentState, ɵ0$8);
const getAnonymousConsentTemplatesValue = createSelector(getAnonymousConsentTemplatesState, loaderValueSelector);
const getAnonymousConsentTemplatesLoading = createSelector(getAnonymousConsentTemplatesState, loaderLoadingSelector);
const getAnonymousConsentTemplatesSuccess = createSelector(getAnonymousConsentTemplatesState, loaderSuccessSelector);
const getAnonymousConsentTemplatesError = createSelector(getAnonymousConsentTemplatesState, loaderErrorSelector);
const getAnonymousConsentTemplate = (templateCode) => {
    return createSelector(getAnonymousConsentTemplatesValue, (templates) => {
        return templates
            ? templates.find((template) => template.id === templateCode)
            : null;
    });
};

const ɵ0$9 = (state) => state.ui.updated;
const getAnonymousConsentTemplatesUpdate = createSelector(getAnonymousConsentState, ɵ0$9);
const ɵ1$6 = (state) => state.ui.bannerDismissed;
const getAnonymousConsentsBannerDismissed = createSelector(getAnonymousConsentState, ɵ1$6);

const ɵ0$a = (state) => state.consents;
const getAnonymousConsents = createSelector(getAnonymousConsentState, ɵ0$a);
const getAnonymousConsentByTemplateCode = (templateCode) => createSelector(getAnonymousConsents, (consents) => consents.find((consent) => consent.templateCode === templateCode));



var anonymousConsentsGroup_selectors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getAnonymousConsentTemplatesState: getAnonymousConsentTemplatesState,
    getAnonymousConsentTemplatesValue: getAnonymousConsentTemplatesValue,
    getAnonymousConsentTemplatesLoading: getAnonymousConsentTemplatesLoading,
    getAnonymousConsentTemplatesSuccess: getAnonymousConsentTemplatesSuccess,
    getAnonymousConsentTemplatesError: getAnonymousConsentTemplatesError,
    getAnonymousConsentTemplate: getAnonymousConsentTemplate,
    ɵ0: ɵ0$8,
    getAnonymousConsentTemplatesUpdate: getAnonymousConsentTemplatesUpdate,
    getAnonymousConsentsBannerDismissed: getAnonymousConsentsBannerDismissed,
    ɵ1: ɵ1$6,
    getAnonymousConsents: getAnonymousConsents,
    getAnonymousConsentByTemplateCode: getAnonymousConsentByTemplateCode,
    getAnonymousConsentState: getAnonymousConsentState
});

let AnonymousConsentsService = class AnonymousConsentsService {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Retrieves the anonymous consent templates.
     */
    loadTemplates() {
        this.store.dispatch(new LoadAnonymousConsentTemplates());
    }
    /**
     * Conditionally triggers the load of the anonymous consent templates if:
     *   - `loadIfMissing` parameter is set to `true`
     *   - the `templates` in the store are `undefined`
     *
     * Othewise it just returns the value from the store.
     *
     * @param loadIfMissing setting to `true` will trigger the load of the templates if the currently stored templates are `undefined`
     */
    getTemplates(loadIfMissing = false) {
        return iif(() => loadIfMissing, this.store.pipe(select(getAnonymousConsentTemplatesValue), withLatestFrom(this.getLoadTemplatesLoading()), filter(([_templates, loading]) => !loading), tap(([templates, _loading]) => {
            if (!Boolean(templates)) {
                this.loadTemplates();
            }
        }), filter(([templates, _loading]) => Boolean(templates)), map(([templates, _loading]) => templates)), this.store.pipe(select(getAnonymousConsentTemplatesValue)));
    }
    /**
     * Returns the anonymous consent templates with the given template code.
     * @param templateCode a template code by which to filter anonymous consent templates.
     */
    getTemplate(templateCode) {
        return this.store.pipe(select(getAnonymousConsentTemplate(templateCode)));
    }
    /**
     * Returns an indicator for the loading status for the anonymous consent templates.
     */
    getLoadTemplatesLoading() {
        return this.store.pipe(select(getAnonymousConsentTemplatesLoading));
    }
    /**
     * Returns an indicator for the success status for the anonymous consent templates.
     */
    getLoadTemplatesSuccess() {
        return this.store.pipe(select(getAnonymousConsentTemplatesSuccess));
    }
    /**
     * Returns an indicator for the error status for the anonymous consent templates.
     */
    getLoadTemplatesError() {
        return this.store.pipe(select(getAnonymousConsentTemplatesError));
    }
    /**
     * Resets the loading, success and error indicators for the anonymous consent templates.
     */
    resetLoadTemplatesState() {
        this.store.dispatch(new ResetLoadAnonymousConsentTemplates());
    }
    /**
     * Returns all the anonymous consents.
     */
    getConsents() {
        return this.store.pipe(select(getAnonymousConsents));
    }
    /**
     * Puts the provided anonymous consents into the store.
     */
    setConsents(consents) {
        return this.store.dispatch(new SetAnonymousConsents(consents));
    }
    /**
     * Returns the anonymous consent for the given template ID.
     *
     * As a side-effect, the method will call `getTemplates(true)` to load the templates if those are not present.
     *
     * @param templateId a template ID by which to filter anonymous consent templates.
     */
    getConsent(templateId) {
        return this.authService.isUserLoggedIn().pipe(filter((authenticated) => !authenticated), tap(() => this.getTemplates(true)), switchMap(() => this.store.pipe(select(getAnonymousConsentByTemplateCode(templateId)))));
    }
    /**
     * Give a consent for the given `templateCode`
     * @param templateCode for which to give the consent
     */
    giveConsent(templateCode) {
        this.store.dispatch(new GiveAnonymousConsent(templateCode));
    }
    /**
     * Sets all the anonymous consents' state to given.
     */
    giveAllConsents() {
        return this.getTemplates(true).pipe(tap((templates) => templates.forEach((template) => this.giveConsent(template.id))));
    }
    /**
     * Returns `true` if the provided `consent` is given.
     * @param consent a consent to test
     */
    isConsentGiven(consent) {
        return consent && consent.consentState === ANONYMOUS_CONSENT_STATUS.GIVEN;
    }
    /**
     * Withdraw a consent for the given `templateCode`
     * @param templateCode for which to withdraw the consent
     */
    withdrawConsent(templateCode) {
        this.store.dispatch(new WithdrawAnonymousConsent(templateCode));
    }
    /**
     * Sets all the anonymous consents' state to withdrawn.
     */
    withdrawAllConsents() {
        return this.getTemplates(true).pipe(tap((templates) => templates.forEach((template) => this.withdrawConsent(template.id))));
    }
    /**
     * Returns `true` if the provided `consent` is withdrawn.
     * @param consent a consent to test
     */
    isConsentWithdrawn(consent) {
        return (consent && consent.consentState === ANONYMOUS_CONSENT_STATUS.WITHDRAWN);
    }
    /**
     * Toggles the dismissed state of the anonymous consents banner.
     * @param dismissed the banner will be dismissed if `true` is passed, otherwise it will be visible.
     */
    toggleBannerDismissed(dismissed) {
        this.store.dispatch(new ToggleAnonymousConsentsBannerDissmissed(dismissed));
        if (dismissed) {
            this.toggleTemplatesUpdated(false);
        }
    }
    /**
     * Returns `true` if the banner was dismissed, `false` otherwise.
     */
    isBannerDismissed() {
        return this.store.pipe(select(getAnonymousConsentsBannerDismissed));
    }
    /**
     * Returns `true` if the consent templates were updated on the back-end.
     * If the templates are not present in the store, it triggers the load.
     */
    getTemplatesUpdated() {
        return this.getTemplates(true).pipe(switchMap(() => this.store.pipe(select(getAnonymousConsentTemplatesUpdate))));
    }
    /**
     * Toggles the `updated` slice of the state
     * @param updated
     */
    toggleTemplatesUpdated(updated) {
        this.store.dispatch(new ToggleAnonymousConsentTemplatesUpdated(updated));
    }
    /**
     * Returns `true` if either the banner is not dismissed or if the templates were updated on the back-end.
     * Otherwise, it returns `false`.
     */
    isBannerVisible() {
        return combineLatest([
            this.isBannerDismissed(),
            this.getTemplatesUpdated(),
        ]).pipe(map(([dismissed, updated]) => !dismissed || updated));
    }
    /**
     * Returns `true` if there's a missmatch in template versions between the provided `currentTemplates` and `newTemplates`
     * @param currentTemplates current templates to check
     * @param newTemplates new templates to check
     */
    detectUpdatedTemplates(currentTemplates, newTemplates) {
        if (newTemplates.length !== currentTemplates.length) {
            return true;
        }
        for (let i = 0; i < newTemplates.length; i++) {
            const newTemplate = newTemplates[i];
            const currentTemplate = currentTemplates[i];
            if (newTemplate.version !== currentTemplate.version) {
                return true;
            }
        }
        return false;
    }
    /**
     * Serializes using `JSON.stringify()` and encodes using `encodeURIComponent()` methods
     * @param consents to serialize and encode
     */
    serializeAndEncode(consents) {
        if (!consents) {
            return '';
        }
        const serialized = JSON.stringify(consents);
        const encoded = encodeURIComponent(serialized);
        return encoded;
    }
    /**
     * Decodes using `decodeURIComponent()` and deserializes using `JSON.parse()`
     * @param rawConsents to decode an deserialize
     */
    decodeAndDeserialize(rawConsents) {
        const decoded = decodeURIComponent(rawConsents);
        const unserialized = JSON.parse(decoded);
        return unserialized;
    }
    /**
     *
     * Compares the given `newConsents` and `previousConsents` and returns `true` if there are differences (the `newConsents` are updates).
     * Otherwise it returns `false`.
     *
     * @param newConsents new consents to compare
     * @param previousConsents old consents to compare
     */
    consentsUpdated(newConsents, previousConsents) {
        const newRawConsents = this.serializeAndEncode(newConsents);
        const previousRawConsents = this.serializeAndEncode(previousConsents);
        return newRawConsents !== previousRawConsents;
    }
};
AnonymousConsentsService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
AnonymousConsentsService.ɵprov = ɵɵdefineInjectable({ factory: function AnonymousConsentsService_Factory() { return new AnonymousConsentsService(ɵɵinject(Store), ɵɵinject(AuthService)); }, token: AnonymousConsentsService, providedIn: "root" });
AnonymousConsentsService = __decorate([
    Injectable({ providedIn: 'root' })
], AnonymousConsentsService);

class AsmAdapter {
}

const defaultOccAsmConfig = {
    backend: {
        occ: {
            endpoints: {
                asmCustomerSearch: '/assistedservicewebservices/customers/search',
            },
        },
    },
};

class AsmConfig extends OccConfig {
}

const CUSTOMER_SEARCH_PAGE_NORMALIZER = new InjectionToken('CustomerSearchPageNormalizer');

let ConverterService = class ConverterService {
    constructor(injector) {
        this.injector = injector;
        this.converters = new Map();
    }
    getConverters(injectionToken) {
        if (!this.converters.has(injectionToken)) {
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
     */
    hasConverters(injectionToken) {
        const converters = this.getConverters(injectionToken);
        return Array.isArray(converters) && converters.length > 0;
    }
    /**
     * Pipeable operator to apply converter logic in a observable stream
     */
    pipeable(injectionToken) {
        if (this.hasConverters(injectionToken)) {
            return map((model) => this.convertSource(model, injectionToken));
        }
        else {
            return (observable) => observable;
        }
    }
    /**
     * Pipeable operator to apply converter logic in a observable stream to collection of items
     */
    pipeableMany(injectionToken) {
        if (this.hasConverters(injectionToken)) {
            return map((model) => this.convertMany(model, injectionToken));
        }
        else {
            return (observable) => observable;
        }
    }
    /**
     * Apply converter logic specified by injection token to source data
     */
    convert(source, injectionToken) {
        if (this.hasConverters(injectionToken)) {
            return this.convertSource(source, injectionToken);
        }
        else {
            return source;
        }
    }
    /**
     * Apply converter logic specified by injection token to a collection
     */
    convertMany(sources, injectionToken) {
        if (this.hasConverters(injectionToken) && Array.isArray(sources)) {
            return sources.map((source) => this.convertSource(source, injectionToken));
        }
        else {
            return sources;
        }
    }
    convertSource(source, injectionToken) {
        return this.getConverters(injectionToken).reduce((target, converter) => {
            return converter.convert(source, target);
        }, undefined);
    }
};
ConverterService.ctorParameters = () => [
    { type: Injector }
];
ConverterService.ɵprov = ɵɵdefineInjectable({ factory: function ConverterService_Factory() { return new ConverterService(ɵɵinject(INJECTOR)); }, token: ConverterService, providedIn: "root" });
ConverterService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ConverterService);

let OccAsmAdapter = class OccAsmAdapter {
    constructor(http, occEndpointsService, converterService, config, baseSiteService) {
        this.http = http;
        this.occEndpointsService = occEndpointsService;
        this.converterService = converterService;
        this.config = config;
        this.baseSiteService = baseSiteService;
        this.baseSiteService
            .getActive()
            .subscribe((value) => (this.activeBaseSite = value));
    }
    customerSearch(options) {
        const headers = InterceptorUtil.createHeader(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, true, new HttpHeaders());
        let params = new HttpParams()
            .set('baseSite', this.activeBaseSite)
            .set('sort', 'byNameAsc');
        if (typeof options['query'] !== 'undefined') {
            params = params.set('query', '' + options.query);
        }
        if (typeof options['pageSize'] !== 'undefined') {
            params = params.set('pageSize', '' + options.pageSize);
        }
        const url = this.occEndpointsService.getRawEndpoint('asmCustomerSearch');
        return this.http
            .get(url, { headers, params })
            .pipe(this.converterService.pipeable(CUSTOMER_SEARCH_PAGE_NORMALIZER));
    }
};
OccAsmAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService },
    { type: AsmConfig },
    { type: BaseSiteService }
];
OccAsmAdapter = __decorate([
    Injectable()
], OccAsmAdapter);

let AsmOccModule = class AsmOccModule {
};
AsmOccModule = __decorate([
    NgModule({
        imports: [CommonModule, HttpClientModule],
        providers: [
            provideDefaultConfig(defaultOccAsmConfig),
            {
                provide: AsmAdapter,
                useClass: OccAsmAdapter,
            },
        ],
    })
], AsmOccModule);

class CartAdapter {
}

const CART_NORMALIZER = new InjectionToken('CartNormalizer');

class CartEntryAdapter {
}

class SaveCartAdapter {
}

class CartVoucherAdapter {
}

const PRODUCT_NORMALIZER = new InjectionToken('ProductNormalizer');

let OccCartNormalizer = class OccCartNormalizer {
    constructor(converter) {
        this.converter = converter;
    }
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign({}, source);
        }
        if (source && source.entries) {
            target.entries = source.entries.map((entry) => (Object.assign(Object.assign({}, entry), { product: this.converter.convert(entry.product, PRODUCT_NORMALIZER) })));
        }
        this.removeDuplicatePromotions(source, target);
        return target;
    }
    /**
     * Remove all duplicate promotions
     */
    removeDuplicatePromotions(source, target) {
        if (source && source.potentialOrderPromotions) {
            target.potentialOrderPromotions = this.removeDuplicateItems(source.potentialOrderPromotions);
        }
        if (source && source.potentialProductPromotions) {
            target.potentialProductPromotions = this.removeDuplicateItems(source.potentialProductPromotions);
        }
        if (source && source.appliedOrderPromotions) {
            target.appliedOrderPromotions = this.removeDuplicateItems(source.appliedOrderPromotions);
        }
        if (source && source.appliedProductPromotions) {
            target.appliedProductPromotions = this.removeDuplicateItems(source.appliedProductPromotions);
        }
    }
    removeDuplicateItems(itemList) {
        return itemList.filter((p, i, a) => {
            const b = a.map((el) => JSON.stringify(el));
            return i === b.indexOf(JSON.stringify(p));
        });
    }
};
OccCartNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
OccCartNormalizer.ɵprov = ɵɵdefineInjectable({ factory: function OccCartNormalizer_Factory() { return new OccCartNormalizer(ɵɵinject(ConverterService)); }, token: OccCartNormalizer, providedIn: "root" });
OccCartNormalizer = __decorate([
    Injectable({ providedIn: 'root' })
], OccCartNormalizer);

const defaultOccCartConfig = {
    backend: {
        occ: {
            endpoints: {
                // tslint:disable:max-line-length
                carts: 'users/${userId}/carts?fields=carts(DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),saveTime,user,name)',
                cart: 'users/${userId}/carts/${cartId}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),user',
                createCart: 'users/${userId}/carts?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),user',
                addEntries: 'users/${userId}/carts/${cartId}/entries',
                updateEntries: 'users/${userId}/carts/${cartId}/entries/${entryNumber}',
                removeEntries: 'users/${userId}/carts/${cartId}/entries/${entryNumber}',
                addEmail: 'users/${userId}/carts/${cartId}/email',
                deleteCart: 'users/${userId}/carts/${cartId}',
                cartVoucher: 'users/${userId}/carts/${cartId}/vouchers',
                saveCart: 'users/${userId}/carts/${cartId}/save',
            },
        },
    },
};

const CART_MODIFICATION_NORMALIZER = new InjectionToken('CartModificationNormalizer');

let OccCartEntryAdapter = class OccCartEntryAdapter {
    constructor(http, occEndpointsService, converterService) {
        this.http = http;
        this.occEndpointsService = occEndpointsService;
        this.converterService = converterService;
    }
    add(userId, cartId, productCode, quantity = 1) {
        const toAdd = JSON.stringify({});
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        const url = this.occEndpointsService.getUrl('addEntries', {
            userId,
            cartId,
        }, { code: productCode, qty: quantity });
        return this.http
            .post(url, toAdd, { headers })
            .pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
    }
    update(userId, cartId, entryNumber, qty, pickupStore) {
        let params = {};
        if (pickupStore) {
            params = { pickupStore };
        }
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        const url = this.occEndpointsService.getUrl('updateEntries', { userId, cartId, entryNumber }, Object.assign({ qty }, params));
        return this.http
            .patch(url, {}, { headers })
            .pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
    }
    remove(userId, cartId, entryNumber) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        const url = this.occEndpointsService.getUrl('removeEntries', {
            userId,
            cartId,
            entryNumber,
        });
        return this.http.delete(url, { headers });
    }
};
OccCartEntryAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
OccCartEntryAdapter = __decorate([
    Injectable()
], OccCartEntryAdapter);

const CART_VOUCHER_NORMALIZER = new InjectionToken('CartVoucherNormalizer');

let OccCartVoucherAdapter = class OccCartVoucherAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    getCartVoucherEndpoint(userId, cartId) {
        return this.occEndpoints.getUrl('cartVoucher', { userId, cartId });
    }
    getHeaders(userId) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        if (userId === OCC_USER_ID_ANONYMOUS) {
            headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        }
        return headers;
    }
    add(userId, cartId, voucherId) {
        const url = this.getCartVoucherEndpoint(userId, cartId);
        const toAdd = JSON.stringify({});
        const params = new HttpParams().set('voucherId', voucherId);
        const headers = this.getHeaders(userId);
        return this.http.post(url, toAdd, { headers, params }).pipe(catchError((error) => throwError(error)), this.converter.pipeable(CART_VOUCHER_NORMALIZER));
    }
    remove(userId, cartId, voucherId) {
        const url = this.getCartVoucherEndpoint(userId, cartId) +
            '/' +
            encodeURIComponent(voucherId);
        const headers = this.getHeaders(userId);
        return this.http
            .delete(url, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
};
OccCartVoucherAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
OccCartVoucherAdapter = __decorate([
    Injectable()
], OccCartVoucherAdapter);

let OccCartAdapter = class OccCartAdapter {
    constructor(http, occEndpointsService, converterService) {
        this.http = http;
        this.occEndpointsService = occEndpointsService;
        this.converterService = converterService;
    }
    loadAll(userId) {
        return this.http
            .get(this.occEndpointsService.getUrl('carts', { userId }))
            .pipe(pluck('carts'), this.converterService.pipeableMany(CART_NORMALIZER));
    }
    load(userId, cartId) {
        if (cartId === OCC_CART_ID_CURRENT) {
            return this.loadAll(userId).pipe(map((carts) => {
                if (carts) {
                    const activeCart = carts.find((cart) => {
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
            return this.http
                .get(this.occEndpointsService.getUrl('cart', { userId, cartId }))
                .pipe(this.converterService.pipeable(CART_NORMALIZER));
        }
    }
    create(userId, oldCartId, toMergeCartGuid) {
        const toAdd = JSON.stringify({});
        let params = {};
        if (oldCartId) {
            params = { oldCartId: oldCartId };
        }
        if (toMergeCartGuid) {
            params['toMergeCartGuid'] = toMergeCartGuid;
        }
        return this.http
            .post(this.occEndpointsService.getUrl('createCart', { userId }, params), toAdd)
            .pipe(this.converterService.pipeable(CART_NORMALIZER));
    }
    delete(userId, cartId) {
        let headers = new HttpHeaders();
        if (userId === OCC_USER_ID_ANONYMOUS) {
            headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        }
        return this.http.delete(this.occEndpointsService.getUrl('deleteCart', { userId, cartId }), { headers });
    }
    addEmail(userId, cartId, email) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        const httpParams = new HttpParams().set('email', email);
        const url = this.occEndpointsService.getUrl('addEmail', {
            userId,
            cartId,
        });
        return this.http.put(url, httpParams, { headers });
    }
};
OccCartAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
OccCartAdapter = __decorate([
    Injectable()
], OccCartAdapter);

const SAVE_CART_NORMALIZER = new InjectionToken('SaveCartNormalizer');

let OccSaveCartAdapter = class OccSaveCartAdapter {
    constructor(http, occEndpointsService, converterService) {
        this.http = http;
        this.occEndpointsService = occEndpointsService;
        this.converterService = converterService;
    }
    saveCart(userId, cartId, saveCartName, saveCartDescription) {
        let httpParams = new HttpParams();
        if (Boolean(saveCartName)) {
            httpParams = httpParams.set('saveCartName', saveCartName);
        }
        if (Boolean(saveCartDescription)) {
            httpParams = httpParams.set('saveCartDescription', saveCartDescription);
        }
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .patch(this.occEndpointsService.getUrl('saveCart', { userId, cartId }), httpParams, { headers })
            .pipe(this.converterService.pipeable(SAVE_CART_NORMALIZER));
    }
};
OccSaveCartAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
OccSaveCartAdapter = __decorate([
    Injectable()
], OccSaveCartAdapter);

let CartOccModule = class CartOccModule {
};
CartOccModule = __decorate([
    NgModule({
        imports: [CommonModule, HttpClientModule],
        providers: [
            provideDefaultConfig(defaultOccCartConfig),
            {
                provide: CartAdapter,
                useClass: OccCartAdapter,
            },
            {
                provide: CART_NORMALIZER,
                useExisting: OccCartNormalizer,
                multi: true,
            },
            {
                provide: CartEntryAdapter,
                useClass: OccCartEntryAdapter,
            },
            {
                provide: CartVoucherAdapter,
                useClass: OccCartVoucherAdapter,
            },
            {
                provide: SaveCartAdapter,
                useClass: OccSaveCartAdapter,
            },
        ],
    })
], CartOccModule);

const ORDER_NORMALIZER = new InjectionToken('OrderNormalizer');

// To be changed to a more optimised params after ticket: C3PO-1076
const FULL_PARAMS = 'fields=FULL';
const CHECKOUT_PARAMS = 'deliveryAddress(FULL),deliveryMode,paymentInfo(FULL)';
const ORDERS_ENDPOINT = '/orders';
const CARTS_ENDPOINT = '/carts/';
let OccCheckoutAdapter = class OccCheckoutAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    getEndpoint(userId, subEndpoint) {
        const orderEndpoint = 'users/' + userId + subEndpoint;
        return this.occEndpoints.getEndpoint(orderEndpoint);
    }
    placeOrder(userId, cartId) {
        const url = this.getEndpoint(userId, ORDERS_ENDPOINT);
        const params = new HttpParams({
            fromString: 'cartId=' + cartId + '&' + FULL_PARAMS,
        });
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        if (userId === OCC_USER_ID_ANONYMOUS) {
            headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        }
        return this.http
            .post(url, {}, { headers, params })
            .pipe(this.converter.pipeable(ORDER_NORMALIZER));
    }
    loadCheckoutDetails(userId, cartId) {
        const url = this.getEndpoint(userId, CARTS_ENDPOINT) + cartId;
        const params = new HttpParams({
            fromString: `fields=${CHECKOUT_PARAMS}`,
        });
        return this.http.get(url, { params });
    }
    clearCheckoutDeliveryAddress(userId, cartId) {
        const url = `${this.getEndpoint(userId, CARTS_ENDPOINT)}${cartId}/addresses/delivery`;
        return this.http.delete(url);
    }
    clearCheckoutDeliveryMode(userId, cartId) {
        const url = `${this.getEndpoint(userId, CARTS_ENDPOINT)}${cartId}/deliverymode`;
        return this.http.delete(url);
    }
};
OccCheckoutAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
OccCheckoutAdapter = __decorate([
    Injectable()
], OccCheckoutAdapter);

const DELIVERY_MODE_NORMALIZER = new InjectionToken('DeliveryModeNormalizer');

const ADDRESS_NORMALIZER = new InjectionToken('AddressNormalizer');
const ADDRESS_SERIALIZER = new InjectionToken('AddressSerializer');
const ADDRESS_VALIDATION_NORMALIZER = new InjectionToken('AddressValidationNormalizer');

let OccCheckoutDeliveryAdapter = class OccCheckoutDeliveryAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    getCartEndpoint(userId) {
        const cartEndpoint = 'users/' + userId + '/carts/';
        return this.occEndpoints.getEndpoint(cartEndpoint);
    }
    createAddress(userId, cartId, address) {
        address = this.converter.convert(address, ADDRESS_SERIALIZER);
        return this.http
            .post(this.getCartEndpoint(userId) + cartId + '/addresses/delivery', address, {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
        })
            .pipe(this.converter.pipeable(ADDRESS_NORMALIZER));
    }
    setAddress(userId, cartId, addressId) {
        return this.http.put(this.getCartEndpoint(userId) + cartId + '/addresses/delivery', {}, {
            params: { addressId: addressId },
        });
    }
    setMode(userId, cartId, deliveryModeId) {
        return this.http.put(this.getCartEndpoint(userId) + cartId + '/deliverymode', {}, {
            params: { deliveryModeId: deliveryModeId },
        });
    }
    getMode(userId, cartId) {
        return this.http
            .get(this.getCartEndpoint(userId) + cartId + '/deliverymode')
            .pipe(this.converter.pipeable(DELIVERY_MODE_NORMALIZER));
    }
    getSupportedModes(userId, cartId) {
        return this.http
            .get(this.getCartEndpoint(userId) + cartId + '/deliverymodes')
            .pipe(pluck('deliveryModes'), this.converter.pipeableMany(DELIVERY_MODE_NORMALIZER));
    }
};
OccCheckoutDeliveryAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
OccCheckoutDeliveryAdapter = __decorate([
    Injectable()
], OccCheckoutDeliveryAdapter);

const PAYMENT_DETAILS_NORMALIZER = new InjectionToken('PaymentDetailsNormalizer');
const PAYMENT_DETAILS_SERIALIZER = new InjectionToken('PaymentDetailsSerializer');
const CARD_TYPE_NORMALIZER = new InjectionToken('CardTypeNormalizer');

const ENDPOINT_CARD_TYPES = 'cardtypes';
let OccCheckoutPaymentAdapter = class OccCheckoutPaymentAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
        if (typeof DOMParser !== 'undefined') {
            this.domparser = new DOMParser();
        }
    }
    getCartEndpoint(userId) {
        const cartEndpoint = 'users/' + userId + '/carts/';
        return this.occEndpoints.getEndpoint(cartEndpoint);
    }
    create(userId, cartId, paymentDetails) {
        paymentDetails = this.converter.convert(paymentDetails, PAYMENT_DETAILS_SERIALIZER);
        return this.getProviderSubInfo(userId, cartId).pipe(map((data) => {
            const labelsMap = this.convertToMap(data.mappingLabels.entry);
            return {
                url: data.postUrl,
                parameters: this.getParamsForPaymentProvider(paymentDetails, data.parameters.entry, labelsMap),
                mappingLabels: labelsMap,
            };
        }), mergeMap((sub) => {
            // create a subscription directly with payment provider
            return this.createSubWithProvider(sub.url, sub.parameters).pipe(map((response) => this.extractPaymentDetailsFromHtml(response)), mergeMap((fromPaymentProvider) => {
                fromPaymentProvider['defaultPayment'] =
                    paymentDetails.defaultPayment;
                fromPaymentProvider['savePaymentInfo'] = true;
                return this.createDetailsWithParameters(userId, cartId, fromPaymentProvider).pipe(this.converter.pipeable(PAYMENT_DETAILS_NORMALIZER));
            }));
        }));
    }
    set(userId, cartId, paymentDetailsId) {
        return this.http.put(this.getCartEndpoint(userId) + cartId + '/paymentdetails', {}, {
            params: { paymentDetailsId: paymentDetailsId },
        });
    }
    loadCardTypes() {
        return this.http
            .get(this.occEndpoints.getEndpoint(ENDPOINT_CARD_TYPES))
            .pipe(map((cardTypeList) => cardTypeList.cardTypes), this.converter.pipeableMany(CARD_TYPE_NORMALIZER));
    }
    getProviderSubInfo(userId, cartId) {
        return this.http.get(this.getCartEndpoint(userId) +
            cartId +
            '/payment/sop/request?responseUrl=sampleUrl');
    }
    createSubWithProvider(postUrl, parameters) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'text/html',
        });
        let httpParams = new HttpParams({ encoder: new CustomEncoder() });
        Object.keys(parameters).forEach((key) => {
            httpParams = httpParams.append(key, parameters[key]);
        });
        return this.http.post(postUrl, httpParams, {
            headers,
            responseType: 'text',
        });
    }
    createDetailsWithParameters(userId, cartId, parameters) {
        let httpParams = new HttpParams({ encoder: new CustomEncoder() });
        Object.keys(parameters).forEach((key) => {
            httpParams = httpParams.append(key, parameters[key]);
        });
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http.post(this.getCartEndpoint(userId) + cartId + '/payment/sop/response', httpParams, { headers });
    }
    getParamsForPaymentProvider(paymentDetails, parameters, mappingLabels) {
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
        if (paymentDetails.billingAddress.region) {
            params[mappingLabels['hybris_billTo_region']] =
                paymentDetails.billingAddress.region.isocodeShort;
        }
        else {
            params[mappingLabels['hybris_billTo_region']] = '';
        }
        params[mappingLabels['hybris_billTo_postalcode']] =
            paymentDetails.billingAddress.postalCode;
        return params;
    }
    extractPaymentDetailsFromHtml(html) {
        const domdoc = this.domparser.parseFromString(html, 'text/xml');
        const responseForm = domdoc.getElementsByTagName('form')[0];
        const inputs = responseForm.getElementsByTagName('input');
        const values = {};
        for (let i = 0; inputs[i]; i++) {
            const input = inputs[i];
            if (input.getAttribute('name') !== '{}' &&
                input.getAttribute('value') !== '') {
                values[input.getAttribute('name')] = input.getAttribute('value');
            }
        }
        return values;
    }
    convertToMap(paramList) {
        return paramList.reduce(function (result, item) {
            const key = item.key;
            result[key] = item.value;
            return result;
        }, {});
    }
};
OccCheckoutPaymentAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
OccCheckoutPaymentAdapter = __decorate([
    Injectable()
], OccCheckoutPaymentAdapter);

class CheckoutAdapter {
}

let OccOrderNormalizer = class OccOrderNormalizer {
    constructor(converter) {
        this.converter = converter;
    }
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign({}, source);
        }
        if (source.entries) {
            target.entries = source.entries.map((entry) => this.convertOrderEntry(entry));
        }
        if (source.consignments) {
            target.consignments = source.consignments.map((consignment) => (Object.assign(Object.assign({}, consignment), { entries: consignment.entries.map((entry) => (Object.assign(Object.assign({}, entry), { orderEntry: this.convertOrderEntry(entry.orderEntry) }))) })));
        }
        if (source.unconsignedEntries) {
            target.unconsignedEntries = source.unconsignedEntries.map((entry) => this.convertOrderEntry(entry));
        }
        return target;
    }
    convertOrderEntry(source) {
        return Object.assign(Object.assign({}, source), { product: this.converter.convert(source.product, PRODUCT_NORMALIZER) });
    }
};
OccOrderNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
OccOrderNormalizer.ɵprov = ɵɵdefineInjectable({ factory: function OccOrderNormalizer_Factory() { return new OccOrderNormalizer(ɵɵinject(ConverterService)); }, token: OccOrderNormalizer, providedIn: "root" });
OccOrderNormalizer = __decorate([
    Injectable({ providedIn: 'root' })
], OccOrderNormalizer);

class CheckoutDeliveryAdapter {
}

class CheckoutPaymentAdapter {
}

let CheckoutOccModule = class CheckoutOccModule {
};
CheckoutOccModule = __decorate([
    NgModule({
        imports: [CommonModule, HttpClientModule],
        providers: [
            {
                provide: CheckoutAdapter,
                useClass: OccCheckoutAdapter,
            },
            { provide: ORDER_NORMALIZER, useExisting: OccOrderNormalizer, multi: true },
            {
                provide: CheckoutDeliveryAdapter,
                useClass: OccCheckoutDeliveryAdapter,
            },
            {
                provide: CheckoutPaymentAdapter,
                useClass: OccCheckoutPaymentAdapter,
            },
        ],
    })
], CheckoutOccModule);

const CMS_PAGE_NORMALIZER = new InjectionToken('CmsPageNormalizer');

let OccCmsPageAdapter = class OccCmsPageAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    load(pageContext, fields) {
        // load page by Id
        if (pageContext.type === undefined) {
            return this.http
                .get(this.occEndpoints.getUrl('page', {
                id: pageContext.id,
            }, { fields: fields ? fields : 'DEFAULT' }), {
                headers: this.headers,
            })
                .pipe(this.converter.pipeable(CMS_PAGE_NORMALIZER));
        }
        // load page by PageContext
        const httpParams = this.getPagesRequestParams(pageContext);
        return this.http
            .get(this.getPagesEndpoint(httpParams, fields), {
            headers: this.headers,
        })
            .pipe(this.converter.pipeable(CMS_PAGE_NORMALIZER));
    }
    getPagesEndpoint(params, fields) {
        fields = fields ? fields : 'DEFAULT';
        return this.occEndpoints.getUrl('pages', {}, Object.assign({ fields }, params));
    }
    getPagesRequestParams(pageContext) {
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
};
OccCmsPageAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
OccCmsPageAdapter = __decorate([
    Injectable()
], OccCmsPageAdapter);

const CMS_COMPONENT_NORMALIZER = new InjectionToken('CmsComponentNormalizer');

let OccCmsComponentAdapter = class OccCmsComponentAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    load(id, pageContext) {
        return this.http
            .get(this.getComponentEndPoint(id, pageContext), {
            headers: this.headers,
        })
            .pipe(this.converter.pipeable(CMS_COMPONENT_NORMALIZER));
    }
    findComponentsByIds(ids, pageContext, fields = 'DEFAULT', currentPage = 0, pageSize = ids.length, sort) {
        const requestParams = Object.assign(Object.assign({}, this.getContextParams(pageContext)), this.getPaginationParams(currentPage, pageSize, sort));
        requestParams['componentIds'] = ids.toString();
        return this.http
            .get(this.getComponentsEndpoint(requestParams, fields), {
            headers: this.headers,
        })
            .pipe(pluck('component'), this.converter.pipeableMany(CMS_COMPONENT_NORMALIZER));
    }
    findComponentsByIdsLegacy(ids, pageContext, fields = 'DEFAULT', currentPage = 0, pageSize = ids.length, sort) {
        const idList = { idList: ids };
        const requestParams = Object.assign(Object.assign({}, this.getContextParams(pageContext)), this.getPaginationParams(currentPage, pageSize, sort));
        return this.http
            .post(this.getComponentsEndpoint(requestParams, fields), idList, {
            headers: this.headers,
        })
            .pipe(pluck('component'), this.converter.pipeableMany(CMS_COMPONENT_NORMALIZER));
    }
    getComponentEndPoint(id, pageContext) {
        return this.occEndpoints.getUrl('component', { id }, this.getContextParams(pageContext));
    }
    getComponentsEndpoint(requestParams, fields) {
        return this.occEndpoints.getUrl('components', {}, Object.assign({ fields }, requestParams));
    }
    getPaginationParams(currentPage, pageSize, sort) {
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
    getContextParams(pageContext) {
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
};
OccCmsComponentAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
OccCmsComponentAdapter = __decorate([
    Injectable()
], OccCmsComponentAdapter);

const JSP_INCLUDE_CMS_COMPONENT_TYPE = 'JspIncludeComponent';
const CMS_FLEX_COMPONENT_TYPE = 'CMSFlexComponent';
/** Strategy to control the loading strategy of DOM elements. */
var DeferLoadingStrategy;
(function (DeferLoadingStrategy) {
    /** Defers loading of DOM elements until element is near/in the users view port */
    DeferLoadingStrategy["DEFER"] = "DEFERRED-LOADING";
    /** Renders the DOM instantly without being concerned with the view port */
    DeferLoadingStrategy["INSTANT"] = "INSTANT-LOADING";
})(DeferLoadingStrategy || (DeferLoadingStrategy = {}));
class CmsConfig extends OccConfig {
}

let OccCmsPageNormalizer = class OccCmsPageNormalizer {
    convert(source, target = {}) {
        this.normalizePageData(source, target);
        this.normalizePageSlotData(source, target);
        this.normalizePageComponentData(source, target);
        this.normalizeComponentData(source, target);
        return target;
    }
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
            label: source.label,
        };
    }
    normalizePageSlotData(source, target) {
        for (const slot of source.contentSlots.contentSlot) {
            target.page.slots[slot.position] = {
                components: [],
                properties: slot.properties,
            };
        }
    }
    normalizePageComponentData(source, target) {
        for (const slot of source.contentSlots.contentSlot) {
            if (slot.components.component &&
                Array.isArray(slot.components.component)) {
                for (const component of slot.components.component) {
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
    normalizeComponentData(source, target) {
        target.components = [];
        for (const slot of source.contentSlots.contentSlot) {
            if (slot.components.component &&
                Array.isArray(slot.components.component)) {
                for (const component of slot.components.component) {
                    // we dont put properties into component state
                    if (component.properties) {
                        component.properties = undefined;
                    }
                    target.components.push(component);
                }
            }
        }
    }
};
OccCmsPageNormalizer.ɵprov = ɵɵdefineInjectable({ factory: function OccCmsPageNormalizer_Factory() { return new OccCmsPageNormalizer(); }, token: OccCmsPageNormalizer, providedIn: "root" });
OccCmsPageNormalizer = __decorate([
    Injectable({ providedIn: 'root' })
], OccCmsPageNormalizer);

/**
 * Abstract class that can be used to implement custom loader logic
 * in order to load CMS structure from third-party CMS system.
 */
class CmsPageAdapter {
}

class CmsComponentAdapter {
}

let CmsOccModule = class CmsOccModule {
};
CmsOccModule = __decorate([
    NgModule({
        imports: [CommonModule, HttpClientModule],
        providers: [
            {
                provide: CmsPageAdapter,
                useClass: OccCmsPageAdapter,
            },
            {
                provide: CMS_PAGE_NORMALIZER,
                useExisting: OccCmsPageNormalizer,
                multi: true,
            },
            {
                provide: CmsComponentAdapter,
                useClass: OccCmsComponentAdapter,
            },
        ],
    })
], CmsOccModule);

let ProductImageNormalizer = class ProductImageNormalizer {
    constructor(config) {
        this.config = config;
    }
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign({}, source);
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
     */
    normalize(source) {
        const images = {};
        if (source) {
            for (const image of source) {
                const isList = image.hasOwnProperty('galleryIndex');
                if (!images.hasOwnProperty(image.imageType)) {
                    images[image.imageType] = isList ? [] : {};
                }
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
                const targetImage = Object.assign({}, image);
                targetImage.url = this.normalizeImageUrl(targetImage.url);
                imageContainer[image.format] = targetImage;
            }
        }
        return images;
    }
    /**
     * Traditionally, in an on-prem world, medias and other backend related calls
     * are hosted at the same platform, but in a cloud setup, applications are are
     * typically distributed cross different environments. For media, we use the
     * `backend.media.baseUrl` by default, but fallback to `backend.occ.baseUrl`
     * if none provided.
     */
    normalizeImageUrl(url) {
        if (new RegExp(/^(http|data:image|\/\/)/i).test(url)) {
            return url;
        }
        return ((this.config.backend.media.baseUrl ||
            this.config.backend.occ.baseUrl ||
            '') + url);
    }
};
ProductImageNormalizer.ctorParameters = () => [
    { type: OccConfig }
];
ProductImageNormalizer.ɵprov = ɵɵdefineInjectable({ factory: function ProductImageNormalizer_Factory() { return new ProductImageNormalizer(ɵɵinject(OccConfig)); }, token: ProductImageNormalizer, providedIn: "root" });
ProductImageNormalizer = __decorate([
    Injectable({ providedIn: 'root' })
], ProductImageNormalizer);

let ProductReferenceNormalizer = class ProductReferenceNormalizer {
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign({}, source);
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
     */
    normalize(source) {
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
};
ProductReferenceNormalizer = __decorate([
    Injectable()
], ProductReferenceNormalizer);

let OccProductSearchPageNormalizer = class OccProductSearchPageNormalizer {
    constructor(converterService) {
        this.converterService = converterService;
        /**
         * Specifies the minimal number of top values in case
         * non have been setup by the business.
         */
        this.DEFAULT_TOP_VALUES = 6;
    }
    convert(source, target = {}) {
        target = Object.assign(Object.assign({}, target), source);
        this.normalizeFacets(target);
        if (source.products) {
            target.products = source.products.map((product) => this.converterService.convert(product, PRODUCT_NORMALIZER));
        }
        return target;
    }
    normalizeFacets(target) {
        this.normalizeFacetValues(target);
        this.normalizeUselessFacets(target);
    }
    /**
     * The (current) backend returns facets with values that do not contribute
     * to the facet navigation much, as the number in the result list will not get
     * behaviour, see https://jira.hybris.com/browse/CS-427.
     *
     * As long as this is not in place, we manually filter the facet from the list;
     * any facet that does not have a count < the total results will be dropped from
     * the facets.
     */
    normalizeUselessFacets(target) {
        target.facets = target.facets.filter((facet) => {
            return (!target.pagination ||
                !target.pagination.totalResults ||
                ((!facet.hasOwnProperty('visible') || facet.visible) &&
                    facet.values &&
                    facet.values.find((value) => {
                        return (value.selected || value.count < target.pagination.totalResults);
                    })));
        });
    }
    /*
     * In case there are so-called `topValues` given for the facet values,
     * values are obsolete.
     *
     * `topValues` is a feature in Adaptive Search which can limit a large
     * amount of facet values to a small set (5 by default). As long as the backend
     * provides all facet values AND topValues, we normalize the data to not bother
     * the UI with this specific feature.
     */
    normalizeFacetValues(target) {
        if (target.facets) {
            target.facets = target.facets.map((facetSource) => {
                const { topValues } = facetSource, facetTarget = __rest(facetSource, ["topValues"]);
                facetTarget.topValueCount = topValues
                    ? topValues.length
                    : this.DEFAULT_TOP_VALUES;
                return facetTarget;
            });
        }
    }
};
OccProductSearchPageNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
OccProductSearchPageNormalizer.ɵprov = ɵɵdefineInjectable({ factory: function OccProductSearchPageNormalizer_Factory() { return new OccProductSearchPageNormalizer(ɵɵinject(ConverterService)); }, token: OccProductSearchPageNormalizer, providedIn: "root" });
OccProductSearchPageNormalizer = __decorate([
    Injectable({ providedIn: 'root' })
], OccProductSearchPageNormalizer);

let OccProductReferencesListNormalizer = class OccProductReferencesListNormalizer {
    constructor(converter) {
        this.converter = converter;
    }
    convert(source, target = []) {
        if (target === undefined) {
            target = Object.assign({}, source);
        }
        if (source && source.references) {
            target = source.references.map((reference) => (Object.assign(Object.assign({}, reference), { target: this.converter.convert(reference.target, PRODUCT_NORMALIZER) })));
            return target;
        }
    }
};
OccProductReferencesListNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
OccProductReferencesListNormalizer.ɵprov = ɵɵdefineInjectable({ factory: function OccProductReferencesListNormalizer_Factory() { return new OccProductReferencesListNormalizer(ɵɵinject(ConverterService)); }, token: OccProductReferencesListNormalizer, providedIn: "root" });
OccProductReferencesListNormalizer = __decorate([
    Injectable({ providedIn: 'root' })
], OccProductReferencesListNormalizer);

let ProductNameNormalizer = class ProductNameNormalizer {
    constructor(config) {
        this.config = config;
    }
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign({}, source);
        }
        if (source.name) {
            target.name = this.normalize(source.name);
            target.nameHtml = source.name;
        }
        return target;
    }
    normalize(name) {
        return name.replace(/<[^>]*>/g, '');
    }
};
ProductNameNormalizer.ctorParameters = () => [
    { type: OccConfig }
];
ProductNameNormalizer.ɵprov = ɵɵdefineInjectable({ factory: function ProductNameNormalizer_Factory() { return new ProductNameNormalizer(ɵɵinject(OccConfig)); }, token: ProductNameNormalizer, providedIn: "root" });
ProductNameNormalizer = __decorate([
    Injectable({ providedIn: 'root' })
], ProductNameNormalizer);

const PRODUCT_REFERENCES_NORMALIZER = new InjectionToken('ProductReferencesListNormalizer');

let OccProductReferencesAdapter = class OccProductReferencesAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    load(productCode, referenceType, pageSize) {
        return this.http
            .get(this.getEndpoint(productCode, referenceType, pageSize))
            .pipe(this.converter.pipeable(PRODUCT_REFERENCES_NORMALIZER));
    }
    getEndpoint(code, reference, pageSize) {
        return this.occEndpoints.getUrl('productReferences', {
            productCode: code,
        }, { referenceType: reference, pageSize });
    }
};
OccProductReferencesAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
OccProductReferencesAdapter = __decorate([
    Injectable()
], OccProductReferencesAdapter);

const PRODUCT_REVIEW_NORMALIZER = new InjectionToken('ProductReviewNormalizer');
const PRODUCT_REVIEW_SERIALIZER = new InjectionToken('ProductReviewSerializer');

let OccProductReviewsAdapter = class OccProductReviewsAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    load(productCode, maxCount) {
        return this.http
            .get(this.getEndpoint(productCode, maxCount))
            .pipe(pluck('reviews'), this.converter.pipeableMany(PRODUCT_REVIEW_NORMALIZER));
    }
    post(productCode, review) {
        review = this.converter.convert(review, PRODUCT_REVIEW_SERIALIZER);
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        const body = new URLSearchParams();
        body.append('headline', review.headline);
        body.append('comment', review.comment);
        body.append('rating', review.rating.toString());
        body.append('alias', review.alias);
        return this.http.post(this.getEndpoint(productCode), body.toString(), {
            headers,
        });
    }
    getEndpoint(code, maxCount) {
        return this.occEndpoints.getUrl('productReviews', {
            productCode: code,
        }, { maxCount });
    }
};
OccProductReviewsAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
OccProductReviewsAdapter = __decorate([
    Injectable()
], OccProductReviewsAdapter);

const PRODUCT_SEARCH_PAGE_NORMALIZER = new InjectionToken('ProductSearchPageNormalizer');
const PRODUCT_SUGGESTION_NORMALIZER = new InjectionToken('ProductSuggestionNormalizer');

const DEFAULT_SEARCH_CONFIG = {
    pageSize: 20,
};
let OccProductSearchAdapter = class OccProductSearchAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    search(query, searchConfig = DEFAULT_SEARCH_CONFIG) {
        return this.http
            .get(this.getSearchEndpoint(query, searchConfig))
            .pipe(this.converter.pipeable(PRODUCT_SEARCH_PAGE_NORMALIZER));
    }
    loadSuggestions(term, pageSize = 3) {
        return this.http
            .get(this.getSuggestionEndpoint(term, pageSize.toString()))
            .pipe(pluck('suggestions'), this.converter.pipeableMany(PRODUCT_SUGGESTION_NORMALIZER));
    }
    getSearchEndpoint(query, searchConfig) {
        return this.occEndpoints.getUrl('productSearch', {}, {
            query,
            pageSize: searchConfig.pageSize,
            currentPage: searchConfig.currentPage,
            sort: searchConfig.sortCode,
        });
    }
    getSuggestionEndpoint(term, max) {
        return this.occEndpoints.getUrl('productSuggestions', {}, { term, max });
    }
};
OccProductSearchAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
OccProductSearchAdapter = __decorate([
    Injectable()
], OccProductSearchAdapter);

/**
 * Merge occ fields parameters
 *
 * @param fields Fields definition as string or object
 */
function mergeFields(fields) {
    const parsedFields = fields.map((f) => typeof f === 'string' ? parseFields(f) : f);
    const mergedFields = optimizeFields(deepMerge({}, ...parsedFields));
    return stringifyFields(mergedFields);
}
/**
 * Optimize fields definition by removing not needed groups
 *
 * @param fields
 */
function optimizeFields(fields = {}) {
    const keys = Object.keys(fields);
    if (keys.includes('FULL')) {
        delete fields['DEFAULT'];
        delete fields['BASIC'];
    }
    else if (keys.includes('DEFAULT')) {
        delete fields['BASIC'];
    }
    Object.keys(fields).forEach((key) => {
        fields[key] = optimizeFields(fields[key]);
    });
    return fields;
}
/**
 * Parse string field definition to an AST object
 *
 * @param fields Fields string definition
 * @param startIndex Used for recurrence
 */
function parseFields(fields, startIndex = 0) {
    const parsedFields = {};
    let i = startIndex;
    while (i < fields.length) {
        if (fields[i] === ',') {
            if (i > startIndex) {
                parsedFields[fields.substr(startIndex, i - startIndex)] = {};
            }
            startIndex = i + 1;
        }
        else if (fields[i] === '(') {
            const subFields = parseFields(fields, i + 1);
            if (Array.isArray(subFields)) {
                parsedFields[fields.substr(startIndex, i - startIndex)] = subFields[0];
                startIndex = subFields[1];
                i = startIndex - 1;
            }
            else {
                return parsedFields;
            }
        }
        else if (fields[i] === ')') {
            if (i > startIndex) {
                parsedFields[fields.substr(startIndex, i - startIndex)] = {};
            }
            return [parsedFields, i + 1];
        }
        i++;
    }
    if (startIndex < fields.length) {
        parsedFields[fields.substr(startIndex, i - startIndex)] = {};
    }
    return parsedFields;
}
/**
 * Convert AST object fields definition to string representation
 *
 * @param fields
 */
function stringifyFields(fields) {
    return Object.keys(fields)
        .map((key) => {
        const subFields = stringifyFields(fields[key]);
        return subFields ? `${key}(${subFields})` : key;
    })
        .join(',');
}
/**
 * Extract part of the object described by fields definition
 *
 * @param data
 * @param fields
 */
function extractFields(data, fields) {
    const parsedFields = typeof fields === 'string' ? parseFields(fields) : fields;
    return getObjectPart(data, parsedFields);
}
function getObjectPart(data, fields) {
    if (!isObject(data)) {
        return data;
    }
    const keys = Object.keys(fields);
    if (keys.length === 0 ||
        // we should not extract parts of the object with ambiguous fields definitions
        keys.find((el) => el === 'BASIC' || el === 'DEFAULT' || el === 'FULL')) {
        return data;
    }
    const result = {};
    keys.forEach((key) => {
        if (data.hasOwnProperty(key)) {
            result[key] = getObjectPart(data[key], fields[key]);
        }
    });
    return result;
}

/**
 * Helper service for optimizing endpoint calls to occ backend
 */
let OccFieldsService = class OccFieldsService {
    constructor(http) {
        this.http = http;
        this.FIELDS_PARAM = 'fields';
    }
    /**
     * Merge similar occ endpoints calls by merging fields parameter
     *
     * We assume that different scopes are defined by different fields parameters,
     * so we are grouping all requests with the same urls (except fields definition)
     * and merging into one request with fields that will satisfy all separate ones.
     *
     * @param models
     */
    getOptimalUrlGroups(models) {
        const groupedByUrls = {};
        for (const model of models) {
            const [urlPart, fields] = this.splitFields(model.url);
            if (!groupedByUrls[urlPart]) {
                groupedByUrls[urlPart] = {};
            }
            model.fields = fields ? parseFields(fields) : {};
            groupedByUrls[urlPart][model.scopedData.scope] = model;
        }
        const mergedUrls = {};
        for (const [url, group] of Object.entries(groupedByUrls)) {
            const urlWithFields = this.getUrlWithFields(url, Object.values(group).map((lo) => lo.fields));
            mergedUrls[urlWithFields] = group;
        }
        return mergedUrls;
    }
    /**
     * Extract fields parameter from occ endpoint url
     *
     * @param urlWithFields
     */
    splitFields(urlWithFields) {
        const [url, params] = urlWithFields.split('?');
        const paramsMap = {};
        if (params) {
            params.split('&').map((param) => {
                const keyValue = param.split('=');
                paramsMap[keyValue[0]] = keyValue[1];
            });
        }
        const nonFieldsParams = Object.keys(paramsMap)
            .sort()
            .reduce((id, par) => {
            if (par !== this.FIELDS_PARAM) {
                id.push(paramsMap[par] ? `${par}=${paramsMap[par]}` : par);
            }
            return id;
        }, []);
        const nonFields = nonFieldsParams.join('&');
        return [
            nonFields ? `${url}?${nonFields}` : url,
            paramsMap[this.FIELDS_PARAM],
        ];
    }
    /**
     * Combine url with field parameters
     *
     * @param url
     * @param fields
     */
    getUrlWithFields(url, fields) {
        const mergedFields = mergeFields(fields);
        if (mergedFields) {
            url += url.includes('?') ? '&' : '?';
            url += `${this.FIELDS_PARAM}=${mergedFields}`;
        }
        return url;
    }
};
OccFieldsService.ctorParameters = () => [
    { type: HttpClient }
];
OccFieldsService.ɵprov = ɵɵdefineInjectable({ factory: function OccFieldsService_Factory() { return new OccFieldsService(ɵɵinject(HttpClient)); }, token: OccFieldsService, providedIn: "root" });
OccFieldsService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], OccFieldsService);

let OccRequestsOptimizerService = class OccRequestsOptimizerService {
    constructor(http, occFields) {
        this.http = http;
        this.occFields = occFields;
    }
    /**
     * Optimize occ endpoint calls merging requests to the same url by merging field parameters
     *
     * @param scopedDataWithUrls
     * @param dataFactory
     */
    scopedDataLoad(scopedDataWithUrls, dataFactory) {
        const result = [];
        if (!dataFactory) {
            dataFactory = (url) => this.http.get(url);
        }
        const mergedUrls = this.occFields.getOptimalUrlGroups(scopedDataWithUrls);
        Object.entries(mergedUrls).forEach(([url, groupedModelsSet]) => {
            const groupedModels = Object.values(groupedModelsSet);
            if (groupedModels.length === 1) {
                // only one scope for url, we can pass the data straightaway
                result.push(Object.assign(Object.assign({}, groupedModels[0].scopedData), { data$: dataFactory(url) }));
            }
            else {
                // multiple scopes per url
                // we have to split the model per each scope
                const data$ = dataFactory(url).pipe(shareReplay(1));
                groupedModels.forEach((modelData) => {
                    result.push(Object.assign(Object.assign({}, modelData.scopedData), { data$: data$.pipe(map((data) => extractFields(data, modelData.fields))) }));
                });
            }
        });
        return result;
    }
};
OccRequestsOptimizerService.ctorParameters = () => [
    { type: HttpClient },
    { type: OccFieldsService }
];
OccRequestsOptimizerService.ɵprov = ɵɵdefineInjectable({ factory: function OccRequestsOptimizerService_Factory() { return new OccRequestsOptimizerService(ɵɵinject(HttpClient), ɵɵinject(OccFieldsService)); }, token: OccRequestsOptimizerService, providedIn: "root" });
OccRequestsOptimizerService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], OccRequestsOptimizerService);

let OccProductAdapter = class OccProductAdapter {
    constructor(http, occEndpoints, converter, requestsOptimizer) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
        this.requestsOptimizer = requestsOptimizer;
    }
    load(productCode, scope) {
        return this.http
            .get(this.getEndpoint(productCode, scope))
            .pipe(this.converter.pipeable(PRODUCT_NORMALIZER));
    }
    loadMany(products) {
        const scopedDataWithUrls = products.map((model) => ({
            scopedData: model,
            url: this.getEndpoint(model.code, model.scope),
        }));
        return this.requestsOptimizer
            .scopedDataLoad(scopedDataWithUrls)
            .map((scopedProduct) => (Object.assign(Object.assign({}, scopedProduct), { data$: scopedProduct.data$.pipe(this.converter.pipeable(PRODUCT_NORMALIZER)) })));
    }
    getEndpoint(code, scope) {
        return this.occEndpoints.getUrl('product', {
            productCode: code,
        }, undefined, scope);
    }
};
OccProductAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService },
    { type: OccRequestsOptimizerService }
];
OccProductAdapter = __decorate([
    Injectable()
], OccProductAdapter);

class ProductAdapter {
}

class ProductReferencesAdapter {
}

class ProductReviewsAdapter {
}

class ProductSearchAdapter {
}

var ProductScope;
(function (ProductScope) {
    ProductScope["LIST"] = "list";
    ProductScope["DETAILS"] = "details";
    ProductScope["ATTRIBUTES"] = "attributes";
    ProductScope["VARIANTS"] = "variants";
})(ProductScope || (ProductScope = {}));

const defaultOccProductConfig = {
    backend: {
        occ: {
            endpoints: {
                product: 'products/${productCode}?fields=DEFAULT,averageRating,images(FULL),classifications,manufacturer,numberOfReviews,categories(FULL),baseOptions,baseProduct,variantOptions,variantType',
                product_scopes: {
                    list: 'products/${productCode}?fields=code,name,summary,price(formattedValue),images(DEFAULT,galleryIndex)',
                    details: 'products/${productCode}?fields=averageRating,stock(DEFAULT),description,availableForPickup,code,url,price(DEFAULT),numberOfReviews,manufacturer,categories(FULL),priceRange,multidimensional,configuratorType,configurable,tags,images(FULL)',
                    attributes: 'products/${productCode}?fields=classifications',
                    variants: 'products/${productCode}?fields=name,purchasable,baseOptions(DEFAULT),baseProduct,variantOptions(DEFAULT),variantType',
                },
                productReviews: 'products/${productCode}/reviews',
                // Uncomment this when occ gets configured
                // productReferences:
                //   'products/${productCode}/references?fields=DEFAULT,references(target(images(FULL)))&referenceType=${referenceType}',
                productReferences: 'products/${productCode}/references?fields=DEFAULT,references(target(images(FULL)))',
                // tslint:disable:max-line-length
                productSearch: 'products/search?fields=products(code,name,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating,variantOptions),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT),freeTextSearch',
                // tslint:enable
                productSuggestions: 'products/suggestions',
            },
        },
        loadingScopes: {
            product: {
                details: {
                    include: [ProductScope.LIST, ProductScope.VARIANTS],
                },
            },
        },
    },
};

let ProductOccModule = class ProductOccModule {
};
ProductOccModule = __decorate([
    NgModule({
        imports: [CommonModule, HttpClientModule],
        providers: [
            provideDefaultConfig(defaultOccProductConfig),
            {
                provide: ProductAdapter,
                useClass: OccProductAdapter,
            },
            {
                provide: PRODUCT_NORMALIZER,
                useExisting: ProductImageNormalizer,
                multi: true,
            },
            {
                provide: PRODUCT_NORMALIZER,
                useExisting: ProductNameNormalizer,
                multi: true,
            },
            {
                provide: ProductReferencesAdapter,
                useClass: OccProductReferencesAdapter,
            },
            {
                provide: PRODUCT_REFERENCES_NORMALIZER,
                useExisting: OccProductReferencesListNormalizer,
                multi: true,
            },
            {
                provide: ProductSearchAdapter,
                useClass: OccProductSearchAdapter,
            },
            {
                provide: PRODUCT_SEARCH_PAGE_NORMALIZER,
                useExisting: OccProductSearchPageNormalizer,
                multi: true,
            },
            {
                provide: ProductReviewsAdapter,
                useClass: OccProductReviewsAdapter,
            },
        ],
    })
], ProductOccModule);

const LANGUAGE_NORMALIZER = new InjectionToken('LanguageNormalizer');
const CURRENCY_NORMALIZER = new InjectionToken('CurrencyNormalizer');
const COUNTRY_NORMALIZER = new InjectionToken('CountryNormalizer');
const REGION_NORMALIZER = new InjectionToken('RegionNormalizer');

let OccSiteAdapter = class OccSiteAdapter {
    constructor(http, occEndpointsService, converterService) {
        this.http = http;
        this.occEndpointsService = occEndpointsService;
        this.converterService = converterService;
    }
    loadLanguages() {
        return this.http
            .get(this.occEndpointsService.getUrl('languages'))
            .pipe(map((languageList) => languageList.languages), this.converterService.pipeableMany(LANGUAGE_NORMALIZER));
    }
    loadCurrencies() {
        return this.http
            .get(this.occEndpointsService.getUrl('currencies'))
            .pipe(map((currencyList) => currencyList.currencies), this.converterService.pipeableMany(CURRENCY_NORMALIZER));
    }
    loadCountries(type) {
        return this.http
            .get(this.occEndpointsService.getUrl('countries', undefined, type ? { type } : undefined))
            .pipe(map((countryList) => countryList.countries), this.converterService.pipeableMany(COUNTRY_NORMALIZER));
    }
    loadRegions(countryIsoCode) {
        return this.http
            .get(this.occEndpointsService.getUrl('regions', { isoCode: countryIsoCode }))
            .pipe(map((regionList) => regionList.regions), this.converterService.pipeableMany(REGION_NORMALIZER));
    }
    loadBaseSite() {
        const baseUrl = this.occEndpointsService.getBaseEndpoint();
        const urlSplits = baseUrl.split('/');
        const activeSite = urlSplits.pop();
        const url = urlSplits.join('/') + '/basesites';
        const params = new HttpParams({
            fromString: 'fields=FULL',
        });
        return this.http
            .get(url, { params: params })
            .pipe(map((siteList) => {
            return siteList.baseSites.find((site) => site.uid === activeSite);
        }));
    }
};
OccSiteAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
OccSiteAdapter = __decorate([
    Injectable()
], OccSiteAdapter);

class SiteAdapter {
}

const defaultOccSiteContextConfig = {
    backend: {
        occ: {
            endpoints: {
                languages: 'languages',
                currencies: 'currencies',
                countries: 'countries',
                regions: 'countries/${isoCode}/regions?fields=regions(name,isocode,isocodeShort)',
            },
        },
    },
};

/**
 * Facade that provides easy access to curreny state, actions and selectors.
 */
let CurrencyService = class CurrencyService {
    constructor(store, winRef, config) {
        this.store = store;
        this.config = config;
        this.sessionStorage = winRef.sessionStorage;
    }
    /**
     * Represents all the currencies supported by the current store.
     */
    getAll() {
        return this.store.pipe(select(getAllCurrencies), tap((currencies) => {
            if (!currencies) {
                this.store.dispatch(new LoadCurrencies());
            }
        }), filter((currenies) => Boolean(currenies)));
    }
    /**
     * Represents the isocode of the active currency.
     */
    getActive() {
        return this.store.pipe(select(getActiveCurrency), filter((active) => Boolean(active)));
    }
    /**
     * Sets the active language.
     */
    setActive(isocode) {
        return this.store
            .pipe(select(getActiveCurrency), take(1))
            .subscribe((activeCurrency) => {
            if (activeCurrency !== isocode) {
                this.store.dispatch(new SetActiveCurrency(isocode));
            }
        });
    }
    /**
     * Initials the active currency. The active currency is either given
     * by the last visit (stored in session storage) or by the
     * default session currency of the store.
     */
    initialize() {
        const sessionCurrency = this.sessionStorage && this.sessionStorage.getItem('currency');
        if (sessionCurrency &&
            getContextParameterValues(this.config, CURRENCY_CONTEXT_ID).includes(sessionCurrency)) {
            this.setActive(sessionCurrency);
        }
        else {
            this.setActive(getContextParameterDefault(this.config, CURRENCY_CONTEXT_ID));
        }
    }
};
CurrencyService.ctorParameters = () => [
    { type: Store },
    { type: WindowRef },
    { type: SiteContextConfig }
];
CurrencyService = __decorate([
    Injectable()
], CurrencyService);

/**
 * Facade that provides easy access to language state, actions and selectors.
 */
let LanguageService = class LanguageService {
    constructor(store, winRef, config) {
        this.store = store;
        this.config = config;
        this.sessionStorage = winRef.sessionStorage;
    }
    /**
     * Represents all the languages supported by the current store.
     */
    getAll() {
        return this.store.pipe(select(getAllLanguages), tap((languages) => {
            if (!languages) {
                this.store.dispatch(new LoadLanguages());
            }
        }), filter((languages) => Boolean(languages)));
    }
    /**
     * Represents the isocode of the active language.
     */
    getActive() {
        return this.store.pipe(select(getActiveLanguage), filter((active) => Boolean(active)));
    }
    /**
     * Sets the active language.
     */
    setActive(isocode) {
        return this.store
            .pipe(select(getActiveLanguage), take(1))
            .subscribe((activeLanguage) => {
            if (activeLanguage !== isocode) {
                this.store.dispatch(new SetActiveLanguage(isocode));
            }
        });
    }
    /**
     * Initials the active language. The active language is either given
     * by the last visit (stored in session storage) or by the
     * default session language of the store.
     */
    initialize() {
        const sessionLanguage = this.sessionStorage && this.sessionStorage.getItem('language');
        if (sessionLanguage &&
            getContextParameterValues(this.config, LANGUAGE_CONTEXT_ID).includes(sessionLanguage)) {
            this.setActive(sessionLanguage);
        }
        else {
            this.setActive(getContextParameterDefault(this.config, LANGUAGE_CONTEXT_ID));
        }
    }
};
LanguageService.ctorParameters = () => [
    { type: Store },
    { type: WindowRef },
    { type: SiteContextConfig }
];
LanguageService = __decorate([
    Injectable()
], LanguageService);

let SiteContextInterceptor = class SiteContextInterceptor {
    constructor(languageService, currencyService, occEndpoints, config) {
        this.languageService = languageService;
        this.currencyService = currencyService;
        this.occEndpoints = occEndpoints;
        this.config = config;
        this.activeLang = getContextParameterDefault(this.config, LANGUAGE_CONTEXT_ID);
        this.activeCurr = getContextParameterDefault(this.config, CURRENCY_CONTEXT_ID);
        this.languageService
            .getActive()
            .subscribe((data) => (this.activeLang = data));
        this.currencyService.getActive().subscribe((data) => {
            this.activeCurr = data;
        });
    }
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
};
SiteContextInterceptor.ctorParameters = () => [
    { type: LanguageService },
    { type: CurrencyService },
    { type: OccEndpointsService },
    { type: SiteContextConfig }
];
SiteContextInterceptor.ɵprov = ɵɵdefineInjectable({ factory: function SiteContextInterceptor_Factory() { return new SiteContextInterceptor(ɵɵinject(LanguageService), ɵɵinject(CurrencyService), ɵɵinject(OccEndpointsService), ɵɵinject(SiteContextConfig)); }, token: SiteContextInterceptor, providedIn: "root" });
SiteContextInterceptor = __decorate([
    Injectable({ providedIn: 'root' })
], SiteContextInterceptor);

let SiteContextOccModule = class SiteContextOccModule {
};
SiteContextOccModule = __decorate([
    NgModule({
        imports: [CommonModule, HttpClientModule],
        providers: [
            provideDefaultConfig(defaultOccSiteContextConfig),
            {
                provide: SiteAdapter,
                useClass: OccSiteAdapter,
            },
            {
                provide: HTTP_INTERCEPTORS,
                useExisting: SiteContextInterceptor,
                multi: true,
            },
        ],
    })
], SiteContextOccModule);

class StoreFinderAdapter {
}

const defaultOccStoreFinderConfig = {
    backend: {
        occ: {
            endpoints: {
                store: 'stores/${storeId}?fields=FULL',
                stores: 'stores?fields=stores(name,displayName,formattedDistance,openingHours(weekDayOpeningList(FULL),specialDayOpeningList(FULL)),geoPoint(latitude,longitude),address(line1,line2,town,region(FULL),postalCode,phone,country,email), features),pagination(DEFAULT),sorts(DEFAULT)',
                storescounts: 'stores/storescounts',
            },
        },
    },
};

let StoreFinderConnector = class StoreFinderConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    search(query, searchConfig, longitudeLatitude) {
        return this.adapter.search(query, searchConfig, longitudeLatitude);
    }
    getCounts() {
        return this.adapter.loadCounts();
    }
    get(storeId) {
        return this.adapter.load(storeId);
    }
};
StoreFinderConnector.ctorParameters = () => [
    { type: StoreFinderAdapter }
];
StoreFinderConnector.ɵprov = ɵɵdefineInjectable({ factory: function StoreFinderConnector_Factory() { return new StoreFinderConnector(ɵɵinject(StoreFinderAdapter)); }, token: StoreFinderConnector, providedIn: "root" });
StoreFinderConnector = __decorate([
    Injectable({ providedIn: 'root' })
], StoreFinderConnector);

const POINT_OF_SERVICE_NORMALIZER = new InjectionToken('PointOfServiceNormalizer');
const STORE_FINDER_SEARCH_PAGE_NORMALIZER = new InjectionToken('StoreFinderSearchPageNormalizer');
const STORE_COUNT_NORMALIZER = new InjectionToken('StoreCountNormalizer');

let OccStoreFinderAdapter = class OccStoreFinderAdapter {
    constructor(http, occEndpointsService, converterService) {
        this.http = http;
        this.occEndpointsService = occEndpointsService;
        this.converterService = converterService;
    }
    search(query, searchConfig, longitudeLatitude) {
        return this.callOccFindStores(query, searchConfig, longitudeLatitude).pipe(this.converterService.pipeable(STORE_FINDER_SEARCH_PAGE_NORMALIZER));
    }
    loadCounts() {
        return this.http
            .get(this.occEndpointsService.getUrl('storescounts'))
            .pipe(map(({ countriesAndRegionsStoreCount }) => countriesAndRegionsStoreCount), this.converterService.pipeableMany(STORE_COUNT_NORMALIZER));
    }
    load(storeId) {
        return this.http
            .get(this.occEndpointsService.getUrl('store', { storeId }))
            .pipe(this.converterService.pipeable(POINT_OF_SERVICE_NORMALIZER));
    }
    callOccFindStores(query, searchConfig, longitudeLatitude) {
        const params = {};
        if (longitudeLatitude) {
            params['longitude'] = String(longitudeLatitude.longitude);
            params['latitude'] = String(longitudeLatitude.latitude);
            params['radius'] = String('10000000');
        }
        else {
            params['query'] = query;
        }
        if (searchConfig.pageSize) {
            params['pageSize'] = String(searchConfig.pageSize);
        }
        if (searchConfig.currentPage) {
            params['currentPage'] = String(searchConfig.currentPage);
        }
        if (searchConfig.sort) {
            params['sort'] = searchConfig.sort;
        }
        return this.http.get(this.occEndpointsService.getUrl('stores', undefined, params));
    }
};
OccStoreFinderAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
OccStoreFinderAdapter = __decorate([
    Injectable()
], OccStoreFinderAdapter);

let StoreFinderOccModule = class StoreFinderOccModule {
};
StoreFinderOccModule = __decorate([
    NgModule({
        providers: [
            provideDefaultConfig(defaultOccStoreFinderConfig),
            { provide: StoreFinderAdapter, useClass: OccStoreFinderAdapter },
        ],
    })
], StoreFinderOccModule);

const CONSENT_TEMPLATE_NORMALIZER = new InjectionToken('ConsentTemplateNormalizer');

let OccAnonymousConsentTemplatesAdapter = class OccAnonymousConsentTemplatesAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    loadAnonymousConsentTemplates() {
        const url = this.occEndpoints.getUrl('anonymousConsentTemplates');
        return this.http.get(url).pipe(catchError((error) => throwError(error)), map((consentList) => consentList.consentTemplates), this.converter.pipeableMany(CONSENT_TEMPLATE_NORMALIZER));
    }
};
OccAnonymousConsentTemplatesAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
OccAnonymousConsentTemplatesAdapter = __decorate([
    Injectable()
], OccAnonymousConsentTemplatesAdapter);

let OccUserAddressAdapter = class OccUserAddressAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    loadAll(userId) {
        const url = this.occEndpoints.getUrl('addresses', { userId });
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .get(url, { headers })
            .pipe(catchError((error) => throwError(error)), map((addressList) => addressList.addresses), this.converter.pipeableMany(ADDRESS_NORMALIZER));
    }
    add(userId, address) {
        const url = this.occEndpoints.getUrl('addresses', { userId });
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        address = this.converter.convert(address, ADDRESS_SERIALIZER);
        return this.http
            .post(url, address, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    update(userId, addressId, address) {
        const url = this.occEndpoints.getUrl('addressDetail', {
            userId,
            addressId,
        });
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        address = this.converter.convert(address, ADDRESS_SERIALIZER);
        return this.http
            .patch(url, address, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    verify(userId, address) {
        const url = this.occEndpoints.getUrl('addressVerification', { userId });
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        if (userId === OCC_USER_ID_ANONYMOUS) {
            headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        }
        address = this.converter.convert(address, ADDRESS_SERIALIZER);
        return this.http
            .post(url, address, { headers })
            .pipe(catchError((error) => throwError(error)), this.converter.pipeable(ADDRESS_VALIDATION_NORMALIZER));
    }
    delete(userId, addressId) {
        const url = this.occEndpoints.getUrl('addressDetail', {
            userId,
            addressId,
        });
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .delete(url, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
};
OccUserAddressAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
OccUserAddressAdapter = __decorate([
    Injectable()
], OccUserAddressAdapter);

let OccUserConsentAdapter = class OccUserConsentAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    loadConsents(userId) {
        const url = this.occEndpoints.getUrl('consentTemplates', { userId });
        const headers = new HttpHeaders({ 'Cache-Control': 'no-cache' });
        return this.http
            .get(url, { headers })
            .pipe(catchError((error) => throwError(error)), map((consentList) => consentList.consentTemplates), this.converter.pipeableMany(CONSENT_TEMPLATE_NORMALIZER));
    }
    giveConsent(userId, consentTemplateId, consentTemplateVersion) {
        const url = this.occEndpoints.getUrl('consents', { userId });
        const httpParams = new HttpParams()
            .set('consentTemplateId', consentTemplateId)
            .set('consentTemplateVersion', consentTemplateVersion.toString());
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache',
        });
        return this.http
            .post(url, httpParams, { headers })
            .pipe(catchError((error) => throwError(error)), this.converter.pipeable(CONSENT_TEMPLATE_NORMALIZER));
    }
    withdrawConsent(userId, consentCode) {
        const headers = new HttpHeaders({
            'Cache-Control': 'no-cache',
        });
        const url = this.occEndpoints.getUrl('consentDetail', {
            userId,
            consentId: consentCode,
        });
        return this.http.delete(url, { headers });
    }
};
OccUserConsentAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
OccUserConsentAdapter = __decorate([
    Injectable()
], OccUserConsentAdapter);

const ORDER_HISTORY_NORMALIZER = new InjectionToken('OrderHistoryNormalizer');
const CONSIGNMENT_TRACKING_NORMALIZER = new InjectionToken('ConsignmentTrackingNormalizer');
const ORDER_RETURN_REQUEST_NORMALIZER = new InjectionToken('OrderReturnRequestNormalizer');
const ORDER_RETURN_REQUEST_INPUT_SERIALIZER = new InjectionToken('OrderReturnRequestInputSerializer');
const ORDER_RETURNS_NORMALIZER = new InjectionToken('OrderReturnsNormalizer');

let OccUserOrderAdapter = class OccUserOrderAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    load(userId, orderCode) {
        const url = this.occEndpoints.getUrl('orderDetail', {
            userId,
            orderId: orderCode,
        });
        let headers = new HttpHeaders();
        if (userId === OCC_USER_ID_ANONYMOUS) {
            headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        }
        return this.http
            .get(url, { headers })
            .pipe(this.converter.pipeable(ORDER_NORMALIZER));
    }
    loadHistory(userId, pageSize, currentPage, sort) {
        const params = {};
        if (pageSize) {
            params['pageSize'] = pageSize.toString();
        }
        if (currentPage) {
            params['currentPage'] = currentPage.toString();
        }
        if (sort) {
            params['sort'] = sort.toString();
        }
        const url = this.occEndpoints.getUrl('orderHistory', { userId }, params);
        return this.http
            .get(url)
            .pipe(this.converter.pipeable(ORDER_HISTORY_NORMALIZER));
    }
    getConsignmentTracking(orderCode, consignmentCode, userId = OCC_USER_ID_CURRENT) {
        const url = this.occEndpoints.getUrl('consignmentTracking', {
            userId,
            orderCode,
            consignmentCode,
        });
        return this.http
            .get(url)
            .pipe(this.converter.pipeable(CONSIGNMENT_TRACKING_NORMALIZER));
    }
    cancel(userId, orderCode, cancelRequestInput) {
        const url = this.occEndpoints.getUrl('cancelOrder', {
            userId,
            orderId: orderCode,
        });
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .post(url, cancelRequestInput, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    createReturnRequest(userId, returnRequestInput) {
        const url = this.occEndpoints.getUrl('returnOrder', {
            userId,
        });
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        returnRequestInput = this.converter.convert(returnRequestInput, ORDER_RETURN_REQUEST_INPUT_SERIALIZER);
        return this.http.post(url, returnRequestInput, { headers }).pipe(catchError((error) => throwError(error)), this.converter.pipeable(ORDER_RETURN_REQUEST_NORMALIZER));
    }
    loadReturnRequestList(userId, pageSize, currentPage, sort) {
        const params = {};
        if (pageSize) {
            params['pageSize'] = pageSize.toString();
        }
        if (currentPage) {
            params['currentPage'] = currentPage.toString();
        }
        if (sort) {
            params['sort'] = sort.toString();
        }
        const url = this.occEndpoints.getUrl('orderReturns', { userId }, params);
        return this.http
            .get(url)
            .pipe(this.converter.pipeable(ORDER_RETURNS_NORMALIZER));
    }
    loadReturnRequestDetail(userId, returnRequestCode) {
        const url = this.occEndpoints.getUrl('orderReturnDetail', {
            userId,
            returnRequestCode,
        });
        return this.http
            .get(url)
            .pipe(this.converter.pipeable(ORDER_RETURN_REQUEST_NORMALIZER));
    }
    cancelReturnRequest(userId, returnRequestCode, returnRequestModification) {
        const url = this.occEndpoints.getUrl('cancelReturn', {
            userId,
            returnRequestCode,
        });
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .patch(url, returnRequestModification, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
};
OccUserOrderAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
OccUserOrderAdapter = __decorate([
    Injectable()
], OccUserOrderAdapter);

let OccUserPaymentAdapter = class OccUserPaymentAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    loadAll(userId) {
        const url = this.occEndpoints.getUrl('paymentDetailsAll', { userId }) + '?saved=true';
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .get(url, { headers })
            .pipe(catchError((error) => throwError(error)), map((methodList) => methodList.payments), this.converter.pipeableMany(PAYMENT_DETAILS_NORMALIZER));
    }
    delete(userId, paymentMethodID) {
        const url = this.occEndpoints.getUrl('paymentDetail', {
            userId,
            paymentDetailId: paymentMethodID,
        });
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .delete(url, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    setDefault(userId, paymentMethodID) {
        const url = this.occEndpoints.getUrl('paymentDetail', {
            userId,
            paymentDetailId: paymentMethodID,
        });
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .patch(url, 
        // TODO: Remove billingAddress property
        { billingAddress: { titleCode: 'mr' }, defaultPayment: true }, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
};
OccUserPaymentAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
OccUserPaymentAdapter = __decorate([
    Injectable()
], OccUserPaymentAdapter);

const USER_NORMALIZER = new InjectionToken('UserNormalizer');
const USER_SERIALIZER = new InjectionToken('UserSerializer');
const USER_SIGN_UP_SERIALIZER = new InjectionToken('UserSignUpSerializer');
const TITLE_NORMALIZER = new InjectionToken('TitleNormalizer');

let OccUserAdapter = class OccUserAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    load(userId) {
        const url = this.occEndpoints.getUrl('user', { userId });
        return this.http
            .get(url)
            .pipe(this.converter.pipeable(USER_NORMALIZER));
    }
    update(userId, user) {
        const url = this.occEndpoints.getUrl('user', { userId });
        user = this.converter.convert(user, USER_SERIALIZER);
        return this.http.patch(url, user);
    }
    register(user) {
        const url = this.occEndpoints.getUrl('userRegister');
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        user = this.converter.convert(user, USER_SIGN_UP_SERIALIZER);
        return this.http
            .post(url, user, { headers })
            .pipe(this.converter.pipeable(USER_NORMALIZER));
    }
    registerGuest(guid, password) {
        const url = this.occEndpoints.getUrl('userRegister');
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        const httpParams = new HttpParams()
            .set('guid', guid)
            .set('password', password);
        return this.http
            .post(url, httpParams, { headers })
            .pipe(this.converter.pipeable(USER_NORMALIZER));
    }
    requestForgotPasswordEmail(userEmailAddress) {
        const url = this.occEndpoints.getUrl('userForgotPassword');
        const httpParams = new HttpParams().set('userId', userEmailAddress);
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        return this.http.post(url, httpParams, { headers });
    }
    resetPassword(token, newPassword) {
        const url = this.occEndpoints.getUrl('userResetPassword');
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        return this.http.post(url, { token, newPassword }, { headers });
    }
    updateEmail(userId, currentPassword, newUserId) {
        const url = this.occEndpoints.getUrl('userUpdateLoginId', { userId });
        const httpParams = new HttpParams()
            .set('password', currentPassword)
            .set('newLogin', newUserId);
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http.put(url, httpParams, { headers });
    }
    updatePassword(userId, oldPassword, newPassword) {
        const url = this.occEndpoints.getUrl('userUpdatePassword', { userId });
        const httpParams = new HttpParams()
            .set('old', oldPassword)
            .set('new', newPassword);
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http.put(url, httpParams, { headers });
    }
    remove(userId) {
        const url = this.occEndpoints.getUrl('user', { userId });
        return this.http.delete(url);
    }
    loadTitles() {
        const url = this.occEndpoints.getUrl('titles');
        return this.http.get(url).pipe(map((titleList) => titleList.titles), this.converter.pipeableMany(TITLE_NORMALIZER));
    }
};
OccUserAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
OccUserAdapter = __decorate([
    Injectable()
], OccUserAdapter);

class AnonymousConsentTemplatesAdapter {
}

class UserAddressAdapter {
}

class UserConsentAdapter {
}

class UserOrderAdapter {
}

class UserPaymentAdapter {
}

class UserAdapter {
}

const defaultOccUserConfig = {
    backend: {
        occ: {
            endpoints: {
                // tslint:disable:max-line-length
                user: 'users/${userId}',
                userRegister: 'users',
                userForgotPassword: 'forgottenpasswordtokens',
                userResetPassword: 'resetpassword',
                userUpdateLoginId: 'users/${userId}/login',
                userUpdatePassword: 'users/${userId}/password',
                titles: 'titles',
                paymentDetailsAll: 'users/${userId}/paymentdetails',
                paymentDetail: 'users/${userId}/paymentdetails/${paymentDetailId}',
                orderHistory: 'users/${userId}/orders',
                orderDetail: 'users/${userId}/orders/${orderId}?fields=FULL',
                anonymousConsentTemplates: 'users/anonymous/consenttemplates',
                consentTemplates: 'users/${userId}/consenttemplates',
                consents: 'users/${userId}/consents',
                consentDetail: 'users/${userId}/consents/${consentId}',
                addresses: 'users/${userId}/addresses',
                addressDetail: 'users/${userId}/addresses/${addressId}',
                addressVerification: 'users/${userId}/addresses/verification',
                consignmentTracking: 'users/${userId}/orders/${orderCode}/consignments/${consignmentCode}/tracking',
                customerCoupons: 'users/${userId}/customercoupons',
                claimCoupon: 'users/${userId}/customercoupons/${couponCode}/claim',
                couponNotification: 'users/${userId}/customercoupons/${couponCode}/notification',
                notificationPreference: 'users/${userId}/notificationpreferences',
                productInterests: 'users/${userId}/productinterests',
                getProductInterests: 'users/${userId}/productinterests?fields=sorts,pagination,results(productInterestEntry,product(code))',
                cancelOrder: 'users/${userId}/orders/${orderId}/cancellation',
                returnOrder: 'users/${userId}/orderReturns?fields=BASIC,returnEntries(BASIC,refundAmount(formattedValue),orderEntry(basePrice(formattedValue),product(name,code,baseOptions,images(DEFAULT,galleryIndex)))),deliveryCost(formattedValue),totalPrice(formattedValue),subTotal(formattedValue)',
                orderReturns: 'users/${userId}/orderReturns?fields=BASIC',
                orderReturnDetail: 'users/${userId}/orderReturns/${returnRequestCode}?fields=BASIC,returnEntries(BASIC,refundAmount(formattedValue),orderEntry(basePrice(formattedValue),product(name,code,baseOptions,images(DEFAULT,galleryIndex)))),deliveryCost(formattedValue),totalPrice(formattedValue),subTotal(formattedValue)',
                cancelReturn: 'users/${userId}/orderReturns/${returnRequestCode}',
            },
        },
    },
};

class CustomerCouponAdapter {
}

const CUSTOMER_COUPON_SEARCH_RESULT_NORMALIZER = new InjectionToken('CustomerCouponSearchResultNormalizer');

let OccCustomerCouponAdapter = class OccCustomerCouponAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    getCustomerCoupons(userId, pageSize, currentPage, sort) {
        // Currently OCC only supports calls for customer coupons in case of logged users
        if (userId === OCC_USER_ID_ANONYMOUS) {
            return of({});
        }
        const url = this.occEndpoints.getUrl('customerCoupons', { userId });
        let params = new HttpParams().set('sort', sort ? sort : 'startDate:asc');
        if (pageSize) {
            params = params.set('pageSize', pageSize.toString());
        }
        if (currentPage) {
            params = params.set('currentPage', currentPage.toString());
        }
        const headers = this.newHttpHeader();
        return this.http
            .get(url, { headers, params })
            .pipe(this.converter.pipeable(CUSTOMER_COUPON_SEARCH_RESULT_NORMALIZER));
    }
    turnOffNotification(userId, couponCode) {
        const url = this.occEndpoints.getUrl('couponNotification', {
            userId,
            couponCode,
        });
        const headers = this.newHttpHeader();
        return this.http.delete(url, { headers });
    }
    turnOnNotification(userId, couponCode) {
        const url = this.occEndpoints.getUrl('couponNotification', {
            userId,
            couponCode,
        });
        const headers = this.newHttpHeader();
        return this.http.post(url, { headers });
    }
    claimCustomerCoupon(userId, couponCode) {
        const url = this.occEndpoints.getUrl('claimCoupon', {
            userId,
            couponCode,
        });
        const headers = this.newHttpHeader();
        return this.http.post(url, { headers });
    }
    newHttpHeader() {
        return new HttpHeaders({
            'Content-Type': 'application/json',
        });
    }
};
OccCustomerCouponAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
OccCustomerCouponAdapter = __decorate([
    Injectable()
], OccCustomerCouponAdapter);

class UserNotificationPreferenceAdapter {
}

const NOTIFICATION_PREFERENCE_SERIALIZER = new InjectionToken('NotificationPreferenceSerializer');
const NOTIFICATION_PREFERENCE_NORMALIZER = new InjectionToken('NotificationPreferenceNormalizer');

let UserNotificationPreferenceConnector = class UserNotificationPreferenceConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    loadAll(userId) {
        return this.adapter.loadAll(userId);
    }
    update(userId, preferences) {
        return this.adapter.update(userId, preferences);
    }
};
UserNotificationPreferenceConnector.ctorParameters = () => [
    { type: UserNotificationPreferenceAdapter }
];
UserNotificationPreferenceConnector.ɵprov = ɵɵdefineInjectable({ factory: function UserNotificationPreferenceConnector_Factory() { return new UserNotificationPreferenceConnector(ɵɵinject(UserNotificationPreferenceAdapter)); }, token: UserNotificationPreferenceConnector, providedIn: "root" });
UserNotificationPreferenceConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UserNotificationPreferenceConnector);

const headers = new HttpHeaders({
    'Content-Type': 'application/json',
});
let OccUserNotificationPreferenceAdapter = class OccUserNotificationPreferenceAdapter {
    constructor(http, converter, occEndpoints) {
        this.http = http;
        this.converter = converter;
        this.occEndpoints = occEndpoints;
    }
    loadAll(userId) {
        return this.http
            .get(this.occEndpoints.getUrl('notificationPreference', { userId }), {
            headers,
        })
            .pipe(map((list) => list.preferences), this.converter.pipeableMany(NOTIFICATION_PREFERENCE_NORMALIZER), catchError((error) => throwError(error)));
    }
    update(userId, preferences) {
        preferences = this.converter.convert(preferences, NOTIFICATION_PREFERENCE_SERIALIZER);
        return this.http
            .patch(this.occEndpoints.getUrl('notificationPreference', { userId }), { preferences: preferences }, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
};
OccUserNotificationPreferenceAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: ConverterService },
    { type: OccEndpointsService }
];
OccUserNotificationPreferenceAdapter = __decorate([
    Injectable()
], OccUserNotificationPreferenceAdapter);

const PRODUCT_INTERESTS_NORMALIZER = new InjectionToken('ProductInterestsNormalizer');

const headers$1 = new HttpHeaders({
    'Content-Type': 'application/json',
});
let OccUserInterestsAdapter = class OccUserInterestsAdapter {
    constructor(http, occEndpoints, config, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.config = config;
        this.converter = converter;
    }
    getInterests(userId, pageSize, currentPage, sort, productCode, notificationType) {
        let params = new HttpParams().set('sort', sort ? sort : 'name:asc');
        if (pageSize) {
            params = params.set('pageSize', pageSize.toString());
        }
        if (currentPage) {
            params = params.set('currentPage', currentPage.toString());
        }
        if (productCode) {
            params = params.set('productCode', productCode);
        }
        if (notificationType) {
            params = params.set('notificationType', notificationType.toString());
        }
        return this.http
            .get(this.occEndpoints.getUrl('getProductInterests', { userId }), {
            headers: headers$1,
            params,
        })
            .pipe(this.converter.pipeable(PRODUCT_INTERESTS_NORMALIZER), catchError((error) => throwError(error)));
    }
    removeInterest(userId, item) {
        const r = [];
        item.productInterestEntry.forEach((entry) => {
            const params = new HttpParams()
                .set('productCode', item.product.code)
                .set('notificationType', entry.interestType);
            r.push(this.http
                .delete(this.occEndpoints.getUrl('productInterests', { userId }), {
                params: params,
            })
                .pipe(catchError((error) => throwError(error))));
        });
        return forkJoin(r);
    }
    addInterest(userId, productCode, notificationType) {
        const params = new HttpParams()
            .set('productCode', productCode)
            .set('notificationType', notificationType.toString());
        return this.http
            .post(this.occEndpoints.getUrl('productInterests', { userId }), {}, {
            headers: headers$1,
            params,
        })
            .pipe(catchError((error) => throwError(error)));
    }
};
OccUserInterestsAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: OccConfig },
    { type: ConverterService }
];
OccUserInterestsAdapter = __decorate([
    Injectable()
], OccUserInterestsAdapter);

class UserInterestsAdapter {
}

let OccUserInterestsNormalizer = class OccUserInterestsNormalizer {
    constructor(converter) {
        this.converter = converter;
    }
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign({}, source);
        }
        if (source && source.results) {
            target.results = source.results.map((result) => (Object.assign(Object.assign({}, result), { product: this.converter.convert(result.product, PRODUCT_NORMALIZER) })));
        }
        return target;
    }
};
OccUserInterestsNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
OccUserInterestsNormalizer.ɵprov = ɵɵdefineInjectable({ factory: function OccUserInterestsNormalizer_Factory() { return new OccUserInterestsNormalizer(ɵɵinject(ConverterService)); }, token: OccUserInterestsNormalizer, providedIn: "root" });
OccUserInterestsNormalizer = __decorate([
    Injectable({ providedIn: 'root' })
], OccUserInterestsNormalizer);

let OccReturnRequestNormalizer = class OccReturnRequestNormalizer {
    constructor(converter) {
        this.converter = converter;
    }
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign({}, source);
        }
        if (source.returnEntries) {
            target.returnEntries = source.returnEntries.map((entry) => (Object.assign(Object.assign({}, entry), { orderEntry: this.convertOrderEntry(entry.orderEntry) })));
        }
        return target;
    }
    convertOrderEntry(source) {
        return Object.assign(Object.assign({}, source), { product: this.converter.convert(source.product, PRODUCT_NORMALIZER) });
    }
};
OccReturnRequestNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
OccReturnRequestNormalizer.ɵprov = ɵɵdefineInjectable({ factory: function OccReturnRequestNormalizer_Factory() { return new OccReturnRequestNormalizer(ɵɵinject(ConverterService)); }, token: OccReturnRequestNormalizer, providedIn: "root" });
OccReturnRequestNormalizer = __decorate([
    Injectable({ providedIn: 'root' })
], OccReturnRequestNormalizer);

let UserOccModule = class UserOccModule {
};
UserOccModule = __decorate([
    NgModule({
        imports: [CommonModule, HttpClientModule],
        providers: [
            provideDefaultConfig(defaultOccUserConfig),
            { provide: UserAdapter, useClass: OccUserAdapter },
            { provide: UserAddressAdapter, useClass: OccUserAddressAdapter },
            { provide: UserConsentAdapter, useClass: OccUserConsentAdapter },
            {
                provide: AnonymousConsentTemplatesAdapter,
                useClass: OccAnonymousConsentTemplatesAdapter,
            },
            {
                provide: UserPaymentAdapter,
                useClass: OccUserPaymentAdapter,
            },
            { provide: UserOrderAdapter, useClass: OccUserOrderAdapter },
            { provide: CustomerCouponAdapter, useClass: OccCustomerCouponAdapter },
            {
                provide: UserNotificationPreferenceAdapter,
                useClass: OccUserNotificationPreferenceAdapter,
            },
            { provide: UserInterestsAdapter, useClass: OccUserInterestsAdapter },
            {
                provide: PRODUCT_INTERESTS_NORMALIZER,
                useExisting: OccUserInterestsNormalizer,
                multi: true,
            },
            {
                provide: ORDER_RETURN_REQUEST_NORMALIZER,
                useExisting: OccReturnRequestNormalizer,
                multi: true,
            },
        ],
    })
], UserOccModule);

let JavaRegExpConverter = class JavaRegExpConverter {
    constructor() {
        /**
         * Pattern that extracts modifiers from the Java regexp.
         *
         * Java regexps MAY start with ONE or MANY modifiers like `(?MODIFIERS)PATTERN`. Examples:
         * - `(?i)` for Case Insensitive Mode: `(?i)PATTERN`
         * - `(?u)` for Unicode-Aware Case Folding; `(?u)PATTERN`
         * - or multiple combined:  `(?iu)PATTERN`
         * - (more modifiers in the official Java docs https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html)
         *
         * This pattern extracts 3 parts from the input string, i.e. for `(?iu)PATTERN`:
         *    1. original modifiers syntax, i.e. `(?iu)` (or undefined if no modifiers present)
         *    2. extracted modifiers, i.e. `iu` (or undefined if no modifiers present)
         *    3. the rest of the regexp, i.e. `PATTERN`
         */
        this.EXTRACT_JAVA_REGEXP_MODIFIERS = /^(\(\?([a-z]+)\))?(.*)/;
    }
    /**
     * Converts RegExp from Java syntax to Javascript, by recognizing Java regexp modifiers
     * and converting them to the Javascript ones (i.e. case insensitive mode: `(?i)PATTERN` -> `/pattern/i`)
     *
     * **CAUTION!** Not all features and modifiers of Java regexps are valid in Javascript!
     * If unsupported feature or modifier is used, then `null` will be returned instead of Javascript RegExp.
     *
     * See differences between Java and Javascript regexps:
     * - https://stackoverflow.com/questions/8754444/convert-javascript-regular-expression-to-java-syntax
     * - https://en.wikipedia.org/wiki/Comparison_of_regular_expression_engines#Language_features
     */
    toJsRegExp(javaSyntax) {
        const parts = javaSyntax.match(this.EXTRACT_JAVA_REGEXP_MODIFIERS);
        if (!parts) {
            return null;
        }
        const [, , modifiers, jsSyntax] = parts;
        try {
            return new RegExp(jsSyntax, modifiers);
        }
        catch (error) {
            if (isDevMode()) {
                console.warn(`WARNING: Could not convert Java regexp into Javascript. Original regexp: ${javaSyntax} \nMessage: ${error}`);
            }
            return null;
        }
    }
};
JavaRegExpConverter.ɵprov = ɵɵdefineInjectable({ factory: function JavaRegExpConverter_Factory() { return new JavaRegExpConverter(); }, token: JavaRegExpConverter, providedIn: "root" });
JavaRegExpConverter = __decorate([
    Injectable({ providedIn: 'root' })
], JavaRegExpConverter);

const CONFIG_INITIALIZER = new InjectionToken('ConfigInitializer');
const CONFIG_INITIALIZER_FORROOT_GUARD = new InjectionToken('CONFIG_INITIALIZER_FORROOT_GUARD');

/**
 * The url of the server request when running SSR
 * */
const SERVER_REQUEST_URL = new InjectionToken('SERVER_REQUEST_URL');
/**
 * The url of the server request host when running SSR
 * */
const SERVER_REQUEST_ORIGIN = new InjectionToken('SERVER_REQUEST_ORIGIN');

let OccLoadedConfigConverter = class OccLoadedConfigConverter {
    constructor(javaRegExpConverter) {
        this.javaRegExpConverter = javaRegExpConverter;
    }
    fromOccBaseSites(baseSites, currentUrl) {
        const baseSite = baseSites.find((site) => this.isCurrentBaseSite(site, currentUrl));
        if (!baseSite) {
            throw this.getError(`Current url (${currentUrl}) doesn't match with any of url patterns of any base site.`);
        }
        // Although `stores` property is an array, typically there is only one store. So we return the first store from the list.
        const baseStore = baseSite.stores && baseSite.stores[0];
        if (!baseStore) {
            throw this.getError(`Current base site (${baseSite.uid}) doesn't have any base store.`);
        }
        return {
            baseSite: baseSite.uid,
            languages: this.getIsoCodes(baseStore.languages, baseSite.defaultLanguage || baseStore.defaultLanguage),
            currencies: this.getIsoCodes(baseStore.currencies, baseStore.defaultCurrency),
            urlParameters: this.getUrlParams(baseSite.urlEncodingAttributes),
        };
    }
    toSiteContextConfig({ baseSite, languages, currencies, urlParameters: urlEncodingAttributes, }) {
        const result = {
            context: {
                urlParameters: urlEncodingAttributes,
                [BASE_SITE_CONTEXT_ID]: [baseSite],
                [LANGUAGE_CONTEXT_ID]: languages,
                [CURRENCY_CONTEXT_ID]: currencies,
            },
        };
        return result;
    }
    toI18nConfig({ languages }) {
        return { i18n: { fallbackLang: languages[0] } };
    }
    isCurrentBaseSite(site, currentUrl) {
        const index = (site.urlPatterns || []).findIndex((javaRegexp) => {
            const jsRegexp = this.javaRegExpConverter.toJsRegExp(javaRegexp);
            if (jsRegexp) {
                const result = jsRegexp.test(currentUrl);
                return result;
            }
        });
        return index !== -1;
    }
    /**
     * Returns an array of url encoded site context parameters.
     *
     * It maps the string "storefront" (used in OCC) to the "baseSite" (used in Spartacus)
     */
    getUrlParams(params) {
        const STOREFRONT_PARAM = 'storefront';
        return (params || []).map((param) => param === STOREFRONT_PARAM ? BASE_SITE_CONTEXT_ID : param);
    }
    /**
     * Returns iso codes in a array, where the first element is the default iso code.
     */
    getIsoCodes(elements, defaultElement) {
        const result = this.moveToFirst(elements, (el) => el.isocode === defaultElement.isocode).map((el) => el.isocode);
        return result;
    }
    /**
     * Moves to the start of the array the first element that satisfies the given predicate.
     *
     * @param array array to modify
     * @param predicate function called on elements
     */
    moveToFirst(array, predicate) {
        array = [...array];
        const index = array.findIndex(predicate);
        if (index !== -1) {
            const [el] = array.splice(index, 1);
            array.unshift(el);
        }
        return array;
    }
    getError(message) {
        return new Error(`Error: Cannot get base site config! ${message}`);
    }
};
OccLoadedConfigConverter.ctorParameters = () => [
    { type: JavaRegExpConverter }
];
OccLoadedConfigConverter.ɵprov = ɵɵdefineInjectable({ factory: function OccLoadedConfigConverter_Factory() { return new OccLoadedConfigConverter(ɵɵinject(JavaRegExpConverter)); }, token: OccLoadedConfigConverter, providedIn: "root" });
OccLoadedConfigConverter = __decorate([
    Injectable({ providedIn: 'root' })
], OccLoadedConfigConverter);

let OccSitesConfigLoader = class OccSitesConfigLoader {
    constructor(config, http) {
        this.config = config;
        this.http = http;
        this.endpoint = 'basesites?fields=baseSites(uid,defaultLanguage(isocode),urlEncodingAttributes,urlPatterns,stores(currencies(isocode),defaultCurrency(isocode),languages(isocode),defaultLanguage(isocode)))';
    }
    get baseEndpoint() {
        return ((this.config.backend.occ.baseUrl || '') + this.config.backend.occ.prefix);
    }
    get url() {
        return `${this.baseEndpoint}${this.endpoint}`;
    }
    load() {
        if (!this.config || !this.config.backend || !this.config.backend.occ) {
            return throwError(new Error(`Missing config for OCC backend!`));
        }
        return this.http
            .get(this.url)
            .pipe(map(({ baseSites }) => baseSites));
    }
};
OccSitesConfigLoader.ctorParameters = () => [
    { type: OccConfig },
    { type: HttpClient }
];
OccSitesConfigLoader.ɵprov = ɵɵdefineInjectable({ factory: function OccSitesConfigLoader_Factory() { return new OccSitesConfigLoader(ɵɵinject(OccConfig), ɵɵinject(HttpClient)); }, token: OccSitesConfigLoader, providedIn: "root" });
OccSitesConfigLoader = __decorate([
    Injectable({ providedIn: 'root' })
], OccSitesConfigLoader);

const EXTERNAL_CONFIG_TRANSFER_ID = makeStateKey('cx-external-config');
let OccConfigLoaderService = class OccConfigLoaderService {
    constructor(platform, document, config, sitesConfigLoader, converter, transferState, serverRequestUrl) {
        this.platform = platform;
        this.document = document;
        this.config = config;
        this.sitesConfigLoader = sitesConfigLoader;
        this.converter = converter;
        this.transferState = transferState;
        this.serverRequestUrl = serverRequestUrl;
    }
    get currentUrl() {
        if (isPlatformBrowser(this.platform)) {
            return this.document.location.href;
        }
        if (this.serverRequestUrl) {
            return this.serverRequestUrl;
        }
        if (isDevMode()) {
            console.error(`Please provide token 'SERVER_REQUEST_URL' with the requested URL for SSR`);
        }
    }
    /**
     * Initializes the Spartacus config asynchronously basing on the external config
     */
    loadConfig() {
        return this.get()
            .pipe(tap((externalConfig) => this.transfer(externalConfig)), map((externalConfig) => deepMerge({}, ...this.getConfigChunks(externalConfig))))
            .toPromise();
    }
    /**
     * Returns the external config
     */
    get() {
        const rehydratedExternalConfig = this.rehydrate();
        return rehydratedExternalConfig
            ? of(rehydratedExternalConfig)
            : this.load();
    }
    /**
     * Loads the external config from backend
     */
    load() {
        return this.sitesConfigLoader
            .load()
            .pipe(map((baseSites) => this.converter.fromOccBaseSites(baseSites, this.currentUrl)));
    }
    /**
     * Tries to rehydrate external config in the browser from SSR
     */
    rehydrate() {
        if (this.transferState && isPlatformBrowser(this.platform)) {
            return this.transferState.get(EXTERNAL_CONFIG_TRANSFER_ID, undefined);
        }
    }
    /**
     * Transfers the given external config in SSR to the browser
     *
     * @param externalConfig
     */
    transfer(externalConfig) {
        if (this.transferState &&
            isPlatformServer(this.platform) &&
            externalConfig) {
            this.transferState.set(EXTERNAL_CONFIG_TRANSFER_ID, externalConfig);
        }
    }
    getConfigChunks(externalConfig) {
        const chunks = [this.converter.toSiteContextConfig(externalConfig)];
        if (this.shouldReturnI18nChunk()) {
            chunks.push(this.converter.toI18nConfig(externalConfig));
        }
        return chunks;
    }
    shouldReturnI18nChunk() {
        const fallbackLangExists = typeof (this.config &&
            this.config.i18n &&
            this.config.i18n.fallbackLang) !== 'undefined';
        if (fallbackLangExists && isDevMode()) {
            console.warn(`There is an already provided static config for 'i18n.fallbackLang', so the value from OCC loaded config is ignored.`);
        }
        return !fallbackLangExists;
    }
};
OccConfigLoaderService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [Config,] }] },
    { type: OccSitesConfigLoader },
    { type: OccLoadedConfigConverter },
    { type: TransferState, decorators: [{ type: Optional }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [SERVER_REQUEST_URL,] }] }
];
OccConfigLoaderService.ɵprov = ɵɵdefineInjectable({ factory: function OccConfigLoaderService_Factory() { return new OccConfigLoaderService(ɵɵinject(PLATFORM_ID), ɵɵinject(DOCUMENT), ɵɵinject(Config), ɵɵinject(OccSitesConfigLoader), ɵɵinject(OccLoadedConfigConverter), ɵɵinject(TransferState, 8), ɵɵinject(SERVER_REQUEST_URL, 8)); }, token: OccConfigLoaderService, providedIn: "root" });
OccConfigLoaderService = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(0, Inject(PLATFORM_ID)),
    __param(1, Inject(DOCUMENT)),
    __param(2, Inject(Config)),
    __param(5, Optional()),
    __param(6, Optional()),
    __param(6, Inject(SERVER_REQUEST_URL))
], OccConfigLoaderService);

var OccConfigLoaderModule_1;
/**
 * Initializes the Spartacus config asynchronously basing on the external config
 */
function initConfig(configLoader, config) {
    /**
     * Load config for `context` from backend only when there is no static config for `context.baseSite`
     */
    if (!config.context || !config.context[BASE_SITE_CONTEXT_ID]) {
        return {
            scopes: ['context', 'i18n.fallbackLang'],
            configFactory: () => configLoader.loadConfig(),
        };
    }
    return null;
}
/**
 * Re-provides the external config chunk given before Angular bootstrap
 */
let OccConfigLoaderModule = OccConfigLoaderModule_1 = class OccConfigLoaderModule {
    static forRoot() {
        return {
            ngModule: OccConfigLoaderModule_1,
            providers: [
                {
                    provide: CONFIG_INITIALIZER,
                    useFactory: initConfig,
                    deps: [OccConfigLoaderService, SiteContextConfig],
                    multi: true,
                },
            ],
        };
    }
};
OccConfigLoaderModule = OccConfigLoaderModule_1 = __decorate([
    NgModule()
], OccConfigLoaderModule);

const OCC_BASE_URL_META_TAG_NAME = 'occ-backend-base-url';
const OCC_BASE_URL_META_TAG_PLACEHOLDER = 'OCC_BACKEND_BASE_URL_VALUE';
const MEDIA_BASE_URL_META_TAG_NAME = 'media-backend-base-url';
const MEDIA_BASE_URL_META_TAG_PLACEHOLDER = 'MEDIA_BACKEND_BASE_URL_VALUE';
function occServerConfigFromMetaTagFactory(meta) {
    const baseUrl = getMetaTagContent(OCC_BASE_URL_META_TAG_NAME, meta);
    return baseUrl && baseUrl !== OCC_BASE_URL_META_TAG_PLACEHOLDER
        ? { backend: { occ: { baseUrl } } }
        : {};
}
function mediaServerConfigFromMetaTagFactory(meta) {
    const baseUrl = getMetaTagContent(MEDIA_BASE_URL_META_TAG_NAME, meta);
    return baseUrl && baseUrl !== MEDIA_BASE_URL_META_TAG_PLACEHOLDER
        ? { backend: { media: { baseUrl } } }
        : {};
}
function getMetaTagContent(name, meta) {
    const metaTag = meta.getTag(`name="${name}"`);
    return metaTag && metaTag.content;
}
function provideConfigFromMetaTags() {
    return [
        provideConfigFactory(occServerConfigFromMetaTagFactory, [Meta]),
        provideConfigFactory(mediaServerConfigFromMetaTagFactory, [Meta]),
    ];
}

const defaultOccConfig = {
    backend: {
        occ: {
            prefix: '/rest/v2/',
        },
        media: {},
    },
};

function occConfigValidator(config) {
    if (config.backend === undefined ||
        config.backend.occ === undefined ||
        config.backend.occ.baseUrl === undefined) {
        return 'Please configure backend.occ.baseUrl before using storefront library!';
    }
}

/**
 * Http interceptor to add cookies to all cross-site requests.
 */
let WithCredentialsInterceptor = class WithCredentialsInterceptor {
    constructor(config) {
        this.config = config;
    }
    /**
     * Intercepts each request and adds the `withCredential` flag to it
     * if it hasn't been added already.
     */
    intercept(request, next) {
        if (this.requiresWithCredentials(request)) {
            request = request.clone({
                withCredentials: true,
            });
        }
        return next.handle(request);
    }
    /**
     * indicates whether the request should use the WithCredentials flag.
     */
    requiresWithCredentials(request) {
        var _a, _b;
        return (((_a = this.occConfig) === null || _a === void 0 ? void 0 : _a.useWithCredentials) &&
            request.url.indexOf((_b = this.occConfig) === null || _b === void 0 ? void 0 : _b.prefix) > -1);
    }
    get occConfig() {
        return this.config.backend.occ;
    }
};
WithCredentialsInterceptor.ctorParameters = () => [
    { type: OccConfig }
];
WithCredentialsInterceptor.ɵprov = ɵɵdefineInjectable({ factory: function WithCredentialsInterceptor_Factory() { return new WithCredentialsInterceptor(ɵɵinject(OccConfig)); }, token: WithCredentialsInterceptor, providedIn: "root" });
WithCredentialsInterceptor = __decorate([
    Injectable({ providedIn: 'root' })
], WithCredentialsInterceptor);

var Occ;
(function (Occ) {
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
    let CONSENT_STATUS;
    (function (CONSENT_STATUS) {
        CONSENT_STATUS["ANONYMOUS_CONSENT_GIVEN"] = "GIVEN";
        CONSENT_STATUS["ANONYMOUS_CONSENT_WITHDRAWN"] = "WITHDRAWN";
    })(CONSENT_STATUS = Occ.CONSENT_STATUS || (Occ.CONSENT_STATUS = {}));
    let NotificationType;
    (function (NotificationType) {
        NotificationType["BACK_IN_STOCK"] = "BACK_IN_STOCK";
    })(NotificationType = Occ.NotificationType || (Occ.NotificationType = {}));
})(Occ || (Occ = {}));

const ConfigValidatorToken = new InjectionToken('ConfigurationValidator');
/**
 * Use to probide config validation at app bootstrap (when all config chunks are merged)
 *
 * @param configValidator
 */
function provideConfigValidator(configValidator) {
    return {
        provide: ConfigValidatorToken,
        useValue: configValidator,
        multi: true,
    };
}
function validateConfig(config, configValidators) {
    for (const validate of configValidators) {
        const warning = validate(config);
        if (warning) {
            console.warn(warning);
        }
    }
}

var OccModule_1;
let OccModule = OccModule_1 = class OccModule {
    static forRoot() {
        return {
            ngModule: OccModule_1,
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useExisting: WithCredentialsInterceptor,
                    multi: true,
                },
                { provide: OccConfig, useExisting: Config },
                provideDefaultConfig(defaultOccConfig),
                provideConfigValidator(occConfigValidator),
            ],
        };
    }
};
OccModule = OccModule_1 = __decorate([
    NgModule({
        imports: [
            AsmOccModule,
            CmsOccModule,
            CartOccModule,
            CheckoutOccModule,
            ProductOccModule,
            SiteContextOccModule,
            StoreFinderOccModule,
            UserOccModule,
            OccConfigLoaderModule.forRoot(),
        ],
    })
], OccModule);

let LoadingScopesService = class LoadingScopesService {
    constructor(config) {
        this.config = config;
    }
    /**
     * Aims to expand scopes based on loading scopes config.
     *
     * I.e. if 'details' scope includes 'list' scope by configuration, it'll return ['details', 'list']
     *
     * If scope data overlaps with each other, the data should be merged in the order of scopes provided,
     * i.e. the last scope is merged last, overwriting parts of the data already provided by preceding scope.
     * It should apply also to implicit scopes (that are included by configuration).
     *
     * @param model
     * @param scopes
     */
    expand(model, scopes) {
        const scopesConfig = this.config &&
            this.config.backend &&
            this.config.backend.loadingScopes &&
            this.config.backend.loadingScopes[model];
        if (scopesConfig) {
            const expandedScopes = [...scopes];
            let i = expandedScopes.length;
            while (i > 0) {
                i--;
                const includedScopes = scopesConfig[expandedScopes[i]] &&
                    scopesConfig[expandedScopes[i]].include;
                if (includedScopes) {
                    for (const includedScope of includedScopes) {
                        if (!expandedScopes.includes(includedScope)) {
                            expandedScopes.splice(i, 0, includedScope);
                            i++;
                        }
                    }
                }
            }
            return expandedScopes;
        }
        return scopes;
    }
    /**
     * Return maxAge for product scope in milliseconds
     *
     * @param model
     * @param scope
     */
    getMaxAge(model, scope) {
        const scopesConfig = this.config &&
            this.config.backend &&
            this.config.backend.loadingScopes &&
            this.config.backend.loadingScopes[model];
        return (scopesConfig[scope] && scopesConfig[scope].maxAge) * 1000 || 0;
    }
};
LoadingScopesService.ctorParameters = () => [
    { type: OccConfig }
];
LoadingScopesService.ɵprov = ɵɵdefineInjectable({ factory: function LoadingScopesService_Factory() { return new LoadingScopesService(ɵɵinject(OccConfig)); }, token: LoadingScopesService, providedIn: "root" });
LoadingScopesService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], LoadingScopesService);

const ANONYMOUS_CONSENTS_HEADER = 'X-Anonymous-Consents';
let AnonymousConsentsInterceptor = class AnonymousConsentsInterceptor {
    constructor(anonymousConsentsService, authService, occEndpoints, config) {
        this.anonymousConsentsService = anonymousConsentsService;
        this.authService = authService;
        this.occEndpoints = occEndpoints;
        this.config = config;
    }
    intercept(request, next) {
        return this.anonymousConsentsService.getConsents().pipe(take(1), withLatestFrom(this.authService.isUserLoggedIn()), switchMap(([consents, isUserLoggedIn]) => {
            if (!this.isOccUrl(request.url)) {
                return next.handle(request);
            }
            const clonedRequest = this.handleRequest(consents, request);
            return next.handle(clonedRequest).pipe(tap((event) => {
                if (event instanceof HttpResponse) {
                    this.handleResponse(isUserLoggedIn, event.headers.get(ANONYMOUS_CONSENTS_HEADER), consents);
                }
            }));
        }));
    }
    handleResponse(isUserLoggedIn, newRawConsents, previousConsents) {
        if (!isUserLoggedIn && newRawConsents) {
            let newConsents = [];
            newConsents = this.anonymousConsentsService.decodeAndDeserialize(newRawConsents);
            newConsents = this.giveRequiredConsents(newConsents);
            if (this.anonymousConsentsService.consentsUpdated(newConsents, previousConsents)) {
                this.anonymousConsentsService.setConsents(newConsents);
            }
        }
    }
    handleRequest(consents, request) {
        if (!consents) {
            return request;
        }
        const rawConsents = this.anonymousConsentsService.serializeAndEncode(consents);
        return request.clone({
            setHeaders: {
                [ANONYMOUS_CONSENTS_HEADER]: rawConsents,
            },
        });
    }
    isOccUrl(url) {
        return url.includes(this.occEndpoints.getBaseEndpoint());
    }
    giveRequiredConsents(consents) {
        const givenConsents = [...consents];
        if (Boolean(this.config.anonymousConsents) &&
            Boolean(this.config.anonymousConsents.requiredConsents)) {
            for (const consent of givenConsents) {
                if (this.config.anonymousConsents.requiredConsents.includes(consent.templateCode)) {
                    consent.consentState = ANONYMOUS_CONSENT_STATUS.GIVEN;
                }
            }
        }
        return givenConsents;
    }
};
AnonymousConsentsInterceptor.ctorParameters = () => [
    { type: AnonymousConsentsService },
    { type: AuthService },
    { type: OccEndpointsService },
    { type: AnonymousConsentsConfig }
];
AnonymousConsentsInterceptor.ɵprov = ɵɵdefineInjectable({ factory: function AnonymousConsentsInterceptor_Factory() { return new AnonymousConsentsInterceptor(ɵɵinject(AnonymousConsentsService), ɵɵinject(AuthService), ɵɵinject(OccEndpointsService), ɵɵinject(AnonymousConsentsConfig)); }, token: AnonymousConsentsInterceptor, providedIn: "root" });
AnonymousConsentsInterceptor = __decorate([
    Injectable({ providedIn: 'root' })
], AnonymousConsentsInterceptor);

const interceptors$1 = [
    {
        provide: HTTP_INTERCEPTORS,
        useExisting: AnonymousConsentsInterceptor,
        multi: true,
    },
];

/**
 * A service to register and observe event sources. Events are driven by event types, which are class signatures
 * for the given event.
 *
 * It is possible to register multiple sources to a single event, even without
 * knowing as multiple decoupled features can attach sources to the same
 * event type.
 */
let EventService = class EventService {
    constructor() {
        /**
         * The various events meta are collected in a map, stored by the event type class
         */
        this.eventsMeta = new Map();
    }
    /**
     * Register an event source for the given event type.
     *
     * CAUTION: To avoid memory leaks, the returned teardown function should be called
     *  when the event source is no longer maintained by its creator
     * (i.e. in `ngOnDestroy` if the event source was registered in the component).
     *
     * @param eventType the event type
     * @param source$ an observable that represents the source
     *
     * @returns a teardown function which unregisters the given event source
     */
    register(eventType, source$) {
        const event = this.getEventMeta(eventType);
        const sources = event.sources$.value;
        if (sources.includes(source$)) {
            if (isDevMode()) {
                console.warn(`EventService: the event source`, source$, `has been already registered for the type`, eventType);
            }
        }
        else {
            event.sources$.next([...sources, source$]);
        }
        return () => this.unregister(eventType, source$);
    }
    /**
     * Unregisters an event source for the given event type
     *
     * @param eventType the event type
     * @param source$ an observable that represents the source
     */
    unregister(eventType, source$) {
        const event = this.getEventMeta(eventType);
        const newSources = event.sources$.value.filter((s$) => s$ !== source$);
        event.sources$.next(newSources);
    }
    /**
     * Returns a stream of events for the given event type
     * @param eventTypes event type
     */
    get(eventType) {
        return this.getEventMeta(eventType).output$;
    }
    /**
     * Dispatches a single event.
     *
     * However, it's recommended to use method `register` instead, whenever the event can come from some stream.
     *  It allows for lazy computations in the event source stream -
     *  if no one subscribes to the event, the logic of the event source stream won't be evaluated.
     */
    dispatch(event) {
        const eventType = event.constructor;
        const inputSubject$ = this.getInputSubject(eventType);
        inputSubject$.next(event);
    }
    /**
     * Returns the input subject used to dispatch a single event.
     * The subject is created on demand, when it's needed for the first time.
     * @param eventType type of event
     */
    getInputSubject(eventType) {
        const eventMeta = this.getEventMeta(eventType);
        if (!eventMeta.inputSubject$) {
            eventMeta.inputSubject$ = new Subject();
            this.register(eventType, eventMeta.inputSubject$);
        }
        return eventMeta.inputSubject$;
    }
    /**
     * Returns the event meta object for the given event type
     */
    getEventMeta(eventType) {
        if (isDevMode()) {
            this.validateEventType(eventType);
        }
        if (!this.eventsMeta.get(eventType)) {
            this.createEventMeta(eventType);
        }
        return this.eventsMeta.get(eventType);
    }
    /**
     * Creates the event meta object for the given event type
     */
    createEventMeta(eventType) {
        const sources$ = new BehaviorSubject([]);
        let output$ = sources$.pipe(switchMap((sources) => merge(...sources)), share() // share the result observable to avoid merging sources for each subscriber
        );
        if (isDevMode()) {
            output$ = this.getValidatedEventStream(output$, eventType);
        }
        this.eventsMeta.set(eventType, {
            inputSubject$: null,
            sources$,
            output$,
        });
    }
    /**
     * Checks if the event type is a valid type (is a class with constructor).
     *
     * Should be used only in dev mode.
     */
    validateEventType(eventType) {
        if (!(eventType === null || eventType === void 0 ? void 0 : eventType.constructor)) {
            throw new Error(`EventService:  ${eventType} is not a valid event type. Please provide a class reference.`);
        }
    }
    /**
     * Returns the given event source with runtime validation whether the emitted values are instances of given event type.
     *
     * Should be used only in dev mode.
     */
    getValidatedEventStream(source$, eventType) {
        return source$.pipe(tap((event) => {
            if (!(event instanceof eventType)) {
                console.warn(`EventService: The stream`, source$, `emitted the event`, event, `that is not an instance of the declared type`, eventType.name);
            }
        }));
    }
};
EventService.ɵprov = ɵɵdefineInjectable({ factory: function EventService_Factory() { return new EventService(); }, token: EventService, providedIn: "root" });
EventService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], EventService);

/**
 * Creates an instance of the given class and fills its properties with the given data.
 *
 * @param type reference to the class
 * @param data object with properties to be copied to the class
 */
function createFrom(type, data) {
    return Object.assign(new type(), data);
}

/**
 * Registers streams of ngrx actions as events source streams
 */
let StateEventService = class StateEventService {
    constructor(actionsSubject, eventService) {
        this.actionsSubject = actionsSubject;
        this.eventService = eventService;
    }
    /**
     * Registers an event source stream of specific events
     * mapped from a given action type.
     *
     * @param mapping mapping from action to event
     *
     * @returns a teardown function that unregisters the event source
     */
    register(mapping) {
        return this.eventService.register(mapping.event, this.getFromAction(mapping));
    }
    /**
     * Returns a stream of specific events mapped from a specific action.
     * @param mapping mapping from action to event
     */
    getFromAction(mapping) {
        return this.actionsSubject
            .pipe(ofType(...[].concat(mapping.action)))
            .pipe(map((action) => this.createEvent(action, mapping.event, mapping.factory)));
    }
    /**
     * Creates an event instance for given class out from the action object.
     * Unless the `factory` parameter is given, the action's `payload` is used
     * as the argument for the event's constructor.
     *
     * @param action instance of an Action
     * @param mapping mapping from action to event
     * @param factory optional function getting an action instance and returning an event instance
     *
     * @returns instance of an Event
     */
    createEvent(action, eventType, factory) {
        var _a;
        return factory
            ? factory(action)
            : createFrom(eventType, (_a = action.payload) !== null && _a !== void 0 ? _a : {});
    }
};
StateEventService.ctorParameters = () => [
    { type: ActionsSubject },
    { type: EventService }
];
StateEventService.ɵprov = ɵɵdefineInjectable({ factory: function StateEventService_Factory() { return new StateEventService(ɵɵinject(ActionsSubject), ɵɵinject(EventService)); }, token: StateEventService, providedIn: "root" });
StateEventService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], StateEventService);

let StatePersistenceService = class StatePersistenceService {
    constructor(winRef) {
        this.winRef = winRef;
    }
    /**
     * Helper to synchronize state to more persistent storage (localStorage, sessionStorage).
     * It is context aware, so you can keep different state for te same feature based on specified context.
     *
     * Eg. cart is valid only under the same base site. So you want to synchronize cart only with the same base site.
     * Usage for that case: `syncWithStorage({ key: 'cart', state$: activeCartSelector$, context$: this.siteContextParamsService.getValues([BASE_SITE_CONTEXT_ID]), onRead: (state) => setCorrectStateInStore(state) })`.
     * Active cart for the `electronics` base site will be stored under `spartacus⚿electronics⚿cart` and for apparel under `spartacus⚿apparel⚿cart`.
     *
     * On each context change onRead function will be executed with state from storage provided as a parameter.
     *
     * Omitting context$ will trigger onRead only once at initialization.
     *
     * @param key Key to use in storage for the synchronized state. Should be unique for each feature.
     * @param state$ State to be saved and later restored.
     * @param context$ Context for state
     * @param storageType Storage type to be used to persist state
     * @param onRead Function to be executed on each storage read after context change
     *
     * @returns Subscriptions for reading/writing in storage on context/state change
     */
    syncWithStorage({ key, state$, context$ = of(''), storageType = StorageSyncType.LOCAL_STORAGE, onRead = () => { }, }) {
        const storage = getStorage(storageType, this.winRef);
        const subscriptions = new Subscription();
        // Do not change order of subscription! Read should happen before write on context change.
        subscriptions.add(context$
            .pipe(map((context) => {
            return readFromStorage(storage, this.generateKeyWithContext(context, key));
        }), tap((state) => onRead(state)))
            .subscribe());
        subscriptions.add(state$.pipe(withLatestFrom(context$)).subscribe(([state, context]) => {
            persistToStorage(this.generateKeyWithContext(context, key), state, storage);
        }));
        return subscriptions;
    }
    generateKeyWithContext(context, key) {
        return `spartacus⚿${[].concat(context).join('⚿')}⚿${key}`;
    }
};
StatePersistenceService.ctorParameters = () => [
    { type: WindowRef }
];
StatePersistenceService.ɵprov = ɵɵdefineInjectable({ factory: function StatePersistenceService_Factory() { return new StatePersistenceService(ɵɵinject(WindowRef)); }, token: StatePersistenceService, providedIn: "root" });
StatePersistenceService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], StatePersistenceService);

const PROCESS_FEATURE = 'process';

function getProcessState() {
    return createFeatureSelector(PROCESS_FEATURE);
}

function getProcessStateFactory(processId) {
    return createSelector(getProcessState(), (entityState) => entityStateSelector(entityState, processId));
}
function getProcessLoadingFactory(processId) {
    return createSelector(getProcessStateFactory(processId), (loaderState) => loaderLoadingSelector(loaderState));
}
function getProcessSuccessFactory(processId) {
    return createSelector(getProcessStateFactory(processId), (loaderState) => loaderSuccessSelector(loaderState));
}
function getProcessErrorFactory(processId) {
    return createSelector(getProcessStateFactory(processId), (loaderState) => loaderErrorSelector(loaderState));
}

var process_selectors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getProcessStateFactory: getProcessStateFactory,
    getProcessLoadingFactory: getProcessLoadingFactory,
    getProcessSuccessFactory: getProcessSuccessFactory,
    getProcessErrorFactory: getProcessErrorFactory
});

const LOAD_BILLING_COUNTRIES = '[User] Load Billing Countries';
const LOAD_BILLING_COUNTRIES_FAIL = '[User] Load Billing Countries Fail';
const LOAD_BILLING_COUNTRIES_SUCCESS = '[User] Load Billing Countries Success';
class LoadBillingCountries {
    constructor() {
        this.type = LOAD_BILLING_COUNTRIES;
    }
}
class LoadBillingCountriesFail {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_BILLING_COUNTRIES_FAIL;
    }
}
class LoadBillingCountriesSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_BILLING_COUNTRIES_SUCCESS;
    }
}

const LOAD_CONSIGNMENT_TRACKING = '[User] Load Consignment Tracking';
const LOAD_CONSIGNMENT_TRACKING_FAIL = '[User] Load Consignment Tracking Fail';
const LOAD_CONSIGNMENT_TRACKING_SUCCESS = '[User] Load Consignment Tracking Success';
const CLEAR_CONSIGNMENT_TRACKING = '[User] Clear Consignment Tracking';
class LoadConsignmentTracking {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_CONSIGNMENT_TRACKING;
    }
}
class LoadConsignmentTrackingFail {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_CONSIGNMENT_TRACKING_FAIL;
    }
}
class LoadConsignmentTrackingSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_CONSIGNMENT_TRACKING_SUCCESS;
    }
}
class ClearConsignmentTracking {
    constructor() {
        this.type = CLEAR_CONSIGNMENT_TRACKING;
    }
}

const LOAD_DELIVERY_COUNTRIES = '[User] Load Delivery Countries';
const LOAD_DELIVERY_COUNTRIES_FAIL = '[User] Load Delivery Countries Fail';
const LOAD_DELIVERY_COUNTRIES_SUCCESS = '[User] Load Delivery Countries Success';
class LoadDeliveryCountries {
    constructor() {
        this.type = LOAD_DELIVERY_COUNTRIES;
    }
}
class LoadDeliveryCountriesFail {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_DELIVERY_COUNTRIES_FAIL;
    }
}
class LoadDeliveryCountriesSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_DELIVERY_COUNTRIES_SUCCESS;
    }
}

const FORGOT_PASSWORD_EMAIL_REQUEST = '[User] Forgot Password Email Request';
const FORGOT_PASSWORD_EMAIL_REQUEST_SUCCESS = '[User] Forgot Password Email Request Success';
const FORGOT_PASSWORD_EMAIL_REQUEST_FAIL = '[User] Forgot Password Email Request Fail';
class ForgotPasswordEmailRequest {
    constructor(payload) {
        this.payload = payload;
        this.type = FORGOT_PASSWORD_EMAIL_REQUEST;
    }
}
class ForgotPasswordEmailRequestFail {
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

const USER_FEATURE = 'user';
const UPDATE_EMAIL_PROCESS_ID = 'updateEmail';
const UPDATE_PASSWORD_PROCESS_ID = 'updatePassword';
const UPDATE_USER_DETAILS_PROCESS_ID = 'updateUserDetails';
const REGISTER_USER_PROCESS_ID = 'registerUser';
const REMOVE_USER_PROCESS_ID = 'removeUser';
const GIVE_CONSENT_PROCESS_ID = 'giveConsent';
const WITHDRAW_CONSENT_PROCESS_ID = 'withdrawConsent';
const UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID = 'updateNotificationPreferences';
const ADD_PRODUCT_INTEREST_PROCESS_ID = 'addProductInterests';
const REMOVE_PRODUCT_INTERESTS_PROCESS_ID = 'removeProductInterests';
const CANCEL_ORDER_PROCESS_ID = 'cancelOrder';
const CANCEL_RETURN_PROCESS_ID = 'cancelReturn';
const USER_CONSENTS = '[User] User Consents';
const USER_PAYMENT_METHODS = '[User] User Payment Methods';
const USER_ORDERS = '[User] User Orders';
const USER_ADDRESSES = '[User] User Addresses';
const USER_RETURN_REQUESTS = '[User] Order Return Requests';
const USER_RETURN_REQUEST_DETAILS = '[User] Return Request Details';
const USER_ORDER_DETAILS = '[User] User Order Details';
const REGIONS = '[User] Regions';
const CUSTOMER_COUPONS = '[User] Customer Coupons';
const SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID = 'subscribeCustomerCoupon';
const UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID = 'unsubscribeCustomerCoupon';
const CLAIM_CUSTOMER_COUPON_PROCESS_ID = 'claimCustomerCoupon';
const NOTIFICATION_PREFERENCES = '[User] Notification Preferences';
const PRODUCT_INTERESTS = '[User] Product Interests';

const LOAD_ORDER_DETAILS = '[User] Load Order Details';
const LOAD_ORDER_DETAILS_FAIL = '[User] Load Order Details Fail';
const LOAD_ORDER_DETAILS_SUCCESS = '[User] Load Order Details Success';
const CLEAR_ORDER_DETAILS = '[User] Clear Order Details';
const CANCEL_ORDER = '[User] Cancel Order';
const CANCEL_ORDER_FAIL = '[User] Cancel Order Fail';
const CANCEL_ORDER_SUCCESS = '[User] Cancel Order Success';
const RESET_CANCEL_ORDER_PROCESS = '[User] Reset Cancel Order Process';
class LoadOrderDetails extends LoaderLoadAction {
    constructor(payload) {
        super(USER_ORDER_DETAILS);
        this.payload = payload;
        this.type = LOAD_ORDER_DETAILS;
    }
}
class LoadOrderDetailsFail extends LoaderFailAction {
    constructor(payload) {
        super(USER_ORDER_DETAILS, payload);
        this.payload = payload;
        this.type = LOAD_ORDER_DETAILS_FAIL;
    }
}
class LoadOrderDetailsSuccess extends LoaderSuccessAction {
    constructor(payload) {
        super(USER_ORDER_DETAILS);
        this.payload = payload;
        this.type = LOAD_ORDER_DETAILS_SUCCESS;
    }
}
class ClearOrderDetails extends LoaderResetAction {
    constructor() {
        super(USER_ORDER_DETAILS);
        this.type = CLEAR_ORDER_DETAILS;
    }
}
class CancelOrder extends EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, CANCEL_ORDER_PROCESS_ID);
        this.payload = payload;
        this.type = CANCEL_ORDER;
    }
}
class CancelOrderFail extends EntityFailAction {
    constructor(payload) {
        super(PROCESS_FEATURE, CANCEL_ORDER_PROCESS_ID, payload);
        this.payload = payload;
        this.type = CANCEL_ORDER_FAIL;
    }
}
class CancelOrderSuccess extends EntitySuccessAction {
    constructor() {
        super(PROCESS_FEATURE, CANCEL_ORDER_PROCESS_ID);
        this.type = CANCEL_ORDER_SUCCESS;
    }
}
class ResetCancelOrderProcess extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, CANCEL_ORDER_PROCESS_ID);
        this.type = RESET_CANCEL_ORDER_PROCESS;
    }
}

const LOAD_USER_PAYMENT_METHODS = '[User] Load User Payment Methods';
const LOAD_USER_PAYMENT_METHODS_FAIL = '[User] Load User Payment Methods Fail';
const LOAD_USER_PAYMENT_METHODS_SUCCESS = '[User] Load User Payment Methods Success';
const SET_DEFAULT_USER_PAYMENT_METHOD = '[User] Set Default User Payment Method';
const SET_DEFAULT_USER_PAYMENT_METHOD_FAIL = '[User] Set Default User Payment Method Fail';
const SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS = '[User] Set Default User Payment Method Success';
const DELETE_USER_PAYMENT_METHOD = '[User] Delete User Payment Method';
const DELETE_USER_PAYMENT_METHOD_FAIL = '[User] Delete User Payment Method Fail';
const DELETE_USER_PAYMENT_METHOD_SUCCESS = '[User] Delete User  Payment Method Success';
class LoadUserPaymentMethods extends LoaderLoadAction {
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = LOAD_USER_PAYMENT_METHODS;
    }
}
class LoadUserPaymentMethodsFail extends LoaderFailAction {
    constructor(payload) {
        super(USER_PAYMENT_METHODS, payload);
        this.payload = payload;
        this.type = LOAD_USER_PAYMENT_METHODS_FAIL;
    }
}
class LoadUserPaymentMethodsSuccess extends LoaderSuccessAction {
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = LOAD_USER_PAYMENT_METHODS_SUCCESS;
    }
}
class SetDefaultUserPaymentMethod extends LoaderLoadAction {
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = SET_DEFAULT_USER_PAYMENT_METHOD;
    }
}
class SetDefaultUserPaymentMethodFail extends LoaderFailAction {
    constructor(payload) {
        super(USER_PAYMENT_METHODS, payload);
        this.payload = payload;
        this.type = SET_DEFAULT_USER_PAYMENT_METHOD_FAIL;
    }
}
class SetDefaultUserPaymentMethodSuccess extends LoaderSuccessAction {
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS;
    }
}
class DeleteUserPaymentMethod extends LoaderLoadAction {
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = DELETE_USER_PAYMENT_METHOD;
    }
}
class DeleteUserPaymentMethodFail extends LoaderFailAction {
    constructor(payload) {
        super(USER_PAYMENT_METHODS, payload);
        this.payload = payload;
        this.type = DELETE_USER_PAYMENT_METHOD_FAIL;
    }
}
class DeleteUserPaymentMethodSuccess extends LoaderSuccessAction {
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = DELETE_USER_PAYMENT_METHOD_SUCCESS;
    }
}

const LOAD_REGIONS = '[User] Load Regions';
const LOAD_REGIONS_SUCCESS = '[User] Load Regions Success';
const LOAD_REGIONS_FAIL = '[User] Load Regions Fail';
const CLEAR_REGIONS = '[User] Clear Regions';
class LoadRegions extends LoaderLoadAction {
    constructor(payload) {
        super(REGIONS);
        this.payload = payload;
        this.type = LOAD_REGIONS;
    }
}
class LoadRegionsFail extends LoaderFailAction {
    constructor(payload) {
        super(REGIONS, payload);
        this.payload = payload;
        this.type = LOAD_REGIONS_FAIL;
    }
}
class LoadRegionsSuccess extends LoaderSuccessAction {
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

const RESET_PASSWORD = '[User] Reset Password';
const RESET_PASSWORD_SUCCESS = '[User] Reset Password Success';
const RESET_PASSWORD_FAIL = '[User] Reset Password Fail';
class ResetPassword {
    constructor(payload) {
        this.payload = payload;
        this.type = RESET_PASSWORD;
    }
}
class ResetPasswordFail {
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

const LOAD_TITLES = '[User] Load Tiltes';
const LOAD_TITLES_FAIL = '[User] Load Titles Fail';
const LOAD_TITLES_SUCCESS = '[User] Load Titles Success';
class LoadTitles {
    constructor() {
        this.type = LOAD_TITLES;
    }
}
class LoadTitlesFail {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_TITLES_FAIL;
    }
}
class LoadTitlesSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_TITLES_SUCCESS;
    }
}

const UPDATE_EMAIL = '[User] Update Email';
const UPDATE_EMAIL_ERROR = '[User] Update Email Error';
const UPDATE_EMAIL_SUCCESS = '[User] Update Email Success';
const RESET_EMAIL = '[User] Reset Email';
class UpdateEmailAction extends EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, UPDATE_EMAIL_PROCESS_ID);
        this.payload = payload;
        this.type = UPDATE_EMAIL;
    }
}
class UpdateEmailSuccessAction extends EntitySuccessAction {
    constructor(newUid) {
        super(PROCESS_FEATURE, UPDATE_EMAIL_PROCESS_ID);
        this.newUid = newUid;
        this.type = UPDATE_EMAIL_SUCCESS;
    }
}
class UpdateEmailErrorAction extends EntityFailAction {
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

const UPDATE_PASSWORD = '[User] Update Password';
const UPDATE_PASSWORD_FAIL = '[User] Update Password Fail';
const UPDATE_PASSWORD_SUCCESS = '[User] Update Password Success';
const UPDATE_PASSWORD_RESET = '[User] Reset Update Password Process State';
class UpdatePassword extends EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, UPDATE_PASSWORD_PROCESS_ID);
        this.payload = payload;
        this.type = UPDATE_PASSWORD;
    }
}
class UpdatePasswordFail extends EntityFailAction {
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

const LOAD_USER_ADDRESSES = '[User] Load User Addresses';
const LOAD_USER_ADDRESSES_FAIL = '[User] Load User Addresses Fail';
const LOAD_USER_ADDRESSES_SUCCESS = '[User] Load User Addresses Success';
const ADD_USER_ADDRESS = '[User] Add User Address';
const ADD_USER_ADDRESS_FAIL = '[User] Add User Address Fail';
const ADD_USER_ADDRESS_SUCCESS = '[User] Add User Address Success';
const UPDATE_USER_ADDRESS = '[User] Update User Address';
const UPDATE_USER_ADDRESS_FAIL = '[User] Update User Address Fail';
const UPDATE_USER_ADDRESS_SUCCESS = '[User] Update User Address Success';
const DELETE_USER_ADDRESS = '[User] Delete User Address';
const DELETE_USER_ADDRESS_FAIL = '[User] Delete User Address Fail';
const DELETE_USER_ADDRESS_SUCCESS = '[User] Delete User Address Success';
class LoadUserAddresses extends LoaderLoadAction {
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = LOAD_USER_ADDRESSES;
    }
}
class LoadUserAddressesFail extends LoaderFailAction {
    constructor(payload) {
        super(USER_ADDRESSES, payload);
        this.payload = payload;
        this.type = LOAD_USER_ADDRESSES_FAIL;
    }
}
class LoadUserAddressesSuccess extends LoaderSuccessAction {
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = LOAD_USER_ADDRESSES_SUCCESS;
    }
}
// Adding address actions
class AddUserAddress extends LoaderLoadAction {
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = ADD_USER_ADDRESS;
    }
}
class AddUserAddressFail extends LoaderFailAction {
    constructor(payload) {
        super(USER_ADDRESSES, payload);
        this.payload = payload;
        this.type = ADD_USER_ADDRESS_FAIL;
    }
}
class AddUserAddressSuccess extends LoaderSuccessAction {
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = ADD_USER_ADDRESS_SUCCESS;
    }
}
// Updating address actions
class UpdateUserAddress extends LoaderLoadAction {
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = UPDATE_USER_ADDRESS;
    }
}
class UpdateUserAddressFail extends LoaderFailAction {
    constructor(payload) {
        super(USER_ADDRESSES, payload);
        this.payload = payload;
        this.type = UPDATE_USER_ADDRESS_FAIL;
    }
}
class UpdateUserAddressSuccess extends LoaderSuccessAction {
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = UPDATE_USER_ADDRESS_SUCCESS;
    }
}
// Deleting address actions
class DeleteUserAddress extends LoaderLoadAction {
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = DELETE_USER_ADDRESS;
    }
}
class DeleteUserAddressFail extends LoaderFailAction {
    constructor(payload) {
        super(USER_ADDRESSES, payload);
        this.payload = payload;
        this.type = DELETE_USER_ADDRESS_FAIL;
    }
}
class DeleteUserAddressSuccess extends LoaderSuccessAction {
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = DELETE_USER_ADDRESS_SUCCESS;
    }
}

const LOAD_USER_CONSENTS = '[User] Load User Consents';
const LOAD_USER_CONSENTS_SUCCESS = '[User] Load User Consents Success';
const LOAD_USER_CONSENTS_FAIL = '[User] Load User Consents Fail';
const RESET_LOAD_USER_CONSENTS = '[User] Reset Load User Consents';
const GIVE_USER_CONSENT = '[User] Give User Consent';
const GIVE_USER_CONSENT_FAIL = '[User] Give User Consent Fail';
const GIVE_USER_CONSENT_SUCCESS = '[User] Give User Consent Success';
const RESET_GIVE_USER_CONSENT_PROCESS = '[User] Reset Give User Consent Process';
const TRANSFER_ANONYMOUS_CONSENT = '[User] Transfer Anonymous Consent';
const WITHDRAW_USER_CONSENT = '[User] Withdraw User Consent';
const WITHDRAW_USER_CONSENT_FAIL = '[User] Withdraw User Consent Fail';
const WITHDRAW_USER_CONSENT_SUCCESS = '[User] Withdraw User Consent Success';
const RESET_WITHDRAW_USER_CONSENT_PROCESS = '[User] Reset Withdraw User Consent Process';
class LoadUserConsents extends LoaderLoadAction {
    constructor(payload) {
        super(USER_CONSENTS);
        this.payload = payload;
        this.type = LOAD_USER_CONSENTS;
    }
}
class LoadUserConsentsFail extends LoaderFailAction {
    constructor(payload) {
        super(USER_CONSENTS, payload);
        this.payload = payload;
        this.type = LOAD_USER_CONSENTS_FAIL;
    }
}
class LoadUserConsentsSuccess extends LoaderSuccessAction {
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
    constructor(payload) {
        super(PROCESS_FEATURE, GIVE_CONSENT_PROCESS_ID);
        this.payload = payload;
        this.type = GIVE_USER_CONSENT;
    }
}
class GiveUserConsentFail extends EntityFailAction {
    constructor(payload) {
        super(PROCESS_FEATURE, GIVE_CONSENT_PROCESS_ID, payload);
        this.type = GIVE_USER_CONSENT_FAIL;
    }
}
class GiveUserConsentSuccess extends EntitySuccessAction {
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
class TransferAnonymousConsent {
    constructor(payload) {
        this.payload = payload;
        this.type = TRANSFER_ANONYMOUS_CONSENT;
    }
}
class WithdrawUserConsent extends EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, WITHDRAW_CONSENT_PROCESS_ID);
        this.payload = payload;
        this.type = WITHDRAW_USER_CONSENT;
    }
}
class WithdrawUserConsentFail extends EntityFailAction {
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

const LOAD_USER_DETAILS = '[User] Load User Details';
const LOAD_USER_DETAILS_FAIL = '[User] Load User Details Fail';
const LOAD_USER_DETAILS_SUCCESS = '[User] Load User Details Success';
const UPDATE_USER_DETAILS = '[User] Update User Details';
const UPDATE_USER_DETAILS_FAIL = '[User] Update User Details Fail';
const UPDATE_USER_DETAILS_SUCCESS = '[User] Update User Details Success';
const RESET_USER_DETAILS = '[User] Reset User Details';
class LoadUserDetails {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_USER_DETAILS;
    }
}
class LoadUserDetailsFail {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_USER_DETAILS_FAIL;
    }
}
class LoadUserDetailsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_USER_DETAILS_SUCCESS;
    }
}
class UpdateUserDetails extends EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, UPDATE_USER_DETAILS_PROCESS_ID);
        this.payload = payload;
        this.type = UPDATE_USER_DETAILS;
    }
}
class UpdateUserDetailsFail extends EntityFailAction {
    constructor(payload) {
        super(PROCESS_FEATURE, UPDATE_USER_DETAILS_PROCESS_ID, payload);
        this.payload = payload;
        this.type = UPDATE_USER_DETAILS_FAIL;
    }
}
class UpdateUserDetailsSuccess extends EntitySuccessAction {
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

const CLEAR_USER_MISCS_DATA = '[User] Clear User Misc Data';
class ClearUserMiscsData {
    constructor() {
        this.type = CLEAR_USER_MISCS_DATA;
    }
}

const LOAD_USER_ORDERS = '[User] Load User Orders';
const LOAD_USER_ORDERS_FAIL = '[User] Load User Orders Fail';
const LOAD_USER_ORDERS_SUCCESS = '[User] Load User Orders Success';
const CLEAR_USER_ORDERS = '[User] Clear User Orders';
class LoadUserOrders extends LoaderLoadAction {
    constructor(payload) {
        super(USER_ORDERS);
        this.payload = payload;
        this.type = LOAD_USER_ORDERS;
    }
}
class LoadUserOrdersFail extends LoaderFailAction {
    constructor(payload) {
        super(USER_ORDERS, payload);
        this.payload = payload;
        this.type = LOAD_USER_ORDERS_FAIL;
    }
}
class LoadUserOrdersSuccess extends LoaderSuccessAction {
    constructor(payload) {
        super(USER_ORDERS);
        this.payload = payload;
        this.type = LOAD_USER_ORDERS_SUCCESS;
    }
}
class ClearUserOrders extends LoaderResetAction {
    constructor() {
        super(USER_ORDERS);
        this.type = CLEAR_USER_ORDERS;
    }
}

const REGISTER_USER = '[User] Register User';
const REGISTER_USER_FAIL = '[User] Register User Fail';
const REGISTER_USER_SUCCESS = '[User] Register User Success';
const RESET_REGISTER_USER_PROCESS = '[User] Reset Register User Process';
const REGISTER_GUEST = '[User] Register Guest';
const REGISTER_GUEST_FAIL = '[User] Register Guest Fail';
const REGISTER_GUEST_SUCCESS = '[User] Register Guest Success';
const REMOVE_USER = '[User] Remove User';
const REMOVE_USER_FAIL = '[User] Remove User Fail';
const REMOVE_USER_SUCCESS = '[User] Remove User Success';
const REMOVE_USER_RESET = '[User] Reset Remove User Process State';
class RegisterUser extends EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, REGISTER_USER_PROCESS_ID);
        this.payload = payload;
        this.type = REGISTER_USER;
    }
}
class RegisterUserFail extends EntityFailAction {
    constructor(payload) {
        super(PROCESS_FEATURE, REGISTER_USER_PROCESS_ID, payload);
        this.payload = payload;
        this.type = REGISTER_USER_FAIL;
    }
}
class RegisterUserSuccess extends EntitySuccessAction {
    constructor() {
        super(PROCESS_FEATURE, REGISTER_USER_PROCESS_ID);
        this.type = REGISTER_USER_SUCCESS;
    }
}
class ResetRegisterUserProcess extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, REGISTER_USER_PROCESS_ID);
        this.type = RESET_REGISTER_USER_PROCESS;
    }
}
class RegisterGuest {
    constructor(payload) {
        this.payload = payload;
        this.type = REGISTER_GUEST;
    }
}
class RegisterGuestFail {
    constructor(payload) {
        this.payload = payload;
        this.type = REGISTER_GUEST_FAIL;
    }
}
class RegisterGuestSuccess {
    constructor() {
        this.type = REGISTER_GUEST_SUCCESS;
    }
}
class RemoveUser extends EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, REMOVE_USER_PROCESS_ID);
        this.payload = payload;
        this.type = REMOVE_USER;
    }
}
class RemoveUserFail extends EntityFailAction {
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

const LOAD_CUSTOMER_COUPONS = '[User] Load Customer Coupons';
const LOAD_CUSTOMER_COUPONS_FAIL = '[User] Load Customer Coupons Fail';
const LOAD_CUSTOMER_COUPONS_SUCCESS = '[User] Load Customer Coupons Success';
const RESET_LOAD_CUSTOMER_COUPONS = '[User] Reset Load Customer Coupons';
const SUBSCRIBE_CUSTOMER_COUPON = '[User] Subscribe Customer Notification Coupon';
const SUBSCRIBE_CUSTOMER_COUPON_FAIL = '[User] Subscribe Customer Coupon Notification Fail';
const SUBSCRIBE_CUSTOMER_COUPON_SUCCESS = '[User] Subscribe Customer Coupon Notification Success';
const RESET_SUBSCRIBE_CUSTOMER_COUPON_PROCESS = '[User] Reset Subscribe Customer Coupon Process';
const UNSUBSCRIBE_CUSTOMER_COUPON = '[User] Unsubscribe Customer Notification Coupon';
const UNSUBSCRIBE_CUSTOMER_COUPON_FAIL = '[User] Unsubscribe Customer Coupon Notification Fail';
const UNSUBSCRIBE_CUSTOMER_COUPON_SUCCESS = '[User] Unsubscribe Customer Coupon Notification Success';
const RESET_UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS = '[User] Reset Unsubscribe Customer Coupon Process';
const CLAIM_CUSTOMER_COUPON = '[User] Claim Customer';
const CLAIM_CUSTOMER_COUPON_FAIL = '[User] Claim Customer Fail';
const CLAIM_CUSTOMER_COUPON_SUCCESS = '[User] Claim Customer Success';
class LoadCustomerCoupons extends LoaderLoadAction {
    constructor(payload) {
        super(CUSTOMER_COUPONS);
        this.payload = payload;
        this.type = LOAD_CUSTOMER_COUPONS;
    }
}
class LoadCustomerCouponsFail extends LoaderFailAction {
    constructor(payload) {
        super(CUSTOMER_COUPONS, payload);
        this.payload = payload;
        this.type = LOAD_CUSTOMER_COUPONS_FAIL;
    }
}
class LoadCustomerCouponsSuccess extends LoaderSuccessAction {
    constructor(payload) {
        super(CUSTOMER_COUPONS);
        this.payload = payload;
        this.type = LOAD_CUSTOMER_COUPONS_SUCCESS;
    }
}
class ResetLoadCustomerCoupons extends LoaderResetAction {
    constructor() {
        super(CUSTOMER_COUPONS);
        this.type = RESET_LOAD_CUSTOMER_COUPONS;
    }
}
// Subscribe coupon notification actions
class SubscribeCustomerCoupon extends EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID);
        this.payload = payload;
        this.type = SUBSCRIBE_CUSTOMER_COUPON;
    }
}
class SubscribeCustomerCouponFail extends EntityFailAction {
    constructor(payload) {
        super(PROCESS_FEATURE, SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, payload);
        this.payload = payload;
        this.type = SUBSCRIBE_CUSTOMER_COUPON_FAIL;
    }
}
class SubscribeCustomerCouponSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(PROCESS_FEATURE, SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, payload);
        this.payload = payload;
        this.type = SUBSCRIBE_CUSTOMER_COUPON_SUCCESS;
    }
}
class ResetSubscribeCustomerCouponProcess extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID);
        this.type = RESET_SUBSCRIBE_CUSTOMER_COUPON_PROCESS;
    }
}
class UnsubscribeCustomerCoupon extends EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID);
        this.payload = payload;
        this.type = UNSUBSCRIBE_CUSTOMER_COUPON;
    }
}
class UnsubscribeCustomerCouponFail extends EntityFailAction {
    constructor(payload) {
        super(PROCESS_FEATURE, UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, payload);
        this.payload = payload;
        this.type = UNSUBSCRIBE_CUSTOMER_COUPON_FAIL;
    }
}
class UnsubscribeCustomerCouponSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(PROCESS_FEATURE, UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, payload);
        this.payload = payload;
        this.type = UNSUBSCRIBE_CUSTOMER_COUPON_SUCCESS;
    }
}
class ResetUnsubscribeCustomerCouponProcess extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID);
        this.type = RESET_UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS;
    }
}
class ClaimCustomerCoupon extends EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, CLAIM_CUSTOMER_COUPON_PROCESS_ID);
        this.payload = payload;
        this.type = CLAIM_CUSTOMER_COUPON;
    }
}
class ClaimCustomerCouponFail extends EntityFailAction {
    constructor(payload) {
        super(PROCESS_FEATURE, CLAIM_CUSTOMER_COUPON_PROCESS_ID, payload);
        this.payload = payload;
        this.type = CLAIM_CUSTOMER_COUPON_FAIL;
    }
}
class ClaimCustomerCouponSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(PROCESS_FEATURE, CLAIM_CUSTOMER_COUPON_PROCESS_ID, payload);
        this.payload = payload;
        this.type = CLAIM_CUSTOMER_COUPON_SUCCESS;
    }
}

const LOAD_NOTIFICATION_PREFERENCES = '[User] Load Notification Preferences';
const LOAD_NOTIFICATION_PREFERENCES_FAIL = '[User] Load Notification Preferences Fail';
const LOAD_NOTIFICATION_PREFERENCES_SUCCESS = '[User] Load Notification Preferences Success';
const UPDATE_NOTIFICATION_PREFERENCES = '[User] Update Notification Preferences';
const UPDATE_NOTIFICATION_PREFERENCES_FAIL = '[User] Update Notification Preferences Fail';
const UPDATE_NOTIFICATION_PREFERENCES_SUCCESS = '[User] Update Notification Preferences Success';
const RESET_NOTIFICATION_PREFERENCES = '[User] Reset Notification Preferences';
const CLEAR_NOTIFICATION_PREFERENCES = '[User] Clear Notification Preferences';
class LoadNotificationPreferences extends LoaderLoadAction {
    constructor(payload) {
        super(NOTIFICATION_PREFERENCES);
        this.payload = payload;
        this.type = LOAD_NOTIFICATION_PREFERENCES;
    }
}
class LoadNotificationPreferencesFail extends LoaderFailAction {
    constructor(payload) {
        super(NOTIFICATION_PREFERENCES, payload);
        this.payload = payload;
        this.type = LOAD_NOTIFICATION_PREFERENCES_FAIL;
    }
}
class LoadNotificationPreferencesSuccess extends LoaderSuccessAction {
    constructor(payload) {
        super(NOTIFICATION_PREFERENCES);
        this.payload = payload;
        this.type = LOAD_NOTIFICATION_PREFERENCES_SUCCESS;
    }
}
class UpdateNotificationPreferences extends EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID);
        this.payload = payload;
        this.type = UPDATE_NOTIFICATION_PREFERENCES;
    }
}
class UpdateNotificationPreferencesFail extends EntityFailAction {
    constructor(payload) {
        super(PROCESS_FEATURE, UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID, payload);
        this.payload = payload;
        this.type = UPDATE_NOTIFICATION_PREFERENCES_FAIL;
    }
}
class UpdateNotificationPreferencesSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(PROCESS_FEATURE, UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID);
        this.payload = payload;
        this.type = UPDATE_NOTIFICATION_PREFERENCES_SUCCESS;
    }
}
class ResetNotificationPreferences extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID);
        this.type = RESET_NOTIFICATION_PREFERENCES;
    }
}
class ClearNotificationPreferences extends LoaderResetAction {
    constructor() {
        super(NOTIFICATION_PREFERENCES);
        this.type = CLEAR_NOTIFICATION_PREFERENCES;
    }
}

const LOAD_PRODUCT_INTERESTS = 'Load Product Interests';
const LOAD_PRODUCT_INTERESTS_FAIL = 'Load Product Interests Fail';
const LOAD_PRODUCT_INTERESTS_SUCCESS = 'Load Product Interests Success';
const REMOVE_PRODUCT_INTEREST = 'Remove Product Interest';
const REMOVE_PRODUCT_INTEREST_SUCCESS = 'Remove Product Interest Success';
const REMOVE_PRODUCT_INTEREST_FAIL = 'Remove Product Interest Fail';
const ADD_PRODUCT_INTEREST = 'Add Product Interest';
const ADD_PRODUCT_INTEREST_FAIL = 'Add Product Interest Fail';
const ADD_PRODUCT_INTEREST_SUCCESS = 'Add Product Interest Success';
const ADD_PRODUCT_INTEREST_RESET = 'Add Product Interest Reset';
const REMOVE_PRODUCT_INTEREST_RESET = 'Remove Product Interest Reset';
const CLEAR_PRODUCT_INTERESTS = 'Clear Product Interests';
class LoadProductInterests extends LoaderLoadAction {
    constructor(payload) {
        super(PRODUCT_INTERESTS);
        this.payload = payload;
        this.type = LOAD_PRODUCT_INTERESTS;
    }
}
class LoadProductInterestsFail extends LoaderFailAction {
    constructor(payload) {
        super(PRODUCT_INTERESTS, payload);
        this.payload = payload;
        this.type = LOAD_PRODUCT_INTERESTS_FAIL;
    }
}
class LoadProductInterestsSuccess extends LoaderSuccessAction {
    constructor(payload) {
        super(PRODUCT_INTERESTS);
        this.payload = payload;
        this.type = LOAD_PRODUCT_INTERESTS_SUCCESS;
    }
}
class RemoveProductInterest extends EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, REMOVE_PRODUCT_INTERESTS_PROCESS_ID);
        this.payload = payload;
        this.type = REMOVE_PRODUCT_INTEREST;
    }
}
class RemoveProductInterestSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(PROCESS_FEATURE, REMOVE_PRODUCT_INTERESTS_PROCESS_ID);
        this.payload = payload;
        this.type = REMOVE_PRODUCT_INTEREST_SUCCESS;
    }
}
class RemoveProductInterestFail extends EntityFailAction {
    constructor(payload) {
        super(PROCESS_FEATURE, REMOVE_PRODUCT_INTERESTS_PROCESS_ID, payload);
        this.payload = payload;
        this.type = REMOVE_PRODUCT_INTEREST_FAIL;
    }
}
class AddProductInterest extends EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, ADD_PRODUCT_INTEREST_PROCESS_ID);
        this.payload = payload;
        this.type = ADD_PRODUCT_INTEREST;
    }
}
class AddProductInterestSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(PROCESS_FEATURE, ADD_PRODUCT_INTEREST_PROCESS_ID);
        this.payload = payload;
        this.type = ADD_PRODUCT_INTEREST_SUCCESS;
    }
}
class AddProductInterestFail extends EntityFailAction {
    constructor(payload) {
        super(PROCESS_FEATURE, ADD_PRODUCT_INTEREST_PROCESS_ID, payload);
        this.payload = payload;
        this.type = ADD_PRODUCT_INTEREST_FAIL;
    }
}
class ResetAddInterestState extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, ADD_PRODUCT_INTEREST_PROCESS_ID);
        this.type = ADD_PRODUCT_INTEREST_RESET;
    }
}
class ResetRemoveInterestState extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, REMOVE_PRODUCT_INTERESTS_PROCESS_ID);
        this.type = REMOVE_PRODUCT_INTEREST_RESET;
    }
}
class ClearProductInterests extends LoaderResetAction {
    constructor() {
        super(PRODUCT_INTERESTS);
        this.type = CLEAR_PRODUCT_INTERESTS;
    }
}

const CREATE_ORDER_RETURN_REQUEST = '[User] Create Order Return Request';
const CREATE_ORDER_RETURN_REQUEST_FAIL = '[User] Create Order Return Request Fail';
const CREATE_ORDER_RETURN_REQUEST_SUCCESS = '[User] Create Order Return Request Success';
const LOAD_ORDER_RETURN_REQUEST = '[User] Load Order Return Request details';
const LOAD_ORDER_RETURN_REQUEST_FAIL = '[User] Load Order Return Request details Fail';
const LOAD_ORDER_RETURN_REQUEST_SUCCESS = '[User] Load Order Return Request details Success';
const CANCEL_ORDER_RETURN_REQUEST = '[User] Cancel Order Return Request';
const CANCEL_ORDER_RETURN_REQUEST_FAIL = '[User] Cancel Order Return Request Fail';
const CANCEL_ORDER_RETURN_REQUEST_SUCCESS = '[User] Cancel Order Return Request Success';
const LOAD_ORDER_RETURN_REQUEST_LIST = '[User] Load User Order Return Request List';
const LOAD_ORDER_RETURN_REQUEST_LIST_FAIL = '[User] Load User Order Return Request List Fail';
const LOAD_ORDER_RETURN_REQUEST_LIST_SUCCESS = '[User] Load User Order Return Request List Success';
const CLEAR_ORDER_RETURN_REQUEST = '[User] Clear Order Return Request Details';
const CLEAR_ORDER_RETURN_REQUEST_LIST = '[User] Clear Order Return Request List';
const RESET_CANCEL_RETURN_PROCESS = '[User] Reset Cancel Return Request Process';
class CreateOrderReturnRequest extends LoaderLoadAction {
    constructor(payload) {
        super(USER_RETURN_REQUEST_DETAILS);
        this.payload = payload;
        this.type = CREATE_ORDER_RETURN_REQUEST;
    }
}
class CreateOrderReturnRequestFail extends LoaderFailAction {
    constructor(payload) {
        super(USER_RETURN_REQUEST_DETAILS, payload);
        this.payload = payload;
        this.type = CREATE_ORDER_RETURN_REQUEST_FAIL;
    }
}
class CreateOrderReturnRequestSuccess extends LoaderSuccessAction {
    constructor(payload) {
        super(USER_RETURN_REQUEST_DETAILS);
        this.payload = payload;
        this.type = CREATE_ORDER_RETURN_REQUEST_SUCCESS;
    }
}
class LoadOrderReturnRequest extends LoaderLoadAction {
    constructor(payload) {
        super(USER_RETURN_REQUEST_DETAILS);
        this.payload = payload;
        this.type = LOAD_ORDER_RETURN_REQUEST;
    }
}
class LoadOrderReturnRequestFail extends LoaderFailAction {
    constructor(payload) {
        super(USER_RETURN_REQUEST_DETAILS, payload);
        this.payload = payload;
        this.type = LOAD_ORDER_RETURN_REQUEST_FAIL;
    }
}
class LoadOrderReturnRequestSuccess extends LoaderSuccessAction {
    constructor(payload) {
        super(USER_RETURN_REQUEST_DETAILS);
        this.payload = payload;
        this.type = LOAD_ORDER_RETURN_REQUEST_SUCCESS;
    }
}
class CancelOrderReturnRequest extends EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, CANCEL_RETURN_PROCESS_ID);
        this.payload = payload;
        this.type = CANCEL_ORDER_RETURN_REQUEST;
    }
}
class CancelOrderReturnRequestFail extends EntityFailAction {
    constructor(payload) {
        super(PROCESS_FEATURE, CANCEL_RETURN_PROCESS_ID, payload);
        this.payload = payload;
        this.type = CANCEL_ORDER_RETURN_REQUEST_FAIL;
    }
}
class CancelOrderReturnRequestSuccess extends EntitySuccessAction {
    constructor() {
        super(PROCESS_FEATURE, CANCEL_RETURN_PROCESS_ID);
        this.type = CANCEL_ORDER_RETURN_REQUEST_SUCCESS;
    }
}
class LoadOrderReturnRequestList extends LoaderLoadAction {
    constructor(payload) {
        super(USER_RETURN_REQUESTS);
        this.payload = payload;
        this.type = LOAD_ORDER_RETURN_REQUEST_LIST;
    }
}
class LoadOrderReturnRequestListFail extends LoaderFailAction {
    constructor(payload) {
        super(USER_RETURN_REQUESTS, payload);
        this.payload = payload;
        this.type = LOAD_ORDER_RETURN_REQUEST_LIST_FAIL;
    }
}
class LoadOrderReturnRequestListSuccess extends LoaderSuccessAction {
    constructor(payload) {
        super(USER_RETURN_REQUESTS);
        this.payload = payload;
        this.type = LOAD_ORDER_RETURN_REQUEST_LIST_SUCCESS;
    }
}
class ClearOrderReturnRequest extends LoaderResetAction {
    constructor() {
        super(USER_RETURN_REQUEST_DETAILS);
        this.type = CLEAR_ORDER_RETURN_REQUEST;
    }
}
class ClearOrderReturnRequestList extends LoaderResetAction {
    constructor() {
        super(USER_RETURN_REQUESTS);
        this.type = CLEAR_ORDER_RETURN_REQUEST_LIST;
    }
}
class ResetCancelReturnProcess extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, CANCEL_RETURN_PROCESS_ID);
        this.type = RESET_CANCEL_RETURN_PROCESS;
    }
}



var userGroup_actions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    LOAD_BILLING_COUNTRIES: LOAD_BILLING_COUNTRIES,
    LOAD_BILLING_COUNTRIES_FAIL: LOAD_BILLING_COUNTRIES_FAIL,
    LOAD_BILLING_COUNTRIES_SUCCESS: LOAD_BILLING_COUNTRIES_SUCCESS,
    LoadBillingCountries: LoadBillingCountries,
    LoadBillingCountriesFail: LoadBillingCountriesFail,
    LoadBillingCountriesSuccess: LoadBillingCountriesSuccess,
    LOAD_CONSIGNMENT_TRACKING: LOAD_CONSIGNMENT_TRACKING,
    LOAD_CONSIGNMENT_TRACKING_FAIL: LOAD_CONSIGNMENT_TRACKING_FAIL,
    LOAD_CONSIGNMENT_TRACKING_SUCCESS: LOAD_CONSIGNMENT_TRACKING_SUCCESS,
    CLEAR_CONSIGNMENT_TRACKING: CLEAR_CONSIGNMENT_TRACKING,
    LoadConsignmentTracking: LoadConsignmentTracking,
    LoadConsignmentTrackingFail: LoadConsignmentTrackingFail,
    LoadConsignmentTrackingSuccess: LoadConsignmentTrackingSuccess,
    ClearConsignmentTracking: ClearConsignmentTracking,
    LOAD_DELIVERY_COUNTRIES: LOAD_DELIVERY_COUNTRIES,
    LOAD_DELIVERY_COUNTRIES_FAIL: LOAD_DELIVERY_COUNTRIES_FAIL,
    LOAD_DELIVERY_COUNTRIES_SUCCESS: LOAD_DELIVERY_COUNTRIES_SUCCESS,
    LoadDeliveryCountries: LoadDeliveryCountries,
    LoadDeliveryCountriesFail: LoadDeliveryCountriesFail,
    LoadDeliveryCountriesSuccess: LoadDeliveryCountriesSuccess,
    FORGOT_PASSWORD_EMAIL_REQUEST: FORGOT_PASSWORD_EMAIL_REQUEST,
    FORGOT_PASSWORD_EMAIL_REQUEST_SUCCESS: FORGOT_PASSWORD_EMAIL_REQUEST_SUCCESS,
    FORGOT_PASSWORD_EMAIL_REQUEST_FAIL: FORGOT_PASSWORD_EMAIL_REQUEST_FAIL,
    ForgotPasswordEmailRequest: ForgotPasswordEmailRequest,
    ForgotPasswordEmailRequestFail: ForgotPasswordEmailRequestFail,
    ForgotPasswordEmailRequestSuccess: ForgotPasswordEmailRequestSuccess,
    LOAD_ORDER_DETAILS: LOAD_ORDER_DETAILS,
    LOAD_ORDER_DETAILS_FAIL: LOAD_ORDER_DETAILS_FAIL,
    LOAD_ORDER_DETAILS_SUCCESS: LOAD_ORDER_DETAILS_SUCCESS,
    CLEAR_ORDER_DETAILS: CLEAR_ORDER_DETAILS,
    CANCEL_ORDER: CANCEL_ORDER,
    CANCEL_ORDER_FAIL: CANCEL_ORDER_FAIL,
    CANCEL_ORDER_SUCCESS: CANCEL_ORDER_SUCCESS,
    RESET_CANCEL_ORDER_PROCESS: RESET_CANCEL_ORDER_PROCESS,
    LoadOrderDetails: LoadOrderDetails,
    LoadOrderDetailsFail: LoadOrderDetailsFail,
    LoadOrderDetailsSuccess: LoadOrderDetailsSuccess,
    ClearOrderDetails: ClearOrderDetails,
    CancelOrder: CancelOrder,
    CancelOrderFail: CancelOrderFail,
    CancelOrderSuccess: CancelOrderSuccess,
    ResetCancelOrderProcess: ResetCancelOrderProcess,
    LOAD_USER_PAYMENT_METHODS: LOAD_USER_PAYMENT_METHODS,
    LOAD_USER_PAYMENT_METHODS_FAIL: LOAD_USER_PAYMENT_METHODS_FAIL,
    LOAD_USER_PAYMENT_METHODS_SUCCESS: LOAD_USER_PAYMENT_METHODS_SUCCESS,
    SET_DEFAULT_USER_PAYMENT_METHOD: SET_DEFAULT_USER_PAYMENT_METHOD,
    SET_DEFAULT_USER_PAYMENT_METHOD_FAIL: SET_DEFAULT_USER_PAYMENT_METHOD_FAIL,
    SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS: SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS,
    DELETE_USER_PAYMENT_METHOD: DELETE_USER_PAYMENT_METHOD,
    DELETE_USER_PAYMENT_METHOD_FAIL: DELETE_USER_PAYMENT_METHOD_FAIL,
    DELETE_USER_PAYMENT_METHOD_SUCCESS: DELETE_USER_PAYMENT_METHOD_SUCCESS,
    LoadUserPaymentMethods: LoadUserPaymentMethods,
    LoadUserPaymentMethodsFail: LoadUserPaymentMethodsFail,
    LoadUserPaymentMethodsSuccess: LoadUserPaymentMethodsSuccess,
    SetDefaultUserPaymentMethod: SetDefaultUserPaymentMethod,
    SetDefaultUserPaymentMethodFail: SetDefaultUserPaymentMethodFail,
    SetDefaultUserPaymentMethodSuccess: SetDefaultUserPaymentMethodSuccess,
    DeleteUserPaymentMethod: DeleteUserPaymentMethod,
    DeleteUserPaymentMethodFail: DeleteUserPaymentMethodFail,
    DeleteUserPaymentMethodSuccess: DeleteUserPaymentMethodSuccess,
    LOAD_REGIONS: LOAD_REGIONS,
    LOAD_REGIONS_SUCCESS: LOAD_REGIONS_SUCCESS,
    LOAD_REGIONS_FAIL: LOAD_REGIONS_FAIL,
    CLEAR_REGIONS: CLEAR_REGIONS,
    LoadRegions: LoadRegions,
    LoadRegionsFail: LoadRegionsFail,
    LoadRegionsSuccess: LoadRegionsSuccess,
    ClearRegions: ClearRegions,
    RESET_PASSWORD: RESET_PASSWORD,
    RESET_PASSWORD_SUCCESS: RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL: RESET_PASSWORD_FAIL,
    ResetPassword: ResetPassword,
    ResetPasswordFail: ResetPasswordFail,
    ResetPasswordSuccess: ResetPasswordSuccess,
    LOAD_TITLES: LOAD_TITLES,
    LOAD_TITLES_FAIL: LOAD_TITLES_FAIL,
    LOAD_TITLES_SUCCESS: LOAD_TITLES_SUCCESS,
    LoadTitles: LoadTitles,
    LoadTitlesFail: LoadTitlesFail,
    LoadTitlesSuccess: LoadTitlesSuccess,
    UPDATE_EMAIL: UPDATE_EMAIL,
    UPDATE_EMAIL_ERROR: UPDATE_EMAIL_ERROR,
    UPDATE_EMAIL_SUCCESS: UPDATE_EMAIL_SUCCESS,
    RESET_EMAIL: RESET_EMAIL,
    UpdateEmailAction: UpdateEmailAction,
    UpdateEmailSuccessAction: UpdateEmailSuccessAction,
    UpdateEmailErrorAction: UpdateEmailErrorAction,
    ResetUpdateEmailAction: ResetUpdateEmailAction,
    UPDATE_PASSWORD: UPDATE_PASSWORD,
    UPDATE_PASSWORD_FAIL: UPDATE_PASSWORD_FAIL,
    UPDATE_PASSWORD_SUCCESS: UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_RESET: UPDATE_PASSWORD_RESET,
    UpdatePassword: UpdatePassword,
    UpdatePasswordFail: UpdatePasswordFail,
    UpdatePasswordSuccess: UpdatePasswordSuccess,
    UpdatePasswordReset: UpdatePasswordReset,
    LOAD_USER_ADDRESSES: LOAD_USER_ADDRESSES,
    LOAD_USER_ADDRESSES_FAIL: LOAD_USER_ADDRESSES_FAIL,
    LOAD_USER_ADDRESSES_SUCCESS: LOAD_USER_ADDRESSES_SUCCESS,
    ADD_USER_ADDRESS: ADD_USER_ADDRESS,
    ADD_USER_ADDRESS_FAIL: ADD_USER_ADDRESS_FAIL,
    ADD_USER_ADDRESS_SUCCESS: ADD_USER_ADDRESS_SUCCESS,
    UPDATE_USER_ADDRESS: UPDATE_USER_ADDRESS,
    UPDATE_USER_ADDRESS_FAIL: UPDATE_USER_ADDRESS_FAIL,
    UPDATE_USER_ADDRESS_SUCCESS: UPDATE_USER_ADDRESS_SUCCESS,
    DELETE_USER_ADDRESS: DELETE_USER_ADDRESS,
    DELETE_USER_ADDRESS_FAIL: DELETE_USER_ADDRESS_FAIL,
    DELETE_USER_ADDRESS_SUCCESS: DELETE_USER_ADDRESS_SUCCESS,
    LoadUserAddresses: LoadUserAddresses,
    LoadUserAddressesFail: LoadUserAddressesFail,
    LoadUserAddressesSuccess: LoadUserAddressesSuccess,
    AddUserAddress: AddUserAddress,
    AddUserAddressFail: AddUserAddressFail,
    AddUserAddressSuccess: AddUserAddressSuccess,
    UpdateUserAddress: UpdateUserAddress,
    UpdateUserAddressFail: UpdateUserAddressFail,
    UpdateUserAddressSuccess: UpdateUserAddressSuccess,
    DeleteUserAddress: DeleteUserAddress,
    DeleteUserAddressFail: DeleteUserAddressFail,
    DeleteUserAddressSuccess: DeleteUserAddressSuccess,
    LOAD_USER_CONSENTS: LOAD_USER_CONSENTS,
    LOAD_USER_CONSENTS_SUCCESS: LOAD_USER_CONSENTS_SUCCESS,
    LOAD_USER_CONSENTS_FAIL: LOAD_USER_CONSENTS_FAIL,
    RESET_LOAD_USER_CONSENTS: RESET_LOAD_USER_CONSENTS,
    GIVE_USER_CONSENT: GIVE_USER_CONSENT,
    GIVE_USER_CONSENT_FAIL: GIVE_USER_CONSENT_FAIL,
    GIVE_USER_CONSENT_SUCCESS: GIVE_USER_CONSENT_SUCCESS,
    RESET_GIVE_USER_CONSENT_PROCESS: RESET_GIVE_USER_CONSENT_PROCESS,
    TRANSFER_ANONYMOUS_CONSENT: TRANSFER_ANONYMOUS_CONSENT,
    WITHDRAW_USER_CONSENT: WITHDRAW_USER_CONSENT,
    WITHDRAW_USER_CONSENT_FAIL: WITHDRAW_USER_CONSENT_FAIL,
    WITHDRAW_USER_CONSENT_SUCCESS: WITHDRAW_USER_CONSENT_SUCCESS,
    RESET_WITHDRAW_USER_CONSENT_PROCESS: RESET_WITHDRAW_USER_CONSENT_PROCESS,
    LoadUserConsents: LoadUserConsents,
    LoadUserConsentsFail: LoadUserConsentsFail,
    LoadUserConsentsSuccess: LoadUserConsentsSuccess,
    ResetLoadUserConsents: ResetLoadUserConsents,
    GiveUserConsent: GiveUserConsent,
    GiveUserConsentFail: GiveUserConsentFail,
    GiveUserConsentSuccess: GiveUserConsentSuccess,
    ResetGiveUserConsentProcess: ResetGiveUserConsentProcess,
    TransferAnonymousConsent: TransferAnonymousConsent,
    WithdrawUserConsent: WithdrawUserConsent,
    WithdrawUserConsentFail: WithdrawUserConsentFail,
    WithdrawUserConsentSuccess: WithdrawUserConsentSuccess,
    ResetWithdrawUserConsentProcess: ResetWithdrawUserConsentProcess,
    LOAD_USER_DETAILS: LOAD_USER_DETAILS,
    LOAD_USER_DETAILS_FAIL: LOAD_USER_DETAILS_FAIL,
    LOAD_USER_DETAILS_SUCCESS: LOAD_USER_DETAILS_SUCCESS,
    UPDATE_USER_DETAILS: UPDATE_USER_DETAILS,
    UPDATE_USER_DETAILS_FAIL: UPDATE_USER_DETAILS_FAIL,
    UPDATE_USER_DETAILS_SUCCESS: UPDATE_USER_DETAILS_SUCCESS,
    RESET_USER_DETAILS: RESET_USER_DETAILS,
    LoadUserDetails: LoadUserDetails,
    LoadUserDetailsFail: LoadUserDetailsFail,
    LoadUserDetailsSuccess: LoadUserDetailsSuccess,
    UpdateUserDetails: UpdateUserDetails,
    UpdateUserDetailsFail: UpdateUserDetailsFail,
    UpdateUserDetailsSuccess: UpdateUserDetailsSuccess,
    ResetUpdateUserDetails: ResetUpdateUserDetails,
    CLEAR_USER_MISCS_DATA: CLEAR_USER_MISCS_DATA,
    ClearUserMiscsData: ClearUserMiscsData,
    LOAD_USER_ORDERS: LOAD_USER_ORDERS,
    LOAD_USER_ORDERS_FAIL: LOAD_USER_ORDERS_FAIL,
    LOAD_USER_ORDERS_SUCCESS: LOAD_USER_ORDERS_SUCCESS,
    CLEAR_USER_ORDERS: CLEAR_USER_ORDERS,
    LoadUserOrders: LoadUserOrders,
    LoadUserOrdersFail: LoadUserOrdersFail,
    LoadUserOrdersSuccess: LoadUserOrdersSuccess,
    ClearUserOrders: ClearUserOrders,
    REGISTER_USER: REGISTER_USER,
    REGISTER_USER_FAIL: REGISTER_USER_FAIL,
    REGISTER_USER_SUCCESS: REGISTER_USER_SUCCESS,
    RESET_REGISTER_USER_PROCESS: RESET_REGISTER_USER_PROCESS,
    REGISTER_GUEST: REGISTER_GUEST,
    REGISTER_GUEST_FAIL: REGISTER_GUEST_FAIL,
    REGISTER_GUEST_SUCCESS: REGISTER_GUEST_SUCCESS,
    REMOVE_USER: REMOVE_USER,
    REMOVE_USER_FAIL: REMOVE_USER_FAIL,
    REMOVE_USER_SUCCESS: REMOVE_USER_SUCCESS,
    REMOVE_USER_RESET: REMOVE_USER_RESET,
    RegisterUser: RegisterUser,
    RegisterUserFail: RegisterUserFail,
    RegisterUserSuccess: RegisterUserSuccess,
    ResetRegisterUserProcess: ResetRegisterUserProcess,
    RegisterGuest: RegisterGuest,
    RegisterGuestFail: RegisterGuestFail,
    RegisterGuestSuccess: RegisterGuestSuccess,
    RemoveUser: RemoveUser,
    RemoveUserFail: RemoveUserFail,
    RemoveUserSuccess: RemoveUserSuccess,
    RemoveUserReset: RemoveUserReset,
    LOAD_CUSTOMER_COUPONS: LOAD_CUSTOMER_COUPONS,
    LOAD_CUSTOMER_COUPONS_FAIL: LOAD_CUSTOMER_COUPONS_FAIL,
    LOAD_CUSTOMER_COUPONS_SUCCESS: LOAD_CUSTOMER_COUPONS_SUCCESS,
    RESET_LOAD_CUSTOMER_COUPONS: RESET_LOAD_CUSTOMER_COUPONS,
    SUBSCRIBE_CUSTOMER_COUPON: SUBSCRIBE_CUSTOMER_COUPON,
    SUBSCRIBE_CUSTOMER_COUPON_FAIL: SUBSCRIBE_CUSTOMER_COUPON_FAIL,
    SUBSCRIBE_CUSTOMER_COUPON_SUCCESS: SUBSCRIBE_CUSTOMER_COUPON_SUCCESS,
    RESET_SUBSCRIBE_CUSTOMER_COUPON_PROCESS: RESET_SUBSCRIBE_CUSTOMER_COUPON_PROCESS,
    UNSUBSCRIBE_CUSTOMER_COUPON: UNSUBSCRIBE_CUSTOMER_COUPON,
    UNSUBSCRIBE_CUSTOMER_COUPON_FAIL: UNSUBSCRIBE_CUSTOMER_COUPON_FAIL,
    UNSUBSCRIBE_CUSTOMER_COUPON_SUCCESS: UNSUBSCRIBE_CUSTOMER_COUPON_SUCCESS,
    RESET_UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS: RESET_UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS,
    CLAIM_CUSTOMER_COUPON: CLAIM_CUSTOMER_COUPON,
    CLAIM_CUSTOMER_COUPON_FAIL: CLAIM_CUSTOMER_COUPON_FAIL,
    CLAIM_CUSTOMER_COUPON_SUCCESS: CLAIM_CUSTOMER_COUPON_SUCCESS,
    LoadCustomerCoupons: LoadCustomerCoupons,
    LoadCustomerCouponsFail: LoadCustomerCouponsFail,
    LoadCustomerCouponsSuccess: LoadCustomerCouponsSuccess,
    ResetLoadCustomerCoupons: ResetLoadCustomerCoupons,
    SubscribeCustomerCoupon: SubscribeCustomerCoupon,
    SubscribeCustomerCouponFail: SubscribeCustomerCouponFail,
    SubscribeCustomerCouponSuccess: SubscribeCustomerCouponSuccess,
    ResetSubscribeCustomerCouponProcess: ResetSubscribeCustomerCouponProcess,
    UnsubscribeCustomerCoupon: UnsubscribeCustomerCoupon,
    UnsubscribeCustomerCouponFail: UnsubscribeCustomerCouponFail,
    UnsubscribeCustomerCouponSuccess: UnsubscribeCustomerCouponSuccess,
    ResetUnsubscribeCustomerCouponProcess: ResetUnsubscribeCustomerCouponProcess,
    ClaimCustomerCoupon: ClaimCustomerCoupon,
    ClaimCustomerCouponFail: ClaimCustomerCouponFail,
    ClaimCustomerCouponSuccess: ClaimCustomerCouponSuccess,
    LOAD_NOTIFICATION_PREFERENCES: LOAD_NOTIFICATION_PREFERENCES,
    LOAD_NOTIFICATION_PREFERENCES_FAIL: LOAD_NOTIFICATION_PREFERENCES_FAIL,
    LOAD_NOTIFICATION_PREFERENCES_SUCCESS: LOAD_NOTIFICATION_PREFERENCES_SUCCESS,
    UPDATE_NOTIFICATION_PREFERENCES: UPDATE_NOTIFICATION_PREFERENCES,
    UPDATE_NOTIFICATION_PREFERENCES_FAIL: UPDATE_NOTIFICATION_PREFERENCES_FAIL,
    UPDATE_NOTIFICATION_PREFERENCES_SUCCESS: UPDATE_NOTIFICATION_PREFERENCES_SUCCESS,
    RESET_NOTIFICATION_PREFERENCES: RESET_NOTIFICATION_PREFERENCES,
    CLEAR_NOTIFICATION_PREFERENCES: CLEAR_NOTIFICATION_PREFERENCES,
    LoadNotificationPreferences: LoadNotificationPreferences,
    LoadNotificationPreferencesFail: LoadNotificationPreferencesFail,
    LoadNotificationPreferencesSuccess: LoadNotificationPreferencesSuccess,
    UpdateNotificationPreferences: UpdateNotificationPreferences,
    UpdateNotificationPreferencesFail: UpdateNotificationPreferencesFail,
    UpdateNotificationPreferencesSuccess: UpdateNotificationPreferencesSuccess,
    ResetNotificationPreferences: ResetNotificationPreferences,
    ClearNotificationPreferences: ClearNotificationPreferences,
    LOAD_PRODUCT_INTERESTS: LOAD_PRODUCT_INTERESTS,
    LOAD_PRODUCT_INTERESTS_FAIL: LOAD_PRODUCT_INTERESTS_FAIL,
    LOAD_PRODUCT_INTERESTS_SUCCESS: LOAD_PRODUCT_INTERESTS_SUCCESS,
    REMOVE_PRODUCT_INTEREST: REMOVE_PRODUCT_INTEREST,
    REMOVE_PRODUCT_INTEREST_SUCCESS: REMOVE_PRODUCT_INTEREST_SUCCESS,
    REMOVE_PRODUCT_INTEREST_FAIL: REMOVE_PRODUCT_INTEREST_FAIL,
    ADD_PRODUCT_INTEREST: ADD_PRODUCT_INTEREST,
    ADD_PRODUCT_INTEREST_FAIL: ADD_PRODUCT_INTEREST_FAIL,
    ADD_PRODUCT_INTEREST_SUCCESS: ADD_PRODUCT_INTEREST_SUCCESS,
    ADD_PRODUCT_INTEREST_RESET: ADD_PRODUCT_INTEREST_RESET,
    REMOVE_PRODUCT_INTEREST_RESET: REMOVE_PRODUCT_INTEREST_RESET,
    CLEAR_PRODUCT_INTERESTS: CLEAR_PRODUCT_INTERESTS,
    LoadProductInterests: LoadProductInterests,
    LoadProductInterestsFail: LoadProductInterestsFail,
    LoadProductInterestsSuccess: LoadProductInterestsSuccess,
    RemoveProductInterest: RemoveProductInterest,
    RemoveProductInterestSuccess: RemoveProductInterestSuccess,
    RemoveProductInterestFail: RemoveProductInterestFail,
    AddProductInterest: AddProductInterest,
    AddProductInterestSuccess: AddProductInterestSuccess,
    AddProductInterestFail: AddProductInterestFail,
    ResetAddInterestState: ResetAddInterestState,
    ResetRemoveInterestState: ResetRemoveInterestState,
    ClearProductInterests: ClearProductInterests,
    CREATE_ORDER_RETURN_REQUEST: CREATE_ORDER_RETURN_REQUEST,
    CREATE_ORDER_RETURN_REQUEST_FAIL: CREATE_ORDER_RETURN_REQUEST_FAIL,
    CREATE_ORDER_RETURN_REQUEST_SUCCESS: CREATE_ORDER_RETURN_REQUEST_SUCCESS,
    LOAD_ORDER_RETURN_REQUEST: LOAD_ORDER_RETURN_REQUEST,
    LOAD_ORDER_RETURN_REQUEST_FAIL: LOAD_ORDER_RETURN_REQUEST_FAIL,
    LOAD_ORDER_RETURN_REQUEST_SUCCESS: LOAD_ORDER_RETURN_REQUEST_SUCCESS,
    CANCEL_ORDER_RETURN_REQUEST: CANCEL_ORDER_RETURN_REQUEST,
    CANCEL_ORDER_RETURN_REQUEST_FAIL: CANCEL_ORDER_RETURN_REQUEST_FAIL,
    CANCEL_ORDER_RETURN_REQUEST_SUCCESS: CANCEL_ORDER_RETURN_REQUEST_SUCCESS,
    LOAD_ORDER_RETURN_REQUEST_LIST: LOAD_ORDER_RETURN_REQUEST_LIST,
    LOAD_ORDER_RETURN_REQUEST_LIST_FAIL: LOAD_ORDER_RETURN_REQUEST_LIST_FAIL,
    LOAD_ORDER_RETURN_REQUEST_LIST_SUCCESS: LOAD_ORDER_RETURN_REQUEST_LIST_SUCCESS,
    CLEAR_ORDER_RETURN_REQUEST: CLEAR_ORDER_RETURN_REQUEST,
    CLEAR_ORDER_RETURN_REQUEST_LIST: CLEAR_ORDER_RETURN_REQUEST_LIST,
    RESET_CANCEL_RETURN_PROCESS: RESET_CANCEL_RETURN_PROCESS,
    CreateOrderReturnRequest: CreateOrderReturnRequest,
    CreateOrderReturnRequestFail: CreateOrderReturnRequestFail,
    CreateOrderReturnRequestSuccess: CreateOrderReturnRequestSuccess,
    LoadOrderReturnRequest: LoadOrderReturnRequest,
    LoadOrderReturnRequestFail: LoadOrderReturnRequestFail,
    LoadOrderReturnRequestSuccess: LoadOrderReturnRequestSuccess,
    CancelOrderReturnRequest: CancelOrderReturnRequest,
    CancelOrderReturnRequestFail: CancelOrderReturnRequestFail,
    CancelOrderReturnRequestSuccess: CancelOrderReturnRequestSuccess,
    LoadOrderReturnRequestList: LoadOrderReturnRequestList,
    LoadOrderReturnRequestListFail: LoadOrderReturnRequestListFail,
    LoadOrderReturnRequestListSuccess: LoadOrderReturnRequestListSuccess,
    ClearOrderReturnRequest: ClearOrderReturnRequest,
    ClearOrderReturnRequestList: ClearOrderReturnRequestList,
    ResetCancelReturnProcess: ResetCancelReturnProcess
});

const getUserState = createFeatureSelector(USER_FEATURE);

const ɵ0$b = (state) => state.billingCountries;
const getBillingCountriesState = createSelector(getUserState, ɵ0$b);
const ɵ1$7 = (state) => state.entities;
const getBillingCountriesEntites = createSelector(getBillingCountriesState, ɵ1$7);
const ɵ2$3 = (entites) => Object.keys(entites).map((isocode) => entites[isocode]);
const getAllBillingCountries = createSelector(getBillingCountriesEntites, ɵ2$3);

const ɵ0$c = (state) => state.consignmentTracking;
const getConsignmentTrackingState = createSelector(getUserState, ɵ0$c);
const ɵ1$8 = (state) => state.tracking;
const getConsignmentTracking = createSelector(getConsignmentTrackingState, ɵ1$8);

const ɵ0$d = (state) => state.countries;
const getDeliveryCountriesState = createSelector(getUserState, ɵ0$d);
const ɵ1$9 = (state) => state.entities;
const getDeliveryCountriesEntites = createSelector(getDeliveryCountriesState, ɵ1$9);
const ɵ2$4 = (entites) => Object.keys(entites).map((isocode) => entites[isocode]);
const getAllDeliveryCountries = createSelector(getDeliveryCountriesEntites, ɵ2$4);
const countrySelectorFactory = (isocode) => createSelector(getDeliveryCountriesEntites, (entities) => Object.keys(entities).length !== 0 ? entities[isocode] : null);

const ɵ0$e = (state) => state.order;
const getOrderState = createSelector(getUserState, ɵ0$e);
const ɵ1$a = (state) => loaderValueSelector(state);
const getOrderDetails = createSelector(getOrderState, ɵ1$a);

const ɵ0$f = (state) => state.orderReturn;
const getOrderReturnRequestState = createSelector(getUserState, ɵ0$f);
const ɵ1$b = (state) => loaderValueSelector(state);
const getOrderReturnRequest = createSelector(getOrderReturnRequestState, ɵ1$b);
const ɵ2$5 = (state) => loaderLoadingSelector(state);
const getOrderReturnRequestLoading = createSelector(getOrderReturnRequestState, ɵ2$5);
const ɵ3$3 = (state) => loaderSuccessSelector(state) &&
    !loaderLoadingSelector(state);
const getOrderReturnRequestSuccess = createSelector(getOrderReturnRequestState, ɵ3$3);
const ɵ4 = (state) => state.orderReturnList;
const getOrderReturnRequestListState = createSelector(getUserState, ɵ4);
const ɵ5 = (state) => loaderValueSelector(state);
const getOrderReturnRequestList = createSelector(getOrderReturnRequestListState, ɵ5);

const ɵ0$g = (state) => state.payments;
const getPaymentMethodsState = createSelector(getUserState, ɵ0$g);
const ɵ1$c = (state) => loaderValueSelector(state);
const getPaymentMethods = createSelector(getPaymentMethodsState, ɵ1$c);
const ɵ2$6 = (state) => loaderLoadingSelector(state);
const getPaymentMethodsLoading = createSelector(getPaymentMethodsState, ɵ2$6);
const ɵ3$4 = (state) => loaderSuccessSelector(state) &&
    !loaderLoadingSelector(state);
const getPaymentMethodsLoadedSuccess = createSelector(getPaymentMethodsState, ɵ3$4);

const ɵ0$h = (state) => state.regions;
const getRegionsLoaderState = createSelector(getUserState, ɵ0$h);
const ɵ1$d = (state) => {
    return loaderValueSelector(state).entities;
};
const getAllRegions = createSelector(getRegionsLoaderState, ɵ1$d);
const ɵ2$7 = (state) => ({
    loaded: loaderSuccessSelector(state),
    loading: loaderLoadingSelector(state),
    regions: loaderValueSelector(state).entities,
    country: loaderValueSelector(state).country,
});
const getRegionsDataAndLoading = createSelector(getRegionsLoaderState, ɵ2$7);
const ɵ3$5 = (state) => loaderValueSelector(state).country;
const getRegionsCountry = createSelector(getRegionsLoaderState, ɵ3$5);
const ɵ4$1 = (state) => loaderLoadingSelector(state);
const getRegionsLoading = createSelector(getRegionsLoaderState, ɵ4$1);
const ɵ5$1 = (state) => loaderSuccessSelector(state);
const getRegionsLoaded = createSelector(getRegionsLoaderState, ɵ5$1);

const ɵ0$i = (state) => state.resetPassword;
const getResetPassword = createSelector(getUserState, ɵ0$i);

const ɵ0$j = (state) => state.titles;
const getTitlesState = createSelector(getUserState, ɵ0$j);
const ɵ1$e = (state) => state.entities;
const getTitlesEntites = createSelector(getTitlesState, ɵ1$e);
const ɵ2$8 = (entites) => Object.keys(entites).map((code) => entites[code]);
const getAllTitles = createSelector(getTitlesEntites, ɵ2$8);
const titleSelectorFactory = (code) => createSelector(getTitlesEntites, (entities) => Object.keys(entities).length !== 0 ? entities[code] : null);

const ɵ0$k = (state) => state.addresses;
const getAddressesLoaderState = createSelector(getUserState, ɵ0$k);
const ɵ1$f = (state) => loaderValueSelector(state);
const getAddresses = createSelector(getAddressesLoaderState, ɵ1$f);
const ɵ2$9 = (state) => loaderLoadingSelector(state);
const getAddressesLoading = createSelector(getAddressesLoaderState, ɵ2$9);
const ɵ3$6 = (state) => loaderSuccessSelector(state) &&
    !loaderLoadingSelector(state);
const getAddressesLoadedSuccess = createSelector(getAddressesLoaderState, ɵ3$6);

const ɵ0$l = (state) => state.consents;
const getConsentsState = createSelector(getUserState, ɵ0$l);
const getConsentsValue = createSelector(getConsentsState, loaderValueSelector);
const getConsentByTemplateId = (templateId) => createSelector(getConsentsValue, (templates) => templates.find((template) => template.id === templateId));
const getConsentsLoading = createSelector(getConsentsState, loaderLoadingSelector);
const getConsentsSuccess = createSelector(getConsentsState, loaderSuccessSelector);
const getConsentsError = createSelector(getConsentsState, loaderErrorSelector);

const ɵ0$m = (state) => state.account;
const getDetailsState = createSelector(getUserState, ɵ0$m);
const ɵ1$g = (state) => state.details;
const getDetails = createSelector(getDetailsState, ɵ1$g);

const ɵ0$n = (state) => state.orders;
const getOrdersState = createSelector(getUserState, ɵ0$n);
const ɵ1$h = (state) => loaderSuccessSelector(state);
const getOrdersLoaded = createSelector(getOrdersState, ɵ1$h);
const ɵ2$a = (state) => loaderValueSelector(state);
const getOrders = createSelector(getOrdersState, ɵ2$a);

const ɵ0$o = (state) => state.customerCoupons;
const getCustomerCouponsState = createSelector(getUserState, ɵ0$o);
const ɵ1$i = (state) => loaderSuccessSelector(state);
const getCustomerCouponsLoaded = createSelector(getCustomerCouponsState, ɵ1$i);
const ɵ2$b = (state) => loaderLoadingSelector(state);
const getCustomerCouponsLoading = createSelector(getCustomerCouponsState, ɵ2$b);
const ɵ3$7 = (state) => loaderValueSelector(state);
const getCustomerCoupons = createSelector(getCustomerCouponsState, ɵ3$7);

const ɵ0$p = (state) => state.notificationPreferences;
const getPreferencesLoaderState = createSelector(getUserState, ɵ0$p);
const ɵ1$j = (state) => loaderValueSelector(state);
const getPreferences = createSelector(getPreferencesLoaderState, ɵ1$j);
const ɵ2$c = (state) => loaderValueSelector(state).filter((p) => p.enabled);
const getEnabledPreferences = createSelector(getPreferencesLoaderState, ɵ2$c);
const ɵ3$8 = (state) => loaderLoadingSelector(state);
const getPreferencesLoading = createSelector(getPreferencesLoaderState, ɵ3$8);

const ɵ0$q = (state) => state.productInterests;
const getInterestsState = createSelector(getUserState, ɵ0$q);
const ɵ1$k = (state) => loaderValueSelector(state);
const getInterests = createSelector(getInterestsState, ɵ1$k);
const ɵ2$d = (state) => loaderLoadingSelector(state);
const getInterestsLoading = createSelector(getInterestsState, ɵ2$d);



var usersGroup_selectors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getBillingCountriesState: getBillingCountriesState,
    getBillingCountriesEntites: getBillingCountriesEntites,
    getAllBillingCountries: getAllBillingCountries,
    ɵ0: ɵ0$b,
    ɵ1: ɵ1$7,
    ɵ2: ɵ2$3,
    getConsignmentTrackingState: getConsignmentTrackingState,
    getConsignmentTracking: getConsignmentTracking,
    getDeliveryCountriesState: getDeliveryCountriesState,
    getDeliveryCountriesEntites: getDeliveryCountriesEntites,
    getAllDeliveryCountries: getAllDeliveryCountries,
    countrySelectorFactory: countrySelectorFactory,
    getUserState: getUserState,
    getOrderState: getOrderState,
    getOrderDetails: getOrderDetails,
    getOrderReturnRequestState: getOrderReturnRequestState,
    getOrderReturnRequest: getOrderReturnRequest,
    getOrderReturnRequestLoading: getOrderReturnRequestLoading,
    getOrderReturnRequestSuccess: getOrderReturnRequestSuccess,
    getOrderReturnRequestListState: getOrderReturnRequestListState,
    getOrderReturnRequestList: getOrderReturnRequestList,
    ɵ3: ɵ3$3,
    ɵ4: ɵ4,
    ɵ5: ɵ5,
    getPaymentMethodsState: getPaymentMethodsState,
    getPaymentMethods: getPaymentMethods,
    getPaymentMethodsLoading: getPaymentMethodsLoading,
    getPaymentMethodsLoadedSuccess: getPaymentMethodsLoadedSuccess,
    getRegionsLoaderState: getRegionsLoaderState,
    getAllRegions: getAllRegions,
    getRegionsDataAndLoading: getRegionsDataAndLoading,
    getRegionsCountry: getRegionsCountry,
    getRegionsLoading: getRegionsLoading,
    getRegionsLoaded: getRegionsLoaded,
    getResetPassword: getResetPassword,
    getTitlesState: getTitlesState,
    getTitlesEntites: getTitlesEntites,
    getAllTitles: getAllTitles,
    titleSelectorFactory: titleSelectorFactory,
    getAddressesLoaderState: getAddressesLoaderState,
    getAddresses: getAddresses,
    getAddressesLoading: getAddressesLoading,
    getAddressesLoadedSuccess: getAddressesLoadedSuccess,
    getConsentsState: getConsentsState,
    getConsentsValue: getConsentsValue,
    getConsentByTemplateId: getConsentByTemplateId,
    getConsentsLoading: getConsentsLoading,
    getConsentsSuccess: getConsentsSuccess,
    getConsentsError: getConsentsError,
    getDetailsState: getDetailsState,
    getDetails: getDetails,
    getOrdersState: getOrdersState,
    getOrdersLoaded: getOrdersLoaded,
    getOrders: getOrders,
    getCustomerCouponsState: getCustomerCouponsState,
    getCustomerCouponsLoaded: getCustomerCouponsLoaded,
    getCustomerCouponsLoading: getCustomerCouponsLoading,
    getCustomerCoupons: getCustomerCoupons,
    getPreferencesLoaderState: getPreferencesLoaderState,
    getPreferences: getPreferences,
    getEnabledPreferences: getEnabledPreferences,
    getPreferencesLoading: getPreferencesLoading,
    getInterestsState: getInterestsState,
    getInterests: getInterests,
    getInterestsLoading: getInterestsLoading
});

let UserConsentService = class UserConsentService {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Retrieves all consents.
     */
    loadConsents() {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new LoadUserConsents(userId));
        });
    }
    /**
     * Returns all consent templates. If `loadIfMissing` parameter is set to `true`, the method triggers the load if consent templates.
     * @param loadIfMissing is set to `true`, the method will load templates if those are not already present. The default value is `false`.
     */
    getConsents(loadIfMissing = false) {
        return iif(() => loadIfMissing, this.store.pipe(select(getConsentsValue), withLatestFrom(this.getConsentsResultLoading(), this.getConsentsResultSuccess()), filter(([_templates, loading, _success]) => !loading), tap(([templates, _loading, success]) => {
            if (!templates || templates.length === 0) {
                // avoid infite loop - if we've already attempted to load templates and we got an empty array as the response
                if (!success) {
                    this.loadConsents();
                }
            }
        }), filter(([templates, _loading]) => Boolean(templates)), map(([templates, _loading]) => templates)), this.store.pipe(select(getConsentsValue)));
    }
    /**
     * Returns the consents loading flag
     */
    getConsentsResultLoading() {
        return this.store.pipe(select(getConsentsLoading));
    }
    /**
     * Returns the consents success flag
     */
    getConsentsResultSuccess() {
        return this.store.pipe(select(getConsentsSuccess));
    }
    /**
     * Returns the consents error flag
     */
    getConsentsResultError() {
        return this.store.pipe(select(getConsentsError));
    }
    /**
     * Resets the processing state for consent retrieval
     */
    resetConsentsProcessState() {
        this.store.dispatch(new ResetLoadUserConsents());
    }
    /**
     * Returns the registered consent for the given template ID.
     *
     * As a side-effect, the method will call `getConsents(true)` to load the templates if those are not present.
     *
     * @param templateId a template ID by which to filter the registered templates.
     */
    getConsent(templateId) {
        return this.authService.isUserLoggedIn().pipe(filter(Boolean), tap(() => this.getConsents(true)), switchMap(() => this.store.pipe(select(getConsentByTemplateId(templateId)))), filter((template) => Boolean(template)), map((template) => template.currentConsent));
    }
    /**
     * Returns `true` if the consent is truthy and if `consentWithdrawnDate` doesn't exist.
     * Otherwise, `false` is returned.
     *
     * @param consent to check
     */
    isConsentGiven(consent) {
        return (Boolean(consent) &&
            Boolean(consent.consentGivenDate) &&
            !Boolean(consent.consentWithdrawnDate));
    }
    /**
     * Returns `true` if the consent is either falsy or if `consentWithdrawnDate` is present.
     * Otherwise, `false` is returned.
     *
     * @param consent to check
     */
    isConsentWithdrawn(consent) {
        if (Boolean(consent)) {
            return Boolean(consent.consentWithdrawnDate);
        }
        return true;
    }
    /**
     * Give consent for specified consent template ID and version.
     * @param consentTemplateId a template ID for which to give a consent
     * @param consentTemplateVersion a template version for which to give a consent
     */
    giveConsent(consentTemplateId, consentTemplateVersion) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new GiveUserConsent({
                userId,
                consentTemplateId,
                consentTemplateVersion,
            }));
        });
    }
    /**
     * Returns the give consent process loading flag
     */
    getGiveConsentResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(GIVE_CONSENT_PROCESS_ID)));
    }
    /**
     * Returns the give consent process success flag
     */
    getGiveConsentResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(GIVE_CONSENT_PROCESS_ID)));
    }
    /**
     * Returns the give consent process error flag
     */
    getGiveConsentResultError() {
        return this.store.pipe(select(getProcessErrorFactory(GIVE_CONSENT_PROCESS_ID)));
    }
    /**
     * Resents the give consent process flags
     */
    resetGiveConsentProcessState() {
        return this.store.dispatch(new ResetGiveUserConsentProcess());
    }
    /**
     * Withdraw consent for the given `consentCode`
     * @param consentCode for which to withdraw the consent
     */
    withdrawConsent(consentCode) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new WithdrawUserConsent({
                userId,
                consentCode,
            }));
        });
    }
    /**
     * Returns the withdraw consent process loading flag
     */
    getWithdrawConsentResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(WITHDRAW_CONSENT_PROCESS_ID)));
    }
    /**
     * Returns the withdraw consent process success flag
     */
    getWithdrawConsentResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(WITHDRAW_CONSENT_PROCESS_ID)));
    }
    /**
     * Returns the withdraw consent process error flag
     */
    getWithdrawConsentResultError() {
        return this.store.pipe(select(getProcessErrorFactory(WITHDRAW_CONSENT_PROCESS_ID)));
    }
    /**
     * Resets the process flags for withdraw consent
     */
    resetWithdrawConsentProcessState() {
        return this.store.dispatch(new ResetWithdrawUserConsentProcess());
    }
    /**
     * Filters the provided `templateList`' templates by hiding the template IDs specified in `hideTemplateIds`.
     * If the `hideTemplateIds` is empty, the provided `templateList` is returned.
     *
     * @param templateList a list of consent templates to filter
     * @param hideTemplateIds template IDs to hide
     */
    filterConsentTemplates(templateList, hideTemplateIds = []) {
        if (hideTemplateIds.length === 0) {
            return templateList;
        }
        const updatedTemplateList = [];
        for (const template of templateList) {
            const show = !hideTemplateIds.includes(template.id);
            if (show) {
                updatedTemplateList.push(template);
            }
        }
        return updatedTemplateList;
    }
};
UserConsentService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
UserConsentService.ɵprov = ɵɵdefineInjectable({ factory: function UserConsentService_Factory() { return new UserConsentService(ɵɵinject(Store), ɵɵinject(AuthService)); }, token: UserConsentService, providedIn: "root" });
UserConsentService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UserConsentService);

let AnonymousConsentTemplatesConnector = class AnonymousConsentTemplatesConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    loadAnonymousConsentTemplates() {
        return this.adapter.loadAnonymousConsentTemplates();
    }
};
AnonymousConsentTemplatesConnector.ctorParameters = () => [
    { type: AnonymousConsentTemplatesAdapter }
];
AnonymousConsentTemplatesConnector.ɵprov = ɵɵdefineInjectable({ factory: function AnonymousConsentTemplatesConnector_Factory() { return new AnonymousConsentTemplatesConnector(ɵɵinject(AnonymousConsentTemplatesAdapter)); }, token: AnonymousConsentTemplatesConnector, providedIn: "root" });
AnonymousConsentTemplatesConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AnonymousConsentTemplatesConnector);

let AnonymousConsentsEffects = class AnonymousConsentsEffects {
    constructor(actions$, anonymousConsentTemplatesConnector, authService, anonymousConsentsConfig, anonymousConsentService, userConsentService) {
        this.actions$ = actions$;
        this.anonymousConsentTemplatesConnector = anonymousConsentTemplatesConnector;
        this.authService = authService;
        this.anonymousConsentsConfig = anonymousConsentsConfig;
        this.anonymousConsentService = anonymousConsentService;
        this.userConsentService = userConsentService;
        this.loadAnonymousConsentTemplates$ = this.actions$.pipe(ofType(LOAD_ANONYMOUS_CONSENT_TEMPLATES), concatMap(() => this.anonymousConsentTemplatesConnector
            .loadAnonymousConsentTemplates()
            .pipe(withLatestFrom(this.anonymousConsentService.getTemplates()), mergeMap(([newConsentTemplates, currentConsentTemplates]) => {
            let updated = false;
            if (Boolean(currentConsentTemplates) &&
                currentConsentTemplates.length !== 0) {
                updated = this.anonymousConsentService.detectUpdatedTemplates(currentConsentTemplates, newConsentTemplates);
            }
            return [
                new LoadAnonymousConsentTemplatesSuccess(newConsentTemplates),
                new ToggleAnonymousConsentTemplatesUpdated(updated),
            ];
        }), catchError((error) => of(new LoadAnonymousConsentTemplatesFail(makeErrorSerializable(error)))))));
        this.transferAnonymousConsentsToUser$ = this.actions$.pipe(ofType(LOAD_USER_TOKEN_SUCCESS), filter(() => Boolean(this.anonymousConsentsConfig.anonymousConsents)), withLatestFrom(this.actions$.pipe(ofType(REGISTER_USER_SUCCESS))), filter(([, registerAction]) => Boolean(registerAction)), switchMap(() => this.anonymousConsentService.getConsents().pipe(withLatestFrom(this.authService.getOccUserId(), this.anonymousConsentService.getTemplates(), this.authService.isUserLoggedIn()), filter(([, , , loggedIn]) => loggedIn), concatMap(([consents, userId, templates, _loggedIn]) => {
            const actions = [];
            for (const consent of consents) {
                if (this.anonymousConsentService.isConsentGiven(consent) &&
                    (!this.anonymousConsentsConfig.anonymousConsents
                        .requiredConsents ||
                        !this.anonymousConsentsConfig.anonymousConsents.requiredConsents.includes(consent.templateCode))) {
                    for (const template of templates) {
                        if (template.id === consent.templateCode) {
                            actions.push(new TransferAnonymousConsent({
                                userId,
                                consentTemplateId: template.id,
                                consentTemplateVersion: template.version,
                            }));
                            break;
                        }
                    }
                }
            }
            if (actions.length > 0) {
                return actions;
            }
            return EMPTY;
        }))));
        this.giveRequiredConsentsToUser$ = this.actions$.pipe(ofType(LOAD_USER_TOKEN_SUCCESS), filter((action) => Boolean(this.anonymousConsentsConfig.anonymousConsents) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents.requiredConsents) &&
            Boolean(action)), concatMap(() => this.userConsentService.getConsentsResultSuccess().pipe(withLatestFrom(this.authService.getOccUserId(), this.userConsentService.getConsents(), this.authService.isUserLoggedIn()), filter(([, , , loggedIn]) => loggedIn), tap(([loaded, _userId, _templates, _loggedIn]) => {
            if (!loaded) {
                this.userConsentService.loadConsents();
            }
        }), map(([_loaded, userId, templates, _loggedIn]) => {
            return { userId, templates };
        }), concatMap(({ userId, templates }) => {
            const actions = [];
            for (const template of templates) {
                if (this.userConsentService.isConsentWithdrawn(template.currentConsent) &&
                    this.anonymousConsentsConfig.anonymousConsents.requiredConsents.includes(template.id)) {
                    actions.push(new GiveUserConsent({
                        userId,
                        consentTemplateId: template.id,
                        consentTemplateVersion: template.version,
                    }));
                }
            }
            if (actions.length > 0) {
                return actions;
            }
            return EMPTY;
        }))));
    }
};
AnonymousConsentsEffects.ctorParameters = () => [
    { type: Actions },
    { type: AnonymousConsentTemplatesConnector },
    { type: AuthService },
    { type: AnonymousConsentsConfig },
    { type: AnonymousConsentsService },
    { type: UserConsentService }
];
__decorate([
    Effect()
], AnonymousConsentsEffects.prototype, "loadAnonymousConsentTemplates$", void 0);
__decorate([
    Effect()
], AnonymousConsentsEffects.prototype, "transferAnonymousConsentsToUser$", void 0);
__decorate([
    Effect()
], AnonymousConsentsEffects.prototype, "giveRequiredConsentsToUser$", void 0);
AnonymousConsentsEffects = __decorate([
    Injectable()
], AnonymousConsentsEffects);

const effects$1 = [AnonymousConsentsEffects];

let SiteConnector = class SiteConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    getLanguages() {
        return this.adapter.loadLanguages();
    }
    getCurrencies() {
        return this.adapter.loadCurrencies();
    }
    getCountries(type) {
        return this.adapter.loadCountries(type);
    }
    getRegions(countryIsoCode) {
        return this.adapter.loadRegions(countryIsoCode);
    }
    getBaseSite() {
        return this.adapter.loadBaseSite();
    }
};
SiteConnector.ctorParameters = () => [
    { type: SiteAdapter }
];
SiteConnector.ɵprov = ɵɵdefineInjectable({ factory: function SiteConnector_Factory() { return new SiteConnector(ɵɵinject(SiteAdapter)); }, token: SiteConnector, providedIn: "root" });
SiteConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SiteConnector);

class ContextServiceMap {
}
function serviceMapFactory() {
    return {
        [LANGUAGE_CONTEXT_ID]: LanguageService,
        [CURRENCY_CONTEXT_ID]: CurrencyService,
        [BASE_SITE_CONTEXT_ID]: BaseSiteService,
    };
}
const contextServiceMapProvider = {
    provide: ContextServiceMap,
    useFactory: serviceMapFactory,
};

function baseSiteConfigValidator(config) {
    if (getContextParameterDefault(config, BASE_SITE_CONTEXT_ID) === undefined) {
        return 'Please configure context.parameters.baseSite before using storefront library!';
    }
}

function defaultSiteContextConfigFactory() {
    return {
        context: {
            [LANGUAGE_CONTEXT_ID]: [
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
            [CURRENCY_CONTEXT_ID]: [
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
    };
}

/**
 * Provides support for CONFIG_INITIALIZERS
 */
let ConfigInitializerService = class ConfigInitializerService {
    constructor(config, initializerGuard) {
        this.config = config;
        this.initializerGuard = initializerGuard;
        this.ongoingScopes$ = new BehaviorSubject(undefined);
    }
    /**
     * Returns true if config is stable, i.e. all CONFIG_INITIALIZERS resolved correctly
     */
    get isStable() {
        return (!this.initializerGuard ||
            (this.ongoingScopes$.value && this.ongoingScopes$.value.length === 0));
    }
    /**
     * Recommended way to get config for code that can run before app will finish
     * initialization (APP_INITIALIZERS, selected service constructors)
     *
     * Used without parameters waits for the whole config to become stable
     *
     * Parameters allow to describe which part of the config should be stable using
     * string describing config part, e.g.:
     * 'siteContext', 'siteContext.language', etc.
     *
     * @param scopes String describing parts of the config we want to be sure are stable
     */
    getStableConfig(...scopes) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isStable) {
                return this.config;
            }
            return this.ongoingScopes$
                .pipe(filter((ongoingScopes) => ongoingScopes && this.areReady(scopes, ongoingScopes)), take(1), mapTo(this.config))
                .toPromise();
        });
    }
    /**
     * Removes provided scopes from currently ongoingScopes
     *
     * @param scopes
     */
    finishScopes(scopes) {
        const newScopes = [...this.ongoingScopes$.value];
        for (const scope of scopes) {
            newScopes.splice(newScopes.indexOf(scope), 1);
        }
        this.ongoingScopes$.next(newScopes);
    }
    /**
     * Return true if provided scopes are not part of ongoingScopes
     *
     * @param scopes
     * @param ongoingScopes
     */
    areReady(scopes, ongoingScopes) {
        if (!scopes.length) {
            return !ongoingScopes.length;
        }
        for (const scope of scopes) {
            for (const ongoingScope of ongoingScopes) {
                if (this.scopesOverlap(scope, ongoingScope)) {
                    return false;
                }
            }
        }
        return true;
    }
    /**
     * Check if two scopes overlap.
     *
     * Example of scopes that overlap:
     * 'test' and 'test', 'test.a' and 'test', 'test' and 'test.a'
     *
     * Example of scopes that do not overlap:
     * 'test' and 'testA', 'test.a' and 'test.b', 'test.nested' and 'test.nest'
     *
     * @param a ScopeA
     * @param b ScopeB
     */
    scopesOverlap(a, b) {
        if (b.length > a.length) {
            [a, b] = [b, a];
        }
        return a.startsWith(b) && (a[b.length] || '.') === '.';
    }
    /**
     * @internal
     *
     * Not a part of a public API, used by APP_INITIALIZER to initialize all provided CONFIG_INITIALIZERS
     *
     */
    initialize(initializers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.ongoingScopes$.value) {
                // guard for double initialization
                return;
            }
            const ongoingScopes = [];
            const asyncConfigs = [];
            for (const initializer of initializers || []) {
                if (!initializer) {
                    continue;
                }
                if (!initializer.scopes || !initializer.scopes.length) {
                    throw new Error('CONFIG_INITIALIZER should provide scope!');
                }
                if (isDevMode() && !this.areReady(initializer.scopes, ongoingScopes)) {
                    console.warn('More than one CONFIG_INITIALIZER is initializing the same config scope.');
                }
                ongoingScopes.push(...initializer.scopes);
                asyncConfigs.push((() => __awaiter(this, void 0, void 0, function* () {
                    deepMerge(this.config, yield initializer.configFactory());
                    this.finishScopes(initializer.scopes);
                }))());
            }
            this.ongoingScopes$.next(ongoingScopes);
            if (asyncConfigs.length) {
                yield Promise.all(asyncConfigs);
            }
        });
    }
};
ConfigInitializerService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [Config,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CONFIG_INITIALIZER_FORROOT_GUARD,] }] }
];
ConfigInitializerService.ɵprov = ɵɵdefineInjectable({ factory: function ConfigInitializerService_Factory() { return new ConfigInitializerService(ɵɵinject(Config), ɵɵinject(CONFIG_INITIALIZER_FORROOT_GUARD, 8)); }, token: ConfigInitializerService, providedIn: "root" });
ConfigInitializerService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(0, Inject(Config)),
    __param(1, Optional()),
    __param(1, Inject(CONFIG_INITIALIZER_FORROOT_GUARD))
], ConfigInitializerService);

function initializeContext(baseSiteService, langService, currService, configInit) {
    return () => {
        configInit.getStableConfig('context').then(() => {
            baseSiteService.initialize();
            langService.initialize();
            currService.initialize();
        });
    };
}
const contextServiceProviders = [
    BaseSiteService,
    LanguageService,
    CurrencyService,
    {
        provide: APP_INITIALIZER,
        useFactory: initializeContext,
        deps: [
            BaseSiteService,
            LanguageService,
            CurrencyService,
            ConfigInitializerService,
        ],
        multi: true,
    },
];

let SiteContextParamsService = class SiteContextParamsService {
    constructor(config, injector, serviceMap) {
        this.config = config;
        this.injector = injector;
        this.serviceMap = serviceMap;
    }
    getContextParameters() {
        if (this.config.context) {
            return Object.keys(this.config.context).filter((param) => param !== 'urlParameters');
        }
        return [];
    }
    getUrlEncodingParameters() {
        return (this.config.context && this.config.context.urlParameters) || [];
    }
    getParamValues(param) {
        return getContextParameterValues(this.config, param);
    }
    getParamDefaultValue(param) {
        return getContextParameterDefault(this.config, param);
    }
    getSiteContextService(param) {
        if (this.serviceMap[param]) {
            return this.injector.get(this.serviceMap[param], null);
        }
    }
    getValue(param) {
        let value;
        const service = this.getSiteContextService(param);
        if (service) {
            service
                .getActive()
                .subscribe((val) => (value = val))
                .unsubscribe();
        }
        return value !== undefined ? value : this.getParamDefaultValue(param);
    }
    setValue(param, value) {
        const service = this.getSiteContextService(param);
        if (service) {
            service.setActive(value);
        }
    }
    /**
     * Get active values for all provided context parameters
     *
     * @param params Context parameters
     *
     * @returns Observable emitting array of all passed active context values
     */
    getValues(params) {
        if (params.length === 0) {
            return of([]);
        }
        return combineLatest(params.map((param) => this.getSiteContextService(param)
            .getActive()
            .pipe(distinctUntilChanged()))).pipe(filter((value) => value.every((param) => !!param)));
    }
};
SiteContextParamsService.ctorParameters = () => [
    { type: SiteContextConfig },
    { type: Injector },
    { type: ContextServiceMap }
];
SiteContextParamsService = __decorate([
    Injectable()
], SiteContextParamsService);

const UrlSplit = /(^[^#?]*)(.*)/; // used to split url into path and query/fragment parts
let SiteContextUrlSerializer = class SiteContextUrlSerializer extends DefaultUrlSerializer {
    constructor(siteContextParams) {
        super();
        this.siteContextParams = siteContextParams;
    }
    get urlEncodingParameters() {
        return this.siteContextParams.getUrlEncodingParameters();
    }
    get hasContextInRoutes() {
        return this.urlEncodingParameters.length > 0;
    }
    parse(url) {
        if (this.hasContextInRoutes) {
            const urlWithParams = this.urlExtractContextParameters(url);
            const parsed = super.parse(urlWithParams.url);
            this.urlTreeIncludeContextParameters(parsed, urlWithParams.params);
            return parsed;
        }
        else {
            return super.parse(url);
        }
    }
    urlExtractContextParameters(url) {
        const [, urlPart, queryPart] = url.match(UrlSplit);
        const segments = urlPart.split('/');
        if (segments[0] === '') {
            segments.shift();
        }
        const params = {};
        let paramId = 0;
        let segmentId = 0;
        while (paramId < this.urlEncodingParameters.length &&
            segmentId < segments.length) {
            const paramName = this.urlEncodingParameters[paramId];
            const paramValues = this.siteContextParams.getParamValues(paramName);
            if (paramValues.includes(segments[segmentId])) {
                params[paramName] = segments[segmentId];
                segmentId++;
            }
            paramId++;
        }
        url = segments.slice(Object.keys(params).length).join('/') + queryPart;
        return { url, params };
    }
    urlTreeIncludeContextParameters(urlTree, params) {
        urlTree.siteContext = params;
    }
    serialize(tree) {
        const params = this.urlTreeExtractContextParameters(tree);
        const url = super.serialize(tree);
        const serialized = this.urlIncludeContextParameters(url, params);
        return serialized;
    }
    urlTreeExtractContextParameters(urlTree) {
        return urlTree.siteContext ? urlTree.siteContext : {};
    }
    urlIncludeContextParameters(url, params) {
        const contextRoutePart = this.urlEncodingParameters
            .map((param) => {
            return params[param]
                ? params[param]
                : this.siteContextParams.getValue(param);
        })
            .join('/');
        return contextRoutePart + url;
    }
};
SiteContextUrlSerializer.ctorParameters = () => [
    { type: SiteContextParamsService }
];
SiteContextUrlSerializer = __decorate([
    Injectable()
], SiteContextUrlSerializer);

let SiteContextRoutesHandler = class SiteContextRoutesHandler {
    constructor(siteContextParams, serializer, injector) {
        this.siteContextParams = siteContextParams;
        this.serializer = serializer;
        this.injector = injector;
        this.subscription = new Subscription();
        this.contextValues = {};
        this.isNavigating = false;
    }
    init() {
        this.router = this.injector.get(Router);
        this.location = this.injector.get(Location);
        const routingParams = this.siteContextParams.getUrlEncodingParameters();
        if (routingParams.length) {
            this.setContextParamsFromRoute(this.router.url);
            this.subscribeChanges(routingParams);
            this.subscribeRouting();
        }
    }
    subscribeChanges(params) {
        params.forEach((param) => {
            const service = this.siteContextParams.getSiteContextService(param);
            if (service) {
                this.subscription.add(service.getActive().subscribe((value) => {
                    if (!this.isNavigating &&
                        this.contextValues[param] &&
                        this.contextValues[param] !== value) {
                        const parsed = this.router.parseUrl(this.router.url);
                        const serialized = this.router.serializeUrl(parsed);
                        this.location.replaceState(serialized);
                    }
                    this.contextValues[param] = value;
                }));
            }
        });
    }
    subscribeRouting() {
        this.subscription.add(this.router.events
            .pipe(filter((event) => event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationError ||
            event instanceof NavigationCancel))
            .subscribe((event) => {
            this.isNavigating = event instanceof NavigationStart;
            if (this.isNavigating) {
                this.setContextParamsFromRoute(event.url);
            }
        }));
    }
    setContextParamsFromRoute(url) {
        const { params } = this.serializer.urlExtractContextParameters(url);
        Object.keys(params).forEach((param) => this.siteContextParams.setValue(param, params[param]));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
SiteContextRoutesHandler.ctorParameters = () => [
    { type: SiteContextParamsService },
    { type: SiteContextUrlSerializer },
    { type: Injector }
];
SiteContextRoutesHandler.ɵprov = ɵɵdefineInjectable({ factory: function SiteContextRoutesHandler_Factory() { return new SiteContextRoutesHandler(ɵɵinject(SiteContextParamsService), ɵɵinject(SiteContextUrlSerializer), ɵɵinject(INJECTOR)); }, token: SiteContextRoutesHandler, providedIn: "root" });
SiteContextRoutesHandler = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SiteContextRoutesHandler);

// functions below should not be exposed in public API:
function initSiteContextRoutesHandler(siteContextRoutesHandler, configInit) {
    return () => {
        configInit.getStableConfig('context').then(() => {
            siteContextRoutesHandler.init();
        });
    };
}
const siteContextParamsProviders = [
    SiteContextParamsService,
    SiteContextUrlSerializer,
    { provide: UrlSerializer, useExisting: SiteContextUrlSerializer },
    {
        provide: APP_INITIALIZER,
        useFactory: initSiteContextRoutesHandler,
        deps: [SiteContextRoutesHandler, ConfigInitializerService],
        multi: true,
    },
];

let LanguagesEffects = class LanguagesEffects {
    constructor(actions$, siteConnector, winRef) {
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.winRef = winRef;
        this.loadLanguages$ = this.actions$.pipe(ofType(LOAD_LANGUAGES), exhaustMap(() => {
            return this.siteConnector.getLanguages().pipe(map((languages) => new LoadLanguagesSuccess(languages)), catchError((error) => of(new LoadLanguagesFail(makeErrorSerializable(error)))));
        }));
        this.activateLanguage$ = this.actions$.pipe(ofType(SET_ACTIVE_LANGUAGE), tap((action) => {
            if (this.winRef.sessionStorage) {
                this.winRef.sessionStorage.setItem('language', action.payload);
            }
        }), map(() => new LanguageChange()));
    }
};
LanguagesEffects.ctorParameters = () => [
    { type: Actions },
    { type: SiteConnector },
    { type: WindowRef }
];
__decorate([
    Effect()
], LanguagesEffects.prototype, "loadLanguages$", void 0);
__decorate([
    Effect()
], LanguagesEffects.prototype, "activateLanguage$", void 0);
LanguagesEffects = __decorate([
    Injectable()
], LanguagesEffects);

let CurrenciesEffects = class CurrenciesEffects {
    constructor(actions$, siteConnector, winRef) {
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.winRef = winRef;
        this.loadCurrencies$ = this.actions$.pipe(ofType(LOAD_CURRENCIES), exhaustMap(() => {
            return this.siteConnector.getCurrencies().pipe(map((currencies) => new LoadCurrenciesSuccess(currencies)), catchError((error) => of(new LoadCurrenciesFail(makeErrorSerializable(error)))));
        }));
        this.activateCurrency$ = this.actions$.pipe(ofType(SET_ACTIVE_CURRENCY), tap((action) => {
            if (this.winRef.sessionStorage) {
                this.winRef.sessionStorage.setItem('currency', action.payload);
            }
        }), map(() => new CurrencyChange()));
    }
};
CurrenciesEffects.ctorParameters = () => [
    { type: Actions },
    { type: SiteConnector },
    { type: WindowRef }
];
__decorate([
    Effect()
], CurrenciesEffects.prototype, "loadCurrencies$", void 0);
__decorate([
    Effect()
], CurrenciesEffects.prototype, "activateCurrency$", void 0);
CurrenciesEffects = __decorate([
    Injectable()
], CurrenciesEffects);

let BaseSiteEffects = class BaseSiteEffects {
    constructor(actions$, siteConnector) {
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.loadBaseSite$ = this.actions$.pipe(ofType(LOAD_BASE_SITE), exhaustMap(() => {
            return this.siteConnector.getBaseSite().pipe(map((baseSite) => new LoadBaseSiteSuccess(baseSite)), catchError((error) => of(new LoadBaseSiteFail(makeErrorSerializable(error)))));
        }));
    }
};
BaseSiteEffects.ctorParameters = () => [
    { type: Actions },
    { type: SiteConnector }
];
__decorate([
    Effect()
], BaseSiteEffects.prototype, "loadBaseSite$", void 0);
BaseSiteEffects = __decorate([
    Injectable()
], BaseSiteEffects);

const effects$2 = [
    LanguagesEffects,
    CurrenciesEffects,
    BaseSiteEffects,
];

const initialState$1 = {
    details: {},
    activeSite: '',
};
function reducer$1(state = initialState$1, action) {
    switch (action.type) {
        case LOAD_BASE_SITE_SUCCESS: {
            return Object.assign(Object.assign({}, state), { details: action.payload });
        }
        case SET_ACTIVE_BASE_SITE: {
            return Object.assign(Object.assign({}, state), { activeSite: action.payload });
        }
    }
    return state;
}

const initialState$2 = {
    entities: null,
    activeCurrency: null,
};
function reducer$2(state = initialState$2, action) {
    switch (action.type) {
        case LOAD_CURRENCIES_SUCCESS: {
            const currencies = action.payload;
            const entities = currencies.reduce((currEntities, currency) => {
                return Object.assign(Object.assign({}, currEntities), { [currency.isocode]: currency });
            }, Object.assign({}, state.entities));
            return Object.assign(Object.assign({}, state), { entities });
        }
        case SET_ACTIVE_CURRENCY: {
            const isocode = action.payload;
            return Object.assign(Object.assign({}, state), { activeCurrency: isocode });
        }
    }
    return state;
}

const initialState$3 = {
    entities: null,
    activeLanguage: null,
};
function reducer$3(state = initialState$3, action) {
    switch (action.type) {
        case LOAD_LANGUAGES_SUCCESS: {
            const languages = action.payload;
            const entities = languages.reduce((langEntities, language) => {
                return Object.assign(Object.assign({}, langEntities), { [language.isocode]: language });
            }, Object.assign({}, state.entities));
            return Object.assign(Object.assign({}, state), { entities });
        }
        case SET_ACTIVE_LANGUAGE: {
            const isocode = action.payload;
            return Object.assign(Object.assign({}, state), { activeLanguage: isocode });
        }
    }
    return state;
}

function getReducers$1() {
    return {
        languages: reducer$3,
        currencies: reducer$2,
        baseSite: reducer$1,
    };
}
const reducerToken$1 = new InjectionToken('SiteContextReducers');
const reducerProvider$1 = {
    provide: reducerToken$1,
    useFactory: getReducers$1,
};

function siteContextStoreConfigFactory() {
    // if we want to reuse SITE_CONTEXT_FEATURE const in config, we have to use factory instead of plain object
    const config = {
        state: {
            ssrTransfer: {
                keys: { [SITE_CONTEXT_FEATURE]: StateTransferType.TRANSFER_STATE },
            },
        },
    };
    return config;
}
let SiteContextStoreModule = class SiteContextStoreModule {
};
SiteContextStoreModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            HttpClientModule,
            StoreModule.forFeature(SITE_CONTEXT_FEATURE, reducerToken$1),
            EffectsModule.forFeature(effects$2),
        ],
        providers: [
            provideDefaultConfigFactory(siteContextStoreConfigFactory),
            reducerProvider$1,
        ],
    })
], SiteContextStoreModule);

var SiteContextModule_1;
// @dynamic
let SiteContextModule = SiteContextModule_1 = class SiteContextModule {
    static forRoot() {
        return {
            ngModule: SiteContextModule_1,
            providers: [
                provideDefaultConfigFactory(defaultSiteContextConfigFactory),
                contextServiceMapProvider,
                ...contextServiceProviders,
                ...siteContextParamsProviders,
                { provide: SiteContextConfig, useExisting: Config },
                provideConfigValidator(baseSiteConfigValidator),
            ],
        };
    }
};
SiteContextModule = SiteContextModule_1 = __decorate([
    NgModule({
        imports: [StateModule, SiteContextStoreModule],
    })
], SiteContextModule);

const initialState$4 = false;
function reducer$4(state = initialState$4, action) {
    switch (action.type) {
        case TOGGLE_ANONYMOUS_CONSENTS_BANNER_DISMISSED: {
            return action.dismissed;
        }
    }
    return state;
}

const initialState$5 = false;
function reducer$5(state = initialState$5, action) {
    switch (action.type) {
        case TOGGLE_ANONYMOUS_CONSENT_TEMPLATES_UPDATED: {
            return action.updated;
        }
    }
    return state;
}

const initialState$6 = [];
function toggleConsentStatus(consents, templateCode, status) {
    if (!consents) {
        return [];
    }
    return consents.map((consent) => {
        if (consent.templateCode === templateCode) {
            consent = Object.assign(Object.assign({}, consent), { consentState: status });
        }
        return consent;
    });
}
function reducer$6(state = initialState$6, action) {
    switch (action.type) {
        case GIVE_ANONYMOUS_CONSENT: {
            return toggleConsentStatus(state, action.templateCode, ANONYMOUS_CONSENT_STATUS.GIVEN);
        }
        case WITHDRAW_ANONYMOUS_CONSENT: {
            return toggleConsentStatus(state, action.templateCode, ANONYMOUS_CONSENT_STATUS.WITHDRAWN);
        }
        case SET_ANONYMOUS_CONSENTS: {
            return action.payload;
        }
    }
    return state;
}

function getReducers$2() {
    return {
        templates: loaderReducer(ANONYMOUS_CONSENTS),
        consents: reducer$6,
        ui: combineReducers({
            bannerDismissed: reducer$4,
            updated: reducer$5,
        }),
    };
}
const reducerToken$2 = new InjectionToken('AnonymousConsentsReducers');
const reducerProvider$2 = {
    provide: reducerToken$2,
    useFactory: getReducers$2,
};
function clearAnonymousConsentTemplates(reducer) {
    return function (state, action) {
        if (action.type === LOGOUT ||
            action.type === LANGUAGE_CHANGE) {
            state = Object.assign(Object.assign({}, state), { templates: undefined });
        }
        return reducer(state, action);
    };
}
const metaReducers$1 = [
    clearAnonymousConsentTemplates,
];

function anonymousConsentsStoreConfigFactory() {
    const config = {
        state: {
            storageSync: {
                keys: {
                    [ANONYMOUS_CONSENTS_STORE_FEATURE]: StorageSyncType.LOCAL_STORAGE,
                },
            },
        },
    };
    return config;
}
let AnonymousConsentsStoreModule = class AnonymousConsentsStoreModule {
};
AnonymousConsentsStoreModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            StateModule,
            StoreModule.forFeature(ANONYMOUS_CONSENTS_STORE_FEATURE, reducerToken$2, {
                metaReducers: metaReducers$1,
            }),
            EffectsModule.forFeature(effects$1),
        ],
        providers: [
            provideDefaultConfigFactory(anonymousConsentsStoreConfigFactory),
            reducerProvider$2,
        ],
    })
], AnonymousConsentsStoreModule);

var AnonymousConsentsModule_1;
let AnonymousConsentsModule = AnonymousConsentsModule_1 = class AnonymousConsentsModule {
    static forRoot() {
        return {
            ngModule: AnonymousConsentsModule_1,
            providers: [
                ...interceptors$1,
                AnonymousConsentsService,
                { provide: AnonymousConsentsConfig, useExisting: Config },
                provideDefaultConfig(defaultAnonymousConsentsConfig),
            ],
        };
    }
};
AnonymousConsentsModule = AnonymousConsentsModule_1 = __decorate([
    NgModule({
        imports: [AnonymousConsentsStoreModule],
    })
], AnonymousConsentsModule);

const defaultAsmConfig = {
    asm: {
        agentSessionTimer: {
            startingDelayInSeconds: 600,
        },
        customerSearch: {
            maxResults: 20,
        },
    },
};

const ASM_FEATURE = 'asm';
const CUSTOMER_SEARCH_DATA = '[asm] Customer search data';
const CSAGENT_TOKEN_DATA = '[Auth] Customer Support Agent Token Data';

let AsmConnector = class AsmConnector {
    constructor(asmAdapter) {
        this.asmAdapter = asmAdapter;
    }
    customerSearch(options) {
        return this.asmAdapter.customerSearch(options);
    }
};
AsmConnector.ctorParameters = () => [
    { type: AsmAdapter }
];
AsmConnector.ɵprov = ɵɵdefineInjectable({ factory: function AsmConnector_Factory() { return new AsmConnector(ɵɵinject(AsmAdapter)); }, token: AsmConnector, providedIn: "root" });
AsmConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AsmConnector);

const ASM_UI_UPDATE = '[Asm] UI Update';
class AsmUiUpdate {
    constructor(payload) {
        this.payload = payload;
        this.type = ASM_UI_UPDATE;
    }
}

const CUSTOMER_SEARCH = '[Asm] Customer Search';
const CUSTOMER_SEARCH_FAIL = '[Asm] Customer Search Fail';
const CUSTOMER_SEARCH_SUCCESS = '[Asm] Customer Search Success';
const CUSTOMER_SEARCH_RESET = '[Asm] Customer Search Reset';
class CustomerSearch extends LoaderLoadAction {
    constructor(payload) {
        super(CUSTOMER_SEARCH_DATA);
        this.payload = payload;
        this.type = CUSTOMER_SEARCH;
    }
}
class CustomerSearchFail extends LoaderFailAction {
    constructor(payload) {
        super(CUSTOMER_SEARCH_DATA);
        this.payload = payload;
        this.type = CUSTOMER_SEARCH_FAIL;
    }
}
class CustomerSearchSuccess extends LoaderSuccessAction {
    constructor(payload) {
        super(CUSTOMER_SEARCH_DATA);
        this.payload = payload;
        this.type = CUSTOMER_SEARCH_SUCCESS;
    }
}
class CustomerSearchReset extends LoaderResetAction {
    constructor() {
        super(CUSTOMER_SEARCH_DATA);
        this.type = CUSTOMER_SEARCH_RESET;
    }
}

const LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN = '[Auth] Load Customer Service Agent Token';
const LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN_FAIL = '[Auth] Load Customer Service Agent Token Fail';
const LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN_SUCCESS = '[Auth] Load Customer Service Agent Token Success';
class LoadCustomerSupportAgentToken extends LoaderLoadAction {
    constructor(payload) {
        super(CSAGENT_TOKEN_DATA);
        this.payload = payload;
        this.type = LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN;
    }
}
class LoadCustomerSupportAgentTokenFail extends LoaderFailAction {
    constructor(payload) {
        super(CSAGENT_TOKEN_DATA);
        this.payload = payload;
        this.type = LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN_FAIL;
    }
}
class LoadCustomerSupportAgentTokenSuccess extends LoaderSuccessAction {
    constructor(payload) {
        super(CSAGENT_TOKEN_DATA);
        this.payload = payload;
        this.type = LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN_SUCCESS;
    }
}
class LogoutCustomerSupportAgent {
    constructor() {
        this.type = LOGOUT_CUSTOMER_SUPPORT_AGENT;
    }
}



var customerGroup_actions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ASM_UI_UPDATE: ASM_UI_UPDATE,
    AsmUiUpdate: AsmUiUpdate,
    CUSTOMER_SEARCH: CUSTOMER_SEARCH,
    CUSTOMER_SEARCH_FAIL: CUSTOMER_SEARCH_FAIL,
    CUSTOMER_SEARCH_SUCCESS: CUSTOMER_SEARCH_SUCCESS,
    CUSTOMER_SEARCH_RESET: CUSTOMER_SEARCH_RESET,
    CustomerSearch: CustomerSearch,
    CustomerSearchFail: CustomerSearchFail,
    CustomerSearchSuccess: CustomerSearchSuccess,
    CustomerSearchReset: CustomerSearchReset,
    LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN: LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN,
    LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN_FAIL: LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN_FAIL,
    LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN_SUCCESS: LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN_SUCCESS,
    LoadCustomerSupportAgentToken: LoadCustomerSupportAgentToken,
    LoadCustomerSupportAgentTokenFail: LoadCustomerSupportAgentTokenFail,
    LoadCustomerSupportAgentTokenSuccess: LoadCustomerSupportAgentTokenSuccess,
    LogoutCustomerSupportAgent: LogoutCustomerSupportAgent
});

let CustomerEffects = class CustomerEffects {
    constructor(actions$, asmConnector) {
        this.actions$ = actions$;
        this.asmConnector = asmConnector;
        this.customerSearch$ = this.actions$.pipe(ofType(CUSTOMER_SEARCH), map((action) => action.payload), switchMap((options) => this.asmConnector.customerSearch(options).pipe(map((customerSearchResults) => {
            return new CustomerSearchSuccess(customerSearchResults);
        }), catchError((error) => of(new CustomerSearchFail(makeErrorSerializable(error)))))));
    }
};
CustomerEffects.ctorParameters = () => [
    { type: Actions },
    { type: AsmConnector }
];
__decorate([
    Effect()
], CustomerEffects.prototype, "customerSearch$", void 0);
CustomerEffects = __decorate([
    Injectable()
], CustomerEffects);

let CustomerSupportAgentTokenEffects = class CustomerSupportAgentTokenEffects {
    constructor(actions$, userTokenService) {
        this.actions$ = actions$;
        this.userTokenService = userTokenService;
        this.loadCustomerSupportAgentToken$ = this.actions$.pipe(ofType(LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN), map((action) => action.payload), switchMap(({ userId, password }) => this.userTokenService.loadToken(userId, password).pipe(map((token) => {
            const date = new Date();
            date.setSeconds(date.getSeconds() + token.expires_in);
            token.expiration_time = date.toJSON();
            return new LoadCustomerSupportAgentTokenSuccess(token);
        }), catchError((error) => of(new LoadCustomerSupportAgentTokenFail(makeErrorSerializable(error)))))));
    }
};
CustomerSupportAgentTokenEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserAuthenticationTokenService }
];
__decorate([
    Effect()
], CustomerSupportAgentTokenEffects.prototype, "loadCustomerSupportAgentToken$", void 0);
CustomerSupportAgentTokenEffects = __decorate([
    Injectable()
], CustomerSupportAgentTokenEffects);

const effects$3 = [
    CustomerEffects,
    CustomerSupportAgentTokenEffects,
];

const initialState$7 = { collapsed: false };
function reducer$7(state = initialState$7, action) {
    switch (action.type) {
        case ASM_UI_UPDATE: {
            return Object.assign(Object.assign({}, state), action.payload);
        }
        default: {
            return state;
        }
    }
}

function getReducers$3() {
    return {
        customerSearchResult: loaderReducer(CUSTOMER_SEARCH_DATA),
        asmUi: reducer$7,
        csagentToken: loaderReducer(CSAGENT_TOKEN_DATA),
    };
}
const reducerToken$3 = new InjectionToken('AsmReducers');
const reducerProvider$3 = {
    provide: reducerToken$3,
    useFactory: getReducers$3,
};
function clearCustomerSupportAgentAsmState(reducer) {
    return function (state, action) {
        if (action.type === LOGOUT_CUSTOMER_SUPPORT_AGENT) {
            state = Object.assign(Object.assign({}, state), { customerSearchResult: undefined, csagentToken: undefined });
        }
        return reducer(state, action);
    };
}
const metaReducers$2 = [
    clearCustomerSupportAgentAsmState,
];

function asmStoreConfigFactory() {
    const config = {
        state: {
            storageSync: {
                keys: {
                    'asm.asmUi': StorageSyncType.LOCAL_STORAGE,
                    'asm.csagentToken.value.access_token': StorageSyncType.LOCAL_STORAGE,
                    'asm.csagentToken.value.token_type': StorageSyncType.LOCAL_STORAGE,
                    'asm.csagentToken.value.expires_in': StorageSyncType.LOCAL_STORAGE,
                    'asm.csagentToken.value.expiration_time': StorageSyncType.LOCAL_STORAGE,
                    'asm.csagentToken.value.scope': StorageSyncType.LOCAL_STORAGE,
                    'asm.csagentToken.value.userId': StorageSyncType.LOCAL_STORAGE,
                },
            },
        },
    };
    return config;
}
let AsmStoreModule = class AsmStoreModule {
};
AsmStoreModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            HttpClientModule,
            StateModule,
            StoreModule.forFeature(ASM_FEATURE, reducerToken$3, { metaReducers: metaReducers$2 }),
            EffectsModule.forFeature(effects$3),
        ],
        providers: [
            provideDefaultConfigFactory(asmStoreConfigFactory),
            reducerProvider$3,
        ],
    })
], AsmStoreModule);

var GlobalMessageType;
(function (GlobalMessageType) {
    GlobalMessageType["MSG_TYPE_CONFIRMATION"] = "[GlobalMessage] Confirmation";
    GlobalMessageType["MSG_TYPE_ERROR"] = "[GlobalMessage] Error";
    GlobalMessageType["MSG_TYPE_INFO"] = "[GlobalMessage] Information";
    GlobalMessageType["MSG_TYPE_WARNING"] = "[GlobalMessage] Warning";
})(GlobalMessageType || (GlobalMessageType = {}));

class GlobalMessageConfig {
}

const ADD_MESSAGE = '[Global-message] Add a Message';
const REMOVE_MESSAGE = '[Global-message] Remove a Message';
const REMOVE_MESSAGES_BY_TYPE = '[Global-message] Remove messages by type';
class AddMessage {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_MESSAGE;
    }
}
class RemoveMessage {
    constructor(payload) {
        this.payload = payload;
        this.type = REMOVE_MESSAGE;
    }
}
class RemoveMessagesByType {
    constructor(payload) {
        this.payload = payload;
        this.type = REMOVE_MESSAGES_BY_TYPE;
    }
}



var globalMessageGroup_actions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ADD_MESSAGE: ADD_MESSAGE,
    REMOVE_MESSAGE: REMOVE_MESSAGE,
    REMOVE_MESSAGES_BY_TYPE: REMOVE_MESSAGES_BY_TYPE,
    AddMessage: AddMessage,
    RemoveMessage: RemoveMessage,
    RemoveMessagesByType: RemoveMessagesByType
});

const GLOBAL_MESSAGE_FEATURE = 'global-message';

const getGlobalMessageState = createFeatureSelector(GLOBAL_MESSAGE_FEATURE);

const ɵ0$r = (state) => state.entities;
const getGlobalMessageEntities = createSelector(getGlobalMessageState, ɵ0$r);
const getGlobalMessageEntitiesByType = (type) => {
    return createSelector(getGlobalMessageEntities, (entities) => entities && entities[type]);
};
const getGlobalMessageCountByType = (type) => {
    return createSelector(getGlobalMessageEntitiesByType(type), (entities) => entities && entities.length);
};



var globalMessageGroup_selectors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getGlobalMessageState: getGlobalMessageState,
    getGlobalMessageEntities: getGlobalMessageEntities,
    getGlobalMessageEntitiesByType: getGlobalMessageEntitiesByType,
    getGlobalMessageCountByType: getGlobalMessageCountByType,
    ɵ0: ɵ0$r
});

let GlobalMessageService = class GlobalMessageService {
    constructor(store) {
        this.store = store;
    }
    /**
     * Get all global messages
     */
    get() {
        return this.store.pipe(select(getGlobalMessageEntities), filter((data) => data !== undefined));
    }
    /**
     * Add one message into store
     * @param text: string | Translatable
     * @param type: GlobalMessageType object
     * @param timeout: number
     */
    add(text, type, timeout) {
        this.store.dispatch(new AddMessage({
            text: typeof text === 'string' ? { raw: text } : text,
            type,
            timeout,
        }));
    }
    /**
     * Remove message(s) from store
     * @param type: GlobalMessageType
     * @param index:optional. Without it, messages will be removed by type; otherwise,
     * message will be removed from list by index.
     */
    remove(type, index) {
        this.store.dispatch(index !== undefined
            ? new RemoveMessage({
                type: type,
                index: index,
            })
            : new RemoveMessagesByType(type));
    }
};
GlobalMessageService.ctorParameters = () => [
    { type: Store }
];
GlobalMessageService = __decorate([
    Injectable()
], GlobalMessageService);

var HttpResponseStatus;
(function (HttpResponseStatus) {
    HttpResponseStatus[HttpResponseStatus["UNKNOWN"] = -1] = "UNKNOWN";
    HttpResponseStatus[HttpResponseStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpResponseStatus[HttpResponseStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpResponseStatus[HttpResponseStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpResponseStatus[HttpResponseStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpResponseStatus[HttpResponseStatus["CONFLICT"] = 409] = "CONFLICT";
    HttpResponseStatus[HttpResponseStatus["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    HttpResponseStatus[HttpResponseStatus["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    HttpResponseStatus[HttpResponseStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HttpResponseStatus || (HttpResponseStatus = {}));

let HttpErrorHandler = class HttpErrorHandler {
    constructor(globalMessageService) {
        this.globalMessageService = globalMessageService;
    }
};
HttpErrorHandler.ctorParameters = () => [
    { type: GlobalMessageService }
];
HttpErrorHandler.ɵprov = ɵɵdefineInjectable({ factory: function HttpErrorHandler_Factory() { return new HttpErrorHandler(ɵɵinject(GlobalMessageService)); }, token: HttpErrorHandler, providedIn: "root" });
HttpErrorHandler = __decorate([
    Injectable({
        providedIn: 'root',
    })
], HttpErrorHandler);

let BadGatewayHandler = class BadGatewayHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.BAD_GATEWAY;
    }
    handleError() {
        this.globalMessageService.add({ key: 'httpHandlers.badGateway' }, GlobalMessageType.MSG_TYPE_ERROR);
    }
};
BadGatewayHandler.ɵprov = ɵɵdefineInjectable({ factory: function BadGatewayHandler_Factory() { return new BadGatewayHandler(ɵɵinject(GlobalMessageService)); }, token: BadGatewayHandler, providedIn: "root" });
BadGatewayHandler = __decorate([
    Injectable({
        providedIn: 'root',
    })
], BadGatewayHandler);

const OAUTH_ENDPOINT$1 = '/authorizationserver/oauth/token';
let BadRequestHandler = class BadRequestHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.BAD_REQUEST;
    }
    handleError(request, response) {
        this.handleBadPassword(request, response);
        this.handleBadLoginResponse(request, response);
        this.handleBadCartRequest(request, response);
        this.handleValidationError(request, response);
    }
    handleBadPassword(request, response) {
        var _a, _b, _c;
        if (((_a = response.url) === null || _a === void 0 ? void 0 : _a.includes(OAUTH_ENDPOINT$1)) &&
            ((_b = response.error) === null || _b === void 0 ? void 0 : _b.error) === 'invalid_grant' &&
            ((_c = request.body) === null || _c === void 0 ? void 0 : _c.get('grant_type')) === 'password') {
            this.globalMessageService.add({
                key: 'httpHandlers.badRequestPleaseLoginAgain',
                params: {
                    errorMessage: response.error.error_description || response.message || '',
                },
            }, GlobalMessageType.MSG_TYPE_ERROR);
            this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    }
    handleBadLoginResponse(_request, response) {
        this.getErrors(response)
            .filter((error) => error.type === 'PasswordMismatchError')
            .forEach(() => {
            this.globalMessageService.add({ key: 'httpHandlers.badRequestOldPasswordIncorrect' }, GlobalMessageType.MSG_TYPE_ERROR);
        });
    }
    handleValidationError(_request, response) {
        this.getErrors(response)
            .filter((e) => e.type === 'ValidationError')
            .forEach((error) => {
            this.globalMessageService.add({
                key: `httpHandlers.validationErrors.${error.reason}.${error.subject}`,
            }, GlobalMessageType.MSG_TYPE_ERROR);
        });
    }
    handleBadCartRequest(_request, response) {
        this.getErrors(response)
            .filter((e) => e.subjectType === 'cart' && e.reason === 'notFound')
            .forEach(() => {
            this.globalMessageService.add({ key: 'httpHandlers.cartNotFound' }, GlobalMessageType.MSG_TYPE_ERROR);
        });
    }
    getErrors(response) {
        var _a;
        return (((_a = response.error) === null || _a === void 0 ? void 0 : _a.errors) || []).filter((error) => error.type !== 'JaloObjectNoLongerValidError');
    }
};
BadRequestHandler.ɵprov = ɵɵdefineInjectable({ factory: function BadRequestHandler_Factory() { return new BadRequestHandler(ɵɵinject(GlobalMessageService)); }, token: BadRequestHandler, providedIn: "root" });
BadRequestHandler = __decorate([
    Injectable({
        providedIn: 'root',
    })
], BadRequestHandler);

let ConflictHandler = class ConflictHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.CONFLICT;
    }
    handleError() {
        this.globalMessageService.add({ key: 'httpHandlers.conflict' }, GlobalMessageType.MSG_TYPE_ERROR);
    }
};
ConflictHandler.ɵprov = ɵɵdefineInjectable({ factory: function ConflictHandler_Factory() { return new ConflictHandler(ɵɵinject(GlobalMessageService)); }, token: ConflictHandler, providedIn: "root" });
ConflictHandler = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ConflictHandler);

let ForbiddenHandler = class ForbiddenHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.FORBIDDEN;
    }
    handleError() {
        this.globalMessageService.add({ key: 'httpHandlers.forbidden' }, GlobalMessageType.MSG_TYPE_ERROR);
    }
};
ForbiddenHandler.ɵprov = ɵɵdefineInjectable({ factory: function ForbiddenHandler_Factory() { return new ForbiddenHandler(ɵɵinject(GlobalMessageService)); }, token: ForbiddenHandler, providedIn: "root" });
ForbiddenHandler = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ForbiddenHandler);

let GatewayTimeoutHandler = class GatewayTimeoutHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.GATEWAY_TIMEOUT;
    }
    handleError() {
        this.globalMessageService.add({ key: 'httpHandlers.gatewayTimeout' }, GlobalMessageType.MSG_TYPE_ERROR);
    }
};
GatewayTimeoutHandler.ɵprov = ɵɵdefineInjectable({ factory: function GatewayTimeoutHandler_Factory() { return new GatewayTimeoutHandler(ɵɵinject(GlobalMessageService)); }, token: GatewayTimeoutHandler, providedIn: "root" });
GatewayTimeoutHandler = __decorate([
    Injectable({
        providedIn: 'root',
    })
], GatewayTimeoutHandler);

let InternalServerErrorHandler = class InternalServerErrorHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.INTERNAL_SERVER_ERROR;
    }
    handleError() {
        this.globalMessageService.add({ key: 'httpHandlers.internalServerError' }, GlobalMessageType.MSG_TYPE_ERROR);
    }
};
InternalServerErrorHandler.ɵprov = ɵɵdefineInjectable({ factory: function InternalServerErrorHandler_Factory() { return new InternalServerErrorHandler(ɵɵinject(GlobalMessageService)); }, token: InternalServerErrorHandler, providedIn: "root" });
InternalServerErrorHandler = __decorate([
    Injectable({
        providedIn: 'root',
    })
], InternalServerErrorHandler);

let NotFoundHandler = class NotFoundHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.NOT_FOUND;
    }
    // empty error handler to avoid we fallabck to the unknown error handler
    handleError() { }
};
NotFoundHandler.ɵprov = ɵɵdefineInjectable({ factory: function NotFoundHandler_Factory() { return new NotFoundHandler(ɵɵinject(GlobalMessageService)); }, token: NotFoundHandler, providedIn: "root" });
NotFoundHandler = __decorate([
    Injectable({
        providedIn: 'root',
    })
], NotFoundHandler);

/**
 * Handles Oauth client errors when a 401 is returned. This is the case for failing
 * authenticaton requests to OCC.
 */
let UnauthorizedErrorHandler = class UnauthorizedErrorHandler extends HttpErrorHandler {
    constructor(globalMessageService) {
        super(globalMessageService);
        this.globalMessageService = globalMessageService;
        this.responseStatus = HttpResponseStatus.UNAUTHORIZED;
    }
    handleError(_request, response) {
        var _a, _b;
        if (isDevMode()) {
            console.warn(`There's a problem with the "Oauth client" configuration. You must configure a matching Oauth client in the backend and Spartacus.`);
        }
        if (((_a = response.error) === null || _a === void 0 ? void 0 : _a.error) === 'invalid_client') {
            this.globalMessageService.add(((_b = response.error) === null || _b === void 0 ? void 0 : _b.error_description) || {
                key: 'httpHandlers.unauthorized.invalid_client',
            }, GlobalMessageType.MSG_TYPE_ERROR);
        }
        else {
            this.globalMessageService.add({ key: 'httpHandlers.unauthorized.common' }, GlobalMessageType.MSG_TYPE_ERROR);
        }
    }
};
UnauthorizedErrorHandler.ctorParameters = () => [
    { type: GlobalMessageService }
];
UnauthorizedErrorHandler.ɵprov = ɵɵdefineInjectable({ factory: function UnauthorizedErrorHandler_Factory() { return new UnauthorizedErrorHandler(ɵɵinject(GlobalMessageService)); }, token: UnauthorizedErrorHandler, providedIn: "root" });
UnauthorizedErrorHandler = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UnauthorizedErrorHandler);

let UnknownErrorHandler = class UnknownErrorHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.UNKNOWN;
    }
    handleError() {
        if (isDevMode()) {
            console.warn(`Unknown http response error: ${this.responseStatus}`);
        }
    }
};
UnknownErrorHandler.ɵprov = ɵɵdefineInjectable({ factory: function UnknownErrorHandler_Factory() { return new UnknownErrorHandler(ɵɵinject(GlobalMessageService)); }, token: UnknownErrorHandler, providedIn: "root" });
UnknownErrorHandler = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UnknownErrorHandler);

let HttpErrorInterceptor = class HttpErrorInterceptor {
    constructor(handlers) {
        this.handlers = handlers;
        // We reverse the handlers to allow for custom handlers
        // that replace standard handlers
        this.handlers.reverse();
    }
    intercept(request, next) {
        return next.handle(request).pipe(catchError((response) => {
            if (response instanceof HttpErrorResponse) {
                this.handleErrorResponse(request, response);
                return throwError(response);
            }
        }));
    }
    handleErrorResponse(request, response) {
        const handler = this.getResponseHandler(response);
        if (handler) {
            handler.handleError(request, response);
        }
    }
    /**
     * return the error handler that matches the `HttpResponseStatus` code.
     * If no handler is available, the UNKNOWN handler is returned.
     */
    getResponseHandler(response) {
        const status = response.status;
        let handler = this.handlers.find((h) => h.responseStatus === status);
        if (!handler) {
            handler = this.handlers.find((h) => h.responseStatus === HttpResponseStatus.UNKNOWN);
        }
        return handler;
    }
};
HttpErrorInterceptor.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [HttpErrorHandler,] }] }
];
HttpErrorInterceptor.ɵprov = ɵɵdefineInjectable({ factory: function HttpErrorInterceptor_Factory() { return new HttpErrorInterceptor(ɵɵinject(HttpErrorHandler)); }, token: HttpErrorInterceptor, providedIn: "root" });
HttpErrorInterceptor = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(0, Inject(HttpErrorHandler))
], HttpErrorInterceptor);

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
        useExisting: InternalServerErrorHandler,
        multi: true,
    },
    {
        provide: HttpErrorHandler,
        useExisting: NotFoundHandler,
        multi: true,
    },
    {
        provide: HttpErrorHandler,
        useExisting: UnauthorizedErrorHandler,
        multi: true,
    },
];
const httpErrorInterceptors = [
    {
        provide: HTTP_INTERCEPTORS,
        useExisting: HttpErrorInterceptor,
        multi: true,
    },
];

const initialState$8 = {
    entities: {},
};
function reducer$8(state = initialState$8, action) {
    switch (action.type) {
        case ADD_MESSAGE: {
            const message = action.payload;
            if (state.entities[message.type] === undefined) {
                return Object.assign(Object.assign({}, state), { entities: Object.assign(Object.assign({}, state.entities), { [message.type]: [message.text] }) });
            }
            else {
                const currentMessages = state.entities[message.type];
                return Object.assign(Object.assign({}, state), { entities: Object.assign(Object.assign({}, state.entities), { [message.type]: [...currentMessages, message.text] }) });
            }
        }
        case REMOVE_MESSAGE: {
            const msgType = action.payload.type;
            const msgIndex = action.payload.index;
            if (Object.keys(state.entities).length === 0 ||
                !state.entities[msgType]) {
                return state;
            }
            const messages = [...state.entities[msgType]];
            messages.splice(msgIndex, 1);
            return Object.assign(Object.assign({}, state), { entities: Object.assign(Object.assign({}, state.entities), { [msgType]: messages }) });
        }
        case REMOVE_MESSAGES_BY_TYPE: {
            const entities = Object.assign(Object.assign({}, state.entities), { [action.payload]: [] });
            return Object.assign(Object.assign({}, state), { entities });
        }
    }
    return state;
}

function getReducers$4() {
    return reducer$8;
}
const reducerToken$4 = new InjectionToken('GlobalMessageReducers');
const reducerProvider$4 = {
    provide: reducerToken$4,
    useFactory: getReducers$4,
};

let GlobalMessageStoreModule = class GlobalMessageStoreModule {
};
GlobalMessageStoreModule = __decorate([
    NgModule({
        imports: [
            StateModule,
            StoreModule.forFeature(GLOBAL_MESSAGE_FEATURE, reducerToken$4),
        ],
        providers: [reducerProvider$4],
    })
], GlobalMessageStoreModule);

function shallowEqualObjects(objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (!objA || !objB) {
        return false;
    }
    const aKeys = Object.keys(objA);
    const bKeys = Object.keys(objB);
    const aKeysLen = aKeys.length;
    const bKeysLen = bKeys.length;
    if (aKeysLen !== bKeysLen) {
        return false;
    }
    for (let i = 0; i < aKeysLen; i++) {
        const key = aKeys[i];
        if (objA[key] !== objB[key]) {
            return false;
        }
    }
    return true;
}
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
function countOfDeepEqualObjects(obj, arr) {
    return arr.reduce((acc, curr) => {
        if (deepEqualObjects(obj, curr)) {
            acc++;
        }
        return acc;
    }, 0);
}
function indexOfFirstOccurrence(obj, arr) {
    for (let index = 0; index < arr.length; index++) {
        if (deepEqualObjects(arr[index], obj)) {
            return index;
        }
    }
}

let GlobalMessageEffect = class GlobalMessageEffect {
    constructor(actions$, store, config, platformId) {
        this.actions$ = actions$;
        this.store = store;
        this.config = config;
        this.platformId = platformId;
        this.removeDuplicated$ = this.actions$.pipe(ofType(ADD_MESSAGE), pluck('payload'), switchMap((message) => of(message.text).pipe(withLatestFrom(this.store.pipe(select(getGlobalMessageEntitiesByType(message.type)))), filter(([text, messages]) => countOfDeepEqualObjects(text, messages) > 1), map(([text, messages]) => new RemoveMessage({
            type: message.type,
            index: indexOfFirstOccurrence(text, messages),
        })))));
        this.hideAfterDelay$ = isPlatformBrowser(this.platformId) // we don't want to run this logic when doing SSR
            ? this.actions$.pipe(ofType(ADD_MESSAGE), pluck('payload'), concatMap((message) => {
                const config = this.config.globalMessages[message.type];
                return this.store.pipe(select(getGlobalMessageCountByType(message.type)), take(1), filter((count) => ((config && config.timeout !== undefined) || message.timeout) &&
                    count &&
                    count > 0), delay(message.timeout || config.timeout), switchMap(() => of(new RemoveMessage({
                    type: message.type,
                    index: 0,
                }))));
            }))
            : EMPTY;
    }
};
GlobalMessageEffect.ctorParameters = () => [
    { type: Actions },
    { type: Store },
    { type: GlobalMessageConfig },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
__decorate([
    Effect()
], GlobalMessageEffect.prototype, "removeDuplicated$", void 0);
__decorate([
    Effect()
], GlobalMessageEffect.prototype, "hideAfterDelay$", void 0);
GlobalMessageEffect = __decorate([
    Injectable(),
    __param(3, Inject(PLATFORM_ID))
], GlobalMessageEffect);

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
            [GlobalMessageType.MSG_TYPE_WARNING]: {
                timeout: 7000,
            },
        },
    };
}

var GlobalMessageModule_1;
let GlobalMessageModule = GlobalMessageModule_1 = class GlobalMessageModule {
    static forRoot() {
        return {
            ngModule: GlobalMessageModule_1,
            providers: [...errorHandlers, ...httpErrorInterceptors],
        };
    }
};
GlobalMessageModule = GlobalMessageModule_1 = __decorate([
    NgModule({
        imports: [
            GlobalMessageStoreModule,
            EffectsModule.forFeature([GlobalMessageEffect]),
        ],
        providers: [
            provideDefaultConfigFactory(defaultGlobalMessageConfigFactory),
            GlobalMessageService,
            { provide: GlobalMessageConfig, useExisting: Config },
        ],
    })
], GlobalMessageModule);

const getAsmState = createFeatureSelector(ASM_FEATURE);

const ɵ0$s = (state) => state.asmUi;
const getAsmUi = createSelector(getAsmState, ɵ0$s);

const ɵ0$t = (state) => state.customerSearchResult;
const getCustomerSearchResultsLoaderState = createSelector(getAsmState, ɵ0$t);
const ɵ1$l = (state) => loaderValueSelector(state);
const getCustomerSearchResults = createSelector(getCustomerSearchResultsLoaderState, ɵ1$l);
const ɵ2$e = (state) => loaderLoadingSelector(state);
const getCustomerSearchResultsLoading = createSelector(getCustomerSearchResultsLoaderState, ɵ2$e);

const ɵ0$u = (state) => state.csagentToken;
const getCustomerSupportAgentTokenState = createSelector(getAsmState, ɵ0$u);
const ɵ1$m = (state) => loaderValueSelector(state);
const getCustomerSupportAgentToken = createSelector(getCustomerSupportAgentTokenState, ɵ1$m);
const ɵ2$f = (state) => loaderLoadingSelector(state);
const getCustomerSupportAgentTokenLoading = createSelector(getCustomerSupportAgentTokenState, ɵ2$f);



var asmGroup_selectors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getAsmUi: getAsmUi,
    ɵ0: ɵ0$s,
    getCustomerSearchResultsLoaderState: getCustomerSearchResultsLoaderState,
    getCustomerSearchResults: getCustomerSearchResults,
    getCustomerSearchResultsLoading: getCustomerSearchResultsLoading,
    ɵ1: ɵ1$l,
    ɵ2: ɵ2$e,
    getAsmState: getAsmState,
    getCustomerSupportAgentTokenState: getCustomerSupportAgentTokenState,
    getCustomerSupportAgentToken: getCustomerSupportAgentToken,
    getCustomerSupportAgentTokenLoading: getCustomerSupportAgentTokenLoading
});

let AsmAuthService = class AsmAuthService {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Loads a user token for a customer support agent
     * @param userId
     * @param password
     */
    authorizeCustomerSupportAgent(userId, password) {
        this.store.dispatch(new LoadCustomerSupportAgentToken({
            userId: userId,
            password: password,
        }));
    }
    /**
     * Starts an ASM customer emulation session.
     * A customer emulation session is stoped by calling logout().
     * @param customerSupportAgentToken
     * @param customerId
     */
    startCustomerEmulationSession(customerSupportAgentToken, customerId) {
        this.authService.authorizeWithToken(Object.assign(Object.assign({}, customerSupportAgentToken), { userId: customerId }));
    }
    /**
     * Utility function to determine if a given token is a customer emulation session token.
     * @param userToken
     */
    isCustomerEmulationToken(userToken) {
        return (Boolean(userToken) &&
            Boolean(userToken.userId) &&
            userToken.userId !== OCC_USER_ID_CURRENT);
    }
    /**
     * Returns the customer support agent's token
     */
    getCustomerSupportAgentToken() {
        return this.store.pipe(select(getCustomerSupportAgentToken));
    }
    /**
     * Returns the customer support agent's token loading status
     */
    getCustomerSupportAgentTokenLoading() {
        return this.store.pipe(select(getCustomerSupportAgentTokenLoading));
    }
    /**
     * Logout a customer support agent
     */
    logoutCustomerSupportAgent() {
        this.getCustomerSupportAgentToken()
            .pipe(take(1))
            .subscribe((userToken) => {
            this.store.dispatch(new LogoutCustomerSupportAgent());
            this.store.dispatch(new RevokeUserToken(userToken));
        });
    }
};
AsmAuthService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
AsmAuthService.ɵprov = ɵɵdefineInjectable({ factory: function AsmAuthService_Factory() { return new AsmAuthService(ɵɵinject(Store), ɵɵinject(AuthService)); }, token: AsmAuthService, providedIn: "root" });
AsmAuthService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AsmAuthService);

let CustomerSupportAgentErrorHandlingService = class CustomerSupportAgentErrorHandlingService {
    constructor(asmAuthService, globalMessageService) {
        this.asmAuthService = asmAuthService;
        this.globalMessageService = globalMessageService;
    }
    terminateCustomerSupportAgentExpiredSession() {
        this.asmAuthService.logoutCustomerSupportAgent();
        this.globalMessageService.add({
            key: 'asm.csagentTokenExpired',
        }, GlobalMessageType.MSG_TYPE_ERROR);
    }
};
CustomerSupportAgentErrorHandlingService.ctorParameters = () => [
    { type: AsmAuthService },
    { type: GlobalMessageService }
];
CustomerSupportAgentErrorHandlingService.ɵprov = ɵɵdefineInjectable({ factory: function CustomerSupportAgentErrorHandlingService_Factory() { return new CustomerSupportAgentErrorHandlingService(ɵɵinject(AsmAuthService), ɵɵinject(GlobalMessageService)); }, token: CustomerSupportAgentErrorHandlingService, providedIn: "root" });
CustomerSupportAgentErrorHandlingService = __decorate([
    Injectable({ providedIn: 'root' })
], CustomerSupportAgentErrorHandlingService);

let CustomerSupportAgentAuthErrorInterceptor = class CustomerSupportAgentAuthErrorInterceptor {
    constructor(csagentErrorHandlingService) {
        this.csagentErrorHandlingService = csagentErrorHandlingService;
    }
    intercept(request, next) {
        const isCustomerSupportAgentRequest = this.isCustomerSupportAgentRequest(request);
        if (isCustomerSupportAgentRequest) {
            request = InterceptorUtil.removeHeader(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, request);
        }
        return next.handle(request).pipe(catchError((errResponse) => {
            if (errResponse instanceof HttpErrorResponse) {
                // Unauthorized
                if (isCustomerSupportAgentRequest && errResponse.status === 401) {
                    this.csagentErrorHandlingService.terminateCustomerSupportAgentExpiredSession();
                    return of(undefined);
                }
            }
            return throwError(errResponse);
        }));
    }
    isCustomerSupportAgentRequest(request) {
        const isRequestMapping = InterceptorUtil.getInterceptorParam(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, request.headers);
        return Boolean(isRequestMapping);
    }
};
CustomerSupportAgentAuthErrorInterceptor.ctorParameters = () => [
    { type: CustomerSupportAgentErrorHandlingService }
];
CustomerSupportAgentAuthErrorInterceptor.ɵprov = ɵɵdefineInjectable({ factory: function CustomerSupportAgentAuthErrorInterceptor_Factory() { return new CustomerSupportAgentAuthErrorInterceptor(ɵɵinject(CustomerSupportAgentErrorHandlingService)); }, token: CustomerSupportAgentAuthErrorInterceptor, providedIn: "root" });
CustomerSupportAgentAuthErrorInterceptor = __decorate([
    Injectable({ providedIn: 'root' })
], CustomerSupportAgentAuthErrorInterceptor);

let CustomerSupportAgentTokenInterceptor = class CustomerSupportAgentTokenInterceptor {
    constructor(asmAuthService) {
        this.asmAuthService = asmAuthService;
    }
    intercept(request, next) {
        return this.getCustomerSupportAgentToken(request).pipe(take(1), switchMap((token) => {
            if (token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `${token.token_type} ${token.access_token}`,
                    },
                });
            }
            return next.handle(request);
        }));
    }
    getCustomerSupportAgentToken(request) {
        if (InterceptorUtil.getInterceptorParam(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, request.headers)) {
            return this.asmAuthService.getCustomerSupportAgentToken();
        }
        return of(null);
    }
};
CustomerSupportAgentTokenInterceptor.ctorParameters = () => [
    { type: AsmAuthService }
];
CustomerSupportAgentTokenInterceptor.ɵprov = ɵɵdefineInjectable({ factory: function CustomerSupportAgentTokenInterceptor_Factory() { return new CustomerSupportAgentTokenInterceptor(ɵɵinject(AsmAuthService)); }, token: CustomerSupportAgentTokenInterceptor, providedIn: "root" });
CustomerSupportAgentTokenInterceptor = __decorate([
    Injectable({ providedIn: 'root' })
], CustomerSupportAgentTokenInterceptor);

const interceptors$2 = [
    {
        provide: HTTP_INTERCEPTORS,
        useExisting: CustomerSupportAgentTokenInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useExisting: CustomerSupportAgentAuthErrorInterceptor,
        multi: true,
    },
];

var AsmModule_1;
let AsmModule = AsmModule_1 = class AsmModule {
    static forRoot() {
        return {
            ngModule: AsmModule_1,
            providers: [
                { provide: AsmConfig, useExisting: Config },
                ...interceptors$2,
                provideDefaultConfig(defaultAsmConfig),
            ],
        };
    }
};
AsmModule = AsmModule_1 = __decorate([
    NgModule({
        imports: [CommonModule, HttpClientModule, AsmStoreModule],
    })
], AsmModule);

let AsmService = class AsmService {
    constructor(store) {
        this.store = store;
    }
    /**
     * Search for customers
     * @param options
     */
    customerSearch(options) {
        this.store.dispatch(new CustomerSearch(options));
    }
    /**
     * Reset the customer search result data to the initial state.
     */
    customerSearchReset() {
        this.store.dispatch(new CustomerSearchReset());
    }
    /**
     * Returns the customer search result data.
     */
    getCustomerSearchResults() {
        return this.store.pipe(select(getCustomerSearchResults));
    }
    /**
     * Returns the customer search result loading status.
     */
    getCustomerSearchResultsLoading() {
        return this.store.pipe(select(getCustomerSearchResultsLoading));
    }
    /**
     * Updates the state of the ASM UI
     */
    updateAsmUiState(asmUi) {
        this.store.dispatch(new AsmUiUpdate(asmUi));
    }
    /**
     * Get the state of the ASM UI
     */
    getAsmUiState() {
        return this.store.pipe(select(getAsmUi));
    }
};
AsmService.ctorParameters = () => [
    { type: Store }
];
AsmService.ɵprov = ɵɵdefineInjectable({ factory: function AsmService_Factory() { return new AsmService(ɵɵinject(Store)); }, token: AsmService, providedIn: "root" });
AsmService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AsmService);

/**
 * Abstract class that can be used to resolve meta data for specific pages.
 * The `getScore` method is used to select the right resolver for a specific
 * page, based on a score. The score is calculated by the (non)matching page
 * type and page template.
 */
class PageMetaResolver {
    /**
     * Returns the matching score for a resolver class, based on
     * the page type and page template.
     */
    getScore(page) {
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

// Email Standard RFC 5322:
const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // tslint:disable-line
const PASSWORD_PATTERN = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^*()_\-+{};:.,]).{6,}$/;

const MULTI_CART_FEATURE = 'cart';
const MULTI_CART_DATA = '[Multi Cart] Multi Cart Data';
// TODO(#7241): Drop after event system implementation for cart vouchers
/**
 * Add voucher process const
 * @deprecated since 2.0
 */
const ADD_VOUCHER_PROCESS_ID = 'addVoucher';

const getMultiCartState = createFeatureSelector(MULTI_CART_FEATURE);
const ɵ0$v = (state) => state.carts;
const getMultiCartEntities = createSelector(getMultiCartState, ɵ0$v);
const getCartEntitySelectorFactory = (cartId) => {
    return createSelector(getMultiCartEntities, (state) => entityProcessesLoaderStateSelector(state, cartId));
};
const getCartSelectorFactory = (cartId) => {
    return createSelector(getMultiCartEntities, (state) => entityValueSelector(state, cartId));
};
const getCartIsStableSelectorFactory = (cartId) => {
    return createSelector(getMultiCartEntities, (state) => entityIsStableSelector(state, cartId));
};
const getCartHasPendingProcessesSelectorFactory = (cartId) => {
    return createSelector(getMultiCartEntities, (state) => entityHasPendingProcessesSelector(state, cartId));
};
const getCartEntriesSelectorFactory = (cartId) => {
    return createSelector(getCartSelectorFactory(cartId), (state) => {
        return state && state.entries ? state.entries : [];
    });
};
const getCartEntrySelectorFactory = (cartId, productCode) => {
    return createSelector(getCartEntriesSelectorFactory(cartId), (state) => {
        return state
            ? state.find((entry) => entry.product.code === productCode)
            : undefined;
    });
};
const ɵ1$n = (state) => state.active;
const getActiveCartId = createSelector(getMultiCartState, ɵ1$n);
const ɵ2$g = (state) => state.wishList;
const getWishListId = createSelector(getMultiCartState, ɵ2$g);



var multiCartGroup_selectors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getMultiCartState: getMultiCartState,
    getMultiCartEntities: getMultiCartEntities,
    getCartEntitySelectorFactory: getCartEntitySelectorFactory,
    getCartSelectorFactory: getCartSelectorFactory,
    getCartIsStableSelectorFactory: getCartIsStableSelectorFactory,
    getCartHasPendingProcessesSelectorFactory: getCartHasPendingProcessesSelectorFactory,
    getCartEntriesSelectorFactory: getCartEntriesSelectorFactory,
    getCartEntrySelectorFactory: getCartEntrySelectorFactory,
    getActiveCartId: getActiveCartId,
    getWishListId: getWishListId,
    ɵ0: ɵ0$v,
    ɵ1: ɵ1$n,
    ɵ2: ɵ2$g
});

function getCartIdByUserId(cart, userId) {
    if (userId === OCC_USER_ID_ANONYMOUS) {
        return cart.guid;
    }
    return cart.code;
}
function getWishlistName(customerId) {
    return `wishlist${customerId}`;
}
/**
 * What is a temporary cart?
 * - frontend only cart entity!
 * - can be identified in store by `temp-` prefix with some unique id (multiple carts can be created at the same time eg. active cart, wishlist)
 *
 * Why we need temporary carts?
 * - to have information about cart creation process (meta flags: loading, error - for showing loader, error message)
 * - to know if there is currently a cart creation process in progress (eg. so, we don't create more than one active cart at the same time)
 * - cart identifiers are created in the backend, so those are only known after cart is created
 *
 * Temporary cart lifecycle
 * - create cart method invoked
 * - new `temp-${uuid}` cart is created with `loading=true` state
 * - backend returns created cart
 * - normal cart entity is saved under correct id (eg. for logged user under cart `code` key)
 * - temporary cart value is set to backend response (anyone observing this cart can read code/guid from it and switch selector to normal cart)
 * - in next tick temporary cart is removed
 */
function isTempCartId(cartId) {
    return cartId.startsWith('temp-');
}

const CART_ADD_ENTRY = '[Cart-entry] Add Entry';
const CART_ADD_ENTRY_SUCCESS = '[Cart-entry] Add Entry Success';
const CART_ADD_ENTRY_FAIL = '[Cart-entry] Add Entry Fail';
const CART_REMOVE_ENTRY = '[Cart-entry] Remove Entry';
const CART_REMOVE_ENTRY_SUCCESS = '[Cart-entry] Remove Entry Success';
const CART_REMOVE_ENTRY_FAIL = '[Cart-entry] Remove Entry Fail';
const CART_UPDATE_ENTRY = '[Cart-entry] Update Entry';
const CART_UPDATE_ENTRY_SUCCESS = '[Cart-entry] Update Entry Success';
const CART_UPDATE_ENTRY_FAIL = '[Cart-entry] Update Entry Fail';
class CartAddEntry extends EntityProcessesIncrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CART_ADD_ENTRY;
    }
}
class CartAddEntrySuccess extends EntityProcessesDecrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CART_ADD_ENTRY_SUCCESS;
    }
}
class CartAddEntryFail extends EntityProcessesDecrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CART_ADD_ENTRY_FAIL;
    }
}
class CartRemoveEntry extends EntityProcessesIncrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CART_REMOVE_ENTRY;
    }
}
class CartRemoveEntrySuccess extends EntityProcessesDecrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CART_REMOVE_ENTRY_SUCCESS;
    }
}
class CartRemoveEntryFail extends EntityProcessesDecrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CART_REMOVE_ENTRY_FAIL;
    }
}
class CartUpdateEntry extends EntityProcessesIncrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CART_UPDATE_ENTRY;
    }
}
class CartUpdateEntrySuccess extends EntityProcessesDecrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CART_UPDATE_ENTRY_SUCCESS;
    }
}
class CartUpdateEntryFail extends EntityProcessesDecrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CART_UPDATE_ENTRY_FAIL;
    }
}

const CART_ADD_VOUCHER = '[Cart-voucher] Add Cart Vouchers';
const CART_ADD_VOUCHER_FAIL = '[Cart-voucher] Add Cart Voucher Fail';
const CART_ADD_VOUCHER_SUCCESS = '[Cart-voucher] Add Cart Voucher Success';
const CART_RESET_ADD_VOUCHER = '[Cart-voucher] Reset Add Cart Voucher';
const CART_REMOVE_VOUCHER = '[Cart-voucher] Remove Cart Voucher';
const CART_REMOVE_VOUCHER_FAIL = '[Cart-voucher] Remove Cart Voucher Fail';
const CART_REMOVE_VOUCHER_SUCCESS = '[Cart-voucher] Remove Cart Voucher Success';
// Adding cart voucher actions
class CartAddVoucher extends EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, ADD_VOUCHER_PROCESS_ID);
        this.payload = payload;
        this.type = CART_ADD_VOUCHER;
    }
}
class CartAddVoucherFail extends EntityFailAction {
    constructor(payload) {
        super(PROCESS_FEATURE, ADD_VOUCHER_PROCESS_ID, payload.error);
        this.payload = payload;
        this.type = CART_ADD_VOUCHER_FAIL;
    }
}
class CartAddVoucherSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(PROCESS_FEATURE, ADD_VOUCHER_PROCESS_ID);
        this.payload = payload;
        this.type = CART_ADD_VOUCHER_SUCCESS;
    }
}
// TODO(#7241): Remove when switching to event system for vouchers
/**
 * Resets add voucher process
 *
 * @deprecated since 2.0
 */
class CartResetAddVoucher extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, ADD_VOUCHER_PROCESS_ID);
        this.type = CART_RESET_ADD_VOUCHER;
    }
}
// Deleting cart voucher
class CartRemoveVoucher extends EntityProcessesIncrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CART_REMOVE_VOUCHER;
    }
}
class CartRemoveVoucherFail extends EntityProcessesDecrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CART_REMOVE_VOUCHER_FAIL;
    }
}
class CartRemoveVoucherSuccess extends EntityProcessesDecrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CART_REMOVE_VOUCHER_SUCCESS;
    }
}

const CREATE_CART = '[Cart] Create Cart';
const CREATE_CART_FAIL = '[Cart] Create Cart Fail';
const CREATE_CART_SUCCESS = '[Cart] Create Cart Success';
const LOAD_CART = '[Cart] Load Cart';
const LOAD_CART_FAIL = '[Cart] Load Cart Fail';
const LOAD_CART_SUCCESS = '[Cart] Load Cart Success';
const ADD_EMAIL_TO_CART = '[Cart] Add Email to Cart';
const ADD_EMAIL_TO_CART_FAIL = '[Cart] Add Email to Cart Fail';
const ADD_EMAIL_TO_CART_SUCCESS = '[Cart] Add Email to Cart Success';
const MERGE_CART = '[Cart] Merge Cart';
const MERGE_CART_SUCCESS = '[Cart] Merge Cart Success';
const RESET_CART_DETAILS = '[Cart] Reset Cart Details';
const REMOVE_CART = '[Cart] Remove Cart';
const DELETE_CART = '[Cart] Delete Cart';
const DELETE_CART_SUCCESS = '[Cart] Delete Cart Success';
const DELETE_CART_FAIL = '[Cart] Delete Cart Fail';
class CreateCart extends EntityLoadAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.tempCartId);
        this.payload = payload;
        this.type = CREATE_CART;
    }
}
class CreateCartFail extends EntityFailAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.tempCartId);
        this.payload = payload;
        this.type = CREATE_CART_FAIL;
    }
}
class CreateCartSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CREATE_CART_SUCCESS;
    }
}
class AddEmailToCart extends EntityProcessesIncrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = ADD_EMAIL_TO_CART;
    }
}
class AddEmailToCartFail extends EntityProcessesDecrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = ADD_EMAIL_TO_CART_FAIL;
    }
}
class AddEmailToCartSuccess extends EntityProcessesDecrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = ADD_EMAIL_TO_CART_SUCCESS;
    }
}
class LoadCart extends EntityLoadAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = LOAD_CART;
    }
}
class LoadCartFail extends EntityFailAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId, payload.error);
        this.payload = payload;
        this.type = LOAD_CART_FAIL;
    }
}
class LoadCartSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = LOAD_CART_SUCCESS;
    }
}
class MergeCart {
    constructor(payload) {
        this.payload = payload;
        this.type = MERGE_CART;
    }
}
class MergeCartSuccess extends EntityRemoveAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.oldCartId);
        this.payload = payload;
        this.type = MERGE_CART_SUCCESS;
    }
}
/**
 * On site context change we want to keep current list of entities, but we want to clear the value and flags.
 * With ProcessesLoaderResetAction we run it on every entity of this type.
 */
class ResetCartDetails extends ProcessesLoaderResetAction {
    constructor() {
        super(MULTI_CART_DATA);
        this.type = RESET_CART_DETAILS;
    }
}
/**
 * Used for cleaning cart in local state, when we get information that it no longer exists in the backend.
 * For removing particular cart in both places use DeleteCart actions.
 */
class RemoveCart extends EntityRemoveAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = REMOVE_CART;
    }
}
class DeleteCart {
    constructor(payload) {
        this.payload = payload;
        this.type = DELETE_CART;
    }
}
class DeleteCartSuccess extends EntityRemoveAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = DELETE_CART_SUCCESS;
    }
}
class DeleteCartFail {
    constructor(payload) {
        this.payload = payload;
        this.type = DELETE_CART_FAIL;
    }
}

const SET_TEMP_CART = '[Cart] Set Temp Cart';
const CART_PROCESSES_INCREMENT = '[Cart] Cart Processes Increment';
const CART_PROCESSES_DECREMENT = '[Cart] Cart Processes Decrement';
const SET_ACTIVE_CART_ID = '[Cart] Set Active Cart Id';
const CLEAR_CART_STATE = '[Cart] Clear Cart State';
/**
 * To keep track of cart creation process we use cart with `temp-${uuid}` id.
 * After creating cart we switch to entity with `code` or `guid`.
 * We need `temp-${uuid}` cart entities for loading/error state.
 */
class SetTempCart extends EntitySuccessAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.tempCartId, payload.cart);
        this.payload = payload;
        this.type = SET_TEMP_CART;
    }
}
// TODO(#7241): Remove when there won't be any usage
/**
 * Increases process counter on cart entities
 * All actions that cause computations on cart should extend EntityProcessesIncrementAction instead of dispatching this action.
 * @deprecated since 2.0
 */
class CartProcessesIncrement extends EntityProcessesIncrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload);
        this.payload = payload;
        this.type = CART_PROCESSES_INCREMENT;
    }
}
// TODO(#7241): Remove when there won't be any usage
/**
 * Decrement process counter on cart entities
 * All actions that cause computations on cart should extend EntityProcessesDecrementAction instead of dispatching this action.
 * @deprecated since 2.0
 */
class CartProcessesDecrement extends EntityProcessesDecrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload);
        this.payload = payload;
        this.type = CART_PROCESSES_DECREMENT;
    }
}
/**
 * Only sets active cart property with id of active cart. Then services take care of loading that cart.
 */
class SetActiveCartId {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_CART_ID;
    }
}
/**
 * Clear whole cart store state: all entities + reset rest of the cart state.
 */
class ClearCartState extends EntityRemoveAllAction {
    constructor() {
        super(MULTI_CART_DATA);
        this.type = CLEAR_CART_STATE;
    }
}

const CREATE_WISH_LIST = '[Wish List] Create Wish List';
const CREATE_WISH_LIST_FAIL = '[Wish List] Create Wish List Fail';
const CREATE_WISH_LIST_SUCCESS = '[Wish List] Create Wish List Success';
const LOAD_WISH_LIST = '[Wish List] Load Wish List';
const LOAD_WISH_LIST_SUCCESS = '[Wish List] Load Wish List Success';
const LOAD_WISH_LIST_FAIL = '[Wish List] Load Wish List Fail';
const RESET_WISH_LIST_DETAILS = '[Wish List] Reset Wish List';
class CreateWishList {
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_WISH_LIST;
    }
}
class CreateWishListSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(MULTI_CART_DATA, getCartIdByUserId(payload.cart, payload.userId));
        this.payload = payload;
        this.type = CREATE_WISH_LIST_SUCCESS;
    }
}
class CreateWishListFail extends EntityFailAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId, payload.error);
        this.payload = payload;
        this.type = CREATE_WISH_LIST_FAIL;
    }
}
class LoadWishList extends EntityLoadAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.tempCartId);
        this.payload = payload;
        this.type = LOAD_WISH_LIST;
    }
}
class LoadWishListSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = LOAD_WISH_LIST_SUCCESS;
    }
}
class LoadWishListFail extends EntityFailAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId, payload.error);
        this.payload = payload;
        this.type = LOAD_WISH_LIST_FAIL;
    }
}



var cartGroup_actions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CART_ADD_ENTRY: CART_ADD_ENTRY,
    CART_ADD_ENTRY_SUCCESS: CART_ADD_ENTRY_SUCCESS,
    CART_ADD_ENTRY_FAIL: CART_ADD_ENTRY_FAIL,
    CART_REMOVE_ENTRY: CART_REMOVE_ENTRY,
    CART_REMOVE_ENTRY_SUCCESS: CART_REMOVE_ENTRY_SUCCESS,
    CART_REMOVE_ENTRY_FAIL: CART_REMOVE_ENTRY_FAIL,
    CART_UPDATE_ENTRY: CART_UPDATE_ENTRY,
    CART_UPDATE_ENTRY_SUCCESS: CART_UPDATE_ENTRY_SUCCESS,
    CART_UPDATE_ENTRY_FAIL: CART_UPDATE_ENTRY_FAIL,
    CartAddEntry: CartAddEntry,
    CartAddEntrySuccess: CartAddEntrySuccess,
    CartAddEntryFail: CartAddEntryFail,
    CartRemoveEntry: CartRemoveEntry,
    CartRemoveEntrySuccess: CartRemoveEntrySuccess,
    CartRemoveEntryFail: CartRemoveEntryFail,
    CartUpdateEntry: CartUpdateEntry,
    CartUpdateEntrySuccess: CartUpdateEntrySuccess,
    CartUpdateEntryFail: CartUpdateEntryFail,
    CART_ADD_VOUCHER: CART_ADD_VOUCHER,
    CART_ADD_VOUCHER_FAIL: CART_ADD_VOUCHER_FAIL,
    CART_ADD_VOUCHER_SUCCESS: CART_ADD_VOUCHER_SUCCESS,
    CART_RESET_ADD_VOUCHER: CART_RESET_ADD_VOUCHER,
    CART_REMOVE_VOUCHER: CART_REMOVE_VOUCHER,
    CART_REMOVE_VOUCHER_FAIL: CART_REMOVE_VOUCHER_FAIL,
    CART_REMOVE_VOUCHER_SUCCESS: CART_REMOVE_VOUCHER_SUCCESS,
    CartAddVoucher: CartAddVoucher,
    CartAddVoucherFail: CartAddVoucherFail,
    CartAddVoucherSuccess: CartAddVoucherSuccess,
    CartResetAddVoucher: CartResetAddVoucher,
    CartRemoveVoucher: CartRemoveVoucher,
    CartRemoveVoucherFail: CartRemoveVoucherFail,
    CartRemoveVoucherSuccess: CartRemoveVoucherSuccess,
    CREATE_CART: CREATE_CART,
    CREATE_CART_FAIL: CREATE_CART_FAIL,
    CREATE_CART_SUCCESS: CREATE_CART_SUCCESS,
    LOAD_CART: LOAD_CART,
    LOAD_CART_FAIL: LOAD_CART_FAIL,
    LOAD_CART_SUCCESS: LOAD_CART_SUCCESS,
    ADD_EMAIL_TO_CART: ADD_EMAIL_TO_CART,
    ADD_EMAIL_TO_CART_FAIL: ADD_EMAIL_TO_CART_FAIL,
    ADD_EMAIL_TO_CART_SUCCESS: ADD_EMAIL_TO_CART_SUCCESS,
    MERGE_CART: MERGE_CART,
    MERGE_CART_SUCCESS: MERGE_CART_SUCCESS,
    RESET_CART_DETAILS: RESET_CART_DETAILS,
    REMOVE_CART: REMOVE_CART,
    DELETE_CART: DELETE_CART,
    DELETE_CART_SUCCESS: DELETE_CART_SUCCESS,
    DELETE_CART_FAIL: DELETE_CART_FAIL,
    CreateCart: CreateCart,
    CreateCartFail: CreateCartFail,
    CreateCartSuccess: CreateCartSuccess,
    AddEmailToCart: AddEmailToCart,
    AddEmailToCartFail: AddEmailToCartFail,
    AddEmailToCartSuccess: AddEmailToCartSuccess,
    LoadCart: LoadCart,
    LoadCartFail: LoadCartFail,
    LoadCartSuccess: LoadCartSuccess,
    MergeCart: MergeCart,
    MergeCartSuccess: MergeCartSuccess,
    ResetCartDetails: ResetCartDetails,
    RemoveCart: RemoveCart,
    DeleteCart: DeleteCart,
    DeleteCartSuccess: DeleteCartSuccess,
    DeleteCartFail: DeleteCartFail,
    SET_TEMP_CART: SET_TEMP_CART,
    CART_PROCESSES_INCREMENT: CART_PROCESSES_INCREMENT,
    CART_PROCESSES_DECREMENT: CART_PROCESSES_DECREMENT,
    SET_ACTIVE_CART_ID: SET_ACTIVE_CART_ID,
    CLEAR_CART_STATE: CLEAR_CART_STATE,
    SetTempCart: SetTempCart,
    CartProcessesIncrement: CartProcessesIncrement,
    CartProcessesDecrement: CartProcessesDecrement,
    SetActiveCartId: SetActiveCartId,
    ClearCartState: ClearCartState,
    CREATE_WISH_LIST: CREATE_WISH_LIST,
    CREATE_WISH_LIST_FAIL: CREATE_WISH_LIST_FAIL,
    CREATE_WISH_LIST_SUCCESS: CREATE_WISH_LIST_SUCCESS,
    LOAD_WISH_LIST: LOAD_WISH_LIST,
    LOAD_WISH_LIST_SUCCESS: LOAD_WISH_LIST_SUCCESS,
    LOAD_WISH_LIST_FAIL: LOAD_WISH_LIST_FAIL,
    RESET_WISH_LIST_DETAILS: RESET_WISH_LIST_DETAILS,
    CreateWishList: CreateWishList,
    CreateWishListSuccess: CreateWishListSuccess,
    CreateWishListFail: CreateWishListFail,
    LoadWishList: LoadWishList,
    LoadWishListSuccess: LoadWishListSuccess,
    LoadWishListFail: LoadWishListFail
});

let MultiCartService = class MultiCartService {
    constructor(store) {
        this.store = store;
    }
    /**
     * Returns cart from store as an observable
     *
     * @param cartId
     */
    getCart(cartId) {
        return this.store.pipe(select(getCartSelectorFactory(cartId)));
    }
    /**
     * Returns cart entity from store (cart with loading, error, success flags) as an observable
     *
     * @param cartId
     */
    getCartEntity(cartId) {
        return this.store.pipe(select(getCartEntitySelectorFactory(cartId)));
    }
    /**
     * Returns true when there are no operations on that in progress and it is not currently loading
     *
     * @param cartId
     */
    isStable(cartId) {
        return this.store.pipe(select(getCartIsStableSelectorFactory(cartId)), 
        // We dispatch a lot of actions just after finishing some process or loading, so we want this flag not to flicker.
        // This flickering should only be avoided when switching from false to true
        // Start of loading should be showed instantly (no debounce)
        // Extra actions are only dispatched after some loading
        debounce((isStable) => (isStable ? timer(0) : EMPTY)), distinctUntilChanged());
    }
    /**
     * Simple random temp cart id generator
     */
    generateTempCartId() {
        const pseudoUuid = Math.random().toString(36).substr(2, 9);
        return `temp-${pseudoUuid}`;
    }
    /**
     * Create or merge cart
     *
     * @param params Object with userId, oldCartId, toMergeCartGuid and extraData
     */
    createCart({ userId, oldCartId, toMergeCartGuid, extraData, }) {
        // to support creating multiple carts at the same time we need to use different entity for every process
        // simple random uuid generator is used here for entity names
        const tempCartId = this.generateTempCartId();
        this.store.dispatch(new CreateCart({
            extraData,
            userId,
            oldCartId,
            toMergeCartGuid,
            tempCartId,
        }));
        return this.getCartEntity(tempCartId);
    }
    /**
     * Merge provided cart to current user cart
     *
     * @param params Object with userId, cartId and extraData
     */
    mergeToCurrentCart({ userId, cartId, extraData, }) {
        const tempCartId = this.generateTempCartId();
        this.store.dispatch(new MergeCart({
            userId,
            cartId,
            extraData,
            tempCartId,
        }));
    }
    /**
     * Load cart
     *
     * @param params Object with userId, cartId and extraData
     */
    loadCart({ cartId, userId, extraData, }) {
        this.store.dispatch(new LoadCart({
            userId,
            cartId,
            extraData,
        }));
    }
    /**
     * Get cart entries as an observable
     * @param cartId
     */
    getEntries(cartId) {
        return this.store.pipe(select(getCartEntriesSelectorFactory(cartId)));
    }
    /**
     * Add entry to cart
     *
     * @param userId
     * @param cartId
     * @param productCode
     * @param quantity
     */
    addEntry(userId, cartId, productCode, quantity) {
        this.store.dispatch(new CartAddEntry({
            userId,
            cartId,
            productCode,
            quantity,
        }));
    }
    /**
     * Add multiple entries to cart
     *
     * @param userId
     * @param cartId
     * @param products Array with items (productCode and quantity)
     */
    addEntries(userId, cartId, products) {
        products.forEach((product) => {
            this.store.dispatch(new CartAddEntry({
                userId,
                cartId,
                productCode: product.productCode,
                quantity: product.quantity,
            }));
        });
    }
    /**
     * Remove entry from cart
     *
     * @param userId
     * @param cartId
     * @param entryNumber
     */
    removeEntry(userId, cartId, entryNumber) {
        this.store.dispatch(new CartRemoveEntry({
            userId,
            cartId,
            entryNumber: `${entryNumber}`,
        }));
    }
    /**
     * Update entry in cart. For quantity = 0 it removes entry
     *
     * @param userId
     * @param cartId
     * @param entryNumber
     * @param quantity
     */
    updateEntry(userId, cartId, entryNumber, quantity) {
        if (quantity > 0) {
            this.store.dispatch(new CartUpdateEntry({
                userId,
                cartId,
                entryNumber: `${entryNumber}`,
                quantity: quantity,
            }));
        }
        else {
            this.removeEntry(userId, cartId, entryNumber);
        }
    }
    /**
     * Get specific entry from cart
     *
     * @param cartId
     * @param productCode
     */
    getEntry(cartId, productCode) {
        return this.store.pipe(select(getCartEntrySelectorFactory(cartId, productCode)));
    }
    /**
     * Assign email to the cart
     *
     * @param cartId
     * @param userId
     * @param email
     */
    assignEmail(cartId, userId, email) {
        this.store.dispatch(new AddEmailToCart({
            userId,
            cartId,
            email,
        }));
    }
    /**
     * Delete cart
     *
     * @param cartId
     * @param userId
     */
    deleteCart(cartId, userId) {
        this.store.dispatch(new DeleteCart({
            userId,
            cartId,
        }));
    }
};
MultiCartService.ctorParameters = () => [
    { type: Store }
];
MultiCartService = __decorate([
    Injectable()
], MultiCartService);

let ActiveCartService = class ActiveCartService {
    constructor(store, authService, multiCartService) {
        this.store = store;
        this.authService = authService;
        this.multiCartService = multiCartService;
        this.PREVIOUS_USER_ID_INITIAL_VALUE = 'PREVIOUS_USER_ID_INITIAL_VALUE';
        this.previousUserId = this.PREVIOUS_USER_ID_INITIAL_VALUE;
        this.userId = OCC_USER_ID_ANONYMOUS;
        this.activeCartId$ = this.store.pipe(select(getActiveCartId), map((cartId) => {
            if (!cartId) {
                return OCC_CART_ID_CURRENT;
            }
            return cartId;
        }));
        this.cartSelector$ = this.activeCartId$.pipe(switchMap((cartId) => this.multiCartService.getCartEntity(cartId)));
        this.authService.getOccUserId().subscribe((userId) => {
            this.userId = userId;
            if (this.userId !== OCC_USER_ID_ANONYMOUS) {
                if (this.isJustLoggedIn(userId)) {
                    this.loadOrMerge(this.cartId);
                }
            }
            this.previousUserId = userId;
        });
        this.activeCartId$.subscribe((cartId) => {
            this.cartId = cartId;
        });
        this.initActiveCart();
    }
    initActiveCart() {
        this.activeCart$ = this.cartSelector$.pipe(withLatestFrom(this.activeCartId$), map(([cartEntity, activeCartId]) => {
            return {
                cart: cartEntity.value,
                cartId: activeCartId,
                isStable: !cartEntity.loading && cartEntity.processesCount === 0,
                loaded: (cartEntity.error || cartEntity.success) && !cartEntity.loading,
            };
        }), 
        // we want to emit empty carts even if those are not stable
        // on merge cart action we want to switch to empty cart so no one would use old cartId which can be already obsolete
        // so on merge action the resulting stream looks like this: old_cart -> {} -> new_cart
        filter(({ isStable, cart }) => isStable || this.isEmpty(cart)), tap(({ cart, cartId, loaded, isStable }) => {
            if (isStable &&
                this.isEmpty(cart) &&
                !loaded &&
                !isTempCartId(cartId)) {
                this.load(cartId);
            }
        }), map(({ cart }) => (cart ? cart : {})), tap((cart) => {
            if (cart) {
                this.cartUser = cart.user;
            }
        }), distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * Returns active cart
     */
    getActive() {
        return this.activeCart$;
    }
    /**
     * Returns active cart id
     */
    getActiveCartId() {
        return this.activeCart$.pipe(map((cart) => getCartIdByUserId(cart, this.userId)), distinctUntilChanged());
    }
    /**
     * Returns cart entries
     */
    getEntries() {
        return this.activeCartId$.pipe(switchMap((cartId) => this.multiCartService.getEntries(cartId)), distinctUntilChanged());
    }
    /**
     * Returns true when cart is stable (not loading and not pending processes on cart)
     */
    isStable() {
        // Debounce is used here, to avoid flickering when we switch between different cart entities.
        // For example during `addEntry` method. We might try to load current cart, so `current cart will be then active id.
        // After load fails we might create new cart so we switch to `temp-${uuid}` cart entity used when creating cart.
        // At the end we finally switch to cart `code` for cart id. Between those switches cart `isStable` function should not flicker.
        return this.activeCartId$.pipe(switchMap((cartId) => this.multiCartService.isStable(cartId)), debounce((state) => (state ? timer(0) : EMPTY)), distinctUntilChanged());
    }
    loadOrMerge(cartId) {
        // for login user, whenever there's an existing cart, we will load the user
        // current cart and merge it into the existing cart
        if (!cartId || cartId === OCC_CART_ID_CURRENT) {
            this.multiCartService.loadCart({
                userId: this.userId,
                cartId: OCC_CART_ID_CURRENT,
                extraData: {
                    active: true,
                },
            });
        }
        else if (this.isGuestCart()) {
            this.guestCartMerge(cartId);
        }
        else {
            this.multiCartService.mergeToCurrentCart({
                userId: this.userId,
                cartId,
                extraData: {
                    active: true,
                },
            });
        }
    }
    load(cartId) {
        if (this.userId !== OCC_USER_ID_ANONYMOUS) {
            this.multiCartService.loadCart({
                userId: this.userId,
                cartId: cartId ? cartId : OCC_CART_ID_CURRENT,
                extraData: {
                    active: true,
                },
            });
        }
        else if (cartId && cartId !== OCC_CART_ID_CURRENT) {
            this.multiCartService.loadCart({
                userId: this.userId,
                cartId: cartId,
                extraData: {
                    active: true,
                },
            });
        }
    }
    addEntriesGuestMerge(cartEntries) {
        const entriesToAdd = cartEntries.map((entry) => ({
            productCode: entry.product.code,
            quantity: entry.quantity,
        }));
        this.requireLoadedCartForGuestMerge().subscribe((cartState) => {
            this.multiCartService.addEntries(this.userId, getCartIdByUserId(cartState.value, this.userId), entriesToAdd);
        });
    }
    requireLoadedCartForGuestMerge() {
        return this.requireLoadedCart(this.cartSelector$.pipe(filter(() => !this.isGuestCart())));
    }
    isCartCreating(cartState) {
        // cart creating is always represented with loading flags
        // when all loading flags are false it means that we restored wrong cart id
        // could happen on context change or reload right in the middle on cart create call
        return (isTempCartId(this.cartId) &&
            (cartState.loading || cartState.success || cartState.error));
    }
    requireLoadedCart(customCartSelector$) {
        // For guest cart merge we want to filter guest cart in the whole stream
        // We have to wait with load/create/addEntry after guest cart will be deleted.
        // That's why you can provide custom selector with this filter applied.
        const cartSelector$ = customCartSelector$
            ? customCartSelector$
            : this.cartSelector$;
        return cartSelector$.pipe(filter((cartState) => !cartState.loading), 
        // Avoid load/create call when there are new cart creating at the moment
        filter((cartState) => !this.isCartCreating(cartState)), take(1), switchMap((cartState) => {
            // Try to load the cart, because it might have been created on another device between our login and add entry call
            if (this.isEmpty(cartState.value) &&
                this.userId !== OCC_USER_ID_ANONYMOUS) {
                this.load(undefined);
            }
            return cartSelector$;
        }), filter((cartState) => !cartState.loading), 
        // create cart can happen to anonymous user if it is not empty or to any other user if it is loaded and empty
        filter((cartState) => this.userId === OCC_USER_ID_ANONYMOUS ||
            cartState.success ||
            cartState.error), take(1), switchMap((cartState) => {
            if (this.isEmpty(cartState.value)) {
                this.multiCartService.createCart({
                    userId: this.userId,
                    extraData: {
                        active: true,
                    },
                });
            }
            return cartSelector$;
        }), filter((cartState) => !cartState.loading), filter((cartState) => cartState.success || cartState.error), 
        // wait for active cart id to point to code/guid to avoid some work on temp cart entity
        filter((cartState) => !this.isCartCreating(cartState)), filter((cartState) => !this.isEmpty(cartState.value)), take(1));
    }
    /**
     * Add entry to active cart
     *
     * @param productCode
     * @param quantity
     */
    addEntry(productCode, quantity) {
        this.requireLoadedCart().subscribe((cartState) => {
            this.multiCartService.addEntry(this.userId, getCartIdByUserId(cartState.value, this.userId), productCode, quantity);
        });
    }
    /**
     * Remove entry
     *
     * @param entry
     */
    removeEntry(entry) {
        this.multiCartService.removeEntry(this.userId, this.cartId, entry.entryNumber);
    }
    /**
     * Update entry
     *
     * @param entryNumber
     * @param quantity
     */
    updateEntry(entryNumber, quantity) {
        this.multiCartService.updateEntry(this.userId, this.cartId, entryNumber, quantity);
    }
    /**
     * Returns cart entry
     *
     * @param productCode
     */
    getEntry(productCode) {
        return this.activeCartId$.pipe(switchMap((cartId) => this.multiCartService.getEntry(cartId, productCode)), distinctUntilChanged());
    }
    /**
     * Assign email to cart
     *
     * @param email
     */
    addEmail(email) {
        this.multiCartService.assignEmail(this.cartId, this.userId, email);
    }
    /**
     * Get assigned user to cart
     */
    getAssignedUser() {
        return this.getActive().pipe(map((cart) => cart.user));
    }
    /**
     * Returns true for guest cart
     */
    isGuestCart() {
        return (this.cartUser &&
            (this.cartUser.name === OCC_USER_ID_GUEST ||
                this.isEmail(this.cartUser.uid.split('|').slice(1).join('|'))));
    }
    /**
     * Add multiple entries to a cart
     *
     * @param cartEntries : list of entries to add (OrderEntry[])
     */
    addEntries(cartEntries) {
        cartEntries.forEach((entry) => {
            this.addEntry(entry.product.code, entry.quantity);
        });
    }
    isEmail(str) {
        if (str) {
            return str.match(EMAIL_PATTERN) ? true : false;
        }
        return false;
    }
    // TODO: Remove once backend is updated
    /**
     * Temporary method to merge guest cart with user cart because of backend limitation
     * This is for an edge case
     */
    guestCartMerge(cartId) {
        let cartEntries;
        this.getEntries()
            .pipe(take(1))
            .subscribe((entries) => {
            cartEntries = entries;
        });
        this.multiCartService.deleteCart(cartId, OCC_USER_ID_ANONYMOUS);
        this.addEntriesGuestMerge(cartEntries);
    }
    isEmpty(cart) {
        return (!cart || (typeof cart === 'object' && Object.keys(cart).length === 0));
    }
    isJustLoggedIn(userId) {
        return (this.previousUserId !== userId && // *just* logged in
            this.previousUserId !== this.PREVIOUS_USER_ID_INITIAL_VALUE // not app initialization
        );
    }
};
ActiveCartService.ctorParameters = () => [
    { type: Store },
    { type: AuthService },
    { type: MultiCartService }
];
ActiveCartService = __decorate([
    Injectable()
], ActiveCartService);

/**
 *
 * Withdraw from the source observable when notifier emits a value
 *
 * Withdraw will result in resubscribing to the source observable
 * Operator is useful to kill ongoing emission transformation on notifier emission
 *
 * @param notifier
 */
function withdrawOn(notifier) {
    return (source) => notifier.pipe(startWith(undefined), switchMapTo(source));
}

let CartEntryConnector = class CartEntryConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    add(userId, cartId, productCode, quantity) {
        return this.adapter.add(userId, cartId, productCode, quantity);
    }
    update(userId, cartId, entryNumber, qty, pickupStore) {
        return this.adapter.update(userId, cartId, entryNumber, qty, pickupStore);
    }
    remove(userId, cartId, entryNumber) {
        return this.adapter.remove(userId, cartId, entryNumber);
    }
};
CartEntryConnector.ctorParameters = () => [
    { type: CartEntryAdapter }
];
CartEntryConnector.ɵprov = ɵɵdefineInjectable({ factory: function CartEntryConnector_Factory() { return new CartEntryConnector(ɵɵinject(CartEntryAdapter)); }, token: CartEntryConnector, providedIn: "root" });
CartEntryConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CartEntryConnector);

let CartEntryEffects = class CartEntryEffects {
    constructor(actions$, cartEntryConnector) {
        this.actions$ = actions$;
        this.cartEntryConnector = cartEntryConnector;
        this.contextChange$ = this.actions$.pipe(ofType(CURRENCY_CHANGE, LANGUAGE_CHANGE));
        this.addEntry$ = this.actions$.pipe(ofType(CART_ADD_ENTRY), map((action) => action.payload), concatMap((payload) => {
            return this.cartEntryConnector
                .add(payload.userId, payload.cartId, payload.productCode, payload.quantity)
                .pipe(map((cartModification) => new CartAddEntrySuccess(Object.assign(Object.assign({}, payload), cartModification))), catchError((error) => from([
                new CartAddEntryFail(Object.assign(Object.assign({}, payload), { error: makeErrorSerializable(error) })),
                new LoadCart({
                    cartId: payload.cartId,
                    userId: payload.userId,
                }),
            ])));
        }), withdrawOn(this.contextChange$));
        this.removeEntry$ = this.actions$.pipe(ofType(CART_REMOVE_ENTRY), map((action) => action.payload), concatMap((payload) => this.cartEntryConnector
            .remove(payload.userId, payload.cartId, payload.entryNumber)
            .pipe(map(() => {
            return new CartRemoveEntrySuccess(Object.assign({}, payload));
        }), catchError((error) => from([
            new CartRemoveEntryFail(Object.assign(Object.assign({}, payload), { error: makeErrorSerializable(error) })),
            new LoadCart({
                cartId: payload.cartId,
                userId: payload.userId,
            }),
        ])))), withdrawOn(this.contextChange$));
        this.updateEntry$ = this.actions$.pipe(ofType(CART_UPDATE_ENTRY), map((action) => action.payload), concatMap((payload) => this.cartEntryConnector
            .update(payload.userId, payload.cartId, payload.entryNumber, payload.quantity)
            .pipe(map(() => {
            return new CartUpdateEntrySuccess(Object.assign({}, payload));
        }), catchError((error) => from([
            new CartUpdateEntryFail(Object.assign(Object.assign({}, payload), { error: makeErrorSerializable(error) })),
            new LoadCart({
                cartId: payload.cartId,
                userId: payload.userId,
            }),
        ])))), withdrawOn(this.contextChange$));
    }
};
CartEntryEffects.ctorParameters = () => [
    { type: Actions },
    { type: CartEntryConnector }
];
__decorate([
    Effect()
], CartEntryEffects.prototype, "addEntry$", void 0);
__decorate([
    Effect()
], CartEntryEffects.prototype, "removeEntry$", void 0);
__decorate([
    Effect()
], CartEntryEffects.prototype, "updateEntry$", void 0);
CartEntryEffects = __decorate([
    Injectable()
], CartEntryEffects);

let CartVoucherConnector = class CartVoucherConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    add(userId, cartId, voucherId) {
        return this.adapter.add(userId, cartId, voucherId);
    }
    remove(userId, cartId, voucherId) {
        return this.adapter.remove(userId, cartId, voucherId);
    }
};
CartVoucherConnector.ctorParameters = () => [
    { type: CartVoucherAdapter }
];
CartVoucherConnector.ɵprov = ɵɵdefineInjectable({ factory: function CartVoucherConnector_Factory() { return new CartVoucherConnector(ɵɵinject(CartVoucherAdapter)); }, token: CartVoucherConnector, providedIn: "root" });
CartVoucherConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CartVoucherConnector);

let CartVoucherEffects = class CartVoucherEffects {
    constructor(actions$, cartVoucherConnector, messageService) {
        this.actions$ = actions$;
        this.cartVoucherConnector = cartVoucherConnector;
        this.messageService = messageService;
        this.addCartVoucher$ = this.actions$.pipe(ofType(CART_ADD_VOUCHER), map((action) => action.payload), mergeMap((payload) => {
            return this.cartVoucherConnector
                .add(payload.userId, payload.cartId, payload.voucherId)
                .pipe(map(() => {
                this.showGlobalMessage('voucher.applyVoucherSuccess', payload.voucherId, GlobalMessageType.MSG_TYPE_CONFIRMATION);
                return new CartAddVoucherSuccess(Object.assign({}, payload));
            }), catchError((error) => {
                var _a;
                if ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.errors) {
                    error.error.errors.forEach((err) => {
                        if (err.message) {
                            this.messageService.add(err.message, GlobalMessageType.MSG_TYPE_ERROR);
                        }
                    });
                }
                return from([
                    new CartAddVoucherFail(Object.assign(Object.assign({}, payload), { error: makeErrorSerializable(error) })),
                    new CartProcessesDecrement(payload.cartId),
                    new LoadCart({
                        userId: payload.userId,
                        cartId: payload.cartId,
                    }),
                ]);
            }));
        }));
        this.removeCartVoucher$ = this.actions$.pipe(ofType(CART_REMOVE_VOUCHER), map((action) => action.payload), mergeMap((payload) => {
            return this.cartVoucherConnector
                .remove(payload.userId, payload.cartId, payload.voucherId)
                .pipe(map(() => {
                this.showGlobalMessage('voucher.removeVoucherSuccess', payload.voucherId, GlobalMessageType.MSG_TYPE_INFO);
                return new CartRemoveVoucherSuccess({
                    userId: payload.userId,
                    cartId: payload.cartId,
                    voucherId: payload.voucherId,
                });
            }), catchError((error) => from([
                new CartRemoveVoucherFail({
                    error: makeErrorSerializable(error),
                    cartId: payload.cartId,
                    userId: payload.userId,
                    voucherId: payload.voucherId,
                }),
                new LoadCart({
                    userId: payload.userId,
                    cartId: payload.cartId,
                }),
            ])));
        }));
    }
    showGlobalMessage(text, param, messageType) {
        this.messageService.add({ key: text, params: { voucherCode: param } }, messageType);
    }
};
CartVoucherEffects.ctorParameters = () => [
    { type: Actions },
    { type: CartVoucherConnector },
    { type: GlobalMessageService }
];
__decorate([
    Effect()
], CartVoucherEffects.prototype, "addCartVoucher$", void 0);
__decorate([
    Effect()
], CartVoucherEffects.prototype, "removeCartVoucher$", void 0);
CartVoucherEffects = __decorate([
    Injectable()
], CartVoucherEffects);

const VERIFY_ADDRESS = '[Checkout] Verify Address';
const VERIFY_ADDRESS_FAIL = '[Checkout] Verify Address Fail';
const VERIFY_ADDRESS_SUCCESS = '[Checkout] Verify Address Success';
const CLEAR_ADDRESS_VERIFICATION_RESULTS = '[Checkout] Clear Address Verification Results';
class VerifyAddress {
    constructor(payload) {
        this.payload = payload;
        this.type = VERIFY_ADDRESS;
    }
}
class VerifyAddressFail {
    constructor(payload) {
        this.payload = payload;
        this.type = VERIFY_ADDRESS_FAIL;
    }
}
class VerifyAddressSuccess {
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

const LOAD_CARD_TYPES = '[Checkout] Load Card Types';
const LOAD_CARD_TYPES_FAIL = '[Checkout] Load Card Fail';
const LOAD_CARD_TYPES_SUCCESS = '[Checkout] Load Card Success';
class LoadCardTypes {
    constructor() {
        this.type = LOAD_CARD_TYPES;
    }
}
class LoadCardTypesFail {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_CARD_TYPES_FAIL;
    }
}
class LoadCardTypesSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_CARD_TYPES_SUCCESS;
    }
}

const CHECKOUT_FEATURE = 'checkout';
const CHECKOUT_DETAILS = '[Checkout] Checkout Details';
const SET_DELIVERY_ADDRESS_PROCESS_ID = 'setDeliveryAddress';
const SET_DELIVERY_MODE_PROCESS_ID = 'setDeliveryMode';
const SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID = 'setSupportedDeliveryMode';
const SET_PAYMENT_DETAILS_PROCESS_ID = 'setPaymentDetails';

const CLEAR_CHECKOUT_DELIVERY_ADDRESS = '[Checkout] Clear Checkout Delivery Address';
const CLEAR_CHECKOUT_DELIVERY_ADDRESS_SUCCESS = '[Checkout] Clear Checkout Delivery Address Success';
const CLEAR_CHECKOUT_DELIVERY_ADDRESS_FAIL = '[Checkout] Clear Checkout Delivery Address Fail';
const CLEAR_CHECKOUT_DELIVERY_MODE = '[Checkout] Clear Checkout Delivery Mode';
const CLEAR_CHECKOUT_DELIVERY_MODE_SUCCESS = '[Checkout] Clear Checkout Delivery Mode Success';
const CLEAR_CHECKOUT_DELIVERY_MODE_FAIL = '[Checkout] Clear Checkout Delivery Mode Fail';
const ADD_DELIVERY_ADDRESS = '[Checkout] Add Delivery Address';
const ADD_DELIVERY_ADDRESS_FAIL = '[Checkout] Add Delivery Address Fail';
const ADD_DELIVERY_ADDRESS_SUCCESS = '[Checkout] Add Delivery Address Success';
const SET_DELIVERY_ADDRESS = '[Checkout] Set Delivery Address';
const SET_DELIVERY_ADDRESS_FAIL = '[Checkout] Set Delivery Address Fail';
const SET_DELIVERY_ADDRESS_SUCCESS = '[Checkout] Set Delivery Address Success';
const RESET_SET_DELIVERY_ADDRESS_PROCESS = '[Checkout] Reset Set Delivery Address Process';
const LOAD_SUPPORTED_DELIVERY_MODES = '[Checkout] Load Supported Delivery Modes';
const LOAD_SUPPORTED_DELIVERY_MODES_FAIL = '[Checkout] Load Supported Delivery Modes Fail';
const LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS = '[Checkout] Load Supported Delivery Modes Success';
const CLEAR_SUPPORTED_DELIVERY_MODES = '[Checkout] Clear Supported Delivery Modes';
const SET_DELIVERY_MODE = '[Checkout] Set Delivery Mode';
const SET_DELIVERY_MODE_FAIL = '[Checkout] Set Delivery Mode Fail';
const SET_DELIVERY_MODE_SUCCESS = '[Checkout] Set Delivery Mode Success';
const RESET_SET_DELIVERY_MODE_PROCESS = '[Checkout] Reset Set Delivery Mode Process';
const SET_SUPPORTED_DELIVERY_MODES = '[Checkout] Set Supported Delivery Modes';
const SET_SUPPORTED_DELIVERY_MODES_FAIL = '[Checkout] Set Supported Delivery Modes Fail';
const SET_SUPPORTED_DELIVERY_MODES_SUCCESS = '[Checkout] Set Supported Delivery Modes Success';
const RESET_SUPPORTED_SET_DELIVERY_MODES_PROCESS = '[Checkout] Reset Set Supported Delivery Modes Process';
const CREATE_PAYMENT_DETAILS = '[Checkout] Create Payment Details';
const CREATE_PAYMENT_DETAILS_FAIL = '[Checkout] Create Payment Details Fail';
const CREATE_PAYMENT_DETAILS_SUCCESS = '[Checkout] Create Payment Details Success';
const SET_PAYMENT_DETAILS = '[Checkout] Set Payment Details';
const SET_PAYMENT_DETAILS_FAIL = '[Checkout] Set Payment Details Fail';
const SET_PAYMENT_DETAILS_SUCCESS = '[Checkout] Set Payment Details Success';
const RESET_SET_PAYMENT_DETAILS_PROCESS = '[Checkout] Reset Set Payment Details Process';
const PLACE_ORDER = '[Checkout] Place Order';
const PLACE_ORDER_FAIL = '[Checkout] Place Order Fail';
const PLACE_ORDER_SUCCESS = '[Checkout] Place Order Success';
const CLEAR_CHECKOUT_STEP = '[Checkout] Clear One Checkout Step';
const CLEAR_CHECKOUT_DATA = '[Checkout] Clear Checkout Data';
const LOAD_CHECKOUT_DETAILS = '[Checkout] Load Checkout Details';
const LOAD_CHECKOUT_DETAILS_FAIL = '[Checkout] Load Checkout Details Fail';
const LOAD_CHECKOUT_DETAILS_SUCCESS = '[Checkout] Load Checkout Details Success';
const CHECKOUT_CLEAR_MISCS_DATA = '[Checkout] Clear Miscs Data';
const PAYMENT_PROCESS_SUCCESS = '[Checkout] Payment Process Success';
class AddDeliveryAddress {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS;
    }
}
class AddDeliveryAddressFail {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS_FAIL;
    }
}
class AddDeliveryAddressSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS_SUCCESS;
    }
}
class SetDeliveryAddress extends EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, SET_DELIVERY_ADDRESS_PROCESS_ID);
        this.payload = payload;
        this.type = SET_DELIVERY_ADDRESS;
    }
}
class SetDeliveryAddressFail extends EntityFailAction {
    constructor(payload) {
        super(PROCESS_FEATURE, SET_DELIVERY_ADDRESS_PROCESS_ID, payload);
        this.payload = payload;
        this.type = SET_DELIVERY_ADDRESS_FAIL;
    }
}
class SetDeliveryAddressSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(PROCESS_FEATURE, SET_DELIVERY_ADDRESS_PROCESS_ID);
        this.payload = payload;
        this.type = SET_DELIVERY_ADDRESS_SUCCESS;
    }
}
class ResetSetDeliveryAddressProcess extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, SET_DELIVERY_ADDRESS_PROCESS_ID);
        this.type = RESET_SET_DELIVERY_ADDRESS_PROCESS;
    }
}
class LoadSupportedDeliveryModes extends EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID);
        this.payload = payload;
        this.type = LOAD_SUPPORTED_DELIVERY_MODES;
    }
}
class LoadSupportedDeliveryModesFail extends EntityFailAction {
    constructor(payload) {
        super(PROCESS_FEATURE, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID);
        this.payload = payload;
        this.type = LOAD_SUPPORTED_DELIVERY_MODES_FAIL;
    }
}
class LoadSupportedDeliveryModesSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(PROCESS_FEATURE, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID);
        this.payload = payload;
        this.type = LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS;
    }
}
class ResetLoadSupportedDeliveryModesProcess extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID);
        this.type = RESET_SUPPORTED_SET_DELIVERY_MODES_PROCESS;
    }
}
class SetDeliveryMode extends EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, SET_DELIVERY_MODE_PROCESS_ID);
        this.payload = payload;
        this.type = SET_DELIVERY_MODE;
    }
}
class SetDeliveryModeFail extends EntityFailAction {
    constructor(payload) {
        super(PROCESS_FEATURE, SET_DELIVERY_MODE_PROCESS_ID, payload);
        this.payload = payload;
        this.type = SET_DELIVERY_MODE_FAIL;
    }
}
class SetDeliveryModeSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(PROCESS_FEATURE, SET_DELIVERY_MODE_PROCESS_ID);
        this.payload = payload;
        this.type = SET_DELIVERY_MODE_SUCCESS;
    }
}
class ResetSetDeliveryModeProcess extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, SET_DELIVERY_MODE_PROCESS_ID);
        this.type = RESET_SET_DELIVERY_MODE_PROCESS;
    }
}
class CreatePaymentDetails extends EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID);
        this.payload = payload;
        this.type = CREATE_PAYMENT_DETAILS;
    }
}
class CreatePaymentDetailsFail extends EntityFailAction {
    constructor(payload) {
        super(PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID);
        this.payload = payload;
        this.type = CREATE_PAYMENT_DETAILS_FAIL;
    }
}
class CreatePaymentDetailsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_PAYMENT_DETAILS_SUCCESS;
    }
}
class PaymentProcessSuccess extends EntitySuccessAction {
    constructor() {
        super(PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID);
        this.type = PAYMENT_PROCESS_SUCCESS;
    }
}
class SetPaymentDetails extends EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID);
        this.payload = payload;
        this.type = SET_PAYMENT_DETAILS;
    }
}
class SetPaymentDetailsFail extends EntityFailAction {
    constructor(payload) {
        super(PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID, payload);
        this.payload = payload;
        this.type = SET_PAYMENT_DETAILS_FAIL;
    }
}
class SetPaymentDetailsSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID);
        this.payload = payload;
        this.type = SET_PAYMENT_DETAILS_SUCCESS;
    }
}
class ResetSetPaymentDetailsProcess extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID);
        this.type = RESET_SET_PAYMENT_DETAILS_PROCESS;
    }
}
class PlaceOrder {
    constructor(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER;
    }
}
class PlaceOrderFail {
    constructor(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER_FAIL;
    }
}
class PlaceOrderSuccess {
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
    constructor(payload) {
        super(CHECKOUT_DETAILS);
        this.payload = payload;
        this.type = LOAD_CHECKOUT_DETAILS;
    }
}
class LoadCheckoutDetailsFail extends LoaderFailAction {
    constructor(payload) {
        super(CHECKOUT_DETAILS, payload);
        this.payload = payload;
        this.type = LOAD_CHECKOUT_DETAILS_FAIL;
    }
}
class LoadCheckoutDetailsSuccess extends LoaderSuccessAction {
    constructor(payload) {
        super(CHECKOUT_DETAILS);
        this.payload = payload;
        this.type = LOAD_CHECKOUT_DETAILS_SUCCESS;
    }
}
class CheckoutClearMiscsData {
    constructor() {
        this.type = CHECKOUT_CLEAR_MISCS_DATA;
    }
}
class ClearCheckoutDeliveryAddress {
    constructor(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_DELIVERY_ADDRESS;
    }
}
class ClearCheckoutDeliveryAddressSuccess {
    constructor() {
        this.type = CLEAR_CHECKOUT_DELIVERY_ADDRESS_SUCCESS;
    }
}
class ClearCheckoutDeliveryAddressFail {
    constructor(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_DELIVERY_ADDRESS_FAIL;
    }
}
class ClearCheckoutDeliveryMode extends EntityProcessesIncrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_DELIVERY_MODE;
    }
}
class ClearCheckoutDeliveryModeSuccess extends EntityProcessesDecrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_DELIVERY_MODE_SUCCESS;
    }
}
class ClearCheckoutDeliveryModeFail extends EntityProcessesDecrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_DELIVERY_MODE_FAIL;
    }
}



var checkoutGroup_actions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    VERIFY_ADDRESS: VERIFY_ADDRESS,
    VERIFY_ADDRESS_FAIL: VERIFY_ADDRESS_FAIL,
    VERIFY_ADDRESS_SUCCESS: VERIFY_ADDRESS_SUCCESS,
    CLEAR_ADDRESS_VERIFICATION_RESULTS: CLEAR_ADDRESS_VERIFICATION_RESULTS,
    VerifyAddress: VerifyAddress,
    VerifyAddressFail: VerifyAddressFail,
    VerifyAddressSuccess: VerifyAddressSuccess,
    ClearAddressVerificationResults: ClearAddressVerificationResults,
    LOAD_CARD_TYPES: LOAD_CARD_TYPES,
    LOAD_CARD_TYPES_FAIL: LOAD_CARD_TYPES_FAIL,
    LOAD_CARD_TYPES_SUCCESS: LOAD_CARD_TYPES_SUCCESS,
    LoadCardTypes: LoadCardTypes,
    LoadCardTypesFail: LoadCardTypesFail,
    LoadCardTypesSuccess: LoadCardTypesSuccess,
    CLEAR_CHECKOUT_DELIVERY_ADDRESS: CLEAR_CHECKOUT_DELIVERY_ADDRESS,
    CLEAR_CHECKOUT_DELIVERY_ADDRESS_SUCCESS: CLEAR_CHECKOUT_DELIVERY_ADDRESS_SUCCESS,
    CLEAR_CHECKOUT_DELIVERY_ADDRESS_FAIL: CLEAR_CHECKOUT_DELIVERY_ADDRESS_FAIL,
    CLEAR_CHECKOUT_DELIVERY_MODE: CLEAR_CHECKOUT_DELIVERY_MODE,
    CLEAR_CHECKOUT_DELIVERY_MODE_SUCCESS: CLEAR_CHECKOUT_DELIVERY_MODE_SUCCESS,
    CLEAR_CHECKOUT_DELIVERY_MODE_FAIL: CLEAR_CHECKOUT_DELIVERY_MODE_FAIL,
    ADD_DELIVERY_ADDRESS: ADD_DELIVERY_ADDRESS,
    ADD_DELIVERY_ADDRESS_FAIL: ADD_DELIVERY_ADDRESS_FAIL,
    ADD_DELIVERY_ADDRESS_SUCCESS: ADD_DELIVERY_ADDRESS_SUCCESS,
    SET_DELIVERY_ADDRESS: SET_DELIVERY_ADDRESS,
    SET_DELIVERY_ADDRESS_FAIL: SET_DELIVERY_ADDRESS_FAIL,
    SET_DELIVERY_ADDRESS_SUCCESS: SET_DELIVERY_ADDRESS_SUCCESS,
    RESET_SET_DELIVERY_ADDRESS_PROCESS: RESET_SET_DELIVERY_ADDRESS_PROCESS,
    LOAD_SUPPORTED_DELIVERY_MODES: LOAD_SUPPORTED_DELIVERY_MODES,
    LOAD_SUPPORTED_DELIVERY_MODES_FAIL: LOAD_SUPPORTED_DELIVERY_MODES_FAIL,
    LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS: LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS,
    CLEAR_SUPPORTED_DELIVERY_MODES: CLEAR_SUPPORTED_DELIVERY_MODES,
    SET_DELIVERY_MODE: SET_DELIVERY_MODE,
    SET_DELIVERY_MODE_FAIL: SET_DELIVERY_MODE_FAIL,
    SET_DELIVERY_MODE_SUCCESS: SET_DELIVERY_MODE_SUCCESS,
    RESET_SET_DELIVERY_MODE_PROCESS: RESET_SET_DELIVERY_MODE_PROCESS,
    SET_SUPPORTED_DELIVERY_MODES: SET_SUPPORTED_DELIVERY_MODES,
    SET_SUPPORTED_DELIVERY_MODES_FAIL: SET_SUPPORTED_DELIVERY_MODES_FAIL,
    SET_SUPPORTED_DELIVERY_MODES_SUCCESS: SET_SUPPORTED_DELIVERY_MODES_SUCCESS,
    RESET_SUPPORTED_SET_DELIVERY_MODES_PROCESS: RESET_SUPPORTED_SET_DELIVERY_MODES_PROCESS,
    CREATE_PAYMENT_DETAILS: CREATE_PAYMENT_DETAILS,
    CREATE_PAYMENT_DETAILS_FAIL: CREATE_PAYMENT_DETAILS_FAIL,
    CREATE_PAYMENT_DETAILS_SUCCESS: CREATE_PAYMENT_DETAILS_SUCCESS,
    SET_PAYMENT_DETAILS: SET_PAYMENT_DETAILS,
    SET_PAYMENT_DETAILS_FAIL: SET_PAYMENT_DETAILS_FAIL,
    SET_PAYMENT_DETAILS_SUCCESS: SET_PAYMENT_DETAILS_SUCCESS,
    RESET_SET_PAYMENT_DETAILS_PROCESS: RESET_SET_PAYMENT_DETAILS_PROCESS,
    PLACE_ORDER: PLACE_ORDER,
    PLACE_ORDER_FAIL: PLACE_ORDER_FAIL,
    PLACE_ORDER_SUCCESS: PLACE_ORDER_SUCCESS,
    CLEAR_CHECKOUT_STEP: CLEAR_CHECKOUT_STEP,
    CLEAR_CHECKOUT_DATA: CLEAR_CHECKOUT_DATA,
    LOAD_CHECKOUT_DETAILS: LOAD_CHECKOUT_DETAILS,
    LOAD_CHECKOUT_DETAILS_FAIL: LOAD_CHECKOUT_DETAILS_FAIL,
    LOAD_CHECKOUT_DETAILS_SUCCESS: LOAD_CHECKOUT_DETAILS_SUCCESS,
    CHECKOUT_CLEAR_MISCS_DATA: CHECKOUT_CLEAR_MISCS_DATA,
    PAYMENT_PROCESS_SUCCESS: PAYMENT_PROCESS_SUCCESS,
    AddDeliveryAddress: AddDeliveryAddress,
    AddDeliveryAddressFail: AddDeliveryAddressFail,
    AddDeliveryAddressSuccess: AddDeliveryAddressSuccess,
    SetDeliveryAddress: SetDeliveryAddress,
    SetDeliveryAddressFail: SetDeliveryAddressFail,
    SetDeliveryAddressSuccess: SetDeliveryAddressSuccess,
    ResetSetDeliveryAddressProcess: ResetSetDeliveryAddressProcess,
    LoadSupportedDeliveryModes: LoadSupportedDeliveryModes,
    LoadSupportedDeliveryModesFail: LoadSupportedDeliveryModesFail,
    LoadSupportedDeliveryModesSuccess: LoadSupportedDeliveryModesSuccess,
    ResetLoadSupportedDeliveryModesProcess: ResetLoadSupportedDeliveryModesProcess,
    SetDeliveryMode: SetDeliveryMode,
    SetDeliveryModeFail: SetDeliveryModeFail,
    SetDeliveryModeSuccess: SetDeliveryModeSuccess,
    ResetSetDeliveryModeProcess: ResetSetDeliveryModeProcess,
    CreatePaymentDetails: CreatePaymentDetails,
    CreatePaymentDetailsFail: CreatePaymentDetailsFail,
    CreatePaymentDetailsSuccess: CreatePaymentDetailsSuccess,
    PaymentProcessSuccess: PaymentProcessSuccess,
    SetPaymentDetails: SetPaymentDetails,
    SetPaymentDetailsFail: SetPaymentDetailsFail,
    SetPaymentDetailsSuccess: SetPaymentDetailsSuccess,
    ResetSetPaymentDetailsProcess: ResetSetPaymentDetailsProcess,
    PlaceOrder: PlaceOrder,
    PlaceOrderFail: PlaceOrderFail,
    PlaceOrderSuccess: PlaceOrderSuccess,
    ClearSupportedDeliveryModes: ClearSupportedDeliveryModes,
    ClearCheckoutStep: ClearCheckoutStep,
    ClearCheckoutData: ClearCheckoutData,
    LoadCheckoutDetails: LoadCheckoutDetails,
    LoadCheckoutDetailsFail: LoadCheckoutDetailsFail,
    LoadCheckoutDetailsSuccess: LoadCheckoutDetailsSuccess,
    CheckoutClearMiscsData: CheckoutClearMiscsData,
    ClearCheckoutDeliveryAddress: ClearCheckoutDeliveryAddress,
    ClearCheckoutDeliveryAddressSuccess: ClearCheckoutDeliveryAddressSuccess,
    ClearCheckoutDeliveryAddressFail: ClearCheckoutDeliveryAddressFail,
    ClearCheckoutDeliveryMode: ClearCheckoutDeliveryMode,
    ClearCheckoutDeliveryModeSuccess: ClearCheckoutDeliveryModeSuccess,
    ClearCheckoutDeliveryModeFail: ClearCheckoutDeliveryModeFail
});

let CartConnector = class CartConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    loadAll(userId) {
        return this.adapter.loadAll(userId);
    }
    load(userId, cartId) {
        return this.adapter.load(userId, cartId);
    }
    create(userId, oldCartId, toMergeCartGuid) {
        return this.adapter.create(userId, oldCartId, toMergeCartGuid);
    }
    delete(userId, cartId) {
        return this.adapter.delete(userId, cartId);
    }
    addEmail(userId, cartId, email) {
        return this.adapter.addEmail(userId, cartId, email);
    }
};
CartConnector.ctorParameters = () => [
    { type: CartAdapter }
];
CartConnector.ɵprov = ɵɵdefineInjectable({ factory: function CartConnector_Factory() { return new CartConnector(ɵɵinject(CartAdapter)); }, token: CartConnector, providedIn: "root" });
CartConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CartConnector);

let CartEffects = class CartEffects {
    constructor(actions$, cartConnector, store) {
        this.actions$ = actions$;
        this.cartConnector = cartConnector;
        this.store = store;
        this.contextChange$ = this.actions$.pipe(ofType(CURRENCY_CHANGE, LANGUAGE_CHANGE));
        this.loadCart$ = this.actions$.pipe(ofType(LOAD_CART), map((action) => action.payload), groupBy((payload) => payload.cartId), mergeMap((group$) => group$.pipe(switchMap((payload) => {
            return of(payload).pipe(withLatestFrom(this.store.pipe(select(getCartHasPendingProcessesSelectorFactory(payload.cartId)))));
        }), filter(([_, hasPendingProcesses]) => !hasPendingProcesses), map(([payload]) => payload), switchMap((payload) => {
            return this.cartConnector.load(payload.userId, payload.cartId).pipe(mergeMap((cart) => {
                let actions = [];
                if (cart) {
                    actions.push(new LoadCartSuccess(Object.assign(Object.assign({}, payload), { cart, cartId: getCartIdByUserId(cart, payload.userId) })));
                    if (payload.cartId === OCC_CART_ID_CURRENT) {
                        // Removing cart from entity object under `current` key as it is no longer needed.
                        // Current cart is loaded under it's code entity.
                        actions.push(new RemoveCart({ cartId: OCC_CART_ID_CURRENT }));
                    }
                }
                else {
                    actions = [
                        new LoadCartFail(Object.assign(Object.assign({}, payload), { error: {} })),
                    ];
                }
                return actions;
            }), catchError((error) => {
                var _a;
                if ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.errors) {
                    const couponExpiredErrors = error.error.errors.filter((err) => err.reason === 'invalid');
                    if (couponExpiredErrors.length > 0) {
                        // Reload in case of expired coupon.
                        return of(new LoadCart(Object.assign({}, payload)));
                    }
                    const cartNotFoundErrors = error.error.errors.filter((err) => err.reason === 'notFound' || 'UnknownResourceError');
                    if (cartNotFoundErrors.length > 0) {
                        // Remove cart as it doesn't exist on backend.
                        return of(new RemoveCart({ cartId: payload.cartId }));
                    }
                }
                return of(new LoadCartFail(Object.assign(Object.assign({}, payload), { error: makeErrorSerializable(error) })));
            }));
        }))), withdrawOn(this.contextChange$));
        this.createCart$ = this.actions$.pipe(ofType(CREATE_CART), map((action) => action.payload), mergeMap((payload) => {
            return this.cartConnector
                .create(payload.userId, payload.oldCartId, payload.toMergeCartGuid)
                .pipe(switchMap((cart) => {
                const conditionalActions = [];
                if (payload.oldCartId) {
                    conditionalActions.push(new MergeCartSuccess({
                        extraData: payload.extraData,
                        userId: payload.userId,
                        tempCartId: payload.tempCartId,
                        cartId: getCartIdByUserId(cart, payload.userId),
                        oldCartId: payload.oldCartId,
                    }));
                }
                return [
                    new CreateCartSuccess(Object.assign(Object.assign({}, payload), { cart, cartId: getCartIdByUserId(cart, payload.userId) })),
                    new SetTempCart({
                        cart,
                        tempCartId: payload.tempCartId,
                    }),
                    ...conditionalActions,
                ];
            }), catchError((error) => of(new CreateCartFail(Object.assign(Object.assign({}, payload), { error: makeErrorSerializable(error) })))));
        }), withdrawOn(this.contextChange$));
        this.mergeCart$ = this.actions$.pipe(ofType(MERGE_CART), map((action) => action.payload), mergeMap((payload) => {
            return this.cartConnector.load(payload.userId, OCC_CART_ID_CURRENT).pipe(mergeMap((currentCart) => {
                return [
                    new CreateCart({
                        userId: payload.userId,
                        oldCartId: payload.cartId,
                        toMergeCartGuid: currentCart ? currentCart.guid : undefined,
                        extraData: payload.extraData,
                        tempCartId: payload.tempCartId,
                    }),
                ];
            }));
        }), withdrawOn(this.contextChange$));
        // TODO(#7241): Remove when AddVoucherSuccess actions will extend processes actions
        this.refresh$ = this.actions$.pipe(ofType(CART_ADD_VOUCHER_SUCCESS), map((action) => action.payload), concatMap((payload) => from([
            new CartProcessesDecrement(payload.cartId),
            new LoadCart({
                userId: payload.userId,
                cartId: payload.cartId,
            }),
        ])));
        // TODO: Switch to automatic cart reload on processes count reaching 0 for cart entity
        this.refreshWithoutProcesses$ = this.actions$.pipe(ofType(CART_ADD_ENTRY_SUCCESS, CART_REMOVE_ENTRY_SUCCESS, CART_UPDATE_ENTRY_SUCCESS, CART_REMOVE_VOUCHER_SUCCESS, CLEAR_CHECKOUT_DELIVERY_MODE_SUCCESS), map((action) => action.payload), map((payload) => new LoadCart({
            userId: payload.userId,
            cartId: payload.cartId,
        })));
        this.resetCartDetailsOnSiteContextChange$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE, CURRENCY_CHANGE), mergeMap(() => {
            return [new ResetCartDetails()];
        }));
        this.addEmail$ = this.actions$.pipe(ofType(ADD_EMAIL_TO_CART), map((action) => action.payload), mergeMap((payload) => this.cartConnector
            .addEmail(payload.userId, payload.cartId, payload.email)
            .pipe(mergeMap(() => {
            return [
                new AddEmailToCartSuccess(Object.assign({}, payload)),
                new LoadCart({
                    userId: payload.userId,
                    cartId: payload.cartId,
                }),
            ];
        }), catchError((error) => from([
            new AddEmailToCartFail(Object.assign(Object.assign({}, payload), { error: makeErrorSerializable(error) })),
            new LoadCart({
                userId: payload.userId,
                cartId: payload.cartId,
            }),
        ])))), withdrawOn(this.contextChange$));
        this.deleteCart$ = this.actions$.pipe(ofType(DELETE_CART), map((action) => action.payload), mergeMap((payload) => this.cartConnector.delete(payload.userId, payload.cartId).pipe(map(() => {
            return new DeleteCartSuccess(Object.assign({}, payload));
        }), catchError((error) => from([
            new DeleteCartFail(Object.assign(Object.assign({}, payload), { error: makeErrorSerializable(error) })),
            // Error might happen in higher backend layer and cart could still be removed.
            // When load fail with NotFound error then RemoveCart action will kick in and clear that cart in our state.
            new LoadCart(Object.assign({}, payload)),
        ])))));
    }
};
CartEffects.ctorParameters = () => [
    { type: Actions },
    { type: CartConnector },
    { type: Store }
];
__decorate([
    Effect()
], CartEffects.prototype, "loadCart$", void 0);
__decorate([
    Effect()
], CartEffects.prototype, "createCart$", void 0);
__decorate([
    Effect()
], CartEffects.prototype, "mergeCart$", void 0);
__decorate([
    Effect()
], CartEffects.prototype, "refresh$", void 0);
__decorate([
    Effect()
], CartEffects.prototype, "refreshWithoutProcesses$", void 0);
__decorate([
    Effect()
], CartEffects.prototype, "resetCartDetailsOnSiteContextChange$", void 0);
__decorate([
    Effect()
], CartEffects.prototype, "addEmail$", void 0);
__decorate([
    Effect()
], CartEffects.prototype, "deleteCart$", void 0);
CartEffects = __decorate([
    Injectable()
], CartEffects);

let SaveCartConnector = class SaveCartConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    saveCart(userId, cartId, saveCartName, saveCartDescription) {
        return this.adapter.saveCart(userId, cartId, saveCartName, saveCartDescription);
    }
};
SaveCartConnector.ctorParameters = () => [
    { type: SaveCartAdapter }
];
SaveCartConnector.ɵprov = ɵɵdefineInjectable({ factory: function SaveCartConnector_Factory() { return new SaveCartConnector(ɵɵinject(SaveCartAdapter)); }, token: SaveCartConnector, providedIn: "root" });
SaveCartConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SaveCartConnector);

let WishListEffects = class WishListEffects {
    constructor(actions$, cartConnector, saveCartConnector, authService, store) {
        this.actions$ = actions$;
        this.cartConnector = cartConnector;
        this.saveCartConnector = saveCartConnector;
        this.authService = authService;
        this.store = store;
        this.createWishList$ = this.actions$.pipe(ofType(CREATE_WISH_LIST), map((action) => action.payload), switchMap((payload) => {
            return this.cartConnector.create(payload.userId).pipe(switchMap((cart) => {
                return this.saveCartConnector
                    .saveCart(payload.userId, cart.code, payload.name, payload.description)
                    .pipe(switchMap((saveCartResult) => [
                    new CreateWishListSuccess({
                        cart: saveCartResult.savedCartData,
                        userId: payload.userId,
                    }),
                ]), catchError((error) => from([
                    new CreateWishListFail({
                        cartId: cart.code,
                        error: makeErrorSerializable(error),
                    }),
                ])));
            }));
        }));
        this.loadWishList$ = this.actions$.pipe(ofType(LOAD_WISH_LIST), map((action) => action.payload), concatMap((payload) => {
            const { userId, customerId, tempCartId } = payload;
            return this.cartConnector.loadAll(userId).pipe(switchMap((carts) => {
                if (carts) {
                    const wishList = carts.find((cart) => cart.name === getWishlistName(customerId));
                    if (Boolean(wishList)) {
                        return [
                            new LoadWishListSuccess({
                                cart: wishList,
                                userId,
                                tempCartId,
                                customerId,
                                cartId: getCartIdByUserId(wishList, userId),
                            }),
                            new RemoveCart({ cartId: tempCartId }),
                        ];
                    }
                    else {
                        return [
                            new CreateWishList({
                                userId,
                                name: getWishlistName(customerId),
                            }),
                        ];
                    }
                }
            }), catchError((error) => from([
                new LoadWishListFail({
                    userId,
                    cartId: tempCartId,
                    customerId,
                    error: makeErrorSerializable(error),
                }),
            ])));
        }));
        this.resetWishList$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE, CURRENCY_CHANGE), withLatestFrom(this.authService.getOccUserId(), this.store.pipe(select(getWishListId))), switchMap(([, userId, wishListId]) => {
            if (Boolean(wishListId)) {
                return this.cartConnector.load(userId, wishListId).pipe(switchMap((wishList) => [
                    new LoadWishListSuccess({
                        cart: wishList,
                        userId,
                        cartId: getCartIdByUserId(wishList, userId),
                    }),
                ]), catchError((error) => from([
                    new LoadWishListFail({
                        userId,
                        cartId: wishListId,
                        error: makeErrorSerializable(error),
                    }),
                ])));
            }
            return EMPTY;
        }));
    }
};
WishListEffects.ctorParameters = () => [
    { type: Actions },
    { type: CartConnector },
    { type: SaveCartConnector },
    { type: AuthService },
    { type: Store }
];
__decorate([
    Effect()
], WishListEffects.prototype, "createWishList$", void 0);
__decorate([
    Effect()
], WishListEffects.prototype, "loadWishList$", void 0);
__decorate([
    Effect()
], WishListEffects.prototype, "resetWishList$", void 0);
WishListEffects = __decorate([
    Injectable()
], WishListEffects);

const activeCartInitialState = '';
const wishListInitialState = '';
function activeCartReducer(state = activeCartInitialState, action) {
    var _a, _b, _c;
    switch (action.type) {
        case LOAD_CART_SUCCESS:
        case CREATE_CART_SUCCESS:
        // point to `temp-${uuid}` cart when we are creating/merging cart
        case CREATE_CART:
            if ((_b = (_a = action === null || action === void 0 ? void 0 : action.payload) === null || _a === void 0 ? void 0 : _a.extraData) === null || _b === void 0 ? void 0 : _b.active) {
                return action.meta.entityId;
            }
            else {
                return state;
            }
        case SET_ACTIVE_CART_ID:
            return action.payload;
        case REMOVE_CART:
        case DELETE_CART_SUCCESS:
            if (((_c = action.payload) === null || _c === void 0 ? void 0 : _c.cartId) === state) {
                return activeCartInitialState;
            }
            return state;
        case CLEAR_CART_STATE:
            return activeCartInitialState;
    }
    return state;
}
const cartEntitiesInitialState = undefined;
function cartEntitiesReducer(state = cartEntitiesInitialState, action) {
    switch (action.type) {
        case LOAD_CART_SUCCESS:
        case CREATE_CART_SUCCESS:
        case CREATE_WISH_LIST_SUCCESS:
        case LOAD_WISH_LIST_SUCCESS:
        case SET_TEMP_CART:
            return action.payload.cart;
    }
    return state;
}
function wishListReducer(state = wishListInitialState, action) {
    switch (action.type) {
        case CREATE_WISH_LIST_SUCCESS:
        case LOAD_WISH_LIST_SUCCESS:
            return action.meta.entityId;
        case CLEAR_CART_STATE:
            return wishListInitialState;
    }
    return state;
}

function clearMultiCartState(reducer) {
    return function (state, action) {
        if (action.type === LOGOUT) {
            state = undefined;
        }
        return reducer(state, action);
    };
}
const multiCartMetaReducers = [clearMultiCartState];
const multiCartReducerToken = new InjectionToken('MultiCartReducers');
function getMultiCartReducers() {
    return {
        carts: entityProcessesLoaderReducer(MULTI_CART_DATA, cartEntitiesReducer),
        active: activeCartReducer,
        wishList: wishListReducer,
    };
}
const multiCartReducerProvider = {
    provide: multiCartReducerToken,
    useFactory: getMultiCartReducers,
};

// =====================================================================
class CartAddEntryEvent {
}
class CartAddEntrySuccessEvent {
}
class CartAddEntryFailEvent {
}

/**
 * Registers events for the active cart
 */
let CartEventBuilder = class CartEventBuilder {
    constructor(actionsSubject, event, activeCartService) {
        this.actionsSubject = actionsSubject;
        this.event = event;
        this.activeCartService = activeCartService;
        this.register();
    }
    /**
     * Registers events for the active cart
     */
    register() {
        this.registerAddEntry();
    }
    /**
     * Register events for adding entry to the active cart
     */
    registerAddEntry() {
        this.registerMapped({
            action: CART_ADD_ENTRY,
            event: CartAddEntryEvent,
        });
        this.registerMapped({
            action: CART_ADD_ENTRY_SUCCESS,
            event: CartAddEntrySuccessEvent,
        });
        this.registerMapped({
            action: CART_ADD_ENTRY_FAIL,
            event: CartAddEntryFailEvent,
        });
    }
    /**
     * Registers a stream of target events mapped from the source actions that contain the cart id equal to the active cart id.
     *
     * @param mapping mapping declaration - from `action` string type to `event` class type
     *   (an with optional `factory` function - by default `action.payload` will be assigned to the properties of the event instance).
     */
    registerMapped(mapping) {
        const eventStream$ = this.getAction(mapping.action).pipe(withLatestFrom(this.activeCartService.getActiveCartId()), filter(([action, activeCartId]) => action.payload['cartId'] === activeCartId // assuming that action's payload contains the cart id
        ), map(([action]) => createFrom(mapping.event, action.payload)));
        return this.event.register(mapping.event, eventStream$);
    }
    /**
     * Returns a stream of actions only of a given type(s)
     *
     * @param actionType type(s) of actions
     */
    getAction(actionType) {
        return this.actionsSubject.pipe(ofType(...[].concat(actionType)));
    }
};
CartEventBuilder.ctorParameters = () => [
    { type: ActionsSubject },
    { type: EventService },
    { type: ActiveCartService }
];
CartEventBuilder.ɵprov = ɵɵdefineInjectable({ factory: function CartEventBuilder_Factory() { return new CartEventBuilder(ɵɵinject(ActionsSubject), ɵɵinject(EventService), ɵɵinject(ActiveCartService)); }, token: CartEventBuilder, providedIn: "root" });
CartEventBuilder = __decorate([
    Injectable({ providedIn: 'root' })
], CartEventBuilder);

let CartEventModule = class CartEventModule {
    constructor(_CartEventBuilder) { }
};
CartEventModule.ctorParameters = () => [
    { type: CartEventBuilder }
];
CartEventModule = __decorate([
    NgModule({})
], CartEventModule);

let CartVoucherService = class CartVoucherService {
    constructor(store, authService, activeCartService) {
        this.store = store;
        this.authService = authService;
        this.activeCartService = activeCartService;
    }
    addVoucher(voucherId, cartId) {
        this.combineUserAndCartId(cartId).subscribe(([occUserId, cartIdentifier]) => this.store.dispatch(new CartAddVoucher({
            userId: occUserId,
            cartId: cartIdentifier,
            voucherId: voucherId,
        })));
    }
    removeVoucher(voucherId, cartId) {
        this.combineUserAndCartId(cartId).subscribe(([occUserId, cartIdentifier]) => this.store.dispatch(new CartRemoveVoucher({
            userId: occUserId,
            cartId: cartIdentifier,
            voucherId: voucherId,
        })));
    }
    // TODO(#7241): Remove when switching to event system for add voucher
    /**
     * Get add voucher process error flag
     * @deprecated since 2.0
     */
    getAddVoucherResultError() {
        return this.store.pipe(select(getProcessErrorFactory(ADD_VOUCHER_PROCESS_ID)));
    }
    // TODO(#7241): Remove when switching to event system for add voucher
    /**
     * Get add voucher process success flag
     * @deprecated since 2.0
     */
    getAddVoucherResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(ADD_VOUCHER_PROCESS_ID)));
    }
    // TODO(#7241): Remove when switching to event system for add voucher
    /**
     * Get add voucher process loading flag
     * @deprecated since 2.0
     */
    getAddVoucherResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(ADD_VOUCHER_PROCESS_ID)));
    }
    // TODO(#7241): Remove when switching to event system for add voucher
    /**
     * Reset add voucher process
     * @deprecated since 2.0
     */
    resetAddVoucherProcessingState() {
        this.store.dispatch(new CartResetAddVoucher());
    }
    combineUserAndCartId(cartId) {
        if (cartId) {
            return this.authService.getOccUserId().pipe(take(1), map((userId) => [userId, cartId]));
        }
        else {
            return combineLatest([
                this.authService.getOccUserId(),
                this.activeCartService.getActiveCartId(),
            ]).pipe(take(1));
        }
    }
};
CartVoucherService.ctorParameters = () => [
    { type: Store },
    { type: AuthService },
    { type: ActiveCartService }
];
CartVoucherService = __decorate([
    Injectable()
], CartVoucherService);

let UserService = class UserService {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Returns a user
     */
    get() {
        return this.store.pipe(select(getDetails), tap((details) => {
            if (Object.keys(details).length === 0) {
                this.load();
            }
        }));
    }
    /**
     * Loads the user's details
     */
    load() {
        this.authService.invokeWithUserId((userId) => {
            if (userId !== OCC_USER_ID_ANONYMOUS) {
                this.store.dispatch(new LoadUserDetails(userId));
            }
        });
    }
    /**
     * Register a new user
     *
     * @param submitFormData as UserRegisterFormData
     */
    register(userRegisterFormData) {
        this.store.dispatch(new RegisterUser(userRegisterFormData));
    }
    /**
     * Register a new user from guest
     *
     * @param guid
     * @param password
     */
    registerGuest(guid, password) {
        this.store.dispatch(new RegisterGuest({ guid, password }));
    }
    /**
     * Returns the register user process loading flag
     */
    getRegisterUserResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(REGISTER_USER_PROCESS_ID)));
    }
    /**
     * Returns the register user process success flag
     */
    getRegisterUserResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(REGISTER_USER_PROCESS_ID)));
    }
    /**
     * Returns the register user process error flag
     */
    getRegisterUserResultError() {
        return this.store.pipe(select(getProcessErrorFactory(REGISTER_USER_PROCESS_ID)));
    }
    /**
     * Resets the register user process flags
     */
    resetRegisterUserProcessState() {
        return this.store.dispatch(new ResetRegisterUserProcess());
    }
    /**
     * Remove user account, that's also called close user's account
     */
    remove() {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new RemoveUser(userId));
        });
    }
    /**
     * Returns the remove user loading flag
     */
    getRemoveUserResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(REMOVE_USER_PROCESS_ID)));
    }
    /**
     * Returns the remove user failure outcome.
     */
    getRemoveUserResultError() {
        return this.store.pipe(select(getProcessErrorFactory(REMOVE_USER_PROCESS_ID)));
    }
    /**
     * Returns the remove user process success outcome.
     */
    getRemoveUserResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(REMOVE_USER_PROCESS_ID)));
    }
    /**
     * Resets the remove user process state. The state needs to be reset after the process
     * concludes, regardless if it's a success or an error
     */
    resetRemoveUserProcessState() {
        this.store.dispatch(new RemoveUserReset());
    }
    /**
     * Returns titles
     */
    getTitles() {
        return this.store.pipe(select(getAllTitles));
    }
    /**
     * Retrieves titles
     */
    loadTitles() {
        this.store.dispatch(new LoadTitles());
    }
    /**
     * Return whether user's password is successfully reset
     */
    isPasswordReset() {
        return this.store.pipe(select(getResetPassword));
    }
    /**
     * Updates the user's details
     * @param userDetails to be updated
     */
    updatePersonalDetails(userDetails) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new UpdateUserDetails({
                username: userId,
                userDetails,
            }));
        });
    }
    /**
     * Returns the update user's personal details loading flag
     */
    getUpdatePersonalDetailsResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(UPDATE_USER_DETAILS_PROCESS_ID)));
    }
    /**
     * Returns the update user's personal details error flag
     */
    getUpdatePersonalDetailsResultError() {
        return this.store.pipe(select(getProcessErrorFactory(UPDATE_USER_DETAILS_PROCESS_ID)));
    }
    /**
     * Returns the update user's personal details success flag
     */
    getUpdatePersonalDetailsResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(UPDATE_USER_DETAILS_PROCESS_ID)));
    }
    /**
     * Resets the update user details processing state
     */
    resetUpdatePersonalDetailsProcessingState() {
        this.store.dispatch(new ResetUpdateUserDetails());
    }
    /**
     * Reset new password.  Part of the forgot password flow.
     * @param token
     * @param password
     */
    resetPassword(token, password) {
        this.store.dispatch(new ResetPassword({ token, password }));
    }
    /*
     * Request an email to reset a forgotten password.
     */
    requestForgotPasswordEmail(userEmailAddress) {
        this.store.dispatch(new ForgotPasswordEmailRequest(userEmailAddress));
    }
    /**
     * Updates the user's email
     */
    updateEmail(password, newUid) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new UpdateEmailAction({
                uid: userId,
                password,
                newUid,
            }));
        });
    }
    /**
     * Returns the update user's email success flag
     */
    getUpdateEmailResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(UPDATE_EMAIL_PROCESS_ID)));
    }
    /**
     * Returns the update user's email error flag
     */
    getUpdateEmailResultError() {
        return this.store.pipe(select(getProcessErrorFactory(UPDATE_EMAIL_PROCESS_ID)));
    }
    /**
     * Returns the update user's email loading flag
     */
    getUpdateEmailResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(UPDATE_EMAIL_PROCESS_ID)));
    }
    /**
     * Resets the update user's email processing state
     */
    resetUpdateEmailResultState() {
        this.store.dispatch(new ResetUpdateEmailAction());
    }
    /**
     * Updates the password for the user
     * @param oldPassword the current password that will be changed
     * @param newPassword the new password
     */
    updatePassword(oldPassword, newPassword) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new UpdatePassword({
                userId,
                oldPassword,
                newPassword,
            }));
        });
    }
    /**
     * Returns the update password loading flag
     */
    getUpdatePasswordResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(UPDATE_PASSWORD_PROCESS_ID)));
    }
    /**
     * Returns the update password failure outcome.
     */
    getUpdatePasswordResultError() {
        return this.store.pipe(select(getProcessErrorFactory(UPDATE_PASSWORD_PROCESS_ID)));
    }
    /**
     * Returns the update password process success outcome.
     */
    getUpdatePasswordResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(UPDATE_PASSWORD_PROCESS_ID)));
    }
    /**
     * Resets the update password process state. The state needs to be reset after the process
     * concludes, regardless if it's a success or an error
     */
    resetUpdatePasswordProcessState() {
        this.store.dispatch(new UpdatePasswordReset());
    }
};
UserService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
UserService.ɵprov = ɵɵdefineInjectable({ factory: function UserService_Factory() { return new UserService(ɵɵinject(Store), ɵɵinject(AuthService)); }, token: UserService, providedIn: "root" });
UserService = __decorate([
    Injectable({ providedIn: 'root' })
], UserService);

let SelectiveCartService = class SelectiveCartService {
    constructor(store, userService, authService, multiCartService, baseSiteService) {
        this.store = store;
        this.userService = userService;
        this.authService = authService;
        this.multiCartService = multiCartService;
        this.baseSiteService = baseSiteService;
        this.cartId$ = new BehaviorSubject(undefined);
        this.PREVIOUS_USER_ID_INITIAL_VALUE = 'PREVIOUS_USER_ID_INITIAL_VALUE';
        this.previousUserId = this.PREVIOUS_USER_ID_INITIAL_VALUE;
        this.cartSelector$ = this.cartId$.pipe(switchMap((cartId) => {
            this.cartId = cartId;
            return this.multiCartService.getCartEntity(cartId);
        }));
        combineLatest([
            this.userService.get(),
            this.baseSiteService.getActive(),
        ]).subscribe(([user, activeBaseSite]) => {
            if (user && user.customerId && activeBaseSite) {
                this.customerId = user.customerId;
                this.cartId$.next(`selectivecart${activeBaseSite}${this.customerId}`);
            }
            else if (user && !user.customerId) {
                this.cartId$.next(undefined);
            }
        });
        this.authService.getOccUserId().subscribe((userId) => {
            this.userId = userId;
            if (this.isJustLoggedIn(userId)) {
                this.load();
            }
            this.previousUserId = userId;
        });
        this.selectiveCart$ = this.cartSelector$.pipe(map((cartEntity) => {
            return {
                cart: cartEntity.value,
                loading: cartEntity.loading,
                loaded: (cartEntity.error || cartEntity.success) && !cartEntity.loading,
            };
        }), filter(({ loading }) => !loading), tap(({ cart, loaded }) => {
            if (this.cartId && this.isEmpty(cart) && !loaded) {
                this.load();
            }
        }), map(({ cart }) => (cart ? cart : {})), shareReplay({ bufferSize: 1, refCount: true }));
    }
    getCart() {
        return this.selectiveCart$;
    }
    getEntries() {
        return this.multiCartService.getEntries(this.cartId);
    }
    getLoaded() {
        return this.cartSelector$.pipe(map((cart) => (cart.success || cart.error) && !cart.loading));
    }
    load() {
        if (this.isLoggedIn(this.userId) && this.cartId) {
            this.multiCartService.loadCart({
                userId: this.userId,
                cartId: this.cartId,
            });
        }
    }
    addEntry(productCode, quantity) {
        let loadAttempted = false;
        this.cartSelector$
            .pipe(filter(() => !loadAttempted), switchMap((cartState) => {
            if (this.isEmpty(cartState.value) && !cartState.loading) {
                loadAttempted = true;
                this.load();
            }
            return of(cartState);
        }), filter((cartState) => !this.isEmpty(cartState.value)), take(1))
            .subscribe(() => {
            this.multiCartService.addEntry(this.userId, this.cartId, productCode, quantity);
        });
    }
    removeEntry(entry) {
        this.multiCartService.removeEntry(this.userId, this.cartId, entry.entryNumber);
    }
    updateEntry(entryNumber, quantity) {
        this.multiCartService.updateEntry(this.userId, this.cartId, entryNumber, quantity);
    }
    getEntry(productCode) {
        return this.multiCartService.getEntry(this.cartId, productCode);
    }
    isEmpty(cart) {
        return (!cart || (typeof cart === 'object' && Object.keys(cart).length === 0));
    }
    isJustLoggedIn(userId) {
        return (this.isLoggedIn(userId) &&
            this.previousUserId !== userId && // *just* logged in
            this.previousUserId !== this.PREVIOUS_USER_ID_INITIAL_VALUE // not app initialization
        );
    }
    isLoggedIn(userId) {
        return typeof userId !== 'undefined' && userId !== OCC_USER_ID_ANONYMOUS;
    }
};
SelectiveCartService.ctorParameters = () => [
    { type: Store },
    { type: UserService },
    { type: AuthService },
    { type: MultiCartService },
    { type: BaseSiteService }
];
SelectiveCartService = __decorate([
    Injectable()
], SelectiveCartService);

let WishListService = class WishListService {
    constructor(store, authService, userService, multiCartService) {
        this.store = store;
        this.authService = authService;
        this.userService = userService;
        this.multiCartService = multiCartService;
    }
    createWishList(userId, name, description) {
        this.store.dispatch(new CreateWishList({ userId, name, description }));
    }
    getWishList() {
        return combineLatest([
            this.getWishListId(),
            this.userService.get(),
            this.authService.getOccUserId(),
        ]).pipe(distinctUntilChanged(), tap(([wishListId, user, userId]) => {
            if (!Boolean(wishListId) &&
                userId !== OCC_USER_ID_ANONYMOUS &&
                Boolean(user) &&
                Boolean(user.customerId)) {
                this.loadWishList(userId, user.customerId);
            }
        }), filter(([wishListId]) => Boolean(wishListId)), switchMap(([wishListId]) => this.multiCartService.getCart(wishListId)));
    }
    loadWishList(userId, customerId) {
        this.store.dispatch(new LoadWishList({
            userId,
            customerId,
            tempCartId: getWishlistName(customerId),
        }));
    }
    addEntry(productCode) {
        this.getWishListId()
            .pipe(distinctUntilChanged(), withLatestFrom(this.authService.getOccUserId(), this.userService.get()), tap(([wishListId, userId, user]) => {
            if (!Boolean(wishListId) &&
                Boolean(user) &&
                Boolean(user.customerId)) {
                this.loadWishList(userId, user.customerId);
            }
        }), filter(([wishListId]) => Boolean(wishListId)), take(1))
            .subscribe(([wishListId, userId]) => this.multiCartService.addEntry(userId, wishListId, productCode, 1));
    }
    removeEntry(entry) {
        this.getWishListId()
            .pipe(distinctUntilChanged(), withLatestFrom(this.authService.getOccUserId(), this.userService.get()), tap(([wishListId, userId, user]) => {
            if (!Boolean(wishListId) &&
                Boolean(user) &&
                Boolean(user.customerId)) {
                this.loadWishList(userId, user.customerId);
            }
        }), filter(([wishListId]) => Boolean(wishListId)), take(1))
            .subscribe(([wishListId, userId]) => this.multiCartService.removeEntry(userId, wishListId, entry.entryNumber));
    }
    getWishListLoading() {
        return this.getWishListId().pipe(switchMap((wishListId) => this.multiCartService
            .isStable(wishListId)
            .pipe(map((stable) => !stable))));
    }
    getWishListId() {
        return this.store.pipe(select(getWishListId));
    }
};
WishListService.ctorParameters = () => [
    { type: Store },
    { type: AuthService },
    { type: UserService },
    { type: MultiCartService }
];
WishListService = __decorate([
    Injectable()
], WishListService);

const CMS_FEATURE = 'cms';
const NAVIGATION_DETAIL_ENTITY = '[Cms] Navigation Entity';
const COMPONENT_ENTITY = '[Cms] Component Entity';

const LOAD_CMS_COMPONENT = '[Cms] Load Component';
const LOAD_CMS_COMPONENT_FAIL = '[Cms] Load Component Fail';
const LOAD_CMS_COMPONENT_SUCCESS = '[Cms] Load Component Success';
const CMS_GET_COMPONENT_FROM_PAGE = '[Cms] Get Component from Page';
class LoadCmsComponent extends EntityLoadAction {
    constructor(payload) {
        super(COMPONENT_ENTITY, payload.uid);
        this.payload = payload;
        this.type = LOAD_CMS_COMPONENT;
    }
}
class LoadCmsComponentFail extends EntityFailAction {
    constructor(payload) {
        super(COMPONENT_ENTITY, payload.uid, payload.error);
        this.payload = payload;
        this.type = LOAD_CMS_COMPONENT_FAIL;
    }
}
class LoadCmsComponentSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(COMPONENT_ENTITY, payload.uid || payload.component.uid || '');
        this.payload = payload;
        this.type = LOAD_CMS_COMPONENT_SUCCESS;
    }
}
class CmsGetComponentFromPage extends EntitySuccessAction {
    constructor(payload) {
        super(COMPONENT_ENTITY, [].concat(payload).map((cmp) => cmp.component.uid));
        this.payload = payload;
        this.type = CMS_GET_COMPONENT_FROM_PAGE;
    }
}

const LOAD_CMS_NAVIGATION_ITEMS = '[Cms] Load NavigationEntry items';
const LOAD_CMS_NAVIGATION_ITEMS_FAIL = '[Cms] Load NavigationEntry items Fail';
const LOAD_CMS_NAVIGATION_ITEMS_SUCCESS = '[Cms] Load NavigationEntry items Success';
class LoadCmsNavigationItems extends EntityLoadAction {
    constructor(payload) {
        super(NAVIGATION_DETAIL_ENTITY, payload.nodeId);
        this.payload = payload;
        this.type = LOAD_CMS_NAVIGATION_ITEMS;
    }
}
class LoadCmsNavigationItemsFail extends EntityFailAction {
    constructor(nodeId, payload) {
        super(NAVIGATION_DETAIL_ENTITY, nodeId, payload);
        this.payload = payload;
        this.type = LOAD_CMS_NAVIGATION_ITEMS_FAIL;
    }
}
class LoadCmsNavigationItemsSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(NAVIGATION_DETAIL_ENTITY, payload.nodeId);
        this.payload = payload;
        this.type = LOAD_CMS_NAVIGATION_ITEMS_SUCCESS;
    }
}

const LOAD_CMS_PAGE_DATA = '[Cms] Load Page Data';
const LOAD_CMS_PAGE_DATA_FAIL = '[Cms] Load Page Data Fail';
const LOAD_CMS_PAGE_DATA_SUCCESS = '[Cms] Load Page Data Success';
const CMS_SET_PAGE_SUCCESS_INDEX = '[Cms] Set Page Success Index';
const CMS_SET_PAGE_FAIL_INDEX = '[Cms] Set Page Fail Index';
class LoadCmsPageData extends EntityLoadAction {
    constructor(payload) {
        super(payload.type, payload.id);
        this.payload = payload;
        this.type = LOAD_CMS_PAGE_DATA;
    }
}
class LoadCmsPageDataFail extends EntityFailAction {
    constructor(pageContext, error) {
        super(pageContext.type, pageContext.id, error);
        this.type = LOAD_CMS_PAGE_DATA_FAIL;
    }
}
class LoadCmsPageDataSuccess extends EntitySuccessAction {
    constructor(pageContext, payload) {
        super(pageContext.type, pageContext.id, payload);
        this.type = LOAD_CMS_PAGE_DATA_SUCCESS;
    }
}
class CmsSetPageSuccessIndex extends EntitySuccessAction {
    constructor(pageContext, payload) {
        super(pageContext.type, pageContext.id, payload);
        this.type = CMS_SET_PAGE_SUCCESS_INDEX;
    }
}
class CmsSetPageFailIndex extends EntityFailAction {
    constructor(pageContext, payload) {
        super(pageContext.type, pageContext.id);
        this.payload = payload;
        this.type = CMS_SET_PAGE_FAIL_INDEX;
    }
}



var cmsGroup_actions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    LOAD_CMS_COMPONENT: LOAD_CMS_COMPONENT,
    LOAD_CMS_COMPONENT_FAIL: LOAD_CMS_COMPONENT_FAIL,
    LOAD_CMS_COMPONENT_SUCCESS: LOAD_CMS_COMPONENT_SUCCESS,
    CMS_GET_COMPONENT_FROM_PAGE: CMS_GET_COMPONENT_FROM_PAGE,
    LoadCmsComponent: LoadCmsComponent,
    LoadCmsComponentFail: LoadCmsComponentFail,
    LoadCmsComponentSuccess: LoadCmsComponentSuccess,
    CmsGetComponentFromPage: CmsGetComponentFromPage,
    LOAD_CMS_NAVIGATION_ITEMS: LOAD_CMS_NAVIGATION_ITEMS,
    LOAD_CMS_NAVIGATION_ITEMS_FAIL: LOAD_CMS_NAVIGATION_ITEMS_FAIL,
    LOAD_CMS_NAVIGATION_ITEMS_SUCCESS: LOAD_CMS_NAVIGATION_ITEMS_SUCCESS,
    LoadCmsNavigationItems: LoadCmsNavigationItems,
    LoadCmsNavigationItemsFail: LoadCmsNavigationItemsFail,
    LoadCmsNavigationItemsSuccess: LoadCmsNavigationItemsSuccess,
    LOAD_CMS_PAGE_DATA: LOAD_CMS_PAGE_DATA,
    LOAD_CMS_PAGE_DATA_FAIL: LOAD_CMS_PAGE_DATA_FAIL,
    LOAD_CMS_PAGE_DATA_SUCCESS: LOAD_CMS_PAGE_DATA_SUCCESS,
    CMS_SET_PAGE_SUCCESS_INDEX: CMS_SET_PAGE_SUCCESS_INDEX,
    CMS_SET_PAGE_FAIL_INDEX: CMS_SET_PAGE_FAIL_INDEX,
    LoadCmsPageData: LoadCmsPageData,
    LoadCmsPageDataFail: LoadCmsPageDataFail,
    LoadCmsPageDataSuccess: LoadCmsPageDataSuccess,
    CmsSetPageSuccessIndex: CmsSetPageSuccessIndex,
    CmsSetPageFailIndex: CmsSetPageFailIndex
});

const getCmsState = createFeatureSelector(CMS_FEATURE);

const ɵ0$w = (state) => state.components;
const getComponentsState = createSelector(getCmsState, ɵ0$w);
const componentsContextSelectorFactory = (uid) => {
    return createSelector(getComponentsState, (componentsState) => entitySelector(componentsState, uid));
};
const componentsLoaderStateSelectorFactory = (uid, context) => {
    return createSelector(componentsContextSelectorFactory(uid), (componentsContext) => (componentsContext &&
        componentsContext.pageContext &&
        componentsContext.pageContext[context]) ||
        initialLoaderState);
};
const componentsContextExistsSelectorFactory = (uid, context) => {
    return createSelector(componentsLoaderStateSelectorFactory(uid, context), (loaderState) => loaderValueSelector(loaderState) || false);
};
const componentsDataSelectorFactory = (uid) => {
    return createSelector(componentsContextSelectorFactory(uid), (state) => state ? state.component : undefined);
};
const componentsSelectorFactory = (uid, context) => {
    return createSelector(componentsDataSelectorFactory(uid), componentsContextExistsSelectorFactory(uid, context), (componentState, exists) => {
        if (componentState && exists) {
            return componentState;
        }
        else {
            return undefined;
        }
    });
};

const ɵ0$x = (state) => state.navigation;
const getNavigationEntryItemState = createSelector(getCmsState, ɵ0$x);
const getSelectedNavigationEntryItemState = (nodeId) => {
    return createSelector(getNavigationEntryItemState, (nodes) => entityStateSelector(nodes, nodeId));
};
const getNavigationEntryItems = (nodeId) => {
    return createSelector(getSelectedNavigationEntryItemState(nodeId), (itemState) => loaderValueSelector(itemState));
};

const getPageEntitiesSelector = (state) => state.pageData.entities;
const ɵ0$y = getPageEntitiesSelector;
const getIndexByType = (index, type) => {
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
const ɵ1$o = getIndexByType;
const getPageComponentTypesSelector = (page) => {
    const componentTypes = new Set();
    if (page && page.slots) {
        for (const slot of Object.keys(page.slots)) {
            for (const component of page.slots[slot].components || []) {
                componentTypes.add(component.flexType);
            }
        }
    }
    return Array.from(componentTypes);
};
const ɵ2$h = getPageComponentTypesSelector;
const ɵ3$9 = (state) => state.page;
const getPageState = createSelector(getCmsState, ɵ3$9);
const ɵ4$2 = (page) => page.index;
const getPageStateIndex = createSelector(getPageState, ɵ4$2);
const getPageStateIndexEntityLoaderState = (pageContext) => createSelector(getPageStateIndex, (index) => getIndexByType(index, pageContext.type));
const getPageStateIndexLoaderState = (pageContext) => createSelector(getPageStateIndexEntityLoaderState(pageContext), (indexState) => entityStateSelector(indexState, pageContext.id));
const getPageStateIndexValue = (pageContext) => createSelector(getPageStateIndexLoaderState(pageContext), (entity) => loaderValueSelector(entity));
const getPageEntities = createSelector(getPageState, getPageEntitiesSelector);
const getPageData = (pageContext) => createSelector(getPageEntities, getPageStateIndexValue(pageContext), (entities, indexValue) => entities[indexValue]);
const getPageComponentTypes = (pageContext) => createSelector(getPageData(pageContext), (pageData) => getPageComponentTypesSelector(pageData));
const getCurrentSlotSelectorFactory = (pageContext, position) => {
    return createSelector(getPageData(pageContext), (entity) => {
        if (entity) {
            return entity.slots[position] || { components: [] };
        }
    });
};



var cmsGroup_selectors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getComponentsState: getComponentsState,
    componentsContextSelectorFactory: componentsContextSelectorFactory,
    componentsLoaderStateSelectorFactory: componentsLoaderStateSelectorFactory,
    componentsContextExistsSelectorFactory: componentsContextExistsSelectorFactory,
    componentsDataSelectorFactory: componentsDataSelectorFactory,
    componentsSelectorFactory: componentsSelectorFactory,
    ɵ0: ɵ0$w,
    getCmsState: getCmsState,
    getNavigationEntryItemState: getNavigationEntryItemState,
    getSelectedNavigationEntryItemState: getSelectedNavigationEntryItemState,
    getNavigationEntryItems: getNavigationEntryItems,
    getPageState: getPageState,
    getPageStateIndex: getPageStateIndex,
    getPageStateIndexEntityLoaderState: getPageStateIndexEntityLoaderState,
    getPageStateIndexLoaderState: getPageStateIndexLoaderState,
    getPageStateIndexValue: getPageStateIndexValue,
    getPageEntities: getPageEntities,
    getPageData: getPageData,
    getPageComponentTypes: getPageComponentTypes,
    getCurrentSlotSelectorFactory: getCurrentSlotSelectorFactory,
    ɵ1: ɵ1$o,
    ɵ2: ɵ2$h,
    ɵ3: ɵ3$9,
    ɵ4: ɵ4$2
});

const CURRENT_CONTEXT_KEY = 'current';
/**
 *
 * Serializes the provided page context.
 * The pattern used for serialization is: `pageContext.type-pageContext.id`.
 *
 * @param pageContext to serialize
 * @param ignoreContentPageId if set to true, and the PageType is of type ContentPage, then the serialized page context will not contain the ID.
 * Otherwise, the page context if fully serialized.
 */
function serializePageContext(pageContext, ignoreContentPageId) {
    if (!pageContext) {
        return CURRENT_CONTEXT_KEY;
    }
    if (ignoreContentPageId && pageContext.type === PageType.CONTENT_PAGE) {
        return `${pageContext.type}`;
    }
    return `${pageContext.type}-${pageContext.id}`;
}

let CmsService = class CmsService {
    constructor(store, routingService) {
        this.store = store;
        this.routingService = routingService;
        this._launchInSmartEdit = false;
        this.components = {};
    }
    /**
     * Set _launchInSmartEdit value
     */
    set launchInSmartEdit(value) {
        this._launchInSmartEdit = value;
    }
    /**
     * Whether the app launched in smart edit
     */
    isLaunchInSmartEdit() {
        return this._launchInSmartEdit;
    }
    /**
     * Get current CMS page data
     */
    getCurrentPage() {
        return this.routingService
            .getPageContext()
            .pipe(switchMap((pageContext) => this.store.select(getPageData(pageContext))));
    }
    /**
     * Get CMS component data by uid
     *
     * This method can be safely and optimally used to load multiple components data at the same time.
     * Calling getComponentData multiple times for different components will always result in optimized
     * back-end request: all components requested at the same time (in one event loop) will be loaded in one network call.
     *
     * In case the component data is not present, the method will load it.
     * Otherwise, if the page context is not provided, the current page context from the router state will be used instead.
     *
     * @param uid CMS component uid
     * @param pageContext if provided, it will be used to lookup the component data.
     */
    getComponentData(uid, pageContext) {
        const context = serializePageContext(pageContext, true);
        if (!this.components[uid]) {
            // create the component data structure, if it doesn't already exist
            this.components[uid] = {};
        }
        const component = this.components[uid];
        if (!component[context]) {
            // create the component data and assign it to the component's context
            component[context] = this.createComponentData(uid, pageContext);
        }
        return component[context];
    }
    createComponentData(uid, pageContext) {
        if (!pageContext) {
            return this.routingService.getPageContext().pipe(filter((currentContext) => !!currentContext), switchMap((currentContext) => this.getComponentData(uid, currentContext)));
        }
        const context = serializePageContext(pageContext, true);
        const loading$ = combineLatest([
            this.routingService.getNextPageContext(),
            this.store.pipe(select(componentsLoaderStateSelectorFactory(uid, context))),
        ]).pipe(observeOn(queueScheduler), tap(([nextContext, loadingState]) => {
            const attemptedLoad = loadingState.loading || loadingState.success || loadingState.error;
            // if the requested context is the same as the one that's currently being navigated to
            // (as it might already been triggered and might be available shortly from page data)
            // TODO(issue:3649), TODO(issue:3668) - this optimization could be removed
            const couldBeLoadedWithPageData = nextContext
                ? serializePageContext(nextContext, true) === context
                : false;
            if (!attemptedLoad && !couldBeLoadedWithPageData) {
                this.store.dispatch(new LoadCmsComponent({ uid, pageContext }));
            }
        }));
        const component$ = this.store.pipe(select(componentsSelectorFactory(uid, context)), 
        // TODO(issue:6431) - this `filter` should be removed.
        // The reason for removal: with `filter` in place, when moving to a page that has restrictions, the component data will still emit the previous value.
        // Removing it causes some components to fail, because they are not checking
        // if the data is actually there. I noticed these that this component is failing, but there are possibly more:
        // - `tab-paragraph-container.component.ts` when visiting any PDP page
        filter((component) => !!component));
        return using(() => loading$.subscribe(), () => component$).pipe(shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * Given the position, get the content slot data
     * @param position : content slot position
     */
    getContentSlot(position) {
        return this.routingService
            .getPageContext()
            .pipe(switchMap((pageContext) => this.store.pipe(select(getCurrentSlotSelectorFactory(pageContext, position)), filter(Boolean))));
    }
    /**
     * Given navigation node uid, get items (with id and type) inside the navigation entries
     * @param navigationNodeUid : uid of the navigation node
     */
    getNavigationEntryItems(navigationNodeUid) {
        return this.store.pipe(select(getNavigationEntryItems(navigationNodeUid)));
    }
    /**
     * Load navigation items data
     * @param rootUid : the uid of the root navigation node
     * @param itemList : list of items (with id and type)
     */
    loadNavigationItems(rootUid, itemList) {
        this.store.dispatch(new LoadCmsNavigationItems({
            nodeId: rootUid,
            items: itemList,
        }));
    }
    /**
     * Refresh the content of the latest cms page
     */
    refreshLatestPage() {
        this.routingService
            .getPageContext()
            .pipe(take(1))
            .subscribe((pageContext) => this.store.dispatch(new LoadCmsPageData(pageContext)));
    }
    /**
     * Refresh the cms page content by page Id
     * @param pageId
     */
    refreshPageById(pageId) {
        const pageContext = { id: pageId };
        this.store.dispatch(new LoadCmsPageData(pageContext));
    }
    /**
     * Refresh cms component's content
     * @param uid component uid
     * @param pageContext an optional parameter that enables the caller to specify for which context the component should be refreshed.
     * If not specified, 'current' page context is used.
     */
    refreshComponent(uid, pageContext) {
        this.store.dispatch(new LoadCmsComponent({ uid, pageContext }));
    }
    /**
     * Given pageContext, return the CMS page data
     * @param pageContext
     */
    getPageState(pageContext) {
        return this.store.pipe(select(getPageData(pageContext)));
    }
    /**
     * Given pageContext, return the CMS page data
     * @param pageContext
     */
    getPageComponentTypes(pageContext) {
        return this.store.pipe(select(getPageComponentTypes(pageContext)));
    }
    /**
     * Given pageContext, return whether the CMS page data exists or not
     * @param pageContext
     */
    hasPage(pageContext, forceReload = false) {
        return this.store.pipe(select(getPageStateIndexLoaderState(pageContext)), tap((entity) => {
            const attemptedLoad = entity.loading || entity.success || entity.error;
            const shouldReload = forceReload && !entity.loading;
            if (!attemptedLoad || shouldReload) {
                this.store.dispatch(new LoadCmsPageData(pageContext));
                forceReload = false;
            }
        }), filter((entity) => {
            if (!entity.hasOwnProperty('value')) {
                // if we have incomplete state from SSR failed load transfer state,
                // we should wait for reload and actual value
                return false;
            }
            return entity.success || (entity.error && !entity.loading);
        }), pluck('success'), catchError(() => of(false)));
    }
    /**
     * Given pageContext, return the CMS page data
     **/
    getPage(pageContext, forceReload = false) {
        return this.hasPage(pageContext, forceReload).pipe(switchMap((hasPage) => hasPage ? this.getPageState(pageContext) : of(null)));
    }
    getPageIndex(pageContext) {
        return this.store.pipe(select(getPageStateIndexValue(pageContext)));
    }
    setPageFailIndex(pageContext, value) {
        this.store.dispatch(new CmsSetPageFailIndex(pageContext, value));
    }
};
CmsService.ctorParameters = () => [
    { type: Store },
    { type: RoutingService }
];
CmsService.ɵprov = ɵɵdefineInjectable({ factory: function CmsService_Factory() { return new CmsService(ɵɵinject(Store), ɵɵinject(RoutingService)); }, token: CmsService, providedIn: "root" });
CmsService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CmsService);

var PageRobotsMeta;
(function (PageRobotsMeta) {
    PageRobotsMeta["INDEX"] = "INDEX";
    PageRobotsMeta["NOINDEX"] = "NOINDEX";
    PageRobotsMeta["FOLLOW"] = "FOLLOW";
    PageRobotsMeta["NOFOLLOW"] = "NOFOLLOW";
})(PageRobotsMeta || (PageRobotsMeta = {}));

/**
 * Resolves the page metadata for the Cart page (Using the `PageType.CONTENT_PAGE`
 * and the `CartPageTemplate`). If the cart page matches this template, the more
 * generic `ContentPageMetaResolver` is overriden by this resolver.
 *
 * The page title and robots are resolved in this implementation only.
 */
let CartPageMetaResolver = class CartPageMetaResolver extends PageMetaResolver {
    constructor(cms) {
        super();
        this.cms = cms;
        this.cms$ = this.cms
            .getCurrentPage()
            .pipe(filter((page) => !!page));
        this.pageType = PageType.CONTENT_PAGE;
        this.pageTemplate = 'CartPageTemplate';
    }
    /**
     * Resolves the page title, which is driven by the backend.
     */
    resolveTitle() {
        return this.cms$.pipe(map((p) => p.title));
    }
    /**
     * Returns robots for the cart pages, which default to NOINDEX and NOFOLLOW.
     */
    resolveRobots() {
        return of([PageRobotsMeta.NOFOLLOW, PageRobotsMeta.NOINDEX]);
    }
};
CartPageMetaResolver.ctorParameters = () => [
    { type: CmsService }
];
CartPageMetaResolver.ɵprov = ɵɵdefineInjectable({ factory: function CartPageMetaResolver_Factory() { return new CartPageMetaResolver(ɵɵinject(CmsService)); }, token: CartPageMetaResolver, providedIn: "root" });
CartPageMetaResolver = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CartPageMetaResolver);

let MultiCartStatePersistenceService = class MultiCartStatePersistenceService {
    constructor(statePersistenceService, store, siteContextParamsService) {
        this.statePersistenceService = statePersistenceService;
        this.store = store;
        this.siteContextParamsService = siteContextParamsService;
    }
    sync() {
        this.statePersistenceService.syncWithStorage({
            key: 'cart',
            state$: this.getCartState(),
            context$: this.siteContextParamsService.getValues([BASE_SITE_CONTEXT_ID]),
            onRead: (state) => this.onRead(state),
        });
    }
    getCartState() {
        return this.store.pipe(select(getMultiCartState), filter((state) => !!state), distinctUntilKeyChanged('active'), map((state) => {
            return {
                active: state.active,
            };
        }));
    }
    onRead(state) {
        this.store.dispatch(new ClearCartState());
        if (state) {
            this.store.dispatch(new SetActiveCartId(state.active));
        }
    }
};
MultiCartStatePersistenceService.ctorParameters = () => [
    { type: StatePersistenceService },
    { type: Store },
    { type: SiteContextParamsService }
];
MultiCartStatePersistenceService.ɵprov = ɵɵdefineInjectable({ factory: function MultiCartStatePersistenceService_Factory() { return new MultiCartStatePersistenceService(ɵɵinject(StatePersistenceService), ɵɵinject(Store), ɵɵinject(SiteContextParamsService)); }, token: MultiCartStatePersistenceService, providedIn: "root" });
MultiCartStatePersistenceService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], MultiCartStatePersistenceService);

let MultiCartEffects = class MultiCartEffects {
    constructor(actions$) {
        this.actions$ = actions$;
        this.setTempCart$ = this.actions$.pipe(ofType(SET_TEMP_CART), map((action) => {
            return new RemoveCart({ cartId: action.payload.tempCartId });
        }));
        // TODO(#7241): Remove when we drop ADD_VOUCHER process and we sort out checkout and cart dependencies
        this.processesIncrement$ = this.actions$.pipe(ofType(CART_ADD_VOUCHER), map((action) => action.payload), map((payload) => new CartProcessesIncrement(payload.cartId)));
    }
};
MultiCartEffects.ctorParameters = () => [
    { type: Actions }
];
__decorate([
    Effect()
], MultiCartEffects.prototype, "setTempCart$", void 0);
__decorate([
    Effect()
], MultiCartEffects.prototype, "processesIncrement$", void 0);
MultiCartEffects = __decorate([
    Injectable()
], MultiCartEffects);

const effects$4 = [
    CartEffects,
    CartEntryEffects,
    CartVoucherEffects,
    WishListEffects,
    MultiCartEffects,
];
let MultiCartStoreModule = class MultiCartStoreModule {
};
MultiCartStoreModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            StateModule,
            StoreModule.forFeature(MULTI_CART_FEATURE, multiCartReducerToken, {
                metaReducers: multiCartMetaReducers,
            }),
            EffectsModule.forFeature(effects$4),
        ],
        providers: [multiCartReducerProvider],
    })
], MultiCartStoreModule);

var CartModule_1;
function cartStatePersistenceFactory(cartStatePersistenceService, configInit) {
    const result = () => configInit.getStableConfig('context').then(() => {
        cartStatePersistenceService.sync();
    });
    return result;
}
let CartModule = CartModule_1 = class CartModule {
    static forRoot() {
        return {
            ngModule: CartModule_1,
            providers: [
                CartVoucherService,
                MultiCartService,
                WishListService,
                ActiveCartService,
                SelectiveCartService,
                {
                    provide: PageMetaResolver,
                    useExisting: CartPageMetaResolver,
                    multi: true,
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: cartStatePersistenceFactory,
                    deps: [MultiCartStatePersistenceService, ConfigInitializerService],
                    multi: true,
                },
            ],
        };
    }
};
CartModule = CartModule_1 = __decorate([
    NgModule({
        imports: [MultiCartStoreModule, CartEventModule],
    })
], CartModule);

const initialState$9 = {
    results: {},
};
function reducer$9(state = initialState$9, action) {
    switch (action.type) {
        case VERIFY_ADDRESS_SUCCESS: {
            const results = action.payload;
            return Object.assign(Object.assign({}, state), { results });
        }
        case VERIFY_ADDRESS_FAIL: {
            return Object.assign(Object.assign({}, state), { results: 'FAIL' });
        }
        case CLEAR_ADDRESS_VERIFICATION_RESULTS: {
            return Object.assign(Object.assign({}, state), { results: {} });
        }
    }
    return state;
}
const getAddressVerificationResults = (state) => state.results;

const getDeliveryAddressSelector = (state) => state.address;
const ɵ0$z = getDeliveryAddressSelector;
const getDeliveryModeSelector = (state) => state.deliveryMode;
const ɵ1$p = getDeliveryModeSelector;
const getPaymentDetailsSelector = (state) => state.paymentDetails;
const ɵ2$i = getPaymentDetailsSelector;
const getOrderDetailsSelector = (state) => state.orderDetails;
const ɵ3$a = getOrderDetailsSelector;
const getCheckoutState = createFeatureSelector(CHECKOUT_FEATURE);
const ɵ4$3 = (checkoutState) => checkoutState.steps;
const getCheckoutStepsState = createSelector(getCheckoutState, ɵ4$3);
const ɵ5$2 = (state) => loaderValueSelector(state);
const getCheckoutSteps = createSelector(getCheckoutStepsState, ɵ5$2);
const getDeliveryAddress = createSelector(getCheckoutSteps, getDeliveryAddressSelector);
const getDeliveryMode = createSelector(getCheckoutSteps, getDeliveryModeSelector);
const ɵ6 = (deliveryMode) => {
    return (deliveryMode &&
        Object.keys(deliveryMode.supported).map((code) => deliveryMode.supported[code]));
};
const getSupportedDeliveryModes = createSelector(getDeliveryMode, ɵ6);
const ɵ7 = (deliveryMode) => {
    return deliveryMode && deliveryMode.selected;
};
const getSelectedDeliveryModeCode = createSelector(getDeliveryMode, ɵ7);
const ɵ8 = (deliveryMode) => {
    if (deliveryMode.selected !== '') {
        if (Object.keys(deliveryMode.supported).length === 0) {
            return null;
        }
        return deliveryMode.supported[deliveryMode.selected];
    }
};
const getSelectedDeliveryMode = createSelector(getDeliveryMode, ɵ8);
const getPaymentDetails = createSelector(getCheckoutSteps, getPaymentDetailsSelector);
const getCheckoutOrderDetails = createSelector(getCheckoutSteps, getOrderDetailsSelector);
const ɵ9 = (state) => loaderSuccessSelector(state) &&
    !loaderLoadingSelector(state);
const getCheckoutDetailsLoaded = createSelector(getCheckoutStepsState, ɵ9);

const ɵ0$A = (state) => state.addressVerification;
const getAddressVerificationResultsState = createSelector(getCheckoutState, ɵ0$A);
const getAddressVerificationResults$1 = createSelector(getAddressVerificationResultsState, getAddressVerificationResults);

const initialState$a = {
    entities: {},
};
function reducer$a(state = initialState$a, action) {
    switch (action.type) {
        case LOAD_CARD_TYPES_SUCCESS: {
            const cardTypes = action.payload;
            const entities = cardTypes.reduce((cardTypesEntities, name) => {
                return Object.assign(Object.assign({}, cardTypesEntities), { [name.code]: name });
            }, Object.assign({}, state.entities));
            return Object.assign(Object.assign({}, state), { entities });
        }
        case CHECKOUT_CLEAR_MISCS_DATA: {
            return initialState$a;
        }
    }
    return state;
}
const getCardTypesEntites = (state) => state.entities;

const ɵ0$B = (state) => state.cardTypes;
const getCardTypesState = createSelector(getCheckoutState, ɵ0$B);
const getCardTypesEntites$1 = createSelector(getCardTypesState, getCardTypesEntites);
const ɵ1$q = (entites) => {
    return Object.keys(entites).map((code) => entites[code]);
};
const getAllCardTypes = createSelector(getCardTypesEntites$1, ɵ1$q);



var checkoutGroup_selectors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getAddressVerificationResultsState: getAddressVerificationResultsState,
    getAddressVerificationResults: getAddressVerificationResults$1,
    ɵ0: ɵ0$A,
    getCardTypesState: getCardTypesState,
    getCardTypesEntites: getCardTypesEntites$1,
    getAllCardTypes: getAllCardTypes,
    ɵ1: ɵ1$q,
    getCheckoutState: getCheckoutState,
    getCheckoutStepsState: getCheckoutStepsState,
    getCheckoutSteps: getCheckoutSteps,
    getDeliveryAddress: getDeliveryAddress,
    getDeliveryMode: getDeliveryMode,
    getSupportedDeliveryModes: getSupportedDeliveryModes,
    getSelectedDeliveryModeCode: getSelectedDeliveryModeCode,
    getSelectedDeliveryMode: getSelectedDeliveryMode,
    getPaymentDetails: getPaymentDetails,
    getCheckoutOrderDetails: getCheckoutOrderDetails,
    getCheckoutDetailsLoaded: getCheckoutDetailsLoaded,
    ɵ2: ɵ2$i,
    ɵ3: ɵ3$a,
    ɵ4: ɵ4$3,
    ɵ5: ɵ5$2,
    ɵ6: ɵ6,
    ɵ7: ɵ7,
    ɵ8: ɵ8,
    ɵ9: ɵ9
});

let CheckoutService = class CheckoutService {
    constructor(checkoutStore, authService, activeCartService) {
        this.checkoutStore = checkoutStore;
        this.authService = authService;
        this.activeCartService = activeCartService;
    }
    /**
     * Places an order
     */
    placeOrder() {
        if (this.actionAllowed()) {
            let userId;
            this.authService
                .getOccUserId()
                .subscribe((occUserId) => (userId = occUserId))
                .unsubscribe();
            let cartId;
            this.activeCartService
                .getActiveCartId()
                .subscribe((activeCartId) => (cartId = activeCartId))
                .unsubscribe();
            if (userId && cartId) {
                this.checkoutStore.dispatch(new PlaceOrder({
                    userId,
                    cartId,
                }));
            }
        }
    }
    /**
     * Clear checkout data
     */
    clearCheckoutData() {
        this.checkoutStore.dispatch(new ClearCheckoutData());
    }
    /**
     * Clear checkout step
     * @param stepNumber : the step number to be cleared
     */
    clearCheckoutStep(stepNumber) {
        this.checkoutStore.dispatch(new ClearCheckoutStep(stepNumber));
    }
    /**
     * Load checkout details data
     * @param cartId : string Cart ID of loaded cart
     */
    loadCheckoutDetails(cartId) {
        let userId;
        this.authService
            .getOccUserId()
            .subscribe((occUserId) => (userId = occUserId))
            .unsubscribe();
        if (userId) {
            this.checkoutStore.dispatch(new LoadCheckoutDetails({
                userId,
                cartId,
            }));
        }
    }
    /**
     * Get status of checkout details loaded
     */
    getCheckoutDetailsLoaded() {
        return this.checkoutStore.pipe(select(getCheckoutDetailsLoaded));
    }
    /**
     * Get order details
     */
    getOrderDetails() {
        return this.checkoutStore.pipe(select(getCheckoutOrderDetails));
    }
    actionAllowed() {
        let userId;
        this.authService
            .getOccUserId()
            .subscribe((occUserId) => (userId = occUserId))
            .unsubscribe();
        return ((userId && userId !== OCC_USER_ID_ANONYMOUS) ||
            this.activeCartService.isGuestCart());
    }
};
CheckoutService.ctorParameters = () => [
    { type: Store },
    { type: AuthService },
    { type: ActiveCartService }
];
CheckoutService = __decorate([
    Injectable()
], CheckoutService);

class TranslationService {
}

/**
 * Resolves the page data for all Content Pages based on the `PageType.CONTENT_PAGE`
 * and the `MultiStepCheckoutSummaryPageTemplate`. If the checkout page matches this template,
 * the more generic `ContentPageMetaResolver` is overriden by this resolver.
 *
 * The page title and robots are resolved in this implementation only.
 */
let CheckoutPageMetaResolver = class CheckoutPageMetaResolver extends PageMetaResolver {
    constructor(translation, activeCartService) {
        super();
        this.translation = translation;
        this.activeCartService = activeCartService;
        this.cart$ = this.activeCartService.getActive();
        this.pageType = PageType.CONTENT_PAGE;
        this.pageTemplate = 'MultiStepCheckoutSummaryPageTemplate';
    }
    resolveTitle() {
        return this.cart$.pipe(switchMap((c) => this.translation.translate('pageMetaResolver.checkout.title', {
            count: c.totalItems,
        })));
    }
    resolveRobots() {
        return of([PageRobotsMeta.NOFOLLOW, PageRobotsMeta.NOINDEX]);
    }
};
CheckoutPageMetaResolver.ctorParameters = () => [
    { type: TranslationService },
    { type: ActiveCartService }
];
CheckoutPageMetaResolver.ɵprov = ɵɵdefineInjectable({ factory: function CheckoutPageMetaResolver_Factory() { return new CheckoutPageMetaResolver(ɵɵinject(TranslationService), ɵɵinject(ActiveCartService)); }, token: CheckoutPageMetaResolver, providedIn: "root" });
CheckoutPageMetaResolver = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CheckoutPageMetaResolver);

const initialState$b = {
    address: {},
    deliveryMode: {
        supported: {},
        selected: '',
    },
    paymentDetails: {},
    orderDetails: {},
};
function reducer$b(state = initialState$b, action) {
    switch (action.type) {
        case ADD_DELIVERY_ADDRESS_SUCCESS:
        case SET_DELIVERY_ADDRESS_SUCCESS: {
            const address = action.payload;
            return Object.assign(Object.assign({}, state), { address });
        }
        case LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS: {
            const supportedModes = action.payload;
            if (!supportedModes) {
                return state;
            }
            const supported = supportedModes.reduce((modes, mode) => {
                return Object.assign(Object.assign({}, modes), { [mode.code]: mode });
            }, Object.assign({}, state.deliveryMode.supported));
            return Object.assign(Object.assign({}, state), { deliveryMode: Object.assign(Object.assign({}, state.deliveryMode), { supported }) });
        }
        case SET_DELIVERY_MODE_SUCCESS: {
            const selected = action.payload;
            return Object.assign(Object.assign({}, state), { deliveryMode: Object.assign(Object.assign({}, state.deliveryMode), { selected }) });
        }
        case CREATE_PAYMENT_DETAILS_SUCCESS:
        case SET_PAYMENT_DETAILS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { paymentDetails: action.payload });
        }
        case CREATE_PAYMENT_DETAILS_FAIL: {
            const paymentDetails = action.payload;
            if (paymentDetails['hasError']) {
                return Object.assign(Object.assign({}, state), { paymentDetails });
            }
            return state;
        }
        case PLACE_ORDER_SUCCESS: {
            const orderDetails = action.payload;
            return Object.assign(Object.assign({}, state), { orderDetails });
        }
        case CLEAR_CHECKOUT_DATA: {
            return initialState$b;
        }
        case CLEAR_CHECKOUT_STEP: {
            const stepNumber = action.payload;
            switch (stepNumber) {
                case 1: {
                    return Object.assign(Object.assign({}, state), { address: {} });
                }
                case 2: {
                    return Object.assign(Object.assign({}, state), { deliveryMode: Object.assign(Object.assign({}, state.deliveryMode), { supported: {}, selected: '' }) });
                }
                case 3: {
                    return Object.assign(Object.assign({}, state), { paymentDetails: {} });
                }
            }
            return state;
        }
        case CLEAR_SUPPORTED_DELIVERY_MODES:
        case CHECKOUT_CLEAR_MISCS_DATA: {
            return Object.assign(Object.assign({}, state), { deliveryMode: Object.assign(Object.assign({}, state.deliveryMode), { supported: {} }) });
        }
        case LOAD_CHECKOUT_DETAILS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { address: action.payload.deliveryAddress, deliveryMode: Object.assign(Object.assign({}, state.deliveryMode), { selected: action.payload.deliveryMode && action.payload.deliveryMode.code }), paymentDetails: action.payload.paymentInfo });
        }
        case CLEAR_CHECKOUT_DELIVERY_ADDRESS: {
            return Object.assign(Object.assign({}, state), { address: {} });
        }
        case CLEAR_CHECKOUT_DELIVERY_MODE: {
            return Object.assign(Object.assign({}, state), { deliveryMode: Object.assign(Object.assign({}, state.deliveryMode), { selected: '' }) });
        }
    }
    return state;
}

function getReducers$5() {
    return {
        steps: loaderReducer(CHECKOUT_DETAILS, reducer$b),
        cardTypes: reducer$a,
        addressVerification: reducer$9,
    };
}
const reducerToken$5 = new InjectionToken('CheckoutReducers');
const reducerProvider$5 = {
    provide: reducerToken$5,
    useFactory: getReducers$5,
};

let UserAddressConnector = class UserAddressConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    getAll(userId) {
        return this.adapter.loadAll(userId);
    }
    add(userId, address) {
        return this.adapter.add(userId, address);
    }
    update(userId, addressId, address) {
        return this.adapter.update(userId, addressId, address);
    }
    verify(userId, address) {
        return this.adapter.verify(userId, address);
    }
    delete(userId, addressId) {
        return this.adapter.delete(userId, addressId);
    }
};
UserAddressConnector.ctorParameters = () => [
    { type: UserAddressAdapter }
];
UserAddressConnector.ɵprov = ɵɵdefineInjectable({ factory: function UserAddressConnector_Factory() { return new UserAddressConnector(ɵɵinject(UserAddressAdapter)); }, token: UserAddressConnector, providedIn: "root" });
UserAddressConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UserAddressConnector);

let AddressVerificationEffect = class AddressVerificationEffect {
    constructor(actions$, userAddressConnector) {
        this.actions$ = actions$;
        this.userAddressConnector = userAddressConnector;
        this.verifyAddress$ = this.actions$.pipe(ofType(VERIFY_ADDRESS), map((action) => action.payload), mergeMap((payload) => this.userAddressConnector.verify(payload.userId, payload.address).pipe(map((data) => new VerifyAddressSuccess(data)), catchError((error) => of(new VerifyAddressFail(makeErrorSerializable(error)))))));
    }
};
AddressVerificationEffect.ctorParameters = () => [
    { type: Actions },
    { type: UserAddressConnector }
];
__decorate([
    Effect()
], AddressVerificationEffect.prototype, "verifyAddress$", void 0);
AddressVerificationEffect = __decorate([
    Injectable()
], AddressVerificationEffect);

let CheckoutPaymentConnector = class CheckoutPaymentConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    create(userId, cartId, paymentDetails) {
        return this.adapter.create(userId, cartId, paymentDetails);
    }
    set(userId, cartId, paymentDetailsId) {
        return this.adapter.set(userId, cartId, paymentDetailsId);
    }
    getCardTypes() {
        return this.adapter.loadCardTypes();
    }
};
CheckoutPaymentConnector.ctorParameters = () => [
    { type: CheckoutPaymentAdapter }
];
CheckoutPaymentConnector.ɵprov = ɵɵdefineInjectable({ factory: function CheckoutPaymentConnector_Factory() { return new CheckoutPaymentConnector(ɵɵinject(CheckoutPaymentAdapter)); }, token: CheckoutPaymentConnector, providedIn: "root" });
CheckoutPaymentConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CheckoutPaymentConnector);

let CardTypesEffects = class CardTypesEffects {
    constructor(actions$, checkoutPaymentConnector) {
        this.actions$ = actions$;
        this.checkoutPaymentConnector = checkoutPaymentConnector;
        this.loadCardTypes$ = this.actions$.pipe(ofType(LOAD_CARD_TYPES), switchMap(() => {
            return this.checkoutPaymentConnector.getCardTypes().pipe(map((cardTypes) => new LoadCardTypesSuccess(cardTypes)), catchError((error) => of(new LoadCardTypesFail(makeErrorSerializable(error)))));
        }));
    }
};
CardTypesEffects.ctorParameters = () => [
    { type: Actions },
    { type: CheckoutPaymentConnector }
];
__decorate([
    Effect()
], CardTypesEffects.prototype, "loadCardTypes$", void 0);
CardTypesEffects = __decorate([
    Injectable()
], CardTypesEffects);

let CheckoutConnector = class CheckoutConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    placeOrder(userId, cartId) {
        return this.adapter.placeOrder(userId, cartId);
    }
    loadCheckoutDetails(userId, cartId) {
        return this.adapter.loadCheckoutDetails(userId, cartId);
    }
    clearCheckoutDeliveryAddress(userId, cartId) {
        return this.adapter.clearCheckoutDeliveryAddress(userId, cartId);
    }
    clearCheckoutDeliveryMode(userId, cartId) {
        return this.adapter.clearCheckoutDeliveryMode(userId, cartId);
    }
};
CheckoutConnector.ctorParameters = () => [
    { type: CheckoutAdapter }
];
CheckoutConnector.ɵprov = ɵɵdefineInjectable({ factory: function CheckoutConnector_Factory() { return new CheckoutConnector(ɵɵinject(CheckoutAdapter)); }, token: CheckoutConnector, providedIn: "root" });
CheckoutConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CheckoutConnector);

let CheckoutDeliveryConnector = class CheckoutDeliveryConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    createAddress(userId, cartId, address) {
        return this.adapter.createAddress(userId, cartId, address);
    }
    setAddress(userId, cartId, addressId) {
        return this.adapter.setAddress(userId, cartId, addressId);
    }
    setMode(userId, cartId, deliveryModeId) {
        return this.adapter.setMode(userId, cartId, deliveryModeId);
    }
    getMode(userId, cartId) {
        return this.adapter.getMode(userId, cartId);
    }
    getSupportedModes(userId, cartId) {
        return this.adapter.getSupportedModes(userId, cartId);
    }
};
CheckoutDeliveryConnector.ctorParameters = () => [
    { type: CheckoutDeliveryAdapter }
];
CheckoutDeliveryConnector.ɵprov = ɵɵdefineInjectable({ factory: function CheckoutDeliveryConnector_Factory() { return new CheckoutDeliveryConnector(ɵɵinject(CheckoutDeliveryAdapter)); }, token: CheckoutDeliveryConnector, providedIn: "root" });
CheckoutDeliveryConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CheckoutDeliveryConnector);

let CheckoutEffects = class CheckoutEffects {
    constructor(actions$, checkoutDeliveryConnector, checkoutPaymentConnector, checkoutConnector) {
        this.actions$ = actions$;
        this.checkoutDeliveryConnector = checkoutDeliveryConnector;
        this.checkoutPaymentConnector = checkoutPaymentConnector;
        this.checkoutConnector = checkoutConnector;
        this.contextChange$ = this.actions$.pipe(ofType(CURRENCY_CHANGE, LANGUAGE_CHANGE));
        this.addDeliveryAddress$ = this.actions$.pipe(ofType(ADD_DELIVERY_ADDRESS), map((action) => action.payload), mergeMap((payload) => this.checkoutDeliveryConnector
            .createAddress(payload.userId, payload.cartId, payload.address)
            .pipe(mergeMap((address) => {
            address['titleCode'] = payload.address.titleCode;
            if (payload.address.region && payload.address.region.isocodeShort) {
                Object.assign(address.region, {
                    isocodeShort: payload.address.region.isocodeShort,
                });
            }
            if (payload.userId === OCC_USER_ID_ANONYMOUS) {
                return [
                    new SetDeliveryAddress({
                        userId: payload.userId,
                        cartId: payload.cartId,
                        address: address,
                    }),
                ];
            }
            else {
                return [
                    new LoadUserAddresses(payload.userId),
                    new SetDeliveryAddress({
                        userId: payload.userId,
                        cartId: payload.cartId,
                        address: address,
                    }),
                ];
            }
        }), catchError((error) => of(new AddDeliveryAddressFail(makeErrorSerializable(error)))))), withdrawOn(this.contextChange$));
        this.setDeliveryAddress$ = this.actions$.pipe(ofType(SET_DELIVERY_ADDRESS), map((action) => action.payload), mergeMap((payload) => {
            return this.checkoutDeliveryConnector
                .setAddress(payload.userId, payload.cartId, payload.address.id)
                .pipe(mergeMap(() => [
                new SetDeliveryAddressSuccess(payload.address),
                new ClearCheckoutDeliveryMode({
                    userId: payload.userId,
                    cartId: payload.cartId,
                }),
                new ClearSupportedDeliveryModes(),
                new ResetLoadSupportedDeliveryModesProcess(),
                new LoadSupportedDeliveryModes({
                    userId: payload.userId,
                    cartId: payload.cartId,
                }),
            ]), catchError((error) => of(new SetDeliveryAddressFail(makeErrorSerializable(error)))));
        }), withdrawOn(this.contextChange$));
        this.loadSupportedDeliveryModes$ = this.actions$.pipe(ofType(LOAD_SUPPORTED_DELIVERY_MODES), map((action) => action.payload), mergeMap((payload) => {
            return this.checkoutDeliveryConnector
                .getSupportedModes(payload.userId, payload.cartId)
                .pipe(map((data) => {
                return new LoadSupportedDeliveryModesSuccess(data);
            }), catchError((error) => of(new LoadSupportedDeliveryModesFail(makeErrorSerializable(error)))));
        }), withdrawOn(this.contextChange$));
        this.clearCheckoutMiscsDataOnLanguageChange$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE), mergeMap(() => [
            new CheckoutClearMiscsData(),
            new ResetLoadSupportedDeliveryModesProcess(),
        ]));
        this.clearDeliveryModesOnCurrencyChange$ = this.actions$.pipe(ofType(CURRENCY_CHANGE), map(() => new ClearSupportedDeliveryModes()));
        this.clearCheckoutDataOnLogout$ = this.actions$.pipe(ofType(LOGOUT), map(() => new ClearCheckoutData()));
        this.clearCheckoutDataOnLogin$ = this.actions$.pipe(ofType(LOGIN), map(() => new ClearCheckoutData()));
        this.setDeliveryMode$ = this.actions$.pipe(ofType(SET_DELIVERY_MODE), map((action) => action.payload), mergeMap((payload) => {
            return this.checkoutDeliveryConnector
                .setMode(payload.userId, payload.cartId, payload.selectedModeId)
                .pipe(mergeMap(() => {
                return [
                    new SetDeliveryModeSuccess(payload.selectedModeId),
                    new LoadCart({
                        userId: payload.userId,
                        cartId: payload.cartId,
                    }),
                ];
            }), catchError((error) => of(new SetDeliveryModeFail(makeErrorSerializable(error)))));
        }), withdrawOn(this.contextChange$));
        this.createPaymentDetails$ = this.actions$.pipe(ofType(CREATE_PAYMENT_DETAILS), map((action) => action.payload), mergeMap((payload) => {
            // get information for creating a subscription directly with payment provider
            return this.checkoutPaymentConnector
                .create(payload.userId, payload.cartId, payload.paymentDetails)
                .pipe(mergeMap((details) => {
                if (payload.userId === OCC_USER_ID_ANONYMOUS) {
                    return [new CreatePaymentDetailsSuccess(details)];
                }
                else {
                    return [
                        new LoadUserPaymentMethods(payload.userId),
                        new CreatePaymentDetailsSuccess(details),
                    ];
                }
            }), catchError((error) => of(new CreatePaymentDetailsFail(makeErrorSerializable(error)))));
        }), withdrawOn(this.contextChange$));
        this.setPaymentDetails$ = this.actions$.pipe(ofType(SET_PAYMENT_DETAILS), map((action) => action.payload), mergeMap((payload) => {
            return this.checkoutPaymentConnector
                .set(payload.userId, payload.cartId, payload.paymentDetails.id)
                .pipe(map(() => new SetPaymentDetailsSuccess(payload.paymentDetails)), catchError((error) => of(new SetPaymentDetailsFail(makeErrorSerializable(error)))));
        }), withdrawOn(this.contextChange$));
        this.placeOrder$ = this.actions$.pipe(ofType(PLACE_ORDER), map((action) => action.payload), mergeMap((payload) => {
            return this.checkoutConnector
                .placeOrder(payload.userId, payload.cartId)
                .pipe(switchMap((data) => [
                new RemoveCart({ cartId: payload.cartId }),
                new PlaceOrderSuccess(data),
            ]), catchError((error) => of(new PlaceOrderFail(makeErrorSerializable(error)))));
        }), withdrawOn(this.contextChange$));
        this.loadCheckoutDetails$ = this.actions$.pipe(ofType(LOAD_CHECKOUT_DETAILS), map((action) => action.payload), mergeMap((payload) => {
            return this.checkoutConnector
                .loadCheckoutDetails(payload.userId, payload.cartId)
                .pipe(map((data) => new LoadCheckoutDetailsSuccess(data)), catchError((error) => of(new LoadCheckoutDetailsFail(makeErrorSerializable(error)))));
        }), withdrawOn(this.contextChange$));
        this.reloadDetailsOnMergeCart$ = this.actions$.pipe(ofType(MERGE_CART_SUCCESS), map((action) => action.payload), map((payload) => {
            return new LoadCheckoutDetails({
                userId: payload.userId,
                cartId: payload.cartId,
            });
        }));
        this.clearCheckoutDeliveryAddress$ = this.actions$.pipe(ofType(CLEAR_CHECKOUT_DELIVERY_ADDRESS), map((action) => action.payload), filter((payload) => Boolean(payload.cartId)), switchMap((payload) => {
            return this.checkoutConnector
                .clearCheckoutDeliveryAddress(payload.userId, payload.cartId)
                .pipe(map(() => new ClearCheckoutDeliveryAddressSuccess()), catchError((error) => of(new ClearCheckoutDeliveryAddressFail(makeErrorSerializable(error)))));
        }), withdrawOn(this.contextChange$));
        this.clearCheckoutDeliveryMode$ = this.actions$.pipe(ofType(CLEAR_CHECKOUT_DELIVERY_MODE), map((action) => action.payload), filter((payload) => Boolean(payload.cartId)), concatMap((payload) => {
            return this.checkoutConnector
                .clearCheckoutDeliveryMode(payload.userId, payload.cartId)
                .pipe(map(() => new ClearCheckoutDeliveryModeSuccess(Object.assign({}, payload))), catchError((error) => from([
                new ClearCheckoutDeliveryModeFail(Object.assign(Object.assign({}, payload), { error: makeErrorSerializable(error) })),
                new LoadCart({
                    cartId: payload.cartId,
                    userId: payload.userId,
                }),
            ])));
        }), withdrawOn(this.contextChange$));
    }
};
CheckoutEffects.ctorParameters = () => [
    { type: Actions },
    { type: CheckoutDeliveryConnector },
    { type: CheckoutPaymentConnector },
    { type: CheckoutConnector }
];
__decorate([
    Effect()
], CheckoutEffects.prototype, "addDeliveryAddress$", void 0);
__decorate([
    Effect()
], CheckoutEffects.prototype, "setDeliveryAddress$", void 0);
__decorate([
    Effect()
], CheckoutEffects.prototype, "loadSupportedDeliveryModes$", void 0);
__decorate([
    Effect()
], CheckoutEffects.prototype, "clearCheckoutMiscsDataOnLanguageChange$", void 0);
__decorate([
    Effect()
], CheckoutEffects.prototype, "clearDeliveryModesOnCurrencyChange$", void 0);
__decorate([
    Effect()
], CheckoutEffects.prototype, "clearCheckoutDataOnLogout$", void 0);
__decorate([
    Effect()
], CheckoutEffects.prototype, "clearCheckoutDataOnLogin$", void 0);
__decorate([
    Effect()
], CheckoutEffects.prototype, "setDeliveryMode$", void 0);
__decorate([
    Effect()
], CheckoutEffects.prototype, "createPaymentDetails$", void 0);
__decorate([
    Effect()
], CheckoutEffects.prototype, "setPaymentDetails$", void 0);
__decorate([
    Effect()
], CheckoutEffects.prototype, "placeOrder$", void 0);
__decorate([
    Effect()
], CheckoutEffects.prototype, "loadCheckoutDetails$", void 0);
__decorate([
    Effect()
], CheckoutEffects.prototype, "reloadDetailsOnMergeCart$", void 0);
__decorate([
    Effect()
], CheckoutEffects.prototype, "clearCheckoutDeliveryAddress$", void 0);
__decorate([
    Effect()
], CheckoutEffects.prototype, "clearCheckoutDeliveryMode$", void 0);
CheckoutEffects = __decorate([
    Injectable()
], CheckoutEffects);

const effects$5 = [
    CheckoutEffects,
    AddressVerificationEffect,
    CardTypesEffects,
];

let CheckoutStoreModule = class CheckoutStoreModule {
};
CheckoutStoreModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            HttpClientModule,
            StoreModule.forFeature(CHECKOUT_FEATURE, reducerToken$5),
            EffectsModule.forFeature(effects$5),
        ],
        providers: [reducerProvider$5],
    })
], CheckoutStoreModule);

var CheckoutModule_1;
let CheckoutModule = CheckoutModule_1 = class CheckoutModule {
    static forRoot() {
        return {
            ngModule: CheckoutModule_1,
            providers: [
                CheckoutService,
                {
                    provide: PageMetaResolver,
                    useExisting: CheckoutPageMetaResolver,
                    multi: true,
                },
            ],
        };
    }
};
CheckoutModule = CheckoutModule_1 = __decorate([
    NgModule({
        imports: [CheckoutStoreModule],
    })
], CheckoutModule);

let CheckoutDeliveryService = class CheckoutDeliveryService {
    constructor(checkoutStore, authService, activeCartService) {
        this.checkoutStore = checkoutStore;
        this.authService = authService;
        this.activeCartService = activeCartService;
    }
    /**
     * Get supported delivery modes
     */
    getSupportedDeliveryModes() {
        return this.checkoutStore.pipe(select(getSupportedDeliveryModes), withLatestFrom(this.checkoutStore.pipe(select(getProcessStateFactory(SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID)))), tap(([, loadingState]) => {
            if (!(loadingState.loading || loadingState.success || loadingState.error)) {
                this.loadSupportedDeliveryModes();
            }
        }), pluck(0), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * Get selected delivery mode
     */
    getSelectedDeliveryMode() {
        return this.checkoutStore.pipe(select(getSelectedDeliveryMode));
    }
    /**
     * Get selected delivery mode code
     */
    getSelectedDeliveryModeCode() {
        return this.checkoutStore.pipe(select(getSelectedDeliveryModeCode));
    }
    /**
     * Get delivery address
     */
    getDeliveryAddress() {
        return this.checkoutStore.pipe(select(getDeliveryAddress));
    }
    /**
     * Get status about successfully set Delivery Address
     */
    getSetDeliveryAddressProcess() {
        return this.checkoutStore.pipe(select(getProcessStateFactory(SET_DELIVERY_ADDRESS_PROCESS_ID)));
    }
    /**
     * Clear info about process of setting Delivery Address
     */
    resetSetDeliveryAddressProcess() {
        this.checkoutStore.dispatch(new ResetSetDeliveryAddressProcess());
    }
    /**
     * Get status about of set Delivery Mode process
     */
    getSetDeliveryModeProcess() {
        return this.checkoutStore.pipe(select(getProcessStateFactory(SET_DELIVERY_MODE_PROCESS_ID)));
    }
    /**
     * Clear info about process of setting Delivery Mode
     */
    resetSetDeliveryModeProcess() {
        this.checkoutStore.dispatch(new ResetSetDeliveryModeProcess());
    }
    /**
     * Clear info about process of setting Supported Delivery Modes
     */
    resetLoadSupportedDeliveryModesProcess() {
        this.checkoutStore.dispatch(new ResetLoadSupportedDeliveryModesProcess());
    }
    /**
     * Get status about of set supported Delivery Modes process
     */
    getLoadSupportedDeliveryModeProcess() {
        return this.checkoutStore.pipe(select(getProcessStateFactory(SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID)));
    }
    /**
     * Clear supported delivery modes loaded in last checkout process
     */
    clearCheckoutDeliveryModes() {
        this.checkoutStore.dispatch(new ClearSupportedDeliveryModes());
    }
    /**
     * Get address verification results
     */
    getAddressVerificationResults() {
        return this.checkoutStore.pipe(select(getAddressVerificationResults$1), filter((results) => Object.keys(results).length !== 0));
    }
    /**
     * Create and set a delivery address using the address param
     * @param address : the Address to be created and set
     */
    createAndSetAddress(address) {
        if (this.actionAllowed()) {
            let userId;
            this.authService
                .getOccUserId()
                .subscribe((occUserId) => (userId = occUserId))
                .unsubscribe();
            let cartId;
            this.activeCartService
                .getActiveCartId()
                .subscribe((activeCartId) => (cartId = activeCartId))
                .unsubscribe();
            if (userId && cartId) {
                this.checkoutStore.dispatch(new AddDeliveryAddress({
                    userId,
                    cartId,
                    address: address,
                }));
            }
        }
    }
    /**
     * Load supported delivery modes
     */
    loadSupportedDeliveryModes() {
        if (this.actionAllowed()) {
            let userId;
            this.authService
                .getOccUserId()
                .subscribe((occUserId) => (userId = occUserId))
                .unsubscribe();
            let cartId;
            this.activeCartService
                .getActiveCartId()
                .subscribe((activeCartId) => (cartId = activeCartId))
                .unsubscribe();
            if (userId && cartId) {
                this.checkoutStore.dispatch(new LoadSupportedDeliveryModes({
                    userId,
                    cartId,
                }));
            }
        }
    }
    /**
     * Set delivery mode
     * @param mode : The delivery mode to be set
     */
    setDeliveryMode(mode) {
        if (this.actionAllowed()) {
            let userId;
            this.authService
                .getOccUserId()
                .subscribe((occUserId) => (userId = occUserId))
                .unsubscribe();
            let cartId;
            this.activeCartService
                .getActiveCartId()
                .subscribe((activeCartId) => (cartId = activeCartId))
                .unsubscribe();
            if (userId && cartId) {
                this.checkoutStore.dispatch(new SetDeliveryMode({
                    userId,
                    cartId,
                    selectedModeId: mode,
                }));
            }
        }
    }
    /**
     * Verifies the address
     * @param address : the address to be verified
     */
    verifyAddress(address) {
        if (this.actionAllowed()) {
            let userId;
            this.authService
                .getOccUserId()
                .subscribe((occUserId) => (userId = occUserId))
                .unsubscribe();
            if (userId) {
                this.checkoutStore.dispatch(new VerifyAddress({
                    userId,
                    address,
                }));
            }
        }
    }
    /**
     * Set delivery address
     * @param address : The address to be set
     */
    setDeliveryAddress(address) {
        if (this.actionAllowed()) {
            let userId;
            this.authService
                .getOccUserId()
                .subscribe((occUserId) => (userId = occUserId))
                .unsubscribe();
            let cartId;
            this.activeCartService
                .getActiveCartId()
                .subscribe((activeCartId) => (cartId = activeCartId))
                .unsubscribe();
            if (cartId && userId) {
                this.checkoutStore.dispatch(new SetDeliveryAddress({
                    userId,
                    cartId,
                    address: address,
                }));
            }
        }
    }
    /**
     * Clear address verification results
     */
    clearAddressVerificationResults() {
        this.checkoutStore.dispatch(new ClearAddressVerificationResults());
    }
    /**
     * Clear address already setup in last checkout process
     */
    clearCheckoutDeliveryAddress() {
        let userId;
        this.authService
            .getOccUserId()
            .subscribe((occUserId) => (userId = occUserId))
            .unsubscribe();
        let cartId;
        this.activeCartService
            .getActiveCartId()
            .subscribe((activeCartId) => (cartId = activeCartId))
            .unsubscribe();
        if (userId && cartId) {
            this.checkoutStore.dispatch(new ClearCheckoutDeliveryAddress({
                userId,
                cartId,
            }));
        }
    }
    /**
     * Clear selected delivery mode setup in last checkout process
     */
    clearCheckoutDeliveryMode() {
        let userId;
        this.authService
            .getOccUserId()
            .subscribe((occUserId) => (userId = occUserId))
            .unsubscribe();
        let cartId;
        this.activeCartService
            .getActiveCartId()
            .subscribe((activeCartId) => (cartId = activeCartId))
            .unsubscribe();
        if (userId && cartId) {
            this.checkoutStore.dispatch(new ClearCheckoutDeliveryMode({
                userId,
                cartId,
            }));
        }
    }
    /**
     * Clear address and delivery mode already setup in last checkout process
     */
    clearCheckoutDeliveryDetails() {
        this.clearCheckoutDeliveryAddress();
        this.clearCheckoutDeliveryMode();
        this.clearCheckoutDeliveryModes();
    }
    actionAllowed() {
        let userId;
        this.authService
            .getOccUserId()
            .subscribe((occUserId) => (userId = occUserId))
            .unsubscribe();
        return ((userId && userId !== OCC_USER_ID_ANONYMOUS) ||
            this.activeCartService.isGuestCart());
    }
};
CheckoutDeliveryService.ctorParameters = () => [
    { type: Store },
    { type: AuthService },
    { type: ActiveCartService }
];
CheckoutDeliveryService.ɵprov = ɵɵdefineInjectable({ factory: function CheckoutDeliveryService_Factory() { return new CheckoutDeliveryService(ɵɵinject(Store), ɵɵinject(AuthService), ɵɵinject(ActiveCartService)); }, token: CheckoutDeliveryService, providedIn: "root" });
CheckoutDeliveryService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CheckoutDeliveryService);

let CheckoutPaymentService = class CheckoutPaymentService {
    constructor(checkoutStore, authService, activeCartService) {
        this.checkoutStore = checkoutStore;
        this.authService = authService;
        this.activeCartService = activeCartService;
    }
    /**
     * Get card types
     */
    getCardTypes() {
        return this.checkoutStore.pipe(select(getAllCardTypes));
    }
    /**
     * Get payment details
     */
    getPaymentDetails() {
        return this.checkoutStore.pipe(select(getPaymentDetails));
    }
    /**
     * Get status about set Payment Details process
     */
    getSetPaymentDetailsResultProcess() {
        return this.checkoutStore.pipe(select(getProcessStateFactory(SET_PAYMENT_DETAILS_PROCESS_ID)));
    }
    /**
     * Clear info about process of setting Payment Details
     */
    resetSetPaymentDetailsProcess() {
        this.checkoutStore.dispatch(new ResetSetPaymentDetailsProcess());
    }
    /**
     * Load the supported card types
     */
    loadSupportedCardTypes() {
        this.checkoutStore.dispatch(new LoadCardTypes());
    }
    /**
     * Create payment details using the given paymentDetails param
     * @param paymentDetails: the PaymentDetails to be created
     */
    createPaymentDetails(paymentDetails) {
        if (this.actionAllowed()) {
            let userId;
            this.authService
                .getOccUserId()
                .subscribe((occUserId) => (userId = occUserId))
                .unsubscribe();
            let cartId;
            this.activeCartService
                .getActiveCartId()
                .subscribe((activeCartId) => (cartId = activeCartId))
                .unsubscribe();
            if (userId && cartId) {
                this.checkoutStore.dispatch(new CreatePaymentDetails({
                    userId,
                    cartId,
                    paymentDetails,
                }));
            }
        }
    }
    /**
     * Set payment details
     * @param paymentDetails : the PaymentDetails to be set
     */
    setPaymentDetails(paymentDetails) {
        if (this.actionAllowed()) {
            let userId;
            this.authService
                .getOccUserId()
                .subscribe((occUserId) => (userId = occUserId))
                .unsubscribe();
            let cart;
            this.activeCartService
                .getActive()
                .subscribe((activeCart) => (cart = activeCart))
                .unsubscribe();
            if (userId && cart) {
                this.checkoutStore.dispatch(new SetPaymentDetails({
                    userId,
                    cartId: cart.code,
                    paymentDetails: paymentDetails,
                }));
            }
        }
    }
    /**
     * Sets payment loading to true without having the flicker issue (GH-3102)
     */
    paymentProcessSuccess() {
        this.checkoutStore.dispatch(new PaymentProcessSuccess());
    }
    actionAllowed() {
        let userId;
        this.authService
            .getOccUserId()
            .subscribe((occUserId) => (userId = occUserId))
            .unsubscribe();
        return ((userId && userId !== OCC_USER_ID_ANONYMOUS) ||
            this.activeCartService.isGuestCart());
    }
};
CheckoutPaymentService.ctorParameters = () => [
    { type: Store },
    { type: AuthService },
    { type: ActiveCartService }
];
CheckoutPaymentService.ɵprov = ɵɵdefineInjectable({ factory: function CheckoutPaymentService_Factory() { return new CheckoutPaymentService(ɵɵinject(Store), ɵɵinject(AuthService), ɵɵinject(ActiveCartService)); }, token: CheckoutPaymentService, providedIn: "root" });
CheckoutPaymentService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CheckoutPaymentService);

/**
 * The `CmsStructureConfig` is used to build pages in Spartacus by configuration
 * instead of using a backend CMS system. The configuration can be used to build
 * complete pages or parts of a page. The `CmsStructureConfig` is optimized to
 * only require the necessary properties. Adapter logic is applied to serialize
 * the `CmsStructureConfig` into the required UI model.
 */
class CmsStructureConfig extends CmsConfig {
}

const defaultCmsModuleConfig = {
    backend: {
        occ: {
            endpoints: {
                component: 'cms/components/${id}',
                components: 'cms/components',
                pages: 'cms/pages',
                page: 'cms/pages/${id}',
            },
            legacy: false,
        },
    },
    cmsComponents: {},
};

/**
 * Resolves the page data for all Content Pages based on the `PageType.CONTENT_PAGE`.
 * More specific resolvers for content pages can be implemented by making them more
 * specific, for example by using the page template (see `CartPageMetaResolver`).
 *
 * The page title, and breadcrumbs are resolved in this implementation only.
 */
let ContentPageMetaResolver = class ContentPageMetaResolver extends PageMetaResolver {
    constructor(cms, translation) {
        super();
        this.cms = cms;
        this.translation = translation;
        /** helper to provie access to the current CMS page */
        this.cms$ = this.cms
            .getCurrentPage()
            .pipe(filter((p) => Boolean(p)));
        this.pageType = PageType.CONTENT_PAGE;
    }
    /**
     * Resolves the page title for the ContentPage by taking the title
     * from the backend data.
     */
    resolveTitle() {
        return this.cms$.pipe(map((p) => p.title));
    }
    /**
     * Resolves a single breacrumb item to the home page for each `ContentPage`.
     * The home page label is resolved from the translation service.
     */
    resolveBreadcrumbs() {
        return this.translation
            .translate('common.home')
            .pipe(map((label) => [{ label: label, link: '/' }]));
    }
};
ContentPageMetaResolver.ctorParameters = () => [
    { type: CmsService },
    { type: TranslationService }
];
ContentPageMetaResolver.ɵprov = ɵɵdefineInjectable({ factory: function ContentPageMetaResolver_Factory() { return new ContentPageMetaResolver(ɵɵinject(CmsService), ɵɵinject(TranslationService)); }, token: ContentPageMetaResolver, providedIn: "root" });
ContentPageMetaResolver = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ContentPageMetaResolver);

let CmsPageTitleModule = class CmsPageTitleModule {
};
CmsPageTitleModule = __decorate([
    NgModule({
        providers: [
            {
                provide: PageMetaResolver,
                useExisting: ContentPageMetaResolver,
                multi: true,
            },
        ],
    })
], CmsPageTitleModule);

function bufferDebounceTime(time = 0, scheduler) {
    return (source) => {
        let bufferedValues = [];
        return source.pipe(tap((value) => bufferedValues.push(value)), debounceTime(time, scheduler), map(() => bufferedValues), tap(() => (bufferedValues = [])));
    };
}

/**
 * Service that provides access to CMS structure from a static
 * configuration or configuration file. This class uses static
 * configuration is designed in async fashion so that configurations
 * can be loaded from a file or stream.
 *
 * The intent of the `CmsStructureConfigService` however is to provide
 * fast loading pages and default cms structure for commodity commerce.
 */
let CmsStructureConfigService = class CmsStructureConfigService {
    constructor(cmsDataConfig) {
        this.cmsDataConfig = cmsDataConfig;
    }
    /**
     * Merge the cms structure to the pageStructure. The page structure
     * can either hold complete page structures or global structures that
     * might apply to all pages (such has header coponents).
     */
    mergePageStructure(pageId, pageStructure) {
        return this.mergePage(pageId, pageStructure).pipe(switchMap((page) => this.mergeSlots(page)));
    }
    /**
     *
     * Returns boolean observable to indicate whether the page should not be
     * loaded from the backend. This is useful for pages which are comoditized
     * and follow best practice.
     *
     * By default, configurable pages are driven by static configuration,
     * in order to allow for fast loading pages (preventing network delays).
     */
    shouldIgnoreBackend(pageId) {
        return this.getPageFromConfig(pageId).pipe(map((page) => !!page && !!page.ignoreBackend));
    }
    /**
     * returns an Observable component data from the static configuration.
     */
    getComponentFromConfig(componentId) {
        return of(this.getComponentById(componentId));
    }
    /**
     * returns an Observable components data from the static configuration.
     */
    getComponentsFromConfig(ids) {
        return of(ids.map((id) => this.getComponentById(id)));
    }
    /**
     * returns an observable with the `PageConfig`.
     */
    getPageFromConfig(pageId) {
        return of(this.cmsDataConfig.cmsStructure && this.cmsDataConfig.cmsStructure.pages
            ? this.cmsDataConfig.cmsStructure.pages.find((p) => p.pageId === pageId)
            : null);
    }
    /**
     * Merge page data from the configuration into the given structure, if any.
     * If the given page structure is empty, a page is created and the page slots are
     * are merged into the page.
     */
    mergePage(pageId, pageStructure) {
        return this.getPageFromConfig(pageId).pipe(switchMap((page) => {
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
        }));
    }
    /**
     * Adds any pre-configured slots for pages that do not use them.
     * If pages have a slot for the given position, the configiuration
     * is ingored. Even if the slot does not have inner structure (such as
     * components), so that the cms structure is able to override the (static)
     * configuration.
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
    getComponentsByPosition(slots, position) {
        const components = [];
        if (slots[position] && slots[position].componentIds) {
            for (const componentId of slots[position].componentIds) {
                if (this.cmsDataConfig.cmsStructure &&
                    this.cmsDataConfig.cmsStructure.components) {
                    const component = this.cmsDataConfig.cmsStructure.components[componentId];
                    if (component) {
                        components.push(Object.assign({ uid: componentId }, component));
                    }
                }
            }
        }
        return components;
    }
    getComponentById(componentId) {
        return this.cmsDataConfig.cmsStructure &&
            this.cmsDataConfig.cmsStructure.components
            ? this.cmsDataConfig.cmsStructure.components[componentId]
            : undefined;
    }
};
CmsStructureConfigService.ctorParameters = () => [
    { type: CmsStructureConfig }
];
CmsStructureConfigService.ɵprov = ɵɵdefineInjectable({ factory: function CmsStructureConfigService_Factory() { return new CmsStructureConfigService(ɵɵinject(CmsStructureConfig)); }, token: CmsStructureConfigService, providedIn: "root" });
CmsStructureConfigService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CmsStructureConfigService);

let CmsComponentConnector = class CmsComponentConnector {
    constructor(cmsStructureConfigService, adapter, config) {
        this.cmsStructureConfigService = cmsStructureConfigService;
        this.adapter = adapter;
        this.config = config;
    }
    get(id, pageContext) {
        return this.cmsStructureConfigService
            .getComponentFromConfig(id)
            .pipe(switchMap((configuredComponent) => configuredComponent
            ? of(configuredComponent)
            : this.adapter.load(id, pageContext)));
    }
    getList(ids, pageContext) {
        return this.cmsStructureConfigService.getComponentsFromConfig(ids).pipe(switchMap((configuredComponents) => {
            // check if we have some components that are not loaded from configuration
            const missingIds = configuredComponents.reduce((acc, component, index) => {
                if (component === undefined) {
                    acc.push(ids[index]);
                }
                return acc;
            }, []);
            if (missingIds.length > 0) {
                return (this.config.backend.occ.legacy
                    ? this.adapter.findComponentsByIdsLegacy(missingIds, pageContext)
                    : this.adapter.findComponentsByIds(missingIds, pageContext)).pipe(map((loadedComponents) => [
                    ...configuredComponents.filter(Boolean),
                    ...loadedComponents,
                ]));
            }
            else {
                return of(configuredComponents);
            }
        }));
    }
};
CmsComponentConnector.ctorParameters = () => [
    { type: CmsStructureConfigService },
    { type: CmsComponentAdapter },
    { type: OccConfig }
];
CmsComponentConnector.ɵprov = ɵɵdefineInjectable({ factory: function CmsComponentConnector_Factory() { return new CmsComponentConnector(ɵɵinject(CmsStructureConfigService), ɵɵinject(CmsComponentAdapter), ɵɵinject(OccConfig)); }, token: CmsComponentConnector, providedIn: "root" });
CmsComponentConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CmsComponentConnector);

let ComponentsEffects = class ComponentsEffects {
    constructor(actions$, cmsComponentLoader) {
        this.actions$ = actions$;
        this.cmsComponentLoader = cmsComponentLoader;
        this.contextChange$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE, LOGOUT, LOGIN));
        this.loadComponent$ = createEffect(() => ({ scheduler, debounce = 0 } = {}) => this.actions$.pipe(ofType(LOAD_CMS_COMPONENT), groupBy((actions) => serializePageContext(actions.payload.pageContext)), mergeMap((actionGroup) => actionGroup.pipe(bufferDebounceTime(debounce, scheduler), mergeMap((actions) => this.loadComponentsEffect(actions.map((action) => action.payload.uid), actions[0].payload.pageContext)))), withdrawOn(this.contextChange$)));
    }
    loadComponentsEffect(componentUids, pageContext) {
        return this.cmsComponentLoader.getList(componentUids, pageContext).pipe(switchMap((components) => from(components.map((component) => new LoadCmsComponentSuccess({
            component,
            uid: component.uid,
            pageContext,
        })))), catchError((error) => from(componentUids.map((uid) => new LoadCmsComponentFail({
            uid,
            error: makeErrorSerializable(error),
            pageContext,
        })))));
    }
};
ComponentsEffects.ctorParameters = () => [
    { type: Actions },
    { type: CmsComponentConnector }
];
ComponentsEffects = __decorate([
    Injectable()
], ComponentsEffects);

/**
 * @license
 * The MIT License
 * Copyright (c) 2010-2019 Google LLC. http://angular.io/license
 *
 * See:
 * - https://github.com/angular/angular/blob/6f5f481fdae03f1d8db36284b64c7b82d9519d85/packages/service-worker/config/src/glob.ts
 * - https://github.com/angular/angular/blob/6f5f481fdae03f1d8db36284b64c7b82d9519d85/aio/tests/deployment/shared/helpers.ts#L17
 * - https://github.com/angular/angular/blob/6f5f481fdae03f1d8db36284b64c7b82d9519d85/packages/service-worker/config/src/generator.ts#L86
 */
const QUESTION_MARK = '[^/]';
const WILD_SINGLE = '[^/]*';
const WILD_OPEN = '(?:.+\\/)?';
const TO_ESCAPE_BASE = [
    { replace: /\./g, with: '\\.' },
    { replace: /\+/g, with: '\\+' },
    { replace: /\*/g, with: WILD_SINGLE },
];
const TO_ESCAPE_WILDCARD_QM = [
    ...TO_ESCAPE_BASE,
    { replace: /\?/g, with: QUESTION_MARK },
];
const TO_ESCAPE_LITERAL_QM = [
    ...TO_ESCAPE_BASE,
    { replace: /\?/g, with: '\\?' },
];
/**
 * Converts the glob-like pattern into regex string.
 *
 * Patterns use a limited glob format:
 * `**` matches 0 or more path segments
 * `*` matches 0 or more characters excluding `/`
 * `?` matches exactly one character excluding `/` (but when @param literalQuestionMark is true, `?` is treated as normal character)
 * The `!` prefix marks the pattern as being negative, meaning that only URLs that don't match the pattern will be included
 *
 * @param glob glob-like pattern
 * @param literalQuestionMark when true, it tells that `?` is treated as a normal character
 */
function globToRegex(glob, literalQuestionMark = false) {
    const toEscape = literalQuestionMark
        ? TO_ESCAPE_LITERAL_QM
        : TO_ESCAPE_WILDCARD_QM;
    const segments = glob.split('/').reverse();
    let regex = '';
    while (segments.length > 0) {
        const segment = segments.pop();
        if (segment === '**') {
            if (segments.length > 0) {
                regex += WILD_OPEN;
            }
            else {
                regex += '.*';
            }
        }
        else {
            const processed = toEscape.reduce((seg, escape) => seg.replace(escape.replace, escape.with), segment);
            regex += processed;
            if (segments.length > 0) {
                regex += '\\/';
            }
        }
    }
    return regex;
}
/**
 * For given list of glob-like patterns, returns a matcher function.
 *
 * The matcher returns true for given URL only when ANY of the positive patterns is matched and NONE of the negative ones.
 */
function getGlobMatcher(patterns) {
    const processedPatterns = processGlobPatterns(patterns).map(({ positive, regex }) => ({
        positive,
        regex: new RegExp(regex),
    }));
    const includePatterns = processedPatterns.filter((spec) => spec.positive);
    const excludePatterns = processedPatterns.filter((spec) => !spec.positive);
    return (url) => includePatterns.some((pattern) => pattern.regex.test(url)) &&
        !excludePatterns.some((pattern) => pattern.regex.test(url));
}
/**
 * Converts list of glob-like patterns into list of RegExps with information whether the glob pattern is positive or negative
 */
function processGlobPatterns(urls) {
    return urls.map((url) => {
        const positive = !url.startsWith('!');
        url = positive ? url : url.substr(1);
        return { positive, regex: `^${globToRegex(url)}$` };
    });
}

let GlobService = class GlobService {
    /**
     * For given list of glob-like patterns, returns a validator function.
     *
     * The validator returns true for given URL only when ANY of the positive patterns is matched and NONE of the negative ones.
     */
    getValidator(patterns) {
        const processedPatterns = processGlobPatterns(patterns).map(({ positive, regex }) => ({
            positive,
            regex: new RegExp(regex),
        }));
        const includePatterns = processedPatterns.filter((spec) => spec.positive);
        const excludePatterns = processedPatterns.filter((spec) => !spec.positive);
        return (url) => includePatterns.some((pattern) => pattern.regex.test(url)) &&
            !excludePatterns.some((pattern) => pattern.regex.test(url));
    }
};
GlobService.ɵprov = ɵɵdefineInjectable({ factory: function GlobService_Factory() { return new GlobService(); }, token: GlobService, providedIn: "root" });
GlobService = __decorate([
    Injectable({ providedIn: 'root' })
], GlobService);

let UrlMatcherService = class UrlMatcherService {
    constructor(globService) {
        this.globService = globService;
    }
    /**
     * Returns a matcher that is always fails
     */
    getFalsy() {
        return function falsyUrlMatcher() {
            return null;
        };
    }
    /**
     * Returns a matcher for given list of paths
     */
    getFromPaths(paths) {
        const matchers = paths.map((path) => this.getFromPath(path));
        const matcher = this.getCombined(matchers);
        if (isDevMode()) {
            matcher['_paths'] = paths; // property added for easier debugging of routes
        }
        return matcher;
    }
    /**
     * Returns a matcher that combines the given matchers
     * */
    getCombined(matchers) {
        const matcher = function combinedUrlMatchers(segments, segmentGroup, route) {
            for (let i = 0; i < matchers.length; i++) {
                const result = matchers[i](segments, segmentGroup, route);
                if (result) {
                    return result;
                }
            }
            return null;
        };
        if (isDevMode()) {
            matcher['_matchers'] = matchers; // property added for easier debugging of routes
        }
        return matcher;
    }
    /**
     * Similar to Angular's defaultUrlMatcher. Differences:
     * - the `path` comes from function's argument, not from `route.path`
     * - the empty path `''` is handled here, but in Angular is handled one level higher in the match() function
     */
    getFromPath(path = '') {
        const matcher = function pathUrlMatcher(segments, segmentGroup, route) {
            /**
             * @license
             * The MIT License
             * Copyright (c) 2010-2019 Google LLC. http://angular.io/license
             *
             * See:
             * - https://github.com/angular/angular/blob/6f5f481fdae03f1d8db36284b64c7b82d9519d85/packages/router/src/shared.ts#L121
             */
            // use function's argument, not the `route.path`
            if (path === '') {
                if (route.pathMatch === 'full' &&
                    (segmentGroup.hasChildren() || segments.length > 0)) {
                    return null;
                }
                return { consumed: [], posParams: {} };
            }
            const parts = path.split('/'); // use function's argument, not the `route.path`
            if (parts.length > segments.length) {
                // The actual URL is shorter than the config, no match
                return null;
            }
            if (route.pathMatch === 'full' &&
                (segmentGroup.hasChildren() || parts.length < segments.length)) {
                // The config is longer than the actual URL but we are looking for a full match, return null
                return null;
            }
            const posParams = {};
            // Check each config part against the actual URL
            for (let index = 0; index < parts.length; index++) {
                const part = parts[index];
                const segment = segments[index];
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
        };
        if (isDevMode()) {
            matcher['_path'] = path; // property added for easier debugging of routes
        }
        return matcher;
    }
    /**
     * Returns URL matcher that accepts almost everything (like `**` route), but not paths accepted by the given matcher
     */
    getOpposite(originalMatcher) {
        const matcher = function oppositeUrlMatcher(segments, group, route) {
            return originalMatcher(segments, group, route)
                ? null
                : { consumed: segments, posParams: {} };
        };
        if (isDevMode()) {
            matcher['_originalMatcher'] = originalMatcher; // property added for easier debugging of routes
        }
        return matcher;
    }
    /**
     * Returns URL matcher for the given list of glob-like patterns. Each pattern must start with `/` or `!/`.
     */
    getFromGlob(globPatterns) {
        const globValidator = this.globService.getValidator(globPatterns);
        const matcher = function globUrlMatcher(segments) {
            const fullPath = `/${segments.map((s) => s.path).join('/')}`;
            return globValidator(fullPath)
                ? { consumed: segments, posParams: {} }
                : null;
        };
        if (isDevMode()) {
            matcher['_globPatterns'] = globPatterns; // property added for easier debugging of routes
        }
        return matcher;
    }
};
UrlMatcherService.ctorParameters = () => [
    { type: GlobService }
];
UrlMatcherService.ɵprov = ɵɵdefineInjectable({ factory: function UrlMatcherService_Factory() { return new UrlMatcherService(ɵɵinject(GlobService)); }, token: UrlMatcherService, providedIn: "root" });
UrlMatcherService = __decorate([
    Injectable({ providedIn: 'root' })
], UrlMatcherService);

let ConfigurableRoutesService = class ConfigurableRoutesService {
    constructor(injector, routingConfigService, urlMatcherService) {
        this.injector = injector;
        this.routingConfigService = routingConfigService;
        this.urlMatcherService = urlMatcherService;
        this.initCalled = false; // guard not to call init() more than once
    }
    /**
     * Enhances existing Angular routes using the routing config of Spartacus.
     * Can be called only once.
     */
    init() {
        if (!this.initCalled) {
            this.initCalled = true;
            this.configure();
        }
    }
    /**
     * Enhances existing Angular routes using the routing config of Spartacus.
     */
    configure() {
        // Router could not be injected in constructor due to cyclic dependency with APP_INITIALIZER:
        const router = this.injector.get(Router);
        router.resetConfig(this.configureRoutes(router.config));
    }
    /**
     * Sets the property `path` or `matcher` for the given routes, based on the Spartacus' routing configuration.
     *
     * @param routes list of Angular `Route` objects
     */
    configureRoutes(routes) {
        return routes.map((route) => {
            const configuredRoute = this.configureRoute(route);
            if (route.children && route.children.length) {
                configuredRoute.children = this.configureRoutes(route.children);
            }
            return configuredRoute;
        });
    }
    /**
     * Sets the property `path` or `matcher` of the `Route`, based on the Spartacus' routing configuration.
     * Uses the property `data.cxRoute` to determine the name of the route.
     * It's the same name used as a key in the routing configuration: `routing.routes[ROUTE NAME]`.
     *
     * @param route Angular `Route` object
     */
    configureRoute(route) {
        var _a;
        const routeName = this.getRouteName(route);
        if (routeName) {
            const routeConfig = this.routingConfigService.getRouteConfig(routeName);
            this.validateRouteConfig(routeConfig, routeName, route);
            if (routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.disabled) {
                delete route.path;
                return Object.assign(Object.assign({}, route), { matcher: this.urlMatcherService.getFalsy() });
            }
            else if (routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.matchers) {
                delete route.path;
                return Object.assign(Object.assign({}, route), { matcher: this.resolveUrlMatchers(route, routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.matchers) });
            }
            else if (((_a = routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.paths) === null || _a === void 0 ? void 0 : _a.length) === 1) {
                delete route.matcher;
                return Object.assign(Object.assign({}, route), { path: routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.paths[0] });
            }
            else {
                delete route.path;
                return Object.assign(Object.assign({}, route), { matcher: this.urlMatcherService.getFromPaths((routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.paths) || []) });
            }
        }
        return route; // if route doesn't have a name, just pass the original route
    }
    /**
     * Creates a single `UrlMatcher` based on given matchers and factories of matchers.
     *
     * @param route Route object
     * @param matchersOrFactories `UrlMatcher`s or injection tokens with a factory functions
     *  that create UrlMatchers based on the given route.
     */
    resolveUrlMatchers(route, matchersOrFactories) {
        const matchers = matchersOrFactories.map((matcherOrFactory) => {
            return typeof matcherOrFactory === 'function'
                ? matcherOrFactory // matcher
                : this.resolveUrlMatcherFactory(route, matcherOrFactory); // factory injection token
        });
        return this.urlMatcherService.getCombined(matchers);
    }
    /**
     * Creates an `UrlMatcher` based on the given route, using the factory function coming from the given injection token.
     *
     * @param route Route object
     * @param factoryToken injection token with a factory function that will create an UrlMatcher using given route
     */
    resolveUrlMatcherFactory(route, factoryToken) {
        const factory = this.injector.get(factoryToken);
        return factory(route);
    }
    /**
     * Returns the name of the Route stored in its property `data.cxRoute`
     * @param route
     */
    getRouteName(route) {
        return route.data && route.data.cxRoute;
    }
    validateRouteConfig(routeConfig, routeName, route) {
        if (isDevMode()) {
            // - null value of routeConfig or routeConfig.paths means explicit switching off the route - it's valid config
            // - routeConfig with defined `matchers` is valid, even if `paths` are undefined
            if (routeConfig === null ||
                routeConfig.paths === null || (routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.matchers)) {
                return;
            }
            // undefined value of routeConfig or routeConfig.paths is a misconfiguration
            if (!(routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.paths)) {
                this.warn(`Could not configure the named route '${routeName}'`, route, `due to undefined config or undefined 'paths' property for this route`);
                return;
            }
        }
    }
    warn(...args) {
        if (isDevMode()) {
            console.warn(...args);
        }
    }
};
ConfigurableRoutesService.ctorParameters = () => [
    { type: Injector },
    { type: RoutingConfigService },
    { type: UrlMatcherService }
];
ConfigurableRoutesService.ɵprov = ɵɵdefineInjectable({ factory: function ConfigurableRoutesService_Factory() { return new ConfigurableRoutesService(ɵɵinject(INJECTOR), ɵɵinject(RoutingConfigService), ɵɵinject(UrlMatcherService)); }, token: ConfigurableRoutesService, providedIn: "root" });
ConfigurableRoutesService = __decorate([
    Injectable({ providedIn: 'root' })
], ConfigurableRoutesService);

let UrlPipe = class UrlPipe {
    constructor(urlService) {
        this.urlService = urlService;
    }
    transform(commands) {
        return this.urlService.transform(commands);
    }
};
UrlPipe.ctorParameters = () => [
    { type: SemanticPathService }
];
UrlPipe = __decorate([
    Pipe({
        name: 'cxUrl',
    })
], UrlPipe);

let ProductURLPipe = class ProductURLPipe {
    constructor(semanticPath) {
        this.semanticPath = semanticPath;
    }
    transform(product) {
        return this.semanticPath.transform({ cxRoute: 'product', params: product });
    }
};
ProductURLPipe.ctorParameters = () => [
    { type: SemanticPathService }
];
ProductURLPipe = __decorate([
    Pipe({
        name: 'cxProductUrl',
    })
], ProductURLPipe);

let UrlModule = class UrlModule {
};
UrlModule = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [UrlPipe, ProductURLPipe],
        exports: [UrlPipe, ProductURLPipe],
    })
], UrlModule);

class ExternalRoutesConfig {
}

let ExternalRoutesGuard = class ExternalRoutesGuard {
    constructor(winRef, platformId) {
        this.winRef = winRef;
        this.platformId = platformId;
    }
    /**
     * Redirects to different storefront system for anticipated URL
     */
    canActivate(route, state) {
        if (isPlatformBrowser(this.platformId)) {
            this.redirect(route, state);
        }
        return false;
    }
    /**
     * Redirects to anticipated URL using full page reload, not Angular routing
     */
    redirect(_, state) {
        const window = this.winRef.nativeWindow;
        if (window && window.location) {
            window.location.href = state.url;
        }
    }
};
ExternalRoutesGuard.ctorParameters = () => [
    { type: WindowRef },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
ExternalRoutesGuard.ɵprov = ɵɵdefineInjectable({ factory: function ExternalRoutesGuard_Factory() { return new ExternalRoutesGuard(ɵɵinject(WindowRef), ɵɵinject(PLATFORM_ID)); }, token: ExternalRoutesGuard, providedIn: "root" });
ExternalRoutesGuard = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(1, Inject(PLATFORM_ID))
], ExternalRoutesGuard);

function addExternalRoutesFactory(service) {
    const result = () => {
        service.addRoutes();
    };
    return result;
}

/**
 * Service that helps redirecting to different storefront systems for configured URLs
 */
let ExternalRoutesService = class ExternalRoutesService {
    constructor(config, urlMatcherService, injector) {
        this.config = config;
        this.urlMatcherService = urlMatcherService;
        this.injector = injector;
    }
    get internalUrlPatterns() {
        return ((this.config && this.config.routing && this.config.routing.internal) || []);
    }
    /**
     * Prepends routes (to the Router.config) that are responsible for redirecting to a different storefront system
     */
    addRoutes() {
        const router = this.injector.get(Router);
        const newRoutes = this.getRoutes();
        if (newRoutes.length) {
            router.resetConfig([...newRoutes, ...router.config]);
        }
    }
    /**
     * Returns routes that are responsible for redirection to different storefront systems
     */
    getRoutes() {
        if (!this.internalUrlPatterns.length) {
            return [];
        }
        const routes = [];
        routes.push({
            pathMatch: 'full',
            matcher: this.getUrlMatcher(),
            canActivate: [ExternalRoutesGuard],
            component: {},
        });
        return routes;
    }
    /**
     * Returns the URL matcher for the external route
     */
    getUrlMatcher() {
        const matcher = this.urlMatcherService.getFromGlob(this.internalUrlPatterns);
        return this.urlMatcherService.getOpposite(matcher); // the external route should be activated only when it's NOT an internal route
    }
};
ExternalRoutesService.ctorParameters = () => [
    { type: ExternalRoutesConfig },
    { type: UrlMatcherService },
    { type: Injector }
];
ExternalRoutesService = __decorate([
    Injectable()
], ExternalRoutesService);

var ExternalRoutesModule_1;
/**
 * Prepends the external route that redirects to a different storefront system for configured URLs
 */
let ExternalRoutesModule = ExternalRoutesModule_1 = class ExternalRoutesModule {
    static forRoot() {
        return {
            ngModule: ExternalRoutesModule_1,
            providers: [
                ExternalRoutesService,
                { provide: ExternalRoutesConfig, useExisting: Config },
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    useFactory: addExternalRoutesFactory,
                    deps: [ExternalRoutesService],
                },
            ],
        };
    }
};
ExternalRoutesModule = ExternalRoutesModule_1 = __decorate([
    NgModule()
], ExternalRoutesModule);

class PageContext {
    constructor(id, type) {
        this.id = id;
        this.type = type;
    }
}

let ProtectedRoutesService = class ProtectedRoutesService {
    constructor(config) {
        this.config = config;
        this.nonProtectedPaths = []; // arrays of paths' segments list
        if (this.shouldProtect) {
            // pre-process config for performance:
            this.nonProtectedPaths = this.getNonProtectedPaths().map((path) => this.getSegments(path));
        }
    }
    get routingConfig() {
        return this.config && this.config.routing;
    }
    /**
     * Returns 'protected' property (boolean) from routing config
     *
     * @returns boolean
     */
    get shouldProtect() {
        return this.routingConfig.protected;
    }
    /**
     * Tells if the url is protected
     */
    isUrlProtected(urlSegments) {
        return (this.shouldProtect &&
            !this.matchAnyPath(urlSegments, this.nonProtectedPaths));
    }
    /**
     * Tells whether the url matches at least one of the paths
     */
    matchAnyPath(urlSegments, pathsSegments) {
        return pathsSegments.some((pathSegments) => this.matchPath(urlSegments, pathSegments));
    }
    /**
     * Tells whether the url matches the path
     */
    matchPath(urlSegments, pathSegments) {
        if (urlSegments.length !== pathSegments.length) {
            return false;
        }
        for (let i = 0; i < pathSegments.length; i++) {
            const pathSeg = pathSegments[i];
            const urlSeg = urlSegments[i];
            // compare only static segments:
            if (!pathSeg.startsWith(':') && pathSeg !== urlSeg) {
                return false;
            }
        }
        return true;
    }
    /**
     * Returns a list of paths that are not protected
     */
    getNonProtectedPaths() {
        return Object.values(this.routingConfig.routes).reduce((acc, routeConfig) => routeConfig.protected === false && // must be explicitly false, ignore undefined
            routeConfig.paths &&
            routeConfig.paths.length
            ? acc.concat(routeConfig.paths)
            : acc, []);
    }
    /**
     * Splits the url by slashes
     */
    getSegments(url) {
        return (url || '').split('/');
    }
};
ProtectedRoutesService.ctorParameters = () => [
    { type: RoutingConfig }
];
ProtectedRoutesService.ɵprov = ɵɵdefineInjectable({ factory: function ProtectedRoutesService_Factory() { return new ProtectedRoutesService(ɵɵinject(RoutingConfig)); }, token: ProtectedRoutesService, providedIn: "root" });
ProtectedRoutesService = __decorate([
    Injectable({ providedIn: 'root' })
], ProtectedRoutesService);

let ProtectedRoutesGuard = class ProtectedRoutesGuard {
    constructor(service, authGuard) {
        this.service = service;
        this.authGuard = authGuard;
    }
    /**
     * When the anticipated url is protected, it switches to the AuthGuard. Otherwise emits true.
     */
    canActivate(route) {
        let urlSegments = route.url.map((seg) => seg.path);
        // For the root path `/` ActivatedRoute contains an empty array of segments:
        urlSegments = urlSegments.length ? urlSegments : [''];
        if (this.service.isUrlProtected(urlSegments)) {
            return this.authGuard.canActivate();
        }
        return of(true);
    }
};
ProtectedRoutesGuard.ctorParameters = () => [
    { type: ProtectedRoutesService },
    { type: AuthGuard }
];
ProtectedRoutesGuard.ɵprov = ɵɵdefineInjectable({ factory: function ProtectedRoutesGuard_Factory() { return new ProtectedRoutesGuard(ɵɵinject(ProtectedRoutesService), ɵɵinject(AuthGuard)); }, token: ProtectedRoutesGuard, providedIn: "root" });
ProtectedRoutesGuard = __decorate([
    Injectable({ providedIn: 'root' })
], ProtectedRoutesGuard);

let RouterEffects = class RouterEffects {
    constructor(actions$, router, location) {
        this.actions$ = actions$;
        this.router = router;
        this.location = location;
        this.navigate$ = this.actions$.pipe(ofType(ROUTER_GO), map((action) => action.payload), tap(({ path, query: queryParams, extras }) => {
            this.router.navigate(path, Object.assign({ queryParams }, extras));
        }));
        this.navigateBuUrl$ = this.actions$.pipe(ofType(ROUTER_GO_BY_URL), map((action) => action.payload), tap((url) => {
            this.router.navigateByUrl(url);
        }));
        this.clearCmsRoutes$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE, LOGOUT, LOGIN), tap(() => {
            const filteredConfig = this.router.config.filter((route) => !(route.data && route.data.cxCmsRouteContext));
            if (filteredConfig.length !== this.router.config.length) {
                this.router.resetConfig(filteredConfig);
            }
        }));
        this.navigateBack$ = this.actions$.pipe(ofType(ROUTER_BACK), tap(() => this.location.back()));
        this.navigateForward$ = this.actions$.pipe(ofType(ROUTER_FORWARD), tap(() => this.location.forward()));
    }
};
RouterEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: Location }
];
__decorate([
    Effect({ dispatch: false })
], RouterEffects.prototype, "navigate$", void 0);
__decorate([
    Effect({ dispatch: false })
], RouterEffects.prototype, "navigateBuUrl$", void 0);
__decorate([
    Effect({ dispatch: false })
], RouterEffects.prototype, "clearCmsRoutes$", void 0);
__decorate([
    Effect({ dispatch: false })
], RouterEffects.prototype, "navigateBack$", void 0);
__decorate([
    Effect({ dispatch: false })
], RouterEffects.prototype, "navigateForward$", void 0);
RouterEffects = __decorate([
    Injectable()
], RouterEffects);

const effects$6 = [RouterEffects];

const initialState$c = {
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
function getReducers$6() {
    return {
        router: reducer$c,
    };
}
function reducer$c(state = initialState$c, action) {
    switch (action.type) {
        case ROUTER_NAVIGATION: {
            return Object.assign(Object.assign({}, state), { nextState: action.payload.routerState, navigationId: action.payload.event.id });
        }
        case ROUTER_ERROR:
        case ROUTER_CANCEL: {
            return Object.assign(Object.assign({}, state), { nextState: undefined });
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
const reducerToken$6 = new InjectionToken('RouterReducers');
const reducerProvider$6 = {
    provide: reducerToken$6,
    useFactory: getReducers$6,
};
/* The serializer is there to parse the RouterStateSnapshot,
and to reduce the amount of properties to be passed to the reducer.
 */
class CustomSerializer {
    serialize(routerState) {
        const { url } = routerState;
        const { queryParams } = routerState.root;
        let state = routerState.root;
        let cmsRequired = false;
        let context;
        while (state.firstChild) {
            state = state.firstChild;
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
                        state.routeConfig.canActivate.find((x) => x && x.guardName === 'CmsPageGuard')))) {
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
                    const pageLabel = '/' + state.url.map((urlSegment) => urlSegment.path).join('/');
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

var RoutingModule_1;
function initConfigurableRoutes(service) {
    const result = () => service.init(); // workaround for AOT compilation (see https://stackoverflow.com/a/51977115)
    return result;
}
let RoutingModule = RoutingModule_1 = class RoutingModule {
    static forRoot() {
        return {
            ngModule: RoutingModule_1,
            providers: [
                reducerProvider$6,
                {
                    provide: RouterStateSerializer,
                    useClass: CustomSerializer,
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: initConfigurableRoutes,
                    deps: [ConfigurableRoutesService],
                    multi: true,
                },
                { provide: RoutingConfig, useExisting: Config },
            ],
        };
    }
};
RoutingModule = RoutingModule_1 = __decorate([
    NgModule({
        imports: [
            StoreModule.forFeature(ROUTING_FEATURE, reducerToken$6),
            EffectsModule.forFeature(effects$6),
            StoreRouterConnectingModule.forRoot({
                routerState: 1 /* Minimal */,
                stateKey: ROUTING_FEATURE,
            }),
        ],
    })
], RoutingModule);

function getDefaultUrlMatcherFactory(routingConfigService, urlMatcherService) {
    const factory = (route) => {
        const routeName = route.data && route.data['cxRoute'];
        const routeConfig = routingConfigService.getRouteConfig(routeName);
        const paths = (routeConfig && routeConfig.paths) || [];
        return urlMatcherService.getFromPaths(paths);
    };
    return factory;
}
/**
 * Injection token with url matcher factory for spartacus routes containing property `data.cxRoute`.
 * The provided url matcher matches the configured `paths` from routing config.
 *
 * If this matcher doesn't fit the requirements, it can be replaced with custom matcher
 * or additional matchers can be added for a specific route. See for example PRODUCT_DETAILS_URL_MATCHER.
 *
 * Note: Matchers will "match" a route, but do not contribute to the creation of the route, nor do they guard routes.
 */
const DEFAULT_URL_MATCHER = new InjectionToken('DEFAULT_URL_MATCHER', {
    providedIn: 'root',
    factory: () => getDefaultUrlMatcherFactory(inject(RoutingConfigService), inject(UrlMatcherService)),
});

let NavigationEntryItemEffects = class NavigationEntryItemEffects {
    constructor(actions$, cmsComponentConnector, routingService) {
        this.actions$ = actions$;
        this.cmsComponentConnector = cmsComponentConnector;
        this.routingService = routingService;
        this.loadNavigationItems$ = this.actions$.pipe(ofType(LOAD_CMS_NAVIGATION_ITEMS), map((action) => action.payload), map((payload) => {
            return {
                ids: this.getIdListByItemType(payload.items),
                nodeId: payload.nodeId,
            };
        }), mergeMap((data) => {
            if (data.ids.componentIds.length > 0) {
                return this.routingService.getRouterState().pipe(filter((routerState) => routerState !== undefined), map((routerState) => routerState.state.context), take(1), mergeMap((pageContext) => 
                // download all items in one request
                this.cmsComponentConnector
                    .getList(data.ids.componentIds, pageContext)
                    .pipe(map((components) => new LoadCmsNavigationItemsSuccess({
                    nodeId: data.nodeId,
                    components: components,
                })), catchError((error) => of(new LoadCmsNavigationItemsFail(data.nodeId, makeErrorSerializable(error)))))));
            }
            else if (data.ids.pageIds.length > 0) {
                // TODO: future work
                // dispatch action to load cms page one by one
            }
            else if (data.ids.mediaIds.length > 0) {
                // TODO: future work
                // send request to get list of media
            }
            else {
                return of(new LoadCmsNavigationItemsFail(data.nodeId, 'navigation nodes are empty'));
            }
        }));
    }
    // We only consider 3 item types: cms page, cms component, and media.
    getIdListByItemType(itemList) {
        const pageIds = [];
        const componentIds = [];
        const mediaIds = [];
        itemList.forEach((item) => {
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
    }
};
NavigationEntryItemEffects.ctorParameters = () => [
    { type: Actions },
    { type: CmsComponentConnector },
    { type: RoutingService }
];
__decorate([
    Effect()
], NavigationEntryItemEffects.prototype, "loadNavigationItems$", void 0);
NavigationEntryItemEffects = __decorate([
    Injectable()
], NavigationEntryItemEffects);

let CmsPageConnector = class CmsPageConnector {
    constructor(cmsPageAdapter, cmsStructureConfigService) {
        this.cmsPageAdapter = cmsPageAdapter;
        this.cmsStructureConfigService = cmsStructureConfigService;
    }
    /**
     * Returns an observable with the page structure. The page structure is
     * typically loaded from a backend, but can also be returned from static
     * configuration (see `CmsStructureConfigService`).
     */
    get(pageContext) {
        return this.cmsStructureConfigService
            .shouldIgnoreBackend(pageContext.id)
            .pipe(switchMap((loadFromConfig) => {
            if (!loadFromConfig) {
                return this.cmsPageAdapter.load(pageContext).pipe(catchError((error) => {
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
        }), switchMap((page) => this.mergeDefaultPageStructure(pageContext, page)));
    }
    /**
     *
     * Merge default page structure inot the given `CmsStructureModel`.
     * This is benefitial for a fast setup of the UI without necessary
     * finegrained CMS setup.
     */
    mergeDefaultPageStructure(pageContext, pageStructure) {
        return this.cmsStructureConfigService.mergePageStructure(pageContext.id, pageStructure);
    }
};
CmsPageConnector.ctorParameters = () => [
    { type: CmsPageAdapter },
    { type: CmsStructureConfigService }
];
CmsPageConnector.ɵprov = ɵɵdefineInjectable({ factory: function CmsPageConnector_Factory() { return new CmsPageConnector(ɵɵinject(CmsPageAdapter), ɵɵinject(CmsStructureConfigService)); }, token: CmsPageConnector, providedIn: "root" });
CmsPageConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CmsPageConnector);

let PageEffects = class PageEffects {
    constructor(actions$, cmsPageConnector, routingService) {
        this.actions$ = actions$;
        this.cmsPageConnector = cmsPageConnector;
        this.routingService = routingService;
        this.refreshPage$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE, LOGOUT, LOGIN), switchMap(() => this.routingService.getRouterState().pipe(filter((routerState) => routerState &&
            routerState.state &&
            routerState.state.cmsRequired &&
            !routerState.nextState), take(1), map((routerState) => routerState.state.context), mergeMap((context) => of(new LoadCmsPageData(context))))));
        this.loadPageData$ = this.actions$.pipe(ofType(LOAD_CMS_PAGE_DATA), map((action) => action.payload), groupBy((pageContext) => serializePageContext(pageContext)), mergeMap((group) => group.pipe(switchMap((pageContext) => this.cmsPageConnector.get(pageContext).pipe(mergeMap((cmsStructure) => {
            const actions = [
                new CmsGetComponentFromPage(cmsStructure.components.map((component) => ({
                    component,
                    pageContext,
                }))),
                new LoadCmsPageDataSuccess(pageContext, cmsStructure.page),
            ];
            const pageLabel = cmsStructure.page.label;
            // For content pages the page label returned from backend can be different than page ID initially assumed from route.
            // In such a case let's save the success response not only for initially assumed page ID, but also for correct page label.
            if (pageLabel && pageLabel !== pageContext.id) {
                actions.unshift(new CmsSetPageSuccessIndex({ id: pageLabel, type: pageContext.type }, cmsStructure.page));
            }
            return actions;
        }), catchError((error) => of(new LoadCmsPageDataFail(pageContext, makeErrorSerializable(error)))))))));
    }
};
PageEffects.ctorParameters = () => [
    { type: Actions },
    { type: CmsPageConnector },
    { type: RoutingService }
];
__decorate([
    Effect()
], PageEffects.prototype, "refreshPage$", void 0);
__decorate([
    Effect()
], PageEffects.prototype, "loadPageData$", void 0);
PageEffects = __decorate([
    Injectable()
], PageEffects);

const effects$7 = [
    PageEffects,
    ComponentsEffects,
    NavigationEntryItemEffects,
];

const initialState$d = {
    component: undefined,
    pageContext: {},
};
function componentExistsReducer(state = false, action) {
    switch (action.type) {
        case LOAD_CMS_COMPONENT_FAIL:
            return false;
        case CMS_GET_COMPONENT_FROM_PAGE:
        case LOAD_CMS_COMPONENT_SUCCESS:
            return true;
    }
    return state;
}
function reducer$d(state = initialState$d, action) {
    switch (action.type) {
        case LOAD_CMS_COMPONENT: {
            const pageContextReducer = loaderReducer(action.meta.entityType, componentExistsReducer);
            const context = serializePageContext(action.payload.pageContext, true);
            return Object.assign(Object.assign({}, state), { pageContext: Object.assign(Object.assign({}, state.pageContext), { [context]: pageContextReducer(state.pageContext[context], action) }) });
        }
        case LOAD_CMS_COMPONENT_FAIL: {
            const pageContextReducer = loaderReducer(action.meta.entityType, componentExistsReducer);
            const context = serializePageContext(action.payload.pageContext, true);
            return Object.assign(Object.assign({}, state), { pageContext: Object.assign(Object.assign({}, state.pageContext), { [context]: pageContextReducer(state.pageContext[context], action) }) });
        }
        case LOAD_CMS_COMPONENT_SUCCESS: {
            const pageContextReducer = loaderReducer(action.meta.entityType, componentExistsReducer);
            const context = serializePageContext(action.payload.pageContext, true);
            return Object.assign(Object.assign({}, state), { component: action.payload.component, pageContext: Object.assign(Object.assign({}, state.pageContext), { [context]: pageContextReducer(state.pageContext[context], action) }) });
        }
        case CMS_GET_COMPONENT_FROM_PAGE: {
            const pageContextReducer = loaderReducer(action.meta.entityType, componentExistsReducer);
            if (!Array.isArray(action.payload)) {
                const context = serializePageContext(action.payload.pageContext, true);
                return Object.assign(Object.assign({}, state), { component: action.payload.component, pageContext: Object.assign(Object.assign({}, state.pageContext), { [context]: pageContextReducer(state.pageContext[context], action) }) });
            }
        }
    }
    return state;
}

const initialState$e = undefined;
function reducer$e(state = initialState$e, action) {
    switch (action.type) {
        case LOAD_CMS_NAVIGATION_ITEMS_SUCCESS: {
            if (action.payload.components) {
                const components = action.payload.components;
                const newItem = components.reduce((compItems, component) => {
                    return Object.assign(Object.assign({}, compItems), { [`${component.uid}_AbstractCMSComponent`]: component });
                }, Object.assign({}));
                return Object.assign(Object.assign({}, state), newItem);
            }
        }
    }
    return state;
}

const initialState$f = { entities: {} };
function reducer$f(state = initialState$f, action) {
    switch (action.type) {
        case LOAD_CMS_PAGE_DATA_SUCCESS: {
            const page = action.payload;
            return Object.assign(Object.assign({}, state), { entities: Object.assign(Object.assign({}, state.entities), { [page.pageId]: page }) });
        }
    }
    return state;
}

const initialState$g = undefined;
function reducer$g(entityType) {
    return (state = initialState$g, action) => {
        if (action.meta && action.meta.entityType === entityType) {
            switch (action.type) {
                case LOAD_CMS_PAGE_DATA_SUCCESS: {
                    return action.payload.pageId;
                }
                case LOAD_CMS_PAGE_DATA_FAIL: {
                    return initialState$g;
                }
                case CMS_SET_PAGE_FAIL_INDEX: {
                    return action.payload;
                }
                case CMS_SET_PAGE_SUCCESS_INDEX: {
                    return action.payload.pageId;
                }
            }
        }
        return state;
    };
}

function getReducers$7() {
    return {
        page: combineReducers({
            pageData: reducer$f,
            index: combineReducers({
                content: entityLoaderReducer(PageType.CONTENT_PAGE, reducer$g(PageType.CONTENT_PAGE)),
                product: entityLoaderReducer(PageType.PRODUCT_PAGE, reducer$g(PageType.PRODUCT_PAGE)),
                category: entityLoaderReducer(PageType.CATEGORY_PAGE, reducer$g(PageType.CATEGORY_PAGE)),
                catalog: entityLoaderReducer(PageType.CATALOG_PAGE, reducer$g(PageType.CATALOG_PAGE)),
            }),
        }),
        components: entityReducer(COMPONENT_ENTITY, reducer$d),
        navigation: entityLoaderReducer(NAVIGATION_DETAIL_ENTITY, reducer$e),
    };
}
const reducerToken$7 = new InjectionToken('CmsReducers');
const reducerProvider$7 = {
    provide: reducerToken$7,
    useFactory: getReducers$7,
};
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
const metaReducers$3 = [clearCmsState];

function cmsStoreConfigFactory() {
    // if we want to reuse CMS_FEATURE const in config, we have to use factory instead of plain object
    const config = {
        state: {
            ssrTransfer: {
                keys: { [CMS_FEATURE]: StateTransferType.TRANSFER_STATE },
            },
        },
    };
    return config;
}
let CmsStoreModule = class CmsStoreModule {
};
CmsStoreModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            HttpClientModule,
            StateModule,
            StoreModule.forFeature(CMS_FEATURE, reducerToken$7, { metaReducers: metaReducers$3 }),
            EffectsModule.forFeature(effects$7),
        ],
        providers: [
            provideDefaultConfigFactory(cmsStoreConfigFactory),
            reducerProvider$7,
        ],
    })
], CmsStoreModule);

var CmsModule_1;
let CmsModule = CmsModule_1 = class CmsModule {
    static forRoot() {
        return {
            ngModule: CmsModule_1,
            providers: [
                CmsService,
                { provide: CmsConfig, useExisting: Config },
                { provide: CmsStructureConfig, useExisting: Config },
                provideDefaultConfig(defaultCmsModuleConfig),
            ],
        };
    }
};
CmsModule = CmsModule_1 = __decorate([
    NgModule({
        imports: [CmsStoreModule, CmsPageTitleModule],
    })
], CmsModule);

let PageMetaService = class PageMetaService {
    constructor(resolvers, cms) {
        this.resolvers = resolvers;
        this.cms = cms;
        /**
         * The list of resolver interfaces will be evaluated for the pageResolvers.
         *
         * TOOD: optimize browser vs SSR resolvers; image, robots and description
         *       aren't needed during browsing.
         * TODO: we can make the list of resolver types configurable
         */
        this.resolverMethods = {
            title: 'resolveTitle',
            heading: 'resolveHeading',
            description: 'resolveDescription',
            breadcrumbs: 'resolveBreadcrumbs',
            image: 'resolveImage',
            robots: 'resolveRobots',
        };
        this.resolvers = this.resolvers || [];
    }
    getMeta() {
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap((page) => {
            const metaResolver = this.getMetaResolver(page);
            if (metaResolver) {
                return this.resolve(metaResolver);
            }
            else {
                // we do not have a page resolver
                return of(null);
            }
        }));
    }
    /**
     * If a `PageResolver` has implemented a resolver interface, the resolved data
     * is merged into the `PageMeta` object.
     * @param metaResolver
     */
    resolve(metaResolver) {
        const resolveMethods = Object.keys(this.resolverMethods)
            .filter((key) => metaResolver[this.resolverMethods[key]])
            .map((key) => metaResolver[this.resolverMethods[key]]().pipe(map((data) => ({
            [key]: data,
        }))));
        return combineLatest(resolveMethods).pipe(map((data) => Object.assign({}, ...data)));
    }
    /**
     * Return the resolver with the best match, based on a score
     * generated by the resolver.
     *
     * Resolvers match by default on `PageType` and `page.template`.
     */
    getMetaResolver(page) {
        const matchingResolvers = this.resolvers.filter((resolver) => resolver.getScore(page) > 0);
        matchingResolvers.sort(function (a, b) {
            return b.getScore(page) - a.getScore(page);
        });
        return matchingResolvers[0];
    }
};
PageMetaService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [PageMetaResolver,] }] },
    { type: CmsService }
];
PageMetaService.ɵprov = ɵɵdefineInjectable({ factory: function PageMetaService_Factory() { return new PageMetaService(ɵɵinject(PageMetaResolver, 8), ɵɵinject(CmsService)); }, token: PageMetaService, providedIn: "root" });
PageMetaService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(0, Optional()),
    __param(0, Inject(PageMetaResolver))
], PageMetaService);

let DynamicAttributeService = class DynamicAttributeService {
    /**
     * Add dynamic attributes to DOM. These attributes are extracted from the properties of cms items received from backend.
     * There can by many different groups of properties, one of them is smaredit. But EC allows addons to create different groups.
     * For example, personalization may add 'script' group etc.
     * @param properties: properties in each cms item response data
     * @param element: slot or cms component element
     * @param renderer
     */
    addDynamicAttributes(properties, element, renderer) {
        if (properties) {
            // check each group of properties, e.g. smartedit
            Object.keys(properties).forEach((group) => {
                const name = 'data-' + group + '-';
                const groupProps = properties[group];
                // check each property in the group
                Object.keys(groupProps).forEach((propName) => {
                    const propValue = groupProps[propName];
                    if (propName === 'classes') {
                        const classes = propValue.split(' ');
                        classes.forEach((classItem) => {
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
    }
};
DynamicAttributeService.ɵprov = ɵɵdefineInjectable({ factory: function DynamicAttributeService_Factory() { return new DynamicAttributeService(); }, token: DynamicAttributeService, providedIn: "root" });
DynamicAttributeService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], DynamicAttributeService);

function getCookie(cookie, name) {
    const regExp = new RegExp('(?:^|;\\s*)' + name + '=([^;]*)', 'g');
    const result = regExp.exec(cookie);
    return (result && decodeURIComponent(result[1])) || '';
}

var TestConfigModule_1;
const TEST_CONFIG_COOKIE_NAME = new InjectionToken('TEST_CONFIG_COOKIE_NAME');
function parseConfigJSON(config) {
    try {
        return JSON.parse(decodeURIComponent(config));
    }
    catch (_) {
        return {};
    }
}
function configFromCookieFactory(cookieName, platform, document) {
    if (isPlatformBrowser(platform) && cookieName) {
        const config = getCookie(document.cookie, cookieName);
        return parseConfigJSON(config);
    }
    return {};
}
/**
 * Designed/intended to provide dynamic configuration for testing scenarios ONLY (e.g. e2e tests).
 *
 * CAUTION: DON'T USE IT IN PRODUCTION! IT HASN'T BEEN REVIEWED FOR SECURITY ISSUES.
 */
let TestConfigModule = TestConfigModule_1 = class TestConfigModule {
    /**
     * Injects JSON config from the cookie of the given name.
     *
     * Be aware of the cookie limitations (4096 bytes).
     *
     * CAUTION: DON'T USE IT IN PRODUCTION! IT HASN'T BEEN REVIEWED FOR SECURITY ISSUES.
     */
    static forRoot(options) {
        return {
            ngModule: TestConfigModule_1,
            providers: [
                {
                    provide: TEST_CONFIG_COOKIE_NAME,
                    useValue: options && options.cookie,
                },
                provideConfigFactory(configFromCookieFactory, [
                    TEST_CONFIG_COOKIE_NAME,
                    PLATFORM_ID,
                    DOCUMENT,
                ]),
            ],
        };
    }
};
TestConfigModule = TestConfigModule_1 = __decorate([
    NgModule({})
], TestConfigModule);

var ConfigValidatorModule_1;
function configValidatorFactory(configInitializer, validators) {
    const validate = () => {
        if (isDevMode()) {
            configInitializer
                .getStableConfig()
                .then((config) => validateConfig(config, validators || []));
        }
    };
    return validate;
}
/**
 * Should stay private in 1.x
 * as forRoot() is used internally by ConfigInitializerModule
 *
 * issue: #5279
 */
let ConfigValidatorModule = ConfigValidatorModule_1 = class ConfigValidatorModule {
    static forRoot() {
        return {
            ngModule: ConfigValidatorModule_1,
            providers: [
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    useFactory: configValidatorFactory,
                    deps: [
                        ConfigInitializerService,
                        [new Optional(), ConfigValidatorToken],
                    ],
                },
            ],
        };
    }
};
ConfigValidatorModule = ConfigValidatorModule_1 = __decorate([
    NgModule()
], ConfigValidatorModule);

var ConfigInitializerModule_1;
function configInitializerFactory(configInitializer, initializers) {
    const isReady = () => configInitializer.initialize(initializers);
    return isReady;
}
let ConfigInitializerModule = ConfigInitializerModule_1 = class ConfigInitializerModule {
    static forRoot() {
        return {
            ngModule: ConfigInitializerModule_1,
            providers: [
                {
                    provide: CONFIG_INITIALIZER_FORROOT_GUARD,
                    useValue: true,
                },
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    useFactory: configInitializerFactory,
                    deps: [
                        ConfigInitializerService,
                        [new Optional(), CONFIG_INITIALIZER],
                    ],
                },
            ],
        };
    }
};
ConfigInitializerModule = ConfigInitializerModule_1 = __decorate([
    NgModule({})
], ConfigInitializerModule);

class FeaturesConfig {
}

function isFeatureConfig(config) {
    return typeof config === 'object' && config.features;
}
function isInLevel(level, version) {
    if (level === '*') {
        return true;
    }
    const levelParts = level.split('.');
    const versionParts = version.split('.');
    for (let i = 0; i < versionParts.length; i++) {
        const versionNumberPart = Number(versionParts[i]);
        const levelNumberPart = Number(levelParts[i]) || 0;
        if (versionNumberPart !== levelNumberPart) {
            return levelNumberPart > versionNumberPart;
        }
    }
    return true;
}
function isFeatureLevel(config, level) {
    if (isFeatureConfig(config)) {
        return level[0] === '!'
            ? !isInLevel(config.features.level, level.substr(1, level.length))
            : isInLevel(config.features.level, level);
    }
}
function isFeatureEnabled(config, feature) {
    if (isFeatureConfig(config)) {
        const featureConfig = feature[0] === '!'
            ? config.features[feature.substr(1, feature.length)]
            : config.features[feature];
        const result = typeof featureConfig === 'string'
            ? isFeatureLevel(config, featureConfig)
            : featureConfig;
        return feature[0] === '!' ? !result : result;
    }
}

let FeatureConfigService = class FeatureConfigService {
    constructor(config) {
        this.config = config;
    }
    isLevel(version) {
        return isFeatureLevel(this.config, version);
    }
    isEnabled(feature) {
        return isFeatureEnabled(this.config, feature);
    }
};
FeatureConfigService.ctorParameters = () => [
    { type: FeaturesConfig }
];
FeatureConfigService.ɵprov = ɵɵdefineInjectable({ factory: function FeatureConfigService_Factory() { return new FeatureConfigService(ɵɵinject(FeaturesConfig)); }, token: FeatureConfigService, providedIn: "root" });
FeatureConfigService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], FeatureConfigService);

let FeatureLevelDirective = class FeatureLevelDirective {
    constructor(templateRef, viewContainer, featureConfig) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.featureConfig = featureConfig;
        this.hasView = false;
    }
    set cxFeatureLevel(level) {
        if (this.featureConfig.isLevel(level.toString()) && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        }
        else if (!this.featureConfig.isLevel(level.toString()) && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }
};
FeatureLevelDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: FeatureConfigService }
];
__decorate([
    Input()
], FeatureLevelDirective.prototype, "cxFeatureLevel", null);
FeatureLevelDirective = __decorate([
    Directive({
        selector: '[cxFeatureLevel]',
    })
], FeatureLevelDirective);

let FeatureDirective = class FeatureDirective {
    constructor(templateRef, viewContainer, featureConfig) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.featureConfig = featureConfig;
        this.hasView = false;
    }
    set cxFeature(feature) {
        if (this.featureConfig.isEnabled(feature) && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        }
        else if (!this.featureConfig.isEnabled(feature) && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }
};
FeatureDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: FeatureConfigService }
];
__decorate([
    Input()
], FeatureDirective.prototype, "cxFeature", null);
FeatureDirective = __decorate([
    Directive({
        selector: '[cxFeature]',
    })
], FeatureDirective);

var FeaturesConfigModule_1;
let FeaturesConfigModule = FeaturesConfigModule_1 = class FeaturesConfigModule {
    static forRoot(defaultLevel) {
        return {
            ngModule: FeaturesConfigModule_1,
            providers: [
                provideDefaultConfig({
                    features: {
                        level: defaultLevel || '*',
                    },
                }),
                {
                    provide: FeaturesConfig,
                    useExisting: Config,
                },
            ],
        };
    }
};
FeaturesConfigModule = FeaturesConfigModule_1 = __decorate([
    NgModule({
        declarations: [FeatureLevelDirective, FeatureDirective],
        exports: [FeatureLevelDirective, FeatureDirective],
    })
], FeaturesConfigModule);

// type CxDatePipe, not DatePipe, due to conflict with Angular's DatePipe - problem occurs for the backward compatibility compiler of Ivy
let CxDatePipe = class CxDatePipe extends DatePipe {
    constructor(language) {
        super(null);
        this.language = language;
    }
    transform(value, format, timezone) {
        return super.transform(value, format, timezone, this.getLang());
    }
    getLang() {
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
    getActiveLang() {
        let result;
        this.language
            .getActive()
            .subscribe((lang) => (result = lang))
            .unsubscribe();
        return result;
    }
    reportMissingLocaleData(lang) {
        if (isDevMode()) {
            console.warn(`cxDate pipe: No locale data registered for '${lang}' (see https://angular.io/api/common/registerLocaleData).`);
        }
    }
};
CxDatePipe.ctorParameters = () => [
    { type: LanguageService }
];
CxDatePipe = __decorate([
    Pipe({ name: 'cxDate' })
], CxDatePipe);

let TranslatePipe = class TranslatePipe {
    constructor(service, cd) {
        this.service = service;
        this.cd = cd;
    }
    transform(input, options = {}) {
        if (input.raw) {
            return input.raw;
        }
        const key = typeof input === 'string' ? input : input.key;
        if (typeof input !== 'string') {
            options = Object.assign(Object.assign({}, options), input.params);
        }
        this.translate(key, options);
        return this.translatedValue;
    }
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
                .subscribe((val) => this.markForCheck(val));
        }
    }
    markForCheck(value) {
        this.translatedValue = value;
        this.cd.markForCheck();
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
};
TranslatePipe.ctorParameters = () => [
    { type: TranslationService },
    { type: ChangeDetectorRef }
];
TranslatePipe = __decorate([
    Pipe({ name: 'cxTranslate', pure: false })
], TranslatePipe);

class I18nConfig {
}

let TranslationChunkService = class TranslationChunkService {
    constructor(config) {
        this.config = config;
        this.duplicates = {};
        this.chunks = {};
        this.KEY_SEPARATOR = '.';
        const chunks = (config.i18n && config.i18n.chunks) || {};
        Object.keys(chunks).forEach((chunk) => {
            chunks[chunk].forEach((key) => {
                if (this.chunks.hasOwnProperty(key)) {
                    if (!this.duplicates[key]) {
                        this.duplicates[key] = [this.chunks[key]];
                    }
                    this.duplicates[key].push(chunk);
                }
                else {
                    this.chunks[key] = chunk;
                }
            });
        });
        if (Object.keys(this.duplicates).length > 0 && isDevMode()) {
            this.warnDuplicates(this.duplicates);
        }
    }
    getChunkNameForKey(key) {
        const mainKey = (key || '').split(this.KEY_SEPARATOR)[0];
        const chunk = this.chunks && this.chunks[mainKey];
        if (!chunk) {
            return mainKey; // fallback to main key as a chunk
        }
        return chunk;
    }
    warnDuplicates(items) {
        const dupes = [];
        Object.keys(items).forEach((key) => {
            dupes.push(`* '${key}' found in chunks: ${items[key].join(', ')}. Used '${this.chunks[key]}.${key}'.`);
        });
        console.warn(`Duplicated keys has been found in the config of i18n chunks:\n${dupes.join('\n')}`);
    }
};
TranslationChunkService.ctorParameters = () => [
    { type: I18nConfig }
];
TranslationChunkService = __decorate([
    Injectable()
], TranslationChunkService);

function i18nextInit(configInit, languageService, httpClient, serverRequestOrigin) {
    return () => configInit.getStableConfig('i18n').then((config) => {
        let i18nextConfig = {
            ns: [],
            fallbackLng: config.i18n.fallbackLang,
            debug: config.i18n.debug,
            interpolation: {
                escapeValue: false,
            },
        };
        if (config.i18n.backend) {
            i18next.use(i18nextXhrBackend);
            const loadPath = getLoadPath(config.i18n.backend.loadPath, serverRequestOrigin);
            const backend = {
                loadPath,
                ajax: i18nextGetHttpClient(httpClient),
            };
            i18nextConfig = Object.assign(Object.assign({}, i18nextConfig), { backend });
        }
        return i18next.init(i18nextConfig, () => {
            // Don't use i18next's 'resources' config key for adding static translations,
            // because it will disable loading chunks from backend. We add resources here, in the init's callback.
            i18nextAddTranslations(config.i18n.resources);
            syncI18nextWithSiteContext(languageService);
        });
    });
}
function i18nextAddTranslations(resources = {}) {
    Object.keys(resources).forEach((lang) => {
        Object.keys(resources[lang]).forEach((chunkName) => {
            i18next.addResourceBundle(lang, chunkName, resources[lang][chunkName], true, true);
        });
    });
}
function syncI18nextWithSiteContext(language) {
    // always update language of i18next on site context (language) change
    language.getActive().subscribe((lang) => i18next.changeLanguage(lang));
}
/**
 * Returns a function appropriate for i18next to make http calls for JSON files.
 * See docs for `i18next-xhr-backend`: https://github.com/i18next/i18next-xhr-backend#backend-options
 *
 * It uses Angular HttpClient under the hood, so it works in SSR.
 * @param httpClient Angular http client
 */
function i18nextGetHttpClient(httpClient) {
    return (url, _options, callback, _data) => {
        httpClient.get(url, { responseType: 'text' }).subscribe((data) => callback(data, { status: 200 }), (error) => callback(null, { status: error.status }));
    };
}
/**
 * Resolves the relative path to the absolute one in SSR, using the server request's origin.
 * It's needed, because Angular Universal doesn't support relative URLs in HttpClient. See Angular issues:
 * - https://github.com/angular/angular/issues/19224
 * - https://github.com/angular/universal/issues/858
 */
function getLoadPath(path, serverRequestOrigin) {
    if (!path) {
        return undefined;
    }
    if (serverRequestOrigin && !path.match(/^http(s)?:\/\//)) {
        if (path.startsWith('/')) {
            path = path.slice(1);
        }
        if (path.startsWith('./')) {
            path = path.slice(2);
        }
        const result = `${serverRequestOrigin}/${path}`;
        return result;
    }
    return path;
}

const ɵ0$C = i18nextInit;
const i18nextProviders = [
    {
        provide: APP_INITIALIZER,
        useFactory: ɵ0$C,
        deps: [
            ConfigInitializerService,
            LanguageService,
            HttpClient,
            [new Optional(), SERVER_REQUEST_ORIGIN],
        ],
        multi: true,
    },
];

const defaultI18nConfig = {
    i18n: {
        fallbackLang: false,
        debug: false,
    },
};

let I18nextTranslationService = class I18nextTranslationService {
    constructor(config, translationChunk) {
        this.config = config;
        this.translationChunk = translationChunk;
        this.NON_BREAKING_SPACE = String.fromCharCode(160);
        this.NAMESPACE_SEPARATOR = ':';
    }
    translate(key, options = {}, whitespaceUntilLoaded = false) {
        // If we've already loaded the chunk (or failed to load), we should immediately emit the value
        // (or the fallback value in case the key is missing).
        // Moreover, we SHOULD emit a value (or a fallback value) synchronously (not in a promise/setTimeout).
        // Otherwise, we the will trigger additional deferred change detection in a view that consumes the returned observable,
        // which together with `switchMap` operator may lead to an infinite loop.
        const chunkName = this.translationChunk.getChunkNameForKey(key);
        const namespacedKey = this.getNamespacedKey(key, chunkName);
        return new Observable((subscriber) => {
            const translate = () => {
                if (!i18next.isInitialized) {
                    return;
                }
                if (i18next.exists(namespacedKey, options)) {
                    subscriber.next(i18next.t(namespacedKey, options));
                }
                else {
                    if (whitespaceUntilLoaded) {
                        subscriber.next(this.NON_BREAKING_SPACE);
                    }
                    i18next.loadNamespaces(chunkName, () => {
                        if (!i18next.exists(namespacedKey, options)) {
                            this.reportMissingKey(key, chunkName);
                            subscriber.next(this.getFallbackValue(namespacedKey));
                        }
                        else {
                            subscriber.next(i18next.t(namespacedKey, options));
                        }
                    });
                }
            };
            translate();
            i18next.on('languageChanged', translate);
            return () => i18next.off('languageChanged', translate);
        });
    }
    loadChunks(chunkNames) {
        return i18next.loadNamespaces(chunkNames);
    }
    /**
     * Returns a fallback value in case when the given key is missing
     * @param key
     */
    getFallbackValue(key) {
        return isDevMode() ? `[${key}]` : this.NON_BREAKING_SPACE;
    }
    reportMissingKey(key, chunkName) {
        if (isDevMode()) {
            console.warn(`Translation key missing '${key}' in the chunk '${chunkName}'`);
        }
    }
    getNamespacedKey(key, chunk) {
        return chunk + this.NAMESPACE_SEPARATOR + key;
    }
};
I18nextTranslationService.ctorParameters = () => [
    { type: I18nConfig },
    { type: TranslationChunkService }
];
I18nextTranslationService = __decorate([
    Injectable()
], I18nextTranslationService);

var I18nModule_1;
let I18nModule = I18nModule_1 = class I18nModule {
    static forRoot() {
        return {
            ngModule: I18nModule_1,
            providers: [
                provideDefaultConfig(defaultI18nConfig),
                { provide: I18nConfig, useExisting: Config },
                { provide: TranslationService, useClass: I18nextTranslationService },
                TranslationChunkService,
                ...i18nextProviders,
            ],
        };
    }
};
I18nModule = I18nModule_1 = __decorate([
    NgModule({
        declarations: [TranslatePipe, CxDatePipe],
        exports: [TranslatePipe, CxDatePipe],
    })
], I18nModule);

function mockTranslate(key, options = {}) {
    const optionsString = Object.keys(options)
        .sort()
        .map((optionName) => `${optionName}:${options[optionName]}`)
        .join(' ');
    return optionsString ? `${key} ${optionsString}` : key;
}

let MockTranslatePipe = class MockTranslatePipe {
    transform(input, options = {}) {
        if (input.raw) {
            return input.raw;
        }
        const key = typeof input === 'string' ? input : input.key;
        if (typeof input !== 'string') {
            options = Object.assign(Object.assign({}, options), input.params);
        }
        return mockTranslate(key, options);
    }
};
MockTranslatePipe = __decorate([
    Pipe({ name: 'cxTranslate' })
], MockTranslatePipe);

let MockTranslationService = class MockTranslationService {
    translate(key, options = {}, _whitespaceUntilLoaded = false) {
        return new Observable((subscriber) => {
            const value = mockTranslate(key, options);
            subscriber.next(value);
            subscriber.complete();
        });
    }
    loadChunks(_chunks) {
        return Promise.resolve();
    }
};
MockTranslationService = __decorate([
    Injectable()
], MockTranslationService);

let MockDatePipe = class MockDatePipe extends DatePipe {
    transform(value, format, timezone) {
        return super.transform(value, format, timezone, 'en');
    }
};
MockDatePipe = __decorate([
    Pipe({ name: 'cxDate' })
], MockDatePipe);

let I18nTestingModule = class I18nTestingModule {
};
I18nTestingModule = __decorate([
    NgModule({
        declarations: [MockTranslatePipe, MockDatePipe],
        exports: [MockTranslatePipe, MockDatePipe],
        providers: [
            { provide: TranslationService, useClass: MockTranslationService },
        ],
    })
], I18nTestingModule);

class KymaConfig extends OccConfig {
}

const KYMA_FEATURE = 'kyma';
const OPEN_ID_TOKEN_DATA = '[Kyma Auth] Open ID Token Data';

const LOAD_OPEN_ID_TOKEN = '[Kyma] Load Open ID Token';
const LOAD_OPEN_ID_TOKEN_FAIL = '[Kyma] Load Open ID Token Fail';
const LOAD_OPEN_ID_TOKEN_SUCCESS = '[Kyma] Load Open ID Token Success';
class LoadOpenIdToken extends LoaderLoadAction {
    constructor(payload) {
        super(OPEN_ID_TOKEN_DATA);
        this.payload = payload;
        this.type = LOAD_OPEN_ID_TOKEN;
    }
}
class LoadOpenIdTokenFail extends LoaderFailAction {
    constructor(payload) {
        super(OPEN_ID_TOKEN_DATA, payload);
        this.payload = payload;
        this.type = LOAD_OPEN_ID_TOKEN_FAIL;
    }
}
class LoadOpenIdTokenSuccess extends LoaderSuccessAction {
    constructor(payload) {
        super(OPEN_ID_TOKEN_DATA);
        this.payload = payload;
        this.type = LOAD_OPEN_ID_TOKEN_SUCCESS;
    }
}



var kymaGroup_actions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    LOAD_OPEN_ID_TOKEN: LOAD_OPEN_ID_TOKEN,
    LOAD_OPEN_ID_TOKEN_FAIL: LOAD_OPEN_ID_TOKEN_FAIL,
    LOAD_OPEN_ID_TOKEN_SUCCESS: LOAD_OPEN_ID_TOKEN_SUCCESS,
    LoadOpenIdToken: LoadOpenIdToken,
    LoadOpenIdTokenFail: LoadOpenIdTokenFail,
    LoadOpenIdTokenSuccess: LoadOpenIdTokenSuccess
});

const getKymaState = createFeatureSelector(KYMA_FEATURE);

const ɵ0$D = (state) => state.openIdToken;
const getOpenIdTokenState = createSelector(getKymaState, ɵ0$D);
const getOpenIdTokenValue = createSelector(getOpenIdTokenState, loaderValueSelector);
const getOpenIdTokenLoading = createSelector(getOpenIdTokenState, loaderLoadingSelector);
const getOpenIdTokenSuccess = createSelector(getOpenIdTokenState, loaderSuccessSelector);
const getOpenIdTokenError = createSelector(getOpenIdTokenState, loaderErrorSelector);



var kymaGroup_selectors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getKymaState: getKymaState,
    getOpenIdTokenState: getOpenIdTokenState,
    getOpenIdTokenValue: getOpenIdTokenValue,
    getOpenIdTokenLoading: getOpenIdTokenLoading,
    getOpenIdTokenSuccess: getOpenIdTokenSuccess,
    getOpenIdTokenError: getOpenIdTokenError,
    ɵ0: ɵ0$D
});

let KymaService = class KymaService {
    constructor(store) {
        this.store = store;
    }
    /**
     * Authorizes using the Kyma OAuth client with scope `openid`.
     *
     * @param username a username
     * @param password a password
     */
    authorizeOpenId(username, password) {
        this.store.dispatch(new LoadOpenIdToken({ username, password }));
    }
    /**
     * Returns the `OpenIdToken`, which was previously retrieved using `authorizeOpenId` method.
     */
    getOpenIdToken() {
        return this.store.pipe(select(getOpenIdTokenValue));
    }
};
KymaService.ctorParameters = () => [
    { type: Store }
];
KymaService.ɵprov = ɵɵdefineInjectable({ factory: function KymaService_Factory() { return new KymaService(ɵɵinject(Store)); }, token: KymaService, providedIn: "root" });
KymaService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], KymaService);

const defaultKymaConfig = {
    authentication: {
        kyma_enabled: false,
        kyma_client_id: 'client4kyma',
        kyma_client_secret: 'secret',
    },
};

const OAUTH_ENDPOINT$2 = '/authorizationserver/oauth/token';
let OpenIdAuthenticationTokenService = class OpenIdAuthenticationTokenService {
    constructor(config, http) {
        this.config = config;
        this.http = http;
    }
    loadOpenIdAuthenticationToken(username, password) {
        const url = this.getOAuthEndpoint();
        const params = new HttpParams()
            .set('client_id', encodeURIComponent(this.config.authentication.kyma_client_id))
            .set('client_secret', encodeURIComponent(this.config.authentication.kyma_client_secret))
            .set('grant_type', 'password') // authorization_code, client_credentials, password
            .set('username', username)
            .set('password', password)
            .set('scope', 'openid');
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(url, params, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    getOAuthEndpoint() {
        return (this.config.backend.occ.baseUrl || '') + OAUTH_ENDPOINT$2;
    }
};
OpenIdAuthenticationTokenService.ctorParameters = () => [
    { type: KymaConfig },
    { type: HttpClient }
];
OpenIdAuthenticationTokenService = __decorate([
    Injectable()
], OpenIdAuthenticationTokenService);

const KymaServices = [OpenIdAuthenticationTokenService];

let OpenIdTokenEffect = class OpenIdTokenEffect {
    constructor(actions$, openIdTokenService, config) {
        this.actions$ = actions$;
        this.openIdTokenService = openIdTokenService;
        this.config = config;
        this.triggerOpenIdTokenLoading$ = iif(() => this.config.authentication && this.config.authentication.kyma_enabled, this.actions$.pipe(ofType(LOAD_USER_TOKEN_SUCCESS), withLatestFrom(this.actions$.pipe(ofType(LOAD_USER_TOKEN))), map(([, loginAction]) => new LoadOpenIdToken({
            username: loginAction.payload.userId,
            password: loginAction.payload.password,
        }))));
        this.loadOpenIdToken$ = this.actions$.pipe(ofType(LOAD_OPEN_ID_TOKEN), map((action) => action.payload), exhaustMap((payload) => this.openIdTokenService
            .loadOpenIdAuthenticationToken(payload.username, payload.password)
            .pipe(map((token) => new LoadOpenIdTokenSuccess(token)), catchError((error) => of(new LoadOpenIdTokenFail(makeErrorSerializable(error)))))));
    }
};
OpenIdTokenEffect.ctorParameters = () => [
    { type: Actions },
    { type: OpenIdAuthenticationTokenService },
    { type: KymaConfig }
];
__decorate([
    Effect()
], OpenIdTokenEffect.prototype, "triggerOpenIdTokenLoading$", void 0);
__decorate([
    Effect()
], OpenIdTokenEffect.prototype, "loadOpenIdToken$", void 0);
OpenIdTokenEffect = __decorate([
    Injectable()
], OpenIdTokenEffect);

const effects$8 = [OpenIdTokenEffect];

function getReducers$8() {
    return {
        openIdToken: loaderReducer(OPEN_ID_TOKEN_DATA),
    };
}
const reducerToken$8 = new InjectionToken('KymaReducers');
const reducerProvider$8 = {
    provide: reducerToken$8,
    useFactory: getReducers$8,
};
function clearKymaState(reducer) {
    return function (state, action) {
        if (action.type === LOGOUT) {
            state = Object.assign(Object.assign({}, state), { openIdToken: undefined });
        }
        return reducer(state, action);
    };
}
const metaReducers$4 = [clearKymaState];

function kymaStoreConfigFactory() {
    // if we want to reuse KYMA_FEATURE const in config, we have to use factory instead of plain object
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
let KymaStoreModule = class KymaStoreModule {
};
KymaStoreModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            HttpClientModule,
            StateModule,
            StoreModule.forFeature(KYMA_FEATURE, reducerToken$8, { metaReducers: metaReducers$4 }),
            EffectsModule.forFeature(effects$8),
        ],
        providers: [
            provideDefaultConfigFactory(kymaStoreConfigFactory),
            reducerProvider$8,
        ],
    })
], KymaStoreModule);

let KymaModule = class KymaModule {
};
KymaModule = __decorate([
    NgModule({
        imports: [CommonModule, HttpClientModule, KymaStoreModule],
        providers: [
            provideDefaultConfig(defaultKymaConfig),
            ...KymaServices,
            { provide: KymaConfig, useExisting: Config },
        ],
    })
], KymaModule);

class PersonalizationConfig {
}

const defaultPersonalizationConfig = {
    personalization: {
        enabled: false,
        httpHeaderName: {
            id: 'Occ-Personalization-Id',
            timestamp: 'Occ-Personalization-Time',
        },
        context: {
            slotPosition: 'PlaceholderContentSlot',
            componentId: 'PersonalizationScriptComponent',
        },
    },
};

const PERSONALIZATION_ID_KEY = 'personalization-id';
let OccPersonalizationIdInterceptor = class OccPersonalizationIdInterceptor {
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
        return next.handle(request).pipe(tap((event) => {
            if (event instanceof HttpResponse) {
                if (event.headers.keys().includes(this.requestHeader)) {
                    const receivedId = event.headers.get(this.requestHeader);
                    if (this.personalizationId !== receivedId) {
                        this.personalizationId = receivedId;
                        this.winRef.localStorage.setItem(PERSONALIZATION_ID_KEY, this.personalizationId);
                    }
                }
            }
        }));
    }
};
OccPersonalizationIdInterceptor.ctorParameters = () => [
    { type: PersonalizationConfig },
    { type: OccEndpointsService },
    { type: WindowRef },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
OccPersonalizationIdInterceptor.ɵprov = ɵɵdefineInjectable({ factory: function OccPersonalizationIdInterceptor_Factory() { return new OccPersonalizationIdInterceptor(ɵɵinject(PersonalizationConfig), ɵɵinject(OccEndpointsService), ɵɵinject(WindowRef), ɵɵinject(PLATFORM_ID)); }, token: OccPersonalizationIdInterceptor, providedIn: "root" });
OccPersonalizationIdInterceptor = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(3, Inject(PLATFORM_ID))
], OccPersonalizationIdInterceptor);

const PERSONALIZATION_TIME_KEY = 'personalization-time';
let OccPersonalizationTimeInterceptor = class OccPersonalizationTimeInterceptor {
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
        return next.handle(request).pipe(tap((event) => {
            if (event instanceof HttpResponse) {
                if (event.headers.keys().includes(this.requestHeader)) {
                    const receivedTimestamp = event.headers.get(this.requestHeader);
                    if (this.timestamp !== receivedTimestamp) {
                        this.timestamp = receivedTimestamp;
                        this.winRef.localStorage.setItem(PERSONALIZATION_TIME_KEY, this.timestamp);
                    }
                }
            }
        }));
    }
};
OccPersonalizationTimeInterceptor.ctorParameters = () => [
    { type: PersonalizationConfig },
    { type: OccEndpointsService },
    { type: WindowRef },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
OccPersonalizationTimeInterceptor.ɵprov = ɵɵdefineInjectable({ factory: function OccPersonalizationTimeInterceptor_Factory() { return new OccPersonalizationTimeInterceptor(ɵɵinject(PersonalizationConfig), ɵɵinject(OccEndpointsService), ɵɵinject(WindowRef), ɵɵinject(PLATFORM_ID)); }, token: OccPersonalizationTimeInterceptor, providedIn: "root" });
OccPersonalizationTimeInterceptor = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(3, Inject(PLATFORM_ID))
], OccPersonalizationTimeInterceptor);

const interceptors$3 = [
    {
        provide: HTTP_INTERCEPTORS,
        useExisting: OccPersonalizationIdInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useExisting: OccPersonalizationTimeInterceptor,
        multi: true,
    },
];

var PersonalizationModule_1;
let PersonalizationModule = PersonalizationModule_1 = class PersonalizationModule {
    static forRoot() {
        return {
            ngModule: PersonalizationModule_1,
            providers: [
                provideDefaultConfig(defaultPersonalizationConfig),
                ...interceptors$3,
            ],
        };
    }
};
PersonalizationModule = PersonalizationModule_1 = __decorate([
    NgModule({
        providers: [{ provide: PersonalizationConfig, useExisting: Config }],
    })
], PersonalizationModule);

let PersonalizationContextService = class PersonalizationContextService {
    constructor(config, cmsService) {
        this.config = config;
        this.cmsService = cmsService;
    }
    getPersonalizationContext() {
        return this.cmsService.getCurrentPage().pipe(filter(Boolean), map((page) => page.slots[this.config.personalization.context.slotPosition]), filter(Boolean), map((slot) => slot.components.find((i) => i.uid === this.config.personalization.context.componentId)), filter(Boolean), map((component) => this.buildPersonalizationContext(component.properties.script.data)));
    }
    buildPersonalizationContext(data) {
        const context = JSON.parse(atob(data));
        context.actions.forEach((action) => {
            Object.keys(action).forEach((key) => {
                action[key] = atob(action[key]);
            });
        });
        for (let i = 0; i < context.segments.length; i++) {
            context.segments[i] = atob(context.segments[i]);
        }
        return context;
    }
};
PersonalizationContextService.ctorParameters = () => [
    { type: PersonalizationConfig },
    { type: CmsService }
];
PersonalizationContextService.ɵprov = ɵɵdefineInjectable({ factory: function PersonalizationContextService_Factory() { return new PersonalizationContextService(ɵɵinject(PersonalizationConfig), ɵɵinject(CmsService)); }, token: PersonalizationContextService, providedIn: "root" });
PersonalizationContextService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], PersonalizationContextService);

function getReducers$9() {
    return entityLoaderReducer(PROCESS_FEATURE);
}
const reducerToken$9 = new InjectionToken('ProcessReducers');
const reducerProvider$9 = {
    provide: reducerToken$9,
    useFactory: getReducers$9,
};

let ProcessStoreModule = class ProcessStoreModule {
};
ProcessStoreModule = __decorate([
    NgModule({
        imports: [StateModule, StoreModule.forFeature(PROCESS_FEATURE, reducerToken$9)],
        providers: [reducerProvider$9],
    })
], ProcessStoreModule);

var ProcessModule_1;
let ProcessModule = ProcessModule_1 = class ProcessModule {
    static forRoot() {
        return {
            ngModule: ProcessModule_1,
            providers: [],
        };
    }
};
ProcessModule = ProcessModule_1 = __decorate([
    NgModule({
        imports: [ProcessStoreModule],
    })
], ProcessModule);

let ProductConnector = class ProductConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    get(productCode, scope = '') {
        return this.adapter.load(productCode, scope);
    }
    getMany(products) {
        if (!this.adapter.loadMany) {
            return products.map((product) => (Object.assign(Object.assign({}, product), { data$: this.adapter.load(product.code, product.scope) })));
        }
        return this.adapter.loadMany(products);
    }
};
ProductConnector.ctorParameters = () => [
    { type: ProductAdapter }
];
ProductConnector.ɵprov = ɵɵdefineInjectable({ factory: function ProductConnector_Factory() { return new ProductConnector(ɵɵinject(ProductAdapter)); }, token: ProductConnector, providedIn: "root" });
ProductConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ProductConnector);

let ProductReferencesConnector = class ProductReferencesConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    get(productCode, referenceType, pageSize) {
        return this.adapter.load(productCode, referenceType, pageSize);
    }
};
ProductReferencesConnector.ctorParameters = () => [
    { type: ProductReferencesAdapter }
];
ProductReferencesConnector.ɵprov = ɵɵdefineInjectable({ factory: function ProductReferencesConnector_Factory() { return new ProductReferencesConnector(ɵɵinject(ProductReferencesAdapter)); }, token: ProductReferencesConnector, providedIn: "root" });
ProductReferencesConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ProductReferencesConnector);

let ProductReviewsConnector = class ProductReviewsConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    get(productCode, maxCount) {
        return this.adapter.load(productCode, maxCount);
    }
    add(productCode, review) {
        return this.adapter.post(productCode, review);
    }
};
ProductReviewsConnector.ctorParameters = () => [
    { type: ProductReviewsAdapter }
];
ProductReviewsConnector.ɵprov = ɵɵdefineInjectable({ factory: function ProductReviewsConnector_Factory() { return new ProductReviewsConnector(ɵɵinject(ProductReviewsAdapter)); }, token: ProductReviewsConnector, providedIn: "root" });
ProductReviewsConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ProductReviewsConnector);

let ProductSearchConnector = class ProductSearchConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    search(query, searchConfig) {
        return this.adapter.search(query, searchConfig);
    }
    getSuggestions(term, pageSize) {
        return this.adapter.loadSuggestions(term, pageSize);
    }
};
ProductSearchConnector.ctorParameters = () => [
    { type: ProductSearchAdapter }
];
ProductSearchConnector.ɵprov = ɵɵdefineInjectable({ factory: function ProductSearchConnector_Factory() { return new ProductSearchConnector(ɵɵinject(ProductSearchAdapter)); }, token: ProductSearchConnector, providedIn: "root" });
ProductSearchConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ProductSearchConnector);

const LOAD_PRODUCT_REFERENCES = '[Product] Load Product References Data';
const LOAD_PRODUCT_REFERENCES_FAIL = '[Product] Load Product References Data Fail';
const LOAD_PRODUCT_REFERENCES_SUCCESS = '[Product] Load Product References Data Success';
const CLEAN_PRODUCT_REFERENCES = '[Product] Clean Product References';
class LoadProductReferences {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REFERENCES;
    }
}
class LoadProductReferencesFail {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REFERENCES_FAIL;
    }
}
class LoadProductReferencesSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REFERENCES_SUCCESS;
    }
}
class CleanProductReferences {
    constructor() {
        this.type = CLEAN_PRODUCT_REFERENCES;
    }
}

const LOAD_PRODUCT_REVIEWS = '[Product] Load Product Reviews Data';
const LOAD_PRODUCT_REVIEWS_FAIL = '[Product] Load Product Reviews Data Fail';
const LOAD_PRODUCT_REVIEWS_SUCCESS = '[Product] Load Product Reviews Data Success';
const POST_PRODUCT_REVIEW = '[Product] Post Product Review';
const POST_PRODUCT_REVIEW_FAIL = '[Product] Post Product Review Fail';
const POST_PRODUCT_REVIEW_SUCCESS = '[Product] Post Product Review Success';
class LoadProductReviews {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REVIEWS;
    }
}
class LoadProductReviewsFail {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REVIEWS_FAIL;
    }
}
class LoadProductReviewsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REVIEWS_SUCCESS;
    }
}
class PostProductReview {
    constructor(payload) {
        this.payload = payload;
        this.type = POST_PRODUCT_REVIEW;
    }
}
class PostProductReviewFail {
    constructor(payload) {
        this.payload = payload;
        this.type = POST_PRODUCT_REVIEW_FAIL;
    }
}
class PostProductReviewSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = POST_PRODUCT_REVIEW_SUCCESS;
    }
}

const SEARCH_PRODUCTS = '[Product] Search Products';
const SEARCH_PRODUCTS_FAIL = '[Product] Search Products Fail';
const SEARCH_PRODUCTS_SUCCESS = '[Product] Search Products Success';
const GET_PRODUCT_SUGGESTIONS = '[Product] Get Product Suggestions';
const GET_PRODUCT_SUGGESTIONS_SUCCESS = '[Product] Get Product Suggestions Success';
const GET_PRODUCT_SUGGESTIONS_FAIL = '[Product] Get Product Suggestions Fail';
const CLEAR_PRODUCT_SEARCH_RESULT = '[Product] Clear Product Search Result';
class SearchProducts {
    constructor(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS;
    }
}
class SearchProductsFail {
    constructor(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS_FAIL;
    }
}
class SearchProductsSuccess {
    constructor(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS_SUCCESS;
    }
}
class GetProductSuggestions {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS;
    }
}
class GetProductSuggestionsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS_SUCCESS;
    }
}
class GetProductSuggestionsFail {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS_FAIL;
    }
}
class ClearProductSearchResult {
    constructor(payload = {
        clearPageResults: false,
        clearSearchboxResults: false,
    }) {
        this.payload = payload;
        this.type = CLEAR_PRODUCT_SEARCH_RESULT;
    }
}

const PRODUCT_FEATURE = 'product';
const PRODUCT_DETAIL_ENTITY = '[Product] Detail Entity';

var EntityScopedLoaderActions;
(function (EntityScopedLoaderActions) {
    function entityScopedLoadMeta(entityType, id, scope) {
        return Object.assign(Object.assign({}, entityLoadMeta(entityType, id)), { scope });
    }
    EntityScopedLoaderActions.entityScopedLoadMeta = entityScopedLoadMeta;
    function entityScopedFailMeta(entityType, id, scope, error) {
        return Object.assign(Object.assign({}, entityFailMeta(entityType, id, error)), { scope });
    }
    EntityScopedLoaderActions.entityScopedFailMeta = entityScopedFailMeta;
    function entityScopedSuccessMeta(entityType, id, scope) {
        return Object.assign(Object.assign({}, entitySuccessMeta(entityType, id)), { scope });
    }
    EntityScopedLoaderActions.entityScopedSuccessMeta = entityScopedSuccessMeta;
    function entityScopedResetMeta(entityType, id, scope) {
        return Object.assign(Object.assign({}, entityResetMeta(entityType, id)), { scope });
    }
    EntityScopedLoaderActions.entityScopedResetMeta = entityScopedResetMeta;
    class EntityScopedLoadAction {
        constructor(entityType, id, scope) {
            this.type = ENTITY_LOAD_ACTION;
            this.meta = entityScopedLoadMeta(entityType, id, scope);
        }
    }
    EntityScopedLoaderActions.EntityScopedLoadAction = EntityScopedLoadAction;
    class EntityScopedFailAction {
        constructor(entityType, id, scope, error) {
            this.type = ENTITY_FAIL_ACTION;
            this.meta = entityScopedFailMeta(entityType, id, scope, error);
        }
    }
    EntityScopedLoaderActions.EntityScopedFailAction = EntityScopedFailAction;
    class EntityScopedSuccessAction {
        constructor(entityType, id, scope, payload) {
            this.payload = payload;
            this.type = ENTITY_SUCCESS_ACTION;
            this.meta = entityScopedSuccessMeta(entityType, id, scope);
        }
    }
    EntityScopedLoaderActions.EntityScopedSuccessAction = EntityScopedSuccessAction;
    class EntityScopedResetAction {
        constructor(entityType, id, scope) {
            this.type = ENTITY_RESET_ACTION;
            this.meta = entityScopedResetMeta(entityType, id, scope);
        }
    }
    EntityScopedLoaderActions.EntityScopedResetAction = EntityScopedResetAction;
})(EntityScopedLoaderActions || (EntityScopedLoaderActions = {}));

const LOAD_PRODUCT = '[Product] Load Product Data';
const LOAD_PRODUCT_FAIL = '[Product] Load Product Data Fail';
const LOAD_PRODUCT_SUCCESS = '[Product] Load Product Data Success';
class LoadProduct extends EntityScopedLoaderActions.EntityScopedLoadAction {
    constructor(payload, scope = '') {
        super(PRODUCT_DETAIL_ENTITY, payload, scope);
        this.payload = payload;
        this.type = LOAD_PRODUCT;
    }
}
class LoadProductFail extends EntityScopedLoaderActions.EntityScopedFailAction {
    constructor(productCode, payload, scope = '') {
        super(PRODUCT_DETAIL_ENTITY, productCode, scope, payload);
        this.payload = payload;
        this.type = LOAD_PRODUCT_FAIL;
    }
}
class LoadProductSuccess extends EntityScopedLoaderActions.EntityScopedSuccessAction {
    constructor(payload, scope = '') {
        super(PRODUCT_DETAIL_ENTITY, payload.code, scope);
        this.payload = payload;
        this.type = LOAD_PRODUCT_SUCCESS;
    }
}



var productGroup_actions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    LOAD_PRODUCT_REFERENCES: LOAD_PRODUCT_REFERENCES,
    LOAD_PRODUCT_REFERENCES_FAIL: LOAD_PRODUCT_REFERENCES_FAIL,
    LOAD_PRODUCT_REFERENCES_SUCCESS: LOAD_PRODUCT_REFERENCES_SUCCESS,
    CLEAN_PRODUCT_REFERENCES: CLEAN_PRODUCT_REFERENCES,
    LoadProductReferences: LoadProductReferences,
    LoadProductReferencesFail: LoadProductReferencesFail,
    LoadProductReferencesSuccess: LoadProductReferencesSuccess,
    CleanProductReferences: CleanProductReferences,
    LOAD_PRODUCT_REVIEWS: LOAD_PRODUCT_REVIEWS,
    LOAD_PRODUCT_REVIEWS_FAIL: LOAD_PRODUCT_REVIEWS_FAIL,
    LOAD_PRODUCT_REVIEWS_SUCCESS: LOAD_PRODUCT_REVIEWS_SUCCESS,
    POST_PRODUCT_REVIEW: POST_PRODUCT_REVIEW,
    POST_PRODUCT_REVIEW_FAIL: POST_PRODUCT_REVIEW_FAIL,
    POST_PRODUCT_REVIEW_SUCCESS: POST_PRODUCT_REVIEW_SUCCESS,
    LoadProductReviews: LoadProductReviews,
    LoadProductReviewsFail: LoadProductReviewsFail,
    LoadProductReviewsSuccess: LoadProductReviewsSuccess,
    PostProductReview: PostProductReview,
    PostProductReviewFail: PostProductReviewFail,
    PostProductReviewSuccess: PostProductReviewSuccess,
    SEARCH_PRODUCTS: SEARCH_PRODUCTS,
    SEARCH_PRODUCTS_FAIL: SEARCH_PRODUCTS_FAIL,
    SEARCH_PRODUCTS_SUCCESS: SEARCH_PRODUCTS_SUCCESS,
    GET_PRODUCT_SUGGESTIONS: GET_PRODUCT_SUGGESTIONS,
    GET_PRODUCT_SUGGESTIONS_SUCCESS: GET_PRODUCT_SUGGESTIONS_SUCCESS,
    GET_PRODUCT_SUGGESTIONS_FAIL: GET_PRODUCT_SUGGESTIONS_FAIL,
    CLEAR_PRODUCT_SEARCH_RESULT: CLEAR_PRODUCT_SEARCH_RESULT,
    SearchProducts: SearchProducts,
    SearchProductsFail: SearchProductsFail,
    SearchProductsSuccess: SearchProductsSuccess,
    GetProductSuggestions: GetProductSuggestions,
    GetProductSuggestionsSuccess: GetProductSuggestionsSuccess,
    GetProductSuggestionsFail: GetProductSuggestionsFail,
    ClearProductSearchResult: ClearProductSearchResult,
    LOAD_PRODUCT: LOAD_PRODUCT,
    LOAD_PRODUCT_FAIL: LOAD_PRODUCT_FAIL,
    LOAD_PRODUCT_SUCCESS: LOAD_PRODUCT_SUCCESS,
    LoadProduct: LoadProduct,
    LoadProductFail: LoadProductFail,
    LoadProductSuccess: LoadProductSuccess
});

const getProductsState = createFeatureSelector(PRODUCT_FEATURE);

const ɵ0$E = (state) => state.references;
const getProductReferencesState = createSelector(getProductsState, ɵ0$E);
const getSelectedProductReferencesFactory = (productCode, referenceType) => {
    return createSelector(getProductReferencesState, (referenceTypeData) => {
        if (referenceTypeData.productCode === productCode) {
            if (!!referenceTypeData.list) {
                if (referenceType) {
                    return referenceTypeData.list.filter((item) => item.referenceType === referenceType);
                }
                return referenceTypeData.list;
            }
            else {
                return [];
            }
        }
    });
};

const ɵ0$F = (state) => state.reviews;
const getProductReviewsState = createSelector(getProductsState, ɵ0$F);
const getSelectedProductReviewsFactory = (productCode) => {
    return createSelector(getProductReviewsState, (reviewData) => {
        if (reviewData.productCode === productCode) {
            return reviewData.list;
        }
    });
};

const initialState$h = {
    results: {},
    suggestions: [],
    auxResults: {},
};
function reducer$h(state = initialState$h, action) {
    switch (action.type) {
        case SEARCH_PRODUCTS_SUCCESS: {
            const results = action.payload;
            const res = action.auxiliary ? { auxResults: results } : { results };
            return Object.assign(Object.assign({}, state), res);
        }
        case GET_PRODUCT_SUGGESTIONS_SUCCESS: {
            const suggestions = action.payload;
            return Object.assign(Object.assign({}, state), { suggestions });
        }
        case CLEAR_PRODUCT_SEARCH_RESULT: {
            return Object.assign(Object.assign({}, state), { results: action.payload.clearPageResults ? {} : state.results, suggestions: action.payload.clearSearchboxResults
                    ? []
                    : state.suggestions, auxResults: action.payload.clearSearchboxResults
                    ? {}
                    : state.auxResults });
        }
    }
    return state;
}
const getSearchResults = (state) => state.results;
const getAuxSearchResults = (state) => state.auxResults;
const getProductSuggestions = (state) => state.suggestions;

const ɵ0$G = (state) => state.search;
const getProductsSearchState = createSelector(getProductsState, ɵ0$G);
const getSearchResults$1 = createSelector(getProductsSearchState, getSearchResults);
const getAuxSearchResults$1 = createSelector(getProductsSearchState, getAuxSearchResults);
const getProductSuggestions$1 = createSelector(getProductsSearchState, getProductSuggestions);

const ɵ0$H = (state) => state.details;
const getProductState = createSelector(getProductsState, ɵ0$H);
const getSelectedProductsFactory = (codes) => {
    return createSelector(getProductState, (details) => {
        return codes
            .map((code) => details.entities[code] ? details.entities[code].value : undefined)
            .filter((product) => product !== undefined);
    });
};
const getSelectedProductStateFactory = (code, scope) => {
    return createSelector(getProductState, (details) => scope
        ? entityStateSelector(details, code)[scope] ||
            initialLoaderState
        : entityStateSelector(details, code));
};
const getSelectedProductFactory = (code, scope) => {
    return createSelector(getSelectedProductStateFactory(code, scope), (productState) => loaderValueSelector(productState));
};
const getSelectedProductLoadingFactory = (code, scope) => {
    return createSelector(getSelectedProductStateFactory(code, scope), (productState) => loaderLoadingSelector(productState));
};
const getSelectedProductSuccessFactory = (code, scope) => {
    return createSelector(getSelectedProductStateFactory(code, scope), (productState) => loaderSuccessSelector(productState));
};
const getSelectedProductErrorFactory = (code, scope) => {
    return createSelector(getSelectedProductStateFactory(code, scope), (productState) => loaderErrorSelector(productState));
};
const ɵ1$r = (details) => {
    return Object.keys(details.entities);
};
const getAllProductCodes = createSelector(getProductState, ɵ1$r);



var productGroup_selectors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getProductsState: getProductsState,
    getProductReferencesState: getProductReferencesState,
    getSelectedProductReferencesFactory: getSelectedProductReferencesFactory,
    ɵ0: ɵ0$E,
    getProductReviewsState: getProductReviewsState,
    getSelectedProductReviewsFactory: getSelectedProductReviewsFactory,
    getProductsSearchState: getProductsSearchState,
    getSearchResults: getSearchResults$1,
    getAuxSearchResults: getAuxSearchResults$1,
    getProductSuggestions: getProductSuggestions$1,
    getProductState: getProductState,
    getSelectedProductsFactory: getSelectedProductsFactory,
    getSelectedProductStateFactory: getSelectedProductStateFactory,
    getSelectedProductFactory: getSelectedProductFactory,
    getSelectedProductLoadingFactory: getSelectedProductLoadingFactory,
    getSelectedProductSuccessFactory: getSelectedProductSuccessFactory,
    getSelectedProductErrorFactory: getSelectedProductErrorFactory,
    getAllProductCodes: getAllProductCodes,
    ɵ1: ɵ1$r
});

let ProductReferenceService = class ProductReferenceService {
    constructor(store) {
        this.store = store;
    }
    get(productCode, referenceType, pageSize) {
        return this.store.pipe(select(getSelectedProductReferencesFactory(productCode, referenceType)), tap((references) => {
            if (references === undefined && productCode !== undefined) {
                this.store.dispatch(new LoadProductReferences({
                    productCode,
                    referenceType,
                    pageSize,
                }));
            }
        }));
    }
    cleanReferences() {
        this.store.dispatch(new CleanProductReferences());
    }
};
ProductReferenceService.ctorParameters = () => [
    { type: Store }
];
ProductReferenceService = __decorate([
    Injectable()
], ProductReferenceService);

let ProductReviewService = class ProductReviewService {
    constructor(store) {
        this.store = store;
    }
    getByProductCode(productCode) {
        return this.store.pipe(select(getSelectedProductReviewsFactory(productCode)), tap((reviews) => {
            if (reviews === undefined && productCode !== undefined) {
                this.store.dispatch(new LoadProductReviews(productCode));
            }
        }));
    }
    add(productCode, review) {
        this.store.dispatch(new PostProductReview({
            productCode: productCode,
            review,
        }));
    }
};
ProductReviewService.ctorParameters = () => [
    { type: Store }
];
ProductReviewService = __decorate([
    Injectable()
], ProductReviewService);

let ProductSearchService = class ProductSearchService {
    constructor(store) {
        this.store = store;
    }
    search(query, searchConfig) {
        this.store.dispatch(new SearchProducts({
            queryText: query,
            searchConfig: searchConfig,
        }));
    }
    getResults() {
        return this.store.pipe(select(getSearchResults$1));
    }
    clearResults() {
        this.store.dispatch(new ClearProductSearchResult({
            clearPageResults: true,
        }));
    }
};
ProductSearchService.ctorParameters = () => [
    { type: Store }
];
ProductSearchService = __decorate([
    Injectable()
], ProductSearchService);

let ProductLoadingService = class ProductLoadingService {
    constructor(store, loadingScopes, actions$, platformId) {
        this.store = store;
        this.loadingScopes = loadingScopes;
        this.actions$ = actions$;
        this.platformId = platformId;
        this.products = {};
    }
    get(productCode, scopes) {
        scopes = this.loadingScopes.expand('product', scopes);
        this.initProductScopes(productCode, scopes);
        return this.products[productCode][this.getScopesIndex(scopes)];
    }
    initProductScopes(productCode, scopes) {
        if (!this.products[productCode]) {
            this.products[productCode] = {};
        }
        for (const scope of scopes) {
            if (!this.products[productCode][scope]) {
                this.products[productCode][scope] = this.getProductForScope(productCode, scope);
            }
        }
        if (scopes.length > 1) {
            this.products[productCode][this.getScopesIndex(scopes)] = combineLatest(scopes.map((scope) => this.products[productCode][scope])).pipe(auditTime(0), map((productParts) => productParts.every(Boolean)
                ? deepMerge({}, ...productParts)
                : undefined), distinctUntilChanged());
        }
    }
    getScopesIndex(scopes) {
        return scopes.join('ɵ');
    }
    /**
     * Creates observable for providing specified product data for the scope
     *
     * @param productCode
     * @param scope
     */
    getProductForScope(productCode, scope) {
        const shouldLoad$ = this.store.pipe(select(getSelectedProductStateFactory(productCode, scope)), map((productState) => !productState.loading && !productState.success && !productState.error), distinctUntilChanged(), filter((x) => x));
        const isLoading$ = this.store.pipe(select(getSelectedProductLoadingFactory(productCode, scope)));
        const productLoadLogic$ = merge(shouldLoad$, ...this.getProductReloadTriggers(productCode, scope)).pipe(debounceTime(0), withLatestFrom(isLoading$), tap(([, isLoading]) => {
            if (!isLoading) {
                this.store.dispatch(new LoadProduct(productCode, scope));
            }
        }));
        const productData$ = this.store.pipe(select(getSelectedProductFactory(productCode, scope)));
        return using(() => productLoadLogic$.subscribe(), () => productData$).pipe(shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * Returns reload triggers for product per scope
     *
     * @param productCode
     * @param scope
     */
    getProductReloadTriggers(productCode, scope) {
        const triggers = [];
        // max age trigger add
        const maxAge = this.loadingScopes.getMaxAge('product', scope);
        if (maxAge && isPlatformBrowser(this.platformId)) {
            // we want to grab load product success and load product fail for this product and scope
            const loadFinish$ = this.actions$.pipe(filter((action) => (action.type === LOAD_PRODUCT_SUCCESS ||
                action.type === LOAD_PRODUCT_FAIL) &&
                action.meta.entityId === productCode &&
                action.meta.scope === scope));
            const loadStart$ = this.actions$.pipe(ofType(LOAD_PRODUCT), filter((action) => action.payload === productCode && action.meta.scope === scope));
            triggers.push(this.getMaxAgeTrigger(loadStart$, loadFinish$, maxAge));
        }
        return triggers;
    }
    /**
     * Generic method that returns stream triggering reload by maxAge
     *
     * Could be refactored to separate service in future to use in other
     * max age reload implementations
     *
     * @param loadStart$ Stream that emits on load start
     * @param loadFinish$ Stream that emits on load finish
     * @param maxAge max age
     */
    getMaxAgeTrigger(loadStart$, loadFinish$, maxAge, scheduler) {
        let timestamp = 0;
        const now = () => (scheduler ? scheduler.now() : Date.now());
        const timestamp$ = loadFinish$.pipe(tap(() => (timestamp = now())));
        const shouldReload$ = defer(() => {
            const age = now() - timestamp;
            const timestampRefresh$ = timestamp$.pipe(delay(maxAge, scheduler), mapTo(true), withdrawOn(loadStart$));
            if (age > maxAge) {
                // we should emit first value immediately
                return merge(of(true), timestampRefresh$);
            }
            else if (age === 0) {
                // edge case, we should emit max age timeout after next load success
                // could happen with artificial schedulers
                return timestampRefresh$;
            }
            else {
                // we should emit first value when age will expire
                return merge(of(true).pipe(delay(maxAge - age, scheduler)), timestampRefresh$);
            }
        });
        return shouldReload$;
    }
};
ProductLoadingService.ctorParameters = () => [
    { type: Store },
    { type: LoadingScopesService },
    { type: Actions },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
ProductLoadingService.ɵprov = ɵɵdefineInjectable({ factory: function ProductLoadingService_Factory() { return new ProductLoadingService(ɵɵinject(Store), ɵɵinject(LoadingScopesService), ɵɵinject(Actions), ɵɵinject(PLATFORM_ID)); }, token: ProductLoadingService, providedIn: "root" });
ProductLoadingService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(3, Inject(PLATFORM_ID))
], ProductLoadingService);

let ProductService = class ProductService {
    constructor(store, productLoading) {
        this.store = store;
        this.productLoading = productLoading;
    }
    /**
     * Returns the product observable. The product will be loaded
     * whenever there's no value observed.
     *
     * The underlying product loader ensures that the product is
     * only loaded once, even in case of parallel observers.
     *
     * You should provide product data scope you are interested in to not load all
     * the data if not needed. You can provide more than one scope.
     *
     * @param productCode Product code to load
     * @param scopes Scope or scopes of the product data
     */
    get(productCode, scopes = '') {
        return productCode
            ? this.productLoading.get(productCode, [].concat(scopes))
            : of(undefined);
    }
    /**
     * Returns boolean observable for product's loading state
     */
    isLoading(productCode, scope = '') {
        return this.store.pipe(select(getSelectedProductLoadingFactory(productCode, scope)));
    }
    /**
     * Returns boolean observable for product's load success state
     */
    isSuccess(productCode, scope = '') {
        return this.store.pipe(select(getSelectedProductSuccessFactory(productCode, scope)));
    }
    /**
     * Returns boolean observable for product's load error state
     */
    hasError(productCode, scope = '') {
        return this.store.pipe(select(getSelectedProductErrorFactory(productCode, scope)));
    }
    /**
     * Reloads the product. The product is loaded implicetly
     * whenever selected by the `get`, but in some cases an
     * explicit reload might be needed.
     */
    reload(productCode, scope = '') {
        this.store.dispatch(new LoadProduct(productCode, scope));
    }
};
ProductService.ctorParameters = () => [
    { type: Store },
    { type: ProductLoadingService }
];
ProductService = __decorate([
    Injectable()
], ProductService);

let SearchboxService = class SearchboxService extends ProductSearchService {
    /**
     * dispatch the search for the search box
     */
    search(query, searchConfig) {
        this.store.dispatch(new SearchProducts({
            queryText: query,
            searchConfig: searchConfig,
        }, true));
    }
    getResults() {
        return this.store.pipe(select(getAuxSearchResults$1));
    }
    /**
     * clears the products and suggestions
     */
    clearResults() {
        this.store.dispatch(new ClearProductSearchResult({
            clearSearchboxResults: true,
        }));
    }
    getSuggestionResults() {
        return this.store.pipe(select(getProductSuggestions$1));
    }
    searchSuggestions(query, searchConfig) {
        this.store.dispatch(new GetProductSuggestions({
            term: query,
            searchConfig: searchConfig,
        }));
    }
};
SearchboxService.ɵprov = ɵɵdefineInjectable({ factory: function SearchboxService_Factory() { return new SearchboxService(ɵɵinject(Store)); }, token: SearchboxService, providedIn: "root" });
SearchboxService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SearchboxService);

/**
 * Resolves the page data for the Product Listing Page.
 *
 * The page title, and breadcrumbs are resolved in this implementation only.
 */
let CategoryPageMetaResolver = class CategoryPageMetaResolver extends PageMetaResolver {
    constructor(productSearchService, cms, translation) {
        super();
        this.productSearchService = productSearchService;
        this.cms = cms;
        this.translation = translation;
        // reusable observable for search page data
        this.searchPage$ = this.cms.getCurrentPage().pipe(filter(Boolean), switchMap((page) => 
        // only the existence of a plp component tells us if products
        // are rendered or if this is an ordinary content page
        this.hasProductListComponent(page)
            ? this.productSearchService.getResults().pipe(filter(Boolean))
            : of(page)));
        this.pageType = PageType.CATEGORY_PAGE;
    }
    resolveTitle() {
        return this.searchPage$.pipe(filter((page) => !!page.pagination), switchMap((p) => {
            var _a;
            return this.translation.translate('pageMetaResolver.category.title', {
                count: p.pagination.totalResults,
                query: ((_a = p.breadcrumbs) === null || _a === void 0 ? void 0 : _a.length) ? p.breadcrumbs[0].facetValueName
                    : undefined,
            });
        }));
    }
    resolveBreadcrumbs() {
        return combineLatest([
            this.searchPage$.pipe(),
            this.translation.translate('common.home'),
        ]).pipe(map(([p, label]) => p.breadcrumbs
            ? this.resolveBreadcrumbData(p, label)
            : null));
    }
    resolveBreadcrumbData(page, label) {
        const breadcrumbs = [];
        breadcrumbs.push({ label: label, link: '/' });
        for (const br of page.breadcrumbs) {
            if (br.facetCode === 'category' || br.facetCode === 'allCategories') {
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
        return breadcrumbs;
    }
    hasProductListComponent(page) {
        return !!Object.keys(page.slots).find((key) => !!page.slots[key].components.find((comp) => comp.typeCode === 'CMSProductListComponent' ||
            comp.typeCode === 'ProductGridComponent'));
    }
};
CategoryPageMetaResolver.ctorParameters = () => [
    { type: ProductSearchService },
    { type: CmsService },
    { type: TranslationService }
];
CategoryPageMetaResolver.ɵprov = ɵɵdefineInjectable({ factory: function CategoryPageMetaResolver_Factory() { return new CategoryPageMetaResolver(ɵɵinject(ProductSearchService), ɵɵinject(CmsService), ɵɵinject(TranslationService)); }, token: CategoryPageMetaResolver, providedIn: "root" });
CategoryPageMetaResolver = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CategoryPageMetaResolver);

/**
 * Resolves page meta data for the search result page, in case it's used
 * to query coupons. This is done by adding a `couponcode` query parameter
 * to the search page route.
 *
 * The page resolves an alternative page title and breadcrumb.
 */
let CouponSearchPageResolver = class CouponSearchPageResolver extends PageMetaResolver {
    constructor(productSearchService, translation, authService, route, semanticPathService) {
        super();
        this.productSearchService = productSearchService;
        this.translation = translation;
        this.authService = authService;
        this.route = route;
        this.semanticPathService = semanticPathService;
        this.total$ = this.productSearchService.getResults().pipe(filter((data) => !!(data === null || data === void 0 ? void 0 : data.pagination)), map((results) => results.pagination.totalResults));
        this.pageType = PageType.CONTENT_PAGE;
        this.pageTemplate = 'SearchResultsListPageTemplate';
    }
    resolveBreadcrumbs() {
        return combineLatest([
            this.translation.translate('common.home'),
            this.translation.translate('myCoupons.myCoupons'),
            this.authService.isUserLoggedIn(),
        ]).pipe(map(([homeLabel, couponLabel, isLoggedIn]) => {
            const breadcrumbs = [];
            breadcrumbs.push({ label: homeLabel, link: '/' });
            if (isLoggedIn) {
                breadcrumbs.push({
                    label: couponLabel,
                    link: this.semanticPathService.transform({
                        cxRoute: 'coupons',
                    }),
                });
            }
            return breadcrumbs;
        }));
    }
    resolveTitle() {
        return this.total$.pipe(switchMap((total) => this.translation.translate('pageMetaResolver.search.findProductTitle', {
            count: total,
            coupon: this.couponCode,
        })));
    }
    getScore(page) {
        return super.getScore(page) + (this.couponCode ? 1 : -1);
    }
    get couponCode() {
        var _a, _b;
        return (_b = (_a = this.route.snapshot) === null || _a === void 0 ? void 0 : _a.queryParams) === null || _b === void 0 ? void 0 : _b.couponcode;
    }
};
CouponSearchPageResolver.ctorParameters = () => [
    { type: ProductSearchService },
    { type: TranslationService },
    { type: AuthService },
    { type: ActivatedRoute },
    { type: SemanticPathService }
];
CouponSearchPageResolver.ɵprov = ɵɵdefineInjectable({ factory: function CouponSearchPageResolver_Factory() { return new CouponSearchPageResolver(ɵɵinject(ProductSearchService), ɵɵinject(TranslationService), ɵɵinject(AuthService), ɵɵinject(ActivatedRoute), ɵɵinject(SemanticPathService)); }, token: CouponSearchPageResolver, providedIn: "root" });
CouponSearchPageResolver = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CouponSearchPageResolver);

/**
 * Resolves the page data for the Product Detail Page
 * based on the `PageType.PRODUCT_PAGE`.
 *
 * The page title, heading, description, breadcrumbs and
 * first GALLERY image are resolved if available in the data.
 */
let ProductPageMetaResolver = class ProductPageMetaResolver extends PageMetaResolver {
    constructor(routingService, productService, translation) {
        super();
        this.routingService = routingService;
        this.productService = productService;
        this.translation = translation;
        // reusable observable for product data based on the current page
        this.product$ = this.routingService.getRouterState().pipe(map((state) => state.state.params['productCode']), filter((code) => !!code), switchMap((code) => this.productService.get(code, ProductScope.DETAILS)), filter(Boolean));
        this.pageType = PageType.PRODUCT_PAGE;
    }
    /**
     * Resolves the page heading for the Product Detail Page.
     * The page heading is used in the UI (`<h1>`), where as the page
     * title is used by the browser and crawlers.
     */
    resolveHeading() {
        return this.product$.pipe(switchMap((p) => this.translation.translate('pageMetaResolver.product.heading', {
            heading: p.name,
        })));
    }
    /**
     * Resolves the page title for the Product Detail Page. The page title
     * is resolved with the product name, the first category and the manufactorer.
     * The page title used by the browser (history, tabs) and crawlers.
     */
    resolveTitle() {
        return this.product$.pipe(switchMap((p) => {
            let title = p.name;
            title += this.resolveFirstCategory(p);
            title += this.resolveManufacturer(p);
            return this.translation.translate('pageMetaResolver.product.title', {
                title: title,
            });
        }));
    }
    /**
     * Resolves the page description for the Product Detail Page. The description
     * is based on the `product.summary`.
     */
    resolveDescription() {
        return this.product$.pipe(switchMap((p) => this.translation.translate('pageMetaResolver.product.description', {
            description: p.summary,
        })));
    }
    /**
     * Resolves breadcrumbs for the Product Detail Page. The breadcrumbs are driven by
     * a static home page crum and a crumb for each category.
     */
    resolveBreadcrumbs() {
        return combineLatest([
            this.product$.pipe(),
            this.translation.translate('common.home'),
        ]).pipe(map(([p, label]) => {
            const breadcrumbs = [];
            breadcrumbs.push({ label: label, link: '/' });
            for (const { name, code, url } of p.categories || []) {
                breadcrumbs.push({
                    label: name || code,
                    link: url,
                });
            }
            return breadcrumbs;
        }));
    }
    /**
     * Resolves the main page image for the Product Detail Page. The product image
     * is based on the PRIMARY product image. The zoom format is used by default.
     */
    resolveImage() {
        return this.product$.pipe(map((p) => {
            var _a, _b;
            return ((_b = ((_a = p.images) === null || _a === void 0 ? void 0 : _a.PRIMARY).zoom) === null || _b === void 0 ? void 0 : _b.url) ? p.images.PRIMARY.zoom.url
                : null;
        }));
    }
    resolveFirstCategory(product) {
        var _a;
        let firstCategory;
        if (((_a = product.categories) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            firstCategory = product.categories[0];
        }
        return firstCategory
            ? ` | ${firstCategory.name || firstCategory.code}`
            : '';
    }
    resolveManufacturer(product) {
        return product.manufacturer ? ` | ${product.manufacturer}` : '';
    }
    /**
     * Resolves the robot information for the Product Detail Page. The
     * robot instruction defaults to FOLLOW and INDEX for all product pages,
     * regardless of whether they're purchasable or not.
     */
    resolveRobots() {
        return of([PageRobotsMeta.FOLLOW, PageRobotsMeta.INDEX]);
    }
};
ProductPageMetaResolver.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductService },
    { type: TranslationService }
];
ProductPageMetaResolver.ɵprov = ɵɵdefineInjectable({ factory: function ProductPageMetaResolver_Factory() { return new ProductPageMetaResolver(ɵɵinject(RoutingService), ɵɵinject(ProductService), ɵɵinject(TranslationService)); }, token: ProductPageMetaResolver, providedIn: "root" });
ProductPageMetaResolver = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ProductPageMetaResolver);

/**
 * Resolves the page data for the Search Result Page based on the
 * `PageType.CATEGORY_PAGE` and the `SearchResultsListPageTemplate` template.
 *
 * Only the page title is resolved in the standard implemenation.
 */
let SearchPageMetaResolver = class SearchPageMetaResolver extends PageMetaResolver {
    constructor(routingService, productSearchService, translation) {
        super();
        this.routingService = routingService;
        this.productSearchService = productSearchService;
        this.translation = translation;
        this.total$ = this.productSearchService.getResults().pipe(filter((data) => !!(data === null || data === void 0 ? void 0 : data.pagination)), map((results) => results.pagination.totalResults));
        this.query$ = this.routingService
            .getRouterState()
            .pipe(map((state) => state.state.params['query']));
        this.pageType = PageType.CONTENT_PAGE;
        this.pageTemplate = 'SearchResultsListPageTemplate';
    }
    resolveTitle() {
        const sources = [this.total$, this.query$];
        return combineLatest(sources).pipe(switchMap(([t, q]) => this.translation.translate('pageMetaResolver.search.title', {
            count: t,
            query: q,
        })));
    }
};
SearchPageMetaResolver.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductSearchService },
    { type: TranslationService }
];
SearchPageMetaResolver.ɵprov = ɵɵdefineInjectable({ factory: function SearchPageMetaResolver_Factory() { return new SearchPageMetaResolver(ɵɵinject(RoutingService), ɵɵinject(ProductSearchService), ɵɵinject(TranslationService)); }, token: SearchPageMetaResolver, providedIn: "root" });
SearchPageMetaResolver = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SearchPageMetaResolver);

let ProductReferencesEffects = class ProductReferencesEffects {
    constructor(actions$, productReferencesConnector) {
        this.actions$ = actions$;
        this.productReferencesConnector = productReferencesConnector;
        this.loadProductReferences$ = this.actions$.pipe(ofType(LOAD_PRODUCT_REFERENCES), map((action) => action.payload), mergeMap((payload) => {
            return this.productReferencesConnector
                .get(payload.productCode, payload.referenceType, payload.pageSize)
                .pipe(map((data) => {
                return new LoadProductReferencesSuccess({
                    productCode: payload.productCode,
                    list: data,
                });
            }), catchError((_error) => of(new LoadProductReferencesFail({
                message: payload.productCode,
            }))));
        }));
    }
};
ProductReferencesEffects.ctorParameters = () => [
    { type: Actions },
    { type: ProductReferencesConnector }
];
__decorate([
    Effect()
], ProductReferencesEffects.prototype, "loadProductReferences$", void 0);
ProductReferencesEffects = __decorate([
    Injectable()
], ProductReferencesEffects);

let ProductReviewsEffects = class ProductReviewsEffects {
    constructor(actions$, productReviewsConnector, globalMessageService) {
        this.actions$ = actions$;
        this.productReviewsConnector = productReviewsConnector;
        this.globalMessageService = globalMessageService;
        this.loadProductReviews$ = this.actions$.pipe(ofType(LOAD_PRODUCT_REVIEWS), map((action) => action.payload), mergeMap((productCode) => {
            return this.productReviewsConnector.get(productCode).pipe(map((data) => {
                return new LoadProductReviewsSuccess({
                    productCode,
                    list: data,
                });
            }), catchError((_error) => of(new LoadProductReviewsFail({
                message: productCode,
            }))));
        }));
        this.postProductReview = this.actions$.pipe(ofType(POST_PRODUCT_REVIEW), map((action) => action.payload), mergeMap((payload) => {
            return this.productReviewsConnector
                .add(payload.productCode, payload.review)
                .pipe(map((reviewResponse) => {
                return new PostProductReviewSuccess(reviewResponse);
            }), catchError((_error) => of(new PostProductReviewFail(payload.productCode))));
        }));
        this.showGlobalMessageOnPostProductReviewSuccess$ = this.actions$.pipe(ofType(POST_PRODUCT_REVIEW_SUCCESS), tap(() => {
            this.globalMessageService.add({ key: 'productReview.thankYouForReview' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }));
    }
};
ProductReviewsEffects.ctorParameters = () => [
    { type: Actions },
    { type: ProductReviewsConnector },
    { type: GlobalMessageService }
];
__decorate([
    Effect()
], ProductReviewsEffects.prototype, "loadProductReviews$", void 0);
__decorate([
    Effect()
], ProductReviewsEffects.prototype, "postProductReview", void 0);
__decorate([
    Effect({ dispatch: false })
], ProductReviewsEffects.prototype, "showGlobalMessageOnPostProductReviewSuccess$", void 0);
ProductReviewsEffects = __decorate([
    Injectable()
], ProductReviewsEffects);

let ProductsSearchEffects = class ProductsSearchEffects {
    constructor(actions$, productSearchConnector) {
        this.actions$ = actions$;
        this.productSearchConnector = productSearchConnector;
        this.searchProducts$ = this.actions$.pipe(ofType(SEARCH_PRODUCTS), groupBy((action) => action.auxiliary), mergeMap((group) => group.pipe(switchMap((action) => {
            return this.productSearchConnector
                .search(action.payload.queryText, action.payload.searchConfig)
                .pipe(map((data) => {
                return new SearchProductsSuccess(data, action.auxiliary);
            }), catchError((error) => of(new SearchProductsFail(makeErrorSerializable(error), action.auxiliary))));
        }))));
        this.getProductSuggestions$ = this.actions$.pipe(ofType(GET_PRODUCT_SUGGESTIONS), map((action) => action.payload), switchMap((payload) => {
            return this.productSearchConnector
                .getSuggestions(payload.term, payload.searchConfig.pageSize)
                .pipe(map((suggestions) => {
                if (suggestions === undefined) {
                    return new GetProductSuggestionsSuccess([]);
                }
                return new GetProductSuggestionsSuccess(suggestions);
            }), catchError((error) => of(new GetProductSuggestionsFail(makeErrorSerializable(error)))));
        }));
    }
};
ProductsSearchEffects.ctorParameters = () => [
    { type: Actions },
    { type: ProductSearchConnector }
];
__decorate([
    Effect()
], ProductsSearchEffects.prototype, "searchProducts$", void 0);
__decorate([
    Effect()
], ProductsSearchEffects.prototype, "getProductSuggestions$", void 0);
ProductsSearchEffects = __decorate([
    Injectable()
], ProductsSearchEffects);

let ProductEffects = class ProductEffects {
    constructor(actions$, productConnector) {
        this.actions$ = actions$;
        this.productConnector = productConnector;
        // we want to cancel all ongoing requests when currency or language changes,
        this.contextChange$ = this.actions$.pipe(ofType(CURRENCY_CHANGE, LANGUAGE_CHANGE));
        this.loadProduct$ = createEffect(() => ({ scheduler, debounce = 0 } = {}) => this.actions$.pipe(ofType(LOAD_PRODUCT), map((action) => ({
            code: action.payload,
            scope: action.meta.scope,
        })), 
        // we are grouping all load actions that happens at the same time
        // to optimize loading and pass them all to productConnector.getMany
        bufferDebounceTime(debounce, scheduler), mergeMap((products) => merge(...this.productConnector
            .getMany(products)
            .map(this.productLoadEffect))), withdrawOn(this.contextChange$)));
    }
    productLoadEffect(productLoad) {
        return productLoad.data$.pipe(map((data) => new LoadProductSuccess(Object.assign({ code: productLoad.code }, data), productLoad.scope)), catchError((error) => {
            return of(new LoadProductFail(productLoad.code, makeErrorSerializable(error), productLoad.scope));
        }));
    }
};
ProductEffects.ctorParameters = () => [
    { type: Actions },
    { type: ProductConnector }
];
ProductEffects = __decorate([
    Injectable()
], ProductEffects);

const effects$9 = [
    ProductsSearchEffects,
    ProductEffects,
    ProductReviewsEffects,
    ProductReferencesEffects,
];

const initialState$i = {
    productCode: '',
    list: [],
};
function reducer$i(state = initialState$i, action) {
    switch (action.type) {
        case LOAD_PRODUCT_REFERENCES_SUCCESS: {
            const productCode = action.payload.productCode;
            const list = action.payload.list;
            return Object.assign(Object.assign({}, state), { list: [...state.list, ...(list ? list : [])].reduce((productReferences, productReference) => {
                    if (!productReferences.some((obj) => obj.referenceType === productReference.referenceType &&
                        obj.target.code === productReference.target.code)) {
                        productReferences.push(productReference);
                    }
                    return productReferences;
                }, []), productCode });
        }
        case CLEAN_PRODUCT_REFERENCES: {
            return initialState$i;
        }
    }
    return state;
}
const getProductReferenceList = (state) => state.list;
const getProductReferenceProductCode = (state) => state.productCode;

const initialState$j = {
    productCode: '',
    list: [],
};
function reducer$j(state = initialState$j, action) {
    switch (action.type) {
        case LOAD_PRODUCT_REVIEWS_SUCCESS: {
            const productCode = action.payload.productCode;
            const list = action.payload.list;
            return Object.assign(Object.assign({}, state), { productCode,
                list });
        }
    }
    return state;
}
const getReviewList = (state) => state.list;
const getReviewProductCode = (state) => state.productCode;

/**
 * Higher order reducer designed to add scope support for loader reducer
 *
 * For backward compatibility, we accommodate scopes alongside current
 * loading/error/success/value flags, thus those names can't be used as scope
 * names.
 *
 * TODO: Improve, issue #5445
 *
 * @param entityType
 * @param reducer
 */
function scopedLoaderReducer(entityType, reducer) {
    const loader = loaderReducer(entityType, reducer);
    return (state = initialLoaderState, action) => {
        if (action &&
            action.meta &&
            action.meta.entityType === entityType &&
            action.meta.scope) {
            return Object.assign(Object.assign({}, state), { [action.meta.scope]: loader(state[action.meta.scope], action) });
        }
        else {
            return loader(state, action);
        }
    };
}

/**
 * Higher order reducer that wraps scopedLoaderReducer and EntityReducer enhancing
 * single state reducer to support multiple entities with generic loading flags and scopes
 */
function entityScopedLoaderReducer(entityType, reducer) {
    return entityReducer(entityType, scopedLoaderReducer(entityType, reducer));
}

function getReducers$a() {
    return {
        search: reducer$h,
        details: entityScopedLoaderReducer(PRODUCT_DETAIL_ENTITY),
        reviews: reducer$j,
        references: reducer$i,
    };
}
const reducerToken$a = new InjectionToken('ProductReducers');
const reducerProvider$a = {
    provide: reducerToken$a,
    useFactory: getReducers$a,
};
function clearProductsState(reducer) {
    return function (state, action) {
        if (action.type === CURRENCY_CHANGE ||
            action.type === LANGUAGE_CHANGE) {
            state = undefined;
        }
        return reducer(state, action);
    };
}
const metaReducers$5 = [clearProductsState];

function productStoreConfigFactory() {
    // if we want to reuse PRODUCT_FEATURE const in config, we have to use factory instead of plain object
    const config = {
        state: {
            ssrTransfer: {
                keys: { [PRODUCT_FEATURE]: StateTransferType.TRANSFER_STATE },
            },
        },
    };
    return config;
}
let ProductStoreModule = class ProductStoreModule {
};
ProductStoreModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            HttpClientModule,
            StoreModule.forFeature(PRODUCT_FEATURE, reducerToken$a, { metaReducers: metaReducers$5 }),
            EffectsModule.forFeature(effects$9),
        ],
        providers: [
            provideDefaultConfigFactory(productStoreConfigFactory),
            reducerProvider$a,
        ],
    })
], ProductStoreModule);

var ProductModule_1;
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
    {
        provide: PageMetaResolver,
        useExisting: CouponSearchPageResolver,
        multi: true,
    },
];
let ProductModule = ProductModule_1 = class ProductModule {
    static forRoot() {
        return {
            ngModule: ProductModule_1,
            providers: [
                ProductService,
                ProductSearchService,
                ProductReviewService,
                ProductReferenceService,
                ...pageTitleResolvers,
            ],
        };
    }
};
ProductModule = ProductModule_1 = __decorate([
    NgModule({
        imports: [ProductStoreModule],
    })
], ProductModule);

let SmartEditService = class SmartEditService {
    constructor(cmsService, routingService, baseSiteService, zone, winRef) {
        this.cmsService = cmsService;
        this.routingService = routingService;
        this.baseSiteService = baseSiteService;
        this.zone = zone;
        this.winRef = winRef;
        this.isPreviewPage = false;
        this.getCmsTicket();
        if (winRef.nativeWindow) {
            const window = winRef.nativeWindow;
            // rerender components and slots after editing
            window.smartedit = window.smartedit || {};
            window.smartedit.renderComponent = (componentId, componentType, parentId) => {
                return this.renderComponent(componentId, componentType, parentId);
            };
            // reprocess page
            window.smartedit.reprocessPage = this.reprocessPage;
        }
    }
    get cmsTicketId() {
        return this._cmsTicketId;
    }
    getCmsTicket() {
        combineLatest([
            this.cmsService.getCurrentPage(),
            this.routingService.getRouterState(),
        ])
            .pipe(takeWhile(([cmsPage]) => cmsPage === undefined), filter(([, routerState]) => {
            if (routerState.nextState && !this._cmsTicketId) {
                this._cmsTicketId =
                    routerState.nextState.queryParams['cmsTicketId'];
                if (this._cmsTicketId) {
                    return true;
                }
            }
            return false;
        }), take(1))
            .subscribe(() => {
            this.cmsService.launchInSmartEdit = true;
            this.getDefaultPreviewCode();
        });
    }
    getDefaultPreviewCode() {
        this.baseSiteService
            .getBaseSiteData()
            .pipe(filter((site) => Object.keys(site).length !== 0), take(1))
            .subscribe((site) => {
            this.defaultPreviewCategoryCode = site.defaultPreviewCategoryCode;
            this.defaultPreviewProductCode = site.defaultPreviewProductCode;
            this.addPageContract();
        });
    }
    addPageContract() {
        this.cmsService.getCurrentPage().subscribe((cmsPage) => {
            if (cmsPage && this._cmsTicketId) {
                this._currentPageId = cmsPage.pageId;
                // before adding contract to page, we need redirect to that page
                this.goToPreviewPage(cmsPage);
                // remove old page contract
                const previousContract = [];
                Array.from(this.winRef.document.body.classList).forEach((attr) => previousContract.push(attr));
                previousContract.forEach((attr) => this.winRef.document.body.classList.remove(attr));
                // add new page contract
                if (cmsPage.properties && cmsPage.properties.smartedit) {
                    const seClasses = cmsPage.properties.smartedit.classes.split(' ');
                    seClasses.forEach((classItem) => {
                        this.winRef.document.body.classList.add(classItem);
                    });
                }
            }
        });
    }
    goToPreviewPage(cmsPage) {
        // only the first page is the smartedit preview page
        if (!this.isPreviewPage) {
            this.isPreviewPage = true;
            if (cmsPage.type === PageType.PRODUCT_PAGE &&
                this.defaultPreviewProductCode) {
                this.routingService.go({
                    cxRoute: 'product',
                    params: { code: this.defaultPreviewProductCode, name: '' },
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
    renderComponent(componentId, componentType, parentId) {
        if (componentId) {
            this.zone.run(() => {
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
            });
        }
        return true;
    }
    reprocessPage() {
        // TODO: reprocess page API
    }
};
SmartEditService.ctorParameters = () => [
    { type: CmsService },
    { type: RoutingService },
    { type: BaseSiteService },
    { type: NgZone },
    { type: WindowRef }
];
SmartEditService.ɵprov = ɵɵdefineInjectable({ factory: function SmartEditService_Factory() { return new SmartEditService(ɵɵinject(CmsService), ɵɵinject(RoutingService), ɵɵinject(BaseSiteService), ɵɵinject(NgZone), ɵɵinject(WindowRef)); }, token: SmartEditService, providedIn: "root" });
SmartEditService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SmartEditService);

let CmsTicketInterceptor = class CmsTicketInterceptor {
    constructor(service) {
        this.service = service;
    }
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
};
CmsTicketInterceptor.ctorParameters = () => [
    { type: SmartEditService }
];
CmsTicketInterceptor.ɵprov = ɵɵdefineInjectable({ factory: function CmsTicketInterceptor_Factory() { return new CmsTicketInterceptor(ɵɵinject(SmartEditService)); }, token: CmsTicketInterceptor, providedIn: "root" });
CmsTicketInterceptor = __decorate([
    Injectable({ providedIn: 'root' })
], CmsTicketInterceptor);

const interceptors$4 = [
    {
        provide: HTTP_INTERCEPTORS,
        useExisting: CmsTicketInterceptor,
        multi: true,
    },
];

var SmartEditModule_1;
let SmartEditModule = SmartEditModule_1 = class SmartEditModule {
    static forRoot() {
        return {
            ngModule: SmartEditModule_1,
            providers: [...interceptors$4],
        };
    }
};
SmartEditModule = SmartEditModule_1 = __decorate([
    NgModule({})
], SmartEditModule);

/**
 * The wrapper over the standard ngExpressEngine, that provides tokens for Spartacus
 * @param ngExpressEngine
 */
class NgExpressEngineDecorator {
    /**
     * Returns the higher order ngExpressEngine with provided tokens for Spartacus
     *
     * @param ngExpressEngine
     */
    static get(ngExpressEngine) {
        const result = function cxNgExpressEngine(setupOptions) {
            return (filePath, options, callback) => {
                const engineInstance = ngExpressEngine(Object.assign(Object.assign({}, setupOptions), { providers: [
                        ...getServerRequestProviders(options),
                        ...(setupOptions.providers || []),
                    ] }));
                return engineInstance(filePath, options, callback);
            };
        };
        return result;
    }
}
/**
 * Returns Spartacus' providers to be passed to the Angular express engine (in SSR)
 *
 * @param options
 */
function getServerRequestProviders(options) {
    return [
        {
            provide: SERVER_REQUEST_URL,
            useValue: getRequestUrl(options.req),
        },
        {
            provide: SERVER_REQUEST_ORIGIN,
            useValue: getRequestOrigin(options.req),
        },
    ];
}
function getRequestUrl(req) {
    return getRequestOrigin(req) + req.originalUrl;
}
function getRequestOrigin(req) {
    return req.protocol + '://' + req.get('host');
}

class StoreFinderConfig {
}

const STORE_FINDER_FEATURE = 'stores';
const STORE_FINDER_DATA = '[StoreFinder] Store Finder Data';

const FIND_STORES_ON_HOLD = '[StoreFinder] On Hold';
const FIND_STORES = '[StoreFinder] Find Stores';
const FIND_STORES_FAIL = '[StoreFinder] Find Stores Fail';
const FIND_STORES_SUCCESS = '[StoreFinder] Find Stores Success';
const FIND_STORE_BY_ID = '[StoreFinder] Find a Store by Id';
const FIND_STORE_BY_ID_FAIL = '[StoreFinder] Find a Store by Id Fail';
const FIND_STORE_BY_ID_SUCCESS = '[StoreFinder] Find a Store by Id Success';
class FindStoresOnHold extends LoaderLoadAction {
    constructor() {
        super(STORE_FINDER_DATA);
        this.type = FIND_STORES_ON_HOLD;
    }
}
class FindStores extends LoaderLoadAction {
    constructor(payload) {
        super(STORE_FINDER_DATA);
        this.payload = payload;
        this.type = FIND_STORES;
    }
}
class FindStoresFail extends LoaderFailAction {
    constructor(payload) {
        super(STORE_FINDER_DATA, payload);
        this.payload = payload;
        this.type = FIND_STORES_FAIL;
    }
}
class FindStoresSuccess extends LoaderSuccessAction {
    constructor(payload) {
        super(STORE_FINDER_DATA);
        this.payload = payload;
        this.type = FIND_STORES_SUCCESS;
    }
}
class FindStoreById extends LoaderLoadAction {
    constructor(payload) {
        super(STORE_FINDER_DATA);
        this.payload = payload;
        this.type = FIND_STORE_BY_ID;
    }
}
class FindStoreByIdFail extends LoaderFailAction {
    constructor(payload) {
        super(STORE_FINDER_DATA, payload);
        this.payload = payload;
        this.type = FIND_STORE_BY_ID_FAIL;
    }
}
class FindStoreByIdSuccess extends LoaderSuccessAction {
    constructor(payload) {
        super(STORE_FINDER_DATA);
        this.payload = payload;
        this.type = FIND_STORE_BY_ID_SUCCESS;
    }
}

const VIEW_ALL_STORES = '[StoreFinder] View All Stores';
const VIEW_ALL_STORES_FAIL = '[StoreFinder] View All Stores Fail';
const VIEW_ALL_STORES_SUCCESS = '[StoreFinder] View All Stores Success';
class ViewAllStores extends LoaderLoadAction {
    constructor() {
        super(STORE_FINDER_DATA);
        this.type = VIEW_ALL_STORES;
    }
}
class ViewAllStoresFail extends LoaderFailAction {
    constructor(payload) {
        super(STORE_FINDER_DATA, payload);
        this.payload = payload;
        this.type = VIEW_ALL_STORES_FAIL;
    }
}
class ViewAllStoresSuccess extends LoaderSuccessAction {
    constructor(payload) {
        super(STORE_FINDER_DATA);
        this.payload = payload;
        this.type = VIEW_ALL_STORES_SUCCESS;
    }
}



var storeFinderGroup_actions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FIND_STORES_ON_HOLD: FIND_STORES_ON_HOLD,
    FIND_STORES: FIND_STORES,
    FIND_STORES_FAIL: FIND_STORES_FAIL,
    FIND_STORES_SUCCESS: FIND_STORES_SUCCESS,
    FIND_STORE_BY_ID: FIND_STORE_BY_ID,
    FIND_STORE_BY_ID_FAIL: FIND_STORE_BY_ID_FAIL,
    FIND_STORE_BY_ID_SUCCESS: FIND_STORE_BY_ID_SUCCESS,
    FindStoresOnHold: FindStoresOnHold,
    FindStores: FindStores,
    FindStoresFail: FindStoresFail,
    FindStoresSuccess: FindStoresSuccess,
    FindStoreById: FindStoreById,
    FindStoreByIdFail: FindStoreByIdFail,
    FindStoreByIdSuccess: FindStoreByIdSuccess,
    VIEW_ALL_STORES: VIEW_ALL_STORES,
    VIEW_ALL_STORES_FAIL: VIEW_ALL_STORES_FAIL,
    VIEW_ALL_STORES_SUCCESS: VIEW_ALL_STORES_SUCCESS,
    ViewAllStores: ViewAllStores,
    ViewAllStoresFail: ViewAllStoresFail,
    ViewAllStoresSuccess: ViewAllStoresSuccess
});

const getStoreFinderState = createFeatureSelector(STORE_FINDER_FEATURE);

const ɵ0$I = (storesState) => storesState.findStores;
const getFindStoresState = createSelector(getStoreFinderState, ɵ0$I);
const ɵ1$s = (state) => loaderValueSelector(state);
const getFindStoresEntities = createSelector(getFindStoresState, ɵ1$s);
const ɵ2$j = (state) => loaderLoadingSelector(state);
const getStoresLoading = createSelector(getFindStoresState, ɵ2$j);

const ɵ0$J = (storesState) => storesState.viewAllStores;
const getViewAllStoresState = createSelector(getStoreFinderState, ɵ0$J);
const ɵ1$t = (state) => loaderValueSelector(state);
const getViewAllStoresEntities = createSelector(getViewAllStoresState, ɵ1$t);
const ɵ2$k = (state) => loaderLoadingSelector(state);
const getViewAllStoresLoading = createSelector(getViewAllStoresState, ɵ2$k);



var storeFinderGroup_selectors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getFindStoresState: getFindStoresState,
    getFindStoresEntities: getFindStoresEntities,
    getStoresLoading: getStoresLoading,
    ɵ0: ɵ0$I,
    ɵ1: ɵ1$s,
    ɵ2: ɵ2$j,
    getViewAllStoresState: getViewAllStoresState,
    getViewAllStoresEntities: getViewAllStoresEntities,
    getViewAllStoresLoading: getViewAllStoresLoading
});

let StoreFinderService = class StoreFinderService {
    constructor(store, winRef, globalMessageService, routingService) {
        this.store = store;
        this.winRef = winRef;
        this.globalMessageService = globalMessageService;
        this.routingService = routingService;
        this.geolocationWatchId = null;
    }
    /**
     * Returns boolean observable for store's loading state
     */
    getStoresLoading() {
        return this.store.pipe(select(getStoresLoading));
    }
    /**
     * Returns observable for store's entities
     */
    getFindStoresEntities() {
        return this.store.pipe(select(getFindStoresEntities));
    }
    /**
     * Returns boolean observable for view all store's loading state
     */
    getViewAllStoresLoading() {
        return this.store.pipe(select(getViewAllStoresLoading));
    }
    /**
     * Returns observable for view all store's entities
     */
    getViewAllStoresEntities() {
        return this.store.pipe(select(getViewAllStoresEntities));
    }
    /**
     * Store finding action functionality
     * @param queryText text query
     * @param searchConfig search configuration
     * @param longitudeLatitude longitude and latitude coordinates
     * @param countryIsoCode country ISO code
     * @param useMyLocation current location coordinates
     */
    findStoresAction(queryText, searchConfig, longitudeLatitude, countryIsoCode, useMyLocation) {
        if (useMyLocation && this.winRef.nativeWindow) {
            this.clearWatchGeolocation(new FindStoresOnHold());
            this.geolocationWatchId = this.winRef.nativeWindow.navigator.geolocation.watchPosition((pos) => {
                const position = {
                    longitude: pos.coords.longitude,
                    latitude: pos.coords.latitude,
                };
                this.clearWatchGeolocation(new FindStores({
                    queryText: queryText,
                    searchConfig: searchConfig,
                    longitudeLatitude: position,
                    countryIsoCode: countryIsoCode,
                }));
            }, () => {
                this.globalMessageService.add({ key: 'storeFinder.geolocationNotEnabled' }, GlobalMessageType.MSG_TYPE_ERROR);
                this.routingService.go(['/store-finder']);
            });
        }
        else {
            this.clearWatchGeolocation(new FindStores({
                queryText: queryText,
                searchConfig: searchConfig,
                longitudeLatitude: longitudeLatitude,
                countryIsoCode: countryIsoCode,
            }));
        }
    }
    /**
     * View all stores
     */
    viewAllStores() {
        this.clearWatchGeolocation(new ViewAllStores());
    }
    /**
     * View all stores by id
     * @param storeId store id
     */
    viewStoreById(storeId) {
        this.clearWatchGeolocation(new FindStoreById({ storeId }));
    }
    clearWatchGeolocation(callbackAction) {
        if (this.geolocationWatchId !== null) {
            this.winRef.nativeWindow.navigator.geolocation.clearWatch(this.geolocationWatchId);
            this.geolocationWatchId = null;
        }
        this.store.dispatch(callbackAction);
    }
};
StoreFinderService.ctorParameters = () => [
    { type: Store },
    { type: WindowRef },
    { type: GlobalMessageService },
    { type: RoutingService }
];
StoreFinderService = __decorate([
    Injectable()
], StoreFinderService);

let StoreDataService = class StoreDataService {
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
     * @param location store location
     */
    getStoreLatitude(location) {
        return location.geoPoint.latitude;
    }
    /**
     * Returns store longitude
     * @param location store location
     */
    getStoreLongitude(location) {
        return location.geoPoint.longitude;
    }
    /**
     * Returns store closing time
     * @param location store location
     * @param date date to compare
     */
    getStoreClosingTime(location, date) {
        const requestedDaySchedule = this.getSchedule(location, date);
        if (requestedDaySchedule) {
            if (requestedDaySchedule.closed && requestedDaySchedule.closed === true) {
                return 'closed';
            }
            if (requestedDaySchedule.closingTime) {
                return requestedDaySchedule.closingTime.formattedHour;
            }
        }
    }
    /**
     * Returns store opening time
     * @param location store location
     * @param date date to compare
     */
    getStoreOpeningTime(location, date) {
        const requestedDaySchedule = this.getSchedule(location, date);
        if (requestedDaySchedule) {
            if (requestedDaySchedule.closed && requestedDaySchedule.closed === true) {
                return 'closed';
            }
            if (requestedDaySchedule.openingTime) {
                return requestedDaySchedule.openingTime.formattedHour;
            }
        }
    }
    /**
     * Extracts schedule from the given location for the given date
     * @param location location
     * @param date date
     *
     * @returns payload describing the store's schedule for the given day.
     */
    getSchedule(location, date) {
        const weekday = this.weekDays[date.getDay()];
        return location.openingHours.weekDayOpeningList.find((weekDayOpeningListItem) => weekDayOpeningListItem.weekDay === weekday);
    }
};
StoreDataService = __decorate([
    Injectable()
], StoreDataService);

let ExternalJsFileLoader = class ExternalJsFileLoader {
    constructor(document) {
        this.document = document;
    }
    /**
     * Loads a javascript from an external URL
     * @param src URL for the script to be loaded
     * @param params additional parameters to be attached to the given URL
     * @param callback a function to be invoked after the script has been loaded
     */
    load(src, params, callback) {
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
     * @param params object containing parameters
     */
    parseParams(params) {
        let result = '';
        const keysArray = Object.keys(params);
        if (keysArray.length > 0) {
            result =
                '?' +
                    keysArray
                        .map((key) => encodeURI(key) + '=' + encodeURI(params[key]))
                        .join('&');
        }
        return result;
    }
};
ExternalJsFileLoader.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
ExternalJsFileLoader = __decorate([
    Injectable(),
    __param(0, Inject(DOCUMENT))
], ExternalJsFileLoader);

let GoogleMapRendererService = class GoogleMapRendererService {
    constructor(config, externalJsFileLoader, storeDataService) {
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
    renderMap(mapElement, locations, selectMarkerHandler) {
        if (this.googleMap === null) {
            this.externalJsFileLoader.load(this.config.googleMaps.apiUrl, { key: this.config.googleMaps.apiKey }, () => {
                this.drawMap(mapElement, locations, selectMarkerHandler);
            });
        }
        else {
            this.drawMap(mapElement, locations, selectMarkerHandler);
        }
    }
    /**
     * Centers the map to the given point
     * @param latitute latitude of the new center
     * @param longitude longitude of the new center
     */
    centerMap(latitute, longitude) {
        this.googleMap.panTo({ lat: latitute, lng: longitude });
        this.googleMap.setZoom(this.config.googleMaps.selectedMarkerScale);
    }
    /**
     * Defines and returns {@link google.maps.LatLng} representing a point where the map will be centered
     * @param locations list of locations
     */
    defineMapCenter(locations) {
        return new google.maps.LatLng(this.storeDataService.getStoreLatitude(locations[0]), this.storeDataService.getStoreLongitude(locations[0]));
    }
    /**
     * Creates google map inside if the given HTML element centered to the given point
     * @param mapElement {@link HTMLElement} inside of which the map will be created
     * @param mapCenter {@link google.maps.LatLng} the point where the map will be centered
     */
    initMap(mapElement, mapCenter) {
        const gestureOption = 'greedy';
        const mapProp = {
            center: mapCenter,
            zoom: this.config.googleMaps.scale,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            gestureHandling: gestureOption,
        };
        this.googleMap = new google.maps.Map(mapElement, mapProp);
    }
    /**
     * Erases the current map's markers and create a new one based on the given locations
     * @param locations array of locations to be displayed on the map
     * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
     */
    createMarkers(locations, selectMarkerHandler) {
        this.markers = [];
        locations.forEach((element, index) => {
            const marker = new google.maps.Marker({
                position: new google.maps.LatLng(this.storeDataService.getStoreLatitude(element), this.storeDataService.getStoreLongitude(element)),
                label: index + 1 + '',
            });
            this.markers.push(marker);
            marker.setMap(this.googleMap);
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
    }
    /**
     * Initialize and draw the map
     * @param mapElement {@link HTMLElement} inside of which the map will be drawn
     * @param locations array of locations to be displayed on the map
     * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
     */
    drawMap(mapElement, locations, selectMarkerHandler) {
        this.initMap(mapElement, this.defineMapCenter(locations));
        this.createMarkers(locations, selectMarkerHandler);
    }
};
GoogleMapRendererService.ctorParameters = () => [
    { type: StoreFinderConfig },
    { type: ExternalJsFileLoader },
    { type: StoreDataService }
];
GoogleMapRendererService = __decorate([
    Injectable()
], GoogleMapRendererService);

const defaultStoreFinderConfig = {
    googleMaps: {
        apiUrl: 'https://maps.googleapis.com/maps/api/js',
        apiKey: '',
        scale: 5,
        selectedMarkerScale: 17,
    },
};

function getReducers$b() {
    return {
        findStores: loaderReducer(STORE_FINDER_DATA),
        viewAllStores: loaderReducer(STORE_FINDER_DATA),
    };
}
const reducerToken$b = new InjectionToken('StoreFinderReducers');
const reducerProvider$b = {
    provide: reducerToken$b,
    useFactory: getReducers$b,
};
const metaReducers$6 = [];

let FindStoresEffect = class FindStoresEffect {
    constructor(actions$, storeFinderConnector) {
        this.actions$ = actions$;
        this.storeFinderConnector = storeFinderConnector;
        this.findStores$ = this.actions$.pipe(ofType(FIND_STORES), map((action) => action.payload), mergeMap((payload) => this.storeFinderConnector
            .search(payload.queryText, payload.searchConfig, payload.longitudeLatitude)
            .pipe(map((data) => {
            if (payload.countryIsoCode) {
                data.stores = data.stores.filter((store) => store.address.country.isocode === payload.countryIsoCode);
                data.stores.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
            }
            return new FindStoresSuccess(data);
        }), catchError((error) => of(new FindStoresFail(makeErrorSerializable(error)))))));
        this.findStoreById$ = this.actions$.pipe(ofType(FIND_STORE_BY_ID), map((action) => action.payload), switchMap((payload) => this.storeFinderConnector.get(payload.storeId).pipe(map((data) => new FindStoreByIdSuccess(data)), catchError((error) => of(new FindStoreByIdFail(makeErrorSerializable(error)))))));
    }
};
FindStoresEffect.ctorParameters = () => [
    { type: Actions },
    { type: StoreFinderConnector }
];
__decorate([
    Effect()
], FindStoresEffect.prototype, "findStores$", void 0);
__decorate([
    Effect()
], FindStoresEffect.prototype, "findStoreById$", void 0);
FindStoresEffect = __decorate([
    Injectable()
], FindStoresEffect);

let ViewAllStoresEffect = class ViewAllStoresEffect {
    constructor(actions$, storeFinderConnector) {
        this.actions$ = actions$;
        this.storeFinderConnector = storeFinderConnector;
        this.viewAllStores$ = this.actions$.pipe(ofType(VIEW_ALL_STORES), switchMap(() => {
            return this.storeFinderConnector.getCounts().pipe(map((data) => {
                data.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
                return new ViewAllStoresSuccess(data);
            }), catchError((error) => of(new ViewAllStoresFail(makeErrorSerializable(error)))));
        }));
    }
};
ViewAllStoresEffect.ctorParameters = () => [
    { type: Actions },
    { type: StoreFinderConnector }
];
__decorate([
    Effect()
], ViewAllStoresEffect.prototype, "viewAllStores$", void 0);
ViewAllStoresEffect = __decorate([
    Injectable()
], ViewAllStoresEffect);

const effects$a = [FindStoresEffect, ViewAllStoresEffect];

let StoreFinderStoreModule = class StoreFinderStoreModule {
};
StoreFinderStoreModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            HttpClientModule,
            StoreModule.forFeature(STORE_FINDER_FEATURE, reducerToken$b),
            EffectsModule.forFeature(effects$a),
        ],
        providers: [reducerProvider$b],
    })
], StoreFinderStoreModule);

let StoreFinderCoreModule = class StoreFinderCoreModule {
};
StoreFinderCoreModule = __decorate([
    NgModule({
        imports: [StoreFinderStoreModule],
        providers: [
            provideDefaultConfig(defaultStoreFinderConfig),
            StoreFinderService,
            StoreDataService,
            GoogleMapRendererService,
            ExternalJsFileLoader,
            { provide: StoreFinderConfig, useExisting: Config },
        ],
    })
], StoreFinderCoreModule);

let UserConnector = class UserConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    get(userId) {
        return this.adapter.load(userId);
    }
    update(username, user) {
        return this.adapter.update(username, user);
    }
    register(user) {
        return this.adapter.register(user);
    }
    registerGuest(guid, password) {
        return this.adapter.registerGuest(guid, password);
    }
    requestForgotPasswordEmail(userEmailAddress) {
        return this.adapter.requestForgotPasswordEmail(userEmailAddress);
    }
    resetPassword(token, newPassword) {
        return this.adapter.resetPassword(token, newPassword);
    }
    updateEmail(userId, currentPassword, newUserId) {
        return this.adapter.updateEmail(userId, currentPassword, newUserId);
    }
    updatePassword(userId, oldPassword, newPassword) {
        return this.adapter.updatePassword(userId, oldPassword, newPassword);
    }
    remove(userId) {
        return this.adapter.remove(userId);
    }
    getTitles() {
        return this.adapter.loadTitles();
    }
};
UserConnector.ctorParameters = () => [
    { type: UserAdapter }
];
UserConnector.ɵprov = ɵɵdefineInjectable({ factory: function UserConnector_Factory() { return new UserConnector(ɵɵinject(UserAdapter)); }, token: UserConnector, providedIn: "root" });
UserConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UserConnector);

let UserConsentConnector = class UserConsentConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    loadConsents(userId) {
        return this.adapter.loadConsents(userId);
    }
    giveConsent(userId, consentTemplateId, consentTemplateVersion) {
        return this.adapter.giveConsent(userId, consentTemplateId, consentTemplateVersion);
    }
    withdrawConsent(userId, consentCode) {
        return this.adapter.withdrawConsent(userId, consentCode);
    }
};
UserConsentConnector.ctorParameters = () => [
    { type: UserConsentAdapter }
];
UserConsentConnector.ɵprov = ɵɵdefineInjectable({ factory: function UserConsentConnector_Factory() { return new UserConsentConnector(ɵɵinject(UserConsentAdapter)); }, token: UserConsentConnector, providedIn: "root" });
UserConsentConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UserConsentConnector);

let UserPaymentConnector = class UserPaymentConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    getAll(userId) {
        return this.adapter.loadAll(userId);
    }
    delete(userId, paymentMethodID) {
        return this.adapter.delete(userId, paymentMethodID);
    }
    setDefault(userId, paymentMethodID) {
        return this.adapter.setDefault(userId, paymentMethodID);
    }
};
UserPaymentConnector.ctorParameters = () => [
    { type: UserPaymentAdapter }
];
UserPaymentConnector.ɵprov = ɵɵdefineInjectable({ factory: function UserPaymentConnector_Factory() { return new UserPaymentConnector(ɵɵinject(UserPaymentAdapter)); }, token: UserPaymentConnector, providedIn: "root" });
UserPaymentConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UserPaymentConnector);

let UserOrderConnector = class UserOrderConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    get(userId, orderCode) {
        return this.adapter.load(userId, orderCode);
    }
    getHistory(userId, pageSize, currentPage, sort) {
        return this.adapter.loadHistory(userId, pageSize, currentPage, sort);
    }
    getConsignmentTracking(orderCode, consignmentCode, userId) {
        return this.adapter.getConsignmentTracking(orderCode, consignmentCode, userId);
    }
    cancel(userId, orderCode, cancelRequestInput) {
        return this.adapter.cancel(userId, orderCode, cancelRequestInput);
    }
    return(userId, returnRequestInput) {
        return this.adapter.createReturnRequest(userId, returnRequestInput);
    }
    getReturnRequestDetail(userId, returnRequestCode) {
        return this.adapter.loadReturnRequestDetail(userId, returnRequestCode);
    }
    getReturnRequestList(userId, pageSize, currentPage, sort) {
        return this.adapter.loadReturnRequestList(userId, pageSize, currentPage, sort);
    }
    cancelReturnRequest(userId, returnRequestCode, returnRequestModification) {
        return this.adapter.cancelReturnRequest(userId, returnRequestCode, returnRequestModification);
    }
};
UserOrderConnector.ctorParameters = () => [
    { type: UserOrderAdapter }
];
UserOrderConnector.ɵprov = ɵɵdefineInjectable({ factory: function UserOrderConnector_Factory() { return new UserOrderConnector(ɵɵinject(UserOrderAdapter)); }, token: UserOrderConnector, providedIn: "root" });
UserOrderConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UserOrderConnector);

let CustomerCouponConnector = class CustomerCouponConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    getCustomerCoupons(userId, pageSize, currentPage, sort) {
        return this.adapter.getCustomerCoupons(userId, pageSize, currentPage, sort);
    }
    turnOnNotification(userId, couponCode) {
        return this.adapter.turnOnNotification(userId, couponCode);
    }
    turnOffNotification(userId, couponCode) {
        return this.adapter.turnOffNotification(userId, couponCode);
    }
    claimCustomerCoupon(userId, couponCode) {
        return this.adapter.claimCustomerCoupon(userId, couponCode);
    }
};
CustomerCouponConnector.ctorParameters = () => [
    { type: CustomerCouponAdapter }
];
CustomerCouponConnector.ɵprov = ɵɵdefineInjectable({ factory: function CustomerCouponConnector_Factory() { return new CustomerCouponConnector(ɵɵinject(CustomerCouponAdapter)); }, token: CustomerCouponConnector, providedIn: "root" });
CustomerCouponConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CustomerCouponConnector);

let UserInterestsConnector = class UserInterestsConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    getInterests(userId, pageSize, currentPage, sort, productCode, notificationType) {
        return this.adapter.getInterests(userId, pageSize, currentPage, sort, productCode, notificationType);
    }
    removeInterest(userId, item) {
        return this.adapter.removeInterest(userId, item);
    }
    addInterest(userId, productCode, notificationType) {
        return this.adapter.addInterest(userId, productCode, notificationType);
    }
};
UserInterestsConnector.ctorParameters = () => [
    { type: UserInterestsAdapter }
];
UserInterestsConnector.ɵprov = ɵɵdefineInjectable({ factory: function UserInterestsConnector_Factory() { return new UserInterestsConnector(ɵɵinject(UserInterestsAdapter)); }, token: UserInterestsConnector, providedIn: "root" });
UserInterestsConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UserInterestsConnector);

/**
 * Unified facade for both anonymous and registered user consents.
 */
let ConsentService = class ConsentService {
    constructor(anonymousConsentsService, userConsentService) {
        this.anonymousConsentsService = anonymousConsentsService;
        this.userConsentService = userConsentService;
    }
    /**
     * Returns either anonymous consent or registered consent as they are emmited.
     * @param templateCode for which to return either anonymous or registered consent.
     */
    getConsent(templateCode) {
        return merge(this.userConsentService.getConsent(templateCode), this.anonymousConsentsService.getConsent(templateCode));
    }
    /**
     * Checks if the `templateId`'s template has a given consent.
     * The method returns `false` if the consent doesn't exist or if it's withdrawn. Otherwise, `true` is returned.
     *
     * @param templateId of a template which's consent should be checked
     */
    checkConsentGivenByTemplateId(templateId) {
        return this.getConsent(templateId).pipe(map((consent) => {
            if (!consent) {
                return false;
            }
            return this.isAnonymousConsentType(consent)
                ? this.anonymousConsentsService.isConsentGiven(consent)
                : this.userConsentService.isConsentGiven(consent);
        }), distinctUntilChanged());
    }
    /**
     * Checks if the `templateId`'s template has a withdrawn consent.
     * The method returns `true` if the consent doesn't exist or if it's withdrawn. Otherwise, `false` is returned.
     *
     * @param templateId of a template which's consent should be checked
     */
    checkConsentWithdrawnByTemplateId(templateId) {
        return this.getConsent(templateId).pipe(map((consent) => {
            if (!consent) {
                return true;
            }
            return this.isAnonymousConsentType(consent)
                ? this.anonymousConsentsService.isConsentWithdrawn(consent)
                : this.userConsentService.isConsentWithdrawn(consent);
        }), distinctUntilChanged());
    }
    /**
     *
     * Checks the provided `consent`'s type and delegates to an appropriate method - `anonymousConsentsService.isConsentGiven(consent)` or `this.userConsentService.isConsentGiven`
     *
     * @param consent a consent to check
     */
    isConsentGiven(consent) {
        return this.isAnonymousConsentType(consent)
            ? this.anonymousConsentsService.isConsentGiven(consent)
            : this.userConsentService.isConsentGiven(consent);
    }
    /**
     *
     * Checks the provided `consent`'s type and delegates to an appropriate method - `anonymousConsentsService.isConsentWithdrawn(consent)` or `this.userConsentService.isConsentWithdrawn`
     *
     * @param consent a consent to check
     */
    isConsentWithdrawn(consent) {
        return this.isAnonymousConsentType(consent)
            ? this.anonymousConsentsService.isConsentWithdrawn(consent)
            : this.userConsentService.isConsentWithdrawn(consent);
    }
    /**
     * Returns `true` if the provided consent is of type `AnonymousConsent`. Otherwise, `false` is returned.
     */
    isAnonymousConsentType(consent) {
        if (!consent) {
            return false;
        }
        return consent.templateCode !== undefined;
    }
    /**
     * Returns `true` if the provided consent is of type `Consent`. Otherwise, `false` is returned.
     */
    isConsentType(consent) {
        if (!consent) {
            return false;
        }
        return consent.code !== undefined;
    }
};
ConsentService.ctorParameters = () => [
    { type: AnonymousConsentsService },
    { type: UserConsentService }
];
ConsentService.ɵprov = ɵɵdefineInjectable({ factory: function ConsentService_Factory() { return new ConsentService(ɵɵinject(AnonymousConsentsService), ɵɵinject(UserConsentService)); }, token: ConsentService, providedIn: "root" });
ConsentService = __decorate([
    Injectable({ providedIn: 'root' })
], ConsentService);

let UserAddressService = class UserAddressService {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Retrieves user's addresses
     */
    loadAddresses() {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new LoadUserAddresses(userId));
        });
    }
    /**
     * Adds user address
     * @param address a user address
     */
    addUserAddress(address) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new AddUserAddress({
                userId,
                address,
            }));
        });
    }
    /**
     * Sets user address as default
     * @param addressId a user address ID
     */
    setAddressAsDefault(addressId) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new UpdateUserAddress({
                userId,
                addressId,
                address: { defaultAddress: true },
            }));
        });
    }
    /**
     * Updates existing user address
     * @param addressId a user address ID
     * @param address a user address
     */
    updateUserAddress(addressId, address) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new UpdateUserAddress({
                userId,
                addressId,
                address,
            }));
        });
    }
    /**
     * Deletes existing user address
     * @param addressId a user address ID
     */
    deleteUserAddress(addressId) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new DeleteUserAddress({
                userId,
                addressId,
            }));
        });
    }
    /**
     * Returns addresses
     */
    getAddresses() {
        return this.store.pipe(select(getAddresses));
    }
    /**
     * Returns a loading flag for addresses
     */
    getAddressesLoading() {
        return this.store.pipe(select(getAddressesLoading));
    }
    getAddressesLoadedSuccess() {
        return this.store.pipe(select(getAddressesLoadedSuccess));
    }
    /**
     * Retrieves delivery countries
     */
    loadDeliveryCountries() {
        this.store.dispatch(new LoadDeliveryCountries());
    }
    /**
     * Returns all delivery countries
     */
    getDeliveryCountries() {
        return this.store.pipe(select(getAllDeliveryCountries));
    }
    /**
     * Returns a country based on the provided `isocode`
     * @param isocode an isocode for a country
     */
    getCountry(isocode) {
        return this.store.pipe(select(countrySelectorFactory(isocode)));
    }
    /**
     * Retrieves regions for specified country by `countryIsoCode`
     * @param countryIsoCode
     */
    loadRegions(countryIsoCode) {
        this.store.dispatch(new LoadRegions(countryIsoCode));
    }
    /**
     * Clear regions in store - useful when changing country
     */
    clearRegions() {
        this.store.dispatch(new ClearRegions());
    }
    /**
     * Returns all regions
     */
    getRegions(countryIsoCode) {
        return this.store.pipe(select(getRegionsDataAndLoading), map(({ regions, country, loading, loaded }) => {
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
        }));
    }
};
UserAddressService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
UserAddressService.ɵprov = ɵɵdefineInjectable({ factory: function UserAddressService_Factory() { return new UserAddressService(ɵɵinject(Store), ɵɵinject(AuthService)); }, token: UserAddressService, providedIn: "root" });
UserAddressService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UserAddressService);

let UserOrderService = class UserOrderService {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Returns an order's detail
     */
    getOrderDetails() {
        return this.store.pipe(select(getOrderDetails));
    }
    /**
     * Retrieves order's details
     *
     * @param orderCode an order code
     */
    loadOrderDetails(orderCode) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new LoadOrderDetails({
                userId,
                orderCode,
            }));
        });
    }
    /**
     * Clears order's details
     */
    clearOrderDetails() {
        this.store.dispatch(new ClearOrderDetails());
    }
    /**
     * Returns order history list
     */
    getOrderHistoryList(pageSize) {
        return this.store.pipe(select(getOrdersState), tap((orderListState) => {
            const attemptedLoad = orderListState.loading ||
                orderListState.success ||
                orderListState.error;
            if (!attemptedLoad) {
                this.loadOrderList(pageSize);
            }
        }), map((orderListState) => orderListState.value));
    }
    /**
     * Returns a loaded flag for order history list
     */
    getOrderHistoryListLoaded() {
        return this.store.pipe(select(getOrdersLoaded));
    }
    /**
     * Retrieves an order list
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    loadOrderList(pageSize, currentPage, sort) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new LoadUserOrders({
                userId,
                pageSize,
                currentPage,
                sort,
            }));
        });
    }
    /**
     * Cleaning order list
     */
    clearOrderList() {
        this.store.dispatch(new ClearUserOrders());
    }
    /**
     *  Returns a consignment tracking detail
     */
    getConsignmentTracking() {
        return this.store.pipe(select(getConsignmentTracking));
    }
    /**
     * Retrieves consignment tracking details
     * @param orderCode an order code
     * @param consignmentCode a consignment code
     */
    loadConsignmentTracking(orderCode, consignmentCode) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new LoadConsignmentTracking({
                userId,
                orderCode,
                consignmentCode,
            }));
        });
    }
    /**
     * Cleaning consignment tracking
     */
    clearConsignmentTracking() {
        this.store.dispatch(new ClearConsignmentTracking());
    }
    /*
     * Cancel an order
     */
    cancelOrder(orderCode, cancelRequestInput) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new CancelOrder({
                userId,
                orderCode,
                cancelRequestInput,
            }));
        });
    }
    /**
     * Returns the cancel order loading flag
     */
    getCancelOrderLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(CANCEL_ORDER_PROCESS_ID)));
    }
    /**
     * Returns the cancel order success flag
     */
    getCancelOrderSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(CANCEL_ORDER_PROCESS_ID)));
    }
    /**
     * Resets the cancel order process flags
     */
    resetCancelOrderProcessState() {
        return this.store.dispatch(new ResetCancelOrderProcess());
    }
};
UserOrderService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
UserOrderService.ɵprov = ɵɵdefineInjectable({ factory: function UserOrderService_Factory() { return new UserOrderService(ɵɵinject(Store), ɵɵinject(AuthService)); }, token: UserOrderService, providedIn: "root" });
UserOrderService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UserOrderService);

let CustomerCouponService = class CustomerCouponService {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Retrieves customer's coupons
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    loadCustomerCoupons(pageSize, currentPage, sort) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new LoadCustomerCoupons({
                userId,
                pageSize: pageSize,
                currentPage: currentPage,
                sort: sort,
            }));
        });
    }
    /**
     * Returns customer coupon search result
     * @param pageSize page size
     */
    getCustomerCoupons(pageSize) {
        return combineLatest([
            this.store.pipe(select(getCustomerCouponsState)),
            this.getClaimCustomerCouponResultLoading(),
        ]).pipe(filter(([, loading]) => !loading), tap(([customerCouponsState]) => {
            const attemptedLoad = customerCouponsState.loading ||
                customerCouponsState.success ||
                customerCouponsState.error;
            if (!attemptedLoad) {
                this.loadCustomerCoupons(pageSize);
            }
        }), map(([customerCouponsState]) => customerCouponsState.value));
    }
    /**
     * Returns a loaded flag for customer coupons
     */
    getCustomerCouponsLoaded() {
        return this.store.pipe(select(getCustomerCouponsLoaded));
    }
    /**
     * Returns a loading flag for customer coupons
     */
    getCustomerCouponsLoading() {
        return this.store.pipe(select(getCustomerCouponsLoading));
    }
    /**
     * Subscribe a CustomerCoupon Notification
     * @param couponCode a customer coupon code
     */
    subscribeCustomerCoupon(couponCode) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new SubscribeCustomerCoupon({
                userId,
                couponCode: couponCode,
            }));
        });
    }
    /**
     * Returns the subscribe customer coupon notification process loading flag
     */
    getSubscribeCustomerCouponResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    }
    /**
     * Returns the subscribe customer coupon notification process success flag
     */
    getSubscribeCustomerCouponResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    }
    /**
     * Returns the subscribe customer coupon notification process error flag
     */
    getSubscribeCustomerCouponResultError() {
        return this.store.pipe(select(getProcessErrorFactory(SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    }
    /**
     * Unsubscribe a CustomerCoupon Notification
     * @param couponCode a customer coupon code
     */
    unsubscribeCustomerCoupon(couponCode) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new UnsubscribeCustomerCoupon({
                userId,
                couponCode: couponCode,
            }));
        });
    }
    /**
     * Returns the unsubscribe customer coupon notification process loading flag
     */
    getUnsubscribeCustomerCouponResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    }
    /**
     * Returns the unsubscribe customer coupon notification process success flag
     */
    getUnsubscribeCustomerCouponResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    }
    /**
     * Returns the unsubscribe customer coupon notification process error flag
     */
    getUnsubscribeCustomerCouponResultError() {
        return this.store.pipe(select(getProcessErrorFactory(UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    }
    /**
     * Claim a CustomerCoupon
     * @param couponCode a customer coupon code
     */
    claimCustomerCoupon(couponCode) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new ClaimCustomerCoupon({
                userId,
                couponCode,
            }));
        });
    }
    /**
     * Returns the claim customer coupon notification process success flag
     */
    getClaimCustomerCouponResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(CLAIM_CUSTOMER_COUPON_PROCESS_ID)));
    }
    /**
     * Returns the claim customer coupon notification process loading flag
     */
    getClaimCustomerCouponResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(CLAIM_CUSTOMER_COUPON_PROCESS_ID)));
    }
};
CustomerCouponService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
CustomerCouponService.ɵprov = ɵɵdefineInjectable({ factory: function CustomerCouponService_Factory() { return new CustomerCouponService(ɵɵinject(Store), ɵɵinject(AuthService)); }, token: CustomerCouponService, providedIn: "root" });
CustomerCouponService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CustomerCouponService);

let UserPaymentService = class UserPaymentService {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Loads all user's payment methods.
     */
    loadPaymentMethods() {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new LoadUserPaymentMethods(userId));
        });
    }
    /**
     * Returns all user's payment methods
     */
    getPaymentMethods() {
        return this.store.pipe(select(getPaymentMethods));
    }
    /**
     * Returns a loading flag for payment methods
     */
    getPaymentMethodsLoading() {
        return this.store.pipe(select(getPaymentMethodsLoading));
    }
    getPaymentMethodsLoadedSuccess() {
        return this.store.pipe(select(getPaymentMethodsLoadedSuccess));
    }
    /**
     * Sets the payment as a default one
     * @param paymentMethodId a payment method ID
     */
    setPaymentMethodAsDefault(paymentMethodId) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new SetDefaultUserPaymentMethod({
                userId,
                paymentMethodId,
            }));
        });
    }
    /**
     * Deletes the payment method
     *
     * @param paymentMethodId a payment method ID
     */
    deletePaymentMethod(paymentMethodId) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new DeleteUserPaymentMethod({
                userId,
                paymentMethodId,
            }));
        });
    }
    /**
     * Returns all billing countries
     */
    getAllBillingCountries() {
        return this.store.pipe(select(getAllBillingCountries));
    }
    /**
     * Retrieves billing countries
     */
    loadBillingCountries() {
        this.store.dispatch(new LoadBillingCountries());
    }
};
UserPaymentService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
UserPaymentService.ɵprov = ɵɵdefineInjectable({ factory: function UserPaymentService_Factory() { return new UserPaymentService(ɵɵinject(Store), ɵɵinject(AuthService)); }, token: UserPaymentService, providedIn: "root" });
UserPaymentService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UserPaymentService);

let OrderReturnRequestService = class OrderReturnRequestService {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Create order return request
     * @param orderCode an order code
     * @param returnRequestInput order return request entry input
     */
    createOrderReturnRequest(returnRequestInput) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new CreateOrderReturnRequest({
                userId,
                returnRequestInput,
            }));
        });
    }
    /**
     * Return an order return request
     */
    getOrderReturnRequest() {
        return this.store.pipe(select(getOrderReturnRequest));
    }
    /**
     * Gets order return request list
     */
    getOrderReturnRequestList(pageSize) {
        return this.store.pipe(select(getOrderReturnRequestListState), tap((returnListState) => {
            const attemptedLoad = returnListState.loading ||
                returnListState.success ||
                returnListState.error;
            if (!attemptedLoad) {
                this.loadOrderReturnRequestList(pageSize);
            }
        }), map((returnListState) => returnListState.value));
    }
    /**
     * Loads order return request detail
     * @param returnRequestCode
     */
    loadOrderReturnRequestDetail(returnRequestCode) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new LoadOrderReturnRequest({
                userId,
                returnRequestCode,
            }));
        });
    }
    /**
     * Loads order return request list
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    loadOrderReturnRequestList(pageSize, currentPage, sort) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new LoadOrderReturnRequestList({
                userId,
                pageSize,
                currentPage,
                sort,
            }));
        });
    }
    /**
     * Cleaning order return request list
     */
    clearOrderReturnRequestList() {
        this.store.dispatch(new ClearOrderReturnRequestList());
    }
    /**
     * Get the order return request loading flag
     */
    getReturnRequestLoading() {
        return this.store.pipe(select(getOrderReturnRequestLoading));
    }
    /**
     * Get the order return request success flag
     */
    getReturnRequestSuccess() {
        return this.store.pipe(select(getOrderReturnRequestSuccess));
    }
    /**
     * Cleaning order return request details
     */
    clearOrderReturnRequestDetail() {
        this.store.dispatch(new ClearOrderReturnRequest());
    }
    /*
     * Cancel order return request
     */
    cancelOrderReturnRequest(returnRequestCode, returnRequestModification) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new CancelOrderReturnRequest({
                userId,
                returnRequestCode,
                returnRequestModification,
            }));
        });
    }
    /**
     * Returns the cancel return request loading flag
     */
    getCancelReturnRequestLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(CANCEL_RETURN_PROCESS_ID)));
    }
    /**
     * Returns the cancel return request success flag
     */
    getCancelReturnRequestSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(CANCEL_RETURN_PROCESS_ID)));
    }
    /**
     * Resets the cancel return request process flags
     */
    resetCancelReturnRequestProcessState() {
        return this.store.dispatch(new ResetCancelReturnProcess());
    }
};
OrderReturnRequestService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
OrderReturnRequestService.ɵprov = ɵɵdefineInjectable({ factory: function OrderReturnRequestService_Factory() { return new OrderReturnRequestService(ɵɵinject(Store), ɵɵinject(AuthService)); }, token: OrderReturnRequestService, providedIn: "root" });
OrderReturnRequestService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], OrderReturnRequestService);

let UserNotificationPreferenceService = class UserNotificationPreferenceService {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Returns all notification preferences.
     */
    getPreferences() {
        return this.store.pipe(select(getPreferences));
    }
    /**
     * Returns all enabled notification preferences.
     */
    getEnabledPreferences() {
        return this.store.pipe(select(getEnabledPreferences));
    }
    /**
     * Loads all notification preferences.
     */
    loadPreferences() {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new LoadNotificationPreferences(userId));
        });
    }
    /**
     * Clear all notification preferences.
     */
    clearPreferences() {
        this.store.dispatch(new ClearNotificationPreferences());
    }
    /**
     * Returns a loading flag for notification preferences.
     */
    getPreferencesLoading() {
        return this.store.pipe(select(getPreferencesLoading));
    }
    /**
     * Updating notification preferences.
     * @param preferences a preference list
     */
    updatePreferences(preferences) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new UpdateNotificationPreferences({
                userId,
                preferences: preferences,
            }));
        });
    }
    /**
     * Returns a loading flag for updating preferences.
     */
    getUpdatePreferencesResultLoading() {
        return this.store.select(getProcessLoadingFactory(UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID));
    }
    /**
     * Resets the update notification preferences process state. The state needs to be
     * reset after the process concludes, regardless if it's a success or an error.
     */
    resetNotificationPreferences() {
        this.store.dispatch(new ResetNotificationPreferences());
    }
};
UserNotificationPreferenceService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
UserNotificationPreferenceService.ɵprov = ɵɵdefineInjectable({ factory: function UserNotificationPreferenceService_Factory() { return new UserNotificationPreferenceService(ɵɵinject(Store), ɵɵinject(AuthService)); }, token: UserNotificationPreferenceService, providedIn: "root" });
UserNotificationPreferenceService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UserNotificationPreferenceService);

let UserInterestsService = class UserInterestsService {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Retrieves an product interest list
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    loadProductInterests(pageSize, currentPage, sort, productCode, notificationType) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new LoadProductInterests({
                userId,
                pageSize: pageSize,
                currentPage: currentPage,
                sort: sort,
                productCode: productCode,
                notificationType: notificationType,
            }));
        });
    }
    /**
     * Returns product interests
     */
    getProductInterests() {
        return this.store.pipe(select(getInterests));
    }
    /**
     * Returns product interests
     * @param pageSize the page size
     */
    getAndLoadProductInterests(pageSize) {
        return this.store.pipe(select(getInterestsState), tap((interestListState) => {
            const attemptedLoad = interestListState.loading ||
                interestListState.success ||
                interestListState.error;
            if (!attemptedLoad) {
                this.loadProductInterests(pageSize);
            }
        }), map((interestListState) => interestListState.value));
    }
    /**
     * Returns a loading flag for product interests
     */
    getProdutInterestsLoading() {
        return this.store.pipe(select(getInterestsLoading));
    }
    /**
     * Removes a ProductInterestRelation
     * @param item product interest relation item
     * @param singleDelete flag to delete only one interest
     */
    removeProdutInterest(item, singleDelete) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new RemoveProductInterest({
                userId,
                item: item,
                singleDelete: singleDelete,
            }));
        });
    }
    /**
     * Returns a loading flag for removing product interests.
     */
    getRemoveProdutInterestLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(REMOVE_PRODUCT_INTERESTS_PROCESS_ID)));
    }
    /**
     * Returns a success flag for removing a product interests.
     */
    getRemoveProdutInterestSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(REMOVE_PRODUCT_INTERESTS_PROCESS_ID)));
    }
    /**
     * Add a new product interest.
     *
     * @param productCode the product code
     * @param notificationType the notification type
     */
    addProductInterest(productCode, notificationType) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new AddProductInterest({
                userId,
                productCode: productCode,
                notificationType: notificationType,
            }));
        });
    }
    /**
     * Returns a success flag for adding a product interest.
     */
    getAddProductInterestSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(ADD_PRODUCT_INTEREST_PROCESS_ID)));
    }
    /**
     * Returns a error flag for adding a product interest.
     */
    getAddProductInterestError() {
        return this.store.pipe(select(getProcessErrorFactory(ADD_PRODUCT_INTEREST_PROCESS_ID)));
    }
    /**
     * Reset product interest adding state.
     */
    resetAddInterestState() {
        this.store.dispatch(new ResetAddInterestState());
    }
    /**
     * Reset product interest removing state.
     */
    resetRemoveInterestState() {
        this.store.dispatch(new ResetRemoveInterestState());
    }
    /**
     * Clears product interests
     */
    clearProductInterests() {
        this.store.dispatch(new ClearProductInterests());
    }
};
UserInterestsService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
UserInterestsService.ɵprov = ɵɵdefineInjectable({ factory: function UserInterestsService_Factory() { return new UserInterestsService(ɵɵinject(Store), ɵɵinject(AuthService)); }, token: UserInterestsService, providedIn: "root" });
UserInterestsService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UserInterestsService);

const initialState$k = {
    entities: {},
};
function reducer$k(state = initialState$k, action) {
    switch (action.type) {
        case LOAD_BILLING_COUNTRIES_SUCCESS: {
            const billingCountries = action.payload;
            const entities = billingCountries.reduce((countryEntities, name) => {
                return Object.assign(Object.assign({}, countryEntities), { [name.isocode]: name });
            }, Object.assign({}, state.entities));
            return Object.assign(Object.assign({}, state), { entities });
        }
        case CLEAR_USER_MISCS_DATA: {
            return initialState$k;
        }
    }
    return state;
}

const initialState$l = {};
function reducer$l(state = initialState$l, action) {
    switch (action.type) {
        case LOAD_CONSIGNMENT_TRACKING_SUCCESS: {
            const tracking = action.payload;
            return {
                tracking,
            };
        }
        case CLEAR_CONSIGNMENT_TRACKING: {
            return initialState$l;
        }
    }
    return state;
}

const initialState$m = {
    entities: {},
};
function reducer$m(state = initialState$m, action) {
    switch (action.type) {
        case LOAD_DELIVERY_COUNTRIES_SUCCESS: {
            const deliveryCountries = action.payload;
            const entities = deliveryCountries.reduce((countryEntities, country) => {
                return Object.assign(Object.assign({}, countryEntities), { [country.isocode]: country });
            }, Object.assign({}, state.entities));
            return Object.assign(Object.assign({}, state), { entities });
        }
        case CLEAR_USER_MISCS_DATA: {
            return initialState$m;
        }
    }
    return state;
}

const initialState$n = [];
function reducer$n(state = initialState$n, action) {
    switch (action.type) {
        case LOAD_NOTIFICATION_PREFERENCES_FAIL: {
            return initialState$n;
        }
        case LOAD_NOTIFICATION_PREFERENCES_SUCCESS:
        case UPDATE_NOTIFICATION_PREFERENCES_SUCCESS: {
            return action.payload ? action.payload : initialState$n;
        }
    }
    return state;
}

const initialState$o = {};
function reducer$o(state = initialState$o, action) {
    switch (action.type) {
        case LOAD_ORDER_DETAILS_SUCCESS: {
            const order = action.payload;
            return order;
        }
    }
    return state;
}

const initialState$p = [];
function reducer$p(state = initialState$p, action) {
    switch (action.type) {
        case LOAD_USER_PAYMENT_METHODS_SUCCESS: {
            return action.payload ? action.payload : initialState$p;
        }
        case LOAD_USER_PAYMENT_METHODS_FAIL: {
            return initialState$p;
        }
    }
    return state;
}

const initialState$q = {
    entities: [],
    country: null,
};
function reducer$q(state = initialState$q, action) {
    switch (action.type) {
        case LOAD_REGIONS_SUCCESS: {
            const entities = action.payload.entities;
            const country = action.payload.country;
            if (entities || country) {
                return Object.assign(Object.assign({}, state), { entities,
                    country });
            }
            return initialState$q;
        }
    }
    return state;
}

const initialState$r = false;
function reducer$r(state = initialState$r, action) {
    switch (action.type) {
        case RESET_PASSWORD_SUCCESS: {
            return true;
        }
    }
    return state;
}

const initialState$s = {
    entities: {},
};
function reducer$s(state = initialState$s, action) {
    switch (action.type) {
        case LOAD_TITLES_SUCCESS: {
            const titles = action.payload;
            const entities = titles.reduce((titleEntities, name) => {
                return Object.assign(Object.assign({}, titleEntities), { [name.code]: name });
            }, Object.assign({}, state.entities));
            return Object.assign(Object.assign({}, state), { entities });
        }
        case CLEAR_USER_MISCS_DATA: {
            return initialState$s;
        }
    }
    return state;
}

const initialState$t = [];
function reducer$t(state = initialState$t, action) {
    switch (action.type) {
        case LOAD_USER_ADDRESSES_FAIL: {
            return initialState$t;
        }
        case LOAD_USER_ADDRESSES_SUCCESS: {
            return action.payload ? action.payload : initialState$t;
        }
    }
    return state;
}

const initialState$u = [];
function reducer$u(state = initialState$u, action) {
    switch (action.type) {
        case LOAD_USER_CONSENTS_SUCCESS: {
            const consents = action.payload;
            return consents ? consents : initialState$u;
        }
        case GIVE_USER_CONSENT_SUCCESS: {
            const updatedConsentTemplate = action.consentTemplate;
            return state.map((consentTemplate) => consentTemplate.id === updatedConsentTemplate.id
                ? updatedConsentTemplate
                : consentTemplate);
        }
    }
    return state;
}

const initialState$v = {};
function reducer$v(state = initialState$v, action) {
    switch (action.type) {
        case LOAD_USER_DETAILS_SUCCESS: {
            return action.payload;
        }
        case UPDATE_USER_DETAILS_SUCCESS: {
            const updatedDetails = Object.assign(Object.assign({}, state), action.userUpdates);
            return Object.assign(Object.assign({}, updatedDetails), { name: `${updatedDetails.firstName} ${updatedDetails.lastName}` });
        }
    }
    return state;
}

const initialState$w = {
    orders: [],
    pagination: {},
    sorts: [],
};
function reducer$w(state = initialState$w, action) {
    switch (action.type) {
        case LOAD_USER_ORDERS_SUCCESS: {
            return action.payload ? action.payload : initialState$w;
        }
        case LOAD_USER_ORDERS_FAIL: {
            return initialState$w;
        }
    }
    return state;
}

const initialState$x = {
    coupons: [],
    sorts: [],
    pagination: {},
};
function reducer$x(state = initialState$x, action) {
    switch (action.type) {
        case LOAD_CUSTOMER_COUPONS_SUCCESS: {
            return action.payload;
        }
        case SUBSCRIBE_CUSTOMER_COUPON_SUCCESS: {
            const updatedCustomerCoupon = action.payload.coupon;
            const customerCoupons = new Array(state.coupons.length);
            state.coupons.forEach((customerCoupon, index) => customerCoupon.couponId === updatedCustomerCoupon.couponId
                ? (customerCoupons[index] = updatedCustomerCoupon)
                : (customerCoupons[index] = customerCoupon));
            return Object.assign(Object.assign({}, state), { coupons: customerCoupons });
        }
        case UNSUBSCRIBE_CUSTOMER_COUPON_SUCCESS: {
            const updatedCouponCode = action.payload;
            const customerCoupons = new Array(state.coupons.length);
            state.coupons.forEach((customerCoupon, index) => customerCoupon.couponId === updatedCouponCode
                ? (customerCoupons[index] = Object.assign(Object.assign({}, customerCoupon), { notificationOn: false }))
                : (customerCoupons[index] = customerCoupon));
            return Object.assign(Object.assign({}, state), { coupons: customerCoupons });
        }
    }
    return state;
}

const initialState$y = {
    results: [],
    pagination: {},
    sorts: [],
};
function reducer$y(state = initialState$y, action) {
    switch (action.type) {
        case LOAD_PRODUCT_INTERESTS_SUCCESS: {
            return action.payload ? action.payload : initialState$y;
        }
        case LOAD_PRODUCT_INTERESTS_FAIL: {
            return initialState$y;
        }
    }
    return state;
}

const initialState$z = {
    returnRequests: [],
    pagination: {},
    sorts: [],
};
function reducer$z(state = initialState$z, action) {
    switch (action.type) {
        case LOAD_ORDER_RETURN_REQUEST_LIST_SUCCESS: {
            return action.payload ? action.payload : initialState$z;
        }
    }
    return state;
}

function getReducers$c() {
    return {
        account: combineReducers({
            details: reducer$v,
        }),
        addresses: loaderReducer(USER_ADDRESSES, reducer$t),
        billingCountries: reducer$k,
        consents: loaderReducer(USER_CONSENTS, reducer$u),
        payments: loaderReducer(USER_PAYMENT_METHODS, reducer$p),
        orders: loaderReducer(USER_ORDERS, reducer$w),
        order: loaderReducer(USER_ORDER_DETAILS, reducer$o),
        orderReturn: loaderReducer(USER_RETURN_REQUEST_DETAILS),
        orderReturnList: loaderReducer(USER_RETURN_REQUESTS, reducer$z),
        countries: reducer$m,
        titles: reducer$s,
        regions: loaderReducer(REGIONS, reducer$q),
        resetPassword: reducer$r,
        consignmentTracking: reducer$l,
        customerCoupons: loaderReducer(CUSTOMER_COUPONS, reducer$x),
        notificationPreferences: loaderReducer(NOTIFICATION_PREFERENCES, reducer$n),
        productInterests: loaderReducer(PRODUCT_INTERESTS, reducer$y),
    };
}
const reducerToken$c = new InjectionToken('UserReducers');
const reducerProvider$c = {
    provide: reducerToken$c,
    useFactory: getReducers$c,
};
function clearUserState(reducer) {
    return function (state, action) {
        if (action.type === LOGOUT) {
            state = undefined;
        }
        return reducer(state, action);
    };
}
const metaReducers$7 = [clearUserState];

let BillingCountriesEffect = class BillingCountriesEffect {
    constructor(actions$, siteConnector) {
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.loadBillingCountries$ = this.actions$.pipe(ofType(LOAD_BILLING_COUNTRIES), switchMap(() => {
            return this.siteConnector.getCountries(CountryType.BILLING).pipe(map((countries) => new LoadBillingCountriesSuccess(countries)), catchError((error) => of(new LoadBillingCountriesFail(makeErrorSerializable(error)))));
        }));
    }
};
BillingCountriesEffect.ctorParameters = () => [
    { type: Actions },
    { type: SiteConnector }
];
__decorate([
    Effect()
], BillingCountriesEffect.prototype, "loadBillingCountries$", void 0);
BillingCountriesEffect = __decorate([
    Injectable()
], BillingCountriesEffect);

let ClearMiscsDataEffect = class ClearMiscsDataEffect {
    constructor(actions$) {
        this.actions$ = actions$;
        this.clearMiscsData$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE, CURRENCY_CHANGE), map(() => {
            return new ClearUserMiscsData();
        }));
    }
};
ClearMiscsDataEffect.ctorParameters = () => [
    { type: Actions }
];
__decorate([
    Effect()
], ClearMiscsDataEffect.prototype, "clearMiscsData$", void 0);
ClearMiscsDataEffect = __decorate([
    Injectable()
], ClearMiscsDataEffect);

let ConsignmentTrackingEffects = class ConsignmentTrackingEffects {
    constructor(actions$, userOrderConnector) {
        this.actions$ = actions$;
        this.userOrderConnector = userOrderConnector;
        this.loadConsignmentTracking$ = this.actions$.pipe(ofType(LOAD_CONSIGNMENT_TRACKING), map((action) => action.payload), switchMap((payload) => {
            return this.userOrderConnector
                .getConsignmentTracking(payload.orderCode, payload.consignmentCode, payload.userId)
                .pipe(map((tracking) => new LoadConsignmentTrackingSuccess(tracking)), catchError((error) => of(new LoadConsignmentTrackingFail(makeErrorSerializable(error)))));
        }));
    }
};
ConsignmentTrackingEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserOrderConnector }
];
__decorate([
    Effect()
], ConsignmentTrackingEffects.prototype, "loadConsignmentTracking$", void 0);
ConsignmentTrackingEffects = __decorate([
    Injectable()
], ConsignmentTrackingEffects);

let DeliveryCountriesEffects = class DeliveryCountriesEffects {
    constructor(actions$, siteConnector) {
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.loadDeliveryCountries$ = this.actions$.pipe(ofType(LOAD_DELIVERY_COUNTRIES), switchMap(() => {
            return this.siteConnector.getCountries(CountryType.SHIPPING).pipe(map((countries) => new LoadDeliveryCountriesSuccess(countries)), catchError((error) => of(new LoadDeliveryCountriesFail(makeErrorSerializable(error)))));
        }));
    }
};
DeliveryCountriesEffects.ctorParameters = () => [
    { type: Actions },
    { type: SiteConnector }
];
__decorate([
    Effect()
], DeliveryCountriesEffects.prototype, "loadDeliveryCountries$", void 0);
DeliveryCountriesEffects = __decorate([
    Injectable()
], DeliveryCountriesEffects);

let ForgotPasswordEffects = class ForgotPasswordEffects {
    constructor(actions$, userAccountConnector) {
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.requestForgotPasswordEmail$ = this.actions$.pipe(ofType(FORGOT_PASSWORD_EMAIL_REQUEST), map((action) => {
            return action.payload;
        }), concatMap((userEmailAddress) => {
            return this.userAccountConnector
                .requestForgotPasswordEmail(userEmailAddress)
                .pipe(switchMap(() => [
                new ForgotPasswordEmailRequestSuccess(),
                new AddMessage({
                    text: { key: 'forgottenPassword.passwordResetEmailSent' },
                    type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
                }),
            ]), catchError((error) => of(new ForgotPasswordEmailRequestFail(makeErrorSerializable(error)))));
        }));
    }
};
ForgotPasswordEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserConnector }
];
__decorate([
    Effect()
], ForgotPasswordEffects.prototype, "requestForgotPasswordEmail$", void 0);
ForgotPasswordEffects = __decorate([
    Injectable()
], ForgotPasswordEffects);

let NotificationPreferenceEffects = class NotificationPreferenceEffects {
    constructor(actions$, connector) {
        this.actions$ = actions$;
        this.connector = connector;
        this.loadPreferences$ = this.actions$.pipe(ofType(LOAD_NOTIFICATION_PREFERENCES), map((action) => action.payload), switchMap((payload) => this.connector.loadAll(payload).pipe(map((preferences) => new LoadNotificationPreferencesSuccess(preferences)), catchError((error) => of(new LoadNotificationPreferencesFail(makeErrorSerializable(error)))))));
        this.updatePreferences$ = this.actions$.pipe(ofType(UPDATE_NOTIFICATION_PREFERENCES), map((action) => action.payload), mergeMap((payload) => this.connector.update(payload.userId, payload.preferences).pipe(map(() => new UpdateNotificationPreferencesSuccess(payload.preferences)), catchError((error) => of(new UpdateNotificationPreferencesFail(makeErrorSerializable(error)))))));
    }
};
NotificationPreferenceEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserNotificationPreferenceConnector }
];
__decorate([
    Effect()
], NotificationPreferenceEffects.prototype, "loadPreferences$", void 0);
__decorate([
    Effect()
], NotificationPreferenceEffects.prototype, "updatePreferences$", void 0);
NotificationPreferenceEffects = __decorate([
    Injectable()
], NotificationPreferenceEffects);

let OrderDetailsEffect = class OrderDetailsEffect {
    constructor(actions$, orderConnector) {
        this.actions$ = actions$;
        this.orderConnector = orderConnector;
        this.loadOrderDetails$ = this.actions$.pipe(ofType(LOAD_ORDER_DETAILS), map((action) => action.payload), switchMap((payload) => {
            return this.orderConnector.get(payload.userId, payload.orderCode).pipe(map((order) => {
                return new LoadOrderDetailsSuccess(order);
            }), catchError((error) => of(new LoadOrderDetailsFail(makeErrorSerializable(error)))));
        }));
        this.cancelOrder$ = this.actions$.pipe(ofType(CANCEL_ORDER), map((action) => action.payload), switchMap((payload) => {
            return this.orderConnector
                .cancel(payload.userId, payload.orderCode, payload.cancelRequestInput)
                .pipe(map(() => new CancelOrderSuccess()), catchError((error) => of(new CancelOrderFail(makeErrorSerializable(error)))));
        }));
    }
};
OrderDetailsEffect.ctorParameters = () => [
    { type: Actions },
    { type: UserOrderConnector }
];
__decorate([
    Effect()
], OrderDetailsEffect.prototype, "loadOrderDetails$", void 0);
__decorate([
    Effect()
], OrderDetailsEffect.prototype, "cancelOrder$", void 0);
OrderDetailsEffect = __decorate([
    Injectable()
], OrderDetailsEffect);

let OrderReturnRequestEffect = class OrderReturnRequestEffect {
    constructor(actions$, orderConnector) {
        this.actions$ = actions$;
        this.orderConnector = orderConnector;
        this.createReturnRequest$ = this.actions$.pipe(ofType(CREATE_ORDER_RETURN_REQUEST), map((action) => action.payload), switchMap((payload) => {
            return this.orderConnector
                .return(payload.userId, payload.returnRequestInput)
                .pipe(map((returnRequest) => new CreateOrderReturnRequestSuccess(returnRequest)), catchError((error) => of(new CreateOrderReturnRequestFail(makeErrorSerializable(error)))));
        }));
        this.loadReturnRequest$ = this.actions$.pipe(ofType(LOAD_ORDER_RETURN_REQUEST), map((action) => action.payload), switchMap((payload) => {
            return this.orderConnector
                .getReturnRequestDetail(payload.userId, payload.returnRequestCode)
                .pipe(map((returnRequest) => new LoadOrderReturnRequestSuccess(returnRequest)), catchError((error) => of(new LoadOrderReturnRequestFail(makeErrorSerializable(error)))));
        }));
        this.cancelReturnRequest$ = this.actions$.pipe(ofType(CANCEL_ORDER_RETURN_REQUEST), map((action) => action.payload), switchMap((payload) => {
            return this.orderConnector
                .cancelReturnRequest(payload.userId, payload.returnRequestCode, payload.returnRequestModification)
                .pipe(map(() => new CancelOrderReturnRequestSuccess()), catchError((error) => of(new CancelOrderReturnRequestFail(makeErrorSerializable(error)))));
        }));
        this.loadReturnRequestList$ = this.actions$.pipe(ofType(LOAD_ORDER_RETURN_REQUEST_LIST), map((action) => action.payload), switchMap((payload) => {
            return this.orderConnector
                .getReturnRequestList(payload.userId, payload.pageSize, payload.currentPage, payload.sort)
                .pipe(map((returnRequestList) => new LoadOrderReturnRequestListSuccess(returnRequestList)), catchError((error) => of(new LoadOrderReturnRequestListFail(makeErrorSerializable(error)))));
        }));
    }
};
OrderReturnRequestEffect.ctorParameters = () => [
    { type: Actions },
    { type: UserOrderConnector }
];
__decorate([
    Effect()
], OrderReturnRequestEffect.prototype, "createReturnRequest$", void 0);
__decorate([
    Effect()
], OrderReturnRequestEffect.prototype, "loadReturnRequest$", void 0);
__decorate([
    Effect()
], OrderReturnRequestEffect.prototype, "cancelReturnRequest$", void 0);
__decorate([
    Effect()
], OrderReturnRequestEffect.prototype, "loadReturnRequestList$", void 0);
OrderReturnRequestEffect = __decorate([
    Injectable()
], OrderReturnRequestEffect);

let UserPaymentMethodsEffects = class UserPaymentMethodsEffects {
    constructor(actions$, userPaymentMethodConnector) {
        this.actions$ = actions$;
        this.userPaymentMethodConnector = userPaymentMethodConnector;
        this.loadUserPaymentMethods$ = this.actions$.pipe(ofType(LOAD_USER_PAYMENT_METHODS), map((action) => action.payload), mergeMap((payload) => {
            return this.userPaymentMethodConnector.getAll(payload).pipe(map((payments) => {
                return new LoadUserPaymentMethodsSuccess(payments);
            }), catchError((error) => of(new LoadUserPaymentMethodsFail(makeErrorSerializable(error)))));
        }));
        this.setDefaultUserPaymentMethod$ = this.actions$.pipe(ofType(SET_DEFAULT_USER_PAYMENT_METHOD), map((action) => action.payload), mergeMap((payload) => {
            return this.userPaymentMethodConnector
                .setDefault(payload.userId, payload.paymentMethodId)
                .pipe(switchMap((data) => [
                new SetDefaultUserPaymentMethodSuccess(data),
                new LoadUserPaymentMethods(payload.userId),
            ]), catchError((error) => of(new SetDefaultUserPaymentMethodFail(makeErrorSerializable(error)))));
        }));
        this.deleteUserPaymentMethod$ = this.actions$.pipe(ofType(DELETE_USER_PAYMENT_METHOD), map((action) => action.payload), mergeMap((payload) => {
            return this.userPaymentMethodConnector
                .delete(payload.userId, payload.paymentMethodId)
                .pipe(switchMap((data) => [
                new DeleteUserPaymentMethodSuccess(data),
                new LoadUserPaymentMethods(payload.userId),
            ]), catchError((error) => of(new DeleteUserPaymentMethodFail(makeErrorSerializable(error)))));
        }));
    }
};
UserPaymentMethodsEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserPaymentConnector }
];
__decorate([
    Effect()
], UserPaymentMethodsEffects.prototype, "loadUserPaymentMethods$", void 0);
__decorate([
    Effect()
], UserPaymentMethodsEffects.prototype, "setDefaultUserPaymentMethod$", void 0);
__decorate([
    Effect()
], UserPaymentMethodsEffects.prototype, "deleteUserPaymentMethod$", void 0);
UserPaymentMethodsEffects = __decorate([
    Injectable()
], UserPaymentMethodsEffects);

let RegionsEffects = class RegionsEffects {
    constructor(actions$, siteConnector) {
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.loadRegions$ = this.actions$.pipe(ofType(LOAD_REGIONS), map((action) => {
            return action.payload;
        }), switchMap((countryCode) => {
            return this.siteConnector.getRegions(countryCode).pipe(map((regions) => new LoadRegionsSuccess({
                entities: regions,
                country: countryCode,
            })), catchError((error) => of(new LoadRegionsFail(makeErrorSerializable(error)))));
        }));
        this.resetRegions$ = this.actions$.pipe(ofType(CLEAR_USER_MISCS_DATA, CLEAR_REGIONS), map(() => {
            return new LoaderResetAction(REGIONS);
        }));
    }
};
RegionsEffects.ctorParameters = () => [
    { type: Actions },
    { type: SiteConnector }
];
__decorate([
    Effect()
], RegionsEffects.prototype, "loadRegions$", void 0);
__decorate([
    Effect()
], RegionsEffects.prototype, "resetRegions$", void 0);
RegionsEffects = __decorate([
    Injectable()
], RegionsEffects);

let ResetPasswordEffects = class ResetPasswordEffects {
    constructor(actions$, userAccountConnector) {
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.resetPassword$ = this.actions$.pipe(ofType(RESET_PASSWORD), map((action) => action.payload), switchMap(({ token, password }) => {
            return this.userAccountConnector.resetPassword(token, password).pipe(switchMap(() => [
                new ResetPasswordSuccess(),
                new AddMessage({
                    text: { key: 'forgottenPassword.passwordResetSuccess' },
                    type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
                }),
            ]), catchError((error) => {
                var _a;
                const actions = [new ResetPasswordFail(makeErrorSerializable(error))];
                if ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.errors) {
                    error.error.errors.forEach((err) => {
                        if (err.message) {
                            actions.push(new AddMessage({
                                text: { raw: err.message },
                                type: GlobalMessageType.MSG_TYPE_ERROR,
                            }));
                        }
                    });
                }
                return from(actions);
            }));
        }));
    }
};
ResetPasswordEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserConnector }
];
__decorate([
    Effect()
], ResetPasswordEffects.prototype, "resetPassword$", void 0);
ResetPasswordEffects = __decorate([
    Injectable()
], ResetPasswordEffects);

let TitlesEffects = class TitlesEffects {
    constructor(actions$, userAccountConnector) {
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.loadTitles$ = this.actions$.pipe(ofType(LOAD_TITLES), switchMap(() => {
            return this.userAccountConnector.getTitles().pipe(map((titles) => {
                return new LoadTitlesSuccess(titles);
            }), catchError((error) => of(new LoadTitlesFail(makeErrorSerializable(error)))));
        }));
    }
};
TitlesEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserConnector }
];
__decorate([
    Effect()
], TitlesEffects.prototype, "loadTitles$", void 0);
TitlesEffects = __decorate([
    Injectable()
], TitlesEffects);

let UpdateEmailEffects = class UpdateEmailEffects {
    constructor(actions$, userAccountConnector) {
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.updateEmail$ = this.actions$.pipe(ofType(UPDATE_EMAIL), map((action) => action.payload), concatMap((payload) => this.userAccountConnector
            .updateEmail(payload.uid, payload.password, payload.newUid)
            .pipe(map(() => new UpdateEmailSuccessAction(payload.newUid)), catchError((error) => of(new UpdateEmailErrorAction(makeErrorSerializable(error)))))));
    }
};
UpdateEmailEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserConnector }
];
__decorate([
    Effect()
], UpdateEmailEffects.prototype, "updateEmail$", void 0);
UpdateEmailEffects = __decorate([
    Injectable()
], UpdateEmailEffects);

let UpdatePasswordEffects = class UpdatePasswordEffects {
    constructor(actions$, userAccountConnector) {
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.updatePassword$ = this.actions$.pipe(ofType(UPDATE_PASSWORD), map((action) => action.payload), concatMap((payload) => this.userAccountConnector
            .updatePassword(payload.userId, payload.oldPassword, payload.newPassword)
            .pipe(map(() => new UpdatePasswordSuccess()), catchError((error) => of(new UpdatePasswordFail(makeErrorSerializable(error)))))));
    }
};
UpdatePasswordEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserConnector }
];
__decorate([
    Effect()
], UpdatePasswordEffects.prototype, "updatePassword$", void 0);
UpdatePasswordEffects = __decorate([
    Injectable()
], UpdatePasswordEffects);

let UserAddressesEffects = class UserAddressesEffects {
    constructor(actions$, userAddressConnector, userAddressService, messageService) {
        this.actions$ = actions$;
        this.userAddressConnector = userAddressConnector;
        this.userAddressService = userAddressService;
        this.messageService = messageService;
        this.loadUserAddresses$ = this.actions$.pipe(ofType(LOAD_USER_ADDRESSES), map((action) => action.payload), mergeMap((payload) => {
            return this.userAddressConnector.getAll(payload).pipe(map((addresses) => {
                return new LoadUserAddressesSuccess(addresses);
            }), catchError((error) => of(new LoadUserAddressesFail(makeErrorSerializable(error)))));
        }));
        this.addUserAddress$ = this.actions$.pipe(ofType(ADD_USER_ADDRESS), map((action) => action.payload), mergeMap((payload) => {
            return this.userAddressConnector
                .add(payload.userId, payload.address)
                .pipe(map((data) => {
                return new AddUserAddressSuccess(data);
            }), catchError((error) => of(new AddUserAddressFail(makeErrorSerializable(error)))));
        }));
        this.updateUserAddress$ = this.actions$.pipe(ofType(UPDATE_USER_ADDRESS), map((action) => action.payload), mergeMap((payload) => {
            return this.userAddressConnector
                .update(payload.userId, payload.addressId, payload.address)
                .pipe(map((data) => {
                // don't show the message if just setting address as default
                if (payload.address &&
                    Object.keys(payload.address).length === 1 &&
                    payload.address.defaultAddress) {
                    return new LoadUserAddresses(payload.userId);
                }
                else {
                    return new UpdateUserAddressSuccess(data);
                }
            }), catchError((error) => of(new UpdateUserAddressFail(makeErrorSerializable(error)))));
        }));
        this.deleteUserAddress$ = this.actions$.pipe(ofType(DELETE_USER_ADDRESS), map((action) => action.payload), mergeMap((payload) => {
            return this.userAddressConnector
                .delete(payload.userId, payload.addressId)
                .pipe(map((data) => {
                return new DeleteUserAddressSuccess(data);
            }), catchError((error) => of(new DeleteUserAddressFail(makeErrorSerializable(error)))));
        }));
        /**
         *  Reload addresses and notify about add success
         */
        this.showGlobalMessageOnAddSuccess$ = this.actions$.pipe(ofType(ADD_USER_ADDRESS_SUCCESS), tap(() => {
            this.loadAddresses();
            this.showGlobalMessage('addressForm.userAddressAddSuccess');
        }));
        /**
         *  Reload addresses and notify about update success
         */
        this.showGlobalMessageOnUpdateSuccess$ = this.actions$.pipe(ofType(UPDATE_USER_ADDRESS_SUCCESS), tap(() => {
            this.loadAddresses();
            this.showGlobalMessage('addressForm.userAddressUpdateSuccess');
        }));
        /**
         *  Reload addresses and notify about delete success
         */
        this.showGlobalMessageOnDeleteSuccess$ = this.actions$.pipe(ofType(DELETE_USER_ADDRESS_SUCCESS), tap(() => {
            this.loadAddresses();
            this.showGlobalMessage('addressForm.userAddressDeleteSuccess');
        }));
    }
    /**
     * Show global confirmation message with provided text
     */
    showGlobalMessage(text) {
        this.messageService.add({ key: text }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    }
    loadAddresses() {
        this.userAddressService.loadAddresses();
    }
};
UserAddressesEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserAddressConnector },
    { type: UserAddressService },
    { type: GlobalMessageService }
];
__decorate([
    Effect()
], UserAddressesEffects.prototype, "loadUserAddresses$", void 0);
__decorate([
    Effect()
], UserAddressesEffects.prototype, "addUserAddress$", void 0);
__decorate([
    Effect()
], UserAddressesEffects.prototype, "updateUserAddress$", void 0);
__decorate([
    Effect()
], UserAddressesEffects.prototype, "deleteUserAddress$", void 0);
__decorate([
    Effect({ dispatch: false })
], UserAddressesEffects.prototype, "showGlobalMessageOnAddSuccess$", void 0);
__decorate([
    Effect({ dispatch: false })
], UserAddressesEffects.prototype, "showGlobalMessageOnUpdateSuccess$", void 0);
__decorate([
    Effect({ dispatch: false })
], UserAddressesEffects.prototype, "showGlobalMessageOnDeleteSuccess$", void 0);
UserAddressesEffects = __decorate([
    Injectable()
], UserAddressesEffects);

let UserConsentsEffect = class UserConsentsEffect {
    constructor(actions$, userConsentConnector) {
        this.actions$ = actions$;
        this.userConsentConnector = userConsentConnector;
        this.resetConsents$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE), map(() => new ResetLoadUserConsents()));
        this.getConsents$ = this.actions$.pipe(ofType(LOAD_USER_CONSENTS), map((action) => action.payload), concatMap((userId) => this.userConsentConnector.loadConsents(userId).pipe(map((consents) => new LoadUserConsentsSuccess(consents)), catchError((error) => of(new LoadUserConsentsFail(makeErrorSerializable(error)))))));
        this.giveConsent$ = this.actions$.pipe(ofType(GIVE_USER_CONSENT, TRANSFER_ANONYMOUS_CONSENT), concatMap((action) => this.userConsentConnector
            .giveConsent(action.payload.userId, action.payload.consentTemplateId, action.payload.consentTemplateVersion)
            .pipe(map((consent) => new GiveUserConsentSuccess(consent)), catchError((error) => {
            const errors = [
                new GiveUserConsentFail(makeErrorSerializable(error)),
            ];
            if (action.type === TRANSFER_ANONYMOUS_CONSENT &&
                error.status === 409) {
                errors.push(new RemoveMessagesByType(GlobalMessageType.MSG_TYPE_ERROR));
            }
            return of(...errors);
        }))));
        this.withdrawConsent$ = this.actions$.pipe(ofType(WITHDRAW_USER_CONSENT), map((action) => action.payload), concatMap(({ userId, consentCode }) => this.userConsentConnector.withdrawConsent(userId, consentCode).pipe(map(() => new WithdrawUserConsentSuccess()), catchError((error) => of(new WithdrawUserConsentFail(makeErrorSerializable(error)))))));
    }
};
UserConsentsEffect.ctorParameters = () => [
    { type: Actions },
    { type: UserConsentConnector }
];
__decorate([
    Effect()
], UserConsentsEffect.prototype, "resetConsents$", void 0);
__decorate([
    Effect()
], UserConsentsEffect.prototype, "getConsents$", void 0);
__decorate([
    Effect()
], UserConsentsEffect.prototype, "giveConsent$", void 0);
__decorate([
    Effect()
], UserConsentsEffect.prototype, "withdrawConsent$", void 0);
UserConsentsEffect = __decorate([
    Injectable()
], UserConsentsEffect);

let UserDetailsEffects = class UserDetailsEffects {
    constructor(actions$, userConnector) {
        this.actions$ = actions$;
        this.userConnector = userConnector;
        this.loadUserDetails$ = this.actions$.pipe(ofType(LOAD_USER_DETAILS), map((action) => action.payload), mergeMap((userId) => {
            return this.userConnector.get(userId).pipe(map((user) => {
                return new LoadUserDetailsSuccess(user);
            }), catchError((error) => of(new LoadUserDetailsFail(makeErrorSerializable(error)))));
        }));
        this.updateUserDetails$ = this.actions$.pipe(ofType(UPDATE_USER_DETAILS), map((action) => action.payload), concatMap((payload) => this.userConnector.update(payload.username, payload.userDetails).pipe(map(() => new UpdateUserDetailsSuccess(payload.userDetails)), catchError((error) => of(new UpdateUserDetailsFail(makeErrorSerializable(error)))))));
    }
};
UserDetailsEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserConnector }
];
__decorate([
    Effect()
], UserDetailsEffects.prototype, "loadUserDetails$", void 0);
__decorate([
    Effect()
], UserDetailsEffects.prototype, "updateUserDetails$", void 0);
UserDetailsEffects = __decorate([
    Injectable()
], UserDetailsEffects);

let UserOrdersEffect = class UserOrdersEffect {
    constructor(actions$, orderConnector) {
        this.actions$ = actions$;
        this.orderConnector = orderConnector;
        this.loadUserOrders$ = this.actions$.pipe(ofType(LOAD_USER_ORDERS), map((action) => action.payload), switchMap((payload) => {
            return this.orderConnector
                .getHistory(payload.userId, payload.pageSize, payload.currentPage, payload.sort)
                .pipe(map((orders) => {
                return new LoadUserOrdersSuccess(orders);
            }), catchError((error) => of(new LoadUserOrdersFail(makeErrorSerializable(error)))));
        }));
        this.resetUserOrders$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE), map(() => {
            return new ClearUserOrders();
        }));
    }
};
UserOrdersEffect.ctorParameters = () => [
    { type: Actions },
    { type: UserOrderConnector }
];
__decorate([
    Effect()
], UserOrdersEffect.prototype, "loadUserOrders$", void 0);
__decorate([
    Effect()
], UserOrdersEffect.prototype, "resetUserOrders$", void 0);
UserOrdersEffect = __decorate([
    Injectable()
], UserOrdersEffect);

let UserRegisterEffects = class UserRegisterEffects {
    constructor(actions$, userConnector) {
        this.actions$ = actions$;
        this.userConnector = userConnector;
        this.registerUser$ = this.actions$.pipe(ofType(REGISTER_USER), map((action) => action.payload), mergeMap((user) => this.userConnector.register(user).pipe(map(() => new RegisterUserSuccess()), catchError((error) => of(new RegisterUserFail(makeErrorSerializable(error)))))));
        this.registerGuest$ = this.actions$.pipe(ofType(REGISTER_GUEST), map((action) => action.payload), mergeMap(({ guid, password }) => this.userConnector.registerGuest(guid, password).pipe(switchMap((user) => [
            new LoadUserToken({
                userId: user.uid,
                password: password,
            }),
            new RegisterGuestSuccess(),
        ]), catchError((error) => of(new RegisterGuestFail(makeErrorSerializable(error)))))));
        this.removeUser$ = this.actions$.pipe(ofType(REMOVE_USER), map((action) => action.payload), mergeMap((userId) => {
            return this.userConnector.remove(userId).pipe(switchMap(() => [
                new RemoveUserSuccess(),
                new Logout(),
            ]), catchError((error) => of(new RemoveUserFail(makeErrorSerializable(error)))));
        }));
    }
};
UserRegisterEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserConnector }
];
__decorate([
    Effect()
], UserRegisterEffects.prototype, "registerUser$", void 0);
__decorate([
    Effect()
], UserRegisterEffects.prototype, "registerGuest$", void 0);
__decorate([
    Effect()
], UserRegisterEffects.prototype, "removeUser$", void 0);
UserRegisterEffects = __decorate([
    Injectable()
], UserRegisterEffects);

let CustomerCouponEffects = class CustomerCouponEffects {
    constructor(actions$, customerCouponConnector) {
        this.actions$ = actions$;
        this.customerCouponConnector = customerCouponConnector;
        this.loadCustomerCoupons$ = this.actions$.pipe(ofType(LOAD_CUSTOMER_COUPONS), map((action) => action.payload), mergeMap((payload) => {
            return this.customerCouponConnector
                .getCustomerCoupons(payload.userId, payload.pageSize, payload.currentPage, payload.sort)
                .pipe(map((coupons) => {
                return new LoadCustomerCouponsSuccess(coupons);
            }), catchError((error) => of(new LoadCustomerCouponsFail(makeErrorSerializable(error)))));
        }));
        this.subscribeCustomerCoupon$ = this.actions$.pipe(ofType(SUBSCRIBE_CUSTOMER_COUPON), map((action) => action.payload), mergeMap((payload) => {
            return this.customerCouponConnector
                .turnOnNotification(payload.userId, payload.couponCode)
                .pipe(map((data) => {
                return new SubscribeCustomerCouponSuccess(data);
            }), catchError((error) => of(new SubscribeCustomerCouponFail(makeErrorSerializable(error)))));
        }));
        this.unsubscribeCustomerCoupon$ = this.actions$.pipe(ofType(UNSUBSCRIBE_CUSTOMER_COUPON), map((action) => action.payload), mergeMap((payload) => {
            return this.customerCouponConnector
                .turnOffNotification(payload.userId, payload.couponCode)
                .pipe(map(() => {
                return new UnsubscribeCustomerCouponSuccess(payload.couponCode);
            }), catchError((error) => of(new UnsubscribeCustomerCouponFail(makeErrorSerializable(error)))));
        }));
        this.claimCustomerCoupon$ = this.actions$.pipe(ofType(CLAIM_CUSTOMER_COUPON), map((action) => action.payload), mergeMap((payload) => {
            return this.customerCouponConnector
                .claimCustomerCoupon(payload.userId, payload.couponCode)
                .pipe(map((data) => {
                return new ClaimCustomerCouponSuccess(data);
            }), catchError((error) => of(new ClaimCustomerCouponFail(makeErrorSerializable(error)))));
        }));
    }
};
CustomerCouponEffects.ctorParameters = () => [
    { type: Actions },
    { type: CustomerCouponConnector }
];
__decorate([
    Effect()
], CustomerCouponEffects.prototype, "loadCustomerCoupons$", void 0);
__decorate([
    Effect()
], CustomerCouponEffects.prototype, "subscribeCustomerCoupon$", void 0);
__decorate([
    Effect()
], CustomerCouponEffects.prototype, "unsubscribeCustomerCoupon$", void 0);
__decorate([
    Effect()
], CustomerCouponEffects.prototype, "claimCustomerCoupon$", void 0);
CustomerCouponEffects = __decorate([
    Injectable()
], CustomerCouponEffects);

let ProductInterestsEffect = class ProductInterestsEffect {
    constructor(actions$, userInterestsConnector) {
        this.actions$ = actions$;
        this.userInterestsConnector = userInterestsConnector;
        this.loadProductInteres$ = this.actions$.pipe(ofType(LOAD_PRODUCT_INTERESTS), map((action) => action.payload), switchMap((payload) => {
            return this.userInterestsConnector
                .getInterests(payload.userId, payload.pageSize, payload.currentPage, payload.sort, payload.productCode, payload.notificationType)
                .pipe(map((interests) => {
                return new LoadProductInterestsSuccess(interests);
            }), catchError((error) => of(new LoadProductInterestsFail(makeErrorSerializable(error)))));
        }));
        this.removeProductInterest$ = this.actions$.pipe(ofType(REMOVE_PRODUCT_INTEREST), map((action) => action.payload), switchMap((payload) => this.userInterestsConnector
            .removeInterest(payload.userId, payload.item)
            .pipe(switchMap((data) => [
            new LoadProductInterests(payload.singleDelete
                ? {
                    userId: payload.userId,
                    productCode: payload.item.product.code,
                    notificationType: payload.item.productInterestEntry[0].interestType,
                }
                : { userId: payload.userId }),
            new RemoveProductInterestSuccess(data),
        ]), catchError((error) => of(new RemoveProductInterestFail(makeErrorSerializable(error)))))));
        this.addProductInterest$ = this.actions$.pipe(ofType(ADD_PRODUCT_INTEREST), map((action) => action.payload), switchMap((payload) => this.userInterestsConnector
            .addInterest(payload.userId, payload.productCode, payload.notificationType)
            .pipe(switchMap((res) => [
            new LoadProductInterests({
                userId: payload.userId,
                productCode: payload.productCode,
                notificationType: payload.notificationType,
            }),
            new AddProductInterestSuccess(res),
        ]), catchError((error) => of(new AddProductInterestFail(makeErrorSerializable(error)))))));
    }
};
ProductInterestsEffect.ctorParameters = () => [
    { type: Actions },
    { type: UserInterestsConnector }
];
__decorate([
    Effect()
], ProductInterestsEffect.prototype, "loadProductInteres$", void 0);
__decorate([
    Effect()
], ProductInterestsEffect.prototype, "removeProductInterest$", void 0);
__decorate([
    Effect()
], ProductInterestsEffect.prototype, "addProductInterest$", void 0);
ProductInterestsEffect = __decorate([
    Injectable()
], ProductInterestsEffect);

const effects$b = [
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
    ConsignmentTrackingEffects,
    CustomerCouponEffects,
    NotificationPreferenceEffects,
    ProductInterestsEffect,
    OrderReturnRequestEffect,
];

let UserStoreModule = class UserStoreModule {
};
UserStoreModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            StateModule,
            StoreModule.forFeature(USER_FEATURE, reducerToken$c, { metaReducers: metaReducers$7 }),
            EffectsModule.forFeature(effects$b),
            RouterModule,
        ],
        providers: [reducerProvider$c],
    })
], UserStoreModule);

var UserModule_1;
let UserModule = UserModule_1 = class UserModule {
    static forRoot() {
        return {
            ngModule: UserModule_1,
        };
    }
};
UserModule = UserModule_1 = __decorate([
    NgModule({
        imports: [UserStoreModule],
    })
], UserModule);

/*
 * Public API Surface of core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ADDRESS_NORMALIZER, ADDRESS_SERIALIZER, ADDRESS_VALIDATION_NORMALIZER, ADD_PRODUCT_INTEREST_PROCESS_ID, ADD_VOUCHER_PROCESS_ID, ANONYMOUS_CONSENTS, ANONYMOUS_CONSENTS_STORE_FEATURE, ANONYMOUS_CONSENT_STATUS, ASM_FEATURE, AUTH_FEATURE, ActiveCartService, AnonymousConsentTemplatesAdapter, AnonymousConsentTemplatesConnector, anonymousConsentsGroup as AnonymousConsentsActions, AnonymousConsentsConfig, AnonymousConsentsModule, anonymousConsentsGroup_selectors as AnonymousConsentsSelectors, AnonymousConsentsService, customerGroup_actions as AsmActions, AsmAdapter, AsmAuthService, AsmConfig, AsmConnector, AsmModule, AsmOccModule, asmGroup_selectors as AsmSelectors, AsmService, authGroup_actions as AuthActions, AuthConfig, AuthGuard, AuthModule, AuthRedirectService, authGroup_selectors as AuthSelectors, AuthService, BASE_SITE_CONTEXT_ID, BadGatewayHandler, BadRequestHandler, BaseSiteService, CANCEL_ORDER_PROCESS_ID, CANCEL_RETURN_PROCESS_ID, CARD_TYPE_NORMALIZER, CART_MODIFICATION_NORMALIZER, CART_NORMALIZER, CART_VOUCHER_NORMALIZER, CHECKOUT_DETAILS, CHECKOUT_FEATURE, CLAIM_CUSTOMER_COUPON_PROCESS_ID, CLIENT_TOKEN_DATA, CMS_COMPONENT_NORMALIZER, CMS_FEATURE, CMS_FLEX_COMPONENT_TYPE, CMS_PAGE_NORMALIZER, COMPONENT_ENTITY, CONFIG_INITIALIZER, CONSENT_TEMPLATE_NORMALIZER, CONSIGNMENT_TRACKING_NORMALIZER, COUNTRY_NORMALIZER, CSAGENT_TOKEN_DATA, CURRENCY_CONTEXT_ID, CURRENCY_NORMALIZER, CUSTOMER_COUPONS, CUSTOMER_COUPON_SEARCH_RESULT_NORMALIZER, CUSTOMER_SEARCH_DATA, CUSTOMER_SEARCH_PAGE_NORMALIZER, cartGroup_actions as CartActions, CartAdapter, CartAddEntryEvent, CartAddEntryFailEvent, CartAddEntrySuccessEvent, CartConnector, CartEntryAdapter, CartEntryConnector, CartEventBuilder, CartEventModule, CartModule, CartOccModule, CartVoucherAdapter, CartVoucherConnector, CartVoucherService, CategoryPageMetaResolver, checkoutGroup_actions as CheckoutActions, CheckoutAdapter, CheckoutConnector, CheckoutDeliveryAdapter, CheckoutDeliveryConnector, CheckoutDeliveryService, CheckoutModule, CheckoutOccModule, CheckoutPageMetaResolver, CheckoutPaymentAdapter, CheckoutPaymentConnector, CheckoutPaymentService, checkoutGroup_selectors as CheckoutSelectors, CheckoutService, cmsGroup_actions as CmsActions, CmsBannerCarouselEffect, CmsComponentAdapter, CmsComponentConnector, CmsConfig, CmsModule, CmsOccModule, CmsPageAdapter, CmsPageConnector, CmsPageTitleModule, cmsGroup_selectors as CmsSelectors, CmsService, CmsStructureConfig, CmsStructureConfigService, Config, ConfigChunk, ConfigInitializerModule, ConfigInitializerService, ConfigModule, ConfigValidatorModule, ConfigValidatorToken, ConfigurableRoutesService, ConflictHandler, ConsentService, ContentPageMetaResolver, ContextServiceMap, ConverterService, CountryType, CurrencyService, CustomerCouponAdapter, CustomerCouponConnector, CustomerCouponService, CustomerSupportAgentTokenInterceptor, CxDatePipe, DEFAULT_LOCAL_STORAGE_KEY, DEFAULT_SESSION_STORAGE_KEY, DEFAULT_URL_MATCHER, DELIVERY_MODE_NORMALIZER, DefaultConfigChunk, DeferLoadingStrategy, DynamicAttributeService, EMAIL_PATTERN, EXTERNAL_CONFIG_TRANSFER_ID, EventService, ExternalJsFileLoader, ExternalRoutesConfig, ExternalRoutesGuard, ExternalRoutesModule, ExternalRoutesService, FeatureConfigService, FeatureDirective, FeatureLevelDirective, FeaturesConfig, FeaturesConfigModule, ForbiddenHandler, GIVE_CONSENT_PROCESS_ID, GLOBAL_MESSAGE_FEATURE, GatewayTimeoutHandler, GlobService, globalMessageGroup_actions as GlobalMessageActions, GlobalMessageConfig, GlobalMessageModule, globalMessageGroup_selectors as GlobalMessageSelectors, GlobalMessageService, GlobalMessageType, GoogleMapRendererService, HttpErrorHandler, I18nConfig, I18nModule, I18nTestingModule, I18nextTranslationService, ImageType, InterceptorUtil, InternalServerErrorHandler, JSP_INCLUDE_CMS_COMPONENT_TYPE, JavaRegExpConverter, KYMA_FEATURE, kymaGroup_actions as KymaActions, KymaConfig, KymaModule, kymaGroup_selectors as KymaSelectors, KymaService, KymaServices, LANGUAGE_CONTEXT_ID, LANGUAGE_NORMALIZER, LanguageService, LoadingScopesService, MEDIA_BASE_URL_META_TAG_NAME, MEDIA_BASE_URL_META_TAG_PLACEHOLDER, MULTI_CART_DATA, MULTI_CART_FEATURE, MockDatePipe, MockTranslatePipe, multiCartGroup_selectors as MultiCartSelectors, MultiCartService, MultiCartStatePersistenceService, NAVIGATION_DETAIL_ENTITY, NOTIFICATION_PREFERENCES, NgExpressEngineDecorator, NotAuthGuard, NotFoundHandler, NotificationType, OCC_BASE_URL_META_TAG_NAME, OCC_BASE_URL_META_TAG_PLACEHOLDER, OCC_CART_ID_CURRENT, OCC_USER_ID_ANONYMOUS, OCC_USER_ID_CURRENT, OCC_USER_ID_GUEST, OPEN_ID_TOKEN_DATA, ORDER_HISTORY_NORMALIZER, ORDER_NORMALIZER, ORDER_RETURNS_NORMALIZER, ORDER_RETURN_REQUEST_INPUT_SERIALIZER, ORDER_RETURN_REQUEST_NORMALIZER, Occ, OccAnonymousConsentTemplatesAdapter, OccAsmAdapter, OccCartAdapter, OccCartEntryAdapter, OccCartNormalizer, OccCartVoucherAdapter, OccCheckoutAdapter, OccCheckoutDeliveryAdapter, OccCheckoutPaymentAdapter, OccCmsComponentAdapter, OccCmsPageAdapter, OccCmsPageNormalizer, OccConfig, OccConfigLoaderModule, OccConfigLoaderService, OccCustomerCouponAdapter, OccEndpointsService, OccFieldsService, OccLoadedConfigConverter, OccModule, OccOrderNormalizer, OccProductAdapter, OccProductReferencesAdapter, OccProductReferencesListNormalizer, OccProductReviewsAdapter, OccProductSearchAdapter, OccProductSearchPageNormalizer, OccRequestsOptimizerService, OccReturnRequestNormalizer, OccSiteAdapter, OccSitesConfigLoader, OccStoreFinderAdapter, OccUserAdapter, OccUserAddressAdapter, OccUserConsentAdapter, OccUserInterestsAdapter, OccUserInterestsNormalizer, OccUserNotificationPreferenceAdapter, OccUserOrderAdapter, OccUserPaymentAdapter, OrderReturnRequestService, PASSWORD_PATTERN, PAYMENT_DETAILS_NORMALIZER, PAYMENT_DETAILS_SERIALIZER, POINT_OF_SERVICE_NORMALIZER, PROCESS_FEATURE, PRODUCT_DETAIL_ENTITY, PRODUCT_FEATURE, PRODUCT_INTERESTS, PRODUCT_INTERESTS_NORMALIZER, PRODUCT_NORMALIZER, PRODUCT_REFERENCES_NORMALIZER, PRODUCT_REVIEW_NORMALIZER, PRODUCT_REVIEW_SERIALIZER, PRODUCT_SEARCH_PAGE_NORMALIZER, PRODUCT_SUGGESTION_NORMALIZER, PageContext, PageMetaResolver, PageMetaService, PageRobotsMeta, PageType, PersonalizationConfig, PersonalizationContextService, PersonalizationModule, PriceType, ProcessModule, process_selectors as ProcessSelectors, productGroup_actions as ProductActions, ProductAdapter, ProductConnector, ProductImageNormalizer, ProductLoadingService, ProductModule, ProductNameNormalizer, ProductOccModule, ProductPageMetaResolver, ProductReferenceNormalizer, ProductReferenceService, ProductReferencesAdapter, ProductReferencesConnector, ProductReviewService, ProductReviewsAdapter, ProductReviewsConnector, ProductScope, ProductSearchAdapter, ProductSearchConnector, ProductSearchService, productGroup_selectors as ProductSelectors, ProductService, ProductURLPipe, PromotionLocation, ProtectedRoutesGuard, ProtectedRoutesService, REGIONS, REGION_NORMALIZER, REGISTER_USER_PROCESS_ID, REMOVE_PRODUCT_INTERESTS_PROCESS_ID, REMOVE_USER_PROCESS_ID, ROUTING_FEATURE, routingGroup_actions as RoutingActions, RoutingConfig, RoutingConfigService, RoutingModule, routingGroup_selectors as RoutingSelector, RoutingService, SERVER_REQUEST_ORIGIN, SERVER_REQUEST_URL, SET_DELIVERY_ADDRESS_PROCESS_ID, SET_DELIVERY_MODE_PROCESS_ID, SET_PAYMENT_DETAILS_PROCESS_ID, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID, SITE_CONTEXT_FEATURE, STORE_COUNT_NORMALIZER, STORE_FINDER_DATA, STORE_FINDER_FEATURE, STORE_FINDER_SEARCH_PAGE_NORMALIZER, SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, SearchPageMetaResolver, SearchboxService, SelectiveCartService, SemanticPathService, SiteAdapter, SiteConnector, siteContextGroup_actions as SiteContextActions, SiteContextConfig, SiteContextInterceptor, SiteContextModule, SiteContextOccModule, siteContextGroup_selectors as SiteContextSelectors, SmartEditModule, SmartEditService, StateConfig, entity_action as StateEntityActions, entityLoader_action as StateEntityLoaderActions, entityLoader_selectors as StateEntityLoaderSelectors, entityProcessesLoader_action as StateEntityProcessesLoaderActions, entityProcessesLoader_selectors as StateEntityProcessesLoaderSelectors, entity_selectors as StateEntitySelectors, StateEventService, loader_action as StateLoaderActions, loader_selectors as StateLoaderSelectors, StateModule, StatePersistenceService, processesLoader_action as StateProcessesLoaderActions, processesLoader_selectors as StateProcessesLoaderSelectors, StateTransferType, StorageSyncType, StoreDataService, storeFinderGroup_actions as StoreFinderActions, StoreFinderAdapter, StoreFinderConfig, StoreFinderConnector, StoreFinderCoreModule, StoreFinderOccModule, storeFinderGroup_selectors as StoreFinderSelectors, StoreFinderService, TITLE_NORMALIZER, TOKEN_REVOCATION_HEADER, TestConfigModule, TranslatePipe, TranslationChunkService, TranslationService, UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, UPDATE_EMAIL_PROCESS_ID, UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID, UPDATE_PASSWORD_PROCESS_ID, UPDATE_USER_DETAILS_PROCESS_ID, USER_ADDRESSES, USER_CONSENTS, USER_FEATURE, USER_NORMALIZER, USER_ORDERS, USER_ORDER_DETAILS, USER_PAYMENT_METHODS, USER_RETURN_REQUESTS, USER_RETURN_REQUEST_DETAILS, USER_SERIALIZER, USER_SIGN_UP_SERIALIZER, USE_CLIENT_TOKEN, USE_CUSTOMER_SUPPORT_AGENT_TOKEN, UnauthorizedErrorHandler, UnknownErrorHandler, UrlMatcherService, UrlModule, UrlPipe, userGroup_actions as UserActions, UserAdapter, UserAddressAdapter, UserAddressConnector, UserAddressService, UserConnector, UserConsentAdapter, UserConsentConnector, UserConsentService, UserInterestsAdapter, UserInterestsConnector, UserInterestsService, UserModule, UserNotificationPreferenceService, UserOccModule, UserOrderAdapter, UserOrderConnector, UserOrderService, UserPaymentAdapter, UserPaymentConnector, UserPaymentService, UserService, usersGroup_selectors as UsersSelectors, VariantQualifier, VariantType, WITHDRAW_CONSENT_PROCESS_ID, WindowRef, WishListService, WithCredentialsInterceptor, configInitializerFactory, configValidatorFactory, configurationFactory, contextServiceMapProvider, createFrom, defaultAnonymousConsentsConfig, defaultCmsModuleConfig, defaultOccConfig, defaultStateConfig, entityLoaderReducer, entityProcessesLoaderReducer, entityReducer, errorHandlers, getServerRequestProviders, getStateSlice, httpErrorInterceptors, initConfigurableRoutes, initialEntityState, initialLoaderState, initialProcessesState, isFeatureEnabled, isFeatureLevel, loaderReducer, mediaServerConfigFromMetaTagFactory, occConfigValidator, occServerConfigFromMetaTagFactory, ofLoaderFail, ofLoaderLoad, ofLoaderSuccess, processesLoaderReducer, provideConfig, provideConfigFactory, provideConfigFromMetaTags, provideConfigValidator, provideDefaultConfig, provideDefaultConfigFactory, serviceMapFactory, testestsd, validateConfig, withdrawOn, cartStatePersistenceFactory as ɵa, TEST_CONFIG_COOKIE_NAME as ɵb, getReducers$3 as ɵba, reducerToken$3 as ɵbb, reducerProvider$3 as ɵbc, clearCustomerSupportAgentAsmState as ɵbd, metaReducers$2 as ɵbe, effects$3 as ɵbf, CustomerEffects as ɵbg, CustomerSupportAgentTokenEffects as ɵbh, UserAuthenticationTokenService as ɵbi, reducer$7 as ɵbj, interceptors$2 as ɵbk, CustomerSupportAgentAuthErrorInterceptor as ɵbl, CustomerSupportAgentErrorHandlingService as ɵbm, defaultAsmConfig as ɵbn, authStoreConfigFactory as ɵbo, AuthStoreModule as ɵbp, getReducers as ɵbq, reducerToken as ɵbr, reducerProvider as ɵbs, clearAuthState as ɵbt, metaReducers as ɵbu, effects as ɵbv, ClientTokenEffect as ɵbw, UserTokenEffects as ɵbx, ClientAuthenticationTokenService as ɵby, reducer as ɵbz, configFromCookieFactory as ɵc, defaultAuthConfig as ɵca, interceptors as ɵcb, ClientTokenInterceptor as ɵcc, UserTokenInterceptor as ɵcd, AuthErrorInterceptor as ɵce, UserErrorHandlingService as ɵcf, UrlParsingService as ɵcg, ClientErrorHandlingService as ɵch, TokenRevocationInterceptor as ɵci, AuthServices as ɵcj, MultiCartStoreModule as ɵck, clearMultiCartState as ɵcl, multiCartMetaReducers as ɵcm, multiCartReducerToken as ɵcn, getMultiCartReducers as ɵco, multiCartReducerProvider as ɵcp, CartEffects as ɵcq, CartEntryEffects as ɵcr, CartVoucherEffects as ɵcs, WishListEffects as ɵct, SaveCartConnector as ɵcu, SaveCartAdapter as ɵcv, MultiCartEffects as ɵcw, processesLoaderReducer as ɵcx, activeCartReducer as ɵcy, cartEntitiesReducer as ɵcz, CONFIG_INITIALIZER_FORROOT_GUARD as ɵd, wishListReducer as ɵda, CartPageMetaResolver as ɵdb, SiteContextParamsService as ɵdc, CheckoutStoreModule as ɵdd, getReducers$5 as ɵde, reducerToken$5 as ɵdf, reducerProvider$5 as ɵdg, effects$5 as ɵdh, AddressVerificationEffect as ɵdi, CardTypesEffects as ɵdj, CheckoutEffects as ɵdk, reducer$b as ɵdl, reducer$a as ɵdm, reducer$9 as ɵdn, ActiveCartService as ɵdo, cmsStoreConfigFactory as ɵdp, CmsStoreModule as ɵdq, getReducers$7 as ɵdr, reducerToken$7 as ɵds, reducerProvider$7 as ɵdt, clearCmsState as ɵdu, metaReducers$3 as ɵdv, effects$7 as ɵdw, ComponentsEffects as ɵdx, NavigationEntryItemEffects as ɵdy, PageEffects as ɵdz, initConfig as ɵe, reducer$f as ɵea, reducer$g as ɵeb, reducer$d as ɵec, reducer$e as ɵed, GlobalMessageStoreModule as ɵee, getReducers$4 as ɵef, reducerToken$4 as ɵeg, reducerProvider$4 as ɵeh, reducer$8 as ɵei, GlobalMessageEffect as ɵej, defaultGlobalMessageConfigFactory as ɵek, HttpErrorInterceptor as ɵel, defaultI18nConfig as ɵem, i18nextProviders as ɵen, i18nextInit as ɵeo, MockTranslationService as ɵep, kymaStoreConfigFactory as ɵeq, KymaStoreModule as ɵer, getReducers$8 as ɵes, reducerToken$8 as ɵet, reducerProvider$8 as ɵeu, clearKymaState as ɵev, metaReducers$4 as ɵew, effects$8 as ɵex, OpenIdTokenEffect as ɵey, OpenIdAuthenticationTokenService as ɵez, anonymousConsentsStoreConfigFactory as ɵf, defaultKymaConfig as ɵfa, defaultOccAsmConfig as ɵfb, defaultOccCartConfig as ɵfc, OccSaveCartAdapter as ɵfd, defaultOccProductConfig as ɵfe, defaultOccSiteContextConfig as ɵff, defaultOccStoreFinderConfig as ɵfg, defaultOccUserConfig as ɵfh, UserNotificationPreferenceAdapter as ɵfi, defaultPersonalizationConfig as ɵfj, interceptors$3 as ɵfk, OccPersonalizationIdInterceptor as ɵfl, OccPersonalizationTimeInterceptor as ɵfm, ProcessStoreModule as ɵfn, getReducers$9 as ɵfo, reducerToken$9 as ɵfp, reducerProvider$9 as ɵfq, productStoreConfigFactory as ɵfr, ProductStoreModule as ɵfs, getReducers$a as ɵft, reducerToken$a as ɵfu, reducerProvider$a as ɵfv, clearProductsState as ɵfw, metaReducers$5 as ɵfx, effects$9 as ɵfy, ProductReferencesEffects as ɵfz, AnonymousConsentsStoreModule as ɵg, ProductReviewsEffects as ɵga, ProductsSearchEffects as ɵgb, ProductEffects as ɵgc, reducer$h as ɵgd, entityScopedLoaderReducer as ɵge, scopedLoaderReducer as ɵgf, reducer$j as ɵgg, reducer$i as ɵgh, PageMetaResolver as ɵgi, CouponSearchPageResolver as ɵgj, PageMetaResolver as ɵgk, addExternalRoutesFactory as ɵgl, getReducers$6 as ɵgm, reducer$c as ɵgn, reducerToken$6 as ɵgo, reducerProvider$6 as ɵgp, CustomSerializer as ɵgq, effects$6 as ɵgr, RouterEffects as ɵgs, siteContextStoreConfigFactory as ɵgt, SiteContextStoreModule as ɵgu, getReducers$1 as ɵgv, reducerToken$1 as ɵgw, reducerProvider$1 as ɵgx, effects$2 as ɵgy, LanguagesEffects as ɵgz, TRANSFER_STATE_META_REDUCER as ɵh, CurrenciesEffects as ɵha, BaseSiteEffects as ɵhb, reducer$3 as ɵhc, reducer$2 as ɵhd, reducer$1 as ɵhe, defaultSiteContextConfigFactory as ɵhf, initializeContext as ɵhg, contextServiceProviders as ɵhh, initSiteContextRoutesHandler as ɵhi, siteContextParamsProviders as ɵhj, SiteContextUrlSerializer as ɵhk, SiteContextRoutesHandler as ɵhl, baseSiteConfigValidator as ɵhm, interceptors$4 as ɵhn, CmsTicketInterceptor as ɵho, StoreFinderStoreModule as ɵhp, getReducers$b as ɵhq, reducerToken$b as ɵhr, reducerProvider$b as ɵhs, effects$a as ɵht, FindStoresEffect as ɵhu, ViewAllStoresEffect as ɵhv, defaultStoreFinderConfig as ɵhw, UserStoreModule as ɵhx, getReducers$c as ɵhy, reducerToken$c as ɵhz, STORAGE_SYNC_META_REDUCER as ɵi, reducerProvider$c as ɵia, clearUserState as ɵib, metaReducers$7 as ɵic, effects$b as ɵid, BillingCountriesEffect as ɵie, ClearMiscsDataEffect as ɵif, ConsignmentTrackingEffects as ɵig, DeliveryCountriesEffects as ɵih, NotificationPreferenceEffects as ɵii, OrderDetailsEffect as ɵij, OrderReturnRequestEffect as ɵik, UserPaymentMethodsEffects as ɵil, RegionsEffects as ɵim, ResetPasswordEffects as ɵin, TitlesEffects as ɵio, UserAddressesEffects as ɵip, UserConsentsEffect as ɵiq, UserDetailsEffects as ɵir, UserOrdersEffect as ɵis, UserRegisterEffects as ɵit, CustomerCouponEffects as ɵiu, ProductInterestsEffect as ɵiv, ForgotPasswordEffects as ɵiw, UpdateEmailEffects as ɵix, UpdatePasswordEffects as ɵiy, UserNotificationPreferenceConnector as ɵiz, stateMetaReducers as ɵj, reducer$v as ɵja, reducer$t as ɵjb, reducer$k as ɵjc, reducer$u as ɵjd, reducer$p as ɵje, reducer$w as ɵjf, reducer$o as ɵjg, reducer$z as ɵjh, reducer$m as ɵji, reducer$s as ɵjj, reducer$q as ɵjk, reducer$r as ɵjl, reducer$l as ɵjm, reducer$x as ɵjn, reducer$n as ɵjo, reducer$y as ɵjp, getStorageSyncReducer as ɵk, getTransferStateReducer as ɵl, getReducers$2 as ɵm, reducerToken$2 as ɵn, reducerProvider$2 as ɵo, clearAnonymousConsentTemplates as ɵp, metaReducers$1 as ɵq, effects$1 as ɵr, AnonymousConsentsEffects as ɵs, reducer$6 as ɵt, reducer$4 as ɵu, reducer$5 as ɵv, interceptors$1 as ɵw, AnonymousConsentsInterceptor as ɵx, asmStoreConfigFactory as ɵy, AsmStoreModule as ɵz };
//# sourceMappingURL=spartacus-core.js.map

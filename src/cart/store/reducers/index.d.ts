import { InjectionToken, Provider } from '@angular/core';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { CartsState } from '../cart-state';
import { MultiCartState } from '../multi-cart-state';
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx reducers will no longer be a part of public API
 *
 * TODO(issue:#4507)
 */
export declare function getReducers(): ActionReducerMap<CartsState>;
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx reducers will no longer be a part of public API
 *
 * TODO(issue:#4507)
 */
export declare const reducerToken: InjectionToken<ActionReducerMap<CartsState>>;
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx reducers will no longer be a part of public API
 *
 * TODO(issue:#4507)
 */
export declare const reducerProvider: Provider;
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx reducers will no longer be a part of public API
 *
 * TODO(issue:#4507)
 */
export declare function clearCartState(reducer: ActionReducer<any>): ActionReducer<any>;
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx reducers will no longer be a part of public API
 *
 * TODO(issue:#4507)
 */
export declare const metaReducers: MetaReducer<any>[];
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx reducers will no longer be a part of public API
 *
 * TODO(issue:#4507)
 */
export declare function clearMultiCartState(reducer: ActionReducer<any>): ActionReducer<any>;
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx reducers will no longer be a part of public API
 *
 * TODO(issue:#4507)
 */
export declare const multiCartMetaReducers: MetaReducer<any>[];
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx reducers will no longer be a part of public API
 *
 * TODO(issue:#4507)
 */
export declare const multiCartReducerToken: InjectionToken<ActionReducerMap<MultiCartState>>;
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx reducers will no longer be a part of public API
 *
 * TODO(issue:#4507)
 */
export declare function getMultiCartReducers(): ActionReducerMap<MultiCartState>;
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx reducers will no longer be a part of public API
 *
 * TODO(issue:#4507)
 */
export declare const multiCartReducerProvider: Provider;

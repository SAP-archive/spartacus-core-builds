import { Action } from '@ngrx/store';
import { LoaderState } from './loader-state';
import { LoaderAction } from './loader.action';
export declare const initialLoaderState: LoaderState<any>;
/**
 * Higher order reducer that adds generic loading flag to chunk of the state
 *
 * Utilizes "loader" meta field of actions to set specific flags for specific
 * action (LOAD, SUCCESS, FAIL, RESET)
 */
export declare function loaderReducer<T>(entityType: string, reducer?: (state: T, action: Action) => T): (state: LoaderState<T>, action: LoaderAction) => LoaderState<T>;

import { LoaderAction } from '../loader/loader.action';
import { EntityLoaderState } from '../entity-loader/entity-loader-state';
import { EntityLoaderAction } from '../entity-loader/entity-loader.action';
/**
 * Higher order reducer that wraps scopedLoaderReducer and EntityReducer enhancing
 * single state reducer to support multiple entities with generic loading flags and scopes
 */
export declare function entityScopedLoaderReducer<T>(entityType: string, reducer?: (state: T, action: LoaderAction) => T): (state: EntityLoaderState<T>, action: EntityLoaderAction) => EntityLoaderState<T>;

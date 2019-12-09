import { EntityScopedLoaderAction } from '../../../product/store/actions/product.action';
import { LoaderState } from '../loader/loader-state';
import { ScopedLoaderState } from './scoped-loader.state';
import { Action } from '@ngrx/store';
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
export declare function scopedLoaderReducer<T>(entityType: string, reducer?: (state: T, action: Action) => T): (state: ScopedLoaderState<T> | LoaderState<T>, action: EntityScopedLoaderAction) => ScopedLoaderState<T> | LoaderState<T>;

import { EntityLoaderState } from './entity-loader-state';
import { LoaderState } from '../loader/loader-state';
export declare function entityStateSelector<T>(state: EntityLoaderState<T>, id: string): LoaderState<T>;
export declare function entityValueSelector<T>(state: EntityLoaderState<T>, id: string): T;
export declare function entityLoadingSelector<T>(state: EntityLoaderState<T>, id: string): boolean;
export declare function entityErrorSelector<T>(state: EntityLoaderState<T>, id: string): boolean;
export declare function entitySuccessSelector<T>(state: EntityLoaderState<T>, id: string): boolean;

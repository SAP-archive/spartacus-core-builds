import { EntityLoadAction } from '../entity-loader/entity-loader.action';
import { MonoTypeOperatorFunction } from 'rxjs';
export declare function ofLoaderLoad(entityType: string): MonoTypeOperatorFunction<EntityLoadAction>;
export declare function ofLoaderFail(entityType: string): MonoTypeOperatorFunction<EntityLoadAction>;
export declare function ofLoaderSuccess(entityType: string): MonoTypeOperatorFunction<EntityLoadAction>;

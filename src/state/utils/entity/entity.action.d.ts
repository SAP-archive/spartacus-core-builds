import { Action } from '@ngrx/store';
export declare const ENTITY_REMOVE_ACTION = "[ENTITY] REMOVE";
export declare const ENTITY_REMOVE_ALL_ACTION = "[ENTITY] REMOVE ALL";
export interface EntityMeta {
    entityType: string;
    entityId: string | string[];
    entityRemove?: boolean;
}
export declare function entityMeta(type: string, id: string | string[]): EntityMeta;
export declare function entityRemoveMeta(type: string, id: string | string[]): EntityMeta;
export declare function entityRemoveAllMeta(type: string): EntityMeta;
export interface EntityAction extends Action {
    readonly payload?: any;
    readonly meta?: EntityMeta;
}
export declare class EntityRemoveAction implements EntityAction {
    type: string;
    readonly meta: EntityMeta;
    constructor(entityType: string, id: string | string[]);
}
export declare class EntityRemoveAllAction implements EntityAction {
    type: string;
    readonly meta: EntityMeta;
    constructor(entityType: string);
}

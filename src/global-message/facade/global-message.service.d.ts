import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Translatable } from '../../i18n/translatable';
import { GlobalMessageType } from '../models/global-message.model';
import { GlobalMessageEntities, StateWithGlobalMessage } from '../store/global-message-state';
import * as ɵngcc0 from '@angular/core';
export declare class GlobalMessageService {
    protected store: Store<StateWithGlobalMessage>;
    constructor(store: Store<StateWithGlobalMessage>);
    /**
     * Get all global messages
     */
    get(): Observable<GlobalMessageEntities>;
    /**
     * Add one message into store
     * @param text: string | Translatable
     * @param type: GlobalMessageType object
     * @param timeout: number
     */
    add(text: string | Translatable, type: GlobalMessageType, timeout?: number): void;
    /**
     * Remove message(s) from store
     * @param type: GlobalMessageType
     * @param index:optional. Without it, messages will be removed by type; otherwise,
     * message will be removed from list by index.
     */
    remove(type: GlobalMessageType, index?: number): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlobalMessageService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<GlobalMessageService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJnbG9iYWwtbWVzc2FnZS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVHJhbnNsYXRhYmxlIH0gZnJvbSAnLi4vLi4vaTE4bi90cmFuc2xhdGFibGUnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICcuLi9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZUVudGl0aWVzLCBTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlIH0gZnJvbSAnLi4vc3RvcmUvZ2xvYmFsLW1lc3NhZ2Utc3RhdGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgR2xvYmFsTWVzc2FnZVNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoR2xvYmFsTWVzc2FnZT47XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aEdsb2JhbE1lc3NhZ2U+KTtcbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIGdsb2JhbCBtZXNzYWdlc1xuICAgICAqL1xuICAgIGdldCgpOiBPYnNlcnZhYmxlPEdsb2JhbE1lc3NhZ2VFbnRpdGllcz47XG4gICAgLyoqXG4gICAgICogQWRkIG9uZSBtZXNzYWdlIGludG8gc3RvcmVcbiAgICAgKiBAcGFyYW0gdGV4dDogc3RyaW5nIHwgVHJhbnNsYXRhYmxlXG4gICAgICogQHBhcmFtIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlIG9iamVjdFxuICAgICAqIEBwYXJhbSB0aW1lb3V0OiBudW1iZXJcbiAgICAgKi9cbiAgICBhZGQodGV4dDogc3RyaW5nIHwgVHJhbnNsYXRhYmxlLCB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZSwgdGltZW91dD86IG51bWJlcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIG1lc3NhZ2UocykgZnJvbSBzdG9yZVxuICAgICAqIEBwYXJhbSB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZVxuICAgICAqIEBwYXJhbSBpbmRleDpvcHRpb25hbC4gV2l0aG91dCBpdCwgbWVzc2FnZXMgd2lsbCBiZSByZW1vdmVkIGJ5IHR5cGU7IG90aGVyd2lzZSxcbiAgICAgKiBtZXNzYWdlIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIGxpc3QgYnkgaW5kZXguXG4gICAgICovXG4gICAgcmVtb3ZlKHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLCBpbmRleD86IG51bWJlcik6IHZvaWQ7XG59XG4iXX0=
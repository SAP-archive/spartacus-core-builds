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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlobalMessageService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<GlobalMessageService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJnbG9iYWwtbWVzc2FnZS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRyYW5zbGF0YWJsZSB9IGZyb20gJy4uLy4uL2kxOG4vdHJhbnNsYXRhYmxlJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VFbnRpdGllcywgU3RhdGVXaXRoR2xvYmFsTWVzc2FnZSB9IGZyb20gJy4uL3N0b3JlL2dsb2JhbC1tZXNzYWdlLXN0YXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aEdsb2JhbE1lc3NhZ2U+O1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlPik7XG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBnbG9iYWwgbWVzc2FnZXNcbiAgICAgKi9cbiAgICBnZXQoKTogT2JzZXJ2YWJsZTxHbG9iYWxNZXNzYWdlRW50aXRpZXM+O1xuICAgIC8qKlxuICAgICAqIEFkZCBvbmUgbWVzc2FnZSBpbnRvIHN0b3JlXG4gICAgICogQHBhcmFtIHRleHQ6IHN0cmluZyB8IFRyYW5zbGF0YWJsZVxuICAgICAqIEBwYXJhbSB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZSBvYmplY3RcbiAgICAgKiBAcGFyYW0gdGltZW91dDogbnVtYmVyXG4gICAgICovXG4gICAgYWRkKHRleHQ6IHN0cmluZyB8IFRyYW5zbGF0YWJsZSwgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUsIHRpbWVvdXQ/OiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJlbW92ZSBtZXNzYWdlKHMpIGZyb20gc3RvcmVcbiAgICAgKiBAcGFyYW0gdHlwZTogR2xvYmFsTWVzc2FnZVR5cGVcbiAgICAgKiBAcGFyYW0gaW5kZXg6b3B0aW9uYWwuIFdpdGhvdXQgaXQsIG1lc3NhZ2VzIHdpbGwgYmUgcmVtb3ZlZCBieSB0eXBlOyBvdGhlcndpc2UsXG4gICAgICogbWVzc2FnZSB3aWxsIGJlIHJlbW92ZWQgZnJvbSBsaXN0IGJ5IGluZGV4LlxuICAgICAqL1xuICAgIHJlbW92ZSh0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZSwgaW5kZXg/OiBudW1iZXIpOiB2b2lkO1xufVxuIl19
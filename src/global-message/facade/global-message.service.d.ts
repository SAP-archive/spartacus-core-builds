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
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJnbG9iYWwtbWVzc2FnZS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGFibGUgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0YWJsZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlRW50aXRpZXMsIFN0YXRlV2l0aEdsb2JhbE1lc3NhZ2UgfSBmcm9tICcuLi9zdG9yZS9nbG9iYWwtbWVzc2FnZS1zdGF0ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHbG9iYWxNZXNzYWdlU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlPjtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoR2xvYmFsTWVzc2FnZT4pO1xuICAgIC8qKlxuICAgICAqIEdldCBhbGwgZ2xvYmFsIG1lc3NhZ2VzXG4gICAgICovXG4gICAgZ2V0KCk6IE9ic2VydmFibGU8R2xvYmFsTWVzc2FnZUVudGl0aWVzPjtcbiAgICAvKipcbiAgICAgKiBBZGQgb25lIG1lc3NhZ2UgaW50byBzdG9yZVxuICAgICAqIEBwYXJhbSB0ZXh0OiBzdHJpbmcgfCBUcmFuc2xhdGFibGVcbiAgICAgKiBAcGFyYW0gdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUgb2JqZWN0XG4gICAgICogQHBhcmFtIHRpbWVvdXQ6IG51bWJlclxuICAgICAqL1xuICAgIGFkZCh0ZXh0OiBzdHJpbmcgfCBUcmFuc2xhdGFibGUsIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLCB0aW1lb3V0PzogbnVtYmVyKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgbWVzc2FnZShzKSBmcm9tIHN0b3JlXG4gICAgICogQHBhcmFtIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlXG4gICAgICogQHBhcmFtIGluZGV4Om9wdGlvbmFsLiBXaXRob3V0IGl0LCBtZXNzYWdlcyB3aWxsIGJlIHJlbW92ZWQgYnkgdHlwZTsgb3RoZXJ3aXNlLFxuICAgICAqIG1lc3NhZ2Ugd2lsbCBiZSByZW1vdmVkIGZyb20gbGlzdCBieSBpbmRleC5cbiAgICAgKi9cbiAgICByZW1vdmUodHlwZTogR2xvYmFsTWVzc2FnZVR5cGUsIGluZGV4PzogbnVtYmVyKTogdm9pZDtcbn1cbiJdfQ==
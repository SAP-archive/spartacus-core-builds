/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { delay, filter, mergeMap, pluck, switchMap } from 'rxjs/operators';
import { GlobalMessageConfig } from '../../config/global-message-config';
import * as GlobalMessageActions from '../actions/global-message.actions';
import { GlobalMessageSelectors } from '../selectors/index';
export class GlobalMessageEffect {
    /**
     * @param {?} actions$
     * @param {?} store
     * @param {?} config
     */
    constructor(actions$, store, config) {
        this.actions$ = actions$;
        this.store = store;
        this.config = config;
        this.hideAfterDelay$ = this.actions$.pipe(ofType(GlobalMessageActions.ADD_MESSAGE), pluck('payload', 'type'), mergeMap((/**
         * @param {?} type
         * @return {?}
         */
        (type) => {
            /** @type {?} */
            const config = this.config.globalMessages[type];
            return this.store.pipe(select(GlobalMessageSelectors.getGlobalMessageCountByType(type)), filter((/**
             * @param {?} count
             * @return {?}
             */
            (count) => config && config.timeout !== undefined && count && count > 0)), switchMap((/**
             * @param {?} count
             * @return {?}
             */
            (count) => of(new GlobalMessageActions.RemoveMessage({
                type,
                index: count - 1,
            })).pipe(delay(config.timeout)))));
        })));
    }
}
GlobalMessageEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GlobalMessageEffect.ctorParameters = () => [
    { type: Actions },
    { type: Store },
    { type: GlobalMessageConfig }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], GlobalMessageEffect.prototype, "hideAfterDelay$", void 0);
if (false) {
    /** @type {?} */
    GlobalMessageEffect.prototype.hideAfterDelay$;
    /**
     * @type {?}
     * @private
     */
    GlobalMessageEffect.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    GlobalMessageEffect.prototype.store;
    /**
     * @type {?}
     * @private
     */
    GlobalMessageEffect.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL3N0b3JlL2VmZmVjdHMvZ2xvYmFsLW1lc3NhZ2UuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUV6RSxPQUFPLEtBQUssb0JBQW9CLE1BQU0sbUNBQW1DLENBQUM7QUFFMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHNUQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBMkI5QixZQUNVLFFBQWlCLEVBQ2pCLEtBQW9DLEVBQ3BDLE1BQTJCO1FBRjNCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsVUFBSyxHQUFMLEtBQUssQ0FBK0I7UUFDcEMsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7UUE1QnJDLG9CQUFlLEdBRVgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsRUFDeEMsS0FBSyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFDeEIsUUFBUTs7OztRQUFDLENBQUMsSUFBdUIsRUFBRSxFQUFFOztrQkFDN0IsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUMvQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsc0JBQXNCLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDaEUsTUFBTTs7OztZQUNKLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FDaEIsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUMvRCxFQUNELFNBQVM7Ozs7WUFBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQzFCLEVBQUUsQ0FDQSxJQUFJLG9CQUFvQixDQUFDLGFBQWEsQ0FBQztnQkFDckMsSUFBSTtnQkFDSixLQUFLLEVBQUUsS0FBSyxHQUFHLENBQUM7YUFDakIsQ0FBQyxDQUNILENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFDOUIsQ0FDRixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQU1DLENBQUM7OztZQWhDTCxVQUFVOzs7O1lBVkYsT0FBTztZQUNDLEtBQUs7WUFHYixtQkFBbUI7O0FBUzFCO0lBREMsTUFBTSxFQUFFO3NDQUNRLFVBQVU7NERBdUJ6Qjs7O0lBeEJGLDhDQXdCRTs7Ozs7SUFHQSx1Q0FBeUI7Ozs7O0lBQ3pCLG9DQUE0Qzs7Ozs7SUFDNUMscUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVsYXksIGZpbHRlciwgbWVyZ2VNYXAsIHBsdWNrLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2dsb2JhbC1tZXNzYWdlLWNvbmZpZyc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgKiBhcyBHbG9iYWxNZXNzYWdlQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2dsb2JhbC1tZXNzYWdlLmFjdGlvbnMnO1xuaW1wb3J0IHsgU3RhdGVXaXRoR2xvYmFsTWVzc2FnZSB9IGZyb20gJy4uL2dsb2JhbC1tZXNzYWdlLXN0YXRlJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VTZWxlY3RvcnMgfSBmcm9tICcuLi9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2xvYmFsTWVzc2FnZUVmZmVjdCB7XG4gIEBFZmZlY3QoKVxuICBoaWRlQWZ0ZXJEZWxheSQ6IE9ic2VydmFibGU8XG4gICAgR2xvYmFsTWVzc2FnZUFjdGlvbnMuUmVtb3ZlTWVzc2FnZVxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShHbG9iYWxNZXNzYWdlQWN0aW9ucy5BRERfTUVTU0FHRSksXG4gICAgcGx1Y2soJ3BheWxvYWQnLCAndHlwZScpLFxuICAgIG1lcmdlTWFwKCh0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZSkgPT4ge1xuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWcuZ2xvYmFsTWVzc2FnZXNbdHlwZV07XG4gICAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICBzZWxlY3QoR2xvYmFsTWVzc2FnZVNlbGVjdG9ycy5nZXRHbG9iYWxNZXNzYWdlQ291bnRCeVR5cGUodHlwZSkpLFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgKGNvdW50OiBudW1iZXIpID0+XG4gICAgICAgICAgICBjb25maWcgJiYgY29uZmlnLnRpbWVvdXQgIT09IHVuZGVmaW5lZCAmJiBjb3VudCAmJiBjb3VudCA+IDBcbiAgICAgICAgKSxcbiAgICAgICAgc3dpdGNoTWFwKChjb3VudDogbnVtYmVyKSA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLlJlbW92ZU1lc3NhZ2Uoe1xuICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICBpbmRleDogY291bnQgLSAxLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApLnBpcGUoZGVsYXkoY29uZmlnLnRpbWVvdXQpKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlPixcbiAgICBwcml2YXRlIGNvbmZpZzogR2xvYmFsTWVzc2FnZUNvbmZpZ1xuICApIHt9XG59XG4iXX0=
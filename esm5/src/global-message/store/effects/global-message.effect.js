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
import { GlobalMessageActions } from '../actions/index';
import { GlobalMessageSelectors } from '../selectors/index';
var GlobalMessageEffect = /** @class */ (function () {
    function GlobalMessageEffect(actions$, store, config) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.config = config;
        this.hideAfterDelay$ = this.actions$.pipe(ofType(GlobalMessageActions.ADD_MESSAGE), pluck('payload', 'type'), mergeMap((/**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            /** @type {?} */
            var config = _this.config.globalMessages[type];
            return _this.store.pipe(select(GlobalMessageSelectors.getGlobalMessageCountByType(type)), filter((/**
             * @param {?} count
             * @return {?}
             */
            function (count) {
                return config && config.timeout !== undefined && count && count > 0;
            })), switchMap((/**
             * @param {?} count
             * @return {?}
             */
            function (count) {
                return of(new GlobalMessageActions.RemoveMessage({
                    type: type,
                    index: count - 1,
                })).pipe(delay(config.timeout));
            })));
        })));
    }
    GlobalMessageEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GlobalMessageEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: Store },
        { type: GlobalMessageConfig }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], GlobalMessageEffect.prototype, "hideAfterDelay$", void 0);
    return GlobalMessageEffect;
}());
export { GlobalMessageEffect };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL3N0b3JlL2VmZmVjdHMvZ2xvYmFsLW1lc3NhZ2UuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUV6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU1RDtJQTRCRSw2QkFDVSxRQUFpQixFQUNqQixLQUFvQyxFQUNwQyxNQUEyQjtRQUhyQyxpQkFJSTtRQUhNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsVUFBSyxHQUFMLEtBQUssQ0FBK0I7UUFDcEMsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7UUE1QnJDLG9CQUFlLEdBRVgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsRUFDeEMsS0FBSyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFDeEIsUUFBUTs7OztRQUFDLFVBQUMsSUFBdUI7O2dCQUN6QixNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQy9DLE9BQU8sS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUNoRSxNQUFNOzs7O1lBQ0osVUFBQyxLQUFhO2dCQUNaLE9BQUEsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQztZQUE1RCxDQUE0RCxFQUMvRCxFQUNELFNBQVM7Ozs7WUFBQyxVQUFDLEtBQWE7Z0JBQ3RCLE9BQUEsRUFBRSxDQUNBLElBQUksb0JBQW9CLENBQUMsYUFBYSxDQUFDO29CQUNyQyxJQUFJLE1BQUE7b0JBQ0osS0FBSyxFQUFFLEtBQUssR0FBRyxDQUFDO2lCQUNqQixDQUFDLENBQ0gsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUw3QixDQUs2QixFQUM5QixDQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBTUMsQ0FBQzs7Z0JBaENMLFVBQVU7Ozs7Z0JBVkYsT0FBTztnQkFDQyxLQUFLO2dCQUdiLG1CQUFtQjs7SUFTMUI7UUFEQyxNQUFNLEVBQUU7MENBQ1EsVUFBVTtnRUF1QnpCO0lBT0osMEJBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQWhDWSxtQkFBbUI7OztJQUM5Qiw4Q0F3QkU7Ozs7O0lBR0EsdUNBQXlCOzs7OztJQUN6QixvQ0FBNEM7Ozs7O0lBQzVDLHFDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5LCBmaWx0ZXIsIG1lcmdlTWFwLCBwbHVjaywgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9nbG9iYWwtbWVzc2FnZS1jb25maWcnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZUFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aEdsb2JhbE1lc3NhZ2UgfSBmcm9tICcuLi9nbG9iYWwtbWVzc2FnZS1zdGF0ZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU2VsZWN0b3JzIH0gZnJvbSAnLi4vc2VsZWN0b3JzL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdsb2JhbE1lc3NhZ2VFZmZlY3Qge1xuICBARWZmZWN0KClcbiAgaGlkZUFmdGVyRGVsYXkkOiBPYnNlcnZhYmxlPFxuICAgIEdsb2JhbE1lc3NhZ2VBY3Rpb25zLlJlbW92ZU1lc3NhZ2VcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoR2xvYmFsTWVzc2FnZUFjdGlvbnMuQUREX01FU1NBR0UpLFxuICAgIHBsdWNrKCdwYXlsb2FkJywgJ3R5cGUnKSxcbiAgICBtZXJnZU1hcCgodHlwZTogR2xvYmFsTWVzc2FnZVR5cGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnLmdsb2JhbE1lc3NhZ2VzW3R5cGVdO1xuICAgICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgc2VsZWN0KEdsb2JhbE1lc3NhZ2VTZWxlY3RvcnMuZ2V0R2xvYmFsTWVzc2FnZUNvdW50QnlUeXBlKHR5cGUpKSxcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIChjb3VudDogbnVtYmVyKSA9PlxuICAgICAgICAgICAgY29uZmlnICYmIGNvbmZpZy50aW1lb3V0ICE9PSB1bmRlZmluZWQgJiYgY291bnQgJiYgY291bnQgPiAwXG4gICAgICAgICksXG4gICAgICAgIHN3aXRjaE1hcCgoY291bnQ6IG51bWJlcikgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBHbG9iYWxNZXNzYWdlQWN0aW9ucy5SZW1vdmVNZXNzYWdlKHtcbiAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgaW5kZXg6IGNvdW50IC0gMSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKS5waXBlKGRlbGF5KGNvbmZpZy50aW1lb3V0KSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGVXaXRoR2xvYmFsTWVzc2FnZT4sXG4gICAgcHJpdmF0ZSBjb25maWc6IEdsb2JhbE1lc3NhZ2VDb25maWdcbiAgKSB7fVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { delay, filter, mergeMap, pluck, switchMap } from 'rxjs/operators';
import * as GlobalMessageActions from '../actions/global-message.actions';
import { GlobalMessageConfig } from '../../config/global-message-config';
import { getGlobalMessageCountByType } from '../selectors/global-message.selectors';
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
            return _this.store.select(getGlobalMessageCountByType(type)).pipe(filter((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL3N0b3JlL2VmZmVjdHMvZ2xvYmFsLW1lc3NhZ2UuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNFLE9BQU8sS0FBSyxvQkFBb0IsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQU1wRjtJQTJCRSw2QkFDVSxRQUFpQixFQUNqQixLQUEyQixFQUMzQixNQUEyQjtRQUhyQyxpQkFJSTtRQUhNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsVUFBSyxHQUFMLEtBQUssQ0FBc0I7UUFDM0IsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7UUEzQnJDLG9CQUFlLEdBRVgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsRUFDeEMsS0FBSyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFDeEIsUUFBUTs7OztRQUFDLFVBQUMsSUFBdUI7O2dCQUN6QixNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQy9DLE9BQU8sS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzlELE1BQU07Ozs7WUFDSixVQUFDLEtBQWE7Z0JBQ1osT0FBQSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDO1lBQTVELENBQTRELEVBQy9ELEVBQ0QsU0FBUzs7OztZQUFDLFVBQUMsS0FBYTtnQkFDdEIsT0FBQSxFQUFFLENBQ0EsSUFBSSxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7b0JBQ3JDLElBQUksTUFBQTtvQkFDSixLQUFLLEVBQUUsS0FBSyxHQUFHLENBQUM7aUJBQ2pCLENBQUMsQ0FDSCxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBTDdCLENBSzZCLEVBQzlCLENBQ0YsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFNQyxDQUFDOztnQkEvQkwsVUFBVTs7OztnQkFaTSxPQUFPO2dCQURmLEtBQUs7Z0JBTUwsbUJBQW1COztJQVUxQjtRQURDLE1BQU0sRUFBRTswQ0FDUSxVQUFVO2dFQXNCekI7SUFPSiwwQkFBQztDQUFBLEFBaENELElBZ0NDO1NBL0JZLG1CQUFtQjs7O0lBQzlCLDhDQXVCRTs7Ozs7SUFHQSx1Q0FBeUI7Ozs7O0lBQ3pCLG9DQUFtQzs7Ozs7SUFDbkMscUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFZmZlY3QsIEFjdGlvbnMsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5LCBmaWx0ZXIsIG1lcmdlTWFwLCBwbHVjaywgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBHbG9iYWxNZXNzYWdlQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2dsb2JhbC1tZXNzYWdlLmFjdGlvbnMnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9nbG9iYWwtbWVzc2FnZS1jb25maWcnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsTWVzc2FnZUNvdW50QnlUeXBlIH0gZnJvbSAnLi4vc2VsZWN0b3JzL2dsb2JhbC1tZXNzYWdlLnNlbGVjdG9ycyc7XG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdsb2JhbE1lc3NhZ2VFZmZlY3Qge1xuICBARWZmZWN0KClcbiAgaGlkZUFmdGVyRGVsYXkkOiBPYnNlcnZhYmxlPFxuICAgIEdsb2JhbE1lc3NhZ2VBY3Rpb25zLlJlbW92ZU1lc3NhZ2VcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoR2xvYmFsTWVzc2FnZUFjdGlvbnMuQUREX01FU1NBR0UpLFxuICAgIHBsdWNrKCdwYXlsb2FkJywgJ3R5cGUnKSxcbiAgICBtZXJnZU1hcCgodHlwZTogR2xvYmFsTWVzc2FnZVR5cGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnLmdsb2JhbE1lc3NhZ2VzW3R5cGVdO1xuICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0KGdldEdsb2JhbE1lc3NhZ2VDb3VudEJ5VHlwZSh0eXBlKSkucGlwZShcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIChjb3VudDogbnVtYmVyKSA9PlxuICAgICAgICAgICAgY29uZmlnICYmIGNvbmZpZy50aW1lb3V0ICE9PSB1bmRlZmluZWQgJiYgY291bnQgJiYgY291bnQgPiAwXG4gICAgICAgICksXG4gICAgICAgIHN3aXRjaE1hcCgoY291bnQ6IG51bWJlcikgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBHbG9iYWxNZXNzYWdlQWN0aW9ucy5SZW1vdmVNZXNzYWdlKHtcbiAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgaW5kZXg6IGNvdW50IC0gMSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKS5waXBlKGRlbGF5KGNvbmZpZy50aW1lb3V0KSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8R2xvYmFsTWVzc2FnZT4sXG4gICAgcHJpdmF0ZSBjb25maWc6IEdsb2JhbE1lc3NhZ2VDb25maWdcbiAgKSB7fVxufVxuIl19
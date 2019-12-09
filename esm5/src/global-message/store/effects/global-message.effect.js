/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { delay, filter, pluck, concatMap, switchMap, map, withLatestFrom, } from 'rxjs/operators';
import { GlobalMessageConfig } from '../../config/global-message-config';
import { GlobalMessageActions } from '../actions/index';
import { GlobalMessageSelectors } from '../selectors/index';
import { countOfDeepEqualObjects, indexOfFirstOccurrence, } from '../../../util/compare-equal-objects';
var GlobalMessageEffect = /** @class */ (function () {
    function GlobalMessageEffect(actions$, store, config) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.config = config;
        this.removeDuplicated$ = this.actions$.pipe(ofType(GlobalMessageActions.ADD_MESSAGE), pluck('payload'), switchMap((/**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            return of(message.text).pipe(withLatestFrom(_this.store.pipe(select(GlobalMessageSelectors.getGlobalMessageEntitiesByType(message.type)))), filter((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 2), text = _b[0], messages = _b[1];
                return countOfDeepEqualObjects(text, messages) > 1;
            })), map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 2), text = _b[0], messages = _b[1];
                return new GlobalMessageActions.RemoveMessage({
                    type: message.type,
                    index: indexOfFirstOccurrence(text, messages),
                });
            })));
        })));
        this.hideAfterDelay$ = this.actions$.pipe(ofType(GlobalMessageActions.ADD_MESSAGE), pluck('payload', 'type'), concatMap((/**
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
             * @return {?}
             */
            function () {
                return of(new GlobalMessageActions.RemoveMessage({
                    type: type,
                    index: 0,
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
    ], GlobalMessageEffect.prototype, "removeDuplicated$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], GlobalMessageEffect.prototype, "hideAfterDelay$", void 0);
    return GlobalMessageEffect;
}());
export { GlobalMessageEffect };
if (false) {
    /** @type {?} */
    GlobalMessageEffect.prototype.removeDuplicated$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL3N0b3JlL2VmZmVjdHMvZ2xvYmFsLW1lc3NhZ2UuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sS0FBSyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBS3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXhELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsc0JBQXNCLEdBQ3ZCLE1BQU0scUNBQXFDLENBQUM7QUFHN0M7SUE0REUsNkJBQ1UsUUFBaUIsRUFDakIsS0FBb0MsRUFDcEMsTUFBMkI7UUFIckMsaUJBSUk7UUFITSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLFVBQUssR0FBTCxLQUFLLENBQStCO1FBQ3BDLFdBQU0sR0FBTixNQUFNLENBQXFCO1FBNURyQyxzQkFBaUIsR0FFYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxFQUN4QyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQ2hCLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQXNCO1lBQy9CLE9BQUEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ25CLGNBQWMsQ0FDWixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDYixNQUFNLENBQ0osc0JBQXNCLENBQUMsOEJBQThCLENBQ25ELE9BQU8sQ0FBQyxJQUFJLENBQ2IsQ0FDRixDQUNGLENBQ0YsRUFDRCxNQUFNOzs7O1lBQ0osVUFBQyxFQUFnRDtvQkFBaEQsMEJBQWdELEVBQS9DLFlBQUksRUFBRSxnQkFBUTtnQkFDZCxPQUFBLHVCQUF1QixDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQTNDLENBQTJDLEVBQzlDLEVBQ0QsR0FBRzs7OztZQUNELFVBQUMsRUFBZ0Q7b0JBQWhELDBCQUFnRCxFQUEvQyxZQUFJLEVBQUUsZ0JBQVE7Z0JBQ2QsT0FBQSxJQUFJLG9CQUFvQixDQUFDLGFBQWEsQ0FBQztvQkFDckMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO29CQUNsQixLQUFLLEVBQUUsc0JBQXNCLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQztpQkFDOUMsQ0FBQztZQUhGLENBR0UsRUFDTCxDQUNGO1FBckJELENBcUJDLEVBQ0YsQ0FDRixDQUFDO1FBR0Ysb0JBQWUsR0FFWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxFQUN4QyxLQUFLLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUN4QixTQUFTOzs7O1FBQUMsVUFBQyxJQUF1Qjs7Z0JBQzFCLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDL0MsT0FBTyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ2hFLE1BQU07Ozs7WUFDSixVQUFDLEtBQWE7Z0JBQ1osT0FBQSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDO1lBQTVELENBQTRELEVBQy9ELEVBQ0QsU0FBUzs7O1lBQUM7Z0JBQ1IsT0FBQSxFQUFFLENBQ0EsSUFBSSxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7b0JBQ3JDLElBQUksTUFBQTtvQkFDSixLQUFLLEVBQUUsQ0FBQztpQkFDVCxDQUFDLENBQ0gsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUw3QixDQUs2QixFQUM5QixDQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBTUMsQ0FBQzs7Z0JBaEVMLFVBQVU7Ozs7Z0JBM0JGLE9BQU87Z0JBQ0MsS0FBSztnQkFZYixtQkFBbUI7O0lBaUIxQjtRQURDLE1BQU0sRUFBRTswQ0FDVSxVQUFVO2tFQTZCM0I7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDUSxVQUFVO2dFQXVCekI7SUFPSiwwQkFBQztDQUFBLEFBakVELElBaUVDO1NBaEVZLG1CQUFtQjs7O0lBQzlCLGdEQThCRTs7SUFFRiw4Q0F3QkU7Ozs7O0lBR0EsdUNBQXlCOzs7OztJQUN6QixvQ0FBNEM7Ozs7O0lBQzVDLHFDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlbGF5LFxuICBmaWx0ZXIsXG4gIHBsdWNrLFxuICBjb25jYXRNYXAsXG4gIHN3aXRjaE1hcCxcbiAgbWFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2dsb2JhbC1tZXNzYWdlLWNvbmZpZyc7XG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlIH0gZnJvbSAnLi4vZ2xvYmFsLW1lc3NhZ2Utc3RhdGUnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVNlbGVjdG9ycyB9IGZyb20gJy4uL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQge1xuICBjb3VudE9mRGVlcEVxdWFsT2JqZWN0cyxcbiAgaW5kZXhPZkZpcnN0T2NjdXJyZW5jZSxcbn0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb21wYXJlLWVxdWFsLW9iamVjdHMnO1xuaW1wb3J0IHsgVHJhbnNsYXRhYmxlIH0gZnJvbSAnLi4vLi4vLi4vaTE4bi90cmFuc2xhdGFibGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2xvYmFsTWVzc2FnZUVmZmVjdCB7XG4gIEBFZmZlY3QoKVxuICByZW1vdmVEdXBsaWNhdGVkJDogT2JzZXJ2YWJsZTxcbiAgICBHbG9iYWxNZXNzYWdlQWN0aW9ucy5SZW1vdmVNZXNzYWdlXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEdsb2JhbE1lc3NhZ2VBY3Rpb25zLkFERF9NRVNTQUdFKSxcbiAgICBwbHVjaygncGF5bG9hZCcpLFxuICAgIHN3aXRjaE1hcCgobWVzc2FnZTogR2xvYmFsTWVzc2FnZSkgPT5cbiAgICAgIG9mKG1lc3NhZ2UudGV4dCkucGlwZShcbiAgICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICAgICAgc2VsZWN0KFxuICAgICAgICAgICAgICBHbG9iYWxNZXNzYWdlU2VsZWN0b3JzLmdldEdsb2JhbE1lc3NhZ2VFbnRpdGllc0J5VHlwZShcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnR5cGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIChbdGV4dCwgbWVzc2FnZXNdOiBbVHJhbnNsYXRhYmxlLCBUcmFuc2xhdGFibGVbXV0pID0+XG4gICAgICAgICAgICBjb3VudE9mRGVlcEVxdWFsT2JqZWN0cyh0ZXh0LCBtZXNzYWdlcykgPiAxXG4gICAgICAgICksXG4gICAgICAgIG1hcChcbiAgICAgICAgICAoW3RleHQsIG1lc3NhZ2VzXTogW1RyYW5zbGF0YWJsZSwgVHJhbnNsYXRhYmxlW11dKSA9PlxuICAgICAgICAgICAgbmV3IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLlJlbW92ZU1lc3NhZ2Uoe1xuICAgICAgICAgICAgICB0eXBlOiBtZXNzYWdlLnR5cGUsXG4gICAgICAgICAgICAgIGluZGV4OiBpbmRleE9mRmlyc3RPY2N1cnJlbmNlKHRleHQsIG1lc3NhZ2VzKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGhpZGVBZnRlckRlbGF5JDogT2JzZXJ2YWJsZTxcbiAgICBHbG9iYWxNZXNzYWdlQWN0aW9ucy5SZW1vdmVNZXNzYWdlXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEdsb2JhbE1lc3NhZ2VBY3Rpb25zLkFERF9NRVNTQUdFKSxcbiAgICBwbHVjaygncGF5bG9hZCcsICd0eXBlJyksXG4gICAgY29uY2F0TWFwKCh0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZSkgPT4ge1xuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWcuZ2xvYmFsTWVzc2FnZXNbdHlwZV07XG4gICAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICBzZWxlY3QoR2xvYmFsTWVzc2FnZVNlbGVjdG9ycy5nZXRHbG9iYWxNZXNzYWdlQ291bnRCeVR5cGUodHlwZSkpLFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgKGNvdW50OiBudW1iZXIpID0+XG4gICAgICAgICAgICBjb25maWcgJiYgY29uZmlnLnRpbWVvdXQgIT09IHVuZGVmaW5lZCAmJiBjb3VudCAmJiBjb3VudCA+IDBcbiAgICAgICAgKSxcbiAgICAgICAgc3dpdGNoTWFwKCgpID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgR2xvYmFsTWVzc2FnZUFjdGlvbnMuUmVtb3ZlTWVzc2FnZSh7XG4gICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApLnBpcGUoZGVsYXkoY29uZmlnLnRpbWVvdXQpKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlPixcbiAgICBwcml2YXRlIGNvbmZpZzogR2xvYmFsTWVzc2FnZUNvbmZpZ1xuICApIHt9XG59XG4iXX0=
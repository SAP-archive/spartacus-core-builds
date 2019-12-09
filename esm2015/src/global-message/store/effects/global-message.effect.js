/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { delay, filter, pluck, switchMap, map, withLatestFrom, take, concatMap, } from 'rxjs/operators';
import { GlobalMessageConfig } from '../../config/global-message-config';
import { GlobalMessageActions } from '../actions/index';
import { GlobalMessageSelectors } from '../selectors/index';
import { countOfDeepEqualObjects, indexOfFirstOccurrence, } from '../../../util/compare-equal-objects';
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
        this.removeDuplicated$ = this.actions$.pipe(ofType(GlobalMessageActions.ADD_MESSAGE), pluck('payload'), switchMap((/**
         * @param {?} message
         * @return {?}
         */
        (message) => of(message.text).pipe(withLatestFrom(this.store.pipe(select(GlobalMessageSelectors.getGlobalMessageEntitiesByType(message.type)))), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([text, messages]) => countOfDeepEqualObjects(text, messages) > 1)), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([text, messages]) => new GlobalMessageActions.RemoveMessage({
            type: message.type,
            index: indexOfFirstOccurrence(text, messages),
        })))))));
        this.hideAfterDelay$ = this.actions$.pipe(ofType(GlobalMessageActions.ADD_MESSAGE), pluck('payload', 'type'), concatMap((/**
         * @param {?} type
         * @return {?}
         */
        (type) => {
            /** @type {?} */
            const config = this.config.globalMessages[type];
            return this.store.pipe(select(GlobalMessageSelectors.getGlobalMessageCountByType(type)), take(1), filter((/**
             * @param {?} count
             * @return {?}
             */
            (count) => config && config.timeout !== undefined && count && count > 0)), delay(config.timeout), switchMap((/**
             * @return {?}
             */
            () => of(new GlobalMessageActions.RemoveMessage({
                type,
                index: 0,
            })))));
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
], GlobalMessageEffect.prototype, "removeDuplicated$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], GlobalMessageEffect.prototype, "hideAfterDelay$", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL3N0b3JlL2VmZmVjdHMvZ2xvYmFsLW1lc3NhZ2UuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sS0FBSyxFQUNMLFNBQVMsRUFDVCxHQUFHLEVBQ0gsY0FBYyxFQUNkLElBQUksRUFDSixTQUFTLEdBQ1YsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUt6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLHNCQUFzQixHQUN2QixNQUFNLHFDQUFxQyxDQUFDO0FBSTdDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQTZEOUIsWUFDVSxRQUFpQixFQUNqQixLQUFvQyxFQUNwQyxNQUEyQjtRQUYzQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLFVBQUssR0FBTCxLQUFLLENBQStCO1FBQ3BDLFdBQU0sR0FBTixNQUFNLENBQXFCO1FBOURyQyxzQkFBaUIsR0FFYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxFQUN4QyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQ2hCLFNBQVM7Ozs7UUFBQyxDQUFDLE9BQXNCLEVBQUUsRUFBRSxDQUNuQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDbkIsY0FBYyxDQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLE1BQU0sQ0FDSixzQkFBc0IsQ0FBQyw4QkFBOEIsQ0FDbkQsT0FBTyxDQUFDLElBQUksQ0FDYixDQUNGLENBQ0YsQ0FDRixFQUNELE1BQU07Ozs7UUFDSixDQUFDLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBaUMsRUFBRSxFQUFFLENBQ25ELHVCQUF1QixDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQzlDLEVBQ0QsR0FBRzs7OztRQUNELENBQUMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFpQyxFQUFFLEVBQUUsQ0FDbkQsSUFBSSxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7WUFDckMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ2xCLEtBQUssRUFBRSxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDO1NBQzlDLENBQUMsRUFDTCxDQUNGLEVBQ0YsQ0FDRixDQUFDO1FBR0Ysb0JBQWUsR0FFWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxFQUN4QyxLQUFLLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUN4QixTQUFTOzs7O1FBQUMsQ0FBQyxJQUF1QixFQUFFLEVBQUU7O2tCQUM5QixNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQy9DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUNoRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsTUFBTTs7OztZQUNKLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FDaEIsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUMvRCxFQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ3JCLFNBQVM7OztZQUFDLEdBQUcsRUFBRSxDQUNiLEVBQUUsQ0FDQSxJQUFJLG9CQUFvQixDQUFDLGFBQWEsQ0FBQztnQkFDckMsSUFBSTtnQkFDSixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUMsQ0FDSCxFQUNGLENBQ0YsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFNQyxDQUFDOzs7WUFsRUwsVUFBVTs7OztZQTVCRixPQUFPO1lBQ0MsS0FBSztZQWFiLG1CQUFtQjs7QUFpQjFCO0lBREMsTUFBTSxFQUFFO3NDQUNVLFVBQVU7OERBNkIzQjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNRLFVBQVU7NERBeUJ6Qjs7O0lBMURGLGdEQThCRTs7SUFFRiw4Q0EwQkU7Ozs7O0lBR0EsdUNBQXlCOzs7OztJQUN6QixvQ0FBNEM7Ozs7O0lBQzVDLHFDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlbGF5LFxuICBmaWx0ZXIsXG4gIHBsdWNrLFxuICBzd2l0Y2hNYXAsXG4gIG1hcCxcbiAgd2l0aExhdGVzdEZyb20sXG4gIHRha2UsXG4gIGNvbmNhdE1hcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2dsb2JhbC1tZXNzYWdlLWNvbmZpZyc7XG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlIH0gZnJvbSAnLi4vZ2xvYmFsLW1lc3NhZ2Utc3RhdGUnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVNlbGVjdG9ycyB9IGZyb20gJy4uL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQge1xuICBjb3VudE9mRGVlcEVxdWFsT2JqZWN0cyxcbiAgaW5kZXhPZkZpcnN0T2NjdXJyZW5jZSxcbn0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb21wYXJlLWVxdWFsLW9iamVjdHMnO1xuaW1wb3J0IHsgVHJhbnNsYXRhYmxlIH0gZnJvbSAnLi4vLi4vLi4vaTE4bi90cmFuc2xhdGFibGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2xvYmFsTWVzc2FnZUVmZmVjdCB7XG4gIEBFZmZlY3QoKVxuICByZW1vdmVEdXBsaWNhdGVkJDogT2JzZXJ2YWJsZTxcbiAgICBHbG9iYWxNZXNzYWdlQWN0aW9ucy5SZW1vdmVNZXNzYWdlXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEdsb2JhbE1lc3NhZ2VBY3Rpb25zLkFERF9NRVNTQUdFKSxcbiAgICBwbHVjaygncGF5bG9hZCcpLFxuICAgIHN3aXRjaE1hcCgobWVzc2FnZTogR2xvYmFsTWVzc2FnZSkgPT5cbiAgICAgIG9mKG1lc3NhZ2UudGV4dCkucGlwZShcbiAgICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICAgICAgc2VsZWN0KFxuICAgICAgICAgICAgICBHbG9iYWxNZXNzYWdlU2VsZWN0b3JzLmdldEdsb2JhbE1lc3NhZ2VFbnRpdGllc0J5VHlwZShcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnR5cGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIChbdGV4dCwgbWVzc2FnZXNdOiBbVHJhbnNsYXRhYmxlLCBUcmFuc2xhdGFibGVbXV0pID0+XG4gICAgICAgICAgICBjb3VudE9mRGVlcEVxdWFsT2JqZWN0cyh0ZXh0LCBtZXNzYWdlcykgPiAxXG4gICAgICAgICksXG4gICAgICAgIG1hcChcbiAgICAgICAgICAoW3RleHQsIG1lc3NhZ2VzXTogW1RyYW5zbGF0YWJsZSwgVHJhbnNsYXRhYmxlW11dKSA9PlxuICAgICAgICAgICAgbmV3IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLlJlbW92ZU1lc3NhZ2Uoe1xuICAgICAgICAgICAgICB0eXBlOiBtZXNzYWdlLnR5cGUsXG4gICAgICAgICAgICAgIGluZGV4OiBpbmRleE9mRmlyc3RPY2N1cnJlbmNlKHRleHQsIG1lc3NhZ2VzKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGhpZGVBZnRlckRlbGF5JDogT2JzZXJ2YWJsZTxcbiAgICBHbG9iYWxNZXNzYWdlQWN0aW9ucy5SZW1vdmVNZXNzYWdlXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEdsb2JhbE1lc3NhZ2VBY3Rpb25zLkFERF9NRVNTQUdFKSxcbiAgICBwbHVjaygncGF5bG9hZCcsICd0eXBlJyksXG4gICAgY29uY2F0TWFwKCh0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZSkgPT4ge1xuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWcuZ2xvYmFsTWVzc2FnZXNbdHlwZV07XG4gICAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICBzZWxlY3QoR2xvYmFsTWVzc2FnZVNlbGVjdG9ycy5nZXRHbG9iYWxNZXNzYWdlQ291bnRCeVR5cGUodHlwZSkpLFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgKGNvdW50OiBudW1iZXIpID0+XG4gICAgICAgICAgICBjb25maWcgJiYgY29uZmlnLnRpbWVvdXQgIT09IHVuZGVmaW5lZCAmJiBjb3VudCAmJiBjb3VudCA+IDBcbiAgICAgICAgKSxcbiAgICAgICAgZGVsYXkoY29uZmlnLnRpbWVvdXQpLFxuICAgICAgICBzd2l0Y2hNYXAoKCkgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBHbG9iYWxNZXNzYWdlQWN0aW9ucy5SZW1vdmVNZXNzYWdlKHtcbiAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGVXaXRoR2xvYmFsTWVzc2FnZT4sXG4gICAgcHJpdmF0ZSBjb25maWc6IEdsb2JhbE1lc3NhZ2VDb25maWdcbiAgKSB7fVxufVxuIl19
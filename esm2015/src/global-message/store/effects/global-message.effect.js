/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            return this.store.pipe(select(GlobalMessageSelectors.getGlobalMessageCountByType(type)), filter((/**
             * @param {?} count
             * @return {?}
             */
            (count) => config && config.timeout !== undefined && count && count > 0)), switchMap((/**
             * @return {?}
             */
            () => of(new GlobalMessageActions.RemoveMessage({
                type,
                index: 0,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL3N0b3JlL2VmZmVjdHMvZ2xvYmFsLW1lc3NhZ2UuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sS0FBSyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBS3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXhELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsc0JBQXNCLEdBQ3ZCLE1BQU0scUNBQXFDLENBQUM7QUFJN0MsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBMkQ5QixZQUNVLFFBQWlCLEVBQ2pCLEtBQW9DLEVBQ3BDLE1BQTJCO1FBRjNCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsVUFBSyxHQUFMLEtBQUssQ0FBK0I7UUFDcEMsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7UUE1RHJDLHNCQUFpQixHQUViLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLEVBQ3hDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFDaEIsU0FBUzs7OztRQUFDLENBQUMsT0FBc0IsRUFBRSxFQUFFLENBQ25DLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNuQixjQUFjLENBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsTUFBTSxDQUNKLHNCQUFzQixDQUFDLDhCQUE4QixDQUNuRCxPQUFPLENBQUMsSUFBSSxDQUNiLENBQ0YsQ0FDRixDQUNGLEVBQ0QsTUFBTTs7OztRQUNKLENBQUMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFpQyxFQUFFLEVBQUUsQ0FDbkQsdUJBQXVCLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFDOUMsRUFDRCxHQUFHOzs7O1FBQ0QsQ0FBQyxDQUFDLElBQUksRUFBRSxRQUFRLENBQWlDLEVBQUUsRUFBRSxDQUNuRCxJQUFJLG9CQUFvQixDQUFDLGFBQWEsQ0FBQztZQUNyQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsS0FBSyxFQUFFLHNCQUFzQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUM7U0FDOUMsQ0FBQyxFQUNMLENBQ0YsRUFDRixDQUNGLENBQUM7UUFHRixvQkFBZSxHQUVYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLEVBQ3hDLEtBQUssQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQ3hCLFNBQVM7Ozs7UUFBQyxDQUFDLElBQXVCLEVBQUUsRUFBRTs7a0JBQzlCLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDL0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ2hFLE1BQU07Ozs7WUFDSixDQUFDLEtBQWEsRUFBRSxFQUFFLENBQ2hCLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFDL0QsRUFDRCxTQUFTOzs7WUFBQyxHQUFHLEVBQUUsQ0FDYixFQUFFLENBQ0EsSUFBSSxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7Z0JBQ3JDLElBQUk7Z0JBQ0osS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDLENBQ0gsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUM5QixDQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBTUMsQ0FBQzs7O1lBaEVMLFVBQVU7Ozs7WUEzQkYsT0FBTztZQUNDLEtBQUs7WUFZYixtQkFBbUI7O0FBaUIxQjtJQURDLE1BQU0sRUFBRTtzQ0FDVSxVQUFVOzhEQTZCM0I7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDUSxVQUFVOzREQXVCekI7OztJQXhERixnREE4QkU7O0lBRUYsOENBd0JFOzs7OztJQUdBLHVDQUF5Qjs7Ozs7SUFDekIsb0NBQTRDOzs7OztJQUM1QyxxQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZWxheSxcbiAgZmlsdGVyLFxuICBwbHVjayxcbiAgY29uY2F0TWFwLFxuICBzd2l0Y2hNYXAsXG4gIG1hcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9nbG9iYWwtbWVzc2FnZS1jb25maWcnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG59IGZyb20gJy4uLy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoR2xvYmFsTWVzc2FnZSB9IGZyb20gJy4uL2dsb2JhbC1tZXNzYWdlLXN0YXRlJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VTZWxlY3RvcnMgfSBmcm9tICcuLi9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgY291bnRPZkRlZXBFcXVhbE9iamVjdHMsXG4gIGluZGV4T2ZGaXJzdE9jY3VycmVuY2UsXG59IGZyb20gJy4uLy4uLy4uL3V0aWwvY29tcGFyZS1lcXVhbC1vYmplY3RzJztcbmltcG9ydCB7IFRyYW5zbGF0YWJsZSB9IGZyb20gJy4uLy4uLy4uL2kxOG4vdHJhbnNsYXRhYmxlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdsb2JhbE1lc3NhZ2VFZmZlY3Qge1xuICBARWZmZWN0KClcbiAgcmVtb3ZlRHVwbGljYXRlZCQ6IE9ic2VydmFibGU8XG4gICAgR2xvYmFsTWVzc2FnZUFjdGlvbnMuUmVtb3ZlTWVzc2FnZVxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShHbG9iYWxNZXNzYWdlQWN0aW9ucy5BRERfTUVTU0FHRSksXG4gICAgcGx1Y2soJ3BheWxvYWQnKSxcbiAgICBzd2l0Y2hNYXAoKG1lc3NhZ2U6IEdsb2JhbE1lc3NhZ2UpID0+XG4gICAgICBvZihtZXNzYWdlLnRleHQpLnBpcGUoXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICAgIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgICAgIHNlbGVjdChcbiAgICAgICAgICAgICAgR2xvYmFsTWVzc2FnZVNlbGVjdG9ycy5nZXRHbG9iYWxNZXNzYWdlRW50aXRpZXNCeVR5cGUoXG4gICAgICAgICAgICAgICAgbWVzc2FnZS50eXBlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIGZpbHRlcihcbiAgICAgICAgICAoW3RleHQsIG1lc3NhZ2VzXTogW1RyYW5zbGF0YWJsZSwgVHJhbnNsYXRhYmxlW11dKSA9PlxuICAgICAgICAgICAgY291bnRPZkRlZXBFcXVhbE9iamVjdHModGV4dCwgbWVzc2FnZXMpID4gMVxuICAgICAgICApLFxuICAgICAgICBtYXAoXG4gICAgICAgICAgKFt0ZXh0LCBtZXNzYWdlc106IFtUcmFuc2xhdGFibGUsIFRyYW5zbGF0YWJsZVtdXSkgPT5cbiAgICAgICAgICAgIG5ldyBHbG9iYWxNZXNzYWdlQWN0aW9ucy5SZW1vdmVNZXNzYWdlKHtcbiAgICAgICAgICAgICAgdHlwZTogbWVzc2FnZS50eXBlLFxuICAgICAgICAgICAgICBpbmRleDogaW5kZXhPZkZpcnN0T2NjdXJyZW5jZSh0ZXh0LCBtZXNzYWdlcyksXG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBoaWRlQWZ0ZXJEZWxheSQ6IE9ic2VydmFibGU8XG4gICAgR2xvYmFsTWVzc2FnZUFjdGlvbnMuUmVtb3ZlTWVzc2FnZVxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShHbG9iYWxNZXNzYWdlQWN0aW9ucy5BRERfTUVTU0FHRSksXG4gICAgcGx1Y2soJ3BheWxvYWQnLCAndHlwZScpLFxuICAgIGNvbmNhdE1hcCgodHlwZTogR2xvYmFsTWVzc2FnZVR5cGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnLmdsb2JhbE1lc3NhZ2VzW3R5cGVdO1xuICAgICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgc2VsZWN0KEdsb2JhbE1lc3NhZ2VTZWxlY3RvcnMuZ2V0R2xvYmFsTWVzc2FnZUNvdW50QnlUeXBlKHR5cGUpKSxcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIChjb3VudDogbnVtYmVyKSA9PlxuICAgICAgICAgICAgY29uZmlnICYmIGNvbmZpZy50aW1lb3V0ICE9PSB1bmRlZmluZWQgJiYgY291bnQgJiYgY291bnQgPiAwXG4gICAgICAgICksXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLlJlbW92ZU1lc3NhZ2Uoe1xuICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKS5waXBlKGRlbGF5KGNvbmZpZy50aW1lb3V0KSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGVXaXRoR2xvYmFsTWVzc2FnZT4sXG4gICAgcHJpdmF0ZSBjb25maWc6IEdsb2JhbE1lc3NhZ2VDb25maWdcbiAgKSB7fVxufVxuIl19
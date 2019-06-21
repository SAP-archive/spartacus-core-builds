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
            return this.store.select(getGlobalMessageCountByType(type)).pipe(filter((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL3N0b3JlL2VmZmVjdHMvZ2xvYmFsLW1lc3NhZ2UuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNFLE9BQU8sS0FBSyxvQkFBb0IsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQU9wRixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUEwQjlCLFlBQ1UsUUFBaUIsRUFDakIsS0FBMkIsRUFDM0IsTUFBMkI7UUFGM0IsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixVQUFLLEdBQUwsS0FBSyxDQUFzQjtRQUMzQixXQUFNLEdBQU4sTUFBTSxDQUFxQjtRQTNCckMsb0JBQWUsR0FFWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxFQUN4QyxLQUFLLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUN4QixRQUFROzs7O1FBQUMsQ0FBQyxJQUF1QixFQUFFLEVBQUU7O2tCQUM3QixNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQy9DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzlELE1BQU07Ozs7WUFDSixDQUFDLEtBQWEsRUFBRSxFQUFFLENBQ2hCLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFDL0QsRUFDRCxTQUFTOzs7O1lBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUMxQixFQUFFLENBQ0EsSUFBSSxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7Z0JBQ3JDLElBQUk7Z0JBQ0osS0FBSyxFQUFFLEtBQUssR0FBRyxDQUFDO2FBQ2pCLENBQUMsQ0FDSCxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQzlCLENBQ0YsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFNQyxDQUFDOzs7WUEvQkwsVUFBVTs7OztZQVpNLE9BQU87WUFEZixLQUFLO1lBTUwsbUJBQW1COztBQVUxQjtJQURDLE1BQU0sRUFBRTtzQ0FDUSxVQUFVOzREQXNCekI7OztJQXZCRiw4Q0F1QkU7Ozs7O0lBR0EsdUNBQXlCOzs7OztJQUN6QixvQ0FBbUM7Ozs7O0lBQ25DLHFDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0LCBBY3Rpb25zLCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheSwgZmlsdGVyLCBtZXJnZU1hcCwgcGx1Y2ssIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgR2xvYmFsTWVzc2FnZUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9nbG9iYWwtbWVzc2FnZS5hY3Rpb25zJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvZ2xvYmFsLW1lc3NhZ2UtY29uZmlnJztcbmltcG9ydCB7IGdldEdsb2JhbE1lc3NhZ2VDb3VudEJ5VHlwZSB9IGZyb20gJy4uL3NlbGVjdG9ycy9nbG9iYWwtbWVzc2FnZS5zZWxlY3RvcnMnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG59IGZyb20gJy4uLy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHbG9iYWxNZXNzYWdlRWZmZWN0IHtcbiAgQEVmZmVjdCgpXG4gIGhpZGVBZnRlckRlbGF5JDogT2JzZXJ2YWJsZTxcbiAgICBHbG9iYWxNZXNzYWdlQWN0aW9ucy5SZW1vdmVNZXNzYWdlXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEdsb2JhbE1lc3NhZ2VBY3Rpb25zLkFERF9NRVNTQUdFKSxcbiAgICBwbHVjaygncGF5bG9hZCcsICd0eXBlJyksXG4gICAgbWVyZ2VNYXAoKHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlKSA9PiB7XG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZy5nbG9iYWxNZXNzYWdlc1t0eXBlXTtcbiAgICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdChnZXRHbG9iYWxNZXNzYWdlQ291bnRCeVR5cGUodHlwZSkpLnBpcGUoXG4gICAgICAgIGZpbHRlcihcbiAgICAgICAgICAoY291bnQ6IG51bWJlcikgPT5cbiAgICAgICAgICAgIGNvbmZpZyAmJiBjb25maWcudGltZW91dCAhPT0gdW5kZWZpbmVkICYmIGNvdW50ICYmIGNvdW50ID4gMFxuICAgICAgICApLFxuICAgICAgICBzd2l0Y2hNYXAoKGNvdW50OiBudW1iZXIpID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgR2xvYmFsTWVzc2FnZUFjdGlvbnMuUmVtb3ZlTWVzc2FnZSh7XG4gICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgIGluZGV4OiBjb3VudCAtIDEsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICkucGlwZShkZWxheShjb25maWcudGltZW91dCkpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPEdsb2JhbE1lc3NhZ2U+LFxuICAgIHByaXZhdGUgY29uZmlnOiBHbG9iYWxNZXNzYWdlQ29uZmlnXG4gICkge31cbn1cbiJdfQ==
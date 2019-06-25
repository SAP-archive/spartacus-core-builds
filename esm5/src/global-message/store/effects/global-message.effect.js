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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL3N0b3JlL2VmZmVjdHMvZ2xvYmFsLW1lc3NhZ2UuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUV6RSxPQUFPLEtBQUssb0JBQW9CLE1BQU0sbUNBQW1DLENBQUM7QUFFMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFNUQ7SUE0QkUsNkJBQ1UsUUFBaUIsRUFDakIsS0FBb0MsRUFDcEMsTUFBMkI7UUFIckMsaUJBSUk7UUFITSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLFVBQUssR0FBTCxLQUFLLENBQStCO1FBQ3BDLFdBQU0sR0FBTixNQUFNLENBQXFCO1FBNUJyQyxvQkFBZSxHQUVYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLEVBQ3hDLEtBQUssQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQ3hCLFFBQVE7Ozs7UUFBQyxVQUFDLElBQXVCOztnQkFDekIsTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUMvQyxPQUFPLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsc0JBQXNCLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDaEUsTUFBTTs7OztZQUNKLFVBQUMsS0FBYTtnQkFDWixPQUFBLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxLQUFLLElBQUksS0FBSyxHQUFHLENBQUM7WUFBNUQsQ0FBNEQsRUFDL0QsRUFDRCxTQUFTOzs7O1lBQUMsVUFBQyxLQUFhO2dCQUN0QixPQUFBLEVBQUUsQ0FDQSxJQUFJLG9CQUFvQixDQUFDLGFBQWEsQ0FBQztvQkFDckMsSUFBSSxNQUFBO29CQUNKLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQztpQkFDakIsQ0FBQyxDQUNILENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFMN0IsQ0FLNkIsRUFDOUIsQ0FDRixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQU1DLENBQUM7O2dCQWhDTCxVQUFVOzs7O2dCQVZGLE9BQU87Z0JBQ0MsS0FBSztnQkFHYixtQkFBbUI7O0lBUzFCO1FBREMsTUFBTSxFQUFFOzBDQUNRLFVBQVU7Z0VBdUJ6QjtJQU9KLDBCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0FoQ1ksbUJBQW1COzs7SUFDOUIsOENBd0JFOzs7OztJQUdBLHVDQUF5Qjs7Ozs7SUFDekIsb0NBQTRDOzs7OztJQUM1QyxxQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheSwgZmlsdGVyLCBtZXJnZU1hcCwgcGx1Y2ssIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvZ2xvYmFsLW1lc3NhZ2UtY29uZmlnJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCAqIGFzIEdsb2JhbE1lc3NhZ2VBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvZ2xvYmFsLW1lc3NhZ2UuYWN0aW9ucyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlIH0gZnJvbSAnLi4vZ2xvYmFsLW1lc3NhZ2Utc3RhdGUnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVNlbGVjdG9ycyB9IGZyb20gJy4uL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHbG9iYWxNZXNzYWdlRWZmZWN0IHtcbiAgQEVmZmVjdCgpXG4gIGhpZGVBZnRlckRlbGF5JDogT2JzZXJ2YWJsZTxcbiAgICBHbG9iYWxNZXNzYWdlQWN0aW9ucy5SZW1vdmVNZXNzYWdlXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEdsb2JhbE1lc3NhZ2VBY3Rpb25zLkFERF9NRVNTQUdFKSxcbiAgICBwbHVjaygncGF5bG9hZCcsICd0eXBlJyksXG4gICAgbWVyZ2VNYXAoKHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlKSA9PiB7XG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZy5nbG9iYWxNZXNzYWdlc1t0eXBlXTtcbiAgICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgIHNlbGVjdChHbG9iYWxNZXNzYWdlU2VsZWN0b3JzLmdldEdsb2JhbE1lc3NhZ2VDb3VudEJ5VHlwZSh0eXBlKSksXG4gICAgICAgIGZpbHRlcihcbiAgICAgICAgICAoY291bnQ6IG51bWJlcikgPT5cbiAgICAgICAgICAgIGNvbmZpZyAmJiBjb25maWcudGltZW91dCAhPT0gdW5kZWZpbmVkICYmIGNvdW50ICYmIGNvdW50ID4gMFxuICAgICAgICApLFxuICAgICAgICBzd2l0Y2hNYXAoKGNvdW50OiBudW1iZXIpID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgR2xvYmFsTWVzc2FnZUFjdGlvbnMuUmVtb3ZlTWVzc2FnZSh7XG4gICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgIGluZGV4OiBjb3VudCAtIDEsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICkucGlwZShkZWxheShjb25maWcudGltZW91dCkpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aEdsb2JhbE1lc3NhZ2U+LFxuICAgIHByaXZhdGUgY29uZmlnOiBHbG9iYWxNZXNzYWdlQ29uZmlnXG4gICkge31cbn1cbiJdfQ==
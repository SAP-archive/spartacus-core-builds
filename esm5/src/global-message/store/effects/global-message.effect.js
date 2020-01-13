/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, Observable, of } from 'rxjs';
import { concatMap, delay, filter, map, pluck, switchMap, take, withLatestFrom, } from 'rxjs/operators';
import { GlobalMessageConfig } from '../../config/global-message-config';
import { GlobalMessageActions } from '../actions/index';
import { GlobalMessageSelectors } from '../selectors/index';
import { countOfDeepEqualObjects, indexOfFirstOccurrence, } from '../../../util/compare-equal-objects';
import { isPlatformBrowser } from '@angular/common';
var GlobalMessageEffect = /** @class */ (function () {
    function GlobalMessageEffect(actions$, store, config, platformId) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.config = config;
        this.platformId = platformId;
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
        this.hideAfterDelay$ = isPlatformBrowser(this.platformId) // we don't want to run this logic when doing SSR
            ? this.actions$.pipe(ofType(GlobalMessageActions.ADD_MESSAGE), pluck('payload', 'type'), concatMap((/**
             * @param {?} type
             * @return {?}
             */
            function (type) {
                /** @type {?} */
                var config = _this.config.globalMessages[type];
                return _this.store.pipe(select(GlobalMessageSelectors.getGlobalMessageCountByType(type)), take(1), filter((/**
                 * @param {?} count
                 * @return {?}
                 */
                function (count) {
                    return config && config.timeout !== undefined && count && count > 0;
                })), delay(config.timeout), switchMap((/**
                 * @return {?}
                 */
                function () {
                    return of(new GlobalMessageActions.RemoveMessage({
                        type: type,
                        index: 0,
                    }));
                })));
            })))
            : EMPTY;
    }
    GlobalMessageEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GlobalMessageEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: Store },
        { type: GlobalMessageConfig },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
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
    /**
     * @type {?}
     * @private
     */
    GlobalMessageEffect.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL3N0b3JlL2VmZmVjdHMvZ2xvYmFsLW1lc3NhZ2UuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLEdBQUcsRUFDSCxLQUFLLEVBQ0wsU0FBUyxFQUNULElBQUksRUFDSixjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUt6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLHNCQUFzQixHQUN2QixNQUFNLHFDQUFxQyxDQUFDO0FBRTdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBEO0lBZ0VFLDZCQUNVLFFBQWlCLEVBQ2pCLEtBQW9DLEVBQ3BDLE1BQTJCLEVBQ04sVUFBZTtRQUo5QyxpQkFLSTtRQUpNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsVUFBSyxHQUFMLEtBQUssQ0FBK0I7UUFDcEMsV0FB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amVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVNUFRZLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY29uY2F0TWFwLFxuICBkZWxheSxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHBsdWNrLFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvZ2xvYmFsLW1lc3NhZ2UtY29uZmlnJztcbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxufSBmcm9tICcuLi8uLi9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZUFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aEdsb2JhbE1lc3NhZ2UgfSBmcm9tICcuLi9nbG9iYWwtbWVzc2FnZS1zdGF0ZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU2VsZWN0b3JzIH0gZnJvbSAnLi4vc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7XG4gIGNvdW50T2ZEZWVwRXF1YWxPYmplY3RzLFxuICBpbmRleE9mRmlyc3RPY2N1cnJlbmNlLFxufSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbXBhcmUtZXF1YWwtb2JqZWN0cyc7XG5pbXBvcnQgeyBUcmFuc2xhdGFibGUgfSBmcm9tICcuLi8uLi8uLi9pMThuL3RyYW5zbGF0YWJsZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHbG9iYWxNZXNzYWdlRWZmZWN0IHtcbiAgQEVmZmVjdCgpXG4gIHJlbW92ZUR1cGxpY2F0ZWQkOiBPYnNlcnZhYmxlPFxuICAgIEdsb2JhbE1lc3NhZ2VBY3Rpb25zLlJlbW92ZU1lc3NhZ2VcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoR2xvYmFsTWVzc2FnZUFjdGlvbnMuQUREX01FU1NBR0UpLFxuICAgIHBsdWNrKCdwYXlsb2FkJyksXG4gICAgc3dpdGNoTWFwKChtZXNzYWdlOiBHbG9iYWxNZXNzYWdlKSA9PlxuICAgICAgb2YobWVzc2FnZS50ZXh0KS5waXBlKFxuICAgICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgICB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgICAgICBzZWxlY3QoXG4gICAgICAgICAgICAgIEdsb2JhbE1lc3NhZ2VTZWxlY3RvcnMuZ2V0R2xvYmFsTWVzc2FnZUVudGl0aWVzQnlUeXBlKFxuICAgICAgICAgICAgICAgIG1lc3NhZ2UudHlwZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgKFt0ZXh0LCBtZXNzYWdlc106IFtUcmFuc2xhdGFibGUsIFRyYW5zbGF0YWJsZVtdXSkgPT5cbiAgICAgICAgICAgIGNvdW50T2ZEZWVwRXF1YWxPYmplY3RzKHRleHQsIG1lc3NhZ2VzKSA+IDFcbiAgICAgICAgKSxcbiAgICAgICAgbWFwKFxuICAgICAgICAgIChbdGV4dCwgbWVzc2FnZXNdOiBbVHJhbnNsYXRhYmxlLCBUcmFuc2xhdGFibGVbXV0pID0+XG4gICAgICAgICAgICBuZXcgR2xvYmFsTWVzc2FnZUFjdGlvbnMuUmVtb3ZlTWVzc2FnZSh7XG4gICAgICAgICAgICAgIHR5cGU6IG1lc3NhZ2UudHlwZSxcbiAgICAgICAgICAgICAgaW5kZXg6IGluZGV4T2ZGaXJzdE9jY3VycmVuY2UodGV4dCwgbWVzc2FnZXMpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgaGlkZUFmdGVyRGVsYXkkOiBPYnNlcnZhYmxlPFxuICAgIEdsb2JhbE1lc3NhZ2VBY3Rpb25zLlJlbW92ZU1lc3NhZ2VcbiAgPiA9IGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgLy8gd2UgZG9uJ3Qgd2FudCB0byBydW4gdGhpcyBsb2dpYyB3aGVuIGRvaW5nIFNTUlxuICAgID8gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgICBvZlR5cGUoR2xvYmFsTWVzc2FnZUFjdGlvbnMuQUREX01FU1NBR0UpLFxuICAgICAgICBwbHVjaygncGF5bG9hZCcsICd0eXBlJyksXG4gICAgICAgIGNvbmNhdE1hcCgodHlwZTogR2xvYmFsTWVzc2FnZVR5cGUpID0+IHtcbiAgICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZy5nbG9iYWxNZXNzYWdlc1t0eXBlXTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICAgICAgc2VsZWN0KEdsb2JhbE1lc3NhZ2VTZWxlY3RvcnMuZ2V0R2xvYmFsTWVzc2FnZUNvdW50QnlUeXBlKHR5cGUpKSxcbiAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgICAgIChjb3VudDogbnVtYmVyKSA9PlxuICAgICAgICAgICAgICAgIGNvbmZpZyAmJiBjb25maWcudGltZW91dCAhPT0gdW5kZWZpbmVkICYmIGNvdW50ICYmIGNvdW50ID4gMFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGRlbGF5KGNvbmZpZy50aW1lb3V0KSxcbiAgICAgICAgICAgIHN3aXRjaE1hcCgoKSA9PlxuICAgICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgICBuZXcgR2xvYmFsTWVzc2FnZUFjdGlvbnMuUmVtb3ZlTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgOiBFTVBUWTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aEdsb2JhbE1lc3NhZ2U+LFxuICAgIHByaXZhdGUgY29uZmlnOiBHbG9iYWxNZXNzYWdlQ29uZmlnLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55XG4gICkge31cbn1cbiJdfQ==
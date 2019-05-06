/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Pipe, } from '@angular/core';
import { TranslationService } from './translation.service';
import { shallowEqualObjects } from './utils/shallow-equal-objects';
var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(service, cd) {
        this.service = service;
        this.cd = cd;
    }
    /**
     * @param {?} input
     * @param {?=} options
     * @return {?}
     */
    TranslatePipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} options
     * @return {?}
     */
    function (input, options) {
        if (options === void 0) { options = {}; }
        if (((/** @type {?} */ (input))).raw) {
            return ((/** @type {?} */ (input))).raw;
        }
        /** @type {?} */
        var key;
        if (typeof input === 'string') {
            key = input;
        }
        else {
            key = input.key;
            options = tslib_1.__assign({}, options, input.params);
        }
        this.translate(key, options);
        return this.translatedValue;
    };
    /**
     * @private
     * @param {?} key
     * @param {?} options
     * @return {?}
     */
    TranslatePipe.prototype.translate = /**
     * @private
     * @param {?} key
     * @param {?} options
     * @return {?}
     */
    function (key, options) {
        var _this = this;
        if (key !== this.lastKey ||
            !shallowEqualObjects(options, this.lastOptions)) {
            this.lastKey = key;
            this.lastOptions = options;
            if (this.sub) {
                this.sub.unsubscribe();
            }
            this.sub = this.service
                .translate(key, options, true)
                .subscribe(function (val) { return _this.markForCheck(val); });
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    TranslatePipe.prototype.markForCheck = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.translatedValue = value;
        this.cd.markForCheck();
    };
    /**
     * @return {?}
     */
    TranslatePipe.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    TranslatePipe.decorators = [
        { type: Pipe, args: [{ name: 'cxTranslate', pure: false },] }
    ];
    /** @nocollapse */
    TranslatePipe.ctorParameters = function () { return [
        { type: TranslationService },
        { type: ChangeDetectorRef }
    ]; };
    return TranslatePipe;
}());
export { TranslatePipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslatePipe.prototype.lastKey;
    /**
     * @type {?}
     * @private
     */
    TranslatePipe.prototype.lastOptions;
    /**
     * @type {?}
     * @private
     */
    TranslatePipe.prototype.translatedValue;
    /**
     * @type {?}
     * @private
     */
    TranslatePipe.prototype.sub;
    /**
     * @type {?}
     * @private
     */
    TranslatePipe.prototype.service;
    /**
     * @type {?}
     * @private
     */
    TranslatePipe.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi90cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFFakIsSUFBSSxHQUVMLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBR3BFO0lBT0UsdUJBQ1UsT0FBMkIsRUFDM0IsRUFBcUI7UUFEckIsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFDM0IsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7SUFDNUIsQ0FBQzs7Ozs7O0lBRUosaUNBQVM7Ozs7O0lBQVQsVUFDRSxLQUE0QixFQUM1QixPQUFnQztRQUFoQyx3QkFBQSxFQUFBLFlBQWdDO1FBRWhDLElBQUksQ0FBQyxtQkFBQSxLQUFLLEVBQWdCLENBQUMsQ0FBQyxHQUFHLEVBQUU7WUFDL0IsT0FBTyxDQUFDLG1CQUFBLEtBQUssRUFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQztTQUNwQzs7WUFFRyxHQUFXO1FBQ2YsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsR0FBRyxHQUFHLEtBQUssQ0FBQztTQUNiO2FBQU07WUFDTCxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUNoQixPQUFPLHdCQUFRLE9BQU8sRUFBSyxLQUFLLENBQUMsTUFBTSxDQUFFLENBQUM7U0FDM0M7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQzs7Ozs7OztJQUVPLGlDQUFTOzs7Ozs7SUFBakIsVUFBa0IsR0FBUSxFQUFFLE9BQWU7UUFBM0MsaUJBZUM7UUFkQyxJQUNFLEdBQUcsS0FBSyxJQUFJLENBQUMsT0FBTztZQUNwQixDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQy9DO1lBQ0EsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7WUFFM0IsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDeEI7WUFDRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPO2lCQUNwQixTQUFTLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUM7aUJBQzdCLFNBQVMsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7Ozs7OztJQUVPLG9DQUFZOzs7OztJQUFwQixVQUFxQixLQUFhO1FBQ2hDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELG1DQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOztnQkExREYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFOzs7O2dCQUpqQyxrQkFBa0I7Z0JBTnpCLGlCQUFpQjs7SUFxRW5CLG9CQUFDO0NBQUEsQUEzREQsSUEyREM7U0ExRFksYUFBYTs7Ozs7O0lBQ3hCLGdDQUF3Qjs7Ozs7SUFDeEIsb0NBQTRCOzs7OztJQUM1Qix3Q0FBZ0M7Ozs7O0lBQ2hDLDRCQUEwQjs7Ozs7SUFHeEIsZ0NBQW1DOzs7OztJQUNuQywyQkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25EZXN0cm95LFxuICBQaXBlLFxuICBQaXBlVHJhbnNmb3JtLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHNoYWxsb3dFcXVhbE9iamVjdHMgfSBmcm9tICcuL3V0aWxzL3NoYWxsb3ctZXF1YWwtb2JqZWN0cyc7XG5pbXBvcnQgeyBUcmFuc2xhdGFibGUsIFRyYW5zbGF0YWJsZVBhcmFtcyB9IGZyb20gJy4vdHJhbnNsYXRhYmxlJztcblxuQFBpcGUoeyBuYW1lOiAnY3hUcmFuc2xhdGUnLCBwdXJlOiBmYWxzZSB9KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGxhc3RLZXk6IHN0cmluZztcbiAgcHJpdmF0ZSBsYXN0T3B0aW9uczogb2JqZWN0O1xuICBwcml2YXRlIHRyYW5zbGF0ZWRWYWx1ZTogc3RyaW5nO1xuICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICB0cmFuc2Zvcm0oXG4gICAgaW5wdXQ6IFRyYW5zbGF0YWJsZSB8IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2xhdGFibGVQYXJhbXMgPSB7fVxuICApOiBzdHJpbmcge1xuICAgIGlmICgoaW5wdXQgYXMgVHJhbnNsYXRhYmxlKS5yYXcpIHtcbiAgICAgIHJldHVybiAoaW5wdXQgYXMgVHJhbnNsYXRhYmxlKS5yYXc7XG4gICAgfVxuXG4gICAgbGV0IGtleTogc3RyaW5nO1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBrZXkgPSBpbnB1dDtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5ID0gaW5wdXQua2V5O1xuICAgICAgb3B0aW9ucyA9IHsgLi4ub3B0aW9ucywgLi4uaW5wdXQucGFyYW1zIH07XG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2xhdGUoa2V5LCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVkVmFsdWU7XG4gIH1cblxuICBwcml2YXRlIHRyYW5zbGF0ZShrZXk6IGFueSwgb3B0aW9uczogb2JqZWN0KSB7XG4gICAgaWYgKFxuICAgICAga2V5ICE9PSB0aGlzLmxhc3RLZXkgfHxcbiAgICAgICFzaGFsbG93RXF1YWxPYmplY3RzKG9wdGlvbnMsIHRoaXMubGFzdE9wdGlvbnMpXG4gICAgKSB7XG4gICAgICB0aGlzLmxhc3RLZXkgPSBrZXk7XG4gICAgICB0aGlzLmxhc3RPcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgaWYgKHRoaXMuc3ViKSB7XG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnN1YiA9IHRoaXMuc2VydmljZVxuICAgICAgICAudHJhbnNsYXRlKGtleSwgb3B0aW9ucywgdHJ1ZSlcbiAgICAgICAgLnN1YnNjcmliZSh2YWwgPT4gdGhpcy5tYXJrRm9yQ2hlY2sodmFsKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtYXJrRm9yQ2hlY2sodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMudHJhbnNsYXRlZFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1Yikge1xuICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
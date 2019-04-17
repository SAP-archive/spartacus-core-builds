/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Pipe, } from '@angular/core';
import { TranslationService } from './translation.service';
import { shallowEqualObjects } from './utils/shallow-equal-objects';
var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(service, cd) {
        this.service = service;
        this.cd = cd;
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    TranslatePipe.prototype.transform = /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    function (key, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
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
        return this.value;
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
        this.value = value;
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
    TranslatePipe.prototype.value;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi90cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUVqQixJQUFJLEdBRUwsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFcEU7SUFPRSx1QkFDVSxPQUEyQixFQUMzQixFQUFxQjtRQURyQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQUMzQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtJQUM1QixDQUFDOzs7Ozs7SUFFSixpQ0FBUzs7Ozs7SUFBVCxVQUFVLEdBQVEsRUFBRSxPQUFvQjtRQUF4QyxpQkFnQkM7UUFoQm1CLHdCQUFBLEVBQUEsWUFBb0I7UUFDdEMsSUFDRSxHQUFHLEtBQUssSUFBSSxDQUFDLE9BQU87WUFDcEIsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUMvQztZQUNBLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1lBRTNCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDWixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3hCO1lBQ0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTztpQkFDcEIsU0FBUyxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDO2lCQUM3QixTQUFTLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7U0FDN0M7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7O0lBRU8sb0NBQVk7Ozs7O0lBQXBCLFVBQXFCLEtBQWE7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsbUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7O2dCQXZDRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7Ozs7Z0JBSGpDLGtCQUFrQjtnQkFOekIsaUJBQWlCOztJQWlEbkIsb0JBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQXZDWSxhQUFhOzs7Ozs7SUFDeEIsZ0NBQXdCOzs7OztJQUN4QixvQ0FBNEI7Ozs7O0lBQzVCLDhCQUFzQjs7Ozs7SUFDdEIsNEJBQTBCOzs7OztJQUd4QixnQ0FBbUM7Ozs7O0lBQ25DLDJCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkRlc3Ryb3ksXG4gIFBpcGUsXG4gIFBpcGVUcmFuc2Zvcm0sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgc2hhbGxvd0VxdWFsT2JqZWN0cyB9IGZyb20gJy4vdXRpbHMvc2hhbGxvdy1lcXVhbC1vYmplY3RzJztcblxuQFBpcGUoeyBuYW1lOiAnY3hUcmFuc2xhdGUnLCBwdXJlOiBmYWxzZSB9KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGxhc3RLZXk6IHN0cmluZztcbiAgcHJpdmF0ZSBsYXN0T3B0aW9uczogb2JqZWN0O1xuICBwcml2YXRlIHZhbHVlOiBzdHJpbmc7XG4gIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIHRyYW5zZm9ybShrZXk6IGFueSwgb3B0aW9uczogb2JqZWN0ID0ge30pOiBzdHJpbmcge1xuICAgIGlmIChcbiAgICAgIGtleSAhPT0gdGhpcy5sYXN0S2V5IHx8XG4gICAgICAhc2hhbGxvd0VxdWFsT2JqZWN0cyhvcHRpb25zLCB0aGlzLmxhc3RPcHRpb25zKVxuICAgICkge1xuICAgICAgdGhpcy5sYXN0S2V5ID0ga2V5O1xuICAgICAgdGhpcy5sYXN0T3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgIGlmICh0aGlzLnN1Yikge1xuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdWIgPSB0aGlzLnNlcnZpY2VcbiAgICAgICAgLnRyYW5zbGF0ZShrZXksIG9wdGlvbnMsIHRydWUpXG4gICAgICAgIC5zdWJzY3JpYmUodmFsID0+IHRoaXMubWFya0ZvckNoZWNrKHZhbCkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgbWFya0ZvckNoZWNrKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1Yikge1xuICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
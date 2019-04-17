/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Pipe, } from '@angular/core';
import { TranslationService } from './translation.service';
import { shallowEqualObjects } from './utils/shallow-equal-objects';
export class TranslatePipe {
    /**
     * @param {?} service
     * @param {?} cd
     */
    constructor(service, cd) {
        this.service = service;
        this.cd = cd;
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    transform(key, options = {}) {
        if (key !== this.lastKey ||
            !shallowEqualObjects(options, this.lastOptions)) {
            this.lastKey = key;
            this.lastOptions = options;
            if (this.sub) {
                this.sub.unsubscribe();
            }
            this.sub = this.service
                .translate(key, options, true)
                .subscribe(val => this.markForCheck(val));
        }
        return this.value;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    markForCheck(value) {
        this.value = value;
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
TranslatePipe.decorators = [
    { type: Pipe, args: [{ name: 'cxTranslate', pure: false },] }
];
/** @nocollapse */
TranslatePipe.ctorParameters = () => [
    { type: TranslationService },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi90cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUVqQixJQUFJLEdBRUwsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHcEUsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBTXhCLFlBQ1UsT0FBMkIsRUFDM0IsRUFBcUI7UUFEckIsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFDM0IsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7SUFDNUIsQ0FBQzs7Ozs7O0lBRUosU0FBUyxDQUFDLEdBQVEsRUFBRSxVQUFrQixFQUFFO1FBQ3RDLElBQ0UsR0FBRyxLQUFLLElBQUksQ0FBQyxPQUFPO1lBQ3BCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDL0M7WUFDQSxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztZQUUzQixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN4QjtZQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU87aUJBQ3BCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQztpQkFDN0IsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7O1lBdkNGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTs7OztZQUhqQyxrQkFBa0I7WUFOekIsaUJBQWlCOzs7Ozs7O0lBV2pCLGdDQUF3Qjs7Ozs7SUFDeEIsb0NBQTRCOzs7OztJQUM1Qiw4QkFBc0I7Ozs7O0lBQ3RCLDRCQUEwQjs7Ozs7SUFHeEIsZ0NBQW1DOzs7OztJQUNuQywyQkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25EZXN0cm95LFxuICBQaXBlLFxuICBQaXBlVHJhbnNmb3JtLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHNoYWxsb3dFcXVhbE9iamVjdHMgfSBmcm9tICcuL3V0aWxzL3NoYWxsb3ctZXF1YWwtb2JqZWN0cyc7XG5cbkBQaXBlKHsgbmFtZTogJ2N4VHJhbnNsYXRlJywgcHVyZTogZmFsc2UgfSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBsYXN0S2V5OiBzdHJpbmc7XG4gIHByaXZhdGUgbGFzdE9wdGlvbnM6IG9iamVjdDtcbiAgcHJpdmF0ZSB2YWx1ZTogc3RyaW5nO1xuICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICB0cmFuc2Zvcm0oa2V5OiBhbnksIG9wdGlvbnM6IG9iamVjdCA9IHt9KTogc3RyaW5nIHtcbiAgICBpZiAoXG4gICAgICBrZXkgIT09IHRoaXMubGFzdEtleSB8fFxuICAgICAgIXNoYWxsb3dFcXVhbE9iamVjdHMob3B0aW9ucywgdGhpcy5sYXN0T3B0aW9ucylcbiAgICApIHtcbiAgICAgIHRoaXMubGFzdEtleSA9IGtleTtcbiAgICAgIHRoaXMubGFzdE9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICBpZiAodGhpcy5zdWIpIHtcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3ViID0gdGhpcy5zZXJ2aWNlXG4gICAgICAgIC50cmFuc2xhdGUoa2V5LCBvcHRpb25zLCB0cnVlKVxuICAgICAgICAuc3Vic2NyaWJlKHZhbCA9PiB0aGlzLm1hcmtGb3JDaGVjayh2YWwpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIG1hcmtGb3JDaGVjayh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWIpIHtcbiAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=
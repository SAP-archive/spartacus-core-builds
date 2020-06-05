import { __assign, __decorate } from "tslib";
import { ChangeDetectorRef, isDevMode, OnDestroy, Pipe, PipeTransform, } from '@angular/core';
import { shallowEqualObjects } from '../util/compare-equal-objects';
import { TranslationService } from './translation.service';
var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(service, cd) {
        this.service = service;
        this.cd = cd;
    }
    TranslatePipe.prototype.transform = function (input, options) {
        if (options === void 0) { options = {}; }
        if (!input) {
            if (isDevMode()) {
                console.error("The given input for the cxTranslate pipe (" + input + ") is invalid and cannot be translated");
            }
            return;
        }
        if (input.raw) {
            return input.raw;
        }
        var key = typeof input === 'string' ? input : input.key;
        if (typeof input !== 'string') {
            options = __assign(__assign({}, options), input.params);
        }
        this.translate(key, options);
        return this.translatedValue;
    };
    TranslatePipe.prototype.translate = function (key, options) {
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
    TranslatePipe.prototype.markForCheck = function (value) {
        this.translatedValue = value;
        this.cd.markForCheck();
    };
    TranslatePipe.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    TranslatePipe.ctorParameters = function () { return [
        { type: TranslationService },
        { type: ChangeDetectorRef }
    ]; };
    TranslatePipe = __decorate([
        Pipe({ name: 'cxTranslate', pure: false })
    ], TranslatePipe);
    return TranslatePipe;
}());
export { TranslatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi90cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsU0FBUyxFQUNULElBQUksRUFDSixhQUFhLEdBQ2QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHM0Q7SUFNRSx1QkFDWSxPQUEyQixFQUMzQixFQUFxQjtRQURyQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQUMzQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtJQUM5QixDQUFDO0lBRUosaUNBQVMsR0FBVCxVQUNFLEtBQTRCLEVBQzVCLE9BQWdDO1FBQWhDLHdCQUFBLEVBQUEsWUFBZ0M7UUFFaEMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLElBQUksU0FBUyxFQUFFLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLEtBQUssQ0FDWCwrQ0FBNkMsS0FBSywwQ0FBdUMsQ0FDMUYsQ0FBQzthQUNIO1lBQ0QsT0FBTztTQUNSO1FBRUQsSUFBSyxLQUFzQixDQUFDLEdBQUcsRUFBRTtZQUMvQixPQUFRLEtBQXNCLENBQUMsR0FBRyxDQUFDO1NBQ3BDO1FBRUQsSUFBTSxHQUFHLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDMUQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyx5QkFBUSxPQUFPLEdBQUssS0FBSyxDQUFDLE1BQU0sQ0FBRSxDQUFDO1NBQzNDO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFTyxpQ0FBUyxHQUFqQixVQUFrQixHQUFRLEVBQUUsT0FBZTtRQUEzQyxpQkFlQztRQWRDLElBQ0UsR0FBRyxLQUFLLElBQUksQ0FBQyxPQUFPO1lBQ3BCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDL0M7WUFDQSxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztZQUUzQixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN4QjtZQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU87aUJBQ3BCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQztpQkFDN0IsU0FBUyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUVPLG9DQUFZLEdBQXBCLFVBQXFCLEtBQWE7UUFDaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOztnQkF4RG9CLGtCQUFrQjtnQkFDdkIsaUJBQWlCOztJQVJ0QixhQUFhO1FBRHpCLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO09BQzlCLGFBQWEsQ0FnRXpCO0lBQUQsb0JBQUM7Q0FBQSxBQWhFRCxJQWdFQztTQWhFWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIGlzRGV2TW9kZSxcbiAgT25EZXN0cm95LFxuICBQaXBlLFxuICBQaXBlVHJhbnNmb3JtLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2hhbGxvd0VxdWFsT2JqZWN0cyB9IGZyb20gJy4uL3V0aWwvY29tcGFyZS1lcXVhbC1vYmplY3RzJztcbmltcG9ydCB7IFRyYW5zbGF0YWJsZSwgVHJhbnNsYXRhYmxlUGFyYW1zIH0gZnJvbSAnLi90cmFuc2xhdGFibGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcblxuQFBpcGUoeyBuYW1lOiAnY3hUcmFuc2xhdGUnLCBwdXJlOiBmYWxzZSB9KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGxhc3RLZXk6IHN0cmluZztcbiAgcHJpdmF0ZSBsYXN0T3B0aW9uczogb2JqZWN0O1xuICBwcml2YXRlIHRyYW5zbGF0ZWRWYWx1ZTogc3RyaW5nO1xuICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgdHJhbnNmb3JtKFxuICAgIGlucHV0OiBUcmFuc2xhdGFibGUgfCBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNsYXRhYmxlUGFyYW1zID0ge31cbiAgKTogc3RyaW5nIHtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBgVGhlIGdpdmVuIGlucHV0IGZvciB0aGUgY3hUcmFuc2xhdGUgcGlwZSAoJHtpbnB1dH0pIGlzIGludmFsaWQgYW5kIGNhbm5vdCBiZSB0cmFuc2xhdGVkYFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICgoaW5wdXQgYXMgVHJhbnNsYXRhYmxlKS5yYXcpIHtcbiAgICAgIHJldHVybiAoaW5wdXQgYXMgVHJhbnNsYXRhYmxlKS5yYXc7XG4gICAgfVxuXG4gICAgY29uc3Qga2V5ID0gdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyA/IGlucHV0IDogaW5wdXQua2V5O1xuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHRpb25zID0geyAuLi5vcHRpb25zLCAuLi5pbnB1dC5wYXJhbXMgfTtcbiAgICB9XG5cbiAgICB0aGlzLnRyYW5zbGF0ZShrZXksIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZWRWYWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNsYXRlKGtleTogYW55LCBvcHRpb25zOiBvYmplY3QpIHtcbiAgICBpZiAoXG4gICAgICBrZXkgIT09IHRoaXMubGFzdEtleSB8fFxuICAgICAgIXNoYWxsb3dFcXVhbE9iamVjdHMob3B0aW9ucywgdGhpcy5sYXN0T3B0aW9ucylcbiAgICApIHtcbiAgICAgIHRoaXMubGFzdEtleSA9IGtleTtcbiAgICAgIHRoaXMubGFzdE9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICBpZiAodGhpcy5zdWIpIHtcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3ViID0gdGhpcy5zZXJ2aWNlXG4gICAgICAgIC50cmFuc2xhdGUoa2V5LCBvcHRpb25zLCB0cnVlKVxuICAgICAgICAuc3Vic2NyaWJlKCh2YWwpID0+IHRoaXMubWFya0ZvckNoZWNrKHZhbCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbWFya0ZvckNoZWNrKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRyYW5zbGF0ZWRWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWIpIHtcbiAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=
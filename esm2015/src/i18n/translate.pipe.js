import { __decorate } from "tslib";
import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform, } from '@angular/core';
import { TranslationService } from './translation.service';
import { shallowEqualObjects } from '../util/compare-equal-objects';
let TranslatePipe = class TranslatePipe {
    constructor(service, cd) {
        this.service = service;
        this.cd = cd;
    }
    transform(input, options = {}) {
        if (input.raw) {
            return input.raw;
        }
        const key = typeof input === 'string' ? input : input.key;
        if (typeof input !== 'string') {
            options = Object.assign(Object.assign({}, options), input.params);
        }
        this.translate(key, options);
        return this.translatedValue;
    }
    translate(key, options) {
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
    }
    markForCheck(value) {
        this.translatedValue = value;
        this.cd.markForCheck();
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
};
TranslatePipe.ctorParameters = () => [
    { type: TranslationService },
    { type: ChangeDetectorRef }
];
TranslatePipe = __decorate([
    Pipe({ name: 'cxTranslate', pure: false })
], TranslatePipe);
export { TranslatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi90cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsSUFBSSxFQUNKLGFBQWEsR0FDZCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUlwRSxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBTXhCLFlBQ1ksT0FBMkIsRUFDM0IsRUFBcUI7UUFEckIsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFDM0IsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7SUFDOUIsQ0FBQztJQUVKLFNBQVMsQ0FDUCxLQUE0QixFQUM1QixVQUE4QixFQUFFO1FBRWhDLElBQUssS0FBc0IsQ0FBQyxHQUFHLEVBQUU7WUFDL0IsT0FBUSxLQUFzQixDQUFDLEdBQUcsQ0FBQztTQUNwQztRQUVELE1BQU0sR0FBRyxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzFELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sbUNBQVEsT0FBTyxHQUFLLEtBQUssQ0FBQyxNQUFNLENBQUUsQ0FBQztTQUMzQztRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBRU8sU0FBUyxDQUFDLEdBQVEsRUFBRSxPQUFlO1FBQ3pDLElBQ0UsR0FBRyxLQUFLLElBQUksQ0FBQyxPQUFPO1lBQ3BCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDL0M7WUFDQSxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztZQUUzQixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN4QjtZQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU87aUJBQ3BCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQztpQkFDN0IsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQztJQUVPLFlBQVksQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBaERzQixrQkFBa0I7WUFDdkIsaUJBQWlCOztBQVJ0QixhQUFhO0lBRHpCLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0dBQzlCLGFBQWEsQ0F1RHpCO1NBdkRZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25EZXN0cm95LFxuICBQaXBlLFxuICBQaXBlVHJhbnNmb3JtLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHNoYWxsb3dFcXVhbE9iamVjdHMgfSBmcm9tICcuLi91dGlsL2NvbXBhcmUtZXF1YWwtb2JqZWN0cyc7XG5pbXBvcnQgeyBUcmFuc2xhdGFibGUsIFRyYW5zbGF0YWJsZVBhcmFtcyB9IGZyb20gJy4vdHJhbnNsYXRhYmxlJztcblxuQFBpcGUoeyBuYW1lOiAnY3hUcmFuc2xhdGUnLCBwdXJlOiBmYWxzZSB9KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGxhc3RLZXk6IHN0cmluZztcbiAgcHJpdmF0ZSBsYXN0T3B0aW9uczogb2JqZWN0O1xuICBwcml2YXRlIHRyYW5zbGF0ZWRWYWx1ZTogc3RyaW5nO1xuICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgdHJhbnNmb3JtKFxuICAgIGlucHV0OiBUcmFuc2xhdGFibGUgfCBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNsYXRhYmxlUGFyYW1zID0ge31cbiAgKTogc3RyaW5nIHtcbiAgICBpZiAoKGlucHV0IGFzIFRyYW5zbGF0YWJsZSkucmF3KSB7XG4gICAgICByZXR1cm4gKGlucHV0IGFzIFRyYW5zbGF0YWJsZSkucmF3O1xuICAgIH1cblxuICAgIGNvbnN0IGtleSA9IHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgPyBpbnB1dCA6IGlucHV0LmtleTtcbiAgICBpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJykge1xuICAgICAgb3B0aW9ucyA9IHsgLi4ub3B0aW9ucywgLi4uaW5wdXQucGFyYW1zIH07XG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2xhdGUoa2V5LCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVkVmFsdWU7XG4gIH1cblxuICBwcml2YXRlIHRyYW5zbGF0ZShrZXk6IGFueSwgb3B0aW9uczogb2JqZWN0KSB7XG4gICAgaWYgKFxuICAgICAga2V5ICE9PSB0aGlzLmxhc3RLZXkgfHxcbiAgICAgICFzaGFsbG93RXF1YWxPYmplY3RzKG9wdGlvbnMsIHRoaXMubGFzdE9wdGlvbnMpXG4gICAgKSB7XG4gICAgICB0aGlzLmxhc3RLZXkgPSBrZXk7XG4gICAgICB0aGlzLmxhc3RPcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgaWYgKHRoaXMuc3ViKSB7XG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnN1YiA9IHRoaXMuc2VydmljZVxuICAgICAgICAudHJhbnNsYXRlKGtleSwgb3B0aW9ucywgdHJ1ZSlcbiAgICAgICAgLnN1YnNjcmliZSh2YWwgPT4gdGhpcy5tYXJrRm9yQ2hlY2sodmFsKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtYXJrRm9yQ2hlY2sodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMudHJhbnNsYXRlZFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1Yikge1xuICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
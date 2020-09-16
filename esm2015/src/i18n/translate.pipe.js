import { ChangeDetectorRef, isDevMode, Pipe, } from '@angular/core';
import { shallowEqualObjects } from '../util/compare-equal-objects';
import { TranslationService } from './translation.service';
export class TranslatePipe {
    constructor(service, cd) {
        this.service = service;
        this.cd = cd;
    }
    transform(input, options = {}) {
        if (!input) {
            if (isDevMode()) {
                console.error(`The given input for the cxTranslate pipe (${input}) is invalid and cannot be translated`);
            }
            return;
        }
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
                .subscribe((val) => this.markForCheck(val));
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
}
TranslatePipe.decorators = [
    { type: Pipe, args: [{ name: 'cxTranslate', pure: false },] }
];
TranslatePipe.ctorParameters = () => [
    { type: TranslationService },
    { type: ChangeDetectorRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9pMThuL3RyYW5zbGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUVULElBQUksR0FFTCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUczRCxNQUFNLE9BQU8sYUFBYTtJQU14QixZQUNZLE9BQTJCLEVBQzNCLEVBQXFCO1FBRHJCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBQzNCLE9BQUUsR0FBRixFQUFFLENBQW1CO0lBQzlCLENBQUM7SUFFSixTQUFTLENBQ1AsS0FBNEIsRUFDNUIsVUFBOEIsRUFBRTtRQUVoQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsSUFBSSxTQUFTLEVBQUUsRUFBRTtnQkFDZixPQUFPLENBQUMsS0FBSyxDQUNYLDZDQUE2QyxLQUFLLHVDQUF1QyxDQUMxRixDQUFDO2FBQ0g7WUFDRCxPQUFPO1NBQ1I7UUFFRCxJQUFLLEtBQXNCLENBQUMsR0FBRyxFQUFFO1lBQy9CLE9BQVEsS0FBc0IsQ0FBQyxHQUFHLENBQUM7U0FDcEM7UUFFRCxNQUFNLEdBQUcsR0FBRyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUMxRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixPQUFPLG1DQUFRLE9BQU8sR0FBSyxLQUFLLENBQUMsTUFBTSxDQUFFLENBQUM7U0FDM0M7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVPLFNBQVMsQ0FBQyxHQUFRLEVBQUUsT0FBZTtRQUN6QyxJQUNFLEdBQUcsS0FBSyxJQUFJLENBQUMsT0FBTztZQUNwQixDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQy9DO1lBQ0EsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7WUFFM0IsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDeEI7WUFDRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPO2lCQUNwQixTQUFTLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUM7aUJBQzdCLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUVPLFlBQVksQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7O1lBaEVGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTs7O1lBRmpDLGtCQUFrQjtZQVR6QixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgaXNEZXZNb2RlLFxuICBPbkRlc3Ryb3ksXG4gIFBpcGUsXG4gIFBpcGVUcmFuc2Zvcm0sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzaGFsbG93RXF1YWxPYmplY3RzIH0gZnJvbSAnLi4vdXRpbC9jb21wYXJlLWVxdWFsLW9iamVjdHMnO1xuaW1wb3J0IHsgVHJhbnNsYXRhYmxlLCBUcmFuc2xhdGFibGVQYXJhbXMgfSBmcm9tICcuL3RyYW5zbGF0YWJsZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuXG5AUGlwZSh7IG5hbWU6ICdjeFRyYW5zbGF0ZScsIHB1cmU6IGZhbHNlIH0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0sIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgbGFzdEtleTogc3RyaW5nO1xuICBwcml2YXRlIGxhc3RPcHRpb25zOiBvYmplY3Q7XG4gIHByaXZhdGUgdHJhbnNsYXRlZFZhbHVlOiBzdHJpbmc7XG4gIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICB0cmFuc2Zvcm0oXG4gICAgaW5wdXQ6IFRyYW5zbGF0YWJsZSB8IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2xhdGFibGVQYXJhbXMgPSB7fVxuICApOiBzdHJpbmcge1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIGBUaGUgZ2l2ZW4gaW5wdXQgZm9yIHRoZSBjeFRyYW5zbGF0ZSBwaXBlICgke2lucHV0fSkgaXMgaW52YWxpZCBhbmQgY2Fubm90IGJlIHRyYW5zbGF0ZWRgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKChpbnB1dCBhcyBUcmFuc2xhdGFibGUpLnJhdykge1xuICAgICAgcmV0dXJuIChpbnB1dCBhcyBUcmFuc2xhdGFibGUpLnJhdztcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnID8gaW5wdXQgOiBpbnB1dC5rZXk7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdGlvbnMgPSB7IC4uLm9wdGlvbnMsIC4uLmlucHV0LnBhcmFtcyB9O1xuICAgIH1cblxuICAgIHRoaXMudHJhbnNsYXRlKGtleSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlZFZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGUoa2V5OiBhbnksIG9wdGlvbnM6IG9iamVjdCkge1xuICAgIGlmIChcbiAgICAgIGtleSAhPT0gdGhpcy5sYXN0S2V5IHx8XG4gICAgICAhc2hhbGxvd0VxdWFsT2JqZWN0cyhvcHRpb25zLCB0aGlzLmxhc3RPcHRpb25zKVxuICAgICkge1xuICAgICAgdGhpcy5sYXN0S2V5ID0ga2V5O1xuICAgICAgdGhpcy5sYXN0T3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgIGlmICh0aGlzLnN1Yikge1xuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdWIgPSB0aGlzLnNlcnZpY2VcbiAgICAgICAgLnRyYW5zbGF0ZShrZXksIG9wdGlvbnMsIHRydWUpXG4gICAgICAgIC5zdWJzY3JpYmUoKHZhbCkgPT4gdGhpcy5tYXJrRm9yQ2hlY2sodmFsKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtYXJrRm9yQ2hlY2sodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMudHJhbnNsYXRlZFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1Yikge1xuICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
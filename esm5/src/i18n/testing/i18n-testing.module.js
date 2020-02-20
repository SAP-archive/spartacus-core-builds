import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { MockTranslatePipe } from './mock-translate.pipe';
import { TranslationService } from '../translation.service';
import { MockTranslationService } from './mock-translation.service';
import { MockDatePipe } from './mock-date.pipe';
var I18nTestingModule = /** @class */ (function () {
    function I18nTestingModule() {
    }
    I18nTestingModule = __decorate([
        NgModule({
            declarations: [MockTranslatePipe, MockDatePipe],
            exports: [MockTranslatePipe, MockDatePipe],
            providers: [
                { provide: TranslationService, useClass: MockTranslationService },
            ],
        })
    ], I18nTestingModule);
    return I18nTestingModule;
}());
export { I18nTestingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi10ZXN0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL3Rlc3RpbmcvaTE4bi10ZXN0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFTaEQ7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGlCQUFpQjtRQVA3QixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxZQUFZLENBQUM7WUFDL0MsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDO1lBQzFDLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUU7YUFDbEU7U0FDRixDQUFDO09BQ1csaUJBQWlCLENBQUc7SUFBRCx3QkFBQztDQUFBLEFBQWpDLElBQWlDO1NBQXBCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2NrVHJhbnNsYXRlUGlwZSB9IGZyb20gJy4vbW9jay10cmFuc2xhdGUucGlwZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1vY2tUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuL21vY2stdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNb2NrRGF0ZVBpcGUgfSBmcm9tICcuL21vY2stZGF0ZS5waXBlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTW9ja1RyYW5zbGF0ZVBpcGUsIE1vY2tEYXRlUGlwZV0sXG4gIGV4cG9ydHM6IFtNb2NrVHJhbnNsYXRlUGlwZSwgTW9ja0RhdGVQaXBlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBUcmFuc2xhdGlvblNlcnZpY2UsIHVzZUNsYXNzOiBNb2NrVHJhbnNsYXRpb25TZXJ2aWNlIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEkxOG5UZXN0aW5nTW9kdWxlIHt9XG4iXX0=
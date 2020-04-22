import { __decorate, __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '../config/config.module';
import { defaultAnonymousConsentsConfig } from './config/default-anonymous-consents-config';
import { AnonymousConsentsService } from './facade/anonymous-consents.service';
import { interceptors } from './http-interceptors/index';
import { AnonymousConsentsStoreModule } from './store/anonymous-consents-store.module';
var AnonymousConsentsModule = /** @class */ (function () {
    function AnonymousConsentsModule() {
    }
    AnonymousConsentsModule_1 = AnonymousConsentsModule;
    AnonymousConsentsModule.forRoot = function () {
        return {
            ngModule: AnonymousConsentsModule_1,
            providers: __spread(interceptors, [
                AnonymousConsentsService,
                provideDefaultConfig(defaultAnonymousConsentsConfig),
            ]),
        };
    };
    var AnonymousConsentsModule_1;
    AnonymousConsentsModule = AnonymousConsentsModule_1 = __decorate([
        NgModule({
            imports: [AnonymousConsentsStoreModule],
        })
    ], AnonymousConsentsModule);
    return AnonymousConsentsModule;
}());
export { AnonymousConsentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvYW5vbnltb3VzLWNvbnNlbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDNUYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBS3ZGO0lBQUE7SUFXQSxDQUFDO2dDQVhZLHVCQUF1QjtJQUMzQiwrQkFBTyxHQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSx5QkFBdUI7WUFDakMsU0FBUyxXQUNKLFlBQVk7Z0JBQ2Ysd0JBQXdCO2dCQUN4QixvQkFBb0IsQ0FBQyw4QkFBOEIsQ0FBQztjQUNyRDtTQUNGLENBQUM7SUFDSixDQUFDOztJQVZVLHVCQUF1QjtRQUhuQyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUN4QyxDQUFDO09BQ1csdUJBQXVCLENBV25DO0lBQUQsOEJBQUM7Q0FBQSxBQVhELElBV0M7U0FYWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBkZWZhdWx0QW5vbnltb3VzQ29uc2VudHNDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LWFub255bW91cy1jb25zZW50cy1jb25maWcnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvYW5vbnltb3VzLWNvbnNlbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgaW50ZXJjZXB0b3JzIH0gZnJvbSAnLi9odHRwLWludGVyY2VwdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c1N0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9hbm9ueW1vdXMtY29uc2VudHMtc3RvcmUubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0Fub255bW91c0NvbnNlbnRzU3RvcmVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50c01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QW5vbnltb3VzQ29uc2VudHNNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFub255bW91c0NvbnNlbnRzTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLmludGVyY2VwdG9ycyxcbiAgICAgICAgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICAgICAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0QW5vbnltb3VzQ29uc2VudHNDb25maWcpLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
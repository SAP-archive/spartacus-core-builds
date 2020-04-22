import { __decorate, __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '../config/config.module';
import { defaultPersonalizationConfig } from './config/default-personalization-config';
import { interceptors } from './http-interceptors/index';
var PersonalizationModule = /** @class */ (function () {
    function PersonalizationModule() {
    }
    PersonalizationModule_1 = PersonalizationModule;
    PersonalizationModule.forRoot = function () {
        return {
            ngModule: PersonalizationModule_1,
            providers: __spread([
                provideDefaultConfig(defaultPersonalizationConfig)
            ], interceptors),
        };
    };
    var PersonalizationModule_1;
    PersonalizationModule = PersonalizationModule_1 = __decorate([
        NgModule({})
    ], PersonalizationModule);
    return PersonalizationModule;
}());
export { PersonalizationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWxpemF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wZXJzb25hbGl6YXRpb24vcGVyc29uYWxpemF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFdkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR3pEO0lBQUE7SUFVQSxDQUFDOzhCQVZZLHFCQUFxQjtJQUN6Qiw2QkFBTyxHQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSx1QkFBcUI7WUFDL0IsU0FBUztnQkFDUCxvQkFBb0IsQ0FBQyw0QkFBNEIsQ0FBQztlQUMvQyxZQUFZLENBQ2hCO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0lBVFUscUJBQXFCO1FBRGpDLFFBQVEsQ0FBQyxFQUFFLENBQUM7T0FDQSxxQkFBcUIsQ0FVakM7SUFBRCw0QkFBQztDQUFBLEFBVkQsSUFVQztTQVZZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IGRlZmF1bHRQZXJzb25hbGl6YXRpb25Db25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LXBlcnNvbmFsaXphdGlvbi1jb25maWcnO1xuXG5pbXBvcnQgeyBpbnRlcmNlcHRvcnMgfSBmcm9tICcuL2h0dHAtaW50ZXJjZXB0b3JzL2luZGV4JztcblxuQE5nTW9kdWxlKHt9KVxuZXhwb3J0IGNsYXNzIFBlcnNvbmFsaXphdGlvbk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8UGVyc29uYWxpemF0aW9uTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBQZXJzb25hbGl6YXRpb25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdFBlcnNvbmFsaXphdGlvbkNvbmZpZyksXG4gICAgICAgIC4uLmludGVyY2VwdG9ycyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19
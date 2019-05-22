/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CmsService } from './facade/index';
import { CmsStoreModule } from './store/cms-store.module';
import { CmsPageTitleModule } from './page/page.module';
import { CmsStructureConfig } from './config/cms-structure.config';
import { Config } from '../config/index';
var CmsModule = /** @class */ (function () {
    function CmsModule() {
    }
    CmsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CmsStoreModule, CmsPageTitleModule],
                    providers: [CmsService, { provide: CmsStructureConfig, useExisting: Config }],
                },] }
    ];
    return CmsModule;
}());
export { CmsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvY21zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QztJQUFBO0lBSXdCLENBQUM7O2dCQUp4QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDO29CQUM3QyxTQUFTLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDO2lCQUM5RTs7SUFDdUIsZ0JBQUM7Q0FBQSxBQUp6QixJQUl5QjtTQUFaLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDbXNTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvaW5kZXgnO1xuaW1wb3J0IHsgQ21zU3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL2Ntcy1zdG9yZS5tb2R1bGUnO1xuaW1wb3J0IHsgQ21zUGFnZVRpdGxlTW9kdWxlIH0gZnJvbSAnLi9wYWdlL3BhZ2UubW9kdWxlJztcblxuaW1wb3J0IHsgQ21zU3RydWN0dXJlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvY21zLXN0cnVjdHVyZS5jb25maWcnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0Ntc1N0b3JlTW9kdWxlLCBDbXNQYWdlVGl0bGVNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtDbXNTZXJ2aWNlLCB7IHByb3ZpZGU6IENtc1N0cnVjdHVyZUNvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9XSxcbn0pXG5leHBvcnQgY2xhc3MgQ21zTW9kdWxlIHt9XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER } from '@angular/core';
import { LanguageService } from '../facade/language.service';
import { CurrencyService } from '../facade/currency.service';
import { BaseSiteService } from '../facade/base-site.service';
/**
 * @param {?} baseSiteService
 * @param {?} langService
 * @param {?} currService
 * @return {?}
 */
export function inititializeContext(baseSiteService, langService, currService) {
    return (/**
     * @return {?}
     */
    function () {
        baseSiteService.initialize();
        langService.initialize();
        currService.initialize();
    });
}
/** @type {?} */
export var contextServiceProviders = [
    BaseSiteService,
    LanguageService,
    CurrencyService,
    {
        provide: APP_INITIALIZER,
        useFactory: inititializeContext,
        deps: [BaseSiteService, LanguageService, CurrencyService],
        multi: true,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1zZXJ2aWNlLXByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7QUFFOUQsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxlQUFnQyxFQUNoQyxXQUE0QixFQUM1QixXQUE0QjtJQUU1Qjs7O0lBQU87UUFDTCxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDN0IsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3pCLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMzQixDQUFDLEVBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sS0FBTyx1QkFBdUIsR0FBZTtJQUNqRCxlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7SUFDZjtRQUNFLE9BQU8sRUFBRSxlQUFlO1FBQ3hCLFVBQVUsRUFBRSxtQkFBbUI7UUFDL0IsSUFBSSxFQUFFLENBQUMsZUFBZSxFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUM7UUFDekQsS0FBSyxFQUFFLElBQUk7S0FDWjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2xhbmd1YWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VycmVuY3lTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2N1cnJlbmN5LnNlcnZpY2UnO1xuaW1wb3J0IHsgQmFzZVNpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2Jhc2Utc2l0ZS5zZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpdGlhbGl6ZUNvbnRleHQoXG4gIGJhc2VTaXRlU2VydmljZTogQmFzZVNpdGVTZXJ2aWNlLFxuICBsYW5nU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICBjdXJyU2VydmljZTogQ3VycmVuY3lTZXJ2aWNlXG4pIHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBiYXNlU2l0ZVNlcnZpY2UuaW5pdGlhbGl6ZSgpO1xuICAgIGxhbmdTZXJ2aWNlLmluaXRpYWxpemUoKTtcbiAgICBjdXJyU2VydmljZS5pbml0aWFsaXplKCk7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBjb250ZXh0U2VydmljZVByb3ZpZGVyczogUHJvdmlkZXJbXSA9IFtcbiAgQmFzZVNpdGVTZXJ2aWNlLFxuICBMYW5ndWFnZVNlcnZpY2UsXG4gIEN1cnJlbmN5U2VydmljZSxcbiAge1xuICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICB1c2VGYWN0b3J5OiBpbml0aXRpYWxpemVDb250ZXh0LFxuICAgIGRlcHM6IFtCYXNlU2l0ZVNlcnZpY2UsIExhbmd1YWdlU2VydmljZSwgQ3VycmVuY3lTZXJ2aWNlXSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbl07XG4iXX0=
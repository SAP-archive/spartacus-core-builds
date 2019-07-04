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
    () => {
        baseSiteService.initialize();
        langService.initialize();
        currService.initialize();
    });
}
/** @type {?} */
export const contextServiceProviders = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1zZXJ2aWNlLXByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7QUFFOUQsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxlQUFnQyxFQUNoQyxXQUE0QixFQUM1QixXQUE0QjtJQUU1Qjs7O0lBQU8sR0FBRyxFQUFFO1FBQ1YsZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzdCLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN6QixXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDM0IsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLE9BQU8sdUJBQXVCLEdBQWU7SUFDakQsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0lBQ2Y7UUFDRSxPQUFPLEVBQUUsZUFBZTtRQUN4QixVQUFVLEVBQUUsbUJBQW1CO1FBQy9CLElBQUksRUFBRSxDQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDO1FBQ3pELEtBQUssRUFBRSxJQUFJO0tBQ1o7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9sYW5ndWFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEN1cnJlbmN5U2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9jdXJyZW5jeS5zZXJ2aWNlJztcbmltcG9ydCB7IEJhc2VTaXRlU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aXRpYWxpemVDb250ZXh0KFxuICBiYXNlU2l0ZVNlcnZpY2U6IEJhc2VTaXRlU2VydmljZSxcbiAgbGFuZ1NlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgY3VyclNlcnZpY2U6IEN1cnJlbmN5U2VydmljZVxuKSB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgYmFzZVNpdGVTZXJ2aWNlLmluaXRpYWxpemUoKTtcbiAgICBsYW5nU2VydmljZS5pbml0aWFsaXplKCk7XG4gICAgY3VyclNlcnZpY2UuaW5pdGlhbGl6ZSgpO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgY29udGV4dFNlcnZpY2VQcm92aWRlcnM6IFByb3ZpZGVyW10gPSBbXG4gIEJhc2VTaXRlU2VydmljZSxcbiAgTGFuZ3VhZ2VTZXJ2aWNlLFxuICBDdXJyZW5jeVNlcnZpY2UsXG4gIHtcbiAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgdXNlRmFjdG9yeTogaW5pdGl0aWFsaXplQ29udGV4dCxcbiAgICBkZXBzOiBbQmFzZVNpdGVTZXJ2aWNlLCBMYW5ndWFnZVNlcnZpY2UsIEN1cnJlbmN5U2VydmljZV0sXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG5dO1xuIl19
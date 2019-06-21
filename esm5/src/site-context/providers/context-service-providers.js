/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER } from '@angular/core';
import { LanguageService } from '../facade/language.service';
import { CurrencyService } from '../facade/currency.service';
import { OccConfig } from '../../occ/config/occ-config';
import { BaseSiteService } from '../facade/base-site.service';
/**
 * @param {?} config
 * @param {?} baseSiteService
 * @param {?} langService
 * @param {?} currService
 * @return {?}
 */
export function inititializeContext(config, baseSiteService, langService, currService) {
    return (/**
     * @return {?}
     */
    function () {
        baseSiteService.initialize(config.site.baseSite);
        langService.initialize(config.site.language);
        currService.initialize(config.site.currency);
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
        deps: [OccConfig, BaseSiteService, LanguageService, CurrencyService],
        multi: true,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1zZXJ2aWNlLXByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7OztBQUU5RCxNQUFNLFVBQVUsbUJBQW1CLENBQ2pDLE1BQWlCLEVBQ2pCLGVBQWdDLEVBQ2hDLFdBQTRCLEVBQzVCLFdBQTRCO0lBRTVCOzs7SUFBTztRQUNMLGVBQWUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRCxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLENBQUMsRUFBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxLQUFPLHVCQUF1QixHQUFlO0lBQ2pELGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmO1FBQ0UsT0FBTyxFQUFFLGVBQWU7UUFDeEIsVUFBVSxFQUFFLG1CQUFtQjtRQUMvQixJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUM7UUFDcEUsS0FBSyxFQUFFLElBQUk7S0FDWjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2xhbmd1YWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VycmVuY3lTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2N1cnJlbmN5LnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vb2NjL2NvbmZpZy9vY2MtY29uZmlnJztcbmltcG9ydCB7IEJhc2VTaXRlU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aXRpYWxpemVDb250ZXh0KFxuICBjb25maWc6IE9jY0NvbmZpZyxcbiAgYmFzZVNpdGVTZXJ2aWNlOiBCYXNlU2l0ZVNlcnZpY2UsXG4gIGxhbmdTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gIGN1cnJTZXJ2aWNlOiBDdXJyZW5jeVNlcnZpY2Vcbikge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGJhc2VTaXRlU2VydmljZS5pbml0aWFsaXplKGNvbmZpZy5zaXRlLmJhc2VTaXRlKTtcbiAgICBsYW5nU2VydmljZS5pbml0aWFsaXplKGNvbmZpZy5zaXRlLmxhbmd1YWdlKTtcbiAgICBjdXJyU2VydmljZS5pbml0aWFsaXplKGNvbmZpZy5zaXRlLmN1cnJlbmN5KTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRleHRTZXJ2aWNlUHJvdmlkZXJzOiBQcm92aWRlcltdID0gW1xuICBCYXNlU2l0ZVNlcnZpY2UsXG4gIExhbmd1YWdlU2VydmljZSxcbiAgQ3VycmVuY3lTZXJ2aWNlLFxuICB7XG4gICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgIHVzZUZhY3Rvcnk6IGluaXRpdGlhbGl6ZUNvbnRleHQsXG4gICAgZGVwczogW09jY0NvbmZpZywgQmFzZVNpdGVTZXJ2aWNlLCBMYW5ndWFnZVNlcnZpY2UsIEN1cnJlbmN5U2VydmljZV0sXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG5dO1xuIl19
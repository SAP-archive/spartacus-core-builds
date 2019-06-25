/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER } from '@angular/core';
import { LanguageService } from '../facade/language.service';
import { CurrencyService } from '../facade/currency.service';
import { OccConfig } from '../../occ/config/occ-config';
import { BaseSiteService } from '../facade/base-site.service';
import { getContextParameterDefault } from '../config/context-config-utils';
import { BASE_SITE_CONTEXT_ID, CURRENCY_CONTEXT_ID, LANGUAGE_CONTEXT_ID, } from './context-service-map';
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
        baseSiteService.initialize(getContextParameterDefault(config, BASE_SITE_CONTEXT_ID));
        langService.initialize(getContextParameterDefault(config, LANGUAGE_CONTEXT_ID));
        currService.initialize(getContextParameterDefault(config, CURRENCY_CONTEXT_ID));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1zZXJ2aWNlLXByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTlELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLG1CQUFtQixHQUNwQixNQUFNLHVCQUF1QixDQUFDOzs7Ozs7OztBQUUvQixNQUFNLFVBQVUsbUJBQW1CLENBQ2pDLE1BQXlCLEVBQ3pCLGVBQWdDLEVBQ2hDLFdBQTRCLEVBQzVCLFdBQTRCO0lBRTVCOzs7SUFBTztRQUNMLGVBQWUsQ0FBQyxVQUFVLENBQ3hCLDBCQUEwQixDQUFDLE1BQU0sRUFBRSxvQkFBb0IsQ0FBQyxDQUN6RCxDQUFDO1FBQ0YsV0FBVyxDQUFDLFVBQVUsQ0FDcEIsMEJBQTBCLENBQUMsTUFBTSxFQUFFLG1CQUFtQixDQUFDLENBQ3hELENBQUM7UUFDRixXQUFXLENBQUMsVUFBVSxDQUNwQiwwQkFBMEIsQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLENBQUMsQ0FDeEQsQ0FBQztJQUNKLENBQUMsRUFBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxLQUFPLHVCQUF1QixHQUFlO0lBQ2pELGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmO1FBQ0UsT0FBTyxFQUFFLGVBQWU7UUFDeEIsVUFBVSxFQUFFLG1CQUFtQjtRQUMvQixJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUM7UUFDcEUsS0FBSyxFQUFFLElBQUk7S0FDWjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2xhbmd1YWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VycmVuY3lTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2N1cnJlbmN5LnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vb2NjL2NvbmZpZy9vY2MtY29uZmlnJztcbmltcG9ydCB7IEJhc2VTaXRlU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7IGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0IH0gZnJvbSAnLi4vY29uZmlnL2NvbnRleHQtY29uZmlnLXV0aWxzJztcbmltcG9ydCB7XG4gIEJBU0VfU0lURV9DT05URVhUX0lELFxuICBDVVJSRU5DWV9DT05URVhUX0lELFxuICBMQU5HVUFHRV9DT05URVhUX0lELFxufSBmcm9tICcuL2NvbnRleHQtc2VydmljZS1tYXAnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGl0aWFsaXplQ29udGV4dChcbiAgY29uZmlnOiBTaXRlQ29udGV4dENvbmZpZyxcbiAgYmFzZVNpdGVTZXJ2aWNlOiBCYXNlU2l0ZVNlcnZpY2UsXG4gIGxhbmdTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gIGN1cnJTZXJ2aWNlOiBDdXJyZW5jeVNlcnZpY2Vcbikge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGJhc2VTaXRlU2VydmljZS5pbml0aWFsaXplKFxuICAgICAgZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQoY29uZmlnLCBCQVNFX1NJVEVfQ09OVEVYVF9JRClcbiAgICApO1xuICAgIGxhbmdTZXJ2aWNlLmluaXRpYWxpemUoXG4gICAgICBnZXRDb250ZXh0UGFyYW1ldGVyRGVmYXVsdChjb25maWcsIExBTkdVQUdFX0NPTlRFWFRfSUQpXG4gICAgKTtcbiAgICBjdXJyU2VydmljZS5pbml0aWFsaXplKFxuICAgICAgZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQoY29uZmlnLCBDVVJSRU5DWV9DT05URVhUX0lEKVxuICAgICk7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBjb250ZXh0U2VydmljZVByb3ZpZGVyczogUHJvdmlkZXJbXSA9IFtcbiAgQmFzZVNpdGVTZXJ2aWNlLFxuICBMYW5ndWFnZVNlcnZpY2UsXG4gIEN1cnJlbmN5U2VydmljZSxcbiAge1xuICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICB1c2VGYWN0b3J5OiBpbml0aXRpYWxpemVDb250ZXh0LFxuICAgIGRlcHM6IFtPY2NDb25maWcsIEJhc2VTaXRlU2VydmljZSwgTGFuZ3VhZ2VTZXJ2aWNlLCBDdXJyZW5jeVNlcnZpY2VdLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuXTtcbiJdfQ==
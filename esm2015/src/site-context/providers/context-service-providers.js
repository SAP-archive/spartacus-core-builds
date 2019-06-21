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
    () => {
        baseSiteService.initialize(config.site.baseSite);
        langService.initialize(config.site.language);
        currService.initialize(config.site.currency);
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
        deps: [OccConfig, BaseSiteService, LanguageService, CurrencyService],
        multi: true,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1zZXJ2aWNlLXByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7OztBQUU5RCxNQUFNLFVBQVUsbUJBQW1CLENBQ2pDLE1BQWlCLEVBQ2pCLGVBQWdDLEVBQ2hDLFdBQTRCLEVBQzVCLFdBQTRCO0lBRTVCOzs7SUFBTyxHQUFHLEVBQUU7UUFDVixlQUFlLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakQsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDLEVBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sT0FBTyx1QkFBdUIsR0FBZTtJQUNqRCxlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7SUFDZjtRQUNFLE9BQU8sRUFBRSxlQUFlO1FBQ3hCLFVBQVUsRUFBRSxtQkFBbUI7UUFDL0IsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDO1FBQ3BFLEtBQUssRUFBRSxJQUFJO0tBQ1o7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9sYW5ndWFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEN1cnJlbmN5U2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9jdXJyZW5jeS5zZXJ2aWNlJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uL29jYy9jb25maWcvb2NjLWNvbmZpZyc7XG5pbXBvcnQgeyBCYXNlU2l0ZVNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvYmFzZS1zaXRlLnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGl0aWFsaXplQ29udGV4dChcbiAgY29uZmlnOiBPY2NDb25maWcsXG4gIGJhc2VTaXRlU2VydmljZTogQmFzZVNpdGVTZXJ2aWNlLFxuICBsYW5nU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICBjdXJyU2VydmljZTogQ3VycmVuY3lTZXJ2aWNlXG4pIHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBiYXNlU2l0ZVNlcnZpY2UuaW5pdGlhbGl6ZShjb25maWcuc2l0ZS5iYXNlU2l0ZSk7XG4gICAgbGFuZ1NlcnZpY2UuaW5pdGlhbGl6ZShjb25maWcuc2l0ZS5sYW5ndWFnZSk7XG4gICAgY3VyclNlcnZpY2UuaW5pdGlhbGl6ZShjb25maWcuc2l0ZS5jdXJyZW5jeSk7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBjb250ZXh0U2VydmljZVByb3ZpZGVyczogUHJvdmlkZXJbXSA9IFtcbiAgQmFzZVNpdGVTZXJ2aWNlLFxuICBMYW5ndWFnZVNlcnZpY2UsXG4gIEN1cnJlbmN5U2VydmljZSxcbiAge1xuICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICB1c2VGYWN0b3J5OiBpbml0aXRpYWxpemVDb250ZXh0LFxuICAgIGRlcHM6IFtPY2NDb25maWcsIEJhc2VTaXRlU2VydmljZSwgTGFuZ3VhZ2VTZXJ2aWNlLCBDdXJyZW5jeVNlcnZpY2VdLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuXTtcbiJdfQ==
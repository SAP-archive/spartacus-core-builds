/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER } from '@angular/core';
import { ConfigInitializerService } from '../../config/config-initializer/config-initializer.service';
import { BaseSiteService } from '../facade/base-site.service';
import { CurrencyService } from '../facade/currency.service';
import { LanguageService } from '../facade/language.service';
/**
 * @deprecated since 1.3 - should be removed from public API and the logic should be moved to the function `initializeContext`
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
/**
 * @param {?} baseSiteService
 * @param {?} langService
 * @param {?} currService
 * @param {?} configInit
 * @return {?}
 */
export function initializeContext(baseSiteService, langService, currService, configInit) {
    return (/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const initialize = inititializeContext(baseSiteService, langService, currService);
        configInit.getStableConfig('context').then((/**
         * @return {?}
         */
        () => {
            initialize();
        }));
    });
}
/**
 * @deprecated since 1.3 - should be removed
 * @type {?}
 */
export const deprecatedContextServiceProviders = [
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
/** @type {?} */
export const contextServiceProviders = [
    BaseSiteService,
    LanguageService,
    CurrencyService,
    {
        provide: APP_INITIALIZER,
        useFactory: initializeContext,
        deps: [
            BaseSiteService,
            LanguageService,
            CurrencyService,
            ConfigInitializerService,
        ],
        multi: true,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1zZXJ2aWNlLXByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7O0FBSzdELE1BQU0sVUFBVSxtQkFBbUIsQ0FDakMsZUFBZ0MsRUFDaEMsV0FBNEIsRUFDNUIsV0FBNEI7SUFFNUI7OztJQUFPLEdBQUcsRUFBRTtRQUNWLGVBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM3QixXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDekIsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzNCLENBQUMsRUFBQztBQUNKLENBQUM7Ozs7Ozs7O0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUMvQixlQUFnQyxFQUNoQyxXQUE0QixFQUM1QixXQUE0QixFQUM1QixVQUFvQztJQUVwQzs7O0lBQU8sR0FBRyxFQUFFOztjQUNKLFVBQVUsR0FBRyxtQkFBbUIsQ0FDcEMsZUFBZSxFQUNmLFdBQVcsRUFDWCxXQUFXLENBQ1o7UUFFRCxVQUFVLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUk7OztRQUFDLEdBQUcsRUFBRTtZQUM5QyxVQUFVLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7Ozs7QUFLRCxNQUFNLE9BQU8saUNBQWlDLEdBQWU7SUFDM0QsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0lBQ2Y7UUFDRSxPQUFPLEVBQUUsZUFBZTtRQUN4QixVQUFVLEVBQUUsbUJBQW1CO1FBQy9CLElBQUksRUFBRSxDQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDO1FBQ3pELEtBQUssRUFBRSxJQUFJO0tBQ1o7Q0FDRjs7QUFFRCxNQUFNLE9BQU8sdUJBQXVCLEdBQWU7SUFDakQsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0lBQ2Y7UUFDRSxPQUFPLEVBQUUsZUFBZTtRQUN4QixVQUFVLEVBQUUsaUJBQWlCO1FBQzdCLElBQUksRUFBRTtZQUNKLGVBQWU7WUFDZixlQUFlO1lBQ2YsZUFBZTtZQUNmLHdCQUF3QjtTQUN6QjtRQUNELEtBQUssRUFBRSxJQUFJO0tBQ1o7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWctaW5pdGlhbGl6ZXIvY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQmFzZVNpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2Jhc2Utc2l0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEN1cnJlbmN5U2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9jdXJyZW5jeS5zZXJ2aWNlJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9sYW5ndWFnZS5zZXJ2aWNlJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSAxLjMgLSBzaG91bGQgYmUgcmVtb3ZlZCBmcm9tIHB1YmxpYyBBUEkgYW5kIHRoZSBsb2dpYyBzaG91bGQgYmUgbW92ZWQgdG8gdGhlIGZ1bmN0aW9uIGBpbml0aWFsaXplQ29udGV4dGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRpdGlhbGl6ZUNvbnRleHQoXG4gIGJhc2VTaXRlU2VydmljZTogQmFzZVNpdGVTZXJ2aWNlLFxuICBsYW5nU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICBjdXJyU2VydmljZTogQ3VycmVuY3lTZXJ2aWNlXG4pIHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBiYXNlU2l0ZVNlcnZpY2UuaW5pdGlhbGl6ZSgpO1xuICAgIGxhbmdTZXJ2aWNlLmluaXRpYWxpemUoKTtcbiAgICBjdXJyU2VydmljZS5pbml0aWFsaXplKCk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQ29udGV4dChcbiAgYmFzZVNpdGVTZXJ2aWNlOiBCYXNlU2l0ZVNlcnZpY2UsXG4gIGxhbmdTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gIGN1cnJTZXJ2aWNlOiBDdXJyZW5jeVNlcnZpY2UsXG4gIGNvbmZpZ0luaXQ6IENvbmZpZ0luaXRpYWxpemVyU2VydmljZVxuKSB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9IGluaXRpdGlhbGl6ZUNvbnRleHQoXG4gICAgICBiYXNlU2l0ZVNlcnZpY2UsXG4gICAgICBsYW5nU2VydmljZSxcbiAgICAgIGN1cnJTZXJ2aWNlXG4gICAgKTtcblxuICAgIGNvbmZpZ0luaXQuZ2V0U3RhYmxlQ29uZmlnKCdjb250ZXh0JykudGhlbigoKSA9PiB7XG4gICAgICBpbml0aWFsaXplKCk7XG4gICAgfSk7XG4gIH07XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgc2luY2UgMS4zIC0gc2hvdWxkIGJlIHJlbW92ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGRlcHJlY2F0ZWRDb250ZXh0U2VydmljZVByb3ZpZGVyczogUHJvdmlkZXJbXSA9IFtcbiAgQmFzZVNpdGVTZXJ2aWNlLFxuICBMYW5ndWFnZVNlcnZpY2UsXG4gIEN1cnJlbmN5U2VydmljZSxcbiAge1xuICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICB1c2VGYWN0b3J5OiBpbml0aXRpYWxpemVDb250ZXh0LFxuICAgIGRlcHM6IFtCYXNlU2l0ZVNlcnZpY2UsIExhbmd1YWdlU2VydmljZSwgQ3VycmVuY3lTZXJ2aWNlXSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBjb250ZXh0U2VydmljZVByb3ZpZGVyczogUHJvdmlkZXJbXSA9IFtcbiAgQmFzZVNpdGVTZXJ2aWNlLFxuICBMYW5ndWFnZVNlcnZpY2UsXG4gIEN1cnJlbmN5U2VydmljZSxcbiAge1xuICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICB1c2VGYWN0b3J5OiBpbml0aWFsaXplQ29udGV4dCxcbiAgICBkZXBzOiBbXG4gICAgICBCYXNlU2l0ZVNlcnZpY2UsXG4gICAgICBMYW5ndWFnZVNlcnZpY2UsXG4gICAgICBDdXJyZW5jeVNlcnZpY2UsXG4gICAgICBDb25maWdJbml0aWFsaXplclNlcnZpY2UsXG4gICAgXSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbl07XG4iXX0=
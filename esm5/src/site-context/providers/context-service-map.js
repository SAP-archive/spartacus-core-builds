/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LanguageService } from '../facade/language.service';
import { CurrencyService } from '../facade/currency.service';
import { BaseSiteService } from '../facade/base-site.service';
/**
 * @abstract
 */
var /**
 * @abstract
 */
ContextServiceMap = /** @class */ (function () {
    function ContextServiceMap() {
    }
    return ContextServiceMap;
}());
/**
 * @abstract
 */
export { ContextServiceMap };
/** @type {?} */
export var LANGUAGE_CONTEXT_ID = 'LANGUAGE';
/** @type {?} */
export var CURRENCY_CONTEXT_ID = 'CURRENCY';
/** @type {?} */
export var BASE_SITE_CONTEXT_ID = 'BASE_SITE';
/**
 * @return {?}
 */
export function serviceMapFactory() {
    var _a;
    return _a = {},
        _a[LANGUAGE_CONTEXT_ID] = LanguageService,
        _a[CURRENCY_CONTEXT_ID] = CurrencyService,
        _a[BASE_SITE_CONTEXT_ID] = BaseSiteService,
        _a;
}
/** @type {?} */
export var contextServiceMapProvider = {
    provide: ContextServiceMap,
    useFactory: serviceMapFactory,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1zZXJ2aWNlLW1hcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1tYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBRTlEOzs7O0lBQUE7SUFFQSxDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7Ozs7O0FBRUQsTUFBTSxLQUFPLG1CQUFtQixHQUFHLFVBQVU7O0FBQzdDLE1BQU0sS0FBTyxtQkFBbUIsR0FBRyxVQUFVOztBQUM3QyxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsV0FBVzs7OztBQUUvQyxNQUFNLFVBQVUsaUJBQWlCOztJQUMvQjtRQUNFLEdBQUMsbUJBQW1CLElBQUcsZUFBZTtRQUN0QyxHQUFDLG1CQUFtQixJQUFHLGVBQWU7UUFDdEMsR0FBQyxvQkFBb0IsSUFBRyxlQUFlO1dBQ3ZDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLEtBQU8seUJBQXlCLEdBQWE7SUFDakQsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixVQUFVLEVBQUUsaUJBQWlCO0NBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9sYW5ndWFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEN1cnJlbmN5U2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9jdXJyZW5jeS5zZXJ2aWNlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0IH0gZnJvbSAnLi4vZmFjYWRlL3NpdGUtY29udGV4dC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQmFzZVNpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2Jhc2Utc2l0ZS5zZXJ2aWNlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbnRleHRTZXJ2aWNlTWFwIHtcbiAgW2NvbnRleHQ6IHN0cmluZ106IFR5cGU8U2l0ZUNvbnRleHQ8YW55Pj47XG59XG5cbmV4cG9ydCBjb25zdCBMQU5HVUFHRV9DT05URVhUX0lEID0gJ0xBTkdVQUdFJztcbmV4cG9ydCBjb25zdCBDVVJSRU5DWV9DT05URVhUX0lEID0gJ0NVUlJFTkNZJztcbmV4cG9ydCBjb25zdCBCQVNFX1NJVEVfQ09OVEVYVF9JRCA9ICdCQVNFX1NJVEUnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VydmljZU1hcEZhY3RvcnkoKSB7XG4gIHJldHVybiB7XG4gICAgW0xBTkdVQUdFX0NPTlRFWFRfSURdOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgW0NVUlJFTkNZX0NPTlRFWFRfSURdOiBDdXJyZW5jeVNlcnZpY2UsXG4gICAgW0JBU0VfU0lURV9DT05URVhUX0lEXTogQmFzZVNpdGVTZXJ2aWNlLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgY29udGV4dFNlcnZpY2VNYXBQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IENvbnRleHRTZXJ2aWNlTWFwLFxuICB1c2VGYWN0b3J5OiBzZXJ2aWNlTWFwRmFjdG9yeSxcbn07XG4iXX0=
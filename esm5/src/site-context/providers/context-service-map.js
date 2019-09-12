/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LanguageService } from '../facade/language.service';
import { CurrencyService } from '../facade/currency.service';
import { BaseSiteService } from '../facade/base-site.service';
import { BASE_SITE_CONTEXT_ID, CURRENCY_CONTEXT_ID, LANGUAGE_CONTEXT_ID, } from './context-ids';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1zZXJ2aWNlLW1hcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1tYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLG1CQUFtQixHQUNwQixNQUFNLGVBQWUsQ0FBQzs7OztBQUV2Qjs7OztJQUFBO0lBRUEsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7Ozs7O0FBRUQsTUFBTSxVQUFVLGlCQUFpQjs7SUFDL0I7UUFDRSxHQUFDLG1CQUFtQixJQUFHLGVBQWU7UUFDdEMsR0FBQyxtQkFBbUIsSUFBRyxlQUFlO1FBQ3RDLEdBQUMsb0JBQW9CLElBQUcsZUFBZTtXQUN2QztBQUNKLENBQUM7O0FBRUQsTUFBTSxLQUFPLHlCQUF5QixHQUFhO0lBQ2pELE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsVUFBVSxFQUFFLGlCQUFpQjtDQUM5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvbGFuZ3VhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBDdXJyZW5jeVNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvY3VycmVuY3kuc2VydmljZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dCB9IGZyb20gJy4uL2ZhY2FkZS9zaXRlLWNvbnRleHQuaW50ZXJmYWNlJztcbmltcG9ydCB7IEJhc2VTaXRlU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZSc7XG5pbXBvcnQge1xuICBCQVNFX1NJVEVfQ09OVEVYVF9JRCxcbiAgQ1VSUkVOQ1lfQ09OVEVYVF9JRCxcbiAgTEFOR1VBR0VfQ09OVEVYVF9JRCxcbn0gZnJvbSAnLi9jb250ZXh0LWlkcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb250ZXh0U2VydmljZU1hcCB7XG4gIFtjb250ZXh0OiBzdHJpbmddOiBUeXBlPFNpdGVDb250ZXh0PGFueT4+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VydmljZU1hcEZhY3RvcnkoKSB7XG4gIHJldHVybiB7XG4gICAgW0xBTkdVQUdFX0NPTlRFWFRfSURdOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgW0NVUlJFTkNZX0NPTlRFWFRfSURdOiBDdXJyZW5jeVNlcnZpY2UsXG4gICAgW0JBU0VfU0lURV9DT05URVhUX0lEXTogQmFzZVNpdGVTZXJ2aWNlLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgY29udGV4dFNlcnZpY2VNYXBQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IENvbnRleHRTZXJ2aWNlTWFwLFxuICB1c2VGYWN0b3J5OiBzZXJ2aWNlTWFwRmFjdG9yeSxcbn07XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BASE_SITE_CONTEXT_ID, CURRENCY_CONTEXT_ID, LANGUAGE_CONTEXT_ID, } from '../../site-context/providers/context-ids';
import { JavaRegExpConverter } from './java-reg-exp-converter';
import * as i0 from "@angular/core";
import * as i1 from "./java-reg-exp-converter";
var OccLoadedConfigConverter = /** @class */ (function () {
    function OccLoadedConfigConverter(javaRegExpConverter) {
        this.javaRegExpConverter = javaRegExpConverter;
    }
    /**
     * @param {?} baseSites
     * @param {?} currentUrl
     * @return {?}
     */
    OccLoadedConfigConverter.prototype.fromOccBaseSites = /**
     * @param {?} baseSites
     * @param {?} currentUrl
     * @return {?}
     */
    function (baseSites, currentUrl) {
        var _this = this;
        /** @type {?} */
        var baseSite = baseSites.find((/**
         * @param {?} site
         * @return {?}
         */
        function (site) {
            return _this.isCurrentBaseSite(site, currentUrl);
        }));
        if (!baseSite) {
            throw this.getError("Current url (" + currentUrl + ") doesn't match with any of url patterns of any base site.");
        }
        // Although `stores` property is an array, typically there is only one store. So we return the first store from the list.
        /** @type {?} */
        var baseStore = baseSite.stores && baseSite.stores[0];
        if (!baseStore) {
            throw this.getError("Current base site (" + baseSite.uid + ") doesn't have any base store.");
        }
        return {
            baseSite: baseSite.uid,
            languages: this.getIsoCodes(baseStore.languages, baseSite.defaultLanguage || baseStore.defaultLanguage),
            currencies: this.getIsoCodes(baseStore.currencies, baseStore.defaultCurrency),
            urlParameters: this.getUrlParams(baseSite.urlEncodingAttributes),
        };
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    OccLoadedConfigConverter.prototype.toSiteContextConfig = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _b;
        var baseSite = _a.baseSite, languages = _a.languages, currencies = _a.currencies, urlEncodingAttributes = _a.urlParameters;
        /** @type {?} */
        var result = {
            context: (_b = {
                    urlParameters: urlEncodingAttributes
                },
                _b[BASE_SITE_CONTEXT_ID] = [baseSite],
                _b[LANGUAGE_CONTEXT_ID] = languages,
                _b[CURRENCY_CONTEXT_ID] = currencies,
                _b),
        };
        return result;
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    OccLoadedConfigConverter.prototype.toI18nConfig = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var languages = _a.languages;
        return { i18n: { fallbackLang: languages[0] } };
    };
    /**
     * @private
     * @param {?} site
     * @param {?} currentUrl
     * @return {?}
     */
    OccLoadedConfigConverter.prototype.isCurrentBaseSite = /**
     * @private
     * @param {?} site
     * @param {?} currentUrl
     * @return {?}
     */
    function (site, currentUrl) {
        var _this = this;
        /** @type {?} */
        var index = (site.urlPatterns || []).findIndex((/**
         * @param {?} javaRegexp
         * @return {?}
         */
        function (javaRegexp) {
            /** @type {?} */
            var jsRegexp = _this.javaRegExpConverter.toJsRegExp(javaRegexp);
            if (jsRegexp) {
                /** @type {?} */
                var result = jsRegexp.test(currentUrl);
                return result;
            }
        }));
        return index !== -1;
    };
    /**
     * Returns an array of url encoded site context parameters.
     *
     * It maps the string "storefront" (used in OCC) to the "baseSite" (used in Spartacus)
     */
    /**
     * Returns an array of url encoded site context parameters.
     *
     * It maps the string "storefront" (used in OCC) to the "baseSite" (used in Spartacus)
     * @private
     * @param {?} params
     * @return {?}
     */
    OccLoadedConfigConverter.prototype.getUrlParams = /**
     * Returns an array of url encoded site context parameters.
     *
     * It maps the string "storefront" (used in OCC) to the "baseSite" (used in Spartacus)
     * @private
     * @param {?} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var STOREFRONT_PARAM = 'storefront';
        return (params || []).map((/**
         * @param {?} param
         * @return {?}
         */
        function (param) {
            return param === STOREFRONT_PARAM ? BASE_SITE_CONTEXT_ID : param;
        }));
    };
    /**
     * Returns iso codes in a array, where the first element is the default iso code.
     */
    /**
     * Returns iso codes in a array, where the first element is the default iso code.
     * @private
     * @param {?} elements
     * @param {?} defaultElement
     * @return {?}
     */
    OccLoadedConfigConverter.prototype.getIsoCodes = /**
     * Returns iso codes in a array, where the first element is the default iso code.
     * @private
     * @param {?} elements
     * @param {?} defaultElement
     * @return {?}
     */
    function (elements, defaultElement) {
        /** @type {?} */
        var result = this.moveToFirst(elements, (/**
         * @param {?} el
         * @return {?}
         */
        function (el) { return el.isocode === defaultElement.isocode; })).map((/**
         * @param {?} el
         * @return {?}
         */
        function (el) { return el.isocode; }));
        return result;
    };
    /**
     * Moves to the start of the array the first element that satisfies the given predicate.
     *
     * @param array array to modify
     * @param predicate function called on elements
     */
    /**
     * Moves to the start of the array the first element that satisfies the given predicate.
     *
     * @private
     * @param {?} array array to modify
     * @param {?} predicate function called on elements
     * @return {?}
     */
    OccLoadedConfigConverter.prototype.moveToFirst = /**
     * Moves to the start of the array the first element that satisfies the given predicate.
     *
     * @private
     * @param {?} array array to modify
     * @param {?} predicate function called on elements
     * @return {?}
     */
    function (array, predicate) {
        array = tslib_1.__spread(array);
        /** @type {?} */
        var index = array.findIndex(predicate);
        if (index !== -1) {
            var _a = tslib_1.__read(array.splice(index, 1), 1), el = _a[0];
            array.unshift(el);
        }
        return array;
    };
    /**
     * @private
     * @param {?} message
     * @return {?}
     */
    OccLoadedConfigConverter.prototype.getError = /**
     * @private
     * @param {?} message
     * @return {?}
     */
    function (message) {
        return new Error("Error: Cannot get base site config! " + message);
    };
    OccLoadedConfigConverter.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    OccLoadedConfigConverter.ctorParameters = function () { return [
        { type: JavaRegExpConverter }
    ]; };
    /** @nocollapse */ OccLoadedConfigConverter.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OccLoadedConfigConverter_Factory() { return new OccLoadedConfigConverter(i0.ɵɵinject(i1.JavaRegExpConverter)); }, token: OccLoadedConfigConverter, providedIn: "root" });
    return OccLoadedConfigConverter;
}());
export { OccLoadedConfigConverter };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccLoadedConfigConverter.prototype.javaRegExpConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWxvYWRlZC1jb25maWctY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9jb25maWctbG9hZGVyL29jYy1sb2FkZWQtY29uZmlnLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsbUJBQW1CLEdBQ3BCLE1BQU0sMENBQTBDLENBQUM7QUFFbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUcvRDtJQUVFLGtDQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUFHLENBQUM7Ozs7OztJQUVoRSxtREFBZ0I7Ozs7O0lBQWhCLFVBQWlCLFNBQXFCLEVBQUUsVUFBa0I7UUFBMUQsaUJBOEJDOztZQTdCTyxRQUFRLEdBQUcsU0FBUyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLElBQUk7WUFDbEMsT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQztRQUF4QyxDQUF3QyxFQUN6QztRQUNELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixNQUFNLElBQUksQ0FBQyxRQUFRLENBQ2pCLGtCQUFnQixVQUFVLCtEQUE0RCxDQUN2RixDQUFDO1NBQ0g7OztZQUdLLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxNQUFNLElBQUksQ0FBQyxRQUFRLENBQ2pCLHdCQUFzQixRQUFRLENBQUMsR0FBRyxtQ0FBZ0MsQ0FDbkUsQ0FBQztTQUNIO1FBRUQsT0FBTztZQUNMLFFBQVEsRUFBRSxRQUFRLENBQUMsR0FBRztZQUN0QixTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FDekIsU0FBUyxDQUFDLFNBQVMsRUFDbkIsUUFBUSxDQUFDLGVBQWUsSUFBSSxTQUFTLENBQUMsZUFBZSxDQUN0RDtZQUNELFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUMxQixTQUFTLENBQUMsVUFBVSxFQUNwQixTQUFTLENBQUMsZUFBZSxDQUMxQjtZQUNELGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQztTQUNqRSxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxzREFBbUI7Ozs7SUFBbkIsVUFBb0IsRUFLRjs7WUFKaEIsc0JBQVEsRUFDUix3QkFBUyxFQUNULDBCQUFVLEVBQ1Ysd0NBQW9DOztZQUU5QixNQUFNLEdBQUc7WUFDYixPQUFPO29CQUNMLGFBQWEsRUFBRSxxQkFBcUI7O2dCQUNwQyxHQUFDLG9CQUFvQixJQUFHLENBQUMsUUFBUSxDQUFDO2dCQUNsQyxHQUFDLG1CQUFtQixJQUFHLFNBQVM7Z0JBQ2hDLEdBQUMsbUJBQW1CLElBQUcsVUFBVTttQkFDbEM7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRUQsK0NBQVk7Ozs7SUFBWixVQUFhLEVBQThCO1lBQTVCLHdCQUFTO1FBQ3RCLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7O0lBRU8sb0RBQWlCOzs7Ozs7SUFBekIsVUFBMEIsSUFBa0IsRUFBRSxVQUFrQjtRQUFoRSxpQkFVQzs7WUFUTyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLFVBQVU7O2dCQUNuRCxRQUFRLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7WUFDaEUsSUFBSSxRQUFRLEVBQUU7O29CQUNOLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDeEMsT0FBTyxNQUFNLENBQUM7YUFDZjtRQUNILENBQUMsRUFBQztRQUVGLE9BQU8sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7Ozs7SUFDSywrQ0FBWTs7Ozs7Ozs7SUFBcEIsVUFBcUIsTUFBZ0I7O1lBQzdCLGdCQUFnQixHQUFHLFlBQVk7UUFFckMsT0FBTyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxLQUFLO1lBQzdCLE9BQUEsS0FBSyxLQUFLLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsS0FBSztRQUF6RCxDQUF5RCxFQUMxRCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7Ozs7OztJQUNLLDhDQUFXOzs7Ozs7O0lBQW5CLFVBQ0UsUUFBZ0MsRUFDaEMsY0FBb0M7O1lBRTlCLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUM3QixRQUFROzs7O1FBQ1IsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsT0FBTyxLQUFLLGNBQWMsQ0FBQyxPQUFPLEVBQXJDLENBQXFDLEVBQzVDLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLE9BQU8sRUFBVixDQUFVLEVBQUM7UUFDdkIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7Ozs7SUFDSyw4Q0FBVzs7Ozs7Ozs7SUFBbkIsVUFBb0IsS0FBWSxFQUFFLFNBQStCO1FBQy9ELEtBQUssb0JBQU8sS0FBSyxDQUFDLENBQUM7O1lBQ2IsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBQ3hDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ1YsSUFBQSw4Q0FBNkIsRUFBNUIsVUFBNEI7WUFDbkMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNuQjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBRU8sMkNBQVE7Ozs7O0lBQWhCLFVBQWlCLE9BQWU7UUFDOUIsT0FBTyxJQUFJLEtBQUssQ0FBQyx5Q0FBdUMsT0FBUyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Z0JBbEhGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBSHpCLG1CQUFtQjs7O21DQVY1QjtDQWdJQyxBQW5IRCxJQW1IQztTQWxIWSx3QkFBd0I7Ozs7OztJQUN2Qix1REFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJMThuQ29uZmlnIH0gZnJvbSAnLi4vLi4vaTE4bic7XG5pbXBvcnQgeyBCYXNlU2l0ZSB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvY29uZmlnL3NpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHtcbiAgQkFTRV9TSVRFX0NPTlRFWFRfSUQsXG4gIENVUlJFTkNZX0NPTlRFWFRfSUQsXG4gIExBTkdVQUdFX0NPTlRFWFRfSUQsXG59IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9wcm92aWRlcnMvY29udGV4dC1pZHMnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IEphdmFSZWdFeHBDb252ZXJ0ZXIgfSBmcm9tICcuL2phdmEtcmVnLWV4cC1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgT2NjTG9hZGVkQ29uZmlnIH0gZnJvbSAnLi9vY2MtbG9hZGVkLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT2NjTG9hZGVkQ29uZmlnQ29udmVydGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBqYXZhUmVnRXhwQ29udmVydGVyOiBKYXZhUmVnRXhwQ29udmVydGVyKSB7fVxuXG4gIGZyb21PY2NCYXNlU2l0ZXMoYmFzZVNpdGVzOiBCYXNlU2l0ZVtdLCBjdXJyZW50VXJsOiBzdHJpbmcpOiBPY2NMb2FkZWRDb25maWcge1xuICAgIGNvbnN0IGJhc2VTaXRlID0gYmFzZVNpdGVzLmZpbmQoc2l0ZSA9PlxuICAgICAgdGhpcy5pc0N1cnJlbnRCYXNlU2l0ZShzaXRlLCBjdXJyZW50VXJsKVxuICAgICk7XG4gICAgaWYgKCFiYXNlU2l0ZSkge1xuICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcihcbiAgICAgICAgYEN1cnJlbnQgdXJsICgke2N1cnJlbnRVcmx9KSBkb2Vzbid0IG1hdGNoIHdpdGggYW55IG9mIHVybCBwYXR0ZXJucyBvZiBhbnkgYmFzZSBzaXRlLmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQWx0aG91Z2ggYHN0b3Jlc2AgcHJvcGVydHkgaXMgYW4gYXJyYXksIHR5cGljYWxseSB0aGVyZSBpcyBvbmx5IG9uZSBzdG9yZS4gU28gd2UgcmV0dXJuIHRoZSBmaXJzdCBzdG9yZSBmcm9tIHRoZSBsaXN0LlxuICAgIGNvbnN0IGJhc2VTdG9yZSA9IGJhc2VTaXRlLnN0b3JlcyAmJiBiYXNlU2l0ZS5zdG9yZXNbMF07XG4gICAgaWYgKCFiYXNlU3RvcmUpIHtcbiAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoXG4gICAgICAgIGBDdXJyZW50IGJhc2Ugc2l0ZSAoJHtiYXNlU2l0ZS51aWR9KSBkb2Vzbid0IGhhdmUgYW55IGJhc2Ugc3RvcmUuYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmFzZVNpdGU6IGJhc2VTaXRlLnVpZCxcbiAgICAgIGxhbmd1YWdlczogdGhpcy5nZXRJc29Db2RlcyhcbiAgICAgICAgYmFzZVN0b3JlLmxhbmd1YWdlcyxcbiAgICAgICAgYmFzZVNpdGUuZGVmYXVsdExhbmd1YWdlIHx8IGJhc2VTdG9yZS5kZWZhdWx0TGFuZ3VhZ2VcbiAgICAgICksXG4gICAgICBjdXJyZW5jaWVzOiB0aGlzLmdldElzb0NvZGVzKFxuICAgICAgICBiYXNlU3RvcmUuY3VycmVuY2llcyxcbiAgICAgICAgYmFzZVN0b3JlLmRlZmF1bHRDdXJyZW5jeVxuICAgICAgKSxcbiAgICAgIHVybFBhcmFtZXRlcnM6IHRoaXMuZ2V0VXJsUGFyYW1zKGJhc2VTaXRlLnVybEVuY29kaW5nQXR0cmlidXRlcyksXG4gICAgfTtcbiAgfVxuXG4gIHRvU2l0ZUNvbnRleHRDb25maWcoe1xuICAgIGJhc2VTaXRlLFxuICAgIGxhbmd1YWdlcyxcbiAgICBjdXJyZW5jaWVzLFxuICAgIHVybFBhcmFtZXRlcnM6IHVybEVuY29kaW5nQXR0cmlidXRlcyxcbiAgfTogT2NjTG9hZGVkQ29uZmlnKTogU2l0ZUNvbnRleHRDb25maWcge1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgdXJsUGFyYW1ldGVyczogdXJsRW5jb2RpbmdBdHRyaWJ1dGVzLFxuICAgICAgICBbQkFTRV9TSVRFX0NPTlRFWFRfSURdOiBbYmFzZVNpdGVdLFxuICAgICAgICBbTEFOR1VBR0VfQ09OVEVYVF9JRF06IGxhbmd1YWdlcyxcbiAgICAgICAgW0NVUlJFTkNZX0NPTlRFWFRfSURdOiBjdXJyZW5jaWVzLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICB0b0kxOG5Db25maWcoeyBsYW5ndWFnZXMgfTogT2NjTG9hZGVkQ29uZmlnKTogSTE4bkNvbmZpZyB7XG4gICAgcmV0dXJuIHsgaTE4bjogeyBmYWxsYmFja0xhbmc6IGxhbmd1YWdlc1swXSB9IH07XG4gIH1cblxuICBwcml2YXRlIGlzQ3VycmVudEJhc2VTaXRlKHNpdGU6IE9jYy5CYXNlU2l0ZSwgY3VycmVudFVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaW5kZXggPSAoc2l0ZS51cmxQYXR0ZXJucyB8fCBbXSkuZmluZEluZGV4KGphdmFSZWdleHAgPT4ge1xuICAgICAgY29uc3QganNSZWdleHAgPSB0aGlzLmphdmFSZWdFeHBDb252ZXJ0ZXIudG9Kc1JlZ0V4cChqYXZhUmVnZXhwKTtcbiAgICAgIGlmIChqc1JlZ2V4cCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBqc1JlZ2V4cC50ZXN0KGN1cnJlbnRVcmwpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGluZGV4ICE9PSAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHVybCBlbmNvZGVkIHNpdGUgY29udGV4dCBwYXJhbWV0ZXJzLlxuICAgKlxuICAgKiBJdCBtYXBzIHRoZSBzdHJpbmcgXCJzdG9yZWZyb250XCIgKHVzZWQgaW4gT0NDKSB0byB0aGUgXCJiYXNlU2l0ZVwiICh1c2VkIGluIFNwYXJ0YWN1cylcbiAgICovXG4gIHByaXZhdGUgZ2V0VXJsUGFyYW1zKHBhcmFtczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgU1RPUkVGUk9OVF9QQVJBTSA9ICdzdG9yZWZyb250JztcblxuICAgIHJldHVybiAocGFyYW1zIHx8IFtdKS5tYXAocGFyYW0gPT5cbiAgICAgIHBhcmFtID09PSBTVE9SRUZST05UX1BBUkFNID8gQkFTRV9TSVRFX0NPTlRFWFRfSUQgOiBwYXJhbVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBpc28gY29kZXMgaW4gYSBhcnJheSwgd2hlcmUgdGhlIGZpcnN0IGVsZW1lbnQgaXMgdGhlIGRlZmF1bHQgaXNvIGNvZGUuXG4gICAqL1xuICBwcml2YXRlIGdldElzb0NvZGVzKFxuICAgIGVsZW1lbnRzOiB7IGlzb2NvZGU/OiBzdHJpbmcgfVtdLFxuICAgIGRlZmF1bHRFbGVtZW50OiB7IGlzb2NvZGU/OiBzdHJpbmcgfVxuICApIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLm1vdmVUb0ZpcnN0KFxuICAgICAgZWxlbWVudHMsXG4gICAgICBlbCA9PiBlbC5pc29jb2RlID09PSBkZWZhdWx0RWxlbWVudC5pc29jb2RlXG4gICAgKS5tYXAoZWwgPT4gZWwuaXNvY29kZSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlcyB0byB0aGUgc3RhcnQgb2YgdGhlIGFycmF5IHRoZSBmaXJzdCBlbGVtZW50IHRoYXQgc2F0aXNmaWVzIHRoZSBnaXZlbiBwcmVkaWNhdGUuXG4gICAqXG4gICAqIEBwYXJhbSBhcnJheSBhcnJheSB0byBtb2RpZnlcbiAgICogQHBhcmFtIHByZWRpY2F0ZSBmdW5jdGlvbiBjYWxsZWQgb24gZWxlbWVudHNcbiAgICovXG4gIHByaXZhdGUgbW92ZVRvRmlyc3QoYXJyYXk6IGFueVtdLCBwcmVkaWNhdGU6IChlbDogYW55KSA9PiBib29sZWFuKTogYW55W10ge1xuICAgIGFycmF5ID0gWy4uLmFycmF5XTtcbiAgICBjb25zdCBpbmRleCA9IGFycmF5LmZpbmRJbmRleChwcmVkaWNhdGUpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IFtlbF0gPSBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgYXJyYXkudW5zaGlmdChlbCk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RXJyb3IobWVzc2FnZTogc3RyaW5nKTogRXJyb3Ige1xuICAgIHJldHVybiBuZXcgRXJyb3IoYEVycm9yOiBDYW5ub3QgZ2V0IGJhc2Ugc2l0ZSBjb25maWchICR7bWVzc2FnZX1gKTtcbiAgfVxufVxuIl19
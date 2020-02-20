import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BASE_SITE_CONTEXT_ID, CURRENCY_CONTEXT_ID, LANGUAGE_CONTEXT_ID, } from '../../site-context/providers/context-ids';
import { JavaRegExpConverter } from './java-reg-exp-converter';
import * as i0 from "@angular/core";
import * as i1 from "./java-reg-exp-converter";
let OccLoadedConfigConverter = class OccLoadedConfigConverter {
    constructor(javaRegExpConverter) {
        this.javaRegExpConverter = javaRegExpConverter;
    }
    fromOccBaseSites(baseSites, currentUrl) {
        const baseSite = baseSites.find(site => this.isCurrentBaseSite(site, currentUrl));
        if (!baseSite) {
            throw this.getError(`Current url (${currentUrl}) doesn't match with any of url patterns of any base site.`);
        }
        // Although `stores` property is an array, typically there is only one store. So we return the first store from the list.
        const baseStore = baseSite.stores && baseSite.stores[0];
        if (!baseStore) {
            throw this.getError(`Current base site (${baseSite.uid}) doesn't have any base store.`);
        }
        return {
            baseSite: baseSite.uid,
            languages: this.getIsoCodes(baseStore.languages, baseSite.defaultLanguage || baseStore.defaultLanguage),
            currencies: this.getIsoCodes(baseStore.currencies, baseStore.defaultCurrency),
            urlParameters: this.getUrlParams(baseSite.urlEncodingAttributes),
        };
    }
    toSiteContextConfig({ baseSite, languages, currencies, urlParameters: urlEncodingAttributes, }) {
        const result = {
            context: {
                urlParameters: urlEncodingAttributes,
                [BASE_SITE_CONTEXT_ID]: [baseSite],
                [LANGUAGE_CONTEXT_ID]: languages,
                [CURRENCY_CONTEXT_ID]: currencies,
            },
        };
        return result;
    }
    toI18nConfig({ languages }) {
        return { i18n: { fallbackLang: languages[0] } };
    }
    isCurrentBaseSite(site, currentUrl) {
        const index = (site.urlPatterns || []).findIndex(javaRegexp => {
            const jsRegexp = this.javaRegExpConverter.toJsRegExp(javaRegexp);
            if (jsRegexp) {
                const result = jsRegexp.test(currentUrl);
                return result;
            }
        });
        return index !== -1;
    }
    /**
     * Returns an array of url encoded site context parameters.
     *
     * It maps the string "storefront" (used in OCC) to the "baseSite" (used in Spartacus)
     */
    getUrlParams(params) {
        const STOREFRONT_PARAM = 'storefront';
        return (params || []).map(param => param === STOREFRONT_PARAM ? BASE_SITE_CONTEXT_ID : param);
    }
    /**
     * Returns iso codes in a array, where the first element is the default iso code.
     */
    getIsoCodes(elements, defaultElement) {
        const result = this.moveToFirst(elements, el => el.isocode === defaultElement.isocode).map(el => el.isocode);
        return result;
    }
    /**
     * Moves to the start of the array the first element that satisfies the given predicate.
     *
     * @param array array to modify
     * @param predicate function called on elements
     */
    moveToFirst(array, predicate) {
        array = [...array];
        const index = array.findIndex(predicate);
        if (index !== -1) {
            const [el] = array.splice(index, 1);
            array.unshift(el);
        }
        return array;
    }
    getError(message) {
        return new Error(`Error: Cannot get base site config! ${message}`);
    }
};
OccLoadedConfigConverter.ctorParameters = () => [
    { type: JavaRegExpConverter }
];
OccLoadedConfigConverter.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccLoadedConfigConverter_Factory() { return new OccLoadedConfigConverter(i0.ɵɵinject(i1.JavaRegExpConverter)); }, token: OccLoadedConfigConverter, providedIn: "root" });
OccLoadedConfigConverter = __decorate([
    Injectable({ providedIn: 'root' })
], OccLoadedConfigConverter);
export { OccLoadedConfigConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWxvYWRlZC1jb25maWctY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9jb25maWctbG9hZGVyL29jYy1sb2FkZWQtY29uZmlnLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLG1CQUFtQixFQUNuQixtQkFBbUIsR0FDcEIsTUFBTSwwQ0FBMEMsQ0FBQztBQUVsRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBSS9ELElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBQ25DLFlBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQUcsQ0FBQztJQUVoRSxnQkFBZ0IsQ0FBQyxTQUFxQixFQUFFLFVBQWtCO1FBQ3hELE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDckMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FDekMsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixNQUFNLElBQUksQ0FBQyxRQUFRLENBQ2pCLGdCQUFnQixVQUFVLDREQUE0RCxDQUN2RixDQUFDO1NBQ0g7UUFFRCx5SEFBeUg7UUFDekgsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxNQUFNLElBQUksQ0FBQyxRQUFRLENBQ2pCLHNCQUFzQixRQUFRLENBQUMsR0FBRyxnQ0FBZ0MsQ0FDbkUsQ0FBQztTQUNIO1FBRUQsT0FBTztZQUNMLFFBQVEsRUFBRSxRQUFRLENB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bkI7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTyxRQUFRLENBQUMsT0FBZTtRQUM5QixPQUFPLElBQUksS0FBSyxDQUFDLHVDQUF1QyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Q0FDRixDQUFBOztZQWpIMEMsbUJBQW1COzs7QUFEakQsd0JBQXdCO0lBRHBDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUN0Qix3QkFBd0IsQ0FrSHBDO1NBbEhZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEkxOG5Db25maWcgfSBmcm9tICcuLi8uLi9pMThuJztcbmltcG9ydCB7IEJhc2VTaXRlIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9jb25maWcvc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQge1xuICBCQVNFX1NJVEVfQ09OVEVYVF9JRCxcbiAgQ1VSUkVOQ1lfQ09OVEVYVF9JRCxcbiAgTEFOR1VBR0VfQ09OVEVYVF9JRCxcbn0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L3Byb3ZpZGVycy9jb250ZXh0LWlkcyc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgSmF2YVJlZ0V4cENvbnZlcnRlciB9IGZyb20gJy4vamF2YS1yZWctZXhwLWNvbnZlcnRlcic7XG5pbXBvcnQgeyBPY2NMb2FkZWRDb25maWcgfSBmcm9tICcuL29jYy1sb2FkZWQtY29uZmlnJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBPY2NMb2FkZWRDb25maWdDb252ZXJ0ZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGphdmFSZWdFeHBDb252ZXJ0ZXI6IEphdmFSZWdFeHBDb252ZXJ0ZXIpIHt9XG5cbiAgZnJvbU9jY0Jhc2VTaXRlcyhiYXNlU2l0ZXM6IEJhc2VTaXRlW10sIGN1cnJlbnRVcmw6IHN0cmluZyk6IE9jY0xvYWRlZENvbmZpZyB7XG4gICAgY29uc3QgYmFzZVNpdGUgPSBiYXNlU2l0ZXMuZmluZChzaXRlID0+XG4gICAgICB0aGlzLmlzQ3VycmVudEJhc2VTaXRlKHNpdGUsIGN1cnJlbnRVcmwpXG4gICAgKTtcbiAgICBpZiAoIWJhc2VTaXRlKSB7XG4gICAgICB0aHJvdyB0aGlzLmdldEVycm9yKFxuICAgICAgICBgQ3VycmVudCB1cmwgKCR7Y3VycmVudFVybH0pIGRvZXNuJ3QgbWF0Y2ggd2l0aCBhbnkgb2YgdXJsIHBhdHRlcm5zIG9mIGFueSBiYXNlIHNpdGUuYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBBbHRob3VnaCBgc3RvcmVzYCBwcm9wZXJ0eSBpcyBhbiBhcnJheSwgdHlwaWNhbGx5IHRoZXJlIGlzIG9ubHkgb25lIHN0b3JlLiBTbyB3ZSByZXR1cm4gdGhlIGZpcnN0IHN0b3JlIGZyb20gdGhlIGxpc3QuXG4gICAgY29uc3QgYmFzZVN0b3JlID0gYmFzZVNpdGUuc3RvcmVzICYmIGJhc2VTaXRlLnN0b3Jlc1swXTtcbiAgICBpZiAoIWJhc2VTdG9yZSkge1xuICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcihcbiAgICAgICAgYEN1cnJlbnQgYmFzZSBzaXRlICgke2Jhc2VTaXRlLnVpZH0pIGRvZXNuJ3QgaGF2ZSBhbnkgYmFzZSBzdG9yZS5gXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBiYXNlU2l0ZTogYmFzZVNpdGUudWlkLFxuICAgICAgbGFuZ3VhZ2VzOiB0aGlzLmdldElzb0NvZGVzKFxuICAgICAgICBiYXNlU3RvcmUubGFuZ3VhZ2VzLFxuICAgICAgICBiYXNlU2l0ZS5kZWZhdWx0TGFuZ3VhZ2UgfHwgYmFzZVN0b3JlLmRlZmF1bHRMYW5ndWFnZVxuICAgICAgKSxcbiAgICAgIGN1cnJlbmNpZXM6IHRoaXMuZ2V0SXNvQ29kZXMoXG4gICAgICAgIGJhc2VTdG9yZS5jdXJyZW5jaWVzLFxuICAgICAgICBiYXNlU3RvcmUuZGVmYXVsdEN1cnJlbmN5XG4gICAgICApLFxuICAgICAgdXJsUGFyYW1ldGVyczogdGhpcy5nZXRVcmxQYXJhbXMoYmFzZVNpdGUudXJsRW5jb2RpbmdBdHRyaWJ1dGVzKSxcbiAgICB9O1xuICB9XG5cbiAgdG9TaXRlQ29udGV4dENvbmZpZyh7XG4gICAgYmFzZVNpdGUsXG4gICAgbGFuZ3VhZ2VzLFxuICAgIGN1cnJlbmNpZXMsXG4gICAgdXJsUGFyYW1ldGVyczogdXJsRW5jb2RpbmdBdHRyaWJ1dGVzLFxuICB9OiBPY2NMb2FkZWRDb25maWcpOiBTaXRlQ29udGV4dENvbmZpZyB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgY29udGV4dDoge1xuICAgICAgICB1cmxQYXJhbWV0ZXJzOiB1cmxFbmNvZGluZ0F0dHJpYnV0ZXMsXG4gICAgICAgIFtCQVNFX1NJVEVfQ09OVEVYVF9JRF06IFtiYXNlU2l0ZV0sXG4gICAgICAgIFtMQU5HVUFHRV9DT05URVhUX0lEXTogbGFuZ3VhZ2VzLFxuICAgICAgICBbQ1VSUkVOQ1lfQ09OVEVYVF9JRF06IGN1cnJlbmNpZXMsXG4gICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHRvSTE4bkNvbmZpZyh7IGxhbmd1YWdlcyB9OiBPY2NMb2FkZWRDb25maWcpOiBJMThuQ29uZmlnIHtcbiAgICByZXR1cm4geyBpMThuOiB7IGZhbGxiYWNrTGFuZzogbGFuZ3VhZ2VzWzBdIH0gfTtcbiAgfVxuXG4gIHByaXZhdGUgaXNDdXJyZW50QmFzZVNpdGUoc2l0ZTogT2NjLkJhc2VTaXRlLCBjdXJyZW50VXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBpbmRleCA9IChzaXRlLnVybFBhdHRlcm5zIHx8IFtdKS5maW5kSW5kZXgoamF2YVJlZ2V4cCA9PiB7XG4gICAgICBjb25zdCBqc1JlZ2V4cCA9IHRoaXMuamF2YVJlZ0V4cENvbnZlcnRlci50b0pzUmVnRXhwKGphdmFSZWdleHApO1xuICAgICAgaWYgKGpzUmVnZXhwKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGpzUmVnZXhwLnRlc3QoY3VycmVudFVybCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaW5kZXggIT09IC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdXJsIGVuY29kZWQgc2l0ZSBjb250ZXh0IHBhcmFtZXRlcnMuXG4gICAqXG4gICAqIEl0IG1hcHMgdGhlIHN0cmluZyBcInN0b3JlZnJvbnRcIiAodXNlZCBpbiBPQ0MpIHRvIHRoZSBcImJhc2VTaXRlXCIgKHVzZWQgaW4gU3BhcnRhY3VzKVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRVcmxQYXJhbXMocGFyYW1zOiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBTVE9SRUZST05UX1BBUkFNID0gJ3N0b3JlZnJvbnQnO1xuXG4gICAgcmV0dXJuIChwYXJhbXMgfHwgW10pLm1hcChwYXJhbSA9PlxuICAgICAgcGFyYW0gPT09IFNUT1JFRlJPTlRfUEFSQU0gPyBCQVNFX1NJVEVfQ09OVEVYVF9JRCA6IHBhcmFtXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGlzbyBjb2RlcyBpbiBhIGFycmF5LCB3aGVyZSB0aGUgZmlyc3QgZWxlbWVudCBpcyB0aGUgZGVmYXVsdCBpc28gY29kZS5cbiAgICovXG4gIHByaXZhdGUgZ2V0SXNvQ29kZXMoXG4gICAgZWxlbWVudHM6IHsgaXNvY29kZT86IHN0cmluZyB9W10sXG4gICAgZGVmYXVsdEVsZW1lbnQ6IHsgaXNvY29kZT86IHN0cmluZyB9XG4gICkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubW92ZVRvRmlyc3QoXG4gICAgICBlbGVtZW50cyxcbiAgICAgIGVsID0+IGVsLmlzb2NvZGUgPT09IGRlZmF1bHRFbGVtZW50Lmlzb2NvZGVcbiAgICApLm1hcChlbCA9PiBlbC5pc29jb2RlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmVzIHRvIHRoZSBzdGFydCBvZiB0aGUgYXJyYXkgdGhlIGZpcnN0IGVsZW1lbnQgdGhhdCBzYXRpc2ZpZXMgdGhlIGdpdmVuIHByZWRpY2F0ZS5cbiAgICpcbiAgICogQHBhcmFtIGFycmF5IGFycmF5IHRvIG1vZGlmeVxuICAgKiBAcGFyYW0gcHJlZGljYXRlIGZ1bmN0aW9uIGNhbGxlZCBvbiBlbGVtZW50c1xuICAgKi9cbiAgcHJpdmF0ZSBtb3ZlVG9GaXJzdChhcnJheTogYW55W10sIHByZWRpY2F0ZTogKGVsOiBhbnkpID0+IGJvb2xlYW4pOiBhbnlbXSB7XG4gICAgYXJyYXkgPSBbLi4uYXJyYXldO1xuICAgIGNvbnN0IGluZGV4ID0gYXJyYXkuZmluZEluZGV4KHByZWRpY2F0ZSk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3QgW2VsXSA9IGFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICBhcnJheS51bnNoaWZ0KGVsKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFcnJvcihtZXNzYWdlOiBzdHJpbmcpOiBFcnJvciB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgRXJyb3I6IENhbm5vdCBnZXQgYmFzZSBzaXRlIGNvbmZpZyEgJHttZXNzYWdlfWApO1xuICB9XG59XG4iXX0=
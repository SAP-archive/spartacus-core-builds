import { Injectable } from '@angular/core';
import { BASE_SITE_CONTEXT_ID, CURRENCY_CONTEXT_ID, LANGUAGE_CONTEXT_ID, } from '../../site-context/providers/context-ids';
import { JavaRegExpConverter } from './java-reg-exp-converter';
import * as i0 from "@angular/core";
import * as i1 from "./java-reg-exp-converter";
export class OccLoadedConfigConverter {
    constructor(javaRegExpConverter) {
        this.javaRegExpConverter = javaRegExpConverter;
    }
    fromOccBaseSites(baseSites, currentUrl) {
        const baseSite = baseSites.find((site) => this.isCurrentBaseSite(site, currentUrl));
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
        const index = (site.urlPatterns || []).findIndex((javaRegexp) => {
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
        return (params || []).map((param) => param === STOREFRONT_PARAM ? BASE_SITE_CONTEXT_ID : param);
    }
    /**
     * Returns iso codes in a array, where the first element is the default iso code.
     */
    getIsoCodes(elements, defaultElement) {
        const result = this.moveToFirst(elements, (el) => el.isocode === defaultElement.isocode).map((el) => el.isocode);
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
}
OccLoadedConfigConverter.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccLoadedConfigConverter_Factory() { return new OccLoadedConfigConverter(i0.ɵɵinject(i1.JavaRegExpConverter)); }, token: OccLoadedConfigConverter, providedIn: "root" });
OccLoadedConfigConverter.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
OccLoadedConfigConverter.ctorParameters = () => [
    { type: JavaRegExpConverter }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWxvYWRlZC1jb25maWctY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvb2NjL2NvbmZpZy1sb2FkZXIvb2NjLWxvYWRlZC1jb25maWctY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsbUJBQW1CLEdBQ3BCLE1BQU0sMENBQTBDLENBQUM7QUFFbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUkvRCxNQUFNLE9BQU8sd0JBQXdCO0lBQ25DLFlBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQUcsQ0FBQztJQUVoRSxnQkFBZ0IsQ0FBQyxTQUFxQixFQUFFLFVBQWtCO1FBQ3hELE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUN2QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUN6QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FDakIsZ0JBQWdCLFVBQVUsNERBQTRELENBQ3ZGLENBQUM7U0FDSDtRQUVELHlIQUF5SDtRQUN6SCxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FDakIsc0JBQXNCLFFBQVEsQ0FBQyxHQUFHLGdDQUFnQyxDQUNuRSxDQUFDO1NBQ0g7UUFFRCxPQUFPO1lBQ0wsUUFBUSxFQUFFLFFBQVEs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QUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ25CO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU8sUUFBUSxDQUFDLE9BQWU7UUFDOUIsT0FBTyxJQUFJLEtBQUssQ0FBQyx1Q0FBdUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7O1lBbEhGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OztZQUh6QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJMThuQ29uZmlnIH0gZnJvbSAnLi4vLi4vaTE4bic7XG5pbXBvcnQgeyBCYXNlU2l0ZSB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvY29uZmlnL3NpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHtcbiAgQkFTRV9TSVRFX0NPTlRFWFRfSUQsXG4gIENVUlJFTkNZX0NPTlRFWFRfSUQsXG4gIExBTkdVQUdFX0NPTlRFWFRfSUQsXG59IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9wcm92aWRlcnMvY29udGV4dC1pZHMnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IEphdmFSZWdFeHBDb252ZXJ0ZXIgfSBmcm9tICcuL2phdmEtcmVnLWV4cC1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgT2NjTG9hZGVkQ29uZmlnIH0gZnJvbSAnLi9vY2MtbG9hZGVkLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT2NjTG9hZGVkQ29uZmlnQ29udmVydGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBqYXZhUmVnRXhwQ29udmVydGVyOiBKYXZhUmVnRXhwQ29udmVydGVyKSB7fVxuXG4gIGZyb21PY2NCYXNlU2l0ZXMoYmFzZVNpdGVzOiBCYXNlU2l0ZVtdLCBjdXJyZW50VXJsOiBzdHJpbmcpOiBPY2NMb2FkZWRDb25maWcge1xuICAgIGNvbnN0IGJhc2VTaXRlID0gYmFzZVNpdGVzLmZpbmQoKHNpdGUpID0+XG4gICAgICB0aGlzLmlzQ3VycmVudEJhc2VTaXRlKHNpdGUsIGN1cnJlbnRVcmwpXG4gICAgKTtcbiAgICBpZiAoIWJhc2VTaXRlKSB7XG4gICAgICB0aHJvdyB0aGlzLmdldEVycm9yKFxuICAgICAgICBgQ3VycmVudCB1cmwgKCR7Y3VycmVudFVybH0pIGRvZXNuJ3QgbWF0Y2ggd2l0aCBhbnkgb2YgdXJsIHBhdHRlcm5zIG9mIGFueSBiYXNlIHNpdGUuYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBBbHRob3VnaCBgc3RvcmVzYCBwcm9wZXJ0eSBpcyBhbiBhcnJheSwgdHlwaWNhbGx5IHRoZXJlIGlzIG9ubHkgb25lIHN0b3JlLiBTbyB3ZSByZXR1cm4gdGhlIGZpcnN0IHN0b3JlIGZyb20gdGhlIGxpc3QuXG4gICAgY29uc3QgYmFzZVN0b3JlID0gYmFzZVNpdGUuc3RvcmVzICYmIGJhc2VTaXRlLnN0b3Jlc1swXTtcbiAgICBpZiAoIWJhc2VTdG9yZSkge1xuICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcihcbiAgICAgICAgYEN1cnJlbnQgYmFzZSBzaXRlICgke2Jhc2VTaXRlLnVpZH0pIGRvZXNuJ3QgaGF2ZSBhbnkgYmFzZSBzdG9yZS5gXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBiYXNlU2l0ZTogYmFzZVNpdGUudWlkLFxuICAgICAgbGFuZ3VhZ2VzOiB0aGlzLmdldElzb0NvZGVzKFxuICAgICAgICBiYXNlU3RvcmUubGFuZ3VhZ2VzLFxuICAgICAgICBiYXNlU2l0ZS5kZWZhdWx0TGFuZ3VhZ2UgfHwgYmFzZVN0b3JlLmRlZmF1bHRMYW5ndWFnZVxuICAgICAgKSxcbiAgICAgIGN1cnJlbmNpZXM6IHRoaXMuZ2V0SXNvQ29kZXMoXG4gICAgICAgIGJhc2VTdG9yZS5jdXJyZW5jaWVzLFxuICAgICAgICBiYXNlU3RvcmUuZGVmYXVsdEN1cnJlbmN5XG4gICAgICApLFxuICAgICAgdXJsUGFyYW1ldGVyczogdGhpcy5nZXRVcmxQYXJhbXMoYmFzZVNpdGUudXJsRW5jb2RpbmdBdHRyaWJ1dGVzKSxcbiAgICB9O1xuICB9XG5cbiAgdG9TaXRlQ29udGV4dENvbmZpZyh7XG4gICAgYmFzZVNpdGUsXG4gICAgbGFuZ3VhZ2VzLFxuICAgIGN1cnJlbmNpZXMsXG4gICAgdXJsUGFyYW1ldGVyczogdXJsRW5jb2RpbmdBdHRyaWJ1dGVzLFxuICB9OiBPY2NMb2FkZWRDb25maWcpOiBTaXRlQ29udGV4dENvbmZpZyB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgY29udGV4dDoge1xuICAgICAgICB1cmxQYXJhbWV0ZXJzOiB1cmxFbmNvZGluZ0F0dHJpYnV0ZXMsXG4gICAgICAgIFtCQVNFX1NJVEVfQ09OVEVYVF9JRF06IFtiYXNlU2l0ZV0sXG4gICAgICAgIFtMQU5HVUFHRV9DT05URVhUX0lEXTogbGFuZ3VhZ2VzLFxuICAgICAgICBbQ1VSUkVOQ1lfQ09OVEVYVF9JRF06IGN1cnJlbmNpZXMsXG4gICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHRvSTE4bkNvbmZpZyh7IGxhbmd1YWdlcyB9OiBPY2NMb2FkZWRDb25maWcpOiBJMThuQ29uZmlnIHtcbiAgICByZXR1cm4geyBpMThuOiB7IGZhbGxiYWNrTGFuZzogbGFuZ3VhZ2VzWzBdIH0gfTtcbiAgfVxuXG4gIHByaXZhdGUgaXNDdXJyZW50QmFzZVNpdGUoc2l0ZTogT2NjLkJhc2VTaXRlLCBjdXJyZW50VXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBpbmRleCA9IChzaXRlLnVybFBhdHRlcm5zIHx8IFtdKS5maW5kSW5kZXgoKGphdmFSZWdleHApID0+IHtcbiAgICAgIGNvbnN0IGpzUmVnZXhwID0gdGhpcy5qYXZhUmVnRXhwQ29udmVydGVyLnRvSnNSZWdFeHAoamF2YVJlZ2V4cCk7XG4gICAgICBpZiAoanNSZWdleHApIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ganNSZWdleHAudGVzdChjdXJyZW50VXJsKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBpbmRleCAhPT0gLTE7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB1cmwgZW5jb2RlZCBzaXRlIGNvbnRleHQgcGFyYW1ldGVycy5cbiAgICpcbiAgICogSXQgbWFwcyB0aGUgc3RyaW5nIFwic3RvcmVmcm9udFwiICh1c2VkIGluIE9DQykgdG8gdGhlIFwiYmFzZVNpdGVcIiAodXNlZCBpbiBTcGFydGFjdXMpXG4gICAqL1xuICBwcml2YXRlIGdldFVybFBhcmFtcyhwYXJhbXM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IFNUT1JFRlJPTlRfUEFSQU0gPSAnc3RvcmVmcm9udCc7XG5cbiAgICByZXR1cm4gKHBhcmFtcyB8fCBbXSkubWFwKChwYXJhbSkgPT5cbiAgICAgIHBhcmFtID09PSBTVE9SRUZST05UX1BBUkFNID8gQkFTRV9TSVRFX0NPTlRFWFRfSUQgOiBwYXJhbVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBpc28gY29kZXMgaW4gYSBhcnJheSwgd2hlcmUgdGhlIGZpcnN0IGVsZW1lbnQgaXMgdGhlIGRlZmF1bHQgaXNvIGNvZGUuXG4gICAqL1xuICBwcml2YXRlIGdldElzb0NvZGVzKFxuICAgIGVsZW1lbnRzOiB7IGlzb2NvZGU/OiBzdHJpbmcgfVtdLFxuICAgIGRlZmF1bHRFbGVtZW50OiB7IGlzb2NvZGU/OiBzdHJpbmcgfVxuICApIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLm1vdmVUb0ZpcnN0KFxuICAgICAgZWxlbWVudHMsXG4gICAgICAoZWwpID0+IGVsLmlzb2NvZGUgPT09IGRlZmF1bHRFbGVtZW50Lmlzb2NvZGVcbiAgICApLm1hcCgoZWwpID0+IGVsLmlzb2NvZGUpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdG8gdGhlIHN0YXJ0IG9mIHRoZSBhcnJheSB0aGUgZmlyc3QgZWxlbWVudCB0aGF0IHNhdGlzZmllcyB0aGUgZ2l2ZW4gcHJlZGljYXRlLlxuICAgKlxuICAgKiBAcGFyYW0gYXJyYXkgYXJyYXkgdG8gbW9kaWZ5XG4gICAqIEBwYXJhbSBwcmVkaWNhdGUgZnVuY3Rpb24gY2FsbGVkIG9uIGVsZW1lbnRzXG4gICAqL1xuICBwcml2YXRlIG1vdmVUb0ZpcnN0KGFycmF5OiBhbnlbXSwgcHJlZGljYXRlOiAoZWw6IGFueSkgPT4gYm9vbGVhbik6IGFueVtdIHtcbiAgICBhcnJheSA9IFsuLi5hcnJheV07XG4gICAgY29uc3QgaW5kZXggPSBhcnJheS5maW5kSW5kZXgocHJlZGljYXRlKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zdCBbZWxdID0gYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIGFycmF5LnVuc2hpZnQoZWwpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuICBwcml2YXRlIGdldEVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IEVycm9yIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKGBFcnJvcjogQ2Fubm90IGdldCBiYXNlIHNpdGUgY29uZmlnISAke21lc3NhZ2V9YCk7XG4gIH1cbn1cbiJdfQ==
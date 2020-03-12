import { I18nConfig } from '../../i18n';
import { BaseSite } from '../../model/misc.model';
import { SiteContextConfig } from '../../site-context/config/site-context-config';
import { JavaRegExpConverter } from './java-reg-exp-converter';
import { OccLoadedConfig } from './occ-loaded-config';
import * as ɵngcc0 from '@angular/core';
export declare class OccLoadedConfigConverter {
    private javaRegExpConverter;
    constructor(javaRegExpConverter: JavaRegExpConverter);
    fromOccBaseSites(baseSites: BaseSite[], currentUrl: string): OccLoadedConfig;
    toSiteContextConfig({ baseSite, languages, currencies, urlParameters: urlEncodingAttributes, }: OccLoadedConfig): SiteContextConfig;
    toI18nConfig({ languages }: OccLoadedConfig): I18nConfig;
    private isCurrentBaseSite;
    /**
     * Returns an array of url encoded site context parameters.
     *
     * It maps the string "storefront" (used in OCC) to the "baseSite" (used in Spartacus)
     */
    private getUrlParams;
    /**
     * Returns iso codes in a array, where the first element is the default iso code.
     */
    private getIsoCodes;
    /**
     * Moves to the start of the array the first element that satisfies the given predicate.
     *
     * @param array array to modify
     * @param predicate function called on elements
     */
    private moveToFirst;
    private getError;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccLoadedConfigConverter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWxvYWRlZC1jb25maWctY29udmVydGVyLmQudHMiLCJzb3VyY2VzIjpbIm9jYy1sb2FkZWQtY29uZmlnLWNvbnZlcnRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJMThuQ29uZmlnIH0gZnJvbSAnLi4vLi4vaTE4bic7XG5pbXBvcnQgeyBCYXNlU2l0ZSB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvY29uZmlnL3NpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHsgSmF2YVJlZ0V4cENvbnZlcnRlciB9IGZyb20gJy4vamF2YS1yZWctZXhwLWNvbnZlcnRlcic7XG5pbXBvcnQgeyBPY2NMb2FkZWRDb25maWcgfSBmcm9tICcuL29jYy1sb2FkZWQtY29uZmlnJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9jY0xvYWRlZENvbmZpZ0NvbnZlcnRlciB7XG4gICAgcHJpdmF0ZSBqYXZhUmVnRXhwQ29udmVydGVyO1xuICAgIGNvbnN0cnVjdG9yKGphdmFSZWdFeHBDb252ZXJ0ZXI6IEphdmFSZWdFeHBDb252ZXJ0ZXIpO1xuICAgIGZyb21PY2NCYXNlU2l0ZXMoYmFzZVNpdGVzOiBCYXNlU2l0ZVtdLCBjdXJyZW50VXJsOiBzdHJpbmcpOiBPY2NMb2FkZWRDb25maWc7XG4gICAgdG9TaXRlQ29udGV4dENvbmZpZyh7IGJhc2VTaXRlLCBsYW5ndWFnZXMsIGN1cnJlbmNpZXMsIHVybFBhcmFtZXRlcnM6IHVybEVuY29kaW5nQXR0cmlidXRlcywgfTogT2NjTG9hZGVkQ29uZmlnKTogU2l0ZUNvbnRleHRDb25maWc7XG4gICAgdG9JMThuQ29uZmlnKHsgbGFuZ3VhZ2VzIH06IE9jY0xvYWRlZENvbmZpZyk6IEkxOG5Db25maWc7XG4gICAgcHJpdmF0ZSBpc0N1cnJlbnRCYXNlU2l0ZTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHVybCBlbmNvZGVkIHNpdGUgY29udGV4dCBwYXJhbWV0ZXJzLlxuICAgICAqXG4gICAgICogSXQgbWFwcyB0aGUgc3RyaW5nIFwic3RvcmVmcm9udFwiICh1c2VkIGluIE9DQykgdG8gdGhlIFwiYmFzZVNpdGVcIiAodXNlZCBpbiBTcGFydGFjdXMpXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRVcmxQYXJhbXM7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBpc28gY29kZXMgaW4gYSBhcnJheSwgd2hlcmUgdGhlIGZpcnN0IGVsZW1lbnQgaXMgdGhlIGRlZmF1bHQgaXNvIGNvZGUuXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRJc29Db2RlcztcbiAgICAvKipcbiAgICAgKiBNb3ZlcyB0byB0aGUgc3RhcnQgb2YgdGhlIGFycmF5IHRoZSBmaXJzdCBlbGVtZW50IHRoYXQgc2F0aXNmaWVzIHRoZSBnaXZlbiBwcmVkaWNhdGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJyYXkgYXJyYXkgdG8gbW9kaWZ5XG4gICAgICogQHBhcmFtIHByZWRpY2F0ZSBmdW5jdGlvbiBjYWxsZWQgb24gZWxlbWVudHNcbiAgICAgKi9cbiAgICBwcml2YXRlIG1vdmVUb0ZpcnN0O1xuICAgIHByaXZhdGUgZ2V0RXJyb3I7XG59XG4iXX0=
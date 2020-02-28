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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWxvYWRlZC1jb25maWctY29udmVydGVyLmQudHMiLCJzb3VyY2VzIjpbIm9jYy1sb2FkZWQtY29uZmlnLWNvbnZlcnRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSTE4bkNvbmZpZyB9IGZyb20gJy4uLy4uL2kxOG4nO1xuaW1wb3J0IHsgQmFzZVNpdGUgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFNpdGVDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7IEphdmFSZWdFeHBDb252ZXJ0ZXIgfSBmcm9tICcuL2phdmEtcmVnLWV4cC1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgT2NjTG9hZGVkQ29uZmlnIH0gZnJvbSAnLi9vY2MtbG9hZGVkLWNvbmZpZyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPY2NMb2FkZWRDb25maWdDb252ZXJ0ZXIge1xuICAgIHByaXZhdGUgamF2YVJlZ0V4cENvbnZlcnRlcjtcbiAgICBjb25zdHJ1Y3RvcihqYXZhUmVnRXhwQ29udmVydGVyOiBKYXZhUmVnRXhwQ29udmVydGVyKTtcbiAgICBmcm9tT2NjQmFzZVNpdGVzKGJhc2VTaXRlczogQmFzZVNpdGVbXSwgY3VycmVudFVybDogc3RyaW5nKTogT2NjTG9hZGVkQ29uZmlnO1xuICAgIHRvU2l0ZUNvbnRleHRDb25maWcoeyBiYXNlU2l0ZSwgbGFuZ3VhZ2VzLCBjdXJyZW5jaWVzLCB1cmxQYXJhbWV0ZXJzOiB1cmxFbmNvZGluZ0F0dHJpYnV0ZXMsIH06IE9jY0xvYWRlZENvbmZpZyk6IFNpdGVDb250ZXh0Q29uZmlnO1xuICAgIHRvSTE4bkNvbmZpZyh7IGxhbmd1YWdlcyB9OiBPY2NMb2FkZWRDb25maWcpOiBJMThuQ29uZmlnO1xuICAgIHByaXZhdGUgaXNDdXJyZW50QmFzZVNpdGU7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiB1cmwgZW5jb2RlZCBzaXRlIGNvbnRleHQgcGFyYW1ldGVycy5cbiAgICAgKlxuICAgICAqIEl0IG1hcHMgdGhlIHN0cmluZyBcInN0b3JlZnJvbnRcIiAodXNlZCBpbiBPQ0MpIHRvIHRoZSBcImJhc2VTaXRlXCIgKHVzZWQgaW4gU3BhcnRhY3VzKVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0VXJsUGFyYW1zO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgaXNvIGNvZGVzIGluIGEgYXJyYXksIHdoZXJlIHRoZSBmaXJzdCBlbGVtZW50IGlzIHRoZSBkZWZhdWx0IGlzbyBjb2RlLlxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0SXNvQ29kZXM7XG4gICAgLyoqXG4gICAgICogTW92ZXMgdG8gdGhlIHN0YXJ0IG9mIHRoZSBhcnJheSB0aGUgZmlyc3QgZWxlbWVudCB0aGF0IHNhdGlzZmllcyB0aGUgZ2l2ZW4gcHJlZGljYXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIGFycmF5IGFycmF5IHRvIG1vZGlmeVxuICAgICAqIEBwYXJhbSBwcmVkaWNhdGUgZnVuY3Rpb24gY2FsbGVkIG9uIGVsZW1lbnRzXG4gICAgICovXG4gICAgcHJpdmF0ZSBtb3ZlVG9GaXJzdDtcbiAgICBwcml2YXRlIGdldEVycm9yO1xufVxuIl19
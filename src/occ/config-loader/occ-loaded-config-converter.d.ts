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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccLoadedConfigConverter, never>;
}

//# sourceMappingURL=occ-loaded-config-converter.d.ts.map
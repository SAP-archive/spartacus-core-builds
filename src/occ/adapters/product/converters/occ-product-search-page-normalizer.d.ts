import { ProductSearchPage } from '../../../../model/product-search.model';
import { Converter, ConverterService } from '../../../../util/converter.service';
import { Occ } from '../../../occ-models/occ.models';
import * as ɵngcc0 from '@angular/core';
export declare class OccProductSearchPageNormalizer implements Converter<Occ.ProductSearchPage, ProductSearchPage> {
    private converterService;
    constructor(converterService: ConverterService);
    /**
     * Specifies the minimal number of top values in case
     * non have been setup by the business.
     */
    protected DEFAULT_TOP_VALUES: number;
    convert(source: Occ.ProductSearchPage, target?: ProductSearchPage): ProductSearchPage;
    private normalizeFacets;
    /**
     * The (current) backend returns facets with values that do not contribute
     * to the facet navigation much, as the number in the result list will not get
     * behaviour, see https://jira.hybris.com/browse/CS-427.
     *
     * As long as this is not in place, we manually filter the facet from the list;
     * any facet that does not have a count < the total results will be dropped from
     * the facets.
     */
    private normalizeUselessFacets;
    private normalizeFacetValues;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccProductSearchPageNormalizer>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3Qtc2VhcmNoLXBhZ2Utbm9ybWFsaXplci5kLnRzIiwic291cmNlcyI6WyJvY2MtcHJvZHVjdC1zZWFyY2gtcGFnZS1ub3JtYWxpemVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0U2VhcmNoUGFnZSB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL3Byb2R1Y3Qtc2VhcmNoLm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlciwgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9jY1Byb2R1Y3RTZWFyY2hQYWdlTm9ybWFsaXplciBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuUHJvZHVjdFNlYXJjaFBhZ2UsIFByb2R1Y3RTZWFyY2hQYWdlPiB7XG4gICAgcHJpdmF0ZSBjb252ZXJ0ZXJTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGNvbnZlcnRlclNlcnZpY2U6IENvbnZlcnRlclNlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB0aGUgbWluaW1hbCBudW1iZXIgb2YgdG9wIHZhbHVlcyBpbiBjYXNlXG4gICAgICogbm9uIGhhdmUgYmVlbiBzZXR1cCBieSB0aGUgYnVzaW5lc3MuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIERFRkFVTFRfVE9QX1ZBTFVFUzogbnVtYmVyO1xuICAgIGNvbnZlcnQoc291cmNlOiBPY2MuUHJvZHVjdFNlYXJjaFBhZ2UsIHRhcmdldD86IFByb2R1Y3RTZWFyY2hQYWdlKTogUHJvZHVjdFNlYXJjaFBhZ2U7XG4gICAgcHJpdmF0ZSBub3JtYWxpemVGYWNldHM7XG4gICAgLyoqXG4gICAgICogVGhlIChjdXJyZW50KSBiYWNrZW5kIHJldHVybnMgZmFjZXRzIHdpdGggdmFsdWVzIHRoYXQgZG8gbm90IGNvbnRyaWJ1dGVcbiAgICAgKiB0byB0aGUgZmFjZXQgbmF2aWdhdGlvbiBtdWNoLCBhcyB0aGUgbnVtYmVyIGluIHRoZSByZXN1bHQgbGlzdCB3aWxsIG5vdCBnZXRcbiAgICAgKiBiZWhhdmlvdXIsIHNlZSBodHRwczovL2ppcmEuaHlicmlzLmNvbS9icm93c2UvQ1MtNDI3LlxuICAgICAqXG4gICAgICogQXMgbG9uZyBhcyB0aGlzIGlzIG5vdCBpbiBwbGFjZSwgd2UgbWFudWFsbHkgZmlsdGVyIHRoZSBmYWNldCBmcm9tIHRoZSBsaXN0O1xuICAgICAqIGFueSBmYWNldCB0aGF0IGRvZXMgbm90IGhhdmUgYSBjb3VudCA8IHRoZSB0b3RhbCByZXN1bHRzIHdpbGwgYmUgZHJvcHBlZCBmcm9tXG4gICAgICogdGhlIGZhY2V0cy5cbiAgICAgKi9cbiAgICBwcml2YXRlIG5vcm1hbGl6ZVVzZWxlc3NGYWNldHM7XG4gICAgcHJpdmF0ZSBub3JtYWxpemVGYWNldFZhbHVlcztcbn1cbiJdfQ==
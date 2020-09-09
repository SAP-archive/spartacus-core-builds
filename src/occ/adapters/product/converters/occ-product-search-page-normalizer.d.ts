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
     * behavior, see https://jira.hybris.com/browse/CS-427.
     *
     * As long as this is not in place, we manually filter the facet from the list;
     * any facet that does not have a count < the total results will be dropped from
     * the facets.
     */
    private normalizeUselessFacets;
    private normalizeFacetValues;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccProductSearchPageNormalizer, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3Qtc2VhcmNoLXBhZ2Utbm9ybWFsaXplci5kLnRzIiwic291cmNlcyI6WyJvY2MtcHJvZHVjdC1zZWFyY2gtcGFnZS1ub3JtYWxpemVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3RTZWFyY2hQYWdlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC1zZWFyY2gubW9kZWwnO1xuaW1wb3J0IHsgQ29udmVydGVyLCBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT2NjUHJvZHVjdFNlYXJjaFBhZ2VOb3JtYWxpemVyIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5Qcm9kdWN0U2VhcmNoUGFnZSwgUHJvZHVjdFNlYXJjaFBhZ2U+IHtcbiAgICBwcml2YXRlIGNvbnZlcnRlclNlcnZpY2U7XG4gICAgY29uc3RydWN0b3IoY29udmVydGVyU2VydmljZTogQ29udmVydGVyU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIHRoZSBtaW5pbWFsIG51bWJlciBvZiB0b3AgdmFsdWVzIGluIGNhc2VcbiAgICAgKiBub24gaGF2ZSBiZWVuIHNldHVwIGJ5IHRoZSBidXNpbmVzcy5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgREVGQVVMVF9UT1BfVkFMVUVTOiBudW1iZXI7XG4gICAgY29udmVydChzb3VyY2U6IE9jYy5Qcm9kdWN0U2VhcmNoUGFnZSwgdGFyZ2V0PzogUHJvZHVjdFNlYXJjaFBhZ2UpOiBQcm9kdWN0U2VhcmNoUGFnZTtcbiAgICBwcml2YXRlIG5vcm1hbGl6ZUZhY2V0cztcbiAgICAvKipcbiAgICAgKiBUaGUgKGN1cnJlbnQpIGJhY2tlbmQgcmV0dXJucyBmYWNldHMgd2l0aCB2YWx1ZXMgdGhhdCBkbyBub3QgY29udHJpYnV0ZVxuICAgICAqIHRvIHRoZSBmYWNldCBuYXZpZ2F0aW9uIG11Y2gsIGFzIHRoZSBudW1iZXIgaW4gdGhlIHJlc3VsdCBsaXN0IHdpbGwgbm90IGdldFxuICAgICAqIGJlaGF2aW9yLCBzZWUgaHR0cHM6Ly9qaXJhLmh5YnJpcy5jb20vYnJvd3NlL0NTLTQyNy5cbiAgICAgKlxuICAgICAqIEFzIGxvbmcgYXMgdGhpcyBpcyBub3QgaW4gcGxhY2UsIHdlIG1hbnVhbGx5IGZpbHRlciB0aGUgZmFjZXQgZnJvbSB0aGUgbGlzdDtcbiAgICAgKiBhbnkgZmFjZXQgdGhhdCBkb2VzIG5vdCBoYXZlIGEgY291bnQgPCB0aGUgdG90YWwgcmVzdWx0cyB3aWxsIGJlIGRyb3BwZWQgZnJvbVxuICAgICAqIHRoZSBmYWNldHMuXG4gICAgICovXG4gICAgcHJpdmF0ZSBub3JtYWxpemVVc2VsZXNzRmFjZXRzO1xuICAgIHByaXZhdGUgbm9ybWFsaXplRmFjZXRWYWx1ZXM7XG59XG4iXX0=
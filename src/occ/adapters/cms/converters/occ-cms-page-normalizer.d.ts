import { CmsStructureModel } from '../../../../cms/model/page.model';
import { Converter } from '../../../../util/converter.service';
import { Occ } from '../../../occ-models/occ.models';
import * as ɵngcc0 from '@angular/core';
export declare class OccCmsPageNormalizer implements Converter<Occ.CMSPage, CmsStructureModel> {
    convert(source: Occ.CMSPage, target?: CmsStructureModel): CmsStructureModel;
    /**
     * Converts the OCC cms page model to the `Page` in the `CmsStructureModel`.
     */
    protected normalizePageData(source: Occ.CMSPage, target: CmsStructureModel): void;
    /**
     * Adds a ContentSlotData for each page slot in the `CmsStructureModel`.
     */
    protected normalizePageSlotData(source: Occ.CMSPage, target: CmsStructureModel): void;
    /**
     * Registers the `ContentSlotComponentData` for each component.
     */
    protected normalizePageComponentData(source: Occ.CMSPage, target: CmsStructureModel): void;
    /**
     * Adds the actual component data whenever available in the CMS page data.
     *
     * If the data is not populated in this payload, it is loaded separately
     * (`OccCmsComponentAdapter`).
     */
    protected normalizeComponentData(source: Occ.CMSPage, target: CmsStructureModel): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccCmsPageNormalizer, never>;
}

//# sourceMappingURL=occ-cms-page-normalizer.d.ts.map
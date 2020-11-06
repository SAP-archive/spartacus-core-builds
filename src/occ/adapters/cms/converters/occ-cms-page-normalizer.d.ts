import { CmsStructureModel } from '../../../../cms/model/page.model';
import { Converter } from '../../../../util/converter.service';
import { Occ } from '../../../occ-models/occ.models';
export declare class OccCmsPageNormalizer implements Converter<Occ.CMSPage, CmsStructureModel> {
    convert(source: Occ.CMSPage, target?: CmsStructureModel): CmsStructureModel;
    private normalizePageData;
    private normalizePageSlotData;
    private normalizePageComponentData;
    private normalizeComponentData;
}

import { CMSPage } from '../../../occ';
import { CmsStructureModel } from '../../model/page.model';
import { Converter } from '../../../util/converter.service';
export declare class OccCmsPageNormalizer implements Converter<CMSPage, CmsStructureModel> {
    convert(source: CMSPage, target?: CmsStructureModel): CmsStructureModel;
    private normalizePageData;
    private normalizePageSlotData;
    private normalizePageComponentData;
    private normalizeComponentData;
}

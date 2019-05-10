import { CmsStructureModel } from '../../model/page.model';
import { Converter } from '../../../util/converter.service';
import { CMSPage } from '../../../model/cms.model';
export declare class OccCmsPageNormalizer implements Converter<CMSPage, CmsStructureModel> {
    convert(source: CMSPage, target?: CmsStructureModel): CmsStructureModel;
    private normalizePageData;
    private normalizePageSlotData;
    private normalizePageComponentData;
    private normalizeComponentData;
}

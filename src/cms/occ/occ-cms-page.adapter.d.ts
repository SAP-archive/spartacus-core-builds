import { CMSPage } from '../../occ/index';
import { CmsStructureModel } from '../model/page.model';
import { CmsPageAdapter } from '../services/cms-page.adapter';
export declare class OccCmsPageAdapter extends CmsPageAdapter<CMSPage> {
    adapt(source: CMSPage): CmsStructureModel;
    private serializePageData;
    private serializePageSlotData;
    private serializePageComponentData;
    private serializeComponentData;
}

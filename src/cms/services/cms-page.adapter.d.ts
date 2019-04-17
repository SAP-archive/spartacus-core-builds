import { CmsStructureModel } from '../model/page.model';
export declare abstract class CmsPageAdapter<S> {
    abstract adapt(source: S): CmsStructureModel;
}

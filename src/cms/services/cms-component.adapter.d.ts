import { CmsComponent } from '../../occ/occ-models/cms-component.models';
export declare abstract class CmsComponentAdapter<T> {
    abstract adapt(source: T): CmsComponent;
}

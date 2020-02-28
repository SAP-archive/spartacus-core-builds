import { CmsStructureModel } from '../../../../cms/model/page.model';
import { Converter } from '../../../../util/converter.service';
import { Occ } from '../../../occ-models/occ.models';
import * as ɵngcc0 from '@angular/core';
export declare class OccCmsPageNormalizer implements Converter<Occ.CMSPage, CmsStructureModel> {
    convert(source: Occ.CMSPage, target?: CmsStructureModel): CmsStructureModel;
    private normalizePageData;
    private normalizePageSlotData;
    private normalizePageComponentData;
    private normalizeComponentData;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccCmsPageNormalizer>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1wYWdlLW5vcm1hbGl6ZXIuZC50cyIsInNvdXJjZXMiOlsib2NjLWNtcy1wYWdlLW5vcm1hbGl6ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7O0FBTUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ21zU3RydWN0dXJlTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPY2NDbXNQYWdlTm9ybWFsaXplciBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuQ01TUGFnZSwgQ21zU3RydWN0dXJlTW9kZWw+IHtcbiAgICBjb252ZXJ0KHNvdXJjZTogT2NjLkNNU1BhZ2UsIHRhcmdldD86IENtc1N0cnVjdHVyZU1vZGVsKTogQ21zU3RydWN0dXJlTW9kZWw7XG4gICAgcHJpdmF0ZSBub3JtYWxpemVQYWdlRGF0YTtcbiAgICBwcml2YXRlIG5vcm1hbGl6ZVBhZ2VTbG90RGF0YTtcbiAgICBwcml2YXRlIG5vcm1hbGl6ZVBhZ2VDb21wb25lbnREYXRhO1xuICAgIHByaXZhdGUgbm9ybWFsaXplQ29tcG9uZW50RGF0YTtcbn1cbiJdfQ==
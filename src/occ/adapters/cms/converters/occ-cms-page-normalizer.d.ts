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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1wYWdlLW5vcm1hbGl6ZXIuZC50cyIsInNvdXJjZXMiOlsib2NjLWNtcy1wYWdlLW5vcm1hbGl6ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7O0FBTUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbXNTdHJ1Y3R1cmVNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9jY0Ntc1BhZ2VOb3JtYWxpemVyIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5DTVNQYWdlLCBDbXNTdHJ1Y3R1cmVNb2RlbD4ge1xuICAgIGNvbnZlcnQoc291cmNlOiBPY2MuQ01TUGFnZSwgdGFyZ2V0PzogQ21zU3RydWN0dXJlTW9kZWwpOiBDbXNTdHJ1Y3R1cmVNb2RlbDtcbiAgICBwcml2YXRlIG5vcm1hbGl6ZVBhZ2VEYXRhO1xuICAgIHByaXZhdGUgbm9ybWFsaXplUGFnZVNsb3REYXRhO1xuICAgIHByaXZhdGUgbm9ybWFsaXplUGFnZUNvbXBvbmVudERhdGE7XG4gICAgcHJpdmF0ZSBub3JtYWxpemVDb21wb25lbnREYXRhO1xufVxuIl19
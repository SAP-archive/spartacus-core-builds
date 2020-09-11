import { EntitiesModel } from '../../../../model/misc.model';
import { CostCenter } from '../../../../model/org-unit.model';
import { Converter, ConverterService } from '../../../../util/converter.service';
import { Occ } from '../../../occ-models/occ.models';
import * as ɵngcc0 from '@angular/core';
export declare class OccCostCenterListNormalizer implements Converter<Occ.CostCentersList, EntitiesModel<CostCenter>> {
    private converter;
    constructor(converter: ConverterService);
    convert(source: Occ.CostCentersList, target?: EntitiesModel<CostCenter>): EntitiesModel<CostCenter>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccCostCenterListNormalizer, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccCostCenterListNormalizer>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNvc3QtY2VudGVyLWxpc3Qtbm9ybWFsaXplci5kLnRzIiwic291cmNlcyI6WyJvY2MtY29zdC1jZW50ZXItbGlzdC1ub3JtYWxpemVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7OztBQUlBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXRpZXNNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgQ29zdENlbnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL29yZy11bml0Lm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlciwgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9jY0Nvc3RDZW50ZXJMaXN0Tm9ybWFsaXplciBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuQ29zdENlbnRlcnNMaXN0LCBFbnRpdGllc01vZGVsPENvc3RDZW50ZXI+PiB7XG4gICAgcHJpdmF0ZSBjb252ZXJ0ZXI7XG4gICAgY29uc3RydWN0b3IoY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlKTtcbiAgICBjb252ZXJ0KHNvdXJjZTogT2NjLkNvc3RDZW50ZXJzTGlzdCwgdGFyZ2V0PzogRW50aXRpZXNNb2RlbDxDb3N0Q2VudGVyPik6IEVudGl0aWVzTW9kZWw8Q29zdENlbnRlcj47XG59XG4iXX0=
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

//# sourceMappingURL=occ-cost-center-list-normalizer.d.ts.map
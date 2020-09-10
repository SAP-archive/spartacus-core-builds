import { Occ } from '../../../occ-models/occ.models';
import { Converter, ConverterService } from '../../../../util/converter.service';
import { EntitiesModel } from '../../../../model/misc.model';
import { CostCenter } from '../../../../model/org-unit.model';
export declare class OccCostCenterListNormalizer implements Converter<Occ.CostCentersList, EntitiesModel<CostCenter>> {
    private converter;
    constructor(converter: ConverterService);
    convert(source: Occ.CostCentersList, target?: EntitiesModel<CostCenter>): EntitiesModel<CostCenter>;
}

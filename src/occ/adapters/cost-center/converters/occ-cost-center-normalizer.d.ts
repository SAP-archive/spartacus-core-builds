import { Occ } from '../../../occ-models/occ.models';
import { Converter } from '../../../../util/converter.service';
import { CostCenter } from '../../../../model/org-unit.model';
export declare class OccCostCenterNormalizer implements Converter<Occ.CostCenter, CostCenter> {
    convert(source: Occ.CostCenter, target?: CostCenter): CostCenter;
}

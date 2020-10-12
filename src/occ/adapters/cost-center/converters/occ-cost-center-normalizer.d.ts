import { CostCenter } from '../../../../model/org-unit.model';
import { Converter } from '../../../../util/converter.service';
import { Occ } from '../../../occ-models/occ.models';
export declare class OccCostCenterNormalizer implements Converter<Occ.CostCenter, CostCenter> {
    convert(source: Occ.CostCenter, target?: CostCenter): CostCenter;
    /**
     * Returns the boolean value for a string property that is supposed
     * to be of type boolean.
     */
    protected normalizeBoolean(property: string | boolean): boolean;
}

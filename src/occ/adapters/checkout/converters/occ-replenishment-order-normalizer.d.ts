import { ReplenishmentOrder } from '../../../../model/replenishment-order.model';
import { Converter, ConverterService } from '../../../../util/converter.service';
import { Occ } from '../../../occ-models/occ.models';
import * as ɵngcc0 from '@angular/core';
export declare class OccReplenishmentOrderNormalizer implements Converter<Occ.ReplenishmentOrder, ReplenishmentOrder> {
    private converter;
    constructor(converter: ConverterService);
    convert(source: Occ.ReplenishmentOrder, target?: ReplenishmentOrder): ReplenishmentOrder;
    private convertOrderEntry;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccReplenishmentOrderNormalizer, never>;
}

//# sourceMappingURL=occ-replenishment-order-normalizer.d.ts.map
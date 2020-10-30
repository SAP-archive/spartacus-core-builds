import { ScheduleReplenishmentForm } from '../../../../model/replenishment-order.model';
import { Converter } from '../../../../util/converter.service';
import { Occ } from '../../../occ-models/occ.models';
import * as ɵngcc0 from '@angular/core';
export declare class OccReplenishmentOrderFormSerializer implements Converter<Occ.ScheduleReplenishmentForm, ScheduleReplenishmentForm> {
    constructor();
    convert(source: Occ.ScheduleReplenishmentForm, target?: ScheduleReplenishmentForm): ScheduleReplenishmentForm;
    /**
     * Converts the date string to the Standard ISO 8601 format
     */
    private convertDate;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccReplenishmentOrderFormSerializer, never>;
}

//# sourceMappingURL=occ-replenishment-order-form-serializer.d.ts.map
import { ScheduleReplenishmentForm } from '../../../../model/replenishment-order.model';
import { Converter } from '../../../../util/converter.service';
import { Occ } from '../../../occ-models/occ.models';
import { DateTimePickerFormatterService } from '../../../../util/date-time-picker-formatter.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccReplenishmentOrderFormSerializer implements Converter<Occ.ScheduleReplenishmentForm, ScheduleReplenishmentForm> {
    protected dateTimePickerFormatterService: DateTimePickerFormatterService;
    constructor(dateTimePickerFormatterService: DateTimePickerFormatterService);
    convert(source: Occ.ScheduleReplenishmentForm, target?: ScheduleReplenishmentForm): ScheduleReplenishmentForm;
    /**
     * Adds the current timestamp (including timezone offset) to a date string in the format YYYY-mm-dd
     * @Example
     * Converts 2021-10-15 to 2021-10-15T15:38:05-05:00
     */
    private convertDate;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccReplenishmentOrderFormSerializer, never>;
}

//# sourceMappingURL=occ-replenishment-order-form-serializer.d.ts.map
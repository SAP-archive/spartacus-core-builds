import { Occ } from '../../../occ-models/occ.models';
import { Converter, ConverterService } from '../../../../util/converter.service';
import { ReturnRequest } from '../../../../model/order.model';
import * as ɵngcc0 from '@angular/core';
export declare class OccReturnRequestNormalizer implements Converter<Occ.ReturnRequest, ReturnRequest> {
    private converter;
    constructor(converter: ConverterService);
    convert(source: Occ.ReturnRequest, target?: ReturnRequest): ReturnRequest;
    private convertOrderEntry;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccReturnRequestNormalizer>;
}

//# sourceMappingURL=occ-return-request-normalizer.d.ts.map
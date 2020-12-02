import { Occ } from '../../../occ-models/occ.models';
import { Converter, ConverterService } from '../../../../util/converter.service';
import { ReturnRequest } from '../../../../model/order.model';
export declare class OccReturnRequestNormalizer implements Converter<Occ.ReturnRequest, ReturnRequest> {
    private converter;
    constructor(converter: ConverterService);
    convert(source: Occ.ReturnRequest, target?: ReturnRequest): ReturnRequest;
    private convertOrderEntry;
}

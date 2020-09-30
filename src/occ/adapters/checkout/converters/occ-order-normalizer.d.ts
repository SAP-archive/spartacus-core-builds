import { Occ } from '../../../occ-models/occ.models';
import { Converter, ConverterService } from '../../../../util/converter.service';
import { Order } from '../../../../model/order.model';
export declare class OccOrderNormalizer implements Converter<Occ.Order, Order> {
    private converter;
    constructor(converter: ConverterService);
    convert(source: Occ.Order, target?: Order): Order;
    private convertOrderEntry;
}

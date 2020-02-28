import { Occ } from '../../../occ-models/occ.models';
import { Converter, ConverterService } from '../../../../util/converter.service';
import { Order } from '../../../../model/order.model';
import * as ɵngcc0 from '@angular/core';
export declare class OccOrderNormalizer implements Converter<Occ.Order, Order> {
    private converter;
    constructor(converter: ConverterService);
    convert(source: Occ.Order, target?: Order): Order;
    private convertOrderEntry;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccOrderNormalizer>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLW9yZGVyLW5vcm1hbGl6ZXIuZC50cyIsInNvdXJjZXMiOlsib2NjLW9yZGVyLW5vcm1hbGl6ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7QUFLQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udmVydGVyLCBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9jY09yZGVyTm9ybWFsaXplciBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuT3JkZXIsIE9yZGVyPiB7XG4gICAgcHJpdmF0ZSBjb252ZXJ0ZXI7XG4gICAgY29uc3RydWN0b3IoY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlKTtcbiAgICBjb252ZXJ0KHNvdXJjZTogT2NjLk9yZGVyLCB0YXJnZXQ/OiBPcmRlcik6IE9yZGVyO1xuICAgIHByaXZhdGUgY29udmVydE9yZGVyRW50cnk7XG59XG4iXX0=
import { Occ } from '../../../occ-models/occ.models';
import { Converter, ConverterService } from '../../../../util/converter.service';
import { Order } from '../../../../model/order.model';
import * as ɵngcc0 from '@angular/core';
export declare class OccOrderNormalizer implements Converter<Occ.Order, Order> {
    private converter;
    constructor(converter: ConverterService);
    convert(source: Occ.Order, target?: Order): Order;
    private convertOrderEntry;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccOrderNormalizer, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLW9yZGVyLW5vcm1hbGl6ZXIuZC50cyIsInNvdXJjZXMiOlsib2NjLW9yZGVyLW5vcm1hbGl6ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7QUFLQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBDb252ZXJ0ZXIsIENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT2NjT3JkZXJOb3JtYWxpemVyIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5PcmRlciwgT3JkZXI+IHtcbiAgICBwcml2YXRlIGNvbnZlcnRlcjtcbiAgICBjb25zdHJ1Y3Rvcihjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2UpO1xuICAgIGNvbnZlcnQoc291cmNlOiBPY2MuT3JkZXIsIHRhcmdldD86IE9yZGVyKTogT3JkZXI7XG4gICAgcHJpdmF0ZSBjb252ZXJ0T3JkZXJFbnRyeTtcbn1cbiJdfQ==
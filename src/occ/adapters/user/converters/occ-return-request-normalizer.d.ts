import { Occ } from '../../../occ-models/occ.models';
import { Converter, ConverterService } from '../../../../util/converter.service';
import { ReturnRequest } from '../../../../model/order.model';
import * as ɵngcc0 from '@angular/core';
export declare class OccReturnRequestNormalizer implements Converter<Occ.ReturnRequest, ReturnRequest> {
    private converter;
    constructor(converter: ConverterService);
    convert(source: Occ.ReturnRequest, target?: ReturnRequest): ReturnRequest;
    private convertOrderEntry;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccReturnRequestNormalizer, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXJldHVybi1yZXF1ZXN0LW5vcm1hbGl6ZXIuZC50cyIsInNvdXJjZXMiOlsib2NjLXJldHVybi1yZXF1ZXN0LW5vcm1hbGl6ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7QUFLQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBDb252ZXJ0ZXIsIENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFJldHVyblJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPY2NSZXR1cm5SZXF1ZXN0Tm9ybWFsaXplciBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuUmV0dXJuUmVxdWVzdCwgUmV0dXJuUmVxdWVzdD4ge1xuICAgIHByaXZhdGUgY29udmVydGVyO1xuICAgIGNvbnN0cnVjdG9yKGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSk7XG4gICAgY29udmVydChzb3VyY2U6IE9jYy5SZXR1cm5SZXF1ZXN0LCB0YXJnZXQ/OiBSZXR1cm5SZXF1ZXN0KTogUmV0dXJuUmVxdWVzdDtcbiAgICBwcml2YXRlIGNvbnZlcnRPcmRlckVudHJ5O1xufVxuIl19
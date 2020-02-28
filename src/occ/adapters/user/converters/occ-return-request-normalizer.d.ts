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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXJldHVybi1yZXF1ZXN0LW5vcm1hbGl6ZXIuZC50cyIsInNvdXJjZXMiOlsib2NjLXJldHVybi1yZXF1ZXN0LW5vcm1hbGl6ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7QUFLQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udmVydGVyLCBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBSZXR1cm5SZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT2NjUmV0dXJuUmVxdWVzdE5vcm1hbGl6ZXIgaW1wbGVtZW50cyBDb252ZXJ0ZXI8T2NjLlJldHVyblJlcXVlc3QsIFJldHVyblJlcXVlc3Q+IHtcbiAgICBwcml2YXRlIGNvbnZlcnRlcjtcbiAgICBjb25zdHJ1Y3Rvcihjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2UpO1xuICAgIGNvbnZlcnQoc291cmNlOiBPY2MuUmV0dXJuUmVxdWVzdCwgdGFyZ2V0PzogUmV0dXJuUmVxdWVzdCk6IFJldHVyblJlcXVlc3Q7XG4gICAgcHJpdmF0ZSBjb252ZXJ0T3JkZXJFbnRyeTtcbn1cbiJdfQ==
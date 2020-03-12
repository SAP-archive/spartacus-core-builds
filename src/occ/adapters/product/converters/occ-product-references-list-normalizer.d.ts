import { ProductReference } from '../../../../model/product.model';
import { Occ } from '../../../occ-models/occ.models';
import { Converter, ConverterService } from '../../../../util/converter.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccProductReferencesListNormalizer implements Converter<Occ.ProductReferenceList, ProductReference[]> {
    private converter;
    constructor(converter: ConverterService);
    convert(source: Occ.ProductReferenceList, target?: ProductReference[]): ProductReference[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccProductReferencesListNormalizer>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QtcmVmZXJlbmNlcy1saXN0LW5vcm1hbGl6ZXIuZC50cyIsInNvdXJjZXMiOlsib2NjLXByb2R1Y3QtcmVmZXJlbmNlcy1saXN0LW5vcm1hbGl6ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7OztBQUlBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZSB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IENvbnZlcnRlciwgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT2NjUHJvZHVjdFJlZmVyZW5jZXNMaXN0Tm9ybWFsaXplciBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuUHJvZHVjdFJlZmVyZW5jZUxpc3QsIFByb2R1Y3RSZWZlcmVuY2VbXT4ge1xuICAgIHByaXZhdGUgY29udmVydGVyO1xuICAgIGNvbnN0cnVjdG9yKGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSk7XG4gICAgY29udmVydChzb3VyY2U6IE9jYy5Qcm9kdWN0UmVmZXJlbmNlTGlzdCwgdGFyZ2V0PzogUHJvZHVjdFJlZmVyZW5jZVtdKTogUHJvZHVjdFJlZmVyZW5jZVtdO1xufVxuIl19
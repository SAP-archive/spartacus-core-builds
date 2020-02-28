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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QtcmVmZXJlbmNlcy1saXN0LW5vcm1hbGl6ZXIuZC50cyIsInNvdXJjZXMiOlsib2NjLXByb2R1Y3QtcmVmZXJlbmNlcy1saXN0LW5vcm1hbGl6ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7OztBQUlBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBDb252ZXJ0ZXIsIENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9jY1Byb2R1Y3RSZWZlcmVuY2VzTGlzdE5vcm1hbGl6ZXIgaW1wbGVtZW50cyBDb252ZXJ0ZXI8T2NjLlByb2R1Y3RSZWZlcmVuY2VMaXN0LCBQcm9kdWN0UmVmZXJlbmNlW10+IHtcbiAgICBwcml2YXRlIGNvbnZlcnRlcjtcbiAgICBjb25zdHJ1Y3Rvcihjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2UpO1xuICAgIGNvbnZlcnQoc291cmNlOiBPY2MuUHJvZHVjdFJlZmVyZW5jZUxpc3QsIHRhcmdldD86IFByb2R1Y3RSZWZlcmVuY2VbXSk6IFByb2R1Y3RSZWZlcmVuY2VbXTtcbn1cbiJdfQ==
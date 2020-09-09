import { Cart } from '../../../../model/cart.model';
import { Converter, ConverterService } from '../../../../util/converter.service';
import { Occ } from '../../../occ-models/occ.models';
import * as ɵngcc0 from '@angular/core';
export declare class OccCartNormalizer implements Converter<Occ.Cart, Cart> {
    private converter;
    constructor(converter: ConverterService);
    convert(source: Occ.Cart, target?: Cart): Cart;
    /**
     * Remove all duplicate promotions
     */
    private removeDuplicatePromotions;
    private removeDuplicateItems;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccCartNormalizer, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQtbm9ybWFsaXplci5kLnRzIiwic291cmNlcyI6WyJvY2MtY2FydC1ub3JtYWxpemVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7OztBQVNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgQ29udmVydGVyLCBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT2NjQ2FydE5vcm1hbGl6ZXIgaW1wbGVtZW50cyBDb252ZXJ0ZXI8T2NjLkNhcnQsIENhcnQ+IHtcbiAgICBwcml2YXRlIGNvbnZlcnRlcjtcbiAgICBjb25zdHJ1Y3Rvcihjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2UpO1xuICAgIGNvbnZlcnQoc291cmNlOiBPY2MuQ2FydCwgdGFyZ2V0PzogQ2FydCk6IENhcnQ7XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFsbCBkdXBsaWNhdGUgcHJvbW90aW9uc1xuICAgICAqL1xuICAgIHByaXZhdGUgcmVtb3ZlRHVwbGljYXRlUHJvbW90aW9ucztcbiAgICBwcml2YXRlIHJlbW92ZUR1cGxpY2F0ZUl0ZW1zO1xufVxuIl19
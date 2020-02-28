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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccCartNormalizer>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQtbm9ybWFsaXplci5kLnRzIiwic291cmNlcyI6WyJvY2MtY2FydC1ub3JtYWxpemVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7OztBQVNBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlciwgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9jY0NhcnROb3JtYWxpemVyIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5DYXJ0LCBDYXJ0PiB7XG4gICAgcHJpdmF0ZSBjb252ZXJ0ZXI7XG4gICAgY29uc3RydWN0b3IoY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlKTtcbiAgICBjb252ZXJ0KHNvdXJjZTogT2NjLkNhcnQsIHRhcmdldD86IENhcnQpOiBDYXJ0O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgZHVwbGljYXRlIHByb21vdGlvbnNcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlbW92ZUR1cGxpY2F0ZVByb21vdGlvbnM7XG4gICAgcHJpdmF0ZSByZW1vdmVEdXBsaWNhdGVJdGVtcztcbn1cbiJdfQ==
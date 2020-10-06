import { Cart } from '../../../../model/cart.model';
import { Converter, ConverterService } from '../../../../util/converter.service';
import { Occ } from '../../../occ-models/occ.models';
export declare class OccCartNormalizer implements Converter<Occ.Cart, Cart> {
    private converter;
    constructor(converter: ConverterService);
    convert(source: Occ.Cart, target?: Cart): Cart;
    /**
     * Remove all duplicate promotions
     */
    private removeDuplicatePromotions;
    private removeDuplicateItems;
}

import { Cart } from '../../../occ/occ-models';
import { Converter, ConverterService } from '../../../util/converter.service';
import { UICart } from '../../model/cart';
export declare class OccCartNormalizer implements Converter<Cart, UICart> {
    private converter;
    constructor(converter: ConverterService);
    convert(source: Cart, target?: UICart): UICart;
}

import { Converter, ConverterService } from '../../../util/converter.service';
import { Cart } from '../../../model/cart.model';
import { Occ } from '../../../occ/occ-models/occ.models';
export declare class OccCartNormalizer implements Converter<Occ.Cart, Cart> {
    private converter;
    constructor(converter: ConverterService);
    convert(source: Occ.Cart, target?: Cart): Cart;
}

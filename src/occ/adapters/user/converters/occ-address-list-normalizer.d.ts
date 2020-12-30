import { Address } from '../../../../model/address.model';
import { EntitiesModel } from '../../../../model/misc.model';
import { Converter, ConverterService } from '../../../../util/converter.service';
import { Occ } from '../../../occ-models/occ.models';
export declare class OccAddressListNormalizer implements Converter<Occ.AddressList, EntitiesModel<Address>> {
    private converter;
    constructor(converter: ConverterService);
    convert(source: Occ.AddressList, target?: EntitiesModel<Address>): EntitiesModel<Address>;
}

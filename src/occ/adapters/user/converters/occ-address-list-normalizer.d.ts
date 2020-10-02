import { Address } from '../../../../model/address.model';
import { EntitiesModel } from '../../../../model/misc.model';
import { Converter, ConverterService } from '../../../../util/converter.service';
import { Occ } from '../../../occ-models/occ.models';
import * as ɵngcc0 from '@angular/core';
export declare class OccAddressListNormalizer implements Converter<Occ.AddressList, EntitiesModel<Address>> {
    private converter;
    constructor(converter: ConverterService);
    convert(source: Occ.AddressList, target?: EntitiesModel<Address>): EntitiesModel<Address>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccAddressListNormalizer, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccAddressListNormalizer>;
}

//# sourceMappingURL=occ-address-list-normalizer.d.ts.map
import { MemoizedSelector } from '@ngrx/store';
import { DeliveryCountriesState, StateWithUser, DeliveryCountryEntities } from '../user-state';
import { Country } from '../../../model/address.model';
export declare const getDeliveryCountriesState: MemoizedSelector<StateWithUser, DeliveryCountriesState>;
export declare const getDeliveryCountriesEntites: MemoizedSelector<StateWithUser, DeliveryCountryEntities>;
export declare const getAllDeliveryCountries: MemoizedSelector<StateWithUser, Country[]>;
export declare const countrySelectorFactory: (isocode: string) => MemoizedSelector<StateWithUser, Country, import("@ngrx/store/src/selector").DefaultProjectorFn<Country>>;

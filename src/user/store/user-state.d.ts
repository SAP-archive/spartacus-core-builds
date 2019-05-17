import { Address, Country, Region } from '../../model/address.model';
import { PaymentDetails } from '../../model/cart.model';
import { Title, User } from '../../model/misc.model';
import { Order, OrderHistoryList } from '../../model/order.model';
import { ConsentTemplateList } from '../../occ/occ-models/additional-occ.models';
import { LoaderState } from '../../state';
export declare const USER_FEATURE = "user";
export declare const UPDATE_EMAIL_PROCESS_ID = "updateEmail";
export declare const UPDATE_PASSWORD_PROCESS_ID = "updatePassword";
export declare const UPDATE_USER_DETAILS_PROCESS_ID = "updateUserDetails";
export declare const REMOVE_USER_PROCESS_ID = "removeUser";
export declare const GIVE_CONSENT_PROCESS_ID = "giveConsent";
export declare const WITHDRAW_CONSENT_PROCESS_ID = "withdrawConsent";
export declare const USER_CONSENTS = "[User] User Consents";
export declare const USER_PAYMENT_METHODS = "[User] User Payment Methods";
export declare const USER_ORDERS = "[User] User Orders";
export declare const USER_ADDRESSES = "[User] User Addresses";
export interface StateWithUser {
    [USER_FEATURE]: UserState;
}
export interface UserState {
    account: UserDetailsState;
    addresses: LoaderState<Address[]>;
    consents: LoaderState<ConsentTemplateList>;
    billingCountries: BillingCountriesState;
    countries: DeliveryCountriesState;
    payments: LoaderState<PaymentDetails[]>;
    orders: LoaderState<OrderHistoryList>;
    order: OrderDetailsState;
    titles: TitlesState;
    regions: RegionsState;
    resetPassword: boolean;
}
export interface OrderDetailsState {
    order: Order;
}
export interface RegionsState {
    entities: Region[];
}
export interface BillingCountryEntities {
    [key: string]: Country;
}
export interface BillingCountriesState {
    entities: BillingCountryEntities;
}
export interface DeliveryCountryEntities {
    [key: string]: Country;
}
export interface DeliveryCountriesState {
    entities: DeliveryCountryEntities;
}
export interface TitleEntities {
    [key: string]: Title;
}
export interface TitlesState {
    entities: TitleEntities;
}
export interface UserDetailsState {
    details: User;
}

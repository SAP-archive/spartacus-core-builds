import { Address, Country, Region } from '../../model/address.model';
import { PaymentDetails } from '../../model/cart.model';
import { ConsentTemplate } from '../../model/consent.model';
import { ConsignmentTracking } from '../../model/consignment-tracking.model';
import { Title, User } from '../../model/misc.model';
import { Order, OrderHistoryList, ReturnRequest, ReturnRequestList } from '../../model/order.model';
import { CostCenter } from '../../model/org-unit.model';
import { StateUtils } from '../../state';
import { CustomerCouponSearchResult } from '../../model/customer-coupon.model';
import { NotificationPreference } from '../../model';
import { ProductInterestSearchResult } from '../../model/product-interest.model';
export declare const USER_FEATURE = "user";
export declare const UPDATE_EMAIL_PROCESS_ID = "updateEmail";
export declare const UPDATE_PASSWORD_PROCESS_ID = "updatePassword";
export declare const UPDATE_USER_DETAILS_PROCESS_ID = "updateUserDetails";
export declare const REGISTER_USER_PROCESS_ID = "registerUser";
export declare const REMOVE_USER_PROCESS_ID = "removeUser";
export declare const GIVE_CONSENT_PROCESS_ID = "giveConsent";
export declare const WITHDRAW_CONSENT_PROCESS_ID = "withdrawConsent";
export declare const UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID = "updateNotificationPreferences";
export declare const ADD_PRODUCT_INTEREST_PROCESS_ID = "addProductInterests";
export declare const REMOVE_PRODUCT_INTERESTS_PROCESS_ID = "removeProductInterests";
export declare const CANCEL_ORDER_PROCESS_ID = "cancelOrder";
export declare const CANCEL_RETURN_PROCESS_ID = "cancelReturn";
export declare const USER_CONSENTS = "[User] User Consents";
export declare const USER_PAYMENT_METHODS = "[User] User Payment Methods";
export declare const USER_ORDERS = "[User] User Orders";
export declare const USER_ADDRESSES = "[User] User Addresses";
export declare const USER_RETURN_REQUESTS = "[User] Order Return Requests";
export declare const USER_RETURN_REQUEST_DETAILS = "[User] Return Request Details";
export declare const USER_ORDER_DETAILS = "[User] User Order Details";
export declare const USER_COST_CENTERS = "[User] User Cost Centers";
export declare const REGIONS = "[User] Regions";
export declare const CUSTOMER_COUPONS = "[User] Customer Coupons";
export declare const SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID = "subscribeCustomerCoupon";
export declare const UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID = "unsubscribeCustomerCoupon";
export declare const CLAIM_CUSTOMER_COUPON_PROCESS_ID = "claimCustomerCoupon";
export declare const NOTIFICATION_PREFERENCES = "[User] Notification Preferences";
export declare const PRODUCT_INTERESTS = "[User] Product Interests";
export interface StateWithUser {
    [USER_FEATURE]: UserState;
}
export interface UserState {
    account: UserDetailsState;
    addresses: StateUtils.LoaderState<Address[]>;
    consents: StateUtils.LoaderState<ConsentTemplate[]>;
    billingCountries: BillingCountriesState;
    countries: DeliveryCountriesState;
    payments: StateUtils.LoaderState<PaymentDetails[]>;
    orders: StateUtils.LoaderState<OrderHistoryList>;
    order: StateUtils.LoaderState<Order>;
    orderReturn: StateUtils.LoaderState<ReturnRequest>;
    orderReturnList: StateUtils.LoaderState<ReturnRequestList>;
    titles: TitlesState;
    regions: StateUtils.LoaderState<RegionsState>;
    resetPassword: boolean;
    consignmentTracking: ConsignmentTrackingState;
    customerCoupons: StateUtils.LoaderState<CustomerCouponSearchResult>;
    notificationPreferences: StateUtils.LoaderState<NotificationPreference[]>;
    productInterests: StateUtils.LoaderState<ProductInterestSearchResult>;
    costCenters: StateUtils.LoaderState<CostCenter[]>;
}
export interface RegionsState {
    entities: Region[];
    country: string;
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
export interface ConsignmentTrackingState {
    tracking?: ConsignmentTracking;
}

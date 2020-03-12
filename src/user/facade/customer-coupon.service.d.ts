import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithUser } from '../store/user-state';
import { CustomerCouponSearchResult } from '../../model/customer-coupon.model';
import * as ɵngcc0 from '@angular/core';
export declare class CustomerCouponService {
    protected store: Store<StateWithUser | StateWithProcess<void>>;
    constructor(store: Store<StateWithUser | StateWithProcess<void>>);
    /**
     * Retrieves customer's coupons
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    loadCustomerCoupons(pageSize: number, currentPage?: number, sort?: string): void;
    /**
     * Returns customer coupon search result
     * @param pageSize page size
     */
    getCustomerCoupons(pageSize: number): Observable<CustomerCouponSearchResult>;
    /**
     * Returns a loaded flag for customer coupons
     */
    getCustomerCouponsLoaded(): Observable<boolean>;
    /**
     * Returns a loading flag for customer coupons
     */
    getCustomerCouponsLoading(): Observable<boolean>;
    /**
     * Subscribe a CustomerCoupon Notification
     * @param couponCode a customer coupon code
     */
    subscribeCustomerCoupon(couponCode: string): void;
    /**
     * Returns the subscribe customer coupon notification process loading flag
     */
    getSubscribeCustomerCouponResultLoading(): Observable<boolean>;
    /**
     * Returns the subscribe customer coupon notification process success flag
     */
    getSubscribeCustomerCouponResultSuccess(): Observable<boolean>;
    /**
     * Returns the subscribe customer coupon notification process error flag
     */
    getSubscribeCustomerCouponResultError(): Observable<boolean>;
    /**
     * Unsubscribe a CustomerCoupon Notification
     * @param couponCode a customer coupon code
     */
    unsubscribeCustomerCoupon(couponCode: string): void;
    /**
     * Returns the unsubscribe customer coupon notification process loading flag
     */
    getUnsubscribeCustomerCouponResultLoading(): Observable<boolean>;
    /**
     * Returns the unsubscribe customer coupon notification process success flag
     */
    getUnsubscribeCustomerCouponResultSuccess(): Observable<boolean>;
    /**
     * Returns the unsubscribe customer coupon notification process error flag
     */
    getUnsubscribeCustomerCouponResultError(): Observable<boolean>;
    /**
     * Claim a CustomerCoupon
     * @param couponCode a customer coupon code
     */
    claimCustomerCoupon(couponCode: string): void;
    /**
     * Returns the claim customer coupon notification process success flag
     */
    getClaimCustomerCouponResultSuccess(): Observable<boolean>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CustomerCouponService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItY291cG9uLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY3VzdG9tZXItY291cG9uLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrRUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVXaXRoVXNlciB9IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQgfSBmcm9tICcuLi8uLi9tb2RlbC9jdXN0b21lci1jb3Vwb24ubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PjtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+KTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgY3VzdG9tZXIncyBjb3Vwb25zXG4gICAgICogQHBhcmFtIHBhZ2VTaXplIHBhZ2Ugc2l6ZVxuICAgICAqIEBwYXJhbSBjdXJyZW50UGFnZSBjdXJyZW50IHBhZ2VcbiAgICAgKiBAcGFyYW0gc29ydCBzb3J0XG4gICAgICovXG4gICAgbG9hZEN1c3RvbWVyQ291cG9ucyhwYWdlU2l6ZTogbnVtYmVyLCBjdXJyZW50UGFnZT86IG51bWJlciwgc29ydD86IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBjdXN0b21lciBjb3Vwb24gc2VhcmNoIHJlc3VsdFxuICAgICAqIEBwYXJhbSBwYWdlU2l6ZSBwYWdlIHNpemVcbiAgICAgKi9cbiAgICBnZXRDdXN0b21lckNvdXBvbnMocGFnZVNpemU6IG51bWJlcik6IE9ic2VydmFibGU8Q3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQ+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBsb2FkZWQgZmxhZyBmb3IgY3VzdG9tZXIgY291cG9uc1xuICAgICAqL1xuICAgIGdldEN1c3RvbWVyQ291cG9uc0xvYWRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBsb2FkaW5nIGZsYWcgZm9yIGN1c3RvbWVyIGNvdXBvbnNcbiAgICAgKi9cbiAgICBnZXRDdXN0b21lckNvdXBvbnNMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlIGEgQ3VzdG9tZXJDb3Vwb24gTm90aWZpY2F0aW9uXG4gICAgICogQHBhcmFtIGNvdXBvbkNvZGUgYSBjdXN0b21lciBjb3Vwb24gY29kZVxuICAgICAqL1xuICAgIHN1YnNjcmliZUN1c3RvbWVyQ291cG9uKGNvdXBvbkNvZGU6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc3Vic2NyaWJlIGN1c3RvbWVyIGNvdXBvbiBub3RpZmljYXRpb24gcHJvY2VzcyBsb2FkaW5nIGZsYWdcbiAgICAgKi9cbiAgICBnZXRTdWJzY3JpYmVDdXN0b21lckNvdXBvblJlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzdWJzY3JpYmUgY3VzdG9tZXIgY291cG9uIG5vdGlmaWNhdGlvbiBwcm9jZXNzIHN1Y2Nlc3MgZmxhZ1xuICAgICAqL1xuICAgIGdldFN1YnNjcmliZUN1c3RvbWVyQ291cG9uUmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHN1YnNjcmliZSBjdXN0b21lciBjb3Vwb24gbm90aWZpY2F0aW9uIHByb2Nlc3MgZXJyb3IgZmxhZ1xuICAgICAqL1xuICAgIGdldFN1YnNjcmliZUN1c3RvbWVyQ291cG9uUmVzdWx0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBVbnN1YnNjcmliZSBhIEN1c3RvbWVyQ291cG9uIE5vdGlmaWNhdGlvblxuICAgICAqIEBwYXJhbSBjb3Vwb25Db2RlIGEgY3VzdG9tZXIgY291cG9uIGNvZGVcbiAgICAgKi9cbiAgICB1bnN1YnNjcmliZUN1c3RvbWVyQ291cG9uKGNvdXBvbkNvZGU6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdW5zdWJzY3JpYmUgY3VzdG9tZXIgY291cG9uIG5vdGlmaWNhdGlvbiBwcm9jZXNzIGxvYWRpbmcgZmxhZ1xuICAgICAqL1xuICAgIGdldFVuc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25SZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdW5zdWJzY3JpYmUgY3VzdG9tZXIgY291cG9uIG5vdGlmaWNhdGlvbiBwcm9jZXNzIHN1Y2Nlc3MgZmxhZ1xuICAgICAqL1xuICAgIGdldFVuc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25SZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdW5zdWJzY3JpYmUgY3VzdG9tZXIgY291cG9uIG5vdGlmaWNhdGlvbiBwcm9jZXNzIGVycm9yIGZsYWdcbiAgICAgKi9cbiAgICBnZXRVbnN1YnNjcmliZUN1c3RvbWVyQ291cG9uUmVzdWx0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBDbGFpbSBhIEN1c3RvbWVyQ291cG9uXG4gICAgICogQHBhcmFtIGNvdXBvbkNvZGUgYSBjdXN0b21lciBjb3Vwb24gY29kZVxuICAgICAqL1xuICAgIGNsYWltQ3VzdG9tZXJDb3Vwb24oY291cG9uQ29kZTogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjbGFpbSBjdXN0b21lciBjb3Vwb24gbm90aWZpY2F0aW9uIHByb2Nlc3Mgc3VjY2VzcyBmbGFnXG4gICAgICovXG4gICAgZ2V0Q2xhaW1DdXN0b21lckNvdXBvblJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbn1cbiJdfQ==
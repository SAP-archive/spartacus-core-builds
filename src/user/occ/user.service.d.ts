import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address, AddressList, AddressValidation, PaymentDetailsList, User } from '../../occ/occ-models/index';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { UserRegisterFormData } from '../model/user.model';
export declare class OccUserService {
    protected http: HttpClient;
    private occEndpoints;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService);
    loadUser(userId: string): Observable<User>;
    updateUserDetails(username: string, user: User): Observable<{}>;
    verifyAddress(userId: string, address: Address): Observable<AddressValidation>;
    loadUserAddresses(userId: string): Observable<AddressList>;
    addUserAddress(userId: string, address: Address): Observable<{}>;
    updateUserAddress(userId: string, addressId: string, address: Address): Observable<{}>;
    deleteUserAddress(userId: string, addressId: string): Observable<{}>;
    loadUserPaymentMethods(userId: string): Observable<PaymentDetailsList>;
    deleteUserPaymentMethod(userId: string, paymentMethodID: string): Observable<{}>;
    setDefaultUserPaymentMethod(userId: string, paymentMethodID: string): Observable<{}>;
    registerUser(user: UserRegisterFormData): Observable<User>;
    requestForgotPasswordEmail(userEmailAddress: string): Observable<{}>;
    resetPassword(token: string, newPassword: string): Observable<{}>;
    updateEmail(userId: string, currentPassword: string, newUserId: string): Observable<{}>;
    protected getUserEndpoint(): string;
    updatePassword(userId: string, oldPassword: string, newPassword: string): Observable<{}>;
}

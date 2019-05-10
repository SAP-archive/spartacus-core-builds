import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { UserRegisterFormData } from '../model/user.model';
import { User } from '../../model/misc.model';
import { Address, AddressValidation } from '../../model/address.model';
import { Occ } from '../../occ/occ-models/occ.models';
export declare class OccUserService {
    protected http: HttpClient;
    private occEndpoints;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService);
    loadUser(userId: string): Observable<User>;
    updateUserDetails(username: string, user: User): Observable<{}>;
    verifyAddress(userId: string, address: Address): Observable<AddressValidation>;
    loadUserAddresses(userId: string): Observable<Occ.AddressList>;
    addUserAddress(userId: string, address: Address): Observable<{}>;
    updateUserAddress(userId: string, addressId: string, address: Address): Observable<{}>;
    deleteUserAddress(userId: string, addressId: string): Observable<{}>;
    loadUserPaymentMethods(userId: string): Observable<Occ.PaymentDetailsList>;
    deleteUserPaymentMethod(userId: string, paymentMethodID: string): Observable<{}>;
    setDefaultUserPaymentMethod(userId: string, paymentMethodID: string): Observable<{}>;
    registerUser(user: UserRegisterFormData): Observable<User>;
    requestForgotPasswordEmail(userEmailAddress: string): Observable<{}>;
    resetPassword(token: string, newPassword: string): Observable<{}>;
    removeUser(userId: string): Observable<{}>;
    updateEmail(userId: string, currentPassword: string, newUserId: string): Observable<{}>;
    protected getUserEndpoint(): string;
    updatePassword(userId: string, oldPassword: string, newPassword: string): Observable<{}>;
}

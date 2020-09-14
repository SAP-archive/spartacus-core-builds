import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Title, User, UserSignUp } from '../../../model/misc.model';
import { UserAdapter } from '../../../user/connectors/user/user.adapter';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccUserAdapter implements UserAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    load(userId: string): Observable<User>;
    update(userId: string, user: User): Observable<{}>;
    register(user: UserSignUp): Observable<User>;
    registerGuest(guid: string, password: string): Observable<User>;
    requestForgotPasswordEmail(userEmailAddress: string): Observable<{}>;
    resetPassword(token: string, newPassword: string): Observable<{}>;
    updateEmail(userId: string, currentPassword: string, newUserId: string): Observable<{}>;
    updatePassword(userId: string, oldPassword: string, newPassword: string): Observable<{}>;
    remove(userId: string): Observable<{}>;
    loadTitles(): Observable<Title[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccUserAdapter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccUserAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXIuYWRhcHRlci5kLnRzIiwic291cmNlcyI6WyJvY2MtdXNlci5hZGFwdGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUaXRsZSwgVXNlciwgVXNlclNpZ25VcCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgVXNlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvdXNlci91c2VyLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPY2NVc2VyQWRhcHRlciBpbXBsZW1lbnRzIFVzZXJBZGFwdGVyIHtcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudDtcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2U7XG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cENsaWVudCwgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2UpO1xuICAgIGxvYWQodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVzZXI+O1xuICAgIHVwZGF0ZSh1c2VySWQ6IHN0cmluZywgdXNlcjogVXNlcik6IE9ic2VydmFibGU8e30+O1xuICAgIHJlZ2lzdGVyKHVzZXI6IFVzZXJTaWduVXApOiBPYnNlcnZhYmxlPFVzZXI+O1xuICAgIHJlZ2lzdGVyR3Vlc3QoZ3VpZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxVc2VyPjtcbiAgICByZXF1ZXN0Rm9yZ290UGFzc3dvcmRFbWFpbCh1c2VyRW1haWxBZGRyZXNzOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PjtcbiAgICByZXNldFBhc3N3b3JkKHRva2VuOiBzdHJpbmcsIG5ld1Bhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PjtcbiAgICB1cGRhdGVFbWFpbCh1c2VySWQ6IHN0cmluZywgY3VycmVudFBhc3N3b3JkOiBzdHJpbmcsIG5ld1VzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG4gICAgdXBkYXRlUGFzc3dvcmQodXNlcklkOiBzdHJpbmcsIG9sZFBhc3N3b3JkOiBzdHJpbmcsIG5ld1Bhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PjtcbiAgICByZW1vdmUodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PjtcbiAgICBsb2FkVGl0bGVzKCk6IE9ic2VydmFibGU8VGl0bGVbXT47XG59XG4iXX0=
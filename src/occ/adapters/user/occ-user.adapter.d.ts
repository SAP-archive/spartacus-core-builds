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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccUserAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccUserAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXIuYWRhcHRlci5kLnRzIiwic291cmNlcyI6WyJvY2MtdXNlci5hZGFwdGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVGl0bGUsIFVzZXIsIFVzZXJTaWduVXAgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFVzZXJBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL3VzZXIvdXNlci5hZGFwdGVyJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT2NjVXNlckFkYXB0ZXIgaW1wbGVtZW50cyBVc2VyQWRhcHRlciB7XG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQ7XG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSwgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlKTtcbiAgICBsb2FkKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxVc2VyPjtcbiAgICB1cGRhdGUodXNlcklkOiBzdHJpbmcsIHVzZXI6IFVzZXIpOiBPYnNlcnZhYmxlPHt9PjtcbiAgICByZWdpc3Rlcih1c2VyOiBVc2VyU2lnblVwKTogT2JzZXJ2YWJsZTxVc2VyPjtcbiAgICByZWdpc3Rlckd1ZXN0KGd1aWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8VXNlcj47XG4gICAgcmVxdWVzdEZvcmdvdFBhc3N3b3JkRW1haWwodXNlckVtYWlsQWRkcmVzczogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG4gICAgcmVzZXRQYXNzd29yZCh0b2tlbjogc3RyaW5nLCBuZXdQYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG4gICAgdXBkYXRlRW1haWwodXNlcklkOiBzdHJpbmcsIGN1cnJlbnRQYXNzd29yZDogc3RyaW5nLCBuZXdVc2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+O1xuICAgIHVwZGF0ZVBhc3N3b3JkKHVzZXJJZDogc3RyaW5nLCBvbGRQYXNzd29yZDogc3RyaW5nLCBuZXdQYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG4gICAgcmVtb3ZlKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG4gICAgbG9hZFRpdGxlcygpOiBPYnNlcnZhYmxlPFRpdGxlW10+O1xufVxuIl19
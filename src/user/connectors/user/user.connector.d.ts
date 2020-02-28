import { Observable } from 'rxjs';
import { Title, User, UserSignUp } from '../../../model/misc.model';
import { UserAdapter } from './user.adapter';
import * as ɵngcc0 from '@angular/core';
export declare class UserConnector {
    protected adapter: UserAdapter;
    constructor(adapter: UserAdapter);
    get(userId: string): Observable<User>;
    update(username: string, user: User): Observable<{}>;
    register(user: UserSignUp): Observable<User>;
    registerGuest(guid: string, password: string): Observable<User>;
    requestForgotPasswordEmail(userEmailAddress: string): Observable<{}>;
    resetPassword(token: string, newPassword: string): Observable<{}>;
    updateEmail(userId: string, currentPassword: string, newUserId: string): Observable<{}>;
    updatePassword(userId: string, oldPassword: string, newPassword: string): Observable<{}>;
    remove(userId: string): Observable<{}>;
    getTitles(): Observable<Title[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserConnector>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb25uZWN0b3IuZC50cyIsInNvdXJjZXMiOlsidXNlci5jb25uZWN0b3IuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7OztBQWFBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRpdGxlLCBVc2VyLCBVc2VyU2lnblVwIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyQWRhcHRlciB9IGZyb20gJy4vdXNlci5hZGFwdGVyJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVzZXJDb25uZWN0b3Ige1xuICAgIHByb3RlY3RlZCBhZGFwdGVyOiBVc2VyQWRhcHRlcjtcbiAgICBjb25zdHJ1Y3RvcihhZGFwdGVyOiBVc2VyQWRhcHRlcik7XG4gICAgZ2V0KHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxVc2VyPjtcbiAgICB1cGRhdGUodXNlcm5hbWU6IHN0cmluZywgdXNlcjogVXNlcik6IE9ic2VydmFibGU8e30+O1xuICAgIHJlZ2lzdGVyKHVzZXI6IFVzZXJTaWduVXApOiBPYnNlcnZhYmxlPFVzZXI+O1xuICAgIHJlZ2lzdGVyR3Vlc3QoZ3VpZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxVc2VyPjtcbiAgICByZXF1ZXN0Rm9yZ290UGFzc3dvcmRFbWFpbCh1c2VyRW1haWxBZGRyZXNzOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PjtcbiAgICByZXNldFBhc3N3b3JkKHRva2VuOiBzdHJpbmcsIG5ld1Bhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PjtcbiAgICB1cGRhdGVFbWFpbCh1c2VySWQ6IHN0cmluZywgY3VycmVudFBhc3N3b3JkOiBzdHJpbmcsIG5ld1VzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG4gICAgdXBkYXRlUGFzc3dvcmQodXNlcklkOiBzdHJpbmcsIG9sZFBhc3N3b3JkOiBzdHJpbmcsIG5ld1Bhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PjtcbiAgICByZW1vdmUodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PjtcbiAgICBnZXRUaXRsZXMoKTogT2JzZXJ2YWJsZTxUaXRsZVtdPjtcbn1cbiJdfQ==
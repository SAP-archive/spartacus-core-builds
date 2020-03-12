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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb25uZWN0b3IuZC50cyIsInNvdXJjZXMiOlsidXNlci5jb25uZWN0b3IuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7OztBQWFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVGl0bGUsIFVzZXIsIFVzZXJTaWduVXAgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFVzZXJBZGFwdGVyIH0gZnJvbSAnLi91c2VyLmFkYXB0ZXInO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXNlckNvbm5lY3RvciB7XG4gICAgcHJvdGVjdGVkIGFkYXB0ZXI6IFVzZXJBZGFwdGVyO1xuICAgIGNvbnN0cnVjdG9yKGFkYXB0ZXI6IFVzZXJBZGFwdGVyKTtcbiAgICBnZXQodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVzZXI+O1xuICAgIHVwZGF0ZSh1c2VybmFtZTogc3RyaW5nLCB1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTx7fT47XG4gICAgcmVnaXN0ZXIodXNlcjogVXNlclNpZ25VcCk6IE9ic2VydmFibGU8VXNlcj47XG4gICAgcmVnaXN0ZXJHdWVzdChndWlkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVzZXI+O1xuICAgIHJlcXVlc3RGb3Jnb3RQYXNzd29yZEVtYWlsKHVzZXJFbWFpbEFkZHJlc3M6IHN0cmluZyk6IE9ic2VydmFibGU8e30+O1xuICAgIHJlc2V0UGFzc3dvcmQodG9rZW46IHN0cmluZywgbmV3UGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+O1xuICAgIHVwZGF0ZUVtYWlsKHVzZXJJZDogc3RyaW5nLCBjdXJyZW50UGFzc3dvcmQ6IHN0cmluZywgbmV3VXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PjtcbiAgICB1cGRhdGVQYXNzd29yZCh1c2VySWQ6IHN0cmluZywgb2xkUGFzc3dvcmQ6IHN0cmluZywgbmV3UGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+O1xuICAgIHJlbW92ZSh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+O1xuICAgIGdldFRpdGxlcygpOiBPYnNlcnZhYmxlPFRpdGxlW10+O1xufVxuIl19
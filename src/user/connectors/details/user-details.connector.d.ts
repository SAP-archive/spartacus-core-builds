import { UserDetailsAdapter } from './user-details.adapter';
import { Observable } from 'rxjs';
import { User } from '../../../model/misc.model';
export declare class UserDetailsConnector {
    protected adapter: UserDetailsAdapter;
    constructor(adapter: UserDetailsAdapter);
    get(userId: string): Observable<User>;
    update(username: string, user: User): Observable<{}>;
}

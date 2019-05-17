import { Observable } from 'rxjs';
import { User } from '../../../model/misc.model';
export declare abstract class UserDetailsAdapter {
    abstract load(userId: string): Observable<User>;
    abstract update(username: string, user: User): Observable<{}>;
}

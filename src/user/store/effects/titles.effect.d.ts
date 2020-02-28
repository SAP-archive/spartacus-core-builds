import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class TitlesEffects {
    private actions$;
    private userAccountConnector;
    loadTitles$: Observable<UserActions.TitlesAction>;
    constructor(actions$: Actions, userAccountConnector: UserConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TitlesEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<TitlesEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGVzLmVmZmVjdC5kLnRzIiwic291cmNlcyI6WyJ0aXRsZXMuZWZmZWN0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7QUFLQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBVc2VyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy91c2VyL3VzZXIuY29ubmVjdG9yJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBUaXRsZXNFZmZlY3RzIHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHByaXZhdGUgdXNlckFjY291bnRDb25uZWN0b3I7XG4gICAgbG9hZFRpdGxlcyQ6IE9ic2VydmFibGU8VXNlckFjdGlvbnMuVGl0bGVzQWN0aW9uPjtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgdXNlckFjY291bnRDb25uZWN0b3I6IFVzZXJDb25uZWN0b3IpO1xufVxuIl19
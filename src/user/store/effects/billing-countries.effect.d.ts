import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { SiteConnector } from '../../../site-context/connectors/site.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class BillingCountriesEffect {
    private actions$;
    private siteConnector;
    loadBillingCountries$: Observable<UserActions.BillingCountriesAction>;
    constructor(actions$: Actions, siteConnector: SiteConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BillingCountriesEffect>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<BillingCountriesEffect>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy1jb3VudHJpZXMuZWZmZWN0LmQudHMiLCJzb3VyY2VzIjpbImJpbGxpbmctY291bnRyaWVzLmVmZmVjdC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7O0FBS0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2l0ZUNvbm5lY3RvciB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9jb25uZWN0b3JzL3NpdGUuY29ubmVjdG9yJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBCaWxsaW5nQ291bnRyaWVzRWZmZWN0IHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHByaXZhdGUgc2l0ZUNvbm5lY3RvcjtcbiAgICBsb2FkQmlsbGluZ0NvdW50cmllcyQ6IE9ic2VydmFibGU8VXNlckFjdGlvbnMuQmlsbGluZ0NvdW50cmllc0FjdGlvbj47XG4gICAgY29uc3RydWN0b3IoYWN0aW9ucyQ6IEFjdGlvbnMsIHNpdGVDb25uZWN0b3I6IFNpdGVDb25uZWN0b3IpO1xufVxuIl19
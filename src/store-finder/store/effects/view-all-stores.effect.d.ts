import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { StoreFinderConnector } from '../../connectors/store-finder.connector';
import { StoreFinderActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class ViewAllStoresEffect {
    private actions$;
    private storeFinderConnector;
    constructor(actions$: Actions, storeFinderConnector: StoreFinderConnector);
    viewAllStores$: Observable<StoreFinderActions.ViewAllStoresSuccess | StoreFinderActions.ViewAllStoresFail>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ViewAllStoresEffect, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ViewAllStoresEffect>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1hbGwtc3RvcmVzLmVmZmVjdC5kLnRzIiwic291cmNlcyI6WyJ2aWV3LWFsbC1zdG9yZXMuZWZmZWN0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7QUFLQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9zdG9yZS1maW5kZXIuY29ubmVjdG9yJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVmlld0FsbFN0b3Jlc0VmZmVjdCB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBwcml2YXRlIHN0b3JlRmluZGVyQ29ubmVjdG9yO1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCBzdG9yZUZpbmRlckNvbm5lY3RvcjogU3RvcmVGaW5kZXJDb25uZWN0b3IpO1xuICAgIHZpZXdBbGxTdG9yZXMkOiBPYnNlcnZhYmxlPFN0b3JlRmluZGVyQWN0aW9ucy5WaWV3QWxsU3RvcmVzU3VjY2VzcyB8IFN0b3JlRmluZGVyQWN0aW9ucy5WaWV3QWxsU3RvcmVzRmFpbD47XG59XG4iXX0=
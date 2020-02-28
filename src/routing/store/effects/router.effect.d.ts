import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class RouterEffects {
    private actions$;
    private router;
    private location;
    navigate$: Observable<any>;
    navigateBuUrl$: Observable<any>;
    clearCmsRoutes$: Observable<Action>;
    navigateBack$: Observable<Action>;
    navigateForward$: Observable<Action>;
    constructor(actions$: Actions, router: Router, location: Location);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RouterEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<RouterEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmVmZmVjdC5kLnRzIiwic291cmNlcyI6WyJyb3V0ZXIuZWZmZWN0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7QUFVQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUm91dGVyRWZmZWN0cyB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBwcml2YXRlIHJvdXRlcjtcbiAgICBwcml2YXRlIGxvY2F0aW9uO1xuICAgIG5hdmlnYXRlJDogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIG5hdmlnYXRlQnVVcmwkOiBPYnNlcnZhYmxlPGFueT47XG4gICAgY2xlYXJDbXNSb3V0ZXMkOiBPYnNlcnZhYmxlPEFjdGlvbj47XG4gICAgbmF2aWdhdGVCYWNrJDogT2JzZXJ2YWJsZTxBY3Rpb24+O1xuICAgIG5hdmlnYXRlRm9yd2FyZCQ6IE9ic2VydmFibGU8QWN0aW9uPjtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgcm91dGVyOiBSb3V0ZXIsIGxvY2F0aW9uOiBMb2NhdGlvbik7XG59XG4iXX0=
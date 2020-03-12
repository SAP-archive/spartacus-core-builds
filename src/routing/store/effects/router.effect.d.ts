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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmVmZmVjdC5kLnRzIiwic291cmNlcyI6WyJyb3V0ZXIuZWZmZWN0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7QUFVQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSb3V0ZXJFZmZlY3RzIHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHByaXZhdGUgcm91dGVyO1xuICAgIHByaXZhdGUgbG9jYXRpb247XG4gICAgbmF2aWdhdGUkOiBPYnNlcnZhYmxlPGFueT47XG4gICAgbmF2aWdhdGVCdVVybCQ6IE9ic2VydmFibGU8YW55PjtcbiAgICBjbGVhckNtc1JvdXRlcyQ6IE9ic2VydmFibGU8QWN0aW9uPjtcbiAgICBuYXZpZ2F0ZUJhY2skOiBPYnNlcnZhYmxlPEFjdGlvbj47XG4gICAgbmF2aWdhdGVGb3J3YXJkJDogT2JzZXJ2YWJsZTxBY3Rpb24+O1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCByb3V0ZXI6IFJvdXRlciwgbG9jYXRpb246IExvY2F0aW9uKTtcbn1cbiJdfQ==
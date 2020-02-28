import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { WindowRef } from '../../../window/window-ref';
import { SiteConnector } from '../../connectors/site.connector';
import { SiteContextActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class LanguagesEffects {
    private actions$;
    private siteConnector;
    private winRef;
    loadLanguages$: Observable<SiteContextActions.LoadLanguagesSuccess | SiteContextActions.LoadLanguagesFail>;
    activateLanguage$: Observable<SiteContextActions.LanguageChange>;
    constructor(actions$: Actions, siteConnector: SiteConnector, winRef: WindowRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LanguagesEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<LanguagesEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLmVmZmVjdC5kLnRzIiwic291cmNlcyI6WyJsYW5ndWFnZXMuZWZmZWN0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7QUFPQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBTaXRlQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9zaXRlLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIExhbmd1YWdlc0VmZmVjdHMge1xuICAgIHByaXZhdGUgYWN0aW9ucyQ7XG4gICAgcHJpdmF0ZSBzaXRlQ29ubmVjdG9yO1xuICAgIHByaXZhdGUgd2luUmVmO1xuICAgIGxvYWRMYW5ndWFnZXMkOiBPYnNlcnZhYmxlPFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkTGFuZ3VhZ2VzU3VjY2VzcyB8IFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkTGFuZ3VhZ2VzRmFpbD47XG4gICAgYWN0aXZhdGVMYW5ndWFnZSQ6IE9ic2VydmFibGU8U2l0ZUNvbnRleHRBY3Rpb25zLkxhbmd1YWdlQ2hhbmdlPjtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgc2l0ZUNvbm5lY3RvcjogU2l0ZUNvbm5lY3Rvciwgd2luUmVmOiBXaW5kb3dSZWYpO1xufVxuIl19
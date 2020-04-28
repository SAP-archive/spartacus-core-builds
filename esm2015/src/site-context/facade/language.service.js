import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, take, tap } from 'rxjs/operators';
import { WindowRef } from '../../window/window-ref';
import { getContextParameterDefault, getContextParameterValues, } from '../config/context-config-utils';
import { SiteContextConfig } from '../config/site-context-config';
import { LANGUAGE_CONTEXT_ID } from '../providers/context-ids';
import { SiteContextActions } from '../store/actions/index';
import { SiteContextSelectors } from '../store/selectors/index';
/**
 * Facade that provides easy access to language state, actions and selectors.
 */
let LanguageService = class LanguageService {
    constructor(store, winRef, config) {
        this.store = store;
        this.config = config;
        this.sessionStorage = winRef.sessionStorage;
    }
    /**
     * Represents all the languages supported by the current store.
     */
    getAll() {
        return this.store.pipe(select(SiteContextSelectors.getAllLanguages), tap((languages) => {
            if (!languages) {
                this.store.dispatch(new SiteContextActions.LoadLanguages());
            }
        }), filter((languages) => Boolean(languages)));
    }
    /**
     * Represents the isocode of the active language.
     */
    getActive() {
        return this.store.pipe(select(SiteContextSelectors.getActiveLanguage), filter((active) => Boolean(active)));
    }
    /**
     * Sets the active language.
     */
    setActive(isocode) {
        return this.store
            .pipe(select(SiteContextSelectors.getActiveLanguage), take(1))
            .subscribe((activeLanguage) => {
            if (activeLanguage !== isocode) {
                this.store.dispatch(new SiteContextActions.SetActiveLanguage(isocode));
            }
        });
    }
    /**
     * Initials the active language. The active language is either given
     * by the last visit (stored in session storage) or by the
     * default session language of the store.
     */
    initialize() {
        let value;
        this.getActive()
            .subscribe((val) => (value = val))
            .unsubscribe();
        if (value) {
            // don't initialize, if there is already a value (i.e. retrieved from route or transferred from SSR)
            return;
        }
        const sessionLanguage = this.sessionStorage && this.sessionStorage.getItem('language');
        if (sessionLanguage &&
            getContextParameterValues(this.config, LANGUAGE_CONTEXT_ID).includes(sessionLanguage)) {
            this.setActive(sessionLanguage);
        }
        else {
            this.setActive(getContextParameterDefault(this.config, LANGUAGE_CONTEXT_ID));
        }
    }
};
LanguageService.ctorParameters = () => [
    { type: Store },
    { type: WindowRef },
    { type: SiteContextConfig }
];
LanguageService = __decorate([
    Injectable()
], LanguageService);
export { LanguageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvZmFjYWRlL2xhbmd1YWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIseUJBQXlCLEdBQzFCLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFJaEU7O0dBRUc7QUFFSCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBRzFCLFlBQ1ksS0FBa0MsRUFDNUMsTUFBaUIsRUFDUCxNQUF5QjtRQUZ6QixVQUFLLEdBQUwsS0FBSyxDQUE2QjtRQUVsQyxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUVuQyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDOUMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsRUFDNUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7YUFDN0Q7UUFDSCxDQUFDLENBQUMsRUFDRixNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUMxQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUM5QyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUNwQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsU0FBUyxDQUFDLE9BQWU7UUFDdkIsT0FBTyxJQUFJLENBQUMsS0FBSzthQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0QsU0FBUyxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQUU7WUFDNUIsSUFBSSxjQUFjLEtBQUssT0FBTyxFQUFFO2dCQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FDbEQsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFVBQVU7UUFDUixJQUFJLEtBQUssQ0FBQztRQUNWLElBQUksQ0FBQyxTQUFTLEVBQUU7YUFDYixTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQ2pDLFdBQVcsRUFBRSxDQUFDO1FBQ2pCLElBQUksS0FBSyxFQUFFO1lBQ1Qsb0dBQW9HO1lBQ3BHLE9BQU87U0FDUjtRQUVELE1BQU0sZUFBZSxHQUNuQixJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pFLElBQ0UsZUFBZTtZQUNmLHlCQUF5QixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxRQUFRLENBQ2xFLGVBQWUsQ0FDaEIsRUFDRDtZQUNBLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQ1osMEJBQTBCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxDQUM3RCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUE3RW9CLEtBQUs7WUFDZCxTQUFTO1lBQ0MsaUJBQWlCOztBQU4xQixlQUFlO0lBRDNCLFVBQVUsRUFBRTtHQUNBLGVBQWUsQ0FpRjNCO1NBakZZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHtcbiAgZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQsXG4gIGdldENvbnRleHRQYXJhbWV0ZXJWYWx1ZXMsXG59IGZyb20gJy4uL2NvbmZpZy9jb250ZXh0LWNvbmZpZy11dGlscyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7IExBTkdVQUdFX0NPTlRFWFRfSUQgfSBmcm9tICcuLi9wcm92aWRlcnMvY29udGV4dC1pZHMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhTaXRlQ29udGV4dCB9IGZyb20gJy4uL3N0b3JlL3N0YXRlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0IH0gZnJvbSAnLi9zaXRlLWNvbnRleHQuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBGYWNhZGUgdGhhdCBwcm92aWRlcyBlYXN5IGFjY2VzcyB0byBsYW5ndWFnZSBzdGF0ZSwgYWN0aW9ucyBhbmQgc2VsZWN0b3JzLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VTZXJ2aWNlIGltcGxlbWVudHMgU2l0ZUNvbnRleHQ8TGFuZ3VhZ2U+IHtcbiAgcHJpdmF0ZSBzZXNzaW9uU3RvcmFnZTogU3RvcmFnZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFNpdGVDb250ZXh0PixcbiAgICB3aW5SZWY6IFdpbmRvd1JlZixcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBTaXRlQ29udGV4dENvbmZpZ1xuICApIHtcbiAgICB0aGlzLnNlc3Npb25TdG9yYWdlID0gd2luUmVmLnNlc3Npb25TdG9yYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgYWxsIHRoZSBsYW5ndWFnZXMgc3VwcG9ydGVkIGJ5IHRoZSBjdXJyZW50IHN0b3JlLlxuICAgKi9cbiAgZ2V0QWxsKCk6IE9ic2VydmFibGU8TGFuZ3VhZ2VbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoU2l0ZUNvbnRleHRTZWxlY3RvcnMuZ2V0QWxsTGFuZ3VhZ2VzKSxcbiAgICAgIHRhcCgobGFuZ3VhZ2VzKSA9PiB7XG4gICAgICAgIGlmICghbGFuZ3VhZ2VzKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRMYW5ndWFnZXMoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKChsYW5ndWFnZXMpID0+IEJvb2xlYW4obGFuZ3VhZ2VzKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgdGhlIGlzb2NvZGUgb2YgdGhlIGFjdGl2ZSBsYW5ndWFnZS5cbiAgICovXG4gIGdldEFjdGl2ZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoU2l0ZUNvbnRleHRTZWxlY3RvcnMuZ2V0QWN0aXZlTGFuZ3VhZ2UpLFxuICAgICAgZmlsdGVyKChhY3RpdmUpID0+IEJvb2xlYW4oYWN0aXZlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGFjdGl2ZSBsYW5ndWFnZS5cbiAgICovXG4gIHNldEFjdGl2ZShpc29jb2RlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZVxuICAgICAgLnBpcGUoc2VsZWN0KFNpdGVDb250ZXh0U2VsZWN0b3JzLmdldEFjdGl2ZUxhbmd1YWdlKSwgdGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoKGFjdGl2ZUxhbmd1YWdlKSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmVMYW5ndWFnZSAhPT0gaXNvY29kZSkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICBuZXcgU2l0ZUNvbnRleHRBY3Rpb25zLlNldEFjdGl2ZUxhbmd1YWdlKGlzb2NvZGUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbHMgdGhlIGFjdGl2ZSBsYW5ndWFnZS4gVGhlIGFjdGl2ZSBsYW5ndWFnZSBpcyBlaXRoZXIgZ2l2ZW5cbiAgICogYnkgdGhlIGxhc3QgdmlzaXQgKHN0b3JlZCBpbiBzZXNzaW9uIHN0b3JhZ2UpIG9yIGJ5IHRoZVxuICAgKiBkZWZhdWx0IHNlc3Npb24gbGFuZ3VhZ2Ugb2YgdGhlIHN0b3JlLlxuICAgKi9cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgdGhpcy5nZXRBY3RpdmUoKVxuICAgICAgLnN1YnNjcmliZSgodmFsKSA9PiAodmFsdWUgPSB2YWwpKVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyBkb24ndCBpbml0aWFsaXplLCBpZiB0aGVyZSBpcyBhbHJlYWR5IGEgdmFsdWUgKGkuZS4gcmV0cmlldmVkIGZyb20gcm91dGUgb3IgdHJhbnNmZXJyZWQgZnJvbSBTU1IpXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Vzc2lvbkxhbmd1YWdlID1cbiAgICAgIHRoaXMuc2Vzc2lvblN0b3JhZ2UgJiYgdGhpcy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsYW5ndWFnZScpO1xuICAgIGlmIChcbiAgICAgIHNlc3Npb25MYW5ndWFnZSAmJlxuICAgICAgZ2V0Q29udGV4dFBhcmFtZXRlclZhbHVlcyh0aGlzLmNvbmZpZywgTEFOR1VBR0VfQ09OVEVYVF9JRCkuaW5jbHVkZXMoXG4gICAgICAgIHNlc3Npb25MYW5ndWFnZVxuICAgICAgKVxuICAgICkge1xuICAgICAgdGhpcy5zZXRBY3RpdmUoc2Vzc2lvbkxhbmd1YWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRBY3RpdmUoXG4gICAgICAgIGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0KHRoaXMuY29uZmlnLCBMQU5HVUFHRV9DT05URVhUX0lEKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
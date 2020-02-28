import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, take, tap } from 'rxjs/operators';
import { WindowRef } from '../../window/window-ref';
import { SiteContextActions } from '../store/actions/index';
import { SiteContextSelectors } from '../store/selectors/index';
import { LANGUAGE_CONTEXT_ID } from '../providers/context-ids';
import { SiteContextConfig } from '../config/site-context-config';
import { getContextParameterValues, getContextParameterDefault, } from '../config/context-config-utils';
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
        return this.store.pipe(select(SiteContextSelectors.getAllLanguages), tap(languages => {
            if (!languages) {
                this.store.dispatch(new SiteContextActions.LoadLanguages());
            }
        }), filter(languages => Boolean(languages)));
    }
    /**
     * Represents the isocode of the active language.
     */
    getActive() {
        return this.store.pipe(select(SiteContextSelectors.getActiveLanguage), filter(active => Boolean(active)));
    }
    /**
     * Sets the active language.
     */
    setActive(isocode) {
        return this.store
            .pipe(select(SiteContextSelectors.getActiveLanguage), take(1))
            .subscribe(activeLanguage => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvZmFjYWRlL2xhbmd1YWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFDTCx5QkFBeUIsRUFDekIsMEJBQTBCLEdBQzNCLE1BQU0sZ0NBQWdDLENBQUM7QUFFeEM7O0dBRUc7QUFFSCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBRzFCLFlBQ1ksS0FBa0MsRUFDNUMsTUFBaUIsRUFDUCxNQUF5QjtRQUZ6QixVQUFLLEdBQUwsS0FBSyxDQUE2QjtRQUVsQyxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUVuQyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDOUMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsRUFDNUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7YUFDN0Q7UUFDSCxDQUFDLENBQUMsRUFDRixNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FDeEMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsRUFDOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQ2xDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxTQUFTLENBQUMsT0FBZTtRQUN2QixPQUFPLElBQUksQ0FBQyxLQUFLO2FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3RCxTQUFTLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxjQUFjLEtBQUssT0FBTyxFQUFFO2dCQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FDbEQsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFVBQVU7UUFDUixNQUFNLGVBQWUsR0FDbkIsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRSxJQUNFLGVBQWU7WUFDZix5QkFBeUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLG1CQUFtQixDQUFDLENBQUMsUUFBUSxDQUNsRSxlQUFlLENBQ2hCLEVBQ0Q7WUFDQSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUNaLDBCQUEwQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLENBQUMsQ0FDN0QsQ0FBQztTQUNIO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBcEVvQixLQUFLO1lBQ2QsU0FBUztZQUNDLGlCQUFpQjs7QUFOMUIsZUFBZTtJQUQzQixVQUFVLEVBQUU7R0FDQSxlQUFlLENBd0UzQjtTQXhFWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoU2l0ZUNvbnRleHQgfSBmcm9tICcuLi9zdG9yZS9zdGF0ZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dCB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBMQU5HVUFHRV9DT05URVhUX0lEIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2NvbnRleHQtaWRzJztcbmltcG9ydCB7IFNpdGVDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3NpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHtcbiAgZ2V0Q29udGV4dFBhcmFtZXRlclZhbHVlcyxcbiAgZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQsXG59IGZyb20gJy4uL2NvbmZpZy9jb250ZXh0LWNvbmZpZy11dGlscyc7XG5cbi8qKlxuICogRmFjYWRlIHRoYXQgcHJvdmlkZXMgZWFzeSBhY2Nlc3MgdG8gbGFuZ3VhZ2Ugc3RhdGUsIGFjdGlvbnMgYW5kIHNlbGVjdG9ycy5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExhbmd1YWdlU2VydmljZSBpbXBsZW1lbnRzIFNpdGVDb250ZXh0PExhbmd1YWdlPiB7XG4gIHByaXZhdGUgc2Vzc2lvblN0b3JhZ2U6IFN0b3JhZ2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhTaXRlQ29udGV4dD4sXG4gICAgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogU2l0ZUNvbnRleHRDb25maWdcbiAgKSB7XG4gICAgdGhpcy5zZXNzaW9uU3RvcmFnZSA9IHdpblJlZi5zZXNzaW9uU3RvcmFnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIGFsbCB0aGUgbGFuZ3VhZ2VzIHN1cHBvcnRlZCBieSB0aGUgY3VycmVudCBzdG9yZS5cbiAgICovXG4gIGdldEFsbCgpOiBPYnNlcnZhYmxlPExhbmd1YWdlW10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFNpdGVDb250ZXh0U2VsZWN0b3JzLmdldEFsbExhbmd1YWdlcyksXG4gICAgICB0YXAobGFuZ3VhZ2VzID0+IHtcbiAgICAgICAgaWYgKCFsYW5ndWFnZXMpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTaXRlQ29udGV4dEFjdGlvbnMuTG9hZExhbmd1YWdlcygpKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBmaWx0ZXIobGFuZ3VhZ2VzID0+IEJvb2xlYW4obGFuZ3VhZ2VzKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgdGhlIGlzb2NvZGUgb2YgdGhlIGFjdGl2ZSBsYW5ndWFnZS5cbiAgICovXG4gIGdldEFjdGl2ZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoU2l0ZUNvbnRleHRTZWxlY3RvcnMuZ2V0QWN0aXZlTGFuZ3VhZ2UpLFxuICAgICAgZmlsdGVyKGFjdGl2ZSA9PiBCb29sZWFuKGFjdGl2ZSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBhY3RpdmUgbGFuZ3VhZ2UuXG4gICAqL1xuICBzZXRBY3RpdmUoaXNvY29kZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmVcbiAgICAgIC5waXBlKHNlbGVjdChTaXRlQ29udGV4dFNlbGVjdG9ycy5nZXRBY3RpdmVMYW5ndWFnZSksIHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKGFjdGl2ZUxhbmd1YWdlID0+IHtcbiAgICAgICAgaWYgKGFjdGl2ZUxhbmd1YWdlICE9PSBpc29jb2RlKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICAgIG5ldyBTaXRlQ29udGV4dEFjdGlvbnMuU2V0QWN0aXZlTGFuZ3VhZ2UoaXNvY29kZSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFscyB0aGUgYWN0aXZlIGxhbmd1YWdlLiBUaGUgYWN0aXZlIGxhbmd1YWdlIGlzIGVpdGhlciBnaXZlblxuICAgKiBieSB0aGUgbGFzdCB2aXNpdCAoc3RvcmVkIGluIHNlc3Npb24gc3RvcmFnZSkgb3IgYnkgdGhlXG4gICAqIGRlZmF1bHQgc2Vzc2lvbiBsYW5ndWFnZSBvZiB0aGUgc3RvcmUuXG4gICAqL1xuICBpbml0aWFsaXplKCkge1xuICAgIGNvbnN0IHNlc3Npb25MYW5ndWFnZSA9XG4gICAgICB0aGlzLnNlc3Npb25TdG9yYWdlICYmIHRoaXMuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ3VhZ2UnKTtcbiAgICBpZiAoXG4gICAgICBzZXNzaW9uTGFuZ3VhZ2UgJiZcbiAgICAgIGdldENvbnRleHRQYXJhbWV0ZXJWYWx1ZXModGhpcy5jb25maWcsIExBTkdVQUdFX0NPTlRFWFRfSUQpLmluY2x1ZGVzKFxuICAgICAgICBzZXNzaW9uTGFuZ3VhZ2VcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHRoaXMuc2V0QWN0aXZlKHNlc3Npb25MYW5ndWFnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0QWN0aXZlKFxuICAgICAgICBnZXRDb250ZXh0UGFyYW1ldGVyRGVmYXVsdCh0aGlzLmNvbmZpZywgTEFOR1VBR0VfQ09OVEVYVF9JRClcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=
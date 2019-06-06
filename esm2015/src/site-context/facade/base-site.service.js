/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map, take, tap } from 'rxjs/operators';
import { getActiveBaseSite, getBaseSiteData, } from '../store/selectors/base-site.selectors';
import { SetActiveBaseSite, LoadBaseSite, } from '../store/actions/base-site.action';
export class BaseSiteService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Represents the current baseSite uid.
     * @return {?}
     */
    getActive() {
        return this.store.pipe(select(getActiveBaseSite), filter(Boolean));
    }
    /**
     * We currently don't support switching baseSite at run time
     * @return {?}
     */
    getAll() {
        return this.getActive().pipe(map((/**
         * @param {?} baseSite
         * @return {?}
         */
        baseSite => [baseSite])));
    }
    /**
     * @param {?} baseSite
     * @return {?}
     */
    setActive(baseSite) {
        return this.store
            .pipe(select(getActiveBaseSite), take(1))
            .subscribe((/**
         * @param {?} activeBaseSite
         * @return {?}
         */
        activeBaseSite => {
            if (baseSite && activeBaseSite !== baseSite) {
                this.store.dispatch(new SetActiveBaseSite(baseSite));
            }
        }));
    }
    /**
     * Initializes the active baseSite.
     * @param {?} defaultBaseSite
     * @return {?}
     */
    initialize(defaultBaseSite) {
        this.setActive(defaultBaseSite);
    }
    /**
     * Get the base site details data
     * @return {?}
     */
    getBaseSiteData() {
        return this.store.pipe(select(getBaseSiteData), tap((/**
         * @param {?} baseSite
         * @return {?}
         */
        baseSite => {
            if (Object.keys(baseSite).length === 0) {
                this.store.dispatch(new LoadBaseSite());
            }
        })));
    }
}
BaseSiteService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BaseSiteService.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BaseSiteService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixlQUFlLEdBQ2hCLE1BQU0sd0NBQXdDLENBQUM7QUFFaEQsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixZQUFZLEdBQ2IsTUFBTSxtQ0FBbUMsQ0FBQztBQUkzQyxNQUFNLE9BQU8sZUFBZTs7OztJQUMxQixZQUFzQixLQUFrQztRQUFsQyxVQUFLLEdBQUwsS0FBSyxDQUE2QjtJQUFHLENBQUM7Ozs7O0lBSzVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsaUJBQWlCLENBQUMsRUFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNoQixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFLRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLFFBQWdCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEtBQUs7YUFDZCxJQUFJLENBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQ3pCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUjthQUNBLFNBQVM7Ozs7UUFBQyxjQUFjLENBQUMsRUFBRTtZQUMxQixJQUFJLFFBQVEsSUFBSSxjQUFjLEtBQUssUUFBUSxFQUFFO2dCQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDdEQ7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7OztJQUtELFVBQVUsQ0FBQyxlQUF1QjtRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBS0QsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFDdkIsR0FBRzs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2IsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQzthQUN6QztRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7WUFyREYsVUFBVTs7OztZQWJNLEtBQUs7Ozs7Ozs7SUFlUixnQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dCB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIGdldEFjdGl2ZUJhc2VTaXRlLFxuICBnZXRCYXNlU2l0ZURhdGEsXG59IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9iYXNlLXNpdGUuc2VsZWN0b3JzJztcbmltcG9ydCB7IFN0YXRlV2l0aFNpdGVDb250ZXh0IH0gZnJvbSAnLi4vc3RvcmUvc3RhdGUnO1xuaW1wb3J0IHtcbiAgU2V0QWN0aXZlQmFzZVNpdGUsXG4gIExvYWRCYXNlU2l0ZSxcbn0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9iYXNlLXNpdGUuYWN0aW9uJztcbmltcG9ydCB7IEJhc2VTaXRlIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYXNlU2l0ZVNlcnZpY2UgaW1wbGVtZW50cyBTaXRlQ29udGV4dDxzdHJpbmc+IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhTaXRlQ29udGV4dD4pIHt9XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgdGhlIGN1cnJlbnQgYmFzZVNpdGUgdWlkLlxuICAgKi9cbiAgZ2V0QWN0aXZlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRBY3RpdmVCYXNlU2l0ZSksXG4gICAgICBmaWx0ZXIoQm9vbGVhbilcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFdlIGN1cnJlbnRseSBkb24ndCBzdXBwb3J0IHN3aXRjaGluZyBiYXNlU2l0ZSBhdCBydW4gdGltZVxuICAgKi9cbiAgZ2V0QWxsKCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRBY3RpdmUoKS5waXBlKG1hcChiYXNlU2l0ZSA9PiBbYmFzZVNpdGVdKSk7XG4gIH1cblxuICBzZXRBY3RpdmUoYmFzZVNpdGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnN0b3JlXG4gICAgICAucGlwZShcbiAgICAgICAgc2VsZWN0KGdldEFjdGl2ZUJhc2VTaXRlKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShhY3RpdmVCYXNlU2l0ZSA9PiB7XG4gICAgICAgIGlmIChiYXNlU2l0ZSAmJiBhY3RpdmVCYXNlU2l0ZSAhPT0gYmFzZVNpdGUpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZXRBY3RpdmVCYXNlU2l0ZShiYXNlU2l0ZSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgYWN0aXZlIGJhc2VTaXRlLlxuICAgKi9cbiAgaW5pdGlhbGl6ZShkZWZhdWx0QmFzZVNpdGU6IHN0cmluZykge1xuICAgIHRoaXMuc2V0QWN0aXZlKGRlZmF1bHRCYXNlU2l0ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBiYXNlIHNpdGUgZGV0YWlscyBkYXRhXG4gICAqL1xuICBnZXRCYXNlU2l0ZURhdGEoKTogT2JzZXJ2YWJsZTxCYXNlU2l0ZT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0QmFzZVNpdGVEYXRhKSxcbiAgICAgIHRhcChiYXNlU2l0ZSA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhiYXNlU2l0ZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgTG9hZEJhc2VTaXRlKCkpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map, take } from 'rxjs/operators';
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
        return this.getActive().pipe(map(baseSite => [baseSite]));
    }
    /**
     * @param {?} baseSite
     * @return {?}
     */
    setActive(baseSite) {
        return this.store
            .pipe(select(getActiveBaseSite), take(1))
            .subscribe(activeBaseSite => {
            if (baseSite && activeBaseSite !== baseSite) {
                this.store.dispatch(new SetActiveBaseSite(baseSite));
                this.store.dispatch(new LoadBaseSite());
            }
        });
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
        return this.store.pipe(select(getBaseSiteData), filter(Boolean));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGVBQWUsR0FDaEIsTUFBTSx3Q0FBd0MsQ0FBQztBQUVoRCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFlBQVksR0FDYixNQUFNLG1DQUFtQyxDQUFDO0FBSTNDLE1BQU0sT0FBTyxlQUFlOzs7O0lBQzFCLFlBQXNCLEtBQWtDO1FBQWxDLFVBQUssR0FBTCxLQUFLLENBQTZCO0lBQUcsQ0FBQzs7Ozs7SUFLNUQsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxFQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQ2hCLENBQUM7SUFDSixDQUFDOzs7OztJQUtELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsUUFBZ0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsS0FBSzthQUNkLElBQUksQ0FDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsRUFDekIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSO2FBQ0EsU0FBUyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQzFCLElBQUksUUFBUSxJQUFJLGNBQWMsS0FBSyxRQUFRLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxZQUFZLEVBQUUsQ0FBQyxDQUFDO2FBQ3pDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs7Ozs7SUFLRCxVQUFVLENBQUMsZUFBdUI7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUtELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsZUFBZSxDQUFDLEVBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDaEIsQ0FBQztJQUNKLENBQUM7OztZQWxERixVQUFVOzs7O1lBYk0sS0FBSzs7Ozs7OztJQWVSLGdDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNpdGVDb250ZXh0IH0gZnJvbSAnLi9zaXRlLWNvbnRleHQuaW50ZXJmYWNlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIGdldEFjdGl2ZUJhc2VTaXRlLFxuICBnZXRCYXNlU2l0ZURhdGEsXG59IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9iYXNlLXNpdGUuc2VsZWN0b3JzJztcbmltcG9ydCB7IFN0YXRlV2l0aFNpdGVDb250ZXh0IH0gZnJvbSAnLi4vc3RvcmUvc3RhdGUnO1xuaW1wb3J0IHtcbiAgU2V0QWN0aXZlQmFzZVNpdGUsXG4gIExvYWRCYXNlU2l0ZSxcbn0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9iYXNlLXNpdGUuYWN0aW9uJztcbmltcG9ydCB7IEJhc2VTaXRlIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYXNlU2l0ZVNlcnZpY2UgaW1wbGVtZW50cyBTaXRlQ29udGV4dDxzdHJpbmc+IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhTaXRlQ29udGV4dD4pIHt9XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgdGhlIGN1cnJlbnQgYmFzZVNpdGUgdWlkLlxuICAgKi9cbiAgZ2V0QWN0aXZlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRBY3RpdmVCYXNlU2l0ZSksXG4gICAgICBmaWx0ZXIoQm9vbGVhbilcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFdlIGN1cnJlbnRseSBkb24ndCBzdXBwb3J0IHN3aXRjaGluZyBiYXNlU2l0ZSBhdCBydW4gdGltZVxuICAgKi9cbiAgZ2V0QWxsKCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRBY3RpdmUoKS5waXBlKG1hcChiYXNlU2l0ZSA9PiBbYmFzZVNpdGVdKSk7XG4gIH1cblxuICBzZXRBY3RpdmUoYmFzZVNpdGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnN0b3JlXG4gICAgICAucGlwZShcbiAgICAgICAgc2VsZWN0KGdldEFjdGl2ZUJhc2VTaXRlKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShhY3RpdmVCYXNlU2l0ZSA9PiB7XG4gICAgICAgIGlmIChiYXNlU2l0ZSAmJiBhY3RpdmVCYXNlU2l0ZSAhPT0gYmFzZVNpdGUpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZXRBY3RpdmVCYXNlU2l0ZShiYXNlU2l0ZSkpO1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IExvYWRCYXNlU2l0ZSgpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGFjdGl2ZSBiYXNlU2l0ZS5cbiAgICovXG4gIGluaXRpYWxpemUoZGVmYXVsdEJhc2VTaXRlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNldEFjdGl2ZShkZWZhdWx0QmFzZVNpdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYmFzZSBzaXRlIGRldGFpbHMgZGF0YVxuICAgKi9cbiAgZ2V0QmFzZVNpdGVEYXRhKCk6IE9ic2VydmFibGU8QmFzZVNpdGU+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldEJhc2VTaXRlRGF0YSksXG4gICAgICBmaWx0ZXIoQm9vbGVhbilcbiAgICApO1xuICB9XG59XG4iXX0=
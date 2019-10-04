/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AsmActions } from '../store/actions/index';
import { AsmSelectors } from '../store/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
export class AsmService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Search for customers
     * @param {?} options
     * @return {?}
     */
    customerSearch(options) {
        this.store.dispatch(new AsmActions.CustomerSearch(options));
    }
    /**
     * Reset the customer search result data to the initial state.
     * @return {?}
     */
    customerSearchReset() {
        this.store.dispatch(new AsmActions.CustomerSearchReset());
    }
    /**
     * Returns the customer search result data.
     * @return {?}
     */
    getCustomerSearchResults() {
        return this.store.pipe(select(AsmSelectors.getCustomerSearchResults));
    }
    /**
     * Returns the customer search result loading status.
     * @return {?}
     */
    getCustomerSearchResultsLoading() {
        return this.store.pipe(select(AsmSelectors.getCustomerSearchResultsLoading));
    }
    /**
     * Updates the state of the ASM UI
     * @param {?} asmUi
     * @return {?}
     */
    updateAsmUiState(asmUi) {
        this.store.dispatch(new AsmActions.AsmUiUpdate(asmUi));
    }
    /**
     * Get the state of the ASM UI
     * @return {?}
     */
    getAsmUiState() {
        return this.store.pipe(select(AsmSelectors.getAsmUi));
    }
}
AsmService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AsmService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ AsmService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AsmService_Factory() { return new AsmService(i0.ɵɵinject(i1.Store)); }, token: AsmService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AsmService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXNtL2ZhY2FkZS9hc20uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU81QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLOUMsTUFBTSxPQUFPLFVBQVU7Ozs7SUFDckIsWUFBc0IsS0FBMEI7UUFBMUIsVUFBSyxHQUFMLEtBQUssQ0FBcUI7SUFBRyxDQUFDOzs7Ozs7SUFNcEQsY0FBYyxDQUFDLE9BQThCO1FBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBS0QsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksVUFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7OztJQUtELHdCQUF3QjtRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7O0lBS0QsK0JBQStCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxZQUFZLENBQUMsK0JBQStCLENBQUMsQ0FDckQsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUtELGdCQUFnQixDQUFDLEtBQVk7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFLRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7O1lBakRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWJnQixLQUFLOzs7Ozs7OztJQWVSLDJCQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBBc21VaSxcbiAgQ3VzdG9tZXJTZWFyY2hPcHRpb25zLFxuICBDdXN0b21lclNlYXJjaFBhZ2UsXG59IGZyb20gJy4uL21vZGVscy9hc20ubW9kZWxzJztcbmltcG9ydCB7IEFzbUFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aEFzbSB9IGZyb20gJy4uL3N0b3JlL2FzbS1zdGF0ZSc7XG5pbXBvcnQgeyBBc21TZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBc21TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhBc20+KSB7fVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggZm9yIGN1c3RvbWVyc1xuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgY3VzdG9tZXJTZWFyY2gob3B0aW9uczogQ3VzdG9tZXJTZWFyY2hPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQXNtQWN0aW9ucy5DdXN0b21lclNlYXJjaChvcHRpb25zKSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIGN1c3RvbWVyIHNlYXJjaCByZXN1bHQgZGF0YSB0byB0aGUgaW5pdGlhbCBzdGF0ZS5cbiAgICovXG4gIGN1c3RvbWVyU2VhcmNoUmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQXNtQWN0aW9ucy5DdXN0b21lclNlYXJjaFJlc2V0KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1c3RvbWVyIHNlYXJjaCByZXN1bHQgZGF0YS5cbiAgICovXG4gIGdldEN1c3RvbWVyU2VhcmNoUmVzdWx0cygpOiBPYnNlcnZhYmxlPEN1c3RvbWVyU2VhcmNoUGFnZT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KEFzbVNlbGVjdG9ycy5nZXRDdXN0b21lclNlYXJjaFJlc3VsdHMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXN0b21lciBzZWFyY2ggcmVzdWx0IGxvYWRpbmcgc3RhdHVzLlxuICAgKi9cbiAgZ2V0Q3VzdG9tZXJTZWFyY2hSZXN1bHRzTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEFzbVNlbGVjdG9ycy5nZXRDdXN0b21lclNlYXJjaFJlc3VsdHNMb2FkaW5nKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgc3RhdGUgb2YgdGhlIEFTTSBVSVxuICAgKi9cbiAgdXBkYXRlQXNtVWlTdGF0ZShhc21VaTogQXNtVWkpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBc21BY3Rpb25zLkFzbVVpVXBkYXRlKGFzbVVpKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzdGF0ZSBvZiB0aGUgQVNNIFVJXG4gICAqL1xuICBnZXRBc21VaVN0YXRlKCk6IE9ic2VydmFibGU8QXNtVWk+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChBc21TZWxlY3RvcnMuZ2V0QXNtVWkpKTtcbiAgfVxufVxuIl19
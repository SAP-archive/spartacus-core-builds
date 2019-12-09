/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { OccConfig } from '../config/occ-config';
import * as i0 from "@angular/core";
import * as i1 from "../config/occ-config";
var LoadingScopesService = /** @class */ (function () {
    function LoadingScopesService(config) {
        this.config = config;
    }
    /**
     * Aims to expand scopes based on loading scopes config.
     *
     * I.e. if 'details' scope includes 'list' scope by configuration, it'll return ['details', 'list']
     *
     * If scope data overlaps with each other, the data should be merged in the order of scopes provided,
     * i.e. the last scope is merged last, overwriting parts of the data already provided by preceding scope.
     * It should apply also to implicit scopes (that are included by configuration).
     *
     * @param model
     * @param scopes
     */
    /**
     * Aims to expand scopes based on loading scopes config.
     *
     * I.e. if 'details' scope includes 'list' scope by configuration, it'll return ['details', 'list']
     *
     * If scope data overlaps with each other, the data should be merged in the order of scopes provided,
     * i.e. the last scope is merged last, overwriting parts of the data already provided by preceding scope.
     * It should apply also to implicit scopes (that are included by configuration).
     *
     * @param {?} model
     * @param {?} scopes
     * @return {?}
     */
    LoadingScopesService.prototype.expand = /**
     * Aims to expand scopes based on loading scopes config.
     *
     * I.e. if 'details' scope includes 'list' scope by configuration, it'll return ['details', 'list']
     *
     * If scope data overlaps with each other, the data should be merged in the order of scopes provided,
     * i.e. the last scope is merged last, overwriting parts of the data already provided by preceding scope.
     * It should apply also to implicit scopes (that are included by configuration).
     *
     * @param {?} model
     * @param {?} scopes
     * @return {?}
     */
    function (model, scopes) {
        var e_1, _a;
        /** @type {?} */
        var scopesConfig = this.config &&
            this.config.backend &&
            this.config.backend.loadingScopes &&
            this.config.backend.loadingScopes[model];
        if (scopesConfig) {
            /** @type {?} */
            var i = 0;
            /** @type {?} */
            var expandedScopes = tslib_1.__spread(scopes).reverse();
            while (i < expandedScopes.length) {
                /** @type {?} */
                var includedScopes = scopesConfig[expandedScopes[i]] &&
                    scopesConfig[expandedScopes[i]].include;
                if (includedScopes) {
                    try {
                        for (var includedScopes_1 = (e_1 = void 0, tslib_1.__values(includedScopes)), includedScopes_1_1 = includedScopes_1.next(); !includedScopes_1_1.done; includedScopes_1_1 = includedScopes_1.next()) {
                            var includedScope = includedScopes_1_1.value;
                            if (!expandedScopes.includes(includedScope)) {
                                expandedScopes.push(includedScope);
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (includedScopes_1_1 && !includedScopes_1_1.done && (_a = includedScopes_1.return)) _a.call(includedScopes_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                i++;
            }
            return expandedScopes.reverse();
        }
        return scopes;
    };
    LoadingScopesService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    LoadingScopesService.ctorParameters = function () { return [
        { type: OccConfig }
    ]; };
    /** @nocollapse */ LoadingScopesService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LoadingScopesService_Factory() { return new LoadingScopesService(i0.ɵɵinject(i1.OccConfig)); }, token: LoadingScopesService, providedIn: "root" });
    return LoadingScopesService;
}());
export { LoadingScopesService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    LoadingScopesService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1zY29wZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2Mvc2VydmljZXMvbG9hZGluZy1zY29wZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFFakQ7SUFJRSw4QkFBc0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7SUFFM0M7Ozs7Ozs7Ozs7O09BV0c7Ozs7Ozs7Ozs7Ozs7O0lBQ0gscUNBQU07Ozs7Ozs7Ozs7Ozs7SUFBTixVQUFPLEtBQWEsRUFBRSxNQUFnQjs7O1lBQzlCLFlBQVksR0FDaEIsSUFBSSxDQUFDLE1BQU07WUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87WUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYTtZQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBRTFDLElBQUksWUFBWSxFQUFFOztnQkFDWixDQUFDLEdBQUcsQ0FBQzs7Z0JBRUgsY0FBYyxHQUFHLGlCQUFJLE1BQU0sRUFBRSxPQUFPLEVBQUU7WUFFNUMsT0FBTyxDQUFDLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBRTs7b0JBQzFCLGNBQWMsR0FDbEIsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0IsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87Z0JBQ3pDLElBQUksY0FBYyxFQUFFOzt3QkFDbEIsS0FBNEIsSUFBQSxrQ0FBQSxpQkFBQSxjQUFjLENBQUEsQ0FBQSw4Q0FBQSwwRUFBRTs0QkFBdkMsSUFBTSxhQUFhLDJCQUFBOzRCQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQ0FDM0MsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzs2QkFDcEM7eUJBQ0Y7Ozs7Ozs7OztpQkFDRjtnQkFDRCxDQUFDLEVBQUUsQ0FBQzthQUNMO1lBRUQsT0FBTyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDakM7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztnQkFoREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxTQUFTOzs7K0JBRGxCO0NBb0RDLEFBakRELElBaURDO1NBOUNZLG9CQUFvQjs7Ozs7O0lBQ25CLHNDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9vY2MtY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdTY29wZXNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbmZpZzogT2NjQ29uZmlnKSB7fVxuXG4gIC8qKlxuICAgKiBBaW1zIHRvIGV4cGFuZCBzY29wZXMgYmFzZWQgb24gbG9hZGluZyBzY29wZXMgY29uZmlnLlxuICAgKlxuICAgKiBJLmUuIGlmICdkZXRhaWxzJyBzY29wZSBpbmNsdWRlcyAnbGlzdCcgc2NvcGUgYnkgY29uZmlndXJhdGlvbiwgaXQnbGwgcmV0dXJuIFsnZGV0YWlscycsICdsaXN0J11cbiAgICpcbiAgICogSWYgc2NvcGUgZGF0YSBvdmVybGFwcyB3aXRoIGVhY2ggb3RoZXIsIHRoZSBkYXRhIHNob3VsZCBiZSBtZXJnZWQgaW4gdGhlIG9yZGVyIG9mIHNjb3BlcyBwcm92aWRlZCxcbiAgICogaS5lLiB0aGUgbGFzdCBzY29wZSBpcyBtZXJnZWQgbGFzdCwgb3ZlcndyaXRpbmcgcGFydHMgb2YgdGhlIGRhdGEgYWxyZWFkeSBwcm92aWRlZCBieSBwcmVjZWRpbmcgc2NvcGUuXG4gICAqIEl0IHNob3VsZCBhcHBseSBhbHNvIHRvIGltcGxpY2l0IHNjb3BlcyAodGhhdCBhcmUgaW5jbHVkZWQgYnkgY29uZmlndXJhdGlvbikuXG4gICAqXG4gICAqIEBwYXJhbSBtb2RlbFxuICAgKiBAcGFyYW0gc2NvcGVzXG4gICAqL1xuICBleHBhbmQobW9kZWw6IHN0cmluZywgc2NvcGVzOiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBzY29wZXNDb25maWcgPVxuICAgICAgdGhpcy5jb25maWcgJiZcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tlbmQgJiZcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tlbmQubG9hZGluZ1Njb3BlcyAmJlxuICAgICAgdGhpcy5jb25maWcuYmFja2VuZC5sb2FkaW5nU2NvcGVzW21vZGVsXTtcblxuICAgIGlmIChzY29wZXNDb25maWcpIHtcbiAgICAgIGxldCBpID0gMDtcblxuICAgICAgY29uc3QgZXhwYW5kZWRTY29wZXMgPSBbLi4uc2NvcGVzXS5yZXZlcnNlKCk7IC8vIHRvIGVuc3VyZSBwcm9wZXIgc2NvcGVzIG1lcmdpbmcgb3JkZXJcblxuICAgICAgd2hpbGUgKGkgPCBleHBhbmRlZFNjb3Blcy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgaW5jbHVkZWRTY29wZXMgPVxuICAgICAgICAgIHNjb3Blc0NvbmZpZ1tleHBhbmRlZFNjb3Blc1tpXV0gJiZcbiAgICAgICAgICBzY29wZXNDb25maWdbZXhwYW5kZWRTY29wZXNbaV1dLmluY2x1ZGU7XG4gICAgICAgIGlmIChpbmNsdWRlZFNjb3Blcykge1xuICAgICAgICAgIGZvciAoY29uc3QgaW5jbHVkZWRTY29wZSBvZiBpbmNsdWRlZFNjb3Blcykge1xuICAgICAgICAgICAgaWYgKCFleHBhbmRlZFNjb3Blcy5pbmNsdWRlcyhpbmNsdWRlZFNjb3BlKSkge1xuICAgICAgICAgICAgICBleHBhbmRlZFNjb3Blcy5wdXNoKGluY2x1ZGVkU2NvcGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBleHBhbmRlZFNjb3Blcy5yZXZlcnNlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjb3BlcztcbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { OccConfig } from '../config/occ-config';
import * as i0 from "@angular/core";
import * as i1 from "../config/occ-config";
export class LoadingScopesService {
    /**
     * @param {?} config
     */
    constructor(config) {
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
     * @param {?} model
     * @param {?} scopes
     * @return {?}
     */
    expand(model, scopes) {
        /** @type {?} */
        const scopesConfig = this.config &&
            this.config.backend &&
            this.config.backend.loadingScopes &&
            this.config.backend.loadingScopes[model];
        if (scopesConfig) {
            /** @type {?} */
            const expandedScopes = [...scopes];
            /** @type {?} */
            let i = expandedScopes.length;
            while (i > 0) {
                i--;
                /** @type {?} */
                const includedScopes = scopesConfig[expandedScopes[i]] &&
                    scopesConfig[expandedScopes[i]].include;
                if (includedScopes) {
                    for (const includedScope of includedScopes) {
                        if (!expandedScopes.includes(includedScope)) {
                            expandedScopes.splice(i, 0, includedScope);
                            i++;
                        }
                    }
                }
            }
            return expandedScopes;
        }
        return scopes;
    }
    /**
     * Return maxAge for product scope in milliseconds
     *
     * @param {?} model
     * @param {?} scope
     * @return {?}
     */
    getMaxAge(model, scope) {
        /** @type {?} */
        const scopesConfig = this.config &&
            this.config.backend &&
            this.config.backend.loadingScopes &&
            this.config.backend.loadingScopes[model];
        return (scopesConfig[scope] && scopesConfig[scope].maxAge) * 1000 || 0;
    }
}
LoadingScopesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
LoadingScopesService.ctorParameters = () => [
    { type: OccConfig }
];
/** @nocollapse */ LoadingScopesService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LoadingScopesService_Factory() { return new LoadingScopesService(i0.ɵɵinject(i1.OccConfig)); }, token: LoadingScopesService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    LoadingScopesService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1zY29wZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2Mvc2VydmljZXMvbG9hZGluZy1zY29wZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUtqRCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBQy9CLFlBQXNCLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDOzs7Ozs7Ozs7Ozs7OztJQWMzQyxNQUFNLENBQUMsS0FBYSxFQUFFLE1BQWdCOztjQUM5QixZQUFZLEdBQ2hCLElBQUksQ0FBQyxNQUFNO1lBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWE7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUUxQyxJQUFJLFlBQVksRUFBRTs7a0JBQ1YsY0FBYyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7O2dCQUM5QixDQUFDLEdBQUcsY0FBYyxDQUFDLE1BQU07WUFFN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNaLENBQUMsRUFBRSxDQUFDOztzQkFDRSxjQUFjLEdBQ2xCLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQy9CLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPO2dCQUN6QyxJQUFJLGNBQWMsRUFBRTtvQkFDbEIsS0FBSyxNQUFNLGFBQWEsSUFBSSxjQUFjLEVBQUU7d0JBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFOzRCQUMzQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7NEJBQzNDLENBQUMsRUFBRSxDQUFDO3lCQUNMO3FCQUNGO2lCQUNGO2FBQ0Y7WUFFRCxPQUFPLGNBQWMsQ0FBQztTQUN2QjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7Ozs7O0lBUUQsU0FBUyxDQUFDLEtBQWEsRUFBRSxLQUFhOztjQUM5QixZQUFZLEdBQ2hCLElBQUksQ0FBQyxNQUFNO1lBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWE7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUMxQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7OztZQS9ERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxTQUFTOzs7Ozs7OztJQU1KLHNDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9vY2MtY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdTY29wZXNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbmZpZzogT2NjQ29uZmlnKSB7fVxuXG4gIC8qKlxuICAgKiBBaW1zIHRvIGV4cGFuZCBzY29wZXMgYmFzZWQgb24gbG9hZGluZyBzY29wZXMgY29uZmlnLlxuICAgKlxuICAgKiBJLmUuIGlmICdkZXRhaWxzJyBzY29wZSBpbmNsdWRlcyAnbGlzdCcgc2NvcGUgYnkgY29uZmlndXJhdGlvbiwgaXQnbGwgcmV0dXJuIFsnZGV0YWlscycsICdsaXN0J11cbiAgICpcbiAgICogSWYgc2NvcGUgZGF0YSBvdmVybGFwcyB3aXRoIGVhY2ggb3RoZXIsIHRoZSBkYXRhIHNob3VsZCBiZSBtZXJnZWQgaW4gdGhlIG9yZGVyIG9mIHNjb3BlcyBwcm92aWRlZCxcbiAgICogaS5lLiB0aGUgbGFzdCBzY29wZSBpcyBtZXJnZWQgbGFzdCwgb3ZlcndyaXRpbmcgcGFydHMgb2YgdGhlIGRhdGEgYWxyZWFkeSBwcm92aWRlZCBieSBwcmVjZWRpbmcgc2NvcGUuXG4gICAqIEl0IHNob3VsZCBhcHBseSBhbHNvIHRvIGltcGxpY2l0IHNjb3BlcyAodGhhdCBhcmUgaW5jbHVkZWQgYnkgY29uZmlndXJhdGlvbikuXG4gICAqXG4gICAqIEBwYXJhbSBtb2RlbFxuICAgKiBAcGFyYW0gc2NvcGVzXG4gICAqL1xuICBleHBhbmQobW9kZWw6IHN0cmluZywgc2NvcGVzOiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBzY29wZXNDb25maWcgPVxuICAgICAgdGhpcy5jb25maWcgJiZcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tlbmQgJiZcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tlbmQubG9hZGluZ1Njb3BlcyAmJlxuICAgICAgdGhpcy5jb25maWcuYmFja2VuZC5sb2FkaW5nU2NvcGVzW21vZGVsXTtcblxuICAgIGlmIChzY29wZXNDb25maWcpIHtcbiAgICAgIGNvbnN0IGV4cGFuZGVkU2NvcGVzID0gWy4uLnNjb3Blc107XG4gICAgICBsZXQgaSA9IGV4cGFuZGVkU2NvcGVzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGkgPiAwKSB7XG4gICAgICAgIGktLTtcbiAgICAgICAgY29uc3QgaW5jbHVkZWRTY29wZXMgPVxuICAgICAgICAgIHNjb3Blc0NvbmZpZ1tleHBhbmRlZFNjb3Blc1tpXV0gJiZcbiAgICAgICAgICBzY29wZXNDb25maWdbZXhwYW5kZWRTY29wZXNbaV1dLmluY2x1ZGU7XG4gICAgICAgIGlmIChpbmNsdWRlZFNjb3Blcykge1xuICAgICAgICAgIGZvciAoY29uc3QgaW5jbHVkZWRTY29wZSBvZiBpbmNsdWRlZFNjb3Blcykge1xuICAgICAgICAgICAgaWYgKCFleHBhbmRlZFNjb3Blcy5pbmNsdWRlcyhpbmNsdWRlZFNjb3BlKSkge1xuICAgICAgICAgICAgICBleHBhbmRlZFNjb3Blcy5zcGxpY2UoaSwgMCwgaW5jbHVkZWRTY29wZSk7XG4gICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV4cGFuZGVkU2NvcGVzO1xuICAgIH1cblxuICAgIHJldHVybiBzY29wZXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIG1heEFnZSBmb3IgcHJvZHVjdCBzY29wZSBpbiBtaWxsaXNlY29uZHNcbiAgICpcbiAgICogQHBhcmFtIG1vZGVsXG4gICAqIEBwYXJhbSBzY29wZVxuICAgKi9cbiAgZ2V0TWF4QWdlKG1vZGVsOiBzdHJpbmcsIHNjb3BlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IHNjb3Blc0NvbmZpZyA9XG4gICAgICB0aGlzLmNvbmZpZyAmJlxuICAgICAgdGhpcy5jb25maWcuYmFja2VuZCAmJlxuICAgICAgdGhpcy5jb25maWcuYmFja2VuZC5sb2FkaW5nU2NvcGVzICYmXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kLmxvYWRpbmdTY29wZXNbbW9kZWxdO1xuICAgIHJldHVybiAoc2NvcGVzQ29uZmlnW3Njb3BlXSAmJiBzY29wZXNDb25maWdbc2NvcGVdLm1heEFnZSkgKiAxMDAwIHx8IDA7XG4gIH1cbn1cbiJdfQ==
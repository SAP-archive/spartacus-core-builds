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
            let i = 0;
            /** @type {?} */
            const expandedScopes = [...scopes].reverse();
            while (i < expandedScopes.length) {
                /** @type {?} */
                const includedScopes = scopesConfig[expandedScopes[i]] &&
                    scopesConfig[expandedScopes[i]].include;
                if (includedScopes) {
                    for (const includedScope of includedScopes) {
                        if (!expandedScopes.includes(includedScope)) {
                            expandedScopes.push(includedScope);
                        }
                    }
                }
                i++;
            }
            return expandedScopes.reverse();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1zY29wZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2Mvc2VydmljZXMvbG9hZGluZy1zY29wZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUtqRCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBQy9CLFlBQXNCLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDOzs7Ozs7Ozs7Ozs7OztJQWMzQyxNQUFNLENBQUMsS0FBYSxFQUFFLE1BQWdCOztjQUM5QixZQUFZLEdBQ2hCLElBQUksQ0FBQyxNQUFNO1lBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWE7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUUxQyxJQUFJLFlBQVksRUFBRTs7Z0JBQ1osQ0FBQyxHQUFHLENBQUM7O2tCQUVILGNBQWMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFO1lBRTVDLE9BQU8sQ0FBQyxHQUFHLGNBQWMsQ0FBQyxNQUFNLEVBQUU7O3NCQUMxQixjQUFjLEdBQ2xCLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQy9CLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPO2dCQUN6QyxJQUFJLGNBQWMsRUFBRTtvQkFDbEIsS0FBSyxNQUFNLGFBQWEsSUFBSSxjQUFjLEVBQUU7d0JBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFOzRCQUMzQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO3lCQUNwQztxQkFDRjtpQkFDRjtnQkFDRCxDQUFDLEVBQUUsQ0FBQzthQUNMO1lBRUQsT0FBTyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDakM7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7OztJQVFELFNBQVMsQ0FBQyxLQUFhLEVBQUUsS0FBYTs7Y0FDOUIsWUFBWSxHQUNoQixJQUFJLENBQUMsTUFBTTtZQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztZQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDMUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7WUEvREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsU0FBUzs7Ozs7Ozs7SUFNSixzQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi9jb25maWcvb2NjLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU2NvcGVzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IE9jY0NvbmZpZykge31cblxuICAvKipcbiAgICogQWltcyB0byBleHBhbmQgc2NvcGVzIGJhc2VkIG9uIGxvYWRpbmcgc2NvcGVzIGNvbmZpZy5cbiAgICpcbiAgICogSS5lLiBpZiAnZGV0YWlscycgc2NvcGUgaW5jbHVkZXMgJ2xpc3QnIHNjb3BlIGJ5IGNvbmZpZ3VyYXRpb24sIGl0J2xsIHJldHVybiBbJ2RldGFpbHMnLCAnbGlzdCddXG4gICAqXG4gICAqIElmIHNjb3BlIGRhdGEgb3ZlcmxhcHMgd2l0aCBlYWNoIG90aGVyLCB0aGUgZGF0YSBzaG91bGQgYmUgbWVyZ2VkIGluIHRoZSBvcmRlciBvZiBzY29wZXMgcHJvdmlkZWQsXG4gICAqIGkuZS4gdGhlIGxhc3Qgc2NvcGUgaXMgbWVyZ2VkIGxhc3QsIG92ZXJ3cml0aW5nIHBhcnRzIG9mIHRoZSBkYXRhIGFscmVhZHkgcHJvdmlkZWQgYnkgcHJlY2VkaW5nIHNjb3BlLlxuICAgKiBJdCBzaG91bGQgYXBwbHkgYWxzbyB0byBpbXBsaWNpdCBzY29wZXMgKHRoYXQgYXJlIGluY2x1ZGVkIGJ5IGNvbmZpZ3VyYXRpb24pLlxuICAgKlxuICAgKiBAcGFyYW0gbW9kZWxcbiAgICogQHBhcmFtIHNjb3Blc1xuICAgKi9cbiAgZXhwYW5kKG1vZGVsOiBzdHJpbmcsIHNjb3Blczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gICAgY29uc3Qgc2NvcGVzQ29uZmlnID1cbiAgICAgIHRoaXMuY29uZmlnICYmXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kICYmXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kLmxvYWRpbmdTY29wZXMgJiZcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tlbmQubG9hZGluZ1Njb3Blc1ttb2RlbF07XG5cbiAgICBpZiAoc2NvcGVzQ29uZmlnKSB7XG4gICAgICBsZXQgaSA9IDA7XG5cbiAgICAgIGNvbnN0IGV4cGFuZGVkU2NvcGVzID0gWy4uLnNjb3Blc10ucmV2ZXJzZSgpOyAvLyB0byBlbnN1cmUgcHJvcGVyIHNjb3BlcyBtZXJnaW5nIG9yZGVyXG5cbiAgICAgIHdoaWxlIChpIDwgZXhwYW5kZWRTY29wZXMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVkU2NvcGVzID1cbiAgICAgICAgICBzY29wZXNDb25maWdbZXhwYW5kZWRTY29wZXNbaV1dICYmXG4gICAgICAgICAgc2NvcGVzQ29uZmlnW2V4cGFuZGVkU2NvcGVzW2ldXS5pbmNsdWRlO1xuICAgICAgICBpZiAoaW5jbHVkZWRTY29wZXMpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGluY2x1ZGVkU2NvcGUgb2YgaW5jbHVkZWRTY29wZXMpIHtcbiAgICAgICAgICAgIGlmICghZXhwYW5kZWRTY29wZXMuaW5jbHVkZXMoaW5jbHVkZWRTY29wZSkpIHtcbiAgICAgICAgICAgICAgZXhwYW5kZWRTY29wZXMucHVzaChpbmNsdWRlZFNjb3BlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXhwYW5kZWRTY29wZXMucmV2ZXJzZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBzY29wZXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIG1heEFnZSBmb3IgcHJvZHVjdCBzY29wZSBpbiBtaWxsaXNlY29uZHNcbiAgICpcbiAgICogQHBhcmFtIG1vZGVsXG4gICAqIEBwYXJhbSBzY29wZVxuICAgKi9cbiAgZ2V0TWF4QWdlKG1vZGVsOiBzdHJpbmcsIHNjb3BlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IHNjb3Blc0NvbmZpZyA9XG4gICAgICB0aGlzLmNvbmZpZyAmJlxuICAgICAgdGhpcy5jb25maWcuYmFja2VuZCAmJlxuICAgICAgdGhpcy5jb25maWcuYmFja2VuZC5sb2FkaW5nU2NvcGVzICYmXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kLmxvYWRpbmdTY29wZXNbbW9kZWxdO1xuICAgIHJldHVybiAoc2NvcGVzQ29uZmlnW3Njb3BlXSAmJiBzY29wZXNDb25maWdbc2NvcGVdLm1heEFnZSkgKiAxMDAwIHx8IDA7XG4gIH1cbn1cbiJdfQ==
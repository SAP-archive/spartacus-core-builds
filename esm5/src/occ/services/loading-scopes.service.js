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
    /**
     * Return maxAge for product scope in miliseconds
     *
     * @param model
     * @param scope
     */
    /**
     * Return maxAge for product scope in miliseconds
     *
     * @param {?} model
     * @param {?} scope
     * @return {?}
     */
    LoadingScopesService.prototype.getMaxAge = /**
     * Return maxAge for product scope in miliseconds
     *
     * @param {?} model
     * @param {?} scope
     * @return {?}
     */
    function (model, scope) {
        /** @type {?} */
        var scopesConfig = this.config &&
            this.config.backend &&
            this.config.backend.loadingScopes &&
            this.config.backend.loadingScopes[model];
        return (scopesConfig[scope] && scopesConfig[scope].maxAge) * 1000 || 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1zY29wZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2Mvc2VydmljZXMvbG9hZGluZy1zY29wZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFFakQ7SUFJRSw4QkFBc0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7SUFFM0M7Ozs7Ozs7Ozs7O09BV0c7Ozs7Ozs7Ozs7Ozs7O0lBQ0gscUNBQU07Ozs7Ozs7Ozs7Ozs7SUFBTixVQUFPLEtBQWEsRUFBRSxNQUFnQjs7O1lBQzlCLFlBQVksR0FDaEIsSUFBSSxDQUFDLE1BQU07WUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87WUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYTtZQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBRTFDLElBQUksWUFBWSxFQUFFOztnQkFDWixDQUFDLEdBQUcsQ0FBQzs7Z0JBRUgsY0FBYyxHQUFHLGlCQUFJLE1BQU0sRUFBRSxPQUFPLEVBQUU7WUFFNUMsT0FBTyxDQUFDLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBRTs7b0JBQzFCLGNBQWMsR0FDbEIsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0IsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87Z0JBQ3pDLElBQUksY0FBYyxFQUFFOzt3QkFDbEIsS0FBNEIsSUFBQSxrQ0FBQSxpQkFBQSxjQUFjLENBQUEsQ0FBQSw4Q0FBQSwwRUFBRTs0QkFBdkMsSUFBTSxhQUFhLDJCQUFBOzRCQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQ0FDM0MsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzs2QkFDcEM7eUJBQ0Y7Ozs7Ozs7OztpQkFDRjtnQkFDRCxDQUFDLEVBQUUsQ0FBQzthQUNMO1lBRUQsT0FBTyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDakM7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7O0lBQ0gsd0NBQVM7Ozs7Ozs7SUFBVCxVQUFVLEtBQWEsRUFBRSxLQUFhOztZQUM5QixZQUFZLEdBQ2hCLElBQUksQ0FBQyxNQUFNO1lBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWE7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUMxQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7O2dCQS9ERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpRLFNBQVM7OzsrQkFEbEI7Q0FtRUMsQUFoRUQsSUFnRUM7U0E3RFksb0JBQW9COzs7Ozs7SUFDbkIsc0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL29jYy1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ1Njb3Blc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBPY2NDb25maWcpIHt9XG5cbiAgLyoqXG4gICAqIEFpbXMgdG8gZXhwYW5kIHNjb3BlcyBiYXNlZCBvbiBsb2FkaW5nIHNjb3BlcyBjb25maWcuXG4gICAqXG4gICAqIEkuZS4gaWYgJ2RldGFpbHMnIHNjb3BlIGluY2x1ZGVzICdsaXN0JyBzY29wZSBieSBjb25maWd1cmF0aW9uLCBpdCdsbCByZXR1cm4gWydkZXRhaWxzJywgJ2xpc3QnXVxuICAgKlxuICAgKiBJZiBzY29wZSBkYXRhIG92ZXJsYXBzIHdpdGggZWFjaCBvdGhlciwgdGhlIGRhdGEgc2hvdWxkIGJlIG1lcmdlZCBpbiB0aGUgb3JkZXIgb2Ygc2NvcGVzIHByb3ZpZGVkLFxuICAgKiBpLmUuIHRoZSBsYXN0IHNjb3BlIGlzIG1lcmdlZCBsYXN0LCBvdmVyd3JpdGluZyBwYXJ0cyBvZiB0aGUgZGF0YSBhbHJlYWR5IHByb3ZpZGVkIGJ5IHByZWNlZGluZyBzY29wZS5cbiAgICogSXQgc2hvdWxkIGFwcGx5IGFsc28gdG8gaW1wbGljaXQgc2NvcGVzICh0aGF0IGFyZSBpbmNsdWRlZCBieSBjb25maWd1cmF0aW9uKS5cbiAgICpcbiAgICogQHBhcmFtIG1vZGVsXG4gICAqIEBwYXJhbSBzY29wZXNcbiAgICovXG4gIGV4cGFuZChtb2RlbDogc3RyaW5nLCBzY29wZXM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHNjb3Blc0NvbmZpZyA9XG4gICAgICB0aGlzLmNvbmZpZyAmJlxuICAgICAgdGhpcy5jb25maWcuYmFja2VuZCAmJlxuICAgICAgdGhpcy5jb25maWcuYmFja2VuZC5sb2FkaW5nU2NvcGVzICYmXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kLmxvYWRpbmdTY29wZXNbbW9kZWxdO1xuXG4gICAgaWYgKHNjb3Blc0NvbmZpZykge1xuICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICBjb25zdCBleHBhbmRlZFNjb3BlcyA9IFsuLi5zY29wZXNdLnJldmVyc2UoKTsgLy8gdG8gZW5zdXJlIHByb3BlciBzY29wZXMgbWVyZ2luZyBvcmRlclxuXG4gICAgICB3aGlsZSAoaSA8IGV4cGFuZGVkU2NvcGVzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBpbmNsdWRlZFNjb3BlcyA9XG4gICAgICAgICAgc2NvcGVzQ29uZmlnW2V4cGFuZGVkU2NvcGVzW2ldXSAmJlxuICAgICAgICAgIHNjb3Blc0NvbmZpZ1tleHBhbmRlZFNjb3Blc1tpXV0uaW5jbHVkZTtcbiAgICAgICAgaWYgKGluY2x1ZGVkU2NvcGVzKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBpbmNsdWRlZFNjb3BlIG9mIGluY2x1ZGVkU2NvcGVzKSB7XG4gICAgICAgICAgICBpZiAoIWV4cGFuZGVkU2NvcGVzLmluY2x1ZGVzKGluY2x1ZGVkU2NvcGUpKSB7XG4gICAgICAgICAgICAgIGV4cGFuZGVkU2NvcGVzLnB1c2goaW5jbHVkZWRTY29wZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV4cGFuZGVkU2NvcGVzLnJldmVyc2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2NvcGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBtYXhBZ2UgZm9yIHByb2R1Y3Qgc2NvcGUgaW4gbWlsaXNlY29uZHNcbiAgICpcbiAgICogQHBhcmFtIG1vZGVsXG4gICAqIEBwYXJhbSBzY29wZVxuICAgKi9cbiAgZ2V0TWF4QWdlKG1vZGVsOiBzdHJpbmcsIHNjb3BlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IHNjb3Blc0NvbmZpZyA9XG4gICAgICB0aGlzLmNvbmZpZyAmJlxuICAgICAgdGhpcy5jb25maWcuYmFja2VuZCAmJlxuICAgICAgdGhpcy5jb25maWcuYmFja2VuZC5sb2FkaW5nU2NvcGVzICYmXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kLmxvYWRpbmdTY29wZXNbbW9kZWxdO1xuICAgIHJldHVybiAoc2NvcGVzQ29uZmlnW3Njb3BlXSAmJiBzY29wZXNDb25maWdbc2NvcGVdLm1heEFnZSkgKiAxMDAwIHx8IDA7XG4gIH1cbn1cbiJdfQ==
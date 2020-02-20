import { __decorate, __read, __spread, __values } from "tslib";
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
    LoadingScopesService.prototype.expand = function (model, scopes) {
        var e_1, _a;
        var scopesConfig = this.config &&
            this.config.backend &&
            this.config.backend.loadingScopes &&
            this.config.backend.loadingScopes[model];
        if (scopesConfig) {
            var expandedScopes = __spread(scopes);
            var i = expandedScopes.length;
            while (i > 0) {
                i--;
                var includedScopes = scopesConfig[expandedScopes[i]] &&
                    scopesConfig[expandedScopes[i]].include;
                if (includedScopes) {
                    try {
                        for (var includedScopes_1 = (e_1 = void 0, __values(includedScopes)), includedScopes_1_1 = includedScopes_1.next(); !includedScopes_1_1.done; includedScopes_1_1 = includedScopes_1.next()) {
                            var includedScope = includedScopes_1_1.value;
                            if (!expandedScopes.includes(includedScope)) {
                                expandedScopes.splice(i, 0, includedScope);
                                i++;
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
            }
            return expandedScopes;
        }
        return scopes;
    };
    /**
     * Return maxAge for product scope in milliseconds
     *
     * @param model
     * @param scope
     */
    LoadingScopesService.prototype.getMaxAge = function (model, scope) {
        var scopesConfig = this.config &&
            this.config.backend &&
            this.config.backend.loadingScopes &&
            this.config.backend.loadingScopes[model];
        return (scopesConfig[scope] && scopesConfig[scope].maxAge) * 1000 || 0;
    };
    LoadingScopesService.ctorParameters = function () { return [
        { type: OccConfig }
    ]; };
    LoadingScopesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LoadingScopesService_Factory() { return new LoadingScopesService(i0.ɵɵinject(i1.OccConfig)); }, token: LoadingScopesService, providedIn: "root" });
    LoadingScopesService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], LoadingScopesService);
    return LoadingScopesService;
}());
export { LoadingScopesService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1zY29wZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2Mvc2VydmljZXMvbG9hZGluZy1zY29wZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUtqRDtJQUNFLDhCQUFzQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQztJQUUzQzs7Ozs7Ozs7Ozs7T0FXRztJQUNILHFDQUFNLEdBQU4sVUFBTyxLQUFhLEVBQUUsTUFBZ0I7O1FBQ3BDLElBQU0sWUFBWSxHQUNoQixJQUFJLENBQUMsTUFBTTtZQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztZQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUzQyxJQUFJLFlBQVksRUFBRTtZQUNoQixJQUFNLGNBQWMsWUFBTyxNQUFNLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDO1lBRTlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDWixDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFNLGNBQWMsR0FDbEIsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0IsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztnQkFDMUMsSUFBSSxjQUFjLEVBQUU7O3dCQUNsQixLQUE0QixJQUFBLGtDQUFBLFNBQUEsY0FBYyxDQUFBLENBQUEsOENBQUEsMEVBQUU7NEJBQXZDLElBQU0sYUFBYSwyQkFBQTs0QkFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0NBQzNDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztnQ0FDM0MsQ0FBQyxFQUFFLENBQUM7NkJBQ0w7eUJBQ0Y7Ozs7Ozs7OztpQkFDRjthQUNGO1lBRUQsT0FBTyxjQUFjLENBQUM7U0FDdkI7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCx3Q0FBUyxHQUFULFVBQVUsS0FBYSxFQUFFLEtBQWE7UUFDcEMsSUFBTSxZQUFZLEdBQ2hCLElBQUksQ0FBQyxNQUFNO1lBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWE7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Z0JBM0Q2QixTQUFTOzs7SUFENUIsb0JBQW9CO1FBSGhDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxvQkFBb0IsQ0E2RGhDOytCQW5FRDtDQW1FQyxBQTdERCxJQTZEQztTQTdEWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi9jb25maWcvb2NjLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU2NvcGVzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IE9jY0NvbmZpZykge31cblxuICAvKipcbiAgICogQWltcyB0byBleHBhbmQgc2NvcGVzIGJhc2VkIG9uIGxvYWRpbmcgc2NvcGVzIGNvbmZpZy5cbiAgICpcbiAgICogSS5lLiBpZiAnZGV0YWlscycgc2NvcGUgaW5jbHVkZXMgJ2xpc3QnIHNjb3BlIGJ5IGNvbmZpZ3VyYXRpb24sIGl0J2xsIHJldHVybiBbJ2RldGFpbHMnLCAnbGlzdCddXG4gICAqXG4gICAqIElmIHNjb3BlIGRhdGEgb3ZlcmxhcHMgd2l0aCBlYWNoIG90aGVyLCB0aGUgZGF0YSBzaG91bGQgYmUgbWVyZ2VkIGluIHRoZSBvcmRlciBvZiBzY29wZXMgcHJvdmlkZWQsXG4gICAqIGkuZS4gdGhlIGxhc3Qgc2NvcGUgaXMgbWVyZ2VkIGxhc3QsIG92ZXJ3cml0aW5nIHBhcnRzIG9mIHRoZSBkYXRhIGFscmVhZHkgcHJvdmlkZWQgYnkgcHJlY2VkaW5nIHNjb3BlLlxuICAgKiBJdCBzaG91bGQgYXBwbHkgYWxzbyB0byBpbXBsaWNpdCBzY29wZXMgKHRoYXQgYXJlIGluY2x1ZGVkIGJ5IGNvbmZpZ3VyYXRpb24pLlxuICAgKlxuICAgKiBAcGFyYW0gbW9kZWxcbiAgICogQHBhcmFtIHNjb3Blc1xuICAgKi9cbiAgZXhwYW5kKG1vZGVsOiBzdHJpbmcsIHNjb3Blczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gICAgY29uc3Qgc2NvcGVzQ29uZmlnID1cbiAgICAgIHRoaXMuY29uZmlnICYmXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kICYmXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kLmxvYWRpbmdTY29wZXMgJiZcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tlbmQubG9hZGluZ1Njb3Blc1ttb2RlbF07XG5cbiAgICBpZiAoc2NvcGVzQ29uZmlnKSB7XG4gICAgICBjb25zdCBleHBhbmRlZFNjb3BlcyA9IFsuLi5zY29wZXNdO1xuICAgICAgbGV0IGkgPSBleHBhbmRlZFNjb3Blcy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChpID4gMCkge1xuICAgICAgICBpLS07XG4gICAgICAgIGNvbnN0IGluY2x1ZGVkU2NvcGVzID1cbiAgICAgICAgICBzY29wZXNDb25maWdbZXhwYW5kZWRTY29wZXNbaV1dICYmXG4gICAgICAgICAgc2NvcGVzQ29uZmlnW2V4cGFuZGVkU2NvcGVzW2ldXS5pbmNsdWRlO1xuICAgICAgICBpZiAoaW5jbHVkZWRTY29wZXMpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGluY2x1ZGVkU2NvcGUgb2YgaW5jbHVkZWRTY29wZXMpIHtcbiAgICAgICAgICAgIGlmICghZXhwYW5kZWRTY29wZXMuaW5jbHVkZXMoaW5jbHVkZWRTY29wZSkpIHtcbiAgICAgICAgICAgICAgZXhwYW5kZWRTY29wZXMuc3BsaWNlKGksIDAsIGluY2x1ZGVkU2NvcGUpO1xuICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBleHBhbmRlZFNjb3BlcztcbiAgICB9XG5cbiAgICByZXR1cm4gc2NvcGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBtYXhBZ2UgZm9yIHByb2R1Y3Qgc2NvcGUgaW4gbWlsbGlzZWNvbmRzXG4gICAqXG4gICAqIEBwYXJhbSBtb2RlbFxuICAgKiBAcGFyYW0gc2NvcGVcbiAgICovXG4gIGdldE1heEFnZShtb2RlbDogc3RyaW5nLCBzY29wZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBzY29wZXNDb25maWcgPVxuICAgICAgdGhpcy5jb25maWcgJiZcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tlbmQgJiZcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tlbmQubG9hZGluZ1Njb3BlcyAmJlxuICAgICAgdGhpcy5jb25maWcuYmFja2VuZC5sb2FkaW5nU2NvcGVzW21vZGVsXTtcbiAgICByZXR1cm4gKHNjb3Blc0NvbmZpZ1tzY29wZV0gJiYgc2NvcGVzQ29uZmlnW3Njb3BlXS5tYXhBZ2UpICogMTAwMCB8fCAwO1xuICB9XG59XG4iXX0=
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class OccCostCenterNormalizer {
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign(Object.assign({}, source), { active: this.normalizeBoolean(source.active) });
        }
        return target;
    }
    /**
     * Returns the boolean value for a string property that is supposed
     * to be of type boolean.
     */
    normalizeBoolean(property) {
        return typeof property === 'string' ? property === 'true' : property;
    }
}
OccCostCenterNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccCostCenterNormalizer_Factory() { return new OccCostCenterNormalizer(); }, token: OccCostCenterNormalizer, providedIn: "root" });
OccCostCenterNormalizer.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNvc3QtY2VudGVyLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9vY2MvYWRhcHRlcnMvY29zdC1jZW50ZXIvY29udmVydGVycy9vY2MtY29zdC1jZW50ZXItbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVEzQyxNQUFNLE9BQU8sdUJBQXVCO0lBRWxDLE9BQU8sQ0FBQyxNQUFzQixFQUFFLE1BQW1CO1FBQ2pELElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLG1DQUNBLE1BQWMsS0FDbEIsTUFBTSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQzdDLENBQUM7U0FDSDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7O09BR0c7SUFDTyxnQkFBZ0IsQ0FBQyxRQUEwQjtRQUNuRCxPQUFPLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ3ZFLENBQUM7Ozs7WUFyQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29zdENlbnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL29yZy11bml0Lm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9jY0Nvc3RDZW50ZXJOb3JtYWxpemVyXG4gIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5Db3N0Q2VudGVyLCBDb3N0Q2VudGVyPiB7XG4gIGNvbnZlcnQoc291cmNlOiBPY2MuQ29zdENlbnRlciwgdGFyZ2V0PzogQ29zdENlbnRlcik6IENvc3RDZW50ZXIge1xuICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0ID0ge1xuICAgICAgICAuLi4oc291cmNlIGFzIGFueSksXG4gICAgICAgIGFjdGl2ZTogdGhpcy5ub3JtYWxpemVCb29sZWFuKHNvdXJjZS5hY3RpdmUpLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBib29sZWFuIHZhbHVlIGZvciBhIHN0cmluZyBwcm9wZXJ0eSB0aGF0IGlzIHN1cHBvc2VkXG4gICAqIHRvIGJlIG9mIHR5cGUgYm9vbGVhbi5cbiAgICovXG4gIHByb3RlY3RlZCBub3JtYWxpemVCb29sZWFuKHByb3BlcnR5OiBzdHJpbmcgfCBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ3N0cmluZycgPyBwcm9wZXJ0eSA9PT0gJ3RydWUnIDogcHJvcGVydHk7XG4gIH1cbn1cbiJdfQ==
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class OccCostCenterSerializer {
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign(Object.assign({}, source), { activeFlag: source.active });
            delete target.active;
        }
        return target;
    }
}
OccCostCenterSerializer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccCostCenterSerializer_Factory() { return new OccCostCenterSerializer(); }, token: OccCostCenterSerializer, providedIn: "root" });
OccCostCenterSerializer.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNvc3QtY2VudGVyLXNlcmlhbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9vY2MvYWRhcHRlcnMvY29zdC1jZW50ZXIvY29udmVydGVycy9vY2MtY29zdC1jZW50ZXItc2VyaWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVEzQyxNQUFNLE9BQU8sdUJBQXVCO0lBRWxDLE9BQU8sQ0FBQyxNQUFrQixFQUFFLE1BQXVCO1FBQ2pELElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLG1DQUNBLE1BQWMsS0FDbEIsVUFBVSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQzFCLENBQUM7WUFDRixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDdEI7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7O1lBZEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29zdENlbnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL29yZy11bml0Lm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9jY0Nvc3RDZW50ZXJTZXJpYWxpemVyXG4gIGltcGxlbWVudHMgQ29udmVydGVyPENvc3RDZW50ZXIsIE9jYy5Db3N0Q2VudGVyPiB7XG4gIGNvbnZlcnQoc291cmNlOiBDb3N0Q2VudGVyLCB0YXJnZXQ/OiBPY2MuQ29zdENlbnRlcik6IE9jYy5Db3N0Q2VudGVyIHtcbiAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldCA9IHtcbiAgICAgICAgLi4uKHNvdXJjZSBhcyBhbnkpLFxuICAgICAgICBhY3RpdmVGbGFnOiBzb3VyY2UuYWN0aXZlLFxuICAgICAgfTtcbiAgICAgIGRlbGV0ZSB0YXJnZXQuYWN0aXZlO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG59XG4iXX0=
import { __assign, __decorate, __read, __spread } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { merge, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { ProductConnector } from '../../connectors/product/product.connector';
import { ProductActions } from '../actions/index';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { bufferDebounceTime } from '../../../util/buffer-debounce-time';
import { withdrawOn } from '../../../util/withdraw-on';
var ProductEffects = /** @class */ (function () {
    function ProductEffects(actions$, productConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.productConnector = productConnector;
        // we want to cancel all ongoing requests when currency or language changes,
        this.contextChange$ = this.actions$.pipe(ofType(SiteContextActions.CURRENCY_CHANGE, SiteContextActions.LANGUAGE_CHANGE));
        this.loadProduct$ = createEffect(function () { return function (_a) {
            var _b = _a === void 0 ? {} : _a, scheduler = _b.scheduler, _c = _b.debounce, debounce = _c === void 0 ? 0 : _c;
            return _this.actions$.pipe(ofType(ProductActions.LOAD_PRODUCT), map(function (action) { return ({
                code: action.payload,
                scope: action.meta.scope,
            }); }), 
            // we are grouping all load actions that happens at the same time
            // to optimize loading and pass them all to productConnector.getMany
            bufferDebounceTime(debounce, scheduler), mergeMap(function (products) {
                return merge.apply(void 0, __spread(_this.productConnector
                    .getMany(products)
                    .map(_this.productLoadEffect)));
            }), withdrawOn(_this.contextChange$));
        }; });
    }
    ProductEffects.prototype.productLoadEffect = function (productLoad) {
        return productLoad.data$.pipe(map(function (data) {
            return new ProductActions.LoadProductSuccess(__assign({ code: productLoad.code }, data), productLoad.scope);
        }), catchError(function (error) {
            return of(new ProductActions.LoadProductFail(productLoad.code, makeErrorSerializable(error), productLoad.scope));
        }));
    };
    ProductEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: ProductConnector }
    ]; };
    ProductEffects = __decorate([
        Injectable()
    ], ProductEffects);
    return ProductEffects;
}());
export { ProductEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9lZmZlY3RzL3Byb2R1Y3QuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsS0FBSyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR3ZEO0lBMERFLHdCQUNVLFFBQWlCLEVBQ2pCLGdCQUFrQztRQUY1QyxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQTNENUMsNEVBQTRFO1FBQ3BFLG1CQUFjLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM3RCxNQUFNLENBQ0osa0JBQWtCLENBQUMsZUFBZSxFQUNsQyxrQkFBa0IsQ0FBQyxlQUFlLENBQ25DLENBQ0YsQ0FBQztRQUVGLGlCQUFZLEdBQUcsWUFBWSxDQUN6QixjQUFNLE9BQUEsVUFBQyxFQUFnQztnQkFBaEMsNEJBQWdDLEVBQTlCLHdCQUFTLEVBQUUsZ0JBQVksRUFBWixpQ0FBWTtZQUc5QixPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQixNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUNuQyxHQUFHLENBQUMsVUFBQyxNQUFrQyxJQUFLLE9BQUEsQ0FBQztnQkFDM0MsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPO2dCQUNwQixLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO2FBQ3pCLENBQUMsRUFIMEMsQ0FHMUMsQ0FBQztZQUNILGlFQUFpRTtZQUNqRSxvRUFBb0U7WUFDcEUsa0JBQWtCLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxFQUN2QyxRQUFRLENBQUMsVUFBQSxRQUFRO2dCQUNmLE9BQUEsS0FBSyx3QkFDQSxLQUFJLENBQUMsZ0JBQWdCO3FCQUNyQixPQUFPLENBQUMsUUFBUSxDQUFDO3FCQUNqQixHQUFHLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDO1lBSGhDLENBSUMsQ0FDRixFQUNELFVBQVUsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQ2hDO1FBakJELENBaUJDLEVBcEJHLENBb0JILENBQ0osQ0FBQztJQThCQyxDQUFDO0lBNUJJLDBDQUFpQixHQUF6QixVQUNFLFdBQThCO1FBSTlCLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQzNCLEdBQUcsQ0FDRCxVQUFBLElBQUk7WUFDRixPQUFBLElBQUksY0FBYyxDQUFDLGtCQUFrQixZQUNqQyxJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUksSUFBSyxJQUFJLEdBQ2pDLFdBQVcsQ0FBQyxLQUFLLENBQ2xCO1FBSEQsQ0FHQyxDQUNKLEVBQ0QsVUFBVSxDQUFDLFVBQUEsS0FBSztZQUNkLE9BQU8sRUFBRSxDQUNQLElBQUksY0FBYyxDQUFDLGVBQWUsQ0FDaEMsV0FBVyxDQUFDLElBQUksRUFDaEIscUJBQXFCLENBQUMsS0FBSyxDQUFDLEVBQzVCLFdBQVcsQ0FBQyxLQUFLLENBQ2xCLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkFHbUIsT0FBTztnQkFDQyxnQkFBZ0I7O0lBNURqQyxjQUFjO1FBRDFCLFVBQVUsRUFBRTtPQUNBLGNBQWMsQ0E4RDFCO0lBQUQscUJBQUM7Q0FBQSxBQTlERCxJQThEQztTQTlEWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgY3JlYXRlRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IG1lcmdlLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBQcm9kdWN0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9wcm9kdWN0L3Byb2R1Y3QuY29ubmVjdG9yJztcbmltcG9ydCB7IFByb2R1Y3RBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTY29wZWRQcm9kdWN0RGF0YSB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvcHJvZHVjdC9zY29wZWQtcHJvZHVjdC1kYXRhJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IGJ1ZmZlckRlYm91bmNlVGltZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvYnVmZmVyLWRlYm91bmNlLXRpbWUnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgd2l0aGRyYXdPbiB9IGZyb20gJy4uLy4uLy4uL3V0aWwvd2l0aGRyYXctb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdEVmZmVjdHMge1xuICAvLyB3ZSB3YW50IHRvIGNhbmNlbCBhbGwgb25nb2luZyByZXF1ZXN0cyB3aGVuIGN1cnJlbmN5IG9yIGxhbmd1YWdlIGNoYW5nZXMsXG4gIHByaXZhdGUgY29udGV4dENoYW5nZSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuQ1VSUkVOQ1lfQ0hBTkdFLFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRVxuICAgIClcbiAgKTtcblxuICBsb2FkUHJvZHVjdCQgPSBjcmVhdGVFZmZlY3QoXG4gICAgKCkgPT4gKHsgc2NoZWR1bGVyLCBkZWJvdW5jZSA9IDAgfSA9IHt9KTogT2JzZXJ2YWJsZTxcbiAgICAgIFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0U3VjY2VzcyB8IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0RmFpbFxuICAgID4gPT5cbiAgICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgICAgb2ZUeXBlKFByb2R1Y3RBY3Rpb25zLkxPQURfUFJPRFVDVCksXG4gICAgICAgIG1hcCgoYWN0aW9uOiBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdCkgPT4gKHtcbiAgICAgICAgICBjb2RlOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICBzY29wZTogYWN0aW9uLm1ldGEuc2NvcGUsXG4gICAgICAgIH0pKSxcbiAgICAgICAgLy8gd2UgYXJlIGdyb3VwaW5nIGFsbCBsb2FkIGFjdGlvbnMgdGhhdCBoYXBwZW5zIGF0IHRoZSBzYW1lIHRpbWVcbiAgICAgICAgLy8gdG8gb3B0aW1pemUgbG9hZGluZyBhbmQgcGFzcyB0aGVtIGFsbCB0byBwcm9kdWN0Q29ubmVjdG9yLmdldE1hbnlcbiAgICAgICAgYnVmZmVyRGVib3VuY2VUaW1lKGRlYm91bmNlLCBzY2hlZHVsZXIpLFxuICAgICAgICBtZXJnZU1hcChwcm9kdWN0cyA9PlxuICAgICAgICAgIG1lcmdlKFxuICAgICAgICAgICAgLi4udGhpcy5wcm9kdWN0Q29ubmVjdG9yXG4gICAgICAgICAgICAgIC5nZXRNYW55KHByb2R1Y3RzKVxuICAgICAgICAgICAgICAubWFwKHRoaXMucHJvZHVjdExvYWRFZmZlY3QpXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICAgICApXG4gICk7XG5cbiAgcHJpdmF0ZSBwcm9kdWN0TG9hZEVmZmVjdChcbiAgICBwcm9kdWN0TG9hZDogU2NvcGVkUHJvZHVjdERhdGFcbiAgKTogT2JzZXJ2YWJsZTxcbiAgICBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFN1Y2Nlc3MgfCBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdEZhaWxcbiAgPiB7XG4gICAgcmV0dXJuIHByb2R1Y3RMb2FkLmRhdGEkLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgIGRhdGEgPT5cbiAgICAgICAgICBuZXcgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RTdWNjZXNzKFxuICAgICAgICAgICAgeyBjb2RlOiBwcm9kdWN0TG9hZC5jb2RlLCAuLi5kYXRhIH0sXG4gICAgICAgICAgICBwcm9kdWN0TG9hZC5zY29wZVxuICAgICAgICAgIClcbiAgICAgICksXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgcmV0dXJuIG9mKFxuICAgICAgICAgIG5ldyBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdEZhaWwoXG4gICAgICAgICAgICBwcm9kdWN0TG9hZC5jb2RlLFxuICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSxcbiAgICAgICAgICAgIHByb2R1Y3RMb2FkLnNjb3BlXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHByb2R1Y3RDb25uZWN0b3I6IFByb2R1Y3RDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19
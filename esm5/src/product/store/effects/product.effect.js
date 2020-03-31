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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9lZmZlY3RzL3Byb2R1Y3QuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsS0FBSyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR3ZEO0lBMERFLHdCQUNVLFFBQWlCLEVBQ2pCLGdCQUFrQztRQUY1QyxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQTNENUMsNEVBQTRFO1FBQ3BFLG1CQUFjLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM3RCxNQUFNLENBQ0osa0JBQWtCLENBQUMsZUFBZSxFQUNsQyxrQkFBa0IsQ0FBQyxlQUFlLENBQ25DLENBQ0YsQ0FBQztRQUVGLGlCQUFZLEdBQUcsWUFBWSxDQUN6QixjQUFNLE9BQUEsVUFBQyxFQUFnQztnQkFBaEMsNEJBQWdDLEVBQTlCLHdCQUFTLEVBQUUsZ0JBQVksRUFBWixpQ0FBWTtZQUc5QixPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQixNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUNuQyxHQUFHLENBQUMsVUFBQyxNQUFrQyxJQUFLLE9BQUEsQ0FBQztnQkFDM0MsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPO2dCQUNwQixLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO2FBQ3pCLENBQUMsRUFIMEMsQ0FHMUMsQ0FBQztZQUNILGlFQUFpRTtZQUNqRSxvRUFBb0U7WUFDcEUsa0JBQWtCLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxFQUN2QyxRQUFRLENBQUMsVUFBQyxRQUFRO2dCQUNoQixPQUFBLEtBQUssd0JBQ0EsS0FBSSxDQUFDLGdCQUFnQjtxQkFDckIsT0FBTyxDQUFDLFFBQVEsQ0FBQztxQkFDakIsR0FBRyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUhoQyxDQUlDLENBQ0YsRUFDRCxVQUFVLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUNoQztRQWpCRCxDQWlCQyxFQXBCRyxDQW9CSCxDQUNKLENBQUM7SUE4QkMsQ0FBQztJQTVCSSwwQ0FBaUIsR0FBekIsVUFDRSxXQUE4QjtRQUk5QixPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUMzQixHQUFHLENBQ0QsVUFBQyxJQUFJO1lBQ0gsT0FBQSxJQUFJLGNBQWMsQ0FBQyxrQkFBa0IsWUFDakMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJLElBQUssSUFBSSxHQUNqQyxXQUFXLENBQUMsS0FBSyxDQUNsQjtRQUhELENBR0MsQ0FDSixFQUNELFVBQVUsQ0FBQyxVQUFDLEtBQUs7WUFDZixPQUFPLEVBQUUsQ0FDUCxJQUFJLGNBQWMsQ0FBQyxlQUFlLENBQ2hDLFdBQVcsQ0FBQyxJQUFJLEVBQ2hCLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxFQUM1QixXQUFXLENBQUMsS0FBSyxDQUNsQixDQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBR21CLE9BQU87Z0JBQ0MsZ0JBQWdCOztJQTVEakMsY0FBYztRQUQxQixVQUFVLEVBQUU7T0FDQSxjQUFjLENBOEQxQjtJQUFELHFCQUFDO0NBQUEsQUE5REQsSUE4REM7U0E5RFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIGNyZWF0ZUVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBtZXJnZSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgUHJvZHVjdENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvcHJvZHVjdC9wcm9kdWN0LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBQcm9kdWN0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU2NvcGVkUHJvZHVjdERhdGEgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3Byb2R1Y3Qvc2NvcGVkLXByb2R1Y3QtZGF0YSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBidWZmZXJEZWJvdW5jZVRpbWUgfSBmcm9tICcuLi8uLi8uLi91dGlsL2J1ZmZlci1kZWJvdW5jZS10aW1lJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IHdpdGhkcmF3T24gfSBmcm9tICcuLi8uLi8uLi91dGlsL3dpdGhkcmF3LW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RFZmZlY3RzIHtcbiAgLy8gd2Ugd2FudCB0byBjYW5jZWwgYWxsIG9uZ29pbmcgcmVxdWVzdHMgd2hlbiBjdXJyZW5jeSBvciBsYW5ndWFnZSBjaGFuZ2VzLFxuICBwcml2YXRlIGNvbnRleHRDaGFuZ2UkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkNVUlJFTkNZX0NIQU5HRSxcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0VcbiAgICApXG4gICk7XG5cbiAgbG9hZFByb2R1Y3QkID0gY3JlYXRlRWZmZWN0KFxuICAgICgpID0+ICh7IHNjaGVkdWxlciwgZGVib3VuY2UgPSAwIH0gPSB7fSk6IE9ic2VydmFibGU8XG4gICAgICBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFN1Y2Nlc3MgfCBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdEZhaWxcbiAgICA+ID0+XG4gICAgICB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICAgIG9mVHlwZShQcm9kdWN0QWN0aW9ucy5MT0FEX1BST0RVQ1QpLFxuICAgICAgICBtYXAoKGFjdGlvbjogUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3QpID0+ICh7XG4gICAgICAgICAgY29kZTogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgc2NvcGU6IGFjdGlvbi5tZXRhLnNjb3BlLFxuICAgICAgICB9KSksXG4gICAgICAgIC8vIHdlIGFyZSBncm91cGluZyBhbGwgbG9hZCBhY3Rpb25zIHRoYXQgaGFwcGVucyBhdCB0aGUgc2FtZSB0aW1lXG4gICAgICAgIC8vIHRvIG9wdGltaXplIGxvYWRpbmcgYW5kIHBhc3MgdGhlbSBhbGwgdG8gcHJvZHVjdENvbm5lY3Rvci5nZXRNYW55XG4gICAgICAgIGJ1ZmZlckRlYm91bmNlVGltZShkZWJvdW5jZSwgc2NoZWR1bGVyKSxcbiAgICAgICAgbWVyZ2VNYXAoKHByb2R1Y3RzKSA9PlxuICAgICAgICAgIG1lcmdlKFxuICAgICAgICAgICAgLi4udGhpcy5wcm9kdWN0Q29ubmVjdG9yXG4gICAgICAgICAgICAgIC5nZXRNYW55KHByb2R1Y3RzKVxuICAgICAgICAgICAgICAubWFwKHRoaXMucHJvZHVjdExvYWRFZmZlY3QpXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICAgICApXG4gICk7XG5cbiAgcHJpdmF0ZSBwcm9kdWN0TG9hZEVmZmVjdChcbiAgICBwcm9kdWN0TG9hZDogU2NvcGVkUHJvZHVjdERhdGFcbiAgKTogT2JzZXJ2YWJsZTxcbiAgICBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFN1Y2Nlc3MgfCBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdEZhaWxcbiAgPiB7XG4gICAgcmV0dXJuIHByb2R1Y3RMb2FkLmRhdGEkLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgIChkYXRhKSA9PlxuICAgICAgICAgIG5ldyBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFN1Y2Nlc3MoXG4gICAgICAgICAgICB7IGNvZGU6IHByb2R1Y3RMb2FkLmNvZGUsIC4uLmRhdGEgfSxcbiAgICAgICAgICAgIHByb2R1Y3RMb2FkLnNjb3BlXG4gICAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PiB7XG4gICAgICAgIHJldHVybiBvZihcbiAgICAgICAgICBuZXcgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RGYWlsKFxuICAgICAgICAgICAgcHJvZHVjdExvYWQuY29kZSxcbiAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvciksXG4gICAgICAgICAgICBwcm9kdWN0TG9hZC5zY29wZVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBwcm9kdWN0Q29ubmVjdG9yOiBQcm9kdWN0Q29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==
import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ConfigModule } from '../../config/config.module';
import { StorageSyncType } from '../../state/config/state-config';
import { StateModule } from '../../state/state.module';
import { CART_FEATURE } from './cart-state';
import { CartEntryEffects } from './effects/cart-entry.effect';
import { CartVoucherEffects } from './effects/cart-voucher.effect';
import { CartEffects } from './effects/cart.effect';
import { WishListEffects } from './effects/wish-list.effect';
import { metaReducers, reducerProvider, reducerToken } from './reducers/index';
var effects = [
    CartEffects,
    CartEntryEffects,
    CartVoucherEffects,
    WishListEffects,
];
export function cartStoreConfigFactory() {
    var _a;
    var config = {
        state: {
            storageSync: {
                keys: (_a = {},
                    _a[CART_FEATURE + ".active.value.content.guid"] = StorageSyncType.LOCAL_STORAGE,
                    _a[CART_FEATURE + ".active.value.content.code"] = StorageSyncType.LOCAL_STORAGE,
                    _a[CART_FEATURE + ".active.value.content.user"] = StorageSyncType.LOCAL_STORAGE,
                    _a),
            },
        },
    };
    return config;
}
var CartStoreModule = /** @class */ (function () {
    function CartStoreModule() {
    }
    CartStoreModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                HttpClientModule,
                StateModule,
                StoreModule.forFeature(CART_FEATURE, reducerToken, { metaReducers: metaReducers }),
                EffectsModule.forFeature(effects),
                ConfigModule.withConfigFactory(cartStoreConfigFactory),
            ],
            providers: [reducerProvider],
        })
    ], CartStoreModule);
    return CartStoreModule;
}());
export { CartStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zdG9yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9jYXJ0LXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvRSxJQUFNLE9BQU8sR0FBVTtJQUNyQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0NBQ2hCLENBQUM7QUFFRixNQUFNLFVBQVUsc0JBQXNCOztJQUNwQyxJQUFNLE1BQU0sR0FBZ0I7UUFDMUIsS0FBSyxFQUFFO1lBQ0wsV0FBVyxFQUFFO2dCQUNYLElBQUk7b0JBQ0YsR0FBSSxZQUFZLCtCQUE0QixJQUFHLGVBQWUsQ0FBQyxhQUFhO29CQUM1RSxHQUFJLFlBQVksK0JBQTRCLElBQUcsZUFBZSxDQUFDLGFBQWE7b0JBQzVFLEdBQUksWUFBWSwrQkFBNEIsSUFBRyxlQUFlLENBQUMsYUFBYTt1QkFDN0U7YUFDRjtTQUNGO0tBQ0YsQ0FBQztJQUNGLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFhRDtJQUFBO0lBQThCLENBQUM7SUFBbEIsZUFBZTtRQVgzQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixnQkFBZ0I7Z0JBQ2hCLFdBQVc7Z0JBQ1gsV0FBVyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLEVBQUUsWUFBWSxjQUFBLEVBQUUsQ0FBQztnQkFDcEUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7Z0JBQ2pDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQzthQUN2RDtZQUNELFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztTQUM3QixDQUFDO09BQ1csZUFBZSxDQUFHO0lBQUQsc0JBQUM7Q0FBQSxBQUEvQixJQUErQjtTQUFsQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBTdGF0ZUNvbmZpZywgU3RvcmFnZVN5bmNUeXBlIH0gZnJvbSAnLi4vLi4vc3RhdGUvY29uZmlnL3N0YXRlLWNvbmZpZyc7XG5pbXBvcnQgeyBTdGF0ZU1vZHVsZSB9IGZyb20gJy4uLy4uL3N0YXRlL3N0YXRlLm1vZHVsZSc7XG5pbXBvcnQgeyBDQVJUX0ZFQVRVUkUgfSBmcm9tICcuL2NhcnQtc3RhdGUnO1xuaW1wb3J0IHsgQ2FydEVudHJ5RWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9jYXJ0LWVudHJ5LmVmZmVjdCc7XG5pbXBvcnQgeyBDYXJ0Vm91Y2hlckVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvY2FydC12b3VjaGVyLmVmZmVjdCc7XG5pbXBvcnQgeyBDYXJ0RWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9jYXJ0LmVmZmVjdCc7XG5pbXBvcnQgeyBXaXNoTGlzdEVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvd2lzaC1saXN0LmVmZmVjdCc7XG5pbXBvcnQgeyBtZXRhUmVkdWNlcnMsIHJlZHVjZXJQcm92aWRlciwgcmVkdWNlclRva2VuIH0gZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCc7XG5cbmNvbnN0IGVmZmVjdHM6IGFueVtdID0gW1xuICBDYXJ0RWZmZWN0cyxcbiAgQ2FydEVudHJ5RWZmZWN0cyxcbiAgQ2FydFZvdWNoZXJFZmZlY3RzLFxuICBXaXNoTGlzdEVmZmVjdHMsXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FydFN0b3JlQ29uZmlnRmFjdG9yeSgpOiBTdGF0ZUNvbmZpZyB7XG4gIGNvbnN0IGNvbmZpZzogU3RhdGVDb25maWcgPSB7XG4gICAgc3RhdGU6IHtcbiAgICAgIHN0b3JhZ2VTeW5jOiB7XG4gICAgICAgIGtleXM6IHtcbiAgICAgICAgICBbYCR7Q0FSVF9GRUFUVVJFfS5hY3RpdmUudmFsdWUuY29udGVudC5ndWlkYF06IFN0b3JhZ2VTeW5jVHlwZS5MT0NBTF9TVE9SQUdFLFxuICAgICAgICAgIFtgJHtDQVJUX0ZFQVRVUkV9LmFjdGl2ZS52YWx1ZS5jb250ZW50LmNvZGVgXTogU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0UsXG4gICAgICAgICAgW2Ake0NBUlRfRkVBVFVSRX0uYWN0aXZlLnZhbHVlLmNvbnRlbnQudXNlcmBdOiBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIFN0YXRlTW9kdWxlLFxuICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoQ0FSVF9GRUFUVVJFLCByZWR1Y2VyVG9rZW4sIHsgbWV0YVJlZHVjZXJzIH0pLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShlZmZlY3RzKSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZ0ZhY3RvcnkoY2FydFN0b3JlQ29uZmlnRmFjdG9yeSksXG4gIF0sXG4gIHByb3ZpZGVyczogW3JlZHVjZXJQcm92aWRlcl0sXG59KVxuZXhwb3J0IGNsYXNzIENhcnRTdG9yZU1vZHVsZSB7fVxuIl19
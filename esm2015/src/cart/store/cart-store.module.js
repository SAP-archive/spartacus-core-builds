/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
/** @type {?} */
const effects = [
    CartEffects,
    CartEntryEffects,
    CartVoucherEffects,
    WishListEffects,
];
/**
 * @return {?}
 */
export function cartStoreConfigFactory() {
    /** @type {?} */
    const config = {
        state: {
            storageSync: {
                keys: {
                    [`${CART_FEATURE}.active.value.content.guid`]: StorageSyncType.LOCAL_STORAGE,
                    [`${CART_FEATURE}.active.value.content.code`]: StorageSyncType.LOCAL_STORAGE,
                    [`${CART_FEATURE}.active.value.content.user`]: StorageSyncType.LOCAL_STORAGE,
                },
            },
        },
    };
    return config;
}
export class CartStoreModule {
}
CartStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    StateModule,
                    StoreModule.forFeature(CART_FEATURE, reducerToken, { metaReducers }),
                    EffectsModule.forFeature(effects),
                    ConfigModule.withConfigFactory(cartStoreConfigFactory),
                ],
                providers: [reducerProvider],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zdG9yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9jYXJ0LXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7TUFFekUsT0FBTyxHQUFVO0lBQ3JCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7Q0FDaEI7Ozs7QUFFRCxNQUFNLFVBQVUsc0JBQXNCOztVQUM5QixNQUFNLEdBQWdCO1FBQzFCLEtBQUssRUFBRTtZQUNMLFdBQVcsRUFBRTtnQkFDWCxJQUFJLEVBQUU7b0JBQ0osQ0FBQyxHQUFHLFlBQVksNEJBQTRCLENBQUMsRUFBRSxlQUFlLENBQUMsYUFBYTtvQkFDNUUsQ0FBQyxHQUFHLFlBQVksNEJBQTRCLENBQUMsRUFBRSxlQUFlLENBQUMsYUFBYTtvQkFDNUUsQ0FBQyxHQUFHLFlBQVksNEJBQTRCLENBQUMsRUFBRSxlQUFlLENBQUMsYUFBYTtpQkFDN0U7YUFDRjtTQUNGO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBYUQsTUFBTSxPQUFPLGVBQWU7OztZQVgzQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZ0JBQWdCO29CQUNoQixXQUFXO29CQUNYLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDO29CQUNwRSxhQUFhLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztvQkFDakMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDO2lCQUN2RDtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7YUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IFN0YXRlQ29uZmlnLCBTdG9yYWdlU3luY1R5cGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9jb25maWcvc3RhdGUtY29uZmlnJztcbmltcG9ydCB7IFN0YXRlTW9kdWxlIH0gZnJvbSAnLi4vLi4vc3RhdGUvc3RhdGUubW9kdWxlJztcbmltcG9ydCB7IENBUlRfRkVBVFVSRSB9IGZyb20gJy4vY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBDYXJ0RW50cnlFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2NhcnQtZW50cnkuZWZmZWN0JztcbmltcG9ydCB7IENhcnRWb3VjaGVyRWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9jYXJ0LXZvdWNoZXIuZWZmZWN0JztcbmltcG9ydCB7IENhcnRFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2NhcnQuZWZmZWN0JztcbmltcG9ydCB7IFdpc2hMaXN0RWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy93aXNoLWxpc3QuZWZmZWN0JztcbmltcG9ydCB7IG1ldGFSZWR1Y2VycywgcmVkdWNlclByb3ZpZGVyLCByZWR1Y2VyVG9rZW4gfSBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcblxuY29uc3QgZWZmZWN0czogYW55W10gPSBbXG4gIENhcnRFZmZlY3RzLFxuICBDYXJ0RW50cnlFZmZlY3RzLFxuICBDYXJ0Vm91Y2hlckVmZmVjdHMsXG4gIFdpc2hMaXN0RWZmZWN0cyxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXJ0U3RvcmVDb25maWdGYWN0b3J5KCk6IFN0YXRlQ29uZmlnIHtcbiAgY29uc3QgY29uZmlnOiBTdGF0ZUNvbmZpZyA9IHtcbiAgICBzdGF0ZToge1xuICAgICAgc3RvcmFnZVN5bmM6IHtcbiAgICAgICAga2V5czoge1xuICAgICAgICAgIFtgJHtDQVJUX0ZFQVRVUkV9LmFjdGl2ZS52YWx1ZS5jb250ZW50Lmd1aWRgXTogU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0UsXG4gICAgICAgICAgW2Ake0NBUlRfRkVBVFVSRX0uYWN0aXZlLnZhbHVlLmNvbnRlbnQuY29kZWBdOiBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRSxcbiAgICAgICAgICBbYCR7Q0FSVF9GRUFUVVJFfS5hY3RpdmUudmFsdWUuY29udGVudC51c2VyYF06IFN0b3JhZ2VTeW5jVHlwZS5MT0NBTF9TVE9SQUdFLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuICByZXR1cm4gY29uZmlnO1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgU3RhdGVNb2R1bGUsXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShDQVJUX0ZFQVRVUkUsIHJlZHVjZXJUb2tlbiwgeyBtZXRhUmVkdWNlcnMgfSksXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKGVmZmVjdHMpLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnRmFjdG9yeShjYXJ0U3RvcmVDb25maWdGYWN0b3J5KSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbcmVkdWNlclByb3ZpZGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydFN0b3JlTW9kdWxlIHt9XG4iXX0=
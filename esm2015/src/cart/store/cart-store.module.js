import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideDefaultConfigFactory } from '../../config/config.module';
import { StorageSyncType } from '../../state/config/state-config';
import { StateModule } from '../../state/state.module';
import { CART_FEATURE } from './cart-state';
import { CartEntryEffects } from './effects/cart-entry.effect';
import { CartVoucherEffects } from './effects/cart-voucher.effect';
import { CartEffects } from './effects/cart.effect';
import { WishListEffects } from './effects/wish-list.effect';
import { metaReducers, reducerProvider, reducerToken } from './reducers/index';
const effects = [
    CartEffects,
    CartEntryEffects,
    CartVoucherEffects,
    WishListEffects,
];
export function cartStoreConfigFactory() {
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
let CartStoreModule = class CartStoreModule {
};
CartStoreModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            HttpClientModule,
            StateModule,
            StoreModule.forFeature(CART_FEATURE, reducerToken, { metaReducers }),
            EffectsModule.forFeature(effects),
        ],
        providers: [
            provideDefaultConfigFactory(cartStoreConfigFactory),
            reducerProvider,
        ],
    })
], CartStoreModule);
export { CartStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zdG9yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9jYXJ0LXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3pFLE9BQU8sRUFBZSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9FLE1BQU0sT0FBTyxHQUFVO0lBQ3JCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7Q0FDaEIsQ0FBQztBQUVGLE1BQU0sVUFBVSxzQkFBc0I7SUFDcEMsTUFBTSxNQUFNLEdBQWdCO1FBQzFCLEtBQUssRUFBRTtZQUNMLFdBQVcsRUFBRTtnQkFDWCxJQUFJLEVBQUU7b0JBQ0osQ0FBQyxHQUFHLFlBQVksNEJBQTRCLENBQUMsRUFBRSxlQUFlLENBQUMsYUFBYTtvQkFDNUUsQ0FBQyxHQUFHLFlBQVksNEJBQTRCLENBQUMsRUFBRSxlQUFlLENBQUMsYUFBYTtvQkFDNUUsQ0FBQyxHQUFHLFlBQVksNEJBQTRCLENBQUMsRUFBRSxlQUFlLENBQUMsYUFBYTtpQkFDN0U7YUFDRjtTQUNGO0tBQ0YsQ0FBQztJQUNGLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFlRCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0NBQUcsQ0FBQTtBQUFsQixlQUFlO0lBYjNCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsV0FBVztZQUNYLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDO1lBQ3BFLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1NBQ2xDO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsMkJBQTJCLENBQUMsc0JBQXNCLENBQUM7WUFDbkQsZUFBZTtTQUNoQjtLQUNGLENBQUM7R0FDVyxlQUFlLENBQUc7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWdGYWN0b3J5IH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgU3RhdGVDb25maWcsIFN0b3JhZ2VTeW5jVHlwZSB9IGZyb20gJy4uLy4uL3N0YXRlL2NvbmZpZy9zdGF0ZS1jb25maWcnO1xuaW1wb3J0IHsgU3RhdGVNb2R1bGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9zdGF0ZS5tb2R1bGUnO1xuaW1wb3J0IHsgQ0FSVF9GRUFUVVJFIH0gZnJvbSAnLi9jYXJ0LXN0YXRlJztcbmltcG9ydCB7IENhcnRFbnRyeUVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvY2FydC1lbnRyeS5lZmZlY3QnO1xuaW1wb3J0IHsgQ2FydFZvdWNoZXJFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2NhcnQtdm91Y2hlci5lZmZlY3QnO1xuaW1wb3J0IHsgQ2FydEVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvY2FydC5lZmZlY3QnO1xuaW1wb3J0IHsgV2lzaExpc3RFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL3dpc2gtbGlzdC5lZmZlY3QnO1xuaW1wb3J0IHsgbWV0YVJlZHVjZXJzLCByZWR1Y2VyUHJvdmlkZXIsIHJlZHVjZXJUb2tlbiB9IGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnO1xuXG5jb25zdCBlZmZlY3RzOiBhbnlbXSA9IFtcbiAgQ2FydEVmZmVjdHMsXG4gIENhcnRFbnRyeUVmZmVjdHMsXG4gIENhcnRWb3VjaGVyRWZmZWN0cyxcbiAgV2lzaExpc3RFZmZlY3RzLFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhcnRTdG9yZUNvbmZpZ0ZhY3RvcnkoKTogU3RhdGVDb25maWcge1xuICBjb25zdCBjb25maWc6IFN0YXRlQ29uZmlnID0ge1xuICAgIHN0YXRlOiB7XG4gICAgICBzdG9yYWdlU3luYzoge1xuICAgICAgICBrZXlzOiB7XG4gICAgICAgICAgW2Ake0NBUlRfRkVBVFVSRX0uYWN0aXZlLnZhbHVlLmNvbnRlbnQuZ3VpZGBdOiBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRSxcbiAgICAgICAgICBbYCR7Q0FSVF9GRUFUVVJFfS5hY3RpdmUudmFsdWUuY29udGVudC5jb2RlYF06IFN0b3JhZ2VTeW5jVHlwZS5MT0NBTF9TVE9SQUdFLFxuICAgICAgICAgIFtgJHtDQVJUX0ZFQVRVUkV9LmFjdGl2ZS52YWx1ZS5jb250ZW50LnVzZXJgXTogU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0UsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG4gIHJldHVybiBjb25maWc7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBTdGF0ZU1vZHVsZSxcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKENBUlRfRkVBVFVSRSwgcmVkdWNlclRva2VuLCB7IG1ldGFSZWR1Y2VycyB9KSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoZWZmZWN0cyksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnRmFjdG9yeShjYXJ0U3RvcmVDb25maWdGYWN0b3J5KSxcbiAgICByZWR1Y2VyUHJvdmlkZXIsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENhcnRTdG9yZU1vZHVsZSB7fVxuIl19
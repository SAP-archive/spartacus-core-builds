import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StateModule } from '../../state/state.module';
import { MultiCartEffects } from './effects/multi-cart.effect';
import { MULTI_CART_FEATURE } from './multi-cart-state';
import { multiCartMetaReducers, multiCartReducerProvider, multiCartReducerToken, } from './reducers/index';
var MultiCartStoreModule = /** @class */ (function () {
    function MultiCartStoreModule() {
    }
    MultiCartStoreModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                StateModule,
                StoreModule.forFeature(MULTI_CART_FEATURE, multiCartReducerToken, {
                    metaReducers: multiCartMetaReducers,
                }),
                EffectsModule.forFeature([MultiCartEffects]),
            ],
            providers: [multiCartReducerProvider],
        })
    ], MultiCartStoreModule);
    return MultiCartStoreModule;
}());
export { MultiCartStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC1zdG9yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9tdWx0aS1jYXJ0LXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLHdCQUF3QixFQUN4QixxQkFBcUIsR0FDdEIsTUFBTSxrQkFBa0IsQ0FBQztBQWExQjtJQUFBO0lBQW1DLENBQUM7SUFBdkIsb0JBQW9CO1FBWGhDLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsV0FBVyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRTtvQkFDaEUsWUFBWSxFQUFFLHFCQUFxQjtpQkFDcEMsQ0FBQztnQkFDRixhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUM3QztZQUNELFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxvQkFBb0IsQ0FBRztJQUFELDJCQUFDO0NBQUEsQUFBcEMsSUFBb0M7U0FBdkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFN0YXRlTW9kdWxlIH0gZnJvbSAnLi4vLi4vc3RhdGUvc3RhdGUubW9kdWxlJztcbmltcG9ydCB7IE11bHRpQ2FydEVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvbXVsdGktY2FydC5lZmZlY3QnO1xuaW1wb3J0IHsgTVVMVElfQ0FSVF9GRUFUVVJFIH0gZnJvbSAnLi9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7XG4gIG11bHRpQ2FydE1ldGFSZWR1Y2VycyxcbiAgbXVsdGlDYXJ0UmVkdWNlclByb3ZpZGVyLFxuICBtdWx0aUNhcnRSZWR1Y2VyVG9rZW4sXG59IGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFN0YXRlTW9kdWxlLFxuICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoTVVMVElfQ0FSVF9GRUFUVVJFLCBtdWx0aUNhcnRSZWR1Y2VyVG9rZW4sIHtcbiAgICAgIG1ldGFSZWR1Y2VyczogbXVsdGlDYXJ0TWV0YVJlZHVjZXJzLFxuICAgIH0pLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbTXVsdGlDYXJ0RWZmZWN0c10pLFxuICBdLFxuICBwcm92aWRlcnM6IFttdWx0aUNhcnRSZWR1Y2VyUHJvdmlkZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aUNhcnRTdG9yZU1vZHVsZSB7fVxuIl19
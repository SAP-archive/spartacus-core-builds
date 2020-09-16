import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StateModule } from '../../state/state.module';
import { CartEntryEffects } from './effects/cart-entry.effect';
import { CartVoucherEffects } from './effects/cart-voucher.effect';
import { CartEffects } from './effects/cart.effect';
import { MultiCartEffects } from './effects/multi-cart.effect';
import { WishListEffects } from './effects/wish-list.effect';
import { MULTI_CART_FEATURE } from './multi-cart-state';
import { multiCartMetaReducers, multiCartReducerProvider, multiCartReducerToken, } from './reducers/index';
const effects = [
    CartEffects,
    CartEntryEffects,
    CartVoucherEffects,
    WishListEffects,
    MultiCartEffects,
];
export class MultiCartStoreModule {
}
MultiCartStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    StateModule,
                    StoreModule.forFeature(MULTI_CART_FEATURE, multiCartReducerToken, {
                        metaReducers: multiCartMetaReducers,
                    }),
                    EffectsModule.forFeature(effects),
                ],
                providers: [multiCartReducerProvider],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC1zdG9yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9jYXJ0L3N0b3JlL211bHRpLWNhcnQtc3RvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLHdCQUF3QixFQUN4QixxQkFBcUIsR0FDdEIsTUFBTSxrQkFBa0IsQ0FBQztBQUUxQixNQUFNLE9BQU8sR0FBVTtJQUNyQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0NBQ2pCLENBQUM7QUFhRixNQUFNLE9BQU8sb0JBQW9COzs7WUFYaEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsV0FBVyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRTt3QkFDaEUsWUFBWSxFQUFFLHFCQUFxQjtxQkFDcEMsQ0FBQztvQkFDRixhQUFhLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztpQkFDbEM7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgU3RhdGVNb2R1bGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9zdGF0ZS5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydEVudHJ5RWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9jYXJ0LWVudHJ5LmVmZmVjdCc7XG5pbXBvcnQgeyBDYXJ0Vm91Y2hlckVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvY2FydC12b3VjaGVyLmVmZmVjdCc7XG5pbXBvcnQgeyBDYXJ0RWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9jYXJ0LmVmZmVjdCc7XG5pbXBvcnQgeyBNdWx0aUNhcnRFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL211bHRpLWNhcnQuZWZmZWN0JztcbmltcG9ydCB7IFdpc2hMaXN0RWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy93aXNoLWxpc3QuZWZmZWN0JztcbmltcG9ydCB7IE1VTFRJX0NBUlRfRkVBVFVSRSB9IGZyb20gJy4vbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQge1xuICBtdWx0aUNhcnRNZXRhUmVkdWNlcnMsXG4gIG11bHRpQ2FydFJlZHVjZXJQcm92aWRlcixcbiAgbXVsdGlDYXJ0UmVkdWNlclRva2VuLFxufSBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcblxuY29uc3QgZWZmZWN0czogYW55W10gPSBbXG4gIENhcnRFZmZlY3RzLFxuICBDYXJ0RW50cnlFZmZlY3RzLFxuICBDYXJ0Vm91Y2hlckVmZmVjdHMsXG4gIFdpc2hMaXN0RWZmZWN0cyxcbiAgTXVsdGlDYXJ0RWZmZWN0cyxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgU3RhdGVNb2R1bGUsXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShNVUxUSV9DQVJUX0ZFQVRVUkUsIG11bHRpQ2FydFJlZHVjZXJUb2tlbiwge1xuICAgICAgbWV0YVJlZHVjZXJzOiBtdWx0aUNhcnRNZXRhUmVkdWNlcnMsXG4gICAgfSksXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKGVmZmVjdHMpLFxuICBdLFxuICBwcm92aWRlcnM6IFttdWx0aUNhcnRSZWR1Y2VyUHJvdmlkZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aUNhcnRTdG9yZU1vZHVsZSB7fVxuIl19
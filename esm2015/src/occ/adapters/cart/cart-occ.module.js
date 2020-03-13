import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CartAdapter } from '../../../cart/connectors/cart/cart.adapter';
import { CART_NORMALIZER } from '../../../cart/connectors/cart/converters';
import { CartEntryAdapter } from '../../../cart/connectors/entry/cart-entry.adapter';
import { SaveCartAdapter } from '../../../cart/connectors/save-cart/save-cart.adapter';
import { CartVoucherAdapter } from '../../../cart/connectors/voucher/cart-voucher.adapter';
import { provideDefaultConfig } from '../../../config/config.module';
import { OccCartNormalizer } from './converters/occ-cart-normalizer';
import { defaultOccCartConfig } from './default-occ-cart-config';
import { OccCartEntryAdapter } from './occ-cart-entry.adapter';
import { OccCartVoucherAdapter } from './occ-cart-voucher.adapter';
import { OccCartAdapter } from './occ-cart.adapter';
import { OccSaveCartAdapter } from './occ-save-cart.adapter';
let CartOccModule = class CartOccModule {
};
CartOccModule = __decorate([
    NgModule({
        imports: [CommonModule, HttpClientModule],
        providers: [
            provideDefaultConfig(defaultOccCartConfig),
            {
                provide: CartAdapter,
                useClass: OccCartAdapter,
            },
            {
                provide: CART_NORMALIZER,
                useExisting: OccCartNormalizer,
                multi: true,
            },
            {
                provide: CartEntryAdapter,
                useClass: OccCartEntryAdapter,
            },
            {
                provide: CartVoucherAdapter,
                useClass: OccCartVoucherAdapter,
            },
            {
                provide: SaveCartAdapter,
                useClass: OccSaveCartAdapter,
            },
        ],
    })
], CartOccModule);
export { CartOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9jYXJ0L2NhcnQtb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDdkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDM0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBNkI3RCxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0NBQUcsQ0FBQTtBQUFoQixhQUFhO0lBM0J6QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7UUFDekMsU0FBUyxFQUFFO1lBQ1Qsb0JBQW9CLENBQUMsb0JBQW9CLENBQUM7WUFDMUM7Z0JBQ0UsT0FBTyxFQUFFLFdBQVc7Z0JBQ3BCLFFBQVEsRUFBRSxjQUFjO2FBQ3pCO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLFdBQVcsRUFBRSxpQkFBaUI7Z0JBQzlCLEtBQUssRUFBRSxJQUFJO2FBQ1o7WUFDRDtnQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO2dCQUN6QixRQUFRLEVBQUUsbUJBQW1CO2FBQzlCO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsUUFBUSxFQUFFLHFCQUFxQjthQUNoQztZQUNEO2dCQUNFLE9BQU8sRUFBRSxlQUFlO2dCQUN4QixRQUFRLEVBQUUsa0JBQWtCO2FBQzdCO1NBQ0Y7S0FDRixDQUFDO0dBQ1csYUFBYSxDQUFHO1NBQWhCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJ0QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NhcnQvY29ubmVjdG9ycy9jYXJ0L2NhcnQuYWRhcHRlcic7XG5pbXBvcnQgeyBDQVJUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvY2FydC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IENhcnRFbnRyeUFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvZW50cnkvY2FydC1lbnRyeS5hZGFwdGVyJztcbmltcG9ydCB7IFNhdmVDYXJ0QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NhcnQvY29ubmVjdG9ycy9zYXZlLWNhcnQvc2F2ZS1jYXJ0LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ2FydFZvdWNoZXJBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jb25uZWN0b3JzL3ZvdWNoZXIvY2FydC12b3VjaGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBPY2NDYXJ0Tm9ybWFsaXplciB9IGZyb20gJy4vY29udmVydGVycy9vY2MtY2FydC1ub3JtYWxpemVyJztcbmltcG9ydCB7IGRlZmF1bHRPY2NDYXJ0Q29uZmlnIH0gZnJvbSAnLi9kZWZhdWx0LW9jYy1jYXJ0LWNvbmZpZyc7XG5pbXBvcnQgeyBPY2NDYXJ0RW50cnlBZGFwdGVyIH0gZnJvbSAnLi9vY2MtY2FydC1lbnRyeS5hZGFwdGVyJztcbmltcG9ydCB7IE9jY0NhcnRWb3VjaGVyQWRhcHRlciB9IGZyb20gJy4vb2NjLWNhcnQtdm91Y2hlci5hZGFwdGVyJztcbmltcG9ydCB7IE9jY0NhcnRBZGFwdGVyIH0gZnJvbSAnLi9vY2MtY2FydC5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1NhdmVDYXJ0QWRhcHRlciB9IGZyb20gJy4vb2NjLXNhdmUtY2FydC5hZGFwdGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRPY2NDYXJ0Q29uZmlnKSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDYXJ0QWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NDYXJ0QWRhcHRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENBUlRfTk9STUFMSVpFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBPY2NDYXJ0Tm9ybWFsaXplcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ2FydEVudHJ5QWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NDYXJ0RW50cnlBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ2FydFZvdWNoZXJBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0NhcnRWb3VjaGVyQWRhcHRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFNhdmVDYXJ0QWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NTYXZlQ2FydEFkYXB0ZXIsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydE9jY01vZHVsZSB7fVxuIl19
import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CartAdapter } from '../../../cart/connectors/cart/cart.adapter';
import { CART_NORMALIZER } from '../../../cart/connectors/cart/converters';
import { CartEntryAdapter } from '../../../cart/connectors/entry/cart-entry.adapter';
import { SaveCartAdapter } from '../../../cart/connectors/save-cart/save-cart.adapter';
import { CartVoucherAdapter } from '../../../cart/connectors/voucher/cart-voucher.adapter';
import { ConfigModule } from '../../../config/config.module';
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
        imports: [
            CommonModule,
            HttpClientModule,
            ConfigModule.withConfig(defaultOccCartConfig),
        ],
        providers: [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9jYXJ0L2NhcnQtb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDdkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDM0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQWdDN0QsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtDQUFHLENBQUE7QUFBaEIsYUFBYTtJQTlCekIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixZQUFZLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO1NBQzlDO1FBQ0QsU0FBUyxFQUFFO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLFdBQVc7Z0JBQ3BCLFFBQVEsRUFBRSxjQUFjO2FBQ3pCO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLFdBQVcsRUFBRSxpQkFBaUI7Z0JBQzlCLEtBQUssRUFBRSxJQUFJO2FBQ1o7WUFDRDtnQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO2dCQUN6QixRQUFRLEVBQUUsbUJBQW1CO2FBQzlCO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsUUFBUSxFQUFFLHFCQUFxQjthQUNoQztZQUNEO2dCQUNFLE9BQU8sRUFBRSxlQUFlO2dCQUN4QixRQUFRLEVBQUUsa0JBQWtCO2FBQzdCO1NBQ0Y7S0FDRixDQUFDO0dBQ1csYUFBYSxDQUFHO1NBQWhCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJ0QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NhcnQvY29ubmVjdG9ycy9jYXJ0L2NhcnQuYWRhcHRlcic7XG5pbXBvcnQgeyBDQVJUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvY2FydC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IENhcnRFbnRyeUFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvZW50cnkvY2FydC1lbnRyeS5hZGFwdGVyJztcbmltcG9ydCB7IFNhdmVDYXJ0QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NhcnQvY29ubmVjdG9ycy9zYXZlLWNhcnQvc2F2ZS1jYXJ0LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ2FydFZvdWNoZXJBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jb25uZWN0b3JzL3ZvdWNoZXIvY2FydC12b3VjaGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgT2NjQ2FydE5vcm1hbGl6ZXIgfSBmcm9tICcuL2NvbnZlcnRlcnMvb2NjLWNhcnQtbm9ybWFsaXplcic7XG5pbXBvcnQgeyBkZWZhdWx0T2NjQ2FydENvbmZpZyB9IGZyb20gJy4vZGVmYXVsdC1vY2MtY2FydC1jb25maWcnO1xuaW1wb3J0IHsgT2NjQ2FydEVudHJ5QWRhcHRlciB9IGZyb20gJy4vb2NjLWNhcnQtZW50cnkuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NDYXJ0Vm91Y2hlckFkYXB0ZXIgfSBmcm9tICcuL29jYy1jYXJ0LXZvdWNoZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NDYXJ0QWRhcHRlciB9IGZyb20gJy4vb2NjLWNhcnQuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NTYXZlQ2FydEFkYXB0ZXIgfSBmcm9tICcuL29jYy1zYXZlLWNhcnQuYWRhcHRlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0T2NjQ2FydENvbmZpZyksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IENhcnRBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0NhcnRBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ0FSVF9OT1JNQUxJWkVSLFxuICAgICAgdXNlRXhpc3Rpbmc6IE9jY0NhcnROb3JtYWxpemVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDYXJ0RW50cnlBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0NhcnRFbnRyeUFkYXB0ZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDYXJ0Vm91Y2hlckFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjQ2FydFZvdWNoZXJBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogU2F2ZUNhcnRBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY1NhdmVDYXJ0QWRhcHRlcixcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0T2NjTW9kdWxlIHt9XG4iXX0=
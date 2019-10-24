/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CartAdapter } from '../../../cart/connectors/cart/cart.adapter';
import { CART_NORMALIZER } from '../../../cart/connectors/cart/converters';
import { CartEntryAdapter } from '../../../cart/connectors/entry/cart-entry.adapter';
import { CartVoucherAdapter } from '../../../cart/connectors/voucher/cart-voucher.adapter';
import { ConfigModule } from '../../../config/config.module';
import { OccCartNormalizer } from './converters/occ-cart-normalizer';
import { defaultOccCartConfig } from './default-occ-cart-config';
import { OccCartEntryAdapter } from './occ-cart-entry.adapter';
import { OccCartVoucherAdapter } from './occ-cart-voucher.adapter';
import { OccCartAdapter } from './occ-cart.adapter';
export class CartOccModule {
}
CartOccModule.decorators = [
    { type: NgModule, args: [{
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
                        useClass: OccCartNormalizer,
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
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9jYXJ0L2NhcnQtb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBNEJwRCxNQUFNLE9BQU8sYUFBYTs7O1lBMUJ6QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZ0JBQWdCO29CQUNoQixZQUFZLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO2lCQUM5QztnQkFDRCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLFdBQVc7d0JBQ3BCLFFBQVEsRUFBRSxjQUFjO3FCQUN6QjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsZUFBZTt3QkFDeEIsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjt3QkFDekIsUUFBUSxFQUFFLG1CQUFtQjtxQkFDOUI7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGtCQUFrQjt3QkFDM0IsUUFBUSxFQUFFLHFCQUFxQjtxQkFDaEM7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhcnRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jb25uZWN0b3JzL2NhcnQvY2FydC5hZGFwdGVyJztcbmltcG9ydCB7IENBUlRfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL2NhcnQvY29ubmVjdG9ycy9jYXJ0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgQ2FydEVudHJ5QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NhcnQvY29ubmVjdG9ycy9lbnRyeS9jYXJ0LWVudHJ5LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ2FydFZvdWNoZXJBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jb25uZWN0b3JzL3ZvdWNoZXIvY2FydC12b3VjaGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgT2NjQ2FydE5vcm1hbGl6ZXIgfSBmcm9tICcuL2NvbnZlcnRlcnMvb2NjLWNhcnQtbm9ybWFsaXplcic7XG5pbXBvcnQgeyBkZWZhdWx0T2NjQ2FydENvbmZpZyB9IGZyb20gJy4vZGVmYXVsdC1vY2MtY2FydC1jb25maWcnO1xuaW1wb3J0IHsgT2NjQ2FydEVudHJ5QWRhcHRlciB9IGZyb20gJy4vb2NjLWNhcnQtZW50cnkuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NDYXJ0Vm91Y2hlckFkYXB0ZXIgfSBmcm9tICcuL29jYy1jYXJ0LXZvdWNoZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NDYXJ0QWRhcHRlciB9IGZyb20gJy4vb2NjLWNhcnQuYWRhcHRlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0T2NjQ2FydENvbmZpZyksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IENhcnRBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0NhcnRBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ0FSVF9OT1JNQUxJWkVSLFxuICAgICAgdXNlQ2xhc3M6IE9jY0NhcnROb3JtYWxpemVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDYXJ0RW50cnlBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0NhcnRFbnRyeUFkYXB0ZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDYXJ0Vm91Y2hlckFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjQ2FydFZvdWNoZXJBZGFwdGVyLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENhcnRPY2NNb2R1bGUge31cbiJdfQ==
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CartAdapter } from '../../../cart/connectors/cart/cart.adapter';
import { CART_NORMALIZER } from '../../../cart/connectors/cart/converters';
import { CartEntryAdapter } from '../../../cart/connectors/entry/cart-entry.adapter';
import { SaveCartAdapter } from '../../../cart/connectors/save-cart/save-cart.adapter';
import { CartVoucherAdapter } from '../../../cart/connectors/voucher/cart-voucher.adapter';
import { OccCartNormalizer } from './converters/occ-cart-normalizer';
import { defaultOccCartConfig } from './default-occ-cart-config';
import { OccCartEntryAdapter } from './occ-cart-entry.adapter';
import { OccCartVoucherAdapter } from './occ-cart-voucher.adapter';
import { OccCartAdapter } from './occ-cart.adapter';
import { OccSaveCartAdapter } from './occ-save-cart.adapter';
import { provideDefaultConfig } from '../../../config/config-providers';
export class CartOccModule {
}
CartOccModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvb2NjL2FkYXB0ZXJzL2NhcnQvY2FydC1vY2MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDckYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQTZCeEUsTUFBTSxPQUFPLGFBQWE7OztZQTNCekIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztnQkFDekMsU0FBUyxFQUFFO29CQUNULG9CQUFvQixDQUFDLG9CQUFvQixDQUFDO29CQUMxQzt3QkFDRSxPQUFPLEVBQUUsV0FBVzt3QkFDcEIsUUFBUSxFQUFFLGNBQWM7cUJBQ3pCO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixXQUFXLEVBQUUsaUJBQWlCO3dCQUM5QixLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsZ0JBQWdCO3dCQUN6QixRQUFRLEVBQUUsbUJBQW1CO3FCQUM5QjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsa0JBQWtCO3dCQUMzQixRQUFRLEVBQUUscUJBQXFCO3FCQUNoQztvQkFDRDt3QkFDRSxPQUFPLEVBQUUsZUFBZTt3QkFDeEIsUUFBUSxFQUFFLGtCQUFrQjtxQkFDN0I7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhcnRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jb25uZWN0b3JzL2NhcnQvY2FydC5hZGFwdGVyJztcbmltcG9ydCB7IENBUlRfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL2NhcnQvY29ubmVjdG9ycy9jYXJ0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgQ2FydEVudHJ5QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NhcnQvY29ubmVjdG9ycy9lbnRyeS9jYXJ0LWVudHJ5LmFkYXB0ZXInO1xuaW1wb3J0IHsgU2F2ZUNhcnRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jb25uZWN0b3JzL3NhdmUtY2FydC9zYXZlLWNhcnQuYWRhcHRlcic7XG5pbXBvcnQgeyBDYXJ0Vm91Y2hlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvdm91Y2hlci9jYXJ0LXZvdWNoZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NDYXJ0Tm9ybWFsaXplciB9IGZyb20gJy4vY29udmVydGVycy9vY2MtY2FydC1ub3JtYWxpemVyJztcbmltcG9ydCB7IGRlZmF1bHRPY2NDYXJ0Q29uZmlnIH0gZnJvbSAnLi9kZWZhdWx0LW9jYy1jYXJ0LWNvbmZpZyc7XG5pbXBvcnQgeyBPY2NDYXJ0RW50cnlBZGFwdGVyIH0gZnJvbSAnLi9vY2MtY2FydC1lbnRyeS5hZGFwdGVyJztcbmltcG9ydCB7IE9jY0NhcnRWb3VjaGVyQWRhcHRlciB9IGZyb20gJy4vb2NjLWNhcnQtdm91Y2hlci5hZGFwdGVyJztcbmltcG9ydCB7IE9jY0NhcnRBZGFwdGVyIH0gZnJvbSAnLi9vY2MtY2FydC5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1NhdmVDYXJ0QWRhcHRlciB9IGZyb20gJy4vb2NjLXNhdmUtY2FydC5hZGFwdGVyJztcbmltcG9ydCB7IHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2NvbmZpZy1wcm92aWRlcnMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdE9jY0NhcnRDb25maWcpLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENhcnRBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0NhcnRBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ0FSVF9OT1JNQUxJWkVSLFxuICAgICAgdXNlRXhpc3Rpbmc6IE9jY0NhcnROb3JtYWxpemVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDYXJ0RW50cnlBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0NhcnRFbnRyeUFkYXB0ZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDYXJ0Vm91Y2hlckFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjQ2FydFZvdWNoZXJBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogU2F2ZUNhcnRBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY1NhdmVDYXJ0QWRhcHRlcixcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0T2NjTW9kdWxlIHt9XG4iXX0=
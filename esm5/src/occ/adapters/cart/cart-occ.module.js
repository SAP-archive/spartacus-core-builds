/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CartAdapter } from '../../../cart/connectors/cart/cart.adapter';
import { OccCartAdapter } from './occ-cart.adapter';
import { CartEntryAdapter } from '../../../cart/connectors/entry/cart-entry.adapter';
import { OccCartEntryAdapter } from './occ-cart-entry.adapter';
import { CART_NORMALIZER } from '../../../cart/connectors/cart/converters';
import { OccCartNormalizer } from './converters/occ-cart-normalizer';
var CartOccModule = /** @class */ (function () {
    function CartOccModule() {
    }
    CartOccModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, HttpClientModule],
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
                    ],
                },] }
    ];
    return CartOccModule;
}());
export { CartOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9jYXJ0L2NhcnQtb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFckU7SUFBQTtJQWtCNEIsQ0FBQzs7Z0JBbEI1QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO29CQUN6QyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLFdBQVc7NEJBQ3BCLFFBQVEsRUFBRSxjQUFjO3lCQUN6Qjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsZUFBZTs0QkFDeEIsUUFBUSxFQUFFLGlCQUFpQjs0QkFDM0IsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGdCQUFnQjs0QkFDekIsUUFBUSxFQUFFLG1CQUFtQjt5QkFDOUI7cUJBQ0Y7aUJBQ0Y7O0lBQzJCLG9CQUFDO0NBQUEsQUFsQjdCLElBa0I2QjtTQUFoQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ2FydEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvY2FydC9jYXJ0LmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjQ2FydEFkYXB0ZXIgfSBmcm9tICcuL29jYy1jYXJ0LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ2FydEVudHJ5QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NhcnQvY29ubmVjdG9ycy9lbnRyeS9jYXJ0LWVudHJ5LmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjQ2FydEVudHJ5QWRhcHRlciB9IGZyb20gJy4vb2NjLWNhcnQtZW50cnkuYWRhcHRlcic7XG5pbXBvcnQgeyBDQVJUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvY2FydC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IE9jY0NhcnROb3JtYWxpemVyIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL29jYy1jYXJ0LW5vcm1hbGl6ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQ2FydEFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjQ2FydEFkYXB0ZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDQVJUX05PUk1BTElaRVIsXG4gICAgICB1c2VDbGFzczogT2NjQ2FydE5vcm1hbGl6ZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENhcnRFbnRyeUFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjQ2FydEVudHJ5QWRhcHRlcixcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0T2NjTW9kdWxlIHt9XG4iXX0=
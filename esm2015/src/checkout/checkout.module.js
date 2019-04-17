/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CheckoutService } from './facade/index';
import { CheckoutStoreModule } from './store/checkout-store.module';
import { PageMetaResolver } from '../cms/index';
import { CheckoutPageMetaResolver } from './services/checkout-page-meta.resolver';
export class CheckoutModule {
}
CheckoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [CheckoutStoreModule],
                providers: [
                    CheckoutService,
                    {
                        provide: PageMetaResolver,
                        useExisting: CheckoutPageMetaResolver,
                        multi: true,
                    },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L2NoZWNrb3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2hELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBYWxGLE1BQU0sT0FBTyxjQUFjOzs7WUFYMUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUM5QixTQUFTLEVBQUU7b0JBQ1QsZUFBZTtvQkFDZjt3QkFDRSxPQUFPLEVBQUUsZ0JBQWdCO3dCQUN6QixXQUFXLEVBQUUsd0JBQXdCO3dCQUNyQyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2hlY2tvdXRTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvaW5kZXgnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvY2hlY2tvdXQtc3RvcmUubW9kdWxlJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi9jbXMvaW5kZXgnO1xuaW1wb3J0IHsgQ2hlY2tvdXRQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9jaGVja291dC1wYWdlLW1ldGEucmVzb2x2ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ2hlY2tvdXRTdG9yZU1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIENoZWNrb3V0U2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBQYWdlTWV0YVJlc29sdmVyLFxuICAgICAgdXNlRXhpc3Rpbmc6IENoZWNrb3V0UGFnZU1ldGFSZXNvbHZlcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0TW9kdWxlIHt9XG4iXX0=
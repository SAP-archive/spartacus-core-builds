/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { PageMetaResolver } from '../cms/page/page-meta.resolver';
import { CartDataService } from './facade/cart-data.service';
import { CartService } from './facade/index';
import { CartPageMetaResolver } from './services/cart-page-meta.resolver';
import { CartStoreModule } from './store/cart-store.module';
export class CartModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CartModule,
            providers: [
                CartDataService,
                CartService,
                {
                    provide: PageMetaResolver,
                    useExisting: CartPageMetaResolver,
                    multi: true,
                },
            ],
        };
    }
}
CartModule.decorators = [
    { type: NgModule, args: [{
                imports: [CartStoreModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9jYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFLNUQsTUFBTSxPQUFPLFVBQVU7Ozs7SUFDckIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFO2dCQUNULGVBQWU7Z0JBQ2YsV0FBVztnQkFDWDtvQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixXQUFXLEVBQUUsb0JBQW9CO29CQUNqQyxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWpCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi9jbXMvcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgQ2FydERhdGFTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICcuL2ZhY2FkZS9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0UGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4vc2VydmljZXMvY2FydC1wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgQ2FydFN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9jYXJ0LXN0b3JlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDYXJ0U3RvcmVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDYXJ0TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDYXJ0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENhcnREYXRhU2VydmljZSxcbiAgICAgICAgQ2FydFNlcnZpY2UsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBQYWdlTWV0YVJlc29sdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBDYXJ0UGFnZU1ldGFSZXNvbHZlcixcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19
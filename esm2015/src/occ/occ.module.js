import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { provideConfigValidator } from '../config/config-validator/config-validator';
import { OccConfigLoaderModule } from './config-loader/occ-config-loader.module';
import { defaultOccConfig } from './config/default-occ-config';
import { occConfigValidator } from './config/occ-config-validator';
import { WithCredentialsInterceptor } from './interceptors/with-credentials.interceptor';
import { AsmOccModule } from './adapters/asm/asm-occ.module';
import { CmsOccModule } from './adapters/cms/cms-occ.module';
import { CartOccModule } from './adapters/cart/cart-occ.module';
import { CheckoutOccModule } from './adapters/checkout/checkout-occ.module';
import { ProductOccModule } from './adapters/product/product-occ.module';
import { SiteContextOccModule } from './adapters/site-context/site-context-occ.module';
import { StoreFinderOccModule } from './adapters/store-finder/store-finder-occ.module';
import { UserOccModule } from './adapters/user/user-occ.module';
import { provideDefaultConfig } from '../config/config-providers';
import { CostCenterOccModule } from './adapters/cost-center/cost-center-occ.module';
export class OccModule {
    static forRoot() {
        return {
            ngModule: OccModule,
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useExisting: WithCredentialsInterceptor,
                    multi: true,
                },
                provideDefaultConfig(defaultOccConfig),
                provideConfigValidator(occConfigValidator),
            ],
        };
    }
}
OccModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    AsmOccModule,
                    CmsOccModule,
                    CartOccModule,
                    CheckoutOccModule,
                    ProductOccModule,
                    SiteContextOccModule,
                    StoreFinderOccModule,
                    UserOccModule,
                    OccConfigLoaderModule.forRoot(),
                    CostCenterOccModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL29jYy9vY2MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQWdCcEYsTUFBTSxPQUFPLFNBQVM7SUFDcEIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFdBQVcsRUFBRSwwQkFBMEI7b0JBQ3ZDLEtBQUssRUFBRSxJQUFJO2lCQUNaO2dCQUNELG9CQUFvQixDQUFDLGdCQUFnQixDQUFDO2dCQUN0QyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQzthQUMzQztTQUNGLENBQUM7SUFDSixDQUFDOzs7WUE1QkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLGdCQUFnQjtvQkFDaEIsb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLGFBQWE7b0JBQ2IscUJBQXFCLENBQUMsT0FBTyxFQUFFO29CQUMvQixtQkFBbUI7aUJBQ3BCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcm92aWRlQ29uZmlnVmFsaWRhdG9yIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy12YWxpZGF0b3IvY29uZmlnLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBPY2NDb25maWdMb2FkZXJNb2R1bGUgfSBmcm9tICcuL2NvbmZpZy1sb2FkZXIvb2NjLWNvbmZpZy1sb2FkZXIubW9kdWxlJztcbmltcG9ydCB7IGRlZmF1bHRPY2NDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LW9jYy1jb25maWcnO1xuaW1wb3J0IHsgb2NjQ29uZmlnVmFsaWRhdG9yIH0gZnJvbSAnLi9jb25maWcvb2NjLWNvbmZpZy12YWxpZGF0b3InO1xuaW1wb3J0IHsgV2l0aENyZWRlbnRpYWxzSW50ZXJjZXB0b3IgfSBmcm9tICcuL2ludGVyY2VwdG9ycy93aXRoLWNyZWRlbnRpYWxzLmludGVyY2VwdG9yJztcbmltcG9ydCB7IEFzbU9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvYXNtL2FzbS1vY2MubW9kdWxlJztcbmltcG9ydCB7IENtc09jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvY21zL2Ntcy1vY2MubW9kdWxlJztcbmltcG9ydCB7IENhcnRPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL2NhcnQvY2FydC1vY2MubW9kdWxlJztcbmltcG9ydCB7IENoZWNrb3V0T2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9jaGVja291dC9jaGVja291dC1vY2MubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3RPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL3Byb2R1Y3QvcHJvZHVjdC1vY2MubW9kdWxlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0T2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9zaXRlLWNvbnRleHQvc2l0ZS1jb250ZXh0LW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL3N0b3JlLWZpbmRlci9zdG9yZS1maW5kZXItb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBVc2VyT2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy91c2VyL3VzZXItb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWctcHJvdmlkZXJzJztcbmltcG9ydCB7IENvc3RDZW50ZXJPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL2Nvc3QtY2VudGVyL2Nvc3QtY2VudGVyLW9jYy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQXNtT2NjTW9kdWxlLFxuICAgIENtc09jY01vZHVsZSxcbiAgICBDYXJ0T2NjTW9kdWxlLFxuICAgIENoZWNrb3V0T2NjTW9kdWxlLFxuICAgIFByb2R1Y3RPY2NNb2R1bGUsXG4gICAgU2l0ZUNvbnRleHRPY2NNb2R1bGUsXG4gICAgU3RvcmVGaW5kZXJPY2NNb2R1bGUsXG4gICAgVXNlck9jY01vZHVsZSxcbiAgICBPY2NDb25maWdMb2FkZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENvc3RDZW50ZXJPY2NNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE9jY01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8T2NjTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBPY2NNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBXaXRoQ3JlZGVudGlhbHNJbnRlcmNlcHRvcixcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdE9jY0NvbmZpZyksXG4gICAgICAgIHByb3ZpZGVDb25maWdWYWxpZGF0b3Iob2NjQ29uZmlnVmFsaWRhdG9yKSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19
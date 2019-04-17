/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductLoaderService } from './product.service';
import { ProductSearchLoaderService } from './product-search.service';
import { OccModule } from '../../occ/occ.module';
import { defaultOccProductConfig } from '../config/product-config';
import { ConfigModule } from '../../config/index';
import { ProductReviewsLoaderService } from './product-reviews.service';
var ProductOccModule = /** @class */ (function () {
    function ProductOccModule() {
    }
    ProductOccModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        OccModule,
                        ConfigModule.withConfig(defaultOccProductConfig),
                    ],
                    providers: [
                        ProductLoaderService,
                        ProductSearchLoaderService,
                        ProductReviewsLoaderService,
                    ],
                },] }
    ];
    return ProductOccModule;
}());
export { ProductOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvb2NjL3Byb2R1Y3Qtb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV4RTtJQUFBO0lBYStCLENBQUM7O2dCQWIvQixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixTQUFTO3dCQUNULFlBQVksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7cUJBQ2pEO29CQUNELFNBQVMsRUFBRTt3QkFDVCxvQkFBb0I7d0JBQ3BCLDBCQUEwQjt3QkFDMUIsMkJBQTJCO3FCQUM1QjtpQkFDRjs7SUFDOEIsdUJBQUM7Q0FBQSxBQWJoQyxJQWFnQztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IFByb2R1Y3RMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9wcm9kdWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaExvYWRlclNlcnZpY2UgfSBmcm9tICcuL3Byb2R1Y3Qtc2VhcmNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjTW9kdWxlIH0gZnJvbSAnLi4vLi4vb2NjL29jYy5tb2R1bGUnO1xuaW1wb3J0IHsgZGVmYXVsdE9jY1Byb2R1Y3RDb25maWcgfSBmcm9tICcuLi9jb25maWcvcHJvZHVjdC1jb25maWcnO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29uZmlnL2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RSZXZpZXdzTG9hZGVyU2VydmljZSB9IGZyb20gJy4vcHJvZHVjdC1yZXZpZXdzLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgT2NjTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRPY2NQcm9kdWN0Q29uZmlnKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgUHJvZHVjdExvYWRlclNlcnZpY2UsXG4gICAgUHJvZHVjdFNlYXJjaExvYWRlclNlcnZpY2UsXG4gICAgUHJvZHVjdFJldmlld3NMb2FkZXJTZXJ2aWNlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0T2NjTW9kdWxlIHt9XG4iXX0=
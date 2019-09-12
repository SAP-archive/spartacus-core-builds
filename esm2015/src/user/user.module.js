/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { UserService } from './facade/user.service';
import { UserStoreModule } from './store/user-store.module';
export class UserModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: UserModule,
            providers: [UserService],
        };
    }
}
UserModule.decorators = [
    { type: NgModule, args: [{
                imports: [UserStoreModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci91c2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUs1RCxNQUFNLE9BQU8sVUFBVTs7OztJQUNyQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7U0FDekIsQ0FBQztJQUNKLENBQUM7OztZQVRGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7YUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL2ZhY2FkZS91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS91c2VyLXN0b3JlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtVc2VyU3RvcmVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxVc2VyTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBVc2VyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
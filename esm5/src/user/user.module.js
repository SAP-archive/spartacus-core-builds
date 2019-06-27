/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { UserService } from './facade/user.service';
import { UserStoreModule } from './store/user-store.module';
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    /**
     * @return {?}
     */
    UserModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: UserModule,
            providers: [UserService],
        };
    };
    UserModule.decorators = [
        { type: NgModule, args: [{
                    imports: [UserStoreModule],
                },] }
    ];
    return UserModule;
}());
export { UserModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci91c2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU1RDtJQUFBO0lBVUEsQ0FBQzs7OztJQU5RLGtCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7U0FDekIsQ0FBQztJQUNKLENBQUM7O2dCQVRGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQzNCOztJQVFELGlCQUFDO0NBQUEsQUFWRCxJQVVDO1NBUFksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vZmFjYWRlL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyU3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL3VzZXItc3RvcmUubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1VzZXJTdG9yZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFVzZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFVzZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXG4gICAgfTtcbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ProcessModule } from '../process/process.module';
import { UserService } from './facade/index';
import { UserOccModule } from './occ/user-occ.module';
import { UserStoreModule } from './store/user-store.module';
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule.decorators = [
        { type: NgModule, args: [{
                    imports: [UserOccModule, UserStoreModule, ProcessModule],
                    providers: [UserService],
                },] }
    ];
    return UserModule;
}());
export { UserModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci91c2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFNUQ7SUFBQTtJQUl5QixDQUFDOztnQkFKekIsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsYUFBYSxDQUFDO29CQUN4RCxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7aUJBQ3pCOztJQUN3QixpQkFBQztDQUFBLEFBSjFCLElBSTBCO1NBQWIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9jZXNzTW9kdWxlIH0gZnJvbSAnLi4vcHJvY2Vzcy9wcm9jZXNzLm1vZHVsZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vZmFjYWRlL2luZGV4JztcbmltcG9ydCB7IFVzZXJPY2NNb2R1bGUgfSBmcm9tICcuL29jYy91c2VyLW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgVXNlclN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS91c2VyLXN0b3JlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtVc2VyT2NjTW9kdWxlLCBVc2VyU3RvcmVNb2R1bGUsIFByb2Nlc3NNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJNb2R1bGUge31cbiJdfQ==
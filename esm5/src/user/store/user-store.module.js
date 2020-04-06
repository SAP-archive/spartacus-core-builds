import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { metaReducers, reducerToken, reducerProvider } from './reducers/index';
import { effects } from './effects/index';
import { USER_FEATURE } from './user-state';
import { StateModule } from '../../state/state.module';
var UserStoreModule = /** @class */ (function () {
    function UserStoreModule() {
    }
    UserStoreModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                StateModule,
                StoreModule.forFeature(USER_FEATURE, reducerToken, { metaReducers: metaReducers }),
                EffectsModule.forFeature(effects),
                RouterModule,
            ],
            providers: [reducerProvider],
        })
    ], UserStoreModule);
    return UserStoreModule;
}());
export { UserStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zdG9yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS91c2VyLXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFZdkQ7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGVBQWU7UUFWM0IsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxXQUFXLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsRUFBRSxZQUFZLGNBQUEsRUFBRSxDQUFDO2dCQUNwRSxhQUFhLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztnQkFDakMsWUFBWTthQUNiO1lBQ0QsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO1NBQzdCLENBQUM7T0FDVyxlQUFlLENBQUc7SUFBRCxzQkFBQztDQUFBLEFBQS9CLElBQStCO1NBQWxCLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgbWV0YVJlZHVjZXJzLCByZWR1Y2VyVG9rZW4sIHJlZHVjZXJQcm92aWRlciB9IGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnO1xuaW1wb3J0IHsgZWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9pbmRleCc7XG5pbXBvcnQgeyBVU0VSX0ZFQVRVUkUgfSBmcm9tICcuL3VzZXItc3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVNb2R1bGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9zdGF0ZS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFN0YXRlTW9kdWxlLFxuICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoVVNFUl9GRUFUVVJFLCByZWR1Y2VyVG9rZW4sIHsgbWV0YVJlZHVjZXJzIH0pLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShlZmZlY3RzKSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW3JlZHVjZXJQcm92aWRlcl0sXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJTdG9yZU1vZHVsZSB7fVxuIl19
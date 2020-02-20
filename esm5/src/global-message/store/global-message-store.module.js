import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducerToken, reducerProvider } from './reducers/index';
import { GLOBAL_MESSAGE_FEATURE } from './global-message-state';
import { StateModule } from '../../state/state.module';
var GlobalMessageStoreModule = /** @class */ (function () {
    function GlobalMessageStoreModule() {
    }
    GlobalMessageStoreModule = __decorate([
        NgModule({
            imports: [
                StateModule,
                StoreModule.forFeature(GLOBAL_MESSAGE_FEATURE, reducerToken),
            ],
            providers: [reducerProvider],
        })
    ], GlobalMessageStoreModule);
    return GlobalMessageStoreModule;
}());
export { GlobalMessageStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2Utc3RvcmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL3N0b3JlL2dsb2JhbC1tZXNzYWdlLXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBU3ZEO0lBQUE7SUFBdUMsQ0FBQztJQUEzQix3QkFBd0I7UUFQcEMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFdBQVc7Z0JBQ1gsV0FBVyxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsRUFBRSxZQUFZLENBQUM7YUFDN0Q7WUFDRCxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7U0FDN0IsQ0FBQztPQUNXLHdCQUF3QixDQUFHO0lBQUQsK0JBQUM7Q0FBQSxBQUF4QyxJQUF3QztTQUEzQix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IHJlZHVjZXJUb2tlbiwgcmVkdWNlclByb3ZpZGVyIH0gZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCc7XG5pbXBvcnQgeyBHTE9CQUxfTUVTU0FHRV9GRUFUVVJFIH0gZnJvbSAnLi9nbG9iYWwtbWVzc2FnZS1zdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZU1vZHVsZSB9IGZyb20gJy4uLy4uL3N0YXRlL3N0YXRlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTdGF0ZU1vZHVsZSxcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKEdMT0JBTF9NRVNTQUdFX0ZFQVRVUkUsIHJlZHVjZXJUb2tlbiksXG4gIF0sXG4gIHByb3ZpZGVyczogW3JlZHVjZXJQcm92aWRlcl0sXG59KVxuZXhwb3J0IGNsYXNzIEdsb2JhbE1lc3NhZ2VTdG9yZU1vZHVsZSB7fVxuIl19
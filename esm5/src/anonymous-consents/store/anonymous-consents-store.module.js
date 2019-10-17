/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ConfigModule } from '../../config/index';
import { StorageSyncType } from '../../state/index';
import { StateModule } from '../../state/state.module';
import { ANONYMOUS_CONSENTS_FEATURE } from './anonymous-consents-state';
import { effects } from './effects/index';
import { reducerProvider, reducerToken } from './reducers/index';
/**
 * @return {?}
 */
export function anonymousConsentsStoreConfigFactory() {
    /** @type {?} */
    var config = {
        state: {
            storageSync: {
                keys: {
                    'anonymous-consents': StorageSyncType.LOCAL_STORAGE,
                },
            },
        },
    };
    return config;
}
var AnonymousConsentsStoreModule = /** @class */ (function () {
    function AnonymousConsentsStoreModule() {
    }
    AnonymousConsentsStoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        StateModule,
                        StoreModule.forFeature(ANONYMOUS_CONSENTS_FEATURE, reducerToken),
                        EffectsModule.forFeature(effects),
                        ConfigModule.withConfigFactory(anonymousConsentsStoreConfigFactory),
                    ],
                    providers: [reducerProvider],
                },] }
    ];
    return AnonymousConsentsStoreModule;
}());
export { AnonymousConsentsStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLXN0b3JlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvc3RvcmUvYW5vbnltb3VzLWNvbnNlbnRzLXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRWpFLE1BQU0sVUFBVSxtQ0FBbUM7O1FBQzNDLE1BQU0sR0FBZ0I7UUFDMUIsS0FBSyxFQUFFO1lBQ0wsV0FBVyxFQUFFO2dCQUNYLElBQUksRUFBRTtvQkFDSixvQkFBb0IsRUFBRSxlQUFlLENBQUMsYUFBYTtpQkFDcEQ7YUFDRjtTQUNGO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQ7SUFBQTtJQVcyQyxDQUFDOztnQkFYM0MsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsV0FBVzt3QkFDWCxXQUFXLENBQUMsVUFBVSxDQUFDLDBCQUEwQixFQUFFLFlBQVksQ0FBQzt3QkFDaEUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7d0JBQ2pDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxtQ0FBbUMsQ0FBQztxQkFDcEU7b0JBQ0QsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO2lCQUM3Qjs7SUFDMEMsbUNBQUM7Q0FBQSxBQVg1QyxJQVc0QztTQUEvQiw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZUNvbmZpZywgU3RvcmFnZVN5bmNUeXBlIH0gZnJvbSAnLi4vLi4vc3RhdGUvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVNb2R1bGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9zdGF0ZS5tb2R1bGUnO1xuaW1wb3J0IHsgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkUgfSBmcm9tICcuL2Fub255bW91cy1jb25zZW50cy1zdGF0ZSc7XG5pbXBvcnQgeyBlZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2luZGV4JztcbmltcG9ydCB7IHJlZHVjZXJQcm92aWRlciwgcmVkdWNlclRva2VuIH0gZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNDb25zZW50c1N0b3JlQ29uZmlnRmFjdG9yeSgpOiBTdGF0ZUNvbmZpZyB7XG4gIGNvbnN0IGNvbmZpZzogU3RhdGVDb25maWcgPSB7XG4gICAgc3RhdGU6IHtcbiAgICAgIHN0b3JhZ2VTeW5jOiB7XG4gICAgICAgIGtleXM6IHtcbiAgICAgICAgICAnYW5vbnltb3VzLWNvbnNlbnRzJzogU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0UsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG4gIHJldHVybiBjb25maWc7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBTdGF0ZU1vZHVsZSxcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFLCByZWR1Y2VyVG9rZW4pLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShlZmZlY3RzKSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZ0ZhY3RvcnkoYW5vbnltb3VzQ29uc2VudHNTdG9yZUNvbmZpZ0ZhY3RvcnkpLFxuICBdLFxuICBwcm92aWRlcnM6IFtyZWR1Y2VyUHJvdmlkZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50c1N0b3JlTW9kdWxlIHt9XG4iXX0=
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StateModule } from '../../state/state.module';
import { ANONYMOUS_CONSENTS_STORE_FEATURE } from './anonymous-consents-state';
import { effects } from './effects/index';
import { metaReducers, reducerProvider, reducerToken } from './reducers/index';
import { AnonymousConsentsStatePersistenceService } from '../services/anonymous-consents-state-persistence.service';
export function anonymousConsentsStatePersistenceFactory(anonymousConsentsStatePersistenceService) {
    const result = () => anonymousConsentsStatePersistenceService.initSync();
    return result;
}
export class AnonymousConsentsStoreModule {
}
AnonymousConsentsStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    StateModule,
                    StoreModule.forFeature(ANONYMOUS_CONSENTS_STORE_FEATURE, reducerToken, {
                        metaReducers,
                    }),
                    EffectsModule.forFeature(effects),
                ],
                providers: [
                    reducerProvider,
                    {
                        provide: APP_INITIALIZER,
                        useFactory: anonymousConsentsStatePersistenceFactory,
                        deps: [AnonymousConsentsStatePersistenceService],
                        multi: true,
                    },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLXN0b3JlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2Fub255bW91cy1jb25zZW50cy9zdG9yZS9hbm9ueW1vdXMtY29uc2VudHMtc3RvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUVwSCxNQUFNLFVBQVUsd0NBQXdDLENBQ3RELHdDQUFrRjtJQUVsRixNQUFNLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6RSxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBcUJELE1BQU0sT0FBTyw0QkFBNEI7OztZQW5CeEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsV0FBVyxDQUFDLFVBQVUsQ0FBQyxnQ0FBZ0MsRUFBRSxZQUFZLEVBQUU7d0JBQ3JFLFlBQVk7cUJBQ2IsQ0FBQztvQkFDRixhQUFhLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztpQkFDbEM7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULGVBQWU7b0JBQ2Y7d0JBQ0UsT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFVBQVUsRUFBRSx3Q0FBd0M7d0JBQ3BELElBQUksRUFBRSxDQUFDLHdDQUF3QyxDQUFDO3dCQUNoRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgU3RhdGVNb2R1bGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9zdGF0ZS5tb2R1bGUnO1xuaW1wb3J0IHsgQU5PTllNT1VTX0NPTlNFTlRTX1NUT1JFX0ZFQVRVUkUgfSBmcm9tICcuL2Fub255bW91cy1jb25zZW50cy1zdGF0ZSc7XG5pbXBvcnQgeyBlZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2luZGV4JztcbmltcG9ydCB7IG1ldGFSZWR1Y2VycywgcmVkdWNlclByb3ZpZGVyLCByZWR1Y2VyVG9rZW4gfSBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzU3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hbm9ueW1vdXMtY29uc2VudHMtc3RhdGUtcGVyc2lzdGVuY2Uuc2VydmljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNDb25zZW50c1N0YXRlUGVyc2lzdGVuY2VGYWN0b3J5KFxuICBhbm9ueW1vdXNDb25zZW50c1N0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlOiBBbm9ueW1vdXNDb25zZW50c1N0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlXG4pIHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4gYW5vbnltb3VzQ29uc2VudHNTdGF0ZVBlcnNpc3RlbmNlU2VydmljZS5pbml0U3luYygpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFN0YXRlTW9kdWxlLFxuICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoQU5PTllNT1VTX0NPTlNFTlRTX1NUT1JFX0ZFQVRVUkUsIHJlZHVjZXJUb2tlbiwge1xuICAgICAgbWV0YVJlZHVjZXJzLFxuICAgIH0pLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShlZmZlY3RzKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcmVkdWNlclByb3ZpZGVyLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IGFub255bW91c0NvbnNlbnRzU3RhdGVQZXJzaXN0ZW5jZUZhY3RvcnksXG4gICAgICBkZXBzOiBbQW5vbnltb3VzQ29uc2VudHNTdGF0ZVBlcnNpc3RlbmNlU2VydmljZV0sXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50c1N0b3JlTW9kdWxlIHt9XG4iXX0=
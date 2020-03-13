import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideDefaultConfigFactory } from '../../config/config.module';
import { StateTransferType, } from '../../state/config/state-config';
import { effects } from './effects/index';
import { reducerProvider, reducerToken } from './reducers/index';
import { SITE_CONTEXT_FEATURE } from './state';
export function siteContextStoreConfigFactory() {
    // if we want to reuse SITE_CONTEXT_FEATURE const in config, we have to use factory instead of plain object
    const config = {
        state: {
            ssrTransfer: {
                keys: { [SITE_CONTEXT_FEATURE]: StateTransferType.TRANSFER_STATE },
            },
        },
    };
    return config;
}
let SiteContextStoreModule = class SiteContextStoreModule {
};
SiteContextStoreModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            HttpClientModule,
            StoreModule.forFeature(SITE_CONTEXT_FEATURE, reducerToken),
            EffectsModule.forFeature(effects),
        ],
        providers: [
            provideDefaultConfigFactory(siteContextStoreConfigFactory),
            reducerProvider,
        ],
    })
], SiteContextStoreModule);
export { SiteContextStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXN0b3JlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc3RvcmUvc2l0ZS1jb250ZXh0LXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3pFLE9BQU8sRUFFTCxpQkFBaUIsR0FDbEIsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFL0MsTUFBTSxVQUFVLDZCQUE2QjtJQUMzQywyR0FBMkc7SUFDM0csTUFBTSxNQUFNLEdBQWdCO1FBQzFCLEtBQUssRUFBRTtZQUNMLFdBQVcsRUFBRTtnQkFDWCxJQUFJLEVBQUUsRUFBRSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsaUJBQWlCLENBQUMsY0FBYyxFQUFFO2FBQ25FO1NBQ0Y7S0FDRixDQUFDO0lBQ0YsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQWNELElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0NBQUcsQ0FBQTtBQUF6QixzQkFBc0I7SUFabEMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixXQUFXLENBQUMsVUFBVSxDQUFDLG9CQUFvQixFQUFFLFlBQVksQ0FBQztZQUMxRCxhQUFhLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztTQUNsQztRQUNELFNBQVMsRUFBRTtZQUNULDJCQUEyQixDQUFDLDZCQUE2QixDQUFDO1lBQzFELGVBQWU7U0FDaEI7S0FDRixDQUFDO0dBQ1csc0JBQXNCLENBQUc7U0FBekIsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBwcm92aWRlRGVmYXVsdENvbmZpZ0ZhY3RvcnkgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQge1xuICBTdGF0ZUNvbmZpZyxcbiAgU3RhdGVUcmFuc2ZlclR5cGUsXG59IGZyb20gJy4uLy4uL3N0YXRlL2NvbmZpZy9zdGF0ZS1jb25maWcnO1xuaW1wb3J0IHsgZWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9pbmRleCc7XG5pbXBvcnQgeyByZWR1Y2VyUHJvdmlkZXIsIHJlZHVjZXJUb2tlbiB9IGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnO1xuaW1wb3J0IHsgU0lURV9DT05URVhUX0ZFQVRVUkUgfSBmcm9tICcuL3N0YXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNpdGVDb250ZXh0U3RvcmVDb25maWdGYWN0b3J5KCk6IFN0YXRlQ29uZmlnIHtcbiAgLy8gaWYgd2Ugd2FudCB0byByZXVzZSBTSVRFX0NPTlRFWFRfRkVBVFVSRSBjb25zdCBpbiBjb25maWcsIHdlIGhhdmUgdG8gdXNlIGZhY3RvcnkgaW5zdGVhZCBvZiBwbGFpbiBvYmplY3RcbiAgY29uc3QgY29uZmlnOiBTdGF0ZUNvbmZpZyA9IHtcbiAgICBzdGF0ZToge1xuICAgICAgc3NyVHJhbnNmZXI6IHtcbiAgICAgICAga2V5czogeyBbU0lURV9DT05URVhUX0ZFQVRVUkVdOiBTdGF0ZVRyYW5zZmVyVHlwZS5UUkFOU0ZFUl9TVEFURSB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuICByZXR1cm4gY29uZmlnO1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShTSVRFX0NPTlRFWFRfRkVBVFVSRSwgcmVkdWNlclRva2VuKSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoZWZmZWN0cyksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnRmFjdG9yeShzaXRlQ29udGV4dFN0b3JlQ29uZmlnRmFjdG9yeSksXG4gICAgcmVkdWNlclByb3ZpZGVyLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dFN0b3JlTW9kdWxlIHt9XG4iXX0=
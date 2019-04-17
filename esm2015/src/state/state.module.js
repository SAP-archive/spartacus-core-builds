/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional } from '@angular/core';
import { META_REDUCERS, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ConfigModule } from '../config/config.module';
import { stateMetaReducers } from './reducers/index';
import { defaultStateConfig } from './config/default-state-config';
import { META_REDUCER, metaReducersFactory } from './meta-reducer';
const ɵ0 = metaReducersFactory;
export class StateModule {
}
StateModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forRoot({}),
                    EffectsModule.forRoot([]),
                    ConfigModule.withConfig(defaultStateConfig),
                ],
                providers: [
                    ...stateMetaReducers,
                    {
                        provide: META_REDUCERS,
                        useFactory: ɵ0,
                        deps: [[new Optional(), META_REDUCER]],
                    },
                ],
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3N0YXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO1dBWWpELG1CQUFtQjtBQUtyQyxNQUFNLE9BQU8sV0FBVzs7O1lBZnZCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7b0JBQ3ZCLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO29CQUN6QixZQUFZLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDO2lCQUM1QztnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsR0FBRyxpQkFBaUI7b0JBQ3BCO3dCQUNFLE9BQU8sRUFBRSxhQUFhO3dCQUN0QixVQUFVLElBQXFCO3dCQUMvQixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7cUJBQ3ZDO2lCQUNGO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1FVEFfUkVEVUNFUlMsIFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgc3RhdGVNZXRhUmVkdWNlcnMgfSBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcbmltcG9ydCB7IGRlZmF1bHRTdGF0ZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtc3RhdGUtY29uZmlnJztcbmltcG9ydCB7IE1FVEFfUkVEVUNFUiwgbWV0YVJlZHVjZXJzRmFjdG9yeSB9IGZyb20gJy4vbWV0YS1yZWR1Y2VyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFN0b3JlTW9kdWxlLmZvclJvb3Qoe30pLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yUm9vdChbXSksXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdFN0YXRlQ29uZmlnKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLi4uc3RhdGVNZXRhUmVkdWNlcnMsXG4gICAge1xuICAgICAgcHJvdmlkZTogTUVUQV9SRURVQ0VSUyxcbiAgICAgIHVzZUZhY3Rvcnk6IG1ldGFSZWR1Y2Vyc0ZhY3RvcnksXG4gICAgICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBNRVRBX1JFRFVDRVJdXSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTdGF0ZU1vZHVsZSB7fVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, Optional } from '@angular/core';
import { META_REDUCERS, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ConfigModule } from '../config/config.module';
import { stateMetaReducers } from './reducers/index';
import { defaultStateConfig } from './config/default-state-config';
import { META_REDUCER, metaReducersFactory } from './meta-reducer';
var ɵ0 = metaReducersFactory;
var StateModule = /** @class */ (function () {
    function StateModule() {
    }
    StateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forRoot({}),
                        EffectsModule.forRoot([]),
                        ConfigModule.withConfig(defaultStateConfig),
                    ],
                    providers: tslib_1.__spread(stateMetaReducers, [
                        {
                            provide: META_REDUCERS,
                            useFactory: ɵ0,
                            deps: [[new Optional(), META_REDUCER]],
                        },
                    ]),
                },] }
    ];
    return StateModule;
}());
export { StateModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3N0YXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztTQVlqRCxtQkFBbUI7QUFWckM7SUFBQTtJQWUwQixDQUFDOztnQkFmMUIsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzt3QkFDdkIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7d0JBQ3pCLFlBQVksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUM7cUJBQzVDO29CQUNELFNBQVMsbUJBQ0osaUJBQWlCO3dCQUNwQjs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsVUFBVSxJQUFxQjs0QkFDL0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO3lCQUN2QztzQkFDRjtpQkFDRjs7SUFDeUIsa0JBQUM7Q0FBQSxBQWYzQixJQWUyQjtTQUFkLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1FVEFfUkVEVUNFUlMsIFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgc3RhdGVNZXRhUmVkdWNlcnMgfSBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcbmltcG9ydCB7IGRlZmF1bHRTdGF0ZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtc3RhdGUtY29uZmlnJztcbmltcG9ydCB7IE1FVEFfUkVEVUNFUiwgbWV0YVJlZHVjZXJzRmFjdG9yeSB9IGZyb20gJy4vbWV0YS1yZWR1Y2VyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFN0b3JlTW9kdWxlLmZvclJvb3Qoe30pLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yUm9vdChbXSksXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdFN0YXRlQ29uZmlnKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLi4uc3RhdGVNZXRhUmVkdWNlcnMsXG4gICAge1xuICAgICAgcHJvdmlkZTogTUVUQV9SRURVQ0VSUyxcbiAgICAgIHVzZUZhY3Rvcnk6IG1ldGFSZWR1Y2Vyc0ZhY3RvcnksXG4gICAgICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBNRVRBX1JFRFVDRVJdXSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTdGF0ZU1vZHVsZSB7fVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { Config, ConfigModule } from '../config/config.module';
import { PersonalizationConfig } from './config/personalization-config';
import { defaultPersonalizationConfig } from './config/default-personalization-config';
import { interceptors } from './http-interceptors/index';
export class PersonalizationModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: PersonalizationModule,
            providers: [...interceptors],
        };
    }
}
PersonalizationModule.decorators = [
    { type: NgModule, args: [{
                imports: [ConfigModule.withConfig(defaultPersonalizationConfig)],
                providers: [{ provide: PersonalizationConfig, useExisting: Config }],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWxpemF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wZXJzb25hbGl6YXRpb24vcGVyc29uYWxpemF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUV2RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFNekQsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUNoQyxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFNBQVMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDO1NBQzdCLENBQUM7SUFDSixDQUFDOzs7WUFWRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO2dCQUNoRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDckUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnLCBDb25maWdNb2R1bGUgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBQZXJzb25hbGl6YXRpb25Db25maWcgfSBmcm9tICcuL2NvbmZpZy9wZXJzb25hbGl6YXRpb24tY29uZmlnJztcbmltcG9ydCB7IGRlZmF1bHRQZXJzb25hbGl6YXRpb25Db25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LXBlcnNvbmFsaXphdGlvbi1jb25maWcnO1xuXG5pbXBvcnQgeyBpbnRlcmNlcHRvcnMgfSBmcm9tICcuL2h0dHAtaW50ZXJjZXB0b3JzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRQZXJzb25hbGl6YXRpb25Db25maWcpXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBQZXJzb25hbGl6YXRpb25Db25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFBlcnNvbmFsaXphdGlvbk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8UGVyc29uYWxpemF0aW9uTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBQZXJzb25hbGl6YXRpb25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFsuLi5pbnRlcmNlcHRvcnNdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
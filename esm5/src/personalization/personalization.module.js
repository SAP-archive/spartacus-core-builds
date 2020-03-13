import { __decorate, __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { Config, provideDefaultConfig } from '../config/config.module';
import { PersonalizationConfig } from './config/personalization-config';
import { defaultPersonalizationConfig } from './config/default-personalization-config';
import { interceptors } from './http-interceptors/index';
var PersonalizationModule = /** @class */ (function () {
    function PersonalizationModule() {
    }
    PersonalizationModule_1 = PersonalizationModule;
    PersonalizationModule.forRoot = function () {
        return {
            ngModule: PersonalizationModule_1,
            providers: __spread([
                provideDefaultConfig(defaultPersonalizationConfig)
            ], interceptors),
        };
    };
    var PersonalizationModule_1;
    PersonalizationModule = PersonalizationModule_1 = __decorate([
        NgModule({
            providers: [{ provide: PersonalizationConfig, useExisting: Config }],
        })
    ], PersonalizationModule);
    return PersonalizationModule;
}());
export { PersonalizationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWxpemF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wZXJzb25hbGl6YXRpb24vcGVyc29uYWxpemF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRXZGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUt6RDtJQUFBO0lBVUEsQ0FBQzs4QkFWWSxxQkFBcUI7SUFDekIsNkJBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsdUJBQXFCO1lBQy9CLFNBQVM7Z0JBQ1Asb0JBQW9CLENBQUMsNEJBQTRCLENBQUM7ZUFDL0MsWUFBWSxDQUNoQjtTQUNGLENBQUM7SUFDSixDQUFDOztJQVRVLHFCQUFxQjtRQUhqQyxRQUFRLENBQUM7WUFDUixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7U0FDckUsQ0FBQztPQUNXLHFCQUFxQixDQVVqQztJQUFELDRCQUFDO0NBQUEsQUFWRCxJQVVDO1NBVlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZywgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBQZXJzb25hbGl6YXRpb25Db25maWcgfSBmcm9tICcuL2NvbmZpZy9wZXJzb25hbGl6YXRpb24tY29uZmlnJztcbmltcG9ydCB7IGRlZmF1bHRQZXJzb25hbGl6YXRpb25Db25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LXBlcnNvbmFsaXphdGlvbi1jb25maWcnO1xuXG5pbXBvcnQgeyBpbnRlcmNlcHRvcnMgfSBmcm9tICcuL2h0dHAtaW50ZXJjZXB0b3JzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBQZXJzb25hbGl6YXRpb25Db25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFBlcnNvbmFsaXphdGlvbk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8UGVyc29uYWxpemF0aW9uTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBQZXJzb25hbGl6YXRpb25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdFBlcnNvbmFsaXphdGlvbkNvbmZpZyksXG4gICAgICAgIC4uLmludGVyY2VwdG9ycyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19
import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { FeatureConfigService } from '../../../features-config/services/feature-config.service';
import { CmsComponent } from '../../../model/cms.model';
import { CmsComponentConnector } from '../../connectors/component/cms-component.connector';
import { CmsActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class ComponentsEffects {
    private actions$;
    private cmsComponentLoader;
    private featureConfigService;
    constructor(actions$: Actions, cmsComponentLoader: CmsComponentConnector, featureConfigService: FeatureConfigService);
    private contextChange$;
    loadComponent$: ({ scheduler, debounce }?: any) => Observable<CmsActions.LoadCmsComponentFail | CmsActions.LoadCmsComponentSuccess<CmsComponent>>;
    private loadComponentsEffect;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ComponentsEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ComponentsEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7O0FBUUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy1jb25maWcvc2VydmljZXMvZmVhdHVyZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jb21wb25lbnQvY21zLWNvbXBvbmVudC5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ21zQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29tcG9uZW50c0VmZmVjdHMge1xuICAgIHByaXZhdGUgYWN0aW9ucyQ7XG4gICAgcHJpdmF0ZSBjbXNDb21wb25lbnRMb2FkZXI7XG4gICAgcHJpdmF0ZSBmZWF0dXJlQ29uZmlnU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgY21zQ29tcG9uZW50TG9hZGVyOiBDbXNDb21wb25lbnRDb25uZWN0b3IsIGZlYXR1cmVDb25maWdTZXJ2aWNlOiBGZWF0dXJlQ29uZmlnU2VydmljZSk7XG4gICAgcHJpdmF0ZSBjb250ZXh0Q2hhbmdlJDtcbiAgICBsb2FkQ29tcG9uZW50JDogKHsgc2NoZWR1bGVyLCBkZWJvdW5jZSB9PzogYW55KSA9PiBPYnNlcnZhYmxlPENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudEZhaWwgfCBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRTdWNjZXNzPENtc0NvbXBvbmVudD4+O1xuICAgIHByaXZhdGUgbG9hZENvbXBvbmVudHNFZmZlY3Q7XG59XG4iXX0=
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
    loadComponent$: (({ scheduler, debounce }?: any) => Observable<CmsActions.LoadCmsComponentFail | CmsActions.LoadCmsComponentSuccess<CmsComponent>>) & import("@ngrx/effects").CreateEffectMetadata;
    private loadComponentsEffect;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ComponentsEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ComponentsEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7O0FBUUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGZWF0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzLWNvbmZpZy9zZXJ2aWNlcy9mZWF0dXJlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2NvbXBvbmVudC9jbXMtY29tcG9uZW50LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBDbXNBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDb21wb25lbnRzRWZmZWN0cyB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBwcml2YXRlIGNtc0NvbXBvbmVudExvYWRlcjtcbiAgICBwcml2YXRlIGZlYXR1cmVDb25maWdTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCBjbXNDb21wb25lbnRMb2FkZXI6IENtc0NvbXBvbmVudENvbm5lY3RvciwgZmVhdHVyZUNvbmZpZ1NlcnZpY2U6IEZlYXR1cmVDb25maWdTZXJ2aWNlKTtcbiAgICBwcml2YXRlIGNvbnRleHRDaGFuZ2UkO1xuICAgIGxvYWRDb21wb25lbnQkOiAoKHsgc2NoZWR1bGVyLCBkZWJvdW5jZSB9PzogYW55KSA9PiBPYnNlcnZhYmxlPENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudEZhaWwgfCBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRTdWNjZXNzPENtc0NvbXBvbmVudD4+KSAmIGltcG9ydChcIkBuZ3J4L2VmZmVjdHNcIikuQ3JlYXRlRWZmZWN0TWV0YWRhdGE7XG4gICAgcHJpdmF0ZSBsb2FkQ29tcG9uZW50c0VmZmVjdDtcbn1cbiJdfQ==
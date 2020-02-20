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

//# sourceMappingURL=components.effect.d.ts.map
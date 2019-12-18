import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { RoutingService } from '../../../routing/index';
import { CmsComponentConnector } from '../../connectors/component/cms-component.connector';
import { CmsActions } from '../actions/index';
import { CmsComponent } from '../../../model/cms.model';
import { FeatureConfigService } from '../../../features-config/services/feature-config.service';
export declare class ComponentEffects {
    private actions$;
    private cmsComponentLoader;
    private routingService;
    private featureConfigService;
    constructor(actions$: Actions, cmsComponentLoader: CmsComponentConnector, routingService: RoutingService, featureConfigService: FeatureConfigService);
    private currentPageContext$;
    private contextChange$;
    loadComponent$: ({ scheduler, debounce }?: any) => Observable<CmsActions.LoadCmsComponentFail | CmsActions.LoadCmsComponentSuccess<CmsComponent>>;
    private loadComponentsEffect;
}

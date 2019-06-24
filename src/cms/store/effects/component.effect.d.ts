import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CmsComponent } from '../../../model/cms.model';
import { RoutingService } from '../../../routing/index';
import { CmsComponentConnector } from '../../connectors/component/cms-component.connector';
import * as componentActions from '../actions/component.action';
export declare class ComponentEffects {
    private actions$;
    private cmsComponentLoader;
    private routingService;
    constructor(actions$: Actions, cmsComponentLoader: CmsComponentConnector, routingService: RoutingService);
    loadComponent$: Observable<componentActions.LoadComponentSuccess<CmsComponent> | componentActions.LoadComponentFail>;
}

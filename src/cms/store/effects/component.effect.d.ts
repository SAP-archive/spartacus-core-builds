import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { RoutingService } from '../../../routing/index';
import { CmsComponentConnector } from '../../connectors/component/cms-component.connector';
export declare class ComponentEffects {
    private actions$;
    private cmsComponentLoader;
    private routingService;
    constructor(actions$: Actions, cmsComponentLoader: CmsComponentConnector, routingService: RoutingService);
    loadComponent$: Observable<any>;
}

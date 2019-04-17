import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CmsComponent } from '../../../occ/occ-models/cms-component.models';
import { RoutingService } from '../../../routing/index';
import { CmsComponentLoader } from '../../services/cms-component.loader';
export declare class ComponentEffects {
    private actions$;
    private cmsComponentLoader;
    private routingService;
    constructor(actions$: Actions, cmsComponentLoader: CmsComponentLoader<CmsComponent>, routingService: RoutingService);
    loadComponent$: Observable<any>;
}

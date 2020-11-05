import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { RoutingService } from '../../../routing/index';
import { CmsComponentConnector } from '../../connectors/component/cms-component.connector';
import { CmsActions } from '../actions/index';
export declare class NavigationEntryItemEffects {
    private actions$;
    private cmsComponentConnector;
    private routingService;
    loadNavigationItems$: Observable<CmsActions.LoadCmsNavigationItemsSuccess | CmsActions.LoadCmsNavigationItemsFail>;
    getIdListByItemType(itemList: any[]): {
        pageIds: string[];
        componentIds: string[];
        mediaIds: string[];
    };
    constructor(actions$: Actions, cmsComponentConnector: CmsComponentConnector, routingService: RoutingService);
}

import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { OccCmsPageLoader } from '../../occ/occ-cms-page.loader';
import { RoutingService } from '../../../routing/index';
export declare class NavigationEntryItemEffects {
    private actions$;
    private occCmsService;
    private routingService;
    loadNavigationItems$: Observable<any>;
    getIdListByItemType(itemList: any[]): any;
    constructor(actions$: Actions, occCmsService: OccCmsPageLoader, routingService: RoutingService);
}

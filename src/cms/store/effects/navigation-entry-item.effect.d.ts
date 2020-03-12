import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { RoutingService } from '../../../routing/index';
import { CmsComponentConnector } from '../../connectors/component/cms-component.connector';
import { CmsActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NavigationEntryItemEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NavigationEntryItemEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLmVmZmVjdC5kLnRzIiwic291cmNlcyI6WyJuYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uZWZmZWN0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7O0FBV0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jb21wb25lbnQvY21zLWNvbXBvbmVudC5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ21zQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmF2aWdhdGlvbkVudHJ5SXRlbUVmZmVjdHMge1xuICAgIHByaXZhdGUgYWN0aW9ucyQ7XG4gICAgcHJpdmF0ZSBjbXNDb21wb25lbnRDb25uZWN0b3I7XG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTtcbiAgICBsb2FkTmF2aWdhdGlvbkl0ZW1zJDogT2JzZXJ2YWJsZTxDbXNBY3Rpb25zLkxvYWRDbXNOYXZpZ2F0aW9uSXRlbXNTdWNjZXNzIHwgQ21zQWN0aW9ucy5Mb2FkQ21zTmF2aWdhdGlvbkl0ZW1zRmFpbD47XG4gICAgZ2V0SWRMaXN0QnlJdGVtVHlwZShpdGVtTGlzdDogYW55W10pOiB7XG4gICAgICAgIHBhZ2VJZHM6IHN0cmluZ1tdO1xuICAgICAgICBjb21wb25lbnRJZHM6IHN0cmluZ1tdO1xuICAgICAgICBtZWRpYUlkczogc3RyaW5nW107XG4gICAgfTtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgY21zQ29tcG9uZW50Q29ubmVjdG9yOiBDbXNDb21wb25lbnRDb25uZWN0b3IsIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSk7XG59XG4iXX0=
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLmVmZmVjdC5kLnRzIiwic291cmNlcyI6WyJuYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uZWZmZWN0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7O0FBV0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2luZGV4JztcbmltcG9ydCB7IENtc0NvbXBvbmVudENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY29tcG9uZW50L2Ntcy1jb21wb25lbnQuY29ubmVjdG9yJztcbmltcG9ydCB7IENtc0FjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5hdmlnYXRpb25FbnRyeUl0ZW1FZmZlY3RzIHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHByaXZhdGUgY21zQ29tcG9uZW50Q29ubmVjdG9yO1xuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U7XG4gICAgbG9hZE5hdmlnYXRpb25JdGVtcyQ6IE9ic2VydmFibGU8Q21zQWN0aW9ucy5Mb2FkQ21zTmF2aWdhdGlvbkl0ZW1zU3VjY2VzcyB8IENtc0FjdGlvbnMuTG9hZENtc05hdmlnYXRpb25JdGVtc0ZhaWw+O1xuICAgIGdldElkTGlzdEJ5SXRlbVR5cGUoaXRlbUxpc3Q6IGFueVtdKToge1xuICAgICAgICBwYWdlSWRzOiBzdHJpbmdbXTtcbiAgICAgICAgY29tcG9uZW50SWRzOiBzdHJpbmdbXTtcbiAgICAgICAgbWVkaWFJZHM6IHN0cmluZ1tdO1xuICAgIH07XG4gICAgY29uc3RydWN0b3IoYWN0aW9ucyQ6IEFjdGlvbnMsIGNtc0NvbXBvbmVudENvbm5lY3RvcjogQ21zQ29tcG9uZW50Q29ubmVjdG9yLCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UpO1xufVxuIl19
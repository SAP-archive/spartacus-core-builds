import { Observable } from 'rxjs';
import { CmsComponent } from '../../../model/cms.model';
import { OccConfig } from '../../../occ/config/occ-config';
import { PageContext } from '../../../routing/models/page-context.model';
import { CmsStructureConfigService } from '../../services/cms-structure-config.service';
import { CmsComponentAdapter } from './cms-component.adapter';
import * as ɵngcc0 from '@angular/core';
export declare class CmsComponentConnector {
    protected cmsStructureConfigService: CmsStructureConfigService;
    protected adapter: CmsComponentAdapter;
    protected config: OccConfig;
    constructor(cmsStructureConfigService: CmsStructureConfigService, adapter: CmsComponentAdapter, config: OccConfig);
    get<T extends CmsComponent>(id: string, pageContext: PageContext): Observable<T>;
    getList(ids: string[], pageContext: PageContext): Observable<CmsComponent[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsComponentConnector>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudC5jb25uZWN0b3IuZC50cyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudC5jb25uZWN0b3IuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7OztBQU9BOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi8uLi8uLi9vY2MvY29uZmlnL29jYy1jb25maWcnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ntcy1zdHJ1Y3R1cmUtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50QWRhcHRlciB9IGZyb20gJy4vY21zLWNvbXBvbmVudC5hZGFwdGVyJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENtc0NvbXBvbmVudENvbm5lY3RvciB7XG4gICAgcHJvdGVjdGVkIGNtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2U6IENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGFkYXB0ZXI6IENtc0NvbXBvbmVudEFkYXB0ZXI7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogT2NjQ29uZmlnO1xuICAgIGNvbnN0cnVjdG9yKGNtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2U6IENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2UsIGFkYXB0ZXI6IENtc0NvbXBvbmVudEFkYXB0ZXIsIGNvbmZpZzogT2NjQ29uZmlnKTtcbiAgICBnZXQ8VCBleHRlbmRzIENtc0NvbXBvbmVudD4oaWQ6IHN0cmluZywgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxUPjtcbiAgICBnZXRMaXN0KGlkczogc3RyaW5nW10sIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IE9ic2VydmFibGU8Q21zQ29tcG9uZW50W10+O1xufVxuIl19
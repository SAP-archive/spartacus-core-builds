import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { Observable } from 'rxjs';
import { UserInterestsAdapter } from '../../../user/connectors/interests/user-interests.adapter';
import { ProductInterestSearchResult, ProductInterestEntryRelation, NotificationType } from '../../../model/product-interest.model';
import { OccConfig } from '../../config/occ-config';
import { ConverterService } from '../../../util/converter.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccUserInterestsAdapter implements UserInterestsAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected config: OccConfig;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, config: OccConfig, converter: ConverterService);
    getInterests(userId: string, pageSize?: number, currentPage?: number, sort?: string, productCode?: string, notificationType?: NotificationType): Observable<ProductInterestSearchResult>;
    removeInterest(userId: string, item: ProductInterestEntryRelation): Observable<any[]>;
    addInterest(userId: string, productCode: string, notificationType: NotificationType): Observable<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccUserInterestsAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccUserInterestsAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItaW50ZXJlc3RzLmFkYXB0ZXIuZC50cyIsInNvdXJjZXMiOlsib2NjLXVzZXItaW50ZXJlc3RzLmFkYXB0ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7QUFTQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVzZXJJbnRlcmVzdHNBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2ludGVyZXN0cy91c2VyLWludGVyZXN0cy5hZGFwdGVyJztcbmltcG9ydCB7IFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdCwgUHJvZHVjdEludGVyZXN0RW50cnlSZWxhdGlvbiwgTm90aWZpY2F0aW9uVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QtaW50ZXJlc3QubW9kZWwnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL29jYy1jb25maWcnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT2NjVXNlckludGVyZXN0c0FkYXB0ZXIgaW1wbGVtZW50cyBVc2VySW50ZXJlc3RzQWRhcHRlciB7XG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQ7XG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBPY2NDb25maWc7XG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50LCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsIGNvbmZpZzogT2NjQ29uZmlnLCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2UpO1xuICAgIGdldEludGVyZXN0cyh1c2VySWQ6IHN0cmluZywgcGFnZVNpemU/OiBudW1iZXIsIGN1cnJlbnRQYWdlPzogbnVtYmVyLCBzb3J0Pzogc3RyaW5nLCBwcm9kdWN0Q29kZT86IHN0cmluZywgbm90aWZpY2F0aW9uVHlwZT86IE5vdGlmaWNhdGlvblR5cGUpOiBPYnNlcnZhYmxlPFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdD47XG4gICAgcmVtb3ZlSW50ZXJlc3QodXNlcklkOiBzdHJpbmcsIGl0ZW06IFByb2R1Y3RJbnRlcmVzdEVudHJ5UmVsYXRpb24pOiBPYnNlcnZhYmxlPGFueVtdPjtcbiAgICBhZGRJbnRlcmVzdCh1c2VySWQ6IHN0cmluZywgcHJvZHVjdENvZGU6IHN0cmluZywgbm90aWZpY2F0aW9uVHlwZTogTm90aWZpY2F0aW9uVHlwZSk6IE9ic2VydmFibGU8YW55Pjtcbn1cbiJdfQ==
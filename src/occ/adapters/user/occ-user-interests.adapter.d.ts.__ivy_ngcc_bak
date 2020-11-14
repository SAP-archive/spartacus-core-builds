import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { Observable } from 'rxjs';
import { UserInterestsAdapter } from '../../../user/connectors/interests/user-interests.adapter';
import { ProductInterestSearchResult, ProductInterestEntryRelation, NotificationType } from '../../../model/product-interest.model';
import { OccConfig } from '../../config/occ-config';
import { ConverterService } from '../../../util/converter.service';
export declare class OccUserInterestsAdapter implements UserInterestsAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected config: OccConfig;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, config: OccConfig, converter: ConverterService);
    getInterests(userId: string, pageSize?: number, currentPage?: number, sort?: string, productCode?: string, notificationType?: NotificationType): Observable<ProductInterestSearchResult>;
    removeInterest(userId: string, item: ProductInterestEntryRelation): Observable<any[]>;
    addInterest(userId: string, productCode: string, notificationType: NotificationType): Observable<any>;
}

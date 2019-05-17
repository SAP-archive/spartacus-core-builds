import { UserDetailsAdapter } from '../connectors/details/user-details.adapter';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { Observable } from 'rxjs';
import { User } from '../../model/misc.model';
import { ConverterService } from '../../util/converter.service';
export declare class OccUserDetailsAdapter implements UserDetailsAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    private getUserEndpoint;
    load(userId: string): Observable<User>;
    update(userId: string, user: User): Observable<{}>;
}

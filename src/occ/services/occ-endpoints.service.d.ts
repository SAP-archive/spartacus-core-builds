import { BaseSiteService } from '../../site-context/facade/base-site.service';
import { OccConfig } from '../config/occ-config';
export declare class OccEndpointsService {
    private config;
    private baseSiteService;
    private activeBaseSite;
    constructor(config: OccConfig, baseSiteService: BaseSiteService);
    getBaseEndpoint(): string;
    getEndpoint(endpoint: string): string;
    getUrl(endpoint: string, urlParams?: object, queryParams?: object): string;
}

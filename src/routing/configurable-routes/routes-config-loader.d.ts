import { HttpClient } from '@angular/common/http';
import { RoutesConfig } from './routes-config';
import { ConfigurableRoutesConfig } from './config/configurable-routes-config';
import { OccConfig } from '../../occ/config/occ-config';
export declare class RoutesConfigLoader {
    private readonly http;
    private readonly serverConfig;
    private readonly configurableRoutesConfig;
    private _routesConfig;
    readonly routesConfig: RoutesConfig;
    readonly endpoint: string;
    constructor(http: HttpClient, serverConfig: OccConfig, configurableRoutesConfig: ConfigurableRoutesConfig);
    load(): Promise<void>;
    private fetch;
    private extendStaticWith;
    private extendLanguagesTranslationsWithDefault;
}

import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { EventService } from '../../event/event.service';
export declare class ConfigurationService implements OnDestroy {
    protected rootConfig: any;
    protected defaultConfig: any;
    protected events: EventService;
    /**
     * Will emit unified configuration when some ambient configuration will appear
     *
     * Ambient configuration can appear when we lazy load module with configuration
     */
    readonly unifiedConfig$: Observable<any>;
    /**
     * Global application configuration
     */
    readonly config: any;
    private readonly ambientDefaultConfig;
    private readonly ambientConfig;
    private eventsSubscription;
    constructor(rootConfig: any, defaultConfig: any, events: EventService, config: any);
    private processModule;
    private emitUnifiedConfig;
    ngOnDestroy(): void;
}

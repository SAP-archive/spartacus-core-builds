import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { UnifiedInjector } from '../../lazy-loading/unified-injector';
export declare class ConfigurationService implements OnDestroy {
    protected rootConfig: any;
    protected defaultConfig: any;
    protected unifiedInjector: UnifiedInjector;
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
    private subscription;
    constructor(rootConfig: any, defaultConfig: any, unifiedInjector: UnifiedInjector, config: any);
    private feedUnifiedConfig;
    private processConfig;
    private emitUnifiedConfig;
    ngOnDestroy(): void;
}

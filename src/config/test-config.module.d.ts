import { InjectionToken, ModuleWithProviders } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare const TEST_CONFIG_COOKIE_NAME: InjectionToken<string>;
export declare function parseConfigJSON(config: string): any;
export declare function configFromCookieFactory(cookieName: string, platform: any, document: Document): any;
export interface TestConfigModuleOptions {
    cookie: string;
}
/**
 * Designed/intended to provide dynamic configuration for testing scenarios ONLY (e.g. e2e tests).
 *
 * CAUTION: DON'T USE IT IN PRODUCTION! IT HASN'T BEEN REVIEWED FOR SECURITY ISSUES.
 */
export declare class TestConfigModule {
    /**
     * Injects JSON config from the cookie of the given name.
     *
     * Be aware of the cookie limitations (4096 bytes).
     *
     * CAUTION: DON'T USE IT IN PRODUCTION! IT HASN'T BEEN REVIEWED FOR SECURITY ISSUES.
     */
    static forRoot(options: TestConfigModuleOptions): ModuleWithProviders<TestConfigModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<TestConfigModule, never, never, never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<TestConfigModule>;
}

//# sourceMappingURL=test-config.module.d.ts.map
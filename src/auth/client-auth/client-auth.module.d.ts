import { ModuleWithProviders } from '@angular/core';
/**
 * Some of the OCC endpoints require Authorization header with the client token (eg. user registration).
 * This pattern should not be used in the frontend apps, but until OCC changes this requirement
 * we provide this module to support using those endpoints.
 *
 * After OCC improvements regarding client authentication this module can be safely removed.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from './store/client-auth-store.module';
export declare class ClientAuthModule {
    static forRoot(): ModuleWithProviders<ClientAuthModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<ClientAuthModule, never, [typeof ɵngcc1.CommonModule, typeof ɵngcc2.ClientAuthStoreModule], never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<ClientAuthModule>;
}

//# sourceMappingURL=client-auth.module.d.ts.map
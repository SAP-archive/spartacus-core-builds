import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ProductConnector } from '../../connectors/product/product.connector';
import { ProductActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class ProductEffects {
    private actions$;
    private productConnector;
    private contextChange$;
    loadProduct$: ({ scheduler, debounce }?: any) => Observable<ProductActions.LoadProductFail | ProductActions.LoadProductSuccess>;
    private productLoadEffect;
    constructor(actions$: Actions, productConnector: ProductConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ProductEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsicHJvZHVjdC5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7O0FBT0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvcHJvZHVjdC9wcm9kdWN0LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBQcm9kdWN0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJvZHVjdEVmZmVjdHMge1xuICAgIHByaXZhdGUgYWN0aW9ucyQ7XG4gICAgcHJpdmF0ZSBwcm9kdWN0Q29ubmVjdG9yO1xuICAgIHByaXZhdGUgY29udGV4dENoYW5nZSQ7XG4gICAgbG9hZFByb2R1Y3QkOiAoeyBzY2hlZHVsZXIsIGRlYm91bmNlIH0/OiBhbnkpID0+IE9ic2VydmFibGU8UHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RGYWlsIHwgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RTdWNjZXNzPjtcbiAgICBwcml2YXRlIHByb2R1Y3RMb2FkRWZmZWN0O1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCBwcm9kdWN0Q29ubmVjdG9yOiBQcm9kdWN0Q29ubmVjdG9yKTtcbn1cbiJdfQ==
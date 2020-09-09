import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ProductConnector } from '../../connectors/product/product.connector';
import { ProductActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class ProductEffects {
    private actions$;
    private productConnector;
    private contextChange$;
    loadProduct$: (({ scheduler, debounce }?: any) => Observable<ProductActions.LoadProductFail | ProductActions.LoadProductSuccess>) & import("@ngrx/effects").CreateEffectMetadata;
    private productLoadEffect;
    constructor(actions$: Actions, productConnector: ProductConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ProductEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsicHJvZHVjdC5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7O0FBT0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9kdWN0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9wcm9kdWN0L3Byb2R1Y3QuY29ubmVjdG9yJztcbmltcG9ydCB7IFByb2R1Y3RBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQcm9kdWN0RWZmZWN0cyB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBwcml2YXRlIHByb2R1Y3RDb25uZWN0b3I7XG4gICAgcHJpdmF0ZSBjb250ZXh0Q2hhbmdlJDtcbiAgICBsb2FkUHJvZHVjdCQ6ICgoeyBzY2hlZHVsZXIsIGRlYm91bmNlIH0/OiBhbnkpID0+IE9ic2VydmFibGU8UHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RGYWlsIHwgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RTdWNjZXNzPikgJiBpbXBvcnQoXCJAbmdyeC9lZmZlY3RzXCIpLkNyZWF0ZUVmZmVjdE1ldGFkYXRhO1xuICAgIHByaXZhdGUgcHJvZHVjdExvYWRFZmZlY3Q7XG4gICAgY29uc3RydWN0b3IoYWN0aW9ucyQ6IEFjdGlvbnMsIHByb2R1Y3RDb25uZWN0b3I6IFByb2R1Y3RDb25uZWN0b3IpO1xufVxuIl19
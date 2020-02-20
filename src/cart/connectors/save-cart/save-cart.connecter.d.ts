import { Observable } from 'rxjs';
import { SaveCartResult } from '../../../model/cart.model';
import { SaveCartAdapter } from './save-cart.adapter';
import * as ɵngcc0 from '@angular/core';
export declare class SaveCartConnector {
    protected adapter: SaveCartAdapter;
    constructor(adapter: SaveCartAdapter);
    saveCart(userId: string, cartId: string, saveCartName?: string, saveCartDescription?: string): Observable<SaveCartResult>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SaveCartConnector>;
}

//# sourceMappingURL=save-cart.connecter.d.ts.map
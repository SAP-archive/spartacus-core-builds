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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS1jYXJ0LmNvbm5lY3Rlci5kLnRzIiwic291cmNlcyI6WyJzYXZlLWNhcnQuY29ubmVjdGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7QUFJQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNhdmVDYXJ0UmVzdWx0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBTYXZlQ2FydEFkYXB0ZXIgfSBmcm9tICcuL3NhdmUtY2FydC5hZGFwdGVyJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNhdmVDYXJ0Q29ubmVjdG9yIHtcbiAgICBwcm90ZWN0ZWQgYWRhcHRlcjogU2F2ZUNhcnRBZGFwdGVyO1xuICAgIGNvbnN0cnVjdG9yKGFkYXB0ZXI6IFNhdmVDYXJ0QWRhcHRlcik7XG4gICAgc2F2ZUNhcnQodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nLCBzYXZlQ2FydE5hbWU/OiBzdHJpbmcsIHNhdmVDYXJ0RGVzY3JpcHRpb24/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFNhdmVDYXJ0UmVzdWx0Pjtcbn1cbiJdfQ==
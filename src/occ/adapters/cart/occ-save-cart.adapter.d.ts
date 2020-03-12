import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SaveCartAdapter } from '../../../cart/connectors/save-cart/save-cart.adapter';
import { SaveCartResult } from '../../../model/cart.model';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccSaveCartAdapter implements SaveCartAdapter {
    protected http: HttpClient;
    protected occEndpointsService: OccEndpointsService;
    protected converterService: ConverterService;
    constructor(http: HttpClient, occEndpointsService: OccEndpointsService, converterService: ConverterService);
    saveCart(userId: string, cartId: string, saveCartName?: string, saveCartDescription?: string): Observable<SaveCartResult>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccSaveCartAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccSaveCartAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXNhdmUtY2FydC5hZGFwdGVyLmQudHMiLCJzb3VyY2VzIjpbIm9jYy1zYXZlLWNhcnQuYWRhcHRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7O0FBTUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2F2ZUNhcnRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jb25uZWN0b3JzL3NhdmUtY2FydC9zYXZlLWNhcnQuYWRhcHRlcic7XG5pbXBvcnQgeyBTYXZlQ2FydFJlc3VsdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPY2NTYXZlQ2FydEFkYXB0ZXIgaW1wbGVtZW50cyBTYXZlQ2FydEFkYXB0ZXIge1xuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50O1xuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHNTZXJ2aWNlOiBPY2NFbmRwb2ludHNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXJTZXJ2aWNlOiBDb252ZXJ0ZXJTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIG9jY0VuZHBvaW50c1NlcnZpY2U6IE9jY0VuZHBvaW50c1NlcnZpY2UsIGNvbnZlcnRlclNlcnZpY2U6IENvbnZlcnRlclNlcnZpY2UpO1xuICAgIHNhdmVDYXJ0KHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZywgc2F2ZUNhcnROYW1lPzogc3RyaW5nLCBzYXZlQ2FydERlc2NyaXB0aW9uPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxTYXZlQ2FydFJlc3VsdD47XG59XG4iXX0=
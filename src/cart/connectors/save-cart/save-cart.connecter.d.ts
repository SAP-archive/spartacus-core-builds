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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS1jYXJ0LmNvbm5lY3Rlci5kLnRzIiwic291cmNlcyI6WyJzYXZlLWNhcnQuY29ubmVjdGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7QUFJQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTYXZlQ2FydFJlc3VsdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgU2F2ZUNhcnRBZGFwdGVyIH0gZnJvbSAnLi9zYXZlLWNhcnQuYWRhcHRlcic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTYXZlQ2FydENvbm5lY3RvciB7XG4gICAgcHJvdGVjdGVkIGFkYXB0ZXI6IFNhdmVDYXJ0QWRhcHRlcjtcbiAgICBjb25zdHJ1Y3RvcihhZGFwdGVyOiBTYXZlQ2FydEFkYXB0ZXIpO1xuICAgIHNhdmVDYXJ0KHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZywgc2F2ZUNhcnROYW1lPzogc3RyaW5nLCBzYXZlQ2FydERlc2NyaXB0aW9uPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxTYXZlQ2FydFJlc3VsdD47XG59XG4iXX0=
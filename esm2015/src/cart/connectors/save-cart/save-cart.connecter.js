import { Injectable } from '@angular/core';
import { SaveCartAdapter } from './save-cart.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./save-cart.adapter";
export class SaveCartConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    saveCart(userId, cartId, saveCartName, saveCartDescription) {
        return this.adapter.saveCart(userId, cartId, saveCartName, saveCartDescription);
    }
}
SaveCartConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function SaveCartConnector_Factory() { return new SaveCartConnector(i0.ɵɵinject(i1.SaveCartAdapter)); }, token: SaveCartConnector, providedIn: "root" });
SaveCartConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
SaveCartConnector.ctorParameters = () => [
    { type: SaveCartAdapter }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS1jYXJ0LmNvbm5lY3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2NhcnQvY29ubmVjdG9ycy9zYXZlLWNhcnQvc2F2ZS1jYXJ0LmNvbm5lY3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBS3RELE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsWUFBc0IsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7SUFBRyxDQUFDO0lBRTNDLFFBQVEsQ0FDYixNQUFjLEVBQ2QsTUFBYyxFQUNkLFlBQXFCLEVBQ3JCLG1CQUE0QjtRQUU1QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUMxQixNQUFNLEVBQ04sTUFBTSxFQUNOLFlBQVksRUFDWixtQkFBbUIsQ0FDcEIsQ0FBQztJQUNKLENBQUM7Ozs7WUFsQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFKUSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2F2ZUNhcnRSZXN1bHQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IFNhdmVDYXJ0QWRhcHRlciB9IGZyb20gJy4vc2F2ZS1jYXJ0LmFkYXB0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2F2ZUNhcnRDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogU2F2ZUNhcnRBZGFwdGVyKSB7fVxuXG4gIHB1YmxpYyBzYXZlQ2FydChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBzYXZlQ2FydE5hbWU/OiBzdHJpbmcsXG4gICAgc2F2ZUNhcnREZXNjcmlwdGlvbj86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFNhdmVDYXJ0UmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5zYXZlQ2FydChcbiAgICAgIHVzZXJJZCxcbiAgICAgIGNhcnRJZCxcbiAgICAgIHNhdmVDYXJ0TmFtZSxcbiAgICAgIHNhdmVDYXJ0RGVzY3JpcHRpb25cbiAgICApO1xuICB9XG59XG4iXX0=
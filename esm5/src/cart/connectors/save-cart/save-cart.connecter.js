import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { SaveCartAdapter } from './save-cart.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./save-cart.adapter";
var SaveCartConnector = /** @class */ (function () {
    function SaveCartConnector(adapter) {
        this.adapter = adapter;
    }
    SaveCartConnector.prototype.saveCart = function (userId, cartId, saveCartName, saveCartDescription) {
        return this.adapter.saveCart(userId, cartId, saveCartName, saveCartDescription);
    };
    SaveCartConnector.ctorParameters = function () { return [
        { type: SaveCartAdapter }
    ]; };
    SaveCartConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function SaveCartConnector_Factory() { return new SaveCartConnector(i0.ɵɵinject(i1.SaveCartAdapter)); }, token: SaveCartConnector, providedIn: "root" });
    SaveCartConnector = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], SaveCartConnector);
    return SaveCartConnector;
}());
export { SaveCartConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS1jYXJ0LmNvbm5lY3Rlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L2Nvbm5lY3RvcnMvc2F2ZS1jYXJ0L3NhdmUtY2FydC5jb25uZWN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFLdEQ7SUFDRSwyQkFBc0IsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7SUFBRyxDQUFDO0lBRTNDLG9DQUFRLEdBQWYsVUFDRSxNQUFjLEVBQ2QsTUFBYyxFQUNkLFlBQXFCLEVBQ3JCLG1CQUE0QjtRQUU1QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUMxQixNQUFNLEVBQ04sTUFBTSxFQUNOLFlBQVksRUFDWixtQkFBbUIsQ0FDcEIsQ0FBQztJQUNKLENBQUM7O2dCQWQ4QixlQUFlOzs7SUFEbkMsaUJBQWlCO1FBSDdCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxpQkFBaUIsQ0FnQjdCOzRCQXhCRDtDQXdCQyxBQWhCRCxJQWdCQztTQWhCWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTYXZlQ2FydFJlc3VsdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgU2F2ZUNhcnRBZGFwdGVyIH0gZnJvbSAnLi9zYXZlLWNhcnQuYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTYXZlQ2FydENvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhZGFwdGVyOiBTYXZlQ2FydEFkYXB0ZXIpIHt9XG5cbiAgcHVibGljIHNhdmVDYXJ0KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHNhdmVDYXJ0TmFtZT86IHN0cmluZyxcbiAgICBzYXZlQ2FydERlc2NyaXB0aW9uPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8U2F2ZUNhcnRSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnNhdmVDYXJ0KFxuICAgICAgdXNlcklkLFxuICAgICAgY2FydElkLFxuICAgICAgc2F2ZUNhcnROYW1lLFxuICAgICAgc2F2ZUNhcnREZXNjcmlwdGlvblxuICAgICk7XG4gIH1cbn1cbiJdfQ==
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { AsmAdapter } from './asm.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./asm.adapter";
var AsmConnector = /** @class */ (function () {
    function AsmConnector(asmAdapter) {
        this.asmAdapter = asmAdapter;
    }
    AsmConnector.prototype.customerSearch = function (options) {
        return this.asmAdapter.customerSearch(options);
    };
    AsmConnector.ctorParameters = function () { return [
        { type: AsmAdapter }
    ]; };
    AsmConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function AsmConnector_Factory() { return new AsmConnector(i0.ɵɵinject(i1.AsmAdapter)); }, token: AsmConnector, providedIn: "root" });
    AsmConnector = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], AsmConnector);
    return AsmConnector;
}());
export { AsmConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hc20vY29ubmVjdG9ycy9hc20uY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTTNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUszQztJQUNFLHNCQUFzQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQztJQUVoRCxxQ0FBYyxHQUFkLFVBQ0UsT0FBOEI7UUFFOUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqRCxDQUFDOztnQkFOaUMsVUFBVTs7O0lBRGpDLFlBQVk7UUFIeEIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLFlBQVksQ0FReEI7dUJBbkJEO0NBbUJDLEFBUkQsSUFRQztTQVJZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBDdXN0b21lclNlYXJjaE9wdGlvbnMsXG4gIEN1c3RvbWVyU2VhcmNoUGFnZSxcbn0gZnJvbSAnLi4vbW9kZWxzL2FzbS5tb2RlbHMnO1xuaW1wb3J0IHsgQXNtQWRhcHRlciB9IGZyb20gJy4vYXNtLmFkYXB0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXNtQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFzbUFkYXB0ZXI6IEFzbUFkYXB0ZXIpIHt9XG5cbiAgY3VzdG9tZXJTZWFyY2goXG4gICAgb3B0aW9uczogQ3VzdG9tZXJTZWFyY2hPcHRpb25zXG4gICk6IE9ic2VydmFibGU8Q3VzdG9tZXJTZWFyY2hQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuYXNtQWRhcHRlci5jdXN0b21lclNlYXJjaChvcHRpb25zKTtcbiAgfVxufVxuIl19
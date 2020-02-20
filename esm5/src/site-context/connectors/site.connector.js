import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { SiteAdapter } from './site.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./site.adapter";
var SiteConnector = /** @class */ (function () {
    function SiteConnector(adapter) {
        this.adapter = adapter;
    }
    SiteConnector.prototype.getLanguages = function () {
        return this.adapter.loadLanguages();
    };
    SiteConnector.prototype.getCurrencies = function () {
        return this.adapter.loadCurrencies();
    };
    SiteConnector.prototype.getCountries = function (type) {
        return this.adapter.loadCountries(type);
    };
    SiteConnector.prototype.getRegions = function (countryIsoCode) {
        return this.adapter.loadRegions(countryIsoCode);
    };
    SiteConnector.prototype.getBaseSite = function () {
        return this.adapter.loadBaseSite();
    };
    SiteConnector.ctorParameters = function () { return [
        { type: SiteAdapter }
    ]; };
    SiteConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function SiteConnector_Factory() { return new SiteConnector(i0.ɵɵinject(i1.SiteAdapter)); }, token: SiteConnector, providedIn: "root" });
    SiteConnector = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], SiteConnector);
    return SiteConnector;
}());
export { SiteConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L2Nvbm5lY3RvcnMvc2l0ZS5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLN0M7SUFDRSx1QkFBc0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUFHLENBQUM7SUFFOUMsb0NBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQscUNBQWEsR0FBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLElBQWtCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxjQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7O2dCQXBCOEIsV0FBVzs7O0lBRC9CLGFBQWE7UUFIekIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGFBQWEsQ0FzQnpCO3dCQS9CRDtDQStCQyxBQXRCRCxJQXNCQztTQXRCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ291bnRyeSwgQ291bnRyeVR5cGUsIFJlZ2lvbiB9IGZyb20gJy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgQmFzZVNpdGUsIEN1cnJlbmN5LCBMYW5ndWFnZSB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgU2l0ZUFkYXB0ZXIgfSBmcm9tICcuL3NpdGUuYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTaXRlQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IFNpdGVBZGFwdGVyKSB7fVxuXG4gIGdldExhbmd1YWdlcygpOiBPYnNlcnZhYmxlPExhbmd1YWdlW10+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRMYW5ndWFnZXMoKTtcbiAgfVxuXG4gIGdldEN1cnJlbmNpZXMoKTogT2JzZXJ2YWJsZTxDdXJyZW5jeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkQ3VycmVuY2llcygpO1xuICB9XG5cbiAgZ2V0Q291bnRyaWVzKHR5cGU/OiBDb3VudHJ5VHlwZSk6IE9ic2VydmFibGU8Q291bnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkQ291bnRyaWVzKHR5cGUpO1xuICB9XG5cbiAgZ2V0UmVnaW9ucyhjb3VudHJ5SXNvQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZWdpb25bXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZFJlZ2lvbnMoY291bnRyeUlzb0NvZGUpO1xuICB9XG5cbiAgZ2V0QmFzZVNpdGUoKTogT2JzZXJ2YWJsZTxCYXNlU2l0ZT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZEJhc2VTaXRlKCk7XG4gIH1cbn1cbiJdfQ==
import { __assign, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { OccConfig } from '../../../config/occ-config';
import * as i0 from "@angular/core";
import * as i1 from "../../../config/occ-config";
var ProductNameNormalizer = /** @class */ (function () {
    function ProductNameNormalizer(config) {
        this.config = config;
    }
    ProductNameNormalizer.prototype.convert = function (source, target) {
        if (target === undefined) {
            target = __assign({}, source);
        }
        if (source.name) {
            target.name = this.normalize(source.name);
            target.nameHtml = source.name;
        }
        return target;
    };
    ProductNameNormalizer.prototype.normalize = function (name) {
        return name.replace(/<[^>]*>/g, '');
    };
    ProductNameNormalizer.ctorParameters = function () { return [
        { type: OccConfig }
    ]; };
    ProductNameNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductNameNormalizer_Factory() { return new ProductNameNormalizer(i0.ɵɵinject(i1.OccConfig)); }, token: ProductNameNormalizer, providedIn: "root" });
    ProductNameNormalizer = __decorate([
        Injectable({ providedIn: 'root' })
    ], ProductNameNormalizer);
    return ProductNameNormalizer;
}());
export { ProductNameNormalizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1uYW1lLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3Byb2R1Y3QvY29udmVydGVycy9wcm9kdWN0LW5hbWUtbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQU12RDtJQUNFLCtCQUFzQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQztJQUUzQyx1Q0FBTyxHQUFQLFVBQVEsTUFBbUIsRUFBRSxNQUFnQjtRQUMzQyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDeEIsTUFBTSxnQkFBUyxNQUFjLENBQUUsQ0FBQztTQUNqQztRQUNELElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtZQUNmLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVTLHlDQUFTLEdBQW5CLFVBQW9CLElBQVk7UUFDOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDOztnQkFmNkIsU0FBUzs7O0lBRDVCLHFCQUFxQjtRQURqQyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7T0FDdEIscUJBQXFCLENBaUJqQztnQ0F4QkQ7Q0F3QkMsQUFqQkQsSUFpQkM7U0FqQlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL29jYy1jb25maWcnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IENvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3ROYW1lTm9ybWFsaXplciBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuUHJvZHVjdCwgUHJvZHVjdD4ge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBPY2NDb25maWcpIHt9XG5cbiAgY29udmVydChzb3VyY2U6IE9jYy5Qcm9kdWN0LCB0YXJnZXQ/OiBQcm9kdWN0KTogUHJvZHVjdCB7XG4gICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQgPSB7IC4uLihzb3VyY2UgYXMgYW55KSB9O1xuICAgIH1cbiAgICBpZiAoc291cmNlLm5hbWUpIHtcbiAgICAgIHRhcmdldC5uYW1lID0gdGhpcy5ub3JtYWxpemUoc291cmNlLm5hbWUpO1xuICAgICAgdGFyZ2V0Lm5hbWVIdG1sID0gc291cmNlLm5hbWU7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgbm9ybWFsaXplKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5hbWUucmVwbGFjZSgvPFtePl0qPi9nLCAnJyk7XG4gIH1cbn1cbiJdfQ==
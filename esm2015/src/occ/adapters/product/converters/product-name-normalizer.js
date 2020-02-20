import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { OccConfig } from '../../../config/occ-config';
import * as i0 from "@angular/core";
import * as i1 from "../../../config/occ-config";
let ProductNameNormalizer = class ProductNameNormalizer {
    constructor(config) {
        this.config = config;
    }
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign({}, source);
        }
        if (source.name) {
            target.name = this.normalize(source.name);
            target.nameHtml = source.name;
        }
        return target;
    }
    normalize(name) {
        return name.replace(/<[^>]*>/g, '');
    }
};
ProductNameNormalizer.ctorParameters = () => [
    { type: OccConfig }
];
ProductNameNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductNameNormalizer_Factory() { return new ProductNameNormalizer(i0.ɵɵinject(i1.OccConfig)); }, token: ProductNameNormalizer, providedIn: "root" });
ProductNameNormalizer = __decorate([
    Injectable({ providedIn: 'root' })
], ProductNameNormalizer);
export { ProductNameNormalizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1uYW1lLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3Byb2R1Y3QvY29udmVydGVycy9wcm9kdWN0LW5hbWUtbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQU12RCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQUNoQyxZQUFzQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQztJQUUzQyxPQUFPLENBQUMsTUFBbUIsRUFBRSxNQUFnQjtRQUMzQyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDeEIsTUFBTSxxQkFBUyxNQUFjLENBQUUsQ0FBQztTQUNqQztRQUNELElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtZQUNmLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVTLFNBQVMsQ0FBQyxJQUFZO1FBQzlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNGLENBQUE7O1lBaEIrQixTQUFTOzs7QUFENUIscUJBQXFCO0lBRGpDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUN0QixxQkFBcUIsQ0FpQmpDO1NBakJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9vY2MtY29uZmlnJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TmFtZU5vcm1hbGl6ZXIgaW1wbGVtZW50cyBDb252ZXJ0ZXI8T2NjLlByb2R1Y3QsIFByb2R1Y3Q+IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbmZpZzogT2NjQ29uZmlnKSB7fVxuXG4gIGNvbnZlcnQoc291cmNlOiBPY2MuUHJvZHVjdCwgdGFyZ2V0PzogUHJvZHVjdCk6IFByb2R1Y3Qge1xuICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0ID0geyAuLi4oc291cmNlIGFzIGFueSkgfTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZS5uYW1lKSB7XG4gICAgICB0YXJnZXQubmFtZSA9IHRoaXMubm9ybWFsaXplKHNvdXJjZS5uYW1lKTtcbiAgICAgIHRhcmdldC5uYW1lSHRtbCA9IHNvdXJjZS5uYW1lO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgcHJvdGVjdGVkIG5vcm1hbGl6ZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBuYW1lLnJlcGxhY2UoLzxbXj5dKj4vZywgJycpO1xuICB9XG59XG4iXX0=
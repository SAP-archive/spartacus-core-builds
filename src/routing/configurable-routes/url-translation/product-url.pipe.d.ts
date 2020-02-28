import { PipeTransform } from '@angular/core';
import { SemanticPathService } from './semantic-path.service';
import { Product } from '../../../model/product.model';
import * as ɵngcc0 from '@angular/core';
export declare class ProductURLPipe implements PipeTransform {
    private semanticPath;
    constructor(semanticPath: SemanticPathService);
    transform(product: Product): any[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductURLPipe>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<ProductURLPipe, "cxProductUrl">;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC11cmwucGlwZS5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LXVybC5waXBlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7O0FBSUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VtYW50aWNQYXRoU2VydmljZSB9IGZyb20gJy4vc2VtYW50aWMtcGF0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByb2R1Y3RVUkxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgcHJpdmF0ZSBzZW1hbnRpY1BhdGg7XG4gICAgY29uc3RydWN0b3Ioc2VtYW50aWNQYXRoOiBTZW1hbnRpY1BhdGhTZXJ2aWNlKTtcbiAgICB0cmFuc2Zvcm0ocHJvZHVjdDogUHJvZHVjdCk6IGFueVtdO1xufVxuIl19
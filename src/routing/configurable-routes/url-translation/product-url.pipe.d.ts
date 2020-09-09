import { PipeTransform } from '@angular/core';
import { SemanticPathService } from './semantic-path.service';
import { Product } from '../../../model/product.model';
import * as ɵngcc0 from '@angular/core';
export declare class ProductURLPipe implements PipeTransform {
    private semanticPath;
    constructor(semanticPath: SemanticPathService);
    transform(product: Product): any[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductURLPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<ProductURLPipe, "cxProductUrl">;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC11cmwucGlwZS5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LXVybC5waXBlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7O0FBSUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZW1hbnRpY1BhdGhTZXJ2aWNlIH0gZnJvbSAnLi9zZW1hbnRpYy1wYXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJvZHVjdFVSTFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICBwcml2YXRlIHNlbWFudGljUGF0aDtcbiAgICBjb25zdHJ1Y3RvcihzZW1hbnRpY1BhdGg6IFNlbWFudGljUGF0aFNlcnZpY2UpO1xuICAgIHRyYW5zZm9ybShwcm9kdWN0OiBQcm9kdWN0KTogYW55W107XG59XG4iXX0=
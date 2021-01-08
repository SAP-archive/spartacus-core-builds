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

//# sourceMappingURL=product-url.pipe.d.ts.map
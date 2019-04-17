import { PipeTransform } from '@angular/core';
import { Product } from '../../../occ/occ-models/occ.models';
export declare class StripHtmlPipe implements PipeTransform {
    transform(product: Product): Product;
}

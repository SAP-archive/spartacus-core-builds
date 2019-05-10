import { PipeTransform } from '@angular/core';
import { Product } from '../../../model/product.model';
export declare class StripHtmlPipe implements PipeTransform {
    transform(product: Product): Product;
}

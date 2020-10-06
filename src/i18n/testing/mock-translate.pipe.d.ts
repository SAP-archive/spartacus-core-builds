import { PipeTransform } from '@angular/core';
import { Translatable } from '../translatable';
export declare class MockTranslatePipe implements PipeTransform {
    transform(input: Translatable | string, options?: object): string;
}

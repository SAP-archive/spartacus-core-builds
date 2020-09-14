import { PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
export declare class MockDatePipe extends DatePipe implements PipeTransform {
    transform(value: any, format?: string, timezone?: string): string;
}

import { PipeTransform } from '@angular/core';
import { DatePipe as NativeDatePipe } from '@angular/common';
export declare class MockDatePipe extends NativeDatePipe implements PipeTransform {
    transform(value: any, format?: string, timezone?: string): string;
}

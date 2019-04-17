import { ChangeDetectorRef, OnDestroy, PipeTransform } from '@angular/core';
import { TranslationService } from './translation.service';
export declare class TranslatePipe implements PipeTransform, OnDestroy {
    private service;
    private cd;
    private lastKey;
    private lastOptions;
    private value;
    private sub;
    constructor(service: TranslationService, cd: ChangeDetectorRef);
    transform(key: any, options?: object): string;
    private markForCheck;
    ngOnDestroy(): void;
}

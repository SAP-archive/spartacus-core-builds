import { ChangeDetectorRef, OnDestroy, PipeTransform } from '@angular/core';
import { Translatable, TranslatableParams } from './translatable';
import { TranslationService } from './translation.service';
export declare class TranslatePipe implements PipeTransform, OnDestroy {
    protected service: TranslationService;
    protected cd: ChangeDetectorRef;
    private lastKey;
    private lastOptions;
    private translatedValue;
    private sub;
    constructor(service: TranslationService, cd: ChangeDetectorRef);
    transform(input: Translatable | string, options?: TranslatableParams): string;
    private translate;
    private markForCheck;
    ngOnDestroy(): void;
}

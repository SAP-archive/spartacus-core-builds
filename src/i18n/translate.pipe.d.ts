import { ChangeDetectorRef, OnDestroy, PipeTransform } from '@angular/core';
import { Translatable, TranslatableParams } from './translatable';
import { TranslationService } from './translation.service';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TranslatePipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<TranslatePipe, "cxTranslate">;
}

//# sourceMappingURL=translate.pipe.d.ts.map
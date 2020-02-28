import { ChangeDetectorRef, OnDestroy, PipeTransform } from '@angular/core';
import { TranslationService } from './translation.service';
import { Translatable, TranslatableParams } from './translatable';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TranslatePipe>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<TranslatePipe, "cxTranslate">;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuZC50cyIsInNvdXJjZXMiOlsidHJhbnNsYXRlLnBpcGUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7OztBQVlBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3ksIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGFibGUsIFRyYW5zbGF0YWJsZVBhcmFtcyB9IGZyb20gJy4vdHJhbnNsYXRhYmxlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRyYW5zbGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtLCBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNkOiBDaGFuZ2VEZXRlY3RvclJlZjtcbiAgICBwcml2YXRlIGxhc3RLZXk7XG4gICAgcHJpdmF0ZSBsYXN0T3B0aW9ucztcbiAgICBwcml2YXRlIHRyYW5zbGF0ZWRWYWx1ZTtcbiAgICBwcml2YXRlIHN1YjtcbiAgICBjb25zdHJ1Y3RvcihzZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsIGNkOiBDaGFuZ2VEZXRlY3RvclJlZik7XG4gICAgdHJhbnNmb3JtKGlucHV0OiBUcmFuc2xhdGFibGUgfCBzdHJpbmcsIG9wdGlvbnM/OiBUcmFuc2xhdGFibGVQYXJhbXMpOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU7XG4gICAgcHJpdmF0ZSBtYXJrRm9yQ2hlY2s7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==
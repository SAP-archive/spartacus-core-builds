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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuZC50cyIsInNvdXJjZXMiOlsidHJhbnNsYXRlLnBpcGUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7OztBQVlBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0YWJsZSwgVHJhbnNsYXRhYmxlUGFyYW1zIH0gZnJvbSAnLi90cmFuc2xhdGFibGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVHJhbnNsYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0sIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmO1xuICAgIHByaXZhdGUgbGFzdEtleTtcbiAgICBwcml2YXRlIGxhc3RPcHRpb25zO1xuICAgIHByaXZhdGUgdHJhbnNsYXRlZFZhbHVlO1xuICAgIHByaXZhdGUgc3ViO1xuICAgIGNvbnN0cnVjdG9yKHNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZSwgY2Q6IENoYW5nZURldGVjdG9yUmVmKTtcbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IFRyYW5zbGF0YWJsZSB8IHN0cmluZywgb3B0aW9ucz86IFRyYW5zbGF0YWJsZVBhcmFtcyk6IHN0cmluZztcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTtcbiAgICBwcml2YXRlIG1hcmtGb3JDaGVjaztcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19
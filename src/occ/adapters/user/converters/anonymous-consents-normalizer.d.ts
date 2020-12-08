import { AnonymousConsentsService } from '../../../../anonymous-consents/facade/anonymous-consents.service';
import { AnonymousConsent } from '../../../../model/consent.model';
import { Converter } from '../../../../util/converter.service';
import * as ɵngcc0 from '@angular/core';
export declare class AnonymousConsentNormalizer implements Converter<string, AnonymousConsent[]> {
    protected anonymousConsentsService: AnonymousConsentsService;
    constructor(anonymousConsentsService: AnonymousConsentsService);
    convert(source: string): AnonymousConsent[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AnonymousConsentNormalizer, never>;
}

//# sourceMappingURL=anonymous-consents-normalizer.d.ts.map
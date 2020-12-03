import { AnonymousConsentsService } from '../../../../anonymous-consents/facade/anonymous-consents.service';
import { AnonymousConsent } from '../../../../model/consent.model';
import { Converter } from '../../../../util/converter.service';
export declare class AnonymousConsentNormalizer implements Converter<string, AnonymousConsent[]> {
    protected anonymousConsentsService: AnonymousConsentsService;
    constructor(anonymousConsentsService: AnonymousConsentsService);
    convert(source: string, target?: AnonymousConsent[]): AnonymousConsent[];
}

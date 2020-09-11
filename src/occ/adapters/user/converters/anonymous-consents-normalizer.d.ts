import { AnonymousConsentsService } from '../../../../anonymous-consents/facade/anonymous-consents.service';
import { AnonymousConsent } from '../../../../model/consent.model';
import { Converter } from '../../../../util/converter.service';
import * as ɵngcc0 from '@angular/core';
export declare class AnonymousConsentNormalizer implements Converter<string, AnonymousConsent[]> {
    protected anonymousConsentsService: AnonymousConsentsService;
    constructor(anonymousConsentsService: AnonymousConsentsService);
    convert(source: string, target?: AnonymousConsent[]): AnonymousConsent[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AnonymousConsentNormalizer, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLW5vcm1hbGl6ZXIuZC50cyIsInNvdXJjZXMiOlsiYW5vbnltb3VzLWNvbnNlbnRzLW5vcm1hbGl6ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7OztBQUlBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vYW5vbnltb3VzLWNvbnNlbnRzL2ZhY2FkZS9hbm9ueW1vdXMtY29uc2VudHMuc2VydmljZSc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvY29uc2VudC5tb2RlbCc7XG5pbXBvcnQgeyBDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFub255bW91c0NvbnNlbnROb3JtYWxpemVyIGltcGxlbWVudHMgQ29udmVydGVyPHN0cmluZywgQW5vbnltb3VzQ29uc2VudFtdPiB7XG4gICAgcHJvdGVjdGVkIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlKTtcbiAgICBjb252ZXJ0KHNvdXJjZTogc3RyaW5nLCB0YXJnZXQ/OiBBbm9ueW1vdXNDb25zZW50W10pOiBBbm9ueW1vdXNDb25zZW50W107XG59XG4iXX0=
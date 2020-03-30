import { Observable } from 'rxjs';
import { TranslationService } from '../translation.service';
import * as ɵngcc0 from '@angular/core';
export declare class MockTranslationService implements TranslationService {
    translate(key: string, options?: any, _whitespaceUntilLoaded?: boolean): Observable<string>;
    loadChunks(_chunks: string | string[]): Promise<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MockTranslationService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<MockTranslationService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay10cmFuc2xhdGlvbi5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm1vY2stdHJhbnNsYXRpb24uc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7QUFHQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTW9ja1RyYW5zbGF0aW9uU2VydmljZSBpbXBsZW1lbnRzIFRyYW5zbGF0aW9uU2VydmljZSB7XG4gICAgdHJhbnNsYXRlKGtleTogc3RyaW5nLCBvcHRpb25zPzogYW55LCBfd2hpdGVzcGFjZVVudGlsTG9hZGVkPzogYm9vbGVhbik6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICBsb2FkQ2h1bmtzKF9jaHVua3M6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+O1xufVxuIl19
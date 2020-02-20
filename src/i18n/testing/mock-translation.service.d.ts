import { Observable } from 'rxjs';
import { TranslationService } from '../translation.service';
import * as ɵngcc0 from '@angular/core';
export declare class MockTranslationService implements TranslationService {
    translate(key: string, options?: any, _whitespaceUntilLoaded?: boolean): Observable<string>;
    loadChunks(_chunks: string | string[]): Promise<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MockTranslationService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<MockTranslationService>;
}

//# sourceMappingURL=mock-translation.service.d.ts.map
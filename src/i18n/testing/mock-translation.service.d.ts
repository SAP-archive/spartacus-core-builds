import { Observable } from 'rxjs';
import { TranslationService } from '../translation.service';
export declare class MockTranslationService implements TranslationService {
    translate(key: string, options?: any, _whitespaceUntilLoaded?: boolean): Observable<string>;
    loadNamespaces(_namespaces: string | string[]): Promise<any>;
}

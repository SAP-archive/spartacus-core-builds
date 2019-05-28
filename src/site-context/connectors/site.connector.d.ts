import { SiteAdapter } from './site.adapter';
import { Observable } from 'rxjs';
import { Currency, Language, BaseSite } from '../../model/misc.model';
export declare class SiteConnector {
    protected adapter: SiteAdapter;
    constructor(adapter: SiteAdapter);
    getLanguages(): Observable<Language[]>;
    getCurrencies(): Observable<Currency[]>;
    getBaseSite(): Observable<BaseSite>;
}

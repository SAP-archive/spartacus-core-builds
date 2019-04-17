import { Observable } from 'rxjs';
import { Actions } from '@ngrx/effects';
import { OccSiteService } from '../../occ/occ-site.service';
import { WindowRef } from '../../../window/window-ref';
export declare class LanguagesEffects {
    private actions$;
    private occSiteService;
    private winRef;
    loadLanguages$: Observable<any>;
    activateLanguage$: Observable<any>;
    constructor(actions$: Actions, occSiteService: OccSiteService, winRef: WindowRef);
}

import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CmsComponent } from '../../../model/cms.model';
import { CmsComponentConnector } from '../../connectors/component/cms-component.connector';
import { CmsActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class ComponentsEffects {
    private actions$;
    private cmsComponentConnector;
    constructor(actions$: Actions, cmsComponentConnector: CmsComponentConnector);
    private contextChange$;
    loadComponent$: (({ scheduler, debounce }?: any) => Observable<CmsActions.LoadCmsComponentSuccess<CmsComponent> | CmsActions.LoadCmsComponentFail>) & import("@ngrx/effects").CreateEffectMetadata;
    private loadComponentsEffect;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ComponentsEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ComponentsEffects>;
}

//# sourceMappingURL=components.effect.d.ts.map
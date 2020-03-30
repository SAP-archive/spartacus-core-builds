import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CmsComponent } from '../../../model/cms.model';
import { CmsComponentConnector } from '../../connectors/component/cms-component.connector';
import { CmsActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class ComponentsEffects {
    private actions$;
    private cmsComponentLoader;
    constructor(actions$: Actions, cmsComponentLoader: CmsComponentConnector);
    private contextChange$;
    loadComponent$: (({ scheduler, debounce }?: any) => Observable<CmsActions.LoadCmsComponentFail | CmsActions.LoadCmsComponentSuccess<CmsComponent>>) & import("@ngrx/effects").CreateEffectMetadata;
    private loadComponentsEffect;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ComponentsEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ComponentsEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7OztBQU9BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IENtc0NvbXBvbmVudENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY29tcG9uZW50L2Ntcy1jb21wb25lbnQuY29ubmVjdG9yJztcbmltcG9ydCB7IENtc0FjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENvbXBvbmVudHNFZmZlY3RzIHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHByaXZhdGUgY21zQ29tcG9uZW50TG9hZGVyO1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCBjbXNDb21wb25lbnRMb2FkZXI6IENtc0NvbXBvbmVudENvbm5lY3Rvcik7XG4gICAgcHJpdmF0ZSBjb250ZXh0Q2hhbmdlJDtcbiAgICBsb2FkQ29tcG9uZW50JDogKCh7IHNjaGVkdWxlciwgZGVib3VuY2UgfT86IGFueSkgPT4gT2JzZXJ2YWJsZTxDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRGYWlsIHwgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50U3VjY2VzczxDbXNDb21wb25lbnQ+PikgJiBpbXBvcnQoXCJAbmdyeC9lZmZlY3RzXCIpLkNyZWF0ZUVmZmVjdE1ldGFkYXRhO1xuICAgIHByaXZhdGUgbG9hZENvbXBvbmVudHNFZmZlY3Q7XG59XG4iXX0=
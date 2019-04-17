/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional } from '@angular/core';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CmsComponentAdapter } from './cms-component.adapter';
import { CmsStructureConfigService } from './cms-structure-config.service';
import * as i0 from "@angular/core";
import * as i1 from "./cms-structure-config.service";
import * as i2 from "./cms-component.adapter";
/**
 * Abstract class that can be used to implement custom loader logic
 * in order to load CMS components from third-party CMS system.
 * @abstract
 * @template T
 */
export class CmsComponentLoader {
    /**
     * @param {?} cmsStructureConfigService
     * @param {?} adapter
     */
    constructor(cmsStructureConfigService, adapter) {
        this.cmsStructureConfigService = cmsStructureConfigService;
        this.adapter = adapter;
    }
    /**
     *
     * @param {?} id
     * @param {?} pageContext
     * @return {?}
     */
    get(id, pageContext) {
        return this.cmsStructureConfigService
            .getComponentFromConfig(id)
            .pipe(switchMap(configuredComponent => configuredComponent
            ? of(configuredComponent)
            : this.load(id, pageContext).pipe(map(component => this.adapt(component)))));
    }
    /**
     *
     * An adapter can be injected to convert the backend reponse to
     * the UI model.
     *
     * @param {?} component the source that can be converted
     * @return {?}
     */
    adapt(component) {
        if (this.adapter) {
            return this.adapter.adapt((/** @type {?} */ (component)));
        }
        return (/** @type {?} */ (component));
    }
}
CmsComponentLoader.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CmsComponentLoader.ctorParameters = () => [
    { type: CmsStructureConfigService },
    { type: CmsComponentAdapter, decorators: [{ type: Optional }] }
];
/** @nocollapse */ CmsComponentLoader.ngInjectableDef = i0.defineInjectable({ factory: function CmsComponentLoader_Factory() { return new CmsComponentLoader(i0.inject(i1.CmsStructureConfigService), i0.inject(i2.CmsComponentAdapter, 8)); }, token: CmsComponentLoader, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CmsComponentLoader.prototype.cmsStructureConfigService;
    /**
     * @type {?}
     * @protected
     */
    CmsComponentLoader.prototype.adapter;
    /**
     * Abstract method must be used to load the component for a given `id` and `PageContext`.
     * The component can be loaded from alternative backend, as long as the structure
     * converts to the `CmsStructureModel`.
     *
     * @abstract
     * @param {?} id
     * @param {?} pageContext The `PageContext` holding the page Id.
     * @param {?=} fields
     * @return {?}
     */
    CmsComponentLoader.prototype.load = function (id, pageContext, fields) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudC5sb2FkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3NlcnZpY2VzL2Ntcy1jb21wb25lbnQubG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHaEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7Ozs7QUFTM0UsTUFBTSxPQUFnQixrQkFBa0I7Ozs7O0lBQ3RDLFlBQ1kseUJBQW9ELEVBQ3hDLE9BQStCO1FBRDNDLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDeEMsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7SUFDcEQsQ0FBQzs7Ozs7OztJQWlCSixHQUFHLENBQUMsRUFBVSxFQUFFLFdBQXdCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QjthQUNsQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUM7YUFDMUIsSUFBSSxDQUNILFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQzlCLG1CQUFtQjtZQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQzdCLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FDeEMsQ0FDTixDQUNGLENBQUM7SUFDTixDQUFDOzs7Ozs7Ozs7SUFTRCxLQUFLLENBQUMsU0FBWTtRQUNoQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBRyxTQUFTLEVBQUEsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxtQkFBYyxTQUFTLEVBQUEsQ0FBQztJQUNqQyxDQUFDOzs7WUFsREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUlEseUJBQXlCO1lBRHpCLG1CQUFtQix1QkFhdkIsUUFBUTs7Ozs7Ozs7SUFEVCx1REFBOEQ7Ozs7O0lBQzlELHFDQUFxRDs7Ozs7Ozs7Ozs7O0lBVXZELDJFQUlpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL3JvdXRpbmcvbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRBZGFwdGVyIH0gZnJvbSAnLi9jbXMtY29tcG9uZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4vY21zLXN0cnVjdHVyZS1jb25maWcuc2VydmljZSc7XG5cbi8qKlxuICogQWJzdHJhY3QgY2xhc3MgdGhhdCBjYW4gYmUgdXNlZCB0byBpbXBsZW1lbnQgY3VzdG9tIGxvYWRlciBsb2dpY1xuICogaW4gb3JkZXIgdG8gbG9hZCBDTVMgY29tcG9uZW50cyBmcm9tIHRoaXJkLXBhcnR5IENNUyBzeXN0ZW0uXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDbXNDb21wb25lbnRMb2FkZXI8VD4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zU3RydWN0dXJlQ29uZmlnU2VydmljZTogQ21zU3RydWN0dXJlQ29uZmlnU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcm90ZWN0ZWQgYWRhcHRlcjogQ21zQ29tcG9uZW50QWRhcHRlcjxUPlxuICApIHt9XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCBtdXN0IGJlIHVzZWQgdG8gbG9hZCB0aGUgY29tcG9uZW50IGZvciBhIGdpdmVuIGBpZGAgYW5kIGBQYWdlQ29udGV4dGAuXG4gICAqIFRoZSBjb21wb25lbnQgY2FuIGJlIGxvYWRlZCBmcm9tIGFsdGVybmF0aXZlIGJhY2tlbmQsIGFzIGxvbmcgYXMgdGhlIHN0cnVjdHVyZVxuICAgKiBjb252ZXJ0cyB0byB0aGUgYENtc1N0cnVjdHVyZU1vZGVsYC5cbiAgICpcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0IFRoZSBgUGFnZUNvbnRleHRgIGhvbGRpbmcgdGhlIHBhZ2UgSWQuXG4gICAqL1xuICBhYnN0cmFjdCBsb2FkKFxuICAgIGlkOiBzdHJpbmcsXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIGZpZWxkcz86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFQ+O1xuXG4gIC8qKlxuICAgKi9cbiAgZ2V0KGlkOiBzdHJpbmcsIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IE9ic2VydmFibGU8Q21zQ29tcG9uZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuY21zU3RydWN0dXJlQ29uZmlnU2VydmljZVxuICAgICAgLmdldENvbXBvbmVudEZyb21Db25maWcoaWQpXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKGNvbmZpZ3VyZWRDb21wb25lbnQgPT5cbiAgICAgICAgICBjb25maWd1cmVkQ29tcG9uZW50XG4gICAgICAgICAgICA/IG9mKGNvbmZpZ3VyZWRDb21wb25lbnQpXG4gICAgICAgICAgICA6IHRoaXMubG9hZChpZCwgcGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKGNvbXBvbmVudCA9PiB0aGlzLmFkYXB0KGNvbXBvbmVudCkpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBhZGFwdGVyIGNhbiBiZSBpbmplY3RlZCB0byBjb252ZXJ0IHRoZSBiYWNrZW5kIHJlcG9uc2UgdG9cbiAgICogdGhlIFVJIG1vZGVsLlxuICAgKlxuICAgKiBAcGFyYW0gY29tcG9uZW50IHRoZSBzb3VyY2UgdGhhdCBjYW4gYmUgY29udmVydGVkXG4gICAqL1xuICBhZGFwdChjb21wb25lbnQ6IFQpOiBDbXNDb21wb25lbnQge1xuICAgIGlmICh0aGlzLmFkYXB0ZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuYWRhcHQoPFQ+Y29tcG9uZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIDxDbXNDb21wb25lbnQ+Y29tcG9uZW50O1xuICB9XG59XG4iXX0=
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
var CmsComponentLoader = /** @class */ (function () {
    function CmsComponentLoader(cmsStructureConfigService, adapter) {
        this.cmsStructureConfigService = cmsStructureConfigService;
        this.adapter = adapter;
    }
    /**
     */
    /**
     *
     * @param {?} id
     * @param {?} pageContext
     * @return {?}
     */
    CmsComponentLoader.prototype.get = /**
     *
     * @param {?} id
     * @param {?} pageContext
     * @return {?}
     */
    function (id, pageContext) {
        var _this = this;
        return this.cmsStructureConfigService
            .getComponentFromConfig(id)
            .pipe(switchMap(function (configuredComponent) {
            return configuredComponent
                ? of(configuredComponent)
                : _this.load(id, pageContext).pipe(map(function (component) { return _this.adapt(component); }));
        }));
    };
    /**
     *
     * An adapter can be injected to convert the backend reponse to
     * the UI model.
     *
     * @param component the source that can be converted
     */
    /**
     *
     * An adapter can be injected to convert the backend reponse to
     * the UI model.
     *
     * @param {?} component the source that can be converted
     * @return {?}
     */
    CmsComponentLoader.prototype.adapt = /**
     *
     * An adapter can be injected to convert the backend reponse to
     * the UI model.
     *
     * @param {?} component the source that can be converted
     * @return {?}
     */
    function (component) {
        if (this.adapter) {
            return this.adapter.adapt((/** @type {?} */ (component)));
        }
        return (/** @type {?} */ (component));
    };
    CmsComponentLoader.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CmsComponentLoader.ctorParameters = function () { return [
        { type: CmsStructureConfigService },
        { type: CmsComponentAdapter, decorators: [{ type: Optional }] }
    ]; };
    /** @nocollapse */ CmsComponentLoader.ngInjectableDef = i0.defineInjectable({ factory: function CmsComponentLoader_Factory() { return new CmsComponentLoader(i0.inject(i1.CmsStructureConfigService), i0.inject(i2.CmsComponentAdapter, 8)); }, token: CmsComponentLoader, providedIn: "root" });
    return CmsComponentLoader;
}());
export { CmsComponentLoader };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudC5sb2FkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3NlcnZpY2VzL2Ntcy1jb21wb25lbnQubG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHaEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7Ozs7QUFNM0U7SUFJRSw0QkFDWSx5QkFBb0QsRUFDeEMsT0FBK0I7UUFEM0MsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUN4QyxZQUFPLEdBQVAsT0FBTyxDQUF3QjtJQUNwRCxDQUFDO0lBZUo7T0FDRzs7Ozs7OztJQUNILGdDQUFHOzs7Ozs7SUFBSCxVQUFJLEVBQVUsRUFBRSxXQUF3QjtRQUF4QyxpQkFZQztRQVhDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QjthQUNsQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUM7YUFDMUIsSUFBSSxDQUNILFNBQVMsQ0FBQyxVQUFBLG1CQUFtQjtZQUMzQixPQUFBLG1CQUFtQjtnQkFDakIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDN0IsR0FBRyxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUN4QztRQUpMLENBSUssQ0FDTixDQUNGLENBQUM7SUFDTixDQUFDO0lBRUQ7Ozs7OztPQU1HOzs7Ozs7Ozs7SUFDSCxrQ0FBSzs7Ozs7Ozs7SUFBTCxVQUFNLFNBQVk7UUFDaEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQUcsU0FBUyxFQUFBLENBQUMsQ0FBQztTQUN6QztRQUNELE9BQU8sbUJBQWMsU0FBUyxFQUFBLENBQUM7SUFDakMsQ0FBQzs7Z0JBbERGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUlEseUJBQXlCO2dCQUR6QixtQkFBbUIsdUJBYXZCLFFBQVE7Ozs2QkFsQmI7Q0ErREMsQUFuREQsSUFtREM7U0FoRHFCLGtCQUFrQjs7Ozs7O0lBRXBDLHVEQUE4RDs7Ozs7SUFDOUQscUNBQXFEOzs7Ozs7Ozs7Ozs7SUFVdkQsMkVBSWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vcm91dGluZy9tb2RlbHMvcGFnZS1jb250ZXh0Lm1vZGVsJztcbmltcG9ydCB7IENtc0NvbXBvbmVudEFkYXB0ZXIgfSBmcm9tICcuL2Ntcy1jb21wb25lbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jbXMtc3RydWN0dXJlLWNvbmZpZy5zZXJ2aWNlJztcblxuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGltcGxlbWVudCBjdXN0b20gbG9hZGVyIGxvZ2ljXG4gKiBpbiBvcmRlciB0byBsb2FkIENNUyBjb21wb25lbnRzIGZyb20gdGhpcmQtcGFydHkgQ01TIHN5c3RlbS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENtc0NvbXBvbmVudExvYWRlcjxUPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlOiBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByb3RlY3RlZCBhZGFwdGVyOiBDbXNDb21wb25lbnRBZGFwdGVyPFQ+XG4gICkge31cblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIG11c3QgYmUgdXNlZCB0byBsb2FkIHRoZSBjb21wb25lbnQgZm9yIGEgZ2l2ZW4gYGlkYCBhbmQgYFBhZ2VDb250ZXh0YC5cbiAgICogVGhlIGNvbXBvbmVudCBjYW4gYmUgbG9hZGVkIGZyb20gYWx0ZXJuYXRpdmUgYmFja2VuZCwgYXMgbG9uZyBhcyB0aGUgc3RydWN0dXJlXG4gICAqIGNvbnZlcnRzIHRvIHRoZSBgQ21zU3RydWN0dXJlTW9kZWxgLlxuICAgKlxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHQgVGhlIGBQYWdlQ29udGV4dGAgaG9sZGluZyB0aGUgcGFnZSBJZC5cbiAgICovXG4gIGFic3RyYWN0IGxvYWQoXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgZmllbGRzPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8VD47XG5cbiAgLyoqXG4gICAqL1xuICBnZXQoaWQ6IHN0cmluZywgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxDbXNDb21wb25lbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlXG4gICAgICAuZ2V0Q29tcG9uZW50RnJvbUNvbmZpZyhpZClcbiAgICAgIC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoY29uZmlndXJlZENvbXBvbmVudCA9PlxuICAgICAgICAgIGNvbmZpZ3VyZWRDb21wb25lbnRcbiAgICAgICAgICAgID8gb2YoY29uZmlndXJlZENvbXBvbmVudClcbiAgICAgICAgICAgIDogdGhpcy5sb2FkKGlkLCBwYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoY29tcG9uZW50ID0+IHRoaXMuYWRhcHQoY29tcG9uZW50KSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGFkYXB0ZXIgY2FuIGJlIGluamVjdGVkIHRvIGNvbnZlcnQgdGhlIGJhY2tlbmQgcmVwb25zZSB0b1xuICAgKiB0aGUgVUkgbW9kZWwuXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnQgdGhlIHNvdXJjZSB0aGF0IGNhbiBiZSBjb252ZXJ0ZWRcbiAgICovXG4gIGFkYXB0KGNvbXBvbmVudDogVCk6IENtc0NvbXBvbmVudCB7XG4gICAgaWYgKHRoaXMuYWRhcHRlcikge1xuICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5hZGFwdCg8VD5jb21wb25lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gPENtc0NvbXBvbmVudD5jb21wb25lbnQ7XG4gIH1cbn1cbiJdfQ==
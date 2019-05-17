/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, ComponentFactoryResolver, Inject, PLATFORM_ID, } from '@angular/core';
import { CmsConfig } from '../config/cms-config';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
var ComponentMapperService = /** @class */ (function () {
    function ComponentMapperService(componentFactoryResolver, config, document, platform) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.config = config;
        this.document = document;
        this.platform = platform;
        this.missingComponents = [];
        this.loadedWebComponents = {};
    }
    /**
     * @desc
     * returns a web component for the CMS typecode.
     *
     * The mapping of CMS components to web componetns requires a mapping.
     * This is configurable when the module is loaded.
     *
     * For example:
     *
     *  {
     *      'CMSLinkComponent': 'LinkComponent',
     *      'SimpleResponsiveBannerComponent': 'SimpleResponsiveBannerComponent',
     *      [etc.]
     *  }
     *
     * The type codes are dynamic since they depend on the implementation.
     * Customer will add, extend or ingore standard components.
     *
     * @param typeCode the component type
     */
    /**
     * @desc
     * returns a web component for the CMS typecode.
     *
     * The mapping of CMS components to web componetns requires a mapping.
     * This is configurable when the module is loaded.
     *
     * For example:
     *
     *  {
     *      'CMSLinkComponent': 'LinkComponent',
     *      'SimpleResponsiveBannerComponent': 'SimpleResponsiveBannerComponent',
     *      [etc.]
     *  }
     *
     * The type codes are dynamic since they depend on the implementation.
     * Customer will add, extend or ingore standard components.
     *
     * @protected
     * @param {?} typeCode the component type
     * @return {?}
     */
    ComponentMapperService.prototype.getType = /**
     * @desc
     * returns a web component for the CMS typecode.
     *
     * The mapping of CMS components to web componetns requires a mapping.
     * This is configurable when the module is loaded.
     *
     * For example:
     *
     *  {
     *      'CMSLinkComponent': 'LinkComponent',
     *      'SimpleResponsiveBannerComponent': 'SimpleResponsiveBannerComponent',
     *      [etc.]
     *  }
     *
     * The type codes are dynamic since they depend on the implementation.
     * Customer will add, extend or ingore standard components.
     *
     * @protected
     * @param {?} typeCode the component type
     * @return {?}
     */
    function (typeCode) {
        /** @type {?} */
        var componentConfig = this.config.cmsComponents[typeCode];
        if (!componentConfig) {
            if (!this.missingComponents.includes(typeCode)) {
                this.missingComponents.push(typeCode);
                console.warn("No component implementation found for the CMS component type '" + typeCode + "'.\n", "Make sure you implement a component and register it in the mapper.");
            }
        }
        return componentConfig ? componentConfig.selector : null;
    };
    /**
     * @param {?} typeCode
     * @return {?}
     */
    ComponentMapperService.prototype.getFactoryEntryByCode = /**
     * @param {?} typeCode
     * @return {?}
     */
    function (typeCode) {
        /** @type {?} */
        var alias = this.getType(typeCode);
        if (!alias) {
            return;
        }
        /** @type {?} */
        var factoryEntries = Array.from(this.componentFactoryResolver['_factories'].entries());
        /** @type {?} */
        var factory = factoryEntries.find(function (_a) {
            var _b = tslib_1.__read(_a, 2), value = _b[1];
            return value.selector === alias;
        });
        if (!factory) {
            console.warn("No component factory found for the CMS component type '" + typeCode + "'.\n", "Make sure you add a component to the 'entryComponents' array in the NgModule.");
        }
        return factory;
    };
    /**
     * @param {?} typeCode
     * @return {?}
     */
    ComponentMapperService.prototype.getComponentTypeByCode = /**
     * @param {?} typeCode
     * @return {?}
     */
    function (typeCode) {
        /** @type {?} */
        var factoryEntry = this.getFactoryEntryByCode(typeCode);
        return factoryEntry ? factoryEntry[0] : null;
    };
    /**
     * @param {?} typeCode
     * @return {?}
     */
    ComponentMapperService.prototype.getComponentFactoryByCode = /**
     * @param {?} typeCode
     * @return {?}
     */
    function (typeCode) {
        /** @type {?} */
        var factoryEntry = this.getFactoryEntryByCode(typeCode);
        return factoryEntry ? factoryEntry[1] : null;
    };
    /**
     * @param {?} typeCode
     * @return {?}
     */
    ComponentMapperService.prototype.isWebComponent = /**
     * @param {?} typeCode
     * @return {?}
     */
    function (typeCode) {
        return (this.getType(typeCode) || '').includes('#');
    };
    /**
     * @param {?} componentType
     * @param {?} renderer
     * @return {?}
     */
    ComponentMapperService.prototype.initWebComponent = /**
     * @param {?} componentType
     * @param {?} renderer
     * @return {?}
     */
    function (componentType, renderer) {
        var _this = this;
        return new Promise(function (resolve) {
            var _a = tslib_1.__read(_this.getType(componentType).split('#'), 2), path = _a[0], selector = _a[1];
            /** @type {?} */
            var script = _this.loadedWebComponents[path];
            if (!script) {
                script = renderer.createElement('script');
                _this.loadedWebComponents[path] = script;
                script.setAttribute('src', path);
                renderer.appendChild(_this.document.body, script);
                if (isPlatformBrowser(_this.platform)) {
                    script.onload = function () {
                        script.onload = null;
                    };
                }
            }
            if (script.onload) {
                // If script is still loading (has onload callback defined)
                // add new callback and chain it with the existing one.
                // Needed to support loading multiple components from one script
                /** @type {?} */
                var chainedOnload_1 = script.onload;
                script.onload = function () {
                    chainedOnload_1();
                    resolve(selector);
                };
            }
            else {
                resolve(selector);
            }
        });
    };
    ComponentMapperService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ComponentMapperService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: CmsConfig },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return ComponentMapperService;
}());
export { ComponentMapperService };
if (false) {
    /** @type {?} */
    ComponentMapperService.prototype.missingComponents;
    /**
     * @type {?}
     * @private
     */
    ComponentMapperService.prototype.loadedWebComponents;
    /**
     * @type {?}
     * @protected
     */
    ComponentMapperService.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @protected
     */
    ComponentMapperService.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    ComponentMapperService.prototype.document;
    /**
     * @type {?}
     * @protected
     */
    ComponentMapperService.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LW1hcHBlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9zZXJ2aWNlcy9jb21wb25lbnQtbWFwcGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUVWLHdCQUF3QixFQUN4QixNQUFNLEVBRU4sV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFOUQ7SUFNRSxnQ0FDWSx3QkFBa0QsRUFDbEQsTUFBaUIsRUFDQyxRQUFhLEVBQ1YsUUFBYTtRQUhsQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELFdBQU0sR0FBTixNQUFNLENBQVc7UUFDQyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ1YsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQVI5QyxzQkFBaUIsR0FBYSxFQUFFLENBQUM7UUFFekIsd0JBQW1CLEdBQTRCLEVBQUUsQ0FBQztJQU92RCxDQUFDO0lBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FtQkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ08sd0NBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBakIsVUFBa0IsUUFBZ0I7O1lBQzFCLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDM0QsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDOUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEMsT0FBTyxDQUFDLElBQUks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QVEsQ0FBQyxDQUFDO2dCQUNwQixDQUFDLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbkI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXJIRixVQUFVOzs7O2dCQVJULHdCQUF3QjtnQkFLakIsU0FBUztnREFZYixNQUFNLFNBQUMsUUFBUTtnREFDZixNQUFNLFNBQUMsV0FBVzs7SUE0R3ZCLDZCQUFDO0NBQUEsQUF0SEQsSUFzSEM7U0FySFksc0JBQXNCOzs7SUFDakMsbURBQWlDOzs7OztJQUVqQyxxREFBMEQ7Ozs7O0lBR3hELDBEQUE0RDs7Ozs7SUFDNUQsd0NBQTJCOzs7OztJQUMzQiwwQ0FBeUM7Ozs7O0lBQ3pDLDBDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIFR5cGUsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgSW5qZWN0LFxuICBSZW5kZXJlcjIsXG4gIFBMQVRGT1JNX0lELFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jbXMtY29uZmlnJztcbmltcG9ydCB7IERPQ1VNRU5ULCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRNYXBwZXJTZXJ2aWNlIHtcbiAgbWlzc2luZ0NvbXBvbmVudHM6IHN0cmluZ1tdID0gW107XG5cbiAgcHJpdmF0ZSBsb2FkZWRXZWJDb21wb25lbnRzOiB7IFtwYXRoOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBDbXNDb25maWcsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJvdGVjdGVkIGRvY3VtZW50OiBhbnksXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJvdGVjdGVkIHBsYXRmb3JtOiBhbnlcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBAZGVzY1xuICAgKiByZXR1cm5zIGEgd2ViIGNvbXBvbmVudCBmb3IgdGhlIENNUyB0eXBlY29kZS5cbiAgICpcbiAgICogVGhlIG1hcHBpbmcgb2YgQ01TIGNvbXBvbmVudHMgdG8gd2ViIGNvbXBvbmV0bnMgcmVxdWlyZXMgYSBtYXBwaW5nLlxuICAgKiBUaGlzIGlzIGNvbmZpZ3VyYWJsZSB3aGVuIHRoZSBtb2R1bGUgaXMgbG9hZGVkLlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHtcbiAgICogICAgICAnQ01TTGlua0NvbXBvbmVudCc6ICdMaW5rQ29tcG9uZW50JyxcbiAgICogICAgICAnU2ltcGxlUmVzcG9uc2l2ZUJhbm5lckNvbXBvbmVudCc6ICdTaW1wbGVSZXNwb25zaXZlQmFubmVyQ29tcG9uZW50JyxcbiAgICogICAgICBbZXRjLl1cbiAgICogIH1cbiAgICpcbiAgICogVGhlIHR5cGUgY29kZXMgYXJlIGR5bmFtaWMgc2luY2UgdGhleSBkZXBlbmQgb24gdGhlIGltcGxlbWVudGF0aW9uLlxuICAgKiBDdXN0b21lciB3aWxsIGFkZCwgZXh0ZW5kIG9yIGluZ29yZSBzdGFuZGFyZCBjb21wb25lbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gdHlwZUNvZGUgdGhlIGNvbXBvbmVudCB0eXBlXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0VHlwZSh0eXBlQ29kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBjb21wb25lbnRDb25maWcgPSB0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzW3R5cGVDb2RlXTtcbiAgICBpZiAoIWNvbXBvbmVudENvbmZpZykge1xuICAgICAgaWYgKCF0aGlzLm1pc3NpbmdDb21wb25lbnRzLmluY2x1ZGVzKHR5cGVDb2RlKSkge1xuICAgICAgICB0aGlzLm1pc3NpbmdDb21wb25lbnRzLnB1c2godHlwZUNvZGUpO1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgYE5vIGNvbXBvbmVudCBpbXBsZW1lbnRhdGlvbiBmb3VuZCBmb3IgdGhlIENNUyBjb21wb25lbnQgdHlwZSAnJHt0eXBlQ29kZX0nLlxcbmAsXG4gICAgICAgICAgYE1ha2Ugc3VyZSB5b3UgaW1wbGVtZW50IGEgY29tcG9uZW50IGFuZCByZWdpc3RlciBpdCBpbiB0aGUgbWFwcGVyLmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudENvbmZpZyA/IGNvbXBvbmVudENvbmZpZy5zZWxlY3RvciA6IG51bGw7XG4gIH1cblxuICBnZXRGYWN0b3J5RW50cnlCeUNvZGUodHlwZUNvZGU6IHN0cmluZyk6IGFueSB7XG4gICAgY29uc3QgYWxpYXMgPSB0aGlzLmdldFR5cGUodHlwZUNvZGUpO1xuICAgIGlmICghYWxpYXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZmFjdG9yeUVudHJpZXMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJbJ19mYWN0b3JpZXMnXS5lbnRyaWVzKClcbiAgICApO1xuXG4gICAgY29uc3QgZmFjdG9yeSA9IGZhY3RvcnlFbnRyaWVzLmZpbmQoXG4gICAgICAoWywgdmFsdWVdOiBhbnkpID0+IHZhbHVlLnNlbGVjdG9yID09PSBhbGlhc1xuICAgICk7XG4gICAgaWYgKCFmYWN0b3J5KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBObyBjb21wb25lbnQgZmFjdG9yeSBmb3VuZCBmb3IgdGhlIENNUyBjb21wb25lbnQgdHlwZSAnJHt0eXBlQ29kZX0nLlxcbmAsXG4gICAgICAgIGBNYWtlIHN1cmUgeW91IGFkZCBhIGNvbXBvbmVudCB0byB0aGUgJ2VudHJ5Q29tcG9uZW50cycgYXJyYXkgaW4gdGhlIE5nTW9kdWxlLmBcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBmYWN0b3J5O1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50VHlwZUJ5Q29kZSh0eXBlQ29kZTogc3RyaW5nKTogVHlwZTxhbnk+IHtcbiAgICBjb25zdCBmYWN0b3J5RW50cnkgPSB0aGlzLmdldEZhY3RvcnlFbnRyeUJ5Q29kZSh0eXBlQ29kZSk7XG4gICAgcmV0dXJuIGZhY3RvcnlFbnRyeSA/IGZhY3RvcnlFbnRyeVswXSA6IG51bGw7XG4gIH1cblxuICBnZXRDb21wb25lbnRGYWN0b3J5QnlDb2RlKHR5cGVDb2RlOiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IGZhY3RvcnlFbnRyeSA9IHRoaXMuZ2V0RmFjdG9yeUVudHJ5QnlDb2RlKHR5cGVDb2RlKTtcbiAgICByZXR1cm4gZmFjdG9yeUVudHJ5ID8gZmFjdG9yeUVudHJ5WzFdIDogbnVsbDtcbiAgfVxuXG4gIGlzV2ViQ29tcG9uZW50KHR5cGVDb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHRoaXMuZ2V0VHlwZSh0eXBlQ29kZSkgfHwgJycpLmluY2x1ZGVzKCcjJyk7XG4gIH1cblxuICBpbml0V2ViQ29tcG9uZW50KFxuICAgIGNvbXBvbmVudFR5cGU6IHN0cmluZyxcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyXG4gICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc3QgW3BhdGgsIHNlbGVjdG9yXSA9IHRoaXMuZ2V0VHlwZShjb21wb25lbnRUeXBlKS5zcGxpdCgnIycpO1xuXG4gICAgICBsZXQgc2NyaXB0ID0gdGhpcy5sb2FkZWRXZWJDb21wb25lbnRzW3BhdGhdO1xuXG4gICAgICBpZiAoIXNjcmlwdCkge1xuICAgICAgICBzY3JpcHQgPSByZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgdGhpcy5sb2FkZWRXZWJDb21wb25lbnRzW3BhdGhdID0gc2NyaXB0O1xuICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCBwYXRoKTtcbiAgICAgICAgcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5kb2N1bWVudC5ib2R5LCBzY3JpcHQpO1xuXG4gICAgICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtKSkge1xuICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBzY3JpcHQub25sb2FkID0gbnVsbDtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzY3JpcHQub25sb2FkKSB7XG4gICAgICAgIC8vIElmIHNjcmlwdCBpcyBzdGlsbCBsb2FkaW5nIChoYXMgb25sb2FkIGNhbGxiYWNrIGRlZmluZWQpXG4gICAgICAgIC8vIGFkZCBuZXcgY2FsbGJhY2sgYW5kIGNoYWluIGl0IHdpdGggdGhlIGV4aXN0aW5nIG9uZS5cbiAgICAgICAgLy8gTmVlZGVkIHRvIHN1cHBvcnQgbG9hZGluZyBtdWx0aXBsZSBjb21wb25lbnRzIGZyb20gb25lIHNjcmlwdFxuICAgICAgICBjb25zdCBjaGFpbmVkT25sb2FkID0gc2NyaXB0Lm9ubG9hZDtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICBjaGFpbmVkT25sb2FkKCk7XG4gICAgICAgICAgcmVzb2x2ZShzZWxlY3Rvcik7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19
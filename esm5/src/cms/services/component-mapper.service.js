/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        var factory = factoryEntries.find((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), value = _b[1];
            return value.selector === alias;
        }));
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
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            var _a = tslib_1.__read(_this.getType(componentType).split('#'), 2), path = _a[0], selector = _a[1];
            /** @type {?} */
            var script = _this.loadedWebComponents[path];
            if (!script) {
                script = renderer.createElement('script');
                _this.loadedWebComponents[path] = script;
                script.setAttribute('src', path);
                renderer.appendChild(_this.document.body, script);
                if (isPlatformBrowser(_this.platform)) {
                    script.onload = (/**
                     * @return {?}
                     */
                    function () {
                        script.onload = null;
                    });
                }
            }
            if (script.onload) {
                // If script is still loading (has onload callback defined)
                // add new callback and chain it with the existing one.
                // Needed to support loading multiple components from one script
                /** @type {?} */
                var chainedOnload_1 = script.onload;
                script.onload = (/**
                 * @return {?}
                 */
                function () {
                    chainedOnload_1();
                    resolve(selector);
                });
            }
            else {
                resolve(selector);
            }
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LW1hcHBlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9zZXJ2aWNlcy9jb21wb25lbnQtbWFwcGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUVWLHdCQUF3QixFQUN4QixNQUFNLEVBRU4sV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFOUQ7SUFNRSxnQ0FDWSx3QkFBa0QsRUFDbEQsTUFBaUIsRUFDQyxRQUFhLEVBQ1YsUUFBYTtRQUhsQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELFdBQU0sR0FBTixNQUFNLENBQVc7UUFDQyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ1YsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQVI5QyxzQkFBaUIsR0FBYSxFQUFFLENBQUM7UUFFekIsd0JBQW1CLEdBQTRCLEVBQUUsQ0FBQztJQU92RCxDQUFDO0lBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FtQkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ08sd0NBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBakIsVUFBa0IsUUFBZ0I7O1lBQzFCLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDM0QsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDOUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEMsT0FBTyxDQUFDLElBQUks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QUNoQixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQSxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ25CO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkFySEYsVUFBVTs7OztnQkFSVCx3QkFBd0I7Z0JBS2pCLFNBQVM7Z0RBWWIsTUFBTSxTQUFDLFFBQVE7Z0RBQ2YsTUFBTSxTQUFDLFdBQVc7O0lBNEd2Qiw2QkFBQztDQUFBLEFBdEhELElBc0hDO1NBckhZLHNCQUFzQjs7O0lBQ2pDLG1EQUFpQzs7Ozs7SUFFakMscURBQTBEOzs7OztJQUd4RCwwREFBNEQ7Ozs7O0lBQzVELHdDQUEyQjs7Ozs7SUFDM0IsMENBQXlDOzs7OztJQUN6QywwQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBUeXBlLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEluamVjdCxcbiAgUmVuZGVyZXIyLFxuICBQTEFURk9STV9JRCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb25maWcgfSBmcm9tICcuLi9jb25maWcvY21zLWNvbmZpZyc7XG5pbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TWFwcGVyU2VydmljZSB7XG4gIG1pc3NpbmdDb21wb25lbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHByaXZhdGUgbG9hZGVkV2ViQ29tcG9uZW50czogeyBbcGF0aDogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQ21zQ29uZmlnLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByb3RlY3RlZCBkb2N1bWVudDogYW55LFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBwbGF0Zm9ybTogYW55XG4gICkge31cblxuICAvKipcbiAgICogQGRlc2NcbiAgICogcmV0dXJucyBhIHdlYiBjb21wb25lbnQgZm9yIHRoZSBDTVMgdHlwZWNvZGUuXG4gICAqXG4gICAqIFRoZSBtYXBwaW5nIG9mIENNUyBjb21wb25lbnRzIHRvIHdlYiBjb21wb25ldG5zIHJlcXVpcmVzIGEgbWFwcGluZy5cbiAgICogVGhpcyBpcyBjb25maWd1cmFibGUgd2hlbiB0aGUgbW9kdWxlIGlzIGxvYWRlZC5cbiAgICpcbiAgICogRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB7XG4gICAqICAgICAgJ0NNU0xpbmtDb21wb25lbnQnOiAnTGlua0NvbXBvbmVudCcsXG4gICAqICAgICAgJ1NpbXBsZVJlc3BvbnNpdmVCYW5uZXJDb21wb25lbnQnOiAnU2ltcGxlUmVzcG9uc2l2ZUJhbm5lckNvbXBvbmVudCcsXG4gICAqICAgICAgW2V0Yy5dXG4gICAqICB9XG4gICAqXG4gICAqIFRoZSB0eXBlIGNvZGVzIGFyZSBkeW5hbWljIHNpbmNlIHRoZXkgZGVwZW5kIG9uIHRoZSBpbXBsZW1lbnRhdGlvbi5cbiAgICogQ3VzdG9tZXIgd2lsbCBhZGQsIGV4dGVuZCBvciBpbmdvcmUgc3RhbmRhcmQgY29tcG9uZW50cy5cbiAgICpcbiAgICogQHBhcmFtIHR5cGVDb2RlIHRoZSBjb21wb25lbnQgdHlwZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFR5cGUodHlwZUNvZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgY29tcG9uZW50Q29uZmlnID0gdGhpcy5jb25maWcuY21zQ29tcG9uZW50c1t0eXBlQ29kZV07XG4gICAgaWYgKCFjb21wb25lbnRDb25maWcpIHtcbiAgICAgIGlmICghdGhpcy5taXNzaW5nQ29tcG9uZW50cy5pbmNsdWRlcyh0eXBlQ29kZSkpIHtcbiAgICAgICAgdGhpcy5taXNzaW5nQ29tcG9uZW50cy5wdXNoKHR5cGVDb2RlKTtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBObyBjb21wb25lbnQgaW1wbGVtZW50YXRpb24gZm91bmQgZm9yIHRoZSBDTVMgY29tcG9uZW50IHR5cGUgJyR7dHlwZUNvZGV9Jy5cXG5gLFxuICAgICAgICAgIGBNYWtlIHN1cmUgeW91IGltcGxlbWVudCBhIGNvbXBvbmVudCBhbmQgcmVnaXN0ZXIgaXQgaW4gdGhlIG1hcHBlci5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnRDb25maWcgPyBjb21wb25lbnRDb25maWcuc2VsZWN0b3IgOiBudWxsO1xuICB9XG5cbiAgZ2V0RmFjdG9yeUVudHJ5QnlDb2RlKHR5cGVDb2RlOiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IGFsaWFzID0gdGhpcy5nZXRUeXBlKHR5cGVDb2RlKTtcbiAgICBpZiAoIWFsaWFzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZhY3RvcnlFbnRyaWVzID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyWydfZmFjdG9yaWVzJ10uZW50cmllcygpXG4gICAgKTtcblxuICAgIGNvbnN0IGZhY3RvcnkgPSBmYWN0b3J5RW50cmllcy5maW5kKFxuICAgICAgKFssIHZhbHVlXTogYW55KSA9PiB2YWx1ZS5zZWxlY3RvciA9PT0gYWxpYXNcbiAgICApO1xuICAgIGlmICghZmFjdG9yeSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgTm8gY29tcG9uZW50IGZhY3RvcnkgZm91bmQgZm9yIHRoZSBDTVMgY29tcG9uZW50IHR5cGUgJyR7dHlwZUNvZGV9Jy5cXG5gLFxuICAgICAgICBgTWFrZSBzdXJlIHlvdSBhZGQgYSBjb21wb25lbnQgdG8gdGhlICdlbnRyeUNvbXBvbmVudHMnIGFycmF5IGluIHRoZSBOZ01vZHVsZS5gXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZmFjdG9yeTtcbiAgfVxuXG4gIGdldENvbXBvbmVudFR5cGVCeUNvZGUodHlwZUNvZGU6IHN0cmluZyk6IFR5cGU8YW55PiB7XG4gICAgY29uc3QgZmFjdG9yeUVudHJ5ID0gdGhpcy5nZXRGYWN0b3J5RW50cnlCeUNvZGUodHlwZUNvZGUpO1xuICAgIHJldHVybiBmYWN0b3J5RW50cnkgPyBmYWN0b3J5RW50cnlbMF0gOiBudWxsO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50RmFjdG9yeUJ5Q29kZSh0eXBlQ29kZTogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCBmYWN0b3J5RW50cnkgPSB0aGlzLmdldEZhY3RvcnlFbnRyeUJ5Q29kZSh0eXBlQ29kZSk7XG4gICAgcmV0dXJuIGZhY3RvcnlFbnRyeSA/IGZhY3RvcnlFbnRyeVsxXSA6IG51bGw7XG4gIH1cblxuICBpc1dlYkNvbXBvbmVudCh0eXBlQ29kZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICh0aGlzLmdldFR5cGUodHlwZUNvZGUpIHx8ICcnKS5pbmNsdWRlcygnIycpO1xuICB9XG5cbiAgaW5pdFdlYkNvbXBvbmVudChcbiAgICBjb21wb25lbnRUeXBlOiBzdHJpbmcsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IFtwYXRoLCBzZWxlY3Rvcl0gPSB0aGlzLmdldFR5cGUoY29tcG9uZW50VHlwZSkuc3BsaXQoJyMnKTtcblxuICAgICAgbGV0IHNjcmlwdCA9IHRoaXMubG9hZGVkV2ViQ29tcG9uZW50c1twYXRoXTtcblxuICAgICAgaWYgKCFzY3JpcHQpIHtcbiAgICAgICAgc2NyaXB0ID0gcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHRoaXMubG9hZGVkV2ViQ29tcG9uZW50c1twYXRoXSA9IHNjcmlwdDtcbiAgICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgcGF0aCk7XG4gICAgICAgIHJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZG9jdW1lbnQuYm9keSwgc2NyaXB0KTtcblxuICAgICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybSkpIHtcbiAgICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc2NyaXB0Lm9ubG9hZCkge1xuICAgICAgICAvLyBJZiBzY3JpcHQgaXMgc3RpbGwgbG9hZGluZyAoaGFzIG9ubG9hZCBjYWxsYmFjayBkZWZpbmVkKVxuICAgICAgICAvLyBhZGQgbmV3IGNhbGxiYWNrIGFuZCBjaGFpbiBpdCB3aXRoIHRoZSBleGlzdGluZyBvbmUuXG4gICAgICAgIC8vIE5lZWRlZCB0byBzdXBwb3J0IGxvYWRpbmcgbXVsdGlwbGUgY29tcG9uZW50cyBmcm9tIG9uZSBzY3JpcHRcbiAgICAgICAgY29uc3QgY2hhaW5lZE9ubG9hZCA9IHNjcmlwdC5vbmxvYWQ7XG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgY2hhaW5lZE9ubG9hZCgpO1xuICAgICAgICAgIHJlc29sdmUoc2VsZWN0b3IpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, ComponentFactoryResolver, Inject, PLATFORM_ID, } from '@angular/core';
import { CmsConfig } from '../config/cms-config';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
export class ComponentMapperService {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} config
     * @param {?} document
     * @param {?} platform
     */
    constructor(componentFactoryResolver, config, document, platform) {
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
     * @protected
     * @param {?} typeCode the component type
     * @return {?}
     */
    getType(typeCode) {
        /** @type {?} */
        const componentConfig = this.config.cmsComponents[typeCode];
        if (!componentConfig) {
            if (!this.missingComponents.includes(typeCode)) {
                this.missingComponents.push(typeCode);
                console.warn(`No component implementation found for the CMS component type '${typeCode}'.\n`, `Make sure you implement a component and register it in the mapper.`);
            }
        }
        return componentConfig ? componentConfig.selector : null;
    }
    /**
     * @param {?} typeCode
     * @return {?}
     */
    getFactoryEntryByCode(typeCode) {
        /** @type {?} */
        const alias = this.getType(typeCode);
        if (!alias) {
            return;
        }
        /** @type {?} */
        const factoryEntries = Array.from(this.componentFactoryResolver['_factories'].entries());
        /** @type {?} */
        const factory = factoryEntries.find(([, value]) => value.selector === alias);
        if (!factory) {
            console.warn(`No component factory found for the CMS component type '${typeCode}'.\n`, `Make sure you add a component to the 'entryComponents' array in the NgModule.`);
        }
        return factory;
    }
    /**
     * @param {?} typeCode
     * @return {?}
     */
    getComponentTypeByCode(typeCode) {
        /** @type {?} */
        const factoryEntry = this.getFactoryEntryByCode(typeCode);
        return factoryEntry ? factoryEntry[0] : null;
    }
    /**
     * @param {?} typeCode
     * @return {?}
     */
    getComponentFactoryByCode(typeCode) {
        /** @type {?} */
        const factoryEntry = this.getFactoryEntryByCode(typeCode);
        return factoryEntry ? factoryEntry[1] : null;
    }
    /**
     * @param {?} typeCode
     * @return {?}
     */
    isWebComponent(typeCode) {
        return (this.getType(typeCode) || '').includes('#');
    }
    /**
     * @param {?} componentType
     * @param {?} renderer
     * @return {?}
     */
    initWebComponent(componentType, renderer) {
        return new Promise(resolve => {
            const [path, selector] = this.getType(componentType).split('#');
            /** @type {?} */
            let script = this.loadedWebComponents[path];
            if (!script) {
                script = renderer.createElement('script');
                this.loadedWebComponents[path] = script;
                script.setAttribute('src', path);
                renderer.appendChild(this.document.body, script);
                if (isPlatformBrowser(this.platform)) {
                    script.onload = () => {
                        script.onload = null;
                    };
                }
            }
            if (script.onload) {
                // If script is still loading (has onload callback defined)
                // add new callback and chain it with the existing one.
                // Needed to support loading multiple components from one script
                /** @type {?} */
                const chainedOnload = script.onload;
                script.onload = () => {
                    chainedOnload();
                    resolve(selector);
                };
            }
            else {
                resolve(selector);
            }
        });
    }
}
ComponentMapperService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ComponentMapperService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: CmsConfig },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
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
     * @private
     */
    ComponentMapperService.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    ComponentMapperService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    ComponentMapperService.prototype.document;
    /**
     * @type {?}
     * @private
     */
    ComponentMapperService.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LW1hcHBlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9zZXJ2aWNlcy9jb21wb25lbnQtbWFwcGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBRVYsd0JBQXdCLEVBQ3hCLE1BQU0sRUFFTixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUc5RCxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7O0lBS2pDLFlBQ1Usd0JBQWtELEVBQ2xELE1BQWlCLEVBQ0MsUUFBYSxFQUNWLFFBQWE7UUFIbEMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ0MsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUNWLGFBQVEsR0FBUixRQUFRLENBQUs7UUFSNUMsc0JBQWlCLEdBQWEsRUFBRSxDQUFDO1FBRXpCLHdCQUFtQixHQUE0QixFQUFFLENBQUM7SUFPdkQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFzQk0sT0FBTyxDQUFDLFFBQWdCOztjQUMxQixlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzNELElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzlDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RDLE9BQU8sQ0FBQyxJQUFJLENBQ1YsaUVBQWlFLFFBQVEsTUFBTSxFQUMvRSxvRUFBb0Us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SDtpQkFBTTtnQkFDTCxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbkI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQXJIRixVQUFVOzs7O1lBUlQsd0JBQXdCO1lBS2pCLFNBQVM7NENBWWIsTUFBTSxTQUFDLFFBQVE7NENBQ2YsTUFBTSxTQUFDLFdBQVc7Ozs7SUFSckIsbURBQWlDOzs7OztJQUVqQyxxREFBMEQ7Ozs7O0lBR3hELDBEQUEwRDs7Ozs7SUFDMUQsd0NBQXlCOzs7OztJQUN6QiwwQ0FBdUM7Ozs7O0lBQ3ZDLDBDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIFR5cGUsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgSW5qZWN0LFxuICBSZW5kZXJlcjIsXG4gIFBMQVRGT1JNX0lELFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jbXMtY29uZmlnJztcbmltcG9ydCB7IERPQ1VNRU5ULCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRNYXBwZXJTZXJ2aWNlIHtcbiAgbWlzc2luZ0NvbXBvbmVudHM6IHN0cmluZ1tdID0gW107XG5cbiAgcHJpdmF0ZSBsb2FkZWRXZWJDb21wb25lbnRzOiB7IFtwYXRoOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBjb25maWc6IENtc0NvbmZpZyxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybTogYW55XG4gICkge31cblxuICAvKipcbiAgICogQGRlc2NcbiAgICogcmV0dXJucyBhIHdlYiBjb21wb25lbnQgZm9yIHRoZSBDTVMgdHlwZWNvZGUuXG4gICAqXG4gICAqIFRoZSBtYXBwaW5nIG9mIENNUyBjb21wb25lbnRzIHRvIHdlYiBjb21wb25ldG5zIHJlcXVpcmVzIGEgbWFwcGluZy5cbiAgICogVGhpcyBpcyBjb25maWd1cmFibGUgd2hlbiB0aGUgbW9kdWxlIGlzIGxvYWRlZC5cbiAgICpcbiAgICogRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB7XG4gICAqICAgICAgJ0NNU0xpbmtDb21wb25lbnQnOiAnTGlua0NvbXBvbmVudCcsXG4gICAqICAgICAgJ1NpbXBsZVJlc3BvbnNpdmVCYW5uZXJDb21wb25lbnQnOiAnU2ltcGxlUmVzcG9uc2l2ZUJhbm5lckNvbXBvbmVudCcsXG4gICAqICAgICAgW2V0Yy5dXG4gICAqICB9XG4gICAqXG4gICAqIFRoZSB0eXBlIGNvZGVzIGFyZSBkeW5hbWljIHNpbmNlIHRoZXkgZGVwZW5kIG9uIHRoZSBpbXBsZW1lbnRhdGlvbi5cbiAgICogQ3VzdG9tZXIgd2lsbCBhZGQsIGV4dGVuZCBvciBpbmdvcmUgc3RhbmRhcmQgY29tcG9uZW50cy5cbiAgICpcbiAgICogQHBhcmFtIHR5cGVDb2RlIHRoZSBjb21wb25lbnQgdHlwZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFR5cGUodHlwZUNvZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgY29tcG9uZW50Q29uZmlnID0gdGhpcy5jb25maWcuY21zQ29tcG9uZW50c1t0eXBlQ29kZV07XG4gICAgaWYgKCFjb21wb25lbnRDb25maWcpIHtcbiAgICAgIGlmICghdGhpcy5taXNzaW5nQ29tcG9uZW50cy5pbmNsdWRlcyh0eXBlQ29kZSkpIHtcbiAgICAgICAgdGhpcy5taXNzaW5nQ29tcG9uZW50cy5wdXNoKHR5cGVDb2RlKTtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBObyBjb21wb25lbnQgaW1wbGVtZW50YXRpb24gZm91bmQgZm9yIHRoZSBDTVMgY29tcG9uZW50IHR5cGUgJyR7dHlwZUNvZGV9Jy5cXG5gLFxuICAgICAgICAgIGBNYWtlIHN1cmUgeW91IGltcGxlbWVudCBhIGNvbXBvbmVudCBhbmQgcmVnaXN0ZXIgaXQgaW4gdGhlIG1hcHBlci5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnRDb25maWcgPyBjb21wb25lbnRDb25maWcuc2VsZWN0b3IgOiBudWxsO1xuICB9XG5cbiAgZ2V0RmFjdG9yeUVudHJ5QnlDb2RlKHR5cGVDb2RlOiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IGFsaWFzID0gdGhpcy5nZXRUeXBlKHR5cGVDb2RlKTtcbiAgICBpZiAoIWFsaWFzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZhY3RvcnlFbnRyaWVzID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyWydfZmFjdG9yaWVzJ10uZW50cmllcygpXG4gICAgKTtcblxuICAgIGNvbnN0IGZhY3RvcnkgPSBmYWN0b3J5RW50cmllcy5maW5kKFxuICAgICAgKFssIHZhbHVlXTogYW55KSA9PiB2YWx1ZS5zZWxlY3RvciA9PT0gYWxpYXNcbiAgICApO1xuICAgIGlmICghZmFjdG9yeSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgTm8gY29tcG9uZW50IGZhY3RvcnkgZm91bmQgZm9yIHRoZSBDTVMgY29tcG9uZW50IHR5cGUgJyR7dHlwZUNvZGV9Jy5cXG5gLFxuICAgICAgICBgTWFrZSBzdXJlIHlvdSBhZGQgYSBjb21wb25lbnQgdG8gdGhlICdlbnRyeUNvbXBvbmVudHMnIGFycmF5IGluIHRoZSBOZ01vZHVsZS5gXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZmFjdG9yeTtcbiAgfVxuXG4gIGdldENvbXBvbmVudFR5cGVCeUNvZGUodHlwZUNvZGU6IHN0cmluZyk6IFR5cGU8YW55PiB7XG4gICAgY29uc3QgZmFjdG9yeUVudHJ5ID0gdGhpcy5nZXRGYWN0b3J5RW50cnlCeUNvZGUodHlwZUNvZGUpO1xuICAgIHJldHVybiBmYWN0b3J5RW50cnkgPyBmYWN0b3J5RW50cnlbMF0gOiBudWxsO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50RmFjdG9yeUJ5Q29kZSh0eXBlQ29kZTogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCBmYWN0b3J5RW50cnkgPSB0aGlzLmdldEZhY3RvcnlFbnRyeUJ5Q29kZSh0eXBlQ29kZSk7XG4gICAgcmV0dXJuIGZhY3RvcnlFbnRyeSA/IGZhY3RvcnlFbnRyeVsxXSA6IG51bGw7XG4gIH1cblxuICBpc1dlYkNvbXBvbmVudCh0eXBlQ29kZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICh0aGlzLmdldFR5cGUodHlwZUNvZGUpIHx8ICcnKS5pbmNsdWRlcygnIycpO1xuICB9XG5cbiAgaW5pdFdlYkNvbXBvbmVudChcbiAgICBjb21wb25lbnRUeXBlOiBzdHJpbmcsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IFtwYXRoLCBzZWxlY3Rvcl0gPSB0aGlzLmdldFR5cGUoY29tcG9uZW50VHlwZSkuc3BsaXQoJyMnKTtcblxuICAgICAgbGV0IHNjcmlwdCA9IHRoaXMubG9hZGVkV2ViQ29tcG9uZW50c1twYXRoXTtcblxuICAgICAgaWYgKCFzY3JpcHQpIHtcbiAgICAgICAgc2NyaXB0ID0gcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHRoaXMubG9hZGVkV2ViQ29tcG9uZW50c1twYXRoXSA9IHNjcmlwdDtcbiAgICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgcGF0aCk7XG4gICAgICAgIHJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZG9jdW1lbnQuYm9keSwgc2NyaXB0KTtcblxuICAgICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybSkpIHtcbiAgICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc2NyaXB0Lm9ubG9hZCkge1xuICAgICAgICAvLyBJZiBzY3JpcHQgaXMgc3RpbGwgbG9hZGluZyAoaGFzIG9ubG9hZCBjYWxsYmFjayBkZWZpbmVkKVxuICAgICAgICAvLyBhZGQgbmV3IGNhbGxiYWNrIGFuZCBjaGFpbiBpdCB3aXRoIHRoZSBleGlzdGluZyBvbmUuXG4gICAgICAgIC8vIE5lZWRlZCB0byBzdXBwb3J0IGxvYWRpbmcgbXVsdGlwbGUgY29tcG9uZW50cyBmcm9tIG9uZSBzY3JpcHRcbiAgICAgICAgY29uc3QgY2hhaW5lZE9ubG9hZCA9IHNjcmlwdC5vbmxvYWQ7XG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgY2hhaW5lZE9ubG9hZCgpO1xuICAgICAgICAgIHJlc29sdmUoc2VsZWN0b3IpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
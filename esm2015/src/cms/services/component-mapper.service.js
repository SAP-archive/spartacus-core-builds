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
            if (this.missingComponents.indexOf(typeCode) === -1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LW1hcHBlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9zZXJ2aWNlcy9jb21wb25lbnQtbWFwcGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBRVYsd0JBQXdCLEVBQ3hCLE1BQU0sRUFFTixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUc5RCxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7O0lBS2pDLFlBQ1Usd0JBQWtELEVBQ2xELE1BQWlCLEVBQ0MsUUFBYSxFQUNWLFFBQWE7UUFIbEMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ0MsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUNWLGFBQVEsR0FBUixRQUFRLENBQUs7UUFSNUMsc0JBQWlCLEdBQWEsRUFBRSxDQUFDO1FBRXpCLHdCQUFtQixHQUE0QixFQUFFLENBQUM7SUFPdkQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFzQk0sT0FBTyxDQUFDLFFBQWdCOztjQUMxQixlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzNELElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDcEIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUNuRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLENBQUMsSUFBSSxDQUNWLGlFQUFpRSxRQUFRLE1BQU0sRUFD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QyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ25CO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFySEYsVUFBVTs7OztZQVJULHdCQUF3QjtZQUtqQixTQUFTOzRDQVliLE1BQU0sU0FBQyxRQUFROzRDQUNmLE1BQU0sU0FBQyxXQUFXOzs7O0lBUnJCLG1EQUFpQzs7Ozs7SUFFakMscURBQTBEOzs7OztJQUd4RCwwREFBMEQ7Ozs7O0lBQzFELHdDQUF5Qjs7Ozs7SUFDekIsMENBQXVDOzs7OztJQUN2QywwQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBUeXBlLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEluamVjdCxcbiAgUmVuZGVyZXIyLFxuICBQTEFURk9STV9JRCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb25maWcgfSBmcm9tICcuLi9jb25maWcvY21zLWNvbmZpZyc7XG5pbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TWFwcGVyU2VydmljZSB7XG4gIG1pc3NpbmdDb21wb25lbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHByaXZhdGUgbG9hZGVkV2ViQ29tcG9uZW50czogeyBbcGF0aDogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgY29uZmlnOiBDbXNDb25maWcsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm06IGFueVxuICApIHt9XG5cbiAgLyoqXG4gICAqIEBkZXNjXG4gICAqIHJldHVybnMgYSB3ZWIgY29tcG9uZW50IGZvciB0aGUgQ01TIHR5cGVjb2RlLlxuICAgKlxuICAgKiBUaGUgbWFwcGluZyBvZiBDTVMgY29tcG9uZW50cyB0byB3ZWIgY29tcG9uZXRucyByZXF1aXJlcyBhIG1hcHBpbmcuXG4gICAqIFRoaXMgaXMgY29uZmlndXJhYmxlIHdoZW4gdGhlIG1vZHVsZSBpcyBsb2FkZWQuXG4gICAqXG4gICAqIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAge1xuICAgKiAgICAgICdDTVNMaW5rQ29tcG9uZW50JzogJ0xpbmtDb21wb25lbnQnLFxuICAgKiAgICAgICdTaW1wbGVSZXNwb25zaXZlQmFubmVyQ29tcG9uZW50JzogJ1NpbXBsZVJlc3BvbnNpdmVCYW5uZXJDb21wb25lbnQnLFxuICAgKiAgICAgIFtldGMuXVxuICAgKiAgfVxuICAgKlxuICAgKiBUaGUgdHlwZSBjb2RlcyBhcmUgZHluYW1pYyBzaW5jZSB0aGV5IGRlcGVuZCBvbiB0aGUgaW1wbGVtZW50YXRpb24uXG4gICAqIEN1c3RvbWVyIHdpbGwgYWRkLCBleHRlbmQgb3IgaW5nb3JlIHN0YW5kYXJkIGNvbXBvbmVudHMuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlQ29kZSB0aGUgY29tcG9uZW50IHR5cGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXRUeXBlKHR5cGVDb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNvbXBvbmVudENvbmZpZyA9IHRoaXMuY29uZmlnLmNtc0NvbXBvbmVudHNbdHlwZUNvZGVdO1xuICAgIGlmICghY29tcG9uZW50Q29uZmlnKSB7XG4gICAgICBpZiAodGhpcy5taXNzaW5nQ29tcG9uZW50cy5pbmRleE9mKHR5cGVDb2RlKSA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5taXNzaW5nQ29tcG9uZW50cy5wdXNoKHR5cGVDb2RlKTtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBObyBjb21wb25lbnQgaW1wbGVtZW50YXRpb24gZm91bmQgZm9yIHRoZSBDTVMgY29tcG9uZW50IHR5cGUgJyR7dHlwZUNvZGV9Jy5cXG5gLFxuICAgICAgICAgIGBNYWtlIHN1cmUgeW91IGltcGxlbWVudCBhIGNvbXBvbmVudCBhbmQgcmVnaXN0ZXIgaXQgaW4gdGhlIG1hcHBlci5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnRDb25maWcgPyBjb21wb25lbnRDb25maWcuc2VsZWN0b3IgOiBudWxsO1xuICB9XG5cbiAgZ2V0RmFjdG9yeUVudHJ5QnlDb2RlKHR5cGVDb2RlOiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IGFsaWFzID0gdGhpcy5nZXRUeXBlKHR5cGVDb2RlKTtcbiAgICBpZiAoIWFsaWFzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZhY3RvcnlFbnRyaWVzID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyWydfZmFjdG9yaWVzJ10uZW50cmllcygpXG4gICAgKTtcblxuICAgIGNvbnN0IGZhY3RvcnkgPSBmYWN0b3J5RW50cmllcy5maW5kKFxuICAgICAgKFssIHZhbHVlXTogYW55KSA9PiB2YWx1ZS5zZWxlY3RvciA9PT0gYWxpYXNcbiAgICApO1xuICAgIGlmICghZmFjdG9yeSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgTm8gY29tcG9uZW50IGZhY3RvcnkgZm91bmQgZm9yIHRoZSBDTVMgY29tcG9uZW50IHR5cGUgJyR7dHlwZUNvZGV9Jy5cXG5gLFxuICAgICAgICBgTWFrZSBzdXJlIHlvdSBhZGQgYSBjb21wb25lbnQgdG8gdGhlICdlbnRyeUNvbXBvbmVudHMnIGFycmF5IGluIHRoZSBOZ01vZHVsZS5gXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZmFjdG9yeTtcbiAgfVxuXG4gIGdldENvbXBvbmVudFR5cGVCeUNvZGUodHlwZUNvZGU6IHN0cmluZyk6IFR5cGU8YW55PiB7XG4gICAgY29uc3QgZmFjdG9yeUVudHJ5ID0gdGhpcy5nZXRGYWN0b3J5RW50cnlCeUNvZGUodHlwZUNvZGUpO1xuICAgIHJldHVybiBmYWN0b3J5RW50cnkgPyBmYWN0b3J5RW50cnlbMF0gOiBudWxsO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50RmFjdG9yeUJ5Q29kZSh0eXBlQ29kZTogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCBmYWN0b3J5RW50cnkgPSB0aGlzLmdldEZhY3RvcnlFbnRyeUJ5Q29kZSh0eXBlQ29kZSk7XG4gICAgcmV0dXJuIGZhY3RvcnlFbnRyeSA/IGZhY3RvcnlFbnRyeVsxXSA6IG51bGw7XG4gIH1cblxuICBpc1dlYkNvbXBvbmVudCh0eXBlQ29kZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICh0aGlzLmdldFR5cGUodHlwZUNvZGUpIHx8ICcnKS5pbmNsdWRlcygnIycpO1xuICB9XG5cbiAgaW5pdFdlYkNvbXBvbmVudChcbiAgICBjb21wb25lbnRUeXBlOiBzdHJpbmcsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IFtwYXRoLCBzZWxlY3Rvcl0gPSB0aGlzLmdldFR5cGUoY29tcG9uZW50VHlwZSkuc3BsaXQoJyMnKTtcblxuICAgICAgbGV0IHNjcmlwdCA9IHRoaXMubG9hZGVkV2ViQ29tcG9uZW50c1twYXRoXTtcblxuICAgICAgaWYgKCFzY3JpcHQpIHtcbiAgICAgICAgc2NyaXB0ID0gcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHRoaXMubG9hZGVkV2ViQ29tcG9uZW50c1twYXRoXSA9IHNjcmlwdDtcbiAgICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgcGF0aCk7XG4gICAgICAgIHJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZG9jdW1lbnQuYm9keSwgc2NyaXB0KTtcblxuICAgICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybSkpIHtcbiAgICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc2NyaXB0Lm9ubG9hZCkge1xuICAgICAgICAvLyBJZiBzY3JpcHQgaXMgc3RpbGwgbG9hZGluZyAoaGFzIG9ubG9hZCBjYWxsYmFjayBkZWZpbmVkKVxuICAgICAgICAvLyBhZGQgbmV3IGNhbGxiYWNrIGFuZCBjaGFpbiBpdCB3aXRoIHRoZSBleGlzdGluZyBvbmUuXG4gICAgICAgIC8vIE5lZWRlZCB0byBzdXBwb3J0IGxvYWRpbmcgbXVsdGlwbGUgY29tcG9uZW50cyBmcm9tIG9uZSBzY3JpcHRcbiAgICAgICAgY29uc3QgY2hhaW5lZE9ubG9hZCA9IHNjcmlwdC5vbmxvYWQ7XG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgY2hhaW5lZE9ubG9hZCgpO1xuICAgICAgICAgIHJlc29sdmUoc2VsZWN0b3IpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
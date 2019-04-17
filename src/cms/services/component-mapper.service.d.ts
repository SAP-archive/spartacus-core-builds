import { Type, ComponentFactoryResolver, Renderer2 } from '@angular/core';
import { CmsConfig } from '../config/cms-config';
export declare class ComponentMapperService {
    private componentFactoryResolver;
    private config;
    private document;
    private platform;
    missingComponents: string[];
    private loadedWebComponents;
    constructor(componentFactoryResolver: ComponentFactoryResolver, config: CmsConfig, document: any, platform: any);
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
    protected getType(typeCode: string): string;
    getFactoryEntryByCode(typeCode: string): any;
    getComponentTypeByCode(typeCode: string): Type<any>;
    getComponentFactoryByCode(typeCode: string): any;
    isWebComponent(typeCode: string): boolean;
    initWebComponent(componentType: string, renderer: Renderer2): Promise<string>;
}

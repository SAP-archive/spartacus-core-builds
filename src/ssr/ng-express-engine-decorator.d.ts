import { NgModuleFactory, StaticProvider, Type } from '@angular/core';
/**
 * These are the allowed options for the engine
 */
export interface NgSetupOptions {
    bootstrap: Type<{}> | NgModuleFactory<{}>;
    providers?: StaticProvider[];
}
/**
 * These are the allowed options for the render
 */
export interface RenderOptions extends NgSetupOptions {
    req: {
        protocol: string;
        originalUrl: string;
        get: (_: string) => string;
    };
    res?: any;
    url?: string;
    document?: string;
}
export declare type NgExpressEngineInstance = (filePath: string, options: RenderOptions, callback: (err?: Error | null | undefined, html?: string | undefined) => void) => void;
export declare type NgExpressEngine = (setupOptions: NgSetupOptions) => NgExpressEngineInstance;
/**
 * The wrapper over the standard ngExpressEngine, that provides tokens for Spartacus
 * @param ngExpressEngine
 */
export declare class NgExpressEngineDecorator {
    /**
     * Returns the higher order ngExpressEngine with provided tokens for Spartacus
     *
     * @param ngExpressEngine
     */
    static get(ngExpressEngine: NgExpressEngine): NgExpressEngine;
}
/**
 * Returns Spartacus' providers to be passed to the Angular express engine (in SSR)
 *
 * @param options
 */
export declare function getServerRequestProviders(options: RenderOptions): StaticProvider[];

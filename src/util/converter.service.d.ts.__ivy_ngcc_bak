import { InjectionToken, Injector } from '@angular/core';
import { OperatorFunction } from 'rxjs';
/**
 * Converter is used to convert source data model to target data model.
 * By convention, we distinguish two flows:
 *   - *Normalize* is the conversion from backend models to UI models
 *   - *Serialize* is the conversion of UI models to backend models (in case of submitting data to the backend).
 *
 * Converters can be stacked together to to apply decoupled customizations
 */
export interface Converter<S, T> {
    /**
     * Convert converts source model to target model. Can use optional target parameter,
     * used in case of stacking multiple converters (for example, to implement populator pattern).
     *
     * @param source Source data model
     * @param target Optional, partially converted target model
     */
    convert(source: S, target?: T): T;
}
export declare class ConverterService {
    protected injector: Injector;
    constructor(injector: Injector);
    private converters;
    private getConverters;
    /**
     * Will return true if converters for specified token were provided
     */
    hasConverters<S, T>(injectionToken: InjectionToken<Converter<S, T>>): boolean;
    /**
     * Pipeable operator to apply converter logic in a observable stream
     */
    pipeable<S, T>(injectionToken: InjectionToken<Converter<S, T>>): OperatorFunction<S, T>;
    /**
     * Pipeable operator to apply converter logic in a observable stream to collection of items
     */
    pipeableMany<S, T>(injectionToken: InjectionToken<Converter<S, T>>): OperatorFunction<S[], T[]>;
    /**
     * Apply converter logic specified by injection token to source data
     */
    convert<S, T>(source: S, injectionToken: InjectionToken<Converter<S, T>>): T;
    /**
     * Apply converter logic specified by injection token to a collection
     */
    convertMany<S, T>(sources: S[], injectionToken: InjectionToken<Converter<S, T>>): T[];
    private convertSource;
}

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
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConverterService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydGVyLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY29udmVydGVyLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICdyeGpzJztcbi8qKlxuICogQ29udmVydGVyIGlzIHVzZWQgdG8gY29udmVydCBzb3VyY2UgZGF0YSBtb2RlbCB0byB0YXJnZXQgZGF0YSBtb2RlbC5cbiAqIEJ5IGNvbnZlbnRpb24sIHdlIGRpc3Rpbmd1aXNoIHR3byBmbG93czpcbiAqICAgLSAqTm9ybWFsaXplKiBpcyB0aGUgY29udmVyc2lvbiBmcm9tIGJhY2tlbmQgbW9kZWxzIHRvIFVJIG1vZGVsc1xuICogICAtICpTZXJpYWxpemUqIGlzIHRoZSBjb252ZXJzaW9uIG9mIFVJIG1vZGVscyB0byBiYWNrZW5kIG1vZGVscyAoaW4gY2FzZSBvZiBzdWJtaXR0aW5nIGRhdGEgdG8gdGhlIGJhY2tlbmQpLlxuICpcbiAqIENvbnZlcnRlcnMgY2FuIGJlIHN0YWNrZWQgdG9nZXRoZXIgdG8gdG8gYXBwbHkgZGVjb3VwbGVkIGN1c3RvbWl6YXRpb25zXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29udmVydGVyPFMsIFQ+IHtcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGNvbnZlcnRzIHNvdXJjZSBtb2RlbCB0byB0YXJnZXQgbW9kZWwuIENhbiB1c2Ugb3B0aW9uYWwgdGFyZ2V0IHBhcmFtZXRlcixcbiAgICAgKiB1c2VkIGluIGNhc2Ugb2Ygc3RhY2tpbmcgbXVsdGlwbGUgY29udmVydGVycyAoZm9yIGV4YW1wbGUsIHRvIGltcGxlbWVudCBwb3B1bGF0b3IgcGF0dGVybikuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc291cmNlIFNvdXJjZSBkYXRhIG1vZGVsXG4gICAgICogQHBhcmFtIHRhcmdldCBPcHRpb25hbCwgcGFydGlhbGx5IGNvbnZlcnRlZCB0YXJnZXQgbW9kZWxcbiAgICAgKi9cbiAgICBjb252ZXJ0KHNvdXJjZTogUywgdGFyZ2V0PzogVCk6IFQ7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDb252ZXJ0ZXJTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yO1xuICAgIGNvbnN0cnVjdG9yKGluamVjdG9yOiBJbmplY3Rvcik7XG4gICAgcHJpdmF0ZSBjb252ZXJ0ZXJzO1xuICAgIHByaXZhdGUgZ2V0Q29udmVydGVycztcbiAgICAvKipcbiAgICAgKiBXaWxsIHJldHVybiB0cnVlIGlmIGNvbnZlcnRlcnMgZm9yIHNwZWNpZmllZCB0b2tlbiB3ZXJlIHByb3ZpZGVkXG4gICAgICovXG4gICAgaGFzQ29udmVydGVyczxTLCBUPihpbmplY3Rpb25Ub2tlbjogSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPFMsIFQ+Pik6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogUGlwZWFibGUgb3BlcmF0b3IgdG8gYXBwbHkgY29udmVydGVyIGxvZ2ljIGluIGEgb2JzZXJ2YWJsZSBzdHJlYW1cbiAgICAgKi9cbiAgICBwaXBlYWJsZTxTLCBUPihpbmplY3Rpb25Ub2tlbjogSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPFMsIFQ+Pik6IE9wZXJhdG9yRnVuY3Rpb248UywgVD47XG4gICAgLyoqXG4gICAgICogUGlwZWFibGUgb3BlcmF0b3IgdG8gYXBwbHkgY29udmVydGVyIGxvZ2ljIGluIGEgb2JzZXJ2YWJsZSBzdHJlYW0gdG8gY29sbGVjdGlvbiBvZiBpdGVtc1xuICAgICAqL1xuICAgIHBpcGVhYmxlTWFueTxTLCBUPihpbmplY3Rpb25Ub2tlbjogSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPFMsIFQ+Pik6IE9wZXJhdG9yRnVuY3Rpb248U1tdLCBUW10+O1xuICAgIC8qKlxuICAgICAqIEFwcGx5IGNvbnZlcnRlciBsb2dpYyBzcGVjaWZpZWQgYnkgaW5qZWN0aW9uIHRva2VuIHRvIHNvdXJjZSBkYXRhXG4gICAgICovXG4gICAgY29udmVydDxTLCBUPihzb3VyY2U6IFMsIGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+KTogVDtcbiAgICAvKipcbiAgICAgKiBBcHBseSBjb252ZXJ0ZXIgbG9naWMgc3BlY2lmaWVkIGJ5IGluamVjdGlvbiB0b2tlbiB0byBhIGNvbGxlY3Rpb25cbiAgICAgKi9cbiAgICBjb252ZXJ0TWFueTxTLCBUPihzb3VyY2VzOiBTW10sIGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+KTogVFtdO1xuICAgIHByaXZhdGUgY29udmVydFNvdXJjZTtcbn1cbiJdfQ==
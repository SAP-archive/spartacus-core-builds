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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConverterService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydGVyLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY29udmVydGVyLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJ3J4anMnO1xuLyoqXG4gKiBDb252ZXJ0ZXIgaXMgdXNlZCB0byBjb252ZXJ0IHNvdXJjZSBkYXRhIG1vZGVsIHRvIHRhcmdldCBkYXRhIG1vZGVsLlxuICogQnkgY29udmVudGlvbiwgd2UgZGlzdGluZ3Vpc2ggdHdvIGZsb3dzOlxuICogICAtICpOb3JtYWxpemUqIGlzIHRoZSBjb252ZXJzaW9uIGZyb20gYmFja2VuZCBtb2RlbHMgdG8gVUkgbW9kZWxzXG4gKiAgIC0gKlNlcmlhbGl6ZSogaXMgdGhlIGNvbnZlcnNpb24gb2YgVUkgbW9kZWxzIHRvIGJhY2tlbmQgbW9kZWxzIChpbiBjYXNlIG9mIHN1Ym1pdHRpbmcgZGF0YSB0byB0aGUgYmFja2VuZCkuXG4gKlxuICogQ29udmVydGVycyBjYW4gYmUgc3RhY2tlZCB0b2dldGhlciB0byB0byBhcHBseSBkZWNvdXBsZWQgY3VzdG9taXphdGlvbnNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb252ZXJ0ZXI8UywgVD4ge1xuICAgIC8qKlxuICAgICAqIENvbnZlcnQgY29udmVydHMgc291cmNlIG1vZGVsIHRvIHRhcmdldCBtb2RlbC4gQ2FuIHVzZSBvcHRpb25hbCB0YXJnZXQgcGFyYW1ldGVyLFxuICAgICAqIHVzZWQgaW4gY2FzZSBvZiBzdGFja2luZyBtdWx0aXBsZSBjb252ZXJ0ZXJzIChmb3IgZXhhbXBsZSwgdG8gaW1wbGVtZW50IHBvcHVsYXRvciBwYXR0ZXJuKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzb3VyY2UgU291cmNlIGRhdGEgbW9kZWxcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IE9wdGlvbmFsLCBwYXJ0aWFsbHkgY29udmVydGVkIHRhcmdldCBtb2RlbFxuICAgICAqL1xuICAgIGNvbnZlcnQoc291cmNlOiBTLCB0YXJnZXQ/OiBUKTogVDtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENvbnZlcnRlclNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3I7XG4gICAgY29uc3RydWN0b3IoaW5qZWN0b3I6IEluamVjdG9yKTtcbiAgICBwcml2YXRlIGNvbnZlcnRlcnM7XG4gICAgcHJpdmF0ZSBnZXRDb252ZXJ0ZXJzO1xuICAgIC8qKlxuICAgICAqIFdpbGwgcmV0dXJuIHRydWUgaWYgY29udmVydGVycyBmb3Igc3BlY2lmaWVkIHRva2VuIHdlcmUgcHJvdmlkZWRcbiAgICAgKi9cbiAgICBoYXNDb252ZXJ0ZXJzPFMsIFQ+KGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+KTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBQaXBlYWJsZSBvcGVyYXRvciB0byBhcHBseSBjb252ZXJ0ZXIgbG9naWMgaW4gYSBvYnNlcnZhYmxlIHN0cmVhbVxuICAgICAqL1xuICAgIHBpcGVhYmxlPFMsIFQ+KGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+KTogT3BlcmF0b3JGdW5jdGlvbjxTLCBUPjtcbiAgICAvKipcbiAgICAgKiBQaXBlYWJsZSBvcGVyYXRvciB0byBhcHBseSBjb252ZXJ0ZXIgbG9naWMgaW4gYSBvYnNlcnZhYmxlIHN0cmVhbSB0byBjb2xsZWN0aW9uIG9mIGl0ZW1zXG4gICAgICovXG4gICAgcGlwZWFibGVNYW55PFMsIFQ+KGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+KTogT3BlcmF0b3JGdW5jdGlvbjxTW10sIFRbXT47XG4gICAgLyoqXG4gICAgICogQXBwbHkgY29udmVydGVyIGxvZ2ljIHNwZWNpZmllZCBieSBpbmplY3Rpb24gdG9rZW4gdG8gc291cmNlIGRhdGFcbiAgICAgKi9cbiAgICBjb252ZXJ0PFMsIFQ+KHNvdXJjZTogUywgaW5qZWN0aW9uVG9rZW46IEluamVjdGlvblRva2VuPENvbnZlcnRlcjxTLCBUPj4pOiBUO1xuICAgIC8qKlxuICAgICAqIEFwcGx5IGNvbnZlcnRlciBsb2dpYyBzcGVjaWZpZWQgYnkgaW5qZWN0aW9uIHRva2VuIHRvIGEgY29sbGVjdGlvblxuICAgICAqL1xuICAgIGNvbnZlcnRNYW55PFMsIFQ+KHNvdXJjZXM6IFNbXSwgaW5qZWN0aW9uVG9rZW46IEluamVjdGlvblRva2VuPENvbnZlcnRlcjxTLCBUPj4pOiBUW107XG4gICAgcHJpdmF0ZSBjb252ZXJ0U291cmNlO1xufVxuIl19
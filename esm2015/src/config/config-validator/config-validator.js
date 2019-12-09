/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export const ConfigValidatorToken = new InjectionToken('ConfigurationValidator');
/**
 * Use to probide config validation at app bootstrap (when all config chunks are merged)
 *
 * @param {?} configValidator
 * @return {?}
 */
export function provideConfigValidator(configValidator) {
    return {
        provide: ConfigValidatorToken,
        useValue: configValidator,
        multi: true,
    };
}
/**
 * @param {?} config
 * @param {?} configValidators
 * @return {?}
 */
export function validateConfig(config, configValidators) {
    for (const validate of configValidators) {
        /** @type {?} */
        const warning = validate(config);
        if (warning) {
            console.warn(warning);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvY29uZmlnLXZhbGlkYXRvci9jb25maWctdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFZLE1BQU0sZUFBZSxDQUFDOztBQUV6RCxNQUFNLE9BQU8sb0JBQW9CLEdBQUcsSUFBSSxjQUFjLENBQ3BELHdCQUF3QixDQUN6Qjs7Ozs7OztBQWNELE1BQU0sVUFBVSxzQkFBc0IsQ0FDcEMsZUFBZ0M7SUFFaEMsT0FBTztRQUNMLE9BQU8sRUFBRSxvQkFBb0I7UUFDN0IsUUFBUSxFQUFFLGVBQWU7UUFDekIsS0FBSyxFQUFFLElBQUk7S0FDWixDQUFDO0FBQ0osQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FDNUIsTUFBVyxFQUNYLGdCQUFtQztJQUVuQyxLQUFLLE1BQU0sUUFBUSxJQUFJLGdCQUFnQixFQUFFOztjQUNqQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdkI7S0FDRjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IENvbmZpZ1ZhbGlkYXRvclRva2VuID0gbmV3IEluamVjdGlvblRva2VuKFxuICAnQ29uZmlndXJhdGlvblZhbGlkYXRvcidcbik7XG5cbi8qKlxuICogQ29uZmlnVmFsaWRhdG9yIGlzIHVzZWQgdG8gdmFsaWRhdGUgY29uZmlnIGFuZCBkaXNwbGF5IHdhcm5pbmcgbWVzc2FnZXMgaW4gZGV2ZWxvcG1lbnQgbW9kZS5cbiAqXG4gKiBJbiBjYXNlIG9mIGZhaWxlZCB2YWxpZGF0aW9uLCBzaG91bGQgcmV0dXJuIGEgc3RyaW5nIHdpdGggZXJyb3IgbWVzc2FnZS5cbiAqL1xuZXhwb3J0IHR5cGUgQ29uZmlnVmFsaWRhdG9yID0gKGNvbmZpZzogYW55KSA9PiBzdHJpbmcgfCB2b2lkO1xuXG4vKipcbiAqIFVzZSB0byBwcm9iaWRlIGNvbmZpZyB2YWxpZGF0aW9uIGF0IGFwcCBib290c3RyYXAgKHdoZW4gYWxsIGNvbmZpZyBjaHVua3MgYXJlIG1lcmdlZClcbiAqXG4gKiBAcGFyYW0gY29uZmlnVmFsaWRhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQ29uZmlnVmFsaWRhdG9yKFxuICBjb25maWdWYWxpZGF0b3I6IENvbmZpZ1ZhbGlkYXRvclxuKTogUHJvdmlkZXIge1xuICByZXR1cm4ge1xuICAgIHByb3ZpZGU6IENvbmZpZ1ZhbGlkYXRvclRva2VuLFxuICAgIHVzZVZhbHVlOiBjb25maWdWYWxpZGF0b3IsXG4gICAgbXVsdGk6IHRydWUsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUNvbmZpZyhcbiAgY29uZmlnOiBhbnksXG4gIGNvbmZpZ1ZhbGlkYXRvcnM6IENvbmZpZ1ZhbGlkYXRvcltdXG4pIHtcbiAgZm9yIChjb25zdCB2YWxpZGF0ZSBvZiBjb25maWdWYWxpZGF0b3JzKSB7XG4gICAgY29uc3Qgd2FybmluZyA9IHZhbGlkYXRlKGNvbmZpZyk7XG4gICAgaWYgKHdhcm5pbmcpIHtcbiAgICAgIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
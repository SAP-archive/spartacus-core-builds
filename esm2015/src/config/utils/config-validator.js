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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvdXRpbHMvY29uZmlnLXZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQzs7QUFFekQsTUFBTSxPQUFPLG9CQUFvQixHQUFHLElBQUksY0FBYyxDQUNwRCx3QkFBd0IsQ0FDekI7Ozs7Ozs7QUFjRCxNQUFNLFVBQVUsc0JBQXNCLENBQ3BDLGVBQWdDO0lBRWhDLE9BQU87UUFDTCxPQUFPLEVBQUUsb0JBQW9CO1FBQzdCLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLEtBQUssRUFBRSxJQUFJO0tBQ1osQ0FBQztBQUNKLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQzVCLE1BQVcsRUFDWCxnQkFBbUM7SUFFbkMsS0FBSyxNQUFNLFFBQVEsSUFBSSxnQkFBZ0IsRUFBRTs7Y0FDakMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZCO0tBQ0Y7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBDb25maWdWYWxpZGF0b3JUb2tlbiA9IG5ldyBJbmplY3Rpb25Ub2tlbihcbiAgJ0NvbmZpZ3VyYXRpb25WYWxpZGF0b3InXG4pO1xuXG4vKipcbiAqIENvbmZpZ1ZhbGlkYXRvciBpcyB1c2VkIHRvIHZhbGlkYXRlIGNvbmZpZyBhbmQgZGlzcGxheSB3YXJuaW5nIG1lc3NhZ2VzIGluIGRldmVsb3BtZW50IG1vZGUuXG4gKlxuICogSW4gY2FzZSBvZiBmYWlsZWQgdmFsaWRhdGlvbiwgc2hvdWxkIHJldHVybiBhIHN0cmluZyB3aXRoIGVycm9yIG1lc3NhZ2UuXG4gKi9cbmV4cG9ydCB0eXBlIENvbmZpZ1ZhbGlkYXRvciA9IChjb25maWc6IGFueSkgPT4gc3RyaW5nIHwgdm9pZDtcblxuLyoqXG4gKiBVc2UgdG8gcHJvYmlkZSBjb25maWcgdmFsaWRhdGlvbiBhdCBhcHAgYm9vdHN0cmFwICh3aGVuIGFsbCBjb25maWcgY2h1bmtzIGFyZSBtZXJnZWQpXG4gKlxuICogQHBhcmFtIGNvbmZpZ1ZhbGlkYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNvbmZpZ1ZhbGlkYXRvcihcbiAgY29uZmlnVmFsaWRhdG9yOiBDb25maWdWYWxpZGF0b3Jcbik6IFByb3ZpZGVyIHtcbiAgcmV0dXJuIHtcbiAgICBwcm92aWRlOiBDb25maWdWYWxpZGF0b3JUb2tlbixcbiAgICB1c2VWYWx1ZTogY29uZmlnVmFsaWRhdG9yLFxuICAgIG11bHRpOiB0cnVlLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVDb25maWcoXG4gIGNvbmZpZzogYW55LFxuICBjb25maWdWYWxpZGF0b3JzOiBDb25maWdWYWxpZGF0b3JbXVxuKSB7XG4gIGZvciAoY29uc3QgdmFsaWRhdGUgb2YgY29uZmlnVmFsaWRhdG9ycykge1xuICAgIGNvbnN0IHdhcm5pbmcgPSB2YWxpZGF0ZShjb25maWcpO1xuICAgIGlmICh3YXJuaW5nKSB7XG4gICAgICBjb25zb2xlLndhcm4od2FybmluZyk7XG4gICAgfVxuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { InjectionToken } from '@angular/core';
/** @type {?} */
export var ConfigValidatorToken = new InjectionToken('ConfigurationValidator');
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
    var e_1, _a;
    try {
        for (var configValidators_1 = tslib_1.__values(configValidators), configValidators_1_1 = configValidators_1.next(); !configValidators_1_1.done; configValidators_1_1 = configValidators_1.next()) {
            var validate = configValidators_1_1.value;
            /** @type {?} */
            var warning = validate(config);
            if (warning) {
                console.warn(warning);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (configValidators_1_1 && !configValidators_1_1.done && (_a = configValidators_1.return)) _a.call(configValidators_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvdXRpbHMvY29uZmlnLXZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7O0FBRXpELE1BQU0sS0FBTyxvQkFBb0IsR0FBRyxJQUFJLGNBQWMsQ0FDcEQsd0JBQXdCLENBQ3pCOzs7Ozs7O0FBY0QsTUFBTSxVQUFVLHNCQUFzQixDQUNwQyxlQUFnQztJQUVoQyxPQUFPO1FBQ0wsT0FBTyxFQUFFLG9CQUFvQjtRQUM3QixRQUFRLEVBQUUsZUFBZTtRQUN6QixLQUFLLEVBQUUsSUFBSTtLQUNaLENBQUM7QUFDSixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUM1QixNQUFXLEVBQ1gsZ0JBQW1DOzs7UUFFbkMsS0FBdUIsSUFBQSxxQkFBQSxpQkFBQSxnQkFBZ0IsQ0FBQSxrREFBQSxnRkFBRTtZQUFwQyxJQUFNLFFBQVEsNkJBQUE7O2dCQUNYLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2hDLElBQUksT0FBTyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdkI7U0FDRjs7Ozs7Ozs7O0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgQ29uZmlnVmFsaWRhdG9yVG9rZW4gPSBuZXcgSW5qZWN0aW9uVG9rZW4oXG4gICdDb25maWd1cmF0aW9uVmFsaWRhdG9yJ1xuKTtcblxuLyoqXG4gKiBDb25maWdWYWxpZGF0b3IgaXMgdXNlZCB0byB2YWxpZGF0ZSBjb25maWcgYW5kIGRpc3BsYXkgd2FybmluZyBtZXNzYWdlcyBpbiBkZXZlbG9wbWVudCBtb2RlLlxuICpcbiAqIEluIGNhc2Ugb2YgZmFpbGVkIHZhbGlkYXRpb24sIHNob3VsZCByZXR1cm4gYSBzdHJpbmcgd2l0aCBlcnJvciBtZXNzYWdlLlxuICovXG5leHBvcnQgdHlwZSBDb25maWdWYWxpZGF0b3IgPSAoY29uZmlnOiBhbnkpID0+IHN0cmluZyB8IHZvaWQ7XG5cbi8qKlxuICogVXNlIHRvIHByb2JpZGUgY29uZmlnIHZhbGlkYXRpb24gYXQgYXBwIGJvb3RzdHJhcCAod2hlbiBhbGwgY29uZmlnIGNodW5rcyBhcmUgbWVyZ2VkKVxuICpcbiAqIEBwYXJhbSBjb25maWdWYWxpZGF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb25maWdWYWxpZGF0b3IoXG4gIGNvbmZpZ1ZhbGlkYXRvcjogQ29uZmlnVmFsaWRhdG9yXG4pOiBQcm92aWRlciB7XG4gIHJldHVybiB7XG4gICAgcHJvdmlkZTogQ29uZmlnVmFsaWRhdG9yVG9rZW4sXG4gICAgdXNlVmFsdWU6IGNvbmZpZ1ZhbGlkYXRvcixcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQ29uZmlnKFxuICBjb25maWc6IGFueSxcbiAgY29uZmlnVmFsaWRhdG9yczogQ29uZmlnVmFsaWRhdG9yW11cbikge1xuICBmb3IgKGNvbnN0IHZhbGlkYXRlIG9mIGNvbmZpZ1ZhbGlkYXRvcnMpIHtcbiAgICBjb25zdCB3YXJuaW5nID0gdmFsaWRhdGUoY29uZmlnKTtcbiAgICBpZiAod2FybmluZykge1xuICAgICAgY29uc29sZS53YXJuKHdhcm5pbmcpO1xuICAgIH1cbiAgfVxufVxuIl19
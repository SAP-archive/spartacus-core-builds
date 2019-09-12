/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} key
 * @param {?=} options
 * @return {?}
 */
export function mockTranslate(key, options = {}) {
    /** @type {?} */
    const optionsString = Object.keys(options)
        .sort()
        .map((/**
     * @param {?} optionName
     * @return {?}
     */
    optionName => `${optionName}:${options[optionName]}`))
        .join(' ');
    return optionsString ? `${key} ${optionsString}` : key;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay10cmFuc2xhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi90ZXN0aW5nL21vY2stdHJhbnNsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE1BQU0sVUFBVSxhQUFhLENBQUMsR0FBVyxFQUFFLFVBQWUsRUFBRTs7VUFDcEQsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZDLElBQUksRUFBRTtTQUNOLEdBQUc7Ozs7SUFBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFDO1NBQ3pELElBQUksQ0FBQyxHQUFHLENBQUM7SUFDWixPQUFPLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUN6RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIG1vY2tUcmFuc2xhdGUoa2V5OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KSB7XG4gIGNvbnN0IG9wdGlvbnNTdHJpbmcgPSBPYmplY3Qua2V5cyhvcHRpb25zKVxuICAgIC5zb3J0KClcbiAgICAubWFwKG9wdGlvbk5hbWUgPT4gYCR7b3B0aW9uTmFtZX06JHtvcHRpb25zW29wdGlvbk5hbWVdfWApXG4gICAgLmpvaW4oJyAnKTtcbiAgcmV0dXJuIG9wdGlvbnNTdHJpbmcgPyBgJHtrZXl9ICR7b3B0aW9uc1N0cmluZ31gIDoga2V5O1xufVxuIl19
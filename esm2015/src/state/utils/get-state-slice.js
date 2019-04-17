/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} state
 * @param {?} keys
 * @return {?}
 */
export function getStateSlice(state, keys) {
    return Object.keys(keys).reduce((acc, key) => {
        /** @type {?} */
        const keyValue = keys[key];
        if (state.hasOwnProperty(key)) {
            if (typeof keyValue === 'object') {
                acc[key] = getStateSlice(state[key], keyValue);
            }
            else if (keyValue) {
                acc[key] = state[key];
            }
        }
        return acc;
    }, {});
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXN0YXRlLXNsaWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3V0aWxzL2dldC1zdGF0ZS1zbGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQVUsRUFBRSxJQUFZO0lBQ3BELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7O2NBQ3JDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzFCLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtnQkFDaEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDaEQ7aUJBQU0sSUFBSSxRQUFRLEVBQUU7Z0JBQ25CLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkI7U0FDRjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0ZVNsaWNlKHN0YXRlOiBhbnksIGtleXM6IG9iamVjdCk6IGFueSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhrZXlzKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgY29uc3Qga2V5VmFsdWUgPSBrZXlzW2tleV07XG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGlmICh0eXBlb2Yga2V5VmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGFjY1trZXldID0gZ2V0U3RhdGVTbGljZShzdGF0ZVtrZXldLCBrZXlWYWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGtleVZhbHVlKSB7XG4gICAgICAgIGFjY1trZXldID0gc3RhdGVba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufVxuIl19
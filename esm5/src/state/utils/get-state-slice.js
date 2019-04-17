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
    return Object.keys(keys).reduce(function (acc, key) {
        /** @type {?} */
        var keyValue = keys[key];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXN0YXRlLXNsaWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3V0aWxzL2dldC1zdGF0ZS1zbGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQVUsRUFBRSxJQUFZO0lBQ3BELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRzs7WUFDakMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDMUIsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO2dCQUNoQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUNoRDtpQkFBTSxJQUFJLFFBQVEsRUFBRTtnQkFDbkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QjtTQUNGO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDVCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRlU2xpY2Uoc3RhdGU6IGFueSwga2V5czogb2JqZWN0KTogYW55IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGtleXMpLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBjb25zdCBrZXlWYWx1ZSA9IGtleXNba2V5XTtcbiAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgaWYgKHR5cGVvZiBrZXlWYWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYWNjW2tleV0gPSBnZXRTdGF0ZVNsaWNlKHN0YXRlW2tleV0sIGtleVZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5VmFsdWUpIHtcbiAgICAgICAgYWNjW2tleV0gPSBzdGF0ZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG4iXX0=
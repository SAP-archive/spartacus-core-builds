/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { initialLoaderState, loaderReducer } from '../loader/loader.reducer';
/**
 * Higher order reducer designed to add scope support for loader reducer
 *
 * For backward compatibility, we accommodate scopes alongside current
 * loading/error/success/value flags, thus those names can't be used as scope
 * names.
 *
 * TODO: Improve, issue #5445
 *
 * @template T
 * @param {?} entityType
 * @param {?=} reducer
 * @return {?}
 */
export function scopedLoaderReducer(entityType, reducer) {
    /** @type {?} */
    var loader = loaderReducer(entityType, reducer);
    return (/**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function (state, action) {
        var _a;
        if (state === void 0) { state = initialLoaderState; }
        if (action &&
            action.meta &&
            action.meta.entityType === entityType &&
            action.meta.scope) {
            return tslib_1.__assign({}, state, (_a = {}, _a[action.meta.scope] = loader(state[action.meta.scope], action), _a));
        }
        else {
            return loader(state, action);
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcGVkLWxvYWRlci5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3V0aWxzL3Njb3BlZC1sb2FkZXIvc2NvcGVkLWxvYWRlci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFrQjdFLE1BQU0sVUFBVSxtQkFBbUIsQ0FDakMsVUFBa0IsRUFDbEIsT0FBeUM7O1FBS25DLE1BQU0sR0FBRyxhQUFhLENBQUksVUFBVSxFQUFFLE9BQU8sQ0FBQztJQUVwRDs7Ozs7SUFBTyxVQUNMLEtBQWlFLEVBQ2pFLE1BQWdDOztRQURoQyxzQkFBQSxFQUFBLDBCQUFpRTtRQUdqRSxJQUNFLE1BQU07WUFDTixNQUFNLENBQUMsSUFBSTtZQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVU7WUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQ2pCO1lBQ0EsNEJBQ0ssS0FBSyxlQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxNQUFNLENBQUMsT0FDN0Q7U0FDSDthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxMb2FkZXJTdGF0ZSwgbG9hZGVyUmVkdWNlciB9IGZyb20gJy4uL2xvYWRlci9sb2FkZXIucmVkdWNlcic7XG5pbXBvcnQgeyBFbnRpdHlTY29wZWRMb2FkZXJBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L3N0b3JlL2FjdGlvbnMvcHJvZHVjdC5hY3Rpb24nO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IFNjb3BlZExvYWRlclN0YXRlIH0gZnJvbSAnLi9zY29wZWQtbG9hZGVyLnN0YXRlJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuLyoqXG4gKiBIaWdoZXIgb3JkZXIgcmVkdWNlciBkZXNpZ25lZCB0byBhZGQgc2NvcGUgc3VwcG9ydCBmb3IgbG9hZGVyIHJlZHVjZXJcbiAqXG4gKiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgd2UgYWNjb21tb2RhdGUgc2NvcGVzIGFsb25nc2lkZSBjdXJyZW50XG4gKiBsb2FkaW5nL2Vycm9yL3N1Y2Nlc3MvdmFsdWUgZmxhZ3MsIHRodXMgdGhvc2UgbmFtZXMgY2FuJ3QgYmUgdXNlZCBhcyBzY29wZVxuICogbmFtZXMuXG4gKlxuICogVE9ETzogSW1wcm92ZSwgaXNzdWUgIzU0NDVcbiAqXG4gKiBAcGFyYW0gZW50aXR5VHlwZVxuICogQHBhcmFtIHJlZHVjZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjb3BlZExvYWRlclJlZHVjZXI8VD4oXG4gIGVudGl0eVR5cGU6IHN0cmluZyxcbiAgcmVkdWNlcj86IChzdGF0ZTogVCwgYWN0aW9uOiBBY3Rpb24pID0+IFRcbik6IChcbiAgc3RhdGU6IFNjb3BlZExvYWRlclN0YXRlPFQ+IHwgTG9hZGVyU3RhdGU8VD4sXG4gIGFjdGlvbjogRW50aXR5U2NvcGVkTG9hZGVyQWN0aW9uXG4pID0+IFNjb3BlZExvYWRlclN0YXRlPFQ+IHwgTG9hZGVyU3RhdGU8VD4ge1xuICBjb25zdCBsb2FkZXIgPSBsb2FkZXJSZWR1Y2VyPFQ+KGVudGl0eVR5cGUsIHJlZHVjZXIpO1xuXG4gIHJldHVybiAoXG4gICAgc3RhdGU6IFNjb3BlZExvYWRlclN0YXRlPFQ+IHwgTG9hZGVyU3RhdGU8VD4gPSBpbml0aWFsTG9hZGVyU3RhdGUsXG4gICAgYWN0aW9uOiBFbnRpdHlTY29wZWRMb2FkZXJBY3Rpb25cbiAgKTogU2NvcGVkTG9hZGVyU3RhdGU8VD4gfCBMb2FkZXJTdGF0ZTxUPiA9PiB7XG4gICAgaWYgKFxuICAgICAgYWN0aW9uICYmXG4gICAgICBhY3Rpb24ubWV0YSAmJlxuICAgICAgYWN0aW9uLm1ldGEuZW50aXR5VHlwZSA9PT0gZW50aXR5VHlwZSAmJlxuICAgICAgYWN0aW9uLm1ldGEuc2NvcGVcbiAgICApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBbYWN0aW9uLm1ldGEuc2NvcGVdOiBsb2FkZXIoc3RhdGVbYWN0aW9uLm1ldGEuc2NvcGVdLCBhY3Rpb24pLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGxvYWRlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICB9XG4gIH07XG59XG4iXX0=
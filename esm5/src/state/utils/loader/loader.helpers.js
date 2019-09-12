/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { filter } from 'rxjs/operators';
/**
 * @param {?} entityType
 * @return {?}
 */
export function ofLoaderLoad(entityType) {
    return filter((/**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        return action.meta &&
            action.meta.loader &&
            action.meta.entityType === entityType &&
            action.meta.loader.load;
    }));
}
/**
 * @param {?} entityType
 * @return {?}
 */
export function ofLoaderFail(entityType) {
    return filter((/**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        return action.meta &&
            action.meta.loader &&
            action.meta.entityType === entityType &&
            action.meta.loader.error;
    }));
}
/**
 * @param {?} entityType
 * @return {?}
 */
export function ofLoaderSuccess(entityType) {
    return filter((/**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        return action.meta &&
            action.meta.loader &&
            action.meta.entityType === entityType &&
            !action.meta.loader.load &&
            !action.meta.loader.error;
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmhlbHBlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBS3hDLE1BQU0sVUFBVSxZQUFZLENBQzFCLFVBQWtCO0lBRWxCLE9BQU8sTUFBTTs7OztJQUNYLFVBQUMsTUFBd0I7UUFDdkIsT0FBQSxNQUFNLENBQUMsSUFBSTtZQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVO1lBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7SUFIdkIsQ0FHdUIsRUFDMUIsQ0FBQztBQUNKLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FDMUIsVUFBa0I7SUFFbEIsT0FBTyxNQUFNOzs7O0lBQ1gsVUFBQyxNQUF3QjtRQUN2QixPQUFBLE1BQU0sQ0FBQyxJQUFJO1lBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVU7WUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztJQUh4QixDQUd3QixFQUMzQixDQUFDO0FBQ0osQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUM3QixVQUFrQjtJQUVsQixPQUFPLE1BQU07Ozs7SUFDWCxVQUFDLE1BQXdCO1FBQ3ZCLE9BQUEsTUFBTSxDQUFDLElBQUk7WUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVTtZQUNyQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7WUFDeEIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO0lBSnpCLENBSXlCLEVBQzVCLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBFbnRpdHlMb2FkQWN0aW9uIH0gZnJvbSAnLi4vZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9mTG9hZGVyTG9hZChcbiAgZW50aXR5VHlwZTogc3RyaW5nXG4pOiBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248RW50aXR5TG9hZEFjdGlvbj4ge1xuICByZXR1cm4gZmlsdGVyKFxuICAgIChhY3Rpb246IEVudGl0eUxvYWRBY3Rpb24pID0+XG4gICAgICBhY3Rpb24ubWV0YSAmJlxuICAgICAgYWN0aW9uLm1ldGEubG9hZGVyICYmXG4gICAgICBhY3Rpb24ubWV0YS5lbnRpdHlUeXBlID09PSBlbnRpdHlUeXBlICYmXG4gICAgICBhY3Rpb24ubWV0YS5sb2FkZXIubG9hZFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2ZMb2FkZXJGYWlsKFxuICBlbnRpdHlUeXBlOiBzdHJpbmdcbik6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxFbnRpdHlMb2FkQWN0aW9uPiB7XG4gIHJldHVybiBmaWx0ZXIoXG4gICAgKGFjdGlvbjogRW50aXR5TG9hZEFjdGlvbikgPT5cbiAgICAgIGFjdGlvbi5tZXRhICYmXG4gICAgICBhY3Rpb24ubWV0YS5sb2FkZXIgJiZcbiAgICAgIGFjdGlvbi5tZXRhLmVudGl0eVR5cGUgPT09IGVudGl0eVR5cGUgJiZcbiAgICAgIGFjdGlvbi5tZXRhLmxvYWRlci5lcnJvclxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2ZMb2FkZXJTdWNjZXNzKFxuICBlbnRpdHlUeXBlOiBzdHJpbmdcbik6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxFbnRpdHlMb2FkQWN0aW9uPiB7XG4gIHJldHVybiBmaWx0ZXIoXG4gICAgKGFjdGlvbjogRW50aXR5TG9hZEFjdGlvbikgPT5cbiAgICAgIGFjdGlvbi5tZXRhICYmXG4gICAgICBhY3Rpb24ubWV0YS5sb2FkZXIgJiZcbiAgICAgIGFjdGlvbi5tZXRhLmVudGl0eVR5cGUgPT09IGVudGl0eVR5cGUgJiZcbiAgICAgICFhY3Rpb24ubWV0YS5sb2FkZXIubG9hZCAmJlxuICAgICAgIWFjdGlvbi5tZXRhLmxvYWRlci5lcnJvclxuICApO1xufVxuIl19
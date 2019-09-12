/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getUserState } from './feature.selector';
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.countries; };
/** @type {?} */
export var getDeliveryCountriesState = createSelector(getUserState, (ɵ0));
var ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.entities; };
/** @type {?} */
export var getDeliveryCountriesEntites = createSelector(getDeliveryCountriesState, (ɵ1));
var ɵ2 = /**
 * @param {?} entites
 * @return {?}
 */
function (entites) { return Object.keys(entites).map((/**
 * @param {?} isocode
 * @return {?}
 */
function (isocode) { return entites[isocode]; })); };
/** @type {?} */
export var getAllDeliveryCountries = createSelector(getDeliveryCountriesEntites, (ɵ2));
/** @type {?} */
export var countrySelectorFactory = (/**
 * @param {?} isocode
 * @return {?}
 */
function (isocode) {
    return createSelector(getDeliveryCountriesEntites, (/**
     * @param {?} entities
     * @return {?}
     */
    function (entities) { return (Object.keys(entities).length !== 0 ? entities[isocode] : null); }));
});
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktY291bnRyaWVzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3NlbGVjdG9ycy9kZWxpdmVyeS1jb3VudHJpZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQVEvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBT2hELFVBQUMsS0FBZ0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxTQUFTLEVBQWYsQ0FBZTs7QUFMdkMsTUFBTSxLQUFPLHlCQUF5QixHQUdsQyxjQUFjLENBQ2hCLFlBQVksT0FFYjs7Ozs7QUFPQyxVQUFDLEtBQTZCLElBQUssT0FBQSxLQUFLLENBQUMsUUFBUSxFQUFkLENBQWM7O0FBTG5ELE1BQU0sS0FBTywyQkFBMkIsR0FHcEMsY0FBYyxDQUNoQix5QkFBeUIsT0FFMUI7Ozs7O0FBT0MsVUFBQSxPQUFPLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUc7Ozs7QUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBaEIsQ0FBZ0IsRUFBQyxFQUFyRCxDQUFxRDs7QUFMbEUsTUFBTSxLQUFPLHVCQUF1QixHQUdoQyxjQUFjLENBQ2hCLDJCQUEyQixPQUU1Qjs7QUFFRCxNQUFNLEtBQU8sc0JBQXNCOzs7O0FBQUcsVUFDcEMsT0FBZTtJQUVmLE9BQUEsY0FBYyxDQUNaLDJCQUEyQjs7OztJQUMzQixVQUFBLFFBQVEsSUFBSSxPQUFBLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUEvRCxDQUErRCxFQUM1RTtBQUhELENBR0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ291bnRyeSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHtcbiAgRGVsaXZlcnlDb3VudHJpZXNTdGF0ZSxcbiAgRGVsaXZlcnlDb3VudHJ5RW50aXRpZXMsXG4gIFN0YXRlV2l0aFVzZXIsXG4gIFVzZXJTdGF0ZSxcbn0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRVc2VyU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgZ2V0RGVsaXZlcnlDb3VudHJpZXNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgRGVsaXZlcnlDb3VudHJpZXNTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRVc2VyU3RhdGUsXG4gIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS5jb3VudHJpZXNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXREZWxpdmVyeUNvdW50cmllc0VudGl0ZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIERlbGl2ZXJ5Q291bnRyeUVudGl0aWVzXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldERlbGl2ZXJ5Q291bnRyaWVzU3RhdGUsXG4gIChzdGF0ZTogRGVsaXZlcnlDb3VudHJpZXNTdGF0ZSkgPT4gc3RhdGUuZW50aXRpZXNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxEZWxpdmVyeUNvdW50cmllczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgQ291bnRyeVtdXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldERlbGl2ZXJ5Q291bnRyaWVzRW50aXRlcyxcbiAgZW50aXRlcyA9PiBPYmplY3Qua2V5cyhlbnRpdGVzKS5tYXAoaXNvY29kZSA9PiBlbnRpdGVzW2lzb2NvZGVdKVxuKTtcblxuZXhwb3J0IGNvbnN0IGNvdW50cnlTZWxlY3RvckZhY3RvcnkgPSAoXG4gIGlzb2NvZGU6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhVc2VyLCBDb3VudHJ5PiA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXREZWxpdmVyeUNvdW50cmllc0VudGl0ZXMsXG4gICAgZW50aXRpZXMgPT4gKE9iamVjdC5rZXlzKGVudGl0aWVzKS5sZW5ndGggIT09IDAgPyBlbnRpdGllc1tpc29jb2RlXSA6IG51bGwpXG4gICk7XG4iXX0=
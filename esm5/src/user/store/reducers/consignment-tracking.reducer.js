/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { UserActions } from '../actions/index';
/** @type {?} */
export var initialState = {};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case UserActions.LOAD_CONSIGNMENT_TRACKING_SUCCESS: {
            /** @type {?} */
            var tracking = action.payload;
            return {
                tracking: tracking,
            };
        }
        case UserActions.CLEAR_CONSIGNMENT_TRACKING: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2lnbm1lbnQtdHJhY2tpbmcucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3JlZHVjZXJzL2NvbnNpZ25tZW50LXRyYWNraW5nLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHL0MsTUFBTSxLQUFPLFlBQVksR0FBNkIsRUFBRTs7Ozs7O0FBRXhELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQW9CLEVBQ3BCLE1BQTZDO0lBRDdDLHNCQUFBLEVBQUEsb0JBQW9CO0lBR3BCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFdBQVcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDOztnQkFDNUMsUUFBUSxHQUF3QixNQUFNLENBQUMsT0FBTztZQUNwRCxPQUFPO2dCQUNMLFFBQVEsVUFBQTthQUNULENBQUM7U0FDSDtRQUNELEtBQUssV0FBVyxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDM0MsT0FBTyxZQUFZLENBQUM7U0FDckI7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmcgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9pbmRleCc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ29uc2lnbm1lbnRUcmFja2luZ1N0YXRlIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IENvbnNpZ25tZW50VHJhY2tpbmdTdGF0ZSA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogVXNlckFjdGlvbnMuQ29uc2lnbm1lbnRUcmFja2luZ0FjdGlvblxuKTogQ29uc2lnbm1lbnRUcmFja2luZ1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVXNlckFjdGlvbnMuTE9BRF9DT05TSUdOTUVOVF9UUkFDS0lOR19TVUNDRVNTOiB7XG4gICAgICBjb25zdCB0cmFja2luZzogQ29uc2lnbm1lbnRUcmFja2luZyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHJhY2tpbmcsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIFVzZXJBY3Rpb25zLkNMRUFSX0NPTlNJR05NRU5UX1RSQUNLSU5HOiB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=
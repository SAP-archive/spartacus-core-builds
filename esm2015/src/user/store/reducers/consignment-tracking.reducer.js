/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { UserActions } from '../actions/index';
/** @type {?} */
export const initialState = {};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case UserActions.LOAD_CONSIGNMENT_TRACKING_SUCCESS: {
            /** @type {?} */
            const tracking = action.payload;
            return {
                tracking,
            };
        }
        case UserActions.CLEAR_CONSIGNMENT_TRACKING: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2lnbm1lbnQtdHJhY2tpbmcucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3JlZHVjZXJzL2NvbnNpZ25tZW50LXRyYWNraW5nLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHL0MsTUFBTSxPQUFPLFlBQVksR0FBNkIsRUFBRTs7Ozs7O0FBRXhELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQTZDO0lBRTdDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFdBQVcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDOztrQkFDNUMsUUFBUSxHQUF3QixNQUFNLENBQUMsT0FBTztZQUNwRCxPQUFPO2dCQUNMLFFBQVE7YUFDVCxDQUFDO1NBQ0g7UUFDRCxLQUFLLFdBQVcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQzNDLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zaWdubWVudFRyYWNraW5nIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmdTdGF0ZSB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBDb25zaWdubWVudFRyYWNraW5nU3RhdGUgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IFVzZXJBY3Rpb25zLkNvbnNpZ25tZW50VHJhY2tpbmdBY3Rpb25cbik6IENvbnNpZ25tZW50VHJhY2tpbmdTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFVzZXJBY3Rpb25zLkxPQURfQ09OU0lHTk1FTlRfVFJBQ0tJTkdfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgdHJhY2tpbmc6IENvbnNpZ25tZW50VHJhY2tpbmcgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRyYWNraW5nLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBVc2VyQWN0aW9ucy5DTEVBUl9DT05TSUdOTUVOVF9UUkFDS0lORzoge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19
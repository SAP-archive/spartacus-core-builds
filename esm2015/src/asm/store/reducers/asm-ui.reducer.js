/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AsmActions } from '../actions/index';
/** @type {?} */
export const initialState = (/** @type {?} */ ({ collapsed: false }));
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case AsmActions.ASM_UI_UPDATE: {
            return Object.assign({}, state, action.payload);
        }
        default: {
            return state;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLXVpLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXNtL3N0b3JlL3JlZHVjZXJzL2FzbS11aS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRTlDLE1BQU0sT0FBTyxZQUFZLEdBQVUsbUJBQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUE7Ozs7OztBQUU5RCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUE4QjtJQUU5QixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0IseUJBQ0ssS0FBSyxFQUNMLE1BQU0sQ0FBQyxPQUFPLEVBQ2pCO1NBQ0g7UUFDRCxPQUFPLENBQUMsQ0FBQztZQUNQLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBc21VaSB9IGZyb20gJy4uLy4uL21vZGVscy9hc20ubW9kZWxzJztcbmltcG9ydCB7IEFzbUFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogQXNtVWkgPSA8QXNtVWk+eyBjb2xsYXBzZWQ6IGZhbHNlIH07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBBc21BY3Rpb25zLkFzbVVpQWN0aW9uXG4pOiBBc21VaSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFzbUFjdGlvbnMuQVNNX1VJX1VQREFURToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfVxufVxuIl19
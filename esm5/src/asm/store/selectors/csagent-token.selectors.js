import { createSelector } from '@ngrx/store';
import { StateUtils } from '../../../state/utils/index';
import { getAsmState } from './feature.selector';
var ɵ0 = function (state) { return state.csagentToken; };
export var getCustomerSupportAgentTokenState = createSelector(getAsmState, ɵ0);
var ɵ1 = function (state) {
    return StateUtils.loaderValueSelector(state);
};
export var getCustomerSupportAgentToken = createSelector(getCustomerSupportAgentTokenState, ɵ1);
var ɵ2 = function (state) {
    return StateUtils.loaderLoadingSelector(state);
};
export var getCustomerSupportAgentTokenLoading = createSelector(getCustomerSupportAgentTokenState, ɵ2);
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC10b2tlbi5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXNtL3N0b3JlL3NlbGVjdG9ycy9jc2FnZW50LXRva2VuLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQUMvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO1NBTWpCLFVBQUMsS0FBZSxJQUFLLE9BQUEsS0FBSyxDQUFDLFlBQVksRUFBbEIsQ0FBa0I7QUFIdkUsTUFBTSxDQUFDLElBQU0saUNBQWlDLEdBRzFDLGNBQWMsQ0FBQyxXQUFXLEtBQTBDLENBQUM7U0FLbkIsVUFBQyxLQUFLO0lBQzFELE9BQUEsVUFBVSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQztBQUFyQyxDQUFxQztBQUp2QyxNQUFNLENBQUMsSUFBTSw0QkFBNEIsR0FHckMsY0FBYyxDQUFDLGlDQUFpQyxLQUVuRCxDQUFDO1NBS29ELFVBQUMsS0FBSztJQUMxRCxPQUFBLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7QUFBdkMsQ0FBdUM7QUFKekMsTUFBTSxDQUFDLElBQU0sbUNBQW1DLEdBRzVDLGNBQWMsQ0FBQyxpQ0FBaUMsS0FFbkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgU3RhdGVVdGlscyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IFVzZXJUb2tlbiB9IGZyb20gJy4uLy4uLy4uL2F1dGgvbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IGdldEFzbVN0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9yJztcbmltcG9ydCB7IEFzbVN0YXRlLCBTdGF0ZVdpdGhBc20gfSBmcm9tICcuLi9hc20tc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgZ2V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlblN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhBc20sXG4gIFN0YXRlVXRpbHMuTG9hZGVyU3RhdGU8VXNlclRva2VuPlxuPiA9IGNyZWF0ZVNlbGVjdG9yKGdldEFzbVN0YXRlLCAoc3RhdGU6IEFzbVN0YXRlKSA9PiBzdGF0ZS5jc2FnZW50VG9rZW4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbjogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQXNtLFxuICBVc2VyVG9rZW5cbj4gPSBjcmVhdGVTZWxlY3RvcihnZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuU3RhdGUsIChzdGF0ZSkgPT5cbiAgU3RhdGVVdGlscy5sb2FkZXJWYWx1ZVNlbGVjdG9yKHN0YXRlKVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5Mb2FkaW5nOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhBc20sXG4gIGJvb2xlYW5cbj4gPSBjcmVhdGVTZWxlY3RvcihnZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuU3RhdGUsIChzdGF0ZSkgPT5cbiAgU3RhdGVVdGlscy5sb2FkZXJMb2FkaW5nU2VsZWN0b3Ioc3RhdGUpXG4pO1xuIl19
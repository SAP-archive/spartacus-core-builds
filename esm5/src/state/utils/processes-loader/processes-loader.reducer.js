import { __assign } from "tslib";
import { isDevMode } from '@angular/core';
import { initialLoaderState, loaderReducer } from '../loader/loader.reducer';
export var initialProcessesState = {
    processesCount: 0,
};
/**
 * Higher order reducer that adds processes count
 */
export function processesLoaderReducer(entityType, reducer) {
    return function (state, action) {
        if (state === void 0) { state = __assign(__assign({}, initialProcessesState), initialLoaderState); }
        var loaderState = loaderReducer(entityType, reducer)(state, action);
        if (action.meta && action.meta.entityType === entityType) {
            var processesCountDiff = action.meta.processesCountDiff;
            if (isDevMode() && state.processesCount + processesCountDiff < 0) {
                console.error("Action '" + action.type + "' sets processesCount to value < 0!\n" +
                    'Make sure to keep processesCount in sync.\n' +
                    'There should always be only one decrement action for each increment action.\n' +
                    "Make sure that you don't reset state in between those actions.\n", action);
            }
            if (processesCountDiff) {
                return __assign(__assign({}, loaderState), { processesCount: state.processesCount
                        ? state.processesCount + processesCountDiff
                        : processesCountDiff });
            }
            else if (processesCountDiff === null) {
                // reset action
                return __assign(__assign({}, loaderState), initialProcessesState);
            }
        }
        return loaderState;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzc2VzLWxvYWRlci5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3V0aWxzL3Byb2Nlc3Nlcy1sb2FkZXIvcHJvY2Vzc2VzLWxvYWRlci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUk3RSxNQUFNLENBQUMsSUFBTSxxQkFBcUIsR0FBOEI7SUFDOUQsY0FBYyxFQUFFLENBQUM7Q0FDbEIsQ0FBQztBQUVGOztHQUVHO0FBQ0gsTUFBTSxVQUFVLHNCQUFzQixDQUNwQyxVQUFrQixFQUNsQixPQUF5QztJQUt6QyxPQUFPLFVBQ0wsS0FHQyxFQUNELE1BQTZCO1FBSjdCLHNCQUFBLEVBQUEsOEJBQ0sscUJBQXFCLEdBQ3JCLGtCQUFrQixDQUN0QjtRQUdELElBQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3RFLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7WUFDeEQsSUFBTSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQzFELElBQUksU0FBUyxFQUFFLElBQUksS0FBSyxDQUFDLGNBQWMsR0FBRyxrQkFBa0IsR0FBRyxDQUFDLEVBQUU7Z0JBQ2hFLE9BQU8sQ0FBQyxLQUFLLENBQ1gsYUFBVyxNQUFNLENBQUMsSUFBSSwwQ0FBdUM7b0JBQzNELDZDQUE2QztvQkFDN0MsK0VBQStFO29CQUMvRSxrRUFBa0UsRUFDcEUsTUFBTSxDQUNQLENBQUM7YUFDSDtZQUNELElBQUksa0JBQWtCLEVBQUU7Z0JBQ3RCLDZCQUNLLFdBQVcsS0FDZCxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7d0JBQ2xDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLGtCQUFrQjt3QkFDM0MsQ0FBQyxDQUFDLGtCQUFrQixJQUN0QjthQUNIO2lCQUFNLElBQUksa0JBQWtCLEtBQUssSUFBSSxFQUFFO2dCQUN0QyxlQUFlO2dCQUNmLDZCQUNLLFdBQVcsR0FDWCxxQkFBcUIsRUFDeEI7YUFDSDtTQUNGO1FBRUQsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgaW5pdGlhbExvYWRlclN0YXRlLCBsb2FkZXJSZWR1Y2VyIH0gZnJvbSAnLi4vbG9hZGVyL2xvYWRlci5yZWR1Y2VyJztcbmltcG9ydCB7IFByb2Nlc3Nlc0xvYWRlclN0YXRlIH0gZnJvbSAnLi9wcm9jZXNzZXMtbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IFByb2Nlc3Nlc0xvYWRlckFjdGlvbiB9IGZyb20gJy4vcHJvY2Vzc2VzLWxvYWRlci5hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFByb2Nlc3Nlc1N0YXRlOiBQcm9jZXNzZXNMb2FkZXJTdGF0ZTxhbnk+ID0ge1xuICBwcm9jZXNzZXNDb3VudDogMCxcbn07XG5cbi8qKlxuICogSGlnaGVyIG9yZGVyIHJlZHVjZXIgdGhhdCBhZGRzIHByb2Nlc3NlcyBjb3VudFxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc2VzTG9hZGVyUmVkdWNlcjxUPihcbiAgZW50aXR5VHlwZTogc3RyaW5nLFxuICByZWR1Y2VyPzogKHN0YXRlOiBULCBhY3Rpb246IEFjdGlvbikgPT4gVFxuKTogKFxuICBzdGF0ZTogUHJvY2Vzc2VzTG9hZGVyU3RhdGU8VD4sXG4gIGFjdGlvbjogUHJvY2Vzc2VzTG9hZGVyQWN0aW9uXG4pID0+IFByb2Nlc3Nlc0xvYWRlclN0YXRlPFQ+IHtcbiAgcmV0dXJuIChcbiAgICBzdGF0ZTogUHJvY2Vzc2VzTG9hZGVyU3RhdGU8VD4gPSB7XG4gICAgICAuLi5pbml0aWFsUHJvY2Vzc2VzU3RhdGUsXG4gICAgICAuLi5pbml0aWFsTG9hZGVyU3RhdGUsXG4gICAgfSxcbiAgICBhY3Rpb246IFByb2Nlc3Nlc0xvYWRlckFjdGlvblxuICApOiBQcm9jZXNzZXNMb2FkZXJTdGF0ZTxUPiA9PiB7XG4gICAgY29uc3QgbG9hZGVyU3RhdGUgPSBsb2FkZXJSZWR1Y2VyKGVudGl0eVR5cGUsIHJlZHVjZXIpKHN0YXRlLCBhY3Rpb24pO1xuICAgIGlmIChhY3Rpb24ubWV0YSAmJiBhY3Rpb24ubWV0YS5lbnRpdHlUeXBlID09PSBlbnRpdHlUeXBlKSB7XG4gICAgICBjb25zdCBwcm9jZXNzZXNDb3VudERpZmYgPSBhY3Rpb24ubWV0YS5wcm9jZXNzZXNDb3VudERpZmY7XG4gICAgICBpZiAoaXNEZXZNb2RlKCkgJiYgc3RhdGUucHJvY2Vzc2VzQ291bnQgKyBwcm9jZXNzZXNDb3VudERpZmYgPCAwKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgYEFjdGlvbiAnJHthY3Rpb24udHlwZX0nIHNldHMgcHJvY2Vzc2VzQ291bnQgdG8gdmFsdWUgPCAwIVxcbmAgK1xuICAgICAgICAgICAgJ01ha2Ugc3VyZSB0byBrZWVwIHByb2Nlc3Nlc0NvdW50IGluIHN5bmMuXFxuJyArXG4gICAgICAgICAgICAnVGhlcmUgc2hvdWxkIGFsd2F5cyBiZSBvbmx5IG9uZSBkZWNyZW1lbnQgYWN0aW9uIGZvciBlYWNoIGluY3JlbWVudCBhY3Rpb24uXFxuJyArXG4gICAgICAgICAgICBcIk1ha2Ugc3VyZSB0aGF0IHlvdSBkb24ndCByZXNldCBzdGF0ZSBpbiBiZXR3ZWVuIHRob3NlIGFjdGlvbnMuXFxuXCIsXG4gICAgICAgICAgYWN0aW9uXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAocHJvY2Vzc2VzQ291bnREaWZmKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ubG9hZGVyU3RhdGUsXG4gICAgICAgICAgcHJvY2Vzc2VzQ291bnQ6IHN0YXRlLnByb2Nlc3Nlc0NvdW50XG4gICAgICAgICAgICA/IHN0YXRlLnByb2Nlc3Nlc0NvdW50ICsgcHJvY2Vzc2VzQ291bnREaWZmXG4gICAgICAgICAgICA6IHByb2Nlc3Nlc0NvdW50RGlmZixcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzc2VzQ291bnREaWZmID09PSBudWxsKSB7XG4gICAgICAgIC8vIHJlc2V0IGFjdGlvblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmxvYWRlclN0YXRlLFxuICAgICAgICAgIC4uLmluaXRpYWxQcm9jZXNzZXNTdGF0ZSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbG9hZGVyU3RhdGU7XG4gIH07XG59XG4iXX0=
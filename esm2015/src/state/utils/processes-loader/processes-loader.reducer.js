import { isDevMode } from '@angular/core';
import { initialLoaderState, loaderReducer } from '../loader/loader.reducer';
export const initialProcessesState = {
    processesCount: 0,
};
/**
 * Higher order reducer that adds processes count
 */
export function processesLoaderReducer(entityType, reducer) {
    return (state = Object.assign(Object.assign({}, initialProcessesState), initialLoaderState), action) => {
        const loaderState = loaderReducer(entityType, reducer)(state, action);
        if (action.meta && action.meta.entityType === entityType) {
            const processesCountDiff = action.meta.processesCountDiff;
            if (isDevMode() && state.processesCount + processesCountDiff < 0) {
                console.error(`Action '${action.type}' sets processesCount to value < 0!\n` +
                    'Make sure to keep processesCount in sync.\n' +
                    'There should always be only one decrement action for each increment action.\n' +
                    "Make sure that you don't reset state in between those actions.\n", action);
            }
            if (processesCountDiff) {
                return Object.assign(Object.assign({}, loaderState), { processesCount: state.processesCount
                        ? state.processesCount + processesCountDiff
                        : processesCountDiff });
            }
            else if (processesCountDiff === null) {
                // reset action
                return Object.assign(Object.assign({}, loaderState), initialProcessesState);
            }
        }
        return loaderState;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzc2VzLWxvYWRlci5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvc3RhdGUvdXRpbHMvcHJvY2Vzc2VzLWxvYWRlci9wcm9jZXNzZXMtbG9hZGVyLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFJN0UsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQThCO0lBQzlELGNBQWMsRUFBRSxDQUFDO0NBQ2xCLENBQUM7QUFFRjs7R0FFRztBQUNILE1BQU0sVUFBVSxzQkFBc0IsQ0FDcEMsVUFBa0IsRUFDbEIsT0FBeUM7SUFLekMsT0FBTyxDQUNMLHdDQUNLLHFCQUFxQixHQUNyQixrQkFBa0IsQ0FDdEIsRUFDRCxNQUE2QixFQUNKLEVBQUU7UUFDM0IsTUFBTSxXQUFXLEdBQUcsYUFBYSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdEUsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtZQUN4RCxNQUFNLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDMUQsSUFBSSxTQUFTLEVBQUUsSUFBSSxLQUFLLENBQUMsY0FBYyxHQUFHLGtCQUFrQixHQUFHLENBQUMsRUFBRTtnQkFDaEUsT0FBTyxDQUFDLEtBQUssQ0FDWCxXQUFXLE1BQU0sQ0FBQyxJQUFJLHVDQUF1QztvQkFDM0QsNkNBQTZDO29CQUM3QywrRUFBK0U7b0JBQy9FLGtFQUFrRSxFQUNwRSxNQUFNLENBQ1AsQ0FBQzthQUNIO1lBQ0QsSUFBSSxrQkFBa0IsRUFBRTtnQkFDdEIsdUNBQ0ssV0FBVyxLQUNkLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYzt3QkFDbEMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsa0JBQWtCO3dCQUMzQyxDQUFDLENBQUMsa0JBQWtCLElBQ3RCO2FBQ0g7aUJBQU0sSUFBSSxrQkFBa0IsS0FBSyxJQUFJLEVBQUU7Z0JBQ3RDLGVBQWU7Z0JBQ2YsdUNBQ0ssV0FBVyxHQUNYLHFCQUFxQixFQUN4QjthQUNIO1NBQ0Y7UUFFRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBpbml0aWFsTG9hZGVyU3RhdGUsIGxvYWRlclJlZHVjZXIgfSBmcm9tICcuLi9sb2FkZXIvbG9hZGVyLnJlZHVjZXInO1xuaW1wb3J0IHsgUHJvY2Vzc2VzTG9hZGVyU3RhdGUgfSBmcm9tICcuL3Byb2Nlc3Nlcy1sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgUHJvY2Vzc2VzTG9hZGVyQWN0aW9uIH0gZnJvbSAnLi9wcm9jZXNzZXMtbG9hZGVyLmFjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsUHJvY2Vzc2VzU3RhdGU6IFByb2Nlc3Nlc0xvYWRlclN0YXRlPGFueT4gPSB7XG4gIHByb2Nlc3Nlc0NvdW50OiAwLFxufTtcblxuLyoqXG4gKiBIaWdoZXIgb3JkZXIgcmVkdWNlciB0aGF0IGFkZHMgcHJvY2Vzc2VzIGNvdW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzZXNMb2FkZXJSZWR1Y2VyPFQ+KFxuICBlbnRpdHlUeXBlOiBzdHJpbmcsXG4gIHJlZHVjZXI/OiAoc3RhdGU6IFQsIGFjdGlvbjogQWN0aW9uKSA9PiBUXG4pOiAoXG4gIHN0YXRlOiBQcm9jZXNzZXNMb2FkZXJTdGF0ZTxUPixcbiAgYWN0aW9uOiBQcm9jZXNzZXNMb2FkZXJBY3Rpb25cbikgPT4gUHJvY2Vzc2VzTG9hZGVyU3RhdGU8VD4ge1xuICByZXR1cm4gKFxuICAgIHN0YXRlOiBQcm9jZXNzZXNMb2FkZXJTdGF0ZTxUPiA9IHtcbiAgICAgIC4uLmluaXRpYWxQcm9jZXNzZXNTdGF0ZSxcbiAgICAgIC4uLmluaXRpYWxMb2FkZXJTdGF0ZSxcbiAgICB9LFxuICAgIGFjdGlvbjogUHJvY2Vzc2VzTG9hZGVyQWN0aW9uXG4gICk6IFByb2Nlc3Nlc0xvYWRlclN0YXRlPFQ+ID0+IHtcbiAgICBjb25zdCBsb2FkZXJTdGF0ZSA9IGxvYWRlclJlZHVjZXIoZW50aXR5VHlwZSwgcmVkdWNlcikoc3RhdGUsIGFjdGlvbik7XG4gICAgaWYgKGFjdGlvbi5tZXRhICYmIGFjdGlvbi5tZXRhLmVudGl0eVR5cGUgPT09IGVudGl0eVR5cGUpIHtcbiAgICAgIGNvbnN0IHByb2Nlc3Nlc0NvdW50RGlmZiA9IGFjdGlvbi5tZXRhLnByb2Nlc3Nlc0NvdW50RGlmZjtcbiAgICAgIGlmIChpc0Rldk1vZGUoKSAmJiBzdGF0ZS5wcm9jZXNzZXNDb3VudCArIHByb2Nlc3Nlc0NvdW50RGlmZiA8IDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBgQWN0aW9uICcke2FjdGlvbi50eXBlfScgc2V0cyBwcm9jZXNzZXNDb3VudCB0byB2YWx1ZSA8IDAhXFxuYCArXG4gICAgICAgICAgICAnTWFrZSBzdXJlIHRvIGtlZXAgcHJvY2Vzc2VzQ291bnQgaW4gc3luYy5cXG4nICtcbiAgICAgICAgICAgICdUaGVyZSBzaG91bGQgYWx3YXlzIGJlIG9ubHkgb25lIGRlY3JlbWVudCBhY3Rpb24gZm9yIGVhY2ggaW5jcmVtZW50IGFjdGlvbi5cXG4nICtcbiAgICAgICAgICAgIFwiTWFrZSBzdXJlIHRoYXQgeW91IGRvbid0IHJlc2V0IHN0YXRlIGluIGJldHdlZW4gdGhvc2UgYWN0aW9ucy5cXG5cIixcbiAgICAgICAgICBhY3Rpb25cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9jZXNzZXNDb3VudERpZmYpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5sb2FkZXJTdGF0ZSxcbiAgICAgICAgICBwcm9jZXNzZXNDb3VudDogc3RhdGUucHJvY2Vzc2VzQ291bnRcbiAgICAgICAgICAgID8gc3RhdGUucHJvY2Vzc2VzQ291bnQgKyBwcm9jZXNzZXNDb3VudERpZmZcbiAgICAgICAgICAgIDogcHJvY2Vzc2VzQ291bnREaWZmLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzZXNDb3VudERpZmYgPT09IG51bGwpIHtcbiAgICAgICAgLy8gcmVzZXQgYWN0aW9uXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ubG9hZGVyU3RhdGUsXG4gICAgICAgICAgLi4uaW5pdGlhbFByb2Nlc3Nlc1N0YXRlLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsb2FkZXJTdGF0ZTtcbiAgfTtcbn1cbiJdfQ==
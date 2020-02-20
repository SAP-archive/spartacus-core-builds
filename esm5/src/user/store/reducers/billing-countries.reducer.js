import { __assign } from "tslib";
import { UserActions } from '../actions/index';
export var initialState = {
    entities: {},
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case UserActions.LOAD_BILLING_COUNTRIES_SUCCESS: {
            var billingCountries = action.payload;
            var entities = billingCountries.reduce(function (countryEntities, name) {
                var _a;
                return __assign(__assign({}, countryEntities), (_a = {}, _a[name.isocode] = name, _a));
            }, __assign({}, state.entities));
            return __assign(__assign({}, state), { entities: entities });
        }
        case UserActions.CLEAR_USER_MISCS_DATA: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy1jb3VudHJpZXMucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3JlZHVjZXJzL2JpbGxpbmctY291bnRyaWVzLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUcvQyxNQUFNLENBQUMsSUFBTSxZQUFZLEdBQTBCO0lBQ2pELFFBQVEsRUFBRSxFQUFFO0NBQ2IsQ0FBQztBQUVGLE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQW9CLEVBQ3BCLE1BQTJFO0lBRDNFLHNCQUFBLEVBQUEsb0JBQW9CO0lBR3BCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFdBQVcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQy9DLElBQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUN4QyxJQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQ3RDLFVBQUMsZUFBMkMsRUFBRSxJQUFTOztnQkFDckQsNkJBQ0ssZUFBZSxnQkFDakIsSUFBSSxDQUFDLE9BQU8sSUFBRyxJQUFJLE9BQ3BCO1lBQ0osQ0FBQyxlQUVJLEtBQUssQ0FBQyxRQUFRLEVBRXBCLENBQUM7WUFFRiw2QkFDSyxLQUFLLEtBQ1IsUUFBUSxVQUFBLElBQ1I7U0FDSDtRQUVELEtBQUssV0FBVyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDdEMsT0FBTyxZQUFZLENBQUM7U0FDckI7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBCaWxsaW5nQ291bnRyaWVzU3RhdGUgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogQmlsbGluZ0NvdW50cmllc1N0YXRlID0ge1xuICBlbnRpdGllczoge30sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogVXNlckFjdGlvbnMuQmlsbGluZ0NvdW50cmllc0FjdGlvbiB8IFVzZXJBY3Rpb25zLkNsZWFyVXNlck1pc2NzRGF0YVxuKTogQmlsbGluZ0NvdW50cmllc1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVXNlckFjdGlvbnMuTE9BRF9CSUxMSU5HX0NPVU5UUklFU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBiaWxsaW5nQ291bnRyaWVzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zdCBlbnRpdGllcyA9IGJpbGxpbmdDb3VudHJpZXMucmVkdWNlKFxuICAgICAgICAoY291bnRyeUVudGl0aWVzOiB7IFtpc29jb2RlOiBzdHJpbmddOiBhbnkgfSwgbmFtZTogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmNvdW50cnlFbnRpdGllcyxcbiAgICAgICAgICAgIFtuYW1lLmlzb2NvZGVdOiBuYW1lLFxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIFVzZXJBY3Rpb25zLkNMRUFSX1VTRVJfTUlTQ1NfREFUQToge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=
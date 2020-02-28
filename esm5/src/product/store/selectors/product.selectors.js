import { createSelector } from '@ngrx/store';
import { initialLoaderState, StateEntityLoaderSelectors, StateLoaderSelectors, } from '../../../state/utils/index';
import { getProductsState } from './feature.selector';
var ɵ0 = function (state) { return state.details; };
export var getProductState = createSelector(getProductsState, ɵ0);
export var getSelectedProductsFactory = function (codes) {
    return createSelector(getProductState, function (details) {
        return codes
            .map(function (code) {
            return details.entities[code] ? details.entities[code].value : undefined;
        })
            .filter(function (product) { return product !== undefined; });
    });
};
export var getSelectedProductStateFactory = function (code, scope) {
    return createSelector(getProductState, function (details) {
        return scope
            ? StateEntityLoaderSelectors.entityStateSelector(details, code)[scope] ||
                initialLoaderState
            : StateEntityLoaderSelectors.entityStateSelector(details, code);
    });
};
export var getSelectedProductFactory = function (code, scope) {
    return createSelector(getSelectedProductStateFactory(code, scope), function (productState) { return StateLoaderSelectors.loaderValueSelector(productState); });
};
export var getSelectedProductLoadingFactory = function (code, scope) {
    return createSelector(getSelectedProductStateFactory(code, scope), function (productState) { return StateLoaderSelectors.loaderLoadingSelector(productState); });
};
export var getSelectedProductSuccessFactory = function (code, scope) {
    return createSelector(getSelectedProductStateFactory(code, scope), function (productState) { return StateLoaderSelectors.loaderSuccessSelector(productState); });
};
export var getSelectedProductErrorFactory = function (code, scope) {
    return createSelector(getSelectedProductStateFactory(code, scope), function (productState) { return StateLoaderSelectors.loaderErrorSelector(productState); });
};
var ɵ1 = function (details) {
    return Object.keys(details.entities);
};
export var getAllProductCodes = createSelector(getProductState, ɵ1);
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9zZWxlY3RvcnMvcHJvZHVjdC5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFHL0QsT0FBTyxFQUNMLGtCQUFrQixFQUNsQiwwQkFBMEIsRUFDMUIsb0JBQW9CLEdBQ3JCLE1BQU0sNEJBQTRCLENBQUM7QUFHcEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7U0FLakIsVUFBQyxLQUFvQixJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBYixDQUFhO0FBSDVFLE1BQU0sQ0FBQyxJQUFNLGVBQWUsR0FHeEIsY0FBYyxDQUFDLGdCQUFnQixLQUEwQyxDQUFDO0FBRTlFLE1BQU0sQ0FBQyxJQUFNLDBCQUEwQixHQUFHLFVBQ3hDLEtBQWU7SUFFZixPQUFPLGNBQWMsQ0FDbkIsZUFBZSxFQUNmLFVBQUMsT0FBbUM7UUFDbEMsT0FBTyxLQUFLO2FBQ1QsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNQLE9BQUEsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFBakUsQ0FBaUUsQ0FDbEU7YUFDQSxNQUFNLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLEtBQUssU0FBUyxFQUFyQixDQUFxQixDQUFDLENBQUM7SUFDOUMsQ0FBQyxDQUNGLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSw4QkFBOEIsR0FBRyxVQUM1QyxJQUFZLEVBQ1osS0FBYztJQUVkLE9BQU8sY0FBYyxDQUFDLGVBQWUsRUFBRSxVQUFBLE9BQU87UUFDNUMsT0FBQSxLQUFLO1lBQ0gsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ3BFLGtCQUFrQjtZQUNwQixDQUFDLENBQUMsMEJBQTBCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUhqRSxDQUdpRSxDQUNsRSxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0seUJBQXlCLEdBQUcsVUFDdkMsSUFBWSxFQUNaLEtBQWM7SUFFZCxPQUFPLGNBQWMsQ0FDbkIsOEJBQThCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUMzQyxVQUFBLFlBQVksSUFBSSxPQUFBLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxFQUF0RCxDQUFzRCxDQUN2RSxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0sZ0NBQWdDLEdBQUcsVUFDOUMsSUFBWSxFQUNaLEtBQWM7SUFFZCxPQUFPLGNBQWMsQ0FDbkIsOEJBQThCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUMzQyxVQUFBLFlBQVksSUFBSSxPQUFBLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxFQUF4RCxDQUF3RCxDQUN6RSxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0sZ0NBQWdDLEdBQUcsVUFDOUMsSUFBWSxFQUNaLEtBQWM7SUFFZCxPQUFPLGNBQWMsQ0FDbkIsOEJBQThCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUMzQyxVQUFBLFlBQVksSUFBSSxPQUFBLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxFQUF4RCxDQUF3RCxDQUN6RSxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0sOEJBQThCLEdBQUcsVUFDNUMsSUFBWSxFQUNaLEtBQWM7SUFFZCxPQUFPLGNBQWMsQ0FDbkIsOEJBQThCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUMzQyxVQUFBLFlBQVksSUFBSSxPQUFBLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxFQUF0RCxDQUFzRCxDQUN2RSxDQUFDO0FBQ0osQ0FBQyxDQUFDO1NBS2tDLFVBQUEsT0FBTztJQUN6QyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFMRCxNQUFNLENBQUMsSUFBTSxrQkFBa0IsR0FHM0IsY0FBYyxDQUFDLGVBQWUsS0FFaEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgRW50aXR5TG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHtcbiAgaW5pdGlhbExvYWRlclN0YXRlLFxuICBTdGF0ZUVudGl0eUxvYWRlclNlbGVjdG9ycyxcbiAgU3RhdGVMb2FkZXJTZWxlY3RvcnMsXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBQcm9kdWN0c1N0YXRlLCBTdGF0ZVdpdGhQcm9kdWN0IH0gZnJvbSAnLi4vcHJvZHVjdC1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRQcm9kdWN0c1N0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9yJztcblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoUHJvZHVjdCxcbiAgRW50aXR5TG9hZGVyU3RhdGU8UHJvZHVjdD5cbj4gPSBjcmVhdGVTZWxlY3RvcihnZXRQcm9kdWN0c1N0YXRlLCAoc3RhdGU6IFByb2R1Y3RzU3RhdGUpID0+IHN0YXRlLmRldGFpbHMpO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQcm9kdWN0c0ZhY3RvcnkgPSAoXG4gIGNvZGVzOiBzdHJpbmdbXVxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhQcm9kdWN0LCBQcm9kdWN0W10+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFByb2R1Y3RTdGF0ZSxcbiAgICAoZGV0YWlsczogRW50aXR5TG9hZGVyU3RhdGU8UHJvZHVjdD4pID0+IHtcbiAgICAgIHJldHVybiBjb2Rlc1xuICAgICAgICAubWFwKGNvZGUgPT5cbiAgICAgICAgICBkZXRhaWxzLmVudGl0aWVzW2NvZGVdID8gZGV0YWlscy5lbnRpdGllc1tjb2RlXS52YWx1ZSA6IHVuZGVmaW5lZFxuICAgICAgICApXG4gICAgICAgIC5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0ICE9PSB1bmRlZmluZWQpO1xuICAgIH1cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkgPSAoXG4gIGNvZGU6IHN0cmluZyxcbiAgc2NvcGU/OiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoUHJvZHVjdCwgTG9hZGVyU3RhdGU8UHJvZHVjdD4+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKGdldFByb2R1Y3RTdGF0ZSwgZGV0YWlscyA9PlxuICAgIHNjb3BlXG4gICAgICA/IFN0YXRlRW50aXR5TG9hZGVyU2VsZWN0b3JzLmVudGl0eVN0YXRlU2VsZWN0b3IoZGV0YWlscywgY29kZSlbc2NvcGVdIHx8XG4gICAgICAgIGluaXRpYWxMb2FkZXJTdGF0ZVxuICAgICAgOiBTdGF0ZUVudGl0eUxvYWRlclNlbGVjdG9ycy5lbnRpdHlTdGF0ZVNlbGVjdG9yKGRldGFpbHMsIGNvZGUpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQcm9kdWN0RmFjdG9yeSA9IChcbiAgY29kZTogc3RyaW5nLFxuICBzY29wZT86IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhQcm9kdWN0LCBQcm9kdWN0PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkoY29kZSwgc2NvcGUpLFxuICAgIHByb2R1Y3RTdGF0ZSA9PiBTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJWYWx1ZVNlbGVjdG9yKHByb2R1Y3RTdGF0ZSlcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZFByb2R1Y3RMb2FkaW5nRmFjdG9yeSA9IChcbiAgY29kZTogc3RyaW5nLFxuICBzY29wZT86IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhQcm9kdWN0LCBib29sZWFuPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkoY29kZSwgc2NvcGUpLFxuICAgIHByb2R1Y3RTdGF0ZSA9PiBTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJMb2FkaW5nU2VsZWN0b3IocHJvZHVjdFN0YXRlKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUHJvZHVjdFN1Y2Nlc3NGYWN0b3J5ID0gKFxuICBjb2RlOiBzdHJpbmcsXG4gIHNjb3BlPzogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2R1Y3QsIGJvb2xlYW4+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFNlbGVjdGVkUHJvZHVjdFN0YXRlRmFjdG9yeShjb2RlLCBzY29wZSksXG4gICAgcHJvZHVjdFN0YXRlID0+IFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlclN1Y2Nlc3NTZWxlY3Rvcihwcm9kdWN0U3RhdGUpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQcm9kdWN0RXJyb3JGYWN0b3J5ID0gKFxuICBjb2RlOiBzdHJpbmcsXG4gIHNjb3BlPzogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2R1Y3QsIGJvb2xlYW4+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFNlbGVjdGVkUHJvZHVjdFN0YXRlRmFjdG9yeShjb2RlLCBzY29wZSksXG4gICAgcHJvZHVjdFN0YXRlID0+IFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlckVycm9yU2VsZWN0b3IocHJvZHVjdFN0YXRlKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbFByb2R1Y3RDb2RlczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoUHJvZHVjdCxcbiAgc3RyaW5nW11cbj4gPSBjcmVhdGVTZWxlY3RvcihnZXRQcm9kdWN0U3RhdGUsIGRldGFpbHMgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMoZGV0YWlscy5lbnRpdGllcyk7XG59KTtcbiJdfQ==
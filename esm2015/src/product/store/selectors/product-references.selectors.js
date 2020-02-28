import { createSelector } from '@ngrx/store';
import { getProductsState } from './feature.selector';
const ɵ0 = (state) => state.references;
export const getProductReferencesState = createSelector(getProductsState, ɵ0);
export const getSelectedProductReferencesFactory = (productCode, referenceType) => {
    return createSelector(getProductReferencesState, referenceTypeData => {
        if (referenceTypeData.productCode === productCode) {
            if (!!referenceTypeData.list) {
                if (referenceType) {
                    return referenceTypeData.list.filter(item => item.referenceType === referenceType);
                }
                return referenceTypeData.list;
            }
            else {
                return [];
            }
        }
    });
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL3NlbGVjdG9ycy9wcm9kdWN0LXJlZmVyZW5jZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBTy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO1dBT3BELENBQUMsS0FBb0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVU7QUFMNUMsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBR2xDLGNBQWMsQ0FDaEIsZ0JBQWdCLEtBRWpCLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxtQ0FBbUMsR0FBRyxDQUNqRCxXQUFtQixFQUNuQixhQUFxQixFQUNtQyxFQUFFO0lBQzFELE9BQU8sY0FBYyxDQUFDLHlCQUF5QixFQUFFLGlCQUFpQixDQUFDLEVBQUU7UUFDbkUsSUFBSSxpQkFBaUIsQ0FBQyxXQUFXLEtBQUssV0FBVyxFQUFFO1lBQ2pELElBQUksQ0FBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRTtnQkFDNUIsSUFBSSxhQUFhLEVBQUU7b0JBQ2pCLE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FDbEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLGFBQWEsQ0FDN0MsQ0FBQztpQkFDSDtnQkFFRCxPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQzthQUMvQjtpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQzthQUNYO1NBQ0Y7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHtcbiAgUHJvZHVjdFJlZmVyZW5jZXNTdGF0ZSxcbiAgUHJvZHVjdHNTdGF0ZSxcbiAgU3RhdGVXaXRoUHJvZHVjdCxcbn0gZnJvbSAnLi4vcHJvZHVjdC1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRQcm9kdWN0c1N0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9yJztcblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RSZWZlcmVuY2VzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFByb2R1Y3QsXG4gIFByb2R1Y3RSZWZlcmVuY2VzU3RhdGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0UHJvZHVjdHNTdGF0ZSxcbiAgKHN0YXRlOiBQcm9kdWN0c1N0YXRlKSA9PiBzdGF0ZS5yZWZlcmVuY2VzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQcm9kdWN0UmVmZXJlbmNlc0ZhY3RvcnkgPSAoXG4gIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gIHJlZmVyZW5jZVR5cGU6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhQcm9kdWN0LCBQcm9kdWN0UmVmZXJlbmNlW10+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKGdldFByb2R1Y3RSZWZlcmVuY2VzU3RhdGUsIHJlZmVyZW5jZVR5cGVEYXRhID0+IHtcbiAgICBpZiAocmVmZXJlbmNlVHlwZURhdGEucHJvZHVjdENvZGUgPT09IHByb2R1Y3RDb2RlKSB7XG4gICAgICBpZiAoISFyZWZlcmVuY2VUeXBlRGF0YS5saXN0KSB7XG4gICAgICAgIGlmIChyZWZlcmVuY2VUeXBlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlZmVyZW5jZVR5cGVEYXRhLmxpc3QuZmlsdGVyKFxuICAgICAgICAgICAgaXRlbSA9PiBpdGVtLnJlZmVyZW5jZVR5cGUgPT09IHJlZmVyZW5jZVR5cGVcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlZmVyZW5jZVR5cGVEYXRhLmxpc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG4iXX0=
import { Injectable } from '@angular/core';
import { COST_CENTER_NORMALIZER } from '../../../../cost-center/connectors/cost-center/converters';
import { ConverterService, } from '../../../../util/converter.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../util/converter.service";
export class OccCostCenterListNormalizer {
    constructor(converter) {
        this.converter = converter;
    }
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign(Object.assign({}, source), { values: source.costCenters.map((costCenter) => (Object.assign({}, this.converter.convert(costCenter, COST_CENTER_NORMALIZER)))) });
        }
        return target;
    }
}
OccCostCenterListNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccCostCenterListNormalizer_Factory() { return new OccCostCenterListNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccCostCenterListNormalizer, providedIn: "root" });
OccCostCenterListNormalizer.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
OccCostCenterListNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNvc3QtY2VudGVyLWxpc3Qtbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL29jYy9hZGFwdGVycy9jb3N0LWNlbnRlci9jb252ZXJ0ZXJzL29jYy1jb3N0LWNlbnRlci1saXN0LW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUduRyxPQUFPLEVBRUwsZ0JBQWdCLEdBQ2pCLE1BQU0sb0NBQW9DLENBQUM7OztBQU01QyxNQUFNLE9BQU8sMkJBQTJCO0lBRXRDLFlBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQUcsQ0FBQztJQUVuRCxPQUFPLENBQ0wsTUFBMkIsRUFDM0IsTUFBa0M7UUFFbEMsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0sbUNBQ0EsTUFBYyxLQUNsQixNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLG1CQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsc0JBQXNCLENBQUMsRUFDN0QsQ0FBQyxHQUNKLENBQUM7U0FDSDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7WUFwQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFOQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDT1NUX0NFTlRFUl9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29zdC1jZW50ZXIvY29ubmVjdG9ycy9jb3N0LWNlbnRlci9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IEVudGl0aWVzTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IENvc3RDZW50ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9vcmctdW5pdC5tb2RlbCc7XG5pbXBvcnQge1xuICBDb252ZXJ0ZXIsXG4gIENvbnZlcnRlclNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9jY0Nvc3RDZW50ZXJMaXN0Tm9ybWFsaXplclxuICBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuQ29zdENlbnRlcnNMaXN0LCBFbnRpdGllc01vZGVsPENvc3RDZW50ZXI+PiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlKSB7fVxuXG4gIGNvbnZlcnQoXG4gICAgc291cmNlOiBPY2MuQ29zdENlbnRlcnNMaXN0LFxuICAgIHRhcmdldD86IEVudGl0aWVzTW9kZWw8Q29zdENlbnRlcj5cbiAgKTogRW50aXRpZXNNb2RlbDxDb3N0Q2VudGVyPiB7XG4gICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQgPSB7XG4gICAgICAgIC4uLihzb3VyY2UgYXMgYW55KSxcbiAgICAgICAgdmFsdWVzOiBzb3VyY2UuY29zdENlbnRlcnMubWFwKChjb3N0Q2VudGVyKSA9PiAoe1xuICAgICAgICAgIC4uLnRoaXMuY29udmVydGVyLmNvbnZlcnQoY29zdENlbnRlciwgQ09TVF9DRU5URVJfTk9STUFMSVpFUiksXG4gICAgICAgIH0pKSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbn1cbiJdfQ==
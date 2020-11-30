import { Injectable } from '@angular/core';
import { ADDRESS_NORMALIZER } from '../../../../user/connectors/address/converters';
import { ConverterService, } from '../../../../util/converter.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../util/converter.service";
export class OccAddressListNormalizer {
    constructor(converter) {
        this.converter = converter;
    }
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign(Object.assign({}, source), { values: source.addresses.map((address) => (Object.assign({}, this.converter.convert(address, ADDRESS_NORMALIZER)))) });
        }
        return target;
    }
}
OccAddressListNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccAddressListNormalizer_Factory() { return new OccAddressListNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccAddressListNormalizer, providedIn: "root" });
OccAddressListNormalizer.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
OccAddressListNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWFkZHJlc3MtbGlzdC1ub3JtYWxpemVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvb2NjL2FkYXB0ZXJzL3VzZXIvY29udmVydGVycy9vY2MtYWRkcmVzcy1saXN0LW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNwRixPQUFPLEVBRUwsZ0JBQWdCLEdBQ2pCLE1BQU0sb0NBQW9DLENBQUM7OztBQU01QyxNQUFNLE9BQU8sd0JBQXdCO0lBRW5DLFlBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQUcsQ0FBQztJQUVuRCxPQUFPLENBQ0wsTUFBdUIsRUFDdkIsTUFBK0I7UUFFL0IsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0sbUNBQ0EsTUFBYyxLQUNsQixNQUFNLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLG1CQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsRUFDdEQsQ0FBQyxHQUNKLENBQUM7U0FDSDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7WUFwQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFOQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBFbnRpdGllc01vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBBRERSRVNTX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvYWRkcmVzcy9jb252ZXJ0ZXJzJztcbmltcG9ydCB7XG4gIENvbnZlcnRlcixcbiAgQ29udmVydGVyU2VydmljZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT2NjQWRkcmVzc0xpc3ROb3JtYWxpemVyXG4gIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5BZGRyZXNzTGlzdCwgRW50aXRpZXNNb2RlbDxBZGRyZXNzPj4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSkge31cblxuICBjb252ZXJ0KFxuICAgIHNvdXJjZTogT2NjLkFkZHJlc3NMaXN0LFxuICAgIHRhcmdldD86IEVudGl0aWVzTW9kZWw8QWRkcmVzcz5cbiAgKTogRW50aXRpZXNNb2RlbDxBZGRyZXNzPiB7XG4gICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQgPSB7XG4gICAgICAgIC4uLihzb3VyY2UgYXMgYW55KSxcbiAgICAgICAgdmFsdWVzOiBzb3VyY2UuYWRkcmVzc2VzLm1hcCgoYWRkcmVzcykgPT4gKHtcbiAgICAgICAgICAuLi50aGlzLmNvbnZlcnRlci5jb252ZXJ0KGFkZHJlc3MsIEFERFJFU1NfTk9STUFMSVpFUiksXG4gICAgICAgIH0pKSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbn1cbiJdfQ==
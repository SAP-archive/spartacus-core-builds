import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { extractFields } from '../utils/occ-fields';
import { OccFieldsService, } from './occ-fields.service';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./occ-fields.service";
export class OccRequestsOptimizerService {
    constructor(http, occFields) {
        this.http = http;
        this.occFields = occFields;
    }
    /**
     * Optimize occ endpoint calls merging requests to the same url by merging field parameters
     *
     * @param scopedDataWithUrls
     * @param dataFactory
     */
    scopedDataLoad(scopedDataWithUrls, dataFactory) {
        const result = [];
        if (!dataFactory) {
            dataFactory = (url) => this.http.get(url);
        }
        const mergedUrls = this.occFields.getOptimalUrlGroups(scopedDataWithUrls);
        Object.entries(mergedUrls).forEach(([url, groupedModelsSet]) => {
            const groupedModels = Object.values(groupedModelsSet);
            if (groupedModels.length === 1) {
                // only one scope for url, we can pass the data straightaway
                result.push(Object.assign(Object.assign({}, groupedModels[0].scopedData), { data$: dataFactory(url) }));
            }
            else {
                // multiple scopes per url
                // we have to split the model per each scope
                const data$ = dataFactory(url).pipe(shareReplay(1));
                groupedModels.forEach((modelData) => {
                    result.push(Object.assign(Object.assign({}, modelData.scopedData), { data$: data$.pipe(map((data) => extractFields(data, modelData.fields))) }));
                });
            }
        });
        return result;
    }
}
OccRequestsOptimizerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccRequestsOptimizerService_Factory() { return new OccRequestsOptimizerService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.OccFieldsService)); }, token: OccRequestsOptimizerService, providedIn: "root" });
OccRequestsOptimizerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
OccRequestsOptimizerService.ctorParameters = () => [
    { type: HttpClient },
    { type: OccFieldsService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXJlcXVlc3RzLW9wdGltaXplci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvb2NjL3NlcnZpY2VzL29jYy1yZXF1ZXN0cy1vcHRpbWl6ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFFTCxnQkFBZ0IsR0FFakIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFLbEQsTUFBTSxPQUFPLDJCQUEyQjtJQUN0QyxZQUNZLElBQWdCLEVBQ2hCLFNBQTJCO1FBRDNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDcEMsQ0FBQztJQUVKOzs7OztPQUtHO0lBQ0gsY0FBYyxDQUNaLGtCQUF1QyxFQUN2QyxXQUE0QztRQUU1QyxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixXQUFXLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRTFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUNoQyxDQUFDLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUt0QixFQUFFLEVBQUU7WUFDSCxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFdEQsSUFBSSxhQUFhLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDOUIsNERBQTREO2dCQUM1RCxNQUFNLENBQUMsSUFBSSxpQ0FDTixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxLQUM5QixLQUFLLEVBQUUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUN2QixDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsMEJBQTBCO2dCQUMxQiw0Q0FBNEM7Z0JBQzVDLE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXBELGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtvQkFDbEMsTUFBTSxDQUFDLElBQUksaUNBQ04sU0FBUyxDQUFDLFVBQVUsS0FDdkIsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQ2YsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxhQUFhLENBQUksSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUN4RCxJQUNELENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FDRixDQUFDO1FBRUYsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7OztZQTVERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQUpRLFVBQVU7WUFIakIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2NvcGVkRGF0YSB9IGZyb20gJy4uLy4uL21vZGVsL3Njb3BlZC1kYXRhJztcbmltcG9ydCB7IG1hcCwgc2hhcmVSZXBsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBleHRyYWN0RmllbGRzIH0gZnJvbSAnLi4vdXRpbHMvb2NjLWZpZWxkcyc7XG5pbXBvcnQge1xuICBPY2NGaWVsZHNNb2RlbCxcbiAgT2NjRmllbGRzU2VydmljZSxcbiAgU2NvcGVkRGF0YVdpdGhVcmwsXG59IGZyb20gJy4vb2NjLWZpZWxkcy5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPY2NSZXF1ZXN0c09wdGltaXplclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRmllbGRzOiBPY2NGaWVsZHNTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogT3B0aW1pemUgb2NjIGVuZHBvaW50IGNhbGxzIG1lcmdpbmcgcmVxdWVzdHMgdG8gdGhlIHNhbWUgdXJsIGJ5IG1lcmdpbmcgZmllbGQgcGFyYW1ldGVyc1xuICAgKlxuICAgKiBAcGFyYW0gc2NvcGVkRGF0YVdpdGhVcmxzXG4gICAqIEBwYXJhbSBkYXRhRmFjdG9yeVxuICAgKi9cbiAgc2NvcGVkRGF0YUxvYWQ8VD4oXG4gICAgc2NvcGVkRGF0YVdpdGhVcmxzOiBTY29wZWREYXRhV2l0aFVybFtdLFxuICAgIGRhdGFGYWN0b3J5PzogKHVybDogc3RyaW5nKSA9PiBPYnNlcnZhYmxlPFQ+XG4gICk6IFNjb3BlZERhdGE8VD5bXSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICBpZiAoIWRhdGFGYWN0b3J5KSB7XG4gICAgICBkYXRhRmFjdG9yeSA9ICh1cmwpID0+IHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwpO1xuICAgIH1cblxuICAgIGNvbnN0IG1lcmdlZFVybHMgPSB0aGlzLm9jY0ZpZWxkcy5nZXRPcHRpbWFsVXJsR3JvdXBzKHNjb3BlZERhdGFXaXRoVXJscyk7XG5cbiAgICBPYmplY3QuZW50cmllcyhtZXJnZWRVcmxzKS5mb3JFYWNoKFxuICAgICAgKFt1cmwsIGdyb3VwZWRNb2RlbHNTZXRdOiBbXG4gICAgICAgIHN0cmluZyxcbiAgICAgICAge1xuICAgICAgICAgIFtzY29wZTogc3RyaW5nXTogT2NjRmllbGRzTW9kZWw7XG4gICAgICAgIH1cbiAgICAgIF0pID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBlZE1vZGVscyA9IE9iamVjdC52YWx1ZXMoZ3JvdXBlZE1vZGVsc1NldCk7XG5cbiAgICAgICAgaWYgKGdyb3VwZWRNb2RlbHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgLy8gb25seSBvbmUgc2NvcGUgZm9yIHVybCwgd2UgY2FuIHBhc3MgdGhlIGRhdGEgc3RyYWlnaHRhd2F5XG4gICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgLi4uZ3JvdXBlZE1vZGVsc1swXS5zY29wZWREYXRhLFxuICAgICAgICAgICAgZGF0YSQ6IGRhdGFGYWN0b3J5KHVybCksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gbXVsdGlwbGUgc2NvcGVzIHBlciB1cmxcbiAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHNwbGl0IHRoZSBtb2RlbCBwZXIgZWFjaCBzY29wZVxuICAgICAgICAgIGNvbnN0IGRhdGEkID0gZGF0YUZhY3RvcnkodXJsKS5waXBlKHNoYXJlUmVwbGF5KDEpKTtcblxuICAgICAgICAgIGdyb3VwZWRNb2RlbHMuZm9yRWFjaCgobW9kZWxEYXRhKSA9PiB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgIC4uLm1vZGVsRGF0YS5zY29wZWREYXRhLFxuICAgICAgICAgICAgICBkYXRhJDogZGF0YSQucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoKGRhdGEpID0+IGV4dHJhY3RGaWVsZHM8VD4oZGF0YSwgbW9kZWxEYXRhLmZpZWxkcykpXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXX0=
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { CmsStructureConfigService } from '../../services/cms-structure-config.service';
import { CmsPageAdapter } from './cms-page.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./cms-page.adapter";
import * as i2 from "../../services/cms-structure-config.service";
export class CmsPageConnector {
    constructor(cmsPageAdapter, cmsStructureConfigService) {
        this.cmsPageAdapter = cmsPageAdapter;
        this.cmsStructureConfigService = cmsStructureConfigService;
    }
    /**
     * Returns an observable with the page structure. The page structure is
     * typically loaded from a backend, but can also be returned from static
     * configuration (see `CmsStructureConfigService`).
     */
    get(pageContext) {
        return this.cmsStructureConfigService
            .shouldIgnoreBackend(pageContext.id)
            .pipe(switchMap((loadFromConfig) => {
            if (!loadFromConfig) {
                return this.cmsPageAdapter.load(pageContext).pipe(catchError((error) => {
                    if (error instanceof HttpErrorResponse &&
                        error.status === 400) {
                        return of({});
                    }
                    else {
                        return throwError(error);
                    }
                }));
            }
            else {
                return of({});
            }
        }), switchMap((page) => this.mergeDefaultPageStructure(pageContext, page)));
    }
    /**
     *
     * Merge default page structure to the given `CmsStructureModel`.
     * This is beneficial for a fast setup of the UI without necessary
     * fine-grained CMS setup.
     */
    mergeDefaultPageStructure(pageContext, pageStructure) {
        return this.cmsStructureConfigService.mergePageStructure(pageContext.id, pageStructure);
    }
}
CmsPageConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsPageConnector_Factory() { return new CmsPageConnector(i0.ɵɵinject(i1.CmsPageAdapter), i0.ɵɵinject(i2.CmsStructureConfigService)); }, token: CmsPageConnector, providedIn: "root" });
CmsPageConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CmsPageConnector.ctorParameters = () => [
    { type: CmsPageAdapter },
    { type: CmsStructureConfigService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuY29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvY21zL2Nvbm5lY3RvcnMvcGFnZS9jbXMtcGFnZS5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3ZELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUtwRCxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLFlBQ1ksY0FBOEIsRUFDOUIseUJBQW9EO1FBRHBELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBQzdELENBQUM7SUFFSjs7OztPQUlHO0lBQ0gsR0FBRyxDQUFDLFdBQXdCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QjthQUNsQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO2FBQ25DLElBQUksQ0FDSCxTQUFTLENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUNuQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDL0MsVUFBVSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ25CLElBQ0UsS0FBSyxZQUFZLGlCQUFpQjt3QkFDbEMsS0FBSyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQ3BCO3dCQUNBLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUNmO3lCQUFNO3dCQUNMLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUMxQjtnQkFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDZjtRQUNILENBQUMsQ0FBQyxFQUNGLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUN2RSxDQUFDO0lBQ04sQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0sseUJBQXlCLENBQy9CLFdBQXdCLEVBQ3hCLGFBQWdDO1FBRWhDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGtCQUFrQixDQUN0RCxXQUFXLENBQUMsRUFBRSxFQUNkLGFBQWEsQ0FDZCxDQUFDO0lBQ0osQ0FBQzs7OztZQXRERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQUpRLGNBQWM7WUFEZCx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ntcy1zdHJ1Y3R1cmUtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zUGFnZUFkYXB0ZXIgfSBmcm9tICcuL2Ntcy1wYWdlLmFkYXB0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zUGFnZUNvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNQYWdlQWRhcHRlcjogQ21zUGFnZUFkYXB0ZXIsXG4gICAgcHJvdGVjdGVkIGNtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2U6IENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgd2l0aCB0aGUgcGFnZSBzdHJ1Y3R1cmUuIFRoZSBwYWdlIHN0cnVjdHVyZSBpc1xuICAgKiB0eXBpY2FsbHkgbG9hZGVkIGZyb20gYSBiYWNrZW5kLCBidXQgY2FuIGFsc28gYmUgcmV0dXJuZWQgZnJvbSBzdGF0aWNcbiAgICogY29uZmlndXJhdGlvbiAoc2VlIGBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlYCkuXG4gICAqL1xuICBnZXQocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxDbXNTdHJ1Y3R1cmVNb2RlbD4ge1xuICAgIHJldHVybiB0aGlzLmNtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2VcbiAgICAgIC5zaG91bGRJZ25vcmVCYWNrZW5kKHBhZ2VDb250ZXh0LmlkKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgobG9hZEZyb21Db25maWcpID0+IHtcbiAgICAgICAgICBpZiAoIWxvYWRGcm9tQ29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbXNQYWdlQWRhcHRlci5sb2FkKHBhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UgJiZcbiAgICAgICAgICAgICAgICAgIGVycm9yLnN0YXR1cyA9PT0gNDAwXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gb2Yoe30pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9mKHt9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBzd2l0Y2hNYXAoKHBhZ2UpID0+IHRoaXMubWVyZ2VEZWZhdWx0UGFnZVN0cnVjdHVyZShwYWdlQ29udGV4dCwgcGFnZSkpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIE1lcmdlIGRlZmF1bHQgcGFnZSBzdHJ1Y3R1cmUgdG8gdGhlIGdpdmVuIGBDbXNTdHJ1Y3R1cmVNb2RlbGAuXG4gICAqIFRoaXMgaXMgYmVuZWZpY2lhbCBmb3IgYSBmYXN0IHNldHVwIG9mIHRoZSBVSSB3aXRob3V0IG5lY2Vzc2FyeVxuICAgKiBmaW5lLWdyYWluZWQgQ01TIHNldHVwLlxuICAgKi9cbiAgcHJpdmF0ZSBtZXJnZURlZmF1bHRQYWdlU3RydWN0dXJlKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBwYWdlU3RydWN0dXJlOiBDbXNTdHJ1Y3R1cmVNb2RlbFxuICApOiBPYnNlcnZhYmxlPENtc1N0cnVjdHVyZU1vZGVsPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zU3RydWN0dXJlQ29uZmlnU2VydmljZS5tZXJnZVBhZ2VTdHJ1Y3R1cmUoXG4gICAgICBwYWdlQ29udGV4dC5pZCxcbiAgICAgIHBhZ2VTdHJ1Y3R1cmVcbiAgICApO1xuICB9XG59XG4iXX0=
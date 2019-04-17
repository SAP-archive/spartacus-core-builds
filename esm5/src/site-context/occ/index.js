/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SiteContextInterceptor } from './site-context.interceptor';
export { OccSiteService } from './occ-site.service';
export { SiteContextOccModule } from './site-context-occ.module';
export { SiteContextInterceptor } from './site-context.interceptor';
/** @type {?} */
export var interceptors = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: SiteContextInterceptor,
        multi: true,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L29jYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFekQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFcEUsK0JBQWMsb0JBQW9CLENBQUM7QUFDbkMscUNBQWMsMkJBQTJCLENBQUM7QUFDMUMsdUNBQWMsNEJBQTRCLENBQUM7O0FBRTNDLE1BQU0sS0FBTyxZQUFZLEdBQWU7SUFDdEM7UUFDRSxPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLFFBQVEsRUFBRSxzQkFBc0I7UUFDaEMsS0FBSyxFQUFFLElBQUk7S0FDWjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBTaXRlQ29udGV4dEludGVyY2VwdG9yIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQuaW50ZXJjZXB0b3InO1xuXG5leHBvcnQgKiBmcm9tICcuL29jYy1zaXRlLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zaXRlLWNvbnRleHQtb2NjLm1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL3NpdGUtY29udGV4dC5pbnRlcmNlcHRvcic7XG5cbmV4cG9ydCBjb25zdCBpbnRlcmNlcHRvcnM6IFByb3ZpZGVyW10gPSBbXG4gIHtcbiAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICB1c2VDbGFzczogU2l0ZUNvbnRleHRJbnRlcmNlcHRvcixcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbl07XG4iXX0=
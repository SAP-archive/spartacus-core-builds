/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CmsTicketInterceptor } from './cms-ticket.interceptor';
/** @type {?} */
export var interceptors = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: CmsTicketInterceptor,
        multi: true,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc21hcnQtZWRpdC9odHRwLWludGVyY2VwdG9ycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRWhFLE1BQU0sS0FBTyxZQUFZLEdBQWU7SUFDdEM7UUFDRSxPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsS0FBSyxFQUFFLElBQUk7S0FDWjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBDbXNUaWNrZXRJbnRlcmNlcHRvciB9IGZyb20gJy4vY21zLXRpY2tldC5pbnRlcmNlcHRvcic7XG5cbmV4cG9ydCBjb25zdCBpbnRlcmNlcHRvcnM6IFByb3ZpZGVyW10gPSBbXG4gIHtcbiAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICB1c2VDbGFzczogQ21zVGlja2V0SW50ZXJjZXB0b3IsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG5dO1xuIl19
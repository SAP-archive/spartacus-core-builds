/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SiteContextInterceptor } from './site-context.interceptor';
import { SiteAdapter } from '../connectors/site.adapter';
import { OccSiteAdapter } from './occ-site.adapter';
export { SiteContextOccModule } from './site-context-occ.module';
export { SiteContextInterceptor } from './site-context.interceptor';
export { OccSiteAdapter } from './occ-site.adapter';
/** @type {?} */
export const interceptors = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: SiteContextInterceptor,
        multi: true,
    },
    {
        provide: SiteAdapter,
        useClass: OccSiteAdapter,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L29jYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFekQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxxQ0FBYywyQkFBMkIsQ0FBQztBQUMxQyx1Q0FBYyw0QkFBNEIsQ0FBQztBQUMzQywrQkFBYyxvQkFBb0IsQ0FBQzs7QUFFbkMsTUFBTSxPQUFPLFlBQVksR0FBZTtJQUN0QztRQUNFLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQyxLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsV0FBVztRQUNwQixRQUFRLEVBQUUsY0FBYztLQUN6QjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBTaXRlQ29udGV4dEludGVyY2VwdG9yIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgU2l0ZUFkYXB0ZXIgfSBmcm9tICcuLi9jb25uZWN0b3JzL3NpdGUuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NTaXRlQWRhcHRlciB9IGZyb20gJy4vb2NjLXNpdGUuYWRhcHRlcic7XG5cbmV4cG9ydCAqIGZyb20gJy4vc2l0ZS1jb250ZXh0LW9jYy5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zaXRlLWNvbnRleHQuaW50ZXJjZXB0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9vY2Mtc2l0ZS5hZGFwdGVyJztcblxuZXhwb3J0IGNvbnN0IGludGVyY2VwdG9yczogUHJvdmlkZXJbXSA9IFtcbiAge1xuICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgIHVzZUNsYXNzOiBTaXRlQ29udGV4dEludGVyY2VwdG9yLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogU2l0ZUFkYXB0ZXIsXG4gICAgdXNlQ2xhc3M6IE9jY1NpdGVBZGFwdGVyLFxuICB9LFxuXTtcbiJdfQ==
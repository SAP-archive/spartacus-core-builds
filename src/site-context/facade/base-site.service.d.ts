import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { BaseSite } from '../../model/misc.model';
import { SiteContextConfig } from '../config/site-context-config';
import { StateWithSiteContext } from '../store/state';
import { SiteContext } from './site-context.interface';
import * as ɵngcc0 from '@angular/core';
export declare class BaseSiteService implements SiteContext<string> {
    protected store: Store<StateWithSiteContext>;
    protected config: SiteContextConfig;
    constructor(store: Store<StateWithSiteContext>, config: SiteContextConfig);
    /**
     * Represents the current baseSite uid.
     */
    getActive(): Observable<string>;
    /**
     * We currently don't support switching baseSite at run time
     */
    getAll(): Observable<string[]>;
    setActive(baseSite: string): Subscription;
    /**
     * Initializes the active baseSite.
     */
    initialize(): void;
    /**
     * Get the base site details data
     */
    getBaseSiteData(): Observable<BaseSite>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseSiteService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<BaseSiteService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiYmFzZS1zaXRlLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBCYXNlU2l0ZSB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhTaXRlQ29udGV4dCB9IGZyb20gJy4uL3N0b3JlL3N0YXRlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0IH0gZnJvbSAnLi9zaXRlLWNvbnRleHQuaW50ZXJmYWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEJhc2VTaXRlU2VydmljZSBpbXBsZW1lbnRzIFNpdGVDb250ZXh0PHN0cmluZz4ge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoU2l0ZUNvbnRleHQ+O1xuICAgIHByb3RlY3RlZCBjb25maWc6IFNpdGVDb250ZXh0Q29uZmlnO1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhTaXRlQ29udGV4dD4sIGNvbmZpZzogU2l0ZUNvbnRleHRDb25maWcpO1xuICAgIC8qKlxuICAgICAqIFJlcHJlc2VudHMgdGhlIGN1cnJlbnQgYmFzZVNpdGUgdWlkLlxuICAgICAqL1xuICAgIGdldEFjdGl2ZSgpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgLyoqXG4gICAgICogV2UgY3VycmVudGx5IGRvbid0IHN1cHBvcnQgc3dpdGNoaW5nIGJhc2VTaXRlIGF0IHJ1biB0aW1lXG4gICAgICovXG4gICAgZ2V0QWxsKCk6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuICAgIHNldEFjdGl2ZShiYXNlU2l0ZTogc3RyaW5nKTogU3Vic2NyaXB0aW9uO1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHRoZSBhY3RpdmUgYmFzZVNpdGUuXG4gICAgICovXG4gICAgaW5pdGlhbGl6ZSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYmFzZSBzaXRlIGRldGFpbHMgZGF0YVxuICAgICAqL1xuICAgIGdldEJhc2VTaXRlRGF0YSgpOiBPYnNlcnZhYmxlPEJhc2VTaXRlPjtcbn1cbiJdfQ==
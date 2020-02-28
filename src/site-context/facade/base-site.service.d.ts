import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { BaseSite } from '../../model/misc.model';
import { StateWithSiteContext } from '../store/state';
import { SiteContext } from './site-context.interface';
import { SiteContextConfig } from '../config/site-context-config';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseSiteService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<BaseSiteService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiYmFzZS1zaXRlLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQmFzZVNpdGUgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aFNpdGVDb250ZXh0IH0gZnJvbSAnLi4vc3RvcmUvc3RhdGUnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHQgfSBmcm9tICcuL3NpdGUtY29udGV4dC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBCYXNlU2l0ZVNlcnZpY2UgaW1wbGVtZW50cyBTaXRlQ29udGV4dDxzdHJpbmc+IHtcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFNpdGVDb250ZXh0PjtcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBTaXRlQ29udGV4dENvbmZpZztcbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoU2l0ZUNvbnRleHQ+LCBjb25maWc6IFNpdGVDb250ZXh0Q29uZmlnKTtcbiAgICAvKipcbiAgICAgKiBSZXByZXNlbnRzIHRoZSBjdXJyZW50IGJhc2VTaXRlIHVpZC5cbiAgICAgKi9cbiAgICBnZXRBY3RpdmUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIC8qKlxuICAgICAqIFdlIGN1cnJlbnRseSBkb24ndCBzdXBwb3J0IHN3aXRjaGluZyBiYXNlU2l0ZSBhdCBydW4gdGltZVxuICAgICAqL1xuICAgIGdldEFsbCgpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcbiAgICBzZXRBY3RpdmUoYmFzZVNpdGU6IHN0cmluZyk6IFN1YnNjcmlwdGlvbjtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgYWN0aXZlIGJhc2VTaXRlLlxuICAgICAqL1xuICAgIGluaXRpYWxpemUoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGJhc2Ugc2l0ZSBkZXRhaWxzIGRhdGFcbiAgICAgKi9cbiAgICBnZXRCYXNlU2l0ZURhdGEoKTogT2JzZXJ2YWJsZTxCYXNlU2l0ZT47XG59XG4iXX0=
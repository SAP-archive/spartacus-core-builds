/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const LOAD_BASE_SITE = '[Site-context] Load BaseSite';
/** @type {?} */
export const LOAD_BASE_SITE_FAIL = '[Site-context] Load BaseSite Fail';
/** @type {?} */
export const LOAD_BASE_SITE_SUCCESS = '[Site-context] Load BaseSite Success';
/** @type {?} */
export const SET_ACTIVE_BASE_SITE = '[Site-context] Set Active BaseSite';
/** @type {?} */
export const BASE_SITE_CHANGE = '[Site-context] BaseSite Change';
export class LoadBaseSite {
    constructor() {
        this.type = LOAD_BASE_SITE;
    }
}
if (false) {
    /** @type {?} */
    LoadBaseSite.prototype.type;
}
export class LoadBaseSiteFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_BASE_SITE_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadBaseSiteFail.prototype.type;
    /** @type {?} */
    LoadBaseSiteFail.prototype.payload;
}
export class LoadBaseSiteSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_BASE_SITE_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadBaseSiteSuccess.prototype.type;
    /** @type {?} */
    LoadBaseSiteSuccess.prototype.payload;
}
export class SetActiveBaseSite {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_BASE_SITE;
    }
}
if (false) {
    /** @type {?} */
    SetActiveBaseSite.prototype.type;
    /** @type {?} */
    SetActiveBaseSite.prototype.payload;
}
export class BaseSiteChange {
    constructor() {
        this.type = BASE_SITE_CHANGE;
    }
}
if (false) {
    /** @type {?} */
    BaseSiteChange.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9iYXNlLXNpdGUuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsTUFBTSxPQUFPLGNBQWMsR0FBRyw4QkFBOEI7O0FBQzVELE1BQU0sT0FBTyxtQkFBbUIsR0FBRyxtQ0FBbUM7O0FBQ3RFLE1BQU0sT0FBTyxzQkFBc0IsR0FBRyxzQ0FBc0M7O0FBQzVFLE1BQU0sT0FBTyxvQkFBb0IsR0FBRyxvQ0FBb0M7O0FBQ3hFLE1BQU0sT0FBTyxnQkFBZ0IsR0FBRyxnQ0FBZ0M7QUFFaEUsTUFBTSxPQUFPLFlBQVk7SUFBekI7UUFDVyxTQUFJLEdBQUcsY0FBYyxDQUFDO0lBQ2pDLENBQUM7Q0FBQTs7O0lBREMsNEJBQStCOztBQUdqQyxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBRTNCLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxtQkFBbUIsQ0FBQztJQUNGLENBQUM7Q0FDcEM7OztJQUZDLGdDQUFvQzs7SUFDeEIsbUNBQW1COztBQUdqQyxNQUFNLE9BQU8sbUJBQW1COzs7O0lBRTlCLFlBQW1CLE9BQWlCO1FBQWpCLFlBQU8sR0FBUCxPQUFPLENBQVU7UUFEM0IsU0FBSSxHQUFHLHNCQUFzQixDQUFDO0lBQ0EsQ0FBQztDQUN6Qzs7O0lBRkMsbUNBQXVDOztJQUMzQixzQ0FBd0I7O0FBR3RDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFFNUIsWUFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLG9CQUFvQixDQUFDO0lBQ0EsQ0FBQztDQUN2Qzs7O0lBRkMsaUNBQXFDOztJQUN6QixvQ0FBc0I7O0FBR3BDLE1BQU0sT0FBTyxjQUFjO0lBQTNCO1FBQ1csU0FBSSxHQUFHLGdCQUFnQixDQUFDO0lBQ25DLENBQUM7Q0FBQTs7O0lBREMsOEJBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQmFzZVNpdGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IExPQURfQkFTRV9TSVRFID0gJ1tTaXRlLWNvbnRleHRdIExvYWQgQmFzZVNpdGUnO1xuZXhwb3J0IGNvbnN0IExPQURfQkFTRV9TSVRFX0ZBSUwgPSAnW1NpdGUtY29udGV4dF0gTG9hZCBCYXNlU2l0ZSBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0JBU0VfU0lURV9TVUNDRVNTID0gJ1tTaXRlLWNvbnRleHRdIExvYWQgQmFzZVNpdGUgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgU0VUX0FDVElWRV9CQVNFX1NJVEUgPSAnW1NpdGUtY29udGV4dF0gU2V0IEFjdGl2ZSBCYXNlU2l0ZSc7XG5leHBvcnQgY29uc3QgQkFTRV9TSVRFX0NIQU5HRSA9ICdbU2l0ZS1jb250ZXh0XSBCYXNlU2l0ZSBDaGFuZ2UnO1xuXG5leHBvcnQgY2xhc3MgTG9hZEJhc2VTaXRlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQkFTRV9TSVRFO1xufVxuXG5leHBvcnQgY2xhc3MgTG9hZEJhc2VTaXRlRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0JBU0VfU0lURV9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZEJhc2VTaXRlU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0JBU0VfU0lURV9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQmFzZVNpdGUpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRBY3RpdmVCYXNlU2l0ZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfQUNUSVZFX0JBU0VfU0lURTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIEJhc2VTaXRlQ2hhbmdlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEJBU0VfU0lURV9DSEFOR0U7XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgQmFzZVNpdGVBY3Rpb24gPVxuICB8IExvYWRCYXNlU2l0ZVxuICB8IExvYWRCYXNlU2l0ZUZhaWxcbiAgfCBMb2FkQmFzZVNpdGVTdWNjZXNzXG4gIHwgU2V0QWN0aXZlQmFzZVNpdGVcbiAgfCBCYXNlU2l0ZUNoYW5nZTtcbiJdfQ==
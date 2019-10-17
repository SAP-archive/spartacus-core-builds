/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StateLoaderActions } from '../../../state/utils/index';
import { ANONYMOUS_CONSENTS } from '../anonymous-consents-state';
/** @type {?} */
export const LOAD_ANONYMOUS_CONSENT_TEMPLATES = '[Anonymous Consents] Load Anonymous Consent Templates';
/** @type {?} */
export const LOAD_ANONYMOUS_CONSENT_TEMPLATES_SUCCESS = '[Anonymous Consents] Load Anonymous Consent Templates Success';
/** @type {?} */
export const LOAD_ANONYMOUS_CONSENT_TEMPLATES_FAIL = '[Anonymous Consents] Load Anonymous Consent Templates Fail';
/** @type {?} */
export const RESET_LOAD_ANONYMOUS_CONSENT_TEMPLATES = '[Anonymous Consents] Reset Load Anonymous Consent Templates';
/** @type {?} */
export const GET_ALL_ANONYMOUS_CONSENTS = '[Anonymous Consents] Get All Anonymous Consents';
/** @type {?} */
export const GET_ANONYMOUS_CONSENT = '[Anonymous Consents] Get Anonymous Consent';
/** @type {?} */
export const SET_ANONYMOUS_CONSENTS = '[Anonymous Consents] Set Anonymous Consents';
/** @type {?} */
export const GIVE_ANONYMOUS_CONSENT = '[Anonymous Consents] Give Anonymous Consent';
/** @type {?} */
export const WITHDRAW_ANONYMOUS_CONSENT = '[Anonymous Consents] Withdraw Anonymous Consent';
/** @type {?} */
export const TOGGLE_ANONYMOUS_CONSENTS_BANNER_VISIBILITY = '[Anonymous Consents] Toggle Anonymous Consents Banner Visibility';
/** @type {?} */
export const TOGGLE_ANONYMOUS_CONSENT_TEMPLATES_UPDATED = '[Anonymous Consents] Anonymous Consent Templates Updated';
export class LoadAnonymousConsentTemplates extends StateLoaderActions.LoaderLoadAction {
    constructor() {
        super(ANONYMOUS_CONSENTS);
        this.type = LOAD_ANONYMOUS_CONSENT_TEMPLATES;
    }
}
if (false) {
    /** @type {?} */
    LoadAnonymousConsentTemplates.prototype.type;
}
export class LoadAnonymousConsentTemplatesSuccess extends StateLoaderActions.LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(ANONYMOUS_CONSENTS);
        this.payload = payload;
        this.type = LOAD_ANONYMOUS_CONSENT_TEMPLATES_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadAnonymousConsentTemplatesSuccess.prototype.type;
    /** @type {?} */
    LoadAnonymousConsentTemplatesSuccess.prototype.payload;
}
export class LoadAnonymousConsentTemplatesFail extends StateLoaderActions.LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(ANONYMOUS_CONSENTS, payload);
        this.type = LOAD_ANONYMOUS_CONSENT_TEMPLATES_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadAnonymousConsentTemplatesFail.prototype.type;
}
export class ResetLoadAnonymousConsentTemplates extends StateLoaderActions.LoaderResetAction {
    constructor() {
        super(ANONYMOUS_CONSENTS);
        this.type = RESET_LOAD_ANONYMOUS_CONSENT_TEMPLATES;
    }
}
if (false) {
    /** @type {?} */
    ResetLoadAnonymousConsentTemplates.prototype.type;
}
export class GetAllAnonymousConsents {
    constructor() {
        this.type = GET_ALL_ANONYMOUS_CONSENTS;
    }
}
if (false) {
    /** @type {?} */
    GetAllAnonymousConsents.prototype.type;
}
export class GetAnonymousConsent {
    /**
     * @param {?} templateCode
     */
    constructor(templateCode) {
        this.templateCode = templateCode;
        this.type = GET_ANONYMOUS_CONSENT;
    }
}
if (false) {
    /** @type {?} */
    GetAnonymousConsent.prototype.type;
    /** @type {?} */
    GetAnonymousConsent.prototype.templateCode;
}
export class SetAnonymousConsents {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ANONYMOUS_CONSENTS;
    }
}
if (false) {
    /** @type {?} */
    SetAnonymousConsents.prototype.type;
    /** @type {?} */
    SetAnonymousConsents.prototype.payload;
}
export class GiveAnonymousConsent {
    /**
     * @param {?} templateCode
     */
    constructor(templateCode) {
        this.templateCode = templateCode;
        this.type = GIVE_ANONYMOUS_CONSENT;
    }
}
if (false) {
    /** @type {?} */
    GiveAnonymousConsent.prototype.type;
    /** @type {?} */
    GiveAnonymousConsent.prototype.templateCode;
}
export class WithdrawAnonymousConsent {
    /**
     * @param {?} templateCode
     */
    constructor(templateCode) {
        this.templateCode = templateCode;
        this.type = WITHDRAW_ANONYMOUS_CONSENT;
    }
}
if (false) {
    /** @type {?} */
    WithdrawAnonymousConsent.prototype.type;
    /** @type {?} */
    WithdrawAnonymousConsent.prototype.templateCode;
}
export class ToggleAnonymousConsentsBannerVisibility {
    /**
     * @param {?} visible
     */
    constructor(visible) {
        this.visible = visible;
        this.type = TOGGLE_ANONYMOUS_CONSENTS_BANNER_VISIBILITY;
    }
}
if (false) {
    /** @type {?} */
    ToggleAnonymousConsentsBannerVisibility.prototype.type;
    /** @type {?} */
    ToggleAnonymousConsentsBannerVisibility.prototype.visible;
}
export class ToggleAnonymousConsentTemplatesUpdated {
    /**
     * @param {?} updated
     */
    constructor(updated) {
        this.updated = updated;
        this.type = TOGGLE_ANONYMOUS_CONSENT_TEMPLATES_UPDATED;
    }
}
if (false) {
    /** @type {?} */
    ToggleAnonymousConsentTemplatesUpdated.prototype.type;
    /** @type {?} */
    ToggleAnonymousConsentTemplatesUpdated.prototype.updated;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvc3RvcmUvYWN0aW9ucy9hbm9ueW1vdXMtY29uc2VudHMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFFakUsTUFBTSxPQUFPLGdDQUFnQyxHQUMzQyx1REFBdUQ7O0FBQ3pELE1BQU0sT0FBTyx3Q0FBd0MsR0FDbkQsK0RBQStEOztBQUNqRSxNQUFNLE9BQU8scUNBQXFDLEdBQ2hELDREQUE0RDs7QUFDOUQsTUFBTSxPQUFPLHNDQUFzQyxHQUNqRCw2REFBNkQ7O0FBRS9ELE1BQU0sT0FBTywwQkFBMEIsR0FDckMsaURBQWlEOztBQUNuRCxNQUFNLE9BQU8scUJBQXFCLEdBQ2hDLDRDQUE0Qzs7QUFDOUMsTUFBTSxPQUFPLHNCQUFzQixHQUNqQyw2Q0FBNkM7O0FBQy9DLE1BQU0sT0FBTyxzQkFBc0IsR0FDakMsNkNBQTZDOztBQUMvQyxNQUFNLE9BQU8sMEJBQTBCLEdBQ3JDLGlEQUFpRDs7QUFFbkQsTUFBTSxPQUFPLDJDQUEyQyxHQUN0RCxrRUFBa0U7O0FBQ3BFLE1BQU0sT0FBTywwQ0FBMEMsR0FDckQsMERBQTBEO0FBRTVELE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxrQkFBa0IsQ0FBQyxnQkFBZ0I7SUFFcEY7UUFDRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUZuQixTQUFJLEdBQUcsZ0NBQWdDLENBQUM7SUFHakQsQ0FBQztDQUNGOzs7SUFKQyw2Q0FBaUQ7O0FBTW5ELE1BQU0sT0FBTyxvQ0FBcUMsU0FBUSxrQkFBa0IsQ0FBQyxtQkFBbUI7Ozs7SUFFOUYsWUFBbUIsT0FBMEI7UUFDM0MsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFEVCxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQURwQyxTQUFJLEdBQUcsd0NBQXdDLENBQUM7SUFHekQsQ0FBQztDQUNGOzs7SUFKQyxvREFBeUQ7O0lBQzdDLHVEQUFpQzs7QUFJL0MsTUFBTSxPQUFPLGlDQUFrQyxTQUFRLGtCQUFrQixDQUFDLGdCQUFnQjs7OztJQUV4RixZQUFZLE9BQVk7UUFDdEIsS0FBSyxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRjVCLFNBQUksR0FBRyxxQ0FBcUMsQ0FBQztJQUd0RCxDQUFDO0NBQ0Y7OztJQUpDLGlEQUFzRDs7QUFNeEQsTUFBTSxPQUFPLGtDQUFtQyxTQUFRLGtCQUFrQixDQUFDLGlCQUFpQjtJQUUxRjtRQUNFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRm5CLFNBQUksR0FBRyxzQ0FBc0MsQ0FBQztJQUd2RCxDQUFDO0NBQ0Y7OztJQUpDLGtEQUF1RDs7QUFNekQsTUFBTSxPQUFPLHVCQUF1QjtJQUVsQztRQURTLFNBQUksR0FBRywwQkFBMEIsQ0FBQztJQUM1QixDQUFDO0NBQ2pCOzs7SUFGQyx1Q0FBMkM7O0FBSTdDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFFOUIsWUFBbUIsWUFBb0I7UUFBcEIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFEOUIsU0FBSSxHQUFHLHFCQUFxQixDQUFDO0lBQ0ksQ0FBQztDQUM1Qzs7O0lBRkMsbUNBQXNDOztJQUMxQiwyQ0FBMkI7O0FBR3pDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFFL0IsWUFBbUIsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFEckMsU0FBSSxHQUFHLHNCQUFzQixDQUFDO0lBQ1UsQ0FBQztDQUNuRDs7O0lBRkMsb0NBQXVDOztJQUMzQix1Q0FBa0M7O0FBR2hELE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFFL0IsWUFBbUIsWUFBb0I7UUFBcEIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFEOUIsU0FBSSxHQUFHLHNCQUFzQixDQUFDO0lBQ0csQ0FBQztDQUM1Qzs7O0lBRkMsb0NBQXVDOztJQUMzQiw0Q0FBMkI7O0FBR3pDLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFFbkMsWUFBbUIsWUFBb0I7UUFBcEIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFEOUIsU0FBSSxHQUFHLDBCQUEwQixDQUFDO0lBQ0QsQ0FBQztDQUM1Qzs7O0lBRkMsd0NBQTJDOztJQUMvQixnREFBMkI7O0FBR3pDLE1BQU0sT0FBTyx1Q0FBdUM7Ozs7SUFFbEQsWUFBbUIsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUQxQixTQUFJLEdBQUcsMkNBQTJDLENBQUM7SUFDdEIsQ0FBQztDQUN4Qzs7O0lBRkMsdURBQTREOztJQUNoRCwwREFBdUI7O0FBR3JDLE1BQU0sT0FBTyxzQ0FBc0M7Ozs7SUFFakQsWUFBbUIsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUQxQixTQUFJLEdBQUcsMENBQTBDLENBQUM7SUFDckIsQ0FBQztDQUN4Qzs7O0lBRkMsc0RBQTJEOztJQUMvQyx5REFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBbm9ueW1vdXNDb25zZW50LFxuICBDb25zZW50VGVtcGxhdGUsXG59IGZyb20gJy4uLy4uLy4uL21vZGVsL2NvbnNlbnQubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVMb2FkZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgQU5PTllNT1VTX0NPTlNFTlRTIH0gZnJvbSAnLi4vYW5vbnltb3VzLWNvbnNlbnRzLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IExPQURfQU5PTllNT1VTX0NPTlNFTlRfVEVNUExBVEVTID1cbiAgJ1tBbm9ueW1vdXMgQ29uc2VudHNdIExvYWQgQW5vbnltb3VzIENvbnNlbnQgVGVtcGxhdGVzJztcbmV4cG9ydCBjb25zdCBMT0FEX0FOT05ZTU9VU19DT05TRU5UX1RFTVBMQVRFU19TVUNDRVNTID1cbiAgJ1tBbm9ueW1vdXMgQ29uc2VudHNdIExvYWQgQW5vbnltb3VzIENvbnNlbnQgVGVtcGxhdGVzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IExPQURfQU5PTllNT1VTX0NPTlNFTlRfVEVNUExBVEVTX0ZBSUwgPVxuICAnW0Fub255bW91cyBDb25zZW50c10gTG9hZCBBbm9ueW1vdXMgQ29uc2VudCBUZW1wbGF0ZXMgRmFpbCc7XG5leHBvcnQgY29uc3QgUkVTRVRfTE9BRF9BTk9OWU1PVVNfQ09OU0VOVF9URU1QTEFURVMgPVxuICAnW0Fub255bW91cyBDb25zZW50c10gUmVzZXQgTG9hZCBBbm9ueW1vdXMgQ29uc2VudCBUZW1wbGF0ZXMnO1xuXG5leHBvcnQgY29uc3QgR0VUX0FMTF9BTk9OWU1PVVNfQ09OU0VOVFMgPVxuICAnW0Fub255bW91cyBDb25zZW50c10gR2V0IEFsbCBBbm9ueW1vdXMgQ29uc2VudHMnO1xuZXhwb3J0IGNvbnN0IEdFVF9BTk9OWU1PVVNfQ09OU0VOVCA9XG4gICdbQW5vbnltb3VzIENvbnNlbnRzXSBHZXQgQW5vbnltb3VzIENvbnNlbnQnO1xuZXhwb3J0IGNvbnN0IFNFVF9BTk9OWU1PVVNfQ09OU0VOVFMgPVxuICAnW0Fub255bW91cyBDb25zZW50c10gU2V0IEFub255bW91cyBDb25zZW50cyc7XG5leHBvcnQgY29uc3QgR0lWRV9BTk9OWU1PVVNfQ09OU0VOVCA9XG4gICdbQW5vbnltb3VzIENvbnNlbnRzXSBHaXZlIEFub255bW91cyBDb25zZW50JztcbmV4cG9ydCBjb25zdCBXSVRIRFJBV19BTk9OWU1PVVNfQ09OU0VOVCA9XG4gICdbQW5vbnltb3VzIENvbnNlbnRzXSBXaXRoZHJhdyBBbm9ueW1vdXMgQ29uc2VudCc7XG5cbmV4cG9ydCBjb25zdCBUT0dHTEVfQU5PTllNT1VTX0NPTlNFTlRTX0JBTk5FUl9WSVNJQklMSVRZID1cbiAgJ1tBbm9ueW1vdXMgQ29uc2VudHNdIFRvZ2dsZSBBbm9ueW1vdXMgQ29uc2VudHMgQmFubmVyIFZpc2liaWxpdHknO1xuZXhwb3J0IGNvbnN0IFRPR0dMRV9BTk9OWU1PVVNfQ09OU0VOVF9URU1QTEFURVNfVVBEQVRFRCA9XG4gICdbQW5vbnltb3VzIENvbnNlbnRzXSBBbm9ueW1vdXMgQ29uc2VudCBUZW1wbGF0ZXMgVXBkYXRlZCc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQU5PTllNT1VTX0NPTlNFTlRfVEVNUExBVEVTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihBTk9OWU1PVVNfQ09OU0VOVFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1N1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0FOT05ZTU9VU19DT05TRU5UX1RFTVBMQVRFU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ29uc2VudFRlbXBsYXRlW10pIHtcbiAgICBzdXBlcihBTk9OWU1PVVNfQ09OU0VOVFMpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNGYWlsIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9BTk9OWU1PVVNfQ09OU0VOVF9URU1QTEFURVNfRkFJTDtcbiAgY29uc3RydWN0b3IocGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQU5PTllNT1VTX0NPTlNFTlRTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRMb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9MT0FEX0FOT05ZTU9VU19DT05TRU5UX1RFTVBMQVRFUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoQU5PTllNT1VTX0NPTlNFTlRTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2V0QWxsQW5vbnltb3VzQ29uc2VudHMge1xuICByZWFkb25seSB0eXBlID0gR0VUX0FMTF9BTk9OWU1PVVNfQ09OU0VOVFM7XG4gIGNvbnN0cnVjdG9yKCkge31cbn1cblxuZXhwb3J0IGNsYXNzIEdldEFub255bW91c0NvbnNlbnQge1xuICByZWFkb25seSB0eXBlID0gR0VUX0FOT05ZTU9VU19DT05TRU5UO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVDb2RlOiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRBbm9ueW1vdXNDb25zZW50cyB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfQU5PTllNT1VTX0NPTlNFTlRTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQW5vbnltb3VzQ29uc2VudFtdKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgR2l2ZUFub255bW91c0NvbnNlbnQge1xuICByZWFkb25seSB0eXBlID0gR0lWRV9BTk9OWU1PVVNfQ09OU0VOVDtcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlQ29kZTogc3RyaW5nKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgV2l0aGRyYXdBbm9ueW1vdXNDb25zZW50IHtcbiAgcmVhZG9ubHkgdHlwZSA9IFdJVEhEUkFXX0FOT05ZTU9VU19DT05TRU5UO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVDb2RlOiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2dnbGVBbm9ueW1vdXNDb25zZW50c0Jhbm5lclZpc2liaWxpdHkge1xuICByZWFkb25seSB0eXBlID0gVE9HR0xFX0FOT05ZTU9VU19DT05TRU5UU19CQU5ORVJfVklTSUJJTElUWTtcbiAgY29uc3RydWN0b3IocHVibGljIHZpc2libGU6IGJvb2xlYW4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2dnbGVBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzVXBkYXRlZCB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUT0dHTEVfQU5PTllNT1VTX0NPTlNFTlRfVEVNUExBVEVTX1VQREFURUQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB1cGRhdGVkOiBib29sZWFuKSB7fVxufVxuXG5leHBvcnQgdHlwZSBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMgPVxuICB8IExvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzXG4gIHwgTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNTdWNjZXNzXG4gIHwgTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNGYWlsXG4gIHwgUmVzZXRMb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1xuICB8IEdldEFsbEFub255bW91c0NvbnNlbnRzXG4gIHwgU2V0QW5vbnltb3VzQ29uc2VudHNcbiAgfCBHZXRBbm9ueW1vdXNDb25zZW50XG4gIHwgR2l2ZUFub255bW91c0NvbnNlbnRcbiAgfCBXaXRoZHJhd0Fub255bW91c0NvbnNlbnRcbiAgfCBUb2dnbGVBbm9ueW1vdXNDb25zZW50c0Jhbm5lclZpc2liaWxpdHlcbiAgfCBUb2dnbGVBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzVXBkYXRlZDtcbiJdfQ==